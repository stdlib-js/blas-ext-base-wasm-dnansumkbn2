"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,p){
var k=require("path").resolve,x=require('@stdlib/fs-read-wasm/dist').sync,R=x(k(__dirname,"..","src","main.wasm"));p.exports=R
});var d=u(function(H,f){
var W=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),S=y();function i(e){if(!(this instanceof i))return new i(e);if(!W(e))throw new TypeError(O('2O9H0',e));return m.call(this,S,e,{env:{memory:e}}),this}A(i,m);q(i.prototype,"main",function(r,t,n){return this._instance.exports.stdlib_strided_dnansumkbn2(r,t,n)});q(i.prototype,"ndarray",function(r,t,n,o){return this._instance.exports.stdlib_strided_dnansumkbn2_ndarray(r,t,n,o)});f.exports=i
});var w=u(function(I,h){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),j=require('@stdlib/strided-base-stride2offset/dist'),z=require('@stdlib/wasm-memory/dist'),B=require('@stdlib/wasm-base-arrays2ptrs/dist'),E=require('@stdlib/wasm-base-strided2object/dist'),v=d();function a(){return this instanceof a?(v.call(this,new z({initial:0})),this):new a}g(a,v);b(a.prototype,"main",function(r,t,n){return this.ndarray(r,t,n,j(r,n))});b(a.prototype,"ndarray",function(r,t,n,o){var c,s;return c=B(this,[E(r,t,n,o)]),s=c[0],v.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});h.exports=a
});var _=u(function(J,M){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=w(),C=d(),l=new V;l.initializeSync();T(l,"Module",C.bind(null));M.exports=l
});var D=_();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
