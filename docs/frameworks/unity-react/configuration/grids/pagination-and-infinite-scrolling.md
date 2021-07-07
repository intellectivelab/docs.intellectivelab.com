---
title: Pagination And Infinite Scrolling Configuration
layout: docs
category: Unity 7
---
[Pagination and infinite scrolling feature description](../../components/grid/pagination-and-infinite-scrolling)

```xml
<Grid ID="parents-grid" ui="infinite">
    <!-- not relevant nodes skipped -->
</Grid>

<Grid ID="relatives-grid" ui="paging">
    <!-- not relevant nodes skipped -->
</Grid>
```

Data loading method is controlled by `ui` optional attribute of the Grid.
By default, grid uses pagination.  

`ui` attribute may have following values:

| Value               | Description |
|:--------------------|:------------|
| paging              | Pagination is used      |
| infinite            | Infinite loading is used |

Any other value means using pagination.
