"use strict";(self.webpackChunkcbChecklist=self.webpackChunkcbChecklist||[]).push([[2471,7463],{7463:function(t,n,a){a.r(n),a.d(n,{addControlSet:function(){return s},addTabGroup:function(){return o},addTabPanelGroup:function(){return p},addTabToGroup:function(){return c},addToControlBlock:function(){return e},removeFromControlBlock:function(){return r},removeTabFromGroup:function(){return i},removeTabGroup:function(){return u},toggleTab:function(){return l}});var e=function(t){return{type:"ADD_TO_CONTROL_BLOCK",payload:t}},r=function(t){return{type:"REMOVE_FROM_CONTROL_BLOCK",payload:t}},o=function(t){return{type:"ADD_TAB_GROUP",payload:t}},u=function(t){return{type:"REMOVE_TAB_GROUP",payload:t}},c=function(t){return{type:"ADD_TAB_TO_GROUP",payload:t}},i=function(t,n){return{type:"REMOVE_TAB_FROM_GROUP",payload:{groupName:t,keyName:n}}},l=function(t,n){return{type:"TOGGLE_TAB",payload:{groupName:t,key:n}}},p=function(t){return{type:"ADD_TAB_PANEL_GROUP",payload:t}},s=function(t){return{type:"ADD_CONTROLS",payload:t}}},2471:function(t,n,a){a.r(n);a(2791);var e=a(8687),r=a(7463),o=a(8026),u=a(184);n.default=(0,e.$j)((function(t){return{tabGroups:t.tabGroups}}),{})((function(t){var n=o.default.getState(),a=null!==n&&void 0!==n&&n.tabGroups.hasOwnProperty(t.groupName)?n.tabGroups[t.groupName]:{},e=t.isActiveTab?a.groupTabActiveClassName:a.groupTabClassName,c=t.tabClass?t.tabClass:"",i=t.isActiveTab?"active":"";return(0,u.jsx)("li",{className:"nav-item kimTab "+e+" "+c,style:Object.assign({},a.groupTabStyle,t.tabStyle),onClick:function(){o.default.dispatch((0,r.toggleTab)(t.groupName,t.tabKey))},children:(0,u.jsx)("a",{className:"nav-link kimTabLabel "+i,children:t.label})})}))}}]);
//# sourceMappingURL=2471.8993a759.chunk.js.map