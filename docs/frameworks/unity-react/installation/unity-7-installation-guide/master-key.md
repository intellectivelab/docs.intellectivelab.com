---
title: Unity Master Key Generation and Using
layout: docs
category: Unity 7
---

# Master Key

The application wide Unity master key is used to encrypt/decrypt arbitrary values at Unity configuration file.  
This key is defined either at application's `web.xml` file or via java runtime property (-Dkey=value) for the whole application server  
where Unity is deployed.

Before actual usage, the Unity master key should be configured to enable values encryption at the Unity configuration files.

The Unity master key can be generated either before Unity deployment via command line utility or when Unity already deployed and running via 
Unity Configuration Console UI.

# Unity Master Key Generation

## Generate master key with command line utility

1. Extract Unity distribution ZIP package into some temporary directory and go to the `VegaUnity/bin` folder.  

2. Use either `encryptionSupport.cmd` (on Windows) or `encryptionSupport.sh` (on Linux) to generate the Unity master key.  
    This is a general purpose utility, so the following command line arguments should be used to execute actual key generation:

    ```
    -generateKey -alphanum -cipher AES256
    ```
 
    - `-generateKey` argument selects the actual operation to be executed
    - `-alphanum` argument forces the utility to generate key with only alphanumeric characters
    - `-cipher AES256` argument specifies the cipher type (supported values: 3DES, AES256, AES)

For example:  
```
C:\tmp\Unity_7.7.2\VegaUnity\bin>encryptionSupport.cmd -generateKey -alphanum -cipher AES256
---------------------------------------------------------
| Encryption type: AES256
---------------------------------------------------------
ZjJwRjFHZ04yM091bUJrb0t3amFHUTViNkVqU280RE0=
```

## Generate master key with Unity Configuration Console UI

The master key can be generated through the dedicated UI dialog at Unity Configuration Console. 
 
1. Login to the Unity with the user with the rights to access the Configuration Console tab.  

2. Go to the Configuration Console tab and locate the `Encrypt value` button at the main toolbar at the right.  

3. Press that button and the `Encrypt Value` dialog will appear.  

4. Select the encryption type using `Encryption` radio control and then press the `Generate key` button at the bottom of this dialog.  

The generated master key will be displayed at the new `Generated key` popup window:

![generate-master-key-at-cc](master-key/images/generate-master-key-at-cc.png) 


# Use Generated Master Key for Unity Instance Deployment

## Master key at application's web.xml file for WebSphere Liberty Profile

In this case, the master key is specified at application's `web.xml` file in the same way as the location of main Unity configuration  
file (`vSpaceConfigURL` one).  
The following env entry names can be used for that purpose (each next item at the list can be used to override key from the item before):  

- `encryptionKeysFile`. This value points to the location of encryption keys file. See the file format description below.
- `vuKey` (pre Unity 7.7.2 approach). This is exact value of AES256 encryption key.

For example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app id="VegaUnity" version="2.4" xmlns="http://java.sun.com/xml/ns/j2ee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">

...
    <env-entry>
        <env-entry-name>encryptionKeysFile</env-entry-name>
        <env-entry-type>java.lang.String</env-entry-type>
        <env-entry-value>C:/wlp/usr/servers/Vu7/keys/unity_master_keys.txt</env-entry-value>
    </env-entry>
...

</web-app>
```

or

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app id="VegaUnity" version="2.4" xmlns="http://java.sun.com/xml/ns/j2ee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">

...
    <env-entry>
        <env-entry-name>vuKey</env-entry-name>
        <env-entry-type>java.lang.String</env-entry-type>
        <env-entry-value>ZjJwRjFHZ04yM091bUJrb0t3amFHUTViNkVqU280RE0=</env-entry-value>
    </env-entry>
...

</web-app>
```

The encryption keys file is the plain text file that contains the list of master keys for each supported encryption algorithms (3DES, AES and AES256).  
For example:

```text
3DES=s1f449/mMbbLi423f78LmFTltQRPx83x
AES=ZGVmYXVsdCBhZXMxMjgga2V5LCBwbGVhc2U4643wbGFjZSBpbiBwcm9kdWN0aW9u
AES256=ZjJwRjFHZ04yM091bUJrb0t3amFHUTViNkVqU280RE0=
```

## Master key at java runtime properties

In this case, the master key is specified via java runtime property (-Dkey=value) for the whole application server.  
The following java runtime properties can be used for that purpose (each next item at the list can be used to override key from the item before):  

* `encryptionKeysFile` (-DencryptionKeysFile=_file_path_). This value points to the location of encryption keys file. See the file format description above.
* `uKey.AES256` (-DuKey.AES256=_key_value_). This is exact value of AES256 encryption key.
* `uKey.3DES` (-DuKey.3DES=_key_value_). This is exact value of 3DES encryption key.
* `uKey.AES` (-DuKey.AES=_key_value_). This is exact value of AES (AES with 128 bits key) encryption key.
* `uKey` (-DuKey=_key_value_). This is alias for `uKey.AES256` java runtime property.

## Master Key usage in WebSphere for a specific application

## Master Key usage in WebSphere for all installed application

Generated Master Key can be used for all installed application in WebSpere. It can be configured executing the following steps in the WebSphere:

1. Open the WAS administrative console at the following path where `<ServerName>` is the name of your server:  
    `http://<ServerName>:9060/ibm/console`

2. Log into the system.

3. From the left navigation, open `Servers > Server Types > WebSphere application servers`.

4. In the `Server Infrastructure` section, expand `Java and Process Management`:
     ![Expand Java and Process Management](master-key/images/expand-java-process-management.png)

5. Select `Process definition`.

6. In the `Additional Properties` section, select `Java Virtual Machine`:
    ![Java Virtual Machine](master-key/images/java-virtual-machine.png)

7. In the `Additional Properties` section, select `Custom Properties`:
    ![Custom Properties](master-key/images/custom-properties.png)

8. Click `New…`.

9. For `Name`, enter value from [Master key at java runtime properties](#master-key-at-java-runtime-properties), for example, `uKey`. For `Value`, enter generated Master Key.
    ![New Custom Property creation](master-key/images/new-custom-property-creation.png)

10. Click `Apply`.

11. Click `Save`.

12. Restart WebSphere.

## Master Key usage in WebSphere for a specific application

Generated Master Key can be used for a specific installed application in WebSpere. It can be configured executing the following steps in the WebSphere:

1. Open the WAS administrative console at the following path where `<ServerName>` is the name of your server:  
    `http://<ServerName>:9060/ibm/console`
    
2. Log into the system.

3. From the left navigation, open `Applications > Application Types > WebSphere application applications`.

4. Click on Application Name that should use generated Master kay

5. In the `Web Module Properties` section, select `Environment entries for Web modules`:
    ![Web Module Properties](master-key/images/web-module-properties.png)

6. For `Name` with `vuKey` value, enter generated Master Key:
    ![Master Key for application](master-key/images/master-key-for-application.png)

7. Click `OK`.

8. Click `Save`.

9. Restart application.

# Related Pages

[Unity 7 Installation Guide](../unity-7-installation-guide)
