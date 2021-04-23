---
title: Delete Folder Action Configuration
layout: docs
category: Unity 7
---
[Delete Folder feature description](../../features/folder-management/delete-folder.md)

For `Delete` folder action following section should be added to the Unity System XML file:
 
```xml
<Action ID="delete_folder">
    <Name>Delete</Name>
    <Tooltip>Delete</Tooltip>
    <CustomParameters>
        <ResourceName>folders</ResourceName>
        <ActionType>delete</ActionType>
    </CustomParameters>
    <Security>
        <AllowRole>canDeleteDocument</AllowRole>
    </Security>
</Action>
```

`Delete` folder action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | folders   |
|ActionType   | delete      |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
