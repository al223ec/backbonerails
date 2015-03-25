  "use strict";
(function() {
    Demo.module("UsersApp", function(UsersApp, App, Backbone, Marionette, $, _) {
        // Är det vettigt att ha routingen här?? Börjar tro det
        UsersApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "users/:id/edit" : "edit",
                "users": "list"
            }
        })
        var API = {
            list: function(){
                UsersApp.List.Controller.listUsers();
            },
            newUser: function(){
                return UsersApp.New.Controller.newUser();
            },
            edit: function(id, user){
                console.log(id);
                UsersApp.Edit.Controller.edit(id, user);
            }
        }
        App.reqres.setHandler("new:user:view", function(){
            return API.newUser();
        });

        App.on("before:start", function(options){
            return new UsersApp.Router({
                controller: API
            });
        });
        App.vent.on("user:clicked",function(user){
            App.navigate(Routes.edit_user_path(user.id));
            API.edit(user.id, user);
        })
    });
}).call(this);
