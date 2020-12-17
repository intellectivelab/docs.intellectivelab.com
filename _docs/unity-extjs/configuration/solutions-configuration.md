---
title: Solutions Configuration Tag
layout: docs
category: Unity 7
---

`<SolutionsConfiguration>` section example:

```xml
<SolutionsConfiguration>
    <UcmUieClientConfiguration>
        ...
    </UcmUieClientConfiguration> 
    <ce-config>
        <server-uri>http://...</server-uri>
        <object-store>Target</object-store>
        <elevated-privileges-user>
            ...
        </elevated-privileges-user> 
        <queries>
            ...
        </queries> 
        <attachment-object name="Bp8CommentAttachment">
            <fields>
                <field type="string" name="Id"/>
                ...
            </fields>
        </attachment-object>
        <audit-object name="Bp8UserComment">
            <fields>
                <field type="string" name="Id"/>
                ...
            </fields>
        </audit-object>
        <comments-and-history>
            <columns>
                <column dataIndex="DateCreated" header="Date Created" menuDisabled="false" sortable="true" tooltip="Date Created" width="80"/>
                ...
            </columns> 
            <sort-info field="DateCreated" direction="DESC"/>
            <filters width="150">
                <filter name="Comment Type" xtype="combo" valueField="code" typeAhead="true" triggerAction="all" mode="local" lazyRender="true" editable="true" displayField="code" dataIndex="CommentType"/>
            </filters>
            <dialog width="450" height="280">
                <fields>
                    <field type="string" id="field2" commentDataIndex="CommentType">
                        <ui-control id="componentCommentType" xtype="combo" valueField="code" typeAhead="true" triggerAction="query" mode="remote" lazyRender="true" editable="true" displayField="description" minChars="0" hiddenName="commentType" forceSelection="true" fieldLabel="Comment Type" componentIndex="1" allowBlank="false"/>
                    </field>
                </fields>
            </dialog>
        </comments-and-history>
        <viewer width="550" height="500"/>
        <dialog-case-popup width="550" height="500"/>
        <security-tab view="SIMPLE"/>
    </ce-config>
    <pe-config>
        <connection-point>P8Conn1</connection-point>
        <roster-name>MortgageOriginationProcess</roster-name>
    </pe-config> 
    <integration-config>
        ...
    </integration-config> 
    <icm-config>
        ...
    </icm-config> 
    <forms-config>
        ...
    </forms-config> 
    <ae-config>
        <workplace-uri>http://...</workplace-uri>
    </ae-config>
    <case-fields-audit-config enabled="true"/>
    <content-search>
        ...
    </content-search>
    <advanced-search>
        ...
    </advanced-search>
    <inbasket-widget>
        ...
    </inbasket-widget> 
    <search-widget>
        ...
    </search-widget> 
    <content-view-widget>
        ...
    </content-view-widget>
    <document-properties-view-widget>
        ...
    </document-properties-view-widget> 
</SolutionsConfiguration>
```

|Tag             |Required/Optional|
|:---------------|:----------------|
|ae-config                        |required|
|attachment-object                |required|
|audit-object                     |required|
|case-fields-audit-config         |required|
|ce-config                        |required|
|comments-and-history             |required|
|content-search                   |required|
|dialog                           |required|
|dialog-case-popup                |required|
|field                            |required|
|fields                           |required|
|filter                           |required|
|filters                          |required|
|object-store                     |required|
|security-tab                     |required|
|server-uri                       |required|
|sort-info                        |required|
|ui-control                       |required|
|viewer                           |required|
|workplace-uri                    |required|

Tags marked as `required` are needed in configuration file to start the Unity application.
However, missing parameters may be necessary for the correct operation of individual parts of the application.