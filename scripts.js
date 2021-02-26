'use strict'
const menubotn = document.getElementById('nav')
console.log('prueba')
   menubotn.addEventListener('click', e => {
       if(!menubotn) return
       const t = e.target,
             d = t.dataset
             let caja = document.getElementById('menu')
             let caja2 = document.getElementById('men2')
             if(d.uno) {console.log('btn1')
            caja2.style.display= 'none';
            caja.style.display= 'block';
            }
             if(d.dos) {console.log('btn2')
            caja.style.display= 'none';
            caja2.style.display= 'block';
            }
             
})
