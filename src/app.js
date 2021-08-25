window.onscroll = () => {
  const fakeH = document.querySelector('#fakeHeader');
  const barra = document.querySelector('#searchBar');
  const footer = document.querySelector('#footerMobile');

  if (window.innerWidth > 375) {
    // Escritorio
    if (window.pageYOffset >= 150) {
      fakeH.style.top = '0px';
      fakeH.style.opacity = '1';
    } else {
      fakeH.style.top = '-75px';
      fakeH.style.opacity = '0';
    }
  } else {
    // Movil
    if(window.scrollY){  
      barra.classList.add("hide");
      footer.classList.add("hide");
    } else {
      barra.classList.remove("hide");
      footer.classList.remove("hide");
    }
  }
};


/*
Actividad 1
- Eventos en JS de slideUp & slideDown para el searchBar y el footer (movil)
- Mejorar la parte visual (html y css) de la vista de escritorio de Pinterest
- Aplicar GridDesign al diseño (de escritorio o movil) (En donde se pueda)

Puntos Extra
- El que quiera replicar o inventarse un diseño para movil +1.0
- El que deje el repo en Git (Github, Gitlab, Bitbucket) +0.1
*/