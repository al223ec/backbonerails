"use strict";
(function() {
    Demo.module("UsersApp", function(UsersApp, App, Backbone, Marionette, $, _) {
        UsersApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "users" : "listUsers"
            }
        })
        var API = {
            listUsers: function(){
                console.log("listUsers");
            }
        }

        App.on("before:start", function(options){
            new UsersApp.Router({
                controller: API
            })
        });
    });
}).call(this);
