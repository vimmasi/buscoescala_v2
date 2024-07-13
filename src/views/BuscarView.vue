<script setup>
import TheCard from "@/components/TheCard.vue";
import d from "@/database/database.json";
import { ref, watch, computed } from "vue";

const databases = ref(d);
const search = ref("");

// Lógica da barra de pesquisa
watch(search, () => {
  databases.value = d.filter((database) =>
    database.nome.toLowerCase().includes(search.value.toLowerCase())
  );
});

// Buscar e ordenar as datas no banco
const formatarDatas = (datas) => {
  const sortedDatas = datas.sort((a, b) => new Date(a) - new Date(b));

  return sortedDatas.map((date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  }).join("<br>");
};

// Lógica para retornar a quantidade de datas de serviço de cada militar
const contarDatasServico = (count) => {
  if (count >= 1 && count <= 3) {
    return 'text-forest-green-500';
  } else if (count >= 4 && count <= 5) {
    return 'text-laser-lemon-500';
  } else {
    return 'text-mexican-red-600';
  }
};

// Lógica pra verificar se o militar vai ser exibido, ou retornar um texto quando não for encontrado na busca
const possuiResultados = (patente) => {
  return databases.value.some(database => database.patente === patente && database.nome.toLowerCase().includes(search.value.toLowerCase()));
};

// Lógica para ordenar os militares por patente, para exibição na coluna do Total de Serviços
const ordenarPatentes = computed(() => {
  const sgt = databases.value.filter(database => database.patente === 'SGT');
  const cb = databases.value.filter(database => database.patente === 'CB');
  const s1s2 = databases.value.filter(database => database.patente === 'S1' || database.patente === 'S2');

  return [...sgt, ...cb, ...s1s2];
});


</script>

<template>
  <main class="buscar sm:grid sm:grid-cols-2 gap-4">
    <!-- Display da barra de pesquisa -->
    <div class="inline-flex items-center w-6 h-6 col-span-2 my-6">
      <img src="@/assets/lupa_icon.svg" />
      <input v-model.trim="search" type="text" placeholder="Pesquisar militar..." class="input p-2 ml-2" />
    </div>
    <!-- Fim da barra de pesquisa -->

    <!-- COLUNA 1 -->
    <div>
      <!-- SARGENTO -->
      <h2 class="uppercase">Sargento de dia</h2>
      <TheCard>
        <div class="grid grid-cols-2 text-shark-50">
          <h3>Militar</h3>
          <h3>Datas de serviço</h3>
        </div>
        <div v-if="possuiResultados('SGT')">
          <div v-for="database in databases" :key="database.id">
            <div v-if="database.patente === 'SGT'">
              <span v-if="database.datas.length > 0" class="grid grid-cols-2">
                <p>{{ database.patente }} {{ database.nome }}</p>
                <p v-html="formatarDatas(database.datas)"></p>
              </span>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-mexican-red-600 col-span-2 text-center">Militar não encontrado</p>
        </div>
      </TheCard>

      <!-- CABO -->
      <h2 class="uppercase">Cabo de dia</h2>
      <TheCard>
        <div class="grid grid-cols-2 text-shark-50">
          <h3>Militar</h3>
          <h3>Datas de serviço</h3>
        </div>
        <div v-if="possuiResultados('CB')">
          <div v-for="database in databases" :key="database.id">
            <div v-if="database.patente === 'CB'">
              <span v-if="database.datas.length > 0" class="grid grid-cols-2">
                <p>{{ database.patente }} {{ database.nome }}</p>
                <p v-html="formatarDatas(database.datas)"></p>
              </span>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-mexican-red-600 col-span-2 text-center">Militar não encontrado</p>
        </div>
      </TheCard>

      <!-- SOLDADOS -->
      <h2 class="uppercase">Soldados</h2>
      <TheCard>
        <div class="grid grid-cols-2 text-shark-50">
          <h3>Militar</h3>
          <h3>Datas de serviço</h3>
        </div>
        <div v-if="possuiResultados('S1') || possuiResultados('S2')">
          <div v-for="database in databases" :key="database.id">
            <div v-if="database.patente === 'S1' || database.patente === 'S2'">
              <span v-if="database.datas.length > 0" class="grid grid-cols-2">
                <p>{{ database.patente }} {{ database.nome }}</p>
                <p v-html="formatarDatas(database.datas)"></p>
              </span>
            </div>
          </div>
        </div>
        <div v-else>
          <p class="text-mexican-red-600 col-span-2 text-center">Militar não encontrado</p>
        </div>
      </TheCard>

    </div>

    <!-- COLUNA 2 -->
    <div>
      <h2>TOTAL DE SERVIÇOS</h2>
      <TheCard>
        <div
          v-if="possuiResultados('S1') || possuiResultados('S2') || possuiResultados('CB') || possuiResultados('SGT')">
          <div v-for="database in ordenarPatentes" :key="database.id">
            <span v-if="database.datas.length > 0">
              <p>{{ database.patente }} {{ database.nome }}:
                <span :class="contarDatasServico(database.datas.length)">
                  {{ database.datas.length }}
                </span>
              </p>
            </span>
          </div>
        </div>
        <div v-else>
          <p class="text-mexican-red-600 text-center">Militar não encontrado</p>
        </div>
      </TheCard>
    </div>
  </main>
</template>

<!-- <span v-if="database.datas.length > 0">
  (Datas de serviço: {{ formatarDatas(database.datas) }})
</span> -->

<!-- <p>Total de serviços: {{ database.datas.length }}</p> -->