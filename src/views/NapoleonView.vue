<script>
import { ref, nextTick } from "vue";
import axios from "axios";
// import TypingIndicator from "../components/TypingIndicator.vue";

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY ;

export default {
  setup() {
    const messageInput = ref("");
    const messageInputBeforeDelete = ref("");
    // const TypingIndicator = ref(null);
    const messages = ref([
      {
        role: "bot",
        content: "Je suis Napoléon. Quelle est votre question\u00a0?",
        timestamp: Date.now(),
      },
    ]);
    const messageList = ref(null);
    const sendMessage = async () => {
      if (messageInput.value.trim() === "") {
        return;
      }
      messages.value.push({
        role: "user",
        content: messageInput.value,
        timestamp: Date.now(),
      });
      messageInputBeforeDelete.value = messageInput.value;
      messageInput.value = "";
      try {
        // showTypingIndicator.value = true; // afficher l'indicateur de saisie en cours
        // messageInput.disabled = true; // désactiver l'input de saisie de l'utilisateur
        // await nextTick(); // attendre la mise à jour de l'affichage
        const openaiResponse = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            max_tokens: 180,
            messages: [
              {
                role: "system",
                content: "Tu réponds à la manière de Napoléon à la première personne du singulier. Tu utilises un ton sec tu peux faire de l'humour. Tu fais des phrases courtes avec un vocabulaire militaire",
              },
              { role: "user", content: messageInputBeforeDelete.value },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${openaiApiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(messageInput.value);
        // console.log(openaiResponse)
        // showTypingIndicator.value = false; // cacher l'indicateur de saisie en cours
        const botMessage = {
          role: "bot",
          content: `${openaiResponse.data.choices[0].message.content}`,
          timestamp: Date.now(),
        };
        messages.value.push(botMessage);
      } catch (error) {
        console.error(error);
      }
      await nextTick();
      messageList.value.scrollTop = messageList.value.scrollHeight;
      // messageInput.disabled = false; // ré-activer l'input de saisie de l'utilisateur
    };

    return {
      messageInput,
      messages,
      sendMessage,
      messageList,
    };
  },
};
</script>

<template>
  <main>
    <div id="chatbot">
      <div class="sc-header">
        <img class="logo" src="../assets/logoartybot.png" alt="artybot" />
      </div>
      <div class="sc-message-list" ref="messageList">
        <div v-for="message in messages" :key="message.timestamp" :class="['sc-message', message.role === 'bot' ? 'message_bot' : 'message_user']">
          <div class="sc-message--content" :class="message.role === 'bot' ? 'received' : 'sent'">
            <div v-if="message.role === 'bot' || message.role === 'system'" class="sc-message--avatar"></div>
            <div class="sc-message--file">
              <!-- <TypingIndicator v-if="showTypingIndicator && message.role === 'bot'" :messageColors="{backgroundColor: '#F3F3F3', color: '#333333'}"/> -->
              <p>{{ message.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sc-bottom">
        <div class="sc-user-input">
          <input v-model="messageInput" @keyup.enter="sendMessage" placeholder="Entrez votre message" />
          <button @click="sendMessage"><img src="../assets/send.png" alt="send"></button>
        </div>
        <div class="sc-menu">
          <a href="#"><img src="../assets/cadenas.png" alt="cadenas" /></a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.sc-message--avatar {
    background-image: url(../assets/napoleon.png);
}
</style>