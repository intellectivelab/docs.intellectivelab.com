---
title: Unity 7.8.3 Release Notes
layout: docs
category: Unity 7
---

# New Features

The following stories were implemented in the Unity 7.8.3 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID            | Summary                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------- |
| U7-5667/PR-259 | React grid default action should be configurable                                         |
| U7-6587        | UIE CM8 crawler DDO data item type detection                                             |
| U7-6257/PR-296 | ExtJS: native Sharepoint document link at shareLinkViaEmail action                       |
| U7-6197        | Remove Unity bar if ExtJS tabs are absent                                                |
| U7-5702        | React: Open Case Details in a separate browser tab                                       |
| U7-5620/PR-221 | ReactUI: Improve field level security to support currently selected role                 |
| U7-5519        | UIE Crawler index maintenance support for SOLR 7+                                        |
| U7-5228        | ExtJS: Filter system notifications basing on Unity startup URL parameter                 |
| U7-4002        | Must support downloading multiple documents                                              |
| U7-5678        | ExtJS: Add support of error messages at the document delete action                       |
| U7-4697        | UIE FileNET connector store OS id and name in the document                               |
| U7-5715        | React / Forms: Add Start / End links to table of content                                 |
| U7-4365        | PublicAPI, CE case attachments: RetrievalName property support                           |
| PR-163         | Word wrap on Form table headers                                                          |
| PR-184         | React UI should have "About" information                                                 |
| PR-279         | Fields located in the table on a form cannot be updated in custom code                   |
| PR-318         | Obtain User groups for Public API to apply UIE security to Support Roles for Unity Actions and Searches |

The following tasks were implemented in the Unity 7.8.3 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID            | Summary                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------- |
| U7-5629        | Error Codes For Unity                                                                    |
| U7-5542        | Default Case Folder Option to upload Attachments/Documents                               |
| U7-5329        | Optimize content search in Solr (U4I, U4SP)                                              |
| U7-6377        | UIE Crawler SOLR client restart on SOLR critical error                                   |
| U7-6415        | UIE CMOD connector custom field as document id support                                   |
| U7-6111        | Manage groups and sids on Unity side for EnterpriseSearch                                |
| U7-5706        | Implement InfiniteScroll component based on IntersectionObserver                         |
| U7-6198        | Include "mdi-react" in dependencies                                                      |

# Resolved Issues

The following issues were resolved in the Unity 7.8.3 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID              | Summary                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------- |
| PR-177          | Forms UI: collapsed section shows codes, not values for selectors and other fields        |
| PR-178/U7-5586  | React UI: Three dots for actions should not be displayed if there are no actions          |
| PR-179/U7-5591  | React UI / UCM: Dates are displayed in a strange format in History / Comments             |
| PR-182/U7-5595  | React UI: Lookup should not have multi-select option                                      |
| PR-183/U7-5594  | React UI: no way to select anything in a lookup on narrow screens                         |
| PR-186/U7-5593  | React UI: multi-value property value is not saved when tabbed out                         |
| PR-187          | React UI: dates are not saved when entered manually                                       |
| PR-195/U7-5585  | REACT - "Copy Link" in React app for UIE search is not working as expected                |
| PR-205          | When using ContextQuery parameter, where clause generated with duplicate conditions       |
| PR-211          | UrlJsonSelector does not support query context                                            |
| PR-217/U7-5584  | React UI: Can't open the case from the workitem inbasket in compact view                  |
| PR-220/U7-5588  | React UI: application switches the page when view is changed                              |
| PR-231          | Inbasket Column sort is not working                                                       |
| PR-238/U7-5592  | Unable to delete attached document                                                        |
| PR-249          | AddCommentAction is sending date objects instead of strings                               |
| PR-258          | 400 Bad request on Document checkin                                                       |
| PR-266          | Analytics Date Filters not applied or cleared when typed in                               |
| PR-267/U7-5679  | xtJS Case Documents Tab: Grid Headers don't horizontally scroll with records              |
| PR-271          | React: error message when using OOTB "Open Case (separate tab)" action                    |
| PR-277/U7-6031  | React UI: Can't create comment                                                            |
| PR-293          | Selectors are not rendering correctly when a default value is set in config               |
| PR-305          | Hidden or read-only fields are not sent to server in attach document action               |
| PR-307          | React LDAP Lookup selection works incorrectly                                             |
| PR-308          | Error in the case with an LDAP lookup field                                               |
| PR-322          | UrlJsonSelector cannot generate proper URL if URL uses context parameter                  |
| U7-5583         | Forms UI: collapsed section shows codes, not values for selectors and other fields        |
| U7-6101         | UIE Deleted document checker auto restart                                                 |
| U7-6139         | Change the format of the pie chart in Reports                                             |
| U7-6147         | public api: user/info endpoint may return irrelevant data                                 |
| U7-6152         | ExtJS: JavaScript error if eventHandlers.onBeforeSaveCase() custom event handler returns false |
| U7-6179         | SharePoint: do not use SP search API when loading document libraries                      |

# Installation Changes

No installation changes are required.

# Configuration Changes

Please refer to configuration guide to follow the configuration changes.
