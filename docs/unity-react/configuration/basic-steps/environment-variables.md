---
title: Configuration - Environment Variables
layout: docs
category: Unity 7
---
# Overview

The concept for Environment Variables (EVs) is the same as with a normal program variable, use a variable for values that will need to be changed when you promote your solution to different platforms and/or environments. 
This allows for a simple update to the variable value in one location without having to worry about many places across the configuration.  

An EV can be used in any Unity configuration file - Unity System XML, UCM Solution XML or other Solution XML.

The EVs and their values are stored in an `environment.ini` file. The file has the same name as the Unity System XML with `-environment.ini` at the end, for example: 

- Unity System XML is `ucm-icm.xml`
- Environment INI is `ucm-icm-environment.ini`

When migrating to a new environment, by using a common EV set, the `environment.ini` would be specific to the environment, meaning only configuration XML files and code are migrated to the new environment, keeping the `environment.ini` as a static file in the environment. 
The only updates required if new environment variables are added or a specific environment value changes.

Examples for using an Environment Variable

- URL/URI - places in the configuration where you use specific URL/URI values like `DataConnectors`
- Case Management Solution Name - the `Solution Name` is an often referenced value through the Unity System XML and the UCM Solution XML
- UI Dialogue Text - Login Dialogue, Window Title, etc. are good places to use an EV so that you can add text to identify the environment such as `Unity -Dev` to provide a visual to remind administrators and testers where they are working.
