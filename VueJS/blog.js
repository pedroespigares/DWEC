const { createApp } = Vue

  createApp({
    data() {
      return {
        permitirAnadirEntrada: false,
        verEntradas: false,
        entradas: [
            {
                codigo: "1",
                titulo: "Londres",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis erat nibh, ac hendrerit ex gravida quis. Vivamus viverra dui sed bibendum porttitor. Morbi gravida est sed erat fermentum, eget pharetra enim maximus. Phasellus in sapien rhoncus, euismod nisi quis, commodo leo. Morbi convallis, mauris at pulvinar volutpat, turpis turpis accumsan purus, sed suscipit purus ante dapibus odio. Praesent in lorem consectetur felis tincidunt porttitor in eget nunc. Cras id tellus in diam tempor volutpat. Maecenas hendrerit auctor semper.",
                url: "http://google.com",
                ubicacion: {
                  ciudad: "Londres",
                  pais: "Inglaterra"
                }
            },
            {
                codigo: "2",
                titulo: "Paris",
                texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis erat nibh, ac hendrerit ex gravida quis. Vivamus viverra dui sed bibendum porttitor. Morbi gravida est sed erat fermentum, eget pharetra enim maximus. Phasellus in sapien rhoncus, euismod nisi quis, commodo leo. Morbi convallis, mauris at pulvinar volutpat, turpis turpis accumsan purus, sed suscipit purus ante dapibus odio. Praesent in lorem consectetur felis tincidunt porttitor in eget nunc. Cras id tellus in diam tempor volutpat. Maecenas hendrerit auctor semper.",
                url: "http://gmail.com",
                ubicacion: {
                  ciudad: "Paris",
                  pais: "Francia"
                }
            }
        ]
      }
    },
    methods: {
      muestraNumeroArticulos(){
        return this.entradas.length;
      },
      cambiarVisibilidad(){
        return this.verEntradas = !this.verEntradas;
      }
    },
    computed: {
      entradasDeInglaterra(){
        return this.entradas.filter((entrada) => entrada.ubicacion.pais === "Inglaterra").length;
      }
    }
  }).mount('#app')