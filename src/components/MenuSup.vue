<template>
  <header class="MenuSup">
    <div class="MenuSupLogo">
      <router-link class='MenuSupLogo' to='/'>Logo</router-link>
    </div>

    <nav class="MenuSupItens">
      <router-link class='MenuSupLink' to='/'>Vitrine</router-link>
      <router-link class='MenuSupLink' to='/produtos'>Produtos</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'MenuSup'
  }
</script>

<style scoped>
  .MenuSup{
  width: 100%;
  height: 50px;
  position: sticky;
  top:0;
  z-index: 3;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.MenuSupLogo{
  font-size: 25px;
  text-decoration: none;
  margin-left: 10px;
  color: White;
  font-style: italic;
  font-weight: bold;
  transition: color 0.3s;
}

.MenuSupLogo:hover{
  color: orange;
}

.MenuSupLink{
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 14px;
  transition: background-color 0.2s;
}

.MenuSupLink:hover{
  background-color: gray;
}
</style>
