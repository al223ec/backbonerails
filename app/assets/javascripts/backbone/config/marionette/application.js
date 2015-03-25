"use strict";
(function(Backbone) {
    // Application extensions
    _.extend(Backbone.Marionette.Application.prototype, {
        navigate: function(route, options) {
            route = route.charAt(0) == '/' ? '#' + route : route;
            Backbone.history.navigate(route, options ? options : {});
        },
        getCurrentRoute: function() {
            var frag = Backbone.history.fragment;
            return _.isEmpty(frag) ? null : frag;
        },
        startHistory: function() {
            if (Backbone.history) {
                Backbone.history.start();
            }
        }
    });
})(Backbone);
