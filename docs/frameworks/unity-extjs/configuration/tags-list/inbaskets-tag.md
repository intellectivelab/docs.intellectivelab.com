---
title: Inbaskets Tag Configuration
layout: docs
category: Unity 7
---
Example:
```xml
    <Inbaskets>
        ...
        <Inbasket ID="17" Alias="ALL_WI_Search-CustomerComplaints" Name="All Work" Type="WorkQueue" Visible="false" PageSize="0" Stateful="false" BulkMode="false">
            <Roles>
                <Role>Manager</Role>
                ...
            </Roles>
            <Actions>
                ...
                <Action AllowBulk="false" ID="4" LoggedAs="" Name="ValidBilling" WFResponse="ValidBilling">
                    <Assignments>
                        <Assignment Expression="$e.formatCurrentDate('yyyy-MM-dd\'T\'HH:mm:ss')" FieldID="CC_ComplaintReceivedDate"/>
                    </Assignments>
                    <Reasons>
                        <Reason CommentRequired="true">TEST_REASON_1</Reason>
                        ...
                    </Reasons>
                    <RequiredFields>
                        <RequiredField FieldID="CC_ComplaintStatus"/>
                    </RequiredFields>
				</Action>
                <Action AllowBulk="false" ID="5" LoggedAs="" Name="Exit" WFResponse="Exit"/>
            </Actions>
            <DefaultAction AllowBulk="false" ID="Complete" LoggedAs="" Name="Complete"/>
            <Tools/>
        </Inbasket>
        ...
    </Inbaskets>
```

[Assignments tag](inbaskets-tag/assignments-tag)
