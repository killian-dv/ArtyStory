<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Salut je suis Marie'" 
    :Prompt="'Tu réponds à la manière de Marie Antoinette à la première personne du singulier.'"
    :PhotoBot="'marie-antoinette.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>