---
title: Example for DBRepositoryDataProvider based search template 
layout: docs
category: Unity 7
---

Example of search template section to be added to the Unity System XML file:

```xml
<SearchTemplate ID="document_Search_db2">
  <DataProviderId>db_repository</DataProviderId>
  <Description>Documents searching</Description>
  <Comment>Enter search criteria</Comment>
  <Autoexecute>false</Autoexecute>
  <Hidden>false</Hidden>
  <Security>
    <AllowRole>Unity Users</AllowRole>
  </Security>
  <Operation dataProviderId="db_repository" type="search">
    <OperationProperties>
      <Property ID="query" value="
                    select
                          OBJECT_ID,
                          U1708_DOCUMENTTITLE,
                          MIME_TYPE,
                          CREATE_DATE,
                          MODIFY_DATE,
                          MODIFY_USER,
                          (CASE WHEN IS_RESERVED = 1 THEN 'True' ELSE 'False' END) AS IS_RESERVED_DOC,
                          (CASE WHEN IS_CURRENT = 1 THEN 'True' ELSE 'False' END) AS IS_CURRENT_DOC,
                          CONTENT_SIZE,
                          MAJOR_VERSION_NUMBER,
                          MINOR_VERSION_NUMBER,
                          VERSIONING_ENABLED,
                          VERSION_STATUS
                    from DOCVERSION WHERE {Macro.QueryCriterion}"/>
      <Property ID="idField" value="Id"/>
    </OperationProperties>
  </Operation>
  <SortFields>
    <SortField Order="desc">DateLastModified</SortField>
  </SortFields>
  <Grid ID="document_search_db2"/>
  <Criteria>
    <Criterion>
      <FieldName>DocumentTitle</FieldName>
      <Type>string</Type>
      <Operator>starts</Operator>
      <Required>false</Required>
      <Hidden>false</Hidden>
      <Readonly>false</Readonly>
      <MultiValue>false</MultiValue>
    </Criterion>
  </Criteria>
  <SavePanel>false</SavePanel>
</SearchTemplate>
```

Repository data provider should specify mapping for all columns from select clause (if external and internal names 
don't match):

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

Example of datasource configuration: 

```xml
    <Datasource ID="db2_sodemo" class="com.vegaecm.vspace.datasources.JndiDatasource">
      <Jndi>SODEMO</Jndi>
    </Datasource>
```

Ensure that all external properties of RepositoryDataProvider's PropertyNameMapper section are defined inside 
`Properties` section. See [Properties configuration](../../properties.md) for more details.

DBRepositoryDataProvider doesn't allow actions like `create`, `view`, `download`, etc. so grid configuration will 
have empty `Actions` section:

```xml
<Grid ID="document_search_db2" enableColumnReorder="false" groupSearchResults="false">
  <Toolbar>
    <Actions/>
  </Toolbar>
  <Listeners/>
  <XType>vspace-docs</XType>
  <GridFilters forceSearch="false" types="all"/>
  <Columns checkBoxModel="true" formatSet="default">
    <ColumnSet ID="document_search_db2" type="all"/>
    <ColumnSet ID="document_search_db2" type="default"/>
  </Columns>
</Grid>
```

See [Column sets configuration](../../column-sets.md) for more details on `Columns` section configuration.