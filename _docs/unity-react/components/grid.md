---
title: Unity Components - Grid
layout: docs
category: Unity 7
---
# Overview

*content to be added*

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

## Grouping
## [Multiple Column Sorting](grid/multiple-column-sorting.md)
## [Column resizing](grid/column-resizing.md)
## Column locking
## Column spanning
## Column reordering
## Column menu
## Column cell formatting
## Column cell tools and actions
## Column cell rendering customization
## Record text links
## Multiple row selection
## Row action
## Bulk action
## Ability to add a custom grid action
## Row actions menu
## Expandable rows
## Pagination

For loading data, Grid supports pagination and infinite scrolling. The selected method is defined in the Grid configuration. If no method is defined, the grid will use pagination. Also, infinite scrolling method in configuration may be overrided in the code and force some grids to use pagination regardless of configuration.

With pagination, user may view the grid data by pages, cicking pages in pagination control under the grid.

## Ability to use a custom grid pagination
## Infinite scrolling

For loading data, Grid supports pagination and infinite scrolling. The selected method is defined in the Grid configuration. If no method is defined, the grid will use pagination. Also, infinite scrolling method in configuration may be overrided in the code and force some grids to use pagination regardless of configuration.

With infinite scrolling, user may load next portion of data into the grid simply by scrolling grid down, until no more data is available.

## Data export
## Display density settings
## Ability to compose with other components
## Adaptive
## Responsive
## Configurable

# Configuration

[Grids Configuration](../configuration/grids.md)
