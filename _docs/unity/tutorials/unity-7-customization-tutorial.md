---
title: Unity 7 Customization Tutorial
layout: docs
category: Unity 7
---
# Overview 

This tutorial implements a very basic application that uses only simple document management capabilities of 
[Unity 7](https://www.intellective.com/unity) and
[IBM FileNet Content Manager](https://www.ibm.com/products/filenet-content-manager).

This sample is far enough from reflecting any real business scenario. However, it covers many interesting 
configuration and customization topics that are required for creating any end-user application.

## The requirements 

The requirements listed below follow the goal of implementing document management application supporting
corporate customer relationship activities.

The application should let users to do the following:

- Create and search objects representing `Customers` using fields such as `State`, `City` and `Telephone number`;
- For each `Customer` users should view and add `Correspondence` documents;
- Values for the `State` and `City` fields should be taken from the actual US dictionary;
- When searching using `Telephone number` application should validate the area code relying on the `State` and `City`
selected (use the actual area code dictionary as well).

From the UI point of view, it should implement master-detail approach. Users search and select `Customers` in master
(the top one) part. Selected `Customer` filters `Correpondence` documents at the detail (the bottom one) part.

![Screenshot - the final result](../images/unity-7-customization-tutorial/screenshot-final-result.png)

## Implementation steps 

This tutorial consists of several consecutive parts.
Follow one after another if you are recreating the application from the scratch.
Address [the GitHub repository](https://github.com/intellectivelab/u7-samples-crm-app) if you get stuck or want to compare your code with the final working result.

- [Step 1](../unity-7-customization-tutorial/#step-1-creating-running-and-debugging-the-unity-application): Creating, running, and debugging the Unity application
- [Step 2](../unity-7-customization-tutorial/#step-2-configuring-the-data-model-and-setting-up-the-solution-base): Configuring the data model and setting up the solution base
- [Step 3](../unity-7-customization-tutorial/#step-3-implementing-the-master-detail-search-template-tab): Implementing the master-detail search template tab
- [Step 4](../unity-7-customization-tutorial/#step-4-creating-custom-data-service-and-rest-api): Creating custom data service and REST API
- [Step 5](../unity-7-customization-tutorial/#step-5-implementing-custom-selectors-and-criteria-field-validation): Implementing custom selectors and criteria field validation
- [Step 6](../unity-7-customization-tutorial/#step-6-altering-search-results-on-the-server-side): Altering search results on the server-side
- [Step 7](../unity-7-customization-tutorial/#step-7-implementing-actions-for-creating-customers-and-correspondence-documents): Implementing actions for creating Customers and Correspondence documents
- [Step 8](../unity-7-customization-tutorial/#step-8-staging-the-release-using-docker-image): Staging the release using Docker image 

# Step 1: Creating, running, and debugging the Unity application  

## Creating a project 

Follow the guide of the archetype: https://github.com/intellectivelab/unity7-maven-archetype

Basically, you have to set up Maven access token and then run the following command (for Windows):
```
mvn archetype:generate "-DarchetypeGroupId=com.intellective.archetypes" ^
                       "-DarchetypeArtifactId=unity7-maven-archetype" ^
                       "-DarchetypeVersion=1.0.3" ^
                       "-DgroupId=com.intellective.sample" ^
                       "-DartifactId=u7-crm-app" ^
                       "-Dversion=1.0.0-SNAPSHOT" ^
                       "-DunityVersion=7.7.0-RC11"
```
Feel free to change versions of Unity or Unity archetype if necessary. 
It will start the project creation procedure. Confirm project creation by entering `Y` when asked.

## Building and running locally 

To make the development build of the application, run the following command:
`mvn clean package -P web-dev-mode`.

We are going to use OpenLiberty application server to run and debug the application.
Download it from https://openliberty.io/downloads/. Choose the latest version with the "Web Profile 8"
package to avoid missing necessary features.

You’ll have to run/debug the application server quite often.
Create a script for the convenience. See the Windows batch script example:
```
@echo off
set JAVA_HOME=<JDK8_HOME>
set JVM_ARGS=-Xmx1g -DunityConfigUrl_custom_webapp="file:///<PROJECT_DIR>\custom-config\src\main\resources\unity\unity_config.xml"
<WLP_HOME>\wlp\bin\server.bat run
```
Replace the `<JDK_HOME>` placeholder by the path leading to OpenJDK 8 compliant distribution on your workstation;
`<PROJECT_DIR>` should lead to the source project location; and `<WLP_HOME>` stands here for the
OpenLiberty directory.  

Edit the `server.xml` file of the OpenLiberty instance. Insert, at least the following:
```xml
  <!-- ... -->
  <basicRegistry id="basic" realm="BasicRealm">
    <user name="intadmin" password="{xor}Lz4sLChvLTs=" />
    <user name="intuser1" password="{xor}Lz4sLChvLTs=" />
    <user name="intuser2" password="{xor}Lz4sLChvLTs=" />
  </basicRegistry>
  <jaasLoginContextEntry name="VES" id="VES" />
  <jaasLoginContextEntry name="vzv" id="vzv" />

  <application id="custom_app_war" location="<PROJECT_DIR>\custom-webapp\target\custom-webapp-1.0.0-SNAPSHOT.war" name="custom-webapp" type="war"/>
  <!-- ... -->
```
Please note that you'll have to update user's passwords in order to access the actual remote platform 
(IBM FileNet Content Manager) instance. The password above is `passw0rd`. 

To avoid keeping it "as-is" in your `server.xml` file you may use the `securityUtility` 
([see the documentation](https://www.ibm.com/support/knowledgecenter/SSEQTP_liberty/com.ibm.websphere.wlp.doc/ae/rwlp_command_securityutil.html))
to encrypt it.

Edit the environment variables file at `custom-config/src/main/resources/unity/unity_config-environment.ini`.
Make sure that you have actual values for the following parameters:
 - `cpe.url` should lead to the FileNet Composite Platform Engine.
 - `documents.object_store` defines the object store having the application data.
 - `devModeEnabled` sets if JS code should be minimized/obfuscated during the build (default value is `true`).

Run the application server using the script above. To test if the application is up and running, open http://localhost:9080/custom-webapp.

Note, that if you see the Configuration Wizard page (see the picture below) after you log in,
it means the application can't access the configuration file.

## Debugging
### Server-side
To debug the server-side, we should run OpenLiberty server in debug mode. Create a similar script for that:
```
@echo off
set JAVA_HOME=C:\Dev\Java\zulu-8
set JVM_ARGS=-Xmx1g -DunityConfigUrl_custom_webapp="file:///C:\Users\ozimakov\IdeaProjects\intellectivelab\samples\u7-crm-app\custom-config\src\main\resources\unity\unity_config.xml"
<WLP_HOME>\wlp\bin\server.bat debug
```
(basically, it calls for `server.bat debug` instead of `server.bat run`)

When the server starts it waits for the remote Java debugger to connect. Use the Java IDE of your choice. Create a debug configuration, by setting host name to `localhost` and port equal to `7777`.

### Client-side
To debug the client-side, use the developer tools of the browser. We recommend using Chrome and its developer tools.

Also, consider building the app using `web-dev-mode` profile. Otherwise, you will have to manage the minimized version of
JS code.

![Screenshot - Chrome devtools 1](../images/unity-7-customization-tutorial/screenshot-chrome-dev1.png)

You can debug JS code, even change it on the fly using the `Overrides` function:

![Screenshot - Chrome devtools 2](../images/unity-7-customization-tutorial/screenshot-chrome-dev2.png)

Here you change the code, test it immediately without rebuilding the app (which is definitely a time-consuming operation).
After you complete debugging, just copy the final version of the JS code into the main project sources. 
  
# Step 2: Configuring the data model and setting up the solution base

On this step we are going to prepare application data model (and test data itself), as well as create a base
solution configuration using existing out-of-the-box capabilities.

## Preparing data
Here we are going to use [IBM FileNet Content Manager](https://www.ibm.com/products/filenet-content-manager)
to handle our data model and store documents representing `Customers` and `Correspondence`.

Solution data model consists of the following FileNet document classes:
1. Customer Info (`CustomerInfo`)
    * State (`State`, String (64), Single)
    * City (`City`, String(64), Single)
    * Phone Number (`PhoneNumber`, String(64), Single)
2. Correspondence (`Correspondence`)
    * Customer’s Name (`CustomerName`, String(64), Single)

Also, we should have a folder at `/Customers` to store these documents.

This is a very simple data model for a sake of this sample. You should not consider it as a guideline for implementing
real-life applications.

Before starting further development, it does make sense to create some documents in the folder mentioned above.
Just create a couple of documents using `CustomerInfo` class. Put company names into standard `DocumentTitle` field.
Then, create a number of documents of the `Correspondence` class. Link `Correspondence` to `Customer` by placing
its name into `CustomerName` field.

## Configuring the solution base
Now we start editing solution configuration at `custom-config/src/main/resources/unity/unity_config.xml`.

To keep the configuration files under version control, on this phase we strongly recommend editing XML file directly
instead of using Unity Configuration Console.

If you change the configuration (and not the code!) you have a way to reload it quickly by hitting the following
URL: http://localhost:9080/vu/reset.jsp. You have to be authorized in the application for that.

### Configuring connector
At first, add data source and data provider in the appropriate sections
(`/Configuration/Datasources` and `/Configuration/RepositoryDataProviders`):
```xml
    <Datasource ID="CustomerDS" class="com.vegaecm.vspace.datasources.CEDatasource">
        <URI>${ce.uri}</URI>
        <ObjectStore>${documents.object_store}</ObjectStore>
    </Datasource>
```
Note, that it relies on the environment variables externalized into the separate file
[`custom-config/src/main/resources/unity/unity_config-environment.ini`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-config/src/main/resources/unity/unity_config-environment.ini).

```xml
    <RepositoryDataProvider ID="Customer_repository"
                            class="com.vegaecm.vspace.providers.ce.CERepositoryDataProvider">
        <OperatorsSet>P8</OperatorsSet>
        <Operations>
            <Operation ID="add_content" type="add">
                <OperationProperties>
                    <Property ID="DocumentClass" type="FIRST">
                        <SecuredValue>
                            <Value>Document</Value>
                        </SecuredValue>
                    </Property>
                </OperationProperties>
                <DefineProperties>
                    <Property ID="DocumentTitle" type="FIRST">
                        <SecuredValue>
                            <Value>Title</Value>
                        </SecuredValue>
                    </Property>
                </DefineProperties>
            </Operation>
        </Operations>
        <DefineProperties/>
        <ViewerParameters/>
        <ResultLimit>2000</ResultLimit>
        <QuerySizeLimit>10000</QuerySizeLimit>
        <PagingMode>nonpaged</PagingMode>
        <DefineSecurityParentage>true</DefineSecurityParentage>
    
        <Datasource>CustomerDS</Datasource>
    
        <PropertyNameMapper>
            <Mapping external="document_id" internal="Id"/>
        </PropertyNameMapper>
    </RepositoryDataProvider>
```
In order to provide the data to the client, we have to define properties at `/Configuration/Properties`:
```xml
    <Property ID="DocumentTitle">
        <Name>Document Title</Name>
        <Type>string</Type>
        <Resizable>true</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType/>
        <Width>300</Width>
        <Tooltip/>
    </Property>
    <Property ID="Id">
        <Name>Id</Name>
        <Type>string</Type>
        <Resizable>true</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType/>
        <Width>115</Width>
        <Tooltip/>
    </Property>
    <Property ID="ContentSize">
        <Name>File Size</Name>
        <Type>int</Type>
        <Resizable>true</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType>vspace-filesize-column</XType>
        <Width>70</Width>
        <Tooltip/>
    </Property>
    <Property ID="MimeType">
        <Name>Mime Type</Name>
        <Type>string</Type>
        <Resizable>false</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType>vspace-mime-column</XType>
        <Width>28</Width>
        <Tooltip/>
        <Header/>
    </Property>
    <Property ID="State">
        <Name>US State</Name>
        <Type>string</Type>
        <Resizable>false</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType/>
        <Width>128</Width>
        <Tooltip/>
    </Property>
    <Property ID="City">
        <Name>US State City</Name>
        <Type>string</Type>
        <Resizable>false</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType/>
        <Width>128</Width>
        <Tooltip/>
    </Property>
    <Property ID="PhoneNumber">
        <Name>Phone number</Name>
        <Type>string</Type>
        <Resizable>false</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType/>
        <Width>128</Width>
        <Tooltip/>
    </Property>
    <Property ID="CustomerName">
        <Name>Customer name</Name>
        <Type>string</Type>
        <Resizable>false</Resizable>
        <Sortable>true</Sortable>
        <MultiValue>false</MultiValue>
        <XType/>
        <Width>128</Width>
        <Tooltip/>
    </Property>
```

### Master search template (Customers)

Now we can configure the search template for `Customer` documents (add it into `/Configuration/SearchTemplates` node):
```xml
    <SearchTemplate ID="Customer_Search">
        <DataProviderId>Customer_repository</DataProviderId>
        <Description>Search "Customer Info" using State, City, and Phone Number fields</Description>
        <Comment>Enter search criteria</Comment>
        <Autoexecute>true</Autoexecute>
        <Hidden>false</Hidden>
        <Operation dataProviderId="Customer_repository" type="search">
            <OperationProperties>
                <Property ID="query" type="FIRST">
                    <SecuredValue>
                        <Value>SELECT {Macro.ResultProperties} FROM CustomerInfo WHERE This INFOLDER '/Customers' AND {Macro.QueryCriterion}</Value>
                    </SecuredValue>
                </Property>
    
                <Property ID="objectStore" type="FIRST">
                    <SecuredValue>
                        <Value>${documents.object_store}</Value>
                    </SecuredValue>
                </Property>
            </OperationProperties>
        </Operation>
        <SortFields/>
        <Criteria>
            <Criterion>
                <FieldName>State</FieldName>
                <Comment>at least 2 characters are required</Comment>
                <Type>string</Type>
                <Operator>eq</Operator>
                <Required>false</Required>
                <Hidden>false</Hidden>
                <Readonly>false</Readonly>
                <MultiValue>false</MultiValue>
                <MinLength>2</MinLength>
                <MaxLength>128</MaxLength>
            </Criterion>
            <Criterion>
                <FieldName>City</FieldName>
                <Comment>at least 2 characters are required</Comment>
                <Type>string</Type>
                <Operator>eq</Operator>
                <Required>false</Required>
                <Hidden>false</Hidden>
                <Readonly>false</Readonly>
                <MultiValue>false</MultiValue>
                <MinLength>2</MinLength>
                <MaxLength>128</MaxLength>
            </Criterion>
            <Criterion>
                <FieldName>PhoneNumber</FieldName>
                <Comment>+1 XXX-YYY-YYYY</Comment>
                <Type>string</Type>
                <Operator>eq</Operator>
                <Required>false</Required>
                <Hidden>false</Hidden>
                <Readonly>false</Readonly>
                <MultiValue>false</MultiValue>
            </Criterion>
        </Criteria>
        <Grid ID="Customer_Grid"/>
    </SearchTemplate>
```

It defines the [FileNet Search SQL](https://www.ibm.com/support/knowledgecenter/en/SSNW2F_5.5.0/com.ibm.p8.ce.dev.ce.doc/query_sql_syntax_rel_queries.htm#query_sql_syntax_rel_queries__sql_statement_grammar) 
template and criteria for 3 fields: `State`, `City`, and `PhoneNumber`. 

Now we can define a grid for representing search result (add it into `/Configuaration/Grids` node):
```xml
    <Grid ID="Customer_Grid" enableColumnReorder="false" groupSearchResults="false">
        <Toolbar>
            <Actions/>
        </Toolbar>
        <Listeners>
            <Listener ID="ClickColumn"/>
        </Listeners>
        <XType>vspace-docs</XType>
        <Columns checkBoxModel="true" formatSet="default">
            <ColumnSet ID="Customer_Grid_ColSet_All" type="all"/>
            <ColumnSet ID="Customer_Grid_ColSet_Default" type="default"/>
        </Columns>
    </Grid>
```
It relies on 2 column sets - full list of columns and the default one showed to user. User can
change a set of visible columns by choosing from the full list. Add the following sections into
`/Configuration/ColumnSets` node of the configuration XML:
```xml
    <ColumnSet ID="Customer_Grid_ColSet_All">
        <Properties>
            <Property>State</Property>
            <Property>City</Property>
            <Property>PhoneNumber</Property>
            <Property>DocumentTitle</Property>
            <Property>ContentSize</Property>
        </Properties>
    </ColumnSet>
    <ColumnSet ID="Customer_Grid_ColSet_Default">
        <Properties>
            <Property>State</Property>
            <Property>City</Property>
            <Property>PhoneNumber</Property>
            <Property>DocumentTitle</Property>
        </Properties>
    </ColumnSet>
```

For now, we can use the out-of-the-box search template tab to display this search template
(`/Configuration/Tabs`):
```xml
    <Tab ID="CustomerDataTab-master">
        <Title>Customers (Master)</Title>
        <XType>search-templates-tab</XType>
        <Grid ID="Customer_Grid"/>
    </Tab>
```

To assign the search template to the tab, we need a search template set called `<TAB_ID>-templates-set` 
(at `/Configuration/SearchTemplates`):
```xml
    <TemplateSet ID="CustomerDataTab-master-templates-set">
        <Template>Customer_Search</Template>
    </TemplateSet>
``` 

Now we can apply the configuration (restart the server or use `reset.jsp`) and take a look on what we have on this step:
![Screenshot - Master Search template](../images/unity-7-customization-tutorial/screenshot-step2-master-searchtemplate.png)

### Details search template (Correspondence)
Aside of the idea that a result set for `Correspondence` documents should be filtered
using the selected `Customer` document name, we can define a search template for this in
the same fashion as we did above (at `/Configuration/SearchTemplates`):
```xml
    <SearchTemplate ID="Customer_Correspondence_Search">
        <DataProviderId>Customer_repository</DataProviderId>
        <Description>Search all the "Correspondence" documents for selected customer</Description>
        <Comment>Enter search criteria</Comment>
        <Autoexecute>false</Autoexecute>
        <Hidden>false</Hidden>
        <Operation dataProviderId="Customer_repository" type="search">
            <OperationProperties>
                <Property ID="query" type="FIRST">
                    <SecuredValue>
                        <Value>SELECT {Macro.ResultProperties} FROM Correspondence WHERE This INFOLDER '/Customers' AND {Macro.QueryCriterion}</Value>
                    </SecuredValue>
                </Property>
                <Property ID="objectStore" type="FIRST">
                    <SecuredValue>
                        <Value>${documents.object_store}</Value>
                    </SecuredValue>
                </Property>
            </OperationProperties>
        </Operation>
        <SortFields/>
        <Criteria>
            <Criterion>
                <FieldName>CustomerName</FieldName>
                <Type>string</Type>
                <Operator>eq</Operator>
                <Required>false</Required>
                <Hidden>false</Hidden> <!-- hidden -->
                <Readonly>false</Readonly>
                <MultiValue>false</MultiValue>
            </Criterion>
        </Criteria>
        <Grid ID="CustomerCorrespondence_Grid"/>
    </SearchTemplate>
```
Here we have the criteria that relies on `CustomerName` field. However, now it's just a plain string field.

A grid for the second search template (`/Configuration/Grids`):
```xml
    <Grid ID="CustomerCorrespondence_Grid" enableColumnReorder="false" groupSearchResults="false">
        <Toolbar>
            <Actions/>
        </Toolbar>
        <Listeners/>
        <XType>vspace-docs</XType>
        <Columns checkBoxModel="true" formatSet="default">
            <ColumnSet ID="CustomerCorrespondence_Grid_ColSet_All" type="all"/>
            <ColumnSet ID="CustomerCorrespondence_Grid_ColSet_Default" type="default"/>
        </Columns>
    </Grid>
```
Corresponding column sets (`/Configuration/ColumnSets`):
```xml
    <ColumnSet ID="CustomerCorrespondence_Grid_ColSet_All">
        <Properties>
            <Property>MimeType</Property>
            <Property>DocumentTitle</Property>
            <Property>ContentSize</Property>
        </Properties>
    </ColumnSet>
    <ColumnSet ID="CustomerCorrespondence_Grid_ColSet_Default">
        <Properties>
            <Property>MimeType</Property>
            <Property>DocumentTitle</Property>
            <Property>ContentSize</Property>
        </Properties>
    </ColumnSet>
```

Finally, add the search template into existing template set:
```xml
    <TemplateSet ID="CustomerDataTab-master-templates-set">
        <Template>Customer_Search</Template>
        <Template>Customer_Correspondence_Search</Template>
    </TemplateSet>
```
And now we can see the second search template availible in the application:
![Screenshot - Details search template](../images/unity-7-customization-tutorial/screenshot-step2-details-searchtemplate.png)

On this step, we have configured the application using only out-of-the-box capabilities.
We will use this solution base in our future customizations.

# Step 3: Implementing the master-detail search template tab

On this step we are going to implement master-detail behaviour. We will put search template components
one below another and wire up the details criteria for `Correspondence` with the selected `Customer` document.

## Implementing master-details tab 
At first, create a file [`custom-webapp/src/main/webapp/js/custom/tab/LinkedSearchTemplatesTab.js`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-webapp/src/main/webapp/js/custom/tab/LinkedSearchTemplatesTab.js):
```javascript
/**
 * Override Unity component to display master and detail search templates, one is just below another.
 */
Ext.override(VSpace.templates.GridsPanel, {
    getTemplateGridConfig: function () {
        var templateGridConfig = this.callParent(arguments);
        if (this.ownerCt &&
            this.ownerCt.config &&
            this.ownerCt.config.cfg &&
            Ext.isObject(this.ownerCt.config.cfg.linkedTemplate)) {
            return {
                layout: 'border',
                region: 'center',
                items: [
                    {
                        layout: 'fit',
                        region: 'center',
                        flex: 3,
                        items: templateGridConfig
                    }, {
                        layout: 'fit',
                        region: 'south',
                        flex: 2,
                        items: this.ownerCt.config.cfg.linkedTemplate
                    }
                ]
            };
        }
        return templateGridConfig;
    }
});

/**
 Linked search templates - horizontal master-details component
 Top search template defines the customer. Bottom one searches documents related to the selected customer record.
 */
Ext.define('custom.tab.LinkedSearchTemplatesTab', {
    extend: 'Ext.Panel',
    alias: 'widget.custom-linked-search-templates-tab',

    constructor: function (config) {
        var pId = config.cfg.id + '-tab' + '-' + Ext.id();
        var detailsTempatePanelId = pId + '-details-search-templates';
        Ext.applyIf(config, {
            tabId: pId,
            solution: VSpace.utils.extractSolutionId(config.cfg.id),
            cfg: config.cfg,
            title: config.cfg.title,
            id: pId,
            layout: 'border',
            items: {
                layout: 'fit',
                region: 'center',
                flex: 3,
                items: {
                    id: pId + '-master-search-templates',
                    xtype: 'search-templates-tab',
                    detailsTempatePanelId: detailsTempatePanelId, // keep the reference to the 'details' template panel
                    cfg: {
                        id: config.cfg.id + '-master',
                        dataproviderid: config.cfg.dataproviderid,
                        grid: {
                            id: config.cfg.grid.id
                        },

                        // The below 'linked' search template will be displayed inside 'master' search template
                        linkedTemplate: {
                            id: detailsTempatePanelId,
                            xtype: 'search-templates-tab',
                            masterProperty: config.cfg.masterproperty, // master record property id to fetch details records
                            getQueryPanelConfig: function () {
                                return {
                                    hidden: true,    // hide query panel for the details search template
                                    templateDefaults: {
                                        active: false // disable auto-execution of the details template
                                    }
                                };
                            },
                            cfg: {
                                id: config.cfg.id + '-details',
                                dataproviderid: config.cfg.dataproviderid,
                                grid: {
                                    id: config.cfg.grid.id
                                },
                                nodecontext: {}
                            }
                        }
                    }
                }
            },
            urlSupported: true
        });

        this.callParent([config]);
    }
});
```
As you can see above, we define 2 components. The first one overrides the configuration of the out-of-the-box component
to place a 'linked' search template (details) below the master one. Second component implements the tab itself.
It gathers search templates and provide the `masterProperty` parameter for the 'linkedTemplate' that will pass the
selected `Customer's` name.

To include a new JS source file into the build, edit the [`wro-custom.xml`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-webapp/src/main/wro-custom.xml) file:
```xml
<groups xmlns="http://www.isdc.ro/wro"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.isdc.ro/wro wro.xsd">

    <!-- Customization group -->
    <group name="customization">
        <js>/js/custom/tab/LinkedSearchTemplatesTab.js</js> <!-- ADD THIS ONE -->
        <css>/styling/overrides/sample-common.css</css>
    </group>
    <!-- END: Customization group -->

</groups>
```
Introduce a new tab in the [solution config](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-config/src/main/resources/unity/unity_config.xml).
In fact, you may replace the tab we've created on the previous step (ID=`CustomerDataTab-master`) with the following
one:
```xml
    <Tab ID="CustomerDataTab">
        <Title>Customer Info and Correspondence</Title>
        <XType>custom-linked-search-templates-tab</XType>
        <Grid ID="Customer_Grid"/>
        <CustomParameters>
            <DataProviderId>Customer_repository</DataProviderId>
            <MasterProperty>DocumentTitle</MasterProperty>
        </CustomParameters>
    </Tab>
```
Note, that it defines the `MasterProperty` parameter containing the name of the property (of the `Customer` document)
we are going to use as a key for searching `Correspondence`.

New component expects to have 2 different template sets. So, we need to rearrange it a bit (at `/Configuration/SearchTemplates`):
```xml
    <TemplateSet ID="CustomerDataTab-master-templates-set">
        <Template>Customer_Search</Template>
    </TemplateSet>
    <TemplateSet ID="CustomerDataTab-details-templates-set">
        <Template>Customer_Correspondence_Search</Template>
    </TemplateSet>
```
Rebuild the application using `mvn clean package -P web-dev-mode` command and see the result:
![Screenshot - Master-details](../images/unity-7-customization-tutorial/screenshot-step3-masterdetails1.png)

## Implementing action handler 
Now, the only thing left on this step is implementing an action for selecting `Customer` document and filtering
`Correspondence` by this.
Add a new JS file at [`custom-webapp/src/main/webapp/js/custom/actions/LinkedSearchTemplatesTabActions.js`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-webapp/src/main/webapp/js/custom/actions/LinkedSearchTemplatesTabActions.js):
```javascript
/**
 * Defines the action handler for master record (customer) selection event
 */
VSpace.action.ActionHandler['custom_view_client_details'] = function(evt) {
    if (!Ext.isEmpty(evt.gridId)) {
        var masterGrid = Ext.getCmp(evt.gridId);
        var masterTemplate = masterGrid.up('search-templates-tab');
        if (masterTemplate && masterTemplate.config && !Ext.isEmpty(masterTemplate.config.detailsTempatePanelId)) {
            var detailsSearchTemplate = Ext.getCmp(masterTemplate.config.detailsTempatePanelId);
            if (detailsSearchTemplate) {
                // Lazily add execution handler
                var detailsSearchPanel = detailsSearchTemplate.down('vspace-templates-search-panel');
                if (detailsSearchTemplate.cfg && detailsSearchTemplate.cfg.nodecontext) {
                    var masterProperty = detailsSearchTemplate.config.masterProperty;
                    var masterItem = evt.orig[3];
                    var detailsSearchContext = {
                        masterProperty: masterItem.get(masterProperty)
                    };
                    Ext.apply(detailsSearchTemplate.cfg.nodecontext, detailsSearchContext);
                    detailsSearchPanel.executeQuery();
                }
            }
        }
    }
};
```
Here we define the action handler to be called when a record is being selected in the master search template (grid).
We figure out what property needs to be passed, get it from the selected item at master grid and pass to the details.
Finally, we call `detailsSearchPanel.executeQuery()` to perform search with updated criteria.

As we already have done before, we should add a new JS source into the [`wro-custom.xml`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-webapp/src/main/wro-custom.xml) file:
```xml
<groups xmlns="http://www.isdc.ro/wro"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.isdc.ro/wro wro.xsd">

    <!-- Customization group -->
    <group name="customization">
        <js>/js/custom/tab/LinkedSearchTemplatesTab.js</js>
        <js>/js/custom/actions/LinkedSearchTemplatesTabActions.js</js> <!-- ADD THIS ONE -->
        <css>/styling/overrides/sample-common.css</css>
    </group>
    <!-- END: Customization group -->

</groups>
```
In the configuration, add a listener for the master grid:
```xml
    <Grid ID="Customer_Grid" enableColumnReorder="false" groupSearchResults="false">
        <Toolbar>
            <Actions/>
        </Toolbar>
        <Listeners>
            <Listener ID="ClickColumn">
                <Action>custom_view_client_details</Action> <!-- ADD THIS ONE -->
            </Listener>
        </Listeners>
        <XType>vspace-docs</XType>
        <Columns checkBoxModel="true" formatSet="default">
            <ColumnSet ID="Customer_Grid_ColSet_All" type="all"/>
            <ColumnSet ID="Customer_Grid_ColSet_Default" type="default"/>
        </Columns>
    </Grid>
```

And finally, we have to enable the default value injection for the details search template:
```xml
    <SearchTemplate ID="Customer_Correspondence_Search">
        <DataProviderId>Customer_repository</DataProviderId>
        <Description>Search all the "Correspondence" documents for selected customer</Description>
        <Comment>Enter search criteria</Comment>
        <Autoexecute>false</Autoexecute>
        <Hidden>false</Hidden>
        <Operation dataProviderId="Customer_repository" type="search">
            <OperationProperties>
                <Property ID="query" type="FIRST">
                    <SecuredValue>
                        <Value>SELECT {Macro.ResultProperties} FROM Correspondence WHERE This INFOLDER '/Customers' AND {Macro.QueryCriterion}</Value>
                    </SecuredValue>
                </Property>
                <Property ID="objectStore" type="FIRST">
                    <SecuredValue>
                        <Value>${documents.object_store}</Value>
                    </SecuredValue>
                </Property>
            </OperationProperties>
        </Operation>
        <SortFields/>
        <Criteria>
            <Criterion>
                <FieldName>CustomerName</FieldName>
                <Type>string</Type>
                <Operator>eq</Operator>
                <Required>false</Required>
                <Hidden>false</Hidden> <!-- hidden -->
                <Readonly>false</Readonly>
                <MultiValue>false</MultiValue>
                <DefaultValue>{Level.masterProperty}</DefaultValue> <!-- ADD THIS ONE -->
            </Criterion>
        </Criteria>
        <Grid ID="CustomerCorrespondence_Grid"/>
    </SearchTemplate>
```
Here `{Level.masterProperty}` placeholder addresses the field from the context object we pass in the action handler below.

Rebuild the application to see the final result for this step: 

![Screenshot - Master-details](../images/unity-7-customization-tutorial/screenshot-step3-masterdetails2.png)

As you can see, we have a fully-functioning master-details search template tab.
At the same time we have `State`, `City`, and `PhoneNumber` fields. In order to let users fill them efficiently,
we should implement an appropriate server-side dictionary at first. 

# Step 4: Creating custom data service and REST API

On this step we are going to create a data service that will implement a set of necessary operations to work with
free data sets:
* [US States with codes](https://github.com/jasonong/List-of-US-States/blob/master/states.csv)
* [US Cities with area codes](https://github.com/ravisorg/Area-Code-Geolocation-Database/blob/master/us-area-code-cities.csv)

Project template provides a `custom-services` module that allows to add any server-side code using Spring 4 including
general beans and MVC capabilities. 

## Implementing data service
At first, we should introduce model objects and appropriate interface declaring all the operations we need.

[`com.intelective.sample.model.State`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/model/State.java)

```java
package com.intellective.sample.model;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class State {

    private final String stateCode;
    private final String displayValue;
    private final Map<String,City> cities;

    public State(String stateCode, String displayValue) {
        this.stateCode = stateCode;
        this.displayValue = displayValue;
        this.cities = new HashMap<>();
    }

    public String getStateCode() {
        return stateCode;
    }

    public String getDisplayValue() {
        return displayValue;
    }

    public Map<String, City> cities() {
        return cities;
    }

    @Override
    public String toString() {
        return "State{" +
                "stateCode='" + stateCode + '\'' +
                ", displayValue='" + displayValue + '\'' +
                '}';
    }

}
```

[`com.intelective.sample.model.City`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/model/City.java)

```java
package com.intellective.sample.model;

import java.util.LinkedList;
import java.util.List;

public class City {

    private String name;
    private List<String> areaCodes = new LinkedList<>();

    public City(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public List<String> areaCodes() {
        return areaCodes;
    }

    @Override
    public String toString() {
        return "City{" +
                "name='" + name + '\'' +
                ", areaCodes='" + areaCodes.toString() + '\'' +
                '}';
    }

}
```

[`com.intelective.sample.service.StatesCitiesDictionaryService`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/service/StatesCitiesDictionaryService.java)

```java
package com.intellective.sample.service;

import com.intellective.sample.model.State;

import java.util.Collection;

public interface StatesCitiesDictionaryService {

    /**
     * Fetch full list of states
     * @return
     */
    Collection<State> listStates();

    /**
     * Find a state using its code
     * @param stateCode code of a state
     * @return an object representing a state or null if it doesn't exist
     */
    State getStateByCode(String stateCode);

}
```
During the further development you will see that we need only these 2 operations on the service layer.

The next possible step, before service implementation, is creating tests:

[`com.intellective.sample.service.StatesCitiesDictionaryServiceTest`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/test/java/com/intellective/sample/service/StatesCitiesDictionaryServiceTest.java)

```java
package com.intellective.sample.service;

import com.intellective.sample.model.State;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Collection;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
        "classpath:configuration/custom-services.xml"
})
public class StatesCitiesDictionaryServiceTest {

    @Autowired
    StatesCitiesDictionaryService statesCitiesDictionaryService;

    @Test
    public void listStates() {
        Collection<State> states = statesCitiesDictionaryService.listStates();

        assertNotNull(states);
        assertFalse(states.isEmpty());
        assertEquals(states.size(), 51);

        State state = states.iterator().next();
        assertState(state);
    }

    @Test
    public void getStateByCode() {
        State california = statesCitiesDictionaryService.getStateByCode("CA");
        assertNotNull(california);
        assertNotNull(california.getDisplayValue());
        assertState(california);

        State inexistent = statesCitiesDictionaryService.getStateByCode("AA");
        assertNull(inexistent);
    }

    private void assertState(State state) {
        assertNotNull(state.getStateCode() != null);
        assertNotNull(state.getDisplayValue() != null);
        assertFalse(state.cities().isEmpty());
    }

}
```

These tests assert the core behaviour of the service implementation. Now we will create an implementation relying on this
test.

At first, download the data sets ant put them in the resource directory of the `custom-services` module:
[`custom-services/src/main/resources/states.csv`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/resources/states.csv)

```
"State","Abbreviation"
"Alabama","AL"
"Alaska","AK"
"Arizona","AZ"
"Arkansas","AR"
"California","CA"
...
```

[`custom-services/src/main/resources/us-area-code-cities.csv`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/resources/us-area-code-cities.csv)

 ```
201,Bayonne,"New Jersey",US,40.66871,-74.11431
201,Bergenfield,"New Jersey",US,40.9276,-73.99736
201,"Cliffside Park","New Jersey",US,40.82149,-73.98764
201,Englewood,"New Jersey",US,40.89288,-73.97264
201,"Fair Lawn","New Jersey",US,40.94038,-74.13181
...
``` 

We are going to use the following library to parse CSV data sets:

```xml
    <dependency>
        <groupId>com.fasterxml.jackson.dataformat</groupId>
        <artifactId>jackson-dataformat-csv</artifactId>
        <version>2.5.3</version>
    </dependency>
```
Add it in the parent `pom.xml` (into `<dependencyManagement>`) and in the `custom-services/pom.xml` (into `<dependencies>`).

Everything is ready to implement a service.

[`com.intellective.sample.service.DefaultStatesCitiesDictionaryServiceImpl`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/service/DefaultStatesCitiesDictionaryServiceImpl.java):

```java
package com.intellective.sample.service;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvParser;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.intellective.sample.model.City;
import com.intellective.sample.model.State;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DefaultStatesCitiesDictionaryServiceImpl implements StatesCitiesDictionaryService {

    private static final Logger logger = LoggerFactory.getLogger(DefaultStatesCitiesDictionaryServiceImpl.class);
    private static final String AREA_CODE_FILENAME = "us-area-code-cities.csv";
    private static final String STATES_FILENAME = "states.csv";

    private Map<String,State> statesByCode = new HashMap<>();
    private Map<String,State> statesByName = new HashMap<>();

    public DefaultStatesCitiesDictionaryServiceImpl() {
        logger.info("Initializing default area codes dictionary");

        logger.info("Reading states");
        for (String[] stateRecord : readData(STATES_FILENAME, true)) {
            logger.debug(Arrays.toString(stateRecord));
            State state = new State(stateRecord[1], stateRecord[0]);
            statesByCode.put(state.getStateCode(), state);
            statesByName.put(state.getDisplayValue(), state);
        }

        logger.info("Reading cities data");
        for (String[] cityRecord : readData(AREA_CODE_FILENAME, false)) {
            logger.debug(Arrays.toString(cityRecord));
            State state = statesByName.get(cityRecord[2]);
            if (state != null) {
                City city = state.cities().getOrDefault(cityRecord[1], new City(cityRecord[1]));
                city.areaCodes().add(cityRecord[0]);
                state.cities().put(city.getName(), city);
            } else logger.warn("State not found by name {}", cityRecord[2]);
        }

        logger.info("Done initializing area code dictionary. We have {} states loaded.", statesByName.values().size());
    }

    private List<String[]> readData(String fileName, boolean skipFirst) {
        try {
            CsvMapper mapper = new CsvMapper();
            CsvSchema bootstrapSchema = CsvSchema.emptySchema().withSkipFirstDataRow(skipFirst);
            mapper.enable(CsvParser.Feature.WRAP_AS_ARRAY);
            MappingIterator<String[]> readValues =
                    mapper.reader(String[].class).with(bootstrapSchema).readValues(new ClassPathResource(fileName).getInputStream());
            return readValues.readAll();
        } catch (Exception e) {
            logger.error("Error occurred while loading object list from file " + fileName, e);
            return Collections.emptyList();
        }
    }

    @Override
    public Collection<State> listStates() {
        return statesByCode.values();
    }

    @Override
    public State getStateByCode(String stateCode) {
        return stateCode != null ? statesByCode.get(stateCode) : null;
    }
}
```

Here we read states at first, putting them in two maps. After that, we read cities and put them in appropriate states. Run test to ensure the implementation we made works as expected.

To enable Spring managing new beans make sure you have correct package name in the [`configuration\custom-services.xml`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/resources/configuration/custom-services.xml) file.

## REST Endpoint
We are going to publish our data as REST-like service. However, it will only read data, not change it. 
* `GET /1.0/states/{stateCode}` – return `State` object state with information about all the cities;
* `GET /1.0/states/{stateCode}/{cityName}` – return `City` object state with information about the city;
* `POST /1.0/states/{stateCode}/{cityName}/validate` – validates the code posted in the request body against the `State` and the `City` provided.

[`com.intellective.sample.controller.StatesController`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/controller/StatesController.java)

```java
package com.intellective.sample.controller;

import com.intellective.sample.model.City;
import com.intellective.sample.model.OperationResult;
import com.intellective.sample.model.State;
import com.intellective.sample.service.StatesCitiesDictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/1.0/states")
public class StatesController {

    @Autowired
    private StatesCitiesDictionaryService statesCitiesDictionaryService;

    @GetMapping
    public Collection<State> listStates() {
        return statesCitiesDictionaryService.listStates();
    }

    @GetMapping("/{stateCode}")
    public State getState(@PathVariable String stateCode) {
        State state = statesCitiesDictionaryService.getStateByCode(stateCode);
        if (state == null) {
            throw new StateOrCityNotFoundException("State not found by code " + stateCode);
        }
        return state;
    }

    @GetMapping("/{stateCode}/{cityName}")
    public City getCity(@PathVariable String stateCode, @PathVariable String cityName) {
        State state = getState(stateCode);
        City city = state.cities().get(cityName);
        if (city == null) {
            throw new StateOrCityNotFoundException("City not found by name " + cityName);
        }
        return city;
    }

    @PostMapping("/{stateCode}/{cityName}/validate")
    public OperationResult validateCode(@PathVariable String stateCode, @PathVariable String cityName, @RequestParam String areaCode) {
        try {
            City city = getCity(stateCode, cityName);
            boolean valid = city.areaCodes().stream().anyMatch(s -> areaCode.equals(s));
            return OperationResult.success(Collections.singletonMap("valid", valid));
        } catch (StateOrCityNotFoundException e) {
            return OperationResult.error(e.getMessage());
        }
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    public static class StateOrCityNotFoundException extends RuntimeException {
        public StateOrCityNotFoundException(String message) {
            super(message);
        }
    }

}
```

In the validation operation we use the `com.intellective.sample.model.OperationResult` wrapper:

```java
package com.intellective.sample.model;

import java.util.Collections;
import java.util.Map;

public class OperationResult {

	public static OperationResult success(Map<String, Object> data) {
		return new OperationResult().withPayload(data);
	}

	private OperationResult withPayload(Map<String, Object> data) {
		this.payload = Collections.unmodifiableMap(data);
		return this;
	}

	public static OperationResult error(String errorMessage) {
		return new OperationResult(errorMessage);
	}
	
	private boolean success = true;
	private String errorMessage;
	private Map<String, Object> payload;

	public OperationResult() {
	}

	public OperationResult(String errorMessage) {
		this.success = false;
		this.errorMessage = errorMessage;
	}

	public boolean isSuccess() {
		return success;
	}

	public Map<String, Object> getPayload() {
		return payload;
	}

	public String getErrorMessage() {
		return errorMessage;
	}
}
```

Don't forget about a test.

[`com.intellective.sample.controller.StatesControllerTest`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/test/java/com/intellective/sample/controller/StatesControllerTest.java)

```java
package com.intellective.sample.controller;

import com.intellective.sample.model.City;
import com.intellective.sample.model.OperationResult;
import com.intellective.sample.model.State;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
        "classpath:configuration/custom-services.xml"
})
public class StatesControllerTest {

    @Autowired
    StatesController statesController;

    @Test
    public void getState() {
        try {
            State state = statesController.getState("CA");
            assertNotNull(state);
            assertEquals("California", state.getDisplayValue());
            assertFalse(state.cities().isEmpty());
        } catch (StatesController.StateOrCityNotFoundException notFoundException) {
            fail();
        }

        try {
            State state = statesController.getState("XX");
            fail();
        } catch (StatesController.StateOrCityNotFoundException notFoundException) {
            // expected exception
        }
    }

    @Test
    public void getCity() {
        try {
            City city = statesController.getCity("CA", "Irvine");
            assertNotNull(city);
            assertEquals("949", city.areaCodes().get(0));
        } catch (StatesController.StateOrCityNotFoundException notFoundException) {
            fail();
        }

        try {
            City city = statesController.getCity("CA", "Exception Town");
            fail();
        } catch (StatesController.StateOrCityNotFoundException notFoundException) {
            // expected exception
        }
    }

    @Test
    public void validateCode() {
        OperationResult r = statesController.validateCode("CA", "Irvine", "949");
        assertTrue(r.isSuccess() && r.getPayload().get("valid").equals(true));

        r = statesController.validateCode("CA", "Irvine", "999");
        assertTrue(r.isSuccess() && r.getPayload().get("valid").equals(false));

        r = statesController.validateCode("XX", "YYYY", "111");
        assertFalse(r.isSuccess());
    }
}
```

Rebuild the application and ensure everything's working fine. You can call for the custom API using browser,
curl, Postman, or SoapUI:
* GET `http://localhost:9080/custom-webapp/custom-api/1.0/states`
* GET `http://localhost:9080/custom-webapp/custom-api/1.0/states/CA`
* GET `http://localhost:9080/custom-webapp/custom-api/1.0/states/CA/Irvine`
* POST `http://localhost:9080/custom-webapp/custom-api/1.0/states/CA/Irvine` with a body of `{ 'areaCode' : '949' }`

Note that you'll have to add at least 2 HTTP headers to your request:
 - `Authorization: Basic <BASIC_AUTH_TOKEN>` (see https://en.wikipedia.org/wiki/Basic_access_authentication).
 - `Referer: http://localhost:9080` (to pass-through XSS attack filtering).

We have a running Spring data service, and the REST API we may call from the client side.
On the next step we are going to use it implementing selectors for `State` and `City` fields, as well as
custom validation of the area code for the `PhoneNumber` field. 

# Step 5: Implementing custom selectors and criteria field validation

On this step we are going to use Spring data service and REST endpoint to implement field selectors (for `State` and 
`City`) and validation (`PhoneNumber`).

## Selectors
We are going to integrate our data service as Unity selectors and apply them for corresponding fields for Customer search template (master).

Implementing state selector:

[`com.intellective.sample.selector.UsStateSelector`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/selector/UsStateSelector.java)

```java
package com.intellective.sample.selector;

import com.intellective.sample.service.StatesCitiesDictionaryService;
import com.vegaecm.vspace.exception.VuRuntimeException;
import com.vegaecm.vspace.plugins.PluginDescriptor;
import com.vegaecm.vspace.plugins.PluginManager;
import com.vegaecm.vspace.selectors.AbstractCacheSelector;
import com.vegaecm.vspace.selectors.SelectorItem;
import com.vegaecm.vspace.utils.ApplicationContextHolder;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class UsStateSelector extends AbstractCacheSelector {

    private StatesCitiesDictionaryService getStatesCitiesDictionaryService() {
        ApplicationContext applicationContext =
                WebApplicationContextUtils.getWebApplicationContext(ApplicationContextHolder.getApplicationContext());
        return applicationContext.getBean(StatesCitiesDictionaryService.class);
    }

    @Override
    protected List<SelectorItem> readData(String s, Map<String, Object> map) throws VuRuntimeException {
        return getStatesCitiesDictionaryService().listStates().stream()
                .map(state -> new SelectorItem(state.getDisplayValue(), state.getStateCode()))
                .collect(Collectors.toList());
    }

    @Override
    public PluginDescriptor getDescriptor() {
        return new PluginDescriptor(
                "UsStateSelector",
                PluginManager.Type.SELECTOR_PLUGIN,
                "Static Selector",
                UsStateSelector.class.getName()
        );
    }

    @Override
    protected boolean timeoutExpire() {
        return false;
    }
}
```
Due to the inheritance of `AbstractCacheSelector` this selector loads the data using the service during the first call
and cache the items. As soon as `timeoutExpire()` returns `false`, this cache never expires which is 
absolutely appropriate (changing the number of states deserves server restart).

A simple test for this selector:

[`com.intellective.sample.selector.UsStateSelectorTest`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/test/java/com/intellective/sample/selector/UsStateSelectorTest.java)

```java
package com.intellective.sample.selector;

import com.vegaecm.vspace.model.VarHandler;
import com.vegaecm.vspace.selectors.Selector;
import com.vegaecm.vspace.selectors.SelectorResult;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.HashMap;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = {
		"classpath:configuration/custom-services.xml"
})
public class UsStateSelectorTest extends BaseSelectorTest {

    @Test
    public void getData() {
    	Selector selector = configHolder.getSelectorHolder().getSelector("UsStateSelector");
        Assert.assertNotNull(selector);
        SelectorResult result =
                selector.getData(null, new VarHandler(), 0, Integer.MAX_VALUE, false, new HashMap<>());
        assertEquals(51, result.getTotalCount());
        assertTrue(result.getValues().stream().anyMatch(selectorItem -> selectorItem.getValue().equals("CA")));
    }
}
```

It uses the following base unit test (we are going to use it for city selector test as well):

[`com.intellective.sample.selector.BaseSelectorTest`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/test/java/com/intellective/sample/selector/BaseSelectorTest.java)

```java
package com.intellective.sample.selector;

import com.vegaecm.vspace.TestUtils;
import com.vegaecm.vspace.config.ConfigHolder;
import com.vegaecm.vspace.config.manager.ConfigManager;
import com.vegaecm.vspace.config.manager.ConfigManagerFactory;
import com.vegaecm.vspace.i18n.I18nDataHolder;
import com.vegaecm.vspace.i18n.Locale;
import com.vegaecm.vspace.settings.UserSettings;
import com.vegaecm.vspace.utils.ApplicationContextHolder;
import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.rules.TestName;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.context.WebApplicationContext;

/**
 * Base class for selector tests
 */
public class BaseSelectorTest {

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	protected ConfigHolder configHolder;

    @Autowired
    protected WebApplicationContext applicationContext;
    
    @Rule 
    public TestName testName = new TestName();

    @Before
    public void setUp() throws Exception {
		TestUtils.initAuthContext();
		ClassPathResource unityConfigurationResource = new ClassPathResource("unity_config.xml");
		ConfigManager configManager = ConfigManagerFactory.getConfigManager(unityConfigurationResource.getURI().toString());
		configHolder = new ConfigHolder(configManager, true);
		
        ApplicationContextHolder.setApplicationContext(applicationContext.getServletContext());
		
        I18nDataHolder.init("vspace");
        UserSettings userSettings = UserSettings.get();
        userSettings.setLocale(new Locale("en_US"));
        UserSettings.set(userSettings);
    }

    @After
    public void tearDown() {
        ApplicationContextHolder.setApplicationContext(null);
    }
}
```

To run these tests we have to have the Unity configuration. Place it into `custom-services/src/test/resources/unity_config.xml`
and declare the selector at `/Configuration/Selectors`:
```xml
    <Selector ID="UsStateSelector">
      <ClassName>com.intellective.sample.selector.UsStateSelector</ClassName>
      <Description/>
    </Selector>
```

Now, we are going to implement selector for the `City` field. It should support filtering by the selected `State`. 

[`com.intellective.sample.selector.UsCitySelector`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/selector/UsCitySelector.java)

```java
package com.intellective.sample.selector;

import com.google.common.base.Preconditions;
import com.intellective.sample.model.State;
import com.intellective.sample.service.StatesCitiesDictionaryService;
import com.vegaecm.vspace.exception.VuRuntimeException;
import com.vegaecm.vspace.model.Properties;
import com.vegaecm.vspace.model.VarHandler;
import com.vegaecm.vspace.plugins.PluginDescriptor;
import com.vegaecm.vspace.plugins.PluginManager;
import com.vegaecm.vspace.selectors.AbstractCacheSelector;
import com.vegaecm.vspace.selectors.SelectorItem;
import com.vegaecm.vspace.selectors.SelectorResult;
import com.vegaecm.vspace.utils.ApplicationContextHolder;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class UsCitySelector extends AbstractCacheSelector {

    private StatesCitiesDictionaryService getStatesCitiesDictionaryService() {
        ApplicationContext applicationContext =
                WebApplicationContextUtils.getWebApplicationContext(ApplicationContextHolder.getApplicationContext());
        return applicationContext.getBean(StatesCitiesDictionaryService.class);
    }

    @Override
    public SelectorResult getData(String filter, VarHandler varHandler,
                                  Integer start, Integer limit,
                                  boolean isFilterEntry, Map<String, Object> properties) throws VuRuntimeException {
        // expose This.${StateCodeProperty} context scope value at properties
        Map<String, Object> localProperties = null != properties ? properties : new HashMap<>();
        String stateCodePropertyName = (String) this.properties.get("StateCodeProperty");
        Preconditions.checkState(stateCodePropertyName != null, "'StateCodeProperty' selector property is not set");
        localProperties.put("StateCodeValue", varHandler.replace("{This." + stateCodePropertyName + "}"));
        return super.getData(filter, varHandler, start, limit, isFilterEntry, localProperties);
    }

    @Override
    protected List<SelectorItem> readData(String resolvedQuery, Map<String, Object> properties) throws VuRuntimeException {
        String stateCodePropertyValue = (String) properties.get("StateCodeValue");
        State state = getStatesCitiesDictionaryService().getStateByCode(stateCodePropertyValue);
        return state != null ? state.cities().values().stream()
                .map(city -> new SelectorItem(city.getName(), city.getName()))
                .collect(Collectors.toList()) : Collections.emptyList();
    }

    @Override
    public PluginDescriptor getDescriptor() {
        return new PluginDescriptor(
                "UsCitySelector",
                PluginManager.Type.SELECTOR_PLUGIN,
                "Static Selector",
                UsCitySelector.class.getName()
        );
    }

    @Override
    protected boolean timeoutExpire() {
        return true;
    }

}
```

It reads a state code value from the input properties and uses the appropriate method of the service to get the state
object with a list of cities within. Unlike the state selector above, we should disable cache here as soon as it doesn't
respect the input parameter (state code). That's why `timeoutExpire()` returns `true` all the time.

We have to create a test for this selector as well:

[`com.intellective.sample.selector.UsCitySelectorTest`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/test/java/com/intellective/sample/selector/UsCitySelectorTest.java)

```java
package com.intellective.sample.selector;

import com.vegaecm.vspace.model.MapVarScopeImpl;
import com.vegaecm.vspace.model.VarHandler;
import com.vegaecm.vspace.model.VarScope;
import com.vegaecm.vspace.selectors.Selector;
import com.vegaecm.vspace.selectors.SelectorResult;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.Collections;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = {
		"classpath:configuration/custom-services.xml"
})
public class UsCitySelectorTest extends BaseSelectorTest {

    @Test
    public void getData() throws Exception {
    	Selector selector = configHolder.getSelectorHolder().getSelector("UsCitySelector");
        Assert.assertNotNull(selector);

        // no state selected
        VarHandler varHandler = new VarHandler();
        SelectorResult result =
        		selector.getData(null, varHandler, 0, Integer.MAX_VALUE, false, null);
        Assert.assertEquals(0, result.getTotalCount());

        // state = CA
        varHandler = new VarHandler();
        varHandler.getHolder().registerScope(VarScope.THIS, new MapVarScopeImpl(Collections.singletonMap("StateCode", "CA")));
        result = selector.getData(null, varHandler, 0, Integer.MAX_VALUE, false, null);
        Assert.assertEquals(297, result.getTotalCount());

        // state = NY
        varHandler = new VarHandler();
        varHandler.getHolder().registerScope(VarScope.THIS, new MapVarScopeImpl(Collections.singletonMap("StateCode", "NY")));
        result = selector.getData(null, varHandler, 0, Integer.MAX_VALUE, false, null);
        Assert.assertEquals(84, result.getTotalCount());

        // non-existent state
        varHandler = new VarHandler();
        varHandler.getHolder().registerScope(VarScope.THIS, new MapVarScopeImpl(Collections.singletonMap("StateCode", "ZZ")));
        result = selector.getData(null, varHandler, 0, Integer.MAX_VALUE, false, null);
        Assert.assertEquals(0, result.getTotalCount());
    }
}
``` 

And the corresponding piece of configuration for testing. 
Copy your configuration to `custom-services/src/test/resources/unity_config.xml` and then add the following:
```xml
    <Selector ID="UsCitySelector">
      <ClassName>com.intellective.sample.selector.UsCitySelector</ClassName>
      <Description/>
      <Property ID="StateCodeProperty" value="State"/>
    </Selector>
```

Run the tests to ensure everything works fine. After that, move those pieces of configuration into the main configuartion
[`custom-config/src/main/resources/unity/unity_config.xml`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-config/src/main/resources/unity/unity_config.xml).

Here we are ready to apply selectors to fields:

```xml
    <Criterion>
        <FieldName>State</FieldName>
        <Comment>at least 2 characters are required</Comment>
        <Type>string</Type>
        <Operator>eq</Operator>
        <Required>false</Required>
        <Hidden>false</Hidden>
        <Readonly>false</Readonly>
        <MultiValue>false</MultiValue>
        <MinLength>2</MinLength>
        <MaxLength>64</MaxLength>
        <SelectorId>UsStateSelector</SelectorId> <!-- ADD THIS -->
    </Criterion>  
    <Criterion>
        <FieldName>City</FieldName>
        <Comment>at least 2 characters are required</Comment>
        <Type>string</Type>
        <Operator>eq</Operator>
        <Required>false</Required>
        <Hidden>false</Hidden>
        <Readonly>false</Readonly>
        <MultiValue>false</MultiValue>
        <MinLength>2</MinLength>
        <MaxLength>64</MaxLength>
        <Linked>State</Linked>                   <!-- AND THIS -->
        <SelectorId>UsCitySelector</SelectorId>  <!-- AND THIS -->
    </Criterion>
```
We assign selectors, so our fields will get lookups automatically. 
Also, we declare the second one as dependent in a way that selected `State` goes as an input for selector values for `City`.

Rebuild the application and see how it works.

![Screenshot - Selectors](../images/unity-7-customization-tutorial/screenshot-step5-selectors.png)

## Criteria validation 

We have the “Phone number” field. So, we can validate the entered value using the area code for the selected state/city 
using the REST API we have already implemented.

![Screenshot - Validation 1](../images/unity-7-customization-tutorial/screenshot-step5-validation1.png)

Implementing the client-side validator.

[`custom-webapp/src/main/webapp/js/custom/validation/UsPhone.js`](custom-webapp/src/main/webapp/js/custom/validation/UsPhone.js)

```javascript
Ext.define('Override.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',

    UsPhone: function (value, field) {
        if (this.UsPhoneRe.test(value)) {
            Ext.defer(this.validateUsPhoneAreaCode, 10, this, [value, field]); // async validation
            return true;
        }
        return false;
    },

    validateUsPhoneAreaCode: function (phoneNumber, field) {
        var me = this;
        var stateCode =
            field.up('search-template-criteria-form').getFieldNamesAndValues().State;
        var cityName =
            field.up('search-template-criteria-form').getFieldNamesAndValues().City;
        var areaCode =
            0 === phoneNumber.indexOf('+') ? phoneNumber.substr(3, 3)
                : phoneNumber.substr(0, 3);

        if (stateCode && cityName) {
            Ext.Ajax.request({
                url: 'custom-api/1.0/states/' + encodeURIComponent(stateCode) + '/' + encodeURIComponent(cityName) + '/validate',
                method: 'POST',
                params: {
                    areaCode: areaCode
                },

                success: function (response) {
                    var result = Ext.decode(response.responseText, true);
                    if (null != result) {
                        if (result.success) {
                            if (result.payload.valid) {
                                field.clearInvalid();
                            } else {
                                field.markInvalid(me.UsPhoneAreaCodeInvalidText);
                            }
                        }
                    } else {
                        Ext.Msg.alert('Warning', 'Invalid server response when validating US phone area code. Response: ' + response.responseText);
                    }
                },

                failure: function (response) {
                    Ext.Msg.alert('Failure', 'Server-side failure with status code ' + response.status);
                }
            });
        }
    },

    UsPhoneRe: /^(\+1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/,
    UsPhoneText: 'Expected format is +1 XXX-YYY-YYYY where XXX is the valid US area code',
    UsPhoneAreaCodeInvalidText: 'The area code should match the selected state',
    UsPhoneMask: /[0-9\+\-\s]/i
});
``` 

Here we combine a client-side validation (regexp) with server-side call. 
When the entered value satisfies the regexp, we extract the area code from the string, also get selected `State` and `City`, and
call the API (do POST at `/custom-api/1.0/states/{stateCode}/{cityName}/validate`). Marking the field validation
in order what's the result.

We shouldn't forget to add a new source into `wro-custom.xml`:

```xml
<groups xmlns="http://www.isdc.ro/wro"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.isdc.ro/wro wro.xsd">

    <!-- Customization group -->
    <group name="customization">
        <js>/js/custom/tab/LinkedSearchTemplatesTab.js</js>
        <js>/js/custom/actions/LinkedSearchTemplatesTabActions.js</js>
        <js>/js/custom/validation/UsPhone.js</js>   <!-- ADD THIS ONE -->
        <css>/styling/overrides/sample-common.css</css>
    </group>
    <!-- END: Customization group -->

</groups>
```

Edit the configuration to enable validation for the criteria:

```xml
    <Criterion>
        <FieldName>PhoneNumber</FieldName>
        <Comment>+1 XXX-YYY-YYYY</Comment>
        <Type>string</Type>
        <Operator>eq</Operator>
        <Required>false</Required>
        <Hidden>false</Hidden>
        <Readonly>false</Readonly>
        <MultiValue>false</MultiValue>
        <VType>UsPhone</VType> <!-- ADD THIS ONE -->
    </Criterion>
```

Test and see how it works. Use browser developer tool to see the network interaction (calling for the validation API).

Application is getting more and more convenient for users. However, we are still getting the state codes in the
search result set. Although for our case it's not so critical (state codes are well-known by the most of the users),
it is a very common requirement to transform keys to display values.

# Step 6: Altering search results on the server-side 

Our task for this step is to alter the response of existing search template endpoint by changing
state codes on corresponding display values. The use-case for this approach is extremely high. However, we
should always consider a performance rate of this procedure.

## Altering grid data
At first, we should create a wrapper that accumulates server response body and allows to return it as a String. 
It is necessary to parse JSON response.

[`com.intellective.sample.web.ByteResponseWrapper`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/web/ByteResponseWrapper.java)

```java
package com.intellective.sample.web;

import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

/**
 * Wrapper for response. Allows to accumulate and return data as String
 */
public class ByteResponseWrapper extends HttpServletResponseWrapper {
    private ByteArrayServletOutputStream wrapOutputStream = null;
    private PrintWriter printWriter = null;

    public ByteResponseWrapper(HttpServletResponse response) {
        super(response);
    }

    public void close() throws IOException {
        if (this.printWriter != null) {
            this.printWriter.close();
        }

        if (this.wrapOutputStream != null) {
            this.wrapOutputStream.close();
        }
    }

    /**
     * Flush OutputStream or PrintWriter
     *
     * @throws IOException
     */
    @Override
    public void flushBuffer() throws IOException {
        if (this.printWriter != null) {
            this.printWriter.flush();
        }

        IOException exception1 = null;
        try {
            if (this.wrapOutputStream != null) {
                this.wrapOutputStream.flush();
            }
        } catch (IOException e) {
            exception1 = e;
        }

        IOException exception2 = null;
        try {
            super.flushBuffer();
        } catch (IOException e) {
            exception2 = e;
        }

        if (exception1 != null) throw exception1;
        if (exception2 != null) throw exception2;
    }

    @Override
    public ServletOutputStream getOutputStream() throws IOException {
        if (printWriter != null) {
            throw new IllegalStateException(
                    "PrintWriter obtained already - cannot get OutputStream");
        }
        if (wrapOutputStream == null) {
            wrapOutputStream = new ByteArrayServletOutputStream();
        }
        return wrapOutputStream;
    }

    @Override
    public PrintWriter getWriter() throws IOException {
        if (printWriter == null && wrapOutputStream != null) {
            throw new IllegalStateException(
                    "OutputStream obtained already - cannot get PrintWriter");
        }
        if (this.printWriter == null) {
            wrapOutputStream = new ByteArrayServletOutputStream();
            printWriter =
                    new PrintWriter(new OutputStreamWriter(wrapOutputStream,
                            getResponse().getCharacterEncoding()));
        }
        return this.printWriter;
    }

    /**
     * Returns the response data as String
     *
     * @return String with the response
     * @throws IOException
     */
    public String getData() throws IOException {
        return null != wrapOutputStream ? wrapOutputStream.toString(getResponse().getCharacterEncoding()) : null;
    }

    class ByteArrayServletOutputStream extends ServletOutputStream {

        private ByteArrayOutputStream wrapOutputStream;

        public ByteArrayServletOutputStream() throws IOException {
            super();
            this.wrapOutputStream = new ByteArrayOutputStream();
        }

        @Override
        public void close() throws IOException {
            this.wrapOutputStream.close();
        }

        @Override
        public void flush() throws IOException {
            this.wrapOutputStream.flush();
        }

        @Override
        public void write(byte b[]) throws IOException {
            this.wrapOutputStream.write(b);
        }

        @Override
        public void write(byte b[], int off, int len) throws IOException {
            this.wrapOutputStream.write(b, off, len);
        }

        @Override
        public void write(int b) throws IOException {
            this.wrapOutputStream.write(b);
        }

        @Override
        public boolean isReady() {
            return true;
        }

        @Override
        public void setWriteListener(WriteListener writeListener) {
            // NO-OP
        }

        public String toString(String charsetName) throws IOException {
            return wrapOutputStream.toString(charsetName);
        }
    }

}
```

Now, we can create a filter:

[`com.intellective.sample.web.StateCodeResolverFilter`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-services/src/main/java/com/intellective/sample/web/StateCodeResolverFilter.java)

```java
package com.intellective.sample.web;

import com.intellective.sample.model.State;
import com.intellective.sample.service.StatesCitiesDictionaryService;
import com.vegaecm.vspace.utils.ApplicationContextHolder;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Servlet filter replacing State field value (a code) by display value
 */
public class StateCodeResolverFilter implements Filter {

    private static Logger logger = LoggerFactory.getLogger(StateCodeResolverFilter.class);

    public static final String DEFAULT_STATE_PROPERTY_NAME = "State";
    public static final String DEFAULT_CITY_PROPERTY_NAME = "City";

    protected String stateCodePropertyName;
    protected String cityCodePropertyName;

    protected StatesCitiesDictionaryService statesCitiesDictionaryService;

    @Override
    public void init(FilterConfig filterConfig) {
        stateCodePropertyName = filterConfig.getInitParameter("stateCodePropertyName");
        if (null == stateCodePropertyName) {
            stateCodePropertyName = DEFAULT_STATE_PROPERTY_NAME;
        }
        cityCodePropertyName = filterConfig.getInitParameter("cityCodePropertyName");
        if (null == cityCodePropertyName) {
            cityCodePropertyName = DEFAULT_CITY_PROPERTY_NAME;
        }
        logger.info("Using state property: {} and city property: {}", stateCodePropertyName, cityCodePropertyName);

        ApplicationContext applicationContext =
                WebApplicationContextUtils.getWebApplicationContext(ApplicationContextHolder.getApplicationContext());
        statesCitiesDictionaryService = applicationContext.getBean(StatesCitiesDictionaryService.class);
    }

    @Override
    public void destroy() {
        // NO-OP
    }

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        // wrap the response and pass it further to catch the response afterwards
        ByteResponseWrapper responseWrapper = new ByteResponseWrapper((HttpServletResponse) response);
        chain.doFilter(request, responseWrapper);

        // get RAW JSON string
        String rawJsonString = responseWrapper.getData();
        logger.trace("Got RAW JSON: {}", rawJsonString);

        if (null != rawJsonString) {
            // Catch search operation response and replace the codes on display values.
            // Thus, on the search result grid, we should see display values.
            JSONObject jsonResult = new JSONObject(rawJsonString);
            JSONArray docs = jsonResult.optJSONArray("docs");
            if (null != docs) {
                for (int i = 0; i < docs.length(); i++) {
                    JSONObject documentProperties =
                            docs.getJSONObject(i).getJSONObject("properties");

                    // Replacing a State code to State display name
                    String stateCode = documentProperties.optString(stateCodePropertyName);
                    if (StringUtils.isNotEmpty(stateCode)) {
                        State state = statesCitiesDictionaryService.getStateByCode(stateCode);
                        if (state != null) {
                            documentProperties.put(stateCodePropertyName, state.getDisplayValue());
                        }
                    }
                }
            }
            jsonResult.write(response.getWriter());
        }
    }
}
```

Note that we are making this code safe. If it did not find a State by its code it wouldn’t change the value. So, it will work disregarding the data correctness.

Now, we should add it into `web.xml` of the resulting app. For that, we have the `custom_addon_web.xml` file:

[`custom-webapp/src/main/custom_addon_web.xml`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-webapp/src/main/custom_addon_web.xml)

```xml
<web-app>

    <filter-mapping>
        <filter-name>AuthFilter</filter-name>
        <url-pattern>/custom-api/*</url-pattern>
    </filter-mapping>

    <servlet>
        <servlet-name>custom-api-dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>/WEB-INF/configuration/custom-api-servlet.xml</param-value>
        </init-param>
        <init-param>
            <param-name>throwExceptionIfNoHandlerFound</param-name>
            <param-value>true</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>custom-api-dispatcher</servlet-name>
        <url-pattern>/custom-api/*</url-pattern>
    </servlet-mapping>

    <!-- ADD THIS PART -->
    <filter>
        <filter-name>StateCodeResolverFilter</filter-name>
        <filter-class>com.intellective.sample.web.StateCodeResolverFilter</filter-class>
        <init-param>
            <param-name>stateCodePropertyName</param-name>
            <param-value>State</param-value>
        </init-param>
        <init-param>
            <param-name>cityCodePropertyName</param-name>
            <param-value>City</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>StateCodeResolverFilter</filter-name>
        <url-pattern>/services/search/templates</url-pattern>
    </filter-mapping>
    <!-- END OF THE PART -->

</web-app>
```

Note that we apply the filter onto search template endpoint only.

Rebuild the application and see how it works.

![Screenshot - Altered response](../images/unity-7-customization-tutorial/screenshot-step6-alteredresponse.png)

Now, the only things left from the development side are actions for creating `Customers` and `Correspondence` documents. 

# Step 7: Implementing actions for creating Customers and Correspondence documents 

Finally, we need to allow our users to create new `Customers` and `Correspondence` documents for them easily. 
The first one will be created using configuration only. However, the second one will require some custom logic 
for passing selected Customer object. So, we will have to create a customized “Add document” action for that.

## Creating Customers 

At first, we are going to configure the action for adding new Customers. 
Note, that we use document class to store those objects so users have to attach some document
when they create it. From the business perspective, it might be a contract, a customer information card or anything
else.

Add the action to the solution configuration (at `/Configuration/Actions` node):
```xml
    <Action ID="add_CustomerInfo" multiselect="true" scope="single" type="toolbar">
            <Name>Add Customer Info</Name>
            <IconCls>action-add-document</IconCls>
            <Tooltip>Add Customer Info</Tooltip>
            <Uri/>
            <Parameters>
                <DocumentClass>
                    <RepositoryDataProvider ID="Customer_repository">
                        <Disabled>false</Disabled>
                        <DefaultValue>{value: "CustomerInfo", name: "CustomerInfo"}</DefaultValue>
                        <SelectorId>CustomerInfoClass</SelectorId>
                        <Roles/>
                    </RepositoryDataProvider>
              </DocumentClass>
            </Parameters>
            <CustomParameters>
                <ActionHandlerId>add_document</ActionHandlerId>
                <RepositoryDataProvider ID="Customer_repository">
                    <FolderPicker>
                        <Visible>false</Visible>
                        <TreeModel name="CEFoldersWithRoot">
                            <Properties>
                                <Property ID="FolderPath" value="/Customers"/>
                                <Property ID="DataProviderId" value="Customer_repository"/>
                                <Property ID="LazyLoading" value="true"/>
                            </Properties>
                        </TreeModel>
                    </FolderPicker>
                    <UpdateTemplateId>properties_template_add_customer_info</UpdateTemplateId>
                    <Fields>
                        <DocumentTitle>DocumentTitle</DocumentTitle>
                    </Fields>
                </RepositoryDataProvider>
            </CustomParameters>
    </Action>
```
Here we predefine a folder (“/Customers”) to file these documents in. Also, we need to create a single-valued selector 
for the document class (add it into the `/Configuration/Selectors` node):
```xml
    <Selector ID="CustomerInfoClass">
      <ClassName>com.vegaecm.vspace.selectors.XMLSelector</ClassName>
      <Description/>
      <Option name="CustomerInfo" value="CustomerInfo"/>
      <Property ID="RefreshTimeoutSec" value="86400"/>
    </Selector>
```

We define the update template with a set of fields we want users to fill when they create a record
(add it into the `/Configuration/UpdateTemplates` node):
```xml
    <UpdateTemplate ID="properties_template_add_customer_info">
       <UpdateItems>
          <UpdateItem>
             <FieldName>DocumentTitle</FieldName>
             <Type>string</Type>
             <ReadOnly>false</ReadOnly>
             <Required>true</Required>
          </UpdateItem>
          <UpdateItem>
             <FieldName>State</FieldName>
             <Type>string</Type>
             <ReadOnly>false</ReadOnly>
             <Required>true</Required>
            <SelectorId>UsStateSelector</SelectorId>
          </UpdateItem>
          <UpdateItem>
             <FieldName>City</FieldName>
             <Type>string</Type>
             <ReadOnly>false</ReadOnly>
             <Required>true</Required>
            <Linked>State</Linked>
            <SelectorId>UsCitySelector</SelectorId>
          </UpdateItem>
          <UpdateItem>
             <FieldName>PhoneNumber</FieldName>
             <Type>string</Type>
             <ReadOnly>false</ReadOnly>
             <Required>true</Required>
          </UpdateItem>
       </UpdateItems>
    </UpdateTemplate>
```
See that we are reusing custom selectors here as well. So, users will be selecting `State` and `City` 
exactly as they do it in search criteria. 

The only step left here is to add the action on the master grid toolbar:
```xml
<Grid ID="Customer_Grid" enableColumnReorder="false" groupSearchResults="false">
    <Toolbar>
        <Actions>
            <Action ID="add_CustomerInfo"/>  <!-- ADD THIS ONE -->
        </Actions>
    </Toolbar>
    <Listeners>
        <Listener ID="ClickColumn">
            <Action>custom_view_client_details</Action>
        </Listener>
    </Listeners>
    <XType>vspace-docs</XType>
    <Columns checkBoxModel="true" formatSet="default">
        <ColumnSet ID="Customer_Grid_ColSet_All" type="all"/>
        <ColumnSet ID="Customer_Grid_ColSet_Default" type="default"/>
    </Columns>
</Grid>
```

Reset and test the configuration.

![Screenshot - Add Customer](../images/unity-7-customization-tutorial/screenshot-step7-addcustomer.png)

## Creating Correspondence 

Next, we are going to extend the dialog component used for adding documents to make a process of creating 
`Correspondence` documents much easier for users. It catches the selected record, get the `CustomerName` field value
and pull it on the form. 

[`custom-webapp/src/main/webapp/js/custom/actions/AddCustomerCorrespondenceDialog.js`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-webapp/src/main/webapp/js/custom/actions/AddCustomerCorrespondenceDialog.js)

```javascript
Ext.define('custom.action.AddCustomerCorrespondenceDialog', {
    extend : 'VSpace.action.dialog.AddDialog',
    alias: 'widget.custom-action-AddCustomerCorrespondence-dialog',

    titleAutoFill: function () {
        this.callParent(arguments);

        var me = this;
        var customerName = this.nodeContext.CustomerName;
        var elements = Ext.select('#' + me.panelId + ' .criterion', true).elements;
        Ext.each(elements, function (element) {
            var input = element.component;
            if ('CustomerName' === element.component.name) {
                input.setValue(customerName);
                input.fireEvent('valueChanged', input, customerName, '');
            }
        });
    }
});
```

The action handler itself:

[`custom-webapp/src/main/webapp/js/custom/actions/AddCustomerCorrespondence.js`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-webapp/src/main/webapp/js/custom/actions/AddCustomerCorrespondence.js)

```javascript
VSpace.action.ActionHandler['add_CustomerCorrespondence'] = function(evt) {
   var linkedTemplatesTab = Ext.getCmp(evt.gridId).up('custom-linked-search-templates-tab');
   var masterTemplate = Ext.getCmp(linkedTemplatesTab.getId() + '-master-search-templates');
   if (masterTemplate && masterTemplate.config && !Ext.isEmpty(masterTemplate.config.detailsTempatePanelId)) {
		var detailsSearchTemplate = Ext.getCmp(masterTemplate.config.detailsTempatePanelId);
		if (detailsSearchTemplate && detailsSearchTemplate.cfg && detailsSearchTemplate.cfg.nodecontext) {
            if (Ext.isEmpty(detailsSearchTemplate.cfg.nodecontext.masterProperty)) {
                Ext.MessageBox.alert('', 'Please select Customer Info record');
                return;
            }

            var actionConfig = VSpace.UIDEF.getActionConfig(evt.actionId);
            if (!actionConfig) { //There is no such action, it is disabled probably .
                Ext.MessageBox.alert('', VSpace.action.UPDATE_PROPERTIES_DIALOG_NOT_CONFIGURED);
                return;
            }
    
            var providerId = evt.providerId ? evt.providerId : VSpace.UIDEF.getProviderId();
            var providerCustomParameters = actionConfig.customparameters[providerId];
            if (!providerCustomParameters) {
                Ext.MessageBox.alert('', VSpace.utils.i18n.localize('action.action-handler.message.no-custom-repository-section', 
                                                                    'There is no CustomParameters/RepositoryDataProvider/@ID={0} section for {1} action.', [providerId, evt.actionId]));
                return;
            }

            var dataProvider = null;
            var folderPath = null;
            var p = providerCustomParameters.folderpicker.treemodel.properties;
            for (var i = 0; i < p.length; i++) {
                if (p[i].id == 'FolderPath') {
                    folderPath = p[i].value;
                } else if (p[i].id == 'DataProviderId') {
                    dataProvider = p[i].value;
                }
            }
            Ext.apply(evt, {
                nodeContext: {
                   FolderPath: folderPath,
                   CustomerName: detailsSearchTemplate.cfg.nodecontext.masterProperty,
                   documentId: {
                       dataProviderId: dataProvider
                   }
                }
            });

            Ext.Function.pass(VSpace.action.ActionHandler.add_document, [evt], this)();
        }
    }
};
```
It reproduces the behaviour of the standard event handler but additionally passes the selected customer's name.

Adding new JS files in the `wro-custom.xml`:
```xml
<groups xmlns="http://www.isdc.ro/wro"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.isdc.ro/wro wro.xsd">

    <!-- Customization group -->
    <group name="customization">
        <js>/js/custom/tab/LinkedSearchTemplatesTab.js</js>
        <js>/js/custom/actions/LinkedSearchTemplatesTabActions.js</js>
        <js>/js/custom/validation/UsPhone.js</js>
        <js>/js/custom/actions/AddCustomerCorrespondence.js</js>        <!-- ADD THIS ONE -->
        <js>/js/custom/actions/AddCustomerCorrespondenceDialog.js</js>  <!-- AND THIS ONE -->

        <css>/styling/overrides/sample-common.css</css>
    </group>
    <!-- END: Customization group -->

</groups>
```

Adding the action into the configuration (`/Configuration/Actions`):
```xml
    <Action ID="add_CustomerCorrespondence" multiselect="true" scope="single" type="toolbar">
            <Name>Add Customer Correspondence</Name>
            <IconCls>action-add-document</IconCls>
            <Tooltip>Add Customer Correspondence</Tooltip>
            <Uri/>
            <Parameters>
                <DocumentClass>
                    <RepositoryDataProvider ID="Customer_repository">
                        <Disabled>false</Disabled>
                        <DefaultValue>{value: "Correspondence", name: "Correspondence"}</DefaultValue>
                        <SelectorId>CorrespondenceClass</SelectorId>
                        <Roles/>
                    </RepositoryDataProvider>
              </DocumentClass>
            </Parameters>
            <CustomParameters>
                <RepositoryDataProvider ID="Customer_repository">
                    <XType>widget.custom-action-AddCustomerCorrespondence-dialog</XType>
                    <FolderPicker>
                        <Visible>false</Visible>
                        <TreeModel name="CEFoldersWithRoot">
                            <Properties>
                                <Property ID="FolderPath" value="/Customers"/>
                                <Property ID="DataProviderId" value="Customer_repository"/>
                                <Property ID="LazyLoading" value="true"/>
                            </Properties>
                        </TreeModel>
                    </FolderPicker>
                    <UpdateTemplateId>properties_template_add_Correspondence</UpdateTemplateId>
                    <Fields>
                        <DocumentTitle>DocumentTitle</DocumentTitle>
                    </Fields>
                </RepositoryDataProvider>
            </CustomParameters>
    </Action>
```

Here we define the action, including the behavior for automatic selection of parent folder (`/Customers`).
We set document class (`Correspondence`) using the static selector with only one option by adding the 
following piece into `/Configuration/Selectors`:
```xml
<Selector ID="CorrespondenceClass">
    <ClassName>com.vegaecm.vspace.selectors.XMLSelector</ClassName>
    <Description/>
    <Option name="Correspondence" value="Correspondence"/>
    <Property ID="RefreshTimeoutSec" value="86400"/>
</Selector>
```

Also, we define an update template containing only fields we want our users to fill:
```xml
    <UpdateTemplate ID="properties_template_add_Correspondence">
        <UpdateItems>
            <UpdateItem>
                <FieldName>CustomerName</FieldName>
                <Type>string</Type>
                <ReadOnly>false</ReadOnly>
                <Required>true</Required>
            </UpdateItem>
            <UpdateItem>
                <FieldName>DocumentTitle</FieldName>
                <Type>string</Type>
                <ReadOnly>false</ReadOnly>
                <Required>true</Required>
            </UpdateItem>
        </UpdateItems>
    </UpdateTemplate>
```

Finally, we should add it to the details grid:

```xml
    <Grid ID="CustomerCorrespondence_Grid" enableColumnReorder="false" groupSearchResults="false">
        <Toolbar>
            <Actions>
                <Action ID="add_CustomerCorrespondence"/> <!-- ADD THIS ONE -->
            </Actions>
        </Toolbar>
        <Listeners/>
        <XType>vspace-docs</XType>
        <Columns checkBoxModel="true" formatSet="default">
          <ColumnSet ID="CustomerCorrespondence_Grid_ColSet_All" type="all"/>
          <ColumnSet ID="CustomerCorrespondence_Grid_ColSet_Default" type="default"/>
        </Columns>
    </Grid>
```

Rebuild and test the application.

![Screenshot - Add Correspondece 1](../images/unity-7-customization-tutorial/screenshot-step7-addcorrespondence1.png)

![Screenshot - Add Correspondece 2](../images/unity-7-customization-tutorial/screenshot-step7-addcorrespondence2.png)

At this point we covered all the requirements.
Although application development has been completed, we should build and stage the production version.

# Step 8: Staging the release using Docker image 

Customize the image name and tags (if necessary) at [`custom-docker/pom.xml`](https://github.com/intellectivelab/u7-samples-crm-app/blob/master/custom-docker/pom.xml):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>u7-crm-app</artifactId>
        <groupId>com.intellective.sample</groupId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>custom-docker</artifactId>
    <packaging>pom</packaging>

    <build>
        <plugins>
        <!-- ... -->
            <plugin>
                <groupId>io.fabric8</groupId>
                <artifactId>docker-maven-plugin</artifactId>
                <executions>
                    <execution>
                        <id>build-docker</id>
                        <phase>package</phase>
                        <goals>
                            <goal>build</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <verbose>true</verbose>
                    <images>
                        <image>
                            <name>unity/sample-crm-app</name>       <!-- HERE -->
                            <build>
                                <tags>
                                    <tag>${project.version}</tag>   <!-- AND THERE -->
                                    <tag>latest</tag>
                                </tags>
                                <contextDir>${basedir}</contextDir>
                            </build>
                        </image>
                    </images>
                </configuration>
            </plugin>
        </plugins>
    </build>
    <!-- ... -->
</project>

```

Build the production build of the application including Docker image: `mvn clean package -P docker`.

Test the containerized application using the image name and tag(s) defined above:
```
docker run --rm -p 9080:9080 unity/sample-crm-app:latest
```
Acceess http://localhost:9080/custom-webapp after it starts.

Use the image to stage the release through different environments using Docker Swarm, Kubernetes or OpenShift 
container orchestration. Override the configuration files using volumes if needed.

# Optional: Further exercises and improvements 

Here we gathered the list of possible changes and improvements in the project.
You can implement it independently, by your own, and even propose a pull request into the main code base 
if you think change worth it.

Client-side changes proposed:
1. Apply validation for the `PhoneNumber` field on the 'Add Customer' form.
2. Configure 'Get Info', 'Check-out', 'Check-in', and 'Delete' actions for `Customers` and `Correspondence`. 
3. Implement a configuration console pane for managing `States` and `Cities`.

Server-side changes proposed:
1. Download CSV files directly from the GitHub instead of putting it into the resources.
2. Use a database (e.g. embedded H2) instead of CSV files. However, you can initiate a data using the CSV.
3. Sort `Cities` alphabetically.
4. Implement a full CRUD API for `States` and `Cities`. 
