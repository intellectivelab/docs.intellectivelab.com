---
title: Multiple Column Sorting Grid Feature
layout: docs
category: Unity 7
---
Default grid allows multiple columns to be sorted at a time within the content list. Grid column can be configured as sortable or not.

To sort grid by a sortable column, move mouse over the column header and grayed out arrow (sorting direction indicator) will appear. Clicking to the column header or the arrow will activate ascending sorting and its icon will become contrast. Next click will toggle sorting to descending, and third click will remove sorting for the column, and so on.

![react_multiple-column-sorting-arrow](images/multicolumnsort_react_arrow.png) 

Sorting direction may be changed also via column menu. To open the menu, click to down-pointing triangle in the column header. There are options _Sort Ascending_, _Sort Descending_ and _Remove sort_ that work as per above. 

![react_multiple-column-sorting-menu](images/multicolumnsort_react_menu.png) 

Activating sort by a column when already having another column sorted will show columns sorting order numbers along with sorting direction arrows. Data firstly will be sorted by column with order number 1, then by column with number 2 etc.  

It is allowed to have up to 6 columns sorted simultaneously per grid. To change column sorting order number there are commands _Promote order_ and _Demote order_ in the column menu. Promoting reorders sorting by decrementing column order and demoting increments it. 

![react_multiple-column-sorting-order](images/multicolumnsort_react_order.png) 

Per each grid, user defined sorting order is saved into browser storage and restored on next session. 

Default sorting order may be configured on a per-grid or per-SearchTemplate basis. It is used until user overrides it.

This feature implemented for:

- Tabs: Search Template, Folder View
- Data Providers: FileNet, CMIS, Unity Enterprise Search (except JOIN function) 

[Configure Multiple Column Sorting](../../configuration/grids.md#multiple-column-sorting)


