<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Je suis Napoléon. Quelle est votre question\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Napoléon à la première personne du singulier. Tu utilises un ton sec tu peux faire de l\'humour. Tu fais des phrases courtes avec un vocabulaire militaire'"
    :PhotoBot="'napoleon.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>