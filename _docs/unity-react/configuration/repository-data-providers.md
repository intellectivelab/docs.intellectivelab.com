---
title: Repository Data Providers Configuration
layout: docs
category: Unity 7
---
|**Note**: Repository Data Providers Configuration is the same for Unity ExtJS and Unity React. 

# Data Providers

Unity Data Provider is a unified facade to integrate content from different external sources:

- [FileNet CE](repository-data-providers/filenet-ce.md)
- [Database](repository-data-providers/db.md)
- JNDI
- CMOD
- CM8
- CMIS
- [SharePoint](repository-data-providers/sharepoint.md)
- [Enterprise Search](repository-data-providers/enterprise-search.md)
- [LDAP](repository-data-providers/ldap.md)

# Basic Configuration Options

## Common steps to configure data provider 
 
- Define [RepositoryDataProvider ID and its class](#repositorydataprovider-id-and-its-class-definition) specific for target repository type   
- Define [Property Name Mapping](#property-name-mapping)
- Verify connection related and other options specific for [data provider](#data-providers)

## RepositoryDataProvider ID and its class definition

In Unity configuration `xml` file define unique `RepositoryDataProvider ID` and its `class` specific for target repository type:

|Repository Type| Class Name|
|:--------------|:----------|
|IBM FileNet P8 |com.vegaecm.vspace.providers.ce.CERepositoryDataProvider|
|[SharePoint](repository-data-providers/sharepoint.md) |com.vegaecm.vspace.providers.sharepoint.SharepointRepositoryDataProvider|
|CM8 |com.vegaecm.vspace.providers.cm8.Cm8RepositoryDataProvider|
|CMOD |com.vegaecm.vspace.providers.cmod.CmodRepositoryDataProvider|
|[Enterprise Search](repository-data-providers/enterprise-search.md) |com.vegaecm.vu.providers.uie.hli.Provider|
|Box |com.vegaecm.vspace.providers.box.BoxRepositoryDataProvider|
|CMIS, Alfresco |com.vegaecm.vspace.providers.cmis.CMISRepositoryDataProvider|
|[Database](repository-data-providers/db.md) |com.vegaecm.vspace.providers.db.DBRepositoryDataProvider|
|Case Management |com.vegaecm.vu.ucm.providers.UcmProvider|
|LDAP |com.intellective.unity.providers.ldap.LdapProvider|
|*content to be added* |com.vegaecm.vspace.providers.categorization.CategorizationProvider|
|*content to be added* |com.vegaecm.vspace.providers.categorization.PropertyCategorizationProvider|
|*content to be added* |com.vegaecm.vspace.providers.bo.BusinessObjectDataProvider|

Example:

```xml
<RepositoryDataProvider ID="sharepoint_repository"
                                   class="com.vegaecm.vspace.providers.sharepoint.SharepointRepositoryDataProvider">
```

## Property Name Mapping

`PropertyNameMapper` section defines how field names in target repository mapped to Unity property name:  
```xml
<RepositoryDataProviders>
    <RepositoryDataProvider ID="sharepoint_repository"
                                class="com.vegaecm.vspace.providers.sharepoint.SharepointRepositoryDataProvider">
            <PropertyNameMapper>
                <Mapping external="Id" internal="UniqueId"/>
                <Mapping external="VersionSeriesId" internal="UniqueId"/>
  .. skipped ..
        </PropertyNameMapper>
    </RepositoryDataProvider>
</RepositoryDataProviders>
``` 

|Attribute | Description |
|:---------|:------------|
|`Mapping/@external`| Property name in Unity configuration|
|`Mapping/@internal`| Property (field, column) name in target repository|

