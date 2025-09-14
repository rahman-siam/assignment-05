// Heart icon functionality
const heartIcons = document.getElementsByClassName("heart-icon");
for(const heartIcon of heartIcons){
  heartIcon.addEventListener('click', function(){
    const heartBox = parseInt(document.getElementById("heart-box").innerText);
    const increaseHeartValue = heartBox + 1;
    document.getElementById("heart-box").innerText = increaseHeartValue;
  })
}