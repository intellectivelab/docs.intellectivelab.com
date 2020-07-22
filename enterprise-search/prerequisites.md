# UIE Installation Prerequisites 

## Contents 

[Review Prerequisites](./prerequisites.html#review-prerequisites)  
[Obtain Index and UIE Installations](./prerequisites.html#obtain-index-and-uie-installations)  
[Install Prerequisite Software](./prerequisites.html#install-prerequisite-software)  
[UIE Crawler Checklist and Prerequisites](./prerequisites.html#uie-crawler-checklist-and-prerequisites)
- [FileNet CE 5.2 crawler](./prerequisites.html#filenet-ce-52-crawler) 
- [CMIS Alfresco crawler](./prerequisites.html#cmis-alfresco-crawler) 
- [Box crawler](./prerequisites.html#box-crawler) 
- [CMOD crawler](./prerequisites.html#cmod-crawler)  
- [CM8 crawler](./prerequisites.html#cm8-crawler) 

## Review Prerequisites 

- A supported content management server or database or metadata repository used by UIE Discovery Services to crawl data into the Enterprise Index 
- A supported web application server to deploy UIE Search Services, this can be collocated with Unity 
- A supported JRE installed on UIE Discovery Services servers 
- An Enterprise Index based on Lucene and/or Solr 

The Unity Intelligence Engine (UIE) Enterprise Index needs expandable storage devices that will meet both the immediate estimated size of the index as well as space for future growth.

The **minimum** requirements are listed below. It is generally recommended to include a minimum of 25% growth capacity.

|  Hardware  |       UIE Searcher      |
|:----------:|:-----------------------:|
| Disk Space |   250MB (per instance)  |
|   Memory   | Minimum JVM Memory: 1GB |   

- The UIE Discovery Services component requires JRE7+ and runs as a standalone Java application 
- Enterprise Index on Solr6 or Solr7 or Solr8 requires JRE8 at a minimum 
- Enterprise Index on Solr5 runs on JRE7 only 
- Unity 7.6 supports Solr 8.1 and Solr 8.2 

In addition, keep the following in mind: 

- The storage system chosen should be capable of expansion to facilitate future growth of the index 
- Data I/O speed is a critical factor in performance of the index – the faster the I/O rates, the better the search and analytics performance 
- For Enterprise Index on Lucene, a network device such as NAS with high performance I/O is preferable 
- For Enterprise Index on Solr, an SSD or other high speed I/O driver is preferable 
- Each configured discovery agent (crawler) should run on a separate node for optimal performance 
- It is recommended to have a dedicated CPU or server for each crawler 

For more info see hardware and software requirements related to [Solr](https://lucene.apache.org/solr/guide/8_5/solr-system-requirements.html) and [Lucene](https://lucene.apache.org/core/systemreqs.html). 

## Obtain Index and UIE Installations 

Download [Solr](https://lucene.apache.org/solr/downloads.html) and [Lucene](https://lucene.apache.org/core/downloads.html) installation packages. 

Download UIE latest release located on Intellective FTP under `/products/uie/releases` folder. 

![uie-folder](.\images\image1.png) 

## Install Prerequisite Software 

Download [Java](https://www.java.com/en/download/). 

Java 8 required for all crawlers except Lucene crawler which can function with Java 7: 

|  Crawler  | Java 7 | Java 8 |
|:---------:|:------:|:------:|
|   Solr5   |        |    +   |
|   Solr6   |        |    +   |
| Solr7.3.x |        |    +   |
| Solr7.7.x |        |    +   |
|   Solr8   |        |    +   |
|   Lucene  |    +   |    +   |
|   Kafka   |        |    +   |
| Cassandra |        |    +   | 


Java 8 required for all searchers except Lucene and Solr5:  

|  Searcher | Java 7 | Java 8 |
|:---------:|:------:|:------:|
|   Solr5   |    +   |    +   |
|   Solr6   |        |    +   |
| Solr7.3.x |        |    +   |
| Solr7.7.x |        |    +   |
|   Solr8   |        |    +   |
|   Lucene  |    +   |    +   | 

Download [Java Cryptography Extension](https://www.oracle.com/java/technologies/javase-jce8-downloads.html). 

- Determine JAVA_HOME path. If not already set, set new JAVA_HOME pointing to the Java version installed above

![uie-folder](.\images\image2.png) 

- Copy the `US_export_policy.jar` and `local_policy.jar` files into the directory: `<JAVA_HOME>/jre/lib/security` and overwrite existing files with same name, if any 

![uie-folder](.\images\image3.png) 

Web application servers used for UIE Searcher are supported on the following platforms: 

|     Web App Server     | Java |       UIE Searcher       |
|:----------------------:|:----:|:------------------------:|
|   WebSphere 8.5.5.11   |  1.7 |     Lucene 5, Solr 5     |
|      WebSphere 9.0     |  1.8 | Lucene 5, Solr 6, Solr 7 |
| Oracle WebLogic 10.3.6 |  1.7 |     Lucene 5, Solr 5     |
|      Wildfly 10.x*     |  1.8 | Lucene 5, Solr 6, Solr 7 |
|    WebSphere Liberty   |      |                          |
|      Open Liberty      |      |                          |

Content Management Repositories:
- IBM FileNet P8 5.2.x or higher
- Alfresco 5.1 (through CMIS 1.1)
- Box XX
- Any repository supporting CMIS 1.1 

## UIE Crawler Checklist and Prerequisites 

### FileNet CE 5.2 crawler 

The settings below are required to set up FileNet CE 5.2 crawler depending on the environment it is installed. 

Database connection details:
- Driver (depending on the CE database) – com.microsoft.sqlserver.jdbc.SQLServerDriver
- Type – mssql, oracle or db2
- Connection String 
	```
	jdbc:sqlserver://<servername>:<port>;databaseName=<Objectstore Database Name>;
	```

- Schema – \<schema name\> e.g. dbo
- Username – by request
- Password – by request 

FileNet connection details: 
- Jace Connection URI – `http://<servername>:<port>/wsi/FNCEWS40MTOM/`  
- ObjectStore name – \<ObjectStore name\> e.g. Target
- Username – by request
- Password – by request
- JAAS Stanza – FileNetP8 

### CMIS Alfresco crawler 

The settings below are required to set up CMIS Alfresco crawler depending on the environment it is installed. 

CMIS connection details:
- Connection URI – `http://<servername>:<port>/alfresco/cmisatom` 
- Repository Id – \<Repository Name or ID\> e.g Main Repository
- Username – by request
- Password – by request
- Binding Type – \<Binding Type\> e.g. ATOMPUB 

### Box crawler 

The settings below are required to set up Box crawler depending on the environment it is installed. 

Box connection details:
- Username – by request
- RSA Key Pair JSON file - `C:\UIE\config\41278546_5hdxhtrl_config.json` (Refer to steps below to generate the RSA Key Pair JSON file)
- Repository Name – \<Repository Name\> e.g. Box-1
- Template Id – \<Template Id\> e.g. SF_Template
- Document Class name – \<Document Class Name\> e.g. Contract_Ext 

Steps to generate RSA Key Pair JSON: 
- Sign in to [Box developer account](https://app.Box.com/signup/n/developer) or create a new one 
- Go to Dev Console 

	![uie-folder](.\images\image4.png) 

- Click Create New App
- Select Custom App option and click Next
- Select Authentication Method to be `OAuth 2.0 with JWT (Server Authentication)` and proceed
- Name the application and click `Create App`
- Click `View your App` to be redirected to application Configuration page
- On the configuration page via `Dev Console > My Apps > custom application name > Configuration` 
- Set the following parameters: 

	- Authentication Method:  OAuth 2.0 with JWT (Server Authentication) 
	- Application Access: Enterprise 
	- Application scopes: ![uie-folder](.\images\image5.png) 
	- Advanced Features: ![uie-folder](.\images\image6.png) 
	
- Save the changes
- Scroll to `Add and Manage Public Keys` section
- Press `Generate a Public Key/Private Keypair`, on this step may be asked to setup 2-factor authentication
- Save generated json file to local disk
- Locate section `OAuth 2.0 Credentials`
- Copy `Client ID` value 
	
	![uie-folder](.\images\image7.png) 

- In your Box account, Go to `Admin Console > Apps > Custom Apps` (https://app.box.com/master) 

	![uie-folder](.\images\image8.png)

- Click Authorize New App
- Enter the copied Client ID on the App Authorization dialog

	![uie-folder](.\images\image9.png) 
	
- Click Next
- Click Authorize 

### CMOD crawler 

The settings below are required to set up CMOD crawler depending on the environment it is installed.

CMOD connection details:
- Server name – IP address or server name 
- Folder Name – \<Folder name\> e.g. Customer Information
- Username – by request
- Password – by request
- Port – \<port\> e.g. 1445 

This crawler requires CMOD client files to be installed prior to running the crawler. These can be [downloaded](https://www.ibm.com/support/fixcentral) from IBM website. 

**Note: To avoid runtime errors, client should be of the same version as server and patched with the same version. For e.g., if CMOD version on server is 10.1.0.4, the client should also be of the same version.** 

- On Windows, add CMOD bin, www and www\api to the system PATH variable. For example: 

	`PATH=%PATH%;C:\IBM\OnDemand\V10.1\bin;C:\IBM\OnDemand\V10.1\www;C:\IBM\OnDemand\V10.1\www\api` 

	![uie-folder](.\images\image10.png)

- Restart user session or entire server to apply new value of the system PATH variable. 

### CM8 crawler 

The settings below are required to set up CM8 crawler depending on the environment it is installed.

CM8 connection details:

- Store name – \<store name\> e.g. icmnlsdb 
- Username – by request
- Password – by request
- Init File Path – \<file path\> e.g. `C:\UIE\config\cmbicmsrvs.ini`  

	cmbicmsrvs.ini file details
	- ICMSERVER=\<server\> e.g. icmnlsdb
	- ICMSERVERREPTYPE=\<server type\> e.g. DB2
	- ICMSCHEMA=\<schema\> e.g. icmadmin
	- ICMHOSTNAME=\<IP address or server name\>
	- ICMPORT=\<port\> e.g. 50000
	- ICMREMOTEDB=\<remote DB\> e.g. icmnlsdb

**Note: To avoid runtime errors on Windows, hosts file may need to be updated with the CM8 server name and IP address.** 
