"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[3598,8760,4673,4565,2111],{8760:function(t,e,n){n.r(e),n.d(e,{updateSiteModelChecklist:function(){return i}});var i=function(t){return{type:"UPDATE_SITE_MODEL_CHECKLIST",payload:t}}},4673:function(t,e,n){n.r(e);var i=n(8026),c=n(8760),r=n(184);e.default=function(t){var e=t.checklistuuid,n=t.parentid,u=t.displayOrder;return(0,r.jsx)("button",{onClick:function(){return function(t,e,n){var r,u,a=null!==(r=i.default.getState().siteModelChecklist)&&void 0!==r&&r.currentChecklistTargets?null===(u=i.default.getState().siteModelChecklist)||void 0===u?void 0:u.currentChecklistTargets:[];a.push({checklistuuid:t,displayOrder:n,parentid:e,isDirty:!0}),i.default.dispatch((0,c.updateSiteModelChecklist)({currentChecklistTargets:a}))}(e,n,u)},children:" Add Child "})}},3598:function(t,e,n){n.r(e);var i=n(885),c=n(2791),r=(n(2111),n(4565)),u=n(4673),a=n(8026),o=n(184);e.default=function t(e){var n,s,l=e.item,d=e.idx,f=e.indent,h=void 0===f?0:f;l.displayorder=l.hasOwnProperty("displayorder")&&isNaN(l.displayorder)?l.displayorder:d+1;var k=(0,c.useState)(l),p=(0,i.Z)(k,2),C=p[0],g=p[1],b=C.hasOwnProperty("isDirty")&&C.isDirty?"yellow":"none",v=null!==C&&void 0!==C&&C.isDirty?(0,o.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:function(){g(Object.assign({},C,{isDirty:!1})),(0,r.saveChecklistTarget)(C)},children:"Save"}):null,y=(null!==(n=a.default.getState().siteModelChecklist)&&void 0!==n&&n.currentChecklistTargets?null===(s=a.default.getState().siteModelChecklist)||void 0===s?void 0:s.currentChecklistTargets:[]).filter((function(t){return t.parentid===l.id}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("tr",{style:{backgroundColor:b},children:[(0,o.jsx)("td",{style:{textAlign:["left","center","right"][h]},children:d+1}),(0,o.jsx)("td",{children:(0,o.jsx)("input",{type:"text",value:C.testpackage,onChange:function(t){return g(Object.assign({},C,{testpackage:t.currentTarget.value,isDirty:!0}))},style:{paddingLeft:10*h+"%",width:"100%"}})}),(0,o.jsx)("td",{children:v}),(0,o.jsx)("td",{children:(0,o.jsx)(u.default,{checklistuuid:l.checklistuuid,parentid:l.id,displayOrder:y.length+1})})]}),y.map((function(e,n){return(0,o.jsx)(t,{item:e,idx:n,indent:h+1},e.parentid+e.diplayOrder)}))]})}},4565:function(t,e,n){n.r(e),n.d(e,{checkWindow:function(){return o},makeCheckListInactive:function(){return h},obtainChecklistDetails:function(){return g},obtainChecklists:function(){return k},obtainGoals:function(){return T},obtainResults:function(){return R},obtainTargets:function(){return y},saveChecklistGoal:function(){return E},saveChecklistTarget:function(){return d},updateCheckList:function(){return s},updateResult:function(){return j}});var i=n(2111),c=n(8026),r=n(8760),u=n(4452),a=0,o=function(){var t=setInterval((function(){var e;(null!==(e=window.SITEMODEL)&&void 0!==e&&e.exists()||3===a)&&(c.default.dispatch((0,r.updateSiteModelChecklist)({windowSetup:!0})),clearInterval(t)),a++}),3e3)},s=function(t){(0,i.doUpdateChecklist)(t,p,l)},l=function(t){console.dir(t)},d=function(t){(0,i.doSaveChecklistTarget)(t,S,f)},f=function(t){console.dir(t)},h=function(t){console.dir("Making inactive")},k=function(){(0,i.doObtainChecklists)(p,C)},p=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({allChecklists:(0,u.lowerCaseKeys)(t.data.data)}))},C=function(t){console.dir(t)},g=function(t){(0,i.doObtainChecklistDetails)(t,b,v)},b=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklist:(0,u.lowerCaseKeys)(t.data.data)}))},v=function(t){console.dir(t)},y=function(t){(0,i.doObtainTargets)(t,S,O)},S=function(t){console.dir("Processing target return"),c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklistTargets:(0,u.lowerCaseKeys)(t.data.data)}))},O=function(t){console.dir(t)},T=function(t){(0,i.doObtainGoals)(t,w,x)},w=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklistGoals:(0,u.lowerCaseKeys)(t.data.data)}))},x=function(t){console.dir(t)},R=function(t){(0,i.doObtainResults)(t,L,U)},L=function(t){c.default.dispatch((0,r.updateSiteModelChecklist)({currentChecklistResults:M((0,u.lowerCaseKeys)(t.data.data))}))},M=function(t){var e={};return t.forEach((function(t){e[t.testpackage]=e.hasOwnProperty(t.testpackage)?e[t.testpackage]:{},e[t.testpackage][t.goaluuid]=t.result})),e},U=function(t){console.dir(t)},j=function(t,e,n,c){(0,i.doUpdateResult)(t,e,n,c,(function(e){return D(t,e)}),m)},D=function(t,e){R(t)},m=function(t){console.dir(t)},E=function(t){(0,i.doSaveChecklistGoal)(t,w,G)},G=function(t){console.dir(t)}},2111:function(t,e,n){n.r(e),n.d(e,{doObtainChecklistDetails:function(){return a},doObtainChecklists:function(){return u},doObtainGoals:function(){return s},doObtainResults:function(){return l},doObtainTargets:function(){return o},doSaveChecklistGoal:function(){return k},doSaveChecklistTarget:function(){return f},doUpdateChecklist:function(){return h},doUpdateResult:function(){return d}});var i=n(4569),c=n.n(i),r=n(4452),u=function(t,e){c().get((0,r.apiURL)()+"/cbChecklist/").then((function(e){return t(e)})).catch((function(t){return e(t)}))},a=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},o=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/targets/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},s=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/goals/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},l=function(t,e,n){c().get((0,r.apiURL)()+"/cbChecklist/results/"+t).then((function(t){return e(t)})).catch((function(t){return n(t)}))},d=function(t,e,n,i,u,a){c().post((0,r.apiURL)()+"/cbChecklist/results/"+t,{goal:n,target:e,result:i}).then((function(t){return u(t)})).catch((function(t){return a(t)}))},f=function(t,e,n){c().post((0,r.apiURL)()+"/cbChecklist/targets",{item:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))},h=function(t,e,n){c().post((0,r.apiURL)()+"/cbChecklist/",{item:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))},k=function(t,e,n){c().post((0,r.apiURL)()+"/cbChecklist/goals",{item:t}).then((function(t){return e(t)})).catch((function(t){return n(t)}))}}}]);
//# sourceMappingURL=3598.de93db42.chunk.js.map