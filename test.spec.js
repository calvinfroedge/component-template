describe('component', function(){
  var Component = window.Component;

  /*
   * Test sync
   */
  describe('Do something', function(){
    it('should do it', function(){
      var cp = new ColorPicker({attachTo: el});
      expect(true).toEqual(true);
    })
  })

  /*
   * Test async
   */ 
  describe('Do async', function(){
    var callbackFired = false;

    beforeEach(function(done) {
      //async
        done();
    });

    it('Should be', function(done){
      expect(true).toEqual(true);
      done();
    });


    afterEach(function(){
    });
  });
});
