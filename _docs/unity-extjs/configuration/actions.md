---
title: Actions Configuration
layout: docs
category: Unity 7
---
# Common Actions Configuration Steps

- add [Common actions attributes and tags](#common-actions-attributes-and-tags)
- add [Specific actions options](#specific-actions-options)
- add action to [Actions tag](tags-list/actions-tag.md)
- [add action to the Grid](../../unity-react/configuration/grids.md#how-to-add-action-to-the-grid)

# Common Actions Attributes and Tags

Action behavior customized by attributes and tags. 
There are attributes and tags common for most actions and [specific options](#specific-actions-options) for each action. 

| Attribute | Description                              | 
|:--------------|:-----------------------------------------|
| ID            | Identifier for the action. Must be unique in the scope of Actions configuration. ID mapped to js ActionHandler function that actually "perform" an action. Other config sections use ID to reference specific action.|
| multiselect   | `[true|false]` *content to be added* |
| scope         | `[single|any]` *content to be added* |
| type          | `[toolbar|context-menu|column-click]` *content to be added* |


| Tag       | Description                              | 
|:----------|:-----------------------------------------|
| Name      | Action name shown in toolbar or context menu.|
| IconCls   | Icon definition as CSS class identifier (vu.css) |
| Tooltip   | Tooltip text shown for mouse over  |
| Security  | [Action security restrictions](../../unity-react/configuration/security.md#security-restrictions) | 
| CustomParameters  | Define custom action parameters. Could be overridden per data provider.   | 

# Specific actions options

Action behavior customized by attributes and tags. 
There are attributes and tags [common for most actions](#common-actions-attributes-and-tags) and specific options for each action. 
Choose the action from the list below to find specific options for it.

## Document related actions

- [Add Document](actions/add-document.md)
- [Get Info](actions/get-info.md)
- [Properties](actions/properties.md)  
- [View](actions/view-document.md)

## Case related actions

## Workitem related actions

## Other actions
