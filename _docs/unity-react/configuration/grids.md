---
title: Grids Configuration
layout: docs
category: Unity 7
---
# How to Add Action to the Grid

*content to be added*

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
| SortField           | `SortField` value refers to a [Property](../configuration/properties.md) `ID` attribute (the property should be sortable).  Default sorting may be defined on the `Grid` level or on the [SearchTemplate](../configuration/search-templates.md#sorting-configuration) level. If defined on both levels, setting from the `Grid` is in effect.     |
| SortField >> Order  | Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). |