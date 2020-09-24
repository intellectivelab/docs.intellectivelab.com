---
title: Configuring Unity Features - Facets
layout: docs
category: Unity 7
---

| Facets feature is only supported by UIE connector with [Solr](https://lucene.apache.org/solr/) under the hood.

Facets are used for aggregating data and calculating metrics about that data.

There are two main types of facets:

- Facets that partition or categorize data (the domain) into multiple categories: `TERMS` and `RANGE` facets
- Facets that calculate data for a given category (normally a metric, statistic or analytic function): `METRICS` facet

### Terms Facet

The Terms facet (or field facet) categorizes the domain based on the unique terms / values of a field.

The following example categorizes the domain based on the "MimeType" field.

```xml
<Facets>
    ...
    <Facet id="mime-type-facet" field="MimeType" type="TERMS"/>
    ...
</Facets>
```

| Parameter | Description |
|:----|:-------------------|
|id | Facet identifier |
|field | Field name to facet over |
|type | Facet type. `TERMS` is used for Terms facet |
|limit | Limits the number of categories returned. Defaults to `10` |
|minCount | Only return categories with a count of at least this number. Defaults to `1` |

### Range Facet

The Range facet produces multiple categories over a date field or numeric field.

The following example categorizes the domain by months of the specified year.

```xml
<Facets>
    ...
    <Facet id="start-date-facet" field="StartDate" type="RANGE" start="2020-01-01T00:00:00Z" end="2020-12-31T23:59:59Z" gap="1m"/>
    ...
</Facets>
```

| Parameter | Description |
|:----|:-------------------|
|id | Facet identifier |
|field | Field name to facet over |
|type | Facet type. `RANGE` is used for Range facet |
|start | Lower bound of the range. Any valid number or date/datetime string value. Optional. If not specified, minimum field value is used as a start bound |
|end | Upper bound of the range. Any valid number or date/datetime string value. Optional. If not specified, maximum field value is used as a end bound |
|gap | Size of each range category produced. Any valid number for numeric fields or time unit string for date field like `1y`, `2m`, `7d`. Supported units: y, m, d, h, min, sec, ms |
|interval | Range interval. The same format as `gap` parameter is used. The interval is counted from the current date to the past |

| Either `gap` or `interval` parameter must be specified for the `Range` facet.

### Metrics Facet

Aggregation functions, also called metrics, calculate something interesting over a domain.

The following example calculates the average amount across the domain.

```xml
<Facets>
    ...
    <Facet id="amount-facet" field="Amount" type="METRICS" function="AVG"/>
    ...
</Facets>
```

| Parameter | Description |
|:----|:-------------------|
|id | Facet identifier |
|field | Field name to facet over |
|type | Facet type. `METRICS` is used for Metrics facet |
|function | Facet function/metric. Supported functions: SUM, AVG, MIN, MAX, UNIQUE, VARIANCE |

### Nested Facets

Nested facets, also called sub-facets, allows adding additional facets for every category produced by a parent facet.

```xml
<Facets>
    ...
    <Facet id="step-duration-facet" field="StartDate" type="RANGE" gap="1m">
        <Facet id="step-duration-by-name-facet" field="StepName" type="TERMS">
            <Facet id="step-duration-avg-facet" field="Duration" type="METRICS" function="AVG"/>
        </Facet>
    </Facet>
    ...
</Facets>
```