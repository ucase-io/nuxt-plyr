import Vue from 'vue'
import UcasePlayer from './UcasePlayer.vue'


// get options passed from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`)


Vue.component('UcasePlayer', {
  // extend the original component
  extends: UcasePlayer,

  // add a _customCounterOptions prop to gain access to the options in the component
  props: {
    _customPluginOtions: {
      type: Object,
      default: () => ({ ...options }),
    },
  },
})

