---
title: Create Document Action Configuration
layout: docs
category: Unity 7
---
[Create document feature description](../../features/document-management/create-document.md)

For `Create` document action following section should be added to the Unity System XML file:
 
```xml
<Action ID="new_document_Document" multiselect="true" scope="single" type="toolbar">
  <Name>Documents\Document</Name>
  <IconCls>action-delete</IconCls>
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

`Create` document action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ResourceType | The name of concrete resource type |
|ActionType   | create      |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag.md) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
