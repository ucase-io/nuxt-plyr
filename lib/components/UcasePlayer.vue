<template>
  <div class="ucase-video-responsive">
    <iframe
      v-if="isSrcExternal"
      :src="url"
      :width="width"
      :height="height"
      style="border: none"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
    <video v-else :src="url" :poster="poster" :width="width" :height="height" controls></video>
  </div>
</template>

<script>
  export default {
    name: 'UcasePlayer',
    data:()=>({
      url:'',
      typeOfSrc: false
    }),
    props: {
      options: {
        type: Object,
        required: false,
        default:() => ({})
        },
      src: {
        type: String,
        require: false,
        default: 'https://player.vimeo.com/video/311756540'
      },
      width: {
        type: String,
        require: false,
        default: '100%',
      },
      height: {
        type: String,
        require: false,
        default: '100%',
      },
      poster: {
        type: String,
        require: false,
        default: '',
      },
    },
    created(){
      if (this._customPluginOtions.defaultUrl) {
        if (this.src === 'https://player.vimeo.com/video/311756540') {
          this.url = this._customPluginOtions.defaultUrl
        } else {
          this.url = this.src          
        }
      } else this.url = this.src
    },
    computed: {
      pluginOptions(){
        return this._customPluginOtions
      },
      isSrcExternal(){
        return this.url.includes('http')
      }
    },
    watch: {
      src() {
        this.url = this.src
      }
    }
  }
</script>

<style lang="scss">
.ucase-video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 100%;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100% !important;
    position: absolute;
  }
}
</style>
