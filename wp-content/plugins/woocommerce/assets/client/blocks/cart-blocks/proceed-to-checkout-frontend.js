"use strict";(self.webpackChunkwebpackWcBlocksCartCheckoutFrontendJsonp=self.webpackChunkwebpackWcBlocksCartCheckoutFrontendJsonp||[]).push([[9936],{1819:(e,t,c)=>{c.r(t),c.d(t,{default:()=>f});var o=c(1616),a=c(1609),n=c(851),r=c(6087),u=c(4845),l=c(812),s=c(727),i=c(5703),d=c(7143),k=c(7594),b=c(1e3),p=c(2379),m=c(8939);const C=(0,c(7723).__)("Proceed to Checkout","woocommerce"),h={checkoutPageId:{type:"number",default:0},lock:{type:"object",default:{move:!0,remove:!0}},buttonLabel:{type:"string",default:C}},f=(0,o.withFilteredAttributes)(h)((({checkoutPageId:e,className:t,buttonLabel:o})=>{const h=(0,i.getSetting)("page-"+e,!1),f=(0,d.useSelect)((e=>e(k.CHECKOUT_STORE_KEY).isCalculating())),[g,w]=(0,s.E)(),[E,_]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if("function"!=typeof c.g.addEventListener||"function"!=typeof c.g.removeEventListener)return;const e=()=>{_(!1)};return c.g.addEventListener("pageshow",e),()=>{c.g.removeEventListener("pageshow",e)}}),[]);const v=(0,d.useSelect)((e=>e(k.CART_STORE_KEY).getCartData())),y=(0,b.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLabel",defaultValue:o||C,arg:{cart:v}}),L=(0,b.applyCheckoutFilter)({filterName:"proceedToCheckoutButtonLink",defaultValue:h||l.tn,arg:{cart:v}}),{dispatchOnProceedToCheckout:S}=(0,m.e)(),T=(0,a.createElement)(u.A,{className:"wc-block-cart__submit-button",href:L,disabled:f,onClick:e=>{S().then((t=>{t.some(p.CR)?e.preventDefault():_(!0)}))},showSpinner:E},y),N=(0,r.useMemo)((()=>getComputedStyle(document.body).backgroundColor),[]),A="below"===w,F=(0,n.A)("wc-block-cart__submit-container",{"wc-block-cart__submit-container--sticky":A});return(0,a.createElement)("div",{className:(0,n.A)("wc-block-cart__submit",t)},g,(0,a.createElement)("div",{className:F,style:A?{backgroundColor:N}:{}},T))}))}}]);