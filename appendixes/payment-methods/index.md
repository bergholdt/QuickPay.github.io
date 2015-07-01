---
layout: default
title: Payment Methods
---

# Payment methods

A payment method defines a brand/sub-brand like Visa, Mastercard Debet etc and is used to restrict payments to some brand(s)/sub-brand(s). It also supports restricting a payment method by its issuing country and security level (if applicable).

The syntax is `[3d-]{brand}[-{ISO 3166-1 alpha-2}]` - example:

```
3d-mastercard-dk
^      ^       ^
|      |       |__ Issuing country as ISO 3166-1 alpha-2 (ie. the country where a credit card was issued)
|      |__________ The Brand (Visa, Mastercard, Viabill etc.)
|_________________ Security Level (3D-secure or std. SSL)

This example will restrict a payment to...
  - be paid with a Mastercard
  - require 3D Secure
  - only accept Mastercards issued in Denmark
```

##  Negation

It is also possible to use negation with payment methods. If you do not want to accept some payment method(s), just put a "!" in front the those you do not wish to accept.

**Example:** You want to accept all credit cards but JCB and Visa cards issued in USA:

```html
<input type="hidden" name="payment_methods" value="creditcard, !jcb, !visa-us">
```

<div class="alert alert-warning"><strong>Please note!</strong> If you define some payment method(s) in the `payment_methods` form field all other methods are excluded and will be rejected.</div>

## Supported Payment Methods

<table class="table table-striped first-column-nowrap">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
      <th>Security level?</th>
      <th>Issuing country?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>creditcard</td>
      <td>Restricting payments to credit card payments only. Cannot be used in conjunction with security level restrictions: "3d-creditcard"</td>
      <td>3D</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>american-express</td>
      <td>American Express credit card</td>
      <td>n/a</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>dankort</td>
      <td>Dankort credit card</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
    <!--<tr>
      <td>danske-dk</td>
      <td>Danske Net Bank</td>
      <td></td>
      <td></td>
    </tr>-->
    <tr>
      <td>diners</td>
      <td>Diners Club credit card</td>
      <td>n/a</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>edankort</td>
      <td>eDankort credit card</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>fbg1886</td>
      <td>Forbrugsforeningen af 1886</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>jcb</td>
      <td>JCB credit card</td>
      <td>3D</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>mastercard</td>
      <td>Mastercard credit card</td>
      <td>3D</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>mastercard-debet</td>
      <td>Mastercard debet card. See note about debet cards below</td>
      <td>3D</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>mobilepay</td>
      <td>MobilePay Online</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
    <!--<tr>
      <td>nordea-dk</td>
      <td>Nordea Net Bank</td>
      <td></td>
      <td></td>
    </tr>-->
    <tr>
      <td>visa</td>
      <td>Visa credit card</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>visa-electron</td>
      <td>Visa debet (former Visa Electron) credit card, See note about debet cards below</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>paypal</td>
      <td>PayPal</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>sofort</td>
      <td>Sofort</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>viabill</td>
      <td>ViaBill</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>paii</td>
      <td>Paii</td>
      <td>n/a</td>
      <td>n/a</td>
    </tr>
  </tbody>
</table>
