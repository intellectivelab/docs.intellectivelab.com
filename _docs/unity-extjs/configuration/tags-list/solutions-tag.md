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

All or part of the parameters inside `ce-config` and `pe-config` subsections may be missing, if they are not necessary.  
