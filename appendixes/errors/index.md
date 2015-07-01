---
layout: default
title: Errors and codes
---

# Errors and codes

## Payments operation errors

These error codes explains the `qp_status_code` field in the response when performing some operation on a [payment](http://tech.quickpay.net/api/services/?scope=merchant#payments).

<table class="table table-striped first-column-nowrap">
  <thead>
    <tr>
      <th>Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>20000</td>
      <td>Approved</td>
    </tr>
    <tr>
      <td>40000</td>
      <td>Rejected By Acquirer</td>
    </tr>
    <tr>
      <td>40001</td>
      <td>Request Data Error</td>
    </tr>
    <tr>
      <td>50000</td>
      <td>Gateway Error</td>
    </tr>
    <tr>
      <td>50300</td>
      <td>Communications Error (with Acquirer)</td>
    </tr>
  </tbody>
</table>
