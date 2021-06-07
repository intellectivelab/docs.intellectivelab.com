---
title: Reassign Action Configuration
layout: docs
category: Unity 7
---

[Reassign feature description](../../features/process-management/reassign.md)

For `Reassign` action following section should be added to the Unity System XML file:

```xml
<Action ID="reassign" multiselect="false" scope="single" type="toolbar">
  <Name>Reassign</Name>
  <IconCls>action-reassign</IconCls>
  <Tooltip>Reassign Workitem</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>cases</ResourceName>
    <ResourceType>CC_Complaint</ResourceType>
    <ViewType>Reassign</ViewType>
    <ActionType>reassign</ActionType>
  </CustomParameters>
</Action>
```

`Reassign` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | `cases` |
|ResourceType | The name of concrete resource type |
|ActionType   | `reassign`      |
|ViewType     | The name of view type |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag.md) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 