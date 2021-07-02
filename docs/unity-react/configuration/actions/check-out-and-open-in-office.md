---
title: Check Out and Open in Office Actions Configuration
layout: docs
category: Unity 7
---
[Unity Office Plugin](../../features/integration/unity-office-plugin.md)

For `Check Out and Open in Office` action following section should be added to the Unity System XML file:

```xml
<Action ID="checkOutOpenInOffice" multiselect="false" scope="any" type="toolbar">
  <Name>Check Out and Open in Office</Name>
  <IconCls>action-view-link</IconCls>
  <Tooltip>Check Out and Open in Office</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>checkout.addon</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security>
    <AllowRole>canCheckOutDownload</AllowRole>
  </Security>
</Action>
```

`Check Out and Open in Office` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents |
|ActionType   | checkout.addon |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
