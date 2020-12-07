---
title: Open in Office Actions Configuration
layout: docs
category: Unity 7
---
# Open in Office Actions Configuration via Unity Office Plugin

## Unity Office Plugin overview

*content to be added*

## Open in Office action

*content to be added*

## Check out and Open in Office action

*content to be added*

# Open in Office Actions Configuration for SharePoint documents

## Open in browser action

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

## Check out and Open in browser action

*content to be added*

## Open in desktop app action

For `Open in desktop app` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="openInDesktopApp" multiselect="false" scope="any" type="toolbar">
  <Name>Open In Office</Name>
  <IconCls>action-view-link</IconCls>
  <Tooltip>Open In Office</Tooltip>
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

##  Check out and Open in desktop app action

*content to be added*