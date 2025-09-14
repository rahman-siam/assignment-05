// Heart icon functionality
const heartIcons = document.getElementsByClassName("heart-icon");
for(const heartIcon of heartIcons){
  heartIcon.addEventListener('click', function(){
    const heartBox = parseInt(document.getElementById("heart-box").innerText);
    const increaseHeartValue = heartBox + 1;
    document.getElementById("heart-box").innerText = increaseHeartValue;
  })
}


// Call functionality
const callButtons = document.getElementsByClassName('call-btn');
const historyPart = document.getElementById('history-part');
const coinBox = document.getElementById('coin-box');
for(const btn of callButtons){
  btn.addEventListener('click', function(){
    let coins = parseInt(coinBox.innerText);

    const card = btn.closest('.card');
    const title = card.querySelector('.card-title').innerText;
    const number = card.querySelector('.card-number').innerText;
    if(coins >= 20){
      const liveTime = new Date().toLocaleTimeString();
      alert('📞Calling... \n' + title + ' : ' + number);
      coinBox.innerText = coins - 20;

      const historyCard = document.createElement('div');
      historyCard.innerHTML = `<div class="flex justify-between md:gap-5 bg-[#f7f7f7] rounded-lg p-4 mb-2">
          <div>
            <h2 class="font-bold">${title}</h2>
            <p>${number}</p>
          </div>
          <div class="flex items-center"><h2>${liveTime}</h2></div>
        </div>`;
    
    historyPart.appendChild(historyCard);
    }
    else{
      alert('Not enough coins!');
    }
  });
}

