---
title: Nested Grids Configuration
layout: docs
category: Unity 7
---
[Nested Grids feature description](../../components/grid/nested-grids.md)  

New attribute `nested="workitems"` (workitems stands for the type of nested elements) should be added to [Grid configuration](../grids.md):  

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

Nested Grid Component do not allow different set of columns for parent(case) and child(workitem) items. They must all be defined together in the same ColumnSet. Columns that do not apply are left empty in the row (i.e. workitems only properties are empty in the case rows).

ColumnSet `type="workitems"` should contain all workitems properties listed in ColumnSet `type=”all”`. The Type= value should match the Grid `nested=”workitems”` attribute value (i.e. `workitems`).

This allows the differentiation between case and workitem properties.

Example of properties configuration in `ColumnSets` tag:

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
