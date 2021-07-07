---
title: Check Out Document Action Configuration
layout: docs
category: Unity 7
---
[Check Out Document feature description](../../features/document-management/check-out-document)

For `Check Out` action following section should be added to the Unity System XML file:

```xml
<Action ID="checkOut" multiselect="true" scope="single" type="toolbar">
  <Name>Check Out</Name>
  <IconCls>action-checkOut</IconCls>
  <Tooltip>Check Out</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>checkout</ActionType>
  </CustomParameters>
  <Security>
    <AllowRole>canCheckOut</AllowRole>
  </Security>
</Action>
```

`Check Out` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `checkout` |
|ResourceName       | `documents` |

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
