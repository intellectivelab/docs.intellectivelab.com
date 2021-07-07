---
title: Create Case Action Configuration
layout: docs
category: Unity 7
---
[Create a Case feature description](../../features/case-management/create-case)

For `Create` case action following section should be added to the Unity System XML file:
 
```xml
<Action ID="newCase_CustomerComplaints" multiselect="true" scope="single" type="toolbar">
  <Name>Customer Complaint</Name>
  <IconCls>action-new</IconCls>
  <Tooltip>Customer Complaint</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>cases</ResourceName>
    <ResourceType>CC_Complaint</ResourceType>
    <ActionType>create</ActionType>
  </CustomParameters>
  <Security>
    <AllowRole>canCreateCase</AllowRole>
  </Security>
</Action>
```

`Create` document action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | `cases`, indicates that action is related to case entity |
|ResourceType | The name of concrete resource type, case for this TaskType will be created |
|ActionType   | `create`      |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's required to [specify View](../tags-list/views-tag) in solution configuration file.

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
