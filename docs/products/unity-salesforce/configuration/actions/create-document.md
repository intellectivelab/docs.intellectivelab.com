---
title: Create Document Action Configuration
layout: docs
category: Unity 7
---
For `Create document` action following section should be added to the Unity System XML file:
```xml
<Action ID="new_document_Document" multiselect="true" scope="single" type="toolbar">
	<Name>Document</Name>
	<IconCls>action-new</IconCls>
	<Tooltip>Document</Tooltip>
	<Uri/>
	<Parameters/>
		<CustomParameters>
			<ResourceName>documents</ResourceName>
			<ResourceType>Document</ResourceType>
			<ActionType>create</ActionType>
		</CustomParameters>
		<Security/>
</Action>
```

| Parameter   | Description | Value   |
|:------------|:------------|:--------|
|ResourceName | Indicated that dialog for document creation will be displayed | documents   |
|ResourceType | Document with this document class will be created | Document    |
|ActionType   | Indicated that dialog for document creation will be displayed | create |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) | single |
|Uri        | should be empty | |

It's required to [specify View](../tags-list/views-tag) in solution configuration file.

Example of `Views` configuration for `Create Document` action:

```xml
<Views>
	<Documents>
		<Create>
			<Tabs DocumentType="Document" EnableSaveButton="true" EnableCloseButton="true">
				<Tab ID="1" Type="Details" Label="Document Properties" Tooltip="Document Properties" FieldSet="Document_Create">
					<Tools/>
				</Tab>
			</Tabs>
		</Create>
	</Documents>
</Views>
```

The FieldSet should contain a list of properties that will be displayed in the document creation dialog.

Example of `FieldSet` configuration for `Create Document` action:

```xml
<FieldSet ID="Document_Create">
	<Field ID="DocumentTitle" Label="Document Title" Required="true" Row="1" Column="1" Favourite = "true"/>
</FieldSet>
```

If property contains a selector, include it in the Unity config file in the `Properties` section.


Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps).