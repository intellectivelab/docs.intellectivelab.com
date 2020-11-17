---
title: Delete Document Action Configuration
layout: docs
category: Unity 7
---
For `Delete` document action following section should be added to the Unity System XML file:
 
```xml
<Action ID="deleteDocument" multiselect="true" scope="single" type="toolbar">
  <Name>Delete</Name>
  <IconCls>action-delete</IconCls>
  <Tooltip>Delete document</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>delete</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
</Action>
```

`Delete` document action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | delete      |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 