"use strict";
(function() {
    Demo.module("UsersApp.List", function(List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            listUsers: function(){
                var self = this;
                // var users = App.request("user:entities"); //Detta sker
                App.request("user:entities", function(users){
                    //callback sker när svaret kommer
                    self.layoutView = self.getLayoutView();
                    self.layoutView.on("show", function(){
                        List.Controller.showPanel(users);
                        List.Controller.showUsers(users);
                    })

                    App.mainRegion.show(self.layoutView);
                });
            },
            showPanel: function(users){
                var panelView = this.getPanelView(users);
                this.layoutView.panelRegion.show(panelView);
            },
            showUsers: function(users){
                var usersView = this.getUsersView(users);
                this.layoutView.usersRegion.show(usersView);
            },
            getUsersView: function(users){
                return new List.Users({
                    collection: users
                })
            },
            getPanelView: function(users){
                return new List.Panel({
                    collection: users
                })
            },
            getLayoutView: function(){
                return new List.LayoutView();
            }
        }
    });
}).call(this);
