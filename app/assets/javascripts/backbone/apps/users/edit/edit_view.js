"use strict";
(function() {
    Demo.module("UsersApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
        Edit.User = App.Views.ItemView.extend({
            template: "users/edit/templates/edit_user",
            // triggers:{
            //     "click #cancel-edit-user" : "form:cancel:edit:button:clicked"
            // }
        })
    });
}).call(this);
