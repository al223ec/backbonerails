"use strict";
(function() {
    Demo.module("UsersApp.List", function(List, App, Backbone, Marionette, $, _) {
        List.Controller = {
            listUsers: function() {
                var self = this;
                // var users = App.request("user:entities"); //Detta sker
                App.request("user:entities", function(users) {
                    //callback sker när svaret kommer
                    self.layoutView = self.getLayoutView();
                    self.layoutView.on("show", function() {
                        List.Controller.panelRegion(users);
                        List.Controller.usersRegion(users);
                        List.Controller.titleRegion();
                    })
                    App.mainRegion.show(self.layoutView);
                });
            },
            // Tycker den här koden känns lite för uppdelad
            panelRegion: function(users) {
                var panelView = this.getPanelView(users);
                panelView.on("new:user:button:clicked", function() {
                    List.Controller.newRegion();
                });
                this.layoutView.panelRegion.show(panelView);
            },
            usersRegion: function(users) {
                var usersView = this.getUsersView(users);

                usersView.on("childview:user:clicked", function(child, user){
                    App.vent.trigger("user:clicked", user);
                })
                this.layoutView.usersRegion.show(usersView);
            },
            titleRegion: function() {
                var titleView = this.getTitleView();
                this.layoutView.titleRegion.show(titleView);
            },
            newRegion: function() {
                var newView = App.request("new:user:view");
                var region = this.layoutView.newRegion;

                newView.on("form:cancel:button:clicked", function(){
                    region.empty();
                });
                region.show(newView);
            },
            getTitleView: function() {
                return new List.Title();
            },
            getUsersView: function(users) {
                return new List.Users({
                    collection: users
                })
            },
            getPanelView: function(users) {
                return new List.Panel({
                    collection: users
                })
            },
            getLayoutView: function() {
                return new List.LayoutView();
            },
        }
    });
}).call(this);
