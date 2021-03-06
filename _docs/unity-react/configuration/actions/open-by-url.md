---
title: Open By URL Action Configuration
layout: docs
category: Unity 7
---
[Open By URL feature description](../../features/case-management/open-case-by-url.md)

Open By URL Action configuration section should be added to the Unity System XML file. An example:

```xml
    <Action ID="openByURL" multiselect="false" scope="single" type="toolbar">
        <Name>Open By URL</Name>
        <Tooltip>Open By URL</Tooltip>
        <Uri/>
        <Parameters/>
        <CustomParameters>
            <ActionType>open_by_url</ActionType>
            <UrlPattern>OpenCase.jsp?solution=CustomerComplaints&amp;providerId=ucm_over_icm_provider&amp;caseId=${caseId}&amp;caseObjectId=${caseObjectId}</UrlPattern>
        </CustomParameters>
        <Security>
            <AllowRole>Unity Users</AllowRole>
            <!-- <DenyRole>Unity Users</DenyRole> -->
        </Security>
    </Action>
```

Open By URL Action custom configuration parameters:

| Parameter | Description |
|:----|:-------------------|
|ActionType | open_by_url |
|UrlPattern | URL pattern. Supports macros in the following format: `${key}`, where `key` is a property name of the object being opened. Macros will be replaced with the object property values. |

Perform the rest of [Common Action Configuration Steps](../actions.md#common-actions-configuration-steps). 