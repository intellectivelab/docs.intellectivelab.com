---
title: Properties Tag Configuration
layout: docs
category: Unity 7
---
```xml
Property ID="ComplaintCategory">
	<Name>Complaint Category</Name>
	<Type>string</Type>
	<Resizable>true</Resizable>
	<Sortable>true</Sortable>
	<MultiValue>false</MultiValue>
	<Selector ID="CC_ComplaintCategorySelector"/>
	<XType/>
	<Tooltip/>
</Property>
```

| Parameter           | Description | Example |
|:--------------------|:------------|:--------|
| ID                  | Unique property identifier | ComplaintCategory |
| Name                | Property name will be displayed on UI | Complaint Category |
| Type                | Data type, possible values are defined in OperatorTypes section in the Unity config file: string, date, datetime, float, int, boolean | string |
| Resizable           | *true* if column in the grid can be resized | true |
| Sortable            | *true* if value in column can be sorted using this property | true |
| MultiValue          | *true* if several items can be defined for the property | true |
| Selector            |  Selector ID is shown if property contains a selector| CC_ComplaintCategorySelector |
| XType               | Defines how the property will look on UI: icon, size, string, etc. Possible values: vspace-doc-reserved-column, vspace-filesize-column, vspace-mime-column, ucm-icm-case-status-column, ucm-icm-task-status-column, ucm-icm-queue-el-locked-status-column, ucm-lock-user-column, vspace-version-status-column,   | |
| Tooltip             | Displayed on UI on mouse hover  | |
