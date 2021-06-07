---
title: Cancel Check Out of a Document Action Configuration
layout: docs
category: Unity 7
---
[Cancel Check Out of a Document feature description](../../features/document-management/cancel-check-out-document.md)

For `Cancel Check Out` action following section should be added to the Unity System XML file:

```xml
<Action ID="cancelCheckOut" multiselect="true" scope="single" type="toolbar">
  <Name>Cancel Check Out</Name>
  <IconCls>action-cancel-checkOut</IconCls>
  <Tooltip>Cancel Check Out</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>cancelCheckOut</ActionType>
  </CustomParameters>
  <Security>
    <AllowRole>canCancelCheckOut</AllowRole>
  </Security>
</Action>
```

`Cancel Check Out` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `cancelCheckOut` |
|ResourceName       | `documents` |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
