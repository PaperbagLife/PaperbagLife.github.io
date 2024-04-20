var Qm=Object.defineProperty;var eg=(i,e,t)=>e in i?Qm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ye=(i,e,t)=>(eg(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function iu(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function un(i){if(Ve(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Dt(n)?sg(n):un(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Dt(i))return i;if(Et(i))return i}}const tg=/;(?![^(]*\))/g,ng=/:([^]+)/,ig=/\/\*.*?\*\//gs;function sg(i){const e={};return i.replace(ig,"").split(tg).forEach(t=>{if(t){const n=t.split(ng);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Tt(i){let e="";if(Dt(i))e=i;else if(Ve(i))for(let t=0;t<i.length;t++){const n=Tt(i[t]);n&&(e+=n+" ")}else if(Et(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",og=iu(rg);function Wd(i){return!!i||i===""}const gt=i=>Dt(i)?i:i==null?"":Ve(i)||Et(i)&&(i.toString===jd||!Ze(i.toString))?JSON.stringify(i,Yd,2):String(i),Yd=(i,e)=>e&&e.__v_isRef?Yd(i,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:Xd(e)?{[`Set(${e.size})`]:[...e.values()]}:Et(e)&&!Ve(e)&&!qd(e)?String(e):e,yt={},hr=[],Xn=()=>{},ag=()=>!1,lg=/^on[^a-z]/,ol=i=>lg.test(i),su=i=>i.startsWith("onUpdate:"),dn=Object.assign,ru=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},cg=Object.prototype.hasOwnProperty,st=(i,e)=>cg.call(i,e),Ve=Array.isArray,fr=i=>al(i)==="[object Map]",Xd=i=>al(i)==="[object Set]",Ze=i=>typeof i=="function",Dt=i=>typeof i=="string",ou=i=>typeof i=="symbol",Et=i=>i!==null&&typeof i=="object",Kd=i=>Et(i)&&Ze(i.then)&&Ze(i.catch),jd=Object.prototype.toString,al=i=>jd.call(i),ug=i=>al(i).slice(8,-1),qd=i=>al(i)==="[object Object]",au=i=>Dt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ra=iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ll=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},hg=/-(\w)/g,Mr=ll(i=>i.replace(hg,(e,t)=>t?t.toUpperCase():"")),fg=/\B([A-Z])/g,Br=ll(i=>i.replace(fg,"-$1").toLowerCase()),$d=ll(i=>i.charAt(0).toUpperCase()+i.slice(1)),wl=ll(i=>i?`on${$d(i)}`:""),Co=(i,e)=>!Object.is(i,e),Rl=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ka=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},dg=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Ju;const pg=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let kn;class mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kn,!e&&kn&&(this.index=(kn.scopes||(kn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=kn;try{return kn=this,e()}finally{kn=t}}}on(){kn=this}off(){kn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function gg(i,e=kn){e&&e.active&&e.effects.push(i)}function _g(){return kn}const lu=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Zd=i=>(i.w&os)>0,Jd=i=>(i.n&os)>0,vg=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=os},xg=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];Zd(s)&&!Jd(s)?s.delete(i):e[t++]=s,s.w&=~os,s.n&=~os}e.length=t}},Cc=new WeakMap;let go=0,os=1;const Pc=30;let Hn;const Cs=Symbol(""),Lc=Symbol("");class cu{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,gg(this,n)}run(){if(!this.active)return this.fn();let e=Hn,t=es;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Hn,Hn=this,es=!0,os=1<<++go,go<=Pc?vg(this):Qu(this),this.fn()}finally{go<=Pc&&xg(this),os=1<<--go,Hn=this.parent,es=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Hn===this?this.deferStop=!0:this.active&&(Qu(this),this.onStop&&this.onStop(),this.active=!1)}}function Qu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let es=!0;const Qd=[];function kr(){Qd.push(es),es=!1}function Hr(){const i=Qd.pop();es=i===void 0?!0:i}function vn(i,e,t){if(es&&Hn){let n=Cc.get(i);n||Cc.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=lu()),ep(s)}}function ep(i,e){let t=!1;go<=Pc?Jd(i)||(i.n|=os,t=!Zd(i)):t=!i.has(Hn),t&&(i.add(Hn),Hn.deps.push(i))}function Ri(i,e,t,n,s,r){const o=Cc.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ve(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ve(i)?au(t)&&a.push(o.get("length")):(a.push(o.get(Cs)),fr(i)&&a.push(o.get(Lc)));break;case"delete":Ve(i)||(a.push(o.get(Cs)),fr(i)&&a.push(o.get(Lc)));break;case"set":fr(i)&&a.push(o.get(Cs));break}if(a.length===1)a[0]&&Ic(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ic(lu(l))}}function Ic(i,e){const t=Ve(i)?i:[...i];for(const n of t)n.computed&&eh(n);for(const n of t)n.computed||eh(n)}function eh(i,e){(i!==Hn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const yg=iu("__proto__,__v_isRef,__isVue"),tp=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ou)),Mg=uu(),Eg=uu(!1,!0),Sg=uu(!0),th=Tg();function Tg(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=rt(this);for(let r=0,o=this.length;r<o;r++)vn(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(rt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){kr();const n=rt(this)[e].apply(this,t);return Hr(),n}}),i}function Ag(i){const e=rt(this);return vn(e,"has",i),e.hasOwnProperty(i)}function uu(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?zg:op:e?rp:sp).get(n))return n;const o=Ve(n);if(!i){if(o&&st(th,s))return Reflect.get(th,s,r);if(s==="hasOwnProperty")return Ag}const a=Reflect.get(n,s,r);return(ou(s)?tp.has(s):yg(s))||(i||vn(n,"get",s),e)?a:tn(a)?o&&au(s)?a:a.value:Et(a)?i?ap(a):ci(a):a}}const bg=np(),wg=np(!0);function np(i=!1){return function(t,n,s,r){let o=t[n];if(Er(o)&&tn(o)&&!tn(s))return!1;if(!i&&(!Ha(s)&&!Er(s)&&(o=rt(o),s=rt(s)),!Ve(t)&&tn(o)&&!tn(s)))return o.value=s,!0;const a=Ve(t)&&au(n)?Number(n)<t.length:st(t,n),l=Reflect.set(t,n,s,r);return t===rt(r)&&(a?Co(s,o)&&Ri(t,"set",n,s):Ri(t,"add",n,s)),l}}function Rg(i,e){const t=st(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Ri(i,"delete",e,void 0),n}function Cg(i,e){const t=Reflect.has(i,e);return(!ou(e)||!tp.has(e))&&vn(i,"has",e),t}function Pg(i){return vn(i,"iterate",Ve(i)?"length":Cs),Reflect.ownKeys(i)}const ip={get:Mg,set:bg,deleteProperty:Rg,has:Cg,ownKeys:Pg},Lg={get:Sg,set(i,e){return!0},deleteProperty(i,e){return!0}},Ig=dn({},ip,{get:Eg,set:wg}),hu=i=>i,cl=i=>Reflect.getPrototypeOf(i);function Wo(i,e,t=!1,n=!1){i=i.__v_raw;const s=rt(i),r=rt(e);t||(e!==r&&vn(s,"get",e),vn(s,"get",r));const{has:o}=cl(s),a=n?hu:t?pu:Po;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Yo(i,e=!1){const t=this.__v_raw,n=rt(t),s=rt(i);return e||(i!==s&&vn(n,"has",i),vn(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Xo(i,e=!1){return i=i.__v_raw,!e&&vn(rt(i),"iterate",Cs),Reflect.get(i,"size",i)}function nh(i){i=rt(i);const e=rt(this);return cl(e).has.call(e,i)||(e.add(i),Ri(e,"add",i,i)),this}function ih(i,e){e=rt(e);const t=rt(this),{has:n,get:s}=cl(t);let r=n.call(t,i);r||(i=rt(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?Co(e,o)&&Ri(t,"set",i,e):Ri(t,"add",i,e),this}function sh(i){const e=rt(this),{has:t,get:n}=cl(e);let s=t.call(e,i);s||(i=rt(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Ri(e,"delete",i,void 0),r}function rh(){const i=rt(this),e=i.size!==0,t=i.clear();return e&&Ri(i,"clear",void 0,void 0),t}function Ko(i,e){return function(n,s){const r=this,o=r.__v_raw,a=rt(o),l=e?hu:i?pu:Po;return!i&&vn(a,"iterate",Cs),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function jo(i,e,t){return function(...n){const s=this.__v_raw,r=rt(s),o=fr(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?hu:e?pu:Po;return!e&&vn(r,"iterate",l?Lc:Cs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ui(i){return function(...e){return i==="delete"?!1:this}}function Dg(){const i={get(r){return Wo(this,r)},get size(){return Xo(this)},has:Yo,add:nh,set:ih,delete:sh,clear:rh,forEach:Ko(!1,!1)},e={get(r){return Wo(this,r,!1,!0)},get size(){return Xo(this)},has:Yo,add:nh,set:ih,delete:sh,clear:rh,forEach:Ko(!1,!0)},t={get(r){return Wo(this,r,!0)},get size(){return Xo(this,!0)},has(r){return Yo.call(this,r,!0)},add:Ui("add"),set:Ui("set"),delete:Ui("delete"),clear:Ui("clear"),forEach:Ko(!0,!1)},n={get(r){return Wo(this,r,!0,!0)},get size(){return Xo(this,!0)},has(r){return Yo.call(this,r,!0)},add:Ui("add"),set:Ui("set"),delete:Ui("delete"),clear:Ui("clear"),forEach:Ko(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=jo(r,!1,!1),t[r]=jo(r,!0,!1),e[r]=jo(r,!1,!0),n[r]=jo(r,!0,!0)}),[i,t,e,n]}const[Ng,Ug,Og,Fg]=Dg();function fu(i,e){const t=e?i?Fg:Og:i?Ug:Ng;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(st(t,s)&&s in n?t:n,s,r)}const Bg={get:fu(!1,!1)},kg={get:fu(!1,!0)},Hg={get:fu(!0,!1)},sp=new WeakMap,rp=new WeakMap,op=new WeakMap,zg=new WeakMap;function Vg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gg(i){return i.__v_skip||!Object.isExtensible(i)?0:Vg(ug(i))}function ci(i){return Er(i)?i:du(i,!1,ip,Bg,sp)}function Wg(i){return du(i,!1,Ig,kg,rp)}function ap(i){return du(i,!0,Lg,Hg,op)}function du(i,e,t,n,s){if(!Et(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=Gg(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function dr(i){return Er(i)?dr(i.__v_raw):!!(i&&i.__v_isReactive)}function Er(i){return!!(i&&i.__v_isReadonly)}function Ha(i){return!!(i&&i.__v_isShallow)}function lp(i){return dr(i)||Er(i)}function rt(i){const e=i&&i.__v_raw;return e?rt(e):i}function cp(i){return ka(i,"__v_skip",!0),i}const Po=i=>Et(i)?ci(i):i,pu=i=>Et(i)?ap(i):i;function up(i){es&&Hn&&(i=rt(i),ep(i.dep||(i.dep=lu())))}function hp(i,e){i=rt(i);const t=i.dep;t&&Ic(t)}function tn(i){return!!(i&&i.__v_isRef===!0)}function ft(i){return fp(i,!1)}function Yg(i){return fp(i,!0)}function fp(i,e){return tn(i)?i:new Xg(i,e)}class Xg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:rt(e),this._value=t?e:Po(e)}get value(){return up(this),this._value}set value(e){const t=this.__v_isShallow||Ha(e)||Er(e);e=t?e:rt(e),Co(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Po(e),hp(this))}}function W(i){return tn(i)?i.value:i}const Kg={get:(i,e,t)=>W(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return tn(s)&&!tn(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function dp(i){return dr(i)?i:new Proxy(i,Kg)}var pp;class jg{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[pp]=!1,this._dirty=!0,this.effect=new cu(e,()=>{this._dirty||(this._dirty=!0,hp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=rt(this);return up(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}pp="__v_isReadonly";function qg(i,e,t=!1){let n,s;const r=Ze(i);return r?(n=i,s=Xn):(n=i.get,s=i.set),new jg(n,s,r||!s,t)}function ts(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){ul(r,e,t)}return s}function Kn(i,e,t,n){if(Ze(i)){const r=ts(i,e,t,n);return r&&Kd(r)&&r.catch(o=>{ul(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(Kn(i[r],e,t,n));return s}function ul(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ts(l,null,10,[i,o,a]);return}}$g(i,t,s,n)}function $g(i,e,t,n=!0){console.error(i)}let Lo=!1,Dc=!1;const en=[];let ni=0;const pr=[];let Ei=null,Es=0;const mp=Promise.resolve();let mu=null;function gp(i){const e=mu||mp;return i?e.then(this?i.bind(this):i):e}function Zg(i){let e=ni+1,t=en.length;for(;e<t;){const n=e+t>>>1;Io(en[n])<i?e=n+1:t=n}return e}function gu(i){(!en.length||!en.includes(i,Lo&&i.allowRecurse?ni+1:ni))&&(i.id==null?en.push(i):en.splice(Zg(i.id),0,i),_p())}function _p(){!Lo&&!Dc&&(Dc=!0,mu=mp.then(xp))}function Jg(i){const e=en.indexOf(i);e>ni&&en.splice(e,1)}function Qg(i){Ve(i)?pr.push(...i):(!Ei||!Ei.includes(i,i.allowRecurse?Es+1:Es))&&pr.push(i),_p()}function oh(i,e=Lo?ni+1:0){for(;e<en.length;e++){const t=en[e];t&&t.pre&&(en.splice(e,1),e--,t())}}function vp(i){if(pr.length){const e=[...new Set(pr)];if(pr.length=0,Ei){Ei.push(...e);return}for(Ei=e,Ei.sort((t,n)=>Io(t)-Io(n)),Es=0;Es<Ei.length;Es++)Ei[Es]();Ei=null,Es=0}}const Io=i=>i.id==null?1/0:i.id,e_=(i,e)=>{const t=Io(i)-Io(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function xp(i){Dc=!1,Lo=!0,en.sort(e_);const e=Xn;try{for(ni=0;ni<en.length;ni++){const t=en[ni];t&&t.active!==!1&&ts(t,null,14)}}finally{ni=0,en.length=0,vp(),Lo=!1,mu=null,(en.length||pr.length)&&xp()}}function t_(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||yt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||yt;f&&(s=t.map(d=>Dt(d)?d.trim():d)),h&&(s=t.map(dg))}let a,l=n[a=wl(e)]||n[a=wl(Mr(e))];!l&&r&&(l=n[a=wl(Br(e))]),l&&Kn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Kn(c,i,6,s)}}function yp(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ze(i)){const l=c=>{const u=yp(c,e,!0);u&&(a=!0,dn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(Et(i)&&n.set(i,null),null):(Ve(r)?r.forEach(l=>o[l]=null):dn(o,r),Et(i)&&n.set(i,o),o)}function hl(i,e){return!i||!ol(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(i,e[0].toLowerCase()+e.slice(1))||st(i,Br(e))||st(i,e))}let oi=null,fl=null;function za(i){const e=oi;return oi=i,fl=i&&i.type.__scopeId||null,e}function zr(i){fl=i}function Vr(){fl=null}function _o(i,e=oi,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&mh(-1);const r=za(e);let o;try{o=i(...s)}finally{za(r),n._d&&mh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Cl(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=i;let m,p;const A=za(i);try{if(t.shapeFlag&4){const E=s||n;m=Qn(u.call(E,E,h,r,d,f,g)),p=l}else{const E=e;m=Qn(E.length>1?E(r,{attrs:l,slots:a,emit:c}):E(r,null)),p=e.props?l:n_(l)}}catch(E){So.length=0,ul(E,i,1),m=At(Ls)}let x=m;if(p&&_!==!1){const E=Object.keys(p),{shapeFlag:C}=x;E.length&&C&7&&(o&&E.some(su)&&(p=i_(p,o)),x=Sr(x,p))}return t.dirs&&(x=Sr(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,za(A),m}const n_=i=>{let e;for(const t in i)(t==="class"||t==="style"||ol(t))&&((e||(e={}))[t]=i[t]);return e},i_=(i,e)=>{const t={};for(const n in i)(!su(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function s_(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?ah(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!hl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?ah(n,o,c):!0:!!o;return!1}function ah(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!hl(t,r))return!0}return!1}function r_({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const o_=i=>i.__isSuspense;function a_(i,e){e&&e.pendingBranch?Ve(i)?e.effects.push(...i):e.effects.push(i):Qg(i)}function Ca(i,e){if(Ot){let t=Ot.provides;const n=Ot.parent&&Ot.parent.provides;n===t&&(t=Ot.provides=Object.create(n)),t[i]=e}}function Ai(i,e,t=!1){const n=Ot||oi;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ze(e)?e.call(n.proxy):e}}const qo={};function bi(i,e,t){return Mp(i,e,t)}function Mp(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=yt){const a=_g()===(Ot==null?void 0:Ot.scope)?Ot:null;let l,c=!1,u=!1;if(tn(i)?(l=()=>i.value,c=Ha(i)):dr(i)?(l=()=>i,n=!0):Ve(i)?(u=!0,c=i.some(x=>dr(x)||Ha(x)),l=()=>i.map(x=>{if(tn(x))return x.value;if(dr(x))return lr(x);if(Ze(x))return ts(x,a,2)})):Ze(i)?e?l=()=>ts(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Kn(i,a,3,[f])}:l=Xn,e&&n){const x=l;l=()=>lr(x())}let h,f=x=>{h=p.onStop=()=>{ts(x,a,4)}},d;if(No)if(f=Xn,e?t&&Kn(e,a,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const x=t0();d=x.__watcherHandles||(x.__watcherHandles=[])}else return Xn;let g=u?new Array(i.length).fill(qo):qo;const _=()=>{if(p.active)if(e){const x=p.run();(n||c||(u?x.some((E,C)=>Co(E,g[C])):Co(x,g)))&&(h&&h(),Kn(e,a,3,[x,g===qo?void 0:u&&g[0]===qo?[]:g,f]),g=x)}else p.run()};_.allowRecurse=!!e;let m;s==="sync"?m=_:s==="post"?m=()=>gn(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),m=()=>gu(_));const p=new cu(l,m);e?t?_():g=p.run():s==="post"?gn(p.run.bind(p),a&&a.suspense):p.run();const A=()=>{p.stop(),a&&a.scope&&ru(a.scope.effects,p)};return d&&d.push(A),A}function l_(i,e,t){const n=this.proxy,s=Dt(i)?i.includes(".")?Ep(n,i):()=>n[i]:i.bind(n,n);let r;Ze(e)?r=e:(r=e.handler,t=e);const o=Ot;Tr(this);const a=Mp(s,r.bind(n),t);return o?Tr(o):Ps(),a}function Ep(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function lr(i,e){if(!Et(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),tn(i))lr(i.value,e);else if(Ve(i))for(let t=0;t<i.length;t++)lr(i[t],e);else if(Xd(i)||fr(i))i.forEach(t=>{lr(t,e)});else if(qd(i))for(const t in i)lr(i[t],e);return i}function pn(i){return Ze(i)?{setup:i,name:i.name}:i}const Pa=i=>!!i.type.__asyncLoader,Sp=i=>i.type.__isKeepAlive;function c_(i,e){Tp(i,"a",e)}function u_(i,e){Tp(i,"da",e)}function Tp(i,e,t=Ot){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(dl(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Sp(s.parent.vnode)&&h_(n,e,t,s),s=s.parent}}function h_(i,e,t,n){const s=dl(e,i,n,!0);Wr(()=>{ru(n[e],s)},t)}function dl(i,e,t=Ot,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;kr(),Tr(t);const a=Kn(e,t,i,o);return Ps(),Hr(),a});return n?s.unshift(r):s.push(r),r}}const Pi=i=>(e,t=Ot)=>(!No||i==="sp")&&dl(i,(...n)=>e(...n),t),f_=Pi("bm"),Gr=Pi("m"),d_=Pi("bu"),p_=Pi("u"),m_=Pi("bum"),Wr=Pi("um"),g_=Pi("sp"),__=Pi("rtg"),v_=Pi("rtc");function x_(i,e=Ot){dl("ec",i,e)}function hs(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(kr(),Kn(l,t,8,[i.el,a,i,e]),Hr())}}const y_=Symbol();function Mt(i,e,t,n){let s;const r=t&&t[n];if(Ve(i)||Dt(i)){s=new Array(i.length);for(let o=0,a=i.length;o<a;o++)s[o]=e(i[o],o,void 0,r&&r[o])}else if(typeof i=="number"){s=new Array(i);for(let o=0;o<i;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Et(i))if(i[Symbol.iterator])s=Array.from(i,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(i);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(i[c],c,a,r&&r[a])}}else s=[];return t&&(t[n]=s),s}const Nc=i=>i?Up(i)?Eu(i)||i.proxy:Nc(i.parent):null,Mo=dn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Nc(i.parent),$root:i=>Nc(i.root),$emit:i=>i.emit,$options:i=>_u(i),$forceUpdate:i=>i.f||(i.f=()=>gu(i.update)),$nextTick:i=>i.n||(i.n=gp.bind(i.proxy)),$watch:i=>l_.bind(i)}),Pl=(i,e)=>i!==yt&&!i.__isScriptSetup&&st(i,e),M_={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Pl(n,e))return o[e]=1,n[e];if(s!==yt&&st(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&st(c,e))return o[e]=3,r[e];if(t!==yt&&st(t,e))return o[e]=4,t[e];Uc&&(o[e]=0)}}const u=Mo[e];let h,f;if(u)return e==="$attrs"&&vn(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==yt&&st(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,st(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Pl(s,e)?(s[e]=t,!0):n!==yt&&st(n,e)?(n[e]=t,!0):st(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==yt&&st(i,o)||Pl(e,o)||(a=r[0])&&st(a,o)||st(n,o)||st(Mo,o)||st(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:st(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Uc=!0;function E_(i){const e=_u(i),t=i.proxy,n=i.ctx;Uc=!1,e.beforeCreate&&lh(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:x,unmounted:E,render:C,renderTracked:I,renderTriggered:w,errorCaptured:U,serverPrefetch:S,expose:M,inheritAttrs:L,components:V,directives:O,filters:re}=e;if(c&&S_(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const he in o){const j=o[he];Ze(j)&&(n[he]=j.bind(t))}if(s){const he=s.call(t,t);Et(he)&&(i.data=ci(he))}if(Uc=!0,r)for(const he in r){const j=r[he],me=Ze(j)?j.bind(t,t):Ze(j.get)?j.get.bind(t,t):Xn,_e=!Ze(j)&&Ze(j.set)?j.set.bind(t):Xn,Ae=Gt({get:me,set:_e});Object.defineProperty(n,he,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:De=>Ae.value=De})}if(a)for(const he in a)Ap(a[he],n,t,he);if(l){const he=Ze(l)?l.call(t):l;Reflect.ownKeys(he).forEach(j=>{Ca(j,he[j])})}u&&lh(u,i,"c");function ue(he,j){Ve(j)?j.forEach(me=>he(me.bind(t))):j&&he(j.bind(t))}if(ue(f_,h),ue(Gr,f),ue(d_,d),ue(p_,g),ue(c_,_),ue(u_,m),ue(x_,U),ue(v_,I),ue(__,w),ue(m_,A),ue(Wr,E),ue(g_,S),Ve(M))if(M.length){const he=i.exposed||(i.exposed={});M.forEach(j=>{Object.defineProperty(he,j,{get:()=>t[j],set:me=>t[j]=me})})}else i.exposed||(i.exposed={});C&&i.render===Xn&&(i.render=C),L!=null&&(i.inheritAttrs=L),V&&(i.components=V),O&&(i.directives=O)}function S_(i,e,t=Xn,n=!1){Ve(i)&&(i=Oc(i));for(const s in i){const r=i[s];let o;Et(r)?"default"in r?o=Ai(r.from||s,r.default,!0):o=Ai(r.from||s):o=Ai(r),tn(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function lh(i,e,t){Kn(Ve(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Ap(i,e,t,n){const s=n.includes(".")?Ep(t,n):()=>t[n];if(Dt(i)){const r=e[i];Ze(r)&&bi(s,r)}else if(Ze(i))bi(s,i.bind(t));else if(Et(i))if(Ve(i))i.forEach(r=>Ap(r,e,t,n));else{const r=Ze(i.handler)?i.handler.bind(t):e[i.handler];Ze(r)&&bi(s,r,i)}}function _u(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Va(l,c,o,!0)),Va(l,e,o)),Et(e)&&r.set(e,l),l}function Va(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Va(i,r,t,!0),s&&s.forEach(o=>Va(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=T_[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const T_={data:ch,props:ys,emits:ys,methods:ys,computed:ys,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:ys,directives:ys,watch:b_,provide:ch,inject:A_};function ch(i,e){return e?i?function(){return dn(Ze(i)?i.call(this,this):i,Ze(e)?e.call(this,this):e)}:e:i}function A_(i,e){return ys(Oc(i),Oc(e))}function Oc(i){if(Ve(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function sn(i,e){return i?[...new Set([].concat(i,e))]:e}function ys(i,e){return i?dn(dn(Object.create(null),i),e):e}function b_(i,e){if(!i)return e;if(!e)return i;const t=dn(Object.create(null),i);for(const n in e)t[n]=sn(i[n],e[n]);return t}function w_(i,e,t,n=!1){const s={},r={};ka(r,ml,1),i.propsDefaults=Object.create(null),bp(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:Wg(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function R_(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=rt(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(hl(i.emitsOptions,f))continue;const d=e[f];if(l)if(st(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Mr(f);s[g]=Fc(l,a,g,d,i,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{bp(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!st(e,h)&&((u=Br(h))===h||!st(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Fc(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!st(e,h))&&(delete r[h],c=!0)}c&&Ri(i,"set","$attrs")}function bp(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ra(l))continue;const c=e[l];let u;s&&st(s,u=Mr(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:hl(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=rt(t),c=a||yt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Fc(s,l,h,c[h],i,!st(c,h))}}return o}function Fc(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=st(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ze(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(Tr(s),n=c[t]=l.call(null,e),Ps())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Br(t))&&(n=!0))}return n}function wp(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ze(i)){const u=h=>{l=!0;const[f,d]=wp(h,e,!0);dn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return Et(i)&&n.set(i,hr),hr;if(Ve(r))for(let u=0;u<r.length;u++){const h=Mr(r[u]);uh(h)&&(o[h]=yt)}else if(r)for(const u in r){const h=Mr(u);if(uh(h)){const f=r[u],d=o[h]=Ve(f)||Ze(f)?{type:f}:Object.assign({},f);if(d){const g=dh(Boolean,d.type),_=dh(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||st(d,"default"))&&a.push(h)}}}const c=[o,a];return Et(i)&&n.set(i,c),c}function uh(i){return i[0]!=="$"}function hh(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function fh(i,e){return hh(i)===hh(e)}function dh(i,e){return Ve(e)?e.findIndex(t=>fh(t,i)):Ze(e)&&fh(e,i)?0:-1}const Rp=i=>i[0]==="_"||i==="$stable",vu=i=>Ve(i)?i.map(Qn):[Qn(i)],C_=(i,e,t)=>{if(e._n)return e;const n=_o((...s)=>vu(e(...s)),t);return n._c=!1,n},Cp=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Rp(s))continue;const r=i[s];if(Ze(r))e[s]=C_(s,r,n);else if(r!=null){const o=vu(r);e[s]=()=>o}}},Pp=(i,e)=>{const t=vu(e);i.slots.default=()=>t},P_=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=rt(e),ka(e,"_",t)):Cp(e,i.slots={})}else i.slots={},e&&Pp(i,e);ka(i.slots,ml,1)},L_=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=yt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(dn(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Cp(e,s)),o=e}else e&&(Pp(i,e),o={default:1});if(r)for(const a in s)!Rp(a)&&!(a in o)&&delete s[a]};function Lp(){return{app:null,config:{isNativeTag:ag,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I_=0;function D_(i,e){return function(n,s=null){Ze(n)||(n=Object.assign({},n)),s!=null&&!Et(s)&&(s=null);const r=Lp(),o=new Set;let a=!1;const l=r.app={_uid:I_++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:n0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ze(c.install)?(o.add(c),c.install(l,...u)):Ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=At(n,s);return f.appContext=r,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Eu(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Bc(i,e,t,n,s=!1){if(Ve(i)){i.forEach((f,d)=>Bc(f,e&&(Ve(e)?e[d]:e),t,n,s));return}if(Pa(n)&&!s)return;const r=n.shapeFlag&4?Eu(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Dt(c)?(u[c]=null,st(h,c)&&(h[c]=null)):tn(c)&&(c.value=null)),Ze(l))ts(l,a,12,[o,u]);else{const f=Dt(l),d=tn(l);if(f||d){const g=()=>{if(i.f){const _=f?st(h,l)?h[l]:u[l]:l.value;s?Ve(_)&&ru(_,r):Ve(_)?_.includes(r)||_.push(r):f?(u[l]=[r],st(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,st(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,gn(g,t)):g()}}}const gn=a_;function N_(i){return U_(i)}function U_(i,e){const t=pg();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Xn,insertStaticContent:g}=i,_=(b,P,q,K=null,ae=null,T=null,y=!1,N=null,z=!!P.dynamicChildren)=>{if(b===P)return;b&&!Zr(b,P)&&(K=$(b),De(b,ae,T,!0),b=null),P.patchFlag===-2&&(z=!1,P.dynamicChildren=null);const{type:k,ref:Z,shapeFlag:de}=P;switch(k){case pl:m(b,P,q,K);break;case Ls:p(b,P,q,K);break;case La:b==null&&A(P,q,K,y);break;case nt:V(b,P,q,K,ae,T,y,N,z);break;default:de&1?C(b,P,q,K,ae,T,y,N,z):de&6?O(b,P,q,K,ae,T,y,N,z):(de&64||de&128)&&k.process(b,P,q,K,ae,T,y,N,z,J)}Z!=null&&ae&&Bc(Z,b&&b.ref,T,P||b,!P)},m=(b,P,q,K)=>{if(b==null)n(P.el=a(P.children),q,K);else{const ae=P.el=b.el;P.children!==b.children&&c(ae,P.children)}},p=(b,P,q,K)=>{b==null?n(P.el=l(P.children||""),q,K):P.el=b.el},A=(b,P,q,K)=>{[b.el,b.anchor]=g(b.children,P,q,K,b.el,b.anchor)},x=({el:b,anchor:P},q,K)=>{let ae;for(;b&&b!==P;)ae=f(b),n(b,q,K),b=ae;n(P,q,K)},E=({el:b,anchor:P})=>{let q;for(;b&&b!==P;)q=f(b),s(b),b=q;s(P)},C=(b,P,q,K,ae,T,y,N,z)=>{y=y||P.type==="svg",b==null?I(P,q,K,ae,T,y,N,z):S(b,P,ae,T,y,N,z)},I=(b,P,q,K,ae,T,y,N)=>{let z,k;const{type:Z,props:de,shapeFlag:ee,transition:ge,dirs:xe}=b;if(z=b.el=o(b.type,T,de&&de.is,de),ee&8?u(z,b.children):ee&16&&U(b.children,z,null,K,ae,T&&Z!=="foreignObject",y,N),xe&&hs(b,null,K,"created"),w(z,b,b.scopeId,y,K),de){for(const ve in de)ve!=="value"&&!Ra(ve)&&r(z,ve,null,de[ve],T,b.children,K,ae,se);"value"in de&&r(z,"value",null,de.value),(k=de.onVnodeBeforeMount)&&Jn(k,K,b)}xe&&hs(b,null,K,"beforeMount");const pe=(!ae||ae&&!ae.pendingBranch)&&ge&&!ge.persisted;pe&&ge.beforeEnter(z),n(z,P,q),((k=de&&de.onVnodeMounted)||pe||xe)&&gn(()=>{k&&Jn(k,K,b),pe&&ge.enter(z),xe&&hs(b,null,K,"mounted")},ae)},w=(b,P,q,K,ae)=>{if(q&&d(b,q),K)for(let T=0;T<K.length;T++)d(b,K[T]);if(ae){let T=ae.subTree;if(P===T){const y=ae.vnode;w(b,y,y.scopeId,y.slotScopeIds,ae.parent)}}},U=(b,P,q,K,ae,T,y,N,z=0)=>{for(let k=z;k<b.length;k++){const Z=b[k]=N?Yi(b[k]):Qn(b[k]);_(null,Z,P,q,K,ae,T,y,N)}},S=(b,P,q,K,ae,T,y)=>{const N=P.el=b.el;let{patchFlag:z,dynamicChildren:k,dirs:Z}=P;z|=b.patchFlag&16;const de=b.props||yt,ee=P.props||yt;let ge;q&&fs(q,!1),(ge=ee.onVnodeBeforeUpdate)&&Jn(ge,q,P,b),Z&&hs(P,b,q,"beforeUpdate"),q&&fs(q,!0);const xe=ae&&P.type!=="foreignObject";if(k?M(b.dynamicChildren,k,N,q,K,xe,T):y||j(b,P,N,null,q,K,xe,T,!1),z>0){if(z&16)L(N,P,de,ee,q,K,ae);else if(z&2&&de.class!==ee.class&&r(N,"class",null,ee.class,ae),z&4&&r(N,"style",de.style,ee.style,ae),z&8){const pe=P.dynamicProps;for(let ve=0;ve<pe.length;ve++){const Re=pe[ve],be=de[Re],Ce=ee[Re];(Ce!==be||Re==="value")&&r(N,Re,be,Ce,ae,b.children,q,K,se)}}z&1&&b.children!==P.children&&u(N,P.children)}else!y&&k==null&&L(N,P,de,ee,q,K,ae);((ge=ee.onVnodeUpdated)||Z)&&gn(()=>{ge&&Jn(ge,q,P,b),Z&&hs(P,b,q,"updated")},K)},M=(b,P,q,K,ae,T,y)=>{for(let N=0;N<P.length;N++){const z=b[N],k=P[N],Z=z.el&&(z.type===nt||!Zr(z,k)||z.shapeFlag&70)?h(z.el):q;_(z,k,Z,null,K,ae,T,y,!0)}},L=(b,P,q,K,ae,T,y)=>{if(q!==K){if(q!==yt)for(const N in q)!Ra(N)&&!(N in K)&&r(b,N,q[N],null,y,P.children,ae,T,se);for(const N in K){if(Ra(N))continue;const z=K[N],k=q[N];z!==k&&N!=="value"&&r(b,N,k,z,y,P.children,ae,T,se)}"value"in K&&r(b,"value",q.value,K.value)}},V=(b,P,q,K,ae,T,y,N,z)=>{const k=P.el=b?b.el:a(""),Z=P.anchor=b?b.anchor:a("");let{patchFlag:de,dynamicChildren:ee,slotScopeIds:ge}=P;ge&&(N=N?N.concat(ge):ge),b==null?(n(k,q,K),n(Z,q,K),U(P.children,q,Z,ae,T,y,N,z)):de>0&&de&64&&ee&&b.dynamicChildren?(M(b.dynamicChildren,ee,q,ae,T,y,N),(P.key!=null||ae&&P===ae.subTree)&&xu(b,P,!0)):j(b,P,q,Z,ae,T,y,N,z)},O=(b,P,q,K,ae,T,y,N,z)=>{P.slotScopeIds=N,b==null?P.shapeFlag&512?ae.ctx.activate(P,q,K,y,z):re(P,q,K,ae,T,y,z):le(b,P,z)},re=(b,P,q,K,ae,T,y)=>{const N=b.component=j_(b,K,ae);if(Sp(b)&&(N.ctx.renderer=J),q_(N),N.asyncDep){if(ae&&ae.registerDep(N,ue),!b.el){const z=N.subTree=At(Ls);p(null,z,P,q)}return}ue(N,b,P,q,ae,T,y)},le=(b,P,q)=>{const K=P.component=b.component;if(s_(b,P,q))if(K.asyncDep&&!K.asyncResolved){he(K,P,q);return}else K.next=P,Jg(K.update),K.update();else P.el=b.el,K.vnode=P},ue=(b,P,q,K,ae,T,y)=>{const N=()=>{if(b.isMounted){let{next:Z,bu:de,u:ee,parent:ge,vnode:xe}=b,pe=Z,ve;fs(b,!1),Z?(Z.el=xe.el,he(b,Z,y)):Z=xe,de&&Rl(de),(ve=Z.props&&Z.props.onVnodeBeforeUpdate)&&Jn(ve,ge,Z,xe),fs(b,!0);const Re=Cl(b),be=b.subTree;b.subTree=Re,_(be,Re,h(be.el),$(be),b,ae,T),Z.el=Re.el,pe===null&&r_(b,Re.el),ee&&gn(ee,ae),(ve=Z.props&&Z.props.onVnodeUpdated)&&gn(()=>Jn(ve,ge,Z,xe),ae)}else{let Z;const{el:de,props:ee}=P,{bm:ge,m:xe,parent:pe}=b,ve=Pa(P);if(fs(b,!1),ge&&Rl(ge),!ve&&(Z=ee&&ee.onVnodeBeforeMount)&&Jn(Z,pe,P),fs(b,!0),de&&F){const Re=()=>{b.subTree=Cl(b),F(de,b.subTree,b,ae,null)};ve?P.type.__asyncLoader().then(()=>!b.isUnmounted&&Re()):Re()}else{const Re=b.subTree=Cl(b);_(null,Re,q,K,b,ae,T),P.el=Re.el}if(xe&&gn(xe,ae),!ve&&(Z=ee&&ee.onVnodeMounted)){const Re=P;gn(()=>Jn(Z,pe,Re),ae)}(P.shapeFlag&256||pe&&Pa(pe.vnode)&&pe.vnode.shapeFlag&256)&&b.a&&gn(b.a,ae),b.isMounted=!0,P=q=K=null}},z=b.effect=new cu(N,()=>gu(k),b.scope),k=b.update=()=>z.run();k.id=b.uid,fs(b,!0),k()},he=(b,P,q)=>{P.component=b;const K=b.vnode.props;b.vnode=P,b.next=null,R_(b,P.props,K,q),L_(b,P.children,q),kr(),oh(),Hr()},j=(b,P,q,K,ae,T,y,N,z=!1)=>{const k=b&&b.children,Z=b?b.shapeFlag:0,de=P.children,{patchFlag:ee,shapeFlag:ge}=P;if(ee>0){if(ee&128){_e(k,de,q,K,ae,T,y,N,z);return}else if(ee&256){me(k,de,q,K,ae,T,y,N,z);return}}ge&8?(Z&16&&se(k,ae,T),de!==k&&u(q,de)):Z&16?ge&16?_e(k,de,q,K,ae,T,y,N,z):se(k,ae,T,!0):(Z&8&&u(q,""),ge&16&&U(de,q,K,ae,T,y,N,z))},me=(b,P,q,K,ae,T,y,N,z)=>{b=b||hr,P=P||hr;const k=b.length,Z=P.length,de=Math.min(k,Z);let ee;for(ee=0;ee<de;ee++){const ge=P[ee]=z?Yi(P[ee]):Qn(P[ee]);_(b[ee],ge,q,null,ae,T,y,N,z)}k>Z?se(b,ae,T,!0,!1,de):U(P,q,K,ae,T,y,N,z,de)},_e=(b,P,q,K,ae,T,y,N,z)=>{let k=0;const Z=P.length;let de=b.length-1,ee=Z-1;for(;k<=de&&k<=ee;){const ge=b[k],xe=P[k]=z?Yi(P[k]):Qn(P[k]);if(Zr(ge,xe))_(ge,xe,q,null,ae,T,y,N,z);else break;k++}for(;k<=de&&k<=ee;){const ge=b[de],xe=P[ee]=z?Yi(P[ee]):Qn(P[ee]);if(Zr(ge,xe))_(ge,xe,q,null,ae,T,y,N,z);else break;de--,ee--}if(k>de){if(k<=ee){const ge=ee+1,xe=ge<Z?P[ge].el:K;for(;k<=ee;)_(null,P[k]=z?Yi(P[k]):Qn(P[k]),q,xe,ae,T,y,N,z),k++}}else if(k>ee)for(;k<=de;)De(b[k],ae,T,!0),k++;else{const ge=k,xe=k,pe=new Map;for(k=xe;k<=ee;k++){const Fe=P[k]=z?Yi(P[k]):Qn(P[k]);Fe.key!=null&&pe.set(Fe.key,k)}let ve,Re=0;const be=ee-xe+1;let Ce=!1,$e=0;const Ge=new Array(be);for(k=0;k<be;k++)Ge[k]=0;for(k=ge;k<=de;k++){const Fe=b[k];if(Re>=be){De(Fe,ae,T,!0);continue}let He;if(Fe.key!=null)He=pe.get(Fe.key);else for(ve=xe;ve<=ee;ve++)if(Ge[ve-xe]===0&&Zr(Fe,P[ve])){He=ve;break}He===void 0?De(Fe,ae,T,!0):(Ge[He-xe]=k+1,He>=$e?$e=He:Ce=!0,_(Fe,P[He],q,null,ae,T,y,N,z),Re++)}const it=Ce?O_(Ge):hr;for(ve=it.length-1,k=be-1;k>=0;k--){const Fe=xe+k,He=P[Fe],Le=Fe+1<Z?P[Fe+1].el:K;Ge[k]===0?_(null,He,q,Le,ae,T,y,N,z):Ce&&(ve<0||k!==it[ve]?Ae(He,q,Le,2):ve--)}}},Ae=(b,P,q,K,ae=null)=>{const{el:T,type:y,transition:N,children:z,shapeFlag:k}=b;if(k&6){Ae(b.component.subTree,P,q,K);return}if(k&128){b.suspense.move(P,q,K);return}if(k&64){y.move(b,P,q,J);return}if(y===nt){n(T,P,q);for(let de=0;de<z.length;de++)Ae(z[de],P,q,K);n(b.anchor,P,q);return}if(y===La){x(b,P,q);return}if(K!==2&&k&1&&N)if(K===0)N.beforeEnter(T),n(T,P,q),gn(()=>N.enter(T),ae);else{const{leave:de,delayLeave:ee,afterLeave:ge}=N,xe=()=>n(T,P,q),pe=()=>{de(T,()=>{xe(),ge&&ge()})};ee?ee(T,xe,pe):pe()}else n(T,P,q)},De=(b,P,q,K=!1,ae=!1)=>{const{type:T,props:y,ref:N,children:z,dynamicChildren:k,shapeFlag:Z,patchFlag:de,dirs:ee}=b;if(N!=null&&Bc(N,null,q,b,!0),Z&256){P.ctx.deactivate(b);return}const ge=Z&1&&ee,xe=!Pa(b);let pe;if(xe&&(pe=y&&y.onVnodeBeforeUnmount)&&Jn(pe,P,b),Z&6)H(b.component,q,K);else{if(Z&128){b.suspense.unmount(q,K);return}ge&&hs(b,null,P,"beforeUnmount"),Z&64?b.type.remove(b,P,q,ae,J,K):k&&(T!==nt||de>0&&de&64)?se(k,P,q,!1,!0):(T===nt&&de&384||!ae&&Z&16)&&se(z,P,q),K&&Je(b)}(xe&&(pe=y&&y.onVnodeUnmounted)||ge)&&gn(()=>{pe&&Jn(pe,P,b),ge&&hs(b,null,P,"unmounted")},q)},Je=b=>{const{type:P,el:q,anchor:K,transition:ae}=b;if(P===nt){ce(q,K);return}if(P===La){E(b);return}const T=()=>{s(q),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(b.shapeFlag&1&&ae&&!ae.persisted){const{leave:y,delayLeave:N}=ae,z=()=>y(q,T);N?N(b.el,T,z):z()}else T()},ce=(b,P)=>{let q;for(;b!==P;)q=f(b),s(b),b=q;s(P)},H=(b,P,q)=>{const{bum:K,scope:ae,update:T,subTree:y,um:N}=b;K&&Rl(K),ae.stop(),T&&(T.active=!1,De(y,b,P,q)),N&&gn(N,P),gn(()=>{b.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},se=(b,P,q,K=!1,ae=!1,T=0)=>{for(let y=T;y<b.length;y++)De(b[y],P,q,K,ae)},$=b=>b.shapeFlag&6?$(b.component.subTree):b.shapeFlag&128?b.suspense.next():f(b.anchor||b.el),G=(b,P,q)=>{b==null?P._vnode&&De(P._vnode,null,null,!0):_(P._vnode||null,b,P,null,null,null,q),oh(),vp(),P._vnode=b},J={p:_,um:De,m:Ae,r:Je,mt:re,mc:U,pc:j,pbc:M,n:$,o:i};let oe,F;return e&&([oe,F]=e(J)),{render:G,hydrate:oe,createApp:D_(G,oe)}}function fs({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function xu(i,e,t=!1){const n=i.children,s=e.children;if(Ve(n)&&Ve(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Yi(s[r]),a.el=o.el),t||xu(o,a)),a.type===pl&&(a.el=o.el)}}function O_(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const F_=i=>i.__isTeleport,Eo=i=>i&&(i.disabled||i.disabled===""),ph=i=>typeof SVGElement<"u"&&i instanceof SVGElement,kc=(i,e)=>{const t=i&&i.to;return Dt(t)?e?e(t):null:t},B_={__isTeleport:!0,process(i,e,t,n,s,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:g,createText:_,createComment:m}}=c,p=Eo(e.props);let{shapeFlag:A,children:x,dynamicChildren:E}=e;if(i==null){const C=e.el=_(""),I=e.anchor=_("");d(C,t,n),d(I,t,n);const w=e.target=kc(e.props,g),U=e.targetAnchor=_("");w&&(d(U,w),o=o||ph(w));const S=(M,L)=>{A&16&&u(x,M,L,s,r,o,a,l)};p?S(t,I):w&&S(w,U)}else{e.el=i.el;const C=e.anchor=i.anchor,I=e.target=i.target,w=e.targetAnchor=i.targetAnchor,U=Eo(i.props),S=U?t:I,M=U?C:w;if(o=o||ph(I),E?(f(i.dynamicChildren,E,S,s,r,o,a),xu(i,e,!0)):l||h(i,e,S,M,s,r,o,a,!1),p)U||$o(e,t,C,c,1);else if((e.props&&e.props.to)!==(i.props&&i.props.to)){const L=e.target=kc(e.props,g);L&&$o(e,L,null,c,0)}else U&&$o(e,I,w,c,1)}Ip(e)},remove(i,e,t,n,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=i;if(h&&r(u),(o||!Eo(f))&&(r(c),a&16))for(let d=0;d<l.length;d++){const g=l[d];s(g,e,t,!0,!!g.dynamicChildren)}},move:$o,hydrate:k_};function $o(i,e,t,{o:{insert:n},m:s},r=2){r===0&&n(i.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=i,h=r===2;if(h&&n(o,e,t),(!h||Eo(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,t,2);h&&n(a,e,t)}function k_(i,e,t,n,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=kc(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Eo(e.props))e.anchor=c(o(i),e,a(i),t,n,s,r),e.targetAnchor=h;else{e.anchor=o(i);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,t,n,s,r)}Ip(e)}return e.anchor&&o(e.anchor)}const H_=B_;function Ip(i){const e=i.ctx;if(e&&e.ut){let t=i.children[0].el;for(;t!==i.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const nt=Symbol(void 0),pl=Symbol(void 0),Ls=Symbol(void 0),La=Symbol(void 0),So=[];let Gn=null;function Ee(i=!1){So.push(Gn=i?null:[])}function z_(){So.pop(),Gn=So[So.length-1]||null}let Do=1;function mh(i){Do+=i}function Dp(i){return i.dynamicChildren=Do>0?Gn||hr:null,z_(),Do>0&&Gn&&Gn.push(i),i}function Te(i,e,t,n,s,r){return Dp(D(i,e,t,n,s,r,!0))}function yu(i,e,t,n,s){return Dp(At(i,e,t,n,s,!0))}function Hc(i){return i?i.__v_isVNode===!0:!1}function Zr(i,e){return i.type===e.type&&i.key===e.key}const ml="__vInternal",Np=({key:i})=>i??null,Ia=({ref:i,ref_key:e,ref_for:t})=>i!=null?Dt(i)||tn(i)||Ze(i)?{i:oi,r:i,k:e,f:!!t}:i:null;function D(i,e=null,t=null,n=0,s=null,r=i===nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Np(e),ref:e&&Ia(e),scopeId:fl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:oi};return a?(Mu(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),Do>0&&!o&&Gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Gn.push(l),l}const At=V_;function V_(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===y_)&&(i=Ls),Hc(i)){const a=Sr(i,e,!0);return t&&Mu(a,t),Do>0&&!r&&Gn&&(a.shapeFlag&6?Gn[Gn.indexOf(i)]=a:Gn.push(a)),a.patchFlag|=-2,a}if(Q_(i)&&(i=i.__vccOpts),e){e=G_(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=Tt(a)),Et(l)&&(lp(l)&&!Ve(l)&&(l=dn({},l)),e.style=un(l))}const o=Dt(i)?1:o_(i)?128:F_(i)?64:Et(i)?4:Ze(i)?2:0;return D(i,e,t,n,s,o,r,!0)}function G_(i){return i?lp(i)||ml in i?dn({},i):i:null}function Sr(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?Y_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Np(a),ref:e&&e.ref?t&&s?Ve(s)?s.concat(Ia(e)):[s,Ia(e)]:Ia(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==nt?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Sr(i.ssContent),ssFallback:i.ssFallback&&Sr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function ht(i=" ",e=0){return At(pl,null,i,e)}function W_(i,e){const t=At(La,null,i);return t.staticCount=e,t}function Ut(i="",e=!1){return e?(Ee(),yu(Ls,null,i)):At(Ls,null,i)}function Qn(i){return i==null||typeof i=="boolean"?At(Ls):Ve(i)?At(nt,null,i.slice()):typeof i=="object"?Yi(i):At(pl,null,String(i))}function Yi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Sr(i)}function Mu(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Mu(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(ml in e)?e._ctx=oi:s===3&&oi&&(oi.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:oi},t=32):(e=String(e),n&64?(t=16,e=[ht(e)]):t=8);i.children=e,i.shapeFlag|=t}function Y_(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Tt([e.class,n.class]));else if(s==="style")e.style=un([e.style,n.style]);else if(ol(s)){const r=e[s],o=n[s];o&&r!==o&&!(Ve(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Jn(i,e,t,n=null){Kn(i,e,7,[t,n])}const X_=Lp();let K_=0;function j_(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||X_,r={uid:K_++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wp(n,s),emitsOptions:yp(n,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:n.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=t_.bind(null,r),i.ce&&i.ce(r),r}let Ot=null;const Tr=i=>{Ot=i,i.scope.on()},Ps=()=>{Ot&&Ot.scope.off(),Ot=null};function Up(i){return i.vnode.shapeFlag&4}let No=!1;function q_(i,e=!1){No=e;const{props:t,children:n}=i.vnode,s=Up(i);w_(i,t,s,e),P_(i,n);const r=s?$_(i,e):void 0;return No=!1,r}function $_(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=cp(new Proxy(i.ctx,M_));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?J_(i):null;Tr(i),kr();const r=ts(n,i,0,[i.props,s]);if(Hr(),Ps(),Kd(r)){if(r.then(Ps,Ps),e)return r.then(o=>{gh(i,o,e)}).catch(o=>{ul(o,i,0)});i.asyncDep=r}else gh(i,r,e)}else Op(i,e)}function gh(i,e,t){Ze(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Et(e)&&(i.setupState=dp(e)),Op(i,t)}let _h;function Op(i,e,t){const n=i.type;if(!i.render){if(!e&&_h&&!n.render){const s=n.template||_u(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=dn(dn({isCustomElement:r,delimiters:a},o),l);n.render=_h(s,c)}}i.render=n.render||Xn}Tr(i),kr(),E_(i),Hr(),Ps()}function Z_(i){return new Proxy(i.attrs,{get(e,t){return vn(i,"get","$attrs"),e[t]}})}function J_(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Z_(i))},slots:i.slots,emit:i.emit,expose:e}}function Eu(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(dp(cp(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mo)return Mo[t](i)},has(e,t){return t in e||t in Mo}}))}function Q_(i){return Ze(i)&&"__vccOpts"in i}const Gt=(i,e)=>qg(i,e,No);function Fp(i,e,t){const n=arguments.length;return n===2?Et(e)&&!Ve(e)?Hc(e)?At(i,null,[e]):At(i,e):At(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Hc(t)&&(t=[t]),At(i,e,t))}const e0=Symbol(""),t0=()=>Ai(e0),n0="3.2.47",i0="http://www.w3.org/2000/svg",Ss=typeof document<"u"?document:null,vh=Ss&&Ss.createElement("template"),s0={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?Ss.createElementNS(i0,i):Ss.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Ss.createTextNode(i),createComment:i=>Ss.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ss.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{vh.innerHTML=n?`<svg>${i}</svg>`:i;const a=vh.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function r0(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function o0(i,e,t){const n=i.style,s=Dt(t);if(t&&!s){if(e&&!Dt(e))for(const r in e)t[r]==null&&zc(n,r,"");for(const r in t)zc(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const xh=/\s*!important$/;function zc(i,e,t){if(Ve(t))t.forEach(n=>zc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=a0(i,e);xh.test(t)?i.setProperty(Br(n),t.replace(xh,""),"important"):i[n]=t}}const yh=["Webkit","Moz","ms"],Ll={};function a0(i,e){const t=Ll[e];if(t)return t;let n=Mr(e);if(n!=="filter"&&n in i)return Ll[e]=n;n=$d(n);for(let s=0;s<yh.length;s++){const r=yh[s]+n;if(r in i)return Ll[e]=r}return e}const Mh="http://www.w3.org/1999/xlink";function l0(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Mh,e.slice(6,e.length)):i.setAttributeNS(Mh,e,t);else{const r=og(e);t==null||r&&!Wd(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function c0(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Wd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function u0(i,e,t,n){i.addEventListener(e,t,n)}function h0(i,e,t,n){i.removeEventListener(e,t,n)}function f0(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=d0(e);if(n){const c=r[e]=g0(n,s);u0(i,a,c,l)}else o&&(h0(i,a,o,l),r[e]=void 0)}}const Eh=/(?:Once|Passive|Capture)$/;function d0(i){let e;if(Eh.test(i)){e={};let n;for(;n=i.match(Eh);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Br(i.slice(2)),e]}let Il=0;const p0=Promise.resolve(),m0=()=>Il||(p0.then(()=>Il=0),Il=Date.now());function g0(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Kn(_0(n,t.value),e,5,[n])};return t.value=i,t.attached=m0(),t}function _0(i,e){if(Ve(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Sh=/^on[a-z]/,v0=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?r0(i,n,s):e==="style"?o0(i,t,n):ol(e)?su(e)||f0(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):x0(i,e,n,s))?c0(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),l0(i,e,n,s))};function x0(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Sh.test(e)&&Ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Sh.test(e)&&Dt(t)?!1:e in i}const y0=["ctrl","shift","alt","meta"],M0={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>y0.some(t=>i[`${t}Key`]&&!e.includes(t))},Qt=(i,e)=>(t,...n)=>{for(let s=0;s<e.length;s++){const r=M0[e[s]];if(r&&r(t,e))return}return i(t,...n)},E0=dn({patchProp:v0},s0);let Th;function S0(){return Th||(Th=N_(E0))}const T0=(...i)=>{const e=S0().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=A0(n);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function A0(i){return Dt(i)?document.querySelector(i):i}const b0=501,Us=()=>{const i=ft(window.innerWidth),e=ft(window.innerHeight),t=()=>{i.value=window.innerWidth,e.value=window.innerHeight};Gr(()=>window.addEventListener("resize",t)),Wr(()=>window.removeEventListener("resize",t));const n=Gt(()=>i.value<b0?"xs":"md");return{width:Gt(()=>i.value),type:n}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const or=typeof window<"u";function w0(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const at=Object.assign;function Dl(i,e){const t={};for(const n in e){const s=e[n];t[n]=$n(s)?s.map(i):i(s)}return t}const To=()=>{},$n=Array.isArray,R0=/\/$/,C0=i=>i.replace(R0,"");function Nl(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=D0(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function P0(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ah(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function L0(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&Ar(e.matched[n],t.matched[s])&&Bp(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Ar(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Bp(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!I0(i[t],e[t]))return!1;return!0}function I0(i,e){return $n(i)?bh(i,e):$n(e)?bh(e,i):i===e}function bh(i,e){return $n(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function D0(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let s=t.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var Uo;(function(i){i.pop="pop",i.push="push"})(Uo||(Uo={}));var Ao;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Ao||(Ao={}));function N0(i){if(!i)if(or){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),C0(i)}const U0=/^[^#]+#/;function O0(i,e){return i.replace(U0,"#")+e}function F0(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const gl=()=>({left:window.pageXOffset,top:window.pageYOffset});function B0(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=F0(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function wh(i,e){return(history.state?history.state.position-e:-1)+i}const Vc=new Map;function k0(i,e){Vc.set(i,e)}function H0(i){const e=Vc.get(i);return Vc.delete(i),e}let z0=()=>location.protocol+"//"+location.host;function kp(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ah(l,"")}return Ah(t,i)+n+s}function V0(i,e,t,n){let s=[],r=[],o=null;const a=({state:f})=>{const d=kp(i,location),g=t.value,_=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else n(d);s.forEach(p=>{p(t.value,g,{delta:m,type:Uo.pop,direction:m?m>0?Ao.forward:Ao.back:Ao.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(at({},f.state,{scroll:gl()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Rh(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?gl():null}}function G0(i){const{history:e,location:t}=window,n={value:kp(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:z0()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=at({},e.state,Rh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=at({},s.value,e.state,{forward:l,scroll:gl()});r(u.current,u,!0);const h=at({},Rh(n.value,l,null),{position:u.position+1},c);r(l,h,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function W0(i){i=N0(i);const e=G0(i),t=V0(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=at({location:"",base:i,go:n,createHref:O0.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Y0(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),W0(i)}function X0(i){return typeof i=="string"||i&&typeof i=="object"}function Hp(i){return typeof i=="string"||typeof i=="symbol"}const Oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zp=Symbol("");var Ch;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Ch||(Ch={}));function br(i,e){return at(new Error,{type:i,[zp]:!0},e)}function pi(i,e){return i instanceof Error&&zp in i&&(e==null||!!(i.type&e))}const Ph="[^/]+?",K0={sensitive:!1,strict:!1,start:!0,end:!0},j0=/[.+*?^${}()[\]/\\]/g;function q0(i,e){const t=at({},K0,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(j0,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=f;r.push({name:g,repeatable:_,optional:m});const A=p||Ph;if(A!==Ph){d+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+E.message)}}let x=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),s+=x,d+=20,m&&(d+=-8),_&&(d+=-20),A===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if($n(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=$n(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function $0(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Z0(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=$0(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(Lh(n))return 1;if(Lh(s))return-1}return s.length-n.length}function Lh(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const J0={type:0,value:""},Q0=/[a-zA-Z0-9_]/;function ev(i){if(!i)return[[]];if(i==="/")return[[J0]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:Q0.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function tv(i,e,t){const n=q0(ev(i.path),t),s=at(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function nv(i,e){const t=[],n=new Map;e=Nh({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,f){const d=!f,g=iv(u);g.aliasOf=f&&f.record;const _=Nh(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of x)m.push(at({},g,{components:f?f.record.components:g.components,path:E,aliasOf:f?f.record:g}))}let p,A;for(const x of m){const{path:E}=x;if(h&&E[0]!=="/"){const C=h.record.path,I=C[C.length-1]==="/"?"":"/";x.path=h.record.path+(E&&I+E)}if(p=tv(x,h,_),f?f.alias.push(p):(A=A||p,A!==p&&A.alias.push(p),d&&u.name&&!Dh(p)&&o(u.name)),g.children){const C=g.children;for(let I=0;I<C.length;I++)r(C[I],p,f&&f.children[I])}f=f||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return A?()=>{o(A)}:To}function o(u){if(Hp(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Z0(u,t[h])>=0&&(u.record.path!==t[h].record.path||!Vp(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Dh(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},g,_;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw br(1,{location:u});_=f.record.name,d=at(Ih(h.params,f.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Ih(u.params,f.keys.map(A=>A.name))),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(A=>A.re.test(g)),f&&(d=f.parse(g),_=f.record.name);else{if(f=h.name?n.get(h.name):t.find(A=>A.re.test(h.path)),!f)throw br(1,{location:u,currentLocation:h});_=f.record.name,d=at({},h.params,u.params),g=f.stringify(d)}const m=[];let p=f;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:rv(m)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ih(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function iv(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:sv(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function sv(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Dh(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function rv(i){return i.reduce((e,t)=>at(e,t.meta),{})}function Nh(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Vp(i,e){return e.children.some(t=>t===i||Vp(i,t))}const Gp=/#/g,ov=/&/g,av=/\//g,lv=/=/g,cv=/\?/g,Wp=/\+/g,uv=/%5B/g,hv=/%5D/g,Yp=/%5E/g,fv=/%60/g,Xp=/%7B/g,dv=/%7C/g,Kp=/%7D/g,pv=/%20/g;function Su(i){return encodeURI(""+i).replace(dv,"|").replace(uv,"[").replace(hv,"]")}function mv(i){return Su(i).replace(Xp,"{").replace(Kp,"}").replace(Yp,"^")}function Gc(i){return Su(i).replace(Wp,"%2B").replace(pv,"+").replace(Gp,"%23").replace(ov,"%26").replace(fv,"`").replace(Xp,"{").replace(Kp,"}").replace(Yp,"^")}function gv(i){return Gc(i).replace(lv,"%3D")}function _v(i){return Su(i).replace(Gp,"%23").replace(cv,"%3F")}function vv(i){return i==null?"":_v(i).replace(av,"%2F")}function Ga(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function xv(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Wp," "),o=r.indexOf("="),a=Ga(o<0?r:r.slice(0,o)),l=o<0?null:Ga(r.slice(o+1));if(a in e){let c=e[a];$n(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Uh(i){let e="";for(let t in i){const n=i[t];if(t=gv(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}($n(n)?n.map(r=>r&&Gc(r)):[n&&Gc(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function yv(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=$n(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const Mv=Symbol(""),Oh=Symbol(""),Tu=Symbol(""),jp=Symbol(""),Wc=Symbol("");function Jr(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function Xi(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(br(4,{from:t,to:e})):h instanceof Error?a(h):X0(h)?a(br(2,{from:e,to:h})):(r&&n.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ul(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Ev(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Xi(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=w0(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Xi(f,t,n,r,o)()}))}}return s}function Ev(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Fh(i){const e=Ai(Tu),t=Ai(jp),n=Gt(()=>e.resolve(W(i.to))),s=Gt(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ar.bind(null,u));if(f>-1)return f;const d=Bh(l[c-2]);return c>1&&Bh(u)===d&&h[h.length-1].path!==d?h.findIndex(Ar.bind(null,l[c-2])):f}),r=Gt(()=>s.value>-1&&Av(t.params,n.value.params)),o=Gt(()=>s.value>-1&&s.value===t.matched.length-1&&Bp(t.params,n.value.params));function a(l={}){return Tv(l)?e[W(i.replace)?"replace":"push"](W(i.to)).catch(To):Promise.resolve()}return{route:n,href:Gt(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const Sv=pn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fh,setup(i,{slots:e}){const t=ci(Fh(i)),{options:n}=Ai(Tu),s=Gt(()=>({[kh(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[kh(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:Fp("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),vo=Sv;function Tv(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function Av(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!$n(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function Bh(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const kh=(i,e,t)=>i??e??t,bv=pn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Ai(Wc),s=Gt(()=>i.route||n.value),r=Ai(Oh,0),o=Gt(()=>{let c=W(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Gt(()=>s.value.matched[o.value]);Ca(Oh,Gt(()=>o.value+1)),Ca(Mv,a),Ca(Wc,s);const l=ft();return bi(()=>[l.value,a.value,i.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ar(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return Hh(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Fp(f,at({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Hh(t.default,{Component:m,route:c})||m}}});function Hh(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const qp=bv;function wv(i){const e=nv(i.routes,i),t=i.parseQuery||xv,n=i.stringifyQuery||Uh,s=i.history,r=Jr(),o=Jr(),a=Jr(),l=Yg(Oi);let c=Oi;or&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dl.bind(null,H=>""+H),h=Dl.bind(null,vv),f=Dl.bind(null,Ga);function d(H,se){let $,G;return Hp(H)?($=e.getRecordMatcher(H),G=se):G=H,e.addRoute(G,$)}function g(H){const se=e.getRecordMatcher(H);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function p(H,se){if(se=at({},se||l.value),typeof H=="string"){const b=Nl(t,H,se.path),P=e.resolve({path:b.path},se),q=s.createHref(b.fullPath);return at(b,P,{params:f(P.params),hash:Ga(b.hash),redirectedFrom:void 0,href:q})}let $;if("path"in H)$=at({},H,{path:Nl(t,H.path,se.path).path});else{const b=at({},H.params);for(const P in b)b[P]==null&&delete b[P];$=at({},H,{params:h(H.params)}),se.params=h(se.params)}const G=e.resolve($,se),J=H.hash||"";G.params=u(f(G.params));const oe=P0(n,at({},H,{hash:mv(J),path:G.path})),F=s.createHref(oe);return at({fullPath:oe,hash:J,query:n===Uh?yv(H.query):H.query||{}},G,{redirectedFrom:void 0,href:F})}function A(H){return typeof H=="string"?Nl(t,H,l.value.path):at({},H)}function x(H,se){if(c!==H)return br(8,{from:se,to:H})}function E(H){return w(H)}function C(H){return E(at(A(H),{replace:!0}))}function I(H){const se=H.matched[H.matched.length-1];if(se&&se.redirect){const{redirect:$}=se;let G=typeof $=="function"?$(H):$;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=A(G):{path:G},G.params={}),at({query:H.query,hash:H.hash,params:"path"in G?{}:H.params},G)}}function w(H,se){const $=c=p(H),G=l.value,J=H.state,oe=H.force,F=H.replace===!0,b=I($);if(b)return w(at(A(b),{state:typeof b=="object"?at({},J,b.state):J,force:oe,replace:F}),se||$);const P=$;P.redirectedFrom=se;let q;return!oe&&L0(n,G,$)&&(q=br(16,{to:P,from:G}),_e(G,G,!0,!1)),(q?Promise.resolve(q):S(P,G)).catch(K=>pi(K)?pi(K,2)?K:me(K):he(K,P,G)).then(K=>{if(K){if(pi(K,2))return w(at({replace:F},A(K.to),{state:typeof K.to=="object"?at({},J,K.to.state):J,force:oe}),se||P)}else K=L(P,G,!0,F,J);return M(P,G,K),K})}function U(H,se){const $=x(H,se);return $?Promise.reject($):Promise.resolve()}function S(H,se){let $;const[G,J,oe]=Rv(H,se);$=Ul(G.reverse(),"beforeRouteLeave",H,se);for(const b of G)b.leaveGuards.forEach(P=>{$.push(Xi(P,H,se))});const F=U.bind(null,H,se);return $.push(F),ks($).then(()=>{$=[];for(const b of r.list())$.push(Xi(b,H,se));return $.push(F),ks($)}).then(()=>{$=Ul(J,"beforeRouteUpdate",H,se);for(const b of J)b.updateGuards.forEach(P=>{$.push(Xi(P,H,se))});return $.push(F),ks($)}).then(()=>{$=[];for(const b of H.matched)if(b.beforeEnter&&!se.matched.includes(b))if($n(b.beforeEnter))for(const P of b.beforeEnter)$.push(Xi(P,H,se));else $.push(Xi(b.beforeEnter,H,se));return $.push(F),ks($)}).then(()=>(H.matched.forEach(b=>b.enterCallbacks={}),$=Ul(oe,"beforeRouteEnter",H,se),$.push(F),ks($))).then(()=>{$=[];for(const b of o.list())$.push(Xi(b,H,se));return $.push(F),ks($)}).catch(b=>pi(b,8)?b:Promise.reject(b))}function M(H,se,$){for(const G of a.list())G(H,se,$)}function L(H,se,$,G,J){const oe=x(H,se);if(oe)return oe;const F=se===Oi,b=or?history.state:{};$&&(G||F?s.replace(H.fullPath,at({scroll:F&&b&&b.scroll},J)):s.push(H.fullPath,J)),l.value=H,_e(H,se,$,F),me()}let V;function O(){V||(V=s.listen((H,se,$)=>{if(!ce.listening)return;const G=p(H),J=I(G);if(J){w(at(J,{replace:!0}),G).catch(To);return}c=G;const oe=l.value;or&&k0(wh(oe.fullPath,$.delta),gl()),S(G,oe).catch(F=>pi(F,12)?F:pi(F,2)?(w(F.to,G).then(b=>{pi(b,20)&&!$.delta&&$.type===Uo.pop&&s.go(-1,!1)}).catch(To),Promise.reject()):($.delta&&s.go(-$.delta,!1),he(F,G,oe))).then(F=>{F=F||L(G,oe,!1),F&&($.delta&&!pi(F,8)?s.go(-$.delta,!1):$.type===Uo.pop&&pi(F,20)&&s.go(-1,!1)),M(G,oe,F)}).catch(To)}))}let re=Jr(),le=Jr(),ue;function he(H,se,$){me(H);const G=le.list();return G.length?G.forEach(J=>J(H,se,$)):console.error(H),Promise.reject(H)}function j(){return ue&&l.value!==Oi?Promise.resolve():new Promise((H,se)=>{re.add([H,se])})}function me(H){return ue||(ue=!H,O(),re.list().forEach(([se,$])=>H?$(H):se()),re.reset()),H}function _e(H,se,$,G){const{scrollBehavior:J}=i;if(!or||!J)return Promise.resolve();const oe=!$&&H0(wh(H.fullPath,0))||(G||!$)&&history.state&&history.state.scroll||null;return gp().then(()=>J(H,se,oe)).then(F=>F&&B0(F)).catch(F=>he(F,H,se))}const Ae=H=>s.go(H);let De;const Je=new Set,ce={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:i,push:E,replace:C,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:j,install(H){const se=this;H.component("RouterLink",vo),H.component("RouterView",qp),H.config.globalProperties.$router=se,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>W(l)}),or&&!De&&l.value===Oi&&(De=!0,E(s.location).catch(J=>{}));const $={};for(const J in Oi)$[J]=Gt(()=>l.value[J]);H.provide(Tu,se),H.provide(jp,ci($)),H.provide(Wc,l);const G=H.unmount;Je.add(H),H.unmount=function(){Je.delete(H),Je.size<1&&(c=Oi,V&&V(),V=null,l.value=Oi,De=!1,ue=!1),G()}}};return ce}function ks(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Rv(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>Ar(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Ar(c,l))||s.push(l))}return[t,n,s]}const $p=i=>(zr("data-v-4526919f"),i=i(),Vr(),i),Cv={key:0,class:"pt-2 mx-2 nav-bar d-flex justify-content-start"},Pv={class:"d-flex"},Lv={class:"material-icons-outlined"},Iv={class:"page-name"},Dv={class:"dropdown"},Nv=$p(()=>D("button",{class:"btn btn-sm d-flex dropdown-toggle p-0 align-items-center",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[D("span",{class:"material-icons-outlined"},"gamepad"),ht(" Games ")],-1)),Uv={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},Ov={class:"d-flex"},Fv={class:"page-name"},Bv={key:1},kv={key:0,class:"col nav-menu"},Hv={class:"material-icons-outlined"},zv={class:"dropdown xs-nav mx-2"},Vv=$p(()=>D("button",{class:"btn btn-sm d-flex dropdown-toggle p-0 align-items-center",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[D("span",{class:"material-icons-outlined mr-2"},"gamepad"),ht(" Games ")],-1)),Gv={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},Wv={class:"d-flex"},Yv={class:"page-name"},Xv={class:"viewport"},Kv=pn({__name:"App",setup(i){const{type:e}=Us(),t=ft(!1),n=[{name:"Home",icon:"home",route:"/"},{name:"Coursework",icon:"book",route:"/coursework"},{name:"Projects",icon:"collections",route:"/projects"},{name:"Interests",icon:"interests",route:"/interests"},{name:"Demo",icon:"construction",route:"/demo"}],s=[{name:"Shooter",route:"/games/shooter"},{name:"Danmaku",route:"/games/danmaku"},{name:"Star rail",route:"/games/starrail"}];return(r,o)=>(Ee(),Te(nt,null,[D("header",{class:Tt({header:t.value&&W(e)==="xs"})},[W(e)!=="xs"?(Ee(),Te("div",Cv,[(Ee(),Te(nt,null,Mt(n,a=>At(W(vo),{key:a.name,class:"router-link mx-2",to:a.route},{default:_o(()=>[D("label",Pv,[D("span",Lv,gt(a.icon),1),D("span",Iv,gt(a.name),1)])]),_:2},1032,["to"])),64)),D("div",Dv,[Nv,D("div",Uv,[(Ee(),Te(nt,null,Mt(s,a=>At(W(vo),{key:a.name,class:"dropdown-item px-2 d-inline-block router-link",to:a.route},{default:_o(()=>[D("label",Ov,[D("span",Fv,gt(a.name),1)])]),_:2},1032,["to"])),64))])])])):(Ee(),Te("div",Bv,[D("div",{onClick:o[0]||(o[0]=a=>t.value=!t.value),class:"ml-3 mt-3 material-icons-outlined"},gt(t.value?"close":"menu"),1),t.value&&W(e)==="xs"?(Ee(),Te("div",kv,[(Ee(),Te(nt,null,Mt(n,a=>D("div",{key:a.name,class:"xs-nav row mx-2"},[D("span",Hv,gt(a.icon),1),At(W(vo),{onClick:o[1]||(o[1]=l=>t.value=!1),to:a.route,class:"xs-nav row mx-2"},{default:_o(()=>[ht(gt(a.name),1)]),_:2},1032,["to"])])),64)),D("div",zv,[Vv,D("div",Gv,[(Ee(),Te(nt,null,Mt(s,a=>At(W(vo),{key:a.name,class:"dropdown-item px-2 d-inline-block router-link",to:a.route,onClick:o[2]||(o[2]=l=>t.value=!1)},{default:_o(()=>[D("label",Wv,[D("span",Yv,gt(a.name),1)])]),_:2},1032,["to"])),64))])])])):Ut("",!0)]))],2),D("div",Xv,[At(W(qp))])],64))}});const ls=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},jv=ls(Kv,[["__scopeId","data-v-4526919f"]]),qv="/assets/dp-80d30b39.jpg",$v="/assets/Lu-Yunkun-c1577533.pdf",Zv={class:"col mt-4"},Jv={class:"row d-flex align-items-center justify-content-center"},Qv={class:"col-auto"},ex=["src"],tx={class:"col-auto mw-90"},nx=D("h1",null,"Yunkun (Ricky) Lu",-1),ix=D("h2",null,"Software Engineer",-1),sx=["href"],rx=W_('<a href="https://www.linkedin.com/in/yunkun-lu/"><i class="mx-1 fa-icon fa fa-linkedin fa-lg"></i></a><a href="https://github.com/PaperbagLife"><i class="mx-1 fa-icon fa fa-github fa-lg"></i></a><a href="https://www.youtube.com/c/PaperbagLife"><i class="mx-1 fa-icon fa fa-youtube fa-lg"></i></a>',3),ox=D("br",null,null,-1),ax=D("br",null,null,-1),lx=D("br",null,null,-1),cx=D("b",null,"Contact:",-1),ux=pn({__name:"HomeView",setup(i){const{type:e}=Us();return(t,n)=>(Ee(),Te("main",null,[D("div",Zv,[D("div",Jv,[D("div",Qv,[D("img",{src:W(qv),width:"250",height:"250"},null,8,ex)]),D("div",tx,[D("div",{class:Tt(W(e)==="xs"?"col text-center":"")},[nx,ix,D("a",{class:Tt(["btn button px-4 mr-3",(W(e)==="xs","")]),href:W($v)}," Resume ",10,sx),rx],2),D("div",{class:Tt(W(e)==="xs"?"bio-xs":"")},[ht(" I obtained an undergraduate degree from Carnegie Mellon University. "),ox,ht(" I have attended many hackathons and developed a handful of games."),ax,ht(" I work as a software engineer for clockwork systems."),lx,cx,ht(" yunkunL@alumni.cmu.edu ")],2)])])])]))}});const hx={class:"col mt-2"},fx=D("h1",{class:"ml-2"},"Coursework",-1),dx={class:"row mx-0"},px=D("br",null,null,-1),mx=pn({__name:"CourseworkView",setup(i){const{type:e}=Us(),t=[{name:"Fall 2018:",courses:["15110 Principles of Computing","21122 Integration and Approximation","33121 Physics for Science Students","82171 Elementary Japanese 1"]},{name:"Spring 2019:",courses:["03121 Modern Biology","15112 Fundamentals of Programming and Computer Science","21127 Concepts of Mathematics","21241 Matrices and Linear Transformations","73102 Principles of Microeconomics","76107 Writing about Data","76108 Writing about Public Problems"]},{name:"Summer 1 2019:",courses:["21259 Calculus in 3D","21260 Differential Equations"]},{name:"Summer 2 2019:",courses:["15122 Principles of Imperative Computation"]},{name:"Fall 2019:",courses:["15150 Principles of Functional Programming","15251 Great Ideas in Theoretical Computer Science","21295 Putnam Seminar","21325 Probability","88120 Reason, Passion, and Cognition"]},{name:"Spring 2020:",courses:["15210 Parallel and Sequential Data Structures and Algorithms","15213 Introduction to Computer Systems","21270 Intro to Mathematical Finance","21380 Intro to Mathematical Modelling","38230 Engage in Wellness"]},{name:"Fall 2020:",courses:["10315 Machine Learning","15281 Artificial Intelligence: Representation and Problem Solving","21370 Discrete Time Finance","33104 Experimental Physics","76270 Writing for the Professions"]},{name:"Spring 2021:",courses:["21420 Continuous Time Finance","15451 Algorithms","15440 Distributed Systems","73103 Principles of Macro Economics","80100 Introduction to Philosophy"]},{name:"Fall 2021:",courses:["15462 Computer Graphics","15317 Constructive Logic","82279 Anime - Visual Interplay between Japan and the World","80283 IMHYSI(Linguistics) "]},{name:"Spring 2022:",courses:["15330 Introduction to Computer Security","33120 Science and Science Fiction","85102 Introduction to Psychology","15195 Competition Programming ","98012 Stuco: Fun with Robots"]}];return(n,s)=>(Ee(),Te("main",null,[D("div",hx,[fx,D("div",dx,[(Ee(),Te(nt,null,Mt(t,r=>D("div",{key:r.name,class:Tt(["border-top",W(e)==="xs"?"col-12":"col-6"])},[D("p",null,[D("b",null,gt(r.name),1)]),(Ee(!0),Te(nt,null,Mt(r.courses,o=>(Ee(),Te("p",{class:"mb-1",key:o},[ht(gt(o)+" ",1),px]))),128))],2)),64))])])]))}}),gx="/assets/couple_trouble-bbb9cd7f.png",_x="/assets/cv_shooter-24a43e22.png",vx="/assets/moba-4e90cc7a.png",xx="/assets/Shopsim-32b9714b.png",yx="/assets/starrail-76eda31b.png",Mx={class:"col mt-2"},Ex=D("h1",{class:"ml-2"},"Projects",-1),Sx={class:"row mx-0"},Tx=D("b",null,"League of Cylinders - C#, Unity",-1),Ax=D("br",null,null,-1),bx=D("i",null,"Sept 2021 - Oct 2021",-1),wx=D("br",null,null,-1),Rx=["src","width"],Cx=D("br",null,null,-1),Px=D("b",null,"ShopSim - C#, Unity",-1),Lx=D("br",null,null,-1),Ix=D("i",null,"Jan 2021",-1),Dx=D("br",null,null,-1),Nx=["src","width"],Ux=D("br",null,null,-1),Ox=D("br",null,null,-1),Fx=D("a",{href:"https://www.youtube.com/watch?v=bK8pCRX2u8I"},"Here",-1),Bx=D("br",null,null,-1),kx=D("b",null,"Couple Trouble - Python, Pygames, OpenCV",-1),Hx=D("br",null,null,-1),zx=D("i",null,"Feb 2020",-1),Vx=D("br",null,null,-1),Gx=["src","width"],Wx=D("br",null,null,-1),Yx=D("br",null,null,-1),Xx=D("a",{href:"https://www.youtube.com/watch?v=w7r6SNbJifU"},"Here",-1),Kx=D("br",null,null,-1),jx=D("b",null,"CV Shooter- Python, Pygames, OpenCV",-1),qx=D("br",null,null,-1),$x=D("i",null,"Feb 2020",-1),Zx=D("br",null,null,-1),Jx=["src","width"],Qx=D("br",null,null,-1),ey=D("br",null,null,-1),ty=D("a",{href:"https://www.youtube.com/watch?v=WvnU6LHCbh4"},"Here",-1),ny=D("br",null,null,-1),iy=D("b",null,"Cosmo Rail - Vue, Typescript",-1),sy=D("br",null,null,-1),ry=D("i",null,"Sept 2023 - Ongoing",-1),oy=D("br",null,null,-1),ay=["src","width"],ly=D("br",null,null,-1),cy=D("b",null,"Games",-1),uy=D("p",null,[D("b",null,"Enter the Arena - C#, Unity"),D("br"),D("i",null,"Sept 2018 - Dec 2018"),D("br"),ht(" In my first year, I joined the Game Creation Society at CMU and worked with a team of 9 people."),D("br"),ht(" We created a 3D VR hack and slash game made for the HTC Vive headset. I worked on the enemy attack logic and did some testing for the game. "),D("br"),D("a",{href:"https://www.gamecreation.org/games/enter_the_arena"},"Here"),ht(" is a link to the GCS website ")],-1),hy=[uy],fy=pn({__name:"ProjectsView",setup(i){const{width:e,type:t}=Us(),n=.84;return(s,r)=>(Ee(),Te("main",null,[D("div",Mx,[Ex,D("div",Sx,[D("div",{class:Tt(["border-top",W(t)==="xs"?"col-12":"col-6"])},[D("p",null,[Tx,Ax,bx,wx,D("img",{src:W(vx),width:(W(t)==="xs"?W(e):W(e)/2)*n},null,8,Rx),Cx,ht(" Inspired by my previous project that used unity navigation, I wanted to try recreating the basic structure of the popular game League of Legends. I created characters that attacks, casts projectiles, and navigates around the terrain. ")])],2),D("div",{class:Tt(["border-top",W(t)==="xs"?"col-12":"col-6"])},[D("p",null,[Px,Lx,Ix,Dx,D("img",{src:W(xx),width:W(e)/2*n},null,8,Nx),Ux,ht(" I created a fully animated 3D animation/simulation of shoppers walking around a shop. "),Ox,Fx,ht(" is a link to a YouTube video about this project. "),Bx,ht(" I used Unity's navigation to make pathing calculated at real time. I used finalIK to make realistic animations for the shoppers' 3D model. The simulation records paths of each shopper when they choose a destination to walk towards. ")])],2),D("div",{class:Tt(["border-top",W(t)==="xs"?"col-12":"col-6"])},[D("p",null,[kx,Hx,zx,Vx,D("img",{src:W(gx),width:W(e)/2*n},null,8,Gx),Wx,ht(' I lead a team of 4 in Tartan Hacks 2020 and we won the "Best Valentines Hack" award.'),Yx,Xx,ht(" is a link to a YouTube video about this game."),Kx,ht(" I was the main programmer for the game system. I used OpenCV to implement a control system that detects two different colors. The players has to hold hands wearing rings to control the car and avoid obstacles. This was an interesting take on the valentine theme, so we stood out and won. ")])],2),D("div",{class:Tt(["border-top",W(t)==="xs"?"col-12":"col-6"])},[D("p",null,[jx,qx,$x,Zx,D("img",{src:W(_x),width:W(e)/2*n},null,8,Jx),Qx,ht(" This was my 15-112 Project."),ey,ty,ht(" is a link to a YouTube video about this game."),ny,ht(" It is a top-down space shooter game. I used OpenCV to implement a control system that detects a red color. The game uses a dynamic difficulty system that adjusts itself to the player's performance. The boss has various different attack patterns and a cool laser attack. ")])],2),D("div",{class:Tt(["border-top",W(t)==="xs"?"col-12":"col-6"])},[D("p",null,[iy,sy,ry,oy,D("img",{src:W(yx),width:W(e)/2*n},null,8,ay),ly,ht(" After I started working on UI for my job, I thought I could use my newfound knowledge to make games using Vue and Typescript. I have made several minigames on my personal website, you can see them under the "),cy,ht(" section on this website. The screenshot above is a turn based game with animations using css. ")])],2),D("div",{class:Tt(["border-top",W(t)==="xs"?"col-12":"col-6"])},hy,2)])])]))}}),dy={class:"col mt-2"},py=D("h1",{class:"ml-2"},"Interests",-1),my={class:"row mx-0"},gy=D("p",null,[D("b",null,"Violin"),D("br"),D("i",null,"2006 - present"),D("br"),ht(" Music has been a major part of my life. Unlike many others that would leave their instruments to gather dust after getting their shiny certificates, I still play violin on a weekly basis. I make covers of the songs I love, mostly J-pop and Vocaloid songs"),D("br"),D("a",{href:"https://www.youtube.com/c/PaperbagLife"},"Here"),ht(" is a link to my YouTube Channel. ")],-1),_y=[gy],vy=D("p",null,[D("b",null,"Gaming/Game Design"),D("br"),D("i",null,"2010 - present"),D("br"),ht(" I have played countless games since I got a PSP in 2012. Evetually, I started developing interest towards making a game myself. Tools I have used so far: RPG Maker series, Powerpoint, Scratch, GameMaker, Pygame, Unity, Vue (see "),D("b",null,"Games"),ht(" section above) ")],-1),xy=[vy],yy=pn({__name:"InterestsView",setup(i){const{type:e}=Us();return(t,n)=>(Ee(),Te("main",null,[D("div",dy,[py,D("div",my,[D("div",{class:Tt(["border-top",W(e)==="xs"?"col-12":"col-6"])},_y,2),D("div",{class:Tt(["border-top",W(e)==="xs"?"col-12":"col-6"])},xy,2)])])]))}}),My="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABLCAYAAACSoX4TAAAACXBIWXMAABnWAAAZ1gEY0crtAAADw0lEQVR4Xu2dzY7TMBCAt5S/M1w5IvFgPMiKB+HBkDhyhTuIbbHLppt13Y7jzPgvX6WVdpt44nzzdew4q/TujhcEDAjsDGIOF/J4/+k4P6ndl28v3N/P3hvupFeeEGJFAIYiSYydaHAMIG0eyFKJJMmm7VuvapsTy0okSbitiTa8WLVEio2w7r0z79FFG0qshiSSClh0+0hztZ7F2jmRDrMMPbjf91kZbaeRv9Icoqp1JVbvFWmtvz1VtKbF2rpIkohONF+h51VbalJsezNiIZFOzlupatXEQiQdkaQota4+S4kVTrQlHmw3IlBKNDOxqEhGZiiHtRJNRSwkUs525XAa87QssRCpcuYLHz6nqiWJhUiFM9n44VIqWkwsJtqNJ7bF7oWyTWIhU4vZ6rBP07B5EouhrsMMNtxlX738v9jygoA6AcRSR0pATwCx8MCEAGKZYCUoYuGACQHEMsFKUMTCARMCiGWClaCIhQMmBBDLBCtBEQsHTAgglglWgiIWDpgQQCwTrARFLBwwIfDSJKoL+uurf5TC/9e7z70/UsGK0rhxTSrWXCqPLvx7XJyc2UTArGKBuG0C1iOKScVqGym9KzGiIBaemRBALBOsBEUsHDAhgFgLsPq5CVe4acAQK43TM6GQS4aGWDKjaJVCrtvgECtBLHZZTgCxljOjRQIBVt5vQJKGu2k790IvIVKxroglSTVvtmTfhA/7ELsg1hBpbO8kEKu9nAzRI8QaIo3tnQRiXckJE/J1siLWOn6n1kjIVaGCRoRIIXCqWCmPV04Jxj4QmFw6L5A+vsHTk3Eji0BYnMKV92OsevFU5dus/QLp1uZZ0iiXdEsnDLIF0VhNf/owSRLFPnZJYoUNtyha1vjQZ6PD4ze3rup9lliSaD8/fPRfms2rIwI5VenW6bGO1VHyNbrqBHqrEUeKoVKxpINEljT2bp72N6VdrX38ZDx1ntXyxD3nK+E0mBcTK+jsQw/ztEmYa4K1KJT2kJYrWS2xLvrbg2i5kC3bKYrkv7BLbW5sIVbSl2tKsFlPuySkKJGEf/V2C7FWd+pagFpVLTbfKjEM9iRSmLOuxBKWObq/HdWzSDXFUh3DI1Xt4naU5h0Ciwo1kkg1xTIbIlOHTr+fpmxLTmhkiWIcuh4KlyR22rfUPK1DkdSuCE/rljnJEdrs3C2dQ7jP+x/fLY6l3v3citaZSHuXo/MCtcuNLzBPD41VoGqV7Neu47+n/rmOv3G//1Hob5UQoWydSVSFmeVBvbSv3A/3Iy0pExsCWyLwD7VQAps5Z2OfAAAAAElFTkSuQmCC",Au=i=>(zr("data-v-72604756"),i=i(),Vr(),i),Ey={class:"col d-flex justify-content-center player-score"},Sy={class:"col justify-content-center restart-button-wrapper"},Ty={class:"col d-flex justify-content-center"},Ay={class:"game-viewport"},by={class:"hp-container"},wy={key:0,class:"map-container"},Ry={class:"map-content"},Cy=Au(()=>D("span",{class:"end-flag material-icons-outlined"},"sports_score",-1)),Py=Au(()=>D("div",{class:"map-line"},null,-1)),Ly=["height","width"],Iy=["x","y"],Dy=["x","y"],Ny=["x","y"],Uy=Au(()=>D("span",{class:"material-icons-outlined player-icon"}," navigation ",-1)),Oy=[Uy],Fy=["cx","cy"],By=["x","y"],ky=["width","height","x","y"],Hy=["x","y"],zy=["cx","cy"],Vy=["x","y"],Gy=["href","width","height","x","y"],Wy=["x","y"],Yy={key:0,class:"row d-flex justify-content-center hint"},Xy={class:"row d-flex justify-content-center"},Ky={class:"mx-2 d-flex justify-content-center"},jy={class:"row d-flex justify-content-center"},qy=pn({__name:"ShooterGameView",setup(i){const{type:e}=Us(),t=ft(!0),n=ft(!1),s=20,r=30,o=1,a=40,l=1.3,c=80;let u=0,h=300,f=10,d=0;const g=ft([]),_=ft(null),m=ft([]),p=ft([]),A=ft(0),x={width:300,height:400},E=ft({x:(x.width-s)/2,y:x.height-r-10,hp:5,invulTimer:0}),C=ft({up:!1,down:!1,left:!1,right:!1}),I=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"]);function w(G){n.value&&G.key===" "&&se(),I.has(G.key)&&G.preventDefault(),(G.key==="ArrowUp"||G.key==="w")&&(C.value.up=!0),(G.key==="ArrowDown"||G.key==="s")&&(C.value.down=!0),(G.key==="ArrowLeft"||G.key==="a")&&(C.value.left=!0),(G.key==="ArrowRight"||G.key==="d")&&(C.value.right=!0)}function U(G){I.has(G.key)&&G.preventDefault(),(G.key==="ArrowUp"||G.key==="w")&&(C.value.up=!1),(G.key==="ArrowDown"||G.key==="s")&&(C.value.down=!1),(G.key==="ArrowLeft"||G.key==="a")&&(C.value.left=!1),(G.key==="ArrowRight"||G.key==="d")&&(C.value.right=!1)}function S(){C.value.up&&E.value.y-o>0&&(E.value.y-=o),C.value.down&&E.value.y+o+r<x.height&&(E.value.y+=o),C.value.left&&E.value.x-o>0&&(E.value.x-=o),C.value.right&&E.value.x+o+s<x.width&&(E.value.x+=o)}function M(){E.value.invulTimer>0||(E.value.hp-=1,E.value.invulTimer=c)}function L(){u+=1,u>a&&(u=0,m.value.push({x:E.value.x+s/2,y:E.value.y,xVel:0,yVel:-l,color:"#66ccff",timestamp:Date.now()})),E.value.invulTimer>0&&(E.value.invulTimer-=1)}let V=!1;const O=10,re=G=>G.y<=O*2?0:(G.x+G.width+O>x.width&&(G.movingRight=!1),G.x<0+O&&(G.movingRight=!0),G.movingRight?.4:-.4);let le=0;const ue=90;let he=!0;function j(G){if(!(G.y<O*2)&&(le+=1,le>ue)){le=0;let J=G.x+15;he&&(J=G.x+85);for(let oe=0;oe<8;oe++){const F=-Math.sqrt(3)*Math.cos(Math.PI*2/3/8*oe)- -Math.sin(Math.PI*2/3/8*oe),b=Math.sqrt(3)*Math.sin(Math.PI*2/3/8*oe)+Math.cos(Math.PI*2/3/8*oe),P={x:J,y:G.y+G.height,xVel:F,yVel:b,timestamp:Date.now(),color:"#ed2b2a"};p.value.push(P)}he=!he}}function me(){console.log("spawn boss");const G=x.width/3,J=x.width/6,oe={x:x.width/2-G/2,y:-J,hp:100,movingRight:!1,width:G,height:J,image:My,attack:j,xVel:re,yVel:F=>(console.log(F.y),F.y<O*2?.3:0)};_.value=oe,V=!0}function _e(){if(d+=1,d>=h&&!V){console.log("spawning enemy");const G=20+Math.random()*10,J={x:Math.max(G,Math.min(Math.random()*x.width,x.width-G)),y:-20,width:G,height:20+Math.random()*10,ySpeed:.5+Math.random()*.6,hp:3+Math.floor(Math.random()*2),color:Math.random()>.5?"#a0d8b3":"#9384d1",attackCounter:0,attackInterval:60+Math.random()*30};g.value.push(J),d=0,h=250+200*Math.random()}g.value.forEach((G,J)=>{const oe=new Set;if(G.y+=G.ySpeed,G.attackCounter+=1,G.attackCounter>=G.attackInterval){const F=E.value.x+s/2-(G.x+G.width/2),b=E.value.y-(G.y+G.height),P=Math.hypot(F,b);p.value.push({x:G.x+G.width/2,y:G.y+G.height,xVel:F/P*l,yVel:b/P*l,timestamp:Date.now(),color:"#ed2b2a"}),G.attackCounter=0}G.hp<=0&&(oe.add(J),A.value+=1),G.y>x.height&&oe.add(J),g.value=g.value.filter((F,b)=>!oe.has(b))})}function Ae(G,J,oe,F,b){return J+F>b.y-1&&J<b.y+1&&G+oe>b.x-1&&G<b.x+1}function De(){const G=new Set;m.value.forEach((J,oe)=>{if(J.x+=J.xVel,J.y+=J.yVel,J.x<0||J.x>x.width||J.y<0||J.y>x.height){G.add(oe);return}g.value.forEach(F=>{Ae(F.x,F.y,F.width,F.height,J)&&(G.add(oe),F.hp-=1)}),_.value&&Ae(_.value.x,_.value.y,_.value.width,_.value.height,J)&&(G.add(oe),_.value.hp-=1)}),m.value=m.value.filter((J,oe)=>!G.has(oe))}function Je(){const G=new Set;p.value.forEach((J,oe)=>{J.x+=J.xVel,J.y+=J.yVel,(J.x<0||J.x>x.width||J.y<0||J.y>x.height)&&G.add(oe),Ae(E.value.x,E.value.y,s,r,J)&&(M(),G.add(oe))}),p.value=p.value.filter((J,oe)=>!G.has(oe))}function ce(){_.value&&(_.value.attack(_.value),_.value.x+=_.value.xVel(_.value),_.value.y+=_.value.yVel(_.value),_.value.hp<=0&&(t.value=!1))}function H(){A.value>=f&&!V&&me(),S(),L(),_e(),De(),Je(),ce()}function se(){E.value={x:(x.width-s)/2,y:x.height-r-10,hp:5,invulTimer:0},A.value=0,t.value=!0,n.value=!1,g.value=[],m.value=[],p.value=[],_.value=null,V=!1}let $=ft(null);return bi(t,()=>{if(t.value)$.value=setInterval(H,10);else{if(!$.value)return;clearInterval($.value)}}),bi(()=>E.value.hp,G=>{G<=0&&(t.value=!1,n.value=!0)}),Gr(()=>{window.addEventListener("keydown",w),window.addEventListener("keyup",U),$.value=setInterval(H,10)}),Wr(()=>{window.removeEventListener("keydown",w),window.removeEventListener("keyup",U),$.value&&clearInterval($.value)}),(G,J)=>(Ee(),Te("main",{class:Tt(W(e))},[D("div",Ey,"Score: "+gt(A.value),1),D("div",Sy,[n.value?(Ee(),Te("button",{key:0,onClick:se,onTouchend:se,class:"restart-button btn btn-dark"}," Game Over! Start again? ",32)):Ut("",!0)]),D("div",Ty,[D("div",Ay,[D("div",by,[(Ee(!0),Te(nt,null,Mt([...Array(5).keys()],oe=>(Ee(),Te("span",{key:oe,class:"material-icons-outlined"},gt(oe<E.value.hp?"favorite":"favorite_border"),1))),128))]),W(V)?Ut("",!0):(Ee(),Te("div",wy,[D("div",Ry,[Cy,Py,D("span",{class:"player-map-icon material-icons-outlined",style:un({left:`${110*A.value/W(f)}px`})},"navigation",4)])])),(Ee(),Te("svg",{height:x.height,width:x.width},[D("g",{x:E.value.x,y:E.value.y},[D("rect",{class:Tt(["player",E.value.invulTimer>0?"invulnerable":""]),x:E.value.x,y:E.value.y,width:s,height:r,rx:"3"},null,10,Dy),(Ee(),Te("foreignObject",{x:E.value.x,y:E.value.y+r/3,width:s,height:r},Oy,8,Ny))],8,Iy),(Ee(!0),Te(nt,null,Mt(m.value,oe=>(Ee(),Te("circle",{class:"bullets",key:`${oe.timestamp}+${oe.color}`,style:un({"--color":oe.color}),cx:oe.x,cy:oe.y,r:2},null,12,Fy))),128)),(Ee(!0),Te(nt,null,Mt(g.value,oe=>(Ee(),Te("g",{key:`${oe.height} + ${oe.width}`,x:oe.x,y:oe.y},[D("rect",{style:un({"--color":oe.color}),class:"enemy",width:oe.width,height:oe.height,x:oe.x,y:oe.y},null,12,ky),D("text",{x:oe.x+oe.width/2,y:oe.y+oe.height/2,class:"small hp-display"},gt(oe.hp),9,Hy)],8,By))),128)),(Ee(!0),Te(nt,null,Mt(p.value,oe=>(Ee(),Te("circle",{class:"bullets",key:`${oe.timestamp}+${oe.color}`,style:un({"--color":oe.color}),cx:oe.x,cy:oe.y,r:2},null,12,zy))),128)),_.value?(Ee(),Te("g",{key:0,x:_.value.x,y:_.value.y},[D("image",{class:"live-boss",fill:"white",href:_.value.image,width:_.value.width,height:_.value.height,x:_.value.x,y:_.value.y},null,8,Gy),D("text",{x:_.value.x+_.value.width/2,y:_.value.y+_.value.height/2,class:"small hp-display"},gt(_.value.hp),9,Wy)],8,Vy)):Ut("",!0)],8,Ly))])]),D("div",{class:Tt(["col controls",W(e)==="xs"?"mt-2":""])},[W(e)!=="xs"?(Ee(),Te("div",Yy," You can use WASD/Arrow Keys too ")):Ut("",!0),D("div",Xy,[D("div",{onMousedown:J[0]||(J[0]=oe=>C.value.up=!0),onMouseup:J[1]||(J[1]=oe=>C.value.up=!1),onTouchstart:J[2]||(J[2]=Qt(oe=>C.value.up=!0,["prevent"])),onTouchend:J[3]||(J[3]=Qt(oe=>C.value.up=!1,["prevent"])),class:"justify-content-center align-items-center d-flex material-icons-outlined"}," expand_less ",32)]),D("div",Ky,[D("div",{onMousedown:J[4]||(J[4]=oe=>C.value.left=!0),onMouseup:J[5]||(J[5]=oe=>C.value.left=!1),onTouchstart:J[6]||(J[6]=Qt(oe=>C.value.left=!0,["prevent"])),onTouchend:J[7]||(J[7]=Qt(oe=>C.value.left=!1,["prevent"])),class:"mx-5 justify-content-center align-items-center d-flex material-icons-outlined"}," chevron_left ",32),D("div",{onMousedown:J[8]||(J[8]=oe=>C.value.right=!0),onMouseup:J[9]||(J[9]=oe=>C.value.right=!1),onTouchstart:J[10]||(J[10]=Qt(oe=>C.value.right=!0,["prevent"])),onTouchend:J[11]||(J[11]=Qt(oe=>C.value.right=!1,["prevent"])),class:"mx-5 justify-content-center align-items-center d-flex material-icons-outlined"}," chevron_right ",32)]),D("div",jy,[D("div",{onMousedown:J[12]||(J[12]=oe=>C.value.down=!0),onMouseup:J[13]||(J[13]=oe=>C.value.down=!1),onTouchstart:J[14]||(J[14]=Qt(oe=>C.value.down=!0,["prevent"])),onTouchend:J[15]||(J[15]=Qt(oe=>C.value.down=!1,["prevent"])),class:"justify-content-center align-items-center d-flex material-icons-outlined"}," expand_more ",32)])],2)],2))}});const $y=ls(qy,[["__scopeId","data-v-72604756"]]),Zy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACqCAYAAAA5gwS/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAAkkSURBVHhe7d19bNSFHcfxtpZnCptzQAR5qi2ttaJ1maO4R5D5sJEs21jcpKJSlw34w8YJnWO6mW0xy5wIUgWqPMSpWcLSoTIdYeBmsEAfaO+uD9Re7/rc6+Pd9fEePmvH4Sb7ttkS+vt9736fb/JKTPyDj797p9DaHnHn4+JApBUDJdUYKKnGQEk1BkqqMVBSjYGSagyUVGOgpBoDJdUYKKnGQEk1BkqqMVBSjYGSagyUVGOgpBoDJdUYKKnGQEk1nYHOmoOyeYthu+UW2KNdZgZsqamj0kb/+ZP/zpayDBVLlqAy5SbYM9JhS16CC9OF52FhCgOdh4a3uhFbF0LY24dg35V6Eag7B++p0/CdHnXiOHoOPwt3Tg6cOd9AdeaNqFhwHco/PRdlSbNQOmO68Lxim8JAF8F9yh95YXlAGGG/B8NVoyEXHUFr7l2wzZ+B8/HSs4s9CgO9Hu4TfZEXhyfeSB9GKk+he9d2OFfNR4n4HGMDA432G2rHwLsH0fpoZkyGykBj5cJeDL61F00P3IpS8blGJwYaaxfsgH9fHpxfvy0mQmWgMXoh99/heexulIvPOHow0Fi+UBf8e3JQnRa9n0gxUAvcyBubYE9dHJUfTRmoRS5Y/BIa1t2MC+Iz14uBWuma3oDzSytQHkVf5GegFrtw2U9hS5qN0gTp2evDQC14gXceg2Oq9Oz1YaCWvCAGnlsfFX8eZaCWPT/6fnwHysTXQA8GauXzfoDWdTeo/hopA7X4Bd57BnXLE4TXQQcGavkbgHdLmtqPogyUBzj/ANftM4XXwnwMlDd6AfjzVqj8KMpAeZfuo1fgWv1Z4fUwFwPlRc6Hvm2pwuthLgsHOgzfM9+HY+FSVKanw3Y1pCTDlr0eztwtaMzLu+TxfDT/uhC9Z4rhLy7DoLMVAd9QZIOyK89HpfiamMfCgXah95HrhF//6itJTYMtcyUcn7sdjpWZsGdmwpaWipofPoeec26EQpFJZl//GbRvSBH/G8zCQMUNRpmJiuR0OL72HbheeBdD/ZFpJt7Q77JVfbLEQMUNxitfuBy2O78L9/5ymPoB9YNHVX1jMwMVN5indGkmqjfsQb9ZH027jsH9+dniNjMwUHGDya5dCseap+Htikw18oJu9DzxRTU/EcpAxQ06lH7hl+gPROYadiEMFqxX811ODFTcoMSUJajZ/AqGI4uNuvCJHAY6Pgb6CTNugvvtzshmg676STVfD2Wg4gZdylbtQL+Rn9q3HsLFafIWozFQcYM2yXAdN+KZRM57Eo0r4oUdxmOg4gZtpsD2YKFxfxYdqUbXjntRIW4xFgMVNyg07R50G/a+vh3w7cqBTdphMAYqbtAoA83ngpHtk30D8L2YC4e4w1gMVNygUQbcf+mJbJ/sY6ATYKCi+Cw0HChFOLJ+co+BToCBihKy4dpfzEDNx0BFCavhOsBAFWCgstvQUPAhAzUfA5VlwHW0ObJ9so+BToCByoz8MlMvfLsfgl3cYSwGKm5QKPHL8LRGpk/2hZrR9+wGFd8wwkDFDfqUZD2NAWP+AAqM2OD53hJxh9EYqLhBm2Q4D9Ya9AnS6PUcg/NT0g7jMVBxgzLT7kRHW2S2EddSiNopwg4TMFBxgyKJ6ajffd64j55jV5LL76gfHwP9WOIC2Nfkw2/wzyUFj97PQMfHQP8lcSpKk7LRVmvUl5Yu3xAGnr+HgY6PgZ6PuwYlc1aj6T2DfxZp7IbK4dmcpebdRRiouMFE8UmwrduC9uPtkZ0GX8Nu1EwXdpmEgYobTJKwEBfzD8PfYvgPw398wde/qeqv8Wag4gaDJd6A2o3b0X6yxdjP1q+8cAd6t2bIG03CQMUNRkhAedYDaPrNXnQXN+p4C0bXy7h4rbTVPBYO1Adv3q2T88lAQsIlM5ei5v6H4X78CTTlP4XW3/4e7Xv2oevY39DvaEDANxLZouMChWvVvU+9hQMd/R3NeRY9+15F15tvovsq6Cl6B94PKzBYXYXBqlG19Rhu60ZoWMs71E5ww3Z0fGuB8HqYy9KB8v59waJH4EiSXg9zMVDe6O/tVWj/Kv+epP8RAzX6Aq9tQtV8HW91cyUGavXzvA33zdcIr4MODNTS14O+bXfBPk/nR88xDNTCFzi6ExeX641zDAO16rUXwZWu96/hvoyBWvGG/oGm7HRcmCs9f10YqOWuBT3596JS0XcsTYSBWuo88D7/EKqU/f/2iTBQy1wnfC9sgiMKflv/TwzUChfywL9nI+xzpOetGwON9es7A0/efbDN1f3lpPEw0Fg+5+twZU4TnnH0YKCxeMMueAu2oWbxVOH5RhcGGlMXRuBsAepvnI3SWdOFZxt9GGhMXBhBexFaN66FfZH+/zv0/2CgUX1BBCr+hNbN98GxbBEufEZ6ntGNgUbhhTvr4D+Uj7q7v4KqlSmomCE9x9jAQLVfaBBBjxuDJafR/eLP4c79AerWroItUXp2sYeBmn3hIELeToy4nRiqtmPg7En0vHYQnpd2oe1XO9G4dTPqv70GFRYJ8krWDrS7Hv7jf4X3/ffhmwynTqDvz39EV+Gr6Dx8BF1HxhxC5/4CtP1iO5p+9hSan9yBxh89iI+y5qEkXnoe1mbhQP3w/uQOVW/zQv/NwoFqfnc7uoyBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0oKBihtICwYqbiAtGKi4gbRgoOIG0kJhoMvQeDYQiWgybxi+rdcLvz5pojDQOFSsfRgtu/fCc+DA5Hh5L9p35qBmgfzrkx4qAyW6jIGSagyUVGOgpBoDJdUYKKnGQEk1BkqqMVBSjYGSagyUVGOgpBoDJdUYKKnGQEk1BkqqMVBSjYGSagyUVGOgpBoDJdUYKCkWh38CIOeYK885oYsAAAAASUVORK5CYII=";function Jy(i){return i<10?0:i<30?1:2}function Zp(i,e,t){return{x:Math.cos(t)*i-Math.sin(t)*e,y:Math.sin(t)*i+Math.cos(t)*e}}class Qy{constructor(e,t,n){ye(this,"cx");ye(this,"cy");ye(this,"maxHp");ye(this,"hp");ye(this,"power",0);ye(this,"invulTimer",0);ye(this,"homingFireTrigger",0);ye(this,"playerAttackCounter",0);this.maxHp=e,this.hp=e,this.cx=t,this.cy=n}getAttackInterval(e){return nM-e*5}attack(e){const t=Jy(this.power);if(this.playerAttackCounter+=1,this.playerAttackCounter<this.getAttackInterval(t))return;this.playerAttackCounter=0,this.homingFireTrigger-=1;const n=[{duration:-1,xVel:0,yVel:-2}];if(t!==2){const s=new Wn(this.cx,this.cy,2,2,n,"white",Date.now(),0);e.push(s)}else{const s=new Wn(this.cx-1,this.cy,2,2,n,"white",Date.now(),0),r=new Wn(this.cx+1,this.cy,2,2,n,"white",Date.now(),1);e.push(s),e.push(r)}if(this.homingFireTrigger<=0){const s=new Wn(this.cx,this.cy,3,3,n,"gold",Date.now()+1,0,!0,Wa.ENEMY);e.push(s),this.homingFireTrigger=3-t}}isAlive(){return this.hp>0}reset(){this.hp=this.maxHp}handleMovement(e){e.up&&this.cy-Fi-Is/2>0&&(this.cy-=Fi),e.down&&this.cy+Fi+Is/2<bs&&(this.cy+=Fi),e.left&&this.cx-Fi-wr/2>0&&(this.cx-=Fi),e.right&&this.cx+Fi+wr/2<Wt&&(this.cx+=Fi)}}let Jp=class{constructor(e,t,n,s,r,o,a,l,c,u,h){ye(this,"cx");ye(this,"cy");ye(this,"width");ye(this,"height");ye(this,"name");ye(this,"maxHp");ye(this,"hp");ye(this,"entrance");ye(this,"attackPatterns");ye(this,"attackIndex",0);ye(this,"attackTimer",0);ye(this,"attackIntervalTimer",0);ye(this,"speed");ye(this,"movePatterns");ye(this,"moveIndex",0);ye(this,"moveTimer",0);ye(this,"powerupSize");this.name=e,this.maxHp=t,this.hp=t,this.cx=n,this.cy=s,this.width=r,this.height=o,this.attackPatterns=a,this.movePatterns=c,this.speed=l,this.powerupSize=u,h?this.entrance=!0:this.entrance=!1}handleMovement(){if(this.entrance){this.cy+=.3,this.cy>50&&(this.entrance=!1);return}const e=this.movePatterns[this.moveIndex].duration;e!==-1&&this.moveTimer>e&&(this.moveTimer=0,this.moveIndex=(this.moveIndex+1)%this.movePatterns.length),this.moveTimer++;const t=this.movePatterns[this.moveIndex].xVel,n=this.movePatterns[this.moveIndex].yVel,s=Math.hypot(t,n);s!==0&&(this.cx=this.cx+t/s*this.speed,this.cy=this.cy+n/s*this.speed)}attack(e,t,n,s){if(this.entrance)return;const r=this.attackPatterns[this.attackIndex].duration;r!==-1&&this.attackTimer>r&&(this.attackTimer=0,this.attackIndex=(this.attackIndex+1)%this.attackPatterns.length,this.attackIntervalTimer=0);const o=this.attackPatterns[this.attackIndex];this.attackIntervalTimer<=0&&(o.attack(e,t,n,this.attackTimer,s),this.attackIntervalTimer=o.interval),this.attackTimer++,this.attackIntervalTimer--}spawnPowerUp(e){if(this.powerupSize!==0){const t=new eM(this.cx,this.cy,this.powerupSize);e.push(t)}}};class Wn{constructor(e,t,n,s,r,o,a,l,c,u){ye(this,"cx");ye(this,"cy");ye(this,"width");ye(this,"height");ye(this,"movePatterns");ye(this,"color");ye(this,"createdTimestamp");ye(this,"delete",!1);ye(this,"moveTimer",0);ye(this,"moveIndex",0);ye(this,"id");ye(this,"homing");ye(this,"target");ye(this,"lastDeltaX",0);ye(this,"lastDeltaY",-1);this.cx=e,this.cy=t,this.width=n,this.height=s,this.movePatterns=r,this.color=o,this.createdTimestamp=a,this.homing=c,this.target=u,this.id=l}update(e,t){const n=this.movePatterns[this.moveIndex].duration;n!==-1&&this.moveTimer>n&&(this.moveTimer=0,this.moveIndex=(this.moveIndex+1)%this.movePatterns.length);const s=this.movePatterns[this.moveIndex];let r=s.xVel,o=s.yVel;if(this.homing){let a=null;if(this.target===Wa.ENEMY&&e.length>0&&(a=e[0]),this.target===Wa.PLAYER&&(a=t),a){const l=a.cx-this.cx,c=a.cy-this.cy,u=Math.hypot(l,c),h=l/u,f=c/u;this.cx+=h,this.cy+=f,this.lastDeltaX=h,this.lastDeltaY=f}else this.cx+=this.lastDeltaX,this.cy+=this.lastDeltaY}else{if(s.rotation){const a=Zp(r,o,s.rotationDuration?s.rotation*this.moveTimer/s.rotationDuration:s.rotation);r=a.x,o=a.y}this.cx=this.cx+r,this.cy=this.cy+o}this.cx-this.width>Wt+In||this.cx+this.width<-In?this.delete=!0:(this.cy-this.height>bs+In||this.cy+this.height<-In)&&(this.delete=!0),this.moveTimer++}}class eM{constructor(e,t,n){ye(this,"cx");ye(this,"cy");ye(this,"size");ye(this,"delete",!1);ye(this,"speedY",rM);ye(this,"accY",oM);this.cx=e,this.cy=t,this.size=n}collidesWithPlayer(e,t){return this.cy+(this.size*ja+Ka)>t-Is/2&&this.cy<t+Is/2&&this.cx+(this.size*ja+Ka)>e-wr/2&&this.cx<e+wr/2}update(){this.cy+=this.speedY,this.speedY<aM&&(this.speedY+=this.accY),this.cx-this.size/2>Wt||this.cx+this.size/2<0?this.delete=!0:(this.cy-this.size>bs||this.cy+this.size<0)&&(this.delete=!0)}}var Wa=(i=>(i[i.PLAYER=0]="PLAYER",i[i.ENEMY=1]="ENEMY",i))(Wa||{});const wr=10,Is=30,tM=2,zh=2,nM=40,Fi=1,Ya=1,In=30,Da="#66ffb8",Xa="#ff668e",Qp="#2c80ff",iM="#b24bf3",sM="#ff9966",Qr=100,eo=12,to=60,rM=-1.3,oM=.03,aM=1.4,Ka=7,ja=3,Wt=300,bs=400,lM=[{duration:300,xVel:-1,yVel:2},{duration:80,xVel:0,yVel:0},{duration:268,xVel:1,yVel:0},{duration:80,xVel:0,yVel:0},{duration:300,xVel:-1,yVel:-2},{duration:80,xVel:0,yVel:0}],no=[{xVel:0,yVel:1,duration:200},{xVel:1,yVel:.5,duration:-1}],io=[{xVel:0,yVel:1,duration:200},{xVel:-1,yVel:.5,duration:-1}],so=[{xVel:0,yVel:1,duration:-1}];function ii(i,e,t,n,s){const r=s.cx-i,o=s.cy-e,a=Math.hypot(r,o),l=r/a*Ya,c=o/a*Ya,u={duration:-1,xVel:l,yVel:c},h=new Wn(i,e,4,4,[u],Da,Date.now(),0);t.push(h)}function cM(i,e,t,n,s){n%300===0&&em(i,e,t),ar(i,e,t,n,s)}function ar(i,e,t,n,s){if(n%200>100)return;const r=1.3,o=s.cx-i,a=s.cy-e,l=Math.hypot(o,a),c=o/l*Ya*r,u=a/l*Ya*r,h={duration:-1,xVel:c,yVel:u},f=new Wn(i,e,5,5,[h],Da,Date.now(),0),d={duration:-1,xVel:c+.3,yVel:u},g=new Wn(i+5,e,5,5,[d],Da,Date.now(),1),_={duration:-1,xVel:c-.3,yVel:u},m=new Wn(i-5,e,5,5,[_],Da,Date.now(),2);t.push(f),t.push(g),t.push(m)}function em(i,e,t){for(let s=0;s<Qr;s++){const r=-Math.cos(Math.PI*2/Qr*s)+Math.sin(Math.PI*2/Qr*s),o=Math.sin(Math.PI*2/Qr*s)+Math.cos(Math.PI*2/Qr*s),a={duration:-1,xVel:r*.8,yVel:o*.8},l=new Wn(i,e,3,3,[a],Xa,Date.now(),s);t.push(l)}}function uM(i,e,t,n){const r=(Math.sin(n/80)>=0?1:-1)*n/100;for(let o=0;o<eo;o++){const a=o+r,l=-Math.cos(Math.PI*2/eo*a)+Math.sin(Math.PI*2/eo*a),c=Math.sin(Math.PI*2/eo*a)+Math.cos(Math.PI*2/eo*a),u={duration:-1,xVel:l*1,yVel:c*1},h=new Wn(i,e,3,3,[u],Math.sin(n/80)>=0?Xa:Qp,Date.now(),o);t.push(h)}}function hM(i,e,t,n){let s=Xa;Math.floor(n/100)%2===1&&(s=Qp);const r=.6;for(let o=0;o<to;o++){const a=-Math.cos(Math.PI*2/to*o)+Math.sin(Math.PI*2/to*o),l=Math.sin(Math.PI*2/to*o)+Math.cos(Math.PI*2/to*o),c={duration:80,xVel:a*r,yVel:l*r},u={duration:100,xVel:a*.05,yVel:l*.05},h=s===Xa?1:-1,f=Zp(a,l,-Math.PI*h/2),d={duration:-1,xVel:f.x*(r*1.4),yVel:f.y*(r*1.4),rotation:-Math.PI*h/4,rotationDuration:400},g=[c,u,d],_=new Wn(i,e,3,3,g,s,Date.now(),o);t.push(_)}}function Zo(){}function cn(i,e,t,n){return{interval:t,enemies:[new Jp("generic",5,i,0,20,25,n,.5,e,Math.random()>.5?2:1)]}}const fM=[cn(40,no,80,[{duration:-1,interval:300,attack:ii}]),cn(40,no,80,[{duration:-1,interval:300,attack:ii}]),cn(40,no,80,[{duration:-1,interval:300,attack:ii}]),cn(40,no,80,[{duration:-1,interval:300,attack:ii}]),cn(40,no,80,[{duration:-1,interval:300,attack:ii}]),{interval:500,enemies:[]}],dM=[cn(Wt-40,io,80,[{duration:-1,interval:300,attack:ii}]),cn(Wt-40,io,80,[{duration:-1,interval:300,attack:ii}]),cn(Wt-40,io,80,[{duration:-1,interval:300,attack:ii}]),cn(Wt-40,io,80,[{duration:-1,interval:300,attack:ii}]),cn(Wt-40,io,80,[{duration:-1,interval:300,attack:ii}]),{interval:500,enemies:[]}],pM=[cn(Math.random()*Wt,so,120,[{duration:-1,interval:300,attack:ar}]),cn(Math.random()*Wt,so,120,[{duration:-1,interval:300,attack:ar}]),cn(Math.random()*Wt,so,120,[{duration:-1,interval:300,attack:ar}]),cn(Math.random()*Wt,so,120,[{duration:-1,interval:300,attack:ar}]),cn(Math.random()*Wt,so,120,[{duration:-1,interval:300,attack:ar}]),{interval:800,enemies:[]}],mM=new Jp("boss1",500,Wt/2,0,20,25,[{duration:1e3,interval:100,attack:hM},{duration:100,interval:300,attack:Zo},{duration:800,interval:10,attack:uM},{duration:100,interval:300,attack:Zo},{duration:800,interval:60,attack:em},{duration:100,interval:300,attack:Zo},{duration:500,interval:100,attack:cM},{duration:100,interval:300,attack:Zo}],.4,lM,1,!0),gM={enemies:[mM],interval:0},_M={class:"col"},vM={class:"row justify-content-center"},xM={class:"game-viewport"},yM=["height","width"],MM={class:"stats col-auto"},EM={class:"row my-0"},SM={class:"row"},TM={class:"col"},AM={key:0,class:"row justify-content-center hint"},bM={class:"row justify-content-center"},wM={class:"row justify-content-center"},RM=pn({__name:"DanmakuView",setup(i){const{type:e}=Us();let t=null;const n=new Image;n.src=Zy;function s(w,U,S,M,L){return U+M/2>L.cy-L.height/2&&U-M/2<L.cy+L.height/2&&w+S/2>L.cx-L.width/2&&w-S/2<L.cx+L.width/2}const r=ft(!1),o=ft(!1);bi(o,()=>{o.value&&(r.value=!0)});const a=ci(new Qy(200,Wt/2,bs-30)),l=ft(0),c=ft([]),u=ft([]),h=ft([]),f=ft([]),d=ft({up:!1,down:!1,left:!1,right:!1}),g=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"]),_=ft([...fM,...dM,...pM,gM]),m=ft(200);function p(){if(_.value.length===0||(m.value-=1,m.value>0))return;const w=_.value.shift();w&&(m.value=w.interval,c.value.push(...w.enemies))}function A(){if(r.value||t==null)return;p(),a.isAlive()||(o.value=!0),a.handleMovement(d.value),a.attack(u.value),c.value.forEach(L=>{L.handleMovement()}),u.value.forEach(L=>L.update(c.value,a)),h.value.forEach(L=>L.update(c.value,a));const w=new Set;u.value.forEach((L,V)=>{c.value.forEach(O=>{s(O.cx,O.cy,O.width,O.height,L)&&(O.hp-=1,L.delete=!0)}),L.delete&&w.add(V)}),u.value=u.value.filter((L,V)=>!w.has(V));const U=new Set;h.value.forEach((L,V)=>{s(a.cx,a.cy,tM,zh,L)&&(a.hp-=1,L.delete=!0),L.delete&&U.add(V)}),h.value=h.value.filter((L,V)=>!U.has(V));const S=new Set;c.value.forEach((L,V)=>{L.hp<=0&&(S.add(V),l.value+=1,L.spawnPowerUp(f.value)),(L.cx-L.width>Wt+In||L.cx+L.width<-In||L.cy-L.height>bs+In||L.cy+L.height<-In)&&S.add(V)}),c.value=c.value.filter((L,V)=>!S.has(V)),c.value.forEach(L=>{L.attack(L.cx,L.cy,h.value,a)});const M=new Set;f.value.forEach((L,V)=>{L.update(),L.collidesWithPlayer(a.cx,a.cy)&&(a.power+=L.size,L.delete=!0),L.delete&&M.add(V)}),f.value=f.value.filter((L,V)=>!M.has(V)),t.clearRect(-In,-In,Wt+In,bs+In),t.save(),t.fillStyle="white",t.fillRect(a.cx-wr/2,a.cy-Is/2,wr,Is),t.beginPath(),t.fillStyle="red",t.arc(a.cx,a.cy,zh,0,2*Math.PI),t.fill(),t.restore(),h.value.forEach(L=>{t!=null&&(t.beginPath(),t.fillStyle=L.color,t.arc(L.cx,L.cy,L.width,0,2*Math.PI),t.fill())}),c.value.forEach(L=>{t!=null&&(t.fillStyle=L.name==="generic"?iM:sM,t.fillRect(L.cx-L.width/2,L.cy-L.height/2,L.width,L.height))}),u.value.forEach(L=>{t!=null&&(t.beginPath(),t.fillStyle=L.color,t.arc(L.cx,L.cy,L.width,0,2*Math.PI),t.fill())}),f.value.forEach(L=>{t==null||t.drawImage(n,L.cx,L.cy,L.size*ja+Ka,L.size*ja+Ka)})}function x(){I.value=setInterval(A,10),a.reset()}function E(w){w.key===" "&&(c.value[0].hp-=1,r.value=!r.value),w.key==="p"&&(a.power+=5),w.key==="x"&&(c.value[0].hp-=100),g.has(w.key)&&w.preventDefault(),(w.key==="ArrowUp"||w.key==="w")&&(d.value.up=!0),(w.key==="ArrowDown"||w.key==="s")&&(d.value.down=!0),(w.key==="ArrowLeft"||w.key==="a")&&(d.value.left=!0),(w.key==="ArrowRight"||w.key==="d")&&(d.value.right=!0)}function C(w){g.has(w.key)&&w.preventDefault(),(w.key==="ArrowUp"||w.key==="w")&&(d.value.up=!1),(w.key==="ArrowDown"||w.key==="s")&&(d.value.down=!1),(w.key==="ArrowLeft"||w.key==="a")&&(d.value.left=!1),(w.key==="ArrowRight"||w.key==="d")&&(d.value.right=!1)}const I=ft(0);return Gr(()=>{window.addEventListener("keydown",E),window.addEventListener("keyup",C),window.addEventListener("blur",()=>{r.value=!0}),t=document.getElementById("game-canvas").getContext("2d"),t!=null&&x()}),Wr(()=>{window.removeEventListener("keydown",E),window.removeEventListener("keyup",C),I.value&&clearInterval(I.value)}),(w,U)=>(Ee(),Te("main",{class:Tt(W(e))},[D("div",_M,[D("div",vM,[D("div",xM,[D("canvas",{id:"game-canvas",height:W(bs),width:W(Wt)},null,8,yM),D("div",MM,[D("div",EM,gt(`HP: ${a.hp}`),1),D("div",SM,gt(`Pow: ${a.power}`),1)])])]),D("div",{class:Tt(["row controls justify-content-center",W(e)==="xs"?"mt-2":""])},[D("div",TM,[W(e)!=="xs"?(Ee(),Te("div",AM," You can use WASD/Arrow Keys too ")):Ut("",!0),D("div",bM,[D("button",{onMousedown:U[0]||(U[0]=S=>d.value.up=!0),onMouseup:U[1]||(U[1]=S=>d.value.up=!1),onTouchstart:U[2]||(U[2]=Qt(S=>d.value.up=!0,["prevent"])),onTouchend:U[3]||(U[3]=Qt(S=>d.value.up=!1,["prevent"])),class:"btn m-0 material-icons-outlined"}," expand_less ",32)]),D("div",wM,[D("button",{onMousedown:U[4]||(U[4]=S=>d.value.left=!0),onMouseup:U[5]||(U[5]=S=>d.value.left=!1),onTouchstart:U[6]||(U[6]=Qt(S=>d.value.left=!0,["prevent"])),onTouchend:U[7]||(U[7]=Qt(S=>d.value.left=!1,["prevent"])),class:"btn m-0 material-icons-outlined"}," chevron_left ",32),D("button",{onMousedown:U[8]||(U[8]=S=>d.value.down=!0),onMouseup:U[9]||(U[9]=S=>d.value.down=!1),onTouchstart:U[10]||(U[10]=Qt(S=>d.value.down=!0,["prevent"])),onTouchend:U[11]||(U[11]=Qt(S=>d.value.down=!1,["prevent"])),class:"btn m-0 material-icons-outlined"}," expand_more ",32),D("button",{onMousedown:U[12]||(U[12]=S=>d.value.right=!0),onMouseup:U[13]||(U[13]=S=>d.value.right=!1),onTouchstart:U[14]||(U[14]=Qt(S=>d.value.right=!0,["prevent"])),onTouchend:U[15]||(U[15]=Qt(S=>d.value.right=!1,["prevent"])),class:"btn m-0 material-icons-outlined"}," chevron_right ",32)])])],2)])],2))}});const CM=ls(RM,[["__scopeId","data-v-92b00fb4"]]),qa=360,bu=840,cr=150,PM=5,Jt=1400,LM=300,IM=20,DM=50,NM=5,Nn=60,Ol=60,Vh=80,ro=4,mn=110,Un=20,Fl=85,UM=20,Na=250,si=80,Jo=40,Oo=20,It=70,mr=30,Qo=20,Rr=mr+It/2,OM=1e4,tm=20,nm=700;var wn=(i=>(i.DEFAULT="default view",i.ALLIES="allies view",i))(wn||{}),Rt=(i=>(i.EMPTY="empty",i.ENEMY_TURN="enemy_turn",i.PLAYER_TURN_DEFAULT="default",i.PLAYER_TURN_SKILL_PENDING="skill pending",i.PLAYER_ULT_PENDING="ult pending",i))(Rt||{}),an=(i=>(i[i.PLAYER=0]="PLAYER",i[i.ENEMY=1]="ENEMY",i))(an||{}),wi=(i=>(i.MELEE="melee",i.RANGED="ranged",i))(wi||{}),Tn=(i=>(i.ATTACK="attacking",i.SKILL="using skill",i.ULT="ulting",i))(Tn||{}),Be=(i=>(i.SINGLE_ALLY="single ally",i.ALL_ALLIES="all allies",i.SINGLE_ENEMY="single enemy",i.SPLASH_ENEMY="splash enemy",i.ALL_ENEMIES="all enemies",i.RANDOM_ENEMY="random enemy",i))(Be||{}),An=(i=>(i[i.DAMAGE=0]="DAMAGE",i[i.HEAL=1]="HEAL",i[i.SHIELD=2]="SHIELD",i))(An||{}),dt=(i=>(i.FIRE="fire",i.ICE="ice",i.LIGHTNING="lightning",i.WIND="wind",i.QUANTUM="quantum",i.IMAGINARY="imaginary",i.PHYSICAL="physical",i))(dt||{});class im{constructor(e,t,n,s,r,o,a,l,c){ye(this,"type");ye(this,"element");ye(this,"name");ye(this,"avatar");ye(this,"maxHp");ye(this,"hp");ye(this,"attack");ye(this,"speed");ye(this,"reactionFunction");ye(this,"turnEndFunction");this.type=e,this.element=t,this.name=n,this.avatar=s,this.maxHp=r,this.hp=r,this.attack=o,this.speed=a,this.reactionFunction=l,this.turnEndFunction=c}isAlive(){return this.hp>0}reaction(e){return this.reactionFunction?this.reactionFunction(e,this):null}turnEnd(){this.turnEndFunction&&this.turnEndFunction(this)}}class wu extends im{constructor(t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){super(0,n,t,r,l,c,h,_,m);ye(this,"skill");ye(this,"energy");ye(this,"maxEnergy");ye(this,"ult");ye(this,"backImage");ye(this,"frontImage");ye(this,"shield");ye(this,"passiveCount");ye(this,"passiveMax");ye(this,"attackType");this.skill=u,this.attackType=s,this.backImage=o,this.frontImage=a,this.energy=f*.7,this.maxEnergy=f,this.ult=d,this.element=n,this.passiveCount=g,this.shield=10,this.passiveMax=g}}class Ho extends im{constructor(t,n,s,r,o,a,l,c){super(1,n,t,s,r,o,a);ye(this,"weakness");ye(this,"toughness");ye(this,"maxToughness");this.weakness=l,this.maxToughness=c,this.toughness=c}}var gr=(i=>(i[i.ATTACK=0]="ATTACK",i[i.SKILL=1]="SKILL",i))(gr||{}),ws=(i=>(i[i.REACTION=0]="REACTION",i[i.ULT=1]="ULT",i))(ws||{});const FM="/assets/bailu-avatar-ea7ff1dc.png",BM="/assets/bailu-back-e4579737.png",kM="/assets/bailu-front-848b4178.png",HM="/assets/march-avatar-6f189af8.png",zM="/assets/march-back-81ff190d.png",VM="/assets/march-front-185ad5c2.png",GM="/assets/stelle-avatar-ed9a169e.png",WM="/assets/stelle-back-2febe7de.png",YM="/assets/stelle-front-9b6b041a.png",XM=new wu("main-character",dt.PHYSICAL,wi.MELEE,GM,WM,YM,100,10,{targetType:Be.SPLASH_ENEMY,effect:An.DAMAGE,attackType:wi.MELEE,modifier:1.2,breakEfficiency:2},120,100,{targetType:Be.RANDOM_ENEMY,hits:3,effect:An.DAMAGE,attackType:wi.RANGED,modifier:2,breakEfficiency:1}),KM=new wu("bailu",dt.LIGHTNING,wi.MELEE,FM,BM,kM,100,10,{targetType:Be.SINGLE_ALLY,effect:An.HEAL,modifier:10},110,100,{targetType:Be.ALL_ALLIES,hits:3,effect:An.HEAL,modifier:20}),jM=new wu("march",dt.ICE,wi.RANGED,HM,zM,VM,100,10,{targetType:Be.SINGLE_ALLY,effect:An.SHIELD,modifier:20},130,100,{targetType:Be.ALL_ENEMIES,effect:An.DAMAGE,attackType:wi.RANGED,modifier:2,breakEfficiency:2},2,(i,e)=>{if(i==="hit-shield"){const t=e;if(t.passiveCount&&t.passiveCount>0)return t.passiveCount-=1,{type:ws.REACTION,character:e,damage:5}}return null},i=>{i.passiveCount=2}),qM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAAi+SURBVHhe7ZtbkuQgDkV7IfM5+9/ZrKFHlZdWUoAxYGRe94QjAwshSHSqqn/6z19CDKBYxASKRUygWMQEikVMoFjEBIpFTKBYxASKRUygWMQEikVMoFjEBIpFTKBYxASKRUygWMQEikVMoFjEBIpFTKBYxASKRUygWMQEikVMoFjEBIpFTKBYxASKRUygWMQEikVMoFjEBIpFTKBYxASKRUygWMQEikVMoFjEBIpFTNhHrP/957943DsZCsUiJlAsYsImYlGp2ThdrEl0xPknOUwXdhDrSVf8hW0VHoIDDNnalH3Eci/1aGsf1qkl2BePm1uf5cXq0hIt8rxUIbrRm5u+ySZiuZdnoI51j3Fg3UvHm7G2WN0bg1IWndajovifP390vCWriqVN6t4bFOxYGaW0mii1vVUCxQpBQVSGBIg3g1JBNUQw3hKKFeLXlMFDsbTaUVYJS4qFxti1R4vDBsFN1KBFZOyqfOpocG/WEMtvko7xagTqiwr66SbKwHKs+hj1gx/cnpXE0oE+mLVDbMAnBuXo2bBWeOG0UzFGrCotkBw8bs4YEUIH8dYaiYMYf4z6qeAnHMLsYiFN8+OBKTBDkQj2DR4kC34ES4KEc5harDhHI4UVngM5fEvireO4n4/IaYwR65agT0AjyVkjVBEdxLsHET8TkQMZKVby3tGPqyl8JmeNkL3EEh1gjFc9Bsb+g/jJUKwbZC/4hH0xRlyPgbH/IH4yc4lV0piX24bzqE860Ck8QQSvJzORWCUtebltupcM1KfYLR3og9mTGSxW8LiJa0pyuhAcyd8XYgnuPUoW/PGZjBRLiFuSoTzzOcFeeNVILJYb/SPIP5BZfmO50AWFab1IbhdERKxkmpKZOoExYgWXnu8BZjMJ3UnuFRzDH2coydmSV8VCM/Rx0Q/Bq09myoL4bD6Yzef4lGduxktiaTMyt5ycyi+xoPt2L59/EmzFghZ4XOiaOK1wYV+67/j+V5gBihXSfcf3v8IM9BcLNujjomX4+Q3Lu5DcNH8SHPUqJ792V3qKlb/fEvwKT+o8Ibmvf7CY/FHzs7vSQSy99C432LdaA1f7Np9q1BcZS7tYzRddgl3lW/JbN5xq1BcZS7VYuHc8LtQV6/ol9N164BcZyHS/sbSmRfFCsHWX3Qd+i7HM9W+soEKXmm1g6+TuOqWPm0iRn92YDmIphXd9RXJhc7UuJLcuPBLSSjK3pKdYStudXuWP7U3DFxGwauzJx0Kxbmj4IgJWjT35WEzEUsrvN5NWXsQC3b3qDOWZu2IrFihpST4BFW6LmFJyhpKcQ3hDLKGkJW50zQw9uzoAzjb8ePPwkliCXn3y9gtbcrX8TfwzYKwPgkR4Tywl2YDyrkzSQhxjksNMyBix4n5UtSdZ4TUGbr0QA8QS4t7UtgoVald1YdS+azFGrJi2Vg3pMcUqgWJVQ7FKGCmW357mVr3f5vd3XJHBYnVpkkWn8Z/oAzBlsd1+DP5TiCY971PfZvsaKQgqLkoumOKCejkBvR5Wu/IGQcwqmCIxG17NQ7eudEH8o9MPOn7o8a7s+TMHt9paDmlioJEgZTHQIBKIz86X0qaXiKIL/QcOAX3VgVtM/rH5jagW7j0LMq9EQdBPwKc/IMopN5LRC1N+QiyKH5G0QCmKFXPKjfjeBGDKTxBRfFeC1yATn34CEc4SS4VQkkHBFyWQRvI/IjkkgkGyzrGc9XMGjWCADpLAFR1jAOIpRDLVDuQssQT4lLcKQJpgAHSte/8gr7c1z+E4sUChWNAFnzrw135SvjmYuq18Au7KDqTEAHjjI0FdqBEQzB7OuWIJJRJAl49C7q5kCV4BggLGFAscLRaockvRyCfl15gIvIsf8GvmyjBII+BVMzUi+GPhqtQ5UKwvhW4hTV91FmNAsSjWl4xYAuzx8eMYKxSLYv2i3C0/grEP6pysF8UKKXFLEjAQ3EQExSIhcOJKCyfUtVIgX2R7KFaajBZVulQl7wTFuiE2o9YVikUSQCNfjuD1ltr8PaBYRUAO+NEgSsOS1aFYdUCRBksoFrmhWay2hYtCsaqhWCVQrGqaFaFYJIf6gUG5K7X5S0OxqvHlaBCFYpE0sUxVrlAsUkFs2xUUi1QDvfLq3CbsAcXqTIk3FIvccKVRXh2KRXLAqiuxrqaEq/hOUKx2MvZkpoSr+E5QrHbUj6QoECueSgb3g2I14ssBV6500al82mZQrGqSfuSN0SWZnM2gWNVk/EjGka+Pi+4Oxaojb4ZvD/4nj74Gs9tDseq41cJXB25hrCDhts7qUKwimm2AW4J7/8f2blGsImolCPJjsYS93aJYRTwUSzjtlxbFugHtrzUgzv/8PUy7VVt8CSjWDW2NTy6JxRJQXx8XXR+KZUJSlKRYCsU6iCedrhULbOMWxUoDLZ60OV7+84+sO7ee7zsJFCuB9LVEgjzwA3UEBHWQAQvlce9rQrESQAXBvT8Afmi18pqru0WxQqSd6sFzVA4UrCq7tFsU6xdqleBCz1A5ULC27LpuUaxfQCwZGIlVC8XaBGk/DGjzIMkTsQS4tZxeFOvLRyp3Ic0exDwUS1jRLYr15ePVz4U8kSDmuVhgLbco1pePV/OKJSzkFsX6or2fVixhFbco1hdt2MxiCUu4RbG+GHXLwgPUNDpwFyjWF7tWWZTFaY0O/ByK9QujVtm1f1q3KNYvKFYvKFbIWmIJc7pFsRJ075N14yd0i2IlQJ86tuqFrnc/80MoVpq+fXqn333P/BCKlWOSJlUxiVsUa0NmcIti7clwtyjWDTP89Lcx9uQU64Z1xRJw+CHnp1g3UKw2KNYNS4slUCyyFRSLmECxiAkUi5hAsYgJFIuYQLGICRSLmECxiAkUi5hAsYgJFIuYQLGICRSLmECxiAkUi5hAsYgJFIuYQLGICRSLmECxiAkUi5hAsYgJFIuYQLGICRSLmECxiAkUi5hAsYgJFIuYQLGICRSLGPD37/8Bmnds+QmsVmoAAAAASUVORK5CYII=",$M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAAm+SURBVHhe7ZZtcuTMDYNzkPzM/W+WM2woYV4EJlvyrD2UWhKeYnWhQeqrB+Xdf/0xpgEHy7TgYJkWHCzTgoNlWnCwTAsOlmnBwTItOFimBQfLtOBgmRYcLNOCg2VacLBMCw6WacHBMi04WKYFB8u04GCZFhws04KDZVpwsEwLDpZpwcEyLThYpgUHy7TgYJkWHCzTgoNlWnCwTAsOlmnBwTItOFimBQfLtOBgmRYcLNOCg2VacLBMCw6WacHBMi04WKYFB8u04GCZFhws04KDZVpwsEwLDpZpwcEyLThYpgUHy7QwUbD+++//vJS5PucEKzJUY+Rg3YnT/mI5WH3McJIO1g15erDS9ztYn+LRwQpStqCTad6H5zbDATpY94HnNsMBnhmsQGMEoY75AZOc3vnBquskR3Mh9NAmOb2TgxXgIPRogklO5yro6U1ydA7WHdDTm+Tozg9WgLNIJzLJAV2COCsUNMxzmSJYAc+FTHJA88M8Uaz2yTQGi5/6DhjW+fevfSx6YtSTnFv7Xyx8MD97hzrz7SUPR8+HepJDO+KfwvjUVPQhQOoGacAoelZJQ5zLcf/Hwsfjs7lCAGzV1O6R6DtMy9ZBTfLmh/7nHWeBL+f3q2Ardbk9BrzAwQ/9K9Ib6qtO8tqHBgvwRCC01FxnF9L2APg4PPr4F9gHL8NXSq83yaueGSwCp5Z2oQ9An4VHH/wC+/BN+Fbp9VSfyAnBCurH43TgqwZp20d6Cp97zNO/RV9j690medVzghXU78dJpXr1jjqv9BS+A8W58B3wPiyYgepzOTNYw3PBdqfVR7o/n6jriegL4N1YL/enL/mzq/aZ4i9WPR2tl9vz/Up6Fp+u64nwBfg+KJggbd/hB5e8w2nBCvST0hlhy1ITugN9EFZ1dHs8+mjo+kqqQRpI7Hd/ySzBAvhUfrCKtd94FukR2Kqp2yPhyxC+TGqlsaA6hzFpsFTToQn9QfT+WLXUX4YOpD6RTggUtsHOcGWn9RHODNYQPSxobIfmpxg+IgmuhzF8HM0QaaBuk6PstD7CpMHiZ0MkR7e/B7fSG/L+KnR7JPrQJPZfZqe7f+FHmD1YAbc04XD7G9KtuIVDAc31MNLjtl4mRJ1MDtnyP8tlgqUmBLc/pt4ndDKTw+0BpGclrd265VrZ8j/LdMECekwBtmpCcPsD9A5cUXTUpA/Rij4RVK0DSXOtbPkf59rBUvFX4CreEKJq3cKhaKU+gg5eAFuuEOpgSzBT/T4mDVagB0GdzOS8iV6omi0K+FuFyc/CO+v9qdFNAxQBu4mh2co1ghVgqyaEOu+A+a16DW2PaQuTH4T31JurCZ1WCHWwJdU5gHmDFeiJhObB0VeH5g4c4yVamCGpi1IfY5+Ct013xrZ265brDMwerHpwLDWXCREVXKJFE2Kd+kKdSbVOfYatG8JEV2fU1+3S+8rQPICpgxXouYTmCbKwXfv5EHWAtbVdLviKdlNh4IMM75meWLUKaAhSncOYPViBng7OMRV8DkAEOoCtmig668gXtFv1BxnekM9CV4WuEHQSQ/MYLhCsQI+vlg4EdLSbtjS5rehYKh34PfU++iDqocPtcpkwNI/kYsEKcGSp4KcBmtxSJwciAZ/DWjrwG/RuAA5NCDoQ1FwTQ/NgLhMsHhY0trrqVp3hliZFRQdqceBnpFuBusU6LA4khubxXCNYAU9TNVet6kSlq1THSnTLgVTaWuYKWz7ATepMNTkJX1cVytA8hcsEK9Az3dFbjhZaXIluqUNoscXtm+i8Xgi/OhB1q0IZmmdxsWDxfHmIydFWgC1b6rDWwQVoOirY0oKzjnwD50HSW6VdaojlSoGtebhSsAIen54jjhWFrfrUFKngB9BDRwWLA4S+oo4OQNNJWzraog8B0nYSLhasoJ5vCD3coQ9BBwKa0NSiXwfWi75AczjGLVvYwuEK2IVgiwKk7TxcL1gBz5rHmjQd6rXzjakOBTRXrXXkRXK2Blhwkr8OLnCrLQqStlNx+WBppS60rt/Wcv0/8xRsQWhpdwsOp0KLK2CXRRMDytCchEsGC+C4eeg85WpyZaUWRC3108x+C46uPyteu9xRGJpTceFgBTxfiC2dRKyg6uEMaqjXkTyPtRYGwNBPpmpQnWm5fLB0TZXM5YJ/hinYrT5Wlm7TQAgC59t6TQupmwS3V+EOwYLQYosrRHJoBnS04KfuOr6QtgFn4KduUJ2AlwzrNXQ17vZP4Y6TTDhAHYjkvF+4JFAdsAuhpd2kr8utgkWRajhJkoMta+gQ3VLrGLSW+kmreXVu8n8s/iTUqdbxhbQN1KGGSBrbIdpVUS9JkzpQh6/LfYJFkWodXNj3VWNLraVj0CC16kCgZh2o85fmVn+xhqWTENDVodZSHzpIW+VbH9fqWNreg2sHK8BPor8NnbSC0NxudVlw6K8jC2kLYG751Lpq62ZcPlhg6wfTFVQ/dbXg0F9H/j+DLagOoIkBLfh35SbBAvy19MejgK5iq5tm3twSmlU8gVsFK9CfkHrtLFCr4JgWnOQvF4gDzZVwAEUH3Ydwz2BB1B+VItBuKg7Uev8SdaAfxd2CFeCH5C+qPy1FoF1WcupAreVeK8OtOo/iucEK0KqFVprRLbQyNJ/MbYMFwaJDQZ+aDkwK+qqVoflwbhisAD8zfm/qtAIM1Hq1vw7QgQBpa8CdgwUBzZWtAFttDYvd9aLXrcw+jwvWar9At9ar/XXgZZWbmCEPChY1SD6qOlHr+IvqmCH3DJbCKOgKoQUTJFO7adJs8axgqV6bL8EWC11AJ/lmh9sGS/PBWOwXhgPVoM6YfZ4eLB0gw20yzT5PCZYWzIBazeCdGbPPg4IFASf4VocYavMON//PO9KAWKRwJJ0GVKhv3uT+wUqZoKN+GttpmTd5XLCCZGKr9Wp8TZj5K54YLIDWtwOvjflLnhuswJHq4yn/eccWIDc1Olu++QGP+IuV6tX7ypZvfsbNg6XUYNFR03yEBwULOEzH8LhgmWNwsEwLDpZpwcEyLThYpgUHy7TgYJkWHCzTgoNlWnCwTAsOlmnBwTItOFimBQfLtOBgmRYcLNOCg2VacLBMCw6WacHBMi04WKYFB8u04GCZFhws04KDZVpwsEwLDpZpwcEyLThYpgUHy7TgYJkWHCzTgoNlWnCwTAsOlmnBwTItOFimBQfLtOBgmRYcLNOCg2VacLBMCw6WacHBMi04WKYFB8u04GCZFhws04KDZVpwsEwLDpZpwcEyLThYpgUHy7TgYJkWHCzTgoNlWnCwTAsOlmnBwTItOFimBQfLtOBgmRYcLNOCg2Ua+PPnf3eO5i6f5SayAAAAAElFTkSuQmCC",Ru="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAAepSURBVHhe7dVRjuwoDIXh2dm8zuJnTz3oOmMhAsZJOKlU5//UDyljCIQj9V8/gADBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBggTBgsQ8WH//8+/2hNe4fukECx0EC+uVGydYWI9gYT1LFcHCSh6pO4JVkK2X8Iv+cLAI3G9SbtMu1B+uuBqs6zvAE9RXueROr/4rrDeE71Vf4q3BCl4Wj+L56htcdZWpYBXx++qd4bvUd7fwHg8EK37lwj3hNs2tLbzBbLCK6VubXeLh9ve18PqOBWv64kzPk9n+v/oIGd1jrj34gWAVyRev3eJtvnTbh9gZu8e04mj0qMPBit/qo6v2d4/v2u05dsbRMX101HDUsWAV8bvr0bjzIWyTz9/nOX664IzThnMOB6uId1CPLt/uWg/f3hXTo1lD/bcNLHIyWME+9qNx/0c8cEvX2aGmR/OG+uHPyEpnglX4nrq6o/GUO412YvX93zb8PEf36W1Nf2buUSeDVcS76Y425/mI7h6s2N3bqP4pvtXkrvb99XNRPy90PlhFvKfmAKZbvM3+7Zn9ZHrUbA/5bYz6m0q3Z4mrwYq3NWqYTlRo3nhoD5/asP9tpZlRf1Dfnla7FKyiu93aqMHq8dyFmhedePXNu124vaP1Ja4Gq5juz87cbRvV12recvqlpydO2cr+t1VnplPODS2xIFhFZot2kn3nqL5Ks/jFdy3fp+0nv6z3x1OCnmBooTXBKpIbHZ2qW7xuv+z1tyzZp20sv5T3T6fEPZkVllgZrGbHJ45n9WDiUc1S+cWDzvwiezb30PT8lGlbcp0llgWraPY9PYY17HumE5P26ySXnW4guU5tumbD+jNTMp3JpRZaGayi2X3mPNazbxvV85q5ydXybdvTTHJBY82H+rengaMLrrI4WEVzhvyprLM7fV+fOjHFJGdl1ree5IJFvjmzcqZHZ32wiuYwh044avb6fqgr2dYYzeq+N35Fd0qXdR5q3n4MHFpQRBWs5lQnjupTmll1vRlywVCgO8uK3dW6xWLU35VstrZpZ3K1G0iCVXRPaMXuUCDo99W6f1tTTnfKdKlmaNrvkp1r2+6kClYxOqp/he5o17n+7UdCt9+K3SFXj8adztqCTm8Ieky+837CYBXBmU98kfyUQ8sW+35/13Qpa5h2WkPcFo86XyfT/CnaYBXB+f3rjBpG4v6jC+6bvZJZZ/o6awh6pg0m2fYQ8mAV08/hnyxuqwX9+UWKZpH6Z36doLNesGFDQYPJ9DzQHcEqpt/FP5//bQOhbnNybtHMrX/mFymONvvfVurJ9DzZTcEqMp/Je+zBf8aazsyUop5SnFjBNUt1WU/c5j1x21e4L1hF5pPtv6xX6uKej8Ztrm4bPeeNZpW6/22lnUzP17k1WEXy840+tNfj0e33WN02ej7kxCx717nXPd/dwTLJrxl/dxsd/W1NA95Qd2YmjiTnWluy+at9JlhF/uMevYZpszfUK9fP58TTbf2Lr/giHwtWcehD55vjNlunWa35mVdPHK1wevGv9slgFfbR89890xksaENNQ/OzaH6O7NfZnv5nDfv6G3w4WObQ18/c1mh0P7f7s64EunO3H7ufb/OIYBV2DYduIpiSXKeebs91Jdbt9Ep+nd/qKcEyJ+7DpjSzMuvUPc2zPdSsoR5qfhpv2w+9zbOCVZy7lf11xot4sz14sz/UvKFuizvxuGCZ0zfkE+MVRj37n97jQ15pWL079EIPDVZx5ZJs4mi6jzYNdaU72jzUrL879E7PDVZx5bZ8bjN9VC+8sh/1ymjI/7bq6z06WObKnflcm14/N7zYbbBKd8gFQy/0BcEydqknLs8n+t82UPF6t8Er+yHXnfhmXxMsY/d39Ap9ymh6PWoV58XuqAmGXuvLguXsLvPXWXc2s3yppl54sTtqgqE3+9ZgObvX6e0GDcF0L8Zztx+ofH2wnN1xcM3d0WCWF7ujxWgiit8TLGf33b31bmVfLLzebbDivg73C4Pl/PrrBDTP9c+aDXVHg1lwvzlYzlPif163h0bT5kZ17L0iWLVpOLoN3SICrwuWCSKyDxCROuG9wcpkhUid9tJgFUFobIhIXfHeYBVNejxPdRHnvDpYRR0m8rTQ24MFEYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFCYIFgZ+f/wA2FuMC2Zk/AgAAAABJRU5ErkJggg==",ZM=new Ho("frostspawn",dt.ICE,Ru,50,6,90,[dt.FIRE,dt.WIND],1),JM=new Ho("frostspawn2",dt.ICE,Ru,50,8,90,[dt.FIRE,dt.WIND],1),QM=new Ho("fireshadewalker",dt.FIRE,qM,100,15,100,[dt.ICE,dt.WIND,dt.IMAGINARY],2),eE=new Ho("frostspawn4",dt.ICE,Ru,50,7,90,[dt.FIRE,dt.WIND],1),tE=new Ho("flameSpawn",dt.FIRE,$M,50,5,90,[dt.ICE,dt.PHYSICAL],1),Nt=i=>new Promise(e=>setTimeout(e,i));function Bl(i){return i=Math.floor(i),Math.floor(Math.random()*i)}function $a(i){const e=[];for(let t=0;t<i;t+=1)e.push(t);return e}function Ki(i){switch(i){case dt.FIRE:return"rgb(227,43,41)";case dt.ICE:return"rgb(42,146,211)";case dt.LIGHTNING:return"rgb(186,81,219)";case dt.WIND:return"rgb(97,200,150)";case dt.QUANTUM:return"rgb(85,73,188)";case dt.IMAGINARY:return"rgb(245,223,50)";case dt.PHYSICAL:return"rgb(197,197,197)";default:return"white"}}function sm(i,e){return i.type===an.ENEMY?e.enemies.findIndex(t=>t.name===i.name):e.playerCharacters.findIndex(t=>t.name===i.name)}class oo{static enemyAttackAnimation(e,t,n){Y.attackingEnemy=e,setTimeout(()=>{Y.attackingEnemy=null,zl(n,an.PLAYER,0,t)},Jt/2)}static resolveDamageOnPlayer(e,t){const n=[],s=Y.playerCharacters[e];let r=0;return Y.playerCharacters.forEach(o=>{if(o.reaction&&s.shield>0){const a=o.reaction("hit-shield");a!=null&&n.push(a)}}),t>s.shield?(r=t-s.shield,s.shield=0):s.shield-=t,s.hp-=r,s.energy=Math.min(s.energy+NM,s.maxEnergy),n}static resolveDamageOnEnemy(e,t,n,s){const r=Y.enemies[e];if(r.hp-=t,zl(t,an.ENEMY,e,n),r.weakness.includes(n)&&r.toughness!=0&&(r.toughness-=s??1,r.toughness<=0)){r.hp-=IM,zl(t,an.ENEMY,e,n,!0);const o=Y.queue.findIndex(a=>{var l;return((l=a.character)==null?void 0:l.name)===r.name});if(o===-1){console.log("impossible, no enemy turn on timeline");return}Y.queue[o].timeUntil+=DM,Rs.sortTimeline()}}static async resolveEnemyMove(){const e=Y.turnCharacter;e.toughness<=0&&(e.toughness=e.maxToughness);const t=e.attack,n=Bl(Y.playerCharacters.length);return Y.cameraState.focus=n,this.enemyAttackAnimation(sm(e,Y),e.element,t),await Nt(Jt),this.resolveDamageOnPlayer(n,t)}static async resolvePlayerSkill(){const e=Y.turnCharacter;if(Y.turnState.stateEnum=Rt.PLAYER_TURN_DEFAULT,e.skill.effect===An.DAMAGE){const t=e.attack*e.skill.modifier,n=Y.focusedTarget.mainTarget;switch(e.skill.targetType){case Be.SINGLE_ENEMY:{Y.playerAttackTarget=n,Y.playerTurnAction=Tn.SKILL,await Nt(Jt),this.resolveDamageOnEnemy(n,t,e.element,e.skill.breakEfficiency);break}case Be.SPLASH_ENEMY:{Y.playerAttackTarget=n,Y.playerTurnAction=Tn.SKILL,await Nt(Jt),this.resolveDamageOnEnemy(n,t,e.element,e.skill.breakEfficiency),n>0&&this.resolveDamageOnEnemy(n-1,t,e.element,e.skill.breakEfficiency),n<Y.enemies.length-1&&this.resolveDamageOnEnemy(n+1,t,e.element,e.skill.breakEfficiency);break}case Be.ALL_ENEMIES:{Y.playerAttackTarget=n,Y.playerTurnAction=Tn.SKILL,await Nt(Jt);for(let s=0;s<Y.enemies.length;s+=1)this.resolveDamageOnEnemy(s,t,e.element,e.skill.breakEfficiency);break}case Be.RANDOM_ENEMY:{await Nt(Jt);for(let s=0;s<(e.skill.hits??1);s+=1){const r=Bl(Y.enemies.length);this.resolveDamageOnEnemy(r,t,e.element,e.skill.breakEfficiency)}}}}else if(e.skill.effect===An.HEAL)switch(e.skill.targetType){case Be.SINGLE_ALLY:{const t=Y.focusedTarget.mainTarget,n=Y.playerCharacters[t].hp;Vl(Math.min(Y.playerCharacters[t].maxHp-Y.playerCharacters[t].hp,e.skill.modifier),an.PLAYER,t),Y.playerCharacters[t].hp=Math.min(n+e.skill.modifier,Y.playerCharacters[t].maxHp);break}case Be.ALL_ALLIES:Y.playerCharacters.forEach(t=>t.hp=Math.min(t.maxHp,t.hp+e.skill.modifier))}else if(e.skill.effect===An.SHIELD)switch(e.skill.targetType){case Be.SINGLE_ALLY:{const t=Y.focusedTarget.mainTarget;Y.playerCharacters[t].shield+=e.skill.modifier;break}case Be.ALL_ALLIES:Y.playerCharacters.forEach(t=>t.shield+=e.skill.modifier)}Y.playerAttackTarget=null,Y.playerTurnAction=null,await Nt(Jt),e.energy=Math.min(e.energy+30,e.maxEnergy),Y.cameraState.mode=wn.DEFAULT,Y.focusedTarget.targetType=Be.SINGLE_ENEMY}static async resolvePlayerAttack(){const e=Y.turnCharacter;await Nt(200),Y.playerAttackTarget=Y.focusedTarget.mainTarget,Y.playerTurnAction=Tn.ATTACK,await Nt(Jt),e.energy=Math.min(e.energy+UM,e.maxEnergy);const t=e.attack,n=Y.focusedTarget.mainTarget;this.resolveDamageOnEnemy(n,t,e.element,1),await Nt(Jt),Y.playerAttackTarget=null,Y.playerTurnAction=null}static async resolvePlayerUlt(){const e=Y.turnCharacter;if(e.ult.effect===An.DAMAGE){const t=e.attack*e.ult.modifier,n=Y.focusedTarget.mainTarget;switch(e.ult.targetType){case Be.SINGLE_ENEMY:{Y.playerAttackTarget=n,Y.playerTurnAction=Tn.ULT,await Nt(Jt),this.resolveDamageOnEnemy(n,t,e.element,e.ult.breakEfficiency);break}case Be.SPLASH_ENEMY:{Y.playerAttackTarget=n,Y.playerTurnAction=Tn.ULT,await Nt(Jt),this.resolveDamageOnEnemy(n,t,e.element,e.ult.breakEfficiency),n>0&&this.resolveDamageOnEnemy(n-1,t,e.element,e.ult.breakEfficiency),n<Y.enemies.length-1&&this.resolveDamageOnEnemy(n+1,t,e.element,e.ult.breakEfficiency);break}case Be.ALL_ENEMIES:{Y.playerAttackTarget=n,Y.playerTurnAction=Tn.ULT,await Nt(Jt),Y.enemies.forEach((s,r)=>{this.resolveDamageOnEnemy(r,t,e.element,e.ult.breakEfficiency)});break}case Be.RANDOM_ENEMY:{await Nt(Jt);for(let s=0;s<(e.ult.hits??1);s+=1){const r=Bl(Y.enemies.length);await Nt(LM),this.resolveDamageOnEnemy(r,t,e.element,e.ult.breakEfficiency)}}}}else if(e.ult.effect===An.HEAL)switch(e.ult.targetType){case Be.SINGLE_ALLY:{const t=Y.focusedTarget.mainTarget,n=Y.playerCharacters[t].hp;Vl(Math.min(Y.playerCharacters[t].maxHp-Y.playerCharacters[t].hp,e.skill.modifier),an.PLAYER,t),Y.playerCharacters[t].hp=Math.min(n+e.skill.modifier,Y.playerCharacters[t].maxHp);break}case Be.ALL_ALLIES:Y.playerCharacters.forEach((t,n)=>{Vl(Math.min(Y.playerCharacters[n].maxHp-Y.playerCharacters[n].hp,e.skill.modifier),an.PLAYER,n),t.hp=Math.min(t.maxHp,t.hp+e.skill.modifier)})}else if(e.skill.effect===An.SHIELD)switch(e.skill.targetType){case Be.SINGLE_ALLY:{const t=Y.focusedTarget.mainTarget;Y.playerCharacters[t].shield+=e.skill.modifier;break}case Be.ALL_ALLIES:Y.playerCharacters.forEach(t=>t.shield+=e.skill.modifier)}Y.playerAttackTarget=null,Y.playerTurnAction=null,await Nt(Jt),e.energy+=5,Y.cameraState.mode=wn.DEFAULT,Y.focusedTarget.targetType=Be.SINGLE_ENEMY}}class nE{static async resolveTurn(e){Y.currentTurn=e,Y.focusedTarget.targetType=Be.SINGLE_ENEMY,Y.currentResolvingSubTurn=null;let t=-1;if(!e.character)return;if(e.character.type===an.ENEMY){const s=e.character;Y.turnState={resolvingSubTurn:!1,stateEnum:Rt.ENEMY_TURN},Y.turnCharacter=s,t=e.index;const r=await oo.resolveEnemyMove();Y.currentTurn.subTurns.push(...r)}else{const s=e.character;Y.cameraState.focus=e.index,Y.turnCharacter=s,Y.turnState.stateEnum=Rt.PLAYER_TURN_DEFAULT;let r=!1;for(;!r;){if(Y.ultSignaled!=null){Y.queue.unshift(e),Y.currentTurn={character:void 0,index:Y.ultSignaled,timeUntil:0,subTurns:[{type:ws.ULT,character:Y.playerCharacters[Y.ultSignaled]}]},Y.turnCharacter=null,Y.ultSignaled=null,Y.playerInput=null;break}if(Y.playerInput!=null){switch(Y.playerInput.type){case gr.ATTACK:{if(Y.turnState.stateEnum===Rt.PLAYER_TURN_DEFAULT){Y.skillPoints=Math.min(Y.skillPoints+1,PM),await oo.resolvePlayerAttack(),r=!0;break}Y.turnState.stateEnum===Rt.PLAYER_TURN_SKILL_PENDING&&(Y.turnState.stateEnum=Rt.PLAYER_TURN_DEFAULT,Y.cameraState.mode=wn.DEFAULT,Y.cameraState.focus=e.index,Y.focusedTarget.targetType=Be.SINGLE_ENEMY);break}case gr.SKILL:{if(Y.turnState.stateEnum===Rt.PLAYER_TURN_SKILL_PENDING){Y.skillPoints-=1,await oo.resolvePlayerSkill(),r=!0;break}Y.turnState.stateEnum===Rt.PLAYER_TURN_DEFAULT&&(Y.turnState.stateEnum=Rt.PLAYER_TURN_SKILL_PENDING,Y.focusedTarget.targetType=s.skill.targetType,(s.skill.targetType===Be.SINGLE_ALLY||s.skill.targetType===Be.ALL_ALLIES)&&(Y.focusedTarget.mainTarget=Y.currentTurn.index),(s.skill.targetType===Be.ALL_ALLIES||s.skill.targetType===Be.SINGLE_ALLY)&&(Y.cameraState.mode=wn.ALLIES,Y.cameraState.focus=e.index));break}}Y.playerInput=null}await Nt(200)}}if(!Y.currentTurn)return;Y.turnCharacter&&(Y.turnCharacter.turnEnd(),Rs.enqueue(Y.turnCharacter,e.index)),Y.turnCharacter=null;let n=null;for(;Y.currentTurn.subTurns.length>0&&(Y.currentTurn.subTurns.sort((s,r)=>s.type===r.type?0:s.type===ws.REACTION?-1:1),n=Y.currentTurn.subTurns.shift(),!!n);){if(Y.currentResolvingSubTurn=n,Y.turnCharacter=n.character,n.type===ws.REACTION){Y.cameraState.focus=sm(Y.turnCharacter,Y),Y.focusedTarget.mainTarget=t;const s=Y.turnCharacter;n.damage&&t!==-1&&(Y.playerAttackTarget=t,Y.playerTurnAction=Tn.ATTACK,await Nt(1e3),oo.resolveDamageOnEnemy(t,n.damage,s.element,1),await Nt(Jt-1e3))}if(n.type===ws.ULT){Y.turnState.stateEnum=Rt.PLAYER_ULT_PENDING;let s=!1;const r=Y.turnCharacter;for(Y.cameraState.focus=Y.playerCharacters.findIndex(o=>o.name===r.name),(r.ult.targetType===Be.ALL_ALLIES||r.ult.targetType===Be.SINGLE_ALLY)&&(Y.cameraState.mode=wn.ALLIES,Y.cameraState.focus=e.index),Y.focusedTarget.targetType=r.ult.targetType;!s;)Y.playerInput!=null&&Y.playerInput.type===gr.ATTACK&&(s=!0,Y.playerInput=null,await oo.resolvePlayerUlt()),await Nt(200)}}}}class Rs{static sortTimeline(){Y.queue.sort((e,t)=>e.timeUntil-t.timeUntil)}static enqueue(e,t){Y.queue.push({character:e,index:t,timeUntil:OM/e.speed,subTurns:[]})}static getNextTurn(){const e=Y.queue.shift();if(Y.queue.forEach(t=>t.timeUntil-=(e==null?void 0:e.timeUntil)??0),e)return e.timeUntil=0,e}static ult(e){var n;if(e>Y.playerCharacters.length)return;const t=Y.playerCharacters[e];t.energy===t.maxEnergy&&(t.energy=0,Y.turnState.stateEnum===Rt.PLAYER_TURN_DEFAULT||Y.turnState.stateEnum===Rt.PLAYER_TURN_SKILL_PENDING?Y.ultSignaled=e:(n=Y.currentTurn)==null||n.subTurns.push({type:ws.ULT,character:Y.playerCharacters[e]}))}}class iE{constructor(e,t){ye(this,"cameraState");ye(this,"turnState",{stateEnum:Rt.EMPTY,resolvingSubTurn:!1});ye(this,"turnCharacter",null);ye(this,"queue");ye(this,"attackingEnemy",null);ye(this,"playerAttackTarget",null);ye(this,"playerTurnAction",null);ye(this,"playerCharacters");ye(this,"enemies");ye(this,"skillPoints");ye(this,"playerInput",null);ye(this,"focusedTarget",{mainTarget:0,targetType:Be.SINGLE_ENEMY});ye(this,"currentTurn",null);ye(this,"currentResolvingSubTurn",null);ye(this,"ultSignaled",null);ye(this,"gameOver",!1);this.cameraState={mode:wn.DEFAULT,focus:0},this.queue=[],this.playerCharacters=e,this.enemies=t,this.skillPoints=3}async initGame(){for(this.playerCharacters.forEach((e,t)=>Rs.enqueue(e,t)),this.enemies.forEach((e,t)=>Rs.enqueue(e,t)),Rs.sortTimeline();!this.gameOver;){const e=Rs.getNextTurn();if(!e){console.log("no more turns??");return}await nE.resolveTurn(e),Y.enemies=Y.enemies.filter(t=>t.isAlive()),Y.playerCharacters=Y.playerCharacters.filter(t=>t.isAlive()),Y.queue=Y.queue.filter(t=>{var n;return(n=t.character)==null?void 0:n.isAlive()}),Y.enemies.length===0&&(this.gameOver=!0)}}}let kl=0,Hl=0;const Ua=ci(new Map),Oa=ci(new Map);function zl(i,e,t,n,s){kl+=1;const r={damage:i,x:e===an.ENEMY?Cu.value[t]+It/2:cr+si/2,y:e===an.ENEMY?s?Rr+10:Rr:Oo*3,type:n};Ua.set(kl,r);const o=kl;setTimeout(()=>{const a=Ua.get(o);a&&(a.y-=tm)}),setTimeout(()=>{Ua.delete(o)},nm)}function Vl(i,e,t,n){Hl+=1;const s={heal:i,x:e===an.ENEMY?Cu.value[t]+It/2:rm.value[t]+si/2,y:e===an.ENEMY?n?Rr+10:Rr:Oo*3};Oa.set(Hl,s);const r=Hl;setTimeout(()=>{const o=Oa.get(r);o&&(o.y-=tm)}),setTimeout(()=>{Oa.delete(r)},nm)}const sE=Gt(()=>{const i=Y.focusedTarget.mainTarget;switch(Y.focusedTarget.targetType){case Be.SINGLE_ALLY:return{main:[Y.focusedTarget.mainTarget],sub:[]};case Be.ALL_ALLIES:return{main:$a(Y.playerCharacters.length),sub:[]};case Be.SINGLE_ENEMY:return{main:[i],sub:[]};case Be.SPLASH_ENEMY:{const e={main:[i],sub:[]};return i-1>=0&&e.sub.push(i-1),i+1<Y.enemies.length&&e.sub.push(i+1),e}case Be.ALL_ENEMIES:case Be.RANDOM_ENEMY:return{main:$a(Y.enemies.length),sub:[]};default:return{main:[],sub:[]}}}),rm=Gt(()=>{const t=(bu-200-Y.playerCharacters.length*(si+Jo)-Jo)/2,n=[];for(let s=0;s<Y.playerCharacters.length;s++)n.push(200+t+Jo+s*(si+Jo));return n}),Cu=Gt(()=>{const i=bu-(Y.enemies.length*(It+Qo)+Qo*2),e=[];for(let t=0;t<Y.enemies.length;t++)e.push(i+Qo+t*(It+Qo));return e}),Y=ci(new iE([XM,KM,jM],[tE,JM,QM,eE,ZM]));function rE(i){Rs.ult(i)}function oE(){return{gameState:Y,enemyXPositions:Cu,playerXPositions:rm,targetMarkers:sE,healNumbers:Oa,damageNumbers:Ua,activateUlt:rE}}const aE=["data-index"],lE=["href","height","width","x","y"],cE=["x"],uE=["x","width"],hE=["x","y"],fE=["x","y","width"],dE=["cx","cy","r"],pE=pn({__name:"EnemyView",props:{enemies:null,enemyXPositions:null,attackingEnemy:null},setup(i){const e=i,t=48,n=20,s=6,r=4,o=Gt(()=>e.attackingEnemy==null?"":`translate(${cr-e.enemyXPositions[e.attackingEnemy]}px, ${qa/2-mr-It}px)`);return(a,l)=>(Ee(!0),Te(nt,null,Mt(i.enemies,(c,u)=>(Ee(),Te("g",{class:"enemy-ui",key:c.name+c.hp,"data-index":u},[D("image",{class:"enemy-image",style:un({transform:i.attackingEnemy!=null&&u===i.attackingEnemy?W(o):""}),href:c.avatar,height:i.attackingEnemy!=null&&u===i.attackingEnemy?W(It)*1.5:W(It),width:i.attackingEnemy!=null&&u===i.attackingEnemy?W(It)*1.5:W(It),x:i.enemyXPositions[u],y:W(mr)},null,12,lE),D("rect",{class:"health-bar-outline",x:i.enemyXPositions[u]+(W(It)-t)/2,y:n,width:t,height:s},null,8,cE),D("rect",{class:"health-bar",x:i.enemyXPositions[u]+(W(It)-t)/2,y:n,width:c.hp/c.maxHp*t,height:s},null,8,uE),D("rect",{class:"toughness-bar-outline",x:i.enemyXPositions[u]+(W(It)-t)/2,y:n-r,width:t,height:r},null,8,hE),c.toughness>0?(Ee(),Te("rect",{key:0,class:"toughness-bar",x:i.enemyXPositions[u]+(W(It)-t)/2,y:n-r,width:c.toughness/c.maxToughness*t,height:r},null,8,fE)):Ut("",!0),(Ee(!0),Te(nt,null,Mt(c.weakness,(h,f)=>(Ee(),Te("circle",{class:"weakness-icon",key:h,cx:i.enemyXPositions[u]-f*10+60,cy:n-8,r:3.5,style:un({"--color":W(Ki)(h)})},null,12,dE))),128))],8,aE))),128))}});const mE=ls(pE,[["__scopeId","data-v-bf53a0b5"]]),gE=i=>(zr("data-v-cc42b8ab"),i=i(),Vr(),i),_E=gE(()=>D("defs",null,[D("filter",{id:"glow"},[D("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),D("feMerge",null,[D("feMergeNode",{in:"coloredBlur"}),D("feMergeNode",{in:"SourceGraphic"})])])],-1)),vE={key:0},xE=["href","height","width","x","y"],yE=["fill"],ME=["href","height","width","x"],EE={key:0},SE=["cx","cy"],TE=["cx","cy","fill"],AE=["x","y","width","height"],bE=["x","y","width","height"],wE={key:0},RE=["x1","y1","y2","x2"],CE=["x1","y1","y2","x2"],PE=["x1","y1","y2","x2"],LE=["id"],IE=["offset","stop-color"],DE=["offset","stop-color"],NE=["stop-color"],UE=["data-index"],OE=["cx","cy"],FE=["cx","cy","fill","filter"],BE=["x","y"],kE=["data-index"],HE=["href","height","width","x","y"],zE=pn({__name:"PlayerView",props:{playerCharacters:null,cameraState:null,playerXPositions:null,enemyXPositions:null,playerAttackMainTarget:null,playerTurnAction:null},setup(i){const e=i,t=280,n=.75,s=2;let r=0;const o=ft([]),a=ft("");return bi(()=>e.playerAttackMainTarget,()=>{if(e.playerAttackMainTarget==null){o.value=[];return}else{const l=e.playerCharacters[e.cameraState.focus],c=e.playerTurnAction===Tn.ATTACK?Be.SINGLE_ENEMY:e.playerTurnAction===Tn.SKILL?l.skill.targetType:l.ult.targetType,u=e.playerTurnAction===Tn.ATTACK?l.attackType:e.playerTurnAction===Tn.SKILL?l.skill.attackType:l.ult.attackType;if(!u||c===Be.ALL_ALLIES||c===Be.SINGLE_ALLY)return;switch(u){case wi.MELEE:{const h=e.enemyXPositions[e.playerAttackMainTarget]-cr,f=mr-Is/3;a.value=`translate(${h}px, ${f}px)`,setTimeout(()=>{a.value=""},Jt);break}case wi.RANGED:switch(c){case Be.SINGLE_ENEMY:{r+=1;const h={x:cr+si,y:qa/2,color:Ki(l.element),id:r};o.value=[h],setTimeout(()=>{if(e.playerAttackMainTarget==null){console.log("ah shit target lost");return}o.value[0].x=e.enemyXPositions[e.playerAttackMainTarget]+It/2,o.value[0].y=mr+It/2},300),setTimeout(()=>{o.value=[]},1100);break}case Be.SPLASH_ENEMY:case Be.ALL_ENEMIES:{for(let h=0;h<e.enemyXPositions.length;h+=1){r+=1;const f={x:cr+si,y:qa/2,color:Ki(l.element),id:r};o.value.push(f),setTimeout(()=>{o.value[h].x=e.enemyXPositions[h]+It/2,o.value[h].y=mr+It/2},300-h*50)}setTimeout(()=>{o.value=[]},1100);break}case Be.RANDOM_ENEMY:}}}}),(l,c)=>(Ee(),Te(nt,null,[_E,D("g",null,[i.cameraState.mode===W(wn).DEFAULT?(Ee(),Te("g",vE,[D("image",{class:"player-default-image",style:un({transform:a.value}),href:i.playerCharacters[i.cameraState.focus].backImage,height:a.value===""?W(Na):W(Na)*.8,width:a.value===""?W(si):W(si)*.8,x:W(cr),y:W(Oo)},null,12,xE)])):Ut("",!0),o.value.length>0?(Ee(),yu(H_,{key:1,to:"#projectile-teleport-target"},[(Ee(!0),Te(nt,null,Mt(o.value,u=>(Ee(),Te("circle",{class:"projectile",key:u.id,style:un({transform:`translate(${u.x}px, ${u.y}px)`}),r:8,fill:u.color},null,12,yE))),128))])):Ut("",!0),(Ee(!0),Te(nt,null,Mt(i.playerCharacters,(u,h)=>(Ee(),Te("g",{class:"player-ui",key:u.name+u.hp},[D("image",{href:u.avatar,height:W(Nn),width:W(Ol),x:W(Un)+h*W(mn),y:t},null,8,ME),u.passiveMax&&u.passiveCount!==void 0?(Ee(),Te("g",EE,[(Ee(!0),Te(nt,null,Mt(W($a)(u.passiveMax),f=>(Ee(),Te("circle",{class:"depleted",key:f,cx:W(Un)+h*W(mn)+5+(s*2+2)*f,cy:t+W(Nn)+10,r:s},null,8,SE))),128)),(Ee(!0),Te(nt,null,Mt(W($a)(u.passiveCount),f=>(Ee(),Te("circle",{class:"active",key:f,cx:W(Un)+h*W(mn)+5+(s*2+2)*f,cy:t+W(Nn)+10,r:s,fill:W(Ki)(u.element)},null,8,TE))),128))])):Ut("",!0),D("g",{class:"bar",style:un({transform:`translate(0, ${n*2}px)`})},[D("rect",{class:"health-bar-outline",x:W(Un)+h*W(mn),y:t+W(Nn),width:W(Vh),height:W(ro)},null,8,AE),D("rect",{class:"health-bar",x:W(Un)+h*W(mn),y:t+W(Nn),width:u.hp/u.maxHp*W(Vh),height:W(ro)},null,8,bE),u.shield>0?(Ee(),Te("g",wE,[D("line",{class:"shield-bar",x1:W(Un)+h*W(mn)-n,y1:t+W(Nn)-n*2,y2:t+W(Nn)+W(ro)+n*2,x2:W(Un)+h*W(mn)-n},null,8,RE),D("line",{class:"shield-bar",x1:W(Un)+h*W(mn)-n,y1:t+W(Nn)-n,y2:t+W(Nn)-n,x2:W(Un)+h*W(mn)+u.shield/u.maxHp*W(Ol)},null,8,CE),D("line",{class:"shield-bar",x1:W(Un)+h*W(mn)-n,y1:t+W(Nn)+W(ro)+n,y2:t+W(Nn)+W(ro)+n,x2:W(Un)+h*W(mn)+u.shield/u.maxHp*W(Ol)},null,8,PE)])):Ut("",!0)],4),D("linearGradient",{id:u.name+"energy-gradient",x1:"0.5",y1:"1",x2:"0.5",y2:"0"},[D("stop",{offset:`${u.energy/u.maxEnergy*100}%`,"stop-opacity":"1","stop-color":W(Ki)(u.element)},null,8,IE),D("stop",{offset:`${u.energy/u.maxEnergy*100}%`,"stop-opacity":"0","stop-color":W(Ki)(u.element)},null,8,DE),D("stop",{offset:"100%","stop-opacity":"0","stop-color":W(Ki)(u.element)},null,8,NE)],8,LE),D("g",{class:Tt(["ult-circle",{ready:u.energy===u.maxEnergy}]),"data-index":h},[D("circle",{cx:W(Fl)+h*W(mn),cy:t+30,r:"22",fill:"black"},null,8,OE),D("circle",{cx:W(Fl)+h*W(mn),cy:t+30,r:"22",fill:`url(#${u.name}energy-gradient)`,filter:u.energy===u.maxEnergy?"url(#glow)":""},null,8,FE)],10,UE),D("text",{class:"hp-number-display",x:W(Fl)+h*W(mn),y:t+58},gt(u.hp),9,BE)]))),128)),i.cameraState.mode===W(wn).ALLIES?(Ee(!0),Te(nt,{key:2},Mt(i.playerCharacters,(u,h)=>(Ee(),Te("g",{class:"player-image",key:u.name+u.hp+"ally","data-index":h},[D("image",{href:u.frontImage,height:W(Na),width:W(si),x:i.playerXPositions[h],y:W(Oo)},null,8,HE)],8,kE))),128)):Ut("",!0)])],64))}});const VE=ls(zE,[["__scopeId","data-v-cc42b8ab"]]),ui=i=>(zr("data-v-8446a208"),i=i(),Vr(),i),GE={key:0,class:"target-crosshair"},WE=["transform"],YE=ui(()=>D("circle",{fill:"transparent",stroke:"rgb(255, 8, 0)",r:"20"},null,-1)),XE=ui(()=>D("line",{x1:"10",y1:"00",x2:"20",y2:"0",stroke:"rgb(255, 8, 0)"},null,-1)),KE=ui(()=>D("line",{x1:"-20",y1:"00",x2:"-10",y2:"0",stroke:"rgb(255, 8, 0)"},null,-1)),jE=ui(()=>D("line",{x1:"0",y1:"-20",x2:"0",y2:"-10",stroke:"rgb(255, 8, 0)"},null,-1)),qE=ui(()=>D("line",{x1:"0",y1:"10",x2:"0",y2:"20",stroke:"rgb(255, 8, 0)"},null,-1)),$E=[YE,XE,KE,jE,qE],ZE=["transform"],JE=ui(()=>D("circle",{fill:"transparent",stroke:"rgb(255, 8, 0)",r:"10"},null,-1)),QE=ui(()=>D("line",{x1:"10",y1:"00",x2:"20",y2:"0",stroke:"rgb(255, 8, 0)"},null,-1)),eS=ui(()=>D("line",{x1:"-20",y1:"00",x2:"-10",y2:"0",stroke:"rgb(255, 8, 0)"},null,-1)),tS=ui(()=>D("line",{x1:"0",y1:"-20",x2:"0",y2:"-10",stroke:"rgb(255, 8, 0)"},null,-1)),nS=ui(()=>D("line",{x1:"0",y1:"10",x2:"0",y2:"20",stroke:"rgb(255, 8, 0)"},null,-1)),iS=[JE,QE,eS,tS,nS],sS=pn({__name:"TargetMarkerComponent",props:{turnCharacter:null,cameraState:null,targetMarkers:null,playerXPositions:null,enemyXPositions:null},setup(i){return(e,t)=>{var n;return((n=i.turnCharacter)==null?void 0:n.type)===W(an).PLAYER?(Ee(),Te("g",GE,[(Ee(!0),Te(nt,null,Mt(i.targetMarkers.main,s=>(Ee(),Te("g",{key:s,transform:`translate(${i.cameraState.mode===W(wn).ALLIES?i.playerXPositions[s]+W(si)/2:i.enemyXPositions[s]+W(It)/2}, ${i.cameraState.mode===W(wn).ALLIES?W(Oo)+W(Na)/2:W(Rr)})`},$E,8,WE))),128)),(Ee(!0),Te(nt,null,Mt(i.targetMarkers.sub,s=>(Ee(),Te("g",{key:s,transform:`translate(${i.enemyXPositions[s]+W(It)/2}, ${W(Rr)})`},iS,8,ZE))),128))])):Ut("",!0)}}});const rS=ls(sS,[["__scopeId","data-v-8446a208"]]),om=i=>(zr("data-v-5c6c5798"),i=i(),Vr(),i),oS={class:"timeline"},aS={class:"current-turn"},lS={key:0},cS=om(()=>D("rect",{height:"20",width:"40",stroke:"white",fill:"grey",x:"20",y:10},null,-1)),uS=["href"],hS=["x"],fS=["href","x"],dS={key:0,class:"current-subturn"},pS=om(()=>D("rect",{height:"20",width:"40",stroke:"white",fill:"grey",x:"20",y:10},null,-1)),mS=["href"],gS=["y"],_S=["href","y"],vS=pn({__name:"TimelineComponent",props:{currentTurn:null,currentResolvingSubTurn:null,queue:null},setup(i){return(e,t)=>{var n,s,r,o;return Ee(),Te("g",oS,[D("g",aS,[(n=i.currentTurn)!=null&&n.character?(Ee(),Te("g",lS,[cS,D("image",{href:(s=i.currentTurn.character)==null?void 0:s.avatar,height:"20",width:"20",x:"30",y:10},null,8,uS)])):Ut("",!0),(Ee(!0),Te(nt,null,Mt((r=i.currentTurn)==null?void 0:r.subTurns,(a,l)=>(Ee(),Te("g",{key:a.character.name+a.type},[D("rect",{height:"20",width:"40",stroke:"white",fill:"grey",x:60+40*l,y:10},null,8,hS),D("image",{href:a.character.avatar,height:"20",width:"20",x:70+40*l,y:10},null,8,fS)]))),128))]),i.currentResolvingSubTurn?(Ee(),Te("g",dS,[pS,D("image",{href:(o=i.currentResolvingSubTurn.character)==null?void 0:o.avatar,height:"20",width:"20",x:"30",y:10},null,8,mS)])):Ut("",!0),(Ee(!0),Te(nt,null,Mt(i.queue,(a,l)=>{var c,u;return Ee(),Te("g",{key:((c=a.character)==null?void 0:c.name)??""+a.timeUntil},[D("rect",{height:"20",width:"40",stroke:"white",fill:"grey",x:"20",y:l*30+40},null,8,gS),D("image",{href:(u=a.character)==null?void 0:u.avatar,height:"20",width:"20",x:"30",y:l*30+40},null,8,_S)])}),128))])}}});const xS=ls(vS,[["__scopeId","data-v-5c6c5798"]]),Os=i=>(zr("data-v-2bfa3d91"),i=i(),Vr(),i),yS={class:"col mt-2 d-flex justify-content-center"},MS={class:"skill-points-container"},ES={key:0,class:"no-skill-point-tip"},SS={key:0,class:"action-buttons d-flex justify-content-center align-items-center"},TS=Os(()=>D("div",{class:"material-icons-outlined"},"sports_cricket",-1)),AS=[TS],bS=Os(()=>D("div",{class:"material-icons-outlined"},gt("close"),-1)),wS=[bS],RS=["height","width"],CS=["height","width"],PS=Os(()=>D("g",{id:"projectile-teleport-target"},null,-1)),LS={class:"damage-numbers"},IS=["fill"],DS={class:"heal-numbers"},NS={class:"col mt-2"},US={class:"row justify-content-center d-flex"},OS=Os(()=>D("div",null,"Turn Character:",-1)),FS=Os(()=>D("div",null,"|",-1)),BS=Os(()=>D("div",null,"Turn state:",-1)),kS={class:"row justify-content-center d-flex"},HS=Os(()=>D("div",null,"Focused Target:",-1)),zS=pn({__name:"StarRailView",setup(i){const e={width:bu,height:qa},{gameState:t,enemyXPositions:n,playerXPositions:s,targetMarkers:r,healNumbers:o,damageNumbers:a,activateUlt:l}=oE();function c(){t.turnState.stateEnum!==Rt.ENEMY_TURN&&(t.playerInput={type:gr.ATTACK})}let u=0;function h(){if(t.skillPoints===0){clearTimeout(u),g.show0SkillPoint=!0,u=setTimeout(()=>{g.show0SkillPoint=!1},2e3);return}t.turnState.stateEnum!==Rt.ENEMY_TURN&&(t.playerInput={type:gr.SKILL})}function f(m){switch(m.key){case"a":{const p=t.focusedTarget.mainTarget;t.focusedTarget.mainTarget=Math.max(p-1,0);break}case"d":{if(t.cameraState.mode===wn.ALLIES){const A=t.focusedTarget.mainTarget;t.focusedTarget.mainTarget=Math.min(A+1,t.playerCharacters.length-1);return}const p=t.focusedTarget.mainTarget;t.focusedTarget.mainTarget=Math.min(p+1,t.enemies.length-1);break}case" ":{m.preventDefault(),c();break}case"f":{t.playerCharacters.map(p=>p.hp-=10);break}case"e":{h();break}case"1":case"2":case"3":case"4":{const p=parseInt(m.key)-1;l(p);break}case"p":t.queue.shift()}}function d(m){if(!(m.target instanceof Element))return;const p=m.target.closest(".ult-circle");p&&l(parseInt(p.dataset.index??""));const A=m.target.closest(".enemy-ui");if(A){const E=parseInt(A.dataset.index??"");console.log(E,t.focusedTarget.mainTarget),t.focusedTarget.mainTarget===E&&(t.turnState.stateEnum===Rt.PLAYER_TURN_SKILL_PENDING?h():t.turnState.stateEnum===Rt.PLAYER_TURN_DEFAULT&&c()),t.focusedTarget.mainTarget=parseInt(A.dataset.index??"")}const x=m.target.closest(".player-image");if(x){const E=parseInt(x.dataset.index??"");t.focusedTarget.mainTarget===E&&(t.turnState.stateEnum===Rt.PLAYER_TURN_SKILL_PENDING?h():t.turnState.stateEnum===Rt.PLAYER_TURN_DEFAULT&&c()),t.focusedTarget.mainTarget=parseInt(x.dataset.index??"")}}const g=ci({show0SkillPoint:!1,showWinMessage:!1,showLoseMessage:!1});bi(t,()=>{t.gameOver&&(t.enemies.length===0?g.showWinMessage=!0:g.showLoseMessage=!0)}),Gr(()=>{t.initGame(),document.addEventListener("keypress",f)}),Wr(()=>{document.removeEventListener("keypress",f)});function _(){console.log(t)}return(m,p)=>{var A,x;return Ee(),Te("main",null,[D("div",yS,[D("div",{class:"game-viewport",style:un({"--width":e.width,"--height":e.height})},[D("div",MS,[g.show0SkillPoint?(Ee(),Te("div",ES," Not enough skill points ")):Ut("",!0),(Ee(!0),Te(nt,null,Mt([...Array(5).keys()],E=>(Ee(),Te("span",{key:E,class:"material-icons-outlined"},gt(E<W(t).skillPoints?"star":"star_outline"),1))),128))]),((A=W(t).turnCharacter)==null?void 0:A.type)===W(an).PLAYER?(Ee(),Te("div",SS,[D("button",{onClick:c,class:"attack-button d-flex justify-content-center align-items-center"},AS),W(t).turnState.stateEnum!=W(Rt).PLAYER_ULT_PENDING?(Ee(),Te("button",{key:0,onClick:h,class:"skill-button d-flex justify-content-center align-items-center"},wS)):Ut("",!0)])):Ut("",!0),(Ee(),Te("svg",{class:"game-svg",height:e.height,onTouchend:d,onMouseup:d,width:e.width},[D("rect",{class:"background",height:e.height+10,width:e.width},null,8,CS),W(t).cameraState.mode===W(wn).DEFAULT?(Ee(),yu(mE,{key:0,"attacking-enemy":W(t).attackingEnemy,enemies:W(t).enemies,"enemy-x-positions":W(n)},null,8,["attacking-enemy","enemies","enemy-x-positions"])):Ut("",!0),At(VE,{"player-characters":W(t).playerCharacters,"camera-state":W(t).cameraState,"player-x-positions":W(s),"enemy-x-positions":W(n),"player-turn-action":W(t).playerTurnAction,"player-attack-main-target":W(t).playerAttackTarget},null,8,["player-characters","camera-state","player-x-positions","enemy-x-positions","player-turn-action","player-attack-main-target"]),At(xS,{queue:W(t).queue,"current-resolving-sub-turn":W(t).currentResolvingSubTurn,"current-turn":W(t).currentTurn},null,8,["queue","current-resolving-sub-turn","current-turn"]),At(rS,{"camera-state":W(t).cameraState,"turn-character":W(t).turnCharacter,"player-x-positions":W(s),"enemy-x-positions":W(n),"target-markers":W(r)},null,8,["camera-state","turn-character","player-x-positions","enemy-x-positions","target-markers"]),PS,D("g",LS,[(Ee(!0),Te(nt,null,Mt(W(a),([E,C])=>(Ee(),Te("text",{key:E,fill:W(Ki)(C.type),style:un({transform:`translate(${C.x}px, ${C.y}px)`})},gt(C.damage),13,IS))),128))]),D("g",DS,[(Ee(!0),Te(nt,null,Mt(W(o),([E,C])=>(Ee(),Te("text",{key:E,fill:"rgb(177,250,73)",style:un({transform:`translate(${C.x}px, ${C.y}px)`})}," +"+gt(C.heal),5))),128))])],40,RS))],4)]),D("div",NS,[D("div",{class:"row justify-content-center d-flex"},[D("button",{onClick:_,style:{width:"130px",height:"30px"}},"Print Console")]),D("div",US,[OS,D("div",null,gt((x=W(t).turnCharacter)==null?void 0:x.name),1),FS,BS,D("div",null,gt(W(t).turnState.stateEnum),1)]),D("div",kS,[HS,D("div",null,gt(W(t).focusedTarget.mainTarget),1),D("div",null,gt(W(t).focusedTarget.targetType),1),D("div",null,gt(W(r)),1)])])])}}});const VS=ls(zS,[["__scopeId","data-v-2bfa3d91"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="163",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},GS=0,Gh=1,WS=2,am=1,YS=2,Mi=3,Ci=0,_n=1,ri=2,ns=0,_r=1,Wh=2,Yh=3,Xh=4,XS=5,Ts=100,KS=101,jS=102,qS=103,$S=104,ZS=200,JS=201,QS=202,eT=203,Yc=204,Xc=205,tT=206,nT=207,iT=208,sT=209,rT=210,oT=211,aT=212,lT=213,cT=214,uT=0,hT=1,fT=2,Za=3,dT=4,pT=5,mT=6,gT=7,Lu=0,_T=1,vT=2,is=0,xT=1,yT=2,MT=3,ET=4,ST=5,TT=6,AT=7,Kh="attached",bT="detached",lm=300,Cr=301,Pr=302,Kc=303,jc=304,_l=306,Lr=1e3,Zi=1001,Ja=1002,hn=1003,cm=1004,xo=1005,bn=1006,Fa=1007,Si=1008,ss=1009,wT=1010,RT=1011,um=1012,hm=1013,Ir=1014,ai=1015,Qa=1016,fm=1017,dm=1018,zo=1020,CT=35902,PT=1021,LT=1022,Yn=1023,IT=1024,DT=1025,vr=1026,Fo=1027,pm=1028,mm=1029,NT=1030,gm=1031,_m=1033,Gl=33776,Wl=33777,Yl=33778,Xl=33779,jh=35840,qh=35841,$h=35842,Zh=35843,vm=36196,Jh=37492,Qh=37496,ef=37808,tf=37809,nf=37810,sf=37811,rf=37812,of=37813,af=37814,lf=37815,cf=37816,uf=37817,hf=37818,ff=37819,df=37820,pf=37821,Kl=36492,mf=36494,gf=36495,UT=36283,_f=36284,vf=36285,xf=36286,Bo=2300,Dr=2301,jl=2302,yf=2400,Mf=2401,Ef=2402,OT=2500,FT=0,xm=1,qc=2,BT=3200,kT=3201,Iu=0,HT=1,$i="",on="srgb",jt="srgb-linear",Du="display-p3",vl="display-p3-linear",el="linear",mt="srgb",tl="rec709",nl="p3",zs=7680,Sf=519,zT=512,VT=513,GT=514,ym=515,WT=516,YT=517,XT=518,KT=519,$c=35044,Tf="300 es",Ti=2e3,il=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Af=1234567;const bo=Math.PI/180,Nr=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Xt(i,e,t){return Math.max(e,Math.min(t,i))}function Nu(i,e){return(i%e+e)%e}function jT(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qT(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function $T(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function ZT(i,e=1){return e-Math.abs(Nu(i,e*2)-e)}function JT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function QT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eA(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tA(i,e){return i+Math.random()*(e-i)}function nA(i){return i*(.5-Math.random())}function iA(i){i!==void 0&&(Af=i);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sA(i){return i*bo}function rA(i){return i*Nr}function oA(i){return(i&i-1)===0&&i!==0}function aA(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lA(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cA(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mm={DEG2RAD:bo,RAD2DEG:Nr,generateUUID:jn,clamp:Xt,euclideanModulo:Nu,mapLinear:jT,inverseLerp:qT,lerp:wo,damp:$T,pingpong:ZT,smoothstep:JT,smootherstep:QT,randInt:eA,randFloat:tA,randFloatSpread:nA,seededRandom:iA,degToRad:sA,radToDeg:rA,isPowerOfTwo:oA,ceilPowerOfTwo:aA,floorPowerOfTwo:lA,setQuaternionFromProperEuler:cA,normalize:lt,denormalize:zn};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],A=s[1],x=s[4],E=s[7],C=s[2],I=s[5],w=s[8];return r[0]=o*_+a*A+l*C,r[3]=o*m+a*x+l*I,r[6]=o*p+a*E+l*w,r[1]=c*_+u*A+h*C,r[4]=c*m+u*x+h*I,r[7]=c*p+u*E+h*w,r[2]=f*_+d*A+g*C,r[5]=f*m+d*x+g*I,r[8]=f*p+d*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ql.makeScale(e,t)),this}rotate(e){return this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new qe;function Em(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uA(){const i=ko("canvas");return i.style.display="block",i}const bf={};function Sm(i){i in bf||(bf[i]=!0,console.warn(i))}const wf=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rf=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[jt]:{transfer:el,primaries:tl,toReference:i=>i,fromReference:i=>i},[on]:{transfer:mt,primaries:tl,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vl]:{transfer:el,primaries:nl,toReference:i=>i.applyMatrix3(Rf),fromReference:i=>i.applyMatrix3(wf)},[Du]:{transfer:mt,primaries:nl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rf),fromReference:i=>i.applyMatrix3(wf).convertLinearToSRGB()}},hA=new Set([jt,vl]),ot={enabled:!0,_workingColorSpace:jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hA.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ea[e].toReference,s=ea[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ea[i].primaries},getTransfer:function(i){return i===$i?el:ea[i].transfer}};function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $l(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vs;class fA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=ko("canvas")),Vs.width=e.width,Vs.height=e.height;const n=Vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dA=0;class Tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zl(s[o].image)):r.push(Zl(s[o]))}else r=Zl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pA=0;class Yt extends Fs{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Zi,s=Zi,r=bn,o=Si,a=Yn,l=ss,c=Yt.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=jn(),this.name="",this.source=new Tm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=lm;Yt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(d+1)/2,C=(p+1)/2,I=(u+f)/4,w=(h+_)/4,U=(g+m)/4;return x>E&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=I/n,r=w/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=I/s,r=U/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=U/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-_)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mA extends Fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends mA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Am extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gA extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,A=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),I=Math.atan2(C,p*A);m=Math.sin(m*I)/C,a=Math.sin(a*I)/C}const E=a*A;if(l=l*m+f*E,c=c*m+d*E,u=u*m+g*E,h=h*m+_*E,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new B,Cf=new li;class Li{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),na.subVectors(this.max,ao),Gs.subVectors(e.a,ao),Ws.subVectors(e.b,ao),Ys.subVectors(e.c,ao),Bi.subVectors(Ws,Gs),ki.subVectors(Ys,Ws),ds.subVectors(Gs,Ys);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-ds.z,ds.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,ds.z,0,-ds.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-ds.y,ds.x,0];return!Ql(t,Gs,Ws,Ys,na)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Gs,Ws,Ys,na))?!1:(ia.crossVectors(Bi,ki),t=[ia.x,ia.y,ia.z],Ql(t,Gs,Ws,Ys,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new B,new B,new B,new B,new B,new B,new B,new B],On=new B,ta=new Li,Gs=new B,Ws=new B,Ys=new B,Bi=new B,ki=new B,ds=new B,ao=new B,na=new B,ia=new B,ps=new B;function Ql(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _A=new Li,lo=new B,ec=new B;class hi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_A.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(ec)),this.expandByPoint(lo.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new B,tc=new B,sa=new B,Hi=new B,nc=new B,ra=new B,ic=new B;class Yr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){tc.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=Hi.dot(this.direction),l=-Hi.dot(sa),c=Hi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(tc).addScaledVector(sa,f),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){nc.subVectors(t,e),ra.subVectors(n,e),ic.crossVectors(nc,ra);let o=this.direction.dot(ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(ra.crossVectors(Hi,ra));if(l<0)return null;const c=a*this.direction.dot(nc.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(ic);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vA,e,xA)}lookAt(e,t,n){const s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),zi.crossVectors(n,En),zi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),zi.crossVectors(n,En)),zi.normalize(),oa.crossVectors(En,zi),s[0]=zi.x,s[4]=oa.x,s[8]=En.x,s[1]=zi.y,s[5]=oa.y,s[9]=En.y,s[2]=zi.z,s[6]=oa.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],A=n[3],x=n[7],E=n[11],C=n[15],I=s[0],w=s[4],U=s[8],S=s[12],M=s[1],L=s[5],V=s[9],O=s[13],re=s[2],le=s[6],ue=s[10],he=s[14],j=s[3],me=s[7],_e=s[11],Ae=s[15];return r[0]=o*I+a*M+l*re+c*j,r[4]=o*w+a*L+l*le+c*me,r[8]=o*U+a*V+l*ue+c*_e,r[12]=o*S+a*O+l*he+c*Ae,r[1]=u*I+h*M+f*re+d*j,r[5]=u*w+h*L+f*le+d*me,r[9]=u*U+h*V+f*ue+d*_e,r[13]=u*S+h*O+f*he+d*Ae,r[2]=g*I+_*M+m*re+p*j,r[6]=g*w+_*L+m*le+p*me,r[10]=g*U+_*V+m*ue+p*_e,r[14]=g*S+_*O+m*he+p*Ae,r[3]=A*I+x*M+E*re+C*j,r[7]=A*w+x*L+E*le+C*me,r[11]=A*U+x*V+E*ue+C*_e,r[15]=A*S+x*O+E*he+C*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,E=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,C=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,I=t*A+n*x+s*E+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/I;return e[0]=A*w,e[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*w,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*w,e[4]=x*w,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*w,e[8]=E*w,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=C*w,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,A=l*c,x=l*u,E=l*h,C=n.x,I=n.y,w=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+E)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(d-E)*I,s[5]=(1-(f+p))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(g+x)*w,s[9]=(m-A)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Xs.set(s[0],s[1],s[2]).length();const o=Xs.set(s[4],s[5],s[6]).length(),a=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fn.copy(this);const c=1/r,u=1/o,h=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,t.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ti){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===Ti)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===il)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ti){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,d=(n+s)*u;let g,_;if(a===Ti)g=(o+r)*h,_=-2*h;else if(a===il)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new B,Fn=new Xe,vA=new B(0,0,0),xA=new B(1,1,1),zi=new B,oa=new B,En=new B,Pf=new Xe,Lf=new li;class Zn{constructor(e=0,t=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yA=0;const If=new B,Ks=new li,_i=new Xe,aa=new B,co=new B,MA=new B,EA=new li,Df=new B(1,0,0),Nf=new B(0,1,0),Uf=new B(0,0,1),Of={type:"added"},SA={type:"removed"},js={type:"childadded",child:null},sc={type:"childremoved",child:null};class _t extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new B,t=new Zn,n=new li,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new qe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Df,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(Uf,e)}translateOnAxis(e,t){return If.copy(e).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Df,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(Uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(co,aa,this.up):_i.lookAt(aa,co,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(_i),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Of),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SA),sc.child=e,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Of),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,MA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,EA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}_t.DEFAULT_UP=new B(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new B,vi=new B,rc=new B,xi=new B,qs=new B,$s=new B,Ff=new B,oc=new B,ac=new B,lc=new B;class Vn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),vi.subVectors(n,t),rc.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(vi),l=Bn.dot(rc),c=vi.dot(vi),u=vi.dot(rc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),vi.subVectors(e,t),Bn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Bn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;qs.subVectors(s,n),$s.subVectors(r,n),oc.subVectors(e,n);const l=qs.dot(oc),c=$s.dot(oc);if(l<=0&&c<=0)return t.copy(n);ac.subVectors(e,s);const u=qs.dot(ac),h=$s.dot(ac);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qs,o);lc.subVectors(e,r);const d=qs.dot(lc),g=$s.dot(lc);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($s,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ff.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ff,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(qs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},la={h:0,s:0,l:0};function cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Nu(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cc(o,r,e+1/3),this.g=cc(o,r,e),this.b=cc(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=bm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=$l(e.r),this.g=$l(e.g),this.b=$l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return ot.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Xt(Zt.r*255,0,255))*65536+Math.round(Xt(Zt.g*255,0,255))*256+Math.round(Xt(Zt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=on){ot.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(la);const n=wo(Vi.h,la.h,t),s=wo(Vi.s,la.s,t),r=wo(Vi.l,la.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ue;Ue.NAMES=bm;let TA=0;class qn extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=_r,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Xc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==Ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dn extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new B,ca=new Ne;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Sm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$c&&(e.usage=this.usage),e}}class wm extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rm extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let AA=0;const Pn=new Xe,uc=new _t,Zs=new B,Sn=new Li,uo=new Li,Vt=new B;class xn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Em(e)?Rm:wm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Sn.min,uo.min),Sn.expandByPoint(Vt),Vt.addVectors(Sn.max,uo.max),Sn.expandByPoint(Vt)):(Sn.expandByPoint(uo.min),Sn.expandByPoint(uo.max))}Sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),Vt.add(Zs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new B,l[U]=new B;const c=new B,u=new B,h=new B,f=new Ne,d=new Ne,g=new Ne,_=new B,m=new B;function p(U,S,M){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(L),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[U].add(_),a[S].add(_),a[M].add(_),l[U].add(m),l[S].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,S=A.length;U<S;++U){const M=A[U],L=M.start,V=M.count;for(let O=L,re=L+V;O<re;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new B,E=new B,C=new B,I=new B;function w(U){C.fromBufferAttribute(s,U),I.copy(C);const S=a[U];x.copy(S),x.sub(C.multiplyScalar(C.dot(S))).normalize(),E.crossVectors(I,S);const L=E.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,L)}for(let U=0,S=A.length;U<S;++U){const M=A[U],L=M.start,V=M.count;for(let O=L,re=L+V;O<re;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bf=new Xe,ms=new Yr,ua=new hi,kf=new B,Js=new B,Qs=new B,er=new B,hc=new B,ha=new B,fa=new Ne,da=new Ne,pa=new Ne,Hf=new B,zf=new B,Vf=new B,ma=new B,ga=new B;class Ft extends _t{constructor(e=new xn,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(hc.fromBufferAttribute(h,e),o?ha.addScaledVector(hc,u):ha.addScaledVector(hc.sub(t),u))}t.add(ha)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(ua.containsPoint(ms.origin)===!1&&(ms.intersectSphere(ua,kf)===null||ms.origin.distanceToSquared(kf)>(e.far-e.near)**2))&&(Bf.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Bf),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=A,C=x;E<C;E+=3){const I=a.getX(E),w=a.getX(E+1),U=a.getX(E+2);s=_a(this,p,e,n,c,u,h,I,w,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);s=_a(this,o,e,n,c,u,h,A,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=A,C=x;E<C;E+=3){const I=E,w=E+1,U=E+2;s=_a(this,p,e,n,c,u,h,I,w,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=m,x=m+1,E=m+2;s=_a(this,o,e,n,c,u,h,A,x,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bA(i,e,t,n,s,r,o,a){let l;if(e.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;ga.copy(a),ga.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:i}}function _a(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Js),i.getVertexPosition(l,Qs),i.getVertexPosition(c,er);const u=bA(i,e,t,n,Js,Qs,er,ma);if(u){s&&(fa.fromBufferAttribute(s,a),da.fromBufferAttribute(s,l),pa.fromBufferAttribute(s,c),u.uv=Vn.getInterpolation(ma,Js,Qs,er,fa,da,pa,new Ne)),r&&(fa.fromBufferAttribute(r,a),da.fromBufferAttribute(r,l),pa.fromBufferAttribute(r,c),u.uv1=Vn.getInterpolation(ma,Js,Qs,er,fa,da,pa,new Ne)),o&&(Hf.fromBufferAttribute(o,a),zf.fromBufferAttribute(o,l),Vf.fromBufferAttribute(o,c),u.normal=Vn.getInterpolation(ma,Js,Qs,er,Hf,zf,Vf,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Vn.getNormal(Js,Qs,er,h.normal),u.face=h}return u}class rs extends xn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(u,3)),this.setAttribute("uv",new fn(h,2));function g(_,m,p,A,x,E,C,I,w,U,S){const M=E/w,L=C/U,V=E/2,O=C/2,re=I/2,le=w+1,ue=U+1;let he=0,j=0;const me=new B;for(let _e=0;_e<ue;_e++){const Ae=_e*L-O;for(let De=0;De<le;De++){const Je=De*M-V;me[_]=Je*A,me[m]=Ae*x,me[p]=re,c.push(me.x,me.y,me.z),me[_]=0,me[m]=0,me[p]=I>0?1:-1,u.push(me.x,me.y,me.z),h.push(De/w),h.push(1-_e/U),he+=1}}for(let _e=0;_e<U;_e++)for(let Ae=0;Ae<w;Ae++){const De=f+Ae+le*_e,Je=f+Ae+le*(_e+1),ce=f+(Ae+1)+le*(_e+1),H=f+(Ae+1)+le*_e;l.push(De,Je,H),l.push(Je,ce,H),j+=6}a.addGroup(d,j,S),d+=j,f+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=Ur(i[t]);for(const s in n)e[s]=n[s]}return e}function wA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const RA={clone:Ur,merge:rn};var CA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CA,this.fragmentShader=PA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=wA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pm extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new B,Gf=new Ne,Wf=new Ne;class ln extends Pm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,Wf),t.subVectors(Wf,Gf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class LA extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(tr,nr,e,t);s.layers=this.layers,this.add(s);const r=new ln(tr,nr,e,t);r.layers=this.layers,this.add(r);const o=new ln(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new ln(tr,nr,e,t);a.layers=this.layers,this.add(a);const l=new ln(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new ln(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===il)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lm extends Yt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IA extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new as({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ns});r.uniforms.tEquirect.value=t;const o=new Ft(s,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=bn),new LA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const fc=new B,DA=new B,NA=new qe;class ei{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fc.subVectors(n,t).cross(DA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||NA.getNormalMatrix(e),s=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new hi,va=new B;class Ou{constructor(e=new ei,t=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],A=s[13],x=s[14],E=s[15];if(n[0].setComponents(l-r,f-c,m-d,E-p).normalize(),n[1].setComponents(l+r,f+c,m+d,E+p).normalize(),n[2].setComponents(l+o,f+u,m+g,E+A).normalize(),n[3].setComponents(l-o,f-u,m-g,E-A).normalize(),n[4].setComponents(l-a,f-h,m-_,E-x).normalize(),t===Ti)n[5].setComponents(l+a,f+h,m+_,E+x).normalize();else if(t===il)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(va.x=s.normal.x>0?e.max.x:e.min.x,va.y=s.normal.y>0?e.max.y:e.min.y,va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Im(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function UA(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&f.length===0&&i.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class xl extends xn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let x=0;x<c;x++){const E=x*h-r;g.push(E,-A,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const x=A+c*p,E=A+c*(p+1),C=A+1+c*(p+1),I=A+1+c*p;d.push(x,E,I),d.push(E,C,I)}this.setIndex(d),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var OA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$A=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ub=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ob=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_w=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Aw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$w=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:OA,alphahash_pars_fragment:FA,alphamap_fragment:BA,alphamap_pars_fragment:kA,alphatest_fragment:HA,alphatest_pars_fragment:zA,aomap_fragment:VA,aomap_pars_fragment:GA,batching_pars_vertex:WA,batching_vertex:YA,begin_vertex:XA,beginnormal_vertex:KA,bsdfs:jA,iridescence_fragment:qA,bumpmap_pars_fragment:$A,clipping_planes_fragment:ZA,clipping_planes_pars_fragment:JA,clipping_planes_pars_vertex:QA,clipping_planes_vertex:eb,color_fragment:tb,color_pars_fragment:nb,color_pars_vertex:ib,color_vertex:sb,common:rb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:ab,displacementmap_pars_vertex:lb,displacementmap_vertex:cb,emissivemap_fragment:ub,emissivemap_pars_fragment:hb,colorspace_fragment:fb,colorspace_pars_fragment:db,envmap_fragment:pb,envmap_common_pars_fragment:mb,envmap_pars_fragment:gb,envmap_pars_vertex:_b,envmap_physical_pars_fragment:Cb,envmap_vertex:vb,fog_vertex:xb,fog_pars_vertex:yb,fog_fragment:Mb,fog_pars_fragment:Eb,gradientmap_pars_fragment:Sb,lightmap_fragment:Tb,lightmap_pars_fragment:Ab,lights_lambert_fragment:bb,lights_lambert_pars_fragment:wb,lights_pars_begin:Rb,lights_toon_fragment:Pb,lights_toon_pars_fragment:Lb,lights_phong_fragment:Ib,lights_phong_pars_fragment:Db,lights_physical_fragment:Nb,lights_physical_pars_fragment:Ub,lights_fragment_begin:Ob,lights_fragment_maps:Fb,lights_fragment_end:Bb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Hb,logdepthbuf_pars_vertex:zb,logdepthbuf_vertex:Vb,map_fragment:Gb,map_pars_fragment:Wb,map_particle_fragment:Yb,map_particle_pars_fragment:Xb,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:jb,morphinstance_vertex:qb,morphcolor_vertex:$b,morphnormal_vertex:Zb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Qb,normal_fragment_begin:ew,normal_fragment_maps:tw,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:sw,normalmap_pars_fragment:rw,clearcoat_normal_fragment_begin:ow,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:lw,iridescence_pars_fragment:cw,opaque_fragment:uw,packing:hw,premultiplied_alpha_fragment:fw,project_vertex:dw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:_w,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:xw,shadowmap_vertex:yw,shadowmask_pars_fragment:Mw,skinbase_vertex:Ew,skinning_pars_vertex:Sw,skinning_vertex:Tw,skinnormal_vertex:Aw,specularmap_fragment:bw,specularmap_pars_fragment:ww,tonemapping_fragment:Rw,tonemapping_pars_fragment:Cw,transmission_fragment:Pw,transmission_pars_fragment:Lw,uv_pars_fragment:Iw,uv_pars_vertex:Dw,uv_vertex:Nw,worldpos_vertex:Uw,background_vert:Ow,background_frag:Fw,backgroundCube_vert:Bw,backgroundCube_frag:kw,cube_vert:Hw,cube_frag:zw,depth_vert:Vw,depth_frag:Gw,distanceRGBA_vert:Ww,distanceRGBA_frag:Yw,equirect_vert:Xw,equirect_frag:Kw,linedashed_vert:jw,linedashed_frag:qw,meshbasic_vert:$w,meshbasic_frag:Zw,meshlambert_vert:Jw,meshlambert_frag:Qw,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:s1,meshphong_frag:r1,meshphysical_vert:o1,meshphysical_frag:a1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:u1,points_frag:h1,shadow_vert:f1,shadow_frag:d1,sprite_vert:p1,sprite_frag:m1},Se={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ti={basic:{uniforms:rn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:rn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:rn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:rn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:rn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ue(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:rn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:rn([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:rn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:rn([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:rn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:rn([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:rn([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:rn([Se.lights,Se.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ti.physical={uniforms:rn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const xa={r:0,b:0,g:0},_s=new Zn,g1=new Xe;function _1(i,e,t,n,s,r,o){const a=new Ue(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let A=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),A=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_l)?(u===void 0&&(u=new Ft(new rs(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Ur(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_s.copy(p.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(g1.makeRotationFromEuler(_s)),u.material.toneMapped=ot.getTransfer(x.colorSpace)!==mt,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ft(new xl(2,2),new as({name:"BackgroundMaterial",uniforms:Ur(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ot.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(xa,Cm(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function v1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,L,V,O,re){let le=!1;const ue=h(O,V,L);r!==ue&&(r=ue,c(r.object)),le=d(M,O,V,re),le&&g(M,O,V,re),re!==null&&e.update(re,i.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,E(M,L,V,O),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,L,V){const O=V.wireframe===!0;let re=n[M.id];re===void 0&&(re={},n[M.id]=re);let le=re[L.id];le===void 0&&(le={},re[L.id]=le);let ue=le[O];return ue===void 0&&(ue=f(l()),le[O]=ue),ue}function f(M){const L=[],V=[],O=[];for(let re=0;re<t;re++)L[re]=0,V[re]=0,O[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,L,V,O){const re=r.attributes,le=L.attributes;let ue=0;const he=V.getAttributes();for(const j in he)if(he[j].location>=0){const _e=re[j];let Ae=le[j];if(Ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),_e===void 0||_e.attribute!==Ae||Ae&&_e.data!==Ae.data)return!0;ue++}return r.attributesNum!==ue||r.index!==O}function g(M,L,V,O){const re={},le=L.attributes;let ue=0;const he=V.getAttributes();for(const j in he)if(he[j].location>=0){let _e=le[j];_e===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Ae={};Ae.attribute=_e,_e&&_e.data&&(Ae.data=_e.data),re[j]=Ae,ue++}r.attributes=re,r.attributesNum=ue,r.index=O}function _(){const M=r.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const V=r.newAttributes,O=r.enabledAttributes,re=r.attributeDivisors;V[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),re[M]!==L&&(i.vertexAttribDivisor(M,L),re[M]=L)}function A(){const M=r.newAttributes,L=r.enabledAttributes;for(let V=0,O=L.length;V<O;V++)L[V]!==M[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function x(M,L,V,O,re,le,ue){ue===!0?i.vertexAttribIPointer(M,L,V,re,le):i.vertexAttribPointer(M,L,V,O,re,le)}function E(M,L,V,O){_();const re=O.attributes,le=V.getAttributes(),ue=L.defaultAttributeValues;for(const he in le){const j=le[he];if(j.location>=0){let me=re[he];if(me===void 0&&(he==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),he==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const _e=me.normalized,Ae=me.itemSize,De=e.get(me);if(De===void 0)continue;const Je=De.buffer,ce=De.type,H=De.bytesPerElement,se=ce===i.INT||ce===i.UNSIGNED_INT||me.gpuType===hm;if(me.isInterleavedBufferAttribute){const $=me.data,G=$.stride,J=me.offset;if($.isInstancedInterleavedBuffer){for(let oe=0;oe<j.locationSize;oe++)p(j.location+oe,$.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<j.locationSize;oe++)m(j.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let oe=0;oe<j.locationSize;oe++)x(j.location+oe,Ae/j.locationSize,ce,_e,G*H,(J+Ae/j.locationSize*oe)*H,se)}else{if(me.isInstancedBufferAttribute){for(let $=0;$<j.locationSize;$++)p(j.location+$,me.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $=0;$<j.locationSize;$++)m(j.location+$);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let $=0;$<j.locationSize;$++)x(j.location+$,Ae/j.locationSize,ce,_e,Ae*H,Ae/j.locationSize*$*H,se)}}else if(ue!==void 0){const _e=ue[he];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(j.location,_e);break;case 3:i.vertexAttrib3fv(j.location,_e);break;case 4:i.vertexAttrib4fv(j.location,_e);break;default:i.vertexAttrib1fv(j.location,_e)}}}}A()}function C(){U();for(const M in n){const L=n[M];for(const V in L){const O=L[V];for(const re in O)u(O[re].object),delete O[re];delete L[V]}delete n[M]}}function I(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const V in L){const O=L[V];for(const re in O)u(O[re].object),delete O[re];delete L[V]}delete n[M.id]}function w(M){for(const L in n){const V=n[L];if(V[M.id]===void 0)continue;const O=V[M.id];for(const re in O)u(O[re].object),delete O[re];delete V[M.id]}}function U(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function x1(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function y1(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),p=u>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:p,maxSamples:A}}function M1(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ei,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:n,x=A*4;let E=p.clippingState||null;l.value=E,E=u(g,f,x,d);for(let C=0;C!==x;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=d;x!==_;++x,E+=4)o.copy(h[x]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function E1(i){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=Cr:a===jc&&(o.mapping=Pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kc||a===jc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new IA(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fu extends Pm{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,Yf=[.125,.215,.35,.446,.526,.582],As=20,dc=new Fu,Xf=new Ue;let pc=null,mc=0,gc=0,_c=!1;const Ms=(1+Math.sqrt(5))/2,ir=1/Ms,Kf=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Ms,ir),new B(0,Ms,-ir),new B(ir,0,Ms),new B(-ir,0,Ms),new B(Ms,ir,0),new B(-Ms,ir,0)];class jf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Qa,format:Yn,colorSpace:jt,depthBuffer:!1},s=qf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S1(r)),this._blurMaterial=T1(r,e,t)}return s}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,s){const a=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xf),u.toneMapping=is,u.autoClear=!1;const d=new Dn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Ft(new rs,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Xf),_=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ya(s,A*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Cr||e.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kf[(s-1)%Kf.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ft(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*As-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):As;m>As&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);const p=[];let A=0;for(let w=0;w<As;++w){const U=w/_,S=Math.exp(-U*U/2);p.push(S),w===0?A+=S:w<m&&(A+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const E=this._sizeLods[s],C=3*E*(s>x-ur?s-x+ur:0),I=4*(this._cubeSize-E);ya(t,C,I,3*E,2*E),l.setRenderTarget(t),l.render(h,dc)}}function S1(i){const e=[],t=[],n=[];let s=i;const r=i-ur+1+Yf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ur?l=Yf[o-i+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*d),x=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let I=0;I<d;I++){const w=I%3*2/3-1,U=I>2?0:-1,S=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];A.set(S,_*g*I),x.set(f,m*g*I);const M=[I,I,I,I,I,I];E.set(M,p*g*I)}const C=new xn;C.setAttribute("position",new Kt(A,_)),C.setAttribute("uv",new Kt(x,m)),C.setAttribute("faceIndex",new Kt(E,p)),e.push(C),s>ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qf(i,e,t){const n=new Ds(i,e,t);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ya(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function T1(i,e,t){const n=new Float32Array(As),s=new B(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function $f(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Zf(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kc||l===jc,u=l===Cr||l===Pr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jf(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new jf(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function b1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function w1(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const A=d.array;_=d.version;for(let x=0,E=A.length;x<E;x+=3){const C=A[x+0],I=A[x+1],w=A[x+2];f.push(C,I,I,w,w,C)}}else if(g!==void 0){const A=g.array;_=g.version;for(let x=0,E=A.length/3-1;x<E;x+=3){const C=x+0,I=x+1,w=x+2;f.push(C,I,I,w,w,C)}}else return;const m=new(Em(f)?Rm:wm)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function R1(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(h[_]/o,f[_]);else{g.multiDrawElementsWEBGL(n,f,0,r,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function C1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function P1(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let C=a.attributes.position.count*E,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*I*4*h),U=new Am(w,C,I,h);U.type=ai,U.needsUpdate=!0;const S=E*4;for(let L=0;L<h;L++){const V=p[L],O=A[L],re=x[L],le=C*I*4*L;for(let ue=0;ue<V.count;ue++){const he=ue*S;g===!0&&(s.fromBufferAttribute(V,ue),w[le+he+0]=s.x,w[le+he+1]=s.y,w[le+he+2]=s.z,w[le+he+3]=0),_===!0&&(s.fromBufferAttribute(O,ue),w[le+he+4]=s.x,w[le+he+5]=s.y,w[le+he+6]=s.z,w[le+he+7]=0),m===!0&&(s.fromBufferAttribute(re,ue),w[le+he+8]=s.x,w[le+he+9]=s.y,w[le+he+10]=s.z,w[le+he+11]=re.itemSize===4?s.w:1)}}f={count:h,texture:U,size:new Ne(C,I)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function L1(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Dm extends Yt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vr&&(n=Ir),n===void 0&&u===Fo&&(n=zo),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nm=new Yt,Um=new Dm(1,1);Um.compareFunction=ym;const Om=new Am,Fm=new gA,Bm=new Lm,Jf=[],Qf=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Jf[s];if(r===void 0&&(r=new Float32Array(s),Jf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yl(i,e){let t=Qf[e];t===void 0&&(t=new Int32Array(e),Qf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function I1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function D1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function N1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function O1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;nd.set(n),i.uniformMatrix2fv(this.addr,!1,nd),kt(t,n)}}function F1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;td.set(n),i.uniformMatrix3fv(this.addr,!1,td),kt(t,n)}}function B1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;ed.set(n),i.uniformMatrix4fv(this.addr,!1,ed),kt(t,n)}}function k1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function z1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function V1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function G1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function W1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function X1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function K1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Um:Nm;t.setTexture2D(e||r,s)}function j1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fm,s)}function q1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bm,s)}function $1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Om,s)}function Z1(i){switch(i){case 5126:return I1;case 35664:return D1;case 35665:return N1;case 35666:return U1;case 35674:return O1;case 35675:return F1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return H1;case 35668:case 35672:return z1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return Y1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return $1}}function J1(i,e){i.uniform1fv(this.addr,e)}function Q1(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function eR(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function tR(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function nR(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iR(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sR(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rR(i,e){i.uniform1iv(this.addr,e)}function oR(i,e){i.uniform2iv(this.addr,e)}function aR(i,e){i.uniform3iv(this.addr,e)}function lR(i,e){i.uniform4iv(this.addr,e)}function cR(i,e){i.uniform1uiv(this.addr,e)}function uR(i,e){i.uniform2uiv(this.addr,e)}function hR(i,e){i.uniform3uiv(this.addr,e)}function fR(i,e){i.uniform4uiv(this.addr,e)}function dR(i,e,t){const n=this.cache,s=e.length,r=yl(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nm,r[o])}function pR(i,e,t){const n=this.cache,s=e.length,r=yl(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fm,r[o])}function mR(i,e,t){const n=this.cache,s=e.length,r=yl(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bm,r[o])}function gR(i,e,t){const n=this.cache,s=e.length,r=yl(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Om,r[o])}function _R(i){switch(i){case 5126:return J1;case 35664:return Q1;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return sR;case 5124:case 35670:return rR;case 35667:case 35671:return oR;case 35668:case 35672:return aR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return hR;case 36296:return fR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}class vR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z1(t.type)}}class xR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_R(t.type)}}class yR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function id(i,e){i.seq.push(e),i.map[e.id]=e}function MR(i,e,t){const n=i.name,s=n.length;for(vc.lastIndex=0;;){const r=vc.exec(n),o=vc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){id(t,c===void 0?new vR(a,i,e):new xR(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new yR(a),id(t,h)),t=h}}}class Ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);MR(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function sd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ER=37297;let SR=0;function TR(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function AR(i){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(i);let n;switch(e===t?n="":e===nl&&t===tl?n="LinearDisplayP3ToLinearSRGB":e===tl&&t===nl&&(n="LinearSRGBToLinearDisplayP3"),i){case jt:case vl:return[n,"LinearTransferOETF"];case on:case Du:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+TR(i.getShaderSource(e),o)}else return s}function bR(i,e){const t=AR(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wR(i,e){let t;switch(e){case xT:t="Linear";break;case yT:t="Reinhard";break;case MT:t="OptimizedCineon";break;case ET:t="ACESFilmic";break;case TT:t="AgX";break;case AT:t="Neutral";break;case ST:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function RR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function CR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function yo(i){return i!==""}function od(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(LR,DR)}const IR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function DR(i,e){let t=je[e];if(t===void 0){const n=IR.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}const NR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(i){return i.replace(NR,UR)}function UR(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===am?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===YS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function FR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Pr:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function kR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lu:e="ENVMAP_BLENDING_MULTIPLY";break;case _T:e="ENVMAP_BLENDING_MIX";break;case vT:e="ENVMAP_BLENDING_ADD";break}return e}function HR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zR(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=OR(t),c=FR(t),u=BR(t),h=kR(t),f=HR(t),d=RR(t),g=CR(r),_=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(m=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?je.tonemapping_pars_fragment:"",t.toneMapping!==is?wR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,bR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),o=Zc(o),o=od(o,t),o=ad(o,t),a=Zc(a),a=od(a,t),a=ad(a,t),o=ld(o),a=ld(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=A+m+o,E=A+p+a,C=sd(s,s.VERTEX_SHADER,x),I=sd(s,s.FRAGMENT_SHADER,E);s.attachShader(_,C),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(C).trim(),re=s.getShaderInfoLog(I).trim();let le=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,I);else{const he=rd(s,C,"vertex"),j=rd(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+he+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||re==="")&&(ue=!1);ue&&(L.diagnostics={runnable:le,programLog:V,vertexShader:{log:O,prefix:m},fragmentShader:{log:re,prefix:p}})}s.deleteShader(C),s.deleteShader(I),U=new Ba(s,_),S=PR(s,_)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,ER)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=I,this}let VR=0;class GR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WR(e),t.set(e,n)),n}}class WR{constructor(e){this.id=VR++,this.code=e,this.usedTimes=0}}function YR(i,e,t,n,s,r,o){const a=new Uu,l=new GR,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,V,O){const re=V.fog,le=O.geometry,ue=S.isMeshStandardMaterial?V.environment:null,he=(S.isMeshStandardMaterial?t:e).get(S.envMap||ue),j=he&&he.mapping===_l?he.image.height:null,me=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const _e=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ae=_e!==void 0?_e.length:0;let De=0;le.morphAttributes.position!==void 0&&(De=1),le.morphAttributes.normal!==void 0&&(De=2),le.morphAttributes.color!==void 0&&(De=3);let Je,ce,H,se;if(me){const Ht=ti[me];Je=Ht.vertexShader,ce=Ht.fragmentShader}else Je=S.vertexShader,ce=S.fragmentShader,l.update(S),H=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const $=i.getRenderTarget(),G=O.isInstancedMesh===!0,J=O.isBatchedMesh===!0,oe=!!S.map,F=!!S.matcap,b=!!he,P=!!S.aoMap,q=!!S.lightMap,K=!!S.bumpMap,ae=!!S.normalMap,T=!!S.displacementMap,y=!!S.emissiveMap,N=!!S.metalnessMap,z=!!S.roughnessMap,k=S.anisotropy>0,Z=S.clearcoat>0,de=S.iridescence>0,ee=S.sheen>0,ge=S.transmission>0,xe=k&&!!S.anisotropyMap,pe=Z&&!!S.clearcoatMap,ve=Z&&!!S.clearcoatNormalMap,Re=Z&&!!S.clearcoatRoughnessMap,be=de&&!!S.iridescenceMap,Ce=de&&!!S.iridescenceThicknessMap,$e=ee&&!!S.sheenColorMap,Ge=ee&&!!S.sheenRoughnessMap,it=!!S.specularMap,Fe=!!S.specularColorMap,He=!!S.specularIntensityMap,Le=ge&&!!S.transmissionMap,v=ge&&!!S.thicknessMap,Q=!!S.gradientMap,fe=!!S.alphaMap,Me=S.alphaTest>0,Pe=!!S.alphaHash,tt=!!S.extensions;let Qe=is;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const vt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:ce,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:J,instancing:G,instancingColor:G&&O.instanceColor!==null,instancingMorph:G&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:jt,alphaToCoverage:!!S.alphaToCoverage,map:oe,matcap:F,envMap:b,envMapMode:b&&he.mapping,envMapCubeUVHeight:j,aoMap:P,lightMap:q,bumpMap:K,normalMap:ae,displacementMap:f&&T,emissiveMap:y,normalMapObjectSpace:ae&&S.normalMapType===HT,normalMapTangentSpace:ae&&S.normalMapType===Iu,metalnessMap:N,roughnessMap:z,anisotropy:k,anisotropyMap:xe,clearcoat:Z,clearcoatMap:pe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Re,iridescence:de,iridescenceMap:be,iridescenceThicknessMap:Ce,sheen:ee,sheenColorMap:$e,sheenRoughnessMap:Ge,specularMap:it,specularColorMap:Fe,specularIntensityMap:He,transmission:ge,transmissionMap:Le,thicknessMap:v,gradientMap:Q,opaque:S.transparent===!1&&S.blending===_r&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:Me,alphaHash:Pe,combine:S.combine,mapUv:oe&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:q&&_(S.lightMap.channel),bumpMapUv:K&&_(S.bumpMap.channel),normalMapUv:ae&&_(S.normalMap.channel),displacementMapUv:T&&_(S.displacementMap.channel),emissiveMapUv:y&&_(S.emissiveMap.channel),metalnessMapUv:N&&_(S.metalnessMap.channel),roughnessMapUv:z&&_(S.roughnessMap.channel),anisotropyMapUv:xe&&_(S.anisotropyMap.channel),clearcoatMapUv:pe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(S.sheenRoughnessMap.channel),specularMapUv:it&&_(S.specularMap.channel),specularColorMapUv:Fe&&_(S.specularColorMap.channel),specularIntensityMapUv:He&&_(S.specularIntensityMap.channel),transmissionMapUv:Le&&_(S.transmissionMap.channel),thicknessMapUv:v&&_(S.thicknessMap.channel),alphaMapUv:fe&&_(S.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(ae||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!le.attributes.uv&&(oe||fe),fog:!!re,useFog:S.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:oe&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:tt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(A(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),S.push(a.mask)}function E(S){const M=g[S.type];let L;if(M){const V=ti[M];L=RA.clone(V.uniforms)}else L=S.uniforms;return L}function C(S,M){let L;for(let V=0,O=u.length;V<O;V++){const re=u[V];if(re.cacheKey===M){L=re,++L.usedTimes;break}}return L===void 0&&(L=new zR(i,M,S,r),u.push(L)),L}function I(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:I,releaseShaderCache:w,programs:u,dispose:U}}function XR(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function KR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ud(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||KR),n.length>1&&n.sort(f||ud),s.length>1&&s.sort(f||ud)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function jR(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new hd,i.set(n,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ue};break;case"SpotLight":t={position:new B,direction:new B,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function $R(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ZR=0;function JR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function QR(i){const e=new qR,t=$R(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new Xe,o=new Xe;function a(c,u){let h=0,f=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let g=0,_=0,m=0,p=0,A=0,x=0,E=0,C=0,I=0,w=0,U=0;c.sort(JR);const S=u===!0?Math.PI:1;for(let L=0,V=c.length;L<V;L++){const O=c[L],re=O.color,le=O.intensity,ue=O.distance,he=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=re.r*le*S,f+=re.g*le*S,d+=re.b*le*S;else if(O.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(O.sh.coefficients[j],le);U++}else if(O.isDirectionalLight){const j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const me=O.shadow,_e=t.get(O);_e.shadowBias=me.bias,_e.shadowNormalBias=me.normalBias,_e.shadowRadius=me.radius,_e.shadowMapSize=me.mapSize,n.directionalShadow[g]=_e,n.directionalShadowMap[g]=he,n.directionalShadowMatrix[g]=O.shadow.matrix,x++}n.directional[g]=j,g++}else if(O.isSpotLight){const j=e.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(re).multiplyScalar(le*S),j.distance=ue,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,n.spot[m]=j;const me=O.shadow;if(O.map&&(n.spotLightMap[I]=O.map,I++,me.updateMatrices(O),O.castShadow&&w++),n.spotLightMatrix[m]=me.matrix,O.castShadow){const _e=t.get(O);_e.shadowBias=me.bias,_e.shadowNormalBias=me.normalBias,_e.shadowRadius=me.radius,_e.shadowMapSize=me.mapSize,n.spotShadow[m]=_e,n.spotShadowMap[m]=he,C++}m++}else if(O.isRectAreaLight){const j=e.get(O);j.color.copy(re).multiplyScalar(le),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),n.rectArea[p]=j,p++}else if(O.isPointLight){const j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity*S),j.distance=O.distance,j.decay=O.decay,O.castShadow){const me=O.shadow,_e=t.get(O);_e.shadowBias=me.bias,_e.shadowNormalBias=me.normalBias,_e.shadowRadius=me.radius,_e.shadowMapSize=me.mapSize,_e.shadowCameraNear=me.camera.near,_e.shadowCameraFar=me.camera.far,n.pointShadow[_]=_e,n.pointShadowMap[_]=he,n.pointShadowMatrix[_]=O.shadow.matrix,E++}n.point[_]=j,_++}else if(O.isHemisphereLight){const j=e.get(O);j.skyColor.copy(O.color).multiplyScalar(le*S),j.groundColor.copy(O.groundColor).multiplyScalar(le*S),n.hemi[A]=j,A++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==g||M.pointLength!==_||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==A||M.numDirectionalShadows!==x||M.numPointShadows!==E||M.numSpotShadows!==C||M.numSpotMaps!==I||M.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=p,n.point.length=_,n.hemi.length=A,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=C+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=U,M.directionalLength=g,M.pointLength=_,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=A,M.numDirectionalShadows=x,M.numPointShadows=E,M.numSpotShadows=C,M.numSpotMaps=I,M.numLightProbes=U,n.version=ZR++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const x=c[p];if(x.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(x.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function fd(i){const e=new QR(i),t=[],n=[];function s(){t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eC(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new fd(i),e.set(s,[a])):r>=o.length?(a=new fd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class tC extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nC extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rC(i,e,t){let n=new Ou;const s=new Ne,r=new Ne,o=new pt,a=new tC({depthPacking:kT}),l=new nC,c={},u=t.maxTextureSize,h={[Ci]:_n,[_n]:Ci,[ri]:ri},f=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:iC,fragmentShader:sC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=am;let p=this.type;this.render=function(I,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ns),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const O=p!==Mi&&this.type===Mi,re=p===Mi&&this.type!==Mi;for(let le=0,ue=I.length;le<ue;le++){const he=I[le],j=he.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const me=j.getFrameExtents();if(s.multiply(me),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,j.mapSize.y=r.y)),j.map===null||O===!0||re===!0){const Ae=this.type!==Mi?{minFilter:hn,magFilter:hn}:{};j.map!==null&&j.map.dispose(),j.map=new Ds(s.x,s.y,Ae),j.map.texture.name=he.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const _e=j.getViewportCount();for(let Ae=0;Ae<_e;Ae++){const De=j.getViewport(Ae);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),V.viewport(o),j.updateMatrices(he,Ae),n=j.getFrustum(),E(w,U,j.camera,he,this.type)}j.isPointLightShadow!==!0&&this.type===Mi&&A(j,U),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function A(I,w){const U=e.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ds(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(w,null,U,f,_,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(w,null,U,d,_,null)}function x(I,w,U,S){let M=null;const L=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=M.uuid,O=w.uuid;let re=c[V];re===void 0&&(re={},c[V]=re);let le=re[O];le===void 0&&(le=M.clone(),re[O]=le,w.addEventListener("dispose",C)),M=le}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Mi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=U}return M}function E(I,w,U,S,M){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===Mi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const O=e.update(I),re=I.material;if(Array.isArray(re)){const le=O.groups;for(let ue=0,he=le.length;ue<he;ue++){const j=le[ue],me=re[j.materialIndex];if(me&&me.visible){const _e=x(I,me,S,M);I.onBeforeShadow(i,I,w,U,O,_e,j),i.renderBufferDirect(U,null,O,_e,I,j),I.onAfterShadow(i,I,w,U,O,_e,j)}}}else if(re.visible){const le=x(I,re,S,M);I.onBeforeShadow(i,I,w,U,O,le,null),i.renderBufferDirect(U,null,O,le,I,null),I.onAfterShadow(i,I,w,U,O,le,null)}}const V=I.children;for(let O=0,re=V.length;O<re;O++)E(V[O],w,U,S,M)}function C(I){I.target.removeEventListener("dispose",C);for(const U in c){const S=c[U],M=I.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function oC(i){function e(){let v=!1;const Q=new pt;let fe=null;const Me=new pt(0,0,0,0);return{setMask:function(Pe){fe!==Pe&&!v&&(i.colorMask(Pe,Pe,Pe,Pe),fe=Pe)},setLocked:function(Pe){v=Pe},setClear:function(Pe,tt,Qe,vt,Ht){Ht===!0&&(Pe*=vt,tt*=vt,Qe*=vt),Q.set(Pe,tt,Qe,vt),Me.equals(Q)===!1&&(i.clearColor(Pe,tt,Qe,vt),Me.copy(Q))},reset:function(){v=!1,fe=null,Me.set(-1,0,0,0)}}}function t(){let v=!1,Q=null,fe=null,Me=null;return{setTest:function(Pe){Pe?se(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(Pe){Q!==Pe&&!v&&(i.depthMask(Pe),Q=Pe)},setFunc:function(Pe){if(fe!==Pe){switch(Pe){case uT:i.depthFunc(i.NEVER);break;case hT:i.depthFunc(i.ALWAYS);break;case fT:i.depthFunc(i.LESS);break;case Za:i.depthFunc(i.LEQUAL);break;case dT:i.depthFunc(i.EQUAL);break;case pT:i.depthFunc(i.GEQUAL);break;case mT:i.depthFunc(i.GREATER);break;case gT:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Pe}},setLocked:function(Pe){v=Pe},setClear:function(Pe){Me!==Pe&&(i.clearDepth(Pe),Me=Pe)},reset:function(){v=!1,Q=null,fe=null,Me=null}}}function n(){let v=!1,Q=null,fe=null,Me=null,Pe=null,tt=null,Qe=null,vt=null,Ht=null;return{setTest:function(ut){v||(ut?se(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(ut){Q!==ut&&!v&&(i.stencilMask(ut),Q=ut)},setFunc:function(ut,Ct,Pt){(fe!==ut||Me!==Ct||Pe!==Pt)&&(i.stencilFunc(ut,Ct,Pt),fe=ut,Me=Ct,Pe=Pt)},setOp:function(ut,Ct,Pt){(tt!==ut||Qe!==Ct||vt!==Pt)&&(i.stencilOp(ut,Ct,Pt),tt=ut,Qe=Ct,vt=Pt)},setLocked:function(ut){v=ut},setClear:function(ut){Ht!==ut&&(i.clearStencil(ut),Ht=ut)},reset:function(){v=!1,Q=null,fe=null,Me=null,Pe=null,tt=null,Qe=null,vt=null,Ht=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,A=null,x=null,E=null,C=null,I=new Ue(0,0,0),w=0,U=!1,S=null,M=null,L=null,V=null,O=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ue=0;const he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(he)[1]),le=ue>=1):he.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),le=ue>=2);let j=null,me={};const _e=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),De=new pt().fromArray(_e),Je=new pt().fromArray(Ae);function ce(v,Q,fe,Me){const Pe=new Uint8Array(4),tt=i.createTexture();i.bindTexture(v,tt),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<fe;Qe++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Q+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return tt}const H={};H[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),se(i.DEPTH_TEST),r.setFunc(Za),K(!1),ae(Gh),se(i.CULL_FACE),P(ns);function se(v){c[v]!==!0&&(i.enable(v),c[v]=!0)}function $(v){c[v]!==!1&&(i.disable(v),c[v]=!1)}function G(v,Q){return u[v]!==Q?(i.bindFramebuffer(v,Q),u[v]=Q,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function J(v,Q){let fe=f,Me=!1;if(v){fe=h.get(Q),fe===void 0&&(fe=[],h.set(Q,fe));const Pe=v.textures;if(fe.length!==Pe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Qe=Pe.length;tt<Qe;tt++)fe[tt]=i.COLOR_ATTACHMENT0+tt;fe.length=Pe.length,Me=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Me=!0);Me&&i.drawBuffers(fe)}function oe(v){return d!==v?(i.useProgram(v),d=v,!0):!1}const F={[Ts]:i.FUNC_ADD,[KS]:i.FUNC_SUBTRACT,[jS]:i.FUNC_REVERSE_SUBTRACT};F[qS]=i.MIN,F[$S]=i.MAX;const b={[ZS]:i.ZERO,[JS]:i.ONE,[QS]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[rT]:i.SRC_ALPHA_SATURATE,[iT]:i.DST_COLOR,[tT]:i.DST_ALPHA,[eT]:i.ONE_MINUS_SRC_COLOR,[Xc]:i.ONE_MINUS_SRC_ALPHA,[sT]:i.ONE_MINUS_DST_COLOR,[nT]:i.ONE_MINUS_DST_ALPHA,[oT]:i.CONSTANT_COLOR,[aT]:i.ONE_MINUS_CONSTANT_COLOR,[lT]:i.CONSTANT_ALPHA,[cT]:i.ONE_MINUS_CONSTANT_ALPHA};function P(v,Q,fe,Me,Pe,tt,Qe,vt,Ht,ut){if(v===ns){g===!0&&($(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),v!==XS){if(v!==_||ut!==U){if((m!==Ts||x!==Ts)&&(i.blendEquation(i.FUNC_ADD),m=Ts,x=Ts),ut)switch(v){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}p=null,A=null,E=null,C=null,I.set(0,0,0),w=0,_=v,U=ut}return}Pe=Pe||Q,tt=tt||fe,Qe=Qe||Me,(Q!==m||Pe!==x)&&(i.blendEquationSeparate(F[Q],F[Pe]),m=Q,x=Pe),(fe!==p||Me!==A||tt!==E||Qe!==C)&&(i.blendFuncSeparate(b[fe],b[Me],b[tt],b[Qe]),p=fe,A=Me,E=tt,C=Qe),(vt.equals(I)===!1||Ht!==w)&&(i.blendColor(vt.r,vt.g,vt.b,Ht),I.copy(vt),w=Ht),_=v,U=!1}function q(v,Q){v.side===ri?$(i.CULL_FACE):se(i.CULL_FACE);let fe=v.side===_n;Q&&(fe=!fe),K(fe),v.blending===_r&&v.transparent===!1?P(ns):P(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const Me=v.stencilWrite;o.setTest(Me),Me&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),y(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(v){S!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),S=v)}function ae(v){v!==GS?(se(i.CULL_FACE),v!==M&&(v===Gh?i.cullFace(i.BACK):v===WS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),M=v}function T(v){v!==L&&(le&&i.lineWidth(v),L=v)}function y(v,Q,fe){v?(se(i.POLYGON_OFFSET_FILL),(V!==Q||O!==fe)&&(i.polygonOffset(Q,fe),V=Q,O=fe)):$(i.POLYGON_OFFSET_FILL)}function N(v){v?se(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function z(v){v===void 0&&(v=i.TEXTURE0+re-1),j!==v&&(i.activeTexture(v),j=v)}function k(v,Q,fe){fe===void 0&&(j===null?fe=i.TEXTURE0+re-1:fe=j);let Me=me[fe];Me===void 0&&(Me={type:void 0,texture:void 0},me[fe]=Me),(Me.type!==v||Me.texture!==Q)&&(j!==fe&&(i.activeTexture(fe),j=fe),i.bindTexture(v,Q||H[v]),Me.type=v,Me.texture=Q)}function Z(){const v=me[j];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ge(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ge(v){De.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),De.copy(v))}function it(v){Je.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),Je.copy(v))}function Fe(v,Q){let fe=l.get(Q);fe===void 0&&(fe=new WeakMap,l.set(Q,fe));let Me=fe.get(v);Me===void 0&&(Me=i.getUniformBlockIndex(Q,v.name),fe.set(v,Me))}function He(v,Q){const Me=l.get(Q).get(v);a.get(Q)!==Me&&(i.uniformBlockBinding(Q,Me,v.__bindingPointIndex),a.set(Q,Me))}function Le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},j=null,me={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,A=null,x=null,E=null,C=null,I=new Ue(0,0,0),w=0,U=!1,S=null,M=null,L=null,V=null,O=null,De.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:se,disable:$,bindFramebuffer:G,drawBuffers:J,useProgram:oe,setBlending:P,setMaterial:q,setFlipSided:K,setCullFace:ae,setLineWidth:T,setPolygonOffset:y,setScissorTest:N,activeTexture:z,bindTexture:k,unbindTexture:Z,compressedTexImage2D:de,compressedTexImage3D:ee,texImage2D:Ce,texImage3D:$e,updateUBOMapping:Fe,uniformBlockBinding:He,texStorage2D:Re,texStorage3D:be,texSubImage2D:ge,texSubImage3D:xe,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:Ge,viewport:it,reset:Le}}function aC(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):ko("canvas")}function _(T,y,N){let z=1;const k=ae(T);if((k.width>N||k.height>N)&&(z=N/Math.max(k.width,k.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(z*k.width),de=Math.floor(z*k.height);h===void 0&&(h=g(Z,de));const ee=y?g(Z,de):h;return ee.width=Z,ee.height=de,ee.getContext("2d").drawImage(T,0,0,Z,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+Z+"x"+de+")."),ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==hn&&T.minFilter!==bn}function p(T){i.generateMipmap(T)}function A(T,y,N,z,k=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=y;if(y===i.RED&&(N===i.FLOAT&&(Z=i.R32F),N===i.HALF_FLOAT&&(Z=i.R16F),N===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.R8UI),N===i.UNSIGNED_SHORT&&(Z=i.R16UI),N===i.UNSIGNED_INT&&(Z=i.R32UI),N===i.BYTE&&(Z=i.R8I),N===i.SHORT&&(Z=i.R16I),N===i.INT&&(Z=i.R32I)),y===i.RG&&(N===i.FLOAT&&(Z=i.RG32F),N===i.HALF_FLOAT&&(Z=i.RG16F),N===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RG8UI),N===i.UNSIGNED_SHORT&&(Z=i.RG16UI),N===i.UNSIGNED_INT&&(Z=i.RG32UI),N===i.BYTE&&(Z=i.RG8I),N===i.SHORT&&(Z=i.RG16I),N===i.INT&&(Z=i.RG32I)),y===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){const de=k?el:ot.getTransfer(z);N===i.FLOAT&&(Z=i.RGBA32F),N===i.HALF_FLOAT&&(Z=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Z=de===mt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){const y=T.target;y.removeEventListener("dispose",E),I(y),y.isVideoTexture&&u.delete(y)}function C(T){const y=T.target;y.removeEventListener("dispose",C),U(y)}function I(T){const y=n.get(T);if(y.__webglInit===void 0)return;const N=T.source,z=f.get(N);if(z){const k=z[y.__cacheKey];k.usedTimes--,k.usedTimes===0&&w(T),Object.keys(z).length===0&&f.delete(N)}n.remove(T)}function w(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const N=T.source,z=f.get(N);delete z[y.__cacheKey],o.memory.textures--}function U(T){const y=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let k=0;k<y.__webglFramebuffer[z].length;k++)i.deleteFramebuffer(y.__webglFramebuffer[z][k]);else i.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)i.deleteFramebuffer(y.__webglFramebuffer[z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=T.textures;for(let z=0,k=N.length;z<k;z++){const Z=n.get(N[z]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(N[z])}n.remove(T)}let S=0;function M(){S=0}function L(){const T=S;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),S+=1,T}function V(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function O(T,y){const N=n.get(T);if(T.isVideoTexture&&q(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(N,T,y);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+y)}function re(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){De(N,T,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+y)}function le(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){De(N,T,y);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+y)}function ue(T,y){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Je(N,T,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+y)}const he={[Lr]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},j={[hn]:i.NEAREST,[cm]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},me={[zT]:i.NEVER,[KT]:i.ALWAYS,[VT]:i.LESS,[ym]:i.LEQUAL,[GT]:i.EQUAL,[XT]:i.GEQUAL,[WT]:i.GREATER,[YT]:i.NOTEQUAL};function _e(T,y){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bn||y.magFilter===Fa||y.magFilter===xo||y.magFilter===Si||y.minFilter===bn||y.minFilter===Fa||y.minFilter===xo||y.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,he[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,j[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,j[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==xo&&y.minFilter!==Si||y.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ae(T,y){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",E));const z=y.source;let k=f.get(z);k===void 0&&(k={},f.set(z,k));const Z=V(y);if(Z!==T.__cacheKey){k[Z]===void 0&&(k[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),k[Z].usedTimes++;const de=k[T.__cacheKey];de!==void 0&&(k[T.__cacheKey].usedTimes--,de.usedTimes===0&&w(y)),T.__cacheKey=Z,T.__webglTexture=k[Z].texture}return N}function De(T,y,N){let z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=i.TEXTURE_3D);const k=Ae(T,y),Z=y.source;t.bindTexture(z,T.__webglTexture,i.TEXTURE0+N);const de=n.get(Z);if(Z.version!==de.__version||k===!0){t.activeTexture(i.TEXTURE0+N);const ee=ot.getPrimaries(ot.workingColorSpace),ge=y.colorSpace===$i?null:ot.getPrimaries(y.colorSpace),xe=y.colorSpace===$i||ee===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let pe=_(y.image,!1,s.maxTextureSize);pe=K(y,pe);const ve=r.convert(y.format,y.colorSpace),Re=r.convert(y.type);let be=A(y.internalFormat,ve,Re,y.colorSpace,y.isVideoTexture);_e(z,y);let Ce;const $e=y.mipmaps,Ge=y.isVideoTexture!==!0&&be!==vm,it=de.__version===void 0||k===!0,Fe=Z.dataReady,He=x(y,pe);if(y.isDepthTexture)be=i.DEPTH_COMPONENT16,y.type===ai?be=i.DEPTH_COMPONENT32F:y.type===Ir?be=i.DEPTH_COMPONENT24:y.type===zo&&(be=i.DEPTH24_STENCIL8),it&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,be,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,be,pe.width,pe.height,0,ve,Re,null));else if(y.isDataTexture)if($e.length>0){Ge&&it&&t.texStorage2D(i.TEXTURE_2D,He,be,$e[0].width,$e[0].height);for(let Le=0,v=$e.length;Le<v;Le++)Ce=$e[Le],Ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Ce.width,Ce.height,ve,Re,Ce.data):t.texImage2D(i.TEXTURE_2D,Le,be,Ce.width,Ce.height,0,ve,Re,Ce.data);y.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(i.TEXTURE_2D,He,be,pe.width,pe.height),Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,ve,Re,pe.data)):t.texImage2D(i.TEXTURE_2D,0,be,pe.width,pe.height,0,ve,Re,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,be,$e[0].width,$e[0].height,pe.depth);for(let Le=0,v=$e.length;Le<v;Le++)Ce=$e[Le],y.format!==Yn?ve!==null?Ge?Fe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,Ce.width,Ce.height,pe.depth,ve,Ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Le,be,Ce.width,Ce.height,pe.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,Ce.width,Ce.height,pe.depth,ve,Re,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Le,be,Ce.width,Ce.height,pe.depth,0,ve,Re,Ce.data)}else{Ge&&it&&t.texStorage2D(i.TEXTURE_2D,He,be,$e[0].width,$e[0].height);for(let Le=0,v=$e.length;Le<v;Le++)Ce=$e[Le],y.format!==Yn?ve!==null?Ge?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Le,0,0,Ce.width,Ce.height,ve,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Le,be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Ce.width,Ce.height,ve,Re,Ce.data):t.texImage2D(i.TEXTURE_2D,Le,be,Ce.width,Ce.height,0,ve,Re,Ce.data)}else if(y.isDataArrayTexture)Ge?(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,be,pe.width,pe.height,pe.depth),Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ve,Re,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,pe.width,pe.height,pe.depth,0,ve,Re,pe.data);else if(y.isData3DTexture)Ge?(it&&t.texStorage3D(i.TEXTURE_3D,He,be,pe.width,pe.height,pe.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ve,Re,pe.data)):t.texImage3D(i.TEXTURE_3D,0,be,pe.width,pe.height,pe.depth,0,ve,Re,pe.data);else if(y.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(i.TEXTURE_2D,He,be,pe.width,pe.height);else{let Le=pe.width,v=pe.height;for(let Q=0;Q<He;Q++)t.texImage2D(i.TEXTURE_2D,Q,be,Le,v,0,ve,Re,null),Le>>=1,v>>=1}}else if($e.length>0){if(Ge&&it){const Le=ae($e[0]);t.texStorage2D(i.TEXTURE_2D,He,be,Le.width,Le.height)}for(let Le=0,v=$e.length;Le<v;Le++)Ce=$e[Le],Ge?Fe&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,ve,Re,Ce):t.texImage2D(i.TEXTURE_2D,Le,be,ve,Re,Ce);y.generateMipmaps=!1}else if(Ge){if(it){const Le=ae(pe);t.texStorage2D(i.TEXTURE_2D,He,be,Le.width,Le.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Re,pe)}else t.texImage2D(i.TEXTURE_2D,0,be,ve,Re,pe);m(y)&&p(z),de.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Je(T,y,N){if(y.image.length!==6)return;const z=Ae(T,y),k=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const Z=n.get(k);if(k.version!==Z.__version||z===!0){t.activeTexture(i.TEXTURE0+N);const de=ot.getPrimaries(ot.workingColorSpace),ee=y.colorSpace===$i?null:ot.getPrimaries(y.colorSpace),ge=y.colorSpace===$i||de===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const xe=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let v=0;v<6;v++)!xe&&!pe?ve[v]=_(y.image[v],!0,s.maxCubemapSize):ve[v]=pe?y.image[v].image:y.image[v],ve[v]=K(y,ve[v]);const Re=ve[0],be=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),$e=A(y.internalFormat,be,Ce,y.colorSpace),Ge=y.isVideoTexture!==!0,it=Z.__version===void 0||z===!0,Fe=k.dataReady;let He=x(y,Re);_e(i.TEXTURE_CUBE_MAP,y);let Le;if(xe){Ge&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,$e,Re.width,Re.height);for(let v=0;v<6;v++){Le=ve[v].mipmaps;for(let Q=0;Q<Le.length;Q++){const fe=Le[Q];y.format!==Yn?be!==null?Ge?Fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q,0,0,fe.width,fe.height,be,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q,$e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q,0,0,fe.width,fe.height,be,Ce,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q,$e,fe.width,fe.height,0,be,Ce,fe.data)}}}else{if(Le=y.mipmaps,Ge&&it){Le.length>0&&He++;const v=ae(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,$e,v.width,v.height)}for(let v=0;v<6;v++)if(pe){Ge?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,ve[v].width,ve[v].height,be,Ce,ve[v].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,$e,ve[v].width,ve[v].height,0,be,Ce,ve[v].data);for(let Q=0;Q<Le.length;Q++){const Me=Le[Q].image[v].image;Ge?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q+1,0,0,Me.width,Me.height,be,Ce,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q+1,$e,Me.width,Me.height,0,be,Ce,Me.data)}}else{Ge?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,0,0,be,Ce,ve[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0,$e,be,Ce,ve[v]);for(let Q=0;Q<Le.length;Q++){const fe=Le[Q];Ge?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q+1,0,0,be,Ce,fe.image[v]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q+1,$e,be,Ce,fe.image[v])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=k.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ce(T,y,N,z,k,Z){const de=r.convert(N.format,N.colorSpace),ee=r.convert(N.type),ge=A(N.internalFormat,de,ee,N.colorSpace);if(!n.get(y).__hasExternalTextures){const pe=Math.max(1,y.width>>Z),ve=Math.max(1,y.height>>Z);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,Z,ge,pe,ve,y.depth,0,de,ee,null):t.texImage2D(k,Z,ge,pe,ve,0,de,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),P(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,k,n.get(N).__webglTexture,0,b(y)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,k,n.get(N).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(T,y,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer&&!y.stencilBuffer){let z=i.DEPTH_COMPONENT24;if(N||P(y)){const k=y.depthTexture;k&&k.isDepthTexture&&(k.type===ai?z=i.DEPTH_COMPONENT32F:k.type===Ir&&(z=i.DEPTH_COMPONENT24));const Z=b(y);P(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,z,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,z,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,z,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(y.depthBuffer&&y.stencilBuffer){const z=b(y);N&&P(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,y.width,y.height):P(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const z=y.textures;for(let k=0;k<z.length;k++){const Z=z[k],de=r.convert(Z.format,Z.colorSpace),ee=r.convert(Z.type),ge=A(Z.internalFormat,de,ee,Z.colorSpace),xe=b(y);N&&P(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ge,y.width,y.height):P(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ge,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ge,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);const z=n.get(y.depthTexture).__webglTexture,k=b(y);if(y.depthTexture.format===vr)P(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(y.depthTexture.format===Fo)P(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function $(T){const y=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");se(y.__webglFramebuffer,T)}else if(N){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]=i.createRenderbuffer(),H(y.__webglDepthbuffer[z],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),H(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(T,y,N){const z=n.get(T);y!==void 0&&ce(z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&$(T)}function J(T){const y=T.texture,N=n.get(T),z=n.get(y);T.addEventListener("dispose",C);const k=T.textures,Z=T.isWebGLCubeRenderTarget===!0,de=k.length>1;if(de||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=y.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[ee]=[];for(let ge=0;ge<y.mipmaps.length;ge++)N.__webglFramebuffer[ee][ge]=i.createFramebuffer()}else N.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)N.__webglFramebuffer[ee]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(de)for(let ee=0,ge=k.length;ee<ge;ee++){const xe=n.get(k[ee]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&P(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ee=0;ee<k.length;ee++){const ge=k[ee];N.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ee]);const xe=r.convert(ge.format,ge.colorSpace),pe=r.convert(ge.type),ve=A(ge.internalFormat,xe,pe,ge.colorSpace,T.isXRRenderTarget===!0),Re=b(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ve,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,N.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),H(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),_e(i.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ce(N.__webglFramebuffer[ee][ge],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge);else ce(N.__webglFramebuffer[ee],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,ge=k.length;ee<ge;ee++){const xe=k[ee],pe=n.get(xe);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),_e(i.TEXTURE_2D,xe),ce(N.__webglFramebuffer,T,xe,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,0),m(xe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,z.__webglTexture),_e(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ce(N.__webglFramebuffer[ge],T,y,i.COLOR_ATTACHMENT0,ee,ge);else ce(N.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,ee,0);m(y)&&p(ee),t.unbindTexture()}T.depthBuffer&&$(T)}function oe(T){const y=T.textures;for(let N=0,z=y.length;N<z;N++){const k=y[N];if(m(k)){const Z=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(k).__webglTexture;t.bindTexture(Z,de),p(Z),t.unbindTexture()}}}function F(T){if(T.samples>0&&P(T)===!1){const y=T.textures,N=T.width,z=T.height;let k=i.COLOR_BUFFER_BIT;const Z=[],de=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=n.get(T),ge=y.length>1;if(ge)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){Z.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&Z.push(de);const pe=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(pe===!1&&(T.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&ee.__isTransmissionRenderTarget!==!0&&(k|=i.STENCIL_BUFFER_BIT)),ge&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ee.__webglColorRenderbuffer[xe]),pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),ge){const ve=n.get(y[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,N,z,0,0,N,z,k,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ee.__webglColorRenderbuffer[xe]);const pe=n.get(y[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function b(T){return Math.min(s.maxSamples,T.samples)}function P(T){const y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function K(T,y){const N=T.colorSpace,z=T.format,k=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==jt&&N!==$i&&(ot.getTransfer(N)===mt?(z!==Yn||k!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=G,this.setupRenderTarget=J,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=P}function lC(i,e){function t(n,s=$i){let r;const o=ot.getTransfer(s);if(n===ss)return i.UNSIGNED_BYTE;if(n===fm)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dm)return i.UNSIGNED_SHORT_5_5_5_1;if(n===CT)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wT)return i.BYTE;if(n===RT)return i.SHORT;if(n===um)return i.UNSIGNED_SHORT;if(n===hm)return i.INT;if(n===Ir)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===Qa)return i.HALF_FLOAT;if(n===PT)return i.ALPHA;if(n===LT)return i.RGB;if(n===Yn)return i.RGBA;if(n===IT)return i.LUMINANCE;if(n===DT)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Fo)return i.DEPTH_STENCIL;if(n===pm)return i.RED;if(n===mm)return i.RED_INTEGER;if(n===NT)return i.RG;if(n===gm)return i.RG_INTEGER;if(n===_m)return i.RGBA_INTEGER;if(n===Gl||n===Wl||n===Yl||n===Xl)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jh||n===qh||n===$h||n===Zh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$h)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vm)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Jh||n===Qh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jh)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qh)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ef||n===tf||n===nf||n===sf||n===rf||n===of||n===af||n===lf||n===cf||n===uf||n===hf||n===ff||n===df||n===pf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ef)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===of)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===af)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ff)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===df)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===mf||n===gf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Kl)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===UT||n===_f||n===vf||n===xf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_f)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class cC extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ji extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uC={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uC)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Yt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new as({vertexShader:hC,fragmentShader:fC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ft(new xl(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class pC extends Fs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new dC,m=t.getContextAttributes();let p=null,A=null;const x=[],E=[],C=new Ne;let I=null;const w=new ln;w.layers.enable(1),w.viewport=new pt;const U=new ln;U.layers.enable(2),U.viewport=new pt;const S=[w,U],M=new cC;M.layers.enable(1),M.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let H=x[ce];return H===void 0&&(H=new xc,x[ce]=H),H.getTargetRaySpace()},this.getControllerGrip=function(ce){let H=x[ce];return H===void 0&&(H=new xc,x[ce]=H),H.getGripSpace()},this.getHand=function(ce){let H=x[ce];return H===void 0&&(H=new xc,x[ce]=H),H.getHandSpace()};function O(ce){const H=E.indexOf(ce.inputSource);if(H===-1)return;const se=x[H];se!==void 0&&(se.update(ce.inputSource,ce.frame,c||o),se.dispatchEvent({type:ce.type,data:ce.inputSource}))}function re(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",le);for(let ce=0;ce<x.length;ce++){const H=E[ce];H!==null&&(E[ce]=null,x[ce].disconnect(H))}L=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,A=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",re),s.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const H={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ds(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let H=null,se=null,$=null;m.depth&&($=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=m.stencil?Fo:vr,se=m.stencil?zo:Ir);const G={colorFormat:t.RGBA8,depthFormat:$,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(G),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ds(f.textureWidth,f.textureHeight,{format:Yn,type:ss,depthTexture:new Dm(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const J=e.properties.get(A);J.__ignoreDepthValues=f.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function le(ce){for(let H=0;H<ce.removed.length;H++){const se=ce.removed[H],$=E.indexOf(se);$>=0&&(E[$]=null,x[$].disconnect(se))}for(let H=0;H<ce.added.length;H++){const se=ce.added[H];let $=E.indexOf(se);if($===-1){for(let J=0;J<x.length;J++)if(J>=E.length){E.push(se),$=J;break}else if(E[J]===null){E[J]=se,$=J;break}if($===-1)break}const G=x[$];G&&G.connect(se)}}const ue=new B,he=new B;function j(ce,H,se){ue.setFromMatrixPosition(H.matrixWorld),he.setFromMatrixPosition(se.matrixWorld);const $=ue.distanceTo(he),G=H.projectionMatrix.elements,J=se.projectionMatrix.elements,oe=G[14]/(G[10]-1),F=G[14]/(G[10]+1),b=(G[9]+1)/G[5],P=(G[9]-1)/G[5],q=(G[8]-1)/G[0],K=(J[8]+1)/J[0],ae=oe*q,T=oe*K,y=$/(-q+K),N=y*-q;H.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(N),ce.translateZ(y),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert();const z=oe+y,k=F+y,Z=ae-N,de=T+($-N),ee=b*F/k*z,ge=P*F/k*z;ce.projectionMatrix.makePerspective(Z,de,ee,ge,z,k),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}function me(ce,H){H===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(H.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;_.texture!==null&&(ce.near=_.depthNear,ce.far=_.depthFar),M.near=U.near=w.near=ce.near,M.far=U.far=w.far=ce.far,(L!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,V=M.far,w.near=L,w.far=V,U.near=L,U.far=V,w.updateProjectionMatrix(),U.updateProjectionMatrix(),ce.updateProjectionMatrix());const H=ce.parent,se=M.cameras;me(M,H);for(let $=0;$<se.length;$++)me(se[$],H);se.length===2?j(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),_e(ce,M,H)};function _e(ce,H,se){se===null?ce.matrix.copy(H.matrixWorld):(ce.matrix.copy(se.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(H.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(H.projectionMatrix),ce.projectionMatrixInverse.copy(H.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Nr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ce){l=ce,f!==null&&(f.fixedFoveation=ce),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null};let Ae=null;function De(ce,H){if(u=H.getViewerPose(c||o),g=H,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let $=!1;se.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let J=0;J<se.length;J++){const oe=se[J];let F=null;if(d!==null)F=d.getViewport(oe);else{const P=h.getViewSubImage(f,oe);F=P.viewport,J===0&&(e.setRenderTargetTextures(A,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(A))}let b=S[J];b===void 0&&(b=new ln,b.layers.enable(J),b.viewport=new pt,S[J]=b),b.matrix.fromArray(oe.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(oe.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(F.x,F.y,F.width,F.height),J===0&&(M.matrix.copy(b.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(b)}const G=s.enabledFeatures;if(G&&G.includes("depth-sensing")){const J=h.getDepthInformation(se[0]);J&&J.isValid&&J.texture&&_.init(e,J,s.renderState)}}for(let se=0;se<x.length;se++){const $=E[se],G=x[se];$!==null&&G!==void 0&&G.update($,H,c||o)}_.render(e,M),Ae&&Ae(ce,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const Je=new Im;Je.setAnimationLoop(De),this.setAnimationLoop=function(ce){Ae=ce},this.dispose=function(){}}}const vs=new Zn,mC=new Xe;function gC(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),x=A.envMap,E=A.envMapRotation;if(x&&(m.envMap.value=x,vs.copy(E),vs.x*=-1,vs.y*=-1,vs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(mC.makeRotationFromEuler(vs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const C=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*C,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _C(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,x){const E=x.program;n.uniformBlockBinding(A,E)}function c(A,x){let E=s[A.id];E===void 0&&(g(A),E=u(A),s[A.id]=E,A.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(A,C);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function u(A){const x=h();A.__bindingPointIndex=x;const E=i.createBuffer(),C=A.__size,I=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const x=s[A.id],E=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let I=0,w=E.length;I<w;I++){const U=Array.isArray(E[I])?E[I]:[E[I]];for(let S=0,M=U.length;S<M;S++){const L=U[S];if(d(L,I,S,C)===!0){const V=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let re=0;for(let le=0;le<O.length;le++){const ue=O[le],he=_(ue);typeof ue=="number"||typeof ue=="boolean"?(L.__data[0]=ue,i.bufferSubData(i.UNIFORM_BUFFER,V+re,L.__data)):ue.isMatrix3?(L.__data[0]=ue.elements[0],L.__data[1]=ue.elements[1],L.__data[2]=ue.elements[2],L.__data[3]=0,L.__data[4]=ue.elements[3],L.__data[5]=ue.elements[4],L.__data[6]=ue.elements[5],L.__data[7]=0,L.__data[8]=ue.elements[6],L.__data[9]=ue.elements[7],L.__data[10]=ue.elements[8],L.__data[11]=0):(ue.toArray(L.__data,re),re+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,x,E,C){const I=A.value,w=x+"_"+E;if(C[w]===void 0)return typeof I=="number"||typeof I=="boolean"?C[w]=I:C[w]=I.clone(),!0;{const U=C[w];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return C[w]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(A){const x=A.uniforms;let E=0;const C=16;for(let w=0,U=x.length;w<U;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,L=S.length;M<L;M++){const V=S[M],O=Array.isArray(V.value)?V.value:[V.value];for(let re=0,le=O.length;re<le;re++){const ue=O[re],he=_(ue),j=E%C;j!==0&&C-j<he.boundary&&(E+=C-j),V.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=he.storage}}}const I=E%C;return I>0&&(E+=C-I),A.__size=E,A.__cache={},this}function _(A){const x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function m(A){const x=A.target;x.removeEventListener("dispose",m);const E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class vC{constructor(e={}){const{canvas:t=uA(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=is,this.toneMappingExposure=1;const x=this;let E=!1,C=0,I=0,w=null,U=-1,S=null;const M=new pt,L=new pt;let V=null;const O=new Ue(0);let re=0,le=t.width,ue=t.height,he=1,j=null,me=null;const _e=new pt(0,0,le,ue),Ae=new pt(0,0,le,ue);let De=!1;const Je=new Ou;let ce=!1,H=!1;const se=new Xe,$=new Ne,G=new B,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return w===null?he:1}let F=n;function b(R,X){const ne=t.getContext(R,X);return ne!==null?ne:null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pu}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){const X="webgl2";if(F=b(X,R),F===null)throw b(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let P,q,K,ae,T,y,N,z,k,Z,de,ee,ge,xe,pe,ve,Re,be,Ce,$e,Ge,it,Fe,He;function Le(){P=new b1(F),P.init(),q=new y1(F,P,e),it=new lC(F,P),K=new oC(F),ae=new C1(F),T=new XR,y=new aC(F,P,K,T,q,it,ae),N=new E1(x),z=new A1(x),k=new UA(F),Fe=new v1(F,k),Z=new w1(F,k,ae,Fe),de=new L1(F,Z,k,ae),Ce=new P1(F,q,y),ve=new M1(T),ee=new YR(x,N,z,P,q,Fe,ve),ge=new gC(x,T),xe=new jR,pe=new eC(P),be=new _1(x,N,z,K,de,f,l),Re=new rC(x,de,q),He=new _C(F,ae,q,K),$e=new x1(F,P,ae),Ge=new R1(F,P,ae),ae.programs=ee.programs,x.capabilities=q,x.extensions=P,x.properties=T,x.renderLists=xe,x.shadowMap=Re,x.state=K,x.info=ae}Le();const v=new pC(x,F);this.xr=v,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=P.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=P.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(R){R!==void 0&&(he=R,this.setSize(le,ue,!1))},this.getSize=function(R){return R.set(le,ue)},this.setSize=function(R,X,ne=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=R,ue=X,t.width=Math.floor(R*he),t.height=Math.floor(X*he),ne===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(le*he,ue*he).floor()},this.setDrawingBufferSize=function(R,X,ne){le=R,ue=X,he=ne,t.width=Math.floor(R*ne),t.height=Math.floor(X*ne),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(_e)},this.setViewport=function(R,X,ne,ie){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,X,ne,ie),K.viewport(M.copy(_e).multiplyScalar(he).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,X,ne,ie){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,X,ne,ie),K.scissor(L.copy(Ae).multiplyScalar(he).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(R){K.setScissorTest(De=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(R=!0,X=!0,ne=!0){let ie=0;if(R){let te=!1;if(w!==null){const we=w.texture.format;te=we===_m||we===gm||we===mm}if(te){const we=w.texture.type,Ie=we===ss||we===Ir||we===um||we===zo||we===fm||we===dm,Oe=be.getClearColor(),ke=be.getClearAlpha(),We=Oe.r,ze=Oe.g,Ye=Oe.b;Ie?(d[0]=We,d[1]=ze,d[2]=Ye,d[3]=ke,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=We,g[1]=ze,g[2]=Ye,g[3]=ke,F.clearBufferiv(F.COLOR,0,g))}else ie|=F.COLOR_BUFFER_BIT}X&&(ie|=F.DEPTH_BUFFER_BIT),ne&&(ie|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),xe.dispose(),pe.dispose(),T.dispose(),N.dispose(),z.dispose(),de.dispose(),Fe.dispose(),He.dispose(),ee.dispose(),v.dispose(),v.removeEventListener("sessionstart",Ct),v.removeEventListener("sessionend",Pt),yn.stop()};function Q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=ae.autoReset,X=Re.enabled,ne=Re.autoUpdate,ie=Re.needsUpdate,te=Re.type;Le(),ae.autoReset=R,Re.enabled=X,Re.autoUpdate=ne,Re.needsUpdate=ie,Re.type=te}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pe(R){const X=R.target;X.removeEventListener("dispose",Pe),tt(X)}function tt(R){Qe(R),T.remove(R)}function Qe(R){const X=T.get(R).programs;X!==void 0&&(X.forEach(function(ne){ee.releaseProgram(ne)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ne,ie,te,we){X===null&&(X=J);const Ie=te.isMesh&&te.matrixWorld.determinant()<0,Oe=qm(R,X,ne,ie,te);K.setMaterial(ie,Ie);let ke=ne.index,We=1;if(ie.wireframe===!0){if(ke=Z.getWireframeAttribute(ne),ke===void 0)return;We=2}const ze=ne.drawRange,Ye=ne.attributes.position;let bt=ze.start*We,Mn=(ze.start+ze.count)*We;we!==null&&(bt=Math.max(bt,we.start*We),Mn=Math.min(Mn,(we.start+we.count)*We)),ke!==null?(bt=Math.max(bt,0),Mn=Math.min(Mn,ke.count)):Ye!=null&&(bt=Math.max(bt,0),Mn=Math.min(Mn,Ye.count));const zt=Mn-bt;if(zt<0||zt===1/0)return;Fe.setup(te,ie,Oe,ne,ke);let di,St=$e;if(ke!==null&&(di=k.get(ke),St=Ge,St.setIndex(di)),te.isMesh)ie.wireframe===!0?(K.setLineWidth(ie.wireframeLinewidth*oe()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(te.isLine){let Ke=ie.linewidth;Ke===void 0&&(Ke=1),K.setLineWidth(Ke*oe()),te.isLineSegments?St.setMode(F.LINES):te.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else te.isPoints?St.setMode(F.POINTS):te.isSprite&&St.setMode(F.TRIANGLES);if(te.isBatchedMesh)St.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)St.renderInstances(bt,zt,te.count);else if(ne.isInstancedBufferGeometry){const Ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Sl=Math.min(ne.instanceCount,Ke);St.renderInstances(bt,zt,Sl)}else St.render(bt,zt)};function vt(R,X,ne){R.transparent===!0&&R.side===ri&&R.forceSinglePass===!1?(R.side=_n,R.needsUpdate=!0,Go(R,X,ne),R.side=Ci,R.needsUpdate=!0,Go(R,X,ne),R.side=ri):Go(R,X,ne)}this.compile=function(R,X,ne=null){ne===null&&(ne=R),m=pe.get(ne),m.init(),A.push(m),ne.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),R!==ne&&R.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),m.setupLights(x._useLegacyLights);const ie=new Set;return R.traverse(function(te){const we=te.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const Oe=we[Ie];vt(Oe,ne,te),ie.add(Oe)}else vt(we,ne,te),ie.add(we)}),A.pop(),m=null,ie},this.compileAsync=function(R,X,ne=null){const ie=this.compile(R,X,ne);return new Promise(te=>{function we(){if(ie.forEach(function(Ie){T.get(Ie).currentProgram.isReady()&&ie.delete(Ie)}),ie.size===0){te(R);return}setTimeout(we,10)}P.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ht=null;function ut(R){Ht&&Ht(R)}function Ct(){yn.stop()}function Pt(){yn.start()}const yn=new Im;yn.setAnimationLoop(ut),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(R){Ht=R,v.setAnimationLoop(R),R===null?yn.stop():yn.start()},v.addEventListener("sessionstart",Ct),v.addEventListener("sessionend",Pt),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(X),X=v.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,X,w),m=pe.get(R,A.length),m.init(),A.push(m),se.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Je.setFromProjectionMatrix(se),H=this.localClippingEnabled,ce=ve.init(this.clippingPlanes,H),_=xe.get(R,p.length),_.init(),p.push(_),Rn(R,X,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,me),this.info.render.frame++,ce===!0&&ve.beginShadows();const ne=m.state.shadowsArray;if(Re.render(ne,R,X),ce===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1)&&be.render(_,R),m.setupLights(x._useLegacyLights),X.isArrayCamera){const ie=X.cameras;for(let te=0,we=ie.length;te<we;te++){const Ie=ie[te];Di(_,R,Ie,Ie.viewport)}}else Di(_,R,X);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(x,R,X),Fe.resetDefaultState(),U=-1,S=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Rn(R,X,ne,ie){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){ie&&G.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const Ie=de.update(R),Oe=R.material;Oe.visible&&_.push(R,Ie,Oe,ne,G.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const Ie=de.update(R),Oe=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),G.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),G.copy(Ie.boundingSphere.center)),G.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Oe)){const ke=Ie.groups;for(let We=0,ze=ke.length;We<ze;We++){const Ye=ke[We],bt=Oe[Ye.materialIndex];bt&&bt.visible&&_.push(R,Ie,bt,ne,G.z,Ye)}}else Oe.visible&&_.push(R,Ie,Oe,ne,G.z,null)}}const we=R.children;for(let Ie=0,Oe=we.length;Ie<Oe;Ie++)Rn(we[Ie],X,ne,ie)}function Di(R,X,ne,ie){const te=R.opaque,we=R.transmissive,Ie=R.transparent;m.setupLightsView(ne),ce===!0&&ve.setGlobalState(x.clippingPlanes,ne),we.length>0&&Bs(te,we,X,ne),ie&&K.viewport(M.copy(ie)),te.length>0&&cs(te,X,ne),we.length>0&&cs(we,X,ne),Ie.length>0&&cs(Ie,X,ne),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Bs(R,X,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Ds(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float")?Qa:ss,minFilter:Si,samples:4,stencilBuffer:r});const We=T.get(m.state.transmissionRenderTarget);We.__isTransmissionRenderTarget=!0}const we=m.state.transmissionRenderTarget;x.getDrawingBufferSize($),we.setSize($.x,$.y);const Ie=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(O),re=x.getClearAlpha(),re<1&&x.setClearColor(16777215,.5),x.clear();const Oe=x.toneMapping;x.toneMapping=is,cs(R,ne,ie),y.updateMultisampleRenderTarget(we),y.updateRenderTargetMipmap(we);let ke=!1;for(let We=0,ze=X.length;We<ze;We++){const Ye=X[We],bt=Ye.object,Mn=Ye.geometry,zt=Ye.material,di=Ye.group;if(zt.side===ri&&bt.layers.test(ie.layers)){const St=zt.side;zt.side=_n,zt.needsUpdate=!0,Ku(bt,ne,ie,Mn,zt,di),zt.side=St,zt.needsUpdate=!0,ke=!0}}ke===!0&&(y.updateMultisampleRenderTarget(we),y.updateRenderTargetMipmap(we)),x.setRenderTarget(Ie),x.setClearColor(O,re),x.toneMapping=Oe}function cs(R,X,ne){const ie=X.isScene===!0?X.overrideMaterial:null;for(let te=0,we=R.length;te<we;te++){const Ie=R[te],Oe=Ie.object,ke=Ie.geometry,We=ie===null?Ie.material:ie,ze=Ie.group;Oe.layers.test(ne.layers)&&Ku(Oe,X,ne,ke,We,ze)}}function Ku(R,X,ne,ie,te,we){R.onBeforeRender(x,X,ne,ie,te,we),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(x,X,ne,ie,R,we),te.transparent===!0&&te.side===ri&&te.forceSinglePass===!1?(te.side=_n,te.needsUpdate=!0,x.renderBufferDirect(ne,X,ie,te,R,we),te.side=Ci,te.needsUpdate=!0,x.renderBufferDirect(ne,X,ie,te,R,we),te.side=ri):x.renderBufferDirect(ne,X,ie,te,R,we),R.onAfterRender(x,X,ne,ie,te,we)}function Go(R,X,ne){X.isScene!==!0&&(X=J);const ie=T.get(R),te=m.state.lights,we=m.state.shadowsArray,Ie=te.state.version,Oe=ee.getParameters(R,te.state,we,X,ne),ke=ee.getProgramCacheKey(Oe);let We=ie.programs;ie.environment=R.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(R.isMeshStandardMaterial?z:N).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",Pe),We=new Map,ie.programs=We);let ze=We.get(ke);if(ze!==void 0){if(ie.currentProgram===ze&&ie.lightsStateVersion===Ie)return qu(R,Oe),ze}else Oe.uniforms=ee.getUniforms(R),R.onBuild(ne,Oe,x),R.onBeforeCompile(Oe,x),ze=ee.acquireProgram(Oe,ke),We.set(ke,ze),ie.uniforms=Oe.uniforms;const Ye=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=ve.uniform),qu(R,Oe),ie.needsLights=Zm(R),ie.lightsStateVersion=Ie,ie.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.directionalShadowMap.value=te.state.directionalShadowMap,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotShadowMap.value=te.state.spotShadowMap,Ye.spotLightMatrix.value=te.state.spotLightMatrix,Ye.spotLightMap.value=te.state.spotLightMap,Ye.pointShadowMap.value=te.state.pointShadowMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=ze,ie.uniformsList=null,ze}function ju(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Ba.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function qu(R,X){const ne=T.get(R);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function qm(R,X,ne,ie,te){X.isScene!==!0&&(X=J),y.resetTextureUnits();const we=X.fog,Ie=ie.isMeshStandardMaterial?X.environment:null,Oe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:jt,ke=(ie.isMeshStandardMaterial?z:N).get(ie.envMap||Ie),We=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ze=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!ne.morphAttributes.position,bt=!!ne.morphAttributes.normal,Mn=!!ne.morphAttributes.color;let zt=is;ie.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(zt=x.toneMapping);const di=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,St=di!==void 0?di.length:0,Ke=T.get(ie),Sl=m.state.lights;if(ce===!0&&(H===!0||R!==S)){const Cn=R===S&&ie.id===U;ve.setState(ie,R,Cn)}let xt=!1;ie.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Sl.state.version||Ke.outputColorSpace!==Oe||te.isBatchedMesh&&Ke.batching===!1||!te.isBatchedMesh&&Ke.batching===!0||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||te.isInstancedMesh&&Ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ke.instancingMorph===!1&&te.morphTexture!==null||Ke.envMap!==ke||ie.fog===!0&&Ke.fog!==we||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ve.numPlanes||Ke.numIntersection!==ve.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==ze||Ke.morphTargets!==Ye||Ke.morphNormals!==bt||Ke.morphColors!==Mn||Ke.toneMapping!==zt||Ke.morphTargetsCount!==St)&&(xt=!0):(xt=!0,Ke.__version=ie.version);let us=Ke.currentProgram;xt===!0&&(us=Go(ie,X,te));let $u=!1,$r=!1,Tl=!1;const qt=us.getUniforms(),Ni=Ke.uniforms;if(K.useProgram(us.program)&&($u=!0,$r=!0,Tl=!0),ie.id!==U&&(U=ie.id,$r=!0),$u||S!==R){qt.setValue(F,"projectionMatrix",R.projectionMatrix),qt.setValue(F,"viewMatrix",R.matrixWorldInverse);const Cn=qt.map.cameraPosition;Cn!==void 0&&Cn.setValue(F,G.setFromMatrixPosition(R.matrixWorld)),q.logarithmicDepthBuffer&&qt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&qt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,$r=!0,Tl=!0)}if(te.isSkinnedMesh){qt.setOptional(F,te,"bindMatrix"),qt.setOptional(F,te,"bindMatrixInverse");const Cn=te.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),qt.setValue(F,"boneTexture",Cn.boneTexture,y))}te.isBatchedMesh&&(qt.setOptional(F,te,"batchingTexture"),qt.setValue(F,"batchingTexture",te._matricesTexture,y));const Al=ne.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0)&&Ce.update(te,ne,us),($r||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,qt.setValue(F,"receiveShadow",te.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ni.envMap.value=ke,Ni.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(Ni.envMapIntensity.value=X.environmentIntensity),$r&&(qt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ke.needsLights&&$m(Ni,Tl),we&&ie.fog===!0&&ge.refreshFogUniforms(Ni,we),ge.refreshMaterialUniforms(Ni,ie,he,ue,m.state.transmissionRenderTarget),Ba.upload(F,ju(Ke),Ni,y)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ba.upload(F,ju(Ke),Ni,y),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&qt.setValue(F,"center",te.center),qt.setValue(F,"modelViewMatrix",te.modelViewMatrix),qt.setValue(F,"normalMatrix",te.normalMatrix),qt.setValue(F,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Cn=ie.uniformsGroups;for(let bl=0,Jm=Cn.length;bl<Jm;bl++){const Zu=Cn[bl];He.update(Zu,us),He.bind(Zu,us)}}return us}function $m(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Zm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,X,ne){T.get(R.texture).__webglTexture=X,T.get(R.depthTexture).__webglTexture=ne;const ie=T.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const ne=T.get(R);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ne=0){w=R,C=X,I=ne;let ie=!0,te=null,we=!1,Ie=!1;if(R){const ke=T.get(R);ke.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(F.FRAMEBUFFER,null),ie=!1):ke.__webglFramebuffer===void 0?y.setupRenderTarget(R):ke.__hasExternalTextures&&y.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const ze=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[X])?te=ze[X][ne]:te=ze[X],we=!0):R.samples>0&&y.useMultisampledRTT(R)===!1?te=T.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?te=ze[ne]:te=ze,M.copy(R.viewport),L.copy(R.scissor),V=R.scissorTest}else M.copy(_e).multiplyScalar(he).floor(),L.copy(Ae).multiplyScalar(he).floor(),V=De;if(K.bindFramebuffer(F.FRAMEBUFFER,te)&&ie&&K.drawBuffers(R,te),K.viewport(M),K.scissor(L),K.setScissorTest(V),we){const ke=T.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,ne)}else if(Ie){const ke=T.get(R.texture),We=X||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,ne||0,We)}U=-1},this.readRenderTargetPixels=function(R,X,ne,ie,te,we,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){K.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const ke=R.texture,We=ke.format,ze=ke.type;if(We!==Yn&&it.convert(We)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=ze===Qa&&(P.has("EXT_color_buffer_half_float")||P.has("EXT_color_buffer_float"));if(ze!==ss&&it.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&ze!==ai&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ie&&ne>=0&&ne<=R.height-te&&F.readPixels(X,ne,ie,te,it.convert(We),it.convert(ze),we)}finally{const ke=w!==null?T.get(w).__webglFramebuffer:null;K.bindFramebuffer(F.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,X,ne=0){const ie=Math.pow(2,-ne),te=Math.floor(X.image.width*ie),we=Math.floor(X.image.height*ie);y.setTexture2D(X,0),F.copyTexSubImage2D(F.TEXTURE_2D,ne,0,0,R.x,R.y,te,we),K.unbindTexture()},this.copyTextureToTexture=function(R,X,ne,ie=0){const te=X.image.width,we=X.image.height,Ie=it.convert(ne.format),Oe=it.convert(ne.type);y.setTexture2D(ne,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ne.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ne.unpackAlignment),X.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ie,R.x,R.y,te,we,Ie,Oe,X.image.data):X.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ie,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Ie,X.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,ie,R.x,R.y,Ie,Oe,X.image),ie===0&&ne.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ne,ie,te=0){const we=Math.round(R.max.x-R.min.x),Ie=Math.round(R.max.y-R.min.y),Oe=R.max.z-R.min.z+1,ke=it.convert(ie.format),We=it.convert(ie.type);let ze;if(ie.isData3DTexture)y.setTexture3D(ie,0),ze=F.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)y.setTexture2DArray(ie,0),ze=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ie.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,ie.unpackAlignment);const Ye=F.getParameter(F.UNPACK_ROW_LENGTH),bt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Mn=F.getParameter(F.UNPACK_SKIP_PIXELS),zt=F.getParameter(F.UNPACK_SKIP_ROWS),di=F.getParameter(F.UNPACK_SKIP_IMAGES),St=ne.isCompressedTexture?ne.mipmaps[te]:ne.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,R.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,R.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,R.min.z),ne.isDataTexture||ne.isData3DTexture?F.texSubImage3D(ze,te,X.x,X.y,X.z,we,Ie,Oe,ke,We,St.data):ie.isCompressedArrayTexture?F.compressedTexSubImage3D(ze,te,X.x,X.y,X.z,we,Ie,Oe,ke,St.data):F.texSubImage3D(ze,te,X.x,X.y,X.z,we,Ie,Oe,ke,We,St),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ye),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Mn),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,di),te===0&&ie.generateMipmaps&&F.generateMipmap(ze),K.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?y.setTextureCube(R,0):R.isData3DTexture?y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?y.setTexture2DArray(R,0):y.setTexture2D(R,0),K.unbindTexture()},this.resetState=function(){C=0,I=0,w=null,K.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Du?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===vl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xC extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$c,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Sm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new B;class ku{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ku(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dd=new B,pd=new pt,md=new pt,MC=new B,gd=new Xe,Ma=new B,yc=new hi,_d=new Xe,Mc=new Yr;class EC extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yc.copy(this.boundingSphere),yc.applyMatrix4(s),e.ray.intersectsSphere(yc)!==!1&&(_d.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(_d),!(this.boundingBox!==null&&Mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;pd.fromBufferAttribute(s.attributes.skinIndex,e),md.fromBufferAttribute(s.attributes.skinWeight,e),dd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=md.getComponent(r);if(o!==0){const a=pd.getComponent(r);gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(MC.copy(dd).applyMatrix4(gd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class km extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hm extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=hn,u=hn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new Xe,SC=new Xe;class Hu{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:SC;vd.multiplyMatrices(a,t[r]),vd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hm(t,e,e,Yn,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new km),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Jc extends Kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new Xe,xd=new Xe,Ea=[],yd=new Li,TC=new Xe,ho=new Ft,fo=new hi;class AC extends Ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,TC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),yd.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(yd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),fo.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),xd.multiplyMatrices(n,sr),ho.matrixWorld=xd,ho.raycast(e,Ea);for(let o=0,a=Ea.length;o<a;o++){const l=Ea[o];l.instanceId=r,l.object=this,t.push(l)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hm(new Float32Array(s*this.count),s,this.count,pm,ai));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zu extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Md=new B,Ed=new B,Sd=new Xe,Ec=new Yr,Sa=new hi;class Ml extends _t{constructor(e=new xn,t=new zu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Md.fromBufferAttribute(t,s-1),Ed.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Md.distanceTo(Ed);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;Sd.copy(s).invert(),Ec.copy(e.ray).applyMatrix4(Sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,h=new B,f=new B,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let x=p,E=A-1;x<E;x+=d){const C=g.getX(x),I=g.getX(x+1);if(c.fromBufferAttribute(m,C),u.fromBufferAttribute(m,I),Ec.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),A=Math.min(m.count,o.start+o.count);for(let x=p,E=A-1;x<E;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ec.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Td=new B,Ad=new B;class bC extends Ml{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Td.fromBufferAttribute(t,s),Ad.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Td.distanceTo(Ad);e.setAttribute("lineDistance",new fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wC extends Ml{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zm extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bd=new Xe,Qc=new Yr,Ta=new hi,Aa=new B;class RC extends _t{constructor(e=new xn,t=new zm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;bd.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(bd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Aa.fromBufferAttribute(h,m),wd(Aa,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Aa.fromBufferAttribute(h,g),wd(Aa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wd(i,e,t,n,s,r,o){const a=Qc.distanceSqToPoint(i);if(a<t){const l=new B;Qc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Vu extends xn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;A(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new fn(h,3)),this.setAttribute("normal",new fn(f,3)),this.setAttribute("uv",new fn(d,2));function A(){const E=new B,C=new B;let I=0;const w=(t-e)/n;for(let U=0;U<=r;U++){const S=[],M=U/r,L=M*(t-e)+e;for(let V=0;V<=s;V++){const O=V/s,re=O*l+a,le=Math.sin(re),ue=Math.cos(re);C.x=L*le,C.y=-M*n+m,C.z=L*ue,h.push(C.x,C.y,C.z),E.set(le,w,ue).normalize(),f.push(E.x,E.y,E.z),d.push(O,1-M),S.push(g++)}_.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){const M=_[S][U],L=_[S+1][U],V=_[S+1][U+1],O=_[S][U+1];u.push(M,L,O),u.push(L,V,O),I+=6}c.addGroup(p,I,0),p+=I}function x(E){const C=g,I=new Ne,w=new B;let U=0;const S=E===!0?e:t,M=E===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const L=g;for(let V=0;V<=s;V++){const re=V/s*l+a,le=Math.cos(re),ue=Math.sin(re);w.x=S*ue,w.y=m*M,w.z=S*le,h.push(w.x,w.y,w.z),f.push(0,M,0),I.x=le*.5+.5,I.y=ue*.5*M+.5,d.push(I.x,I.y),g++}for(let V=0;V<s;V++){const O=C+V,re=L+V;E===!0?u.push(re,re+1,O):u.push(re+1,re,O),U+=3}c.addGroup(p,U,E===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sl extends xn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,f=new B,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const A=[],x=p/n;let E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const I=C/t;h.x=-e*Math.cos(s+I*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+I*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(I+E,1-x),A.push(c++)}u.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){const x=u[p][A+1],E=u[p][A],C=u[p+1][A],I=u[p+1][A+1];(p!==0||o>0)&&d.push(x,E,I),(p!==n-1||l<Math.PI)&&d.push(E,C,I)}this.setIndex(d),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gu extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ii extends Gu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class CC extends qn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function PC(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function LC(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rd(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Vm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Vo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class IC extends Vo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yf,endingEnd:yf}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mf:r=e,a=2*t-n;break;case Ef:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mf:o=e,l=2*n-t;break;case Ef:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,A=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,E=d*m-d*_;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+A*o[c+C]+x*o[l+C]+E*o[h+C];return r}}class DC extends Vo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class NC extends Vo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class fi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new NC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new DC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new IC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bo:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case jl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&PC(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===jl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Dr;class Kr extends fi{}Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Bo;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gm extends fi{}Gm.prototype.ValueTypeName="color";class Or extends fi{}Or.prototype.ValueTypeName="number";class UC extends Vo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)li.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ns extends fi{InterpolantFactoryMethodLinear(e){return new UC(this.times,this.values,this.getValueSize(),e)}}Ns.prototype.ValueTypeName="quaternion";Ns.prototype.DefaultInterpolation=Dr;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends fi{}jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=Bo;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fr extends fi{}Fr.prototype.ValueTypeName="vector";class OC{constructor(e="",t=-1,n=[],s=OT){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(BC(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(fi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=LC(l);l=Rd(l,1,u),c=Rd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Or(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Vm(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let A=0;A!==f[g].morphTargets.length;++A){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new Or(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Fr,d+".position",f,"pos",s),n(Ns,d+".quaternion",f,"rot",s),n(Fr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function FC(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Or;case"vector":case"vector2":case"vector3":case"vector4":return Fr;case"color":return Gm;case"quaternion":return Ns;case"bool":case"boolean":return Kr;case"string":return jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function BC(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=FC(i.type);if(i.times===void 0){const t=[],n=[];Vm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kC{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const HC=new kC;class qr{constructor(e){this.manager=e!==void 0?e:HC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class zC extends Error{constructor(e,t){super(e),this.response=t}}class Wm extends qr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:s});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:x,value:E})=>{if(x)p.close();else{_+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let I=0,w=u.length;I<w;I++){const U=u[I];U.onProgress&&U.onProgress(C)}p.enqueue(E),A()}})}}});return new Response(m)}else throw new zC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Qi.add(e,c);const u=yi[e];delete yi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class VC extends qr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ko("img");function l(){u(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class GC extends qr{constructor(e){super(e)}load(e,t,n,s){const r=new Yt,o=new VC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class El extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sc=new Xe,Cd=new B,Pd=new B;class Wu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ou,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WC extends Wu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class YC extends El{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new WC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ld=new Xe,po=new B,Tc=new B;class XC extends Wu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),n.position.copy(po),Tc.copy(n.position),Tc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tc),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class KC extends El{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new XC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jC extends Wu{constructor(){super(new Fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new jC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qC extends El{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ro{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $C extends qr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,l),r.manager.itemStart(e)}}class ZC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Id();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Id(){return(typeof performance>"u"?Date:performance).now()}const Yu="\\[\\]\\.:\\/",JC=new RegExp("["+Yu+"]","g"),Xu="[^"+Yu+"]",QC="[^"+Yu.replace("\\.","")+"]",eP=/((?:WC+[\/:])*)/.source.replace("WC",Xu),tP=/(WCOD+)?/.source.replace("WCOD",QC),nP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),iP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),sP=new RegExp("^"+eP+tP+nP+iP+"$"),rP=["material","materials","bones","map"];class oP{constructor(e,t,n){const s=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JC,"")}static parseTrackName(e){const t=sP.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);rP.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=oP;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Dd=new Xe;class aP{constructor(e,t,n=0,s=1/0){this.ray=new Yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dd),this}intersectObject(e,t=!0,n=[]){return eu(e,this,n,t),n.sort(Nd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)eu(e[s],this,n,t);return n.sort(Nd),n}}function Nd(i,e){return i.distance-e.distance}function eu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)eu(s[r],e,t,!0)}}class Ud{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);const Od={type:"change"},Ac={type:"start"},Fd={type:"end"},wa=new Yr,Bd=new ei,lP=Math.cos(70*Mm.DEG2RAD);class cP extends Fs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",ve),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Od),n.update(),r=s.NONE},this.update=function(){const v=new B,Q=new li().setFromUnitVectors(e.up,new B(0,1,0)),fe=Q.clone().invert(),Me=new B,Pe=new li,tt=new B,Qe=2*Math.PI;return function(Ht=null){const ut=n.object.position;v.copy(ut).sub(n.target),v.applyQuaternion(Q),a.setFromVector3(v),n.autoRotate&&r===s.NONE&&V(M(Ht)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ct=n.minAzimuthAngle,Pt=n.maxAzimuthAngle;isFinite(Ct)&&isFinite(Pt)&&(Ct<-Math.PI?Ct+=Qe:Ct>Math.PI&&(Ct-=Qe),Pt<-Math.PI?Pt+=Qe:Pt>Math.PI&&(Pt-=Qe),Ct<=Pt?a.theta=Math.max(Ct,Math.min(Pt,a.theta)):a.theta=a.theta>(Ct+Pt)/2?Math.max(Ct,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let yn=!1;if(n.zoomToCursor&&I||n.object.isOrthographicCamera)a.radius=_e(a.radius);else{const Rn=a.radius;a.radius=_e(a.radius*c),yn=Rn!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(fe),ut.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&I){let Rn=null;if(n.object.isPerspectiveCamera){const Di=v.length();Rn=_e(Di*c);const Bs=Di-Rn;n.object.position.addScaledVector(E,Bs),n.object.updateMatrixWorld(),yn=!!Bs}else if(n.object.isOrthographicCamera){const Di=new B(C.x,C.y,0);Di.unproject(n.object);const Bs=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),yn=Bs!==n.object.zoom;const cs=new B(C.x,C.y,0);cs.unproject(n.object),n.object.position.sub(cs).add(Di),n.object.updateMatrixWorld(),Rn=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Rn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Rn).add(n.object.position):(wa.origin.copy(n.object.position),wa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(wa.direction))<lP?e.lookAt(n.target):(Bd.setFromNormalAndCoplanarPoint(n.object.up,n.target),wa.intersectPlane(Bd,n.target))))}else if(n.object.isOrthographicCamera){const Rn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Rn!==n.object.zoom&&(n.object.updateProjectionMatrix(),yn=!0)}return c=1,I=!1,yn||Me.distanceToSquared(n.object.position)>o||8*(1-Pe.dot(n.object.quaternion))>o||tt.distanceToSquared(n.target)>o?(n.dispatchEvent(Od),Me.copy(n.object.position),Pe.copy(n.object.quaternion),tt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ce),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",k),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",z),n.domElement.removeEventListener("pointerup",k),n.domElement.getRootNode().removeEventListener("keydown",xe,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ve),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Ud,l=new Ud;let c=1;const u=new B,h=new Ne,f=new Ne,d=new Ne,g=new Ne,_=new Ne,m=new Ne,p=new Ne,A=new Ne,x=new Ne,E=new B,C=new Ne;let I=!1;const w=[],U={};let S=!1;function M(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function L(v){const Q=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*Q)}function V(v){l.theta-=v}function O(v){l.phi-=v}const re=function(){const v=new B;return function(fe,Me){v.setFromMatrixColumn(Me,0),v.multiplyScalar(-fe),u.add(v)}}(),le=function(){const v=new B;return function(fe,Me){n.screenSpacePanning===!0?v.setFromMatrixColumn(Me,1):(v.setFromMatrixColumn(Me,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(fe),u.add(v)}}(),ue=function(){const v=new B;return function(fe,Me){const Pe=n.domElement;if(n.object.isPerspectiveCamera){const tt=n.object.position;v.copy(tt).sub(n.target);let Qe=v.length();Qe*=Math.tan(n.object.fov/2*Math.PI/180),re(2*fe*Qe/Pe.clientHeight,n.object.matrix),le(2*Me*Qe/Pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(re(fe*(n.object.right-n.object.left)/n.object.zoom/Pe.clientWidth,n.object.matrix),le(Me*(n.object.top-n.object.bottom)/n.object.zoom/Pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function he(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function me(v,Q){if(!n.zoomToCursor)return;I=!0;const fe=n.domElement.getBoundingClientRect(),Me=v-fe.left,Pe=Q-fe.top,tt=fe.width,Qe=fe.height;C.x=Me/tt*2-1,C.y=-(Pe/Qe)*2+1,E.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function _e(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function Ae(v){h.set(v.clientX,v.clientY)}function De(v){me(v.clientX,v.clientX),p.set(v.clientX,v.clientY)}function Je(v){g.set(v.clientX,v.clientY)}function ce(v){f.set(v.clientX,v.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;V(2*Math.PI*d.x/Q.clientHeight),O(2*Math.PI*d.y/Q.clientHeight),h.copy(f),n.update()}function H(v){A.set(v.clientX,v.clientY),x.subVectors(A,p),x.y>0?he(L(x.y)):x.y<0&&j(L(x.y)),p.copy(A),n.update()}function se(v){_.set(v.clientX,v.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),ue(m.x,m.y),g.copy(_),n.update()}function $(v){me(v.clientX,v.clientY),v.deltaY<0?j(L(v.deltaY)):v.deltaY>0&&he(L(v.deltaY)),n.update()}function G(v){let Q=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):ue(-n.keyPanSpeed,0),Q=!0;break}Q&&(v.preventDefault(),n.update())}function J(v){if(w.length===1)h.set(v.pageX,v.pageY);else{const Q=He(v),fe=.5*(v.pageX+Q.x),Me=.5*(v.pageY+Q.y);h.set(fe,Me)}}function oe(v){if(w.length===1)g.set(v.pageX,v.pageY);else{const Q=He(v),fe=.5*(v.pageX+Q.x),Me=.5*(v.pageY+Q.y);g.set(fe,Me)}}function F(v){const Q=He(v),fe=v.pageX-Q.x,Me=v.pageY-Q.y,Pe=Math.sqrt(fe*fe+Me*Me);p.set(0,Pe)}function b(v){n.enableZoom&&F(v),n.enablePan&&oe(v)}function P(v){n.enableZoom&&F(v),n.enableRotate&&J(v)}function q(v){if(w.length==1)f.set(v.pageX,v.pageY);else{const fe=He(v),Me=.5*(v.pageX+fe.x),Pe=.5*(v.pageY+fe.y);f.set(Me,Pe)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;V(2*Math.PI*d.x/Q.clientHeight),O(2*Math.PI*d.y/Q.clientHeight),h.copy(f)}function K(v){if(w.length===1)_.set(v.pageX,v.pageY);else{const Q=He(v),fe=.5*(v.pageX+Q.x),Me=.5*(v.pageY+Q.y);_.set(fe,Me)}m.subVectors(_,g).multiplyScalar(n.panSpeed),ue(m.x,m.y),g.copy(_)}function ae(v){const Q=He(v),fe=v.pageX-Q.x,Me=v.pageY-Q.y,Pe=Math.sqrt(fe*fe+Me*Me);A.set(0,Pe),x.set(0,Math.pow(A.y/p.y,n.zoomSpeed)),he(x.y),p.copy(A);const tt=(v.pageX+Q.x)*.5,Qe=(v.pageY+Q.y)*.5;me(tt,Qe)}function T(v){n.enableZoom&&ae(v),n.enablePan&&K(v)}function y(v){n.enableZoom&&ae(v),n.enableRotate&&q(v)}function N(v){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",z),n.domElement.addEventListener("pointerup",k)),!it(v)&&($e(v),v.pointerType==="touch"?Re(v):Z(v)))}function z(v){n.enabled!==!1&&(v.pointerType==="touch"?be(v):de(v))}function k(v){switch(Ge(v),w.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",z),n.domElement.removeEventListener("pointerup",k),n.dispatchEvent(Fd),r=s.NONE;break;case 1:const Q=w[0],fe=U[Q];Re({pointerId:Q,pageX:fe.x,pageY:fe.y});break}}function Z(v){let Q;switch(v.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case ji.DOLLY:if(n.enableZoom===!1)return;De(v),r=s.DOLLY;break;case ji.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Je(v),r=s.PAN}else{if(n.enableRotate===!1)return;Ae(v),r=s.ROTATE}break;case ji.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;Ae(v),r=s.ROTATE}else{if(n.enablePan===!1)return;Je(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ac)}function de(v){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;ce(v);break;case s.DOLLY:if(n.enableZoom===!1)return;H(v);break;case s.PAN:if(n.enablePan===!1)return;se(v);break}}function ee(v){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(v.preventDefault(),n.dispatchEvent(Ac),$(ge(v)),n.dispatchEvent(Fd))}function ge(v){const Q=v.deltaMode,fe={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(Q){case 1:fe.deltaY*=16;break;case 2:fe.deltaY*=100;break}return v.ctrlKey&&!S&&(fe.deltaY*=10),fe}function xe(v){v.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(v){v.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function ve(v){n.enabled===!1||n.enablePan===!1||G(v)}function Re(v){switch(Fe(v),w.length){case 1:switch(n.touches.ONE){case Hs.ROTATE:if(n.enableRotate===!1)return;J(v),r=s.TOUCH_ROTATE;break;case Hs.PAN:if(n.enablePan===!1)return;oe(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Hs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;b(v),r=s.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ac)}function be(v){switch(Fe(v),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;q(v),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;K(v),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;T(v),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;y(v),n.update();break;default:r=s.NONE}}function Ce(v){n.enabled!==!1&&v.preventDefault()}function $e(v){w.push(v.pointerId)}function Ge(v){delete U[v.pointerId];for(let Q=0;Q<w.length;Q++)if(w[Q]==v.pointerId){w.splice(Q,1);return}}function it(v){for(let Q=0;Q<w.length;Q++)if(w[Q]==v.pointerId)return!0;return!1}function Fe(v){let Q=U[v.pointerId];Q===void 0&&(Q=new Ne,U[v.pointerId]=Q),Q.set(v.pageX,v.pageY)}function He(v){const Q=v.pointerId===w[0]?w[1]:w[0];return U[Q]}n.domElement.addEventListener("contextmenu",Ce),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",k),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",xe,{passive:!0,capture:!0}),this.update()}}function kd(i,e){if(e===FT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qc||e===xm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===qc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class uP extends qr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mP(t)}),this.register(function(t){return new TP(t)}),this.register(function(t){return new AP(t)}),this.register(function(t){return new bP(t)}),this.register(function(t){return new _P(t)}),this.register(function(t){return new vP(t)}),this.register(function(t){return new xP(t)}),this.register(function(t){return new yP(t)}),this.register(function(t){return new pP(t)}),this.register(function(t){return new MP(t)}),this.register(function(t){return new gP(t)}),this.register(function(t){return new SP(t)}),this.register(function(t){return new EP(t)}),this.register(function(t){return new fP(t)}),this.register(function(t){return new wP(t)}),this.register(function(t){return new RP(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ro.extractUrlBase(e);o=Ro.resolveURL(c,this.path)}else o=Ro.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Wm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xm){try{o[et.KHR_BINARY_GLTF]=new CP(e)}catch(h){s&&s(h);return}r=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new VP(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new dP;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new PP(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new LP;break;case et.KHR_MESH_QUANTIZATION:o[h]=new IP;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function hP(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fP{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ue(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ym(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new KC(u),c.distance=h;break;case"spot":c=new YC(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class dP{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(e,t,n){const s=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,on))}return Promise.all(s)}}class pP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class mP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}}class gP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class _P{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,on)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class vP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class xP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}}class yP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class MP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,on)),Promise.all(r)}}class EP{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class SP{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class TP{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class AP{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bP{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wP{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class RP{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Xe,m=new B,p=new li,A=new B(1,1,1),x=new AC(g.geometry,g.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,E),l.SCALE&&A.fromBufferAttribute(l.SCALE,E),x.setMatrixAt(E,_.compose(m,p,A));for(const E in l)if(E==="_COLOR_0"){const C=l[E];x.instanceColor=new Jc(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);_t.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Xm="glTF",mo=12,Hd={JSON:1313821514,BIN:5130562};class CP{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-mo,r=new DataView(e,mo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Hd.JSON){const c=new Uint8Array(e,mo+o,a);this.content=n.decode(c)}else if(l===Hd.BIN){const c=mo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=tu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=tu[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=yr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,jt,f)})})}}class LP{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class IP{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class Km extends Vo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,A=1-m,x=p-f+h;for(let E=0;E!==a;E++){const C=o[_+E+a],I=o[_+E+l]*u,w=o[g+E+a],U=o[g+E]*u;r[E]=A*C+x*I+m*w+p*U}return r}}const DP=new li;class NP extends Km{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return DP.fromArray(r).normalize().toArray(r),r}}const Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zd={9728:hn,9729:bn,9984:cm,9985:Fa,9986:xo,9987:Si},Vd={33071:Zi,33648:Ja,10497:Lr},bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UP={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Bo},wc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OP(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Gu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),i.DefaultMaterial}function xs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function qi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FP(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function BP(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kP(i){let e;const t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rc(t.attributes):e=i.indices+":"+Rc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Rc(i.targets[n]);return e}function Rc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HP(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zP=new Xe;class VP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new GC(this.options.manager):this.textureLoader=new $C(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return xs(r,a,s),qi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Ro.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=bc[s.type],a=yr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Kt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=bc[s.type],c=yr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(A);x||(_=new c(a,p*d,s.count*d/u),x=new yC(_,d/u),t.cache.add(A,x)),m=new ku(x,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Kt(_,l,g);if(s.sparse!==void 0){const p=bc.SCALAR,A=yr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,C=new A(o[1],x,s.sparse.count*p),I=new c(o[2],E,s.sparse.count*l);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,U=C.length;w<U;w++){const S=C[w];if(m.setX(S,I[w*l]),l>=2&&m.setY(S,I[w*l+1]),l>=3&&m.setZ(S,I[w*l+2]),l>=4&&m.setW(S,I[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=zd[f.magFilter]||bn,u.minFilter=zd[f.minFilter]||Si,u.wrapS=Vd[f.wrapS]||Lr,u.wrapT=Vd[f.wrapT]||Lr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Yt(_);m.needsUpdate=!0,f(m)}),t.load(Ro.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||HP(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zm,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new zu,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Gu}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const h=s[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],jt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,on)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ri);const u=r.alphaMode||wc.OPAQUE;if(u===wc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===wc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Dn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Dn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Dn){const h=r.emissiveFactor;a.emissive=new Ue().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&o!==Dn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,on)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),qi(h,r),t.associations.set(h,{materials:e}),r.extensions&&xs(s,h,r),h})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=kP(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Gd(new xn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?OP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const A=c[d];if(m.mode===Ln.TRIANGLES||m.mode===Ln.TRIANGLE_STRIP||m.mode===Ln.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new EC(_,A):new Ft(_,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ln.TRIANGLE_STRIP?p.geometry=kd(p.geometry,xm):m.mode===Ln.TRIANGLE_FAN&&(p.geometry=kd(p.geometry,qc));else if(m.mode===Ln.LINES)p=new bC(_,A);else if(m.mode===Ln.LINE_STRIP)p=new Ml(_,A);else if(m.mode===Ln.LINE_LOOP)p=new wC(_,A);else if(m.mode===Ln.POINTS)p=new RC(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&BP(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),qi(p,r),m.extensions&&xs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&xs(s,h[0],r),h[0];const f=new Ji;r.extensions&&xs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Mm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),qi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Xe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Hu(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let A=0,x=f.length;A<x;A++){const E=f[A],C=d[A],I=g[A],w=_[A],U=m[A];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const S=n._createAnimationTracks(E,C,I,w,U);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new OC(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,zP)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new km:c.length>1?u=new Ji:c.length===1?u=c[0]:u=new _t,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),qi(u,r),r.extensions&&xs(n,u,r),r.matrix!==void 0){const h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ji;n.name&&(r.name=s.createUniqueName(n.name)),qi(r,n),n.extensions&&xs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof qn||f instanceof Yt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Wi[r.path]===Wi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Wi[r.path]){case Wi.weights:c=Or;break;case Wi.rotation:c=Ns;break;case Wi.position:case Wi.scale:c=Fr;break;default:switch(n.itemSize){case 1:c=Or;break;case 2:case 3:default:c=Fr;break}break}const u=s.interpolation!==void 0?UP[s.interpolation]:Dr,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Wi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Ns?NP:Km;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function GP(i,e,t){const n=e.attributes,s=new Li;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=nu(yr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=nu(yr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new hi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Gd(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=tu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),qi(i,e),GP(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?FP(i,e.targets,t):i})}class wt{static roundNumber(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}static sample(e){return e[Math.floor(Math.random()*e.length)]}static distanceToSquared(e,t){var n=e.x-t.x,s=e.y-t.y,r=e.z-t.z;return n*n+s*s+r*r}static isPointInPoly(e,t){for(var n=!1,s=-1,r=e.length,o=r-1;++s<r;o=s)(e[s].z<=t.z&&t.z<e[o].z||e[o].z<=t.z&&t.z<e[s].z)&&t.x<(e[o].x-e[s].x)*(t.z-e[s].z)/(e[o].z-e[s].z)+e[s].x&&(n=!n);return n}static isVectorInPolygon(e,t,n){var s=1e5,r=-1e5,o=[];return t.vertexIds.forEach(a=>{s=Math.min(n[a].y,s),r=Math.max(n[a].y,r),o.push(n[a])}),!!(e.y<r+.5&&e.y>s-.5&&this.isPointInPoly(o,e))}static triarea2(e,t,n){return(n.x-e.x)*(t.z-e.z)-(t.x-e.x)*(n.z-e.z)}static vequal(e,t){return this.distanceToSquared(e,t)<1e-5}static mergeVertices(e,t=1e-4){t=Math.max(t,Number.EPSILON);for(var n={},s=e.getIndex(),r=e.getAttribute("position"),o=s?s.count:r.count,a=0,l=[],c=[],u=Math.log10(1/t),h=Math.pow(10,u),f=0;f<o;f++){var d=s?s.getX(f):f,g="";g+=~~(r.getX(d)*h)+",",g+=~~(r.getY(d)*h)+",",(g+=~~(r.getZ(d)*h)+",")in n?l.push(n[g]):(c.push(r.getX(d)),c.push(r.getY(d)),c.push(r.getZ(d)),n[g]=a,l.push(a),a++)}const _=new Kt(new Float32Array(c),r.itemSize,r.normalized),m=new xn;return m.setAttribute("position",_),m.setIndex(l),m}}class WP{constructor(e){this.content=[],this.scoreFunction=e}push(e){this.content.push(e),this.sinkDown(this.content.length-1)}pop(){const e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content[0]=t,this.bubbleUp(0)),e}remove(e){const t=this.content.indexOf(e),n=this.content.pop();t!==this.content.length-1&&(this.content[t]=n,this.scoreFunction(n)<this.scoreFunction(e)?this.sinkDown(t):this.bubbleUp(t))}size(){return this.content.length}rescoreElement(e){this.sinkDown(this.content.indexOf(e))}sinkDown(e){const t=this.content[e];for(;e>0;){const n=(e+1>>1)-1,s=this.content[n];if(!(this.scoreFunction(t)<this.scoreFunction(s)))break;this.content[n]=t,this.content[e]=s,e=n}}bubbleUp(e){const t=this.content.length,n=this.content[e],s=this.scoreFunction(n);for(;;){const r=e+1<<1,o=r-1;let a,l=null;if(o<t&&(a=this.scoreFunction(this.content[o]),a<s&&(l=o)),r<t&&this.scoreFunction(this.content[r])<(l===null?s:a)&&(l=r),l===null)break;this.content[e]=this.content[l],this.content[l]=n,e=l}}}class YP{constructor(){this.portals=[]}push(e,t){t===void 0&&(t=e),this.portals.push({left:e,right:t})}stringPull(){const e=this.portals,t=[];let n,s,r,o=0,a=0,l=0;n=e[0].left,s=e[0].left,r=e[0].right,t.push(n);for(let c=1;c<e.length;c++){const u=e[c].left,h=e[c].right;if(wt.triarea2(n,r,h)<=0){if(!(wt.vequal(n,r)||wt.triarea2(n,s,h)>0)){t.push(s),n=s,o=a,s=n,r=n,a=o,l=o,c=o;continue}r=h,l=c}if(wt.triarea2(n,s,u)>=0){if(!(wt.vequal(n,s)||wt.triarea2(n,r,u)<0)){t.push(r),n=r,o=l,s=n,r=n,a=o,l=o,c=o;continue}s=u,a=c}}return t.length!==0&&wt.vequal(t[t.length-1],e[e.length-1].left)||t.push(e[e.length-1].left),this.path=t,t}}class rl{constructor(){this.zones={}}static createZone(e,t=1e-4){return(class{static buildZone(n,s){const r=this._buildNavigationMesh(n,s),o={};r.vertices.forEach(l=>{l.x=wt.roundNumber(l.x,2),l.y=wt.roundNumber(l.y,2),l.z=wt.roundNumber(l.z,2)}),o.vertices=r.vertices;const a=this._buildPolygonGroups(r);return o.groups=new Array(a.length),a.forEach((l,c)=>{const u=new Map;l.forEach((f,d)=>{u.set(f,d)});const h=new Array(l.length);l.forEach((f,d)=>{const g=[];f.neighbours.forEach(p=>g.push(u.get(p)));const _=[];f.neighbours.forEach(p=>_.push(this._getSharedVerticesInOrder(f,p)));const m=new B(0,0,0);m.add(o.vertices[f.vertexIds[0]]),m.add(o.vertices[f.vertexIds[1]]),m.add(o.vertices[f.vertexIds[2]]),m.divideScalar(3),m.x=wt.roundNumber(m.x,2),m.y=wt.roundNumber(m.y,2),m.z=wt.roundNumber(m.z,2),h[d]={id:d,neighbours:g,vertexIds:f.vertexIds,centroid:m,portals:_}}),o.groups[c]=h}),o}static _buildNavigationMesh(n,s){return n=wt.mergeVertices(n,s),this._buildPolygonsFromGeometry(n)}static _spreadGroupId(n){let s=new Set([n]);for(;s.size>0;){const r=s;s=new Set,r.forEach(o=>{o.group=n.group,o.neighbours.forEach(a=>{a.group===void 0&&s.add(a)})})}}static _buildPolygonGroups(n){const s=[];return n.polygons.forEach(r=>{r.group!==void 0?s[r.group].push(r):(r.group=s.length,this._spreadGroupId(r),s.push([r]))}),s}static _buildPolygonNeighbours(n,s){const r=new Set,o=s[n.vertexIds[1]],a=s[n.vertexIds[2]];return s[n.vertexIds[0]].forEach(l=>{l!==n&&(o.includes(l)||a.includes(l))&&r.add(l)}),o.forEach(l=>{l!==n&&a.includes(l)&&r.add(l)}),r}static _buildPolygonsFromGeometry(n){const s=[],r=[],o=n.attributes.position,a=n.index,l=[];for(let c=0;c<o.count;c++)r.push(new B().fromBufferAttribute(o,c)),l[c]=[];for(let c=0;c<n.index.count;c+=3){const u=a.getX(c),h=a.getX(c+1),f=a.getX(c+2),d={vertexIds:[u,h,f],neighbours:null};s.push(d),l[u].push(d),l[h].push(d),l[f].push(d)}return s.forEach(c=>{c.neighbours=this._buildPolygonNeighbours(c,l)}),{polygons:s,vertices:r}}static _getSharedVerticesInOrder(n,s){const r=n.vertexIds,o=r[0],a=r[1],l=r[2],c=s.vertexIds,u=c.includes(o),h=c.includes(a),f=c.includes(l);return u&&h&&f?Array.from(r):u&&h?[o,a]:h&&f?[a,l]:u&&f?[l,o]:(console.warn("Error processing navigation mesh neighbors; neighbors with <2 shared vertices found."),[])}}).buildZone(e,t)}setZoneData(e,t){this.zones[e]=t}getRandomNode(e,t,n,s){if(!this.zones[e])return new B;n=n||null,s=s||0;const r=[];return this.zones[e].groups[t].forEach(o=>{n&&s?wt.distanceToSquared(n,o.centroid)<s*s&&r.push(o.centroid):r.push(o.centroid)}),wt.sample(r)||new B}getClosestNode(e,t,n,s=!1){const r=this.zones[t].vertices;let o=null,a=1/0;return this.zones[t].groups[n].forEach(l=>{const c=wt.distanceToSquared(l.centroid,e);c<a&&(!s||wt.isVectorInPolygon(e,l,r))&&(o=l,a=c)}),o}findPath(e,t,n,s){const r=this.zones[n].groups[s],o=this.zones[n].vertices,a=this.getClosestNode(e,n,s,!0),l=this.getClosestNode(t,n,s,!0);if(!a||!l)return null;const c=(class{static init(d){for(let g=0;g<d.length;g++){const _=d[g];_.f=0,_.g=0,_.h=0,_.cost=1,_.visited=!1,_.closed=!1,_.parent=null}}static cleanUp(d){for(let g=0;g<d.length;g++){const _=d[g];delete _.f,delete _.g,delete _.h,delete _.cost,delete _.visited,delete _.closed,delete _.parent}}static heap(){return new WP(function(d){return d.f})}static search(d,g,_){this.init(d);const m=this.heap();for(m.push(g);m.size()>0;){const p=m.pop();if(p===_){let x=p;const E=[];for(;x.parent;)E.push(x),x=x.parent;return this.cleanUp(E),E.reverse()}p.closed=!0;const A=this.neighbours(d,p);for(let x=0,E=A.length;x<E;x++){const C=A[x];if(C.closed)continue;const I=p.g+C.cost,w=C.visited;if(!w||I<C.g){if(C.visited=!0,C.parent=p,!C.centroid||!_.centroid)throw new Error("Unexpected state");C.h=C.h||this.heuristic(C.centroid,_.centroid),C.g=I,C.f=C.g+C.h,w?m.rescoreElement(C):m.push(C)}}}return[]}static heuristic(d,g){return wt.distanceToSquared(d,g)}static neighbours(d,g){const _=[];for(let m=0;m<g.neighbours.length;m++)_.push(d[g.neighbours[m]]);return _}}).search(r,a,l),u=function(d,g){for(var _=0;_<d.neighbours.length;_++)if(d.neighbours[_]===g.id)return d.portals[_]},h=new YP;h.push(e);for(let d=0;d<c.length;d++){const g=c[d],_=c[d+1];if(_){const m=u(g,_);h.push(o[m[0]],o[m[1]])}}h.push(t),h.stringPull();const f=h.path.map(d=>new B(d.x,d.y,d.z));return f.shift(),f}}rl.prototype.getGroup=function(){const i=new ei;return function(e,t,n=!1){if(!this.zones[e])return null;let s=null,r=Math.pow(50,2);const o=this.zones[e];for(let a=0;a<o.groups.length;a++){const l=o.groups[a];for(const c of l){if(n&&(i.setFromCoplanarPoints(o.vertices[c.vertexIds[0]],o.vertices[c.vertexIds[1]],o.vertices[c.vertexIds[2]]),Math.abs(i.distanceToPoint(t))<.01)&&wt.isPointInPoly([o.vertices[c.vertexIds[0]],o.vertices[c.vertexIds[1]],o.vertices[c.vertexIds[2]]],t))return a;const u=wt.distanceToSquared(c.centroid,t);u<r&&(s=a,r=u)}}return s}}(),rl.prototype.clampStep=function(){const i=new B,e=new ei,t=new Vn,n=new B;let s,r,o=new B;return function(a,l,c,u,h,f){const d=this.zones[u].vertices,g=this.zones[u].groups[h],_=[c],m={};m[c.id]=0,s=void 0,o.set(0,0,0),r=1/0,e.setFromCoplanarPoints(d[c.vertexIds[0]],d[c.vertexIds[1]],d[c.vertexIds[2]]),e.projectPoint(l,i),n.copy(i);for(let p=_.pop();p;p=_.pop()){t.set(d[p.vertexIds[0]],d[p.vertexIds[1]],d[p.vertexIds[2]]),t.closestPointToPoint(n,i),i.distanceToSquared(n)<r&&(s=p,o.copy(i),r=i.distanceToSquared(n));const A=m[p.id];if(!(A>2))for(let x=0;x<p.neighbours.length;x++){const E=g[p.neighbours[x]];E.id in m||(_.push(E),m[E.id]=A+1)}}return f.copy(o),s}}();const rr={PLAYER:new Ue(15631215).convertSRGBToLinear().getHex(),TARGET:new Ue(14469912).convertSRGBToLinear().getHex(),PATH:new Ue(41903).convertSRGBToLinear().getHex(),WAYPOINT:new Ue(41903).convertSRGBToLinear().getHex(),CLAMPED_STEP:new Ue(14472114).convertSRGBToLinear().getHex(),CLOSEST_NODE:new Ue(4417387).convertSRGBToLinear().getHex()};class XP extends _t{constructor(){super(),this._playerMarker=new Ft(new sl(.25,32,32),new Dn({color:rr.PLAYER})),this._targetMarker=new Ft(new rs(.3,.3,.3),new Dn({color:rr.TARGET})),this._nodeMarker=new Ft(new rs(.1,.8,.1),new Dn({color:rr.CLOSEST_NODE})),this._stepMarker=new Ft(new rs(.1,1,.1),new Dn({color:rr.CLAMPED_STEP})),this._pathMarker=new _t,this._pathLineMaterial=new zu({color:rr.PATH,linewidth:2}),this._pathPointMaterial=new Dn({color:rr.WAYPOINT}),this._pathPointGeometry=new sl(.08),this._markers=[this._playerMarker,this._targetMarker,this._nodeMarker,this._stepMarker,this._pathMarker],this._markers.forEach(e=>{e.visible=!1,this.add(e)})}setPath(e){for(;this._pathMarker.children.length;)this._pathMarker.children[0].visible=!1,this._pathMarker.remove(this._pathMarker.children[0]);e=[this._playerMarker.position].concat(e);const t=new xn;t.setAttribute("position",new Kt(new Float32Array(3*e.length),3));for(let n=0;n<e.length;n++)t.attributes.position.setXYZ(n,e[n].x,e[n].y+.2,e[n].z);this._pathMarker.add(new Ml(t,this._pathLineMaterial));for(let n=0;n<e.length-1;n++){const s=new Ft(this._pathPointGeometry,this._pathPointMaterial);s.position.copy(e[n]),s.position.y+=.2,this._pathMarker.add(s)}return this._pathMarker.visible=!0,this}setPlayerPosition(e){return this._playerMarker.position.copy(e),this._playerMarker.visible=!0,this}setTargetPosition(e){return this._targetMarker.position.copy(e),this._targetMarker.visible=!0,this}setNodePosition(e){return this._nodeMarker.position.copy(e),this._nodeMarker.visible=!0,this}setStepPosition(e){return this._stepMarker.position.copy(e),this._stepMarker.visible=!0,this}reset(){for(;this._pathMarker.children.length;)this._pathMarker.children[0].visible=!1,this._pathMarker.remove(this._pathMarker.children[0]);return this._markers.forEach(e=>{e.visible=!1}),this}}const KP="/assets/map-81a108d2.glb",jP="/assets/navmesh-197f7aa4.glb",qP=pn({__name:"ThreeView",setup(i){const e=ft(null),t=new xC,n=new vC,s=new ln(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=-8,s.position.y=12,s.position.x=-10;const r=new cP(s,n.domElement);r.mouseButtons={MIDDLE:ji.ROTATE,RIGHT:ji.PAN},r.enableDamping=!0,r.enablePan=!0,r.minDistance=5,r.maxDistance=60,r.maxPolarAngle=Math.PI/2-.05,r.minPolarAngle=Math.PI/4,r.update();const o=new Ym("white",1);o.position.x=35,o.position.y=15,o.castShadow=!0;const a=5;o.shadow.camera.left=-a,o.shadow.camera.right=a,o.shadow.camera.top=a,o.shadow.camera.bottom=-a,t.add(o);const l=new qC("white",.5);t.add(l);const c=1,u=.25,h=new Ft(new Vu(u,u,c),new CC({color:6737151}));h.position.y=c/2;const f=new Ji;f.add(h),f.position.z=0,f.position.x=0,f.position.y=1,t.add(f);const d=new uP;d.load(KP,M=>{t.add(M.scene)});const g=new rl,_=new XP;t.add(_);const m="main";let p,A,x;d.load(jP,M=>{M.scene.traverse(L=>{!p&&L.isObject3D&&L.children.length>0&&(p=L.children[0],g.setZoneData(m,rl.createZone(p.geometry)))})});const E=new aP,C=new Ne;n.setSize(window.innerWidth*.75,window.innerHeight*.75);function I(M){return E.setFromCamera(M,s),E.intersectObjects(t.children)}function w(M){if(!x||x.length<=0)return;const V=x[0].clone().sub(f.position);V.lengthSq()>.5*.05?(V.normalize(),f.position.add(V.multiplyScalar(M*5))):x.shift()}const U=new ZC;function S(){w(U.getDelta()),r.update(),requestAnimationFrame(S),n.render(t,s)}return S(),Gr(()=>{var M,L;(M=e.value)==null||M.appendChild(n.domElement),(L=e.value)==null||L.addEventListener("click",V=>{C.x=V.clientX/window.innerWidth*2-1,C.y=-(V.clientY/window.innerHeight)*2+1;const O=I(C);if(O.length>0){let re=O[0].point;const le=f.position;A=g.getGroup(m,f.position);const ue=g.getClosestNode(le,m,A);x=g.findPath(ue.centroid,re,m,A),x&&(_.reset(),_.setPlayerPosition(le),_.setTargetPosition(re),_.setPath(x))}})}),(M,L)=>(Ee(),Te("main",null,[D("div",{ref_key:"mainDiv",ref:e,class:"pt-4 w-100 d-flex justify-content-center"},null,512)]))}}),$P=wv({history:Y0("/"),routes:[{path:"/",name:"home",component:ux},{path:"/coursework",name:"coursework",component:mx},{path:"/projects",name:"projects",component:fy},{path:"/interests",name:"interests",component:yy},{path:"/games/shooter",name:"shooter",component:$y},{path:"/games/danmaku",name:"danmaku",component:CM},{path:"/games/starrail",name:"starrail",component:VS},{path:"/demo",name:"demo",component:qP}]}),jm=T0(jv);jm.use($P);jm.mount("#app");
