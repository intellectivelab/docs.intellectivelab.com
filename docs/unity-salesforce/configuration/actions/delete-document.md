---
title: Delete Document Action Configuration
layout: docs
category: Unity 7
---
For `Delete document` action following section should be added to the Unity System XML file:

```xml
<Action ID="delete" multiselect="true" scope="single" type="toolbar">
	<Name>Delete</Name>
	<IconCls>action-delete</IconCls>
	<Tooltip>Delete document</Tooltip>
	<Uri/>
	<Parameters/>
	<CustomParameters>
		<ResourceName>documents</ResourceName>
		<ActionType>delete</ActionType>
	</CustomParameters>
	<Security/>
</Action>
```

| Parameter   | Description | Value   |
|:------------|:------------|:--------|
|ResourceName | Indicated that action will be executed for a document | documents   |
|ActionType   | A dialog is not displayed | delete |
|Uri        | should be empty | |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).