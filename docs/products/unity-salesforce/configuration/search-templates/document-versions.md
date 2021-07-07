---
title: Document Versions Search Template Configuration
layout: docs
category: Unity 7
---
Example of configuration:

```xml
<TemplateSet ID="document_versions-templates-set">
	<Template>document_versions_Search</Template>
</TemplateSet>
```

```xml
<SearchTemplate ID="document_versions_Search">
	<DataProviderId>ce_repository</DataProviderId>
	<Description>DiffProperties title</Description>
	<Comment>Enter search criteria</Comment>
	<Autoexecute>false</Autoexecute>
	<Hidden>true</Hidden>
	<Security>
		<AllowRole>Unity Users</AllowRole>
	</Security>
	<Operation dataProviderId="ce_repository" type="search">
		<OperationProperties>
			<Property ID="ResourceName" value="documents"/>
			<Property ID="objectStore" type="FIRST">
				<SecuredValue>
					<Value>SODemo</Value>
				</SecuredValue>
			</Property>
		</OperationProperties>
	</Operation>
	<SortFields/>
	<Grid ID="getinfo-versions-grid"/>
	<Criteria/>
</SearchTemplate>
```

Document versions search template operation properties: 

| Parameter   | Description |
|:------------|:------------|
|ResourceName |`documents`|
