---
title: Current Version Action Configuration
layout: docs
category: Unity 7
---
[Current Document Version feature description](../../features/document-management/current-version.md) *to be added*

For `Current Version` action following section should be added to the Unity System XML file:

```xml
<Action ID="makeVersionCurrent" multiselect="true" scope="any" type="toolbar">
  <Name>Make Version Current</Name>
  <Tooltip>Make Version Current</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>current</ActionType>
  </CustomParameters>
</Action>
```

`Current Version` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `current` |
|ResourceName       | `documents` |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
