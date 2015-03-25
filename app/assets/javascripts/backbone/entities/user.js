"use strict";
(function() {
    Demo.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
        Entities.User = Entities.Model.extend({
            urlRoot: function(){
                return Routes.users_path();
            }
        });
        Entities.UsersCollection = Entities.Collection.extend({
            model: Entities.User,
            url: function(){
                return Routes.users_path();
            }
        });

        var API = {
            setCurrentUser: function(currentUser){
                return new Entities.User(currentUser);
            },
            getUserEntities: function(callback){
                var users = new Entities.UsersCollection();
                users.fetch({
                    reset: true, //Backbone om reset eventet ska triggas
                    success: function(){
                        callback(users);
                    }
                });
            },
            getUser: function(id){
                var user = new Entities.User({
                    id: id
                });
                user.fetch()
                console.log(user);
                return user;
            }
        }

        App.reqres.setHandler("set:current:user", function(currentUser) {
            return API.setCurrentUser(currentUser);
        });

        App.reqres.setHandler("user:entities", function(callback){
            return API.getUserEntities(callback);
        });
        App.reqres.setHandler("user:entity", function(id){
            return API.getUser(id);
        });
    });
}).call(this);
