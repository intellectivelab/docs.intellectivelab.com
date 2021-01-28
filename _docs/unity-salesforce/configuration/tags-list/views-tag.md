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

| Attribute    | Description |
|:-------------|:------------|
| DocumentType | The name of concrete resource type view is created for, should match the `ResourceType` defined in the action custom parameters|
| Scope        | Optional. The repository data provider id. No need to specify this parameter if DocumentType belongs to one data provider |
| ViewType     | This parameter is required for `checkin` action and should match action's `ViewType` value |

Tabs section may contain one or more `Tab` tags.
 
### Properties tab

Example of `Properties` tab configuration:

```xml
<Tab ID="1" Type="Details" Label="Document Properties" Tooltip="Document Properties" FieldSet="Document_Create_testteamsite">
  <Tools/>
</Tab>
```

This tab is supported for all document actions listed in [Actions with view](#actions-with-view). Available attributes are in the table below:

| Attribute | Description         |
|:----------|:--------------------|
| Type      | `Details` (tab type)|
| ID        | Tab identifier      |
| Label     | Tab label           |
| FieldSet  | Fieldset identifier |

For `view` action it's possible to [add a toolbar with other actions](./views-tag/tab-action-set.md) on `Property` tab. 

#### FieldSet

`FieldSet` should contain a list of properties that will be displayed in the document creation dialog.

Example of `FieldSet` for `Create document` view:

```xml
<FieldSet ID="Document_Create">
	<Field ID="DocumentTitle" Label="Document Title" Required="true" Row="1" Column="1" Favourite = "true"/>
</FieldSet>
```

If property contains a selector, include it in the Unity config file in the Properties section.

Example of Property Selector for `Create document` dialog:

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

*content to be added (fieldset configuration)*

### Versions tab

Example of `Versions` tab configuration.

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

| Attribute | Description         |
|:----------|:--------------------|
| Type      | `Versions` (tab type)|
| ID        | Tab identifier      |
| Label     | Tab label           |

Custom parameters section should contain following parameters:

| Parameter name | Description         |
|:---------------|:--------------------|
| viewMode       | `searchTemplate`    |
| templateSet    | Versions template set id |
| gridId         | Grid id |


# Cases

*content to be added*

# Work Items

*content to be added*
 