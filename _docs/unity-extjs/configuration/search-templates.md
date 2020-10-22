---
title: Search Templates Configuration
layout: docs
category: Unity 7
---
# Example of SearchTemplate configuration

```xml
  <SearchTemplate ID="document_Search_DateAdded">
            <DataProviderId>ce_repository</DataProviderId>
            <Description>Document date</Description>
            <Comment>Enter search criteria</Comment>
            <Autoexecute>false</Autoexecute>
            <Hidden>false</Hidden>
			<QueryPlugin>orGroupSupportTemplateQueryPlugin</QueryPlugin>
			<SavePanel>true</SavePanel>
            <Security>
                <AllowRole>Unity Users</AllowRole>
            </Security>
            <Operation dataProviderId="ce_repository" type="search">
                <OperationProperties>
                    <Property ID="objectStore" type="FIRST">
                        <SecuredValue>
                            <Value>SODemo</Value>
                        </SecuredValue>
                    </Property>
                </OperationProperties>
            </Operation>
            <SortFields/>
            <Grid ID="document_search"/>
            <Criteria>
				<Criterion>
                    <FieldName>DocumentTitle</FieldName>
                    <Comment>at least 3 characters are required to start the search</Comment>
                    <Type>string</Type>
                    <Operator>starts</Operator>
                    <Required>true</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
                    <MinLength>3</MinLength>
                    <MaxLength>20</MaxLength>
                    <GroupName>orGroup</GroupName>
                </Criterion>
                <Criterion>
                    <FieldName>DateCreated</FieldName>
                    <Type>datetime</Type>
                    <Operator>range</Operator>
                    <Required>false</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
					<DefaultValue>from:{Date.-3MONTH};to:{Date.+2YEARS}</DefaultValue>
                </Criterion>
                <Criterion>
                    <FieldName>DateLastModified</FieldName>
                    <Type>date</Type>
                    <Operator>range</Operator>
                    <Required>false</Required>
                    <Hidden>false</Hidden>
                    <Readonly>false</Readonly>
                    <MultiValue>false</MultiValue>
                </Criterion>
            </Criteria>
        </SearchTemplate>
```
# Clause configuration

All criteria work as `AND` clause but `OR` clause can be configured using specific plugin `orGroupSupportTemplateQueryPlugin`. 

Steps to configure `OR` clause: 
- [Plugin for `OR` clause](../configuration/plugins/plugin-for-or-clause.md) should be configured
- The following parameters should be added to the Search Templates: 

    ```xml
    <SearchTemplate ID="document_Search_DateAdded">
    ....
        <QueryPlugin>orGroupSupportTemplateQueryPlugin</QueryPlugin>
    ....
        <Criteria>
            <Criterion>
            ....
                <GroupName>orGroup</GroupName>
            ....
            </Criterion>
        </Criteria>
    </SearchTemplate>
    ```

# DefaultValue configuration

## Default values for Range operator for DateTime properties

```xml
<DefaultValue>from:01/10/2020;to:{Date.-3DAY}</DefaultValue>
```
DateMatch macros examples:

| Example             | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| /MONTH              | Round to the start of the current month                                 |
| /HOUR               | Round to the start of the current hour                                  |
| /DAY                | Round to the start of the current day                                   |
| +2YEARS             | Exactly 2 years in the future from now                                  |
| -1DAY               | Exactly 1 day prior to now                                              |
| /DAY+6MONTHS+3YEARS | 6 months and 3 days in the future from the start of the current day     |
| +6MONTHS+3YEARS/DAY | 6 months and 3 days in the future from now, rounded down to nearest day |