function T(){}const et=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function nt(){return Object.create(null)}function H(t){t.forEach(q)}function it(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function rt(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function lt(t){return Object.keys(t).length===0}function B(t,...e){if(t==null){for(const i of e)i(void 0);return T}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(B(e,n))}function ot(t,e,n,i){if(t){const c=N(t,e,n,i);return t[0](c)}}function N(t,e,n,i){return t[1]&&i?P(n.ctx.slice(),t[1](i(e))):n.ctx}function ut(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],r=Math.max(e.dirty.length,c.length);for(let s=0;s<r;s+=1)o[s]=e.dirty[s]|c[s];return o}return e.dirty|c}return e.dirty}function at(t,e,n,i,c,o){if(c){const r=N(e,n,i,o);t.p(r,c)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function _t(t){const e={};for(const n in t)e[n]=!0;return e}function dt(t){return t??""}let p=!1;function ht(){p=!0}function mt(){p=!1}function L(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(c>0&&e[n[c]].claim_order<=u?c+1:L(1,c,S=>e[n[S]].claim_order,u))-1;i[l]=n[a]+1;const E=a+1;n[E]=l,c=Math.max(E,c)}const o=[],r=[];let s=e.length-1;for(let l=n[c]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)r.push(e[s]);s--}for(;s>=0;s--)r.push(e[s]);o.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<o.length&&r[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(r[l],a)}}function R(t,e){t.appendChild(e)}function z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=A("style");return e.textContent="/* empty */",F(z(t),e),e.sheet}function F(t,e){return R(t.head||t,e),e.sheet}function I(t,e){if(p){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){p&&!n?I(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function xt(){return w(" ")}function wt(){return w("")}function vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function j(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const W=["width","height"];function G(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?t[i]=e[i]:j(t,i,e[i])}function J(t,e){Object.keys(e).forEach(n=>{K(t,n,e[n])})}function K(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:j(t,e,n)}function Et(t){return/-/.test(t)?J:G}function kt(t){return t.dataset.svelteH}function Nt(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,c=!1){Q(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const l=n(s);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const l=n(s);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,e,n,i){return D(t,c=>c.nodeName===e,c=>{const o=[];for(let r=0;r<c.attributes.length;r++){const s=c.attributes[r];n[s.name]||o.push(s.name)}o.forEach(r=>c.removeAttribute(r))},()=>i(e))}function At(t,e,n){return C(t,e,n,A)}function jt(t,e,n){return C(t,e,n,U)}function V(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function Dt(t){return V(t," ")}function Ct(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e){t.value=e??""}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Pt(t,e){const n=[];let i=0;for(const c of e.childNodes)if(c.nodeType===8){const o=c.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(c)):o===`HEAD_${t}_START`&&(i+=1,n.push(c))}else i>0&&n.push(c);return n}function qt(t,e){return new t(e)}let m;function y(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){v().$$.on_mount.push(t)}function Bt(t){v().$$.after_update.push(t)}function Lt(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const o=X(e,n,{cancelable:i});return c.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Mt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],k=[];let _=[];const g=[],O=Promise.resolve();let x=!1;function Y(){x||(x=!0,O.then($))}function Rt(){return Y(),O}function Z(t){_.push(t)}function zt(t){g.push(t)}const b=new Set;let f=0;function $(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,y(e),tt(e.$$)}}catch(e){throw d.length=0,f=0,e}for(y(null),d.length=0,f=0;k.length;)k.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function tt(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Ft(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{m as $,T as A,Mt as B,ot as C,at as D,ft as E,ut as F,U as G,jt as H,Pt as I,rt as J,_t as K,P as L,Et as M,Tt as N,it as O,Z as P,Ot as Q,Lt as R,zt as S,z as T,pt as U,X as V,et as W,nt as X,$ as Y,lt as Z,Ft as _,xt as a,y as a0,q as a1,d as a2,Y as a3,ht as a4,mt as a5,Bt as b,Dt as c,bt as d,wt as e,A as f,At as g,Nt as h,yt as i,j,St as k,w as l,V as m,Ct as n,Ht as o,k as p,qt as q,kt as r,ct as s,Rt as t,dt as u,I as v,vt as w,gt as x,H as y,st as z};