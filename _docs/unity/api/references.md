---
title: References
layout: docs
category: Unity 7
---
# JSON Hypermedia API Language (HAL) 

The Unity API uses HAL format for hypermedia links. JSON HAL sets the conventions for expressing hypermedia controls, such as links, with JSON or XML.

The two associated MIME types:

- media type: application/hal+xml 
- media type: application/hal+json 

Each link in HAL may contain the following properties: 

**Target URI**  
It indicates the target resource URI. This is represented by the href attribute.

**Link relation**  
The link relation type describes how the current context is related to the target resource. This is represented by the rel attribute.

**Type**  
This indicates the expected resource media type. This is represented by the type attribute. 

For instance, the HAL Response Example below contains two links with different relations: 

- `self` can be used to refer to the self-object  
- `tabs` can be used to fetch the information about configured tabs 

##### HAL Response Example: 
```json
{
    "_links": {
        "self": {
            "href": "/api/1.0.0/config",
            "type": "application/json"
         },
         "tabs": {
            "href": "/api/1.0.0/config/tabs",
            "type": "application/json"
         }
    }
}
```

# REST Overview 

With the Public Unity REST (**Re**presentational **S**tate **T**ransfer) API, you can manage resources, like documents, cases, and steps, using HTTP verbs. The Public Unity API gives you simple access to the functionality behind the various document repositories, data sources, and case management systems. 

The Unity API is a RESTful API. All the Public Unity API endpoints require OAuth 2.0 authorization for access. The API is designed to allow you to manage resources programmatically via the HTTP protocol. It has predictable resource-oriented URLs, accepts JSON-encoded requests, and returns JSON-encoded responses. It uses standard HTTP response codes, authentication, and verbs.

# Terminologies 

The following are the important terms related to REST APIs:

**Resource**  
is an object or representation of something, which has some associated data with it and there can be set of methods to operate on it. E.g. Documents, Cases and Employees are resources and delete, add, update are the operations to be performed on these resources.

**Collections**  
are set of resources, e.g. Companies is the collection of Company resource.

**URL (Uniform Resource Locator)**  
is a path through which a resource can be located, and some actions can be performed on it. 

# Using HTTP Verbs 

When you work with the Unity API, you use the following HTTP verbs to request actions from the server:

**GET**  
to read information, such as getting a list of documents or downloading a document content

**POST**  
to create or publish new resources, such as documents and cases.

**PUT**  
to update existing resources, such as updating a document’s property, updating permissions, or changing a case owner.

**DELETE**  
to remove a resource, such as deleting a document, or case. This verb can also dissociate a resource from a collection—for example, you can use the DELETE verb to remove a document from a case, which dissociates the document from collection of documents attached to the case but doesn't remove the document from the repository.

# Using Hypermedia 

One of the primary motivations behind REST is that it be possible to navigate the entire set of resources without requiring prior knowledge of the URI scheme.
Each HTTP GET request should return the information necessary to find the resources related directly to the requested object through hyperlinks included in the response, and it should also be provided with information that describes the operations available on each of these resources. This principle is known as HATEOAS, or **H**ypertext **A**s **T**he **E**ngine **O**f **A**pplication **S**tate.

The system is effectively a finite state machine, and the response to each request contains the information necessary to move from one state to another; no other information should be necessary.

##### Sample GET request for retrieving a document by ID: 
`/api/1.0.0/documents/Document/%7BB7D0216B-FC2A-4283-A57D-585FF902D3CD%7D` 

