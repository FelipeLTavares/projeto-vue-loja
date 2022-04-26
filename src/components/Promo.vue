
<template>
  <div class="Promo">
    Promoção
  </div>
</template>

<script>
export default {
  name: 'PromoFixa'
}
</script>

<style scoped>
.Promo{
  width: 100%;
  height: 200px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}

@media only screen and (max-width: 480px) {
  .Promo{
  width: 100%;
  height: 200px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  }
}
</style>