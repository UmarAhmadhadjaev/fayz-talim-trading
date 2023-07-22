var MyBtn = document.getElementById("burger");
var MyDiv = document.getElementById("modal");

var InfoBtn = document.getElementById("btn_info");
var PersonBtn = document.getElementById("btn_person");
var TypeBtn = document.getElementById("btn_type");
var GalleryBtn = document.getElementById("btn_gallery");
var RegBtn = document.getElementById("btn_reg");

var MyInfo = document.getElementById("section");
var MyPerson = document.getElementById("section2");
var MyType = document.getElementById("section3");
var MyGallery = document.getElementById("section4");
var MyReg = document.getElementById("reg");

MyBtn.addEventListener("click", function() {
  MyDiv.style.display = "block";
});

MyDiv.addEventListener("click", function() {
  MyDiv.style.display = "none";
});

InfoBtn.addEventListener("click", function() {
  MyInfo.scrollIntoView({ behavior: 'smooth' });
});

PersonBtn.addEventListener("click", function() {
  MyPerson.scrollIntoView({ behavior: 'smooth' });
});

TypeBtn.addEventListener("click", function() {
  MyType.scrollIntoView({ behavior: 'smooth' });
});

GalleryBtn.addEventListener("click", function() {
  MyGallery.scrollIntoView({ behavior: 'smooth' });
});

RegBtn.addEventListener("click", function() {
  MyReg.scrollIntoView({ behavior: 'smooth' });
});

