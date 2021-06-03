---
title: Unity 7 UCM Configuration
layout: docs
category: Unity 7
---

# JBPM configuration

## External database	

Out of the box, jBPM application uses embedded H2 database to store process and case data.
The UCM requires that the standalone database should be used by jBPM application instead of embedded one. The initial UCM release supports Microsoft SQL Server 2012 database. Unity 7.2.1 Release added support for PostgreSQL database.

The following steps are actual for jBPM 7.6.0 Final.
These steps modify the OOTB jBPM application installation package to have jBPM application installed and configured to use the standalone Microsoft SQL Server 2012 database.

1. Place `<VegaUnity build>\config\integration\jbpm\db\sqlserver_module.xml` to `<jbpm-installer>\db` folder.

2. Place `sqljdbc.jar` to `<jbpm-installer>\db\drivers` folder.

3. Create dedicated jBPM database  at Microsoft SQL Server 2012 server using the following script `<jbpm-installer>\db\ddl-scripts\sqlserver\sqlserver-jbpm-schema.sql`.

4. Change `<jbpm-installer>\build.properties` file.

    a. Comment out H2 related lines:
    
        ```xml
        # H2.version=1.3.168
        # db.name=h2
        # db.driver.jar.name=h2-${H2.version}.jar
        # db.driver.download.url=http://repo1.maven.org/maven2/com/h2database/h2/${H2.version}/h2-${H2.version}.jar
        ```
    
    b. Add MSSQL2012 related lines:
    
        ```xml
        db.name=sqlserver
        db.driver.module.prefix=com/sqlserver
        db.driver.jar.name=sqljdbc4.jar
        org.kie.server.persistence.dialect=org.hibernate.dialect.SQLServer2012Dialect
        ```
    
        Or PostgreSQL related lines:
        
        ```xml
        #postgresql
        db.name=postgresql
        db.driver.module.prefix=org/postgresql
        db.driver.jar.name=postgresql-42.2.2.jar
        org.kie.server.persistence.dialect=org.hibernate.dialect.PostgreSQLDialect
        ```
    
        | **Note**: Please check that the above lines do not contain space character(s) at the end of each line.

5. Change `<jbpm-installer>\build.xml` file.

    a. Change the value of `jboss.bind.address` property from `localhost` to `0.0.0.0`.
    
    b. Uncomment `<arg value="-Dorg.kie.server.persistence.dialect=${org.kie.server.persistence.dialect}" />` line at `<exec executable="${jboss.full.path.win}" spawn="yes" osfamily="windows">` section.

6. Change `<jbpm-installer>\ standalone-full-wildfly-10.1.0.Final.xml` file.

    a. Comment out H2 jbmDS datasource:
    
        ```xml
        <datasource jta="true" jndi-name="java:jboss/datasources/jbpmDS" pool-name="H2DS" enabled="true" use-java-context="true" use-ccm="true">
                            <connection-url>jdbc:h2:tcp://localhost/~/jbpm-db;MVCC=TRUE</connection-url>
                            <driver>h2</driver>
                            <security>
                                <user-name>sa</user-name>
                            </security>
                        </datasource>
        ```
      
    b. Add MSSQL2012 jbpmDS datasource (`<subsystem xmlns="urn:jboss:domain:datasources:4.0">` section):
    
        ```xml
        <datasource jta="true" jndi-name="java:jboss/datasources/jbpmDS" pool-name="MSSQLDS" enabled="true" use-java-context="true" use-ccm="true"> 
                    <connection-url>jdbc:sqlserver://<DB server>:<DB port>;databaseName=<DB name>;schema=<DB schema></connection-url>
                    <driver-class>com.microsoft.sqlserver.jdbc.SQLServerDriver</driver-class>
                    <driver>sqlserver</driver>
                    <security>
                        <user-name><DB user></user-name>
                        <password><DB password></password>
                    </security>
                    <validation>               
                        <validate-on-match>false</validate-on-match>
                        <background-validation>false</background-validation>
                    </validation>
                    <statement>
                        <share-prepared-statements>false</share-prepared-statements>
                    </statement>
                </datasource>
        
        ```

    c. Add sql driver section:
        
        ```xml
        <drivers>
                            ……….
                            <driver name="sqlserver" module="com.sqlserver">   
                                <xa-datasource-class>com.microsoft.sqlserver.jdbc.SQLServerXADataSource</xa-datasource-class>
                            </driver>
                        </drivers>
        ```
      
        Or add PostgreSQL datasource (`<subsystem xmlns="urn:jboss:domain:datasources:4.0">` section):
        
        ```xml
        <datasource jta="true" jndi-name="java:jboss/datasources/jbpmDS" pool-name="PostgresqlDS" enabled="true" use-java-context="true" use-ccm="true">
                            <connection-url>jdbc:postgresql://<DB server>:<DB port>/<DB name></connection-url>
                            <driver-class>org.postgresql.Driver</driver-class>
                            <driver>postgresql</driver>
                            <security>
                                <user-name><DB user></user-name>
                                <password><DB password></password>
                            </security>
                        </datasource>
        ```
     
        And PostgreSQL driver:
        
        ```xml
        <driver name="postgresql" module="org.postgresql">
                                <xa-datasource-class>org.postgresql.xa.PGXADataSource</xa-datasource-class>
                            </driver>
        ```

