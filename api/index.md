---
layout: default
title: Application Programming Interface
---

# Introduction

The QuickPay API is based on the principles of Representational State Transfer (REST) allowing clients to create, view, modify and delete resources using standard HTTP request methods.

Recommended reading:

* HTTP: [http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
* Headers: [http://en.wikipedia.org/wiki/List_of_HTTP_headers](http://en.wikipedia.org/wiki/List_of_HTTP_headers)
  * Basic access authentication: [http://en.wikipedia.org/wiki/Basic_access_authentication](http://en.wikipedia.org/wiki/Basic_access_authentication)
  * Status codes: [http://en.wikipedia.org/wiki/List_of_HTTP_status_codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
* REST: [http://en.wikipedia.org/wiki/Representational_State_Transfer](http://en.wikipedia.org/wiki/Representational_State_Transfer)
* JSON: [http://en.wikipedia.org/wiki/JSON](http://en.wikipedia.org/wiki/JSON)

The QuickPay API is purposely the service upon which everything else in QuickPay is built ([we eat our own dog food](http://en.wikipedia.org/wiki/Eating_your_own_dog_food)).

### About versioning

Over time new features will come along and others will be removed. To foresee and avoid potential compability issues, the API handles this by having multiple versions available at the same time. How to specify the desired version in the HTTP request is explained in detail later on.

There is however a limit in terms of backward compability and at any time only the three newest versions will be available. In addition a be beta/preview version might also be available. This **example** demostrates the versions and their lifecycle:

* v11b: Public beta/preview version
* v10: Latest version
* v09: Deprecated version - first warning
* v08: Deprecated version - last warning

### Access and Security

Any and all communication is encrypted using a 4096 Bit SHA256 RSA certificate issued by Comodo using the protocols TLS 1.0, 1.1 &amp; 1.2.

To interact with our API you will need to [create a user](https://manage.quickpay.net/#/login). With this user you can create multiple merchant accounts or be connected to existing merchant accounts.

Authentication is done by using HTTP Basic Auth and you will need valid credentials from your account at QuickPay. It is possible to create a seperate and restricted user account for API usage - in fact, we do not only encourage you to do so... your new merchant account automatically comes with a restricted user "Payment Window".

## The HTTP Request

### URI

The request URI identifies the resource we want to handle. See the complete list over resources in the sidebar to the left.

### Method

Request methods defines the action we wish to perform on a resource. The QuickPay API recognizes four HTTP request methods:

<table class="table table-bordered table-striped">
<thead>
    <tr>
        <td>Method</td>
        <td>Description</td>
    </tr>
</thead>
<tbody>
    <tr>
        <td>GET</td>
        <td>Get a resource or list of resources</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>Create a resource</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>Replace a resource</td>
    </tr>
    <tr>
        <td>PATCH</td>
        <td>Update a resource</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>Delete a resource</td>
    </tr>
</tbody>
</table>

<div class="alert alert-info" role="alert"><strong>Please note!</strong> Not all methods are valid for all URIs.</div>

### Headers

<table class="table table-bordered table-striped">
<thead>
    <tr>
        <td>Method</td>
        <td>Description</td>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Host</td>
        <td>The domain name of the server</td>
    </tr>
    <tr>
        <td>Authorization</td>
        <td>HTTP Basic authentication</td>
    </tr>
    <tr>
        <td>Accept-Version</td>
        <td>The desired version of the API</td>
    </tr>
    <tr>
        <td>Accept</td>
        <td>Content-Types that are acceptable - currently only application/json is available for non-static resources</td>
    </tr>
    <tr>
        <td>Content-Type</td>
        <td>
            The mime type of the body of the request (used with POST and PUT requests)
        </td>
    </tr>
    <tr>
        <td>Content-Length</td>
        <td>
            Length (in bytes) of the response message body (used with POST and PUT requests)
        </td>
    </tr>
</tbody>
</table>

### Body

Data in the request body is only considered if request method is POST or PUT. Here are some examples:

To update a resource:

    PUT /resource/<Identifier> HTTP/1.1
    Host: api.quickpay.net
    Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
    Accept-Version: v10
    Accept: application/json

    key1=value1&key2=value2

To get a resource:

    GET /resource/<Identifier> HTTP/1.1
    Host: api.quickpay.net
    Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
    Accept-Version: v10
    Accept: application/json

## The HTTP Responses

### Status

The HTTP response status line contains a status code. This code is used to identify wether the request went well or if an error occurred. If indeed something went wrong in processing of the request, the status code will also tell something about the type of error.

The following status codes are defined in the QuickPay API:

<table class="table table-bordered table-striped">
<thead>
    <tr>
        <td>HTTP Status</td>
        <td>Description</td>
    </tr>
</thead>
<tbody>
    <tr>
        <td>200 OK</td>
        <td>
            Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request the response will contain an entity describing or containing the result of the action.
        </td>
    </tr>
    <tr>
        <td>201 Created</td>
        <td>
            A new resource was created and a response body containing a representation of the new resource is being returned.
        </td>
    </tr>
    <tr>
        <td>202 Accepted</td>
        <td>
            Request was accepted but not yet processed. A Location header containing the canonical URI for the newly created resource should also be returned.
        </td>
    </tr>
    <tr>
        <td>400 Bad Request</td>
        <td>
            The request could not be processed because it contains missing or invalid information (such as validation error on an input field, a missing required value, and so on).
        </td>
    </tr>
    <tr>
        <td>401 Unauthorized</td>
        <td>
            Similar to 403 Forbidden, but specifically for use when authentication is possible but has failed or not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
        </td>
    </tr>
    <tr>
        <td>402 Payment required</td>
        <td>
            You either need to create a or upgrade your payment plan.
        </td>
    </tr>
    <tr>
        <td>403 Forbidden</td>
        <td>
            The server recognized your credentials, but you do not possess authorization to perform this request.
        </td>
    </tr>
    <tr>
        <td>404 Not Found</td>
        <td>The requested resource could not be found</td>
    </tr>
    <tr>
        <td>405 Method Not Allowed</td>
        <td>
            A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.
        </td>
    </tr>
    <tr>
        <td>406 Not Acceptable</td>
        <td>
            The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.
        </td>
    </tr>
    <tr>
        <td>409 Conflict</td>
        <td>
            A creation or update request could not be completed, because it would cause a conflict in the current state of the resources supported by the server (for example, an attempt to create a new resource with a unique identifier already assigned to some existing resource).
        </td>
    </tr>
    <tr>
        <td>500 Internal Server Error</td>
        <td>
            The server encountered an unexpected condition which prevented it from fulfilling the request.
        </td>
    </tr>
</tbody>
</table>

### Headers

<table class="table table-bordered table-striped">
<thead>
    <tr>
        <td>Header</td>
        <td>Description</td>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Content-Type</td>
        <td>The media type of the response body</td>
    </tr>
    <tr>
        <td>Content-Length</td>
        <td>Length (in bytes) of the response message body</td>
    </tr>
    <tr>
        <td>Location</td>
        <td>Canonical URI of a newly created resource - if applicable</td>
    </tr>
</tbody>
</table>

### Body

The response body for any non-static resource requests will contain a JSON document. The JSON-encoded data will either be a hash or a list of hashes. Here are some examples:

Response for a successful request for a single resource:

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=UTF-8
    Content-Length: nnn

    {
      "key1": "value1",
      "key2": "value2"
    }

Response for a successful request for a list of resources:

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=UTF-8
    Content-Length: nnn

    [
      {
        "key1": "value1",
        "key2": "value2"
      },
      {
        "key1": "value1",
        "key2": "value2"
      }
    ]

If processing of a request fails the response may look like this:

    HTTP/1.1 400 Bad Request
    Content-Type: application/json; charset=UTF-8
    Content-Length: nnn

    {
      "message": "Validation error",
      "errors": {
        "key1": ["is required", "must be at least 5 chars"]
      },
      "error_code": null
    }

All error responses have `message`, `errors` and `error_code` keys, but `errors` and `error_code` might be `NULL`.

## Static resources

If the resource is a static resource the "Content-Type" header will reflect the media type in question - eg. "application/png", "text/css" etc. The response body will contain the raw resource data or will be empty on errors.
