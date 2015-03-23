"use strict";
(function() {
    Demo.module("FooterApp.show", function(Show, App, Bacbone, Marionette, $, _) {
        Show.Footer = App.Views.ItemView.extend({
            template: "footer/show/templates/show_footer",
            modelEvents: {
              "change" : "render"
              //events : methods
            }
        });
    });
}).call(this);
