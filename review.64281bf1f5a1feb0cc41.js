/*! For license information please see review.64281bf1f5a1feb0cc41.js.LICENSE.txt */
(()=>{"use strict";var t={287:(t,e)=>{Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator;var o={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r=Object.assign,a={};function n(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||o}function c(){}function p(t,e,r){this.props=t,this.context=e,this.refs=a,this.updater=r||o}n.prototype.isReactComponent={},n.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},n.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},c.prototype=n.prototype;var s=p.prototype=new c;s.constructor=p,r(s,n.prototype),s.isPureReactComponent=!0;Array.isArray,Object.prototype.hasOwnProperty},540:(t,e,o)=>{o(287)}},e={};!function o(r){var a=e[r];if(void 0!==a)return a.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}(540),Array.from({length:20}).map(((t,e)=>({title:"너무 좋아요!",description:"디자인이 좋아서 구매했어요. 색감도 예쁘고 마음에 들어요!",author:"유저명",comments:2})))})();