/*
 * Component
 *
 * Options:
 * {
 * }
 */
(function (module) {
    if (typeof define === "function" && define.amd) {
        define([], function () { 
          return module.component(); 
        });
    } else {
        window.Component = module.component();
    }
}({
  component: function(){
    /*
     * Creates component and adds to page
     */
    var Component = function(){
      var els = {}
      
      var opts = opts || {};

      opts.events = opts.events || {};     
      
      /*
       * attach parent node to dom
       */
      if(opts.attachTo){
        if(opts.attachTo instanceof $){
          opts.attachTo.append(els.container);
        } else {
          opts.attachTo.appendChild(els.container);
        }

        if(opts.events.onRender){
          opts.events.onRender(els.container);
        }
      }
      
      //Public API for the component
      return {
        els: els,
        remove: function(){ //Detach the component and all listeners
          if(opts.events.onRemove) opts.events.onRemove();
          els.container.remove();
        }          
      }
    };

    return Component;
  }
}));
