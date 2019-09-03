<template>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
      prominent
      
    >
      <v-list-item>
        <v-list-item-icon>
            <v-icon color='secondary' left>mdi-account-card-details</v-icon>            
        </v-list-item-icon>
       
        <v-list-item-title> Gestión de alumnos</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.ruta"
          link
        >
          <v-list-item-icon>
            <v-icon color='secondary'>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Añadir alumno', icon: 'mdi-account-plus' , ruta:'/'},
          { title: 'Listado de alumnos', icon: 'mdi-account-group', ruta:'/listar'},
        ],
        mini: true,
      }
    },
  }
</script>