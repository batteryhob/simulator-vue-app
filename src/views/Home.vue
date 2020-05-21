<template>
    <div id="wrap">
        <SubHeader></SubHeader>
        <Bar></Bar>
        <Versus></Versus>
        <Popup></Popup>
    </div>
</template>

<script>
import SubHeader from './components/SubHeader'
import Bar from './components/Bar'
import Versus from './components/Versus'
import Popup from './components/Popup'

export default {
  name: 'App',
  components: {
    'Bar' : SubHeader,
    'SubHeader' : Bar,
    'Versus' : Versus,
    'Popup' : Popup
  },
}
</script>

<style>
#wrapper {
    touch-action: none;
}
</style>
