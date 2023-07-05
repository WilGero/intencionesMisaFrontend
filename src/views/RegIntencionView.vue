<template>
  <div class="container">
    <h2>Registrar Intencion</h2>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Id Misa</label>
        <select class="form-select" :options="misas" aria-label="Default select example">
          <option selected>Selecciona una misa</option>
          <option v-for="misa in misas" v-bind:key="misa" value="1">{{ misa.id }}</option>

        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Escriba su intencion</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="form.intencion"
          placeholder="Escriba su intencion..."
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Ofrece:</label>
        <input
          type="text"
          v-model="form.name_remite"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Familia o persona quien ofrece la intencion"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Costo:</label>
        <input
          type="number"
          v-model="form.ofenda"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Costo en en Bs de la intencion"
        />
      </div>
      <div class="container m-5">
        <button type="submit" v-on:click="onSubmit()" class="btn btn-primary">
          Registrar
        </button>
        <button type="reset" v-on:click="onReset()" class="btn btn-danger">
          Limpiar datos
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "RegIntencionView",
  data() {
    return {
      form: {
        id_misa:0,
        intencion: "",
        name_remite: "",
        ofrenda: 0,
      },
      misas:[{id:2,misa:"Misa Comunitaria"},{id:3,misa:"Pentecostes"}]
    };
  },
  methods: {
    onSubmit() {
        this.axios.post('http://localhost:5000/intencion',this.form);
    },
    onReset() {
      this.intencion = "";
      this.name_remite = "";
      this.ofrenda = 0;
    },
  },
};
</script>
