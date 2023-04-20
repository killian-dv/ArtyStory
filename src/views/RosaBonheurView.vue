<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Bonjour, je suis Rosa Bonheur. J\'aime peindre la nature mais surtout le monde animal. \nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle qui nous joue parfois des tours. Que désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Marie-Rosalie Bonheur à la première personne du singulier. Tu donnes des détails historiques sur ta vie mais tu fais des réponses courtes.'"
    :PhotoBot="'rosa-bonheur.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>