"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[2725,8760,2376,4565,2111],{8760:function(t,n,e){e.r(n),e.d(n,{updateSiteModelChecklist:function(){return i}});var i=function(t){return{type:"UPDATE_SITE_MODEL_CHECKLIST",payload:t}}},2376:function(t,n,e){e.r(n);var i=e(4565),c=e(184);n.default=function(t){var n=t.checklistuuid,e=t.goal,u=t.target,o=t.result;return(0,c.jsx)("input",{type:"checkbox",checked:o,onChange:function(t){return function(t,n,e,c){(0,i.updateResult)(t,n,e,c?1:0)}(n,u,e,t.currentTarget.checked)}})}},2725:function(t,n,e){e.r(n);var i=e(885),c=e(2376),u=e(8026),o=e(2791),r=e(184);n.default=function t(n){var e,a=n.target,l=n.goals,s=n.results,d=n.depth,f=(0,o.useState)(!1),h=(0,i.Z)(f,2),k=h[0],C=h[1],p=(null!==(e=u.default.getState().siteModelChecklist)&&void 0!==e&&e.currentChecklistTargets?u.default.getState().siteModelChecklist.currentChecklistTargets:[]).filter((function(t){return t.parentid===a.id})),g=10*d,v=!!u.default.getState().siteModelChecklist.showAllChildren&&u.default.getState().siteModelChecklist.showAllChildren;return(0,o.useEffect)((function(){C(v)}),[v]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{onClick:function(){return C(!k)},children:p.length?k?"-":"+":null}),(0,r.jsx)("td",{style:{paddingLeft:g+"%"},children:null===a||void 0===a?void 0:a.testpackage}),l.filter((function(t){return t.label.length})).map((function(t){var n=s[null===a||void 0===a?void 0:a.id]&&s[null===a||void 0===a?void 0:a.id][null===t||void 0===t?void 0:t.id]?s[null===a||void 0===a?void 0:a.id][null===t||void 0===t?void 0:t.id]:0;return(0,r.jsx)("td",{children:(0,r.jsx)(c.default,{checklistuuid:a.checklistuuid,goal:t.id,target:a.id,result:n},t.id+a.testpackage)})}))]}),p.length&&k?p.map((function(n){return(0,r.jsx)(t,{target:n,goals:l,results:s,depth:d+1},n.checklistuuid+n.testpackage)})):null]})}},4565:function(t,n,e){e.r(n),e.d(n,{checkWindow:function(){return a},makeCheckListInactive:function(){return h},obtainChecklistDetails:function(){return g},obtainChecklists:function(){return k},obtainGoals:function(){return L},obtainResults:function(){return U},obtainTargets:function(){return S},saveChecklistGoal:function(){return G},saveChecklistTarget:function(){return d},updateCheckList:function(){return l},updateResult:function(){return j}});var i=e(2111),c=e(8026),u=e(8760),o=e(4452),r=0,a=function(){var t=setInterval((function(){var n;(null!==(n=window.SITEMODEL)&&void 0!==n&&n.exists()||3===r)&&(c.default.dispatch((0,u.updateSiteModelChecklist)({windowSetup:!0})),clearInterval(t)),r++}),3e3)},l=function(t){(0,i.doUpdateChecklist)(t,C,s)},s=function(t){console.dir(t)},d=function(t){(0,i.doSaveChecklistTarget)(t,R,f)},f=function(t){console.dir(t)},h=function(t){console.dir("Making inactive")},k=function(){(0,i.doObtainChecklists)(C,p)},C=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({allChecklists:(0,o.lowerCaseKeys)(t.data.data)}))},p=function(t){console.dir(t)},g=function(t){(0,i.doObtainChecklistDetails)(t,v,b)},v=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklist:(0,o.lowerCaseKeys)(t.data.data)}))},b=function(t){console.dir(t)},S=function(t){(0,i.doObtainTargets)(t,R,w)},R=function(t){console.dir("Processing target return"),c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistTargets:(0,o.lowerCaseKeys)(t.data.data)}))},w=function(t){console.dir(t)},L=function(t){(0,i.doObtainGoals)(t,M,T)},M=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistGoals:(0,o.lowerCaseKeys)(t.data.data)}))},T=function(t){console.dir(t)},U=function(t){(0,i.doObtainResults)(t,O,y)},O=function(t){c.default.dispatch((0,u.updateSiteModelChecklist)({currentChecklistResults:x((0,o.lowerCaseKeys)(t.data.data))}))},x=function(t){var n={};return t.forEach((function(t){n[t.testpackage]=n.hasOwnProperty(t.testpackage)?n[t.testpackage]:{},n[t.testpackage][t.goaluuid]=t.result})),n},y=function(t){console.dir(t)},j=function(t,n,e,c){(0,i.doUpdateResult)(t,n,e,c,(function(n){return E(t,n)}),m)},E=function(t,n){U(t)},m=function(t){console.dir(t)},G=function(t){(0,i.doSaveChecklistGoal)(t,M,D)},D=function(t){console.dir(t)}},2111:function(t,n,e){e.r(n),e.d(n,{doObtainChecklistDetails:function(){return r},doObtainChecklists:function(){return o},doObtainGoals:function(){return l},doObtainResults:function(){return s},doObtainTargets:function(){return a},doSaveChecklistGoal:function(){return k},doSaveChecklistTarget:function(){return f},doUpdateChecklist:function(){return h},doUpdateResult:function(){return d}});var i=e(4569),c=e.n(i),u=e(4452),o=function(t,n){c().get((0,u.apiURL)()+"/cbChecklist/").then((function(n){return t(n)})).catch((function(t){return n(t)}))},r=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},a=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/targets/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},l=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/goals/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},s=function(t,n,e){c().get((0,u.apiURL)()+"/cbChecklist/results/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},d=function(t,n,e,i,o,r){c().post((0,u.apiURL)()+"/cbChecklist/results/"+t,{goal:e,target:n,result:i}).then((function(t){return o(t)})).catch((function(t){return r(t)}))},f=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/targets",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},h=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},k=function(t,n,e){c().post((0,u.apiURL)()+"/cbChecklist/goals",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))}}}]);
//# sourceMappingURL=2725.14276c16.chunk.js.map