---
title: Versions API Tag Configuration
layout: docs
category: Unity 7
---
Properties to display the versions of the Unity components in `About` dialog.

Example of configuration:

```xml
<VersionsAPI>
    <jar label="Unity Version:" name="vu-core.jar"/>
    <jar label="Unity Intelligence Engine Version:" name="uie-document.jar"/>
    <jar label="Unity P8 Content Web API Version:" name="jace.jar"/>
    <jar label="React Unity UI Version:" name="unity-origin-ui.jar" id="React-Unity-UI-Version"/>
  </VersionsAPI>
```

![Info Dialog](versions-api-tag/images/Unity-info-dialog.png)