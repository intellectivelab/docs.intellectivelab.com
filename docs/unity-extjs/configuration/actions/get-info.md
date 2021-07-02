---
title: Get Info Action Configuration
layout: docs
category: Unity 7
---
[View And Update Document Properties feature description](../../features/document-management/view-update-document-properties.md)

Following action should be added to Unity system configuration XML file:
 
```xml
<Action ID="getinfo" multiselect="false" scope="any" type="toolbar">
  <Name>Get Info</Name>
  <IconCls>action-getinfo</IconCls>
  <Tooltip>Get Info</Tooltip>
  <Uri>uri</Uri>
  <CustomParameters>
    <Actions>
      <Action>properties</Action>
      <Action>versions</Action>
      <Action>getinfo-permissions</Action>
      <Action>getinfo-folderslist</Action>
    </Actions>
  </CustomParameters>
  <Security>
    <AllowRole>canViewGetInfo</AllowRole>
  </Security>
</Action>
```

`Get Info` action custom configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|Actions | This section contains set of actions, that represent tabs to be added to `Get Info` dialog |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 

For more details on each action see

- [properties action configuration](properties.md)

- versions action configuration

- getinfo-permissions action configuration

- getinfo-folderslist action configuration
