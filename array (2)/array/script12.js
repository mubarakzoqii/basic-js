function addAdditionalListItem() {
  var ul = document.getElementById("unorderList");
  var li = document.createElement("li");
  var itemCount = ul.getElementsByTagName("li").length + 1;
  li.appendChild(document.createTextNode("Item " + itemCount));
  // li.textContent="newItem"
  ul.appendChild(li);
}









