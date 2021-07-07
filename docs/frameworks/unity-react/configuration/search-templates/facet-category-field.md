---
title: Facet (category) field configuration
layout: docs
category: Unity 7
---
# Common configuration rules

Besides common criteria tags like `FieldName`, `Type`, `Operator`, etc. category criterion has 2 additional: 
`Facets` & `Ui`:  

| Parameter   | Description        |
|:------------|:-------------------|
|FieldName    |External field name |
|Type         |`fieldstats`|
|Operator     |`eq`|
|Required     |Only `false` is supported, `true` will not be taken into consideration|
|Hidden       |Only `false` is supported|
|Readonly     |Only `false` is supported|
|DefaultValue |Not supported|
|GroupName    |Optional, group identifier criterion belongs to|
|MultiValue   |This tag is not taken into consideration|
|Ui           |Category field Ui representation. Available values: `radio` / `toggle` / `checkbox` / `combobox`. Default value: `toggle` (if tag is absent / it's value is not specified / specified value is not allowed)|
|Facets       |This section is used to bind criteria field to a specific facet, so that criterion has ability to load facets' values|

Ensure that `FieldName` tag has value of corresponding property, defined in [Properties](../tags-list/properties-tag) section.  

For more information see [Terms Facets configuration](../tags-list/facets-tag#terms-facet).

# Radio category criterion

*content to be added*

# Toggle category criterion

*content to be added*

# Checkbox category criterion

*content to be added*

# Combobox category criterion

Example of criterion configuration:

```xml
<Criterion>
  <FieldName>CustomerState</FieldName>
  <Type>fieldstats</Type>
  <Operator>eq</Operator>
  <Required>false</Required>
  <Hidden>false</Hidden>
  <Readonly>false</Readonly>
  <MultiValue>true</MultiValue>
  <Ui>combobox</Ui>
  <Facets scope="analytics_actual_cases_repo">
    <Facet>cases-by-state-city</Facet>
  </Facets>
</Criterion>
```

`FieldName` = `CustomerState`, so `CustomerState` property should be specified in [Properties](../tags-list/properties-tag) section, e.g.:

```xml
<Property ID="CustomerState">
  <Name>Customer State</Name>
  <Type>string</Type>
  <Resizable>true</Resizable>
  <Sortable>true</Sortable>
  <MultiValue>false</MultiValue>
  <XType/>
  <Tooltip/>
</Property>
```

Example of `cases-by-state-city` and its inner facets configuration:

```xml
<Facets>
  <Facet field="Performer" id="performer" type="TERMS"/>
  <Facet field="CustomerCity" id="customer-city" type="TERMS"/>
  <Facet field="CustomerState" id="cases-by-state-city" type="TERMS">
    <Facet field="CustomerCity" id="customer-city" type="TERMS">
      <Facet field="Performer" id="performer" type="TERMS"/>
    </Facet>
  </Facet>
  <!-- other facets -->
</Facets>
```

For more information see [Terms Facets configuration](../tags-list/facets-tag#terms-facet).  