(this["webpackJsonpdaesogo-map"]=this["webpackJsonpdaesogo-map"]||[]).push([[0],{27:function(n){n.exports=JSON.parse('[{"name":"\uad8c\uc21c\uad00","generation":4,"profileImg":"https://avatars.githubusercontent.com/u/48983361?v=4","explanation":"\uc5ec\uae30\ub294 \uc608\uc2dc\uc785\ub2c8\ub2e4.","tagImg":"","companyName":"\ub300\uad6c\uc18c\ud504\ud2b8\uc6e8\uc5b4\uace0\ub4f1\ud559\uad50","companyLocation":"\ub300\uad6c\uad11\uc5ed\uc2dc \ub2ec\uc131\uad70 \uad6c\uc9c0\uba74 \ucc3d\ub9ac\ub85c11\uae38 93","position":"FrontEnd"}]')},73:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var c,a=t(2),i=t.n(a),o=t(35),r=t.n(o),s=t(7),d=t(15),l=t.n(d),p=t(36),u=t(12),b=t(19),m=t(8),h=t(3),f=function(){return Object(h.jsx)(x,{children:Object(h.jsx)("div",{id:"map",style:{width:"100%",height:"100%"}})})},x=m.b.div(c||(c=Object(s.a)(["\n  width: 100%;\n  height: 100vh;\n\n  @media screen and (max-width: 500px) {\n    height: 60vh;\n  }\n"]))),v=t(27),j=t(28),g=t.n(j),O=t(47),w=t.n(O),y=(t(73),window.kakao),k=function(){function n(){Object(u.a)(this,n),this.map=void 0,this.isLoaded=!1}return Object(b.a)(n,[{key:"initMap",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,c,a,i,o,r,s,d,p,u,b,m,h,f,x,j,O=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isLoaded){e.next=2;break}return e.abrupt("return");case 2:36,127,t=document.getElementById("map"),c={center:new window.kakao.maps.LatLng(36,127),level:12},this.map=new window.kakao.maps.Map(t,c),a=this.map.getLevel(),i=g.a.filter(v,(function(n){return g.a.filter(v,(function(e){return e.companyName===n.companyName})).length>1})),o=new y.maps.services.Geocoder,r=g.a.groupBy(i,"companyName"),s=[],d=function(n,e){o.addressSearch(n,(function(n){e(null,n)}))},p=l.a.mark((function n(e){var t,c,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[],c=r[e].map((function(n,e){return t.push(n.name),w.a.promisify(d)(n.companyLocation)})),n.next=4,Promise.all(c);case 4:a=n.sent,r[e].forEach((function(){var n=new y.maps.LatLng(a[0][0].y,a[0][0].x),t=new y.maps.Marker({map:O.map,position:n});s.push(t);var c='\n        <div class="contentWrapper">\n        <div class="companyIconWrapper">\n        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n        width="64" height="64"\n        viewBox="0 0 172 172"\n        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#0068c3"><path d="M159.90625,1.34375h-94.0625c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125v33.325l-49.85312,19.35c-1.47813,0.5375 -2.55312,2.15 -2.55312,3.7625v104.8125c0,2.28438 1.74688,4.03125 4.03125,4.03125h14.78125c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-24.1875c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125h8.0625c2.28438,0 4.03125,1.74687 4.03125,4.03125v24.1875c0,2.28438 1.74687,4.03125 4.03125,4.03125h5.375c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-98.76562c0,-1.6125 0.94063,-3.225 2.41875,-3.89688c2.6875,-1.20937 5.64375,0.80625 5.64375,3.62813v102.79688v0.13437h30.90625c2.28437,0 4.03125,-1.74687 4.03125,-4.03125v-24.1875c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125h8.0625c2.28437,0 4.03125,1.74688 4.03125,4.03125v24.1875c0,2.28438 1.74688,4.03125 4.03125,4.03125h34.9375c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-161.11562c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM44.34375,115.5625c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM44.34375,88.6875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM94.0625,115.5625c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM94.0625,88.6875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM94.0625,61.8125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM94.0625,34.9375c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM116.90625,115.5625c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM116.90625,88.6875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM116.90625,61.8125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM116.90625,34.9375c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM139.75,115.5625c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74688 4.03125,4.03125zM139.75,88.6875c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74688 4.03125,4.03125zM139.75,61.8125c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74687 4.03125,4.03125zM139.75,34.9375c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74687 4.03125,4.03125z"></path></g></g></svg>\n        </div>\n          <div>'.concat(r[e][0].companyName,'</div>\n          <div class="tail"></div>\n        </div>'),i=new y.maps.CustomOverlay({content:c,map:O.map,position:t.getPosition(),yAnchor:2.1});y.maps.event.addListener(t,"click",(function(){i.setMap(O.map)})),y.maps.event.addListener(O.map,"click",(function(){i.setMap(null)})),i.setMap(null)}));case 6:case"end":return n.stop()}}),n)})),e.t0=l.a.keys(r);case 15:if((e.t1=e.t0()).done){e.next=20;break}return u=e.t1.value,e.delegateYield(p(u),"t2",18);case 18:e.next=15;break;case 20:b=v.filter((function(n){return!i.includes(n)})),m=l.a.mark((function n(e){var t,c,a,i,o,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=[b[e]].map((function(n){return w.a.promisify(d)(n.companyLocation)})),n.next=3,Promise.all(t);case 3:c=n.sent,a=new y.maps.LatLng(c[0][0].y,c[0][0].x),i=new y.maps.Marker({map:O.map,position:a}),s.push(i),o='\n            <div class="contentWrapper">\n            <div class="companyIconWrapper">\n              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n              width="64" height="64"\n              viewBox="0 0 172 172"\n              style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#0068c3"><path d="M159.90625,1.34375h-94.0625c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125v33.325l-49.85312,19.35c-1.47813,0.5375 -2.55312,2.15 -2.55312,3.7625v104.8125c0,2.28438 1.74688,4.03125 4.03125,4.03125h14.78125c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-24.1875c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125h8.0625c2.28438,0 4.03125,1.74687 4.03125,4.03125v24.1875c0,2.28438 1.74687,4.03125 4.03125,4.03125h5.375c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-98.76562c0,-1.6125 0.94063,-3.225 2.41875,-3.89688c2.6875,-1.20937 5.64375,0.80625 5.64375,3.62813v102.79688v0.13437h30.90625c2.28437,0 4.03125,-1.74687 4.03125,-4.03125v-24.1875c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125h8.0625c2.28437,0 4.03125,1.74688 4.03125,4.03125v24.1875c0,2.28438 1.74688,4.03125 4.03125,4.03125h34.9375c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-161.11562c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM44.34375,115.5625c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM44.34375,88.6875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM94.0625,115.5625c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM94.0625,88.6875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM94.0625,61.8125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM94.0625,34.9375c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM116.90625,115.5625c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM116.90625,88.6875c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74688 4.03125,4.03125zM116.90625,61.8125c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM116.90625,34.9375c0,2.28437 -1.74688,4.03125 -4.03125,4.03125c-2.28437,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74688,-4.03125 4.03125,-4.03125c2.28437,0 4.03125,1.74687 4.03125,4.03125zM139.75,115.5625c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74688 4.03125,4.03125zM139.75,88.6875c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28437 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74688 4.03125,4.03125zM139.75,61.8125c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74687 4.03125,4.03125zM139.75,34.9375c0,2.28437 -1.74687,4.03125 -4.03125,4.03125c-2.28438,0 -4.03125,-1.74688 -4.03125,-4.03125v-5.375c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125c2.28438,0 4.03125,1.74687 4.03125,4.03125z"></path></g></g></svg>\n              </div>\n              <div>'.concat(b[e].companyName,'</div>\n              <div class="tail"></div>\n              </div>'),r=new y.maps.CustomOverlay({content:o,map:O.map,position:i.getPosition(),yAnchor:2.1}),y.maps.event.addListener(i,"click",(function(){r.setMap(O.map)})),y.maps.event.addListener(O.map,"click",(function(){r.setMap(null)})),r.setMap(null);case 12:case"end":return n.stop()}}),n)})),e.t3=l.a.keys(b);case 23:if((e.t4=e.t3()).done){e.next=28;break}return h=e.t4.value,e.delegateYield(m(h),"t5",26);case 26:e.next=23;break;case 28:f=new y.maps.MarkerClusterer({map:this.map,averageCenter:!0,minLevel:5,disableClickZoom:!0,calculator:[1,3,5,10,20,30,40,50,60,70,80,90,100]}),y.maps.event.addListener(f,"clusterclick",(function(n){a=O.map.getLevel()-3,O.map.setLevel(a,{anchor:n.getCenter()})})),f.addMarkers(s),x=new window.kakao.maps.MapTypeControl,n.getInstance().map.addControl(x,window.kakao.maps.ControlPosition.TOPRIGHT),j=new window.kakao.maps.ZoomControl,n.getInstance().map.addControl(j,window.kakao.maps.ControlPosition.RIGHT),this.isLoaded=!0;case 36:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return void 0===n.instance&&(n.instance=new n),n.instance}}]),n}();k.instance=void 0;var z,M,C,L,S,I,E,N,T,P,A,_,F,B,R,W,D,G,H,K,Y,J,U,Z,q=function(){return Object(a.useEffect)((function(){k.getInstance().initMap()}),[]),Object(a.useEffect)((function(){return function(){k.getInstance().isLoaded=!1}}),[]),Object(h.jsx)(f,{})},Q=t(4),V=function(n){var e=n.children,t=n.search,c=n.onChangeSearch;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(X,{children:[Object(h.jsx)($,{children:Object(h.jsx)(nn,{type:"text",value:t,onChange:c,placeholder:"\ud68c\uc0ac \uc774\ub984\uc73c\ub85c \uac80\uc0c9"})}),Object(h.jsx)(en,{children:Object(h.jsx)("a",{href:"https://github.com/SoonGwan/daesogoMap/blob/master/README.md",target:"_blank",rel:"noreferrer",children:"\uc9c0\uae08 \ub098\ub97c \ub4f1\ub85d\ud558\uc138\uc694!"})}),e]})})},X=m.b.div(z||(z=Object(s.a)(["\n  box-sizing: border-box;\n  min-width: 300px;\n  max-width: 300px;\n  z-index: 9999;\n  height: 100vh;\n  overflow: auto;\n\n  @media screen and (max-width: 500px) {\n    width: 100%;\n    height: 100%;\n    min-width: 100%;\n    max-width: 100%;\n  }\n"]))),$=m.b.div(M||(M=Object(s.a)(["\n  width: 100%;\n  padding: 10px;\n  position: sticky;\n  top: 0;\n  background-color: white;\n"]))),nn=m.b.input(C||(C=Object(s.a)(["\n  border: none;\n  width: 100%;\n  background-color: #e7e7e7;\n  font-size: 14px;\n  padding: 5px 10px;\n  border-radius: 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]))),en=m.b.div(L||(L=Object(s.a)(["\n  font-size: 13px;\n  color: gray;\n  padding: 0px 0px 10px 10px;\n\n  & > a {\n    color: #0068c3;\n  }\n"]))),tn=function(){var n=Object(a.useState)(""),e=Object(Q.a)(n,2),t=e[0],c=e[1],i=Object(a.useCallback)((function(n){var e=n.target.value;c(e)}),[]);return{filterItem:Object(a.useCallback)((function(n,e){if(!1!==n)return n.filter((function(n){return n[e].includes(t)}))}),[t]),search:t,onChangeSearch:i}},cn=t(11),an=Object(cn.b)({key:"userAtom",default:v}),on=function(n){var e=window.kakao,t=new e.maps.services.Geocoder,c=Object(a.useState)(),i=Object(Q.a)(c,2),o=i[0],r=i[1];return Object(a.useEffect)((function(){if(""===n||void 0===n||null===n)throw new Error("locatio\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");t.addressSearch(n,(function(n){r(new e.maps.LatLng(n[0].y,n[0].x))}))}),[n]),o},rn=Object(cn.b)({key:"coordsAtom",default:{}}),sn=Object(cn.b)({key:"navAtom",default:!1}),dn=Object(cn.b)({key:"selectComapnyName",default:""}),ln=t(29),pn=t(54),un=function(n){n.name,n.explanation;var e=n.companyName,t=n.companyLocation,c=(n.profileImg,n.type,n.coords),a=n.userSelector,i=(n.tagImg,Object(cn.d)(rn)),o=Object(cn.d)(an),r=Object(cn.e)(sn),s=Object(cn.e)(dn),d=o.filter((function(n){return n.companyName===e})),l=c===i;return Object(h.jsxs)(bn,{onClick:function(){a(c),r(!0),s(e)},isSelectedItem:l,children:[Object(h.jsx)(mn,{children:e}),Object(h.jsx)(hn,{children:t}),Object(h.jsxs)(fn,{children:[Object(h.jsx)(pn.a,{}),d.length]})]})},bn=m.b.section(S||(S=Object(s.a)(["\n  width: 100%;\n  padding: 10px 0px;\n  border-bottom: 1px solid rgb(245, 245, 245);\n  cursor: pointer;\n  padding: 10px;\n  background-color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.isSelectedItem?"".concat(Object(ln.a)(.05,"#fff")):"#fff"}),(function(n){return n.isSelectedItem?"".concat(Object(ln.a)(.05,"#fff")):"".concat(Object(ln.a)(.02,"#fff"))})),mn=m.b.div(I||(I=Object(s.a)(["\n  font-size: 18px;\n  color: #0068c3;\n  font-weight: 700;\n  letter-spacing: -1px;\n"]))),hn=m.b.div(E||(E=Object(s.a)(["\n  font-size: 12px;\n  color: #333;\n"]))),fn=m.b.div(N||(N=Object(s.a)(["\n  margin-top: 10px;\n  color: #333;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n"]))),xn=Object(a.memo)((function(n){var e=n.data,t=n.index,c=n.userSelector,a=e.name,i=e.explanation,o=e.companyName,r=e.companyLocation,s=e.profileImg,d=e.type,l=e.tagImg,p=""!==l?l:null,u=on(r);return Object(h.jsx)(un,{userSelector:c,coords:u,name:a,explanation:i,companyName:o,companyLocation:r,profileImg:s,type:d,tagImg:p},t)})),vn=t(55),jn=function(n){var e=n.title,t=Object(a.useMemo)((function(){switch(e){case"Design":return"#c6538c";case"FrontEnd":return"#2b7489";case"BackEnd":return"#b07219";case"Android":return"#A97BFF";case"Window":return"#178600";case"Embedded":return"#555555";case"iOS":return"#ffac45";case"QA":return"#f34b7d";case"CTO":return"#26abd7";case"CEO":return"#c5c9e5";default:return"black"}}),[e]);return Object(h.jsx)(gn,{primaryColor:t,children:Object(h.jsxs)(On,{children:[Object(h.jsx)(wn,{primaryColor:t}),Object(h.jsx)("div",{children:e})]})})},gn=m.b.section(T||(T=Object(s.a)(["\n  background-color: ",";\n  font-size: 12px;\n  border-radius: 8px;\n  height: 27px;\n"])),(function(n){return"".concat(Object(ln.b)(.8,n.primaryColor))})),On=m.b.div(P||(P=Object(s.a)(["\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  & > * + * {\n    margin-left: 4px;\n  }\n"]))),wn=m.b.div(A||(A=Object(s.a)(["\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.primaryColor})),yn=function(){var n=tn(),e=n.filterItem,t=n.search,c=n.onChangeSearch,i=Object(cn.d)(an),o=g.a.uniqBy(i,"companyName"),r=Object(cn.e)(rn),s=e(o,"companyName"),d=Object(cn.d)(sn),l=Object(cn.c)(dn),p=Object(Q.a)(l,2),u=p[0],b=p[1],m=Object(cn.e)(rn),f=Object(cn.e)(sn),x=Object(a.useCallback)((function(n){k.getInstance().map.setCenter(n),k.getInstance().map.setLevel(3),r(n)}),[r]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(V,{search:t,onChangeSearch:c,children:s.map((function(n,e){return Object(h.jsx)(xn,{data:n,index:e,userSelector:x},e)}))}),d&&Object(h.jsxs)(Cn,{children:[Object(h.jsx)(zn,{children:Object(h.jsx)(vn.a,{onClick:function(){f(!1),b(""),m("")}})}),i.filter((function(n){return n.companyName===u})).map((function(n,e){var t=n.name,c=n.position,a=n.generation,i=n.profileImg,o=n.tagImg,r=n.explanation;return Object(h.jsxs)(kn,{children:[Object(h.jsx)(In,{src:i}),Object(h.jsxs)(Ln,{children:[Object(h.jsxs)(Sn,{children:[Object(h.jsxs)(Mn,{children:[Object(h.jsxs)(Pn,{children:[a,"\uae30"]}),Object(h.jsx)(En,{children:t}),""===o?null:Object(h.jsx)("div",{children:Object(h.jsx)(Nn,{src:o,alt:""})})]}),Object(h.jsx)(jn,{title:c})]}),Object(h.jsx)(Tn,{children:r})]})]},e)}))]})]})},kn=m.b.div(_||(_=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),zn=m.b.div(F||(F=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  height: 40px;\n\n  & > * {\n    transition: all 0.25s ease;\n    cursor: pointer;\n    font-size: 18px;\n    &:hover {\n      color: rgb(254, 79, 82);\n    }\n  }\n"]))),Mn=m.b.div(B||(B=Object(s.a)(["\n  display: flex;\n  align-items: baseline;\n\n  & > * + * {\n    margin-left: 4px;\n  }\n"]))),Cn=m.b.div(R||(R=Object(s.a)(["\n  position: absolute;\n  left: 300px;\n  width: 100%;\n  height: 100vh;\n  max-width: 320px;\n  background-color: white;\n  z-index: 100;\n  box-shadow: 16px 0px 20px rgba(0, 0, 0, 10%);\n  padding: 10px;\n  overflow: auto;\n\n  @media screen and (max-width: 500px) {\n    max-width: 100%;\n    left: 0px;\n    bottom: 0px;\n    height: 300px;\n    z-index: 9999;\n  }\n"]))),Ln=m.b.section(W||(W=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Sn=m.b.div(D||(D=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]))),In=m.b.img(G||(G=Object(s.a)(["\n  width: 45px;\n  height: 45px;\n  border-radius: 12px;\n  margin-right: 20px;\n"]))),En=m.b.div(H||(H=Object(s.a)(["\n  font-size: 16px;\n  font-weight: bold;\n"]))),Nn=m.b.img(K||(K=Object(s.a)(["\n  width: 40px;\n  vertical-align: bottom;\n"]))),Tn=m.b.div(Y||(Y=Object(s.a)(["\n  font-size: 12px;\n"]))),Pn=m.b.div(J||(J=Object(s.a)(["\n  font-size: 14px;\n  color: #cccbcb;\n"]))),An=function(){return Object(h.jsxs)(_n,{children:[Object(h.jsx)(yn,{}),Object(h.jsx)(q,{})]})},_n=m.b.section(U||(U=Object(s.a)(["\n  width: 100%;\n  display: flex;\n\n  @media screen and (max-width: 500px) {\n    flex-direction: column-reverse;\n    width: 100%;\n    height: 100%;\n  }\n"]))),Fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),a(n),i(n),o(n)}))},Bn=Object(m.a)(Z||(Z=Object(s.a)(["\n    * {\n        padding: 0;\n        margin:0;\n        box-sizing: border-box;\n        font-family: 'Noto Sans KR', sans-serif;\n    }\n"]))),Rn=t(81),Wn=t(59),Dn=t(58);t.n(Dn).a.config(),Rn.a({dsn:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SENTRY_KEY,integrations:[new Wn.a.BrowserTracing],tracesSampleRate:1}),r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsxs)(cn.a,{children:[Object(h.jsx)(Bn,{}),Object(h.jsx)(An,{})]})}),document.getElementById("root")),Fn()}},[[76,1,2]]]);
//# sourceMappingURL=main.1bf3d4ed.chunk.js.map