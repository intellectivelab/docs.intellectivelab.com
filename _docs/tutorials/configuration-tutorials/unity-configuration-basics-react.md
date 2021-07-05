---
title: Unity React Configuration Basics Tutorial
layout: docs
category: Unity 7
---
This course gives an overview of Unity React UI configuration.

# Unity Configuration File

Unity stores all configuration information for the application in an XML configuration file.  
Location of configuration file is specified in Environment Variables configured for application server.

By default, the file is stored to a server drive location of the Web Application Server. 
Default name is `unity_config.xml`.

![Environment entries](unity-configuration-basics-react/images/image4.png)

Unity configuration file is also associated with a Solution file which stores information about the detail views of a document, case or a work item.

Solution file and SolutionName defined in Unity configuration file:

![Unity config](unity-configuration-basics-react/images/image6.png)

Solution configuration file:

![Solution config](unity-configuration-basics-react/images/image5.png)

General Properties in Unity configuration file:

![General properties](unity-configuration-basics-react/images/image8.png)

Perspective in Unity configuration file:

![Perspective](unity-configuration-basics-react/images/image9.png)

Document Management configuration includes the following UI elements: 

![Components scheme](unity-configuration-basics-react/images/components-scheme.png)

# Use Case

Use Case: Connect to a document repository, configure Search Template, Content List to display results, and assign it to a Tab.  
Steps required: 

![Configuration steps scheme](unity-configuration-basics-react/images/configuration-steps-scheme.png)

## Environment Variables

Environment variables are externalized in separate file (e.g. `unity_config-environment.ini`):

![Environment variables](unity-configuration-basics-react/images/image10.png)

It provides the ability to promote application to different environments without changing configuration.

## Connectors

![Connector-scheme](unity-configuration-basics-react/images/connector-scheme.png)

Connectors allow Unity, Enterprise Search and Interchange to read, write and search for the purpose of basic CRUD operations and crawling for data migration and index creation. 

### Datasources configuration

Datasource is the configuration of the authentication and access parameters that allow connection to the repository:

![Datasources](unity-configuration-basics-react/images/image11.png)

### Connectors configuration

Connector is the configuration of the "view" of the information (properties, metadata, objects, etc.) from the datasource that will be used by Unity for actions.

Each Connector has `ID` for further linking, Connector `Type`, linked `Datasource`, max number of returned results `Result Limit` and other parameters:  

![Connectors](unity-configuration-basics-react/images/image12.png)

#### Properties mapping

Unity allows for the creation of an application-level consolidated model (properties). External repositories data models can be mapped into the application model allowing users to have unified view of documents and/or cases.

Each Connector Property should be mapped to Unity Property:

![Properties mapping](unity-configuration-basics-react/images/properties-mapping.png)

#### Properties configuration

Properties configuration in Unity configuration file:

![Properties configuration](unity-configuration-basics-react/images/image15.png)

#### Pick Lists configuration

Pick Lists, also called `Selectors` are predefined selection lists that are used in association with `Properties` to assist in limiting values to a property to a specific and limited set of choices.

Pick Lists:
- can also be used to translate a stored code or numeric value into a UI friendly value to display in a Content List, Search Criteria or other Unity Construct
- are required for List Filters in a Content List column
- can be a Static list created in Unity or a cached or non-cached list retrieved from a connected data source

![Pick Lists](unity-configuration-basics-react/images/image17.png)

## Content List Configuration

![Content list scheme](unity-configuration-basics/images/content-list-scheme.png)

The Content List (Grid) is used by Search Templates , Actions and Tabs to present search results to a user.

Unity provides following configuration features for Content List :

- Define column set for the Grid
- Enable/disable column re-order
- Enable/disable multi-column sort and set sort order
- Configure toolbar Actions
- Configure listeners for grid events
- Configure Filters for Search results

To see all Content Lists select `Content Lists` in the `Solution Configuration` tree:

![Content lists](unity-configuration-basics/images/content-lists.png)

To see and edit Content List parameters click on `Edit` icon in `Parameters` column in the Content List row:

![Content lists parameters](unity-configuration-basics/images/content-list-parameters.png)

On `Define column sets` tab list of columns, column name from the properties settings, default visibility and sort order are shown:

![Column sets](unity-configuration-basics/images/column-sets.png)

On `Toolbar actions` tab pre-defined set of actions is shown:

![Toolbar actions](unity-configuration-basics/images/toolbar-actions.png)

## Access Roles Configuration

Access Roles allow users and groups to access search templates based on the grant or deny rights assigned.
Access Roles can be assigned to search templates or tabs.

To see all Access Roles select `Security` in the `Solution Configuration` tree: 

![Access roles](unity-configuration-basics/images/access-roles.png)

To see and edit Role Members click on `Edit` icon in `Members` column in the role row, Edit Members window appears:

![Access roles edit](unity-configuration-basics/images/access-roles-edit.png)

You can Add or Remove users or groups, set `Grant` or `Deny` rights to users or groups.

## Search Template Configuration

![Search template scheme](unity-configuration-basics/images/search-template-scheme.png)

Search template configuration provides the capability to pre-configure and save: 
- selected repository Connector
- search criteria
- search results Grid (Content List) configuration 

Access to Search Templates is controlled by [Access Roles](#access-roles-configuration).  
Search Template should be assigned to the Tab to be available to Unity users.

To see all Search Templates select `Search Templates` in the `Solution Configuration` tree: 

![Search templates](unity-configuration-basics/images/search-templates.png)

To see and edit Search Template parameters click on `Edit` icon in `Parameters` column in Search Template row.  

- Select `Define search criteria` tab:
    
    ![Search criteria tab](unity-configuration-basics/images/search-template-criteria.png)
    
    You can Add, Edit, Copy, or Delete search criteria properties.  
    Press `Edit` button to edit search criterion properties:
    
    ![Search criterion edit](unity-configuration-basics/images/search-criterion-edit.png)
    
    - Additional parameters can be configured in `Advanced Configuration` section
    - You can combine criteria in groups: which are then displayed grouped in UI
    - You can define a Pick List for values

- Select `Define security` tab and assign Roles to Search Template:

    ![Search template roles](unity-configuration-basics/images/search-template-roles.png)

## Tab Configuration

![Tab scheme](unity-configuration-basics/images/tab-scheme.png)

To see all Tabs select `Tabs` in the `Solution Configuration` tree: 

![Tab](unity-configuration-basics/images/tabs.png)

To see and edit Tab parameters click on `Edit` icon in `Parameters` column in Tab row. Edit Tab window appears:  

![Edit tab](unity-configuration-basics/images/tab-edit.png)

- Select `Assign search templates` tab and assign Search Template to the Tab:

    ![Assign template to tab](unity-configuration-basics/images/tab-assign-template.png)

- Select `Define security` tab and assign Roles to the Tab:

    ![Assign role to tab](unity-configuration-basics/images/tab-assign-role.png)

# Test Configuration

Execute search and make sure it returns expected results:

![Test search](unity-configuration-basics/images/test-search.png)
