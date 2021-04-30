let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let div = document.createElement("div");
  div.innerHTML = `<h1>Text added from script</h1>`;
  document.body.appendChild(div);
});
