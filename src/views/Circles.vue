<template>
  <div id="app">
    <radial-menu
        style="margin: auto; margin-top: 300px; background-color: white"
        :radius="120"
        :angle-restriction="360">
      <radial-menu-item
          v-for="(item, index) in items"
          :key="index"
          @click="() => handleClick(item)"
      >
          <span :class="item">{{ item }}</span>
      </radial-menu-item>
    </radial-menu>
    <div style="color: rgba(0,0,0,0.6); margin-top: 16px;">{{ lastClicked }}</div>
  </div>
</template>

<script>

import {RadialMenu, RadialMenuItem} from 'vue-radial-menu'

export default {
  name: 'app',
  components: {
    RadialMenu,
    RadialMenuItem
  },
  data() {
    return {
      items: ['primary', 'secondary', 'accent', 'error', 'info', 'success', 'warning'],
      objects: [
        {name: 'primary', color: 'primary'},
        {name: 'secondary', color: 'secondary'},
        {name: 'accent', color: 'accent'},
        {name: 'error', color: 'error'},
        {name: 'info', color: 'info'},
        {name: 'success', color: 'success'},
        {name: 'warning', color: 'warning'},
      ],
      lastClicked: 'click on something!'
    }
  },
  methods: {
    handleClick(item) {
      this.lastClicked = item;
    }
  }
}</script>
