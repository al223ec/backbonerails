"use strict";
(function() {
    this.Demo = function(Backbone, Marionette) {
        var App = new Marionette.Application();

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
        // App.addInitializer(function(){
        //     App.module("HeaderApp").start();
        //     App.module("FooterApp").start();
        // });

        App.on("start", function() {
            console.log("app:start");
            App.module("HeaderApp").start();
            App.module("FooterApp").start();

            App.startHistory();
            var route = App.getCurrentRoute() ? App.getCurrentRoute() : App.rootRoute;
            App.navigate(route, {trigger: true});
        });

        return App;
    }(Backbone, Marionette);
}).call(this);
