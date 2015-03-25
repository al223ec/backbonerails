"use strict";
(function() {
    Demo.module("UsersApp.New", function(New, App, Backbone, Marionette, $, _) {
        New.User = App.Views.ItemView.extend({
            template: "users/new/templates/new_user",
            triggers:{
                "click #cancel-new-user" : "form:cancel:button:clicked"
            }
        })
    });
}).call(this);
