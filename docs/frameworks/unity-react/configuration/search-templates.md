---
title: Search Templates Configuration
layout: docs
category: Unity 7
---
[Search Template Component description](../components/search-template)

*content to be added*
 
# Operation Section Configuration

## Documents/Cases/Workitems search

Set of properties inside `Operation` -> `OperationProperties` section depends on data provider and type of resource. 

[FileNet (CERepositoryDataProvider)](search-templates/filenet)  
[CMIS (CMISRepositoryDataProvider)](search-templates/cmis)  
[Box (BoxRepositoryDataProvider)](search-templates/box)  
[CMOD (CmodRepositoryDataProvider)](search-templates/cmod)  
[CM8 (Cm8RepositoryDataProvider)](search-templates/cm8)  
[Enterprise search](search-templates/enterprise-search)  
[DB (DBRepositoryDataProvider)](search-templates/db)  
[SharePoint](search-templates/sharepoint)  
[LDAP (LdapProvider)](search-templates/ldap)  

## Search templates for view action tabs

[Document versions](search-templates/document-versions)  
[Case attachments](search-templates/case-attachments)

# Criteria Section Configuration

Criteria section can contain a set of `Criterion`s to be used for rendering criteria search panel.

*content to be added*

## Quick Search criteria

[Quick Search feature description](../components/search-template/quick-search)

Quick Search feature appears when at least one search template criterion is marked as `QuickSearch`.

- Date range section appears when at least one `date/datetime` type criterion is marked as `QuickSearch`
- Text input section appears when at least one `string` type criterion is marked as `QuickSearch`
- Choices and categories section appears when at least one `selector` type criterion is marked as `QuickSearch`  

| Parameter | Value|
|:----------|:-----|
|`QuickSearch` |`[true|false]` |

Set `true` to use criterion in the Quick Search. If it's not specified, the default value is `false`.

Example:

```xml
<SearchTemplate ID="document_Search_Documents">
    <Criteria>
        <Criterion>
            <FieldName>DocumentTitle</FieldName>
            <Type>string</Type>
            <Operator>starts</Operator>
            <Required>false</Required>
            <Hidden>false</Hidden>
            <Readonly>false</Readonly>
            <MultiValue>false</MultiValue>
            <QuickSearch>true</QuickSearch>
        </Criterion>
    </Criteria>
</SearchTemplate>
```

# Grouping Criteria

*content to be added*

| Parameter | Description| Value|
|:----------|:-----------|:-----|
|`Group/@ID`| | |
|`Group/@Title`| | |
|`Group/@Expanded` | allows to [show group expanded or collapsed](search-templates#expandcollapse-criteria-groups-by-default) by default | `[true|false]` |

## Expand/Collapse criteria groups by default

Groups of criteria can be shown collapsed or expanded by default.

| Parameter | Value|
|:----------|:-----|
|`Group/@Expanded` |`[true|false]` |

Set `true` to show criteria group expanded, `false` to show criteria group collapsed. If it's not specified, the default value is `true`.

Example:

```xml
<SearchTemplate ID="document_Search_Documents">
    <Groups>
        <Group ID="criteriagroup" Title="Search criteria" Expanded="false"/>
        <Group ID="multiValue" Title="Multi Value fields"/>
        <Group ID="selectors" Title="Selectors" Expanded="true"/>
        <Group ID="document_Search_Documents" Title="Documents searching" Expanded="false"/>
    </Groups>
</SearchTemplate>
```
It will look in application:

![Filters](search-templates/images/filters.png)

## Category criteria 

[Facet (category) field](search-templates/facet-category-field)

# Sorting Configuration
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
| `SortField`           | `SortField` value refers to a [Property](tags-list/properties-tag) `ID` attribute (the property should be sortable).  Default sorting may be defined on the [Grid](../configuration/grids/multiple-column-sorting) level or on the `SearchTemplate` level. If defined on both levels, setting from the `Grid` is in effect.     |
| `SortField/@Order`  | Optional `Order` attribute may have value `ASC` for ascending and `DESC` for descending order (`ASC` is a default). |

