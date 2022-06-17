<template>
  <header>
    <img v-bind:src="logo" alt="id-logo">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/utilisateurs">Utilisateurs</router-link>
      <router-link to="/ajouter">Ajouter</router-link>
    </nav>
  </header>

  <router-view />
  <footer>
    <div class="footer">
      <span>&copy; 2022 - Alain ORLUK</span>
      <span>ID Formation Strasbourg</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      datas: [],
      logo: 'logo.png'
    }
  },
  beforeMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(json => {
        this.datas = json;
        this.$store.commit("updateData", this.datas);
        console.log(this.$store.state.datas);
      })
  }
}


</script>

<style >
*,
::before,
::after {
  margin: 0;
  padding: 0;
}

@media only screen and (min-width: 1061px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  header {
    display: flex;
    justify-content: space-between;
    background-color: #98BBC2;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 1rem;
    padding: 1rem;
    background-color: lightgray;
    border-radius: 30px;
  }

  img {
    padding: .5rem;
  }

  nav a.router-link-exact-active {
    color: #FAFF00;
  }

  .footer {
    display: flex;
    flex-direction: column;

  }
}

@media only screen and (min-width: 626px) and (max-width: 1061) {
  
}

@media only screen and (max-width: 625px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  header {
    display: flex;
    justify-content: space-around;
    background-color: #98BBC2;
  }

  nav {
    padding-top: 3rem;
  }

  nav a {
     font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: .8rem;
    padding: .5rem;
    background-color: lightgray;
    border-radius: 50px;
  }

  img {
    border-radius: 50%;
    width: 30%;
    padding: 1rem;
  }

  nav a.router-link-exact-active {
    color: #FAFF00;
  }

  h1 {
    font-size: 1rem;
  }

  div .footer {
    display: flex;
    flex-direction: column;
  }
}
</style>
