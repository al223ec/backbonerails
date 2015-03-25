"use strict";
(function() {
    Demo.module("UsersApp.List", function(List, App, Backbone, Marionette, $, _) {

        List.LayoutView = App.Views.LayoutView.extend({
            template: "users/list/templates/list_layout",
            regions: {
                panelRegion: "#panel-region",
                usersRegion: "#users-region",
                titleRegion: "#title-region",
                newRegion:   "#new-region"
            }
        });
        List.Title = App.Views.ItemView.extend({
            template: "users/list/templates/_title",
        });

        List.Panel = App.Views.ItemView.extend({
            template: "users/list/templates/_panel",
            // Om man inte väntar på svar
            collectionEvents: {
                //reset iom nya backbone
                "sync" : "render"
            },
            triggers:{
                "click #new-user" : "new:user:button:clicked"
            }

        });
        List.User = App.Views.ItemView.extend({
            template: "users/list/templates/_user",
            tagName: "tr",
            events: {
                "click" : function(){
                    this.trigger("user:clicked", this.model);
                }
            }
        });
        List.Empty = App.Views.ItemView.extend({
            template: "users/list/templates/_empty",
            tagName: "tr"
        });
        List.Users = App.Views.CompositeView.extend({
            template: "users/list/templates/_users",
            childView: List.User,
            emptyView: List.Empty,
            childViewContainer: "tbody",
        });

    });
}).call(this);
