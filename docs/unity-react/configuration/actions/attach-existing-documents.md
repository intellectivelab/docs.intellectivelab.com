---
title: Attach Existing Documents Action Configuration
layout: docs
category: Unity 7
---
[Attach an Existing Document to the Case feature description](../../features/case-management/attach-existing-document.md)

For `Attach existing documents` action following section should be added to the Unity System XML file:

```xml
<Action ID="attach.existing.Documents" multiselect="true" scope="single" type="toolbar">
  <Name>Attach Sharepoint Documents</Name>
  <IconCls>action-new</IconCls>
  <Tooltip>Attach Sharepoint Documents</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ResourceType>Documents\Document</ResourceType>
    <ActionType>attach</ActionType>
    <ViewType>Attach</ViewType>
  </CustomParameters>
</Action>
```

`Attach existing documents` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ResourceType | The name of concrete resource type |
|ActionType   | attach      |
|ViewType     | Attach |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 

Specify a path using `FolderPath` attribute in [FieldSets tag](../tags-list/fieldsets-tag.md) in solution configuration file.  
For example:

```xml
    <Field ID="FolderPath" Label="Folder" Required="false" Row="2" Column="1" FolderPath="/Shared Documents" Default="/Shared Documents"/>
```