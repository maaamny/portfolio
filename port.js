var photo = document.getElementById("photo");
var text = document.getElementById("text");

document.getElementById("photo-1")
        .addEventListener("click", function() {
    photo.src = "img4.jpg";
    text.innerHTML = "マーブル柄のベンガルちゃん";
});
document.getElementById("photo-2")
        .addEventListener("click", function() {
    photo.src = "img5.jpg";
    text.innerHTML = "眠そうなベンガル";
});
document.getElementById("photo-3")
        .addEventListener("click", function() {
    photo.src = "img6.jpg";
    text.innerHTML = "ミルクを飲むベンガル";
});
document.getElementById("photo-4")
        .addEventListener("click", function() {
    photo.src = "img7.jpg";
    text.innerHTML = "スポテッド柄のベンガルちゃん";
});