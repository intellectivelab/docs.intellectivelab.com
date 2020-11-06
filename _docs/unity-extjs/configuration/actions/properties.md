---
title: Properties Action Configuration
layout: docs
category: Unity 7
breadcrumbs: Unity ExtJs/Configuration/Actions
---
`Properties` action is responsible for `Properties` tab on Get Info dialog. This tab allows to view and update document 
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
