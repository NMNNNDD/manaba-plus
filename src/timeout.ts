import { URL_HOME } from "./module/const";
const goHomeBtn = document.createElement("button");
goHomeBtn.innerHTML = "ログイン画面へ";
goHomeBtn.classList.add("button");
goHomeBtn.onclick = () => {
  window.location.href = URL_HOME;
};

const centerDiv = document.createElement("div");
centerDiv.style.textAlign = "center";
centerDiv.appendChild(goHomeBtn);

const content = document.getElementById("content");
content.appendChild(centerDiv);
