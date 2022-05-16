function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire5220;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequire5220=o),o.register("6QD2Y",(function(t,n){e(t.exports,"auth",(()=>u)),e(t.exports,"db",(()=>l)),e(t.exports,"storage",(()=>h));var r=o("fXOuZ"),s=o("1tHc5"),i=o("etBjH");o("aYguL");var a=o("jceyq");const c=r.initializeApp({apiKey:"AIzaSyC3uKy2BwRocXVsIEG1LivLMMGGUxeKSMk",authDomain:"marvelclothing-248ba.firebaseapp.com",projectId:"marvelclothing-248ba",storageBucket:"marvelclothing-248ba.appspot.com",messagingSenderId:"288632212806",appId:"1:288632212806:web:15a7a54f68ac881c1b6947",measurementId:"G-NGQEYTB3X1"}),u=s.getAuth(),l=i.getFirestore(c),h=a.getStorage(c)})),o.register("aYguL",(function(t,n){e(t.exports,"getStorage",(()=>o("jceyq").getStorage)),e(t.exports,"ref",(()=>o("jceyq").ref)),e(t.exports,"uploadBytes",(()=>o("jceyq").uploadBytes)),e(t.exports,"getDownloadURL",(()=>o("jceyq").getDownloadURL)),o("jceyq")})),o.register("jceyq",(function(t,n){e(t.exports,"ref",(()=>ye)),e(t.exports,"uploadBytes",(()=>be)),e(t.exports,"getDownloadURL",(()=>we)),e(t.exports,"getStorage",(()=>ke));var r=o("7xvHX"),s=o("gMVVg"),i=o("eryG9");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c extends s.FirebaseError{constructor(e,t){super(u(e),`Firebase Storage: ${t} (${u(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}_codeEquals(e){return u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function u(e){return"storage/"+e}function l(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function h(){return new c("canceled","User canceled the upload/download.")}function d(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function p(e){return new c("invalid-argument",e)}function f(){return new c("app-deleted","The Firebase app was deleted.")}function g(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function _(e){throw new c("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=m.makeFromUrl(e,t)}catch(t){return new m(e,"")}if(""===n.path)return n;throw new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),u=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<u.length;t++){const r=u[t],o=r.regex.exec(e);if(o){const e=o[r.indices.bucket];let t=o[r.indices.path];t||(t=""),n=new m(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new c("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class b{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){return"string"==typeof e||e instanceof String}function y(e){return k()&&e instanceof Blob}function k(){return"undefined"!=typeof Blob}function v(e,t,n,r){if(r<t)throw p(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw p(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function x(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T,C;(C=T||(T={}))[C.NO_ERROR=0]="NO_ERROR",C[C.NETWORK_ERROR=1]="NETWORK_ERROR",C[C.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e,t,n,r,o,s,i,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=l();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?f():h())}else{r(new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new I(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,s=null,i=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){o=setTimeout((()=>{o=null,e(p,c())}),t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);if(c()||i)return d(),void l.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function g(e){f||(f=!0,d(),u||(null!==o?(e||(a=2),clearTimeout(o),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{i=!0,g(!0)}),n),g}(((e,t)=>{if(t)return void e(!1,new I(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===T.NO_ERROR,o=n.getStatus();if(!t||this.isRetryStatusCode_(o)){const t=n.getErrorCode()===T.ABORT;return void e(!1,new I(!1,null,t))}const s=-1!==this.successCodes_.indexOf(o);e(!0,new I(s,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class I{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function U(...e){const t=S();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(k())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P="raw",E="base64",A="base64url",B="data_url";class L{constructor(e,t){this.data=e,this.contentType=t||null}}function M(e,t){switch(e){case P:return new L(q(t));case E:case A:return new L(j(e,t));case B:return new L(function(e){const t=new F(e);return t.base64?j(E,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw g(B,"Malformed data URL.")}return q(t)}(t.rest)}(t),new F(t).contentType)}throw l()}function q(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function j(e,t){switch(e){case E:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw g(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case A:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw g(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw g(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class F{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw g(B,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(o=";base64",!!((r=n).length>=o.length)&&r.substring(r.length-o.length)===o),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class D{constructor(e,t){let n=0,r="";y(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(y(this.data_)){const s=this.data_,i=(r=e,o=t,(n=s).webkitSlice?n.webkitSlice(r,o):n.mozSlice?n.mozSlice(r,o):n.slice?n.slice(r,o):null);return null===i?null:new D(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new D(n,!0)}var n,r,o;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(k()){const t=e.map((e=>e instanceof D?e.data_:e));return new D(U.apply(null,t))}{const t=e.map((e=>w(e)?M(P,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[o++]=e[t]})),new D(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){return t}class H{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||$}}let V=null;function X(){if(V)return V;const e=[];e.push(new H("bucket")),e.push(new H("generation")),e.push(new H("metageneration")),e.push(new H("name","fullPath",!0));const t=new H("name");t.xform=function(e,t){return function(e){return!w(e)||e.length<2?e:z(e)}(t)},e.push(t);const n=new H("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new H("timeCreated")),e.push(new H("updated")),e.push(new H("md5Hash",null,!0)),e.push(new H("cacheControl",null,!0)),e.push(new H("contentDisposition",null,!0)),e.push(new H("contentEncoding",null,!0)),e.push(new H("contentLanguage",null,!0)),e.push(new H("contentType",null,!0)),e.push(new H("metadata","customMetadata",!0)),V=e,V}function G(e,t,n){const r={type:"file"},o=n.length;for(let e=0;e<o;e++){const o=n[e];r[o.local]=o.xform(r,t[o.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,o=new m(n,r);return t._makeStorageReference(o)}})}(r,e),r}function K(e,t,n){const r=N(t);if(null===r)return null;return G(e,r,n)}function W(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){if(!e)throw l()}function Q(e,t){return function(n,r){const o=K(e,r,t);return Z(null!==o),o}}function J(e,t){return function(n,r){const o=K(e,r,t);return Z(null!==o),function(e,t,n,r){const o=N(t);if(null===o)return null;if(!w(o.downloadTokens))return null;const s=o.downloadTokens;if(0===s.length)return null;const i=encodeURIComponent;return s.split(",").map((t=>{const o=e.bucket,s=e.fullPath;return R("/b/"+i(o)+"/o/"+i(s),n,r)+x({alt:"media",token:t})}))[0]}(o,r,e.host,e._protocol)}}function ee(e){return function(t,n){let r;var o,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new c("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,r=new c("unauthorized","User does not have permission to access '"+o+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function te(e){const t=ee(e);return function(n,r){let o=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,o=new c("object-not-found","Object '"+s+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function ne(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function re(e,t,n,r,o){const s=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const c=ne(t,r,o),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+W(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=D.getBlob(u,r,l);if(null===h)throw d();const p={name:c.fullPath},f=R(s,e.host,e._protocol),g=e.maxUploadRetryTime,_=new Y(f,"POST",Q(e,n),g);return _.urlParams=p,_.headers=i,_.body=h.uploadData(),_.errorHandler=ee(t),_}class oe{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=T.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=T.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=T.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw _("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw _("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class se extends oe{initXhr(){this.xhr_.responseType="text"}}function ie(){return new se}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae{constructor(e,t){this._service=e,this._location=t instanceof m?t:m.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ae(e,t)}get root(){const e=new m(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new m(this._location.bucket,e);return new ae(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function ce(e,t,n){e._throwIfRoot("uploadBytes");const r=re(e.storage,e._location,X(),new D(t,!0),n);return e.storage.makeRequestWithTokens(r,ie).then((t=>({metadata:t,ref:e})))}function ue(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=R(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,s=new Y(r,"GET",J(e,n),o);return s.errorHandler=te(t),s}(e.storage,e._location,X());return e.storage.makeRequestWithTokens(t,ie).then((e=>{if(null===e)throw new c("no-download-url","The given file does not have any download URLs.");return e}))}function le(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new m(e._location.bucket,n);return new ae(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e,t){if(e instanceof fe){const n=e;if(null==n._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new ae(n,n._bucket);return null!=t?he(r,t):r}return void 0!==t?le(e,t):e}function de(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof fe)return new ae(e,t);throw p("To use ref(service, url), the first argument must be a Storage instance.")}return he(e,t)}function pe(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:m.makeFromBucketSpec(n,e)}class fe{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?m.makeFromBucketSpec(r,this._host):pe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=m.makeFromBucketSpec(this._url,e):this._bucket=pe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ae(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new b(f());{const o=function(e,t,n,r,o,s){const i=x(e.urlParams),a=e.url+i,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new O(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ge="@firebase/storage",_e="0.9.5",me="storage";function be(e,t,n){return ce(e=s.getModularInstance(e),t,n)}function we(e){return ue(e=s.getModularInstance(e))}function ye(e,t){return de(e=s.getModularInstance(e),t)}function ke(e=r.getApp(),t){e=s.getModularInstance(e);return r._getProvider(e,me).getImmediate({identifier:t})}function ve(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new fe(n,o,s,t,r.SDK_VERSION)}r._registerComponent(new i.Component(me,ve,"PUBLIC").setMultipleInstances(!0)),r.registerVersion(ge,_e,""),r.registerVersion(ge,_e,"esm2017")}));
//# sourceMappingURL=shoppingCart.9f8baf32.js.map