7. Change `<jbpm-installer>/lib/kie-server-7.6.0.Final-wildfly-10.1.0.Final.war/WEB-INF/lib/kie-server-services-jbpm-7.6.0.Final.jar/ jpa/META-INF/persistence.xml`.

    a. Comment out H2 related lines:
    
        ```xml
        <property name="hibernate.dialect" value="org.hibernate.dialect.H2Dialect" />
        <property name="hibernate.hbm2ddl.auto" value="update" />
        ```
    
    b. Add MSSQL2012 dialect lines:
    
        ```xml
        <property name="hibernate.dialect" value="org.hibernate.dialect.SQLServer2012Dialect" />
        <property name="hibernate.hbm2ddl.auto" value="none" />     
              <property name="javax.persistence.schema-generation.database.action" value="none" />
              <property name="javax.persistence.schema-generation.scripts.action" value="none" />
        ```
    
    c. For PostgreSQL:
    
        ```xml
        <property name="hibernate.dialect" value="org.hibernate.dialect.PostgreSQLDialect" />
        <property name="hibernate.hbm2ddl.auto" value="none" />     
              <property name="javax.persistence.schema-generation.database.action" value="none" />
              <property name="javax.persistence.schema-generation.scripts.action" value="none" />
        ```
	
# UCM database changing

Execute the following script for UCM database or create a separate DB (jdbc/ucm datasource should be configured for it): 

`<Unity build>\VegaUnity\config\database\ucm\sqlserver`

- `createUcmSchema.MSSQL.sql` – for separate database
- `updateJbpmSchema.MSSQL.sql` – for JBPM database
	
## Datasources configuration	

The following items should be configured at application server when using jBPM platform:

- jBPM database data source 
 
   JNDI name: `jdbc/ucm-jbpm`. This is the actual jBPM application database. The database is used by Unity Case/Work Items query service search.

- Documents links / annotations data source  
 
   JNDI name: `jdbc/ucm`. The UCM stores the document links (for some of document link strategies) and annotations here.

Two above data sources can point to the same jBPM database if this database also holds UCM document links and annotations. 

Alternatively, the database layout can include two separate databases: 

- jBPM database (patched with UCM SQL DDL scripts in order to enable UCM query service for cases/work items/tasks)
- UCM database (UCM document links and annotations) 
 
![Datasources configuration WebSphere example](ucm-configuration/images/image42.png)

# Login module configuration

The UCM login module allows to establish trusted relationship between Unity application deployed at one application server and jBPM application deployed at different Wild Fly application server. 

So, if the user has been authenticated at Unity application then this user can make REST API calls to jBPM application using this authentication

## JBPM server configuration

1. Put the following files into the `%wildfly_home%/modules/system/layers/base/com/vegaecm/ucm/login/main` folder:

    - `<VegaUnity build>\config\integration\jbpm\wildfly\modules\system\layers\base\com\vegaecm\ucm\login\main\module.xml`
    - `<VegaUnity build>\config\integration\jbpm\wildfly\modules\system\layers\base\com\vegaecm\ucm\login\main\vu-ucm-wf-security-7.2.0.1.jar`
    
2. Update the `%wildfly_home%/standalone/configuration/standalone-full.xml` file (that is referenced from `%jbpm_home%/build.xml` as `<arg value="--server-config=standalone-full.xml" />`). Add `com.vegaecm.ucm.login` global module: 

    ```xml
    <subsystem xmlns="urn:jboss:domain:ee:4.0">
                 <!-- UCM Login Module -->
            <global-modules>
                <module name="com.vegaecm.ucm.login" slot="main"/>
            </global-modules>
        </subsystem>
    
    
    <subsystem xmlns="urn:jboss:domain:security:1.2">
                <security-domains>
    …………
                    <security-domain name="other" cache-type="default">
                        <!-- Domain keystore configuration (key store used by the UCM Login Module) -->
                <jsse truststore-password="_default_ucm_ks_pwd" truststore-type="jceks" truststore-url="${jboss.server.config.dir}/ucmKeyStoreJBPM.jceks"/>
                        <authentication>
                <!-- BEGIN : UCM Login Module -->
                <login-module code="com.vegaecm.vu.ucm.wildfly.security.TrustedUserLoginModule" flag="optional">
                    <module-option name="securityDomain" value="other"/>
                    <module-option name="alias" value="ucmUserIdentity"/>                       
                    <module-option name="aliasKey" value="_default_ucm_alias_pwd"/>
                    <module-option name="assignRoles" value="rest-all"/>
                    <module-option name="password-stacking" value="useFirstPass"/>
                </login-module>
                <!-- END :UCM Login Module -->
    ………..
            </security-domains>
    ……..
    </subsystem>
    ```

