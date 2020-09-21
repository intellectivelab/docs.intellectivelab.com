---
title: Unity 7.7 Release Notes
layout: docs
category: Unity 7
---

# New Features

The following stories were implemented in the Unity 7.7 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                                    |
| ------- | ------------------------------------------------------------------------------------------ |
| U7-3282 | Switch to already open case                                                                |
| U7-3235 | Handle deletes in enterprise index for CM8 and CMOD repositories                           |
| U7-3226 | Implement Open in Office actions in React for Sharepoint                                   |
| U7-3168 | UIE: SharePoint connector - content crawling                                               |
| U7-3151 | Unity configuration file shall support encrypted passwords                                 |
| U7-3142 | Sharepoint: support encrypted password in config for system account                        |
| U7-3136 | Ability to configure custom user friendly messages in place of errors returned from server |
| U7-3118 | Add React version to the Info Unity dialog                                                 |
| U7-3112 | Sharepoint: investigate minimum permissions for SP admin user                              |
| U7-3103 | Analytics tab with dynamic filters                                                         |
| U7-3102 | Analytics reset button should be visible                                                   |
| U7-3092 | ExtJS: Optional document content for CheckIn action depends on provider                    |
| U7-3088 | CMOD Connectors pool configuration                                                         |
| U7-3079 | UIE Crawler doesn't recover from lost DB connection                                        |
| U7-3074 | Sharepoint: Add possilibity to use all Documents Library in Search Template                |
| U7-3062 | Sharepoint: Implement Folder View for React                                                |
| U7-3060 | Feature to configure react UI field to be put on layout with full width                    |
| U7-3051 | UIE: SharePoint connector - Document Libraries crawling                                    |
| U7-3032 | Sharepoint: Implement separate EnableRules                                                 |
| U7-3028 | Support Daeja from ICN package                                                             |
| U7-3012 | Unity Security Tab should show user names                                                  |
| U7-2999 | Support JBPM for Process Analytics                                                         |
| U7-2989 | Sharepoint: Implement open in office action                                                |
| U7-2982 | UIE: Update supported Solr version to 8.6                                                  |
| U7-2960 | Sharepoint: ReadOnly properties are displayed in the System Properties section             |
| U7-2949 | Sharepoint: add_document action can be configured only for one Document Library            |
| U7-2948 | Sharepoint: Remove ID from add document action configuration for DefaultValue              |
| U7-2931 | Implement Get Info -> Security tab for SP connector                                        |
| U7-2929 | SPNEGO authentication support for SP connector                                             |
| U7-2912 | Build Unity Integration for MS Office Online thin client apps                              |
| U7-2892 | Allow UIE process indexing for metadata and content separately                             |
| U7-2888 | Document's Security tab should display User Name                                           |
| U7-2887 | Add Security dialog select multiple users/group                                            |
| U7-2880 | Readiness ping page                                                                        |
| U7-2829 | IBM BAW connector for Interchange                                                          |
| U7-2828 | IBM BAW connector for UIE                                                                  |
| U7-2737 | UIE 7.7.0: add encryption servlet to Searcher package                                      |
| U7-2733 | VCM vs UCM: VCM remembers last used Inbasket                                               |
| U7-2708 | VCM vs UCM: Work item opened from Inbasket displayes empty History/Comments tab            |
| U7-2707 | VCM vs UCM: Work item opened from Inbasket does not display list of documents              |
| U7-2705 | VCM vs UCM: create new case tool on the Inbasket toolbar in UCM                            |
| U7-2647 | UIE Solr basic authentication plugin support                                               |
| U7-2635 | jBPM: public API doesn't provide ability to specify different view for closed cases        |
| U7-2633 | Fill in full username in VuUserContext at authentication time                              |
| U7-2623 | Include Unity version/build number at vu_base.js and vu_all.js                             |
| U7-2587 | Disable Split case                                                                         |
| U7-2586 | Implement attach document and add comment during Copy/split in UCM                         |
| U7-2533 | Configure and document Solr Authentication plugin                                          |
| U7-2461 | VCM vs UCM: export inbasket is not supported in UCM                                        |
| U7-2460 | VCM vs UCM: Tasks are not supported in UCM                                                 |
| U7-2447 | Modify search template field comments from Config Console                                  |
| U7-2441 | Native Sharepoint connector in UIE                                                         |
| U7-2417 | Unity: cloud-ready deployment                                                              |
| U7-2410 | Text extractor processor in Interchange                                                    |
| U7-2396 | User Audit - Count Unique Users Per Period                                                 |
| U7-2193 | Sharepoint Connector upgrade                                                               |
| U7-1798 | Unity Analytics action a workitem or a case from the UIE grid                              |

