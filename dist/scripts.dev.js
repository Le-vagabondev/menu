'use strict';

var menubotn = document.getElementById('nav');
console.log('prueba');
menubotn.addEventListener('click', function (e) {
  if (!menubotn) return;
  var t = e.target,
      d = t.dataset;
  var caja = document.getElementById('menu');
  var caja2 = document.getElementById('men2');
  var caja3 = document.getElementById('men3');

  if (d.uno) {
    console.log('btn1');
    caja2.style.display = 'none';
    caja3.style.display = 'none';
    caja.style.display = 'block';
  }

  if (d.dos) {
    console.log('btn2');
    caja.style.display = 'none';
    caja2.style.display = 'block';
    caja3.style.display = 'none';
  }

  if (d.tres) {
    console.log('btn3');
    caja.style.display = 'none';
    caja3.style.display = 'block';
    caja2.style.display = 'none';
  }
});