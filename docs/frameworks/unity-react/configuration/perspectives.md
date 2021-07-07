---
title: Perspectives Configuration
layout: docs
category: Unity 7
---
Example of `Perspectives` section configuration:

```xml
<Perspectives>
  <Perspective default="true" iconCls="perspective-cls" id="search" title="All">
    <Dashboard builder="default" default="true" iconCls="dashboard-cls" id="DocumentsSearch" lazy="true" title="Documents Search" tooltip="Unity Documents Search">
      <Container ui="dropdown">
        <Component ref="document_Search_Documents" title="FileNet Documents" type="searchTemplate">
          <Property name="resourceName" value="documents"/>
          <Property name="queryScope" value="ce_repository"/>
        </Component>
        <Component ref="document_Search_alfresco" title="Alfresco Documents" type="searchTemplate">
          <Property name="resourceName" value="documents"/>
          <Property name="queryScope" value="cmis_alfresco_repository"/>
          <Property name="folderPath" value="/"/>
        </Component>
        <Component ref="document_search_file_Box" title="Box Documents" type="searchTemplate"/>
        <Component ref="uie_search" title="Enterprise Search" type="searchTemplate"/>
      </Container>
      <Security>
        <AllowRole>Unity Users</AllowRole>
      </Security>
    </Dashboard>
    <Dashboard builder="page" default="true" iconCls="dashboard-cls" id="CasesSearch" lazy="true" title="Cases Search" tooltip="UCM Cases Search">
      <Container ui="tabs">
        <Component ref="UCM_ICM_Case_Search-CustomerComplaints" title="Customer Complaints" type="searchTemplate">
          <Security>
            <AllowRole>Specialist</AllowRole>
            <AllowRole>Manager</AllowRole>
            <AllowRole>BillingAgent</AllowRole>
            <AllowRole>Investigator</AllowRole>
            <AllowRole>ContactCenter</AllowRole>
          </Security>
        </Component>
      </Container>
      <Security>
        <AllowRole>Specialist</AllowRole>
        <AllowRole>Manager</AllowRole>
        <AllowRole>BillingAgent</AllowRole>
        <AllowRole>Investigator</AllowRole>
        <AllowRole>ContactCenter</AllowRole>
      </Security>
    </Dashboard>
  </Perspective>
</Perspectives>
```

`Perspective` tag attributes:

| Attribute | Description                              | 
|:--------------|:-----------------------------------------|
| id            | Perspective id |
| default   | `[true|false]` determine whether perspective is default or not |
| iconCls         | Icon definition |
| title          | Title |

[Dashboards Configuration](./dashboards)  
[Charts Configuration](./charts)  
[Indicators Configuration](./indicators)  