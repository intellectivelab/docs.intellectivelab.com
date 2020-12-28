---
title: Document Details Feature
layout: docs
category: Unity 7
---
# Description

`Document details` feature allows to: 

- view and edit document properties

- view versions

- perform some actions on document like `check out`, `check in`, `cancel check out`, `view content`, `download`, `delete`, 
`open in office`, etc. List of document actions depends on action view configuration and data provider

- perform some actions on document versions like `promote`, `demote`, `make version current`, `delete version`. List of 
actions depends on configuration and data provider

# How to Use Document Details

To open Document Details:

- In the grid click a dropdown icon in the document row and select `Edit` action:

    ![Context-menu](document-details/images/view-action-context-menu.png)
    
- `Document Details` view will be opened in a modal or separate tab:

    ![Document Details View](document-details/images/view-action-document-details-tab.png)
    
`Document Properties` tab is shown by default, user can switch to `Versions`.

Edit available fields and save changes by clicking `Save` button.

## Toolbar

Toolbar on `Document Details` tab may contain following actions for the document:

- `Check Out`
- `Cancel Check Out`
- `Check In`
- [View Content](view-content.md)
- `Download`
- `Delete`
- `Open in Office 365` (open in browser). Action is only available for SharePoint Office documents and opens the 
document in Office 365.
- `Open in Office` (open in desktop app). Action is only available for SharePoint Office documents and opens the 
document in Office Desktop App.

    `Open in Office 365`, `Open in Office` actions are automatically grouped into `Office Actions` dropdown:

    ![Office Actions](document-details/images/office-actions-on-toolbar.png)

To appear on the toolbar:
 
- These actions should be [added to the view](../../configuration/tags-list/views-tag/tab-action-set.md) in solution configuration file 
- User should have enough rights to perform the action 
- Action should to be available for the document
- None of the described above specific hiding rules are applied 

# Configuration

[Document details](../../configuration/actions/document-details.md)