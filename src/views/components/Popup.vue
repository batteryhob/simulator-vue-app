<template>
    <div id="popup" v-bind:class="{ on: popup }">
        <div id="wrapper">
            <div id="alert" v-if="alert">
                <div class="top">알림</div>
                <div class="body">
                    <div class="content" id="message">
                        <!--메세지-->
                    </div>
                    <div class="buttons">
                        <button type="button" @click="closePopup">확인</button>
                    </div>
                </div>
            </div>
            <div id="kart" v-if="kart">
                <div class="top">카트선택</div>
                <div class="body">
                    <div class="content kartwrap">
                        <ul class="group">
                            <li class="item">
                                <div class="tiers">
                                    <span class="tier one"></span>
                                    <span class="text">티어 1</span>
                                </div>
                                <ul id="1tier">
                                    <li v-for="(el, idx) in p1TIER" :key="idx" @click="setKart(el.kart, el.KartName, el.hash)" >
                                        <img :src="getKartImg(el.hash)">
                                        <p>{{ el.KartName }}</p>
                                        <div class="select"></div>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <div class="tiers">
                                    <span class="tier two"></span>
                                    <span class="text">티어 2</span>
                                </div>
                                <ul id="2tier">
                                    <li v-for="(el, idx) in p2TIER" :key="idx" @click="setKart(el.kart, el.KartName, el.hash)" >
                                        <img :src="getKartImg(el.hash)">
                                        <p>{{ el.KartName }}</p>
                                        <div class="select"></div>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <div class="tiers">
                                    <span class="tier three"></span>
                                    <span class="text">티어 3</span>
                                </div>
                                <ul id="3tier">
                                    <li v-for="(el, idx) in p3TIER" :key="idx" @click="setKart(el.kart, el.KartName, el.hash)" >
                                        <img :src="getKartImg(el.hash)">
                                        <p>{{ el.KartName }}</p>
                                        <div class="select"></div>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <div class="tiers">
                                    <span class="tier four"></span>
                                    <span class="text">티어 4</span>
                                </div>
                                <ul id="4tier">
                                    <li v-for="(el, idx) in p4TIER" :key="idx" @click="setKart(el.kart, el.KartName, el.hash)" >
                                        <img :src="getKartImg(el.hash)">
                                        <p>{{ el.KartName }}</p>
                                        <div class="select"></div>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <div class="tiers">
                                    <span class="tier five"></span>
                                    <span class="text">티어 5</span>
                                </div>
                                <ul id="5tier">
                                    <li v-for="(el, idx) in p5TIER" :key="idx" @click="setKart(el.kart, el.KartName, el.hash)" >
                                        <img :src="getKartImg(el.hash)">
                                        <p>{{ el.KartName }}</p>
                                        <div class="select"></div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="buttons">
                        <button type="button" @click="closePopup">확인</button>
                    </div>
                </div>
            </div>
            <div id="track" v-if="track">
                <div class="top">트랙선택</div>
                <div class="body">
                    <div class="content trackwrap">
                        <ul class="group">
                            <li class="item">
                                <div class="difficult">
                                    난이도 5
                                </div>
                                <ul id="5diff">
                                    <li v-for="(el, idx) in p5DIFF" :key="idx" class="row" >
                                        <input type ="checkbox" :id ="'track_' + el.trackidhash" class="flex" @click="setTrack(el.trackidhash, el.TrackName, el.hash)">
                                        <label :for="'track_' + el.trackidhash" class="green"></label>
                                        <span>{{ el.TrackName }}</span>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <div class="difficult">
                                    난이도 4
                                </div>
                                <ul id="4diff">
                                    <li v-for="(el, idx) in p4DIFF" :key="idx" class="row" >
                                        <input type ="checkbox" :id ="'track_' + el.trackidhash" class="flex" @click="setTrack(el.trackidhash, el.TrackName, el.hash)">
                                        <label :for="'track_' + el.trackidhash" class="green"></label>
                                        <span>{{ el.TrackName }}</span>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <div class="difficult">
                                    난이도 3
                                </div>
                                <ul id="3diff">
                                    <li v-for="(el, idx) in p3DIFF" :key="idx" class="row" >
                                        <input type ="checkbox" :id ="'track_' + el.trackidhash" class="flex" @click="setTrack(el.trackidhash, el.TrackName, el.hash)">
                                        <label :for="'track_' + el.trackidhash" class="green"></label>
                                        <span>{{ el.TrackName }}</span>
                                    </li>
                                </ul>
                            </li>
                            <li class="item">
                                <div class="difficult">
                                    난이도 2
                                </div>
                                <ul id="2diff">
                                    <li v-for="(el, idx) in p2DIFF" :key="idx" class="row" >
                                        <input type ="checkbox" :id ="'track_' + el.trackidhash" class="flex" @click="setTrack(el.trackidhash, el.TrackName, el.hash)">
                                        <label :for="'track_' + el.trackidhash" class="green"></label>
                                        <span>{{ el.TrackName }}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="buttons">
                        <button type="button" @click="closePopup" >확인</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import kartlist from '../../assets/data/kartlist'
