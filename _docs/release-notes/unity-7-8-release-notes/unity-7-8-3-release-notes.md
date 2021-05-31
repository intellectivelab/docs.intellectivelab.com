---
title: Unity 7.8.3 Release Notes
layout: docs
category: Unity 7
---

# New Features

The following stories were implemented in the Unity 7.8.3 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                  |
| ------- | ------------------------------------------------------------------------ |
| U7-4002 | Must support downloading multiple documents                              |
| U7-4365 | PublicAPI, CE case attachments: RetrievalName property support           |
| U7-4697 | UIE FileNET connector store OS id and name in the document               |
| U7-5228 | ExtJS: Filter system notifications basing on Unity startup URL parameter |
| U7-5519 | UIE Crawler index maintenance support for SOLR 7+                        |
| U7-5620 | ReactUI: Improve field level security to support currently selected role |
| U7-5667 | React grid default action should be configurable                         |
| U7-5678 | ExtJS: Add support of error messages at the document delete action       |
| U7-5702 | React: Open Case Details in a separate browser tab                       |
| U7-5714 | React / Forms: Color coding for table of content sections                |
| U7-5715 | React / Forms: Add Start / End links to table of content                 |
| U7-5970 | UIE CMOD connector recrawls today's documents over and over              |
| U7-6141 | React UI. Unity Forms ToC improvements                                   |

| U7-6197 | Remove Unity bar if ExtJS tabs are absent |
| U7-6201 | React / Forms: We need an ability to add help to table control on the form |
| U7-6257 | ExtJS: native Sharepoint document link at shareLinkViaEmail action |
| U7-6585 | Create a tool to allow admin users to delete documents from enterprise index |
| U7-6587 | UIE CM8 crawler DDO data item type detection |

# Resolved Issues

