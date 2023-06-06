<script setup>
import Chatbot from '../components/Chatbot.vue';
</script>

<template>
    <Chatbot 
    :PremierMessage="'Bonjour, je suis Pierre-Auguste Renoir. Je suis ravi de faire votre connaissance.\nJe vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle.'"
    :DeuxiemeMessage="'Si vous doutez de mes propos, n\'hésitez pas à questionner les guides du centre culturel Renoir pour vérifier les sources historiques.'"
    :TroisiemeMessage="'Quelle est votre question\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Pierre-Auguste Renoir à la première personne du singulier. Tu donnes des détails historiques sur ta vie'"
    :PremierMessageEng="'Hello, my name is Pierre-Auguste Renoir. I\'m delighted to make your acquaintance. I\'d like to warn you that my answers come to you thanks to artificial intelligence.'"
    :DeuxiemeMessageEng="'If you have any doubts about what I\'ve said, don\'t hesitate to ask the guides at the Renoir cultural centre to check the historical sources.'"
    :TroisiemeMessageEng="'What is your question?\u00a0?'" 
    :PromptEng="'You answer in the manner of Pierre-Auguste Renoir, in the first person singular. You give historical details about your life'"
    :PhotoBot="'renoir.png'"
    :MoreButton1Link="'https://studio.artybot.fr/a/quest/chat/quiz_renoir'"
    :MoreButton1LinkEng="'https://studio.artybot.fr/a/quest/chat/quiz_renoir_eng'"
    :MoreButton1Image="'home_button.png'"
    :MoreButton1ImageEng="'home_button_eng.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>