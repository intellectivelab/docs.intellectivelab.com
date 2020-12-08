---
title: Unity Components - Properties View Form
layout: docs
category: Unity 7
---
# Overview

# Properties View Form Features

## Configurable
## HTML5 input types support
## RTL & LTR support
## RTF support
## Date and time picker
## Date range picker
## Expression

Through the expression tag in the configuration files the current date can be passed to property.

For example, ```<Assignment Expression="$e.formatCurrentDate('yyyy-MM-dd\'T\'HH:mm:ss')" FieldID="_DateCreated"/>```

The function ```formatCurrentDate()``` requires either no arguments or only ones from the below table.

| Formatter | Description | Example | Pattern |
|-------|--------|---------|--------|
| ISO_LOCAL_DATE_TIME | ISO Local Date and Time | '2011-12-03T10:15:30' | 'yyyy-MM-dd\'T\'HH:mm:ss' |
| ISO_OFFSET_DATE_TIME | Date Time with Offset | '2011-12-03T10:15:30+01:00' | 'yyyy-MM-dd'T'HH:mm:ss.SSSZ' |
| ISO_INSTANT |	Date and Time of an Instant | '2011-12-03T10:15:30Z' | 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'' |

## Client-side select field
## Remote select field
## Lookup field
## Client-side form field validation
## Remote form field validation
## Ability to add a custom form field
## Ability to add a custom form field validation
## Linked selectors
## Form defaults
## Form sections (fields grouping)
## Form tabs
## Form actions
## Ability to add a custom form action
## Form layouting
## Docked viewport
## Tab viewport
