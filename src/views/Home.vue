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

        pRIDERKART : 1160,
        pRIDERCONDITION : 100,
        pTARTGETKART : 1160,
        pTARTGETCONDITION : 100,

        pKARTTARGET : 0,
        pSELECTEDTRACKS : [],

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
