<template>
  <div class="Inicio">
    <PromoFixa/>
    <SessaoFotos TituloSessao='Camisas' v-if="!carregando">
      <CartaoProduto v-for="camisa in camisas" :key="camisa._id" :srcProd="camisa.fotos[0].url" :nomeProd="camisa.nome" :altProd="camisa.nome" :valorProd="camisa.valor" :idProd="camisa._id" />
    </SessaoFotos>

    <SessaoFotos TituloSessao='Calças' v-if="!carregando">
      <CartaoProduto v-for="calca in calcas" :key="calca._id" :srcProd="calca.fotos[0].url" :nomeProd="calca.nome" :altProd="calca.nome" :valorProd="calca.valor" :idProd="calca._id" />
    </SessaoFotos>
      </div>
</template>

<script>
import axios from 'axios'

import SessaoFotos from '../components/SessaoFotos.vue';
import CartaoProduto from '../components/CartaoProduto.vue';
import PromoFixa from '../components/Promo.vue'

export default {
  name: 'VitrineView',
  data(){
    return{
      camisas: '',
      calcas: '',
      carregando: true
    }
  },
  components: {
    SessaoFotos,
    CartaoProduto,
    PromoFixa
  },
  methods: {
    async getImagens(){
      this.carregando = true;

      await axios.get('https://vercel.com/felipeltavares/loja-teste-backend/api/vue/')
      .then(resp => {
        this.camisas = resp.data.camisas;
        this.calcas = resp.data.calcas;
        console.log(this.camisas)
      })
      .catch(err => console.log(err));

      this.carregando = false;
    }
  },
  mounted(){
    this.getImagens();
  }
}
</script>

<style scoped>
.Inicio{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
}

.Inicio > button {
  width: 50px;
  height: 50px;
  display: block;
}

@media only screen and (max-width: 600px) {
  
}
</style>
