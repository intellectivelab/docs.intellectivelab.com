---
title: Open In Separate Tab Action Configuration
layout: docs
category: Unity 7
---
[Open Document Details in Separate Tab feature description](../../features/document-management/document-details#how-to-use-document-details)  
[Open Case Details in Separate Tab feature description](../../features/case-management/case-details#how-to-use-case-details)  
[Open Workitem Details in Separate Tab feature description](../../features/process-management/workitem-details#how-to-use-workitem-details)  

Open In Separate Tab action configuration is the same for documents, cases and workitems.

Open In Separate Tab Action configuration section should be added to the Unity System XML file. An example:

```xml
<Action ID="open_in_separate_tab" multiselect="false" scope="single" type="toolbar">
    <Name>Open In Separate Tab</Name>
    <Tooltip>Open Details In Separate Tab</Tooltip>
    <Uri/>
    <Parameters/>
    <CustomParameters>
        <ActionType>open_in_separate_tab</ActionType>
    </CustomParameters>
    <Security>
        <AllowRole>Unity Users</AllowRole>
        <!-- <DenyRole>Unity Users</DenyRole> -->
    </Security>
</Action>
```

Open In Separate Tab Action custom configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|ActionType | open_in_separate_tab |

Perform the rest of [Common Action Configuration Steps](../actions#common-actions-configuration-steps). 
