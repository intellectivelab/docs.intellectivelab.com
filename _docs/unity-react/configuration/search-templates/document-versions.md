---
title: Document Versions Search Template Configuration
layout: docs
category: Unity 7
---
Example of configuration:

```xml
<SearchTemplate ID="document_versions_sharepoint_testteamsite">
  <DataProviderId>sharepoint_repository_testteamsite</DataProviderId>
  <Description>DiffProperties title</Description>
  <Comment>Enter search criteria</Comment>
  <Autoexecute>false</Autoexecute>
  <Hidden>true</Hidden>
  <Security>
    <AllowRole>Unity Users</AllowRole>
  </Security>
  <Operation dataProviderId="sharepoint_repository_testteamsite" type="search">
    <OperationProperties>
      <Property ID="ResourceName" type="FIRST">
        <SecuredValue>
          <Value>documents</Value>
        </SecuredValue>
      </Property>
    </OperationProperties>
  </Operation>
  <SortFields/>
  <Grid ID="testteamsite-getinfo-versions-grid"/>
  <Criteria/>
  <SavePanel>false</SavePanel>
</SearchTemplate>
```

Document versions search template operation properties: 

| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|

Document versions template as a part of TemplateSet:

```xml
<TemplateSet ID="document_versions-templates-set">
	<Template>document_versions_sharepoint_testteamsite</Template>
</TemplateSet>
```

| Parameter   | Description |
|:------------|:------------|
|TemplateSet ID| Template set identifier, should match `templateSet` parameter value in [Versions Tab configuration](../tags-list/views-tag.md#tabs-section-configuration-for-document-actions) |