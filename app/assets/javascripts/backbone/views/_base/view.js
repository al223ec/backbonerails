"use strict";
(function() {
    //Denna view används för att skapa helpers som alla andra views behöver
    //Detta är lämpligt för tex. en anvädare för att se dess roll etc
    Demo.module("Views", function(Views, App, Backbone, Marionette, $, _) {
        var _remove = Marionette.View.prototype.remove;
        var __slice = [].slice;

        _.extend(Marionette.View.prototype, {
            remove: function(){
                var args;
                //The arguments object is an Array-like object corresponding to the arguments passed to a function
                args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                console.log("removing ", this);
                _remove.apply(this, args);
            },
            templateHelpers: function() {
                return {
                    currentUser: App.request("get:current:user").toJSON(),
                    linkTo: function(name, url, options) {
                        options = options ? options : {};
                        _.defaults(options, {
                            external: false
                        });

                        url = options.external ? url : '#' + url;
                        return '<a href="' + url + '">' + name + '</a>';
                    }
                }
            }
        });
    });
}).call(this);
