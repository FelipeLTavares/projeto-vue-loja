<template>
  <footer class="Rodape">
      <div class="RodapeLinks">
        <h2>Sociais</h2>
        <router-link class='RodapeLink' to='/'>Facebook</router-link>
        <router-link class='RodapeLink' to='/'>Instragram</router-link>
        <router-link class='RodapeLink' to='/'>Twitter</router-link>
      </div>

      <div class="RodapeLinks">
      <h2>Sobre a Empresa</h2>
        <router-link class='RodapeLink' to='/'>Institucional</router-link>
        <router-link class='RodapeLink' to='/'>Missao e Valores</router-link>
        <router-link class='RodapeLink' to='/'>Contato</router-link>
      </div>

      <div class="RodapeLinks">
      <h2>Links Uteis</h2>
        <router-link class='RodapeLink' to='/'>Lorem</router-link>
        <router-link class='RodapeLink' to='/'>Ipsum</router-link>
      </div>
    </footer>
</template>

<script>
  export default {
    name: 'RodaPe'
  }
</script>

<style scoped>
.Rodape{
  width: 100%;
  background-color: black;
  min-height: 300px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.RodapeLinks{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
}

.RodapeLink{
  text-decoration: none;
  color: white;
}

.RodapeLink:hover{
  color: orange;
}



@media screen and (max-width: 480px) {
  .Rodape{
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
  }

  .RodapeLinks{
    margin: 20px 0px;
  }
}
</style>