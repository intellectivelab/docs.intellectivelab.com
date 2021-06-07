---
title: Solutions Tag Configuration
layout: docs
category: Unity 7
---
# Solutions tag

Example of `Solutions` tag configuration:

```xml
<Solutions configFolder=".">
  <Solution file="customer-complaints-icm.xml" name="CustomerComplaints">
    <!-- not relevant nodes skipped -->
  </Solution>
</Solutions>
```

`Solutions` tag attributes:

| Attribute | Description |
|:----|:-------------------|
|configFolder | Absolute path to the folder containing solution configuration file. Use `.` (dot) if main and solution configuration files are located in the same folder |

# Solution tag

Example of `Solution` tag configuration:

```xml
<Solution file="customer-complaints-icm.xml" name="CustomerComplaints">
  <ce-config>
    <default-object-store name="CustomerComplaints">
      <server-uri>http://192.168.210.18:9080/wsi/FNCEWS40MTOM/</server-uri>
      <object-store>Target</object-store>
    </default-object-store>
    <document-object-stores includeDefault="true">
      <document-object-store name="CustomerComplaints">
        <server-uri>http://192.168.210.18:9080/wsi/FNCEWS40MTOM/</server-uri>
        <object-store>Target</object-store>
      </document-object-store>
    </document-object-stores>
  </ce-config>
  <pe-config>
    <datasource>FNTARGETDS</datasource>
    <connection-point>P8Conn1</connection-point>
    <roster-name>CustomerComplaints</roster-name>
  </pe-config>
  <search-templates-folder/>
  <content-view-widget/>
</Solution>
```

`Solution` tag attributes:

| Attribute | Description |
|:----|:-------------------|
|file | Solution configuration file name |
|name | Solution name |

If configuration contains no cases / workitems related search templates / actions, all the tags inside `Solution` can 
be skipped. However solution configuration file is **required** anyways.

*content to be added for inner tags*
