---
title: Unity 7.8.2 Release Notes
layout: docs
category: Unity 7
---

# New Features

The following stories were implemented in the Unity 7.8.2 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------|
| U7-4738 | Generalize obtaining of Spring applicationContext all over the code                                                                               |
| U7-4394 | ExtJS: Remove 'Print' button from the documents export dialog.                                                                                    |
| U7-4491 | U4SP - Remove Bookmarks from Details View                                                                                                         |
| U7-4448 | Unity REST API: split case needs to return information about created case after split                                                             |
| U7-4446 | Unity Case Management Public API should return case context within the workitem                                                                   |
| U7-4916 | SharePoint: An option to store Azure token at application level                                                                                   |
| U7-4015 |  React: Field level security                                                                                                                      |
| U7-4935 | ExtJS: Support of document types with special characters at Add document action's FieldsClearedOnAddMore configuration                            |
| U7-5079 | UIE: Crawler - make mime type extensions case insensitive                                                                                         |
| U7-5031 | ExtJS: Add "Copy link" button at "View Link" dialog.                                                                                              |
| U7-5071 | React: ICM Split case - pull props from source case support                                                                                       |
| U7-4464 | User Settings customization                                                                                                                       |
| U7-4995 | React: hide quick search panel when there are no criteria fields defined in the config as a quick search field                                    |
| U7-4117 | Implement Rename File action                                                                                                                      |
| U7-4889 | (U4SP) UIE security filtering enhancements                                                                                                        |
| U7-3983 | Add Drag-and-Drop feature for Folders View                                                                                                        |
| U7-5095 | Encrypting and decrypting unification for unity and uie                                                                                           |
| U7-4378 | RangeCondition optimization for UIE                                                                                                               |
| U7-5579 | UIE CMOD handle "The user is not permitted to perform the operation" in document fetch as deleted document                                        |
| U7-5327 | React UI should have "About" information                                                                                                          |
| U7-4792 | Add logic for field values in forms configuration                                                                                                 |
| U7-5098 | Linked selectors in UCM                                                                                                                           |
| U7-4795 | Decouple SU token logic from auth provider                                                                                                        |
| U7-3734 | Content store cleaner component                                                                                                                   |
| U7-5125 | Sharepoint customized notifications                                                                                                               |
| U7-4657 | Support for multiple Filenet Object Stores in Interchange                                                                                         |
| U7-3583 | Interchange: composite function processor                                                                                                         |
| PR-109  | Remove document uploading button from Unity                                                                                                       |
| PR-87   | REACT - Action and Folder Tree View Visibility                                                                                                    |
| PR-88   | REACT - FolderPath Attribute                                                                                                                      |
| PR-108  | REACT - Role Selection                                                                                                                            |
| PR-147  | Lookup control doesn't show any values in Reactv                                                                                                  |
| PR-100  | Unity REST API for split case needs to return infomation about created case after split                                                           |
| PR-117  | JSON selector on React form always returns first 20 items                                                                                         |
| PR-161  | User not able to type or paste file location to Attach document for ePermit application                                                           |
| PR-114  | Client data in sample configs for Interchange                                                                                                     |
| PR-118  | JSON selector is failing when environment variable is used to configure URL                                                                       |
| PR-136  | Unable to Define FieldsClearedOnAddMore for SharePoint Document Class                                                                             |
| PR-204  | Unity events handler issues                                                                                                                       |
| PR-138  | Sharepoint connector expiration timeout                                                                                                           |
| PR-94   | Unity Case Management API should return case context within the work item element                                                                 |
| PR-155  | View link dialog copy to clipboard feature                                                                                                        |
| PR-58   | Field level security                                                                                                                              |
| PR-115  | Support for multiple Filenet Object Stores in Interchange                                                                                         |
| PR-168  | Dependent choice/pick lists                                                                                                                       |
| PR-75   | Getting document content's retrieval name and size and using public Unity API                                                                     |
| PR-174  | Split case function should copy properties from parent case                                                                                       |
| PR-116  | Sharepoint customized notifications                                                                                                               |
| PR-162  | show different system notifications based on request parameter                                                                                    |
| PR-127  | Add logic for field values in forms configuration                                                                                                 |

# Resolved Issues

The following issues were resolved in the Unity 7.8.0 release. The ID and Description are from Intellective’s internal ticket tracking system:

