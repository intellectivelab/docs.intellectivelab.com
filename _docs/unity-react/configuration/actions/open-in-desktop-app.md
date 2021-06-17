---
title: Open in Desktop App Action Configuration
layout: docs
category: Unity 7
---
[Open a Document in Desktop App feature description](../../features/document-management/open-in-desktop-app.md)

For `Open in desktop app` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="openInDesktopApp" multiselect="false" scope="any" type="toolbar">
  <Name>Open In Office Desktop App</Name>
  <IconCls>action-view-link</IconCls>
  <Tooltip>Open In Office Desktop App</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>open.desktop</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security>
    <AllowRole>canCheckOutDownload</AllowRole>
  </Security>
</Action>
```

`Open in desktop app` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents |
|ActionType   | open.desktop|

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 

