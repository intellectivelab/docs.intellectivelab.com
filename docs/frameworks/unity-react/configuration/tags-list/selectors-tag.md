---
title: Selectors Tag Configuration
layout: docs
category: Unity 7
---
|**Note**: Selectors Tag Configuration is the same for Unity ExtJS and Unity React.

# Description
Unity selector is a server side component providing data for UI combo boxes. Unity selectors are implemented in java code.
It provides data as a list of name-value pairs. The name used to represent item in UI, the value used as a key.   
A selector refers to data provider configuration to define a source of the data.

A selector could be:

 - "cached" - load and store data from data provider in memory and periodically refreshing.
 - "direct" - data retrieved from data provider just when requested.   

A selector configuration consists of setting proper data for `ClassName`, `Description` and a set of `Property` tags.
 
| Path          | Description                                 |
|:--------------|:--------------------------------------------|
| `Selector/@ID`   | Defines a string identifier for the selector. Must be unique. |
| `ClassName`      | Java class name that implements particular selector behaviour. Check specific selector below for available class names|  
| `Description`    | Description for the selector visible in Unity configurator. |
| `Property` | List of properties setup data returned by selector   

# Common Selector Properties

| Property ID | Property value                  |
|:------------|:--------------------------------|
|`DataProviderId`| References specific [Repository Data Provider](../repository-data-providers) in the configuration|
|`RefreshTimeoutSec`| Defines refresh timeout in seconds for cached selector |


Other properties are specific for [different selector types](#selector-types). 

# Example

```xml
        <Selector ID="LookupDocumentsSharepointCL">
            <ClassName>com.vegaecm.vspace.selectors.SharepointChoiceListSelector</ClassName>
            <Description>LookupDocumentsSharepoint</Description>
            <Property ID="DataProviderId" value="sharepoint_repository"/>
            <Property ID="RefreshTimeoutSec" value="86400"/>
            <Property ID="FieldName" value="LookupDocuments"/>
            <Property ID="DocumentClass" value="Documents\Document"/>
        </Selector>
```
Available properties are specific to different selector types defined by `ClassName`.
    
# Selector Types  

There are many types of selectors provided OOTB in Unity.  

## Generic selectors
    
- XMLSelector 
- BooleanSelector
- [UrlJsonSelector](selectors-tag/json-selector)
- DBSelector
- NoCacheDBSelector
- UIESelector

## [P8 CE selectors](selectors-tag/ce-selectors)

- [CESelector](selectors-tag/ce-selectors#ce-selector) - "Cached" selector that allows to execute an arbitrary P8 CE SQL query and use result set as selector items
- [CeDocumentSelector](selectors-tag/ce-selectors#ce-document-selector) - "Direct" selector that allows to execute an arbitrary P8 CE SQL query and use result set as selector items
- CEDocumentClassSelector 
- ChoiceListSelector 

## CMOD and CM8 selectors

- CmodChoiceListSelector 
- Cm8DocumentClassSelector

## Box selectors

- BoxOwnerIdsChoiceListSelector 
- BoxDocumentClassSelector 
- BoxChoiceListSelector 

## CMIS selectors

- CMISChoiceListSelector 
- CMISDocumentClassSelector 
 
## [SharePoint selectors](selectors-tag/sharepoint-selectors) 

- [SharePoint ChoiceList Selector](selectors-tag/sharepoint-selectors#sharepoint-choice-list-selector) reads data from SharePoint choice list definition 
- [SharePoint Lookup Selector](selectors-tag/sharepoint-selectors#sharepoint-lookup-selector) reads data from SharePoint lookup definition
- [SharePoint Principal Selector](selectors-tag/sharepoint-selectors#sharepoint-principal-selector) reads data from SharePoint People and/or Groups
- [SharePoint Document Class Selector](selectors-tag/sharepoint-selectors#sharepoint-document-class-selector) reads data from SharePoint List Content Type definitions 
