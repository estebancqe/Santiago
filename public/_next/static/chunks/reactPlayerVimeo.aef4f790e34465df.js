(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{868:function(e,t,r){let s,o,a;var l=Object.create,i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,h=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of p(t))u.call(e,o)||o===r||i(e,o,{get:()=>t[o],enumerable:!(s=n(t,o))||s.enumerable});return e},d=(e,t,r)=>(c(e,"symbol"!=typeof t?t+"":t,r),r),f={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(f,{default:()=>k}),e.exports=y(i({},"__esModule",{value:!0}),f);var m=(a=null!=(s=r(7294))?l(h(s)):{},y(!o&&s&&s.__esModule?a:i(a,"default",{value:s,enumerable:!0}),s)),b=r(8045),P=r(1776);let g=e=>e.replace("/manage/videos","");class k extends m.Component{constructor(){super(...arguments),d(this,"callPlayer",b.callPlayer),d(this,"duration",null),d(this,"currentTime",null),d(this,"secondsLoaded",null),d(this,"mute",()=>{this.setMuted(!0)}),d(this,"unmute",()=>{this.setMuted(!1)}),d(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,b.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(t=>{if(!this.container)return;let{playerOptions:r,title:s}=this.props.config;this.player=new t.Player(this.container,{url:g(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...r}),this.player.ready().then(()=>{let e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",s&&(e.title=s)}).catch(this.props.onError),this.player.on("loaded",()=>{this.props.onReady(),this.refreshDuration()}),this.player.on("play",()=>{this.props.onPlay(),this.refreshDuration()}),this.player.on("pause",this.props.onPause),this.player.on("seeked",e=>this.props.onSeek(e.seconds)),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({seconds:e})=>{this.currentTime=e}),this.player.on("progress",({seconds:e})=>{this.secondsLoaded=e}),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",e=>this.props.onPlaybackRateChange(e.playbackRate))},this.props.onError)}refreshDuration(){this.player.getDuration().then(e=>{this.duration=e})}play(){let e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let{display:e}=this.props;return m.default.createElement("div",{key:this.props.url,ref:this.ref,style:{width:"100%",height:"100%",overflow:"hidden",display:e}})}}d(k,"displayName","Vimeo"),d(k,"canPlay",P.canPlay.vimeo),d(k,"forceLoad",!0)}}]);