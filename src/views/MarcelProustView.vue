<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Bonjour, je suis Marcel Proust. Je suis ravi de faire votre connaissance.\nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle qui nous joue parfois des tours. Que désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Marcel Proust à la première personne du singulier. Tu donnes des détails historiques sur ta vie'"
    :PhotoBot="'marcel-proust.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>