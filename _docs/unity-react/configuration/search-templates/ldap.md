---
title: Search Templates Configuration - LDAP (com.intellective.unity.providers.ldap.LdapProvider)
layout: docs
category: Unity 7
---
List of available properties for documents search template is in the table below: 

| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
|ContextQuery |Optional. Allows to define the dynamic search criterias that depend on current user data. See the `Context query configuration` section below for more details.|

# Context query configuration

The LDAP repository data provider supports the standard search operation's `ContextQuery` operation property configuration that can be used to define 
dynamic search criterias specific for currently logged user like current user LDAP groups.

For example:
```xml
...
    <SearchTemplates>
...
        <SearchTemplate ID="LDAP_Search_Starts_WithUserRolesContextQuery">
            <DataProviderId>ldap_provider</DataProviderId>
...
            <Operation dataProviderId="ldap_provider" type="search">
                <OperationProperties>
                    <!-- Search 'user' principals belonging to the same groups as the current user belongs. -->
                    <Property ID="ContextQuery">
                    {
                        "operation": "and",
                        "operand": [
                            {operation: 'eq', operand: [{field: 'LdapPrincipalType'}, {value: 'user'}]},
                            {operation: 'contains', operand: [{field: 'memberOf'}, {value: '{UserContext.Groups}'}]}
                        ]
                    }
                    </Property>
                </OperationProperties>
...
```
Here, the `memberOf` is the standard LDAP object property that contains the list of object groups and the `{UserContext.Groups}` macro is the OOTB Unity 
macro that provides the list of LDAP groups the current user belongs to.
