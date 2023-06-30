 
        const btn = document.querySelector("#burger");
        const hdr= document.querySelector(".header");
        const box = document.querySelectorAll(".content__item");
       
        btn.addEventListener( ('click'), () => {
            hdr.classList.toggle('open')
        });
        box.forEach((item)=> {
            let newImg = item.querySelector(".content__item-img");
            item.addEventListener(('mouseover'), () =>{
                  item.classList.toggle('shadow');
                  newImg.classList.toggle('content__item-img-blue');
             }); 
            item.addEventListener(('mouseout'), () =>{
                  item.classList.toggle('shadow');  
                  newImg.classList.toggle('content__item-img-blue');
            });
      }); 
       
     

     