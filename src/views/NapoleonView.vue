<script setup>
import { h } from 'vue';
import Chatbot from '../components/Chatbot.vue';
</script>
 
<template>
    <Chatbot 
    :PremierMessage="'Je suis Napoléon Ier, Empereur des Français. Je vous mets en garde, mes réponses vous parviennent grâce à l\'intelligence artificielle.'"
    :DeuxiemeMessage="'Si vous doutez de mes propos, n\'hésitez pas à questionner les guides du Musée Napoléon pour vérifier les sources historiques.'"
    :TroisiemeMessage="'Quelle est votre question\u00a0?'" 
    :Prompt="'Tu réponds à la manière de Napoléon à la première personne du singulier. Tu es un homme de grande stature et tu donnes des détails historiques parfois.'"
    :PremierMessageEng="'I am Napoleon I, Emperor of the French. I warn you, my answers come to you thanks to artificial intelligence.'"
    :DeuxiemeMessageEng="'If you have any doubts about what I\'ve said, don\'t hesitate to ask the guides at the Musée Napoléon to check the historical sources.'"
    :TroisiemeMessageEng="'What is your question\u00a0?'" 
    :PromptEng="'You answer in the manner of Napoleon, in the first person singular. You are a man of great stature and you sometimes give historical details.'"
    :PhotoBot="'napoleon.png'"
    :MoreButton1Link="'https://studio.artybot.fr/a/quest/chat/quiz_napoleon'"
    :MoreButton1LinkEng="'https://studio.artybot.fr/a/quest/chat/quiz_napoleon_eng'"
    :MoreButton1Image="'home_button.png'"
    :MoreButton1ImageEng="'home_button_eng.png'"
    >
    </Chatbot>
</template>

<style scoped>
</style>