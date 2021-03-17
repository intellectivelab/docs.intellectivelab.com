---
title: Enterprise Search Data Provider Configuration
layout: docs
category: Unity 7
---
|**Note**: Enterprise Search Data Provider Configuration is the same for Unity ExtJS and Unity React. 

# Description

Enterprise Search Data Provider integrates Unity with Enterprise Search. 

*content to be added*

# Configuration

Perform configuration steps [common to all Unity data providers](../repository-data-providers.md#common-steps-to-configure-data-provider).   

## Connection options

*content to be added*  

Example:

```xml
<RepositoryDataProvider ID="uie_repository" class="com.vegaecm.vu.providers.uie.hli.Provider">
            <ResultLimit>1000</ResultLimit>
            <HliServiceUrl>${searcher.url}</HliServiceUrl>
            <QueryTimeout>0</QueryTimeout>
            <CacheTimeout>0</CacheTimeout>
            <QuerySizeLimit>10000</QuerySizeLimit>
            <UpdateTimeout>30</UpdateTimeout>
            <HttpDataFormat>JSON</HttpDataFormat>
            <SecurityFilteringEnabled>true</SecurityFilteringEnabled>
            <IndexGroups>
                <IndexGroup>${solution.name}</IndexGroup>
            </IndexGroups>
            <Communication>
                <EncryptionKeyId>3DES</EncryptionKeyId>
            </Communication>
</RepositoryDataProvider>
```

## Index to Unity mapping

Each repository in Enterprise Search must be mapped to Unity repository data provider by ID. 

- IBM FileNet P8  
    
    ```xml
    <Repository internal="CERepositoryDemo">                    
        <DefineProperties>                        
            <Property ID="repositoryType" value="ce_repository"/>						
            <Property ID="documentId.VersionSeriesId" value="{This.$id@s}"/>                        
            <Property ID="documentId.Id" value="{This.$oid@s}"/>                        
            <Property ID="documentId.$os" value="Demo"/>                    
        </DefineProperties>                
    </Repository>  
    ```

- CMIS (Alfresco)
      
    ```xml
    <Repository internal="AlfrescoMainRepository">                    
        <DefineProperties>                        
            <Property ID="repositoryType" value="AlfrescoMainRepository"/>						
            <Property ID="documentId.VersionSeriesId" value="{This.cmis:versionSeriesId@s}"/>						
            <Property ID="documentId.Id" value="{This.cmis:objectId@s}"/>                    
        </DefineProperties>               
    </Repository> 
    ```

- SharePoint
        
    ```xml
    <Repository internal="SharePoint-operations">
        <DefineProperties>
            <Property ID="repositoryType" value="sharepoint_repository_operations"/>
            <Property ID="documentId.id" value="{This.$id@s}"/>
        </DefineProperties>
    </Repository>
    ```

Verify `collection_name` and ID properties configured for Enterprise Search column set to make mapping above work.
 
- Configure properties
        
    ```xml
    <Properties>
    .. skipped ..
    <!-- additional properties for SP mapping to work -->
        <Property ID="DocumentNumber">
            <Name>SP Document Number</Name>
            <Type>int</Type>
            <Sortable>true</Sortable>
            <MultiValue>false</MultiValue>
            <Width>50</Width>
            <Tooltip/>
        </Property>
        <Property ID="ListName">
            <Name>SP List Name</Name>
            <Type>string</Type>
            <Sortable>true</Sortable>
            <MultiValue>false</MultiValue>
            <Width>50</Width>
            <Tooltip/>
        </Property>
    </Properties>
    ```

- Include properties in Enterprise Search column set
    
    ```xml
    <ColumnSet ID="uie_search_All">
        <Properties>
    .. skipped ..
            <!-- append to required fields for mapping -->
            <Property>ListName</Property>
            <Property>DocumentNumber</Property>
        </Properties>
    </ColumnSet>
    ```

## Security filtering mode 

Unity applies native security when security filtering mode enabled for Enterprise Search data provider.
Only documents user has access to in target repository are visible in search results in this mode. 
This mode disabled by default.

Follow configuration steps below to enable security filtering mode:  

- Set `SecurityFilteringEnabled` property to true
    
    ```xml
    <RepositoryDataProvider ID="uie_repository" class="com.vegaecm.vu.providers.uie.hli.Provider">
      .. skipped ..
      <SecurityFilteringEnabled>true</SecurityFilteringEnabled>
    .. skipped ..
    </RepositoryDataProvider>
    ```

- Verify all target repositories mapped in [ViewerProperties](#index-to-unity-mapping) section
