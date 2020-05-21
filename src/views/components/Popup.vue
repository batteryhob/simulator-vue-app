<template>
        <div id="popup">
            <div id="wrapper">
                <div id="alert">
                    <div class="top">알림</div>
                    <div class="body">
                        <div class="content" id="message">
                            <!--메세지-->
                        </div>
                        <div class="buttons">
                            <button type="button" onclick="simulator.closePopup(event);">확인</button>
                        </div>
                    </div>
                </div>
                <div id="kart">
                    <div class="top">카트선택</div>
                    <div class="body">
                        <div class="content kartwrap">
                            <ul class="group">
                                <li class="item">
                                    <div class="tiers">
                                        <span class="tier one"></span>
                                        <span class="text">티어 1</span>
                                    </div>
                                    <ul id="1tier"></ul>
                                </li>
                                <li class="item">
                                    <div class="tiers">
                                        <span class="tier two"></span>
                                        <span class="text">티어 2</span>
                                    </div>
                                    <ul id="2tier"></ul>
                                </li>
                                <li class="item">
                                    <div class="tiers">
                                        <span class="tier three"></span>
                                        <span class="text">티어 3</span>
                                    </div>
                                    <ul id="3tier"></ul>
                                </li>
                                <li class="item">
                                    <div class="tiers">
                                        <span class="tier four"></span>
                                        <span class="text">티어 4</span>
                                    </div>
                                    <ul id="4tier"></ul>
                                </li>
                                <li class="item">
                                    <div class="tiers">
                                        <span class="tier five"></span>
                                        <span class="text">티어 5</span>
                                    </div>
                                    <ul id="5tier"></ul>
                                </li>
                            </ul>
                        </div>
                        <div class="buttons">
                            <button type="button" onclick="simulator.closePopup(event);">확인</button>
                        </div>
                    </div>
                </div>
                <div id="track">
                    <div class="top">트랙선택</div>
                    <div class="body">
                        <div class="random">
                            <div onclick="simulator.setRandom('tmi')">
                                <img src="img/allRandomThumb1zz.png" alt="TMI랜덤" />
                                <p>TMI랜덤</p>
                                <div class="select">
                                </div>
                            </div>
                            <div onclick="simulator.setRandom('league')">
                                <img src="img/leagueRandomThumb1zz.png" alt="리그랜덤" />
                                <p>리그랜덤</p>
                                <div class="select">
                                </div>
                            </div>
                            <div onclick="simulator.setRandom('normal')">
                                <img src="img/hot3RandomThumb1zz.png" alt="노말랜덤" />
                                <p>노말랜덤</p>
                                <div class="select">
                                </div>
                            </div>
                        </div>
                        <div class="content trackwrap">
                            <ul class="group">
                                <li class="item">
                                    <div class="difficult">
                                        난이도 5
                                    </div>
                                    <ul id="5diff"></ul>
                                </li>
                                <li class="item">
                                    <div class="difficult">
                                        난이도 4
                                    </div>
                                    <ul id="4diff"></ul>
                                </li>
                                <li class="item">
                                    <div class="difficult">
                                        난이도 3
                                    </div>
                                    <ul id="3diff"></ul>
                                </li>
                                <li class="item">
                                    <div class="difficult">
                                        난이도 2
                                    </div>
                                    <ul id="2diff"></ul>
                                </li>
                            </ul>
                        </div>
                        <div class="buttons">
                            <button type="button" onclick="simulator.closePopup(event);">확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Popup',
  components: {
    
  }
}
</script>

<style>
</style>
