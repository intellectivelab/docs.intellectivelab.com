---
title: Unity Features - Case Management
layout: docs
category: Unity 7
---
# Overview

## Case 

Case is a basic concept in Case Management. 
A case is an abstraction over the case entity from any supported Case Management platforms. 
It is a container that provides the case data, related documents, business processing, and routing to the case workers.  

A case is an instance of a case type. Case Management solution can contain one or more related case types. 
Each case type defines the tasks, the task steps (work items), and the roles that must complete those steps to solve a business problem. 
The case type also includes properties that are displayed to case workers in case views.

## Tasks

A case contains tasks. A task represents a specific activity that is performed as part of a case. 

## Work Items

The task consists of one or more work items. 
Work items are the actions in a process that must be completed for a task.

## UCM/ICM Workbaskets

UCM/ICM workbaskets represent the list of cases or work items which are logically grouped by
certain criteria. From the business perspective work baskets can be personal or public.

Personal work basket contains work items for tasks that are assigned to a specific user. 

Public work basket contains work items that are assigned to a role, but not to a specific
person. Work items in a public work basket can be accepted by any user to work on.

# UCM/ICM Document Management Concepts

UCM/ICM module itself is not responsible for document management. All document related
operations like add a new document, search/filter documents, edit document properties and
versioning operations are re-used from Unity document management modules. UCM/ICM module
only manages the relationships between documents and UCM/ICM entities (Case/Task). Please note
that in Unity only Case document operations are supported.
The mechanism of linking documents and cases depends on the specific Case Management
platform (ICM, jBPM or other) and on the type of target document repository (CE,
CMIS/Alfresco, Box) and is implemented as separate document link strategies. Each document
link strategy implements link/unlink document operations and mechanism of searching
documents related to UCM/ICM Case.
Out of the box, the following link strategies are supported:
- 'ucm' prefix strategies are used for non ICM Case Management platforms (i.e. jBPM)
- ucmP8 - operations with documents stored in FileNet Content Engine repository
- ucmCMIS - operations with documents stored in any repository that supports CMIS
standard (i.e. Alfresco)
- ucmBox - operations with documents stored in Box repository
- ucmUie - operations with documents stored in Enterprise Search index

# Case Management Features

## Create a case

## Create a case with attachments 
## Case search and navigation
## Case view and update properties 
## Case history
## Case user comments (search, add, view, update, delete) 
## Case attachments with folder view (search, navigate, attach, detach) 
## Attach a local document to the case
## Attach an existing document to the case 
## Split Case
## Copy Case
## Close Case 
## Re-open Case 
## Case tasks view (search, create, view, complete, reassign) 
## Case work items view (search, view, process, complete, reassign) 
## Ability to show case related entities via virtual folders
## Copy link
