/* Option choices are explicit; there is no assumed school combination. */
(() => {
 'use strict';const key='learn-alevel-psychology-options',groups={1:['relationships','gender','cognition'],2:['schizophrenia','eating','stress'],3:['aggression','forensic','addiction']};
 let saved={};try{saved=JSON.parse(localStorage.getItem(key))||{};}catch(_){}
 const q=new URLSearchParams(location.search),selection={};
 for(const n of [1,2,3]){const value=q.get('option'+n)||saved[n];selection[n]=groups[n].includes(value)?value:'';}
 window.PSY_SELECTION=selection;window.PSY_OPTION_GROUPS=groups;
 window.PAPERS=JSON.parse(JSON.stringify(PSY_BANK.base));const p3=PsychTools.paper3(PSY_BANK,selection);if(p3)PAPERS.push(JSON.parse(JSON.stringify(p3)));
})();
