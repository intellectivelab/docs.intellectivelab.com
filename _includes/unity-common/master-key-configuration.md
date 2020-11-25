The application wide Unity master key should be configured to enable values encryption at the Unity configuration files.

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

*TODO*

