---
title: Create Document Action Configuration
layout: docs
category: Unity 7
---
[Create a Document feature description](../../features/document-management/create-document)

# Custom Parameters

For `Create document` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="new_document_Document" multiselect="true" scope="single" type="toolbar">
  <Name>Documents\Document</Name>
  <IconCls>action-new</IconCls>
  <Tooltip>Documents\Document</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ResourceType>Documents\Document</ResourceType>
    <ActionType>create</ActionType>
    <Scope>inherit</Scope>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
</Action>
```

`Create document` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ResourceType | The name of concrete resource type |
|ActionType   | create      |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps).

# Configuration Specific for Data Providers

## SharePoint data provider

SharePoint content types are unique in the scope of document libraries. 
So content type id value might be different between document libraries. 

When configuring `Create document` action, use `*` for `ResourceType` value, if the content type is not known in the scope of an action.
Data provider will select "default" document type for a new document.
Usually it is `Document` content type for the target document library.

 
