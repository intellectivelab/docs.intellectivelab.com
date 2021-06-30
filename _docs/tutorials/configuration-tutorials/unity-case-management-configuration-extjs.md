---
title: Unity Case Management Configuration Tutorial
layout: docs
category: Unity 7
---
This course gives an overview of how to configure Unity Case Management solution using Configuration Console in Unity ExtJS platform.  
Students are expected to complete the course:
- [Unity Configuration Basics Tutorial for Unity ExtJS platform](../configuration-tutorials/unity-configuration-basics-extjs.md)

# IBM Case Manager (ICM)

IBM Case Manager (ICM) provides a platform that seamlessly integrates capabilities from across IBM Software Group to deliver the advanced requirements needed to drive better case outcomes.   
The platform combines enterprise content management and business process management, along with integrated rules, events, collaboration, and analytics to deliver a comprehensive case management product. 
On top of this platform, IBM Case Manager provides a set of tooling that enables business analysts to quickly define solutions and then to collaborate with customers and IT to deliver them.

## ICM object model

![ICM object model](unity-case-management-configuration-extjs/images/image10.png)

### Solution

A Solution is a set of related business problems (or Case Types).

![Solution](unity-case-management-configuration-extjs/images/image11.png) 

### ICM Properties

Properties are used to store details of the case and documents.

![Properties](unity-case-management-configuration-extjs/images/image12.png)

### Case Types

Case Types define the tasks, the necessary document types to support the task, the task steps, and the roles that must complete those steps to solve a business problem. 
The Case Type also includes properties that are displayed to case workers in Views. Related Case Types make up a Solution.

![Case Types](unity-case-management-configuration-extjs/images/image13.png)


### Tasks

A Task represents a specific activity that is performed as part of a case. The Task consists of one or more steps that must be completed to complete the Task.
Generally, a case is not complete until all required Tasks are completed or manually disabled, or any running Task is completed or canceled.
Tasks can be started when case is created, based on case field property change or can be launched manually. Active Task will have one or more work items created.

![Tasks](unity-case-management-configuration-extjs/images/image14.png)

![Tasks](unity-case-management-configuration-extjs/images/image15.png)

![Tasks](unity-case-management-configuration-extjs/images/image16.png)

### Document Types

Document Types group similar documents and the information about the documents that are related to the case. 

![Document Types](unity-case-management-configuration-extjs/images/image17.png)

### Roles

Users and groups are assigned to Roles in the Case Manager Client to specify which users can access a particular task or step.

![Roles](unity-case-management-configuration-extjs/images/image18.png)

### In-baskets

A personal In-basket holds steps that need to be done by a specific case worker to complete case tasks. A role In-basket holds steps that are assigned to a role. 
In Case Manager Client, steps are called Work Items.

![Inbaskets](unity-case-management-configuration-extjs/images/image19.png)

### Unity Case Management (UCM) & ICM

Unity works with deployed ICM solution and allows to configure UI to work with cases and tasks

- Cases
    - Case search allows to search for cases based on provided search criteria
    - Case view is displayed when case is opened from case view and allows to work with case properties, attachments (documents), tasks, history & comments
    
- Tasks
    - Inbaskets display work items available for the selected Role for corresponding task type 
    - Inbaskets provide filters to narrow down search and actions (workflow responses) to process task
    - When work item is opened from the Inbasket, Work Item view is displayed
    - Normally work item view displays case/task properties, it can also display documents attached to case, comments & history of the case

# Unity Case Management (UCM) Configuration

UCM configuration is stored in separate file and should be linked to main configuration file. It is done in XML and can be configured using Advanced Editor in Configuration Console.  
Template configuration uses Environment Variables, so when name and location of UCM configuration file is provided, it is automatically applied.

## Common configuration steps

![Configuration steps scheme](unity-case-management-configuration-extjs/images/configuration-steps-scheme.png)

## Environment Variables

Environment variables are externalized in separate file. It allows to promote application to different environments without changing configuration.  
Make sure to point to the folder UCM solution file is saved in as well as provide name:

![Environment variables](unity-case-management-configuration-extjs/images/image20.png)

## Connectors

Connector Type should be `UCM` for Case Management:

![Connectors](unity-case-management-configuration-extjs/images/image21.png)

### Properties mapping

Unity allows to create application-level consolidated model (Properties). 
External repositories data models can be mapped into application model allowing users to have unified view of documents and/or cases.

