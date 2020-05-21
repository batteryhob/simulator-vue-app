<template>
    <div id="versus">
        <div class="compareview">
            <div class="riders">
                <div class="left">
                    <div class="nick" id="rider">
                        <!--세팅-->
                    </div>
                    <div class="thumbnail" id="riderImg">
                        <!--세팅-->
                    </div>
                    <div class="factor">
                        <div class="kart" onclick="simulator.showKartList(0);">
                            <img id="riderKartImg" src="img/1160.png" alt="카트">
                            <p id="riderKartName">백기사 X</p>
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
                <div class="right" id="none">
                    <div class="search">
                    </div>
                    <div class="thumbnail">
                        <img class="character" src="img/null_target.png" alt="">
                    </div>
                    <p class="notarget">매칭 상대가 없습니다</p>
                </div>
                <div class="right" id="find" style="display:none">
                    <div class="nick" id="target">
                        <!--세팅-->
                    </div>
                    <div class="thumbnail" id="targetImg">
                        <!--세팅-->
                    </div>
                    <div class="factor">
                        <div class="kart" onclick="simulator.showKartList(1);">
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
                        <div class="nick">@ViewBag.Rider</div>
                        <div class="drag">
                            <div id="slider1"></div>
                            <span id="slider1Value">100%</span>
                        </div>
                    </div>
                    <div class="sliderdiv">
                        <div class="nick" id="slidertarget">
                            <span style="color: rgba(255,255,255,0.3);">매칭 상대가 없습니다</span>
                        </div>
                        <div class="drag">
                            <div id="slider2"></div>
                            <span id="slider2Value">100%</span>
                        </div>
                    </div>
                </div>

                <div class="maps">
                    <span>트랙</span>
                    <span class="setup" onclick="simulator.showTrackList();">
                        <i class="fas fa-cog"></i>
                        설정
                    </span>
                    <div class="gallerywrap">
                        <div class="gallery" id="wrapper">
                            <ul id="selectedTracks">
                                <li onclick="simulator.showTrackList();">
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
                    <button class="run" onclick="simulator.run()">
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
            Copyright(c) 2019. All rights reserved by
            <img data-v-72b6acb4="" src="img/tmi_logo_default.svg" />
        </div>

    </div>
</template>

<script>
export default {
  name: 'Versus',
  components: {
    
  }
}
</script>

<style>
</style>
