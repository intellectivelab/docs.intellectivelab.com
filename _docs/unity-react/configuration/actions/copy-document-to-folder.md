---
title: Copy Document To Folder Action Configuration
layout: docs
category: Unity 7
---
[Copy Document To Folder feature description](../../features/document-management/copy-document-to-folder.md)

For `Copy Document To Folder` document action following section should be added to the Unity System XML file:

Configuration may include or not include root folder. If it is defined, only its subfolders can be choosen as a copy destination.

Example of the action with root folder defined as '/Folder1/SubFolder':
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

Example of the action without root folder defined (all  folders will be presented starting from repository root '/'):
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

`Copy Document To Folder` document action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | copy_to_folder |
|RootFolder   | optional root folder (if omited, repository root '/' is used) |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).