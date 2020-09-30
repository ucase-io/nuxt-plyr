import Vue from 'vue'
import NuxtPlyr from './NuxtPlyr.vue'

// get options passed from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`)

Vue.component('NuxtPlyr', {
  // extend the original component
  extends: NuxtPlyr,
  // add a _customCounterOptions prop to gain access to the options in the component
  props: {
    _customPluginOtions: {
      type: Object,
      default: () => ({ ...options }),
    },
  },
})
