<template>
  <div id="app">
    <mc-actionbar-frame>
      {{#if supportMacawAdmin}}
      <span slot="actionbar-right">
        <mc-admin-logout></mc-admin-logout>
      </span>
      {{/if}}
      <el-row slot="actionbar-frame-content">
        <router-view></router-view>
      </el-row>
    </mc-actionbar-frame>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  overflow: hidden;
}

#app {
  height: 100%;
}

</style>
