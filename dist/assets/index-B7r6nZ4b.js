(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Ya="166",Ai={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,Fl=1,qu=2,Wa=1,Ku=2,Ln=3,ti=0,Ve=1,_n=2,$n=0,Qi=1,Bl=2,zl=3,kl=4,ju=5,ui=100,$u=101,Ju=102,Qu=103,tf=104,ef=200,nf=201,sf=202,of=203,Qr=204,ta=205,rf=206,af=207,lf=208,cf=209,hf=210,uf=211,ff=212,df=213,pf=214,mf=0,gf=1,_f=2,Zo=3,vf=4,xf=5,Sf=6,yf=7,fh=0,Mf=1,Ef=2,Jn=0,bf=1,wf=2,Tf=3,Af=4,Cf=5,Rf=6,Pf=7,dh=300,ns=301,is=302,ea=303,na=304,sr=306,ia=1e3,di=1001,sa=1002,Ge=1003,Lf=1004,oo=1005,hn=1006,xr=1007,pi=1008,On=1009,ph=1010,mh=1011,zs=1012,Za=1013,vi=1014,xn=1015,Ws=1016,qa=1017,Ka=1018,ss=1020,gh=35902,_h=1021,vh=1022,un=1023,xh=1024,Sh=1025,ts=1026,os=1027,ja=1028,$a=1029,yh=1030,Ja=1031,Qa=1033,zo=33776,ko=33777,Ho=33778,Xo=33779,oa=35840,ra=35841,aa=35842,la=35843,ca=36196,ha=37492,ua=37496,fa=37808,da=37809,pa=37810,ma=37811,ga=37812,_a=37813,va=37814,xa=37815,Sa=37816,ya=37817,Ma=37818,Ea=37819,ba=37820,wa=37821,Go=36492,Ta=36494,Aa=36495,Mh=36283,Ca=36284,Ra=36285,Pa=36286,Df=3200,If=3201,Eh=0,Of=1,qn="",ln="srgb",ni="srgb-linear",tl="display-p3",or="display-p3-linear",qo="linear",he="srgb",Ko="rec709",jo="p3",Ri=7680,Hl=519,Uf=512,Nf=513,Ff=514,bh=515,Bf=516,zf=517,kf=518,Hf=519,Xl=35044,Gl="300 es",In=2e3,$o=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vl=1234567;const Os=Math.PI/180,ks=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function el(i,t){return(i%t+t)%t}function Xf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gf(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function Vf(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function Yf(i,t=1){return t-Math.abs(el(i,t*2)-t)}function Wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kf(i,t){return i+Math.random()*(t-i)}function jf(i){return i*(.5-Math.random())}function $f(i){i!==void 0&&(Vl=i);let t=Vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(i){return i*Os}function Qf(i){return i*ks}function td(i){return(i&i-1)===0&&i!==0}function ed(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function id(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),f=r((t-n)/2),d=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kn={DEG2RAD:Os,RAD2DEG:ks,generateUUID:bi,clamp:Te,euclideanModulo:el,mapLinear:Xf,inverseLerp:Gf,lerp:Us,damp:Vf,pingpong:Yf,smoothstep:Wf,smootherstep:Zf,randInt:qf,randFloat:Kf,randFloatSpread:jf,seededRandom:$f,degToRad:Jf,radToDeg:Qf,isPowerOfTwo:td,ceilPowerOfTwo:ed,floorPowerOfTwo:nd,setQuaternionFromProperEuler:id,normalize:ze,denormalize:Ki};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,o,r,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],T=s[1],S=s[4],E=s[7],O=s[2],R=s[5],C=s[8];return o[0]=r*v+a*T+l*O,o[3]=r*m+a*S+l*R,o[6]=r*p+a*E+l*C,o[1]=c*v+h*T+u*O,o[4]=c*m+h*S+u*R,o[7]=c*p+h*E+u*C,o[2]=f*v+d*T+g*O,o[5]=f*m+d*S+g*R,o[8]=f*p+d*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,f=a*l-h*o,d=c*o-r*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new Vt;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=Jo("canvas");return i.style.display="block",i}const Yl={};function Th(i){i in Yl||(Yl[i]=!0,console.warn(i))}function od(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Wl=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zl=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[ni]:{transfer:qo,primaries:Ko,toReference:i=>i,fromReference:i=>i},[ln]:{transfer:he,primaries:Ko,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[or]:{transfer:qo,primaries:jo,toReference:i=>i.applyMatrix3(Zl),fromReference:i=>i.applyMatrix3(Wl)},[tl]:{transfer:he,primaries:jo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zl),fromReference:i=>i.applyMatrix3(Wl).convertLinearToSRGB()}},rd=new Set([ni,or]),ae={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!rd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ro[t].toReference,s=ro[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ro[i].primaries},getTransfer:function(i){return i===qn?qo:ro[i].transfer}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pi;class ad{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Jo("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=es(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ld=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Mr(s[r].image)):o.push(Mr(s[r]))}else o=Mr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ad.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;class Be extends Ei{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=di,s=di,o=hn,r=pi,a=un,l=On,c=Be.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=bi(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=dh;Be.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,E=(d+1)/2,O=(p+1)/2,R=(h+f)/4,C=(u+v)/4,D=(g+m)/4;return S>E&&S>O?S<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(S),s=R/n,o=C/n):E>O?E<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),n=R/s,o=D/s):O<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),n=C/o,s=D/o),this.set(n,s,o,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ah(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends hd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ch extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ud extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*v,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const O=Math.sqrt(S),R=Math.atan2(O,p*T);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}const E=a*T;if(l=l*m+f*E,c=c*m+d*E,h=h*m+g*E,u=u*m+v*E,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),f=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Er.copy(this).projectOnVector(t),this.sub(Er)}reflect(t){return this.sub(Er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new P,ql=new Si;class wi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,on):on.fromBufferAttribute(o,r),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),lo.subVectors(this.max,gs),Li.subVectors(t.a,gs),Di.subVectors(t.b,gs),Ii.subVectors(t.c,gs),kn.subVectors(Di,Li),Hn.subVectors(Ii,Di),si.subVectors(Li,Ii);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!br(e,Li,Di,Ii,lo)||(e=[1,0,0,0,1,0,0,0,1],!br(e,Li,Di,Ii,lo))?!1:(co.crossVectors(kn,Hn),e=[co.x,co.y,co.z],br(e,Li,Di,Ii,lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,ao=new wi,Li=new P,Di=new P,Ii=new P,kn=new P,Hn=new P,si=new P,gs=new P,lo=new P,co=new P,oi=new P;function br(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){oi.fromArray(i,o);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fd=new wi,_s=new P,wr=new P;class Zs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(wr)),this.expandByPoint(_s.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new P,Tr=new P,ho=new P,Xn=new P,Ar=new P,uo=new P,Cr=new P;class Rh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tr.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(Tr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ho),a=Xn.dot(this.direction),l=-Xn.dot(ho),c=Xn.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*l-a,f=r*a-l,g=o*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+r*f+2*a)+f*(r*u+f+2*l)+c}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tr).addScaledVector(ho,f),d}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,o){Ar.subVectors(e,t),uo.subVectors(n,t),Cr.crossVectors(Ar,uo);let r=this.direction.dot(Cr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Xn.subVectors(this.origin,t);const l=a*this.direction.dot(uo.crossVectors(Xn,uo));if(l<0)return null;const c=a*this.direction.dot(Ar.cross(Xn));if(c<0||l+c>r)return null;const h=-a*Xn.dot(Cr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,o,r,a,l,c,h,u,f,d,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,f,d,g,v,m)}set(t,e,n,s,o,r,a,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),o=1/Oi.setFromMatrixColumn(t,1).length(),r=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=v-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,d=r*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=r*l,d=r*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=r*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,pd)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Gn.crossVectors(n,qe),Gn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Gn.crossVectors(n,qe)),Gn.normalize(),fo.crossVectors(qe,Gn),s[0]=Gn.x,s[4]=fo.x,s[8]=qe.x,s[1]=Gn.y,s[5]=fo.y,s[9]=qe.y,s[2]=Gn.z,s[6]=fo.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],S=n[7],E=n[11],O=n[15],R=s[0],C=s[4],D=s[8],b=s[12],y=s[1],L=s[5],G=s[9],B=s[13],W=s[2],q=s[6],V=s[10],$=s[14],Z=s[3],mt=s[7],St=s[11],vt=s[15];return o[0]=r*R+a*y+l*W+c*Z,o[4]=r*C+a*L+l*q+c*mt,o[8]=r*D+a*G+l*V+c*St,o[12]=r*b+a*B+l*$+c*vt,o[1]=h*R+u*y+f*W+d*Z,o[5]=h*C+u*L+f*q+d*mt,o[9]=h*D+u*G+f*V+d*St,o[13]=h*b+u*B+f*$+d*vt,o[2]=g*R+v*y+m*W+p*Z,o[6]=g*C+v*L+m*q+p*mt,o[10]=g*D+v*G+m*V+p*St,o[14]=g*b+v*B+m*$+p*vt,o[3]=T*R+S*y+E*W+O*Z,o[7]=T*C+S*L+E*q+O*mt,o[11]=T*D+S*G+E*V+O*St,o[15]=T*b+S*B+E*$+O*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*a*f+n*c*f+s*a*d-n*l*d)+v*(+e*l*d-e*c*f+o*r*f-s*r*d+s*c*h-o*l*h)+m*(+e*c*u-e*a*d-o*r*u+n*r*d+o*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*r*u-n*r*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=u*m*c-v*f*c+v*l*d-a*m*d-u*l*p+a*f*p,S=g*f*c-h*m*c-g*l*d+r*m*d+h*l*p-r*f*p,E=h*v*c-g*u*c+g*a*d-r*v*d-h*a*p+r*u*p,O=g*u*l-h*v*l-g*a*f+r*v*f+h*a*m-r*u*m,R=e*T+n*S+s*E+o*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=T*C,t[1]=(v*f*o-u*m*o-v*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*o-v*l*o+v*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*o-a*f*o-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=S*C,t[5]=(h*m*o-g*f*o+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*C,t[7]=(r*f*o-h*l*o+h*s*c-e*f*c-r*s*d+e*l*d)*C,t[8]=E*C,t[9]=(g*u*o-h*v*o-g*n*d+e*v*d+h*n*p-e*u*p)*C,t[10]=(r*v*o-g*a*o+g*n*c-e*v*c-r*n*p+e*a*p)*C,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*d-e*a*d)*C,t[12]=O*C,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-r*v*s-g*n*l+e*v*l+r*n*m-e*a*m)*C,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,f=o*c,d=o*h,g=o*u,v=r*h,m=r*u,p=a*u,T=l*c,S=l*h,E=l*u,O=n.x,R=n.y,C=n.z;return s[0]=(1-(v+p))*O,s[1]=(d+E)*O,s[2]=(g-S)*O,s[3]=0,s[4]=(d-E)*R,s[5]=(1-(f+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+S)*C,s[9]=(m-T)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Oi.set(s[0],s[1],s[2]).length();const r=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/o,h=1/r,u=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=In){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===In)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===$o)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=In){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),f=(e+t)*c,d=(n+s)*h;let g,v;if(a===In)g=(r+o)*u,v=-2*u;else if(a===$o)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new P,rn=new le,dd=new P(0,0,0),pd=new P(1,1,1),Gn=new P,fo=new P,qe=new P,Kl=new le,jl=new Si;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let md=0;const $l=new P,Ui=new Si,Cn=new le,po=new P,vs=new P,gd=new P,_d=new Si,Jl=new P(1,0,0),Ql=new P(0,1,0),tc=new P(0,0,1),ec={type:"added"},vd={type:"removed"},Ni={type:"childadded",child:null},Rr={type:"childremoved",child:null};class De extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new P,e=new yn,n=new Si,s=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Vt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Jl,t)}rotateY(t){return this.rotateOnAxis(Ql,t)}rotateZ(t){return this.rotateOnAxis(tc,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jl,t)}translateY(t){return this.translateOnAxis(Ql,t)}translateZ(t){return this.translateOnAxis(tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(vs,po,this.up):Cn.lookAt(po,vs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ec),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ec),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new P(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new P,Rn=new P,Pr=new P,Pn=new P,Fi=new P,Bi=new P,nc=new P,Lr=new P,Dr=new P,Ir=new P;class vn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){an.subVectors(s,e),Rn.subVectors(n,e),Pr.subVectors(t,e);const r=an.dot(an),a=an.dot(Rn),l=an.dot(Pr),c=Rn.dot(Rn),h=Rn.dot(Pr),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(r*h-a*l)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Pn.x),l.addScaledVector(r,Pn.y),l.addScaledVector(a,Pn.z),l)}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Rn.subVectors(t,e),an.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Fi.subVectors(s,n),Bi.subVectors(o,n),Lr.subVectors(t,n);const l=Fi.dot(Lr),c=Bi.dot(Lr);if(l<=0&&c<=0)return e.copy(n);Dr.subVectors(t,s);const h=Fi.dot(Dr),u=Bi.dot(Dr);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Fi,r);Ir.subVectors(t,o);const d=Fi.dot(Ir),g=Bi.dot(Ir);if(g>=0&&d<=g)return e.copy(o);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Bi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return nc.subVectors(o,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(nc,a);const p=1/(m+v+f);return r=v*p,a=f*p,e.copy(n).addScaledVector(Fi,r).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=el(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Or(r,o,t+1/3),this.g=Or(r,o,t),this.b=Or(r,o,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ae.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Te(Fe.r*255,0,255))*65536+Math.round(Te(Fe.g*255,0,255))*256+Math.round(Te(Fe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,o=Fe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=ln){ae.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(mo);const n=Us(Vn.h,mo.h,e),s=Us(Vn.s,mo.s,e),o=Us(Vn.l,mo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new $t;$t.NAMES=Lh;let xd=0;class qs extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Qi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ta,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class rs extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new P,go=new et;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Th("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),o=ze(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class Dh extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ih extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sd=0;const nn=new le,Ur=new De,zi=new P,Ke=new wi,xs=new wi,Pe=new P;class Ye extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Ih:Dh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Vt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Ke.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ke.min,xs.min),Ke.expandByPoint(Pe),Pe.addVectors(Ke.max,xs.max),Ke.expandByPoint(Pe)):(Ke.expandByPoint(xs.min),Ke.expandByPoint(xs.max))}Ke.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Pe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(t,c),Pe.add(zi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,f=new et,d=new et,g=new et,v=new P,m=new P;function p(D,b,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(o,D),d.fromBufferAttribute(o,b),g.fromBufferAttribute(o,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[D].add(v),a[b].add(v),a[y].add(v),l[D].add(m),l[b].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,b=T.length;D<b;++D){const y=T[D],L=y.start,G=y.count;for(let B=L,W=L+G;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new P,E=new P,O=new P,R=new P;function C(D){O.fromBufferAttribute(s,D),R.copy(O);const b=a[D];S.copy(b),S.sub(O.multiplyScalar(O.dot(b))).normalize(),E.crossVectors(R,b);const L=E.dot(l[D])<0?-1:1;r.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,b=T.length;D<b;++D){const y=T[D],L=y.start,G=y.count;for(let B=L,W=L+G;B<W;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,o=new P,r=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ic=new le,ri=new Rh,_o=new Zs,sc=new P,ki=new P,Hi=new P,Xi=new P,Nr=new P,vo=new P,xo=new et,So=new et,yo=new et,oc=new P,rc=new P,ac=new P,Mo=new P,Eo=new P;class lt extends De{constructor(t=new Ye,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){vo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Nr.fromBufferAttribute(u,t),r?vo.addScaledVector(Nr,h):vo.addScaledVector(Nr.sub(e),h))}e.add(vo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(o),ri.copy(t.ray).recast(t.near),!(_o.containsPoint(ri.origin)===!1&&(ri.intersectSphere(_o,sc)===null||ri.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(ic.copy(o).invert(),ri.copy(t.ray).applyMatrix4(ic),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=r[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,O=S;E<O;E+=3){const R=a.getX(E),C=a.getX(E+1),D=a.getX(E+2);s=bo(this,p,t,n,c,h,u,R,C,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),E=a.getX(m+2);s=bo(this,r,t,n,c,h,u,T,S,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=r[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,O=S;E<O;E+=3){const R=E,C=E+1,D=E+2;s=bo(this,p,t,n,c,h,u,R,C,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=m,S=m+1,E=m+2;s=bo(this,r,t,n,c,h,u,T,S,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yd(i,t,e,n,s,o,r,a){let l;if(t.side===Ve?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ti,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Eo);return c<e.near||c>e.far?null:{distance:c,point:Eo.clone(),object:i}}function bo(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,ki),i.getVertexPosition(l,Hi),i.getVertexPosition(c,Xi);const h=yd(i,t,e,n,ki,Hi,Xi,Mo);if(h){s&&(xo.fromBufferAttribute(s,a),So.fromBufferAttribute(s,l),yo.fromBufferAttribute(s,c),h.uv=vn.getInterpolation(Mo,ki,Hi,Xi,xo,So,yo,new et)),o&&(xo.fromBufferAttribute(o,a),So.fromBufferAttribute(o,l),yo.fromBufferAttribute(o,c),h.uv1=vn.getInterpolation(Mo,ki,Hi,Xi,xo,So,yo,new et)),r&&(oc.fromBufferAttribute(r,a),rc.fromBufferAttribute(r,l),ac.fromBufferAttribute(r,c),h.normal=vn.getInterpolation(Mo,ki,Hi,Xi,oc,rc,ac,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};vn.getNormal(ki,Hi,Xi,u.normal),h.face=u}return h}class te extends Ye{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(v,m,p,T,S,E,O,R,C,D,b){const y=E/C,L=O/D,G=E/2,B=O/2,W=R/2,q=C+1,V=D+1;let $=0,Z=0;const mt=new P;for(let St=0;St<V;St++){const vt=St*L-B;for(let Xt=0;Xt<q;Xt++){const jt=Xt*y-G;mt[v]=jt*T,mt[m]=vt*S,mt[p]=W,c.push(mt.x,mt.y,mt.z),mt[v]=0,mt[m]=0,mt[p]=R>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Xt/C),u.push(1-St/D),$+=1}}for(let St=0;St<D;St++)for(let vt=0;vt<C;vt++){const Xt=f+vt+q*St,jt=f+vt+q*(St+1),K=f+(vt+1)+q*(St+1),st=f+(vt+1)+q*St;l.push(Xt,jt,st),l.push(jt,K,st),Z+=6}a.addGroup(d,Z,b),d+=Z,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function Md(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Ed={clone:as,merge:ke};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new P,lc=new et,cc=new et;class Qe extends Uh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Vi=1;class Td extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Gi,Vi,t,e);s.layers=this.layers,this.add(s);const o=new Qe(Gi,Vi,t,e);o.layers=this.layers,this.add(o);const r=new Qe(Gi,Vi,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Gi,Vi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Gi,Vi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Gi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nh extends Be{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ad extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new te(5,5,5),o=new ei({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:$n});o.uniforms.tEquirect.value=e;const r=new lt(s,o),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=hn),new Td(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Fr=new P,Cd=new P,Rd=new Vt;class Zn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fr.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(Fr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Zs,wo=new P;class nl{constructor(t=new Zn,e=new Zn,n=new Zn,s=new Zn,o=new Zn,r=new Zn){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],S=s[14],E=s[15];if(n[0].setComponents(l-o,f-c,m-d,E-p).normalize(),n[1].setComponents(l+o,f+c,m+d,E+p).normalize(),n[2].setComponents(l+r,f+h,m+g,E+T).normalize(),n[3].setComponents(l-r,f-h,m-g,E-T).normalize(),n[4].setComponents(l-a,f-u,m-v,E-S).normalize(),e===In)n[5].setComponents(l+a,f+u,m+v,E+S).normalize();else if(e===$o)n[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Pd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Ks extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const T=p*f-r;for(let S=0;S<c;S++){const E=S*u-o;g.push(E,-T,0),v.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,E=T+c*(p+1),O=T+1+c*(p+1),R=T+1+c*p;d.push(S,E,R),d.push(E,O,R)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,np=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,B0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Ld,alphahash_pars_fragment:Dd,alphamap_fragment:Id,alphamap_pars_fragment:Od,alphatest_fragment:Ud,alphatest_pars_fragment:Nd,aomap_fragment:Fd,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Xd,bsdfs:Gd,iridescence_fragment:Vd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Kd,color_fragment:jd,color_pars_fragment:$d,color_pars_vertex:Jd,color_vertex:Qd,common:tp,cube_uv_reflection_fragment:ep,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:op,emissivemap_pars_fragment:rp,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:fp,envmap_physical_pars_fragment:Ep,envmap_vertex:dp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:yp,lights_pars_begin:Mp,lights_toon_fragment:bp,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Pp,lights_fragment_maps:Lp,lights_fragment_end:Dp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Np,map_fragment:Fp,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:kp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:Gp,morphcolor_vertex:Vp,morphnormal_vertex:Yp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Zp,normal_fragment_begin:qp,normal_fragment_maps:Kp,normal_pars_fragment:jp,normal_pars_vertex:$p,normal_vertex:Jp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:s0,packing:o0,premultiplied_alpha_fragment:r0,project_vertex:a0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:_0,skinning_vertex:v0,skinnormal_vertex:x0,specularmap_fragment:S0,specularmap_pars_fragment:y0,tonemapping_fragment:M0,tonemapping_pars_fragment:E0,transmission_fragment:b0,transmission_pars_fragment:w0,uv_pars_fragment:T0,uv_pars_vertex:A0,uv_vertex:C0,worldpos_vertex:R0,background_vert:P0,background_frag:L0,backgroundCube_vert:D0,backgroundCube_frag:I0,cube_vert:O0,cube_frag:U0,depth_vert:N0,depth_frag:F0,distanceRGBA_vert:B0,distanceRGBA_frag:z0,equirect_vert:k0,equirect_frag:H0,linedashed_vert:X0,linedashed_frag:G0,meshbasic_vert:V0,meshbasic_frag:Y0,meshlambert_vert:W0,meshlambert_frag:Z0,meshmatcap_vert:q0,meshmatcap_frag:K0,meshnormal_vert:j0,meshnormal_frag:$0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:tm,meshphysical_frag:em,meshtoon_vert:nm,meshtoon_frag:im,points_vert:sm,points_frag:om,shadow_vert:rm,shadow_frag:am,sprite_vert:lm,sprite_frag:cm},dt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},mn={basic:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ke([dt.points,dt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ke([dt.common,dt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ke([dt.sprite,dt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ke([dt.common,dt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ke([dt.lights,dt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};mn.physical={uniforms:ke([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const To={r:0,b:0,g:0},li=new yn,hm=new le;function um(i,t,e,n,s,o,r){const a=new $t(0);let l=o===!0?0:1,c,h,u=null,f=0,d=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function v(T){let S=!1;const E=g(T);E===null?p(a,l):E&&E.isColor&&(p(E,1),S=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===sr)?(h===void 0&&(h=new lt(new te(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:as(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(S.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(li)),h.material.toneMapped=ae.getTransfer(E.colorSpace)!==he,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new lt(new Ks(2,2),new ei({name:"BackgroundMaterial",uniforms:as(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ae.getTransfer(E.colorSpace)!==he,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(To,Oh(i)),n.buffers.color.setClear(To.r,To.g,To.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:v,addToRenderList:m}}function fm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(y,L,G,B,W){let q=!1;const V=u(B,G,L);o!==V&&(o=V,c(o.object)),q=d(y,B,G,W),q&&g(y,B,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,E(y,L,G,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,G){const B=G.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let V=q[B];return V===void 0&&(V=f(l()),q[B]=V),V}function f(y){const L=[],G=[],B=[];for(let W=0;W<e;W++)L[W]=0,G[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,L,G,B){const W=o.attributes,q=L.attributes;let V=0;const $=G.getAttributes();for(const Z in $)if($[Z].location>=0){const St=W[Z];let vt=q[Z];if(vt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),St===void 0||St.attribute!==vt||vt&&St.data!==vt.data)return!0;V++}return o.attributesNum!==V||o.index!==B}function g(y,L,G,B){const W={},q=L.attributes;let V=0;const $=G.getAttributes();for(const Z in $)if($[Z].location>=0){let St=q[Z];St===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(St=y.instanceColor));const vt={};vt.attribute=St,St&&St.data&&(vt.data=St.data),W[Z]=vt,V++}o.attributes=W,o.attributesNum=V,o.index=B}function v(){const y=o.newAttributes;for(let L=0,G=y.length;L<G;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const G=o.newAttributes,B=o.enabledAttributes,W=o.attributeDivisors;G[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),W[y]!==L&&(i.vertexAttribDivisor(y,L),W[y]=L)}function T(){const y=o.newAttributes,L=o.enabledAttributes;for(let G=0,B=L.length;G<B;G++)L[G]!==y[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function S(y,L,G,B,W,q,V){V===!0?i.vertexAttribIPointer(y,L,G,W,q):i.vertexAttribPointer(y,L,G,B,W,q)}function E(y,L,G,B){v();const W=B.attributes,q=G.getAttributes(),V=L.defaultAttributeValues;for(const $ in q){const Z=q[$];if(Z.location>=0){let mt=W[$];if(mt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const St=mt.normalized,vt=mt.itemSize,Xt=t.get(mt);if(Xt===void 0)continue;const jt=Xt.buffer,K=Xt.type,st=Xt.bytesPerElement,Mt=K===i.INT||K===i.UNSIGNED_INT||mt.gpuType===Za;if(mt.isInterleavedBufferAttribute){const ht=mt.data,It=ht.stride,Ht=mt.offset;if(ht.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Z.locationSize;Dt++)p(Z.location+Dt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)m(Z.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Dt=0;Dt<Z.locationSize;Dt++)S(Z.location+Dt,vt/Z.locationSize,K,St,It*st,(Ht+vt/Z.locationSize*Dt)*st,Mt)}else{if(mt.isInstancedBufferAttribute){for(let ht=0;ht<Z.locationSize;ht++)p(Z.location+ht,mt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ht=0;ht<Z.locationSize;ht++)m(Z.location+ht);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let ht=0;ht<Z.locationSize;ht++)S(Z.location+ht,vt/Z.locationSize,K,St,vt*st,vt/Z.locationSize*ht*st,Mt)}}else if(V!==void 0){const St=V[$];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(Z.location,St);break;case 3:i.vertexAttrib3fv(Z.location,St);break;case 4:i.vertexAttrib4fv(Z.location,St);break;default:i.vertexAttrib1fv(Z.location,St)}}}}T()}function O(){D();for(const y in n){const L=n[y];for(const G in L){const B=L[G];for(const W in B)h(B[W].object),delete B[W];delete L[G]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const G in L){const B=L[G];for(const W in B)h(B[W].object),delete B[W];delete L[G]}delete n[y.id]}function C(y){for(const L in n){const G=n[L];if(G[y.id]===void 0)continue;const B=G[y.id];for(const W in B)h(B[W].object),delete B[W];delete G[y.id]}}function D(){b(),r=!0,o!==s&&(o=s,c(o.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function dm(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<f.length;v++)e.update(g,n,f[v])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==On&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:E,maxSamples:O}}function mm(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Zn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const T=o?0:n,S=T*4;let E=p.clippingState||null;l.value=E,E=h(g,f,S,d);for(let O=0;O!==S;++O)E[O]=e[O];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=d;S!==v;++S,E+=4)r.copy(u[S]).applyMatrix4(T,a),r.normal.toArray(m,E),m[E+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function gm(i){let t=new WeakMap;function e(r,a){return a===ea?r.mapping=ns:a===na&&(r.mapping=is),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ea||a===na)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ad(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Bh extends Uh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,hc=[.125,.215,.35,.446,.526,.582],fi=20,Br=new Bh,uc=new $t;let zr=null,kr=0,Hr=0,Xr=!1;const hi=(1+Math.sqrt(5))/2,Yi=1/hi,fc=[new P(-hi,Yi,0),new P(hi,Yi,0),new P(-Yi,0,hi),new P(Yi,0,hi),new P(0,hi,-Yi),new P(0,hi,Yi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){zr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zr,kr,Hr),this._renderer.xr.enabled=Xr,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ws,format:un,colorSpace:ni,depthBuffer:!1},s=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(o)),this._blurMaterial=vm(o,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uc),h.toneMapping=Jn,h.autoClear=!1;const d=new rs({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new lt(new te,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(uc),v=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Ao(s,T*S,p>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Ao(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=fc[(s-o-1)%fc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*fi-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):fi;m>fi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let T=0;for(let C=0;C<fi;++C){const D=C/v,b=Math.exp(-D*D/2);p.push(b),C===0?T+=b:C<m&&(T+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const E=this._sizeLods[s],O=3*E*(s>S-$i?s-S+$i:0),R=4*(this._cubeSize-E);Ao(e,O,R,3*E,2*E),l.setRenderTarget(e),l.render(u,Br)}}function _m(i){const t=[],e=[],n=[];let s=i;const o=i-$i+1+hc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-$i?l=hc[r-i+$i-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*d),S=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,D=R>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(b,v*g*R),S.set(f,m*g*R);const y=[R,R,R,R,R,R];E.set(y,p*g*R)}const O=new Ye;O.setAttribute("position",new fn(T,v)),O.setAttribute("uv",new fn(S,m)),O.setAttribute("faceIndex",new fn(E,p)),t.push(O),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){const n=new xi(i,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vm(i,t,e){const n=new Float32Array(fi),s=new P(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function mc(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function gc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ea||l===na,h=l===ns||l===is;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new dc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new dc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Sm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Th("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,t,e,n){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let S=0,E=T.length;S<E;S+=3){const O=T[S+0],R=T[S+1],C=T[S+2];f.push(O,R,R,C,C,O)}}else if(g!==void 0){const T=g.array;v=g.version;for(let S=0,E=T.length/3-1;S<E;S+=3){const O=S+0,R=S+1,C=S+2;f.push(O,R,R,C,C,O)}}else return;const m=new(wh(f)?Ih:Dh)(f,1);m.version=v;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Mm(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,f*r,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/r,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<v.length;T++)e.update(p,n,v[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Em(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,t,e){const n=new WeakMap,s=new ue;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let O=a.attributes.position.count*E,R=1;O>t.maxTextureSize&&(R=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const C=new Float32Array(O*R*4*u),D=new Ch(C,O,R,u);D.type=xn,D.needsUpdate=!0;const b=E*4;for(let L=0;L<u;L++){const G=p[L],B=T[L],W=S[L],q=O*R*4*L;for(let V=0;V<G.count;V++){const $=V*b;g===!0&&(s.fromBufferAttribute(G,V),C[q+$+0]=s.x,C[q+$+1]=s.y,C[q+$+2]=s.z,C[q+$+3]=0),v===!0&&(s.fromBufferAttribute(B,V),C[q+$+4]=s.x,C[q+$+5]=s.y,C[q+$+6]=s.z,C[q+$+7]=0),m===!0&&(s.fromBufferAttribute(W,V),C[q+$+8]=s.x,C[q+$+9]=s.y,C[q+$+10]=s.z,C[q+$+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new et(O,R)},n.set(a,f),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function wm(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class zh extends Be{constructor(t,e,n,s,o,r,a,l,c,h=ts){if(h!==ts&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=vi),n===void 0&&h===os&&(n=ss),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kh=new Be,_c=new zh(1,1),Hh=new Ch,Xh=new ud,Gh=new Nh,vc=[],xc=[],Sc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=vc[s];if(o===void 0&&(o=new Float32Array(s),vc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),Ce(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Ce(e,n)}}function Dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),Ce(e,n)}}function Im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=bh,o=_c):o=kh,e.setTexture2D(t||o,s)}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xh,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gh,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function Ym(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Cm;case 35666:return Rm;case 35674:return Pm;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return Om;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Bm;case 36295:return zm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Wm(i,t){i.uniform1fv(this.addr,t)}function Zm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function qm(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Km(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function jm(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $m(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jm(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function tg(i,t){i.uniform2iv(this.addr,t)}function eg(i,t){i.uniform3iv(this.addr,t)}function ng(i,t){i.uniform4iv(this.addr,t)}function ig(i,t){i.uniform1uiv(this.addr,t)}function sg(i,t){i.uniform2uiv(this.addr,t)}function og(i,t){i.uniform3uiv(this.addr,t)}function rg(i,t){i.uniform4uiv(this.addr,t)}function ag(i,t,e){const n=this.cache,s=t.length,o=rr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||kh,o[r])}function lg(i,t,e){const n=this.cache,s=t.length,o=rr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Xh,o[r])}function cg(i,t,e){const n=this.cache,s=t.length,o=rr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Gh,o[r])}function hg(i,t,e){const n=this.cache,s=t.length,o=rr(e,s);Ae(n,o)||(i.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Hh,o[r])}function ug(i){switch(i){case 5126:return Wm;case 35664:return Zm;case 35665:return qm;case 35666:return Km;case 35674:return jm;case 35675:return $m;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return og;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ug(e.type)}}class pg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function Ec(i,t){i.seq.push(t),i.map[t.id]=t}function mg(i,t,e){const n=i.name,s=n.length;for(Gr.lastIndex=0;;){const o=Gr.exec(n),r=Gr.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Ec(e,c===void 0?new fg(a,i,t):new dg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new pg(a),Ec(e,u)),e=u}}}class Vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);mg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gg=37297;let _g=0;function vg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function xg(i){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i);let n;switch(t===e?n="":t===jo&&e===Ko?n="LinearDisplayP3ToLinearSRGB":t===Ko&&e===jo&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case or:return[n,"LinearTransferOETF"];case ln:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+vg(i.getShaderSource(t),r)}else return s}function Sg(i,t){const e=xg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function yg(i,t){let e;switch(t){case bf:e="Linear";break;case wf:e="Reinhard";break;case Tf:e="OptimizedCineon";break;case Af:e="ACESFilmic";break;case Rf:e="AgX";break;case Pf:e="Neutral";break;case Cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function Eg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function bs(i){return i!==""}function Tc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(wg,Ag)}const Tg=new Map;function Ag(i,t){let e=Gt[t];if(e===void 0){const n=Tg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}const Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(i){return i.replace(Cg,Rg)}function Rg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Rc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===is&&(t="ENVMAP_MODE_REFRACTION"),t}function Ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fh:t="ENVMAP_BLENDING_MULTIPLY";break;case Mf:t="ENVMAP_BLENDING_MIX";break;case Ef:t="ENVMAP_BLENDING_ADD";break}return t}function Og(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Pg(e),c=Lg(e),h=Dg(e),u=Ig(e),f=Og(e),d=Mg(e),g=Eg(o),v=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(m=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Sg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),r=La(r),r=Tc(r,e),r=Ac(r,e),a=La(a),a=Tc(a,e),a=Ac(a,e),r=Cc(r),a=Cc(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+r,E=T+p+a,O=bc(s,s.VERTEX_SHADER,S),R=bc(s,s.FRAGMENT_SHADER,E);s.attachShader(v,O),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(O).trim(),W=s.getShaderInfoLog(R).trim();let q=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,O,R);else{const $=wc(s,O,"vertex"),Z=wc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+$+`
`+Z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||W==="")&&(V=!1);V&&(L.diagnostics={runnable:q,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(O),s.deleteShader(R),D=new Vo(s,v),b=bg(s,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,gg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=R,this}let Ng=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bg(t),e.set(t,n)),n}}class Bg{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}}function zg(i,t,e,n,s,o,r){const a=new Ph,l=new Fg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,G,B){const W=G.fog,q=B.geometry,V=b.isMeshStandardMaterial?G.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),Z=$&&$.mapping===sr?$.image.height:null,mt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=St!==void 0?St.length:0;let Xt=0;q.morphAttributes.position!==void 0&&(Xt=1),q.morphAttributes.normal!==void 0&&(Xt=2),q.morphAttributes.color!==void 0&&(Xt=3);let jt,K,st,Mt;if(mt){const Jt=mn[mt];jt=Jt.vertexShader,K=Jt.fragmentShader}else jt=b.vertexShader,K=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),Mt=l.getFragmentShaderID(b);const ht=i.getRenderTarget(),It=B.isInstancedMesh===!0,Ht=B.isBatchedMesh===!0,Dt=!!b.map,qt=!!b.matcap,w=!!$,rt=!!b.aoMap,nt=!!b.lightMap,ut=!!b.bumpMap,j=!!b.normalMap,Pt=!!b.displacementMap,ft=!!b.emissiveMap,yt=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,k=b.clearcoat>0,tt=b.dispersion>0,Q=b.iridescence>0,J=b.sheen>0,At=b.transmission>0,ct=x&&!!b.anisotropyMap,_t=k&&!!b.clearcoatMap,zt=k&&!!b.clearcoatNormalMap,ot=k&&!!b.clearcoatRoughnessMap,gt=Q&&!!b.iridescenceMap,Zt=Q&&!!b.iridescenceThicknessMap,Ot=J&&!!b.sheenColorMap,bt=J&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,kt=!!b.specularColorMap,de=!!b.specularIntensityMap,_=At&&!!b.transmissionMap,F=At&&!!b.thicknessMap,z=!!b.gradientMap,Y=!!b.alphaMap,it=b.alphaTest>0,Ct=!!b.alphaHash,Ft=!!b.extensions;let xe=Jn;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(xe=i.toneMapping);const be={shaderID:mt,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:K,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ht,batchingColor:Ht&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ni,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:qt,envMap:w,envMapMode:w&&$.mapping,envMapCubeUVHeight:Z,aoMap:rt,lightMap:nt,bumpMap:ut,normalMap:j,displacementMap:f&&Pt,emissiveMap:ft,normalMapObjectSpace:j&&b.normalMapType===Of,normalMapTangentSpace:j&&b.normalMapType===Eh,metalnessMap:yt,roughnessMap:A,anisotropy:x,anisotropyMap:ct,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:zt,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:Zt,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:bt,specularMap:Nt,specularColorMap:kt,specularIntensityMap:de,transmission:At,transmissionMap:_,thicknessMap:F,gradientMap:z,opaque:b.transparent===!1&&b.blending===Qi&&b.alphaToCoverage===!1,alphaMap:Y,alphaTest:it,alphaHash:Ct,combine:b.combine,mapUv:Dt&&v(b.map.channel),aoMapUv:rt&&v(b.aoMap.channel),lightMapUv:nt&&v(b.lightMap.channel),bumpMapUv:ut&&v(b.bumpMap.channel),normalMapUv:j&&v(b.normalMap.channel),displacementMapUv:Pt&&v(b.displacementMap.channel),emissiveMapUv:ft&&v(b.emissiveMap.channel),metalnessMapUv:yt&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:ct&&v(b.anisotropyMap.channel),clearcoatMapUv:_t&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:zt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(b.sheenRoughnessMap.channel),specularMapUv:Nt&&v(b.specularMap.channel),specularColorMapUv:kt&&v(b.specularColorMap.channel),specularIntensityMapUv:de&&v(b.specularIntensityMap.channel),transmissionMapUv:_&&v(b.transmissionMap.channel),thicknessMapUv:F&&v(b.thicknessMap.channel),alphaMapUv:Y&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Dt||Y),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Xt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&ae.getTransfer(b.map.colorSpace)===he,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===_n,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ft&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&b.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function T(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),b.push(a.mask)}function E(b){const y=g[b.type];let L;if(y){const G=mn[y];L=Ed.clone(G.uniforms)}else L=b.uniforms;return L}function O(b,y){let L;for(let G=0,B=h.length;G<B;G++){const W=h[G];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Ug(i,y,b,o),h.push(L)),L}function R(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:O,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:D}}function kg(){let i=new WeakMap;function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function e(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Hg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,g,v,m){const p=r(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=r(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Hg),n.length>1&&n.sort(f||Pc),s.length>1&&s.sort(f||Pc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Xg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Lc,i.set(n,[r])):s>=o.length?(r=new Lc,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new $t};break;case"SpotLight":e={position:new P,direction:new P,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yg=0;function Wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zg(i){const t=new Gg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,o=new le,r=new le;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,T=0,S=0,E=0,O=0,R=0,C=0;c.sort(Wg);for(let b=0,y=c.length;b<y;b++){const L=c[b],G=L.color,B=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*B,u+=G.g*B,f+=G.b*B;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],B);C++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,T++}n.directional[d]=V,d++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(G).multiplyScalar(B),V.distance=W,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[v]=V;const $=L.shadow;if(L.map&&(n.spotLightMap[O]=L.map,O++,$.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[v]=$.matrix,L.castShadow){const Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=q,E++}v++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(G).multiplyScalar(B),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(B),V.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==S||D.numSpotShadows!==E||D.numSpotMaps!==O||D.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=S,D.numSpotShadows=E,D.numSpotMaps=O,D.numLightProbes=C,n.version=Yg++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(S.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Dc(i){const t=new Zg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function qg(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Dc(i),t.set(s,[a])):o>=r.length?(a=new Dc(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Kg extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jg extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qg(i,t,e){let n=new nl;const s=new et,o=new et,r=new ue,a=new Kg({depthPacking:If}),l=new jg,c={},h=e.maxTextureSize,u={[ti]:Ve,[Ve]:ti,[_n]:_n},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:$g,fragmentShader:Jg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let p=this.type;this.render=function(R,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending($n),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=p!==Ln&&this.type===Ln,W=p===Ln&&this.type!==Ln;for(let q=0,V=R.length;q<V;q++){const $=R[q],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const mt=Z.getFrameExtents();if(s.multiply(mt),o.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,Z.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,Z.mapSize.y=o.y)),Z.map===null||B===!0||W===!0){const vt=this.type!==Ln?{minFilter:Ge,magFilter:Ge}:{};Z.map!==null&&Z.map.dispose(),Z.map=new xi(s.x,s.y,vt),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const St=Z.getViewportCount();for(let vt=0;vt<St;vt++){const Xt=Z.getViewport(vt);r.set(o.x*Xt.x,o.y*Xt.y,o.x*Xt.z,o.y*Xt.w),G.viewport(r),Z.updateMatrices($,vt),n=Z.getFrustum(),E(C,D,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Ln&&T(Z,D),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,L)};function T(R,C){const D=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,D,d,v,null)}function S(R,C,D,b){let y=null;const L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=y.uuid,B=C.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let q=W[B];q===void 0&&(q=y.clone(),W[B]=q,C.addEventListener("dispose",O)),y=q}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Ln?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=i.properties.get(y);G.light=D}return y}function E(R,C,D,b,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Ln)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=t.update(R),W=R.material;if(Array.isArray(W)){const q=B.groups;for(let V=0,$=q.length;V<$;V++){const Z=q[V],mt=W[Z.materialIndex];if(mt&&mt.visible){const St=S(R,mt,b,y);R.onBeforeShadow(i,R,C,D,B,St,Z),i.renderBufferDirect(D,null,B,St,R,Z),R.onAfterShadow(i,R,C,D,B,St,Z)}}}else if(W.visible){const q=S(R,W,b,y);R.onBeforeShadow(i,R,C,D,B,q,null),i.renderBufferDirect(D,null,B,q,R,null),R.onAfterShadow(i,R,C,D,B,q,null)}}const G=R.children;for(let B=0,W=G.length;B<W;B++)E(G[B],C,D,b,y)}function O(R){R.target.removeEventListener("dispose",O);for(const D in c){const b=c[D],y=R.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function t_(i){function t(){let _=!1;const F=new ue;let z=null;const Y=new ue(0,0,0,0);return{setMask:function(it){z!==it&&!_&&(i.colorMask(it,it,it,it),z=it)},setLocked:function(it){_=it},setClear:function(it,Ct,Ft,xe,be){be===!0&&(it*=xe,Ct*=xe,Ft*=xe),F.set(it,Ct,Ft,xe),Y.equals(F)===!1&&(i.clearColor(it,Ct,Ft,xe),Y.copy(F))},reset:function(){_=!1,z=null,Y.set(-1,0,0,0)}}}function e(){let _=!1,F=null,z=null,Y=null;return{setTest:function(it){it?Mt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(it){F!==it&&!_&&(i.depthMask(it),F=it)},setFunc:function(it){if(z!==it){switch(it){case mf:i.depthFunc(i.NEVER);break;case gf:i.depthFunc(i.ALWAYS);break;case _f:i.depthFunc(i.LESS);break;case Zo:i.depthFunc(i.LEQUAL);break;case vf:i.depthFunc(i.EQUAL);break;case xf:i.depthFunc(i.GEQUAL);break;case Sf:i.depthFunc(i.GREATER);break;case yf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=it}},setLocked:function(it){_=it},setClear:function(it){Y!==it&&(i.clearDepth(it),Y=it)},reset:function(){_=!1,F=null,z=null,Y=null}}}function n(){let _=!1,F=null,z=null,Y=null,it=null,Ct=null,Ft=null,xe=null,be=null;return{setTest:function(Jt){_||(Jt?Mt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Jt){F!==Jt&&!_&&(i.stencilMask(Jt),F=Jt)},setFunc:function(Jt,we,Se){(z!==Jt||Y!==we||it!==Se)&&(i.stencilFunc(Jt,we,Se),z=Jt,Y=we,it=Se)},setOp:function(Jt,we,Se){(Ct!==Jt||Ft!==we||xe!==Se)&&(i.stencilOp(Jt,we,Se),Ct=Jt,Ft=we,xe=Se)},setLocked:function(Jt){_=Jt},setClear:function(Jt){be!==Jt&&(i.clearStencil(Jt),be=Jt)},reset:function(){_=!1,F=null,z=null,Y=null,it=null,Ct=null,Ft=null,xe=null,be=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,T=null,S=null,E=null,O=null,R=new $t(0,0,0),C=0,D=!1,b=null,y=null,L=null,G=null,B=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),q=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=V>=2);let Z=null,mt={};const St=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Xt=new ue().fromArray(St),jt=new ue().fromArray(vt);function K(_,F,z,Y){const it=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(_,Ct),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<z;Ft++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(F,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(F+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Ct}const st={};st[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Mt(i.DEPTH_TEST),o.setFunc(Zo),ut(!1),j(Fl),Mt(i.CULL_FACE),rt($n);function Mt(_){c[_]!==!0&&(i.enable(_),c[_]=!0)}function ht(_){c[_]!==!1&&(i.disable(_),c[_]=!1)}function It(_,F){return h[_]!==F?(i.bindFramebuffer(_,F),h[_]=F,_===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=F),_===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=F),!0):!1}function Ht(_,F){let z=f,Y=!1;if(_){z=u.get(F),z===void 0&&(z=[],u.set(F,z));const it=_.textures;if(z.length!==it.length||z[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Ft=it.length;Ct<Ft;Ct++)z[Ct]=i.COLOR_ATTACHMENT0+Ct;z.length=it.length,Y=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,Y=!0);Y&&i.drawBuffers(z)}function Dt(_){return d!==_?(i.useProgram(_),d=_,!0):!1}const qt={[ui]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};qt[Qu]=i.MIN,qt[tf]=i.MAX;const w={[ef]:i.ZERO,[nf]:i.ONE,[sf]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[rf]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[df]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(_,F,z,Y,it,Ct,Ft,xe,be,Jt){if(_===$n){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(Mt(i.BLEND),g=!0),_!==ju){if(_!==v||Jt!==D){if((m!==ui||S!==ui)&&(i.blendEquation(i.FUNC_ADD),m=ui,S=ui),Jt)switch(_){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}p=null,T=null,E=null,O=null,R.set(0,0,0),C=0,v=_,D=Jt}return}it=it||F,Ct=Ct||z,Ft=Ft||Y,(F!==m||it!==S)&&(i.blendEquationSeparate(qt[F],qt[it]),m=F,S=it),(z!==p||Y!==T||Ct!==E||Ft!==O)&&(i.blendFuncSeparate(w[z],w[Y],w[Ct],w[Ft]),p=z,T=Y,E=Ct,O=Ft),(xe.equals(R)===!1||be!==C)&&(i.blendColor(xe.r,xe.g,xe.b,be),R.copy(xe),C=be),v=_,D=!1}function nt(_,F){_.side===_n?ht(i.CULL_FACE):Mt(i.CULL_FACE);let z=_.side===Ve;F&&(z=!z),ut(z),_.blending===Qi&&_.transparent===!1?rt($n):rt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),o.setFunc(_.depthFunc),o.setTest(_.depthTest),o.setMask(_.depthWrite),s.setMask(_.colorWrite);const Y=_.stencilWrite;r.setTest(Y),Y&&(r.setMask(_.stencilWriteMask),r.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),r.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),ft(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(_){b!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),b=_)}function j(_){_!==Zu?(Mt(i.CULL_FACE),_!==y&&(_===Fl?i.cullFace(i.BACK):_===qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),y=_}function Pt(_){_!==L&&(q&&i.lineWidth(_),L=_)}function ft(_,F,z){_?(Mt(i.POLYGON_OFFSET_FILL),(G!==F||B!==z)&&(i.polygonOffset(F,z),G=F,B=z)):ht(i.POLYGON_OFFSET_FILL)}function yt(_){_?Mt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function A(_){_===void 0&&(_=i.TEXTURE0+W-1),Z!==_&&(i.activeTexture(_),Z=_)}function x(_,F,z){z===void 0&&(Z===null?z=i.TEXTURE0+W-1:z=Z);let Y=mt[z];Y===void 0&&(Y={type:void 0,texture:void 0},mt[z]=Y),(Y.type!==_||Y.texture!==F)&&(Z!==z&&(i.activeTexture(z),Z=z),i.bindTexture(_,F||st[_]),Y.type=_,Y.texture=F)}function k(){const _=mt[Z];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Zt(){try{i.texImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ot(_){Xt.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),Xt.copy(_))}function bt(_){jt.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),jt.copy(_))}function Nt(_,F){let z=l.get(F);z===void 0&&(z=new WeakMap,l.set(F,z));let Y=z.get(_);Y===void 0&&(Y=i.getUniformBlockIndex(F,_.name),z.set(_,Y))}function kt(_,F){const Y=l.get(F).get(_);a.get(F)!==Y&&(i.uniformBlockBinding(F,Y,_.__bindingPointIndex),a.set(F,Y))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Z=null,mt={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,T=null,S=null,E=null,O=null,R=new $t(0,0,0),C=0,D=!1,b=null,y=null,L=null,G=null,B=null,Xt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Mt,disable:ht,bindFramebuffer:It,drawBuffers:Ht,useProgram:Dt,setBlending:rt,setMaterial:nt,setFlipSided:ut,setCullFace:j,setLineWidth:Pt,setPolygonOffset:ft,setScissorTest:yt,activeTexture:A,bindTexture:x,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:Q,texImage2D:gt,texImage3D:Zt,updateUBOMapping:Nt,uniformBlockBinding:kt,texStorage2D:zt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:At,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Ot,viewport:bt,reset:de}}function Ic(i,t,e,n){const s=e_(n);switch(e){case _h:return i*t;case xh:return i*t;case Sh:return i*t*2;case ja:return i*t/s.components*s.byteLength;case $a:return i*t/s.components*s.byteLength;case yh:return i*t*2/s.components*s.byteLength;case Ja:return i*t*2/s.components*s.byteLength;case vh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case zo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:case la:return Math.max(i,16)*Math.max(t,8)/4;case oa:case aa:return Math.max(i,8)*Math.max(t,8)/2;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Go:case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mh:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e_(i){switch(i){case On:case ph:return{byteLength:1,components:1};case zs:case mh:case Ws:return{byteLength:2,components:1};case qa:case Ka:return{byteLength:2,components:4};case vi:case Za:case xn:return{byteLength:4,components:1};case gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return d?new OffscreenCanvas(A,x):Jo("canvas")}function v(A,x,k){let tt=1;const Q=yt(A);if((Q.width>k||Q.height>k)&&(tt=k/Math.max(Q.width,Q.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(tt*Q.width),At=Math.floor(tt*Q.height);u===void 0&&(u=g(J,At));const ct=x?g(J,At):u;return ct.width=J,ct.height=At,ct.getContext("2d").drawImage(A,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+At+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Ge&&A.minFilter!==hn}function p(A){i.generateMipmap(A)}function T(A,x,k,tt,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=x;if(x===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),x===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){const At=Q?qo:ae.getTransfer(tt);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=At===he?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(A,x){let k;return A?x===null||x===vi||x===ss?k=i.DEPTH24_STENCIL8:x===xn?k=i.DEPTH32F_STENCIL8:x===zs&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===ss?k=i.DEPTH_COMPONENT24:x===xn?k=i.DEPTH_COMPONENT32F:x===zs&&(k=i.DEPTH_COMPONENT16),k}function E(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function O(A){const x=A.target;x.removeEventListener("dispose",O),C(x),x.isVideoTexture&&h.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),b(x)}function C(A){const x=n.get(A);if(x.__webglInit===void 0)return;const k=A.source,tt=f.get(k);if(tt){const Q=tt[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(A),Object.keys(tt).length===0&&f.delete(k)}n.remove(A)}function D(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const k=A.source,tt=f.get(k);delete tt[x.__cacheKey],r.memory.textures--}function b(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let Q=0;Q<x.__webglFramebuffer[tt].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[tt][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[tt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=A.textures;for(let tt=0,Q=k.length;tt<Q;tt++){const J=n.get(k[tt]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(k[tt])}n.remove(A)}let y=0;function L(){y=0}function G(){const A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function B(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function W(A,x){const k=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{jt(k,A,x);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function q(A,x){const k=n.get(A);if(A.version>0&&k.__version!==A.version){jt(k,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function V(A,x){const k=n.get(A);if(A.version>0&&k.__version!==A.version){jt(k,A,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function $(A,x){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const Z={[ia]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},mt={[Ge]:i.NEAREST,[Lf]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},St={[Uf]:i.NEVER,[Hf]:i.ALWAYS,[Nf]:i.LESS,[bh]:i.LEQUAL,[Ff]:i.EQUAL,[kf]:i.GEQUAL,[Bf]:i.GREATER,[zf]:i.NOTEQUAL};function vt(A,x){if(x.type===xn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===xr||x.magFilter===oo||x.magFilter===pi||x.minFilter===hn||x.minFilter===xr||x.minFilter===oo||x.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ge||x.minFilter!==oo&&x.minFilter!==pi||x.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Xt(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",O));const tt=x.source;let Q=f.get(tt);Q===void 0&&(Q={},f.set(tt,Q));const J=B(x);if(J!==A.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,k=!0),Q[J].usedTimes++;const At=Q[A.__cacheKey];At!==void 0&&(Q[A.__cacheKey].usedTimes--,At.usedTimes===0&&D(x)),A.__cacheKey=J,A.__webglTexture=Q[J].texture}return k}function jt(A,x,k){let tt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(tt=i.TEXTURE_3D);const Q=Xt(A,x),J=x.source;e.bindTexture(tt,A.__webglTexture,i.TEXTURE0+k);const At=n.get(J);if(J.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const ct=ae.getPrimaries(ae.workingColorSpace),_t=x.colorSpace===qn?null:ae.getPrimaries(x.colorSpace),zt=x.colorSpace===qn||ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ot=v(x.image,!1,s.maxTextureSize);ot=ft(x,ot);const gt=o.convert(x.format,x.colorSpace),Zt=o.convert(x.type);let Ot=T(x.internalFormat,gt,Zt,x.colorSpace,x.isVideoTexture);vt(tt,x);let bt;const Nt=x.mipmaps,kt=x.isVideoTexture!==!0,de=At.__version===void 0||Q===!0,_=J.dataReady,F=E(x,ot);if(x.isDepthTexture)Ot=S(x.format===os,x.type),de&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,gt,Zt,null));else if(x.isDataTexture)if(Nt.length>0){kt&&de&&e.texStorage2D(i.TEXTURE_2D,F,Ot,Nt[0].width,Nt[0].height);for(let z=0,Y=Nt.length;z<Y;z++)bt=Nt[z],kt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,bt.width,bt.height,gt,Zt,bt.data):e.texImage2D(i.TEXTURE_2D,z,Ot,bt.width,bt.height,0,gt,Zt,bt.data);x.generateMipmaps=!1}else kt?(de&&e.texStorage2D(i.TEXTURE_2D,F,Ot,ot.width,ot.height),_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,gt,Zt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,gt,Zt,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){kt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,F,Ot,Nt[0].width,Nt[0].height,ot.depth);for(let z=0,Y=Nt.length;z<Y;z++)if(bt=Nt[z],x.format!==un)if(gt!==null)if(kt){if(_)if(x.layerUpdates.size>0){const it=Ic(bt.width,bt.height,x.format,x.type);for(const Ct of x.layerUpdates){const Ft=bt.data.subarray(Ct*it/bt.data.BYTES_PER_ELEMENT,(Ct+1)*it/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,Ct,bt.width,bt.height,1,gt,Ft,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,bt.width,bt.height,ot.depth,gt,bt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Ot,bt.width,bt.height,ot.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?_&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,bt.width,bt.height,ot.depth,gt,Zt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Ot,bt.width,bt.height,ot.depth,0,gt,Zt,bt.data)}else{kt&&de&&e.texStorage2D(i.TEXTURE_2D,F,Ot,Nt[0].width,Nt[0].height);for(let z=0,Y=Nt.length;z<Y;z++)bt=Nt[z],x.format!==un?gt!==null?kt?_&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,bt.width,bt.height,gt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,bt.width,bt.height,gt,Zt,bt.data):e.texImage2D(i.TEXTURE_2D,z,Ot,bt.width,bt.height,0,gt,Zt,bt.data)}else if(x.isDataArrayTexture)if(kt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,F,Ot,ot.width,ot.height,ot.depth),_)if(x.layerUpdates.size>0){const z=Ic(ot.width,ot.height,x.format,x.type);for(const Y of x.layerUpdates){const it=ot.data.subarray(Y*z/ot.data.BYTES_PER_ELEMENT,(Y+1)*z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ot.width,ot.height,1,gt,Zt,it)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,gt,Zt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,gt,Zt,ot.data);else if(x.isData3DTexture)kt?(de&&e.texStorage3D(i.TEXTURE_3D,F,Ot,ot.width,ot.height,ot.depth),_&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,gt,Zt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,gt,Zt,ot.data);else if(x.isFramebufferTexture){if(de)if(kt)e.texStorage2D(i.TEXTURE_2D,F,Ot,ot.width,ot.height);else{let z=ot.width,Y=ot.height;for(let it=0;it<F;it++)e.texImage2D(i.TEXTURE_2D,it,Ot,z,Y,0,gt,Zt,null),z>>=1,Y>>=1}}else if(Nt.length>0){if(kt&&de){const z=yt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,F,Ot,z.width,z.height)}for(let z=0,Y=Nt.length;z<Y;z++)bt=Nt[z],kt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,gt,Zt,bt):e.texImage2D(i.TEXTURE_2D,z,Ot,gt,Zt,bt);x.generateMipmaps=!1}else if(kt){if(de){const z=yt(ot);e.texStorage2D(i.TEXTURE_2D,F,Ot,z.width,z.height)}_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Zt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ot,gt,Zt,ot);m(x)&&p(tt),At.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function K(A,x,k){if(x.image.length!==6)return;const tt=Xt(A,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const J=n.get(Q);if(Q.version!==J.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);const At=ae.getPrimaries(ae.workingColorSpace),ct=x.colorSpace===qn?null:ae.getPrimaries(x.colorSpace),_t=x.colorSpace===qn||At===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const zt=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let Y=0;Y<6;Y++)!zt&&!ot?gt[Y]=v(x.image[Y],!0,s.maxCubemapSize):gt[Y]=ot?x.image[Y].image:x.image[Y],gt[Y]=ft(x,gt[Y]);const Zt=gt[0],Ot=o.convert(x.format,x.colorSpace),bt=o.convert(x.type),Nt=T(x.internalFormat,Ot,bt,x.colorSpace),kt=x.isVideoTexture!==!0,de=J.__version===void 0||tt===!0,_=Q.dataReady;let F=E(x,Zt);vt(i.TEXTURE_CUBE_MAP,x);let z;if(zt){kt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,F,Nt,Zt.width,Zt.height);for(let Y=0;Y<6;Y++){z=gt[Y].mipmaps;for(let it=0;it<z.length;it++){const Ct=z[it];x.format!==un?Ot!==null?kt?_&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,Ct.width,Ct.height,Ot,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,Ct.width,Ct.height,Ot,bt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Nt,Ct.width,Ct.height,0,Ot,bt,Ct.data)}}}else{if(z=x.mipmaps,kt&&de){z.length>0&&F++;const Y=yt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,F,Nt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ot){kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,gt[Y].width,gt[Y].height,Ot,bt,gt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Nt,gt[Y].width,gt[Y].height,0,Ot,bt,gt[Y].data);for(let it=0;it<z.length;it++){const Ft=z[it].image[Y].image;kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Ft.width,Ft.height,Ot,bt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Nt,Ft.width,Ft.height,0,Ot,bt,Ft.data)}}else{kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ot,bt,gt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Nt,Ot,bt,gt[Y]);for(let it=0;it<z.length;it++){const Ct=z[it];kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Ot,bt,Ct.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Nt,Ot,bt,Ct.image[Y])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),J.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function st(A,x,k,tt,Q,J){const At=o.convert(k.format,k.colorSpace),ct=o.convert(k.type),_t=T(k.internalFormat,At,ct,k.colorSpace);if(!n.get(x).__hasExternalTextures){const ot=Math.max(1,x.width>>J),gt=Math.max(1,x.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,_t,ot,gt,x.depth,0,At,ct,null):e.texImage2D(Q,J,_t,ot,gt,0,At,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),j(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Q,n.get(k).__webglTexture,0,ut(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,Q,n.get(k).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(A,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const tt=x.depthTexture,Q=tt&&tt.isDepthTexture?tt.type:null,J=S(x.stencilBuffer,Q),At=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ut(x);j(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,J,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{const tt=x.textures;for(let Q=0;Q<tt.length;Q++){const J=tt[Q],At=o.convert(J.format,J.colorSpace),ct=o.convert(J.type),_t=T(J.internalFormat,At,ct,J.colorSpace),zt=ut(x);k&&j(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,_t,x.width,x.height):j(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const tt=n.get(x.depthTexture).__webglTexture,Q=ut(x);if(x.depthTexture.format===ts)j(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===os)j(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function It(A){const x=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ht(x.__webglFramebuffer,A)}else if(k){x.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[tt]),x.__webglDepthbuffer[tt]=i.createRenderbuffer(),Mt(x.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Mt(x.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(A,x,k){const tt=n.get(A);x!==void 0&&st(tt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&It(A)}function Dt(A){const x=A.texture,k=n.get(A),tt=n.get(x);A.addEventListener("dispose",R);const Q=A.textures,J=A.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=x.version,r.memory.textures++),J){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let _t=0;_t<x.mipmaps.length;_t++)k.__webglFramebuffer[ct][_t]=i.createFramebuffer()}else k.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)k.__webglFramebuffer[ct]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(At)for(let ct=0,_t=Q.length;ct<_t;ct++){const zt=n.get(Q[ct]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&j(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const _t=Q[ct];k.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const zt=o.convert(_t.format,_t.colorSpace),ot=o.convert(_t.type),gt=T(_t.internalFormat,zt,ot,_t.colorSpace,A.isXRRenderTarget===!0),Zt=ut(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),vt(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)st(k.__webglFramebuffer[ct][_t],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else st(k.__webglFramebuffer[ct],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ct=0,_t=Q.length;ct<_t;ct++){const zt=Q[ct],ot=n.get(zt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),vt(i.TEXTURE_2D,zt),st(k.__webglFramebuffer,A,zt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),vt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)st(k.__webglFramebuffer[_t],A,x,i.COLOR_ATTACHMENT0,ct,_t);else st(k.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&p(ct),e.unbindTexture()}A.depthBuffer&&It(A)}function qt(A){const x=A.textures;for(let k=0,tt=x.length;k<tt;k++){const Q=x[k];if(m(Q)){const J=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(Q).__webglTexture;e.bindTexture(J,At),p(J),e.unbindTexture()}}}const w=[],rt=[];function nt(A){if(A.samples>0){if(j(A)===!1){const x=A.textures,k=A.width,tt=A.height;let Q=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),ct=x.length>1;if(ct)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const zt=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,k,tt,0,0,k,tt,Q,i.NEAREST),l===!0&&(w.length=0,rt.length=0,w.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(w.push(J),rt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const zt=n.get(x[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ut(A){return Math.min(s.maxSamples,A.samples)}function j(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pt(A){const x=r.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ft(A,x){const k=A.colorSpace,tt=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==ni&&k!==qn&&(ae.getTransfer(k)===he?(tt!==un||Q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Ht,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=st,this.useMultisampledRTT=j}function i_(i,t){function e(n,s=qn){let o;const r=ae.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Ws)return i.HALF_FLOAT;if(n===_h)return i.ALPHA;if(n===vh)return i.RGB;if(n===un)return i.RGBA;if(n===xh)return i.LUMINANCE;if(n===Sh)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===ja)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===yh)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===zo||n===ko||n===Ho||n===Xo)if(r===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oa||n===ra||n===aa||n===la)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===oa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ra)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===aa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ha||n===ua)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ca||n===ha)return r===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ua)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Sa||n===ya||n===Ma||n===Ea||n===ba||n===wa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===fa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ea)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Ta||n===Aa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Go)return r===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mh||n===Ca||n===Ra||n===Pa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Go)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class s_ extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o_={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const r_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:r_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c_ extends Ei{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new l_,m=e.getContextAttributes();let p=null,T=null;const S=[],E=[],O=new et;let R=null;const C=new Qe;C.layers.enable(1),C.viewport=new ue;const D=new Qe;D.layers.enable(2),D.viewport=new ue;const b=[C,D],y=new s_;y.layers.enable(1),y.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=S[K];return st===void 0&&(st=new Vr,S[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=S[K];return st===void 0&&(st=new Vr,S[K]=st),st.getGripSpace()},this.getHand=function(K){let st=S[K];return st===void 0&&(st=new Vr,S[K]=st),st.getHandSpace()};function B(K){const st=E.indexOf(K.inputSource);if(st===-1)return;const Mt=S[st];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||r),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let K=0;K<S.length;K++){const st=E[K];st!==null&&(E[K]=null,S[K].disconnect(st))}L=null,G=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,T=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new xi(d.framebufferWidth,d.framebufferHeight,{format:un,type:On,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Mt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?os:ts,Mt=m.stencil?ss:vi);const It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new xi(f.textureWidth,f.textureHeight,{format:un,type:On,depthTexture:new zh(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(K){for(let st=0;st<K.removed.length;st++){const Mt=K.removed[st],ht=E.indexOf(Mt);ht>=0&&(E[ht]=null,S[ht].disconnect(Mt))}for(let st=0;st<K.added.length;st++){const Mt=K.added[st];let ht=E.indexOf(Mt);if(ht===-1){for(let Ht=0;Ht<S.length;Ht++)if(Ht>=E.length){E.push(Mt),ht=Ht;break}else if(E[Ht]===null){E[Ht]=Mt,ht=Ht;break}if(ht===-1)break}const It=S[ht];It&&It.connect(Mt)}}const V=new P,$=new P;function Z(K,st,Mt){V.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(Mt.matrixWorld);const ht=V.distanceTo($),It=st.projectionMatrix.elements,Ht=Mt.projectionMatrix.elements,Dt=It[14]/(It[10]-1),qt=It[14]/(It[10]+1),w=(It[9]+1)/It[5],rt=(It[9]-1)/It[5],nt=(It[8]-1)/It[0],ut=(Ht[8]+1)/Ht[0],j=Dt*nt,Pt=Dt*ut,ft=ht/(-nt+ut),yt=ft*-nt;st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(yt),K.translateZ(ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const A=Dt+ft,x=qt+ft,k=j-yt,tt=Pt+(ht-yt),Q=w*qt/x*A,J=rt*qt/x*A;K.projectionMatrix.makePerspective(k,tt,Q,J,A,x),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function mt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;v.texture!==null&&(K.near=v.depthNear,K.far=v.depthFar),y.near=D.near=C.near=K.near,y.far=D.far=C.far=K.far,(L!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,G=y.far,C.near=L,C.far=G,D.near=L,D.far=G,C.updateProjectionMatrix(),D.updateProjectionMatrix(),K.updateProjectionMatrix());const st=K.parent,Mt=y.cameras;mt(y,st);for(let ht=0;ht<Mt.length;ht++)mt(Mt[ht],st);Mt.length===2?Z(y,C,D):y.projectionMatrix.copy(C.projectionMatrix),St(K,y,st)};function St(K,st,Mt){Mt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ks*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let vt=null;function Xt(K,st){if(h=st.getViewerPose(c||r),g=st,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let ht=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Ht=0;Ht<Mt.length;Ht++){const Dt=Mt[Ht];let qt=null;if(d!==null)qt=d.getViewport(Dt);else{const rt=u.getViewSubImage(f,Dt);qt=rt.viewport,Ht===0&&(t.setRenderTargetTextures(T,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(T))}let w=b[Ht];w===void 0&&(w=new Qe,w.layers.enable(Ht),w.viewport=new ue,b[Ht]=w),w.matrix.fromArray(Dt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Dt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(qt.x,qt.y,qt.width,qt.height),Ht===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(w)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Ht=u.getDepthInformation(Mt[0]);Ht&&Ht.isValid&&Ht.texture&&v.init(t,Ht,s.renderState)}}for(let Mt=0;Mt<S.length;Mt++){const ht=E[Mt],It=S[Mt];ht!==null&&It!==void 0&&It.update(ht,st,c||r)}vt&&vt(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const jt=new Fh;jt.setAnimationLoop(Xt),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}}const ci=new yn,h_=new le;function u_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,E=T.envMapRotation;S&&(m.envMap.value=S,ci.copy(E),ci.x*=-1,ci.y*=-1,ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(ci)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const E=S.program;n.uniformBlockBinding(T,E)}function c(T,S){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",m));const O=S.program;n.updateUBOMapping(T,O);const R=t.render.frame;o[T.id]!==R&&(f(T),o[T.id]=R)}function h(T){const S=u();T.__bindingPointIndex=S;const E=i.createBuffer(),O=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function u(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=s[T.id],E=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,C=E.length;R<C;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,y=D.length;b<y;b++){const L=D[b];if(d(L,R,b,O)===!0){const G=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<B.length;q++){const V=B[q],$=v(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+W,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,S,E,O){const R=T.value,C=S+"_"+E;if(O[C]===void 0)return typeof R=="number"||typeof R=="boolean"?O[C]=R:O[C]=R.clone(),!0;{const D=O[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return O[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const S=T.uniforms;let E=0;const O=16;for(let C=0,D=S.length;C<D;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,L=b.length;y<L;y++){const G=b[y],B=Array.isArray(G.value)?G.value:[G.value];for(let W=0,q=B.length;W<q;W++){const V=B[W],$=v(V),Z=E%O;Z!==0&&O-Z<$.boundary&&(E+=O-Z),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=$.storage}}}const R=E%O;return R>0&&(E+=O-R),T.__size=E,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const E=r.indexOf(S.__bindingPointIndex);r.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class d_{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Jn,this.toneMappingExposure=1;const S=this;let E=!1,O=0,R=0,C=null,D=-1,b=null;const y=new ue,L=new ue;let G=null;const B=new $t(0);let W=0,q=e.width,V=e.height,$=1,Z=null,mt=null;const St=new ue(0,0,q,V),vt=new ue(0,0,q,V);let Xt=!1;const jt=new nl;let K=!1,st=!1;const Mt=new le,ht=new P,It=new ue,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function qt(){return C===null?$:1}let w=n;function rt(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",it,!1),w===null){const I="webgl2";if(w=rt(I,M),w===null)throw rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let nt,ut,j,Pt,ft,yt,A,x,k,tt,Q,J,At,ct,_t,zt,ot,gt,Zt,Ot,bt,Nt,kt,de;function _(){nt=new Sm(w),nt.init(),Nt=new i_(w,nt),ut=new pm(w,nt,t,Nt),j=new t_(w),Pt=new Em(w),ft=new kg,yt=new n_(w,nt,j,ft,ut,Nt,Pt),A=new gm(S),x=new xm(S),k=new Pd(w),kt=new fm(w,k),tt=new ym(w,k,Pt,kt),Q=new wm(w,tt,k,Pt),Zt=new bm(w,ut,yt),zt=new mm(ft),J=new zg(S,A,x,nt,ut,kt,zt),At=new u_(S,ft),ct=new Xg,_t=new qg(nt),gt=new um(S,A,x,j,Q,f,l),ot=new Qg(S,Q,ut),de=new f_(w,Pt,ut,j),Ot=new dm(w,nt,Pt),bt=new Mm(w,nt,Pt),Pt.programs=J.programs,S.capabilities=ut,S.extensions=nt,S.properties=ft,S.renderLists=ct,S.shadowMap=ot,S.state=j,S.info=Pt}_();const F=new c_(S,w);this.xr=F,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(q,V,!1))},this.getSize=function(M){return M.set(q,V)},this.setSize=function(M,I,H=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,V=I,e.width=Math.floor(M*$),e.height=Math.floor(I*$),H===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(q*$,V*$).floor()},this.setDrawingBufferSize=function(M,I,H){q=M,V=I,$=H,e.width=Math.floor(M*H),e.height=Math.floor(I*H),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,I,H,X){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,I,H,X),j.viewport(y.copy(St).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,I,H,X){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,I,H,X),j.scissor(L.copy(vt).multiplyScalar($).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(M){j.setScissorTest(Xt=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){mt=M},this.getClearColor=function(M){return M.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(M=!0,I=!0,H=!0){let X=0;if(M){let U=!1;if(C!==null){const at=C.texture.format;U=at===Qa||at===Ja||at===$a}if(U){const at=C.texture.type,xt=at===On||at===vi||at===zs||at===ss||at===qa||at===Ka,wt=gt.getClearColor(),Tt=gt.getClearAlpha(),Ut=wt.r,Bt=wt.g,Lt=wt.b;xt?(d[0]=Ut,d[1]=Bt,d[2]=Lt,d[3]=Tt,w.clearBufferuiv(w.COLOR,0,d)):(g[0]=Ut,g[1]=Bt,g[2]=Lt,g[3]=Tt,w.clearBufferiv(w.COLOR,0,g))}else X|=w.COLOR_BUFFER_BIT}I&&(X|=w.DEPTH_BUFFER_BIT),H&&(X|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ct.dispose(),_t.dispose(),ft.dispose(),A.dispose(),x.dispose(),Q.dispose(),kt.dispose(),de.dispose(),J.dispose(),F.dispose(),F.removeEventListener("sessionstart",Se),F.removeEventListener("sessionend",Bn),Ie.stop()};function z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Pt.autoReset,I=ot.enabled,H=ot.autoUpdate,X=ot.needsUpdate,U=ot.type;_(),Pt.autoReset=M,ot.enabled=I,ot.autoUpdate=H,ot.needsUpdate=X,ot.type=U}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ct(M){const I=M.target;I.removeEventListener("dispose",Ct),Ft(I)}function Ft(M){xe(M),ft.remove(M)}function xe(M){const I=ft.get(M).programs;I!==void 0&&(I.forEach(function(H){J.releaseProgram(H)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,H,X,U,at){I===null&&(I=Ht);const xt=U.isMesh&&U.matrixWorld.determinant()<0,wt=Gu(M,I,H,X,U);j.setMaterial(X,xt);let Tt=H.index,Ut=1;if(X.wireframe===!0){if(Tt=tt.getWireframeAttribute(H),Tt===void 0)return;Ut=2}const Bt=H.drawRange,Lt=H.attributes.position;let se=Bt.start*Ut,ge=(Bt.start+Bt.count)*Ut;at!==null&&(se=Math.max(se,at.start*Ut),ge=Math.min(ge,(at.start+at.count)*Ut)),Tt!==null?(se=Math.max(se,0),ge=Math.min(ge,Tt.count)):Lt!=null&&(se=Math.max(se,0),ge=Math.min(ge,Lt.count));const _e=ge-se;if(_e<0||_e===1/0)return;kt.setup(U,X,wt,H,Tt);let We,oe=Ot;if(Tt!==null&&(We=k.get(Tt),oe=bt,oe.setIndex(We)),U.isMesh)X.wireframe===!0?(j.setLineWidth(X.wireframeLinewidth*qt()),oe.setMode(w.LINES)):oe.setMode(w.TRIANGLES);else if(U.isLine){let Rt=X.linewidth;Rt===void 0&&(Rt=1),j.setLineWidth(Rt*qt()),U.isLineSegments?oe.setMode(w.LINES):U.isLineLoop?oe.setMode(w.LINE_LOOP):oe.setMode(w.LINE_STRIP)}else U.isPoints?oe.setMode(w.POINTS):U.isSprite&&oe.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)oe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))oe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Rt=U._multiDrawStarts,Oe=U._multiDrawCounts,re=U._multiDrawCount,sn=Tt?k.get(Tt).bytesPerElement:1,Ti=ft.get(X).currentProgram.getUniforms();for(let Ze=0;Ze<re;Ze++)Ti.setValue(w,"_gl_DrawID",Ze),oe.render(Rt[Ze]/sn,Oe[Ze])}else if(U.isInstancedMesh)oe.renderInstances(se,_e,U.count);else if(H.isInstancedBufferGeometry){const Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Oe=Math.min(H.instanceCount,Rt);oe.renderInstances(se,_e,Oe)}else oe.render(se,_e)};function be(M,I,H){M.transparent===!0&&M.side===_n&&M.forceSinglePass===!1?(M.side=Ve,M.needsUpdate=!0,so(M,I,H),M.side=ti,M.needsUpdate=!0,so(M,I,H),M.side=_n):so(M,I,H)}this.compile=function(M,I,H=null){H===null&&(H=M),m=_t.get(H),m.init(I),T.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),M!==H&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const X=new Set;return M.traverse(function(U){const at=U.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const wt=at[xt];be(wt,H,U),X.add(wt)}else be(at,H,U),X.add(at)}),T.pop(),m=null,X},this.compileAsync=function(M,I,H=null){const X=this.compile(M,I,H);return new Promise(U=>{function at(){if(X.forEach(function(xt){ft.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){U(M);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Jt=null;function we(M){Jt&&Jt(M)}function Se(){Ie.stop()}function Bn(){Ie.start()}const Ie=new Fh;Ie.setAnimationLoop(we),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(M){Jt=M,F.setAnimationLoop(M),M===null?Ie.stop():Ie.start()},F.addEventListener("sessionstart",Se),F.addEventListener("sessionend",Bn),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(I),I=F.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,C),m=_t.get(M,T.length),m.init(I),T.push(m),Mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),jt.setFromProjectionMatrix(Mt),st=this.localClippingEnabled,K=zt.init(this.clippingPlanes,st),v=ct.get(M,p.length),v.init(),p.push(v),F.enabled===!0&&F.isPresenting===!0){const at=S.xr.getDepthSensingMesh();at!==null&&wn(at,I,-1/0,S.sortObjects)}wn(M,I,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(Z,mt),Dt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Dt&&gt.addToRenderList(v,M),this.info.render.frame++,K===!0&&zt.beginShadows();const H=m.state.shadowsArray;ot.render(H,M,I),K===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,U=v.transmissive;if(m.setupLights(),I.isArrayCamera){const at=I.cameras;if(U.length>0)for(let xt=0,wt=at.length;xt<wt;xt++){const Tt=at[xt];ms(X,U,M,Tt)}Dt&&gt.render(M);for(let xt=0,wt=at.length;xt<wt;xt++){const Tt=at[xt];ii(v,M,Tt,Tt.viewport)}}else U.length>0&&ms(X,U,M,I),Dt&&gt.render(M),ii(v,M,I);C!==null&&(yt.updateMultisampleRenderTarget(C),yt.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(S,M,I),kt.resetDefaultState(),D=-1,b=null,T.pop(),T.length>0?(m=T[T.length-1],K===!0&&zt.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function wn(M,I,H,X){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||jt.intersectsSprite(M)){X&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Mt);const xt=Q.update(M),wt=M.material;wt.visible&&v.push(M,xt,wt,H,It.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||jt.intersectsObject(M))){const xt=Q.update(M),wt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),It.copy(xt.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(Mt)),Array.isArray(wt)){const Tt=xt.groups;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Lt=Tt[Ut],se=wt[Lt.materialIndex];se&&se.visible&&v.push(M,xt,se,H,It.z,Lt)}}else wt.visible&&v.push(M,xt,wt,H,It.z,null)}}const at=M.children;for(let xt=0,wt=at.length;xt<wt;xt++)wn(at[xt],I,H,X)}function ii(M,I,H,X){const U=M.opaque,at=M.transmissive,xt=M.transparent;m.setupLightsView(H),K===!0&&zt.setGlobalState(S.clippingPlanes,H),X&&j.viewport(y.copy(X)),U.length>0&&io(U,I,H),at.length>0&&io(at,I,H),xt.length>0&&io(xt,I,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ms(M,I,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new xi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ws:On,minFilter:pi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const at=m.state.transmissionRenderTarget[X.id],xt=X.viewport||y;at.setSize(xt.z,xt.w);const wt=S.getRenderTarget();S.setRenderTarget(at),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),Dt?gt.render(H):S.clear();const Tt=S.toneMapping;S.toneMapping=Jn;const Ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),K===!0&&zt.setGlobalState(S.clippingPlanes,X),io(M,H,X),yt.updateMultisampleRenderTarget(at),yt.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Lt=0,se=I.length;Lt<se;Lt++){const ge=I[Lt],_e=ge.object,We=ge.geometry,oe=ge.material,Rt=ge.group;if(oe.side===_n&&_e.layers.test(X.layers)){const Oe=oe.side;oe.side=Ve,oe.needsUpdate=!0,Il(_e,H,X,We,oe,Rt),oe.side=Oe,oe.needsUpdate=!0,Bt=!0}}Bt===!0&&(yt.updateMultisampleRenderTarget(at),yt.updateRenderTargetMipmap(at))}S.setRenderTarget(wt),S.setClearColor(B,W),Ut!==void 0&&(X.viewport=Ut),S.toneMapping=Tt}function io(M,I,H){const X=I.isScene===!0?I.overrideMaterial:null;for(let U=0,at=M.length;U<at;U++){const xt=M[U],wt=xt.object,Tt=xt.geometry,Ut=X===null?xt.material:X,Bt=xt.group;wt.layers.test(H.layers)&&Il(wt,I,H,Tt,Ut,Bt)}}function Il(M,I,H,X,U,at){M.onBeforeRender(S,I,H,X,U,at),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.transparent===!0&&U.side===_n&&U.forceSinglePass===!1?(U.side=Ve,U.needsUpdate=!0,S.renderBufferDirect(H,I,X,U,M,at),U.side=ti,U.needsUpdate=!0,S.renderBufferDirect(H,I,X,U,M,at),U.side=_n):S.renderBufferDirect(H,I,X,U,M,at),M.onAfterRender(S,I,H,X,U,at)}function so(M,I,H){I.isScene!==!0&&(I=Ht);const X=ft.get(M),U=m.state.lights,at=m.state.shadowsArray,xt=U.state.version,wt=J.getParameters(M,U.state,at,I,H),Tt=J.getProgramCacheKey(wt);let Ut=X.programs;X.environment=M.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(M.isMeshStandardMaterial?x:A).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Ct),Ut=new Map,X.programs=Ut);let Bt=Ut.get(Tt);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===xt)return Ul(M,wt),Bt}else wt.uniforms=J.getUniforms(M),M.onBeforeCompile(wt,S),Bt=J.acquireProgram(wt,Tt),Ut.set(Tt,Bt),X.uniforms=wt.uniforms;const Lt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=zt.uniform),Ul(M,wt),X.needsLights=Yu(M),X.lightsStateVersion=xt,X.needsLights&&(Lt.ambientLightColor.value=U.state.ambient,Lt.lightProbe.value=U.state.probe,Lt.directionalLights.value=U.state.directional,Lt.directionalLightShadows.value=U.state.directionalShadow,Lt.spotLights.value=U.state.spot,Lt.spotLightShadows.value=U.state.spotShadow,Lt.rectAreaLights.value=U.state.rectArea,Lt.ltc_1.value=U.state.rectAreaLTC1,Lt.ltc_2.value=U.state.rectAreaLTC2,Lt.pointLights.value=U.state.point,Lt.pointLightShadows.value=U.state.pointShadow,Lt.hemisphereLights.value=U.state.hemi,Lt.directionalShadowMap.value=U.state.directionalShadowMap,Lt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Lt.spotShadowMap.value=U.state.spotShadowMap,Lt.spotLightMatrix.value=U.state.spotLightMatrix,Lt.spotLightMap.value=U.state.spotLightMap,Lt.pointShadowMap.value=U.state.pointShadowMap,Lt.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function Ol(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Vo.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ul(M,I){const H=ft.get(M);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Gu(M,I,H,X,U){I.isScene!==!0&&(I=Ht),yt.resetTextureUnits();const at=I.fog,xt=X.isMeshStandardMaterial?I.environment:null,wt=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ni,Tt=(X.isMeshStandardMaterial?x:A).get(X.envMap||xt),Ut=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color;let _e=Jn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=S.toneMapping);const We=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=We!==void 0?We.length:0,Rt=ft.get(X),Oe=m.state.lights;if(K===!0&&(st===!0||M!==b)){const en=M===b&&X.id===D;zt.setState(X,M,en)}let re=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Oe.state.version||Rt.outputColorSpace!==wt||U.isBatchedMesh&&Rt.batching===!1||!U.isBatchedMesh&&Rt.batching===!0||U.isBatchedMesh&&Rt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Rt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Rt.instancing===!1||!U.isInstancedMesh&&Rt.instancing===!0||U.isSkinnedMesh&&Rt.skinning===!1||!U.isSkinnedMesh&&Rt.skinning===!0||U.isInstancedMesh&&Rt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Rt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Rt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Rt.instancingMorph===!1&&U.morphTexture!==null||Rt.envMap!==Tt||X.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==zt.numPlanes||Rt.numIntersection!==zt.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Bt||Rt.morphTargets!==Lt||Rt.morphNormals!==se||Rt.morphColors!==ge||Rt.toneMapping!==_e||Rt.morphTargetsCount!==oe)&&(re=!0):(re=!0,Rt.__version=X.version);let sn=Rt.currentProgram;re===!0&&(sn=so(X,I,U));let Ti=!1,Ze=!1,gr=!1;const ye=sn.getUniforms(),zn=Rt.uniforms;if(j.useProgram(sn.program)&&(Ti=!0,Ze=!0,gr=!0),X.id!==D&&(D=X.id,Ze=!0),Ti||b!==M){ye.setValue(w,"projectionMatrix",M.projectionMatrix),ye.setValue(w,"viewMatrix",M.matrixWorldInverse);const en=ye.map.cameraPosition;en!==void 0&&en.setValue(w,ht.setFromMatrixPosition(M.matrixWorld)),ut.logarithmicDepthBuffer&&ye.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ye.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ze=!0,gr=!0)}if(U.isSkinnedMesh){ye.setOptional(w,U,"bindMatrix"),ye.setOptional(w,U,"bindMatrixInverse");const en=U.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ye.setValue(w,"boneTexture",en.boneTexture,yt))}U.isBatchedMesh&&(ye.setOptional(w,U,"batchingTexture"),ye.setValue(w,"batchingTexture",U._matricesTexture,yt),ye.setOptional(w,U,"batchingIdTexture"),ye.setValue(w,"batchingIdTexture",U._indirectTexture,yt),ye.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&ye.setValue(w,"batchingColorTexture",U._colorsTexture,yt));const _r=H.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Zt.update(U,H,sn),(Ze||Rt.receiveShadow!==U.receiveShadow)&&(Rt.receiveShadow=U.receiveShadow,ye.setValue(w,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zn.envMap.value=Tt,zn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&I.environment!==null&&(zn.envMapIntensity.value=I.environmentIntensity),Ze&&(ye.setValue(w,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&Vu(zn,gr),at&&X.fog===!0&&At.refreshFogUniforms(zn,at),At.refreshMaterialUniforms(zn,X,$,V,m.state.transmissionRenderTarget[M.id]),Vo.upload(w,Ol(Rt),zn,yt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Vo.upload(w,Ol(Rt),zn,yt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ye.setValue(w,"center",U.center),ye.setValue(w,"modelViewMatrix",U.modelViewMatrix),ye.setValue(w,"normalMatrix",U.normalMatrix),ye.setValue(w,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const en=X.uniformsGroups;for(let vr=0,Wu=en.length;vr<Wu;vr++){const Nl=en[vr];de.update(Nl,sn),de.bind(Nl,sn)}}return sn}function Vu(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Yu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,H){ft.get(M.texture).__webglTexture=I,ft.get(M.depthTexture).__webglTexture=H;const X=ft.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const H=ft.get(M);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,H=0){C=M,O=I,R=H;let X=!0,U=null,at=!1,xt=!1;if(M){const Tt=ft.get(M);Tt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(w.FRAMEBUFFER,null),X=!1):Tt.__webglFramebuffer===void 0?yt.setupRenderTarget(M):Tt.__hasExternalTextures&&yt.rebindTextures(M,ft.get(M.texture).__webglTexture,ft.get(M.depthTexture).__webglTexture);const Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(xt=!0);const Bt=ft.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Bt[I])?U=Bt[I][H]:U=Bt[I],at=!0):M.samples>0&&yt.useMultisampledRTT(M)===!1?U=ft.get(M).__webglMultisampledFramebuffer:Array.isArray(Bt)?U=Bt[H]:U=Bt,y.copy(M.viewport),L.copy(M.scissor),G=M.scissorTest}else y.copy(St).multiplyScalar($).floor(),L.copy(vt).multiplyScalar($).floor(),G=Xt;if(j.bindFramebuffer(w.FRAMEBUFFER,U)&&X&&j.drawBuffers(M,U),j.viewport(y),j.scissor(L),j.setScissorTest(G),at){const Tt=ft.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,H)}else if(xt){const Tt=ft.get(M.texture),Ut=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,Ut)}D=-1},this.readRenderTargetPixels=function(M,I,H,X,U,at,xt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){j.bindFramebuffer(w.FRAMEBUFFER,wt);try{const Tt=M.texture,Ut=Tt.format,Bt=Tt.type;if(!ut.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-X&&H>=0&&H<=M.height-U&&w.readPixels(I,H,X,U,Nt.convert(Ut),Nt.convert(Bt),at)}finally{const Tt=C!==null?ft.get(C).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,I,H,X,U,at,xt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){j.bindFramebuffer(w.FRAMEBUFFER,wt);try{const Tt=M.texture,Ut=Tt.format,Bt=Tt.type;if(!ut.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-X&&H>=0&&H<=M.height-U){const Lt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.bufferData(w.PIXEL_PACK_BUFFER,at.byteLength,w.STREAM_READ),w.readPixels(I,H,X,U,Nt.convert(Ut),Nt.convert(Bt),0),w.flush();const se=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await od(w,se,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,at)}finally{w.deleteBuffer(Lt),w.deleteSync(se)}return at}}finally{const Tt=C!==null?ft.get(C).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(M,I=null,H=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const X=Math.pow(2,-H),U=Math.floor(M.image.width*X),at=Math.floor(M.image.height*X),xt=I!==null?I.x:0,wt=I!==null?I.y:0;yt.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,xt,wt,U,at),j.unbindTexture()},this.copyTextureToTexture=function(M,I,H=null,X=null,U=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,H=null);let at,xt,wt,Tt,Ut,Bt;H!==null?(at=H.max.x-H.min.x,xt=H.max.y-H.min.y,wt=H.min.x,Tt=H.min.y):(at=M.image.width,xt=M.image.height,wt=0,Tt=0),X!==null?(Ut=X.x,Bt=X.y):(Ut=0,Bt=0);const Lt=Nt.convert(I.format),se=Nt.convert(I.type);yt.setTexture2D(I,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const ge=w.getParameter(w.UNPACK_ROW_LENGTH),_e=w.getParameter(w.UNPACK_IMAGE_HEIGHT),We=w.getParameter(w.UNPACK_SKIP_PIXELS),oe=w.getParameter(w.UNPACK_SKIP_ROWS),Rt=w.getParameter(w.UNPACK_SKIP_IMAGES),Oe=M.isCompressedTexture?M.mipmaps[U]:M.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Oe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Oe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Tt),M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,U,Ut,Bt,at,xt,Lt,se,Oe.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,U,Ut,Bt,Oe.width,Oe.height,Lt,Oe.data):w.texSubImage2D(w.TEXTURE_2D,U,Ut,Bt,at,xt,Lt,se,Oe),w.pixelStorei(w.UNPACK_ROW_LENGTH,ge),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e),w.pixelStorei(w.UNPACK_SKIP_PIXELS,We),w.pixelStorei(w.UNPACK_SKIP_ROWS,oe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Rt),U===0&&I.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(M,I,H=null,X=null,U=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0);let at,xt,wt,Tt,Ut,Bt,Lt,se,ge;const _e=M.isCompressedTexture?M.mipmaps[U]:M.image;H!==null?(at=H.max.x-H.min.x,xt=H.max.y-H.min.y,wt=H.max.z-H.min.z,Tt=H.min.x,Ut=H.min.y,Bt=H.min.z):(at=_e.width,xt=_e.height,wt=_e.depth,Tt=0,Ut=0,Bt=0),X!==null?(Lt=X.x,se=X.y,ge=X.z):(Lt=0,se=0,ge=0);const We=Nt.convert(I.format),oe=Nt.convert(I.type);let Rt;if(I.isData3DTexture)yt.setTexture3D(I,0),Rt=w.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)yt.setTexture2DArray(I,0),Rt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const Oe=w.getParameter(w.UNPACK_ROW_LENGTH),re=w.getParameter(w.UNPACK_IMAGE_HEIGHT),sn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ti=w.getParameter(w.UNPACK_SKIP_ROWS),Ze=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Bt),M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Rt,U,Lt,se,ge,at,xt,wt,We,oe,_e.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,U,Lt,se,ge,at,xt,wt,We,_e.data):w.texSubImage3D(Rt,U,Lt,se,ge,at,xt,wt,We,oe,_e),w.pixelStorei(w.UNPACK_ROW_LENGTH,Oe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,re),w.pixelStorei(w.UNPACK_SKIP_PIXELS,sn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ti),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ze),U===0&&I.generateMipmaps&&w.generateMipmap(Rt),j.unbindTexture()},this.initRenderTarget=function(M){ft.get(M).__webglFramebuffer===void 0&&yt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?yt.setTextureCube(M,0):M.isData3DTexture?yt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?yt.setTexture2DArray(M,0):yt.setTexture2D(M,0),j.unbindTexture()},this.resetState=function(){O=0,R=0,C=null,j.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===tl?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===or?"display-p3":"srgb"}}class ar{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new ar(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class p_ extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class m_ extends Be{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ge,h=Ge,u,f){super(null,r,a,l,c,h,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc extends fn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new le,Uc=new le,Co=[],Nc=new wi,g_=new le,Ss=new lt,ys=new Zs;class __ extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,g_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Nc.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Nc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),ys.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Wi),Uc.multiplyMatrices(n,Wi),Ss.matrixWorld=Uc,Ss.raycast(t,Co);for(let r=0,a=Co.length;r<a;r++){const l=Co[r];l.instanceId=o,l.object=this,e.push(l)}Co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new m_(new Float32Array(s*this.count),s,this.count,ja,xn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class v_ extends Be{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],f=n[s+1]-h,d=(r-h)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new et:new P);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],o=[],r=[],a=new P,l=new le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}o[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Te(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sl extends Mn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class x_ extends sl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let f=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+u)+(l-a)/u;f*=h,d*=h,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ro=new P,Yr=new ol,Wr=new ol,Zr=new ol;class rl extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Ro.subVectors(s[0],s[1]).add(s[0]),c=Ro);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Ro.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Yr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Wr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Zr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Yr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Zr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Yr.calc(l),Wr.calc(l),Zr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fc(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function S_(i,t){const e=1-i;return e*e*t}function y_(i,t){return 2*(1-i)*i*t}function M_(i,t){return i*i*t}function Ns(i,t,e,n){return S_(i,t)+y_(i,e)+M_(i,n)}function E_(i,t){const e=1-i;return e*e*e*t}function b_(i,t){const e=1-i;return 3*e*e*i*t}function w_(i,t){return 3*(1-i)*i*i*t}function T_(i,t){return i*i*i*t}function Fs(i,t,e,n,s){return E_(i,t)+b_(i,e)+w_(i,n)+T_(i,s)}class Vh extends Mn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Fs(t,s.x,o.x,r.x,a.x),Fs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A_ extends Mn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Fs(t,s.x,o.x,r.x,a.x),Fs(t,s.y,o.y,r.y,a.y),Fs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yh extends Mn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C_ extends Mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wh extends Mn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ns(t,s.x,o.x,r.x),Ns(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Mn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ns(t,s.x,o.x,r.x),Ns(t,s.y,o.y,r.y),Ns(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Fc(a,l.x,c.x,h.x,u.x),Fc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var Qo=Object.freeze({__proto__:null,ArcCurve:x_,CatmullRomCurve3:rl,CubicBezierCurve:Vh,CubicBezierCurve3:A_,EllipseCurve:sl,LineCurve:Yh,LineCurve3:C_,QuadraticBezierCurve:Wh,QuadraticBezierCurve3:Zh,SplineCurve:qh});class R_ extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}}class Da extends R_{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yh(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Wh(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Vh(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new qh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new sl(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class lr extends Ye{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new P,f=new et,d=new P,g=new P,v=new P;let m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let T=0;T<=e;T++){const S=n+T*h*s,E=Math.sin(S),O=Math.cos(S);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*E,u.y=t[R].y,u.z=t[R].x*O,r.push(u.x,u.y,u.z),f.x=T/e,f.y=R/(t.length-1),a.push(f.x,f.y);const C=l[3*R+0]*E,D=l[3*R+1],b=l[3*R+0]*O;c.push(C,D,b)}}for(let T=0;T<e;T++)for(let S=0;S<t.length-1;S++){const E=S+T*t.length,O=E,R=E+t.length,C=E+t.length+1,D=E+1;o.push(O,R,D),o.push(C,D,R)}this.setIndex(o),this.setAttribute("position",new pe(r,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.points,t.segments,t.phiStart,t.phiLength)}}class al extends lr{constructor(t=1,e=1,n=4,s=8){const o=new Da;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new al(t.radius,t.length,t.capSegments,t.radialSegments)}}class Kt extends Ye{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;T(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function T(){const E=new P,O=new P;let R=0;const C=(e-t)/n;for(let D=0;D<=o;D++){const b=[],y=D/o,L=y*(e-t)+t;for(let G=0;G<=s;G++){const B=G/s,W=B*l+a,q=Math.sin(W),V=Math.cos(W);O.x=L*q,O.y=-y*n+m,O.z=L*V,u.push(O.x,O.y,O.z),E.set(q,C,V).normalize(),f.push(E.x,E.y,E.z),d.push(B,1-y),b.push(g++)}v.push(b)}for(let D=0;D<s;D++)for(let b=0;b<o;b++){const y=v[b][D],L=v[b+1][D],G=v[b+1][D+1],B=v[b][D+1];h.push(y,L,B),h.push(L,G,B),R+=6}c.addGroup(p,R,0),p+=R}function S(E){const O=g,R=new et,C=new P;let D=0;const b=E===!0?t:e,y=E===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const L=g;for(let G=0;G<=s;G++){const W=G/s*l+a,q=Math.cos(W),V=Math.sin(W);C.x=b*V,C.y=m*y,C.z=b*q,u.push(C.x,C.y,C.z),f.push(0,y,0),R.x=q*.5+.5,R.y=V*.5*y+.5,d.push(R.x,R.y),g++}for(let G=0;G<s;G++){const B=O+G,W=L+G;E===!0?h.push(W,W+1,B):h.push(W+1,W,B),D+=3}c.addGroup(p,D,E===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class us extends Da{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Da().fromJSON(s))}return this}}const P_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Kh(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,f,d;if(n&&(o=U_(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Hs(o,r,e,a,l,d,0),r}};function Kh(i,t,e,n,s){let o,r;if(s===W_(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Bc(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Bc(o,i[o],i[o+1],r);return r&&cr(r,r.next)&&(Gs(r),r=r.next),r}function yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(cr(e,e.next)||me(e.prev,e,e.next)===0)){if(Gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&k_(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?D_(i,n,s,o):L_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Gs(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=I_(yi(i),t,e),Hs(i,t,e,n,s,o,2)):r===2&&O_(i,t,e,n,s,o):Hs(yi(i),t,e,n,s,o,1);break}}}function L_(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,f=s>o?s>r?s:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ji(s,a,o,l,r,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function D_(i,t,e,n){const s=i.prev,o=i,r=i.next;if(me(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,f=r.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=Ia(d,g,t,e,n),T=Ia(v,m,t,e,n);let S=i.prevZ,E=i.nextZ;for(;S&&S.z>=p&&E&&E.z<=T;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&Ji(a,h,l,u,c,f,S.x,S.y)&&me(S.prev,S,S.next)>=0||(S=S.prevZ,E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==r&&Ji(a,h,l,u,c,f,E.x,E.y)&&me(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&Ji(a,h,l,u,c,f,S.x,S.y)&&me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;E&&E.z<=T;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==r&&Ji(a,h,l,u,c,f,E.x,E.y)&&me(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function I_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!cr(s,o)&&jh(s,n,n.next,o)&&Xs(s,o)&&Xs(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Gs(n),Gs(n.next),n=i=o),n=n.next}while(n!==i);return yi(n)}function O_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&G_(r,a)){let l=$h(r,a);r=yi(r,r.next),l=yi(l,l.next),Hs(r,t,e,n,s,o,0),Hs(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function U_(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Kh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(X_(c));for(s.sort(N_),o=0;o<s.length;o++)e=F_(s[o],e);return e}function N_(i,t){return i.x-t.x}function F_(i,t){const e=B_(i,t);if(!e)return t;const n=$h(e,i);return yi(n,n.next),yi(e,e.next)}function B_(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Ji(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Xs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&z_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function z_(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function k_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ia(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,H_(s)}function H_(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function Ia(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function X_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ji(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function G_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!V_(i,t)&&(Xs(i,t)&&Xs(t,i)&&Y_(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||cr(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function cr(i,t){return i.x===t.x&&i.y===t.y}function jh(i,t,e,n){const s=Lo(me(i,t,e)),o=Lo(me(i,t,n)),r=Lo(me(e,n,i)),a=Lo(me(e,n,t));return!!(s!==o&&r!==a||s===0&&Po(i,e,t)||o===0&&Po(i,n,t)||r===0&&Po(e,i,n)||a===0&&Po(e,t,n))}function Po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Lo(i){return i>0?1:i<0?-1:0}function V_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xs(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function Y_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $h(i,t){const e=new Oa(i.i,i.x,i.y),n=new Oa(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Bc(i,t,e,n){const s=new Oa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Oa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function W_(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Bs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Bs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];zc(t),kc(n,t);let r=t.length;e.forEach(zc);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,kc(n,e[l]);const a=P_.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function zc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Re extends Ye{constructor(t=new us([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Z_;let S,E=!1,O,R,C,D;p&&(S=p.getSpacedPoints(h),E=!0,f=!1,O=p.computeFrenetFrames(h,!1),R=new P,C=new P,D=new P),f||(m=0,d=0,g=0,v=0);const b=a.extractPoints(c);let y=b.shape;const L=b.holes;if(!Bs.isClockWise(y)){y=y.reverse();for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];Bs.isClockWise(nt)&&(L[w]=nt.reverse())}}const B=Bs.triangulateShape(y,L),W=y;for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];y=y.concat(nt)}function q(w,rt,nt){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(rt,nt)}const V=y.length,$=B.length;function Z(w,rt,nt){let ut,j,Pt;const ft=w.x-rt.x,yt=w.y-rt.y,A=nt.x-w.x,x=nt.y-w.y,k=ft*ft+yt*yt,tt=ft*x-yt*A;if(Math.abs(tt)>Number.EPSILON){const Q=Math.sqrt(k),J=Math.sqrt(A*A+x*x),At=rt.x-yt/Q,ct=rt.y+ft/Q,_t=nt.x-x/J,zt=nt.y+A/J,ot=((_t-At)*x-(zt-ct)*A)/(ft*x-yt*A);ut=At+ft*ot-w.x,j=ct+yt*ot-w.y;const gt=ut*ut+j*j;if(gt<=2)return new et(ut,j);Pt=Math.sqrt(gt/2)}else{let Q=!1;ft>Number.EPSILON?A>Number.EPSILON&&(Q=!0):ft<-Number.EPSILON?A<-Number.EPSILON&&(Q=!0):Math.sign(yt)===Math.sign(x)&&(Q=!0),Q?(ut=-yt,j=ft,Pt=Math.sqrt(k)):(ut=ft,j=yt,Pt=Math.sqrt(k/2))}return new et(ut/Pt,j/Pt)}const mt=[];for(let w=0,rt=W.length,nt=rt-1,ut=w+1;w<rt;w++,nt++,ut++)nt===rt&&(nt=0),ut===rt&&(ut=0),mt[w]=Z(W[w],W[nt],W[ut]);const St=[];let vt,Xt=mt.concat();for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];vt=[];for(let ut=0,j=nt.length,Pt=j-1,ft=ut+1;ut<j;ut++,Pt++,ft++)Pt===j&&(Pt=0),ft===j&&(ft=0),vt[ut]=Z(nt[ut],nt[Pt],nt[ft]);St.push(vt),Xt=Xt.concat(vt)}for(let w=0;w<m;w++){const rt=w/m,nt=d*Math.cos(rt*Math.PI/2),ut=g*Math.sin(rt*Math.PI/2)+v;for(let j=0,Pt=W.length;j<Pt;j++){const ft=q(W[j],mt[j],ut);ht(ft.x,ft.y,-nt)}for(let j=0,Pt=L.length;j<Pt;j++){const ft=L[j];vt=St[j];for(let yt=0,A=ft.length;yt<A;yt++){const x=q(ft[yt],vt[yt],ut);ht(x.x,x.y,-nt)}}}const jt=g+v;for(let w=0;w<V;w++){const rt=f?q(y[w],Xt[w],jt):y[w];E?(C.copy(O.normals[0]).multiplyScalar(rt.x),R.copy(O.binormals[0]).multiplyScalar(rt.y),D.copy(S[0]).add(C).add(R),ht(D.x,D.y,D.z)):ht(rt.x,rt.y,0)}for(let w=1;w<=h;w++)for(let rt=0;rt<V;rt++){const nt=f?q(y[rt],Xt[rt],jt):y[rt];E?(C.copy(O.normals[w]).multiplyScalar(nt.x),R.copy(O.binormals[w]).multiplyScalar(nt.y),D.copy(S[w]).add(C).add(R),ht(D.x,D.y,D.z)):ht(nt.x,nt.y,u/h*w)}for(let w=m-1;w>=0;w--){const rt=w/m,nt=d*Math.cos(rt*Math.PI/2),ut=g*Math.sin(rt*Math.PI/2)+v;for(let j=0,Pt=W.length;j<Pt;j++){const ft=q(W[j],mt[j],ut);ht(ft.x,ft.y,u+nt)}for(let j=0,Pt=L.length;j<Pt;j++){const ft=L[j];vt=St[j];for(let yt=0,A=ft.length;yt<A;yt++){const x=q(ft[yt],vt[yt],ut);E?ht(x.x,x.y+S[h-1].y,S[h-1].x+nt):ht(x.x,x.y,u+nt)}}}K(),st();function K(){const w=s.length/3;if(f){let rt=0,nt=V*rt;for(let ut=0;ut<$;ut++){const j=B[ut];It(j[2]+nt,j[1]+nt,j[0]+nt)}rt=h+m*2,nt=V*rt;for(let ut=0;ut<$;ut++){const j=B[ut];It(j[0]+nt,j[1]+nt,j[2]+nt)}}else{for(let rt=0;rt<$;rt++){const nt=B[rt];It(nt[2],nt[1],nt[0])}for(let rt=0;rt<$;rt++){const nt=B[rt];It(nt[0]+V*h,nt[1]+V*h,nt[2]+V*h)}}n.addGroup(w,s.length/3-w,0)}function st(){const w=s.length/3;let rt=0;Mt(W,rt),rt+=W.length;for(let nt=0,ut=L.length;nt<ut;nt++){const j=L[nt];Mt(j,rt),rt+=j.length}n.addGroup(w,s.length/3-w,1)}function Mt(w,rt){let nt=w.length;for(;--nt>=0;){const ut=nt;let j=nt-1;j<0&&(j=w.length-1);for(let Pt=0,ft=h+m*2;Pt<ft;Pt++){const yt=V*Pt,A=V*(Pt+1),x=rt+ut+yt,k=rt+j+yt,tt=rt+j+A,Q=rt+ut+A;Ht(x,k,tt,Q)}}}function ht(w,rt,nt){l.push(w),l.push(rt),l.push(nt)}function It(w,rt,nt){Dt(w),Dt(rt),Dt(nt);const ut=s.length/3,j=T.generateTopUV(n,s,ut-3,ut-2,ut-1);qt(j[0]),qt(j[1]),qt(j[2])}function Ht(w,rt,nt,ut){Dt(w),Dt(rt),Dt(ut),Dt(rt),Dt(nt),Dt(ut);const j=s.length/3,Pt=T.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);qt(Pt[0]),qt(Pt[1]),qt(Pt[3]),qt(Pt[1]),qt(Pt[2]),qt(Pt[3])}function Dt(w){s.push(l[w*3+0]),s.push(l[w*3+1]),s.push(l[w*3+2])}function qt(w){o.push(w.x),o.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return q_(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qo[s.type]().fromJSON(s)),new Re(n,t.options)}}const Z_={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(o,r),new et(a,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new et(r,1-l),new et(c,1-u),new et(f,1-g),new et(v,1-p)]:[new et(a,1-l),new et(h,1-u),new et(d,1-g),new et(m,1-p)]}};function q_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mi extends Ye{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const T=[],S=p/n;let E=0;p===0&&r===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let O=0;O<=e;O++){const R=O/e;u.x=-t*Math.cos(s+R*o)*Math.sin(r+S*a),u.y=t*Math.cos(r+S*a),u.z=t*Math.sin(s+R*o)*Math.sin(r+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(R+E,1-S),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const S=h[p][T+1],E=h[p][T],O=h[p+1][T],R=h[p+1][T+1];(p!==0||r>0)&&d.push(S,E,R),(p!==n-1||l<Math.PI)&&d.push(E,O,R)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ls extends Ye{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*o,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;r.push(v,m,T),r.push(m,p,T)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vs extends Ye{constructor(t=new Zh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new P,l=new P,c=new et;let h=new P;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function v(){for(let S=0;S<e;S++)m(S);m(o===!1?e:0),T(),p()}function m(S){h=t.getPointAt(S/e,h);const E=r.normals[S],O=r.binormals[S];for(let R=0;R<=s;R++){const C=R/s*Math.PI*2,D=Math.sin(C),b=-Math.cos(C);l.x=b*E.x+D*O.x,l.y=b*E.y+D*O.y,l.z=b*E.z+D*O.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let E=1;E<=s;E++){const O=(s+1)*(S-1)+(E-1),R=(s+1)*S+(E-1),C=(s+1)*S+E,D=(s+1)*(S-1)+E;g.push(O,R,D),g.push(R,C,D)}}function T(){for(let S=0;S<=e;S++)for(let E=0;E<=s;E++)c.x=S/e,c.y=E/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Vs(new Qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Et extends qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ll extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class K_ extends ll{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qr=new le,Hc=new P,Xc=new P;class Jh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hc),Xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xc),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gc=new le,Ms=new P,Kr=new P;class j_ extends Jh{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ms),Kr.copy(n.position),Kr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Kr),n.updateMatrixWorld(),s.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc)}}class $_ extends ll{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class J_ extends Jh{constructor(){super(new Bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vc extends ll{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new J_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);function Q_(i){const t=document.createElement("aside");return t.className="control-panel",t.innerHTML=`<h2>${i}</h2>`,t}function Qh(i,t,e,n){const s=document.createElement("div");s.className="control-row";const o=document.createElement("label");o.textContent=t;const r=document.createElement("input");r.type="checkbox",r.checked=e,r.style.justifySelf="start";const a=document.createElement("output");return a.textContent=e?"on":"off",r.addEventListener("change",()=>{a.textContent=r.checked?"on":"off",n(r.checked)}),s.append(o,r,a),i.appendChild(s),s}function tv(i,t,e,n,s,o,r){const a=Qt(t,e,n,s,o,r);return i.appendChild(a),a}function Qt(i,t,e,n,s,o){const r=document.createElement("div");r.className="control-row";const a=String(n).includes(".")?String(n).split(".")[1].replace(/0+$/,"").length:0,l=f=>Number(f).toFixed(Math.max(0,a)),c=document.createElement("label");c.textContent=i;const h=document.createElement("input");h.type="range",h.min=String(t),h.max=String(e),h.step=String(n),h.value=String(s);const u=document.createElement("output");return u.value=l(s),u.textContent=u.value,h.addEventListener("input",()=>{const f=Number(h.value);u.value=l(f),u.textContent=u.value,o(f)}),r.append(c,h,u),r}function fs(i,t,e){const n=document.createElement("div");n.className="control-row";const s=document.createElement("label");s.textContent=i;const o=document.createElement("input");o.type="color",o.value=t;const r=document.createElement("output");return r.value=t,r.textContent=t,o.addEventListener("input",()=>{r.value=o.value,r.textContent=o.value,e(o.value)}),n.append(s,o,r),n}function ev(i,t,e){const n=document.createElement("div");n.className="control-row";const s=document.createElement("label");s.textContent=i;const o=document.createElement("input");o.type="text",o.value=t;const r=document.createElement("output");return r.textContent="",o.addEventListener("input",()=>{e(o.value)}),n.append(s,o,r),n}function ne(i,t,e=!0){const n=document.createElement("section");n.className="control-group";const s=document.createElement("details");s.open=!e;const o=document.createElement("summary"),r=document.createElement("h3");r.textContent=t,o.appendChild(r);const a=document.createElement("div");return a.className="control-body",s.append(o,a),n.appendChild(s),i.appendChild(n),a}function tu(i,t,e=!0){return ne(i,t,e)}function nv(i,t,e=!0){const n=ne(i,"Papers",e);t.forEach(({title:s,mesh:o,config:r,applyPaperTransform:a})=>{const l=document.createElement("h3");l.textContent=s,l.style.margin="4px 0 8px",l.style.fontSize="13px",n.appendChild(l),[["x",-3,3,.01],["y",-2,2,.01],["z",-.3,.5,.01],["rotX",-35,5,.5],["rotZ",-40,40,.5]].forEach(([h,u,f,d])=>{n.appendChild(Qt(h,u,f,d,r[h],g=>{r[h]=g,a(o,r)}))})})}function iv(i,t,e=!0){const n=ne(i,"Pins",e);t.forEach(({title:s,config:o,applyPinTransform:r})=>{const a=document.createElement("h3");a.textContent=s,a.style.margin="4px 0 8px",a.style.fontSize="13px",n.appendChild(a),[["x",-3,3,.01],["y",-2,2,.01],["z",-2,2,.01],["topRadius",.08,.4,.01],["topHeight",.03,.2,.01],["stemRadius",.04,.2,.01],["stemHeight",.08,.5,.01],["baseRadius",.08,.4,.01],["baseHeight",.03,.2,.01],["pinRadius",.005,.05,.005],["pinHeight",.08,.5,.01],["pinInset",0,.3,.01]].forEach(([c,h,u,f])=>{n.appendChild(Qt(c,h,u,f,o[c],d=>{o[c]=d,r()}))})})}function sv(i,t,e,n=!1){const s=ne(i,"Lighting",n);[["ambient",0,4,.05],["key",0,2,.05],["fill",0,3,.05],["front",0,2,.05],["shadowRadius",0,30,1],["blurSamples",0,32,1],["bias",-.002,.002,5e-5],["normalBias",0,.05,.001]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function ov(i,t,e,n=!0){const s=ne(i,"Camera",n);[["x",-30,30,.01],["y",-30,30,.01],["z",-30,30,.01],["targetX",-20,20,.01],["targetY",-20,20,.01],["targetZ",-20,20,.01],["fov",10,90,1]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function rv(i,t,e,n=!0){const s=ne(i,"Floor",n);[["x",-20,20,.01],["y",-20,20,.01],["z",-20,20,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",1,40,.01],["height",1,40,.01],["tone",.4,1.8,.01],["roughness",0,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function av(i,t,e,n=!0){const s=ne(i,"Rug",n);[["x",-20,20,.01],["y",-20,20,1e-4],["z",-20,20,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",1,30,.01],["height",1,30,.01],["depth",.01,.2,.001],["radius",.05,2,.01],["inset1",.05,5,.01],["inset2",.05,8,.01],["inset3",.05,12,.01],["radiusFalloff",0,.5,.005],["layerLift",0,.02,.001]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function lv(i,t,e,n=!1){const s=ne(i,"Board",n);[["x",-5,5,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-45,45,.5],["rotY",-45,45,.5],["rotZ",-45,45,.5]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function cv(i,t,e,n=!0){const s=ne(i,"Shelf",n);[["x",-8,8,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.4,4,.01],["height",.1,1.5,.01],["depth",.05,.8,.01],["radius",.01,.4,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function hv(i,t,e,n=!0){const s=ne(i,"Pot",n);[["x",-3,3,.01],["y",-3,3,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["radius",.08,.8,.01],["height",.1,1.2,.01],["neck",.02,.5,.01],["bulge",.5,1.8,.01],["soilRadius",.02,.6,.01],["soilHeight",.01,.6,.01],["soilOffsetY",-.2,.2,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function uv(i,t,e,n=!0){const s=ne(i,"Cactus",n);[["x",-2,2,.01],["y",-2,2,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["mainRadius",.02,.5,.01],["mainHeight",.1,1.5,.01],["mainLean",-.5,.5,.01],["armRadius",.02,.4,.01],["armHeight",.05,1,.01],["armOffsetX",-1,1,.01],["armOffsetY",-1,1,.01],["armLean",-1,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function fv(i,t,e=!0){const n=ne(i,"Books",e),s=[["x",-3,3,.01],["y",-3,3,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.05,1,.01],["height",.1,2,.01],["depth",.05,1,.01],["pagesX",-1,1,.01],["pagesY",-1,1,.01],["pagesZ",-1,1,.01],["pagesWidth",.01,1,.01],["pagesHeight",.01,2,.01],["pagesDepth",.01,1,.01],["spineX",-1,1,.01],["spineY",-1,1,.01],["spineZ",-1,1,.01],["spineWidth",.01,1,.01],["spineHeight",.01,2,.01],["spineDepth",.01,1,.01],["spineRotY",-180,180,.5]];t.forEach(({title:o,config:r,applyBookTransform:a})=>{const l=document.createElement("h3");l.textContent=o,l.style.margin="4px 0 8px",l.style.fontSize="13px",n.appendChild(l),s.forEach(([c,h,u,f])=>{n.appendChild(Qt(c,h,u,f,r[c],d=>{r[c]=d,a()}))})})}function dv(i,t,e,n=!0){const s=ne(i,"Picture",n);[["x",-10,10,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.5,4,.01],["height",.3,3,.01],["depth",.02,.5,.01],["innerInset",.02,.4,.01],["sunX",-1,1,.01],["sunY",-1,1,.01],["sunRadius",.02,.6,.01],["mountainAX",-1.5,1.5,.01],["mountainAY",-1.5,1.5,.01],["mountainAScaleX",.1,3,.01],["mountainAScaleY",.1,3,.01],["mountainAScaleZ",.1,3,.01],["mountainAWidth",.05,2,.01],["mountainAHeight",.05,2,.01],["mountainARotZ",-180,180,.5],["mountainBX",-1.5,1.5,.01],["mountainBY",-1.5,1.5,.01],["mountainBScaleX",.1,3,.01],["mountainBScaleY",.1,3,.01],["mountainBScaleZ",.1,3,.01],["mountainBWidth",.05,2,.01],["mountainBHeight",.05,2,.01],["mountainBRotZ",-180,180,.5]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function pv(i,t,e,n=!0){const s=ne(i,"Desk",n);[["x",-10,10,.01],["y",-5,5,.01],["z",-10,10,.01],["topX",-3,3,.01],["topY",-3,3,.01],["topZ",-3,3,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["mainWidth",1,10,.01],["mainDepth",.5,5,.01],["returnWidth",.5,5,.01],["returnDepth",.5,8,.01],["innerCut",.1,6,.01],["thickness",.02,.5,.01],["radius",.02,.8,.01],["legHeight",.2,3,.01],["legRadius",.02,.3,.01],["legInset",.05,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function eu(i,t,e,n,s=!0){const o=ne(i,t,s);[["x",-10,10,.001],["y",-2,2,1e-4],["z",-10,10,.001],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.5,8,.01],["height",.5,6,.01],["depth",.02,1,.01],["radius",.02,1,.01],["screenInset",.02,1,.01],["screenDepth",.01,.3,.01],["standWidth",.05,1.5,.01],["standHeight",.05,2.5,.01],["standDepth",.05,2,.01],["standOffsetZ",-2,2,.01],["standRotX",-180,180,.5],["standRotZ",-180,180,.5],["baseWidth",.1,3,.01],["baseHeight",.02,.5,.01],["baseDepth",.1,3,.01],["baseOffsetY",-2,2,.01],["baseOffsetZ",-2,2,.01],["baseRotX",-180,180,.5],["baseRotZ",-180,180,.5],["lineGap",.05,.4,.01]].forEach(([l,c,h,u])=>{o.appendChild(Qt(l,c,h,u,e[l],f=>{e[l]=f,n()}))}),(e.screenMode==="ui"?[["uiSidebarWidth",.01,.5,.001],["uiSidebarX",-2,2,.001],["uiPanelWidth",.01,.5,.001],["uiPanelX",-2,2,.001],["uiTopIconWidth",.05,1,.001],["uiTopIconX",-2,2,.001],["uiTopIconY",-2,2,.001],["uiIconWidth",.05,1,.001],["uiIconX",-2,2,.001],["uiIconStartY",-2,2,.001],["uiIconGap",.01,1,.001],["uiDotX",-2,2,.001],["uiDotY",-2,2,.001],["uiLinesWidthScale",.1,3,.001],["uiLinesX",-2,2,.001],["uiLinesY",-2,2,.001],["uiLineGap",.01,1,.001]]:[["codeX",-2,2,.001],["codeY",-2,2,.001]]).forEach(([l,c,h,u])=>{o.appendChild(Qt(l,c,h,u,e[l],f=>{e[l]=f,n()}))})}function mv(i,t,e,n=!0){const s=ne(i,"Floor Pot",n);[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["radius",.1,2,.01],["height",.1,3,.01],["neck",.05,1,.01],["bulge",.4,2,.01],["bandRadiusTop",.1,2,.01],["bandRadiusBottom",.1,2,.01],["bandHeight",.02,1,.01],["bandY",-2,2,.01],["bottomBandRadiusTop",.1,2,.01],["bottomBandRadiusBottom",.1,2,.01],["bottomBandHeight",.02,1,.01],["bottomBandY",-2,2,.01],["soilRadius",.05,2,.01],["soilHeight",.01,1,.01],["soilY",-2,2,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function gv(i,t,e,n=!0){const s=ne(i,"Floor Plant",n);[["x",-2,2,.01],["y",-2,2,.01],["z",-2,2,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["depth",.01,.3,.01],["bevelSize",.001,.2,.001],["bevelThickness",.01,1,.01],["bodyBulge",0,1,.01],["ridgeBulge",0,1,.01],["ridgeWidth",.05,1,.01],["centerWidth",.1,2,.01],["centerHeight",.1,4,.01],["centerX",-2,2,.01],["centerY",-2,2,.01],["centerZ",-2,2,.01],["centerRotX",-180,180,.5],["centerRotY",-180,180,.5],["centerRotZ",-180,180,.5],["leftWidth",.1,2,.01],["leftHeight",.1,4,.01],["leftX",-2,2,.01],["leftY",-2,2,.01],["leftZ",-2,2,.01],["leftRotX",-180,180,.5],["leftRotY",-180,180,.5],["leftRotZ",-180,180,.5],["rightWidth",.1,2,.01],["rightHeight",.1,4,.01],["rightX",-2,2,.01],["rightY",-2,2,.01],["rightZ",-2,2,.01],["rightRotX",-180,180,.5],["rightRotY",-180,180,.5],["rightRotZ",-180,180,.5]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function _v(i,t,e,n=!0){const s=ne(i,"Keyboard",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.2,3,.01],["height",.1,1,.01],["depth",.01,.3,.01],["radius",.01,.3,.01],["keyDepth",.001,.05,.001],["keyWidthScale",.1,1.2,.01],["keyHeightScale",.1,1.2,.01],["keyCols",1,20,1],["keyRows",1,10,1]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function vv(i,t,e,n=!0){const s=ne(i,"Mouse",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.05,1,.01],["height",.05,1,.01],["depth",.01,.3,.01],["radius",.01,.3,.01],["splitHeight",.1,2,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function xv(i,t,e,n=!0){const s=ne(i,"Speaker",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.1,2,.01],["height",.1,2,.01],["depth",.05,1,.01],["radius",.01,.3,.01],["panelWidth",.05,1.5,.01],["panelHeight",.05,1.5,.01],["panelDepth",.01,.2,.01],["panelRadius",.01,.2,.01],["panelX",-1,1,.01],["panelY",-1,1,.01],["panelZ",-1,1,.01],["coneRadius",.05,.8,.01],["coneDepth",.01,.2,.01],["coneX",-1,1,.01],["coneY",-1,1,.01],["coneZ",-1,1,.01],["smallConeRadius",.01,.4,.01],["smallConeDepth",.005,.1,.005],["smallConeX",-1,1,.01],["smallConeY",-1,1,.01],["smallConeZ",-1,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Sv(i,t,e,n=!0){const s=ne(i,"Mug",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Body",fields:[["topRadius",.05,1,.01],["bottomRadius",.05,1,.01],["height",.05,1.5,.01]],colors:["bodyColor"]},{title:"Coffee",fields:[["coffeeRadius",.02,1,.01],["coffeeDepth",.005,.2,.005],["coffeeOffsetY",-.2,.2,.005]],colors:["coffeeColor"]},{title:"Handle",fields:[["handleX",-1,1,.01],["handleY",-1,1,.01],["handleZ",-1,1,.01],["handleRotX",-180,180,.5],["handleRotY",-180,180,.5],["handleRotZ",-180,180,.5],["handleRadius",.03,1,.01],["handleTube",.005,.2,.005],["handleArc",.2,2,.01],["handleScaleX",.1,3,.01],["handleScaleY",.1,3,.01],["handleScaleZ",.1,3,.01]]},{title:"Steam",fields:[["steamCount",0,100,1],["steamHeight",.05,2,.01],["steamSpeed",0,4,.01],["steamSpread",0,1,.01],["steamOpacity",0,1,.01],["steamThickness",.001,.08,.001],["steamOffsetX",-1,1,.01],["steamOffsetY",-1,1,.01],["steamOffsetZ",-1,1,.01],["steamRotX",-180,180,.5],["steamRotY",-180,180,.5],["steamRotZ",-180,180,.5]],toggles:["steamEnabled"],colors:["steamColor"]}].forEach(({title:r,fields:a,toggles:l,colors:c})=>{const h=document.createElement("h3");h.textContent=r,h.style.margin="10px 0 8px",h.style.fontSize="13px",s.appendChild(h),a.forEach(([u,f,d,g])=>{s.appendChild(Qt(u,f,d,g,t[u],v=>{t[u]=v,e()}))}),(l??[]).forEach(u=>{Qh(s,u,t[u],f=>{t[u]=f,e()})}),(c??[]).forEach(u=>{s.appendChild(fs(u,t[u],f=>{t[u]=f,e()}))})})}function yv(i,t,e,n=!0){const s=ne(i,"Phone",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Body",fields:[["width",.05,2,.01],["height",.05,2,.01],["depth",.005,.3,.005],["radius",.005,.3,.005]],colors:["bodyColor"]},{title:"Screen",fields:[["screenWidth",.02,2,.01],["screenHeight",.02,2,.01],["screenDepth",.002,.1,.002],["screenRadius",.002,.2,.002],["screenX",-1,1,.01],["screenY",-1,1,.01],["screenZ",-.2,.2,.005],["screenGlow",0,1,.01]],colors:["screenColor"]},{title:"Camera Dot",fields:[["cameraRadius",.002,.1,.002],["cameraDepth",.002,.1,.002],["cameraX",-1,1,.01],["cameraY",-1,1,.01],["cameraZ",-.2,.2,.005]],colors:["detailColor"]},{title:"Time",fields:[["timeWidth",.01,.2,.005],["timeHeight",.03,.4,.005],["timeThickness",.002,.05,.002],["timeGap",0,.1,.002],["timeX",-1,1,.01],["timeY",-1,1,.01],["timeZ",-.2,.2,.005],["timeRotX",-180,180,.5],["timeRotY",-180,180,.5],["timeRotZ",-180,180,.5],["fingerprintRadius",.005,.2,.005],["fingerprintDepth",.002,.1,.002],["fingerprintX",-1,1,.01],["fingerprintY",-1,1,.01],["fingerprintZ",-.2,.2,.005]],text:["timeText"],colors:["timeColor","fingerprintColor"]}].forEach(({title:r,fields:a,text:l,colors:c})=>{const h=document.createElement("h3");h.textContent=r,h.style.margin="10px 0 8px",h.style.fontSize="13px",s.appendChild(h),a.forEach(([u,f,d,g])=>{s.appendChild(Qt(u,f,d,g,t[u],v=>{t[u]=v,e()}))}),(l??[]).forEach(u=>{s.appendChild(ev(u,t[u],f=>{t[u]=f,e()}))}),(c??[]).forEach(u=>{s.appendChild(fs(u,t[u],f=>{t[u]=f,e()}))})})}function Mv(i,t,e,n=!0){const s=ne(i,"Chair",n);[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["shellX",-2,2,.01],["shellY",-3,3,.01],["shellZ",-3,3,.01],["shellRotX",-180,180,.5],["shellRotY",-180,180,.5],["shellRotZ",-180,180,.5],["frameWidth",.2,4,.01],["frameDepth",.2,4,.01],["frameLift",0,3,.01],["backLegSpread",.1,3,.01],["backLegOffset",-1,2,.01],["backLegHeight",.1,3,.01],["tubeRadius",.01,.3,.01],["frameX",-2,2,.01],["frameY",-2,2,.01],["frameZ",-2,2,.01],["frameRotX",-180,180,.5],["frameRotY",-180,180,.5],["frameRotZ",-180,180,.5]].forEach(([a,l,c,h])=>{s.appendChild(Qt(a,l,c,h,t[a],u=>{t[a]=u,e()}))}),[{title:"Shell Back",fields:[["shellBackWidth",.2,4,.01],["shellBackHeight",.2,4,.01],["shellBackDepth",.02,.5,.01],["shellBackRadius",.01,.4,.01],["shellBackX",-2,2,.01],["shellBackY",-2,3,.01],["shellBackZ",-2,2,.01],["shellBackRotX",-180,180,.5],["shellBackRotY",-180,180,.5],["shellBackRotZ",-180,180,.5]]},{title:"Shell Seat",fields:[["shellSeatWidth",.2,4,.01],["shellSeatHeight",.2,4,.01],["shellSeatDepth",.02,.5,.01],["shellSeatRadius",.01,.4,.01],["shellSeatX",-2,2,.01],["shellSeatY",-2,3,.01],["shellSeatZ",-2,3,.01],["shellSeatRotX",-180,180,.5],["shellSeatRotY",-180,180,.5],["shellSeatRotZ",-180,180,.5]]},{title:"Shell Bend",fields:[["shellBendWidth",.2,4,.01],["shellBendInnerRadius",.05,1.5,.01],["shellBendThickness",.02,.5,.01],["shellBendX",-2,2,.01],["shellBendY",-2,3,.01],["shellBendZ",-2,3,.01],["shellBendRotX",-180,180,.5],["shellBendRotY",-180,180,.5],["shellBendRotZ",-180,180,.5]]}].forEach(({title:a,fields:l})=>{const c=document.createElement("h3");c.textContent=a,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),l.forEach(([h,u,f,d])=>{s.appendChild(Qt(h,u,f,d,t[h],g=>{t[h]=g,e()}))})})}function Ev(i,t,e,n=!0){const s=ne(i,"Rotations",n);[{title:"Root",fields:[["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5]]},{title:"Torso Head",fields:[["torsoPitch",-60,60,.5],["torsoYaw",-90,90,.5],["torsoRoll",-45,45,.5],["headPitch",-60,60,.5],["headYaw",-120,120,.5],["headRoll",-45,45,.5],["eyeYaw",-1,1,.01],["eyePitch",-1,1,.01],["browTilt",-30,30,.5]]},{title:"Left Arm",fields:[["leftShoulderX",-180,180,.5],["leftShoulderY",-360,360,.5],["leftShoulderZ",-180,180,.5],["leftElbowX",-10,160,.5],["leftElbowY",-180,180,.5],["leftElbowZ",-180,180,.5],["leftWristX",-180,180,.5],["leftWristY",-180,180,.5],["leftWristZ",-180,180,.5]]},{title:"Right Arm",fields:[["rightShoulderX",-180,180,.5],["rightShoulderY",-360,360,.5],["rightShoulderZ",-180,180,.5],["rightElbowX",-10,160,.5],["rightElbowY",-180,180,.5],["rightElbowZ",-180,180,.5],["rightWristX",-180,180,.5],["rightWristY",-180,180,.5],["rightWristZ",-180,180,.5]]},{title:"Left Leg",fields:[["leftHipX",-180,180,.5],["leftHipY",-180,180,.5],["leftHipZ",-180,180,.5],["leftKneeX",-10,160,.5],["leftAnkleX",-60,60,.5]]},{title:"Right Leg",fields:[["rightHipX",-180,180,.5],["rightHipY",-180,180,.5],["rightHipZ",-180,180,.5],["rightKneeX",-10,160,.5],["rightAnkleX",-60,60,.5]]}].forEach(({title:r,fields:a})=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,u,f])=>{s.appendChild(Qt(c,h,u,f,t[c],d=>{t[c]=d,e()}))})})}function bv(i,t,e,n=!0){const s=ne(i,"Offsets",n),o=document.createElement("h3");o.textContent="Root",o.style.margin="10px 0 8px",o.style.fontSize="13px",s.appendChild(o),[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["sitAmount",0,1,.01],["sitOffsetX",-2,2,.01],["sitOffsetY",-2,2,.01],["sitOffsetZ",-2,2,.01]].forEach(([a,l,c,h])=>{s.appendChild(Qt(a,l,c,h,t[a],u=>{t[a]=u,e()}))}),[["Torso",["torsoOffsetX","torsoOffsetY","torsoOffsetZ"]],["Pelvis",["pelvisOffsetX","pelvisOffsetY","pelvisOffsetZ"]],["Head",["headOffsetX","headOffsetY","headOffsetZ"]],["Left Ear",["leftEarOffsetX","leftEarOffsetY","leftEarOffsetZ"]],["Right Ear",["rightEarOffsetX","rightEarOffsetY","rightEarOffsetZ"]],["Left Eye",["leftEyeOffsetX","leftEyeOffsetY","leftEyeOffsetZ"]],["Right Eye",["rightEyeOffsetX","rightEyeOffsetY","rightEyeOffsetZ"]],["Left Brow",["leftBrowOffsetX","leftBrowOffsetY","leftBrowOffsetZ"]],["Right Brow",["rightBrowOffsetX","rightBrowOffsetY","rightBrowOffsetZ"]],["Left Shoulder",["leftShoulderOffsetX","leftShoulderOffsetY","leftShoulderOffsetZ"]],["Right Shoulder",["rightShoulderOffsetX","rightShoulderOffsetY","rightShoulderOffsetZ"]],["Left Elbow",["leftElbowOffsetX","leftElbowOffsetY","leftElbowOffsetZ"]],["Right Elbow",["rightElbowOffsetX","rightElbowOffsetY","rightElbowOffsetZ"]],["Left Hip",["leftHipOffsetX","leftHipOffsetY","leftHipOffsetZ"]],["Right Hip",["rightHipOffsetX","rightHipOffsetY","rightHipOffsetZ"]],["Left Knee",["leftKneeOffsetX","leftKneeOffsetY","leftKneeOffsetZ"]],["Right Knee",["rightKneeOffsetX","rightKneeOffsetY","rightKneeOffsetZ"]],["Socks",["sockOffsetX","sockOffsetY","sockOffsetZ"]],["Left Ankle",["leftAnkleOffsetX","leftAnkleOffsetY","leftAnkleOffsetZ"]],["Right Ankle",["rightAnkleOffsetX","rightAnkleOffsetY","rightAnkleOffsetZ"]]].forEach(([a,l])=>{const c=document.createElement("h3");c.textContent=a,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),l.forEach(h=>{s.appendChild(Qt(h,-2,2,.01,t[h],u=>{t[h]=u,e()}))})})}function wv(i,t,e,n=!0){const s=ne(i,"Sizes",n);[["Torso",[["torsoScaleX",.2,3,.01],["torsoScaleY",.2,3,.01],["torsoScaleZ",.2,3,.01]]],["Pelvis",[["pelvisScaleX",.2,3,.01],["pelvisScaleY",.2,3,.01],["pelvisScaleZ",.2,3,.01]]],["Head",[["headScaleX",.2,3,.01],["headScaleY",.2,3,.01],["headScaleZ",.2,3,.01]]],["Ears",[["earScaleX",.2,3,.01],["earScaleY",.2,3,.01],["earScaleZ",.2,3,.01]]],["Eyes",[["eyeScaleX",.2,3,.01],["eyeScaleY",.2,3,.01],["eyeScaleZ",.2,3,.01],["pupilScale",.2,3,.01]]],["Brows",[["browScaleX",.2,3,.01],["browScaleY",.2,3,.01],["browScaleZ",.2,3,.01]]],["Upper Arms",[["upperArmScaleX",.2,3,.01],["upperArmScaleY",.2,3,.01],["upperArmScaleZ",.2,3,.01]]],["Lower Arms",[["lowerArmScaleX",.2,3,.01],["lowerArmScaleY",.2,3,.01],["lowerArmScaleZ",.2,3,.01]]],["Hands",[["handScaleX",.2,3,.01],["handScaleY",.2,3,.01],["handScaleZ",.2,3,.01]]],["Upper Legs",[["upperLegScaleX",.2,3,.01],["upperLegScaleY",.2,3,.01],["upperLegScaleZ",.2,3,.01]]],["Lower Legs",[["lowerLegScaleX",.2,3,.01],["lowerLegScaleY",.2,3,.01],["lowerLegScaleZ",.2,3,.01]]],["Socks",[["sockScaleX",.2,3,.01],["sockScaleY",.2,3,.01],["sockScaleZ",.2,3,.01]]],["Shoes",[["shoeScaleX",.2,3,.01],["shoeScaleY",.2,3,.01],["shoeScaleZ",.2,3,.01]]],["Toes",[["toeScaleX",.2,3,.01],["toeScaleY",.2,3,.01],["toeScaleZ",.2,3,.01]]]].forEach(([r,a])=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,u,f])=>{s.appendChild(Qt(c,h,u,f,t[c],d=>{t[c]=d,e()}))})})}function Tv(i,t,e,n=!1){const s=ne(i,"Hair",n);[{title:"Hair Base",fields:[["hairBaseOffsetX",-2,2,.01],["hairBaseOffsetY",-2,2,.01],["hairBaseOffsetZ",-2,2,.01],["hairBaseRotX",-180,180,.5],["hairBaseRotY",-180,180,.5],["hairBaseRotZ",-180,180,.5],["hairBaseScaleX",.05,3,.01],["hairBaseScaleY",.05,3,.01],["hairBaseScaleZ",.05,3,.01]]},{title:"Hair Particles",fields:[["hairOffsetX",-2,2,.01],["hairOffsetY",-2,2,.01],["hairOffsetZ",-2,2,.01],["hairRotX",-180,180,.5],["hairRotY",-180,180,.5],["hairRotZ",-180,180,.5],["hairScaleX",.2,3,.01],["hairScaleY",.2,3,.01],["hairScaleZ",.2,3,.01],["hairCount",0,45e3,1],["hairParticleSize",.04,.6,.002],["hairParticleOpacity",0,1,.01],["hairScatter",0,.2,.001],["hairCurveX",-.1,.1,.001],["hairCurveTipX",-.1,.1,.001],["hairCurveZ",-.1,.1,.001]],colors:["hairColor"]},{title:"Fringe Particles",fields:[["fringeOffsetX",-2,2,.01],["fringeOffsetY",-2,2,.01],["fringeOffsetZ",-2,2,.01],["fringeRotX",-180,180,.5],["fringeRotY",-180,180,.5],["fringeRotZ",-180,180,.5],["fringeScaleX",.2,3,.01],["fringeScaleY",.2,3,.01],["fringeScaleZ",.2,3,.01],["fringeCount",0,360,1],["fringeParticleSize",.2,3,.01],["fringeParticleOpacity",0,1,.01]]}].forEach(({title:r,fields:a,colors:l})=>{const c=document.createElement("h3");c.textContent=r,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),a.forEach(([h,u,f,d])=>{s.appendChild(Qt(h,u,f,d,t[h],g=>{t[h]=g,e()}))}),(l??[]).forEach(h=>{s.appendChild(fs(h,t[h],u=>{t[h]=u,e()}))})})}function Av(i,t,e,n=!1){const s=ne(i,"Face",n);[{title:"Pupils",fields:[["pupilOffsetX",-.2,.2,.005],["pupilOffsetY",-.2,.2,.005],["pupilOffsetZ",-.1,.2,.005]]},{title:"Left Eye White",fields:[["leftEyeWhiteRotX",-180,180,.5],["leftEyeWhiteRotY",-180,180,.5],["leftEyeWhiteRotZ",-180,180,.5]]},{title:"Right Eye White",fields:[["rightEyeWhiteRotX",-180,180,.5],["rightEyeWhiteRotY",-180,180,.5],["rightEyeWhiteRotZ",-180,180,.5]]},{title:"Eye Highlight",fields:[["eyeHighlightScale",.05,3,.01],["eyeHighlightOffsetX",-.3,.3,.005],["eyeHighlightOffsetY",-.3,.3,.005],["eyeHighlightOffsetZ",-.1,.2,.005]]},{title:"Mouth",fields:[["mouthOffsetX",-.5,.5,.005],["mouthOffsetY",-.5,.5,.005],["mouthOffsetZ",0,.8,.005],["mouthRotX",-180,180,.5],["mouthRotY",-180,180,.5],["mouthRotZ",-180,180,.5],["mouthScaleX",.05,3,.01],["mouthScaleY",.05,3,.01],["mouthScaleZ",.05,3,.01],["mouthRadius",.01,.3,.005],["mouthTube",.002,.06,.002],["mouthArc",.1,2,.01]]}].forEach(({title:r,fields:a})=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,u,f])=>{s.appendChild(Qt(c,h,u,f,t[c],d=>{t[c]=d,e()}))})})}function Cv(i,t,e,n=!1){const s=ne(i,"Sleeves",n);[["sleeveLength",.4,1.6,.01],["sleeveVolume",.6,1.8,.01]].forEach(([r,a,l,c])=>{s.appendChild(Qt(r,a,l,c,t[r],h=>{t[r]=h,e()}))}),s.appendChild(fs("sleeveColor",t.sleeveColor,r=>{t.sleeveColor=r,e()}))}function Rv(i,t,e,n=!1){const s=ne(i,"Character Colors",n);["shirtColor","pelvisColor","pantsColor"].forEach(r=>{s.appendChild(fs(r,t[r],a=>{t[r]=a,e()}))})}function Pv(i,t,e,n=!1){const s=ne(i,"Feet",n);[{title:"Ankles",fields:[["leftAnkleOffsetX",-2,2,.01],["leftAnkleOffsetY",-2,2,.01],["leftAnkleOffsetZ",-2,2,.01],["leftAnkleX",-180,180,.5],["leftAnkleY",-180,180,.5],["leftAnkleZ",-180,180,.5],["rightAnkleOffsetX",-2,2,.01],["rightAnkleOffsetY",-2,2,.01],["rightAnkleOffsetZ",-2,2,.01],["rightAnkleX",-180,180,.5],["rightAnkleY",-180,180,.5],["rightAnkleZ",-180,180,.5]]},{title:"Socks",fields:[["sockOffsetX",-2,2,.01],["sockOffsetY",-2,2,.01],["sockOffsetZ",-2,2,.01],["sockRotX",-180,180,.5],["sockRotY",-180,180,.5],["sockRotZ",-180,180,.5],["sockScaleX",.2,3,.01],["sockScaleY",.2,3,.01],["sockScaleZ",.2,3,.01]],colors:["sockColor"]},{title:"Shoe Group",fields:[["shoeOffsetX",-2,2,.01],["shoeOffsetY",-2,2,.01],["shoeOffsetZ",-2,2,.01],["shoeRotX",-180,180,.5],["shoeRotY",-180,180,.5],["shoeRotZ",-180,180,.5],["shoeScaleX",.2,3,.01],["shoeScaleY",.2,3,.01],["shoeScaleZ",.2,3,.01]],colors:["shoeColor"]},{title:"Sole",fields:[["soleOffsetX",-2,2,.01],["soleOffsetY",-2,2,.01],["soleOffsetZ",-2,2,.01],["soleRotX",-180,180,.5],["soleRotY",-180,180,.5],["soleRotZ",-180,180,.5],["soleScaleX",.2,3,.01],["soleScaleY",.2,3,.01],["soleScaleZ",.2,3,.01]]},{title:"Upper Shoe",fields:[["upperShoeOffsetX",-2,2,.01],["upperShoeOffsetY",-2,2,.01],["upperShoeOffsetZ",-2,2,.01],["upperShoeRotX",-180,180,.5],["upperShoeRotY",-180,180,.5],["upperShoeRotZ",-180,180,.5],["upperShoeScaleX",.2,3,.01],["upperShoeScaleY",.2,3,.01],["upperShoeScaleZ",.2,3,.01]]},{title:"Toe",fields:[["toeOffsetX",-2,2,.01],["toeOffsetY",-2,2,.01],["toeOffsetZ",-2,2,.01],["toeRotX",-180,180,.5],["toeRotY",-180,180,.5],["toeRotZ",-180,180,.5],["toeScaleX",.2,3,.01],["toeScaleY",.2,3,.01],["toeScaleZ",.2,3,.01]],colors:["shoeToeColor"]}].forEach(({title:r,fields:a,colors:l})=>{const c=document.createElement("h3");c.textContent=r,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),a.forEach(([h,u,f,d])=>{s.appendChild(Qt(h,u,f,d,t[h],g=>{t[h]=g,e()}))}),(l??[]).forEach(h=>{s.appendChild(fs(h,t[h],u=>{t[h]=u,e()}))})})}const nu={fogEnabled:!0,musicPulseSpeed:3},iu={x:9.14,y:.46,z:13.71,targetX:.38,targetY:-2.56,targetZ:-2.15,fov:34},su={ambient:1.4,key:1.1,fill:1.35,front:1.05,shadowRadius:22,blurSamples:16,bias:0,normalBias:0},ou={wall:{x:0,y:0,z:-1.8,width:20,height:14,depth:.04},floor:{x:0,y:-5.52,z:8,rotX:0,rotY:0,rotZ:0,width:36.29,height:38.89,tone:1.33,roughness:1}},ru={x:.15,y:.15,z:-1.74,rotX:.5,rotY:-.5,rotZ:1},au={backPaper:{x:-1.71,y:1.19,z:-.01,rotX:-5.5,rotZ:.5},frontPaper:{x:-1.58,y:1.33,z:-.01,rotX:-6.5,rotZ:8.5},rightPaper:{x:1.58,y:.53,z:-.01,rotX:-10,rotZ:-6.5}},lu={leftPin:{x:-1.56,y:1.18,z:.58,topRadius:.16,topHeight:.06,stemRadius:.07,stemHeight:.3,baseRadius:.2,baseHeight:.07,pinRadius:.01,pinHeight:.35,pinInset:.21},rightPin:{x:1.56,y:.38,z:.56,topRadius:.16,topHeight:.06,stemRadius:.07,stemHeight:.3,baseRadius:.2,baseHeight:.07,pinRadius:.01,pinHeight:.35,pinInset:.26}},cu={x:-5,y:-.02,z:-1.3,rotX:-87.5,rotY:-2.5,rotZ:0,width:1.75,height:.88,depth:.24,radius:.26},hu={x:.42,y:.02,z:.18,rotX:90,rotY:0,rotZ:0,radius:.24,height:.49,neck:.15,bulge:.64,soilRadius:.15,soilHeight:.45,soilOffsetY:0},uu={x:.5,y:.03,z:.53,rotX:97.5,rotY:12.5,rotZ:-10,mainRadius:.1,mainHeight:.32,mainLean:-.07,armRadius:.06,armHeight:.19,armOffsetX:.03,armOffsetY:-.01,armLean:-.58},fu={x:-.4,y:-.04,z:.39,rotX:90,rotY:0,rotZ:0,width:.22,height:.72,depth:.49,pagesX:0,pagesY:.04,pagesZ:-.01,pagesWidth:.19,pagesHeight:.65,pagesDepth:.5,spineX:0,spineY:.03,spineZ:.26,spineWidth:.03,spineHeight:.67,spineDepth:.22,spineRotY:90},du={x:-.68,y:-.06,z:.37,rotX:90,rotY:0,rotZ:0,width:.18,height:.68,depth:.47,pagesX:0,pagesY:.045,pagesZ:-.03,pagesWidth:.19,pagesHeight:.6,pagesDepth:.48,spineX:0,spineY:.03,spineZ:.23,spineWidth:.025,spineHeight:.62,spineDepth:.2,spineRotY:90},pu={x:.36,y:-3.46,z:1.33,topX:.16,topY:-.08,topZ:.68,rotX:92,rotY:0,rotZ:0,mainWidth:7.08,mainDepth:2.87,returnWidth:2.51,returnDepth:5.35,innerCut:4.12,thickness:.2,radius:.9,legHeight:1.96,legRadius:.15,legInset:.58},mu={x:5.59,y:.85,z:-1.74,rotX:0,rotY:0,rotZ:0,width:1.98,height:1.35,depth:.18,innerInset:.13,sunX:.34,sunY:.2,sunRadius:.18,mountainAX:-.16,mountainAY:-.24,mountainAScaleX:1.14,mountainAScaleY:1,mountainAScaleZ:1.38,mountainAWidth:.9,mountainAHeight:.69,mountainARotZ:1,mountainBX:.33,mountainBY:-.36,mountainBScaleX:.78,mountainBScaleY:.84,mountainBScaleZ:3,mountainBWidth:.83,mountainBHeight:.44,mountainBRotZ:1},cl={screenMode:"code",x:1.9,y:-1.65,z:.56,rotX:-7,rotY:-4.5,rotZ:-1,width:3.27,height:2.28,depth:.18,radius:.22,screenInset:.11,screenDepth:.15,standWidth:.8,standHeight:1.07,standDepth:.05,standOffsetZ:.19,standRotX:14,standRotZ:1,baseWidth:.8,baseHeight:.02,baseDepth:.55,baseOffsetY:.13,baseOffsetZ:-.07,baseRotX:8.5,baseRotZ:1,lineGap:.1,codeX:-.05,codeY:.13,codeScroll:0,codeWidthScale:1,codeVariant:0,codeActiveLine:13,codeTypingProgress:0,codeCursorVisible:!0},hl={screenMode:"ui",x:-1.55,y:-1.67,z:.87,rotX:-6,rotY:12,rotZ:1.5,width:3.1,height:2.24,depth:.18,radius:.22,screenInset:.11,screenDepth:.15,standWidth:.68,standHeight:1,standDepth:.05,standOffsetZ:.19,standRotX:14,standRotZ:-1,baseWidth:.68,baseHeight:.02,baseDepth:.52,baseOffsetY:.15,baseOffsetZ:-.07,baseRotX:8.5,baseRotZ:-1,lineGap:.1,uiSidebarWidth:.15,uiSidebarX:-1.16,uiPanelWidth:.05,uiPanelX:-.15,uiTopIconWidth:.21,uiTopIconX:-1.18,uiTopIconY:.63,uiActiveIconIndex:0,uiDotIconIndex:0,uiDotVisible:!0,uiIconWidth:.18,uiIconX:-1.18,uiIconStartY:.3,uiIconGap:.33,uiDotX:.08,uiDotY:.08,uiLinesWidthScale:1.02,uiLinesX:-.77,uiLinesY:.73,uiLineGap:.14,uiLinesScroll:0},gu={x:5.9,y:-4.97,z:1.69,rotX:0,rotY:0,rotZ:-1,radius:.64,height:.93,neck:.44,bulge:.88,bandRadiusTop:.67,bandRadiusBottom:.61,bandHeight:.31,bandY:-.05,bottomBandRadiusTop:.48,bottomBandRadiusBottom:.49,bottomBandHeight:.32,bottomBandY:-.56,soilRadius:.44,soilHeight:.52,soilY:.19},_u={x:-.17,y:.85,z:-.28,rotX:0,rotY:0,rotZ:0,depth:.03,bevelSize:.12,bevelThickness:.45,bodyBulge:.72,ridgeBulge:.46,ridgeWidth:.65,centerWidth:.45,centerHeight:1.34,centerX:.05,centerY:.15,centerZ:-.11,centerRotX:-28.5,centerRotY:-36,centerRotZ:6,leftWidth:.19,leftHeight:1.08,leftX:-.17,leftY:-.01,leftZ:.22,leftRotX:-34,leftRotY:30.5,leftRotZ:23,rightWidth:.31,rightHeight:1.1,rightX:.46,rightY:.07,rightZ:.19,rightRotX:-84,rightRotY:-65.5,rightRotZ:-73},vu={x:.97,y:-3.43,z:2.57,rotX:-88,rotY:1,rotZ:3,width:1.32,height:.42,depth:.08,radius:.05,keyDepth:.04,keyWidthScale:.6,keyHeightScale:.44,keyCols:11,keyRows:3},ul={x:1.9,y:-3.429,z:2.5,rotX:-88,rotY:0,rotZ:0,width:.24,height:.39,depth:.03,radius:.13,splitHeight:2},xu={x:3.66,y:-3,z:1.46,rotX:1,rotY:0,rotZ:-1,width:.6,height:.88,depth:.25,radius:.17,panelWidth:.48,panelHeight:.72,panelDepth:.04,panelRadius:.13,panelX:0,panelY:0,panelZ:.11,coneRadius:.18,coneDepth:.05,coneX:0,coneY:.14,coneZ:.13,smallConeRadius:.05,smallConeDepth:.02,smallConeX:0,smallConeY:-.19,smallConeZ:.13},Su={x:-.63,y:-3.49,z:2.46,rotX:3,rotY:-36,rotZ:0,scaleX:.66,scaleY:.91,scaleZ:.66,topRadius:.27,bottomRadius:.23,height:.55,bodyColor:"#dbd5cc",coffeeColor:"#5b3925",coffeeRadius:.22,coffeeDepth:.105,coffeeOffsetY:-.05,handleX:.3,handleY:.28,handleZ:0,handleRotX:1,handleRotY:172,handleRotZ:40,handleRadius:.19,handleTube:.035,handleArc:1.59,handleScaleX:.7,handleScaleY:1.01,handleScaleZ:.98,steamEnabled:!0,steamCount:100,steamHeight:.46,steamSpeed:.8,steamSpread:.33,steamOpacity:.02,steamThickness:.049,steamOffsetX:0,steamOffsetY:-.37,steamOffsetZ:0,steamRotX:-11.5,steamRotY:-110,steamRotZ:-13.5,steamColor:"#fffde5"},yu={x:-1.35,y:-3.45,z:2.45,rotX:-88,rotY:1,rotZ:-151,scaleX:.8,scaleY:1.06,scaleZ:1,width:.48,height:.79,depth:.055,radius:.07,bodyColor:"#20242b",screenColor:"#3b414e",detailColor:"#000000",screenWidth:.42,screenHeight:.72,screenDepth:.012,screenRadius:.055,screenX:0,screenY:-.01,screenZ:-.005,screenGlow:.95,cameraRadius:.022,cameraDepth:.014,cameraX:0,cameraY:-.33,cameraZ:-.01,timeText:"10:24",timeColor:"#8a8ca8",timeWidth:.055,timeHeight:.11,timeThickness:.006,timeGap:.018,timeX:.18,timeY:-.11,timeZ:-.01,timeRotX:0,timeRotY:0,timeRotZ:180,fingerprintRadius:.035,fingerprintDepth:.012,fingerprintX:0,fingerprintY:.27,fingerprintZ:-.01,fingerprintColor:"#8a8ca8"},Mu={x:.37,y:-5.52,z:5.84,rotX:0,rotY:0,rotZ:0,width:8.44,height:7.6,depth:.06,radius:.39,inset1:.9,inset2:1.77,inset3:2.5,radiusFalloff:.06,layerLift:.002},Eu={x:1.15,y:-3.95,z:3.15,rotX:-90,rotY:-1,rotZ:3,shellX:.05,shellY:-1.43,shellZ:-.57,shellRotX:-86,shellRotY:6.5,shellRotZ:1,shellBackWidth:1.29,shellBackHeight:.92,shellBackDepth:.14,shellBackRadius:.04,shellBackX:0,shellBackY:-.89,shellBackZ:-.15,shellBackRotX:-1,shellBackRotY:0,shellBackRotZ:0,shellSeatWidth:1.28,shellSeatHeight:.72,shellSeatDepth:.14,shellSeatRadius:.1,shellSeatX:0,shellSeatY:-.1,shellSeatZ:.49,shellSeatRotX:90,shellSeatRotY:0,shellSeatRotZ:0,shellBendWidth:1.28,shellBendInnerRadius:.3,shellBendThickness:.14,shellBendX:.006,shellBendY:-.25,shellBendZ:-.01,shellBendRotX:0,shellBendRotY:0,shellBendRotZ:0,backWidth:1.26,backHeight:1.28,backDepth:.13,backRadius:.13,backX:.08,backY:-2,backZ:-.1,backRotX:-85.5,backRotY:3.5,backRotZ:0,innerBackWidth:1.48,innerBackHeight:1.72,innerBackDepth:.04,innerBackRadius:.09,innerBackX:.29,innerBackY:.75,innerBackZ:-1.27,innerBackRotX:0,innerBackRotY:0,innerBackRotZ:-3,seatWidth:1.2,seatHeight:1.11,seatDepth:.14,seatRadius:.1,seatX:.12,seatY:-1.62,seatZ:-.65,seatRotX:0,seatRotY:-1,seatRotZ:-5,frameWidth:.92,frameDepth:.24,frameLift:.96,backLegSpread:.87,backLegOffset:-.63,backLegHeight:.1,tubeRadius:.04,frameX:.07,frameY:-1.08,frameZ:-.51,frameRotX:8.5,frameRotY:-180,frameRotZ:-180},hr={x:.1,y:-4.13,z:3.9,rotX:2,rotY:165,rotZ:8.5,sitAmount:1,sitOffsetX:1.09,sitOffsetY:.13,sitOffsetZ:.34,torsoScaleX:.86,torsoScaleY:.71,torsoScaleZ:.54,pelvisScaleX:.97,pelvisScaleY:1.37,pelvisScaleZ:.81,shirtColor:"#334737",pelvisColor:"#262537",pantsColor:"#19182b",headScaleX:.6,headScaleY:.81,headScaleZ:.74,hairScaleX:.86,hairScaleY:1.42,hairScaleZ:1.05,hairColor:"#12151c",hairParticleSize:.5,hairCount:21692,hairParticleOpacity:1,hairScatter:.081,hairCurveX:-.039,hairCurveTipX:-.1,hairCurveZ:.054,hairCapScaleX:1.06,hairCapScaleY:.53,hairCapScaleZ:.93,fringeScaleX:.52,fringeScaleY:.49,fringeScaleZ:.46,fringeCount:360,fringeParticleSize:3,fringeParticleOpacity:1,earScaleX:.31,earScaleY:.6,earScaleZ:.25,eyeScaleX:.81,eyeScaleY:.9,eyeScaleZ:.6,pupilScale:.41,pupilOffsetX:0,pupilOffsetY:0,pupilOffsetZ:.02,leftEyeWhiteRotX:0,leftEyeWhiteRotY:-17.5,leftEyeWhiteRotZ:0,rightEyeWhiteRotX:0,rightEyeWhiteRotY:23,rightEyeWhiteRotZ:0,browScaleX:.46,browScaleY:.38,browScaleZ:.26,eyeHighlightScale:.38,eyeHighlightOffsetX:0,eyeHighlightOffsetY:-.005,eyeHighlightOffsetZ:.04,mouthOffsetX:0,mouthOffsetY:-.245,mouthOffsetZ:.335,mouthRotX:0,mouthRotY:0,mouthRotZ:180,mouthScaleX:.82,mouthScaleY:.49,mouthScaleZ:.56,mouthRadius:.085,mouthTube:.016,mouthArc:1.15,upperArmScaleX:1,upperArmScaleY:1,upperArmScaleZ:1,lowerArmScaleX:1,lowerArmScaleY:1,lowerArmScaleZ:1,sleeveLength:.94,sleeveVolume:.84,sleeveColor:"#334737",handScaleX:1,handScaleY:1,handScaleZ:1,upperLegScaleX:1,upperLegScaleY:1,upperLegScaleZ:1,lowerLegScaleX:1,lowerLegScaleY:1.11,lowerLegScaleZ:1,sockScaleX:1.28,sockScaleY:.52,sockScaleZ:.9,sockColor:"#f1cc98",sockOffsetX:.01,sockOffsetY:-.01,sockOffsetZ:.03,sockRotX:0,sockRotY:-62,sockRotZ:4.5,shoeScaleX:1.1,shoeScaleY:1.49,shoeScaleZ:1.05,shoeColor:"#3c414a",shoeOffsetX:.03,shoeOffsetY:0,shoeOffsetZ:.08,shoeRotX:0,shoeRotY:0,shoeRotZ:0,soleScaleX:.2,soleScaleY:.2,soleScaleZ:.2,soleOffsetX:-.01,soleOffsetY:-.105,soleOffsetZ:.13,soleRotX:0,soleRotY:0,soleRotZ:0,upperShoeScaleX:.69,upperShoeScaleY:.47,upperShoeScaleZ:1.34,upperShoeOffsetX:-.03,upperShoeOffsetY:-.045,upperShoeOffsetZ:.09,upperShoeRotX:1,upperShoeRotY:0,upperShoeRotZ:0,toeScaleX:.89,toeScaleY:1.23,toeScaleZ:1.84,shoeToeColor:"#f6f6f6",toeOffsetX:-.01,toeOffsetY:-.03,toeOffsetZ:.28,toeRotX:0,toeRotY:-1,toeRotZ:0,torsoPitch:5,torsoYaw:24.5,torsoRoll:-9.5,headPitch:-8.08,headYaw:-2.5,headRoll:-5.5,eyeYaw:-.08,eyePitch:0,browTilt:0,leftShoulderX:-81.25,leftShoulderY:-177,leftShoulderZ:32,leftElbowX:25.5,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5,rightShoulderX:-93.5,rightShoulderY:-224,rightShoulderZ:-7,rightElbowX:8.5,rightElbowY:0,rightElbowZ:0,rightWristX:0,rightWristY:0,rightWristZ:0,leftHipX:7,leftHipY:8.5,leftHipZ:-10,leftKneeX:-10,leftAnkleX:9.828,leftAnkleY:0,leftAnkleZ:0,rightHipX:7,rightHipY:7,rightHipZ:4.5,rightKneeX:0,rightAnkleX:3,rightAnkleY:0,rightAnkleZ:0,torsoOffsetX:-.09,torsoOffsetY:-.06,torsoOffsetZ:0,pelvisOffsetX:-.04,pelvisOffsetY:-.09,pelvisOffsetZ:.14,headOffsetX:0,headOffsetY:.03,headOffsetZ:0,hairOffsetX:0,hairOffsetY:-.22,hairOffsetZ:.19,hairRotX:-23,hairRotY:0,hairRotZ:1,hairBaseOffsetX:0,hairBaseOffsetY:.3,hairBaseOffsetZ:-.22,hairBaseRotX:0,hairBaseRotY:0,hairBaseRotZ:0,hairBaseScaleX:.76,hairBaseScaleY:.58,hairBaseScaleZ:.75,hairCapOffsetX:0,hairCapOffsetY:1.55,hairCapOffsetZ:-.01,hairCapRotX:0,hairCapRotY:12,hairCapRotZ:4.5,fringeOffsetX:.05,fringeOffsetY:.17,fringeOffsetZ:.15,fringeRotX:-4,fringeRotY:0,fringeRotZ:-4,leftEarOffsetX:.15,leftEarOffsetY:.03,leftEarOffsetZ:.01,rightEarOffsetX:-.15,rightEarOffsetY:0,rightEarOffsetZ:-.06,leftEyeOffsetX:.03,leftEyeOffsetY:.01,leftEyeOffsetZ:-.13,rightEyeOffsetX:-.03,rightEyeOffsetY:.01,rightEyeOffsetZ:-.13,leftBrowOffsetX:.06,leftBrowOffsetY:-.06,leftBrowOffsetZ:-.08,rightBrowOffsetX:-.06,rightBrowOffsetY:-.06,rightBrowOffsetZ:-.08,leftShoulderOffsetX:.26,leftShoulderOffsetY:-.12,leftShoulderOffsetZ:-.12,rightShoulderOffsetX:-.38,rightShoulderOffsetY:-.15,rightShoulderOffsetZ:-.03,leftElbowOffsetX:0,leftElbowOffsetY:0,leftElbowOffsetZ:0,rightElbowOffsetX:0,rightElbowOffsetY:0,rightElbowOffsetZ:0,leftHipOffsetX:0,leftHipOffsetY:0,leftHipOffsetZ:0,rightHipOffsetX:0,rightHipOffsetY:0,rightHipOffsetZ:0,leftKneeOffsetX:0,leftKneeOffsetY:0,leftKneeOffsetZ:.06,rightKneeOffsetX:0,rightKneeOffsetY:0,rightKneeOffsetZ:.06,leftAnkleOffsetX:.01,leftAnkleOffsetY:-.04,leftAnkleOffsetZ:-.04,rightAnkleOffsetX:-.01,rightAnkleOffsetY:-.06,rightAnkleOffsetZ:-.06};function ie(i){return JSON.parse(JSON.stringify(i))}const Wc={type:"change"},jr={type:"start"},Zc={type:"end"},Do=new Rh,qc=new Zn,Lv=Math.cos(70*Kn.DEG2RAD);class Dv extends Ei{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",_t),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wc),n.update(),o=s.NONE},this.update=(function(){const _=new P,F=new Si().setFromUnitVectors(t.up,new P(0,1,0)),z=F.clone().invert(),Y=new P,it=new Si,Ct=new P,Ft=2*Math.PI;return function(be=null){const Jt=n.object.position;_.copy(Jt).sub(n.target),_.applyQuaternion(F),a.setFromVector3(_),n.autoRotate&&o===s.NONE&&G(y(be)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let we=n.minAzimuthAngle,Se=n.maxAzimuthAngle;isFinite(we)&&isFinite(Se)&&(we<-Math.PI?we+=Ft:we>Math.PI&&(we-=Ft),Se<-Math.PI?Se+=Ft:Se>Math.PI&&(Se-=Ft),we<=Se?a.theta=Math.max(we,Math.min(Se,a.theta)):a.theta=a.theta>(we+Se)/2?Math.max(we,a.theta):Math.min(Se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Bn=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=St(a.radius);else{const Ie=a.radius;a.radius=St(a.radius*c),Bn=Ie!=a.radius}if(_.setFromSpherical(a),_.applyQuaternion(z),Jt.copy(n.target).add(_),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let Ie=null;if(n.object.isPerspectiveCamera){const wn=_.length();Ie=St(wn*c);const ii=wn-Ie;n.object.position.addScaledVector(E,ii),n.object.updateMatrixWorld(),Bn=!!ii}else if(n.object.isOrthographicCamera){const wn=new P(O.x,O.y,0);wn.unproject(n.object);const ii=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Bn=ii!==n.object.zoom;const ms=new P(O.x,O.y,0);ms.unproject(n.object),n.object.position.sub(ms).add(wn),n.object.updateMatrixWorld(),Ie=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ie).add(n.object.position):(Do.origin.copy(n.object.position),Do.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Do.direction))<Lv?t.lookAt(n.target):(qc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Do.intersectPlane(qc,n.target))))}else if(n.object.isOrthographicCamera){const Ie=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Ie!==n.object.zoom&&(n.object.updateProjectionMatrix(),Bn=!0)}return c=1,R=!1,Bn||Y.distanceToSquared(n.object.position)>r||8*(1-it.dot(n.object.quaternion))>r||Ct.distanceToSquared(n.target)>r?(n.dispatchEvent(Wc),Y.copy(n.object.position),it.copy(n.object.quaternion),Ct.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",gt),n.domElement.removeEventListener("pointerdown",yt),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_t),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const r=1e-6,a=new Yc,l=new Yc;let c=1;const h=new P,u=new et,f=new et,d=new et,g=new et,v=new et,m=new et,p=new et,T=new et,S=new et,E=new P,O=new et;let R=!1;const C=[],D={};let b=!1;function y(_){return _!==null?2*Math.PI/60*n.autoRotateSpeed*_:2*Math.PI/60/60*n.autoRotateSpeed}function L(_){const F=Math.abs(_*.01);return Math.pow(.95,n.zoomSpeed*F)}function G(_){l.theta-=_}function B(_){l.phi-=_}const W=(function(){const _=new P;return function(z,Y){_.setFromMatrixColumn(Y,0),_.multiplyScalar(-z),h.add(_)}})(),q=(function(){const _=new P;return function(z,Y){n.screenSpacePanning===!0?_.setFromMatrixColumn(Y,1):(_.setFromMatrixColumn(Y,0),_.crossVectors(n.object.up,_)),_.multiplyScalar(z),h.add(_)}})(),V=(function(){const _=new P;return function(z,Y){const it=n.domElement;if(n.object.isPerspectiveCamera){const Ct=n.object.position;_.copy(Ct).sub(n.target);let Ft=_.length();Ft*=Math.tan(n.object.fov/2*Math.PI/180),W(2*z*Ft/it.clientHeight,n.object.matrix),q(2*Y*Ft/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(z*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),q(Y*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function $(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function mt(_,F){if(!n.zoomToCursor)return;R=!0;const z=n.domElement.getBoundingClientRect(),Y=_-z.left,it=F-z.top,Ct=z.width,Ft=z.height;O.x=Y/Ct*2-1,O.y=-(it/Ft)*2+1,E.set(O.x,O.y,1).unproject(n.object).sub(n.object.position).normalize()}function St(_){return Math.max(n.minDistance,Math.min(n.maxDistance,_))}function vt(_){u.set(_.clientX,_.clientY)}function Xt(_){mt(_.clientX,_.clientX),p.set(_.clientX,_.clientY)}function jt(_){g.set(_.clientX,_.clientY)}function K(_){f.set(_.clientX,_.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;G(2*Math.PI*d.x/F.clientHeight),B(2*Math.PI*d.y/F.clientHeight),u.copy(f),n.update()}function st(_){T.set(_.clientX,_.clientY),S.subVectors(T,p),S.y>0?$(L(S.y)):S.y<0&&Z(L(S.y)),p.copy(T),n.update()}function Mt(_){v.set(_.clientX,_.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(v),n.update()}function ht(_){mt(_.clientX,_.clientY),_.deltaY<0?Z(L(_.deltaY)):_.deltaY>0&&$(L(_.deltaY)),n.update()}function It(_){let F=!1;switch(_.code){case n.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),F=!0;break}F&&(_.preventDefault(),n.update())}function Ht(_){if(C.length===1)u.set(_.pageX,_.pageY);else{const F=kt(_),z=.5*(_.pageX+F.x),Y=.5*(_.pageY+F.y);u.set(z,Y)}}function Dt(_){if(C.length===1)g.set(_.pageX,_.pageY);else{const F=kt(_),z=.5*(_.pageX+F.x),Y=.5*(_.pageY+F.y);g.set(z,Y)}}function qt(_){const F=kt(_),z=_.pageX-F.x,Y=_.pageY-F.y,it=Math.sqrt(z*z+Y*Y);p.set(0,it)}function w(_){n.enableZoom&&qt(_),n.enablePan&&Dt(_)}function rt(_){n.enableZoom&&qt(_),n.enableRotate&&Ht(_)}function nt(_){if(C.length==1)f.set(_.pageX,_.pageY);else{const z=kt(_),Y=.5*(_.pageX+z.x),it=.5*(_.pageY+z.y);f.set(Y,it)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;G(2*Math.PI*d.x/F.clientHeight),B(2*Math.PI*d.y/F.clientHeight),u.copy(f)}function ut(_){if(C.length===1)v.set(_.pageX,_.pageY);else{const F=kt(_),z=.5*(_.pageX+F.x),Y=.5*(_.pageY+F.y);v.set(z,Y)}m.subVectors(v,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(v)}function j(_){const F=kt(_),z=_.pageX-F.x,Y=_.pageY-F.y,it=Math.sqrt(z*z+Y*Y);T.set(0,it),S.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),$(S.y),p.copy(T);const Ct=(_.pageX+F.x)*.5,Ft=(_.pageY+F.y)*.5;mt(Ct,Ft)}function Pt(_){n.enableZoom&&j(_),n.enablePan&&ut(_)}function ft(_){n.enableZoom&&j(_),n.enableRotate&&nt(_)}function yt(_){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(_.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",x)),!bt(_)&&(Zt(_),_.pointerType==="touch"?zt(_):k(_)))}function A(_){n.enabled!==!1&&(_.pointerType==="touch"?ot(_):tt(_))}function x(_){switch(Ot(_),C.length){case 0:n.domElement.releasePointerCapture(_.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(Zc),o=s.NONE;break;case 1:const F=C[0],z=D[F];zt({pointerId:F,pageX:z.x,pageY:z.y});break}}function k(_){let F;switch(_.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ai.DOLLY:if(n.enableZoom===!1)return;Xt(_),o=s.DOLLY;break;case Ai.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enablePan===!1)return;jt(_),o=s.PAN}else{if(n.enableRotate===!1)return;vt(_),o=s.ROTATE}break;case Ai.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enableRotate===!1)return;vt(_),o=s.ROTATE}else{if(n.enablePan===!1)return;jt(_),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(jr)}function tt(_){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;K(_);break;case s.DOLLY:if(n.enableZoom===!1)return;st(_);break;case s.PAN:if(n.enablePan===!1)return;Mt(_);break}}function Q(_){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(_.preventDefault(),n.dispatchEvent(jr),ht(J(_)),n.dispatchEvent(Zc))}function J(_){const F=_.deltaMode,z={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(F){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return _.ctrlKey&&!b&&(z.deltaY*=10),z}function At(_){_.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",ct,{passive:!0,capture:!0}))}function ct(_){_.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",ct,{passive:!0,capture:!0}))}function _t(_){n.enabled===!1||n.enablePan===!1||It(_)}function zt(_){switch(Nt(_),C.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;Ht(_),o=s.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;Dt(_),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(_),o=s.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;rt(_),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(jr)}function ot(_){switch(Nt(_),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;nt(_),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ut(_),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pt(_),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(_),n.update();break;default:o=s.NONE}}function gt(_){n.enabled!==!1&&_.preventDefault()}function Zt(_){C.push(_.pointerId)}function Ot(_){delete D[_.pointerId];for(let F=0;F<C.length;F++)if(C[F]==_.pointerId){C.splice(F,1);return}}function bt(_){for(let F=0;F<C.length;F++)if(C[F]==_.pointerId)return!0;return!1}function Nt(_){let F=D[_.pointerId];F===void 0&&(F=new et,D[_.pointerId]=F),F.set(_.pageX,_.pageY)}function kt(_){const F=_.pointerId===C[0]?C[1]:C[0];return D[F]}n.domElement.addEventListener("contextmenu",gt),n.domElement.addEventListener("pointerdown",yt),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}class Iv{constructor(t,e){this.config=e,this.camera=new Qe(e.fov,window.innerWidth/window.innerHeight,.1,100),this.controls=new Dv(this.camera,t.domElement),this.controls.enableDamping=!0,this.apply()}apply(){this.camera.position.set(this.config.x,this.config.y,this.config.z),this.camera.fov=this.config.fov,this.camera.updateProjectionMatrix(),this.controls.target.set(this.config.targetX,this.config.targetY,this.config.targetZ),this.controls.update()}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}class Ov{constructor(t,e){this.scene=t,this.config=e,this.ambient=new K_(16776697,15391942,e.ambient),this.keyLight=new Vc(16774893,e.key),this.fillLight=new $_(16771796,e.fill,30),this.frontLight=new Vc(16777215,e.front),this.keyLight.position.set(1.6,5.3,8.4),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.set(4096,4096),this.keyLight.shadow.camera.left=-10,this.keyLight.shadow.camera.right=10,this.keyLight.shadow.camera.top=8,this.keyLight.shadow.camera.bottom=-8,this.fillLight.position.set(-2.2,3.1,5.8),this.frontLight.position.set(-.6,2.4,9),t.add(this.ambient,this.keyLight,this.fillLight,this.frontLight),this.apply()}apply(){this.ambient.intensity=this.config.ambient,this.keyLight.intensity=this.config.key,this.fillLight.intensity=this.config.fill,this.frontLight.intensity=this.config.front,this.keyLight.shadow.radius=this.config.shadowRadius,this.keyLight.shadow.blurSamples=Math.round(this.config.blurSamples),this.keyLight.shadow.bias=this.config.bias,this.keyLight.shadow.normalBias=this.config.normalBias}}const bu=.32;function N(i){return Kn.degToRad(i)}function Xe(i,t,e){const n=-i/2,s=-t/2,o=new us;return o.moveTo(n+e,s),o.lineTo(n+i-e,s),o.quadraticCurveTo(n+i,s,n+i,s+e),o.lineTo(n+i,s+t-e),o.quadraticCurveTo(n+i,s+t,n+i-e,s+t),o.lineTo(n+e,s+t),o.quadraticCurveTo(n,s+t,n,s+t-e),o.lineTo(n,s+e),o.quadraticCurveTo(n,s,n+e,s),o}function Uv(i=bu){const t=Xe(6.6,4.25,.42),e=6.6-i*2,n=4.25-i*2,s=Math.max(.18,.42-i*.38),o=Xe(e,n,s);t.holes.push(o);const r=new Re(t,{depth:.18,bevelEnabled:!1,curveSegments:28});return r.center(),r}function Nv(i=bu){const t=Math.max(.01,i-.01),e=6.6-t*2,n=4.25-t*2,s=Math.max(.18,.42-t*.38),o=new Re(Xe(e,n,s),{depth:.08,bevelEnabled:!1,curveSegments:28});return o.center(),o}function Kc(i,t,e,n){const s=Xe(i,t,n),o=new Re(s,{depth:e,bevelEnabled:!1,curveSegments:24});return o.center(),o}function jc(i,t,e,n){const s=Xe(i,t,.22),o=Xe(i-n*2,t-n*2,.16);s.holes.push(o);const r=new Re(s,{depth:e,bevelEnabled:!1,curveSegments:24});return r.center(),r}function $c(i,t,e,n){const s=new Re(Xe(i-n*2.1,t-n*2.1,.14),{depth:e,bevelEnabled:!1,curveSegments:24});return s.center(),s}function Io(i,t,e){const n=new us;n.moveTo(-i/2,-t/2),n.lineTo(0,t/2),n.lineTo(i/2,-t/2),n.closePath();const s=new Re(n,{depth:e,bevelEnabled:!1,curveSegments:8});return s.center(),s}function Jc(i,t,e,n,s,o,r){const a=new us,l=-i/2,c=i/2,h=-t/2,u=t/2,f=l+e,d=n/2,g=Math.max(.02,Math.min(r,i*.18,n*.18,e*.18,t*.18)),v=Math.max(.04,Math.min(g*.8,s*.35)),m=Math.min(c-g-.05,Math.max(f+v,c-s));a.moveTo(l+g,h),a.lineTo(c-g,h),a.quadraticCurveTo(c,h,c,h+g),a.lineTo(c,u-g),a.quadraticCurveTo(c,u,c-g,u),a.lineTo(m+v,u),a.quadraticCurveTo(m,u,m,u+v),a.lineTo(m,d-g),a.quadraticCurveTo(m,d,m-g,d),a.lineTo(l+g,d),a.quadraticCurveTo(l,d,l,d-g),a.lineTo(l,h+g),a.quadraticCurveTo(l,h,l+g,h),a.closePath();const p=new Re(a,{depth:o,bevelEnabled:!1,curveSegments:16});return p.center(),p}function tr(i,t,e,n){const s=[new et(.01,0),new et(i*.72,.02*t),new et(i*n,.28*t),new et(i*1.04,.55*t),new et(i*.92,.82*t),new et(e,.94*t),new et(e*1.03,t)],o=new lr(s,48);return o.center(),o}class Fv{constructor(t,e){this.scene=t,this.config=e,this.wallMaterial=new Et({color:16248802,roughness:1}),this.floorMaterial=new Et({color:16248802,roughness:e.floor.roughness}),this.backdrop=new lt(new te(e.wall.width,e.wall.height,e.wall.depth),this.wallMaterial),this.backdrop.name="room-wall",this.backdrop.castShadow=!0,this.backdrop.receiveShadow=!0,this.floor=new lt(new te(e.floor.width,.04,e.floor.height),this.floorMaterial),this.floor.name="room-floor",this.floor.castShadow=!1,this.floor.receiveShadow=!0,t.add(this.backdrop,this.floor),this.applyWall(),this.applyFloor()}applyWall(){this.backdrop.position.set(this.config.wall.x,this.config.wall.y,this.config.wall.z),this.wallMaterial.color.setHex(16248802),this.wallMaterial.roughness=1}applyFloor(){const t=this.config.floor;this.floor.geometry.dispose(),this.floor.geometry=new te(t.width,.04,t.height),this.floor.position.set(t.x,t.y,t.z),this.floor.rotation.x=N(t.rotX),this.floor.rotation.y=N(t.rotY),this.floor.rotation.z=N(t.rotZ),this.floorMaterial.color.setHex(16248802).multiplyScalar(t.tone),this.floorMaterial.roughness=t.roughness}}function $r(i,t,e,n){const s=new Wt,o=new lt(new te(i,t,.018),e);o.name="paper-sheet",o.castShadow=!0,o.receiveShadow=!0,o.position.y=-t/2,s.add(o);for(let r=0;r<4;r+=1){const a=new lt(new te(i*(.38+r%2*.16),.022,.004),new Et({color:n,roughness:.95,transparent:!0,opacity:.35}));a.position.set(-i*.08,-t*.32-r*.18,.012),s.add(a)}return s}function Qc(i,t,e,n){const s=new Wt,o=new lt(new Kt(.25,.25,.08,32),t);o.name="pin-top",o.castShadow=!0,o.receiveShadow=!0,o.rotation.x=Math.PI/2,s.add(o);const r=new lt(new Kt(.15,.15,.4,32),e);r.name="pin-stem",r.receiveShadow=!0,r.rotation.x=Math.PI/2,s.add(r);const a=new lt(new Kt(.25,.25,.08,32),t);a.name="pin-base",a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=Math.PI/2,s.add(a);const l=new lt(new Kt(.015,.015,.3,16),n);return l.name="pin-needle",l.receiveShadow=!0,l.rotation.x=Math.PI/2,s.add(l),i.add(s),{pushpin:s,top:o,stem:r,base:a,pin:l}}class Bv{constructor(t,e,n,s){this.config=e,this.paperConfigs=n,this.pinConfigs=s,this.group=new Wt;const o=new Et({color:15389084,roughness:.9}),r=new Et({color:12031357,roughness:1}),a=new Et({color:16250095,roughness:.97}),l=new Et({color:12572398,roughness:.97}),c=new Et({color:15430015,roughness:.72}),h=new Et({color:13916775,roughness:.76}),u=new Et({color:7434609,roughness:.35,metalness:.7});this.frame=new lt(Uv(),o),this.frame.name="board-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.cork=new lt(Nv(),r),this.cork.name="board-cork",this.cork.position.z=-.02,this.cork.receiveShadow=!0,this.group.add(this.cork),this.paperLayer=new Wt,this.paperLayer.position.z=.055,this.cork.add(this.paperLayer),this.papers={backPaper:$r(.92,1.24,a,13617087),frontPaper:$r(1,1.34,l,10336727),rightPaper:$r(.94,1.28,a,13946567)},Object.values(this.papers).forEach(f=>this.paperLayer.add(f)),this.pins={leftPin:Qc(this.cork,c,h,u),rightPin:Qc(this.cork,c,h,u)},t.add(this.group),this.apply()}applyPaperTransform(t){const e=this.papers[t],n=this.paperConfigs[t];e.position.set(n.x,n.y,n.z),e.rotation.x=N(n.rotX),e.rotation.z=N(n.rotZ)}applyPinTransform(t){const e=this.pins[t],n=this.pinConfigs[t];e.pushpin.position.set(n.x,n.y,n.z),e.top.geometry.dispose(),e.top.geometry=new Kt(n.topRadius,n.topRadius,n.topHeight,32),e.top.position.z=0,e.stem.geometry.dispose(),e.stem.geometry=new Kt(n.stemRadius,n.stemRadius,n.stemHeight,32),e.stem.position.z=-(n.topHeight*.5+n.stemHeight*.5),e.base.geometry.dispose(),e.base.geometry=new Kt(n.baseRadius,n.baseRadius,n.baseHeight,32),e.base.position.z=-(n.topHeight+n.stemHeight)+n.baseHeight*.5,e.pin.geometry.dispose(),e.pin.geometry=new Kt(n.pinRadius,n.pinRadius,n.pinHeight,16),e.pin.position.z=-(n.topHeight+n.stemHeight+n.baseHeight+n.pinHeight*.5-n.pinInset)}apply(){this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ),Object.keys(this.papers).forEach(t=>this.applyPaperTransform(t)),Object.keys(this.pins).forEach(t=>this.applyPinTransform(t))}getPaperSections(){return[{title:"Left Back",mesh:this.papers.backPaper,config:this.paperConfigs.backPaper,applyPaperTransform:()=>this.applyPaperTransform("backPaper")},{title:"Left Front",mesh:this.papers.frontPaper,config:this.paperConfigs.frontPaper,applyPaperTransform:()=>this.applyPaperTransform("frontPaper")},{title:"Right",mesh:this.papers.rightPaper,config:this.paperConfigs.rightPaper,applyPaperTransform:()=>this.applyPaperTransform("rightPaper")}]}getPinSections(){return[{title:"Left Pin",config:this.pinConfigs.leftPin,applyPinTransform:()=>this.applyPinTransform("leftPin")},{title:"Right Pin",config:this.pinConfigs.rightPin,applyPinTransform:()=>this.applyPinTransform("rightPin")}]}}function th(i,t,e,n){const s=new Wt,o=new lt(new te(.1,.1,.1),t),r=new lt(new te(.1,.1,.1),e),a=new lt(new te(.1,.1,.1),n);return o.name="book-cover",r.name="book-pages",a.name="book-spine",[o,r,a].forEach(l=>{l.castShadow=!0,l.receiveShadow=!0,s.add(l)}),i.add(s),{group:s,cover:o,pages:r,spine:a}}class zv{constructor(t,e,n,s,o,r){this.shelfConfig=e,this.potConfig=n,this.cactusConfig=s,this.bookConfig=o,this.bookTwoConfig=r;const a=new Et({color:15983548,roughness:.92}),l=new Et({color:16382453,roughness:.95}),c=new Et({color:7097138,roughness:1}),h=new Et({color:10936089,roughness:.88}),u=new Et({color:15908675,roughness:.9}),f=new Et({color:14523941,roughness:.9}),d=new Et({color:14410476,roughness:.92}),g=new Et({color:13095132,roughness:.94});this.bookPagesMaterial=new Et({color:15265269,roughness:.96}),this.shelf=new lt(Kc(e.width,e.height,e.depth,e.radius),a),this.shelf.name="shelf",this.shelf.castShadow=!0,this.shelf.receiveShadow=!0,t.add(this.shelf),this.pot=new lt(tr(n.radius,n.height,n.neck,n.bulge),l),this.pot.name="pot",this.pot.castShadow=!0,this.pot.receiveShadow=!0,this.shelf.add(this.pot),this.soil=new lt(new Kt(.12,.12,.03,32),c),this.soil.name="pot-soil",this.soil.receiveShadow=!0,this.shelf.add(this.soil),this.cactus=new Wt,this.cactusMain=new lt(new mi(.14,28,28),h),this.cactusArm=new lt(new mi(.1,28,28),h),this.cactusMain.name="cactus-main",this.cactusArm.name="cactus-arm",[this.cactusMain,this.cactusArm].forEach(v=>{v.castShadow=!0,v.receiveShadow=!0,this.cactus.add(v)}),this.shelf.add(this.cactus),this.book=th(this.shelf,u,this.bookPagesMaterial,f),this.bookTwo=th(this.shelf,d,this.bookPagesMaterial,g),this.applyAll()}applyShelfTransform(){this.shelf.geometry.dispose(),this.shelf.geometry=Kc(this.shelfConfig.width,this.shelfConfig.height,this.shelfConfig.depth,this.shelfConfig.radius),this.shelf.position.set(this.shelfConfig.x,this.shelfConfig.y,this.shelfConfig.z),this.shelf.rotation.x=N(this.shelfConfig.rotX),this.shelf.rotation.y=N(this.shelfConfig.rotY),this.shelf.rotation.z=N(this.shelfConfig.rotZ)}applyPotTransform(){this.pot.geometry.dispose(),this.pot.geometry=tr(this.potConfig.radius,this.potConfig.height,this.potConfig.neck,this.potConfig.bulge),this.pot.position.set(this.potConfig.x,this.potConfig.y,this.potConfig.z),this.pot.rotation.x=N(this.potConfig.rotX),this.pot.rotation.y=N(this.potConfig.rotY),this.pot.rotation.z=N(this.potConfig.rotZ),this.soil.geometry.dispose(),this.soil.geometry=new Kt(this.potConfig.soilRadius,this.potConfig.soilRadius,this.potConfig.soilHeight,32),this.soil.position.copy(this.pot.position),this.soil.rotation.copy(this.pot.rotation),this.soil.position.y+=this.potConfig.soilOffsetY}applyCactusTransform(){this.cactus.position.set(this.cactusConfig.x,this.cactusConfig.y,this.cactusConfig.z),this.cactus.rotation.x=N(this.cactusConfig.rotX),this.cactus.rotation.y=N(this.cactusConfig.rotY),this.cactus.rotation.z=N(this.cactusConfig.rotZ),this.cactusMain.geometry.dispose(),this.cactusMain.geometry=new mi(this.cactusConfig.mainRadius,28,28),this.cactusMain.scale.set(.9,this.cactusConfig.mainHeight/(this.cactusConfig.mainRadius*2),.72),this.cactusMain.position.set(this.cactusConfig.mainLean,0,0),this.cactusArm.geometry.dispose(),this.cactusArm.geometry=new mi(this.cactusConfig.armRadius,28,28),this.cactusArm.scale.set(.9,this.cactusConfig.armHeight/(this.cactusConfig.armRadius*2),.72),this.cactusArm.position.set(this.cactusConfig.armOffsetX,this.cactusConfig.armOffsetY,0),this.cactusArm.rotation.z=this.cactusConfig.armLean}applyBookModelTransform(t,e){t.cover.geometry.dispose(),t.cover.geometry=new te(e.width,e.height,e.depth),t.pages.geometry.dispose(),t.pages.geometry=new te(e.pagesWidth,e.pagesHeight,e.pagesDepth),t.pages.position.set(e.pagesX,e.pagesY,e.pagesZ),t.spine.geometry.dispose(),t.spine.geometry=new te(e.spineWidth,e.spineHeight,e.spineDepth),t.spine.position.set(e.spineX,e.spineY,e.spineZ),t.spine.rotation.y=N(e.spineRotY),t.group.position.set(e.x,e.y,e.z),t.group.rotation.x=N(e.rotX),t.group.rotation.y=N(e.rotY),t.group.rotation.z=N(e.rotZ)}applyBookTransform(){this.applyBookModelTransform(this.book,this.bookConfig)}applyBookTwoTransform(){this.applyBookModelTransform(this.bookTwo,this.bookTwoConfig)}applyAll(){this.applyShelfTransform(),this.applyPotTransform(),this.applyCactusTransform(),this.applyBookTransform(),this.applyBookTwoTransform()}getBookSections(){return[{title:"Orange Book",config:this.bookConfig,applyBookTransform:()=>this.applyBookTransform()},{title:"Blue Book",config:this.bookTwoConfig,applyBookTransform:()=>this.applyBookTwoTransform()}]}}class kv{constructor(t,e){this.config=e,this.group=new Wt,this.topMaterial=new Et({color:16250868,roughness:.94}),this.legMaterial=new Et({color:13148267,roughness:.88}),this.top=new lt(Jc(e.mainWidth,e.mainDepth,e.returnWidth,e.returnDepth,e.innerCut,e.thickness,e.radius),this.topMaterial),this.top.name="desk-top",this.top.castShadow=!0,this.top.receiveShadow=!0,this.group.add(this.top),this.legs=[];for(let n=0;n<5;n+=1){const s=new lt(new Kt(e.legRadius,e.legRadius*1.08,e.legHeight,20),this.legMaterial);s.name=`desk-leg-${n+1}`,s.castShadow=!0,s.receiveShadow=!0,this.group.add(s),this.legs.push(s)}t.add(this.group),this.apply()}apply(){this.top.castShadow=!0,this.top.receiveShadow=!0,this.top.geometry.dispose(),this.top.geometry=Jc(this.config.mainWidth,this.config.mainDepth,this.config.returnWidth,this.config.returnDepth,this.config.innerCut,this.config.thickness,this.config.radius);const t=-this.config.mainWidth/2,e=this.config.mainWidth/2,n=-this.config.mainDepth/2,s=this.config.mainDepth/2,o=t+this.config.returnWidth,r=this.config.returnDepth/2,a=Math.max(this.config.legRadius*1.8,this.config.legInset),l=-(this.config.legHeight/2+this.config.thickness/2),c=[[t+a,l,n+a],[e-a,l,n+a],[e-a,l,s-a],[t+a,l,r-a],[o-a,l,r-a]];this.legs.forEach((h,u)=>{h.castShadow=!1,h.receiveShadow=!0,h.geometry.dispose(),h.geometry=new Kt(this.config.legRadius,this.config.legRadius*1.08,this.config.legHeight,20),h.position.set(...c[u]),h.rotation.set(0,0,0)}),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.set(0,0,0),this.top.position.set(this.config.topX,this.config.topY,this.config.topZ),this.top.rotation.x=N(this.config.rotX),this.top.rotation.y=N(this.config.rotY),this.top.rotation.z=N(this.config.rotZ)}}class Hv{constructor(t,e){this.config=e;const n=new Et({color:12112367,roughness:.9}),s=new Et({color:14280955,roughness:.95}),o=new Et({color:16250868,roughness:.95});this.group=new Wt,this.frame=new lt(jc(e.width,e.height,e.depth,e.innerInset),n),this.frame.name="picture-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.inner=new lt($c(e.width,e.height,.03,e.innerInset),s),this.inner.name="picture-inner",this.inner.receiveShadow=!0,this.group.add(this.inner),this.sun=new lt(new Kt(.18,.18,.03,24),o),this.sun.name="picture-sun",this.sun.rotation.x=Math.PI/2,this.group.add(this.sun),this.mountainA=new lt(Io(.72,.55,.03),o),this.mountainA.name="picture-mountain-a",this.group.add(this.mountainA),this.mountainB=new lt(Io(.44,.34,.03),o),this.mountainB.name="picture-mountain-b",this.group.add(this.mountainB),t.add(this.group),this.apply()}apply(){this.frame.geometry.dispose(),this.frame.geometry=jc(this.config.width,this.config.height,this.config.depth,this.config.innerInset),this.inner.geometry.dispose(),this.inner.geometry=$c(this.config.width,this.config.height,.03,this.config.innerInset),this.inner.position.z=this.config.depth*.18,this.sun.geometry.dispose(),this.sun.geometry=new Kt(this.config.sunRadius,this.config.sunRadius,.03,24),this.sun.position.set(this.config.sunX,this.config.sunY,.06),this.mountainA.geometry.dispose(),this.mountainA.geometry=Io(this.config.mountainAWidth,this.config.mountainAHeight,.03),this.mountainA.position.set(this.config.mountainAX,this.config.mountainAY,.05),this.mountainA.scale.set(this.config.mountainAScaleX,this.config.mountainAScaleY,this.config.mountainAScaleZ),this.mountainA.rotation.z=N(this.config.mountainARotZ),this.mountainB.geometry.dispose(),this.mountainB.geometry=Io(this.config.mountainBWidth,this.config.mountainBHeight,.03),this.mountainB.position.set(this.config.mountainBX,this.config.mountainBY,.05),this.mountainB.scale.set(this.config.mountainBScaleX,this.config.mountainBScaleY,this.config.mountainBScaleZ),this.mountainB.rotation.z=N(this.config.mountainBRotZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ)}}function eh(i,t,e,n){const s=new Re(Xe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}function nh(i,t,e,n,s){const o=new Re(Xe(i-n*2,t-n*2,Math.max(.08,s-n*.5)),{depth:e,bevelEnabled:!1,curveSegments:20});return o.center(),o}function ih(i,t){const e=new lt(new te(i,.045,.01),new Et({color:t,roughness:.92}));return e.castShadow=!1,e.receiveShadow=!1,e}function Xv(i){for(;i.children.length>0;){const t=i.children.pop();i.remove(t),t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&t.material.dispose()}}class wu{constructor(t,e){this.config=e,this.group=new Wt,this.frameMaterial=new Et({color:7104383,roughness:.88}),this.screenMaterial=new Et({color:3488321,roughness:.95}),this.standMaterial=new Et({color:5459299,roughness:.9}),this.frame=new lt(eh(e.width,e.height,e.depth,e.radius),this.frameMaterial),this.frame.name="monitor-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.screen=new lt(nh(e.width,e.height,e.screenDepth,e.screenInset,e.radius),this.screenMaterial),this.screen.name="monitor-screen",this.screen.receiveShadow=!0,this.group.add(this.screen),this.content=new Wt,this.content.name="monitor-content",this.screen.add(this.content),this.stem=new lt(new te(e.standWidth,e.standHeight,e.standDepth),this.standMaterial),this.stem.name="monitor-stem",this.stem.castShadow=!0,this.stem.receiveShadow=!0,this.group.add(this.stem),this.base=new lt(new te(e.baseWidth,e.baseHeight,e.baseDepth),this.standMaterial),this.base.name="monitor-base",this.base.castShadow=!0,this.base.receiveShadow=!0,this.group.add(this.base),t.add(this.group),this.apply()}buildCodeContent(){const t=[14195768,12048207,11497958,9146520,15044504,14195768,12048207,11497958,9146520,14195768,12048207,15044504,11497958,12048207],e=[.92,1.18,.74,.52,.66,1.08,.82,1.26,.64,1.02,.78,.56,.88,.68],n=[0,.14,.28,.28,.14,0,.16,.3,.3,.16,0,.14,.28,0],s=Math.floor(this.config.codeVariant??0),o=this.config.codeWidthScale??1,r=Math.floor(this.config.codeScroll??0),a=Math.floor(this.config.codeActiveLine??e.length-1)%e.length,l=this.config.codeTypingProgress??1,c=t.map((v,m)=>t[(m+s)%t.length]),h=e.map((v,m)=>e[(m+s*3)%e.length]*o),u=-this.config.width*.34+(this.config.codeX??0),f=this.config.height*.26+(this.config.codeY??0);let d=u,g=f;if(c.forEach((v,m)=>{const p=(m+r)%c.length,T=m,S=m===a,E=h[p]*(S?Math.max(.16,l):1),O=n[(p+s)%n.length],R=ih(E,c[p]),C=u+O,D=f-T*this.config.lineGap;R.name=`monitor-line-${m+1}`,R.position.set(C+E/2,D,this.config.screenDepth*.7),this.content.add(R),S&&(d=C+E+.04,g=D)}),this.config.codeCursorVisible){const v=new lt(new te(.025,.065,.01),new Et({color:16052444,roughness:.92}));v.position.set(d,g,this.config.screenDepth*.72),this.content.add(v)}}buildUiContent(){const t=new Et({color:2830133,roughness:.95}),e=new Et({color:3488321,roughness:.95}),n=new Et({color:3817285,roughness:.95}),s=new Et({color:7314136,roughness:.92}),o=new Et({color:13851747,roughness:.92}),r=this.config.uiActiveIconIndex??0,a=this.config.uiDotIconIndex??r,l=[],c=new lt(new te(this.config.width*(this.config.uiSidebarWidth??.06),this.config.height*.82,.01),t);c.position.set(this.config.uiSidebarX??-this.config.width*.35,0,this.config.screenDepth*.7),this.content.add(c);const h=new lt(new te(this.config.width*(this.config.uiPanelWidth??.13),this.config.height*.82,.01),e);h.position.set(this.config.uiPanelX??-this.config.width*.2,0,this.config.screenDepth*.68),this.content.add(h);const u=this.config.uiTopIconWidth??.22,f=new lt(new te(u,u,.01),r===0?s:n);f.position.set(this.config.uiTopIconX??-this.config.width*.43,this.config.uiTopIconY??this.config.height*.28,this.config.screenDepth*.75),this.content.add(f),l.push({x:f.position.x,y:f.position.y});for(let m=0;m<3;m+=1){const p=this.config.uiIconWidth??.18,T=new lt(new te(p,p,.01),r===m+1?s:n);T.position.set(this.config.uiIconX??-this.config.width*.43,(this.config.uiIconStartY??this.config.height*.02)-m*(this.config.uiIconGap??.3),this.config.screenDepth*.74),this.content.add(T),l.push({x:T.position.x,y:T.position.y})}if(this.config.uiDotVisible??!0){const m=l[Kn.clamp(Math.floor(a),0,l.length-1)],p=new lt(new Kt(.035,.035,.01,18),o);p.rotation.x=Math.PI/2,p.position.set(m.x+(this.config.uiDotX??0),m.y+(this.config.uiDotY??0),this.config.screenDepth*.76),this.content.add(p)}const d=this.config.uiLinesWidthScale??1,g=[.52,.42,.48,.34,.44,.28,.38].map(m=>m*d),v=this.config.uiLinesScroll??0;g.forEach((m,p)=>{const T=ih(m,12633290),S=(p+v)%g.length;T.position.set((this.config.uiLinesX??-this.config.width*.07)+m*.5,(this.config.uiLinesY??this.config.height*.31)-S*(this.config.uiLineGap??.12),this.config.screenDepth*.76),this.content.add(T)})}buildContent(){if(Xv(this.content),this.config.screenMode==="ui"){this.buildUiContent();return}this.buildCodeContent()}apply(){this.frame.geometry.dispose(),this.frame.geometry=eh(this.config.width,this.config.height,this.config.depth,this.config.radius),this.screen.geometry.dispose(),this.screen.geometry=nh(this.config.width,this.config.height,this.config.screenDepth,this.config.screenInset,this.config.radius),this.screen.position.z=this.config.depth*.12,this.stem.geometry.dispose(),this.stem.geometry=new te(this.config.standWidth,this.config.standHeight,this.config.standDepth),this.stem.position.set(0,-this.config.height*.52,-this.config.standOffsetZ),this.stem.rotation.x=N(this.config.standRotX),this.stem.rotation.z=N(this.config.standRotZ),this.base.geometry.dispose(),this.base.geometry=new te(this.config.baseWidth,this.config.baseHeight,this.config.baseDepth),this.base.position.set(0,-this.config.height*.82+this.config.baseOffsetY,this.config.baseOffsetZ),this.base.rotation.x=N(this.config.baseRotX),this.base.rotation.z=N(this.config.baseRotZ),this.buildContent(),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ)}}function Gv(i,t,e,n){const s=new us;s.moveTo(0,-t/2),s.bezierCurveTo(i*.55,-t*.28,i*.62,t*.22,0,t/2),s.bezierCurveTo(-i*.62,t*.22,-i*.55,-t*.28,0,-t/2);const o=new Re(s,{depth:e,bevelEnabled:!0,bevelSegments:10,bevelSize:i*n.bevelSize,bevelThickness:e*n.bevelThickness,curveSegments:24});o.center();const r=o.attributes.position,a=i*.5,l=t*.5;for(let c=0;c<r.count;c+=1){const h=r.getX(c),u=r.getY(c);let f=r.getZ(c);const d=Math.max(0,1-Math.abs(h)/a),g=Math.max(0,1-Math.abs(u)/l),v=d*g,m=Math.max(0,1-Math.abs(h)/(a*n.ridgeWidth))*g,p=e*n.bodyBulge*v+e*n.ridgeBulge*m;f+=f>=0?p:-p,r.setZ(c,f)}return r.needsUpdate=!0,o.computeVertexNormals(),o}function Jr(i){const t=new lt(new te(.1,.1,.02),i);return t.castShadow=!0,t.receiveShadow=!0,t}class Vv{constructor(t,e,n){this.potConfig=e,this.plantConfig=n,this.group=new Wt,this.potMaterial=new Et({color:16316661,roughness:.94}),this.bandMaterial=new Et({color:13152922,roughness:.96}),this.soilMaterial=new Et({color:7097138,roughness:1}),this.leafMaterial=new Et({color:10936089,roughness:.86}),this.pot=new lt(tr(e.radius,e.height,e.neck,e.bulge),this.potMaterial),this.pot.castShadow=!0,this.pot.receiveShadow=!0,this.group.add(this.pot),this.middleBand=new lt(new Kt(.3,.32,.1,48),this.bandMaterial),this.middleBand.castShadow=!1,this.middleBand.receiveShadow=!0,this.group.add(this.middleBand),this.bottomBand=new lt(new Kt(.28,.3,.08,48),this.bandMaterial),this.bottomBand.castShadow=!1,this.bottomBand.receiveShadow=!0,this.group.add(this.bottomBand),this.soil=new lt(new Kt(.12,.12,.03,32),this.soilMaterial),this.soil.receiveShadow=!0,this.group.add(this.soil),this.plant=new Wt,this.centerLeaf=Jr(this.leafMaterial),this.leftLeaf=Jr(this.leafMaterial),this.rightLeaf=Jr(this.leafMaterial),this.plant.add(this.centerLeaf,this.leftLeaf,this.rightLeaf),this.group.add(this.plant),t.add(this.group),this.applyPot(),this.applyPlant()}applyPot(){this.pot.geometry.dispose(),this.pot.geometry=tr(this.potConfig.radius,this.potConfig.height,this.potConfig.neck,this.potConfig.bulge),this.group.position.set(this.potConfig.x,this.potConfig.y,this.potConfig.z),this.group.rotation.x=N(this.potConfig.rotX),this.group.rotation.y=N(this.potConfig.rotY),this.group.rotation.z=N(this.potConfig.rotZ),this.middleBand.geometry.dispose(),this.middleBand.geometry=new Kt(this.potConfig.bandRadiusTop,this.potConfig.bandRadiusBottom,this.potConfig.bandHeight,48),this.middleBand.position.set(0,this.potConfig.bandY,0),this.bottomBand.geometry.dispose(),this.bottomBand.geometry=new Kt(this.potConfig.bottomBandRadiusTop,this.potConfig.bottomBandRadiusBottom,this.potConfig.bottomBandHeight,48),this.bottomBand.position.set(0,this.potConfig.bottomBandY,0),this.soil.geometry.dispose(),this.soil.geometry=new Kt(this.potConfig.soilRadius,this.potConfig.soilRadius,this.potConfig.soilHeight,32),this.soil.position.set(0,this.potConfig.soilY,0)}applyLeaf(t,e,n,s,o,r,a,l,c,h){t.geometry.dispose(),t.geometry=Gv(e,n,s,{bevelSize:this.plantConfig.bevelSize,bevelThickness:this.plantConfig.bevelThickness,bodyBulge:this.plantConfig.bodyBulge,ridgeBulge:this.plantConfig.ridgeBulge,ridgeWidth:this.plantConfig.ridgeWidth}),t.position.set(o,r,a),t.rotation.x=N(l),t.rotation.y=N(c),t.rotation.z=N(h)}applyPlant(){this.plant.position.set(this.plantConfig.x,this.plantConfig.y,this.plantConfig.z),this.plant.rotation.x=N(this.plantConfig.rotX),this.plant.rotation.y=N(this.plantConfig.rotY),this.plant.rotation.z=N(this.plantConfig.rotZ),this.applyLeaf(this.centerLeaf,this.plantConfig.centerWidth,this.plantConfig.centerHeight,this.plantConfig.depth,this.plantConfig.centerX,this.plantConfig.centerY,this.plantConfig.centerZ,this.plantConfig.centerRotX,this.plantConfig.centerRotY,this.plantConfig.centerRotZ),this.applyLeaf(this.leftLeaf,this.plantConfig.leftWidth,this.plantConfig.leftHeight,this.plantConfig.depth,this.plantConfig.leftX,this.plantConfig.leftY,this.plantConfig.leftZ,this.plantConfig.leftRotX,this.plantConfig.leftRotY,this.plantConfig.leftRotZ),this.applyLeaf(this.rightLeaf,this.plantConfig.rightWidth,this.plantConfig.rightHeight,this.plantConfig.depth,this.plantConfig.rightX,this.plantConfig.rightY,this.plantConfig.rightZ,this.plantConfig.rightRotX,this.plantConfig.rightRotY,this.plantConfig.rightRotZ)}}function Oo(i,t,e,n){const s=new Re(Xe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:16});return s.center(),s}class Yv{constructor(t,e,n){this.keyboardConfig=e,this.mouseConfig=n,this.keyboardMaterial=new Et({color:15330543,roughness:.94}),this.keyMaterial=new Et({color:16185336,roughness:.9}),this.mouseMaterial=new Et({color:14673130,roughness:.93}),this.keyboard=new Wt,this.keyboardBody=new lt(Oo(1,.35,.05,.08),this.keyboardMaterial),this.keyboardBody.castShadow=!0,this.keyboardBody.receiveShadow=!0,this.keyboard.add(this.keyboardBody),this.keys=[],this.createKeys(),this.mouse=new Wt,this.mouseBody=new lt(Oo(.22,.34,.06,.1),this.mouseMaterial),this.mouseBody.castShadow=!0,this.mouseBody.receiveShadow=!0,this.mouse.add(this.mouseBody),this.mouseSplit=new lt(new te(.008,.12,.008),new Et({color:13028563,roughness:.9})),this.mouse.add(this.mouseSplit),t.add(this.keyboard,this.mouse),this.applyKeyboard(),this.applyMouse()}createKeys(){this.keys.forEach(n=>{this.keyboard.remove(n),n.geometry.dispose()}),this.keys=[];const t=Math.max(1,Math.round(this.keyboardConfig.keyRows)),e=Math.max(1,Math.round(this.keyboardConfig.keyCols));for(let n=0;n<t;n+=1)for(let s=0;s<e;s+=1){const o=new lt(new te(.07,.05,.012),this.keyMaterial);o.castShadow=!1,o.receiveShadow=!0,this.keyboard.add(o),this.keys.push(o)}}applyKeyboard(){this.keyboardBody.geometry.dispose(),this.keyboardBody.geometry=Oo(this.keyboardConfig.width,this.keyboardConfig.height,this.keyboardConfig.depth,this.keyboardConfig.radius),this.keyboard.position.set(this.keyboardConfig.x,this.keyboardConfig.y,this.keyboardConfig.z),this.keyboard.rotation.x=N(this.keyboardConfig.rotX),this.keyboard.rotation.y=N(this.keyboardConfig.rotY),this.keyboard.rotation.z=N(this.keyboardConfig.rotZ);const t=Math.max(1,Math.round(this.keyboardConfig.keyCols)),e=Math.max(1,Math.round(this.keyboardConfig.keyRows));this.keys.length!==t*e&&this.createKeys();const n=this.keyboardConfig.width*.95,s=this.keyboardConfig.height*.74,o=n/t*this.keyboardConfig.keyWidthScale,r=s/e*this.keyboardConfig.keyHeightScale;this.keys.forEach((a,l)=>{const c=l%t,h=Math.floor(l/t);a.geometry.dispose(),a.geometry=new te(o,r,this.keyboardConfig.keyDepth),a.position.set(-n/2+c*(n/t)+o*.5,s/2-h*(s/e)-r*.5,this.keyboardConfig.depth*.35)})}applyMouse(){this.mouseBody.geometry.dispose(),this.mouseBody.geometry=Oo(this.mouseConfig.width,this.mouseConfig.height,this.mouseConfig.depth,this.mouseConfig.radius),this.mouse.position.set(this.mouseConfig.x,this.mouseConfig.y,this.mouseConfig.z),this.mouse.rotation.x=N(this.mouseConfig.rotX),this.mouse.rotation.y=N(this.mouseConfig.rotY),this.mouse.rotation.z=N(this.mouseConfig.rotZ),this.mouseSplit.position.set(0,this.mouseConfig.height*.14,this.mouseConfig.depth*.4),this.mouseSplit.scale.y=this.mouseConfig.splitHeight}}function Uo(i,t,e,n){const s=new Re(Xe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}class Wv{constructor(t,e){this.config=e,this.bodyMaterial=new Et({color:14721823,roughness:.82}),this.frontMaterial=new Et({color:16250095,roughness:.95}),this.coneMaterial=new Et({color:5197927,roughness:.88}),this.group=new Wt,this.body=new lt(Uo(.8,1,.6,.08),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.frontPanel=new lt(Uo(.62,.82,.04,.04),this.frontMaterial),this.frontPanel.castShadow=!0,this.frontPanel.receiveShadow=!0,this.group.add(this.frontPanel),this.cone=new lt(new Kt(.19,.19,.06,32),this.coneMaterial),this.cone.castShadow=!0,this.cone.receiveShadow=!0,this.cone.rotation.x=Math.PI/2,this.group.add(this.cone),this.smallCone=new lt(new Kt(.08,.08,.03,32),this.coneMaterial),this.smallCone.castShadow=!0,this.smallCone.receiveShadow=!0,this.smallCone.rotation.x=Math.PI/2,this.group.add(this.smallCone),t.add(this.group),this.apply()}apply(){this.body.geometry.dispose(),this.body.geometry=Uo(this.config.width,this.config.height,this.config.depth,this.config.radius),this.frontPanel.geometry.dispose(),this.frontPanel.geometry=Uo(this.config.panelWidth,this.config.panelHeight,this.config.panelDepth,this.config.panelRadius),this.frontPanel.position.set(this.config.panelX,this.config.panelY,this.config.panelZ),this.cone.geometry.dispose(),this.cone.geometry=new Kt(this.config.coneRadius,this.config.coneRadius,this.config.coneDepth,32),this.cone.position.set(this.config.coneX,this.config.coneY,this.config.coneZ),this.smallCone.geometry.dispose(),this.smallCone.geometry=new Kt(this.config.smallConeRadius,this.config.smallConeRadius,this.config.smallConeDepth,32),this.smallCone.position.set(this.config.smallConeX,this.config.smallConeY,this.config.smallConeZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ)}setConePulse(t){this.cone.scale.set(t,1,t)}}class Zv{constructor(t,e){this.config=e,this.group=new Wt,this.bodyMaterial=new Et({color:e.bodyColor,roughness:.9}),this.coffeeMaterial=new Et({color:e.coffeeColor,roughness:.78}),this.handleMaterial=new Et({color:e.bodyColor,roughness:.9}),this.body=new lt(new Kt(.4,.36,.7,48),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.coffee=new lt(new Kt(.32,.32,.02,48),this.coffeeMaterial),this.coffee.receiveShadow=!0,this.group.add(this.coffee),this.handle=new lt(new ls(.24,.04,12,32,Math.PI*1.32),this.handleMaterial),this.handle.castShadow=!0,this.handle.receiveShadow=!0,this.group.add(this.handle),this.steamGroup=new Wt,this.steamLines=[],this.group.add(this.steamGroup),t.add(this.group),this.apply()}rebuildSteam(){for(;this.steamGroup.children.length>0;){const e=this.steamGroup.children.pop();this.steamGroup.remove(e),e.geometry.dispose(),e.material.dispose()}this.steamLines=[];const t=Math.max(0,Math.round(this.config.steamCount));for(let e=0;e<t;e+=1){const n=new Ye,s=new rs({color:this.config.steamColor,transparent:!0,opacity:this.config.steamOpacity,depthWrite:!1}),o=new lt(n,s);this.steamGroup.add(o),this.steamLines.push(o)}}apply(){this.bodyMaterial.color.set(this.config.bodyColor),this.handleMaterial.color.set(this.config.bodyColor),this.coffeeMaterial.color.set(this.config.coffeeColor),this.body.geometry.dispose(),this.body.geometry=new Kt(this.config.topRadius,this.config.bottomRadius,this.config.height,48),this.body.position.set(0,this.config.height*.5,0),this.coffee.geometry.dispose(),this.coffee.geometry=new Kt(this.config.coffeeRadius,this.config.coffeeRadius,this.config.coffeeDepth,48),this.coffee.position.set(0,this.config.height+this.config.coffeeOffsetY,0),this.handle.geometry.dispose(),this.handle.geometry=new ls(this.config.handleRadius,this.config.handleTube,12,32,Math.PI*this.config.handleArc),this.handle.position.set(this.config.handleX,this.config.handleY,this.config.handleZ),this.handle.rotation.x=N(this.config.handleRotX),this.handle.rotation.y=N(this.config.handleRotY),this.handle.rotation.z=N(this.config.handleRotZ),this.handle.scale.set(this.config.handleScaleX,this.config.handleScaleY,this.config.handleScaleZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ),this.steamGroup.position.set(this.config.steamOffsetX,this.config.height+.06+this.config.steamOffsetY,this.config.steamOffsetZ),this.steamGroup.rotation.x=N(-this.config.rotX+this.config.steamRotX),this.steamGroup.rotation.y=N(-this.config.rotY+this.config.steamRotY),this.steamGroup.rotation.z=N(-this.config.rotZ+this.config.steamRotZ),this.rebuildSteam()}updateSteam(t){if(!this.config.steamEnabled){this.steamGroup.visible=!1;return}this.steamGroup.visible=!0;const e=this.config.steamSpeed,n=this.config.steamSpread,s=this.config.steamHeight;this.steamLines.forEach((o,r)=>{o.material.color.set(this.config.steamColor),o.material.opacity=this.config.steamOpacity;const a=r/Math.max(1,this.steamLines.length)*Math.PI*2,l=t*.0012*e+r*1.7,c=Math.cos(a)*n*.26,h=Math.sin(a)*n*.18,u=[];for(let f=0;f<8;f+=1){const d=f/7,g=Math.sin(l+d*Math.PI*2.2)*n*d,v=Math.cos(l*.8+d*Math.PI*1.9)*n*.45*d;u.push(new P(c+g,d*s,h+v))}o.geometry.dispose(),o.geometry=new Vs(new rl(u),16,this.config.steamThickness,6,!1)})}}function No(i,t,e,n){const s=new Re(Xe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:18});return s.center(),s}class qv{constructor(t,e){this.config=e,this.group=new Wt,this.bodyMaterial=new Et({color:e.bodyColor,roughness:.86}),this.screenMaterial=new Et({color:e.screenColor,roughness:.72,emissive:e.screenColor,emissiveIntensity:.06}),this.detailMaterial=new Et({color:e.detailColor,roughness:.9}),this.timeMaterial=new rs({color:e.timeColor}),this.fingerprintMaterial=new rs({color:e.fingerprintColor,transparent:!0,opacity:.8}),this.body=new lt(No(.5,.92,.06,.08),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.screen=new lt(No(.42,.74,.012,.055),this.screenMaterial),this.screen.castShadow=!1,this.screen.receiveShadow=!0,this.group.add(this.screen),this.cameraDot=new lt(new Kt(.025,.025,.012,18),this.detailMaterial),this.cameraDot.rotation.x=Math.PI/2,this.group.add(this.cameraDot),this.timeGroup=new Wt,this.group.add(this.timeGroup),this.fingerprint=new lt(new Kt(.035,.035,.012,32),this.fingerprintMaterial),this.fingerprint.rotation.x=Math.PI/2,this.group.add(this.fingerprint),t.add(this.group),this.apply()}clearTime(){for(;this.timeGroup.children.length>0;){const t=this.timeGroup.children.pop();this.timeGroup.remove(t),t.geometry.dispose()}}addSegment(t,e,n,s,o){const r=new lt(new te(o?n:s,o?s:n,this.config.timeThickness),this.timeMaterial);r.position.set(t,e,0),this.timeGroup.add(r)}addDigit(t,e){const n={0:["a","b","c","d","e","f"],1:["b","c"],2:["a","b","g","e","d"],3:["a","b","g","c","d"],4:["f","g","b","c"],5:["a","f","g","c","d"],6:["a","f","g","e","c","d"],7:["a","b","c"],8:["a","b","c","d","e","f","g"],9:["a","b","c","d","f","g"]}[t],s=this.config.timeWidth,o=this.config.timeHeight,r=Math.max(.004,s*.18);if(!n){this.addSegment(e+s*.5,0,r,r,!0),this.addSegment(e+s*.5,o*.36,r,r,!0);return}n.includes("a")&&this.addSegment(e+s*.5,o,s,r,!0),n.includes("g")&&this.addSegment(e+s*.5,o*.5,s,r,!0),n.includes("d")&&this.addSegment(e+s*.5,0,s,r,!0),n.includes("f")&&this.addSegment(e,o*.75,o*.5,r,!1),n.includes("b")&&this.addSegment(e+s,o*.75,o*.5,r,!1),n.includes("e")&&this.addSegment(e,o*.25,o*.5,r,!1),n.includes("c")&&this.addSegment(e+s,o*.25,o*.5,r,!1)}buildTime(){this.clearTime(),this.timeMaterial.color.set(this.config.timeColor);let t=0;String(this.config.timeText).split("").forEach(e=>{this.addDigit(e,t),t+=e===":"?this.config.timeWidth*.55:this.config.timeWidth+this.config.timeGap}),this.timeGroup.position.set(this.config.timeX,this.config.timeY,this.config.depth*.68+this.config.timeZ),this.timeGroup.rotation.x=N(this.config.timeRotX),this.timeGroup.rotation.y=N(this.config.timeRotY),this.timeGroup.rotation.z=N(this.config.timeRotZ)}apply(){this.bodyMaterial.color.set(this.config.bodyColor),this.screenMaterial.color.set(this.config.screenColor),this.screenMaterial.emissive.set(this.config.screenColor),this.screenMaterial.emissiveIntensity=this.config.screenGlow,this.detailMaterial.color.set(this.config.detailColor),this.timeMaterial.color.set(this.config.timeColor),this.fingerprintMaterial.color.set(this.config.fingerprintColor),this.body.geometry.dispose(),this.body.geometry=No(this.config.width,this.config.height,this.config.depth,this.config.radius),this.screen.geometry.dispose(),this.screen.geometry=No(this.config.screenWidth,this.config.screenHeight,this.config.screenDepth,this.config.screenRadius),this.screen.position.set(this.config.screenX,this.config.screenY,this.config.depth*.52+this.config.screenZ),this.cameraDot.geometry.dispose(),this.cameraDot.geometry=new Kt(this.config.cameraRadius,this.config.cameraRadius,this.config.cameraDepth,18),this.cameraDot.position.set(this.config.cameraX,this.config.cameraY,this.config.depth*.62+this.config.cameraZ),this.buildTime(),this.fingerprint.geometry.dispose(),this.fingerprint.geometry=new Kt(this.config.fingerprintRadius,this.config.fingerprintRadius,this.config.fingerprintDepth,32),this.fingerprint.position.set(this.config.fingerprintX,this.config.fingerprintY,this.config.depth*.68+this.config.fingerprintZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ)}}function sh(i,t,e,n){const s=new Re(Xe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:24});return s.center(),s}class Kv{constructor(t,e){this.config=e,this.group=new Wt,this.colors=[15176470,16116360,15772458,16182938],this.layers=this.colors.map((n,s)=>{const o=new lt(sh(1,1,.04,.1),new Et({color:n,roughness:.95}));return o.name=`rug-layer-${s+1}`,o.castShadow=!1,o.receiveShadow=!0,o.rotation.x=-Math.PI/2,this.group.add(o),o}),t.add(this.group),this.apply()}apply(){const t=[{width:this.config.width,height:this.config.height,inset:0},{width:this.config.width-this.config.inset1*2,height:this.config.height-this.config.inset1*2,inset:this.config.inset1},{width:this.config.width-this.config.inset2*2,height:this.config.height-this.config.inset2*2,inset:this.config.inset2},{width:this.config.width-this.config.inset3*2,height:this.config.height-this.config.inset3*2,inset:this.config.inset3}];this.layers.forEach((e,n)=>{const s=t[n];e.geometry.dispose(),e.geometry=sh(Math.max(.2,s.width),Math.max(.2,s.height),this.config.depth,Math.max(.05,this.config.radius-n*this.config.radiusFalloff)),e.position.y=n*this.config.layerLift}),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ)}}function Fo(i,t,e,n){const s=new Re(Xe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}function oh(i,t,e){const n=t+e,s=new us;s.absarc(0,0,n,0,Math.PI/2,!1),s.lineTo(0,t),s.absarc(0,0,t,Math.PI/2,0,!0),s.closePath();const o=new Re(s,{depth:i,bevelEnabled:!1,curveSegments:24});return o.center(),o.rotateY(Math.PI/2),o}function rh(i){const t=[new P(-i.frameWidth/2,-i.frameDepth/2,0),new P(i.frameWidth/2,-i.frameDepth/2,0),new P(i.frameWidth/2,i.frameDepth/2,0),new P(i.backLegSpread/2,i.frameDepth/2,i.frameLift),new P(i.backLegSpread/2,i.frameDepth/2+i.backLegOffset,i.frameLift+i.backLegHeight),new P(-i.backLegSpread/2,i.frameDepth/2+i.backLegOffset,i.frameLift+i.backLegHeight),new P(-i.backLegSpread/2,i.frameDepth/2,i.frameLift),new P(-i.frameWidth/2,i.frameDepth/2,0),new P(-i.frameWidth/2,-i.frameDepth/2,0)];return new rl(t,!1,"catmullrom",.2)}class jv{constructor(t,e){this.config=e,this.shellMaterial=new Et({color:16118249,roughness:.96}),this.frameMaterial=new Et({color:9343128,roughness:.72,metalness:.25}),this.group=new Wt,this.shell=new Wt,this.shellBack=new lt(Fo(1,1,.1,.08),this.shellMaterial),this.shellBack.castShadow=!0,this.shellBack.receiveShadow=!0,this.shell.add(this.shellBack),this.shellSeat=new lt(Fo(1,1,.1,.08),this.shellMaterial),this.shellSeat.castShadow=!0,this.shellSeat.receiveShadow=!0,this.shell.add(this.shellSeat),this.shellBend=new lt(oh(1,.2,.1),this.shellMaterial),this.shellBend.castShadow=!0,this.shellBend.receiveShadow=!0,this.shell.add(this.shellBend),this.group.add(this.shell),this.frame=new lt(new Vs(rh(e),64,.06,18,!1),this.frameMaterial),this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),t.add(this.group),this.apply()}apply(){this.shellBack.geometry.dispose(),this.shellBack.geometry=Fo(this.config.shellBackWidth,this.config.shellBackHeight,this.config.shellBackDepth,this.config.shellBackRadius),this.shellBack.position.set(this.config.shellBackX,this.config.shellBackY,this.config.shellBackZ),this.shellBack.rotation.x=N(this.config.shellBackRotX),this.shellBack.rotation.y=N(this.config.shellBackRotY),this.shellBack.rotation.z=N(this.config.shellBackRotZ),this.shellSeat.geometry.dispose(),this.shellSeat.geometry=Fo(this.config.shellSeatWidth,this.config.shellSeatHeight,this.config.shellSeatDepth,this.config.shellSeatRadius),this.shellSeat.position.set(this.config.shellSeatX,this.config.shellSeatY,this.config.shellSeatZ),this.shellSeat.rotation.x=N(this.config.shellSeatRotX),this.shellSeat.rotation.y=N(this.config.shellSeatRotY),this.shellSeat.rotation.z=N(this.config.shellSeatRotZ),this.shellBend.geometry.dispose(),this.shellBend.geometry=oh(this.config.shellBendWidth,this.config.shellBendInnerRadius,this.config.shellBendThickness),this.shellBend.position.set(this.config.shellBendX,this.config.shellBendY,this.config.shellBendZ),this.shellBend.rotation.x=N(this.config.shellBendRotX),this.shellBend.rotation.y=N(this.config.shellBendRotY),this.shellBend.rotation.z=N(this.config.shellBendRotZ),this.shell.position.set(this.config.shellX,this.config.shellY,this.config.shellZ),this.shell.rotation.x=N(this.config.shellRotX),this.shell.rotation.y=N(this.config.shellRotY),this.shell.rotation.z=N(this.config.shellRotZ),this.frame.geometry.dispose(),this.frame.geometry=new Vs(rh(this.config),64,this.config.tubeRadius,18,!1),this.frame.position.set(this.config.frameX,this.config.frameY,this.config.frameZ),this.frame.rotation.x=N(this.config.frameRotX),this.frame.rotation.y=N(this.config.frameRotY),this.frame.rotation.z=N(this.config.frameRotZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ)}}function ur(i){return i.castShadow=!0,i.receiveShadow=!0,i}function Wn(i,t,e){return ur(new lt(new al(i,t,8,16),e))}function je(i,t){return ur(new lt(new mi(i,24,24),t))}function ah(i,t,e,n){return ur(new lt(new te(i,t,e),n))}function $v(i,t,e,n,s){const o=new Re(Xe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:16});return o.center(),ur(new lt(o,s))}function pn(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function Jv(){const i=document.createElement("canvas");i.width=16,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);return e.addColorStop(0,"rgba(255, 255, 255, 0)"),e.addColorStop(.16,"rgba(255, 255, 255, 0.85)"),e.addColorStop(.84,"rgba(255, 255, 255, 0.85)"),e.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=e,t.beginPath(),t.moveTo(8,0),t.quadraticCurveTo(14,0,14,8),t.lineTo(14,56),t.quadraticCurveTo(14,64,8,64),t.quadraticCurveTo(2,64,2,56),t.lineTo(2,8),t.quadraticCurveTo(2,0,8,0),t.fill(),new v_(i)}class Qv{constructor(t,e){this.config=e,this.skinMaterial=new Et({color:16240042,roughness:.95}),this.hairStripTexture=Jv(),this.hairStripObject=new De,this.hairBaseMaterial=new Et({color:1185052,roughness:.95}),this.shirtMaterial=new Et({color:3820880,roughness:.92}),this.sleeveMaterial=new Et({color:3820880,roughness:.92}),this.pelvisMaterial=new Et({color:2499895,roughness:.94}),this.pantsMaterial=new Et({color:1644587,roughness:.94}),this.sockMaterial=new Et({color:16250870,roughness:.96}),this.shoeMaterial=new Et({color:3948874,roughness:.9}),this.shoeToeMaterial=new Et({color:16185078,roughness:.95}),this.eyeWhiteMaterial=new Et({color:16777215,roughness:.92}),this.eyePupilMaterial=new Et({color:5911592,roughness:.85}),this.browMaterial=new Et({color:5911592,roughness:.9}),this.group=new Wt,this.group.name="character-root",t.add(this.group),this.buildBody(),this.apply()}buildBody(){this.torsoPivot=new Wt,this.group.add(this.torsoPivot),this.torso=Wn(.42,.75,this.shirtMaterial),this.torso.position.y=.6,this.torsoPivot.add(this.torso),this.pelvis=je(.32,this.pelvisMaterial),this.pelvis.scale.set(1.1,.75,.95),this.pelvis.position.y=.08,this.group.add(this.pelvis),this.headPivot=new Wt,this.headPivot.position.y=1.36,this.torsoPivot.add(this.headPivot),this.head=je(.55,this.skinMaterial),this.head.scale.set(1.08,1,1.03),this.headPivot.add(this.head),this.hairGroup=new Wt,this.headPivot.add(this.hairGroup),this.hairBase=je(.52,this.hairBaseMaterial),this.hairGroup.add(this.hairBase),this.hair=this.createHairStrips(45e3),this.hairGroup.add(this.hair),this.fringe=this.createHairStrips(360),this.hairGroup.add(this.fringe),this.earLeft=je(.12,this.skinMaterial),this.earLeft.position.set(-.5,-.02,.04),this.headPivot.add(this.earLeft),this.earRight=je(.12,this.skinMaterial),this.earRight.position.set(.5,-.02,.04),this.headPivot.add(this.earRight),this.leftEye=new Wt,this.leftEye.position.set(-.18,.02,.48),this.headPivot.add(this.leftEye),this.rightEye=new Wt,this.rightEye.position.set(.18,.02,.48),this.headPivot.add(this.rightEye),this.leftEyeWhite=je(.12,this.eyeWhiteMaterial),this.leftEyeWhite.scale.set(.92,1.08,.45),this.leftEye.add(this.leftEyeWhite),this.rightEyeWhite=je(.12,this.eyeWhiteMaterial),this.rightEyeWhite.scale.set(.92,1.08,.45),this.rightEye.add(this.rightEyeWhite),this.leftPupil=je(.065,this.eyePupilMaterial),this.leftPupil.position.z=.04,this.leftEye.add(this.leftPupil),this.rightPupil=je(.065,this.eyePupilMaterial),this.rightPupil.position.z=.04,this.rightEye.add(this.rightPupil),this.leftEyeHighlight=je(.018,this.eyeWhiteMaterial),this.leftEyeHighlight.position.set(.02,.025,.075),this.leftEye.add(this.leftEyeHighlight),this.rightEyeHighlight=je(.018,this.eyeWhiteMaterial),this.rightEyeHighlight.position.set(.02,.025,.075),this.rightEye.add(this.rightEyeHighlight),this.leftBrow=ah(.16,.04,.03,this.browMaterial),this.leftBrow.position.set(-.18,.23,.45),this.headPivot.add(this.leftBrow),this.rightBrow=ah(.16,.04,.03,this.browMaterial),this.rightBrow.position.set(.18,.23,.45),this.headPivot.add(this.rightBrow),this.mouth=new lt(new ls(.085,.012,8,28,Math.PI),this.browMaterial),this.mouth.position.set(0,-.18,.48),this.mouth.rotation.z=Math.PI,this.mouth.scale.set(1.15,.42,1),this.headPivot.add(this.mouth),this.leftArm=this.buildArm(-1),this.rightArm=this.buildArm(1),this.leftLeg=this.buildLeg(-1),this.rightLeg=this.buildLeg(1)}buildArm(t){const e=new Wt;e.position.set(t*.48,1.02,.02),this.torsoPivot.add(e);const n=Wn(.115,.5,this.skinMaterial);n.position.y=-.32,e.add(n);const s=Wn(.14,.56,this.sleeveMaterial);s.position.y=-.33,s.scale.set(1.08,1,1.02),e.add(s);const o=new Wt;o.position.y=-.56,e.add(o);const r=Wn(.105,.5,this.skinMaterial);r.position.y=-.26,o.add(r);const a=new Wt;a.position.y=-.52,o.add(a);const l=Wn(.105,.08,this.skinMaterial);return l.position.y=-.055,l.scale.set(1.02,.95,.76),a.add(l),{shoulder:e,elbow:o,wrist:a,upperArm:n,sleeve:s,lowerArm:r,hand:l}}buildLeg(t){const e=new Wt;e.position.set(t*.2,-.08,0),this.group.add(e);const n=Wn(.15,.64,this.pantsMaterial);n.position.y=-.46,e.add(n);const s=new Wt;s.position.y=-.82,e.add(s);const o=Wn(.13,.56,this.pantsMaterial);o.position.y=-.4,s.add(o);const r=Wn(.12,.08,this.sockMaterial);r.position.y=-.77,s.add(r);const a=new Wt;a.position.y=-.76,s.add(a);const l=new Wt,c=$v(.34,.045,.38,.035,this.shoeMaterial);l.add(c);const h=je(.18,this.shoeMaterial);l.add(h),a.add(l);const u=je(.13,this.shoeToeMaterial);return a.add(u),{hip:e,knee:s,ankle:a,upperLeg:n,lowerLeg:o,sock:r,shoe:l,sole:c,upperShoe:h,toe:u}}applyEyePupils(){const t=Kn.clamp(this.config.eyeYaw,-1,1),e=Kn.clamp(this.config.eyePitch,-1,1),n=t*.035,s=e*.028;this.leftPupil.position.x=n+this.config.pupilOffsetX,this.leftPupil.position.y=s+this.config.pupilOffsetY,this.leftPupil.position.z=this.config.pupilOffsetZ,this.rightPupil.position.x=n+this.config.pupilOffsetX,this.rightPupil.position.y=s+this.config.pupilOffsetY,this.rightPupil.position.z=this.config.pupilOffsetZ,this.leftEyeHighlight.position.x=n+this.config.eyeHighlightOffsetX,this.leftEyeHighlight.position.y=s+this.config.eyeHighlightOffsetY,this.leftEyeHighlight.position.z=this.config.eyeHighlightOffsetZ,this.rightEyeHighlight.position.x=n+this.config.eyeHighlightOffsetX,this.rightEyeHighlight.position.y=s+this.config.eyeHighlightOffsetY,this.rightEyeHighlight.position.z=this.config.eyeHighlightOffsetZ}createHairStrips(t){const e=this.createHairStripGeometry(),n=new rs({color:6962731,map:this.hairStripTexture,alphaTest:.08,transparent:!0,depthWrite:!1,side:_n}),s=new __(e,n,t);return s.frustumCulled=!1,s}createHairStripGeometry(){const t=new Ks(.03,.12,1,5),e=t.attributes.position;for(let n=0;n<e.count;n+=1){const o=(e.getY(n)+.06)/.12,r=Math.sin(o*Math.PI)*this.config.hairCurveX+o*o*this.config.hairCurveTipX;e.setX(n,e.getX(n)+r),e.setZ(n,e.getZ(n)+Math.sin(o*Math.PI*1.35)*this.config.hairCurveZ)}return e.needsUpdate=!0,t.computeVertexNormals(),t}apply(){const t=Kn.clamp(this.config.sitAmount,0,1),e=1.5;this.shirtMaterial.color.set(this.config.shirtColor??3820880),this.sleeveMaterial.color.set(this.config.sleeveColor??3820880),this.pelvisMaterial.color.set(this.config.pelvisColor??2499895),this.pantsMaterial.color.set(this.config.pantsColor??1644587),this.sockMaterial.color.set(this.config.sockColor??16250870),this.shoeMaterial.color.set(this.config.shoeColor??3948874),this.shoeToeMaterial.color.set(this.config.shoeToeColor??16185078),this.group.position.set(this.config.x+this.config.sitOffsetX*t,this.config.y+this.config.sitOffsetY*t,this.config.z+this.config.sitOffsetZ*t),this.group.rotation.x=N(this.config.rotX),this.group.rotation.y=N(this.config.rotY),this.group.rotation.z=N(this.config.rotZ),this.torso.scale.set(e*this.config.torsoScaleX,e*this.config.torsoScaleY,e*this.config.torsoScaleZ),this.torso.position.set(this.config.torsoOffsetX,.6*e+this.config.torsoOffsetY,this.config.torsoOffsetZ),this.pelvis.scale.set(1.18*e*this.config.pelvisScaleX,.62*e*this.config.pelvisScaleY,.92*e*this.config.pelvisScaleZ),this.pelvis.position.set(this.config.pelvisOffsetX,.08*e+this.config.pelvisOffsetY,this.config.pelvisOffsetZ),this.headPivot.position.set(this.config.headOffsetX,1.36*e+this.config.headOffsetY,this.config.headOffsetZ),this.head.scale.set(1.08*this.config.headScaleX,1*this.config.headScaleY,1.03*this.config.headScaleZ),this.applyHair(),this.earLeft.scale.set(this.config.earScaleX,this.config.earScaleY,this.config.earScaleZ),this.earRight.scale.set(this.config.earScaleX,this.config.earScaleY,this.config.earScaleZ),this.leftEyeWhite.scale.set(.92*this.config.eyeScaleX,1.08*this.config.eyeScaleY,.45*this.config.eyeScaleZ),this.rightEyeWhite.scale.set(.92*this.config.eyeScaleX,1.08*this.config.eyeScaleY,.45*this.config.eyeScaleZ),this.leftEyeWhite.rotation.set(N(this.config.leftEyeWhiteRotX),N(this.config.leftEyeWhiteRotY),N(this.config.leftEyeWhiteRotZ)),this.rightEyeWhite.rotation.set(N(this.config.rightEyeWhiteRotX),N(this.config.rightEyeWhiteRotY),N(this.config.rightEyeWhiteRotZ)),this.leftPupil.scale.setScalar(this.config.pupilScale),this.rightPupil.scale.setScalar(this.config.pupilScale),this.leftEyeHighlight.scale.setScalar(this.config.eyeHighlightScale),this.rightEyeHighlight.scale.setScalar(this.config.eyeHighlightScale),this.leftBrow.scale.set(this.config.browScaleX,this.config.browScaleY,this.config.browScaleZ),this.rightBrow.scale.set(this.config.browScaleX,this.config.browScaleY,this.config.browScaleZ),this.mouth.geometry.dispose(),this.mouth.geometry=new ls(this.config.mouthRadius,this.config.mouthTube,8,28,Math.PI*this.config.mouthArc),this.mouth.position.set(this.config.mouthOffsetX,this.config.mouthOffsetY,this.config.mouthOffsetZ),this.mouth.rotation.x=N(this.config.mouthRotX),this.mouth.rotation.y=N(this.config.mouthRotY),this.mouth.rotation.z=N(this.config.mouthRotZ),this.mouth.scale.set(this.config.mouthScaleX,this.config.mouthScaleY,this.config.mouthScaleZ),this.earLeft.position.set(-.5+this.config.leftEarOffsetX,-.02+this.config.leftEarOffsetY,.04+this.config.leftEarOffsetZ),this.earRight.position.set(.5+this.config.rightEarOffsetX,-.02+this.config.rightEarOffsetY,.04+this.config.rightEarOffsetZ),this.leftEye.position.set(-.18+this.config.leftEyeOffsetX,.02+this.config.leftEyeOffsetY,.48+this.config.leftEyeOffsetZ),this.rightEye.position.set(.18+this.config.rightEyeOffsetX,.02+this.config.rightEyeOffsetY,.48+this.config.rightEyeOffsetZ),this.leftBrow.position.set(-.18+this.config.leftBrowOffsetX,.23+this.config.leftBrowOffsetY,.45+this.config.leftBrowOffsetZ),this.rightBrow.position.set(.18+this.config.rightBrowOffsetX,.23+this.config.rightBrowOffsetY,.45+this.config.rightBrowOffsetZ),this.leftArm.shoulder.position.set(-.48*e+this.config.leftShoulderOffsetX,1.02*e+this.config.leftShoulderOffsetY,.02*e+this.config.leftShoulderOffsetZ),this.leftArm.shoulder.scale.set(e,e,e),this.leftArm.upperArm.scale.set(this.config.upperArmScaleX,this.config.upperArmScaleY,this.config.upperArmScaleZ),this.applySleeve(this.leftArm.sleeve),this.leftArm.lowerArm.scale.set(this.config.lowerArmScaleX,this.config.lowerArmScaleY,this.config.lowerArmScaleZ),this.leftArm.hand.scale.set(.95*this.config.handScaleX,1.12*this.config.handScaleY,.75*this.config.handScaleZ),this.rightArm.shoulder.position.set(.48*e+this.config.rightShoulderOffsetX,1.02*e+this.config.rightShoulderOffsetY,.02*e+this.config.rightShoulderOffsetZ),this.rightArm.shoulder.scale.set(e,e,e),this.rightArm.upperArm.scale.set(this.config.upperArmScaleX,this.config.upperArmScaleY,this.config.upperArmScaleZ),this.applySleeve(this.rightArm.sleeve),this.rightArm.lowerArm.scale.set(this.config.lowerArmScaleX,this.config.lowerArmScaleY,this.config.lowerArmScaleZ),this.rightArm.hand.scale.set(.95*this.config.handScaleX,1.12*this.config.handScaleY,.75*this.config.handScaleZ),this.leftArm.elbow.position.set(this.config.leftElbowOffsetX,-.62+this.config.leftElbowOffsetY,this.config.leftElbowOffsetZ),this.rightArm.elbow.position.set(this.config.rightElbowOffsetX,-.62+this.config.rightElbowOffsetY,this.config.rightElbowOffsetZ),this.leftLeg.hip.position.set(-.2*e+this.config.leftHipOffsetX,-.08*e+this.config.leftHipOffsetY,this.config.leftHipOffsetZ),this.leftLeg.hip.scale.set(e,e,e),this.leftLeg.upperLeg.scale.set(this.config.upperLegScaleX,this.config.upperLegScaleY,this.config.upperLegScaleZ),this.leftLeg.lowerLeg.scale.set(this.config.lowerLegScaleX,this.config.lowerLegScaleY,this.config.lowerLegScaleZ),this.applyFoot(this.leftLeg),this.rightLeg.hip.position.set(.2*e+this.config.rightHipOffsetX,-.08*e+this.config.rightHipOffsetY,this.config.rightHipOffsetZ),this.rightLeg.hip.scale.set(e,e,e),this.rightLeg.upperLeg.scale.set(this.config.upperLegScaleX,this.config.upperLegScaleY,this.config.upperLegScaleZ),this.rightLeg.lowerLeg.scale.set(this.config.lowerLegScaleX,this.config.lowerLegScaleY,this.config.lowerLegScaleZ),this.applyFoot(this.rightLeg),this.leftLeg.knee.position.set(this.config.leftKneeOffsetX,-.82+this.config.leftKneeOffsetY,this.config.leftKneeOffsetZ),this.rightLeg.knee.position.set(this.config.rightKneeOffsetX,-.82+this.config.rightKneeOffsetY,this.config.rightKneeOffsetZ),this.leftLeg.ankle.position.set(this.config.leftAnkleOffsetX,-.76+this.config.leftAnkleOffsetY,this.config.leftAnkleOffsetZ),this.rightLeg.ankle.position.set(this.config.rightAnkleOffsetX,-.76+this.config.rightAnkleOffsetY,this.config.rightAnkleOffsetZ),this.torsoPivot.rotation.x=N(this.config.torsoPitch+t*8),this.torsoPivot.rotation.y=N(this.config.torsoYaw),this.torsoPivot.rotation.z=N(this.config.torsoRoll),this.headPivot.rotation.x=N(this.config.headPitch),this.headPivot.rotation.y=N(this.config.headYaw),this.headPivot.rotation.z=N(this.config.headRoll),this.leftBrow.rotation.z=N(-10+this.config.browTilt),this.rightBrow.rotation.z=N(10-this.config.browTilt);const n=t*38,s=t*38,o=t*28,r=-t*96,a=t*96,l=-t*8;this.leftArm.shoulder.rotation.x=N(n+this.config.leftShoulderX),this.leftArm.shoulder.rotation.y=N(this.config.leftShoulderY),this.leftArm.shoulder.rotation.z=N(this.config.leftShoulderZ),this.leftArm.elbow.rotation.x=N(o+this.config.leftElbowX),this.leftArm.elbow.rotation.y=N(this.config.leftElbowY),this.leftArm.elbow.rotation.z=N(this.config.leftElbowZ),this.leftArm.wrist.rotation.x=N(this.config.leftWristX),this.leftArm.wrist.rotation.y=N(this.config.leftWristY),this.leftArm.wrist.rotation.z=N(this.config.leftWristZ),this.rightArm.shoulder.rotation.x=N(s+this.config.rightShoulderX),this.rightArm.shoulder.rotation.y=N(this.config.rightShoulderY),this.rightArm.shoulder.rotation.z=N(this.config.rightShoulderZ),this.rightArm.elbow.rotation.x=N(o+this.config.rightElbowX),this.rightArm.elbow.rotation.y=N(this.config.rightElbowY),this.rightArm.elbow.rotation.z=N(this.config.rightElbowZ),this.rightArm.wrist.rotation.x=N(this.config.rightWristX),this.rightArm.wrist.rotation.y=N(this.config.rightWristY),this.rightArm.wrist.rotation.z=N(this.config.rightWristZ),this.leftLeg.hip.rotation.x=N(r+this.config.leftHipX),this.leftLeg.hip.rotation.y=N(this.config.leftHipY),this.leftLeg.hip.rotation.z=N(this.config.leftHipZ),this.leftLeg.knee.rotation.x=N(a+this.config.leftKneeX),this.leftLeg.ankle.rotation.x=N(l+this.config.leftAnkleX),this.leftLeg.ankle.rotation.y=N(this.config.leftAnkleY),this.leftLeg.ankle.rotation.z=N(this.config.leftAnkleZ),this.rightLeg.hip.rotation.x=N(r+this.config.rightHipX),this.rightLeg.hip.rotation.y=N(this.config.rightHipY),this.rightLeg.hip.rotation.z=N(this.config.rightHipZ),this.rightLeg.knee.rotation.x=N(a+this.config.rightKneeX),this.rightLeg.ankle.rotation.x=N(l+this.config.rightAnkleX),this.rightLeg.ankle.rotation.y=N(this.config.rightAnkleY),this.rightLeg.ankle.rotation.z=N(this.config.rightAnkleZ),this.applyEyePupils()}applySleeve(t){const e=Kn.clamp(this.config.sleeveLength??1,.4,1.6),n=Kn.clamp(this.config.sleeveVolume??1,.6,1.8);t.position.y=.09-.42*e,t.scale.set(1.08*n,e,1.02*n)}applyHair(){this.hairGroup.position.set(0,0,0),this.hairGroup.rotation.set(0,0,0),this.hairGroup.scale.set(1,1,1),this.hair.geometry.dispose(),this.hair.geometry=this.createHairStripGeometry(),this.hairBaseMaterial.color.set(this.config.hairColor??1185052),this.hairBase.position.set(this.config.hairOffsetX+this.config.hairBaseOffsetX,this.config.hairOffsetY+this.config.hairBaseOffsetY,this.config.hairOffsetZ+this.config.hairBaseOffsetZ),this.hairBase.rotation.set(N(this.config.hairRotX+this.config.hairBaseRotX),N(this.config.hairRotY+this.config.hairBaseRotY),N(this.config.hairRotZ+this.config.hairBaseRotZ)),this.hairBase.scale.set(this.config.hairBaseScaleX*this.config.hairScaleX,this.config.hairBaseScaleY*this.config.hairScaleY,this.config.hairBaseScaleZ*this.config.hairScaleZ),this.updateHairCloud(this.hair,"hair",t=>{const e=pn(t,1)*Math.PI*2,n=Math.sqrt(pn(t,2)),s=Math.cos(e)*.49*n,o=-.07+Math.sin(e)*.43*n,r=Math.sqrt(Math.max(0,1-(s/.54)**2-((o+.06)/.48)**2)),a=(pn(t,3)-.5)*this.config.hairScatter;return[s+a*.4,.08+r*.44+a,o+a*.5]}),this.updateHairCloud(this.fringe,"fringe",t=>{const e=pn(t,11),n=pn(t,12),s=-.4+e*.74,o=Math.sin(e*Math.PI),r=.34-n*.23-o*.07,a=.33+n*.11+o*.04;return[s,r,a]})}updateHairCloud(t,e,n){const s=t.instanceMatrix.count,o=Math.min(s,Math.max(0,Math.round(this.config[`${e}Count`]))),r=this.hairStripObject,a=e==="hair"?this.config.hairParticleSize:this.config[`${e}ParticleSize`]*this.config.hairParticleSize;for(let l=0;l<o;l+=1){const[c,h,u]=n(l),f=(pn(l,44)-.5)*.9,d=(pn(l,45)-.5)*Math.PI,g=a*(.85+pn(l,46)*.55),v=a*(.16+pn(l,47)*.08);r.position.set(c,h,u),r.rotation.set(f,d,pn(l,48)*Math.PI),r.scale.set(v,g,1),r.updateMatrix(),t.setMatrixAt(l,r.matrix)}t.count=o,t.instanceMatrix.needsUpdate=!0,t.material.color.set(this.config.hairColor??6962731),t.material.opacity=e==="hair"?this.config.hairParticleOpacity:this.config[`${e}ParticleOpacity`],t.position.set(this.config[`${e}OffsetX`],this.config[`${e}OffsetY`],this.config[`${e}OffsetZ`]),t.rotation.set(N(this.config[`${e}RotX`]),N(this.config[`${e}RotY`]),N(this.config[`${e}RotZ`])),t.scale.set(this.config[`${e}ScaleX`],this.config[`${e}ScaleY`],this.config[`${e}ScaleZ`])}applyFoot(t){t.sock.position.set(this.config.sockOffsetX,-.77+this.config.sockOffsetY,this.config.sockOffsetZ),t.sock.rotation.set(N(this.config.sockRotX),N(this.config.sockRotY),N(this.config.sockRotZ)),t.sock.scale.set(this.config.sockScaleX,this.config.sockScaleY,this.config.sockScaleZ),t.shoe.position.set(this.config.shoeOffsetX,this.config.shoeOffsetY,this.config.shoeOffsetZ),t.shoe.rotation.set(N(this.config.shoeRotX),N(this.config.shoeRotY),N(this.config.shoeRotZ)),t.shoe.scale.set(this.config.shoeScaleX,this.config.shoeScaleY,this.config.shoeScaleZ),t.sole.position.set(this.config.soleOffsetX,this.config.soleOffsetY,this.config.soleOffsetZ),t.sole.rotation.set(N(this.config.soleRotX),N(this.config.soleRotY),N(this.config.soleRotZ)),t.sole.scale.set(this.config.soleScaleX,this.config.soleScaleY,this.config.soleScaleZ),t.upperShoe.position.set(this.config.upperShoeOffsetX,this.config.upperShoeOffsetY,this.config.upperShoeOffsetZ),t.upperShoe.rotation.set(N(this.config.upperShoeRotX),N(this.config.upperShoeRotY),N(this.config.upperShoeRotZ)),t.upperShoe.scale.set(this.config.upperShoeScaleX,this.config.upperShoeScaleY,this.config.upperShoeScaleZ),t.toe.position.set(this.config.toeOffsetX,this.config.toeOffsetY,this.config.toeOffsetZ),t.toe.rotation.set(N(this.config.toeRotX),N(this.config.toeRotY),N(this.config.toeRotZ)),t.toe.scale.set(.92*this.config.toeScaleX,.52*this.config.toeScaleY,.66*this.config.toeScaleZ)}}new URLSearchParams(window.location.search).get("embed")==="1"&&document.documentElement.classList.add("is-embedded");const Ee=new p_;Ee.background=new $t(16512232);Ee.fog=new ar(16512232,14,28);const En=new d_({antialias:!0});En.setPixelRatio(Math.min(window.devicePixelRatio,2));En.setSize(window.innerWidth,window.innerHeight);En.shadowMap.enabled=!0;En.shadowMap.type=Wa;En.outputColorSpace=ln;document.body.appendChild(En.domElement);const fl=ie(iu),dl=ie(su),pl=ie(ou),ml=ie(ru),Tu=ie(au),Au=ie(lu),gl=ie(cu),_l=ie(hu),vl=ie(uu),Cu=ie(fu),Ru=ie(du),xl=ie(pu),Sl=ie(mu),Ue=ie(cl),Le=ie(hl),yl=ie(gu),Ml=ie(_u),El=ie(vu),js=ie(ul),bl=ie(xu),wl=ie(Su),Tl=ie(yu),Al=ie(Mu),Cl=ie(Eu),ee=ie(hr),Mi=ie(nu),er=new Iv(En,fl),tx=new Ov(Ee,dl),ex=new Fv(Ee,pl),Rl=new Bv(Ee,ml,Tu,Au),nx=new kv(Ee,xl),fr=new zv(Ee,gl,_l,vl,Cu,Ru),ix=new Hv(Ee,Sl),Pu=new wu(Ee,Ue),Lu=new wu(Ee,Le),Du=new Vv(Ee,yl,Ml),Pl=new Yv(Ee,El,js),Iu=new Wv(Ee,bl),Ou=new Zv(Ee,wl),sx=new qv(Ee,Tl),ox=new Kv(Ee,Al),rx=new jv(Ee,Cl),dn=new Qv(Ee,ee),Yt=ie(hr),ji=ie(ul),Je=ie(hr);Je.headYaw=32;const $e=ie(hl);ie(cl);const Un=Q_("Board Controls");document.body.appendChild(Un);const Ll=document.createElement("div");Ll.className="panel-actions";Un.appendChild(Ll);const fe=tu(Un,"Scene",!0),Dl=tu(Un,"man",!0);Qh(fe,"Fog",Mi.fogEnabled,i=>{Mi.fogEnabled=i,Ee.fog=i?new ar(16512232,14,28):null});tv(fe,"Music Pulse Speed",.25,8,.05,Mi.musicPulseSpeed,i=>{Mi.musicPulseSpeed=i});lv(fe,ml,()=>Rl.apply(),!0);ov(fe,fl,()=>er.apply(),!0);rv(fe,pl.floor,()=>ex.applyFloor(),!0);av(fe,Al,()=>ox.apply(),!0);sv(fe,dl,()=>tx.apply(),!0);pv(fe,xl,()=>nx.apply(),!0);eu(fe,"Monitor 1",Ue,()=>Pu.apply(),!0);eu(fe,"Monitor 2",Le,()=>Lu.apply(),!0);mv(fe,yl,()=>Du.applyPot(),!0);gv(fe,Ml,()=>Du.applyPlant(),!0);_v(fe,El,()=>Pl.applyKeyboard(),!0);vv(fe,js,()=>Pl.applyMouse(),!0);xv(fe,bl,()=>Iu.apply(),!0);Sv(fe,wl,()=>Ou.apply(),!0);yv(fe,Tl,()=>sx.apply(),!0);Mv(fe,Cl,()=>rx.apply(),!0);cv(fe,gl,()=>fr.applyShelfTransform(),!0);dv(fe,Sl,()=>ix.apply(),!0);hv(fe,_l,()=>fr.applyPotTransform(),!0);uv(fe,vl,()=>fr.applyCactusTransform(),!0);fv(fe,fr.getBookSections(),!0);nv(fe,Rl.getPaperSections(),!0);iv(fe,Rl.getPinSections(),!0);bv(Dl,ee,()=>dn.apply(),!1);Ev(Dl,ee,()=>dn.apply(),!0);wv(Dl,ee,()=>dn.apply(),!0);Tv(Un,ee,()=>dn.apply(),!1);Av(Un,ee,()=>dn.apply(),!1);Cv(Un,ee,()=>dn.apply(),!1);Rv(Un,ee,()=>dn.apply(),!1);Pv(Un,ee,()=>dn.apply(),!1);const cn=document.createElement("button");cn.className="panel-button";cn.type="button";cn.textContent="Скопировать GUI";Ll.appendChild(cn);const bn=document.createElement("div");bn.className="action-stack";document.body.appendChild(bn);const ds=document.createElement("button");ds.className="action-button";ds.type="button";ds.textContent="left_monitor_idle";bn.appendChild(ds);const ps=document.createElement("button");ps.className="action-button";ps.type="button";ps.textContent="right_monitor_idle";bn.appendChild(ps);const $s=document.createElement("button");$s.className="action-button";$s.type="button";$s.textContent="Стоп";bn.appendChild($s);const Nn=document.createElement("button");Nn.className="action-button";Nn.type="button";Nn.textContent="Привет";bn.appendChild(Nn);const Js=document.createElement("button");Js.className="action-button";Js.type="button";Js.textContent="Mouse 1";bn.appendChild(Js);const Qs=document.createElement("button");Qs.className="action-button";Qs.type="button";Qs.textContent="Mouse 2";bn.appendChild(Qs);const to=document.createElement("button");to.className="action-button";to.type="button";to.textContent="Mouse 3";bn.appendChild(to);const eo=document.createElement("button");eo.className="action-button";eo.type="button";eo.textContent="Mouse 4";bn.appendChild(eo);let pt=null,ve=!1,He=null,Sn=null;const tn=[];let Qn=0,ws=null,gn=null,gi=32,Ua=32,Ts=32,As=0,Na=600,Fa=0,dr=0,Cs=null,Yo=0,Rs=null,nr=0,_i="typing",ir=0,Ps=-24,Ba=-24,Ls=-24,Ds=0,za=700,ka=0;const Zi={pitch:ee.headPitch,leftAnkleX:ee.leftAnkleX},qi={pitch:0,leftAnkleX:0};let Dn=0,Ha=0,Wo=0,Is=0,Xa=500,Ga=0,jn=null,Ys=0;const Uu={mouse:{x:1.815,z:2.5},character:{leftShoulderX:-78.625,leftShoulderY:-176.25,leftShoulderZ:32.5,leftElbowX:30.875,leftElbowY:-1.5,leftElbowZ:-15,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},Nu={mouse:{x:1.9,z:2.5275},character:{leftShoulderX:-80.25,leftShoulderY:-183.25,leftShoulderZ:31,leftElbowX:30.5,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},Fu={mouse:{x:1.985,z:2.5},character:{leftShoulderX:-82.375,leftShoulderY:-178,leftShoulderZ:33.5,leftElbowX:22.625,leftElbowY:1.5,leftElbowZ:-14,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},Bu={mouse:{x:1.9,z:2.4725},character:{leftShoulderX:-81.25,leftShoulderY:-170.75,leftShoulderZ:35,leftElbowX:20.375,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},lh={mouse:[Uu,Nu,Fu,Bu]},ax=[["Atmosphere",Mi,nu],["Board",ml,ru],["Camera",fl,iu],["Floor",pl.floor,ou.floor],["Rug",Al,Mu],["Lighting",dl,su],["Desk",xl,pu],["Monitor 1",Ue,cl],["Monitor 2",Le,hl],["Floor Pot",yl,gu],["Floor Plant",Ml,_u],["Keyboard",El,vu],["Mouse",js,ul],["Speaker",bl,xu],["Mug",wl,Su],["Phone",Tl,yu],["Chair",Cl,Eu],["Shelf",gl,cu],["Shelf Pot",_l,hu],["Shelf Cactus",vl,uu],["Orange Book",Cu,fu],["Blue Book",Ru,du],["Picture",Sl,mu],["Papers",Tu,au],["Pins",Au,lu],["Character",ee,hr]];function ce(i,t,e){return i+(t-i)*e}function lx(i){return typeof i=="number"?Number.isInteger(i)?String(i):i.toFixed(3).replace(/\.?0+$/,""):typeof i=="boolean"?i?"true":"false":String(i)}function cx(i){return i==="codeCursorVisible"}function zu(i,t,e=""){return i&&typeof i=="object"&&!Array.isArray(i)?[...new Set([...Object.keys(t??{}),...Object.keys(i)])].flatMap(s=>zu(i[s],t?.[s],e?`${e}.${s}`:s)):cx(e)?[]:i!==t?[`${e}: ${lx(i)}`]:[]}function hx(){const i=ax.map(([t,e,n])=>{const s=zu(e,n);return s.length===0?"":`[${t}]
${s.join(`
`)}`}).filter(Boolean);return i.length>0?i.join(`

`):"Изменений нет"}async function ux(){const i=hx();try{await navigator.clipboard.writeText(i);const t=cn.textContent;cn.textContent="Скопировано",window.setTimeout(()=>{cn.textContent=t},1200)}catch{const t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);const e=cn.textContent;cn.textContent="Скопировано",window.setTimeout(()=>{cn.textContent=e},1200)}}cn.addEventListener("click",ux);function Bo(i){return 1-Math.pow(1-i,3)}function cs(i){return-(Math.cos(Math.PI*i)-1)/2}function Es(i){Object.entries(i).forEach(([t,e])=>{ee[t]=e}),dn.apply()}function Va(i,t,e){Object.entries(t).forEach(([n,s])=>{const o=i[n];if(typeof o!="number"||typeof s!="number"){i[n]=s;return}const r=ce(o,s,e);i[n]=Math.abs(r-s)<.001?s:r})}function ch(i,t,e){ws===null&&(ws=e);const n=Math.min(64,Math.max(0,e-ws)),s=1-Math.pow(.001,n/420);ws=e,Object.keys(i).length>0&&(Va(js,i,s),Pl.applyMouse()),Object.keys(t).length>0&&(Va(ee,t,s),dn.apply())}function hh(i,t){return Object.entries(t).every(([e,n])=>typeof i[e]!="number"||typeof n!="number"||Math.abs(i[e]-n)<.01)}function Fn(){ds.style.opacity=ve?"1":"",ps.style.opacity=ve&&He==="right_monitor_idle"?"1":""}function fx(i,t={}){const e=i.mouse??{},n=i.character??{},s=Object.keys(e),o=Object.keys(n);return{stage:"to",stageStartTime:null,mouseTarget:e,characterTarget:n,mouseKeys:s,characterKeys:o,speed:t.speed??1,movement:i,onComplete:t.onComplete??null}}function no(i,t={}){pt=null,gn=null,t.allowOverlap||(tn.length=0),tn.push(fx(i,t)),Nn.disabled=!1}function dx(){const i=new Set(tn.map(s=>s.movement)),t=lh.mouse.filter(s=>!i.has(s)),e=t.length>0?t:lh.mouse,n=Math.floor(Math.random()*e.length);return e[n]}function px(){return["leftShoulderX","leftShoulderY","leftShoulderZ","leftElbowX","leftElbowY","leftElbowZ","leftWristX","leftWristY","leftWristZ"].every(t=>Math.abs(ee[t]-Yt[t])<1.5)}function mx(i){if(!(!ve||He!=="left_monitor_idle"||pt||tn.length>=2||i<Qn)){if(!px()){Qn=i+120;return}no(dx(),{allowOverlap:!0,speed:1.8+Math.random()*3,onComplete:()=>{}}),Qn=i+Math.random()*2e3}}function ku(){const i=Sn?{leftShoulderX:Yt.leftShoulderX,leftShoulderY:Yt.leftShoulderY,leftShoulderZ:Yt.leftShoulderZ,leftElbowX:Yt.leftElbowX,leftElbowY:Yt.leftElbowY,leftElbowZ:Yt.leftElbowZ,leftWristX:Yt.leftWristX,leftWristY:Yt.leftWristY,leftWristZ:Yt.leftWristZ}:Yt;pt=null,tn.length=0,Qn=0,pr(),mr(),ve=!1,He=null,gn={mouse:ji,character:i},Nn.disabled=!1,Fn()}function Hu(i){pt=null,tn.length=0,Qn=0,pr(),mr(),gn=null,ws=null,ve=!0,He=i,Fn()}function gx(i,t){i.stageStartTime===null&&(i.stageStartTime=t);const e=t-i.stageStartTime,n=i.speed;if(i.stage==="to"){const o=Math.min(1,e/(1100/n));return i.weight=cs(o),o>=1&&(i.stage="hold",i.stageStartTime=t),!1}if(i.stage==="hold")return i.weight=1,e>=320/n&&(i.stage="from",i.stageStartTime=t),!1;const s=Math.min(1,e/(1200/n));return i.weight=1-cs(s),s>=1}function uh(i,t,e,n,s){n.forEach(o=>{i[o]=(i[o]??t[o])+(e[o]-t[o])*s})}function pr(){gi=ee.headYaw,Ua=gi,Ts=gi,As=0,Na=600,Fa=0}function _x(i){if(i<Fa)return Ts;As===0&&(Ua=gi,Ts=11+Math.random()*29,As=i,Na=420+Math.random()*680);const t=Math.min(1,(i-As)/Na);return gi=ce(Ua,Ts,cs(t)),t>=1&&(gi=Ts,As=0,Fa=i+180+Math.random()*420),gi}function mr(){performance.now(),dr=0,Cs=null,Yo=1/0,Rs=null,nr=1/0,_i="typing",ir=1/0,Ps=-24,Ba=-24,Ls=-24,Ds=0,za=700,ka=0,Dn=Le.uiLinesScroll??0,Ha=Dn,Wo=Dn,Is=0,Xa=500,Ga=0,jn=null,Ys=0}function vx(i){const t=Le.uiActiveIconIndex??0,e=[0,1,2,3].filter(n=>n!==t);jn=e[Math.floor(Math.random()*e.length)],Ys=i,Le.uiDotIconIndex=jn,Le.uiDotVisible=!0,Le.uiLinesWidthScale=.72+Math.random()*.66,dr=1/0}function xx(i){jn!==null&&(Le.uiDotIconIndex=jn,Le.uiDotVisible=!0,!(i-Ys<1e3)&&(Le.uiActiveIconIndex=jn,jn=null,Ys=0,dr=i+1300+Math.random()*1800))}function Sx(i){if(i<Ga)return Dn;Is===0&&(Ha=Dn,Wo=(Dn+.35+Math.random()*.75)%7,Is=i,Xa=360+Math.random()*720);const t=Math.min(1,(i-Is)/Xa);return Dn=ce(Ha,Wo,cs(t)),t>=1&&(Dn=Wo,Is=0,Ga=i+350+Math.random()*1100),Dn}function yx(i){Cs===null&&(Cs=i);const t=Math.min(64,Math.max(0,i-Cs)),e=1-Math.pow(.001,t/520);Cs=i,ve&&He==="left_monitor_idle"&&i>=dr&&vx(i),ve&&He==="left_monitor_idle"&&(Le.uiLinesScroll=Sx(i),xx(i)),Va(Le,{uiDotX:$e.uiDotX,uiDotY:$e.uiDotY,uiPanelX:$e.uiPanelX,uiIconStartY:$e.uiIconStartY,uiLinesX:$e.uiLinesX,uiLinesY:$e.uiLinesY,uiTopIconWidth:$e.uiTopIconWidth,uiTopIconY:$e.uiTopIconY},e),(!ve||He!=="left_monitor_idle")&&(Le.uiActiveIconIndex=$e.uiActiveIconIndex,Le.uiDotIconIndex=$e.uiDotIconIndex,Le.uiDotVisible=$e.uiDotVisible,Le.uiLinesWidthScale=$e.uiLinesWidthScale,Le.uiLinesScroll=$e.uiLinesScroll,jn=null,Ys=0),Lu.apply()}function Mx(i){Ue.codeScroll=(Math.floor(Ue.codeScroll)+1)%14,Ue.codeVariant=Math.floor(Math.random()*8),Ue.codeWidthScale=.92+Math.random()*.18,Ue.codeActiveLine=13,Ue.codeTypingProgress=.18,nr=i+700+Math.random()*900}function Ex(i){i<ir||(_i=_i==="typing"?"reading":"typing",ir=i+(_i==="typing"?2200+Math.random()*2600:3200+Math.random()*2800))}function bx(i){if(i<ka)return Ls;Ds===0&&(Ba=Ps,Ls=-34+Math.random()*20,Ds=i,za=650+Math.random()*850);const t=Math.min(1,(i-Ds)/za);return Ps=ce(Ba,Ls,cs(t)),t>=1&&(Ps=Ls,Ds=0,ka=i+250+Math.random()*550),Ps}function wx(i){Rs===null&&(Rs=i,ve&&He==="right_monitor_idle"&&(Yo=i+1600+Math.random()*1800,nr=i+700+Math.random()*900,ir=i+2200+Math.random()*2600));const t=Math.min(64,Math.max(0,i-Rs));Rs=i,ve&&He==="right_monitor_idle"&&(Ex(i),_i==="typing"&&i>=Yo&&(Ue.codeVariant=Math.floor(Math.random()*8),Ue.codeWidthScale=.92+Math.random()*.18,Yo=i+1600+Math.random()*1800),_i==="typing"?(Ue.codeTypingProgress=Math.min(1,Ue.codeTypingProgress+t/650),i>=nr&&Ue.codeTypingProgress>=.95&&Mx(i),Ue.codeCursorVisible=Math.floor(i/260)%2===0):Ue.codeCursorVisible=Math.floor(i/420)%2===0),Ue.codeCursorVisible=Math.floor(i/420)%2===0,Pu.apply()}function Tx(i){if(pt)return;if(!ve&&tn.length===0&&gn){if(ch(gn.mouse,gn.character,i),hh(js,gn.mouse)&&hh(ee,gn.character)&&(gn=null,Sn)){const n=Sn;Sn=null,Hu(n)}return}for(let n=tn.length-1;n>=0;n-=1){const s=tn[n];if(gx(s,i)){const o=s.onComplete;tn.splice(n,1),o&&o()}}const t={},e={};if(ve&&He==="left_monitor_idle")t.x=ji.x,t.z=ji.z,e.headYaw=_x(i),e.torsoYaw=Je.torsoYaw,e.headPitch=Je.headPitch,e.leftShoulderX=Je.leftShoulderX,e.leftShoulderY=Je.leftShoulderY,e.leftShoulderZ=Je.leftShoulderZ,e.leftElbowX=Je.leftElbowX,e.leftElbowY=Je.leftElbowY,e.leftElbowZ=Je.leftElbowZ,e.leftWristX=Je.leftWristX,e.leftWristY=Je.leftWristY,e.leftWristZ=Je.leftWristZ;else if(ve&&He==="right_monitor_idle"){const n=_i==="typing",s=Math.sin(i*.018),o=Math.sin(i*.023+Math.PI);t.x=ji.x,t.z=ji.z,e.torsoYaw=29,e.headYaw=n?-4:bx(i),e.headPitch=n?12:-7,e.leftShoulderX=-72+(n?s*2:0),e.leftShoulderY=-154,e.leftShoulderZ=24,e.leftElbowX=42+(n?o*3:0),e.leftElbowY=-7,e.leftElbowZ=-10,e.leftWristX=-9+(n?s*5:0),e.leftWristY=-28,e.leftWristZ=-9,e.rightShoulderX=-76+(n?o*2:0),e.rightShoulderY=-202,e.rightShoulderZ=-8,e.rightElbowX=39+(n?s*3:0),e.rightElbowY=8,e.rightElbowZ=9,e.rightWristX=-8+(n?o*5:0),e.rightWristY=24,e.rightWristZ=7}He==="left_monitor_idle"&&tn.forEach(n=>{uh(t,ji,n.mouseTarget,n.mouseKeys,n.weight??0),uh(e,Je,n.characterTarget,n.characterKeys,n.weight??0)}),ch(t,e,i)}function Ax(){if(pt)return;tn.length=0,Qn=0,Sn=null,pr(),mr(),gn=null,ve=!1,He=null,Fn(),Nn.disabled=!0,pt={stage:"turn",startTime:null,startPose:{torsoYaw:ee.torsoYaw,headYaw:ee.headYaw,leftShoulderZ:ee.leftShoulderZ,leftElbowX:ee.leftElbowX,rightShoulderX:ee.rightShoulderX,rightShoulderZ:ee.rightShoulderZ,rightElbowX:ee.rightElbowX,leftHipY:ee.leftHipY,leftHipZ:ee.leftHipZ,rightHipZ:ee.rightHipZ},phaseOneTarget:{torsoYaw:-60,headYaw:-65,leftShoulderZ:149,leftElbowX:1.5,rightShoulderX:-126,rightShoulderZ:-20,rightElbowX:24,leftHipY:7,leftHipZ:-56.5,rightHipZ:-28},waveValues:[1.5,22,1.5,22,1.5,22],waveIndex:0,waveStartValue:1.5}}function Cx(i){if(!pt)return;pt.startTime===null&&(pt.startTime=i);const t=i-pt.startTime;if(pt.stage==="turn"){const o=Math.min(1,t/900),r=Math.min(1,Math.max(0,t-90)/900),a=Bo(o),l=Bo(r);Es({rightHipZ:ce(pt.startPose.rightHipZ,pt.phaseOneTarget.rightHipZ,a),torsoYaw:ce(pt.startPose.torsoYaw,pt.phaseOneTarget.torsoYaw,l),headYaw:ce(pt.startPose.headYaw,pt.phaseOneTarget.headYaw,l),leftShoulderZ:ce(pt.startPose.leftShoulderZ,pt.phaseOneTarget.leftShoulderZ,l),leftElbowX:ce(pt.startPose.leftElbowX,pt.phaseOneTarget.leftElbowX,l),rightShoulderX:ce(pt.startPose.rightShoulderX,pt.phaseOneTarget.rightShoulderX,l),rightShoulderZ:ce(pt.startPose.rightShoulderZ,pt.phaseOneTarget.rightShoulderZ,l),rightElbowX:ce(pt.startPose.rightElbowX,pt.phaseOneTarget.rightElbowX,l),leftHipY:ce(pt.startPose.leftHipY,pt.phaseOneTarget.leftHipY,l),leftHipZ:ce(pt.startPose.leftHipZ,pt.phaseOneTarget.leftHipZ,l)}),o>=1&&r>=1&&(pt.stage="wave",pt.startTime=i,pt.waveIndex=0,pt.waveStartValue=1.5);return}if(pt.stage==="wave"){const n=Math.min(1,t/200),s=cs(n),o=pt.waveValues[pt.waveIndex];Es({torsoYaw:pt.phaseOneTarget.torsoYaw,headYaw:pt.phaseOneTarget.headYaw,leftShoulderZ:pt.phaseOneTarget.leftShoulderZ,leftElbowX:ce(pt.waveStartValue,o,s),rightShoulderX:pt.phaseOneTarget.rightShoulderX,rightShoulderZ:pt.phaseOneTarget.rightShoulderZ,rightElbowX:pt.phaseOneTarget.rightElbowX,leftHipY:pt.phaseOneTarget.leftHipY,leftHipZ:pt.phaseOneTarget.leftHipZ,rightHipZ:pt.phaseOneTarget.rightHipZ}),n>=1&&(pt.waveStartValue=o,pt.waveIndex+=1,pt.startTime=i,pt.waveIndex>=pt.waveValues.length&&(pt.stage="right-leg-out",pt.startTime=i));return}if(pt.stage==="right-leg-out"){const n=Math.min(1,t/730),s=Bo(n);Es({torsoYaw:ce(pt.phaseOneTarget.torsoYaw,Yt.torsoYaw,s),headYaw:ce(pt.phaseOneTarget.headYaw,Yt.headYaw,s),leftShoulderZ:ce(pt.phaseOneTarget.leftShoulderZ,Yt.leftShoulderZ,s),leftElbowX:ce(pt.waveStartValue,Yt.leftElbowX,s),rightShoulderX:ce(pt.phaseOneTarget.rightShoulderX,Yt.rightShoulderX,s),rightShoulderZ:ce(pt.phaseOneTarget.rightShoulderZ,Yt.rightShoulderZ,s),rightElbowX:ce(pt.phaseOneTarget.rightElbowX,Yt.rightElbowX,s),leftHipY:pt.phaseOneTarget.leftHipY,leftHipZ:pt.phaseOneTarget.leftHipZ,rightHipZ:ce(pt.phaseOneTarget.rightHipZ,Yt.rightHipZ,s)}),n>=1&&(pt.stage="left-leg-out",pt.startTime=i);return}if(pt.stage==="left-leg-out"){const n=Math.min(1,t/540),s=Bo(n);Es({torsoYaw:Yt.torsoYaw,headYaw:Yt.headYaw,leftShoulderZ:Yt.leftShoulderZ,leftElbowX:Yt.leftElbowX,rightShoulderX:Yt.rightShoulderX,rightShoulderZ:Yt.rightShoulderZ,rightElbowX:Yt.rightElbowX,leftHipY:ce(pt.phaseOneTarget.leftHipY,Yt.leftHipY,s),leftHipZ:ce(pt.phaseOneTarget.leftHipZ,Yt.leftHipZ,s),rightHipZ:Yt.rightHipZ}),n>=1&&(Es({torsoYaw:Yt.torsoYaw,headYaw:Yt.headYaw,leftShoulderZ:Yt.leftShoulderZ,leftElbowX:Yt.leftElbowX,rightShoulderX:Yt.rightShoulderX,rightShoulderZ:Yt.rightShoulderZ,rightElbowX:Yt.rightElbowX,leftHipY:Yt.leftHipY,leftHipZ:Yt.leftHipZ,rightHipZ:Yt.rightHipZ}),pt=null,Nn.disabled=!1,ve&&(Qn=0))}}function Xu(i){if(ve){if(He===i){Sn=null,ku();return}tn.length=0,Qn=0,pr(),mr(),He=i,Fn();return}Hu(i)}function Rx(){Xu("left_monitor_idle")}Nn.addEventListener("click",Ax);Js.addEventListener("click",()=>{ve=!1,Sn=null,Fn(),no(Uu)});Qs.addEventListener("click",()=>{ve=!1,Sn=null,Fn(),no(Nu)});to.addEventListener("click",()=>{ve=!1,Sn=null,Fn(),no(Fu)});eo.addEventListener("click",()=>{ve=!1,Sn=null,Fn(),no(Bu)});ds.addEventListener("click",Rx);ps.addEventListener("click",()=>Xu("right_monitor_idle"));$s.addEventListener("click",ku);Fn();function Px(i){const t=i*Mi.musicPulseSpeed,e=ee.headPitch-qi.pitch,n=ee.leftAnkleX-qi.leftAnkleX;Zi.pitch+=(e-Zi.pitch)*.08,Zi.leftAnkleX+=(n-Zi.leftAnkleX)*.08,qi.pitch=Math.sin(t*.0038)*.55+Math.sin(t*.009)*.18,qi.leftAnkleX=Math.sin(t*.0042+.7)*.9,ee.headPitch=Zi.pitch+qi.pitch,ee.leftAnkleX=Zi.leftAnkleX+qi.leftAnkleX,dn.apply()}function Lx(i){const t=i*Mi.musicPulseSpeed;Iu.setConePulse(1+Math.sin(t*.0048)*.045+Math.sin(t*.013)*.018),Ou.updateSteam(i),Tx(i),ve&&!pt&&mx(i),yx(i),wx(i),Cx(i),Px(i),er.controls.update(),En.render(Ee,er.camera)}En.setAnimationLoop(Lx);window.addEventListener("resize",()=>{er.resize(window.innerWidth,window.innerHeight),En.setSize(window.innerWidth,window.innerHeight)});
