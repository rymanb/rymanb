import{s as v,f as y,g as x,h as C,d,j as s,i as S,A as w}from"./scheduler.081ebcb9.js";import{S as q,i as A,g as L,t as u,c as U,a as f,b as h,d as b,m as p,e as g}from"./index.b3da7288.js";import{U as k}from"./UIcon.46acf8c7.js";function j(l){let e,r;return e=new k({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){p(e,t,o),r=!0},p:w,i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function E(l){let e,r;return e=new k({props:{iconSource:l[1],classes:"text-[var(--secondary-text)]"}}),{c(){h(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){p(e,t,o),r=!0},p(t,o){const c={};o&2&&(c.iconSource=t[1]),e.$set(c)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){u(e.$$.fragment,t),r=!1},d(t){g(e,t)}}}function I(l){let e,r,t,o;const c=[E,j],a=[];function m(n,i){return n[1]!==""?0:1}return r=m(l),t=a[r]=c[r](l),{c(){e=y("a"),t.c(),this.h()},l(n){e=x(n,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var i=C(e);t.l(i),i.forEach(d),this.h()},h(){s(e,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),s(e,"href",l[2]),s(e,"title",l[0]),s(e,"target","_blank"),s(e,"rel","noreferrer"),s(e,"data-help",l[0])},m(n,i){S(n,e,i),a[r].m(e,null),o=!0},p(n,[i]){let _=r;r=m(n),r===_?a[r].p(n,i):(L(),u(a[_],1,1,()=>{a[_]=null}),U(),t=a[r],t?t.p(n,i):(t=a[r]=c[r](n),t.c()),f(t,1),t.m(e,null)),(!o||i&4)&&s(e,"href",n[2]),(!o||i&1)&&s(e,"title",n[0]),(!o||i&1)&&s(e,"data-help",n[0])},i(n){o||(f(t),o=!0)},o(n){u(t),o=!1},d(n){n&&d(e),a[r].d()}}}function $(l,e,r){let{label:t}=e,{icon:o}=e,{to:c}=e;return l.$$set=a=>{"label"in a&&r(0,t=a.label),"icon"in a&&r(1,o=a.icon),"to"in a&&r(2,c=a.to)},[t,o,c]}class F extends q{constructor(e){super(),A(this,e,$,I,v,{label:0,icon:1,to:2})}}export{F as C};
