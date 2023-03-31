<script>
import { ref, nextTick } from "vue";
import axios from "axios";

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY ;

export default {
  setup() {
    const messageInput = ref("");
    const messageInputBeforeDelete = ref("");
    const messages = ref([
      {
        role: "bot",
        content: "Je suis Napoléon. Quelle est votre question\u00a0?",
        timestamp: Date.now(),
      },
    ]);
    const messageList = ref(null);
    const isApiResponding = ref(false);

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
      messages.value.push({
        role: "bot",
        content: "",
        timestamp: Date.now(),
      });
      try {
        isApiResponding.value = true;
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
        isApiResponding.value = false;
        const botMessage = {
          role: "bot",
          content: `${openaiResponse.data.choices[0].message.content}`,
          timestamp: Date.now(),
        };
        messages.value.splice(-1, 1, botMessage);
      } catch (error) {
        console.error(error);
      }
      await nextTick();
      messageList.value.scrollTop = messageList.value.scrollHeight;
    };
    return {
      messageInput,
      messages,
      sendMessage,
      messageList,
      isApiResponding,
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
              <div v-if="message.role === 'bot' && message.content === messages[messages.length - 1].content && isApiResponding" class="sc-typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>{{ message.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sc-bottom">
        <div class="sc-user-input">
          <input v-model="messageInput" @keyup.enter="sendMessage" placeholder="Posez votre question"/>
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
.sc-typing-indicator {
  text-align: center;
  /* padding: 17px 20px; */
  border-radius: 6px;
}
.sc-typing-indicator span {
  display: inline-block;
  background-color: #b6b5ba;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-right: 3px;
  animation: bob 1.2s infinite;
}
/* SAFARI GLITCH */
.sc-typing-indicator span:nth-child(1) {
  animation-delay: -1s;
}
.sc-typing-indicator span:nth-child(2) {
  animation-delay: -0.85s;
}
.sc-typing-indicator span:nth-child(3) {
  animation-delay: -0.7s;
}
@keyframes bob {
  10% {
    transform: translateY(-10px);
    background-color: #9e9da2;
  }
  50% {
    transform: translateY(0);
    background-color: #b6b5ba;
  }
}
</style>