'use strict';



let count=0;


// SUBMIT FORM
document.getElementById('memeInput').addEventListener('submit',function(e){
    if(document.getElementById('imageLink').value == ""){
        alert ("Please enter at least an image URL!")
        return;
    }

    count++;

    //prevent default
    e.preventDefault();


    createMeme();
    document.getElementById("memeInput").reset();
    
})


function createMeme(){
        //create a meme section with an ID of the number of times the button was clicked, and add it to the meme section
        
        let meme = document.createElement("DIV");
        document.body.appendChild(meme);
        meme.setAttribute("id", "meme"+count);

        //create an image, set that image to equal the link, give it an id based on form submits, set image.src equal to the link 
        let img = document.createElement("IMG"); 
        img.setAttribute("id","image"+count);
        let imageLink = document.getElementById('imageLink').value;
        meme.appendChild(img);
        document.getElementById("image"+count).src=imageLink;  

        //set top text variable equal to the ID of toptext. value(form submission)
        let topText = document.getElementById('topText').value;
        let top = document.createElement('DIV');
        top.setAttribute("id","topText"+ count);
        meme.appendChild(top);
        top.innerHTML = topText;

        //set bottom text variable equal to the ID of toptext.value form submission
        let bottomText = document.getElementById('bottomText').value;
        let bottom = document.createElement('DIV');
        bottom.setAttribute("id","bottomText" + count);
        meme.appendChild(bottom);
        bottom.innerHTML = bottomText;

        //add a button that deletes the meme in the same way as above
        let deleteButton = document.createElement("BUTTON");
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click",closeTheMeme)
        deleteButton.innerHTML = "Delete";
        meme.appendChild(deleteButton);

        //styling and position
        meme.classList.add("meme");
        top.classList.add("topWords");
        bottom.classList.add("bottomWords");

        };



        let deleteBtns = document.getElementsByClassName('.delete');

        function closeTheMeme (){
            this.parentElement.parentElement.removeChild(this.parentElement)
        };









