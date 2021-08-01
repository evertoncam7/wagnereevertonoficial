

const article = document.querySelectorAll(".p2-aside");

function frases(){

    let fras = '';
  for(let item of article){
      const p = item.querySelector('p');
      for (let index = 0; index < p.innerHTML.length; index++) {
          const l = p.innerHTML[index];
          if ( index < 70 ) {
              fras += l;
          }
      }
      p.innerHTML = fras + ` <a href=''>leia mais...</a>`;
      fras = '';
  }

}

// console.log(window.screen);

if (window.screen.width < 400) {
    frases();
}


