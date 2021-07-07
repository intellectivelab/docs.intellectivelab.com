---
title: Workitem Details Action Configuration
layout: docs
category: Unity 7
---

[Workitem Details feature description](../../features/process-management/workitem-details)

For `Workitem Details` action following section should be added to the Unity System XML file:

```xml
<Action ID="editWorkItem" multiselect="true" scope="single" type="toolbar">
  <Name>Properties</Name>
  <IconCls>action-edit</IconCls>
  <Tooltip>Edit WorkItem</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>workitems</ResourceName>
    <ActionType>view</ActionType>
  </CustomParameters>
</Action>
```

`Workitem Details` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | `workitems`, indicates that action is related to workitem entity |
|ActionType   | `view`      |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
