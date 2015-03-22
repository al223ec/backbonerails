Backbone.Marionette.Renderer.render = function(template, data){
  path = JST["backbone/apps/" + template];
  if(!path){
    throw "Kan inte hitta templaten " + template;
  }
  return path(data);
}
