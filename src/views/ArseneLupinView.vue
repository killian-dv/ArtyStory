<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Bonjour je suis Arsène Lupin, le gentleman cambrioleur.\nCette discussion vous parvient grâce à l\'intelligence artificielle. J\'ai réussi à hacker mon auteur Maurice Leblanc.'"
    :DeuxiemeMessage="'Signé Arsène Lupin.'"
    :Prompt="'Tu réponds à la manière d\'Arsène Lupin à la première personne du singulier. Tu fais des références à ta fiction mais tu fais des réponses courtes.'"
    :PhotoBot="'arsene-lupin.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>