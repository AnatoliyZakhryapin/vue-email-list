const { createApp } = Vue;

createApp({
    data() {
        return {  
            // indirizzo: "Mail",
            numberOfList: 10,
            lenghtMailList: 0,
            mailList: []        
        }
    },
    methods: {
        createMailList() {
            for(let i = 0; i < this.numberOfList; i++){
                // const n = i + 1;
                // this.mailList.push("Mail" + " " + n);
                // console.log(this.mailList);
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        console.log(response.data)
                        this.mailList.push(response.data.response);
                        this.lenghtMailList += 1 
                        console.log(this.lenghtMailList)
                    });

            }
        },
    },
    created() {
		this.createMailList()
	},
}).mount("#app")