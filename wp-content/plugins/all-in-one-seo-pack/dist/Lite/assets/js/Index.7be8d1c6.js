import{G as J,a as q}from"./Row.f01f32cd.js";import{_ as C}from"./_plugin-vue_export-helper.249dac1d.js";import{v as i,o as t,c as n,C as b,l,F as x,J as $,k as _,a as o,m as k,x as Z,t as g,X as D,Q as G,b as d,g as I,u as M,E,z as j}from"./runtime-dom.esm-bundler.6789c400.js";import{C as R}from"./SettingsRow.1934f141.js";import"./translations.12335a6a.js";import{C as U}from"./Tooltip.b6b45c85.js";import{S as W}from"./CheckSolid.9e151b0e.js";import{c as F}from"./index.01e1b194.js";import{_ as p}from"./default-i18n.54b5d8cd.js";import{T}from"./Slide.d0517fb0.js";const z={components:{GridColumn:J,GridRow:q},props:{options:{type:Array,required:!0},name:{type:String,required:!0},modelValue:String}},Q={class:"aioseo-box-toggle"},X=["id","name","onInput","checked"],K=["for"];function Y(e,c,s,H,u,r){const m=i("grid-column"),y=i("grid-row");return t(),n("div",Q,[b(y,null,{default:l(()=>[(t(!0),n(x,null,$(s.options,(v,h)=>(t(),_(m,{key:h,sm:"6",md:"4"},{default:l(()=>[o("input",{id:`id_${s.name}_${h}`,name:s.name,type:"radio",onInput:w=>e.$emit("update:modelValue",v.value),checked:v.value===s.modelValue},null,40,X),o("label",{for:`id_${s.name}_${h}`},[k(e.$slots,v.slot,{},()=>[Z(g(v.label),1)])],8,K)]),_:2},1024))),128))]),_:3})])}const ee=C(z,[["render",Y]]),te={props:{description:{type:String},attributes:{type:Array,required:!0}}},oe={class:"aioseo-attributes"},se={class:"aioseo-description"},ne={class:"aioseo-attributes-list"},re=["innerHTML"];function ce(e,c,s,H,u,r){return t(),n("div",oe,[o("div",se,g(s.description),1),o("ul",ne,[(t(!0),n(x,null,$(s.attributes,(m,y)=>(t(),n("li",{key:y},[o("div",null,[o("code",null,g(m.name),1)]),o("div",null,[o("span",{class:"aioseo-description",innerHTML:m.description},null,8,re)])]))),128))])])}const ie=C(te,[["render",ce],["__scopeId","data-v-4823ddd8"]]),B="all-in-one-seo-pack",le={components:{CoreTooltip:U,SvgCircleCheckSolid:W,SvgCopy:F},props:{message:{type:String,required:!0}},data(){return{copied:!1}},computed:{copyText(){return this.copied?p("Copied!",B):p("Click to Copy",B)}},methods:{onCopy(){this.copied=!0;const e=this.$refs.copy;e.popperJS&&(e.popperJS.destroy(),e.popperJS=null),e.showPopper=!1,setTimeout(()=>{e.popperJS&&(e.popperJS.destroy(),e.popperJS=null),e.showPopper=!1,this.copied=!1},2e3)},onError(){}}},ae={class:"aioseo-copy-block"},de={class:"message"},ue={ref:"copy",class:"copy"};function pe(e,c,s,H,u,r){const m=i("svg-copy"),y=i("svg-circle-check-solid"),v=i("core-tooltip"),h=D("clipboard");return t(),n("div",ae,[o("div",de,g(s.message),1),b(v,{class:"copy-tooltip",type:"action"},{tooltip:l(()=>[Z(g(r.copyText),1)]),default:l(()=>[G((t(),n("div",ue,[u.copied?d("",!0):(t(),_(m,{key:0})),u.copied?(t(),_(y,{key:1})):d("",!0)])),[[h,s.message,"copy"],[h,r.onCopy,"success"],[h,r.onError,"error"]])]),_:1})])}const _e=C(le,[["render",pe]]),ge={class:"aioseo-slide-content"},me={key:0,class:"main-box"},he=["innerHTML"],fe={key:0,class:"advanced-settings"},ve={key:1,class:"extra-box"},Ce={__name:"SlideContent",props:{item:{type:Object,required:!0}},setup(e){const c="all-in-one-seo-pack",s=I(!1),H={advancedSettings:p("Advanced Settings",c)};return(u,r)=>(t(),n("div",ge,[e.item.slot!=="extra"?(t(),n("div",me,[o("div",null,[o("div",null,[e.item.desc?(t(),n("div",{key:0,class:"aioseo-description",innerHTML:e.item.desc},null,8,he)):d("",!0),e.item.copy?(t(),_(M(_e),{key:1,message:e.item.copy},null,8,["message"])):d("",!0),e.item.hasAdvanced&&!s.value?(t(),n("a",{key:2,class:"advanced-settings-link",href:"#",onClick:r[0]||(r[0]=E(m=>s.value=!s.value,["prevent"]))},g(H.advancedSettings),1)):d("",!0)]),u.$slots.advanced?(t(),_(M(T),{key:0,active:s.value},{default:l(()=>[s.value?(t(),n("div",fe,[k(u.$slots,"advanced")])):d("",!0)]),_:3},8,["active"])):d("",!0)])])):d("",!0),e.item.slot==="extra"?(t(),n("div",ve,[k(u.$slots,"extraBox")])):d("",!0)]))}},ye={},be={viewBox:"0 0 59 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-gutenberg-block"},He=o("rect",{x:"1.5",y:"1.50024",stroke:"currentColor","stroke-width":"3","stroke-dasharray":"5 3"},null,-1),Ve=o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.6849 10.0276H11.3151V43.9728H47.6849V10.0276ZM22.6301 25.8377V28.1766H28.7115V34.2742H31.0967V28.1766H37.1781V25.8377H31.0967V19.7262H28.7115V25.8377H22.6301Z",fill:"currentcolor"},null,-1),ke=[He,Ve];function xe(e,c){return t(),n("svg",be,ke)}const $e=C(ye,[["render",xe]]),we={},Se={viewBox:"0 0 110 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-php"},Le=j('<path d="M23.3994 19.1184H27.8077V23.0002H23.3994V19.1184ZM18 9.44752C18.1183 6.89548 19.0996 5.08666 20.9438 4.02106C22.1075 3.34052 23.5375 3.00024 25.2337 3.00024C27.4625 3.00024 29.3116 3.48379 30.7811 4.45088C32.2604 5.41797 33 6.8507 33 8.74907C33 9.91316 32.6795 10.8937 32.0385 11.6906C31.6637 12.1742 30.9438 12.7921 29.8787 13.5442L28.8284 14.283C28.2564 14.6859 27.8767 15.1561 27.6893 15.6933C27.571 16.0336 27.5069 16.5619 27.497 17.2783H23.503C23.5621 15.765 23.7199 14.7218 23.9763 14.1487C24.2327 13.5666 24.8935 12.8995 25.9586 12.1473L27.0385 11.3817C27.3935 11.1399 27.6795 10.8758 27.8965 10.5892C28.2909 10.0967 28.4882 9.55498 28.4882 8.96398C28.4882 8.28343 28.2663 7.66557 27.8225 7.11039C27.3886 6.54625 26.5897 6.26418 25.426 6.26418C24.2821 6.26418 23.4684 6.60893 22.9852 7.29843C22.5118 7.98793 22.2751 8.7043 22.2751 9.44752H18Z" fill="currentColor"></path><path d="M49.9406 9.72752C49.9406 8.79129 49.695 8.12372 49.2038 7.7248C48.7207 7.32589 48.0403 7.12643 47.1626 7.12643H43.696V12.4263H47.1626C48.0403 12.4263 48.7207 12.2106 49.2038 11.7791C49.695 11.3476 49.9406 10.6637 49.9406 9.72752ZM53.6246 9.70309C53.6246 11.8279 53.0931 13.33 52.0302 14.2092C50.9673 15.0884 49.4494 15.5281 47.4766 15.5281H43.696V22.0002H40V4.00024H47.7544C49.542 4.00024 50.9673 4.46429 52.0302 5.39237C53.0931 6.32046 53.6246 7.75737 53.6246 9.70309Z" fill="currentColor"></path><path d="M56.3905 22.0002V4.00024H60.0745V10.8632H67.0317V4.00024H70.7277V22.0002H67.0317V13.965H60.0745V22.0002H56.3905Z" fill="currentColor"></path><path d="M84.3161 9.72752C84.3161 8.79129 84.0705 8.12372 83.5793 7.7248C83.0961 7.32589 82.4157 7.12643 81.538 7.12643H78.0715V12.4263H81.538C82.4157 12.4263 83.0961 12.2106 83.5793 11.7791C84.0705 11.3476 84.3161 10.6637 84.3161 9.72752ZM88 9.70309C88 11.8279 87.4685 13.33 86.4056 14.2092C85.3427 15.0884 83.8249 15.5281 81.852 15.5281H78.0715V22.0002H74.3754V4.00024H82.1298C83.9175 4.00024 85.3427 4.46429 86.4056 5.39237C87.4685 6.32046 88 7.75737 88 9.70309Z" fill="currentColor"></path><path d="M12.1457 0.000244141L15 2.93774L5.72875 12.5002L15 22.0627L12.1457 25.0002L0 12.5002L12.1457 0.000244141Z" fill="currentColor"></path><path d="M97.8543 0.000244141L95 2.93774L104.271 12.5002L95 22.0627L97.8543 25.0002L110 12.5002L97.8543 0.000244141Z" fill="currentColor"></path>',6),Me=[Le];function Be(e,c){return t(),n("svg",Se,Me)}const Ze=C(we,[["render",Be]]),Te={},Ae={viewBox:"0 0 59 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-shortcode"},Ne=o("path",{d:"M0 0.000244141H11V4.31055H5.91633V34.6692H11V39.0002H0V0.000244141Z",fill:"currentColor"},null,-1),Oe=o("path",{d:"M34.1337 0.000244141H40L25.8168 39.0002H20L34.1337 0.000244141Z",fill:"currentColor"},null,-1),Pe=o("path",{d:"M59 0.000244141H48V4.31055H53.0837V34.6692H48V39.0002H59V0.000244141Z",fill:"currentColor"},null,-1),Je=[Ne,Oe,Pe];function qe(e,c){return t(),n("svg",Ae,Je)}const De=C(Te,[["render",qe]]),Ge={},Ie={viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-widget"},Ee=o("path",{d:"M48.6875 7.12506H8.3125C7.00625 7.12506 5.9375 8.19381 5.9375 9.50006V23.7501C5.9375 25.0563 7.00625 26.1251 8.3125 26.1251H48.6875C49.9938 26.1251 51.0625 25.0563 51.0625 23.7501V9.50006C51.0625 8.19381 49.9938 7.12506 48.6875 7.12506ZM46.3125 21.3751V11.8751H10.6875V21.3751H46.3125ZM46.3125 45.1251V35.6251H10.6875V45.1251H46.3125ZM8.3125 30.8751H48.6875C49.9938 30.8751 51.0625 31.9438 51.0625 33.2501V47.5001C51.0625 48.8063 49.9938 49.8751 48.6875 49.8751H8.3125C7.00625 49.8751 5.9375 48.8063 5.9375 47.5001V33.2501C5.9375 31.9438 7.00625 30.8751 8.3125 30.8751Z",fill:"currentColor"},null,-1),je=[Ee];function Re(e,c){return t(),n("svg",Ie,je)}const Ue=C(Ge,[["render",Re]]),f="all-in-one-seo-pack",We={components:{BaseBoxToggle:ee,CoreAttributesList:ie,CoreSettingsRow:R,SlideContent:Ce,SvgGutenbergBlock:$e,SvgPhp:Ze,SvgShortcode:De,SvgWidget:Ue,TransitionSlide:T},props:{label:{type:String,default(){return p("Display Info",f)}},options:{type:Object,required:!0},plural:{type:Boolean,default(){return!1}}},data(){return{currentItem:Object.keys(this.options)[0],strings:{singular:{gutenbergBlock:p("Gutenberg Block",f),phpCode:p("PHP Code",f),shortcode:p("Shortcode",f),widget:p("Widget",f)},plural:{gutenbergBlock:p("Gutenberg Blocks",f),phpCode:p("PHP Code",f),shortcode:p("Shortcodes",f),widget:p("Widgets",f)}}}},watch:{currentItem(e){this.currentItem=e}},computed:{boxToggleOptions(){return Object.keys(this.options).map(c=>({value:c,slot:c,...this.options[c]}))},boxStrings(){return this.plural?this.strings.plural:this.strings.singular}},methods:{slotName(e){return e.hasAdvanced?"advanced":e.slot==="extra"?"extraBox":e.slot}}},Fe={class:"ui-element-slider-content"};function ze(e,c,s,H,u,r){const m=i("svg-shortcode"),y=i("svg-gutenberg-block"),v=i("svg-php"),h=i("svg-widget"),w=i("base-box-toggle"),S=i("core-attributes-list"),L=i("slide-content"),A=i("transition-slide"),N=i("core-settings-row");return t(),_(N,{class:"aioseo-ui-element-slider",name:s.label},{content:l(()=>[b(w,{modelValue:u.currentItem,"onUpdate:modelValue":c[0]||(c[0]=a=>u.currentItem=a),name:"ui-element-slider",options:r.boxToggleOptions},{extra:l(()=>[k(e.$slots,"extra")]),shortcode:l(()=>[b(m),o("p",null,g(r.boxStrings.shortcode),1)]),block:l(()=>[b(y),o("p",null,g(r.boxStrings.gutenbergBlock),1)]),php:l(()=>[b(v),o("p",null,g(r.boxStrings.phpCode),1)]),widget:l(()=>[b(h),o("p",null,g(r.boxStrings.widget),1)]),_:3},8,["modelValue","options"]),o("div",Fe,[(t(!0),n(x,null,$(r.boxToggleOptions,(a,O)=>(t(),_(A,{key:O,active:a.value===u.currentItem},{default:l(()=>[a.multiple?d("",!0):(t(),_(L,{key:0,item:a},{[r.slotName(a)]:l(()=>[a.attributes?(t(),_(S,{key:0,attributes:a.attributes,description:a.attributesDescription},null,8,["attributes","description"])):d("",!0),k(e.$slots,r.slotName(a),{item:a})]),_:2},1032,["item"])),a.multiple?(t(!0),n(x,{key:1},$(a.multiple,(V,P)=>(t(),_(L,{key:P,item:V},{[r.slotName(V)]:l(()=>[V.attributes?(t(),_(S,{key:0,attributes:V.attributes,description:V.attributesDescription},null,8,["attributes","description"])):d("",!0)]),_:2},1032,["item"]))),128)):d("",!0)]),_:2},1032,["active"]))),128))])]),_:3},8,["name"])}const ct=C(We,[["render",ze]]);export{ct as C};
