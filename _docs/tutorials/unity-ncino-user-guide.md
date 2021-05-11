---
title: Unity for nCino User Guide
layout: docs
category: Unity 7
---
# Purpose

The purpose of this document is to provide an end user guide for the use of Unity for nCino Content Management functions accessible with the nCino and Salesforce Lightning User interface. 
This document is intended for end users and not administrations responsible for configuring and deploying of Unity components.

# Accessing Archived nCino Content from Document Manager

Once content is archived from nCino to an ECM (e.g., IBM FileNet, OpenText, SharePoint, Box, etc.) the user can select the Download Link from nCino’s Document Manager to Display the Document.  

nCino modifies the behavior of the Document Manager Download Link for archived Content, to call Unity to retrieve and display the document from the ECM.

Once the Download Link is selected the document will Display in the Browser (e.g., based on the Browser settings and the File Mime Type):

[![Accessing Archived nCino Content from Document Manager](unity-8-user-guide/images/accessing-content.gif)](unity-8-user-guide/images/accessing-content.gif)

# Accessing Unity Search

Unity Search Templates are configured in the native Unity application (e.g., outside of nCino and Salesforce) and can be expose to any nCino and or Salesforce UI. 
Search Templates provide the user with the capability to search for content stored in either one or multiple ECMs.

Unity Search can be accessed from:
- nCino Document Manager
- Enterprise Search

## nCino Document Manager

All nCino User Interfaces related to Loans, Relationships, Collateral, Product Packages, etc. where Document Manager is provided can be configured with Unity Search Templates to return a list of documents linked to the specific nCino Loan Number, Relationship ID. 

[![nCino Document Manager](unity-8-user-guide/images/3.1 nCino Document Manager.gif)](unity-8-user-guide/images/3.1 nCino Document Manager.gif) 

## Enterprise Search

Available from the Main Salesforce Menu, provides the capability to perform an Enterprise Search across all archived nCino data stored in an ECM.
Unity Enterprise Search can search all content within an ECM (not limited to nCino Content) as well as multiple ECMs, from a single search.

[![Enterprise Search](unity-8-user-guide/images/3.2 Enterprise Search.gif)](unity-8-user-guide/images/3.2 Enterprise Search.gif) 

# Unity Search Templates

Unity Search Templates are configured in the Unity Application and then exposed to any nCino or Salesforce user interface.

The Unity Search Templates include:
- Search Criteria
- Search Results
    - Actions related to Search Results.
- Add (New) Content

## Search Criteria

Search Criteria can be configured for any Property that exists in the Unity Enterprise Search Index.  

This includes Properties from the ECM as well as other Data Sources (e.g., via Extension Unity can leverage its transformation and discovery services to enhance ECM Property with nCino data and other Financial source data).

The Search Criteria can also be configured to automatically pull in data from nCino and Salesforce to leverage as the Search Criteria.  
For example, a search configured to an nCino Loan can automatically pull in the nCino Loan Number and use this as search criteria to return only documents for a specific Loan.  
Search Criteria can be configured as: Read Only, Hidden, Required, or Optional.  User can enter value for the configured search criteria to refine the search and limit the returned results.

Search Criteria Actions:

- Search
    When the user selects the Spyglass button the search is performed.

- Reset
    When the user selects the Reset button the search criteria is reset.

[![Search Criteria](unity-8-user-guide/images/4.1 Search Criteria.gif)](unity-8-user-guide/images/4.1 Search Criteria.gif) 
 
## Search Results

Search Results are a table, where each row is a file returned based on the Search Criteria, and each Column represents an ECM Property.  These properties can be the same or different from the Search Criteria.

The Search Results are Sortable in ascending and descending order by selecting the column heading.

The Columns can be displayed or hidden using the gear button, which opens a Select Fields to Display User interface.

[![Search Results](unity-8-user-guide/images/4.2 Search Results.gif)](unity-8-user-guide/images/4.2 Search Results.gif) 
 
## Search Result – Actions

Search Results actions are configurable based on the User’s Role, such that only Actions the user is authorized to perform are displayed.
The user can access the list of actions by selection the down arrow on the content row.

[![Search Results actions](unity-8-user-guide/images/row-actions.png)](unity-8-user-guide/images/row-actions.png)  

Standard Actions include:

