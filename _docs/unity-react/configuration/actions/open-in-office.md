---
title: Open in Office Action Configuration
layout: docs
category: Unity 7
---

# Open in Office via Unity Add-In

## Overview

[Unity Office Add-In](../../features/integration/unity-office-plugin.md)

## Open in Office Action

For `Open in Office` Action following section should be added to the Unity System XML file:
 
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

`Open in Office` Action custom configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|ResourceName | `documents` |
|ActionType | `open.addon` |

## Check Out and Open in Office Action

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

| Parameter | Description |
|:----|:-------------------|
|ResourceName | `documents` |
|ActionType | `checkout.addon` |

## Grid

Both actions should be added to grid configuration, e.g.:

```xml
<Grid ID="document_search" enableColumnReorder="false" groupSearchResults="false">
  <Toolbar>
    <Actions>
      <!-- other actions -->
      <Action ID="openInOffice"/>
      <Action ID="checkOutOpenInOffice"/>
    </Actions>
  </Toolbar>
  <!-- not relevant nodes skipped -->
</Grid>

``` 