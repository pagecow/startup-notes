(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{125:function(e,t,n){e.exports=n.p+"static/media/logo.b7b2940b.png"},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return le}));var a=n(7),o=n.n(a),r=n(1),s=n.n(r),i=n(0),c=n(185),l=n(105),u=n(74),d=n(17),p=n(8),f=n.n(p),h=n(294),g=n(295),x=n(6),j=n(22),b=n(5),O=n(43),y=n(34),m=n(169),w=n(35),S=n(142),v=n.n(S),I=n(36),N=n.n(I),C=n(40),T=n(68),D=n(92),A=n(4);function P(e){var t=e.navigation,a=e.AppState,o=a.userID,r=a.setUserID,s=a.setNoteID,i=a.setAllNotes,c=a.setScreenName;return Object(A.jsxs)(b.a,{style:R.headerCont,children:[Object(A.jsx)(O.a,{onPress:function(){t.navigate("AllNotes"),c("AllNotes")},children:Object(A.jsx)(C.a,{style:R.logo,source:n(125)})}),Object(A.jsx)(j.a,{style:R.text,children:"Startup Notes"}),o>0?Object(A.jsx)(D.a,{name:"logout",size:25,color:"#141414",onPress:function(){r(0),d.a.removeItem("@userID"),s(0),d.a.removeItem("@noteID"),i([]),d.a.removeItem("@notes"),t.navigate("LoginSignup")}}):null]})}var R=x.a.create({headerCont:{flex:1,flexDirection:"row",width:"100%",paddingLeft:"5%",paddingRight:"5%",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",shadowColor:"#000",shadowOffset:{width:0,height:3},shadowOpacity:.29,shadowRadius:4.65,elevation:7,paddingTop:T.a.currentHeight},logo:{height:25,width:25},text:{fontFamily:"FredokaOne_400Regular",fontSize:15,color:"#141414"}}),k=n(12),B=n.n(k),_=n(187),L=n(188);function z(e){var t=e.navigation,n=e.AppState,a=n.host,o=n.userID,r=n.noteID,i=n.setNoteID,c=n.allNotes,l=n.setAllNotes,u=n.setChosenNoteID,p=n.screenName,f=n.setScreenName,h=r+1;return Object(A.jsxs)(b.a,{style:F.footerCont,children:[Object(A.jsx)(_.a,{name:"AllNotes"===p?"notebook":"notebook-outline",size:27,color:"AllNotes"===p?"#02394A":"#141414",onPress:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:t.navigate("AllNotes"),f("AllNotes");case 2:case"end":return e.stop()}}),null,null,null,Promise)}}),Object(A.jsx)(L.a,{name:"CreateNote"===p?"md-create":"md-create-outline",size:30,color:"CreateNote"===p?"#02394A":"#141414",onPress:function(){var e,n;return s.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return e={noteID:h,noteTitle:"",noteText:""},p.next=3,s.a.awrap(d.a.setItem("@noteID",""+h));case 3:return p.next=5,s.a.awrap(u(h));case 5:return p.next=7,s.a.awrap(l((function(t){return[e].concat(B()(t))})));case 7:return p.next=9,s.a.awrap(i(h));case 9:return n=JSON.stringify(c),p.next=12,s.a.awrap(d.a.setItem("@notes",n));case 12:N.a.post(a+"/api/notes",{userID:o,noteID:r,allNotes:c}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),t.navigate("CreateNote"),f("CreateNote");case 15:case"end":return p.stop()}}),null,null,null,Promise)}})]})}var F=x.a.create({footerCont:{flex:1,flexDirection:"row",width:"100%",justifyContent:"space-around",alignItems:"center",borderTopWidth:.75,borderTopColor:"#d8d8d8"}}),J=n(186);function E(e){var t=e.navigation,n=e.AppState,a=n.host,o=n.userID,r=n.noteID,i=n.allNotes,c=n.setAllNotes,l=n.setChosenNoteID,u=n.setNote,p=n.setScreenName,f=v()();Object(w.k)();var h=function(e){var t,n,l;return s.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("handleDelete triggered"),t=i,n=i.findIndex((function(t){return t.noteID==e.noteID})),u.next=5,s.a.awrap(t.splice(n,1));case 5:return u.next=7,s.a.awrap(c(t));case 7:return l=JSON.stringify(i),u.next=10,s.a.awrap(d.a.setItem("@notes",l));case 10:N.a.post(a+"/api/notes",{userID:o,noteID:r,allNotes:i}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),f();case 12:case"end":return u.stop()}}),null,null,null,Promise)};return Object(A.jsxs)(b.a,{style:V.screen,children:[Object(A.jsx)(P,{navigation:t,AppState:n}),Object(A.jsx)(b.a,{style:V.body,children:Object(A.jsx)(y.a,{contentContainerStyle:V.scrollViewCont,children:i.map((function(e,n){return Object(A.jsxs)(b.a,{style:V.noteCont,children:[Object(A.jsx)(J.a,{style:V.deleteButton,name:"x-circle",onPress:function(){return t=e,void m.a.alert("Wait! Do you want to delete your note forever?","This cannot be undone!",[{text:"Cancel",onPress:function(){return console.log("Cancel Pressed")},style:"cancel"},{text:"Yes, delete my note forever",onPress:function(){return h(t)}}]);var t}}),Object(A.jsxs)(O.a,{onPress:function(){return n=e,s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(l(n.noteID));case 2:return e.next=4,s.a.awrap(u(n));case 4:t.navigate("Note"),p("CreateNote");case 6:case"end":return e.stop()}}),null,null,null,Promise);var n},children:[Object(A.jsx)(j.a,{style:V.noteTitle,numberOfLines:1,children:e.noteTitle}),Object(A.jsx)(j.a,{style:V.noteText,numberOfLines:1,children:e.noteText})]})]},n)}))})}),Object(A.jsx)(z,{AppState:n,navigation:t})]})}var V=x.a.create({screen:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},body:{flex:8,width:"100%",paddingLeft:"2%",paddingRight:"2%",backgroundColor:"#f4f4f4"},noteCont:{marginTop:0,marginBottom:15,marginLeft:"0.5%",marginRight:"0.5%",padding:15,backgroundColor:"#fff",borderWidth:.75,borderColor:"#d8d8d8",shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.2,shadowRadius:1.41,elevation:2,borderRadius:8},deleteButton:{position:"absolute",right:8,top:8,zIndex:10,fontSize:14,color:"#990000"},noteTitle:{width:"90%",fontFamily:"OpenSans_600SemiBold",marginBottom:5,fontSize:14},noteText:{fontFamily:"OpenSans_300Light",marginTop:2,fontSize:14},scrollViewCont:{paddingTop:20,paddingBottom:200}}),U=n(64),H=n(47),W=n(58),q=n(9),Y=n(31),G=Y.a.get("window").height;function K(e){var t=e.navigation,n=e.AppState,a=n.host,r=n.userID,c=n.noteID,l=n.chosenNoteID,u=n.note,p=n.allNotes,f=n.setAllNotes,h=Object(i.useState)(u.noteTitle),g=o()(h,2),x=g[0],j=g[1],O=Object(i.useState)(u.noteText),m=o()(O,2),w=m[0],S=m[1],v=Object(i.useState)(!0),I=o()(v,2),C=I[0],T=I[1],D=p,P=p.findIndex((function(e){return e.noteID==l}));console.log("Chosen note object: ",p[P]),Object(i.useEffect)((function(){R(),U.a.addListener("keyboardDidShow",(function(){return T(!1)})),U.a.addListener("keyboardDidHide",(function(){return T(!0)}))}));var R=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Before update: ",p[P]),D[P].noteTitle=x,D[P].noteText=w,console.log("After update: ",D[P]),t.next=6,s.a.awrap(f(D));case 6:return e=JSON.stringify(p),t.next=9,s.a.awrap(d.a.setItem("@notes",e));case 9:N.a.post(a+"/api/notes",{userID:r,noteID:c,allNotes:p}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 10:case"end":return t.stop()}}),null,null,null,Promise)};return Object(A.jsxs)(W.a,{style:Q.screen,behavior:"ios"===q.a.OS?"padding":"height",children:[Object(A.jsx)(H.a,{style:Q.noteTitle,placeholder:"Note Title",value:x,onChangeText:j,multiline:!0}),Object(A.jsx)(b.a,{style:Q.body,children:Object(A.jsx)(y.a,{contentContainerStyle:Q.scrollViewCont,keyboardShouldPersistTaps:"always",children:Object(A.jsx)(H.a,{style:Q.noteText,placeholder:"Note Text",value:w,onChangeText:S,multiline:!0})})}),C?Object(A.jsx)(z,{AppState:n,navigation:t}):null]})}var Q=x.a.create({screen:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},body:{flex:9,width:"100%",paddingTop:"6%",paddingLeft:"6%",paddingRight:"6%"},noteTitle:{height:.1*G,fontFamily:"OpenSans_700Bold",fontSize:24,paddingTop:"6%",paddingLeft:"6%",paddingRight:"6%"},noteText:{height:.7*G,fontFamily:"OpenSans_400Regular",marginTop:10,fontSize:16,color:"#000",textAlignVertical:"top",paddingBottom:50},scrollViewCont:{paddingTop:20,paddingBottom:20},saveButtonCont:{flex:1,width:"100%",paddingLeft:"6%",paddingRight:"6%",marginTop:5},saveButton:{backgroundColor:"#02394A",padding:15,alignItems:"center",borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},saveButtonText:{color:"#fff",fontFamily:"FredokaOne_400Regular",fontSize:16}}),Z=Y.a.get("window").height;function M(e){var t=e.navigation,n=e.AppState,a=n.host,r=n.userID,c=n.noteID,l=n.chosenNoteID,u=n.allNotes,p=n.setAllNotes,f=(n.setScreenName,Object(i.useState)("")),h=o()(f,2),g=h[0],x=h[1],j=Object(i.useState)(""),O=o()(j,2),m=O[0],w=O[1],S=Object(i.useState)(!0),v=o()(S,2),I=v[0],C=v[1],T=u,D=u.findIndex((function(e){return e.noteID==l}));console.log("Chosen note object: ",u[D]),Object(i.useEffect)((function(){P(),U.a.addListener("keyboardDidShow",(function(){return C(!1)})),U.a.addListener("keyboardDidHide",(function(){return C(!0)}))}));var P=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Before update: ",u[D]),T[D].noteTitle=g,T[D].noteText=m,console.log("After update: ",T[D]),t.next=6,s.a.awrap(p(T));case 6:return e=JSON.stringify(u),t.next=9,s.a.awrap(d.a.setItem("@notes",e));case 9:N.a.post(a+"/api/notes",{userID:r,noteID:c,allNotes:u}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 10:case"end":return t.stop()}}),null,null,null,Promise)};return Object(A.jsxs)(W.a,{style:X.screen,behavior:"ios"===q.a.OS?"padding":"height",children:[Object(A.jsx)(b.a,{style:X.body,children:Object(A.jsxs)(y.a,{contentContainerStyle:X.scrollViewCont,keyboardShouldPersistTaps:"always",children:[Object(A.jsx)(H.a,{style:X.noteTitle,placeholder:"Note Title",value:g,onChangeText:x,multiline:!0}),Object(A.jsx)(H.a,{style:X.noteText,placeholder:"Note Text",value:m,onChangeText:w,multiline:!0,pointerEvents:"none"})]})}),I?Object(A.jsx)(z,{AppState:n,navigation:t}):null]})}var X=x.a.create({screen:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"},body:{flex:9,width:"100%",paddingTop:"6%",paddingLeft:"6%",paddingRight:"6%"},noteTitle:{height:.1*Z,fontFamily:"OpenSans_700Bold",fontSize:24},noteText:{height:.7*Z,fontFamily:"OpenSans_400Regular",marginTop:10,fontSize:16,color:"#000",textAlignVertical:"top",paddingBottom:50},scrollViewCont:{paddingTop:20,paddingBottom:20},saveButtonCont:{flex:1,width:"100%",paddingLeft:"6%",paddingRight:"6%",marginTop:5},saveButton:{backgroundColor:"#02394A",padding:15,alignItems:"center",borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},saveButtonText:{color:"#fff",fontFamily:"FredokaOne_400Regular",fontSize:16}});function $(e){var t=e.navigation,a=e.AppState,o=a.userID,r=a.setUserID,s=a.setNoteID,i=a.setAllNotes;a.setScreenName;return Object(A.jsxs)(b.a,{style:ee.headerCont,children:[Object(A.jsx)(C.a,{style:ee.logo,source:n(125)}),Object(A.jsx)(j.a,{style:ee.text,children:"Startup Notes"}),o>0?Object(A.jsx)(D.a,{name:"logout",size:25,color:"#141414",onPress:function(){r(0),d.a.removeItem("@userID"),s(0),d.a.removeItem("@noteID"),i([]),d.a.removeItem("@notes"),t.navigate("LoginSignup")}}):null]})}var ee=x.a.create({headerCont:{flex:1,flexDirection:"row",width:"100%",paddingLeft:"5%",paddingRight:"5%",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",shadowColor:"#000",shadowOffset:{width:0,height:3},shadowOpacity:.29,shadowRadius:4.65,elevation:7,paddingTop:T.a.currentHeight},logo:{height:25,width:25},text:{fontFamily:"FredokaOne_400Regular",fontSize:15,color:"#141414"}});function te(e){var t=e.navigation,n=e.AppState,a=n.host,r=n.userID,c=n.setUserID,l=n.setNoteID,u=n.setAllNotes,p=Object(i.useState)(""),f=o()(p,2),h=f[0],g=f[1],x=Object(i.useState)(""),y=o()(x,2),m=y[0],w=y[1],S=Object(i.useState)(!1),v=o()(S,2),I=v[0],C=v[1];Object(i.useEffect)((function(){r&&(t.navigate("AllNotes"),N.a.post(a+"/api/user/"+r).then((function(e){var n,a,o,r;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("res.data: ",e.data,e.data.notes),i.next=3,s.a.awrap(l(e.data.note_id));case 3:return n=JSON.stringify(e.data.note_id),i.next=6,s.a.awrap(d.a.setItem("@noteID",n));case 6:for(o in a=[],e.data.notes)console.log("note: ",e.data.notes[o]),a.push(JSON.parse(e.data.notes[o]));return console.log("notesParsed: ",a),i.next=11,s.a.awrap(u(a));case 11:return r=JSON.stringify(a),i.next=14,s.a.awrap(d.a.setItem("@notes",r));case 14:t.navigate("AllNotes");case 15:case"end":return i.stop()}}),null,null,null,Promise)})).catch((function(e){return console.log(e)})))}),[]);return"web"===q.a.OS?Object(A.jsxs)(b.a,{style:ne.screen,children:[Object(A.jsx)(j.a,{style:ne.siteConstuctionText,children:"Site is under construction."}),Object(A.jsx)(j.a,{style:ne.siteConstuctionText,children:"You can find the Startup Notes app on the Apple App Store or the Google Play Store."}),Object(A.jsx)(j.a,{style:ne.siteConstuctionText,children:"If you have any questions, please email: tj@nativenotify.com"})]}):Object(A.jsxs)(W.a,{style:ne.screen,behavior:"ios"===q.a.OS?"padding":"height",children:[Object(A.jsx)($,{navigation:t,AppState:n}),Object(A.jsxs)(b.a,{style:ne.body,children:[I?Object(A.jsx)(j.a,{style:ne.headerText}):Object(A.jsx)(j.a,{style:ne.headerText,children:"Sign up to automatically save your notes to the cloud. Automatically sync and access your files across devices."}),Object(A.jsx)(H.a,{style:ne.inputs,placeholder:"Email",value:h,onChangeText:g,textContentType:"emailAddress",autoCapitalize:"none"}),Object(A.jsx)(H.a,{style:ne.inputs,placeholder:"Password",value:m,onChangeText:w,secureTextEntry:!0}),I?Object(A.jsx)(O.a,{style:ne.saveButton,onPress:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.post(a+"/api/auth/login",{email:h,password:m}).then((function(e){var n,a,o,r,i;return s.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return console.log("res.data: ",e.data,e.data.notes),p.next=3,s.a.awrap(c(e.data.user_id));case 3:return n=JSON.stringify(e.data.user_id),p.next=6,s.a.awrap(d.a.setItem("@userID",n));case 6:return p.next=8,s.a.awrap(l(e.data.note_id));case 8:return a=JSON.stringify(e.data.note_id),p.next=11,s.a.awrap(d.a.setItem("@noteID",a));case 11:for(r in o=[],e.data.notes)console.log("note: ",e.data.notes[r]),o.push(JSON.parse(e.data.notes[r]));return console.log("notesParsed: ",o),p.next=16,s.a.awrap(u(o));case 16:return i=JSON.stringify(o),p.next=19,s.a.awrap(d.a.setItem("@notes",i));case 19:g(""),w(""),t.navigate("AllNotes");case 22:case"end":return p.stop()}}),null,null,null,Promise)})).catch((function(e){console.log(e),alert("Sorry, that email and password did not match out records. Please try again.")}));case 1:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(A.jsx)(j.a,{style:ne.saveButtonText,children:"Login"})}):Object(A.jsx)(O.a,{style:ne.saveButton,onPress:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.post(a+"/api/auth/register",{email:h,password:m}).then((function(e){var n,a,o;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("res.data: ",e.data),r.next=3,s.a.awrap(c(e.data.user_id));case 3:return n=JSON.stringify(e.data.user_id),r.next=6,s.a.awrap(d.a.setItem("@userID",n));case 6:return r.next=8,s.a.awrap(l(e.data.note_id));case 8:return a=JSON.stringify(e.data.note_id),r.next=11,s.a.awrap(d.a.setItem("@noteID",a));case 11:return r.next=13,s.a.awrap(u(e.data.notes));case 13:return o=JSON.stringify(e.data.notes),r.next=16,s.a.awrap(d.a.setItem("@notes",o));case 16:g(""),w(""),t.navigate("AllNotes");case 19:case"end":return r.stop()}}),null,null,null,Promise)})).catch((function(e){alert("Sorry, that email is already in use. Try logging in or registering with another email.")}));case 1:case"end":return e.stop()}}),null,null,null,Promise)},children:Object(A.jsx)(j.a,{style:ne.saveButtonText,children:"Sign Up"})}),Object(A.jsx)(O.a,{onPress:function(){C(!I),g(""),w("")},children:Object(A.jsx)(j.a,{style:ne.text,children:I?"Don't have an account yet? Tap here to Sign up.":"Already have an account? Tap here to Log In."})})]})]})}var ne=x.a.create({screen:{flex:1,alignItems:"center",backgroundColor:"#fff"},body:{flex:9,width:"100%",paddingLeft:"6%",paddingRight:"6%",alignItems:"center",backgroundColor:"#f4f4f4"},headerText:{height:"25%",minHeight:100,fontFamily:"OpenSans_700Bold",fontSize:18,marginTop:30,textAlign:"center"},inputs:{width:"100%",fontFamily:"OpenSans_700Bold",fontSize:14,padding:10,backgroundColor:"#fff",borderWidth:.75,borderColor:"#d8d8d8",shadowColor:"#000",shadowOffset:{width:0,height:1},shadowOpacity:.2,shadowRadius:1.41,elevation:2,borderRadius:8,marginBottom:10},password:{fontFamily:"OpenSans_400Regular",marginTop:10,fontSize:16,color:"#000"},saveButton:{width:"100%",backgroundColor:"#02394A",marginTop:5,marginBottom:15,padding:15,alignItems:"center",borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},saveButtonText:{color:"#fff",fontFamily:"FredokaOne_400Regular",fontSize:16},text:{fontFamily:"OpenSans_400Regular"},siteConstuctionText:{fontSize:20,margin:20,textAlign:"center"}});function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=Object(g.a)();function se(e){var t=e.AppState;return Object(A.jsx)(h.a,{children:Object(A.jsxs)(re.Navigator,{children:[Object(A.jsx)(re.Screen,{name:"LoginSignup",options:{headerShown:!1},children:function(e){return Object(A.jsx)(te,oe(oe({},e),{},{AppState:t}))}}),Object(A.jsx)(re.Screen,{name:"AllNotes",options:{headerShown:!1},children:function(e){return Object(A.jsx)(E,oe(oe({},e),{},{AppState:t}))}}),Object(A.jsx)(re.Screen,{name:"Note",options:{headerShown:!1},children:function(e){return Object(A.jsx)(K,oe(oe({},e),{},{AppState:t}))}}),Object(A.jsx)(re.Screen,{name:"CreateNote",options:{headerShown:!1},children:function(e){return Object(A.jsx)(M,oe(oe({},e),{},{AppState:t}))}})]})})}function ie(){var e=Object(i.useState)(0),t=o()(e,2),n=t[0],a=t[1],r=Object(i.useState)(0),p=o()(r,2),f=p[0],h=p[1],g=Object(i.useState)([]),x=o()(g,2),j=x[0],b=x[1],O=Object(i.useState)({}),y=o()(O,2),m=y[0],w=y[1],S=Object(i.useState)(0),v=o()(S,2),I=v[0],N=v[1],C=Object(i.useState)("AllNotes"),T=o()(C,2),D=T[0],P=T[1],R={host:"https://startupnotes.app",userID:n,setUserID:a,noteID:f,setNoteID:h,allNotes:j,setAllNotes:b,note:m,setNote:w,chosenNoteID:I,setChosenNoteID:N,screenName:D,setScreenName:P},k=Object(l.b)({FredokaOne_400Regular:l.a,OpenSans_300Light:u.a,OpenSans_400Regular:u.b,OpenSans_600SemiBold:u.c,OpenSans_700Bold:u.d}),B=o()(k,1)[0];return Object(i.useEffect)((function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(d.a.getItem("@userID"));case 3:e=t.sent,console.log("localUserID: ",e),null!==e&&a(Number(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),null,null,[[0,8]],Promise)}),[]),B?Object(A.jsx)(se,{AppState:R}):Object(A.jsx)(c.a,{})}var ce=n(183);function le(){return Object(ce.a)(2322,"m2Z4KJEpmg7R91AkqQpCru"),Object(A.jsx)(ie,{})}},193:function(e,t,n){e.exports=n(284)}},[[193,1,2]]]);
//# sourceMappingURL=app.daa035e7.chunk.js.map