// 배경음악 관련 변수 설정
const bgmUrl = "Loggle_song.mp3";

$(document).ready(function(){
  // 탭 전환 로직
  $('.tab').click(function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
    var tabId = $(this).data('tab');
    $('.tab-content').hide();
    $('#' + tabId).show();
  });
  $('.tab').first().click();
  
  // 하위 일차 버튼 클릭 이벤트 (올스타 계산기 탭 내부)
  $('.day-btn').click(function(){
    $('.day-btn').removeClass('active');
    $(this).addClass('active');
    var dayId = $(this).data('day');
    $('.day-content').hide();
    $('#' + dayId).show();
  });
  // 기본은 1일차 보이기
  $('.day-btn[data-day="day1"]').click();
  
  // 배경음악 플레이어 설정
  setupAudioPlayer();
});

// 배경음악 플레이어 설정
function setupAudioPlayer() {
  const bgmAudio = document.createElement('audio');
  bgmAudio.id = 'bgm';
  bgmAudio.src = bgmUrl;
  bgmAudio.loop = true;
  document.querySelector('.audio-player').appendChild(bgmAudio);
  
  const bgmToggle = document.getElementById('bgm_toggle'),
        volumeDown = document.getElementById('volume_down'),
        volumeUp = document.getElementById('volume_up'),
        volumeDisplay = document.getElementById('volume_display');
  
  bgmToggle.addEventListener('click', function(){
    if(bgmAudio.paused){ 
      bgmAudio.play(); 
      bgmToggle.innerHTML = "|| 일시정지"; 
    } else { 
      bgmAudio.pause(); 
      bgmToggle.innerHTML = "▶ 재생"; 
    }
  });
  
  function adjustVolume(change){
    let newVol = Math.min(10, Math.max(0, Math.round(bgmAudio.volume*10)+change));
    bgmAudio.volume = newVol/10;
    volumeDisplay.textContent = newVol;
  }
  
  volumeDown.addEventListener('click', ()=> adjustVolume(-1));
  volumeUp.addEventListener('click', ()=> adjustVolume(1));
}