# Resolved Issues

The following issues were resolved in the Unity 7.7 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                                       |
| ------- | --------------------------------------------------------------------------------------------- |
| U7-3275 | CM8 crawler throws Invalid format: "null" error if mapped repository field is empty           |
| U7-3261 | Choice list fields not validated on case properties tab                                       |
| U7-3256 | (CM8/CMOD) SSO - Ability to login to Unity from within Navigator                              |
| U7-3255 | Counts of documents don’t match between index and CM8/CMOD repositories                       |
| U7-3254 | CMOD document count on crawler UI keeps increasing                                            |
| U7-3233 | DefaultValues for date criterion using range operator                                         |
| U7-3224 | Error on View and Get Info actions for CM8 documents in enterprise index                      |
| U7-3223 | CM8 security access error messages not displayed correctly                                    |
| U7-3221 | Error on View and Get Info actions for CMOD documents in enterprise index                     |
| U7-3219 | Unable to execute enterprise index search in Unity                                            |
| U7-3218 | Unity Add Document tool icon on Documents tab is wrong                                        |
| U7-3217 | (CMOD Search) Property value not displayed and incorrect value for another on Get Info pop-up |
| U7-3191 | Unity onAfterRefreshCase event not being called                                               |
| U7-3186 | Cannot access document properties in onAfterAttachDocument handler                            |
| U7-3177 | Crawler crashes and stops when trying to start CMOD crawler                                   |
| U7-3161 | Unity Sharepoint Search Template criteria doesn't work                                        |
| U7-3153 | No enum constant com.vegaecm.vspace.datasources.Datasources.DsType error in config console    |
| U7-3133 | Unable to View Attached Document while Creating Case                                          |
| U7-3104 | Analytics tab Export tool exports all records                                                 |
| U7-3090 | Unity allows open the same case from in-basket                                                |
| U7-3006 | UIE search / sort on empty strings as 'Null' alpha value between N and O                      |
| U7-2992 | Unity 7.6 MVP list items disappear                                                            |
| U7-2987 | Unity 7.6 displays error if user has no sufficient rights                                     |
| U7-2985 | Unity 7.7 onAfterCreateDocument and onAfterAttachDocument events are broken                   |
| U7-2983 | Unity Documents tab folders Refresh doesn't work                                              |
| U7-2979 | Spring boot standalone UIE 7.7 fails when starts with SSL                                     |
| U7-2966 | Multi value prop new values not being saved                                                   |
| U7-2955 | JS Files Not Found                                                                            |
| U7-2954 | Documents tab is broken on create case view                                                   |
| U7-2908 | TreeView recurse is not working on CMIS connector                                             |
| U7-2897 | MV properties in Sharepoint                                                                   |
| U7-2706 | VCM vs UCM: Closing work item opened from Inbasket does not refresh lock status               |
| U7-2638 | Add document error on browse folder                                                           |
| U7-2582 | Suppress not JSON formatted error messages from FIleNet                                       |
| U7-2499 | Fields layout on Adv. Search screen                                                           |
| U7-2481 | Unable to view document when creating concurrence                                             |

# Installation Changes

No installation changes are required

# Configuration Changes

Please refer to configuration guide to follow the configuration changes