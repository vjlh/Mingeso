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
    <v-snackbar
      v-model="show"
      color="error"
      :timeout="timeout"
      top
    >
      Ha ocurrido un problema al mostrar la información
      <v-btn
        dark
        text
        @click="show = false"
      >
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
    </v-snackbar>
		<!--Table+Filter-->
		<v-card v-if="exito"> 
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
        show: false,
        timeout:7000,
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
        exito:false,
      }
    },
    methods:{
      async listarAlumnos(){
        try{
          //Se obtienen los alumnos
         await axios 
          .get('http://157.245.12.218:8181/MingesoBackend/alumnos')
          .then(response => (this.info = response.data))
          this.carga = false
          this.exito = true
        }catch(err){
          console.log(err)
          this.carga = false
          this.show = true
        }

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