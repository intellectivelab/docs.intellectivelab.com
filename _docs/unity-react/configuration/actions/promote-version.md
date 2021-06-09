---
title: Promote Document Version Action Configuration
layout: docs
category: Unity 7
---
[Promote Document Version feature description](../../features/document-management/promote-version.md) *to be added*

For `Promote` action following section should be added to the Unity System XML file:

```xml
<Action ID="promote" multiselect="true" scope="any" type="toolbar">
  <Name>Promote</Name>
  <Tooltip>Promote</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>promote</ActionType>
  </CustomParameters>
</Action>
```

`Promote` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `promote` |
|ResourceName       | `documents` |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 
