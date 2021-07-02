---
title: Open in Browser Action Configuration
layout: docs
category: Unity 7
---

For `Open in browser` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="openInBrowser" multiselect="false" scope="any" type="toolbar">
  <Name>Open In Office 365</Name>
  <IconCls>action-view-link</IconCls>
  <Tooltip>Open In Office 365</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>open.browser</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security>
    <AllowRole>canCheckOutDownload</AllowRole>
  </Security>
</Action>
```

`Open in browser` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents |
|ActionType   | open.browser|

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 

