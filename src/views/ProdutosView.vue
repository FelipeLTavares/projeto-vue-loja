<template>
  <div class="Produtos">
    <button v-show="mostrarBotaoFiltro" class="btnFiltroMobile" @click="funcMostrarFiltro">FILTRO</button>

    <div class="ProdutosConteudoPrincipal">

    <div class="ProdutosFiltro" v-show="mostrarFiltro">
      <div class="ProdFiltroTipos">
        <h3>Tipos:</h3>
        <div class="ProdFilTiposCheck">
          <input type="checkbox" id="camisas" name="Camisa" @change="marcarCaixa" />
          <label>  Camisas</label>
        </div>
        <div class="ProdFilTiposCheck">
          <input type="checkbox" id="calcas" name="Calça" @change="marcarCaixa"/>
          <label>  Calças</label>
        </div>
        <div class="ProdFilTiposCheck">
          <input type="checkbox" id="calcas" name="Regata" @change="marcarCaixa"/>
          <label>  Regatas</label>
        </div>
      </div>
      <div class="ProdFiltroValores">
        <h3>Faixa de Preço:</h3>
        <div class="ProdFilVal">
          <label>Menor que: </label>
          <input name='valormenor' type='number' class='ProdFilValInp' step='10' placeholder='Menor ou Igual a:' v-model="valorMenor" />
        </div>
        <div class="ProdFilVal">
          <label>Maior que: </label>
          <input name='valormaior' type='number' class='ProdFilValInp' step='10' placeholder='Maior ou Igual a:' v-model="valorMaior" />
        </div>
      </div>
      <button class='ProdFiltroBotao' @click="postFiltro">Filtrar</button>
    </div>

    <div class="ProdutosFiltrados">
      <CartaoProduto v-for="produto in produtos" :key="produto._id" :srcProd="produto.fotos[0].url" :nomeProd="produto.nome" :altProd="produto.nome" :valorProd="produto.valor" :idProd="produto._id"/>
    </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import CartaoProduto from '../components/CartaoProduto.vue'

export default {
  name: 'ProdutosView',
  components: {
    CartaoProduto
  },
  data() {
    return {
      valorMenor: "",
      valorMaior: "",
      checkBox: {},
      produtos: '',
      mostrarBotaoFiltro: false,
      mostrarFiltro: true
    }
  },
  methods: {
    //Handle Checkbox
    marcarCaixa(e){
      const {name, checked} = e.target
      this.checkBox = {...this.checkBox, [name]:checked}
    },
    //Send Filter Request
    async postFiltro(){
      //Padronizar o Body
      let tiposs = [];
      Object.keys(this.checkBox).forEach((key) => {
        if(this.checkBox[key]){
          tiposs.push(key)
        }
      });
      const dados = {
        valormenor: this.valorMenor,
        valormaior: this.valorMaior,
        tipos: tiposs
      }
      console.log(dados)

      //Executart a requisição e setar a resposta
      await axios({
        method: 'post',
        url: 'https://vercel.com/felipeltavares/loja-teste-backend/api/vue/produtos/',
        data: dados
      })
      .then( resp => {this.produtos = resp.data; console.log(resp.data)} )
      .catch( err => console.log(err) )
    },   
    funcMostrarFiltro(){
      this.mostrarFiltro = !this.mostrarFiltro;
    },
    filtroLarguraTela(){
      if(screen.width < 480){
        this.mostrarBotaoFiltro = true
        this.mostrarFiltro = false
      }
    }
  },
  mounted(){
    this.postFiltro();
    this.filtroLarguraTela()
  }
}
</script>

<style scoped>
.ProdutosConteudoPrincipal{
  width: 100%;
  display: flex;
  flex-direction: row;
}

.Produtos{
  display: flex;
  flex-direction: column;
}

.ProdutosFiltro{
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: rgb(191, 189, 189);
  margin-top: 20px;
  margin-left: 5px;
  height: 370px;
}

.ProdutosFiltrados{
  width: 75%;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.ProdFiltroTipos{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  height: 100px;
  width: 90%;
  margin: 10px auto;
}

.ProdFiltroValores{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  height: 120px;
  width: 90%;
  margin: 10px auto;
}

.ProdFilVal{
  display: flex;
  flex-direction: column;
}

.ProdFilValInp{
  height: 25px;
  font-size: 15px;
  padding: 0 5px;
}

.ProdFiltroBotao{
  width: 80%;
  height: 30px;
  margin: 10px auto;
}

.btnFiltroMobile{
  width: 50%;
  height: 30px;
  margin: 20px auto;
  border-radius: 5px;
  font-weight: bold;
  
}

@media screen and (max-width: 480px) {
  .ProdutosFiltrados{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  .ProdutosFiltro{
    width: 80%;
  }

  .ProdutosConteudoPrincipal{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>