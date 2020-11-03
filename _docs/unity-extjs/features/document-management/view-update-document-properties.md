---
title: View And Update Document Properties
layout: docs
category: Unity 7
---
# Description

This feature is available via `Get Info` context-menu item. It opens a modal dialog with several tabs. Document 
properties can be viewed and updated on `Properties` tab:

![Document properties](view-update-document-properties/images/getinfo-properties.png)

This tab contains:

- Information on document class in a read-only dropdown. Each document class has symbolic and display name inside data 
provider. User sees the display name of the class in the dropdown.

- `Properties` section. It's expanded by default. 

- `System Properties` section. It contains system read-only fields and collapsed by default.

- `Update` button, which is disabled by default and becomes enabled once user changes property values.

- `Close` button to close the dialog.

# Configuration

See [Get Info feature configuration](../../configuration/actions/get-info.md) and [Properties action configuration](../../configuration/actions/properties.md) 
for the details.