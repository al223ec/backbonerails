"use strict";
(function() {
  // Application extensions
    _.extend(Backbone.Marionette.Application.prototype, {
        navigate: function(route, options) {
            route = route.charAt(0) == '/' ? '#' + route : route;
            Backbone.history.navigate(route, options ? options : {});
        },
        getCurrentRoute: function() {
            return Backbone.history.fragment;
        }
    });
}).call(this);
