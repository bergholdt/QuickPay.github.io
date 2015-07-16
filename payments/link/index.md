---
layout: default
title: QuickPay Link - Open payment window using a link
---

# QuickPay Link

The QuickPay Link feature enables you to generate an URL that - when activated - will open a payment window. This is the prefered way of accepting payment in our hosted environment as it gives a number of benefits - most notably:

* Abandoned orders recovery - resume payments when the purchaser left off
* E-mail channel payments
* A Link can be repeatedly used/activated until payment is completed

## How it works

A QuickPay Link is created using the API in two small steps - First create a [Payment](http://tech.quickpay.net/api/services/?scope=merchant#POST-payments---format-) and create a [Link](http://tech.quickpay.net/api/services/?scope=merchant#PUT-payments--id-link---format-) on that payment. You will then get an URL that you can display or send to your customer.

### Examples

<div class="code-examples">
  <ul class="nav nav-tabs">
    <li role="presentation" class="active">
      <a href="#checksum-example-ruby" role="tab" data-toggle="tab">Ruby</a>
    </li>
  </ul>
  <div class="tab-content">
    {% include payments/link_example_ruby.html %}
  </div>
</div>
