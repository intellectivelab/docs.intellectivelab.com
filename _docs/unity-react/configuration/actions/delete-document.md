---
title: Delete Document Action Configuration
layout: docs
category: Unity 7
---
# Delete Document Action Configuration

For `Delete` document action following section should be added to the Unity System XML file:
 
```xml
<Action ID="deleteDocument" multiselect="true" scope="single" type="toolbar">
  <Name>Delete</Name>
  <IconCls>action-delete</IconCls>
  <Tooltip>Delete document</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>delete</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
</Action>
```

`Delete` document action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | documents   |
|ActionType   | delete      |

To see `Delete` action in grid context-menu it should be added to grid configuration, e.g.:

```xml
<Grid ID="document_search" enableColumnReorder="false" groupSearchResults="false">
  <Toolbar>
    <Actions>
      <!-- other actions -->
      <Action ID="deleteDocument"/>
    </Actions>
  </Toolbar>
  <!-- not relevant nodes skipped -->
</Grid>

``` 

To display `Delete` button on `Properties` tab of `Document Details` view, ensure that actionSet parameter inside 
Views/Documents/Open/Tabs[CaseType={appropriate_document_type}]/Tab/CustomParameters contains this action:

```xml
<SolutionConfig SolutionName="CustomerComplaints">
  <Views>
    <Documents>
      <Open>
        <Tabs DocumentType="DiffProperties" EnableSaveButton="true" EnableCloseButton="true">
          <Tab ID="1" Type="Details" Label="DiffProperties Properties" Tooltip="DiffProperties Properties" FieldSet="DiffProperties_Update">
            <Tools/>
            <CustomParameters>
              <!-- The set of Unity actions linked to this tab -->
              <Parameter Name="actionSet" Value="deleteDocument"/>
            </CustomParameters>
          </Tab>
          <!-- not relevant nodes skipped -->
        </Tabs>
        <!-- not relevant nodes skipped -->
      </Open>
      <!-- not relevant nodes skipped -->
    </Documents>
    <!-- not relevant nodes skipped -->
  </Views>
  <!-- not relevant nodes skipped -->
</SolutionConfig>
```

actionSet parameter contains set of actions, separated by comma 