import tracklist from '../../assets/data/tracklist'
import $ from 'jquery'

export default {
  name: 'Popup',
  props: {
      track: Boolean,
      kart: Boolean,
      alert: Boolean,
      popup: Boolean
  },
  components: {
    
  },
  computed: {

  },
  mounted() {

    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');
    
    window.noUiSlider.create(slider1, {
        start: [100],
        behaviour: 'tap',
        connect: [true, false],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1
    });

    window.noUiSlider.create(slider2, {
        start: [100],
        behaviour: 'tap',
        connect: [true, false],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1
    });

    slider1.noUiSlider.on('update', ()=>{
        $("#slider1Value").empty().append(slider1.noUiSlider.get().replace(".00", "") + "%");
        this.setCondition(slider1.noUiSlider.get().replace(".00", ""), 0);
    });

    slider2.noUiSlider.on('update', ()=>{
        $("#slider2Value").empty().append(slider2.noUiSlider.get().replace(".00", "") + "%");
        this.setCondition(slider2.noUiSlider.get().replace(".00", ""), 1);
    });    

    this.getKartList();
    this.getTrackList();
    
  },
  methods: {
    closePopup: function () {
      
        //팝업숨기기
        this.$parent.track = false
        this.$parent.kart = false
        this.$parent.alert = false
        this.$parent.popup = false

    },      
    getKartImg(karthash) {

        if (karthash == 1160)
            return `/img/1160.png`

        if (karthash === '')
            return `/img/assets/empty_kart.png`

        const host = 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/'
        return `${host}${karthash}.png`

    },
    getTrackImg(trackidhash) {

        const host = 'https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/track/'
        return `${host}${trackidhash}.png`

    },
    getKartList: function () {
        if (kartlist.result) {

            for (var i = 0; i < kartlist.data.length; i++) {
                var kart = kartlist.data[i];
                if (kart.tier == '1' && kart.matchtype == 'speedTeamFastest') {
                    if (this.$data.p1TIER.length < 5) {

                        var added = true;
                        this.$data.p1TIER.forEach(el=> {
                            if (el.kart == kart.kart) {
                                added = false;
                            }                            
                        })
                        if (added) {
                            this.$data.p1TIER.push(kart)
                        }

                    }
                }
                if (kart.tier == '2' && kart.matchtype == 'speedTeamFastest') {
                    if (this.$data.p2TIER.length < 5) {

                        let added = true;
                        this.$data.p2TIER.forEach(el=> {
                            if (el.kart == kart.kart) {
                                added = false;
                            }                            
                        })
                        if (added) {
                            this.$data.p2TIER.push(kart)
                        }

                    }
                }
                if (kart.tier == '3' && kart.matchtype == 'speedTeamFastest') {
                    if (this.$data.p3TIER.length < 5) {

                        let added = true;
                        this.$data.p3TIER.forEach(el=> {
                            if (el.kart == kart.kart) {
                                added = false;
                            }                            
                        })
                        if (added) {
                            this.$data.p3TIER.push(kart)
                        }

                    }
                }
                if (kart.tier == '4' && kart.matchtype == 'speedTeamFastest') {
                    if (this.$data.p4TIER.length < 5) {

                        let added = true;
                        this.$data.p4TIER.forEach(el=> {
                            if (el.kart == kart.kart) {
                                added = false;
                            }                            
                        })
                        if (added) {
                            this.$data.p4TIER.push(kart)
                        }

                    }
                }
                if ((kart.tier == '5' || kart.tier == '6') && kart.matchtype == 'speedTeamFastest') {
                    if (this.$data.p5TIER.length < 5) {

                        let added = true;
                        this.$data.p5TIER.forEach(el=> {
                            if (el.kart == kart.kart) {
                                added = false;
                            }                            
                        })
                        if (added) {
                            this.$data.p5TIER.push(kart)
                        }
                    }
                }
            }

            $(".kartwrap .item ul > li").on("click", function (e) {
                $(".kartwrap .item ul > li").removeClass("on")
                $(e.currentTarget).addClass("on");
            });
        
        }
    },
    getTrackList: function () {
        for (var i = 0; i < tracklist.datas.length; i++) {
            var track = tracklist.datas[i];

            if (track.Difficulty == 5) {
                let added = true;
                this.$data.p5DIFF.forEach(el => {
                    if (el.trackidhash == track.trackidhash) {
                        added = false;
                    }
                });
                if (added) {
                    this.$data.p5DIFF.push(track)
                }
            }
            if (track.Difficulty == 4) {
                let added = true;
                this.$data.p4DIFF.forEach(el => {
                    if (el.trackidhash == track.trackidhash) {
                        added = false;
                    }
                });
                if (added) {
                    this.$data.p4DIFF.push(track)
                }
            }
            if (track.Difficulty == 3) {
                let added = true;
                this.$data.p3DIFF.forEach(el => {
                    if (el.trackidhash == track.trackidhash) {
                        added = false;
                    }
                });
                if (added) {
                    this.$data.p3DIFF.push(track)
                }
            }
            if (track.Difficulty == 2) {
                let added = true;
                this.$data.p2DIFF.forEach(el => {
                    if (el.trackidhash == track.trackidhash) {
                        added = false;
                    }
                });
                if (added) {
                    this.$data.p2DIFF.push(track)
                }
            }
            if (track.Difficulty == 1) {
                let added = true;
                this.$data.p1DIFF.forEach(el => {
                    if (el.trackidhash == track.trackidhash) {
                        added = false;
                    }
                });
                if (added) {
                    this.$data.p1DIFF.push(track)
                }
            }
            
        }

    },
    setKart: function (kart, KartName, hash) {

        if (this.$parent.pKARTTARGET == 0) {
            this.$parent.pRIDERKART = kart;
            $("#riderKartImg").attr("src", this.getKartImg(hash));
            $("#riderKartName").html(KartName);
        }                        
        if (this.$parent.pKARTTARGET == 1) {
            this.$parent.pTARTGETKART = kart;
            $("#targetKartImg").attr("src", this.getKartImg(hash));
            $("#targetKartName").html(KartName);
        }               

    },
    setTrack: function (trackidhash, TrackName, hash) {

        let obj = {
            trackidhash: trackidhash,
            TrackName: TrackName,
            hash: hash
        }

        let added = true;
        let duplicate = -1;
        $.map(this.$parent.pSELECTEDTRACKS, function (el, index) {
            if (el.trackidhash == obj.trackidhash) {
                added = false;
                duplicate = index;
            }
        });

        if (added) {
            this.$parent.pSELECTEDTRACKS.push(obj);
        }else{
            this.$parent.pSELECTEDTRACKS.splice(duplicate, 1);
        }

        

        let tracks = "";
        $.each(this.$parent.pSELECTEDTRACKS, (idx, el)=>{
            tracks += "<li>\
                            <div class=\"thumbnail\">\
                                <img src=\"" + this.getTrackImg(el.hash) + "\" />\
                            </div>\
                            <span>" + el.TrackName.substring(0, 10) + "</span>\
                        </li>"
        });
        tracks += "<li onclick=\"simulator.showTrackList();\">\
                        <div class=\"thumbnail\">\
                            <span><i class=\"fas fa-plus\"></i></span>\
                        </div>\
                        <span>트랙 추가</span>\
                    </li>"
        $("#selectedTracks").empty().append(tracks);

        //eslint-disable-next-line
        // let configWrap = new IScroll('.gallerywrap', {
        //     mouseWheel: false,
        //     scrollbars: false,
        //     scrollX: true,
        //     scrollY: false,
        //     click: true,
        //     preventDefaultException: { tagName: /.*/ }
        // });

    },
    setCondition: function (condition, target) {
        
        if (target == 0)
            this.$parent.pRIDERCONDITION = condition;
        if (target == 1)
            this.$parent.pTARTGETCONDITION = condition;

    },
  },
  data() {
      return {

        p1TIER : [],
        p2TIER : [],
        p3TIER : [],
        p4TIER : [],
        p5TIER : [],

        p5DIFF : [],
        p4DIFF : [],
        p3DIFF : [],
        p2DIFF : [],
        p1DIFF : []

      }
  }
}
</script>

<style>
</style>
