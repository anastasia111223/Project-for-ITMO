<template>
  <v-sparkline :value="values" 
    color="#C81818"
    height="260"
    stroke-linecap="round" 
    :smooth = "radius"
    fill=true
    auto-draw></v-sparkline>
    <!-- overlay: true,
    zIndex: 10
     -->
</template>

<script>
export default {
    data(){
        return {
            values: [0,55,45,92,65],
            radius: 60
        }
    }
}
</script>

<style>

</style>