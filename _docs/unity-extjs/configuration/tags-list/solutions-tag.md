---
title: Solutions Tag Configuration
layout: docs
category: Unity 7
---
Example:

```xml
<Solutions configFolder="./">
    <Solution file="customer-complaints-jbpm.xml" name="CustomerComplaints">
      <ce-config>
        <default-object-store name="Target">
          <server-uri>uri</server-uri>
          <object-store>Target</object-store>
        </default-object-store>
      </ce-config>
      <pe-config>
        <datasource>DS</datasource>
        <connection-point>CP</connection-point>
        <roster-name>RN</roster-name>
      </pe-config>
      <search-templates-folder/>
      <content-view-widget/>
    </Solution>
</Solutions>
```

|Tag             |Required/Optional|
|:---------------|:-------|
|Solution               |required|
|ce-config              |optional|
|default-object-store   |optional (required if `<ce-config>` exists)|
|server-uri             |optional|
|object-store           |optional|
|pe-config              |optional|
|datasource             |optional|
|connection-point       |optional|
|roster-name            |optional|
|search-templates-folder|optional|
|content-view-widget    |optional|

Tags marked as `required` are needed in configuration file to start the Unity application.
However, missing parameters may be necessary for the correct operation of individual parts of the application.
