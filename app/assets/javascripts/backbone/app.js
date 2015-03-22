"use strict";
(function() {
    this.Demo = function(Backbone, Marionette) {
        var App = new Marionette.Application();
        App.addRegions({
            headerRegion: "#header-region",
            mainRegion: "#main-region",
            footerRegion: "#footer-region"
        });

        App.addInitializer(function(){
          App.module("HeaderApp").start();
          App.module("FooterApp").start();
        });

        App.on("initialice:after", function() {
            if (Backbone.history) {
                Backbone.history.start();
            }
        });
        return App;
    }(Backbone, Marionette);
}).call(this);
