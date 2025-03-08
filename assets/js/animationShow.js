let animationLeftDiv=document.querySelectorAll(".left"),
    animationRightDiv=document.querySelectorAll(".right"),
    animationImges=document.querySelectorAll("#section-one img");



    
    const options={
        root: null,
        rootMargin:"100px 0px 0px 200px"
    };   
    
    // Animation left
const opserverLeft=new IntersectionObserver((entries)=>{

    entries.forEach(el=>{

      el.target.classList.toggle("animation-left",el.isIntersecting);
      

    });

},options);



{animationLeftDiv.forEach(el=>opserverLeft.observe(el));

    // Animation Right 
    const opserverRight=new IntersectionObserver((entries)=>{

        entries.forEach(el=>{
                
                el.target.classList.toggle("animation-right",el.isIntersecting);     
          
        });
    
    },options);
    
    animationRightDiv.forEach(el=>opserverRight.observe(el));
}



    // Animation imges
{const opserverImges=new IntersectionObserver((entries)=>{

        entries.forEach(el=>{

            el.target.classList.toggle("animation-imges",el.isIntersecting);

        });

    },options);

    animationImges.forEach(el=>opserverImges.observe(el));
}

    

