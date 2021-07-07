---
title: Multiple Column Sorting Configuration
layout: docs
category: Unity 7
---
[Multiple Column Sorting feature description](../../components/grid/multiple-column-sorting)

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
| SortField           | `SortField` value refers to a [Property](../tags-list/properties-tag) `ID` attribute (the property should be sortable).  Default sorting may be defined on the `Grid` level or on the [SearchTemplate](../search-templates#sorting-configuration) level. If defined on both levels, setting from the `Grid` is in effect.     |
| SortField >> Order  | Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). |
