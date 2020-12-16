---
title: System Properties Configuration
layout: docs
category: Unity 7
---
# Separate Daeja Viewer Windows Configuration

[View Document feature description](../features/document-management/view-document.md)

Separate Daeja viewer windows mode allows viewing multiple documents in separate windows.  

To enable this mode add the following properties:

```xml
<SystemProperties>
    <Property ID="documentviewer.separatewindows.enabled" value="true"/>
    <Property ID="documentviewer.separatewindows.maxopen" value="2"/>
</SystemProperties>
```
where `documentviewer.separatewindows.maxopen` is the maximum number of open viewer windows at a time.  
Only this number of documents will be opened simultaneously even if user selected more documents to view.  
There is no maximum limit for this field.  
