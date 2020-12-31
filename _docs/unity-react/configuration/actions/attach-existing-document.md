---
title: Attach Existing Document Action Configuration
layout: docs
category: Unity 7
---
[Attach Existing Document feature description](../../features/case-management/attach-existing-document.md)

For ```Attach an existing document to a case``` action following section should be added to the Unity System XML file:

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

```Attach an existing document to a case``` action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ResourceType | The name of concrete resource type |
|ActionType   | attach      |
|ViewType     | Attach |


Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 

