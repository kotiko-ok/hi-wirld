const effektive = {
   colResize: false,
}
colResize.onmousedown = (e) => {
   if (e.wich = 1) {
      effektive.colResize = true
      //console.log(effektive.colResize)
   }
}
colResize.onmouseup = () => {
   effektive.colResize = false
   //console.log(effektive.colResize)
}
colResize.onmouseout = () => {
   effektive.colResize = false
   //console.log(effektive.colResize)
}
colResize.onmousemove = (e) => {
   if (effektive.colResize) {
      mainCods.style.width = `${(e.x / document.body.clientWidth * 100).toFixed(2)}vw`;
      codeContainer.style.width = `${((document.body.clientWidth - e.x) / document.body.clientWidth * 100 + 0.16).toFixed(2)}vw`;
   }
}
//! ресайз рядов
rowResize1.effektive = false

rowResize1.onmousedown = (e) => {
   if (e.wich = 1) {
      this.effektive = true
   }
}
rowResize1.onmouseup = () => {
   this.effektive = false
}
rowResize1.onmouseout = () => {
   this.effektive = false
}
var afterSizeCode = (((document.body.clientHeight - codeContainer.clientHeight) / document.body.clientHeight) * 100);
sizeCodeHtml.newHeight = (sizeCodeHtml.clientHeight / document.body.clientHeight * 100);
sizeCodeCss.newHeight = (sizeCodeCss.clientHeight / document.body.clientHeight * 100);
sizeCodeJs.newHeight = (sizeCodeJs.clientHeight / document.body.clientHeight * 100);
//console.log(sizeCodeCss.clientHeight + " / " + document.body.clientHeight + " * " + 100 + " = " + sizeCodeCss.newHeight )
rowResize1.onmousemove = (e) => {
   if (this.effektive) {
      if (e.y / document.body.clientHeight * 100 > 15 && e.y / document.body.clientHeight * 100 < 60){
      sizeCodeHtml.newHeight = (e.y / document.body.clientHeight * 100 - 0.2).toFixed(2)
      sizeCodeHtml.style.height = sizeCodeHtml.newHeight + "vh"
      sizeCodeCss.newHeight = ((document.body.clientHeight - e.y) / document.body.clientHeight * 100 - ( 0.4 + sizeCodeJs.newHeight + afterSizeCode)).toFixed(2)
      sizeCodeCss.style.height = sizeCodeCss.newHeight + "vh"
      }
   }
}
