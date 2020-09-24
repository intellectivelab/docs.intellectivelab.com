---
title: Unity Features
layout: docs
category: Unity 7
---
# Unity Features Comparison List 

## Design principles 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|**MVVM** ensures clear responsibility segregation between business and presentation logic | + | + | [details](#mvvm) |
|**Single responsibility** suggests creating a component that implements only one responsibility and has one reason to change | | + |[details](#single-responsibility) |
|**Encapsulated component** hides its internal structure and implementation details, and defines props to control the behavior and output | | + |[details](#encapsulated-component) |
|**Composable component** is created from the composition of smaller specialized components | | + |[details](#composable-component) |
|**Reusable component** is written once but used multiple times | | + |[details](#reusable-component) |
|**Pure component** always renders same elements for same prop values | | + |[details](#pure-component) |
|**Responsive component** effectively responds to various screen sizes | | + |[details](#responsive-component) |
|**Modern Design System** | | + |[details](#modern-design-system) | 

## Grid 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Grouping |	 + | [U7-2691](https://jira.intellective.com/browse/U7-2691) | [details](#unity-features-list-with-descriptions) | 
|Multiple Column Sorting | + | + | [details](features-grid.md) |
|Column locking	| + |   | [details](#unity-features-list-with-descriptions) |
|Column spanning | + | + | [details](#unity-features-list-with-descriptions) |
|Column reordering | + | + | [details](#unity-features-list-with-descriptions) |
|Column menu | + | + | [details](#unity-features-list-with-descriptions) |
|Column cell formatting (data type formatting) | + | + | [details](#unity-features-list-with-descriptions) |
|Column cell tools and actions | + | + | [details](#unity-features-list-with-descriptions) |
|Column cell rendering customization | + | + | [details](#unity-features-list-with-descriptions) |
|Record text links |   | + | [details](#unity-features-list-with-descriptions) |
|Multiple row selection	| + | + | [details](#unity-features-list-with-descriptions) |
|Row action	| + | + | [details](#unity-features-list-with-descriptions) |
|Bulk action | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom grid action | + | + | [details](#unity-features-list-with-descriptions) |
|Row actions menu | + | + | [details](#unity-features-list-with-descriptions) |
|Expandable rows | + | [U7-2696](https://jira.intellective.com/browse/U7-2696) | [details](#unity-features-list-with-descriptions) |
|Pagination	| + | + | [details](#unity-features-list-with-descriptions) |
|Ability to use a custom grid pagination |   | + | [details](#unity-features-list-with-descriptions) |
|Infinite scrolling	| + | + | [details](#unity-features-list-with-descriptions) |
|Data export | + | + | [details](#unity-features-list-with-descriptions) |
|Display density settings |   | + | [details](#unity-features-list-with-descriptions) |
|Ability to compose with other components |   | + | [details](#unity-features-list-with-descriptions) |
|Adaptive |   | + | [details](#unity-features-list-with-descriptions) |
|Responsive	|   | + | [details](#unity-features-list-with-descriptions) |
|Configurable | + | + | [details](#unity-features-list-with-descriptions) |

## Search criteria panel 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Configurable | + | + | [details](#unity-features-list-with-descriptions) |
|HTML5 input types support | + | + | [details](#unity-features-list-with-descriptions) |
|RTL & LTR support | + | + | [details](#unity-features-list-with-descriptions) |
|RTF support |   | [U7-2697](https://jira.intellective.com/browse/U7-2697) | [details](#unity-features-list-with-descriptions) |
|Currency field |   | + | [details](#unity-features-list-with-descriptions) |
|Formatted text input field |   | + | [details](#unity-features-list-with-descriptions) |
|Date and time picker | + | + | [details](#unity-features-list-with-descriptions) |
|Date range picker | + | + | [details](#unity-features-list-with-descriptions) |
|Client-side select field | + | + | [details](#unity-features-list-with-descriptions) |
|Remote select field | + | + | [details](#unity-features-list-with-descriptions) |
|Facet(category) field |   | + | [details](#unity-features-list-with-descriptions) |
|Range slider |   | + | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom field | + | + | [details](#unity-features-list-with-descriptions) |
|Linked dropdowns | + | [U7-2698](https://jira.intellective.com/browse/U7-2698) | [details](#unity-features-list-with-descriptions) |
|Conditional criteria fields rendering |   | + | [details](#unity-features-list-with-descriptions) |
|Client-side criteria field validation | + | + | [details](#unity-features-list-with-descriptions) |
|Remote criteria field validation |   | [U7-2700](https://jira.intellective.com/browse/U7-2700) | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom criteria field validation | + | + | [details](#unity-features-list-with-descriptions) |
|Criteria defaults | + | + | [details](#unity-features-list-with-descriptions) |
|Criteria sections (fields grouping) | + | + | [details](#unity-features-list-with-descriptions) |
|Reset criteria | + | + | [details](#unity-features-list-with-descriptions) |
|Save criteria | + | + | [details](#unity-features-list-with-descriptions) |
|Choosing saved criteria |   |   | [details](#unity-features-list-with-descriptions) |
|Drawer viewport | + | + | [details](#unity-features-list-with-descriptions) |
|Docked viewport | + | + | [details](#unity-features-list-with-descriptions) |
|Responsive |   | + | [details](#unity-features-list-with-descriptions) |
|Ability to compose with other components |   | + | [details](#unity-features-list-with-descriptions) |

## Properties view form  

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Configurable | + | + | [details](#unity-features-list-with-descriptions) |
|HTML5 input types support | + | + | [details](#unity-features-list-with-descriptions) |
|RTL & LTR support | + | + | [details](#unity-features-list-with-descriptions) |
|RTF support | + | [U7-2697](https://jira.intellective.com/browse/U7-2697) | [details](#unity-features-list-with-descriptions) |
|Date and time picker | + | + | [details](#unity-features-list-with-descriptions) |
|Date range picker | + | + | [details](#unity-features-list-with-descriptions) |
|Range slider |   | + | [details](#unity-features-list-with-descriptions) |
|Currency field |   | + | [details](#unity-features-list-with-descriptions) |
|Formatted text input field |   | + | [details](#unity-features-list-with-descriptions) |
|Client-side select field | + | + | [details](#unity-features-list-with-descriptions) |
|Remote select field | + | + | [details](#unity-features-list-with-descriptions) |
|Lookup field | + | [U7-2702](https://jira.intellective.com/browse/U7-2702) | [details](#unity-features-list-with-descriptions) |
|Categories field – facet field |   | + | [details](#unity-features-list-with-descriptions) |
|Selection field with the choice description input |   | [U7-2703](https://jira.intellective.com/browse/U7-2703) | [details](#unity-features-list-with-descriptions) |
|Autocomplete location field via Google Maps |   | + | [details](#unity-features-list-with-descriptions) |
|Client-side form field validation | + | + | [details](#unity-features-list-with-descriptions) |
|Remote form field validation | + | [U7-2700](https://jira.intellective.com/browse/U7-2700) | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom form field | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom form field validation | + | + | [details](#unity-features-list-with-descriptions) |
|Linked selectors | + | [U7-2698](https://jira.intellective.com/browse/U7-2698) | [details](#unity-features-list-with-descriptions) |
|Conditional form fields rendering |   | + | [details](#unity-features-list-with-descriptions) |
|Form defaults | + | + | [details](#unity-features-list-with-descriptions) |
|Form sections (fields grouping) | + | + | [details](#unity-features-list-with-descriptions) |
|Form tabs | + | + | [details](#unity-features-list-with-descriptions) |
|Form header |   | + | [details](#unity-features-list-with-descriptions) |
|Form actions | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom form action | + | + | [details](#unity-features-list-with-descriptions) |
|Form layouting | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to define a custom form layout |   | + | [details](#unity-features-list-with-descriptions) |
|Full screen mode |   | + | [details](#unity-features-list-with-descriptions) |
|Drawer viewport |   | + | [details](#unity-features-list-with-descriptions) |
|Docked viewport | + | + | [details](#unity-features-list-with-descriptions) |
|Tab viewport | + | + | [details](#unity-features-list-with-descriptions) |
|Viewport aspect ratio |   | + | [details](#unity-features-list-with-descriptions) |
|Ability to compose with other components |   | + | [details](#unity-features-list-with-descriptions) |
|Responsive |   | + | [details](#unity-features-list-with-descriptions) |

## Search template 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Configurable | + | + | [details](#unity-features-list-with-descriptions) |
|Grid | + | + | [details](#unity-features-list-with-descriptions) |
|Search criteria | + | + | [details](#unity-features-list-with-descriptions) |
|Folder view | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to bundle multiple search templates | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to link multiple search templates |   | [U7-2713](https://jira.intellective.com/browse/U7-2713) | [details](#unity-features-list-with-descriptions) |
|Fuzzy search |   |   | [details](#unity-features-list-with-descriptions) |
|Enterprise search | + | + | [details](#unity-features-list-with-descriptions) |
|Quick search (date ranges, text input, choices, and categories) |   | + | [details](#unity-features-list-with-descriptions) |
|Recent view history – a list of references to recently viewed items |   | + | [details](#unity-features-list-with-descriptions) |
|Stacked searchers – compare/process of records from different searches | + |   | [details](#unity-features-list-with-descriptions) |
|Data export | + | + | [details](#unity-features-list-with-descriptions) |
|Skimming view |   | + | [details](#unity-features-list-with-descriptions) |
|Adaptive |   | + | [details](#unity-features-list-with-descriptions) |
|Responsive |   | + | [details](#unity-features-list-with-descriptions) |
|Ability to compose with other components |   | + | [details](#unity-features-list-with-descriptions) |

## Page/Tab 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Configurable | + | + | [details](#unity-features-list-with-descriptions) |
|Grid | + | + | [details](#unity-features-list-with-descriptions) |
|Criteria | + | + | [details](#unity-features-list-with-descriptions) |
|Search Template | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom component | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to create a custom layout | + | + | [details](#unity-features-list-with-descriptions) |
|Ability to bundle components into containers (tabs) |   | + | [details](#unity-features-list-with-descriptions) |

## Dashboard 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Configurable |   | + | [details](#unity-features-list-with-descriptions) |
|Grid | + | + | [details](#unity-features-list-with-descriptions) |
|Search Criteria | + | + | [details](#unity-features-list-with-descriptions) |
|Facet(category) field | + | [+](dashboards/facets/features-facet.md) | [details](#unity-features-list-with-descriptions) |
|Range slider | + | + | [details](#unity-features-list-with-descriptions) |
|Indicator |   | + | [details](#unity-features-list-with-descriptions) |
|Column Chart | + | [+](dashboards/charts/features-bar-chart.md) | [details](#unity-features-list-with-descriptions) |
|Mark Chart | + | [+](dashboards/charts/features-mark-chart.md) | [details](#unity-features-list-with-descriptions) |
|Line Chart |   | [+](dashboards/charts/features-line-chart.md) | [details](#unity-features-list-with-descriptions) |
|Line Mark Chart | + | [+](dashboards/charts/features-linemark-chart.md) | [details](#unity-features-list-with-descriptions) |
|Area Chart |   | [+](dashboards/charts/features-area-chart.md) | [details](#unity-features-list-with-descriptions) |
|Bar Chart | + | [+](dashboards/charts/features-bar-chart.md) | [details](#unity-features-list-with-descriptions) |
|Pie Chart | + | [+](dashboards/charts/features-pie-chart.md) | [details](#unity-features-list-with-descriptions) |
|Scatter Chart |   | + | [details](#unity-features-list-with-descriptions) |
|Composite Chart |   | [+](dashboards/charts/features-composite-chart.md) | [details](#unity-features-list-with-descriptions) |
|Pivot | + |   | [details](#unity-features-list-with-descriptions) |
|Sunburst |   | [IB-1091](https://jira.intellective.com/browse/IB-1091) | [details](#unity-features-list-with-descriptions) |
|Treemap |   | + | [details](#unity-features-list-with-descriptions) |
|Heatmap |   | + | [details](#unity-features-list-with-descriptions) |
|Table Heatmap |   | + | [details](#unity-features-list-with-descriptions) |
|Chart drill down capability |   | [IB-616](https://jira.intellective.com/browse/IB-616) | [details](#unity-features-list-with-descriptions) |
|Show/hide dashboard components |   | [IB-767](https://jira.intellective.com/browse/IB-767) | [details](#unity-features-list-with-descriptions) |
|Ability to add a custom component |   | + | [details](#unity-features-list-with-descriptions) |
|Ability to clusterize/bundle components into containers |   | + | [details](#unity-features-list-with-descriptions) |
|Saved Filters |   | + | [details](#unity-features-list-with-descriptions) |
|Data Export |   | + | [details](#unity-features-list-with-descriptions) |


## Document management 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
| Create a document       | + | + |  [details](#unity-features-list-with-descriptions) 
| Create a document with multiple content        | + | + |  [details](#unity-features-list-with-descriptions) 
| Drag and drop a file into the grid  | + | [U7-2714](https://jira.intellective.com/browse/U7-2714) | [details](#unity-features-list-with-descriptions)       |
| Drag and Drop a file into the create/view form   |   | + |  [details](#unity-features-list-with-descriptions)      |
| Folder select - upload a document into the selected folder | + | [U7-2715](https://jira.intellective.com/browse/U7-2715) |[details](#unity-features-list-with-descriptions)        |
| Document search and navigation        | + | + |[details](#unity-features-list-with-descriptions)        |
| Document view and update properties      | + | + | [details](#unity-features-list-with-descriptions)       |
| Document versioning        | + | + |[details](#unity-features-list-with-descriptions)        |
| Document permission management        | + |   | [details](#unity-features-list-with-descriptions)       |
| Document content action (view content and download)        | + | + | [details](#unity-features-list-with-descriptions)       |
| Document copy/move to folder        | + |   | [details](#unity-features-list-with-descriptions)       |
| Document delete       | + | + | [details](#unity-features-list-with-descriptions)       |
| Copy link        | + | + | [details](#unity-features-list-with-descriptions)       |

## Case management 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Create a case | + | + |  [details](#unity-features-list-with-descriptions) |
|Create a case with attachments | + | + |  [details](#unity-features-list-with-descriptions) |
|Case search and navigation | + | + |  [details](#unity-features-list-with-descriptions) |
|Case view and update properties | + | + |  [details](#unity-features-list-with-descriptions) |
|Case history | + | + |  [details](#unity-features-list-with-descriptions) |
|Case user comments (search, add, view, update, delete) | + | + |  [details](#unity-features-list-with-descriptions) |
|Case activity feed with infinite scrolling |   | + |  [details](#unity-features-list-with-descriptions) |
|Case events timeline with infinite scrolling |   | + |  [details](#unity-features-list-with-descriptions) |
|Case attachments with folder view (search, navigate, attach, detach) | + | + |  [details](#unity-features-list-with-descriptions) |
|Attach a local document to the case | + | + |  [details](#unity-features-list-with-descriptions) |
|Attach an existing document to the case | + | + |  [details](#unity-features-list-with-descriptions) |
|Case split  | + | + |  [details](#unity-features-list-with-descriptions) |
|Case copy | + | + |  [details](#unity-features-list-with-descriptions) |
|Case close | + | + |  [details](#unity-features-list-with-descriptions) |
|Case re-open | + | + |  [details](#unity-features-list-with-descriptions) |
|Case tasks view (search, create, view, complete, reassign) | + | + |  [details](#unity-features-list-with-descriptions) |
|Case work items view (search, view, process, complete, reassign) | + | + |  [details](#unity-features-list-with-descriptions) |
|Ability to show case related entities via virtual folders | + |   |  [details](#unity-features-list-with-descriptions) |
|Copy link | + | + |  [details](#unity-features-list-with-descriptions) |

## Process management 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Personal in-basket | + | + |  [details](#unity-features-list-with-descriptions) |
|Role in-basket | + | + |  [details](#unity-features-list-with-descriptions) |
|View information about the work item and information about the associated case  | + | + |  [details](#unity-features-list-with-descriptions) |
|Edit work item data, including case properties  | + | + |  [details](#unity-features-list-with-descriptions) |
|Manage case attachments  | + | + |  [details](#unity-features-list-with-descriptions) |
|View case history  | + | + |  [details](#unity-features-list-with-descriptions) |
|Process/Complete work item | + | + |  [details](#unity-features-list-with-descriptions) |
|Lock/Unlock work item | + | + |  [details](#unity-features-list-with-descriptions) |
|Reassign work item | + | + |  [details](#unity-features-list-with-descriptions) |
|Process analytics |   | + |  [details](#unity-features-list-with-descriptions) |

## User preferences 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Localization | + |   |  [details](#unity-features-list-with-descriptions) |
|Choosing user role | + |   |  [details](#unity-features-list-with-descriptions) |
|Choosing preferred language | + |   |  [details](#unity-features-list-with-descriptions) |
|Choosing time zone | + |   |  [details](#unity-features-list-with-descriptions) |
|Choosing theme | + | + |  [details](#unity-features-list-with-descriptions) |

## Auxiliary 

| Feature | Unity ExtJs | Unity React | Feature Details |
|:--------------------|:-------------------:|:-------:|:-------:|
|Unity API support |   | + |  [details](#unity-features-list-with-descriptions) |
|Help Authoring | + |   |  [details](#unity-features-list-with-descriptions) |
|System Notifications | + |  [U7-2661](https://jira.intellective.com/browse/U7-2661) |  [details](#unity-features-list-with-descriptions) |
|Environment Variables | ? | ? |  [details](#unity-features-list-with-descriptions) |

# Unity Features List With Descriptions  

## Design principles 

#### MVVM 

Ensures clear responsibility segregation between business and presentation logic.

#### Single responsibility 

Suggests creating a component that implements only one responsibility and has one reason to change. 

#### Encapsulated component 

Hides its internal structure and implementation details, and defines props to control the behavior and output. 

#### Composable component 

It is created from the composition of smaller specialized components. 

#### Reusable component 

It is written once but used multiple times.

#### Pure component 

Always renders same elements for same prop values.

#### Responsive component 

Effectively responds to various screen sizes. 

#### Modern Design System 



## Grid 

## Search criteria panel 

## Properties view form 

## Search template 

## Page/Tab 

## Dashboard 

## Document management 

## Case management 

## Process management 

## User preferences 

## Auxiliary 



