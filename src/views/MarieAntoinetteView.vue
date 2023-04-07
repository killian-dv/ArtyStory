<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Je suis Marie-Antoinette, Reine de France et de Navarre. Je suis ravie de m\'entretenir avec vous.\nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle qui nous joue parfois des tours. Que désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Marie Antoinette à la première personne du singulier. tu parles avec préciosité.'"
    :PhotoBot="'marie-antoinette.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>