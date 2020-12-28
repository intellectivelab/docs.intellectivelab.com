---
title: LDAP Data Provider Configuration 
layout: docs
category: Unity 7
---
|**Note**: LDAP Data Provider Configuration is the same for Unity ExtJS and Unity React.

Perform configuration steps [common to all Unity data providers](../repository-data-providers.md#common-steps-to-configure-data-provider).   

|**Note**: Actual for Unity 7.8.0 : only search operation is supported at this Unity version.

# Data source configuration

The LDAP provider requires the configured datasource of `com.intellective.unity.datasources.LdapDatasource` class that points to the target LDAP server.

|Attribute | Description |
|:---------|:------------|
|`Datasource/@class`| 'com.intellective.unity.datasources.LdapDatasource' OOTB LDAP datasource class name|

| Property       | Property description              | Example        |
|:---------------|:--------------------------------|:---------------|
| Host | LDAP server host name | `<Host>192.168.111.123</Host>` |
| Port | (optional) LDAP server port | `<Port>389</Port>` |
| BaseDN | LDAP Base Distinguished Name | `<BaseDN>CN=Users,DC=ext,DC=acme,DC=com</BaseDN>` | 
| SSLEnabled | Boolean flag to enable LDAP SSL connection. Default value: false | `<SSLEnabled>true</SSLEnabled>` | 
| TraceEnabled | Boolean flag to enable LDAP trace. Default value: false | `<TraceEnabled>true</TraceEnabled>` | 
| Authentication | LDAP authentication type. Default value: `simple` | `<Authentication>simple</Authentication>` | 
| SearchScope | LDAP search scope. Default value: `SUBTREE_SCOPE` | `<SearchScope>SUBTREE_SCOPE</SearchScope>` | 
| User | LDAP bind user | `<User>ldap_svc_acc@ext.acme.com</User>` | 
| Password | LDAP bind user password.  Please note that it can be encrypted using standard Unity encryption | `<Password>$V#@!~V</Password>` |  

For example:
```xml
...
    <Datasources>
...
        <Datasource ID="ldapDS" class="com.intellective.unity.datasources.LdapDatasource">
            <Host>192.168.111.123</Host>
            <BaseDN>CN=Users,DC=ext,DC=acme,DC=com</BaseDN>
            <SearchScope>SUBTREE_SCOPE</SearchScope>
            <User>ldap_svc_acc@ext.acme.com</User>
            <Password>$V#@!~V</Password>
        </Datasource>
...
```

# Operators set configuration

Currently (Unity 7.8.0), the LDAP provider only supports `eq`, `starts` and `contains` string operators.  
So, the dedicated operators set should be configured for LDAP provider.  

For example:
```xml
...
        <OperatorsSets>
           <OperatorsSet ID="LDAP">
                <Operators datatype="string">
                    <Operator ID="starts"/>
                    <Operator ID="contains"/>
                    <Operator ID="eq"/>
                </Operators>
           </OperatorsSet>    
...
```

# Context query configuration

 TODO  

# Provider configuration

The LDAP provider requires the configured datasource of `com.intellective.unity.datasources.LdapDatasource` class that points to the target LDAP server.  

|Attribute | Description |
|:---------|:------------|
|`RepositoryDataProvider/@class`| 'com.intellective.unity.providers.ldap.LdapProvider' OOTB LDAP repository data provider class name|

This repository data provider supports the standard `PropertyNameMapper` property mapping section configuration.  

| Property       | Property description              | Example        |
|:---------------|:--------------------------------|:---------------|
| OperatorsSet | Operators set that should be used | `<OperatorsSet>LDAP</OperatorsSet>` | 
| Datasource | LDAP data source reference | `<Datasource>ldapDS</Datasource>` |
| ResultLimit | (optional) Sets the maximum number of entries to be returned as a result of the search. Default value: unlimited | `<ResultLimit>150</ResultLimit>` |

For example:
```xml
...
    <RepositoryDataProviders>
...
        <RepositoryDataProvider ID="ldap_provider" class="com.intellective.unity.providers.ldap.LdapProvider">
            <OperatorsSet>LDAP</OperatorsSet>
            <Operations/>
            <DefineProperties/>
            <ViewerParameters/>
            <Datasource>ldapDS</Datasource>
            <ResultLimit>150</ResultLimit>
            <PropertyNameMapper>
                <Mapping external="LdapUserName" internal="sAMAccountName"/>
                <Mapping external="LdapDisplayUserName" internal="displayName"/>
                <Mapping external="LdapDistinguishedName" internal="distinguishedName"/>
                <Mapping external="LdapPrincipal" internal="name"/>
                <Mapping external="LdapPrincipalType" internal="objectClass"/>
                <Mapping external="LdapShortUserName" internal="givenName"/>
                <Mapping external="LdapUserEmail" internal="userPrincipalName"/>

                <Mapping external="CC_CustomerCity" internal="givenName"/>
                <Mapping external="CC_CustomerEmail" internal="givenName"/>
            </PropertyNameMapper>
        </RepositoryDataProvider>
...
```
