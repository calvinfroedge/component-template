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

      //Public API for the component
      return {
      }
    };

    return Component;

  }
}));
