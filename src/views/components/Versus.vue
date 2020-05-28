<template>
    <div id="versus">
        <div class="compareview">
            <div class="riders">
                <div class="left">
                    <div class="left">
                        <div class="nick" id="rider">
                            배터리호
                            <span class="license rookie"></span>
                        </div>
                        <div class="thumbnail" id="riderImg">
                            <img class="character" src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/8981d8bae78600bc36b29c93866e23e4be92c06e32ebe6c67dd0c76ed369165d.png" alt="캐릭터">
                        </div>
                        <div class="factor">
                            <div class="kart" @click="showKartList(0)">
                                <img id="riderKartImg" src="img/1160.png" alt="카트">
                                <p id="riderKartName">백기사 X</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <div class="simulate">
                        <p>
                            <img width="40" src="img/versus.png" alt="카트라이더 전적검색">
                        </p>
                    </div>
                </div>
                <div class="right" id="find">
                    <div class="nick" id="rider">
                        배터리호
                        <span class="license rookie"></span>
                    </div>
                    <div class="thumbnail" id="riderImg">
                        <img class="character" src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/8981d8bae78600bc36b29c93866e23e4be92c06e32ebe6c67dd0c76ed369165d.png" alt="캐릭터">
                    </div>
                    <div class="factor">
                        <div class="kart" @click="showKartList(1)">
                            <img id="targetKartImg" src="img/1160.png" alt="카트">
                            <p id="targetKartName">백기사 X</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="factorview">
            <div class="title">
                <div class="desc">
                    <p>설정</p>
                    <p class="sub">시뮬레이션 값을 조절합니다</p>
                </div>
            </div>
            <div class="config">
                <div class="conditions">
                    <span>컨디션</span>
                    <div class="sliderdiv">
                        <div class="nick">배터리호</div>
                        <div class="drag">
                            <div id="slider1"></div>
                            <span id="slider1Value">100%</span>
                        </div>
                    </div>
                    <div class="sliderdiv">
                        <div class="nick">배터리호</div>
                        <div class="drag">
                            <div id="slider2"></div>
                            <span id="slider2Value">100%</span>
                        </div>
                    </div>
                </div>

                <div class="maps">
                    <span>트랙</span>
                    <span class="setup" @click="showTrackList();">
                        <i class="fas fa-cog"></i>
                        설정
                    </span>
                    <div class="gallerywrap">
                        <div class="gallery" id="wrapper">
                            <ul id="selectedTracks">
                                <li @click="showTrackList();">
                                    <div class="thumbnail">
                                        <span><i class="fas fa-plus"></i></span>
                                    </div>
                                    <span>트랙 추가</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="btnRun" class="buttons">
                    <button class="run" @click="simulatorRun()">
                        Fight!
                    </button>
                </div>

                <div class="cs-loader">
                    <div class="cs-loader-inner">
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="matchview">
            <div class="title">
                <div class="desc">
                    <p>매칭시뮬레이션</p>
                    <p class="sub">AI로 가상의 트랙을 주행합니다</p>
                </div>
            </div>
            <ul id="matchResult">
                <!--매치결과-->
            </ul>
        </div>

        <div class="summaryview">
            <div class="title">
                <div class="desc">
                    <p>결과</p>
                    <p class="sub">AI시뮬레이션 결과입니다</p>
                </div>
            </div>
            <div class="sum">
                <div class="desc" id="totalDesc">
                    <!--정리-->
                </div>
            </div>
            <div class="result">
                <div class="desc" id="summaryDesc">
                    <!--정리-->
                </div>
                <div class="circle">
                    <figure id="summaryGraph" class="chart" data-percent="0">
                        <figcaption>
                        </figcaption>
                        <svg width="200" height="200">
                            <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
                        </svg>
                        <div class="percent">
                            <p id="summaryPercent">00<span>%</span></p>
                            <span class="desc" id="summaryComment"></span>
                        </div>
                    </figure>
                </div>
            </div>
        </div>

        <div class="copyright">
            Copyright(c) 2020. All rights reserved by Jeon Jiho
        </div>

    </div>
</template>

<script>
export default {
  name: 'Versus',
  components: {
    
  },
  mounted() {

  },
  methods: {
    showKartList: function (target) {

        this.$parent.pKARTTARGET = target;

        //알럿보이기
        this.$parent.track = false
        this.$parent.kart = true
        this.$parent.alert = false
        this.$parent.popup = true

        // eslint-disable-next-line
        // let kartwrap = new IScroll('.kartwrap', {
        //     mouseWheel: true,
        //     scrollbars: false,
        //     scrollX: false,
        //     scrollY: true,
        //     click: true,
        //     preventDefaultException: { tagName: /.*/ }
        // });

        // document.addEventListener('click', this._preventDefault, { passive: false });

    },
    showTrackList: function () {

        //알럿보이기
        this.$parent.track = true
        this.$parent.kart = false
        this.$parent.alert = false
        this.$parent.popup = true

        // eslint-disable-next-line
        // let trackWrap = new IScroll('.trackwrap', {
        //     mouseWheel: true,
        //     scrollbars: false,
        //     scrollX: false,
        //     scrollY: true,
        //     click: false,
        //     preventDefaultException: { tagName: /.*/ }
        // });

        // document.addEventListener('click', this._preventDefault, { passive: false });

    },
    simulatorRun: function () {
        
        this.$parent.run();

    },
  }
}
</script>

<style>
</style>
