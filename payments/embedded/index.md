---
layout: default
title: QuickPay Embedded - Embedded JavaScript Form
---

# QuickPay Embedded

The Embedded payment method gives you the option of accepting credit card payments without having to redirect to QuickPay Hosted payment window. The payment form is embedded directly into your page - giving you full control over design.

This is achieved by submitting the credit card data directly to QuickPay who then hands back a token that in turn can be used for payment (one payment only) using [our API](/api/).

Implementation is very simple and can be included into your existing checkout form! You just need to add input fields for `cardnumber`, `expiration` and `cvd` and a little bit of JavaScript.

<div class="alert alert-info"><strong>Please note!</strong> QuickPay Embedded is currently only available with the Clearhaus acquirer.</div>

### Security concerns

The credit card data is submitted directly to QuickPay via HTTPS. Thus, no credit card data is passing through your system.

Still, there are few additonal requirements than necessary when using the [QuickPay Link](/payments/link) or [QuickPay Form](/payments/form):

* Your checkout form must be served over https (SSL/TLS enabled)
* You must fill out a <a href="https://www.pcisecuritystandards.org/security_standards/documents.php?category=saqs">PCI Self Assesment Questionaire (Type A-EP)</a>.

## Parameters

The JavaScript is initialized like so `QuickPay.Embedded.Form('<selector>', {<parameters>});` and accepts the following parameters:

<table class="table table-striped">
  <thead>
    <tr>
      <td></td>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>merchant_id</td>
      <td><code>/^\d+$/</code></td>
      <td>The merchant id</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>agreement_id</td>
      <td><code>/^\d+$/</code></td>
      <td>The agreement id</td>
    </tr>
    <tr>
      <td></td>
      <td>brandChanged</td>
      <td><code>function(brand)</code></td>
      <td>Callback executed when brand of entered cardnumber is determined or changes</td>
    </tr>
    <tr>
      <td></td>
      <td>beforeCreateToken</td>
      <td><code>function(form)</code></td>
      <td>Callback executed before token is submitted</td>
    </tr>
    <tr>
      <td></td>
      <td>success</td>
      <td><code>function(form, token)</code></td>
      <td>Callback executed after tokenization. Return <code>false</code> to prevent form submit</td>
    </tr>
    <tr>
      <td></td>
      <td>failure</td>
      <td><code>function(form, source, message)</code></td>
      <td>Callback executed if card tokenizing failed</td>
    </tr>
  </tbody>
</table>

### Submitted data

In addition to your own form input data the following is submitted:

<table class="table table-striped">
  <thead>
    <tr>
      <td>Parameter</td>
      <td>Type</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>card_token</td>
      <td><code>UUID</code></td>
      <td>The card token</td>
    </tr>
  </tbody>
</table>

## Examples

### Frontend - Checkout form

To prevent card data being submitted by mistake the card input fields should not have name arguments but
instead be identified by `data-quickpay="cardnumber"`, `data-quickpay="expiration"` and `data-quickpay="cvd"`

When form is submitted card data will first be submitted directly to QuickPay for tokenization. If the tokenization
is successful it will submit the form to your defined action with a `card_token` parameter which can be used to
authorize the payment on your backend.

<div class="code-examples-no-tabs">
  {% include payments/embedded_js_example.html %}
</div>


### Backend

These are simplified examples that will almost certainly not fit your shop system. However, it should give an idea on how to use the Embedded payment form.

<div class="code-examples">
  <ul class="nav nav-tabs">
    <li role="presentation" class="active">
      <a href="#backend-example-ruby-sinatra" role="tab" data-toggle="tab">Ruby Sinatra</a>
    </li>
    <li role="presentation">
      <a href="#backend-example-php" role="tab" data-toggle="tab">PHP</a>
    </li>
  </ul>
  <div class="tab-content">
    {% include payments/backend_example_ruby_sinatra.html %}
    {% include payments/backend_example_php.html %}
  </div>
</div>
