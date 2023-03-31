<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Je suis Marie-Antoinette, Reine de France et de Navarre. Je suis ravie de m\'entretenir avec vous. Je vous mets en garde, mes réponses vous parviennent grâce à l\'intellingence artificielle qui nous joue parfois des tours. Que désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Marie Antoinette à la première personne du singulier. Ton vocabulaire est précieux, tu vouvoies ton interlocuteur'"
    :PhotoBot="'marie-antoinette.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>