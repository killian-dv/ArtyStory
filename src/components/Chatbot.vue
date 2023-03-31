<script>
import { ref, nextTick } from "vue";
import axios from "axios";

// Clé d'API OpenAI
const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY ;

export default {
    // récupération des variables passées en props
    props: {
    PremierMessage: {
      type: String,
      required: true
    },
    Prompt: {
      type: String,
      required: true
    },
    PhotoBot: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // Déclaration des variables
    const messageInput = ref("");
    const messageInputBeforeDelete = ref("");
    // Permet de créer un tableau de messages et d'y mettre le premier message
    const messages = ref([
      {
        role: "bot",
        content: `${props.PremierMessage}`,
        timestamp: Date.now(),
      },
    ]);
    const messageList = ref(null);
    const isApiResponding = ref(false);
    // permet d'avoir une URL d'image relative avec Vite.js
    const getImageUrl = (name) => {
        return new URL(`../assets/${name}`, import.meta.url).href
    }
    // Fonction pour afficher les messages de confidentilités
    const confidentialite = () => {
        messages.value.push({
            role: "bot",
            content: "<span id='confidentilite'>Les données collectées par ce chatbot sont anonymes et ne sont pas conservées. Elles sont utilisées uniquement pour l'entraînement de l'Intelligence Artificielle (<a href='https://openai.com/'>ChatGPT / OpenAI</a>). Les données sont supprimées à la fin de chaque session.</span>",
            timestamp: Date.now(),
        });
        // Permet que les lien ne soient pas interprétés comme du texte simple
        const contentConfidentilite = document.getElementById("confidentilite");
        contentConfidentilite.innerHTML = messages.value[messages.value.length - 1].content;
    }
    // Fonction pour afficher les messages à propos
    const aPropos = () => {
        messages.value.push({
            role: "bot",
            content: "<span id='a-propos'>Ce chatbot est réalisé par <a href='https://artybot.fr'>Artybot</a>. Pour nous <a href='mailto:caroline.rosnet@upculture.fr'>contacter 💌</a></span>",
            timestamp: Date.now(),
        });
        // Permet que les lien ne soient pas interprétés comme du texte simple
        const contentAbout = document.getElementById("a-propos");
        contentAbout.innerHTML = messages.value[messages.value.length - 1].content;
    }

    // Fonction pour envoyer un message
    const sendMessage = async () => {
        // Si le message est vide, on ne fait rien
        if (messageInput.value.trim() === "") {
            return;
        }
        // On ajoute le message de l'utilisateur dans le fil de la conversation
        messages.value.push({
            role: "user",
            content: messageInput.value,
            timestamp: Date.now(),
        });
        // On attribue le message de l'utilisateur à une variable pour pouvoir vider le champ de saisie
        messageInputBeforeDelete.value = messageInput.value;
        messageInput.value = "";
        // On ajoute un message vide pour laisser la place au message de l'IA et mettre le typing en attendant la réponse de l'API
        messages.value.push({
            role: "bot",
            content: "",
            timestamp: Date.now(),
        });
        try {
            // On affiche le typing
            isApiResponding.value = true;
            // Requete à l'API OpenAI
            const openaiResponse = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                max_tokens: 180,
                messages: [
                {
                    role: "system",
                    content: `${props.Prompt}`,
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
            // On supprime le typing et on remplace par le message de l'IA
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
        // On scroll automatiquement vers le bas de la conversation
        messageList.value.scrollTop = messageList.value.scrollHeight;
    };
    return {
      messageInput,
      messages,
      sendMessage,
      confidentialite,
      aPropos,
      messageList,
      isApiResponding,
      getImageUrl,
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
            <div v-if="message.role === 'bot' || message.role === 'system'" class="sc-message--avatar" :style="{ 'background-image': 'url(' + getImageUrl(PhotoBot) + ')' }"></div>
            <div class="sc-message--file">
              <div v-if="message.role === 'bot' && message.content === messages[messages.length - 1].content && isApiResponding" class="sc-typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p v-html="message.content"></p>
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
          <a @click="confidentialite" href="#"><img src="../assets/cadenas.png" alt="cadenas" /></a>
          <a @click="aPropos" href="#"><img src="../assets/artychaud.png" alt="artychaud" /></a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#chatbot {
  width: 370px;
  height: calc(100% - 120px);
  max-height: 590px;
  position: fixed;
  right: 25px;
  bottom: 100px;
  box-sizing: border-box;
  box-shadow: 0 7px 40px 2px rgba(148,149,150,.1);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #000;
}
@media (max-width: 450px) {
  #chatbot {
      width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 0;
      right: 0;
      bottom: 0;
  }
}
/* HEADER */
.sc-header {
  max-height: 60px;
  min-height: 60px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding-right: 10px;
  padding-left: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
}
.sc-header .logo {
  align-self: center;
  padding: 10px;
  max-width: 200px;
  max-height: 70px;
}
/* FIN HEADER */

/* CONTENT */
.sc-message-list {
  background-color: rgb(247, 241, 240);
  height: 100%;
  overflow-y: auto;
  background-size: 100%;
  padding: 40px 0;
}
.sc-message {
  margin: auto;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 10px;
}
.message_bot .sc-message--content {
  width: 100%;
  display: flex;
}
.message_user .sc-message--content {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
}
.sc-message--content.received {
  color: #345ba5;
}
.sc-message--content.sent {
  color: white;
}

.sc-message-list .message_bot {
  display: flex;
  align-items: flex-start;
  margin: 0 10px;
}
.sc-message--avatar {
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  align-self: center;
  margin-right: 15px;
}
.sc-message--file{
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  -webkit-font-smoothing: subpixel-antialiased;
  padding: 10px;
  white-space: pre-wrap;
  height: fit-content;
}
.message_bot .sc-message--file{
  background-color: #fff;
  margin-right: 10px;
}
.message_user .sc-message--file{
  background-color: #345ba5;
  margin-left: 10px;
}
/* FIN CONTENT */

/* BOTTOM */
.sc-user-input {
  min-height: 55px;
  margin: 0;
  position: relative;
  bottom: 0;
  display: flex;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.sc-user-input input {
  border: none;
  padding: 0 1rem;
  width: 100%;
}
.sc-user-input button {
  border: none;
  margin: 0.5rem;
  color: white;
  background-color: transparent;
  border-radius: 10px;
  height: 35px;
}
.sc-user-input button img {
  height: 100%;
}
.sc-user-input button:hover {
  cursor: pointer;
}
.sc-menu {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 55px;
  margin: 0;
  position: relative;
  bottom: 0;
  display: flex;
  border-top: 1px solid rgba(0,0,0,.21176);
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.sc-menu a img {
  height: 45px;
  width: 55px;
  object-fit: scale-down;
}

#chatbot .input {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
}
#chatbot .input input {
width: 100%;
}
.sc-typing-indicator {
  text-align: center;
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