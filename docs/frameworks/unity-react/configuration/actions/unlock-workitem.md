---
title: Unlock Workitem Action Configuration
layout: docs
category: Unity 7
---
[Unlock Workitem feature description](../../features/process-management/unlock-workitem) *to be added*

For `Unlock Workitem` action following section should be added to the Unity System XML file:

```xml
<Action ID="unlock" multiselect="true" scope="single" type="toolbar">
  <Name>Unlock</Name>
  <Tooltip>Unlock</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>workitems</ResourceName>
    <ActionType>unlock</ActionType>
  </CustomParameters>
</Action>
```

`Unlock Workitem` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `unlock` |
|ResourceName       | `workitems` |

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps).
