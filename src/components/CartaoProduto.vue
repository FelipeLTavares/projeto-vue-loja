<template>
  <div class="Cartao">
    <router-link class='MenuSupLogo' :to='linkProduto'  >
      <img class='CartaoImg' :src='srcProd' :alt='altProd'/>
    </router-link>

    <div class="CartaoInfo">
      <div id='CartaoNome'>{{nomeProd}}</div>
      <div id='CartaoValor'>R$ {{valorProd}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartaoProduto',
  data() {
    return {
      linkProduto:'',
      valorPoduto:''
    }
  },
  props: {
    idProd: String,
    srcProd: String,
    altProd: String,
    nomeProd: String,
    valorProd: String
  },
  mounted() {
    this.linkProduto = `/produtos/${this.idProd}`
  }
}
</script>

<style scoped>
.Cartao{
  border-radius: 10px;
  width: 200px;
  margin: 20px;
  transition: opacity 0.3s;
  transition: box-shadow 0.3s;  
}

.CartaoImg{
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.Cartao:hover{
  opacity: 85%;
  box-shadow: 3px 3px 5px gray
}

.CartaoInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#CartaoNome{
  font-size: 16px;
  text-align: center;
  margin: 5px;
}

#CartaoValor{
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 5px;
}




@media only screen and (max-width: 480px) {
  .Cartao{
  border-radius: 10px;
  width: 150px;
  margin: 20px 10px;
  transition: opacity 0.3s;
  transition: box-shadow 0.3s;  
  }

  .CartaoImg{
  width: 150px;
  height: 220px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  }

  #CartaoNome{
  font-size: 16px;
  text-align: center;
  margin: 5px;
}

#CartaoValor{
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin: 5px;
}
}

</style>
