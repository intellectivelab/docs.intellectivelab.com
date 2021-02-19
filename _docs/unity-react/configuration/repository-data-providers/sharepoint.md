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
Single Unity `<Datasource>` must be configured for SP root url. Each site must be setup as `<RepositoryDataProvider>` with relative site path defined in `<Site>site/path</Site>` tag defaults to root `/`.   

## SharePoint in Azure Cloud 
Different authentication options (flows) supported for SP in Cloud:

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
| SP Fields            | Use Field `InternalName`  in Unity configuration.          | `https://<RootUrl>/_api/lists/getbytitle('<ListTitle>')/Fields?$select=InternalName,Id'`   |
| SP Sites             | Use SharePoint admin url to find sites list.             | `https://<Tenant>-admin.sharepoint.com/`|
   
# Unity Features Configuration Specific to SharePoint Connector
    
## SharePoint repository data provider

Perform configuration steps [common to all Unity data providers](../repository-data-providers.md#common-steps-to-configure-data-provider).   
Check [Metadata Urls](#sharepoint-metadata-urls) on how to list all available fields for particular list.  

|**Note:** Internal Field Names used in provider field mapping are `InternalName`s for SharePoint list items.   

Custom properties for SharePoint data provider:    
 
| Property       | Property description              | Example        |
|:---------------|:--------------------------------|:---------------|
| Site | Each repository data provider linked to the SharePoint site. Set this property to Site relative to datasource RootUrl. Defaults to root site. See [Links above](#sharepoint-metadata-urls).  | `<Site>sites/foo</Site>` |
| SecurityNotification | Set this property to enable e-mail notification when sharing documents. Notifications are disabled by default. | `<SecurityNotification>enabled</SecurityNotification>` |
| RootFolderFilter | Filter document libraries. Uses [OData notation](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/use-odata-query-operations-in-sharepoint-rest-requests)  | `<RootFolderFilter>(Hidden eq false and IsCatalog eq false and BaseTemplate eq 101)</RootFolderFilter>` |  
  
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
## Case links
*Content to be added* 

# References
Visit [References](sharepoint/references.md) page.