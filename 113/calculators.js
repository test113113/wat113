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
 /* 올스타 1일차 */
    function calculateAllstar() {
      let d = parseInt($('#allstar_days').val())||0,
          h = parseInt($('#allstar_hours').val())||0,
          m = parseInt($('#allstar_minutes').val())||0;
      let total = d*1440 + h*60 + m;
      let score = total*250;
      $('#allstar_result').html(`총 시간: ${d}일 ${h}시간 ${m}분<br>올스타 점수: ${score.toLocaleString()} point`);
    }
    function resetAllstar() { $('#allstar_days, #allstar_hours, #allstar_minutes').val(0); $('#allstar_result').html(""); }
    
    /* 올스타 2일차 */
    function calculateAllstar2() {
      let n = parseInt($('#hero_normal').val())||0,
          a = parseInt($('#hero_advanced').val())||0;
      let score = n*1000 + a*8000;
      $('#allstar2_result').html(`일반 탐색: ${n}개, 고급 탐색: ${a}개<br>총 점수: ${score.toLocaleString()} point`);
    }
    function resetAllstar2() { $('#hero_normal, #hero_advanced').val(0); $('#allstar2_result').html(""); }
    
    /* 올스타 3일차 (룰렛 및 부대훈련) */
    function calculateAllstar4() {
      let r = parseInt($('#roulette_count').val())||0;
      let rouletteScore = r * 132000;
      let t1 = parseInt($('#training_tier1').val())||0,
          t2 = parseInt($('#training_tier2').val())||0,
          t3 = parseInt($('#training_tier3').val())||0,
          t4 = parseInt($('#training_tier4').val())||0,
          t5 = parseInt($('#training_tier5').val())||0,
          t6 = parseInt($('#training_tier6').val())||0;
      let trainingScore = t1*5 + t2*10 + t3*20 + t4*40 + t5*80 + t6*150;
      let total = rouletteScore + trainingScore;
      $('#allstar4_result').html(`룰렛 점수: ${rouletteScore.toLocaleString()} point<br>부대훈련 점수: ${trainingScore.toLocaleString()} point<br>총 점수: ${total.toLocaleString()} point`);
    }
    function resetAllstar4() { $('#roulette_count').val(0); $('#training_tier1, #training_tier2, #training_tier3, #training_tier4, #training_tier5, #training_tier6').val(0); $('#allstar4_result').html(""); }
    
    /* 그룹 4: 올스타 4일차 - 좀비 & 하이브 분리 */
    function calculateZombieAndHive() {
      let zombieScore = 0;
      zombieScore += (parseInt($('#zombie_1_3').val())||0)*300;
      zombieScore += (parseInt($('#zombie_4_6').val())||0)*600;
      zombieScore += (parseInt($('#zombie_7_9').val())||0)*900;
      zombieScore += (parseInt($('#zombie_10_12').val())||0)*1200;
      zombieScore += (parseInt($('#zombie_13_15').val())||0)*1560;
      zombieScore += (parseInt($('#zombie_16_18').val())||0)*1920;
      zombieScore += (parseInt($('#zombie_19_20').val())||0)*2280;
      zombieScore += (parseInt($('#zombie_21_22').val())||0)*2640;
      zombieScore += (parseInt($('#zombie_23_24').val())||0)*3000;
      zombieScore += (parseInt($('#zombie_25_26').val())||0)*3360;
      zombieScore += (parseInt($('#zombie_27').val())||0)*3720;
      zombieScore += (parseInt($('#zombie_28').val())||0)*4080;
      zombieScore += (parseInt($('#zombie_29').val())||0)*4440;
      zombieScore += (parseInt($('#zombie_30').val())||0)*4800;
      let hiveScore = 0;
      hiveScore += (parseInt($('#hive_level1_4').val())||0)*3600;
      hiveScore += (parseInt($('#hive_level2_4').val())||0)*4800;
      hiveScore += (parseInt($('#hive_level3_4').val())||0)*7800;
      hiveScore += (parseInt($('#hive_level4_4').val())||0)*9600;
      hiveScore += (parseInt($('#hive_level5_4').val())||0)*12000;
      hiveScore += (parseInt($('#hive_level6_4').val())||0)*14400;
      let magic = (parseInt($('#magic_ticket_4').val())||0)*12700;
      let arrow = (parseInt($('#arrow_4').val())||0)*15000;
      $('#zombie_result_4').html(`좀비 점수: ${zombieScore.toLocaleString()} point`);
      $('#hive_result_4').html(`하이브 점수: ${hiveScore.toLocaleString()} point<br>매직티켓: ${magic.toLocaleString()} point, 화살: ${arrow.toLocaleString()} point`);
    }
    function resetZombieAndHive() {
      $('#zombie_1_3, #zombie_4_6, #zombie_7_9, #zombie_10_12, #zombie_13_15, #zombie_16_18, #zombie_19_20, #zombie_21_22, #zombie_23_24, #zombie_25_26, #zombie_27, #zombie_28, #zombie_29, #zombie_30').val(0);
      $('#hive_level1_4, #hive_level2_4, #hive_level3_4, #hive_level4_4, #hive_level5_4, #hive_level6_4').val(0);
      document.getElementById('magic_ticket_4').value = 0;
      document.getElementById('arrow_4').value = 0;
      $('#zombie_result_4').html("");
      $('#hive_result_4').html("");
    }
    
    /* 그룹 5: 올스타 5일차 - 좀비 처치 개별 입력 */
    function calculateZombieScoreDay5() {
      let score = 0;
      for(let i=1; i<=30; i++){
        let cnt = parseInt(document.getElementById('zombie_lvl_' + i).value) || 0;
        let pts = 0;
        if(i>=1 && i<=3) pts = 300;
        else if(i>=4 && i<=6) pts = 600;
        else if(i>=7 && i<=9) pts = 900;
        else if(i>=10 && i<=12) pts = 1200;
        else if(i>=13 && i<=15) pts = 1560;
        else if(i>=16 && i<=18) pts = 1920;
        else if(i>=19 && i<=20) pts = 2280;
        else if(i>=21 && i<=22) pts = 2640;
        else if(i>=23 && i<=24) pts = 3000;
        else if(i>=25 && i<=26) pts = 3360;
        else if(i==27) pts = 3720;
        else if(i==28) pts = 4080;
        else if(i==29) pts = 4440;
        else if(i==30) pts = 4800;
        score += cnt * pts;
      }
      return score;
    }
    function calculateAllstar5() {
      let score = 0;
      let equipTrack = parseInt($('#hero_equip_track').val())||0;
      score += equipTrack * 55000;
      let craftElite = parseInt($('#hero_crafting_elite').val())||0;
      let craftEx = parseInt($('#hero_crafting_excellent').val())||0;
      score += craftElite * 38000 + craftEx * 1500;
      let materialCarbon = parseInt($('#equipment_material_carbon').val())||0;
      let materialFabric = parseInt($('#equipment_material_fabric').val())||0;
      score += materialCarbon * 2000 + materialFabric * 200;
      let moduleBasic = parseInt($('#module_material_basic').val())||0;
      let moduleNormal = parseInt($('#module_material_normal').val())||0;
      let moduleGood = parseInt($('#module_material_good').val())||0;
      let moduleElite = parseInt($('#module_material_elite').val())||0;
      let moduleLegend = parseInt($('#module_material_legend').val())||0;
      let moduleSupreme = parseInt($('#module_material_supreme').val())||0;
      score += moduleBasic*750 + moduleNormal*2250 + moduleGood*6750 + moduleElite*20250 + moduleLegend*60750 + moduleSupreme*182250;
      let polymerBasic = parseInt($('#polymer_material_basic').val())||0;
      let polymerNormal = parseInt($('#polymer_material_normal').val())||0;
      let polymerGood = parseInt($('#polymer_material_good').val())||0;
      let polymerElite = parseInt($('#polymer_material_elite').val())||0;
      let polymerLegend = parseInt($('#polymer_material_legend').val())||0;
      let polymerSupreme = parseInt($('#polymer_material_supreme').val())||0;
      score += polymerBasic*3750 + polymerNormal*11250 + polymerGood*33750 + polymerElite*101250 + polymerLegend*303750 + polymerSupreme*911250;
      score += calculateZombieScoreDay5();
      let mt = parseInt($('#magic_ticket_day5').val())||0;
      let ar = parseInt($('#arrow_day5').val())||0;
      let wc = parseInt($('#weapon_card').val())||0;
      score += mt*12700 + ar*15000 + wc*12000;
      $('#allstar5_result').html(`총 5일차 점수: ${score.toLocaleString()} point`);
    }
    function resetAllstar5() {
      $('#hero_equip_track, #hero_crafting_elite, #hero_crafting_excellent, #equipment_material_carbon, #equipment_material_fabric, #module_material_basic, #module_material_normal, #module_material_good, #module_material_elite, #module_material_legend, #module_material_supreme, #polymer_material_basic, #polymer_material_normal, #polymer_material_good, #polymer_material_elite, #polymer_material_legend, #polymer_material_supreme, #magic_ticket_day5, #arrow_day5, #weapon_card').val(0);
      for(let i=1; i<=30; i++){
        document.getElementById('zombie_lvl_' + i).value = 0;
      }
      $('#allstar5_result').html("");
    }
