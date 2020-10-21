---
title: Search Templates Configuration
layout: docs
category: Unity 7
---
# Search Templates configuration

*content to be added*
 
## Operation section configuration

*content to be added*

## Criteria section configuration

Criteria section can contain a set of `Criterion`s to be used for rendering criteria search panel.

### [Facet (category) field](search-templates/facet-category-field.md)


## Sorting configuration
```xml
<SearchTemplate ID="templateByDate">
    <SortFields>
        <SortField Order="DESC">$modify_date</SortField>
        <SortField Order="ASC">$title</SortField>
    </SortFields>
    <!-- not relevant nodes skipped -->
</SearchTemplate>
```

| Parameter           | Description |
|:--------------------|:------------|
| SortField           | `SortField` value refers to a [Property](../configuration/properties.md) `ID` attribute (the property should be sortable).  Default sorting may be defined on the `SearchTemplate` level or on the [Grid](../configuration/grids.md) level. If defined on both levels, setting from the grid is in effect.     |
| SortField >> Order  | Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). |