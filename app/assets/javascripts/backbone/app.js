"use strict";
(function() {
    this.Demo = function(Backbone, Marionette) {
        var App = new Marionette.Application();
        // var app = Marionette.Application.extend({
        //   initialize: function(options) {
        //     console.log('My container:', options.container);
        //   }
        // });
        App.rootRoute = Routes.users_path();

        App.reqres.setHandler("get:current:user", function(){
            return App.currentUser;
        })

        // Detta sk ske i
        App.on("before:start", function(options){
            this.currentUser = App.request("set:current:user", options.currentUser);
        });


        App.addRegions({
            headerRegion: "#header-region",
            mainRegion: "#main-region",
            footerRegion: "#footer-region"
        });

        //OBS ADDINITIALIZER TAS BORT I NÄSTA MAJOR RELEASE!!
        App.addInitializer(function(){
          App.module("HeaderApp").start();
          App.module("FooterApp").start();
        });

        App.on("start", function() {
            if (Backbone.history) {
                Backbone.history.start();
                var navigate = App.getCurrentRoute() == "" ? App.rootRoute : App.getCurrentRoute();
                App.navigate(navigate, {trigger: true});
            }
        });

        return App;
    }(Backbone, Marionette);
}).call(this);
