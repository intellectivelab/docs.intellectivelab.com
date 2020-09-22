---
title: Unity Features - Sharepoint Connector
layout: docs
category: Unity 7
---

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

# Environment setup
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
   
# Unity features configuration specific to Sharepoint connector
    
## SharePoint repository data provider
  Sharepoint repository data provider supports all sections common to Unity data providers - mapping:   
 ```$xml
<RepositoryDataProvider ID="sptest_site" class="com.vegaecm.vspace.providers.sharepoint.SharepointRepositoryDataProvider">
   .... skipped ...
            <Site>sites/foo</Site>
   .... skipped ...
 ```
  
- Site (optional) - Sharepoint Site relative to datasource RootUrl. By default, root site is used.
  
**Note:** Internal Field Names used in provider field mapping are InternalName for SharePoint list items. 
  All available fields for particular list could be retrieved by following REST API call: `https://<RootUrl>/_api/lists/getbytitle('<ListTitle>')/Fields`, for example:`https://vkozyr.sharepoint.com/_api/lists/getbytitle('Documents')/Fields`
  
## Document class (Document Library Content Type) selector

```$xslt
 <Selector ID="sharepoint_document_class_add_document_auto">
            <ClassName>com.vegaecm.vspace.selectors.SharepointDocumentClassSelector</ClassName>
            <Description/>
            <Property ID="DataProviderId" value="sharepoint_repository"/>
            <Property ID="RefreshTimeoutSec" value="86400"/>
            <!-- associate selector with sharepoint list-->
            <Property ID="DefaultList" value="Documents"/>
 </Selector>
```
- DefaultList - Sharepoint List Title used to select document content types

## Lookup Selector 
```$xml
<Selector ID="sharepoint_custom_link">
            <ClassName>com.vegaecm.vspace.selectors.SharepointLookupSelector</ClassName>
            <Description/>
            <Property ID="DataProviderId" value="sharepoint_repository"/>
            <Property ID="RefreshTimeoutSec" value="86400"/>
            <!-- associate selector with sharepoint list-->
            <Property ID="DefaultList" value="Documents"/>
            <Property ID="TitleField" value="BaseName"/>
</Selector>
```
- DefaultList - Sharepoint List Title used to select items
- TitleField - List Item field displayed in the selector. List Item ID field always used as selector value.

## Add document action 
```$xml
<Action ID="add_document" multiselect="true" scope="single" type="toolbar">
            <Name>Add Document</Name>
            <IconCls>action-add-document</IconCls>
            <Tooltip>Add Document</Tooltip>
            <Uri/>
            <Parameters>
                <DocumentClass>
                    <RepositoryDataProvider ID="sharepoint_repository">
                        <Disabled>true</Disabled>
                        <DefaultValue>{value: "Document", name: "Document"}</DefaultValue>
                        <SelectorId>sharepoint_document_class_add_document_auto</SelectorId>
                        <Roles>
                            <Role ID="canAddDocument">
                                <Disabled>false</Disabled>
                                <DefaultValue>{value:"Documents\Document", name: "Document"}
                                </DefaultValue>
                                <SelectorId>sharepoint_document_class_add_document_auto</SelectorId>
                            </Role>
                        </Roles>
                    </RepositoryDataProvider>
                </DocumentClass>
            </Parameters>
            <CustomParameters>
                <RepositoryDataProvider ID="sharepoint_repository">
                    <FolderPicker>
                        <Visible>true</Visible>
                        <TreeModel name="SharePointFoldersTreeWithRoot">
                            <Properties>
                                <Property ID="FolderPath" value="/Shared Documents"/>
                                <Property ID="DataProviderId" value="sharepoint_repository"/>
                                <Property ID="LazyLoading" value="true"/>
                            </Properties>
                        </TreeModel>
                    </FolderPicker>
                    <Fields>
                        <DocumentTitle>DocumentTitle</DocumentTitle>
                    </Fields>
                </RepositoryDataProvider>
            </CustomParameters>
            <Security>
                <AllowRole>canAddDocument</AllowRole>
            </Security>
        </Action>
```
 
 - DefaultValue - Identify default content type using format `<ListTitle>/<ContentTypeId>` ```{value:"Documents\Document", name: "Document"}```.
  All available content types for a list could be get from API call: `https://<RootUrl>/_api/lists/getbytitle('<ListTitle>')/ContentTypes?$select=Name,Id`
        
## UIE integration
UIE properties mapping maps UIE ids to sharepoint connector ids. For example:    
```$xml
            <ViewerProperties>
                 <Repository internal="SharePoint">
                    <DefineProperties>
                        <Property ID="repositoryType" value="sharepoint_repository"/>
                        <Property ID="documentId.Id" value="{This.$id@s}@{This.VersionLabel}"/>
                        <Property ID="documentId.versionSeriesId" value="{This.$id@s}"/>
                    </DefineProperties>
                </Repository>
            </ViewerProperties>

            <RepositoryMapper>
                 <Mapping external="SharePoint" internal="sharepoint_repository">
                    <DefineProperties>
                        <Property ID="Id" value="{This.$id}@{OData__UIVersionString}"/>
                        <Property ID="versionSeriesId" value="{This.$id}"/>
                        <Property ID="pid" value="{This.collection_name}/{This.ID}"/>
                    </DefineProperties>
                </Mapping>
            </RepositoryMapper>
```
## Case links
*Content to be added* 

# References
Visit [References](sharepoint/references.md) page