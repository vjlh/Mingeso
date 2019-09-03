<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="125"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="rut"
        v-mask="mask"
        label="Rut"
        required
      ></v-text-field>
      
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        full-width
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Fecha de nacimiento"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable>
          <div class="flex-grow-1"></div>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

      <v-select
        v-model="carrera"
        :items="carreras"
        item-text="name"
        :rules="[v => !!v || 'Item is required']"
        label="Carrera"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Confirmar acción"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="sendUserData"
      >
        Agregar
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Limpiar Campos
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
  import { mask } from 'vue-the-mask'
  import axios from 'axios'

  export default {
    directives: {
      mask,
    },
    data: () => ({
      valid: true,
      mask: '##.###.###-#',
      menu: false,
      modal: false,
      menu2: false,
      carreras: [],

      name: '',
      rut: '',
      carrera: null,
      date: '',
      algo:'ajaja',      


      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      rutRules:[
        v => !!v || 'El rut es requerido',
        //v => require('rut-formatter') || 'Rut must be valid', 
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },

      sendUserData() {
        axios.post('http://localhost:8090/alumno', 
        {
          name: this.name,
          rut: this.rut,
          carrera: this.carrera,
          nacimiento: this.date,
        }
        ).then(response => {
        // Respuesta del servidor
        }).catch(e => {
          console.log(e);
        });
        console.log('wiii')
      },
      listarCarreras(){
        try{
          axios 
          .get('http://localhost:8090/carreras')
          .then(response => (this.carreras = response.data))
        }catch(err){console.log(err)}
        console.log(this.carreras)
      } 

    },
    mounted(){
      this.listarCarreras()
    },
  }
</script>