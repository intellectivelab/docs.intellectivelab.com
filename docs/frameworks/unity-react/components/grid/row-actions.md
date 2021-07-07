---
title: Grid Row Actions Feature
layout: docs
category: Unity 7
---
Row actions are actions, related to a single grid row. By default, they are available from the grid row context menu.

To invoke row action hover over row content and click on three-dots appeared: 

![react_row-action-menu](row-actions/images/gridrowaction_1.png) 

Dropdown menu with available actions should be displayed:  

![react_row-action-menu-dropdown](row-actions/images/gridrowaction_2.png) 

Single action considered as available only if `link key` from the component links array `matches` any action `name` or `type` property from the list of all actions.  
Choosing an action targets to show configured view and pass some declared resource by actual `href`, defined in component links.

Examples of row actions:

- [Download document action](../../features/document-management/download-document)
- [Copy a case action](../../features/case-management/copy-case)