The following issues were resolved in the Unity 7.8.3 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| U7-3654 | Documents Search: all document versions are available in grid                                                          |
| U7-3668 | UCM+ICM/JBPM: Search in history/comments not work                                                                      |
| U7-3683 | UCM+ICM&JBPM: Download action is available for several files                                                           |
| U7-3733 | Unity: remove text "vSpace" from dialog window                                                                         |
| U7-3914 | [React] The "Select period" range element work only with the current year                                              |
| U7-4407 | ExtJS: Folder Tree isn't displayed in Copy/Move dialog while expand button isn't pressed                               |
| U7-4460 | React: Empty query is sent to the server for LDAP Lookup                                                               |
| U7-4666 | Alfresco documents: Error on check out document                                                                        |
| U7-4758 | NumericField blocks any input after Clear button was pressed                                                           |
| U7-5168 | Details page isn't opened for documents BOX                                                                            |
| U7-5189 | [React/FileNet/UIE] Search by date property doesn't work                                                               |
| U7-5563 | UIE: Error logged on crawl agent stop - "stream context is null"                                                       |
| U7-5573 | Searching using Modify Date doesn't work is date was filled in manually                                                |
| U7-5583 | Forms UI: collapsed section shows codes, not values for selectors and other fields                                     |
| U7-5584 | React UI: Can't open the case from the workitem inbasket in compact view                                               |
| U7-5585 | REACT - "Copy Link" in React app for UIE search is not working as expected                                             |
| U7-5586 | React UI: Three dots for actions should not be displayed if there are no actions                                       |
| U7-5588 | React UI: application switches the page when view is changed                                                           |
| U7-5591 | React UI / UCM: Dates are displayed in a strange format in History / Comments                                          |
| U7-5592 | Unable to delete attached document                                                                                     |
| U7-5593 | React UI: multi-value property value is not saved when tabbed out                                                      |
| U7-5594 | React UI: no way to select anything in a lookup on narrow screens                                                      |
| U7-5595 | React UI: Lookup should not have multi-select option                                                                   |
| U7-5599 | User can't attach document                                                                                             |
| U7-5605 | missed folder icon on folder with long title                                                                           |
| U7-5648 | React: Copy link is not working                                                                                        |
| U7-5649 | DnD move/copy is not working                                                                                           |
| U7-5650 | Grid and context menu are refreshed with delay                                                                         |
| U7-5653 | React, Alfresco: error on check out, check in document                                                                 |
| U7-5655 | grid is not appeared in infinite scroll                                                                                |
| U7-5668 | [React] There is no scroll line to view all the columns on the grid                                                    |
| U7-5676 | FileNet provider (maybe others too) returns can_Add=false for folders which prevents DnD to them                       |
| U7-5679 | ExtJS: Grid Headers don't horizontally scroll with records at the Case Documents Tab                                   |
| U7-5687 | [React] User can't create bookmark                                                                                     |
| U7-5688 | [React] Show up only first 20 cases on detail view                                                                     |
| U7-5694 | React: List of actions in context menu are refreshed later than grid updating                                          |
| U7-5695 | React: List of bulk actions are empty after several attached documents selection                                       |
| U7-5696 | React: Folder can't be selected while document creation for attaching to the case                                      |
| U7-5700 | Old cases can't be opened or opened with error                                                                         |
| U7-5707 | React: Default value is skipped while required fields valiation                                                        |
| U7-5709 | UIE: error after maintenance in crawler run in passive mode                                                            |
| U7-5713 | UIE: crawler log message misleading                                                                                    |
| U7-5724 | Error on Configuration console when I apply changes                                                                    |
| U7-5727 | Refresh grid is not working                                                                                            |
| U7-6031 | React UI: Can't create comment                                                                                         |
| U7-6093 | Handle selector values when metadata is being retrieved via API                                                        |
| U7-6100 | Empty page is shown after Delete version action                                                                        |
| U7-6101 | UIE Deleted document checker auto restart                                                                              |
| U7-6109 | [React] Error is displayed for attaching document to the split case                                                    |
| U7-6119 | User can't open workitem detail view                                                                                   |
| U7-6130 | [React/Alfresco] User can't open detail view of documents                                                              |
| U7-6132 | [React] After saving any changes the user goes back to the common grid with a message like "Unsaved data will be lost" |
| U7-6133 | [React] Documents/case/workitem detail view is opened with the error                                                   |
| U7-6137 | Check out, cancel check out, checkin are not available on properties view                                              |
| U7-6139 | Change the format of the pie chart in Reports                                                                          |
| U7-6140 | JBPM+React: List of workitems is empty                                                                                 |
| U7-6142 | JBPM+React: Properties for CLOSED case are displayed in View though case has status = OPEN                             |
| U7-6143 | JBPM+React: History/Comments tab is empty                                                                              |
| U7-6144 | JBPM+React: White screen is displayed after Case >> Workitems tab selection                                            |
| U7-6145 | JBPM+React: Error is displayed while Workitem properties opening                                                       |
| U7-6147 | public api: user/info endpoint may return irrelevant data                                                              |
| U7-6152 | ExtJS: JavaScript error if eventHandlers.onBeforeSaveCase() custom event handler returns false                         |
| U7-6153 | JBPM+React: Exception is displayed for Copy/Move to actions                                                            |
| U7-6155 | JBPM+React: Non changed document title is displayed on attached sharepoint documents tab                               |
| U7-6156 | JBPM+React: Only Complete dispatch action can be executed for workitem                                                 |
| U7-6179 | SharePoint: do not use SP search API when loading document libraries                                                   |
| U7-6189 | Folder view disappears                                                                                                 |
| U7-6195 | JBPM+React: The same workitems are displayed for different roles                                                       |
| U7-6230 | JBPM+React: Workitems that was created from milestone can't be completed                                               |
| U7-6362 | jBPM+React: List of cases aren't displayed if ColumnSet contains Date property                                         |
| U7-6368 | jBPM+React: Dispatch action can't be executed                                                                          |
| U7-6372 | jBPM+React: History tab for case is empty                                                                              |
| U7-6423 | jBPM+React: White screen is displayed after selection Attachments tab in Workitem View for sub-process workitems       |
| U7-6429 | UrlJsonSelector cannot generate proper URL if URL uses context parameter                                               |
| U7-6459 | Name from default config is displayed in linked selector after main selector was changed                               |
| U7-6486 | jBPM+React: Workitem can't be completed if Date property was filled in                                                 |
| U7-6540 | UserContext should not be case sensitive                                                                               |
| U7-6619 | UIE: remove SiteScanIntervalSec setting from sample Sharepoint crawler config                                          |
| U7-6621 | UIE: CE52 crawler broken                                                                                               |

# Installation Changes

No installation changes are required.

# Configuration Changes

Please refer to configuration guide to follow the configuration changes.
