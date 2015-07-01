URI.prototype.replaceSearch = function(name, value) {
  this.removeSearch(name);
  this.addSearch(name,value)
}

URI.replaceSearch = function(name, value) {
  var uri = new this();
  uri.replaceSearch(name, value);

  return uri.href();
}

var QAPI = function() {
  this.baseurl = 'https://api.quickpay.net/docs';
  this.scopes = ['anonymous', 'user', 'merchant', 'reseller']
  this.versions = ['v10']

  this.call = function(scope, version, path, success) {
    if ($.inArray(scope, this.scopes) < 0) {
      alert("Unknown scope: " + scope);
    }

    if ($.inArray(version, this.versions) < 0) {
      alert("Unknown version: " + version);
    }

    return jQuery.ajax({
      url: this.baseurl + "/" + version + "/" + scope + "/api" + path,
      headers: {
        "Accept": "application/json"
      },
      error: this.xhr_error,
      success: success
    });
  }

  this.xhr_error = function (xhr, status, error) {
    alert("Unable to load!\nStatus: " + status);
  }
}

function load() {

  var qapi      = new QAPI();
  var uri       = new URI();
  var config    = uri.query(true);
  var scope     = config.scope || "anonymous";
  var version   = config.version || "v10"
  var index     = {};
  var resources = [];

  $('#quickpay-swagger').html("<h3>Please wait while loading docs...</h3>");

  // Load API index
  qapi.call(scope, version, "/", function(data, status, xhr) {
    index = data;

    // Load each API from index
    $.each(index.apis, function(index, resource) {

      qapi.call(scope, version, resource.path, function(data, status, xhr) {
        apiData = new APIData(data);
        resources.push(apiData.getResource());

        resources.sort(function(a, b) { return a.resourcePath > b.resourcePath ? 1 : a.resourcePath < b.resourcePath ? -1 : 0 });
        render();
      });
    });
  });

  var render = function() {
    var template = $('#quickpay-swagger-template').html();
    var modelTemplate = $("#model-template").html();

    var partials = {
      "model-template": modelTemplate
    };

    Mustache.parse(template);
    Mustache.parse(modelTemplate);

    var rendered = Mustache.render("{% raw %}{{=%% %%=}}{% endraw %} " + template, {resources: resources}, partials);
    $('#quickpay-swagger').html(rendered.replace("{% raw %}{% endraw %}", ""));
    if (!!(fragment = uri.fragment())) {
      // TODO: Should only be run after last qapi.call
      window.scrollTo(0, $('#' + fragment).position().top);
      $('#collapse' + fragment).collapse("show");
    }
  };

  var APIData = function(data) {
    var self = this;
    self.data = data;

    self.getResource = function() {
      if (!self.resource) {
        self.resource = {
          resourcePath: self.data.resourcePath.replace("/",""),
          endpoints: getEndpoints()
        }
      }

      return self.resource;
    };

    var getEndpoints = function() {
      var endpoints = [];
      for (apiIndex in self.data.apis) {
        var api = self.data.apis[apiIndex];
        for (operationIndex in api.operations) {
          var operation = api.operations[operationIndex];
          endpoints.push(buildEndpoint(api, operation));
        }
      }

      return endpoints;
    };

    var buildEndpoint = function(api, operation) {
      var models = getModels(operation.type);
      var model = models.shift();
      var parameters = buildParameters(operation);

      var endpoint = {
        endpointPath: api.path,
        method: operation.method,
        summary: operation.summary,
        nickname: operation.nickname.replace(/\*/, "-"),
        parameters: parameters,
        hasNestedModels: models.length > 0,
        model: model,
        models: models,
        responseMessages: operation.responseMessages
      }

      return endpoint;
    };

    var buildParameters = function(operation) {
      var parameters = operation.parameters;
      parameters = $.map(parameters, function(parameter) {

        parameter.description = parameter.description.replace(/<\/?p>/g, "");

        if (parameter.enum) {

          // Detect sequences
          var sequence = true;
          $.each(parameter.enum, function(index, value) {
            var value = parseInt(value, 10);
            var next  = parseInt(parameter.enum[index + 1]);
            if ((!value && value !== 0) || (next && value + 1 !== next)) { sequence = false; return false; }
          });
          if (sequence) {
            parameter.type += " (" + parameter.enum[0] + " to " + parameter.enum[parameter.enum.length - 1] + ")";
          } else {
            parameter.type += " (" + parameter.enum.join(", ") + ")";
          }
        }

        return parameter;
      });
      return parameters;
    };

    var getModels = function(type) {
      var model = getModel(type);
      if (!model) { return []; }
      var models = [model];

      for (var i in model.properties) {
        var property = model.properties[i];
        var type = property.paramType;

        var existing = $.grep(models, function(model) { return model.id === type; });
        if (existing.length > 0) { continue; }

        var innerModels = getModels(property.paramType);
        if (innerModels) {
          models.push.apply(models, innerModels);
        }
      }

      return models;
    };

    var getModel = function(type) {
      if (!type) { return undefined; }

      if (typeof self.models == "undefined") {
        self.models = buildModels();
      }

      var type = type.replace(/QuickPay::Protocol::V\d+::/, "");

      for (var i in self.models) {
        var model = self.models[i];
        if (model.id === type) {
          return model;
        }
      }
    }

    var buildModels = function() {
      if (!self.data.models) {
        return [];
      }

      var models = $.map(self.data.models, function(model) {
        model.id = model.id.replace(/QuickPay::Protocol::V\d+::/, "");

        model.displayName = model.id;
        model.displayName = model.displayName.replace(/^#<Class.*/, "");

        if (model.properties) {
          model.properties = $.map(model.properties, function(param, key) {
            param.name        = key;
            param.paramType   = param.type || param["$ref"];
            param.displayType = param.paramType

            if (param.paramType === "array" && param.items) {
              param.paramType   = param.items.type || param.items["$ref"];
              param.displayType = param.paramType + "[]";
            }

            if (param.enum) {
              enumDescription = param.enum.join(", ");
              param.displayType += " (" + enumDescription + ")";
            }

            return param;
          });
        }
        return [model];
      });

      return models;
    };
  };
}
