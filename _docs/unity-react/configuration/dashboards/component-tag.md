---
title: Component Tag Configuration
layout: docs
category: Unity 7
---

Example of `Component` configuration:

```xml
      <Component ref="document_Search_Documents" title="FileNet Documents" type="searchTemplate">
        <Property name="resourceName" value="documents"/>
        <Property name="queryScope" value="ce_repository"/>
        <Property name="folderPath" value="/"/>
        <Security>
          <AllowRole>Unity Users</AllowRole>
        </Security>
      </Component>
```

Tables below lists all the attributes and child tag names for `Component` element:

| Attribute | Description |
|:----------|:------------|
|ref        | *definition to be added* |
|title      | *definition to be added* |
|type       | *definition to be added* |

| Tag name  | Description |
|:----------|:------------|
|Property   | *definition to be added* |
|Security   | [Component security restrictions](../../configuration/security.md#security-restrictions) |

[Container tag configuration](container-tag.md)  
[Dashboards tag configuration](../dashboards.md)  
