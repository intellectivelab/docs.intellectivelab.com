---
title: Actions Configuration
layout: docs
category: Unity 7
---
# Common Actions Configuration Options

## Common actions configuration steps

- set [Common actions attributes and tags](#common-actions-attributes-and-tags)
- set [Specific actions configuration options](#specific-actions-configuration-options)
- [add action to Actions tag](#adding-action-to-actions-tag)
- [add action to the Grid](grids.md#how-to-add-action-to-the-grid)
- [add action to the View](tags-list/views-tag/tab-action-set.md#how-to-add-action-to-the-view) (optional)
- [specify View for the action](tags-list/views-tag.md) (required for particular actions)

## Common actions attributes and tags

Action behavior customized by attributes and tags. 
There are attributes and tags common for most actions: 

|Attribute            | Description         |
|:--------------------|:--------------------|
|*content to be added*|*content to be added*|

|Tag                  | Description         |
|:--------------------|:--------------------|
| Name      | Action name shown in toolbar or context menu.|
|*content to be added*|*content to be added*|
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

- [Create Document](../configuration/actions/create-document.md)
- [Edit Document Properties](actions/edit-document-properties.md)
- [Delete Document](../configuration/actions/delete-document.md)
- [Open in Office](../configuration/actions/open-in-office.md)
- [View Content](../configuration/actions/view-content.md)
- [Check In Document](../configuration/actions/checkin-document.md)

## Case related actions
 
- [Split Case](../configuration/actions/split-case.md)
- [Delete Case](../configuration/actions/delete-case.md)
- [Attach New Document to a Case](../configuration/actions/attach-document.md)
- [Attach Existing Document to a Case](../configuration/actions/attach-existing-document.md)
- [Detach Document](../configuration/actions/detach-document.md)

## Workitem related actions

## Other actions

- [Open by URL](../configuration/actions/open-by-url.md)
