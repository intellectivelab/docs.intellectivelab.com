---
title: Grids Configuration
layout: docs
category: Unity 7
---
# How To Add Action To The Grid

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

# Multiple Column Sorting
```xml
<Grid ID="parents-grid">
    <Columns>
        <ColumnSet ID="grid-default-colset" type="default"/>
        <SortFields>
            <SortField Order="ASC">DocumentTitle</SortField>
            <SortField Order="DESC">ContentSize</SortField>
        </SortFields>
    </Columns>
    <!-- not relevant nodes skipped -->
</Grid>
```

| Parameter           | Description |
|:--------------------|:------------|
| SortField           | `SortField` value refers to a [Property](tags-list/properties-tag.md) `ID` attribute (the property should be sortable).  Default sorting may be defined on the `Grid` level or on the [SearchTemplate](../configuration/search-templates.md#sorting-configuration) level. If defined on both levels, setting from the `Grid` is in effect.     |
| SortField >> Order  | Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). |

# Pagination or Infinite Scrolling methods

Data loading method is controlled by `ui` optional attribute of the Grid.
By default, grid uses pagination. `ui` attribute may have following values.
| Value               | Description |
|:--------------------|:------------|
| paging              | Pagination is used      |
| infinite            | Infinite loading is used |

Any other value means using pagination.

```xml
<Grid ID="parents-grid" ui="infinite">
    <!-- not relevant nodes skipped -->
</Grid>

<Grid ID="relatives-grid" ui="paging">
    <!-- not relevant nodes skipped -->
</Grid>
```
