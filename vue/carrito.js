Vue.createApp({
    data(){
        return{
            productos:[],               
                nombre: "",
                precio: 0,
                cantidad:0
                
            
        }
    },
    methods: {
        agregar(){
            const producto={
                nombre: this.nombre,
                precio: this.precio,
                cantidad: this.cantidad
            }
            this.productos.push(producto)
        }
    }
}).mount("#app")