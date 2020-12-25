---
title: Delete a Document Feature
layout: docs
category: Unity 7
---
# Description

`Delete` document action allows to delete a document from repository data provider. It can be executed from grid 
context-menu or `Properties` tab of `Document Details` page. 

*content to be added*

# How to Delete a Document

## Delete a document from Grid

- Click on context menu icon of the document, that should be deleted

- Click `Delete` action

    ![Context-menu](delete-document/images/delete-document-context-menu.png)

- Confirmation dialog will appear:

    ![Confirmation dialog](delete-document/images/delete-document-confirmation-from-grid.png)

Clicking on `Cancel` button will lead to closing confirmation dialog without document deleting.

By selecting `Yes` button, user triggers `delete` action execution. After document is deleted, grid page will be 
refreshed.

## Delete a document from Document Details

- Open `Document Details` by clicking row in grid / selecting `Edit` action from context-menu / opening document 
in a separate tab ...

- Click `Delete` button

    ![Document Details](delete-document/images/document-details.png)

- Confirmation dialog will appear:

    ![Confirmation dialog](delete-document/images/delete-document-confirmation-from-details.png)

Clicking on `Cancel` button will lead to closing confirmation dialog without document deleting.

By selecting `Yes` button, user triggers `delete` action execution. After document is deleted, `Document Details` 
will be closed. In case document is opened from grid (via context menu `Edit` action or by clicking on a row), grid will be 
refreshed as well.

# Configuration

[Delete Document action configuration](../../configuration/actions/delete-document.md)
