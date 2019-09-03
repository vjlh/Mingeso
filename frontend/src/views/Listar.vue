<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <v-flex v-for="(item, index) in test" :key="index" md6>
                <v-card
                class="mx-auto"
                outlined
                >
                <v-list-item three-line>
                    <v-list-item-content>
                    <div class="overline mb-4">Estudiante</div>
                    <v-list-item-title class="headline mb-1">{{item.name}}</v-list-item-title>
                    <v-spacer/>
                    
                    <v-list-item-title>Rut</v-list-item-title>
                    <v-list-item-subtitle>{{item.rut}}</v-list-item-subtitle>

                    <v-spacer/>
                    <v-list-item-title>Fecha de Nacimiento</v-list-item-title>
                    <v-list-item-subtitle>{{item.nacimiento}}</v-list-item-subtitle>
                    <v-spacer/>
                    
                    <v-list-item-title>Carrera</v-list-item-title>
                    <v-list-item-subtitle>{{item.carrera}}</v-list-item-subtitle>
                    <v-spacer/>

                    </v-list-item-content>

                    <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                    > <v-img src="https://randomuser.me/api/portraits/men/85.jpg"/>  </v-list-item-avatar>
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
        test:[],
        alumnos:[ 
          {id:0,name:'Valentina Ligueño', rut:'19.783.968-6', carrera:'Ingenieria Civil Informatica', nacimiento:'1997/10/30'},
          {id:1,name:'Fernando Villarreal', rut:'19.680.026-3', carrera:'Ingeniería Ejecución Informática', nacimiento:'1996/11/27'},
          {id:2,name:'Percy Jackson', rut:'11.111.111-1', carrera:'Ser el mejor gato de la vida', nacimiento:'2016/10/30'},
          {id:3,name:'Francisco Diaz', rut:'22.222.222-2', carrera:'Ingeniería Ejecución Informática', nacimiento:'1994/10/20'},
        ]
      }
    },
    methods:{
      listarAlumnos(){
        try{
          //Se obtienen los alumnos
          axios 
          .get('http://localhost:8090/alumnos')
          .then(response => (this.test = response.data))
        }catch(err){console.log(err)}
      },
    },
    computed:{
    },
    beforeMount(){
      this.listarAlumnos()
      console.log(this.test)
    },
}
</script>
