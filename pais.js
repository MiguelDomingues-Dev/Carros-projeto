  function enter() {
    var txt1 = window.document.getElementById('txtnome')
    var txt2 = window.document.getElementById('txtnome2') 
    var res = window.document.getElementById('res')
    var dodgeCharger = 328
    var ferrari = 340
    var mustang = 250
    var supra = 250
    var lamborghin = 350
    var text1 = (txt1.value)
    var text2 = (txt2.value)
    var n1 = Number(text1.value)
    var n2 = Number(text2.value)
    var d = dodgeCharger || ferrari || mustang || supra || lamborghin
    var e = n1 >= n2
    var f = n2 >= n1
    var s = e == f  
      res.innerHTML = `O carro vencedor foi o ${s}`
    
    // }else {
    //   if (text2 =! text1) {
    //     res.innerHTML = `O carro vencedor foi o ${s}`
    //   }
  }