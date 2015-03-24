"use strict";
(function() {
    Demo.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
        Entities.Header = Entities.Model.extend({
            // Modelmethods
        });
        Entities.HeaderCollection = Entities.Collection.extend({
            model: Entities.Header
            // Collectionmethods
        });
        var API = {
            getHeaders: function() {
                return new Entities.HeaderCollection([{
                    name: "Users",
                    url: Routes.users_path()
                }, {
                    name: "Leads",
                    url: Routes.leads_path()
                }, {
                    name: "Appointments",
                    url: "/appointments"
                }]);
            }
        }
        App.reqres.setHandler("header:entities", function() {
            var headers = API.getHeaders();
            return headers;
        });
    });
}).call(this);
