<template>
  <MenuSup/>
  <router-view/>
  <RodaPe/>
</template>

<script>
  import MenuSup from './components/MenuSup.vue';
  import RodaPe from './components/Rodape.vue';

  export default {
    components: {
      MenuSup,
      RodaPe
    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Luxurious+Roman&family=Montserrat:ital,wght@0,100;0,300;1,200&family=Poppins:wght@100;200;300;400;500;600;700;800&family=Raleway&display=swap');

*{
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}


</style>
