---
title: Download Document Action Configuration
layout: docs
category: Unity 7
---
[Download Document feature description](../../features/document-management/document-download.md)

For `Download` action following section should be added to the Unity System XML file:

```xml
<Action ID="download">
      <Name>Download</Name>
      <Tooltip>Download document</Tooltip>
      <CustomParameters>
        <ActionType>download</ActionType>
        <ResourceName>documents</ResourceName>
        <Scope>inherit</Scope>
      </CustomParameters>
</Action>
```

`Download` action custom configuration parameters:

| Parameter       | Description |
|:----------------|:------------|
|ActionType       | `download` |
|ResourceName       | `documents` |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps).
