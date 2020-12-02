---
title: Dashboards Configuration
layout: docs
category: Unity 7
---
# Dashboards tag

Dashboard configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|id | Dashboard identifier |
|title | Dashboard title |
|iconCls | Icon definition |
|isDefault | *definition to be added* |
|isLazy | *definition to be added* |
|builder | *definition to be added* |
|filter | *definition to be added* |
|disableProviderLevelSecurity | The attribute allows to turn off security check on data provider level<sup>1</sup> when equals `true`. Default value: `false` |

<sup>1</sup> Provider level security check hides inner components if all conditions match:
- component is referenced to SharePoint search template
- component has `folderPath` parameter specified OR search template has `FolderPath` parameter specified
- user doesn't have permissions to access corresponding folder in repository data provider

[Containers Configuration](dashboards/container-tag.md)
