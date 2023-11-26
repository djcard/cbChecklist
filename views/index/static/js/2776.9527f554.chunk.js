"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[2776,8760,4565,2111],{8760:function(t,n,e){e.r(n),e.d(n,{updateSiteModelChecklist:function(){return i}});var i=function(t){return{type:"UPDATE_SITE_MODEL_CHECKLIST",payload:t}}},2776:function(t,n,e){e.r(n);var i=e(885),c=e(2791),o=e(4565),u=e(184);n.default=function(t){var n=t.item,e=t.idx;n.displayorder=isNaN(n.displayorder)?e+1:n.displayorder;var r=(0,c.useState)(n),a=(0,i.Z)(r,2),s=a[0],l=a[1],d=s.hasOwnProperty("isDirty")&&s.isDirty?"yellow":"none",f=null!==s&&void 0!==s&&s.isDirty?(0,u.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:function(){l(Object.assign({},s,{isDirty:!1})),(0,o.saveChecklistGoal)(s)},children:"Save"}):null;return(0,u.jsxs)("tr",{style:{backgroundColor:d},children:[(0,u.jsx)("td",{children:e+1}),(0,u.jsx)("td",{children:(0,u.jsx)("input",{type:"text",value:s.label,onChange:function(t){return l(Object.assign({},s,{label:t.currentTarget.value,isDirty:!0}))}})}),(0,u.jsxs)("td",{children:[(0,u.jsx)("input",{type:"checkbox",checked:s.active,onChange:function(t){return l(Object.assign({},s,{active:t.currentTarget.checked,isDirty:!0}))}})," "]}),(0,u.jsxs)("td",{children:[f," "]})]})}},4565:function(t,n,e){e.r(n),e.d(n,{checkWindow:function(){return a},makeCheckListInactive:function(){return h},obtainChecklistDetails:function(){return b},obtainChecklists:function(){return k},obtainGoals:function(){return R},obtainResults:function(){return U},obtainTargets:function(){return y},saveChecklistGoal:function(){return m},saveChecklistTarget:function(){return d},updateCheckList:function(){return s},updateResult:function(){return j}});var i=e(2111),c=e(8026),o=e(8760),u=e(4452),r=0,a=function(){var t=setInterval((function(){var n;(null!==(n=window.SITEMODEL)&&void 0!==n&&n.exists()||3===r)&&(c.default.dispatch((0,o.updateSiteModelChecklist)({windowSetup:!0})),clearInterval(t)),r++}),3e3)},s=function(t){(0,i.doUpdateChecklist)(t,C,l)},l=function(t){console.dir(t)},d=function(t){(0,i.doSaveChecklistTarget)(t,O,f)},f=function(t){console.dir(t)},h=function(t){console.dir("Making inactive")},k=function(){(0,i.doObtainChecklists)(C,p)},C=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({allChecklists:(0,u.lowerCaseKeys)(t.data.data)}))},p=function(t){console.dir(t)},b=function(t){(0,i.doObtainChecklistDetails)(t,g,v)},g=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklist:(0,u.lowerCaseKeys)(t.data.data)}))},v=function(t){console.dir(t)},y=function(t){(0,i.doObtainTargets)(t,O,S)},O=function(t){console.dir("Processing target return"),c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklistTargets:(0,u.lowerCaseKeys)(t.data.data)}))},S=function(t){console.dir(t)},R=function(t){(0,i.doObtainGoals)(t,w,L)},w=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklistGoals:(0,u.lowerCaseKeys)(t.data.data)}))},L=function(t){console.dir(t)},U=function(t){(0,i.doObtainResults)(t,T,D)},T=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklistResults:x((0,u.lowerCaseKeys)(t.data.data))}))},x=function(t){var n={};return t.forEach((function(t){n[t.testpackage]=n.hasOwnProperty(t.testpackage)?n[t.testpackage]:{},n[t.testpackage][t.goaluuid]=t.result})),n},D=function(t){console.dir(t)},j=function(t,n,e,c){(0,i.doUpdateResult)(t,n,e,c,(function(n){return M(t,n)}),G)},M=function(t,n){U(t)},G=function(t){console.dir(t)},m=function(t){(0,i.doSaveChecklistGoal)(t,w,E)},E=function(t){console.dir(t)}},2111:function(t,n,e){e.r(n),e.d(n,{doObtainChecklistDetails:function(){return r},doObtainChecklists:function(){return u},doObtainGoals:function(){return s},doObtainResults:function(){return l},doObtainTargets:function(){return a},doSaveChecklistGoal:function(){return k},doSaveChecklistTarget:function(){return f},doUpdateChecklist:function(){return h},doUpdateResult:function(){return d}});var i=e(4569),c=e.n(i),o=e(4452),u=function(t,n){c().get((0,o.apiURL)()+"/cbChecklist/").then((function(n){return t(n)})).catch((function(t){return n(t)}))},r=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},a=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/targets/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},s=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/goals/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},l=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/results/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},d=function(t,n,e,i,u,r){c().post((0,o.apiURL)()+"/cbChecklist/results/"+t,{goal:e,target:n,result:i}).then((function(t){return u(t)})).catch((function(t){return r(t)}))},f=function(t,n,e){c().post((0,o.apiURL)()+"/cbChecklist/targets",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},h=function(t,n,e){c().post((0,o.apiURL)()+"/cbChecklist/",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},k=function(t,n,e){c().post((0,o.apiURL)()+"/cbChecklist/goals",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))}}}]);
//# sourceMappingURL=2776.9527f554.chunk.js.map