---
title: Assignments Tag Configuration
layout: docs
category: Unity 7
---

# Description

`Assignments` tag allows assigning current date or current user to property.

# Current Date Assignment

The function `formatCurrentDate()` requires either no arguments or only ones from the table pattern column.

| Formatter | Description | Example | Pattern |
|-------|--------|---------|--------|
| ISO_LOCAL_DATE_TIME | ISO Local Date and Time | '2011-12-03T10:15:30' | 'yyyy-MM-dd\'T\'HH:mm:ss' |
| ISO_OFFSET_DATE_TIME | Date Time with Offset | '2011-12-03T10:15:30+01:00' | 'yyyy-MM-dd'T'HH:mm:ss.SSSZ' |
| ISO_INSTANT |	Date and Time of an Instant | '2011-12-03T10:15:30Z' | 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'' |

Examples:

```xml
<Assignments>
    <Assignment Expression="$e.formatCurrentDate('yyyy-MM-dd\'T\'HH:mm:ss')" FieldID="_DateCreated"/>
</Assignments>
```

```xml
<Assignments>
    <Assignment Expression="$e.formatCurrentDate()" FieldID="_DateUpdated"/>
</Assignments>
```

`_DateUpdated` and `_DateCreated` fields assigned to current date.

# Current User Assignment

To assign current user use function `currentUser()`.

Example:

```xml 
    <Assignment Expression="$e.currentUser()" FieldID="_LastComment"/>
```

`_LastComment` field assigned to current user.

[Inbaskets tag](../inbaskets-tag)  