/* 영웅 훈장 계산기 */
function calculateMedals() {
  // 전설 훈장 포인트 (Legend medal points)
  let legendL = (parseInt($('#legend_L').val()) || 0) * 10000;
  let legendM = (parseInt($('#legend_M').val()) || 0) * 5000;
  let legendS = (parseInt($('#legend_S').val()) || 0) * 2000;
  
  // 정예 훈장 포인트 (Elite medal points)
  let eliteL = (parseInt($('#elite_L').val()) || 0) * 1000;
  let eliteM = (parseInt($('#elite_M').val()) || 0) * 500;
  let eliteS = (parseInt($('#elite_S').val()) || 0) * 200;
  
  // 각 카테고리별 합계
  let legendTotal = legendL + legendM + legendS;
  let eliteTotal = eliteL + eliteM + eliteS;
  let totalPoints = legendTotal + eliteTotal;
  
  // 결과 표시
  $('#medal_result').html(
    `전설 훈장 점수: ${legendTotal.toLocaleString()} point<br>` +
    `정예 훈장 점수: ${eliteTotal.toLocaleString()} point<br>` +
    `총 훈장 점수: ${totalPoints.toLocaleString()} point`
  );
}

function resetMedals() {
  // 모든 입력 필드 초기화
  $('#legend_L, #legend_M, #legend_S, #elite_L, #elite_M, #elite_S').val(0);
  // 결과 텍스트 초기화
  $('#medal_result').html("");
}
