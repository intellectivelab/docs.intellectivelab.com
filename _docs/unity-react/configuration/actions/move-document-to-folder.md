---
title: Move Document to Folder Action Configuration
layout: docs
category: Unity 7
---
[Copy/Move Document to Folder feature description](../../features/document-management/copy-move-document-to-folder.md)

## Row action configuration
For `Move Document to Folder` document action following section should be added to the Unity System XML file:

Configuration may include or not include root folder. If it is defined, only its subfolders can be chosen as a move destination.

Example of the action with root folder defined as '/Folder1/SubFolder':
```xml
<Action ID="moveToFolderWithRootFolder" multiselect="false" scope="single" type="toolbar">
  <Name>Move To Folder</Name>
  <Tooltip>Move document to folder</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>move_to_folder</ActionType>
    <RootFolder>/Folder1/SubFolder</RootFolder>
  </CustomParameters>
</Action>
```

Example of the action without root folder defined (all  folders will be presented starting from repository root '/'):
```xml
<Action ID="moveToFolderWithoutRootFolder" multiselect="false" scope="single" type="toolbar">
  <Name>Move To Folder</Name>
  <Tooltip>Move document to folder</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>move_to_folder</ActionType>
  </CustomParameters>
</Action>
```

`Move Document To Folder` document action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | move_to_folder |
|RootFolder   | optional root folder (if omitted, repository root '/' is used) |

## Bulk action configuration

For bulk mode in React, separate `Move Document To Folder` document action should be added. Its configuration matches the [row action configuration](#row-action-configuration), but in addition it has special value in `Uri` parameter: `api/1.0.0/documents/move`.

```xml
<Action ID="bulk.moveToFolderWithRootFolder" multiselect="false" scope="single" type="toolbar">
  <Name>Move To Folder</Name>
  <Tooltip>Bulk move document(s) to folder</Tooltip>
  <Uri>api/1.0.0/documents/move</Uri>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>move_to_folder</ActionType>
    <RootFolder>/Folder1/SubFolder</RootFolder>
  </CustomParameters>
</Action>
```

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).



