(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9828)}])},2602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},noSSR:function(){return r}});let i=n(8754);n(5893),n(7294);let o=i._(n(5491));function a(e){return{default:(null==e?void 0:e.default)||e}}function r(e,t){return delete t.webpack,delete t.modules,e(t)}function c(e,t){let n=o.default,i={loading:e=>{let{error:t,isLoading:n,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e});let c=(i={...i,...t}).loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?n({...i,loader:()=>null!=c?c().then(a):Promise.resolve(a(()=>null))}):(delete i.webpack,delete i.modules,r(n,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let i=n(8754)._(n(7294)).default.createContext(null)},5491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let i=n(8754)._(n(7294)),o=n(1159),a=[],r=[],c=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function l(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function s(){if(!a){let t=new d(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!c){let e=n.webpack?n.webpack():n.modules;e&&r.push(t=>{for(let n of e)if(t.includes(n))return s()})}function l(e,t){!function(){s();let e=i.default.useContext(o.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let r=i.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return i.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),i.default.useMemo(()=>{var t;return r.loading||r.error?i.default.createElement(n.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:a.retry}):r.loaded?i.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null},[e,r])}return l.preload=()=>s(),l.displayName="LoadableComponent",i.default.forwardRef(l)}(s,e)}function m(e,t){let n=[];for(;e.length;){let i=e.pop();n.push(i(t))}return Promise.all(n).then(()=>{if(e.length)return m(e,t)})}l.preloadAll=()=>new Promise((e,t)=>{m(a).then(e,t)}),l.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(c=!0,t());m(r,e).then(n,n)})),window.__NEXT_PRELOADREADY=l.preloadReady;let h=l},9828:function(e,t,n){"use strict";n.r(t),n.d(t,{Div_602c14884fa2de27f522fe8f94374b02:function(){return X},Fragment_f2f0916d2fcc08b7cdf76cec697f0750:function(){return I},Link_17d2861e37891d6f8811c2b2eaaf6c2d:function(){return W},Link_37ca290a1980719c2e02f6477924bb0e:function(){return Z},Link_52fd0a336645da595656752081c2334d:function(){return R},Link_70866ced3c764cabc905e0cc64aec8f2:function(){return D},Link_7bc3349c93d81c21b27295bdf93a5dea:function(){return k},Link_8626239e5c65e53e80d132279eeed8c9:function(){return A},Link_8cb370db72214869140e0aff30da4f3a:function(){return P},Link_9b7fae8106e3b6ed3ec93822538d9c1b:function(){return B},Link_9fe289a1a2d73508822b49e2581b3725:function(){return L},Link_ae91d37a676aa9f7e3c31be15652196a:function(){return N},Link_c6d0fcb0ce050eb50122aad375a4be1c:function(){return z},Link_c7673c5f3d7901bf0393c2b2beced3d0:function(){return S},Link_c89085c03e2fb5b518302242494edeb8:function(){return _},Link_d353acf57234ded90077cceb6fa04aa9:function(){return T},Link_ed7f1b2e671b2f5190795c189eaebdab:function(){return E},Toaster_6e6ebf8d7ce589d59b7d382fb7576edf:function(){return v},default:function(){return H}});var i=n(2729),o=n(5944),a=n(7294),r=n(8039),c=n(9654),s=n(6509),d=n(917),l=n(4712),m=n(3954),h=n(6526),u=n(4298),g=n.n(u),p=n(1664),f=n.n(p),b=n(5152),w=n.n(b),x=n(9008),F=n.n(x);function C(){let e=(0,i._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return C=function(){return e},e}let y=w()(()=>n.e(4).then(n.t.bind(n,2004,23)),{loadableGenerated:{webpack:()=>[2004]},ssr:!1});function Z(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://youtube.com/@tiagoart6153?si=FyQVQO_TVELSJZZU",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"Youtube",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/youtube.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"Youtube"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:"Clases y tutoriales."})]})]})})})})}function k(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/mueble_cocina_electrodomesticos.JPG",passHref:!0,children:(0,o.tZ)("img",{css:{height:"100%",objectFit:"cover",width:"auto"},src:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/mueble_cocina_electrodomesticos_copy.JPG"})})})}function v(){let{resolvedColorMode:e}=(0,a.useContext)(r.ColorModeContext);c.refs.__toast=l.Am;let[t,n]=(0,a.useContext)(r.EventLoopContext),i={description:"Check if server is reachable at "+(0,c.getBackendURL)(m.Ks).href,closeButton:!0,duration:12e4,id:"websocket-error"},[s,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{n.length>=2?s||l.Am.error("Cannot connect to server: ".concat(n.length>0?n[n.length-1].message:"","."),{...i,onDismiss:()=>d(!0)}):(l.Am.dismiss("websocket-error"),d(!1))},[n]),(0,o.tZ)(l.x7,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}function _(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/mueble_armario.JPG",passHref:!0,children:(0,o.tZ)("img",{css:{height:"100%",objectFit:"cover",width:"auto"},src:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/mueble_armario%20copy.JPG"})})})}function B(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://maps.app.goo.gl/CieZ27tyF9YH337P8",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"Ibarra",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/location.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"Ibarra"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:"Av. beltran frente al campamento Panavial  San Antonio"})]})]})})})})}function S(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://www.instagram.com/tiago.art.official?igsh=MTVyNnM0enJzdHJ5Ng==",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"Instagram",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/instagram.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"Instagram"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:"Dise\xf1o y Arte"})]})]})})})})}let j=(0,d.keyframes)(C());function T(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://www.tiktok.com/@jona_egas22?_t=ZM-8tVeTI9hnvx&_r=1",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"Tik-Tok",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/linkedin.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"Tik-Tok"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:"Videos cortos y divertidos."})]})]})})})})}function D(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},fontSize:"1em"},target:"_blank",children:(0,o.tZ)(f(),{href:"",passHref:!0,children:(0,o.BX)(h.Box,{css:{paddingTop:"1em",color:"#F5F5F5",size:"4"},children:["2020-2025 ",(0,o.tZ)(h.Text,{as:"span",css:{color:"#F5F5F5"},size:"4",children:"Dise\xf1o con excelencia"})," Santiago Desing."]})})})}function z(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://maps.app.goo.gl/CieZ27tyF9YH337P8",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"Guayaquil",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/location.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"Guayaquil"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:"la direccion que quieras poner"})]})]})})})})}function P(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"WhatsApp",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/whatsapp.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"WhatsApp"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:"respuesta r\xe1pida y de preferencia"})]})]})})})})}function L(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/mueble_sala_vertical.JPG",passHref:!0,children:(0,o.tZ)("img",{css:{height:"100%",objectFit:"cover",width:"auto"},src:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/mueble_sala_vertical%20copy.JPG"})})})}function N(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,o.tZ)(f(),{href:"",passHref:!0,children:(0,o.tZ)(h.Flex,{align:"start",className:"rx-Stack",css:{color:"#F5F5F5"},direction:"row",gap:"3",children:(0,o.tZ)(h.Text,{as:"p",css:{fontSize:"1em",marginTop:"0px !important"},children:"Innovaci\xf3n en Dise\xf1o: Creando Historias para ti."})})})})}function X(){let[e,t]=(0,a.useContext)(r.EventLoopContext);return(0,o.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: "+(t.length>0?t[t.length-1].message:""),children:(0,o.tZ)(I,{})})}function W(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"mailto:",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"Email",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/email.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"Email"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:""})]})]})})})})}function A(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/imagenes%20completas%20full%20definicion/cafetera_vertical_cerrado.JPG",passHref:!0,children:(0,o.tZ)("img",{css:{height:"100%",objectFit:"cover",width:"auto"},src:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/cafetera_vertical_cerrado%20copy.JPG"})})})}function E(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"100%"},"@media screen and (min-width: 48em)":{width:"48%"}},target:"_blank",children:(0,o.tZ)(f(),{href:"https://www.facebook.com/share/15dsASSVeV/",passHref:!0,children:(0,o.tZ)(h.Box,{css:{"@media screen and (min-width: 0)":{height:"100%"},"@media screen and (min-width: 30em)":{height:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#15251d",whiteSpace:"normal",textAlign:"center",cursor:"pointer",border:"0px solid None","&:hover":{backgroundColor:"#30833b"}},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)("img",{alt:"Facebook",css:{width:"1.5em",height:"1.5em",margin:"0.8em"},src:"/icons/facebook.svg"}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{alignItems:"start",paddingTop:"0.5em",paddingBottom:"0.5em",paddingRight:"0.5em"},direction:"column",gap:"1",children:[(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",color:"#F1F2F4"},size:"5",children:"Facebook"}),(0,o.tZ)(h.Text,{as:"p",css:{fontWeight:"300",color:"#F5F5F5"},size:"3",children:"Clases de dibujo y mas."})]})]})})})})}function R(){return(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},align:"center",justify:"center"},target:"_blank",children:(0,o.tZ)(f(),{href:"https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_santiago.jpg",passHref:!0,children:(0,o.tZ)("img",{align:"center",css:{"@media screen and (min-width: 0px)":{height:"100%"},"@media screen and (min-width: 48em)":{height:"60%"},"@media screen and (min-width: 80em)":{height:"40%"},justify:"center"},src:"https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_preview.jpg"})})})}function I(){let[e,t]=(0,a.useContext)(r.EventLoopContext);return(0,o.tZ)(a.Fragment,{children:(0,c.isTrue)(t.length>0)?(0,o.tZ)(a.Fragment,{children:(0,o.tZ)(s.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:j+" 1s infinite"},size:32})}):(0,o.tZ)(a.Fragment,{})})}function H(){return(0,o.BX)(a.Fragment,{children:[(0,o.BX)(a.Fragment,{children:[(0,o.tZ)(X,{}),(0,o.tZ)(v,{})]}),(0,o.BX)(h.Box,{children:[(0,o.tZ)(g(),{strategy:"afterInteractive",children:"document.documentElement.lang='es'"}),(0,o.BX)(h.Flex,{align:"center",css:{"@media screen and (min-width: 0)":{width:"100%"},"@media screen and (min-width: 30em)":{width:"auto"},position:"sticky",background:"#15251d",paddingInlineStart:"2em",paddingInlineEnd:"2em",paddingTop:"1em",paddingBottom:"1em",zIndex:"999",top:"0"},justify:"between",gap:"3",children:[(0,o.BX)(h.Flex,{css:{fontFamily:"Comfortaa","--default-font-family":"Comfortaa",fontWeight:"500",fontSize:"1.2em",color:"#F5F5F5","@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"row"}},gap:"4",children:[(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)(h.Link,{css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},href:"#",children:(0,o.tZ)(h.Button,{css:{"@media screen and (min-width: 0)":{height:"100%",width:"100%"},"@media screen and (min-width: 30em)":{height:"auto",width:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#0C151D",whiteSpace:"normal",textAlign:"start","--cursor-button":"pointer","&:hover":{backgroundColor:"#30833b"},href:"/"},children:(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Comfortaa","--default-font-family":"Comfortaa",fontWeight:"500",fontSize:"1.2em",color:"#F5F5F5"},children:"Inicio"})})}),(0,o.tZ)(h.Link,{css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},href:"#",children:(0,o.tZ)(h.Button,{css:{"@media screen and (min-width: 0)":{height:"100%",width:"100%"},"@media screen and (min-width: 30em)":{height:"auto",width:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#0C151D",whiteSpace:"normal",textAlign:"start","--cursor-button":"pointer","&:hover":{backgroundColor:"#30833b"},href:"/historia"},children:(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Comfortaa","--default-font-family":"Comfortaa",fontWeight:"500",fontSize:"1.2em",color:"#F5F5F5"},children:"Merchandising"})})})]}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:[(0,o.tZ)(h.Link,{css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},href:"#",children:(0,o.tZ)(h.Button,{css:{"@media screen and (min-width: 0)":{height:"100%",width:"100%"},"@media screen and (min-width: 30em)":{height:"auto",width:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#0C151D",whiteSpace:"normal",textAlign:"start","--cursor-button":"pointer","&:hover":{backgroundColor:"#30833b"},href:"/mision"},children:(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Comfortaa","--default-font-family":"Comfortaa",fontWeight:"500",fontSize:"1.2em",color:"#F5F5F5"},children:"Portafolio"})})}),(0,o.tZ)(h.Link,{css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},href:"#",children:(0,o.tZ)(h.Button,{css:{"@media screen and (min-width: 0)":{height:"100%",width:"100%"},"@media screen and (min-width: 30em)":{height:"auto",width:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#0C151D",whiteSpace:"normal",textAlign:"start","--cursor-button":"pointer","&:hover":{backgroundColor:"#30833b"},href:"/trabajos"},children:(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Comfortaa","--default-font-family":"Comfortaa",fontWeight:"500",fontSize:"1.2em",color:"#F5F5F5"},children:"Tattoos"})})})]}),(0,o.tZ)(h.Flex,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:(0,o.tZ)(h.Link,{css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"}},href:"#",children:(0,o.tZ)(h.Button,{css:{"@media screen and (min-width: 0)":{height:"100%",width:"100%"},"@media screen and (min-width: 30em)":{height:"auto",width:"auto"},padding:"0.5em",borderRadius:"1em",color:"#F1F2F4",backgroundColor:"#0C151D",whiteSpace:"normal",textAlign:"start","--cursor-button":"pointer","&:hover":{backgroundColor:"#30833b"},href:"/trabajos"},children:(0,o.tZ)(h.Text,{as:"p",css:{fontFamily:"Comfortaa","--default-font-family":"Comfortaa",fontWeight:"500",fontSize:"1.2em",color:"#F5F5F5"},children:"Muralismo"})})})})]}),(0,o.tZ)("img",{css:{width:"150px"},src:"/Tiago_logo.png"})]}),(0,o.tZ)(h.Flex,{css:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{maxWidth:"1200px",width:"100%",marginTop:"2em",marginBottom:"2em",padding:"2em"},direction:"column",gap:"3",children:[(0,o.tZ)(a.Fragment,{children:(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{"@media screen and (min-width: 0)":{width:"100%"}},direction:"column",gap:"6",children:[(0,o.tZ)(h.Flex,{align:"center",className:"rx-Stack",css:{"@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"row"},width:"100%"},direction:"row",justify:"center",gap:"9",children:(0,o.tZ)(h.Flex,{children:(0,o.tZ)(y,{controls:!0,height:"600px",url:"https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago/video/video_cuadorno_tigre.mp4",width:"auto"})})}),(0,o.tZ)(h.Flex,{align:"center",css:{width:"100%"},justify:"center",children:(0,o.tZ)(R,{})})]})}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{width:"100%"},direction:"column",gap:"3",children:[(0,o.tZ)(h.Heading,{css:{color:"#15251d",fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",width:"100%",paddingTop:"1em",fontSize:"2em"},children:"SOCIAL MEDIA"}),(0,o.BX)(h.Flex,{align:"center",css:{width:"100%","@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"column"},"@media screen and (min-width: 48em)":{flexDirection:"row"}},justify:"between",gap:"2",children:[(0,o.tZ)(E,{}),(0,o.tZ)(S,{})]}),(0,o.BX)(h.Flex,{align:"center",css:{width:"100%","@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"column"},"@media screen and (min-width: 48em)":{flexDirection:"row"}},justify:"between",gap:"2",children:[(0,o.tZ)(Z,{}),(0,o.tZ)(T,{})]}),(0,o.tZ)(h.Heading,{css:{color:"#15251d",fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",width:"100%",paddingTop:"1em",fontSize:"2em"},children:"MODELOS"}),(0,o.BX)(h.Flex,{align:"center",css:{width:"100%","@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"column"},"@media screen and (min-width: 48em)":{flexDirection:"row"}},justify:"between",gap:"4",children:[(0,o.tZ)(h.Text,{as:"p",css:{textDecoration:"underline",backgroundColor:"#f7f2eb",color:"#003366"},size:"7",children:"CONOCE NUESTROS MODELOS"}),(0,o.tZ)(h.Link,{asChild:!0,css:{color:"#C3C7CB",textDecoration:"none","&:hover":{color:"var(--accent-8)"},justify:"end"},children:(0,o.tZ)(f(),{href:"/trabajos",passHref:!0,children:(0,o.tZ)("img",{css:{width:"100%",href:"/trabajos"},src:"https://sxdosvvnlmtjzebydzyy.supabase.co/storage/v1/object/public/imagenes%20para%20el%20proyecto/fotos%20trabajos%20web/colgador_de_ropa_mami.jpeg"})})})]}),(0,o.tZ)(h.Heading,{css:{color:"#15251d",fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",width:"100%",paddingTop:"1em",fontSize:"2em"},children:"Crea lo que Siempre has So\xf1ado"}),(0,o.tZ)(h.Flex,{css:{width:"100%"},gap:"2",children:(0,o.BX)(h.Grid,{align:"center",css:{gap:"1rem","@media screen and (min-width: 0)":{gridTemplateColumns:"1fr"},"@media screen and (min-width: 30em)":{gridTemplateColumns:"repeat(2, 1fr)"}},justify:"end",children:[(0,o.tZ)(k,{}),(0,o.tZ)(_,{}),(0,o.tZ)(A,{}),(0,o.tZ)(L,{})]})}),(0,o.tZ)(h.Heading,{css:{color:"#15251d",fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",width:"100%",paddingTop:"1em",fontSize:"2em"},children:"Contacto"}),(0,o.BX)(h.Flex,{align:"center",className:"rx-Stack",css:{width:"100%"},direction:"column",justify:"center",gap:"3",children:[(0,o.tZ)(P,{}),(0,o.tZ)(W,{})]})]}),(0,o.BX)(h.Flex,{align:"start",className:"rx-Stack",css:{width:"100%",alignItems:"center"},direction:"column",gap:"4",children:[(0,o.tZ)(h.Heading,{css:{color:"#15251d",fontFamily:"Poppins","--default-font-family":"Poppins",fontWeight:"500",width:"100%",paddingTop:"1em",fontSize:"2em"},children:"Ubicaci\xf3n"}),(0,o.BX)(h.Flex,{align:"center",className:"rx-Stack",css:{"@media screen and (min-width: 0)":{flexDirection:"column"},"@media screen and (min-width: 30em)":{flexDirection:"row"},width:"100%"},direction:"column",justify:"center",gap:"3",children:[(0,o.tZ)(B,{}),(0,o.tZ)(z,{})]})]})]})}),(0,o.BX)(h.Flex,{align:"center",className:"rx-Stack",css:{width:"100%",marginBottom:"1em",paddingBottom:"1em",paddingInlineStart:"2em",paddingInlineEnd:"2em",background:"#15251d"},direction:"column",gap:"0",children:[(0,o.tZ)("img",{alt:"logotipo de la marca",css:{height:"4em",width:"4em"},src:"/logocrebla.png"}),(0,o.tZ)(D,{}),(0,o.tZ)(N,{})]})]}),(0,o.BX)(F(),{children:[(0,o.tZ)("title",{children:"Santiago Desing | Creatividad y Dise\xf1os"}),(0,o.tZ)("meta",{content:"los mejores dise\xf1os y todo con respecto al arte.",name:"description"}),(0,o.tZ)("meta",{content:"https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_preview.jpg",property:"og:image"}),(0,o.tZ)("meta",{content:"Santiago Desing | Creatividad y Dise\xf1os",name:"og:title"}),(0,o.tZ)("meta",{content:"los mejores dise\xf1os y todo con respecto al arte.",name:"og:description"}),(0,o.tZ)("meta",{content:"website",name:"og:type"}),(0,o.tZ)("meta",{content:"https://teuwziagxrmfiqifcitt.supabase.co/storage/v1/object/public/imagenes%20Santiago//tigre_preview.jpg",name:"og:image"}),(0,o.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,o.tZ)("meta",{content:"@Santiago",name:"twitter:site"})]})]})}},5152:function(e,t,n){e.exports=n(2602)},4298:function(e,t,n){e.exports=n(3381)}},function(e){e.O(0,[567,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);