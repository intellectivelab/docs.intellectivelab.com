---
title: UCM Lookups Configuration
layout: docs
category: Unity 7
---

# Case Management UI lookups

There are several types of UCM lookups:

- DB
- Selector
- [SearchTemplate](ucm-lookups/search-template.md)

Example:

```xml
<SolutionConfig SolutionName="CustomerComplaints">  
...
    <Lookups>
        <Lookup ID="TestLookup" Type="DB">
            <DataSource>THORDS</DataSource>
            <Header>
                <Column Hidden="false">CC_CustomerEmail</Column>
            </Header>
            <Query>select distinct DOC_CAT_NM as CC_MultipleValueString, DOC_CAT_ID as CC_CustomerEmail   from T_DOC_CAT where DOC_CAT_NM like ? order by DOC_CAT_NM</Query>
        </Lookup>
        <Lookup ID="SelectorLookup" Type="Selector">
            <Header>
                <Column Hidden="false">assignUser</Column>
            </Header>
            <Parameters>
                <Parameter Name="SelectorID" Value="reassignUsers"/>
                <Parameter Name="Operator" Value="starts"/>
            </Parameters>
        </Lookup>

        <Lookup ID="LdapUserLookup" Type="SearchTemplate">
            <Header>
                <Column>LdapUserName</Column>
                <Column>LdapDistinguishedName</Column>
                <Column>LdapPrincipal</Column>
                <Column>LdapPrincipalType</Column>
                <Column>CC_CustomerCity</Column>
                <Column>LdapUserEmail</Column>
            </Header>
            <Parameters>
                <Parameter Name="SearchTemplate" Value="LDAP_Search_Starts"/>
                
                <Parameter Name="FieldSet" Value="ldap_search_All"/>
                <Parameter Name="FormatSet" Value="default"/>
                
                <Parameter Name="UsePropertyLabelAsHeader" Value="true"/>
                
                <Parameter Name="ResultLimit" Value="500"/>
                <Parameter Name="SortField" Value="LdapShortUserName"/>
                <Parameter Name="SortDirection" Value="DESC"/>
            </Parameters>
        </Lookup>
    </Lookups>
...
</SolutionConfig>
```
# Usage

Example:

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

*content to be added*
