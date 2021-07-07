---
title: Pagination And Infinite Scrolling Grid Feature
layout: docs
category: Unity 7
---
For loading data, Grid supports pagination and infinite scrolling. The selected method is defined in the Grid configuration. 
If no method is defined, the grid will use pagination. 
Also, infinite scrolling method in configuration may be overridden in the code and force some grids to use pagination regardless of configuration.

- With pagination, user may view the grid data by pages, clicking pages in pagination control under the grid.

- With infinite scrolling, user may load next portion of data into the grid simply by scrolling grid down, until no more data is available.

# Configuration

[Pagination and Infinite Scrolling configuration](../../configuration/grids/pagination-and-infinite-scrolling)