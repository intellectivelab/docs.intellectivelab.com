---
title: Migration from ExtJS
layout: docs
category: Unity 7
---
This document describes changes, that should be applied to configuration files to adopt them for React UI.

1. Create a solution file or use existing one and point to it location in [Solutions](tags-list/solutions-tag.md) section.

2. If configuration file contains cases/workitems related search templates / actions, ensure 
[Solutions Configuration](./solutions-configuration.md) section is configured. 

3. Ensure `ResourceName` operation property is presented in all search templates. Some providers may have
other required attributes to be specified in `OperationProperties` section, when the search template is used 
to search for documents / cases (e.g. `ResourceType`). 

    Example of search template configuration:
    
    ```xml
    <SearchTemplate ID="nCinoManualLoan">
      <!-- not relevant nodes skipped -->
      <Operation dataProviderId="ce_repository" type="search">
        <OperationProperties>
          <Property ID="ResourceName" type="FIRST">
            <SecuredValue>
              <Value>documents</Value>
            </SecuredValue>
          </Property>
          <Property ID="ResourceType" type="FIRST">
            <SecuredValue>
              <Value>CreditLoan</Value>
            </SecuredValue>
          </Property>
          <!-- not relevant nodes skipped -->
        </OperationProperties>
      </Operation>
    </SearchTemplate>
    ```
    
    For more information see [Search Templates Configuration](./search-templates.md).

4. Configure [Perspectives](./perspectives.md) section.

5. `view` action id is reserved in public API, so ensure configuration file doesn't contain action with this identifier. 
Use another word instead of `view`, e.g. `view_content` or `preview`. For more information see 
[View Content Action Configuration](./actions/view-content.md). Replace `view` occurrences in 
all the places throughout configuration files, i.e. change not only action id, but all of its usages as well.

6. `CustomParameters` section of each action should contain some additional tags. `ActionType` and `ResourceName` are 
required for all standard configurable actions. In some cases `ResourceType`, `ActionView` and some other tags can also 
be required. 

    Comparison table of `ActionType` & `ResourceName` tags for common actions:
    
    | ActionType | ResourceName | Additional info | Action |
    |:-------|:-------------|:--|:--|
    | view      | documents | View must be specified in solution configuration file * | [Document Details](actions/document-details.md) |
    | view_content | documents |  | [View Content](actions/view-content.md) |
    | download | documents |  | [Download Document](actions/download-document.md) |
    | create | documents | Action should be created for a particular document class defined in ResourceType tag. View must be specified in solution configuration file * | [Create Document](actions/create-document.md) |
    | checkout | documents |  | [Check Out Document](actions/checkout-document.md) |
    | cancelCheckOut | documents |  | [Cancel Check Out of a Document](actions/cancel-checkout-document.md) |
    | checkin | documents | View must be specified in solution configuration file * | [Check In Document](actions/checkin-document.md) |
    | open.addon | documents |  | [Open in Office (addon)](actions/open-in-office.md#open-in-office-action) |
    | checkout.addon | documents |  | [Checkout and Open in Office (addon)](actions/open-in-office.md#check-out-and-open-in-office-action) |
    | open.browser | documents |  | [Open in Browser (SharePoint)](actions/open-in-office.md#open-in-browser-action) |
    | checkout.browser | documents |  | [Checkout and Open in Browser (SharePoint)](actions/open-in-office.md#check-out-and-open-in-browser-action) |
    | open.desktop | documents |  | [Open in Desktop (SharePoint)](actions/open-in-office.md#open-in-desktop-app-action) |
    | checkout.desktop | documents |  | [Checkout and Open in Desktop (SharePoint)](actions/open-in-office.md#check-out-and-open-in-desktop-app-action) |
    | current | documents |  | [Current Version](actions/current-version.md) |
    | promote | documents |  | [Promote Document Version](actions/promote-version.md) |
    | demote | documents |  | [Demote Document Version](actions/demote-version.md) |
    | delete | documents | Applicable for both Delete Document & Delete Document Version actions | [Delete Document](actions/delete-document.md) |
    | create | folders |  | [Create Folder](actions/create-folder.md) |
    | rename | folders |  | [Rename Folder](actions/rename-folder.md) |
    | delete | folders |  | [Delete Folder](actions/delete-folder.md) |
    | create | cases | Action should be created for a particular case type defined in ResourceType tag. View must be specified in solution configuration file. | [Create Case](actions/create-case.md) |
    | view | cases | View must be specified in solution configuration file * | [Case Details](actions/case-details.md) |
    | delete | cases |  | [Delete Case](actions/delete-case.md) |
    | view | workitems | View must be specified in solution configuration file * | [Workitem Details](actions/workitem-details.md) |
    | dispatch | workitems |  | [Dispatch](actions/dispatch.md) |
    | lock | workitems |  | [Lock Workitem](actions/lock-workitem.md) |
    | unlock | workitems |  | [Unlock Workitem](actions/unlock-workitem.md) |

    *Unlike ExtJS views in solution configuration file must be specified not only for cases / workitems actions, but for document actions as well. Refer to [View for the action](tags-list/views-tag.md) for more details.
    
    | **Note:** Ensure new actions are added to [Grid's Actions](grids.md#how-to-add-action-to-the-grid) sections (if any).
       
    Table above contains common actions. Refer to [Actions Configuration](./actions.md) for the complete list of supported 
    actions and configuration details.

7. All actions except for `dispatch` should have an empty `Uri` tag:
    
    ```xml
    <Uri/>
    ```
   
8. Restart the application and test. In case of issues refer to a particular component configuration from 
Unity React section.