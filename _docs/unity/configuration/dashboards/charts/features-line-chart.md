---
title: Configuring Unity Features - Line Chart
layout: docs
category: Unity 7
---

## General Information

The **Line Chart** is a type of chart which displays information as a line segments. The Line Chart is often used to visualize a trend in data over intervals of time. The lines can be plotted vertically or horizontally.

The Line Chart component is built based on [React-Vis Line chart](https://uber.github.io/react-vis/documentation/series-reference/line-series).

![Line Chart Vertical](images/line-chart-vertical.jpg) 

## Configuration

### Dashboard configuration

The Line Chart can be configured as a Dashboard component.

The code snippet below describes a Dashboard configuration example that includes the Line Chart. Please refer to [Dashboards](../feature-dashboard.md) for more information about dashboards configuration.

```xml
<Perspectives>
    ...
    <Perspective default="true" iconCls="perspective-cls" id="perspectiveId" title="perspectiveTitle">
        ...
        <Dashboard builder="default" default="true" iconCls="dashboard-cls" id="dashboardId" lazy="true" title="dashboardTitle" tooltip="dashboardTooltip">
            ...
            <Component cluster="breakdowns" layout="X4" ref="tasks-by-start-date-breakdown" type="chart"/>
            ...	
        </Dashboard>
        ...
    </Perspective>
    ...
</Perspectives>
```

### Chart configuration

The code snippet below describes a Line Chart configuration example. Please refer to [Charts](features-charts.md) for more information about charts configuration.

```xml
<UiComponents>
    <Charts>
        ...
        <Chart id="tasks-by-start-date-breakdown" label="Tasks By Start Date" type="vComposite">
            <Description>Tasks By Start Date</Description>
            <Facets scope="analytics_repository">
                <Facet>task-by-start-date-facet</Facet>
            </Facets>
            <Plot height="300">
                <Series facet="task-name-facet" label="Task Name" type="line" stack="true" cluster="task-name-facet"/>
            </Plot>
        </Chart>
        ...
    </Charts>
</UiComponents>
```

### Facet configuration
    
The code snippet below describes a facet configuration example. Please refer to [Facets](../facets/features-facet.md) for more information about facets configuration.    

```xml
<Facets>
    ...
    <Facet id="task-by-start-date-facet" field="CaseStartDate" type="RANGE" gap="7d">
        <Facet id="task-name-facet" field="TaskName" type="TERMS"/>
    </Facet>
    ...
</Facets>
```

## Interaction

The Line Chart is interactive. The following interaction modes are supported:

### Hover

View details of hovered line

![Line Chart Hint](images/line-chart-hint.jpg)

### Select

Select the line. Multiple lines selection is supported.

![Line Chart Select](images/line-chart-selection.jpg)

### Legend

Select the legend item. Multiple legend items selection is supported.

![Line Chart Legend Select](images/line-chart-legend.jpg)