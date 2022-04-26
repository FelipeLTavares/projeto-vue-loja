<template>
<div>
  <div class="Produto">
        <div class="ProdutoContainerFotos">
          <div class="ProdCFFoto">
            <img class='ProdCFFotoFoto' :src="prodUrl"/>
          </div>
        </div>

        <div class="ProdutoContainerInfo">
            <div class='ProdutoInfo'>
              <h2 class='InfoComponents'>{{prodNome}}</h2>
              <p class='InfoComponents'> Tipo: {{prodTipo}}</p>
              <p class='InfoComponents'><strong> Valor: R$ {{prodValor}}</strong></p>
              <button class='InfoComponents ProdInfoBotao' @click="mensagem">Comprar</button>
            </div>
        </div>
      </div>
      <PromoFixa/>
</div>
</template>

<script>
import axios from 'axios';

import PromoFixa from '../components/Promo.vue';

export default {
  name: 'ProdutoView',
  components: {
    PromoFixa
  },
  data(){
    return{
      prodUrl: '',
      prodNome: '',
      prodValor: '',
      prodTipo: ''
    }
  },
  methods: {
    mensagem(){
      alert('Funcionalidade ainda indisponível')
    }
  },
  async mounted(){
    await axios.get(`http://localhost:5000/api/produtos/${this.$route.params.idProduto}`)
    .then( resp => {
      const produto = resp.data[0];
      this.prodUrl = produto.fotos[0].url;
      this.prodNome = produto.nome;
      this.prodValor = produto.valor;
      this.prodTipo = produto.tipo;
    })
  }
}
</script>

<style scoped>
.Produto{
  width: 100%;
  min-height: 500px;
  display: flex;
}

.ProdutoContainerFotos{
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: row;
}

.ProdCFMiniaturas{
  width: 30%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ProdCFFoto{
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ProdCFFotoFoto{
  max-width: 450px;
  max-height: 450px;
}

.ProdutoContainerInfo{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.InfoComponents{
  margin: 20px;
}

.ProdInfoBotao{
  width: 300px;
  height: 50px;
  font-size: large;
  font-weight: bold;
  background-color: rgb(3, 182, 3);
  color: white;
  border: none;
  border-radius: 10px;
}

.ProdInfoBotao:hover{
  opacity: 70%;
}

@media screen and (max-width: 480px) {
  .Produto{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ProdCFFoto{
  border-left: 1px solid white;
  border-right: 1px solid white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
}
</style>
