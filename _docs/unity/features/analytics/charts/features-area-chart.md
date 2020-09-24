---
title: Configuring Unity Features - Area Chart
layout: docs
category: Unity 7
---

## General Information

The **Area Chart** displays graphically quantitative data. It is based on the [Line Chart](features-line-chart.md). The Area Chart is often used to visualize a trend in data over intervals of time. The areas can be plotted vertically or horizontally.

The Area Chart component is built based on [React-Vis Area chart](https://uber.github.io/react-vis/documentation/series-reference/area-series).

![Area Chart Vertical](images/area-chart-vertical.jpg) 

## Configuration

### Dashboard configuration

The Area Chart can be configured as a Dashboard component.

The code snippet below describes a Dashboard configuration example that includes the Area Chart. Please refer to [Dashboards]() for more information about dashboards configuration.

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

The code snippet below describes a Area Chart configuration example. Please refer to [Charts](features-charts.md) for more information about charts configuration.

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
                <Series facet="task-name-facet" label="Task Name" type="area" stack="true" cluster="task-name-facet"/>
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

The Area Chart is interactive. The following interaction modes are supported:

### Hover

View details of hovered area

![Area Chart Hint](images/area-chart-hint.jpg)

### Select

Select the area. Multiple areas selection is supported.

![Area Chart Select](images/area-chart-selection.jpg)

### Legend

Select the legend item. Multiple legend items selection is supported.

![Area Chart Legend Select](images/area-chart-legend.jpg)