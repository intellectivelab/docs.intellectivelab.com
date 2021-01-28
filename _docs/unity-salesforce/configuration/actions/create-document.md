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

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ResourceType | Document    |
|ActionType   | create, dialog for document creation will be displayed |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |
|Uri        | should be empty |

It's required to [specify View](../tags-list/views-tag.md) in solution configuration file.

Example:
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



Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).