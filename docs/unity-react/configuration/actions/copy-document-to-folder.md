---
title: Copy Document to Folder Action Configuration
layout: docs
category: Unity 7
---
[Copy/Move Document to Folder feature description](../../features/document-management/copy-move-document-to-folder.md)

# Row Action Configuration

For `Copy Document to Folder` action following section should be added to the Unity System XML file:

```xml
<Action ID="copyToFolderWithRootFolder" multiselect="false" scope="single" type="toolbar">
  <Name>Copy To Folder</Name>
  <Tooltip>Copy document to folder</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>copy_to_folder</ActionType>
    <RootFolder>/Folder1/SubFolder</RootFolder>
  </CustomParameters>
</Action>
```

`Copy Document to Folder` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | copy_to_folder |
|RootFolder   | Optional. In example above defined as `/Folder1/SubFolder`. <sup>1</sup>|

<sup>1</sup> Configuration may include or not include root folder. If it is defined, only its subfolders can be chosen as a copy destination. If `RootFolder` parameter is omitted, repository root `/` is used.

An example of the action without root folder defined:

```xml
<Action ID="copyToFolderWithoutRootFolder" multiselect="false" scope="single" type="toolbar">
  <Name>Copy To Folder</Name>
  <Tooltip>Copy document to folder</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>copy_to_folder</ActionType>
  </CustomParameters>
</Action>
```

# Bulk Action Configuration

For bulk mode in React, separate `Copy Document To Folder` document action should be added: 

```xml
<Action ID="bulk.copyToFolderWithRootFolder" multiselect="false" scope="single" type="toolbar">
  <Name>Copy To Folder</Name>
  <Tooltip>Copy document(s) to folder</Tooltip>
  <Uri>api/1.0.0/documents/copy</Uri>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>copy_to_folder</ActionType>
    <RootFolder>/Folder1/SubFolder</RootFolder>
  </CustomParameters>
</Action>
```

Its configuration matches the [row action configuration](#row-action-configuration), but in addition it has special value in `Uri` parameter:

| Parameter   | Description |
|:------------|:------------|
|Uri          | api/1.0.0/documents/copy |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).