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

- [Create Document](actions/create-document.md)
- [Document Details](actions/document-details.md)
- [Open Document In Separate Tab](actions/open-in-separate-tab.md)  
- [Delete Document](actions/delete-document.md)
- [Open in Office](actions/open-in-office.md)
- [View Content](actions/view-content.md)
- [Check In Document](actions/checkin-document.md)
- [Copy Document to Folder](actions/copy-document-to-folder.md)
- [Move Document to Folder](actions/move-document-to-folder.md)
- [Multiple Download](actions/multiple-document-download.md)
- [Rename File](actions/rename-file.md)

## Case related actions

- [Create Case](actions/create-case.md)
- [Split Case](actions/split-case.md)
- [Delete Case](actions/delete-case.md)
- [Attach Document](actions/attach-document.md)
- [Attach Existing Documents](actions/attach-existing-documents.md)
- [Detach Document](actions/detach-document.md)
- [Open Case In Separate Tab](actions/open-in-separate-tab.md)

## Workitem related actions

- [Open Workitem In Separate Tab](actions/open-in-separate-tab.md)

## Folder related actions

- [Create Folder](actions/create-folder.md)
- [Rename Folder](actions/rename-folder.md)
- [Delete Folder](actions/delete-folder.md)


## Other actions

- [Open by URL](actions/open-by-url.md)
