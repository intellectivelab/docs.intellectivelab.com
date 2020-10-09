---
title: Split Case Configuration
layout: docs
category: Unity 7
---

# React UI Split Case

Split Case Action configuration section should be added to the Unity System XML file. An example:
 
```xml
    <Action ID="splitCase" multiselect="false" scope="single" type="toolbar">
        <Name>Split Case</Name>
        <IconCls>action-edit</IconCls>
        <Tooltip>Split Case</Tooltip>
        <Uri/>
        <Parameters/>
        <CustomParameters>
            <ResourceName>cases</ResourceName>
            <ActionType>split</ActionType>
		
<!-- Optional; used if need to replace view link for Original case page
            <ResourceType>CC_Complaint</ResourceType>
-->
<!-- Optional; used if need to replace view link for Original case page. If not specified View link from record will be used 
            <ViewType>Create</ViewType>
-->
 
<!-- The whole TargetResourceTypes is optional; if not specified case split page uses original case type/view -->
            <TargetResourceTypes viewType="Split"> <!-- viewType attribute is optional; if not specified Active Case view will be used -->
                <ResourceType>CC_Complaint</ResourceType>
                <ResourceType>CC_ComplaintProcessing</ResourceType>
            </TargetResourceTypes>
        </CustomParameters>
        <Security>
            <AllowRole>Unity Users</AllowRole>
            <!-- <DenyRole>Unity Users</DenyRole> -->
        </Security>
    </Action>
```

Split Case Action custom configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|ResourceName | `cases` |
|ActionType | `split` |
|ResourceType | Optional. if provided will be used to replace a view link for Original case page |
|ViewType | Optional. if provided will be used to replace a view link for Original case page. If not specified View link of the record will be used |
|TargetResourceTypes | Optional. Includes target resource types configuration. Please refer to the table below for details |

TargetResourceTypes parameters:

| Parameter | Description |
|:----|:-------------------|
| Parameter | Description |
|viewType | Optional. If not specified `Active` Case view will be used. Example: `Split` |
|ResourceType | Split target case type. Can be one to many ResourceType rows |

Action itself should be added to the actions list for grids:
  
```xml
<Grid ID="UCM_ICM_Case_Search_ComplaintsProcessing" enableColumnReorder="false" groupSearchResults="false">
    <Toolbar>
        <Actions>
            <Action ID="splitCase"/>
            <!-- other actions -->
        </Actions>
    </Toolbar>
    <!-- rest config-->
</Grid>        
```

If action configuration contains references to viewTypes, please make sure the proper views are defined in UCM Solution XML file:
```xml
<Tabs CaseType="CC_Complaint"  ViewType="Split">
    <Tab ID="1" Type="Details" Label="Properties" Tooltip="Properties" FieldSet="CaseReview">   
    </Tab>
</Tabs>
```

Security section defines action accessibility. Please refer to [Security Restrictions](../access-roles.md#security-restrictions) for more information about security configuration. 

