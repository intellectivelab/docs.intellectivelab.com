---
title: Rename a Folder Feature
layout: docs
category: Unity 7
---
# Description

`Rename a Folder` feature allows changing folder name. It can be executed from a tree view component on a folder if user has appropriate permissions.

# How to Rename a Folder

- Find a folder you are going to rename in tree view component. Put mouse cursor on top of the folder and  click on the vertical ellipse icon consisting of three dots in the folder row:

  ![Folder actions button](./rename-folder/images/react-ui-image1.png)

- Select Rename action from dropdown list:

  ![Rename action menu](./rename-folder/images/react-ui-image2.png)

- Rename dialog will appear. Change the name and click `Rename` button:

  ![Rename dialog](rename-folder/images/react-ui-image3.png)

- If no errors occurred during action execution, user will see the message `Folder renamed to: ...`, the action completed successfully. Selected folder in the tree view component will be refreshed to reflect rename changes.
  
- In case of failure toast with error message `Server error` appears. 

# Configuration

[Rename Folder action configuration](../../configuration/actions/rename-folder.md)
