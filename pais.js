  function enter() {
    var txt1 = window.document.getElementById('txtnome')
    var txt2 = window.document.getElementById('txtnome2') 
    var res = window.document.getElementById('result')
    var x = "ferrari"
    var y = "mustang"
    var text1 = (txt1.value)
    var text2 = (txt2.value)
    var n1 = Number(text1.value)
    var n2 = Number(text2.value)
    if (n1 > n2) {
      res.innerHTML = `O carro vencedor foi o ${x}`
    } else {
      n1 < n2 
      res.innerHTML = `O carro vencedor foi o ${y}`
    }
  }