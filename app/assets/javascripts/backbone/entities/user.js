"use strict";
(function() {
    Demo.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
        Entities.User = Entities.Model.extend({
            // Modelmethods
        });
        Entities.UsersCollection = Entities.Collection.extend({
            model: Entities.User
            // Collectionmethods
        });

        var API = {
            setCurrentUser: function(currentUser){
                return new Entities.User(currentUser);
            }
        }
        App.reqres.setHandler("set:current:user", function(currentUser) {
            return API.setCurrentUser(currentUser);
        });
    });
}).call(this);
