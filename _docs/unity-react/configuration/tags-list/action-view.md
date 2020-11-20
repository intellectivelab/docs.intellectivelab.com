---
title: Action View Configuration
layout: docs
category: Unity 7
---
# Documents

## Actions with view

- [Create document](../actions/create-document.md)

- [View document](../actions/view-document.md)

- [Check In document](../actions/checkin-document.md)

## Tabs section configuration

To create a view for document action, following tag should be added to solution configuration file:

```xml
<Tabs DocumentType="Documents\Document" Scope="sharepoint_repository_testteamsite" EnableSaveButton="true" EnableCloseButton="true">
  <!-- list of particular tabs -->
</Tabs>
```

Tabs tag should be placed inside one of following sections:

| Section                            | Action types |
|:-----------------------------------|:-------------|
| `Views` -> `Documents`             | checkin      |
| `Views` -> `Documents` -> `Create` | create       |
| `Views` -> `Documents` -> `Open`   | view         |

Tabs section attributes:

| Attribute    | Description |
|:-------------|:------------|
| DocumentType | The name of concrete resource type view is created for |
| Scope        | Optional. The repository data provider id. No need to specify this parameter if DocumentType belongs to one data provider |
| ViewType     | This parameter is required for `checkin` action and should match action's ViewType value |

Tabs section may contain one or more `Tab` tags
 
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

For `view` action it's possible to [add a toolbar with other actions](./views-tag.md) on `Property` tab. 

*content to be added (other tab types + fieldset configuration)*

# Cases

*content to be added*

# Work items

*content to be added*
