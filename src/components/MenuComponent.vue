<template>
  <div class="container">
    <!-- menu navbar -->
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <!-- logo -->
        <a class="navbar-brand me-4 px-4" href="#">
          <img src="../assets/images/logo_inmaculada.png" alt="" height="100" />
        </a>
        <!-- boton toggler -->
        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#mi-menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- menu collapse -->
        <div
          class="collapse navbar-collapse d-flex justify-content-between"
          id="mi-menu"
        >
          <ul class="navbar-nav nav-tabs">
            <li class="nav-item">
              <router-link class="nav-link px-4" :to="{ name: 'principal' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4" :to="{ name: 'reginten' }"
                >Registrar Intencion</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4" :to="{ name: 'misas' }"
                >Misas</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4" :to="{ name: 'about' }"
                >About</router-link
              >
            </li>
          </ul>

          <div class="navbar-nav">
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i class="bi bi-person-circle"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'login' }"
                    >Iniciar sesion</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" :to="{ name: 'login' }"
                    >Registrarse</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>
<style>
.bi {
  font-size: 1.8em;
}
</style>
