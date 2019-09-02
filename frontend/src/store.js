import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    alumnos:[ 
      {id:0,name:'Valentina Ligueño', rut:'19.783.968-6', carrera:'ing', nacimiento:'1997/10/30'},
      {id:1,name:'Fernando Villarreal', rut:'19.680.026-3', carrera:'ing', nacimiento:'1996/11/27'},
      {id:2,name:'Percy Jackson', rut:'11.111.111-1', carrera:'ing', nacimiento:'2016/10/30'},
      {id:3,name:'Francisco Diaz', rut:'22.222.222-2', carrera:'ing', nacimiento:'1994/10/20'},
    ]
  },
  mutations: {

  },
  actions: {

  }
})
