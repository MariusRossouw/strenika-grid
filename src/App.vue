<template>
  <div class="container">
    <div style="width: 500px; height: 500px;">
        <ag-grid-vue style="height: 100%; width: 100%" ref="table" class="ag-theme-balham" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData">
        </ag-grid-vue>
    </div>
  </div>
</template>
<script>
    import { AgGridVue } from "ag-grid-vue";
    import axios from 'axios';
    export default {
        components: {
            "ag-grid-vue": AgGridVue,
            "axios": axios
        },
        data() {
            return {
                columnDefs: [
                    {
                        headerName: "Campaign Name",
                        field: "campaign_name"
                    },
                    {
                        headerName: "Campaign Description",
                        field: "campaign_description"
                    }
                ],
                rowData:[],
                show_results_filter_selected: 0,
                search_text: '',
                gridOptions: {}
            };  
        },
        methods: {
        
        },
        beforeMount() {
            this.gridOptions = {
                enableFilter: true,
                columnDefs: this.columnDefs,
                rowData: this.rowData,
                defaultColDef: {
                    menuTabs: ['filterMenuTab']
                }
            };
        },
        mounted() {
            var _this = this;
            axios.get(`https://neighbiz-api.stratech.co.za` + '/campaigns').then(function(response) {
                // _this.gridOptions.api.setRowData(response.data.data);
                _this.rowData = response.data.data;
            });
        }
    };
</script>
<style>
    .container {
        height: 350px;
    }
</style>