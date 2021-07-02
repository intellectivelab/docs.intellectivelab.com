---
title: Properties Action Configuration
layout: docs
category: Unity 7
---
[View And Update Document Properties feature description](../../features/document-management/view-update-document-properties.md)

`Properties` action is responsible for `Properties` tab on [Get Info](get-info.md) dialog. This tab allows to view and update document 
properties. Example of action configuration:

```xml
<Action ID="properties" multiselect="false" scope="any" type="toolbar">
  <Name>Properties</Name>
  <IconCls>action-properties</IconCls>
  <Tooltip>Properties</Tooltip>
  <Uri>uri</Uri>
  <CustomParameters>
    <UpdateTemplate>properties_template</UpdateTemplate>
  </CustomParameters>
  <Security>
    <AllowRole>canViewGetInfoDocumentProperties</AllowRole>
  </Security>
</Action>
```

`Properties` action custom configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|UpdateTemplate | Update template identifier |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
