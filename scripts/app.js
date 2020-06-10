const androidBtn = document.getElementById("android");
const iOSBtn = document.getElementById("iOS");
const bordModal = document.getElementById("bord");
const backDrop = document.getElementById("backdrop");
let form = document.createElement("div");


const android = {
  image: "images/android.jpg",
  desc: "it is good in user friendly",
  link: "https://www.android.com/",
};
const iOS = {
  image: "images/ios.jpg",
  desc: "it is good at performance",
  link: "https://www.apple.com/ios/ios-13/",
};

const clearUi = () => {};

function excute(img, link, desc) {
  form.innerHTML = `<div><img style="width: 170px;
  height: 170px;" src="${img}" /></div>
  <div><a href=${link}>link to website</a></div>
  <div><p>description :${desc}</p></div>`;
  bordModal.append(form);
  bordModal.classList.toggle("visible");
  return;
}

const androidHandler = () => {
  excute(android.image, android.link, android.desc);
};

const iOSHandler = () => {
  excute(iOS.image, iOS.link, iOS.desc);
};

androidBtn.addEventListener("click", androidHandler);
iOSBtn.addEventListener("click", iOSHandler);
