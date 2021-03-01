---
title: Properties Tag Configuration
layout: docs
category: Unity 7
---
# Properties Tag

`Properties` tag has no attributes and is a container for `Property` tags.

An example:

```xml
<Properties>
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
    <Property ID="CC_ComplaintCategory">
    	<Name>Complaint Category</Name>
    	<Type>string</Type>
    	<Resizable>true</Resizable>
    	<Sortable>true</Sortable>
    	<MultiValue>false</MultiValue>
    	<Selector ID="CC_ComplaintCategorySelector"/> /* Selector Definition */
    	<XType/>
    	<Tooltip/>
    </Property>
</Properties>
```

# Property Tag

| Parameter           | Description |
|:--------------------|:------------|
| ID                  | Unique property identifier |
| Name                | Property name will be displayed on UI |
| Type                | Data type, possible values are defined in OperatorTypes section in the Unity config file: string, date, datetime, float, int, boolean |
| Resizable           | *true* if column in the grid can be resized |
| Sortable            | *true* if value in column can be sorted using this property |
| MultiValue          | *true* if several items can be defined for the property |
| XType               | Defines how the property will look on UI: icon, size, string, etc. Possible values: vspace-doc-reserved-column, vspace-filesize-column, vspace-mime-column, ucm-icm-case-status-column, ucm-icm-task-status-column, ucm-icm-queue-el-locked-status-column, ucm-lock-user-column, vspace-version-status-column,   |
| Width               | Fixed column width  |
| Tooltip             | Displayed on UI on mouse hover  |
| Selector            | If a property in FieldSet contains a selector, it should be published here in Property section of Unity XML configuration file |



