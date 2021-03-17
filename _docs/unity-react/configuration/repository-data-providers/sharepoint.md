---
title: Sharepoint Data Provider Configuration
layout: docs
category: Unity 7
---
|**Note**: SharePoint Data Provider Configuration is the same for Unity ExtJS and Unity React.

# Description
Unity SharePoint connector provides tight integration with MS SharePoint. 
SharePoint OnPremise (Basic, NTLM, SPNEGO SSO authentication modes) and 
Sharepoint in Azure Cloud (username/password and authentication code modes) are supported.  

Following Unity features supported:
 - document operations: add, modify properties and content, delete, copy to folder, move to folder
 - manage permissions for documents and folders
 - versioning: view document versions properties and content, restore versions 
 - working with different SP ContentTypes
 - folder view with quick search filter
 - search via search templates in Document library
 - open/edit SP document in Browser and in Desktop Application
 - ability to use SP documents in Case management flow
  
Unity SharePoint connector uses Sharepoint OData REST API to access SharePoint object model. 
SP REST calls made on behalf of Unity logged in user to fully preserve SP security model. 
Read only system account used to cache metadata about SP Document Libraries (fields, choices etc) for performance reason. 

# Environment Setup
An information about SharePoint instance and some setup action required to configure Unity SP connector.
Different setup actions and options depends on the SP instance type and Unity project requirement. 
Single Unity `<Datasource>` must be configured for SP root url. 
Single repository data provider is able to cover all SP site topology for specified data source root url. 
Different SP data providers could be configured for a part of SP site topology if needed to provide different property name mapping.   

## SharePoint in Azure Cloud 
Authentication options (flows) supported for SP in Cloud:

 - Authentication Code authorization flow uses additional popup to get Azure Cloud authentication code for Unity connector. 
 This is preferred flow for production it's also an only option if multi factor authentication configured for Azure tenant.
 Please check [AuthCode flow Connector App Registration](sharepoint/authcode.md) page for details.
 
 - Username Password authorization flow uses user session credentials to authenticate to Azure.
 Azure AD "App registration" must be created and properly configured with specific options for both cases.
 Please check [Username Password flow Connector App Registration](sharepoint/userpwd.md) page for details.
 
## SharePoint OnPremise
 - Basic/NTLM authentication - the easiest to setup both in SP and Unity connector. No additional steps needed to configure environment. Verify that no ApplicationId and AzureDomain defined for Datasource: 

```xml
  <Datasource ID="sharepoint_ds" class="com.vegaecm.vspace.datasources.SharepointDatasource">
  <RootUrl>http://sp.yourdomain.com/</RootUrl>
  <Login>read_only@yourdomain.com</Login>
  <Password>${EncryptedSystemUserPassword}</Password>
 </Datasource>
```
  
 - SPNEGO SSO - must be properly configured in SP and application container hosting Unity application. 
 Please check [Spnego Setup](sharepoint/spnego.md) page for details.
   
# SharePoint List Metadata URLs   
Use browser to find a proper configuration values as described below.
- Open browser tab and navigate to sharepoint site at `<RootUrl>`
- Enter different URLs in the tab location from the table below 
- Find value tags in returned XML and use them in unity configuration    

## SharePoint metadata URLs

| Metadata             | Description                            | URL                                              |
|:---------------------|:---------------------------------------|:-------------------------------------------------|
| Root Url             | SharePoint online Root Url for SP Online uses Tenant name (Azure registered name of organization) to construct RootUrl. SP OnPremise uses arbitrary url (consult admin). | `https://<Tenant>.sharepoint.com`   |
| SP Lists             | Use SP List Title tag value to specify list in a Unity configuration. | `https://<RootUrl>/_api/lists?$select=Title`    |
| SP Content Types     | Use ```<ListTitle>\<Content Type Name>``` in Unity configuration.          | `https://<RootUrl>/_api/lists/getbytitle('<ListTitle>')/ContentTypes?$select=Name,Id`|
| SP Fields            | Use Field `EntityPropertyName`  in Unity configuration.          | `https://<RootUrl>/_api/lists/getbytitle('<ListTitle>')/Fields?$select=EntityPropertyName,Id'`   |
| SP Sites             | Use SharePoint admin url to find sites list.             | `https://<Tenant>-admin.sharepoint.com/`|
 
# Unity Features Configuration Specific to SharePoint Connector
    
## SharePoint repository data provider

