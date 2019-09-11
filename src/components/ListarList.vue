<template>
  <v-container>
    <div v-if="carga" class="text-center">
      <v-progress-circular
        indeterminate
        :size="70"
        :width="7"
        color="primary"
      ></v-progress-circular>
    </div>
		<!--Table+Filter-->
		<v-card v-else> 
				<v-card-title>
					Listado de alumnos
					<div class="flex-grow-1"></div>
					<v-text-field
						v-model="search"
						append-icon="mdi-magnify"
						label="Ingrese su búsqueda"
						single-line
						hide-details
					></v-text-field>
				</v-card-title>
				<v-data-table
					:headers="headers"
					:items="info"
					:search="search"
				></v-data-table>
			</v-card>
		<!--End Table+Filter-->
  </v-container>
</template>

<script>
import axios from 'axios'

  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'RUT',
            align: 'left',
            sortable: true,
            value: 'rut',
          },
          { text: 'Nombre', value: 'name' },
          { text: 'Carrera', value: 'carrera' },
          { text: 'Nacimiento', value: 'nacimiento' }
        ],
        info : [],
        carga:true,
      }
    },
    methods:{
      async listarAlumnos(){
        try{
          //Se obtienen los alumnos
         await axios 
          .get('http://localhost:8090/alumnos')
          .then(response => (this.info = response.data))
        }catch(err){console.log(err)}
        console.log('Se hizo')
        this.carga = false

      },
    },
    computed:{
    },
    mounted(){
      this.listarAlumnos()

    },
  }
</script>

<style>

</style>