---
title: Unity 7 CMOD Configuration
layout: docs
category: Unity 7
---
    
WebSphere additional configuration for working with CMOD.

# Create Shared Library

1. Open WAS administrative console.

2. Select `Environment > Shared libraries` section.

3. Select scope and press `New` button.

4. Set unique library name in the `Name` field.

5. Add full path to the `Classpath` section for the following files:
   - `ODApi.jar`
   - `libars3wapi32.so`
   - `libars3wapi64.so`
   - `gson-2.8.1.jar`
   
   Use appropriate files for Windows instead of `libars3wapi32.so` and `libars3wapi64.so`.

6. Add full path for On-Demand files to the `Native Library Path` section.

7. Check `Use an isolated class loader for this shared library` in the `Class loading` Section:

    ![shared-libraries-creation](cmod-configuration/images/shared-libraries-creation.png)
     

8. Press `Apply`.

9. Click on `Save` link.

10. Restart WAS.

# Use Shared Library in Unity

Created Shared Library should be used in the installed Unity application:

1. Open WAS9 administrative console.

2. Select `Applications > Application Type > WebSphere enterprise applications`.

3. Click on `Unity` application.

4. Click on `Shared library references` link:

    ![unity-shared-libraries-opening](cmod-configuration/images/unity-shared-libraries-opening.png)
     
5. Select `Intellective Unity` module.

6. Press `Reference shared libraries` button.

7. Selected created Shared Library with CMOD files:

    ![shared-libraries-adding-to-unity](cmod-configuration/images/shared-libraries-adding-to-unity.png) 

8. Press `OK` button.

9. Press `OK` on Shared library references window:

    ![saving-added-shared-libraries](cmod-configuration/images/saving-added-shared-libraries.png)
     
10. Click on `Save` link:

    ![saving-changes-in-unity](cmod-configuration/images/saving-changes-in-unity.png)
     
11. Restart Unity application.

# Related Pages

[Unity 7 Installation Guide](../unity-7-installation-guide.md)
