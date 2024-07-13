<script setup>
import { ref } from 'vue';
import TheCard from '@/components/TheCard.vue';

const abrirModal = ref(false)
const novaNota = ref("")
const notas = ref([])

const adicionarNota = () => {
    notas.value.push({
        id: Math.floor(Math.random() * 1000000),
        texto: novaNota.value,
        data: new Date()
    })
    abrirModal.value = false
    novaNota.value = ""
}

</script>

<template>
    <div v-if="abrirModal" class="overlay">
        <div v-if="abrirModal" class="modal">
            <h3 class="text-center py-2 text-2xl">Adicionar observação</h3>
            <textarea v-model="novaNota" name="obs" id="obs" cols="30" rows="10"
                class=" m-4 bg-shark-950 text-shark-50 rounded-lg p-4 border-2 border-shark-950  hover:border-forest-green-700 focus:border-forest-green-500 focus:outline-none transition-colors"></textarea>
            <button @click="adicionarNota" class="botao m-2">Adicionar</button>
            <button @click="abrirModal = false" class="botao-outline-vermelho m-2 mb-4">Fechar</button>
        </div>
    </div>
    <div class="mx-4">
        <div class="flex flex-col justify-center items-center">
            <h2 class="uppercase">Observações / Disponibilidade</h2>
            <div v-for="nota in notas" :key="nota.id" class="w-1/2">
                <TheCard>
                    <div class="flex flex-col justify-between min-h-32">
                        <p>{{ nota.texto }}</p>
                        <p>{{ nota.data.toLocaleDateString("pt-BR") }}</p>
                    </div>
                </TheCard>
            </div>


            <button @click="abrirModal = true"
                class="botao flex items-center justify-center pb-4  w-14 h-14 text-5xl mt-4">+</button>
        </div>
    </div>
</template>