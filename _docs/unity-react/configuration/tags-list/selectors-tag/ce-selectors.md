---
title: IBM FileNet Content Engine Selectors Tag Configuration
layout: docs
category: Unity 7
---
|**Note**: IBM FileNet Content Engine Selectors Tag Configuration is the same for Unity ExtJs and Unity React.

# Description

CE selectors use standard CE engine client API (jace) for accessing to the CE repository.
Check [common selector configuration options](../selectors-tag.md#common-selector-properties) first.

# CE Selector

*ClassName:* ```com.vegaecm.vspace.selectors.CESelector```
 
This selector type allows executing of an arbitrary P8 CE SQL query and use result set as selector items. 

This is a ["Cached" selector](../selectors-tag.md#description).
   
| Property ID | Property value                  | Example        |
|:------------------|:--------------------------------|:---------------|
| Datasource     | Required. Specify CE data source ID. | ce_0 | 
| ObjectStore    | Optional. Specify CE object store name. The first object store of the CE data source will be used if omitted.  | SODemo | 
| RefreshTimeoutSec | Optional. Cache invalidation timeout in seconds. Default value: 86400 (one day)  | 86400 | 
| NameField     | Required. The CE result set column name to be used at "name" selector option value.  | name | 
| ValueField     | Required. The CE result set column name to be used at "value" selector option value.  | value | 
| NameFormat     | Optional. Allows to have complex formatted name constructed from several CE result set columns. The template string where each result set column can be referred as $_column_name_$.  | $name$ ($description$) | 
| Sql     | Required. CE SQL query.  | SELECT Id AS value, DocumentTitle AS name, EntryTemplateDescription AS description FROM EntryTemplate ORDER BY DocumentTitle ASC | 

Example:

```xml 
		<Selector ID="vcm_CESelector">
			<ClassName>com.vegaecm.vspace.selectors.CESelector</ClassName>
            <Datasource>ce_0</Datasource>
            <NameField>DocumentTitle</NameField>
            <ValueField>DocumentTitle</ValueField>
            <Property ID="Sql" value="SELECT DISTINCT DocumentTitle FROM Document ORDER BY DocumentTitle ASC"/>
        </Selector>
```

# CE Document Selector
*ClassName:* ```com.vegaecm.vspace.selectors.CeDocumentSelector```
 
This selector type allows executing of an arbitrary P8 CE SQL query and use result set as selector items.

This is a ["Direct" selector](../selectors-tag.md#description).

| Property ID | Property value                  | Example        |
|:------------------|:--------------------------------|:---------------|
| Datasource     | Required. Specify CE data source ID. | ce_0 | 
| ObjectStore    | Optional. Specify CE object store name. The first object store of the CE data source will be used if omitted.  | SODemo | 
| RefreshTimeoutSec | Optional. Cache invalidation timeout in seconds. Default value: 86400 (one day)  | 86400 | 
| NameField     | Required. The CE result set column name to be used at "name" selector option value.  | name | 
| ValueField     | Required. The CE result set column name to be used at "value" selector option value.  | value | 
| NameFormat     | Optional. Allows to have complex formatted name constructed from several CE result set columns. The template string where each result set column can be referred as $_column_name_$.  | $name$ ($description$) | 
| Sql     | Required. CE SQL query.  | SELECT Id AS value, DocumentTitle AS name, EntryTemplateDescription AS description FROM EntryTemplate ORDER BY DocumentTitle ASC | 

Example:

```xml
        <Selector ID="ce0_SODemo_docs_templates">
            <ClassName>com.vegaecm.vspace.selectors.CeDocumentSelector</ClassName>
            <Description/>
            <Property ID="Datasource" value="ce_0"/>
            <Property ID="ObjectStore" value="SODemo"/>
            <Property ID="RefreshTimeoutSec" value="86400"/>

            <Property ID="NameField" value="name"/>
            <Property ID="ValueField" value="value"/>
            <Property ID="NameFormat" value="$name$ ($description$)"/>
            
            <Property ID="Sql" value="SELECT Id AS value, DocumentTitle AS name, EntryTemplateDescription AS description FROM EntryTemplate ORDER BY DocumentTitle ASC"/>
        </Selector>
```

