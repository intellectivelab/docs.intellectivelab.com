---
title: Search Templates Configuration - CMIS (CMISRepositoryDataProvider)
layout: docs
category: Unity 7
---
List of available properties for documents search template is in the table below:
 
| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ResourceType |Optional. The name of concrete resource type, i.e. document `Type`, e.g. `D:TM:DiffProperties`. If not specified, search will be executed against all documents with cmis:document `Base Type`|
|FolderPath   |Optional. When specified, it is used as a root path for folder view, that will be displayed on the left side of search template.|
