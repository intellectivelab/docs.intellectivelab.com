---
title: FieldSets Tag Configuration
layout: docs
category: Unity 7
---
An example for lookup usage:

```xml
<SolutionConfig SolutionName="CustomerComplaints">  
...
    <FieldSets>
...
        <FieldSet ID="CaseReview">
...
                <Field ID="CC_CustomerCity" Label="Customer City" LookupMinChars="2" Lookup="LdapUserLookup?query={CC_CustomerCity}"/>
		<Field ID="CC_CustomerEmail" Label="C(grp) Email" LookupMinChars="2" Lookup="LdapUserLookupByGroup?query={CC_CustomerEmail}"/>
...
         </FieldSet>
    </FieldSets>

...
</SolutionConfig>
```
