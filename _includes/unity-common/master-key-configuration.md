### Master key

The application wide Unity master key is used to encrypt/decrypt arbitrary values at Unity configuration file.  
This key is defined either at application's web.xml file or via java runtime property (-Dkey=value) for the whole application server  
where Unity is deployed.

Before actual usage, the Unity master key should be configured to enable values encryption at the Unity configuration files.

The Unity master key can be generated either before Unity deployment via command line utility or when Unity already deployed and running via 
Unity Configuration Console UI.

### Generate master key with command line utility

Extract Unity distribution ZIP package into some temporary directory and go to the `VegaUnity/bin` folder.  
Use either `encryptionSupport.cmd` (on Windows) or `encryptionSupport.sh` (on Linux) to generate the Unity master key.  
This is a general purpose utility, so the following command line arguments should be used to execute actual key generation:  
`-generateKey -alphanum -cipher AES256`.  
The `-generateKey` argument selects the actual operation to be executed, the `-alphanum` argument forces the utility to generate  
key with only alphanumeric characters and the `-cipher AES256` argument specifies the cipher type (supported values: 3DES, AES256, AES).

For example:  
```
C:\tmp\Unity_7.7.2\VegaUnity\bin>encryptionSupport.cmd -generateKey -alphanum -cipher AES256
---------------------------------------------------------
| Encryption type: AES256
---------------------------------------------------------
ZjJwRjFHZ04yM091bUJrb0t3amFHUTViNkVqU280RE0=
```

### Generate master key with Unity Configuration Console UI

The master key can be generated through the dedicated UI dialog at Unity Configuration Console.  
Please login to the Unity with the user with the rights to access the Configuration Console tab.  
Go to the Configuration Console tab and locate the `Encrypt value` button at the main toolbar at the right.  
Press that button and the `Encrypt Value` dialog will appear.  
Select the encryption type using `Encryption` radio control and then press the `Generate key` button at the bottom of this dialog.  
The generated master key will be displayed at the new `Generated key` popup window.

![generate-master-key-at-cc](/assets/img/generate-master-key-at-cc.png) 


### Use generated master key for Unity instance deployment

#### Master key at application's web.xml file


In this case, the master key is specified at application's web.xml file in the same way as the location of main Unity configuration  
file (`vSpaceConfigURL` one).  
The following env entry names can be used for that purpose (each next item at the list can be used to override key from the item before):  

* `encryptionKeysFile`. This value points to the location of encryption keys file. See the file format description below.
* `vuKey` (pre Unity 7.7.2 approach). This is exact value of AES256 encryption key.

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

The encryption keys file is the plain text file that contains the list of master keys for each supported encryption algorithms (3DES, AES and AES256).  
For example:

```text
3DES=s1f449/mMbbLiQ0Ef78LmFTltQRPx83x
AES=ZGVmYXVsdCBhZXMxMjgga2V5LCBwbGVhc2UgcmVwbGFjZSBpbiBwcm9kdWN0aW9u
AES256=ZGVmYXVsdCBhZXMyNTYga2V5LCBwbGVhc2UgcmVwbGFjZSBpbiBwcm9kdWN0aW9u
```

*or*

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


*TODO*

