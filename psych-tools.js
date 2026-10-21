/* Pure statistical helpers shared by research activities and tests. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.PsychTools=api;})(typeof window!=='undefined'?window:globalThis,()=>{
 'use strict';
 const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
 function describe(a){if(!a.length||a.some(x=>!Number.isFinite(x)))return null;const s=[...a].sort((x,y)=>x-y),n=a.length,m=mean(a),counts=new Map();a.forEach(v=>counts.set(v,(counts.get(v)||0)+1));const max=Math.max(...counts.values());return{n,mean:m,median:n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2,mode:max===1?[]:[...counts].filter(([,c])=>c===max).map(([v])=>v).sort((x,y)=>x-y),range:s.at(-1)-s[0],sampleSD:n>1?Math.sqrt(a.reduce((z,x)=>z+(x-m)**2,0)/(n-1)):null};}
 function binomialCDF(n,k){if(k<0)return 0;if(k>=n)return 1;let term=2**(-n),sum=term;for(let i=1;i<=k;i++){term*=((n-i+1)/i);sum+=term;}return sum;}
 function sign(before,after,tail='two'){
  if(!before.length||before.length>200||before.length!==after.length||before.some(x=>!Number.isFinite(x))||after.some(x=>!Number.isFinite(x)))return null;
  let plus=0,minus=0,ties=0;before.forEach((v,i)=>{const d=after[i]-v;if(d>0)plus++;else if(d<0)minus++;else ties++;});const n=plus+minus,S=Math.min(plus,minus);if(!n)return{n,S:0,plus,minus,ties,p:1,tail};
  const p=tail==='higher'?binomialCDF(n,minus):tail==='lower'?binomialCDF(n,plus):Math.min(1,2*binomialCDF(n,S));return{n,S,plus,minus,ties,p,tail};
 }
 function choose(goal,related,level){if(goal==='association')return level==='interval'?'Pearson’s r (check linearity and assumptions)':'Spearman’s rho (ranked monotonic association)';if(level==='nominal')return related?'Sign test (paired direction data)':'Chi-squared (independent categorical frequencies; check expected counts)';if(level==='ordinal')return related?'Wilcoxon signed-rank test (check assumptions about paired differences)':'Mann–Whitney U test';return related?'Related t-test (check the distribution of paired differences)':'Unrelated t-test (check the relevant assumptions)';}
 function paper3(bank,selection){const groups={1:['relationships','gender','cognition'],2:['schizophrenia','eating','stress'],3:['aggression','forensic','addiction']};if(![1,2,3].every(n=>groups[n].includes(selection[n])&&bank.options[selection[n]]))return null;const chosen=[selection[1],selection[2],selection[3]];return{id:'aqa-psych-set1-p3-'+chosen.join('-'),title:'Set 1 · Issues and options in Psychology',subject:'Psychology',paper:3,tier:'A Level',minutes:120,marks:96,coverage:['Issues and debates',...chosen.map(k=>bank.options[k].title)],selection,questions:[bank.issues,...chosen.map(k=>bank.options[k])]};}
 return{mean,describe,sign,choose,paper3};
});
