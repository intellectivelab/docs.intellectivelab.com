---
title: Unity Features - Document Management
layout: docs
category: Unity 7
---
# Overview

*content to be added* 

# Document Management Features

## Create a document     
## Create a document with multiple content      
## Drag and drop a file into the grid
## Folder select - upload a document into the selected folder
## Document search and navigation
## Document view and update properties
## Document versioning
## Document permission management
## Document content action (view content and download)
## Document copy/move to folder
## Document delete
## Copy link

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