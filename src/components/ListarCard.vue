<template>
    <v-container grid-list-xl>
        <div v-if="carga1" class="text-center">
          <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="primary"
          ></v-progress-circular>
        </div>
          <v-snackbar
          v-model="show"
          color="error"
          :timeout="timeout"
          top>
          Ha ocurrido un problema al mostrar la información
          <v-btn
            dark
            text
            @click="show = false"
          >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-snackbar>
        <v-layout row wrap>
            <v-flex v-for="(item, index) in alumnos" :key="index" md6>
                <v-card
                class="mx-auto"
                outlined
                >
                <v-list-item three-line>
                  
                    <v-list-item-content>
                      <div class="overline mb-4">Estudiante</div>
                      <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                    > <v-img src="http://www.balticcontrol.us/assets/administrators/default_user-96367fbe89098f5a03ec02b44ac1f7d2c087033cc3cbfecdd1c3571cd5b86bbc.png"/>  </v-list-item-avatar>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon left>mdi-account-card-details-outline</v-icon>
                      Rut
                      </v-list-item-title>
                    <v-list-item-subtitle>{{item.rut}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
        
                <v-divider :inset="inset"></v-divider>

                <v-list-item two-line>
                  <v-list-item-content>                  
                    <v-list-item-title>
                      <v-icon left>mdi-cake-variant</v-icon>
                      Fecha de Nacimiento</v-list-item-title>
                    <v-list-item-subtitle>{{item.nacimiento}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider :inset="inset"></v-divider>
                
                <v-list-item two-line> 
                  <v-list-item-content>                  
                    <v-list-item-title>
                      <v-icon left>mdi-school</v-icon>
                      Carrera </v-list-item-title>
                    <v-list-item-subtitle>{{item.carrera}}</v-list-item-subtitle>
                  </v-list-item-content>

                    
                </v-list-item>

                </v-card>
            </v-flex>
        </v-layout>
        
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    data(){
      return{
        inset: false,
        alumnos:[],
        carga1: true,
        show: false,
        timeout:7000,
        exito:false,
      }
    },
    methods:{
      async listarAlumnos(){
        try{
          //Se obtienen los alumnos
         await axios 
          .get('http://localhost:8090/alumnos')
          .then(response => (this.alumnos = response.data))
          this.carga1 = false
          this.exito = true
        }catch(err){console.log(err)
          this.carga1 = false
          this.show = true}

      },
    },
    computed:{
    },
    mounted(){
      this.listarAlumnos()

    },
}
</script>
