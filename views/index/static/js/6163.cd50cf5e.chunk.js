"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[6163,8760,4673,3598,4565,2111],{8760:function(t,e,n){n.r(e),n.d(e,{updateSiteModelChecklist:function(){return i}});var i=function(t){return{type:"UPDATE_SITE_MODEL_CHECKLIST",payload:t}}},4673:function(t,e,n){n.r(e);var i=n(8026),c=n(8760),r=n(184);e.default=function(t){var e=t.checklistuuid,n=t.parentid,u=t.displayOrder;return(0,r.jsx)("button",{onClick:function(){return function(t,e,n){var r,u,a=null!==(r=i.default.getState().siteModelChecklist)&&void 0!==r&&r.currentChecklistTargets?null===(u=i.default.getState().siteModelChecklist)||void 0===u?void 0:u.currentChecklistTargets:[];a.push({checklistuuid:t,displayOrder:n,parentid:e,isDirty:!0}),i.default.dispatch((0,c.updateSiteModelChecklist)({currentChecklistTargets:a}))}(e,n,u)},children:" Add Child "})}},3598:function(t,e,n){n.r(e);var i=n(885),c=n(2791),r=n(4565),u=n(4673),a=n(8026),o=n(184);e.default=function t(e){var n,s,l=e.item,d=e.idx,h=e.indent,f=void 0===h?0:h;l.displayorder=l.hasOwnProperty("displayorder")&&isNaN(l.displayorder)?l.displayorder:d+1;var k=(0,c.useState)(l),C=(0,i.Z)(k,2),p=C[0],g=C[1],v=p.hasOwnProperty("isDirty")&&p.isDirty?"yellow":"none",b=null!==p&&void 0!==p&&p.isDirty?(0,o.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:function(){g(Object.assign({},p,{isDirty:!1})),(0,r.saveChecklistTarget)(p)},children:"Save"}):null,y=(null!==(n=a.default.getState().siteModelChecklist)&&void 0!==n&&n.currentChecklistTargets?null===(s=a.default.getState().siteModelChecklist)||void 0===s?void 0:s.currentChecklistTargets:[]).filter((function(t){return t.parentid===l.id}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("tr",{style:{backgroundColor:v},children:[(0,o.jsx)("td",{style:{textAlign:["left","center","right"][f]},children:d+1}),(0,o.jsx)("td",{children:(0,o.jsx)("input",{type:"text",value:p.testpackage,onChange:function(t){return g(Object.assign({},p,{testpackage:t.currentTarget.value,isDirty:!0}))},style:{paddingLeft:10*f+"%",width:"100%"}})}),(0,o.jsx)("td",{children:b}),(0,o.jsx)("td",{children:(0,o.jsx)(u.default,{checklistuuid:l.checklistuuid,parentid:l.id,displayOrder:y.length+1})})]}),y.map((function(e,n){return(0,o.jsx)(t,{item:e,idx:n,indent:f+1},e.parentid+e.diplayOrder)}))]})}},6163:function(t,e,n){n.r(e);var i=n(8687),c=n(8026),r=n(3598),u=n(184);e.default=(0,i.$j)((function(t){return{siteModelChecklist:t.siteModelChecklist,dataStore:t.dataStore,tabStore:t.tabStore}}),{})((function(){var t,e,n,i=null!==(t=c.default.getState().siteModelChecklist)&&void 0!==t&&t.currentChecklistTargets?null===(e=c.default.getState().siteModelChecklist)||void 0===e?void 0:e.currentChecklistTargets:[],a=null===(n=c.default.getState().siteModelChecklist)||void 0===n?void 0:n.currentChecklist;return i.push({checklistuuid:null===a||void 0===a?void 0:a.id,parentid:0,active:1}),null!==a&&void 0!==a&&a.id?(0,u.jsx)("div",{children:(0,u.jsxs)("table",{className:"table table-bordered",children:[(0,u.jsxs)("thead",{children:[(0,u.jsx)("th",{}),(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{})]}),(0,u.jsx)("tbody",{children:i.filter((function(t){return 0===t.parentid})).map((function(t,e){return(0,u.jsx)(r.default,{item:t,idx:e},t.checklistuuid+t.id)}))})]})}):(0,u.jsx)("div",{children:" Please Choose a checklist to view."})}))},4565:function(t,e,n){n.r(e),n.d(e,{checkWindow:function(){return o},makeCheckListInactive:function(){return f},obtainChecklistDetails:function(){return g},obtainChecklists:function(){return k},obtainGoals:function(){return j},obtainResults:function(){return T},obtainTargets:function(){return y},saveChecklistGoal:function(){return E},saveChecklistTarget:function(){return d},updateCheckList:function(){return s},updateResult:function(){return L}});var i=n(2111),c=n(8026),r=n(8760),u=n(4452),a=0,o=function(){var t=setInterval((function(){var e;(null!==(e=window.SITEMODEL)&&void 0!==e&&e.exists()||3===a)&&(c.default.dispatch((0,r.updateSiteModelChecklist)({windowSetup:!0})),clearInterval(t)),a++}),3e3)},s=function(t){(0,i.doUpdateChecklist)(t,C,l)},l=function(t){console.dir(t)},d=function(t){console.dir(t),delete t.numOptions,(0,i.doSaveChecklistTarget)(t,S,h)},h=function(t){console.dir(t)},f=function(t){console.dir("Making inactive")},k=function(){(0,i.doObtainChecklists)(C,p)},C=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({allChecklists:(0,u.lowerCaseKeys)(t.data.data)}))},p=function(t){console.dir(t)},g=function(t){(0,i.doObtainChecklistDetails)(t,v,b)},v=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklist:(0,u.lowerCaseKeys)(t.data.data)}))},b=function(t){console.dir(t)},y=function(t){(0,i.doObtainTargets)(t,S,x)},S=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklistTargets:(0,u.lowerCaseKeys)(t.data.data)}))},x=function(t){console.dir(t)},j=function(t){(0,i.doObtainGoals)(t,O,M)},O=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklistGoals:(0,u.lowerCaseKeys)(t.data.data)}))},M=function(t){console.dir(t)},T=function(t){(0,i.doObtainResults)(t,w,m)},w=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklistResults:R((0,u.lowerCaseKeys)(t.data.data))}))},R=function(t){var e={};return t.forEach((function(t){e[t.targetid]=e.hasOwnProperty(t.targetid)?e[t.targetid]:{},e[t.targetid][t.goalid]=t.result})),e},m=function(t){console.dir(t)},L=function(t,e,n,c){(0,i.doUpdateResult)(t,e,n,c,(function(e){return U(t,e)}),D)},U=function(t,e){T(t)},D=function(t){console.dir(t)},E=function(t){(0,i.doSaveChecklistGoal)(t,O,G)},G=function(t){console.dir(t)}},2111:function(t,e,n){n.r(e),n.d(e,{doObtainChecklistDetails:function(){return a},doObtainChecklists:function(){return u},doObtainGoals:function(){return s},doObtainResults:function(){return l},doObtainTargets:function(){return o},doSaveChecklistGoal:function(){return k},doSaveChecklistTarget:function(){return h},doUpdateChecklist:function(){return f},doUpdateResult:function(){return d}});var i=n(4569),c=n.n(i),r=n(4452),u=function(t,e){c().get((0,r.apiURL)()+"/cbChecklist/").then((function(e){return t(e)})).catch((function(t){return e(t)}))},a=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},o=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/targets/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},s=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/goals/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},l=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/results/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},d=function(t,e,n,i,u,a){c().post((0,r.apiURL)()+"/cbChecklist/results/"+t,{goal:n,target:e,result:i}).then((function(t){return u(t)})).catch((function(t){return a(t)}))},h=function(t,e,n){c().post((0,r.apiURL)()+"/cbChecklist/targets",{item:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))},f=function(t,e,n){c().post((0,r.apiURL)()+"/cbChecklist/",{item:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))},k=function(t,e,n){c().post((0,r.apiURL)()+"/cbChecklist/goals",{item:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}}}]);
//# sourceMappingURL=6163.cd50cf5e.chunk.js.map