---
title: Case Details Action Configuration
layout: docs
category: Unity 7
---

[Case Details feature description](../../features/case-management/case-details)

For `Case Details` action following section should be added to the Unity System XML file:

```xml

<Action ID="editCase" multiselect="true" scope="single" type="toolbar">
    <Name>Properties</Name>
    <IconCls>action-edit</IconCls>
    <Tooltip>Edit Case</Tooltip>
    <Uri/>
    <Parameters/>
    <CustomParameters>
    <ResourceName>cases</ResourceName>
    <ActionType>view</ActionType>
    </CustomParameters>
</Action>
```

`Case Details` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | `cases`, indicates that action is related to case entity |
|ActionType   | `view`      |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