Set of required property mappings required for UCM:

![Properties mapping](unity-case-management-configuration-extjs/images/image22.png)

### Custom Properties

This property must be defined for UCM:

![Custom properties](unity-case-management-configuration-extjs/images/image23.png)

## Properties

Define Properties:

![Properties](unity-case-management-configuration-extjs/images/image24.png)

## Pick Lists

Define Pick Lists:

![Pick Lists](unity-case-management-configuration-extjs/images/image25.png)

## Access Roles

Access Roles allow users and groups to access search templates based on the grant or deny rights assigned.  
Access Roles can be assigned to search templates or tabs.

# Case Search and Case View Configuration

![Components scheme](unity-case-management-configuration-extjs/images/components-scheme.png)

Configuration steps:

![Case search and case view configuration steps scheme](unity-case-management-configuration-extjs/images/case-configuration-steps-scheme.png)

## Content List for Cases

![Content Lists](unity-case-management-configuration-extjs/images/image28.png)

- Define Content List parameters:

    ![Content List Parameters](unity-case-management-configuration-extjs/images/image30.png)

- Define column sets:

    ![Column Sets](unity-case-management-configuration-extjs/images/image31.png)

- Create actions for each case type:

    ![Actions](unity-case-management-configuration-extjs/images/image33.png)

- Define UCM listeners required:

    ![Listeners](unity-case-management-configuration-extjs/images/image32.png)

## Search Template for Cases

![Search Templates](unity-case-management-configuration-extjs/images/image34.png)

- Define Search Template parameters:

    ![Search Template Parameters](unity-case-management-configuration-extjs/images/image36.png)

- Define Search Criteria:

    ![Search Criteria](unity-case-management-configuration-extjs/images/image37.png)

- Define UCM specific operation properties:

    ![Search Template Operation](unity-case-management-configuration-extjs/images/image39.png)

- Assign Roles:

    ![Search Template Security](unity-case-management-configuration-extjs/images/image40.png)

## Field Sets for Cases

Case View and Workitem View use field set to display properties associated with case or workitem respectively.  
Unity uses expandos – collapsible areas of UI - to group related properties together.

- Define field sets for views:
 
    ![Field set](unity-case-management-configuration-extjs/images/image41.png)

- Define expandos and fields:

    ![Expandos](unity-case-management-configuration-extjs/images/image42.png)

    ![Fields](unity-case-management-configuration-extjs/images/image43.png)

    `Column` and `Row` values define a position of field in expando.

## Case View

Case View is available in Case Management Configuration and defines what user sees when opening a case. Case View is defined for:

- New case – displayed when case is created
- Active case – displayed for active case
- Closed case – displayed for closed case

![Case View](unity-case-management-configuration-extjs/images/image45.png)

Case View can have following pre-defined tabs:
 
- Details – will have case properties organized in expandos
- Attachments – display documents attached to case
- Tasks – all tasks associated with case
- History – history of system events and user-added comments

![Case View Tabs](unity-case-management-configuration-extjs/images/image47.png)

- For Details tab define tools:

    ![Case View Tabs tools](unity-case-management-configuration-extjs/images/image49.png)

- For Attachments tab define properties (required) and tools:

    ![Attachments tab](unity-case-management-configuration-extjs/images/image51.png)

    ![Attachments tab tools](unity-case-management-configuration-extjs/images/image52.png)

- For Tasks tab define Search Template Set used to look for tasks and Content List configured to display tasks:

    ![Tasks tab](unity-case-management-configuration-extjs/images/image54.png)

    Define tools:

    ![Task tab tools](unity-case-management-configuration-extjs/images/image55.png)

    `Add task` tool can be used to launch discretionary task.

- For History tab define Search Template Set used to look for Comments & History and Content List configured to display Comments & History:

![History tab](unity-case-management-configuration-extjs/images/image56.png)

## Tab configuration for Cases

- After you create and configure search template, you need to link it to the tab:

    ![Tabs](unity-case-management-configuration-extjs/images/image57.png)

    ![Tabs assign search template](unity-case-management-configuration-extjs/images/image58.png)

- Assign Access Roles and rights to the tab:

    ![Tab security](unity-case-management-configuration-extjs/images/image59.png)

## Test case search & case view

Open case search, execute and select a case:

![Test case search](unity-case-management-configuration-extjs/images/image60.png)

