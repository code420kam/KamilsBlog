// codeblock for the commentbox

const userInput = document.getElementById("userComment");
const addButton = document.getElementById("button");
const comments = document.getElementById("comment");
const nickname = document.getElementById("nickname");


addButton.addEventListener("click", () => 
{
    
    
    let elemForNick = document.createElement("p");
    elemForNick.setAttribute("id" ,"userNick")
    elemForNick.innerText = nickname.value;
    let newEl = document.createElement("p");
    newEl.innerText = userInput.value;

    comments.appendChild(elemForNick);
    comments.appendChild(newEl);
    userInput.value ="";
    
})

// codeblock for the like button

const likeBtn = document.querySelector(".like_btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

  let clicked = false;

likeBtn.addEventListener("click", () => {
    if (!clicked) 
    {
      clicked = true;
      count.textContent++;
    } 
    else 
    {
      clicked = false;
      count.textContent--;
    }
  });
  


