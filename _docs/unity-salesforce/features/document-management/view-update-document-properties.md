---
title: View and Update Document Properties Feature
layout: docs
category: Unity 7
---
# Description

*content to be added*

## Toolbar

Toolbar on `Document Properties` tab may contain following actions:

- `Check Out`

- `Cancel Check Out`

- `Check In`

- `View Content`. This action opens document content in a new tab or downloads the document depending on it's content type. 
    Action will be hidden if one of `open in office` actions is available for the document.

- `Download`

- `Open in Office 365` (open in browser). Action is only available for SharePoint Office documents and opens the 
document in Office 365.

- `Open in Office` (open in desktop app). Action is only available for SharePoint Office documents and opens the 
document in Office Desktop App.

    `Open in Office 365`, `Open in Office` actions are automatically grouped into `Office Actions` dropdown:

    ![Office Actions](view-update-document-properties/images/office-actions-on-toolbar.png)

*other actions to be added*

- `Delete`

For listed above actions to appear on the toolbar:
 
- They should be [added to the view](../../configuration/tags-list/views-tag/tab-action-set.md) in solution configuration file 

- User should have enough rights to perform the action
 
- Action should to be available for the document

- None of the described above specific hiding rules are applied 

## Document properties

*content to be added*