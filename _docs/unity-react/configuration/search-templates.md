---
title: Search Templates Configuration
layout: docs
category: Unity 7
---
*content to be added*
 
# Operation section configuration

## Documents/Cases/Workitems search

Set of properties inside `Operation` -> `OperationProperties` section depends on data provider and type of resource. 

### FileNet (CERepositoryDataProvider)

List of available properties for documents search template is in the table below: 

| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |Optional. The name of concrete resource type, i.e. document class, e.g. `DiffProperties`. If not specified, search will be executed among items of `Document` document class and it's subclasses.|
|FolderPath   |Optional. When specified, it is used as a root path for folder view, that will be displayed on the left side of search template.|

List of available properties for cases search template is in the table below: 

*content to be added*

List of available properties for workitems search template is in the table below: 

*content to be added*

### CMIS (CMISRepositoryDataProvider)

List of available properties for documents search template is in the table below:
 
| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |Optional. The name of concrete resource type, i.e. document `Type`, e.g. `D:TM:DiffProperties`. If not specified, search will be executed against all documents with cmis:document `Base Type`|
|FolderPath   |Optional. When specified, it is used as a root path for folder view, that will be displayed on the left side of search template.|

### Box (BoxRepositoryDataProvider)

List of available properties for documents search template is in the table below:
 
| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |The name of concrete resource type, i.e. document's template name, e.g. `metadataTemplate_1`. This parameter is required even if search should be executed against all documents; use `file` value for this case.|

### CMOD (CmodRepositoryDataProvider)

List of available properties for documents search template is in the table below:
 
| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |`CMOD_Document`|

### CM8 (Cm8RepositoryDataProvider)

List of available properties for documents search template is in the table below:
 
| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |The name of concrete resource type, i.e. item type, e.g. `UTESTDOC1`. *todo: add information on whether it's optional or not and if it's possible to search against all documents*|
|FolderPath   |Optional. When specified, it is used as a root path for folder view, that will be displayed on the left side of search template.|

### Enterprise search

*content to be added*

### DB (DBRepositoryDataProvider)

Example of configuration:

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

List of available properties for search template is in the table below:

| Parameter   | Description|
|:------------|:------------|
|query        |Query for data selection <sup>1</sup>|
|idField      |Identifier field name. Equals `Id`, `ID`, `id` or `document_id` depending on mapping in repository data provider|

<sup>1</sup> List of column names in select clause should always contain id column 
(OBJECT_ID in the sample above). Inside repository data provider those properties
should be [mapped](repository-data-providers.md) to external names, defined inside [`Properties`](tags-list/properties-tag.md) section (in case internal 
and external names are different). Use `Id`, `ID`, `id` or `document_id` external name for id column.

If database doesn't support a particular data type, value in select clause should be casted 
to string (example above is for db2, which doesn't support BOOLEAN, that's why IS_RESERVED_DOC 
and IS_CURRENT_DOC are returned as 'True' / 'False' text).

*content to be added (other data providers)*

### SharePoint

| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |Optional. The name of concrete resource type, e.g. `Documents\Document`. *todo: add description for case when parameter is absent*|
|FolderPath   |Optional. When specified, it is used as a root path for folder view, that will be displayed on the left side of search template.|

## Case attachments

Example of configuration:

```xml
<SearchTemplate ID="UCM_Case_DiffDocs_Search_P8">
  <DataProviderId>ucm_over_icm_provider</DataProviderId>
  <Description>UCM P8 DiffDocument search for attachments tab</Description>
  <Comment>Enter search criteria</Comment>
  <Autoexecute>true</Autoexecute>
  <Hidden>false</Hidden>
  <Security>
    <AllowRole>Unity Users</AllowRole>
  </Security>
  <Operation dataProviderId="ucm_over_icm_provider" type="ucm_search_documents">
    <OperationProperties>
      <Property ID="FolderPath" value="/"/>
      <Property ID="objectStore" type="FIRST">
        <SecuredValue>
          <Value>SODemo</Value>
        </SecuredValue>
      </Property>
      <Property ID="SolutionId" type="FIRST">
        <SecuredValue>
          <Value>CustomerComplaints</Value>
        </SecuredValue>
      </Property>
      <Property ID="TargetDataProviderId" type="FIRST">
        <SecuredValue>
          <Value>ce_repository</Value>
        </SecuredValue>
      </Property>
      <Property ID="ResourceName" type="FIRST">
        <SecuredValue>
          <Value>documents</Value>
        </SecuredValue>
      </Property>
      <Property ID="query" type="FIRST">
        <SecuredValue>
          <Value>SELECT {Macro.ResultProperties}, [Reservation] FROM DiffProperties WHERE ({UCM.IN_FOLDER}) AND {Macro.QueryCriterion} AND {Macro.FilterCriterion}</Value>
        </SecuredValue>
      </Property>
      <Property ID="DocumentLinkStrategy" type="FIRST">
        <SecuredValue>
          <Value>ucmP8</Value>
        </SecuredValue>
      </Property>
      <Property ID="ResourceType" type="FIRST">
        <SecuredValue>
          <Value>DiffProperties</Value>
        </SecuredValue>
      </Property>
      <Property ID="DocumentLinkScope" type="FIRST">
        <SecuredValue>
          <Value>CASE</Value>
        </SecuredValue>
      </Property>
    </OperationProperties>
  </Operation>
  <SortFields/>
  <Grid ID="UCM_Case_Docs_Search_FileNet"/>
  <Criteria>
    <Criterion>
      <FieldName>DocumentTitle</FieldName>
      <Type>string</Type>
      <Operator>starts</Operator>
      <Required>false</Required>
      <Hidden>false</Hidden>
      <Readonly>false</Readonly>
      <MultiValue>false</MultiValue>
      <MaxLength>20</MaxLength>
    </Criterion>
  </Criteria>
  <SavePanel>false</SavePanel>
</SearchTemplate>
```

Case attachments search template properties: 

| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |Resource type; it's value depends on target data provider|
|SolutionId   |Solution id|
|TargetDataProviderId |Target data provider id|
|objectStore |Object Store (for FileNet only)|
|Query |Query<sup>1</sup> |
|DocumentLinkStrategy |Link strategy, depends on data provider: `ucmP8` - FileNet, `ucmCMIS` - CMIS, `ucmBox` - Box, `ucmCmod` - CMOD, `ucmUie` - Enterprise Search, `ucmSp` - SharePoint |
|DocumentLinkScope |Document link scope |
|FolderPath   |Optional. In order to show case folders for attachments search template, this parameter should equal `/`|

<sup>1</sup> See [macros configuration](./basic-steps.md#macros-configuration) for details.

# Criteria section configuration

Criteria section can contain a set of `Criterion`s to be used for rendering criteria search panel.

*content to be added*

## Category criteria 

[Facet (category) field](search-templates/facet-category-field.md)

# Sorting configuration
```xml
<SearchTemplate ID="templateByDate">
    <SortFields>
        <SortField Order="DESC">$modify_date</SortField>
        <SortField Order="ASC">$title</SortField>
    </SortFields>
    <!-- not relevant nodes skipped -->
</SearchTemplate>
```

| Parameter           | Description |
|:--------------------|:------------|
| SortField           | `SortField` value refers to a [Property](tags-list/properties-tag.md) `ID` attribute (the property should be sortable).  Default sorting may be defined on the [Grid](../configuration/grids.md#multiple-column-sorting) level or on the `SearchTemplate` level. If defined on both levels, setting from the `Grid` is in effect.     |
| SortField >> Order  | Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). |