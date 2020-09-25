---
title: Unity Features - Actionable Analytics
layout: docs
category: Unity 7
---

Unity Analytics Feature brings the ability to add leading-edge visualization and powerful analytics capabilities to the web applications based on Unity platform. It allows to summarize, aggregate, analyze and visualize various kind of data to discover insights and make more informed decisions.

This feature allows you to integrate analytics components into your screens or to create fully configurable and customizable analytics dashboards

![Analytics Dashboard](actionable-analytics/images/analytics-dashboard1.jpg)

![Analytics Dashboard](actionable-analytics/images/analytics-dashboard2.jpg) 

# Charts

Charts are UI components which are designed for graphical representation of data

Please refer to [Charts Configuration Section](../configuration/ui-components.md#Charts) for more information about charts configuration. 

## Plot Charts

### Bar Chart

The **Bar Chart** is a chart that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent. The bars can be plotted vertically or horizontally. A vertical bar chart is sometimes called a **Column Chart**.

The Bar Chart shows comparisons among discrete categories. One axis of the chart shows the specific categories being compared, and the other axis represents a measured value.

The Bar Chart component is built based on [React-Vis Bar chart](https://uber.github.io/react-vis/documentation/series-reference/bar-series).

![Bar Chart Vertical](actionable-analytics/images/bar-chart-vertical.jpg) 

![Bar Chart Horizontal](actionable-analytics/images/bar-chart-horizontal-1.jpg)

![Bar Chart Horizontal](actionable-analytics/images/bar-chart-horizontal-2.jpg)

### Line Chart

The **Line Chart** is a type of chart which displays information as a line segments. The Line Chart is often used to visualize a trend in data over intervals of time. The lines can be plotted vertically or horizontally.

The Line Chart component is built based on [React-Vis Line chart](https://uber.github.io/react-vis/documentation/series-reference/line-series).

![Line Chart Vertical](actionable-analytics/images/line-chart-vertical.jpg) 

### Mark Chart

The **Mark Chart** is a type of chart which displays discrete information. The marks can be plotted vertically or horizontally.

The Mark Chart component is built based on [React-Vis Mark chart](https://uber.github.io/react-vis/documentation/series-reference/mark-series).

![Mark Chart Vertical](actionable-analytics/images/mark-chart-vertical.jpg) 

### LineMark Chart

The **LineMark Chart** is a type of chart which displays information as a series of data points called 'marks' connected by straight line segments. The LineMark Chart is often used to visualize a trend in data over intervals of time. The lines and marks can be plotted vertically or horizontally.

The LineMark Chart is a combination of a [Line Chart](#Line Chart) and a [Mark Chart](#Mark Chart).

The LineMark Chart component is built based on [React-Vis LineMark chart](https://uber.github.io/react-vis/documentation/series-reference/line-mark-series).

![LineMark Chart Vertical](actionable-analytics/images/linemark-chart-vertical.jpg) 

### Area Chart

The **Area Chart** displays graphically quantitative data. It is based on the [Line Chart](#Line Chart). The Area Chart is often used to visualize a trend in data over intervals of time. The areas can be plotted vertically or horizontally.

The Area Chart component is built based on [React-Vis Area chart](https://uber.github.io/react-vis/documentation/series-reference/area-series).

![Area Chart Vertical](actionable-analytics/images/area-chart-vertical.jpg) 

### Composite Chart

Several Plot charts can be combined into one Composite Chart.

*Content to be added*

## Radial Charts

### Pie Chart

The **Pie Chart** (Radial/Circle Chart) is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In the Pie Chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents.

You can configure the Pie Chart to illustrate the numerical distribution of facet data.

The recommended type of information to display in this way is groups of less **6** or so. More than that becomes pretty hard to compare, and the reader just sees visual noise.

Pie charts can be replaced in most cases by other charts such as the [Bar Chart](#Bar Chart), [Line Chart](#Line Chart), [Area Chart](#Area Chart), etc.

The Pie Chart component is built based on [React-Vis Radial chart](https://uber.github.io/react-vis/documentation/other-charts/radial-chart).

![Pie Chart](actionable-analytics/images/pie-chart.jpg)

## Hierarchical Charts
    
### Tree Map

*Content to be added*

### Table Heat Map

*Content to be added*

### Sunburst

*Content to be added*

# Indicators

*Content to be added*

# Facets

Facets are used for aggregating data and calculating metrics about that data.

There are two main types of facets:

- Facets that partition or categorize data (the domain) into multiple categories: `TERMS` and `RANGE` facets
- Facets that calculate data for a given category (normally a metric, statistic or analytic function): `METRICS` facet

Please refer to [Facets Configuration Section](../configuration/facets.md) for more information about facets configuration. 