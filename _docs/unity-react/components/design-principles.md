---
title: Unity Components - Design Principles
layout: docs
category: Unity 7
---
# MVVM 

Ensures clear responsibility segregation between business and presentation logic.

# Single responsibility 

Suggests creating a component that implements only one responsibility and has one reason to change. 

# Encapsulated component 

Hides its internal structure and implementation details, and defines props to control the behavior and output. 

# Composable component 

It is created from the composition of smaller specialized components. 

# Reusable component 

It is written once but used multiple times.

# Pure component 

Always renders same elements for same prop values.

# Responsive component 

Effectively responds to various screen sizes. 

# Modern Design System 

# Unity API support

The Public Unity REST API gives you access to document, case, workflow, search, and design resources through a REST API. Using this API, it’s possible to locate, update, and delete content as well as manage workflows. The API also provides a common interface to document repositories, data sources, and case management systems, which can be changed on the server with no changes needed in the client application that consumes the API.

See [Unity API documentation](../../development/unity-api/overview.md)

# Environment Variables

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