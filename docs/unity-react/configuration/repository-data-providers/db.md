---
title: Database Data Provider Configuration 
layout: docs
category: Unity 7
---
|**Note**: Database Data Provider Configuration is the same for Unity ExtJS and Unity React.

|**Note**: The Database connector does not support updating the database OOTB; it is read only.
 
# Versions Supported

This is an original feature of Unity. 
Unity 7.2.1 added support for PostgreSQL.

# Installation Impact

The database connector is available OOTB and can be configured at any time after the installation of the Unity application. 
It requires an existing database that the connector will use to provide data to the application.
If not already done, you will need to install and configure the JDBC drivers for your database to be used when creating the JNDI definition on your web application server.

# JNDI configuration
 
To use the Unity database connector, you will need to define a JNDI definition on the web application server that the connector will reference.
This process is different for each web application server, and you should follow the process for your server. 

# Unity XML configuration

Perform configuration steps [common to all Unity data providers](../repository-data-providers.md#common-steps-to-configure-data-provider).

## Datasource configuration

Add a new Datasource to the configuration: 

```xml
<Datasource ID="datasource_id" class="com.vegaecm.vspace.datasources.JndiDatasource">
	<Jndi>Jndi Name</Jndi>
</Datasource>
```

|Parameter|Description|Value|
|:--------|:----------|:----|
|ID 	|Id for the data source| datasource_id|
|class	|Java class used for the data source|com.vegaecm.vspace.datasources.JndiDatasource|
|Jndi	|JNDI name created for the database|Jndi Name|
	
## Repository Data Provider configuration

To add the database connector, add the following to the repository data providers section of the configuration:

```xml
<RepositoryDataProvider ID="connector_id" class="com.vegaecm.vspace.providers.db.DBRepositoryDataProvider">
	<OperatorsSet>VSpace</OperatorsSet>
	<Operations/>
	<ViewerParameters/>
	<ResultLimit>200</ResultLimit>
	<DBTimeZone>UTC</DBTimeZone>
	<DateTimePattern>M/d/yy h:mm a</DateTimePattern>
	<CaseInsensitiveSearch>true</CaseInsensitiveSearch>
	<Datasource>datasource_id</Datasource>
	<PropertyNameMapper>
		…
		<Mapping external="Unity Property Id" internal="DB Property Id"/>
		…
	</PropertyNameMapper>
</RepositoryDataProvider>
```

|Parameter|Description|Value|
|:--------|:----------|:----|
|ID 	|Id for the connector|connector_id|
|class	|Java class to be used for the connector |com.vegaecm.vspace.providers.db.DBRepositoryDataProvider|
|OperatorsSet	|Connector operators set for the connector. Refer to the OperatorTypes section of the config for available sets|VSpace|
|ResultLimit	|Result set size limit|200|
|DBTimeZone	|Time zone for datetimes in the database|UTC|
|DateTimePattern	|Pattern for datetimes in the database|M/d/yy h:mm a|
|CaseInsensitiveSearch	|Boolean value that tells the application to perform case insensitive search or not|true|
|Datasource	|Id of the data source to use for the connector|datasource_id|

### Mapping

The Database data provider supports standard [PropertyNameMapper](../repository-data-providers.md#property-name-mapping) section configuration.  

For example:

```xml
    <RepositoryDataProvider ID="db_repository" class="com.vegaecm.vspace.providers.db.DBRepositoryDataProvider">
      <!-- not relevant nodes skipped -->
      <Datasource>db2_sodemo</Datasource>
      <PropertyNameMapper>
        <Mapping external="Id" internal="OBJECT_ID"/>
        <Mapping external="DocumentTitle" internal="U1708_DOCUMENTTITLE"/>
        <Mapping external="MimeType" internal="MIME_TYPE"/>
        <Mapping external="DateCreated" internal="CREATE_DATE"/>
        <Mapping external="DateLastModified" internal="MODIFY_DATE"/>
        <Mapping external="LastModifier" internal="MODIFY_USER"/>
        <Mapping external="IsReserved" internal="IS_RESERVED_DOC"/>
        <Mapping external="IsCurrentVersion" internal="IS_CURRENT_DOC"/>
        <Mapping external="ContentSize" internal="CONTENT_SIZE"/>
        <Mapping external="MajorVersionNumber" internal="MAJOR_VERSION_NUMBER"/>
        <Mapping external="MinorVersionNumber" internal="MINOR_VERSION_NUMBER"/>
        <Mapping external="IsVersioningEnabled" internal="VERSIONING_ENABLED"/>
        <Mapping external="VersionStatus" internal="VERSION_STATUS"/>
      </PropertyNameMapper>
    </RepositoryDataProvider>
```

## Search template

[Search Template configuration for Database repository data provider](../search-templates/db.md)

# Limitations

The DB connector is read only. There are no OOTB actions to update the database from Unity. 
