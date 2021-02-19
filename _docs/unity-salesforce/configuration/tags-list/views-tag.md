---
title: Action View Configuration
layout: docs
category: Unity 7
---
# Documents

## Actions with view

- [Create document](../actions/create-document.md)
- [Document details](../actions/document-details.md)
- Check In document

## Tabs section configuration

To create a view for document action, following tag should be added to solution configuration file:

```xml
<Tabs DocumentType="Documents\Document" Scope="sharepoint_repository_testteamsite" EnableSaveButton="true" EnableCloseButton="true">
  <!-- list of particular tabs -->
</Tabs>
```

`Tabs` tag should be placed inside one of following sections:

| Section                            | Action types |
|:-----------------------------------|:-------------|
| `Views` -> `Documents`             | checkin      |
| `Views` -> `Documents` -> `Create` | create       |
| `Views` -> `Documents` -> `Open`   | view         |

Tabs section attributes:

| Attribute    | Description | Example |
|:-------------|:------------|:--------|
| DocumentType | The name of concrete resource type view is created for, should match the `ResourceType` defined in the action custom parameters| Documents\Document |
| Scope        | Optional. The repository data provider id. No need to specify this parameter if DocumentType belongs to one data provider | sharepoint_repository_testteamsite |
| ViewType     | This parameter is required for `checkin` action and should match action's `ViewType` value | open |

Tabs section may contain one or more `Tab` tags.
 
### Properties tab

Example of `Properties` tab configuration:

```xml
<Tab ID="1" Type="Details" Label="Document Properties" Tooltip="Document Properties" FieldSet="Document_Create_testteamsite">
  <Tools/>
</Tab>
```

This tab is supported for all document actions listed in [Actions with view](#actions-with-view). Available attributes are in the table below:

| Attribute | Description         | Example |
|:----------|:--------------------|:--------|
| Type      | Tab type            | Details |
| ID        | Tab identifier      | 1       |
| Label     | Tab label           | Document Properties |
| FieldSet  | Fieldset identifier | Document_Create_testteamsite |

For `View` action it's possible to [add a toolbar with other actions](./views-tag/tab-action-set.md) on `Property` tab. 

#### FieldSet

`FieldSet` should contain a list of properties that will be displayed in the document creation dialog.

Example of `FieldSet` configuration for `Create document` view:

```xml
<FieldSet ID="Document_Create">
	<Field ID="DocumentTitle" Label="Document Title" Required="true" Row="1" Column="1" Favourite = "true"/>
</FieldSet>
```

If property contains a selector, include it in the Unity configuration XML file in the `Properties` section.

Example of property with selector for `Create document` dialog:

```xml
Property ID="ComplaintCategory">
	<Name>Complaint Category</Name>
	<Type>string</Type>
	<Resizable>true</Resizable>
	<Sortable>true</Sortable>
	<MultiValue>false</MultiValue>
	<Selector ID="CC_ComplaintCategorySelector"/>
	<XType/>
	<Tooltip/>
</Property>
```

### Versions tab

Example of `Versions` tab configuration:

```xml
<Tab ID="2" Label="Versions" Tooltip="Document Versions" Type="Versions">
  <CustomParameters>
    <Parameter Value="searchTemplate" Name="viewMode"/>
    <Parameter Value="document_versions_testteamsite-templates-set" Name="templateSet"/>
    <Parameter Value="testteamsite-getinfo-versions-grid" Name="gridId"/>
  </CustomParameters>
  <Tools/>
</Tab>
```

This tab is supported for `View` action only. Available attributes are in the table below:

| Attribute | Description         | Example  |
|:----------|:--------------------|:---------|
| Type      | Tab type            | Versions |
| ID        | Tab identifier      | 2        |
| Label     | Tab label           | Versions |

Custom parameters section should contain following parameters:

| Parameter name | Description         | Example |
|:---------------|:--------------------|:--------|
| viewMode       |              | searchTemplate |
| templateSet    | Versions template set id | document_versions_testteamsite-templates-set |
| gridId         | Grid id | testteamsite-getinfo-versions-grid |

### Search Template for document versions

The Search template for document versions also should contain the customer parameter `ResourceName`=documents.

Example of `TemplateSet` and `SearchTemplate` configuration for `Document Details` action:

```xml
<TemplateSet ID="document_versions-templates-set">
	<Template>document_versions_Search</Template>
</TemplateSet>

<SearchTemplate ID="document_versions_Search">
	<DataProviderId>ce_repository</DataProviderId>
	<Description>DiffProperties title</Description>
	<Comment>Enter search criteria</Comment>
	<Autoexecute>false</Autoexecute>
	<Hidden>true</Hidden>
	<Security>
		<AllowRole>Unity Users</AllowRole>
	</Security>
	<Operation dataProviderId="ce_repository" type="search">
		<OperationProperties>
			<Property ID="ResourceName" value="documents"/>
			<Property ID="objectStore" type="FIRST">
				<SecuredValue>
					<Value>SODemo</Value>
				</SecuredValue>
			</Property>
		</OperationProperties>
	</Operation>
	<SortFields/>
	<Grid ID="getinfo-versions-grid"/>
	<Criteria/>
</SearchTemplate>
```

# Cases

*content to be added*

# Work Items

*content to be added*
 