---
title: Solutions Configuration
layout: docs
category: Unity 7
---
# UCM/Enterprise Search communication

The following configuration parameters should be added to the Unity configuration file to support UCM/Enterprise Search communication:

```xml
<SolutionsConfiguration>
        <UcmUieClientConfiguration>
            <HliServiceUrl><HLI_SERVICE_URL></HliServiceUrl>
            <IndexGroup><INDEX_GROUP></IndexGroup>
            <DocumentLinkClass>Link</DocumentLinkClass>
            <LinkRepositoryId>UCM</LinkRepositoryId>
            <LinkRepositoryType>UCMLinks</LinkRepositoryType>
            <FieldCaseId>case_id@s</FieldCaseId>
            <FieldCaseSubFolderId>case_sub_folder_id@s</FieldCaseSubFolderId>
            <FieldDocumentId>document_id@s</FieldDocumentId>
        </UcmUieClientConfiguration>
</SolutionsConfiguration>
```




