---
title: Multiple Documents Download Action Configuration
layout: docs
category: Unity 7
---
[Multiple Documents Download feature description](../../features/document-management/multiple-document-download.md)

For `Multiple Download` action following section should be added to the Unity System XML file:

```xml
<Action ID="download" multiselect="true" scope="single" type="toolbar">
      <Name>Multiple Download</Name>
      <Tooltip>Download multiple documents</Tooltip>
      <Uri>/unity/api/1.0.0/documents/download</Uri>
      <CustomParameters>
        <ActionType>multiple_download</ActionType>
        <ResourceType>DiffProperties</ResourceType>
        <Scope>sharepoint_repository</Scope>
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
|ActionType       | multiple_download |
|ResourceType     | In example above defined as `DiffProperties`. |
|Scope            | In example above defined as `sharepoint_repository`. |
|MaxFilesNumber   | In example above defined as `10`. <sup>1</sup>|

<sup>1</sup> `MaxFilesNumber` sets limited number of documents to download.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).