Perform configuration steps [common to all Unity data providers](../repository-data-providers.md#common-steps-to-configure-data-provider).   
Check [Metadata Urls](#sharepoint-metadata-urls) on how to list all available fields for particular list.  
Check [Property name mapping](#property-name-mapping) section on mapping options.   

Custom properties for SharePoint data provider:    
 
| Property       | Property description              | Example        |
|:---------------|:--------------------------------|:---------------|
| Site | Optional. Defaults to Root site '/'. Defines a base site for the data provider. This site, subsites and their libraries will be covered by this data provider. Set this property to a Site path relative to datasource RootUrl. See [Metadata Urls](#sharepoint-metadata-urls).  | sites/TestSite |
| SecurityNotification | Optional. Set this property to enable e-mail notification when sharing documents. Notifications are disabled by default. | enabled |
| RootSiteName | Optional. Defines a name of the root folder in the tree view. Defaults to the site name in SP. ||
| TopologyFilter | Optional. Defines component name used for site/library filtering. See [TopologyFilter](#topologyfilter) section below. | RootLibraries |
| UieSync | See [Security Filtering](#enterprise-index-synchronization-and-security-filtering) section below. |

Example:

```xml
<RepositoryDataProvider ID="sharepoint_repository"
                        class="com.vegaecm.vspace.providers.sharepoint.SharepointRepositoryDataProvider">
    <OperatorsSet>P8</OperatorsSet>
    <DefineProperties/>
    <ViewerParameters/>
    <Datasource>sharepoint_ds</Datasource>
    <ResultLimit>150</ResultLimit>
    <!-- custom properties -->
    <Site>sites/TestSite</Site>
    <TopologyFilter>RootLibraries</TopologyFilter>
    <RootSiteName>SampleSite</RootSiteName>
    <SecurityNotification>false</SecurityNotification>
    <UieSync>
        <Url>http://localhost:8080/services/push/Sharepoint/SharePoint-vkozyr/Documents-vkozyr</Url>
        <Username>******</Username>
        <Password>******</Password>
    </UieSync>
    <!-- custom properties --> 
    <PropertyNameMapper>
     <!-- ... skipped ... -->
    </PropertyNameMapper>
</RepositoryDataProvider>
```

### Property name mapping

[Property name mapping](../repository-data-providers.md#property-name-mapping) is used to map SP columns to Unity properties.

There are three types of columns used in SP data provider mapping configuration.

| Column type        | Description                            |
|:---------------------|:---------------------------------------|
| Custom column | Column SP exposed in the SP Site/List/Content type settings UI |
| System column | Column exists in the SP metadata but not visible in SP UI |
| Synthetic field | Value and name provided by Unity. They are mapped to a value in SP with some special treatment |

All SP site columns (`Custom` and `System` columns) could be retrieved at url: `https://<RootUrl>/<BaseSitePath>/_api/web/Fields`.
Use `EntityPropertyName` to map site column to Unity property in configuration. 

|**Note**: Different sites can have different set of custom columns and even different data types for same column name - map them to different Unity properties or setup another SP data provider to resolve conflicts.

Unity SP data provider supports path value mapping for SP `lookup` columns. SP `lookup` column is a column referencing
another item in the same or different list in the SP. `Lookup` column stored as int32 identifier.

Use path mapping to present a `lookup` column as a human friendly value as below:

```xml
<Mapping external="Modifier" internal="Editor/Title"/>
```

Version item `lookup` column should be mapped as `<EntityPropertyName>/LookupValue` like below:

```xml
<Mapping external="versionModifier" internal="Editor/LookupValue"/>
```

Good to know `System` columns are listed in a table below:

| System column        | Description                            |
|:---------------------|:---------------------------------------|
| FileRef              | A string column defines file path relative to the RootUrl.  |
| FileDirRef           | A string column defines parent folder path for specific item relative to the RootUrl.  |
| FileLeafRef          | A string column defines item file name (with extension) or folder name. |
| Author               | A lookup column references site user created an item. Use `Author/Title` for document path mapping and `Author/LookupValue` for version mapping. |
| Editor               | A lookup column references site user last modified an item. Use `Editor/Title` for document path mapping and `Author/LookupValue` for version mapping. |
| Modified             | A date value an item was modified. |
| Created              | A date value an item was created. |

`Synthetic` fields (names started with dollar sign) provided by Unity are listed in a table below:

| Synthetic field        | Description                          |
|:---------------------|:---------------------------------------|
| $SpId                | A string uniquely identify SP item. Calculated as `s_<SiteId>_w_<WebId>_l_<ListId>_i_<ItemId>`.  |
| $MimeType            | A string that map file extension stored in SP to document content mime type.  |
| $DisplayPath         | A string that reconstruct FileRef column for documents and folders to match a folder view path. |
| $BaseName            | A file name without extension mapped to `FileLeafRef`. Supports updates and search with `startWith` operator. |
| $IsVersioningEnabled | Evaluated to true for document if versioning is enabled for the SP list. |
| $IsReserved          | Evaluated to true if document checked out or false otherwise. |
| $ResourceType        | Returns content type (document class) name. |
| $VersionSize         | A content size for a document version. |
| $VersionComment      | A comment set by user when document version checked in. |

Sample property name mapping:

```xml
            <PropertyNameMapper>
                <Mapping external="Id" internal="$SpId"/>
                <Mapping external="VersionSeriesId" internal="$SpId"/>
                <!-- ParentId is a synthetic property calculated on File/Properties/vti_x005f_parentid -->
                <Mapping external="VersionLabel" internal="OData__UIVersionString"/>
                <!-- label for versions -->
                <Mapping external="VersionLabel" internal="VersionLabel"/>
                <Mapping external="DateCreated" internal="Created"/>
                <Mapping external="ContentSize" internal="FileSizeDisplay"/>

                <!-- it's actually an extension like: docx, zip, txt etc. SP do not store mime types -->
                <Mapping external="FileType" internal="File_x0020_Type"/>

                <!-- Synthetic field calculated from File_x0020_Type -->
                <Mapping external="MimeType" internal="$MimeType"/>
                <Mapping external="MimeTypeVersions" internal="$MimeType"/>
                <Mapping external="DateLastModified" internal="Modified"/>
                <Mapping external="DateLastModifiedVersions" internal="Modified"/>

                <Mapping external="PathName" internal="FileRef"/>

                <Mapping external="DocumentTitle" internal="$BaseName"/>
                <Mapping external="FolderName" internal="$BaseName"/>

                <!-- 1 - Folder, 0 - File -->
                <Mapping external="FSObjType" internal="FSObjType"/>
                <Mapping external="LastModifier" internal="Editor/Title"/>  
                <Mapping external="LastModifierVersions" internal="Editor/LookupValue"/>
            </PropertyNameMapper>
```

### TopologyFilter

Topology filter is a code component used to filter out sites and libraries in SP topology. 

```java
public interface TopologyFilter {
    boolean accept(String baseUrl, SpNode node, Graph<SpNode> graph);
}
```

Two filters provided OOTB: 

- AllSites - the base site, subsites and their libraries are visible. That is a default filter.
- RootLibraries - the base site and its document libraries are visible. 

Projects could implement custom filters and use its component name in configuration as below:
```xml
<TopologyFilter>u4spFilter</TopologyFilter>
```

```java

@Component("u4spFilter")
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class U4SpTopologyFilter implements TopologyFilter {
    
 private static final Set<String> EXCLUDED_SITES = new HashSet<>(Arrays.asList(
         "/sites/pwa2"));
 
 @Override
 public boolean accept(String baseUrl, SpNode spNode, Graph<SpNode> graph) {
  if (spNode instanceof SpList && !TopologyFilter.isLibrary(spNode)) {
   return false;
  }
  if (spNode instanceof SpSite) {
   return !EXCLUDED_SITES.contains(spNode.getRelativePath());
  }
  return true;
 }

}

```

## [SharePoint selectors](../tags-list/selectors-tag/sharepoint-selectors.md)

## SharePoint specific actions configuration options

### Unity ExtJS actions

[Add document action](../../../unity-extjs/configuration/actions/add-document.md#sharepoint-data-provider)

### Unity React actions

[Create document action](../../../unity-react/configuration/actions/create-document.md#sharepoint-data-provider)
        
## Enterprise Search integration

Enterprise Search properties mapping maps Enterprise Search ids to SharePoint connector IDs. For example: 
   
```xml
<RepositoryDataProvider ID="uie_repository"
                      	class="com.vegaecm.vu.providers.uie.hli.Provider">
     ...
     <ViewerProperties>
          <Repository internal="SharePoint">
             <DefineProperties>
                 <Property ID="repositoryType" value="sharepoint_repository"/>
                 <Property ID="documentId.Id" value="{This.$id@s}"/>
             </DefineProperties>
         </Repository>
     </ViewerProperties>
     ...
</RepositoryDataProvider>
```
### Enterprise index synchronization and security filtering

Unity could be configured to show documents from enterprise index in search results and folder view.
Enable [Enterprise Search security filtering](enterprise-search.md#security-filtering-mode) in [Enterprise Search Data Provider](enterprise-search.md) to leverage native SP security for search results.

Add `UieSync` section to force enterprise search results be in sync with Unity document and folder operations (create, update, delete etc):

```xml
    <UieSync>
        <Url>${searchSync.url}</Url>
        <Username>${searchSync.username}</Username>
        <Password>${searchSync.password}</Password>
    </UieSync>
```

Set up Enterprise search agent sync endpoint `searchSync.url` as: 

`http://<searcherHost>:<searcherPort>/services/push/<agentId>/<repoId>/<pluginId>`

Where:

| Parameter            | Description                            |
|:---------------------|:---------------------------------------|
| searcherHost | a host name where an Enterprise search crawl agent services deployed |
| searcherPort | a port for the  Enterprise search crawl agent service |
| agentId      | id in the configuration of Enterprise search Crawl Agent configured for that SP root url |
| repoId       | id of Repository in the configuration of Enterprise search crawl agent configured for that SP root url |
| pluginId     | id of RepositoryPlugin in the configuration of Enterprise search crawl agent configured for that SP root url |

Set up Enterprise search service user credentials in `searchSync.username` and `searchSync.password`.

Consult [Enterprise Search Configuration](../../../enterprise-search/configuration/configure-enterprise-search-for-use.md)
documentation for details on Enterprise Search configuration file structure and options.

## Case links
*Content to be added* 

# References
Visit [References](sharepoint/references.md) page.