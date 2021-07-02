---
title: Unity 7.7.1 Release Notes
layout: docs
category: Unity 7
---

# New Features

The following stories were implemented in the Unity 7.7.1 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| U7-3451 | UIE CMOD Ability to perform backward crawling and also process current modifications                                |
| U7-3430 | Sharepoint Add Document dialog with Permissions tab                                                                 |
| U7-3395 | Add support for DB connector in Unity API                                                                           |
| U7-3365 | Sharepoint permissions dialog 'No Access' option throws an error                                                    |
| U7-3362 | Implement opening resource by link                                                                                  |
| U7-3359 | Handle deletes in enterprise index for CMOD repository                                                              |
| U7-3358 | Handle deletes in enterprise index for CM8 repository                                                               |
| U7-3357 | Improve error handling if UCM configuration file not found                                                          |
| U7-3355 | Implement Sunburst Chart                                                                                            |
| U7-3346 | Solutions, SolutionsConfiguration sections have a lot of required parameters that are linked only with Case Manager |
| U7-3338 | Add support for Client_Credentials OAuth Grant Type                                                                 |
| U7-3333 | Implement details view for react grid                                                                               |
| U7-3328 | UIE: CMOD connector - change logic from TopN to date range                                                          |
| U7-3326 | Ability to configure hidden search criteria with OR clause                                                          |
| U7-3325 | React & public API: Add ability to show several sites inside FolderView                                             |
| U7-3315 | Unity/UIE: SharePoint connector - document actions configuration for UIE SharePoint documents                       |
| U7-3285 | Extend default Lookup component behavior                                                                            |
| U7-3284 | Extend default solution fields configuration                                                                        |
| U7-3282 | Switch to already open case                                                                                         |
| U7-3253 | Analytics charts disappear if no data to display                                                                    |
| U7-3252 | Analytics tab percentages appear on the charts                                                                      |
| U7-3235 | Handle deletes in enterprise index for CM8 and CMOD repositories                                                    |
| U7-3214 | Add 'Attach Another' checkbox on Attach Document dialog                                                             |
| U7-3178 | Analytics tab facet drop down in search criteria                                                                    |
| U7-3155 | Sharepoint: Folders with custom class should be displayed in the folder view                                        |
| U7-3137 | Add ICAM Security System Support                                                                                    |
| U7-3129 | Implement Open in Office actions in React (Office Add-in)                                                           |
| U7-2972 | Unity React Feature Table Field                                                                                     |
| U7-2735 | Unity React Feature Grid Column Resizing                                                                            |

# Resolved Issues

The following issues were resolved in the Unity 7.7.1 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                                                    |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| U7-3442 | Delete Documents Checker throws error for CMOD crawler                                                     |
| U7-3420 | Analytics dashboard fails on init with React error                                                         |
| U7-3407 | Session expiry or timeout error in Solr and Zookeeper                                                      |
| U7-3399 | Incorrect validations for some CM8 fields on Get Info action                                               |
| U7-3388 | Issue with CM8 index documents with same \$id@s value                                                      |
| U7-3379 | Issue with crawler not picking up documents due to crawlpoint set to future date due to incorrect timezone |
| U7-3378 | UIE creates multi value and single value fields in the index for the same document property                |
| U7-3366 | Configuration tab error caused by Sharepoint connector configuration                                       |
| U7-3361 | Add Sharepoint document dialog throws an error when adding a document with the existing name               |
| U7-3342 | Incorrect search results on enterprise index search template and incorrect date with DateMath macro        |
| U7-3247 | General Properties displayed in System Properties group for CM8 documents                                  |
| U7-3237 | Analytics tab dashboards access roles doesn't work as expected                                             |
| U7-3104 | Analytics tab Export tool exports all records                                                              |
| U7-2895 | TreeView control doesn't show correct folder name in Sharepoint                                            |

# Installation Changes

No installation changes are required.

# Configuration Changes

Please refer to configuration guide to follow the configuration changes.
