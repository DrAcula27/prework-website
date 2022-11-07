const list = document.getElementById("visited-list");
const input = document.getElementById("place");
const button = document.getElementById("visited-btn");

button.addEventListener("click", () => {
    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Remove";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
});