<template>
  <div class="membership">
    <b-table
    :fields="fields"
    :items="members"
    responsive striped hover ></b-table>
  </div>
</template>

<script>
  export default {
    name: 'membership',
    data () {
      //TODO: 数据增加后使用dpd接口进行排序
      return {
        members: [],
        fields: [
        { key: 'name', sortable: true },
        { key: 'rank', sortable: true },
        { key: 'organization', sortable: false },
        { key: 'win', sortable: true },
        { key: 'loss', sortable: true },
        { key: 'achievement', sortable: true }
      ],
      }
    },

    created: function(){
      this.getMembers();
    },
    methods:{
      getMembers(){
        new Promise(()=>{
          dpd.countdown.get((res, error)=>{
            this.members = res;
          })
        })
      }
    }
  }
</script>
