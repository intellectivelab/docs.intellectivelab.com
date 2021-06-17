---
title: Unity Case Management Configuration Tutorial
layout: docs
category: Unity 7
---
# IBM Case Manager (ICM)

IBM Case Manager (ICM) provides a platform that seamlessly integrates capabilities from across IBM Software Group to deliver the advanced requirements needed to drive better case outcomes.   
The platform combines enterprise content management and business process management, along with integrated rules, events, collaboration, and analytics to deliver a comprehensive case management product. 
On top of this platform, IBM Case Manager provides a set of tooling that enables business analysts to quickly define solutions and then to collaborate with customers and IT to deliver them.

## ICM object model

![ICM object model](unity-case-management-configuration/images/image10.png)

### Solution

A Solution is a set of related business problems (or Case Types).

![Solution](unity-case-management-configuration/images/image11.png) 

### Properties

Properties are used to store details of the case and documents.

![Properties](unity-case-management-configuration/images/image12.png)

### Case Types

Case Types define the Tasks, the necessary document types to support the Task, the task steps, and the Roles that must complete those steps to solve a business problem. 
The Case Type also includes Properties that are displayed to case workers in Views. Related Case Types make up a Solution.

![Case Types](unity-case-management-configuration/images/image13.png)


### Tasks

A Task represents a specific activity that is performed as part of a case. The Task consists of one or more steps that must be completed to complete the Task.
Generally, a case is not complete until all required Tasks are completed or manually disabled, or any running Task is completed or canceled.
Tasks can be started when case is created, based on case field property change or can be launched manually. Active Task will have one or more work items created.

![Tasks](unity-case-management-configuration/images/image14.png)

![Tasks](unity-case-management-configuration/images/image15.png)

![Tasks](unity-case-management-configuration/images/image16.png)

### Document Types

Document Types group similar documents and the information about the documents that are related to the case. 

![Document Types](unity-case-management-configuration/images/image17.png)

### Roles

Users and groups are assigned to Roles in the Case Manager Client to specify which users can access a particular Task or step.

![Roles](unity-case-management-configuration/images/image18.png)

### In-baskets

A personal In-basket holds steps that need to be done by a specific case worker to complete case Tasks. A role In-basket holds steps that are assigned to a Role. In Case Manager Client, steps are called work items.

![Inbaskets](unity-case-management-configuration/images/image19.png)

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

![Configuration steps scheme](unity-case-management-configuration/images/configuration-steps-scheme.png)

## Environment Variables

Environment variables are externalized in separate file. It allows to promote application to different environments without changing configuration.  
Make sure to point to the folder UCM solution file is saved in as well as provide name:

![Environment variables](unity-case-management-configuration/images/image20.png)

## Connectors

Connector Type should be `UCM` for Case Management:

![Connectors](unity-case-management-configuration/images/image21.png)

### Properties mapping

Unity allows to create application-level consolidated model (Properties). External repositories data models can be mapped into application model allowing users to have unified view of documents and/or cases.

Set of required property mappings required for UCM:

![Properties mapping](unity-case-management-configuration/images/image22.png)

### Custom Properties

This property must be defined for UCM:

![Custom properties](unity-case-management-configuration/images/image23.png)

## Properties
## Pick Lists

## Access Roles

Access Roles allow users and groups to access search templates based on the grant or deny rights assigned.  
Access Roles can be assigned to search templates or tabs.


