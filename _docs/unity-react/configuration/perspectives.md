---
title: Perspectives Configuration
layout: docs
category: Unity 7
---
# Perspectives

*Content to be added*

## Dashboards

*Content to be added*

### Containers

Containers are used to bundle components (for instance Search Templates) under a dashboard. 
The following Container UI variants are supported (`tabs` by default if not specified or another value provided):

- tabs
- dropdown
- toggle
- view_tabs
- tree

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
   
