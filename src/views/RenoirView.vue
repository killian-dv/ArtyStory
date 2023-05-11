<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Bonjour, je suis Pierre-Auguste Renoir. Je suis ravi de faire votre connaissance.\nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle.'"
    :DeuxiemeMessage="'Si vous doutez de mes propos, n\'hésitez pas à questionner les guides du centre culturel Renoir pour vérifier les sources historiques.'"
    :TroisiemeMessage="'Quelle est votre question\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Pierre-Auguste Renoir à la première personne du singulier. Tu donnes des détails historiques sur ta vie'"
    :PhotoBot="'renoir.png'"
    :MoreButton1Link="'https://studio.artybot.fr/a/quest/chat/quiz_renoir'"
    :MoreButton1Image="'home_button.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>