"use strict";
(function() {
    Demo.module("FooterApp.show", function(Show, App, Bacbone, Marionette, $, _){

      Show.Controller = {
          showFooter: function(){
            var currentUser = App.request("get:current:user");
            var footerView = this.getFooterView(currentUser);
            App.footerRegion.show(footerView);
          },
          getFooterView:  function(currentUser){
            return new Show.Footer({
              model: currentUser
            });
          }
      }
    });
}).call(this);
