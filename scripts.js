function toggleMode() {
  const html = document.documentElement;
  //1º forma de fazer
  if (html.classList.contains("light")) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }
  //2º Forma de fazer
  //html.classList.toggle('light');

  /*-----ALTERAÇÃO DE IMAGEM AO TROCAR DE MODE*/
  const img = document.querySelector('.profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/images/2.jfif')
  } else {
    img.setAttribute('src', './assets/images/1.jpg')
  }
    
  
  
}


