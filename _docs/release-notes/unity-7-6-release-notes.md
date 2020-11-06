---
title: Unity 7.6 Release Notes
layout: docs
category: Unity 7
breadcrumbs: Release Notes
---
# New Features
# Resolved Issues
# Installation Changes

Changes in the WebSphere Application Server should be executed for CMOD connector, use CMOD Connector Feature Guide.

# Configuration Changes

## U7-1609 (Popup dialog size is odd for adding comments)

MultiRow parameter should be added to the appropriate FieldSet, for example:

```xml
<FieldSet ID="Case_Comment">
    <Field ID="ucmAnnotationComment" Label="Comment" Required="true" Row="1" Column="1" MultiRow="true">
</FieldSet>
```

## U7-1241 (Unable to Implement 'AND' logic in 'ContextQuery' section of DataProvider)

The following Property `ContextQuery` should be changed for `AND` or `OR` operators supporting: 
```xml
<SearchTemplate ID="UCM_ICM_Case_Search-CustomerComplaints">
            …….
    <Operation dataProviderId="ucm_over_icm_provider" type="search">
        <OperationProperties>
            <Property ID="ContextQuery">
               {
                 "operation": "or",
                 "operand": [
                                          {"operation":"eq", "operand":[{"field":"ucmIcmCaseStatus"},{"value":"3"}]},
                                          {"operation":"starts", "operand":[{"field":"caseNumber"},{"value":"CC_"}]}
                        ]
                    }
            </Property>
                    …….
         </OperationProperties>
     </Operation>
            ……
 </SearchTemplate>
```

## U7-1284 (Missing Add  More button on Add Documents dialog)

The following configuration items can be used to specify properties list of the particular document type that must be cleared when adding of another document `Action /CustomParameters/RepositoryDataProvider/FieldsClearedOnAddMore`: 

```xml
<Action ID="ucmAddFileNetDocument" multiselect="true" scope="single" type="toolbar">
	<Name>Add Document</Name>
	<IconCls>action-add-document</IconCls>
	<Tooltip>Add Document</Tooltip>
	<Uri/>
	<Parameters>
		<DocumentClass>
			<RepositoryDataProvider> 
				...
			</RepositoryDataProvider>				
		</DocumentClass>
	</Parameters>
	<CustomParameters>
	<RepositoryDataProvider ID="icm_ucm_ce_target_provider:Target"> 
		<FolderPicker>
			<Visible>false</Visible>
		</FolderPicker>
		<Fields>
			<DocumentTitle>DocumentTitle</DocumentTitle>
		</Fields>
		<FieldsClearedOnAddMore>
			<Document>DocumentTitle,ObjectId,Id</Document>
			<DiffProperties>StringProp</DiffProperties>
		</FieldsClearedOnAddMore>
	</RepositoryDataProvider>
				…
		</Action>
```
## Process Mining

Unity Process Analytics

## Salesforce

Salesforce 2.1 Feature Guide

## U7-1202 (Missing Documents tab on Create Case View)

Configuration changes were described in the following documents:
UCM-ICM Feature Guide
UCM-JBPM Feature Guide

## U7-1263 ('All' role can be disabled via Unity config)

Set Unity system property to `true` in order to disable `All` role:

```xml
<SystemProperties>
...
		<Property ID="role.all_role.disabled" value="true"/>
...
</SystemProperties>
U7-1273 (Save Unity grids column size in cookies)
The following Unity configuration items are used to activate saving user preferences at browser local storage
<SystemProperties>
...
    <Property ID="user.settings.provider.providerClassName" value="com.vegaecm.vspace.settings.LocalStorageUserSettingsProvider"/>
    <Property ID="user.settings.provider.isLocalStorageUsed" value="true"/>
...
 </SystemProperties>
```

## U7-1314 (Missing Permissions tab on Add Document tool)

The following configuration item should be used to activate new `Add document` dialog with permissions tab support (`Action/CustomParameters/RepositoryDataProvider/XType` set to `widget.unity-add-document-dialog`):
```xml
<Action ID="ucmAddFileNetDocument" multiselect="true" scope="single" type="toolbar">
      <Name>Add Document</Name>
      <IconCls>action-add-document</IconCls>
      <Tooltip>Add Document</Tooltip>
...
      <CustomParameters>
        <RepositoryDataProvider ID="icm_ucm_ce_target_provider:Target"> 
...
          <XType>widget.unity-add-document-dialog</XType>
...
        </RepositoryDataProvider>
```

## U7-1053 (CM8 Connector for Unity)

Use CM8 Connector Feature Guide for configuration.

## U7-917 (CMOD Connector for Unity)

Use CMOD Feature Guide for configuration.


