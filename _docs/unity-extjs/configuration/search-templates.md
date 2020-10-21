---
title: Search Templates Configuration
layout: docs
category: Unity 7
---
# UCM/ICM Search Templates Configuration

## Cases Search

At the SearchTemplate section `SearchScope` parameter will be used in `FROM` operator for FN SQL query.  
For example:

```xml
<Property ID="SearchScope">CmAcmCaseTask</Property>
“select * from CmAcmCaseTask where {form_filters}”
```

## WorkObjects Search

In order to configure SearchTemplate with WorkObjects  
- through the Queue it is necessary to put these parameters:

    ```xml
    <OperationProperties>
        <Property ID="SolutionId">CustomerComplaints</Property>
        <Property ID="UCM.PE.Queue">CC_Investigator</Property>
        <Property ID="UCM.PE.StepName">Investigator</Property>
    </OperationProperties>
    ```

- through the Database use following approach:

    ```xml
    <OperationProperties>
        <Property ID="SolutionId">CustomerComplaints</Property>
        <Property ID="UCM.DB.From">PEVQ1_CC_INVESTIGATOR</Property>
        <Property ID="UCM.DB.OrderBy">F_WorkSpaceId</Property>
        <Property ID="UCM.DB.Where"></Property>
    </OperationProperties>
    ```
  
- through the DB (My Work):

    ```xml
    <OperationProperties>
        <Property ID="SolutionId">CustomerComplaints</Property>
        <Property ID="UCM.DB.From">PEVQ1_INBOX</Property>
        <Property ID="UCM.DB.OrderBy">F_WorkSpaceId</Property>
        <Property ID="UCM.DB.Where">F_BOUNDUSER = $USER_ID</Property>
    </OperationProperties>
    ```

- through the roster (all workitems):

    ```xml
    <OperationProperties>
     <Property
    ID="SolutionId">CustomerComplaints</Property>
     <Property ID="UCM.PE.Queue">*</Property>
     </OperationProperties>
    ```
## Workbaskets

From the configuration perspective, UCM/ICM workbasket is a standard Unity search template. Based
on this, workbasket can be configured as a separate Unity tab. 

There is also the possibility to group set of workbaskets into a separate Unity tab. This can be
done through the new Unity tab component which is referenced by ‘advanced-search-templates-tab’ XType.
This component is very similar to the standard Unity search templates tab and provides
additional configuration options for grouping search templates:

- `templateSelectionType` – type of search templates grouping/selection. Allowed values:
    - selector - search templates will be displayed as combobox component
    - flat – search templates will be displayed in a tab panel view
- `templateSelectionOrientation` – applicable only for 'flat' type. Allowed values:
    - horizontal
    - vertical
    
Sample workbasket configuration:

```xml
<SearchTemplate ID="Case_Search-CustomerComplaints">
            <DataProviderId>ucm_provider</DataProviderId>
            <Description>CustomerComplaints : Case Search</Description>
            <Comment>Enter search criteria</Comment>
            <Autoexecute>true</Autoexecute>
            <Security>
                <AllowRole>ContactCenter</AllowRole>
                <AllowRole>BillingAgent</AllowRole>
                <AllowRole>Specialist</AllowRole>
                <AllowRole>Investigator</AllowRole>
            </Security>
            <Operation dataProviderId="ucm_provider" type="search">
                <OperationProperties>
                    <Property ID="SolutionId">CustomerComplaints</Property>
                    <Property ID="SearchScope">CASE</Property>
                </OperationProperties>
            </Operation>
            <SortFields />
            <Groups>
                <Group ID="criteriagroup" Title="Sample Case Search" />
            </Groups>
            <Grid ID="Case_Search" />
            <Criteria>
                <Criterion>
                    <FieldName>ucmCaseId</FieldName>
                    <Type>string</Type>
                    <Operator>starts</Operator>
                    <Required>false</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
                </Criterion>
                <Criterion>
                    <FieldName>ucmStatus</FieldName>
                    <Type>string</Type>
                    <Operator>eq</Operator>
                    <Required>false</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
                    <SelectorId>ucmCaseStatus</SelectorId>
                </Criterion>
            </Criteria>
        </SearchTemplate>
```
