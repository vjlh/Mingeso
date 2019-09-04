<template>
  <v-app style="
    background: #0000">
    <v-layout row wrap>
      <v-flex md3>
        <Navbar/>        
      </v-flex>

    <v-flex md8>
      <v-content>
        <router-view/>
      </v-content>
    </v-flex>

    </v-layout>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components:{
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
