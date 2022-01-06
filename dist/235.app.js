"use strict";(self.webpackChunkminesweeper2=self.webpackChunkminesweeper2||[]).push([[235],{8235:function(n,r,e){e.r(r),e.d(r,{default:function(){return L}});var i=e(5893),t=e(7294),o=e(3727),a=e(1250),s=e(614),l=e(9669),d=e.n(l),p=e(9704),c=e(9018),u=e(3379),g=e.n(u),v=e(7795),x=e.n(v),h=e(569),f=e.n(h),m=e(3565),b=e.n(m),w=e(9216),y=e.n(w),j=e(4589),E=e.n(j),k=e(7505),I={};I.styleTagTransform=E(),I.setAttributes=b(),I.insert=f().bind(null,"head"),I.domAPI=x(),I.insertStyleElement=y(),g()(k.Z,I),k.Z&&k.Z.locals&&k.Z.locals;var Z=function(){return Z=Object.assign||function(n){for(var r,e=1,i=arguments.length;e<i;e++)for(var t in r=arguments[e])Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t]);return n},Z.apply(this,arguments)},F={color:"#1033e3",textAlign:"center",marginBottom:"50px"},L=function(n){var r=n.history,e=(0,p.I0)(),l=(0,p.v9)((function(n){return{isLogin:n.login.isLogin}})).isLogin;(0,t.useEffect)((function(){!0===l&&r.replace("/")}),[l,r]);var u={id:"ID is empty Enter your ID.",pwd:"Password is empty Enter your Password"},g=(0,t.useState)(""),v=g[0],x=g[1],h=(0,t.useState)({id:{value:"",invalid:!1},pwd:{value:"",invalid:!1}}),f=h[0],m=h[1],b=function(n){var r,e=n.target,i=e.name,t=e.value;m(Z(Z({},f),((r={})[i]={value:t,invalid:t.length<=0},r)))},w=[["id","ID"],["pwd","Password"]].map((function(n,r){var e=n[0],t=n[1],o="pwd"===e?"password":"text";return(0,i.jsxs)("div",Z({className:"input-container"},{children:[(0,i.jsx)("input",{type:o,name:e,placeholder:t,onChange:b,value:f[e].value},void 0),(0,i.jsx)(a.Z,{inputLength:f[e].value.length>0,name:e,onReset:function(){return function(n){var r;m(Z(Z({},f),((r={})[n]={value:"",invalid:!0},r)))}(e)}},void 0),f[e].invalid&&(0,i.jsx)("h5",Z({className:"invalid-text"},{children:u[e]}),void 0)]}),r)}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",Z({className:"login-container"},{children:(0,i.jsxs)("div",Z({className:"login-wrapper"},{children:[(0,i.jsx)(o.rU,Z({to:"/"},{children:(0,i.jsx)("h1",Z({style:F},{children:"Mine Sweeper"}),void 0)}),void 0),(0,i.jsxs)("form",Z({onSubmit:function(n){n.preventDefault();var i=Object.entries(f).filter((function(n){n[0];var r=n[1];return r.invalid||r.value.length<=0}));i.length>0||s.Z.post("/api/login",{id:f.id.value,pwd:f.pwd.value}).then((function(n){if(!1!==n.result){var i=n.loginInfo.accessToken;d().defaults.headers.common.Authorization="Bearer "+i,e((0,c.R9)({isLogin:!0,id:f.id.value})),r.goBack()}else x("id or password is wrong")})).catch((function(n){x(n)}))}},{children:[w,(0,i.jsxs)("div",Z({className:"login-forgot"},{children:[(0,i.jsx)(o.rU,Z({to:"/"},{children:"Forgot ID"}),void 0),(0,i.jsx)(o.rU,Z({to:"/"},{children:"Forgot Password"}),void 0),(0,i.jsx)(o.rU,Z({to:"/"},{children:"Sign Up"}),void 0)]}),void 0),(0,i.jsx)("h5",Z({className:"invalid-text",style:{textAlign:"center",marginTop:"15px"}},{children:v}),void 0),(0,i.jsx)("p",{children:(0,i.jsx)("input",{type:"submit",value:"Login"},void 0)},void 0)]}),void 0)]}),void 0)}),void 0)},void 0)}},7505:function(n,r,e){var i=e(8081),t=e.n(i),o=e(3645),a=e.n(o)()(t());a.push([n.id,".login-container {\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.login-container a{\r\n  text-decoration: none;\r\n}\r\n\r\n.login-wrapper{\r\n  padding: 20px;\r\n  background-color: white;\r\n  border-radius: 12px;\r\n  width: 378px;\r\n  box-shadow: 5px 5px 16px -2px rgb(175, 175, 175);\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.login-forgot {\r\n  display:flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.login-forgot a{\r\n  color:#aaaaaa;\r\n  text-decoration: none;\r\n  font-size: 12px;\r\n}\r\n\r\n.input-container {\r\n  position: relative;\r\n}\r\n\r\n.login-wrapper\r\ninput[type='text'],\r\ninput[type='email'],\r\ninput[type='password'] {\r\n  width:313px;\r\n  background-image:linear-gradient(to bottom, #EEEEEE,#EFEFEF);\r\n  border-radius: 9px;\r\n  height:38px;\r\n  border:none;\r\n  padding: .8em .9em;\r\n}\r\n\r\n.login-wrapper\r\ninput[type='submit']{\r\n  background-color: #1033e3;\r\n  display:block;\r\n  box-shadow: 5px 5px 16px -2px rgb(175, 175, 175);\r\n  width:313px;\r\n  height:38px;\r\n  font-size: 15px;\r\n  border-radius: 9px;\r\n  font-family: 'Roboto', sans-serif;\r\n  border: none;\r\n  color:white;\r\n  margin: 1.7rem auto;\r\n}\r\n\r\n.login-wrapper\r\ninput[type='submit']:hover{\r\n  background: linear-gradient(70deg,#1033e3, #f74bf7);\r\n}\r\n\r\n.btn-reset,\r\n.btn-remove {\r\n  border-radius: 50%;\r\n  color: black;\r\n  font-weight: bold;\r\n  border: none;\r\n  padding: 2px 5px;\r\n}\r\n\r\n.btn-reset {\r\n  position: absolute;\r\n  top:10px;\r\n  right: 24px;\r\n}\r\n\r\n.btn-reset::before,\r\n.btn-remove::before {\r\n  content: 'X'\r\n}\r\n\r\n.invalid-text{\r\n  color:red;\r\n  margin-left: 16px;\r\n  margin-bottom: 0px;\r\n  margin-top: 5px;\r\n  text-align: left;\r\n}",""]),r.Z=a}}]);