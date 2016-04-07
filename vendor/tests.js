var expect = chai.expect;

describe("CSV", function(){
  describe("Funcion Calculate", fucnction(){
    it("Deberia reconocer una cadena simple", function(){
      var cadena = '"hola"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
    });

    it("Deberia reconocer una cadena con coma al final", function(){
      var cadena = '"hola,"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
    });

    it("Deberia reconocer un float con coma", fucnction(){
      var cadena = '"1,5"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
    });

  });
});
