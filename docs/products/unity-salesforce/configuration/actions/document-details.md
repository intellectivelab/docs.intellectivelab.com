---
title: Document Details Action Configuration
layout: docs
category: Unity 7
---
[Document Details feature description](../../features/document-management/document-details)

For `Document details` action following section should be added to the Unity System XML file:

```xml
<Action ID="edit" multiselect="true" scope="single" type="toolbar">
  <Name>Edit</Name>
  <IconCls>action-edit</IconCls>
  <Tooltip>Edit Properties</Tooltip>
  <Uri/>
  <Parameters/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>edit</ActionType>
    <!-- not relevant nodes skipped -->
  </CustomParameters>
  <Security/>
  <!-- not relevant nodes skipped -->
</Action>
```

`Document details` action custom configuration parameters:

| Parameter   | Description | Value |
|:------------|:------------|:------|
|ResourceName | | documents   |
|ActionType   | | edit        |
|Scope        | Optional. The repository data provider id. Default value: `inherit` (it means that this parameter will be inherited from `Search Template` or `Grid` component) | single |

It's required to [specify View](../tags-list/views-tag) in solution configuration file.

Example of `Views` configuration for `Document Details` action with Details tab and Versions tab:

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

The FieldSet should contain a list of properties that will be displayed in the document creation dialog.

Example of `FieldSet` configuration for `Document Details` action:

```xml
<FieldSet ID="Document_Update">
	<Field ID="DocumentTitle" Label="Document Title" Required="true" Row="1" Column="1" Favourite = "true"/>
</FieldSet>
```


Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps).