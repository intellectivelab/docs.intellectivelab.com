---
title: Copy/Move Document to Folder Feature
layout: docs
category: Unity 7
---
# Description

`Copy/Move document to Folder` feature allows to copy or move a document from one folder to another within its repository data provider. It can be executed from grid context-menu.

`Copy` document action will keep document filed wherever it is currently and additionally file it into selected folder. As the result, the document will be filed into more than one folder.

`Move` document action will unfile document from the folder where it is filed and file it into selected folder. 
But if document is already filed into more that one folder, error will be shown with the list of folders where it is currently filed into.

These actions may be executed in row mode and bulk mode. 
Row mode allows to copy/move single document via context menu actions, and bulk mode allows to copy/move several documents at once by using grid toolbar actions.

# How to Copy or Move a Document to Folder

This describes how action works in row mode.
- Click on context menu icon of the document, that should be copied or moved

- Click `Copy to Folder` or `Move to Folder` action:

     ![Context-menu](copy-move-document-to-folder/images/copy-move-document-to-folder-context-menu.png)

- Folder tree will appear. Select a destination folder and click `Select` button:

     ![Select a folder dialog](copy-move-document-to-folder/images/copy-move-document-to-folder-select-dialog.png)

- In case of failure the tree remains opened, toast with error message `Server error` appears:

     ![Action failure](copy-move-document-to-folder/images/copy-move-document-to-folder-error.png)

- In case if the document is filed into more than one folder, the tree remains opened and toast with error message
`The operation cannot be executed because selected document filed in many folders` appears:

     ![Move to folder failure](copy-move-document-to-folder/images/copy-move-document-to-folder-multiple-folders-error.png)

- If no errors occurred during action execution, user will see the message `Resource moved to ...` or `Resource copied to ...`, the action completed successfully:

     ![Action success](copy-move-document-to-folder/images/copy-move-document-to-folder-success.png)

Successful action execution will also lead to grid refresh.

# How to Bulk Copy or Move Documents to Folder
This describes how to copy or move several documents at once using bulk mode.
- Using row checkboxes or `Select All` checkbox in the grid header, select documents that should be copied or moved.
     ![Selected documents](copy-move-document-to-folder/images/copy-move-document-to-folder-select-documents.png)

- Select `Copy to Folder` or `Move to Folder` action from `Actions` bulk mode menu in the grid toolbar.
     ![Pick an action for selected documents](copy-move-document-to-folder/images/copy-move-document-to-folder-select-bulk-menu.png)

- Folder tree will appear. Select a destination folder and click `Select` button:

     ![Select a folder dialog](copy-move-document-to-folder/images/copy-move-document-to-folder-select-dialog.png)

- In case of failure the tree remains opened, toast with error message `Server error` appears:

     ![Action failure](copy-move-document-to-folder/images/copy-move-document-to-folder-error.png)

- In case if at least one of selected documents is filed into more than one folder, the tree remains opened and toast with error message
`The operation cannot be executed because selected document filed in many folders` appears:

     ![Move to folder failure](copy-move-document-to-folder/images/copy-move-document-to-folder-multiple-folders-error.png)

- If no errors occurred during action execution, user will see the message `Resources moved to ...` or `Resources copied to ...`, the action completed successfully:

     ![Action success](copy-move-document-to-folder/images/copy-move-document-to-folder-bulk-success.png)

Successful action execution will also lead to grid refresh.

# Configuration

[Copy document to folder action configuration](../../configuration/actions/copy-document-to-folder.md)  
[Move document to folder action configuration](../../configuration/actions/move-document-to-folder.md)
