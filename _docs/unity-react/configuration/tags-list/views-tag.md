---
title: Action View Configuration
layout: docs
category: Unity 7
---
# Documents

## Document actions with view

- [Create document](../actions/create-document.md)
- [Document details](../actions/document-details.md)
- [Check In document](../actions/checkin-document.md)
- [Attach document](../actions/attach-document.md)

## Tabs section configuration for document actions

To create a view for document action, following tag should be added to solution configuration file:

```xml
<Tabs DocumentType="Documents\Document" Scope="sharepoint_repository_testteamsite" EnableSaveButton="true" EnableCloseButton="true">
  <!-- list of particular tabs -->
</Tabs>
```

`Tabs` tag should be placed inside one of following sections:

| Section                            | Action types |
|:-----------------------------------|:-------------|
| `Views` -> `Documents`             | checkin      |
| `Views` -> `Documents` -> `Create` | create       |
| `Views` -> `Documents` -> `Open`   | view         |

Tabs section attributes:

| Attribute    | Description |
|:-------------|:------------|
| DocumentType | The name of concrete resource type view is created for, DocumentType should match ResourceType defined in the action |
| Scope        | Optional. The repository data provider id. No need to specify this parameter if DocumentType belongs to one data provider |
| ViewType     | This parameter is required for `checkin` action and should match action's ViewType value |

Tabs section may contain one or more `Tab` tags.

For example:

```xml
<Views>
	<Documents>
		<Open>
			<Tabs DocumentType="Document" EnableSaveButton="true" EnableCloseButton="true">
				<Tab ID="1" Type="Details" Label="Document Properties" Tooltip="Document Properties" FieldSet="Document_Update">
						<Tools/>
						<CustomParameters>
							/* The set of Unity actions linked to this tab */
							<Parameter Name="actionSet" Value="download,checkOut,checkIn,cancelCheckOut,delete,preview"/>
						</CustomParameters>
                </Tab>
				<Tab ID="2" Label="Versions" Tooltip="Document Versions" Type="Versions">
                	<CustomParameters>
                        <Parameter Name="actionSet" Value="download,checkOut,checkIn,cancelCheckOut,delete"/>
                        <Parameter Value="searchTemplate" Name="viewMode"/>
                        <Parameter Value="document_versions-templates-set" Name="templateSet"/>
                        <Parameter Value="getinfo-versions-grid" Name="gridId"/>
                    </CustomParameters>
					<Tools/>
            	</Tab>
        	</Tabs>
		</Open>
	</Documents>
</Views>
```
 
### Properties tab

Example of `Properties` tab configuration:

```xml
<Tab ID="1" Type="Details" Label="Document Properties" Tooltip="Document Properties" FieldSet="Document_Create_testteamsite">
  <Tools/>
</Tab>
```

