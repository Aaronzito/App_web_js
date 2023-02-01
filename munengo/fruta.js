Vue.createApp({
    data() {
        return{
            fruta:''
            

        }
    },
    computed: {
        frutas() {
            if(this.fruta=='Manzana'){
                return 'https://th.bing.com/th/id/OIP.YdBKMKhZk429atkjPqNh1AHaHa?pid=ImgDet&rs=1'
            }
            else if(this.fruta=='Naranja'){
                return 'https://th.bing.com/th/id/OIP.yIk78HWD9VHC9Gwv-PkFZAHaFj?w=234&h=180&c=7&r=0&o=5&pid=1.7'
            }
            else if(this.fruta=='Pera'){
                return 'https://th.bing.com/th/id/OIP.hRko0yZKYSB9z3p_t8-oRwHaE7?w=292&h=195&c=7&r=0&o=5&pid=1.7'
            }
        }
    }
}).mount('#app21')