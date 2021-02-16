---
title: FieldSets Tag Configuration
layout: docs
category: Unity 7
---

# FieldSets tag

`FieldSets` tag has no attributes and is a container for `FieldSet` tags.

# FieldSet tag

`FieldSet` tag attributes:

| Attribute   | Description |
|:------------|:------------|
|ID | Field set identifier |

`FieldSet` tag is a container for `Field` tags.

# Field tag 

`Field` tag represents a field, which is used to display or/and update object properties.

`Field` tag attributes:

| Attribute   | Description |
|:------------|:------------|
|ID | Field identifier |
|Label | Field label |
|Required | `[true|false]` flag indicating the field is required |
|Favorite | `[true|false]` flag indicating the field is favorite, i.e. will be used in header title |
|ReadOnly | `[true|false]` flag indicating the field is read-only, i.e. can not be modified |
|SelectorID | Selector identifier |
|Default | Default value |
|Format | The attribute is applied to numeric fields only and defines field format. Example: $1 000.00 |
|FolderPath | Used for folder path fields only |

## How to format numeric fields

Format attribute structure:

{1}{2}1{3}000{4}{5}

{1} - prefix, e.g. `$`

{2} - `+` if negative numbers are not allowed, empty otherwise

{3} - thousands separator

{4} - decimal separator, optional

{5} - decimal scale, optional

| Format      | Description | Value -> Displayed value |
|:------------|:------------|:------------|
|$+1,000.00   | prefix - `$`, negative numbers are not allowed, thousands separator - comma, decimal separator - dot, decimal scale - 2 | `1234.52` -> `$1,234.52` <br/>`1234567` -> `$1,234,567.00` |
|EURO 1 000.0 | prefix - `EURO `, negative numbers are allowed, thousands separator - space, decimal separator - dot, decimal scale - 1 | `1234.5` -> `EURO 1 234.5` <br/>`1234567` -> `EURO 1 234 567.0` <br/>`-15.15` -> `EURO -15.1`|
|1,000        | no prefix, negative numbers are allowed, thousands separator - comma, no decimal separator, decimal scale - 0 | `1234` -> `1,234` |


## How to specify path for Attach Existing Document action

To specify a path to attach documents use `FolderPath` attribute.  
For example:

```xml
    <Field ID="FolderPath" Label="Folder" Required="false" Row="2" Column="1" FolderPath="/Shared Documents" Default="/Shared Documents"/>
```
