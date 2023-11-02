const { createApp } = Vue;

createApp({
    data() {
        return {  
            // indirizzo: "Mail",
            numberOfList: 100,
            lenghtMailList: 0,
            mailList: [],
            dowlandProgress: 0,
            withProgress: "0px"     
        }
    },
    methods: {
        createMailList() {
            for(let i = 0; i < this.numberOfList; i++){
              
                // this.mailList.push("Mail" + " " + n);
                // console.log(this.mailList);
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        console.log(response.data)
                        this.mailList.push(response.data.response);
                        this.lenghtMailList += 1;
                        console.log(this.lenghtMailList);
                        const progress = ( 100 / this.numberOfList ) * this.lenghtMailList;
                        this.dowlandProgress = parseInt(progress);
                        this.withProgress = progress + "%";
                    });

            }
        },
    },
    created() {
		this.createMailList()
	},
}).mount("#app")