"use strict";
(function() {
    Demo.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
        List.Header = Backbone.Marionette.ItemView.extend({
            template: "header/list/templates/_header",
            tagName: "li"
        });

        List.Headers = Backbone.Marionette.CompositeView.extend({
            template: "header/list/templates/headers",
            childView: List.Header,
            childViewContainer: "ul",
        });
    });
}).call(this);
