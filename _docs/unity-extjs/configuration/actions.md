---
title: Actions Configuration
layout: docs
category: Unity 7
---
# Common Actions Configuration Options

## Common actions configuration steps

- set [Common actions attributes and tags](#common-actions-attributes-and-tags)
- set [Specific actions options](#specific-actions-configuration-options)
- [add action to Actions tag](#adding-action-to-actions-tag)
- [add action to the Grid](../../unity-react/configuration/grids.md#how-to-add-action-to-the-grid)

## Common actions attributes and tags

Action behavior customized by attributes and tags. 
There are attributes and tags common for most actions: 

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
| CustomParameters  | Defines custom action parameters. Could be overridden per data provider.   | 

## Adding action to `Actions` tag

Actions section in Unity configuration defines a list of available actions:

```xml
<Actions>
 <Action ID="someAction">...</Action>
 <Action ID="someOtherAction">...</Action>
</Actions>
```

Example:

*content to be added*

# Specific Actions Configuration Options

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