- Properties (Basic)

    Display a list of the Content Properties, which can be modified by the end user based on Role (e.g., Authorization)
    
   [![Action properties](unity-8-user-guide/images/4.3 Search Result – Actions Properties.gif)](unity-8-user-guide/images/4.3 Search Result – Actions Properties.gif) 
    
- View

    Opens the selected Document in the Browser (e.g., based on the Browser setting and File Mime Type)

   [![Action view](unity-8-user-guide/images/4.3 Search Result – Actions View.gif)](unity-8-user-guide/images/4.3 Search Result – Actions View.gif)

- Add to nCino

    Provides the capability to Add an archived Document from an ECM to a new nCino Placeholder.
    - A Copy Document to Placeholder User Interface is selected where the user can select the Document Category (i.e., based on nCino configured Categories) and either Select or Enter a Document Name for the new Placeholder.  
    - Once the Copy button is selected the file is downloaded from the ECM and added to the Placeholder.
    - The Document is added as a new File, which will then be Archived as a new document in the ECM later in the process cycle (e.g., when the Loan reaches the Booked State).

TBD
<Create a Video/Giff where the user accesses the Search UI from an nCino Loan and selects the down arrow and the selects the Add to nCino Action, opens the Copy Document Placeholder UI where the user can enter the Placeholder Category and Name and then select Copy. 
Then Navigate to the Document Manager UI and show the Placeholder was added with the attached file).

Additional Unity Actions Available:
- Download

    Downloads the document to the user’s desktop.

- Delete

    Allows an Authorized User to Delete a Document.

- Check Out

    Allows an Authorized User to perform a FileNet function used to Check Out a File. 
    When a File is Checked Out by a User, another user cannot Check Out the same file.  However, it can still be viewed.

- Check In

    - Allows an Authorized User to perform a FileNet function used to Check-In a Document that was previously checked out.
    - Opens the Check-In User Interface allows the user to Browser or Drag and Drop the field and Update the Content Properties.
    - The user can also indicate if the Checked In document will be a new Major or Minor Version.
    - The `Check In` action is performed when the `Save` button is selected.

    [![Actions Check Out In Download](unity-8-user-guide/images/4.3 Search Result – Actions Check Out - In - Download.gif)](unity-8-user-guide/images/4.3 Search Result – Actions Check Out - In - Download.gif)

- Cancel Check Out

    Allows an Authorized User to perform a FileNet Action used to Cancel a Check Out.

- Properties (Expanded)

    Expands the Basic Properties Action to include
    
    - From the Properties Tab: Display a list of the Content Properties, which can be modified by the end user based on Role (e.g., Authorization)
        
        Include Actions (listed above) available from Properties User Interface
        - Download
        - Check In 
        - Check Out
        - Cancel Check Out
        - Delete
        - View

    - From the Versions Tab
        
        Display a list of Document Versions.  
        Provides access to Version Actions:
        
        - Promote
        - Allows an authorized user to promote a minor version to a new major version (e.g., change version 1.1 to version 2.0)
        - Demote
        - Allows an authorize user to demote a major version of a document to a prior minor version (e.g., change version 2.0 back to version 1.1)
        - Make Current Version
        - Makes a Prior Version the Current Version

    [![Actions Check Out In Download](unity-8-user-guide/images/4.3 Search Result – Actions - Expanded Properties.gif)](unity-8-user-guide/images/4.3 Search Result – Actions - Expanded Properties.gif)

## Add Content – New Button

Unity provides the capability for a user to Add (i.e., upload) a document directly to the ECM from a User Search Template.
When the New Button is selected a configured Choice List of Document Types is displayed.
When the user selects a Document Type Choice List value, an Add Document Type User Interface is open which will allow the user to enter the ECM Properties (i.e., which the document can later be retrieved by) and select the file to upload, by using Browser or Drag and Drop.
The Add Document Type User Interface can also automatically pull in one or more properties from the nCino / Salesforce User Interface (e.g., Loan Number, Relationship ID, Account Number, etc.) to reduce the amount of data entry required by the user and ensure the content is correctly indexed.
The Added document can then be returned in the search.

|**Note**: The properties displayed on this User Interface are configurable and will be defined based on the Document Properties related to the Document Type selected.

[![Actions Check Out In Download](unity-8-user-guide/images/4.4 Add Content – New Button.gif)](unity-8-user-guide/images/4.4 Add Content – New Button.gif)

 


