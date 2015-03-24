"use strict";
(function() {
    Demo.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
        Entities.User = Entities.Model.extend({
            // Modelmethods
        });
        Entities.UsersCollection = Entities.Collection.extend({
            model: Entities.User,
            url: function(){
                return Routes.users_path();
            }

            // Collectionmethods
        });

        var API = {
            setCurrentUser: function(currentUser){
                return new Entities.User(currentUser);
            },
            getUserEntities: function(callback){
                var users = new Entities.UsersCollection();
                users.fetch({
                   success: function(){
                    callback(users);
                   }
                });
            }
        }

        App.reqres.setHandler("set:current:user", function(currentUser) {
            return API.setCurrentUser(currentUser);
        });

        App.reqres.setHandler("user:entities", function(callback){
            return API.getUserEntities(callback);
        });
    });
}).call(this);
