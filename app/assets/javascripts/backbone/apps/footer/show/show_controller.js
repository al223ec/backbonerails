"use strict";
(function() {
    Demo.module("FooterApp.show", function(Show, App, Bacbone, Marionette, $, _){

      Show.Controller = {
          showFooter: function(){
            var footerView = this.getFooterView();
            App.footerRegion.show(footerView);

          },
          getFooterView:  function(){
            return new Show.Footer();
          }
      }
    });
}).call(this);
