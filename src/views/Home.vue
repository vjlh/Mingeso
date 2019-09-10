<template>
  <v-container >
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="125"
        :rules="nameRules"
        prepend-icon="mdi-account-outline"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="rut"
        v-mask="mask"
        :rules="rutRules"

        prepend-icon="mdi-account-card-details-outline"
        label="Rut"
        required
      ></v-text-field>
      
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
            prepend-icon="mdi-calendar"
            required
            :rules="[v => !!v || 'Item is required']"
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
        prepend-icon="mdi-school"
        :rules="[v => !!v || 'Item is required']"
        label="Carrera"
        required

      ></v-select>

      <!--<v-file-input
        v-model="files"
        counter
        accept="image/png, image/jpeg, image/bmp"
        label="Cargar Foto (Opcional)"
        placeholder="Seleccionar Archivo"
        prepend-icon="mdi-camera-outline"
        outlined
        :show-size="1000"
      >
        <template v-slot:selection="{ index, text }">
          <v-chip
            v-if="index < 2"
            color="primary"
            dark
            label
            small
          >
            {{ text }}
          </v-chip>

          <span
            v-else-if="index === 2"
            class="overline grey--text text--darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </v-file-input>!-->

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
      modal: false,
      carreras: [],
      files: [],

      name: '',
      rut: '',
      carrera: null,
      date: '',

      nameRules: [
        v => !!v || 'Name is required',
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