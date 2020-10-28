---
title: Lookups Tag Configuration
layout: docs
category: Unity 7
---

Lookups description section should be added into UCM Solution XML file. An example:

```xml
<Lookups>
...
    <Lookup ID="CaseSearchLookup" Type="SearchTemplate">
        <Parameters>
            <Parameter Name="SearchTemplate" Value="WI-CC_ContactCenter-db" />
            <Parameter Name="IdField" Value="caseId"/>
            <Parameter Name="LabelField" Value="caseNumber"/>
        </Parameters>
    </Lookup>
...
</Lookups>
```

React UI only supports Type=`"SearchTemplate"`

| Parameter | Description |
|:----|:-------------------|
| SearchTemplate   |  Mandatory. Must be set to correct existed search template described in Unity configuration file. |
| IdField          |  Optional. Should be set to column with object identifier from result set of the Search template. Field `'id'` will be used if absent. |
| LabelField       |  Optional. Should be set to some column with user-friendly text from result set of the Search template. Value of the `"IdField"` property will be used if absent.|

Next, set the `Lookup` property to the desired field in field set. An example:
```xml
<Field ID="CC_ParentCase" Label="Parent Case" Required="false" Row="4" Column="2" Lookup="CaseSearchLookup"/>
```







