---
layout: default
title: Services
---

# Services

<div class="row">
  <div class="col-md-7">
    <p>A services defines some resource and what exactly you can do with it. Click on the service methods to expand details.</p>
  </div>
  <div class="col-md-5">
    <form class="form-inline pull-right">
      <div class="form-group" style="padding-right: 10px;">
        <label class="control-label">Version:</label>
          <select id="version" name="version" class="form-control">
            <option value="v10">v10</option>
          </select>
      </div>
      <div class="form-group">
        <label class="control-label">Scope:</label>
          <select id="scope" name="scope" class="form-control" onchange="window.location.href = URI.replaceSearch('scope', this.value);">
            <option value="anonymous">Anonymous</option>
            <option value="user">User</option>
            <option value="merchant">Merchant</option>
            <option value="reseller">Reseller</option>
          </select>
      </div>
    </form>
  </div>
</div>

**ProTip!** You can quickly tests services using curl - Here is an example:

```
$ curl -v -su '' -H 'Accept-Version: v10' https://api.quickpay.net/ping
Enter host password for user '': <enter your api key here>
```

As a more GUI-oriented alternative is using the webservice [Postman](https://www.youtube.com/watch?v=liZe3f-5668).

<div id="quickpay-swagger"></div>

<script type="x-tmpl-mustache" id="quickpay-swagger-template">
  %% #resources %%
  <hr>
  <a href="#%% resourcePath %%"><h2 id="%% resourcePath %%" class="capitalize">%% resourcePath %%</h2></a>
  %% #endpoints %%

  <div class="panel qp-http-method-%% method %%-light">
    <div class="panel-heading" data-toggle="collapse" data-target="#collapse%% nickname %%" aria-expanded="false" aria-controls="collapse%% nickname %%">
      <a href="javascript:void(0);" data-toggle="collapse" data-target="#collapse%% nickname %%" aria-expanded="false" aria-controls="collapse%% nickname %%">
        <h3 class="panel-title" id="%% nickname %%">
          <span class="label qp-http-method-%% method %%">%% method %%</span>
          %% endpointPath %%
          <a style="display: inline-block; margin: 2px 5px; float: right; cursor: pointer;" href="#%% nickname %%"><i class="fa fa-link"></i></a>
          <span style="float: right">%% summary %%</span>
        </h3>
      </a>
    </div>
    <div class="panel-body collapse" id="collapse%% nickname %%">
      <!-- parameters -->
      <h4 style="%% ^parameters %% display: none; %% /parameters %%">Request Parameters</h4>
      <table class="table" style="%% ^parameters %% display: none; %% /parameters %%">
        <thead>
          <tr>
            <td>Parameter</td>
            <td>Description</td>
            <td>Parameter Type</td>
            <td>Data Type</td>
            <td>Default</td>
            <td>Required?</td>
          </tr>
        </thead>
        <tbody>
          <!-- %% #parameters %% -->
          <tr>
            <td>%% name %%</td>
            <td>%% description %%</td>
            <td>%% paramType %%</td>
            <td>%% type %%</td>
            <td>%% defaultValue %%</td>
            <td>%% required %%</td>
          </tr>
          <!-- %% /parameters %% -->
        </tbody>
      </table>
      <!-- HTTP codes -->
      <h4 style="%% ^responseMessages %% display: none; %% /responseMessages %%">Response Messages</h4>
      <table class="table" style="%% ^responseMessages %% display: none; %% /responseMessages %%">
        <thead>
          <tr>
            <td>HTTP Status Code</td>
            <td>Reason</td>
          </tr>
        </thead>
        <tbody>
          <!-- %% #responseMessages %% -->
          <tr>
            <td>%% code %%</td>
            <td>%% message %%</td>
          </tr>
          <!-- %% /responseMessages %% -->
        </tbody>
      </table>

      <!-- Models -->
      %% #model %%
        %%> model-template %%
      %% /model %%
      %% #hasNestedModels %%
        <a href="javascript:void(0);" data-toggle="collapse" data-target="#collapse-%% nickname %%-models" aria-expanded="false" aria-controls="collapse%% nickname %%">
          Nested models (click to expand)
        </a>
      %% /hasNestedModels %%
      <div class="collapse" id="collapse-%% nickname %%-models">
        %% #models %%
          %%> model-template %%
        %% /models %%
      </div>

    </div>
  </div>
  %% /endpoints %%
  %% /resources %%
  <hr>
</script>

<script type="x-tmpl-mustache" id="model-template">
{% raw %}{{=%% %%=}}{% endraw %}
  <h4>%% displayName %% Model</h4>
  <table class="table">
    <thead>
      <tr>
        <td>Parameter</td>
        <td>Description</td>
        <td>Data Type</td>
      </tr>
    </thead>
    <tbody>
    <!-- %% #properties %% -->
      <tr>
        <td>%% name %%</td>
        <td>%% description %%</td>
        <td>%% displayType %%</td>
      </tr>
    <!-- %% /properties %% -->
    </tbody>
  </table>
</script>

<script type="text/javascript">
  $(document).ready(function(){
    
    $('#scope').children().each(function(){
      if (URI().query(true).scope == $(this).attr('value')){
        $(this).attr("selected", "selected")
      }
    });

    load();

  });
</script>
