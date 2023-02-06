function displayContent(content){
   return calcScreen.value+=content
 }
 function allClear(){
    calcScreen.value=""
 }
    function Resultof(){
      calcScreen.value = eval(calcScreen.value)
}
function Clear(){
    calcScreen.value = calcScreen.value.slice(0,-1)
}

