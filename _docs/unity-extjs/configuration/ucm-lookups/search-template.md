---
title: 'SearchTemplate' lookup Configuration 
layout: docs
category: Unity 7
---
|**Note**: 'SearchTemplate' lookup configuration is the same for Unity ExtJS and Unity React. 

# Lookup Configuration

|Attribute | Value / Description |
|:---------|:------------|
|`Lookup/@Type`| `SearchTemplate` / OOTB Search template lookup type|

| Property       | Property description              | Example        |
|:---------------|:--------------------------------|:---------------|
| SearchTemplate | Unity search template ID | `<Parameter Name="SearchTemplate" Value="LDAP_Search_Starts"/>` |
| FieldSet | Unity column set ID | `<Parameter Name="FieldSet" Value="ldap_search_All"/>` |
| FormatSet | Unity format set to be used | `<Parameter Name="FormatSet" Value="default"/>` | 
| UsePropertyLabelAsHeader | Boolean flag to use Unity properties name as label. Please see dedicated section below. Default value: `false` | `<Parameter Name="UsePropertyLabelAsHeader" Value="true"/>` | 
| ResultLimit | Boolean flag to enable LDAP trace. Default value: `false` | `<Parameter Name="ResultLimit" Value="500"/>` | 
| SortField | Sort field name. | `<Parameter Name="SortField" Value="LdapShortUserName"/>` | 
| SortDirection | Sort direction. Default value: `ASC` | `<Parameter Name="SortDirection" Value="DESC"/>` | 

For example:
```xml
<SolutionConfig SolutionName="CustomerComplaints">  
...
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
...
</SolutionConfig>
```
## 'UsePropertyLabelAsHeader' lookup parameter

Unity 7.8.0 introduces the support of the new `UsePropertyLabelAsHeader` lookup parameter. 
Set this parameter to `true` of you want to use property header/name from the main Unity configuration 
as the column header title instead of plain value from the Header/Column section. Default value: `false`.


