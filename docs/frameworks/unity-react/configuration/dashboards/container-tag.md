---
title: Container Tag Configuration
layout: docs
category: Unity 7
---
```xml
<Perspective default="true" iconCls="perspective-cls" id="all" title="All">
  <Dashboard builder="default" default="true" iconCls="dashboard-cls" id="DocumentsSearch" lazy="true" title="Documents Search" tooltip="Unity Documents Search">
    <Container ui="tabs">
      <Component ref="document_Search_Documents" title="FileNet Documents" type="searchTemplate">
        <Property name="resourceName" value="documents"/>
        <Property name="queryScope" value="ce_repository"/>
        <Property name="folderPath" value="/"/>
      </Component>
      <Component ref="document_Search_alfresco" title="Alfresco Documents" type="searchTemplate">
        <Property name="resourceName" value="documents"/>
        <Property name="queryScope" value="cmis_alfresco_repository"/>
        <Property name="folderPath" value="/"/>
      </Component>
      <Component ref="document_search_file_Box" title="Box Documents" type="searchTemplate"/>
      <Component ref="uie_search" title="Enterprise Search" type="searchTemplate"/>
      <Component ref="search_cmod_tpl" title="CMOD Search" type="searchTemplate"/>
      <Component ref="cm8-search-tpl" title="CM8 Search" type="searchTemplate"/>
    </Container>
    <Security>
      <AllowRole>Unity Users</AllowRole>
    </Security>
  </Dashboard>
</Perspective>
```

| Parameter | Description |
|:----------|:------------|
|ui         | Container Ui representation. Available values: `tabs` / `toggle` / `dropdown` / `tree`. Default value: `tabs` (if attribute is absent / it's value is not specified / specified value is not allowed)|


An example of dashboard configuration including the tree view container with 4 search templates:
 
```xml
  <Dashboard builder="default" default="true" iconCls="dashboard-cls" id="DocumentsSearch" lazy="true" title="Documents Search" tooltip="Unity Documents Search">
	<Container ui="tree">
	  <Component ref="document_Search_Documents" title="FileNet Documents" type="searchTemplate">
		<Property name="resourceName" value="documents"/>
		<Property name="queryScope" value="ce_repository"/>
		<Property name="folderPath" value="/"/>
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
	  <AllowRole>Manager</AllowRole>
	  <AllowRole>Unity Users</AllowRole>
	</Security>
  </Dashboard>
```
   
[Component tag configuration](./component-tag)  
[Dashboards tag configuration](../dashboards)  
