function addBlog() {

    var title =document.getElementById("title").value;
    var article =document.getElementById("article").value;
    var divlist= document.getElementById("listview");

    // Creating and adding blog element to existing div tag
    var newblog=document.createElement("P");
    newblog.setAttribute("class","list-item");
    var blogdata=document.createTextNode(" "+article);


    // Adding image to blog
    var Element = document.querySelector("input[name='img1']");
    var imagetag=document.createElement('img');
    var url = URL.createObjectURL(Element.files[0]);
    imagetag.src=url;
    imagetag.setAttribute("width","200");
    imagetag.setAttribute("height","200");


    // Adding title to blog
    var bTitle=document.createElement("h4")
    bTitle.setAttribute("class"," blog-title");
    bTitle.appendChild(document.createTextNode(title));
    newblog.appendChild(bTitle);


    newblog.appendChild(blogdata);
    newblog.appendChild(imagetag);
    divlist.appendChild(newblog); 


}

// Function to hide input details of blog
function hide(){

    document.getElementById("take-input").style.visibility = "hidden";
    
}


// Function to display input details from user
function displayMenu(){

    var x=document.getElementById("take-input");

    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
      } else {
        x.style.visibility = 'hidden';
      }

}

