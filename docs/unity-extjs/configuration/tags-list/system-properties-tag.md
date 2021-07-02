---
title: SystemProperties Tag Configuration
layout: docs
category: Unity 7
---
System properties are the main properties used throughout the application.

Example of configuration:

```xml
<SystemProperties>
  <Property ID="role.mode" value="RoleSelection"/>
  <!-- other properties -->
</SystemProperties>
```

| Property ID | Description |
|:--------------|:------------|
|`role.mode` | `RoleSelection` - provides ability for user to change the role <br/>`RoleUnion` - uses union of all available for current user roles, with no ability to choose a specific one |
|`role.all_role.disabled`| `[true|false]` Disables `All` role for user when equals `true`. Default value: `false` |

*other properties to be added*

# Separate Daeja Viewer Windows Configuration

[View Document feature description](../../features/document-management/view-document.md)

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
