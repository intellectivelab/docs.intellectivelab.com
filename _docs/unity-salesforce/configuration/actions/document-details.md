---
title: Document Details Action Configuration
layout: docs
category: Unity 7
---
For `Document details` action following section should be added to the Unity System XML file:

```xml
<Action ID="edit" multiselect="true" scope="single" type="toolbar">
  <Name>Edit</Name>
  <IconCls>action-edit</IconCls>
  <Tooltip>Edit Properties</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>edit</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security/>
  <!-- not relevant nodes skipped -->
</Action>
```

`Document details` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | edit        |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag.md) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).