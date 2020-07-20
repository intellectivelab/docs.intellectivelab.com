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

For more info see all hardware and software requirements related to [Solr](https://lucene.apache.org/solr/guide/8_5/solr-system-requirements.html) and [Lucene](https://lucene.apache.org/core/systemreqs.html). 

## Obtain Index and UIE Installations 

Download [Solr](https://lucene.apache.org/solr/downloads.html) and [Lucene](https://lucene.apache.org/core/downloads.html) installation packages. 

Download UIE latest release located on Intellective FTP under `/products/uie/releases` folder. 

![uie-folder](.\images\image1.png) 

## Install Prerequisite Software 

Download [Java](https://www.java.com/en/download/). 

Java 8 required for all crawlers except Lucene crawler which can function with Java 7 

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


Java 8 required for all searchers except Lucene and Solr5 

|  Searcher | Java 7 | Java 8 |
|:---------:|:------:|:------:|
|   Solr5   |    +   |    +   |
|   Solr6   |        |    +   |
| Solr7.3.x |        |    +   |
| Solr7.7.x |        |    +   |
|   Solr8   |        |    +   |
|   Lucene  |    +   |    +   | 






