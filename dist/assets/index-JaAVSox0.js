(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Ol="166",Hi={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zu=0,wc=1,qu=2,Il=1,Ku=2,Vn=3,pi=0,$e=1,yn=2,ui=0,vs=1,Tc=2,Cc=3,Ac=4,ju=5,Ti=100,$u=101,Ju=102,Qu=103,td=104,ed=200,nd=201,id=202,sd=203,Oa=204,Ia=205,od=206,rd=207,ad=208,ld=209,cd=210,hd=211,fd=212,ud=213,dd=214,pd=0,md=1,gd=2,wr=3,_d=4,xd=5,vd=6,Sd=7,af=0,yd=1,Md=2,di=0,bd=1,Ed=2,wd=3,Td=4,Cd=5,Ad=6,Rd=7,lf=300,Ms=301,bs=302,Da=303,Ua=304,Br=306,Na=1e3,Ai=1001,Fa=1002,je=1003,Pd=1004,Oo=1005,Mn=1006,jr=1007,Ri=1008,Kn=1009,cf=1010,hf=1011,ro=1012,Dl=1013,Oi=1014,On=1015,mo=1016,Ul=1017,Nl=1018,Es=1020,ff=35902,uf=1021,df=1022,bn=1023,pf=1024,mf=1025,Ss=1026,ws=1027,Fl=1028,Bl=1029,gf=1030,zl=1031,kl=1033,ur=33776,dr=33777,pr=33778,mr=33779,Ba=35840,za=35841,ka=35842,Ha=35843,Xa=36196,Ya=37492,Ga=37496,Va=37808,Wa=37809,Za=37810,qa=37811,Ka=37812,ja=37813,$a=37814,Ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,gr=36492,ol=36494,rl=36495,_f=36283,al=36284,ll=36285,cl=36286,Ld=3200,Od=3201,xf=0,Id=1,ci="",xn="srgb",_i="srgb-linear",Hl="display-p3",zr="display-p3-linear",Tr="linear",pe="srgb",Cr="rec709",Ar="p3",Yi=7680,Rc=519,Dd=512,Ud=513,Nd=514,vf=515,Fd=516,Bd=517,zd=518,kd=519,Pc=35044,Lc="300 es",Zn=2e3,Rr=2001;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const Js=Math.PI/180,ao=180/Math.PI;function Bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Xl(i,t){return(i%t+t)%t}function Hd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xd(i,t,e){return i!==t?(e-i)/(t-i):0}function Qs(i,t,e){return(1-e)*i+e*t}function Yd(i,t,e,n){return Qs(i,t,1-Math.exp(-e*n))}function Gd(i,t=1){return t-Math.abs(Xl(i,t*2)-t)}function Vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qd(i,t){return i+Math.random()*(t-i)}function Kd(i){return i*(.5-Math.random())}function jd(i){i!==void 0&&(Oc=i);let t=Oc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $d(i){return i*Js}function Jd(i){return i*ao}function Qd(i){return(i&i-1)===0&&i!==0}function tp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function np(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const un={DEG2RAD:Js,RAD2DEG:ao,generateUUID:Bi,clamp:Re,euclideanModulo:Xl,mapLinear:Hd,inverseLerp:Xd,lerp:Qs,damp:Yd,pingpong:Gd,smoothstep:Vd,smootherstep:Wd,randInt:Zd,randFloat:qd,randFloatSpread:Kd,seededRandom:jd,degToRad:$d,radToDeg:Jd,isPowerOfTwo:Qd,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:Ve,denormalize:hs};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,o,r,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],S=s[4],b=s[7],U=s[2],R=s[5],A=s[8];return o[0]=r*x+a*T+l*U,o[3]=r*m+a*S+l*R,o[6]=r*p+a*b+l*A,o[1]=c*x+h*T+f*U,o[4]=c*m+h*S+f*R,o[7]=c*p+h*b+f*A,o[2]=u*x+d*T+g*U,o[5]=u*m+d*S+g*R,o[8]=u*p+d*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($r.makeScale(t,e)),this}rotate(t){return this.premultiply($r.makeRotation(-t)),this}translate(t,e){return this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new qt;function Sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ip(){const i=Pr("canvas");return i.style.display="block",i}const Ic={};function yf(i){i in Ic||(Ic[i]=!0,console.warn(i))}function sp(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Dc=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uc=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Io={[_i]:{transfer:Tr,primaries:Cr,toReference:i=>i,fromReference:i=>i},[xn]:{transfer:pe,primaries:Cr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:Tr,primaries:Ar,toReference:i=>i.applyMatrix3(Uc),fromReference:i=>i.applyMatrix3(Dc)},[Hl]:{transfer:pe,primaries:Ar,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Uc),fromReference:i=>i.applyMatrix3(Dc).convertLinearToSRGB()}},op=new Set([_i,zr]),he={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!op.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Io[t].toReference,s=Io[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Io[i].primaries},getTransfer:function(i){return i===ci?Tr:Io[i].transfer}};function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class rp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=Pr("canvas")),Gi.width=t.width,Gi.height=t.height;const n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ys(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ap=0;class Mf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Qr(s[r].image)):o.push(Qr(s[r]))}else o=Qr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;class Ye extends Fi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Ai,s=Ai,o=Mn,r=Ri,a=bn,l=Kn,c=Ye.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Bi(),this.name="",this.source=new Mf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=lf;Ye.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,b=(d+1)/2,U=(p+1)/2,R=(h+u)/4,A=(f+x)/4,O=(g+m)/4;return S>b&&S>U?S<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(S),s=R/n,o=A/n):b>U?b<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),n=R/s,o=O/s):U<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),n=A/o,s=O/o),this.set(n,s,o,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-x)/T,this.z=(u-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends Fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends cp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==u||c!==d||h!==g){let m=1-a;const p=l*u+c*d+h*g+f*x,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const U=Math.sqrt(S),R=Math.atan2(U,p*T);m=Math.sin(m*R)/U,a=Math.sin(a*R)/U}const b=a*T;if(l=l*m+u*b,c=c*m+d*b,h=h*m+g*b,f=f*m+x*b,m===1-a){const U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),u=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new P,Nc=new Di;class zi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,mn):mn.fromBufferAttribute(o,r),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Uo.subVectors(this.max,Is),Vi.subVectors(t.a,Is),Wi.subVectors(t.b,Is),Zi.subVectors(t.c,Is),ei.subVectors(Wi,Vi),ni.subVectors(Zi,Wi),vi.subVectors(Vi,Zi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];return!ea(e,Vi,Wi,Zi,Uo)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Vi,Wi,Zi,Uo))?!1:(No.crossVectors(ei,ni),e=[No.x,No.y,No.z],ea(e,Vi,Wi,Zi,Uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,Do=new zi,Vi=new P,Wi=new P,Zi=new P,ei=new P,ni=new P,vi=new P,Is=new P,Uo=new P,No=new P,Si=new P;function ea(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Si.fromArray(i,o);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fp=new zi,Ds=new P,na=new P;class go{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(na)),this.expandByPoint(Ds.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new P,ia=new P,Fo=new P,ii=new P,sa=new P,Bo=new P,oa=new P;class Yl{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(ia);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Fo),a=ii.dot(this.direction),l=-ii.dot(Fo),c=ii.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*l-a,u=r*a-l,g=o*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ia).addScaledVector(Fo,u),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),s=kn.dot(kn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,o){sa.subVectors(e,t),Bo.subVectors(n,t),oa.crossVectors(sa,Bo);let r=this.direction.dot(oa),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ii.subVectors(this.origin,t);const l=a*this.direction.dot(Bo.crossVectors(ii,Bo));if(l<0)return null;const c=a*this.direction.dot(sa.cross(ii));if(c<0||l+c>r)return null;const h=-a*ii.dot(oa);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,o,r,a,l,c,h,f,u,d,g,x,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,u,d,g,x,m)}set(t,e,n,s,o,r,a,l,c,h,f,u,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),o=1/qi.setFromMatrixColumn(t,1).length(),r=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,x=c*f;e[0]=u-x*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=x-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,dp)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),si.crossVectors(n,nn),si.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),si.crossVectors(n,nn)),si.normalize(),zo.crossVectors(nn,si),s[0]=si.x,s[4]=zo.x,s[8]=nn.x,s[1]=si.y,s[5]=zo.y,s[9]=nn.y,s[2]=si.z,s[6]=zo.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],S=n[7],b=n[11],U=n[15],R=s[0],A=s[4],O=s[8],E=s[12],y=s[1],L=s[5],Y=s[9],B=s[13],W=s[2],q=s[6],G=s[10],$=s[14],Z=s[3],gt=s[7],yt=s[11],vt=s[15];return o[0]=r*R+a*y+l*W+c*Z,o[4]=r*A+a*L+l*q+c*gt,o[8]=r*O+a*Y+l*G+c*yt,o[12]=r*E+a*B+l*$+c*vt,o[1]=h*R+f*y+u*W+d*Z,o[5]=h*A+f*L+u*q+d*gt,o[9]=h*O+f*Y+u*G+d*yt,o[13]=h*E+f*B+u*$+d*vt,o[2]=g*R+x*y+m*W+p*Z,o[6]=g*A+x*L+m*q+p*gt,o[10]=g*O+x*Y+m*G+p*yt,o[14]=g*E+x*B+m*$+p*vt,o[3]=T*R+S*y+b*W+U*Z,o[7]=T*A+S*L+b*q+U*gt,o[11]=T*O+S*Y+b*G+U*yt,o[15]=T*E+S*B+b*$+U*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*l*f-s*c*f-o*a*u+n*c*u+s*a*d-n*l*d)+x*(+e*l*d-e*c*u+o*r*u-s*r*d+s*c*h-o*l*h)+m*(+e*c*f-e*a*d-o*r*f+n*r*d+o*a*h-n*c*h)+p*(-s*a*h-e*l*f+e*a*u+s*r*f-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],T=f*m*c-x*u*c+x*l*d-a*m*d-f*l*p+a*u*p,S=g*u*c-h*m*c-g*l*d+r*m*d+h*l*p-r*u*p,b=h*x*c-g*f*c+g*a*d-r*x*d-h*a*p+r*f*p,U=g*f*l-h*x*l-g*a*u+r*x*u+h*a*m-r*f*m,R=e*T+n*S+s*b+o*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=T*A,t[1]=(x*u*o-f*m*o-x*s*d+n*m*d+f*s*p-n*u*p)*A,t[2]=(a*m*o-x*l*o+x*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(f*l*o-a*u*o-f*s*c+n*u*c+a*s*d-n*l*d)*A,t[4]=S*A,t[5]=(h*m*o-g*u*o+g*s*d-e*m*d-h*s*p+e*u*p)*A,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*A,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*d+e*l*d)*A,t[8]=b*A,t[9]=(g*f*o-h*x*o-g*n*d+e*x*d+h*n*p-e*f*p)*A,t[10]=(r*x*o-g*a*o+g*n*c-e*x*c-r*n*p+e*a*p)*A,t[11]=(h*a*o-r*f*o-h*n*c+e*f*c+r*n*d-e*a*d)*A,t[12]=U*A,t[13]=(h*x*s-g*f*s+g*n*u-e*x*u-h*n*m+e*f*m)*A,t[14]=(g*a*s-r*x*s-g*n*l+e*x*l+r*n*m-e*a*m)*A,t[15]=(r*f*s-h*a*s+h*n*l-e*f*l-r*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,g=o*f,x=r*h,m=r*f,p=a*f,T=l*c,S=l*h,b=l*f,U=n.x,R=n.y,A=n.z;return s[0]=(1-(x+p))*U,s[1]=(d+b)*U,s[2]=(g-S)*U,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(u+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+S)*A,s[9]=(m-T)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=qi.set(s[0],s[1],s[2]).length();const r=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const c=1/o,h=1/r,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,e.setFromRotationMatrix(gn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Zn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,g;if(a===Zn)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Rr)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Zn){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(r-o),u=(e+t)*c,d=(n+s)*h;let g,x;if(a===Zn)g=(r+o)*f,x=-2*f;else if(a===Rr)g=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new P,gn=new fe,up=new P(0,0,0),dp=new P(1,1,1),si=new P,zo=new P,nn=new P,Fc=new fe,Bc=new Di;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pp=0;const zc=new P,Ki=new Di,Hn=new fe,ko=new P,Us=new P,mp=new P,gp=new Di,kc=new P(1,0,0),Hc=new P(0,1,0),Xc=new P(0,0,1),Yc={type:"added"},_p={type:"removed"},ji={type:"childadded",child:null},ra={type:"childremoved",child:null};class Fe extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new P,e=new Dn,n=new Di,s=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ko.copy(t):ko.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Us,ko,this.up):Hn.lookAt(ko,Us,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Hn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new P(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new P,Xn=new P,aa=new P,Yn=new P,$i=new P,Ji=new P,Gc=new P,la=new P,ca=new P,ha=new P;class Ln{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){_n.subVectors(s,e),Xn.subVectors(n,e),aa.subVectors(t,e);const r=_n.dot(_n),a=_n.dot(Xn),l=_n.dot(aa),c=Xn.dot(Xn),h=Xn.dot(aa),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Yn.x),l.addScaledVector(r,Yn.y),l.addScaledVector(a,Yn.z),l)}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Xn.subVectors(t,e),_n.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),_n.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;$i.subVectors(s,n),Ji.subVectors(o,n),la.subVectors(t,n);const l=$i.dot(la),c=Ji.dot(la);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,s);const h=$i.dot(ca),f=Ji.dot(ca);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector($i,r);ha.subVectors(t,o);const d=$i.dot(ha),g=Ji.dot(ha);if(g>=0&&d<=g)return e.copy(o);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ji,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Gc.subVectors(o,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Gc,a);const p=1/(m+x+u);return r=x*p,a=u*p,e.copy(n).addScaledVector($i,r).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Xl(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=fa(r,o,t+1/3),this.g=fa(r,o,t),this.b=fa(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return he.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Re(Xe.r*255,0,255))*65536+Math.round(Re(Xe.g*255,0,255))*256+Math.round(Re(Xe.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,o=Xe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=xn){he.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Ho);const n=Qs(oi.h,Ho.h,e),s=Qs(oi.s,Ho.s,e),o=Qs(oi.l,Ho.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new jt;jt.NAMES=Ef;let xp=0;class _o extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=vs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ia,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class mi extends _o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new P,Xo=new et;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return yf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xo.fromBufferAttribute(this,e),Xo.applyMatrix3(t),this.setXY(e,Xo.x,Xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),o=Ve(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}}class wf extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tf extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vp=0;const fn=new fe,ua=new Fe,Qi=new P,sn=new zi,Ns=new zi,Ue=new P;class Qe extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sf(t)?Tf:wf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];sn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(sn.min,Ns.min),sn.expandByPoint(Ue),Ue.addVectors(sn.max,Ns.max),sn.expandByPoint(Ue)):(sn.expandByPoint(Ns.min),sn.expandByPoint(Ns.max))}sn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ue.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),Ue.add(Qi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new P,l[O]=new P;const c=new P,h=new P,f=new P,u=new et,d=new et,g=new et,x=new P,m=new P;function p(O,E,y){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),u.fromBufferAttribute(o,O),d.fromBufferAttribute(o,E),g.fromBufferAttribute(o,y),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[O].add(x),a[E].add(x),a[y].add(x),l[O].add(m),l[E].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,E=T.length;O<E;++O){const y=T[O],L=y.start,Y=y.count;for(let B=L,W=L+Y;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new P,b=new P,U=new P,R=new P;function A(O){U.fromBufferAttribute(s,O),R.copy(U);const E=a[O];S.copy(E),S.sub(U.multiplyScalar(U.dot(E))).normalize(),b.crossVectors(R,E);const L=b.dot(l[O])<0?-1:1;r.setXYZW(O,S.x,S.y,S.z,L)}for(let O=0,E=T.length;O<E;++O){const y=T[O],L=y.start,Y=y.count;for(let B=L,W=L+Y;B<W;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new P,o=new P,r=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new En(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new fe,yi=new Yl,Yo=new go,Wc=new P,ts=new P,es=new P,ns=new P,da=new P,Go=new P,Vo=new et,Wo=new et,Zo=new et,Zc=new P,qc=new P,Kc=new P,qo=new P,Ko=new P;class at extends Fe{constructor(t=new Qe,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Go.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(da.fromBufferAttribute(f,t),r?Go.addScaledVector(da,h):Go.addScaledVector(da.sub(e),h))}e.add(Go)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(o),yi.copy(t.ray).recast(t.near),!(Yo.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Yo,Wc)===null||yi.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Vc.copy(o).invert(),yi.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=T,U=S;b<U;b+=3){const R=a.getX(b),A=a.getX(b+1),O=a.getX(b+2);s=jo(this,p,t,n,c,h,f,R,A,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);s=jo(this,r,t,n,c,h,f,T,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=r[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=T,U=S;b<U;b+=3){const R=b,A=b+1,O=b+2;s=jo(this,p,t,n,c,h,f,R,A,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const T=m,S=m+1,b=m+2;s=jo(this,r,t,n,c,h,f,T,S,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Sp(i,t,e,n,s,o,r,a){let l;if(t.side===$e?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===pi,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ko);return c<e.near||c>e.far?null:{distance:c,point:Ko.clone(),object:i}}function jo(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,ts),i.getVertexPosition(l,es),i.getVertexPosition(c,ns);const h=Sp(i,t,e,n,ts,es,ns,qo);if(h){s&&(Vo.fromBufferAttribute(s,a),Wo.fromBufferAttribute(s,l),Zo.fromBufferAttribute(s,c),h.uv=Ln.getInterpolation(qo,ts,es,ns,Vo,Wo,Zo,new et)),o&&(Vo.fromBufferAttribute(o,a),Wo.fromBufferAttribute(o,l),Zo.fromBufferAttribute(o,c),h.uv1=Ln.getInterpolation(qo,ts,es,ns,Vo,Wo,Zo,new et)),r&&(Zc.fromBufferAttribute(r,a),qc.fromBufferAttribute(r,l),Kc.fromBufferAttribute(r,c),h.normal=Ln.getInterpolation(qo,ts,es,ns,Zc,qc,Kc,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Ln.getNormal(ts,es,ns,f.normal),h.face=f}return h}class ie extends Qe{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function g(x,m,p,T,S,b,U,R,A,O,E){const y=b/A,L=U/O,Y=b/2,B=U/2,W=R/2,q=A+1,G=O+1;let $=0,Z=0;const gt=new P;for(let yt=0;yt<G;yt++){const vt=yt*L-B;for(let Vt=0;Vt<q;Vt++){const te=Vt*y-Y;gt[x]=te*T,gt[m]=vt*S,gt[p]=W,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[m]=0,gt[p]=R>0?1:-1,h.push(gt.x,gt.y,gt.z),f.push(Vt/A),f.push(1-yt/O),$+=1}}for(let yt=0;yt<O;yt++)for(let vt=0;vt<A;vt++){const Vt=u+vt+q*yt,te=u+vt+q*(yt+1),K=u+(vt+1)+q*(yt+1),st=u+(vt+1)+q*yt;l.push(Vt,te,st),l.push(te,K,st),Z+=6}a.addGroup(d,Z,E),d+=Z,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Ts(i[e]);for(const s in n)t[s]=n[s]}return t}function yp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Mp={clone:Ts,merge:We};var bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends _o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Af extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new P,jc=new et,$c=new et;class ln extends Af{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,jc,$c),e.subVectors($c,jc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class wp extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(is,ss,t,e);s.layers=this.layers,this.add(s);const o=new ln(is,ss,t,e);o.layers=this.layers,this.add(o);const r=new ln(is,ss,t,e);r.layers=this.layers,this.add(r);const a=new ln(is,ss,t,e);a.layers=this.layers,this.add(a);const l=new ln(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new ln(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rf extends Ye{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tp extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),o=new gi({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ui});o.uniforms.tEquirect.value=e;const r=new at(s,o),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Mn),new wp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const pa=new P,Cp=new P,Ap=new qt;class ai{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=pa.subVectors(n,e).cross(Cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ap.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new go,$o=new P;class Vl{constructor(t=new ai,e=new ai,n=new ai,s=new ai,o=new ai,r=new ai){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],T=s[13],S=s[14],b=s[15];if(n[0].setComponents(l-o,u-c,m-d,b-p).normalize(),n[1].setComponents(l+o,u+c,m+d,b+p).normalize(),n[2].setComponents(l+r,u+h,m+g,b+T).normalize(),n[3].setComponents(l-r,u-h,m-g,b-T).normalize(),n[4].setComponents(l-a,u-f,m-x,b-S).normalize(),e===Zn)n[5].setComponents(l+a,u+f,m+x,b+S).normalize();else if(e===Rr)n[5].setComponents(a,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($o.x=s.normal.x>0?t.max.x:t.min.x,$o.y=s.normal.y>0?t.max.y:t.min.y,$o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pf(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Rp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l._updateRange,u=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&u.length===0&&i.bufferSubData(c,0,h),u.length!==0){for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class xo extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const T=p*u-r;for(let S=0;S<c;S++){const b=S*f-o;g.push(b,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,b=T+c*(p+1),U=T+1+c*(p+1),R=T+1+c*p;d.push(S,b,R),d.push(b,U,R)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`
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
}`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C0=`PhysicalMaterial material;
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
#endif`,A0=`struct PhysicalMaterial {
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
}`,R0=`
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Nm=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#define LAMBERT
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
}`,Wm=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,qm=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,jm=`#define NORMAL
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
}`,$m=`#define PHONG
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,ng=`#define TOON
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
}`,ig=`uniform float size;
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
}`,sg=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Op,alphamap_pars_fragment:Ip,alphatest_fragment:Dp,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:Fp,batching_pars_vertex:Bp,batching_vertex:zp,begin_vertex:kp,beginnormal_vertex:Hp,bsdfs:Xp,iridescence_fragment:Yp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:qp,color_fragment:Kp,color_pars_fragment:jp,color_pars_vertex:$p,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:t0,defaultnormal_vertex:e0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:r0,colorspace_pars_fragment:a0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:h0,envmap_pars_vertex:f0,envmap_physical_pars_fragment:M0,envmap_vertex:u0,fog_vertex:d0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:x0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:S0,lights_pars_begin:y0,lights_toon_fragment:b0,lights_toon_pars_fragment:E0,lights_phong_fragment:w0,lights_phong_pars_fragment:T0,lights_physical_fragment:C0,lights_physical_pars_fragment:A0,lights_fragment_begin:R0,lights_fragment_maps:P0,lights_fragment_end:L0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:U0,map_fragment:N0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:z0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:H0,morphinstance_vertex:X0,morphcolor_vertex:Y0,morphnormal_vertex:G0,morphtarget_pars_vertex:V0,morphtarget_vertex:W0,normal_fragment_begin:Z0,normal_fragment_maps:q0,normal_pars_fragment:K0,normal_pars_vertex:j0,normal_vertex:$0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:em,iridescence_pars_fragment:nm,opaque_fragment:im,packing:sm,premultiplied_alpha_fragment:om,project_vertex:rm,dithering_fragment:am,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:um,shadowmap_vertex:dm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:xm,specularmap_fragment:vm,specularmap_pars_fragment:Sm,tonemapping_fragment:ym,tonemapping_pars_fragment:Mm,transmission_fragment:bm,transmission_pars_fragment:Em,uv_pars_fragment:wm,uv_pars_vertex:Tm,uv_vertex:Cm,worldpos_vertex:Am,background_vert:Rm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Om,cube_vert:Im,cube_frag:Dm,depth_vert:Um,depth_frag:Nm,distanceRGBA_vert:Fm,distanceRGBA_frag:Bm,equirect_vert:zm,equirect_frag:km,linedashed_vert:Hm,linedashed_frag:Xm,meshbasic_vert:Ym,meshbasic_frag:Gm,meshlambert_vert:Vm,meshlambert_frag:Wm,meshmatcap_vert:Zm,meshmatcap_frag:qm,meshnormal_vert:Km,meshnormal_frag:jm,meshphong_vert:$m,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:tg,meshtoon_vert:eg,meshtoon_frag:ng,points_vert:ig,points_frag:sg,shadow_vert:og,shadow_frag:rg,sprite_vert:ag,sprite_frag:lg},pt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Pn={basic:{uniforms:We([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:We([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:We([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:We([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:We([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:We([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:We([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:We([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:We([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:We([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:We([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:We([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:We([pt.lights,pt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Pn.physical={uniforms:We([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Jo={r:0,b:0,g:0},bi=new Dn,cg=new fe;function hg(i,t,e,n,s,o,r){const a=new jt(0);let l=o===!0?0:1,c,h,f=null,u=0,d=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function x(T){let S=!1;const b=g(T);b===null?p(a,l):b&&b.isColor&&(p(b,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){const b=g(S);b&&(b.isCubeTexture||b.mapping===Br)?(h===void 0&&(h=new at(new ie(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ts(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(S.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(bi)),h.material.toneMapped=he.getTransfer(b.colorSpace)!==pe,(f!==b||u!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new at(new xo(2,2),new gi({name:"BackgroundMaterial",uniforms:Ts(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=he.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(Jo,Cf(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m}}function fg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(y,L,Y,B,W){let q=!1;const G=f(B,Y,L);o!==G&&(o=G,c(o.object)),q=d(y,B,Y,W),q&&g(y,B,Y,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,b(y,L,Y,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function f(y,L,Y){const B=Y.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let G=q[B];return G===void 0&&(G=u(l()),q[B]=G),G}function u(y){const L=[],Y=[],B=[];for(let W=0;W<e;W++)L[W]=0,Y[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,L,Y,B){const W=o.attributes,q=L.attributes;let G=0;const $=Y.getAttributes();for(const Z in $)if($[Z].location>=0){const yt=W[Z];let vt=q[Z];if(vt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),yt===void 0||yt.attribute!==vt||vt&&yt.data!==vt.data)return!0;G++}return o.attributesNum!==G||o.index!==B}function g(y,L,Y,B){const W={},q=L.attributes;let G=0;const $=Y.getAttributes();for(const Z in $)if($[Z].location>=0){let yt=q[Z];yt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const vt={};vt.attribute=yt,yt&&yt.data&&(vt.data=yt.data),W[Z]=vt,G++}o.attributes=W,o.attributesNum=G,o.index=B}function x(){const y=o.newAttributes;for(let L=0,Y=y.length;L<Y;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const Y=o.newAttributes,B=o.enabledAttributes,W=o.attributeDivisors;Y[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),W[y]!==L&&(i.vertexAttribDivisor(y,L),W[y]=L)}function T(){const y=o.newAttributes,L=o.enabledAttributes;for(let Y=0,B=L.length;Y<B;Y++)L[Y]!==y[Y]&&(i.disableVertexAttribArray(Y),L[Y]=0)}function S(y,L,Y,B,W,q,G){G===!0?i.vertexAttribIPointer(y,L,Y,W,q):i.vertexAttribPointer(y,L,Y,B,W,q)}function b(y,L,Y,B){x();const W=B.attributes,q=Y.getAttributes(),G=L.defaultAttributeValues;for(const $ in q){const Z=q[$];if(Z.location>=0){let gt=W[$];if(gt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),gt!==void 0){const yt=gt.normalized,vt=gt.itemSize,Vt=t.get(gt);if(Vt===void 0)continue;const te=Vt.buffer,K=Vt.type,st=Vt.bytesPerElement,bt=K===i.INT||K===i.UNSIGNED_INT||gt.gpuType===Dl;if(gt.isInterleavedBufferAttribute){const ht=gt.data,Dt=ht.stride,Yt=gt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<Z.locationSize;Ot++)p(Z.location+Ot,ht.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<Z.locationSize;Ot++)m(Z.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ot=0;Ot<Z.locationSize;Ot++)S(Z.location+Ot,vt/Z.locationSize,K,yt,Dt*st,(Yt+vt/Z.locationSize*Ot)*st,bt)}else{if(gt.isInstancedBufferAttribute){for(let ht=0;ht<Z.locationSize;ht++)p(Z.location+ht,gt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ht=0;ht<Z.locationSize;ht++)m(Z.location+ht);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ht=0;ht<Z.locationSize;ht++)S(Z.location+ht,vt/Z.locationSize,K,yt,vt*st,vt/Z.locationSize*ht*st,bt)}}else if(G!==void 0){const yt=G[$];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(Z.location,yt);break;case 3:i.vertexAttrib3fv(Z.location,yt);break;case 4:i.vertexAttrib4fv(Z.location,yt);break;default:i.vertexAttrib1fv(Z.location,yt)}}}}T()}function U(){O();for(const y in n){const L=n[y];for(const Y in L){const B=L[Y];for(const W in B)h(B[W].object),delete B[W];delete L[Y]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const Y in L){const B=L[Y];for(const W in B)h(B[W].object),delete B[W];delete L[Y]}delete n[y.id]}function A(y){for(const L in n){const Y=n[L];if(Y[y.id]===void 0)continue;const B=Y[y.id];for(const W in B)h(B[W].object),delete B[W];delete Y[y.id]}}function O(){E(),r=!0,o!==s&&(o=s,c(o.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function ug(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dg(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===mo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==On&&!A)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:b,maxSamples:U}}function pg(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new ai,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const T=o?0:n,S=T*4;let b=p.clippingState||null;l.value=b,b=h(g,u,S,d);for(let U=0;U!==S;++U)b[U]=e[U];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=d;S!==x;++S,b+=4)r.copy(f[S]).applyMatrix4(T,a),r.normal.toArray(m,b),m[b+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function mg(i){let t=new WeakMap;function e(r,a){return a===Da?r.mapping=Ms:a===Ua&&(r.mapping=bs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Da||a===Ua)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Tp(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Lf extends Af{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,Jc=[.125,.215,.35,.446,.526,.582],Ci=20,ma=new Lf,Qc=new jt;let ga=null,_a=0,xa=0,va=!1;const wi=(1+Math.sqrt(5))/2,os=1/wi,th=[new P(-wi,os,0),new P(wi,os,0),new P(-os,0,wi),new P(os,0,wi),new P(0,wi,-os),new P(0,wi,os),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class eh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:mo,format:bn,colorSpace:_i,depthBuffer:!1},s=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(o)),this._blurMaterial=_g(o,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,n,s){const a=new ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Qc),h.toneMapping=di,h.autoClear=!1;const d=new mi({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new at(new ie,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Qc),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Qo(s,T*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ms||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new at(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=th[(s-o-1)%th.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new at(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),x=o/g,m=isFinite(o)?1+Math.floor(h*x):Ci;m>Ci&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let T=0;for(let A=0;A<Ci;++A){const O=A/x,E=Math.exp(-O*O/2);p.push(E),A===0?T+=E:A<m&&(T+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const b=this._sizeLods[s],U=3*b*(s>S-ds?s-S+ds:0),R=4*(this._cubeSize-b);Qo(e,U,R,3*b,2*b),l.setRenderTarget(e),l.render(f,ma)}}function gg(i){const t=[],e=[],n=[];let s=i;const o=i-ds+1+Jc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-ds?l=Jc[r-i+ds-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*d),S=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,O=R>2?0:-1,E=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];T.set(E,x*g*R),S.set(u,m*g*R);const y=[R,R,R,R,R,R];b.set(y,p*g*R)}const U=new Qe;U.setAttribute("position",new En(T,x)),U.setAttribute("uv",new En(S,m)),U.setAttribute("faceIndex",new En(b,p)),t.push(U),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(i,t,e){const n=new Ii(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _g(i,t,e){const n=new Float32Array(Ci),s=new P(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ih(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function sh(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}function xg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Da||l===Ua,h=l===Ms||l===bs;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new eh(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new eh(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function vg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yf("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,g=f.attributes.position;let x=0;if(d!==null){const T=d.array;x=d.version;for(let S=0,b=T.length;S<b;S+=3){const U=T[S+0],R=T[S+1],A=T[S+2];u.push(U,R,R,A,A,U)}}else if(g!==void 0){const T=g.array;x=g.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const U=S+0,R=S+1,A=S+2;u.push(U,R,R,A,A,U)}}else return;const m=new(Sf(u)?Tf:wf)(u,1);m.version=x;const p=o.get(f);p&&t.remove(p),o.set(f,m)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function yg(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,d){i.drawElements(n,d,o,u*r),e.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,u*r,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(u,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/r,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,u,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<x.length;T++)e.update(p,n,x[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Mg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bg(i,t,e){const n=new WeakMap,s=new me;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let y=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let U=a.attributes.position.count*b,R=1;U>t.maxTextureSize&&(R=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*R*4*f),O=new bf(A,U,R,f);O.type=On,O.needsUpdate=!0;const E=b*4;for(let L=0;L<f;L++){const Y=p[L],B=T[L],W=S[L],q=U*R*4*L;for(let G=0;G<Y.count;G++){const $=G*E;g===!0&&(s.fromBufferAttribute(Y,G),A[q+$+0]=s.x,A[q+$+1]=s.y,A[q+$+2]=s.z,A[q+$+3]=0),x===!0&&(s.fromBufferAttribute(B,G),A[q+$+4]=s.x,A[q+$+5]=s.y,A[q+$+6]=s.z,A[q+$+7]=0),m===!0&&(s.fromBufferAttribute(W,G),A[q+$+8]=s.x,A[q+$+9]=s.y,A[q+$+10]=s.z,A[q+$+11]=W.itemSize===4?s.w:1)}}u={count:f,texture:O,size:new et(U,R)},n.set(a,u),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Eg(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Of extends Ye{constructor(t,e,n,s,o,r,a,l,c,h=Ss){if(h!==Ss&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Oi),n===void 0&&h===ws&&(n=Es),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const If=new Ye,oh=new Of(1,1),Df=new bf,Uf=new hp,Nf=new Rf,rh=[],ah=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function As(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=rh[s];if(o===void 0&&(o=new Float32Array(s),rh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Oe(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),Ie(e,n)}}function Pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Oe(e,n))return;ch.set(n),i.uniformMatrix3fv(this.addr,!1,ch),Ie(e,n)}}function Lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Oe(e,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),Ie(e,n)}}function Og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(oh.compareFunction=vf,o=oh):o=If,e.setTexture2D(t||o,s)}function Hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uf,s)}function Xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nf,s)}function Yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Df,s)}function Gg(i){switch(i){case 5126:return wg;case 35664:return Tg;case 35665:return Cg;case 35666:return Ag;case 35674:return Rg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Og;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Vg(i,t){i.uniform1fv(this.addr,t)}function Wg(i,t){const e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){const e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function qg(i,t){const e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function Kg(i,t){const e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jg(i,t){const e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $g(i,t){const e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jg(i,t){i.uniform1iv(this.addr,t)}function Qg(i,t){i.uniform2iv(this.addr,t)}function t_(i,t){i.uniform3iv(this.addr,t)}function e_(i,t){i.uniform4iv(this.addr,t)}function n_(i,t){i.uniform1uiv(this.addr,t)}function i_(i,t){i.uniform2uiv(this.addr,t)}function s_(i,t){i.uniform3uiv(this.addr,t)}function o_(i,t){i.uniform4uiv(this.addr,t)}function r_(i,t,e){const n=this.cache,s=t.length,o=kr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||If,o[r])}function a_(i,t,e){const n=this.cache,s=t.length,o=kr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Uf,o[r])}function l_(i,t,e){const n=this.cache,s=t.length,o=kr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Nf,o[r])}function c_(i,t,e){const n=this.cache,s=t.length,o=kr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Df,o[r])}function h_(i){switch(i){case 5126:return Vg;case 35664:return Wg;case 35665:return Zg;case 35666:return qg;case 35674:return Kg;case 35675:return jg;case 35676:return $g;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class f_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}}class u_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h_(e.type)}}class d_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function p_(i,t,e){const n=i.name,s=n.length;for(Sa.lastIndex=0;;){const o=Sa.exec(n),r=Sa.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){fh(e,c===void 0?new f_(a,i,t):new u_(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new d_(a),fh(e,f)),e=f}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);p_(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function uh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const m_=37297;let g_=0;function __(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function x_(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===Ar&&e===Cr?n="LinearDisplayP3ToLinearSRGB":t===Cr&&e===Ar&&(n="LinearSRGBToLinearDisplayP3"),i){case _i:case zr:return[n,"LinearTransferOETF"];case xn:case Hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function dh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+__(i.getShaderSource(t),r)}else return s}function v_(i,t){const e=x_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function S_(i,t){let e;switch(t){case bd:e="Linear";break;case Ed:e="Reinhard";break;case wd:e="OptimizedCineon";break;case Td:e="ACESFilmic";break;case Ad:e="AgX";break;case Rd:e="Neutral";break;case Cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function M_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function b_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Xs(i){return i!==""}function ph(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(E_,T_)}const w_=new Map;function T_(i,t){let e=Wt[t];if(e===void 0){const n=w_.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(C_,A_)}function A_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function _h(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function R_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case bs:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===bs&&(t="ENVMAP_MODE_REFRACTION"),t}function O_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case af:t="ENVMAP_BLENDING_MULTIPLY";break;case yd:t="ENVMAP_BLENDING_MIX";break;case Md:t="ENVMAP_BLENDING_ADD";break}return t}function I_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=R_(e),c=P_(e),h=L_(e),f=O_(e),u=I_(e),d=y_(e),g=M_(o),x=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Wt.tonemapping_pars_fragment:"",e.toneMapping!==di?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),r=hl(r),r=ph(r,e),r=mh(r,e),a=hl(a),a=ph(a,e),a=mh(a,e),r=gh(r),a=gh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+r,b=T+p+a,U=uh(s,s.VERTEX_SHADER,S),R=uh(s,s.FRAGMENT_SHADER,b);s.attachShader(x,U),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(U).trim(),W=s.getShaderInfoLog(R).trim();let q=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,R);else{const $=dh(s,U,"vertex"),Z=dh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+$+`
`+Z)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(B===""||W==="")&&(G=!1);G&&(L.diagnostics={runnable:q,programLog:Y,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(U),s.deleteShader(R),O=new _r(s,x),E=b_(s,x)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,m_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=R,this}let U_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new F_(t),e.set(t,n)),n}}class F_{constructor(t){this.id=U_++,this.code=t,this.usedTimes=0}}function B_(i,t,e,n,s,o,r){const a=new Gl,l=new N_,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,L,Y,B){const W=Y.fog,q=B.geometry,G=E.isMeshStandardMaterial?Y.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),Z=$&&$.mapping===Br?$.image.height:null,gt=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=yt!==void 0?yt.length:0;let Vt=0;q.morphAttributes.position!==void 0&&(Vt=1),q.morphAttributes.normal!==void 0&&(Vt=2),q.morphAttributes.color!==void 0&&(Vt=3);let te,K,st,bt;if(gt){const ne=Pn[gt];te=ne.vertexShader,K=ne.fragmentShader}else te=E.vertexShader,K=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),bt=l.getFragmentShaderID(E);const ht=i.getRenderTarget(),Dt=B.isInstancedMesh===!0,Yt=B.isBatchedMesh===!0,Ot=!!E.map,Qt=!!E.matcap,w=!!$,rt=!!E.aoMap,nt=!!E.lightMap,ft=!!E.bumpMap,j=!!E.normalMap,Pt=!!E.displacementMap,dt=!!E.emissiveMap,Mt=!!E.metalnessMap,C=!!E.roughnessMap,v=E.anisotropy>0,k=E.clearcoat>0,tt=E.dispersion>0,Q=E.iridescence>0,J=E.sheen>0,Ct=E.transmission>0,ct=v&&!!E.anisotropyMap,xt=k&&!!E.clearcoatMap,Ht=k&&!!E.clearcoatNormalMap,ot=k&&!!E.clearcoatRoughnessMap,_t=Q&&!!E.iridescenceMap,Jt=Q&&!!E.iridescenceThicknessMap,Nt=J&&!!E.sheenColorMap,Et=J&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,Xt=!!E.specularColorMap,ge=!!E.specularIntensityMap,_=Ct&&!!E.transmissionMap,F=Ct&&!!E.thicknessMap,z=!!E.gradientMap,V=!!E.alphaMap,it=E.alphaTest>0,At=!!E.alphaHash,zt=!!E.extensions;let Ee=di;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Pe={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:K,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:_i,alphaToCoverage:!!E.alphaToCoverage,map:Ot,matcap:Qt,envMap:w,envMapMode:w&&$.mapping,envMapCubeUVHeight:Z,aoMap:rt,lightMap:nt,bumpMap:ft,normalMap:j,displacementMap:u&&Pt,emissiveMap:dt,normalMapObjectSpace:j&&E.normalMapType===Id,normalMapTangentSpace:j&&E.normalMapType===xf,metalnessMap:Mt,roughnessMap:C,anisotropy:v,anisotropyMap:ct,clearcoat:k,clearcoatMap:xt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:Jt,sheen:J,sheenColorMap:Nt,sheenRoughnessMap:Et,specularMap:Bt,specularColorMap:Xt,specularIntensityMap:ge,transmission:Ct,transmissionMap:_,thicknessMap:F,gradientMap:z,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:V,alphaTest:it,alphaHash:At,combine:E.combine,mapUv:Ot&&x(E.map.channel),aoMapUv:rt&&x(E.aoMap.channel),lightMapUv:nt&&x(E.lightMap.channel),bumpMapUv:ft&&x(E.bumpMap.channel),normalMapUv:j&&x(E.normalMap.channel),displacementMapUv:Pt&&x(E.displacementMap.channel),emissiveMapUv:dt&&x(E.emissiveMap.channel),metalnessMapUv:Mt&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:ct&&x(E.anisotropyMap.channel),clearcoatMapUv:xt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Et&&x(E.sheenRoughnessMap.channel),specularMapUv:Bt&&x(E.specularMap.channel),specularColorMapUv:Xt&&x(E.specularColorMap.channel),specularIntensityMapUv:ge&&x(E.specularIntensityMap.channel),transmissionMapUv:_&&x(E.transmissionMap.channel),thicknessMapUv:F&&x(E.thicknessMap.channel),alphaMapUv:V&&x(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Ot||V),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ot&&E.map.isVideoTexture===!0&&he.getTransfer(E.map.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yn,flipSided:E.side===$e,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&E.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(T(y,E),S(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function T(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),E.push(a.mask)}function b(E){const y=g[E.type];let L;if(y){const Y=Pn[y];L=Mp.clone(Y.uniforms)}else L=E.uniforms;return L}function U(E,y){let L;for(let Y=0,B=h.length;Y<B;Y++){const W=h[Y];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new D_(i,y,E,o),h.push(L)),L}function R(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:U,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:O}}function z_(){let i=new WeakMap;function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function e(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function k_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(f,u,d,g,x,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,u,d,g,x,m){const p=r(f,u,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(f,u,d,g,x,m){const p=r(f,u,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,u){e.length>1&&e.sort(f||k_),n.length>1&&n.sort(u||xh),s.length>1&&s.sort(u||xh)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function H_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new vh,i.set(n,[r])):s>=o.length?(r=new vh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function X_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new jt};break;case"SpotLight":e={position:new P,direction:new P,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W_(i){const t=new X_,e=Y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,o=new fe,r=new fe;function a(c){let h=0,f=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,T=0,S=0,b=0,U=0,R=0,A=0;c.sort(V_);for(let E=0,y=c.length;E<y;E++){const L=c[E],Y=L.color,B=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Y.r*B,f+=Y.g*B,u+=Y.b*B;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],B);A++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,T++}n.directional[d]=G,d++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(Y).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;const $=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,$.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=$.matrix,L.castShadow){const Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=q,b++}x++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(Y).multiplyScalar(B),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(B),G.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const O=n.hash;(O.directionalLength!==d||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==T||O.numPointShadows!==S||O.numSpotShadows!==b||O.numSpotMaps!==U||O.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,O.directionalLength=d,O.pointLength=g,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=T,O.numPointShadows=S,O.numSpotShadows=b,O.numSpotMaps=U,O.numLightProbes=A,n.version=G_++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(S.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Sh(i){const t=new W_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Z_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Sh(i),t.set(s,[a])):o>=r.length?(a=new Sh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class q_ extends _o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class K_ extends _o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`;function J_(i,t,e){let n=new Vl;const s=new et,o=new et,r=new me,a=new q_({depthPacking:Od}),l=new K_,c={},h=e.maxTextureSize,f={[pi]:$e,[$e]:pi,[yn]:yn},u=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:j_,fragmentShader:$_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new at(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let p=this.type;this.render=function(R,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ui),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const B=p!==Vn&&this.type===Vn,W=p===Vn&&this.type!==Vn;for(let q=0,G=R.length;q<G;q++){const $=R[q],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const gt=Z.getFrameExtents();if(s.multiply(gt),o.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/gt.x),s.x=o.x*gt.x,Z.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/gt.y),s.y=o.y*gt.y,Z.mapSize.y=o.y)),Z.map===null||B===!0||W===!0){const vt=this.type!==Vn?{minFilter:je,magFilter:je}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ii(s.x,s.y,vt),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const yt=Z.getViewportCount();for(let vt=0;vt<yt;vt++){const Vt=Z.getViewport(vt);r.set(o.x*Vt.x,o.y*Vt.y,o.x*Vt.z,o.y*Vt.w),Y.viewport(r),Z.updateMatrices($,vt),n=Z.getFrustum(),b(A,O,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Vn&&T(Z,O),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,L)};function T(R,A){const O=t.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ii(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,O,u,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,O,d,x,null)}function S(R,A,O,E){let y=null;const L=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=y.uuid,B=A.uuid;let W=c[Y];W===void 0&&(W={},c[Y]=W);let q=W[B];q===void 0&&(q=y.clone(),W[B]=q,A.addEventListener("dispose",U)),y=q}if(y.visible=A.visible,y.wireframe=A.wireframe,E===Vn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Y=i.properties.get(y);Y.light=O}return y}function b(R,A,O,E,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const B=t.update(R),W=R.material;if(Array.isArray(W)){const q=B.groups;for(let G=0,$=q.length;G<$;G++){const Z=q[G],gt=W[Z.materialIndex];if(gt&&gt.visible){const yt=S(R,gt,E,y);R.onBeforeShadow(i,R,A,O,B,yt,Z),i.renderBufferDirect(O,null,B,yt,R,Z),R.onAfterShadow(i,R,A,O,B,yt,Z)}}}else if(W.visible){const q=S(R,W,E,y);R.onBeforeShadow(i,R,A,O,B,q,null),i.renderBufferDirect(O,null,B,q,R,null),R.onAfterShadow(i,R,A,O,B,q,null)}}const Y=R.children;for(let B=0,W=Y.length;B<W;B++)b(Y[B],A,O,E,y)}function U(R){R.target.removeEventListener("dispose",U);for(const O in c){const E=c[O],y=R.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function Q_(i){function t(){let _=!1;const F=new me;let z=null;const V=new me(0,0,0,0);return{setMask:function(it){z!==it&&!_&&(i.colorMask(it,it,it,it),z=it)},setLocked:function(it){_=it},setClear:function(it,At,zt,Ee,Pe){Pe===!0&&(it*=Ee,At*=Ee,zt*=Ee),F.set(it,At,zt,Ee),V.equals(F)===!1&&(i.clearColor(it,At,zt,Ee),V.copy(F))},reset:function(){_=!1,z=null,V.set(-1,0,0,0)}}}function e(){let _=!1,F=null,z=null,V=null;return{setTest:function(it){it?bt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(it){F!==it&&!_&&(i.depthMask(it),F=it)},setFunc:function(it){if(z!==it){switch(it){case pd:i.depthFunc(i.NEVER);break;case md:i.depthFunc(i.ALWAYS);break;case gd:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case _d:i.depthFunc(i.EQUAL);break;case xd:i.depthFunc(i.GEQUAL);break;case vd:i.depthFunc(i.GREATER);break;case Sd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=it}},setLocked:function(it){_=it},setClear:function(it){V!==it&&(i.clearDepth(it),V=it)},reset:function(){_=!1,F=null,z=null,V=null}}}function n(){let _=!1,F=null,z=null,V=null,it=null,At=null,zt=null,Ee=null,Pe=null;return{setTest:function(ne){_||(ne?bt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ne){F!==ne&&!_&&(i.stencilMask(ne),F=ne)},setFunc:function(ne,Le,Te){(z!==ne||V!==Le||it!==Te)&&(i.stencilFunc(ne,Le,Te),z=ne,V=Le,it=Te)},setOp:function(ne,Le,Te){(At!==ne||zt!==Le||Ee!==Te)&&(i.stencilOp(ne,Le,Te),At=ne,zt=Le,Ee=Te)},setLocked:function(ne){_=ne},setClear:function(ne){Pe!==ne&&(i.clearStencil(ne),Pe=ne)},reset:function(){_=!1,F=null,z=null,V=null,it=null,At=null,zt=null,Ee=null,Pe=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,m=null,p=null,T=null,S=null,b=null,U=null,R=new jt(0,0,0),A=0,O=!1,E=null,y=null,L=null,Y=null,B=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),q=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=G>=2);let Z=null,gt={};const yt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Vt=new me().fromArray(yt),te=new me().fromArray(vt);function K(_,F,z,V){const it=new Uint8Array(4),At=i.createTexture();i.bindTexture(_,At),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<z;zt++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(F,0,i.RGBA,1,1,V,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(F+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return At}const st={};st[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),bt(i.DEPTH_TEST),o.setFunc(wr),ft(!1),j(wc),bt(i.CULL_FACE),rt(ui);function bt(_){c[_]!==!0&&(i.enable(_),c[_]=!0)}function ht(_){c[_]!==!1&&(i.disable(_),c[_]=!1)}function Dt(_,F){return h[_]!==F?(i.bindFramebuffer(_,F),h[_]=F,_===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=F),_===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=F),!0):!1}function Yt(_,F){let z=u,V=!1;if(_){z=f.get(F),z===void 0&&(z=[],f.set(F,z));const it=_.textures;if(z.length!==it.length||z[0]!==i.COLOR_ATTACHMENT0){for(let At=0,zt=it.length;At<zt;At++)z[At]=i.COLOR_ATTACHMENT0+At;z.length=it.length,V=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,V=!0);V&&i.drawBuffers(z)}function Ot(_){return d!==_?(i.useProgram(_),d=_,!0):!1}const Qt={[Ti]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};Qt[Qu]=i.MIN,Qt[td]=i.MAX;const w={[ed]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[od]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[rd]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[fd]:i.ONE_MINUS_CONSTANT_COLOR,[ud]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(_,F,z,V,it,At,zt,Ee,Pe,ne){if(_===ui){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(bt(i.BLEND),g=!0),_!==ju){if(_!==x||ne!==O){if((m!==Ti||S!==Ti)&&(i.blendEquation(i.FUNC_ADD),m=Ti,S=Ti),ne)switch(_){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}p=null,T=null,b=null,U=null,R.set(0,0,0),A=0,x=_,O=ne}return}it=it||F,At=At||z,zt=zt||V,(F!==m||it!==S)&&(i.blendEquationSeparate(Qt[F],Qt[it]),m=F,S=it),(z!==p||V!==T||At!==b||zt!==U)&&(i.blendFuncSeparate(w[z],w[V],w[At],w[zt]),p=z,T=V,b=At,U=zt),(Ee.equals(R)===!1||Pe!==A)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Pe),R.copy(Ee),A=Pe),x=_,O=!1}function nt(_,F){_.side===yn?ht(i.CULL_FACE):bt(i.CULL_FACE);let z=_.side===$e;F&&(z=!z),ft(z),_.blending===vs&&_.transparent===!1?rt(ui):rt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),o.setFunc(_.depthFunc),o.setTest(_.depthTest),o.setMask(_.depthWrite),s.setMask(_.colorWrite);const V=_.stencilWrite;r.setTest(V),V&&(r.setMask(_.stencilWriteMask),r.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),r.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),dt(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(_){E!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),E=_)}function j(_){_!==Zu?(bt(i.CULL_FACE),_!==y&&(_===wc?i.cullFace(i.BACK):_===qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),y=_}function Pt(_){_!==L&&(q&&i.lineWidth(_),L=_)}function dt(_,F,z){_?(bt(i.POLYGON_OFFSET_FILL),(Y!==F||B!==z)&&(i.polygonOffset(F,z),Y=F,B=z)):ht(i.POLYGON_OFFSET_FILL)}function Mt(_){_?bt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function C(_){_===void 0&&(_=i.TEXTURE0+W-1),Z!==_&&(i.activeTexture(_),Z=_)}function v(_,F,z){z===void 0&&(Z===null?z=i.TEXTURE0+W-1:z=Z);let V=gt[z];V===void 0&&(V={type:void 0,texture:void 0},gt[z]=V),(V.type!==_||V.texture!==F)&&(Z!==z&&(i.activeTexture(z),Z=z),i.bindTexture(_,F||st[_]),V.type=_,V.texture=F)}function k(){const _=gt[Z];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Nt(_){Vt.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),Vt.copy(_))}function Et(_){te.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),te.copy(_))}function Bt(_,F){let z=l.get(F);z===void 0&&(z=new WeakMap,l.set(F,z));let V=z.get(_);V===void 0&&(V=i.getUniformBlockIndex(F,_.name),z.set(_,V))}function Xt(_,F){const V=l.get(F).get(_);a.get(F)!==V&&(i.uniformBlockBinding(F,V,_.__bindingPointIndex),a.set(F,V))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Z=null,gt={},h={},f=new WeakMap,u=[],d=null,g=!1,x=null,m=null,p=null,T=null,S=null,b=null,U=null,R=new jt(0,0,0),A=0,O=!1,E=null,y=null,L=null,Y=null,B=null,Vt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:bt,disable:ht,bindFramebuffer:Dt,drawBuffers:Yt,useProgram:Ot,setBlending:rt,setMaterial:nt,setFlipSided:ft,setCullFace:j,setLineWidth:Pt,setPolygonOffset:dt,setScissorTest:Mt,activeTexture:C,bindTexture:v,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:Q,texImage2D:_t,texImage3D:Jt,updateUBOMapping:Bt,uniformBlockBinding:Xt,texStorage2D:Ht,texStorage3D:ot,texSubImage2D:J,texSubImage3D:Ct,compressedTexSubImage2D:ct,compressedTexSubImage3D:xt,scissor:Nt,viewport:Et,reset:ge}}function yh(i,t,e,n){const s=tx(n);switch(e){case uf:return i*t;case pf:return i*t;case mf:return i*t*2;case Fl:return i*t/s.components*s.byteLength;case Bl:return i*t/s.components*s.byteLength;case gf:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case df:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case kl:return i*t*4/s.components*s.byteLength;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Ba:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gr:case ol:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _f:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tx(i){switch(i){case Kn:case cf:return{byteLength:1,components:1};case ro:case hf:case mo:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case Oi:case Dl:case On:return{byteLength:4,components:1};case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ex(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return d?new OffscreenCanvas(C,v):Pr("canvas")}function x(C,v,k){let tt=1;const Q=Mt(C);if((Q.width>k||Q.height>k)&&(tt=k/Math.max(Q.width,Q.height)),tt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(tt*Q.width),Ct=Math.floor(tt*Q.height);f===void 0&&(f=g(J,Ct));const ct=v?g(J,Ct):f;return ct.width=J,ct.height=Ct,ct.getContext("2d").drawImage(C,0,0,J,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+Ct+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==je&&C.minFilter!==Mn}function p(C){i.generateMipmap(C)}function T(C,v,k,tt,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=v;if(v===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),v===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){const Ct=Q?Tr:he.getTransfer(tt);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=Ct===pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(C,v){let k;return C?v===null||v===Oi||v===Es?k=i.DEPTH24_STENCIL8:v===On?k=i.DEPTH32F_STENCIL8:v===ro&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Oi||v===Es?k=i.DEPTH_COMPONENT24:v===On?k=i.DEPTH_COMPONENT32F:v===ro&&(k=i.DEPTH_COMPONENT16),k}function b(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==Mn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function U(C){const v=C.target;v.removeEventListener("dispose",U),A(v),v.isVideoTexture&&h.delete(v)}function R(C){const v=C.target;v.removeEventListener("dispose",R),E(v)}function A(C){const v=n.get(C);if(v.__webglInit===void 0)return;const k=C.source,tt=u.get(k);if(tt){const Q=tt[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(C),Object.keys(tt).length===0&&u.delete(k)}n.remove(C)}function O(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const k=C.source,tt=u.get(k);delete tt[v.__cacheKey],r.memory.textures--}function E(C){const v=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let Q=0;Q<v.__webglFramebuffer[tt].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[tt][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=C.textures;for(let tt=0,Q=k.length;tt<Q;tt++){const J=n.get(k[tt]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(k[tt])}n.remove(C)}let y=0;function L(){y=0}function Y(){const C=y;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),y+=1,C}function B(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function W(C,v){const k=n.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(k,C,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function q(C,v){const k=n.get(C);if(C.version>0&&k.__version!==C.version){te(k,C,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function G(C,v){const k=n.get(C);if(C.version>0&&k.__version!==C.version){te(k,C,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function $(C,v){const k=n.get(C);if(C.version>0&&k.__version!==C.version){K(k,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const Z={[Na]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},gt={[je]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},yt={[Dd]:i.NEVER,[kd]:i.ALWAYS,[Ud]:i.LESS,[vf]:i.LEQUAL,[Nd]:i.EQUAL,[zd]:i.GEQUAL,[Fd]:i.GREATER,[Bd]:i.NOTEQUAL};function vt(C,v){if(v.type===On&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Mn||v.magFilter===jr||v.magFilter===Oo||v.magFilter===Ri||v.minFilter===Mn||v.minFilter===jr||v.minFilter===Oo||v.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,gt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Oo&&v.minFilter!==Ri||v.type===On&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",U));const tt=v.source;let Q=u.get(tt);Q===void 0&&(Q={},u.set(tt,Q));const J=B(v);if(J!==C.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,k=!0),Q[J].usedTimes++;const Ct=Q[C.__cacheKey];Ct!==void 0&&(Q[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&O(v)),C.__cacheKey=J,C.__webglTexture=Q[J].texture}return k}function te(C,v,k){let tt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=i.TEXTURE_3D);const Q=Vt(C,v),J=v.source;e.bindTexture(tt,C.__webglTexture,i.TEXTURE0+k);const Ct=n.get(J);if(J.version!==Ct.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);const ct=he.getPrimaries(he.workingColorSpace),xt=v.colorSpace===ci?null:he.getPrimaries(v.colorSpace),Ht=v.colorSpace===ci||ct===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let ot=x(v.image,!1,s.maxTextureSize);ot=dt(v,ot);const _t=o.convert(v.format,v.colorSpace),Jt=o.convert(v.type);let Nt=T(v.internalFormat,_t,Jt,v.colorSpace,v.isVideoTexture);vt(tt,v);let Et;const Bt=v.mipmaps,Xt=v.isVideoTexture!==!0,ge=Ct.__version===void 0||Q===!0,_=J.dataReady,F=b(v,ot);if(v.isDepthTexture)Nt=S(v.format===ws,v.type),ge&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Nt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ot.width,ot.height,0,_t,Jt,null));else if(v.isDataTexture)if(Bt.length>0){Xt&&ge&&e.texStorage2D(i.TEXTURE_2D,F,Nt,Bt[0].width,Bt[0].height);for(let z=0,V=Bt.length;z<V;z++)Et=Bt[z],Xt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,Et.width,Et.height,_t,Jt,Et.data):e.texImage2D(i.TEXTURE_2D,z,Nt,Et.width,Et.height,0,_t,Jt,Et.data);v.generateMipmaps=!1}else Xt?(ge&&e.texStorage2D(i.TEXTURE_2D,F,Nt,ot.width,ot.height),_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,_t,Jt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,ot.width,ot.height,0,_t,Jt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,F,Nt,Bt[0].width,Bt[0].height,ot.depth);for(let z=0,V=Bt.length;z<V;z++)if(Et=Bt[z],v.format!==bn)if(_t!==null)if(Xt){if(_)if(v.layerUpdates.size>0){const it=yh(Et.width,Et.height,v.format,v.type);for(const At of v.layerUpdates){const zt=Et.data.subarray(At*it/Et.data.BYTES_PER_ELEMENT,(At+1)*it/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,At,Et.width,Et.height,1,_t,zt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Et.width,Et.height,ot.depth,_t,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Nt,Et.width,Et.height,ot.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?_&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,Et.width,Et.height,ot.depth,_t,Jt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Nt,Et.width,Et.height,ot.depth,0,_t,Jt,Et.data)}else{Xt&&ge&&e.texStorage2D(i.TEXTURE_2D,F,Nt,Bt[0].width,Bt[0].height);for(let z=0,V=Bt.length;z<V;z++)Et=Bt[z],v.format!==bn?_t!==null?Xt?_&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,Et.width,Et.height,_t,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Nt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,Et.width,Et.height,_t,Jt,Et.data):e.texImage2D(i.TEXTURE_2D,z,Nt,Et.width,Et.height,0,_t,Jt,Et.data)}else if(v.isDataArrayTexture)if(Xt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,F,Nt,ot.width,ot.height,ot.depth),_)if(v.layerUpdates.size>0){const z=yh(ot.width,ot.height,v.format,v.type);for(const V of v.layerUpdates){const it=ot.data.subarray(V*z/ot.data.BYTES_PER_ELEMENT,(V+1)*z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,V,ot.width,ot.height,1,_t,Jt,it)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,_t,Jt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ot.width,ot.height,ot.depth,0,_t,Jt,ot.data);else if(v.isData3DTexture)Xt?(ge&&e.texStorage3D(i.TEXTURE_3D,F,Nt,ot.width,ot.height,ot.depth),_&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,_t,Jt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ot.width,ot.height,ot.depth,0,_t,Jt,ot.data);else if(v.isFramebufferTexture){if(ge)if(Xt)e.texStorage2D(i.TEXTURE_2D,F,Nt,ot.width,ot.height);else{let z=ot.width,V=ot.height;for(let it=0;it<F;it++)e.texImage2D(i.TEXTURE_2D,it,Nt,z,V,0,_t,Jt,null),z>>=1,V>>=1}}else if(Bt.length>0){if(Xt&&ge){const z=Mt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,F,Nt,z.width,z.height)}for(let z=0,V=Bt.length;z<V;z++)Et=Bt[z],Xt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,_t,Jt,Et):e.texImage2D(i.TEXTURE_2D,z,Nt,_t,Jt,Et);v.generateMipmaps=!1}else if(Xt){if(ge){const z=Mt(ot);e.texStorage2D(i.TEXTURE_2D,F,Nt,z.width,z.height)}_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Jt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Nt,_t,Jt,ot);m(v)&&p(tt),Ct.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function K(C,v,k){if(v.image.length!==6)return;const tt=Vt(C,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const J=n.get(Q);if(Q.version!==J.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);const Ct=he.getPrimaries(he.workingColorSpace),ct=v.colorSpace===ci?null:he.getPrimaries(v.colorSpace),xt=v.colorSpace===ci||Ct===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ht=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let V=0;V<6;V++)!Ht&&!ot?_t[V]=x(v.image[V],!0,s.maxCubemapSize):_t[V]=ot?v.image[V].image:v.image[V],_t[V]=dt(v,_t[V]);const Jt=_t[0],Nt=o.convert(v.format,v.colorSpace),Et=o.convert(v.type),Bt=T(v.internalFormat,Nt,Et,v.colorSpace),Xt=v.isVideoTexture!==!0,ge=J.__version===void 0||tt===!0,_=Q.dataReady;let F=b(v,Jt);vt(i.TEXTURE_CUBE_MAP,v);let z;if(Ht){Xt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,F,Bt,Jt.width,Jt.height);for(let V=0;V<6;V++){z=_t[V].mipmaps;for(let it=0;it<z.length;it++){const At=z[it];v.format!==bn?Nt!==null?Xt?_&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,0,0,At.width,At.height,Nt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,0,0,At.width,At.height,Nt,Et,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,Bt,At.width,At.height,0,Nt,Et,At.data)}}}else{if(z=v.mipmaps,Xt&&ge){z.length>0&&F++;const V=Mt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,F,Bt,V.width,V.height)}for(let V=0;V<6;V++)if(ot){Xt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,_t[V].width,_t[V].height,Nt,Et,_t[V].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Bt,_t[V].width,_t[V].height,0,Nt,Et,_t[V].data);for(let it=0;it<z.length;it++){const zt=z[it].image[V].image;Xt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,0,0,zt.width,zt.height,Nt,Et,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,Bt,zt.width,zt.height,0,Nt,Et,zt.data)}}else{Xt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Nt,Et,_t[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Bt,Nt,Et,_t[V]);for(let it=0;it<z.length;it++){const At=z[it];Xt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,0,0,Nt,Et,At.image[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,Bt,Nt,Et,At.image[V])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),J.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function st(C,v,k,tt,Q,J){const Ct=o.convert(k.format,k.colorSpace),ct=o.convert(k.type),xt=T(k.internalFormat,Ct,ct,k.colorSpace);if(!n.get(v).__hasExternalTextures){const ot=Math.max(1,v.width>>J),_t=Math.max(1,v.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,xt,ot,_t,v.depth,0,Ct,ct,null):e.texImage2D(Q,J,xt,ot,_t,0,Ct,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Q,n.get(k).__webglTexture,0,ft(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,Q,n.get(k).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(C,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const tt=v.depthTexture,Q=tt&&tt.isDepthTexture?tt.type:null,J=S(v.stencilBuffer,Q),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ft(v);j(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,J,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{const tt=v.textures;for(let Q=0;Q<tt.length;Q++){const J=tt[Q],Ct=o.convert(J.format,J.colorSpace),ct=o.convert(J.type),xt=T(J.internalFormat,Ct,ct,J.colorSpace),Ht=ft(v);k&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,xt,v.width,v.height):j(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const tt=n.get(v.depthTexture).__webglTexture,Q=ft(v);if(v.depthTexture.format===Ss)j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===ws)j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const v=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ht(v.__webglFramebuffer,C)}else if(k){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]=i.createRenderbuffer(),bt(v.__webglDepthbuffer[tt],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),bt(v.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(C,v,k){const tt=n.get(C);v!==void 0&&st(tt.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Dt(C)}function Ot(C){const v=C.texture,k=n.get(C),tt=n.get(v);C.addEventListener("dispose",R);const Q=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ct=Q.length>1;if(Ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=v.version,r.memory.textures++),J){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let xt=0;xt<v.mipmaps.length;xt++)k.__webglFramebuffer[ct][xt]=i.createFramebuffer()}else k.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)k.__webglFramebuffer[ct]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ct=0,xt=Q.length;ct<xt;ct++){const Ht=n.get(Q[ct]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&j(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const xt=Q[ct];k.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const Ht=o.convert(xt.format,xt.colorSpace),ot=o.convert(xt.type),_t=T(xt.internalFormat,Ht,ot,xt.colorSpace,C.isXRRenderTarget===!0),Jt=ft(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,_t,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),vt(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)st(k.__webglFramebuffer[ct][xt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,xt);else st(k.__webglFramebuffer[ct],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ct=0,xt=Q.length;ct<xt;ct++){const Ht=Q[ct],ot=n.get(Ht);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),vt(i.TEXTURE_2D,Ht),st(k.__webglFramebuffer,C,Ht,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Ht)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),vt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)st(k.__webglFramebuffer[xt],C,v,i.COLOR_ATTACHMENT0,ct,xt);else st(k.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}C.depthBuffer&&Dt(C)}function Qt(C){const v=C.textures;for(let k=0,tt=v.length;k<tt;k++){const Q=v[k];if(m(Q)){const J=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ct=n.get(Q).__webglTexture;e.bindTexture(J,Ct),p(J),e.unbindTexture()}}}const w=[],rt=[];function nt(C){if(C.samples>0){if(j(C)===!1){const v=C.textures,k=C.width,tt=C.height;let Q=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),ct=v.length>1;if(ct)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[xt]);const Ht=n.get(v[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,k,tt,0,0,k,tt,Q,i.NEAREST),l===!0&&(w.length=0,rt.length=0,w.push(i.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(w.push(J),rt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[xt]);const Ht=n.get(v[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ft(C){return Math.min(s.maxSamples,C.samples)}function j(C){const v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(C){const v=r.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function dt(C,v){const k=C.colorSpace,tt=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==_i&&k!==ci&&(he.getTransfer(k)===pe?(tt!==bn||Q!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Yt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=j}function nx(i,t){function e(n,s=ci){let o;const r=he.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cf)return i.BYTE;if(n===hf)return i.SHORT;if(n===ro)return i.UNSIGNED_SHORT;if(n===Dl)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===mo)return i.HALF_FLOAT;if(n===uf)return i.ALPHA;if(n===df)return i.RGB;if(n===bn)return i.RGBA;if(n===pf)return i.LUMINANCE;if(n===mf)return i.LUMINANCE_ALPHA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===gf)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===ur||n===dr||n===pr||n===mr)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===za||n===ka||n===Ha)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===Ya||n===Ga)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Xa||n===Ya)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ga)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Wa||n===Za||n===qa||n===Ka||n===ja||n===$a||n===Ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Va)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gr||n===ol||n===rl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===gr)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_f||n===al||n===ll||n===cl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===gr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===al)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ix extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sx={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`;class ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gi({vertexShader:ox,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new xo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lx extends Fi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const x=new ax,m=e.getContextAttributes();let p=null,T=null;const S=[],b=[],U=new et;let R=null;const A=new ln;A.layers.enable(1),A.viewport=new me;const O=new ln;O.layers.enable(2),O.viewport=new me;const E=[A,O],y=new ix;y.layers.enable(1),y.layers.enable(2);let L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=S[K];return st===void 0&&(st=new ya,S[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=S[K];return st===void 0&&(st=new ya,S[K]=st),st.getGripSpace()},this.getHand=function(K){let st=S[K];return st===void 0&&(st=new ya,S[K]=st),st.getHandSpace()};function B(K){const st=b.indexOf(K.inputSource);if(st===-1)return;const bt=S[st];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||r),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let K=0;K<S.length;K++){const st=b[K];st!==null&&(b[K]=null,S[K].disconnect(st))}L=null,Y=null,x.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,T=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Ii(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,bt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ws:Ss,bt=m.stencil?Es:Oi);const Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:o};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new Ii(u.textureWidth,u.textureHeight,{format:bn,type:Kn,depthTexture:new Of(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let st=0;st<K.removed.length;st++){const bt=K.removed[st],ht=b.indexOf(bt);ht>=0&&(b[ht]=null,S[ht].disconnect(bt))}for(let st=0;st<K.added.length;st++){const bt=K.added[st];let ht=b.indexOf(bt);if(ht===-1){for(let Yt=0;Yt<S.length;Yt++)if(Yt>=b.length){b.push(bt),ht=Yt;break}else if(b[Yt]===null){b[Yt]=bt,ht=Yt;break}if(ht===-1)break}const Dt=S[ht];Dt&&Dt.connect(bt)}}const G=new P,$=new P;function Z(K,st,bt){G.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(bt.matrixWorld);const ht=G.distanceTo($),Dt=st.projectionMatrix.elements,Yt=bt.projectionMatrix.elements,Ot=Dt[14]/(Dt[10]-1),Qt=Dt[14]/(Dt[10]+1),w=(Dt[9]+1)/Dt[5],rt=(Dt[9]-1)/Dt[5],nt=(Dt[8]-1)/Dt[0],ft=(Yt[8]+1)/Yt[0],j=Ot*nt,Pt=Ot*ft,dt=ht/(-nt+ft),Mt=dt*-nt;st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const C=Ot+dt,v=Qt+dt,k=j-Mt,tt=Pt+(ht-Mt),Q=w*Qt/v*C,J=rt*Qt/v*C;K.projectionMatrix.makePerspective(k,tt,Q,J,C,v),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function gt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;x.texture!==null&&(K.near=x.depthNear,K.far=x.depthFar),y.near=O.near=A.near=K.near,y.far=O.far=A.far=K.far,(L!==y.near||Y!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,Y=y.far,A.near=L,A.far=Y,O.near=L,O.far=Y,A.updateProjectionMatrix(),O.updateProjectionMatrix(),K.updateProjectionMatrix());const st=K.parent,bt=y.cameras;gt(y,st);for(let ht=0;ht<bt.length;ht++)gt(bt[ht],st);bt.length===2?Z(y,A,O):y.projectionMatrix.copy(A.projectionMatrix),yt(K,y,st)};function yt(K,st,bt){bt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ao*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let vt=null;function Vt(K,st){if(h=st.getViewerPose(c||r),g=st,h!==null){const bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let ht=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Yt=0;Yt<bt.length;Yt++){const Ot=bt[Yt];let Qt=null;if(d!==null)Qt=d.getViewport(Ot);else{const rt=f.getViewSubImage(u,Ot);Qt=rt.viewport,Yt===0&&(t.setRenderTargetTextures(T,rt.colorTexture,u.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(T))}let w=E[Yt];w===void 0&&(w=new ln,w.layers.enable(Yt),w.viewport=new me,E[Yt]=w),w.matrix.fromArray(Ot.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ot.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Yt===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(w)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Yt=f.getDepthInformation(bt[0]);Yt&&Yt.isValid&&Yt.texture&&x.init(t,Yt,s.renderState)}}for(let bt=0;bt<S.length;bt++){const ht=b[bt],Dt=S[bt];ht!==null&&Dt!==void 0&&Dt.update(ht,st,c||r)}vt&&vt(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const te=new Pf;te.setAnimationLoop(Vt),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}}const Ei=new Dn,cx=new fe;function hx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,b=T.envMapRotation;S&&(m.envMap.value=S,Ei.copy(b),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(cx.makeRotationFromEuler(Ei)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const b=S.program;n.uniformBlockBinding(T,b)}function c(T,S){let b=s[T.id];b===void 0&&(g(T),b=h(T),s[T.id]=b,T.addEventListener("dispose",m));const U=S.program;n.updateUBOMapping(T,U);const R=t.render.frame;o[T.id]!==R&&(u(T),o[T.id]=R)}function h(T){const S=f();T.__bindingPointIndex=S;const b=i.createBuffer(),U=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const S=s[T.id],b=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=b.length;R<A;R++){const O=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,y=O.length;E<y;E++){const L=O[E];if(d(L,R,E,U)===!0){const Y=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<B.length;q++){const G=B[q],$=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,Y+W,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,S,b,U){const R=T.value,A=S+"_"+b;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const O=U[A];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return U[A]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(T){const S=T.uniforms;let b=0;const U=16;for(let A=0,O=S.length;A<O;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,L=E.length;y<L;y++){const Y=E[y],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let W=0,q=B.length;W<q;W++){const G=B[W],$=x(G),Z=b%U;Z!==0&&U-Z<$.boundary&&(b+=U-Z),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=$.storage}}}const R=b%U;return R>0&&(b+=U-R),T.__size=b,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const b=r.indexOf(S.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class ux{constructor(t={}){const{canvas:e=ip(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=di,this.toneMappingExposure=1;const S=this;let b=!1,U=0,R=0,A=null,O=-1,E=null;const y=new me,L=new me;let Y=null;const B=new jt(0);let W=0,q=e.width,G=e.height,$=1,Z=null,gt=null;const yt=new me(0,0,q,G),vt=new me(0,0,q,G);let Vt=!1;const te=new Vl;let K=!1,st=!1;const bt=new fe,ht=new P,Dt=new me,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Qt(){return A===null?$:1}let w=n;function rt(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",it,!1),w===null){const D="webgl2";if(w=rt(D,M),w===null)throw rt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let nt,ft,j,Pt,dt,Mt,C,v,k,tt,Q,J,Ct,ct,xt,Ht,ot,_t,Jt,Nt,Et,Bt,Xt,ge;function _(){nt=new vg(w),nt.init(),Bt=new nx(w,nt),ft=new dg(w,nt,t,Bt),j=new Q_(w),Pt=new Mg(w),dt=new z_,Mt=new ex(w,nt,j,dt,ft,Bt,Pt),C=new mg(S),v=new xg(S),k=new Rp(w),Xt=new fg(w,k),tt=new Sg(w,k,Pt,Xt),Q=new Eg(w,tt,k,Pt),Jt=new bg(w,ft,Mt),Ht=new pg(dt),J=new B_(S,C,v,nt,ft,Xt,Ht),Ct=new hx(S,dt),ct=new H_,xt=new Z_(nt),_t=new hg(S,C,v,j,Q,u,l),ot=new J_(S,Q,ft),ge=new fx(w,Pt,ft,j),Nt=new ug(w,nt,Pt),Et=new yg(w,nt,Pt),Pt.programs=J.programs,S.capabilities=ft,S.extensions=nt,S.properties=dt,S.renderLists=ct,S.shadowMap=ot,S.state=j,S.info=Pt}_();const F=new lx(S,w);this.xr=F,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(q,G,!1))},this.getSize=function(M){return M.set(q,G)},this.setSize=function(M,D,H=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,G=D,e.width=Math.floor(M*$),e.height=Math.floor(D*$),H===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(q*$,G*$).floor()},this.setDrawingBufferSize=function(M,D,H){q=M,G=D,$=H,e.width=Math.floor(M*H),e.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,D,H,X){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,D,H,X),j.viewport(y.copy(yt).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,D,H,X){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,D,H,X),j.scissor(L.copy(vt).multiplyScalar($).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(M){j.setScissorTest(Vt=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){gt=M},this.getClearColor=function(M){return M.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(M=!0,D=!0,H=!0){let X=0;if(M){let N=!1;if(A!==null){const lt=A.texture.format;N=lt===kl||lt===zl||lt===Bl}if(N){const lt=A.texture.type,St=lt===Kn||lt===Oi||lt===ro||lt===Es||lt===Ul||lt===Nl,wt=_t.getClearColor(),Tt=_t.getClearAlpha(),Ft=wt.r,kt=wt.g,Lt=wt.b;St?(d[0]=Ft,d[1]=kt,d[2]=Lt,d[3]=Tt,w.clearBufferuiv(w.COLOR,0,d)):(g[0]=Ft,g[1]=kt,g[2]=Lt,g[3]=Tt,w.clearBufferiv(w.COLOR,0,g))}else X|=w.COLOR_BUFFER_BIT}D&&(X|=w.DEPTH_BUFFER_BIT),H&&(X|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ct.dispose(),xt.dispose(),dt.dispose(),C.dispose(),v.dispose(),Q.dispose(),Xt.dispose(),ge.dispose(),J.dispose(),F.dispose(),F.removeEventListener("sessionstart",Te),F.removeEventListener("sessionend",Qn),ze.stop()};function z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=Pt.autoReset,D=ot.enabled,H=ot.autoUpdate,X=ot.needsUpdate,N=ot.type;_(),Pt.autoReset=M,ot.enabled=D,ot.autoUpdate=H,ot.needsUpdate=X,ot.type=N}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function At(M){const D=M.target;D.removeEventListener("dispose",At),zt(D)}function zt(M){Ee(M),dt.remove(M)}function Ee(M){const D=dt.get(M).programs;D!==void 0&&(D.forEach(function(H){J.releaseProgram(H)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,X,N,lt){D===null&&(D=Yt);const St=N.isMesh&&N.matrixWorld.determinant()<0,wt=Yu(M,D,H,X,N);j.setMaterial(X,St);let Tt=H.index,Ft=1;if(X.wireframe===!0){if(Tt=tt.getWireframeAttribute(H),Tt===void 0)return;Ft=2}const kt=H.drawRange,Lt=H.attributes.position;let re=kt.start*Ft,Me=(kt.start+kt.count)*Ft;lt!==null&&(re=Math.max(re,lt.start*Ft),Me=Math.min(Me,(lt.start+lt.count)*Ft)),Tt!==null?(re=Math.max(re,0),Me=Math.min(Me,Tt.count)):Lt!=null&&(re=Math.max(re,0),Me=Math.min(Me,Lt.count));const be=Me-re;if(be<0||be===1/0)return;Xt.setup(N,X,wt,H,Tt);let tn,ae=Nt;if(Tt!==null&&(tn=k.get(Tt),ae=Et,ae.setIndex(tn)),N.isMesh)X.wireframe===!0?(j.setLineWidth(X.wireframeLinewidth*Qt()),ae.setMode(w.LINES)):ae.setMode(w.TRIANGLES);else if(N.isLine){let Rt=X.linewidth;Rt===void 0&&(Rt=1),j.setLineWidth(Rt*Qt()),N.isLineSegments?ae.setMode(w.LINES):N.isLineLoop?ae.setMode(w.LINE_LOOP):ae.setMode(w.LINE_STRIP)}else N.isPoints?ae.setMode(w.POINTS):N.isSprite&&ae.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,ke=N._multiDrawCounts,le=N._multiDrawCount,pn=Tt?k.get(Tt).bytesPerElement:1,ki=dt.get(X).currentProgram.getUniforms();for(let en=0;en<le;en++)ki.setValue(w,"_gl_DrawID",en),ae.render(Rt[en]/pn,ke[en])}else if(N.isInstancedMesh)ae.renderInstances(re,be,N.count);else if(H.isInstancedBufferGeometry){const Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ke=Math.min(H.instanceCount,Rt);ae.renderInstances(re,be,ke)}else ae.render(re,be)};function Pe(M,D,H){M.transparent===!0&&M.side===yn&&M.forceSinglePass===!1?(M.side=$e,M.needsUpdate=!0,Lo(M,D,H),M.side=pi,M.needsUpdate=!0,Lo(M,D,H),M.side=yn):Lo(M,D,H)}this.compile=function(M,D,H=null){H===null&&(H=M),m=xt.get(H),m.init(D),T.push(m),H.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==H&&M.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const X=new Set;return M.traverse(function(N){const lt=N.material;if(lt)if(Array.isArray(lt))for(let St=0;St<lt.length;St++){const wt=lt[St];Pe(wt,H,N),X.add(wt)}else Pe(lt,H,N),X.add(lt)}),T.pop(),m=null,X},this.compileAsync=function(M,D,H=null){const X=this.compile(M,D,H);return new Promise(N=>{function lt(){if(X.forEach(function(St){dt.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){N(M);return}setTimeout(lt,10)}nt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ne=null;function Le(M){ne&&ne(M)}function Te(){ze.stop()}function Qn(){ze.start()}const ze=new Pf;ze.setAnimationLoop(Le),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(M){ne=M,F.setAnimationLoop(M),M===null?ze.stop():ze.start()},F.addEventListener("sessionstart",Te),F.addEventListener("sessionend",Qn),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(D),D=F.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,D,A),m=xt.get(M,T.length),m.init(D),T.push(m),bt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),te.setFromProjectionMatrix(bt),st=this.localClippingEnabled,K=Ht.init(this.clippingPlanes,st),x=ct.get(M,p.length),x.init(),p.push(x),F.enabled===!0&&F.isPresenting===!0){const lt=S.xr.getDepthSensingMesh();lt!==null&&Bn(lt,D,-1/0,S.sortObjects)}Bn(M,D,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(Z,gt),Ot=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Ot&&_t.addToRenderList(x,M),this.info.render.frame++,K===!0&&Ht.beginShadows();const H=m.state.shadowsArray;ot.render(H,M,D),K===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,N=x.transmissive;if(m.setupLights(),D.isArrayCamera){const lt=D.cameras;if(N.length>0)for(let St=0,wt=lt.length;St<wt;St++){const Tt=lt[St];Os(X,N,M,Tt)}Ot&&_t.render(M);for(let St=0,wt=lt.length;St<wt;St++){const Tt=lt[St];xi(x,M,Tt,Tt.viewport)}}else N.length>0&&Os(X,N,M,D),Ot&&_t.render(M),xi(x,M,D);A!==null&&(Mt.updateMultisampleRenderTarget(A),Mt.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(S,M,D),Xt.resetDefaultState(),O=-1,E=null,T.pop(),T.length>0?(m=T[T.length-1],K===!0&&Ht.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Bn(M,D,H,X){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||te.intersectsSprite(M)){X&&Dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);const St=Q.update(M),wt=M.material;wt.visible&&x.push(M,St,wt,H,Dt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||te.intersectsObject(M))){const St=Q.update(M),wt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Dt.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Dt.copy(St.boundingSphere.center)),Dt.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(wt)){const Tt=St.groups;for(let Ft=0,kt=Tt.length;Ft<kt;Ft++){const Lt=Tt[Ft],re=wt[Lt.materialIndex];re&&re.visible&&x.push(M,St,re,H,Dt.z,Lt)}}else wt.visible&&x.push(M,St,wt,H,Dt.z,null)}}const lt=M.children;for(let St=0,wt=lt.length;St<wt;St++)Bn(lt[St],D,H,X)}function xi(M,D,H,X){const N=M.opaque,lt=M.transmissive,St=M.transparent;m.setupLightsView(H),K===!0&&Ht.setGlobalState(S.clippingPlanes,H),X&&j.viewport(y.copy(X)),N.length>0&&Po(N,D,H),lt.length>0&&Po(lt,D,H),St.length>0&&Po(St,D,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Os(M,D,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ii(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?mo:Kn,minFilter:Ri,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const lt=m.state.transmissionRenderTarget[X.id],St=X.viewport||y;lt.setSize(St.z,St.w);const wt=S.getRenderTarget();S.setRenderTarget(lt),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),Ot?_t.render(H):S.clear();const Tt=S.toneMapping;S.toneMapping=di;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),K===!0&&Ht.setGlobalState(S.clippingPlanes,X),Po(M,H,X),Mt.updateMultisampleRenderTarget(lt),Mt.updateRenderTargetMipmap(lt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Lt=0,re=D.length;Lt<re;Lt++){const Me=D[Lt],be=Me.object,tn=Me.geometry,ae=Me.material,Rt=Me.group;if(ae.side===yn&&be.layers.test(X.layers)){const ke=ae.side;ae.side=$e,ae.needsUpdate=!0,yc(be,H,X,tn,ae,Rt),ae.side=ke,ae.needsUpdate=!0,kt=!0}}kt===!0&&(Mt.updateMultisampleRenderTarget(lt),Mt.updateRenderTargetMipmap(lt))}S.setRenderTarget(wt),S.setClearColor(B,W),Ft!==void 0&&(X.viewport=Ft),S.toneMapping=Tt}function Po(M,D,H){const X=D.isScene===!0?D.overrideMaterial:null;for(let N=0,lt=M.length;N<lt;N++){const St=M[N],wt=St.object,Tt=St.geometry,Ft=X===null?St.material:X,kt=St.group;wt.layers.test(H.layers)&&yc(wt,D,H,Tt,Ft,kt)}}function yc(M,D,H,X,N,lt){M.onBeforeRender(S,D,H,X,N,lt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=$e,N.needsUpdate=!0,S.renderBufferDirect(H,D,X,N,M,lt),N.side=pi,N.needsUpdate=!0,S.renderBufferDirect(H,D,X,N,M,lt),N.side=yn):S.renderBufferDirect(H,D,X,N,M,lt),M.onAfterRender(S,D,H,X,N,lt)}function Lo(M,D,H){D.isScene!==!0&&(D=Yt);const X=dt.get(M),N=m.state.lights,lt=m.state.shadowsArray,St=N.state.version,wt=J.getParameters(M,N.state,lt,D,H),Tt=J.getProgramCacheKey(wt);let Ft=X.programs;X.environment=M.isMeshStandardMaterial?D.environment:null,X.fog=D.fog,X.envMap=(M.isMeshStandardMaterial?v:C).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",At),Ft=new Map,X.programs=Ft);let kt=Ft.get(Tt);if(kt!==void 0){if(X.currentProgram===kt&&X.lightsStateVersion===St)return bc(M,wt),kt}else wt.uniforms=J.getUniforms(M),M.onBeforeCompile(wt,S),kt=J.acquireProgram(wt,Tt),Ft.set(Tt,kt),X.uniforms=wt.uniforms;const Lt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=Ht.uniform),bc(M,wt),X.needsLights=Vu(M),X.lightsStateVersion=St,X.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=kt,X.uniformsList=null,kt}function Mc(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=_r.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function bc(M,D){const H=dt.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Yu(M,D,H,X,N){D.isScene!==!0&&(D=Yt),Mt.resetTextureUnits();const lt=D.fog,St=X.isMeshStandardMaterial?D.environment:null,wt=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:_i,Tt=(X.isMeshStandardMaterial?v:C).get(X.envMap||St),Ft=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!H.morphAttributes.position,re=!!H.morphAttributes.normal,Me=!!H.morphAttributes.color;let be=di;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(be=S.toneMapping);const tn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=tn!==void 0?tn.length:0,Rt=dt.get(X),ke=m.state.lights;if(K===!0&&(st===!0||M!==E)){const hn=M===E&&X.id===O;Ht.setState(X,M,hn)}let le=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ke.state.version||Rt.outputColorSpace!==wt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==Tt||X.fog===!0&&Rt.fog!==lt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ht.numPlanes||Rt.numIntersection!==Ht.numIntersection)||Rt.vertexAlphas!==Ft||Rt.vertexTangents!==kt||Rt.morphTargets!==Lt||Rt.morphNormals!==re||Rt.morphColors!==Me||Rt.toneMapping!==be||Rt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Rt.__version=X.version);let pn=Rt.currentProgram;le===!0&&(pn=Lo(X,D,N));let ki=!1,en=!1,Zr=!1;const Ce=pn.getUniforms(),ti=Rt.uniforms;if(j.useProgram(pn.program)&&(ki=!0,en=!0,Zr=!0),X.id!==O&&(O=X.id,en=!0),ki||E!==M){Ce.setValue(w,"projectionMatrix",M.projectionMatrix),Ce.setValue(w,"viewMatrix",M.matrixWorldInverse);const hn=Ce.map.cameraPosition;hn!==void 0&&hn.setValue(w,ht.setFromMatrixPosition(M.matrixWorld)),ft.logarithmicDepthBuffer&&Ce.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,en=!0,Zr=!0)}if(N.isSkinnedMesh){Ce.setOptional(w,N,"bindMatrix"),Ce.setOptional(w,N,"bindMatrixInverse");const hn=N.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ce.setValue(w,"boneTexture",hn.boneTexture,Mt))}N.isBatchedMesh&&(Ce.setOptional(w,N,"batchingTexture"),Ce.setValue(w,"batchingTexture",N._matricesTexture,Mt),Ce.setOptional(w,N,"batchingIdTexture"),Ce.setValue(w,"batchingIdTexture",N._indirectTexture,Mt),Ce.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&Ce.setValue(w,"batchingColorTexture",N._colorsTexture,Mt));const qr=H.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Jt.update(N,H,pn),(en||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,Ce.setValue(w,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ti.envMap.value=Tt,ti.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&D.environment!==null&&(ti.envMapIntensity.value=D.environmentIntensity),en&&(Ce.setValue(w,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&Gu(ti,Zr),lt&&X.fog===!0&&Ct.refreshFogUniforms(ti,lt),Ct.refreshMaterialUniforms(ti,X,$,G,m.state.transmissionRenderTarget[M.id]),_r.upload(w,Mc(Rt),ti,Mt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_r.upload(w,Mc(Rt),ti,Mt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(w,"center",N.center),Ce.setValue(w,"modelViewMatrix",N.modelViewMatrix),Ce.setValue(w,"normalMatrix",N.normalMatrix),Ce.setValue(w,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const hn=X.uniformsGroups;for(let Kr=0,Wu=hn.length;Kr<Wu;Kr++){const Ec=hn[Kr];ge.update(Ec,pn),ge.bind(Ec,pn)}}return pn}function Gu(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Vu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,D,H){dt.get(M.texture).__webglTexture=D,dt.get(M.depthTexture).__webglTexture=H;const X=dt.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const H=dt.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){A=M,U=D,R=H;let X=!0,N=null,lt=!1,St=!1;if(M){const Tt=dt.get(M);Tt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(w.FRAMEBUFFER,null),X=!1):Tt.__webglFramebuffer===void 0?Mt.setupRenderTarget(M):Tt.__hasExternalTextures&&Mt.rebindTextures(M,dt.get(M.texture).__webglTexture,dt.get(M.depthTexture).__webglTexture);const Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(St=!0);const kt=dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(kt[D])?N=kt[D][H]:N=kt[D],lt=!0):M.samples>0&&Mt.useMultisampledRTT(M)===!1?N=dt.get(M).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[H]:N=kt,y.copy(M.viewport),L.copy(M.scissor),Y=M.scissorTest}else y.copy(yt).multiplyScalar($).floor(),L.copy(vt).multiplyScalar($).floor(),Y=Vt;if(j.bindFramebuffer(w.FRAMEBUFFER,N)&&X&&j.drawBuffers(M,N),j.viewport(y),j.scissor(L),j.setScissorTest(Y),lt){const Tt=dt.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,H)}else if(St){const Tt=dt.get(M.texture),Ft=D||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,Ft)}O=-1},this.readRenderTargetPixels=function(M,D,H,X,N,lt,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){j.bindFramebuffer(w.FRAMEBUFFER,wt);try{const Tt=M.texture,Ft=Tt.format,kt=Tt.type;if(!ft.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-X&&H>=0&&H<=M.height-N&&w.readPixels(D,H,X,N,Bt.convert(Ft),Bt.convert(kt),lt)}finally{const Tt=A!==null?dt.get(A).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,D,H,X,N,lt,St){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){j.bindFramebuffer(w.FRAMEBUFFER,wt);try{const Tt=M.texture,Ft=Tt.format,kt=Tt.type;if(!ft.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-X&&H>=0&&H<=M.height-N){const Lt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.bufferData(w.PIXEL_PACK_BUFFER,lt.byteLength,w.STREAM_READ),w.readPixels(D,H,X,N,Bt.convert(Ft),Bt.convert(kt),0),w.flush();const re=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await sp(w,re,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,lt)}finally{w.deleteBuffer(Lt),w.deleteSync(re)}return lt}}finally{const Tt=A!==null?dt.get(A).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(M,D=null,H=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const X=Math.pow(2,-H),N=Math.floor(M.image.width*X),lt=Math.floor(M.image.height*X),St=D!==null?D.x:0,wt=D!==null?D.y:0;Mt.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,St,wt,N,lt),j.unbindTexture()},this.copyTextureToTexture=function(M,D,H=null,X=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],D=arguments[2],N=arguments[3]||0,H=null);let lt,St,wt,Tt,Ft,kt;H!==null?(lt=H.max.x-H.min.x,St=H.max.y-H.min.y,wt=H.min.x,Tt=H.min.y):(lt=M.image.width,St=M.image.height,wt=0,Tt=0),X!==null?(Ft=X.x,kt=X.y):(Ft=0,kt=0);const Lt=Bt.convert(D.format),re=Bt.convert(D.type);Mt.setTexture2D(D,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const Me=w.getParameter(w.UNPACK_ROW_LENGTH),be=w.getParameter(w.UNPACK_IMAGE_HEIGHT),tn=w.getParameter(w.UNPACK_SKIP_PIXELS),ae=w.getParameter(w.UNPACK_SKIP_ROWS),Rt=w.getParameter(w.UNPACK_SKIP_IMAGES),ke=M.isCompressedTexture?M.mipmaps[N]:M.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Tt),M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Ft,kt,lt,St,Lt,re,ke.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Ft,kt,ke.width,ke.height,Lt,ke.data):w.texSubImage2D(w.TEXTURE_2D,N,Ft,kt,lt,St,Lt,re,ke),w.pixelStorei(w.UNPACK_ROW_LENGTH,Me),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,be),w.pixelStorei(w.UNPACK_SKIP_PIXELS,tn),w.pixelStorei(w.UNPACK_SKIP_ROWS,ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Rt),N===0&&D.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(M,D,H=null,X=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,M=arguments[2],D=arguments[3],N=arguments[4]||0);let lt,St,wt,Tt,Ft,kt,Lt,re,Me;const be=M.isCompressedTexture?M.mipmaps[N]:M.image;H!==null?(lt=H.max.x-H.min.x,St=H.max.y-H.min.y,wt=H.max.z-H.min.z,Tt=H.min.x,Ft=H.min.y,kt=H.min.z):(lt=be.width,St=be.height,wt=be.depth,Tt=0,Ft=0,kt=0),X!==null?(Lt=X.x,re=X.y,Me=X.z):(Lt=0,re=0,Me=0);const tn=Bt.convert(D.format),ae=Bt.convert(D.type);let Rt;if(D.isData3DTexture)Mt.setTexture3D(D,0),Rt=w.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Mt.setTexture2DArray(D,0),Rt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const ke=w.getParameter(w.UNPACK_ROW_LENGTH),le=w.getParameter(w.UNPACK_IMAGE_HEIGHT),pn=w.getParameter(w.UNPACK_SKIP_PIXELS),ki=w.getParameter(w.UNPACK_SKIP_ROWS),en=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,be.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,be.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ft),w.pixelStorei(w.UNPACK_SKIP_IMAGES,kt),M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Rt,N,Lt,re,Me,lt,St,wt,tn,ae,be.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,N,Lt,re,Me,lt,St,wt,tn,be.data):w.texSubImage3D(Rt,N,Lt,re,Me,lt,St,wt,tn,ae,be),w.pixelStorei(w.UNPACK_ROW_LENGTH,ke),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,le),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pn),w.pixelStorei(w.UNPACK_SKIP_ROWS,ki),w.pixelStorei(w.UNPACK_SKIP_IMAGES,en),N===0&&D.generateMipmaps&&w.generateMipmap(Rt),j.unbindTexture()},this.initRenderTarget=function(M){dt.get(M).__webglFramebuffer===void 0&&Mt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Mt.setTextureCube(M,0):M.isData3DTexture?Mt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Mt.setTexture2DArray(M,0):Mt.setTexture2D(M,0),j.unbindTexture()},this.resetState=function(){U=0,R=0,A=null,j.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Hl?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===zr?"display-p3":"srgb"}}class Hr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new Hr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dx extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class px extends Ye{constructor(t=null,e=1,n=1,s,o,r,a,l,c=je,h=je,f,u){super(null,r,a,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mh extends En{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rs=new fe,bh=new fe,tr=[],Eh=new zi,mx=new fe,Fs=new at,Bs=new go;class gx extends at{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Eh.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(Eh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Bs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,rs),bh.multiplyMatrices(n,rs),Fs.matrixWorld=bh,Fs.raycast(t,tr);for(let r=0,a=tr.length;r<a;r++){const l=tr[r];l.instanceId=o,l.object=this,e.push(l)}tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new px(new Float32Array(s*this.count),s,this.count,Fl,On));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _x extends Ye{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new et:new P);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],o=[],r=[],a=new P,l=new fe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}o[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Re(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zl extends Un{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xx extends Zl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ql(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const er=new P,Ma=new ql,ba=new ql,Ea=new ql;class Kl extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(er.subVectors(s[0],s[1]).add(s[0]),c=er);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(er.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=er),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ma.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,m),ba.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,m),Ea.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ba.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ea.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ma.calc(l),ba.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function vx(i,t){const e=1-i;return e*e*t}function Sx(i,t){return 2*(1-i)*i*t}function yx(i,t){return i*i*t}function to(i,t,e,n){return vx(i,t)+Sx(i,e)+yx(i,n)}function Mx(i,t){const e=1-i;return e*e*e*t}function bx(i,t){const e=1-i;return 3*e*e*i*t}function Ex(i,t){return 3*(1-i)*i*i*t}function wx(i,t){return i*i*i*t}function eo(i,t,e,n,s){return Mx(i,t)+bx(i,e)+Ex(i,n)+wx(i,s)}class Ff extends Un{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(eo(t,s.x,o.x,r.x,a.x),eo(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tx extends Un{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(eo(t,s.x,o.x,r.x,a.x),eo(t,s.y,o.y,r.y,a.y),eo(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bf extends Un{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cx extends Un{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Un{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(to(t,s.x,o.x,r.x),to(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends Un{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(to(t,s.x,o.x,r.x),to(t,s.y,o.y,r.y),to(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hf extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(wh(a,l.x,c.x,h.x,f.x),wh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var Lr=Object.freeze({__proto__:null,ArcCurve:xx,CatmullRomCurve3:Kl,CubicBezierCurve:Ff,CubicBezierCurve3:Tx,EllipseCurve:Zl,LineCurve:Bf,LineCurve3:Cx,QuadraticBezierCurve:zf,QuadraticBezierCurve3:kf,SplineCurve:Hf});class Ax extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Lr[s.type]().fromJSON(s))}return this}}class fl extends Ax{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bf(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new zf(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Ff(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Zl(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xr extends Qe{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Re(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,f=new P,u=new et,d=new P,g=new P,x=new P;let m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let T=0;T<=e;T++){const S=n+T*h*s,b=Math.sin(S),U=Math.cos(S);for(let R=0;R<=t.length-1;R++){f.x=t[R].x*b,f.y=t[R].y,f.z=t[R].x*U,r.push(f.x,f.y,f.z),u.x=T/e,u.y=R/(t.length-1),a.push(u.x,u.y);const A=l[3*R+0]*b,O=l[3*R+1],E=l[3*R+0]*U;c.push(A,O,E)}}for(let T=0;T<e;T++)for(let S=0;S<t.length-1;S++){const b=S+T*t.length,U=b,R=b+t.length,A=b+t.length+1,O=b+1;o.push(U,R,O),o.push(A,O,R)}this.setIndex(o),this.setAttribute("position",new xe(r,3)),this.setAttribute("uv",new xe(a,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.points,t.segments,t.phiStart,t.phiLength)}}class jl extends Xr{constructor(t=1,e=1,n=4,s=8){const o=new fl;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new jl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Gt extends Qe{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let g=0;const x=[],m=n/2;let p=0;T(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function T(){const b=new P,U=new P;let R=0;const A=(e-t)/n;for(let O=0;O<=o;O++){const E=[],y=O/o,L=y*(e-t)+t;for(let Y=0;Y<=s;Y++){const B=Y/s,W=B*l+a,q=Math.sin(W),G=Math.cos(W);U.x=L*q,U.y=-y*n+m,U.z=L*G,f.push(U.x,U.y,U.z),b.set(q,A,G).normalize(),u.push(b.x,b.y,b.z),d.push(B,1-y),E.push(g++)}x.push(E)}for(let O=0;O<s;O++)for(let E=0;E<o;E++){const y=x[E][O],L=x[E+1][O],Y=x[E+1][O+1],B=x[E][O+1];h.push(y,L,B),h.push(L,Y,B),R+=6}c.addGroup(p,R,0),p+=R}function S(b){const U=g,R=new et,A=new P;let O=0;const E=b===!0?t:e,y=b===!0?1:-1;for(let Y=1;Y<=s;Y++)f.push(0,m*y,0),u.push(0,y,0),d.push(.5,.5),g++;const L=g;for(let Y=0;Y<=s;Y++){const W=Y/s*l+a,q=Math.cos(W),G=Math.sin(W);A.x=E*G,A.y=m*y,A.z=E*q,f.push(A.x,A.y,A.z),u.push(0,y,0),R.x=q*.5+.5,R.y=G*.5*y+.5,d.push(R.x,R.y),g++}for(let Y=0;Y<s;Y++){const B=U+Y,W=L+Y;b===!0?h.push(W,W+1,B):h.push(W+1,W,B),O+=3}c.addGroup(p,O,b===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends fl{constructor(t){super(t),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new fl().fromJSON(s))}return this}}const Rx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Xf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,f,u,d;if(n&&(o=Dx(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)f=i[g],u=i[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return lo(o,r,e,a,l,d,0),r}};function Xf(i,t,e,n,s){let o,r;if(s===Vx(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Th(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Th(o,i[o],i[o+1],r);return r&&Yr(r,r.next)&&(ho(r),r=r.next),r}function Ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||ye(e.prev,e,e.next)===0)){if(ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lo(i,t,e,n,s,o,r){if(!i)return;!r&&o&&zx(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?Lx(i,n,s,o):Px(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ho(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Ox(Ui(i),t,e),lo(i,t,e,n,s,o,2)):r===2&&Ix(i,t,e,n,s,o):lo(Ui(i),t,e,n,s,o,1);break}}}function Px(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,f=a<l?a<c?a:c:l<c?l:c,u=s>o?s>r?s:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&ps(s,a,o,l,r,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lx(i,t,e,n){const s=i.prev,o=i,r=i.next;if(ye(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,u=r.y,d=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,x=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=ul(d,g,t,e,n),T=ul(x,m,t,e,n);let S=i.prevZ,b=i.nextZ;for(;S&&S.z>=p&&b&&b.z<=T;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&ps(a,h,l,f,c,u,S.x,S.y)&&ye(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==r&&ps(a,h,l,f,c,u,b.x,b.y)&&ye(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&ps(a,h,l,f,c,u,S.x,S.y)&&ye(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=T;){if(b.x>=d&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==r&&ps(a,h,l,f,c,u,b.x,b.y)&&ye(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ox(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Yr(s,o)&&Yf(s,n,n.next,o)&&co(s,o)&&co(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),ho(n),ho(n.next),n=i=o),n=n.next}while(n!==i);return Ui(n)}function Ix(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Xx(r,a)){let l=Gf(r,a);r=Ui(r,r.next),l=Ui(l,l.next),lo(r,t,e,n,s,o,0),lo(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Dx(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Xf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Hx(c));for(s.sort(Ux),o=0;o<s.length;o++)e=Nx(s[o],e);return e}function Ux(i,t){return i.x-t.x}function Nx(i,t){const e=Fx(i,t);if(!e)return t;const n=Gf(e,i);return Ui(n,n.next),Ui(e,e.next)}function Fx(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&ps(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),co(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&Bx(s,e)))&&(s=e,h=f)),e=e.next;while(e!==a);return s}function Bx(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function zx(i,t,e,n){let s=i;do s.z===0&&(s.z=ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kx(s)}function kx(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ps(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Xx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yx(i,t)&&(co(i,t)&&co(t,i)&&Gx(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||Yr(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yr(i,t){return i.x===t.x&&i.y===t.y}function Yf(i,t,e,n){const s=ir(ye(i,t,e)),o=ir(ye(i,t,n)),r=ir(ye(e,n,i)),a=ir(ye(e,n,t));return!!(s!==o&&r!==a||s===0&&nr(i,e,t)||o===0&&nr(i,n,t)||r===0&&nr(e,i,n)||a===0&&nr(e,t,n))}function nr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ir(i){return i>0?1:i<0?-1:0}function Yx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function co(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function Gx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gf(i,t){const e=new dl(i.i,i.x,i.y),n=new dl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Th(i,t,e,n){const s=new dl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vx(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class no{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return no.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Ch(t),Ah(n,t);let r=t.length;e.forEach(Ch);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Ah(n,e[l]);const a=Rx.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Ch(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ah(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class De extends Qe{constructor(t=new Rs([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Wx;let S,b=!1,U,R,A,O;p&&(S=p.getSpacedPoints(h),b=!0,u=!1,U=p.computeFrenetFrames(h,!1),R=new P,A=new P,O=new P),u||(m=0,d=0,g=0,x=0);const E=a.extractPoints(c);let y=E.shape;const L=E.holes;if(!no.isClockWise(y)){y=y.reverse();for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];no.isClockWise(nt)&&(L[w]=nt.reverse())}}const B=no.triangulateShape(y,L),W=y;for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];y=y.concat(nt)}function q(w,rt,nt){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(rt,nt)}const G=y.length,$=B.length;function Z(w,rt,nt){let ft,j,Pt;const dt=w.x-rt.x,Mt=w.y-rt.y,C=nt.x-w.x,v=nt.y-w.y,k=dt*dt+Mt*Mt,tt=dt*v-Mt*C;if(Math.abs(tt)>Number.EPSILON){const Q=Math.sqrt(k),J=Math.sqrt(C*C+v*v),Ct=rt.x-Mt/Q,ct=rt.y+dt/Q,xt=nt.x-v/J,Ht=nt.y+C/J,ot=((xt-Ct)*v-(Ht-ct)*C)/(dt*v-Mt*C);ft=Ct+dt*ot-w.x,j=ct+Mt*ot-w.y;const _t=ft*ft+j*j;if(_t<=2)return new et(ft,j);Pt=Math.sqrt(_t/2)}else{let Q=!1;dt>Number.EPSILON?C>Number.EPSILON&&(Q=!0):dt<-Number.EPSILON?C<-Number.EPSILON&&(Q=!0):Math.sign(Mt)===Math.sign(v)&&(Q=!0),Q?(ft=-Mt,j=dt,Pt=Math.sqrt(k)):(ft=dt,j=Mt,Pt=Math.sqrt(k/2))}return new et(ft/Pt,j/Pt)}const gt=[];for(let w=0,rt=W.length,nt=rt-1,ft=w+1;w<rt;w++,nt++,ft++)nt===rt&&(nt=0),ft===rt&&(ft=0),gt[w]=Z(W[w],W[nt],W[ft]);const yt=[];let vt,Vt=gt.concat();for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];vt=[];for(let ft=0,j=nt.length,Pt=j-1,dt=ft+1;ft<j;ft++,Pt++,dt++)Pt===j&&(Pt=0),dt===j&&(dt=0),vt[ft]=Z(nt[ft],nt[Pt],nt[dt]);yt.push(vt),Vt=Vt.concat(vt)}for(let w=0;w<m;w++){const rt=w/m,nt=d*Math.cos(rt*Math.PI/2),ft=g*Math.sin(rt*Math.PI/2)+x;for(let j=0,Pt=W.length;j<Pt;j++){const dt=q(W[j],gt[j],ft);ht(dt.x,dt.y,-nt)}for(let j=0,Pt=L.length;j<Pt;j++){const dt=L[j];vt=yt[j];for(let Mt=0,C=dt.length;Mt<C;Mt++){const v=q(dt[Mt],vt[Mt],ft);ht(v.x,v.y,-nt)}}}const te=g+x;for(let w=0;w<G;w++){const rt=u?q(y[w],Vt[w],te):y[w];b?(A.copy(U.normals[0]).multiplyScalar(rt.x),R.copy(U.binormals[0]).multiplyScalar(rt.y),O.copy(S[0]).add(A).add(R),ht(O.x,O.y,O.z)):ht(rt.x,rt.y,0)}for(let w=1;w<=h;w++)for(let rt=0;rt<G;rt++){const nt=u?q(y[rt],Vt[rt],te):y[rt];b?(A.copy(U.normals[w]).multiplyScalar(nt.x),R.copy(U.binormals[w]).multiplyScalar(nt.y),O.copy(S[w]).add(A).add(R),ht(O.x,O.y,O.z)):ht(nt.x,nt.y,f/h*w)}for(let w=m-1;w>=0;w--){const rt=w/m,nt=d*Math.cos(rt*Math.PI/2),ft=g*Math.sin(rt*Math.PI/2)+x;for(let j=0,Pt=W.length;j<Pt;j++){const dt=q(W[j],gt[j],ft);ht(dt.x,dt.y,f+nt)}for(let j=0,Pt=L.length;j<Pt;j++){const dt=L[j];vt=yt[j];for(let Mt=0,C=dt.length;Mt<C;Mt++){const v=q(dt[Mt],vt[Mt],ft);b?ht(v.x,v.y+S[h-1].y,S[h-1].x+nt):ht(v.x,v.y,f+nt)}}}K(),st();function K(){const w=s.length/3;if(u){let rt=0,nt=G*rt;for(let ft=0;ft<$;ft++){const j=B[ft];Dt(j[2]+nt,j[1]+nt,j[0]+nt)}rt=h+m*2,nt=G*rt;for(let ft=0;ft<$;ft++){const j=B[ft];Dt(j[0]+nt,j[1]+nt,j[2]+nt)}}else{for(let rt=0;rt<$;rt++){const nt=B[rt];Dt(nt[2],nt[1],nt[0])}for(let rt=0;rt<$;rt++){const nt=B[rt];Dt(nt[0]+G*h,nt[1]+G*h,nt[2]+G*h)}}n.addGroup(w,s.length/3-w,0)}function st(){const w=s.length/3;let rt=0;bt(W,rt),rt+=W.length;for(let nt=0,ft=L.length;nt<ft;nt++){const j=L[nt];bt(j,rt),rt+=j.length}n.addGroup(w,s.length/3-w,1)}function bt(w,rt){let nt=w.length;for(;--nt>=0;){const ft=nt;let j=nt-1;j<0&&(j=w.length-1);for(let Pt=0,dt=h+m*2;Pt<dt;Pt++){const Mt=G*Pt,C=G*(Pt+1),v=rt+ft+Mt,k=rt+j+Mt,tt=rt+j+C,Q=rt+ft+C;Yt(v,k,tt,Q)}}}function ht(w,rt,nt){l.push(w),l.push(rt),l.push(nt)}function Dt(w,rt,nt){Ot(w),Ot(rt),Ot(nt);const ft=s.length/3,j=T.generateTopUV(n,s,ft-3,ft-2,ft-1);Qt(j[0]),Qt(j[1]),Qt(j[2])}function Yt(w,rt,nt,ft){Ot(w),Ot(rt),Ot(ft),Ot(rt),Ot(nt),Ot(ft);const j=s.length/3,Pt=T.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);Qt(Pt[0]),Qt(Pt[1]),Qt(Pt[3]),Qt(Pt[1]),Qt(Pt[2]),Qt(Pt[3])}function Ot(w){s.push(l[w*3+0]),s.push(l[w*3+1]),s.push(l[w*3+2])}function Qt(w){o.push(w.x),o.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zx(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Lr[s.type]().fromJSON(s)),new De(n,t.options)}}const Wx={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(o,r),new et(a,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new et(r,1-l),new et(c,1-f),new et(u,1-g),new et(x,1-p)]:[new et(a,1-l),new et(h,1-f),new et(d,1-g),new et(m,1-p)]}};function Zx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class In extends Qe{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new P,u=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const T=[],S=p/n;let b=0;p===0&&r===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let U=0;U<=e;U++){const R=U/e;f.x=-t*Math.cos(s+R*o)*Math.sin(r+S*a),f.y=t*Math.cos(r+S*a),f.z=t*Math.sin(s+R*o)*Math.sin(r+S*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(R+b,1-S),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const S=h[p][T+1],b=h[p][T],U=h[p+1][T],R=h[p+1][T+1];(p!==0||r>0)&&d.push(S,b,R),(p!==n-1||l<Math.PI)&&d.push(b,U,R)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hi extends Qe{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new P,f=new P,u=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*o,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;r.push(x,m,T),r.push(m,p,T)}this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fo extends Qe{constructor(t=new kf(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new P,l=new P,c=new et;let h=new P;const f=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function x(){for(let S=0;S<e;S++)m(S);m(o===!1?e:0),T(),p()}function m(S){h=t.getPointAt(S/e,h);const b=r.normals[S],U=r.binormals[S];for(let R=0;R<=s;R++){const A=R/s*Math.PI*2,O=Math.sin(A),E=-Math.cos(A);l.x=E*b.x+O*U.x,l.y=E*b.y+O*U.y,l.z=E*b.z+O*U.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let b=1;b<=s;b++){const U=(s+1)*(S-1)+(b-1),R=(s+1)*S+(b-1),A=(s+1)*S+b,O=(s+1)*(S-1)+b;g.push(U,R,O),g.push(R,A,O)}}function T(){for(let S=0;S<=e;S++)for(let b=0;b<=s;b++)c.x=S/e,c.y=b/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fo(new Lr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class mt extends _o{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qx extends mt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $l extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kx extends $l{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wa=new fe,Rh=new P,Ph=new P;class Vf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lh=new fe,zs=new P,Ta=new P;class jx extends Vf{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(zs),Ta.copy(n.position),Ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ta),n.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),Lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh)}}class Wf extends $l{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $x extends Vf{constructor(){super(new Lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oh extends $l{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new $x}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ih=new fe;class Jx{constructor(t,e,n=0,s=1/0){this.ray=new Yl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(t,e=!0,n=[]){return pl(t,this,n,e),n.sort(Dh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)pl(t[s],this,n,e);return n.sort(Dh),n}}function Dh(i,t){return i.distance-t.distance}function pl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)pl(o[r],t,e,!0)}}class Uh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function Qx(i){const t=document.createElement("aside");return t.className="control-panel",t.innerHTML=`<h2>${i}</h2>`,t}function vo(i,t,e,n){const s=document.createElement("div");s.className="control-row";const o=document.createElement("label");o.textContent=t;const r=document.createElement("input");r.type="checkbox",r.checked=e,r.style.justifySelf="start";const a=document.createElement("output");return a.textContent=e?"on":"off",r.addEventListener("change",()=>{a.textContent=r.checked?"on":"off",n(r.checked)}),s.append(o,r,a),i.appendChild(s),s}function tv(i,t,e,n,s,o,r){const a=ee(t,e,n,s,o,r);return i.appendChild(a),a}function ee(i,t,e,n,s,o){const r=document.createElement("div");r.className="control-row";const a=String(n).includes(".")?String(n).split(".")[1].replace(/0+$/,"").length:0,l=u=>Number(u).toFixed(Math.max(0,a)),c=document.createElement("label");c.textContent=i;const h=document.createElement("input");h.type="range",h.min=String(t),h.max=String(e),h.step=String(n),h.value=String(s);const f=document.createElement("output");return f.value=l(s),f.textContent=f.value,h.addEventListener("input",()=>{const u=Number(h.value);f.value=l(u),f.textContent=f.value,o(u)}),r.append(c,h,f),r}function $n(i,t,e){const n=document.createElement("div");n.className="control-row";const s=document.createElement("label");s.textContent=i;const o=document.createElement("input");o.type="color",o.value=t;const r=document.createElement("output");return r.value=t,r.textContent=t,o.addEventListener("input",()=>{r.value=o.value,r.textContent=o.value,e(o.value)}),n.append(s,o,r),n}function ev(i,t,e){const n=document.createElement("div");n.className="control-row";const s=document.createElement("label");s.textContent=i;const o=document.createElement("input");o.type="text",o.value=t;const r=document.createElement("output");return r.textContent="",o.addEventListener("input",()=>{e(o.value)}),n.append(s,o,r),n}function oe(i,t,e=!0){const n=document.createElement("section");n.className="control-group";const s=document.createElement("details");s.open=!e;const o=document.createElement("summary"),r=document.createElement("h3");r.textContent=t,o.appendChild(r);const a=document.createElement("div");return a.className="control-body",s.append(o,a),n.appendChild(s),i.appendChild(n),a}function Zf(i,t,e=!0){return oe(i,t,e)}function nv(i,t,e=!0){const n=oe(i,"Papers",e);t.forEach(({title:s,mesh:o,config:r,applyPaperTransform:a})=>{const l=document.createElement("h3");l.textContent=s,l.style.margin="4px 0 8px",l.style.fontSize="13px",n.appendChild(l),[["x",-3,3,.01],["y",-2,2,.01],["z",-.3,.5,.01],["rotX",-35,5,.5],["rotZ",-40,40,.5]].forEach(([h,f,u,d])=>{n.appendChild(ee(h,f,u,d,r[h],g=>{r[h]=g,a(o,r)}))})})}function iv(i,t,e=!0){const n=oe(i,"Pins",e);t.forEach(({title:s,config:o,applyPinTransform:r})=>{const a=document.createElement("h3");a.textContent=s,a.style.margin="4px 0 8px",a.style.fontSize="13px",n.appendChild(a),[["x",-3,3,.01],["y",-2,2,.01],["z",-2,2,.01],["topRadius",.08,.4,.01],["topHeight",.03,.2,.01],["stemRadius",.04,.2,.01],["stemHeight",.08,.5,.01],["baseRadius",.08,.4,.01],["baseHeight",.03,.2,.01],["pinRadius",.005,.05,.005],["pinHeight",.08,.5,.01],["pinInset",0,.3,.01]].forEach(([c,h,f,u])=>{n.appendChild(ee(c,h,f,u,o[c],d=>{o[c]=d,r()}))})})}function sv(i,t,e,n=!1){const s=oe(i,"Lighting",n);[["ambient",0,4,.05],["key",0,2,.05],["fill",0,3,.05],["front",0,2,.05],["shadowRadius",0,30,1],["blurSamples",0,32,1],["bias",-.002,.002,5e-5],["normalBias",0,.05,.001]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function ov(i,t,e,n=!0){const s=oe(i,"Camera",n);[["x",-30,30,.01],["y",-30,30,.01],["z",-30,30,.01],["targetX",-20,20,.01],["targetY",-20,20,.01],["targetZ",-20,20,.01],["panX",-10,10,.01],["panY",-10,10,.01],["mouseXAmount",-10,10,.01],["mouseYAmount",-10,10,.01],["mouseSmooth",.005,.2,.005],["fov",10,90,1]].forEach(([a,l,c,h])=>{s.appendChild(ee(a,l,c,h,t[a],f=>{t[a]=f,e()}))}),[["mouseXCamera","Mouse X Camera"],["mouseXTarget","Mouse X Target"],["mouseYCamera","Mouse Y Camera"],["mouseYTarget","Mouse Y Target"]].forEach(([a,l])=>{s.appendChild(vo(document.createDocumentFragment(),l,t[a],c=>{t[a]=c,e()}))})}function rv(i,t,e,n=!0){const s=oe(i,"Floor",n);[["x",-20,20,.01],["y",-20,20,.01],["z",-20,20,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",1,40,.01],["height",1,40,.01],["tone",.4,1.8,.01],["roughness",0,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function av(i,t,e,n=!0){const s=oe(i,"Rug",n);[["x",-20,20,.01],["y",-20,20,1e-4],["z",-20,20,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",1,30,.01],["height",1,30,.01],["depth",.01,.2,.001],["radius",.05,2,.01],["inset1",.05,5,.01],["inset2",.05,8,.01],["inset3",.05,12,.01],["radiusFalloff",0,.5,.005],["layerLift",0,.02,.001]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function lv(i,t,e,n=!1){const s=oe(i,"Board",n);[["x",-5,5,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-45,45,.5],["rotY",-45,45,.5],["rotZ",-45,45,.5]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function cv(i,t,e,n=!0){const s=oe(i,"Shelf",n);[["x",-8,8,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.4,4,.01],["height",.1,1.5,.01],["depth",.05,.8,.01],["radius",.01,.4,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function hv(i,t,e,n=!0){const s=oe(i,"Pot",n);[["x",-3,3,.01],["y",-3,3,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["radius",.08,.8,.01],["height",.1,1.2,.01],["neck",.02,.5,.01],["bulge",.5,1.8,.01],["soilRadius",.02,.6,.01],["soilHeight",.01,.6,.01],["soilOffsetY",-.2,.2,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function fv(i,t,e,n=!0){const s=oe(i,"Cactus",n);[["x",-2,2,.01],["y",-2,2,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["mainRadius",.02,.5,.01],["mainHeight",.1,1.5,.01],["mainLean",-.5,.5,.01],["armRadius",.02,.4,.01],["armHeight",.05,1,.01],["armOffsetX",-1,1,.01],["armOffsetY",-1,1,.01],["armLean",-1,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function uv(i,t,e=!0){const n=oe(i,"Books",e),s=[["x",-3,3,.01],["y",-3,3,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.05,1,.01],["height",.1,2,.01],["depth",.05,1,.01],["pagesX",-1,1,.01],["pagesY",-1,1,.01],["pagesZ",-1,1,.01],["pagesWidth",.01,1,.01],["pagesHeight",.01,2,.01],["pagesDepth",.01,1,.01],["spineX",-1,1,.01],["spineY",-1,1,.01],["spineZ",-1,1,.01],["spineWidth",.01,1,.01],["spineHeight",.01,2,.01],["spineDepth",.01,1,.01],["spineRotY",-180,180,.5]];t.forEach(({title:o,config:r,applyBookTransform:a})=>{const l=document.createElement("h3");l.textContent=o,l.style.margin="4px 0 8px",l.style.fontSize="13px",n.appendChild(l),s.forEach(([c,h,f,u])=>{n.appendChild(ee(c,h,f,u,r[c],d=>{r[c]=d,a()}))})})}function dv(i,t,e,n=!0){const s=oe(i,"Picture",n);[["x",-10,10,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.5,4,.01],["height",.3,3,.01],["depth",.02,.5,.01],["innerInset",.02,.4,.01],["sunX",-1,1,.01],["sunY",-1,1,.01],["sunRadius",.02,.6,.01],["mountainAX",-1.5,1.5,.01],["mountainAY",-1.5,1.5,.01],["mountainAScaleX",.1,3,.01],["mountainAScaleY",.1,3,.01],["mountainAScaleZ",.1,3,.01],["mountainAWidth",.05,2,.01],["mountainAHeight",.05,2,.01],["mountainARotZ",-180,180,.5],["mountainBX",-1.5,1.5,.01],["mountainBY",-1.5,1.5,.01],["mountainBScaleX",.1,3,.01],["mountainBScaleY",.1,3,.01],["mountainBScaleZ",.1,3,.01],["mountainBWidth",.05,2,.01],["mountainBHeight",.05,2,.01],["mountainBRotZ",-180,180,.5]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function pv(i,t,e,n=!0){const s=oe(i,"Desk",n);[["x",-10,10,.01],["y",-5,5,.01],["z",-10,10,.01],["topX",-3,3,.01],["topY",-3,3,.01],["topZ",-3,3,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["mainWidth",1,10,.01],["mainDepth",.5,5,.01],["returnWidth",.5,5,.01],["returnDepth",.5,8,.01],["innerCut",.1,6,.01],["thickness",.02,.5,.01],["radius",.02,.8,.01],["legHeight",.2,3,.01],["legRadius",.02,.3,.01],["legInset",.05,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function qf(i,t,e,n,s=!0){const o=oe(i,t,s);[["x",-10,10,.001],["y",-2,2,1e-4],["z",-10,10,.001],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.5,8,.01],["height",.5,6,.01],["depth",.02,1,.01],["radius",.02,1,.01],["screenInset",.02,1,.01],["screenDepth",.01,.3,.01],["screenGlow",0,2,.01],["standWidth",.05,1.5,.01],["standHeight",.05,2.5,.01],["standDepth",.05,2,.01],["standOffsetZ",-2,2,.01],["standRotX",-180,180,.5],["standRotZ",-180,180,.5],["baseWidth",.1,3,.01],["baseHeight",.02,.5,.01],["baseDepth",.1,3,.01],["baseOffsetY",-2,2,.01],["baseOffsetZ",-2,2,.01],["baseRotX",-180,180,.5],["baseRotZ",-180,180,.5],["lineGap",.05,.4,.01]].forEach(([l,c,h,f])=>{o.appendChild(ee(l,c,h,f,e[l],u=>{e[l]=u,n()}))}),["screenColor","screenGlowColor"].forEach(l=>{o.appendChild($n(l,e[l],c=>{e[l]=c,n()}))}),(e.screenMode==="ui"?[["uiSidebarWidth",.01,.5,.001],["uiSidebarX",-2,2,.001],["uiPanelWidth",.01,.5,.001],["uiPanelX",-2,2,.001],["uiTopIconWidth",.05,1,.001],["uiTopIconX",-2,2,.001],["uiTopIconY",-2,2,.001],["uiIconWidth",.05,1,.001],["uiIconX",-2,2,.001],["uiIconStartY",-2,2,.001],["uiIconGap",.01,1,.001],["uiDotX",-2,2,.001],["uiDotY",-2,2,.001],["uiLinesWidthScale",.1,3,.001],["uiLinesX",-2,2,.001],["uiLinesY",-2,2,.001],["uiLineGap",.01,1,.001]]:[["codeX",-2,2,.001],["codeY",-2,2,.001]]).forEach(([l,c,h,f])=>{o.appendChild(ee(l,c,h,f,e[l],u=>{e[l]=u,n()}))})}function mv(i,t,e,n=!0){const s=oe(i,"Floor Pot",n);[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["radius",.1,2,.01],["height",.1,3,.01],["neck",.05,1,.01],["bulge",.4,2,.01],["bandRadiusTop",.1,2,.01],["bandRadiusBottom",.1,2,.01],["bandHeight",.02,1,.01],["bandY",-2,2,.01],["bottomBandRadiusTop",.1,2,.01],["bottomBandRadiusBottom",.1,2,.01],["bottomBandHeight",.02,1,.01],["bottomBandY",-2,2,.01],["soilRadius",.05,2,.01],["soilHeight",.01,1,.01],["soilY",-2,2,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function gv(i,t,e,n=!0){const s=oe(i,"Floor Plant",n);[["x",-2,2,.01],["y",-2,2,.01],["z",-2,2,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["depth",.01,.3,.01],["bevelSize",.001,.2,.001],["bevelThickness",.01,1,.01],["bodyBulge",0,1,.01],["ridgeBulge",0,1,.01],["ridgeWidth",.05,1,.01],["centerWidth",.1,2,.01],["centerHeight",.1,4,.01],["centerX",-2,2,.01],["centerY",-2,2,.01],["centerZ",-2,2,.01],["centerRotX",-180,180,.5],["centerRotY",-180,180,.5],["centerRotZ",-180,180,.5],["leftWidth",.1,2,.01],["leftHeight",.1,4,.01],["leftX",-2,2,.01],["leftY",-2,2,.01],["leftZ",-2,2,.01],["leftRotX",-180,180,.5],["leftRotY",-180,180,.5],["leftRotZ",-180,180,.5],["rightWidth",.1,2,.01],["rightHeight",.1,4,.01],["rightX",-2,2,.01],["rightY",-2,2,.01],["rightZ",-2,2,.01],["rightRotX",-180,180,.5],["rightRotY",-180,180,.5],["rightRotZ",-180,180,.5]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function _v(i,t,e,n=!0){const s=oe(i,"Floor Lamp",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Parts",fields:[["baseRadius",.05,1,.01],["baseHeight",.01,.4,.01],["baseY",-1,1,.01],["poleRadius",.005,.2,.005],["poleHeight",.5,6,.01],["shadeX",-1,1,.01],["shadeY",0,6,.01],["shadeZ",-1,1,.01],["shadeRotX",-180,180,.5],["shadeRotY",-180,180,.5],["shadeRotZ",-180,180,.5],["shadeTopRadius",.05,2,.01],["shadeBottomRadius",.05,2,.01],["shadeHeight",.05,2,.01],["bulbX",-1,1,.01],["bulbY",0,6,.01],["bulbZ",-1,1,.01],["bulbRadius",.02,.5,.01]]},{title:"Light",fields:[["lightX",-2,2,.01],["lightY",0,6,.01],["lightZ",-2,2,.01],["lightIntensity",0,5,.01],["lightDistance",0,20,.1],["lightDecay",0,4,.05],["shadeGlow",0,3,.01],["shadeOpacity",0,1,.01],["bulbGlow",0,5,.01]]}].forEach(a=>{const l=document.createElement("h3");l.textContent=a.title,l.style.margin="4px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.fields.forEach(([c,h,f,u])=>{s.appendChild(ee(c,h,f,u,t[c],d=>{t[c]=d,e()}))})}),[["baseColor","baseColor"],["poleColor","poleColor"],["shadeColor","shadeColor"],["shadeGlowColor","shadeGlowColor"],["bulbColor","bulbColor"],["bulbGlowColor","bulbGlowColor"],["lightColor","lightColor"]].forEach(([a,l])=>{s.appendChild($n(l,t[a],c=>{t[a]=c,e()}))})}function xv(i,t,e,n=!0){const s=oe(i,"Keyboard",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.2,3,.01],["height",.1,1,.01],["depth",.01,.3,.01],["radius",.01,.3,.01],["keyDepth",.001,.05,.001],["keyWidthScale",.1,1.2,.01],["keyHeightScale",.1,1.2,.01],["keyCols",1,20,1],["keyRows",1,10,1]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function vv(i,t,e,n=!0){const s=oe(i,"Mouse",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.05,1,.01],["height",.05,1,.01],["depth",.01,.3,.01],["radius",.01,.3,.01],["splitHeight",.1,2,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Sv(i,t,e,n=!0){const s=oe(i,"Speaker",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.1,2,.01],["height",.1,2,.01],["depth",.05,1,.01],["radius",.01,.3,.01],["panelWidth",.05,1.5,.01],["panelHeight",.05,1.5,.01],["panelDepth",.01,.2,.01],["panelRadius",.01,.2,.01],["panelX",-1,1,.01],["panelY",-1,1,.01],["panelZ",-1,1,.01],["coneRadius",.05,.8,.01],["coneDepth",.01,.2,.01],["coneX",-1,1,.01],["coneY",-1,1,.01],["coneZ",-1,1,.01],["smallConeRadius",.01,.4,.01],["smallConeDepth",.005,.1,.005],["smallConeX",-1,1,.01],["smallConeY",-1,1,.01],["smallConeZ",-1,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function yv(i,t,e,n=!0){const s=oe(i,"Mug",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Body",fields:[["topRadius",.05,1,.01],["bottomRadius",.05,1,.01],["height",.05,1.5,.01]],colors:["bodyColor"]},{title:"Coffee",fields:[["coffeeRadius",.02,1,.01],["coffeeDepth",.005,.2,.005],["coffeeOffsetY",-.2,.2,.005]],colors:["coffeeColor"]},{title:"Handle",fields:[["handleX",-1,1,.01],["handleY",-1,1,.01],["handleZ",-1,1,.01],["handleRotX",-180,180,.5],["handleRotY",-180,180,.5],["handleRotZ",-180,180,.5],["handleRadius",.03,1,.01],["handleTube",.005,.2,.005],["handleArc",.2,2,.01],["handleScaleX",.1,3,.01],["handleScaleY",.1,3,.01],["handleScaleZ",.1,3,.01]]},{title:"Steam",fields:[["steamCount",0,100,1],["steamHeight",.05,2,.01],["steamSpeed",0,4,.01],["steamSpread",0,1,.01],["steamOpacity",0,1,.01],["steamThickness",.001,.08,.001],["steamOffsetX",-1,1,.01],["steamOffsetY",-1,1,.01],["steamOffsetZ",-1,1,.01],["steamRotX",-180,180,.5],["steamRotY",-180,180,.5],["steamRotZ",-180,180,.5]],toggles:["steamEnabled"],colors:["steamColor"]}].forEach(({title:r,fields:a,toggles:l,colors:c})=>{const h=document.createElement("h3");h.textContent=r,h.style.margin="10px 0 8px",h.style.fontSize="13px",s.appendChild(h),a.forEach(([f,u,d,g])=>{s.appendChild(ee(f,u,d,g,t[f],x=>{t[f]=x,e()}))}),(l??[]).forEach(f=>{vo(s,f,t[f],u=>{t[f]=u,e()})}),(c??[]).forEach(f=>{s.appendChild($n(f,t[f],u=>{t[f]=u,e()}))})})}function Mv(i,t,e,n=!0){const s=oe(i,"Phone",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Body",fields:[["width",.05,2,.01],["height",.05,2,.01],["depth",.005,.3,.005],["radius",.005,.3,.005]],colors:["bodyColor"]},{title:"Screen",fields:[["screenWidth",.02,2,.01],["screenHeight",.02,2,.01],["screenDepth",.002,.1,.002],["screenRadius",.002,.2,.002],["screenX",-1,1,.01],["screenY",-1,1,.01],["screenZ",-.2,.2,.005],["screenGlow",0,1,.01]],colors:["screenColor"]},{title:"Camera Dot",fields:[["cameraRadius",.002,.1,.002],["cameraDepth",.002,.1,.002],["cameraX",-1,1,.01],["cameraY",-1,1,.01],["cameraZ",-.2,.2,.005]],colors:["detailColor"]},{title:"Time",fields:[["timeWidth",.01,.2,.005],["timeHeight",.03,.4,.005],["timeThickness",.002,.05,.002],["timeGap",0,.1,.002],["timeX",-1,1,.01],["timeY",-1,1,.01],["timeZ",-.2,.2,.005],["timeRotX",-180,180,.5],["timeRotY",-180,180,.5],["timeRotZ",-180,180,.5],["fingerprintRadius",.005,.2,.005],["fingerprintDepth",.002,.1,.002],["fingerprintX",-1,1,.01],["fingerprintY",-1,1,.01],["fingerprintZ",-.2,.2,.005]],text:["timeText"],colors:["timeColor","fingerprintColor"]}].forEach(({title:r,fields:a,text:l,colors:c})=>{const h=document.createElement("h3");h.textContent=r,h.style.margin="10px 0 8px",h.style.fontSize="13px",s.appendChild(h),a.forEach(([f,u,d,g])=>{s.appendChild(ee(f,u,d,g,t[f],x=>{t[f]=x,e()}))}),(l??[]).forEach(f=>{s.appendChild(ev(f,t[f],u=>{t[f]=u,e()}))}),(c??[]).forEach(f=>{s.appendChild($n(f,t[f],u=>{t[f]=u,e()}))})})}function bv(i,t,e,n=!0){const s=oe(i,"Chair",n);[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["shellX",-2,2,.01],["shellY",-3,3,.01],["shellZ",-3,3,.01],["shellRotX",-180,180,.5],["shellRotY",-180,180,.5],["shellRotZ",-180,180,.5],["frameWidth",.2,4,.01],["frameDepth",.2,4,.01],["frameLift",0,3,.01],["backLegSpread",.1,3,.01],["backLegOffset",-1,2,.01],["backLegHeight",.1,3,.01],["tubeRadius",.01,.3,.01],["frameX",-2,2,.01],["frameY",-2,2,.01],["frameZ",-2,2,.01],["frameRotX",-180,180,.5],["frameRotY",-180,180,.5],["frameRotZ",-180,180,.5]].forEach(([a,l,c,h])=>{s.appendChild(ee(a,l,c,h,t[a],f=>{t[a]=f,e()}))}),[{title:"Shell Back",fields:[["shellBackWidth",.2,4,.01],["shellBackHeight",.2,4,.01],["shellBackDepth",.02,.5,.01],["shellBackRadius",.01,.4,.01],["shellBackX",-2,2,.01],["shellBackY",-2,3,.01],["shellBackZ",-2,2,.01],["shellBackRotX",-180,180,.5],["shellBackRotY",-180,180,.5],["shellBackRotZ",-180,180,.5]]},{title:"Shell Seat",fields:[["shellSeatWidth",.2,4,.01],["shellSeatHeight",.2,4,.01],["shellSeatDepth",.02,.5,.01],["shellSeatRadius",.01,.4,.01],["shellSeatX",-2,2,.01],["shellSeatY",-2,3,.01],["shellSeatZ",-2,3,.01],["shellSeatRotX",-180,180,.5],["shellSeatRotY",-180,180,.5],["shellSeatRotZ",-180,180,.5]]},{title:"Shell Bend",fields:[["shellBendWidth",.2,4,.01],["shellBendInnerRadius",.05,1.5,.01],["shellBendThickness",.02,.5,.01],["shellBendX",-2,2,.01],["shellBendY",-2,3,.01],["shellBendZ",-2,3,.01],["shellBendRotX",-180,180,.5],["shellBendRotY",-180,180,.5],["shellBendRotZ",-180,180,.5]]}].forEach(({title:a,fields:l})=>{const c=document.createElement("h3");c.textContent=a,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),l.forEach(([h,f,u,d])=>{s.appendChild(ee(h,f,u,d,t[h],g=>{t[h]=g,e()}))})})}function Ev(i,t,e,n=!0){const s=oe(i,"Rotations",n);[{title:"Root",fields:[["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5]]},{title:"Torso Head",fields:[["torsoPitch",-60,60,.5],["torsoYaw",-90,90,.5],["torsoRoll",-45,45,.5],["headPitch",-60,60,.5],["headYaw",-120,120,.5],["headRoll",-45,45,.5],["eyeYaw",-1,1,.01],["eyePitch",-1,1,.01],["browTilt",-30,30,.5]]},{title:"Left Arm",fields:[["leftShoulderX",-180,180,.5],["leftShoulderY",-360,360,.5],["leftShoulderZ",-180,180,.5],["leftElbowX",-10,160,.5],["leftElbowY",-180,180,.5],["leftElbowZ",-180,180,.5],["leftWristX",-180,180,.5],["leftWristY",-180,180,.5],["leftWristZ",-180,180,.5]]},{title:"Right Arm",fields:[["rightShoulderX",-180,180,.5],["rightShoulderY",-360,360,.5],["rightShoulderZ",-180,180,.5],["rightElbowX",-10,160,.5],["rightElbowY",-180,180,.5],["rightElbowZ",-180,180,.5],["rightWristX",-180,180,.5],["rightWristY",-180,180,.5],["rightWristZ",-180,180,.5]]},{title:"Left Leg",fields:[["leftHipX",-180,180,.5],["leftHipY",-180,180,.5],["leftHipZ",-180,180,.5],["leftKneeX",-10,160,.5],["leftAnkleX",-60,60,.5]]},{title:"Right Leg",fields:[["rightHipX",-180,180,.5],["rightHipY",-180,180,.5],["rightHipZ",-180,180,.5],["rightKneeX",-10,160,.5],["rightAnkleX",-60,60,.5]]}].forEach(({title:r,fields:a})=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,f,u])=>{s.appendChild(ee(c,h,f,u,t[c],d=>{t[c]=d,e()}))})})}function wv(i,t,e,n=!0){const s=oe(i,"Offsets",n),o=document.createElement("h3");o.textContent="Root",o.style.margin="10px 0 8px",o.style.fontSize="13px",s.appendChild(o),[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["sitAmount",0,1,.01],["sitOffsetX",-2,2,.01],["sitOffsetY",-2,2,.01],["sitOffsetZ",-2,2,.01]].forEach(([a,l,c,h])=>{s.appendChild(ee(a,l,c,h,t[a],f=>{t[a]=f,e()}))}),[["Torso",["torsoOffsetX","torsoOffsetY","torsoOffsetZ"]],["Pelvis",["pelvisOffsetX","pelvisOffsetY","pelvisOffsetZ"]],["Head",["headOffsetX","headOffsetY","headOffsetZ"]],["Left Ear",["leftEarOffsetX","leftEarOffsetY","leftEarOffsetZ"]],["Right Ear",["rightEarOffsetX","rightEarOffsetY","rightEarOffsetZ"]],["Left Eye",["leftEyeOffsetX","leftEyeOffsetY","leftEyeOffsetZ"]],["Right Eye",["rightEyeOffsetX","rightEyeOffsetY","rightEyeOffsetZ"]],["Left Brow",["leftBrowOffsetX","leftBrowOffsetY","leftBrowOffsetZ"]],["Right Brow",["rightBrowOffsetX","rightBrowOffsetY","rightBrowOffsetZ"]],["Left Shoulder",["leftShoulderOffsetX","leftShoulderOffsetY","leftShoulderOffsetZ"]],["Right Shoulder",["rightShoulderOffsetX","rightShoulderOffsetY","rightShoulderOffsetZ"]],["Left Elbow",["leftElbowOffsetX","leftElbowOffsetY","leftElbowOffsetZ"]],["Right Elbow",["rightElbowOffsetX","rightElbowOffsetY","rightElbowOffsetZ"]],["Left Hip",["leftHipOffsetX","leftHipOffsetY","leftHipOffsetZ"]],["Right Hip",["rightHipOffsetX","rightHipOffsetY","rightHipOffsetZ"]],["Left Knee",["leftKneeOffsetX","leftKneeOffsetY","leftKneeOffsetZ"]],["Right Knee",["rightKneeOffsetX","rightKneeOffsetY","rightKneeOffsetZ"]],["Socks",["sockOffsetX","sockOffsetY","sockOffsetZ"]],["Left Ankle",["leftAnkleOffsetX","leftAnkleOffsetY","leftAnkleOffsetZ"]],["Right Ankle",["rightAnkleOffsetX","rightAnkleOffsetY","rightAnkleOffsetZ"]]].forEach(([a,l])=>{const c=document.createElement("h3");c.textContent=a,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),l.forEach(h=>{s.appendChild(ee(h,-2,2,.01,t[h],f=>{t[h]=f,e()}))})})}function Tv(i,t,e,n=!0){const s=oe(i,"Sizes",n);[["Torso",[["torsoScaleX",.2,3,.01],["torsoScaleY",.2,3,.01],["torsoScaleZ",.2,3,.01]]],["Pelvis",[["pelvisScaleX",.2,3,.01],["pelvisScaleY",.2,3,.01],["pelvisScaleZ",.2,3,.01]]],["Head",[["headScaleX",.2,3,.01],["headScaleY",.2,3,.01],["headScaleZ",.2,3,.01]]],["Ears",[["earScaleX",.2,3,.01],["earScaleY",.2,3,.01],["earScaleZ",.2,3,.01]]],["Eyes",[["eyeScaleX",.2,3,.01],["eyeScaleY",.2,3,.01],["eyeScaleZ",.2,3,.01],["pupilScale",.2,3,.01]]],["Brows",[["browScaleX",.2,3,.01],["browScaleY",.2,3,.01],["browScaleZ",.2,3,.01]]],["Upper Arms",[["upperArmScaleX",.2,3,.01],["upperArmScaleY",.2,3,.01],["upperArmScaleZ",.2,3,.01]]],["Lower Arms",[["lowerArmScaleX",.2,3,.01],["lowerArmScaleY",.2,3,.01],["lowerArmScaleZ",.2,3,.01]]],["Hands",[["handScaleX",.2,3,.01],["handScaleY",.2,3,.01],["handScaleZ",.2,3,.01]]],["Upper Legs",[["upperLegScaleX",.2,3,.01],["upperLegScaleY",.2,3,.01],["upperLegScaleZ",.2,3,.01]]],["Lower Legs",[["lowerLegScaleX",.2,3,.01],["lowerLegScaleY",.2,3,.01],["lowerLegScaleZ",.2,3,.01]]],["Socks",[["sockScaleX",.2,3,.01],["sockScaleY",.2,3,.01],["sockScaleZ",.2,3,.01]]],["Shoes",[["shoeScaleX",.2,3,.01],["shoeScaleY",.2,3,.01],["shoeScaleZ",.2,3,.01]]],["Toes",[["toeScaleX",.2,3,.01],["toeScaleY",.2,3,.01],["toeScaleZ",.2,3,.01]]]].forEach(([r,a])=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,f,u])=>{s.appendChild(ee(c,h,f,u,t[c],d=>{t[c]=d,e()}))})})}function Cv(i,t,e,n=!1){const s=oe(i,"Hair",n);[{title:"Hair Base",fields:[["hairBaseOffsetX",-2,2,.01],["hairBaseOffsetY",-2,2,.01],["hairBaseOffsetZ",-2,2,.01],["hairBaseRotX",-180,180,.5],["hairBaseRotY",-180,180,.5],["hairBaseRotZ",-180,180,.5],["hairBaseScaleX",.05,3,.01],["hairBaseScaleY",.05,3,.01],["hairBaseScaleZ",.05,3,.01]]},{title:"Hair Particles",fields:[["hairOffsetX",-2,2,.01],["hairOffsetY",-2,2,.01],["hairOffsetZ",-2,2,.01],["hairRotX",-180,180,.5],["hairRotY",-180,180,.5],["hairRotZ",-180,180,.5],["hairScaleX",.2,3,.01],["hairScaleY",.2,3,.01],["hairScaleZ",.2,3,.01],["hairCount",0,45e3,1],["hairParticleSize",.04,.6,.002],["hairParticleOpacity",0,1,.01],["hairScatter",0,.2,.001],["hairFlow",0,1,.01],["hairLengthVariation",0,1,.01],["hairCurveX",-.1,.1,.001],["hairCurveTipX",-.1,.1,.001],["hairCurveZ",-.1,.1,.001]],colors:["hairColor"]},{title:"Fringe Particles",fields:[["fringeOffsetX",-2,2,.01],["fringeOffsetY",-2,2,.01],["fringeOffsetZ",-2,2,.01],["fringeRotX",-180,180,.5],["fringeRotY",-180,180,.5],["fringeRotZ",-180,180,.5],["fringeScaleX",.2,3,.01],["fringeScaleY",.2,3,.01],["fringeScaleZ",.2,3,.01],["fringeCount",0,360,1],["fringeParticleSize",.2,3,.01],["fringeParticleOpacity",0,1,.01],["fringeFlow",0,1,.01]]}].forEach(({title:r,fields:a,colors:l})=>{const c=document.createElement("h3");c.textContent=r,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),a.forEach(([h,f,u,d])=>{s.appendChild(ee(h,f,u,d,t[h],g=>{t[h]=g,e()}))}),(l??[]).forEach(h=>{s.appendChild($n(h,t[h],f=>{t[h]=f,e()}))})})}function Av(i,t,e,n=!1){const s=oe(i,"Face",n);[{title:"Skin & Head Shape",fields:[["jawWidth",.55,1.2,.01],["chinLength",0,.2,.005],["cheekFullness",-.1,.25,.005],["skinRoughness",.2,1,.01],["skinSheen",0,1,.01]],colors:["skinColor","skinSheenColor"]},{title:"Expression",fields:[["eyeYaw",-1,1,.01],["eyePitch",-1,1,.01],["browTilt",-30,30,.5]]},{title:"Face Motion",toggles:["blinkEnabled","saccadeEnabled"],fields:[["blinkIntervalMin",200,1e4,50],["blinkIntervalMax",200,15e3,50],["blinkDuration",50,1e3,10],["saccadeIntervalMin",100,5e3,50],["saccadeIntervalMax",200,8e3,50],["saccadeAmount",0,.5,.01],["saccadeSmooth",.01,.5,.01]]},{title:"Eye Shape",fields:[["eyeScaleX",.2,3,.01],["eyeScaleY",.2,3,.01],["eyeScaleZ",.2,3,.01],["pupilScale",.2,3,.01],["pupilCoreScale",.1,2,.01],["pupilCoreDepth",0,.1,.002],["irisDepth",.001,.08,.001],["pupilDepth",.001,.08,.001],["eyeWhiteRoughness",.1,1,.01],["irisRoughness",.1,1,.01],["pupilRoughness",.1,1,.01]],colors:["eyeWhiteColor","irisColor","pupilColor"]},{title:"Eye Placement",fields:[["leftEyeOffsetX",-2,2,.01],["leftEyeOffsetY",-2,2,.01],["leftEyeOffsetZ",-2,2,.01],["rightEyeOffsetX",-2,2,.01],["rightEyeOffsetY",-2,2,.01],["rightEyeOffsetZ",-2,2,.01]]},{title:"Left Eye Parts",fields:[["leftEyeWhiteOffsetX",-.3,.3,.002],["leftEyeWhiteOffsetY",-.3,.3,.002],["leftEyeWhiteOffsetZ",-.3,.3,.002],["leftIrisOffsetX",-.3,.3,.002],["leftIrisOffsetY",-.3,.3,.002],["leftIrisOffsetZ",-.3,.3,.002],["leftPupilCoreOffsetX",-.3,.3,.002],["leftPupilCoreOffsetY",-.3,.3,.002],["leftPupilCoreOffsetZ",-.3,.3,.002],["leftHighlightOffsetX",-.3,.3,.002],["leftHighlightOffsetY",-.3,.3,.002],["leftHighlightOffsetZ",-.3,.3,.002]]},{title:"Right Eye Parts",fields:[["rightEyeWhiteOffsetX",-.3,.3,.002],["rightEyeWhiteOffsetY",-.3,.3,.002],["rightEyeWhiteOffsetZ",-.3,.3,.002],["rightIrisOffsetX",-.3,.3,.002],["rightIrisOffsetY",-.3,.3,.002],["rightIrisOffsetZ",-.3,.3,.002],["rightPupilCoreOffsetX",-.3,.3,.002],["rightPupilCoreOffsetY",-.3,.3,.002],["rightPupilCoreOffsetZ",-.3,.3,.002],["rightHighlightOffsetX",-.3,.3,.002],["rightHighlightOffsetY",-.3,.3,.002],["rightHighlightOffsetZ",-.3,.3,.002]]},{title:"Pupils",fields:[["pupilOffsetX",-.2,.2,.005],["pupilOffsetY",-.2,.2,.005],["pupilOffsetZ",-.1,.2,.005]]},{title:"Left Eye White",fields:[["leftEyeWhiteRotX",-180,180,.5],["leftEyeWhiteRotY",-180,180,.5],["leftEyeWhiteRotZ",-180,180,.5]]},{title:"Right Eye White",fields:[["rightEyeWhiteRotX",-180,180,.5],["rightEyeWhiteRotY",-180,180,.5],["rightEyeWhiteRotZ",-180,180,.5]]},{title:"Eye Highlight",fields:[["eyeHighlightScale",.05,3,.01],["eyeHighlightOffsetX",-.3,.3,.005],["eyeHighlightOffsetY",-.3,.3,.005],["eyeHighlightOffsetZ",-.1,.2,.005]]},{title:"Brows",fields:[["browScaleX",.2,3,.01],["browScaleY",.2,3,.01],["browScaleZ",.2,3,.01],["browRoughness",.1,1,.01],["leftBrowOffsetX",-2,2,.01],["leftBrowOffsetY",-2,2,.01],["leftBrowOffsetZ",-2,2,.01],["rightBrowOffsetX",-2,2,.01],["rightBrowOffsetY",-2,2,.01],["rightBrowOffsetZ",-2,2,.01]],colors:["browColor"]},{title:"Nose",fields:[["noseOffsetX",-.5,.5,.005],["noseOffsetY",-.5,.5,.005],["noseOffsetZ",0,.8,.005],["noseScaleX",0,3,.01],["noseScaleY",0,3,.01],["noseScaleZ",0,3,.01],["noseBridgeOffsetX",-.3,.3,.005],["noseBridgeOffsetY",-.3,.3,.005],["noseBridgeOffsetZ",-.3,.3,.005],["noseBridgeScaleX",0,3,.01],["noseBridgeScaleY",0,3,.01],["noseBridgeScaleZ",0,3,.01],["noseWingOffsetX",0,.2,.002],["noseWingOffsetY",-.2,.2,.002],["noseWingOffsetZ",-.2,.2,.002],["noseWingScale",0,2,.01],["noseRoughness",.1,1,.01],["nostrilOffsetX",0,.15,.002],["nostrilOffsetY",-.15,.15,.002],["nostrilOffsetZ",-.15,.15,.002],["nostrilScaleX",0,2,.01],["nostrilScaleY",0,2,.01],["nostrilScaleZ",0,2,.01]],colors:["noseColor","nostrilColor"]},{title:"Cheeks",fields:[["blushOpacity",0,1,.01],["blushOffsetX",-.5,.5,.005],["blushOffsetY",-.5,.5,.005],["blushOffsetZ",0,.8,.005],["blushScaleX",0,3,.01],["blushScaleY",0,3,.01],["blushScaleZ",0,3,.01],["blushRotX",-180,180,.5],["blushRotY",-180,180,.5],["blushRotZ",-180,180,.5]],colors:["blushColor"]},{title:"Mouth",fields:[["mouthOffsetX",-.5,.5,.005],["mouthOffsetY",-.5,.5,.005],["mouthOffsetZ",0,.8,.005],["mouthRotX",-180,180,.5],["mouthRotY",-180,180,.5],["mouthRotZ",-180,180,.5],["mouthScaleX",.05,3,.01],["mouthScaleY",.05,3,.01],["mouthScaleZ",.05,3,.01],["mouthRadius",.01,.3,.005],["mouthTube",.002,.06,.002],["mouthArc",.1,2,.01],["mouthOpen",0,.15,.002],["lowerLipThickness",.002,.06,.002],["lowerLipScale",.2,2,.01],["lipRoughness",.1,1,.01],["mouthInnerRoughness",.1,1,.01]],colors:["lipColor","mouthInnerColor"]}].forEach(({title:r,fields:a=[],colors:l,toggles:c})=>{const h=document.createElement("h3");h.textContent=r,h.style.margin="10px 0 8px",h.style.fontSize="13px",s.appendChild(h),(c??[]).forEach(f=>{vo(s,f,t[f],u=>{t[f]=u,e()})}),a.forEach(([f,u,d,g])=>{s.appendChild(ee(f,u,d,g,t[f],x=>{t[f]=x,e()}))}),(l??[]).forEach(f=>{s.appendChild($n(f,t[f],u=>{t[f]=u,e()}))})})}function Rv(i,t,e,n=!1){const s=oe(i,"Sleeves",n);[["sleeveLength",.4,1.6,.01],["sleeveVolume",.6,1.8,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))}),s.appendChild($n("sleeveColor",t.sleeveColor,r=>{t.sleeveColor=r,e()}))}function Pv(i,t,e,n=!1){const s=oe(i,"Character Colors",n);["shirtColor","pelvisColor","pantsColor"].forEach(r=>{s.appendChild($n(r,t[r],a=>{t[r]=a,e()}))})}function Lv(i,t,e,n=!1){const s=oe(i,"Feet",n);[{title:"Ankles",fields:[["leftAnkleOffsetX",-2,2,.01],["leftAnkleOffsetY",-2,2,.01],["leftAnkleOffsetZ",-2,2,.01],["leftAnkleX",-180,180,.5],["leftAnkleY",-180,180,.5],["leftAnkleZ",-180,180,.5],["rightAnkleOffsetX",-2,2,.01],["rightAnkleOffsetY",-2,2,.01],["rightAnkleOffsetZ",-2,2,.01],["rightAnkleX",-180,180,.5],["rightAnkleY",-180,180,.5],["rightAnkleZ",-180,180,.5]]},{title:"Socks",fields:[["sockOffsetX",-2,2,.01],["sockOffsetY",-2,2,.01],["sockOffsetZ",-2,2,.01],["sockRotX",-180,180,.5],["sockRotY",-180,180,.5],["sockRotZ",-180,180,.5],["sockScaleX",.2,3,.01],["sockScaleY",.2,3,.01],["sockScaleZ",.2,3,.01]],colors:["sockColor"]},{title:"Shoe Group",fields:[["shoeOffsetX",-2,2,.01],["shoeOffsetY",-2,2,.01],["shoeOffsetZ",-2,2,.01],["shoeRotX",-180,180,.5],["shoeRotY",-180,180,.5],["shoeRotZ",-180,180,.5],["shoeScaleX",.2,3,.01],["shoeScaleY",.2,3,.01],["shoeScaleZ",.2,3,.01]],colors:["shoeColor"]},{title:"Sole",fields:[["soleOffsetX",-2,2,.01],["soleOffsetY",-2,2,.01],["soleOffsetZ",-2,2,.01],["soleRotX",-180,180,.5],["soleRotY",-180,180,.5],["soleRotZ",-180,180,.5],["soleScaleX",.2,3,.01],["soleScaleY",.2,3,.01],["soleScaleZ",.2,3,.01]]},{title:"Upper Shoe",fields:[["upperShoeOffsetX",-2,2,.01],["upperShoeOffsetY",-2,2,.01],["upperShoeOffsetZ",-2,2,.01],["upperShoeRotX",-180,180,.5],["upperShoeRotY",-180,180,.5],["upperShoeRotZ",-180,180,.5],["upperShoeScaleX",.2,3,.01],["upperShoeScaleY",.2,3,.01],["upperShoeScaleZ",.2,3,.01]]},{title:"Toe",fields:[["toeOffsetX",-2,2,.01],["toeOffsetY",-2,2,.01],["toeOffsetZ",-2,2,.01],["toeRotX",-180,180,.5],["toeRotY",-180,180,.5],["toeRotZ",-180,180,.5],["toeScaleX",.2,3,.01],["toeScaleY",.2,3,.01],["toeScaleZ",.2,3,.01]],colors:["shoeToeColor"]}].forEach(({title:r,fields:a,colors:l})=>{const c=document.createElement("h3");c.textContent=r,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),a.forEach(([h,f,u,d])=>{s.appendChild(ee(h,f,u,d,t[h],g=>{t[h]=g,e()}))}),(l??[]).forEach(h=>{s.appendChild($n(h,t[h],f=>{t[h]=f,e()}))})})}const Kf={fogEnabled:!0,orbitControlsEnabled:!1,musicPulseSpeed:3},Jl={x:46.23,y:10.46,z:5.83,targetX:8.34,targetY:-2.56,targetZ:-5.14,panX:-4.17,panY:-2,mouseXCamera:!0,mouseXTarget:!1,mouseYCamera:!0,mouseYTarget:!1,mouseXAmount:1.63,mouseYAmount:-.8,mouseSmooth:.045,fov:38},jf={ambient:1.4,key:.9,fill:1.05,front:1.05,shadowRadius:20,blurSamples:23,bias:-0,normalBias:0},$f={wall:{x:0,y:0,z:-1.8,width:70,height:24,depth:.04},floor:{x:0,y:-5.52,z:8,rotX:0,rotY:0,rotZ:0,width:86.29,height:88.89,tone:1.33,roughness:1}},Jf={x:.15,y:.15,z:-1.74,rotX:.5,rotY:-.5,rotZ:1},Qf={backPaper:{x:-1.71,y:1.19,z:-.01,rotX:-5.5,rotZ:.5},frontPaper:{x:-1.58,y:1.33,z:-.01,rotX:-6.5,rotZ:8.5},rightPaper:{x:1.58,y:.53,z:-.01,rotX:-10,rotZ:-6.5}},tu={leftPin:{x:-1.56,y:1.18,z:.58,topRadius:.16,topHeight:.06,stemRadius:.07,stemHeight:.3,baseRadius:.2,baseHeight:.07,pinRadius:.01,pinHeight:.35,pinInset:.21},rightPin:{x:1.56,y:.38,z:.56,topRadius:.16,topHeight:.06,stemRadius:.07,stemHeight:.3,baseRadius:.2,baseHeight:.07,pinRadius:.01,pinHeight:.35,pinInset:.26}},eu={x:-5,y:-.02,z:-1.3,rotX:-87.5,rotY:-2.5,rotZ:0,width:1.75,height:.88,depth:.24,radius:.26},nu={x:.42,y:.02,z:.18,rotX:90,rotY:0,rotZ:0,radius:.24,height:.49,neck:.15,bulge:.64,soilRadius:.15,soilHeight:.45,soilOffsetY:0},iu={x:.5,y:.03,z:.53,rotX:97.5,rotY:12.5,rotZ:-10,mainRadius:.1,mainHeight:.32,mainLean:-.07,armRadius:.06,armHeight:.19,armOffsetX:.03,armOffsetY:-.01,armLean:-.58},su={x:-.4,y:-.04,z:.39,rotX:90,rotY:0,rotZ:0,width:.22,height:.72,depth:.49,pagesX:0,pagesY:.04,pagesZ:-.01,pagesWidth:.19,pagesHeight:.65,pagesDepth:.5,spineX:0,spineY:.03,spineZ:.26,spineWidth:.03,spineHeight:.67,spineDepth:.22,spineRotY:90},ou={x:-.68,y:-.06,z:.37,rotX:90,rotY:0,rotZ:0,width:.18,height:.68,depth:.47,pagesX:0,pagesY:.045,pagesZ:-.03,pagesWidth:.19,pagesHeight:.6,pagesDepth:.48,spineX:0,spineY:.03,spineZ:.23,spineWidth:.025,spineHeight:.62,spineDepth:.2,spineRotY:90},ru={x:.36,y:-3.46,z:1.33,topX:.16,topY:-.08,topZ:.68,rotX:92,rotY:0,rotZ:0,mainWidth:7.08,mainDepth:2.87,returnWidth:2.51,returnDepth:5.35,innerCut:4.12,thickness:.2,radius:.9,legHeight:1.96,legRadius:.15,legInset:.58},au={x:5.59,y:.85,z:-1.74,rotX:0,rotY:0,rotZ:0,width:1.98,height:1.35,depth:.18,innerInset:.13,sunX:.34,sunY:.2,sunRadius:.18,mountainAX:-.16,mountainAY:-.24,mountainAScaleX:1.14,mountainAScaleY:1,mountainAScaleZ:1.38,mountainAWidth:.9,mountainAHeight:.69,mountainARotZ:1,mountainBX:.33,mountainBY:-.36,mountainBScaleX:.78,mountainBScaleY:.84,mountainBScaleZ:3,mountainBWidth:.83,mountainBHeight:.44,mountainBRotZ:1},Ql={screenMode:"code",x:1.9,y:-1.65,z:.56,rotX:-7,rotY:-4.5,rotZ:-1,width:3.27,height:2.28,depth:.18,radius:.22,screenInset:.11,screenDepth:.15,screenColor:"#353a41",screenGlowColor:"#3f4754",screenGlow:.22,standWidth:.8,standHeight:1.07,standDepth:.05,standOffsetZ:.19,standRotX:14,standRotZ:1,baseWidth:.8,baseHeight:.02,baseDepth:.55,baseOffsetY:.13,baseOffsetZ:-.07,baseRotX:8.5,baseRotZ:1,lineGap:.1,codeX:-.05,codeY:.13,codeScroll:0,codeWidthScale:1,codeVariant:0,codeActiveLine:13,codeTypingProgress:0,codeCursorVisible:!0},tc={screenMode:"ui",x:-1.55,y:-1.67,z:.87,rotX:-6,rotY:12,rotZ:1.5,width:3.1,height:2.24,depth:.18,radius:.22,screenInset:.11,screenDepth:.15,screenColor:"#353a41",screenGlowColor:"#3f4754",screenGlow:.18,standWidth:.68,standHeight:1,standDepth:.05,standOffsetZ:.19,standRotX:14,standRotZ:-1,baseWidth:.68,baseHeight:.02,baseDepth:.52,baseOffsetY:.15,baseOffsetZ:-.07,baseRotX:8.5,baseRotZ:-1,lineGap:.1,uiSidebarWidth:.15,uiSidebarX:-1.16,uiPanelWidth:.05,uiPanelX:-.15,uiTopIconWidth:.21,uiTopIconX:-1.18,uiTopIconY:.63,uiActiveIconIndex:0,uiDotIconIndex:0,uiDotVisible:!0,uiIconWidth:.18,uiIconX:-1.18,uiIconStartY:.3,uiIconGap:.33,uiDotX:.08,uiDotY:.08,uiLinesWidthScale:1.02,uiLinesX:-.77,uiLinesY:.73,uiLineGap:.14,uiLinesScroll:0},lu={x:5.9,y:-4.97,z:1.69,rotX:0,rotY:0,rotZ:-1,radius:.64,height:.93,neck:.44,bulge:.88,bandRadiusTop:.67,bandRadiusBottom:.61,bandHeight:.31,bandY:-.05,bottomBandRadiusTop:.48,bottomBandRadiusBottom:.49,bottomBandHeight:.32,bottomBandY:-.56,soilRadius:.44,soilHeight:.52,soilY:.19},cu={x:-.17,y:.85,z:-.28,rotX:0,rotY:0,rotZ:0,depth:.03,bevelSize:.12,bevelThickness:.45,bodyBulge:.72,ridgeBulge:.46,ridgeWidth:.65,centerWidth:.45,centerHeight:1.34,centerX:.05,centerY:.15,centerZ:-.11,centerRotX:-28.5,centerRotY:-36,centerRotZ:6,leftWidth:.19,leftHeight:1.08,leftX:-.17,leftY:-.01,leftZ:.22,leftRotX:-34,leftRotY:30.5,leftRotZ:23,rightWidth:.31,rightHeight:1.1,rightX:.46,rightY:.07,rightZ:.19,rightRotX:-84,rightRotY:-65.5,rightRotZ:-73},hu={x:4.51,y:-5.31,z:.4,rotX:0,rotY:0,rotZ:0,scaleX:1,scaleY:1.16,scaleZ:1,baseRadius:.34,baseHeight:.08,baseY:0,poleRadius:.035,poleHeight:3.2,shadeX:0,shadeY:3.12,shadeZ:0,shadeRotX:0,shadeRotY:0,shadeRotZ:0,shadeTopRadius:.44,shadeBottomRadius:.56,shadeHeight:.97,bulbX:0,bulbY:3.15,bulbZ:0,bulbRadius:.19,lightX:-.24,lightY:3.09,lightZ:.26,lightIntensity:3.43,lightDistance:17.7,lightDecay:2,baseColor:"#b98745",poleColor:"#b98745",shadeColor:"#ffe5af",shadeGlowColor:"#ffd27a",shadeGlow:.89,shadeOpacity:1,bulbColor:"#fff1c5",bulbGlowColor:"#ffd27a",bulbGlow:.91,lightColor:"#ffd895"},fu={x:.97,y:-3.43,z:2.57,rotX:-88,rotY:1,rotZ:3,width:1.32,height:.42,depth:.08,radius:.05,keyDepth:.04,keyWidthScale:.6,keyHeightScale:.44,keyCols:11,keyRows:3},ec={x:1.9,y:-3.429,z:2.5,rotX:-88,rotY:0,rotZ:0,width:.24,height:.39,depth:.03,radius:.13,splitHeight:2},uu={x:3.66,y:-3,z:1.46,rotX:1,rotY:0,rotZ:-1,width:.6,height:.88,depth:.25,radius:.17,panelWidth:.48,panelHeight:.72,panelDepth:.04,panelRadius:.13,panelX:0,panelY:0,panelZ:.11,coneRadius:.18,coneDepth:.05,coneX:0,coneY:.14,coneZ:.13,smallConeRadius:.05,smallConeDepth:.02,smallConeX:0,smallConeY:-.19,smallConeZ:.13},du={x:-.63,y:-3.49,z:2.46,rotX:3,rotY:-36,rotZ:0,scaleX:.66,scaleY:.91,scaleZ:.66,topRadius:.27,bottomRadius:.23,height:.55,bodyColor:"#dbd5cc",coffeeColor:"#5b3925",coffeeRadius:.22,coffeeDepth:.105,coffeeOffsetY:-.05,handleX:.3,handleY:.28,handleZ:0,handleRotX:1,handleRotY:172,handleRotZ:40,handleRadius:.19,handleTube:.035,handleArc:1.59,handleScaleX:.7,handleScaleY:1.01,handleScaleZ:.98,steamEnabled:!0,steamCount:100,steamHeight:.46,steamSpeed:.8,steamSpread:.33,steamOpacity:.02,steamThickness:.049,steamOffsetX:0,steamOffsetY:-.37,steamOffsetZ:0,steamRotX:-11.5,steamRotY:-110,steamRotZ:-13.5,steamColor:"#ffffff"},Rn={x:-1.35,y:-3.45,z:2.45,rotX:-88,rotY:1,rotZ:-151,scaleX:.8,scaleY:1.06,scaleZ:1,width:.48,height:.79,depth:.055,radius:.07,bodyColor:"#20242b",screenColor:"#3b414e",detailColor:"#000000",screenWidth:.42,screenHeight:.72,screenDepth:.012,screenRadius:.055,screenX:0,screenY:-.01,screenZ:-.005,screenGlow:.95,cameraRadius:.022,cameraDepth:.014,cameraX:0,cameraY:-.33,cameraZ:-.01,timeText:"10:24",timeColor:"#8a8ca8",timeWidth:.055,timeHeight:.11,timeThickness:.006,timeGap:.018,timeX:.18,timeY:-.11,timeZ:-.01,timeRotX:0,timeRotY:0,timeRotZ:180,fingerprintRadius:.035,fingerprintDepth:.012,fingerprintX:0,fingerprintY:.27,fingerprintZ:-.01,fingerprintColor:"#8a8ca8"},pu={x:.37,y:-5.52,z:5.84,rotX:0,rotY:0,rotZ:0,width:8.44,height:7.6,depth:.06,radius:.39,inset1:.9,inset2:1.77,inset3:2.5,radiusFalloff:.06,layerLift:.002},mu={x:1.15,y:-3.95,z:3.15,rotX:-90,rotY:-1,rotZ:3,shellX:.05,shellY:-1.43,shellZ:-.57,shellRotX:-86,shellRotY:6.5,shellRotZ:1,shellBackWidth:1.29,shellBackHeight:.92,shellBackDepth:.14,shellBackRadius:.04,shellBackX:0,shellBackY:-.89,shellBackZ:-.15,shellBackRotX:-1,shellBackRotY:0,shellBackRotZ:0,shellSeatWidth:1.28,shellSeatHeight:.72,shellSeatDepth:.14,shellSeatRadius:.1,shellSeatX:0,shellSeatY:-.1,shellSeatZ:.49,shellSeatRotX:90,shellSeatRotY:0,shellSeatRotZ:0,shellBendWidth:1.28,shellBendInnerRadius:.3,shellBendThickness:.14,shellBendX:.006,shellBendY:-.25,shellBendZ:-.01,shellBendRotX:0,shellBendRotY:0,shellBendRotZ:0,backWidth:1.26,backHeight:1.28,backDepth:.13,backRadius:.13,backX:.08,backY:-2,backZ:-.1,backRotX:-85.5,backRotY:3.5,backRotZ:0,innerBackWidth:1.48,innerBackHeight:1.72,innerBackDepth:.04,innerBackRadius:.09,innerBackX:.29,innerBackY:.75,innerBackZ:-1.27,innerBackRotX:0,innerBackRotY:0,innerBackRotZ:-3,seatWidth:1.2,seatHeight:1.11,seatDepth:.14,seatRadius:.1,seatX:.12,seatY:-1.62,seatZ:-.65,seatRotX:0,seatRotY:-1,seatRotZ:-5,frameWidth:.92,frameDepth:.24,frameLift:.96,backLegSpread:.87,backLegOffset:-.63,backLegHeight:.1,tubeRadius:.04,frameX:.07,frameY:-1.08,frameZ:-.51,frameRotX:8.5,frameRotY:-180,frameRotZ:-180},Gr={x:.1,y:-4.13,z:3.9,rotX:2,rotY:165,rotZ:8.5,sitAmount:1,sitOffsetX:1.09,sitOffsetY:.13,sitOffsetZ:.34,torsoScaleX:.86,torsoScaleY:.71,torsoScaleZ:.54,pelvisScaleX:.97,pelvisScaleY:1.37,pelvisScaleZ:.81,shirtColor:"#334737",pelvisColor:"#262537",pantsColor:"#19182b",headScaleX:.6,headScaleY:.81,headScaleZ:.74,jawWidth:.89,chinLength:0,cheekFullness:-.095,skinColor:"#f3c6a5",skinRoughness:.79,skinSheen:.53,skinSheenColor:"#ffd8c2",hairScaleX:.79,hairScaleY:1.36,hairScaleZ:1.05,hairColor:"#12151c",hairParticleSize:.58,hairCount:18e3,hairParticleOpacity:1,hairScatter:.05,hairFlow:.78,hairLengthVariation:.38,hairCurveX:-.013,hairCurveTipX:-.032,hairCurveZ:.059,hairCapScaleX:1.06,hairCapScaleY:.53,hairCapScaleZ:.93,fringeScaleX:.52,fringeScaleY:.49,fringeScaleZ:.46,fringeCount:360,fringeParticleSize:3,fringeParticleOpacity:1,fringeFlow:.68,earScaleX:.31,earScaleY:.6,earScaleZ:.25,eyeScaleX:.63,eyeScaleY:.37,eyeScaleZ:.2,eyeWhiteColor:"#f4eee7",eyeWhiteRoughness:.26,irisColor:"#4f749c",irisRoughness:.28,pupilColor:"#171312",pupilRoughness:.24,pupilScale:.56,pupilCoreScale:.34,pupilCoreDepth:0,irisDepth:.007,pupilDepth:.001,pupilOffsetX:-.015,pupilOffsetY:-.03,pupilOffsetZ:.035,leftEyeWhiteOffsetX:0,leftEyeWhiteOffsetY:0,leftEyeWhiteOffsetZ:-.002,rightEyeWhiteOffsetX:0,rightEyeWhiteOffsetY:-.002,rightEyeWhiteOffsetZ:-.008,leftIrisOffsetX:.01,leftIrisOffsetY:.01,leftIrisOffsetZ:-.06,rightIrisOffsetX:.008,rightIrisOffsetY:.008,rightIrisOffsetZ:-.066,leftPupilCoreOffsetX:.01,leftPupilCoreOffsetY:.002,leftPupilCoreOffsetZ:-.036,rightPupilCoreOffsetX:.004,rightPupilCoreOffsetY:-.002,rightPupilCoreOffsetZ:-.038,leftHighlightOffsetX:0,leftHighlightOffsetY:.004,leftHighlightOffsetZ:-.03,rightHighlightOffsetX:-.01,rightHighlightOffsetY:.002,rightHighlightOffsetZ:-.036,leftEyeWhiteRotX:-1,leftEyeWhiteRotY:-30.5,leftEyeWhiteRotZ:-10,rightEyeWhiteRotX:1,rightEyeWhiteRotY:28.5,rightEyeWhiteRotZ:3,browScaleX:.56,browScaleY:.26,browScaleZ:.22,browColor:"#3c2923",browRoughness:.9,eyeHighlightScale:.37,eyeHighlightOffsetX:0,eyeHighlightOffsetY:-.04,eyeHighlightOffsetZ:.04,noseColor:"#e8b08e",noseRoughness:.9,noseOffsetX:0,noseOffsetY:-.12,noseOffsetZ:.405,noseScaleX:.71,noseScaleY:1.06,noseScaleZ:.28,noseBridgeOffsetX:0,noseBridgeOffsetY:.105,noseBridgeOffsetZ:-.025,noseBridgeScaleX:.72,noseBridgeScaleY:.72,noseBridgeScaleZ:.5,noseWingOffsetX:.043,noseWingOffsetY:-.012,noseWingOffsetZ:-.012,noseWingScale:.62,nostrilColor:"#7a4940",nostrilOffsetX:.034,nostrilOffsetY:-.028,nostrilOffsetZ:.012,nostrilScaleX:.7,nostrilScaleY:.28,nostrilScaleZ:.18,blushColor:"#f1a39b",blushOpacity:.1,blushOffsetX:.05,blushOffsetY:-.12,blushOffsetZ:.355,blushScaleX:1.31,blushScaleY:.8,blushScaleZ:.06,blushRotX:8.5,blushRotY:-30.5,blushRotZ:0,mouthOffsetX:.005,mouthOffsetY:-.27,mouthOffsetZ:.43,mouthRotX:20,mouthRotY:-8.5,mouthRotZ:23,mouthScaleX:1.68,mouthScaleY:.47,mouthScaleZ:.81,mouthRadius:.045,mouthTube:.006,mouthArc:.45,mouthOpen:.046,lowerLipThickness:.026,lowerLipScale:.79,lipColor:"#9d554f",lipRoughness:.77,mouthInnerColor:"#4a2527",mouthInnerRoughness:.9,blinkEnabled:!0,blinkIntervalMin:1e3,blinkIntervalMax:1600,blinkDuration:170,saccadeEnabled:!0,saccadeIntervalMin:700,saccadeIntervalMax:2400,saccadeAmount:.12,saccadeSmooth:.14,upperArmScaleX:1,upperArmScaleY:1,upperArmScaleZ:1,lowerArmScaleX:1,lowerArmScaleY:1,lowerArmScaleZ:1,sleeveLength:.94,sleeveVolume:.84,sleeveColor:"#334737",handScaleX:1,handScaleY:1,handScaleZ:1,upperLegScaleX:1,upperLegScaleY:1,upperLegScaleZ:1,lowerLegScaleX:1,lowerLegScaleY:1.11,lowerLegScaleZ:1,sockScaleX:1.28,sockScaleY:.52,sockScaleZ:.9,sockColor:"#f1cc98",sockOffsetX:.01,sockOffsetY:-.01,sockOffsetZ:.03,sockRotX:0,sockRotY:-62,sockRotZ:4.5,shoeScaleX:1.1,shoeScaleY:1.49,shoeScaleZ:1.05,shoeColor:"#3c414a",shoeOffsetX:.03,shoeOffsetY:0,shoeOffsetZ:.08,shoeRotX:0,shoeRotY:0,shoeRotZ:0,soleScaleX:.2,soleScaleY:.2,soleScaleZ:.2,soleOffsetX:-.01,soleOffsetY:-.105,soleOffsetZ:.13,soleRotX:0,soleRotY:0,soleRotZ:0,upperShoeScaleX:.69,upperShoeScaleY:.47,upperShoeScaleZ:1.34,upperShoeOffsetX:-.03,upperShoeOffsetY:-.045,upperShoeOffsetZ:.09,upperShoeRotX:1,upperShoeRotY:0,upperShoeRotZ:0,toeScaleX:.89,toeScaleY:1.23,toeScaleZ:1.84,shoeToeColor:"#f6f6f6",toeOffsetX:-.01,toeOffsetY:-.03,toeOffsetZ:.28,toeRotX:0,toeRotY:-1,toeRotZ:0,torsoPitch:5,torsoYaw:24.5,torsoRoll:-9.5,headPitch:-4.964,headYaw:-65.005,headRoll:-5.5,eyeYaw:.12,eyePitch:.38,browTilt:5.5,leftShoulderX:-81.25,leftShoulderY:-177,leftShoulderZ:32,leftElbowX:25.5,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5,rightShoulderX:-93.5,rightShoulderY:-224,rightShoulderZ:-7,rightElbowX:8.5,rightElbowY:0,rightElbowZ:0,rightWristX:0,rightWristY:0,rightWristZ:0,leftHipX:7,leftHipY:8.005,leftHipZ:-25.35,leftKneeX:-10,leftAnkleX:10.131,leftAnkleY:0,leftAnkleZ:0,rightHipX:7,rightHipY:7,rightHipZ:4.5,rightKneeX:0,rightAnkleX:3,rightAnkleY:0,rightAnkleZ:0,torsoOffsetX:-.09,torsoOffsetY:-.06,torsoOffsetZ:0,pelvisOffsetX:-.04,pelvisOffsetY:-.09,pelvisOffsetZ:.14,headOffsetX:0,headOffsetY:.03,headOffsetZ:0,hairOffsetX:0,hairOffsetY:-.22,hairOffsetZ:.19,hairRotX:-23,hairRotY:0,hairRotZ:1,hairBaseOffsetX:0,hairBaseOffsetY:.3,hairBaseOffsetZ:-.24,hairBaseRotX:-25,hairBaseRotY:-3,hairBaseRotZ:23,hairBaseScaleX:.85,hairBaseScaleY:.52,hairBaseScaleZ:.79,hairCapOffsetX:0,hairCapOffsetY:1.55,hairCapOffsetZ:-.01,hairCapRotX:0,hairCapRotY:12,hairCapRotZ:4.5,fringeOffsetX:.05,fringeOffsetY:.17,fringeOffsetZ:.15,fringeRotX:-4,fringeRotY:0,fringeRotZ:-4,leftEarOffsetX:.15,leftEarOffsetY:.03,leftEarOffsetZ:.01,rightEarOffsetX:-.15,rightEarOffsetY:0,rightEarOffsetZ:-.06,leftEyeOffsetX:.05,leftEyeOffsetY:-.01,leftEyeOffsetZ:-.09,rightEyeOffsetX:-.03,rightEyeOffsetY:-.005,rightEyeOffsetZ:-.11,leftBrowOffsetX:.05,leftBrowOffsetY:-.11,leftBrowOffsetZ:-.055,rightBrowOffsetX:-.05,rightBrowOffsetY:-.11,rightBrowOffsetZ:-.055,leftShoulderOffsetX:.26,leftShoulderOffsetY:-.12,leftShoulderOffsetZ:-.12,rightShoulderOffsetX:-.38,rightShoulderOffsetY:-.15,rightShoulderOffsetZ:-.03,leftElbowOffsetX:0,leftElbowOffsetY:0,leftElbowOffsetZ:0,rightElbowOffsetX:0,rightElbowOffsetY:0,rightElbowOffsetZ:0,leftHipOffsetX:0,leftHipOffsetY:0,leftHipOffsetZ:0,rightHipOffsetX:0,rightHipOffsetY:0,rightHipOffsetZ:0,leftKneeOffsetX:0,leftKneeOffsetY:0,leftKneeOffsetZ:.06,rightKneeOffsetX:0,rightKneeOffsetY:0,rightKneeOffsetZ:.06,leftAnkleOffsetX:.01,leftAnkleOffsetY:-.04,leftAnkleOffsetZ:-.04,rightAnkleOffsetX:-.01,rightAnkleOffsetY:-.06,rightAnkleOffsetZ:-.06};function se(i){return JSON.parse(JSON.stringify(i))}const Nh={type:"change"},Ca={type:"start"},Fh={type:"end"},sr=new Yl,Bh=new ai,Ov=Math.cos(70*un.DEG2RAD);class Iv extends Fi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",xt),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Nh),n.update(),o=s.NONE},this.update=(function(){const _=new P,F=new Di().setFromUnitVectors(t.up,new P(0,1,0)),z=F.clone().invert(),V=new P,it=new Di,At=new P,zt=2*Math.PI;return function(Pe=null){const ne=n.object.position;_.copy(ne).sub(n.target),_.applyQuaternion(F),a.setFromVector3(_),n.autoRotate&&o===s.NONE&&Y(y(Pe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Le=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(Le)&&isFinite(Te)&&(Le<-Math.PI?Le+=zt:Le>Math.PI&&(Le-=zt),Te<-Math.PI?Te+=zt:Te>Math.PI&&(Te-=zt),Le<=Te?a.theta=Math.max(Le,Math.min(Te,a.theta)):a.theta=a.theta>(Le+Te)/2?Math.max(Le,a.theta):Math.min(Te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Qn=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=yt(a.radius);else{const ze=a.radius;a.radius=yt(a.radius*c),Qn=ze!=a.radius}if(_.setFromSpherical(a),_.applyQuaternion(z),ne.copy(n.target).add(_),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let ze=null;if(n.object.isPerspectiveCamera){const Bn=_.length();ze=yt(Bn*c);const xi=Bn-ze;n.object.position.addScaledVector(b,xi),n.object.updateMatrixWorld(),Qn=!!xi}else if(n.object.isOrthographicCamera){const Bn=new P(U.x,U.y,0);Bn.unproject(n.object);const xi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Qn=xi!==n.object.zoom;const Os=new P(U.x,U.y,0);Os.unproject(n.object),n.object.position.sub(Os).add(Bn),n.object.updateMatrixWorld(),ze=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ze).add(n.object.position):(sr.origin.copy(n.object.position),sr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(sr.direction))<Ov?t.lookAt(n.target):(Bh.setFromNormalAndCoplanarPoint(n.object.up,n.target),sr.intersectPlane(Bh,n.target))))}else if(n.object.isOrthographicCamera){const ze=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ze!==n.object.zoom&&(n.object.updateProjectionMatrix(),Qn=!0)}return c=1,R=!1,Qn||V.distanceToSquared(n.object.position)>r||8*(1-it.dot(n.object.quaternion))>r||At.distanceToSquared(n.target)>r?(n.dispatchEvent(Nh),V.copy(n.object.position),it.copy(n.object.quaternion),At.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_t),n.domElement.removeEventListener("pointerdown",Mt),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",v),n.domElement.getRootNode().removeEventListener("keydown",Ct,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",xt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const r=1e-6,a=new Uh,l=new Uh;let c=1;const h=new P,f=new et,u=new et,d=new et,g=new et,x=new et,m=new et,p=new et,T=new et,S=new et,b=new P,U=new et;let R=!1;const A=[],O={};let E=!1;function y(_){return _!==null?2*Math.PI/60*n.autoRotateSpeed*_:2*Math.PI/60/60*n.autoRotateSpeed}function L(_){const F=Math.abs(_*.01);return Math.pow(.95,n.zoomSpeed*F)}function Y(_){l.theta-=_}function B(_){l.phi-=_}const W=(function(){const _=new P;return function(z,V){_.setFromMatrixColumn(V,0),_.multiplyScalar(-z),h.add(_)}})(),q=(function(){const _=new P;return function(z,V){n.screenSpacePanning===!0?_.setFromMatrixColumn(V,1):(_.setFromMatrixColumn(V,0),_.crossVectors(n.object.up,_)),_.multiplyScalar(z),h.add(_)}})(),G=(function(){const _=new P;return function(z,V){const it=n.domElement;if(n.object.isPerspectiveCamera){const At=n.object.position;_.copy(At).sub(n.target);let zt=_.length();zt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*z*zt/it.clientHeight,n.object.matrix),q(2*V*zt/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(z*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),q(V*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function $(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function gt(_,F){if(!n.zoomToCursor)return;R=!0;const z=n.domElement.getBoundingClientRect(),V=_-z.left,it=F-z.top,At=z.width,zt=z.height;U.x=V/At*2-1,U.y=-(it/zt)*2+1,b.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function yt(_){return Math.max(n.minDistance,Math.min(n.maxDistance,_))}function vt(_){f.set(_.clientX,_.clientY)}function Vt(_){gt(_.clientX,_.clientX),p.set(_.clientX,_.clientY)}function te(_){g.set(_.clientX,_.clientY)}function K(_){u.set(_.clientX,_.clientY),d.subVectors(u,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;Y(2*Math.PI*d.x/F.clientHeight),B(2*Math.PI*d.y/F.clientHeight),f.copy(u),n.update()}function st(_){T.set(_.clientX,_.clientY),S.subVectors(T,p),S.y>0?$(L(S.y)):S.y<0&&Z(L(S.y)),p.copy(T),n.update()}function bt(_){x.set(_.clientX,_.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(x),n.update()}function ht(_){gt(_.clientX,_.clientY),_.deltaY<0?Z(L(_.deltaY)):_.deltaY>0&&$(L(_.deltaY)),n.update()}function Dt(_){let F=!1;switch(_.code){case n.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),F=!0;break}F&&(_.preventDefault(),n.update())}function Yt(_){if(A.length===1)f.set(_.pageX,_.pageY);else{const F=Xt(_),z=.5*(_.pageX+F.x),V=.5*(_.pageY+F.y);f.set(z,V)}}function Ot(_){if(A.length===1)g.set(_.pageX,_.pageY);else{const F=Xt(_),z=.5*(_.pageX+F.x),V=.5*(_.pageY+F.y);g.set(z,V)}}function Qt(_){const F=Xt(_),z=_.pageX-F.x,V=_.pageY-F.y,it=Math.sqrt(z*z+V*V);p.set(0,it)}function w(_){n.enableZoom&&Qt(_),n.enablePan&&Ot(_)}function rt(_){n.enableZoom&&Qt(_),n.enableRotate&&Yt(_)}function nt(_){if(A.length==1)u.set(_.pageX,_.pageY);else{const z=Xt(_),V=.5*(_.pageX+z.x),it=.5*(_.pageY+z.y);u.set(V,it)}d.subVectors(u,f).multiplyScalar(n.rotateSpeed);const F=n.domElement;Y(2*Math.PI*d.x/F.clientHeight),B(2*Math.PI*d.y/F.clientHeight),f.copy(u)}function ft(_){if(A.length===1)x.set(_.pageX,_.pageY);else{const F=Xt(_),z=.5*(_.pageX+F.x),V=.5*(_.pageY+F.y);x.set(z,V)}m.subVectors(x,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(x)}function j(_){const F=Xt(_),z=_.pageX-F.x,V=_.pageY-F.y,it=Math.sqrt(z*z+V*V);T.set(0,it),S.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),$(S.y),p.copy(T);const At=(_.pageX+F.x)*.5,zt=(_.pageY+F.y)*.5;gt(At,zt)}function Pt(_){n.enableZoom&&j(_),n.enablePan&&ft(_)}function dt(_){n.enableZoom&&j(_),n.enableRotate&&nt(_)}function Mt(_){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(_.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",v)),!Et(_)&&(Jt(_),_.pointerType==="touch"?Ht(_):k(_)))}function C(_){n.enabled!==!1&&(_.pointerType==="touch"?ot(_):tt(_))}function v(_){switch(Nt(_),A.length){case 0:n.domElement.releasePointerCapture(_.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",v),n.dispatchEvent(Fh),o=s.NONE;break;case 1:const F=A[0],z=O[F];Ht({pointerId:F,pageX:z.x,pageY:z.y});break}}function k(_){let F;switch(_.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Hi.DOLLY:if(n.enableZoom===!1)return;Vt(_),o=s.DOLLY;break;case Hi.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enablePan===!1)return;te(_),o=s.PAN}else{if(n.enableRotate===!1)return;vt(_),o=s.ROTATE}break;case Hi.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enableRotate===!1)return;vt(_),o=s.ROTATE}else{if(n.enablePan===!1)return;te(_),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Ca)}function tt(_){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;K(_);break;case s.DOLLY:if(n.enableZoom===!1)return;st(_);break;case s.PAN:if(n.enablePan===!1)return;bt(_);break}}function Q(_){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(_.preventDefault(),n.dispatchEvent(Ca),ht(J(_)),n.dispatchEvent(Fh))}function J(_){const F=_.deltaMode,z={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(F){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return _.ctrlKey&&!E&&(z.deltaY*=10),z}function Ct(_){_.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",ct,{passive:!0,capture:!0}))}function ct(_){_.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",ct,{passive:!0,capture:!0}))}function xt(_){n.enabled===!1||n.enablePan===!1||Dt(_)}function Ht(_){switch(Bt(_),A.length){case 1:switch(n.touches.ONE){case Xi.ROTATE:if(n.enableRotate===!1)return;Yt(_),o=s.TOUCH_ROTATE;break;case Xi.PAN:if(n.enablePan===!1)return;Ot(_),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case Xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(_),o=s.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;rt(_),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Ca)}function ot(_){switch(Bt(_),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;nt(_),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ft(_),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pt(_),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(_),n.update();break;default:o=s.NONE}}function _t(_){n.enabled!==!1&&_.preventDefault()}function Jt(_){A.push(_.pointerId)}function Nt(_){delete O[_.pointerId];for(let F=0;F<A.length;F++)if(A[F]==_.pointerId){A.splice(F,1);return}}function Et(_){for(let F=0;F<A.length;F++)if(A[F]==_.pointerId)return!0;return!1}function Bt(_){let F=O[_.pointerId];F===void 0&&(F=new et,O[_.pointerId]=F),F.set(_.pageX,_.pageY)}function Xt(_){const F=_.pointerId===A[0]?A[1]:A[0];return O[F]}n.domElement.addEventListener("contextmenu",_t),n.domElement.addEventListener("pointerdown",Mt),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ct,{passive:!0,capture:!0}),this.update()}}class Dv{constructor(t,e){this.config=e,this.camera=new ln(e.fov,window.innerWidth/window.innerHeight,.1,100),this.controls=new Iv(this.camera,t.domElement),this.controls.enableDamping=!0,this.basePosition=new P,this.baseTarget=new P,this.viewDirection=new P,this.viewRight=new P,this.viewUp=new P,this.panOffset=new P,this.parallaxCameraOffset=new P,this.parallaxTargetOffset=new P,this.apply()}setOrbitEnabled(t){this.controls.enabled=t}setParallax(t,e,n,s){this.parallaxCameraOffset.copy(this.viewRight).multiplyScalar(t).addScaledVector(this.viewUp,e),this.parallaxTargetOffset.copy(this.viewRight).multiplyScalar(n).addScaledVector(this.viewUp,s)}apply(){this.basePosition.set(this.config.x,this.config.y,this.config.z),this.baseTarget.set(this.config.targetX,this.config.targetY,this.config.targetZ),this.viewDirection.subVectors(this.baseTarget,this.basePosition).normalize(),this.viewRight.crossVectors(this.viewDirection,this.camera.up).normalize(),this.viewUp.crossVectors(this.viewRight,this.viewDirection).normalize(),this.panOffset.copy(this.viewRight).multiplyScalar(this.config.panX).addScaledVector(this.viewUp,this.config.panY),this.camera.position.copy(this.basePosition).add(this.panOffset).add(this.parallaxCameraOffset),this.camera.fov=this.config.fov,this.camera.updateProjectionMatrix(),this.controls.target.copy(this.baseTarget).add(this.panOffset).add(this.parallaxTargetOffset),this.controls.update()}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}class Uv{constructor(t,e){this.scene=t,this.config=e,this.ambient=new Kx(16776697,15391942,e.ambient),this.keyLight=new Oh(16774893,e.key),this.fillLight=new Wf(16771796,e.fill,30),this.frontLight=new Oh(16777215,e.front),this.keyLight.position.set(1.6,5.3,8.4),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.set(4096,4096),this.keyLight.shadow.camera.left=-10,this.keyLight.shadow.camera.right=10,this.keyLight.shadow.camera.top=8,this.keyLight.shadow.camera.bottom=-8,this.fillLight.position.set(-2.2,3.1,5.8),this.frontLight.position.set(-.6,2.4,9),t.add(this.ambient,this.keyLight,this.fillLight,this.frontLight),this.apply()}apply(){this.ambient.intensity=this.config.ambient,this.keyLight.intensity=this.config.key,this.fillLight.intensity=this.config.fill,this.frontLight.intensity=this.config.front,this.keyLight.shadow.radius=this.config.shadowRadius,this.keyLight.shadow.blurSamples=Math.round(this.config.blurSamples),this.keyLight.shadow.bias=this.config.bias,this.keyLight.shadow.normalBias=this.config.normalBias}}const gu=.32;function I(i){return un.degToRad(i)}function qe(i,t,e){const n=-i/2,s=-t/2,o=new Rs;return o.moveTo(n+e,s),o.lineTo(n+i-e,s),o.quadraticCurveTo(n+i,s,n+i,s+e),o.lineTo(n+i,s+t-e),o.quadraticCurveTo(n+i,s+t,n+i-e,s+t),o.lineTo(n+e,s+t),o.quadraticCurveTo(n,s+t,n,s+t-e),o.lineTo(n,s+e),o.quadraticCurveTo(n,s,n+e,s),o}function Nv(i=gu){const t=qe(6.6,4.25,.42),e=6.6-i*2,n=4.25-i*2,s=Math.max(.18,.42-i*.38),o=qe(e,n,s);t.holes.push(o);const r=new De(t,{depth:.18,bevelEnabled:!1,curveSegments:28});return r.center(),r}function Fv(i=gu){const t=Math.max(.01,i-.01),e=6.6-t*2,n=4.25-t*2,s=Math.max(.18,.42-t*.38),o=new De(qe(e,n,s),{depth:.08,bevelEnabled:!1,curveSegments:28});return o.center(),o}function zh(i,t,e,n){const s=qe(i,t,n),o=new De(s,{depth:e,bevelEnabled:!1,curveSegments:24});return o.center(),o}function kh(i,t,e,n){const s=qe(i,t,.22),o=qe(i-n*2,t-n*2,.16);s.holes.push(o);const r=new De(s,{depth:e,bevelEnabled:!1,curveSegments:24});return r.center(),r}function Hh(i,t,e,n){const s=new De(qe(i-n*2.1,t-n*2.1,.14),{depth:e,bevelEnabled:!1,curveSegments:24});return s.center(),s}function or(i,t,e){const n=new Rs;n.moveTo(-i/2,-t/2),n.lineTo(0,t/2),n.lineTo(i/2,-t/2),n.closePath();const s=new De(n,{depth:e,bevelEnabled:!1,curveSegments:8});return s.center(),s}function Xh(i,t,e,n,s,o,r){const a=new Rs,l=-i/2,c=i/2,h=-t/2,f=t/2,u=l+e,d=n/2,g=Math.max(.02,Math.min(r,i*.18,n*.18,e*.18,t*.18)),x=Math.max(.04,Math.min(g*.8,s*.35)),m=Math.min(c-g-.05,Math.max(u+x,c-s));a.moveTo(l+g,h),a.lineTo(c-g,h),a.quadraticCurveTo(c,h,c,h+g),a.lineTo(c,f-g),a.quadraticCurveTo(c,f,c-g,f),a.lineTo(m+x,f),a.quadraticCurveTo(m,f,m,f+x),a.lineTo(m,d-g),a.quadraticCurveTo(m,d,m-g,d),a.lineTo(l+g,d),a.quadraticCurveTo(l,d,l,d-g),a.lineTo(l,h+g),a.quadraticCurveTo(l,h,l+g,h),a.closePath();const p=new De(a,{depth:o,bevelEnabled:!1,curveSegments:16});return p.center(),p}function Or(i,t,e,n){const s=[new et(.01,0),new et(i*.72,.02*t),new et(i*n,.28*t),new et(i*1.04,.55*t),new et(i*.92,.82*t),new et(e,.94*t),new et(e*1.03,t)],o=new Xr(s,48);return o.center(),o}class Bv{constructor(t,e){this.scene=t,this.config=e,this.wallMaterial=new mt({color:16248802,roughness:1}),this.floorMaterial=new mt({color:16248802,roughness:e.floor.roughness}),this.backdrop=new at(new ie(e.wall.width,e.wall.height,e.wall.depth),this.wallMaterial),this.backdrop.name="room-wall",this.backdrop.castShadow=!0,this.backdrop.receiveShadow=!0,this.floor=new at(new ie(e.floor.width,.04,e.floor.height),this.floorMaterial),this.floor.name="room-floor",this.floor.castShadow=!1,this.floor.receiveShadow=!0,t.add(this.backdrop,this.floor),this.applyWall(),this.applyFloor()}applyWall(){this.backdrop.position.set(this.config.wall.x,this.config.wall.y,this.config.wall.z),this.wallMaterial.color.setHex(16248802),this.wallMaterial.roughness=1}applyFloor(){const t=this.config.floor;this.floor.geometry.dispose(),this.floor.geometry=new ie(t.width,.04,t.height),this.floor.position.set(t.x,t.y,t.z),this.floor.rotation.x=I(t.rotX),this.floor.rotation.y=I(t.rotY),this.floor.rotation.z=I(t.rotZ),this.floorMaterial.color.setHex(16248802).multiplyScalar(t.tone),this.floorMaterial.roughness=t.roughness}}function Aa(i,t,e,n){const s=new Kt,o=new at(new ie(i,t,.018),e);o.name="paper-sheet",o.castShadow=!0,o.receiveShadow=!0,o.position.y=-t/2,s.add(o);for(let r=0;r<4;r+=1){const a=new at(new ie(i*(.38+r%2*.16),.022,.004),new mt({color:n,roughness:.95,transparent:!0,opacity:.35}));a.position.set(-i*.08,-t*.32-r*.18,.012),s.add(a)}return s}function Yh(i,t,e,n){const s=new Kt,o=new at(new Gt(.25,.25,.08,32),t);o.name="pin-top",o.castShadow=!0,o.receiveShadow=!0,o.rotation.x=Math.PI/2,s.add(o);const r=new at(new Gt(.15,.15,.4,32),e);r.name="pin-stem",r.receiveShadow=!0,r.rotation.x=Math.PI/2,s.add(r);const a=new at(new Gt(.25,.25,.08,32),t);a.name="pin-base",a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=Math.PI/2,s.add(a);const l=new at(new Gt(.015,.015,.3,16),n);return l.name="pin-needle",l.receiveShadow=!0,l.rotation.x=Math.PI/2,s.add(l),i.add(s),{pushpin:s,top:o,stem:r,base:a,pin:l}}class zv{constructor(t,e,n,s){this.config=e,this.paperConfigs=n,this.pinConfigs=s,this.group=new Kt;const o=new mt({color:15389084,roughness:.9}),r=new mt({color:12031357,roughness:1}),a=new mt({color:16250095,roughness:.97}),l=new mt({color:12572398,roughness:.97}),c=new mt({color:15430015,roughness:.72}),h=new mt({color:13916775,roughness:.76}),f=new mt({color:7434609,roughness:.35,metalness:.7});this.frame=new at(Nv(),o),this.frame.name="board-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.cork=new at(Fv(),r),this.cork.name="board-cork",this.cork.position.z=-.02,this.cork.receiveShadow=!0,this.group.add(this.cork),this.paperLayer=new Kt,this.paperLayer.position.z=.055,this.cork.add(this.paperLayer),this.papers={backPaper:Aa(.92,1.24,a,13617087),frontPaper:Aa(1,1.34,l,10336727),rightPaper:Aa(.94,1.28,a,13946567)},Object.values(this.papers).forEach(u=>this.paperLayer.add(u)),this.pins={leftPin:Yh(this.cork,c,h,f),rightPin:Yh(this.cork,c,h,f)},t.add(this.group),this.apply()}applyPaperTransform(t){const e=this.papers[t],n=this.paperConfigs[t];e.position.set(n.x,n.y,n.z),e.rotation.x=I(n.rotX),e.rotation.z=I(n.rotZ)}applyPinTransform(t){const e=this.pins[t],n=this.pinConfigs[t];e.pushpin.position.set(n.x,n.y,n.z),e.top.geometry.dispose(),e.top.geometry=new Gt(n.topRadius,n.topRadius,n.topHeight,32),e.top.position.z=0,e.stem.geometry.dispose(),e.stem.geometry=new Gt(n.stemRadius,n.stemRadius,n.stemHeight,32),e.stem.position.z=-(n.topHeight*.5+n.stemHeight*.5),e.base.geometry.dispose(),e.base.geometry=new Gt(n.baseRadius,n.baseRadius,n.baseHeight,32),e.base.position.z=-(n.topHeight+n.stemHeight)+n.baseHeight*.5,e.pin.geometry.dispose(),e.pin.geometry=new Gt(n.pinRadius,n.pinRadius,n.pinHeight,16),e.pin.position.z=-(n.topHeight+n.stemHeight+n.baseHeight+n.pinHeight*.5-n.pinInset)}apply(){this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ),Object.keys(this.papers).forEach(t=>this.applyPaperTransform(t)),Object.keys(this.pins).forEach(t=>this.applyPinTransform(t))}getPaperSections(){return[{title:"Left Back",mesh:this.papers.backPaper,config:this.paperConfigs.backPaper,applyPaperTransform:()=>this.applyPaperTransform("backPaper")},{title:"Left Front",mesh:this.papers.frontPaper,config:this.paperConfigs.frontPaper,applyPaperTransform:()=>this.applyPaperTransform("frontPaper")},{title:"Right",mesh:this.papers.rightPaper,config:this.paperConfigs.rightPaper,applyPaperTransform:()=>this.applyPaperTransform("rightPaper")}]}getPinSections(){return[{title:"Left Pin",config:this.pinConfigs.leftPin,applyPinTransform:()=>this.applyPinTransform("leftPin")},{title:"Right Pin",config:this.pinConfigs.rightPin,applyPinTransform:()=>this.applyPinTransform("rightPin")}]}}function Gh(i,t,e,n){const s=new Kt,o=new at(new ie(.1,.1,.1),t),r=new at(new ie(.1,.1,.1),e),a=new at(new ie(.1,.1,.1),n);return o.name="book-cover",r.name="book-pages",a.name="book-spine",[o,r,a].forEach(l=>{l.castShadow=!0,l.receiveShadow=!0,s.add(l)}),i.add(s),{group:s,cover:o,pages:r,spine:a}}class kv{constructor(t,e,n,s,o,r){this.shelfConfig=e,this.potConfig=n,this.cactusConfig=s,this.bookConfig=o,this.bookTwoConfig=r;const a=new mt({color:15983548,roughness:.92}),l=new mt({color:16382453,roughness:.95}),c=new mt({color:7097138,roughness:1}),h=new mt({color:10936089,roughness:.88}),f=new mt({color:15908675,roughness:.9}),u=new mt({color:14523941,roughness:.9}),d=new mt({color:14410476,roughness:.92}),g=new mt({color:13095132,roughness:.94});this.bookPagesMaterial=new mt({color:15265269,roughness:.96}),this.shelf=new at(zh(e.width,e.height,e.depth,e.radius),a),this.shelf.name="shelf",this.shelf.castShadow=!0,this.shelf.receiveShadow=!0,t.add(this.shelf),this.pot=new at(Or(n.radius,n.height,n.neck,n.bulge),l),this.pot.name="pot",this.pot.castShadow=!0,this.pot.receiveShadow=!0,this.shelf.add(this.pot),this.soil=new at(new Gt(.12,.12,.03,32),c),this.soil.name="pot-soil",this.soil.receiveShadow=!0,this.shelf.add(this.soil),this.cactus=new Kt,this.cactusMain=new at(new In(.14,28,28),h),this.cactusArm=new at(new In(.1,28,28),h),this.cactusMain.name="cactus-main",this.cactusArm.name="cactus-arm",[this.cactusMain,this.cactusArm].forEach(x=>{x.castShadow=!0,x.receiveShadow=!0,this.cactus.add(x)}),this.shelf.add(this.cactus),this.book=Gh(this.shelf,f,this.bookPagesMaterial,u),this.bookTwo=Gh(this.shelf,d,this.bookPagesMaterial,g),this.applyAll()}applyShelfTransform(){this.shelf.geometry.dispose(),this.shelf.geometry=zh(this.shelfConfig.width,this.shelfConfig.height,this.shelfConfig.depth,this.shelfConfig.radius),this.shelf.position.set(this.shelfConfig.x,this.shelfConfig.y,this.shelfConfig.z),this.shelf.rotation.x=I(this.shelfConfig.rotX),this.shelf.rotation.y=I(this.shelfConfig.rotY),this.shelf.rotation.z=I(this.shelfConfig.rotZ)}applyPotTransform(){this.pot.geometry.dispose(),this.pot.geometry=Or(this.potConfig.radius,this.potConfig.height,this.potConfig.neck,this.potConfig.bulge),this.pot.position.set(this.potConfig.x,this.potConfig.y,this.potConfig.z),this.pot.rotation.x=I(this.potConfig.rotX),this.pot.rotation.y=I(this.potConfig.rotY),this.pot.rotation.z=I(this.potConfig.rotZ),this.soil.geometry.dispose(),this.soil.geometry=new Gt(this.potConfig.soilRadius,this.potConfig.soilRadius,this.potConfig.soilHeight,32),this.soil.position.copy(this.pot.position),this.soil.rotation.copy(this.pot.rotation),this.soil.position.y+=this.potConfig.soilOffsetY}applyCactusTransform(){this.cactus.position.set(this.cactusConfig.x,this.cactusConfig.y,this.cactusConfig.z),this.cactus.rotation.x=I(this.cactusConfig.rotX),this.cactus.rotation.y=I(this.cactusConfig.rotY),this.cactus.rotation.z=I(this.cactusConfig.rotZ),this.cactusMain.geometry.dispose(),this.cactusMain.geometry=new In(this.cactusConfig.mainRadius,28,28),this.cactusMain.scale.set(.9,this.cactusConfig.mainHeight/(this.cactusConfig.mainRadius*2),.72),this.cactusMain.position.set(this.cactusConfig.mainLean,0,0),this.cactusArm.geometry.dispose(),this.cactusArm.geometry=new In(this.cactusConfig.armRadius,28,28),this.cactusArm.scale.set(.9,this.cactusConfig.armHeight/(this.cactusConfig.armRadius*2),.72),this.cactusArm.position.set(this.cactusConfig.armOffsetX,this.cactusConfig.armOffsetY,0),this.cactusArm.rotation.z=this.cactusConfig.armLean}applyBookModelTransform(t,e){t.cover.geometry.dispose(),t.cover.geometry=new ie(e.width,e.height,e.depth),t.pages.geometry.dispose(),t.pages.geometry=new ie(e.pagesWidth,e.pagesHeight,e.pagesDepth),t.pages.position.set(e.pagesX,e.pagesY,e.pagesZ),t.spine.geometry.dispose(),t.spine.geometry=new ie(e.spineWidth,e.spineHeight,e.spineDepth),t.spine.position.set(e.spineX,e.spineY,e.spineZ),t.spine.rotation.y=I(e.spineRotY),t.group.position.set(e.x,e.y,e.z),t.group.rotation.x=I(e.rotX),t.group.rotation.y=I(e.rotY),t.group.rotation.z=I(e.rotZ)}applyBookTransform(){this.applyBookModelTransform(this.book,this.bookConfig)}applyBookTwoTransform(){this.applyBookModelTransform(this.bookTwo,this.bookTwoConfig)}applyAll(){this.applyShelfTransform(),this.applyPotTransform(),this.applyCactusTransform(),this.applyBookTransform(),this.applyBookTwoTransform()}getBookSections(){return[{title:"Orange Book",config:this.bookConfig,applyBookTransform:()=>this.applyBookTransform()},{title:"Blue Book",config:this.bookTwoConfig,applyBookTransform:()=>this.applyBookTwoTransform()}]}}class Hv{constructor(t,e){this.config=e,this.group=new Kt,this.topMaterial=new mt({color:16250868,roughness:.94}),this.legMaterial=new mt({color:13148267,roughness:.88}),this.top=new at(Xh(e.mainWidth,e.mainDepth,e.returnWidth,e.returnDepth,e.innerCut,e.thickness,e.radius),this.topMaterial),this.top.name="desk-top",this.top.castShadow=!0,this.top.receiveShadow=!0,this.group.add(this.top),this.legs=[];for(let n=0;n<5;n+=1){const s=new at(new Gt(e.legRadius,e.legRadius*1.08,e.legHeight,20),this.legMaterial);s.name=`desk-leg-${n+1}`,s.castShadow=!0,s.receiveShadow=!0,this.group.add(s),this.legs.push(s)}t.add(this.group),this.apply()}apply(){this.top.castShadow=!0,this.top.receiveShadow=!0,this.top.geometry.dispose(),this.top.geometry=Xh(this.config.mainWidth,this.config.mainDepth,this.config.returnWidth,this.config.returnDepth,this.config.innerCut,this.config.thickness,this.config.radius);const t=-this.config.mainWidth/2,e=this.config.mainWidth/2,n=-this.config.mainDepth/2,s=this.config.mainDepth/2,o=t+this.config.returnWidth,r=this.config.returnDepth/2,a=Math.max(this.config.legRadius*1.8,this.config.legInset),l=-(this.config.legHeight/2+this.config.thickness/2),c=[[t+a,l,n+a],[e-a,l,n+a],[e-a,l,s-a],[t+a,l,r-a],[o-a,l,r-a]];this.legs.forEach((h,f)=>{h.castShadow=!1,h.receiveShadow=!0,h.geometry.dispose(),h.geometry=new Gt(this.config.legRadius,this.config.legRadius*1.08,this.config.legHeight,20),h.position.set(...c[f]),h.rotation.set(0,0,0)}),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.set(0,0,0),this.top.position.set(this.config.topX,this.config.topY,this.config.topZ),this.top.rotation.x=I(this.config.rotX),this.top.rotation.y=I(this.config.rotY),this.top.rotation.z=I(this.config.rotZ)}}class Xv{constructor(t,e){this.config=e;const n=new mt({color:12112367,roughness:.9}),s=new mt({color:14280955,roughness:.95}),o=new mt({color:16250868,roughness:.95});this.group=new Kt,this.frame=new at(kh(e.width,e.height,e.depth,e.innerInset),n),this.frame.name="picture-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.inner=new at(Hh(e.width,e.height,.03,e.innerInset),s),this.inner.name="picture-inner",this.inner.receiveShadow=!0,this.group.add(this.inner),this.sun=new at(new Gt(.18,.18,.03,24),o),this.sun.name="picture-sun",this.sun.rotation.x=Math.PI/2,this.group.add(this.sun),this.mountainA=new at(or(.72,.55,.03),o),this.mountainA.name="picture-mountain-a",this.group.add(this.mountainA),this.mountainB=new at(or(.44,.34,.03),o),this.mountainB.name="picture-mountain-b",this.group.add(this.mountainB),t.add(this.group),this.apply()}apply(){this.frame.geometry.dispose(),this.frame.geometry=kh(this.config.width,this.config.height,this.config.depth,this.config.innerInset),this.inner.geometry.dispose(),this.inner.geometry=Hh(this.config.width,this.config.height,.03,this.config.innerInset),this.inner.position.z=this.config.depth*.18,this.sun.geometry.dispose(),this.sun.geometry=new Gt(this.config.sunRadius,this.config.sunRadius,.03,24),this.sun.position.set(this.config.sunX,this.config.sunY,.06),this.mountainA.geometry.dispose(),this.mountainA.geometry=or(this.config.mountainAWidth,this.config.mountainAHeight,.03),this.mountainA.position.set(this.config.mountainAX,this.config.mountainAY,.05),this.mountainA.scale.set(this.config.mountainAScaleX,this.config.mountainAScaleY,this.config.mountainAScaleZ),this.mountainA.rotation.z=I(this.config.mountainARotZ),this.mountainB.geometry.dispose(),this.mountainB.geometry=or(this.config.mountainBWidth,this.config.mountainBHeight,.03),this.mountainB.position.set(this.config.mountainBX,this.config.mountainBY,.05),this.mountainB.scale.set(this.config.mountainBScaleX,this.config.mountainBScaleY,this.config.mountainBScaleZ),this.mountainB.rotation.z=I(this.config.mountainBRotZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ)}}function Vh(i,t,e,n){const s=new De(qe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}function Wh(i,t,e,n,s){const o=new De(qe(i-n*2,t-n*2,Math.max(.08,s-n*.5)),{depth:e,bevelEnabled:!1,curveSegments:20});return o.center(),o}function Zh(i,t){const e=new at(new ie(i,.045,.01),new mt({color:t,roughness:.92}));return e.castShadow=!1,e.receiveShadow=!1,e}function Yv(i){for(;i.children.length>0;){const t=i.children.pop();i.remove(t),t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&t.material.dispose()}}class _u{constructor(t,e){this.config=e,this.group=new Kt,this.frameMaterial=new mt({color:7104383,roughness:.88}),this.screenMaterial=new mt({color:3488321,roughness:.95,emissive:3488321,emissiveIntensity:e.screenGlow??.18}),this.standMaterial=new mt({color:5459299,roughness:.9}),this.frame=new at(Vh(e.width,e.height,e.depth,e.radius),this.frameMaterial),this.frame.name="monitor-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.screen=new at(Wh(e.width,e.height,e.screenDepth,e.screenInset,e.radius),this.screenMaterial),this.screen.name="monitor-screen",this.screen.receiveShadow=!0,this.group.add(this.screen),this.content=new Kt,this.content.name="monitor-content",this.screen.add(this.content),this.stem=new at(new ie(e.standWidth,e.standHeight,e.standDepth),this.standMaterial),this.stem.name="monitor-stem",this.stem.castShadow=!0,this.stem.receiveShadow=!0,this.group.add(this.stem),this.base=new at(new ie(e.baseWidth,e.baseHeight,e.baseDepth),this.standMaterial),this.base.name="monitor-base",this.base.castShadow=!0,this.base.receiveShadow=!0,this.group.add(this.base),t.add(this.group),this.apply()}buildCodeContent(){const t=[14195768,12048207,11497958,9146520,15044504,14195768,12048207,11497958,9146520,14195768,12048207,15044504,11497958,12048207],e=[.92,1.18,.74,.52,.66,1.08,.82,1.26,.64,1.02,.78,.56,.88,.68],n=[0,.14,.28,.28,.14,0,.16,.3,.3,.16,0,.14,.28,0],s=Math.floor(this.config.codeVariant??0),o=this.config.codeWidthScale??1,r=Math.floor(this.config.codeScroll??0),a=Math.floor(this.config.codeActiveLine??e.length-1)%e.length,l=this.config.codeTypingProgress??1,c=t.map((x,m)=>t[(m+s)%t.length]),h=e.map((x,m)=>e[(m+s*3)%e.length]*o),f=-this.config.width*.34+(this.config.codeX??0),u=this.config.height*.26+(this.config.codeY??0);let d=f,g=u;if(c.forEach((x,m)=>{const p=(m+r)%c.length,T=m,S=m===a,b=h[p]*(S?Math.max(.16,l):1),U=n[(p+s)%n.length],R=Zh(b,c[p]),A=f+U,O=u-T*this.config.lineGap;R.name=`monitor-line-${m+1}`,R.position.set(A+b/2,O,this.config.screenDepth*.7),this.content.add(R),S&&(d=A+b+.04,g=O)}),this.config.codeCursorVisible){const x=new at(new ie(.025,.065,.01),new mt({color:16052444,roughness:.92}));x.position.set(d,g,this.config.screenDepth*.72),this.content.add(x)}}buildUiContent(){const t=new mt({color:2830133,roughness:.95}),e=new mt({color:3488321,roughness:.95}),n=new mt({color:3817285,roughness:.95}),s=new mt({color:7314136,roughness:.92}),o=new mt({color:13851747,roughness:.92}),r=this.config.uiActiveIconIndex??0,a=this.config.uiDotIconIndex??r,l=[],c=new at(new ie(this.config.width*(this.config.uiSidebarWidth??.06),this.config.height*.82,.01),t);c.position.set(this.config.uiSidebarX??-this.config.width*.35,0,this.config.screenDepth*.7),this.content.add(c);const h=new at(new ie(this.config.width*(this.config.uiPanelWidth??.13),this.config.height*.82,.01),e);h.position.set(this.config.uiPanelX??-this.config.width*.2,0,this.config.screenDepth*.68),this.content.add(h);const f=this.config.uiTopIconWidth??.22,u=new at(new ie(f,f,.01),r===0?s:n);u.position.set(this.config.uiTopIconX??-this.config.width*.43,this.config.uiTopIconY??this.config.height*.28,this.config.screenDepth*.75),this.content.add(u),l.push({x:u.position.x,y:u.position.y});for(let m=0;m<3;m+=1){const p=this.config.uiIconWidth??.18,T=new at(new ie(p,p,.01),r===m+1?s:n);T.position.set(this.config.uiIconX??-this.config.width*.43,(this.config.uiIconStartY??this.config.height*.02)-m*(this.config.uiIconGap??.3),this.config.screenDepth*.74),this.content.add(T),l.push({x:T.position.x,y:T.position.y})}if(this.config.uiDotVisible??!0){const m=l[un.clamp(Math.floor(a),0,l.length-1)],p=new at(new Gt(.035,.035,.01,18),o);p.rotation.x=Math.PI/2,p.position.set(m.x+(this.config.uiDotX??0),m.y+(this.config.uiDotY??0),this.config.screenDepth*.76),this.content.add(p)}const d=this.config.uiLinesWidthScale??1,g=[.52,.42,.48,.34,.44,.28,.38].map(m=>m*d),x=this.config.uiLinesScroll??0;g.forEach((m,p)=>{const T=Zh(m,12633290),S=(p+x)%g.length;T.position.set((this.config.uiLinesX??-this.config.width*.07)+m*.5,(this.config.uiLinesY??this.config.height*.31)-S*(this.config.uiLineGap??.12),this.config.screenDepth*.76),this.content.add(T)})}buildContent(){if(Yv(this.content),this.config.screenMode==="ui"){this.buildUiContent();return}this.buildCodeContent()}apply(){this.screenMaterial.color.set(this.config.screenColor??3488321),this.screenMaterial.emissive.set(this.config.screenGlowColor??this.config.screenColor??3488321),this.screenMaterial.emissiveIntensity=this.config.screenGlow??.18,this.frame.geometry.dispose(),this.frame.geometry=Vh(this.config.width,this.config.height,this.config.depth,this.config.radius),this.screen.geometry.dispose(),this.screen.geometry=Wh(this.config.width,this.config.height,this.config.screenDepth,this.config.screenInset,this.config.radius),this.screen.position.z=this.config.depth*.12,this.stem.geometry.dispose(),this.stem.geometry=new ie(this.config.standWidth,this.config.standHeight,this.config.standDepth),this.stem.position.set(0,-this.config.height*.52,-this.config.standOffsetZ),this.stem.rotation.x=I(this.config.standRotX),this.stem.rotation.z=I(this.config.standRotZ),this.base.geometry.dispose(),this.base.geometry=new ie(this.config.baseWidth,this.config.baseHeight,this.config.baseDepth),this.base.position.set(0,-this.config.height*.82+this.config.baseOffsetY,this.config.baseOffsetZ),this.base.rotation.x=I(this.config.baseRotX),this.base.rotation.z=I(this.config.baseRotZ),this.buildContent(),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ)}}function Gv(i,t,e,n){const s=new Rs;s.moveTo(0,-t/2),s.bezierCurveTo(i*.55,-t*.28,i*.62,t*.22,0,t/2),s.bezierCurveTo(-i*.62,t*.22,-i*.55,-t*.28,0,-t/2);const o=new De(s,{depth:e,bevelEnabled:!0,bevelSegments:10,bevelSize:i*n.bevelSize,bevelThickness:e*n.bevelThickness,curveSegments:24});o.center();const r=o.attributes.position,a=i*.5,l=t*.5;for(let c=0;c<r.count;c+=1){const h=r.getX(c),f=r.getY(c);let u=r.getZ(c);const d=Math.max(0,1-Math.abs(h)/a),g=Math.max(0,1-Math.abs(f)/l),x=d*g,m=Math.max(0,1-Math.abs(h)/(a*n.ridgeWidth))*g,p=e*n.bodyBulge*x+e*n.ridgeBulge*m;u+=u>=0?p:-p,r.setZ(c,u)}return r.needsUpdate=!0,o.computeVertexNormals(),o}function Ra(i){const t=new at(new ie(.1,.1,.02),i);return t.castShadow=!0,t.receiveShadow=!0,t}class Vv{constructor(t,e,n){this.potConfig=e,this.plantConfig=n,this.group=new Kt,this.potMaterial=new mt({color:16316661,roughness:.94}),this.bandMaterial=new mt({color:13152922,roughness:.96}),this.soilMaterial=new mt({color:7097138,roughness:1}),this.leafMaterial=new mt({color:10936089,roughness:.86}),this.pot=new at(Or(e.radius,e.height,e.neck,e.bulge),this.potMaterial),this.pot.castShadow=!0,this.pot.receiveShadow=!0,this.group.add(this.pot),this.middleBand=new at(new Gt(.3,.32,.1,48),this.bandMaterial),this.middleBand.castShadow=!1,this.middleBand.receiveShadow=!0,this.group.add(this.middleBand),this.bottomBand=new at(new Gt(.28,.3,.08,48),this.bandMaterial),this.bottomBand.castShadow=!1,this.bottomBand.receiveShadow=!0,this.group.add(this.bottomBand),this.soil=new at(new Gt(.12,.12,.03,32),this.soilMaterial),this.soil.receiveShadow=!0,this.group.add(this.soil),this.plant=new Kt,this.centerLeaf=Ra(this.leafMaterial),this.leftLeaf=Ra(this.leafMaterial),this.rightLeaf=Ra(this.leafMaterial),this.plant.add(this.centerLeaf,this.leftLeaf,this.rightLeaf),this.group.add(this.plant),t.add(this.group),this.applyPot(),this.applyPlant()}applyPot(){this.pot.geometry.dispose(),this.pot.geometry=Or(this.potConfig.radius,this.potConfig.height,this.potConfig.neck,this.potConfig.bulge),this.group.position.set(this.potConfig.x,this.potConfig.y,this.potConfig.z),this.group.rotation.x=I(this.potConfig.rotX),this.group.rotation.y=I(this.potConfig.rotY),this.group.rotation.z=I(this.potConfig.rotZ),this.middleBand.geometry.dispose(),this.middleBand.geometry=new Gt(this.potConfig.bandRadiusTop,this.potConfig.bandRadiusBottom,this.potConfig.bandHeight,48),this.middleBand.position.set(0,this.potConfig.bandY,0),this.bottomBand.geometry.dispose(),this.bottomBand.geometry=new Gt(this.potConfig.bottomBandRadiusTop,this.potConfig.bottomBandRadiusBottom,this.potConfig.bottomBandHeight,48),this.bottomBand.position.set(0,this.potConfig.bottomBandY,0),this.soil.geometry.dispose(),this.soil.geometry=new Gt(this.potConfig.soilRadius,this.potConfig.soilRadius,this.potConfig.soilHeight,32),this.soil.position.set(0,this.potConfig.soilY,0)}applyLeaf(t,e,n,s,o,r,a,l,c,h){t.geometry.dispose(),t.geometry=Gv(e,n,s,{bevelSize:this.plantConfig.bevelSize,bevelThickness:this.plantConfig.bevelThickness,bodyBulge:this.plantConfig.bodyBulge,ridgeBulge:this.plantConfig.ridgeBulge,ridgeWidth:this.plantConfig.ridgeWidth}),t.position.set(o,r,a),t.rotation.x=I(l),t.rotation.y=I(c),t.rotation.z=I(h)}applyPlant(){this.plant.position.set(this.plantConfig.x,this.plantConfig.y,this.plantConfig.z),this.plant.rotation.x=I(this.plantConfig.rotX),this.plant.rotation.y=I(this.plantConfig.rotY),this.plant.rotation.z=I(this.plantConfig.rotZ),this.applyLeaf(this.centerLeaf,this.plantConfig.centerWidth,this.plantConfig.centerHeight,this.plantConfig.depth,this.plantConfig.centerX,this.plantConfig.centerY,this.plantConfig.centerZ,this.plantConfig.centerRotX,this.plantConfig.centerRotY,this.plantConfig.centerRotZ),this.applyLeaf(this.leftLeaf,this.plantConfig.leftWidth,this.plantConfig.leftHeight,this.plantConfig.depth,this.plantConfig.leftX,this.plantConfig.leftY,this.plantConfig.leftZ,this.plantConfig.leftRotX,this.plantConfig.leftRotY,this.plantConfig.leftRotZ),this.applyLeaf(this.rightLeaf,this.plantConfig.rightWidth,this.plantConfig.rightHeight,this.plantConfig.depth,this.plantConfig.rightX,this.plantConfig.rightY,this.plantConfig.rightZ,this.plantConfig.rightRotX,this.plantConfig.rightRotY,this.plantConfig.rightRotZ)}}class Wv{constructor(t,e){this.config=e,this.group=new Kt,this.baseMaterial=new mt({color:13015637,roughness:.72,metalness:.18}),this.poleMaterial=new mt({color:12950103,roughness:.62,metalness:.28}),this.shadeMaterial=new mt({color:16770996,emissive:16765818,emissiveIntensity:.45,roughness:.88,transparent:!0,opacity:.88,side:yn}),this.base=new at(new Gt(.3,.3,.08,48),this.baseMaterial),this.base.castShadow=!0,this.base.receiveShadow=!0,this.group.add(this.base),this.pole=new at(new Gt(.025,.025,3,32),this.poleMaterial),this.pole.castShadow=!0,this.pole.receiveShadow=!0,this.group.add(this.pole),this.shade=new at(new Gt(.52,.78,.58,64,1,!0),this.shadeMaterial),this.shade.castShadow=!0,this.shade.receiveShadow=!0,this.group.add(this.shade),this.bulb=new at(new In(.12,24,16),new mt({color:16773573,emissive:16765818,emissiveIntensity:1.1,roughness:.5})),this.group.add(this.bulb),this.light=new Wf(16767125,.8,8,1.6),this.light.castShadow=!1,this.group.add(this.light),this.hitArea=new at(new ie(1.4,4.4,1),new mi({transparent:!0,opacity:0,depthWrite:!1})),this.hitArea.name="floor-lamp-hit-area",this.hitArea.userData.isFloorLampHitArea=!0,this.group.add(this.hitArea),t.add(this.group),this.apply()}apply(){this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ),this.base.geometry.dispose(),this.base.geometry=new Gt(this.config.baseRadius,this.config.baseRadius,this.config.baseHeight,48),this.base.position.set(0,this.config.baseY,0),this.pole.geometry.dispose(),this.pole.geometry=new Gt(this.config.poleRadius,this.config.poleRadius,this.config.poleHeight,32),this.pole.position.set(0,this.config.baseY+this.config.baseHeight*.5+this.config.poleHeight*.5,0),this.shade.geometry.dispose(),this.shade.geometry=new Gt(this.config.shadeTopRadius,this.config.shadeBottomRadius,this.config.shadeHeight,64,1,!0),this.shade.position.set(this.config.shadeX,this.config.shadeY,this.config.shadeZ),this.shade.rotation.x=I(this.config.shadeRotX),this.shade.rotation.y=I(this.config.shadeRotY),this.shade.rotation.z=I(this.config.shadeRotZ),this.bulb.geometry.dispose(),this.bulb.geometry=new In(this.config.bulbRadius,24,16),this.bulb.position.set(this.config.bulbX,this.config.bulbY,this.config.bulbZ),this.light.position.set(this.config.lightX,this.config.lightY,this.config.lightZ),this.light.intensity=this.config.lightIntensity,this.light.distance=this.config.lightDistance,this.light.decay=this.config.lightDecay,this.hitArea.position.set(0,1.85,0),this.hitArea.scale.set(Math.max(.4,this.config.shadeBottomRadius*1.6),Math.max(.5,this.config.poleHeight/4.4+this.config.shadeHeight/4.4),Math.max(.4,this.config.shadeBottomRadius*1.15)),this.baseMaterial.color.set(this.config.baseColor),this.poleMaterial.color.set(this.config.poleColor),this.shadeMaterial.color.set(this.config.shadeColor),this.shadeMaterial.emissive.set(this.config.shadeGlowColor),this.shadeMaterial.emissiveIntensity=this.config.shadeGlow,this.shadeMaterial.opacity=this.config.shadeOpacity,this.bulb.material.color.set(this.config.bulbColor),this.bulb.material.emissive.set(this.config.bulbGlowColor),this.bulb.material.emissiveIntensity=this.config.bulbGlow,this.light.color.set(this.config.lightColor)}}function rr(i,t,e,n){const s=new De(qe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:16});return s.center(),s}class Zv{constructor(t,e,n){this.keyboardConfig=e,this.mouseConfig=n,this.keyboardMaterial=new mt({color:15330543,roughness:.94}),this.keyMaterial=new mt({color:16185336,roughness:.9}),this.mouseMaterial=new mt({color:14673130,roughness:.93}),this.keyboard=new Kt,this.keyboardBody=new at(rr(1,.35,.05,.08),this.keyboardMaterial),this.keyboardBody.castShadow=!0,this.keyboardBody.receiveShadow=!0,this.keyboard.add(this.keyboardBody),this.keys=[],this.createKeys(),this.mouse=new Kt,this.mouseBody=new at(rr(.22,.34,.06,.1),this.mouseMaterial),this.mouseBody.castShadow=!0,this.mouseBody.receiveShadow=!0,this.mouse.add(this.mouseBody),this.mouseSplit=new at(new ie(.008,.12,.008),new mt({color:13028563,roughness:.9})),this.mouse.add(this.mouseSplit),t.add(this.keyboard,this.mouse),this.applyKeyboard(),this.applyMouse()}createKeys(){this.keys.forEach(n=>{this.keyboard.remove(n),n.geometry.dispose()}),this.keys=[];const t=Math.max(1,Math.round(this.keyboardConfig.keyRows)),e=Math.max(1,Math.round(this.keyboardConfig.keyCols));for(let n=0;n<t;n+=1)for(let s=0;s<e;s+=1){const o=new at(new ie(.07,.05,.012),this.keyMaterial);o.castShadow=!1,o.receiveShadow=!0,this.keyboard.add(o),this.keys.push(o)}}applyKeyboard(){this.keyboardBody.geometry.dispose(),this.keyboardBody.geometry=rr(this.keyboardConfig.width,this.keyboardConfig.height,this.keyboardConfig.depth,this.keyboardConfig.radius),this.keyboard.position.set(this.keyboardConfig.x,this.keyboardConfig.y,this.keyboardConfig.z),this.keyboard.rotation.x=I(this.keyboardConfig.rotX),this.keyboard.rotation.y=I(this.keyboardConfig.rotY),this.keyboard.rotation.z=I(this.keyboardConfig.rotZ);const t=Math.max(1,Math.round(this.keyboardConfig.keyCols)),e=Math.max(1,Math.round(this.keyboardConfig.keyRows));this.keys.length!==t*e&&this.createKeys();const n=this.keyboardConfig.width*.95,s=this.keyboardConfig.height*.74,o=n/t*this.keyboardConfig.keyWidthScale,r=s/e*this.keyboardConfig.keyHeightScale;this.keys.forEach((a,l)=>{const c=l%t,h=Math.floor(l/t);a.geometry.dispose(),a.geometry=new ie(o,r,this.keyboardConfig.keyDepth),a.position.set(-n/2+c*(n/t)+o*.5,s/2-h*(s/e)-r*.5,this.keyboardConfig.depth*.35)})}applyMouse(){this.mouseBody.geometry.dispose(),this.mouseBody.geometry=rr(this.mouseConfig.width,this.mouseConfig.height,this.mouseConfig.depth,this.mouseConfig.radius),this.mouse.position.set(this.mouseConfig.x,this.mouseConfig.y,this.mouseConfig.z),this.mouse.rotation.x=I(this.mouseConfig.rotX),this.mouse.rotation.y=I(this.mouseConfig.rotY),this.mouse.rotation.z=I(this.mouseConfig.rotZ),this.mouseSplit.position.set(0,this.mouseConfig.height*.14,this.mouseConfig.depth*.4),this.mouseSplit.scale.y=this.mouseConfig.splitHeight}}function ar(i,t,e,n){const s=new De(qe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}class qv{constructor(t,e){this.config=e,this.bodyMaterial=new mt({color:14721823,roughness:.82}),this.frontMaterial=new mt({color:16250095,roughness:.95}),this.coneMaterial=new mt({color:5197927,roughness:.88}),this.group=new Kt,this.body=new at(ar(.8,1,.6,.08),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.frontPanel=new at(ar(.62,.82,.04,.04),this.frontMaterial),this.frontPanel.castShadow=!0,this.frontPanel.receiveShadow=!0,this.group.add(this.frontPanel),this.cone=new at(new Gt(.19,.19,.06,32),this.coneMaterial),this.cone.castShadow=!0,this.cone.receiveShadow=!0,this.cone.rotation.x=Math.PI/2,this.group.add(this.cone),this.smallCone=new at(new Gt(.08,.08,.03,32),this.coneMaterial),this.smallCone.castShadow=!0,this.smallCone.receiveShadow=!0,this.smallCone.rotation.x=Math.PI/2,this.group.add(this.smallCone),t.add(this.group),this.apply()}apply(){this.body.geometry.dispose(),this.body.geometry=ar(this.config.width,this.config.height,this.config.depth,this.config.radius),this.frontPanel.geometry.dispose(),this.frontPanel.geometry=ar(this.config.panelWidth,this.config.panelHeight,this.config.panelDepth,this.config.panelRadius),this.frontPanel.position.set(this.config.panelX,this.config.panelY,this.config.panelZ),this.cone.geometry.dispose(),this.cone.geometry=new Gt(this.config.coneRadius,this.config.coneRadius,this.config.coneDepth,32),this.cone.position.set(this.config.coneX,this.config.coneY,this.config.coneZ),this.smallCone.geometry.dispose(),this.smallCone.geometry=new Gt(this.config.smallConeRadius,this.config.smallConeRadius,this.config.smallConeDepth,32),this.smallCone.position.set(this.config.smallConeX,this.config.smallConeY,this.config.smallConeZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ)}setConePulse(t){this.cone.scale.set(t,1,t)}}class Kv{constructor(t,e){this.config=e,this.group=new Kt,this.bodyMaterial=new mt({color:e.bodyColor,roughness:.9}),this.coffeeMaterial=new mt({color:e.coffeeColor,roughness:.78}),this.handleMaterial=new mt({color:e.bodyColor,roughness:.9}),this.body=new at(new Gt(.4,.36,.7,48),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.coffee=new at(new Gt(.32,.32,.02,48),this.coffeeMaterial),this.coffee.receiveShadow=!0,this.group.add(this.coffee),this.handle=new at(new hi(.24,.04,12,32,Math.PI*1.32),this.handleMaterial),this.handle.castShadow=!0,this.handle.receiveShadow=!0,this.group.add(this.handle),this.steamGroup=new Kt,this.steamLines=[],this.group.add(this.steamGroup),t.add(this.group),this.apply()}rebuildSteam(){for(;this.steamGroup.children.length>0;){const e=this.steamGroup.children.pop();this.steamGroup.remove(e),e.geometry.dispose(),e.material.dispose()}this.steamLines=[];const t=Math.max(0,Math.round(this.config.steamCount));for(let e=0;e<t;e+=1){const n=new Qe,s=new mi({color:this.config.steamColor,transparent:!0,opacity:this.config.steamOpacity,depthWrite:!1}),o=new at(n,s);this.steamGroup.add(o),this.steamLines.push(o)}}apply(){this.bodyMaterial.color.set(this.config.bodyColor),this.handleMaterial.color.set(this.config.bodyColor),this.coffeeMaterial.color.set(this.config.coffeeColor),this.body.geometry.dispose(),this.body.geometry=new Gt(this.config.topRadius,this.config.bottomRadius,this.config.height,48),this.body.position.set(0,this.config.height*.5,0),this.coffee.geometry.dispose(),this.coffee.geometry=new Gt(this.config.coffeeRadius,this.config.coffeeRadius,this.config.coffeeDepth,48),this.coffee.position.set(0,this.config.height+this.config.coffeeOffsetY,0),this.handle.geometry.dispose(),this.handle.geometry=new hi(this.config.handleRadius,this.config.handleTube,12,32,Math.PI*this.config.handleArc),this.handle.position.set(this.config.handleX,this.config.handleY,this.config.handleZ),this.handle.rotation.x=I(this.config.handleRotX),this.handle.rotation.y=I(this.config.handleRotY),this.handle.rotation.z=I(this.config.handleRotZ),this.handle.scale.set(this.config.handleScaleX,this.config.handleScaleY,this.config.handleScaleZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ),this.steamGroup.position.set(this.config.steamOffsetX,this.config.height+.06+this.config.steamOffsetY,this.config.steamOffsetZ),this.steamGroup.rotation.x=I(-this.config.rotX+this.config.steamRotX),this.steamGroup.rotation.y=I(-this.config.rotY+this.config.steamRotY),this.steamGroup.rotation.z=I(-this.config.rotZ+this.config.steamRotZ),this.rebuildSteam()}updateSteam(t){if(!this.config.steamEnabled){this.steamGroup.visible=!1;return}this.steamGroup.visible=!0;const e=this.config.steamSpeed,n=this.config.steamSpread,s=this.config.steamHeight;this.steamLines.forEach((o,r)=>{o.material.color.set(this.config.steamColor),o.material.opacity=this.config.steamOpacity;const a=r/Math.max(1,this.steamLines.length)*Math.PI*2,l=t*.0012*e+r*1.7,c=Math.cos(a)*n*.26,h=Math.sin(a)*n*.18,f=[];for(let u=0;u<8;u+=1){const d=u/7,g=Math.sin(l+d*Math.PI*2.2)*n*d,x=Math.cos(l*.8+d*Math.PI*1.9)*n*.45*d;f.push(new P(c+g,d*s,h+x))}o.geometry.dispose(),o.geometry=new fo(new Kl(f),16,this.config.steamThickness,6,!1)})}}function lr(i,t,e,n){const s=new De(qe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:18});return s.center(),s}class jv{constructor(t,e){this.config=e,this.group=new Kt,this.bodyMaterial=new mt({color:e.bodyColor,roughness:.86}),this.screenMaterial=new mt({color:e.screenColor,roughness:.72,emissive:e.screenColor,emissiveIntensity:.06}),this.detailMaterial=new mt({color:e.detailColor,roughness:.9}),this.timeMaterial=new mi({color:e.timeColor}),this.fingerprintMaterial=new mi({color:e.fingerprintColor,transparent:!0,opacity:.8}),this.body=new at(lr(.5,.92,.06,.08),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.screen=new at(lr(.42,.74,.012,.055),this.screenMaterial),this.screen.castShadow=!1,this.screen.receiveShadow=!0,this.group.add(this.screen),this.cameraDot=new at(new Gt(.025,.025,.012,18),this.detailMaterial),this.cameraDot.rotation.x=Math.PI/2,this.group.add(this.cameraDot),this.timeGroup=new Kt,this.group.add(this.timeGroup),this.fingerprint=new at(new Gt(.035,.035,.012,32),this.fingerprintMaterial),this.fingerprint.rotation.x=Math.PI/2,this.group.add(this.fingerprint),t.add(this.group),this.apply()}clearTime(){for(;this.timeGroup.children.length>0;){const t=this.timeGroup.children.pop();this.timeGroup.remove(t),t.geometry.dispose()}}addSegment(t,e,n,s,o){const r=new at(new ie(o?n:s,o?s:n,this.config.timeThickness),this.timeMaterial);r.position.set(t,e,0),this.timeGroup.add(r)}addDigit(t,e){const n={0:["a","b","c","d","e","f"],1:["b","c"],2:["a","b","g","e","d"],3:["a","b","g","c","d"],4:["f","g","b","c"],5:["a","f","g","c","d"],6:["a","f","g","e","c","d"],7:["a","b","c"],8:["a","b","c","d","e","f","g"],9:["a","b","c","d","f","g"]}[t],s=this.config.timeWidth,o=this.config.timeHeight,r=Math.max(.004,s*.18);if(!n){this.addSegment(e+s*.5,0,r,r,!0),this.addSegment(e+s*.5,o*.36,r,r,!0);return}n.includes("a")&&this.addSegment(e+s*.5,o,s,r,!0),n.includes("g")&&this.addSegment(e+s*.5,o*.5,s,r,!0),n.includes("d")&&this.addSegment(e+s*.5,0,s,r,!0),n.includes("f")&&this.addSegment(e,o*.75,o*.5,r,!1),n.includes("b")&&this.addSegment(e+s,o*.75,o*.5,r,!1),n.includes("e")&&this.addSegment(e,o*.25,o*.5,r,!1),n.includes("c")&&this.addSegment(e+s,o*.25,o*.5,r,!1)}buildTime(){this.clearTime(),this.timeMaterial.color.set(this.config.timeColor);let t=0;String(this.config.timeText).split("").forEach(e=>{this.addDigit(e,t),t+=e===":"?this.config.timeWidth*.55:this.config.timeWidth+this.config.timeGap}),this.timeGroup.position.set(this.config.timeX,this.config.timeY,this.config.depth*.68+this.config.timeZ),this.timeGroup.rotation.x=I(this.config.timeRotX),this.timeGroup.rotation.y=I(this.config.timeRotY),this.timeGroup.rotation.z=I(this.config.timeRotZ)}apply(){this.bodyMaterial.color.set(this.config.bodyColor),this.screenMaterial.color.set(this.config.screenColor),this.screenMaterial.emissive.set(this.config.screenColor),this.screenMaterial.emissiveIntensity=this.config.screenGlow,this.detailMaterial.color.set(this.config.detailColor),this.timeMaterial.color.set(this.config.timeColor),this.fingerprintMaterial.color.set(this.config.fingerprintColor),this.body.geometry.dispose(),this.body.geometry=lr(this.config.width,this.config.height,this.config.depth,this.config.radius),this.screen.geometry.dispose(),this.screen.geometry=lr(this.config.screenWidth,this.config.screenHeight,this.config.screenDepth,this.config.screenRadius),this.screen.position.set(this.config.screenX,this.config.screenY,this.config.depth*.52+this.config.screenZ),this.cameraDot.geometry.dispose(),this.cameraDot.geometry=new Gt(this.config.cameraRadius,this.config.cameraRadius,this.config.cameraDepth,18),this.cameraDot.position.set(this.config.cameraX,this.config.cameraY,this.config.depth*.62+this.config.cameraZ),this.buildTime(),this.fingerprint.geometry.dispose(),this.fingerprint.geometry=new Gt(this.config.fingerprintRadius,this.config.fingerprintRadius,this.config.fingerprintDepth,32),this.fingerprint.position.set(this.config.fingerprintX,this.config.fingerprintY,this.config.depth*.68+this.config.fingerprintZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ)}}function qh(i,t,e,n){const s=new De(qe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:24});return s.center(),s}class $v{constructor(t,e){this.config=e,this.group=new Kt,this.colors=[15176470,16116360,15772458,16182938],this.layers=this.colors.map((n,s)=>{const o=new at(qh(1,1,.04,.1),new mt({color:n,roughness:.95}));return o.name=`rug-layer-${s+1}`,o.castShadow=!1,o.receiveShadow=!0,o.rotation.x=-Math.PI/2,this.group.add(o),o}),t.add(this.group),this.apply()}apply(){const t=[{width:this.config.width,height:this.config.height,inset:0},{width:this.config.width-this.config.inset1*2,height:this.config.height-this.config.inset1*2,inset:this.config.inset1},{width:this.config.width-this.config.inset2*2,height:this.config.height-this.config.inset2*2,inset:this.config.inset2},{width:this.config.width-this.config.inset3*2,height:this.config.height-this.config.inset3*2,inset:this.config.inset3}];this.layers.forEach((e,n)=>{const s=t[n];e.geometry.dispose(),e.geometry=qh(Math.max(.2,s.width),Math.max(.2,s.height),this.config.depth,Math.max(.05,this.config.radius-n*this.config.radiusFalloff)),e.position.y=n*this.config.layerLift}),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ)}}function cr(i,t,e,n){const s=new De(qe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}function Kh(i,t,e){const n=t+e,s=new Rs;s.absarc(0,0,n,0,Math.PI/2,!1),s.lineTo(0,t),s.absarc(0,0,t,Math.PI/2,0,!0),s.closePath();const o=new De(s,{depth:i,bevelEnabled:!1,curveSegments:24});return o.center(),o.rotateY(Math.PI/2),o}function jh(i){const t=[new P(-i.frameWidth/2,-i.frameDepth/2,0),new P(i.frameWidth/2,-i.frameDepth/2,0),new P(i.frameWidth/2,i.frameDepth/2,0),new P(i.backLegSpread/2,i.frameDepth/2,i.frameLift),new P(i.backLegSpread/2,i.frameDepth/2+i.backLegOffset,i.frameLift+i.backLegHeight),new P(-i.backLegSpread/2,i.frameDepth/2+i.backLegOffset,i.frameLift+i.backLegHeight),new P(-i.backLegSpread/2,i.frameDepth/2,i.frameLift),new P(-i.frameWidth/2,i.frameDepth/2,0),new P(-i.frameWidth/2,-i.frameDepth/2,0)];return new Kl(t,!1,"catmullrom",.2)}class Jv{constructor(t,e){this.config=e,this.shellMaterial=new mt({color:16118249,roughness:.96}),this.frameMaterial=new mt({color:9343128,roughness:.72,metalness:.25}),this.group=new Kt,this.shell=new Kt,this.shellBack=new at(cr(1,1,.1,.08),this.shellMaterial),this.shellBack.castShadow=!0,this.shellBack.receiveShadow=!0,this.shell.add(this.shellBack),this.shellSeat=new at(cr(1,1,.1,.08),this.shellMaterial),this.shellSeat.castShadow=!0,this.shellSeat.receiveShadow=!0,this.shell.add(this.shellSeat),this.shellBend=new at(Kh(1,.2,.1),this.shellMaterial),this.shellBend.castShadow=!0,this.shellBend.receiveShadow=!0,this.shell.add(this.shellBend),this.group.add(this.shell),this.frame=new at(new fo(jh(e),64,.06,18,!1),this.frameMaterial),this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),t.add(this.group),this.apply()}apply(){this.shellBack.geometry.dispose(),this.shellBack.geometry=cr(this.config.shellBackWidth,this.config.shellBackHeight,this.config.shellBackDepth,this.config.shellBackRadius),this.shellBack.position.set(this.config.shellBackX,this.config.shellBackY,this.config.shellBackZ),this.shellBack.rotation.x=I(this.config.shellBackRotX),this.shellBack.rotation.y=I(this.config.shellBackRotY),this.shellBack.rotation.z=I(this.config.shellBackRotZ),this.shellSeat.geometry.dispose(),this.shellSeat.geometry=cr(this.config.shellSeatWidth,this.config.shellSeatHeight,this.config.shellSeatDepth,this.config.shellSeatRadius),this.shellSeat.position.set(this.config.shellSeatX,this.config.shellSeatY,this.config.shellSeatZ),this.shellSeat.rotation.x=I(this.config.shellSeatRotX),this.shellSeat.rotation.y=I(this.config.shellSeatRotY),this.shellSeat.rotation.z=I(this.config.shellSeatRotZ),this.shellBend.geometry.dispose(),this.shellBend.geometry=Kh(this.config.shellBendWidth,this.config.shellBendInnerRadius,this.config.shellBendThickness),this.shellBend.position.set(this.config.shellBendX,this.config.shellBendY,this.config.shellBendZ),this.shellBend.rotation.x=I(this.config.shellBendRotX),this.shellBend.rotation.y=I(this.config.shellBendRotY),this.shellBend.rotation.z=I(this.config.shellBendRotZ),this.shell.position.set(this.config.shellX,this.config.shellY,this.config.shellZ),this.shell.rotation.x=I(this.config.shellRotX),this.shell.rotation.y=I(this.config.shellRotY),this.shell.rotation.z=I(this.config.shellRotZ),this.frame.geometry.dispose(),this.frame.geometry=new fo(jh(this.config),64,this.config.tubeRadius,18,!1),this.frame.position.set(this.config.frameX,this.config.frameY,this.config.frameZ),this.frame.rotation.x=I(this.config.frameRotX),this.frame.rotation.y=I(this.config.frameRotY),this.frame.rotation.z=I(this.config.frameRotZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ)}}function So(i){return i.castShadow=!0,i.receiveShadow=!0,i}function Gn(i,t,e){return So(new at(new jl(i,t,8,16),e))}function Ne(i,t){return So(new at(new In(i,24,24),t))}function hr(i,t){const e=new at(new Gt(i,i,1,32),t);return e.castShadow=!1,e.receiveShadow=!1,e}function $h(i,t,e,n){const s=new In(i,32,32),o=s.attributes.position;for(let r=0;r<o.count;r+=1){let a=o.getX(r),l=o.getY(r),c=o.getZ(r);const h=l/i,f=Math.max(0,-h),u=Math.exp(-Math.pow((h+.08)/.34,2))*n,d=un.lerp(1,t,f**1.35);if(a*=d*(1+u),c*=1+u*.22,h<-.38){const g=(-h-.38)/.62;l-=e*g*g}o.setXYZ(r,a,l,c)}return o.needsUpdate=!0,s.computeVertexNormals(),s}function Jh(i,t,e,n){return So(new at(new ie(i,t,e),n))}function Qv(i,t,e,n,s){const o=new De(qe(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:16});return o.center(),So(new at(o,s))}function An(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function tS(){const i=document.createElement("canvas");i.width=16,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);return e.addColorStop(0,"rgba(255, 255, 255, 0)"),e.addColorStop(.16,"rgba(255, 255, 255, 0.85)"),e.addColorStop(.84,"rgba(255, 255, 255, 0.85)"),e.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=e,t.beginPath(),t.moveTo(8,0),t.quadraticCurveTo(14,0,14,8),t.lineTo(14,56),t.quadraticCurveTo(14,64,8,64),t.quadraticCurveTo(2,64,2,56),t.lineTo(2,8),t.quadraticCurveTo(2,0,8,0),t.fill(),new _x(i)}class eS{constructor(t,e){this.config=e,this.skinMaterial=new qx({color:16240042,roughness:.78,sheen:.12,sheenRoughness:.82,sheenColor:16767170}),this.hairStripTexture=tS(),this.hairStripObject=new Fe,this.hairBaseMaterial=new mi({color:0,roughness:1}),this.shirtMaterial=new mt({color:3820880,roughness:.92}),this.sleeveMaterial=new mt({color:3820880,roughness:.92}),this.pelvisMaterial=new mt({color:2499895,roughness:.94}),this.pantsMaterial=new mt({color:1644587,roughness:.94}),this.sockMaterial=new mt({color:16250870,roughness:.96}),this.shoeMaterial=new mt({color:3948874,roughness:.9}),this.shoeToeMaterial=new mt({color:16185078,roughness:.95}),this.eyeWhiteMaterial=new mt({color:16051943,roughness:.82}),this.eyePupilMaterial=new mt({color:8081721,roughness:.72}),this.pupilCoreMaterial=new mt({color:1512210,roughness:.68}),this.browMaterial=new mt({color:5911592,roughness:.9}),this.noseMaterial=new mt({color:15249550,roughness:.95}),this.lipMaterial=new mt({color:10310991,roughness:.82}),this.mouthInnerMaterial=new mt({color:4859175,roughness:.9}),this.nostrilMaterial=new mt({color:8014144,roughness:.92}),this.blushMaterial=new mt({color:15836059,roughness:.96,transparent:!0,opacity:.28,depthWrite:!1}),this.blinkAmount=0,this.eyeMotionYaw=0,this.eyeMotionPitch=0,this.headShapeSignature="",this.mouthShapeSignature="",this.hairSignature="",this.group=new Kt,this.group.name="character-root",t.add(this.group),this.buildBody(),this.apply()}buildBody(){this.torsoPivot=new Kt,this.group.add(this.torsoPivot),this.torso=Gn(.42,.75,this.shirtMaterial),this.torso.position.y=.6,this.torsoPivot.add(this.torso),this.pelvis=Ne(.32,this.pelvisMaterial),this.pelvis.scale.set(1.1,.75,.95),this.pelvis.position.y=.08,this.group.add(this.pelvis),this.headPivot=new Kt,this.headPivot.position.y=1.36,this.torsoPivot.add(this.headPivot),this.head=So(new at($h(.55,.84,.055,.055),this.skinMaterial)),this.head.scale.set(1.08,1,1.03),this.headPivot.add(this.head),this.hairGroup=new Kt,this.headPivot.add(this.hairGroup),this.hairBase=Ne(.52,this.hairBaseMaterial),this.hairGroup.add(this.hairBase),this.hair=this.createHairStrips(45e3),this.hairGroup.add(this.hair),this.fringe=this.createHairStrips(360),this.hairGroup.add(this.fringe),this.earLeft=Ne(.12,this.skinMaterial),this.earLeft.position.set(-.5,-.02,.04),this.headPivot.add(this.earLeft),this.earRight=Ne(.12,this.skinMaterial),this.earRight.position.set(.5,-.02,.04),this.headPivot.add(this.earRight),this.leftEye=new Kt,this.leftEye.position.set(-.18,.02,.48),this.headPivot.add(this.leftEye),this.rightEye=new Kt,this.rightEye.position.set(.18,.02,.48),this.headPivot.add(this.rightEye),this.leftEyeWhite=Ne(.12,this.eyeWhiteMaterial),this.leftEyeWhite.scale.set(.92,1.08,.45),this.leftEye.add(this.leftEyeWhite),this.rightEyeWhite=Ne(.12,this.eyeWhiteMaterial),this.rightEyeWhite.scale.set(.92,1.08,.45),this.rightEye.add(this.rightEyeWhite),this.leftPupil=hr(.065,this.eyePupilMaterial),this.leftPupil.position.z=.04,this.leftEye.add(this.leftPupil),this.rightPupil=hr(.065,this.eyePupilMaterial),this.rightPupil.position.z=.04,this.rightEye.add(this.rightPupil),this.leftPupilCore=hr(.042,this.pupilCoreMaterial),this.leftPupilCore.position.z=.065,this.leftEye.add(this.leftPupilCore),this.rightPupilCore=hr(.042,this.pupilCoreMaterial),this.rightPupilCore.position.z=.065,this.rightEye.add(this.rightPupilCore),this.leftEyeHighlight=Ne(.018,this.eyeWhiteMaterial),this.leftEyeHighlight.position.set(.02,.025,.075),this.leftEye.add(this.leftEyeHighlight),this.rightEyeHighlight=Ne(.018,this.eyeWhiteMaterial),this.rightEyeHighlight.position.set(.02,.025,.075),this.rightEye.add(this.rightEyeHighlight),this.leftBrow=Jh(.16,.04,.03,this.browMaterial),this.leftBrow.position.set(-.18,.23,.45),this.headPivot.add(this.leftBrow),this.rightBrow=Jh(.16,.04,.03,this.browMaterial),this.rightBrow.position.set(.18,.23,.45),this.headPivot.add(this.rightBrow),this.nose=Ne(.055,this.noseMaterial),this.nose.position.set(0,-.055,.505),this.nose.scale.set(.62,.78,.34),this.headPivot.add(this.nose),this.noseBridge=Gn(.035,.12,this.noseMaterial),this.headPivot.add(this.noseBridge),this.leftNoseWing=Ne(.04,this.noseMaterial),this.rightNoseWing=Ne(.04,this.noseMaterial),this.headPivot.add(this.leftNoseWing,this.rightNoseWing),this.leftNostril=Ne(.018,this.nostrilMaterial),this.rightNostril=Ne(.018,this.nostrilMaterial),this.headPivot.add(this.leftNostril,this.rightNostril),this.leftCheek=Ne(.055,this.blushMaterial),this.leftCheek.position.set(-.22,-.12,.49),this.leftCheek.scale.set(1.15,.55,.12),this.leftCheek.rotation.z=I(-8),this.headPivot.add(this.leftCheek),this.rightCheek=Ne(.055,this.blushMaterial),this.rightCheek.position.set(.22,-.12,.49),this.rightCheek.scale.set(1.15,.55,.12),this.rightCheek.rotation.z=I(8),this.headPivot.add(this.rightCheek),this.mouth=new at(new hi(.085,.012,8,28,Math.PI),this.lipMaterial),this.mouth.position.set(0,-.18,.48),this.mouth.rotation.z=Math.PI,this.mouth.scale.set(1.15,.42,1),this.headPivot.add(this.mouth),this.lowerLip=new at(new hi(.085,.012,8,28,Math.PI),this.lipMaterial),this.headPivot.add(this.lowerLip),this.mouthInner=Ne(.08,this.mouthInnerMaterial),this.headPivot.add(this.mouthInner),this.leftArm=this.buildArm(-1),this.rightArm=this.buildArm(1),this.leftLeg=this.buildLeg(-1),this.rightLeg=this.buildLeg(1)}buildArm(t){const e=new Kt;e.position.set(t*.48,1.02,.02),this.torsoPivot.add(e);const n=Gn(.115,.5,this.skinMaterial);n.position.y=-.32,e.add(n);const s=Gn(.14,.56,this.sleeveMaterial);s.position.y=-.33,s.scale.set(1.08,1,1.02),e.add(s);const o=new Kt;o.position.y=-.56,e.add(o);const r=Gn(.105,.5,this.skinMaterial);r.position.y=-.26,o.add(r);const a=new Kt;a.position.y=-.52,o.add(a);const l=Gn(.105,.08,this.skinMaterial);return l.position.y=-.055,l.scale.set(1.02,.95,.76),a.add(l),{shoulder:e,elbow:o,wrist:a,upperArm:n,sleeve:s,lowerArm:r,hand:l}}buildLeg(t){const e=new Kt;e.position.set(t*.2,-.08,0),this.group.add(e);const n=Gn(.15,.64,this.pantsMaterial);n.position.y=-.46,e.add(n);const s=new Kt;s.position.y=-.82,e.add(s);const o=Gn(.13,.56,this.pantsMaterial);o.position.y=-.4,s.add(o);const r=Gn(.12,.08,this.sockMaterial);r.position.y=-.77,s.add(r);const a=new Kt;a.position.y=-.76,s.add(a);const l=new Kt,c=Qv(.34,.045,.38,.035,this.shoeMaterial);l.add(c);const h=Ne(.18,this.shoeMaterial);l.add(h),a.add(l);const f=Ne(.13,this.shoeToeMaterial);return a.add(f),{hip:e,knee:s,ankle:a,upperLeg:n,lowerLeg:o,sock:r,shoe:l,sole:c,upperShoe:h,toe:f}}applyEyePupils(){const t=un.clamp(this.config.eyeYaw+this.eyeMotionYaw,-1,1),e=un.clamp(this.config.eyePitch+this.eyeMotionPitch,-1,1),n=t*.035,s=e*.028;this.leftPupil.position.x=n+this.config.pupilOffsetX+this.config.leftIrisOffsetX,this.leftPupil.position.y=s+this.config.pupilOffsetY+this.config.leftIrisOffsetY,this.leftPupil.position.z=this.config.pupilOffsetZ+this.config.leftIrisOffsetZ+.065*this.config.pupilScale-this.config.irisDepth*.5,this.rightPupil.position.x=n+this.config.pupilOffsetX+this.config.rightIrisOffsetX,this.rightPupil.position.y=s+this.config.pupilOffsetY+this.config.rightIrisOffsetY,this.rightPupil.position.z=this.config.pupilOffsetZ+this.config.rightIrisOffsetZ+.065*this.config.pupilScale-this.config.irisDepth*.5,this.leftPupilCore.position.x=n+this.config.pupilOffsetX+this.config.leftPupilCoreOffsetX,this.leftPupilCore.position.y=s+this.config.pupilOffsetY+this.config.leftPupilCoreOffsetY,this.leftPupilCore.position.z=this.config.pupilOffsetZ+this.config.pupilCoreDepth+this.config.leftPupilCoreOffsetZ+.042*this.config.pupilCoreScale-this.config.pupilDepth*.5,this.rightPupilCore.position.x=n+this.config.pupilOffsetX+this.config.rightPupilCoreOffsetX,this.rightPupilCore.position.y=s+this.config.pupilOffsetY+this.config.rightPupilCoreOffsetY,this.rightPupilCore.position.z=this.config.pupilOffsetZ+this.config.pupilCoreDepth+this.config.rightPupilCoreOffsetZ+.042*this.config.pupilCoreScale-this.config.pupilDepth*.5,this.leftEyeHighlight.position.x=n+this.config.eyeHighlightOffsetX+this.config.leftHighlightOffsetX,this.leftEyeHighlight.position.y=s+this.config.eyeHighlightOffsetY+this.config.leftHighlightOffsetY,this.leftEyeHighlight.position.z=this.config.eyeHighlightOffsetZ+this.config.leftHighlightOffsetZ,this.rightEyeHighlight.position.x=n+this.config.eyeHighlightOffsetX+this.config.rightHighlightOffsetX,this.rightEyeHighlight.position.y=s+this.config.eyeHighlightOffsetY+this.config.rightHighlightOffsetY,this.rightEyeHighlight.position.z=this.config.eyeHighlightOffsetZ+this.config.rightHighlightOffsetZ}applyHeadShape(){const t=[this.config.jawWidth,this.config.chinLength,this.config.cheekFullness].join(":");t!==this.headShapeSignature&&(this.head.geometry.dispose(),this.head.geometry=$h(.55,this.config.jawWidth,this.config.chinLength,this.config.cheekFullness),this.headShapeSignature=t)}applyBlink(){const t=un.clamp(this.blinkAmount,0,1),e=Math.max(.035,1-t*.965);this.leftEyeWhite.scale.y=1.08*this.config.eyeScaleY*e,this.rightEyeWhite.scale.y=1.08*this.config.eyeScaleY*e,this.leftPupil.scale.z=this.config.pupilScale*e,this.rightPupil.scale.z=this.config.pupilScale*e,this.leftPupilCore.scale.z=this.config.pupilCoreScale*e,this.rightPupilCore.scale.z=this.config.pupilCoreScale*e,this.leftEyeHighlight.scale.y=this.config.eyeHighlightScale*e,this.rightEyeHighlight.scale.y=this.config.eyeHighlightScale*e}setFaceMotion(t,e=0,n=0){this.blinkAmount=t,this.eyeMotionYaw=e,this.eyeMotionPitch=n,this.applyEyePupils(),this.applyBlink()}createHairStrips(t){const e=this.createHairStripGeometry(),n=new mi({color:6962731,map:this.hairStripTexture,alphaTest:.08,transparent:!0,depthWrite:!1,side:yn}),s=new gx(e,n,t);return s.frustumCulled=!1,s}createHairStripGeometry(){const t=new xo(.03,.12,1,5),e=t.attributes.position;for(let n=0;n<e.count;n+=1){const o=(e.getY(n)+.06)/.12,r=Math.sin(o*Math.PI)*this.config.hairCurveX+o*o*this.config.hairCurveTipX;e.setX(n,e.getX(n)+r),e.setZ(n,e.getZ(n)+Math.sin(o*Math.PI*1.35)*this.config.hairCurveZ)}return e.needsUpdate=!0,t.computeVertexNormals(),t}apply(){const t=un.clamp(this.config.sitAmount,0,1),e=1.5;this.skinMaterial.color.set(this.config.skinColor??16240042),this.skinMaterial.roughness=this.config.skinRoughness,this.skinMaterial.sheen=this.config.skinSheen,this.skinMaterial.sheenColor.set(this.config.skinSheenColor??"#ffd8c2"),this.eyeWhiteMaterial.color.set(this.config.eyeWhiteColor??"#f4eee7"),this.eyeWhiteMaterial.roughness=this.config.eyeWhiteRoughness,this.eyePupilMaterial.color.set(this.config.irisColor??"#7b5139"),this.eyePupilMaterial.roughness=this.config.irisRoughness,this.pupilCoreMaterial.color.set(this.config.pupilColor??"#171312"),this.pupilCoreMaterial.roughness=this.config.pupilRoughness,this.browMaterial.color.set(this.config.browColor??"#3c2923"),this.browMaterial.roughness=this.config.browRoughness,this.lipMaterial.color.set(this.config.lipColor??"#9d554f"),this.lipMaterial.roughness=this.config.lipRoughness,this.mouthInnerMaterial.color.set(this.config.mouthInnerColor??"#4a2527"),this.mouthInnerMaterial.roughness=this.config.mouthInnerRoughness,this.nostrilMaterial.color.set(this.config.nostrilColor??"#7a4940"),this.shirtMaterial.color.set(this.config.shirtColor??3820880),this.sleeveMaterial.color.set(this.config.sleeveColor??3820880),this.pelvisMaterial.color.set(this.config.pelvisColor??2499895),this.pantsMaterial.color.set(this.config.pantsColor??1644587),this.sockMaterial.color.set(this.config.sockColor??16250870),this.shoeMaterial.color.set(this.config.shoeColor??3948874),this.shoeToeMaterial.color.set(this.config.shoeToeColor??16185078),this.group.position.set(this.config.x+this.config.sitOffsetX*t,this.config.y+this.config.sitOffsetY*t,this.config.z+this.config.sitOffsetZ*t),this.group.rotation.x=I(this.config.rotX),this.group.rotation.y=I(this.config.rotY),this.group.rotation.z=I(this.config.rotZ),this.torso.scale.set(e*this.config.torsoScaleX,e*this.config.torsoScaleY,e*this.config.torsoScaleZ),this.torso.position.set(this.config.torsoOffsetX,.6*e+this.config.torsoOffsetY,this.config.torsoOffsetZ),this.pelvis.scale.set(1.18*e*this.config.pelvisScaleX,.62*e*this.config.pelvisScaleY,.92*e*this.config.pelvisScaleZ),this.pelvis.position.set(this.config.pelvisOffsetX,.08*e+this.config.pelvisOffsetY,this.config.pelvisOffsetZ),this.headPivot.position.set(this.config.headOffsetX,1.36*e+this.config.headOffsetY,this.config.headOffsetZ),this.applyHeadShape(),this.head.scale.set(1.08*this.config.headScaleX,1*this.config.headScaleY,1.03*this.config.headScaleZ),this.applyHair(),this.earLeft.scale.set(this.config.earScaleX,this.config.earScaleY,this.config.earScaleZ),this.earRight.scale.set(this.config.earScaleX,this.config.earScaleY,this.config.earScaleZ),this.leftEyeWhite.scale.set(.92*this.config.eyeScaleX,1.08*this.config.eyeScaleY,.45*this.config.eyeScaleZ),this.rightEyeWhite.scale.set(.92*this.config.eyeScaleX,1.08*this.config.eyeScaleY,.45*this.config.eyeScaleZ),this.leftEyeWhite.position.set(this.config.leftEyeWhiteOffsetX,this.config.leftEyeWhiteOffsetY,this.config.leftEyeWhiteOffsetZ),this.rightEyeWhite.position.set(this.config.rightEyeWhiteOffsetX,this.config.rightEyeWhiteOffsetY,this.config.rightEyeWhiteOffsetZ),this.leftEyeWhite.rotation.set(I(this.config.leftEyeWhiteRotX),I(this.config.leftEyeWhiteRotY),I(this.config.leftEyeWhiteRotZ)),this.rightEyeWhite.rotation.set(I(this.config.rightEyeWhiteRotX),I(this.config.rightEyeWhiteRotY),I(this.config.rightEyeWhiteRotZ)),this.leftPupil.quaternion.copy(this.leftEyeWhite.quaternion),this.leftPupil.rotateX(Math.PI/2),this.rightPupil.quaternion.copy(this.rightEyeWhite.quaternion),this.rightPupil.rotateX(Math.PI/2),this.leftPupilCore.quaternion.copy(this.leftEyeWhite.quaternion),this.leftPupilCore.rotateX(Math.PI/2),this.rightPupilCore.quaternion.copy(this.rightEyeWhite.quaternion),this.rightPupilCore.rotateX(Math.PI/2),this.leftPupil.scale.set(this.config.pupilScale,this.config.irisDepth,this.config.pupilScale),this.rightPupil.scale.set(this.config.pupilScale,this.config.irisDepth,this.config.pupilScale),this.leftPupilCore.scale.set(this.config.pupilCoreScale,this.config.pupilDepth,this.config.pupilCoreScale),this.rightPupilCore.scale.set(this.config.pupilCoreScale,this.config.pupilDepth,this.config.pupilCoreScale),this.leftEyeHighlight.scale.setScalar(this.config.eyeHighlightScale),this.rightEyeHighlight.scale.setScalar(this.config.eyeHighlightScale),this.leftBrow.scale.set(this.config.browScaleX,this.config.browScaleY,this.config.browScaleZ),this.rightBrow.scale.set(this.config.browScaleX,this.config.browScaleY,this.config.browScaleZ),this.noseMaterial.color.set(this.config.noseColor??"#e8b08e"),this.noseMaterial.roughness=this.config.noseRoughness,this.nose.position.set(this.config.noseOffsetX,this.config.noseOffsetY,this.config.noseOffsetZ),this.nose.scale.set(this.config.noseScaleX,this.config.noseScaleY,this.config.noseScaleZ),this.noseBridge.position.set(this.config.noseOffsetX+this.config.noseBridgeOffsetX,this.config.noseOffsetY+this.config.noseBridgeOffsetY,this.config.noseOffsetZ+this.config.noseBridgeOffsetZ),this.noseBridge.scale.set(this.config.noseBridgeScaleX,this.config.noseBridgeScaleY,this.config.noseBridgeScaleZ),this.leftNoseWing.position.set(this.config.noseOffsetX-this.config.noseWingOffsetX,this.config.noseOffsetY+this.config.noseWingOffsetY,this.config.noseOffsetZ+this.config.noseWingOffsetZ),this.rightNoseWing.position.set(this.config.noseOffsetX+this.config.noseWingOffsetX,this.config.noseOffsetY+this.config.noseWingOffsetY,this.config.noseOffsetZ+this.config.noseWingOffsetZ),this.leftNoseWing.scale.setScalar(this.config.noseWingScale),this.rightNoseWing.scale.setScalar(this.config.noseWingScale),this.leftNostril.position.set(this.config.noseOffsetX-this.config.nostrilOffsetX,this.config.noseOffsetY+this.config.nostrilOffsetY,this.config.noseOffsetZ+this.config.nostrilOffsetZ),this.rightNostril.position.set(this.config.noseOffsetX+this.config.nostrilOffsetX,this.config.noseOffsetY+this.config.nostrilOffsetY,this.config.noseOffsetZ+this.config.nostrilOffsetZ),this.leftNostril.scale.set(this.config.nostrilScaleX,this.config.nostrilScaleY,this.config.nostrilScaleZ),this.rightNostril.scale.set(this.config.nostrilScaleX,this.config.nostrilScaleY,this.config.nostrilScaleZ),this.blushMaterial.color.set(this.config.blushColor??"#f1a39b"),this.blushMaterial.opacity=this.config.blushOpacity,this.leftCheek.position.set(-.22+this.config.blushOffsetX,this.config.blushOffsetY,this.config.blushOffsetZ),this.rightCheek.position.set(.22-this.config.blushOffsetX,this.config.blushOffsetY,this.config.blushOffsetZ),this.leftCheek.scale.set(this.config.blushScaleX,this.config.blushScaleY,this.config.blushScaleZ),this.rightCheek.scale.set(this.config.blushScaleX,this.config.blushScaleY,this.config.blushScaleZ),this.leftCheek.rotation.set(I(this.config.blushRotX),I(this.config.blushRotY),I(this.config.blushRotZ)),this.rightCheek.rotation.set(I(this.config.blushRotX),I(-this.config.blushRotY),I(-this.config.blushRotZ));const n=[this.config.mouthRadius,this.config.mouthTube,this.config.mouthArc,this.config.lowerLipThickness].join(":");n!==this.mouthShapeSignature&&(this.mouth.geometry.dispose(),this.lowerLip.geometry.dispose(),this.mouth.geometry=new hi(this.config.mouthRadius,this.config.mouthTube,8,28,Math.PI*this.config.mouthArc),this.lowerLip.geometry=new hi(this.config.mouthRadius,this.config.lowerLipThickness,8,28,Math.PI*this.config.mouthArc),this.mouthShapeSignature=n),this.mouth.position.set(this.config.mouthOffsetX,this.config.mouthOffsetY,this.config.mouthOffsetZ),this.mouth.rotation.x=I(this.config.mouthRotX),this.mouth.rotation.y=I(this.config.mouthRotY),this.mouth.rotation.z=I(this.config.mouthRotZ),this.mouth.scale.set(this.config.mouthScaleX,this.config.mouthScaleY,this.config.mouthScaleZ),this.lowerLip.position.set(this.config.mouthOffsetX,this.config.mouthOffsetY-this.config.mouthOpen,this.config.mouthOffsetZ),this.lowerLip.rotation.set(I(this.config.mouthRotX),I(this.config.mouthRotY),I(this.config.mouthRotZ+180)),this.lowerLip.scale.set(this.config.mouthScaleX*this.config.lowerLipScale,this.config.mouthScaleY,this.config.mouthScaleZ),this.mouthInner.visible=this.config.mouthOpen>.002,this.mouthInner.position.set(this.config.mouthOffsetX,this.config.mouthOffsetY-this.config.mouthOpen*.5,this.config.mouthOffsetZ-.01),this.mouthInner.scale.set(this.config.mouthRadius*this.config.mouthScaleX*8,this.config.mouthOpen*3.5,.08),this.earLeft.position.set(-.5+this.config.leftEarOffsetX,-.02+this.config.leftEarOffsetY,.04+this.config.leftEarOffsetZ),this.earRight.position.set(.5+this.config.rightEarOffsetX,-.02+this.config.rightEarOffsetY,.04+this.config.rightEarOffsetZ),this.leftEye.position.set(-.18+this.config.leftEyeOffsetX,.02+this.config.leftEyeOffsetY,.48+this.config.leftEyeOffsetZ),this.rightEye.position.set(.18+this.config.rightEyeOffsetX,.02+this.config.rightEyeOffsetY,.48+this.config.rightEyeOffsetZ),this.leftBrow.position.set(-.18+this.config.leftBrowOffsetX,.23+this.config.leftBrowOffsetY,.45+this.config.leftBrowOffsetZ),this.rightBrow.position.set(.18+this.config.rightBrowOffsetX,.23+this.config.rightBrowOffsetY,.45+this.config.rightBrowOffsetZ),this.leftArm.shoulder.position.set(-.48*e+this.config.leftShoulderOffsetX,1.02*e+this.config.leftShoulderOffsetY,.02*e+this.config.leftShoulderOffsetZ),this.leftArm.shoulder.scale.set(e,e,e),this.leftArm.upperArm.scale.set(this.config.upperArmScaleX,this.config.upperArmScaleY,this.config.upperArmScaleZ),this.applySleeve(this.leftArm.sleeve),this.leftArm.lowerArm.scale.set(this.config.lowerArmScaleX,this.config.lowerArmScaleY,this.config.lowerArmScaleZ),this.leftArm.hand.scale.set(.95*this.config.handScaleX,1.12*this.config.handScaleY,.75*this.config.handScaleZ),this.rightArm.shoulder.position.set(.48*e+this.config.rightShoulderOffsetX,1.02*e+this.config.rightShoulderOffsetY,.02*e+this.config.rightShoulderOffsetZ),this.rightArm.shoulder.scale.set(e,e,e),this.rightArm.upperArm.scale.set(this.config.upperArmScaleX,this.config.upperArmScaleY,this.config.upperArmScaleZ),this.applySleeve(this.rightArm.sleeve),this.rightArm.lowerArm.scale.set(this.config.lowerArmScaleX,this.config.lowerArmScaleY,this.config.lowerArmScaleZ),this.rightArm.hand.scale.set(.95*this.config.handScaleX,1.12*this.config.handScaleY,.75*this.config.handScaleZ),this.leftArm.elbow.position.set(this.config.leftElbowOffsetX,-.62+this.config.leftElbowOffsetY,this.config.leftElbowOffsetZ),this.rightArm.elbow.position.set(this.config.rightElbowOffsetX,-.62+this.config.rightElbowOffsetY,this.config.rightElbowOffsetZ),this.leftLeg.hip.position.set(-.2*e+this.config.leftHipOffsetX,-.08*e+this.config.leftHipOffsetY,this.config.leftHipOffsetZ),this.leftLeg.hip.scale.set(e,e,e),this.leftLeg.upperLeg.scale.set(this.config.upperLegScaleX,this.config.upperLegScaleY,this.config.upperLegScaleZ),this.leftLeg.lowerLeg.scale.set(this.config.lowerLegScaleX,this.config.lowerLegScaleY,this.config.lowerLegScaleZ),this.applyFoot(this.leftLeg),this.rightLeg.hip.position.set(.2*e+this.config.rightHipOffsetX,-.08*e+this.config.rightHipOffsetY,this.config.rightHipOffsetZ),this.rightLeg.hip.scale.set(e,e,e),this.rightLeg.upperLeg.scale.set(this.config.upperLegScaleX,this.config.upperLegScaleY,this.config.upperLegScaleZ),this.rightLeg.lowerLeg.scale.set(this.config.lowerLegScaleX,this.config.lowerLegScaleY,this.config.lowerLegScaleZ),this.applyFoot(this.rightLeg),this.leftLeg.knee.position.set(this.config.leftKneeOffsetX,-.82+this.config.leftKneeOffsetY,this.config.leftKneeOffsetZ),this.rightLeg.knee.position.set(this.config.rightKneeOffsetX,-.82+this.config.rightKneeOffsetY,this.config.rightKneeOffsetZ),this.leftLeg.ankle.position.set(this.config.leftAnkleOffsetX,-.76+this.config.leftAnkleOffsetY,this.config.leftAnkleOffsetZ),this.rightLeg.ankle.position.set(this.config.rightAnkleOffsetX,-.76+this.config.rightAnkleOffsetY,this.config.rightAnkleOffsetZ),this.torsoPivot.rotation.x=I(this.config.torsoPitch+t*8),this.torsoPivot.rotation.y=I(this.config.torsoYaw),this.torsoPivot.rotation.z=I(this.config.torsoRoll),this.headPivot.rotation.x=I(this.config.headPitch),this.headPivot.rotation.y=I(this.config.headYaw),this.headPivot.rotation.z=I(this.config.headRoll),this.leftBrow.rotation.z=I(-10+this.config.browTilt),this.rightBrow.rotation.z=I(10-this.config.browTilt);const s=t*38,o=t*38,r=t*28,a=-t*96,l=t*96,c=-t*8;this.leftArm.shoulder.rotation.x=I(s+this.config.leftShoulderX),this.leftArm.shoulder.rotation.y=I(this.config.leftShoulderY),this.leftArm.shoulder.rotation.z=I(this.config.leftShoulderZ),this.leftArm.elbow.rotation.x=I(r+this.config.leftElbowX),this.leftArm.elbow.rotation.y=I(this.config.leftElbowY),this.leftArm.elbow.rotation.z=I(this.config.leftElbowZ),this.leftArm.wrist.rotation.x=I(this.config.leftWristX),this.leftArm.wrist.rotation.y=I(this.config.leftWristY),this.leftArm.wrist.rotation.z=I(this.config.leftWristZ),this.rightArm.shoulder.rotation.x=I(o+this.config.rightShoulderX),this.rightArm.shoulder.rotation.y=I(this.config.rightShoulderY),this.rightArm.shoulder.rotation.z=I(this.config.rightShoulderZ),this.rightArm.elbow.rotation.x=I(r+this.config.rightElbowX),this.rightArm.elbow.rotation.y=I(this.config.rightElbowY),this.rightArm.elbow.rotation.z=I(this.config.rightElbowZ),this.rightArm.wrist.rotation.x=I(this.config.rightWristX),this.rightArm.wrist.rotation.y=I(this.config.rightWristY),this.rightArm.wrist.rotation.z=I(this.config.rightWristZ),this.leftLeg.hip.rotation.x=I(a+this.config.leftHipX),this.leftLeg.hip.rotation.y=I(this.config.leftHipY),this.leftLeg.hip.rotation.z=I(this.config.leftHipZ),this.leftLeg.knee.rotation.x=I(l+this.config.leftKneeX),this.leftLeg.ankle.rotation.x=I(c+this.config.leftAnkleX),this.leftLeg.ankle.rotation.y=I(this.config.leftAnkleY),this.leftLeg.ankle.rotation.z=I(this.config.leftAnkleZ),this.rightLeg.hip.rotation.x=I(a+this.config.rightHipX),this.rightLeg.hip.rotation.y=I(this.config.rightHipY),this.rightLeg.hip.rotation.z=I(this.config.rightHipZ),this.rightLeg.knee.rotation.x=I(l+this.config.rightKneeX),this.rightLeg.ankle.rotation.x=I(c+this.config.rightAnkleX),this.rightLeg.ankle.rotation.y=I(this.config.rightAnkleY),this.rightLeg.ankle.rotation.z=I(this.config.rightAnkleZ),this.applyEyePupils(),this.applyBlink()}applySleeve(t){const e=un.clamp(this.config.sleeveLength??1,.4,1.6),n=un.clamp(this.config.sleeveVolume??1,.6,1.8);t.position.y=.09-.42*e,t.scale.set(1.08*n,e,1.02*n)}applyHair(){const e=["hairColor","hairParticleSize","hairCount","hairParticleOpacity","hairScatter","hairCurveX","hairCurveTipX","hairCurveZ","hairFlow","hairLengthVariation","hairOffsetX","hairOffsetY","hairOffsetZ","hairRotX","hairRotY","hairRotZ","hairScaleX","hairScaleY","hairScaleZ","hairBaseOffsetX","hairBaseOffsetY","hairBaseOffsetZ","hairBaseRotX","hairBaseRotY","hairBaseRotZ","hairBaseScaleX","hairBaseScaleY","hairBaseScaleZ","fringeCount","fringeParticleSize","fringeParticleOpacity","fringeFlow","fringeOffsetX","fringeOffsetY","fringeOffsetZ","fringeRotX","fringeRotY","fringeRotZ","fringeScaleX","fringeScaleY","fringeScaleZ"].map(n=>this.config[n]).join(":");e!==this.hairSignature&&(this.hairGroup.position.set(0,0,0),this.hairGroup.rotation.set(0,0,0),this.hairGroup.scale.set(1,1,1),this.hair.geometry.dispose(),this.hair.geometry=this.createHairStripGeometry(),this.hairBaseMaterial.color.set(this.config.hairColor??1185052),this.hairBase.position.set(this.config.hairOffsetX+this.config.hairBaseOffsetX,this.config.hairOffsetY+this.config.hairBaseOffsetY,this.config.hairOffsetZ+this.config.hairBaseOffsetZ),this.hairBase.rotation.set(I(this.config.hairRotX+this.config.hairBaseRotX),I(this.config.hairRotY+this.config.hairBaseRotY),I(this.config.hairRotZ+this.config.hairBaseRotZ)),this.hairBase.scale.set(this.config.hairBaseScaleX*this.config.hairScaleX,this.config.hairBaseScaleY*this.config.hairScaleY,this.config.hairBaseScaleZ*this.config.hairScaleZ),this.updateHairCloud(this.hair,"hair",n=>{const s=An(n,1)*Math.PI*2,o=Math.sqrt(An(n,2)),r=Math.cos(s)*.49*o,a=-.07+Math.sin(s)*.43*o,l=Math.sqrt(Math.max(0,1-(r/.54)**2-((a+.06)/.48)**2)),c=(An(n,3)-.5)*this.config.hairScatter;return[r+c*.4,.08+l*.44+c,a+c*.5]}),this.updateHairCloud(this.fringe,"fringe",n=>{const s=An(n,11),o=An(n,12),r=-.4+s*.74,a=Math.sin(s*Math.PI),l=.34-o*.23-a*.07,c=.33+o*.11+a*.04;return[r,l,c]}),this.hairSignature=e)}updateHairCloud(t,e,n){const s=t.instanceMatrix.count,o=Math.min(s,Math.max(0,Math.round(this.config[`${e}Count`]))),r=this.hairStripObject,a=e==="hair"?this.config.hairParticleSize:this.config[`${e}ParticleSize`]*this.config.hairParticleSize;for(let l=0;l<o;l+=1){const[c,h,f]=n(l),u=e==="hair"?this.config.hairFlow:this.config.fringeFlow,d=this.config.hairLengthVariation,g=(An(l,44)-.5)*.9*(1-u*.75),x=(An(l,45)-.5)*Math.PI,m=Math.atan2(c,f),p=un.lerp(x,m,u),T=a*(1-d*.5+An(l,46)*d),S=a*(.16+An(l,47)*.08);r.position.set(c,h,f),r.rotation.set(g,p,An(l,48)*Math.PI),r.scale.set(S,T,1),r.updateMatrix(),t.setMatrixAt(l,r.matrix)}t.count=o,t.instanceMatrix.needsUpdate=!0,t.material.color.set(this.config.hairColor??6962731),t.material.opacity=e==="hair"?this.config.hairParticleOpacity:this.config[`${e}ParticleOpacity`],t.position.set(this.config[`${e}OffsetX`],this.config[`${e}OffsetY`],this.config[`${e}OffsetZ`]),t.rotation.set(I(this.config[`${e}RotX`]),I(this.config[`${e}RotY`]),I(this.config[`${e}RotZ`])),t.scale.set(this.config[`${e}ScaleX`],this.config[`${e}ScaleY`],this.config[`${e}ScaleZ`])}applyFoot(t){t.sock.position.set(this.config.sockOffsetX,-.77+this.config.sockOffsetY,this.config.sockOffsetZ),t.sock.rotation.set(I(this.config.sockRotX),I(this.config.sockRotY),I(this.config.sockRotZ)),t.sock.scale.set(this.config.sockScaleX,this.config.sockScaleY,this.config.sockScaleZ),t.shoe.position.set(this.config.shoeOffsetX,this.config.shoeOffsetY,this.config.shoeOffsetZ),t.shoe.rotation.set(I(this.config.shoeRotX),I(this.config.shoeRotY),I(this.config.shoeRotZ)),t.shoe.scale.set(this.config.shoeScaleX,this.config.shoeScaleY,this.config.shoeScaleZ),t.sole.position.set(this.config.soleOffsetX,this.config.soleOffsetY,this.config.soleOffsetZ),t.sole.rotation.set(I(this.config.soleRotX),I(this.config.soleRotY),I(this.config.soleRotZ)),t.sole.scale.set(this.config.soleScaleX,this.config.soleScaleY,this.config.soleScaleZ),t.upperShoe.position.set(this.config.upperShoeOffsetX,this.config.upperShoeOffsetY,this.config.upperShoeOffsetZ),t.upperShoe.rotation.set(I(this.config.upperShoeRotX),I(this.config.upperShoeRotY),I(this.config.upperShoeRotZ)),t.upperShoe.scale.set(this.config.upperShoeScaleX,this.config.upperShoeScaleY,this.config.upperShoeScaleZ),t.toe.position.set(this.config.toeOffsetX,this.config.toeOffsetY,this.config.toeOffsetZ),t.toe.rotation.set(I(this.config.toeRotX),I(this.config.toeRotY),I(this.config.toeRotZ)),t.toe.scale.set(.92*this.config.toeScaleX,.52*this.config.toeScaleY,.66*this.config.toeScaleZ)}}new URLSearchParams(window.location.search).get("embed")==="1"&&(document.documentElement.classList.add("is-embedded"),document.documentElement.classList.add("is-ui-hidden"));const Ni=document.createElement("button");Ni.className="ui-toggle-button";Ni.type="button";Ni.textContent="GUI";Ni.setAttribute("aria-pressed",String(document.documentElement.classList.contains("is-ui-hidden")));Ni.addEventListener("click",()=>{const i=document.documentElement.classList.toggle("is-ui-hidden");Ni.setAttribute("aria-pressed",String(i))});document.body.appendChild(Ni);const we=new dx;we.background=new jt(16512232);we.fog=new Hr(16512232,14,28);const dn=new ux({antialias:!0});dn.setPixelRatio(Math.min(window.devicePixelRatio,2));dn.setSize(window.innerWidth,window.innerHeight);dn.shadowMap.enabled=!0;dn.shadowMap.type=Il;dn.outputColorSpace=xn;document.body.appendChild(dn.domElement);const an=se(Jl),cn=se(jf),nc=se($f),ic=se(Jf),xu=se(Qf),vu=se(tu),sc=se(eu),oc=se(nu),rc=se(iu),Su=se(su),yu=se(ou),ac=se(ru),lc=se(au),_e=se(Ql),Se=se(tc),cc=se(lu),hc=se(cu),fc=se(hu),uc=se(fu),yo=se(ec),dc=se(uu),pc=se(du),Ut=se(Rn),mc=se(pu),gc=se(mu),It=se(Gr),Ze=se(Kf),Je=new Dv(dn,an);Je.setOrbitEnabled(Ze.orbitControlsEnabled);const ml=new Uv(we,cn),nS=new Bv(we,nc),_c=new zv(we,ic,xu,vu),iS=new Hv(we,ac),Vr=new kv(we,sc,oc,rc,Su,yu),sS=new Xv(we,lc),Ir=new _u(we,_e),Dr=new _u(we,Se),Mu=new Vv(we,cc,hc),bu=new Wv(we,fc),xc=new Zv(we,uc,yo),Eu=new qv(we,dc),wu=new Kv(we,pc),io=new jv(we,Ut),oS=new $v(we,mc),rS=new Jv(we,gc),Be=new eS(we,It),Zt=se(Gr),fs=se(ec),rn=se(Gr);rn.headYaw=32;const on=se(tc);se(Ql);const Tu=se(Jl),Cu={...Tu,x:15.6,y:1.2,z:12.51,targetX:1.94,targetY:-.8,targetZ:-8.34,panX:-8.63,fov:28},aS={...Cu,panX:-7.26,fov:39},Au=300,gl=4600,Ru=2e3,Qh=600,lS=-68;let so=null,_l=!1,Ur=!1,xl=!1,ms="right_monitor_idle",xr=1/0,gs=1/0,vl=!1,Sl=!1;const Cs={x:0,y:0},li={x:0,y:0};let us=Ze.orbitControlsEnabled?performance.now():null,Pu=0;const tf=new Jx,Pa=new et,cS={ambient:.1,key:.05,fill:1.2,front:0},hS={screenColor:"#dedede",screenGlowColor:"#8e98a9"};let Lu=null,Ou=null,de=null,oo=!1;function fS(){return window.matchMedia("(max-width: 959px)").matches?aS:Cu}function uS(){Cs.x=0,Cs.y=0,li.x=0,li.y=0,Je.setParallax(0,0,0,0)}function dS(i){const t=performance.now();i&&us===null?(us=t,vr=0,Sr=0,yr=0,Mr=0,Be.setFaceMotion(Be.blinkAmount,0,0)):!i&&us!==null&&(Pu+=t-us,us=null),Ze.orbitControlsEnabled=i,uS(),Je.apply(),Je.setOrbitEnabled(i)}const Jn=Qx("Board Controls");document.body.appendChild(Jn);const vc=document.createElement("div");vc.className="panel-actions";Jn.appendChild(vc);const ue=Zf(Jn,"Scene",!0),Sc=Zf(Jn,"man",!0);vo(ue,"Fog",Ze.fogEnabled,i=>{Ze.fogEnabled=i,we.fog=i?new Hr(16512232,14,28):null});vo(ue,"Orbit Controls",Ze.orbitControlsEnabled,i=>{dS(i)});tv(ue,"Music Pulse Speed",.25,8,.05,Ze.musicPulseSpeed,i=>{Ze.musicPulseSpeed=i});lv(ue,ic,()=>_c.apply(),!0);ov(ue,an,()=>Je.apply(),!0);rv(ue,nc.floor,()=>nS.applyFloor(),!0);av(ue,mc,()=>oS.apply(),!0);sv(ue,cn,()=>ml.apply(),!0);pv(ue,ac,()=>iS.apply(),!0);qf(ue,"Monitor 1",_e,()=>Ir.apply(),!0);qf(ue,"Monitor 2",Se,()=>Dr.apply(),!0);mv(ue,cc,()=>Mu.applyPot(),!0);gv(ue,hc,()=>Mu.applyPlant(),!0);_v(ue,fc,()=>bu.apply(),!0);xv(ue,uc,()=>xc.applyKeyboard(),!0);vv(ue,yo,()=>xc.applyMouse(),!0);Sv(ue,dc,()=>Eu.apply(),!0);yv(ue,pc,()=>wu.apply(),!0);Mv(ue,Ut,()=>io.apply(),!0);bv(ue,gc,()=>rS.apply(),!0);cv(ue,sc,()=>Vr.applyShelfTransform(),!0);dv(ue,lc,()=>sS.apply(),!0);hv(ue,oc,()=>Vr.applyPotTransform(),!0);fv(ue,rc,()=>Vr.applyCactusTransform(),!0);uv(ue,Vr.getBookSections(),!0);nv(ue,_c.getPaperSections(),!0);iv(ue,_c.getPinSections(),!0);wv(Sc,It,()=>Be.apply(),!1);Ev(Sc,It,()=>Be.apply(),!0);Tv(Sc,It,()=>Be.apply(),!0);Cv(Jn,It,()=>Be.apply(),!1);Av(Jn,It,()=>Be.apply(),!1);Rv(Jn,It,()=>Be.apply(),!1);Pv(Jn,It,()=>Be.apply(),!1);Lv(Jn,It,()=>Be.apply(),!1);const vn=document.createElement("button");vn.className="panel-button";vn.type="button";vn.textContent="Скопировать GUI";vc.appendChild(vn);const Tn=document.createElement("div");Tn.className="action-stack";document.body.appendChild(Tn);const Ps=document.createElement("button");Ps.className="action-button";Ps.type="button";Ps.textContent="left_monitor_idle";Tn.appendChild(Ps);const Ls=document.createElement("button");Ls.className="action-button";Ls.type="button";Ls.textContent="right_monitor_idle";Tn.appendChild(Ls);const Mo=document.createElement("button");Mo.className="action-button";Mo.type="button";Mo.textContent="Стоп";Tn.appendChild(Mo);const Nn=document.createElement("button");Nn.className="action-button";Nn.type="button";Nn.textContent="Привет";Tn.appendChild(Nn);const Fn=document.createElement("button");Fn.className="action-button";Fn.type="button";Fn.textContent="Phone Ring";Tn.appendChild(Fn);const bo=document.createElement("button");bo.className="action-button";bo.type="button";bo.textContent="Mouse 1";Tn.appendChild(bo);const Eo=document.createElement("button");Eo.className="action-button";Eo.type="button";Eo.textContent="Mouse 2";Tn.appendChild(Eo);const wo=document.createElement("button");wo.className="action-button";wo.type="button";wo.textContent="Mouse 3";Tn.appendChild(wo);const To=document.createElement("button");To.className="action-button";To.type="button";To.textContent="Mouse 4";Tn.appendChild(To);let ut=null,ce=null,as=null,ks=0,fr=0,vr=0,Sr=0,yr=0,Mr=0,ve=!1,Ge=null,wn=null;const Ke=[];let qn=0,Ys=null,Sn=null,Pi=32,yl=32,Gs=32,Vs=0,Ml=600,bl=0,Wr=0,Ws=null,br=0,Zs=null,Nr=0,Li="typing",Fr=0,qs=-24,El=-24,Ks=-24,js=0,wl=700,Tl=0;const ls={pitch:It.headPitch,leftAnkleX:It.leftAnkleX},cs={pitch:0,leftAnkleX:0};let Wn=0,Cl=0,Er=0,$s=0,Al=500,Rl=0,fi=null,uo=0;const Iu={mouse:{x:1.815,z:2.5},character:{leftShoulderX:-78.625,leftShoulderY:-176.25,leftShoulderZ:32.5,leftElbowX:30.875,leftElbowY:-1.5,leftElbowZ:-15,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},Du={mouse:{x:1.9,z:2.5275},character:{leftShoulderX:-80.25,leftShoulderY:-183.25,leftShoulderZ:31,leftElbowX:30.5,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},Uu={mouse:{x:1.985,z:2.5},character:{leftShoulderX:-82.375,leftShoulderY:-178,leftShoulderZ:33.5,leftElbowX:22.625,leftElbowY:1.5,leftElbowZ:-14,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},Nu={mouse:{x:1.9,z:2.4725},character:{leftShoulderX:-81.25,leftShoulderY:-170.75,leftShoulderZ:35,leftElbowX:20.375,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},ef={mouse:[Iu,Du,Uu,Nu]},pS=[["Atmosphere",Ze,Kf],["Board",ic,Jf],["Camera",an,Jl],["Floor",nc.floor,$f.floor],["Rug",mc,pu],["Lighting",cn,jf],["Desk",ac,ru],["Monitor 1",_e,Ql],["Monitor 2",Se,tc],["Floor Pot",cc,lu],["Floor Plant",hc,cu],["Floor Lamp",fc,hu],["Keyboard",uc,fu],["Mouse",yo,ec],["Speaker",dc,uu],["Mug",pc,du],["Phone",Ut,Rn],["Chair",gc,mu],["Shelf",sc,eu],["Shelf Pot",oc,nu],["Shelf Cactus",rc,iu],["Orange Book",Su,su],["Blue Book",yu,ou],["Picture",lc,au],["Papers",xu,Qf],["Pins",vu,tu],["Character",It,Gr]];function $t(i,t,e){return i+(t-i)*e}function mS(i){return typeof i=="number"?Number.isInteger(i)?String(i):i.toFixed(3).replace(/\.?0+$/,""):typeof i=="boolean"?i?"true":"false":String(i)}function gS(i){return i==="codeCursorVisible"}function Fu(i,t,e=""){return i&&typeof i=="object"&&!Array.isArray(i)?[...new Set([...Object.keys(t??{}),...Object.keys(i)])].flatMap(s=>Fu(i[s],t?.[s],e?`${e}.${s}`:s)):gS(e)?[]:i!==t?[`${e}: ${mS(i)}`]:[]}function _S(){const i=pS.map(([t,e,n])=>{const s=Fu(e,n);return s.length===0?"":`[${t}]
${s.join(`
`)}`}).filter(Boolean);return i.length>0?i.join(`

`):"Изменений нет"}async function xS(){const i=_S();try{await navigator.clipboard.writeText(i);const t=vn.textContent;vn.textContent="Скопировано",window.setTimeout(()=>{vn.textContent=t},1200)}catch{const t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);const e=vn.textContent;vn.textContent="Скопировано",window.setTimeout(()=>{vn.textContent=e},1200)}}vn.addEventListener("click",xS);function _s(i){return 1-Math.pow(1-i,3)}function jn(i){return-(Math.cos(Math.PI*i)-1)/2}function vS(i){if(_l)return;so===null&&(so=i);const t=i-so-Au;if(t<0){Je.apply();return}const e=Math.min(1,t/gl),n=_s(e),s=fS();if(Object.keys(s).forEach(o=>{const r=Tu[o],a=s[o];an[o]=typeof r=="number"&&typeof a=="number"?$t(r,a,n):a}),Je.apply(),!Ur){const o=Math.max(0,gl-Ru-Qh),r=Math.min(1,Math.max(0,t-o)/Qh);It.headYaw=$t(Zt.headYaw,lS,_s(r)),Be.apply()}e>=1&&(Object.assign(an,s),Je.apply(),_l=!0)}function Bu(i){if(!vl){xr=i+2500;return}if(!Sl){xr=i+5e3;return}xr=i+7e3+Math.random()*6e3}function zu(i){ms="right_monitor_idle",gs=1/0,po("right_monitor_idle"),Bu(i)}function SS(i){if(!ve||ut||ce){Bu(i+3e3);return}if(!vl){vl=!0,ms="left_monitor_idle",gs=i+5e3,po("left_monitor_idle");return}if(!Sl){Sl=!0,ms="phone_ring",gs=i+4600,Pl();return}if(Math.random()<.36){ms="phone_ring",gs=i+4600,Pl();return}ms="left_monitor_idle",gs=i+5e3,po("left_monitor_idle")}function yS(i){const t=so===null?-1/0:i-so-Au;if((_l||t>=Math.max(0,gl-Ru))&&!Ur){Ur=!0,Xu();return}if(xl){if(i>=gs){zu(i);return}ms==="right_monitor_idle"&&i>=xr&&SS(i)}}function MS(){if(Ze.orbitControlsEnabled)return;li.x+=(Cs.x-li.x)*an.mouseSmooth,li.y+=(Cs.y-li.y)*an.mouseSmooth;const i=li.x*an.mouseXAmount,t=li.y*an.mouseYAmount;Je.setParallax(an.mouseXCamera?i:0,an.mouseYCamera?t:0,an.mouseXTarget?i:0,an.mouseYTarget?t:0),Je.apply()}function nf(){de={startTime:null,duration:850,lightingFrom:{ambient:cn.ambient,key:cn.key,fill:cn.fill,front:cn.front},lightingTarget:oo?cS:Lu,monitorOneFrom:{screenColor:_e.screenColor,screenGlowColor:_e.screenGlowColor},monitorTwoFrom:{screenColor:Se.screenColor,screenGlowColor:Se.screenGlowColor},monitorTarget:oo?hS:Ou}}function bS(){if(!oo){Lu={ambient:cn.ambient,key:cn.key,fill:cn.fill,front:cn.front},Ou={screenColor:_e.screenColor,screenGlowColor:_e.screenGlowColor},oo=!0,nf();return}oo=!1,nf()}function ES(i){if(!de)return;de.startTime===null&&(de.startTime=i);const t=Math.min(1,(i-de.startTime)/de.duration),e=jn(t);de.lightingTarget&&(Object.keys(de.lightingTarget).forEach(n=>{cn[n]=$t(de.lightingFrom[n],de.lightingTarget[n],e)}),ml.apply()),de.monitorTarget&&(_e.screenColor=xs(de.monitorOneFrom.screenColor,de.monitorTarget.screenColor,e),_e.screenGlowColor=xs(de.monitorOneFrom.screenGlowColor,de.monitorTarget.screenGlowColor,e),Se.screenColor=xs(de.monitorTwoFrom.screenColor,de.monitorTarget.screenColor,e),Se.screenGlowColor=xs(de.monitorTwoFrom.screenGlowColor,de.monitorTarget.screenGlowColor,e),Ir.apply(),Dr.apply()),t>=1&&(de.lightingTarget&&(Object.assign(cn,de.lightingTarget),ml.apply()),de.monitorTarget&&(Object.assign(_e,de.monitorTarget),Object.assign(Se,de.monitorTarget),Ir.apply(),Dr.apply()),de=null)}function xs(i,t,e){const n=new jt(i),s=new jt(t);return`#${n.lerp(s,e).getHexString()}`}function Pl(){ce||(ut=null,Ke.length=0,qn=0,wn=null,Ao(),Ro(),Sn=null,ve=!1,Ge=null,Fn.disabled=!0,Nn.disabled=!1,ce={stage:"ring",startTime:null,phoneStart:{x:Ut.x,y:Ut.y,z:Ut.z,rotX:Ut.rotX,rotY:Ut.rotY,rotZ:Ut.rotZ,screenColor:Ut.screenColor,screenGlow:Ut.screenGlow,timeText:Ut.timeText},headYawStart:It.headYaw},Cn())}function wS(i){if(!ce)return;ce.startTime===null&&(ce.startTime=i);const t=i-ce.startTime,e=3e3,n=850,s=ce.phoneStart;if(ce.stage==="ring"){const a=Math.min(1,t/e),l=jn(Math.min(1,t/550)),c=Math.sin(i*.07),h=Math.sin(i*.105+1.4),f=.72+Math.sin(i*.018)*.035;Ut.x=s.x+c*.0018,Ut.y=s.y+h*.0012,Ut.z=s.z+h*.0018,Ut.rotX=s.rotX+h*.12,Ut.rotY=s.rotY+c*.12,Ut.rotZ=s.rotZ+c*.18,Ut.screenColor=xs(s.screenColor,"#dfeaff",f),Ut.screenGlow=s.screenGlow+1.05+Math.sin(i*.021)*.04,Ut.timeText="88888",It.headYaw=$t(ce.headYawStart,61,l),io.apply(),Be.apply(),a>=1&&(ce.stage="return",ce.startTime=i,ce.returnStart={x:Ut.x,y:Ut.y,z:Ut.z,rotX:Ut.rotX,rotY:Ut.rotY,rotZ:Ut.rotZ,screenColor:Ut.screenColor,screenGlow:Ut.screenGlow,timeText:Ut.timeText,headYaw:It.headYaw});return}const o=Math.min(1,t/n),r=jn(o);Ut.x=$t(ce.returnStart.x,s.x,r),Ut.y=$t(ce.returnStart.y,s.y,r),Ut.z=$t(ce.returnStart.z,s.z,r),Ut.rotX=$t(ce.returnStart.rotX,s.rotX,r),Ut.rotY=$t(ce.returnStart.rotY,s.rotY,r),Ut.rotZ=$t(ce.returnStart.rotZ,s.rotZ,r),Ut.screenColor=xs(ce.returnStart.screenColor,s.screenColor,r),Ut.screenGlow=$t(ce.returnStart.screenGlow,s.screenGlow,r),Ut.timeText=o<.5?ce.returnStart.timeText:s.timeText,It.headYaw=$t(ce.returnStart.headYaw,ce.headYawStart,r),io.apply(),Be.apply(),o>=1&&(Object.assign(Ut,s),It.headYaw=ce.headYawStart,io.apply(),Be.apply(),ce=null,Fn.disabled=!1,Cn())}function Hs(i){Object.entries(i).forEach(([t,e])=>{It[t]=e}),Be.apply()}function Ll(i,t,e){Object.entries(t).forEach(([n,s])=>{const o=i[n];if(typeof o!="number"||typeof s!="number"){i[n]=s;return}const r=$t(o,s,e);i[n]=Math.abs(r-s)<.001?s:r})}function sf(i,t,e){Ys===null&&(Ys=e);const n=Math.min(64,Math.max(0,e-Ys)),s=1-Math.pow(.001,n/420);Ys=e,Object.keys(i).length>0&&(Ll(yo,i,s),xc.applyMouse()),Object.keys(t).length>0&&(Ll(It,t,s),Be.apply())}function of(i,t){return Object.entries(t).every(([e,n])=>typeof i[e]!="number"||typeof n!="number"||Math.abs(i[e]-n)<.01)}function Cn(){Ps.style.opacity=ve?"1":"",Ls.style.opacity=ve&&Ge==="right_monitor_idle"?"1":"",Fn.style.opacity=ce?"1":""}function TS(i,t={}){const e=i.mouse??{},n=i.character??{},s=Object.keys(e),o=Object.keys(n);return{stage:"to",stageStartTime:null,mouseTarget:e,characterTarget:n,mouseKeys:s,characterKeys:o,speed:t.speed??1,movement:i,onComplete:t.onComplete??null}}function Co(i,t={}){ut=null,Sn=null,t.allowOverlap||(Ke.length=0),Ke.push(TS(i,t)),Nn.disabled=!1}function CS(){const i=new Set(Ke.map(s=>s.movement)),t=ef.mouse.filter(s=>!i.has(s)),e=t.length>0?t:ef.mouse,n=Math.floor(Math.random()*e.length);return e[n]}function AS(){return["leftShoulderX","leftShoulderY","leftShoulderZ","leftElbowX","leftElbowY","leftElbowZ","leftWristX","leftWristY","leftWristZ"].every(t=>Math.abs(It[t]-Zt[t])<1.5)}function RS(i){if(!(!ve||Ge!=="left_monitor_idle"||ut||Ke.length>=2||i<qn)){if(!AS()){qn=i+120;return}Co(CS(),{allowOverlap:!0,speed:1.8+Math.random()*3,onComplete:()=>{}}),qn=i+Math.random()*2e3}}function ku(){const i=wn?{leftShoulderX:Zt.leftShoulderX,leftShoulderY:Zt.leftShoulderY,leftShoulderZ:Zt.leftShoulderZ,leftElbowX:Zt.leftElbowX,leftElbowY:Zt.leftElbowY,leftElbowZ:Zt.leftElbowZ,leftWristX:Zt.leftWristX,leftWristY:Zt.leftWristY,leftWristZ:Zt.leftWristZ}:Zt;ut=null,ce=null,Ke.length=0,qn=0,Ao(),Ro(),ve=!1,Ge=null,Sn={mouse:fs,character:i},Ut.x=Rn.x,Ut.y=Rn.y,Ut.z=Rn.z,Ut.rotX=Rn.rotX,Ut.rotY=Rn.rotY,Ut.rotZ=Rn.rotZ,Ut.screenColor=Rn.screenColor,Ut.screenGlow=Rn.screenGlow,io.apply(),Nn.disabled=!1,Fn.disabled=!1,Cn()}function Hu(i){ut=null,Ke.length=0,qn=0,Ao(),Ro(),Sn=null,Ys=null,ve=!0,Ge=i,Cn()}function PS(i,t){i.stageStartTime===null&&(i.stageStartTime=t);const e=t-i.stageStartTime,n=i.speed;if(i.stage==="to"){const o=Math.min(1,e/(1100/n));return i.weight=jn(o),o>=1&&(i.stage="hold",i.stageStartTime=t),!1}if(i.stage==="hold")return i.weight=1,e>=320/n&&(i.stage="from",i.stageStartTime=t),!1;const s=Math.min(1,e/(1200/n));return i.weight=1-jn(s),s>=1}function rf(i,t,e,n,s){n.forEach(o=>{i[o]=(i[o]??t[o])+(e[o]-t[o])*s})}function Ao(){Pi=It.headYaw,yl=Pi,Gs=Pi,Vs=0,Ml=600,bl=0}function LS(i){if(i<bl)return Gs;Vs===0&&(yl=Pi,Gs=11+Math.random()*29,Vs=i,Ml=420+Math.random()*680);const t=Math.min(1,(i-Vs)/Ml);return Pi=$t(yl,Gs,jn(t)),t>=1&&(Pi=Gs,Vs=0,bl=i+180+Math.random()*420),Pi}function Ro(){performance.now(),Wr=0,Ws=null,br=1/0,Zs=null,Nr=1/0,Li="typing",Fr=1/0,qs=-24,El=-24,Ks=-24,js=0,wl=700,Tl=0,Wn=Se.uiLinesScroll??0,Cl=Wn,Er=Wn,$s=0,Al=500,Rl=0,fi=null,uo=0}function OS(i){const t=Se.uiActiveIconIndex??0,e=[0,1,2,3].filter(n=>n!==t);fi=e[Math.floor(Math.random()*e.length)],uo=i,Se.uiDotIconIndex=fi,Se.uiDotVisible=!0,Se.uiLinesWidthScale=.72+Math.random()*.66,Wr=1/0}function IS(i){fi!==null&&(Se.uiDotIconIndex=fi,Se.uiDotVisible=!0,!(i-uo<1e3)&&(Se.uiActiveIconIndex=fi,fi=null,uo=0,Wr=i+1300+Math.random()*1800))}function DS(i){if(i<Rl)return Wn;$s===0&&(Cl=Wn,Er=(Wn+.35+Math.random()*.75)%7,$s=i,Al=360+Math.random()*720);const t=Math.min(1,(i-$s)/Al);return Wn=$t(Cl,Er,jn(t)),t>=1&&(Wn=Er,$s=0,Rl=i+350+Math.random()*1100),Wn}function US(i){Ws===null&&(Ws=i);const t=Math.min(64,Math.max(0,i-Ws)),e=1-Math.pow(.001,t/520);Ws=i,ve&&Ge==="left_monitor_idle"&&i>=Wr&&OS(i),ve&&Ge==="left_monitor_idle"&&(Se.uiLinesScroll=DS(i),IS(i)),Ll(Se,{uiDotX:on.uiDotX,uiDotY:on.uiDotY,uiPanelX:on.uiPanelX,uiIconStartY:on.uiIconStartY,uiLinesX:on.uiLinesX,uiLinesY:on.uiLinesY,uiTopIconWidth:on.uiTopIconWidth,uiTopIconY:on.uiTopIconY},e),(!ve||Ge!=="left_monitor_idle")&&(Se.uiActiveIconIndex=on.uiActiveIconIndex,Se.uiDotIconIndex=on.uiDotIconIndex,Se.uiDotVisible=on.uiDotVisible,Se.uiLinesWidthScale=on.uiLinesWidthScale,Se.uiLinesScroll=on.uiLinesScroll,fi=null,uo=0),Dr.apply()}function NS(i){_e.codeScroll=(Math.floor(_e.codeScroll)+1)%14,_e.codeVariant=Math.floor(Math.random()*8),_e.codeWidthScale=.92+Math.random()*.18,_e.codeActiveLine=13,_e.codeTypingProgress=.18,Nr=i+700+Math.random()*900}function FS(i){i<Fr||(Li=Li==="typing"?"reading":"typing",Fr=i+(Li==="typing"?2200+Math.random()*2600:3200+Math.random()*2800))}function BS(i){if(i<Tl)return Ks;js===0&&(El=qs,Ks=-34+Math.random()*20,js=i,wl=650+Math.random()*850);const t=Math.min(1,(i-js)/wl);return qs=$t(El,Ks,jn(t)),t>=1&&(qs=Ks,js=0,Tl=i+250+Math.random()*550),qs}function zS(i){Zs===null&&(Zs=i,ve&&Ge==="right_monitor_idle"&&(br=i+1600+Math.random()*1800,Nr=i+700+Math.random()*900,Fr=i+2200+Math.random()*2600));const t=Math.min(64,Math.max(0,i-Zs));Zs=i,ve&&Ge==="right_monitor_idle"&&(FS(i),Li==="typing"&&i>=br&&(_e.codeVariant=Math.floor(Math.random()*8),_e.codeWidthScale=.92+Math.random()*.18,br=i+1600+Math.random()*1800),Li==="typing"?(_e.codeTypingProgress=Math.min(1,_e.codeTypingProgress+t/650),i>=Nr&&_e.codeTypingProgress>=.95&&NS(i),_e.codeCursorVisible=Math.floor(i/260)%2===0):_e.codeCursorVisible=Math.floor(i/420)%2===0),_e.codeCursorVisible=Math.floor(i/420)%2===0,Ir.apply()}function kS(i){if(ut)return;if(!ve&&Ke.length===0&&Sn){if(sf(Sn.mouse,Sn.character,i),of(yo,Sn.mouse)&&of(It,Sn.character)&&(Sn=null,wn)){const n=wn;wn=null,Hu(n)}return}for(let n=Ke.length-1;n>=0;n-=1){const s=Ke[n];if(PS(s,i)){const o=s.onComplete;Ke.splice(n,1),o&&o()}}const t={},e={};if(ve&&Ge==="left_monitor_idle")t.x=fs.x,t.z=fs.z,e.headYaw=LS(i),e.torsoYaw=rn.torsoYaw,e.headPitch=rn.headPitch,e.leftShoulderX=rn.leftShoulderX,e.leftShoulderY=rn.leftShoulderY,e.leftShoulderZ=rn.leftShoulderZ,e.leftElbowX=rn.leftElbowX,e.leftElbowY=rn.leftElbowY,e.leftElbowZ=rn.leftElbowZ,e.leftWristX=rn.leftWristX,e.leftWristY=rn.leftWristY,e.leftWristZ=rn.leftWristZ;else if(ve&&Ge==="right_monitor_idle"){const n=Li==="typing",s=Math.sin(i*.018),o=Math.sin(i*.023+Math.PI);t.x=fs.x,t.z=fs.z,e.torsoYaw=29,e.headYaw=n?-4:BS(i),e.headPitch=n?12:-7,e.leftShoulderX=-72+(n?s*2:0),e.leftShoulderY=-154,e.leftShoulderZ=24,e.leftElbowX=42+(n?o*3:0),e.leftElbowY=-7,e.leftElbowZ=-10,e.leftWristX=-9+(n?s*5:0),e.leftWristY=-28,e.leftWristZ=-9,e.rightShoulderX=-76+(n?o*2:0),e.rightShoulderY=-202,e.rightShoulderZ=-8,e.rightElbowX=39+(n?s*3:0),e.rightElbowY=8,e.rightElbowZ=9,e.rightWristX=-8+(n?o*5:0),e.rightWristY=24,e.rightWristZ=7}Ge==="left_monitor_idle"&&Ke.forEach(n=>{rf(t,fs,n.mouseTarget,n.mouseKeys,n.weight??0),rf(e,rn,n.characterTarget,n.characterKeys,n.weight??0)}),sf(t,e,i)}function Xu(){if(ut)return;ce=null,Fn.disabled=!1,Ke.length=0,qn=0,wn=null,Ao(),Ro(),Sn=null,ve=!1,Ge=null,Cn(),Nn.disabled=!0,ut={stage:"turn",startTime:null,startPose:{torsoYaw:It.torsoYaw,headYaw:It.headYaw,leftShoulderZ:It.leftShoulderZ,leftElbowX:It.leftElbowX,rightShoulderX:It.rightShoulderX,rightShoulderZ:It.rightShoulderZ,rightElbowX:It.rightElbowX,leftHipY:It.leftHipY,leftHipZ:It.leftHipZ,rightHipZ:It.rightHipZ},phaseOneTarget:{torsoYaw:-60,headYaw:-65,leftShoulderZ:149,leftElbowX:1.5,rightShoulderX:-126,rightShoulderZ:-20,rightElbowX:24,leftHipY:7,leftHipZ:-56.5,rightHipZ:-28},waveValues:[1.5,22,1.5,22,1.5,22],waveIndex:0,waveStartValue:1.5}}function HS(i){if(!ut)return;ut.startTime===null&&(ut.startTime=i);const t=i-ut.startTime;if(ut.stage==="turn"){const o=Math.min(1,t/900),r=Math.min(1,Math.max(0,t-90)/900),a=_s(o),l=_s(r);Hs({rightHipZ:$t(ut.startPose.rightHipZ,ut.phaseOneTarget.rightHipZ,a),torsoYaw:$t(ut.startPose.torsoYaw,ut.phaseOneTarget.torsoYaw,l),headYaw:$t(ut.startPose.headYaw,ut.phaseOneTarget.headYaw,l),leftShoulderZ:$t(ut.startPose.leftShoulderZ,ut.phaseOneTarget.leftShoulderZ,l),leftElbowX:$t(ut.startPose.leftElbowX,ut.phaseOneTarget.leftElbowX,l),rightShoulderX:$t(ut.startPose.rightShoulderX,ut.phaseOneTarget.rightShoulderX,l),rightShoulderZ:$t(ut.startPose.rightShoulderZ,ut.phaseOneTarget.rightShoulderZ,l),rightElbowX:$t(ut.startPose.rightElbowX,ut.phaseOneTarget.rightElbowX,l),leftHipY:$t(ut.startPose.leftHipY,ut.phaseOneTarget.leftHipY,l),leftHipZ:$t(ut.startPose.leftHipZ,ut.phaseOneTarget.leftHipZ,l)}),o>=1&&r>=1&&(ut.stage="wave",ut.startTime=i,ut.waveIndex=0,ut.waveStartValue=1.5);return}if(ut.stage==="wave"){const n=Math.min(1,t/200),s=jn(n),o=ut.waveValues[ut.waveIndex];Hs({torsoYaw:ut.phaseOneTarget.torsoYaw,headYaw:ut.phaseOneTarget.headYaw,leftShoulderZ:ut.phaseOneTarget.leftShoulderZ,leftElbowX:$t(ut.waveStartValue,o,s),rightShoulderX:ut.phaseOneTarget.rightShoulderX,rightShoulderZ:ut.phaseOneTarget.rightShoulderZ,rightElbowX:ut.phaseOneTarget.rightElbowX,leftHipY:ut.phaseOneTarget.leftHipY,leftHipZ:ut.phaseOneTarget.leftHipZ,rightHipZ:ut.phaseOneTarget.rightHipZ}),n>=1&&(ut.waveStartValue=o,ut.waveIndex+=1,ut.startTime=i,ut.waveIndex>=ut.waveValues.length&&(ut.stage="right-leg-out",ut.startTime=i));return}if(ut.stage==="right-leg-out"){const n=Math.min(1,t/730),s=_s(n);Hs({torsoYaw:$t(ut.phaseOneTarget.torsoYaw,Zt.torsoYaw,s),headYaw:$t(ut.phaseOneTarget.headYaw,Zt.headYaw,s),leftShoulderZ:$t(ut.phaseOneTarget.leftShoulderZ,Zt.leftShoulderZ,s),leftElbowX:$t(ut.waveStartValue,Zt.leftElbowX,s),rightShoulderX:$t(ut.phaseOneTarget.rightShoulderX,Zt.rightShoulderX,s),rightShoulderZ:$t(ut.phaseOneTarget.rightShoulderZ,Zt.rightShoulderZ,s),rightElbowX:$t(ut.phaseOneTarget.rightElbowX,Zt.rightElbowX,s),leftHipY:ut.phaseOneTarget.leftHipY,leftHipZ:ut.phaseOneTarget.leftHipZ,rightHipZ:$t(ut.phaseOneTarget.rightHipZ,Zt.rightHipZ,s)}),n>=1&&(ut.stage="left-leg-out",ut.startTime=i);return}if(ut.stage==="left-leg-out"){const n=Math.min(1,t/540),s=_s(n);Hs({torsoYaw:Zt.torsoYaw,headYaw:Zt.headYaw,leftShoulderZ:Zt.leftShoulderZ,leftElbowX:Zt.leftElbowX,rightShoulderX:Zt.rightShoulderX,rightShoulderZ:Zt.rightShoulderZ,rightElbowX:Zt.rightElbowX,leftHipY:$t(ut.phaseOneTarget.leftHipY,Zt.leftHipY,s),leftHipZ:$t(ut.phaseOneTarget.leftHipZ,Zt.leftHipZ,s),rightHipZ:Zt.rightHipZ}),n>=1&&(Hs({torsoYaw:Zt.torsoYaw,headYaw:Zt.headYaw,leftShoulderZ:Zt.leftShoulderZ,leftElbowX:Zt.leftElbowX,rightShoulderX:Zt.rightShoulderX,rightShoulderZ:Zt.rightShoulderZ,rightElbowX:Zt.rightElbowX,leftHipY:Zt.leftHipY,leftHipZ:Zt.leftHipZ,rightHipZ:Zt.rightHipZ}),ut=null,Nn.disabled=!1,Ur&&!xl&&(xl=!0,zu(i)),ve&&(qn=0))}}function po(i){if(ve){if(Ge===i){wn=null,ku();return}Ke.length=0,qn=0,Ao(),Ro(),Ge=i,Cn();return}Hu(i)}function XS(){po("left_monitor_idle")}Nn.addEventListener("click",Xu);Fn.addEventListener("click",Pl);bo.addEventListener("click",()=>{ve=!1,wn=null,Cn(),Co(Iu)});Eo.addEventListener("click",()=>{ve=!1,wn=null,Cn(),Co(Du)});wo.addEventListener("click",()=>{ve=!1,wn=null,Cn(),Co(Uu)});To.addEventListener("click",()=>{ve=!1,wn=null,Cn(),Co(Nu)});Ps.addEventListener("click",XS);Ls.addEventListener("click",()=>po("right_monitor_idle"));Mo.addEventListener("click",ku);Cn();window.addEventListener("pointermove",i=>{Ze.orbitControlsEnabled||(Cs.x=-(i.clientX/window.innerWidth-.5)*2,Cs.y=-(i.clientY/window.innerHeight-.5)*2)});dn.domElement.addEventListener("pointerdown",i=>{const t=dn.domElement.getBoundingClientRect();Pa.x=(i.clientX-t.left)/t.width*2-1,Pa.y=-((i.clientY-t.top)/t.height)*2+1,tf.setFromCamera(Pa,Je.camera),tf.intersectObjects(bu.group.children,!0).length>0&&bS()});function YS(i){const t=i*Ze.musicPulseSpeed,e=It.headPitch-cs.pitch,n=It.leftAnkleX-cs.leftAnkleX;ls.pitch+=(e-ls.pitch)*.08,ls.leftAnkleX+=(n-ls.leftAnkleX)*.08,cs.pitch=Math.sin(t*.0038)*.55+Math.sin(t*.009)*.18,cs.leftAnkleX=Math.sin(t*.0042+.7)*.9,It.headPitch=ls.pitch+cs.pitch,It.leftAnkleX=ls.leftAnkleX+cs.leftAnkleX,Be.apply()}function La(i,t,e){const n=Math.min(t,e),s=Math.max(t,e);return i+n+Math.random()*(s-n)}function GS(i,t=!0){let e=0;if(It.blinkEnabled){if(ks===0&&(ks=La(i,It.blinkIntervalMin,It.blinkIntervalMax)),as===null&&i>=ks&&(as=i),as!==null){const s=Math.min(1,(i-as)/Math.max(1,It.blinkDuration));e=Math.sin(s*Math.PI),s>=1&&(as=null,ks=La(i,It.blinkIntervalMin,It.blinkIntervalMax))}}else as=null,ks=0;t&&It.saccadeEnabled?(fr===0||i>=fr)&&(yr=(Math.random()*2-1)*It.saccadeAmount,Mr=(Math.random()*2-1)*It.saccadeAmount*.65,fr=La(i,It.saccadeIntervalMin,It.saccadeIntervalMax)):(yr=0,Mr=0,fr=0);const n=un.clamp(It.saccadeSmooth,.01,1);vr+=(yr-vr)*n,Sr+=(Mr-Sr)*n,Be.setFaceMotion(e,vr,Sr)}function VS(i){const t=(us??i)-Pu;if(!Ze.orbitControlsEnabled){const e=t*Ze.musicPulseSpeed;Eu.setConePulse(1+Math.sin(e*.0048)*.045+Math.sin(e*.013)*.018),wu.updateSteam(t),kS(t),ve&&!ut&&RS(t),US(t),zS(t),HS(t),YS(t),wS(t),ES(t),vS(t),yS(t),MS()}GS(i,!Ze.orbitControlsEnabled),Je.controls.update(),dn.render(we,Je.camera)}dn.setAnimationLoop(VS);window.addEventListener("resize",()=>{Je.resize(window.innerWidth,window.innerHeight),dn.setSize(window.innerWidth,window.innerHeight)});
