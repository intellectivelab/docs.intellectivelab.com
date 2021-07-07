---
title: Check out and Open in Desktop App Action Configuration
layout: docs
category: Unity 7
---

For `Check out and open in desktop app` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="checkOutOpenInDesktopApp" multiselect="false" scope="any" type="toolbar">
  <Name>Check Out and Open In Office Desktop App</Name>
  <IconCls>action-view-link</IconCls>
  <Tooltip>Check Out and Open In Office Desktop App</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>checkout.desktop</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security>
    <AllowRole>canCheckOutDownload</AllowRole>
  </Security>
</Action>
```

`Check out and open in desktop app` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents |
|ActionType   | checkout.desktop|

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
