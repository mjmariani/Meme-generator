
  let myform, topText, bottomText, image, div1, div, div2, p, p2, divs, divsArr;
  
  
  myform = document.getElementById("myform");
  myform.addEventListener("submit", createMeme, true);
  const bottomPart = document.querySelector(".bottom-part");

    function createMeme(event) {
        event.preventDefault();
        image = document.querySelector("#url").value;
        topText = document.querySelector("#text-top").value;
        bottomText = document.querySelector("#text-bottom").value;

        
        div = document.createElement("div");
        bottomPart.appendChild(div).setAttribute("id", "meme")
        div.setAttribute("style",`background-image: url(${image});`);
        
        div1 = document.createElement("div");
        div.appendChild(div1).setAttribute("id", "textTop");
        div2 = document.createElement("div");
        div.appendChild(div2).setAttribute("id", "textBottom");
        span1 = document.createElement("span");
        div2.appendChild(span1).setAttribute("id", "span-text")
        div1.innerText = topText;
        span1.innerText = bottomText;

        
       // div1.style.backgroundImage = "url(" + image + ")";

       // div.addEventListener("dblclick", deleteMeme, true);

       divs = document.querySelectorAll("#meme"); //returns a nodelist
       divsArr = [...divs]; //converted to array
       divsArr.forEach((div)=>
           div.addEventListener("dblclick", deleteMeme, true));
        
         /*divsArr.forEach(
             attachEvent(textarea, 'blur', function(e) {
            if (removed) return;
            removed = true;
            textarea.parentNode.removeChild(textarea);
            removeClass(div, 'source');
        }))*/

       myform.reset();
       
       }

    function deleteMeme(event) {
        event.preventDefault;
        bottomPart.removeChild(div);}





















































