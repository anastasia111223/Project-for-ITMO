<template>
  <v-sparkline :value="values" 
    color="#F2D131"
    height="300"
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