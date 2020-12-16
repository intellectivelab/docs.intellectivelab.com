---
title: Solutions Configuration
layout: docs
category: Unity 7
---

`<SolutionConfiguration>` section example:

```xml
<SolutionsConfiguration>
    <UcmUieClientConfiguration>
        <HliServiceUrl>http://...</HliServiceUrl>
        <IndexGroup>allRepos</IndexGroup>
        <DocumentLinkClass>Link</DocumentLinkClass>
        <LinkRepositoryId>UCM</LinkRepositoryId>
        <LinkRepositoryType>UCMLinks</LinkRepositoryType>
        <FieldCaseId>case_id@s</FieldCaseId>
        <FieldCaseSubFolderId>case_sub_folder_id@s</FieldCaseSubFolderId>
        <FieldDocumentId>document_id@s</FieldDocumentId>
    </UcmUieClientConfiguration> 
    <ce-config>
        <server-uri>http://...</server-uri>
        <object-store>Target</object-store>
        <elevated-privileges-user>
            <security-principal>CN=user\,CN=Users\,DC=com</security-principal>
            <security-encryption-key>*</security-encryption-key>
            <security-credentials>*</security-credentials>
        </elevated-privileges-user> 
        <queries>
            <query name="select-case">select * from CmAcmCaseFolder where Id = {0}</query>
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
        <case-model>ICM</case-model>
    </integration-config> 
    <icm-config>
        <case-manager-rest-uri>/CaseManagerProxy</case-manager-rest-uri>
        <solution-name>ACM_TEST</solution-name>
    </icm-config> 
    <forms-config>
        <create-form>
            <tool>
                <name>create_form_case</name>
                <case-type>Disclosure Case</case-type>
                <form-policy-location>/Forms/Disclosure Form Policy</form-policy-location>
            </tool>
        </create-form>
    </forms-config> 
    <ae-config>
        <workplace-uri>http://...</workplace-uri>
    </ae-config>
    <case-fields-audit-config enabled="true"/>
    <content-search>
        <object-classes/>
        <queries/>
        <filters/>
        <sort-info field="rank" direction="DESC"/>
    </content-search>
    <advanced-search>
        <object-classes/>
        <queries/>
        <filters/>
        <choice-lists/>
    </advanced-search>
    <inbasket-widget>
        <panels>
            <panel title="Inbasket" url="/Inbasket.jsp" visibility="inbasket"/>
            ...
        </panels>
    </inbasket-widget> 
    <search-widget>
        <context-menu-actions searchType="Document">
            <action id="check_in" label="Check in" toolAction="CheckIn"/>
            ...
        </context-menu-actions>
    </search-widget> 
    <content-view-widget>
        <tree-title>Root</tree-title> 
        <tree-level>/Documents</tree-level> 
        <grid-toolbar-actions>
            <action id="create" label="Create Document (SC)" toolId="CreateDocProfile"/>
        </grid-toolbar-actions> 
        <grid-context-menu-actions>
            <action id="view" label="View (SC)" toolAction="View"/>
            ...
        </grid-context-menu-actions> 
        <tree-context-menu-actions>
            <action id="view" label="View" toolAction="View"/>
            ...
        </tree-context-menu-actions> 
    </content-view-widget>
    <document-properties-view-widget>
        <related-context-menu-actions>
            <action id="check_in" label="Check in (SC)" toolAction="CheckIn"/>
            ...
        </related-context-menu-actions>
    </document-properties-view-widget> 
</SolutionsConfiguration>
```

|Tag             |Required/Optional|
|:---------------|:----------------|
|UcmUieClientConfiguration        |optional|
|HliServiceUrl                    |optional|
|IndexGroup                       |optional|
|DocumentLinkClass                |optional|
|LinkRepositoryId                 |optional|
|LinkRepositoryType               |optional|
|FieldCaseId                      |optional|
|FieldCaseSubFolderId             |optional|
|FieldDocumentId                  |optional|
|ce-config                        |required|
|server-uri                       |required|
|object-store                     |required|
|elevated-privileges-user         |optional|
|security-principal               |optional|
|security-encryption-key          |optional|
|security-credentials             |optional|
|queries                          |optional|
|query                            |optional|
|attachment-object                |required|
|fields                           |required|
|field                            |required|
|audit-object                     |required|
|comments-and-history             |required|
|columns                          |optional|
|column                           |optional|
|sort-info                        |required|
|filters                          |required|
|filter                           |required|
|dialog                           |required|
|ui-control                       |required|
|viewer                           |required|
|dialog-case-popup                |required|
|security-tab                     |required|
|pe-config                        |optional|
|connection-point                 |optional|
|roster-name                      |optional|
|integration-config               |optional|
|case-model                       |optional|
|icm-config                       |optional|
|case-manager-rest-uri            |optional|
|solution-name                    |optional|
|forms-config                     |optional|
|create-form                      |optional|
|tool                             |optional|
|name                             |optional|
|case-type                        |optional|
|form-policy-location             |optional|
|ae-config                        |required|
|workplace-uri                    |required|
|case-fields-audit-config         |required|
|content-search                   |required|
|object-classes                   |optional|
|queries                          |optional|
|filters                          |optional|
|sort-info                        |required|
|advanced-search                  |optional|
|choice-lists                     |optional|
|inbasket-widget                  |optional|
|panels                           |optional|
|panel                            |optional|
|search-widget                    |optional|
|context-menu-actions             |optional|
|action                           |optional|
|content-view-widget              |optional|
|tree-title                       |optional|
|tree-level                       |optional|
|grid-toolbar-actions             |optional|
|grid-context-menu-actions        |optional|
|tree-context-menu-actions        |optional|
|document-properties-view-widget  |optional|
|related-context-menu-actions     |optional|

Tags marked as `required` are needed in configuration file to start the Unity application.
However, missing parameters may be necessary for the correct operation of individual parts of the application.