/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 11.00
* Profile  : WebGL
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var C={};
var Ax=[0,0];var AF=[0,0,0,0];var BC="The view does not belong to this group";var
BJ="The dialog component is already presented";var C9="The dialog component is actually not presented";
var DZ="No fader to perform the fade-in/out operation";var D0="Trying to use the same fader twice";
var GA="Trying to fade-in/out a group which belongs to another owner";var Hz="No view to restack";
var GB="View is not in this group";var IQ="No view to remove";var IR="No view to add";
var IS="View already in a group";var IT="Recursive invalidate during active update cycle.";
var GC=[-8,-8,9,9];var IU="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var IV="Trying to cancel a task not belonging to this queue!";
var IW="Trying to enqueue a task twice!";
C.BI={O:null,R:null,G:null,Ah:null,F:0x103,Cv:0,CC:0x14,FS:function(N,FL){},LB:function(
D){if(this.Cv===D)return;this.Cv=D;if(!!this.G){var Em=this.O;var BZ=0;while(!!Em&&(
D>Em.Cv)){Em=Em.O;BZ=BZ+1;}Em=this.R;while(!!Em&&(D<Em.Cv)){Em=Em.R;BZ=BZ-1;}if(
!!BZ)this.G.LI(this,BZ);}},Ly:function(D){var A;var BZ=D^this.CC;if(!BZ)return;this.
CC=D;if(!!this.Ah&&!((this.F&0x400)===0x400)){this.G.F=this.G.F|0x5000;B.lz([A=this.
G,A.Bh],this);this.G.Ai([0,0,(A=this.G.S)[2]-A[0],A[3]-A[1]]);}if(!!this.Ah&&((this.
F&0x400)===0x400)){this.Ah.ET.F=this.Ah.ET.F|0x1000;this.G.F=this.G.F|0x4000;B.lz([
A=this.G,A.Bh],this);}},JB:function(){var W=this.G;while(!!W){var K5=(C.Root.isPrototypeOf(
W)?W:null);if(!!K5)return K5;W=W.G;}return null;},CT:function(AS,aClip,aOffset,Ay
,aBlend){},Br:function(Aj){return null;},Fq:function(Ag,P,B$,FI,FM){return null;
},F$:function(N,Bu){return Ax;},He:function(aOffset,FK){},GetExtent:function(){return AF;
},AC:function(D3,E8){var A;if(((this.F&0x200)===0x200))D3=D3&~0x400;var Jg=(this.
F&~E8)|D3;var EM=Jg^this.F;this.F=Jg;if(!!this.G&&!!(EM&0x14)){var KK=((this.F&0x14
)===0x14);if(KK&&!this.G.BV)this.G.CV(this);if(!KK&&(this.G.BV===this))this.G.CV(
this.G.Jz(this,0x14));}if(!!this.G&&!!(EM&0x403))this.G.Ai(this.GetExtent());if(((
!!this.Ah&&!!this.G)&&((Jg&0x400)===0x400))&&((EM&0x1)===0x1)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bh],this);}if(!!this.G&&((EM&0x400)===
0x400)){this.Ah=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G
,A.Bh],this);}},_Init:function(aArg){this.__proto__=C.BI;B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ah)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);
},T:null,_cycle:0,_observers:null,_className:"Core::View"};C.Fv={Aw:B.qK,AM:B.qK
,FS:function(N,FL){var Q=B._NewObject(C.Hc,0);this.Ah=null;Q.Bo=this.getExtent();
Q.Z=N;Q.ET=FL;Q.Eb=this.AM;Q.Ec=this.Aw;this.Ah=Q;},F$:function(N,Bu){var A;var Aq=
this.CC;var Q=(C.Hc.isPrototypeOf(A=this.Ah)?A:null);var x1=Q.Bo[0];var y1=Q.Bo[
1];var x2=Q.Bo[2];var y2=Q.Bo[3];var A7=[N[2]-N[0],N[3]-N[1]];var Ac=x2-x1;var Ab=
y2-y1;var tmp;if(!Bu){var BB=[(A=Q.Z)[2]-A[0],A[3]-A[1]];x1=x1-Q.Z[0];y1=y1-Q.Z[
1];if(BB[0]!==A7[0]){var A4=((Aq&0x4)===0x4);var A5=((Aq&0x8)===0x8);var B5=((Aq&
0x1)===0x1);if(!A4&&(B5||!A5))x1=((x1*A7[0])/BB[0])|0;if(!A5&&(B5||!A4)){x2=x2-Q.
Z[0];x2=((x2*A7[0])/BB[0])|0;x2=x2-A7[0];}else x2=x2-Q.Z[2];x1=x1+N[0];x2=x2+N[2
];if(!B5){if(A4&&!A5)x2=x1+Ac;else if(!A4&&A5)x1=x2-Ac;else{x1=x1+((((x2-x1)-Ac)
/2)|0);x2=x1+Ac;}}}else{x2=x2-Q.Z[2];x1=x1+N[0];x2=x2+N[2];}if(BB[1]!==A7[1]){var
A6=((Aq&0x10)===0x10);var A3=((Aq&0x20)===0x20);var B6=((Aq&0x2)===0x2);if(!A6&&(
B6||!A3))y1=((y1*A7[1])/BB[1])|0;if(!A3&&(B6||!A6)){y2=y2-Q.Z[1];y2=((y2*A7[1])/
BB[1])|0;y2=y2-A7[1];}else y2=y2-Q.Z[3];y1=y1+N[1];y2=y2+N[3];if(!B6){if(A6&&!A3
)y2=y1+Ab;else if(!A6&&A3)y1=y2-Ab;else{y1=y1+((((y2-y1)-Ab)/2)|0);y2=y1+Ab;}}}else{
y2=y2-Q.Z[3];y1=y1+N[1];y2=y2+N[3];}}else{switch(Bu){case 3:{x1=N[0];x2=x1+Ac;}break;
case 4:{x2=N[2];x1=x2-Ac;}break;case 1:{y1=N[1];y2=y1+Ab;}break;case 2:{y2=N[3];
y1=y2-Ab;}break;default:;}if((Bu===3)||(Bu===4)){var A6=((Aq&0x10)===0x10);var A3=((
Aq&0x20)===0x20);var B6=((Aq&0x2)===0x2);if(B6){y1=N[1];y2=N[3];}else if(A6&&!A3
){y1=N[1];y2=y1+Ab;}else if(A3&&!A6){y2=N[3];y1=y2-Ab;}else{y1=N[1]+((((N[3]-N[1
])-Ab)/2)|0);y2=y1+Ab;}}if((Bu===1)||(Bu===2)){var A4=((Aq&0x4)===0x4);var A5=((
Aq&0x8)===0x8);var B5=((Aq&0x1)===0x1);if(B5){x1=N[0];x2=N[2];}else if(A4&&!A5){
x1=N[0];x2=x1+Ac;}else if(A5&&!A4){x2=N[2];x1=x2-Ac;}else{x1=N[0]+((((N[2]-N[0])-
Ac)/2)|0);x2=x1+Ac;}}}Q.isEmpty=(x1>=x2)||(y1>=y2);Ac=x2-x1;Ab=y2-y1;if(Q.Ec[0]<
Q.Eb[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(Q.Ec[1]<Q.Eb[1]){tmp=y1;y1=y2-1;y2=tmp-1;}if((
x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){this.AM=[x1,y1
];this.Aw=[x2,y2];}else{this.CW([x1,y1]);this.CX([x2,y2]);this.Ah=Q;}return[Ac,Ab
];},He:function(aOffset,FK){if(FK){this.AM=B.tV(this.AM,aOffset);this.Aw=B.tV(this.
Aw,aOffset);}else{this.CW(B.tV(this.AM,aOffset));this.CX(B.tV(this.Aw,aOffset));
}},GetExtent:function(){if(!!this.Ah&&this.Ah.isEmpty)return AF;return this.getExtent(
);},getExtent:function(){var x1=this.AM[0];var y1=this.AM[1];var x2=this.Aw[0];var
y2=this.Aw[1];var Ac=x2-x1;var Ab=y2-y1;var tmp;if(Ac<0)Ac=-Ac;if(Ab<0)Ab=-Ab;if(
Ac>=Ab){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(Ab>=Ac){if(y2>y1)y2=y2-1;if(y2<y1)
y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}return[x1
,y1,x2+1,y2+1];},CX:function(D){var A;if(B.tH(D,this.Aw))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Ah=null;this.Aw=D;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.lz([A=this.G,A.Bh],this);}},CW:function(D){var A;if(B.tH(D,this.AM))return;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Ah=null;this.AM=
D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((!!this.G&&((
this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bh],this);}},_Init:function(aArg){C.BI._Init.
call(this,aArg);this.__proto__=C.Fv;},_className:"Core::LineView"};C.Gv={Bi:B.qK
,BH:B.qK,Aw:B.qK,AM:B.qK,FS:function(N,FL){var Q=B._NewObject(C.Hd,0);this.Ah=null;
Q.Bo=this.GetExtent();Q.Z=N;Q.ET=FL;Q.Eb=this.AM;Q.Ec=this.Aw;Q.G0=this.BH;Q.G1=
this.Bi;this.Ah=Q;},F$:function(N,Bu){var A;var Aq=this.CC;var Q=(C.Hd.isPrototypeOf(
A=this.Ah)?A:null);var x1=Q.Bo[0];var y1=Q.Bo[1];var x2=Q.Bo[2];var y2=Q.Bo[3];var
A7=[N[2]-N[0],N[3]-N[1]];var Ac=x2-x1;var Ab=y2-y1;if(!Bu){var BB=[(A=Q.Z)[2]-A[
0],A[3]-A[1]];x1=x1-Q.Z[0];y1=y1-Q.Z[1];if(BB[0]!==A7[0]){var A4=((Aq&0x4)===0x4
);var A5=((Aq&0x8)===0x8);var B5=((Aq&0x1)===0x1);if(!A4&&(B5||!A5))x1=((x1*A7[0
])/BB[0])|0;if(!A5&&(B5||!A4)){x2=x2-Q.Z[0];x2=((x2*A7[0])/BB[0])|0;x2=x2-A7[0];
}else x2=x2-Q.Z[2];x1=x1+N[0];x2=x2+N[2];if(!B5){if(A4&&!A5)x2=x1+Ac;else if(!A4&&
A5)x1=x2-Ac;else{x1=x1+((((x2-x1)-Ac)/2)|0);x2=x1+Ac;}}}else{x2=x2-Q.Z[2];x1=x1+
N[0];x2=x2+N[2];}if(BB[1]!==A7[1]){var A6=((Aq&0x10)===0x10);var A3=((Aq&0x20)===
0x20);var B6=((Aq&0x2)===0x2);if(!A6&&(B6||!A3))y1=((y1*A7[1])/BB[1])|0;if(!A3&&(
B6||!A6)){y2=y2-Q.Z[1];y2=((y2*A7[1])/BB[1])|0;y2=y2-A7[1];}else y2=y2-Q.Z[3];y1=
y1+N[1];y2=y2+N[3];if(!B6){if(A6&&!A3)y2=y1+Ab;else if(!A6&&A3)y1=y2-Ab;else{y1=
y1+((((y2-y1)-Ab)/2)|0);y2=y1+Ab;}}}else{y2=y2-Q.Z[3];y1=y1+N[1];y2=y2+N[3];}}else{
switch(Bu){case 3:{x1=N[0];x2=x1+Ac;}break;case 4:{x2=N[2];x1=x2-Ac;}break;case 1:{
y1=N[1];y2=y1+Ab;}break;case 2:{y2=N[3];y1=y2-Ab;}break;default:;}if((Bu===3)||(
Bu===4)){var A6=((Aq&0x10)===0x10);var A3=((Aq&0x20)===0x20);var B6=((Aq&0x2)===
0x2);if(B6){y1=N[1];y2=N[3];}else if(A6&&!A3){y1=N[1];y2=y1+Ab;}else if(A3&&!A6){
y2=N[3];y1=y2-Ab;}else{y1=N[1]+((((N[3]-N[1])-Ab)/2)|0);y2=y1+Ab;}}if((Bu===1)||(
Bu===2)){var A4=((Aq&0x4)===0x4);var A5=((Aq&0x8)===0x8);var B5=((Aq&0x1)===0x1);
if(B5){x1=N[0];x2=N[2];}else if(A4&&!A5){x1=N[0];x2=x1+Ac;}else if(A5&&!A4){x2=N[
2];x1=x2-Ac;}else{x1=N[0]+((((N[2]-N[0])-Ac)/2)|0);x2=x1+Ac;}}}Q.isEmpty=(x1>=x2
)||(y1>=y2);Ac=(x2-x1)-1;Ab=(y2-y1)-1;var D6=Q.Bo[0];var D7=Q.Bo[1];var DC=(Q.Bo[
2]-D6)-1;var DB=(Q.Bo[3]-D7)-1;if(!DC)DC=1;if(!DB)DB=1;if(((this.F&0x100)===0x100
)){this.AM=[x1+((((Q.Eb[0]-D6)*Ac)/DC)|0),y1+((((Q.Eb[1]-D7)*Ab)/DB)|0)];this.Aw=[
x1+((((Q.Ec[0]-D6)*Ac)/DC)|0),y1+((((Q.Ec[1]-D7)*Ab)/DB)|0)];this.BH=[x1+((((Q.G0[
0]-D6)*Ac)/DC)|0),y1+((((Q.G0[1]-D7)*Ab)/DB)|0)];this.Bi=[x1+((((Q.G1[0]-D6)*Ac)
/DC)|0),y1+((((Q.G1[1]-D7)*Ab)/DB)|0)];}else{this.CW([x1+((((Q.Eb[0]-D6)*Ac)/DC)|
0),y1+((((Q.Eb[1]-D7)*Ab)/DB)|0)]);this.CX([x1+((((Q.Ec[0]-D6)*Ac)/DC)|0),y1+((((
Q.Ec[1]-D7)*Ab)/DB)|0)]);this.Gr([x1+((((Q.G0[0]-D6)*Ac)/DC)|0),y1+((((Q.G0[1]-D7
)*Ab)/DB)|0)]);this.Gs([x1+((((Q.G1[0]-D6)*Ac)/DC)|0),y1+((((Q.G1[1]-D7)*Ab)/DB)|
0)]);this.Ah=Q;}return[Ac+1,Ab+1];},He:function(aOffset,FK){if(FK){this.AM=B.tV(
this.AM,aOffset);this.Aw=B.tV(this.Aw,aOffset);this.BH=B.tV(this.BH,aOffset);this.
Bi=B.tV(this.Bi,aOffset);}else{this.CW(B.tV(this.AM,aOffset));this.CX(B.tV(this.
Aw,aOffset));this.Gr(B.tV(this.BH,aOffset));this.Gs(B.tV(this.Bi,aOffset));}},GetExtent:
function(){if(!!this.Ah&&this.Ah.isEmpty)return AF;var x1=this.AM[0];var y1=this.
AM[1];var x2=this.BH[0];var y2=this.BH[1];if((((this.Bi[0]!==x1)||(this.Aw[1]!==
y1))||(this.Aw[0]!==x2))||(this.Bi[1]!==y2)){if(this.Aw[0]<x1)x1=this.Aw[0];if(this.
BH[0]<x1)x1=this.BH[0];if(this.Bi[0]<x1)x1=this.Bi[0];if(this.Aw[1]<y1)y1=this.Aw[
1];if(this.BH[1]<y1)y1=this.BH[1];if(this.Bi[1]<y1)y1=this.Bi[1];if(this.AM[0]>x2
)x2=this.AM[0];if(this.Aw[0]>x2)x2=this.Aw[0];if(this.Bi[0]>x2)x2=this.Bi[0];if(
this.AM[1]>y2)y2=this.AM[1];if(this.Aw[1]>y2)y2=this.Aw[1];if(this.Bi[1]>y2)y2=this.
Bi[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;
}}return[x1,y1,x2+1,y2+1];},Gs:function(D){var A;if(B.tH(D,this.Bi))return;if(!!
this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Ah=null;this.Bi=D;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((!!this.G&&((this.
F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=
this.G.F|0x4000;B.lz([A=this.G,A.Bh],this);}},Gr:function(D){var A;if(B.tH(D,this.
BH))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Ah=
null;this.BH=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((
!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bh],this);}},CX:function(D){var
A;if(B.tH(D,this.Aw))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent(
));this.Ah=null;this.Aw=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bh],this);}},CW:function(
D){var A;if(B.tH(D,this.AM))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.
GetExtent());this.Ah=null;this.AM=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(
this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bh],this);
}},Ir:function(E9){var AA=B.tY(4,B.qK,null);var J=0;var AB=3;var I$=false;var Ja=
false;AA.Set(0,this.AM);AA.Set(1,this.Aw);AA.Set(2,this.BH);AA.Set(3,this.Bi);while(
J<4){var K_=AA.Get(J)[0];var H4=AA.Get(J)[1];var M8=AA.Get(AB)[0];var Js=AA.Get(
AB)[1];if(((H4>E9[1])!==(Js>E9[1]))||((H4<E9[1])!==(Js<E9[1]))){var Fn=((((M8-K_
)*(E9[1]-H4))/(Js-H4))|0)+K_;if(E9[0]>Fn)I$=!I$;if(E9[0]<Fn)Ja=!Ja;}AB=J;J=J+1;}
return I$||Ja;},Lk:function(){return((((this.AM[0]===this.Bi[0])&&(this.Aw[0]===
this.BH[0]))&&(this.AM[1]===this.Aw[1]))&&(this.BH[1]===this.Bi[1]))||((((this.AM[
0]===this.Aw[0])&&(this.BH[0]===this.Bi[0]))&&(this.AM[1]===this.Bi[1]))&&(this.
Aw[1]===this.BH[1]));},_Init:function(aArg){C.BI._Init.call(this,aArg);this.__proto__=
C.Gv;},_className:"Core::QuadView"};C.Bt={S:B.qL,FS:function(N,FL){var Q=B._NewObject(
C.Fu,0);Q.Bo=this.S;Q.Z=N;Q.ET=FL;this.Ah=Q;},F$:function(N,Bu){var A;var Aq=this.
CC;var Q=this.Ah;var x1=Q.Bo[0];var y1=Q.Bo[1];var x2=Q.Bo[2];var y2=Q.Bo[3];var
A7=[N[2]-N[0],N[3]-N[1]];var Ac=x2-x1;var Ab=y2-y1;if(!Bu){var BB=[(A=Q.Z)[2]-A[
0],A[3]-A[1]];x1=x1-Q.Z[0];y1=y1-Q.Z[1];if(BB[0]!==A7[0]){var A4=((Aq&0x4)===0x4
);var A5=((Aq&0x8)===0x8);var B5=((Aq&0x1)===0x1);if(!A4&&(B5||!A5))x1=((x1*A7[0
])/BB[0])|0;if(!A5&&(B5||!A4)){x2=x2-Q.Z[0];x2=((x2*A7[0])/BB[0])|0;x2=x2-A7[0];
}else x2=x2-Q.Z[2];x1=x1+N[0];x2=x2+N[2];if(!B5){if(A4&&!A5)x2=x1+Ac;else if(!A4&&
A5)x1=x2-Ac;else{x1=x1+((((x2-x1)-Ac)/2)|0);x2=x1+Ac;}}}else{x2=x2-Q.Z[2];x1=x1+
N[0];x2=x2+N[2];}if(BB[1]!==A7[1]){var A6=((Aq&0x10)===0x10);var A3=((Aq&0x20)===
0x20);var B6=((Aq&0x2)===0x2);if(!A6&&(B6||!A3))y1=((y1*A7[1])/BB[1])|0;if(!A3&&(
B6||!A6)){y2=y2-Q.Z[1];y2=((y2*A7[1])/BB[1])|0;y2=y2-A7[1];}else y2=y2-Q.Z[3];y1=
y1+N[1];y2=y2+N[3];if(!B6){if(A6&&!A3)y2=y1+Ab;else if(!A6&&A3)y1=y2-Ab;else{y1=
y1+((((y2-y1)-Ab)/2)|0);y2=y1+Ab;}}}else{y2=y2-Q.Z[3];y1=y1+N[1];y2=y2+N[3];}}else{
switch(Bu){case 3:{x1=N[0];x2=x1+Ac;}break;case 4:{x2=N[2];x1=x2-Ac;}break;case 1:{
y1=N[1];y2=y1+Ab;}break;case 2:{y2=N[3];y1=y2-Ab;}break;default:;}if((Bu===3)||(
Bu===4)){var A6=((Aq&0x10)===0x10);var A3=((Aq&0x20)===0x20);var B6=((Aq&0x2)===
0x2);if(B6){y1=N[1];y2=N[3];}else if(A6&&!A3){y1=N[1];y2=y1+Ab;}else if(A3&&!A6){
y2=N[3];y1=y2-Ab;}else{y1=N[1]+((((N[3]-N[1])-Ab)/2)|0);y2=y1+Ab;}}if((Bu===1)||(
Bu===2)){var A4=((Aq&0x4)===0x4);var A5=((Aq&0x8)===0x8);var B5=((Aq&0x1)===0x1);
if(B5){x1=N[0];x2=N[2];}else if(A4&&!A5){x1=N[0];x2=x1+Ac;}else if(A5&&!A4){x2=N[
2];x1=x2-Ac;}else{x1=N[0]+((((N[2]-N[0])-Ac)/2)|0);x2=x1+Ac;}}}Q.isEmpty=(x1>=x2
)||(y1>=y2);if(((this.F&0x100)===0x100))this.S=[x1,y1,x2,y2];else{this.Y([x1,y1,
x2,y2]);this.Ah=Q;}return[x2-x1,y2-y1];},He:function(aOffset,FK){if(FK)this.S=B.
tX(this.S,aOffset);else this.Y(B.tX(this.S,aOffset));},GetExtent:function(){return this.
S;},Y:function(D){var A;if(B.tI(D,this.S))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ai(this.S);this.Ah=null;this.S=D;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ai(this.S);if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000
)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bh],this);}},_Init:
function(aArg){C.BI._Init.call(this,aArg);this.__proto__=C.Bt;},_className:"Core::RectView"
};C.L={Ak:null,Al:null,HS:null,AP:null,CM:null,Fi:null,BV:null,CY:255,Bs:function(
aArg){this.EC();},CT:function(AS,aClip,aOffset,Ay,aBlend){var A;Ay=((Ay+1)*this.
CY)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.Mz(AS,aClip,B.tV(aOffset,this.S.
slice(0,2)),Ay,aBlend);},Fq:function(Ag,P,B$,FI,FM){var A;var M=this.Al;var Fa=null;
var AN=AF;var Ce=null;var Jd=!!this.CM&&(!!this.CM.Cb||!!this.CM.Ak);if(((A=B.it(
Ag,this.S))[0]>=A[2])||(A[1]>=A[3]))return null;Ag=B.tW(Ag,this.S.slice(0,2));while(
!!M){if(((M.F&0x400)===0x400)&&!Ce){Ce=M.R;while(!!Ce&&!((Ce.F&0x200)===0x200))Ce=
Ce.R;if(!!Ce)AN=B.it(Ag,Ce.GetExtent());else AN=AF;}if(Ce===M){Ce=null;AN=AF;}if((((((
M.F&0x8)===0x8)&&((M.F&0x10)===0x10))&&!((M.F&0x40000)===0x40000))&&!((M.F&0x20000
)===0x20000))&&(!((M.F&0x10000)===0x10000)||((this.AP.At===M)&&!Jd))){var Bo=M.GetExtent(
);var HL=FI;var E$=null;if(HL===M)HL=null;if(((M.F&0x400)===0x400)){if(!(((A=B.it(
Bo,AN))[0]>=A[2])||(A[1]>=A[3])))E$=M.Fq(AN,P,B$,HL,FM);}else if(!(((A=B.it(Bo,Ag
))[0]>=A[2])||(A[1]>=A[3]))||(FI===M))E$=M.Fq(Ag,P,B$,HL,FM);M=M.R;if(!!E$){if(!
Fa||((E$.Ga<Fa.Ga)&&(E$.Ga>=0)))Fa=E$;if(!E$.Ga)M=null;}}else M=M.R;}return Fa;}
,AC:function(D3,E8){var A;var MK=this.F;C.Bt.AC.call(this,D3,E8);var EM=this.F^MK;
if(!!this.BV&&((EM&0x40)===0x40)){if(((this.F&0x40)===0x40))this.BV.AC(0x40,0x0);
else this.BV.AC(0x0,0x40);}if(!!this.AP&&((EM&0x40)===0x40)){if(((this.F&0x40)===
0x40)&&((this.AP.At.F&0x14)===0x14))this.AP.At.AC(0x40,0x0);else this.AP.At.AC(0x0
,0x40);}if(!!EM){this.F=this.F|0x8000;B.lz([this,this.Bh],this);}},Y:function(D){
var A;if(B.tI(D,this.S))return;var ES=[(A=this.S)[2]-A[0],A[3]-A[1]];var Jf=[D[2
]-D[0],D[3]-D[1]];var FY=!B.tH(ES,Jf);C.Bt.Y.call(this,D);if((FY&&(ES[0]>0))&&(ES[
1]>0)){var Z=[].concat(Ax,ES);var M=this.Ak;while(!!M){if((!M.Ah&&(M.CC!==0x14))&&
!((M.F&0x400)===0x400))M.FS(Z,null);M=M.O;}}if(FY){this.F=this.F|0x5000;B.lz([this
,this.Bh],this);}},K3:function(Aj){var KQ=(C.KeyEvent.isPrototypeOf(Aj)?Aj:null);
var C2=this.HS;if(!KQ)return null;while(!!C2&&(!C2.AD||!C2.Br(KQ)))C2=C2.O;return C2;
},Mz:function(AS,aClip,aOffset,Ay,aBlend){var A;var M=this.Ak;var KF=AF;var K1=true;
this.Le(AS,aClip,aOffset,Ay,aBlend);while(!!M){if(((M.F&0x200)===0x200)){var K0=(
C.Hm.isPrototypeOf(M)?M:null);KF=B.it(aClip,B.tX(K0.S,aOffset));K1=((K0.F&0x1)===
0x1);}if(((M.F&0x1)===0x1)){if(((M.F&0x400)===0x400)){if(K1){var AN=B.it(B.tX(M.
GetExtent(),aOffset),KF);if(!((AN[0]>=AN[2])||(AN[1]>=AN[3])))M.CT(AS,AN,aOffset
,Ay,aBlend);}}else{var AN=B.it(B.tX(M.GetExtent(),aOffset),aClip);if(!((AN[0]>=AN[
2])||(AN[1]>=AN[3])))M.CT(AS,AN,aOffset,Ay,aBlend);}}M=M.O;}this.Lg(AS,aClip,aOffset
,Ay,aBlend);},MZ:function(){var A;var I8=((this.F&0x1000)===0x1000);var D$=[0,0,(
A=this.S)[2]-A[0],A[3]-A[1]];var DD=false;var FQ=AF;var I6=AF;var M=this.Al;var Ce=
null;while(!!M){if(((M.F&0x800)===0x800)){DD=true;M.F=M.F&~0x800;}if(DD&&((M.F&0x200
)===0x200))DD=false;M=M.R;}DD=false;M=this.Ak;if(I8){this.F=this.F&~0x1000;I8=!((
D$[0]>=D$[2])||(D$[1]>=D$[3]));}this.F=this.F|0x2000;while(!!M){if(((M.F&0x400)===
0x400)){if(!!M.Ah&&(M.Ah.ET!==Ce))M.Ah=null;if((!M.Ah&&DD)&&(M.CC!==0x14))M.FS(I6
,Ce);}if(!!M.Ah){if(I8&&!((M.F&0x400)===0x400))M.F$(D$,0);if(DD&&((M.F&0x400)===
0x400))M.F$(I6,0);}if(((M.F&0x200)===0x200)){DD=((M.F&0x1000)===0x1000);Ce=(C.Hm.
isPrototypeOf(M)?M:null);if(DD){M.F=M.F&~0x1000;FQ=Ce.S;I6=FQ;DD=!((FQ[0]>=FQ[2]
)||(FQ[1]>=FQ[3]));}if(DD)this.Ai(Ce.S);}M=M.O;}this.F=this.F&~0x2000;this.Ks([D$[
2]-D$[0],D$[3]-D$[1]]);},Bh:function(An){var A;var M6=((this.F&0x1000)===0x1000);
if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.MZ();}if(((this.F&0x8000
)===0x8000)||M6){this.F=this.F&~0x8000;this.IP(this.F);}},CV:function(D){var A;if(
!!D&&(D.G!==this))throw new Error(BC);if(!!D&&!((D.F&0x14)===0x14))D=null;if(!!D&&((
D.F&0x10000)===0x10000))D=null;if(D===this.BV)return;if(!!this.BV)this.BV.AC(0x0
,0x60);this.BV=D;if(!!D){if(((this.F&0x40)===0x40))D.AC(0x60,0x0);else D.AC(0x20
,0x0);}},Lo:function(){return false;},AV:function(D){if(D)this.AC(0x10,0x0);else
this.AC(0x0,0x10);},E4:function(D){var A;if(D>255)D=255;if(D<0)D=0;if(D===this.CY
)return;this.CY=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.S);},Ml:function(
M7){this.E4(M7);},Fx:function(){var A;return((this.F&0x1)===0x1);},Fy:function(D
){if(D)this.AC(0x1,0x0);else this.AC(0x0,0x1);},Lg:function(AS,aClip,aOffset,Ay,
aBlend){},Le:function(AS,aClip,aOffset,Ay,aBlend){},GetMinimalSize:function(){return Ax;
},Ip:function(Kz){var A;return(((this.F&0x10000)===0x10000)&&!!this.G)&&(!Kz||this.
G.Ip(true));},LN:function(Bb,Cn,D2,C_,C$,GH,C1,Dy,Cl,Cj,Ck){var A;if(!this.AP){this.
II(Bb,Cn,D2,C_,C$,null,null,Cl,Cj,Ck);return;}var ER=this.AP;var Bd=ER.O;if(((Bb.
F&0x10000)===0x10000)&&(this.AP.At!==Bb))throw new Error(BJ);var Dc=B._NewObject(
C.H9,0);var Cd=ER.Cd;var Cg=null;var Bp=null;if(!!Bd){Cg=Bd.Cg;Bp=Bd.Bp;}if(!!Bd&&
!!ER.Fg)Cg=ER.Fg;if(!!Bd&&!!C1)Bp=C1;if(!!GH)Cd=GH;if(!Cn)Cn=B._GetAutoObject(B.
uQ.DV);if(!D2)D2=Cn;if(!C$)C$=C_;if(!C_)C_=C$;Dc.Cd=D2;Dc.Bp=C_;Dc.Cg=C$;Dc.Fg=Dy;
Dc.At=Bb;Dc.O=this.AP.O;this.AP.O=null;this.AP=Dc;if(this.BV===Bb)this.CV(null);
ER.At.AC(0x0,0x10040);if(((this.F&0x40)===0x40)&&((Bb.F&0x4)===0x4))Bb.AC(0x10040
,0x0);else Bb.AC(0x10000,0x0);if(!!Bp){this.BU(Bd.At,Bp.Fo(),null,null,Ck);this.
BU(ER.At,Cd.DM(),null,null,true);this.BU(Dc.At,Cn.DN(),Cl,Cj,true);}else if(!!Cg
){this.BU(Bd.At,Cg.Fp(),null,null,Ck);this.BU(ER.At,Cd.DM(),null,null,true);this.
BU(Dc.At,Cn.DN(),Cl,Cj,true);}else if(!!Cd){this.BU(ER.At,Cd.DM(),null,null,Ck);
this.BU(Dc.At,Cn.DN(),Cl,Cj,true);}else this.BU(Dc.At,Cn.DN(),Cl,Cj,Ck);},Ld:function(
Bb,GH,C1,Dy,Cl,Cj,Ck){var A;if(!this.AP)return;if(!Bb)return;var A_=this.AP;var Bd=
this.AP.O;var FX=null;while((!!A_&&(A_.At!==Bb))&&!!A_.O){FX=A_;A_=Bd;Bd=A_.O;}if(
!A_||(A_.At!==Bb))throw new Error(C9);if(!FX){this.AP=Bd;A_.O=null;}else{FX.O=Bd;
A_.O=null;}A_.At.AC(0x0,0x10040);if(((((this.F&0x40)===0x40)&&!!Bd)&&!FX)&&((Bd.
At.F&0x4)===0x4))Bd.At.AC(0x40,0x0);var Cd=A_.Cd;var Cg=null;var Bp=null;if(!!Bd
)Cg=Bd.Cg;if(!!Bd&&!!A_.Fg)Cg=A_.Fg;if(!!Bd&&!!Dy)Cg=Dy;if(!!FX&&!!Bd)Bp=Bd.Bp;if((
!!FX&&!!Bd)&&!!C1)Bp=C1;if(!!GH)Cd=GH;if(!!Bp){this.BU(Bd.At,Bp.Fo(),null,null,Ck
);this.BU(A_.At,Cd.DM(),Cl,Cj,true);}else if(!!Cg){this.BU(Bd.At,Cg.Fp(),null,null
,Ck);this.BU(A_.At,Cd.DM(),Cl,Cj,true);}else this.BU(A_.At,Cd.DM(),Cl,Cj,Ck);},II:
function(Bb,Cn,D2,C_,C$,C1,Dy,Cl,Cj,Ck){var A;if(!Bb)return;if(!!this.AP&&(this.
AP.At===Bb)){this.LN(Bb,Cn,D2,C_,C$,null,C1,Dy,Cl,Cj,Ck);return;}if(((Bb.F&0x10000
)===0x10000))throw new Error(BJ);var A_=B._NewObject(C.H9,0);if(!!this.AP&&!this.
AP.Bp){if(!Dy)Dy=C1;if(!C1)C1=Dy;}var Bp=null;if(!!this.AP)Bp=this.AP.Bp;if(!!this.
AP&&!!C1)Bp=C1;if(!Cn)Cn=B._GetAutoObject(B.uQ.DV);if(!D2)D2=Cn;if(!C$)C$=C_;if(
!C_)C_=C$;A_.Cd=D2;A_.Bp=C_;A_.Cg=C$;A_.Fg=Dy;if(this.BV===Bb)this.CV(null);if(!
!this.AP)this.AP.At.AC(0x0,0x40);if(((this.F&0x40)===0x40)&&((Bb.F&0x4)===0x4))Bb.
AC(0x10040,0x0);else Bb.AC(0x10000,0x0);A_.At=Bb;A_.O=this.AP;this.AP=A_;if(!!Bp
){this.BU(this.AP.O.At,Bp.Fo(),null,null,Ck);this.BU(Bb,Cn.DN(),Cl,Cj,true);}else
this.BU(Bb,Cn.DN(),Cl,Cj,Ck);},DispatchEvent:function(Aj){var A;var M=this.BV;var
W=(C.L.isPrototypeOf(M)?M:null);var AK=null;var Jd=!!this.CM&&(!!this.CM.Cb||!!this.
CM.Ak);if(!!M&&((((M.F&0x10000)===0x10000)||((M.F&0x40000)===0x40000))||((M.F&0x20000
)===0x20000))){M=null;W=null;}if(!!this.AP&&!Jd)AK=this.AP.At.DispatchEvent(Aj);
if(!AK&&!!W)AK=W.DispatchEvent(Aj);else if(!AK&&!!M)AK=M.Br(Aj);if(!AK)AK=this.Br(
Aj);if(!AK)AK=this.K3(Aj);return AK;},BroadcastEventAtPosition:function(Aj,Ky,Cm
){var A;var M=this.Al;var AK=null;while(!!M&&!AK){if((!Cm||((A=Cm)&&((M.F&A)===A
)))&&B.qH(M.GetExtent(),Ky)){var W=(C.L.isPrototypeOf(M)?M:null);if(!!W)AK=W.BroadcastEventAtPosition(
Aj,B.tU(Ky,W.S.slice(0,2)),Cm);else AK=M.Br(Aj);}M=M.R;}if(!AK)AK=this.Br(Aj);return AK;
},BroadcastEvent:function(Aj,Cm){var A;var M=this.Al;var AK=null;while(!!M&&!AK){
if(!Cm||((A=Cm)&&((M.F&A)===A))){var W=(C.L.isPrototypeOf(M)?M:null);if(!!W)AK=W.
BroadcastEvent(Aj,Cm);else AK=M.Br(Aj);}M=M.R;}if(!AK)AK=this.Br(Aj);if(!AK)AK=this.
K3(Aj);return AK;},Ks:function(aSize){},IP:function(HB){},EC:function(){this.F=this.
F|0x8000;B.lz([this,this.Bh],this);},Ai:function(Ag){var A;var W=this;while(!!W&&
!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){if(!W.G&&(W!==this)){W.Ai(Ag);return;}if(!((W.
F&0x1)===0x1))return;Ag=B.it(B.tX(Ag,W.S.slice(0,2)),W.S);W=W.G;}},Jz:function(I
,Cm){var A;if(!I||(I.G!==this))return null;var EQ=I.O;var EV=I.R;var GW=0x10000;
if(((Cm&0x10000)===0x10000))GW=0x0;while(!!EQ||!!EV){if((!!EQ&&(!Cm||((A=Cm)&&((
EQ.F&A)===A))))&&(!GW||!((A=GW)&&((EQ.F&A)===A))))return EQ;if((!!EV&&(!Cm||((A=
Cm)&&((EV.F&A)===A))))&&(!GW||!((A=GW)&&((EV.F&A)===A))))return EV;if(!!EQ)EQ=EQ.
O;if(!!EV)EV=EV.R;}return null;},BU:function(Dw,Ap,Cl,Cj,Ck){var A;if(!Dw)return;
if(!Ap)throw new Error(DZ);if((!!Ap.L||!!Ap.G)||!!Ap.Cz)throw new Error(D0);if(!
!Dw.G&&(Dw.G!==this))throw new Error(GA);if(!this.CM)this.CM=B._NewObject(C.Kr,0
);Ap.G=this;Ap.L=Dw;Ap.HU=Cj;Ap.Ji=Cl;if(!!Dw.Fi)Dw.Fi.Cz.LH(Dw.Fi);Dw.Fi=Ap;Dw.
F=Dw.F|0x20000;if((Ck&&!!this.CM.Al)&&!this.CM.Al.Io())(B.uQ.G_.isPrototypeOf(A=
this.CM.Al)?A:null).Jt(Ap);else{var Cz=B._NewObject(B.uQ.G_,0);Cz.Jt(Ap);this.CM.
LL(Cz,false);}},Hr:function(I){var A;if(!I)throw new Error(Hz);if(I.G!==this)throw new
Error(GB);if(!I.O)return;var Bz=this.Al;var El=I.Cv;while(!!Bz&&(Bz.Cv>El))Bz=Bz.
R;if(((Bz===I)||!Bz)||(Bz.O===I))return;if(((I.F&0x401)===0x401)){if(!!I.R&&!!I.
Ah)I.R.F=I.R.F|0x800;I.F=I.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bh],this
);}if(((I.F&0x200)===0x200)){if(!!I.R)I.R.F=I.R.F|0x800;this.F=this.F|0x4000;B.lz([
this,this.Bh],this);}if(!!I.R)I.R.O=I.O;else this.Ak=I.O;I.O.R=I.R;I.R=Bz;I.O=Bz.
O;Bz.O=I;if(!!I.O)I.O.R=I;else this.Al=I;if(((I.F&0x1)===0x1))this.Ai(I.GetExtent(
));},LI:function(I,CG){var A;if(!I)throw new Error(Hz);if(I.G!==this)throw new Error(
GB);var Bz=I;var AW=I;var El=I.Cv;while(((CG>0)&&!!Bz.O)&&(Bz.O.Cv<=El)){Bz=Bz.O;
CG=CG-1;}while(((CG<0)&&!!AW.R)&&(AW.R.Cv>=El)){AW=AW.R;CG=CG+1;}if((Bz===I)&&(AW===
I))return;if(((I.F&0x401)===0x401)){if(!!I.R&&!!I.Ah)I.R.F=I.R.F|0x800;I.F=I.F|0x800;
this.F=this.F|0x4000;B.lz([this,this.Bh],this);}if(((I.F&0x200)===0x200)){if(!!I.
R)I.R.F=I.R.F|0x800;I.F=I.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bh],this);
}if(!!I.R)I.R.O=I.O;if(!!I.O)I.O.R=I.R;if(this.Ak===I)this.Ak=I.O;if(this.Al===I
)this.Al=I.R;if(Bz!==I){I.O=Bz.O;I.R=Bz;Bz.O=I;if(!!I.O)I.O.R=I;}if(AW!==I){I.O=
AW;I.R=AW.R;AW.R=I;if(!!I.R)I.R.O=I;}if(!I.O)this.Al=I;if(!I.R)this.Ak=I;if(((I.
F&0x1)===0x1))this.Ai(I.GetExtent());},E5:function(I){var A;if(!I)throw new Error(
IQ);if(I.G!==this)throw new Error(GB);if((((I.F&0x401)===0x401)&&!!I.R)&&!!I.Ah){
I.R.F=I.R.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bh],this);}if(((I.F&0x200
)===0x200)){if(!!I.R)I.R.F=I.R.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bh],
this);}I.Ah=null;if(this.BV===I)this.CV(this.Jz(I,0x14));if(!!I.R)I.R.O=I.O;if(!
!I.O)I.O.R=I.R;if(this.Ak===I)this.Ak=I.O;if(this.Al===I)this.Al=I.R;I.G=null;I.
O=null;I.R=null;if(((I.F&0x1)===0x1))this.Ai(I.GetExtent());},Af:function(I,CG){
var A;if(!I)throw new Error(IR);if(!!I.G)throw new Error(IS);var AW=null;var El=
I.Cv;if(((CG<0)&&!!this.Al)&&(this.Al.Cv>=El)){AW=this.Al;CG=CG+1;}while((((CG<0
)&&!!AW)&&!!AW.R)&&(AW.R.Cv>=El)){AW=AW.R;CG=CG+1;}if((!AW&&!!this.Al)&&(this.Al.
Cv>El))AW=this.Al;while((!!AW&&!!AW.R)&&(AW.R.Cv>El))AW=AW.R;if(!AW){I.G=this;I.
R=this.Al;if(!!this.Al)this.Al.O=I;if(!this.Ak)this.Ak=I;this.Al=I;}else{I.G=this;
I.R=AW.R;I.O=AW;AW.R=I;if(!!I.R)I.R.O=I;else this.Ak=I;}if(((I.F&0x1)===0x1))this.
Ai(I.GetExtent());if(((!this.BV&&((I.F&0x4)===0x4))&&((I.F&0x10)===0x10))&&!((I.
F&0x10000)===0x10000))this.CV(I);if(((I.F&0x401)===0x401)){I.F=I.F|0x800;this.F=
this.F|0x4000;B.lz([this,this.Bh],this);}if(((I.F&0x200)===0x200)){I.F=I.F|0x800;
this.F=this.F|0x4000;B.lz([this,this.Bh],this);}},Lq:function(){return this.CY;}
,_Init:function(aArg){C.Bt._Init.call(this,aArg);this.__proto__=C.L;this.F=0x1F;
this.Bs(aArg);},_Mark:function(E){var A;C.Bt._Mark.call(this,E);if((A=this.Ak)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Al)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.HS)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AP)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.CM)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Fi)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.BV)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Core::Group"};C.Root={Cf:null,Az:B.tY(10,null,null),FN:null,D5:
null,G4:0,AO:0,Bv:B.tY(10,0,null),HK:B.tY(10,B.qL,null),CK:B.tY(10,0,null),DA:B.
tY(10,B.qK,null),FP:B.tY(10,0,null),D4:B.tY(10,B.qK,null),CJ:B.tY(10,B.qK,null),
Cc:B.tY(10,B.qK,null),Da:B.tY(10,B.qK,null),Ae:0,HO:0,HN:0,BE:B.tY(4,0,null),Bg:
B.tY(4,B.qL,null),Be:0,GS:0,FT:0,I9:true,JB:function(){return this;},CT:function(
AS,aClip,aOffset,Ay,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.jO;if(
!fullScreenUpdate)AS.Ig(aClip,B.tX(B.tX(aClip,aOffset),this.S.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);C.L.CT.call(this,AS,aClip,aOffset,Ay,aBlend
);},AC:function(D3,E8){var A;C.L.AC.call(this,D3,E8);if(!this.G&&(((D3&0x1)===0x1
)||((E8&0x1)===0x1)))this.Ai([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
D3&0x2)===0x2)||((E8&0x2)===0x2)))this.Ai([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},
CV:function(D){if((D!==null)||!D)C.L.CV.call(this,D);},E4:function(D){var A;var ML=
this.CY;C.L.E4.call(this,D);if(((ML!==this.CY)&&!this.G)&&((this.F&0x1)===0x1))this.
Ai([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},Ip:function(Kz){return true;},DispatchEvent:
function(Aj){if(!!Aj){Aj.Gl=!!this.AO;if(!!this.AO)Aj.AR=this.AO;}var AK;AK=C.L.
DispatchEvent.call(this,Aj);this.AO=0;return AK;},BroadcastEvent:function(Aj,Cm){
if(!!Aj){Aj.Gl=!!this.AO;if(!!this.AO)Aj.AR=this.AO;}var AK=C.L.BroadcastEvent.call(
this,Aj,Cm);this.AO=0;return AK;},Ai:function(Ag){var A;if(this.G4>0)throw new Error(
IT);var fullScreenUpdate=false;fullScreenUpdate=B.jO;if(fullScreenUpdate)Ag=[0,0
,(A=this.S)[2]-A[0],A[3]-A[1]];if(!!this.G){C.L.Ai.call(this,Ag);return;}Ag=B.it(
B.tX(Ag,this.S.slice(0,2)),this.S);if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var J;
for(J=0;J<this.Be;J=J+1)if(!(((A=B.it(this.Bg.Get(J),Ag))[0]>=A[2])||(A[1]>=A[3]
))){this.Bg.Set(J,B.q5(this.Bg.Get(J),Ag));this.BE.Set(J,B.tr(this.Bg.Get(J)));return;
}if(this.Be<3){this.Bg.Set(this.Be,Ag);this.BE.Set(this.Be,B.tr(Ag));this.Be=this.
Be+1;return;}var AB;var B3;var GR=0;var GT=0;var KA=2147483647;this.Bg.Set(this.
Be,Ag);this.BE.Set(this.Be,B.tr(Ag));for(AB=0;AB<=this.Be;AB=AB+1)for(B3=AB+1;B3<=
this.Be;B3=B3+1){var H2=B.tr(B.q5(this.Bg.Get(AB),this.Bg.Get(B3)));var K2=((H2<<
8)/(this.BE.Get(AB)+this.BE.Get(B3)))|0;if(K2<KA){KA=K2;GR=AB;GT=B3;}}this.Bg.Set(
GR,B.q5(this.Bg.Get(GR),this.Bg.Get(GT)));this.BE.Set(GR,B.tr(this.Bg.Get(GR)));
if(GT!==this.Be){this.Bg.Set(GT,this.Bg.Get(this.Be));this.BE.Set(GT,this.BE.Get(
this.Be));}},Mx:function(){var Bw=B._NewObject(C.G9,0);Bw.Gl=!!this.AO;if(!!this.
AO)Bw.AR=this.AO;return Bw;},E_:function(){var Bw=B._NewObject(C.G8,0);Bw.Gl=!!this.
AO;if(!!this.AO)Bw.AR=this.AO;return Bw;},FO:function(){var Bw=B._NewObject(C.H7
,0);Bw.Gl=!!this.AO;if(!!this.AO)Bw.AR=this.AO;return Bw;},My:function(An){var J;
var Fa=false;for(J=0;J<10;J=J+1)if(!!this.Az.Get(J)){var U=this.Cc.Get(J);var W=
this.Az.Get(J).G;while(!!W&&(W!==this)){U=B.tU(U,W.S.slice(0,2));W=W.G;}if(!W&&(
this.Az.Get(J)!==this)){var tmp=this.Az.Get(J);this.Ae=J;this.Az.Set(J,null);tmp.
Br(this.E_().InitializeUp(J,this.D4.Get(J),this.DA.Get(J),this.CK.Get(J),this.Bv.
Get(J)+1,this.CJ.Get(J),false,this.Cc.Get(J),this.Da.Get(J)));this.BroadcastEvent(
this.FO().InitializeUp(J,this.Bv.Get(J)+1,false,tmp,this.Cc.Get(J)),0x18);}else{
this.CK.Set(J,(this.D5.AR-this.FP.Get(J))|0);if(this.CK.Get(J)<10)this.CK.Set(J,
10);this.Ae=J;this.Az.Get(J).Br(this.E_().InitializeHold(J,U,this.DA.Get(J),this.
CK.Get(J),this.Bv.Get(J)+1,this.CJ.Get(J),this.Cc.Get(J),this.Da.Get(J)));Fa=true;
}}if(!Fa)this.D5.AV(false);},GetFPS:function(){var ticksCount=0;var KL=0;ticksCount=((
new Date).getTime()-B.qG)|0;if(!!this.HO&&(ticksCount>this.HO))KL=((this.HN*1000
)/((ticksCount-this.HO)|0))|0;this.HN=0;this.HO=ticksCount;return KL;},Update:function(
){var A;if(!this.FN)this.FN=B._NewObject(B.Graphics.Canvas,0);this.FN.JZ([(A=this.
S)[2]-A[0],A[3]-A[1]]);this.FN.Update();return this.UpdateGE20(this.FN);},UpdateGE20:
function(AS){if(!this.BeginUpdate())return AF;var DK=this.UpdateCanvas(AS,Ax);this.
EndUpdate();return DK;},EndUpdate:function(){if(this.Be>0){this.HN=this.HN+1;this.
Be=0;}},UpdateCanvas:function(AS,aOffset){var A;var DK=AF;var Ms=[].concat(aOffset
,B.tV(AS.FrameSize,aOffset));var J;var AB=this.Be;this.G4=this.G4+1;for(J=0;(J<AB
)&&(J<4);J=J+1)if(this.BE.Get(J)>0){this.CT(AS,B.tW(this.Bg.Get(J),aOffset),[-aOffset[
0],-aOffset[1]],255,true);DK=B.q5(DK,B.it(Ms,this.Bg.Get(J)));}else AB=AB+1;this.
G4=this.G4-1;if(!((DK[0]>=DK[2])||(DK[1]>=DK[3])))return B.tW(DK,aOffset);else return DK;
},GetUpdateRegion:function(HA){var J;var AB=this.Be;if(HA<0)return AF;for(J=0;(J<
AB)&&(J<4);J=J+1)if(!this.BE.Get(J)){AB=AB+1;HA=HA+1;}else if(J===HA)return this.
Bg.Get(J);return AF;},BeginUpdate:function(){var J;var AB;var B3;for(AB=0;AB<(this.
Be-1);AB=AB+1)if(this.BE.Get(AB)>0)for(B3=AB+1;B3<this.Be;B3=B3+1)if(this.BE.Get(
B3)>0){var H2=B.tr(B.q5(this.Bg.Get(AB),this.Bg.Get(B3)));if(((H2-this.BE.Get(AB
))-this.BE.Get(B3))<0){this.Bg.Set(AB,B.q5(this.Bg.Get(AB),this.Bg.Get(B3)));this.
BE.Set(AB,H2);this.BE.Set(B3,0);}}for(J=this.Be-1;J>=0;J=J-1)if(!this.BE.Get(J))
this.Be=this.Be-1;return this.Be;},DoesNeedUpdate:function(){if(this.Be>0)return true;
return false;},Initialize:function(aSize){this.Y([].concat(Ax,aSize));if(this.I9
)this.F=this.F|0x60;else this.F=this.F|0x20;this.Ai(this.S);return this;},SetRootFocus:
function(IZ){if(IZ===this.I9)return false;this.I9=IZ;if(!IZ)this.AC(0x0,0x40);else
this.AC(0x40,0x0);return true;},SetUserInputTimestamp:function(Mn){this.AO=Mn;},
DriveKeyboardHitting:function(A8,GD,CZ){var A;var Jp=!!this.Cf;if(!!this.Cf&&((!
CZ||(this.GS!==A8))||(this.FT!==GD))){var Bw=null;var M=(C.BI.isPrototypeOf(A=this.
Cf)?A:null);var C2=(C.Gm.isPrototypeOf(A=this.Cf)?A:null);if(!!this.GS)Bw=B._NewObject(
C.KeyEvent,0).Initialize(this.GS,false);if(this.FT!==0x00)Bw=B._NewObject(C.KeyEvent
,0).Initialize2(this.FT,false);if(!!C2)C2.Br(Bw);else if(!!M)M.Br(Bw);this.GS=0;
this.FT=0x00;this.Cf=null;}if(!!this.Cf){var Bw=null;var M=(C.BI.isPrototypeOf(A=
this.Cf)?A:null);var C2=(C.Gm.isPrototypeOf(A=this.Cf)?A:null);if(!!A8)Bw=B._NewObject(
C.KeyEvent,0).Initialize(A8,true);if(this.FT!==0x00)Bw=B._NewObject(C.KeyEvent,0
).Initialize2(GD,true);if(!!C2)C2.Br(Bw);else if(!!M)M.Br(Bw);}if(!this.Cf&&CZ){
if(!!A8)this.Cf=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(A8,true
));if(GD!==0x00)this.Cf=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
GD,true));if(!(C.Gm.isPrototypeOf(A=this.Cf)?A:null)&&!(C.BI.isPrototypeOf(A=this.
Cf)?A:null))this.Cf=null;this.GS=A8;this.FT=GD;Jp=Jp||!!this.Cf;}this.AO=0;return Jp;
},DriveCursorMovement:function(Bm){return this.DriveMultiTouchMovement(this.Ae,Bm
);},DriveMultiTouchMovement:function(P,Bm){if((P<0)||(P>9)){this.AO=0;return false;
}var Cr=B.tU(Bm,this.Cc.Get(P));this.Cc.Set(P,Bm);if(!this.Az.Get(P)||B.tH(Cr,Ax
)){this.AO=0;return false;}var U=Bm;var W=this.Az.Get(P).G;while(!!W&&(W!==this)
){U=B.tU(U,W.S.slice(0,2));W=W.G;}if(!W&&(this.Az.Get(P)!==this)){var tmp=this.Az.
Get(P);this.Ae=P;this.Az.Set(P,null);tmp.Br(this.E_().InitializeUp(P,this.D4.Get(
P),this.DA.Get(P),this.CK.Get(P),this.Bv.Get(P)+1,this.CJ.Get(P),false,this.Cc.Get(
P),this.Da.Get(P)));this.BroadcastEvent(this.FO().InitializeUp(P,this.Bv.Get(P)+
1,false,tmp,Bm),0x18);}else{this.D4.Set(P,U);this.Ae=P;this.Az.Get(P).Br(this.Mx(
).Initialize(P,U,this.DA.Get(P),Cr,this.CK.Get(P),this.Bv.Get(P)+1,this.CJ.Get(P
),Bm,this.Da.Get(P)));}this.AO=0;return true;},DriveCursorHitting:function(CZ,P,
Bm){return this.DriveMultiTouchHitting(CZ,P,Bm);},DriveMultiTouchHitting:function(
CZ,P,Bm){if((P<0)||(P>9)){this.AO=0;return false;}var ticksCount=this.AO;if(!ticksCount
)ticksCount=((new Date).getTime()-B.qG)|0;var M4=this.AO;this.DriveMultiTouchMovement(
P,Bm);Bm=this.Cc.Get(P);this.AO=M4;if(CZ)this.Da.Set(P,Bm);if(CZ&&!this.Az.Get(P
)){var CN;var U=Bm;if(B.qH(this.HK.Get(P),Bm)&&((ticksCount-this.FP.Get(P))<=250
))this.Bv.Set(P,this.Bv.Get(P)+1);else this.Bv.Set(P,0);this.HK.Set(P,B.tX(GC,Bm
));this.FP.Set(P,ticksCount);CN=this.Fq(B.tX(GC,Bm),P,this.Bv.Get(P)+1,null,0x0);
if(!!CN){this.BroadcastEvent(this.FO().InitializeDown(P,this.Bv.Get(P)+1,false,CN.
BI,Bm),0x18);this.Az.Set(P,CN.BI);this.CJ.Set(P,CN.DT);}else{this.Az.Set(P,null);
this.CJ.Set(P,Ax);this.AO=0;return false;}var W=CN.BI.G;while(!!W&&(W!==this)){U=
B.tU(U,W.S.slice(0,2));W=W.G;}this.DA.Set(P,U);this.D4.Set(P,U);this.CK.Set(P,0);
this.D5.AV(true);this.Ae=P;this.Az.Get(P).Br(this.E_().InitializeDown(P,U,this.Bv.
Get(P)+1,this.CJ.Get(P),false,Bm));this.AO=0;return true;}if(!CZ&&!!this.Az.Get(
P)){var U=Bm;var W=this.Az.Get(P).G;while(!!W&&(W!==this)){U=B.tU(U,W.S.slice(0,
2));W=W.G;}if(!W)U=this.D4.Get(P);this.Ae=P;var tmp=this.Az.Get(P);this.Az.Set(P
,null);tmp.Br(this.E_().InitializeUp(P,U,this.DA.Get(P),this.CK.Get(P),this.Bv.Get(
P)+1,this.CJ.Get(P),false,Bm,this.Da.Get(P)));this.BroadcastEvent(this.FO().InitializeUp(
P,this.Bv.Get(P)+1,false,tmp,Bm),0x18);this.AO=0;return true;}this.AO=0;return false;
},LJ:function(Dx,Kx,FM){if(Dx===this)Dx=null;if(!this.Az.Get(this.Ae))return;var
CN;CN=this.Fq(B.tX(GC,this.Cc.Get(this.Ae)),this.Ae,1,Dx,FM);if(!!CN&&(this.Az.Get(
this.Ae)!==CN.BI))this.Jx(CN.BI,CN.DT);if(!CN&&(this.Az.Get(this.Ae)!==Kx))this.
Jx(Kx,Ax);},Jx:function(Dx,CF){if(!this.Az.Get(this.Ae)||(this.Az.Get(this.Ae)===
Dx))return;var tmp=this.Az.Get(this.Ae);this.Az.Set(this.Ae,null);tmp.Br(this.E_(
).InitializeUp(this.Ae,this.D4.Get(this.Ae),this.DA.Get(this.Ae),this.CK.Get(this.
Ae),this.Bv.Get(this.Ae)+1,this.CJ.Get(this.Ae),true,this.Cc.Get(this.Ae),this.Da.
Get(this.Ae)));this.BroadcastEvent(this.FO().InitializeUp(this.Ae,this.Bv.Get(this.
Ae)+1,true,tmp,this.Cc.Get(this.Ae)),0x18);var U=this.Cc.Get(this.Ae);var W=null;
if(!!Dx)W=Dx.G;while(!!W&&(W!==this)){U=B.tU(U,W.S.slice(0,2));W=W.G;}if(!W&&(Dx
!==this)){this.Az.Set(this.Ae,null);return;}this.BroadcastEvent(this.FO().InitializeDown(
this.Ae,this.Bv.Get(this.Ae)+1,true,Dx,this.Cc.Get(this.Ae)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-B.qG)|0;this.Az.Set(this.Ae,Dx);this.CJ.Set(this.
Ae,CF);this.DA.Set(this.Ae,U);this.D4.Set(this.Ae,U);this.Bv.Set(this.Ae,0);this.
CK.Set(this.Ae,0);this.FP.Set(this.Ae,ticksCount);this.Da.Set(this.Ae,this.Cc.Get(
this.Ae));this.Az.Get(this.Ae).Br(this.E_().InitializeDown(this.Ae,U,this.Bv.Get(
this.Ae)+1,this.CJ.Get(this.Ae),true,this.Da.Get(this.Ae)));},_Init:function(aArg
){C.L._Init.call(this,aArg);C.Timer._Init.call(this.D5={T:this},0);(this.Az=[]).
__proto__=C.Root.Az;(this.Bv=[]).__proto__=C.Root.Bv;(this.HK=[]).__proto__=C.Root.
HK;(this.CK=[]).__proto__=C.Root.CK;(this.DA=[]).__proto__=C.Root.DA;(this.FP=[]
).__proto__=C.Root.FP;(this.D4=[]).__proto__=C.Root.D4;(this.CJ=[]).__proto__=C.
Root.CJ;(this.Cc=[]).__proto__=C.Root.Cc;(this.Da=[]).__proto__=C.Root.Da;(this.
BE=[]).__proto__=C.Root.BE;(this.Bg=[]).__proto__=C.Root.Bg;this.__proto__=C.Root;
this.F=0x7F;this.D5.Gq(50);this.D5.FA=[this,this.My];},_Done:function(){this.__proto__=
C.L;this.D5._Done();C.L._Done.call(this);},_ReInit:function(){C.L._ReInit.call(this
);this.D5._ReInit();},_Mark:function(E){var A;C.L._Mark.call(this,E);if((A=this.
Cf)&&(A._cycle!=E))A._Mark(A._cycle=E);B.tQ(this.Az,E);if((A=this.FN)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.D5)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Core::Root"};C.Event={AR:0,Gl:false,Bs:function(aArg){this.AR=this.Gh();},Gh:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.qG)|0;return ticksCount;},
_Init:function(aArg){this.__proto__=C.Event;this.Bs(aArg);B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={A1:0,Ao:0,Down:false,Initialize2:function(A8,CZ){this.
A1=0;this.Ao=A8;this.Down=CZ;if((A8>=0x30)&&(A8<=0x39))this.A1=(10+A8)-48;if((A8>=
0x41)&&(A8<=0x5A))this.A1=(105+A8)-65;if((A8>=0x61)&&(A8<=0x7A))this.A1=(105+A8)-
97;if(A8===0x20)this.A1=131;if(!this.A1)switch(A8){case 0x2B:this.A1=132;break;case
0x2D:this.A1=133;break;case 0x2A:this.A1=134;break;case 0x2F:this.A1=135;break;case
0x3D:this.A1=136;break;case 0x2E:this.A1=137;break;case 0x2C:this.A1=138;break;case
0x3A:this.A1=139;break;case 0x3B:this.A1=140;break;default:;}return this;},Initialize:
function(A8,CZ){this.A1=A8;this.Down=CZ;this.Ao=0x00;var I4=A8-10;var I3=A8-105;
if((I4>=0)&&(I4<=9))this.Ao=(48+I4)&0xFFFF;if((I3>=0)&&(I3<=25))this.Ao=(65+I3)&
0xFFFF;if(A8===131)this.Ao=0x20;if(this.Ao===0x00)switch(A8){case 132:this.Ao=0x2B;
break;case 133:this.Ao=0x2D;break;case 134:this.Ao=0x2A;break;case 135:this.Ao=0x2F;
break;case 136:this.Ao=0x3D;break;case 137:this.Ao=0x2E;break;case 138:this.Ao=0x2C;
break;case 139:this.Ao=0x3A;break;case 140:this.Ao=0x3B;break;default:;}return this;
},Lm:function(Kw){switch(Kw){case 141:return((this.Ao>=0x41)&&(this.Ao<=0x5A))||((
this.Ao>=0x61)&&(this.Ao<=0x7A));case 142:return(((this.Ao>=0x41)&&(this.Ao<=0x5A
))||((this.Ao>=0x61)&&(this.Ao<=0x7A)))||((this.Ao>=0x30)&&(this.Ao<=0x39));case
143:return(this.Ao>=0x30)&&(this.Ao<=0x39);case 144:return(((this.Ao>=0x41)&&(this.
Ao<=0x46))||((this.Ao>=0x61)&&(this.Ao<=0x66)))||((this.Ao>=0x30)&&(this.Ao<=0x39
));case 145:return this.Ao!==0x00;case 146:return(this.Ao===0x00)&&!!this.A1;case
147:return(((this.A1===6)||(this.A1===7))||(this.A1===4))||(this.A1===5);case 148:
return(this.Ao!==0x00)||!!this.A1;default:;}return Kw===this.A1;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.H7={IM:null,EA:B.qK,CE:0,BF:0,Down:false,C4:false,InitializeUp:function(P,B$
,E7,I1,C0){this.Down=false;this.BF=P;this.CE=B$;this.EA=C0;this.IM=I1;this.C4=E7;
return this;},InitializeDown:function(P,B$,E7,I1,C0){this.Down=true;this.BF=P;this.
CE=B$;this.EA=C0;this.IM=I1;this.C4=E7;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.H7;},_Mark:function(E){var A;C.Event._Mark.
call(this,E);if((A=this.IM)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};C.G8={Gj:B.qK,EA:B.qK,CE:0,BW:0,Dn:B.qK,CR:B.qK,BF:0,Down:false,C4:false,InitializeHold:
function(P,EJ,GF,GG,B$,CF,C0,GE){this.Down=true;this.BF=P;this.CR=B.tV(EJ,CF);this.
Dn=B.tV(GF,CF);this.BW=GG;this.CE=B$;this.EA=C0;this.Gj=GE;return this;},InitializeUp:
function(P,EJ,GF,GG,B$,CF,E7,C0,GE){this.Down=false;this.BF=P;this.CR=B.tV(EJ,CF
);this.Dn=B.tV(GF,CF);this.BW=GG;this.CE=B$;this.C4=E7;this.EA=C0;this.Gj=GE;return this;
},InitializeDown:function(P,EJ,B$,CF,E7,C0){this.Down=true;this.BF=P;this.CR=B.tV(
EJ,CF);this.Dn=B.tV(EJ,CF);this.BW=0;this.CE=B$;this.C4=E7;this.EA=C0;this.Gj=C0;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.G8;},_className:"Core::CursorEvent"};C.G9={Gj:B.qK,EA:B.qK,CE:0,BW:0,DT:B.qK,Dn:
B.qK,CR:B.qK,BF:0,Initialize:function(P,EJ,GF,aOffset,GG,Mm,CF,C0,GE){this.BF=P;
this.CR=B.tV(EJ,CF);this.Dn=B.tV(GF,CF);this.DT=aOffset;this.BW=GG;this.CE=Mm;this.
EA=C0;this.Gj=GE;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg
);this.__proto__=C.G9;},_className:"Core::DragEvent"};C.Hm={CT:function(AS,aClip
,aOffset,Ay,aBlend){},Y:function(D){var A;if(B.tI(D,this.S))return;var ES=[(A=this.
S)[2]-A[0],A[3]-A[1]];var Jf=[D[2]-D[0],D[3]-D[1]];var FY=!B.tH(ES,Jf);var Cr=B.
tU(D.slice(0,2),this.S.slice(0,2));if(!B.tH(Cr,Ax)&&!FY){var M=this.O;while(!!M&&
!((M.F&0x200)===0x200)){if(((M.F&0x400)===0x400)){var tmp=((M.F&0x100)===0x100);
M.He(Cr,tmp);}M=M.O;}}if((FY&&(ES[0]>0))&&(ES[1]>0)){var Z=this.S;var M=this.O;while(
!!M&&!((M.F&0x200)===0x200)){if(((M.F&0x400)===0x400)){if(!!M.Ah&&(M.Ah.ET!==this
))M.Ah=null;if(!M.Ah&&(M.CC!==0x14))M.FS(Z,this);}M=M.O;}}C.Bt.Y.call(this,D);if(
!!this.G&&FY){this.F=this.F|0x1000;if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.
G.F|0x4000;B.lz([A=this.G,A.Bh],this);}}},_Init:function(aArg){C.Bt._Init.call(this
,aArg);this.__proto__=C.Hm;this.F=0x203;},_className:"Core::Outline"};C.AE={IC:null
,Do:null,E3:null,Ci:null,AT:0,BF:0,AR:0,CE:0,BW:0,DT:B.qK,Dn:B.qK,CR:B.qK,LK:8,JI:
1,Down:false,EB:false,C4:false,CT:function(AS,aClip,aOffset,Ay,aBlend){},Br:function(
Aj){var A;var AH=(C.G8.isPrototypeOf(Aj)?Aj:null);var CL=(C.G9.isPrototypeOf(Aj)?
Aj:null);var HP=this.EB;var HV;var FR;var K9;var EW;var KI;if(!AH&&!CL)return null;
HV=(!!AH&&AH.Down)&&!AH.BW;FR=(!!AH&&AH.Down)&&(AH.BW>0);K9=(!!AH&&AH.Down)&&(AH.
BW>50);EW=!!AH&&!AH.Down;KI=!!CL;if(HV){var Jh=0;var GP;this.AT=this.AT|(1<<AH.BF
);for(GP=this.AT&4095;GP>0;GP=GP>>1)if(!!(GP&1))Jh=Jh+1;if(Jh===1)this.AT=(this.
AT|16777216)|(4096<<AH.BF);}if(EW)this.AT=(this.AT&~(1<<AH.BF))|33554432;if(K9&&(
this.AT<16777216))this.AT=this.AT|67108864;if(EW&&AH.C4)this.AT=this.AT|67108864;
if(EW&&!(this.AT&16777215))this.AT=0;if(FR&&(this.AT>=67108864))this.JB().LJ(null
,null,0x0);if((FR&&!!(this.AT&16777216))&&!!(this.AT&33554432)){FR=false;EW=true;
}if(!!AH&&!(this.AT&(4096<<AH.BF)))return this;if(!!CL&&!(this.AT&(4096<<CL.BF))
)return this;if(EW&&!(this.AT&16777216))return this;if(((HV||KI)||FR)&&((this.AT<
16777216)||(this.AT>=33554432)))return this;if(EW)this.AT=this.AT&3758100479;if(
EW&&!(this.AT&16777215))this.AT=0;if(!!AH){this.Down=HV||FR;this.EB=this.Ir(AH.CR
);this.Dn=AH.Dn;this.CR=AH.CR;this.DT=Ax;this.BW=AH.BW;this.CE=AH.CE;this.C4=AH.
C4;this.BF=AH.BF;this.AR=AH.AR;if(AH.Down&&!AH.BW)HP=false;}if(!!CL){this.Down=true;
this.EB=this.Ir(CL.CR);this.Dn=CL.Dn;this.CR=CL.CR;this.DT=CL.DT;this.BW=CL.BW;this.
CE=CL.CE;this.BF=CL.BF;this.C4=false;this.AR=CL.AR;}if((!!AH&&this.Down)&&!this.
BW)(A=this.Ci)?A[1].call(A[0],this):null;if((this.Down&&this.EB)&&!HP)(A=this.Do
)?A[1].call(A[0],this):null;if(((this.Down&&!this.EB)&&HP)||((!this.Down&&this.EB
)&&HP))(A=this.IC)?A[1].call(A[0],this):null;if(!!AH&&!this.Down)(A=this.E3)?A[1
].call(A[0],this):null;return this;},Fq:function(Ag,P,B$,FI,FM){var A;if(!!FI&&(
FI!==this))return null;if((B$<1)||(B$>this.JI))return null;if(this.AT>=33554432)
return null;if((this.AT>=16777216)&&!(this.AT&(4096<<P)))return null;if(this.Lk(
)){var Bx=B.it(Ag,this.GetExtent());if(!((Bx[0]>=Bx[2])||(Bx[1]>=Bx[3]))){var EL=
B.ts(Ag);var Cr=Ax;if(EL[0]<Bx[0])Cr=[Bx[0]-EL[0],Cr[1]];if(EL[0]>=Bx[2])Cr=[(Bx[
2]-EL[0])-1,Cr[1]];if(EL[1]<Bx[1])Cr=[Cr[0],Bx[1]-EL[1]];if(EL[1]>=Bx[3])Cr=[Cr[
0],(Bx[3]-EL[1])-1];return B._NewObject(C.H8,0).Initialize(this,Cr);}}else{var AA=
B.tY(9,B.qK,null);var J;AA.Set(0,B.ts(Ag));AA.Set(1,AA.Get(0));AA.Set(2,AA.Get(0
));AA.Set(3,AA.Get(0));AA.Set(4,AA.Get(0));AA.Set(1,[Ag[0],AA.Get(1)[1]]);AA.Set(
2,[AA.Get(2)[0],Ag[1]]);AA.Set(3,[Ag[2],AA.Get(3)[1]]);AA.Set(4,[AA.Get(4)[0],Ag[
3]]);AA.Set(5,Ag.slice(0,2));AA.Set(6,[Ag[2],Ag[1]]);AA.Set(7,[Ag[0],Ag[3]]);AA.
Set(8,Ag.slice(2,4));for(J=0;J<9;J=J+1)if(this.Ir(AA.Get(J)))return B._NewObject(
C.H8,0).Initialize(this,B.tU(AA.Get(J),AA.Get(0)));}return null;},LA:function(D){
if(D<1)D=1;this.LK=D;},Lz:function(D){if(D<1)D=1;this.JI=D;},AV:function(D){if(D
)this.AC(0x10,0x0);else this.AC(0x0,0x10);},_Init:function(aArg){C.Gv._Init.call(
this,aArg);this.__proto__=C.AE;this.F=0x11B;},_Mark:function(E){var A;C.Gv._Mark.
call(this,E);if((A=this.IC)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Do)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.E3)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Ci)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::SimpleTouchHandler"};C.Gm={O:null,E3:null,Ci:null,Fj:0,AR:0,
Kq:0,Ft:148,A1:0,Ao:0,AD:true,Down:false,IJ:false,Bs:function(aArg){var A;var At=(
C.L.isPrototypeOf(A=this.T)?A:null);if(!At)throw new Error(IU);this.O=At.HS;At.HS=
this;},Br:function(Aj){var A;if(!!Aj&&Aj.Lm(this.Ft)){this.Down=Aj.Down;this.A1=
Aj.A1;this.Ao=Aj.Ao;this.AR=Aj.AR;if(Aj.Down){this.Kq=this.Fj;this.IJ=this.Fj>0;
if(!this.IJ)(A=this.Ci)?A[1].call(A[0],this):null;this.Fj=this.Fj+1;return true;
}if(!Aj.Down){this.IJ=this.Fj>1;this.Kq=this.Fj-1;this.Fj=0;(A=this.E3)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
C.Gm;this.Bs(aArg);B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.E3)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ci)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=
E);},T:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.H8={BI:
null,Ga:0,DT:B.qK,Initialize:function(I,aOffset){this.BI=I;this.DT=aOffset;this.
Ga=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.H8;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.BI)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};C.Fu={ET:null,Bo:B.qL,Z:B.qL,isEmpty:false,_Init:
function(aArg){this.__proto__=C.Fu;B.gx++;},_Done:function(){this.__proto__=null;
B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.ET)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.Hc={Ec:B.qK,Eb:B.qK
,_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.Hc;},_className:
"Core::LayoutLineContext"};C.Hd={G1:B.qK,G0:B.qK,Ec:B.qK,Eb:B.qK,_Init:function(
aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.Hd;},_className:"Core::LayoutQuadContext"
};C.H9={At:null,O:null,Cd:null,Cg:null,Bp:null,Fg:null,_Init:function(aArg){this.
__proto__=C.H9;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.At)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cd)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Cg)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Bp)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Fg)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};C.Kr={Cb:null,Al:null,Ak:null,KO:false,Mv:function(
){if(!this.Cb)return;var Cz=this.Cb;this.Cb.Cy=null;this.Cb=null;B.lz([this,this.
Jl],this);Cz.JK(this);},MN:function(An){if(!!this.Cb)return;if(!this.Ak)return;this.
Cb=this.Ak;this.Ak=this.Ak.O;if(!!this.Ak)this.Ak.R=null;else this.Al=null;this.
Cb.O=null;this.KO=true;this.Cb.Fz(this);this.KO=false;},MT:function(An){B.lz([this
,this.MN],this);},MS:function(An){B.lz([this,this.MT],this);},Jl:function(An){B.
lz([this,this.MS],this);},Lb:function(AU){if(!AU||!AU.Cy)return;if(AU.Cy!==this)
throw new Error(IV);var K$=false;if(this.Cb===AU){this.Cb=null;K$=true;B.lz([this
,this.Jl],this);}else{if(!!AU.O)AU.O.R=AU.R;else this.Al=AU.R;if(!!AU.R)AU.R.O=AU.
O;else this.Ak=AU.O;AU.R=null;AU.O=null;}AU.Cy=null;if(K$)AU.JJ(this);},LL:function(
AU,Mr){if(!AU)return;if(!!AU.Cy)throw new Error(IW);AU.Cy=this;if(Mr){AU.O=this.
Ak;if(!!this.Ak)this.Ak.R=AU;else this.Al=AU;this.Ak=AU;}else{AU.R=this.Al;if(!!
this.Al)this.Al.O=AU;else this.Ak=AU;this.Al=AU;}if(!this.Cb)B.lz([this,this.Jl]
,this);},_Init:function(aArg){this.__proto__=C.Kr;B.gx++;},_Done:function(){this.
__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
Cb)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Al)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ak)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E
))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};C.Gy={Cy:null,R:null,O:null,JK:function(GJ){},JJ:function(GJ){},Fz:function(GJ
){this.Jv();},C6:function(){if(!!this.Cy&&(this.Cy.Cb===this))this.Cy.Mv();},Jv:
function(){if(!!this.Cy)this.Cy.Lb(this);},Io:function(){return!!this.Cy&&(this.
Cy.Cb===this);},_Init:function(aArg){this.__proto__=C.Gy;B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Cy)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle
!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:"Core::Task"
};C.DU={resource:null,CA:function(){this.resource=null;},Bs:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=C.DU;this.Bs(aArg);B.gx++;},
_Done:function(){this.CA();this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:
0,_observers:null,_className:"Core::Resource"};C.Timer={FA:null,timer:null,AR:0,
Period:1000,G7:0,AD:false,CA:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},HX:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.sX(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},Gq:function(D){if(D<0)D=0;if(D===this.Period)return;this.Period=D;if(this.
AD)this.HX(this.G7,D);},Gp:function(D){if(D<0)D=0;if(D===this.G7)return;this.G7=
D;if(this.AD)this.HX(D,this.Period);},AV:function(D){if(D===this.AD)return;this.
AD=D;if(D)this.HX(this.G7,this.Period);else this.HX(0,0);this.AR=this.Gh();},Gh:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.qG)|0;return ticksCount;
},Trigger:function(){var A;this.AR=this.Gh();if(!this.Period)this.AV(false);(A=this.
FA)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=C.Timer;B.gx++;
},_Done:function(){this.CA();this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.FA)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=
this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:
"Core::Timer"};C.Ou={A2:0x1,Nk:0x2,NO:0x4,Os:0x8,AD:0x10,Oh:0x20,NP:0x40,NZ:0x80
,NN:0x100,NT:0x200,NH:0x400,N8:0x800,Ks:0x1000,Ot:0x2000,N3:0x4000,N4:0x8000,NA:
0x10000,N2:0x20000,Og:0x40000};C.CC={N9:0x1,N_:0x2,Ne:0x4,Nf:0x8,Ng:0x10,Nd:0x20
};C.NR={Ln:0,Op:1,Nq:2,NU:3,Oa:4,Oq:5,Or:6,Nr:7,Ns:8,NW:9,NV:10,Oc:11,Ob:12};C.Gb={
Ln:0,On:1,Left:2,No:3,LP:4,La:5,Oo:6,Right:7,Np:8};C.KeyCode={NoKey:0,Ok:1,Exit:
2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,
Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,
Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:
34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:41
,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:
50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:
59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:
70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:
78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:86,User2:87
,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94,User10:95,User11:
96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:102,User18:103,User19:
104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:
113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:
122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:
131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:138,Colon:
139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:
144,CharacterKeys:145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:
150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:
157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163
,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:
170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176
,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,
CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:
189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196
,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:
203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208
,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:
214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:
219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:
224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:
229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:
234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:
239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:
244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:
249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:
254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:
259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:
264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268
,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272
,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.N$={Oy:0x1,Ov:0x2,Ow:0x4,Ox:0x8,NY:
0x10,NQ:0x20};
C._Init=function(){C.Fv.__proto__=C.BI;C.Gv.__proto__=C.BI;C.Bt.__proto__=C.BI;C.
L.__proto__=C.Bt;C.Root.__proto__=C.L;C.KeyEvent.__proto__=C.Event;C.H7.__proto__=
C.Event;C.G8.__proto__=C.Event;C.G9.__proto__=C.Event;C.Hm.__proto__=C.Bt;C.AE.__proto__=
C.Gv;C.Hc.__proto__=C.Fu;C.Hd.__proto__=C.Fu;};C._ReInit=function(){};C.BY=function(
E){};return C;})();

/* Embedded Wizard */