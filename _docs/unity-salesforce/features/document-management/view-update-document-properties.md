---
title: View and Update Document Properties Feature
layout: docs
category: Unity 7
---
# Description

`View and update document properties` feature allows to: 

- view document properties

- view versions

- perform some actions on document like `check out`, `check in`, `cancel check out`, `view content`, `download`, `delete`, 
`open in office`, etc. List of document actions depends on action view configuration and data provider

- perform some actions on document versions like `promote`, `demote`, `make version current`, `delete version`. List of 
actions depends on configuration and data provider

# How to View and Update Document Properties

- Click on Document title, or click on context menu icon of the document and select `Edit`/`Details` action (the name depends on configuration):

    ![Context-menu](view-update-document-properties/images/view-action-context-menu.png)
    
- `Document Details` view will be opened in a modal or separate tab:

    ![Document Details View](view-update-document-properties/images/view-action-document-details-tab.png)
    
`Properties` view is shown by default, user can switch to `Versions`. 

User can edit available fields and save changes by clicking `Save` button.

## Toolbar

Toolbar on `Document Details` tab may contain following actions for the document:

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
