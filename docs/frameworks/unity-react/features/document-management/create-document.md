---
title: Create a Document Feature
layout: docs
category: Unity 7
---
# Description

`Create` document action allows to upload a file into a particular data provider with ability to specify
document properties. This type of action can be added on a grid toolbar and will be rendered as a separate button
(if only one create action is bound to the grid) or a dropdown (in case grid contains many create actions).

*content to be added*

# How to Create a Document

- Click `Create` action on a grid toolbar and select particular type of document to be created (if dropdown is
available).

- Drop a file into drop zone or click it to select a file for upload:

    ![Create document form before file is selected](create-document/images/create-document-empty-form.png)

- Selected file info will appear below the drop zone area. Fill in properties and click `Create` button:

    ![Create document form with filled properties](create-document/images/create-document-form.png)

- In case of failure form remains opened, toast with error message appears:

    ![Create action failure](create-document/images/create-document-error.png)

- If no errors occurred during action execution, user will see the message, that action completed successfully:

    ![Successfully completed create action](create-document/images/create-document-success.png)

    Successful action execution will also lead to grid refresh.

# Configuration

[Create document action configuration](../../configuration/actions/create-document)
