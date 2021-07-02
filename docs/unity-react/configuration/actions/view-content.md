---
title: View Content Action Configuration
layout: docs
category: Unity 7
---
[View Content feature description](../../features/document-management/view-content.md)

For `View Content` action following section should be added to the Unity System XML file:
 
```xml
<Action ID="preview" multiselect="true" scope="single" type="toolbar">
  <Name>View</Name>
  <IconCls>action-view</IconCls>
  <Tooltip>View</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>view_content</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
</Action>
```

`View Content` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | view_content|

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 