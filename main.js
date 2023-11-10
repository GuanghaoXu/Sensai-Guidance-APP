const Food = document.getElementById('Food');
const Map = document.getElementById('Map');
const collect = document.getElementById('collect');
const Pay = document.getElementById('Pay');

document.getElementById('mapIcon').addEventListener('click', function() {
  
  
  Map.classList.add('underline');
  
  Food.classList.remove('underline');
  collect.classList.remove('underline');
  Pay.classList.remove('underline');
  
  
  var mapPage = document.getElementById('mapPage');
  var foodPage = document.getElementById('foodServiceList');
  var collectpage = document.getElementById('collectContainer');
  var paypage = document.getElementById('payPage');
  
  mapPage.style.display = mapPage.style.display === 'none' ? 'block' : 'none';
  foodPage.style.display = 'none';
  collectpage.style.display = 'none';
  paypage.style.display = 'none';
});

document.getElementById('foodIcon').addEventListener('click', function() {
 
  
  Food.classList.add('underline');
 
  Map.classList.remove('underline');
  collect.classList.remove('underline');
  Pay.classList.remove('underline');
  
  var foodPage = document.getElementById('foodServiceList');
  var mapPage = document.getElementById('mapPage');
  var collectpage = document.getElementById('collectContainer');
  var paypage = document.getElementById('payPage');
  
  foodPage.style.display = foodPage.style.display === 'none' ? 'block' : 'none';
  mapPage.style.display = 'none';
  collectpage.style.display = 'none';
  paypage.style.display = 'none';
});


document.getElementById('collectIcon').addEventListener('click', function() {
  // 移除下划线类
  Map.classList.remove('underline');
  // 添加下划线类到第二个文本
  collect.classList.add('underline');
  // 移除下划线类从第一个文本
  Food.classList.remove('underline');
  Pay.classList.remove('underline');

  var collectpage = document.getElementById('collectContainer');
  var mapPage = document.getElementById('mapPage');
  var foodPage = document.getElementById('foodServiceList');
  var paypage = document.getElementById('payPage');


  collectpage.style.display = collectpage.style.display === 'none' ? 'block' : 'none';
  mapPage.style.display =  'none';
  foodPage.style.display = 'none';
  paypage.style.display = 'none';
});

document.getElementById('payIcon').addEventListener('click', function() {
  // 移除下划线类
  Map.classList.remove('underline');
  // 添加下划线类到第二个文本
  collect.classList.remove('underline');
  // 移除下划线类从第一个文本
  Food.classList.remove('underline');

  Pay.classList.add('underline');
  
  var paypage = document.getElementById('payPage');
  var collectpage = document.getElementById('collectContainer');
  var mapPage = document.getElementById('mapPage');
  var foodPage = document.getElementById('foodServiceList');


  paypage.style.display = paypage.style.display === 'none' ? 'block' : 'none';
  mapPage.style.display =  'none';
  foodPage.style.display = 'none';
  collectpage.style.display = 'none';
});



// 偷懒别怪我
const newData1 = {
  name: "David",
  content: "The coupon calculation is mainly based on your existing...",
  likes: 42,
  comments: 18,
  views: 1234,
};

const userName1 = document.getElementById("userName1");
const questionContent1 = document.getElementById("questionContent1");
const likeCount1 = document.getElementById("likeCount1");
const commentCount1 = document.getElementById("commentCount1");
const viewCount1 = document.getElementById("viewCount1");


userName1.textContent = newData1.name;
questionContent1.textContent = newData1.content;
likeCount1.textContent = newData1.likes;
commentCount1.textContent = newData1.comments;
viewCount1.textContent = newData1.views;

//偷懒别怪我完


const talkButton = document.getElementById('talkButton');

let isRecording = false;

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(event) {
  const transcript = event.results[event.results.length - 1][0].transcript.trim();
  if (isRecording) {

    isRecording = false;
    recognition.stop();
    sendTextToChatGPT(transcript);
  }
};

talkButton.addEventListener('mousedown', function() {
  
  isRecording = true;
  recognition.start();
});

talkButton.addEventListener('mouseup', function() {
 
  isRecording = false;
  recognition.stop();
});


const toggleButton = document.getElementById('modeToggle');


function toggleMode() {
  document.body.classList.toggle('dark-mode');
}


toggleButton.addEventListener('click', toggleMode);


//test


// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("mid-area").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", "uber_eats.html", true);
//   xhttp.send();
// }

