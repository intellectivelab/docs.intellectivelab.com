---
title: Grids Configuration
layout: docs
category: Unity 7
---
## Multiple Column Sorting
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
| SortField           | `SortField` value refers to a [Property](../configuration/properties.md) `ID` attribute (the property should be sortable).  Default sorting may be defined on the [SearchTemplate](../configuration/search-templates.md) level or on the `Grid` level. If defained on both levels, setting from the grid is in effect.     |
| SortField >> Order  | Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). |