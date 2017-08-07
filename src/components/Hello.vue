<template>
<!--   <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div> -->
  <div class="hello">
    <div class="phone-viewport">
    <md-list class="custom-list md-triple-line">
      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
          <p>I'll be in your neighborhood doing errands...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/6" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>me, Scott, Jennifer</span>
          <span>Summer BBQ</span>
          <p>Wish I could come, but I'm out of town ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/5" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Sandra Adams</span>
          <span>Oui oui</span>
          <p>Do you have Paris recommendations ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/8" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Trevor Hansen</span>
          <span>Order confirmation</span>
          <p>Thank you for your recent order from ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </div>

  <div class="phone-viewport">
    <md-list class="custom-list md-triple-line md-dense">
      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
          <p>I'll be in your neighborhood doing errands...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/6" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>me, Scott, Jennifer</span>
          <span>Summer BBQ</span>
          <p>Wish I could come, but I'm out of town ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/5" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Sandra Adams</span>
          <span>Oui oui</span>
          <p>Do you have Paris recommendations ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/8" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Trevor Hansen</span>
          <span>Order confirmation</span>
          <p>Thank you for your recent order from ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: {}
    }
  },
  methods: {
    ...mapActions([
      ]),
    ...mapMutations([
      ]),
    getData (url, fn, err) {
      this.axios.get(url).then(fn).catch(err).then()
    },
    load () {
      this.getData(`/products?TenantId=1&page=1`, (res) => {
        this.data = res.data
      }, (err) => {
        console.log(res.status)
      })
    }
  },
  created (){
    this.load()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
