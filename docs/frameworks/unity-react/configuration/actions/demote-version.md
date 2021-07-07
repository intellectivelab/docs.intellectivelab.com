---
title: Demote Document Version Action Configuration
layout: docs
category: Unity 7
---
[Demote Document Version feature description](../../features/document-management/demote-version) *to be added*

For `Demote` action following section should be added to the Unity System XML file:

```xml
<Action ID="demote" multiselect="true" scope="any" type="toolbar">
  <Name>Demote</Name>
  <Tooltip>Demote</Tooltip>
  <Uri/>
  <CustomParameters>
    <ResourceName>documents</ResourceName>
    <ActionType>demote</ActionType>
  </CustomParameters>
</Action>
```

`Demote` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `demote` |
|ResourceName       | `documents` |

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
