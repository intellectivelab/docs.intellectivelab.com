---
title: Facet (category) field configuration
layout: docs
category: Unity 7
---
# Facet (category) field configuration

## Common configuration rules

Besides common criteria tags like `FieldName`, `Type`, `Operator`, etc. category criterion have 2 additional: 
`Facets` & `Ui`.  

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

Ensure that `FieldName` tag has value of corresponding property, defined in `Properties` section 
([link](../properties.md))

Please refer this [link](../facets.md#terms-facet) for facets configuration information.

## Radio category criterion

## Toggle category criterion

## Checkbox category criterion

## Combobox category criterion

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

`FieldName` = `CustomerState`, so `CustomerState` property should be specified inside Properties section, e.g.:

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

Please refer to following [link](../facets.md#terms-facet) for more precise information on facets configuration