| ID      | Summary                                                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------|
| U7-4508 | JSON selector on React form always returns first 20 items                                                                                         |
| U7-4502 | ExtJS: partial display of field validation error icon and excessive scrollbars                                                                    |
| U7-4435 | REACT - Create Case Submit Handler - Reject is not working in the latest release                                                                  |
| PR-98   | Unity returns more search results than the configured number in searcher configuration                                                            |
| U7-4775 | SP: folders are supposed to be sorted regardless of "case"                                                                                        |
| PR-105  | Error icon does not display properly in Chrome                                                                                                    |
| U7-4785 | UIE: SharePoint connector - for some item Modified@s field is crawled instead of Modified@d                                                       |
| PR-110  | Leave blank option in drop down causes errors in different scenarios                                                                              |
| U7-4414 | Fix Povider's SearchLimit option                                                                                                                  |
| PR-90   | REACT - Create Case Submit Handler - Reject is not working in the latest release                                                                  |
| U7-4076 | Folders View - Add horizontal scrolling                                                                                                           |
| U7-3682 | Ability to configure UIE grid without SharePoint specific required fields                                                                         |
| U7-4366 | Unity: infinite paging grid lists some documents multiple times                                                                                   |
| U7-4884 | U4SP: Infinite scrolling stops working when a page is zoomed out                                                                                  |
| PR-142  | Dates in Case Search are in the wrong time zone - React UI                                                                                        |
| U7-4929 | Grid disappears when screen is resized in React                                                                                                   |
| U7-4920 | Missing CM8 documents for backward crawling till CrawlMinDate                                                                                     |
| U7-4947 | Incorrect data in downloaded xls on Favorites view                                                                                                |
| U7-4405 | Selected date always printed on the form 2 days before                                                                                            |
| U7-4931 | Dates in Case Search are in the wrong time zone - React UI                                                                                        |
| U7-5033 | ReactUI: Error when attaching document to the new case.                                                                                           |
| U7-4836 | insubfolder search operation throws NPE when protobuf transport is used                                                                           |
| U7-5077 | UIE CM8 connector delete documents in index by object id when crawling CM8 types                                                                  |
| U7-4432 | Analytics search template reset issue                                                                                                             |
| PR-101  | Analytics search template reset issue                                                                                                             |
| PR-146  | Grid disappears when screen is resized in React                                                                                                   |
| PR-102  | Selected date always printed on the form 2 days before                                                                                            |
| U7-4129 | SharePoint: search by Boolean works incorrectly                                                                                                   |
| U7-5000 | SharePoint: detection of item not found or no permission                                                                                          |
| U7-4903 | Detailed view: list of documents scrolled up                                                                                                      |
| U7-4668 | Can not attach document to a Case                                                                                                                 |
| U7-4658 | Unity Table Field component should provide a cell the form context                                                                                |
| U7-3736 | ExtJS: Workitems aren't displayed in Calendar View                                                                                                |
| U7-4287 | SP: Error is displayed after opening context menu for UIE documents                                                                               |
| U7-4879 | Fix CaseAttachmentsController.attachNewDocument                                                                                                   |
| PR-170  | Attachments tab configured for work item fails to load                                                                                            |
| PR-144  | Warning when opening SharePoint document in desktop app                                                                                           |
| U7-5076 | ExtJS: Case documents disappear after delayed case creation                                                                                       |
| U7-5067 | Attachments tab configured for work item fails to load                                                                                            |
| U7-5100 | The action "rename" disappeared from context menu                                                                                                 |
| U7-4408 | UIE: Error logged on SP crawling agent stop                                                                                                       |
| U7-5075 | ExtJS: MV Fields are Shortened in "Add document" and "Get info" dialogs                                                                           |
| PR-111  | SharePoint Connector throws error when API token has expired                                                                                      |
| PR-151  | Missing CM8 documents for backward crawling till CrawlMinDate                                                                                     |
| PR-172  | Documents disappear after delayed case creation                                                                                                   |
| PR-131  | CM8 delete documents crawler (DB) does not work for all scenarios                                                                                 |
| PR-160  | MV Fields are Shortened in Dialog                                                                                                                 |
| PR-159  | Sharepoint connector "No bean named 'AllSites' available" issue                                                                                   |
| PR-133  | Analytics date filter issue                                                                                                                       |
| PR-139  | Attachment field in forms stopped working                                                                                                         |
| PR-122  | Unity Table Field component should provide a cell the form context                                                                                |
| PR-165  | Facet Tree Search doesn't filter search results                                                                                                   |
| PR-103  | Forms UI: Hidden field data should be cleaned up                                                                                                  |
| PR-148  | Field validation passed for the empty field (React)                                                                                               |
| PR-119  | Selector on React form does not handle exception gracefully                                                                                       |
| U7-4923 | [U4SP] The search result = 0 didn't display "No result" sign.                                                                                     |
| PR-157  | Search panel is not working on both Internal and External REACT .                                                                                 |
| U7-4496 | React Forms UI: Hidden field data should be cleaned up                                                                                            |
| U7-4937 | Field validation passed for the empty field (React)                                                                                               |
| U7-4943 | Lookup control doesn't show any values in React                                                                                                   |
| U7-4944 | Analytics date filter issue                                                                                                                       |
| U7-4498 | Selector on React form does not handle exception gracefully                                                                                       |
| U7-3873 | React: Previews not shown in Create Document dialog                                                                                               |
| U7-5099 | React: Work Item - Dispatch Submit Handler is closing on reject()                                                                                 |
| U7-5088 | ExtJS: Facet Tree Search doesn't filter search results                                                                                            |
| U7-5178 | ExtJS: JavaScript error displayed when trying to view properties of document without 'view properties' right.                                     |
| U7-5196 | Sharepoint: Unity cuts documents extension when adding to Sharepoint                                                                              |
| U7-5233 | SharePoint: Open in Desktop app warning in Chrome                                                                                                 |
| U7-5211 | ExtJS: CM8 document's GetInfo access check returns "viewProperties" equals false even if the user has modifyItemProperties right for this document|
| U7-5509 | Unity configuration console error when using env. variable at UIE provider's HliServiceUrl parameter.                                             |
| U7-5517 | Public-API: scope is not passed to DocumentBaseLinks from CaseAttachmentsController                                                               |
| U7-4934 | [U4SP] Error misinterpreting                                                                                                                      |
| U7-5330 | LDAP lookup in react is not executing search unless dialog is opened                                                                              |
| U7-4993 | React: GridViewContentList wrong query                                                                                                            |
| PR-193  | JavaScript error displayed when trying to view properties of CM8 document                                                                         |
| PR-201  | Unity cuts documents extension when adding to Sharepoint                                                                                          |
| PR-202  | Cannot view document properties for some CM8 Item Type views                                                                                      |
| PR-198  | Office 365 Open Document shows warning                                                                                                            |
| U7-3708 | React: Date field in Detail Page shows as DateTime instead of Date                                                                                |
| U7-4902 | [React] non-correct status in response                                                                                                            |
| U7-5131 | Forms: User should not be able to hit the button twice or several times                                                                           |
| U7-5130 | React / Forms: validation doesn't work when user quickly presses the button                                                                       |
| U7-5066 | React: Read-only fields in the form doesn't display any data                                                                                      |
| U7-5619 | Modified By contains value p8admin2_sp though no one documents aren't displayed in the grid for                                                   |
| U7-3710 | ExtJS: Lookup dialog is closed immediately after displaying                                                                                       |
| U7-5516 | Copy to action doesn't work if folder contains apostrof                                                                                           |
| U7-5060 | Unity UI Forms: Form Table headers are displayed incorrectly when the length of the header is long                                                |
| U7-5607 | UrlJsonSelector Query Context support                                                                                                             |
| U7-5571 | Ucm: support OOTB comments and history entities                                                                                                   |
| U7-5589 | When using ContextQuery parameter, where clause generated with duplicate conditions                                                               |
| U7-5587 | "Attachment" field in forms ui can't attach a document                                                                                            |
| U7-5590 | AddCommentAction is sending date objects instead of strings                                                                                       |
| PR-241  | Documents are not displayed on case " Documents" tab                                                                                              |
| U7-5581 | Selectors in create Documents view is throwing an error                                                                                           |
| U7-5021 | Add user friendly message while concurrent access                                                                                                 |
| U7-5576 | Make it possible not to use UcmCaseExternalLink with ucmIcmDefault startegy                                                                       |
| U7-5087 | ExtJS: The latest document version should be used to display/download content at case attachments tab                                             |
| U7-5681 | Remove "file" parameter from checkin document link                                                                                                |
| U7-5703 | ExtJS: UCM Documents tab throws an error on loading                                                                                               |
| U7-5704 | IcmCaseFolderService.getSubFolderByName requires secured context                                                                                  |
| U7-5725 | No SuchElementException during retrieving case                                                                                                    |
| U7-5711 | React: Error is displayed for attaching document to the case                                                                                      |
| U7-4880 | Favorites API query param "folder" should not be required"                                                                                        |
| U7-6105 | Force TLSv1.2 for SharePoint connector                                                                                                            |
| U7-5721 | Split case issues investigation                                                                                                                   |
| PR-290  | SharePoint Connector Throwing Error                                                                                                               |
| PR-261  | Selector inside a table on a form displays value instead of name                                                                                  |
| PR-233  | Public-API: scope var is not passed to DocumentBaseLinks                                                                                          |
| PR-275  | Forms - Can't attach a document                                                                                                                   |
| PR-280  | Can't create a case in 7.8.2-RC8 build                                                                                                            |
| PR-276  | Split case feature doesn't work in 7.8.2-RC7                                                                                                      |
| PR-149  | Wrong Document Version Being Retrieved                                                                                                            |
| PR-234  | Unity configuration console error                                                                                                                 |
| PR-274  | Documents tab throws an error on loading                                                                                                          |
| PR-242  | History/Comments data is not displayed                                                                                                            |
| PR-175  | Work Item - Dispatch Submit Handler is closing on reject()                                                                                        |
| PR-240  | Error processing deleted repository documents check in CMOD deleted documents checker                                                             |
| PR-167  | Read-only fields in the form doesn't display any data                                                                                             |
| PR-206  | LDAP lookup in react is not executing search unless dialog is opened                                                                              |
| PR-41   | REACT -  Date field in  Detail Page shows as DateTime instead of Date                                                                             |
| PR-191  | Forms: User should not be able to hit the button twice or several times                                                                           |
| PR-189  | React / Forms: validation doesn't work when user quickly presses the button                                                                       |
| PR-254  | Selectors in create Documents view is throwing an error                                                                                           |
| PR-232  | "Attachment" field in forms ui can't attach a document                                                                                            |
| PR-278  | React UI: Can't attach a document using OOTB Case "Attach" tool                                                                                   |

# Installation Changes

No installation changes are required.

# Configuration Changes

Please refer to configuration guide to follow the configuration changes.