<template>
    <div id="subheader">
        <div class="logo">
            <img src="img/tmi_logo_default.svg">
        </div>
        <div class="search">
            <input id="keyword" type="text" value="" placeholder="매칭 상대의 라이더명을 입력하세요" onkeydown="simulator.checkKey(event);" maxlength="100">
            <i class="fas fa-search" onclick="simulator.searchRider();"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SubHeader',
  components: {
    
  }
}
</script>

<style>
</style>
