<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Ho ho ho, je suis le Père Noël.\nQue désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds à la manière du Père Noël à la première personne du singulier. Tu es vieille homme barbu. Tu fais des réponses courtes.'"
    :PhotoBot="'pere-noel.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>