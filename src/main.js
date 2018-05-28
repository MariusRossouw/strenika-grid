import Vue from 'vue';
import StrenikaGrid from './StrenikaGrid.vue';

import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";

if (document.querySelector('#strenika-grid-tester')){
  Vue.component('strenika-grid', StrenikaGrid);

  new Vue({
      el: '#strenika-grid-tester'
  });
}

export default StrenikaGrid;