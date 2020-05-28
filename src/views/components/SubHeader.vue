<template>
    <div id="subheader">
        <div class="logo">
            <img src="img/tmi_logo_default.svg">
        </div>
        <div class="search">
            <input id="keyword" type="text" value="" placeholder="샘플에서는 사용할 수 없습니다." maxlength="100">
            <i class="fas fa-search" @click="searchRider();"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SubHeader',
  components: {
    
  },
  methods: {
      searchRider() {
        alert("샘플에서는 사용할 수 없습니다.");
      }
  }
}
</script>

<style>
</style>
