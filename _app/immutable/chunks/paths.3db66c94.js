import{A as b,s as h}from"./scheduler.3fef8643.js";const e=[];function d(i,l=b){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const u=!e.length;for(const s of o)s[1](),e.push(s,i);if(u){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(i))}function _(t,u=b){const s=[t,u];return o.add(s),o.size===1&&(n=l(r,c)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_2v8u8u)==null?void 0:f.base)??"";var a;const q=((a=globalThis.__sveltekit_2v8u8u)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
