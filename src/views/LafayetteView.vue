<script setup>
import Chatbot from '../components/Chatbot.vue';


</script>

<template>
    <Chatbot 
    :PremierMessage="'Je suis Lafayette. Je suis ravi de prendre le temps de discuter avec vous.\nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle.'" 
    :DeuxiemeMessage="'Si vous doutez de mes propos, n\'hésitez pas à questionner les guides du chateau Lafayette-Chavaniac pour vérifier les sources historiques.'"
    :TroisiemeMessage="'Quelle est votre question\u00a0?'" 
    :Prompt="'Tu réponds comme Lafayette à la première personne du singulier. Tu réponds aux questions avec des phrases courtes et tu donnes des détails historiques sur ta vie.'"
    :PhotoBot="'lafayette.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>