# Inbasket, Workitem Search & View Configuration

![Components scheme inbaskets](unity-case-management-configuration-extjs/images/components-scheme-inbaskets.png)

Configuration steps:

![Steps scheme inbaskets](unity-case-management-configuration-extjs/images/inbasket-configuration-steps-scheme.png)

## Content Lists for Workitems

Define Content List to display workitems:

![Content Lists](unity-case-management-configuration-extjs/images/image28.png)

- Define parameters:

    ![Content list](unity-case-management-configuration-extjs/images/image61.png)

- Define column sets:

    ![Column sets](unity-case-management-configuration-extjs/images/image62.png)

- Define actions for workitems:

    *content to be added*

- Define required UCM listeners:

    ![Listeners](unity-case-management-configuration-extjs/images/image63.png)

## Search Template for Workitems

![Search Templates](unity-case-management-configuration-extjs/images/search-templates-inbaskets.png)

- Define Search Template parameters:

    ![Search Template Parameters](unity-case-management-configuration-extjs/images/image65.png)

- Define Search Criteria

- Define UCM specific operation properties:

    ![Search Template Operation](unity-case-management-configuration-extjs/images/image66.png)

    Database view used by ICM for tasks can be found in ACCE.

- Assign to Inbaskets Tab:

    ![Search Template Security](unity-case-management-configuration-extjs/images/image67.png)

## Field Sets for Workitems

Case View and Workitem View use field set to display properties associated with case or workitem respectively.  
Unity uses expandos – collapsible areas of UI - to group related properties together.

- Define field sets for views:
 
    ![Field set](unity-case-management-configuration-extjs/images/image41.png)

- Define expandos and fields:

    ![Expandos](unity-case-management-configuration-extjs/images/image42.png)

    ![Fields](unity-case-management-configuration-extjs/images/image43.png)

    `Column` and `Row` values define a position of field in expando.

## Workitem View

Workitem Views are available in Case Management Configuration and defines what user sees when opening workitem. 
The view is specific to task type and step in the workflow defined for the task.

![Workitem view](unity-case-management-configuration-extjs/images/image68.png)

`Rule` defines how workitem view is bound to workitem:
- task type
- name of the step in workflow of the task
- additional parameters

![Rule](unity-case-management-configuration-extjs/images/image70.png)

Workitem View can have following pre-defined tabs:
 
- Details – will have case properties organized in expandos
- Attachments – display documents attached to case
- Tasks – all tasks associated with case
- History – history of system events and user-added comments

![Workitem View Tabs](unity-case-management-configuration-extjs/images/image71.png)

- For Attachments tab define properties (required) and tools:

    ![Attachments tab](unity-case-management-configuration-extjs/images/image51.png)

    ![Attachments tab tools](unity-case-management-configuration-extjs/images/image52.png)

- For Tasks tab define Search Template Set used to look for tasks and Content List configured to display tasks:

    ![Tasks tab](unity-case-management-configuration-extjs/images/image54.png)

    Define tools:

    ![Task tab tools](unity-case-management-configuration-extjs/images/image55.png)

    `Add task` tool can be used to launch discretionary task.

- For History tab define Search Template Set used to look for Comments & History and Content List configured to display Comments & History:

![History tab](unity-case-management-configuration-extjs/images/image56.png)

## Inbasket Configuration

Inbasket provides certain roles access to tasks of certain type. 
It uses inbasket search template to display list of workitems and workitem view to display details for selected workitem based on its step. 
Inbasket allows user to “act” workitem using one of the actions defined in task workflow and available on the current step. 

![Inbaskets](unity-case-management-configuration-extjs/images/image73.png)

Actions available for the task in the inbasket:

![Inbaskets actions](unity-case-management-configuration-extjs/images/image74.png)

## Tab configuration for Inbaskets

- After you create and configure search template, you need to link it to the tab:

    ![Tabs](unity-case-management-configuration-extjs/images/inbaskets-tab.png)

    ![Tabs assign search template](unity-case-management-configuration-extjs/images/image75.png)

- Define inbasket tab-specific parameters:

    ![Parameters](unity-case-management-configuration-extjs/images/image76.png)

- Assign Access Roles and rights to the tab:

    ![Tab security](unity-case-management-configuration-extjs/images/image59.png)

## Test inbaskets configuration

Select inbasket and open task:

![Test inbaskets](unity-case-management-configuration-extjs/images/image77.png)
