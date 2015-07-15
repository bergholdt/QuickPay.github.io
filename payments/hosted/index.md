---
layout: default
title: QuickPay Form
---

# QuickPay Form

The QuickPay Form invokes our hosted payment window simply by submitting an HTML form.

The Payment Window is in reality just an API-client hosted in a PCI Level 1 certified environment.

### Simple example

{% include payments/hosted_form_example.html %}

## Parameters

<table class="table table-striped">
  <thead>
    <tr>
      <td></td>
      <td>Parameter</td>
      <td>Validation</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>version</td>
      <td><code>/^v[\d]{1,}b?$/</code></td>
      <td>The payment window version. Must currently be set to "v10".</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>merchant_id</td>
      <td><code>/^\d+$/</code></td>
      <td>This is your Merchant Account id</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>agreement_id</td>
      <td><code>/^\d+$/</code></td>
      <td>This is the User Agreement id. The checksum must be signed with the API-key belonging to this Agreement</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>order_id</td>
      <td><code>/^[a-zA-Z0-9]{4,20}$/</code></td>
      <td>This is the order id generated in your system</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>amount</td>
      <td><code>/^[0-9]{1,9}$/</code></td>
      <td>The order total amount in its smallest unit</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>currency</td>
      <td><code>/^[A-Z]{3}$/</code></td>
      <td>The payment currency as the <a href="http://www.iso.org/iso/home/standards/currency_codes.htm">3-letter ISO 4217</a> alphabetical code</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>continueurl</td>
      <td><code>!^https?://!</code></td>
      <td>The customer will be redirected to this URL upon a succesful payment. No data will be send to this URL.</td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>cancelurl</td>
      <td><code>!^https?://!</code></td>
      <td>The customer will be redirected to this URL if the customer cancels the payment. No data will be send to this URL.</td>
    </tr>
    <tr>
      <td><span class="label label-warning">O</span></td>
      <td>callbackurl</td>
      <td><code>!^https?://!</code></td>
      <td>QuickPay will make a call back to this URL with the result of the payment. Overwrites the default callback url.</td>
    </tr>
    <tr>
      <td></td>
      <td>language</td>
      <td><code>/^[a-z]{2}$/</code></td>
      <td>Set the language of the user interface. Defaults to English.</td>
    </tr>
    <tr>
      <td></td>
      <td>autocapture</td>
      <td><code>/^[0-1]{1}$/</code></td>
      <td>If set to 1, the payment will be captured automatically</td>
    </tr>
    <tr>
      <td></td>
      <td>autofee</td>
      <td><code>/^[0-1]{1}$/</code></td>
      <td>If set to 1, the fee charged by the acquirer will be calculated and added to the transaction amount</td>
    </tr>
    <tr>
      <td></td>
      <td>subscription</td>
      <td><code>/^[0-1]{1}$/</code></td>
      <td>Create a subscription instead of a standard payment</td>
    </tr>
    <tr>
      <td><span class="label label-info">D</span></td>
      <td>description</td>
      <td><code>/^[\w\s\-\.]{1,20}$/</code></td>
      <td>A value by the merchant's own choise. Used for identifying a subscription payment. <b>Note: Required when 'subscribe' is set</b></td>
    </tr>
    <tr>
      <td></td>
      <td>payment_methods</td>
      <td><code>/^[a-zA-Z,\-]$/</code></td>
      <td>Lock to some <a href="/appendixes/payment-methods/">payment method(s)</a>. Multiple payment methods allowed by comma separation</td>
    </tr>
    <tr>
      <td></td>
      <td>acquirer</td>
      <td><code>/^[a-z]+$/</code></td>
      <td>Lock to a specific acquirer.</td>
    </tr>
    <tr>
      <td><span class="label label-warning">O</span></td>
      <td>branding_id</td>
      <td><code>/[^d]$/</code></td>
      <td>Use this branding. Overwrites the default branding</td>
    </tr>
    <tr>
      <td></td>
      <td>google_analytics_tracking_id</td>
      <td><code>/[^d]$/</code></td>
      <td>Your Google Analytics tracking ID</td>
    </tr>
    <tr>
      <td></td>
      <td>google_analytics_client_id</td>
      <td><code>/[^d]$/</code></td>
      <td>Your Google Analytics client ID</td>
    </tr>
    <tr>
      <td></td>
      <td>variables</td>
      <td></td>
      <td>Custom variables set on the created payment. Submit them as nested params: <code>variables[myvar]=somevalue</code></td>
    </tr>
    <tr>
      <td></td>
      <td>deadline</td>
      <td><code>/^\d+$/</code></td>
      <td>Deadline in seconds for the cardholder to complete the order. If deadline is reached, cardholder will be taken to cancelurl and a callback is sent. The operation type of the callback is <code>deadline</code></td>
    </tr>
    <tr>
      <td><span class="label label-danger">R</span></td>
      <td>checksum</td>
      <td><code>/^[a-z0-9]{64}$/</code></td>
      <td>The <a href="#checksum">calculated checksum</a> of your form data</td>
    </tr>
  </tbody>
</table>

---

#### Symbols

<span class="label label-danger">R</span> = Required field

<span class="label label-warning">O</span> = Overwrites standard/configured value

<span class="label label-info">D</span> = Depends on other fields

<h2 id="checksum">Checksum</h2>

The QuickPay Form employs a [checksum](http://en.wikipedia.org/wiki/Checksum) mechanism to

* authenticate you and your system
* ensure that the data has not been tangled with

To calculate the checksum you must

* sort the request data key/value-pairs in the keys' alphabetical order
* concatenate the values (including empty values) seperated by a single space ()
* calculate the checksum by using [HMAC](http://en.wikipedia.org/wiki/Hash-based_message_authentication_code) with [SHA256](http://en.wikipedia.org/wiki/SHA-2) as the cryptographic hash function. The HMAC is signed with a API key from one of your User Agreements - most likely the "Payment Window" system user.

The checksum is added to the request data. When QuickPay receives the request a checksum is calculated in the exact same way. If this checksum matches the one provided in the request data the processing of the request continues.

Note: The checksum is calculated only from QuickPay specific parameters. If you for some reason submit other parameters, those will not be part of the checksum.

### Examples

<div class="code-examples">
  <ul class="nav nav-tabs">
    <li role="presentation" class="active">
      <a href="#checksum-example-ruby" role="tab" data-toggle="tab">Ruby</a>
    </li>
    <li role="presentation">
      <a href="#checksum-example-php" role="tab" data-toggle="tab">PHP</a>
    </li>
    <li role="presentation">
      <a href="#checksum-example-perl" role="tab" data-toggle="tab">Perl</a>
    </li>
    <li role="presentation">
      <a href="#checksum-example-python" role="tab" data-toggle="tab">Python</a>
    </li>
    <li role="presentation">
      <a href="#checksum-example-dotnet" role="tab" data-toggle="tab">.NET</a>
    </li>
  </ul>
  <div class="tab-content">
    {% include payments/checksum_example_ruby.html %}
    {% include payments/checksum_example_php.html %}
    {% include payments/checksum_example_perl.html %}
    {% include payments/checksum_example_python.html %}
    {% include payments/checksum_example_dotnet.html %}
  </div>
</div>
