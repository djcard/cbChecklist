"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[5896,8760,2688,4565,2111],{8760:function(t,n,e){e.r(n),e.d(n,{updateSiteModelChecklist:function(){return i}});var i=function(t){return{type:"UPDATE_SITE_MODEL_CHECKLIST",payload:t}}},5896:function(t,n,e){e.r(n);var i=e(2688),c=e(4565),o=e(8026),u=e(184);n.default=function(t){var n=t.classes?t.classes:"btn btn-info";return(0,u.jsx)("button",{onClick:function(){return function(){var t,n=null===(t=o.default.getState().siteModelChecklist)||void 0===t?void 0:t.currentChecklist.id;(0,c.obtainTargets)(n),(0,c.obtainGoals)(n),(0,c.obtainResults)(n)}()},className:n,children:(0,u.jsx)(i.default,{})})}},2688:function(t,n,e){e.r(n);e(2791);var i=e(184);n.default=function(t){var n=t.left?t.left:0,e=t.top?t.top:0,c=t.size?t.size:16,o=t.color?t.color:"currentColor";return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:c,height:c,fill:o,style:{transform:"translate("+n+"px, "+e+"px)"},className:"bi bi-arrow-repeat",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),(0,i.jsx)("path",{fillRule:"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]})}},4565:function(t,n,e){e.r(n),e.d(n,{checkWindow:function(){return r},makeCheckListInactive:function(){return h},obtainChecklistDetails:function(){return b},obtainChecklists:function(){return C},obtainGoals:function(){return S},obtainResults:function(){return U},obtainTargets:function(){return w},saveChecklistGoal:function(){return z},saveChecklistTarget:function(){return f},updateCheckList:function(){return s},updateResult:function(){return y}});var i=e(2111),c=e(8026),o=e(8760),u=e(4452),a=0,r=function(){var t=setInterval((function(){var n;(null!==(n=window.SITEMODEL)&&void 0!==n&&n.exists()||3===a)&&(c.default.dispatch((0,o.updateSiteModelChecklist)({windowSetup:!0})),clearInterval(t)),a++}),3e3)},s=function(t){(0,i.doUpdateChecklist)(t,k,l)},l=function(t){console.dir(t)},f=function(t){console.dir(t),delete t.numOptions,(0,i.doSaveChecklistTarget)(t,R,d)},d=function(t){console.dir(t)},h=function(t){console.dir("Making inactive")},C=function(){(0,i.doObtainChecklists)(k,p)},k=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({allChecklists:(0,u.lowerCaseKeys)(t.data.data)}))},p=function(t){console.dir(t)},b=function(t){(0,i.doObtainChecklistDetails)(t,g,v)},g=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklist:(0,u.lowerCaseKeys)(t.data.data)}))},v=function(t){console.dir(t)},w=function(t){(0,i.doObtainTargets)(t,R,L)},R=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklistTargets:(0,u.lowerCaseKeys)(t.data.data)}))},L=function(t){console.dir(t)},S=function(t){(0,i.doObtainGoals)(t,M,O)},M=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklistGoals:(0,u.lowerCaseKeys)(t.data.data)}))},O=function(t){console.dir(t)},U=function(t){(0,i.doObtainResults)(t,T,x)},T=function(t){c.default.dispatch((0,o.updateSiteModelChecklist)({currentChecklistResults:m((0,u.lowerCaseKeys)(t.data.data))}))},m=function(t){var n={};return t.forEach((function(t){n[t.targetid]=n.hasOwnProperty(t.targetid)?n[t.targetid]:{},n[t.targetid][t.goalid]=t.result})),n},x=function(t){console.dir(t)},y=function(t,n,e,c){(0,i.doUpdateResult)(t,n,e,c,(function(n){return G(t,n)}),E)},G=function(t,n){U(t)},E=function(t){console.dir(t)},z=function(t){(0,i.doSaveChecklistGoal)(t,M,D)},D=function(t){console.dir(t)}},2111:function(t,n,e){e.r(n),e.d(n,{doObtainChecklistDetails:function(){return a},doObtainChecklists:function(){return u},doObtainGoals:function(){return s},doObtainResults:function(){return l},doObtainTargets:function(){return r},doSaveChecklistGoal:function(){return C},doSaveChecklistTarget:function(){return d},doUpdateChecklist:function(){return h},doUpdateResult:function(){return f}});var i=e(4569),c=e.n(i),o=e(4452),u=function(t,n){c().get((0,o.apiURL)()+"/cbChecklist/").then((function(n){return t(n)})).catch((function(t){return n(t)}))},a=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},r=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/targets/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},s=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/goals/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},l=function(t,n,e){c().get((0,o.apiURL)()+"/cbChecklist/results/"+t).then((function(t){return n(t)})).catch((function(t){return e(t)}))},f=function(t,n,e,i,u,a){c().post((0,o.apiURL)()+"/cbChecklist/results/"+t,{goal:e,target:n,result:i}).then((function(t){return u(t)})).catch((function(t){return a(t)}))},d=function(t,n,e){c().post((0,o.apiURL)()+"/cbChecklist/targets",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},h=function(t,n,e){c().post((0,o.apiURL)()+"/cbChecklist/",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))},C=function(t,n,e){c().post((0,o.apiURL)()+"/cbChecklist/goals",{item:t}).then((function(t){return n(t)})).catch((function(t){return e(t)}))}}}]);
//# sourceMappingURL=5896.6143caf3.chunk.js.map