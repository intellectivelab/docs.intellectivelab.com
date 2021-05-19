---
title: Delete a Folder Feature
layout: docs
category: Unity 7
---
# Description

`Delete` folder action allows to delete a folder and it's content from repository. It can be executed from a tree view component if user has appropriate permissions. 

# How to Delete a Folder

- Find a folder you are going to rename in a tree view component. Hover mouse over folder name and perform the right click:

  ![Folder actions button](./delete-folder/images/react-ui-image1.png)

- Select `Delete` action from dropdown list:

  ![Delete action menu](./delete-folder/images/react-ui-image2.png)

- Confirmation dialog will appear:

  ![Confirmation dialog](./delete-folder/images/react-ui-image3.png)

Clicking on `Cancel` button will lead to closing confirmation dialog without folder deleting.

By selecting `Yes` button, user triggers `delete` action execution. After folder is deleted, parent folder in the tree view component will be refreshed to reflect changes. 

# Configuration

[Delete Folder action configuration](../../configuration/actions/delete-folder.md)
