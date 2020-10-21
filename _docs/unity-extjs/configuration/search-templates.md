---
title: Search Templates Configuration
layout: docs
category: Unity 7
---
# Example of SearchTemplate configuration

```xml
  <SearchTemplate ID="document_Search_DateAdded">
            <DataProviderId>ce_repository</DataProviderId>
            <Description>Document date</Description>
            <Comment>Enter search criteria</Comment>
            <Autoexecute>false</Autoexecute>
            <Hidden>false</Hidden>
			<QueryPlugin>orGroupSupportTemplateQueryPlugin</QueryPlugin>
			<SavePanel>true</SavePanel>
            <Security>
                <AllowRole>Unity Users</AllowRole>
            </Security>
            <Operation dataProviderId="ce_repository" type="search">
                <OperationProperties>
                    <Property ID="objectStore" type="FIRST">
                        <SecuredValue>
                            <Value>SODemo</Value>
                        </SecuredValue>
                    </Property>
                </OperationProperties>
            </Operation>
            <SortFields/>
            <Grid ID="document_search"/>
            <Criteria>
				<Criterion>
                    <FieldName>DocumentTitle</FieldName>
                    <Comment>at least 3 characters are required to start the search</Comment>
                    <Type>string</Type>
                    <Operator>starts</Operator>
                    <Required>true</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
                    <MinLength>3</MinLength>
                    <MaxLength>20</MaxLength>
                    <GroupName>orGroup</GroupName>
                </Criterion>
                <Criterion>
                    <FieldName>DateCreated</FieldName>
                    <Type>datetime</Type>
                    <Operator>range</Operator>
                    <Required>false</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
					<DefaultValue>from:{Date.-3MONTH};to:{Date.+2YEARS}</DefaultValue>
                </Criterion>
                <Criterion>
                    <FieldName>DateLastModified</FieldName>
                    <Type>date</Type>
                    <Operator>range</Operator>
                    <Required>false</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
                </Criterion>
            </Criteria>
        </SearchTemplate>
```
# Clause configuration

All criteria work as `AND` clause but `OR` clause can be configured using specific plugin `orGroupSupportTemplateQueryPlugin`. 

Steps to configure `OR` clause: 
- [Plugin for `OR` clause](../configuration/plugins/plugin-for-or-clause.md) should be configured
- The following parameters should be added to the Search Templates: 

    ```xml
    <SearchTemplate ID="document_Search_DateAdded">
    ....
        <QueryPlugin>orGroupSupportTemplateQueryPlugin</QueryPlugin>
    ....
        <Criteria>
            <Criterion>
            ....
                <GroupName>orGroup</GroupName>
            ....
            </Criterion>
        </Criteria>
    </SearchTemplate>
    ```

# DefaultValue configuration

## Default values for Range operator for DateTime properties

```xml
<DefaultValue>from:01/10/2020;to:{Date.-3DAY}</DefaultValue>
```
DateMatch macros examples:

| Example             | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| /MONTH              | Round to the start of the current month                                 |
| /HOUR               | Round to the start of the current hour                                  |
| /DAY                | Round to the start of the current day                                   |
| +2YEARS             | Exactly 2 years in the future from now                                  |
| -1DAY               | Exactly 1 day prior to now                                              |
| /DAY+6MONTHS+3YEARS | 6 months and 3 days in the future from the start of the current day     |
| +6MONTHS+3YEARS/DAY | 6 months and 3 days in the future from now, rounded down to nearest day |

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
