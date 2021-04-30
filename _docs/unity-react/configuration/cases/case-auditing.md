---
title: Case Auditing Configuration
layout: docs
category: Unity 7
---

# Description 
You can configure auditing object classes including tracking case history and comments.
Unity allows to do it either through the default IBM Case Manager `CmAcmCaseComment` class or provided Unity custom class.

If there is no permission to create FileNet custom classes, then default `CmAcmCaseComment` class is the only option.
There is no visible difference on UI side between default `CmAcmCaseComment` class and Unity custom solution. Both options have the same capabilities.

# Configuration through Unity custom class

## Prerequisites
Installed IBM Case Manager.

## Configuration steps

To use OOTB ICM `CmAcmCaseComment` class for case audit logging and user comments instead of `Audit` and `UserComment` Unity custom classes. Please do the following steps:

1. Add `publicApi.forceNativeIcmAuditMode` Unity system boolean property with true value. Its default value is false.
    
    ```xml
    
    <SystemProperties>
        <Property ID="publicApi.forceNativeIcmAuditMode" value="true"/>
    </SystemProperties>
    ```
    
2. Set `SearchScope` property value to `CmAcmCaseComment` or `CmAcmCaseComment, Event` search scope at the case Comments/History search template:

    
    ```xml
    
    <SearchTemplate ID="UCM_CaseHistory_Search">
        ...
        <Operation dataProviderId="ucm_provider" type="search">
            <OperationProperties>
                ...
                <Property ID="SearchScope" type="FIRST">
                    <SecuredValue>
                        <Value>CmAcmCaseComment,Event</Value>
                    </SecuredValue>
                </Property>
                ...
            </OperationProperties>
            ...
        </Operation>
        ...
    </SearchTemplate>
    ```

3. Declare `eventActor`, `eventDate` and `eventTitle` Unity properties:

    ```xml
    
    <Properties>
        ...    
        <Property ID="eventActor">
            <Name>Creator</Name>
            <Type>string</Type>
            <Resizable>true</Resizable>
            <Sortable>true</Sortable>
            <MultiValue>false</MultiValue>
            <XType/>
            <Tooltip/>
        </Property>
        <Property ID="eventDate">
            <Name>Create date</Name>
            <Type>datetime</Type>
            <Resizable>true</Resizable>
            <Sortable>true</Sortable>
            <MultiValue>false</MultiValue>
            <XType/>
            <Tooltip/>
        </Property>
        <Property ID="eventTitle">
            <Name>Comment</Name>
            <Type>string</Type>
            <Resizable>true</Resizable>
            <Sortable>true</Sortable>
            <MultiValue>false</MultiValue>
            <XType/>
            <Tooltip/>
        </Property>
        ...    
    </Properties>
    ```

4. Add property mappings for `CmAcmCaseComment` CE class and remove all external property mappings beginning with `ucmAnnotation`:

    ```xml
    
    <RepositoryDataProvider ID="ucm_provider" class="com.vegaecm.vu.ucm.providers.UcmProvider">
        ...
        <PropertyNameMapper>
            ...
            <Mapping external="eventTitle" internal="CmAcmCommentText"/>
            <Mapping external="eventDate" internal="DateLastModified"/>
            <Mapping external="eventActor" internal="LastModifier"/>
            <Mapping external="eventActor" internal="Creator"/>
            ...
        </PropertyNameMapper>
    </RepositoryDataProvider>
    
    ```

5. Sort fields may contain `eventDate`, `eventActor`, and `eventTitle` declarations. Make sure all sort fields declarations starting with `ucmAnnotation` are removed:

    ```xml
    
    <Grid ID="UCM_CaseHistory_Search" enableColumnReorder="false" groupSearchResults="false">
        ...
        <Columns checkBoxModel="true" formatSet="default">
            ...
            <SortFields>
                <SortField Order="DESC">eventDate</SortField>
            </SortFields>
            ...
        </Columns>
    </Grid>
    
    ```

6. `ContextQuery` operation property should not contain any `not_null` clause with `ucmAnnotationAction`:

    ```xml
    
    <SearchTemplate ID="UCM_CaseHistory_Search">
        ...
        <Operation dataProviderId="ucm_over_icm_provider" type="search">
            <OperationProperties>
                <Property ID="ContextQuery" type="FIRST">
                    <SecuredValue>
                        <Value>{"operation":"eq",
                            "operand":[{"field":"AnnotatedObject"},{"value":"{Level.CaseObjectId}"}]}
                        </Value>
                    </SecuredValue>
                </Property>
                <Property ID="SolutionId" type="FIRST">
                    <SecuredValue>
                        <Value>CustomerComplaints</Value>
                    </SecuredValue>
                </Property>
                <Property ID="ResourceName" type="FIRST">
                    <SecuredValue>
                        <Value>cases</Value>
                    </SecuredValue>
                </Property>
                <Property ID="SearchScope" type="FIRST">
                    <SecuredValue>
                        <Value>CmAcmCaseComment</Value>
                    </SecuredValue>
                </Property>
            </OperationProperties>
        </Operation>
    </SearchTemplate>
    ```

7. For criteria, `eventTitle`, `eventDate`, or `eventActor` may be used. Make sure to remove all criteria starting with `ucmAnnotation`:

    ```xml
    
    <SearchTemplate ID="UCM_CaseHistory_Search">
        ...
        <Grid ID="UCM_CaseHistory_Search"/>
        ...
        <Criteria>
            <Criterion>
                <FieldName>eventTitle</FieldName>
                <Type>string</Type>
                <Operator>starts</Operator>
                <Required>false</Required>
                <Hidden>false</Hidden>
                <Readonly>false</Readonly>
                <MultiValue>false</MultiValue>
                <MaxLength>20</MaxLength>
            </Criterion>
        </Criteria>
    </SearchTemplate>
    
    ```

8. Use the `eventTitle`, `eventDate` or `eventActor` properties at the case history grid's `ColumnSet`s:
    
    ```xml
    
    <Grids>
        <Grid ID="UCM_CaseHistory_Search" enableColumnReorder="false" groupSearchResults="false">
            <Columns checkBoxModel="true" formatSet="default">
                <ColumnSet ID="UCM_ICM_CaseHistory_Search_All" type="all"/>
                <ColumnSet ID="UCM_ICM_CaseHistory_Search_All" type="default"/>            
            </Columns>
        </Grid>
    </Grids>
    
    ```
    
    ```xml
    
    <ColumnSets>
        <ColumnSet ID="UCM_ICM_CaseHistory_Search_All">
            <Properties>
                <Property>eventDate</Property>
                <Property>eventActor</Property>
                <Property>eventTitle</Property>
            </Properties>
        </ColumnSet>
        <ColumnSet ID="UCM_ICM_CaseHistory_Search_Default">
            <Properties>
                <Property>eventDate</Property>
                <Property>eventActor</Property>
                <Property>eventTitle</Property>
            </Properties>
        </ColumnSet>
    
    </ColumnSets>
    
    ```

## Solution configuration

FieldSet allows to customize what kind of comments user can leave. You can specify it on the FileNet side. 
By default, `CmAcmCommentText` is included on FileNet, and you can add it to the `Case_Comment` FieldSet:

```xml
<FieldSet ID="Case_Comment">
    <Field ID="CmAcmCommentText" Label="Comment" Required="true" Row="1" Column="1" MultiRow="true"/>
</FieldSet>

```
