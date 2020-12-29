---
title: Lookups Tag Configuration
layout: docs
category: Unity 7
---

# Supported Lookup Types

Lookups description section should be added into UCM Solution XML file. 

An example:

```xml
    <Lookups>
...
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
...
    </Lookups>
```

ExtJS UI supports several types of UCM lookups:

- DB
- Selector
- SearchTemplate

## DB lookup type

This lookup uses the database query to populate its data.

|Attribute | Description | Value|
|:---------|:------------|:-----|
|`Lookup/@Type`| OOTB Database lookup type |`DB`|

| Section       | Section description              | Example        |
|:---------------|:--------------------------------|:---------------|
| DataSource | JNDI Database data source name | `<DataSource>THORDS</DataSource>` |
| Query | SQL query | `<Query>select distinct DOC_CAT_NM as CC_MultipleValueString, DOC_CAT_ID as CC_CustomerEmail from T_DOC_CAT where DOC_CAT_NM like ? order by DOC_CAT_NM</Query>` |

For example:
```xml
    <Lookups>
...
        <Lookup ID="TestLookup" Type="DB">
            <DataSource>THORDS</DataSource>
            <Header>
		<Column Hidden="false">CC_MultipleValueString</Column>
                <Column Hidden="false">CC_CustomerEmail</Column>
            </Header>
            <Query>select distinct DOC_CAT_NM as CC_MultipleValueString, DOC_CAT_ID as CC_CustomerEmail   from T_DOC_CAT where DOC_CAT_NM like ? order by DOC_CAT_NM</Query>
        </Lookup>
...
    </Lookups>
```

## Selector lookup type

This lookup uses the standard Unity selectors to populate its data.

|Attribute | Description | Value|
|:---------|:------------|:-----|
|`Lookup/@Type`| OOTB Selector lookup type |`Selector`|

| Parameter      | Description              | Example        |
|:---------------|:-------------------------|:---------------|
| SelectorID | Unity selector ID | `<Parameter Name="SelectorID" Value="reassignUsers"/>` |
| Operator | Selector operation | `<Parameter Name="Operator" Value="starts"/>` |

For example:
```xml
    <Lookups>
...
        <Lookup ID="SelectorLookup" Type="Selector">
            <Header>
                <Column Hidden="false">assignUser</Column>
            </Header>
            <Parameters>
                <Parameter Name="SelectorID" Value="reassignUsers"/>
                <Parameter Name="Operator" Value="starts"/>
            </Parameters>
        </Lookup>
...
    </Lookups>
```

## SearchTemplate lookup type

This lookup uses the standard Unity search template to populate its data.

|Attribute | Description | Value|
|:---------|:------------|:-----|
|`Lookup/@Type`| OOTB Search template lookup type| `SearchTemplate` |

| Parameter      | Description              | Example        |
|:---------------|:-------------------------|:---------------|
| SearchTemplate | Unity search template ID | `<Parameter Name="SearchTemplate" Value="LDAP_Search_Starts"/>` |
| FieldSet | Unity column set ID | `<Parameter Name="FieldSet" Value="ldap_search_All"/>` |
| FormatSet | Unity format set to be used | `<Parameter Name="FormatSet" Value="default"/>` | 
| UsePropertyLabelAsHeader | Boolean flag to use Unity properties name as label<sup>1</sup>. Default value: `false` | `<Parameter Name="UsePropertyLabelAsHeader" Value="true"/>` | 
| ResultLimit | Boolean flag to enable LDAP trace. Default value: `false` | `<Parameter Name="ResultLimit" Value="500"/>` | 
| SortField | Sort field name. | `<Parameter Name="SortField" Value="LdapShortUserName"/>` | 
| SortDirection | Sort direction. Default value: `ASC` | `<Parameter Name="SortDirection" Value="DESC"/>` | 

<sup>1</sup> Unity 7.8.0 introduces the support of the new `UsePropertyLabelAsHeader` lookup parameter. Set this parameter to `true` of you want to use property header/name from the main Unity configuration as the column header title instead of plain value from the Header/Column section. Default value: `false`.

For example:
```xml
    <Lookups>
...
        <Lookup ID="LdapUserLookup" Type="SearchTemplate">
            <Header>
                <Column>LdapUserName</Column>
                <Column>LdapDistinguishedName</Column>
                <Column>LdapPrincipal</Column>
                <Column>LdapPrincipalType</Column>
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
...
    </Lookups>
```

# Lookup Usage

Lookup usage is described in the following sections:

[FieldSets](fieldsets-tag.md)

*content to be added*
