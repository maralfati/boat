let stars=document.getElementById("stars")
let moon=document.getElementById("moon")
let mountain3=document.getElementById("mountains3")
let mountain4=document.getElementById("mountains4")
let river=document.getElementById("river")
let boat=document.getElementById("boat")
let novil=document.querySelector(".novil")
window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value + 'px' /*هنا استطيع التحكم باللفت لانني وضعت بوزيشن ابسلوت  للستارز  في سي اس اس */
    moon.style.top=value * 4 +'px' /*ضربنا ب 3 لزيادة سرعة حركة القمر */
    mountain3.style.top=value * 2+'px'
    mountain4.style.top=value * 1.5+'px'
    river.style.top=value +'px'
    boat.style.top=value +'px'
    boat.style.left=value * 3 +'px'
    novil.style.fontSize= value +'px'
    if(scrollY>= 80){
    novil.style.fontSize= 80 +'px'
    novil.style.position="fixed"
    if(scrollY>=410){
    novil.style.display="none"

}else{
    novil.style.display="block"

}
if(scrollY>=128){
    document.querySelector(".main").style.background='linear-gradient( #5555d1, #ffffff57)'
}else{
    document.querySelector(".main").style.background='linear-gradient( #200016,#10001f)'

}
    }



}

