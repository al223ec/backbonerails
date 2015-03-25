"use strict";
(function() {
    Demo.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
        //Detta bör döpas om till NavigationLinks eller något liknande
        Entities.Header = Entities.Model.extend({});
        Entities.HeaderCollection = Entities.Collection.extend({
            model: Entities.Header
        });
        var API = {
            getHeaders: function() {
                return new Entities.HeaderCollection([{
                    name: "Users",
                    url: Routes.users_path()
                }, {
                    name: "Leads",
                    url: Routes.leads_path()
                }
                ]);
            }
        }
        App.reqres.setHandler("header:entities", function() {
            var headers = API.getHeaders();
            return headers;
        });
    });
}).call(this);
