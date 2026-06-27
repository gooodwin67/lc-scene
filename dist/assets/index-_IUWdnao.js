(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Sl="166",zi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pf=0,dc=1,Lf=2,yl=1,Df=2,Xn=3,ui=0,qe=1,vn=2,ci=0,ds=1,pc=2,mc=3,gc=4,If=5,bi=100,Of=101,Uf=102,Nf=103,Ff=104,Bf=200,zf=201,Hf=202,kf=203,ya=204,Ma=205,Xf=206,Gf=207,Vf=208,Yf=209,Wf=210,Zf=211,qf=212,Kf=213,jf=214,$f=0,Jf=1,Qf=2,ur=3,td=4,ed=5,nd=6,id=7,Wh=0,sd=1,od=2,hi=0,rd=1,ad=2,ld=3,cd=4,hd=5,ud=6,fd=7,Zh=300,gs=301,_s=302,Ea=303,ba=304,br=306,wa=1e3,Ti=1001,Ta=1002,Ze=1003,dd=1004,bo=1005,Sn=1006,Br=1007,Ai=1008,Zn=1009,qh=1010,Kh=1011,to=1012,Ml=1013,Pi=1014,Pn=1015,lo=1016,El=1017,bl=1018,xs=1020,jh=35902,$h=1021,Jh=1022,yn=1023,Qh=1024,tu=1025,ps=1026,vs=1027,wl=1028,Tl=1029,eu=1030,Al=1031,Cl=1033,ir=33776,sr=33777,or=33778,rr=33779,Aa=35840,Ca=35841,Ra=35842,Pa=35843,La=36196,Da=37492,Ia=37496,Oa=37808,Ua=37809,Na=37810,Fa=37811,Ba=37812,za=37813,Ha=37814,ka=37815,Xa=37816,Ga=37817,Va=37818,Ya=37819,Wa=37820,Za=37821,ar=36492,qa=36494,Ka=36495,nu=36283,ja=36284,$a=36285,Ja=36286,pd=3200,md=3201,iu=0,gd=1,ri="",gn="srgb",pi="srgb-linear",Rl="display-p3",wr="display-p3-linear",fr="linear",pe="srgb",dr="rec709",pr="p3",ki=7680,_c=519,_d=512,xd=513,vd=514,su=515,Sd=516,yd=517,Md=518,Ed=519,xc=35044,vc="300 es",Vn=2e3,mr=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sc=1234567;const Ys=Math.PI/180,eo=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Le(i,t,e){return Math.max(t,Math.min(e,i))}function Pl(i,t){return(i%t+t)%t}function bd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function Td(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function Ad(i,t=1){return t-Math.abs(Pl(i,t*2)-t)}function Cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ld(i,t){return i+Math.random()*(t-i)}function Dd(i){return i*(.5-Math.random())}function Id(i){i!==void 0&&(Sc=i);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*Ys}function Ud(i){return i*eo}function Nd(i){return(i&i-1)===0&&i!==0}function Fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zd(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),f=r((t-n)/2),d=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ai={DEG2RAD:Ys,RAD2DEG:eo,generateUUID:Ni,clamp:Le,euclideanModulo:Pl,mapLinear:bd,inverseLerp:wd,lerp:Ws,damp:Td,pingpong:Ad,smoothstep:Cd,smootherstep:Rd,randInt:Pd,randFloat:Ld,randFloatSpread:Dd,seededRandom:Id,degToRad:Od,radToDeg:Ud,isPowerOfTwo:Nd,ceilPowerOfTwo:Fd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:zd,normalize:Ge,denormalize:ls};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,o,r,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],S=s[4],E=s[7],O=s[2],R=s[5],C=s[8];return o[0]=r*x+a*T+l*O,o[3]=r*m+a*S+l*R,o[6]=r*p+a*E+l*C,o[1]=c*x+h*T+u*O,o[4]=c*m+h*S+u*R,o[7]=c*p+h*E+u*C,o[2]=f*x+d*T+g*O,o[5]=f*m+d*S+g*R,o[8]=f*p+d*E+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,f=a*l-h*o,d=c*o-r*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Wt;function ou(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hd(){const i=gr("canvas");return i.style.display="block",i}const yc={};function ru(i){i in yc||(yc[i]=!0,console.warn(i))}function kd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Mc=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ec=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[pi]:{transfer:fr,primaries:dr,toReference:i=>i,fromReference:i=>i},[gn]:{transfer:pe,primaries:dr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wr]:{transfer:fr,primaries:pr,toReference:i=>i.applyMatrix3(Ec),fromReference:i=>i.applyMatrix3(Mc)},[Rl]:{transfer:pe,primaries:pr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ec),fromReference:i=>i.applyMatrix3(Mc).convertLinearToSRGB()}},Xd=new Set([pi,wr]),he={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=wo[t].toReference,s=wo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return wo[i].primaries},getTransfer:function(i){return i===ri?fr:wo[i].transfer}};function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class Gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=gr("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ms(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vd=0;class au{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(kr(s[r].image)):o.push(kr(s[r]))}else o=kr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class ke extends Ui{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Ti,s=Ti,o=Sn,r=Ai,a=yn,l=Zn,c=ke.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ni(),this.name="",this.source=new au(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Zh;ke.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,E=(d+1)/2,O=(p+1)/2,R=(h+f)/4,C=(u+x)/4,D=(g+m)/4;return S>E&&S>O?S<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(S),s=R/n,o=C/n):E>O?E<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),n=R/s,o=D/s):O<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),n=C/o,s=D/o),this.set(n,s,o,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wd extends Ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new au(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Wd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lu extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zd extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*x,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const O=Math.sqrt(S),R=Math.atan2(O,p*T);m=Math.sin(m*R)/O,a=Math.sin(a*R)/O}const E=a*T;if(l=l*m+f*E,c=c*m+d*E,h=h*m+g*E,u=u*m+x*E,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),f=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new P,bc=new Di;class Fi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,dn):dn.fromBufferAttribute(o,r),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),To.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(t.matrixWorld),this.union(To)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),Ao.subVectors(this.max,As),Gi.subVectors(t.a,As),Vi.subVectors(t.b,As),Yi.subVectors(t.c,As),Jn.subVectors(Vi,Gi),Qn.subVectors(Yi,Vi),_i.subVectors(Gi,Yi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!Gr(e,Gi,Vi,Yi,Ao)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,Gi,Vi,Yi,Ao))?!1:(Co.crossVectors(Jn,Qn),e=[Co.x,Co.y,Co.z],Gr(e,Gi,Vi,Yi,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,To=new Fi,Gi=new P,Vi=new P,Yi=new P,Jn=new P,Qn=new P,_i=new P,As=new P,Ao=new P,Co=new P,xi=new P;function Gr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){xi.fromArray(i,o);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const qd=new Fi,Cs=new P,Vr=new P;class co{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Vr)),this.expandByPoint(Cs.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new P,Yr=new P,Ro=new P,ti=new P,Wr=new P,Po=new P,Zr=new P;class Ll{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yr.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Yr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ro),a=ti.dot(this.direction),l=-ti.dot(Ro),c=ti.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*l-a,f=r*a-l,g=o*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+r*f+2*a)+f*(r*u+f+2*l)+c}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yr).addScaledVector(Ro,f),d}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,o){Wr.subVectors(e,t),Po.subVectors(n,t),Zr.crossVectors(Wr,Po);let r=this.direction.dot(Zr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ti.subVectors(this.origin,t);const l=a*this.direction.dot(Po.crossVectors(ti,Po));if(l<0)return null;const c=a*this.direction.dot(Wr.cross(ti));if(c<0||l+c>r)return null;const h=-a*ti.dot(Zr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,o,r,a,l,c,h,u,f,d,g,x,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,o,r,a,l,c,h,u,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),o=1/Wi.setFromMatrixColumn(t,1).length(),r=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=x-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,d=r*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*l,d=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=r*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,jd)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ei.crossVectors(n,Qe),ei.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ei.crossVectors(n,Qe)),ei.normalize(),Lo.crossVectors(Qe,ei),s[0]=ei.x,s[4]=Lo.x,s[8]=Qe.x,s[1]=ei.y,s[5]=Lo.y,s[9]=Qe.y,s[2]=ei.z,s[6]=Lo.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],S=n[7],E=n[11],O=n[15],R=s[0],C=s[4],D=s[8],b=s[12],y=s[1],L=s[5],G=s[9],B=s[13],W=s[2],q=s[6],V=s[10],$=s[14],Z=s[3],mt=s[7],yt=s[11],xt=s[15];return o[0]=r*R+a*y+l*W+c*Z,o[4]=r*C+a*L+l*q+c*mt,o[8]=r*D+a*G+l*V+c*yt,o[12]=r*b+a*B+l*$+c*xt,o[1]=h*R+u*y+f*W+d*Z,o[5]=h*C+u*L+f*q+d*mt,o[9]=h*D+u*G+f*V+d*yt,o[13]=h*b+u*B+f*$+d*xt,o[2]=g*R+x*y+m*W+p*Z,o[6]=g*C+x*L+m*q+p*mt,o[10]=g*D+x*G+m*V+p*yt,o[14]=g*b+x*B+m*$+p*xt,o[3]=T*R+S*y+E*W+O*Z,o[7]=T*C+S*L+E*q+O*mt,o[11]=T*D+S*G+E*V+O*yt,o[15]=T*b+S*B+E*$+O*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+o*r*f-s*r*d+s*c*h-o*l*h)+m*(+e*c*u-e*a*d-o*r*u+n*r*d+o*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*r*u-n*r*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],T=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,S=g*f*c-h*m*c-g*l*d+r*m*d+h*l*p-r*f*p,E=h*x*c-g*u*c+g*a*d-r*x*d-h*a*p+r*u*p,O=g*u*l-h*x*l-g*a*f+r*x*f+h*a*m-r*u*m,R=e*T+n*S+s*E+o*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=T*C,t[1]=(x*f*o-u*m*o-x*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*o-x*l*o+x*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*o-a*f*o-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=S*C,t[5]=(h*m*o-g*f*o+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*C,t[7]=(r*f*o-h*l*o+h*s*c-e*f*c-r*s*d+e*l*d)*C,t[8]=E*C,t[9]=(g*u*o-h*x*o-g*n*d+e*x*d+h*n*p-e*u*p)*C,t[10]=(r*x*o-g*a*o+g*n*c-e*x*c-r*n*p+e*a*p)*C,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*d-e*a*d)*C,t[12]=O*C,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-r*x*s-g*n*l+e*x*l+r*n*m-e*a*m)*C,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,f=o*c,d=o*h,g=o*u,x=r*h,m=r*u,p=a*u,T=l*c,S=l*h,E=l*u,O=n.x,R=n.y,C=n.z;return s[0]=(1-(x+p))*O,s[1]=(d+E)*O,s[2]=(g-S)*O,s[3]=0,s[4]=(d-E)*R,s[5]=(1-(f+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+S)*C,s[9]=(m-T)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Wi.set(s[0],s[1],s[2]).length();const r=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/o,h=1/r,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Vn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Vn)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===mr)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Vn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),f=(e+t)*c,d=(n+s)*h;let g,x;if(a===Vn)g=(r+o)*u,x=-2*u;else if(a===mr)g=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new P,pn=new ue,Kd=new P(0,0,0),jd=new P(1,1,1),ei=new P,Lo=new P,Qe=new P,wc=new ue,Tc=new Di;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $d=0;const Ac=new P,Zi=new Di,zn=new ue,Do=new P,Rs=new P,Jd=new P,Qd=new Di,Cc=new P(1,0,0),Rc=new P(0,1,0),Pc=new P(0,0,1),Lc={type:"added"},tp={type:"removed"},qi={type:"childadded",child:null},qr={type:"childremoved",child:null};class Ne extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new P,e=new Ln,n=new Di,s=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Wt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Rs,Do,this.up):zn.lookAt(Do,Rs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(zn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),qr.child=t,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new P(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new P,Hn=new P,Kr=new P,kn=new P,Ki=new P,ji=new P,Dc=new P,jr=new P,$r=new P,Jr=new P;class Rn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){mn.subVectors(s,e),Hn.subVectors(n,e),Kr.subVectors(t,e);const r=mn.dot(mn),a=mn.dot(Hn),l=mn.dot(Kr),c=Hn.dot(Hn),h=Hn.dot(Kr),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(r*h-a*l)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,kn.x),l.addScaledVector(r,kn.y),l.addScaledVector(a,kn.z),l)}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Hn.subVectors(t,e),mn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),mn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Ki.subVectors(s,n),ji.subVectors(o,n),jr.subVectors(t,n);const l=Ki.dot(jr),c=ji.dot(jr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,s);const h=Ki.dot($r),u=ji.dot($r);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Ki,r);Jr.subVectors(t,o);const d=Ki.dot(Jr),g=ji.dot(Jr);if(g>=0&&d<=g)return e.copy(o);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ji,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Dc.subVectors(o,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Dc,a);const p=1/(m+x+f);return r=x*p,a=f*p,e.copy(n).addScaledVector(Ki,r).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Pl(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Qr(r,o,t+1/3),this.g=Qr(r,o,t),this.b=Qr(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return he.fromWorkingColorSpace(He.copy(this),t),Math.round(Le(He.r*255,0,255))*65536+Math.round(Le(He.g*255,0,255))*256+Math.round(Le(He.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,o=He.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=gn){he.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(Io);const n=Ws(ni.h,Io.h,e),s=Ws(ni.s,Io.s,e),o=Ws(ni.l,Io.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Jt;Jt.NAMES=cu;let ep=0;class ho extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=ds,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Ma,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class fi extends ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new P,Oo=new et;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ru("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oo.fromBufferAttribute(this,e),Oo.applyMatrix3(t),this.setXY(e,Oo.x,Oo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),o=Ge(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),t}}class hu extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uu extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let np=0;const cn=new ue,ta=new Ne,$i=new P,tn=new Fi,Ps=new Fi,Ue=new P;class je extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?uu:hu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(tn.min,Ps.min),tn.expandByPoint(Ue),Ue.addVectors(tn.max,Ps.max),tn.expandByPoint(Ue)):(tn.expandByPoint(Ps.min),tn.expandByPoint(Ps.max))}tn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ue.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Ue.add($i)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,f=new et,d=new et,g=new et,x=new P,m=new P;function p(D,b,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(o,D),d.fromBufferAttribute(o,b),g.fromBufferAttribute(o,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[D].add(x),a[b].add(x),a[y].add(x),l[D].add(m),l[b].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,b=T.length;D<b;++D){const y=T[D],L=y.start,G=y.count;for(let B=L,W=L+G;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new P,E=new P,O=new P,R=new P;function C(D){O.fromBufferAttribute(s,D),R.copy(O);const b=a[D];S.copy(b),S.sub(O.multiplyScalar(O.dot(b))).normalize(),E.crossVectors(R,b);const L=E.dot(l[D])<0?-1:1;r.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,b=T.length;D<b;++D){const y=T[D],L=y.start,G=y.count;for(let B=L,W=L+G;B<W;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,o=new P,r=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Mn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new ue,vi=new Ll,Uo=new co,Oc=new P,Ji=new P,Qi=new P,ts=new P,ea=new P,No=new P,Fo=new et,Bo=new et,zo=new et,Uc=new P,Nc=new P,Fc=new P,Ho=new P,ko=new P;class at extends Ne{constructor(t=new je,e=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){No.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(ea.fromBufferAttribute(u,t),r?No.addScaledVector(ea,h):No.addScaledVector(ea.sub(e),h))}e.add(No)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(o),vi.copy(t.ray).recast(t.near),!(Uo.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Uo,Oc)===null||vi.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Ic.copy(o).invert(),vi.copy(t.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=r[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,O=S;E<O;E+=3){const R=a.getX(E),C=a.getX(E+1),D=a.getX(E+2);s=Xo(this,p,t,n,c,h,u,R,C,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),E=a.getX(m+2);s=Xo(this,r,t,n,c,h,u,T,S,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=r[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=T,O=S;E<O;E+=3){const R=E,C=E+1,D=E+2;s=Xo(this,p,t,n,c,h,u,R,C,D),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const T=m,S=m+1,E=m+2;s=Xo(this,r,t,n,c,h,u,T,S,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ip(i,t,e,n,s,o,r,a){let l;if(t.side===qe?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ui,a),l===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ko);return c<e.near||c>e.far?null:{distance:c,point:ko.clone(),object:i}}function Xo(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Ji),i.getVertexPosition(l,Qi),i.getVertexPosition(c,ts);const h=ip(i,t,e,n,Ji,Qi,ts,Ho);if(h){s&&(Fo.fromBufferAttribute(s,a),Bo.fromBufferAttribute(s,l),zo.fromBufferAttribute(s,c),h.uv=Rn.getInterpolation(Ho,Ji,Qi,ts,Fo,Bo,zo,new et)),o&&(Fo.fromBufferAttribute(o,a),Bo.fromBufferAttribute(o,l),zo.fromBufferAttribute(o,c),h.uv1=Rn.getInterpolation(Ho,Ji,Qi,ts,Fo,Bo,zo,new et)),r&&(Uc.fromBufferAttribute(r,a),Nc.fromBufferAttribute(r,l),Fc.fromBufferAttribute(r,c),h.normal=Rn.getInterpolation(Ho,Ji,Qi,ts,Uc,Nc,Fc,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};Rn.getNormal(Ji,Qi,ts,u.normal),h.face=u}return h}class ie extends je{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function g(x,m,p,T,S,E,O,R,C,D,b){const y=E/C,L=O/D,G=E/2,B=O/2,W=R/2,q=C+1,V=D+1;let $=0,Z=0;const mt=new P;for(let yt=0;yt<V;yt++){const xt=yt*L-B;for(let Gt=0;Gt<q;Gt++){const te=Gt*y-G;mt[x]=te*T,mt[m]=xt*S,mt[p]=W,c.push(mt.x,mt.y,mt.z),mt[x]=0,mt[m]=0,mt[p]=R>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Gt/C),u.push(1-yt/D),$+=1}}for(let yt=0;yt<D;yt++)for(let xt=0;xt<C;xt++){const Gt=f+xt+q*yt,te=f+xt+q*(yt+1),K=f+(xt+1)+q*(yt+1),st=f+(xt+1)+q*yt;l.push(Gt,te,st),l.push(te,K,st),Z+=6}a.addGroup(d,Z,b),d+=Z,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=Ss(i[e]);for(const s in n)t[s]=n[s]}return t}function sp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const op={clone:Ss,merge:Ve};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class du extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new P,Bc=new et,zc=new et;class rn extends du{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Bc,zc),e.subVectors(zc,Bc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class lp extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(es,ns,t,e);s.layers=this.layers,this.add(s);const o=new rn(es,ns,t,e);o.layers=this.layers,this.add(o);const r=new rn(es,ns,t,e);r.layers=this.layers,this.add(r);const a=new rn(es,ns,t,e);a.layers=this.layers,this.add(a);const l=new rn(es,ns,t,e);l.layers=this.layers,this.add(l);const c=new rn(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pu extends ke{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cp extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),o=new di({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ci});o.uniforms.tEquirect.value=e;const r=new at(s,o),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Sn),new lp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const na=new P,hp=new P,up=new Wt;class oi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=na.subVectors(n,e).cross(hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||up.getNormalMatrix(t),s=this.coplanarPoint(na).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new co,Go=new P;class Il{constructor(t=new oi,e=new oi,n=new oi,s=new oi,o=new oi,r=new oi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],T=s[13],S=s[14],E=s[15];if(n[0].setComponents(l-o,f-c,m-d,E-p).normalize(),n[1].setComponents(l+o,f+c,m+d,E+p).normalize(),n[2].setComponents(l+r,f+h,m+g,E+T).normalize(),n[3].setComponents(l-r,f-h,m-g,E-T).normalize(),n[4].setComponents(l-a,f-u,m-x,E-S).normalize(),e===Vn)n[5].setComponents(l+a,f+u,m+x,E+S).normalize();else if(e===mr)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function fp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class uo extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const T=p*f-r;for(let S=0;S<c;S++){const E=S*u-o;g.push(E,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,E=T+c*(p+1),O=T+1+c*(p+1),R=T+1+c*p;d.push(S,E,R),d.push(E,O,R)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.width,t.height,t.widthSegments,t.heightSegments)}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Np=`#define PI 3.141592653589793
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
} // validated`,Fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`
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
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
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
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
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
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
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
#endif`,u0=`struct PhysicalMaterial {
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
}`,f0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
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
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,zm=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:dp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:vp,aomap_pars_fragment:Sp,batching_pars_vertex:yp,batching_vertex:Mp,begin_vertex:Ep,beginnormal_vertex:bp,bsdfs:wp,iridescence_fragment:Tp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Lp,color_fragment:Dp,color_pars_fragment:Ip,color_pars_vertex:Op,color_vertex:Up,common:Np,cube_uv_reflection_fragment:Fp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Hp,emissivemap_fragment:kp,emissivemap_pars_fragment:Xp,colorspace_fragment:Gp,colorspace_pars_fragment:Vp,envmap_fragment:Yp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:Zp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:o0,envmap_vertex:Kp,fog_vertex:jp,fog_pars_vertex:$p,fog_fragment:Jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:t0,lightmap_pars_fragment:e0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:s0,lights_toon_fragment:r0,lights_toon_pars_fragment:a0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:h0,lights_physical_pars_fragment:u0,lights_fragment_begin:f0,lights_fragment_maps:d0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:x0,map_fragment:v0,map_pars_fragment:S0,map_particle_fragment:y0,map_particle_pars_fragment:M0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:b0,morphinstance_vertex:w0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:C0,morphtarget_vertex:R0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:D0,normal_pars_vertex:I0,normal_vertex:O0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:z0,opaque_fragment:H0,packing:k0,premultiplied_alpha_fragment:X0,project_vertex:G0,dithering_fragment:V0,dithering_pars_fragment:Y0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:K0,shadowmap_vertex:j0,shadowmask_pars_fragment:$0,skinbase_vertex:J0,skinning_pars_vertex:Q0,skinning_vertex:tm,skinnormal_vertex:em,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:om,transmission_fragment:rm,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:um,background_vert:fm,background_frag:dm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:_m,depth_vert:xm,depth_frag:vm,distanceRGBA_vert:Sm,distanceRGBA_frag:ym,equirect_vert:Mm,equirect_frag:Em,linedashed_vert:bm,linedashed_frag:wm,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Cm,meshlambert_frag:Rm,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Im,meshphong_vert:Om,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Bm,meshtoon_frag:zm,points_vert:Hm,points_frag:km,shadow_vert:Xm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Ym},pt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ve([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ve([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ve([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ve([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ve([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ve([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ve([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ve([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ve([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ve([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ve([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ve([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ve([pt.lights,pt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Cn.physical={uniforms:Ve([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Vo={r:0,b:0,g:0},yi=new Ln,Wm=new ue;function Zm(i,t,e,n,s,o,r){const a=new Jt(0);let l=o===!0?0:1,c,h,u=null,f=0,d=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function x(T){let S=!1;const E=g(T);E===null?p(a,l):E&&E.isColor&&(p(E,1),S=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===br)?(h===void 0&&(h=new at(new ie(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Ss(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(S.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(yi)),h.material.toneMapped=he.getTransfer(E.colorSpace)!==pe,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new at(new uo(2,2),new di({name:"BackgroundMaterial",uniforms:Ss(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=he.getTransfer(E.colorSpace)!==pe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(Vo,fu(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m}}function qm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(y,L,G,B,W){let q=!1;const V=u(B,G,L);o!==V&&(o=V,c(o.object)),q=d(y,B,G,W),q&&g(y,B,G,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,E(y,L,G,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,G){const B=G.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let V=q[B];return V===void 0&&(V=f(l()),q[B]=V),V}function f(y){const L=[],G=[],B=[];for(let W=0;W<e;W++)L[W]=0,G[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:B,object:y,attributes:{},index:null}}function d(y,L,G,B){const W=o.attributes,q=L.attributes;let V=0;const $=G.getAttributes();for(const Z in $)if($[Z].location>=0){const yt=W[Z];let xt=q[Z];if(xt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),yt===void 0||yt.attribute!==xt||xt&&yt.data!==xt.data)return!0;V++}return o.attributesNum!==V||o.index!==B}function g(y,L,G,B){const W={},q=L.attributes;let V=0;const $=G.getAttributes();for(const Z in $)if($[Z].location>=0){let yt=q[Z];yt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor));const xt={};xt.attribute=yt,yt&&yt.data&&(xt.data=yt.data),W[Z]=xt,V++}o.attributes=W,o.attributesNum=V,o.index=B}function x(){const y=o.newAttributes;for(let L=0,G=y.length;L<G;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const G=o.newAttributes,B=o.enabledAttributes,W=o.attributeDivisors;G[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),W[y]!==L&&(i.vertexAttribDivisor(y,L),W[y]=L)}function T(){const y=o.newAttributes,L=o.enabledAttributes;for(let G=0,B=L.length;G<B;G++)L[G]!==y[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function S(y,L,G,B,W,q,V){V===!0?i.vertexAttribIPointer(y,L,G,W,q):i.vertexAttribPointer(y,L,G,B,W,q)}function E(y,L,G,B){x();const W=B.attributes,q=G.getAttributes(),V=L.defaultAttributeValues;for(const $ in q){const Z=q[$];if(Z.location>=0){let mt=W[$];if(mt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const yt=mt.normalized,xt=mt.itemSize,Gt=t.get(mt);if(Gt===void 0)continue;const te=Gt.buffer,K=Gt.type,st=Gt.bytesPerElement,Et=K===i.INT||K===i.UNSIGNED_INT||mt.gpuType===Ml;if(mt.isInterleavedBufferAttribute){const ht=mt.data,It=ht.stride,Xt=mt.offset;if(ht.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Z.locationSize;Dt++)p(Z.location+Dt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Dt=0;Dt<Z.locationSize;Dt++)m(Z.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Dt=0;Dt<Z.locationSize;Dt++)S(Z.location+Dt,xt/Z.locationSize,K,yt,It*st,(Xt+xt/Z.locationSize*Dt)*st,Et)}else{if(mt.isInstancedBufferAttribute){for(let ht=0;ht<Z.locationSize;ht++)p(Z.location+ht,mt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ht=0;ht<Z.locationSize;ht++)m(Z.location+ht);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ht=0;ht<Z.locationSize;ht++)S(Z.location+ht,xt/Z.locationSize,K,yt,xt*st,xt/Z.locationSize*ht*st,Et)}}else if(V!==void 0){const yt=V[$];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(Z.location,yt);break;case 3:i.vertexAttrib3fv(Z.location,yt);break;case 4:i.vertexAttrib4fv(Z.location,yt);break;default:i.vertexAttrib1fv(Z.location,yt)}}}}T()}function O(){D();for(const y in n){const L=n[y];for(const G in L){const B=L[G];for(const W in B)h(B[W].object),delete B[W];delete L[G]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const G in L){const B=L[G];for(const W in B)h(B[W].object),delete B[W];delete L[G]}delete n[y.id]}function C(y){for(const L in n){const G=n[L];if(G[y.id]===void 0)continue;const B=G[y.id];for(const W in B)h(B[W].object),delete B[W];delete G[y.id]}}function D(){b(),r=!0,o!==s&&(o=s,c(o.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Km(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<f.length;x++)e.update(g,n,f[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Zn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Pn&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:E,maxSamples:O}}function $m(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new oi,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const T=o?0:n,S=T*4;let E=p.clippingState||null;l.value=E,E=h(g,f,S,d);for(let O=0;O!==S;++O)E[O]=e[O];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=d;S!==x;++S,E+=4)r.copy(u[S]).applyMatrix4(T,a),r.normal.toArray(m,E),m[E+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Jm(i){let t=new WeakMap;function e(r,a){return a===Ea?r.mapping=gs:a===ba&&(r.mapping=_s),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ea||a===ba)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new cp(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class gu extends du{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hs=4,Hc=[.125,.215,.35,.446,.526,.582],wi=20,ia=new gu,kc=new Jt;let sa=null,oa=0,ra=0,aa=!1;const Ei=(1+Math.sqrt(5))/2,is=1/Ei,Xc=[new P(-Ei,is,0),new P(Ei,is,0),new P(-is,0,Ei),new P(is,0,Ei),new P(0,Ei,-is),new P(0,Ei,is),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,oa,ra),this._renderer.xr.enabled=aa,t.scissorTest=!1,Yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:lo,format:yn,colorSpace:pi,depthBuffer:!1},s=Vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(o)),this._blurMaterial=tg(o,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(kc),h.toneMapping=hi,h.autoClear=!1;const d=new fi({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new at(new ie,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(kc),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Yo(s,T*S,p>2?S:0,S,S),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===gs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new at(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Xc[(s-o-1)%Xc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*wi-1),x=o/g,m=isFinite(o)?1+Math.floor(h*x):wi;m>wi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const p=[];let T=0;for(let C=0;C<wi;++C){const D=C/x,b=Math.exp(-D*D/2);p.push(b),C===0?T+=b:C<m&&(T+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const E=this._sizeLods[s],O=3*E*(s>S-hs?s-S+hs:0),R=4*(this._cubeSize-E);Yo(e,O,R,3*E,2*E),l.setRenderTarget(e),l.render(u,ia)}}function Qm(i){const t=[],e=[],n=[];let s=i;const o=i-hs+1+Hc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-hs?l=Hc[r-i+hs-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*d),S=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,D=R>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(b,x*g*R),S.set(f,m*g*R);const y=[R,R,R,R,R,R];E.set(y,p*g*R)}const O=new je;O.setAttribute("position",new Mn(T,x)),O.setAttribute("uv",new Mn(S,m)),O.setAttribute("faceIndex",new Mn(E,p)),t.push(O),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vc(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tg(i,t,e){const n=new Float32Array(wi),s=new P(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Yc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Wc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function eg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===ba,h=l===gs||l===_s;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Gc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Gc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function ng(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ru("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,t,e,n){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const T=d.array;x=d.version;for(let S=0,E=T.length;S<E;S+=3){const O=T[S+0],R=T[S+1],C=T[S+2];f.push(O,R,R,C,C,O)}}else if(g!==void 0){const T=g.array;x=g.version;for(let S=0,E=T.length/3-1;S<E;S+=3){const O=S+0,R=S+1,C=S+2;f.push(O,R,R,C,C,O)}}else return;const m=new(ou(f)?uu:hu)(f,1);m.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sg(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,f*r,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/r,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T];for(let T=0;T<x.length;T++)e.update(p,n,x[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function og(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rg(i,t,e){const n=new WeakMap,s=new me;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let O=a.attributes.position.count*E,R=1;O>t.maxTextureSize&&(R=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const C=new Float32Array(O*R*4*u),D=new lu(C,O,R,u);D.type=Pn,D.needsUpdate=!0;const b=E*4;for(let L=0;L<u;L++){const G=p[L],B=T[L],W=S[L],q=O*R*4*L;for(let V=0;V<G.count;V++){const $=V*b;g===!0&&(s.fromBufferAttribute(G,V),C[q+$+0]=s.x,C[q+$+1]=s.y,C[q+$+2]=s.z,C[q+$+3]=0),x===!0&&(s.fromBufferAttribute(B,V),C[q+$+4]=s.x,C[q+$+5]=s.y,C[q+$+6]=s.z,C[q+$+7]=0),m===!0&&(s.fromBufferAttribute(W,V),C[q+$+8]=s.x,C[q+$+9]=s.y,C[q+$+10]=s.z,C[q+$+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new et(O,R)},n.set(a,f),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function ag(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class _u extends ke{constructor(t,e,n,s,o,r,a,l,c,h=ps){if(h!==ps&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Pi),n===void 0&&h===vs&&(n=xs),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xu=new ke,Zc=new _u(1,1),vu=new lu,Su=new Zd,yu=new pu,qc=[],Kc=[],jc=new Float32Array(16),$c=new Float32Array(9),Jc=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=qc[s];if(o===void 0&&(o=new Float32Array(s),qc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tr(i,t){let e=Kc[t];e===void 0&&(e=new Int32Array(t),Kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Jc.set(n),i.uniformMatrix2fv(this.addr,!1,Jc),Ie(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;$c.set(n),i.uniformMatrix3fv(this.addr,!1,$c),Ie(e,n)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),Ie(e,n)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function vg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function Eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=su,o=Zc):o=xu,e.setTexture2D(t||o,s)}function bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Su,s)}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yu,s)}function Tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return fg;case 35675:return dg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return Sg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Cg(i,t){i.uniform1fv(this.addr,t)}function Rg(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Pg(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Lg(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Dg(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ig(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Og(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ug(i,t){i.uniform1iv(this.addr,t)}function Ng(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Bg(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function Hg(i,t){i.uniform2uiv(this.addr,t)}function kg(i,t){i.uniform3uiv(this.addr,t)}function Xg(i,t){i.uniform4uiv(this.addr,t)}function Gg(i,t,e){const n=this.cache,s=t.length,o=Tr(e,s);De(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||xu,o[r])}function Vg(i,t,e){const n=this.cache,s=t.length,o=Tr(e,s);De(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Su,o[r])}function Yg(i,t,e){const n=this.cache,s=t.length,o=Tr(e,s);De(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||yu,o[r])}function Wg(i,t,e){const n=this.cache,s=t.length,o=Tr(e,s);De(n,o)||(i.uniform1iv(this.addr,o),Ie(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||vu,o[r])}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Rg;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ig;case 35676:return Og;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return Hg;case 36295:return kg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class Kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zg(e.type)}}class jg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function Qc(i,t){i.seq.push(t),i.map[t.id]=t}function $g(i,t,e){const n=i.name,s=n.length;for(la.lastIndex=0;;){const o=la.exec(n),r=la.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Qc(e,c===void 0?new qg(a,i,t):new Kg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new jg(a),Qc(e,u)),e=u}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);$g(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function th(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jg=37297;let Qg=0;function t_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function e_(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===pr&&e===dr?n="LinearDisplayP3ToLinearSRGB":t===dr&&e===pr&&(n="LinearSRGBToLinearDisplayP3"),i){case pi:case wr:return[n,"LinearTransferOETF"];case gn:case Rl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function eh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+t_(i.getShaderSource(t),r)}else return s}function n_(i,t){const e=e_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function i_(i,t){let e;switch(t){case rd:e="Linear";break;case ad:e="Reinhard";break;case ld:e="OptimizedCineon";break;case cd:e="ACESFilmic";break;case ud:e="AgX";break;case fd:e="Neutral";break;case hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function o_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Us(i){return i!==""}function nh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(a_,c_)}const l_=new Map;function c_(i,t){let e=Yt[t];if(e===void 0){const n=l_.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(h_,u_)}function u_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function oh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function f_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Df?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function d_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_s&&(t="ENVMAP_MODE_REFRACTION"),t}function m_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wh:t="ENVMAP_BLENDING_MULTIPLY";break;case sd:t="ENVMAP_BLENDING_MIX";break;case od:t="ENVMAP_BLENDING_ADD";break}return t}function g_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function __(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=f_(e),c=d_(e),h=p_(e),u=m_(e),f=g_(e),d=s_(e),g=o_(o),x=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==hi?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),r=Qa(r),r=nh(r,e),r=ih(r,e),a=Qa(a),a=nh(a,e),a=ih(a,e),r=sh(r),a=sh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+r,E=T+p+a,O=th(s,s.VERTEX_SHADER,S),R=th(s,s.FRAGMENT_SHADER,E);s.attachShader(x,O),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(O).trim(),W=s.getShaderInfoLog(R).trim();let q=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,O,R);else{const $=eh(s,O,"vertex"),Z=eh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+$+`
`+Z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||W==="")&&(V=!1);V&&(L.diagnostics={runnable:q,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(O),s.deleteShader(R),D=new lr(s,x),b=r_(s,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Jg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=R,this}let x_=0;class v_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new S_(t),e.set(t,n)),n}}class S_{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}}function y_(i,t,e,n,s,o,r){const a=new Dl,l=new v_,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,G,B){const W=G.fog,q=B.geometry,V=b.isMeshStandardMaterial?G.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),Z=$&&$.mapping===br?$.image.height:null,mt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=yt!==void 0?yt.length:0;let Gt=0;q.morphAttributes.position!==void 0&&(Gt=1),q.morphAttributes.normal!==void 0&&(Gt=2),q.morphAttributes.color!==void 0&&(Gt=3);let te,K,st,Et;if(mt){const ne=Cn[mt];te=ne.vertexShader,K=ne.fragmentShader}else te=b.vertexShader,K=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),Et=l.getFragmentShaderID(b);const ht=i.getRenderTarget(),It=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,Dt=!!b.map,Qt=!!b.matcap,w=!!$,rt=!!b.aoMap,nt=!!b.lightMap,ut=!!b.bumpMap,j=!!b.normalMap,Pt=!!b.displacementMap,dt=!!b.emissiveMap,Mt=!!b.metalnessMap,A=!!b.roughnessMap,v=b.anisotropy>0,H=b.clearcoat>0,tt=b.dispersion>0,Q=b.iridescence>0,J=b.sheen>0,At=b.transmission>0,ct=v&&!!b.anisotropyMap,_t=H&&!!b.clearcoatMap,Ht=H&&!!b.clearcoatNormalMap,ot=H&&!!b.clearcoatRoughnessMap,gt=Q&&!!b.iridescenceMap,Kt=Q&&!!b.iridescenceThicknessMap,Ut=J&&!!b.sheenColorMap,bt=J&&!!b.sheenRoughnessMap,Ft=!!b.specularMap,kt=!!b.specularColorMap,ge=!!b.specularIntensityMap,_=At&&!!b.transmissionMap,F=At&&!!b.thicknessMap,z=!!b.gradientMap,Y=!!b.alphaMap,it=b.alphaTest>0,Ct=!!b.alphaHash,Bt=!!b.extensions;let be=hi;b.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(be=i.toneMapping);const Re={shaderID:mt,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:K,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:pi,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:Qt,envMap:w,envMapMode:w&&$.mapping,envMapCubeUVHeight:Z,aoMap:rt,lightMap:nt,bumpMap:ut,normalMap:j,displacementMap:f&&Pt,emissiveMap:dt,normalMapObjectSpace:j&&b.normalMapType===gd,normalMapTangentSpace:j&&b.normalMapType===iu,metalnessMap:Mt,roughnessMap:A,anisotropy:v,anisotropyMap:ct,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Ht,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:Kt,sheen:J,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:Ft,specularColorMap:kt,specularIntensityMap:ge,transmission:At,transmissionMap:_,thicknessMap:F,gradientMap:z,opaque:b.transparent===!1&&b.blending===ds&&b.alphaToCoverage===!1,alphaMap:Y,alphaTest:it,alphaHash:Ct,combine:b.combine,mapUv:Dt&&x(b.map.channel),aoMapUv:rt&&x(b.aoMap.channel),lightMapUv:nt&&x(b.lightMap.channel),bumpMapUv:ut&&x(b.bumpMap.channel),normalMapUv:j&&x(b.normalMap.channel),displacementMapUv:Pt&&x(b.displacementMap.channel),emissiveMapUv:dt&&x(b.emissiveMap.channel),metalnessMapUv:Mt&&x(b.metalnessMap.channel),roughnessMapUv:A&&x(b.roughnessMap.channel),anisotropyMapUv:ct&&x(b.anisotropyMap.channel),clearcoatMapUv:_t&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(b.sheenRoughnessMap.channel),specularMapUv:Ft&&x(b.specularMap.channel),specularColorMapUv:kt&&x(b.specularColorMap.channel),specularIntensityMapUv:ge&&x(b.specularIntensityMap.channel),transmissionMapUv:_&&x(b.transmissionMap.channel),thicknessMapUv:F&&x(b.thicknessMap.channel),alphaMapUv:Y&&x(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Dt||Y),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&he.getTransfer(b.map.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function T(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),b.push(a.mask)}function E(b){const y=g[b.type];let L;if(y){const G=Cn[y];L=op.clone(G.uniforms)}else L=b.uniforms;return L}function O(b,y){let L;for(let G=0,B=h.length;G<B;G++){const W=h[G];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new __(i,y,b,o),h.push(L)),L}function R(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:O,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:D}}function M_(){let i=new WeakMap;function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function e(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function E_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ah(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){const p=r(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){const p=r(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||E_),n.length>1&&n.sort(f||rh),s.length>1&&s.sort(f||rh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function b_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new ah,i.set(n,[r])):s>=o.length?(r=new ah,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function w_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Jt};break;case"SpotLight":e={position:new P,direction:new P,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function T_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let A_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){const t=new w_,e=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,o=new ue,r=new ue;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,T=0,S=0,E=0,O=0,R=0,C=0;c.sort(C_);for(let b=0,y=c.length;b<y;b++){const L=c[b],G=L.color,B=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*B,u+=G.g*B,f+=G.b*B;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],B);C++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,T++}n.directional[d]=V,d++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(G).multiplyScalar(B),V.distance=W,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;const $=L.shadow;if(L.map&&(n.spotLightMap[O]=L.map,O++,$.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=$.matrix,L.castShadow){const Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=q,E++}x++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(G).multiplyScalar(B),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const $=L.shadow,Z=e.get(L);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(B),V.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==S||D.numSpotShadows!==E||D.numSpotMaps!==O||D.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.directionalLength=d,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=S,D.numSpotShadows=E,D.numSpotMaps=O,D.numLightProbes=C,n.version=A_++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(S.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function lh(i){const t=new R_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function P_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new lh(i),t.set(s,[a])):o>=r.length?(a=new lh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class L_ extends ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D_ extends ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`;function U_(i,t,e){let n=new Il;const s=new et,o=new et,r=new me,a=new L_({depthPacking:md}),l=new D_,c={},h=e.maxTextureSize,u={[ui]:qe,[qe]:ui,[vn]:vn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:I_,fragmentShader:O_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new at(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let p=this.type;this.render=function(R,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ci),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=p!==Xn&&this.type===Xn,W=p===Xn&&this.type!==Xn;for(let q=0,V=R.length;q<V;q++){const $=R[q],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const mt=Z.getFrameExtents();if(s.multiply(mt),o.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,Z.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,Z.mapSize.y=o.y)),Z.map===null||B===!0||W===!0){const xt=this.type!==Xn?{minFilter:Ze,magFilter:Ze}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Li(s.x,s.y,xt),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const yt=Z.getViewportCount();for(let xt=0;xt<yt;xt++){const Gt=Z.getViewport(xt);r.set(o.x*Gt.x,o.y*Gt.y,o.x*Gt.z,o.y*Gt.w),G.viewport(r),Z.updateMatrices($,xt),n=Z.getFrustum(),E(C,D,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Xn&&T(Z,D),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,L)};function T(R,C){const D=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Li(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,D,d,x,null)}function S(R,C,D,b){let y=null;const L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=y.uuid,B=C.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let q=W[B];q===void 0&&(q=y.clone(),W[B]=q,C.addEventListener("dispose",O)),y=q}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Xn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=i.properties.get(y);G.light=D}return y}function E(R,C,D,b,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=t.update(R),W=R.material;if(Array.isArray(W)){const q=B.groups;for(let V=0,$=q.length;V<$;V++){const Z=q[V],mt=W[Z.materialIndex];if(mt&&mt.visible){const yt=S(R,mt,b,y);R.onBeforeShadow(i,R,C,D,B,yt,Z),i.renderBufferDirect(D,null,B,yt,R,Z),R.onAfterShadow(i,R,C,D,B,yt,Z)}}}else if(W.visible){const q=S(R,W,b,y);R.onBeforeShadow(i,R,C,D,B,q,null),i.renderBufferDirect(D,null,B,q,R,null),R.onAfterShadow(i,R,C,D,B,q,null)}}const G=R.children;for(let B=0,W=G.length;B<W;B++)E(G[B],C,D,b,y)}function O(R){R.target.removeEventListener("dispose",O);for(const D in c){const b=c[D],y=R.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function N_(i){function t(){let _=!1;const F=new me;let z=null;const Y=new me(0,0,0,0);return{setMask:function(it){z!==it&&!_&&(i.colorMask(it,it,it,it),z=it)},setLocked:function(it){_=it},setClear:function(it,Ct,Bt,be,Re){Re===!0&&(it*=be,Ct*=be,Bt*=be),F.set(it,Ct,Bt,be),Y.equals(F)===!1&&(i.clearColor(it,Ct,Bt,be),Y.copy(F))},reset:function(){_=!1,z=null,Y.set(-1,0,0,0)}}}function e(){let _=!1,F=null,z=null,Y=null;return{setTest:function(it){it?Et(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(it){F!==it&&!_&&(i.depthMask(it),F=it)},setFunc:function(it){if(z!==it){switch(it){case $f:i.depthFunc(i.NEVER);break;case Jf:i.depthFunc(i.ALWAYS);break;case Qf:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case td:i.depthFunc(i.EQUAL);break;case ed:i.depthFunc(i.GEQUAL);break;case nd:i.depthFunc(i.GREATER);break;case id:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=it}},setLocked:function(it){_=it},setClear:function(it){Y!==it&&(i.clearDepth(it),Y=it)},reset:function(){_=!1,F=null,z=null,Y=null}}}function n(){let _=!1,F=null,z=null,Y=null,it=null,Ct=null,Bt=null,be=null,Re=null;return{setTest:function(ne){_||(ne?Et(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ne){F!==ne&&!_&&(i.stencilMask(ne),F=ne)},setFunc:function(ne,Pe,Te){(z!==ne||Y!==Pe||it!==Te)&&(i.stencilFunc(ne,Pe,Te),z=ne,Y=Pe,it=Te)},setOp:function(ne,Pe,Te){(Ct!==ne||Bt!==Pe||be!==Te)&&(i.stencilOp(ne,Pe,Te),Ct=ne,Bt=Pe,be=Te)},setLocked:function(ne){_=ne},setClear:function(ne){Re!==ne&&(i.clearStencil(ne),Re=ne)},reset:function(){_=!1,F=null,z=null,Y=null,it=null,Ct=null,Bt=null,be=null,Re=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,T=null,S=null,E=null,O=null,R=new Jt(0,0,0),C=0,D=!1,b=null,y=null,L=null,G=null,B=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),q=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=V>=2);let Z=null,mt={};const yt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Gt=new me().fromArray(yt),te=new me().fromArray(xt);function K(_,F,z,Y){const it=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(_,Ct),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<z;Bt++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(F,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(F+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Ct}const st={};st[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Et(i.DEPTH_TEST),o.setFunc(ur),ut(!1),j(dc),Et(i.CULL_FACE),rt(ci);function Et(_){c[_]!==!0&&(i.enable(_),c[_]=!0)}function ht(_){c[_]!==!1&&(i.disable(_),c[_]=!1)}function It(_,F){return h[_]!==F?(i.bindFramebuffer(_,F),h[_]=F,_===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=F),_===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=F),!0):!1}function Xt(_,F){let z=f,Y=!1;if(_){z=u.get(F),z===void 0&&(z=[],u.set(F,z));const it=_.textures;if(z.length!==it.length||z[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Bt=it.length;Ct<Bt;Ct++)z[Ct]=i.COLOR_ATTACHMENT0+Ct;z.length=it.length,Y=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,Y=!0);Y&&i.drawBuffers(z)}function Dt(_){return d!==_?(i.useProgram(_),d=_,!0):!1}const Qt={[bi]:i.FUNC_ADD,[Of]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};Qt[Nf]=i.MIN,Qt[Ff]=i.MAX;const w={[Bf]:i.ZERO,[zf]:i.ONE,[Hf]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[Xf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[Ma]:i.ONE_MINUS_SRC_ALPHA,[Yf]:i.ONE_MINUS_DST_COLOR,[Gf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Kf]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(_,F,z,Y,it,Ct,Bt,be,Re,ne){if(_===ci){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(Et(i.BLEND),g=!0),_!==If){if(_!==x||ne!==D){if((m!==bi||S!==bi)&&(i.blendEquation(i.FUNC_ADD),m=bi,S=bi),ne)switch(_){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}p=null,T=null,E=null,O=null,R.set(0,0,0),C=0,x=_,D=ne}return}it=it||F,Ct=Ct||z,Bt=Bt||Y,(F!==m||it!==S)&&(i.blendEquationSeparate(Qt[F],Qt[it]),m=F,S=it),(z!==p||Y!==T||Ct!==E||Bt!==O)&&(i.blendFuncSeparate(w[z],w[Y],w[Ct],w[Bt]),p=z,T=Y,E=Ct,O=Bt),(be.equals(R)===!1||Re!==C)&&(i.blendColor(be.r,be.g,be.b,Re),R.copy(be),C=Re),x=_,D=!1}function nt(_,F){_.side===vn?ht(i.CULL_FACE):Et(i.CULL_FACE);let z=_.side===qe;F&&(z=!z),ut(z),_.blending===ds&&_.transparent===!1?rt(ci):rt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),o.setFunc(_.depthFunc),o.setTest(_.depthTest),o.setMask(_.depthWrite),s.setMask(_.colorWrite);const Y=_.stencilWrite;r.setTest(Y),Y&&(r.setMask(_.stencilWriteMask),r.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),r.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),dt(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(_){b!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),b=_)}function j(_){_!==Pf?(Et(i.CULL_FACE),_!==y&&(_===dc?i.cullFace(i.BACK):_===Lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),y=_}function Pt(_){_!==L&&(q&&i.lineWidth(_),L=_)}function dt(_,F,z){_?(Et(i.POLYGON_OFFSET_FILL),(G!==F||B!==z)&&(i.polygonOffset(F,z),G=F,B=z)):ht(i.POLYGON_OFFSET_FILL)}function Mt(_){_?Et(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function A(_){_===void 0&&(_=i.TEXTURE0+W-1),Z!==_&&(i.activeTexture(_),Z=_)}function v(_,F,z){z===void 0&&(Z===null?z=i.TEXTURE0+W-1:z=Z);let Y=mt[z];Y===void 0&&(Y={type:void 0,texture:void 0},mt[z]=Y),(Y.type!==_||Y.texture!==F)&&(Z!==z&&(i.activeTexture(z),Z=z),i.bindTexture(_,F||st[_]),Y.type=_,Y.texture=F)}function H(){const _=mt[Z];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ut(_){Gt.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),Gt.copy(_))}function bt(_){te.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),te.copy(_))}function Ft(_,F){let z=l.get(F);z===void 0&&(z=new WeakMap,l.set(F,z));let Y=z.get(_);Y===void 0&&(Y=i.getUniformBlockIndex(F,_.name),z.set(_,Y))}function kt(_,F){const Y=l.get(F).get(_);a.get(F)!==Y&&(i.uniformBlockBinding(F,Y,_.__bindingPointIndex),a.set(F,Y))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Z=null,mt={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,m=null,p=null,T=null,S=null,E=null,O=null,R=new Jt(0,0,0),C=0,D=!1,b=null,y=null,L=null,G=null,B=null,Gt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Et,disable:ht,bindFramebuffer:It,drawBuffers:Xt,useProgram:Dt,setBlending:rt,setMaterial:nt,setFlipSided:ut,setCullFace:j,setLineWidth:Pt,setPolygonOffset:dt,setScissorTest:Mt,activeTexture:A,bindTexture:v,unbindTexture:H,compressedTexImage2D:tt,compressedTexImage3D:Q,texImage2D:gt,texImage3D:Kt,updateUBOMapping:Ft,uniformBlockBinding:kt,texStorage2D:Ht,texStorage3D:ot,texSubImage2D:J,texSubImage3D:At,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Ut,viewport:bt,reset:ge}}function ch(i,t,e,n){const s=F_(n);switch(e){case $h:return i*t;case Qh:return i*t;case tu:return i*t*2;case wl:return i*t/s.components*s.byteLength;case Tl:return i*t/s.components*s.byteLength;case eu:return i*t*2/s.components*s.byteLength;case Al:return i*t*2/s.components*s.byteLength;case Jh:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Cl:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case or:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ra:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ar:case qa:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nu:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $a:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F_(i){switch(i){case Zn:case qh:return{byteLength:1,components:1};case to:case Kh:case lo:return{byteLength:2,components:1};case El:case bl:return{byteLength:2,components:4};case Pi:case Ml:case Pn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return d?new OffscreenCanvas(A,v):gr("canvas")}function x(A,v,H){let tt=1;const Q=Mt(A);if((Q.width>H||Q.height>H)&&(tt=H/Math.max(Q.width,Q.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(tt*Q.width),At=Math.floor(tt*Q.height);u===void 0&&(u=g(J,At));const ct=v?g(J,At):u;return ct.width=J,ct.height=At,ct.getContext("2d").drawImage(A,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+At+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Ze&&A.minFilter!==Sn}function p(A){i.generateMipmap(A)}function T(A,v,H,tt,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=v;if(v===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),v===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),v===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){const At=Q?fr:he.getTransfer(tt);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=At===pe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(A,v){let H;return A?v===null||v===Pi||v===xs?H=i.DEPTH24_STENCIL8:v===Pn?H=i.DEPTH32F_STENCIL8:v===to&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pi||v===xs?H=i.DEPTH_COMPONENT24:v===Pn?H=i.DEPTH_COMPONENT32F:v===to&&(H=i.DEPTH_COMPONENT16),H}function E(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ze&&A.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function O(A){const v=A.target;v.removeEventListener("dispose",O),C(v),v.isVideoTexture&&h.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),b(v)}function C(A){const v=n.get(A);if(v.__webglInit===void 0)return;const H=A.source,tt=f.get(H);if(tt){const Q=tt[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(A),Object.keys(tt).length===0&&f.delete(H)}n.remove(A)}function D(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const H=A.source,tt=f.get(H);delete tt[v.__cacheKey],r.memory.textures--}function b(A){const v=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let Q=0;Q<v.__webglFramebuffer[tt].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[tt][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=A.textures;for(let tt=0,Q=H.length;tt<Q;tt++){const J=n.get(H[tt]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(H[tt])}n.remove(A)}let y=0;function L(){y=0}function G(){const A=y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),y+=1,A}function B(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function W(A,v){const H=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,A,v);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function q(A,v){const H=n.get(A);if(A.version>0&&H.__version!==A.version){te(H,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function V(A,v){const H=n.get(A);if(A.version>0&&H.__version!==A.version){te(H,A,v);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function $(A,v){const H=n.get(A);if(A.version>0&&H.__version!==A.version){K(H,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const Z={[wa]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},mt={[Ze]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},yt={[_d]:i.NEVER,[Ed]:i.ALWAYS,[xd]:i.LESS,[su]:i.LEQUAL,[vd]:i.EQUAL,[Md]:i.GEQUAL,[Sd]:i.GREATER,[yd]:i.NOTEQUAL};function xt(A,v){if(v.type===Pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===Br||v.magFilter===bo||v.magFilter===Ai||v.minFilter===Sn||v.minFilter===Br||v.minFilter===bo||v.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ze||v.minFilter!==bo&&v.minFilter!==Ai||v.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Gt(A,v){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",O));const tt=v.source;let Q=f.get(tt);Q===void 0&&(Q={},f.set(tt,Q));const J=B(v);if(J!==A.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),Q[J].usedTimes++;const At=Q[A.__cacheKey];At!==void 0&&(Q[A.__cacheKey].usedTimes--,At.usedTimes===0&&D(v)),A.__cacheKey=J,A.__webglTexture=Q[J].texture}return H}function te(A,v,H){let tt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=i.TEXTURE_3D);const Q=Gt(A,v),J=v.source;e.bindTexture(tt,A.__webglTexture,i.TEXTURE0+H);const At=n.get(J);if(J.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+H);const ct=he.getPrimaries(he.workingColorSpace),_t=v.colorSpace===ri?null:he.getPrimaries(v.colorSpace),Ht=v.colorSpace===ri||ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let ot=x(v.image,!1,s.maxTextureSize);ot=dt(v,ot);const gt=o.convert(v.format,v.colorSpace),Kt=o.convert(v.type);let Ut=T(v.internalFormat,gt,Kt,v.colorSpace,v.isVideoTexture);xt(tt,v);let bt;const Ft=v.mipmaps,kt=v.isVideoTexture!==!0,ge=At.__version===void 0||Q===!0,_=J.dataReady,F=E(v,ot);if(v.isDepthTexture)Ut=S(v.format===vs,v.type),ge&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,gt,Kt,null));else if(v.isDataTexture)if(Ft.length>0){kt&&ge&&e.texStorage2D(i.TEXTURE_2D,F,Ut,Ft[0].width,Ft[0].height);for(let z=0,Y=Ft.length;z<Y;z++)bt=Ft[z],kt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,bt.width,bt.height,gt,Kt,bt.data):e.texImage2D(i.TEXTURE_2D,z,Ut,bt.width,bt.height,0,gt,Kt,bt.data);v.generateMipmaps=!1}else kt?(ge&&e.texStorage2D(i.TEXTURE_2D,F,Ut,ot.width,ot.height),_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,gt,Kt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,gt,Kt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,F,Ut,Ft[0].width,Ft[0].height,ot.depth);for(let z=0,Y=Ft.length;z<Y;z++)if(bt=Ft[z],v.format!==yn)if(gt!==null)if(kt){if(_)if(v.layerUpdates.size>0){const it=ch(bt.width,bt.height,v.format,v.type);for(const Ct of v.layerUpdates){const Bt=bt.data.subarray(Ct*it/bt.data.BYTES_PER_ELEMENT,(Ct+1)*it/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,Ct,bt.width,bt.height,1,gt,Bt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,bt.width,bt.height,ot.depth,gt,bt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Ut,bt.width,bt.height,ot.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?_&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,bt.width,bt.height,ot.depth,gt,Kt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Ut,bt.width,bt.height,ot.depth,0,gt,Kt,bt.data)}else{kt&&ge&&e.texStorage2D(i.TEXTURE_2D,F,Ut,Ft[0].width,Ft[0].height);for(let z=0,Y=Ft.length;z<Y;z++)bt=Ft[z],v.format!==yn?gt!==null?kt?_&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,bt.width,bt.height,gt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,bt.width,bt.height,gt,Kt,bt.data):e.texImage2D(i.TEXTURE_2D,z,Ut,bt.width,bt.height,0,gt,Kt,bt.data)}else if(v.isDataArrayTexture)if(kt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,F,Ut,ot.width,ot.height,ot.depth),_)if(v.layerUpdates.size>0){const z=ch(ot.width,ot.height,v.format,v.type);for(const Y of v.layerUpdates){const it=ot.data.subarray(Y*z/ot.data.BYTES_PER_ELEMENT,(Y+1)*z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ot.width,ot.height,1,gt,Kt,it)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,gt,Kt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,gt,Kt,ot.data);else if(v.isData3DTexture)kt?(ge&&e.texStorage3D(i.TEXTURE_3D,F,Ut,ot.width,ot.height,ot.depth),_&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,gt,Kt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,gt,Kt,ot.data);else if(v.isFramebufferTexture){if(ge)if(kt)e.texStorage2D(i.TEXTURE_2D,F,Ut,ot.width,ot.height);else{let z=ot.width,Y=ot.height;for(let it=0;it<F;it++)e.texImage2D(i.TEXTURE_2D,it,Ut,z,Y,0,gt,Kt,null),z>>=1,Y>>=1}}else if(Ft.length>0){if(kt&&ge){const z=Mt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,F,Ut,z.width,z.height)}for(let z=0,Y=Ft.length;z<Y;z++)bt=Ft[z],kt?_&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,gt,Kt,bt):e.texImage2D(i.TEXTURE_2D,z,Ut,gt,Kt,bt);v.generateMipmaps=!1}else if(kt){if(ge){const z=Mt(ot);e.texStorage2D(i.TEXTURE_2D,F,Ut,z.width,z.height)}_&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Kt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ut,gt,Kt,ot);m(v)&&p(tt),At.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function K(A,v,H){if(v.image.length!==6)return;const tt=Gt(A,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const J=n.get(Q);if(Q.version!==J.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);const At=he.getPrimaries(he.workingColorSpace),ct=v.colorSpace===ri?null:he.getPrimaries(v.colorSpace),_t=v.colorSpace===ri||At===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ht=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let Y=0;Y<6;Y++)!Ht&&!ot?gt[Y]=x(v.image[Y],!0,s.maxCubemapSize):gt[Y]=ot?v.image[Y].image:v.image[Y],gt[Y]=dt(v,gt[Y]);const Kt=gt[0],Ut=o.convert(v.format,v.colorSpace),bt=o.convert(v.type),Ft=T(v.internalFormat,Ut,bt,v.colorSpace),kt=v.isVideoTexture!==!0,ge=J.__version===void 0||tt===!0,_=Q.dataReady;let F=E(v,Kt);xt(i.TEXTURE_CUBE_MAP,v);let z;if(Ht){kt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,F,Ft,Kt.width,Kt.height);for(let Y=0;Y<6;Y++){z=gt[Y].mipmaps;for(let it=0;it<z.length;it++){const Ct=z[it];v.format!==yn?Ut!==null?kt?_&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,Ct.width,Ct.height,Ut,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,0,0,Ct.width,Ct.height,Ut,bt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it,Ft,Ct.width,Ct.height,0,Ut,bt,Ct.data)}}}else{if(z=v.mipmaps,kt&&ge){z.length>0&&F++;const Y=Mt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,F,Ft,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ot){kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,gt[Y].width,gt[Y].height,Ut,bt,gt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ft,gt[Y].width,gt[Y].height,0,Ut,bt,gt[Y].data);for(let it=0;it<z.length;it++){const Bt=z[it].image[Y].image;kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Bt.width,Bt.height,Ut,bt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ft,Bt.width,Bt.height,0,Ut,bt,Bt.data)}}else{kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ut,bt,gt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ft,Ut,bt,gt[Y]);for(let it=0;it<z.length;it++){const Ct=z[it];kt?_&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,0,0,Ut,bt,Ct.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,it+1,Ft,Ut,bt,Ct.image[Y])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),J.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function st(A,v,H,tt,Q,J){const At=o.convert(H.format,H.colorSpace),ct=o.convert(H.type),_t=T(H.internalFormat,At,ct,H.colorSpace);if(!n.get(v).__hasExternalTextures){const ot=Math.max(1,v.width>>J),gt=Math.max(1,v.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,_t,ot,gt,v.depth,0,At,ct,null):e.texImage2D(Q,J,_t,ot,gt,0,At,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Q,n.get(H).__webglTexture,0,ut(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,Q,n.get(H).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(A,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const tt=v.depthTexture,Q=tt&&tt.isDepthTexture?tt.type:null,J=S(v.stencilBuffer,Q),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ut(v);j(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,J,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{const tt=v.textures;for(let Q=0;Q<tt.length;Q++){const J=tt[Q],At=o.convert(J.format,J.colorSpace),ct=o.convert(J.type),_t=T(J.internalFormat,At,ct,J.colorSpace),Ht=ut(v);H&&j(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,_t,v.width,v.height):j(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,_t,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_t,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const tt=n.get(v.depthTexture).__webglTexture,Q=ut(v);if(v.depthTexture.format===ps)j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===vs)j(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function It(A){const v=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ht(v.__webglFramebuffer,A)}else if(H){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]=i.createRenderbuffer(),Et(v.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Et(v.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(A,v,H){const tt=n.get(A);v!==void 0&&st(tt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&It(A)}function Dt(A){const v=A.texture,H=n.get(A),tt=n.get(v);A.addEventListener("dispose",R);const Q=A.textures,J=A.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=v.version,r.memory.textures++),J){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ct]=[];for(let _t=0;_t<v.mipmaps.length;_t++)H.__webglFramebuffer[ct][_t]=i.createFramebuffer()}else H.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)H.__webglFramebuffer[ct]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(At)for(let ct=0,_t=Q.length;ct<_t;ct++){const Ht=n.get(Q[ct]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&j(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const _t=Q[ct];H.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ct]);const Ht=o.convert(_t.format,_t.colorSpace),ot=o.convert(_t.type),gt=T(_t.internalFormat,Ht,ot,_t.colorSpace,A.isXRRenderTarget===!0),Kt=ut(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,H.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),xt(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)st(H.__webglFramebuffer[ct][_t],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else st(H.__webglFramebuffer[ct],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ct=0,_t=Q.length;ct<_t;ct++){const Ht=Q[ct],ot=n.get(Ht);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),xt(i.TEXTURE_2D,Ht),st(H.__webglFramebuffer,A,Ht,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Ht)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),xt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)st(H.__webglFramebuffer[_t],A,v,i.COLOR_ATTACHMENT0,ct,_t);else st(H.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}A.depthBuffer&&It(A)}function Qt(A){const v=A.textures;for(let H=0,tt=v.length;H<tt;H++){const Q=v[H];if(m(Q)){const J=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(Q).__webglTexture;e.bindTexture(J,At),p(J),e.unbindTexture()}}}const w=[],rt=[];function nt(A){if(A.samples>0){if(j(A)===!1){const v=A.textures,H=A.width,tt=A.height;let Q=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),ct=v.length>1;if(ct)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const Ht=n.get(v[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,H,tt,0,0,H,tt,Q,i.NEAREST),l===!0&&(w.length=0,rt.length=0,w.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(w.push(J),rt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const Ht=n.get(v[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ut(A){return Math.min(s.maxSamples,A.samples)}function j(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(A){const v=r.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function dt(A,v){const H=A.colorSpace,tt=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==pi&&H!==ri&&(he.getTransfer(H)===pe?(tt!==yn||Q!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=Xt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=st,this.useMultisampledRTT=j}function z_(i,t){function e(n,s=ri){let o;const r=he.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===El)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return i.BYTE;if(n===Kh)return i.SHORT;if(n===to)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===lo)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===Jh)return i.RGB;if(n===yn)return i.RGBA;if(n===Qh)return i.LUMINANCE;if(n===tu)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===wl)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===eu)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===ir||n===sr||n===or||n===rr)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ir)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ir)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ca||n===Ra||n===Pa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Aa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Ia)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===La||n===Da)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ia)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===Ua||n===Na||n===Fa||n===Ba||n===za||n===Ha||n===ka||n===Xa||n===Ga||n===Va||n===Ya||n===Wa||n===Za)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Oa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ar||n===qa||n===Ka)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ar)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nu||n===ja||n===$a||n===Ja)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ar)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class H_ extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new di({vertexShader:X_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new uo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends Ui{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const x=new V_,m=e.getContextAttributes();let p=null,T=null;const S=[],E=[],O=new et;let R=null;const C=new rn;C.layers.enable(1),C.viewport=new me;const D=new rn;D.layers.enable(2),D.viewport=new me;const b=[C,D],y=new H_;y.layers.enable(1),y.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=S[K];return st===void 0&&(st=new ca,S[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=S[K];return st===void 0&&(st=new ca,S[K]=st),st.getGripSpace()},this.getHand=function(K){let st=S[K];return st===void 0&&(st=new ca,S[K]=st),st.getHandSpace()};function B(K){const st=E.indexOf(K.inputSource);if(st===-1)return;const Et=S[st];Et!==void 0&&(Et.update(K.inputSource,K.frame,c||r),Et.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let K=0;K<S.length;K++){const st=E[K];st!==null&&(E[K]=null,S[K].disconnect(st))}L=null,G=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,T=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Li(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Et=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?vs:ps,Et=m.stencil?xs:Pi);const It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Li(f.textureWidth,f.textureHeight,{format:yn,type:Zn,depthTexture:new _u(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(K){for(let st=0;st<K.removed.length;st++){const Et=K.removed[st],ht=E.indexOf(Et);ht>=0&&(E[ht]=null,S[ht].disconnect(Et))}for(let st=0;st<K.added.length;st++){const Et=K.added[st];let ht=E.indexOf(Et);if(ht===-1){for(let Xt=0;Xt<S.length;Xt++)if(Xt>=E.length){E.push(Et),ht=Xt;break}else if(E[Xt]===null){E[Xt]=Et,ht=Xt;break}if(ht===-1)break}const It=S[ht];It&&It.connect(Et)}}const V=new P,$=new P;function Z(K,st,Et){V.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const ht=V.distanceTo($),It=st.projectionMatrix.elements,Xt=Et.projectionMatrix.elements,Dt=It[14]/(It[10]-1),Qt=It[14]/(It[10]+1),w=(It[9]+1)/It[5],rt=(It[9]-1)/It[5],nt=(It[8]-1)/It[0],ut=(Xt[8]+1)/Xt[0],j=Dt*nt,Pt=Dt*ut,dt=ht/(-nt+ut),Mt=dt*-nt;st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(dt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const A=Dt+dt,v=Qt+dt,H=j-Mt,tt=Pt+(ht-Mt),Q=w*Qt/v*A,J=rt*Qt/v*A;K.projectionMatrix.makePerspective(H,tt,Q,J,A,v),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function mt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;x.texture!==null&&(K.near=x.depthNear,K.far=x.depthFar),y.near=D.near=C.near=K.near,y.far=D.far=C.far=K.far,(L!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,G=y.far,C.near=L,C.far=G,D.near=L,D.far=G,C.updateProjectionMatrix(),D.updateProjectionMatrix(),K.updateProjectionMatrix());const st=K.parent,Et=y.cameras;mt(y,st);for(let ht=0;ht<Et.length;ht++)mt(Et[ht],st);Et.length===2?Z(y,C,D):y.projectionMatrix.copy(C.projectionMatrix),yt(K,y,st)};function yt(K,st,Et){Et===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(Et.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=eo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let xt=null;function Gt(K,st){if(h=st.getViewerPose(c||r),g=st,h!==null){const Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let ht=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Xt=0;Xt<Et.length;Xt++){const Dt=Et[Xt];let Qt=null;if(d!==null)Qt=d.getViewport(Dt);else{const rt=u.getViewSubImage(f,Dt);Qt=rt.viewport,Xt===0&&(t.setRenderTargetTextures(T,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(T))}let w=b[Xt];w===void 0&&(w=new rn,w.layers.enable(Xt),w.viewport=new me,b[Xt]=w),w.matrix.fromArray(Dt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Dt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Xt===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(w)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Xt=u.getDepthInformation(Et[0]);Xt&&Xt.isValid&&Xt.texture&&x.init(t,Xt,s.renderState)}}for(let Et=0;Et<S.length;Et++){const ht=E[Et],It=S[Et];ht!==null&&It!==void 0&&It.update(ht,st,c||r)}xt&&xt(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const te=new mu;te.setAnimationLoop(Gt),this.setAnimationLoop=function(K){xt=K},this.dispose=function(){}}}const Mi=new Ln,W_=new ue;function Z_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,E=T.envMapRotation;S&&(m.envMap.value=S,Mi.copy(E),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Mi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const E=S.program;n.uniformBlockBinding(T,E)}function c(T,S){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",m));const O=S.program;n.updateUBOMapping(T,O);const R=t.render.frame;o[T.id]!==R&&(f(T),o[T.id]=R)}function h(T){const S=u();T.__bindingPointIndex=S;const E=i.createBuffer(),O=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function u(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=s[T.id],E=T.uniforms,O=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,C=E.length;R<C;R++){const D=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,y=D.length;b<y;b++){const L=D[b];if(d(L,R,b,O)===!0){const G=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<B.length;q++){const V=B[q],$=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+W,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,S,E,O){const R=T.value,C=S+"_"+E;if(O[C]===void 0)return typeof R=="number"||typeof R=="boolean"?O[C]=R:O[C]=R.clone(),!0;{const D=O[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return O[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const S=T.uniforms;let E=0;const O=16;for(let C=0,D=S.length;C<D;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,L=b.length;y<L;y++){const G=b[y],B=Array.isArray(G.value)?G.value:[G.value];for(let W=0,q=B.length;W<q;W++){const V=B[W],$=x(V),Z=E%O;Z!==0&&O-Z<$.boundary&&(E+=O-Z),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=$.storage}}}const R=E%O;return R>0&&(E+=O-R),T.__size=E,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const E=r.indexOf(S.__bindingPointIndex);r.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class K_{constructor(t={}){const{canvas:e=Hd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=hi,this.toneMappingExposure=1;const S=this;let E=!1,O=0,R=0,C=null,D=-1,b=null;const y=new me,L=new me;let G=null;const B=new Jt(0);let W=0,q=e.width,V=e.height,$=1,Z=null,mt=null;const yt=new me(0,0,q,V),xt=new me(0,0,q,V);let Gt=!1;const te=new Il;let K=!1,st=!1;const Et=new ue,ht=new P,It=new me,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Qt(){return C===null?$:1}let w=n;function rt(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sl}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",it,!1),w===null){const I="webgl2";if(w=rt(I,M),w===null)throw rt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let nt,ut,j,Pt,dt,Mt,A,v,H,tt,Q,J,At,ct,_t,Ht,ot,gt,Kt,Ut,bt,Ft,kt,ge;function _(){nt=new ng(w),nt.init(),Ft=new z_(w,nt),ut=new jm(w,nt,t,Ft),j=new N_(w),Pt=new og(w),dt=new M_,Mt=new B_(w,nt,j,dt,ut,Ft,Pt),A=new Jm(S),v=new eg(S),H=new fp(w),kt=new qm(w,H),tt=new ig(w,H,Pt,kt),Q=new ag(w,tt,H,Pt),Kt=new rg(w,ut,Mt),Ht=new $m(dt),J=new y_(S,A,v,nt,ut,kt,Ht),At=new Z_(S,dt),ct=new b_,_t=new P_(nt),gt=new Zm(S,A,v,j,Q,f,l),ot=new U_(S,Q,ut),ge=new q_(w,Pt,ut,j),Ut=new Km(w,nt,Pt),bt=new sg(w,nt,Pt),Pt.programs=J.programs,S.capabilities=ut,S.extensions=nt,S.properties=dt,S.renderLists=ct,S.shadowMap=ot,S.state=j,S.info=Pt}_();const F=new Y_(S,w);this.xr=F,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(q,V,!1))},this.getSize=function(M){return M.set(q,V)},this.setSize=function(M,I,k=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,V=I,e.width=Math.floor(M*$),e.height=Math.floor(I*$),k===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(q*$,V*$).floor()},this.setDrawingBufferSize=function(M,I,k){q=M,V=I,$=k,e.width=Math.floor(M*k),e.height=Math.floor(I*k),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,I,k,X){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,I,k,X),j.viewport(y.copy(yt).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(xt)},this.setScissor=function(M,I,k,X){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,I,k,X),j.scissor(L.copy(xt).multiplyScalar($).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(M){j.setScissorTest(Gt=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){mt=M},this.getClearColor=function(M){return M.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(M=!0,I=!0,k=!0){let X=0;if(M){let N=!1;if(C!==null){const lt=C.texture.format;N=lt===Cl||lt===Al||lt===Tl}if(N){const lt=C.texture.type,vt=lt===Zn||lt===Pi||lt===to||lt===xs||lt===El||lt===bl,wt=gt.getClearColor(),Tt=gt.getClearAlpha(),Nt=wt.r,zt=wt.g,Lt=wt.b;vt?(d[0]=Nt,d[1]=zt,d[2]=Lt,d[3]=Tt,w.clearBufferuiv(w.COLOR,0,d)):(g[0]=Nt,g[1]=zt,g[2]=Lt,g[3]=Tt,w.clearBufferiv(w.COLOR,0,g))}else X|=w.COLOR_BUFFER_BIT}I&&(X|=w.DEPTH_BUFFER_BIT),k&&(X|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ct.dispose(),_t.dispose(),dt.dispose(),A.dispose(),v.dispose(),Q.dispose(),kt.dispose(),ge.dispose(),J.dispose(),F.dispose(),F.removeEventListener("sessionstart",Te),F.removeEventListener("sessionend",jn),Fe.stop()};function z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Pt.autoReset,I=ot.enabled,k=ot.autoUpdate,X=ot.needsUpdate,N=ot.type;_(),Pt.autoReset=M,ot.enabled=I,ot.autoUpdate=k,ot.needsUpdate=X,ot.type=N}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ct(M){const I=M.target;I.removeEventListener("dispose",Ct),Bt(I)}function Bt(M){be(M),dt.remove(M)}function be(M){const I=dt.get(M).programs;I!==void 0&&(I.forEach(function(k){J.releaseProgram(k)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,k,X,N,lt){I===null&&(I=Xt);const vt=N.isMesh&&N.matrixWorld.determinant()<0,wt=Tf(M,I,k,X,N);j.setMaterial(X,vt);let Tt=k.index,Nt=1;if(X.wireframe===!0){if(Tt=tt.getWireframeAttribute(k),Tt===void 0)return;Nt=2}const zt=k.drawRange,Lt=k.attributes.position;let re=zt.start*Nt,Me=(zt.start+zt.count)*Nt;lt!==null&&(re=Math.max(re,lt.start*Nt),Me=Math.min(Me,(lt.start+lt.count)*Nt)),Tt!==null?(re=Math.max(re,0),Me=Math.min(Me,Tt.count)):Lt!=null&&(re=Math.max(re,0),Me=Math.min(Me,Lt.count));const Ee=Me-re;if(Ee<0||Ee===1/0)return;kt.setup(N,X,wt,k,Tt);let $e,ae=Ut;if(Tt!==null&&($e=H.get(Tt),ae=bt,ae.setIndex($e)),N.isMesh)X.wireframe===!0?(j.setLineWidth(X.wireframeLinewidth*Qt()),ae.setMode(w.LINES)):ae.setMode(w.TRIANGLES);else if(N.isLine){let Rt=X.linewidth;Rt===void 0&&(Rt=1),j.setLineWidth(Rt*Qt()),N.isLineSegments?ae.setMode(w.LINES):N.isLineLoop?ae.setMode(w.LINE_LOOP):ae.setMode(w.LINE_STRIP)}else N.isPoints?ae.setMode(w.POINTS):N.isSprite&&ae.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,Be=N._multiDrawCounts,le=N._multiDrawCount,fn=Tt?H.get(Tt).bytesPerElement:1,Bi=dt.get(X).currentProgram.getUniforms();for(let Je=0;Je<le;Je++)Bi.setValue(w,"_gl_DrawID",Je),ae.render(Rt[Je]/fn,Be[Je])}else if(N.isInstancedMesh)ae.renderInstances(re,Ee,N.count);else if(k.isInstancedBufferGeometry){const Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Be=Math.min(k.instanceCount,Rt);ae.renderInstances(re,Ee,Be)}else ae.render(re,Ee)};function Re(M,I,k){M.transparent===!0&&M.side===vn&&M.forceSinglePass===!1?(M.side=qe,M.needsUpdate=!0,Eo(M,I,k),M.side=ui,M.needsUpdate=!0,Eo(M,I,k),M.side=vn):Eo(M,I,k)}this.compile=function(M,I,k=null){k===null&&(k=M),m=_t.get(k),m.init(I),T.push(m),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const X=new Set;return M.traverse(function(N){const lt=N.material;if(lt)if(Array.isArray(lt))for(let vt=0;vt<lt.length;vt++){const wt=lt[vt];Re(wt,k,N),X.add(wt)}else Re(lt,k,N),X.add(lt)}),T.pop(),m=null,X},this.compileAsync=function(M,I,k=null){const X=this.compile(M,I,k);return new Promise(N=>{function lt(){if(X.forEach(function(vt){dt.get(vt).currentProgram.isReady()&&X.delete(vt)}),X.size===0){N(M);return}setTimeout(lt,10)}nt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ne=null;function Pe(M){ne&&ne(M)}function Te(){Fe.stop()}function jn(){Fe.start()}const Fe=new mu;Fe.setAnimationLoop(Pe),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(M){ne=M,F.setAnimationLoop(M),M===null?Fe.stop():Fe.start()},F.addEventListener("sessionstart",Te),F.addEventListener("sessionend",jn),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(I),I=F.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,I,C),m=_t.get(M,T.length),m.init(I),T.push(m),Et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),te.setFromProjectionMatrix(Et),st=this.localClippingEnabled,K=Ht.init(this.clippingPlanes,st),x=ct.get(M,p.length),x.init(),p.push(x),F.enabled===!0&&F.isPresenting===!0){const lt=S.xr.getDepthSensingMesh();lt!==null&&Nn(lt,I,-1/0,S.sortObjects)}Nn(M,I,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(Z,mt),Dt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Dt&&gt.addToRenderList(x,M),this.info.render.frame++,K===!0&&Ht.beginShadows();const k=m.state.shadowsArray;ot.render(k,M,I),K===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,N=x.transmissive;if(m.setupLights(),I.isArrayCamera){const lt=I.cameras;if(N.length>0)for(let vt=0,wt=lt.length;vt<wt;vt++){const Tt=lt[vt];Ts(X,N,M,Tt)}Dt&&gt.render(M);for(let vt=0,wt=lt.length;vt<wt;vt++){const Tt=lt[vt];gi(x,M,Tt,Tt.viewport)}}else N.length>0&&Ts(X,N,M,I),Dt&&gt.render(M),gi(x,M,I);C!==null&&(Mt.updateMultisampleRenderTarget(C),Mt.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(S,M,I),kt.resetDefaultState(),D=-1,b=null,T.pop(),T.length>0?(m=T[T.length-1],K===!0&&Ht.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Nn(M,I,k,X){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||te.intersectsSprite(M)){X&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Et);const vt=Q.update(M),wt=M.material;wt.visible&&x.push(M,vt,wt,k,It.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||te.intersectsObject(M))){const vt=Q.update(M),wt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),It.copy(vt.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(Et)),Array.isArray(wt)){const Tt=vt.groups;for(let Nt=0,zt=Tt.length;Nt<zt;Nt++){const Lt=Tt[Nt],re=wt[Lt.materialIndex];re&&re.visible&&x.push(M,vt,re,k,It.z,Lt)}}else wt.visible&&x.push(M,vt,wt,k,It.z,null)}}const lt=M.children;for(let vt=0,wt=lt.length;vt<wt;vt++)Nn(lt[vt],I,k,X)}function gi(M,I,k,X){const N=M.opaque,lt=M.transmissive,vt=M.transparent;m.setupLightsView(k),K===!0&&Ht.setGlobalState(S.clippingPlanes,k),X&&j.viewport(y.copy(X)),N.length>0&&Mo(N,I,k),lt.length>0&&Mo(lt,I,k),vt.length>0&&Mo(vt,I,k),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Ts(M,I,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Li(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?lo:Zn,minFilter:Ai,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const lt=m.state.transmissionRenderTarget[X.id],vt=X.viewport||y;lt.setSize(vt.z,vt.w);const wt=S.getRenderTarget();S.setRenderTarget(lt),S.getClearColor(B),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),Dt?gt.render(k):S.clear();const Tt=S.toneMapping;S.toneMapping=hi;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),K===!0&&Ht.setGlobalState(S.clippingPlanes,X),Mo(M,k,X),Mt.updateMultisampleRenderTarget(lt),Mt.updateRenderTargetMipmap(lt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Lt=0,re=I.length;Lt<re;Lt++){const Me=I[Lt],Ee=Me.object,$e=Me.geometry,ae=Me.material,Rt=Me.group;if(ae.side===vn&&Ee.layers.test(X.layers)){const Be=ae.side;ae.side=qe,ae.needsUpdate=!0,cc(Ee,k,X,$e,ae,Rt),ae.side=Be,ae.needsUpdate=!0,zt=!0}}zt===!0&&(Mt.updateMultisampleRenderTarget(lt),Mt.updateRenderTargetMipmap(lt))}S.setRenderTarget(wt),S.setClearColor(B,W),Nt!==void 0&&(X.viewport=Nt),S.toneMapping=Tt}function Mo(M,I,k){const X=I.isScene===!0?I.overrideMaterial:null;for(let N=0,lt=M.length;N<lt;N++){const vt=M[N],wt=vt.object,Tt=vt.geometry,Nt=X===null?vt.material:X,zt=vt.group;wt.layers.test(k.layers)&&cc(wt,I,k,Tt,Nt,zt)}}function cc(M,I,k,X,N,lt){M.onBeforeRender(S,I,k,X,N,lt),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.transparent===!0&&N.side===vn&&N.forceSinglePass===!1?(N.side=qe,N.needsUpdate=!0,S.renderBufferDirect(k,I,X,N,M,lt),N.side=ui,N.needsUpdate=!0,S.renderBufferDirect(k,I,X,N,M,lt),N.side=vn):S.renderBufferDirect(k,I,X,N,M,lt),M.onAfterRender(S,I,k,X,N,lt)}function Eo(M,I,k){I.isScene!==!0&&(I=Xt);const X=dt.get(M),N=m.state.lights,lt=m.state.shadowsArray,vt=N.state.version,wt=J.getParameters(M,N.state,lt,I,k),Tt=J.getProgramCacheKey(wt);let Nt=X.programs;X.environment=M.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(M.isMeshStandardMaterial?v:A).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",Ct),Nt=new Map,X.programs=Nt);let zt=Nt.get(Tt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===vt)return uc(M,wt),zt}else wt.uniforms=J.getUniforms(M),M.onBeforeCompile(wt,S),zt=J.acquireProgram(wt,Tt),Nt.set(Tt,zt),X.uniforms=wt.uniforms;const Lt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=Ht.uniform),uc(M,wt),X.needsLights=Cf(M),X.lightsStateVersion=vt,X.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function hc(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=lr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function uc(M,I){const k=dt.get(M);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Tf(M,I,k,X,N){I.isScene!==!0&&(I=Xt),Mt.resetTextureUnits();const lt=I.fog,vt=X.isMeshStandardMaterial?I.environment:null,wt=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:pi,Tt=(X.isMeshStandardMaterial?v:A).get(X.envMap||vt),Nt=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,zt=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,Me=!!k.morphAttributes.color;let Ee=hi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ee=S.toneMapping);const $e=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=$e!==void 0?$e.length:0,Rt=dt.get(X),Be=m.state.lights;if(K===!0&&(st===!0||M!==b)){const ln=M===b&&X.id===D;Ht.setState(X,M,ln)}let le=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Be.state.version||Rt.outputColorSpace!==wt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==Tt||X.fog===!0&&Rt.fog!==lt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ht.numPlanes||Rt.numIntersection!==Ht.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==zt||Rt.morphTargets!==Lt||Rt.morphNormals!==re||Rt.morphColors!==Me||Rt.toneMapping!==Ee||Rt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Rt.__version=X.version);let fn=Rt.currentProgram;le===!0&&(fn=Eo(X,I,N));let Bi=!1,Je=!1,Ur=!1;const Ae=fn.getUniforms(),$n=Rt.uniforms;if(j.useProgram(fn.program)&&(Bi=!0,Je=!0,Ur=!0),X.id!==D&&(D=X.id,Je=!0),Bi||b!==M){Ae.setValue(w,"projectionMatrix",M.projectionMatrix),Ae.setValue(w,"viewMatrix",M.matrixWorldInverse);const ln=Ae.map.cameraPosition;ln!==void 0&&ln.setValue(w,ht.setFromMatrixPosition(M.matrixWorld)),ut.logarithmicDepthBuffer&&Ae.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ae.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Je=!0,Ur=!0)}if(N.isSkinnedMesh){Ae.setOptional(w,N,"bindMatrix"),Ae.setOptional(w,N,"bindMatrixInverse");const ln=N.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ae.setValue(w,"boneTexture",ln.boneTexture,Mt))}N.isBatchedMesh&&(Ae.setOptional(w,N,"batchingTexture"),Ae.setValue(w,"batchingTexture",N._matricesTexture,Mt),Ae.setOptional(w,N,"batchingIdTexture"),Ae.setValue(w,"batchingIdTexture",N._indirectTexture,Mt),Ae.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&Ae.setValue(w,"batchingColorTexture",N._colorsTexture,Mt));const Nr=k.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&Kt.update(N,k,fn),(Je||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,Ae.setValue(w,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($n.envMap.value=Tt,$n.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&I.environment!==null&&($n.envMapIntensity.value=I.environmentIntensity),Je&&(Ae.setValue(w,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&Af($n,Ur),lt&&X.fog===!0&&At.refreshFogUniforms($n,lt),At.refreshMaterialUniforms($n,X,$,V,m.state.transmissionRenderTarget[M.id]),lr.upload(w,hc(Rt),$n,Mt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(lr.upload(w,hc(Rt),$n,Mt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ae.setValue(w,"center",N.center),Ae.setValue(w,"modelViewMatrix",N.modelViewMatrix),Ae.setValue(w,"normalMatrix",N.normalMatrix),Ae.setValue(w,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ln=X.uniformsGroups;for(let Fr=0,Rf=ln.length;Fr<Rf;Fr++){const fc=ln[Fr];ge.update(fc,fn),ge.bind(fc,fn)}}return fn}function Af(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Cf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,k){dt.get(M.texture).__webglTexture=I,dt.get(M.depthTexture).__webglTexture=k;const X=dt.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=k===void 0,X.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const k=dt.get(M);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,k=0){C=M,O=I,R=k;let X=!0,N=null,lt=!1,vt=!1;if(M){const Tt=dt.get(M);Tt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(w.FRAMEBUFFER,null),X=!1):Tt.__webglFramebuffer===void 0?Mt.setupRenderTarget(M):Tt.__hasExternalTextures&&Mt.rebindTextures(M,dt.get(M.texture).__webglTexture,dt.get(M.depthTexture).__webglTexture);const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const zt=dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[I])?N=zt[I][k]:N=zt[I],lt=!0):M.samples>0&&Mt.useMultisampledRTT(M)===!1?N=dt.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[k]:N=zt,y.copy(M.viewport),L.copy(M.scissor),G=M.scissorTest}else y.copy(yt).multiplyScalar($).floor(),L.copy(xt).multiplyScalar($).floor(),G=Gt;if(j.bindFramebuffer(w.FRAMEBUFFER,N)&&X&&j.drawBuffers(M,N),j.viewport(y),j.scissor(L),j.setScissorTest(G),lt){const Tt=dt.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,Tt.__webglTexture,k)}else if(vt){const Tt=dt.get(M.texture),Nt=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Tt.__webglTexture,k||0,Nt)}D=-1},this.readRenderTargetPixels=function(M,I,k,X,N,lt,vt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){j.bindFramebuffer(w.FRAMEBUFFER,wt);try{const Tt=M.texture,Nt=Tt.format,zt=Tt.type;if(!ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-X&&k>=0&&k<=M.height-N&&w.readPixels(I,k,X,N,Ft.convert(Nt),Ft.convert(zt),lt)}finally{const Tt=C!==null?dt.get(C).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,I,k,X,N,lt,vt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){j.bindFramebuffer(w.FRAMEBUFFER,wt);try{const Tt=M.texture,Nt=Tt.format,zt=Tt.type;if(!ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-X&&k>=0&&k<=M.height-N){const Lt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.bufferData(w.PIXEL_PACK_BUFFER,lt.byteLength,w.STREAM_READ),w.readPixels(I,k,X,N,Ft.convert(Nt),Ft.convert(zt),0),w.flush();const re=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await kd(w,re,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Lt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,lt)}finally{w.deleteBuffer(Lt),w.deleteSync(re)}return lt}}finally{const Tt=C!==null?dt.get(C).__webglFramebuffer:null;j.bindFramebuffer(w.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(M,I=null,k=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const X=Math.pow(2,-k),N=Math.floor(M.image.width*X),lt=Math.floor(M.image.height*X),vt=I!==null?I.x:0,wt=I!==null?I.y:0;Mt.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,vt,wt,N,lt),j.unbindTexture()},this.copyTextureToTexture=function(M,I,k=null,X=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],I=arguments[2],N=arguments[3]||0,k=null);let lt,vt,wt,Tt,Nt,zt;k!==null?(lt=k.max.x-k.min.x,vt=k.max.y-k.min.y,wt=k.min.x,Tt=k.min.y):(lt=M.image.width,vt=M.image.height,wt=0,Tt=0),X!==null?(Nt=X.x,zt=X.y):(Nt=0,zt=0);const Lt=Ft.convert(I.format),re=Ft.convert(I.type);Mt.setTexture2D(I,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const Me=w.getParameter(w.UNPACK_ROW_LENGTH),Ee=w.getParameter(w.UNPACK_IMAGE_HEIGHT),$e=w.getParameter(w.UNPACK_SKIP_PIXELS),ae=w.getParameter(w.UNPACK_SKIP_ROWS),Rt=w.getParameter(w.UNPACK_SKIP_IMAGES),Be=M.isCompressedTexture?M.mipmaps[N]:M.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Be.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Be.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Tt),M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Nt,zt,lt,vt,Lt,re,Be.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Nt,zt,Be.width,Be.height,Lt,Be.data):w.texSubImage2D(w.TEXTURE_2D,N,Nt,zt,lt,vt,Lt,re,Be),w.pixelStorei(w.UNPACK_ROW_LENGTH,Me),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ee),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$e),w.pixelStorei(w.UNPACK_SKIP_ROWS,ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Rt),N===0&&I.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(M,I,k=null,X=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,X=arguments[1]||null,M=arguments[2],I=arguments[3],N=arguments[4]||0);let lt,vt,wt,Tt,Nt,zt,Lt,re,Me;const Ee=M.isCompressedTexture?M.mipmaps[N]:M.image;k!==null?(lt=k.max.x-k.min.x,vt=k.max.y-k.min.y,wt=k.max.z-k.min.z,Tt=k.min.x,Nt=k.min.y,zt=k.min.z):(lt=Ee.width,vt=Ee.height,wt=Ee.depth,Tt=0,Nt=0,zt=0),X!==null?(Lt=X.x,re=X.y,Me=X.z):(Lt=0,re=0,Me=0);const $e=Ft.convert(I.format),ae=Ft.convert(I.type);let Rt;if(I.isData3DTexture)Mt.setTexture3D(I,0),Rt=w.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Mt.setTexture2DArray(I,0),Rt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const Be=w.getParameter(w.UNPACK_ROW_LENGTH),le=w.getParameter(w.UNPACK_IMAGE_HEIGHT),fn=w.getParameter(w.UNPACK_SKIP_PIXELS),Bi=w.getParameter(w.UNPACK_SKIP_ROWS),Je=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ee.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ee.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Nt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zt),M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Rt,N,Lt,re,Me,lt,vt,wt,$e,ae,Ee.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,N,Lt,re,Me,lt,vt,wt,$e,Ee.data):w.texSubImage3D(Rt,N,Lt,re,Me,lt,vt,wt,$e,ae,Ee),w.pixelStorei(w.UNPACK_ROW_LENGTH,Be),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,le),w.pixelStorei(w.UNPACK_SKIP_PIXELS,fn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Je),N===0&&I.generateMipmaps&&w.generateMipmap(Rt),j.unbindTexture()},this.initRenderTarget=function(M){dt.get(M).__webglFramebuffer===void 0&&Mt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Mt.setTextureCube(M,0):M.isData3DTexture?Mt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Mt.setTexture2DArray(M,0):Mt.setTexture2D(M,0),j.unbindTexture()},this.resetState=function(){O=0,R=0,C=null,j.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Rl?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===wr?"display-p3":"srgb"}}class Ar{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new Ar(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class j_ extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $_ extends ke{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ze,h=Ze,u,f){super(null,r,a,l,c,h,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hh extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new ue,uh=new ue,Wo=[],fh=new Fi,J_=new ue,Ls=new at,Ds=new co;class Q_ extends at{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,J_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),fh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(fh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new co),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Ds.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ss),uh.multiplyMatrices(n,ss),Ls.matrixWorld=uh,Ls.raycast(t,Wo);for(let r=0,a=Wo.length;r<a;r++){const l=Wo[r];l.instanceId=o,l.object=this,e.push(l)}Wo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $_(new Float32Array(s*this.count),s,this.count,wl,Pn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class tx extends ke{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],f=n[s+1]-h,d=(r-h)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new et:new P);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],o=[],r=[],a=new P,l=new ue;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}o[0]=new P,r[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Le(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Le(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ul extends In{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ex extends Ul{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let f=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+u)+(l-a)/u;f*=h,d*=h,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Zo=new P,ha=new Nl,ua=new Nl,fa=new Nl;class Fl extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Zo.subVectors(s[0],s[1]).add(s[0]),c=Zo);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Zo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ha.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),ua.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),fa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ua.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),fa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ha.calc(l),ua.calc(l),fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function nx(i,t){const e=1-i;return e*e*t}function ix(i,t){return 2*(1-i)*i*t}function sx(i,t){return i*i*t}function Zs(i,t,e,n){return nx(i,t)+ix(i,e)+sx(i,n)}function ox(i,t){const e=1-i;return e*e*e*t}function rx(i,t){const e=1-i;return 3*e*e*i*t}function ax(i,t){return 3*(1-i)*i*i*t}function lx(i,t){return i*i*i*t}function qs(i,t,e,n,s){return ox(i,t)+rx(i,e)+ax(i,n)+lx(i,s)}class Mu extends In{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(qs(t,s.x,o.x,r.x,a.x),qs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cx extends In{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(qs(t,s.x,o.x,r.x,a.x),qs(t,s.y,o.y,r.y,a.y),qs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eu extends In{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hx extends In{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bu extends In{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Zs(t,s.x,o.x,r.x),Zs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends In{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Zs(t,s.x,o.x,r.x),Zs(t,s.y,o.y,r.y),Zs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(dh(a,l.x,c.x,h.x,u.x),dh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var _r=Object.freeze({__proto__:null,ArcCurve:ex,CatmullRomCurve3:Fl,CubicBezierCurve:Mu,CubicBezierCurve3:cx,EllipseCurve:Ul,LineCurve:Eu,LineCurve3:hx,QuadraticBezierCurve:bu,QuadraticBezierCurve3:wu,SplineCurve:Tu});class ux extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _r[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _r[s.type]().fromJSON(s))}return this}}class tl extends ux{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Eu(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new bu(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Mu(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Ul(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cr extends je{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Le(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new P,f=new et,d=new P,g=new P,x=new P;let m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let T=0;T<=e;T++){const S=n+T*h*s,E=Math.sin(S),O=Math.cos(S);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*E,u.y=t[R].y,u.z=t[R].x*O,r.push(u.x,u.y,u.z),f.x=T/e,f.y=R/(t.length-1),a.push(f.x,f.y);const C=l[3*R+0]*E,D=l[3*R+1],b=l[3*R+0]*O;c.push(C,D,b)}}for(let T=0;T<e;T++)for(let S=0;S<t.length-1;S++){const E=S+T*t.length,O=E,R=E+t.length,C=E+t.length+1,D=E+1;o.push(O,R,D),o.push(C,D,R)}this.setIndex(o),this.setAttribute("position",new xe(r,3)),this.setAttribute("uv",new xe(a,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.points,t.segments,t.phiStart,t.phiLength)}}class Bl extends Cr{constructor(t=1,e=1,n=4,s=8){const o=new tl;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Bl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Vt extends je{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;T(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(d,2));function T(){const E=new P,O=new P;let R=0;const C=(e-t)/n;for(let D=0;D<=o;D++){const b=[],y=D/o,L=y*(e-t)+t;for(let G=0;G<=s;G++){const B=G/s,W=B*l+a,q=Math.sin(W),V=Math.cos(W);O.x=L*q,O.y=-y*n+m,O.z=L*V,u.push(O.x,O.y,O.z),E.set(q,C,V).normalize(),f.push(E.x,E.y,E.z),d.push(B,1-y),b.push(g++)}x.push(b)}for(let D=0;D<s;D++)for(let b=0;b<o;b++){const y=x[b][D],L=x[b+1][D],G=x[b+1][D+1],B=x[b][D+1];h.push(y,L,B),h.push(L,G,B),R+=6}c.addGroup(p,R,0),p+=R}function S(E){const O=g,R=new et,C=new P;let D=0;const b=E===!0?t:e,y=E===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const L=g;for(let G=0;G<=s;G++){const W=G/s*l+a,q=Math.cos(W),V=Math.sin(W);C.x=b*V,C.y=m*y,C.z=b*q,u.push(C.x,C.y,C.z),f.push(0,y,0),R.x=q*.5+.5,R.y=V*.5*y+.5,d.push(R.x,R.y),g++}for(let G=0;G<s;G++){const B=O+G,W=L+G;E===!0?h.push(W,W+1,B):h.push(W+1,W,B),D+=3}c.addGroup(p,D,E===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Es extends tl{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new tl().fromJSON(s))}return this}}const fx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Au(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,f,d;if(n&&(o=_x(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return no(o,r,e,a,l,d,0),r}};function Au(i,t,e,n,s){let o,r;if(s===Cx(i,t,e,n)>0)for(o=t;o<e;o+=n)r=ph(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=ph(o,i[o],i[o+1],r);return r&&Rr(r,r.next)&&(so(r),r=r.next),r}function Ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Rr(e,e.next)||ye(e.prev,e,e.next)===0)){if(so(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function no(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Mx(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?px(i,n,s,o):dx(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),so(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=mx(Ii(i),t,e),no(i,t,e,n,s,o,2)):r===2&&gx(i,t,e,n,s,o):no(Ii(i),t,e,n,s,o,1);break}}}function dx(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,f=s>o?s>r?s:r:o>r?o:r,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&us(s,a,o,l,r,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function px(i,t,e,n){const s=i.prev,o=i,r=i.next;if(ye(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,f=r.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=el(d,g,t,e,n),T=el(x,m,t,e,n);let S=i.prevZ,E=i.nextZ;for(;S&&S.z>=p&&E&&E.z<=T;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&us(a,h,l,u,c,f,S.x,S.y)&&ye(S.prev,S,S.next)>=0||(S=S.prevZ,E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==r&&us(a,h,l,u,c,f,E.x,E.y)&&ye(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==r&&us(a,h,l,u,c,f,S.x,S.y)&&ye(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;E&&E.z<=T;){if(E.x>=d&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==r&&us(a,h,l,u,c,f,E.x,E.y)&&ye(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function mx(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Rr(s,o)&&Cu(s,n,n.next,o)&&io(s,o)&&io(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),so(n),so(n.next),n=i=o),n=n.next}while(n!==i);return Ii(n)}function gx(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&wx(r,a)){let l=Ru(r,a);r=Ii(r,r.next),l=Ii(l,l.next),no(r,t,e,n,s,o,0),no(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function _x(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Au(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(bx(c));for(s.sort(xx),o=0;o<s.length;o++)e=vx(s[o],e);return e}function xx(i,t){return i.x-t.x}function vx(i,t){const e=Sx(i,t);if(!e)return t;const n=Ru(e,i);return Ii(n,n.next),Ii(e,e.next)}function Sx(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&us(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),io(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&yx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function yx(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function Mx(i,t,e,n){let s=i;do s.z===0&&(s.z=el(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ex(s)}function Ex(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function el(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function us(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function wx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Tx(i,t)&&(io(i,t)&&io(t,i)&&Ax(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||Rr(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Rr(i,t){return i.x===t.x&&i.y===t.y}function Cu(i,t,e,n){const s=Ko(ye(i,t,e)),o=Ko(ye(i,t,n)),r=Ko(ye(e,n,i)),a=Ko(ye(e,n,t));return!!(s!==o&&r!==a||s===0&&qo(i,e,t)||o===0&&qo(i,n,t)||r===0&&qo(e,i,n)||a===0&&qo(e,t,n))}function qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ko(i){return i>0?1:i<0?-1:0}function Tx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function io(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function Ax(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ru(i,t){const e=new nl(i.i,i.x,i.y),n=new nl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ph(i,t,e,n){const s=new nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function so(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cx(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Ks{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];mh(t),gh(n,t);let r=t.length;e.forEach(mh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,gh(n,e[l]);const a=fx.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function mh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oe extends je{constructor(t=new Es([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Rx;let S,E=!1,O,R,C,D;p&&(S=p.getSpacedPoints(h),E=!0,f=!1,O=p.computeFrenetFrames(h,!1),R=new P,C=new P,D=new P),f||(m=0,d=0,g=0,x=0);const b=a.extractPoints(c);let y=b.shape;const L=b.holes;if(!Ks.isClockWise(y)){y=y.reverse();for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];Ks.isClockWise(nt)&&(L[w]=nt.reverse())}}const B=Ks.triangulateShape(y,L),W=y;for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];y=y.concat(nt)}function q(w,rt,nt){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(rt,nt)}const V=y.length,$=B.length;function Z(w,rt,nt){let ut,j,Pt;const dt=w.x-rt.x,Mt=w.y-rt.y,A=nt.x-w.x,v=nt.y-w.y,H=dt*dt+Mt*Mt,tt=dt*v-Mt*A;if(Math.abs(tt)>Number.EPSILON){const Q=Math.sqrt(H),J=Math.sqrt(A*A+v*v),At=rt.x-Mt/Q,ct=rt.y+dt/Q,_t=nt.x-v/J,Ht=nt.y+A/J,ot=((_t-At)*v-(Ht-ct)*A)/(dt*v-Mt*A);ut=At+dt*ot-w.x,j=ct+Mt*ot-w.y;const gt=ut*ut+j*j;if(gt<=2)return new et(ut,j);Pt=Math.sqrt(gt/2)}else{let Q=!1;dt>Number.EPSILON?A>Number.EPSILON&&(Q=!0):dt<-Number.EPSILON?A<-Number.EPSILON&&(Q=!0):Math.sign(Mt)===Math.sign(v)&&(Q=!0),Q?(ut=-Mt,j=dt,Pt=Math.sqrt(H)):(ut=dt,j=Mt,Pt=Math.sqrt(H/2))}return new et(ut/Pt,j/Pt)}const mt=[];for(let w=0,rt=W.length,nt=rt-1,ut=w+1;w<rt;w++,nt++,ut++)nt===rt&&(nt=0),ut===rt&&(ut=0),mt[w]=Z(W[w],W[nt],W[ut]);const yt=[];let xt,Gt=mt.concat();for(let w=0,rt=L.length;w<rt;w++){const nt=L[w];xt=[];for(let ut=0,j=nt.length,Pt=j-1,dt=ut+1;ut<j;ut++,Pt++,dt++)Pt===j&&(Pt=0),dt===j&&(dt=0),xt[ut]=Z(nt[ut],nt[Pt],nt[dt]);yt.push(xt),Gt=Gt.concat(xt)}for(let w=0;w<m;w++){const rt=w/m,nt=d*Math.cos(rt*Math.PI/2),ut=g*Math.sin(rt*Math.PI/2)+x;for(let j=0,Pt=W.length;j<Pt;j++){const dt=q(W[j],mt[j],ut);ht(dt.x,dt.y,-nt)}for(let j=0,Pt=L.length;j<Pt;j++){const dt=L[j];xt=yt[j];for(let Mt=0,A=dt.length;Mt<A;Mt++){const v=q(dt[Mt],xt[Mt],ut);ht(v.x,v.y,-nt)}}}const te=g+x;for(let w=0;w<V;w++){const rt=f?q(y[w],Gt[w],te):y[w];E?(C.copy(O.normals[0]).multiplyScalar(rt.x),R.copy(O.binormals[0]).multiplyScalar(rt.y),D.copy(S[0]).add(C).add(R),ht(D.x,D.y,D.z)):ht(rt.x,rt.y,0)}for(let w=1;w<=h;w++)for(let rt=0;rt<V;rt++){const nt=f?q(y[rt],Gt[rt],te):y[rt];E?(C.copy(O.normals[w]).multiplyScalar(nt.x),R.copy(O.binormals[w]).multiplyScalar(nt.y),D.copy(S[w]).add(C).add(R),ht(D.x,D.y,D.z)):ht(nt.x,nt.y,u/h*w)}for(let w=m-1;w>=0;w--){const rt=w/m,nt=d*Math.cos(rt*Math.PI/2),ut=g*Math.sin(rt*Math.PI/2)+x;for(let j=0,Pt=W.length;j<Pt;j++){const dt=q(W[j],mt[j],ut);ht(dt.x,dt.y,u+nt)}for(let j=0,Pt=L.length;j<Pt;j++){const dt=L[j];xt=yt[j];for(let Mt=0,A=dt.length;Mt<A;Mt++){const v=q(dt[Mt],xt[Mt],ut);E?ht(v.x,v.y+S[h-1].y,S[h-1].x+nt):ht(v.x,v.y,u+nt)}}}K(),st();function K(){const w=s.length/3;if(f){let rt=0,nt=V*rt;for(let ut=0;ut<$;ut++){const j=B[ut];It(j[2]+nt,j[1]+nt,j[0]+nt)}rt=h+m*2,nt=V*rt;for(let ut=0;ut<$;ut++){const j=B[ut];It(j[0]+nt,j[1]+nt,j[2]+nt)}}else{for(let rt=0;rt<$;rt++){const nt=B[rt];It(nt[2],nt[1],nt[0])}for(let rt=0;rt<$;rt++){const nt=B[rt];It(nt[0]+V*h,nt[1]+V*h,nt[2]+V*h)}}n.addGroup(w,s.length/3-w,0)}function st(){const w=s.length/3;let rt=0;Et(W,rt),rt+=W.length;for(let nt=0,ut=L.length;nt<ut;nt++){const j=L[nt];Et(j,rt),rt+=j.length}n.addGroup(w,s.length/3-w,1)}function Et(w,rt){let nt=w.length;for(;--nt>=0;){const ut=nt;let j=nt-1;j<0&&(j=w.length-1);for(let Pt=0,dt=h+m*2;Pt<dt;Pt++){const Mt=V*Pt,A=V*(Pt+1),v=rt+ut+Mt,H=rt+j+Mt,tt=rt+j+A,Q=rt+ut+A;Xt(v,H,tt,Q)}}}function ht(w,rt,nt){l.push(w),l.push(rt),l.push(nt)}function It(w,rt,nt){Dt(w),Dt(rt),Dt(nt);const ut=s.length/3,j=T.generateTopUV(n,s,ut-3,ut-2,ut-1);Qt(j[0]),Qt(j[1]),Qt(j[2])}function Xt(w,rt,nt,ut){Dt(w),Dt(rt),Dt(ut),Dt(rt),Dt(nt),Dt(ut);const j=s.length/3,Pt=T.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);Qt(Pt[0]),Qt(Pt[1]),Qt(Pt[3]),Qt(Pt[1]),Qt(Pt[2]),Qt(Pt[3])}function Dt(w){s.push(l[w*3+0]),s.push(l[w*3+1]),s.push(l[w*3+2])}function Qt(w){o.push(w.x),o.push(w.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Px(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _r[s.type]().fromJSON(s)),new Oe(n,t.options)}}const Rx={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(o,r),new et(a,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new et(r,1-l),new et(c,1-u),new et(f,1-g),new et(x,1-p)]:[new et(a,1-l),new et(h,1-u),new et(d,1-g),new et(m,1-p)]}};function Px(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yn extends je{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const T=[],S=p/n;let E=0;p===0&&r===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let O=0;O<=e;O++){const R=O/e;u.x=-t*Math.cos(s+R*o)*Math.sin(r+S*a),u.y=t*Math.cos(r+S*a),u.z=t*Math.sin(s+R*o)*Math.sin(r+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(R+E,1-S),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const S=h[p][T+1],E=h[p][T],O=h[p+1][T],R=h[p+1][T+1];(p!==0||r>0)&&d.push(S,E,R),(p!==n-1||l<Math.PI)&&d.push(E,O,R)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ys extends je{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*o,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;r.push(x,m,T),r.push(m,p,T)}this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oo extends je{constructor(t=new wu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new P,l=new P,c=new et;let h=new P;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(d,2));function x(){for(let S=0;S<e;S++)m(S);m(o===!1?e:0),T(),p()}function m(S){h=t.getPointAt(S/e,h);const E=r.normals[S],O=r.binormals[S];for(let R=0;R<=s;R++){const C=R/s*Math.PI*2,D=Math.sin(C),b=-Math.cos(C);l.x=b*E.x+D*O.x,l.y=b*E.y+D*O.y,l.z=b*E.z+D*O.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let E=1;E<=s;E++){const O=(s+1)*(S-1)+(E-1),R=(s+1)*S+(E-1),C=(s+1)*S+E,D=(s+1)*(S-1)+E;g.push(O,R,D),g.push(R,C,D)}}function T(){for(let S=0;S<=e;S++)for(let E=0;E<=s;E++)c.x=S/e,c.y=E/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new oo(new _r[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class St extends ho{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zl extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lx extends zl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const da=new ue,_h=new P,xh=new P;class Pu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xh),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vh=new ue,Is=new P,pa=new P;class Dx extends Pu{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),n.position.copy(Is),pa.copy(n.position),pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pa),n.updateMatrixWorld(),s.makeTranslation(-Is.x,-Is.y,-Is.z),vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh)}}class Lu extends zl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ix extends Pu{constructor(){super(new gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends zl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Ix}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const yh=new ue;class Ox{constructor(t,e,n=0,s=1/0){this.ray=new Ll(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,n=[]){return il(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)il(t[s],this,n,e);return n.sort(Mh),n}}function Mh(i,t){return i.distance-t.distance}function il(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)il(o[r],t,e,!0)}}class Eh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);function Ux(i){const t=document.createElement("aside");return t.className="control-panel",t.innerHTML=`<h2>${i}</h2>`,t}function Pr(i,t,e,n){const s=document.createElement("div");s.className="control-row";const o=document.createElement("label");o.textContent=t;const r=document.createElement("input");r.type="checkbox",r.checked=e,r.style.justifySelf="start";const a=document.createElement("output");return a.textContent=e?"on":"off",r.addEventListener("change",()=>{a.textContent=r.checked?"on":"off",n(r.checked)}),s.append(o,r,a),i.appendChild(s),s}function Nx(i,t,e,n,s,o,r){const a=ee(t,e,n,s,o,r);return i.appendChild(a),a}function ee(i,t,e,n,s,o){const r=document.createElement("div");r.className="control-row";const a=String(n).includes(".")?String(n).split(".")[1].replace(/0+$/,"").length:0,l=f=>Number(f).toFixed(Math.max(0,a)),c=document.createElement("label");c.textContent=i;const h=document.createElement("input");h.type="range",h.min=String(t),h.max=String(e),h.step=String(n),h.value=String(s);const u=document.createElement("output");return u.value=l(s),u.textContent=u.value,h.addEventListener("input",()=>{const f=Number(h.value);u.value=l(f),u.textContent=u.value,o(f)}),r.append(c,h,u),r}function mi(i,t,e){const n=document.createElement("div");n.className="control-row";const s=document.createElement("label");s.textContent=i;const o=document.createElement("input");o.type="color",o.value=t;const r=document.createElement("output");return r.value=t,r.textContent=t,o.addEventListener("input",()=>{r.value=o.value,r.textContent=o.value,e(o.value)}),n.append(s,o,r),n}function Fx(i,t,e){const n=document.createElement("div");n.className="control-row";const s=document.createElement("label");s.textContent=i;const o=document.createElement("input");o.type="text",o.value=t;const r=document.createElement("output");return r.textContent="",o.addEventListener("input",()=>{e(o.value)}),n.append(s,o,r),n}function oe(i,t,e=!0){const n=document.createElement("section");n.className="control-group";const s=document.createElement("details");s.open=!e;const o=document.createElement("summary"),r=document.createElement("h3");r.textContent=t,o.appendChild(r);const a=document.createElement("div");return a.className="control-body",s.append(o,a),n.appendChild(s),i.appendChild(n),a}function Du(i,t,e=!0){return oe(i,t,e)}function Bx(i,t,e=!0){const n=oe(i,"Papers",e);t.forEach(({title:s,mesh:o,config:r,applyPaperTransform:a})=>{const l=document.createElement("h3");l.textContent=s,l.style.margin="4px 0 8px",l.style.fontSize="13px",n.appendChild(l),[["x",-3,3,.01],["y",-2,2,.01],["z",-.3,.5,.01],["rotX",-35,5,.5],["rotZ",-40,40,.5]].forEach(([h,u,f,d])=>{n.appendChild(ee(h,u,f,d,r[h],g=>{r[h]=g,a(o,r)}))})})}function zx(i,t,e=!0){const n=oe(i,"Pins",e);t.forEach(({title:s,config:o,applyPinTransform:r})=>{const a=document.createElement("h3");a.textContent=s,a.style.margin="4px 0 8px",a.style.fontSize="13px",n.appendChild(a),[["x",-3,3,.01],["y",-2,2,.01],["z",-2,2,.01],["topRadius",.08,.4,.01],["topHeight",.03,.2,.01],["stemRadius",.04,.2,.01],["stemHeight",.08,.5,.01],["baseRadius",.08,.4,.01],["baseHeight",.03,.2,.01],["pinRadius",.005,.05,.005],["pinHeight",.08,.5,.01],["pinInset",0,.3,.01]].forEach(([c,h,u,f])=>{n.appendChild(ee(c,h,u,f,o[c],d=>{o[c]=d,r()}))})})}function Hx(i,t,e,n=!1){const s=oe(i,"Lighting",n);[["ambient",0,4,.05],["key",0,2,.05],["fill",0,3,.05],["front",0,2,.05],["shadowRadius",0,30,1],["blurSamples",0,32,1],["bias",-.002,.002,5e-5],["normalBias",0,.05,.001]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function kx(i,t,e,n=!0){const s=oe(i,"Camera",n);[["x",-30,30,.01],["y",-30,30,.01],["z",-30,30,.01],["targetX",-20,20,.01],["targetY",-20,20,.01],["targetZ",-20,20,.01],["panX",-10,10,.01],["panY",-10,10,.01],["mouseXAmount",-10,10,.01],["mouseYAmount",-10,10,.01],["mouseSmooth",.005,.2,.005],["fov",10,90,1]].forEach(([a,l,c,h])=>{s.appendChild(ee(a,l,c,h,t[a],u=>{t[a]=u,e()}))}),[["mouseXCamera","Mouse X Camera"],["mouseXTarget","Mouse X Target"],["mouseYCamera","Mouse Y Camera"],["mouseYTarget","Mouse Y Target"]].forEach(([a,l])=>{s.appendChild(Pr(document.createDocumentFragment(),l,t[a],c=>{t[a]=c,e()}))})}function Xx(i,t,e,n=!0){const s=oe(i,"Floor",n);[["x",-20,20,.01],["y",-20,20,.01],["z",-20,20,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",1,40,.01],["height",1,40,.01],["tone",.4,1.8,.01],["roughness",0,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Gx(i,t,e,n=!0){const s=oe(i,"Rug",n);[["x",-20,20,.01],["y",-20,20,1e-4],["z",-20,20,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",1,30,.01],["height",1,30,.01],["depth",.01,.2,.001],["radius",.05,2,.01],["inset1",.05,5,.01],["inset2",.05,8,.01],["inset3",.05,12,.01],["radiusFalloff",0,.5,.005],["layerLift",0,.02,.001]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Vx(i,t,e,n=!1){const s=oe(i,"Board",n);[["x",-5,5,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-45,45,.5],["rotY",-45,45,.5],["rotZ",-45,45,.5]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Yx(i,t,e,n=!0){const s=oe(i,"Shelf",n);[["x",-8,8,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.4,4,.01],["height",.1,1.5,.01],["depth",.05,.8,.01],["radius",.01,.4,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Wx(i,t,e,n=!0){const s=oe(i,"Pot",n);[["x",-3,3,.01],["y",-3,3,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["radius",.08,.8,.01],["height",.1,1.2,.01],["neck",.02,.5,.01],["bulge",.5,1.8,.01],["soilRadius",.02,.6,.01],["soilHeight",.01,.6,.01],["soilOffsetY",-.2,.2,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Zx(i,t,e,n=!0){const s=oe(i,"Cactus",n);[["x",-2,2,.01],["y",-2,2,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["mainRadius",.02,.5,.01],["mainHeight",.1,1.5,.01],["mainLean",-.5,.5,.01],["armRadius",.02,.4,.01],["armHeight",.05,1,.01],["armOffsetX",-1,1,.01],["armOffsetY",-1,1,.01],["armLean",-1,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function qx(i,t,e=!0){const n=oe(i,"Books",e),s=[["x",-3,3,.01],["y",-3,3,.01],["z",-1,1,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.05,1,.01],["height",.1,2,.01],["depth",.05,1,.01],["pagesX",-1,1,.01],["pagesY",-1,1,.01],["pagesZ",-1,1,.01],["pagesWidth",.01,1,.01],["pagesHeight",.01,2,.01],["pagesDepth",.01,1,.01],["spineX",-1,1,.01],["spineY",-1,1,.01],["spineZ",-1,1,.01],["spineWidth",.01,1,.01],["spineHeight",.01,2,.01],["spineDepth",.01,1,.01],["spineRotY",-180,180,.5]];t.forEach(({title:o,config:r,applyBookTransform:a})=>{const l=document.createElement("h3");l.textContent=o,l.style.margin="4px 0 8px",l.style.fontSize="13px",n.appendChild(l),s.forEach(([c,h,u,f])=>{n.appendChild(ee(c,h,u,f,r[c],d=>{r[c]=d,a()}))})})}function Kx(i,t,e,n=!0){const s=oe(i,"Picture",n);[["x",-10,10,.01],["y",-5,5,.01],["z",-5,5,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.5,4,.01],["height",.3,3,.01],["depth",.02,.5,.01],["innerInset",.02,.4,.01],["sunX",-1,1,.01],["sunY",-1,1,.01],["sunRadius",.02,.6,.01],["mountainAX",-1.5,1.5,.01],["mountainAY",-1.5,1.5,.01],["mountainAScaleX",.1,3,.01],["mountainAScaleY",.1,3,.01],["mountainAScaleZ",.1,3,.01],["mountainAWidth",.05,2,.01],["mountainAHeight",.05,2,.01],["mountainARotZ",-180,180,.5],["mountainBX",-1.5,1.5,.01],["mountainBY",-1.5,1.5,.01],["mountainBScaleX",.1,3,.01],["mountainBScaleY",.1,3,.01],["mountainBScaleZ",.1,3,.01],["mountainBWidth",.05,2,.01],["mountainBHeight",.05,2,.01],["mountainBRotZ",-180,180,.5]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function jx(i,t,e,n=!0){const s=oe(i,"Desk",n);[["x",-10,10,.01],["y",-5,5,.01],["z",-10,10,.01],["topX",-3,3,.01],["topY",-3,3,.01],["topZ",-3,3,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["mainWidth",1,10,.01],["mainDepth",.5,5,.01],["returnWidth",.5,5,.01],["returnDepth",.5,8,.01],["innerCut",.1,6,.01],["thickness",.02,.5,.01],["radius",.02,.8,.01],["legHeight",.2,3,.01],["legRadius",.02,.3,.01],["legInset",.05,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Iu(i,t,e,n,s=!0){const o=oe(i,t,s);[["x",-10,10,.001],["y",-2,2,1e-4],["z",-10,10,.001],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.5,8,.01],["height",.5,6,.01],["depth",.02,1,.01],["radius",.02,1,.01],["screenInset",.02,1,.01],["screenDepth",.01,.3,.01],["screenGlow",0,2,.01],["standWidth",.05,1.5,.01],["standHeight",.05,2.5,.01],["standDepth",.05,2,.01],["standOffsetZ",-2,2,.01],["standRotX",-180,180,.5],["standRotZ",-180,180,.5],["baseWidth",.1,3,.01],["baseHeight",.02,.5,.01],["baseDepth",.1,3,.01],["baseOffsetY",-2,2,.01],["baseOffsetZ",-2,2,.01],["baseRotX",-180,180,.5],["baseRotZ",-180,180,.5],["lineGap",.05,.4,.01]].forEach(([l,c,h,u])=>{o.appendChild(ee(l,c,h,u,e[l],f=>{e[l]=f,n()}))}),["screenColor","screenGlowColor"].forEach(l=>{o.appendChild(mi(l,e[l],c=>{e[l]=c,n()}))}),(e.screenMode==="ui"?[["uiSidebarWidth",.01,.5,.001],["uiSidebarX",-2,2,.001],["uiPanelWidth",.01,.5,.001],["uiPanelX",-2,2,.001],["uiTopIconWidth",.05,1,.001],["uiTopIconX",-2,2,.001],["uiTopIconY",-2,2,.001],["uiIconWidth",.05,1,.001],["uiIconX",-2,2,.001],["uiIconStartY",-2,2,.001],["uiIconGap",.01,1,.001],["uiDotX",-2,2,.001],["uiDotY",-2,2,.001],["uiLinesWidthScale",.1,3,.001],["uiLinesX",-2,2,.001],["uiLinesY",-2,2,.001],["uiLineGap",.01,1,.001]]:[["codeX",-2,2,.001],["codeY",-2,2,.001]]).forEach(([l,c,h,u])=>{o.appendChild(ee(l,c,h,u,e[l],f=>{e[l]=f,n()}))})}function $x(i,t,e,n=!0){const s=oe(i,"Floor Pot",n);[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["radius",.1,2,.01],["height",.1,3,.01],["neck",.05,1,.01],["bulge",.4,2,.01],["bandRadiusTop",.1,2,.01],["bandRadiusBottom",.1,2,.01],["bandHeight",.02,1,.01],["bandY",-2,2,.01],["bottomBandRadiusTop",.1,2,.01],["bottomBandRadiusBottom",.1,2,.01],["bottomBandHeight",.02,1,.01],["bottomBandY",-2,2,.01],["soilRadius",.05,2,.01],["soilHeight",.01,1,.01],["soilY",-2,2,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Jx(i,t,e,n=!0){const s=oe(i,"Floor Plant",n);[["x",-2,2,.01],["y",-2,2,.01],["z",-2,2,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["depth",.01,.3,.01],["bevelSize",.001,.2,.001],["bevelThickness",.01,1,.01],["bodyBulge",0,1,.01],["ridgeBulge",0,1,.01],["ridgeWidth",.05,1,.01],["centerWidth",.1,2,.01],["centerHeight",.1,4,.01],["centerX",-2,2,.01],["centerY",-2,2,.01],["centerZ",-2,2,.01],["centerRotX",-180,180,.5],["centerRotY",-180,180,.5],["centerRotZ",-180,180,.5],["leftWidth",.1,2,.01],["leftHeight",.1,4,.01],["leftX",-2,2,.01],["leftY",-2,2,.01],["leftZ",-2,2,.01],["leftRotX",-180,180,.5],["leftRotY",-180,180,.5],["leftRotZ",-180,180,.5],["rightWidth",.1,2,.01],["rightHeight",.1,4,.01],["rightX",-2,2,.01],["rightY",-2,2,.01],["rightZ",-2,2,.01],["rightRotX",-180,180,.5],["rightRotY",-180,180,.5],["rightRotZ",-180,180,.5]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function Qx(i,t,e,n=!0){const s=oe(i,"Floor Lamp",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Parts",fields:[["baseRadius",.05,1,.01],["baseHeight",.01,.4,.01],["baseY",-1,1,.01],["poleRadius",.005,.2,.005],["poleHeight",.5,6,.01],["shadeX",-1,1,.01],["shadeY",0,6,.01],["shadeZ",-1,1,.01],["shadeRotX",-180,180,.5],["shadeRotY",-180,180,.5],["shadeRotZ",-180,180,.5],["shadeTopRadius",.05,2,.01],["shadeBottomRadius",.05,2,.01],["shadeHeight",.05,2,.01],["bulbX",-1,1,.01],["bulbY",0,6,.01],["bulbZ",-1,1,.01],["bulbRadius",.02,.5,.01]]},{title:"Light",fields:[["lightX",-2,2,.01],["lightY",0,6,.01],["lightZ",-2,2,.01],["lightIntensity",0,5,.01],["lightDistance",0,20,.1],["lightDecay",0,4,.05],["shadeGlow",0,3,.01],["shadeOpacity",0,1,.01],["bulbGlow",0,5,.01]]}].forEach(a=>{const l=document.createElement("h3");l.textContent=a.title,l.style.margin="4px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.fields.forEach(([c,h,u,f])=>{s.appendChild(ee(c,h,u,f,t[c],d=>{t[c]=d,e()}))})}),[["baseColor","baseColor"],["poleColor","poleColor"],["shadeColor","shadeColor"],["shadeGlowColor","shadeGlowColor"],["bulbColor","bulbColor"],["bulbGlowColor","bulbGlowColor"],["lightColor","lightColor"]].forEach(([a,l])=>{s.appendChild(mi(l,t[a],c=>{t[a]=c,e()}))})}function tv(i,t,e,n=!0){const s=oe(i,"Keyboard",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.2,3,.01],["height",.1,1,.01],["depth",.01,.3,.01],["radius",.01,.3,.01],["keyDepth",.001,.05,.001],["keyWidthScale",.1,1.2,.01],["keyHeightScale",.1,1.2,.01],["keyCols",1,20,1],["keyRows",1,10,1]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function ev(i,t,e,n=!0){const s=oe(i,"Mouse",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.05,1,.01],["height",.05,1,.01],["depth",.01,.3,.01],["radius",.01,.3,.01],["splitHeight",.1,2,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function nv(i,t,e,n=!0){const s=oe(i,"Speaker",n);[["x",-10,10,.01],["y",-5,0,.001],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["width",.1,2,.01],["height",.1,2,.01],["depth",.05,1,.01],["radius",.01,.3,.01],["panelWidth",.05,1.5,.01],["panelHeight",.05,1.5,.01],["panelDepth",.01,.2,.01],["panelRadius",.01,.2,.01],["panelX",-1,1,.01],["panelY",-1,1,.01],["panelZ",-1,1,.01],["coneRadius",.05,.8,.01],["coneDepth",.01,.2,.01],["coneX",-1,1,.01],["coneY",-1,1,.01],["coneZ",-1,1,.01],["smallConeRadius",.01,.4,.01],["smallConeDepth",.005,.1,.005],["smallConeX",-1,1,.01],["smallConeY",-1,1,.01],["smallConeZ",-1,1,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))})}function iv(i,t,e,n=!0){const s=oe(i,"Mug",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Body",fields:[["topRadius",.05,1,.01],["bottomRadius",.05,1,.01],["height",.05,1.5,.01]],colors:["bodyColor"]},{title:"Coffee",fields:[["coffeeRadius",.02,1,.01],["coffeeDepth",.005,.2,.005],["coffeeOffsetY",-.2,.2,.005]],colors:["coffeeColor"]},{title:"Handle",fields:[["handleX",-1,1,.01],["handleY",-1,1,.01],["handleZ",-1,1,.01],["handleRotX",-180,180,.5],["handleRotY",-180,180,.5],["handleRotZ",-180,180,.5],["handleRadius",.03,1,.01],["handleTube",.005,.2,.005],["handleArc",.2,2,.01],["handleScaleX",.1,3,.01],["handleScaleY",.1,3,.01],["handleScaleZ",.1,3,.01]]},{title:"Steam",fields:[["steamCount",0,100,1],["steamHeight",.05,2,.01],["steamSpeed",0,4,.01],["steamSpread",0,1,.01],["steamOpacity",0,1,.01],["steamThickness",.001,.08,.001],["steamOffsetX",-1,1,.01],["steamOffsetY",-1,1,.01],["steamOffsetZ",-1,1,.01],["steamRotX",-180,180,.5],["steamRotY",-180,180,.5],["steamRotZ",-180,180,.5]],toggles:["steamEnabled"],colors:["steamColor"]}].forEach(({title:r,fields:a,toggles:l,colors:c})=>{const h=document.createElement("h3");h.textContent=r,h.style.margin="10px 0 8px",h.style.fontSize="13px",s.appendChild(h),a.forEach(([u,f,d,g])=>{s.appendChild(ee(u,f,d,g,t[u],x=>{t[u]=x,e()}))}),(l??[]).forEach(u=>{Pr(s,u,t[u],f=>{t[u]=f,e()})}),(c??[]).forEach(u=>{s.appendChild(mi(u,t[u],f=>{t[u]=f,e()}))})})}function sv(i,t,e,n=!0){const s=oe(i,"Phone",n);[{title:"Transform",fields:[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["scaleX",.1,3,.01],["scaleY",.1,3,.01],["scaleZ",.1,3,.01]]},{title:"Body",fields:[["width",.05,2,.01],["height",.05,2,.01],["depth",.005,.3,.005],["radius",.005,.3,.005]],colors:["bodyColor"]},{title:"Screen",fields:[["screenWidth",.02,2,.01],["screenHeight",.02,2,.01],["screenDepth",.002,.1,.002],["screenRadius",.002,.2,.002],["screenX",-1,1,.01],["screenY",-1,1,.01],["screenZ",-.2,.2,.005],["screenGlow",0,1,.01]],colors:["screenColor"]},{title:"Camera Dot",fields:[["cameraRadius",.002,.1,.002],["cameraDepth",.002,.1,.002],["cameraX",-1,1,.01],["cameraY",-1,1,.01],["cameraZ",-.2,.2,.005]],colors:["detailColor"]},{title:"Time",fields:[["timeWidth",.01,.2,.005],["timeHeight",.03,.4,.005],["timeThickness",.002,.05,.002],["timeGap",0,.1,.002],["timeX",-1,1,.01],["timeY",-1,1,.01],["timeZ",-.2,.2,.005],["timeRotX",-180,180,.5],["timeRotY",-180,180,.5],["timeRotZ",-180,180,.5],["fingerprintRadius",.005,.2,.005],["fingerprintDepth",.002,.1,.002],["fingerprintX",-1,1,.01],["fingerprintY",-1,1,.01],["fingerprintZ",-.2,.2,.005]],text:["timeText"],colors:["timeColor","fingerprintColor"]}].forEach(({title:r,fields:a,text:l,colors:c})=>{const h=document.createElement("h3");h.textContent=r,h.style.margin="10px 0 8px",h.style.fontSize="13px",s.appendChild(h),a.forEach(([u,f,d,g])=>{s.appendChild(ee(u,f,d,g,t[u],x=>{t[u]=x,e()}))}),(l??[]).forEach(u=>{s.appendChild(Fx(u,t[u],f=>{t[u]=f,e()}))}),(c??[]).forEach(u=>{s.appendChild(mi(u,t[u],f=>{t[u]=f,e()}))})})}function ov(i,t,e,n=!0){const s=oe(i,"Chair",n);[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5],["shellX",-2,2,.01],["shellY",-3,3,.01],["shellZ",-3,3,.01],["shellRotX",-180,180,.5],["shellRotY",-180,180,.5],["shellRotZ",-180,180,.5],["frameWidth",.2,4,.01],["frameDepth",.2,4,.01],["frameLift",0,3,.01],["backLegSpread",.1,3,.01],["backLegOffset",-1,2,.01],["backLegHeight",.1,3,.01],["tubeRadius",.01,.3,.01],["frameX",-2,2,.01],["frameY",-2,2,.01],["frameZ",-2,2,.01],["frameRotX",-180,180,.5],["frameRotY",-180,180,.5],["frameRotZ",-180,180,.5]].forEach(([a,l,c,h])=>{s.appendChild(ee(a,l,c,h,t[a],u=>{t[a]=u,e()}))}),[{title:"Shell Back",fields:[["shellBackWidth",.2,4,.01],["shellBackHeight",.2,4,.01],["shellBackDepth",.02,.5,.01],["shellBackRadius",.01,.4,.01],["shellBackX",-2,2,.01],["shellBackY",-2,3,.01],["shellBackZ",-2,2,.01],["shellBackRotX",-180,180,.5],["shellBackRotY",-180,180,.5],["shellBackRotZ",-180,180,.5]]},{title:"Shell Seat",fields:[["shellSeatWidth",.2,4,.01],["shellSeatHeight",.2,4,.01],["shellSeatDepth",.02,.5,.01],["shellSeatRadius",.01,.4,.01],["shellSeatX",-2,2,.01],["shellSeatY",-2,3,.01],["shellSeatZ",-2,3,.01],["shellSeatRotX",-180,180,.5],["shellSeatRotY",-180,180,.5],["shellSeatRotZ",-180,180,.5]]},{title:"Shell Bend",fields:[["shellBendWidth",.2,4,.01],["shellBendInnerRadius",.05,1.5,.01],["shellBendThickness",.02,.5,.01],["shellBendX",-2,2,.01],["shellBendY",-2,3,.01],["shellBendZ",-2,3,.01],["shellBendRotX",-180,180,.5],["shellBendRotY",-180,180,.5],["shellBendRotZ",-180,180,.5]]}].forEach(({title:a,fields:l})=>{const c=document.createElement("h3");c.textContent=a,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),l.forEach(([h,u,f,d])=>{s.appendChild(ee(h,u,f,d,t[h],g=>{t[h]=g,e()}))})})}function rv(i,t,e,n=!0){const s=oe(i,"Rotations",n);[{title:"Root",fields:[["rotX",-180,180,.5],["rotY",-180,180,.5],["rotZ",-180,180,.5]]},{title:"Torso Head",fields:[["torsoPitch",-60,60,.5],["torsoYaw",-90,90,.5],["torsoRoll",-45,45,.5],["headPitch",-60,60,.5],["headYaw",-120,120,.5],["headRoll",-45,45,.5],["eyeYaw",-1,1,.01],["eyePitch",-1,1,.01],["browTilt",-30,30,.5]]},{title:"Left Arm",fields:[["leftShoulderX",-180,180,.5],["leftShoulderY",-360,360,.5],["leftShoulderZ",-180,180,.5],["leftElbowX",-10,160,.5],["leftElbowY",-180,180,.5],["leftElbowZ",-180,180,.5],["leftWristX",-180,180,.5],["leftWristY",-180,180,.5],["leftWristZ",-180,180,.5]]},{title:"Right Arm",fields:[["rightShoulderX",-180,180,.5],["rightShoulderY",-360,360,.5],["rightShoulderZ",-180,180,.5],["rightElbowX",-10,160,.5],["rightElbowY",-180,180,.5],["rightElbowZ",-180,180,.5],["rightWristX",-180,180,.5],["rightWristY",-180,180,.5],["rightWristZ",-180,180,.5]]},{title:"Left Leg",fields:[["leftHipX",-180,180,.5],["leftHipY",-180,180,.5],["leftHipZ",-180,180,.5],["leftKneeX",-10,160,.5],["leftAnkleX",-60,60,.5]]},{title:"Right Leg",fields:[["rightHipX",-180,180,.5],["rightHipY",-180,180,.5],["rightHipZ",-180,180,.5],["rightKneeX",-10,160,.5],["rightAnkleX",-60,60,.5]]}].forEach(({title:r,fields:a})=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,u,f])=>{s.appendChild(ee(c,h,u,f,t[c],d=>{t[c]=d,e()}))})})}function av(i,t,e,n=!0){const s=oe(i,"Offsets",n),o=document.createElement("h3");o.textContent="Root",o.style.margin="10px 0 8px",o.style.fontSize="13px",s.appendChild(o),[["x",-10,10,.01],["y",-10,10,.01],["z",-10,10,.01],["sitAmount",0,1,.01],["sitOffsetX",-2,2,.01],["sitOffsetY",-2,2,.01],["sitOffsetZ",-2,2,.01]].forEach(([a,l,c,h])=>{s.appendChild(ee(a,l,c,h,t[a],u=>{t[a]=u,e()}))}),[["Torso",["torsoOffsetX","torsoOffsetY","torsoOffsetZ"]],["Pelvis",["pelvisOffsetX","pelvisOffsetY","pelvisOffsetZ"]],["Head",["headOffsetX","headOffsetY","headOffsetZ"]],["Left Ear",["leftEarOffsetX","leftEarOffsetY","leftEarOffsetZ"]],["Right Ear",["rightEarOffsetX","rightEarOffsetY","rightEarOffsetZ"]],["Left Eye",["leftEyeOffsetX","leftEyeOffsetY","leftEyeOffsetZ"]],["Right Eye",["rightEyeOffsetX","rightEyeOffsetY","rightEyeOffsetZ"]],["Left Brow",["leftBrowOffsetX","leftBrowOffsetY","leftBrowOffsetZ"]],["Right Brow",["rightBrowOffsetX","rightBrowOffsetY","rightBrowOffsetZ"]],["Left Shoulder",["leftShoulderOffsetX","leftShoulderOffsetY","leftShoulderOffsetZ"]],["Right Shoulder",["rightShoulderOffsetX","rightShoulderOffsetY","rightShoulderOffsetZ"]],["Left Elbow",["leftElbowOffsetX","leftElbowOffsetY","leftElbowOffsetZ"]],["Right Elbow",["rightElbowOffsetX","rightElbowOffsetY","rightElbowOffsetZ"]],["Left Hip",["leftHipOffsetX","leftHipOffsetY","leftHipOffsetZ"]],["Right Hip",["rightHipOffsetX","rightHipOffsetY","rightHipOffsetZ"]],["Left Knee",["leftKneeOffsetX","leftKneeOffsetY","leftKneeOffsetZ"]],["Right Knee",["rightKneeOffsetX","rightKneeOffsetY","rightKneeOffsetZ"]],["Socks",["sockOffsetX","sockOffsetY","sockOffsetZ"]],["Left Ankle",["leftAnkleOffsetX","leftAnkleOffsetY","leftAnkleOffsetZ"]],["Right Ankle",["rightAnkleOffsetX","rightAnkleOffsetY","rightAnkleOffsetZ"]]].forEach(([a,l])=>{const c=document.createElement("h3");c.textContent=a,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),l.forEach(h=>{s.appendChild(ee(h,-2,2,.01,t[h],u=>{t[h]=u,e()}))})})}function lv(i,t,e,n=!0){const s=oe(i,"Sizes",n);[["Torso",[["torsoScaleX",.2,3,.01],["torsoScaleY",.2,3,.01],["torsoScaleZ",.2,3,.01]]],["Pelvis",[["pelvisScaleX",.2,3,.01],["pelvisScaleY",.2,3,.01],["pelvisScaleZ",.2,3,.01]]],["Head",[["headScaleX",.2,3,.01],["headScaleY",.2,3,.01],["headScaleZ",.2,3,.01]]],["Ears",[["earScaleX",.2,3,.01],["earScaleY",.2,3,.01],["earScaleZ",.2,3,.01]]],["Eyes",[["eyeScaleX",.2,3,.01],["eyeScaleY",.2,3,.01],["eyeScaleZ",.2,3,.01],["pupilScale",.2,3,.01]]],["Brows",[["browScaleX",.2,3,.01],["browScaleY",.2,3,.01],["browScaleZ",.2,3,.01]]],["Upper Arms",[["upperArmScaleX",.2,3,.01],["upperArmScaleY",.2,3,.01],["upperArmScaleZ",.2,3,.01]]],["Lower Arms",[["lowerArmScaleX",.2,3,.01],["lowerArmScaleY",.2,3,.01],["lowerArmScaleZ",.2,3,.01]]],["Hands",[["handScaleX",.2,3,.01],["handScaleY",.2,3,.01],["handScaleZ",.2,3,.01]]],["Upper Legs",[["upperLegScaleX",.2,3,.01],["upperLegScaleY",.2,3,.01],["upperLegScaleZ",.2,3,.01]]],["Lower Legs",[["lowerLegScaleX",.2,3,.01],["lowerLegScaleY",.2,3,.01],["lowerLegScaleZ",.2,3,.01]]],["Socks",[["sockScaleX",.2,3,.01],["sockScaleY",.2,3,.01],["sockScaleZ",.2,3,.01]]],["Shoes",[["shoeScaleX",.2,3,.01],["shoeScaleY",.2,3,.01],["shoeScaleZ",.2,3,.01]]],["Toes",[["toeScaleX",.2,3,.01],["toeScaleY",.2,3,.01],["toeScaleZ",.2,3,.01]]]].forEach(([r,a])=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,u,f])=>{s.appendChild(ee(c,h,u,f,t[c],d=>{t[c]=d,e()}))})})}function cv(i,t,e,n=!1){const s=oe(i,"Hair",n);[{title:"Hair Base",fields:[["hairBaseOffsetX",-2,2,.01],["hairBaseOffsetY",-2,2,.01],["hairBaseOffsetZ",-2,2,.01],["hairBaseRotX",-180,180,.5],["hairBaseRotY",-180,180,.5],["hairBaseRotZ",-180,180,.5],["hairBaseScaleX",.05,3,.01],["hairBaseScaleY",.05,3,.01],["hairBaseScaleZ",.05,3,.01]]},{title:"Hair Particles",fields:[["hairOffsetX",-2,2,.01],["hairOffsetY",-2,2,.01],["hairOffsetZ",-2,2,.01],["hairRotX",-180,180,.5],["hairRotY",-180,180,.5],["hairRotZ",-180,180,.5],["hairScaleX",.2,3,.01],["hairScaleY",.2,3,.01],["hairScaleZ",.2,3,.01],["hairCount",0,45e3,1],["hairParticleSize",.04,.6,.002],["hairParticleOpacity",0,1,.01],["hairScatter",0,.2,.001],["hairCurveX",-.1,.1,.001],["hairCurveTipX",-.1,.1,.001],["hairCurveZ",-.1,.1,.001]],colors:["hairColor"]},{title:"Fringe Particles",fields:[["fringeOffsetX",-2,2,.01],["fringeOffsetY",-2,2,.01],["fringeOffsetZ",-2,2,.01],["fringeRotX",-180,180,.5],["fringeRotY",-180,180,.5],["fringeRotZ",-180,180,.5],["fringeScaleX",.2,3,.01],["fringeScaleY",.2,3,.01],["fringeScaleZ",.2,3,.01],["fringeCount",0,360,1],["fringeParticleSize",.2,3,.01],["fringeParticleOpacity",0,1,.01]]}].forEach(({title:r,fields:a,colors:l})=>{const c=document.createElement("h3");c.textContent=r,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),a.forEach(([h,u,f,d])=>{s.appendChild(ee(h,u,f,d,t[h],g=>{t[h]=g,e()}))}),(l??[]).forEach(h=>{s.appendChild(mi(h,t[h],u=>{t[h]=u,e()}))})})}function hv(i,t,e,n=!1){const s=oe(i,"Face",n);[{title:"Pupils",fields:[["pupilOffsetX",-.2,.2,.005],["pupilOffsetY",-.2,.2,.005],["pupilOffsetZ",-.1,.2,.005]]},{title:"Left Eye White",fields:[["leftEyeWhiteRotX",-180,180,.5],["leftEyeWhiteRotY",-180,180,.5],["leftEyeWhiteRotZ",-180,180,.5]]},{title:"Right Eye White",fields:[["rightEyeWhiteRotX",-180,180,.5],["rightEyeWhiteRotY",-180,180,.5],["rightEyeWhiteRotZ",-180,180,.5]]},{title:"Eye Highlight",fields:[["eyeHighlightScale",.05,3,.01],["eyeHighlightOffsetX",-.3,.3,.005],["eyeHighlightOffsetY",-.3,.3,.005],["eyeHighlightOffsetZ",-.1,.2,.005]]},{title:"Mouth",fields:[["mouthOffsetX",-.5,.5,.005],["mouthOffsetY",-.5,.5,.005],["mouthOffsetZ",0,.8,.005],["mouthRotX",-180,180,.5],["mouthRotY",-180,180,.5],["mouthRotZ",-180,180,.5],["mouthScaleX",.05,3,.01],["mouthScaleY",.05,3,.01],["mouthScaleZ",.05,3,.01],["mouthRadius",.01,.3,.005],["mouthTube",.002,.06,.002],["mouthArc",.1,2,.01]]}].forEach(({title:r,fields:a})=>{const l=document.createElement("h3");l.textContent=r,l.style.margin="10px 0 8px",l.style.fontSize="13px",s.appendChild(l),a.forEach(([c,h,u,f])=>{s.appendChild(ee(c,h,u,f,t[c],d=>{t[c]=d,e()}))})})}function uv(i,t,e,n=!1){const s=oe(i,"Sleeves",n);[["sleeveLength",.4,1.6,.01],["sleeveVolume",.6,1.8,.01]].forEach(([r,a,l,c])=>{s.appendChild(ee(r,a,l,c,t[r],h=>{t[r]=h,e()}))}),s.appendChild(mi("sleeveColor",t.sleeveColor,r=>{t.sleeveColor=r,e()}))}function fv(i,t,e,n=!1){const s=oe(i,"Character Colors",n);["shirtColor","pelvisColor","pantsColor"].forEach(r=>{s.appendChild(mi(r,t[r],a=>{t[r]=a,e()}))})}function dv(i,t,e,n=!1){const s=oe(i,"Feet",n);[{title:"Ankles",fields:[["leftAnkleOffsetX",-2,2,.01],["leftAnkleOffsetY",-2,2,.01],["leftAnkleOffsetZ",-2,2,.01],["leftAnkleX",-180,180,.5],["leftAnkleY",-180,180,.5],["leftAnkleZ",-180,180,.5],["rightAnkleOffsetX",-2,2,.01],["rightAnkleOffsetY",-2,2,.01],["rightAnkleOffsetZ",-2,2,.01],["rightAnkleX",-180,180,.5],["rightAnkleY",-180,180,.5],["rightAnkleZ",-180,180,.5]]},{title:"Socks",fields:[["sockOffsetX",-2,2,.01],["sockOffsetY",-2,2,.01],["sockOffsetZ",-2,2,.01],["sockRotX",-180,180,.5],["sockRotY",-180,180,.5],["sockRotZ",-180,180,.5],["sockScaleX",.2,3,.01],["sockScaleY",.2,3,.01],["sockScaleZ",.2,3,.01]],colors:["sockColor"]},{title:"Shoe Group",fields:[["shoeOffsetX",-2,2,.01],["shoeOffsetY",-2,2,.01],["shoeOffsetZ",-2,2,.01],["shoeRotX",-180,180,.5],["shoeRotY",-180,180,.5],["shoeRotZ",-180,180,.5],["shoeScaleX",.2,3,.01],["shoeScaleY",.2,3,.01],["shoeScaleZ",.2,3,.01]],colors:["shoeColor"]},{title:"Sole",fields:[["soleOffsetX",-2,2,.01],["soleOffsetY",-2,2,.01],["soleOffsetZ",-2,2,.01],["soleRotX",-180,180,.5],["soleRotY",-180,180,.5],["soleRotZ",-180,180,.5],["soleScaleX",.2,3,.01],["soleScaleY",.2,3,.01],["soleScaleZ",.2,3,.01]]},{title:"Upper Shoe",fields:[["upperShoeOffsetX",-2,2,.01],["upperShoeOffsetY",-2,2,.01],["upperShoeOffsetZ",-2,2,.01],["upperShoeRotX",-180,180,.5],["upperShoeRotY",-180,180,.5],["upperShoeRotZ",-180,180,.5],["upperShoeScaleX",.2,3,.01],["upperShoeScaleY",.2,3,.01],["upperShoeScaleZ",.2,3,.01]]},{title:"Toe",fields:[["toeOffsetX",-2,2,.01],["toeOffsetY",-2,2,.01],["toeOffsetZ",-2,2,.01],["toeRotX",-180,180,.5],["toeRotY",-180,180,.5],["toeRotZ",-180,180,.5],["toeScaleX",.2,3,.01],["toeScaleY",.2,3,.01],["toeScaleZ",.2,3,.01]],colors:["shoeToeColor"]}].forEach(({title:r,fields:a,colors:l})=>{const c=document.createElement("h3");c.textContent=r,c.style.margin="10px 0 8px",c.style.fontSize="13px",s.appendChild(c),a.forEach(([h,u,f,d])=>{s.appendChild(ee(h,u,f,d,t[h],g=>{t[h]=g,e()}))}),(l??[]).forEach(h=>{s.appendChild(mi(h,t[h],u=>{t[h]=u,e()}))})})}const Ou={fogEnabled:!0,orbitControlsEnabled:!1,musicPulseSpeed:3},Hl={x:-26.23,y:.46,z:23.83,targetX:8.34,targetY:-2.56,targetZ:-5.14,panX:-4.17,panY:-2,mouseXCamera:!0,mouseXTarget:!1,mouseYCamera:!0,mouseYTarget:!1,mouseXAmount:1.63,mouseYAmount:-.8,mouseSmooth:.045,fov:38},Uu={ambient:1.4,key:.9,fill:1.05,front:1.05,shadowRadius:20,blurSamples:23,bias:-0,normalBias:0},Nu={wall:{x:0,y:0,z:-1.8,width:70,height:24,depth:.04},floor:{x:0,y:-5.52,z:8,rotX:0,rotY:0,rotZ:0,width:86.29,height:88.89,tone:1.33,roughness:1}},Fu={x:.15,y:.15,z:-1.74,rotX:.5,rotY:-.5,rotZ:1},Bu={backPaper:{x:-1.71,y:1.19,z:-.01,rotX:-5.5,rotZ:.5},frontPaper:{x:-1.58,y:1.33,z:-.01,rotX:-6.5,rotZ:8.5},rightPaper:{x:1.58,y:.53,z:-.01,rotX:-10,rotZ:-6.5}},zu={leftPin:{x:-1.56,y:1.18,z:.58,topRadius:.16,topHeight:.06,stemRadius:.07,stemHeight:.3,baseRadius:.2,baseHeight:.07,pinRadius:.01,pinHeight:.35,pinInset:.21},rightPin:{x:1.56,y:.38,z:.56,topRadius:.16,topHeight:.06,stemRadius:.07,stemHeight:.3,baseRadius:.2,baseHeight:.07,pinRadius:.01,pinHeight:.35,pinInset:.26}},Hu={x:-5,y:-.02,z:-1.3,rotX:-87.5,rotY:-2.5,rotZ:0,width:1.75,height:.88,depth:.24,radius:.26},ku={x:.42,y:.02,z:.18,rotX:90,rotY:0,rotZ:0,radius:.24,height:.49,neck:.15,bulge:.64,soilRadius:.15,soilHeight:.45,soilOffsetY:0},Xu={x:.5,y:.03,z:.53,rotX:97.5,rotY:12.5,rotZ:-10,mainRadius:.1,mainHeight:.32,mainLean:-.07,armRadius:.06,armHeight:.19,armOffsetX:.03,armOffsetY:-.01,armLean:-.58},Gu={x:-.4,y:-.04,z:.39,rotX:90,rotY:0,rotZ:0,width:.22,height:.72,depth:.49,pagesX:0,pagesY:.04,pagesZ:-.01,pagesWidth:.19,pagesHeight:.65,pagesDepth:.5,spineX:0,spineY:.03,spineZ:.26,spineWidth:.03,spineHeight:.67,spineDepth:.22,spineRotY:90},Vu={x:-.68,y:-.06,z:.37,rotX:90,rotY:0,rotZ:0,width:.18,height:.68,depth:.47,pagesX:0,pagesY:.045,pagesZ:-.03,pagesWidth:.19,pagesHeight:.6,pagesDepth:.48,spineX:0,spineY:.03,spineZ:.23,spineWidth:.025,spineHeight:.62,spineDepth:.2,spineRotY:90},Yu={x:.36,y:-3.46,z:1.33,topX:.16,topY:-.08,topZ:.68,rotX:92,rotY:0,rotZ:0,mainWidth:7.08,mainDepth:2.87,returnWidth:2.51,returnDepth:5.35,innerCut:4.12,thickness:.2,radius:.9,legHeight:1.96,legRadius:.15,legInset:.58},Wu={x:5.59,y:.85,z:-1.74,rotX:0,rotY:0,rotZ:0,width:1.98,height:1.35,depth:.18,innerInset:.13,sunX:.34,sunY:.2,sunRadius:.18,mountainAX:-.16,mountainAY:-.24,mountainAScaleX:1.14,mountainAScaleY:1,mountainAScaleZ:1.38,mountainAWidth:.9,mountainAHeight:.69,mountainARotZ:1,mountainBX:.33,mountainBY:-.36,mountainBScaleX:.78,mountainBScaleY:.84,mountainBScaleZ:3,mountainBWidth:.83,mountainBHeight:.44,mountainBRotZ:1},kl={screenMode:"code",x:1.9,y:-1.65,z:.56,rotX:-7,rotY:-4.5,rotZ:-1,width:3.27,height:2.28,depth:.18,radius:.22,screenInset:.11,screenDepth:.15,screenColor:"#353a41",screenGlowColor:"#3f4754",screenGlow:.22,standWidth:.8,standHeight:1.07,standDepth:.05,standOffsetZ:.19,standRotX:14,standRotZ:1,baseWidth:.8,baseHeight:.02,baseDepth:.55,baseOffsetY:.13,baseOffsetZ:-.07,baseRotX:8.5,baseRotZ:1,lineGap:.1,codeX:-.05,codeY:.13,codeScroll:0,codeWidthScale:1,codeVariant:0,codeActiveLine:13,codeTypingProgress:0,codeCursorVisible:!0},Xl={screenMode:"ui",x:-1.55,y:-1.67,z:.87,rotX:-6,rotY:12,rotZ:1.5,width:3.1,height:2.24,depth:.18,radius:.22,screenInset:.11,screenDepth:.15,screenColor:"#353a41",screenGlowColor:"#3f4754",screenGlow:.18,standWidth:.68,standHeight:1,standDepth:.05,standOffsetZ:.19,standRotX:14,standRotZ:-1,baseWidth:.68,baseHeight:.02,baseDepth:.52,baseOffsetY:.15,baseOffsetZ:-.07,baseRotX:8.5,baseRotZ:-1,lineGap:.1,uiSidebarWidth:.15,uiSidebarX:-1.16,uiPanelWidth:.05,uiPanelX:-.15,uiTopIconWidth:.21,uiTopIconX:-1.18,uiTopIconY:.63,uiActiveIconIndex:0,uiDotIconIndex:0,uiDotVisible:!0,uiIconWidth:.18,uiIconX:-1.18,uiIconStartY:.3,uiIconGap:.33,uiDotX:.08,uiDotY:.08,uiLinesWidthScale:1.02,uiLinesX:-.77,uiLinesY:.73,uiLineGap:.14,uiLinesScroll:0},Zu={x:5.9,y:-4.97,z:1.69,rotX:0,rotY:0,rotZ:-1,radius:.64,height:.93,neck:.44,bulge:.88,bandRadiusTop:.67,bandRadiusBottom:.61,bandHeight:.31,bandY:-.05,bottomBandRadiusTop:.48,bottomBandRadiusBottom:.49,bottomBandHeight:.32,bottomBandY:-.56,soilRadius:.44,soilHeight:.52,soilY:.19},qu={x:-.17,y:.85,z:-.28,rotX:0,rotY:0,rotZ:0,depth:.03,bevelSize:.12,bevelThickness:.45,bodyBulge:.72,ridgeBulge:.46,ridgeWidth:.65,centerWidth:.45,centerHeight:1.34,centerX:.05,centerY:.15,centerZ:-.11,centerRotX:-28.5,centerRotY:-36,centerRotZ:6,leftWidth:.19,leftHeight:1.08,leftX:-.17,leftY:-.01,leftZ:.22,leftRotX:-34,leftRotY:30.5,leftRotZ:23,rightWidth:.31,rightHeight:1.1,rightX:.46,rightY:.07,rightZ:.19,rightRotX:-84,rightRotY:-65.5,rightRotZ:-73},Ku={x:4.51,y:-5.31,z:.4,rotX:0,rotY:0,rotZ:0,scaleX:1,scaleY:1.16,scaleZ:1,baseRadius:.34,baseHeight:.08,baseY:0,poleRadius:.035,poleHeight:3.2,shadeX:0,shadeY:3.12,shadeZ:0,shadeRotX:0,shadeRotY:0,shadeRotZ:0,shadeTopRadius:.44,shadeBottomRadius:.56,shadeHeight:.97,bulbX:0,bulbY:3.15,bulbZ:0,bulbRadius:.19,lightX:-.24,lightY:3.09,lightZ:.26,lightIntensity:3.43,lightDistance:17.7,lightDecay:2,baseColor:"#b98745",poleColor:"#b98745",shadeColor:"#ffe5af",shadeGlowColor:"#ffd27a",shadeGlow:.89,shadeOpacity:1,bulbColor:"#fff1c5",bulbGlowColor:"#ffd27a",bulbGlow:.91,lightColor:"#ffd895"},ju={x:.97,y:-3.43,z:2.57,rotX:-88,rotY:1,rotZ:3,width:1.32,height:.42,depth:.08,radius:.05,keyDepth:.04,keyWidthScale:.6,keyHeightScale:.44,keyCols:11,keyRows:3},Gl={x:1.9,y:-3.429,z:2.5,rotX:-88,rotY:0,rotZ:0,width:.24,height:.39,depth:.03,radius:.13,splitHeight:2},$u={x:3.66,y:-3,z:1.46,rotX:1,rotY:0,rotZ:-1,width:.6,height:.88,depth:.25,radius:.17,panelWidth:.48,panelHeight:.72,panelDepth:.04,panelRadius:.13,panelX:0,panelY:0,panelZ:.11,coneRadius:.18,coneDepth:.05,coneX:0,coneY:.14,coneZ:.13,smallConeRadius:.05,smallConeDepth:.02,smallConeX:0,smallConeY:-.19,smallConeZ:.13},Ju={x:-.63,y:-3.49,z:2.46,rotX:3,rotY:-36,rotZ:0,scaleX:.66,scaleY:.91,scaleZ:.66,topRadius:.27,bottomRadius:.23,height:.55,bodyColor:"#dbd5cc",coffeeColor:"#5b3925",coffeeRadius:.22,coffeeDepth:.105,coffeeOffsetY:-.05,handleX:.3,handleY:.28,handleZ:0,handleRotX:1,handleRotY:172,handleRotZ:40,handleRadius:.19,handleTube:.035,handleArc:1.59,handleScaleX:.7,handleScaleY:1.01,handleScaleZ:.98,steamEnabled:!0,steamCount:100,steamHeight:.46,steamSpeed:.8,steamSpread:.33,steamOpacity:.02,steamThickness:.049,steamOffsetX:0,steamOffsetY:-.37,steamOffsetZ:0,steamRotX:-11.5,steamRotY:-110,steamRotZ:-13.5,steamColor:"#ffffff"},An={x:-1.35,y:-3.45,z:2.45,rotX:-88,rotY:1,rotZ:-151,scaleX:.8,scaleY:1.06,scaleZ:1,width:.48,height:.79,depth:.055,radius:.07,bodyColor:"#20242b",screenColor:"#3b414e",detailColor:"#000000",screenWidth:.42,screenHeight:.72,screenDepth:.012,screenRadius:.055,screenX:0,screenY:-.01,screenZ:-.005,screenGlow:.95,cameraRadius:.022,cameraDepth:.014,cameraX:0,cameraY:-.33,cameraZ:-.01,timeText:"10:24",timeColor:"#8a8ca8",timeWidth:.055,timeHeight:.11,timeThickness:.006,timeGap:.018,timeX:.18,timeY:-.11,timeZ:-.01,timeRotX:0,timeRotY:0,timeRotZ:180,fingerprintRadius:.035,fingerprintDepth:.012,fingerprintX:0,fingerprintY:.27,fingerprintZ:-.01,fingerprintColor:"#8a8ca8"},Qu={x:.37,y:-5.52,z:5.84,rotX:0,rotY:0,rotZ:0,width:8.44,height:7.6,depth:.06,radius:.39,inset1:.9,inset2:1.77,inset3:2.5,radiusFalloff:.06,layerLift:.002},tf={x:1.15,y:-3.95,z:3.15,rotX:-90,rotY:-1,rotZ:3,shellX:.05,shellY:-1.43,shellZ:-.57,shellRotX:-86,shellRotY:6.5,shellRotZ:1,shellBackWidth:1.29,shellBackHeight:.92,shellBackDepth:.14,shellBackRadius:.04,shellBackX:0,shellBackY:-.89,shellBackZ:-.15,shellBackRotX:-1,shellBackRotY:0,shellBackRotZ:0,shellSeatWidth:1.28,shellSeatHeight:.72,shellSeatDepth:.14,shellSeatRadius:.1,shellSeatX:0,shellSeatY:-.1,shellSeatZ:.49,shellSeatRotX:90,shellSeatRotY:0,shellSeatRotZ:0,shellBendWidth:1.28,shellBendInnerRadius:.3,shellBendThickness:.14,shellBendX:.006,shellBendY:-.25,shellBendZ:-.01,shellBendRotX:0,shellBendRotY:0,shellBendRotZ:0,backWidth:1.26,backHeight:1.28,backDepth:.13,backRadius:.13,backX:.08,backY:-2,backZ:-.1,backRotX:-85.5,backRotY:3.5,backRotZ:0,innerBackWidth:1.48,innerBackHeight:1.72,innerBackDepth:.04,innerBackRadius:.09,innerBackX:.29,innerBackY:.75,innerBackZ:-1.27,innerBackRotX:0,innerBackRotY:0,innerBackRotZ:-3,seatWidth:1.2,seatHeight:1.11,seatDepth:.14,seatRadius:.1,seatX:.12,seatY:-1.62,seatZ:-.65,seatRotX:0,seatRotY:-1,seatRotZ:-5,frameWidth:.92,frameDepth:.24,frameLift:.96,backLegSpread:.87,backLegOffset:-.63,backLegHeight:.1,tubeRadius:.04,frameX:.07,frameY:-1.08,frameZ:-.51,frameRotX:8.5,frameRotY:-180,frameRotZ:-180},Lr={x:.1,y:-4.13,z:3.9,rotX:2,rotY:165,rotZ:8.5,sitAmount:1,sitOffsetX:1.09,sitOffsetY:.13,sitOffsetZ:.34,torsoScaleX:.86,torsoScaleY:.71,torsoScaleZ:.54,pelvisScaleX:.97,pelvisScaleY:1.37,pelvisScaleZ:.81,shirtColor:"#334737",pelvisColor:"#262537",pantsColor:"#19182b",headScaleX:.6,headScaleY:.81,headScaleZ:.74,hairScaleX:.79,hairScaleY:1.36,hairScaleZ:1.05,hairColor:"#12151c",hairParticleSize:.534,hairCount:33e3,hairParticleOpacity:1,hairScatter:.072,hairCurveX:-.013,hairCurveTipX:-.032,hairCurveZ:.059,hairCapScaleX:1.06,hairCapScaleY:.53,hairCapScaleZ:.93,fringeScaleX:.52,fringeScaleY:.49,fringeScaleZ:.46,fringeCount:360,fringeParticleSize:3,fringeParticleOpacity:1,earScaleX:.31,earScaleY:.6,earScaleZ:.25,eyeScaleX:.81,eyeScaleY:.9,eyeScaleZ:.6,pupilScale:.41,pupilOffsetX:0,pupilOffsetY:0,pupilOffsetZ:.02,leftEyeWhiteRotX:0,leftEyeWhiteRotY:-17.5,leftEyeWhiteRotZ:0,rightEyeWhiteRotX:0,rightEyeWhiteRotY:23,rightEyeWhiteRotZ:0,browScaleX:.46,browScaleY:.38,browScaleZ:.26,eyeHighlightScale:.38,eyeHighlightOffsetX:0,eyeHighlightOffsetY:-.005,eyeHighlightOffsetZ:.04,mouthOffsetX:0,mouthOffsetY:-.215,mouthOffsetZ:.36,mouthRotX:25,mouthRotY:0,mouthRotZ:-161.5,mouthScaleX:.82,mouthScaleY:.49,mouthScaleZ:.22,mouthRadius:.085,mouthTube:.008,mouthArc:.8,upperArmScaleX:1,upperArmScaleY:1,upperArmScaleZ:1,lowerArmScaleX:1,lowerArmScaleY:1,lowerArmScaleZ:1,sleeveLength:.94,sleeveVolume:.84,sleeveColor:"#334737",handScaleX:1,handScaleY:1,handScaleZ:1,upperLegScaleX:1,upperLegScaleY:1,upperLegScaleZ:1,lowerLegScaleX:1,lowerLegScaleY:1.11,lowerLegScaleZ:1,sockScaleX:1.28,sockScaleY:.52,sockScaleZ:.9,sockColor:"#f1cc98",sockOffsetX:.01,sockOffsetY:-.01,sockOffsetZ:.03,sockRotX:0,sockRotY:-62,sockRotZ:4.5,shoeScaleX:1.1,shoeScaleY:1.49,shoeScaleZ:1.05,shoeColor:"#3c414a",shoeOffsetX:.03,shoeOffsetY:0,shoeOffsetZ:.08,shoeRotX:0,shoeRotY:0,shoeRotZ:0,soleScaleX:.2,soleScaleY:.2,soleScaleZ:.2,soleOffsetX:-.01,soleOffsetY:-.105,soleOffsetZ:.13,soleRotX:0,soleRotY:0,soleRotZ:0,upperShoeScaleX:.69,upperShoeScaleY:.47,upperShoeScaleZ:1.34,upperShoeOffsetX:-.03,upperShoeOffsetY:-.045,upperShoeOffsetZ:.09,upperShoeRotX:1,upperShoeRotY:0,upperShoeRotZ:0,toeScaleX:.89,toeScaleY:1.23,toeScaleZ:1.84,shoeToeColor:"#f6f6f6",toeOffsetX:-.01,toeOffsetY:-.03,toeOffsetZ:.28,toeRotX:0,toeRotY:-1,toeRotZ:0,torsoPitch:5,torsoYaw:24.5,torsoRoll:-9.5,headPitch:-8.08,headYaw:-2.5,headRoll:-5.5,eyeYaw:-.08,eyePitch:0,browTilt:0,leftShoulderX:-81.25,leftShoulderY:-177,leftShoulderZ:32,leftElbowX:25.5,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5,rightShoulderX:-93.5,rightShoulderY:-224,rightShoulderZ:-7,rightElbowX:8.5,rightElbowY:0,rightElbowZ:0,rightWristX:0,rightWristY:0,rightWristZ:0,leftHipX:7,leftHipY:8.005,leftHipZ:-25.35,leftKneeX:-10,leftAnkleX:10.131,leftAnkleY:0,leftAnkleZ:0,rightHipX:7,rightHipY:7,rightHipZ:4.5,rightKneeX:0,rightAnkleX:3,rightAnkleY:0,rightAnkleZ:0,torsoOffsetX:-.09,torsoOffsetY:-.06,torsoOffsetZ:0,pelvisOffsetX:-.04,pelvisOffsetY:-.09,pelvisOffsetZ:.14,headOffsetX:0,headOffsetY:.03,headOffsetZ:0,hairOffsetX:0,hairOffsetY:-.22,hairOffsetZ:.19,hairRotX:-23,hairRotY:0,hairRotZ:1,hairBaseOffsetX:0,hairBaseOffsetY:.3,hairBaseOffsetZ:-.24,hairBaseRotX:-25,hairBaseRotY:-3,hairBaseRotZ:23,hairBaseScaleX:.85,hairBaseScaleY:.52,hairBaseScaleZ:.79,hairCapOffsetX:0,hairCapOffsetY:1.55,hairCapOffsetZ:-.01,hairCapRotX:0,hairCapRotY:12,hairCapRotZ:4.5,fringeOffsetX:.05,fringeOffsetY:.17,fringeOffsetZ:.15,fringeRotX:-4,fringeRotY:0,fringeRotZ:-4,leftEarOffsetX:.15,leftEarOffsetY:.03,leftEarOffsetZ:.01,rightEarOffsetX:-.15,rightEarOffsetY:0,rightEarOffsetZ:-.06,leftEyeOffsetX:.03,leftEyeOffsetY:.01,leftEyeOffsetZ:-.13,rightEyeOffsetX:-.03,rightEyeOffsetY:.01,rightEyeOffsetZ:-.13,leftBrowOffsetX:.06,leftBrowOffsetY:-.06,leftBrowOffsetZ:-.08,rightBrowOffsetX:-.06,rightBrowOffsetY:-.06,rightBrowOffsetZ:-.08,leftShoulderOffsetX:.26,leftShoulderOffsetY:-.12,leftShoulderOffsetZ:-.12,rightShoulderOffsetX:-.38,rightShoulderOffsetY:-.15,rightShoulderOffsetZ:-.03,leftElbowOffsetX:0,leftElbowOffsetY:0,leftElbowOffsetZ:0,rightElbowOffsetX:0,rightElbowOffsetY:0,rightElbowOffsetZ:0,leftHipOffsetX:0,leftHipOffsetY:0,leftHipOffsetZ:0,rightHipOffsetX:0,rightHipOffsetY:0,rightHipOffsetZ:0,leftKneeOffsetX:0,leftKneeOffsetY:0,leftKneeOffsetZ:.06,rightKneeOffsetX:0,rightKneeOffsetY:0,rightKneeOffsetZ:.06,leftAnkleOffsetX:.01,leftAnkleOffsetY:-.04,leftAnkleOffsetZ:-.04,rightAnkleOffsetX:-.01,rightAnkleOffsetY:-.06,rightAnkleOffsetZ:-.06};function se(i){return JSON.parse(JSON.stringify(i))}const bh={type:"change"},ma={type:"start"},wh={type:"end"},jo=new Ll,Th=new oi,pv=Math.cos(70*ai.DEG2RAD);class mv extends Ui{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",_t),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_t),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(bh),n.update(),o=s.NONE},this.update=(function(){const _=new P,F=new Di().setFromUnitVectors(t.up,new P(0,1,0)),z=F.clone().invert(),Y=new P,it=new Di,Ct=new P,Bt=2*Math.PI;return function(Re=null){const ne=n.object.position;_.copy(ne).sub(n.target),_.applyQuaternion(F),a.setFromVector3(_),n.autoRotate&&o===s.NONE&&G(y(Re)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pe=n.minAzimuthAngle,Te=n.maxAzimuthAngle;isFinite(Pe)&&isFinite(Te)&&(Pe<-Math.PI?Pe+=Bt:Pe>Math.PI&&(Pe-=Bt),Te<-Math.PI?Te+=Bt:Te>Math.PI&&(Te-=Bt),Pe<=Te?a.theta=Math.max(Pe,Math.min(Te,a.theta)):a.theta=a.theta>(Pe+Te)/2?Math.max(Pe,a.theta):Math.min(Te,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let jn=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=yt(a.radius);else{const Fe=a.radius;a.radius=yt(a.radius*c),jn=Fe!=a.radius}if(_.setFromSpherical(a),_.applyQuaternion(z),ne.copy(n.target).add(_),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let Fe=null;if(n.object.isPerspectiveCamera){const Nn=_.length();Fe=yt(Nn*c);const gi=Nn-Fe;n.object.position.addScaledVector(E,gi),n.object.updateMatrixWorld(),jn=!!gi}else if(n.object.isOrthographicCamera){const Nn=new P(O.x,O.y,0);Nn.unproject(n.object);const gi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),jn=gi!==n.object.zoom;const Ts=new P(O.x,O.y,0);Ts.unproject(n.object),n.object.position.sub(Ts).add(Nn),n.object.updateMatrixWorld(),Fe=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Fe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Fe).add(n.object.position):(jo.origin.copy(n.object.position),jo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(jo.direction))<pv?t.lookAt(n.target):(Th.setFromNormalAndCoplanarPoint(n.object.up,n.target),jo.intersectPlane(Th,n.target))))}else if(n.object.isOrthographicCamera){const Fe=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Fe!==n.object.zoom&&(n.object.updateProjectionMatrix(),jn=!0)}return c=1,R=!1,jn||Y.distanceToSquared(n.object.position)>r||8*(1-it.dot(n.object.quaternion))>r||Ct.distanceToSquared(n.target)>r?(n.dispatchEvent(bh),Y.copy(n.object.position),it.copy(n.object.quaternion),Ct.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",gt),n.domElement.removeEventListener("pointerdown",Mt),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",v),n.domElement.getRootNode().removeEventListener("keydown",At,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_t),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const r=1e-6,a=new Eh,l=new Eh;let c=1;const h=new P,u=new et,f=new et,d=new et,g=new et,x=new et,m=new et,p=new et,T=new et,S=new et,E=new P,O=new et;let R=!1;const C=[],D={};let b=!1;function y(_){return _!==null?2*Math.PI/60*n.autoRotateSpeed*_:2*Math.PI/60/60*n.autoRotateSpeed}function L(_){const F=Math.abs(_*.01);return Math.pow(.95,n.zoomSpeed*F)}function G(_){l.theta-=_}function B(_){l.phi-=_}const W=(function(){const _=new P;return function(z,Y){_.setFromMatrixColumn(Y,0),_.multiplyScalar(-z),h.add(_)}})(),q=(function(){const _=new P;return function(z,Y){n.screenSpacePanning===!0?_.setFromMatrixColumn(Y,1):(_.setFromMatrixColumn(Y,0),_.crossVectors(n.object.up,_)),_.multiplyScalar(z),h.add(_)}})(),V=(function(){const _=new P;return function(z,Y){const it=n.domElement;if(n.object.isPerspectiveCamera){const Ct=n.object.position;_.copy(Ct).sub(n.target);let Bt=_.length();Bt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*z*Bt/it.clientHeight,n.object.matrix),q(2*Y*Bt/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(z*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),q(Y*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function $(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function mt(_,F){if(!n.zoomToCursor)return;R=!0;const z=n.domElement.getBoundingClientRect(),Y=_-z.left,it=F-z.top,Ct=z.width,Bt=z.height;O.x=Y/Ct*2-1,O.y=-(it/Bt)*2+1,E.set(O.x,O.y,1).unproject(n.object).sub(n.object.position).normalize()}function yt(_){return Math.max(n.minDistance,Math.min(n.maxDistance,_))}function xt(_){u.set(_.clientX,_.clientY)}function Gt(_){mt(_.clientX,_.clientX),p.set(_.clientX,_.clientY)}function te(_){g.set(_.clientX,_.clientY)}function K(_){f.set(_.clientX,_.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;G(2*Math.PI*d.x/F.clientHeight),B(2*Math.PI*d.y/F.clientHeight),u.copy(f),n.update()}function st(_){T.set(_.clientX,_.clientY),S.subVectors(T,p),S.y>0?$(L(S.y)):S.y<0&&Z(L(S.y)),p.copy(T),n.update()}function Et(_){x.set(_.clientX,_.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(x),n.update()}function ht(_){mt(_.clientX,_.clientY),_.deltaY<0?Z(L(_.deltaY)):_.deltaY>0&&$(L(_.deltaY)),n.update()}function It(_){let F=!1;switch(_.code){case n.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),F=!0;break}F&&(_.preventDefault(),n.update())}function Xt(_){if(C.length===1)u.set(_.pageX,_.pageY);else{const F=kt(_),z=.5*(_.pageX+F.x),Y=.5*(_.pageY+F.y);u.set(z,Y)}}function Dt(_){if(C.length===1)g.set(_.pageX,_.pageY);else{const F=kt(_),z=.5*(_.pageX+F.x),Y=.5*(_.pageY+F.y);g.set(z,Y)}}function Qt(_){const F=kt(_),z=_.pageX-F.x,Y=_.pageY-F.y,it=Math.sqrt(z*z+Y*Y);p.set(0,it)}function w(_){n.enableZoom&&Qt(_),n.enablePan&&Dt(_)}function rt(_){n.enableZoom&&Qt(_),n.enableRotate&&Xt(_)}function nt(_){if(C.length==1)f.set(_.pageX,_.pageY);else{const z=kt(_),Y=.5*(_.pageX+z.x),it=.5*(_.pageY+z.y);f.set(Y,it)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;G(2*Math.PI*d.x/F.clientHeight),B(2*Math.PI*d.y/F.clientHeight),u.copy(f)}function ut(_){if(C.length===1)x.set(_.pageX,_.pageY);else{const F=kt(_),z=.5*(_.pageX+F.x),Y=.5*(_.pageY+F.y);x.set(z,Y)}m.subVectors(x,g).multiplyScalar(n.panSpeed),V(m.x,m.y),g.copy(x)}function j(_){const F=kt(_),z=_.pageX-F.x,Y=_.pageY-F.y,it=Math.sqrt(z*z+Y*Y);T.set(0,it),S.set(0,Math.pow(T.y/p.y,n.zoomSpeed)),$(S.y),p.copy(T);const Ct=(_.pageX+F.x)*.5,Bt=(_.pageY+F.y)*.5;mt(Ct,Bt)}function Pt(_){n.enableZoom&&j(_),n.enablePan&&ut(_)}function dt(_){n.enableZoom&&j(_),n.enableRotate&&nt(_)}function Mt(_){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(_.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",v)),!bt(_)&&(Kt(_),_.pointerType==="touch"?Ht(_):H(_)))}function A(_){n.enabled!==!1&&(_.pointerType==="touch"?ot(_):tt(_))}function v(_){switch(Ut(_),C.length){case 0:n.domElement.releasePointerCapture(_.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",v),n.dispatchEvent(wh),o=s.NONE;break;case 1:const F=C[0],z=D[F];Ht({pointerId:F,pageX:z.x,pageY:z.y});break}}function H(_){let F;switch(_.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case zi.DOLLY:if(n.enableZoom===!1)return;Gt(_),o=s.DOLLY;break;case zi.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enablePan===!1)return;te(_),o=s.PAN}else{if(n.enableRotate===!1)return;xt(_),o=s.ROTATE}break;case zi.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enableRotate===!1)return;xt(_),o=s.ROTATE}else{if(n.enablePan===!1)return;te(_),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(ma)}function tt(_){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;K(_);break;case s.DOLLY:if(n.enableZoom===!1)return;st(_);break;case s.PAN:if(n.enablePan===!1)return;Et(_);break}}function Q(_){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(_.preventDefault(),n.dispatchEvent(ma),ht(J(_)),n.dispatchEvent(wh))}function J(_){const F=_.deltaMode,z={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(F){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return _.ctrlKey&&!b&&(z.deltaY*=10),z}function At(_){_.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",ct,{passive:!0,capture:!0}))}function ct(_){_.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",ct,{passive:!0,capture:!0}))}function _t(_){n.enabled===!1||n.enablePan===!1||It(_)}function Ht(_){switch(Ft(_),C.length){case 1:switch(n.touches.ONE){case Hi.ROTATE:if(n.enableRotate===!1)return;Xt(_),o=s.TOUCH_ROTATE;break;case Hi.PAN:if(n.enablePan===!1)return;Dt(_),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case Hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(_),o=s.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;rt(_),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(ma)}function ot(_){switch(Ft(_),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;nt(_),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ut(_),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pt(_),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(_),n.update();break;default:o=s.NONE}}function gt(_){n.enabled!==!1&&_.preventDefault()}function Kt(_){C.push(_.pointerId)}function Ut(_){delete D[_.pointerId];for(let F=0;F<C.length;F++)if(C[F]==_.pointerId){C.splice(F,1);return}}function bt(_){for(let F=0;F<C.length;F++)if(C[F]==_.pointerId)return!0;return!1}function Ft(_){let F=D[_.pointerId];F===void 0&&(F=new et,D[_.pointerId]=F),F.set(_.pageX,_.pageY)}function kt(_){const F=_.pointerId===C[0]?C[1]:C[0];return D[F]}n.domElement.addEventListener("contextmenu",gt),n.domElement.addEventListener("pointerdown",Mt),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",At,{passive:!0,capture:!0}),this.update()}}class gv{constructor(t,e){this.config=e,this.camera=new rn(e.fov,window.innerWidth/window.innerHeight,.1,100),this.controls=new mv(this.camera,t.domElement),this.controls.enableDamping=!0,this.basePosition=new P,this.baseTarget=new P,this.viewDirection=new P,this.viewRight=new P,this.viewUp=new P,this.panOffset=new P,this.parallaxCameraOffset=new P,this.parallaxTargetOffset=new P,this.apply()}setOrbitEnabled(t){this.controls.enabled=t}setParallax(t,e,n,s){this.parallaxCameraOffset.copy(this.viewRight).multiplyScalar(t).addScaledVector(this.viewUp,e),this.parallaxTargetOffset.copy(this.viewRight).multiplyScalar(n).addScaledVector(this.viewUp,s)}apply(){this.basePosition.set(this.config.x,this.config.y,this.config.z),this.baseTarget.set(this.config.targetX,this.config.targetY,this.config.targetZ),this.viewDirection.subVectors(this.baseTarget,this.basePosition).normalize(),this.viewRight.crossVectors(this.viewDirection,this.camera.up).normalize(),this.viewUp.crossVectors(this.viewRight,this.viewDirection).normalize(),this.panOffset.copy(this.viewRight).multiplyScalar(this.config.panX).addScaledVector(this.viewUp,this.config.panY),this.camera.position.copy(this.basePosition).add(this.panOffset).add(this.parallaxCameraOffset),this.camera.fov=this.config.fov,this.camera.updateProjectionMatrix(),this.controls.target.copy(this.baseTarget).add(this.panOffset).add(this.parallaxTargetOffset),this.controls.update()}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}class _v{constructor(t,e){this.scene=t,this.config=e,this.ambient=new Lx(16776697,15391942,e.ambient),this.keyLight=new Sh(16774893,e.key),this.fillLight=new Lu(16771796,e.fill,30),this.frontLight=new Sh(16777215,e.front),this.keyLight.position.set(1.6,5.3,8.4),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.set(4096,4096),this.keyLight.shadow.camera.left=-10,this.keyLight.shadow.camera.right=10,this.keyLight.shadow.camera.top=8,this.keyLight.shadow.camera.bottom=-8,this.fillLight.position.set(-2.2,3.1,5.8),this.frontLight.position.set(-.6,2.4,9),t.add(this.ambient,this.keyLight,this.fillLight,this.frontLight),this.apply()}apply(){this.ambient.intensity=this.config.ambient,this.keyLight.intensity=this.config.key,this.fillLight.intensity=this.config.fill,this.frontLight.intensity=this.config.front,this.keyLight.shadow.radius=this.config.shadowRadius,this.keyLight.shadow.blurSamples=Math.round(this.config.blurSamples),this.keyLight.shadow.bias=this.config.bias,this.keyLight.shadow.normalBias=this.config.normalBias}}const ef=.32;function U(i){return ai.degToRad(i)}function Ye(i,t,e){const n=-i/2,s=-t/2,o=new Es;return o.moveTo(n+e,s),o.lineTo(n+i-e,s),o.quadraticCurveTo(n+i,s,n+i,s+e),o.lineTo(n+i,s+t-e),o.quadraticCurveTo(n+i,s+t,n+i-e,s+t),o.lineTo(n+e,s+t),o.quadraticCurveTo(n,s+t,n,s+t-e),o.lineTo(n,s+e),o.quadraticCurveTo(n,s,n+e,s),o}function xv(i=ef){const t=Ye(6.6,4.25,.42),e=6.6-i*2,n=4.25-i*2,s=Math.max(.18,.42-i*.38),o=Ye(e,n,s);t.holes.push(o);const r=new Oe(t,{depth:.18,bevelEnabled:!1,curveSegments:28});return r.center(),r}function vv(i=ef){const t=Math.max(.01,i-.01),e=6.6-t*2,n=4.25-t*2,s=Math.max(.18,.42-t*.38),o=new Oe(Ye(e,n,s),{depth:.08,bevelEnabled:!1,curveSegments:28});return o.center(),o}function Ah(i,t,e,n){const s=Ye(i,t,n),o=new Oe(s,{depth:e,bevelEnabled:!1,curveSegments:24});return o.center(),o}function Ch(i,t,e,n){const s=Ye(i,t,.22),o=Ye(i-n*2,t-n*2,.16);s.holes.push(o);const r=new Oe(s,{depth:e,bevelEnabled:!1,curveSegments:24});return r.center(),r}function Rh(i,t,e,n){const s=new Oe(Ye(i-n*2.1,t-n*2.1,.14),{depth:e,bevelEnabled:!1,curveSegments:24});return s.center(),s}function $o(i,t,e){const n=new Es;n.moveTo(-i/2,-t/2),n.lineTo(0,t/2),n.lineTo(i/2,-t/2),n.closePath();const s=new Oe(n,{depth:e,bevelEnabled:!1,curveSegments:8});return s.center(),s}function Ph(i,t,e,n,s,o,r){const a=new Es,l=-i/2,c=i/2,h=-t/2,u=t/2,f=l+e,d=n/2,g=Math.max(.02,Math.min(r,i*.18,n*.18,e*.18,t*.18)),x=Math.max(.04,Math.min(g*.8,s*.35)),m=Math.min(c-g-.05,Math.max(f+x,c-s));a.moveTo(l+g,h),a.lineTo(c-g,h),a.quadraticCurveTo(c,h,c,h+g),a.lineTo(c,u-g),a.quadraticCurveTo(c,u,c-g,u),a.lineTo(m+x,u),a.quadraticCurveTo(m,u,m,u+x),a.lineTo(m,d-g),a.quadraticCurveTo(m,d,m-g,d),a.lineTo(l+g,d),a.quadraticCurveTo(l,d,l,d-g),a.lineTo(l,h+g),a.quadraticCurveTo(l,h,l+g,h),a.closePath();const p=new Oe(a,{depth:o,bevelEnabled:!1,curveSegments:16});return p.center(),p}function xr(i,t,e,n){const s=[new et(.01,0),new et(i*.72,.02*t),new et(i*n,.28*t),new et(i*1.04,.55*t),new et(i*.92,.82*t),new et(e,.94*t),new et(e*1.03,t)],o=new Cr(s,48);return o.center(),o}class Sv{constructor(t,e){this.scene=t,this.config=e,this.wallMaterial=new St({color:16248802,roughness:1}),this.floorMaterial=new St({color:16248802,roughness:e.floor.roughness}),this.backdrop=new at(new ie(e.wall.width,e.wall.height,e.wall.depth),this.wallMaterial),this.backdrop.name="room-wall",this.backdrop.castShadow=!0,this.backdrop.receiveShadow=!0,this.floor=new at(new ie(e.floor.width,.04,e.floor.height),this.floorMaterial),this.floor.name="room-floor",this.floor.castShadow=!1,this.floor.receiveShadow=!0,t.add(this.backdrop,this.floor),this.applyWall(),this.applyFloor()}applyWall(){this.backdrop.position.set(this.config.wall.x,this.config.wall.y,this.config.wall.z),this.wallMaterial.color.setHex(16248802),this.wallMaterial.roughness=1}applyFloor(){const t=this.config.floor;this.floor.geometry.dispose(),this.floor.geometry=new ie(t.width,.04,t.height),this.floor.position.set(t.x,t.y,t.z),this.floor.rotation.x=U(t.rotX),this.floor.rotation.y=U(t.rotY),this.floor.rotation.z=U(t.rotZ),this.floorMaterial.color.setHex(16248802).multiplyScalar(t.tone),this.floorMaterial.roughness=t.roughness}}function ga(i,t,e,n){const s=new Zt,o=new at(new ie(i,t,.018),e);o.name="paper-sheet",o.castShadow=!0,o.receiveShadow=!0,o.position.y=-t/2,s.add(o);for(let r=0;r<4;r+=1){const a=new at(new ie(i*(.38+r%2*.16),.022,.004),new St({color:n,roughness:.95,transparent:!0,opacity:.35}));a.position.set(-i*.08,-t*.32-r*.18,.012),s.add(a)}return s}function Lh(i,t,e,n){const s=new Zt,o=new at(new Vt(.25,.25,.08,32),t);o.name="pin-top",o.castShadow=!0,o.receiveShadow=!0,o.rotation.x=Math.PI/2,s.add(o);const r=new at(new Vt(.15,.15,.4,32),e);r.name="pin-stem",r.receiveShadow=!0,r.rotation.x=Math.PI/2,s.add(r);const a=new at(new Vt(.25,.25,.08,32),t);a.name="pin-base",a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=Math.PI/2,s.add(a);const l=new at(new Vt(.015,.015,.3,16),n);return l.name="pin-needle",l.receiveShadow=!0,l.rotation.x=Math.PI/2,s.add(l),i.add(s),{pushpin:s,top:o,stem:r,base:a,pin:l}}class yv{constructor(t,e,n,s){this.config=e,this.paperConfigs=n,this.pinConfigs=s,this.group=new Zt;const o=new St({color:15389084,roughness:.9}),r=new St({color:12031357,roughness:1}),a=new St({color:16250095,roughness:.97}),l=new St({color:12572398,roughness:.97}),c=new St({color:15430015,roughness:.72}),h=new St({color:13916775,roughness:.76}),u=new St({color:7434609,roughness:.35,metalness:.7});this.frame=new at(xv(),o),this.frame.name="board-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.cork=new at(vv(),r),this.cork.name="board-cork",this.cork.position.z=-.02,this.cork.receiveShadow=!0,this.group.add(this.cork),this.paperLayer=new Zt,this.paperLayer.position.z=.055,this.cork.add(this.paperLayer),this.papers={backPaper:ga(.92,1.24,a,13617087),frontPaper:ga(1,1.34,l,10336727),rightPaper:ga(.94,1.28,a,13946567)},Object.values(this.papers).forEach(f=>this.paperLayer.add(f)),this.pins={leftPin:Lh(this.cork,c,h,u),rightPin:Lh(this.cork,c,h,u)},t.add(this.group),this.apply()}applyPaperTransform(t){const e=this.papers[t],n=this.paperConfigs[t];e.position.set(n.x,n.y,n.z),e.rotation.x=U(n.rotX),e.rotation.z=U(n.rotZ)}applyPinTransform(t){const e=this.pins[t],n=this.pinConfigs[t];e.pushpin.position.set(n.x,n.y,n.z),e.top.geometry.dispose(),e.top.geometry=new Vt(n.topRadius,n.topRadius,n.topHeight,32),e.top.position.z=0,e.stem.geometry.dispose(),e.stem.geometry=new Vt(n.stemRadius,n.stemRadius,n.stemHeight,32),e.stem.position.z=-(n.topHeight*.5+n.stemHeight*.5),e.base.geometry.dispose(),e.base.geometry=new Vt(n.baseRadius,n.baseRadius,n.baseHeight,32),e.base.position.z=-(n.topHeight+n.stemHeight)+n.baseHeight*.5,e.pin.geometry.dispose(),e.pin.geometry=new Vt(n.pinRadius,n.pinRadius,n.pinHeight,16),e.pin.position.z=-(n.topHeight+n.stemHeight+n.baseHeight+n.pinHeight*.5-n.pinInset)}apply(){this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ),Object.keys(this.papers).forEach(t=>this.applyPaperTransform(t)),Object.keys(this.pins).forEach(t=>this.applyPinTransform(t))}getPaperSections(){return[{title:"Left Back",mesh:this.papers.backPaper,config:this.paperConfigs.backPaper,applyPaperTransform:()=>this.applyPaperTransform("backPaper")},{title:"Left Front",mesh:this.papers.frontPaper,config:this.paperConfigs.frontPaper,applyPaperTransform:()=>this.applyPaperTransform("frontPaper")},{title:"Right",mesh:this.papers.rightPaper,config:this.paperConfigs.rightPaper,applyPaperTransform:()=>this.applyPaperTransform("rightPaper")}]}getPinSections(){return[{title:"Left Pin",config:this.pinConfigs.leftPin,applyPinTransform:()=>this.applyPinTransform("leftPin")},{title:"Right Pin",config:this.pinConfigs.rightPin,applyPinTransform:()=>this.applyPinTransform("rightPin")}]}}function Dh(i,t,e,n){const s=new Zt,o=new at(new ie(.1,.1,.1),t),r=new at(new ie(.1,.1,.1),e),a=new at(new ie(.1,.1,.1),n);return o.name="book-cover",r.name="book-pages",a.name="book-spine",[o,r,a].forEach(l=>{l.castShadow=!0,l.receiveShadow=!0,s.add(l)}),i.add(s),{group:s,cover:o,pages:r,spine:a}}class Mv{constructor(t,e,n,s,o,r){this.shelfConfig=e,this.potConfig=n,this.cactusConfig=s,this.bookConfig=o,this.bookTwoConfig=r;const a=new St({color:15983548,roughness:.92}),l=new St({color:16382453,roughness:.95}),c=new St({color:7097138,roughness:1}),h=new St({color:10936089,roughness:.88}),u=new St({color:15908675,roughness:.9}),f=new St({color:14523941,roughness:.9}),d=new St({color:14410476,roughness:.92}),g=new St({color:13095132,roughness:.94});this.bookPagesMaterial=new St({color:15265269,roughness:.96}),this.shelf=new at(Ah(e.width,e.height,e.depth,e.radius),a),this.shelf.name="shelf",this.shelf.castShadow=!0,this.shelf.receiveShadow=!0,t.add(this.shelf),this.pot=new at(xr(n.radius,n.height,n.neck,n.bulge),l),this.pot.name="pot",this.pot.castShadow=!0,this.pot.receiveShadow=!0,this.shelf.add(this.pot),this.soil=new at(new Vt(.12,.12,.03,32),c),this.soil.name="pot-soil",this.soil.receiveShadow=!0,this.shelf.add(this.soil),this.cactus=new Zt,this.cactusMain=new at(new Yn(.14,28,28),h),this.cactusArm=new at(new Yn(.1,28,28),h),this.cactusMain.name="cactus-main",this.cactusArm.name="cactus-arm",[this.cactusMain,this.cactusArm].forEach(x=>{x.castShadow=!0,x.receiveShadow=!0,this.cactus.add(x)}),this.shelf.add(this.cactus),this.book=Dh(this.shelf,u,this.bookPagesMaterial,f),this.bookTwo=Dh(this.shelf,d,this.bookPagesMaterial,g),this.applyAll()}applyShelfTransform(){this.shelf.geometry.dispose(),this.shelf.geometry=Ah(this.shelfConfig.width,this.shelfConfig.height,this.shelfConfig.depth,this.shelfConfig.radius),this.shelf.position.set(this.shelfConfig.x,this.shelfConfig.y,this.shelfConfig.z),this.shelf.rotation.x=U(this.shelfConfig.rotX),this.shelf.rotation.y=U(this.shelfConfig.rotY),this.shelf.rotation.z=U(this.shelfConfig.rotZ)}applyPotTransform(){this.pot.geometry.dispose(),this.pot.geometry=xr(this.potConfig.radius,this.potConfig.height,this.potConfig.neck,this.potConfig.bulge),this.pot.position.set(this.potConfig.x,this.potConfig.y,this.potConfig.z),this.pot.rotation.x=U(this.potConfig.rotX),this.pot.rotation.y=U(this.potConfig.rotY),this.pot.rotation.z=U(this.potConfig.rotZ),this.soil.geometry.dispose(),this.soil.geometry=new Vt(this.potConfig.soilRadius,this.potConfig.soilRadius,this.potConfig.soilHeight,32),this.soil.position.copy(this.pot.position),this.soil.rotation.copy(this.pot.rotation),this.soil.position.y+=this.potConfig.soilOffsetY}applyCactusTransform(){this.cactus.position.set(this.cactusConfig.x,this.cactusConfig.y,this.cactusConfig.z),this.cactus.rotation.x=U(this.cactusConfig.rotX),this.cactus.rotation.y=U(this.cactusConfig.rotY),this.cactus.rotation.z=U(this.cactusConfig.rotZ),this.cactusMain.geometry.dispose(),this.cactusMain.geometry=new Yn(this.cactusConfig.mainRadius,28,28),this.cactusMain.scale.set(.9,this.cactusConfig.mainHeight/(this.cactusConfig.mainRadius*2),.72),this.cactusMain.position.set(this.cactusConfig.mainLean,0,0),this.cactusArm.geometry.dispose(),this.cactusArm.geometry=new Yn(this.cactusConfig.armRadius,28,28),this.cactusArm.scale.set(.9,this.cactusConfig.armHeight/(this.cactusConfig.armRadius*2),.72),this.cactusArm.position.set(this.cactusConfig.armOffsetX,this.cactusConfig.armOffsetY,0),this.cactusArm.rotation.z=this.cactusConfig.armLean}applyBookModelTransform(t,e){t.cover.geometry.dispose(),t.cover.geometry=new ie(e.width,e.height,e.depth),t.pages.geometry.dispose(),t.pages.geometry=new ie(e.pagesWidth,e.pagesHeight,e.pagesDepth),t.pages.position.set(e.pagesX,e.pagesY,e.pagesZ),t.spine.geometry.dispose(),t.spine.geometry=new ie(e.spineWidth,e.spineHeight,e.spineDepth),t.spine.position.set(e.spineX,e.spineY,e.spineZ),t.spine.rotation.y=U(e.spineRotY),t.group.position.set(e.x,e.y,e.z),t.group.rotation.x=U(e.rotX),t.group.rotation.y=U(e.rotY),t.group.rotation.z=U(e.rotZ)}applyBookTransform(){this.applyBookModelTransform(this.book,this.bookConfig)}applyBookTwoTransform(){this.applyBookModelTransform(this.bookTwo,this.bookTwoConfig)}applyAll(){this.applyShelfTransform(),this.applyPotTransform(),this.applyCactusTransform(),this.applyBookTransform(),this.applyBookTwoTransform()}getBookSections(){return[{title:"Orange Book",config:this.bookConfig,applyBookTransform:()=>this.applyBookTransform()},{title:"Blue Book",config:this.bookTwoConfig,applyBookTransform:()=>this.applyBookTwoTransform()}]}}class Ev{constructor(t,e){this.config=e,this.group=new Zt,this.topMaterial=new St({color:16250868,roughness:.94}),this.legMaterial=new St({color:13148267,roughness:.88}),this.top=new at(Ph(e.mainWidth,e.mainDepth,e.returnWidth,e.returnDepth,e.innerCut,e.thickness,e.radius),this.topMaterial),this.top.name="desk-top",this.top.castShadow=!0,this.top.receiveShadow=!0,this.group.add(this.top),this.legs=[];for(let n=0;n<5;n+=1){const s=new at(new Vt(e.legRadius,e.legRadius*1.08,e.legHeight,20),this.legMaterial);s.name=`desk-leg-${n+1}`,s.castShadow=!0,s.receiveShadow=!0,this.group.add(s),this.legs.push(s)}t.add(this.group),this.apply()}apply(){this.top.castShadow=!0,this.top.receiveShadow=!0,this.top.geometry.dispose(),this.top.geometry=Ph(this.config.mainWidth,this.config.mainDepth,this.config.returnWidth,this.config.returnDepth,this.config.innerCut,this.config.thickness,this.config.radius);const t=-this.config.mainWidth/2,e=this.config.mainWidth/2,n=-this.config.mainDepth/2,s=this.config.mainDepth/2,o=t+this.config.returnWidth,r=this.config.returnDepth/2,a=Math.max(this.config.legRadius*1.8,this.config.legInset),l=-(this.config.legHeight/2+this.config.thickness/2),c=[[t+a,l,n+a],[e-a,l,n+a],[e-a,l,s-a],[t+a,l,r-a],[o-a,l,r-a]];this.legs.forEach((h,u)=>{h.castShadow=!1,h.receiveShadow=!0,h.geometry.dispose(),h.geometry=new Vt(this.config.legRadius,this.config.legRadius*1.08,this.config.legHeight,20),h.position.set(...c[u]),h.rotation.set(0,0,0)}),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.set(0,0,0),this.top.position.set(this.config.topX,this.config.topY,this.config.topZ),this.top.rotation.x=U(this.config.rotX),this.top.rotation.y=U(this.config.rotY),this.top.rotation.z=U(this.config.rotZ)}}class bv{constructor(t,e){this.config=e;const n=new St({color:12112367,roughness:.9}),s=new St({color:14280955,roughness:.95}),o=new St({color:16250868,roughness:.95});this.group=new Zt,this.frame=new at(Ch(e.width,e.height,e.depth,e.innerInset),n),this.frame.name="picture-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.inner=new at(Rh(e.width,e.height,.03,e.innerInset),s),this.inner.name="picture-inner",this.inner.receiveShadow=!0,this.group.add(this.inner),this.sun=new at(new Vt(.18,.18,.03,24),o),this.sun.name="picture-sun",this.sun.rotation.x=Math.PI/2,this.group.add(this.sun),this.mountainA=new at($o(.72,.55,.03),o),this.mountainA.name="picture-mountain-a",this.group.add(this.mountainA),this.mountainB=new at($o(.44,.34,.03),o),this.mountainB.name="picture-mountain-b",this.group.add(this.mountainB),t.add(this.group),this.apply()}apply(){this.frame.geometry.dispose(),this.frame.geometry=Ch(this.config.width,this.config.height,this.config.depth,this.config.innerInset),this.inner.geometry.dispose(),this.inner.geometry=Rh(this.config.width,this.config.height,.03,this.config.innerInset),this.inner.position.z=this.config.depth*.18,this.sun.geometry.dispose(),this.sun.geometry=new Vt(this.config.sunRadius,this.config.sunRadius,.03,24),this.sun.position.set(this.config.sunX,this.config.sunY,.06),this.mountainA.geometry.dispose(),this.mountainA.geometry=$o(this.config.mountainAWidth,this.config.mountainAHeight,.03),this.mountainA.position.set(this.config.mountainAX,this.config.mountainAY,.05),this.mountainA.scale.set(this.config.mountainAScaleX,this.config.mountainAScaleY,this.config.mountainAScaleZ),this.mountainA.rotation.z=U(this.config.mountainARotZ),this.mountainB.geometry.dispose(),this.mountainB.geometry=$o(this.config.mountainBWidth,this.config.mountainBHeight,.03),this.mountainB.position.set(this.config.mountainBX,this.config.mountainBY,.05),this.mountainB.scale.set(this.config.mountainBScaleX,this.config.mountainBScaleY,this.config.mountainBScaleZ),this.mountainB.rotation.z=U(this.config.mountainBRotZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ)}}function Ih(i,t,e,n){const s=new Oe(Ye(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}function Oh(i,t,e,n,s){const o=new Oe(Ye(i-n*2,t-n*2,Math.max(.08,s-n*.5)),{depth:e,bevelEnabled:!1,curveSegments:20});return o.center(),o}function Uh(i,t){const e=new at(new ie(i,.045,.01),new St({color:t,roughness:.92}));return e.castShadow=!1,e.receiveShadow=!1,e}function wv(i){for(;i.children.length>0;){const t=i.children.pop();i.remove(t),t.geometry&&t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&t.material.dispose()}}class nf{constructor(t,e){this.config=e,this.group=new Zt,this.frameMaterial=new St({color:7104383,roughness:.88}),this.screenMaterial=new St({color:3488321,roughness:.95,emissive:3488321,emissiveIntensity:e.screenGlow??.18}),this.standMaterial=new St({color:5459299,roughness:.9}),this.frame=new at(Ih(e.width,e.height,e.depth,e.radius),this.frameMaterial),this.frame.name="monitor-frame",this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),this.screen=new at(Oh(e.width,e.height,e.screenDepth,e.screenInset,e.radius),this.screenMaterial),this.screen.name="monitor-screen",this.screen.receiveShadow=!0,this.group.add(this.screen),this.content=new Zt,this.content.name="monitor-content",this.screen.add(this.content),this.stem=new at(new ie(e.standWidth,e.standHeight,e.standDepth),this.standMaterial),this.stem.name="monitor-stem",this.stem.castShadow=!0,this.stem.receiveShadow=!0,this.group.add(this.stem),this.base=new at(new ie(e.baseWidth,e.baseHeight,e.baseDepth),this.standMaterial),this.base.name="monitor-base",this.base.castShadow=!0,this.base.receiveShadow=!0,this.group.add(this.base),t.add(this.group),this.apply()}buildCodeContent(){const t=[14195768,12048207,11497958,9146520,15044504,14195768,12048207,11497958,9146520,14195768,12048207,15044504,11497958,12048207],e=[.92,1.18,.74,.52,.66,1.08,.82,1.26,.64,1.02,.78,.56,.88,.68],n=[0,.14,.28,.28,.14,0,.16,.3,.3,.16,0,.14,.28,0],s=Math.floor(this.config.codeVariant??0),o=this.config.codeWidthScale??1,r=Math.floor(this.config.codeScroll??0),a=Math.floor(this.config.codeActiveLine??e.length-1)%e.length,l=this.config.codeTypingProgress??1,c=t.map((x,m)=>t[(m+s)%t.length]),h=e.map((x,m)=>e[(m+s*3)%e.length]*o),u=-this.config.width*.34+(this.config.codeX??0),f=this.config.height*.26+(this.config.codeY??0);let d=u,g=f;if(c.forEach((x,m)=>{const p=(m+r)%c.length,T=m,S=m===a,E=h[p]*(S?Math.max(.16,l):1),O=n[(p+s)%n.length],R=Uh(E,c[p]),C=u+O,D=f-T*this.config.lineGap;R.name=`monitor-line-${m+1}`,R.position.set(C+E/2,D,this.config.screenDepth*.7),this.content.add(R),S&&(d=C+E+.04,g=D)}),this.config.codeCursorVisible){const x=new at(new ie(.025,.065,.01),new St({color:16052444,roughness:.92}));x.position.set(d,g,this.config.screenDepth*.72),this.content.add(x)}}buildUiContent(){const t=new St({color:2830133,roughness:.95}),e=new St({color:3488321,roughness:.95}),n=new St({color:3817285,roughness:.95}),s=new St({color:7314136,roughness:.92}),o=new St({color:13851747,roughness:.92}),r=this.config.uiActiveIconIndex??0,a=this.config.uiDotIconIndex??r,l=[],c=new at(new ie(this.config.width*(this.config.uiSidebarWidth??.06),this.config.height*.82,.01),t);c.position.set(this.config.uiSidebarX??-this.config.width*.35,0,this.config.screenDepth*.7),this.content.add(c);const h=new at(new ie(this.config.width*(this.config.uiPanelWidth??.13),this.config.height*.82,.01),e);h.position.set(this.config.uiPanelX??-this.config.width*.2,0,this.config.screenDepth*.68),this.content.add(h);const u=this.config.uiTopIconWidth??.22,f=new at(new ie(u,u,.01),r===0?s:n);f.position.set(this.config.uiTopIconX??-this.config.width*.43,this.config.uiTopIconY??this.config.height*.28,this.config.screenDepth*.75),this.content.add(f),l.push({x:f.position.x,y:f.position.y});for(let m=0;m<3;m+=1){const p=this.config.uiIconWidth??.18,T=new at(new ie(p,p,.01),r===m+1?s:n);T.position.set(this.config.uiIconX??-this.config.width*.43,(this.config.uiIconStartY??this.config.height*.02)-m*(this.config.uiIconGap??.3),this.config.screenDepth*.74),this.content.add(T),l.push({x:T.position.x,y:T.position.y})}if(this.config.uiDotVisible??!0){const m=l[ai.clamp(Math.floor(a),0,l.length-1)],p=new at(new Vt(.035,.035,.01,18),o);p.rotation.x=Math.PI/2,p.position.set(m.x+(this.config.uiDotX??0),m.y+(this.config.uiDotY??0),this.config.screenDepth*.76),this.content.add(p)}const d=this.config.uiLinesWidthScale??1,g=[.52,.42,.48,.34,.44,.28,.38].map(m=>m*d),x=this.config.uiLinesScroll??0;g.forEach((m,p)=>{const T=Uh(m,12633290),S=(p+x)%g.length;T.position.set((this.config.uiLinesX??-this.config.width*.07)+m*.5,(this.config.uiLinesY??this.config.height*.31)-S*(this.config.uiLineGap??.12),this.config.screenDepth*.76),this.content.add(T)})}buildContent(){if(wv(this.content),this.config.screenMode==="ui"){this.buildUiContent();return}this.buildCodeContent()}apply(){this.screenMaterial.color.set(this.config.screenColor??3488321),this.screenMaterial.emissive.set(this.config.screenGlowColor??this.config.screenColor??3488321),this.screenMaterial.emissiveIntensity=this.config.screenGlow??.18,this.frame.geometry.dispose(),this.frame.geometry=Ih(this.config.width,this.config.height,this.config.depth,this.config.radius),this.screen.geometry.dispose(),this.screen.geometry=Oh(this.config.width,this.config.height,this.config.screenDepth,this.config.screenInset,this.config.radius),this.screen.position.z=this.config.depth*.12,this.stem.geometry.dispose(),this.stem.geometry=new ie(this.config.standWidth,this.config.standHeight,this.config.standDepth),this.stem.position.set(0,-this.config.height*.52,-this.config.standOffsetZ),this.stem.rotation.x=U(this.config.standRotX),this.stem.rotation.z=U(this.config.standRotZ),this.base.geometry.dispose(),this.base.geometry=new ie(this.config.baseWidth,this.config.baseHeight,this.config.baseDepth),this.base.position.set(0,-this.config.height*.82+this.config.baseOffsetY,this.config.baseOffsetZ),this.base.rotation.x=U(this.config.baseRotX),this.base.rotation.z=U(this.config.baseRotZ),this.buildContent(),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ)}}function Tv(i,t,e,n){const s=new Es;s.moveTo(0,-t/2),s.bezierCurveTo(i*.55,-t*.28,i*.62,t*.22,0,t/2),s.bezierCurveTo(-i*.62,t*.22,-i*.55,-t*.28,0,-t/2);const o=new Oe(s,{depth:e,bevelEnabled:!0,bevelSegments:10,bevelSize:i*n.bevelSize,bevelThickness:e*n.bevelThickness,curveSegments:24});o.center();const r=o.attributes.position,a=i*.5,l=t*.5;for(let c=0;c<r.count;c+=1){const h=r.getX(c),u=r.getY(c);let f=r.getZ(c);const d=Math.max(0,1-Math.abs(h)/a),g=Math.max(0,1-Math.abs(u)/l),x=d*g,m=Math.max(0,1-Math.abs(h)/(a*n.ridgeWidth))*g,p=e*n.bodyBulge*x+e*n.ridgeBulge*m;f+=f>=0?p:-p,r.setZ(c,f)}return r.needsUpdate=!0,o.computeVertexNormals(),o}function _a(i){const t=new at(new ie(.1,.1,.02),i);return t.castShadow=!0,t.receiveShadow=!0,t}class Av{constructor(t,e,n){this.potConfig=e,this.plantConfig=n,this.group=new Zt,this.potMaterial=new St({color:16316661,roughness:.94}),this.bandMaterial=new St({color:13152922,roughness:.96}),this.soilMaterial=new St({color:7097138,roughness:1}),this.leafMaterial=new St({color:10936089,roughness:.86}),this.pot=new at(xr(e.radius,e.height,e.neck,e.bulge),this.potMaterial),this.pot.castShadow=!0,this.pot.receiveShadow=!0,this.group.add(this.pot),this.middleBand=new at(new Vt(.3,.32,.1,48),this.bandMaterial),this.middleBand.castShadow=!1,this.middleBand.receiveShadow=!0,this.group.add(this.middleBand),this.bottomBand=new at(new Vt(.28,.3,.08,48),this.bandMaterial),this.bottomBand.castShadow=!1,this.bottomBand.receiveShadow=!0,this.group.add(this.bottomBand),this.soil=new at(new Vt(.12,.12,.03,32),this.soilMaterial),this.soil.receiveShadow=!0,this.group.add(this.soil),this.plant=new Zt,this.centerLeaf=_a(this.leafMaterial),this.leftLeaf=_a(this.leafMaterial),this.rightLeaf=_a(this.leafMaterial),this.plant.add(this.centerLeaf,this.leftLeaf,this.rightLeaf),this.group.add(this.plant),t.add(this.group),this.applyPot(),this.applyPlant()}applyPot(){this.pot.geometry.dispose(),this.pot.geometry=xr(this.potConfig.radius,this.potConfig.height,this.potConfig.neck,this.potConfig.bulge),this.group.position.set(this.potConfig.x,this.potConfig.y,this.potConfig.z),this.group.rotation.x=U(this.potConfig.rotX),this.group.rotation.y=U(this.potConfig.rotY),this.group.rotation.z=U(this.potConfig.rotZ),this.middleBand.geometry.dispose(),this.middleBand.geometry=new Vt(this.potConfig.bandRadiusTop,this.potConfig.bandRadiusBottom,this.potConfig.bandHeight,48),this.middleBand.position.set(0,this.potConfig.bandY,0),this.bottomBand.geometry.dispose(),this.bottomBand.geometry=new Vt(this.potConfig.bottomBandRadiusTop,this.potConfig.bottomBandRadiusBottom,this.potConfig.bottomBandHeight,48),this.bottomBand.position.set(0,this.potConfig.bottomBandY,0),this.soil.geometry.dispose(),this.soil.geometry=new Vt(this.potConfig.soilRadius,this.potConfig.soilRadius,this.potConfig.soilHeight,32),this.soil.position.set(0,this.potConfig.soilY,0)}applyLeaf(t,e,n,s,o,r,a,l,c,h){t.geometry.dispose(),t.geometry=Tv(e,n,s,{bevelSize:this.plantConfig.bevelSize,bevelThickness:this.plantConfig.bevelThickness,bodyBulge:this.plantConfig.bodyBulge,ridgeBulge:this.plantConfig.ridgeBulge,ridgeWidth:this.plantConfig.ridgeWidth}),t.position.set(o,r,a),t.rotation.x=U(l),t.rotation.y=U(c),t.rotation.z=U(h)}applyPlant(){this.plant.position.set(this.plantConfig.x,this.plantConfig.y,this.plantConfig.z),this.plant.rotation.x=U(this.plantConfig.rotX),this.plant.rotation.y=U(this.plantConfig.rotY),this.plant.rotation.z=U(this.plantConfig.rotZ),this.applyLeaf(this.centerLeaf,this.plantConfig.centerWidth,this.plantConfig.centerHeight,this.plantConfig.depth,this.plantConfig.centerX,this.plantConfig.centerY,this.plantConfig.centerZ,this.plantConfig.centerRotX,this.plantConfig.centerRotY,this.plantConfig.centerRotZ),this.applyLeaf(this.leftLeaf,this.plantConfig.leftWidth,this.plantConfig.leftHeight,this.plantConfig.depth,this.plantConfig.leftX,this.plantConfig.leftY,this.plantConfig.leftZ,this.plantConfig.leftRotX,this.plantConfig.leftRotY,this.plantConfig.leftRotZ),this.applyLeaf(this.rightLeaf,this.plantConfig.rightWidth,this.plantConfig.rightHeight,this.plantConfig.depth,this.plantConfig.rightX,this.plantConfig.rightY,this.plantConfig.rightZ,this.plantConfig.rightRotX,this.plantConfig.rightRotY,this.plantConfig.rightRotZ)}}class Cv{constructor(t,e){this.config=e,this.group=new Zt,this.baseMaterial=new St({color:13015637,roughness:.72,metalness:.18}),this.poleMaterial=new St({color:12950103,roughness:.62,metalness:.28}),this.shadeMaterial=new St({color:16770996,emissive:16765818,emissiveIntensity:.45,roughness:.88,transparent:!0,opacity:.88,side:vn}),this.base=new at(new Vt(.3,.3,.08,48),this.baseMaterial),this.base.castShadow=!0,this.base.receiveShadow=!0,this.group.add(this.base),this.pole=new at(new Vt(.025,.025,3,32),this.poleMaterial),this.pole.castShadow=!0,this.pole.receiveShadow=!0,this.group.add(this.pole),this.shade=new at(new Vt(.52,.78,.58,64,1,!0),this.shadeMaterial),this.shade.castShadow=!0,this.shade.receiveShadow=!0,this.group.add(this.shade),this.bulb=new at(new Yn(.12,24,16),new St({color:16773573,emissive:16765818,emissiveIntensity:1.1,roughness:.5})),this.group.add(this.bulb),this.light=new Lu(16767125,.8,8,1.6),this.light.castShadow=!1,this.group.add(this.light),this.hitArea=new at(new ie(1.4,4.4,1),new fi({transparent:!0,opacity:0,depthWrite:!1})),this.hitArea.name="floor-lamp-hit-area",this.hitArea.userData.isFloorLampHitArea=!0,this.group.add(this.hitArea),t.add(this.group),this.apply()}apply(){this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ),this.base.geometry.dispose(),this.base.geometry=new Vt(this.config.baseRadius,this.config.baseRadius,this.config.baseHeight,48),this.base.position.set(0,this.config.baseY,0),this.pole.geometry.dispose(),this.pole.geometry=new Vt(this.config.poleRadius,this.config.poleRadius,this.config.poleHeight,32),this.pole.position.set(0,this.config.baseY+this.config.baseHeight*.5+this.config.poleHeight*.5,0),this.shade.geometry.dispose(),this.shade.geometry=new Vt(this.config.shadeTopRadius,this.config.shadeBottomRadius,this.config.shadeHeight,64,1,!0),this.shade.position.set(this.config.shadeX,this.config.shadeY,this.config.shadeZ),this.shade.rotation.x=U(this.config.shadeRotX),this.shade.rotation.y=U(this.config.shadeRotY),this.shade.rotation.z=U(this.config.shadeRotZ),this.bulb.geometry.dispose(),this.bulb.geometry=new Yn(this.config.bulbRadius,24,16),this.bulb.position.set(this.config.bulbX,this.config.bulbY,this.config.bulbZ),this.light.position.set(this.config.lightX,this.config.lightY,this.config.lightZ),this.light.intensity=this.config.lightIntensity,this.light.distance=this.config.lightDistance,this.light.decay=this.config.lightDecay,this.hitArea.position.set(0,1.85,0),this.hitArea.scale.set(Math.max(.4,this.config.shadeBottomRadius*1.6),Math.max(.5,this.config.poleHeight/4.4+this.config.shadeHeight/4.4),Math.max(.4,this.config.shadeBottomRadius*1.15)),this.baseMaterial.color.set(this.config.baseColor),this.poleMaterial.color.set(this.config.poleColor),this.shadeMaterial.color.set(this.config.shadeColor),this.shadeMaterial.emissive.set(this.config.shadeGlowColor),this.shadeMaterial.emissiveIntensity=this.config.shadeGlow,this.shadeMaterial.opacity=this.config.shadeOpacity,this.bulb.material.color.set(this.config.bulbColor),this.bulb.material.emissive.set(this.config.bulbGlowColor),this.bulb.material.emissiveIntensity=this.config.bulbGlow,this.light.color.set(this.config.lightColor)}}function Jo(i,t,e,n){const s=new Oe(Ye(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:16});return s.center(),s}class Rv{constructor(t,e,n){this.keyboardConfig=e,this.mouseConfig=n,this.keyboardMaterial=new St({color:15330543,roughness:.94}),this.keyMaterial=new St({color:16185336,roughness:.9}),this.mouseMaterial=new St({color:14673130,roughness:.93}),this.keyboard=new Zt,this.keyboardBody=new at(Jo(1,.35,.05,.08),this.keyboardMaterial),this.keyboardBody.castShadow=!0,this.keyboardBody.receiveShadow=!0,this.keyboard.add(this.keyboardBody),this.keys=[],this.createKeys(),this.mouse=new Zt,this.mouseBody=new at(Jo(.22,.34,.06,.1),this.mouseMaterial),this.mouseBody.castShadow=!0,this.mouseBody.receiveShadow=!0,this.mouse.add(this.mouseBody),this.mouseSplit=new at(new ie(.008,.12,.008),new St({color:13028563,roughness:.9})),this.mouse.add(this.mouseSplit),t.add(this.keyboard,this.mouse),this.applyKeyboard(),this.applyMouse()}createKeys(){this.keys.forEach(n=>{this.keyboard.remove(n),n.geometry.dispose()}),this.keys=[];const t=Math.max(1,Math.round(this.keyboardConfig.keyRows)),e=Math.max(1,Math.round(this.keyboardConfig.keyCols));for(let n=0;n<t;n+=1)for(let s=0;s<e;s+=1){const o=new at(new ie(.07,.05,.012),this.keyMaterial);o.castShadow=!1,o.receiveShadow=!0,this.keyboard.add(o),this.keys.push(o)}}applyKeyboard(){this.keyboardBody.geometry.dispose(),this.keyboardBody.geometry=Jo(this.keyboardConfig.width,this.keyboardConfig.height,this.keyboardConfig.depth,this.keyboardConfig.radius),this.keyboard.position.set(this.keyboardConfig.x,this.keyboardConfig.y,this.keyboardConfig.z),this.keyboard.rotation.x=U(this.keyboardConfig.rotX),this.keyboard.rotation.y=U(this.keyboardConfig.rotY),this.keyboard.rotation.z=U(this.keyboardConfig.rotZ);const t=Math.max(1,Math.round(this.keyboardConfig.keyCols)),e=Math.max(1,Math.round(this.keyboardConfig.keyRows));this.keys.length!==t*e&&this.createKeys();const n=this.keyboardConfig.width*.95,s=this.keyboardConfig.height*.74,o=n/t*this.keyboardConfig.keyWidthScale,r=s/e*this.keyboardConfig.keyHeightScale;this.keys.forEach((a,l)=>{const c=l%t,h=Math.floor(l/t);a.geometry.dispose(),a.geometry=new ie(o,r,this.keyboardConfig.keyDepth),a.position.set(-n/2+c*(n/t)+o*.5,s/2-h*(s/e)-r*.5,this.keyboardConfig.depth*.35)})}applyMouse(){this.mouseBody.geometry.dispose(),this.mouseBody.geometry=Jo(this.mouseConfig.width,this.mouseConfig.height,this.mouseConfig.depth,this.mouseConfig.radius),this.mouse.position.set(this.mouseConfig.x,this.mouseConfig.y,this.mouseConfig.z),this.mouse.rotation.x=U(this.mouseConfig.rotX),this.mouse.rotation.y=U(this.mouseConfig.rotY),this.mouse.rotation.z=U(this.mouseConfig.rotZ),this.mouseSplit.position.set(0,this.mouseConfig.height*.14,this.mouseConfig.depth*.4),this.mouseSplit.scale.y=this.mouseConfig.splitHeight}}function Qo(i,t,e,n){const s=new Oe(Ye(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}class Pv{constructor(t,e){this.config=e,this.bodyMaterial=new St({color:14721823,roughness:.82}),this.frontMaterial=new St({color:16250095,roughness:.95}),this.coneMaterial=new St({color:5197927,roughness:.88}),this.group=new Zt,this.body=new at(Qo(.8,1,.6,.08),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.frontPanel=new at(Qo(.62,.82,.04,.04),this.frontMaterial),this.frontPanel.castShadow=!0,this.frontPanel.receiveShadow=!0,this.group.add(this.frontPanel),this.cone=new at(new Vt(.19,.19,.06,32),this.coneMaterial),this.cone.castShadow=!0,this.cone.receiveShadow=!0,this.cone.rotation.x=Math.PI/2,this.group.add(this.cone),this.smallCone=new at(new Vt(.08,.08,.03,32),this.coneMaterial),this.smallCone.castShadow=!0,this.smallCone.receiveShadow=!0,this.smallCone.rotation.x=Math.PI/2,this.group.add(this.smallCone),t.add(this.group),this.apply()}apply(){this.body.geometry.dispose(),this.body.geometry=Qo(this.config.width,this.config.height,this.config.depth,this.config.radius),this.frontPanel.geometry.dispose(),this.frontPanel.geometry=Qo(this.config.panelWidth,this.config.panelHeight,this.config.panelDepth,this.config.panelRadius),this.frontPanel.position.set(this.config.panelX,this.config.panelY,this.config.panelZ),this.cone.geometry.dispose(),this.cone.geometry=new Vt(this.config.coneRadius,this.config.coneRadius,this.config.coneDepth,32),this.cone.position.set(this.config.coneX,this.config.coneY,this.config.coneZ),this.smallCone.geometry.dispose(),this.smallCone.geometry=new Vt(this.config.smallConeRadius,this.config.smallConeRadius,this.config.smallConeDepth,32),this.smallCone.position.set(this.config.smallConeX,this.config.smallConeY,this.config.smallConeZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ)}setConePulse(t){this.cone.scale.set(t,1,t)}}class Lv{constructor(t,e){this.config=e,this.group=new Zt,this.bodyMaterial=new St({color:e.bodyColor,roughness:.9}),this.coffeeMaterial=new St({color:e.coffeeColor,roughness:.78}),this.handleMaterial=new St({color:e.bodyColor,roughness:.9}),this.body=new at(new Vt(.4,.36,.7,48),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.coffee=new at(new Vt(.32,.32,.02,48),this.coffeeMaterial),this.coffee.receiveShadow=!0,this.group.add(this.coffee),this.handle=new at(new ys(.24,.04,12,32,Math.PI*1.32),this.handleMaterial),this.handle.castShadow=!0,this.handle.receiveShadow=!0,this.group.add(this.handle),this.steamGroup=new Zt,this.steamLines=[],this.group.add(this.steamGroup),t.add(this.group),this.apply()}rebuildSteam(){for(;this.steamGroup.children.length>0;){const e=this.steamGroup.children.pop();this.steamGroup.remove(e),e.geometry.dispose(),e.material.dispose()}this.steamLines=[];const t=Math.max(0,Math.round(this.config.steamCount));for(let e=0;e<t;e+=1){const n=new je,s=new fi({color:this.config.steamColor,transparent:!0,opacity:this.config.steamOpacity,depthWrite:!1}),o=new at(n,s);this.steamGroup.add(o),this.steamLines.push(o)}}apply(){this.bodyMaterial.color.set(this.config.bodyColor),this.handleMaterial.color.set(this.config.bodyColor),this.coffeeMaterial.color.set(this.config.coffeeColor),this.body.geometry.dispose(),this.body.geometry=new Vt(this.config.topRadius,this.config.bottomRadius,this.config.height,48),this.body.position.set(0,this.config.height*.5,0),this.coffee.geometry.dispose(),this.coffee.geometry=new Vt(this.config.coffeeRadius,this.config.coffeeRadius,this.config.coffeeDepth,48),this.coffee.position.set(0,this.config.height+this.config.coffeeOffsetY,0),this.handle.geometry.dispose(),this.handle.geometry=new ys(this.config.handleRadius,this.config.handleTube,12,32,Math.PI*this.config.handleArc),this.handle.position.set(this.config.handleX,this.config.handleY,this.config.handleZ),this.handle.rotation.x=U(this.config.handleRotX),this.handle.rotation.y=U(this.config.handleRotY),this.handle.rotation.z=U(this.config.handleRotZ),this.handle.scale.set(this.config.handleScaleX,this.config.handleScaleY,this.config.handleScaleZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ),this.steamGroup.position.set(this.config.steamOffsetX,this.config.height+.06+this.config.steamOffsetY,this.config.steamOffsetZ),this.steamGroup.rotation.x=U(-this.config.rotX+this.config.steamRotX),this.steamGroup.rotation.y=U(-this.config.rotY+this.config.steamRotY),this.steamGroup.rotation.z=U(-this.config.rotZ+this.config.steamRotZ),this.rebuildSteam()}updateSteam(t){if(!this.config.steamEnabled){this.steamGroup.visible=!1;return}this.steamGroup.visible=!0;const e=this.config.steamSpeed,n=this.config.steamSpread,s=this.config.steamHeight;this.steamLines.forEach((o,r)=>{o.material.color.set(this.config.steamColor),o.material.opacity=this.config.steamOpacity;const a=r/Math.max(1,this.steamLines.length)*Math.PI*2,l=t*.0012*e+r*1.7,c=Math.cos(a)*n*.26,h=Math.sin(a)*n*.18,u=[];for(let f=0;f<8;f+=1){const d=f/7,g=Math.sin(l+d*Math.PI*2.2)*n*d,x=Math.cos(l*.8+d*Math.PI*1.9)*n*.45*d;u.push(new P(c+g,d*s,h+x))}o.geometry.dispose(),o.geometry=new oo(new Fl(u),16,this.config.steamThickness,6,!1)})}}function tr(i,t,e,n){const s=new Oe(Ye(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:18});return s.center(),s}class Dv{constructor(t,e){this.config=e,this.group=new Zt,this.bodyMaterial=new St({color:e.bodyColor,roughness:.86}),this.screenMaterial=new St({color:e.screenColor,roughness:.72,emissive:e.screenColor,emissiveIntensity:.06}),this.detailMaterial=new St({color:e.detailColor,roughness:.9}),this.timeMaterial=new fi({color:e.timeColor}),this.fingerprintMaterial=new fi({color:e.fingerprintColor,transparent:!0,opacity:.8}),this.body=new at(tr(.5,.92,.06,.08),this.bodyMaterial),this.body.castShadow=!0,this.body.receiveShadow=!0,this.group.add(this.body),this.screen=new at(tr(.42,.74,.012,.055),this.screenMaterial),this.screen.castShadow=!1,this.screen.receiveShadow=!0,this.group.add(this.screen),this.cameraDot=new at(new Vt(.025,.025,.012,18),this.detailMaterial),this.cameraDot.rotation.x=Math.PI/2,this.group.add(this.cameraDot),this.timeGroup=new Zt,this.group.add(this.timeGroup),this.fingerprint=new at(new Vt(.035,.035,.012,32),this.fingerprintMaterial),this.fingerprint.rotation.x=Math.PI/2,this.group.add(this.fingerprint),t.add(this.group),this.apply()}clearTime(){for(;this.timeGroup.children.length>0;){const t=this.timeGroup.children.pop();this.timeGroup.remove(t),t.geometry.dispose()}}addSegment(t,e,n,s,o){const r=new at(new ie(o?n:s,o?s:n,this.config.timeThickness),this.timeMaterial);r.position.set(t,e,0),this.timeGroup.add(r)}addDigit(t,e){const n={0:["a","b","c","d","e","f"],1:["b","c"],2:["a","b","g","e","d"],3:["a","b","g","c","d"],4:["f","g","b","c"],5:["a","f","g","c","d"],6:["a","f","g","e","c","d"],7:["a","b","c"],8:["a","b","c","d","e","f","g"],9:["a","b","c","d","f","g"]}[t],s=this.config.timeWidth,o=this.config.timeHeight,r=Math.max(.004,s*.18);if(!n){this.addSegment(e+s*.5,0,r,r,!0),this.addSegment(e+s*.5,o*.36,r,r,!0);return}n.includes("a")&&this.addSegment(e+s*.5,o,s,r,!0),n.includes("g")&&this.addSegment(e+s*.5,o*.5,s,r,!0),n.includes("d")&&this.addSegment(e+s*.5,0,s,r,!0),n.includes("f")&&this.addSegment(e,o*.75,o*.5,r,!1),n.includes("b")&&this.addSegment(e+s,o*.75,o*.5,r,!1),n.includes("e")&&this.addSegment(e,o*.25,o*.5,r,!1),n.includes("c")&&this.addSegment(e+s,o*.25,o*.5,r,!1)}buildTime(){this.clearTime(),this.timeMaterial.color.set(this.config.timeColor);let t=0;String(this.config.timeText).split("").forEach(e=>{this.addDigit(e,t),t+=e===":"?this.config.timeWidth*.55:this.config.timeWidth+this.config.timeGap}),this.timeGroup.position.set(this.config.timeX,this.config.timeY,this.config.depth*.68+this.config.timeZ),this.timeGroup.rotation.x=U(this.config.timeRotX),this.timeGroup.rotation.y=U(this.config.timeRotY),this.timeGroup.rotation.z=U(this.config.timeRotZ)}apply(){this.bodyMaterial.color.set(this.config.bodyColor),this.screenMaterial.color.set(this.config.screenColor),this.screenMaterial.emissive.set(this.config.screenColor),this.screenMaterial.emissiveIntensity=this.config.screenGlow,this.detailMaterial.color.set(this.config.detailColor),this.timeMaterial.color.set(this.config.timeColor),this.fingerprintMaterial.color.set(this.config.fingerprintColor),this.body.geometry.dispose(),this.body.geometry=tr(this.config.width,this.config.height,this.config.depth,this.config.radius),this.screen.geometry.dispose(),this.screen.geometry=tr(this.config.screenWidth,this.config.screenHeight,this.config.screenDepth,this.config.screenRadius),this.screen.position.set(this.config.screenX,this.config.screenY,this.config.depth*.52+this.config.screenZ),this.cameraDot.geometry.dispose(),this.cameraDot.geometry=new Vt(this.config.cameraRadius,this.config.cameraRadius,this.config.cameraDepth,18),this.cameraDot.position.set(this.config.cameraX,this.config.cameraY,this.config.depth*.62+this.config.cameraZ),this.buildTime(),this.fingerprint.geometry.dispose(),this.fingerprint.geometry=new Vt(this.config.fingerprintRadius,this.config.fingerprintRadius,this.config.fingerprintDepth,32),this.fingerprint.position.set(this.config.fingerprintX,this.config.fingerprintY,this.config.depth*.68+this.config.fingerprintZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ),this.group.scale.set(this.config.scaleX,this.config.scaleY,this.config.scaleZ)}}function Nh(i,t,e,n){const s=new Oe(Ye(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:24});return s.center(),s}class Iv{constructor(t,e){this.config=e,this.group=new Zt,this.colors=[15176470,16116360,15772458,16182938],this.layers=this.colors.map((n,s)=>{const o=new at(Nh(1,1,.04,.1),new St({color:n,roughness:.95}));return o.name=`rug-layer-${s+1}`,o.castShadow=!1,o.receiveShadow=!0,o.rotation.x=-Math.PI/2,this.group.add(o),o}),t.add(this.group),this.apply()}apply(){const t=[{width:this.config.width,height:this.config.height,inset:0},{width:this.config.width-this.config.inset1*2,height:this.config.height-this.config.inset1*2,inset:this.config.inset1},{width:this.config.width-this.config.inset2*2,height:this.config.height-this.config.inset2*2,inset:this.config.inset2},{width:this.config.width-this.config.inset3*2,height:this.config.height-this.config.inset3*2,inset:this.config.inset3}];this.layers.forEach((e,n)=>{const s=t[n];e.geometry.dispose(),e.geometry=Nh(Math.max(.2,s.width),Math.max(.2,s.height),this.config.depth,Math.max(.05,this.config.radius-n*this.config.radiusFalloff)),e.position.y=n*this.config.layerLift}),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ)}}function er(i,t,e,n){const s=new Oe(Ye(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:20});return s.center(),s}function Fh(i,t,e){const n=t+e,s=new Es;s.absarc(0,0,n,0,Math.PI/2,!1),s.lineTo(0,t),s.absarc(0,0,t,Math.PI/2,0,!0),s.closePath();const o=new Oe(s,{depth:i,bevelEnabled:!1,curveSegments:24});return o.center(),o.rotateY(Math.PI/2),o}function Bh(i){const t=[new P(-i.frameWidth/2,-i.frameDepth/2,0),new P(i.frameWidth/2,-i.frameDepth/2,0),new P(i.frameWidth/2,i.frameDepth/2,0),new P(i.backLegSpread/2,i.frameDepth/2,i.frameLift),new P(i.backLegSpread/2,i.frameDepth/2+i.backLegOffset,i.frameLift+i.backLegHeight),new P(-i.backLegSpread/2,i.frameDepth/2+i.backLegOffset,i.frameLift+i.backLegHeight),new P(-i.backLegSpread/2,i.frameDepth/2,i.frameLift),new P(-i.frameWidth/2,i.frameDepth/2,0),new P(-i.frameWidth/2,-i.frameDepth/2,0)];return new Fl(t,!1,"catmullrom",.2)}class Ov{constructor(t,e){this.config=e,this.shellMaterial=new St({color:16118249,roughness:.96}),this.frameMaterial=new St({color:9343128,roughness:.72,metalness:.25}),this.group=new Zt,this.shell=new Zt,this.shellBack=new at(er(1,1,.1,.08),this.shellMaterial),this.shellBack.castShadow=!0,this.shellBack.receiveShadow=!0,this.shell.add(this.shellBack),this.shellSeat=new at(er(1,1,.1,.08),this.shellMaterial),this.shellSeat.castShadow=!0,this.shellSeat.receiveShadow=!0,this.shell.add(this.shellSeat),this.shellBend=new at(Fh(1,.2,.1),this.shellMaterial),this.shellBend.castShadow=!0,this.shellBend.receiveShadow=!0,this.shell.add(this.shellBend),this.group.add(this.shell),this.frame=new at(new oo(Bh(e),64,.06,18,!1),this.frameMaterial),this.frame.castShadow=!0,this.frame.receiveShadow=!0,this.group.add(this.frame),t.add(this.group),this.apply()}apply(){this.shellBack.geometry.dispose(),this.shellBack.geometry=er(this.config.shellBackWidth,this.config.shellBackHeight,this.config.shellBackDepth,this.config.shellBackRadius),this.shellBack.position.set(this.config.shellBackX,this.config.shellBackY,this.config.shellBackZ),this.shellBack.rotation.x=U(this.config.shellBackRotX),this.shellBack.rotation.y=U(this.config.shellBackRotY),this.shellBack.rotation.z=U(this.config.shellBackRotZ),this.shellSeat.geometry.dispose(),this.shellSeat.geometry=er(this.config.shellSeatWidth,this.config.shellSeatHeight,this.config.shellSeatDepth,this.config.shellSeatRadius),this.shellSeat.position.set(this.config.shellSeatX,this.config.shellSeatY,this.config.shellSeatZ),this.shellSeat.rotation.x=U(this.config.shellSeatRotX),this.shellSeat.rotation.y=U(this.config.shellSeatRotY),this.shellSeat.rotation.z=U(this.config.shellSeatRotZ),this.shellBend.geometry.dispose(),this.shellBend.geometry=Fh(this.config.shellBendWidth,this.config.shellBendInnerRadius,this.config.shellBendThickness),this.shellBend.position.set(this.config.shellBendX,this.config.shellBendY,this.config.shellBendZ),this.shellBend.rotation.x=U(this.config.shellBendRotX),this.shellBend.rotation.y=U(this.config.shellBendRotY),this.shellBend.rotation.z=U(this.config.shellBendRotZ),this.shell.position.set(this.config.shellX,this.config.shellY,this.config.shellZ),this.shell.rotation.x=U(this.config.shellRotX),this.shell.rotation.y=U(this.config.shellRotY),this.shell.rotation.z=U(this.config.shellRotZ),this.frame.geometry.dispose(),this.frame.geometry=new oo(Bh(this.config),64,this.config.tubeRadius,18,!1),this.frame.position.set(this.config.frameX,this.config.frameY,this.config.frameZ),this.frame.rotation.x=U(this.config.frameRotX),this.frame.rotation.y=U(this.config.frameRotY),this.frame.rotation.z=U(this.config.frameRotZ),this.group.position.set(this.config.x,this.config.y,this.config.z),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ)}}function Dr(i){return i.castShadow=!0,i.receiveShadow=!0,i}function si(i,t,e){return Dr(new at(new Bl(i,t,8,16),e))}function en(i,t){return Dr(new at(new Yn(i,24,24),t))}function zh(i,t,e,n){return Dr(new at(new ie(i,t,e),n))}function Uv(i,t,e,n,s){const o=new Oe(Ye(i,t,n),{depth:e,bevelEnabled:!1,curveSegments:16});return o.center(),Dr(new at(o,s))}function Tn(i,t){const e=Math.sin(i*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function Nv(){const i=document.createElement("canvas");i.width=16,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,i.height);return e.addColorStop(0,"rgba(255, 255, 255, 0)"),e.addColorStop(.16,"rgba(255, 255, 255, 0.85)"),e.addColorStop(.84,"rgba(255, 255, 255, 0.85)"),e.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=e,t.beginPath(),t.moveTo(8,0),t.quadraticCurveTo(14,0,14,8),t.lineTo(14,56),t.quadraticCurveTo(14,64,8,64),t.quadraticCurveTo(2,64,2,56),t.lineTo(2,8),t.quadraticCurveTo(2,0,8,0),t.fill(),new tx(i)}class Fv{constructor(t,e){this.config=e,this.skinMaterial=new St({color:16240042,roughness:.95}),this.hairStripTexture=Nv(),this.hairStripObject=new Ne,this.hairBaseMaterial=new fi({color:0,roughness:1}),this.shirtMaterial=new St({color:3820880,roughness:.92}),this.sleeveMaterial=new St({color:3820880,roughness:.92}),this.pelvisMaterial=new St({color:2499895,roughness:.94}),this.pantsMaterial=new St({color:1644587,roughness:.94}),this.sockMaterial=new St({color:16250870,roughness:.96}),this.shoeMaterial=new St({color:3948874,roughness:.9}),this.shoeToeMaterial=new St({color:16185078,roughness:.95}),this.eyeWhiteMaterial=new St({color:16777215,roughness:.92}),this.eyePupilMaterial=new St({color:5911592,roughness:.85}),this.browMaterial=new St({color:5911592,roughness:.9}),this.group=new Zt,this.group.name="character-root",t.add(this.group),this.buildBody(),this.apply()}buildBody(){this.torsoPivot=new Zt,this.group.add(this.torsoPivot),this.torso=si(.42,.75,this.shirtMaterial),this.torso.position.y=.6,this.torsoPivot.add(this.torso),this.pelvis=en(.32,this.pelvisMaterial),this.pelvis.scale.set(1.1,.75,.95),this.pelvis.position.y=.08,this.group.add(this.pelvis),this.headPivot=new Zt,this.headPivot.position.y=1.36,this.torsoPivot.add(this.headPivot),this.head=en(.55,this.skinMaterial),this.head.scale.set(1.08,1,1.03),this.headPivot.add(this.head),this.hairGroup=new Zt,this.headPivot.add(this.hairGroup),this.hairBase=en(.52,this.hairBaseMaterial),this.hairGroup.add(this.hairBase),this.hair=this.createHairStrips(45e3),this.hairGroup.add(this.hair),this.fringe=this.createHairStrips(360),this.hairGroup.add(this.fringe),this.earLeft=en(.12,this.skinMaterial),this.earLeft.position.set(-.5,-.02,.04),this.headPivot.add(this.earLeft),this.earRight=en(.12,this.skinMaterial),this.earRight.position.set(.5,-.02,.04),this.headPivot.add(this.earRight),this.leftEye=new Zt,this.leftEye.position.set(-.18,.02,.48),this.headPivot.add(this.leftEye),this.rightEye=new Zt,this.rightEye.position.set(.18,.02,.48),this.headPivot.add(this.rightEye),this.leftEyeWhite=en(.12,this.eyeWhiteMaterial),this.leftEyeWhite.scale.set(.92,1.08,.45),this.leftEye.add(this.leftEyeWhite),this.rightEyeWhite=en(.12,this.eyeWhiteMaterial),this.rightEyeWhite.scale.set(.92,1.08,.45),this.rightEye.add(this.rightEyeWhite),this.leftPupil=en(.065,this.eyePupilMaterial),this.leftPupil.position.z=.04,this.leftEye.add(this.leftPupil),this.rightPupil=en(.065,this.eyePupilMaterial),this.rightPupil.position.z=.04,this.rightEye.add(this.rightPupil),this.leftEyeHighlight=en(.018,this.eyeWhiteMaterial),this.leftEyeHighlight.position.set(.02,.025,.075),this.leftEye.add(this.leftEyeHighlight),this.rightEyeHighlight=en(.018,this.eyeWhiteMaterial),this.rightEyeHighlight.position.set(.02,.025,.075),this.rightEye.add(this.rightEyeHighlight),this.leftBrow=zh(.16,.04,.03,this.browMaterial),this.leftBrow.position.set(-.18,.23,.45),this.headPivot.add(this.leftBrow),this.rightBrow=zh(.16,.04,.03,this.browMaterial),this.rightBrow.position.set(.18,.23,.45),this.headPivot.add(this.rightBrow),this.mouth=new at(new ys(.085,.012,8,28,Math.PI),this.browMaterial),this.mouth.position.set(0,-.18,.48),this.mouth.rotation.z=Math.PI,this.mouth.scale.set(1.15,.42,1),this.headPivot.add(this.mouth),this.leftArm=this.buildArm(-1),this.rightArm=this.buildArm(1),this.leftLeg=this.buildLeg(-1),this.rightLeg=this.buildLeg(1)}buildArm(t){const e=new Zt;e.position.set(t*.48,1.02,.02),this.torsoPivot.add(e);const n=si(.115,.5,this.skinMaterial);n.position.y=-.32,e.add(n);const s=si(.14,.56,this.sleeveMaterial);s.position.y=-.33,s.scale.set(1.08,1,1.02),e.add(s);const o=new Zt;o.position.y=-.56,e.add(o);const r=si(.105,.5,this.skinMaterial);r.position.y=-.26,o.add(r);const a=new Zt;a.position.y=-.52,o.add(a);const l=si(.105,.08,this.skinMaterial);return l.position.y=-.055,l.scale.set(1.02,.95,.76),a.add(l),{shoulder:e,elbow:o,wrist:a,upperArm:n,sleeve:s,lowerArm:r,hand:l}}buildLeg(t){const e=new Zt;e.position.set(t*.2,-.08,0),this.group.add(e);const n=si(.15,.64,this.pantsMaterial);n.position.y=-.46,e.add(n);const s=new Zt;s.position.y=-.82,e.add(s);const o=si(.13,.56,this.pantsMaterial);o.position.y=-.4,s.add(o);const r=si(.12,.08,this.sockMaterial);r.position.y=-.77,s.add(r);const a=new Zt;a.position.y=-.76,s.add(a);const l=new Zt,c=Uv(.34,.045,.38,.035,this.shoeMaterial);l.add(c);const h=en(.18,this.shoeMaterial);l.add(h),a.add(l);const u=en(.13,this.shoeToeMaterial);return a.add(u),{hip:e,knee:s,ankle:a,upperLeg:n,lowerLeg:o,sock:r,shoe:l,sole:c,upperShoe:h,toe:u}}applyEyePupils(){const t=ai.clamp(this.config.eyeYaw,-1,1),e=ai.clamp(this.config.eyePitch,-1,1),n=t*.035,s=e*.028;this.leftPupil.position.x=n+this.config.pupilOffsetX,this.leftPupil.position.y=s+this.config.pupilOffsetY,this.leftPupil.position.z=this.config.pupilOffsetZ,this.rightPupil.position.x=n+this.config.pupilOffsetX,this.rightPupil.position.y=s+this.config.pupilOffsetY,this.rightPupil.position.z=this.config.pupilOffsetZ,this.leftEyeHighlight.position.x=n+this.config.eyeHighlightOffsetX,this.leftEyeHighlight.position.y=s+this.config.eyeHighlightOffsetY,this.leftEyeHighlight.position.z=this.config.eyeHighlightOffsetZ,this.rightEyeHighlight.position.x=n+this.config.eyeHighlightOffsetX,this.rightEyeHighlight.position.y=s+this.config.eyeHighlightOffsetY,this.rightEyeHighlight.position.z=this.config.eyeHighlightOffsetZ}createHairStrips(t){const e=this.createHairStripGeometry(),n=new fi({color:6962731,map:this.hairStripTexture,alphaTest:.08,transparent:!0,depthWrite:!1,side:vn}),s=new Q_(e,n,t);return s.frustumCulled=!1,s}createHairStripGeometry(){const t=new uo(.03,.12,1,5),e=t.attributes.position;for(let n=0;n<e.count;n+=1){const o=(e.getY(n)+.06)/.12,r=Math.sin(o*Math.PI)*this.config.hairCurveX+o*o*this.config.hairCurveTipX;e.setX(n,e.getX(n)+r),e.setZ(n,e.getZ(n)+Math.sin(o*Math.PI*1.35)*this.config.hairCurveZ)}return e.needsUpdate=!0,t.computeVertexNormals(),t}apply(){const t=ai.clamp(this.config.sitAmount,0,1),e=1.5;this.shirtMaterial.color.set(this.config.shirtColor??3820880),this.sleeveMaterial.color.set(this.config.sleeveColor??3820880),this.pelvisMaterial.color.set(this.config.pelvisColor??2499895),this.pantsMaterial.color.set(this.config.pantsColor??1644587),this.sockMaterial.color.set(this.config.sockColor??16250870),this.shoeMaterial.color.set(this.config.shoeColor??3948874),this.shoeToeMaterial.color.set(this.config.shoeToeColor??16185078),this.group.position.set(this.config.x+this.config.sitOffsetX*t,this.config.y+this.config.sitOffsetY*t,this.config.z+this.config.sitOffsetZ*t),this.group.rotation.x=U(this.config.rotX),this.group.rotation.y=U(this.config.rotY),this.group.rotation.z=U(this.config.rotZ),this.torso.scale.set(e*this.config.torsoScaleX,e*this.config.torsoScaleY,e*this.config.torsoScaleZ),this.torso.position.set(this.config.torsoOffsetX,.6*e+this.config.torsoOffsetY,this.config.torsoOffsetZ),this.pelvis.scale.set(1.18*e*this.config.pelvisScaleX,.62*e*this.config.pelvisScaleY,.92*e*this.config.pelvisScaleZ),this.pelvis.position.set(this.config.pelvisOffsetX,.08*e+this.config.pelvisOffsetY,this.config.pelvisOffsetZ),this.headPivot.position.set(this.config.headOffsetX,1.36*e+this.config.headOffsetY,this.config.headOffsetZ),this.head.scale.set(1.08*this.config.headScaleX,1*this.config.headScaleY,1.03*this.config.headScaleZ),this.applyHair(),this.earLeft.scale.set(this.config.earScaleX,this.config.earScaleY,this.config.earScaleZ),this.earRight.scale.set(this.config.earScaleX,this.config.earScaleY,this.config.earScaleZ),this.leftEyeWhite.scale.set(.92*this.config.eyeScaleX,1.08*this.config.eyeScaleY,.45*this.config.eyeScaleZ),this.rightEyeWhite.scale.set(.92*this.config.eyeScaleX,1.08*this.config.eyeScaleY,.45*this.config.eyeScaleZ),this.leftEyeWhite.rotation.set(U(this.config.leftEyeWhiteRotX),U(this.config.leftEyeWhiteRotY),U(this.config.leftEyeWhiteRotZ)),this.rightEyeWhite.rotation.set(U(this.config.rightEyeWhiteRotX),U(this.config.rightEyeWhiteRotY),U(this.config.rightEyeWhiteRotZ)),this.leftPupil.scale.setScalar(this.config.pupilScale),this.rightPupil.scale.setScalar(this.config.pupilScale),this.leftEyeHighlight.scale.setScalar(this.config.eyeHighlightScale),this.rightEyeHighlight.scale.setScalar(this.config.eyeHighlightScale),this.leftBrow.scale.set(this.config.browScaleX,this.config.browScaleY,this.config.browScaleZ),this.rightBrow.scale.set(this.config.browScaleX,this.config.browScaleY,this.config.browScaleZ),this.mouth.geometry.dispose(),this.mouth.geometry=new ys(this.config.mouthRadius,this.config.mouthTube,8,28,Math.PI*this.config.mouthArc),this.mouth.position.set(this.config.mouthOffsetX,this.config.mouthOffsetY,this.config.mouthOffsetZ),this.mouth.rotation.x=U(this.config.mouthRotX),this.mouth.rotation.y=U(this.config.mouthRotY),this.mouth.rotation.z=U(this.config.mouthRotZ),this.mouth.scale.set(this.config.mouthScaleX,this.config.mouthScaleY,this.config.mouthScaleZ),this.earLeft.position.set(-.5+this.config.leftEarOffsetX,-.02+this.config.leftEarOffsetY,.04+this.config.leftEarOffsetZ),this.earRight.position.set(.5+this.config.rightEarOffsetX,-.02+this.config.rightEarOffsetY,.04+this.config.rightEarOffsetZ),this.leftEye.position.set(-.18+this.config.leftEyeOffsetX,.02+this.config.leftEyeOffsetY,.48+this.config.leftEyeOffsetZ),this.rightEye.position.set(.18+this.config.rightEyeOffsetX,.02+this.config.rightEyeOffsetY,.48+this.config.rightEyeOffsetZ),this.leftBrow.position.set(-.18+this.config.leftBrowOffsetX,.23+this.config.leftBrowOffsetY,.45+this.config.leftBrowOffsetZ),this.rightBrow.position.set(.18+this.config.rightBrowOffsetX,.23+this.config.rightBrowOffsetY,.45+this.config.rightBrowOffsetZ),this.leftArm.shoulder.position.set(-.48*e+this.config.leftShoulderOffsetX,1.02*e+this.config.leftShoulderOffsetY,.02*e+this.config.leftShoulderOffsetZ),this.leftArm.shoulder.scale.set(e,e,e),this.leftArm.upperArm.scale.set(this.config.upperArmScaleX,this.config.upperArmScaleY,this.config.upperArmScaleZ),this.applySleeve(this.leftArm.sleeve),this.leftArm.lowerArm.scale.set(this.config.lowerArmScaleX,this.config.lowerArmScaleY,this.config.lowerArmScaleZ),this.leftArm.hand.scale.set(.95*this.config.handScaleX,1.12*this.config.handScaleY,.75*this.config.handScaleZ),this.rightArm.shoulder.position.set(.48*e+this.config.rightShoulderOffsetX,1.02*e+this.config.rightShoulderOffsetY,.02*e+this.config.rightShoulderOffsetZ),this.rightArm.shoulder.scale.set(e,e,e),this.rightArm.upperArm.scale.set(this.config.upperArmScaleX,this.config.upperArmScaleY,this.config.upperArmScaleZ),this.applySleeve(this.rightArm.sleeve),this.rightArm.lowerArm.scale.set(this.config.lowerArmScaleX,this.config.lowerArmScaleY,this.config.lowerArmScaleZ),this.rightArm.hand.scale.set(.95*this.config.handScaleX,1.12*this.config.handScaleY,.75*this.config.handScaleZ),this.leftArm.elbow.position.set(this.config.leftElbowOffsetX,-.62+this.config.leftElbowOffsetY,this.config.leftElbowOffsetZ),this.rightArm.elbow.position.set(this.config.rightElbowOffsetX,-.62+this.config.rightElbowOffsetY,this.config.rightElbowOffsetZ),this.leftLeg.hip.position.set(-.2*e+this.config.leftHipOffsetX,-.08*e+this.config.leftHipOffsetY,this.config.leftHipOffsetZ),this.leftLeg.hip.scale.set(e,e,e),this.leftLeg.upperLeg.scale.set(this.config.upperLegScaleX,this.config.upperLegScaleY,this.config.upperLegScaleZ),this.leftLeg.lowerLeg.scale.set(this.config.lowerLegScaleX,this.config.lowerLegScaleY,this.config.lowerLegScaleZ),this.applyFoot(this.leftLeg),this.rightLeg.hip.position.set(.2*e+this.config.rightHipOffsetX,-.08*e+this.config.rightHipOffsetY,this.config.rightHipOffsetZ),this.rightLeg.hip.scale.set(e,e,e),this.rightLeg.upperLeg.scale.set(this.config.upperLegScaleX,this.config.upperLegScaleY,this.config.upperLegScaleZ),this.rightLeg.lowerLeg.scale.set(this.config.lowerLegScaleX,this.config.lowerLegScaleY,this.config.lowerLegScaleZ),this.applyFoot(this.rightLeg),this.leftLeg.knee.position.set(this.config.leftKneeOffsetX,-.82+this.config.leftKneeOffsetY,this.config.leftKneeOffsetZ),this.rightLeg.knee.position.set(this.config.rightKneeOffsetX,-.82+this.config.rightKneeOffsetY,this.config.rightKneeOffsetZ),this.leftLeg.ankle.position.set(this.config.leftAnkleOffsetX,-.76+this.config.leftAnkleOffsetY,this.config.leftAnkleOffsetZ),this.rightLeg.ankle.position.set(this.config.rightAnkleOffsetX,-.76+this.config.rightAnkleOffsetY,this.config.rightAnkleOffsetZ),this.torsoPivot.rotation.x=U(this.config.torsoPitch+t*8),this.torsoPivot.rotation.y=U(this.config.torsoYaw),this.torsoPivot.rotation.z=U(this.config.torsoRoll),this.headPivot.rotation.x=U(this.config.headPitch),this.headPivot.rotation.y=U(this.config.headYaw),this.headPivot.rotation.z=U(this.config.headRoll),this.leftBrow.rotation.z=U(-10+this.config.browTilt),this.rightBrow.rotation.z=U(10-this.config.browTilt);const n=t*38,s=t*38,o=t*28,r=-t*96,a=t*96,l=-t*8;this.leftArm.shoulder.rotation.x=U(n+this.config.leftShoulderX),this.leftArm.shoulder.rotation.y=U(this.config.leftShoulderY),this.leftArm.shoulder.rotation.z=U(this.config.leftShoulderZ),this.leftArm.elbow.rotation.x=U(o+this.config.leftElbowX),this.leftArm.elbow.rotation.y=U(this.config.leftElbowY),this.leftArm.elbow.rotation.z=U(this.config.leftElbowZ),this.leftArm.wrist.rotation.x=U(this.config.leftWristX),this.leftArm.wrist.rotation.y=U(this.config.leftWristY),this.leftArm.wrist.rotation.z=U(this.config.leftWristZ),this.rightArm.shoulder.rotation.x=U(s+this.config.rightShoulderX),this.rightArm.shoulder.rotation.y=U(this.config.rightShoulderY),this.rightArm.shoulder.rotation.z=U(this.config.rightShoulderZ),this.rightArm.elbow.rotation.x=U(o+this.config.rightElbowX),this.rightArm.elbow.rotation.y=U(this.config.rightElbowY),this.rightArm.elbow.rotation.z=U(this.config.rightElbowZ),this.rightArm.wrist.rotation.x=U(this.config.rightWristX),this.rightArm.wrist.rotation.y=U(this.config.rightWristY),this.rightArm.wrist.rotation.z=U(this.config.rightWristZ),this.leftLeg.hip.rotation.x=U(r+this.config.leftHipX),this.leftLeg.hip.rotation.y=U(this.config.leftHipY),this.leftLeg.hip.rotation.z=U(this.config.leftHipZ),this.leftLeg.knee.rotation.x=U(a+this.config.leftKneeX),this.leftLeg.ankle.rotation.x=U(l+this.config.leftAnkleX),this.leftLeg.ankle.rotation.y=U(this.config.leftAnkleY),this.leftLeg.ankle.rotation.z=U(this.config.leftAnkleZ),this.rightLeg.hip.rotation.x=U(r+this.config.rightHipX),this.rightLeg.hip.rotation.y=U(this.config.rightHipY),this.rightLeg.hip.rotation.z=U(this.config.rightHipZ),this.rightLeg.knee.rotation.x=U(a+this.config.rightKneeX),this.rightLeg.ankle.rotation.x=U(l+this.config.rightAnkleX),this.rightLeg.ankle.rotation.y=U(this.config.rightAnkleY),this.rightLeg.ankle.rotation.z=U(this.config.rightAnkleZ),this.applyEyePupils()}applySleeve(t){const e=ai.clamp(this.config.sleeveLength??1,.4,1.6),n=ai.clamp(this.config.sleeveVolume??1,.6,1.8);t.position.y=.09-.42*e,t.scale.set(1.08*n,e,1.02*n)}applyHair(){this.hairGroup.position.set(0,0,0),this.hairGroup.rotation.set(0,0,0),this.hairGroup.scale.set(1,1,1),this.hair.geometry.dispose(),this.hair.geometry=this.createHairStripGeometry(),this.hairBaseMaterial.color.set(this.config.hairColor??1185052),this.hairBase.position.set(this.config.hairOffsetX+this.config.hairBaseOffsetX,this.config.hairOffsetY+this.config.hairBaseOffsetY,this.config.hairOffsetZ+this.config.hairBaseOffsetZ),this.hairBase.rotation.set(U(this.config.hairRotX+this.config.hairBaseRotX),U(this.config.hairRotY+this.config.hairBaseRotY),U(this.config.hairRotZ+this.config.hairBaseRotZ)),this.hairBase.scale.set(this.config.hairBaseScaleX*this.config.hairScaleX,this.config.hairBaseScaleY*this.config.hairScaleY,this.config.hairBaseScaleZ*this.config.hairScaleZ),this.updateHairCloud(this.hair,"hair",t=>{const e=Tn(t,1)*Math.PI*2,n=Math.sqrt(Tn(t,2)),s=Math.cos(e)*.49*n,o=-.07+Math.sin(e)*.43*n,r=Math.sqrt(Math.max(0,1-(s/.54)**2-((o+.06)/.48)**2)),a=(Tn(t,3)-.5)*this.config.hairScatter;return[s+a*.4,.08+r*.44+a,o+a*.5]}),this.updateHairCloud(this.fringe,"fringe",t=>{const e=Tn(t,11),n=Tn(t,12),s=-.4+e*.74,o=Math.sin(e*Math.PI),r=.34-n*.23-o*.07,a=.33+n*.11+o*.04;return[s,r,a]})}updateHairCloud(t,e,n){const s=t.instanceMatrix.count,o=Math.min(s,Math.max(0,Math.round(this.config[`${e}Count`]))),r=this.hairStripObject,a=e==="hair"?this.config.hairParticleSize:this.config[`${e}ParticleSize`]*this.config.hairParticleSize;for(let l=0;l<o;l+=1){const[c,h,u]=n(l),f=(Tn(l,44)-.5)*.9,d=(Tn(l,45)-.5)*Math.PI,g=a*(.85+Tn(l,46)*.55),x=a*(.16+Tn(l,47)*.08);r.position.set(c,h,u),r.rotation.set(f,d,Tn(l,48)*Math.PI),r.scale.set(x,g,1),r.updateMatrix(),t.setMatrixAt(l,r.matrix)}t.count=o,t.instanceMatrix.needsUpdate=!0,t.material.color.set(this.config.hairColor??6962731),t.material.opacity=e==="hair"?this.config.hairParticleOpacity:this.config[`${e}ParticleOpacity`],t.position.set(this.config[`${e}OffsetX`],this.config[`${e}OffsetY`],this.config[`${e}OffsetZ`]),t.rotation.set(U(this.config[`${e}RotX`]),U(this.config[`${e}RotY`]),U(this.config[`${e}RotZ`])),t.scale.set(this.config[`${e}ScaleX`],this.config[`${e}ScaleY`],this.config[`${e}ScaleZ`])}applyFoot(t){t.sock.position.set(this.config.sockOffsetX,-.77+this.config.sockOffsetY,this.config.sockOffsetZ),t.sock.rotation.set(U(this.config.sockRotX),U(this.config.sockRotY),U(this.config.sockRotZ)),t.sock.scale.set(this.config.sockScaleX,this.config.sockScaleY,this.config.sockScaleZ),t.shoe.position.set(this.config.shoeOffsetX,this.config.shoeOffsetY,this.config.shoeOffsetZ),t.shoe.rotation.set(U(this.config.shoeRotX),U(this.config.shoeRotY),U(this.config.shoeRotZ)),t.shoe.scale.set(this.config.shoeScaleX,this.config.shoeScaleY,this.config.shoeScaleZ),t.sole.position.set(this.config.soleOffsetX,this.config.soleOffsetY,this.config.soleOffsetZ),t.sole.rotation.set(U(this.config.soleRotX),U(this.config.soleRotY),U(this.config.soleRotZ)),t.sole.scale.set(this.config.soleScaleX,this.config.soleScaleY,this.config.soleScaleZ),t.upperShoe.position.set(this.config.upperShoeOffsetX,this.config.upperShoeOffsetY,this.config.upperShoeOffsetZ),t.upperShoe.rotation.set(U(this.config.upperShoeRotX),U(this.config.upperShoeRotY),U(this.config.upperShoeRotZ)),t.upperShoe.scale.set(this.config.upperShoeScaleX,this.config.upperShoeScaleY,this.config.upperShoeScaleZ),t.toe.position.set(this.config.toeOffsetX,this.config.toeOffsetY,this.config.toeOffsetZ),t.toe.rotation.set(U(this.config.toeRotX),U(this.config.toeRotY),U(this.config.toeRotZ)),t.toe.scale.set(.92*this.config.toeScaleX,.52*this.config.toeScaleY,.66*this.config.toeScaleZ)}}new URLSearchParams(window.location.search).get("embed")==="1"&&(document.documentElement.classList.add("is-embedded"),document.documentElement.classList.add("is-ui-hidden"));const Oi=document.createElement("button");Oi.className="ui-toggle-button";Oi.type="button";Oi.textContent="GUI";Oi.setAttribute("aria-pressed",String(document.documentElement.classList.contains("is-ui-hidden")));Oi.addEventListener("click",()=>{const i=document.documentElement.classList.toggle("is-ui-hidden");Oi.setAttribute("aria-pressed",String(i))});document.body.appendChild(Oi);const we=new j_;we.background=new Jt(16512232);we.fog=new Ar(16512232,14,28);const un=new K_({antialias:!0});un.setPixelRatio(Math.min(window.devicePixelRatio,2));un.setSize(window.innerWidth,window.innerHeight);un.shadowMap.enabled=!0;un.shadowMap.type=yl;un.outputColorSpace=gn;document.body.appendChild(un.domElement);const on=se(Hl),an=se(Uu),Vl=se(Nu),Yl=se(Fu),sf=se(Bu),of=se(zu),Wl=se(Hu),Zl=se(ku),ql=se(Xu),rf=se(Gu),af=se(Vu),Kl=se(Yu),jl=se(Wu),_e=se(kl),Se=se(Xl),$l=se(Zu),Jl=se(qu),Ql=se(Ku),tc=se(ju),fo=se(Gl),ec=se($u),nc=se(Ju),Ot=se(An),ic=se(Qu),sc=se(tf),$t=se(Lr),Dn=se(Ou),hn=new gv(un,on);hn.setOrbitEnabled(Dn.orbitControlsEnabled);const sl=new _v(we,an),Bv=new Sv(we,Vl),oc=new yv(we,Yl,sf,of),zv=new Ev(we,Kl),Ir=new Mv(we,Wl,Zl,ql,rf,af),Hv=new bv(we,jl),vr=new nf(we,_e),Sr=new nf(we,Se),lf=new Av(we,$l,Jl),cf=new Cv(we,Ql),rc=new Rv(we,tc,fo),hf=new Pv(we,ec),uf=new Lv(we,nc),js=new Dv(we,Ot),kv=new Iv(we,ic),Xv=new Ov(we,sc),Ke=new Fv(we,$t),qt=se(Lr),cs=se(Gl),sn=se(Lr);sn.headYaw=32;const nn=se(Xl);se(kl);const ff=se(Hl),xa={...ff,x:15.6,y:1.2,z:12.51,targetX:1.94,targetY:-.8,targetZ:-8.34,panX:-8.63,fov:28},Gv=300,Vv=2600;let va=null,ol=!1,rl=!1,al=!1,$s="right_monitor_idle",ll=1/0,Js=1/0,cl=!1;const yr={x:0,y:0},os={x:0,y:0},Hh=new Ox,Sa=new et,Yv={ambient:.1,key:.05,fill:1.2,front:0},Wv={screenColor:"#dedede",screenGlowColor:"#8e98a9"};let df=null,pf=null,de=null,Qs=!1;const Kn=Ux("Board Controls");document.body.appendChild(Kn);const ac=document.createElement("div");ac.className="panel-actions";Kn.appendChild(ac);const fe=Du(Kn,"Scene",!0),lc=Du(Kn,"man",!0);Pr(fe,"Fog",Dn.fogEnabled,i=>{Dn.fogEnabled=i,we.fog=i?new Ar(16512232,14,28):null});Pr(fe,"Orbit Controls",Dn.orbitControlsEnabled,i=>{Dn.orbitControlsEnabled=i,hn.setOrbitEnabled(i)});Nx(fe,"Music Pulse Speed",.25,8,.05,Dn.musicPulseSpeed,i=>{Dn.musicPulseSpeed=i});Vx(fe,Yl,()=>oc.apply(),!0);kx(fe,on,()=>hn.apply(),!0);Xx(fe,Vl.floor,()=>Bv.applyFloor(),!0);Gx(fe,ic,()=>kv.apply(),!0);Hx(fe,an,()=>sl.apply(),!0);jx(fe,Kl,()=>zv.apply(),!0);Iu(fe,"Monitor 1",_e,()=>vr.apply(),!0);Iu(fe,"Monitor 2",Se,()=>Sr.apply(),!0);$x(fe,$l,()=>lf.applyPot(),!0);Jx(fe,Jl,()=>lf.applyPlant(),!0);Qx(fe,Ql,()=>cf.apply(),!0);tv(fe,tc,()=>rc.applyKeyboard(),!0);ev(fe,fo,()=>rc.applyMouse(),!0);nv(fe,ec,()=>hf.apply(),!0);iv(fe,nc,()=>uf.apply(),!0);sv(fe,Ot,()=>js.apply(),!0);ov(fe,sc,()=>Xv.apply(),!0);Yx(fe,Wl,()=>Ir.applyShelfTransform(),!0);Kx(fe,jl,()=>Hv.apply(),!0);Wx(fe,Zl,()=>Ir.applyPotTransform(),!0);Zx(fe,ql,()=>Ir.applyCactusTransform(),!0);qx(fe,Ir.getBookSections(),!0);Bx(fe,oc.getPaperSections(),!0);zx(fe,oc.getPinSections(),!0);av(lc,$t,()=>Ke.apply(),!1);rv(lc,$t,()=>Ke.apply(),!0);lv(lc,$t,()=>Ke.apply(),!0);cv(Kn,$t,()=>Ke.apply(),!1);hv(Kn,$t,()=>Ke.apply(),!1);uv(Kn,$t,()=>Ke.apply(),!1);fv(Kn,$t,()=>Ke.apply(),!1);dv(Kn,$t,()=>Ke.apply(),!1);const _n=document.createElement("button");_n.className="panel-button";_n.type="button";_n.textContent="Скопировать GUI";ac.appendChild(_n);const bn=document.createElement("div");bn.className="action-stack";document.body.appendChild(bn);const bs=document.createElement("button");bs.className="action-button";bs.type="button";bs.textContent="left_monitor_idle";bn.appendChild(bs);const ws=document.createElement("button");ws.className="action-button";ws.type="button";ws.textContent="right_monitor_idle";bn.appendChild(ws);const po=document.createElement("button");po.className="action-button";po.type="button";po.textContent="Стоп";bn.appendChild(po);const On=document.createElement("button");On.className="action-button";On.type="button";On.textContent="Привет";bn.appendChild(On);const Un=document.createElement("button");Un.className="action-button";Un.type="button";Un.textContent="Phone Ring";bn.appendChild(Un);const mo=document.createElement("button");mo.className="action-button";mo.type="button";mo.textContent="Mouse 1";bn.appendChild(mo);const go=document.createElement("button");go.className="action-button";go.type="button";go.textContent="Mouse 2";bn.appendChild(go);const _o=document.createElement("button");_o.className="action-button";_o.type="button";_o.textContent="Mouse 3";bn.appendChild(_o);const xo=document.createElement("button");xo.className="action-button";xo.type="button";xo.textContent="Mouse 4";bn.appendChild(xo);let ft=null,ce=null,ve=!1,Xe=null,En=null;const We=[];let Wn=0,Ns=null,xn=null,Ci=32,hl=32,Fs=32,Bs=0,ul=600,fl=0,Or=0,zs=null,cr=0,Hs=null,Mr=0,Ri="typing",Er=0,ks=-24,dl=-24,Xs=-24,Gs=0,pl=700,ml=0;const rs={pitch:$t.headPitch,leftAnkleX:$t.leftAnkleX},as={pitch:0,leftAnkleX:0};let Gn=0,gl=0,hr=0,Vs=0,_l=500,xl=0,li=null,ro=0;const mf={mouse:{x:1.815,z:2.5},character:{leftShoulderX:-78.625,leftShoulderY:-176.25,leftShoulderZ:32.5,leftElbowX:30.875,leftElbowY:-1.5,leftElbowZ:-15,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},gf={mouse:{x:1.9,z:2.5275},character:{leftShoulderX:-80.25,leftShoulderY:-183.25,leftShoulderZ:31,leftElbowX:30.5,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},_f={mouse:{x:1.985,z:2.5},character:{leftShoulderX:-82.375,leftShoulderY:-178,leftShoulderZ:33.5,leftElbowX:22.625,leftElbowY:1.5,leftElbowZ:-14,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},xf={mouse:{x:1.9,z:2.4725},character:{leftShoulderX:-81.25,leftShoulderY:-170.75,leftShoulderZ:35,leftElbowX:20.375,leftElbowY:0,leftElbowZ:-14.5,leftWristX:1,leftWristY:-42,leftWristZ:-13.5}},kh={mouse:[mf,gf,_f,xf]},Zv=[["Atmosphere",Dn,Ou],["Board",Yl,Fu],["Camera",on,Hl],["Floor",Vl.floor,Nu.floor],["Rug",ic,Qu],["Lighting",an,Uu],["Desk",Kl,Yu],["Monitor 1",_e,kl],["Monitor 2",Se,Xl],["Floor Pot",$l,Zu],["Floor Plant",Jl,qu],["Floor Lamp",Ql,Ku],["Keyboard",tc,ju],["Mouse",fo,Gl],["Speaker",ec,$u],["Mug",nc,Ju],["Phone",Ot,An],["Chair",sc,tf],["Shelf",Wl,Hu],["Shelf Pot",Zl,ku],["Shelf Cactus",ql,Xu],["Orange Book",rf,Gu],["Blue Book",af,Vu],["Picture",jl,Wu],["Papers",sf,Bu],["Pins",of,zu],["Character",$t,Lr]];function jt(i,t,e){return i+(t-i)*e}function qv(i){return typeof i=="number"?Number.isInteger(i)?String(i):i.toFixed(3).replace(/\.?0+$/,""):typeof i=="boolean"?i?"true":"false":String(i)}function Kv(i){return i==="codeCursorVisible"}function vf(i,t,e=""){return i&&typeof i=="object"&&!Array.isArray(i)?[...new Set([...Object.keys(t??{}),...Object.keys(i)])].flatMap(s=>vf(i[s],t?.[s],e?`${e}.${s}`:s)):Kv(e)?[]:i!==t?[`${e}: ${qv(i)}`]:[]}function jv(){const i=Zv.map(([t,e,n])=>{const s=vf(e,n);return s.length===0?"":`[${t}]
${s.join(`
`)}`}).filter(Boolean);return i.length>0?i.join(`

`):"Изменений нет"}async function $v(){const i=jv();try{await navigator.clipboard.writeText(i);const t=_n.textContent;_n.textContent="Скопировано",window.setTimeout(()=>{_n.textContent=t},1200)}catch{const t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t);const e=_n.textContent;_n.textContent="Скопировано",window.setTimeout(()=>{_n.textContent=e},1200)}}_n.addEventListener("click",$v);function nr(i){return 1-Math.pow(1-i,3)}function qn(i){return-(Math.cos(Math.PI*i)-1)/2}function Jv(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Qv(i){if(ol)return;va===null&&(va=i);const t=i-va-Gv;if(t<0){hn.apply();return}const e=Math.min(1,t/Vv),n=Jv(e);Object.keys(xa).forEach(s=>{const o=ff[s],r=xa[s];on[s]=typeof o=="number"&&typeof r=="number"?jt(o,r,n):r}),hn.apply(),e>=1&&(Object.assign(on,xa),hn.apply(),ol=!0)}function Sf(i){if(!cl){ll=i+2500;return}ll=i+14e3+Math.random()*12e3}function yf(i){$s="right_monitor_idle",Js=1/0,ao("right_monitor_idle"),Sf(i)}function tS(i){if(!ve||ft||ce){Sf(i+3e3);return}if(!cl){cl=!0,$s="left_monitor_idle",Js=i+5e3,ao("left_monitor_idle");return}if(Math.random()<.18){$s="phone_ring",Js=i+4600,Mf();return}$s="left_monitor_idle",Js=i+5e3,ao("left_monitor_idle")}function eS(i){if(ol&&!rl){rl=!0,wf();return}if(al){if(i>=Js){yf(i);return}$s==="right_monitor_idle"&&i>=ll&&tS(i)}}function nS(){os.x+=(yr.x-os.x)*on.mouseSmooth,os.y+=(yr.y-os.y)*on.mouseSmooth;const i=os.x*on.mouseXAmount,t=os.y*on.mouseYAmount;hn.setParallax(on.mouseXCamera?i:0,on.mouseYCamera?t:0,on.mouseXTarget?i:0,on.mouseYTarget?t:0),hn.apply()}function Xh(){de={startTime:null,duration:850,lightingFrom:{ambient:an.ambient,key:an.key,fill:an.fill,front:an.front},lightingTarget:Qs?Yv:df,monitorOneFrom:{screenColor:_e.screenColor,screenGlowColor:_e.screenGlowColor},monitorTwoFrom:{screenColor:Se.screenColor,screenGlowColor:Se.screenGlowColor},monitorTarget:Qs?Wv:pf}}function iS(){if(!Qs){df={ambient:an.ambient,key:an.key,fill:an.fill,front:an.front},pf={screenColor:_e.screenColor,screenGlowColor:_e.screenGlowColor},Qs=!0,Xh();return}Qs=!1,Xh()}function sS(i){if(!de)return;de.startTime===null&&(de.startTime=i);const t=Math.min(1,(i-de.startTime)/de.duration),e=qn(t);de.lightingTarget&&(Object.keys(de.lightingTarget).forEach(n=>{an[n]=jt(de.lightingFrom[n],de.lightingTarget[n],e)}),sl.apply()),de.monitorTarget&&(_e.screenColor=fs(de.monitorOneFrom.screenColor,de.monitorTarget.screenColor,e),_e.screenGlowColor=fs(de.monitorOneFrom.screenGlowColor,de.monitorTarget.screenGlowColor,e),Se.screenColor=fs(de.monitorTwoFrom.screenColor,de.monitorTarget.screenColor,e),Se.screenGlowColor=fs(de.monitorTwoFrom.screenGlowColor,de.monitorTarget.screenGlowColor,e),vr.apply(),Sr.apply()),t>=1&&(de.lightingTarget&&(Object.assign(an,de.lightingTarget),sl.apply()),de.monitorTarget&&(Object.assign(_e,de.monitorTarget),Object.assign(Se,de.monitorTarget),vr.apply(),Sr.apply()),de=null)}function fs(i,t,e){const n=new Jt(i),s=new Jt(t);return`#${n.lerp(s,e).getHexString()}`}function Mf(){ce||(ft=null,We.length=0,Wn=0,En=null,So(),yo(),xn=null,ve=!1,Xe=null,Un.disabled=!0,On.disabled=!1,ce={stage:"ring",startTime:null,phoneStart:{x:Ot.x,y:Ot.y,z:Ot.z,rotX:Ot.rotX,rotY:Ot.rotY,rotZ:Ot.rotZ,screenColor:Ot.screenColor,screenGlow:Ot.screenGlow,timeText:Ot.timeText},headYawStart:$t.headYaw},wn())}function oS(i){if(!ce)return;ce.startTime===null&&(ce.startTime=i);const t=i-ce.startTime,e=3e3,n=850,s=ce.phoneStart;if(ce.stage==="ring"){const a=Math.min(1,t/e),l=qn(Math.min(1,t/550)),c=Math.sin(i*.07),h=Math.sin(i*.105+1.4),u=.72+Math.sin(i*.018)*.035;Ot.x=s.x+c*.0018,Ot.y=s.y+h*.0012,Ot.z=s.z+h*.0018,Ot.rotX=s.rotX+h*.12,Ot.rotY=s.rotY+c*.12,Ot.rotZ=s.rotZ+c*.18,Ot.screenColor=fs(s.screenColor,"#dfeaff",u),Ot.screenGlow=s.screenGlow+1.05+Math.sin(i*.021)*.04,Ot.timeText="88888",$t.headYaw=jt(ce.headYawStart,61,l),js.apply(),Ke.apply(),a>=1&&(ce.stage="return",ce.startTime=i,ce.returnStart={x:Ot.x,y:Ot.y,z:Ot.z,rotX:Ot.rotX,rotY:Ot.rotY,rotZ:Ot.rotZ,screenColor:Ot.screenColor,screenGlow:Ot.screenGlow,timeText:Ot.timeText,headYaw:$t.headYaw});return}const o=Math.min(1,t/n),r=qn(o);Ot.x=jt(ce.returnStart.x,s.x,r),Ot.y=jt(ce.returnStart.y,s.y,r),Ot.z=jt(ce.returnStart.z,s.z,r),Ot.rotX=jt(ce.returnStart.rotX,s.rotX,r),Ot.rotY=jt(ce.returnStart.rotY,s.rotY,r),Ot.rotZ=jt(ce.returnStart.rotZ,s.rotZ,r),Ot.screenColor=fs(ce.returnStart.screenColor,s.screenColor,r),Ot.screenGlow=jt(ce.returnStart.screenGlow,s.screenGlow,r),Ot.timeText=o<.5?ce.returnStart.timeText:s.timeText,$t.headYaw=jt(ce.returnStart.headYaw,ce.headYawStart,r),js.apply(),Ke.apply(),o>=1&&(Object.assign(Ot,s),$t.headYaw=ce.headYawStart,js.apply(),Ke.apply(),ce=null,Un.disabled=!1,wn())}function Os(i){Object.entries(i).forEach(([t,e])=>{$t[t]=e}),Ke.apply()}function vl(i,t,e){Object.entries(t).forEach(([n,s])=>{const o=i[n];if(typeof o!="number"||typeof s!="number"){i[n]=s;return}const r=jt(o,s,e);i[n]=Math.abs(r-s)<.001?s:r})}function Gh(i,t,e){Ns===null&&(Ns=e);const n=Math.min(64,Math.max(0,e-Ns)),s=1-Math.pow(.001,n/420);Ns=e,Object.keys(i).length>0&&(vl(fo,i,s),rc.applyMouse()),Object.keys(t).length>0&&(vl($t,t,s),Ke.apply())}function Vh(i,t){return Object.entries(t).every(([e,n])=>typeof i[e]!="number"||typeof n!="number"||Math.abs(i[e]-n)<.01)}function wn(){bs.style.opacity=ve?"1":"",ws.style.opacity=ve&&Xe==="right_monitor_idle"?"1":"",Un.style.opacity=ce?"1":""}function rS(i,t={}){const e=i.mouse??{},n=i.character??{},s=Object.keys(e),o=Object.keys(n);return{stage:"to",stageStartTime:null,mouseTarget:e,characterTarget:n,mouseKeys:s,characterKeys:o,speed:t.speed??1,movement:i,onComplete:t.onComplete??null}}function vo(i,t={}){ft=null,xn=null,t.allowOverlap||(We.length=0),We.push(rS(i,t)),On.disabled=!1}function aS(){const i=new Set(We.map(s=>s.movement)),t=kh.mouse.filter(s=>!i.has(s)),e=t.length>0?t:kh.mouse,n=Math.floor(Math.random()*e.length);return e[n]}function lS(){return["leftShoulderX","leftShoulderY","leftShoulderZ","leftElbowX","leftElbowY","leftElbowZ","leftWristX","leftWristY","leftWristZ"].every(t=>Math.abs($t[t]-qt[t])<1.5)}function cS(i){if(!(!ve||Xe!=="left_monitor_idle"||ft||We.length>=2||i<Wn)){if(!lS()){Wn=i+120;return}vo(aS(),{allowOverlap:!0,speed:1.8+Math.random()*3,onComplete:()=>{}}),Wn=i+Math.random()*2e3}}function Ef(){const i=En?{leftShoulderX:qt.leftShoulderX,leftShoulderY:qt.leftShoulderY,leftShoulderZ:qt.leftShoulderZ,leftElbowX:qt.leftElbowX,leftElbowY:qt.leftElbowY,leftElbowZ:qt.leftElbowZ,leftWristX:qt.leftWristX,leftWristY:qt.leftWristY,leftWristZ:qt.leftWristZ}:qt;ft=null,ce=null,We.length=0,Wn=0,So(),yo(),ve=!1,Xe=null,xn={mouse:cs,character:i},Ot.x=An.x,Ot.y=An.y,Ot.z=An.z,Ot.rotX=An.rotX,Ot.rotY=An.rotY,Ot.rotZ=An.rotZ,Ot.screenColor=An.screenColor,Ot.screenGlow=An.screenGlow,js.apply(),On.disabled=!1,Un.disabled=!1,wn()}function bf(i){ft=null,We.length=0,Wn=0,So(),yo(),xn=null,Ns=null,ve=!0,Xe=i,wn()}function hS(i,t){i.stageStartTime===null&&(i.stageStartTime=t);const e=t-i.stageStartTime,n=i.speed;if(i.stage==="to"){const o=Math.min(1,e/(1100/n));return i.weight=qn(o),o>=1&&(i.stage="hold",i.stageStartTime=t),!1}if(i.stage==="hold")return i.weight=1,e>=320/n&&(i.stage="from",i.stageStartTime=t),!1;const s=Math.min(1,e/(1200/n));return i.weight=1-qn(s),s>=1}function Yh(i,t,e,n,s){n.forEach(o=>{i[o]=(i[o]??t[o])+(e[o]-t[o])*s})}function So(){Ci=$t.headYaw,hl=Ci,Fs=Ci,Bs=0,ul=600,fl=0}function uS(i){if(i<fl)return Fs;Bs===0&&(hl=Ci,Fs=11+Math.random()*29,Bs=i,ul=420+Math.random()*680);const t=Math.min(1,(i-Bs)/ul);return Ci=jt(hl,Fs,qn(t)),t>=1&&(Ci=Fs,Bs=0,fl=i+180+Math.random()*420),Ci}function yo(){performance.now(),Or=0,zs=null,cr=1/0,Hs=null,Mr=1/0,Ri="typing",Er=1/0,ks=-24,dl=-24,Xs=-24,Gs=0,pl=700,ml=0,Gn=Se.uiLinesScroll??0,gl=Gn,hr=Gn,Vs=0,_l=500,xl=0,li=null,ro=0}function fS(i){const t=Se.uiActiveIconIndex??0,e=[0,1,2,3].filter(n=>n!==t);li=e[Math.floor(Math.random()*e.length)],ro=i,Se.uiDotIconIndex=li,Se.uiDotVisible=!0,Se.uiLinesWidthScale=.72+Math.random()*.66,Or=1/0}function dS(i){li!==null&&(Se.uiDotIconIndex=li,Se.uiDotVisible=!0,!(i-ro<1e3)&&(Se.uiActiveIconIndex=li,li=null,ro=0,Or=i+1300+Math.random()*1800))}function pS(i){if(i<xl)return Gn;Vs===0&&(gl=Gn,hr=(Gn+.35+Math.random()*.75)%7,Vs=i,_l=360+Math.random()*720);const t=Math.min(1,(i-Vs)/_l);return Gn=jt(gl,hr,qn(t)),t>=1&&(Gn=hr,Vs=0,xl=i+350+Math.random()*1100),Gn}function mS(i){zs===null&&(zs=i);const t=Math.min(64,Math.max(0,i-zs)),e=1-Math.pow(.001,t/520);zs=i,ve&&Xe==="left_monitor_idle"&&i>=Or&&fS(i),ve&&Xe==="left_monitor_idle"&&(Se.uiLinesScroll=pS(i),dS(i)),vl(Se,{uiDotX:nn.uiDotX,uiDotY:nn.uiDotY,uiPanelX:nn.uiPanelX,uiIconStartY:nn.uiIconStartY,uiLinesX:nn.uiLinesX,uiLinesY:nn.uiLinesY,uiTopIconWidth:nn.uiTopIconWidth,uiTopIconY:nn.uiTopIconY},e),(!ve||Xe!=="left_monitor_idle")&&(Se.uiActiveIconIndex=nn.uiActiveIconIndex,Se.uiDotIconIndex=nn.uiDotIconIndex,Se.uiDotVisible=nn.uiDotVisible,Se.uiLinesWidthScale=nn.uiLinesWidthScale,Se.uiLinesScroll=nn.uiLinesScroll,li=null,ro=0),Sr.apply()}function gS(i){_e.codeScroll=(Math.floor(_e.codeScroll)+1)%14,_e.codeVariant=Math.floor(Math.random()*8),_e.codeWidthScale=.92+Math.random()*.18,_e.codeActiveLine=13,_e.codeTypingProgress=.18,Mr=i+700+Math.random()*900}function _S(i){i<Er||(Ri=Ri==="typing"?"reading":"typing",Er=i+(Ri==="typing"?2200+Math.random()*2600:3200+Math.random()*2800))}function xS(i){if(i<ml)return Xs;Gs===0&&(dl=ks,Xs=-34+Math.random()*20,Gs=i,pl=650+Math.random()*850);const t=Math.min(1,(i-Gs)/pl);return ks=jt(dl,Xs,qn(t)),t>=1&&(ks=Xs,Gs=0,ml=i+250+Math.random()*550),ks}function vS(i){Hs===null&&(Hs=i,ve&&Xe==="right_monitor_idle"&&(cr=i+1600+Math.random()*1800,Mr=i+700+Math.random()*900,Er=i+2200+Math.random()*2600));const t=Math.min(64,Math.max(0,i-Hs));Hs=i,ve&&Xe==="right_monitor_idle"&&(_S(i),Ri==="typing"&&i>=cr&&(_e.codeVariant=Math.floor(Math.random()*8),_e.codeWidthScale=.92+Math.random()*.18,cr=i+1600+Math.random()*1800),Ri==="typing"?(_e.codeTypingProgress=Math.min(1,_e.codeTypingProgress+t/650),i>=Mr&&_e.codeTypingProgress>=.95&&gS(i),_e.codeCursorVisible=Math.floor(i/260)%2===0):_e.codeCursorVisible=Math.floor(i/420)%2===0),_e.codeCursorVisible=Math.floor(i/420)%2===0,vr.apply()}function SS(i){if(ft)return;if(!ve&&We.length===0&&xn){if(Gh(xn.mouse,xn.character,i),Vh(fo,xn.mouse)&&Vh($t,xn.character)&&(xn=null,En)){const n=En;En=null,bf(n)}return}for(let n=We.length-1;n>=0;n-=1){const s=We[n];if(hS(s,i)){const o=s.onComplete;We.splice(n,1),o&&o()}}const t={},e={};if(ve&&Xe==="left_monitor_idle")t.x=cs.x,t.z=cs.z,e.headYaw=uS(i),e.torsoYaw=sn.torsoYaw,e.headPitch=sn.headPitch,e.leftShoulderX=sn.leftShoulderX,e.leftShoulderY=sn.leftShoulderY,e.leftShoulderZ=sn.leftShoulderZ,e.leftElbowX=sn.leftElbowX,e.leftElbowY=sn.leftElbowY,e.leftElbowZ=sn.leftElbowZ,e.leftWristX=sn.leftWristX,e.leftWristY=sn.leftWristY,e.leftWristZ=sn.leftWristZ;else if(ve&&Xe==="right_monitor_idle"){const n=Ri==="typing",s=Math.sin(i*.018),o=Math.sin(i*.023+Math.PI);t.x=cs.x,t.z=cs.z,e.torsoYaw=29,e.headYaw=n?-4:xS(i),e.headPitch=n?12:-7,e.leftShoulderX=-72+(n?s*2:0),e.leftShoulderY=-154,e.leftShoulderZ=24,e.leftElbowX=42+(n?o*3:0),e.leftElbowY=-7,e.leftElbowZ=-10,e.leftWristX=-9+(n?s*5:0),e.leftWristY=-28,e.leftWristZ=-9,e.rightShoulderX=-76+(n?o*2:0),e.rightShoulderY=-202,e.rightShoulderZ=-8,e.rightElbowX=39+(n?s*3:0),e.rightElbowY=8,e.rightElbowZ=9,e.rightWristX=-8+(n?o*5:0),e.rightWristY=24,e.rightWristZ=7}Xe==="left_monitor_idle"&&We.forEach(n=>{Yh(t,cs,n.mouseTarget,n.mouseKeys,n.weight??0),Yh(e,sn,n.characterTarget,n.characterKeys,n.weight??0)}),Gh(t,e,i)}function wf(){if(ft)return;ce=null,Un.disabled=!1,We.length=0,Wn=0,En=null,So(),yo(),xn=null,ve=!1,Xe=null,wn(),On.disabled=!0,ft={stage:"turn",startTime:null,startPose:{torsoYaw:$t.torsoYaw,headYaw:$t.headYaw,leftShoulderZ:$t.leftShoulderZ,leftElbowX:$t.leftElbowX,rightShoulderX:$t.rightShoulderX,rightShoulderZ:$t.rightShoulderZ,rightElbowX:$t.rightElbowX,leftHipY:$t.leftHipY,leftHipZ:$t.leftHipZ,rightHipZ:$t.rightHipZ},phaseOneTarget:{torsoYaw:-60,headYaw:-65,leftShoulderZ:149,leftElbowX:1.5,rightShoulderX:-126,rightShoulderZ:-20,rightElbowX:24,leftHipY:7,leftHipZ:-56.5,rightHipZ:-28},waveValues:[1.5,22,1.5,22,1.5,22],waveIndex:0,waveStartValue:1.5}}function yS(i){if(!ft)return;ft.startTime===null&&(ft.startTime=i);const t=i-ft.startTime;if(ft.stage==="turn"){const o=Math.min(1,t/900),r=Math.min(1,Math.max(0,t-90)/900),a=nr(o),l=nr(r);Os({rightHipZ:jt(ft.startPose.rightHipZ,ft.phaseOneTarget.rightHipZ,a),torsoYaw:jt(ft.startPose.torsoYaw,ft.phaseOneTarget.torsoYaw,l),headYaw:jt(ft.startPose.headYaw,ft.phaseOneTarget.headYaw,l),leftShoulderZ:jt(ft.startPose.leftShoulderZ,ft.phaseOneTarget.leftShoulderZ,l),leftElbowX:jt(ft.startPose.leftElbowX,ft.phaseOneTarget.leftElbowX,l),rightShoulderX:jt(ft.startPose.rightShoulderX,ft.phaseOneTarget.rightShoulderX,l),rightShoulderZ:jt(ft.startPose.rightShoulderZ,ft.phaseOneTarget.rightShoulderZ,l),rightElbowX:jt(ft.startPose.rightElbowX,ft.phaseOneTarget.rightElbowX,l),leftHipY:jt(ft.startPose.leftHipY,ft.phaseOneTarget.leftHipY,l),leftHipZ:jt(ft.startPose.leftHipZ,ft.phaseOneTarget.leftHipZ,l)}),o>=1&&r>=1&&(ft.stage="wave",ft.startTime=i,ft.waveIndex=0,ft.waveStartValue=1.5);return}if(ft.stage==="wave"){const n=Math.min(1,t/200),s=qn(n),o=ft.waveValues[ft.waveIndex];Os({torsoYaw:ft.phaseOneTarget.torsoYaw,headYaw:ft.phaseOneTarget.headYaw,leftShoulderZ:ft.phaseOneTarget.leftShoulderZ,leftElbowX:jt(ft.waveStartValue,o,s),rightShoulderX:ft.phaseOneTarget.rightShoulderX,rightShoulderZ:ft.phaseOneTarget.rightShoulderZ,rightElbowX:ft.phaseOneTarget.rightElbowX,leftHipY:ft.phaseOneTarget.leftHipY,leftHipZ:ft.phaseOneTarget.leftHipZ,rightHipZ:ft.phaseOneTarget.rightHipZ}),n>=1&&(ft.waveStartValue=o,ft.waveIndex+=1,ft.startTime=i,ft.waveIndex>=ft.waveValues.length&&(ft.stage="right-leg-out",ft.startTime=i));return}if(ft.stage==="right-leg-out"){const n=Math.min(1,t/730),s=nr(n);Os({torsoYaw:jt(ft.phaseOneTarget.torsoYaw,qt.torsoYaw,s),headYaw:jt(ft.phaseOneTarget.headYaw,qt.headYaw,s),leftShoulderZ:jt(ft.phaseOneTarget.leftShoulderZ,qt.leftShoulderZ,s),leftElbowX:jt(ft.waveStartValue,qt.leftElbowX,s),rightShoulderX:jt(ft.phaseOneTarget.rightShoulderX,qt.rightShoulderX,s),rightShoulderZ:jt(ft.phaseOneTarget.rightShoulderZ,qt.rightShoulderZ,s),rightElbowX:jt(ft.phaseOneTarget.rightElbowX,qt.rightElbowX,s),leftHipY:ft.phaseOneTarget.leftHipY,leftHipZ:ft.phaseOneTarget.leftHipZ,rightHipZ:jt(ft.phaseOneTarget.rightHipZ,qt.rightHipZ,s)}),n>=1&&(ft.stage="left-leg-out",ft.startTime=i);return}if(ft.stage==="left-leg-out"){const n=Math.min(1,t/540),s=nr(n);Os({torsoYaw:qt.torsoYaw,headYaw:qt.headYaw,leftShoulderZ:qt.leftShoulderZ,leftElbowX:qt.leftElbowX,rightShoulderX:qt.rightShoulderX,rightShoulderZ:qt.rightShoulderZ,rightElbowX:qt.rightElbowX,leftHipY:jt(ft.phaseOneTarget.leftHipY,qt.leftHipY,s),leftHipZ:jt(ft.phaseOneTarget.leftHipZ,qt.leftHipZ,s),rightHipZ:qt.rightHipZ}),n>=1&&(Os({torsoYaw:qt.torsoYaw,headYaw:qt.headYaw,leftShoulderZ:qt.leftShoulderZ,leftElbowX:qt.leftElbowX,rightShoulderX:qt.rightShoulderX,rightShoulderZ:qt.rightShoulderZ,rightElbowX:qt.rightElbowX,leftHipY:qt.leftHipY,leftHipZ:qt.leftHipZ,rightHipZ:qt.rightHipZ}),ft=null,On.disabled=!1,rl&&!al&&(al=!0,yf(i)),ve&&(Wn=0))}}function ao(i){if(ve){if(Xe===i){En=null,Ef();return}We.length=0,Wn=0,So(),yo(),Xe=i,wn();return}bf(i)}function MS(){ao("left_monitor_idle")}On.addEventListener("click",wf);Un.addEventListener("click",Mf);mo.addEventListener("click",()=>{ve=!1,En=null,wn(),vo(mf)});go.addEventListener("click",()=>{ve=!1,En=null,wn(),vo(gf)});_o.addEventListener("click",()=>{ve=!1,En=null,wn(),vo(_f)});xo.addEventListener("click",()=>{ve=!1,En=null,wn(),vo(xf)});bs.addEventListener("click",MS);ws.addEventListener("click",()=>ao("right_monitor_idle"));po.addEventListener("click",Ef);wn();window.addEventListener("pointermove",i=>{yr.x=-(i.clientX/window.innerWidth-.5)*2,yr.y=-(i.clientY/window.innerHeight-.5)*2});un.domElement.addEventListener("pointerdown",i=>{const t=un.domElement.getBoundingClientRect();Sa.x=(i.clientX-t.left)/t.width*2-1,Sa.y=-((i.clientY-t.top)/t.height)*2+1,Hh.setFromCamera(Sa,hn.camera),Hh.intersectObjects(cf.group.children,!0).length>0&&iS()});function ES(i){const t=i*Dn.musicPulseSpeed,e=$t.headPitch-as.pitch,n=$t.leftAnkleX-as.leftAnkleX;rs.pitch+=(e-rs.pitch)*.08,rs.leftAnkleX+=(n-rs.leftAnkleX)*.08,as.pitch=Math.sin(t*.0038)*.55+Math.sin(t*.009)*.18,as.leftAnkleX=Math.sin(t*.0042+.7)*.9,$t.headPitch=rs.pitch+as.pitch,$t.leftAnkleX=rs.leftAnkleX+as.leftAnkleX,Ke.apply()}function bS(i){const t=i*Dn.musicPulseSpeed;hf.setConePulse(1+Math.sin(t*.0048)*.045+Math.sin(t*.013)*.018),uf.updateSteam(i),SS(i),ve&&!ft&&cS(i),mS(i),vS(i),yS(i),ES(i),oS(i),sS(i),Qv(i),eS(i),nS(),hn.controls.update(),un.render(we,hn.camera)}un.setAnimationLoop(bS);window.addEventListener("resize",()=>{hn.resize(window.innerWidth,window.innerHeight),un.setSize(window.innerWidth,window.innerHeight)});
