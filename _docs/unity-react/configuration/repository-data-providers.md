---
title: Repository Data Providers Configuration
layout: docs
category: Unity 7
---

|**Note**: Repository Data Provider Configuration is the same for Unity ExtJs and Unity React. 

# Data Providers

Unity Data Provider is a unified facade to integrate content from different external sources:

- FileNet CE
- [Database](repository-data-providers/db.md)
- JNDI
- CMOD
- CM8
- CMIS
- [SharePoint](repository-data-providers/sharepoint.md)
- [Enterprise Search](repository-data-providers/enterprise-search.md)

# Basic Configuration Options

Main steps to configure Data Provider are:  
 
- Define data provider ID and its class specific for target repository type:  

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
    |*content to be added* |com.vegaecm.vspace.providers.categorization.CategorizationProvider|
    |*content to be added* |com.vegaecm.vspace.providers.categorization.PropertyCategorizationProvider|
    |*content to be added* |com.vegaecm.vspace.providers.bo.BusinessObjectDataProvider|
    
    Example:
    
    ```
    <RepositoryDataProvider ID="sharepoint_repository"
                                       class="com.vegaecm.vspace.providers.sharepoint.SharepointRepositoryDataProvider">
    ```
   
- Define [Property Name Mapping](#property-name-mapping)
- Verify connection related and other options specific to [Data Provider](#data-providers)

# Property Name Mapping

`PropertyNameMapper` section define how field names in target repository mapped to Unity property name:  
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

