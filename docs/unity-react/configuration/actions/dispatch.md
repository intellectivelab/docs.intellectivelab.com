---
title: Dispatch Action Configuration
layout: docs
category: Unity 7
---
[Dispatch a Workitem feature description](../../features/process-management/dispatch.md) *to be added*

For `Dispatch` action following section should be added to the Unity System XML file:

```xml
<Action ID="dispatch.InvalidBilling" multiselect="true" scope="any" type="toolbar">
  <Name>Invalid Billing</Name>
  <IconCls>action-dispatch</IconCls>
  <Tooltip>Invalid Billing</Tooltip>
  <Uri>api/1.0.0/workitems/dispatch?response=InvalidBilling</Uri>
  <CustomParameters>
    <ResourceName>workitems</ResourceName>
    <Solution>CustomerComplaints</Solution>
    <ActionType>dispatch</ActionType>
    <Actions/>
  </CustomParameters>
</Action>
```

Action ID attribute should start with `dispatch.`. For default `Complete` action use `dispatch` identifier.

`Uri` should equal `api/1.0.0/workitems/dispatch?response=${RESPONSE_NAME}`, where `${RESPONSE_NAME}` 
is a response name. For default `Complete` action `${RESPONSE_NAME}` variable will be empty, i.e. `Uri` value equals 
`api/1.0.0/workitems/dispatch?response=`.

`Dispatch` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `dispatch` |
|ResourceName     | `workitems` |
|ViewType         | Optional. Defines view for the action, which also should exist in solution configuration file. When not specified, view for Workitem Details action is used (Details tab) |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
