"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[682,8760,4565,2111],{8760:function(t,n,e){e.r(n),e.d(n,{updateSiteModelChecklist:function(){return i}});var i=function(t){return{type:"UPDATE_SITE_MODEL_CHECKLIST",payload:t}}},682:function(t,n,e){e.r(n);var i=e(8687),c=e(8026),u=e(8760),o=e(4565),r=e(184),a=function(t,n){var e,i=null!==(e=c.default.getState().siteModelChecklist)&&void 0!==e&&e.currentChecklist?c.default.getState().siteModelChecklist.currentChecklist:{};i[t]=n,c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklist:i}))};n.default=(0,i.$j)((function(t){return{siteModelChecklist:t.siteModelChecklist}}),{})((function(){var t,n=null!==(t=c.default.getState().siteModelChecklist)&&void 0!==t&&t.currentChecklist?c.default.getState().siteModelChecklist.currentChecklist:{};return(0,r.jsx)("div",{children:(0,r.jsx)("form",{children:(0,r.jsxs)("div",{children:["Name: ",(0,r.jsx)("input",{type:"text",value:n.name,onChange:function(t){return a("name",t.currentTarget.value)}}),(0,r.jsx)("br",{}),"Description: ",(0,r.jsx)("input",{type:"text",value:n.description,onChange:function(t){return a("description",t.currentTarget.value)}}),(0,r.jsx)("br",{}),"Active ",(0,r.jsx)("input",{type:"checkbox",checked:n.active,onChange:function(t){return a("active",t.currentTarget.checked)}}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",onClick:function(){return(0,o.updateCheckList)(Object.assign({},n))},children:"Save"})]})})})}))},4565:function(t,n,e){e.r(n),e.d(n,{checkWindow:function(){return a},makeCheckListInactive:function(){return h},obtainChecklistDetails:function(){return g},obtainChecklists:function(){return k},obtainGoals:function(){return L},obtainResults:function(){return T},obtainTargets:function(){return S},saveChecklistGoal:function(){return E},saveChecklistTarget:function(){return d},updateCheckList:function(){return s},updateResult:function(){return y}});var i=e(2111),c=e(8026),u=e(8760),o=e(4452),r=0,a=function(){var t=setInterval((function(){var n;(null!==(n=window.SITEMODEL)&&void 0!==n&&n.exists()||3===r)&&(c.default.dispatch((0,u.updateSiteModelChecklist)({windowSetup:!0})),clearInterval(t)),r++}),3e3)},s=function(t){(0,i.doUpdateChecklist)(t,C,l)},l=function(t){console.dir(t)},d=function(t){(0,i.doSaveChecklistTarget)(t,M,f)},f=function(t){console.dir(t)},h=function(t){console.dir("Making inactive")},k=function(){(0,i.doObtainChecklists)(C,p)},C=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({allChecklists:(0,o.lowerCaseKeys)(t.data.data)}))},p=function(t){console.dir(t)},g=function(t){(0,i.doObtainChecklistDetails)(t,b,v)},b=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklist:(0,o.lowerCaseKeys)(t.data.data)}))},v=function(t){console.dir(t)},S=function(t){(0,i.doObtainTargets)(t,M,R)},M=function(t){console.dir("Processing target return"),c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistTargets:(0,o.lowerCaseKeys)(t.data.data)}))},R=function(t){console.dir(t)},L=function(t){(0,i.doObtainGoals)(t,x,O)},x=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistGoals:(0,o.lowerCaseKeys)(t.data.data)}))},O=function(t){console.dir(t)},T=function(t){(0,i.doObtainResults)(t,U,j)},U=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistResults:w((0,o.lowerCaseKeys)(t.data.data))}))},w=function(t){var n={};return t.forEach((function(t){n[t.testpackage]=n.hasOwnProperty(t.testpackage)?n[t.testpackage]:{},n[t.testpackage][t.goaluuid]=t.result})),n},j=function(t){console.dir(t)},y=function(t,n,e,c){(0,i.doUpdateResult)(t,n,e,c,(function(n){return m(t,n)}),D)},m=function(t,n){T(t)},D=function(t){console.dir(t)},E=function(t){(0,i.doSaveChecklistGoal)(t,x,G)},G=function(t){console.dir(t)}},2111:function(t,n,e){e.r(n),e.d(n,{doObtainChecklistDetails:function(){return r},doObtainChecklists:function(){return o},doObtainGoals:function(){return s},doObtainResults:function(){return l},doObtainTargets:function(){return a},doSaveChecklistGoal:function(){return k},doSaveChecklistTarget:function(){return f},doUpdateChecklist:function(){return h},doUpdateResult:function(){return d}});var i=e(4569),c=e.n(i),u=e(4452),o=function(t,n){c().get((0,u.apiURL)()+"/cbChecklist/").then((function(n){return t(n)})).catch((function(t){return n(t)}))},r=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},a=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/targets/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},s=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/goals/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},l=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/results/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},d=function(t,n,e,i,o,r){c().post((0,u.apiURL)()+"/cbChecklist/results/"+t,{goal:e,target:n,result:i}).then((function(t){return o(t)})).catch((function(t){return r(t)}))},f=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/targets",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},h=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},k=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/goals",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))}}}]);
//# sourceMappingURL=682.7e619378.chunk.js.map