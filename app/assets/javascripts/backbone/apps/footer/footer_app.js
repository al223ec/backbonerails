"use strict";
(function() {
    Demo.module("FooterApp", function(FooterApp, App, Bacbone, Marionette, $, _){
        this.startWithParent = false;

        var API = {
            showFooter: function(){
                FooterApp.show.Controller.showFooter();
            }
        }

        FooterApp.on("start", function(){
            API.showFooter();
        });
        // App.commands.setHandler("footer:show", function(){
        //     API.showFooter();
        // })

        // App.addInitializer(function(){
        //     API.showFooter();
        // });
    });
}).call(this);
