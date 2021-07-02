---
title: Case Attachments Search Template Configuration
layout: docs
category: Unity 7
---
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

Case attachments search template operation properties: 

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

<sup>1</sup> See [macros configuration](../basic-steps.md#macros-configuration) for details.
