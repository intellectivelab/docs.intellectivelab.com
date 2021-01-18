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

- Document class selector for SharePoint depends on Library. To work properly `IsFolderRelatedDocClass` tag must be set to `true` in custom parameters:
 
    ```xml
    <IsFolderRelatedDocClass>true</IsFolderRelatedDocClass>
    ```

- Document class in Sharepoint data provider is a SP List ContentType. Default value for document class must be specified in the form: `ListTitle\ContentTypeName`

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
    
    - Template expression replacement for FolderPath supported for case attachments from SharePoint in a form: 
              
       |Template expression|Replaced with|
       |:------------------|:------------|       
       |{Source.CaseObjectId}| case object id|   
       |{Source.CaseId} | case id|
       
       Example:
       ```
          <Property ID="FolderPath" value="/Shared Documents/UCMLinks/{Source.CaseObjectId}"/>       
       ```
                  
       - Single level template supported 
       - Target folder created if does not exist 
       - The created folder inherits permission from the parent folder  
       - To add a document to a case user must have proper rights to create a folder 
        
       *Note!* To make template replacement working for the Case Folder View tab TargetFolder  must be configured at the DocumentSource level as below:        
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
    
Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).  