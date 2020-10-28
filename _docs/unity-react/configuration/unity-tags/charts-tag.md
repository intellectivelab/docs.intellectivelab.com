---
title: Charts Tag Configuration
layout: docs
category: Unity 7
---
# Charts

Chart configuration examples:

```xml
<UiComponents>
    <Charts>
        <Chart id="documents-by-mimetype-breakdown" label="Document MimeTypes" type="pie">
            <Description>Document MimeType</Description>
            <Facets scope="analytics_repository">
                <Facet>mime-type-facet</Facet>
            </Facets>
        </Chart>
        <Chart id="tasks-by-start-date-breakdown" label="Tasks By Start Date" type="vComposite">
            <Description>Tasks By Start Date</Description>
            <Facets scope="analytics_repository">
                <Facet>task-by-start-date-facet</Facet>
            </Facets>
            <Plot height="300">
                <Series facet="task-name-facet" label="Task Name" type="line" stack="true" cluster="task-name-facet"/>
            </Plot>
        </Chart>
        <Chart id="state-by-performer" label="State/City by performer" type="hComposite">
            <Description>State/City by performer</Description>
            <Facets scope="analytics_repository">
                <Facet>cases-by-state-city-facet</Facet>
            </Facets>
            <Plot height="360">
                <Series facet="performer" label="Performer" type="mark" stack="true" />
                <Series facet="customer-city" label="Customer City" type="bar" stack="true" />
            </Plot>
        </Chart>
    </Charts>
</UiComponents>
```

Chart configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|id | Chart identifier |
|label | Chart label |
|type | Chart type. Supported types: vComposite, hComposite, pie, treeMap, tableHeatMap, sunburst |
|Description | Optional. Chart description  |
|Facets | Chart facets configuration | 
|Plot | Optional. Chart plot configuration. Applicable only for plot charts (i.e. vComposite, hComposite)  | 

Facets configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|scope | Analytics repository data provider identifier |
|`children` | Array of `Facet` references |

Plot configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|height | Chart height |
|`children` | Array of `Series` configurations |

Series configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|facet | Facet reference |
|label | Series label |
|type | Series type. Supported types: bar, line, mark, lineMark, area |
|stack | Optional. Boolean. When stack attribute is set to `true`, creates a clustered stacked chart | 
|cluster | Optional. Clustering key for this series | 
|curve | Optional. Curve function from the D3 shape library to smooth the line series, see the [D3 documentation](https://github.com/d3/d3-shape#curves) |

## Plot Charts

### Bar Chart

Bar Chart configuration examples:

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

### Line Chart

Line Chart configuration examples:

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

### Mark Chart

Mark Chart configuration examples:

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

### LineMark Chart

LineMark Chart configuration examples:

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

### Area Chart

Area Chart configuration examples:

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

### Composite Chart

*Content to be added*

## Radial Charts

### Pie Chart

Pie Chart configuration examples:

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

## Hierarchical Charts
    
### Tree Map

*Content to be added*
    
### Table Heat Map   

*Content to be added*

### Sunburst    

Sunburst Chart configuration examples:

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

### Zoomable Sunburst

*Content to be added*
