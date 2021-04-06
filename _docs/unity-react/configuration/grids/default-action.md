---
title: Default Action Configuration
layout: docs
category: Unity 7
---
[Default Action Grid feature description](../../components/grid/default-action.md)

Default action is controlled by `defaultAction` optional attribute of the Grid.
If not specified, grid uses `view` action as a default.

```xml
<Grid ID="documents" defaultAction="view_content">
    <Toolbar>
        <Actions>
            <Action ID="download"/>
            <Action ID="edit"/>
            <Action ID="view_content"/>
        </Actions>
    </Toolbar>
</Grid>
```
