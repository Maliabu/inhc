function search() {
    let input = document.querySelector("input").value.toLowerCase()
    let list = document.querySelectorAll("div > p")
    let noItemsText = document.querySelector(".noItemsText")
    let displayCounter = 0

    // console.log(((list[0].innerHTML).toLowerCase()).includes("pyt", 0))
    list.forEach((lang) => {
        if ((lang.innerHTML.toLowerCase()).includes(input, 0) === false){
            lang.style.display = "none";
        } else {
            lang.style.display = "list-item";
        }

        if (lang.style.display === "none"){
           displayCounter++;
        }
    });

    if (displayCounter === list.length){
        list.innerHTML = "No items to display";
        noItemsText.style.display = "initial"
    } else {
        noItemsText.style.display = "none"
    }
}
/////////////////////////////////////////////////////////
var clicks = 0;
var clicking = 0;
function onClicked(){
    clicking+=1
    document.getElementById("clicked").innerHTML = clicking;
}
function onClick() {
  clicks += 1;
  
  document.getElementById("clicks").innerHTML = clicks;
  // Store
  localStorage.setItem("clicks", clicks);
  // Retrieve
  document.getElementById("clicks").innerHTML = localStorage.getItem("clicks");
}
/////////////////////////////////////////////////////////