This tab is supported for all document actions listed in [Document actions with view](#document-actions-with-view). Available attributes are in the table below:

| Attribute | Description         |
|:----------|:--------------------|
| Type      | `Details` (tab type)|
| ID        | Tab identifier      |
| Label     | Tab label           |
| FieldSet  | Fieldset identifier |

For `view` action it's possible to [add a toolbar with other actions](./views-tag/tab-action-set.md) on `Property` tab. 

See [FieldSets tag](./fieldsets-tag.md) for information on field sets configuration.

### Versions tab

Example of `Versions` tab configuration.

```xml
<Tab ID="2" Label="Versions" Tooltip="Document Versions" Type="Versions">
  <CustomParameters>
    <Parameter Value="searchTemplate" Name="viewMode"/>
    <Parameter Value="document_versions_testteamsite-templates-set" Name="templateSet"/>
    <Parameter Value="testteamsite-getinfo-versions-grid" Name="gridId"/>
  </CustomParameters>
  <Tools/>
</Tab>
```

This tab is supported for `View` action only. Available attributes are in the table below:

| Attribute | Description         |
|:----------|:--------------------|
| Type      | `Versions` (tab type)|
| ID        | Tab identifier      |
| Label     | Tab label           |

Custom parameters section should contain following parameters:

| Parameter name | Description         |
|:---------------|:--------------------|
| viewMode       | `searchTemplate`    |
| templateSet    | id of template set, that contains 1 search template defined in [Document Versions Search Template](../search-templates/document-versions.md) |
| gridId         | Grid id |


# Cases

## Case actions with view

- [Create case](../actions/create-case.md)
- [Split case](../actions/split-case.md)
- [Case details](../actions/case-details.md)
- [Copy case](../actions/copy-case.md)
- *actions to be added*

## Tabs section configuration for case actions

To create a view for case action, following tag should be added to solution configuration file:

```xml
<Tabs CaseType="CC_Complaint">
  <!-- list of particular tabs -->
</Tabs>
```

`Tabs` tag should be placed inside one of following sections:

| Section                            | Action types |
|:-----------------------------------|:-------------|
| `Views` -> `Cases` -> `Create` | create<sup>1</sup>       |
| `Views` -> `Cases` -> `Active` | view<sup>2</sup>, create<sup>3</sup> |
| `Views` -> `Cases` -> `Closed` | view<sup>4</sup>         |
| `Views` -> `Cases`             | *to be added*|

<sup>1</sup> `Fill in properties` step of `Create` case action uses configuration of `Tab`  
`Views` -> `Cases` -> `Create` -> `Tabs[CaseType="{CaseType}"]` -> `Tab[Type="Details"]`

<sup>2</sup> View for non-closed cases

<sup>3</sup> `Preview case` step of `Create` case action uses configuration of `Tab`   
`Views` -> `Cases` -> `Active` -> `Tabs[CaseType="{CaseType}"]` -> `Tab[Type="Details"]` 

`Attach documents` step of `Create` case action loads all the `Attachments` tabs configured inside 
`Views` -> `Cases` -> `Active` for a particular case type

<sup>4</sup> View for closed cases
 
Tabs section attributes:

| Attribute    | Description |
|:-------------|:------------|
| CaseType     | The name of concrete resource type view is created for, CaseType should match ResourceType defined in the action |
| ViewType     | This parameter is required for actions with specified ViewType value, e.g. `Copy Case` |

Tabs section may contain one or more `Tab` tags.

For example:

```xml
<Views>
	<Cases>
		<Active>
			<Tabs CaseType="CC_Complaint" EnableSaveButton="true" EnableCloseButton="true">
				<Tab ID="1" Type="Details" Label="Properties" Tooltip="Properties" FieldSet="CaseReview">
					<Tools>
					</Tools> 
				</Tab>
				<Tab ID="Attachments.FileNet" Type="Attachments" Label="FileNet Documents" Tooltip="FileNet Documents">
					<CustomParameters>
						<Parameter Name="viewMode" Value="searchTemplate"/>
						<Parameter Name="templateSet" Value="search_templates_case_docs_p8"/>
						<Parameter Name="gridId" Value="UCM_Case_Docs_Search_FileNet"/>
						</CustomParameters>
					<Tools/>
				</Tab>
				<Tab ID="Attachments.CMIS" Type="Attachments" Label="CMIS Documents" Tooltip="CMIS Documents">
					<CustomParameters>
						<Parameter Name="viewMode" Value="searchTemplate"/>
						<Parameter Name="templateSet" Value="search-templates-case-docs-icm-ucm-cmis"/>
						<Parameter Name="gridId" Value="UCM_Case_Docs_Search_CMIS"/>
					</CustomParameters>
					<Tools/>
				</Tab>
				<Tab ID="3" Type="History" Label="History/Comments" Tooltip="History and Comments">
					<CustomParameters>
						<Parameter Name="viewMode" Value="searchTemplate"/>
						<Parameter Name="templateSet" Value="case_history_search"/>
						<Parameter Name="gridId" Value="UCM_CaseHistory_Search"/>
					</CustomParameters>
					<Tools/>
				</Tab>                                                  
			</Tabs>   
		</Active>
	</Cases>
</Views>
```

### Properties tab

Example of `Properties` tab configuration:

```xml
<Tab ID="1" Type="Details" Label="Properties" Tooltip="Properties" FieldSet="CaseReview">
  <Tools/>
</Tab>
```

This tab is supported for all case actions listed in [Case actions with view](#case-actions-with-view). 
Available attributes are in the table below:

| Attribute | Description         |
|:----------|:--------------------|
| Type      | `Details` (tab type)|
| ID        | Tab identifier      |
| Label     | Tab label           |
| FieldSet  | Fieldset identifier |

For `view` action it's possible to [add a toolbar with other actions](./views-tag/tab-action-set.md) on `Property` tab. 

See [FieldSets tag](./fieldsets-tag.md) for information on field sets configuration.

### Attachments tab

Example of attachments tab configuration:

```xml
<Tab ID="Attachments.FileNet" Type="Attachments" Label="FileNet Documents" Tooltip="FileNet Documents">
  <CustomParameters>
    <Parameter Name="viewMode" Value="searchTemplate"/>
    <Parameter Name="templateSet" Value="search_templates_case_docs_p8"/>
    <Parameter Name="gridId" Value="UCM_Case_Docs_Search_FileNet"/>
  </CustomParameters>
  <!-- not relevant nodes are skipped -->
</Tab>
```

Tabs of type `Attachments` should be placed in following sections:

- `Views` -> `Cases` -> `Active` -> `Tabs` (for particular case types for opened cases)
- `Views` -> `Cases` -> `Closed` -> `Tabs` (for particular case types for closed cases)

Tab tag attributes:

| Attribute | Description         |
|:----------|:--------------------|
| Type      | `Attachments` (tab type)|
| ID        | Tab identifier, starts with `Attachments.` prefix |
| Label     | Tab label           |

Available custom parameters:

| Parameter name | Description         |
|:---------------|:--------------------|
| viewMode       | `searchTemplate` (search template)|
| templateSet    | Template set identifier without `-template-set` suffix |
| gridId         | Grid identifier |

# Work Items

*content to be added*

# Folders

## Folder actions with view

- [Create folder](../actions/create-folder.md)

## Tabs section configuration for folder actions

To create a view for folder action, following tag should be added to solution configuration file:

```xml
<Tabs FolderType="*" EnableSaveButton="true" EnableCloseButton="true">
  <!-- list of particular tabs -->
</Tabs>
```

`Tabs` tag should be placed inside the following section:

| Section                            | Action types |
|:-----------------------------------|:-------------|
| `Views` -> `Folders` -> `Create`   | create       |

Tabs section attributes:

| Attribute    | Description |
|:-------------|:------------|
| FolderType   | The name of concrete resource type view is created for |
| Scope        | Optional. The repository data provider id. No need to specify this parameter if FolderType belongs to one data provider |

In general Tabs section may contain one or more `Tab` tags, but for `Folder` resource it most likely will contain only `Details` tab.  

For example:

```xml
<Views>
    <Folders>
        <Create>
            <Tabs FolderType="*" EnableSaveButton="true" EnableCloseButton="true">
                <Tab ID="1" Type="Details" Label="Default Folder Properties" Tooltip="Default Folder Properties" FieldSet="Folder_Create">
                    <Tools/>
                </Tab>
            </Tabs>
        </Create>
    </Folders>
</Views>
```

### Properties tab

Example of `Properties` tab configuration:

```xml
<Tab ID="1" Type="Details" Label="Default Folder Properties" Tooltip="Default Folder Properties" FieldSet="Folder_Create">
    <Tools/>
</Tab>
```

| Attribute | Description         |
|:----------|:--------------------|
| Type      | `Details` (tab type)|
| ID        | Tab identifier      |
| Label     | Tab label           |
| FieldSet  | Fieldset identifier |


See [FieldSets tag](./fieldsets-tag.md) for information on field sets configuration.
