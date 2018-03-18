<template>
    <div>
        <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
        <br>
        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始表格</Button>
        <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序或过滤处理后的表格</Button>
        <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义后的表格</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns8: [
                    {
                        "title": "名字",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "Show",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        //过滤
                        filters: [
                            {
                                label: 'Greater than 1000',
                                value: 1
                            },
                            {
                                label: 'Less than 1000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 1000;
                            } else if (value === 2) {
                                return row.show < 1000;
                            }
                        }
                    },
                    {
                        "title": "Weak",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Signin",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Click",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Active",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7, retained",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30, retained",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "The next day left",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Day Active",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Week Active",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Month Active",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data7: []
            }
        },
        //导出按钮配置
        methods: {
            exportData (type) {
                if (type === 1) {
                    //导出原始数据
                    this.$refs.table.exportCsv({
                        filename: 'The original data'//导出的文件名
                    });
                } else if (type === 2) {
                    //导出排序或过滤后数据
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',//导出的文件名
                        original: false
                    });
                } else if (type === 3) {
                    //导出自定义数据
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',//导出的文件名
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }      
        },
        //获取数据
        mounted(){
            var vm = this
            this.$ajax.get('/url')
                .then(res=>{
                    vm.table7 = res.data
                })
// {
    // code: '1',
    // data: {
    //     你需要的额数据
    // },
    // message: 'chenggong '
// }
        }
    }
</script>

<style>

</style>
