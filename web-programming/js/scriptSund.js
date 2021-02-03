const codeCSS = document.createElement("style")
const codeJavaScript = document.createElement("script")//не факт
codeCSS.type = 'text/css';
codeJavaScript.type = 'text/script';
document.getElementsByTagName('head')[0].appendChild(codeCSS)
document.body.appendChild(codeJavaScript)//не факт
function fullScreen() {
   if (document.fullscreenElement) {
      document.exitFullscreen();
      svernut.style.display = "none"
      razvernyt.style.display = "block"
   } else {
      codeContainer.requestFullscreen();
      svernut.style.display = "block"
      razvernyt.style.display = "none"
   }
}
svernut.onclick = razvernyt.onclick = fullScreen
document.onkeydown = (e) => {
   if (e.ctrlKey && e.shiftKey && e.keyCode === 70)
      fullScreen();
}

htmlCodeText.oninput = () => {
   htmlResault.innerHTML = htmlCodeText.value
}
cssCodeText.oninput = () => {
   codeCSS.innerHTML = cssCodeText.value
}
/*
var colsrc = 0;//не помогает
jsCodeText.oninput = () => {
   var newScript = codeJavaScript
   //codeJavaScript.innerHTML = jsCodeText.value
   htmlScript.innerHTML = jsCodeText.value
   newScript.src = colsrc = colsrc > 10 ? 1 : ++colsrc;
   newScript.replaceWith(codeJavaScript)
}
 
jsCodeText.oninput = () => {
   return eval(jsCodeText.value)
}*/
/*
!способ через вызов функции
jsCodeText.oninput = () => {
   codeJavaScript.innerHTML = `function executionjsCode() {
       ${jsCodeText.value} 
      } `
}
jsCodeText.onkeydown = (e) => {
   if (e.keyCode === 13 && e.shiftKey) {
      executionjsCode()
   }
}
*/


/*
!рботает почти иделаьно но оставляет код ._.///jsCodeText === document.activeElement
*/
jsCodeText.onkeydown = (e) => {
   if (e.keyCode === 13 && e.shiftKey) {
      try {
         setTimeout(() => {
            return eval(jsCodeText.value)
         }, 20);
      }
      catch (e) {
         return null
      }
   }
}/* */






