import{u,d as m,s as h,i as p,j as g,o,c as a,a as t,n as s,k as i,t as n,e as y,l as c}from"./entry.d331b2d3.js";function f(){return u().$device}const k={class:"group relative block h-auto select-none cursor-help"},x=t("span",{class:"absolute inset-0 border-2 border-dashed border-black"},null,-1),b={class:"p-4 pt-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"},C=m({__name:"NewTask",props:{task:null,loading:{type:Boolean}},setup(e){const{isDesktop:d}=f(),l=h(),r=p(0);return g(()=>{r.value=l.value.offsetHeight-(d?64:30)}),(v,w)=>(o(),a("div",k,[x,t("div",{ref_key:"root",ref:l,class:s(["relative flex h-full transform items-end border-2 border-black bg-white transition-transform duration-75 will-change-transform",{"border-gray-300":e.loading,"group-hover:-translate-x-2 group-hover:-translate-y-2":!!e.task.description}])},[t("div",b,[e.task.priority.name?(o(),a("strong",{key:0,class:s(["rounded border-transparent px-3 py-1 text-[10px] font-medium border-2 sm:text-[12px] sm:py-1.5",{"border-none":e.loading}]),style:i({borderColor:e.task.priority.color,color:e.loading?"white":e.task.priority.color})},n(e.task.priority.name),7)):y("",!0),t("h2",{class:s(["mt-4 text-xl font-medium sm:text-2xl",{"text-gray-300":e.loading}])},n(e.task.name),3)]),t("div",{class:s(["absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-full h-full text-clip overflow-hidden",{"text-white":e.loading}])},[e.task.description?(o(),a("p",{key:0,class:"mt-2 text-sm sm:text-base",style:i({minHeight:`${c(r)}px`})},n(e.task.description.slice(0,500)),5)):(o(),a("p",{key:1,style:i({height:`${c(r)}px`})}," Нет описания ",4))],2)],2)]))}});export{C as _};