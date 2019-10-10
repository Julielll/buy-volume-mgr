<template>
  <div class="head-container">
    <!-- 搜索 -->
    <el-input v-model="query.value" clearable placeholder="请输入游戏名称" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
    <!-- 新增 -->
    <div style="display: inline-block;margin: 0px 2px;">
      <el-button
        v-if="checkPermission(['ADMIN'])"
        class="filter-item"
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="$refs.form.dialog = true">新增</el-button>
      <eForm ref="form" :is-add="true"/>
    </div>
  </div>
</template>

<script>
  import checkPermission from '@/utils/permission' // 权限判断函数
  import eForm from './form'

  export default {
  components: { eForm },
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      queryTypeOptions: [
        { key: 'id', display_name: 'id' },
        { key: 'customerid', display_name: '客户id' },
        { key: 'appid', display_name: 'appId' },
        { key: 'name', display_name: '游戏名称' },
        { key: 'shelfstatus', display_name: '上架状态 0=未上架 1=已上架' }
      ]
    }
  },
  methods: {
    checkPermission,
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
    }
  }
}
</script>
