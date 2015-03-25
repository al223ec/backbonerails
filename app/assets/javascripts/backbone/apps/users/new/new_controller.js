"use strict";
(function() {
    Demo.module("UsersApp.New", function(New, App, Backbone, Marionette, $, _) {
        New.Controller = {
            newUser: function(){
                var newUser = this.getNewView();
                return newUser;
            },
            getNewView: function(){
                return new New.User();
            }
        }
    });
}).call(this);
