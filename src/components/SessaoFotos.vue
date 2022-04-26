<template>
      <div class="Sessao">
      <h2 class='SessaoTitulo'>{{TituloSessao}}</h2>
      <hr class='SessaoLinha'>
      <div class="SessaoFotos">
        <slot/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SessaoFotos',
  props: {
    TituloSessao: String
  }
}
</script>

<style scoped>
.Sessao{
  width: 95%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.SessaoTitulo{
  margin-left: 20px;
}

.SessaoLinha{
  width: 95%;
  margin-left: 20px;
}

.SessaoFotos{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
