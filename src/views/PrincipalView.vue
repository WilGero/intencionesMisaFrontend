<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-3" v-for="dato in misas" :key="dato.id">
        <div class="card mb-4" style="width: 18rem">
          <img :src="dato.img" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ dato.name }}</h5>
            <p class="card-text">
                <strong>Hora: </strong> {{ dato.hora }} <br>
                <strong>Fecha: </strong> {{ dato.fecha }}
                
            </p>
            <a href="#" class="btn btn-primary">Ver</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrincipalComponent",
  data() {
    return {
      msg: "Bienvenidoo a la pagina principal",
      misas: [
        { id: 1, name: "Misa de difuntos",img:"../assets/images/difuntos.jpg",hora:'10:00',fecha:'01/Mayo/2023' },
        { id: 2, name: "Misa de Ramos",img:"../assets/" },
        { id: 3, name: "Misa de Pascua",img:"" },
        { id: 4, name: "Misa Comunitaria",img:"" },
        { id: 5, name: "Misa de Fiesta",img:"" },
        { id: 6, name: "Misa de Todos los Santos",img:"" },
      ],
    };
  }
};
</script>

<style scoped>
</style>