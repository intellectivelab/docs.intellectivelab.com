---
title: Charts Configuration
layout: docs
category: Unity 7
---
[Description of Chart Component](../components/chart.md)

# Plot Charts

## Bar Chart

[Bar Chart](../components/chart.md#bar-chart) configuration examples:

```xml
<Configuration>
    ...
    <UiComponents>
        <Charts>
            <Chart id="cases-by-source-breakdown" label="Case Sources" type="vComposite">
                <Description>Cases By Source</Description>
                <Facets scope="analytics_repository">
                    <Facet>case-source-facet</Facet>
                </Facets>
                <Plot height="300">
                    <Series facet="case-source-facet" label="Case Source" type="bar"/>
                </Plot>
            </Chart>
        </Charts>
    </UiComponents>
    ...
    <Facets>
        <Facet id="case-source-facet" field="CaseSource" type="TERMS"/>
    </Facets>
    ...
</Configuration>
```
See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

## Line Chart

[Line Chart](../components/chart.md#line-chart) configuration examples:

```xml
<Configuration>
    ...
    <UiComponents>
        <Charts>
            <Chart id="tasks-by-start-date-breakdown" label="Tasks By Start Date" type="vComposite">
                <Description>Tasks By Start Date</Description>
                <Facets scope="analytics_repository">
                    <Facet>task-by-start-date-facet</Facet>
                </Facets>
                <Plot height="300">
                    <Series facet="task-name-facet" label="Task Name" type="line" stack="true" cluster="task-name-facet"/>
                </Plot>
            </Chart>
        </Charts>
    </UiComponents>
    ...
    <Facets>
        <Facet id="task-by-start-date-facet" field="CaseStartDate" type="RANGE" gap="7d">
            <Facet id="task-name-facet" field="TaskName" type="TERMS"/>
        </Facet>
    </Facets>
    ...
</Configuration>
```
See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

## Mark Chart

[Mark Chart](../components/chart.md#mark-chart) configuration examples:

```xml
<Configuration>
    ...
    <UiComponents>
        <Charts>
            <Chart id="tasks-by-start-date-breakdown" label="Tasks By Start Date" type="vComposite">
                <Description>Tasks By Start Date</Description>
                <Facets scope="analytics_repository">
                    <Facet>task-by-start-date-facet</Facet>
                </Facets>
                <Plot height="300">
                    <Series facet="task-name-facet" label="Task Name" type="mark" stack="true" cluster="task-name-facet"/>
                </Plot>
            </Chart>
        </Charts>
    </UiComponents>
    ...
    <Facets>
        <Facet id="task-by-start-date-facet" field="CaseStartDate" type="RANGE" gap="7d">
            <Facet id="task-name-facet" field="TaskName" type="TERMS"/>
        </Facet>
    </Facets>
    ...
</Configuration>
```
See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

## LineMark Chart

[LineMark Chart](../components/chart.md#linemark-chart) configuration examples:

```xml
<Configuration>
    ...
    <UiComponents>
        <Charts>
            <Chart id="tasks-by-start-date-breakdown" label="Tasks By Start Date" type="vComposite">
                <Description>Tasks By Start Date</Description>
                <Facets scope="analytics_repository">
                    <Facet>task-by-start-date-facet</Facet>
                </Facets>
                <Plot height="300">
                    <Series facet="task-name-facet" label="Task Name" type="lineMark" stack="true" cluster="task-name-facet"/>
                </Plot>
            </Chart>
        </Charts>
    </UiComponents>
    ...
    <Facets>
        <Facet id="task-by-start-date-facet" field="CaseStartDate" type="RANGE" gap="7d">
            <Facet id="task-name-facet" field="TaskName" type="TERMS"/>
        </Facet>
    </Facets>
    ...
</Configuration>
```
See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

## Area Chart

[Area Chart](../components/chart.md#area-chart) configuration examples:

```xml
<Configuration>
    ...
    <UiComponents>
        <Charts>
            <Chart id="tasks-by-start-date-breakdown" label="Tasks By Start Date" type="vComposite">
                <Description>Tasks By Start Date</Description>
                <Facets scope="analytics_repository">
                    <Facet>task-by-start-date-facet</Facet>
                </Facets>
                <Plot height="300">
                    <Series facet="task-name-facet" label="Task Name" type="area" stack="true" cluster="task-name-facet"/>
                </Plot>
            </Chart>
        </Charts>
    </UiComponents>
    ...
    <Facets>
        <Facet id="task-by-start-date-facet" field="CaseStartDate" type="RANGE" gap="7d">
            <Facet id="task-name-facet" field="TaskName" type="TERMS"/>
        </Facet>
    </Facets>
    ...
</Configuration>
```
See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

## Composite Chart

[Composite Chart](../components/chart.md#composite-chart) configuration examples:

*Content to be added*

See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

# Radial Charts

## Pie Chart

[Pie Chart](../components/chart.md#pie-chart) configuration examples:

```xml
<Configuration>
    ...
    <UiComponents>
        <Charts>
            <Chart id="documents-by-mimetype-breakdown" label="Document MimeTypes" type="pie">
                <Description>Document MimeType</Description>
                <Facets scope="analytics_repository">
                    <Facet>mime-type-facet</Facet>
                </Facets>
            </Chart>
        </Charts>
    </UiComponents>
    ...
    <Facets>
        <Facet id="mime-type-facet" field="MimeType" type="TERMS"/>
    </Facets>
    ...
</Configuration>
```

| **Note:** Pie Chart supports only one `Facet` (one level `TERMS` or `RANGE` facet) definition in `Facets` section.

See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

# Hierarchical Charts
    
## Tree Map

[Tree Map Chart](../components/chart.md#tree-map) configuration examples:

*Content to be added*

See configuration parameters in [Charts Tag](tags-list/charts-tag.md).
    
## Table Heat Map 

[Table Heat Map Chart](../components/chart.md#table-heat-map) configuration examples:  

*Content to be added*

See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

## Sunburst    

[Sunburst Chart](../components/chart.md#sunburst) configuration examples:

```xml
<Configuration>
    ...
    <UiComponents>
        <Charts>
            <Chart id="cases-by-location-breakdown" label="Cases By Location" type="sunburst">
                <Description>Cases By Location</Description>
                <Facets scope="analytics_repository">
                    <Facet>cases-by-location-facet</Facet>
                </Facets>
            </Chart>
        </Charts>
    </UiComponents>
    ...
    <Facets>
        <Facet id="cases-by-location-facet" field="Region" type="TERMS">
            <Facet id="sub-region-facet" field="SubRegion" type="TERMS">
                <Facet id="case-type-facet" field="CaseType" type="TERMS"/>
            </Facet>
        </Facet>
    </Facets>
    ...
</Configuration>
```
See configuration parameters in [Charts Tag](tags-list/charts-tag.md).

## Zoomable Sunburst

[Zoomable Sunburst Chart](../components/chart.md#zoomable-sunburst) configuration examples:

*Content to be added*

See configuration parameters in [Charts Tag](tags-list/charts-tag.md).
