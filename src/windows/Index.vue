<template>
  <div class="index-main kgr-window-main">
    <p>{{applicationName}}</p>
    <mc-data-table :table-data="dataList"
      table-tools-layout="refresh"
      @table-tools-refresh="handleRefresh">
      <el-table-column prop="name"
        label="名称"
        width="180px">
      </el-table-column>
      <el-table-column prop="value"
        label="值"
        min-width="180px">
      </el-table-column>
    </mc-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push({
        name: 'TEST',
        value: 'VALUE' + i
      })
    }
    this.dataList = list
  },
  methods: {
    handleRefresh () {
      console.log('handle refresh', this.$application)
      setTimeout(_ => {
      }, 2000)
    }
  }
}
</script>
