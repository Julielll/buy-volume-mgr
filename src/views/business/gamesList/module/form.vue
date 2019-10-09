<template>
  <el-dialog :append-to-body="true" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
      <el-form-item label="客户id">
        <el-input v-model="form.customerid" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="appId">
        <el-input v-model="form.appid" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="游戏名称">
        <el-input v-model="form.name" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="游戏图标">
        <el-input v-model="form.icon" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="二维码图片地址1">
        <el-input v-model="form.qrcodeaddress1" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="二维码图片地址2">
        <el-input v-model="form.qrcodeaddress2" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="跳转路径">
        <el-input v-model="form.jumppath" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="跳转路径的方式 1=直接跳转 2=二维码跳转">
        <el-input v-model="form.jumptype" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="上架状态 0=未上架 1=已上架">
        <el-input v-model="form.shelfstatus" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="是否删除">
        <el-input v-model="form.isdelete" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="form.createtime" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="创建者">
        <el-input v-model="form.createuserid" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="form.updatetime" style="width: 370px;"/>
      </el-form-item>
      <el-form-item label="更新者">
        <el-input v-model="form.updateuserid" style="width: 370px;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { add, edit } from '@/api/games'

  export default {
  props: {
    isAdd: {
      type: Boolean,
      required: true
    },
    sup_this: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      loading: false, dialog: false,
      form: {
        id: '',
        customerid: '',
        appid: '',
        name: '',
        icon: '',
        qrcodeaddress1: '',
        qrcodeaddress2: '',
        jumppath: '',
        jumptype: '',
        sort: '',
        shelfstatus: '',
        isdelete: '',
        remark: '',
        createtime: '',
        createuserid: '',
        updatetime: '',
        updateuserid: ''
      }
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    doSubmit() {
      this.loading = true
      if (this.isAdd) {
        this.doAdd()
      } else this.doEdit()
    },
    doAdd() {
      add(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '添加成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.$parent.$parent.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    doEdit() {
      edit(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '修改成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.sup_this.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        id: '',
        customerid: '',
        appid: '',
        name: '',
        icon: '',
        qrcodeaddress1: '',
        qrcodeaddress2: '',
        jumppath: '',
        jumptype: '',
        sort: '',
        shelfstatus: '',
        isdelete: '',
        remark: '',
        createtime: '',
        createuserid: '',
        updatetime: '',
        updateuserid: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
