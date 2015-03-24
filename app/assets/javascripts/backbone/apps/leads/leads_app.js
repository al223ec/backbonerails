"use strict";
(function() {
    Demo.module("LeadsApp", function(LeadsApp, App, Backbone, Marionette, $, _) {

        LeadsApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "leads" : "listLeads"
            }
        })
        var API = {
            listLeads: function(){
                LeadsApp.List.Controller.listLeads();
            }
        }

        App.on("before:start", function(options){
            new LeadsApp.Router({
                controller: API
            })
        });
    });
}).call(this);
