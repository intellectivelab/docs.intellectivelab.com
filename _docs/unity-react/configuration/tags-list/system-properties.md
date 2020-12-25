---
title: Configuration - System Properties
layout: docs
category: Unity 7
---
System properties are main properties used through out the application.

| Property name | Description |
|:--------------|:------------|
|`role.mode` | `RoleSelection` - provides ability for user to change the role <br/>`RoleUnion` - uses union of all available for current user roles, with no ability to choose a specific one |
|`role.all_role.disabled`| `[true|false]` Disables `All` role for user when equals `true`. Default value: `false` |

*other properties to be added*

Example of configuration:

```xml
<SystemProperties>
  <Property ID="role.mode" value="RoleSelection"/>
  <!-- other properties -->
</SystemProperties>
```