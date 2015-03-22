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
                    name: "Users"
                }, {
                    name: "Leads"
                }, {
                    name: "Appointments"
                }]);
            }
        }
        App.reqres.setHandler("header:entities", function() {
            return API.getHeaders();
        });
    });
}).call(this);
