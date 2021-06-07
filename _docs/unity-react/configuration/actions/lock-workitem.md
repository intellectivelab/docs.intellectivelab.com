---
title: Lock Workitem Action Configuration
layout: docs
category: Unity 7
---
[Lock Workitem feature description](../../features/process-management/lock-workitem.md)

For `Lock Workitem` action following section should be added to the Unity System XML file:

```xml
<Action ID="lock" multiselect="true" scope="single" type="toolbar">
  <Name>Lock</Name>
  <Tooltip>Lock</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>workitems</ResourceName>
    <ActionType>lock</ActionType>
  </CustomParameters>
</Action>
```

`Lock Workitem` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `lock` |
|ResourceName       | `workitems` |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).
