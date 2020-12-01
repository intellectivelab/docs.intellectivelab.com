---
title: Unity Components - Recent View History
layout: docs
category: Unity 7
---
# Description

Recent view history saves and shows a list of links to recently viewed items.  
An item becomes included to this list when user:
- clicks the item in the grid: 

    ![Choosing an item from list](recent-view-history/images/select_one.png) 
    
- chooses `Properties` in context menu of the item:

    ![Choosing an item properties from list](recent-view-history/images/choose_workitem.png)  

# How to Open Recent View History

To open a list of recently viewed items click the `History` icon. For example, here is how the `History` icon looks on Workitems grid:
                                                        
![History icon on Workitems grid](recent-view-history/images/history_icon_position.png)

History title of an item depends on grid content. Usually it's just a title of an item,
but for some grids it can be another item parameter or even be composed of several parameters like it used by Workitems grid.   
Here history title consists of a case title parameter value and item's own title parameter for better readability and uniqueness:

![History with composed title](recent-view-history/images/history_with_composed_title.png)

# How to Clear History

To clear recent view history open it and click the `Clear history` icon:

![Clearing history pressing the button in history dropdown menu](recent-view-history/images/clear_history.png)

# Configuration

Recent view history feature appears automatically, no configuration is required.
