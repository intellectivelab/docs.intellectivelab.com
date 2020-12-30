---
title: JSON Selector Tag Configuration
layout: docs
category: Unity 7
---
|**Note**: Selectors Tag Configuration is the same for Unity ExtJs and Unity React.

UrlJsonSelector is intended for loading list of parameters from the external source. It can be URL address or JSON file.

JSON selector example:
```xml
        <Selector ID="urlChoicesLocal"> 
            <ClassName>com.vegaecm.vspace.selectors.UrlJsonSelector</ClassName> 
            <Description/> 
            <SortOrder>ASC</SortOrder>
            <Property ID="RefreshTimeoutSec" value="86400"/> <Property ID="Url" value="file:///D:/Claims_PropertyData.json"/> 
        </Selector>
```

|Parameter|Description|Value|
|:--------|:----------|:----|
|SortOrder|Optional. Allows to sort the loaded list of values in alphabetical order |`ASC`, `DESC`|

JSON file example:
```json
        [{
                "symbolicName": "EmployeeIndicat",
                "choiceList": {
                    "displayName": "Employee Indicator",
                    "choices": [{
                            "displayName": "dN",
                            "value": "vN"
                        }, {
                            "displayName": "dU",
                            "value": "vU"
                        }]}
        }]  
```

URL selector example:
```xml
        <Selector ID="urlChoicesRemote"> 
            <ClassName>com.vegaecm.vspace.selectors.UrlJsonSelector</ClassName> 
            <Description/> 
            <Property ID="RefreshTimeoutSec" value="86400"/> <Property ID="Url" value="http://localhost:9080/vu/static/Claims_PropertyData.json"/> 
        </Selector>
```

Refer to [Selectors Tag configuration](../selectors-tag.md#common-selector-properties) to configure common selector properties.