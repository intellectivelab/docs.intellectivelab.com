---
title: Unity Components - Grid
layout: docs
category: Unity 7
---
# Display Modes

Out of the box, the Grid supports three display modes: **Table View**, **List View** and **Details View**. No any specific configuration required to enable all these modes.

## Table View

Table View is a default grid view mode which displays data in a tabular view (including table columns and rows).

Click the Details View icon to switch grid into the Details View mode:

![react_grid-table-view-mode](grid/images/displaymode_react_tableview.png)

## List View

In case the window size is not enough for the correct display of the grid in Table View mode, the grid is automatically switched into List View mode.

Click the Details View icon to switch grid into the Details View mode:

![react_grid-list-view-mode](grid/images/displaymode_react_listview.png)

## Details View

Details View mode allows to combine the view of the list of items and the view/edit form of the selected item.

Click the List View icon to switch grid back into the List/Table View mode:

![react_grid-details-view-mode](grid/images/displaymode_react_detailsview.png)

Details View screen is divided into several panels as shown below:

![react_grid-details-view-panels](grid/images/displaymode_react_detailsview_panels.png)

- List Panel - displays a list of available items.

- Navigation Panel - allows to navigate through the list by clicking the corresponding `Up/Down` buttons.

- Sorting Panel - allows to sort the list by the selected field and sorting direction.

- Details Panel - displays the view/edit form of the selected item.

- Bookmarks Bar - displays the Bookmarks. Bookmarks allow to quickly switch between selected items. List item can be added to Bookmarks bar by clicking `Bookmark` action in the item actions menu. A bookmark can also be removed from the Bookmarks bar:

![react_grid-details-view-bookmarks](grid/images/displaymode_react_detailsview_bookmarks.png)

# Grid Features

## Grid settings menu

With Unity, you can customize how you view your search results. You can change the look and feel, set and order of displayed columns, sort order, and more. 
To customize the Search Results Panel, click on the gear icon in the upper right, grid settings menu appears:

![grid-settings-menu](grid/images/grid-settings.png)

### Grid columns

- [Column resizing](grid/column-resizing.md)
- Column locking
- Column spanning
- Column reordering
- Column menu
- Column cell formatting
- Column cell tools and actions
- Column cell rendering customization

### Grid display density

*content to be added*

### Reset

To reset the columns width to default (and revert the visible state of the columns and their order) use `Reset` from the grid settings menu:

![grid-reset](grid/images/grid-reset.png)

## Sorting

- [Multiple column sorting](grid/multiple-column-sorting.md)

## Actions

- [Default action](grid/default-action.md)
- [Row actions](grid/row-actions.md)
- [Bulk actions](grid/bulk-actions.md)
- [Model actions](grid/model-actions.md)
- Ability to add a custom grid action

## Other features

- [Pagination and infinite scrolling](grid/pagination-and-infinite-scrolling.md)
- Grouping
- Record text links
- Multiple row selection
- Expandable rows
- Ability to use a custom grid pagination
- Data export
- Ability to compose with other components
- Adaptive
- Responsive

# Configuration

[Grids Configuration](../configuration/grids.md)
