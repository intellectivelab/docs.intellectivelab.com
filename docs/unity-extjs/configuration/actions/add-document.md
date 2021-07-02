---
title: Add Document Action Configuration
layout: docs
category: Unity 7
---
[Add Document feature description](../../features/document-management/add-document.md)

# Example

```xml
<Action ID="add_document" multiselect="true" scope="single" type="toolbar">
    <Name>Add Document</Name>
    <IconCls>action-add-document</IconCls>
    <Tooltip>Add Document</Tooltip>
    <Uri/>
    <Parameters>
        <DocumentClass>
            <RepositoryDataProvider ID="ce_repository">
                <Disabled>true</Disabled>
                <DefaultValue>{value: "Document", name: "Document"}</DefaultValue>
                <SelectorId>document_class_add_document</SelectorId>
                <Roles>
                    <Role ID="canAddDocument">
                        <Disabled>false</Disabled>
                        <DefaultValue>{value: "Document", name: "Document"}</DefaultValue>
                        <SelectorId>document_class_add_document_auto</SelectorId>
                    </Role>
                </Roles>
            </RepositoryDataProvider>
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
            <RepositoryDataProvider ID="sharepoint_repository_testteamsite">
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
            <RepositoryDataProvider ID="sharepoint_repository_margies-travel-inc">
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
        <ResourceName>documents</ResourceName>
        <ResourceType>Documents\Document</ResourceType>
        <ActionType>create</ActionType>
        <RepositoryDataProvider ID="ce_repository">
            <FolderPicker>
                <Visible>false</Visible>
                <TreeModel name="CEFoldersWithRoot">
                    <Properties>
                        <Property ID="FolderPath"
                                    value="/"/>
                        <Property ID="DataProviderId"
                                    value="ce_repository"/>
                        <Property ID="LazyLoading"
                                    value="true"/>
                    </Properties>
                </TreeModel>
            </FolderPicker>
            <UpdateTemplateId>update_properties_template_add_document</UpdateTemplateId>
            <Fields>
                <DocumentTitle>DocumentTitle</DocumentTitle>
            </Fields>
        </RepositoryDataProvider>
        <RepositoryDataProvider ID="sharepoint_repository">
            <IsFolderRelatedDocClass>true</IsFolderRelatedDocClass>
            <FolderPicker>
                <Visible>true</Visible>
                <TreeModel name="SharePointFoldersTreeWithRoot">
                    <Properties>
                        <Property ID="FolderPath"
                                    value="/"/>
                        <Property ID="DataProviderId"
                                    value="sharepoint_repository"/>
                        <Property ID="LazyLoading"
                                    value="true"/>
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

# Tree Model Configuration

`Add document` action supports folder selection or inherit context of selected folder when used in folder view. 
Tree model must be properly configured. 

*content to be added*

# Document Class Selector Configuration

Document class selector must be properly configured. 

*content to be added*

# Adding with Permissions

Override default dialog used for add document action with custom XType: `widget.unity-add-document-dialog` 

```xml
    <CustomParameters>
        <RepositoryDataProvider ID="sharepoint_repository">
            ... skipped ...
            <XType>widget.unity-add-document-dialog</XType>
            ... skipped ...
        </RepositoryDataProvider>
    </CustomParameters>
```

# Configuration Specific for Data Providers

## SharePoint data provider

```xml
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

- Document class selector for SharePoint depends on Library. To work properly `IsFolderRelatedDocClass` tag must be set to `true` in custom parameters:
 
    ```xml
    <IsFolderRelatedDocClass>true</IsFolderRelatedDocClass>
    ```

- Document class in Sharepoint data provider is a SP List ContentType. 

    DefaultValue - Identify default content type using format `<ListTitle>/<ContentTypeId>` ```{value:"Documents\Document", name: "Document"}```.
    
    All available content types for a list could be get from API call: `https://<RootUrl>/_api/lists/getbytitle('<ListTitle>')/ContentTypes?$select=Name,Id`

    Example:
     
    ```xml
    <DefaultValue>{value:"Documents\Document", name: "Document"}</DefaultValue>
    ```
 
