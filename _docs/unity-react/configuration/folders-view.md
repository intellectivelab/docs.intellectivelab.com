---
title: FoldersView Configuration
layout: docs
category: Unity 7
---
[FoldersView Component description](../components/folders-view.md)

# How to Add Action to the FoldersView

*content to be added*

To see action in FoldersView context menu it should be added to FoldersView configuration.

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

# FoldersView Features Configuration

[Folder related actions configuration](actions.md#folder-related-actions)  
