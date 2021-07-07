---
title: Limit on the Number of Opened Cases Configuration
layout: docs
category: Unity 7
---
To set a limit on the number of simultaneously opened cases in the same tab add `MaxNumberOfOpenedCases` parameter to the Grid.

Example:
```xml
        <Grid ID="UCM_ICM_Case_Search" enableColumnReorder="false" groupSearchResults="false">
            <Toolbar>
                <Actions>
                    …….
                </Actions>
            </Toolbar>
            <Listeners>
                …….
            </Listeners>
            <MaxNumberOfOpenedCases>10</MaxNumberOfOpenedCases>
            <XType>vspace-docs</XType>
        </Grid>
```

|Parameter|Description|Example|
|:--------|:----------|:------|
|MaxNumberOfOpenedCases|Optional. Sets limit on the number of simultaneously opened cases in the same tab| `10`|

[Grids configuration](../grids)