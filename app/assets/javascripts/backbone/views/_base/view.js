"use strict";
(function() {
    //Denna view används för att skapa helpers som alla andra views behöver
    //Detta är lämpligt för tex. en anvädare för att se dess roll etc
    Demo.module("Views", function(Views, App, Backbone, Marionette, $, _) {
        _.extend(Marionette.View.prototype, {
            templateHelpers: function() {
                return {
                    currentUser: App.request("get:current:user").toJSON(),
                }
            }
        });
    });
}).call(this);
