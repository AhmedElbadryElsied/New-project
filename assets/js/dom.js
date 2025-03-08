// search Input
{let searchIcon=document.querySelector("header .nav-staky .search i"),
    searchInput=document.querySelector("header .nav-staky .search input");
    
    searchIcon.addEventListener("click",()=>{

        searchInput.focus();

    })}

// Scroll to top
{let btnScrollTop=document.querySelector("body > div.parent-scroll-to-top");
window.onscroll=function(){

    if( window.scrollY <= 482.399){

        btnScrollTop.style.opacity="0";

    }
    else{
       
        btnScrollTop.style.opacity="1";

    }

    btnScrollTop.addEventListener("click",()=>{

        window.scroll({
            top:0
        })
        
        });
};}






// qustion
{let blus=document.querySelectorAll("#section-two .q .blus");
    // pregraph=document.querySelectorAll("#section-two .q p");
    // console.log(pregraph)


blus.forEach(el=>{

    el.addEventListener("click",function(){

        
            el.parentElement.nextElementSibling.classList.toggle("show-pregraph-qustion");
            if(el.parentElement.nextElementSibling.classList.contains("show-pregraph-qustion")){
                el.parentElement.nextElementSibling.style.height=`${el.parentElement.nextElementSibling.scrollHeight}px` ; 
                el.innerHTML=`<i class="fa-solid fa-minus"></i>`; 
            }
            else{
                el.parentElement.nextElementSibling.style.height="0";

                el.innerHTML=`<i class="fa-solid fa-plus"></i>`; 
            }
            
            
        


    });

});}

// change youtyoub veduos
{let btnNext=document.querySelector("#section-fore .nextVeduo")
    youtuobeVeduos=document.querySelector(" #section-fore .youtuobe-Veduos");
    arrayIframs=[
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/WhIeW1wiRgU?si=MX2W5Urn9MsZbzKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/AhKVOw4tG4M?si=Vh4QjUuQ0XHs-Hgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/ha6imf1mJS4?si=FYPhtvRs9acptzT7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/UybFwwhnZP8?si=dFwoiSzCt4VtCxi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/8zEIgbWyla4?si=DoFakTxG-kWlEss6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ];

    let i = 0;

   btnNext.addEventListener("click",()=>{

    youtuobeVeduos.innerHTML=arrayIframs[i];
        i++;


        if(i>=arrayIframs.length){

            i=0;

        }
        else{

            return true;            

        }


   });}

  
















 