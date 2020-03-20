
  let myform, topText, bottomText, image, bottomPart, div1, div, p, p2;
  
  myform = document.getElementById("myform");
  myform.addEventListener("submit", createMeme, true);

    function createMeme(event) {
        event.preventDefault();
        image = document.querySelector("#url").value;
        topText = document.querySelector("#text-top").value;
        bottomText = document.querySelector("#text-bottom").value;

        bottomPart = document.querySelector(".bottom-part");
        div = document.createElement("div");
        bottomPart.appendChild(div).setAttribute("id", "meme")
        div.setAttribute("style",`background-image: url(${image});`);
        
        p = document.createElement("p");
        div.appendChild(p).setAttribute("id", "textTop");
        p2 = document.createElement("p");
        div.appendChild(p2).setAttribute("id", "textBottom");
        p.innerText = topText;
        p2.innerText = bottomText;

        
       // div1.style.backgroundImage = "url(" + image + ")";

       div.addEventListener("dblclick", deleteMeme, true);

       function deleteMeme(event) {
           event.preventDefault;
           bottomPart.removeChild(div);
       
       
       }
        
        myform.reset();


    }
  
  














































//  function createMeme(e){
//      e.preventDefault();

//      let picture = document.querySelector(".bottom-part");
    
    
//      let image = document.querySelector("#url").value;
//      // let img = document.createElement("img");
//      // img.src = image;


//     let pic = document.createElement("img");
//     picture.appendChild(pic);
//     pic.setAttribute("src", image)


//      let textTop = document.querySelector("#text-top").value;
//      let textTop1 = document.createElement("p");
//      picture.appendChild(textTop1);
//      textTop1.innerText = textTop;
//      textTop1.setAttribute("display", "block");
//      textTop1.setAttribute("position", "absolute");
//      textTop1.setAttribute("transform", "translate(-50%, -50%)");
//      textTop1.setAttribute("top","5%");
//      textTop1.setAttribute("top", "70%");
    
    
//      let textBottom = document.querySelector("#text-bottom").value;
//      let textBottom1 = document.createElement("p");
//      picture.appendChild(textBottom1);
//      textBottom1.innerText = textBottom;
//      textBottom1.setAttribute("display", "block");
//      textBottom1.setAttribute("position", "absolute");
//     textBottom1.setAttribute("transform", "translate(-50%, -50%)");
//      textBottom1.setAttribute("top","70%");
//      textBottom1.setAttribute("bottom", "5%");
    
    
//      }
    
//  document.addEventListener("loaded", function(){
//      let submitButton = document.querySelector("#submitButton");
//      submitButton.addEventListener("click", createMeme(event));

//  }


//  );







