"use strict";(()=>{function F(e){return e instanceof HTMLInputElement&&(e.type==="submit"||e.type==="image")||e instanceof HTMLButtonElement&&e.type==="submit"}var p=Symbol();function E(e){return e instanceof HTMLInputElement&&e.type==="image"}function b(){window.addEventListener("click",e=>{E(e.target)&&(e.target[p]={x:e.offsetX,y:e.offsetY})})}function y(e,n){let t=document.createElement("span");n.insertAdjacentElement("afterend",t);let r=!e.contains(n);function o(a,l){let m=document.createElement("input");m.type="hidden",m.name=a,m.value=String(l),r&&m.setAttribute("form",e.id),t.insertAdjacentElement("beforeend",m)}let i=d(n);for(let[a,l]of i)o(a,l);return n.insertAdjacentElement("afterend",t),t}function d(e){var n;if(E(e)){let t=(n=e[p])!=null?n:{x:0,y:0},r=e.name?`${e.name}.`:"";return[[`${r}x`,String(t.x)],[`${r}y`,String(t.y)]]}else if(e.name)return[[e.name,e.value]];return[]}function s(e){let[n,t]=e;if(n!==void 0&&!(n instanceof HTMLFormElement))throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'");if(t!=null){if(!F(t))throw new TypeError("Failed to construct 'FormData': The specified element is not a submit button.");if(n&&t.form!==n)throw new DOMException("Failed to construct 'FormData': The specified element is not owned by this form element","NotFoundError")}}function f(e){if(typeof document!="undefined"){try{new window.FormData(document.createElement("form"),"not a submitter")}catch(n){return}window.FormData=e,b()}}var u=class extends window.FormData{constructor(...n){s(n);let[t,r]=n;if(!t||r==null){super(t);return}let o=r.disabled;r.disabled=!0;try{let i=y(t,r);super(t),i.remove()}finally{r.disabled=o}}};var c=class extends window.FormData{constructor(...n){s(n);let[t,r]=n;if(!t||r==null){super(t);return}super(t);let o=d(r);for(let[i,a]of o)this.append(i,a)}};f(u);})();
