---
title: Download Multiple Documents Feature
layout: docs
category: Unity 7
---
# Description

This feature allows downloading multiple documents as a ZIP archive.

# How to Download Multiple Documents

To download multiple documents:

- Using row checkboxes or `Select All` checkbox in the grid header, select documents that should be downloaded:

    ![Selected documents](multiple-document-download/images/selected-docs.png)

- Select `Multiple Download` from `Actions` bulk mode menu in the grid toolbar:

    ![Action in menu](multiple-document-download/images/action-dropdown.png)
    
- While request is processing, loader with a backdrop is shown:

    ![Request processing](multiple-document-download/images/loader-processing.png)
    
- You will be prompted to save zip archive, click `Save`:

    ![Save as prompt](multiple-document-download/images/save-as-prompt.png)
    
    Documents will be zipped only if their number more or equal 2. Otherwise non-zipped document will be downloaded.
    
- If no errors occurred during action execution, the action completed successfully
        
- In case of failure, error message `Server Error` appears:

    ![Error message displayed](multiple-document-download/images/server-error.png)

Successful action execution will also lead to grid refresh.

# Configuration

[Multiple Download action configuration](../../configuration/actions/multiple-document-download)