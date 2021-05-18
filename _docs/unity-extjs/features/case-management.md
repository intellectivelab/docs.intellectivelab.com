---
title: Unity Features - Case Management
layout: docs
category: Unity 7
---
*content to be added*

# UCM/ICM Feature Guide

UI and configuration were changed in the frame of the current feature. All searching was implemented via SearchTemplates in the Unity configuration file. FileNet, CMIS Alfresco, BOX documents can be attached to the case also attached documents can be displayed using Enterprise Search indices.
The following UI elements were implemented:

- Case Search

    ![Case Search](case-management/images/image6.png)

- Inbasket Search

    - Horizontal:  

        ![Inbasket Search Horizontal](case-management/images/image7.png)

    - Vertical:  

        ![Inbasket Search Vertical](case-management/images/image8.png)
    
- Case View

    ![Case View](case-management/images/image9.png)

- Inbasket View

    ![Inbasket View](case-management/images/image10.png)

- Tasks Tab

    ![Tasks Tab](case-management/images/image11.png)

- History/Comment Tab

    ![History Tab](case-management/images/image12.png)

- Add Local Document

    - Document source selection:  

        ![Document Source Selection](case-management/images/image13.png)
 
    - Document adding:  
    
        ![Document Adding](case-management/images/image14.png)
    
- Attach Repository Document

    ![Document Attaching](case-management/images/image15.png)

- Reassign

    - `Assign To` field as a Selector:  
    
        ![Assign Selector](case-management/images/image-assign-selector.png)
   
    - `Assign To` field as a Lookup:  
    
        ![Assign Lookup](case-management/images/image-assign-lookup.png)

# Versions Supported

This feature was added to Unity in Release 7.2.

ICM requires Case Manager version 5.3.0.0 or above, IBM WebSphere JDK 1.8, SQL Server
2012 or above.

# Configuration

[Unity Case Management Configuration](../configuration/unity-case-management.md)
