---
title: FieldTypes Tag Configuration
layout: docs
category: Unity 7
---

# FieldTypes Tag

`FieldTypes` tag has no attributes and is a container for `FieldType` tags.

An example:

```xml
<FieldTypes>
    <FieldType AvailableWFResponsesField="false" ID="Boolean" MultiValue="false" Type="BOOLEAN" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiBoolean" MultiValue="true" Type="BOOLEAN" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="DateTime" MultiValue="false" Type="DATE" ValueFormat="XStreamDate" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiDateTime" MultiValue="true" Type="DATETIME" ValueFormat="XStreamDate" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="Float" MultiValue="false" Type="FLOAT" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiFloat" MultiValue="true" Type="FLOAT" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="String" MultiValue="false" Type="STRING" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiString" MultiValue="true" Type="STRING" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="Integer" MultiValue="false" Type="NUMERIC" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiInt" MultiValue="true" Type="NUMERIC" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiSelectedInteger" MultiValue="true" Type="NUMERIC" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiLongProperty" MultiValue="true" Type="NUMERIC" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiID" MultiValue="true" Type="STRING" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="MultiStringChoiceList" MultiValue="true" Type="STRING" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="IntegerChoiceList" MultiValue="false" Type="NUMERIC" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="StringChoiceList" MultiValue="false" Type="STRING" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="DocumentTitle" MultiValue="false" Type="STRING" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="DocCategory" MultiValue="false" Type="STRING" WFResponseField="false"/>
    <FieldType AvailableWFResponsesField="false" ID="DocCategoryType" MultiValue="false" Type="STRING" WFResponseField="false"/>
</FieldTypes>
```

# FieldType Tag

An example:

```xml
<FieldType AvailableWFResponsesField="false" ID="DateTime" MultiValue="false" Type="DATE" ValueFormat="XStreamDate" WFResponseField="false"/>
```

"XStreamDate" value can be supplemented with such parameters as input datetime format, frontend datetime format and timezone.

An example:

ValueFormat="XStreamDate(yyyy-MM-dd'T'HH:mm:ss;yyyy-MM-dd'T'HH:mm:ss.S'Z',GMT)"
- `yyyy-MM-dd'T'HH:mm:ss` - input datetime format for dispatching to store, if omitted `yyyy-MM-dd'T'HH:mm:ss` by default
- `yyyy-MM-dd'T'HH:mm:ss.S'Z'` - datetime format for sending to frontend, if omitted `MM/dd/yyyy` by default
- `GMT` - server timezone, if omitted `GMT` by default. Instead of timezone, it can also be a boolean value:
    - `false` - server timezone is taken
    - `true` - local client's timezone if `frontend.timezone` system property set to `client`

`FieldSet` tag attributes:

| Attribute   | Description |
|:------------|:------------|
|ID | Field identifier |
|Type | Field type |

*other attributes to be added*

| **Note:**
| Field type affects input field rendering and has precedence to property's `Type` value defined in [Property](./properties-tag) tag for the field in Unity configuration file. If neither `FieldType` nor `Property` are specified for the field, metadata type is used.

Available field `Type`s:

| Type        | Description | Example |
|:------------|:------------|---------|
| STRING      | String input / Selector |
| NUMBER      | Numeric input with integer value |
| NUMERIC     | Numeric input with integer value |
| INT         | Numeric input with integer value |
| MONEY       | Numeric input with double value |
| FLOAT       | Numeric input with float value |
| BOOLEAN     | Checkbox |
| DATE        | [Date picker](../../components/field/date-picker) |
| DATETIME    | [Date and time picker](../../components/field/datetime-picker) |
| TEXT        | Text area |