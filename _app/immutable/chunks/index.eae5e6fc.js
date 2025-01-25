function p(o){const t=o-1;return t*t*t+1}function l(o,{delay:t=0,duration:r=400,easing:a=p,start:e=0,opacity:f=0}={}){const n=getComputedStyle(o),s=+n.opacity,i=n.transform==="none"?"":n.transform,u=1-e,m=s*(1-f);return{delay:t,duration:r,easing:a,css:(y,c)=>`
			transform: ${i} scale(${1-u*c});
			opacity: ${s-m*c}
		`}}export{l as s};
