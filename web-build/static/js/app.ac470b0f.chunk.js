(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return te}));var o=n(7),a=n.n(o),r=n(1),s=n.n(r),i=n(0),c=n(166),l=n(54),d=n(27),u=n(8),f=n.n(u),p=n(247),h=n(248),g=n(6),j=n(26),b=n(5),x=n(47),O=n(32),y=n(150),m=n(33),S=n(122),w=n.n(S),v=n(42),C=n(144),T=n(168),N=n(4);function I(e){var t=e.navigation,o=e.AppState.setScreenName;return Object(N.jsxs)(b.a,{style:A.headerCont,children:[Object(N.jsx)(x.a,{onPress:function(){t.navigate("AllNotes"),o("AllNotes")},children:Object(N.jsx)(v.a,{style:A.logo,source:n(198)})}),Object(N.jsx)(j.a,{style:A.text,children:"Startup Notes"}),Object(N.jsx)(T.a,{name:"user",size:35,color:"#141414",onPress:function(){return t.navigate("LoginSignup")}})]})}var A=g.a.create({headerCont:{flex:1,flexDirection:"row",width:"100%",paddingLeft:"5%",paddingRight:"5%",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",shadowColor:"#000",shadowOffset:{width:0,height:3},shadowOpacity:.29,shadowRadius:4.65,elevation:7,paddingTop:C.a.currentHeight},logo:{height:25,width:25},text:{fontFamily:"FredokaOne_400Regular",fontSize:15,color:"#141414"}}),D=n(12),k=n.n(D),R=n(169),B=n(170);function P(e){var t=e.navigation,n=e.AppState,o=n.noteID,a=n.setNoteID,r=n.allNotes,i=n.setAllNotes,c=n.setChosenNoteID,l=n.screenName,u=n.setScreenName,f=o+1;return Object(N.jsxs)(b.a,{style:L.footerCont,children:[Object(N.jsx)(R.a,{name:"AllNotes"===l?"notebook":"notebook-outline",size:27,color:"AllNotes"===l?"#02394A":"#141414",onPress:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:t.navigate("AllNotes"),u("AllNotes");case 2:case"end":return e.stop()}}),null,null,null,Promise)}}),Object(N.jsx)(B.a,{name:"CreateNote"===l?"md-create":"md-create-outline",size:30,color:"CreateNote"===l?"#02394A":"#141414",onPress:function(){var e,n;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e={noteID:f,noteTitle:"",noteText:""},o.next=3,s.a.awrap(d.a.setItem("@noteID",""+f));case 3:return o.next=5,s.a.awrap(c(f));case 5:return o.next=7,s.a.awrap(i((function(t){return[e].concat(k()(t))})));case 7:return o.next=9,s.a.awrap(a(f));case 9:return n=JSON.stringify(r),o.next=12,s.a.awrap(d.a.setItem("@notes",n));case 12:t.navigate("CreateNote"),u("CreateNote");case 14:case"end":return o.stop()}}),null,null,null,Promise)}})]})}var L=g.a.create({footerCont:{flex:1,flexDirection:"row",width:"100%",justifyContent:"space-around",alignItems:"center",borderTopWidth:.75,borderTopColor:"#d8d8d8"}}),F=n(167);function _(e){var t=e.navigation,n=e.AppState,o=n.allNotes,a=n.setAllNotes,r=n.setChosenNoteID,c=n.setNote,l=w()();Object(m.k)(),Object(i.useEffect)((function(){console.log("useEffect triggered")}),[o]);var u=function(e){var t,n,r;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("handleDelete triggered"),t=o,n=o.findIndex((function(t){return t.noteID==e.noteID})),i.next=5,s.a.awrap(t.splice(n,1));case 5:return i.next=7,s.a.awrap(a(t));case 7:return r=JSON.stringify(o),i.next=10,s.a.awrap(d.a.setItem("@notes",r));case 10:l();case 11:case"end":return i.stop()}}),null,null,null,Promise)};return Object(N.jsxs)(b.a,{style:z.screen,children:[Object(N.jsx)(I,{navigation:t,AppState:n}),Object(N.jsx)(b.a,{style:z.body,children:Object(N.jsx)(O.a,{contentContainerStyle:z.scrollViewCont,children:o.map((function(e,n){return Object(N.jsxs)(b.a,{style:z.noteCont,children:[Object(N.jsx)(F.a,{style:z.deleteButton,name:"x-circle",onPress:function(){return t=e,void y.a.alert("Wait! Do you want to delete your note forever?","This cannot be undone!!!",[{text:"Cancel",onPress:function(){return console.log("Cancel Pressed")},style:"cancel"},{text:"Yes, delete my note forever",onPress:function(){return u(t)}}]);var t}}),Object(N.jsxs)(x.a,{onPress:function(){return n=e,s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(r(n.noteID));case 2:return e.next=4,s.a.awrap(c(n));case 4:t.navigate("Note");case 5:case"end":return e.stop()}}),null,null,null,Promise);var n},children:[Object(N.jsx)(j.a,{style:z.noteTitle,numberOfLines:1,children:e.noteTitle}),Object(N.jsx)(j.a,{style:z.noteText,numberOfLines:1,children:e.noteText})]})]},n)}))})}),Object(N.jsx)(P,{AppState:n,navigation:t})]})}var z=g.a.create({screen:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},body:{flex:8,width:"100%",paddingLeft:"2%",paddingRight:"2%",backgroundColor:"#f4f4f4"},noteCont:{marginTop:0,marginBottom:15,marginLeft:"0.5%",marginRight:"0.5%",padding:15,backgroundColor:"#fff",borderWidth:.75,borderColor:"#d8d8d8",shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.2,shadowRadius:1.41,elevation:2,borderRadius:8},deleteButton:{position:"absolute",right:8,top:8,zIndex:10,fontSize:14,color:"#990000"},noteTitle:{width:"90%",fontFamily:"OpenSans_600SemiBold",marginBottom:5,fontSize:14},noteText:{fontFamily:"OpenSans_300Light",marginTop:2,fontSize:14},scrollViewCont:{paddingTop:20,paddingBottom:200}}),E=n(53),J=n(44),V=n(58),W=n(9);function H(e){var t=e.navigation,n=e.AppState,o=n.chosenNoteID,r=n.note,c=n.allNotes,l=n.setAllNotes,u=Object(i.useState)(r.noteTitle),f=a()(u,2),p=f[0],h=f[1],g=Object(i.useState)(r.noteText),j=a()(g,2),x=j[0],y=j[1],m=Object(i.useState)(!0),S=a()(m,2),w=S[0],v=S[1],C=c,T=c.findIndex((function(e){return e.noteID==o}));console.log("Chosen note object: ",c[T]),Object(i.useEffect)((function(){I(),E.a.addListener("keyboardDidShow",(function(){return v(!1)})),E.a.addListener("keyboardDidHide",(function(){return v(!0)}))}));var I=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Before update: ",c[T]),C[T].noteTitle=p,C[T].noteText=x,console.log("After update: ",C[T]),t.next=6,s.a.awrap(l(C));case 6:return e=JSON.stringify(c),t.next=9,s.a.awrap(d.a.setItem("@notes",e));case 9:case"end":return t.stop()}}),null,null,null,Promise)};return Object(N.jsxs)(V.a,{style:U.screen,behavior:"ios"===W.a.OS?"padding":"height",children:[Object(N.jsx)(b.a,{style:U.body,children:Object(N.jsxs)(O.a,{contentContainerStyle:U.scrollViewCont,children:[Object(N.jsx)(J.a,{style:U.noteTitle,placeholder:"Note Title",value:p,onChangeText:h,multiline:!0}),Object(N.jsx)(J.a,{style:U.noteText,placeholder:"Note Text",value:x,onChangeText:y,multiline:!0})]})}),w?Object(N.jsx)(P,{AppState:n,navigation:t}):null]})}var U=g.a.create({screen:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},body:{flex:9,width:"100%",paddingTop:"6%",paddingLeft:"6%",paddingRight:"6%"},noteTitle:{fontFamily:"OpenSans_700Bold",fontSize:24},noteText:{fontFamily:"OpenSans_400Regular",marginTop:10,fontSize:16,color:"#000"},scrollViewCont:{paddingTop:20,paddingBottom:20},saveButtonCont:{flex:1,width:"100%",paddingLeft:"6%",paddingRight:"6%",marginTop:5},saveButton:{backgroundColor:"#02394A",padding:15,alignItems:"center",borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},saveButtonText:{color:"#fff",fontFamily:"FredokaOne_400Regular",fontSize:16}});function q(e){var t=e.navigation,n=e.AppState,o=n.chosenNoteID,r=n.allNotes,c=n.setAllNotes,l=Object(i.useState)(""),u=a()(l,2),f=u[0],p=u[1],h=Object(i.useState)(""),g=a()(h,2),j=g[0],x=g[1],y=Object(i.useState)(!0),m=a()(y,2),S=m[0],w=m[1],v=r,C=r.findIndex((function(e){return e.noteID==o}));console.log("Chosen note object: ",r[C]),Object(i.useEffect)((function(){T(),E.a.addListener("keyboardDidShow",(function(){return w(!1)})),E.a.addListener("keyboardDidHide",(function(){return w(!0)}))}));var T=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Before update: ",r[C]),v[C].noteTitle=f,v[C].noteText=j,console.log("After update: ",v[C]),t.next=6,s.a.awrap(c(v));case 6:return e=JSON.stringify(r),t.next=9,s.a.awrap(d.a.setItem("@notes",e));case 9:case"end":return t.stop()}}),null,null,null,Promise)};return Object(N.jsxs)(V.a,{style:K.screen,behavior:"ios"===W.a.OS?"padding":"height",children:[Object(N.jsx)(b.a,{style:K.body,children:Object(N.jsxs)(O.a,{contentContainerStyle:K.scrollViewCont,children:[Object(N.jsx)(J.a,{style:K.noteTitle,placeholder:"Note Title",value:f,onChangeText:p,multiline:!0}),Object(N.jsx)(J.a,{style:K.noteText,placeholder:"Note Text",value:j,onChangeText:x,multiline:!0})]})}),S?Object(N.jsx)(P,{AppState:n,navigation:t}):null]})}var K=g.a.create({screen:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},body:{flex:9,width:"100%",paddingTop:"6%",paddingLeft:"6%",paddingRight:"6%"},noteTitle:{fontFamily:"OpenSans_700Bold",fontSize:24},noteText:{fontFamily:"OpenSans_400Regular",marginTop:20,fontSize:16,color:"#000"},scrollViewCont:{paddingTop:20,paddingBottom:20},saveButtonCont:{flex:1,width:"100%",paddingLeft:"6%",paddingRight:"6%",marginTop:5},saveButton:{backgroundColor:"#02394A",padding:15,alignItems:"center",borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},saveButtonText:{color:"#fff",fontFamily:"FredokaOne_400Regular",fontSize:16}});function Q(e){var t=e.navigation,n=e.AppState,o=(n.userID,n.setUserID,Object(i.useState)("")),r=a()(o,2),s=r[0],c=r[1],l=Object(i.useState)(""),d=a()(l,2),u=d[0],f=d[1],p=Object(i.useState)(!1),h=a()(p,2),g=h[0],O=h[1];return Object(N.jsxs)(V.a,{style:Y.screen,behavior:"ios"===W.a.OS?"padding":"height",children:[Object(N.jsx)(I,{navigation:t,AppState:n}),Object(N.jsxs)(b.a,{style:Y.body,children:[g?Object(N.jsx)(j.a,{style:Y.headerText}):Object(N.jsx)(j.a,{style:Y.headerText,children:"Sign up to automatically save your notes to the cloud. Automatically sync and access your files across devices."}),Object(N.jsx)(J.a,{style:Y.inputs,placeholder:"Email",value:s,onChangeText:c,multiline:!0}),Object(N.jsx)(J.a,{style:Y.inputs,placeholder:"Password",value:u,onChangeText:f,multiline:!0}),Object(N.jsx)(x.a,{style:Y.saveButton,children:Object(N.jsx)(j.a,{style:Y.saveButtonText,children:g?"Login":"Sign Up"})}),Object(N.jsx)(x.a,{onPress:function(){return O(!g)},children:Object(N.jsx)(j.a,{style:Y.text,children:g?"Don't have an account yet? Tap here to Sign up.":"Already have an account? Tap here to Log In."})})]})]})}var Y=g.a.create({screen:{flex:1,alignItems:"center",backgroundColor:"#fff"},body:{flex:9,width:"100%",paddingLeft:"6%",paddingRight:"6%",alignItems:"center",backgroundColor:"#f4f4f4"},headerText:{height:"20%",fontFamily:"OpenSans_700Bold",fontSize:18,marginTop:30,textAlign:"center"},inputs:{width:"100%",fontFamily:"OpenSans_700Bold",fontSize:14,padding:10,backgroundColor:"#fff",borderWidth:.75,borderColor:"#d8d8d8",shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.2,shadowRadius:1.41,elevation:2,borderRadius:8,marginBottom:10},password:{fontFamily:"OpenSans_400Regular",marginTop:10,fontSize:16,color:"#000"},saveButton:{width:"100%",backgroundColor:"#02394A",marginTop:5,marginBottom:15,padding:15,alignItems:"center",borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},saveButtonText:{color:"#fff",fontFamily:"FredokaOne_400Regular",fontSize:16},text:{fontFamily:"OpenSans_400Regular"}});function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=Object(h.a)();function X(e){var t=e.AppState;return Object(N.jsx)(p.a,{children:Object(N.jsxs)(M.Navigator,{children:[Object(N.jsx)(M.Screen,{name:"AllNotes",options:{headerShown:!1},children:function(e){return Object(N.jsx)(_,G(G({},e),{},{AppState:t}))}}),Object(N.jsx)(M.Screen,{name:"Note",options:{headerShown:!1},children:function(e){return Object(N.jsx)(H,G(G({},e),{},{AppState:t}))}}),Object(N.jsx)(M.Screen,{name:"CreateNote",options:{headerShown:!1},children:function(e){return Object(N.jsx)(q,G(G({},e),{},{AppState:t}))}}),Object(N.jsx)(M.Screen,{name:"LoginSignup",options:{headerShown:!1},children:function(e){return Object(N.jsx)(Q,G(G({},e),{},{AppState:t}))}})]})})}function $(){var e=Object(i.useState)(0),t=a()(e,2),n=t[0],o=t[1],r=Object(i.useState)(0),u=a()(r,2),f=u[0],p=u[1],h=Object(i.useState)([]),g=a()(h,2),j=g[0],b=g[1],x=Object(i.useState)({}),O=a()(x,2),y=O[0],m=O[1],S=Object(i.useState)(0),w=a()(S,2),v=w[0],C=w[1],T=Object(i.useState)("AllNotes"),I=a()(T,2),A=I[0],D=I[1],k={userID:n,setUserID:o,noteID:f,setNoteID:p,allNotes:j,setAllNotes:b,note:y,setNote:m,chosenNoteID:v,setChosenNoteID:C,screenName:A,setScreenName:D},R=Object(l.f)({FredokaOne_400Regular:l.a,OpenSans_300Light:l.b,OpenSans_400Regular:l.c,OpenSans_600SemiBold:l.d,OpenSans_700Bold:l.e}),B=a()(R,1)[0];return Object(i.useEffect)((function(){var e,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.awrap(d.a.getItem("@noteID"));case 3:if(e=n.sent,console.log("localNoteID: ",e),null===e){n.next=9;break}p(Number(e)),n.next=11;break;case 9:return n.next=11,s.a.awrap(d.a.setItem("@noteID","0"));case 11:return n.next=13,s.a.awrap(d.a.getItem("@notes"));case 13:t=n.sent,console.log("localNotes: ",t),null!==t&&b(JSON.parse(t)),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),console.log(n.t0);case 21:case"end":return n.stop()}}),null,null,[[0,18]],Promise)}),[]),B?Object(N.jsx)(X,{AppState:k}):Object(N.jsx)(c.a,{})}var ee=n(164);function te(){return Object(ee.a)(2322,"m2Z4KJEpmg7R91AkqQpCru"),Object(N.jsx)($,{})}},176:function(e,t,n){e.exports=n(238)},198:function(e,t,n){e.exports=n.p+"static/media/logo.b7b2940b.png"}},[[176,1,2]]]);
//# sourceMappingURL=app.ac470b0f.chunk.js.map