---
title: Create Folder Action Configuration
layout: docs
category: Unity 7
---
[Create a Folder feature description](../../features/folder-management/create-folder.md)

For `Create folder` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="create_folder">
    <Name>Create</Name>
    <Tooltip>Create</Tooltip>
    <CustomParameters>
        <ResourceName>folders</ResourceName>
        <ResourceType>*</ResourceType>
        <ActionType>create</ActionType>
    </CustomParameters>
    <Security>
        <AllowRole>canAddDocument</AllowRole>
    </Security>
</Action>
```

`Create folder` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | folders   |
|ResourceType | The name of concrete resource type, currently only default `*` is supported |
|ActionType   | create      |
|ViewType     | Optional. `Create` by default.      |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Tree View` component) |

It's required to [specify View](../tags-list/views-tag.md) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).
