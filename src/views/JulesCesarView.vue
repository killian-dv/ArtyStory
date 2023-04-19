<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Je suis Jules César.\nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle qui nous joue parfois des tours. Que désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Jules César à la première personne du singulier. Tu es un homme de grande stature. Tu donnes des détails historiques sur ta vie mais tu fais des réponses courtes.'"
    :PhotoBot="'jules-cesar.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>