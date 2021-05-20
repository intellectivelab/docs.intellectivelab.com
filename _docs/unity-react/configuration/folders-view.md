---
title: Folders View Configuration
layout: docs
category: Unity 7
---
[Folders View Component description](../components/folders-view.md)

# How to Add Action to the Folders View

*content to be added*

To see action in Folders View context menu it should be added to FoldersView configuration.

Example for Rename Folder action:

```xml
<FoldersView id="path">
    <Actions>
        <Action ID="rename_folder"/>         
        <!-- other actions -->
    </Actions>
    <!-- rest config-->
</FoldersView>
```

# Folders View Features Configuration

[Folder related actions configuration](actions.md#folder-related-actions)  
