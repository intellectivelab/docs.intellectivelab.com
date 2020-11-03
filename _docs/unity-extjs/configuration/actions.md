---
title: Actions Configuration
layout: docs
category: Unity 7
---

# Overview

Actions section in Unity configuration defines a list of available actions. 
```xml
<Actions>
 <Action ID="someAction">...</Action>
 <Action ID="someOtherAction">...</Action>
</Actions>
```

Action behavior customized by attributes and tags. There are attributes and tags common for most actions and [specific options](#specific-actions-options) for each action.  

# Common action attributes and tags

| Attribute | Description                              | 
|:--------------|:-----------------------------------------|
| ID            | Identifier for the action. Must be unique in the scope of Actions configuration. ID mapped to js ActionHandler function that actually "perform" an action. Other config sections use ID to reference specific action.|
| multiselect   | ```[true|false]``` TBD|
| scope         | ```[single|any]``` TBD|
| type          | ```[toolbar|context-menu|column-click]``` TBD|


| Tag       | Description                              | 
|:----------|:-----------------------------------------|
| Name      | Action name shown in toolbar or context menu.|
| IconCls   | Icon definition as CSS class identifier (vu.css) |
| Tooltip   | Tooltip text shown for mouse over  |
| Security  | [Action security restrictions](../../unity-react/configuration/access-roles.md#security-restrictions) | 
| CustomParameters  | Define custom action parameters. Could be overridden per data provider.   | 

# Specific actions options

## Document related actions

- [Add Document](actions/add-document.md)
- [Get Info](actions/get-info.md)
- [Properties](actions/properties.md)

## Case related actions

## Workitem related actions

## Other actions