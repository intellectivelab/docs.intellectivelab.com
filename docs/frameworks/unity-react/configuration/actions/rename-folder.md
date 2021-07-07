---
title: Rename Folder Action Configuration
layout: docs
category: Unity 7
---
[Rename a Folder feature description](../../features/folder-management/rename-folder)

For `Rename` folder action following section should be added to the Unity System XML file:

```xml
<Action ID="rename_folder">
    <Name>Rename</Name>
    <Tooltip>Rename</Tooltip>
    <CustomParameters>
        <ResourceName>folders</ResourceName>
        <ActionType>rename</ActionType>
        <NameProperty>name</NameProperty>
    </CustomParameters>
</Action>
```

`Rename` folder action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | folders   |
|ActionType   | rename |
|NameProperty   | ID of folder name property. Currently it should be always set to `name`   

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps).
