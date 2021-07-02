---
title: Attach Document Action Configuration
layout: docs
category: Unity 7
---
[Attach a Local Document to the Case feature description](../../features/case-management/attach-document.md)

For `Attach document` action following section should be added to the Unity System XML file:

```xml
    <Action ID="attach.DiffProperties" multiselect="true" scope="single" type="toolbar">
      <Name>DiffProperties</Name>
      <IconCls>action-new</IconCls>
      <Tooltip>DiffProperties</Tooltip>
      <Uri/>
      <Parameters/>
      <CustomParameters>
        <ResourceName>documents</ResourceName>
        <ResourceType>DiffProperties</ResourceType>
        <ActionType>attach</ActionType>
        <ViewType>Create</ViewType>
      </CustomParameters>
    </Action>
```

`Attach document` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | `documents`   |
|ResourceType | The name of concrete resource type |
|ActionType   | `create`      |
|ViewType     | The name of view type |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag.md) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
