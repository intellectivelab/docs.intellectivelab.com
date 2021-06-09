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

5. Add `unity.analytics.enabled` system property to [SystemProperties](tags-list/system-properties-tag.md) section and set its value to `true`:

    ```xml
    <SystemProperties>
        <!-- not relevant nodes skipped -->
        <Property ID="unity.analytics.enabled" value="true"/>
    </SystemProperties>
    ```

6. `view` action id is reserved in public API, so ensure configuration file doesn't contain action with this identifier. 
Use another word instead of `view`, e.g. `view_content` or `preview`. For more information see 
[View Content Action Configuration](./actions/view-content.md). Replace `view` occurrences in 
all the places throughout configuration files, i.e. change not only action id, but all of its usages as well.

7. `CustomParameters` section of each action should contain some additional tags. `ActionType` and `ResourceName` are 
required for all standard configurable actions. In some cases `ResourceType`, `ActionView` and some other tags can also 
be required. 

    Comparison table of `ActionType` & `ResourceName` tags for common actions:
    
    | Action | ActionType | ResourceName | Additional info |
    |:-------|:-------------|:--|:--|
    | [Document Details](actions/document-details.md) | view      | documents | View must be specified in solution configuration file * |
    | [View Content](actions/view-content.md) | view_content | documents |  |
    | [Download Document](actions/download-document.md) | download | documents |  |
    | [Create Document](actions/create-document.md) | create | documents | Action should be created for a particular document class defined in `ResourceType` tag. View must be specified in solution configuration file * |
    | [Check Out Document](actions/checkout-document.md) | checkout | documents |  |
    | [Cancel Check Out of a Document](actions/cancel-checkout-document.md) | cancelCheckOut | documents |  |
    | [Check In Document](actions/checkin-document.md) | checkin | documents | View must be specified in solution configuration file * |
    | [Open in Office (addon)](actions/open-in-office.md#open-in-office-action) | open.addon | documents |  |
    | [Checkout and Open in Office (addon)](actions/open-in-office.md#check-out-and-open-in-office-action) | checkout.addon | documents |  |
    | [Open in Browser (SharePoint)](actions/open-in-office.md#open-in-browser-action) | open.browser | documents |  |
    | [Checkout and Open in Browser (SharePoint)](actions/open-in-office.md#check-out-and-open-in-browser-action) | checkout.browser | documents |  |
    | [Open in Desktop (SharePoint)](actions/open-in-office.md#open-in-desktop-app-action) | open.desktop | documents |  |
    | [Checkout and Open in Desktop (SharePoint)](actions/open-in-office.md#check-out-and-open-in-desktop-app-action) | checkout.desktop | documents |  |
    | [Current Version](actions/current-version.md) | current | documents |  |
    | [Promote Document Version](actions/promote-version.md) | promote | documents |  |
    | [Demote Document Version](actions/demote-version.md) | demote | documents |  |
    | [Delete Document](actions/delete-document.md) | delete | documents | Applicable for both Delete Document & Delete Document Version actions |
    | [Create Folder](actions/create-folder.md) | create | folders | Action should be created for a particular document class defined in `ResourceType` tag. View must be specified in solution configuration file.  |
    | [Rename Folder](actions/rename-folder.md) | rename | folders |  |
    | [Delete Folder](actions/delete-folder.md) | delete | folders |  |
    | [Create Case](actions/create-case.md) | create | cases | Action should be created for a particular case type defined in `ResourceType` tag. View must be specified in solution configuration file. |
    | [Case Details](actions/case-details.md) | view | cases | View must be specified in solution configuration file |
    | [Delete Case](actions/delete-case.md) | delete | cases |  |
    | [Workitem Details](actions/workitem-details.md) | view | workitems | View must be specified in solution configuration file |
    | [Dispatch](actions/dispatch.md) | dispatch | workitems |  |
    | [Lock Workitem](actions/lock-workitem.md) | lock | workitems |  |
    | [Unlock Workitem](actions/unlock-workitem.md) | unlock | workitems |  |
    | [Reassign Workitem](actions/reassign.md) | reassign | cases | View must be specified in solution configuration file |

    *Unlike ExtJS views in solution configuration file must be specified not only for cases / workitems actions, but for document actions as well. Refer to [View for the action](tags-list/views-tag.md) for more details.
    
    | **Note:** Ensure new actions are added to [Grid's Actions](grids.md#how-to-add-action-to-the-grid) sections (if any).
       
    Table above contains common actions. Refer to [Actions Configuration](./actions.md) for the complete list of supported 
    actions and configuration details.

8. All actions should have an empty `Uri` tag, unless otherwise stated in React documentation for a particular action:
    
    ```xml
    <Uri/>
    ```
   
9. Restart the application and test. In case of issues refer to a particular component configuration from 
Unity React section.