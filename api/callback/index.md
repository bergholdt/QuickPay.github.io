---
layout: default
title: Callback
---

# Callback

QuickPay offers a callback service that will notify your system when you create, change or delete a resource. This is useful e.g. when you want to mark an order as paid, update your shops inventory and so on.

The callback service is **asynchronous** and as such will not interfer with or prolong the processing time of the API request generating a callback - eg. the time your customer will have to wait for payment confirmation.

In the event that your system is not able to receive or correctly process the callback, the callback service til try to deliver its message up to 24 times in a 1 hour interval.

<div class="alert alert-warning"><strong>Important!</strong> Currently only payment and subscription operations (authorize, capture etc.) will trigger a callback.</div>

## How it works

When you create, change or delete a resource a HTTP POST request is send to the callback URL defined in your Account settings.

A callback URL can also be specified in each operation request to the API with the header `QuickPay-Callback-Url`, or in each request to the Payment Window with the field `callbackurl`.

### Request headers

The request headers contains some important information.

<table class="table table-striped first-column-nowrap">
  <thead>
    <tr>
      <td>Header</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QuickPay-Resource-Type</td>
      <td>The type of resource that was created, changed or deleted</td>
    </tr>
    <tr>
      <td>QuickPay-Account-ID</td>
      <td>The account id of the resource owner - useful if receiving callbacks for several systems on the same url</td>
    </tr>
    <tr>
      <td>QuickPay-API-Version</td>
      <td>API version of the callback-generating request</td>
    </tr>
    <tr>
      <td>QuickPay-Checksum-SHA256</td>
      <td>Checksum of the entire raw callback request body - using <a href="http://en.wikipedia.org/wiki/Hash-based_message_authentication_code">HMAC</a> with <a href="http://en.wikipedia.org/wiki/SHA-2">SHA256</a> as the cryptographic hash function. The checksum is signed using the Account's private key. We strongly recommend that you validate the checksum to ensure that the request is authentic.</td>
    </tr>
  </tbody>
</table>

### Request body

The request body contains the resource as it exists **after** the change - ie. it is equivalent to `GET /<resource>/<identifier>`.

### Response

We expect a response http status code of `2xx` to the callback. Otherwise the callback is failed and will be retried after an hour.

### Order of callbacks

The callbacks are asynchronous and can be delivered in any order. However, callbacks on the same resource are guaranteed to be delivered in the same order the operations (create, change or delete) happen. E.g. callbacks for authorize and capture on the same Payment will always be delivered in that order, but two callbacks on different Payments will come in any order.

## Request example

This example shows a callback generated when authorizing a payment:

```
POST /callback HTTP/1.1
Accept-Encoding: gzip;q=1.0,deflate;q=0.6,identity;q=0.3
Accept: */*
User-Agent: Ruby
Content-Type: application/json
QuickPay-Checksum-SHA256: e96f696596c38df228901a6f69f995ad1e917d7b64025f1f0e997a1080b2a35d
QuickPay-Resource-Type: Payment
QuickPay-Account-ID: 7
QuickPay-API-Version: v10
Connection: close
Host: merchant.com
Content-Length: 593

{
  "id": 7,
  "order_id": "Order7",
  "accepted": true,
  "test_mode": true,
  "branding_id": null,
  "variables": {},
  "acquirer": "nets",
  "operations": [
    {
      "id": 1,
      "type": "authorize",
      "amount": 123,
      "pending": false,
      "qp_status_code": "20000",
      "qp_status_msg": "Approved",
      "aq_status_code": "000",
      "aq_status_msg": "Approved",
      "data": {},
      "created_at": "2015-03-05T10:06:18+00:00"
    }
  ],
  "metadata": {
    "type": "card",
    "brand": "quickpay-test-card",
    "last4": "0008",
    "exp_month": 8,
    "exp_year": 2019,
    "country": "DNK",
    "is_3d_secure": false,
    "customer_ip": "195.41.47.54",
    "customer_country": "DK"
  },
  "created_at": "2015-03-05T10:06:18Z",
  "balance": 0,
  "currency": "DKK"
}
```

## Checksum validation examples

These examples show how you can authenticate the callback request sent to your server.

<div class="code-examples">
  <ul class="nav nav-tabs">
    <li role="presentation" class="active">
      <a href="#checksum-example-ruby" role="tab" data-toggle="tab">Ruby</a>
    </li>
    <li role="presentation">
      <a href="#checksum-example-php" role="tab" data-toggle="tab">PHP</a>
    </li>
    <li role="presentation">
      <a href="#checksum-example-python" role="tab" data-toggle="tab">Python</a>
    </li>
    <li role="presentation">
      <a href="#checksum-example-dotnet" role="tab" data-toggle="tab">.NET</a>
    </li>
  </ul>
  <div class="tab-content">
    {% include callback/checksum_example_ruby.html %}
    {% include callback/checksum_example_php.html %}
    {% include callback/checksum_example_python.html %}
    {% include callback/checksum_example_dotnet.html %}
  </div>
</div>

---
