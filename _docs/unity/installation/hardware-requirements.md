---
title: Unity Hardware Requirements
layout: docs
category: Unity 7
---
# Unity Hardware Requirements 

Specifications listed in the document below take the following into consideration:
- Provided storage type reflect the generic minimum requirement of I/O subsystem speed. For example, Apache Solr is extremely demanding to this 
- A size of storage requested below consider only space for data. It would be a wise practice to provision a disk for operating system and all the software to be installed (HDD, 50 GB) and dedicated disk for the data and logs 

The Hardware Requirements are listed per individual environment (e.g., Dev, Test, Production).
Each of the following requires its own VM Server: 
- Unity Application Server 
- Unity Intelligence Engine: Searcher 
- Unity Intelligence Engine: Discovery Services 
- Solr / Solr Cloud 

## Unity Application Server 

Unity Application Server is the main user facing Unity Application, and provides the following:
- a user interface to for ECMs 
- configuration capabilities 
- performs Direct Searching against ECM Repositories 
- calls Unity Enterprise Search 

Requires application server to be installed. 

| Logical server name | Number of CPU/cores | RAM, GB | Storage type | Storage size |
|:-------------------:|:-------------------:|:-------:|:------------:|:------------:|
|        Unity        |          4          |    16   |      HDD     |     20 GB    |




## Unity Intelligence Engine: Searcher 

Unity Intelligence Engine Searcher performs Enterprise Searching, which searches within or across Repositories, leveraging the Solr Index created by the Crawler Service.

Searcher application implements enterprise search operations in the enterprise index (via Solr API).

It may be deployed either on application server or standalone, recommendation is standalone.

| Logical server name | Number of CPU/cores | RAM, GB | Storage type | Storage size |
|:-------------------:|:-------------------:|:-------:|:------------:|:------------:|
|      Searcher       |          4          |    8    |      SSD     |    100 GB    | 

## Unity Intelligence Engine: Discovery Services 

The Unity Intelligence Engine Discovery Services (e.g., also known as Crawler Service), reads source ECM repositories and builds a common enterprise Solr Index.

| Logical server name | Number of CPU/cores | RAM, GB | Storage type | Storage size |
|:-------------------:|:-------------------:|:-------:|:------------:|:------------:|
|       Crawler       |          4          |    8    |      HDD     |     20 GB    |

## Solr / Solr Cloud 

Depending on the Volume of Documents either Solr or Solr Cloud is required. 

### Solr (Non-High Volume, up to 1 billion)

Apache Solr instance is used for Enterprise Searching. 

For Non-High Content Volume implementations, we use [Apache Solr](https://lucene.apache.org/solr) engine to implement enterprise index. 
	
Apache Solr 8.5 (the latest tested version at the moment) should be installed. Consider tuning the JVM heap size and garbage collector in order to use server’s RAM effectively. See [this link](https://cwiki.apache.org/confluence/display/SOLR/SolrPerformanceProblems#SolrPerformanceProblems-RAM) for more details.

| Logical server name | Number of CPU/cores | RAM, GB | Storage type | Storage size |
|:-------------------:|:-------------------:|:-------:|:------------:|:------------:|
|        Solr         |          4          |    16   |      SSD     |    150 GB    | 

### Solr Cloud (High Volume of Content, more than 1 billion) 

Apache Solr Cloud instance is a clustered index used for Enterprise Searching. 

**Note**: Solr Cloud supports a clustered index and is scalable but does NOT require implementation in a Cloud Environment.

For High Content Volume implementations, we will use [Apache Solr Cloud](https://lucene.apache.org/solr) engine to implement enterprise index.   We need to have Solr Cloud to create a clustered installation and require a minimum of 3 nodes on different servers.
	
Apache Solr Cloud 8.5 (the latest tested version at the moment) should be installed. Consider tuning the JVM heap size and garbage collector in order to use server’s RAM effectively. See [this link](https://cwiki.apache.org/confluence/display/SOLR/SolrPerformanceProblems#SolrPerformanceProblems-RAM) for more details.

| Logical server name | Number of CPU/cores | RAM, GB | Storage type | Storage size |
|:-------------------:|:-------------------:|:-------:|:------------:|:------------:|
|       solr-1        |          4          |    16   |      SSD     |    150 GB    | 
|       solr-2        |          4          |    16   |      SSD     |    150 GB    | 
|       solr-3        |          4          |    16   |      SSD     |    150 GB    | 

