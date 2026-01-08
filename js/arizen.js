  var bgcol=true
  var tog=document.querySelector(".round-togger")
  tog.addEventListener("click",()=>{
   if(bgcol==true)
   {
    document.body.style.transitionDuration=".4s";
     document.body.style.backgroundColor="#282A36";
    document.body.style.color="white";
    bgcol=false;
   }
   else{
     document.body.style.backgroundColor="";
    document.body.style.color="";
    bgcol=true
   }
  })
let nav=document.querySelector("nav")
let sec2=document.getElementById("sec2")
  window.addEventListener("scroll",()=>{
if (window.scrollY > sec2.offsetTop - sec2.offsetHeight - 40) {
    nav.style.backgroundColor = "rgba(255, 178, 14,.4)";
    nav.style.transitionDuration=".5s"
  } else {
    nav.style.backgroundColor = ""; // Reset the background color
  }
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})









let cursor=document.createElement("section")
cursor.setAttribute("class","cursor")
document.body.append(cursor)
document.addEventListener("mousemove", (e) => {
if(window.innerWidth>1000)
{
      cursor.style.top = (e.clientY + 15) + "px";
  cursor.style.left = (e.clientX + 15) + "px";
  cursor.style.display = "block";
}
else
      cursor.style.display = "none";
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});



let se7_img=["img/7-3.jpg",
    "img/7-2.jpg",
    "img/7-1.jpg",
    "img/12.jpg"
]


let se7_p=["Integer data type  store whole number (without decimal no.).",
    "Char data type store single character (letter,digit & symbol).",
    "Float data type store fractional numbers (decimal no.).",
    "String is the sequence of character (group of characters)."
]
let s7imm=document.querySelector("#sec7 img")
let togg=document.querySelectorAll(".control2 li")
let s7h=document.querySelector("#sec7 h2")
let s7p=document.querySelector("#sec7 p")
s7h.innerHTML="Int";
s7p.innerHTML=se7_p[0]
togg[0].classList.add("bluetog")
s7imm.setAttribute("src",se7_img[0])
togg.forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        togg.forEach(ele=>ele.classList.remove("bluetog"))
    ele.classList.add("bluetog")
    if(i==0)
    {
        s7h.innerHTML="int";
    }
    else{
        s7h.innerHTML=ele.innerHTML;
    }
s7p.innerHTML=se7_p[i]
s7imm.setAttribute("src",se7_img[i])
})
})