- Folder path in [tree model](#tree-model-configuration) for SharePoint site data provider folders must include site path: 

    - Folder path examples for root site
    
        all document libraries:
                     
        ```xml
        <Property ID="FolderPath" value="/"/>
        ```
        specific document library:
            
        ```xml
        <Property ID="FolderPath" value="/Shared Documents"/>
        ```

    - Folder path for specific site
    
        all document libraries: 
            
        ```xml
        <Property ID="FolderPath" value="/sites/TeamSite"/>
        ```
          
        specific document library: 
          
        ```xml
         <Property ID="FolderPath" value="/sites/TeamSite/Shared Documents"/>
        ```
    
    - Template expression replacement for `FolderPath` supported for case attachments from SharePoint in a form: 
              
       |Template expression|Replaced with|
       |:------------------|:------------|       
       |{Source.CaseObjectId}| case object id|   
       |{Source.CaseId} | case id|
       
       Example:
       ```
          <Property ID="FolderPath" value="/Shared Documents/UCMLinks/{Source.CaseObjectId}"/>       
       ```
                          
       For the Case Folder View tab `TargetFolder` must be configured under `DocumentSource` level to make template replacement working:        

       ```xml
       <Action ID="ucm_add_document" multiselect="true" scope="single" type="toolbar">
        <Name>Add Document Sharepoint</Name>
            <IconCls>action-add-document</IconCls>
            <Tooltip>Add Document</Tooltip>
            <Uri/>
            <CustomParameters>
                <DocumentSources>
                    <DocumentSource ID="Sp_Documents" Title="Documents Sp">
                        <RepositoryDataProvider>sharepoint_repository</RepositoryDataProvider>
                        <AddDocumentAction>ucmAddSpDocument</AddDocumentAction>
                        <AttachDocumentAction>ucmAttachSpDocument</AttachDocumentAction>
                        <DocumentTabId>20</DocumentTabId>
                        <TargetFolder>/Shared Documents/UCMLinks/{Source.CaseObjectId}</TargetFolder>
                    </DocumentSource>
                </DocumentSources>
            </CustomParameters>
        </Action>
       ```    
       - Single level template supported 
       - Target folder created if does not exist 
       - The created folder inherits permission from the parent folder  
       - To add a document to a case user must have proper rights to create a folder 
    
Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).  

## IBM FileNet Content Engine data provider

*content to be added*

### Document entry templates

|**Note**: The support of the [Document Entry Templates](https://www.ibm.com/support/knowledgecenter/SSNW2F_5.5.0/com.ibm.p8.sysoverview.doc/p8sov011.htm) has been added since Unity version 7.8.0

The following configuration steps should be executed to enable the Document entry templates in Unity standard  `Add document` dialog:
 - configure CE document entry template selector that will be used to select the specific entry template in `Add document` dialog
 - use CE document entry selector in `add_document` action configuration

#### Configure CE document entry template selector

Create the [CE document selector](../../../unity-react/configuration/tags-list/selectors-tag/ce-selectors.md#ce-document-selector) that will be used to select the document entry template.

For example:
```xml
        <Selector ID="ce0_SODemo_docs_templates">
            <ClassName>com.vegaecm.vspace.selectors.CeDocumentSelector</ClassName>
            <Description/>
            <Property ID="Datasource" value="ce_0"/>
            <Property ID="ObjectStore" value="SODemo"/>
            <Property ID="RefreshTimeoutSec" value="86400"/>

            <Property ID="NameField" value="name"/>
            <Property ID="ValueField" value="value"/>
            <Property ID="NameFormat" value="$name$ ($description$)"/>
            
            <Property ID="Sql" value="SELECT Id AS value, DocumentTitle AS name, EntryTemplateDescription AS description FROM EntryTemplate ORDER BY DocumentTitle ASC"/>
        </Selector>
```

#### Use CE document entry template selector

Add `DocumentTemplateSelector` parameter to `add_document` action configuration in `CustomParameters` > `RepositoryDataProvider` section. 
Use just created CE document entry template selector's ID for the value.

For example:
```xml
        <Action ID="add_document" multiselect="true" scope="single" type="toolbar">
            <Name>Add Document</Name>
            <IconCls>action-add-document</IconCls>
            <Tooltip>Add Document</Tooltip>
            <Uri/>
            <Parameters>
                <DocumentClass>
                    <RepositoryDataProvider ID="ce_repository:SODemo">
                      ...
                    </RepositoryDataProvider>
                </DocumentClass>
            </Parameters>
            <CustomParameters>
                <RepositoryDataProvider ID="ce_repository">
                    <XType>widget.unity-add-document-dialog</XType>
                    <FolderPicker>
                    ...
                    </FolderPicker>
                    ...
                    <!-- Use CE document entry template selector -->
                    <DocumentTemplateSelector>ce0_SODemo_docs_templates</DocumentTemplateSelector>
                    <!-- END : Use CE document entry template selector -->
                    ...
                </RepositoryDataProvider>
            </CustomParameters>
            ...
        </Action>
```

|**Note**: The entry templates should be enabled at the target repository: [Enabling entry template management on your repositories](https://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco099.htm).

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).

*content to be added*
