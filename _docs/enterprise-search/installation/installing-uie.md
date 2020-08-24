---
title: Installing UIE
layout: docs
category: Enterprise Search
---
# Installing UIE  

## Install Enterprise Index  

[Solr](https://lucene.apache.org/solr/guide/) is the fast open source search platform built on Apache Lucene™ that provides scalable indexing and search, as well as faceting, hit highlighting and advanced analysis/tokenization capabilities. Solr and Lucene are managed by the [Apache Software Foundation](http://www.apache.org/) 

It can use to implement full-text search, faceted search, and real-time indexing within Unity application. It is required for Unity features such as Faceted Search and Case Management tabs made available in Unity 7.


### Install Solr 

Each Solr installation zip file contains a complete Solr platform package. To install it, simply extract the files from the zip. 

- Create a folder on the installation server `<solr_install>`: 

	![uie-folder](../images/installing-uie/image11.png) 
	
- Extract all files from the downloaded zip (e.g. solr-8.5.1.zip) to the `<solr_install>` folder: 

	![uie-folder](../images/installing-uie/image12.png) 
	
- Set `solr.jetty.request.header.size` setting to 65536 from `<solr_install>/server/etc/jetty.xml`: 

	![uie-folder](../images/installing-uie/image13.png) 
	
	![uie-folder](../images/installing-uie/image14.png) 
	
- Open Command Prompt and start Solr server using command `solr start`:

	![uie-folder](../images/installing-uie/image15.png) 	

- Create a new Solr Core using command `solr create -c SODemo`: 

	![uie-folder](../images/installing-uie/image16.png) 
	
- Verify that `SODemo` folder is created under `<solr_install>`: 

	![uie-folder](../images/installing-uie/image17.png) 
	
- Extract `managed-schema` file from the UIE package and copy over to the SODemo core created: 

	![uie-folder](../images/installing-uie/image18.png) 
	
	![uie-folder](../images/installing-uie/image19.png) 
	
- Stop the Solr server using `Ctrl+C` on the Command Prompt
- Start the Solr server again using the command `solr start` 
- Verify the Solr server has started successfully by going to Solr Admin using `http://<servername>:<port>/solr`, by default [http://localhost:8983/solr](http://localhost:8983/solr): 

	![uie-folder](../images/installing-uie/image20.png) 
	
- Verify that the SODemo core is visible in the Solr admin console: 

	![uie-folder](../images/installing-uie/image21.png) 
	
**Note**: For case-insensitive and wildcard searches in UIE, settings below should be included in `managed-schema` of the Solr core. 

```xml 
<fieldType name="text_ws" class="solr.TextField" positionIncrementGap="100">
    <analyzer>
      <tokenizer class="solr.WhitespaceTokenizerFactory"/>
      <filter class="solr.LowerCaseFilterFactory"/>
    </analyzer>
  </fieldType>

  <field name="metadataa_s" type="text_ws" indexed="true" stored="false" multiValued="true"/>
```

Map the `metadataa_s` field to repository index fields that will be used for searching. For example: 

```xml 
  <copyField source="d_titlea_s" dest="metadataa_s"/>
  <copyField source="d_classu_namea_s" dest="metadataa_s"/>
  <copyField source="d_repositoryu_ida_s" dest="metadataa_s"/>
```
Documents need to be recrawled after making this change. 

### Install Lucene 

Apache Lucene™ is a high-performance, full-featured text search engine library written entirely in Java. It is a technology suitable for nearly any application that requires full-text search, especially cross-platform.

[Lucene](https://lucene.apache.org/core/documentation.html) 

*Content should be added* 

## Install Discovery Services  

### Setup UIE Crawler 

- Extract the `uie-crawl` folder from the UIE installation package to a folder on the server: 

	![uie-folder](../images/installing-uie/image22.png) 
	
- Locate `run-crawler.cmd` batch script under the `uie-crawl` installation folder and open it in edit mode. 
Check that it points to correct java installation. 
Add the following specifically for CMOD crawler:  

	```
	"%JAVA_HOME%\bin\java" -Xmx3072m -XX:MaxGCPauseMillis=200 -XX:+UseG1GC -Dloader.path=ext -Djava.library.path="C:\IBM\OnDemand\V10.1\bin;C:\IBM\OnDemand\V10.1\www;C:\IBM\OnDemand\V10.1\www\api" -jar uie-crawl-web.jar 
	```

	![uie-folder](../images/installing-uie/image23.png) 
	
- Open `application.properties` file which contains the web interface ports, the administrator credentials, the embedded DB settings etc. and adjust settings if required:  

	![uie-folder](../images/installing-uie/image24.png) 
	
- In Command Prompt run `run-crawler.cmd` batch script placed under `uie-crawl` folder: 

	![uie-folder](../images/installing-uie/image25.png) 
	
- Open browser and go to URL `http://<server>:<port>/uie/discovery`, by default [http://localhost:8080/uie/discovery](http://localhost:8080/uie/discovery)  

- Enter default username `admin` and default password:  

	![uie-folder](../images/installing-uie/image26.png) 
	
**Note**: After installing crawlers for the first time, it is a good idea to restart UIE discovery crawler services. 

### Install UIE Crawlers 

#### FileNet CE 5.2 Crawler 

- Edit `crawler_CE52_SOLR8_MSSQL_Demo.xml` file under `/uie-crawl/samples/config/ce52/solr8` folder (assuming that CE 5.2 is using MSSQL server as the database) 

- Update the following properties to match the specific environment and save the file:
	- IndexManager > url = `http://<servername>:<port>/solr/SODemo` 
	- AgentLockPersistence > local folder path 
	- Database and FileNet settings to be updated as per the prerequisites mentioned above: 

	![uie-folder](../images/installing-uie/image27.png) 
	![uie-folder](../images/installing-uie/image28.png) 
	
- In the UIE discovery services admin console, click `Add Service`
- Enter `Service Name` and `Description`: 

	![uie-folder](../images/installing-uie/image29.png) 
	
- Under `Service configuration file`, select `crawler_CE52_SOLR8_MSSQL_Demo.xml` file under `/uie-crawl/samples/config/ce52/solr8` folder  
- Click `Submit` 
- To start crawler, click the `Start` button: 

	![uie-folder](../images/installing-uie/image30.png) 
	
	If there are no errors, the status will show as Running: 
	
	![uie-folder](../images/installing-uie/image31.png) 
	
- Click `Detail View` to verify the number of documents crawled and whether the crawlpoint is updated
- Stop the crawler by clicking `Stop`, after a few minutes of running
- To verify that CE5.2 index is created, login to Solr admin page using `http://<servername>:<port>/solr`, by default [http://localhost:8983/solr](http://localhost:8983/solr) 
- From the Core Selector drop-down, select your SODemo core, then select `Query` to open the Query page:  

	![uie-folder](../images/installing-uie/image32.png) 
	
- In the `Request-Handler (qt)` field, enter the following default query, and click `Execute Query: /select`
- Search for the `numFound` value and verify it equals the number of documents that should have been indexed by the crawler: 

	![uie-folder](../images/installing-uie/image33.png) 
	
#### CMIS Alfresco crawler 

- Edit `crawler_SOLR8_MainRepository.xml` file under `/uie-crawl/samples/config/cmis10/solr8` folder
- Update the following properties to match the specific environment and save the file:
	- IndexManager > url = `http://<servername>:<port>/solr/SODemo`
	- AgentLockPersistence > local folder path
	- CMIS settings to be updated as per the prerequisites mentioned above: 
	
	![uie-folder](../images/installing-uie/image27.png) 
	
	![uie-folder](../images/installing-uie/image34.png) 
	
- In the UIE discovery services admin console, click `Add Service` and use the above config file to add a new crawler service: 

	![uie-folder](../images/installing-uie/image35.png) 
	
- To start crawler, click the `Start` button:  

	![uie-folder](../images/installing-uie/image30.png) 
	
	If there are no errors, the status will show as Running: 
	
	![uie-folder](../images/installing-uie/image31.png) 
	
- Click `Detail View` to verify the number of documents crawled and whether the crawlpoint is updated
- Stop the crawler by clicking `Stop`, after a few minutes of running
- To verify that index is created, login to Solr admin page using `http://<servername>:<port>/solr`, by default [http://localhost:8983/solr](http://localhost:8983/solr) 
- From the Core Selector drop-down, select your SODemo core, then select `Query` to open the Query page:  

	![uie-folder](../images/installing-uie/image32.png) 
	
- In the Request-Handler (qt) field, enter the following default query, and click `Execute Query: /select`
- Search for the `numFound` value and verify it equals the number of documents that should have been indexed by the crawler:  

	![uie-folder](../images/installing-uie/image33.png) 
	
#### Box crawler 

- If Java 8 is used for crawler, steps below are required
	- Edit `%JAVA_HOME%/jre/lib/security/java.security` by adding `security.provider.nn=org.bouncycastle.jce.provider.BouncyCastleProvider`:
	
		![uie-folder](../images/installing-uie/image36.png) 

	- Copy `bcprov-jdk15on-1.x.jar` and `bcpkix-jdk15on-1.x.jar` files from `/uie-crawl/plugins/uie-plugin-box-7.6.1.X` folder to `%JAVA_HOME%/jre/lib/ext` 
- Edit `crawler_Box_SOLR8.xml` file under `/uie-crawl/samples/config/box/solr8` folder
- Update the following properties to match the specific environment and save the file: 
	- IndexManager > url = `http://<servername>:<port>/solr/SODemo`
	- AgentLockPersistence > local folder path
	- Box settings to be updated as per the prerequisites mentioned above: 
	
		![uie-folder](../images/installing-uie/image37.png) 
	
		![uie-folder](../images/installing-uie/image38.png) 
	
- In the UIE discovery services admin console, click `Add Service` and use the above config file to add a new crawler service: 

	![uie-folder](../images/installing-uie/image39.png) 
	
- To start crawler, click the `Start` button:  

	![uie-folder](../images/installing-uie/image30.png) 
	
	If there are no errors, the status will show as Running: 
	
	![uie-folder](../images/installing-uie/image31.png) 
	
- Click `Detail View` to verify the number of documents crawled and whether the crawlpoint is updated
- Stop the crawler by clicking `Stop`, after a few minutes of running
- To verify that index is created, login to Solr admin page using `http://<servername>:<port>/solr`, by default [http://localhost:8983/solr](http://localhost:8983/solr) 
- From the Core Selector drop-down, select your SODemo core, then select `Query` to open the Query page:  

	![uie-folder](../images/installing-uie/image32.png) 
	
- In the Request-Handler (qt) field, enter the following default query, and click `Execute Query: /select`
- Search for the `numFound` value and verify it equals the number of documents that should have been indexed by the crawler:  

	![uie-folder](../images/installing-uie/image33.png) 
	
#### CMOD crawler 

- Edit `crawler_CMOD_SOLR8_AdobePDF.xml` file under `/uie-crawl/samples/config/cmod/solr8` folder
- Update the following properties to match the specific environment and save the file: 
	- IndexManager > url = `http://<servername>:<port>/solr/SODemo`
	- AgentLockPersistence > local folder path
	- CMOD settings to be updated as per the prerequisites mentioned above: 

	![uie-folder](../images/installing-uie/image40.png) 
	
- In the UIE discovery services admin console, click `Add Service` and use the above config file to add a new crawler service: 

	![uie-folder](../images/installing-uie/image41.png) 
	
- To start crawler, click the `Start` button:  

	![uie-folder](../images/installing-uie/image30.png) 
	
	If there are no errors, the status will show as Running: 
	
	![uie-folder](../images/installing-uie/image31.png) 
	
- Click `Detail View` to verify the number of documents crawled and whether the crawlpoint is updated
- Stop the crawler by clicking `Stop`, after a few minutes of running
- To verify that index is created, login to Solr admin page using `http://<servername>:<port>/solr`, by default [http://localhost:8983/solr](http://localhost:8983/solr) 
- From the Core Selector drop-down, select your SODemo core, then select `Query` to open the Query page:  

	![uie-folder](../images/installing-uie/image32.png) 
	
- In the Request-Handler (qt) field, enter the following default query, and click `Execute Query: /select`
- Search for the `numFound` value and verify it equals the number of documents that should have been indexed by the crawler:  

	![uie-folder](../images/installing-uie/image33.png) 
	
#### CM8 crawler 

- Move `cmbicmsdk81-8.6.0.jar` and `uie-plugin-cm8-7.6.1.x.jar` from `uie-crawl/plugins/uie-plugin-cm8-7.6.1.x` folder to `/uie-crawl/ext` folder
- Copy `cmbicmsrvs.ini` under `/uie-crawl/samples/config/cm8/solr8` folder to the path specified in the CM8 crawler config
- Edit and update the CM8 server properties to match the specific environment and save the file: 

	![uie-folder](../images/installing-uie/image42.png) 
	
- Edit `crawler_CM8_SOLR8_cm8db07.xml` file under `/uie-crawl/samples/config/cm8/solr8` folder
- Update the following properties to match the specific environment and save the file: 
	- IndexManager > url = `http://<servername>:<port>/solr/SODemo`
	- AgentLockPersistence > local folder path
	- CM8 settings to be updated as per the prerequisites mentioned above:  
	
	![uie-folder](../images/installing-uie/image43.png) 
	
- In the UIE discovery services admin console, click `Add Service` and use the above config file to add a new crawler service: 

	![uie-folder](../images/installing-uie/image44.png) 
	
- To start crawler, click the `Start` button:  

	![uie-folder](../images/installing-uie/image30.png) 
	
	If there are no errors, the status will show as Running: 
	
	![uie-folder](../images/installing-uie/image31.png) 
	
- Click `Detail View` to verify the number of documents crawled and whether the crawlpoint is updated
- Stop the crawler by clicking `Stop`, after a few minutes of running
- To verify that index is created, login to Solr admin page using `http://<servername>:<port>/solr`, by default [http://localhost:8983/solr](http://localhost:8983/solr) 
- From the Core Selector drop-down, select your SODemo core, then select `Query` to open the Query page:  

	![uie-folder](../images/installing-uie/image32.png) 
	
- In the Request-Handler (qt) field, enter the following default query, and click `Execute Query: /select`
- Search for the `numFound` value and verify it equals the number of documents that should have been indexed by the crawler:  

	![uie-folder](../images/installing-uie/image33.png) 
	
### Update UIE Crawlers 

If crawler configuration file is updated, it needs to be uploaded for the crawler and crawler service should be restarted
- Stop the crawler for which the configuration needs to be updated
- Click `Edit`: 

	![uie-folder](../images/installing-uie/image45.png) 

- Browse and upload the new configuration file and start the service again: 

	![uie-folder](../images/installing-uie/image46.png) 

## Install Search Services 

### Install UIE Searcher on IBM WebSphere 

- Extract the `uie-search` folder from the UIE installation package to a folder on the server: 

	![uie-folder](../images/installing-uie/image47.png) 
	
- Edit `searcher-SOLR-sample.xml` file under `/uie-search/samples/config/solr` folder
- Update the following properties to match the specific environment and save the file: 
	- IndexGroup > ID = SODemo
	- IndexManager > url = `http://<servername>:<port>/solr/SODemo`
	- Property > name=”defaultIndexGroup” = SODemo 
	
	![uie-folder](../images/installing-uie/image48.png) 
	
	![uie-folder](../images/installing-uie/image49.png)  
	
- Open WebSphere admin console `https://<servername>:<port>/ibm/console/logon.jsp`, by default [https://localhost:9043/ibm/console/logon.jsp](https://localhost:9043/ibm/console/logon.jsp) 
- Go to `Applications > Application Type > WebSphere enterprise applications`
- Click `Install` button
- Click `Browse` button and locate `uie-search-web.war` package under `/uie-search/packages/solr8/war` folder: 

	![uie-folder](../images/installing-uie/image50.png)  
	
	![uie-folder](../images/installing-uie/image51.png) 
	
- Click `Next` button
- Select `Fast Path` and click `Next` button:  

	![uie-folder](../images/installing-uie/image52.png) 

- Adjust Application name if needed and click `Next` button: 

	![uie-folder](../images/installing-uie/image53.png) 
	
- Click `Next` button on `Map modules to servers` window:  

	![uie-folder](../images/installing-uie/image54.png) 
	
- Press `Next` button on `Map virtual hosts for Web modules` window: 

	![uie-folder](../images/installing-uie/image55.png) 
	
- Set Context root and click `Next` button on `Map context roots for Web modules`:  

	![uie-folder](../images/installing-uie/image56.png) 

- Click `Finish` button on `Summary` page:  

	![uie-folder](../images/installing-uie/image57.png) 
	
- Click `Save` link: 
	
	![uie-folder](../images/installing-uie/image58.png) 
	
- Click the installed application 
- Go to `Environment entries for Web modules` link:  

	![uie-folder](../images/installing-uie/image59.png) 
	
- Set path to configuration file (`configPath` value). Configuration file path example: 

	Linux - [file:///opt/configs/UIE/searcher/searcher-config-linux.xml](file:///opt/configs/UIE/searcher/searcher-config-linux.xml) 

	Windows - [file:///C:/Intellective/UIE/config/searcher-SOLR-config.xml](file:///C:/Intellective/UIE/config/searcher-SOLR-config.xml) 

	![uie-folder](../images/installing-uie/image60.png) 


	![uie-folder](../images/installing-uie/image61.png) 
	
- Click `OK` button 
- Click `Save` link:  
	
	![uie-folder](../images/installing-uie/image62.png) 
	
- Select installed application and click `Start` button:  
	
	![uie-folder](../images/installing-uie/image63.png) 
	
- In browser, open URL `http://<servername>:<port>/uie-searcher`, by default [http://localhost:9080/uie-searcher](http://localhost:9080/uie-searcher) and verify that no errors shown, UIE version and other application data is displayed: 
	
	![uie-folder](../images/installing-uie/image64.png) 
		
### Install UIE Searcher on IBM WebSphere Liberty 

*Content should be added* 

### Install UIE Searcher on WebLogic 

*Content should be added* 

### Install UIE Searcher on WildFly JBoss 

*Content should be added* 
