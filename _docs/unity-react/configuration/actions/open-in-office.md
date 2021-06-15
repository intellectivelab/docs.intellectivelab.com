---
title: Open in Office Action Configuration
layout: docs
category: Unity 7
---
[Unity Office Plugin](../../features/integration/unity-office-plugin.md)

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
