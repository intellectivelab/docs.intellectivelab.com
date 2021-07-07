---
title: Grids Configuration
layout: docs
category: Unity 7
---
[Grid component description](../components/grid)

## Overview

*content to be added*

Grid configuration includes Toolbar with Actions configuration and Columns configuration. 

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

## Toolbar Tag

*content to be added*

### How to Add Action to the Grid

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

## Columns Tag

*content to be added*

Example:

```xml
	<Columns checkBoxModel="true" formatSet="default">
		<ColumnSet ID="document_search_All" type="all"/>
		<ColumnSet ID="document_search_Default" type="default"/>
		<ColumnSet ID="document_search_favorite" type="favorite"/>
	</Columns>
```

`ColumnSet` tag attributes:

|Attribute|Description|
|:--------|:----------|
|ID   | unique ColumnSet ID defined in [ColumnSets tag](tags-list/columnsets-tag)|
|type | type of column set (see a table below for details)|

|type value  |Description|
|:-----------|:----------|
| all     | makes optional properties available|
| default | columns shown by default|
| favorite| favorite columns are displayed before other columns and cannot be hidden|

Icon for context menu is displayed after the last favorite column.

## Grid Features Configuration

- [Nested Grids](grids/nested-grids)