3. Place UCM key store file (`ucmKeyStoreJBPM.jceks`) into `%wildfly_home%/standalone/configuration` folder. 

   This file can be taken from the `<VegaUnity build>\config\integration\jbpm\wildfly` folder of the Unity distribution package.
	
## Public key generation	

There two different UCM keystores that provide the secure communication between Unity UCM code and jBPM REST API services. 
The first key store is deployed at Unity application server (for example IBM Web Sphere) and contains public key that is used to encrypt user credentials when calling the jBPM REST API services. 
The second key store is deployed at application server of jBPM application (WildFly 10) and contains the private key that allows to decrypt the user credentials at incoming Unity calls.

The typical sequence to generate the above key stores includes the following steps:

1.	(Oracle Java 8) generate public/private key pair.
2.	(Oracle Java 8) export public key certificate from step #1.
3.	(WAS 8.5.5 IBM Java 7) import public key from step #2.

### JBPM Public key generation

File name: ucmKeyStoreJBPM.jceks  
Store type: JCEKS  
Key algorithm: RSA  
Key size: 2048  
Key alias: ucmUserIdentity  

The mandatory objective of this key store is to hold the private key that allows to decrypt the user credentials at incoming Unity calls.

The standard keytool application of Oracle JRE can be used to create JBPM UCM key store.

```xml
@rem Set the Java version that will be used for key store generation

@rem !!! Should the the same Java as have used for jBPM application server

@set JAVA_HOME=D:\Programs\varJDKs\jdk1.8.0_111

@rem Generate public/private key pair (alias = ucmUserIdentity)

@rem and place it to the newly created key store

@"%JAVA_HOME%\bin\keytool" -genkeypair -storetype jceks -keystore ucmKeyStoreJBPM.jceks -alias ucmUserIdentity -keyalg RSA -keysize 2048 -dname "cn=Eugene Smirnov, ou=Engineering, o=Intellective, c=CA" -keypass _default_ucm_alias_pwd -storepass _default_ucm_ks_pwd -startdate 2018/03/31 -validity 10000 -v

@rem List the content of the newly created key store (read only access, for reference only)

@"%JAVA_HOME%\bin\keytool" -list -storetype jceks -keystore ucmKeyStoreJBPM.jceks -storepass _default_ucm_ks_pwd
```

### Unity Public key generation

File name: ucmKeyStoreWAS.jceks  
Store type: JCEKS  
Key algorithm: RSA  
Key size: 2048  
Key alias: ucmUserIdentity  

The mandatory objective of this key store is to hold the public key that is used to encrypt user credentials when calling the jBPM REST API services.

The standard keytool application of Oracle JRE can be used to create Unity UCM key store.

- Step 1. Export public key certificate from jBPM UCM keystore to `ucmPubKey.cert` file:
    
    ```xml
    @rem Set the Java version that was used for jBPM UCM key store generation
    
    @rem !!! Should the the same Java as have used for jBPM application server
    
    @set JAVA_HOME=D:\Programs\varJDKs\jdk1.8.0_111
    
    @rem Export public key certificate into ucmPubKey.cert file
    
    @"%JAVA_HOME%\bin\keytool" -export -storetype jceks -keystore ucmKeyStoreJBPM.jceks -alias ucmUserIdentity -keypass _default_ucm_alias_pwd -storepass _default_ucm_ks_pwd -v -rfc -file ucmPubKey.cert
    ```

- Step 2. Create new `ucmKeyStoreWAS.jceks` key store and import the public key from `ucmPubKey.cert` certificate file:
    
    ```xml
    @rem Set the Java version that will be used for Unity UCM key store generation
    
    @rem !!! Should the the same Java as have used for Unity application server
    
    @rem (IBM JRE for IBM Web Sphere)
    
    @set JAVA_HOME=D:\Programs\varJDKs\V8.5.5.11\java_1.7_64
    
    @rem Create new key store and import public key from ucmPubKey.cert certificate file
    
    @"%JAVA_HOME%\bin\keytool" -import -storetype jceks -keystore ucmKeyStoreWAS.jceks -alias ucmUserIdentity -keypass _default_ucm_alias_pwd -storepass _default_ucm_ks_pwd -v -file ucmPubKey.cert
    
    @rem List the content of the newly created key store (read only access, for reference only)
    
    @"%JAVA_HOME%\bin\keytool" -list -storetype jceks -keystore ucmKeyStoreWAS.jceks -storepass _default_ucm_ks_pwd
    ```

# Related Pages

[Unity 7 Installation Guide](../unity-7-installation-guide.md)
