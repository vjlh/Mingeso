<template>
  <v-container >
    <v-snackbar
      v-model="show"
      color="success"
      :timeout="timeout"
      top
    >
      El alumno ha sido postulado exitósamente
      <v-btn
        dark
        text
        @click="show = false"
      >
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
    </v-snackbar>

    <v-form
      class="mt-6"
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
      ><template v-slot:prepend><v-icon color="primary">mdi-account-outline</v-icon></template>
        </v-text-field>

      <v-text-field
        v-model="rut"
        v-mask="mask"
        :rules="rutRules"
        label="Rut"
        required
      ><template v-slot:prepend><v-icon color="primary">mdi-account-card-details-outline</v-icon></template>
      </v-text-field>
      
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        hide-overlay
        persistent
        full-width
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Fecha de nacimiento"
            required
            :rules="[v => !!v || 'La fecha de nacimiento es requerida']"
            readonly
            v-on="on"
          ><template v-slot:prepend><v-icon color="primary">mdi-cake-variant</v-icon></template>
          </v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable>
          <div class="flex-grow-1"></div>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn id = "button_ok" text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>

      <v-select

        v-model="carrera"
        :items="carreras"
        item-text="name"
        :rules="[v => !!v || 'La carrera es requerida']"
        label="Carrera"
        required

      ><template v-slot:prepend><v-icon color="primary">mdi-school</v-icon></template>
      </v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Debe confirmar la postulación para continuar!']"
        label="Confirmar postulación"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="sendUserData"
      >
        Postular
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
      modal: false,
      carreras: [],
      files: [],
      show: false,
      timeout: 3000,

      name: '',
      rut: '',
      carrera: null,
      date: '',

      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 125) || 'El nombre debe tener como máximo 125 carácteres',
      ],
      rutRules:[
        v => !!v || 'El rut es requerido',
        //v => require('rut-formatter') || 'Rut must be valid', 
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
        console.log('algo')

      },
      reset () {
        this.$refs.form.reset()
        this.date = ''
      },

      sendUserData() {
        if (this.$refs.form.validate()){
        this.snackbar = true

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

        console.log(this.files)
        this.reset()
        }
        this.show = true

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
<style>
</style>