<script setup>
import { ref } from 'vue';
import d from '@/database/database.json'
import TheCard from '@/components/TheCard.vue';

// Carregue os dados do seu arquivo JSON aqui
const militares = ref(d);

const nomeMilitarSelecionado = ref('');
const novaDataServico = ref('');

const adicionarDataServico = () => {
  // Valide os dados (por exemplo, verifique se a data foi preenchida)
  if (nomeMilitarSelecionado.value && novaDataServico.value) {
    // Encontre o militar pelo nome
    const militarEncontrado = militares.value.find(militar => militar.nome === nomeMilitarSelecionado.value);
    if (militarEncontrado) {
      // Adicione a nova data de serviço ao militar encontrado (atualize conforme necessário)
      militarEncontrado.datas.push(novaDataServico.value);
      console.log('Nova data de serviço adicionada para', militarEncontrado.nome, ':', novaDataServico.value);
      // Limpe o campo da data
      novaDataServico.value = '';
    } else {
      console.error('Militar não encontrado:', nomeMilitarSelecionado.value);
    }
  }
};
</script>

<template>
  <div class="flex flex-col items-center justify-center text-xl mx-4">
    <h2 class="text-center uppercase">Cadastrar nova data</h2>
    <TheCard class="w-full">
      <form @submit.prevent="adicionarDataServico" class="grid gap-8 grid-cols-1 sm:grid-cols-3">
        <div class="flex items-center justify-between">
          <label for="nomeMilitar">Militar:</label>
          <select id="nomeMilitar" v-model="nomeMilitarSelecionado" required class="input text-center text-shark-300 mt-2 ml-4">
            <option v-for="militar in militares" :key="militar.id" :value="militar.nome">{{ militar.nome }}</option>
          </select>
        </div>
        <div class="flex items-center justify-between">
          <label for="data">Data de Serviço:</label>
          <input type="date" id="data" v-model="novaDataServico" required class="input text-center text-shark-300 mt-2 ml-4" />
        </div>
        <button type="submit" class="botao">Adicionar</button>
      </form>
    </TheCard>
  </div>
</template>
