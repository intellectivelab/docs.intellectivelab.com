---
title: Views Tag Configuration
layout: docs
category: Unity 7
---
# How to Add Action to the View

*content to be added*

## To display action button on `Properties` tab of `Case Details` view

To display action button on `Properties` tab of `Case Details` view, ensure that `actionSet` parameter in Solution config inside 
`Views/Cases/Active/Tabs[CaseType={appropriate_case_type}]/Tab/CustomParameters` contains this action.

Example for `Delete Case` action:

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

`actionSet` parameter contains set of actions, separated by comma.

## To display action button on `Properties` tab of `Document Details` view

To display action button on `Properties` tab of `Document Details` view, ensure that `actionSet` parameter inside 
`Views/Documents/Open/Tabs[CaseType={appropriate_document_type}]/Tab/CustomParameters` contains this action. 

Example for `Delete Document` action:

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

`actionSet` parameter contains set of actions, separated by comma.   