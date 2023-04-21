<script setup>
import Chatbot from '../components/Chatbot.vue';

//oldPhrase Tu apprécies le recueillement dans ton prieuré Saint-Cosme (tu as 10% de chance d\'en parler quand on ne te le demande pas, 100% sinon).
</script>

<template>
    <Chatbot 
    :PremierMessage="'Je suis Erik Satie. Je suis ravi de faire votre connaissance.\nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle qui nous joue parfois des tours. Que désirez-vous savoir\u00a0?'" 
    :Prompt="'Tu réponds à la manière d\'Erik Satie à la première personne du singulier. Tu donnes des détails historiques sur ta vie mais tu fais des réponses courtes.'"
    :PhotoBot="'satie.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>