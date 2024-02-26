

const { createApp } = Vue

  createApp({
    data() {
      return {

        

        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        // flag per il menu dei messaggi
                        msgIconMenuVisible:false,

                        msgMenuVisible : false,
                    }
                ],
            }
        ],

        // indica l'indice della chat aperta
        contactSelectedIndex: 0,


        answers:[
            "ok", "Va bene!", "Presidente?!", "Sei uno stirato!", "Non fare tardi."
        ],

        // contiene il messaggio che l'utente vuole scrivere
        newMessageText:'',


        // contiene il testo per il filtraggio delle chat
        filterText:'',

        // conterrà i contatti filtrati
        filterContacts:[],

        
        


      }
    },

    methods: {

        selectChat(index){
            this.contactSelectedIndex = index;
            
            console.log(msgChatSelected)

        },

        sendMessage(){
            

            if(this.newMessageText.trim() != ''){

                let index= this.contactSelectedIndex;

                let currentDate = new Date()
                
                newMessage={
                    date: ` ${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
                    message: this.newMessageText,
                    status:'sent',
                };
                
                
                this.contacts[this.contactSelectedIndex].messages.push(newMessage);
                
                this.newMessageText='';
                
                setTimeout(()=>{this.receivedMessage(index);}, 1000);
                
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

        showIconMsgMenu(index){
            this.contacts[this.contactSelectedIndex].messages[index].msgIconMenuVisible = !this.contacts[this.contactSelectedIndex].messages[index].msgIconMenuVisible;

        },


        showMsgMenu(index){

            console.log(index)
            this.msgMenuIndex = index;
            this.contacts[this.contactSelectedIndex].messages[index].msgMenuVisible = !this.contacts[this.contactSelectedIndex].messages[index].msgMenuVisible;

        },

        deleteMessage(index){
            console.log(index)

            console.log(this.contacts[this.contactSelectedIndex].messages);

            this.contacts[this.contactSelectedIndex].messages.splice(index, 1);

            this.contacts[this.contactSelectedIndex].messages[index].msgIconMenuVisible = false;
            this.contacts[this.contactSelectedIndex].messages[index].msgMenuVisible = false;

        },

    },
  }).mount('#app')