"use strict";
(function() {
    Demo.module("UsersApp", function(UsersApp, App, Backbone, Marionette, $, _) {
        // Är det vettigt att ha routingen här??
        UsersApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "users" : "listUsers"
            }
        })
        var API = {
            listUsers: function(){
                UsersApp.List.Controller.listUsers();
            }
        }

        App.on("before:start", function(options){
            new UsersApp.Router({
                controller: API
            })
        });
    });
}).call(this);
