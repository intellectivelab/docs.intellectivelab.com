---
title: View Document Action Configuration
layout: docs
category: Unity 7
---
Following action can be added to Unity system configuration file:

```xml
<Action ID="view" multiselect="true" scope="single" type="toolbar">
            <Name>View</Name>
            <IconCls>action-view</IconCls>
            <Tooltip>View Selected Document(s)</Tooltip>
            <Uri/>
            <Parameters>
                <TitlePattern>{This.DocumentTitle}</TitlePattern>
                <TooltipPattern>{This.MimeType}</TooltipPattern>
                <ViewerMimeTypes>
                    <ViewerMimeType>*</ViewerMimeType>
                </ViewerMimeTypes>
                <InlineMimeTypes>
                    <InlineMimeType>application/pdf</InlineMimeType>
                    <InlineMimeType>application/octet-stream</InlineMimeType>
                    <InlineMimeType>text/html</InlineMimeType>
                    <InlineMimeType>text/plain</InlineMimeType>
                    <InlineMimeType>text/xml</InlineMimeType>
                    <InlineMimeType>image/jpeg</InlineMimeType>
                    <InlineMimeType>image/gif</InlineMimeType>
                    <InlineMimeType>image/bmp</InlineMimeType>
                    <InlineMimeType>image/png</InlineMimeType>
                </InlineMimeTypes>
                <CryptoKey>your_key</CryptoKey>
            </Parameters>
            <CustomParameters>
                <CheckExistence>true</CheckExistence>
                <EnableRule skipOnMissingProperty="false">(#VersionStatus==null or #VersionStatus!=3)</EnableRule>

            </CustomParameters>
            <Security>
                <AllowRole>canView</AllowRole>
            </Security>
        </Action>
```
View action custom parameters:

| Parameter       | Description |
|:----------------|:------------|
|CheckExistence   | Once `CheckExistence` in `CustomParameters` section is set to `true` then `'permissions/check'` roundtrip to server will be performed before the actual action.|
|EnableRule       | Checks document properties values corresponding to SPEL condition. If true then menu item is supposed to be enabled.|

# Configuration options

## How to check if user has access to view document before trying to open document in viewer

Once `CheckExistence` in `CustomParameters` section is set to `true` then `'permissions/check'` roundtrip to server will be performed before the actual action. 
It may be useful for crawled items being retrieved by the user with no rights to view it.

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 