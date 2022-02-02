const favchap = document.querySelector("#favchap");
const button = document.querySelector('button[type="submit"]');
const list = document.querySelector(".list");

function blah(){
    
    let newItem = document.createElement("li");
    let newSpan = document.createElement("span");
    let newButton = document.createElement("button");
    newItem.appendChild(newSpan);
    newItem.appendChild(newButton);
    newButton.className = "deleteButton";
    newSpan.textContent = favchap.value;
    newButton.textContent = "X"
    newButton.ariaLabel = `Close ${favchap.value}`
    console.log(favchap.value);
    favchap.value = "";
    list.appendChild(newItem);
    newButton.onclick = function(e) {
        list.removeChild(newItem);
      }
    favchap.focus()
}

button.addEventListener('click',blah);

