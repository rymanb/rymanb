import{A as c,s as d}from"./scheduler.3fef8643.js";const e=[];function g(i,l=c){let n;const o=new Set;function r(t){if(d(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,f)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1ktthdd)==null?void 0:u.base)??"";var a;const k=((a=globalThis.__sveltekit_1ktthdd)==null?void 0:a.assets)??h;export{k as a,h as b,g as w};
