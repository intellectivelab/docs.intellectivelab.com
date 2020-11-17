---
title: Create Document Action Configuration
layout: docs
category: Unity 7
---
For `Create` document action following section should be added to the Unity System XML file:
 
```xml
<Action ID="new_document_Document" multiselect="true" scope="single" type="toolbar">
  <Name>Documents\Document</Name>
  <IconCls>action-delete</IconCls>
  <Tooltip>Documents\Document</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ResourceType>Documents\Document</ResourceType>
    <ActionType>create</ActionType>
    <Scope>inherit</Scope>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
</Action>
```

`Create` document action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ResourceType | The name of concrete resource type |
|ActionType   | create      |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

It's also required to specify `View` in solution configuration file:

```xml
<Views>
  <Documents>
    <Create>
      <Tabs DocumentType="Documents\Document" Scope="sharepoint_repository_testteamsite" EnableSaveButton="true" EnableCloseButton="true">
        <Tab ID="1" Type="Details" Label="Document Properties" Tooltip="Document Properties" FieldSet="Document_Create_testteamsite">
          <Tools/>
        </Tab>
      </Tabs>
    </Create>
  <!-- not relevant nodes skipped -->
  </Documents>
<!-- not relevant nodes skipped -->
</Views>
```

`Tabs` tag parameters:

| Parameter   | Description |
|:------------|:------------|
|DocumentType | The name of concrete resource type view is created for.   |
|Scope        | Optional. The repository data provider id. No need to specify this parameter if DocumentType belongs to one data provider. |

