---
title: Search Templates Configuration
layout: docs
category: Unity 7
---
*content to be added*
 
# Operation section configuration

## Documents/Cases/Workitems search

Set of properties inside `Operation` -> `OperationProperties` section depends on data provider and type of resource. 

[FileNet (CERepositoryDataProvider)](search-templates/filenet.md)  
[CMIS (CMISRepositoryDataProvider)](search-templates/cmis.md)  
[Box (BoxRepositoryDataProvider)](search-templates/box.md)  
[CMOD (CmodRepositoryDataProvider)](search-templates/cmod.md)  
[CM8 (Cm8RepositoryDataProvider)](search-templates/cm8.md)  
[Enterprise search](search-templates/enterprise-search.md)  
[DB (DBRepositoryDataProvider)](search-templates/db.md)  
[SharePoint](search-templates/sharepoint.md)  

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