---
title: Check Out and Open in Browser Action Configuration
layout: docs
category: Unity 7
---

For `Check out and open in browser` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="checkOutOpenInBrowser" multiselect="false" scope="any" type="toolbar">
  <Name>Check Out and Open In Office 365</Name>
  <IconCls>action-view-link</IconCls>
  <Tooltip>Check Out and Open In Office 365</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>checkout.browser</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security>
    <AllowRole>canCheckOutDownload</AllowRole>
  </Security>
</Action>
```

`Check out and open in browser` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents |
|ActionType   | checkout.browser|

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
