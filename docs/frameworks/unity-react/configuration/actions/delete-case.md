---
title: Delete Case Action Configuration
layout: docs
category: Unity 7
---
[Delete Case feature description](../../features/case-management/delete-case)

For `Delete` case action following section should be added to the Unity System XML file:
 
```xml
<Action ID="deleteCase" multiselect="true" scope="single" type="toolbar">
  <Name>Delete</Name>
  <IconCls>action-delete</IconCls>
  <Tooltip>Delete case</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>cases</ResourceName>
    <ActionType>delete</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
</Action>
```

`Delete` case action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | cases       |
|ActionType   | delete      |

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 