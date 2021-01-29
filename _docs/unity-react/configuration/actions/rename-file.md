---
title: Rename File Action Configuration
layout: docs
category: Unity 7
---
[Rename File feature description](../../features/document-management/rename-file.md)

# Rename File action configuration

For `Rename File` action following section should be added to the Unity System XML file:

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
|NameProperty   | ID of file name property. In example above defined as `DocumentTitleSearch`. <sup>1</sup>|

<sup>1</sup> Property identified by `NameProperty` has to be modifiable.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).