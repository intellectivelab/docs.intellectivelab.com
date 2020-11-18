---
title: Charts Tag Configuration
layout: docs
category: Unity 7
---
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

