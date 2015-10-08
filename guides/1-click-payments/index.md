---
layout: default
title: QuickPay 1-Click Payments - Make payments easier for your returning customers
---

# 1-Click Payments

If you have returning customers, you can offer them a lot of convenience with QuickPay 1-Click Payments. With this feature your customer will only have to authorize their credit card once - after that they can pay with just a single click.

We do this by storing the credit card and giving you a reference to that card. You can use this reference for subsequent payments for as long as the credit card is valid.

This is very useful in almost all (if not any) system where the purchaser has registered and identifies themselves (eg. logs in to your shop system) before making the purchase.

QuickPay 1-Click works out of the box for most merchants - no extra agreement required.

<div class="alert alert-info"><strong>Please note!</strong> QuickPay 1-click is currently only available with the Clearhaus, Teller and Nets acquirers.</div>

## How it works

### Authorizing the credit card

This is a one time operation and registers the credit card for the future 1-Click payments.

<div class="code-examples">
  <ul class="nav nav-tabs">
    <li role="presentation" class="active">
      <a href="#checksum-example-ruby" role="tab" data-toggle="tab">Ruby</a>
    </li>
  </ul>
  <div class="tab-content">
    {% include payments/1click_link_example_ruby.html %}
  </div>
</div>

### Accepting 1-click payments

<div class="code-examples">
  <ul class="nav nav-tabs">
    <li role="presentation" class="active">
      <a href="#checksum-example-ruby" role="tab" data-toggle="tab">Ruby</a>
    </li>
  </ul>
  <div class="tab-content">
    {% include payments/1click_payment_example_ruby.html %}
  </div>
</div>
