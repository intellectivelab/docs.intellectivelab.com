---
title: Copy Case Action Configuration
layout: docs
category: Unity 7
---
[Copy a Case feature description](../../features/case-management/copy-case)

Copy Case Action configuration section should be added to the Unity System XML file. An example:

```xml

<Action ID="copyCase_CC_Complaint" multiselect="false" scope="single" type="toolbar">
    <Name>CopyCase</Name>
    <IconCls>action-edit</IconCls>
    <Tooltip>Copy Case</Tooltip>
    <Uri/>
    <Parameters/>
    <CustomParameters>
        <ResourceName>cases</ResourceName>
        <ResourceType>CC_Complaint</ResourceType>
        <ActionType>copy</ActionType>
        <ViewType>CopyCase</ViewType>
    </CustomParameters>
    <Security>
        <AllowRole>Unity Users</AllowRole>
        <!-- <DenyRole>Unity Users</DenyRole> -->
    </Security>
</Action>
```

Copy Case Action custom configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|ResourceName | `cases` |
|ActionType | `copy` |
|ResourceType | Optional. If not specified ResourceType of selected case will be used |
|ViewType | Optional. If not specified view link of the selected case will be used to fetch view configuration |

If action configuration contains references to ViewType, please make sure the proper views are defined in UCM Solution
XML file, for more details refer to [specify View](../tags-list/views-tag) guide:

```xml

<Tabs CaseType="CC_Complaint" ViewType="CopyCase" EnableSaveButton="true" EnableCloseButton="true">
    <Tab ID="1" Type="Details" Label="Copy Case" Tooltip="Copy Case" FieldSet="CC_CopyCase">
    </Tab>
</Tabs>
```


Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
