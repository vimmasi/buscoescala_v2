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
                class="modal-textarea"></textarea>
            <button @click="adicionarNota" class="botao m-2">Adicionar</button>
            <button @click="abrirModal = false" class="botao-outline-vermelho m-2 mb-4">Fechar</button>
        </div>
    </div>
    <div class="mx-4 sm:mx-0">
        <div class="flex flex-col justify-center items-center">
            <h2 class="uppercase">Observações / Disponibilidade</h2>
            <div v-for="nota in notas" :key="nota.id" class="w-full lg:w-1/2">
                <TheCard class="p-0">
                    <div class="nota">
                        <p class="p-4">{{ nota.texto }}</p>
                        <div class="nota-info">
                            <p>{{ nota.data.toLocaleDateString("pt-BR") }}</p>
                            <p>Adicionado por <span class="font-bold">User</span></p>
                        </div>
                    </div>
                </TheCard>
            </div>


            <button @click="abrirModal = true"
                class="botao-adicionar">+</button>
        </div>
    </div>
</template>