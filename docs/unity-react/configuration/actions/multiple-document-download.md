---
title: Multiple Download Action Configuration
layout: docs
category: Unity 7
---
[Download Multiple Documents feature description](../../features/document-management/multiple-document-download.md)

For `Multiple Download` action following section should be added to the Unity System XML file:

```xml
<Action ID="download" multiselect="true" scope="single" type="toolbar">
      <Name>Multiple Download</Name>
      <Tooltip>Download multiple documents</Tooltip>
      <Uri>/unity/api/1.0.0/documents/download</Uri>
      <CustomParameters>
        <ActionType>multiple_download</ActionType>
        <ResourceType>DiffProperties</ResourceType>
        <Scope>inherit</Scope>
        <MaxFilesNumber>10</MaxFilesNumber>
      </CustomParameters>
</Action>
```
`Multiple Download` action requires `Uri` parameter:

| Parameter       | Description |
|:----------------|:------------|
|Uri              | `/unity/api/1.0.0/documents/download` |

`Multiple Download` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `multiple_download` |
|MaxFilesNumber   | Sets limited number of documents to download, in example above defined as `10`|

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).
