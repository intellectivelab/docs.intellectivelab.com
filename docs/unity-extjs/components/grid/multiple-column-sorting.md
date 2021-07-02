---
title: Multiple Column Sorting Grid Feature
layout: docs
category: Unity 7
---
You can configure the default Grid to allow multiple columns to be sorted at a time within the content list.

To use a multiple column sorting grid, click the header of a column. The grid sorts to that column (toggling between ascending or descending), and a number (1) appears next to that header. This number indicates that column is the primary sort column.  

To sort by a second column, click the header for another column. The grid sorts to that column (toggling between ascending or descending) while maintaining the sorting of the primary sort column, and a number (2) appears next to that header. This number indicates the column is the secondary sort column.

Continue until you reach the max number of sort columns (3 by default): 

![multiple-column-sorting](multiple-column-sorting/images/multicolumnsort.png) 

This feature implemented for:

- Tabs: Search Template, Folder View, Advanced Search
- Data Providers: FileNet, CMIS, Unity Enterprise Search (except JOIN function) 

[Configure Multiple Column Sorting](../../configuration/grids.md)
