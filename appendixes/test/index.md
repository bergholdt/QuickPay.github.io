---
layout: default
---

# Test data

QuickPay implements a system for testing payments in your shop. A test payment is activated by using special card numbers, phone number etc. This can be done in a production environment and will thus not interfere with live payments.

<div class="alert alert-warning"><strong>Important!</strong> Make sure that your system can recognize a test payment. This is done by inspecting the <a href="/api/callback">callback</a>.</div>

### Credit card test numbers

Use these numbers to invoke a certain response.

<table class="table table-striped">
  <thead>
    <tr>
      <td>Card number</td>
      <td>Response</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <!-- auto generated -->
    <tr>
      <td>1000 0000 0000 0008</td>
      <td>Approved</td>
      <td>VISA</td>
    </tr>
    <tr>
      <td>1000 0000 0000 0016</td>
      <td>Rejected</td>
      <td>VISA</td>
    </tr>
    <tr>
      <td>1000 0000 0000 0024</td>
      <td>Card Expired</td>
      <td>VISA</td>
    </tr>
    <tr>
      <td>1000 0000 0000 0032</td>
      <td>Capture Rejected</td>
      <td>VISA</td>
    </tr>
    <tr>
      <td>1000 0000 0000 0040</td>
      <td>Refund Rejected</td>
      <td>VISA</td>
    </tr>
    <tr>
      <td>1000 0000 0000 0057</td>
      <td>Cancel Rejected</td>
      <td>VISA</td>
    </tr>
    <tr>
      <td>1000 0100 0000 0007</td>
      <td>Approved</td>
      <td>Mastercard</td>
    </tr>
    <tr>
      <td>1000 0100 0000 0015</td>
      <td>Rejected</td>
      <td>Mastercard</td>
    </tr>
    <tr>
      <td>1000 0100 0000 0023</td>
      <td>Card Expired</td>
      <td>Mastercard</td>
    </tr>
    <tr>
      <td>1000 0100 0000 0031</td>
      <td>Capture Rejected</td>
      <td>Mastercard</td>
    </tr>
    <tr>
      <td>1000 0100 0000 0049</td>
      <td>Refund Rejected</td>
      <td>Mastercard</td>
    </tr>
    <tr>
      <td>1000 0100 0000 0056</td>
      <td>Cancel Rejected</td>
      <td>Mastercard</td>
    </tr>
    <tr>
      <td>1000 0200 0000 0006</td>
      <td>Approved</td>
      <td>Dankort</td>
    </tr>
    <tr>
      <td>1000 0200 0000 0014</td>
      <td>Rejected</td>
      <td>Dankort</td>
    </tr>
    <tr>
      <td>1000 0200 0000 0022</td>
      <td>Card Expired</td>
      <td>Dankort</td>
    </tr>
    <tr>
      <td>1000 0200 0000 0030</td>
      <td>Capture Rejected</td>
      <td>Dankort</td>
    </tr>
    <tr>
      <td>1000 0200 0000 0048</td>
      <td>Refund Rejected</td>
      <td>Dankort</td>
    </tr>
    <tr>
      <td>1000 0200 0000 0055</td>
      <td>Cancel Rejected</td>
      <td>Dankort</td>
    </tr>
    <tr>
      <td>1000 0300 0000 0005</td>
      <td>Approved</td>
      <td>American Express</td>
    </tr>
    <tr>
      <td>1000 0300 0000 0013</td>
      <td>Rejected</td>
      <td>American Express</td>
    </tr>
    <tr>
      <td>1000 0300 0000 0021</td>
      <td>Card Expired</td>
      <td>American Express</td>
    </tr>
    <tr>
      <td>1000 0300 0000 0039</td>
      <td>Capture Rejected</td>
      <td>American Express</td>
    </tr>
    <tr>
      <td>1000 0300 0000 0047</td>
      <td>Refund Rejected</td>
      <td>American Express</td>
    </tr>
    <tr>
      <td>1000 0300 0000 0054</td>
      <td>Cancel Rejected</td>
      <td>American Express</td>
    </tr>
    <tr>
      <td>1000 0400 0000 0004</td>
      <td>Approved</td>
      <td>Maestro</td>
    </tr>
    <tr>
      <td>1000 0400 0000 0012</td>
      <td>Rejected</td>
      <td>Maestro</td>
    </tr>
    <tr>
      <td>1000 0400 0000 0020</td>
      <td>Card Expired</td>
      <td>Maestro</td>
    </tr>
    <tr>
      <td>1000 0400 0000 0038</td>
      <td>Capture Rejected</td>
      <td>Maestro</td>
    </tr>
    <tr>
      <td>1000 0400 0000 0046</td>
      <td>Refund Rejected</td>
      <td>Maestro</td>
    </tr>
    <tr>
      <td>1000 0400 0000 0053</td>
      <td>Cancel Rejected</td>
      <td>Maestro</td>
    </tr>
    <tr>
      <td>1000 0500 0000 0003</td>
      <td>Approved</td>
      <td>VISA Electron</td>
    </tr>
    <tr>
      <td>1000 0500 0000 0011</td>
      <td>Rejected</td>
      <td>VISA Electron</td>
    </tr>
    <tr>
      <td>1000 0500 0000 0029</td>
      <td>Card Expired</td>
      <td>VISA Electron</td>
    </tr>
    <tr>
      <td>1000 0500 0000 0037</td>
      <td>Capture Rejected</td>
      <td>VISA Electron</td>
    </tr>
    <tr>
      <td>1000 0500 0000 0045</td>
      <td>Refund Rejected</td>
      <td>VISA Electron</td>
    </tr>
    <tr>
      <td>1000 0500 0000 0052</td>
      <td>Cancel Rejected</td>
      <td>VISA Electron</td>
    </tr>
    <tr>
      <td>1000 0600 0000 0002</td>
      <td>Approved</td>
      <td>VISA/Dankort</td>
    </tr>
    <tr>
      <td>1000 0600 0000 0010</td>
      <td>Rejected</td>
      <td>VISA/Dankort</td>
    </tr>
    <tr>
      <td>1000 0600 0000 0028</td>
      <td>Card Expired</td>
      <td>VISA/Dankort</td>
    </tr>
    <tr>
      <td>1000 0600 0000 0036</td>
      <td>Capture Rejected</td>
      <td>VISA/Dankort</td>
    </tr>
    <tr>
      <td>1000 0600 0000 0044</td>
      <td>Refund Rejected</td>
      <td>VISA/Dankort</td>
    </tr>
    <tr>
      <td>1000 0600 0000 0051</td>
      <td>Cancel Rejected</td>
      <td>VISA/Dankort</td>
    </tr>
    <tr>
      <td>1000 0700 0000 0001</td>
      <td>Approved</td>
      <td>Diners</td>
    </tr>
    <tr>
      <td>1000 0700 0000 0019</td>
      <td>Rejected</td>
      <td>Diners</td>
    </tr>
    <tr>
      <td>1000 0700 0000 0027</td>
      <td>Card Expired</td>
      <td>Diners</td>
    </tr>
    <tr>
      <td>1000 0700 0000 0035</td>
      <td>Capture Rejected</td>
      <td>Diners</td>
    </tr>
    <tr>
      <td>1000 0700 0000 0043</td>
      <td>Refund Rejected</td>
      <td>Diners</td>
    </tr>
    <tr>
      <td>1000 0700 0000 0050</td>
      <td>Cancel Rejected</td>
      <td>Diners</td>
    </tr>
    <tr>
      <td>1000 0800 0000 0000</td>
      <td>Approved</td>
      <td>FBG1886</td>
    </tr>
    <tr>
      <td>1000 0800 0000 0018</td>
      <td>Rejected</td>
      <td>FBG1886</td>
    </tr>
    <tr>
      <td>1000 0800 0000 0026</td>
      <td>Card Expired</td>
      <td>FBG1886</td>
    </tr>
    <tr>
      <td>1000 0800 0000 0034</td>
      <td>Capture Rejected</td>
      <td>FBG1886</td>
    </tr>
    <tr>
      <td>1000 0800 0000 0042</td>
      <td>Refund Rejected</td>
      <td>FBG1886</td>
    </tr>
    <tr>
      <td>1000 0800 0000 0059</td>
      <td>Cancel Rejected</td>
      <td>FBG1886</td>
    </tr>
  </tbody>
</table>

### Paii mobile payment test numbers

Use these numbers to invoke a certain response.

<table class="table table-striped">
  <thead>
    <tr>
      <td>Phone number</td>
      <td>Response</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>45 00 00 00 01</td>
      <td>Approved</td>
      <td></td>
    </tr>
    <tr>
      <td>45 00 00 00 02</td>
      <td>Rejected</td>
      <td></td>
    </tr>
  </tbody>
</table>
