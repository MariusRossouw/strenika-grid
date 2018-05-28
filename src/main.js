import Vue from 'vue';
import StrenikaGrid from './App.vue';

import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";

new Vue({
  el: '#app',
  render: h => h(StrenikaGrid)
})


export default StrenikaGrid