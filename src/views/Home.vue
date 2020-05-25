<template>
    <div id="wrap">
        <SubHeader></SubHeader>
        <Bar></Bar>
        <Versus></Versus>
        <Popup :track="track" :kart="kart" :alert="alert" :popup="popup" ></Popup>
    </div>
</template>

<script>
import SubHeader from './components/SubHeader'
import Bar from './components/Bar'
import Versus from './components/Versus'
import Popup from './components/Popup'

import $ from 'jquery'

export default {
  name: 'App',
  components: {
    'SubHeader' : SubHeader,
    'Bar' : Bar,
    'Versus' : Versus,
    'Popup' : Popup
  },
  methods: {
    checkKey: function (e) {
        if (e.key == "Enter" || e.keyCode == 13) {
            this.searchRider();
        }
    },
    showAlert: function (message) {
        $("#message").html(message);

        //알럿보이기
        $("#track").hide();
        $("#kart").hide();
        $("#alert").show();
        $("#popup").addClass("on");
    },
    // searchRider: function () {

    //     var keyword = $("#keyword").val().trim();

    //     //유효성검사
    //     if (keyword == "") {
    //         this.showAlert("라이더명을 입력해주세요.");
    //         return;
    //     }

    //     var _self = this;

    //     $.ajax({
    //         type: "GET",
    //         url: "/proxy/UserProfile?keyword=" + encodeURIComponent(keyword),
    //         beforeSend: function (xhr) {
    //             xhr.setRequestHeader("APIKey", "ZG9uJ3QgYWNjZXNzIHBsZWFzZQ==");
    //             xhr.setRequestHeader("Authorization", "Bearer " + _TOKEN);
    //         },
    //         dataType: "json",
    //         error: function () {
    //             console.log('error');
    //         },
    //         success: function (res) {

    //             if (!res.result || res.data == '') {
    //                 _TARGET = "";

    //                 _TARTGETKART = 1160;
    //                 $("#targetKartImg").attr("src", getKartImg(1160));
    //                 $("#targetKartName").html("백기사 X");

    //                 $("#none").show();
    //                 $("#find").hide();
    //                 $("#slidertarget").empty().append("<span style=\"color: rgba(255, 255, 255, 0.3);\">매칭 상대가 없습니다</span>");
    //                 _self.showAlert("검색된 라이더가 없습니다.");
    //                 $("#keyword").val("");
    //                 return
    //             }
    //             else {
                    
    //                 if (res.data.matches < 1) {
    //                     _TARGET = "";

    //                     _TARTGETKART = 1160;
    //                     $("#targetKartImg").attr("src", getKartImg(1160));
    //                     $("#targetKartName").html("백기사 X");

    //                     $("#none").show();
    //                     $("#find").hide();
    //                     $("#slidertarget").empty().append("<span style=\"color: rgba(255, 255, 255, 0.3);\">매칭 상대가 없습니다</span>");
    //                     _self.showAlert("라이더의 플레이기록이 없습니다.");
    //                     $("#keyword").val("");                                    
    //                     return
    //                 }
                    
    //                 var nick = keyword;
    //                 var chano = getCharacterImg(res.data.matches[0].matches[0].player.character);
    //                 var li = getLicense(res.data.matches[0].matches[0].player.rankinggrade2);

    //                 _TARGET = nick;

    //                 _TARTGETKART = 1160;
    //                 $("#targetKartImg").attr("src", getKartImg(1160));
    //                 $("#targetKartName").html("백기사 X");

    //                 $("#slidertarget").empty().append(nick);
    //                 $("#target").empty().append("" + nick + "<span class=\"license " + li + "\"></span>");
    //                 $("#targetImg").empty().append("<img class=\"character\" src=\"" + chano + "\" alt=\"캐릭터\">");
    //                 $("#none").hide();
    //                 $("#find").show();

    //             }
    //         }
    //     });
    // },
    // setKart: function (kart, KartName, hash) {

    //     if (_KARTTARGET == 0) {
    //         _RIDERKART = kart;
    //         $("#riderKartImg").attr("src", getKartImg(hash));
    //         $("#riderKartName").html(KartName);
    //     }                        
    //     if (_KARTTARGET == 1) {
    //         _TARTGETKART = kart;
    //         $("#targetKartImg").attr("src", getKartImg(hash));
    //         $("#targetKartName").html(KartName);
    //     }               

    // },
    // setTrack: function (trackidhash, TrackName, hash) {

    //     var obj = {
    //         trackidhash: trackidhash,
    //         TrackName: TrackName,
    //         hash: hash
    //     }

    //     var added = true;
    //     var duplicate = -1;
    //     $.map(_SELECTEDTRACKS, function (el, index) {
    //         if (el.trackidhash == obj.trackidhash) {
    //             added = false;
    //             duplicate = index;
    //         }
    //     });

    //     if (added) {
    //         _SELECTEDTRACKS.push(obj);
    //     }else{
    //         _SELECTEDTRACKS.splice(duplicate, 1);
    //     }

    //     var tracks = "";
    //     $.each(_SELECTEDTRACKS, function (idx, el) {
    //         tracks += "<li>\
    //                         <div class=\"thumbnail\">\
    //                             <img src=\"" + getTrackImg(el.hash) + "\" />\
    //                         </div>\
    //                         <span>" + el.TrackName.substring(0, 10) + "</span>\
    //                     </li>"
    //     });
    //     tracks += "<li onclick=\"simulator.showTrackList();\">\
    //                     <div class=\"thumbnail\">\
    //                         <span><i class=\"fas fa-plus\"></i></span>\
    //                     </div>\
    //                     <span>트랙 추가</span>\
    //                 </li>"

    //     $("#selectedTracks").empty().append(tracks);

    //     var configWrap = new IScroll('.gallerywrap', {
    //         mouseWheel: false,
    //         scrollbars: false,
    //         scrollX: true,
    //         scrollY: false,
    //         click: true,
    //         preventDefaultException: { tagName: /.*/ }
    //     });

    // },
    // setRandom: function (type) {

    //     //모두취소                    
    //     $(".trackwrap input[type=checkbox]").prop("checked", false);
    //     _SELECTEDTRACKS = [];

    //     //같은 랜덤을 한번 더 찍었을 시
    //     if (_RANDOMTYPE == type) {
    //         _RANDOMTYPE = "";
    //         var tracks = "";
    //         tracks += "<li onclick=\"simulator.showTrackList();\">\
    //                     <div class=\"thumbnail\">\
    //                         <span><i class=\"fas fa-plus\"></i></span>\
    //                     </div>\
    //                     <span>트랙 추가</span>\
    //                 </li>";
    //         $("#selectedTracks").empty().append(tracks);
    //         return;
    //     }

    //     _RANDOMTYPE = type;
    //     var randomArrary = _RANDOMTRACKS.filter(function (x) {
    //         return x.type == type;
    //     });

    //     for (var i = 0; i < randomArrary.length; i++) {
    //         $("#track_" + randomArrary[i].trackidhash + "").trigger("click");
    //     }

    // },
    // setCondition: function (condition, target) {

    //     if (target == 0)
    //         _RIDERCONDITION = condition;
    //     if (target == 1)
    //         _TARTGETCONDITION = condition;

    // },
    // run: function () {

    //     //유효성검사
    //     if (_RIDER == "") {
    //         this.showAlert("매칭 라이더가 없습니다.");
    //         return;
    //     }

    //     if (_TARGET == "") {
    //         this.showAlert("매칭 상대가 없습니다.");
    //         return;
    //     }

    //     if (_SELECTEDTRACKS.length < 1) {
    //         this.showAlert("시뮬레이션을 할 트랙을 선택해주세요.");
    //         return;
    //     }

    //     var _TRACKSPARAMS = [];
    //     $.each(_SELECTEDTRACKS, function (idx, el) {
    //         _TRACKSPARAMS.push(el.trackidhash);
    //     });

    //     var _self = this;

    //     $("#btnRun").hide();
    //     $(".cs-loader").show();
    //     $(".matchview").removeClass("on");
    //     $(".summaryview").removeClass("on");

    //     $.ajax({
    //         type: "POST",
    //         url: "/Proxy/simulator",
    //         dataType: 'json',
    //         data: {
    //             user1: _RIDER,
    //             user2: _TARGET,
    //             track_list: _TRACKSPARAMS,
    //             user1_kart: _RIDERKART,
    //             user1_condtn: _RIDERCONDITION,
    //             user2_kart: _TARTGETKART,
    //             user2_condtn: _TARTGETCONDITION
    //         },
    //         success: function (res) {

    //             if (res.result) {
    //                 //시뮬레이션 결과 세팅
    //                 var obj = JSON.parse(res.responseString);
    //                 _self.setResult(obj.body.games);
    //             }

    //         },
    //         error: function (err) {

    //             console.log(err);
    //             $("#btnRun").show();
    //             $(".cs-loader").hide();

    //         },
    //     });
    // },
    // setResult: function (games) {                   

    //     var resultList = [];
    //     var resultItem = "";

    //     $("#matchResult").empty();
    //     $.each(games, function (idx, el) {

    //         var win_rate = ((el.win_num / 500) * 100).toFixed(0);
    //         var lose_rate = ((el.lose_num / 500) * 100).toFixed(0);
    //         var win_num = el.win_num;
    //         var lose_num = el.lose_num;

    //         resultList.push({
    //             trackidhash: el.trackidhash,
    //             win_rate: win_rate,
    //             lose_rate: lose_rate,
    //             win_num: win_num,
    //             lose_num: lose_num,
    //         });

    //         resultItem += "<li>\
    //                         <div class=\"name\">\
    //                             Track" + (idx + 1) + ". " + el.trackname  + "\
    //                         </div>\
    //                         <div class=\"graph\">\
    //                             <div class=\"left\">\
    //                                 <div id=\"" + el.trackidhash + "_win\" class=\"bar on1\">\
    //                                     <span class=\"text\">\
    //                                         0 win\
    //                                     </span>\
    //                                 </div>\
    //                             </div>\
    //                             <div class=\"center\">\
    //                                 <div id=\"" + el.trackidhash + "_check\" class=\"circle-loader\">\
    //                                 </div>\
    //                             </div>\
    //                             <div class=\"right\">\
    //                                 <div id=\"" + el.trackidhash + "_lose\" class=\"bar on1\">\
    //                                     <span class=\"text\">\
    //                                         0 win\
    //                                     </span>\
    //                                 </div>\
    //                             </div>\
    //                         </div>\
    //                     </li>";


    //     });

        
    //     $(".matchview").addClass("on");
    //     $("#matchResult").append(resultItem);

    //     var _self = this;
    //     setTimeout(function () {
    //         $("html, body").animate({ scrollTop: $(document).height() - $(window).height() });
    //         _self.setAnimation(resultList);
    //     }, 300);

    // },
    // setAnimation: function (resultList) {

    //     var win_all = 0;

    //     var count = 0;
    //     var limit = resultList.length;
    //     var _self = this;

    //     var repeat = setInterval(function () {

    //         if (count == limit) {

    //             clearInterval(repeat);
    //             _self.setFinal(win_all, limit);

    //         } else {
    //             var obj = resultList[count];
    //             $("#" + obj.trackidhash + "_win").removeClass("on1").addClass("on" + obj.win_rate + "");
    //             $("#" + obj.trackidhash + "_win .text").html(obj.win_num + " win");

    //             $("#" + obj.trackidhash + "_lose").removeClass("on1").addClass("on" + obj.lose_rate + "");
    //             $("#" + obj.trackidhash + "_lose .text").html(obj.lose_num + " win");

    //             $("#" + obj.trackidhash + "_check").addClass("complete");
    //             $("#" + obj.trackidhash + "_check").append("<div class=\"checkmark draw\"></div>");                            
    //             count++;

    //             win_all += obj.win_num;
    //         }

    //     }, 500);
        
    // },
    // setFinal: function (win_all, limit) {
                            
    //     var avg = ((win_all / (500 * limit)) * 100).toFixed(2);
    //     var value = (avg + "").split(".");

    //     var integer = value[0];
    //     var remain = value[1];
        
    //     $(".summaryview").addClass("on");

    //     $("#totalDesc").empty().append("<p class=\"total\">" + limit + "개 트랙에서 " + addComma(limit * 500) + "번 매칭</p>\
    //                                     <p>" + addComma(win_all) + "승</p >\
    //                                     <div class=\"all\">\
    //                                     <div id=\"winGraph\" class=\"win\" data-percent=\"0\"></div>\
    //                                     </div>\
    //                                     <p>" + addComma((limit * 500) - win_all) + "패</p>\
    //                                     <div class=\"all\">\
    //                                     <div id=\"loseGraph\" class=\"lose\" data-percent=\"0\"></div>\
    //                                     </div>");

    //     $("#summaryDesc").empty().append("<p class=\"adjective\"> " + getConditionText(_RIDERCONDITION) + "</p>\
    //                                       <p>" + _RIDER + " 님이</p>\
    //                                       <p class=\"adjective\">" + getConditionText(_TARTGETCONDITION) +"</p>\
    //                                       <p>" + _TARGET + " 님을</p>\
    //                                       <p>이길 확률은</p>");

    //     if (integer == "100") {
    //         integer = "99";
    //         remain = "99";
    //     }

    //     var lastValue = parseInt(integer);

    //     $("#winGraph").attr("data-percent", lastValue);
    //     $("#loseGraph").attr("data-percent", 100 - lastValue);
    //     $("#summaryGraph").attr("data-percent", lastValue);
    //     $("#summaryPercent").empty().append("" + lastValue + "<span> %</span>");
    //     $("#summaryComment").html(getDiffText(lastValue));

    //     var _self = this;
    //     setTimeout(function () {
    //         $("html, body").animate({ scrollTop: $(document).height() - $(window).height() });

    //         $("#btnRun").show();
    //         $(".cs-loader").hide();
    //     }, 300);

    // }
  },
  data() {
    return {
      // _TOKEN : getToken,
      // _RIDER : getRider,
      pTARGET : '',
                  
      pRIDERKART : 1160,
      pRIDERCONDITION : 100,
      pTARTGETKART : 1160,
      pTARTGETCONDITION : 100,

      pKARTTARGET : 0,

      pSELECTEDTRACKS : [],

      pRANDOMTRACKS : [],
      pRANDOMTYPE : "",

      track: false,
      kart: false,
      alert: false,
      popup: false

    }
  }
}
</script>

<style>
#wrapper {
    touch-action: none;
}
</style>
