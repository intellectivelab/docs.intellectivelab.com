---
title: FieldSets Tag Configuration
layout: docs
category: Unity 7
---

# FieldSets Tag

`FieldSets` tag has no attributes and is a container for `FieldSet` tags.

An example:

```xml
<FieldSets>
    <FieldSet ID="AttachedDocuments">
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="MimeType" Label="MimeType" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" Tooltip="MimeType" WordWrap="false"/>
        <Field Column="0" ColumnWidth="50" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="DocumentTitle" Label="Document Type" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" SelectorID="DocCategorySelector" WordWrap="false"/>
    </FieldSet>
    <FieldSet ID="History">
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Format="m/d/Y g:i a" Hidden="false" ID="DateCreated" Label="" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" WordWrap="false"/>
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="Creator" Label="Creator" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" WordWrap="false"/>
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="CmAcmAction" Label="Action" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" WordWrap="false"/>
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="CommentType" Label="Type" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" WordWrap="false"/>
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="CmAcmCommentText" Label="Comment" Length="100" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" WordWrap="false"/>
    </FieldSet>
    <FieldSet ID="UserComment">
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="Description" Label="Problem description" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="true" Row="0" Rows="0" WordWrap="false"/>
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="Priority" Label="Problem priority" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" WordWrap="false"/>
        <Field Column="0" ColumnWidth="0" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="Justification" Label="Justification" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" WordWrap="false"/>
    </FieldSet>
    <FieldSet ID="WI_Reassign">
        <Field ID="targetUser" Label="Assignee" Required="true" Row="1" Column="1" SelectorID="reassignUsers"/>
        <Field ID="comment" Label="Comment" Required="true" Row="2" Column="1"/>
    </FieldSet>
</FieldSets>
```
# FieldSet Tag

An example:

```xml
<FieldSet ID="CaseReview">
	<Expando Expanded="true" Name="Case Variables">
		<Field ID="CC_CaseNumber" Label="Case Number" Favorite="false" Required="false" Row="1" Column="1"/>
		<Field ID="CC_CaseSource" Label="Case Sources" SelectorID="CC_CaseSource" Required="false" Row="1" Column="2"/>
	</Expando>
	<Expando Expanded="true" Name="Complaint Variables"> 
		<Field ID="CC_ComplaintDescription" Label="Complaint Description"/>
		<Field ID="CC_ComplaintCategory" Label="Complaint Category" SelectorID="CC_ComplaintCategorySelector" Required="false" Row="5" Column="1"/>
		<Field ID="CC_ComplaintStatus" Label="Complaint Status" SelectorID="CC_ComplaintStatusSelector" Tooltip="ComplaintStatus" Required="false" Row="5" Column="2"/>
		<Field ID="CC_ComplaintReceivedDate" Label="Complaint Received Date" Format="m/d/Y" Tooltip="ComplaintReceivedDate" Required="false" Row="6" Column="1" SaveTime="14:00:00"/>
	</Expando>
	<Field ID="CC_UpgradeCategory" Label="Upgrade Category" SelectorID="CC_UpgradeCategorySelector"/>
	<Field ID="CC_Valid" Label="Valid" Tooltip="Valid" Required="false" Row="7" Column="1"/>
	<Field ID="CC_UpsaleOpportunity" Label="Upsale Opportunity" Required="false" Row="7" Column="2"/>
</FieldSet>
```

`FieldSet` tag attributes:

| Attribute   | Description |
|:------------|:------------|
|ID | Field set identifier |

`FieldSet` tag is a container for `Field` tags.

# Field Tag 

`Field` tag represents a field, which is used to display or/and update object properties.

For example:

```xml
 <Field Column="0" ColumnWidth="50" Custom="false" DisableLookupValidation="false" DisplayTime="false" External="false" Favorite="false" Hidden="false" ID="DocumentTitle" Label="Document Type" Length="0" MultiRow="false" ReadFromWorkflow="false" ReadOnly="false" Required="false" Row="0" Rows="0" SelectorID="DocCategorySelector" WordWrap="false"/>
```

`Field` tag attributes:

| Attribute   | Description |
|:------------|:------------|
|ID | Field identifier |
|Label | Field label |
|Required | `[true|false]` flag indicating the field is required |
|Favorite | `[true|false]` flag indicating the field is favorite, i.e. will be used in header title |
|ReadOnly | `[true|false]` flag indicating the field is read-only, i.e. can not be modified |
|SelectorID | Selector identifier. If a property in FieldSet contains a selector, it should be published in Property section of Unity XML configuration file |
|Default | Default value |
|Format | The attribute is applied to numeric, date and datetime fields only and defines field format. Examples: `$1 000.00`, `d MMMM Y`, `d MMMM Y, HH:mm` |
|FolderPath | Used for folder path fields only<sup>1</sup> |

<sup>1</sup> To specify a path for [Attach Existing Document action](../actions/attach-existing-documents) use `FolderPath` attribute.  
For example:

```xml
    <Field ID="FolderPath" Label="Folder" Required="false" Row="2" Column="1" FolderPath="/Shared Documents" Default="/Shared Documents"/>
```

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

## How to format date fields

An example of formatted date field:

```xml
<Field ID="CC_ComplaintReceivedDate" Format="d MMMM Y" Label="Complaint Received Date" Tooltip="ComplaintReceivedDate" Required="false" Row="6" Column="1"/>
```

`Year`, `month` and `day of month` related patterns can be used. See [date-fns format patterns](https://date-fns.org/docs/format) for more details.

Output example: `26 February 2021`

## How to format datetime fields

An example of formatted datetime field:

```xml
<Field ID="CC_ComplaintReceivedDate" Format="d MMMM Y, HH:mm" Label="Complaint Received Date" Tooltip="ComplaintReceivedDate" Required="false" Row="6" Column="1"/>
```

`Year`, `month`, `day of month`, `hour`, `minute` related patterns can be used. See [date-fns format patterns](https://date-fns.org/docs/format) for more details.

Output example: `26 February 2021, 18:30`
