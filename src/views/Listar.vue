<template>
    <v-container grid-list-xl>
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
                    > <v-img src="https://randomuser.me/api/portraits/men/85.jpg"/>  </v-list-item-avatar>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Rut</v-list-item-title>
                    <v-list-item-subtitle>{{item.rut}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
        
                <v-divider :inset="inset"></v-divider>

                <v-list-item two-line>
                  <v-list-item-content>                  
                    <v-list-item-title>Fecha de Nacimiento</v-list-item-title>
                    <v-list-item-subtitle>{{item.nacimiento}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider :inset="inset"></v-divider>
                
                <v-list-item two-line> 
                  <v-list-item-content>                  
                    <v-list-item-title>Carrera</v-list-item-title>
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
      }
    },
    methods:{
      async listarAlumnos(){
        try{
          //Se obtienen los alumnos
         await axios 
          .get('http://localhost:8090/alumnos')
          .then(response => (this.alumnos = response.data))
        }catch(err){console.log(err)}

      },
    },
    computed:{
    },
    mounted(){
      this.listarAlumnos()

    },
}
</script>
