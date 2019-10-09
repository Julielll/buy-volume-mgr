<template>
  <div>
    <el-button size="mini" type="primary" icon="el-icon-edit" @click="to"/>
    <eForm ref="form" :sup_this="sup_this" :is-add="false"/>
  </div>
</template>
<script>
  import eForm from './form'

  export default {
  components: { eForm },
  props: {
    data: {
      type: Object,
      required: true
    },
    sup_this: {
      type: Object,
      required: true
    }
  },
  methods: {
    to() {
      const _this = this.$refs.form
      _this.form = {
        id: this.data.id,
        customerid: this.data.customerid,
        appid: this.data.appid,
        name: this.data.name,
        icon: this.data.icon,
        qrcodeaddress1: this.data.qrcodeaddress1,
        qrcodeaddress2: this.data.qrcodeaddress2,
        jumppath: this.data.jumppath,
        jumptype: this.data.jumptype,
        sort: this.data.sort,
        shelfstatus: this.data.shelfstatus,
        isdelete: this.data.isdelete,
        remark: this.data.remark,
        createtime: this.data.createtime,
        createuserid: this.data.createuserid,
        updatetime: this.data.updatetime,
        updateuserid: this.data.updateuserid
      }
      _this.dialog = true
    }
  }
}
</script>

<style scoped>
  div{
    display: inline-block;
    margin-right: 3px;
  }
</style>
