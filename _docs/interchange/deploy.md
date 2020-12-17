---
title: Interchange Deploy & Run
layout: docs
category: Unity 7
---
# Introduction
This document describes the basic deployment of the Interchange product.
Interchange is provided with docker compose configuration allows user to run all necessary applications in containers.

# Prereqisites
Docker version 2.0;
Docker-compose version 1.10.0+;
Unzipped package of the Interchange;

# Crawler configuration
Crawler configuration should be created of taken from the one of examples situated in `samples` folder and put into the `bootstrap`.
Details about advanced crawler configuration to be done.

To work with basic configuration you should change the following:
```xml
<IndexManager>
		<Properties>
			<!-- Kafka topic -->
			<Property name="topic">CE_Input</Property>
			<Property name="valueSerializer">com.intellective.uie.index.kafka1x.serialization.InputDocumentProtobufSerializer</Property>
			<!-- Kafka producer properties in json format, change it to match your configuration-->
			<Property name="producerProperties">{
				"client.id":"ce_sodemo_crawler",
				"bootstrap.servers":"localhost:9092,another.host:9092",
				"transactional.id":"demo-transactional-id",
				"retries":"1",
				"transaction.state.log.min.isr":"1",
				"transaction.state.log.replication.factor":"1"
				}</Property>
		</Properties>
	</IndexManager>

	<!-- supported AgentLockPersistence types: FS, RAM, JDBC -->
	<AgentLockPersistence type="FS">
		<Properties>
			<!-- agent locks will be stored in FS folder -->
			<Property name="folderPath">/put path to locks folder</Property>
		</Properties>
	</AgentLockPersistence>
```

`<Property name="topic">CE_Input</Property>` should be changed to `<Property name="topic">input-topic</Property>`

`"bootstrap.servers":"localhost:9092,another.host:9092",` should be changed to `"bootstrap.servers":"kafka:9092",`

`<Property name="folderPath">/put path to locks folder</Property>` should be changed to `<Property name="folderPath">/opt/interchange/crawler/fs</Property>`

# Dispatcher configuration
Dispatcher is also requires configuration. You can prepare your own config or take sample from `samples` folder. File should be put to the `topologies` folder.
```xml
    <EventLoggers>
        <EventLogger id="eventlogger">
            <BootstrapServers>localhost:9092</BootstrapServers>
            <ClientId>LOGGER-client</ClientId>
            <Topic>event-topic</Topic>
        </EventLogger>
    </EventLoggers>
```
`<BootstrapServers>localhost:9092</BootstrapServers>` should be changed to `<BootstrapServers>kafka:9092</BootstrapServers>`

Topology id should be taken from the `id` attribute of the 
`    <Topology xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="processor" id="input-to-ce">`
tag (in this example - `input-to-ce`)

And this id should be put into `--topology` parameter to the `dispatcher-start.sh` script:
`${JAVA_HOME}/bin/java -Xmx3072m -XX:MaxPermSize=512m -XX:MaxGCPauseMillis=200 -Dloader.path=ext -Dloader.config.location=./application.properties -jar dispatcher.jar --topology=input-to-ce $@`

# Running application
To run all applications open console in the project root folder and execute:
`docker-compose -f docker-compose/docker-compose.yml up`
This will automatically build all necessary containers and start them.

If any of the configurations has been changed you should rebuild containers using:
`docker-compose -f docker-compose/docker-compose.yml up --build`