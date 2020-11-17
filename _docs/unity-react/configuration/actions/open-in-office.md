---
title: Open in Office Actions Configuration
layout: docs
category: Unity 7
---
# Open in Office Actions Configuration via Unity Office Plugin

## Unity Office Plugin overview

[Unity Office Plugin](../../features/integration/unity-office-plugin.md)

## Open in Office action

For `Open in Office` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="openInOffice" multiselect="false" scope="any" type="toolbar">
  <Name>Open In Office</Name>
  <IconCls>action-view-link</IconCls>
  <Tooltip>Open In Office</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>open.addon</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security>
    <AllowRole>canView</AllowRole>
  </Security>
</Action>
```

`Open in Office` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents |
|ActionType   | open.addon|

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 

## Check Out and Open in Office action

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

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 

## Check out and open in browser action

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

## Open in desktop app action

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

##  Check out and open in desktop app action

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

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
