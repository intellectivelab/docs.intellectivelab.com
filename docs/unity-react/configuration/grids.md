---
title: Grids Configuration
layout: docs
category: Unity 7
---
[Grid Component description](../components/grid.md)

# How to Add Action to the Grid

*content to be added*

To see action in grid context-menu it should be added to grid configuration.

Example for Split Case action:

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
Example for Open In Office actions:

```xml
<Grid ID="document_search" enableColumnReorder="false" groupSearchResults="false">
  <Toolbar>
    <Actions>
      <!-- other actions -->
      <Action ID="openInOffice"/>
      <Action ID="checkOutOpenInOffice"/>
    </Actions>
  </Toolbar>
  <!-- not relevant nodes skipped -->
</Grid>

```
# Grid Features Configuration

- [Multiple column sorting](grids/multiple-column-sorting.md)
- [Pagination and infinite scrolling](grids/pagination-and-infinite-scrolling.md)  
- [Default action](grids/default-action.md)  
