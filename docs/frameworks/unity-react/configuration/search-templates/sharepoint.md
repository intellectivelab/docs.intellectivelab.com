---
title: Search Templates Configuration - SharePoint
layout: docs
category: Unity 7
---
| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType | A string uniquely identify document library. Calculated as `s_<SiteId>_w_<WebId>_l_<ListId>`. Check [Metadata Urls](../repository-data-providers/sharepoint#sharepoint-metadata-urls) on how to find `<SiteId>`, `<WebId>`, `<ListId>` values. |
|FolderPath   |Optional. When specified, it is used as a root path for folder view, that will be displayed on the left side of search template.|
