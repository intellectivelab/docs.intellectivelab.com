---
title: Rename File Action Configuration
layout: docs
category: Unity 7
---
[Rename a File feature description](../../features/document-management/rename-file.md)

For `Rename File` document action following section should be added to the Unity System XML file:

```xml
<Action ID="renameFile" multiselect="false" scope="single" type="toolbar">
  <Name>Rename</Name>
  <Tooltip>Change document file name</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>rename</ActionType>
    <NameProperty>DocumentTitleSearch</NameProperty>
  </CustomParameters>
</Action>
```

`Rename File` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | rename |
|NameProperty   | ID of file name property that should be modifiable on repository level. In example above defined as `DocumentTitleSearch`. For SharePoint data provider `DocumentTitleSearch` property mapped to `FileLeafRef` internal property.|

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).