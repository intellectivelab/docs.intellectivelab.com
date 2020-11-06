---
title: Delete Case Action Configuration
layout: docs
category: Unity 7
breadcrumbs: Unity React/Configuration/Actions
---
For `Delete` case action following section should be added to the Unity System XML file:
 
```xml
<Action ID="deleteCase" multiselect="true" scope="single" type="toolbar">
  <Name>Delete</Name>
  <IconCls>action-delete</IconCls>
  <Tooltip>Delete case</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>cases</ResourceName>
    <ActionType>delete</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
</Action>
```

`Delete` case action custom configuration parameters:

| Parameter   | Description |
|:------------|:------------|
|ResourceName | cases       |
|ActionType   | delete      |

To see `Delete` action in grid context-menu it should be added to grid configuration, e.g.:

```xml
<Grid ID="case_search" enableColumnReorder="false" groupSearchResults="false">
  <Toolbar>
    <Actions>
      <!-- other actions -->
      <Action ID="deleteCase"/>
    </Actions>
  </Toolbar>
  <!-- not relevant nodes skipped -->
</Grid>

``` 

To display `Delete` button on `Properties` tab of `Case Details` view, ensure that actionSet parameter inside 
Views/Cases/Active/Tabs[CaseType={appropriate_case_type}]/Tab/CustomParameters contains this action:

```xml
<SolutionConfig SolutionName="CustomerComplaints">
  <Views>
    <Cases>
      <Active>
        <Tabs CaseType="CC_Complaint" EnableSaveButton="true" EnableCloseButton="true">
          <Tab ID="1" Type="Details" Label="Properties" Tooltip="Properties" FieldSet="CaseReview">
            <Tools/>
            <CustomParameters>
              <!-- The set of Unity actions linked to this tab -->
              <Parameter Name="actionSet" Value="deleteCase"/>
            </CustomParameters>
          </Tab>
          <!-- not relevant nodes skipped -->
        </Tabs>
        <!-- not relevant nodes skipped -->
      </Active>
      <!-- not relevant nodes skipped -->
    </Cases>
    <!-- not relevant nodes skipped -->
  </Views>
  <!-- not relevant nodes skipped -->
</SolutionConfig>
```

`actionSet` parameter contains set of actions, separated by comma 