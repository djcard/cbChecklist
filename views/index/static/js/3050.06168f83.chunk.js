"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[3050,8760,559,8609,1840,6063,4565,2111],{8760:function(t,n,e){e.r(n),e.d(n,{updateSiteModelChecklist:function(){return i}});var i=function(t){return{type:"UPDATE_SITE_MODEL_CHECKLIST",payload:t}}},3050:function(t,n,e){e.r(n);var i=e(8687),c=e(8026),u=e(559),r=e(1840),a=e(184);n.default=(0,i.$j)((function(t){return{siteModelChecklist:t.siteModelChecklist}}),{})((function(){var t,n=null!==(t=c.default.getState().siteModelChecklist)&&void 0!==t&&t.allChecklists?c.default.getState().siteModelChecklist.allChecklists:[];return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)("h3",{children:"Choose"})}),(0,a.jsx)("div",{className:"col-6",style:{textAlign:"right"},children:(0,a.jsx)(r.default,{})})]}),(0,a.jsxs)("table",{className:"table table-striped table-bordered",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{}),(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{}),(0,a.jsx)("th",{children:" "})]})}),(0,a.jsx)("tbody",{children:n.map((function(t,n){return(0,a.jsx)(u.default,{item:t,idx:n})}))})]})]})}))},559:function(t,n,e){e.r(n);var i=e(6063),c=e(8609),u=e(184);n.default=function(t){var n=t.item,e=t.idx;return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e+1}),(0,u.jsx)("td",{children:n.name}),(0,u.jsx)("td",{children:n.description}),(0,u.jsx)("td",{children:(0,u.jsx)(i.default,{item:n})}),(0,u.jsxs)("td",{children:[(0,u.jsx)(c.default,{id:n.id})," "]})]})}},8609:function(t,n,e){e.r(n);var i=e(4565),c=e(184);n.default=function(t){var n=t.id;return(0,c.jsx)("button",{onClick:function(){return(0,i.updateCheckList)({id:n,active:0})},className:"btn btn-danger",children:"Inactive"})}},1840:function(t,n,e){e.r(n);var i=e(8026),c=e(8760),u=e(184);n.default=function(){return(0,u.jsx)("button",{onClick:function(){return function(){var t,n=null!==(t=i.default.getState().siteModelChecklist)&&void 0!==t&&t.allChecklists?i.default.getState().siteModelChecklist.allChecklists:[];n.push({active:1,name:"",description:""}),i.default.dispatch((0,c.updateSiteModelChecklist)({allChecklists:n}))}()},children:"New Checklist"})}},6063:function(t,n,e){e.r(n);var i=e(8026),c=e(8760),u=e(184);n.default=function(t){var n=t.item;return(0,u.jsx)("button",{onClick:function(){return i.default.dispatch((0,c.updateSiteModelChecklist)({currentChecklist:Object.assign({},n)}))},className:"btn btn-info",children:"Open"})}},4565:function(t,n,e){e.r(n),e.d(n,{checkWindow:function(){return o},makeCheckListInactive:function(){return h},obtainChecklistDetails:function(){return b},obtainChecklists:function(){return k},obtainGoals:function(){return m},obtainResults:function(){return w},obtainTargets:function(){return x},saveChecklistGoal:function(){return E},saveChecklistTarget:function(){return d},updateCheckList:function(){return s},updateResult:function(){return T}});var i=e(2111),c=e(8026),u=e(8760),r=e(4452),a=0,o=function(){var t=setInterval((function(){var n;(null!==(n=window.SITEMODEL)&&void 0!==n&&n.exists()||3===a)&&(c.default.dispatch((0,u.updateSiteModelChecklist)({windowSetup:!0})),clearInterval(t)),a++}),3e3)},s=function(t){(0,i.doUpdateChecklist)(t,C,l)},l=function(t){console.dir(t)},d=function(t){(0,i.doSaveChecklistTarget)(t,j,f)},f=function(t){console.dir(t)},h=function(t){console.dir("Making inactive")},k=function(){(0,i.doObtainChecklists)(C,p)},C=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({allChecklists:(0,r.lowerCaseKeys)(t.data.data)}))},p=function(t){console.dir(t)},b=function(t){(0,i.doObtainChecklistDetails)(t,v,g)},v=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklist:(0,r.lowerCaseKeys)(t.data.data)}))},g=function(t){console.dir(t)},x=function(t){(0,i.doObtainTargets)(t,j,S)},j=function(t){console.dir("Processing target return"),c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistTargets:(0,r.lowerCaseKeys)(t.data.data)}))},S=function(t){console.dir(t)},m=function(t){(0,i.doObtainGoals)(t,M,R)},M=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistGoals:(0,r.lowerCaseKeys)(t.data.data)}))},R=function(t){console.dir(t)},w=function(t){(0,i.doObtainResults)(t,L,U)},L=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistResults:O((0,r.lowerCaseKeys)(t.data.data))}))},O=function(t){var n={};return t.forEach((function(t){n[t.testpackage]=n.hasOwnProperty(t.testpackage)?n[t.testpackage]:{},n[t.testpackage][t.goaluuid]=t.result})),n},U=function(t){console.dir(t)},T=function(t,n,e,c){(0,i.doUpdateResult)(t,n,e,c,(function(n){return y(t,n)}),N)},y=function(t,n){w(t)},N=function(t){console.dir(t)},E=function(t){(0,i.doSaveChecklistGoal)(t,M,G)},G=function(t){console.dir(t)}},2111:function(t,n,e){e.r(n),e.d(n,{doObtainChecklistDetails:function(){return a},doObtainChecklists:function(){return r},doObtainGoals:function(){return s},doObtainResults:function(){return l},doObtainTargets:function(){return o},doSaveChecklistGoal:function(){return k},doSaveChecklistTarget:function(){return f},doUpdateChecklist:function(){return h},doUpdateResult:function(){return d}});var i=e(4569),c=e.n(i),u=e(4452),r=function(t,n){c().get((0,u.apiURL)()+"/cbChecklist/").then((function(n){return t(n)})).catch((function(t){return n(t)}))},a=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},o=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/targets/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},s=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/goals/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},l=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/results/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},d=function(t,n,e,i,r,a){c().post((0,u.apiURL)()+"/cbChecklist/results/"+t,{goal:e,target:n,result:i}).then((function(t){return r(t)})).catch((function(t){return a(t)}))},f=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/targets",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},h=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},k=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/goals",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))}}}]);
//# sourceMappingURL=3050.06168f83.chunk.js.map