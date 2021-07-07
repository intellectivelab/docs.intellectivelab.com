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
- [add action to the Grid](grids#how-to-add-action-to-the-grid)
- [add action to the View](tags-list/views-tag/tab-action-set#how-to-add-action-to-the-view) (optional)
- [add action to the FoldersView](folders-view#how-to-add-action-to-the-folders-view) (required for folder related actions)
- [specify View for the action](tags-list/views-tag) (required for particular actions)

## Common actions attributes and tags

Action behavior customized by attributes and tags.
There are attributes and tags common for most actions:

|Attribute            | Description         |
|:--------------------|:--------------------|
|*content to be added*|*content to be added*|

|Tag                  | Description         |
|:--------------------|:--------------------|
| Name      | Action name shown in toolbar or context menu.|
| Uri       | Optional. If present, action considered as a bulk action.|
|*content to be added*|*content to be added*|
| Security  | [Action security restrictions](../../unity-react/configuration/security#security-restrictions) |
| CustomParameters  | Defines custom action parameters. Could be overridden per data provider.   |

## Common custom parameters tags

|Tag                  | Description         |
|:--------------------|:--------------------|
| ResourceName | Optional. Name of resource action operates with. |
| ResourceType | Optional. Name of concrete resource type. |
| ActionType | Optional. Name of concrete action type. Required for some actions. |
| ViewType | Optional. This parameter should match view defined in solutions config. |
| Scope | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) |

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

- [Create Document](actions/create-document)
- [Document Details](actions/document-details)
- [Open Document In Separate Tab](actions/open-in-separate-tab)  
- [Open in Browser](actions/open-in-browser)
- [Check Out and Open in Browser](actions/check-out-and-open-in-browser)
- [Open in Desktop App](actions/open-in-desktop-app)
- [Check Out and Open in Desktop App](actions/check-out-and-open-in-desktop)
- [Open in Office](actions/open-in-office)
- [Check Out and Open in Office](actions/check-out-and-open-in-office)
- [Delete Document](actions/delete-document)
- [View Content](actions/view-content)
- [Check Out Document](actions/checkout-document)
- [Cancel Check Out of a Document](actions/cancel-checkout-document)
- [Check In Document](actions/checkin-document)
- [Copy Document to Folder](actions/copy-document-to-folder)
- [Move Document to Folder](actions/move-document-to-folder)
- [Download Document](actions/download-document)
- [Multiple Download](actions/multiple-document-download)
- [Rename File](actions/rename-file)
- [Current Version](actions/current-version)
- [Promote Version](actions/promote-version)
- [Demote Version](actions/demote-version)

## Case related actions

- [Create Case](actions/create-case)
- [Case Details](actions/case-details)
- [Open Case In Separate Tab](actions/open-in-separate-tab)
- [Delete Case](actions/delete-case)
- [Copy Case](actions/copy-case)
- [Split Case](actions/split-case)
- [Attach Document](actions/attach-document)
- [Attach Existing Documents](actions/attach-existing-documents)
- [Detach Document](actions/detach-document)

## Workitem related actions

- [Workitem Details](actions/workitem-details)
- [Open Workitem In Separate Tab](actions/open-in-separate-tab)
- [Dispatch](actions/dispatch)
- [Lock Workitem](actions/lock-workitem)
- [Unlock Workitem](actions/unlock-workitem)
- [Reassign Workitem](actions/reassign)

## Folder related actions

- [Create Folder](actions/create-folder)
- [Rename Folder](actions/rename-folder)
- [Delete Folder](actions/delete-folder)


## Other actions

- [Open by URL](actions/open-by-url)