##### Sample response: 
```json
{  
	"id":"{B7D0216B-FC2A-4283-A57D-585FF902D3CD}",
	"docType":"Document",
	"title":"Example",
	"mimeType":"image/png",
	"fields":{  
		…
	},
	"_links":{  
		"self":{  
			"href":"/api/1.0.0/documents/Document/%7BB7D0216B-FC2A-4283-A57D-585FF902D3CD%7D"
		},
		"view":{  
			"href":"/api/1.0.0/config/documents/Document/views/Open"
		},
		"versions":{  
			"href":"/api/1.0.0/documents/Document/%7BB7D0216B-FC2A-4283-A57D-585FF902D3CD%7D/versions"
		},
		"delete":{  
			"href":"/api/1.0.0/documents/Document/%7BB7D0216B-FC2A-4283-A57D-585FF902D3CD%7D"
		},
		"download":{  
			"href":"/api/1.0.0/documents/Document/%7BB7D0216B-FC2A-4283-A57D-585FF902D3CD%7D/download"
		},
		"view_content":{  
			"href":"/api/1.0.0/documents/Document/%7BB7D0216B-FC2A-4283-A57D-585FF902D3CD%7D/view_content"
		}
	}
}
```
This is all the information that a client application needs to be able to invoke various operations with the document. The links array also includes self-referencing information about the resource itself that has been retrieved. These have the relationship self. The set of links that are returned may change, depending on the state of the resource. 

When we say hypertext, we mean the simultaneous presentation of information and controls such that the information becomes the venue through which a user (or automaton) obtains choices and selects actions. This means that HATEOAS should guide a user through the interface by offering control alongside the data. 

A client would use these to navigate through the interface dynamically. In an ideal REST interface, the client should only know the root URI and can browse and use the entire interface by following links if it knows all the media types that the server uses for its representations. 

# Using RSQL 

RSQL is a query language for parametrized filtering of resources in the Unity API. The simplicity of RSQL and its capability to express complex queries in a compact and HTTP URI-friendly way make it a good generic query language for searching endpoints in the API. The following table lists basic operators. 

## RSQL operators 

| Basic Operator | Description         | Example       | Result                                          |
|:---------------|:--------------------|:--------------|:------------------------------------------------|
| `==`           | Equal To            | `name==John`  | find all people whose name is John              |
| `!=`           | Not Equal To        | `name!=John`  | find all people whose name is not John          |
| `=gt=`         | Greater Than        | `age=gt=30`   | find all people older than 30 (exclusive)       |
| `=ge=`         | Greater or Equal To | `age=ge=30`   | find all people older than 30 (inclusive)       |
| `=lt=`         | Less Than           | `age=lt=60`   | find all people younger than 60                 |
| `=le=`         | Less or Equal To    | `age=le=60`   | find all people younger than 60 or of age of 60 |
| `=in=`         | In                  |               |                                                 |
| `=out=`        | Out                 |               |                                                 | 

## Joining Operators 

| Composite Operator | Description         | Example                                     | Result                                                                            |
|:-------------------|:--------------------|:--------------------------------------------|:----------------------------------------------------------------------------------|
| `;`                | Logical AND         | `age=gt=10;age=lt=20`                       | find all people older than 10 and younger than 20                                 |
| `,`                | Logical OR          | `age=gt=10;age=lt=20;(name=John,name=James)` | find all people older than 10 and younger than 20 and whose name is John or James |

These two operators can be used to join the simple queries and build more involved queries which can be as complex as required. 

# Relevant Standards 

## Primary 

[RFC 6749 The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)  
[RFC 6750 The OAuth 2.0 Authorization Framework: Bearer Token Usage](https://tools.ietf.org/html/rfc6750) 

## Secondary 

[RFC6819 OAuth 2.0 Threat Model and Security Considerations](http://tools.ietf.org/html/6819)  
[RFC7009 OAuth 2.0 Token Revocation](http://tools.ietf.org/html/7009)  
[RFC7521 Assertion Framework for OAuth 2.0 Client Authentication and Authorization Grants](http://tools.ietf.org/html/7521)  
[RFC7522 Security Assertion Markup Language (SAML) 2.0 Profile for OAuth 2.0 Client Authentication and Authorization Grants](http://tools.ietf.org/html/7522)  
[RFC7523 JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants](http://tools.ietf.org/html/7523)  
[RFC7591 OAuth 2.0 Dynamic Client Registration Protocol](http://tools.ietf.org/html/7591)  
[RFC7592 OAuth 2.0 Dynamic Client Registration Management ProtocolRFC7662 OAuth 2.0 Token Introspection](http://tools.ietf.org/html/7592)  
[RFC8252 OAuth 2.0 for Native Apps](http://tools.ietf.org/html/8252)  
