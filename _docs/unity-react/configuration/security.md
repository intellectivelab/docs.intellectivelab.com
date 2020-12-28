---
title: Security Configuration
layout: docs
category: Unity 7
---

# Access Roles

*Content to be added*

[AccessRoles Unity tag](tags-list/access-roles-tag.md)

# Security Restrictions

| **Note**: Security Restrictions are the same for Unity ExtJS and Unity React. 

Some configuration items support security restriction rules configuration. For example: dashboards, search templates, actions, etc.

There is a standard configuration block to define security restriction rules based on access roles user belongs to:

```xml
    <Security>
        <AllowRole>Unity Users</AllowRole>
        <DenyRole>Unity Users</DenyRole>
    </Security>
```

Rules are evaluated in the following order:

1. An element is available if no `Security` section is defined for it
2. An element is restricted if user is a member of any role listed in `DenyRole`
3. An element is available if user is a member of any role listed in `AllowRole`
4. An element is restricted if rules above do not apply. That is if empty `Security` section defined or user does not belong to any of `AllowRole`

# SSO

*Content to be added*
