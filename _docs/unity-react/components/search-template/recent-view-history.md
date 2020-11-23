---
title: Unity Components - Recent view history – a list of references to recently viewed items
layout: docs
category: Unity 7
---
*content to be added*

# RecentViewHistoryLocalStorage

Recent view history saves links to recently viewed items:

![Search template based on the DB connector](recent-view-history/images/choose_workitem.png)

History titles are different for different grids, depending on their content. Usually it's just a title of an item,
but for some grids it can be other item parameter or even composed of several like it used by Workitems grid. It uses 
composed value of case title and own title for better readability and uniqueness:

![Grid context-menu](recent-view-history/images/history_with_composed_title.png)
