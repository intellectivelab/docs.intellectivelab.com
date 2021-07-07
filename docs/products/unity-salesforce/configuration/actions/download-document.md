---
title: Download Document Action Configuration
layout: docs
category: Unity 7
---
For `Download document` action following section should be added to the Unity System XML file:

```xml
<Action ID="download" multiselect="false" scope="single" type="toolbar">
	<Name>Download</Name>
	<IconCls>action-download</IconCls>
	<Tooltip>Download Selected Document(s)</Tooltip>
	<Uri/>
	<CustomParameters>
		<ActionType>download</ActionType>
		<MaxBulkContentSize>26214400</MaxBulkContentSize>
		<FileNameTemplates>
		<Template>{This.DocumentTitle}</Template>
		<Template>{This.VersionSeriesId}</Template>
		</FileNameTemplates>
		<MimeColumnPropertyName>MimeType</MimeColumnPropertyName>
		<EnableRule skipOnMissingProperty="false">(#VersionStatus==null or #VersionStatus!=3) and (#can_view_content==true)</EnableRule>
	</CustomParameters>
	<Security>
		<AllowRole>canDownload</AllowRole>
	</Security>
</Action>
```

| Parameter   | Description | Value   |
|:------------|:------------|:--------|
|ActionType   | Indicates a download action will be performed| download |
|Uri        | should be empty | |

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps).