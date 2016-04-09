var expect = chai.expect;

describe("CSV", function(){
  describe("Funcion Calculate", function(){
    it("Deberia reconocer una cadena simple", function(){
      var cadena = '"hola"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
    });

    it("Debería reconocer una cadena con coma al final", function(){
      var cadena = '"hola,"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola,');
    });

    it("Debería reconocer un float con coma", function(){
      var cadena = '"1,5"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('1,5');
    });

    it("Debería reconocer una cadena con espacios delante y atras", function(){
      var cadena = '" hola "';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal(' hola ');
    });
    it("Debería reconocer dos comas seguidas", function() {
      var cadena = '"hola",,"chuchu"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
      expect(r[0].value[1]).to.equal('');
      expect(r[0].value[2]).to.equal('chuchu');
    });
  });
});
