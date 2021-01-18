---
title: Grids Configuration
layout: docs
category: Unity 7
---
Grids configuration includes Toolbar with Actions configuration and Columns with ColumnSets configuration.
For example:

```xml
<Grid ID="document_search" enableColumnReorder="false" groupSearchResults="false">
	<Toolbar>
		<Actions>
			<Action ID="new_document_DiffProperties"/>
			<Action ID="new_document_Document"/>
			<Action ID="edit"/>
			<Action ID="preview"/>
			<Action ID="download"/>
			<Action ID="checkOut"/>
			<Action ID="checkIn"/>
			<Action ID="checkInDiffProperties"/>
			<Action ID="cancelCheckOut"/>
			<Action ID="delete"/>
		</Actions>
	</Toolbar>
	<Columns checkBoxModel="true" formatSet="default">
		<ColumnSet ID="document_search_All" type="all"/>
		<ColumnSet ID="document_search_Default" type="default"/>
		<ColumnSet ID="document_search_favorite" type="favorite"/>
	</Columns>
</Grid>
```
`ColumnSet` tag attributes:

|Attribute|Example value|Description|
|:--------|:------|:----------|
|ID   | document_search_All | unique ColumnSet ID|
|type | all     | makes optional properties available|
|     | default | columns shown by default|
|     | favorite| favorite columns are displayed before other columns and cannot be hidden|

## Nested grids

A new component can show cases with workitems as their nested elements in a result grid. 
It supports lazy loading: all children nodes are empty in the beginning and when user clicks on the expand button, nested workitems load along with workitem columns which can not hidden. 
Expanded cases can be collapsed so that workitems no longer shown in the grid.

New attribute nested="workitems" (workitems stands for the type of nested elements) is added to Grid configuration.

Icon for context menu is displayed after the last favorite column.

```xml
<Grid ID="UCM_ICM_Case_Search_CustomerComplaints" enableColumnReorder="false" groupSearchResults="false"  nested="workitems">
	<Toolbar>
		<Actions>
			<Action ID="editCase"/>
			<Action ID="splitCase"/>
			<Action ID="cancelCase"/>
			<Action ID="reopenCase"/>
			<Action ID="deleteCase"/>
			<Action ID="newCase_CustomerComplaints"/>				
				/*- workitems actions -*/
				<Action ID="editWorkItem"/>
				<Action ID="reassign"/>
				<Action ID="Bulk.reassign"/>
				<Action ID="lock"/>
				<Action ID="unlock"/>
				<Action ID="dispatch"/>
				<Action ID="dispatch.Processing"/>
				<Action ID="dispatch.InvalidBilling"/>
				<Action ID="dispatch.ValidBilling"/>
				<Action ID="dispatch.AskApproval"/>
				<Action ID="dispatch.Open"/>
				<Action ID="dispatch.Closed"/>
				<Action ID="dispatch.Reject"/>
				<Action ID="dispatch.Approve"/>
				<Action ID="dispatch.Exit"/>
				<Action ID="dispatch.CallCustomer"/>
		</Actions>
	</Toolbar>
    <Columns checkBoxModel="true" formatSet="default">
		<ColumnSet ID="Case_ICM_Search_Default" type="all"/>
		<ColumnSet ID="Case_ICM_Search_Default" type="default"/>
		<ColumnSet ID="Case_ICM_Search_favorite" type="favorite"/>
		<ColumnSet ID="Case_ICM_Search_workitems" type="workitems"/>
     </Columns>
</Grid>
```

Nested Grid Component do not allow different set of columns for parent(case) and child(workitem) items. They must all be defined together in the same columnset. Columns that do not apply are left empty in the row (i.e. workitems only properties are empty in the case rows).

ColumnSet [type="workitems"] should contain all workitems properties listed in Columnset [type=”all”]. The Type= value should match the Grid nested=”workitems” attribute value (i.e. workitems).

This allows the differentiation between case and workitem properties.

Example:

```xml
<ColumnSets>
	<ColumnSet ID="Case_ICM_Search_workitems">
		<Properties>
			<Property>ucmWiLockedBy</Property>
			<Property>ucmLockedStatus</Property>
			<Property>ucmWiName</Property>
			<Property>ucmComplaintCategory</Property>
		</Properties>
	</ColumnSet>
</ColumnSets>
```


# How to Add Action to the Grid

*content to be added*

To see action in grid context-menu it should be added to grid configuration.

Example for Open In Office 365 action:

```xml
<Grid ID="document_search" enableColumnReorder="false" groupSearchResults="false">
  <Toolbar>
    <Actions>
      <!-- other actions -->
      <Action ID="openInBrowser"/>
    </Actions>
  </Toolbar>
  <!-- not relevant nodes skipped -->
</Grid>

```

# Grid Features Configuration

*content to be added*
