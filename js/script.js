

const { createApp } = Vue

  createApp({
    data() {
      return {

        

        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                state:'10/01/2020 16:15:22',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                state:'20/03/2020 16:30:55',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',

                        msgMenuVisible : false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                state:'28/03/2020 16:15:22',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',

                        msgMenuVisible : false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                state:'10/01/2020 15:50:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                state:'10/01/2020 15:50:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                state:'10/01/2020 15:50:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                state:'10/01/2020 15:50:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                state:'10/01/2020 15:51:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',

                        msgMenuVisible : false,
                    }
                ],
            }
        ],

        // indica l'indice della chat aperta
        contactSelectedIndex: 0,


        answers : [
            "ok", 
            "Va bene!", 
            "Presidente?!", 
            "Sei uno stirato!", 
            "Non fare tardi.",
            "Sì, certo!",
            "Nessun problema!",
            "Fammi sapere se hai bisogno di altro.",
            "Come posso aiutarti?",
            "Sto elaborando la tua richiesta...",
            "Per favore, attendi un momento.",
            "Ecco i risultati:",
            "Non ho trovato nulla.",
            "Prova a riformulare la tua domanda.",
            "C'è qualcos'altro che posso fare per te?",
            "Spiacenti, non capisco cosa intendi.",
            "Per favore, fornisci più informazioni.",
            "Non sono sicuro di come rispondere.",
            "Posso provare a cercare una risposta per te.",
            "Vuoi che cerchi su internet?",
            "Ecco alcuni link che potrebbero esserti utili:",
            "Hai bisogno di aiuto per qualcos'altro?",
            "Grazie per avermi usato!",
            "Spero che tu abbia trovato quello che cercavi.",
            "A presto!",
            "Buongiorno!",
            "Buonasera!",
            "Buonanotte!",
            "Come stai?",
            "Tutto bene?",
            "Cosa c'è di nuovo?",
            "Cosa fai oggi?",
            "Hai qualche piano per il weekend?",
            "Qual è il tuo film preferito?",
            "Qual è il tuo libro preferito?",
            "Qual è la tua canzone preferita?",
            "Qual è il tuo hobby preferito?",
            "Cosa ti piace fare nel tuo tempo libero?",
            "Qual è il tuo viaggio dei sogni?",
            "Se potessi avere un superpotere, quale sarebbe?",
            "Qual è la tua più grande paura?",
            "Qual è il tuo più grande sogno?",
            "Cosa ti rende felice?",
            "Cosa ti rende triste?",
            "Cosa ti motiva?",
            "Qual è il tuo più grande successo?",
            "Qual è il tuo più grande fallimento?",
            "Cosa hai imparato dalla tua esperienza?",
            "Cosa consiglieresti a un giovane che inizia la sua carriera?",
            "Qual è la tua citazione preferita?",
            "Qual è il tuo motto?",
            "Cosa significa per te la felicità?",
            "Cosa significa per te il successo?",
            "Cosa significa per te la vita?",
          
        ],

        // contiene il messaggio che l'utente vuole scrivere
        newMessageText:'',


        // contiene il testo per il filtraggio delle chat
        filterText:'',

        // conterrà i contatti filtrati
        filterContacts:[],

        filterContactSelectedIndex:0,

        chatMenuVisible : false,

        mainMenuVisible: false,
        
        


      }
    },

    methods: {

        selectChat(index){
            this.contactSelectedIndex = index;
            
        },

        selectFilterChat(index){
            console.log(index)
            this.filterContactSelectedIndex = index;
        },

        sendMessage(){
            

            if(this.newMessageText.trim() != ''){

                let index= this.contactSelectedIndex;

                let currentDate = new Date()
                
                newMessage={
                    date: ` ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
                    message: this.newMessageText,
                    status:'sent',
                    msgMenuVisible : false,
                };
                
                
                this.contacts[this.contactSelectedIndex].messages.push(newMessage);
                
                this.newMessageText='';


                // i timeout permettono il cambiamento dello stato del nostro contatto
                setTimeout(()=>{
                    this.contacts[this.contactSelectedIndex].state = 'online';
                    setTimeout(()=>{this.contacts[this.contactSelectedIndex].state = 'Sta scrivendo...';}, 300);
                }, 300);


                setTimeout(()=>{
                    this.receivedMessage(index);
                    this.contacts[this.contactSelectedIndex].state = `Online`;
                    setTimeout(()=>{
                        this.contacts[this.contactSelectedIndex].state = `Ultimo accesso ${newMessage.date}`;
                    }, 1000);
                }, 1000);
                
            }
            
            
        },
        
        receivedMessage(index){

            let currentDate = new Date()
            
            newMessage={
                date: ` ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
                message: this.answers[ Math.floor(Math.random() * this.answers.length) ],
                status:'received',
            };

            this.contacts[index].messages.push(newMessage);

        },

        filterContact(){

            if(this.filterText.trim() != ''){

                for(let i = 0; i < this.contacts.length; i++){
                    
                    this.filterContacts = this.contacts.filter((contact)=> contact.name.toLowerCase().includes(this.filterText.toLowerCase()));
                    
                }
                console.log(this.filterText)

                console.log(this.filterContacts);
            }else{
                this.filterContacts=[];
            }
        },


        filterContactSelect(){



        },


        showMsgMenu(index){

            this.contacts[this.contactSelectedIndex].messages[index].msgMenuVisible = !this.contacts[this.contactSelectedIndex].messages[index].msgMenuVisible;

        },

        deleteMessage(index){
            console.log(index)
            
            console.log(this.contacts[this.contactSelectedIndex].messages);

            this.contacts[this.contactSelectedIndex].messages[index].msgMenuVisible = false;

            this.contacts[this.contactSelectedIndex].messages.splice(index, 1);


        },

        deleteChat(){
            this.contacts[this.contactSelectedIndex].messages.splice(0, this.contacts[this.contactSelectedIndex].messages.length);
        },


        showChatMenu(){
            this.chatMenuVisible = !this.chatMenuVisible
        },

        newChat(){
            newContact = {
                name: prompt("inserisci il nome"),
                avatar: prompt("inserisci il npercorso di una immagine quadrata"),
                visible: true,
                state:'10/01/2020 15:51:00',
                messages: [],
            }

            this.contacts.unshift(newContact);
        },

        showMainMenu(){
            this.mainMenuVisible = !this.mainMenuVisible
        },

    },
  }).mount('#app')