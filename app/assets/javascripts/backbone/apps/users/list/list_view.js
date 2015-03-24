"use strict";
(function() {
    Demo.module("UsersApp.List", function(List, App, Backbone, Marionette, $, _) {

        List.LayoutView = App.Views.LayoutView.extend({
            template: "users/list/templates/list_layout",
            regions: {
                panelRegion: "#panel-region",
                usersRegion: "#users-region"
            }
        });
        List.Panel = App.Views.ItemView.extend({
            template: "users/list/templates/_panel",
            // Om man inte väntar på svar
            collectionEvents: {
                "sync" : "render"
            }
        });
        List.User = App.Views.ItemView.extend({
            template: "users/list/templates/_user",
            tagName: "tr"
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
