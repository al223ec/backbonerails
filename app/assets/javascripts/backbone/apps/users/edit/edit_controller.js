"use strict";
(function() {
    Demo.module("UsersApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
        Edit.Controller = {
            edit: function(id, user){
                user = user ? user : App.request("user:entity", id);
                var editView = this.getEditView(user);
                App.mainRegion.show(editView);
            },
            getEditView: function(user){
                console.log(user);
                return new Edit.User({
                    model: user
                });
            }
        }
    });
}).call(this);
