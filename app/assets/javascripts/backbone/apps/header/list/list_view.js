"use strict";
(function() {
    Demo.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
        List.Header = App.Views.ItemView.extend({
            template: "header/list/templates/_header",
            tagName: "li"
        });

        List.Headers = App.Views.CompositeView.extend({
            template: "header/list/templates/headers",
            childView: List.Header,
            childViewContainer: "ul",
        });
    });
}).call(this);
