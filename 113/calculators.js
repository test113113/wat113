// 황금 조각 데이터
const goldData = { 
  "1111":680,"1112":670,"1113":660,"1114":645,"1115":630,"1116":590,"1122":660,"1123":645,
  "1124":630,"1125":605,"1133":630,"1134":605,"1135":575,"1144":575,"1155":500,"1222":660,
  "1233":605,"1333":575,"1344":500,"1444":460,"2444":415,"1555":310,"2222":630,"2333":540,
  "3333":500,"1244":540,"3444":365,"4444":310,"1455":365,"2555":240,"2355":365,"2455":310,
  "1355":415,"3455":240,"4455":165,"3555":165,"4555":85,"5553":165,"5554":85 
};

/* 가속계산기 함수 */
function calculateAcceleration() {
  const f = { accel_1:1, accel_5:5, accel_15:15, accel_30:30, accel_60:60, accel_4h:240, accel_8h:480, accel_12h:720, accel_15h:900, accel_1d:1440, accel_3d:4320 };
  let total = 0;
  total += (parseInt($('#accel_1').val())||0)*f.accel_1;
  total += (parseInt($('#accel_5').val())||0)*f.accel_5;
  total += (parseInt($('#accel_15').val())||0)*f.accel_15;
  total += (parseInt($('#accel_30').val())||0)*f.accel_30;
  total += (parseInt($('#accel_60').val())||0)*f.accel_60;
  total += (parseInt($('#accel_4h').val())||0)*f.accel_4h;
  total += (parseInt($('#accel_8h').val())||0)*f.accel_8h;
  total += (parseInt($('#accel_12h').val())||0)*f.accel_12h;
  total += (parseInt($('#accel_15h').val())||0)*f.accel_15h;
  total += (parseInt($('#accel_1d').val())||0)*f.accel_1d;
  total += (parseInt($('#accel_3d').val())||0)*f.accel_3d;
  let d = Math.floor(total/1440), r = total%1440, h = Math.floor(r/60), m = r%60;
  $('#accel_result').html(`총 시간: ${d}일 ${h}시간 ${m}분`);
  if(total>0){ $('#accel_score_btn').show(); } else { $('#accel_score_btn').hide(); }
}

function resetAcceleration() {
  $('#accel_1, #accel_5, #accel_15, #accel_30, #accel_60, #accel_4h, #accel_8h, #accel_12h, #accel_15h, #accel_1d, #accel_3d').val(0);
  $('#accel_result').html("");
  $('#accel_score_btn').hide();
}

function calculateAccelScore() {
  const f = { accel_1:1, accel_5:5, accel_15:15, accel_30:30, accel_60:60, accel_4h:240, accel_8h:480, accel_12h:720, accel_15h:900, accel_1d:1440, accel_3d:4320 };
  let total = 0;
  total += (parseInt($('#accel_1').val())||0)*f.accel_1;
  total += (parseInt($('#accel_5').val())||0)*f.accel_5;
  total += (parseInt($('#accel_15').val())||0)*f.accel_15;
  total += (parseInt($('#accel_30').val())||0)*f.accel_30;
  total += (parseInt($('#accel_60').val())||0)*f.accel_60;
  total += (parseInt($('#accel_4h').val())||0)*f.accel_4h;
  total += (parseInt($('#accel_8h').val())||0)*f.accel_8h;
  total += (parseInt($('#accel_12h').val())||0)*f.accel_12h;
  total += (parseInt($('#accel_15h').val())||0)*f.accel_15h;
  total += (parseInt($('#accel_1d').val())||0)*f.accel_1d;
  total += (parseInt($('#accel_3d').val())||0)*f.accel_3d;
  let score = total*250;
  $('#accel_result').append(`<br>임의가속 점수: ${score.toLocaleString()} point`);
}

/* 황금 조각 계산기 */
function calculateGoldPieces() {
  let arr = [parseInt($('#gold_skill1').val()), parseInt($('#gold_skill2').val()), parseInt($('#gold_skill3').val()), parseInt($('#gold_skill4').val())];
  arr.sort((a,b)=>a-b);
  let key = arr.join("");
  let res = goldData[key] || "데이터 없음";
  $("#gold_result").html(`각성까지 필요한 조각 수: <span>${res}</span>`);
}

function resetFields() { 
  $('#gold_skill1, #gold_skill2, #gold_skill3, #gold_skill4').val(1); 
  $("#gold_result").html(""); 
}

/* 여기에 나머지 계산기 함수들 추가 */
// 올스타 1일차
function calculateAllstar() {
  // 코드...
}

function resetAllstar() {
  // 코드...
}

// 올스타 2일차
// ... 기존 JavaScript 함수들 ...

// 올스타 3일차, 4일차, 5일차 등 모든 계산기 함수들
// ... 기존 JavaScript 함수들 ...