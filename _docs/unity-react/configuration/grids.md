---
title: Grids Configuration
layout: docs
category: Unity 7
---
## Multiple Column Sorting

`Property` boolean attribute `Sortable` controls sorting by the column:

```xml
<Property ID="ContentSize">
    <Name>File Size</Name>
    <Type>int</Type>
    <Resizable>true</Resizable>
    <Sortable>true</Sortable>
    <MultiValue>false</MultiValue>
    <XType>vspace-filesize-column</XType>
    <Width>70</Width>
    <Tooltip/>
</Property>
```

Default sorting may be defined on the `SearchTemplate` level or on the `Grid` level. If defained on both levels, setting from the grid is in effect.

`SortField` value refers to a `Property`'s `ID` attribute (the property should be sortable).

Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). 

```xml
<SearchTemplate ID="templateByDate">
    <SortFields>
        <SortField Order="DESC">$modify_date</SortField>
        <SortField Order="ASC">$title</SortField>
    </SortFields>
    <!-- not relevant nodes skipped -->
</SearchTemplate>
```

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
