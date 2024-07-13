<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar">
        <img src="@/assets/logoipsum-254.svg" alt="LOGO" class="navbar-logo" />
        <div class="navbar-links">
            <RouterLink to="/" class="navbar-links-link">Buscar
            </RouterLink>
            <RouterLink to="/cadastrar" class="navbar-links-link">Cadastrar</RouterLink>
            <RouterLink to="/observacoes" class="navbar-links-link">Observações</RouterLink>
        </div>
        <div class="navbar-user">TODO: <img src="@/assets/user_icon.svg" alt="User Icon"><!-- TODO: autenticação com JWT e manipulação de usuários --></div>
    </nav>
</template>

<!--  -->