---
title: SystemProperties Tag Configuration
layout: docs
category: Unity 7
---
System properties are main properties used throughout the application.

Example of configuration:

```xml
<SystemProperties>
  <Property ID="role.mode" value="RoleSelection"/>
  <!-- other properties -->
</SystemProperties>
```

| Property name | Description |
|:--------------|:------------|
|`role.mode` | `RoleSelection` - provides ability for user to change the role <br/>`RoleUnion` - uses union of all available for current user roles, with no ability to choose a specific one |
|`role.all_role.disabled`| `[true|false]` Disables `All` role for user when equals `true`. Default value: `false` |

*other properties to be added*
