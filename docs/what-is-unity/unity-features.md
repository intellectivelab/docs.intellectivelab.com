---
id: unity-features
title: Unity Features
sidebar_position: 2
---

# Unity Features and Components

## Content management

- Real-time search against variety of data sources using repository-specific connectors
- Users can receive, review and process tasks from number of workflows and case management platforms
- Unity can mix cases from different systems in the same view
- Users can access data from legacy systems or display Unity components in CRM and enterprise systems 
- CRUD operations available out of the box + ability to create custom actions

## Process and case management

- Unity Case Management UI components (Workbasket, Case View, Audit, etc) are abstracted from a case model via a set of REST services and pluggable connectors
- IBM Case Manager, legacy BPF and jBPM models are supported OOTB   
- Support for other BPM and Case Management systems can be added via additional connectors 

## Connectors

Unity Connector is a unified facade to integrate content from different external sources:

- IBM Content Manager On Demand (CMOD)
- IBM Content Manager (CM8)
- IBM Case Manager (ICM)
- IBM FileNet P8 CE
- IBM Business Automation Workflow (BAW)
- MS SharePoint
- Alfresco, Documentum and other CMIS compliant (CMIS)
- Database
- JNDI
- Box (Cloud)
- Red Hat Process Automation Manager (jBPM)

## Enterprise search

Unity Enterprise search crawls, merges, transforms, and serves content from different business systems into a single high-performance analytics index. 
Crawl can be near-real time, periodic, and on-demand in response to source system events.     

Unity Enterprise search is:
- A set of crawlers to intelligently pull information from data sources, such as content systems, BPM systems, or databases 
- A transform capability to perform actions like altering incoming data, merging data from multiple systems, and applying additional information or intelligence to data such as security information
- A high performance Solr index that provides features like faceted search and fuzzy search, as well as high scalability and fault tolerance
- A search architecture to serve the index data to the Unity UI front end, or to other search applications

Users can search for content and data in a variety of ways:
- Quick search
- Simple and advanced criteria search
- Template-based search
- Full-text and fuzzy search

## Security

Use role-based security combined with your in-house authentication to ensure appropriate access to content and system. 

### Authentication

- JAAS based authentication to popular LDAP providers
- Single Sign On Support
- Extensible via custom plug-ins
- Users are stored in external Authentication Providers
- Access can be granted/denied on group level

### Authorization

- Role-based access to features, functions, actions, data, and content
- Authorization could be done against LDAP, standard/custom Entitlement Systems and Systems of Record
- Roles/entitlements configured in Unity to control all aspects of the system: UI elements, action lists, pick lists, search templates, searches, result sets

### Data Access

Repository security is fully supported for search and retrieval. Supports user/group mapping and direct security integration.

- Search criteria could be re-defined based on user access level
- Search results could be filtered based on user access level
- Actions could be audited with records stored in a database or another data source

## Actionable analytics

[![analytics](unity-overview/images/analytics-308x280.png)](unity-overview/images/analytics-770x701.png)  

Users can get interactive real-time reports (including various charts and graphs) for case tasks and apply actions directly from the report view.  

## Integration

Intellective Unity is designed with integration in mind and can be used as a service (REST/JSON API), as UI component (React) and URL Integration.
External applications can consume data or embed Intellective Unity UI components in various technologies:
- ASPX Custom Applications
- Portals
- IBM Content Navigator
- Line of Business Applications
- Cloud Applications 

Unity provides integration with Salesforce and Dynamics OOTB.

## Low code/ no code configuration

System analysts can configure all aspects of the interface and integrated applications, including:  
- What each tab in the system looks like
- What features are available
- What content user groups can access
- What actions user can take

Configuration XML-based and controls all aspects of the system.  
The Configuration Console allows managing most of Unity components from a single interface. 

## Interchange

Interchange is a complimentary product that works behind the scenes to give users of Unity actionable access to old and new business systems without impacting anybody’s experience. 
