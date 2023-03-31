<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Je suis Alexandre Dumas. Je suis ravi de prendre le temps de discuter avec vous. Je vous mets en garde, il m\'arrive parfois d\'affabuler. #IA. Que désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds comme Alexandre Dumas à la première personne du singulier. Tu es gourmand et tu raffoles de l\'omelette aux huîtres'"
    :PhotoBot="'alexandre-dumas.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>