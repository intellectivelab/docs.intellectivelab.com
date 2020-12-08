---
title: Database Data Provider Configuration 
layout: docs
category: Unity 7
---

Repository data provider should specify mapping for all columns from select clause (if external and internal names 
don't match):

```xml
    <RepositoryDataProvider ID="db_repository" class="com.vegaecm.vspace.providers.db.DBRepositoryDataProvider">
      <!-- not relevant nodes skipped -->
      <Datasource>db2_sodemo</Datasource>
      <PropertyNameMapper>
        <Mapping external="Id" internal="OBJECT_ID"/>
        <Mapping external="DocumentTitle" internal="U1708_DOCUMENTTITLE"/>
        <Mapping external="MimeType" internal="MIME_TYPE"/>
        <Mapping external="DateCreated" internal="CREATE_DATE"/>
        <Mapping external="DateLastModified" internal="MODIFY_DATE"/>
        <Mapping external="LastModifier" internal="MODIFY_USER"/>
        <Mapping external="IsReserved" internal="IS_RESERVED_DOC"/>
        <Mapping external="IsCurrentVersion" internal="IS_CURRENT_DOC"/>
        <Mapping external="ContentSize" internal="CONTENT_SIZE"/>
        <Mapping external="MajorVersionNumber" internal="MAJOR_VERSION_NUMBER"/>
        <Mapping external="MinorVersionNumber" internal="MINOR_VERSION_NUMBER"/>
        <Mapping external="IsVersioningEnabled" internal="VERSIONING_ENABLED"/>
        <Mapping external="VersionStatus" internal="VERSION_STATUS"/>
      </PropertyNameMapper>
    </RepositoryDataProvider>
```



