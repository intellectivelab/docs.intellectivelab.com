---
title: SharePoint Selectors Tag Configuration
layout: docs
category: Unity 7
---
|**Note**: SharePoint Selectors Tag Configuration is the same for Unity ExtJs and Unity React.

# Description

SharePoint selectors use SharePoint REST API to read List metadata from SP. 
Check [generic selector configuration options](../selectors-tag.md#generic-selector-properties) first.

# Sharepoint Choice List Selector

*ClassName:* ```com.vegaecm.vspace.selectors.SharepointChoiceListSelector```
 
Use this selector to configure criterion selector for the choice field.
It reads an information from SharePoint choice data for a particular column in a list.
   
| Property ID | Property value                  | Example        |
|:------------------|:--------------------------------|:---------------|
| DocumentClass     | Required. Specify [SP content type](../../repository-data-providers/sharepoint.md#sharepoint-metadata-urls).  | Documents\Document| 
| FieldName         | Required. Specify [SP Field](../../repository-data-providers/sharepoint.md#sharepoint-metadata-urls).  | ChoiceColumn | 

This is a ["Cached" selector](../selectors-tag.md#description).

Example:

```xml 
<Selector ID="sp_choice_column">
    <ClassName>com.vegaecm.vspace.selectors.SharepointChoiceListSelector</ClassName>
    <Description>Choices from Sharepoint ChoiceColumn in Shared Documents library</Description>
    <Property ID="DataProviderId" value="sharepoint_repository"/>    
    <Property ID="FieldName" value="ChoiceColumn"/>
    <Property ID="DocumentClass" value="Documents\Document"/>
</Selector>
```

# SharePoint Lookup Selector
*ClassName:* ```com.vegaecm.vspace.selectors.SharepointLookupSelector```

Use this selector to configure criterion selector for the lookup field.
It reads selector items from SharePoint list items. 
SP list item ID always used as selector item value.
SP field to use as selector item name is configurable.

| Property ID       | Property value                  | Example        |
|:------------------|:--------------------------------|:---------------|
| DefaultList       | Required. Specify [SP List](../../repository-data-providers/sharepoint.md#sharepoint-metadata-urls) to read selector items.  | Documents\Document| 
| TitleField        | Optional. Defaults to BaseName. Specify [SP Field](../../repository-data-providers/sharepoint.md#sharepoint-metadata-urls) to use as selector item name. Item ID SP Field is always used as selector item value.   | ChoiceColumn | 

Example:

```xml
<Selector ID="sp_lookup_in_documents">
    <ClassName>com.vegaecm.vspace.selectors.SharepointLookupSelector</ClassName>
    <Description>Items in Sharepoint Shared Documents library</Description>
    <Property ID="DataProviderId" value="sharepoint_repository"/>    
    <Property ID="DefaultList" value="Documents"/>
    <Property ID="TitleField" value="BaseName"/>
</Selector>
```

This is a ["Cached" selector](../selectors-tag.md#description).

# SharePoint Principal Selector 

*ClassName:* ```com.vegaecm.vspace.selectors.SharepointPrincipalSelector```

Use this selector to configure criterion selector for SP people or group.
It reads selector items from site users and site groups. 
It could be configured to read:
 - people only
 - people and groups
 - people in specific group

| Property ID       | Property value                  | Example        |
|:------------------|:--------------------------------|:---------------|
| PeopleOnly        | Optional. Defaults to true. When true includes SP groups in selector.  | false | 
| ChooseFrom        | Optional. When configured reads SP people from specified group.  | RO Group | 
| TitleField        | Optional. Field used to represent selector name. nameDefaults to Title. | LoginName | 
| ValueField        | Optional. Field used to represent selector value. Defaults to Id. | Id |
| ShowHidden        | Optional. Defaults to false. Includes hidden SP people or groups in selector  | Title | 

This is a ["Cached" selector](../selectors-tag.md#description).

|*Notes* on ValueField setting

Let's have following [Property name mapping](../../repository-data-providers.md#property-name-mapping):

```xml
<PropertyNameMapper>
    <Mapping external="LastModifier" internal="Editor/Title"/>
    <Mapping external="LastModifierSearcher" internal="Editor"/>
</PropertyNameMapper>
```

LastModifier field is different from LastModifierSearcher.
LastModifierSearcher mapped to Editor SP Lookup field - selector could be used as is (it uses Id attribute as a selector value by default).
LastModifier mapped to Editor/Title SP field - selector must return Title field as a selector item value. Additional property should be configured for selector:

`<Property ID="ValueField" value="Title"/>`

|*Last note* - searching by Editor/Title will be slower than by Editor id.

Examples:

- All people

```xml
<Selector ID="sharepoint_people">
    <ClassName>com.vegaecm.vspace.selectors.SharepointPrincipalSelector</ClassName>
    <Property ID="DataProviderId" value="sharepoint_repository"/>
</Selector>
```

- All people and groups

```xml
<Selector ID="sharepoint_people_and_groups">
    <ClassName>com.vegaecm.vspace.selectors.SharepointPrincipalSelector</ClassName>
    <Property ID="DataProviderId" value="sharepoint_repository"/>
    <Property ID="PeopleOnly" value="false"/>
</Selector>
```

- All people in specific group

```xml
<Selector ID="sharepoint_people_in_group">
    <ClassName>com.vegaecm.vspace.selectors.SharepointPrincipalSelector</ClassName>    
    <Property ID="DataProviderId" value="sharepoint_repository"/>
    <Property ID="TitleField" value="LoginName"/>
    <Property ID="ChooseFrom" value="RO Group"/>
</Selector>
```

- All people including hidden

```xml
<Selector ID="sharepoint_people_hidden">
    <ClassName>com.vegaecm.vspace.selectors.SharepointPrincipalSelector</ClassName>    
    <Property ID="DataProviderId" value="sharepoint_repository"/>
    <Property ID="ShowHidden" value="true"/>
</Selector>
```

# SharePoint Document Class Selector 

*ClassName:* ```com.vegaecm.vspace.selectors.SharepointDocumentClassSelector```

Use this selector to configure document class selector for 
[React Create Document](../../actions/create-document.md) and
[Extjs Add Document](../../../../unity-extjs/configuration/actions/add-document.md) actions.
It represents content types for SharePoint list. 
This selector depends on node context when used in folder view.

| Property ID       | Property value                  | Example        |
|:------------------|:--------------------------------|:---------------|
| DefaultList       | Optional. Default to Documents. Specify [SP List](../../repository-data-providers/sharepoint.md#sharepoint-metadata-urls) to read selector items.  | Documents\Document|

Example:

```xml
<Selector ID="sp_doc_class_in_documents">
    <ClassName>com.vegaecm.vspace.selectors.SharepointDocumentClassSelector</ClassName>
    <Description>classes in Sharepoint Shared Documents library</Description>
    <Property ID="DataProviderId" value="sharepoint_repository"/>
    <Property ID="DefaultList" value="Documents"/>    
</Selector>
```

This is a ["Cached" selector](../selectors-tag.md#description).