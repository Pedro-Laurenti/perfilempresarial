import{j as e,F as l,a as i,b as d}from"./index-DiYNvgGO.js";const x=({message:a})=>{const s=r=>{const c=window.location.href,n=encodeURIComponent(a||"Eu estou participando!"),o=encodeURIComponent(c);let t;switch(r){case"twitter":t=`https://twitter.com/intent/tweet?url=${o}&text=${n}`;break;case"linkedin":t=`https://www.linkedin.com/sharing/share-offsite/?url=${o}&summary=${n}`;break;case"facebook":t=`https://www.facebook.com/sharer/sharer.php?u=${o}&quote=${n}`;break;default:return}window.open(t,"_blank")};return e.jsx("div",{children:e.jsxs("div",{className:"mt-5 flex flex-row gap-5",children:[e.jsx("button",{onClick:()=>s("twitter"),className:"bg-sky-500/50 rounded-full flex px-4 py-4 items-center hover:bg-sky-500",children:e.jsx(l,{className:"h-5 w-5"})}),e.jsx("button",{onClick:()=>s("linkedin"),className:"bg-sky-500/50 rounded-full flex px-4 py-4 items-center hover:bg-sky-500",children:e.jsx(i,{className:"h-5 w-5"})}),e.jsx("button",{onClick:()=>s("facebook"),className:"bg-sky-500/50 rounded-full flex px-4 py-4 items-center hover:bg-sky-500",children:e.jsx(d,{className:"h-5 w-5"})})]})})};export{x as default};
