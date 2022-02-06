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
var Az=[0,0];var AE=[0,0,0,0];var Bf="The view does not belong to this group";var
BP="The dialog component is already presented";var Dq="The dialog component is actually not presented";
var Ef="No fader to perform the fade-in/out operation";var Eg="Trying to use the same fader twice";
var Fn="Trying to fade-in/out a group which belongs to another owner";var Gc="No view to restack";
var Fo="View is not in this group";var Gd="No view to remove";var Ge="No view to add";
var G6="View already in a group";var Gf="Recursive invalidate during active update cycle.";
var E0=[-8,-8,9,9];var G7="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var G8="Trying to cancel a task not belonging to this queue!";
var G9="Trying to enqueue a task twice!";
C.BO={P:null,R:null,G:null,Al:null,F:0x103,CG:0,CQ:0x14,Gq:function(N,Gi){},KR:function(
D){if(this.CG===D)return;this.CG=D;if(!!this.G){var EG=this.P;var B9=0;while(!!EG&&(
D>EG.CG)){EG=EG.P;B9=B9+1;}EG=this.R;while(!!EG&&(D<EG.CG)){EG=EG.R;B9=B9-1;}if(
!!B9)this.G.Mh(this,B9);}},L_:function(D){var A;var B9=D^this.CQ;if(!B9)return;this.
CQ=D;if(!!this.Al&&!((this.F&0x400)===0x400)){this.G.F=this.G.F|0x5000;B.lz([A=this.
G,A.Bq],this);this.G.Am([0,0,(A=this.G.S)[2]-A[0],A[3]-A[1]]);}if(!!this.Al&&((this.
F&0x400)===0x400)){this.Al.E_.F=this.Al.E_.F|0x1000;this.G.F=this.G.F|0x4000;B.lz([
A=this.G,A.Bq],this);}},IU:function(){var X=this.G;while(!!X){var LF=(C.Root.isPrototypeOf(
X)?X:null);if(!!LF)return LF;X=X.G;}return null;},CN:function(AQ,aClip,aOffset,AC
,aBlend){},Br:function(Ah){return null;},Fg:function(Ag,O,B7,Ei,Fs){return null;
},GB:function(N,BA){return Az;},HQ:function(aOffset,Gh){},GetExtent:function(){return AE;
},AJ:function(Ek,Fq){var A;if(((this.F&0x200)===0x200))Ek=Ek&~0x400;var JQ=(this.
F&~Fq)|Ek;var E3=JQ^this.F;this.F=JQ;if(!!this.G&&!!(E3&0x14)){var Li=((this.F&0x14
)===0x14);if(Li&&!this.G.B3)this.G.C_(this);if(!Li&&(this.G.B3===this))this.G.C_(
this.G.J8(this,0x14));}if(!!this.G&&!!(E3&0x403))this.G.Am(this.GetExtent());if(((
!!this.Al&&!!this.G)&&((JQ&0x400)===0x400))&&((E3&0x1)===0x1)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bq],this);}if(!!this.G&&((E3&0x400)===
0x400)){this.Al=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G
,A.Bq],this);}},_Init:function(aArg){this.__proto__=C.BO;B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Al)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);
},T:null,_cycle:0,_observers:null,_className:"Core::View"};C.FP={AB:B.qK,AP:B.qK
,Gq:function(N,Gi){var Q=B._NewObject(C.HN,0);this.Al=null;Q.Bx=this.getExtent();
Q.Aa=N;Q.E_=Gi;Q.Eu=this.AP;Q.Ev=this.AB;this.Al=Q;},GB:function(N,BA){var A;var
At=this.CQ;var Q=(C.HN.isPrototypeOf(A=this.Al)?A:null);var x1=Q.Bx[0];var y1=Q.
Bx[1];var x2=Q.Bx[2];var y2=Q.Bx[3];var A9=[N[2]-N[0],N[3]-N[1]];var Ae=x2-x1;var
Ad=y2-y1;var tmp;if(!BA){var BH=[(A=Q.Aa)[2]-A[0],A[3]-A[1]];x1=x1-Q.Aa[0];y1=y1-
Q.Aa[1];if(BH[0]!==A9[0]){var A6=((At&0x4)===0x4);var A7=((At&0x8)===0x8);var Cc=((
At&0x1)===0x1);if(!A6&&(Cc||!A7))x1=((x1*A9[0])/BH[0])|0;if(!A7&&(Cc||!A6)){x2=x2-
Q.Aa[0];x2=((x2*A9[0])/BH[0])|0;x2=x2-A9[0];}else x2=x2-Q.Aa[2];x1=x1+N[0];x2=x2+
N[2];if(!Cc){if(A6&&!A7)x2=x1+Ae;else if(!A6&&A7)x1=x2-Ae;else{x1=x1+((((x2-x1)-
Ae)/2)|0);x2=x1+Ae;}}}else{x2=x2-Q.Aa[2];x1=x1+N[0];x2=x2+N[2];}if(BH[1]!==A9[1]
){var A8=((At&0x10)===0x10);var A5=((At&0x20)===0x20);var Cd=((At&0x2)===0x2);if(
!A8&&(Cd||!A5))y1=((y1*A9[1])/BH[1])|0;if(!A5&&(Cd||!A8)){y2=y2-Q.Aa[1];y2=((y2*
A9[1])/BH[1])|0;y2=y2-A9[1];}else y2=y2-Q.Aa[3];y1=y1+N[1];y2=y2+N[3];if(!Cd){if(
A8&&!A5)y2=y1+Ad;else if(!A8&&A5)y1=y2-Ad;else{y1=y1+((((y2-y1)-Ad)/2)|0);y2=y1+
Ad;}}}else{y2=y2-Q.Aa[3];y1=y1+N[1];y2=y2+N[3];}}else{switch(BA){case 3:{x1=N[0];
x2=x1+Ae;}break;case 4:{x2=N[2];x1=x2-Ae;}break;case 1:{y1=N[1];y2=y1+Ad;}break;
case 2:{y2=N[3];y1=y2-Ad;}break;default:;}if((BA===3)||(BA===4)){var A8=((At&0x10
)===0x10);var A5=((At&0x20)===0x20);var Cd=((At&0x2)===0x2);if(Cd){y1=N[1];y2=N[
3];}else if(A8&&!A5){y1=N[1];y2=y1+Ad;}else if(A5&&!A8){y2=N[3];y1=y2-Ad;}else{y1=
N[1]+((((N[3]-N[1])-Ad)/2)|0);y2=y1+Ad;}}if((BA===1)||(BA===2)){var A6=((At&0x4)===
0x4);var A7=((At&0x8)===0x8);var Cc=((At&0x1)===0x1);if(Cc){x1=N[0];x2=N[2];}else
if(A6&&!A7){x1=N[0];x2=x1+Ae;}else if(A7&&!A6){x2=N[2];x1=x2-Ae;}else{x1=N[0]+((((
N[2]-N[0])-Ae)/2)|0);x2=x1+Ae;}}}Q.isEmpty=(x1>=x2)||(y1>=y2);Ae=x2-x1;Ad=y2-y1;
if(Q.Ev[0]<Q.Eu[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(Q.Ev[1]<Q.Eu[1]){tmp=y1;y1=y2-1;
y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){
this.AP=[x1,y1];this.AB=[x2,y2];}else{this.C$([x1,y1]);this.Da([x2,y2]);this.Al=
Q;}return[Ae,Ad];},HQ:function(aOffset,Gh){if(Gh){this.AP=B.tV(this.AP,aOffset);
this.AB=B.tV(this.AB,aOffset);}else{this.C$(B.tV(this.AP,aOffset));this.Da(B.tV(
this.AB,aOffset));}},GetExtent:function(){if(!!this.Al&&this.Al.isEmpty)return AE;
return this.getExtent();},getExtent:function(){var x1=this.AP[0];var y1=this.AP[
1];var x2=this.AB[0];var y2=this.AB[1];var Ae=x2-x1;var Ad=y2-y1;var tmp;if(Ae<0
)Ae=-Ae;if(Ad<0)Ad=-Ad;if(Ae>=Ad){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(Ad>=Ae){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},Da:function(D){var A;if(B.tH(D,this.AB
))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent());this.Al=null;
this.AB=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent());if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bq],this);}},C$:function(D){var A;if(B.
tH(D,this.AP))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent(
));this.Al=null;this.AP=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bq],this);}},_Init:function(
aArg){C.BO._Init.call(this,aArg);this.__proto__=C.FP;},_className:"Core::LineView"
};C.G1={Bs:B.qK,BN:B.qK,AB:B.qK,AP:B.qK,Gq:function(N,Gi){var Q=B._NewObject(C.HO
,0);this.Al=null;Q.Bx=this.GetExtent();Q.Aa=N;Q.E_=Gi;Q.Eu=this.AP;Q.Ev=this.AB;
Q.Hv=this.BN;Q.Hw=this.Bs;this.Al=Q;},GB:function(N,BA){var A;var At=this.CQ;var
Q=(C.HO.isPrototypeOf(A=this.Al)?A:null);var x1=Q.Bx[0];var y1=Q.Bx[1];var x2=Q.
Bx[2];var y2=Q.Bx[3];var A9=[N[2]-N[0],N[3]-N[1]];var Ae=x2-x1;var Ad=y2-y1;if(!
BA){var BH=[(A=Q.Aa)[2]-A[0],A[3]-A[1]];x1=x1-Q.Aa[0];y1=y1-Q.Aa[1];if(BH[0]!==A9[
0]){var A6=((At&0x4)===0x4);var A7=((At&0x8)===0x8);var Cc=((At&0x1)===0x1);if(!
A6&&(Cc||!A7))x1=((x1*A9[0])/BH[0])|0;if(!A7&&(Cc||!A6)){x2=x2-Q.Aa[0];x2=((x2*A9[
0])/BH[0])|0;x2=x2-A9[0];}else x2=x2-Q.Aa[2];x1=x1+N[0];x2=x2+N[2];if(!Cc){if(A6&&
!A7)x2=x1+Ae;else if(!A6&&A7)x1=x2-Ae;else{x1=x1+((((x2-x1)-Ae)/2)|0);x2=x1+Ae;}
}}else{x2=x2-Q.Aa[2];x1=x1+N[0];x2=x2+N[2];}if(BH[1]!==A9[1]){var A8=((At&0x10)===
0x10);var A5=((At&0x20)===0x20);var Cd=((At&0x2)===0x2);if(!A8&&(Cd||!A5))y1=((y1
*A9[1])/BH[1])|0;if(!A5&&(Cd||!A8)){y2=y2-Q.Aa[1];y2=((y2*A9[1])/BH[1])|0;y2=y2-
A9[1];}else y2=y2-Q.Aa[3];y1=y1+N[1];y2=y2+N[3];if(!Cd){if(A8&&!A5)y2=y1+Ad;else
if(!A8&&A5)y1=y2-Ad;else{y1=y1+((((y2-y1)-Ad)/2)|0);y2=y1+Ad;}}}else{y2=y2-Q.Aa[
3];y1=y1+N[1];y2=y2+N[3];}}else{switch(BA){case 3:{x1=N[0];x2=x1+Ae;}break;case 4:{
x2=N[2];x1=x2-Ae;}break;case 1:{y1=N[1];y2=y1+Ad;}break;case 2:{y2=N[3];y1=y2-Ad;
}break;default:;}if((BA===3)||(BA===4)){var A8=((At&0x10)===0x10);var A5=((At&0x20
)===0x20);var Cd=((At&0x2)===0x2);if(Cd){y1=N[1];y2=N[3];}else if(A8&&!A5){y1=N[
1];y2=y1+Ad;}else if(A5&&!A8){y2=N[3];y1=y2-Ad;}else{y1=N[1]+((((N[3]-N[1])-Ad)/
2)|0);y2=y1+Ad;}}if((BA===1)||(BA===2)){var A6=((At&0x4)===0x4);var A7=((At&0x8)===
0x8);var Cc=((At&0x1)===0x1);if(Cc){x1=N[0];x2=N[2];}else if(A6&&!A7){x1=N[0];x2=
x1+Ae;}else if(A7&&!A6){x2=N[2];x1=x2-Ae;}else{x1=N[0]+((((N[2]-N[0])-Ae)/2)|0);
x2=x1+Ae;}}}Q.isEmpty=(x1>=x2)||(y1>=y2);Ae=(x2-x1)-1;Ad=(y2-y1)-1;var En=Q.Bx[0
];var Eo=Q.Bx[1];var DU=(Q.Bx[2]-En)-1;var DT=(Q.Bx[3]-Eo)-1;if(!DU)DU=1;if(!DT)
DT=1;if(((this.F&0x100)===0x100)){this.AP=[x1+((((Q.Eu[0]-En)*Ae)/DU)|0),y1+((((
Q.Eu[1]-Eo)*Ad)/DT)|0)];this.AB=[x1+((((Q.Ev[0]-En)*Ae)/DU)|0),y1+((((Q.Ev[1]-Eo
)*Ad)/DT)|0)];this.BN=[x1+((((Q.Hv[0]-En)*Ae)/DU)|0),y1+((((Q.Hv[1]-Eo)*Ad)/DT)|
0)];this.Bs=[x1+((((Q.Hw[0]-En)*Ae)/DU)|0),y1+((((Q.Hw[1]-Eo)*Ad)/DT)|0)];}else{
this.C$([x1+((((Q.Eu[0]-En)*Ae)/DU)|0),y1+((((Q.Eu[1]-Eo)*Ad)/DT)|0)]);this.Da([
x1+((((Q.Ev[0]-En)*Ae)/DU)|0),y1+((((Q.Ev[1]-Eo)*Ad)/DT)|0)]);this.GV([x1+((((Q.
Hv[0]-En)*Ae)/DU)|0),y1+((((Q.Hv[1]-Eo)*Ad)/DT)|0)]);this.GW([x1+((((Q.Hw[0]-En)
*Ae)/DU)|0),y1+((((Q.Hw[1]-Eo)*Ad)/DT)|0)]);this.Al=Q;}return[Ae+1,Ad+1];},HQ:function(
aOffset,Gh){if(Gh){this.AP=B.tV(this.AP,aOffset);this.AB=B.tV(this.AB,aOffset);this.
BN=B.tV(this.BN,aOffset);this.Bs=B.tV(this.Bs,aOffset);}else{this.C$(B.tV(this.AP
,aOffset));this.Da(B.tV(this.AB,aOffset));this.GV(B.tV(this.BN,aOffset));this.GW(
B.tV(this.Bs,aOffset));}},GetExtent:function(){if(!!this.Al&&this.Al.isEmpty)return AE;
var x1=this.AP[0];var y1=this.AP[1];var x2=this.BN[0];var y2=this.BN[1];if((((this.
Bs[0]!==x1)||(this.AB[1]!==y1))||(this.AB[0]!==x2))||(this.Bs[1]!==y2)){if(this.
AB[0]<x1)x1=this.AB[0];if(this.BN[0]<x1)x1=this.BN[0];if(this.Bs[0]<x1)x1=this.Bs[
0];if(this.AB[1]<y1)y1=this.AB[1];if(this.BN[1]<y1)y1=this.BN[1];if(this.Bs[1]<y1
)y1=this.Bs[1];if(this.AP[0]>x2)x2=this.AP[0];if(this.AB[0]>x2)x2=this.AB[0];if(
this.Bs[0]>x2)x2=this.Bs[0];if(this.AP[1]>y2)y2=this.AP[1];if(this.AB[1]>y2)y2=this.
AB[1];if(this.Bs[1]>y2)y2=this.Bs[1];}else{var tmp;if(x2<x1){tmp=x1;x1=x2;x2=tmp;
}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];},GW:function(D){var A;
if(B.tH(D,this.Bs))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent(
));this.Al=null;this.Bs=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bq],this);}},GV:function(
D){var A;if(B.tH(D,this.BN))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.
GetExtent());this.Al=null;this.BN=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(
this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===
0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bq],this);
}},Da:function(D){var A;if(B.tH(D,this.AB))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.Am(this.GetExtent());this.Al=null;this.AB=D;if(!!this.G&&((this.F&0x1)===
0x1))this.G.Am(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.lz([A=this.
G,A.Bq],this);}},C$:function(D){var A;if(B.tH(D,this.AP))return;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Am(this.GetExtent());this.Al=null;this.AP=D;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Am(this.GetExtent());if((!!this.G&&((this.F&0x400)===0x400
))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;
B.lz([A=this.G,A.Bq],this);}},I0:function(Fr){var AH=B.tY(4,B.qK,null);var K=0;var
AI=3;var JJ=false;var JK=false;AH.Set(0,this.AP);AH.Set(1,this.AB);AH.Set(2,this.
BN);AH.Set(3,this.Bs);while(K<4){var LJ=AH.Get(K)[0];var ID=AH.Get(K)[1];var NG=
AH.Get(AI)[0];var J1=AH.Get(AI)[1];if(((ID>Fr[1])!==(J1>Fr[1]))||((ID<Fr[1])!==(
J1<Fr[1]))){var FK=((((NG-LJ)*(Fr[1]-ID))/(J1-ID))|0)+LJ;if(Fr[0]>FK)JJ=!JJ;if(Fr[
0]<FK)JK=!JK;}AI=K;K=K+1;}return JJ||JK;},LV:function(){return((((this.AP[0]===this.
Bs[0])&&(this.AB[0]===this.BN[0]))&&(this.AP[1]===this.AB[1]))&&(this.BN[1]===this.
Bs[1]))||((((this.AP[0]===this.AB[0])&&(this.BN[0]===this.Bs[0]))&&(this.AP[1]===
this.Bs[1]))&&(this.AB[1]===this.BN[1]));},_Init:function(aArg){C.BO._Init.call(
this,aArg);this.__proto__=C.G1;},_className:"Core::QuadView"};C.Bd={S:B.qL,Gq:function(
N,Gi){var Q=B._NewObject(C.FO,0);Q.Bx=this.S;Q.Aa=N;Q.E_=Gi;this.Al=Q;},GB:function(
N,BA){var A;var At=this.CQ;var Q=this.Al;var x1=Q.Bx[0];var y1=Q.Bx[1];var x2=Q.
Bx[2];var y2=Q.Bx[3];var A9=[N[2]-N[0],N[3]-N[1]];var Ae=x2-x1;var Ad=y2-y1;if(!
BA){var BH=[(A=Q.Aa)[2]-A[0],A[3]-A[1]];x1=x1-Q.Aa[0];y1=y1-Q.Aa[1];if(BH[0]!==A9[
0]){var A6=((At&0x4)===0x4);var A7=((At&0x8)===0x8);var Cc=((At&0x1)===0x1);if(!
A6&&(Cc||!A7))x1=((x1*A9[0])/BH[0])|0;if(!A7&&(Cc||!A6)){x2=x2-Q.Aa[0];x2=((x2*A9[
0])/BH[0])|0;x2=x2-A9[0];}else x2=x2-Q.Aa[2];x1=x1+N[0];x2=x2+N[2];if(!Cc){if(A6&&
!A7)x2=x1+Ae;else if(!A6&&A7)x1=x2-Ae;else{x1=x1+((((x2-x1)-Ae)/2)|0);x2=x1+Ae;}
}}else{x2=x2-Q.Aa[2];x1=x1+N[0];x2=x2+N[2];}if(BH[1]!==A9[1]){var A8=((At&0x10)===
0x10);var A5=((At&0x20)===0x20);var Cd=((At&0x2)===0x2);if(!A8&&(Cd||!A5))y1=((y1
*A9[1])/BH[1])|0;if(!A5&&(Cd||!A8)){y2=y2-Q.Aa[1];y2=((y2*A9[1])/BH[1])|0;y2=y2-
A9[1];}else y2=y2-Q.Aa[3];y1=y1+N[1];y2=y2+N[3];if(!Cd){if(A8&&!A5)y2=y1+Ad;else
if(!A8&&A5)y1=y2-Ad;else{y1=y1+((((y2-y1)-Ad)/2)|0);y2=y1+Ad;}}}else{y2=y2-Q.Aa[
3];y1=y1+N[1];y2=y2+N[3];}}else{switch(BA){case 3:{x1=N[0];x2=x1+Ae;}break;case 4:{
x2=N[2];x1=x2-Ae;}break;case 1:{y1=N[1];y2=y1+Ad;}break;case 2:{y2=N[3];y1=y2-Ad;
}break;default:;}if((BA===3)||(BA===4)){var A8=((At&0x10)===0x10);var A5=((At&0x20
)===0x20);var Cd=((At&0x2)===0x2);if(Cd){y1=N[1];y2=N[3];}else if(A8&&!A5){y1=N[
1];y2=y1+Ad;}else if(A5&&!A8){y2=N[3];y1=y2-Ad;}else{y1=N[1]+((((N[3]-N[1])-Ad)/
2)|0);y2=y1+Ad;}}if((BA===1)||(BA===2)){var A6=((At&0x4)===0x4);var A7=((At&0x8)===
0x8);var Cc=((At&0x1)===0x1);if(Cc){x1=N[0];x2=N[2];}else if(A6&&!A7){x1=N[0];x2=
x1+Ae;}else if(A7&&!A6){x2=N[2];x1=x2-Ae;}else{x1=N[0]+((((N[2]-N[0])-Ae)/2)|0);
x2=x1+Ae;}}}Q.isEmpty=(x1>=x2)||(y1>=y2);if(((this.F&0x100)===0x100))this.S=[x1,
y1,x2,y2];else{this.V([x1,y1,x2,y2]);this.Al=Q;}return[x2-x1,y2-y1];},HQ:function(
aOffset,Gh){if(Gh)this.S=B.tX(this.S,aOffset);else this.V(B.tX(this.S,aOffset));
},GetExtent:function(){return this.S;},V:function(D){var A;if(B.tI(D,this.S))return;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.S);this.Al=null;this.S=D;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Am(this.S);if((!!this.G&&((this.F&0x400)===0x400)
)&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.
lz([A=this.G,A.Bq],this);}},_Init:function(aArg){C.BO._Init.call(this,aArg);this.
__proto__=C.Bd;},_className:"Core::RectView"};C.J={An:null,Ao:null,Ir:null,AT:null
,CZ:null,FF:null,B3:null,Db:255,Bo:function(aArg){this.EU();},CN:function(AQ,aClip
,aOffset,AC,aBlend){var A;AC=((AC+1)*this.Db)>>8;aBlend=aBlend&&((this.F&0x2)===
0x2);this.M7(AQ,aClip,B.tV(aOffset,this.S.slice(0,2)),AC,aBlend);},Fg:function(Ag
,O,B7,Ei,Fs){var A;var M=this.Ao;var Fw=null;var AR=AE;var Cq=null;var JN=!!this.
CZ&&(!!this.CZ.Cn||!!this.CZ.An);if(((A=B.it(Ag,this.S))[0]>=A[2])||(A[1]>=A[3])
)return null;Ag=B.tW(Ag,this.S.slice(0,2));while(!!M){if(((M.F&0x400)===0x400)&&
!Cq){Cq=M.R;while(!!Cq&&!((Cq.F&0x200)===0x200))Cq=Cq.R;if(!!Cq)AR=B.it(Ag,Cq.GetExtent(
));else AR=AE;}if(Cq===M){Cq=null;AR=AE;}if((((((M.F&0x8)===0x8)&&((M.F&0x10)===
0x10))&&!((M.F&0x40000)===0x40000))&&!((M.F&0x20000)===0x20000))&&(!((M.F&0x10000
)===0x10000)||((this.AT.Ax===M)&&!JN))){var Bx=M.GetExtent();var Ij=Ei;var Fu=null;
if(Ij===M)Ij=null;if(((M.F&0x400)===0x400)){if(!(((A=B.it(Bx,AR))[0]>=A[2])||(A[
1]>=A[3])))Fu=M.Fg(AR,O,B7,Ij,Fs);}else if(!(((A=B.it(Bx,Ag))[0]>=A[2])||(A[1]>=
A[3]))||(Ei===M))Fu=M.Fg(Ag,O,B7,Ij,Fs);M=M.R;if(!!Fu){if(!Fw||((Fu.GD<Fw.GD)&&(
Fu.GD>=0)))Fw=Fu;if(!Fu.GD)M=null;}}else M=M.R;}return Fw;},AJ:function(Ek,Fq){var
A;var Ng=this.F;C.Bd.AJ.call(this,Ek,Fq);var E3=this.F^Ng;if(!!this.B3&&((E3&0x40
)===0x40)){if(((this.F&0x40)===0x40))this.B3.AJ(0x40,0x0);else this.B3.AJ(0x0,0x40
);}if(!!this.AT&&((E3&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((this.AT.Ax.F&0x14
)===0x14))this.AT.Ax.AJ(0x40,0x0);else this.AT.Ax.AJ(0x0,0x40);}if(!!E3){this.F=
this.F|0x8000;B.lz([this,this.Bq],this);}},V:function(D){var A;if(B.tI(D,this.S)
)return;var E9=[(A=this.S)[2]-A[0],A[3]-A[1]];var JP=[D[2]-D[0],D[3]-D[1]];var Gx=
!B.tH(E9,JP);C.Bd.V.call(this,D);if((Gx&&(E9[0]>0))&&(E9[1]>0)){var Aa=[].concat(
Az,E9);var M=this.An;while(!!M){if((!M.Al&&(M.CQ!==0x14))&&!((M.F&0x400)===0x400
))M.Gq(Aa,null);M=M.P;}}if(Gx){this.F=this.F|0x5000;B.lz([this,this.Bq],this);}}
,LD:function(Ah){var Lo=(C.KeyEvent.isPrototypeOf(Ah)?Ah:null);var Dh=this.Ir;if(
!Lo)return null;while(!!Dh&&(!Dh.AK||!Dh.Br(Lo)))Dh=Dh.P;return Dh;},M7:function(
AQ,aClip,aOffset,AC,aBlend){var A;var M=this.An;var Le=AE;var LB=true;this.LQ(AQ
,aClip,aOffset,AC,aBlend);while(!!M){if(((M.F&0x200)===0x200)){var LA=(C.HX.isPrototypeOf(
M)?M:null);Le=B.it(aClip,B.tX(LA.S,aOffset));LB=((LA.F&0x1)===0x1);}if(((M.F&0x1
)===0x1)){if(((M.F&0x400)===0x400)){if(LB){var AR=B.it(B.tX(M.GetExtent(),aOffset
),Le);if(!((AR[0]>=AR[2])||(AR[1]>=AR[3])))M.CN(AQ,AR,aOffset,AC,aBlend);}}else{
var AR=B.it(B.tX(M.GetExtent(),aOffset),aClip);if(!((AR[0]>=AR[2])||(AR[1]>=AR[3
])))M.CN(AQ,AR,aOffset,AC,aBlend);}}M=M.P;}this.LS(AQ,aClip,aOffset,AC,aBlend);}
,Nx:function(){var A;var JG=((this.F&0x1000)===0x1000);var Es=[0,0,(A=this.S)[2]-
A[0],A[3]-A[1]];var DV=false;var Go=AE;var JE=AE;var M=this.Ao;var Cq=null;while(
!!M){if(((M.F&0x800)===0x800)){DV=true;M.F=M.F&~0x800;}if(DV&&((M.F&0x200)===0x200
))DV=false;M=M.R;}DV=false;M=this.An;if(JG){this.F=this.F&~0x1000;JG=!((Es[0]>=Es[
2])||(Es[1]>=Es[3]));}this.F=this.F|0x2000;while(!!M){if(((M.F&0x400)===0x400)){
if(!!M.Al&&(M.Al.E_!==Cq))M.Al=null;if((!M.Al&&DV)&&(M.CQ!==0x14))M.Gq(JE,Cq);}if(
!!M.Al){if(JG&&!((M.F&0x400)===0x400))M.GB(Es,0);if(DV&&((M.F&0x400)===0x400))M.
GB(JE,0);}if(((M.F&0x200)===0x200)){DV=((M.F&0x1000)===0x1000);Cq=(C.HX.isPrototypeOf(
M)?M:null);if(DV){M.F=M.F&~0x1000;Go=Cq.S;JE=Go;DV=!((Go[0]>=Go[2])||(Go[1]>=Go[
3]));}if(DV)this.Am(Cq.S);}M=M.P;}this.F=this.F&~0x2000;this.K4([Es[2]-Es[0],Es[
3]-Es[1]]);},Bq:function(Ak){var A;var NE=((this.F&0x1000)===0x1000);if(((this.F&
0x4000)===0x4000)){this.F=this.F&~0x4000;this.Nx();}if(((this.F&0x8000)===0x8000
)||NE){this.F=this.F&~0x8000;this.Jt(this.F);}},C_:function(D){var A;if(!!D&&(D.
G!==this))throw new Error(Bf);if(!!D&&!((D.F&0x14)===0x14))D=null;if(!!D&&((D.F&
0x10000)===0x10000))D=null;if(D===this.B3)return;if(!!this.B3)this.B3.AJ(0x0,0x60
);this.B3=D;if(!!D){if(((this.F&0x40)===0x40))D.AJ(0x60,0x0);else D.AJ(0x20,0x0);
}},LZ:function(){return false;},AA:function(D){if(D)this.AJ(0x10,0x0);else this.
AJ(0x0,0x10);},Fk:function(D){var A;if(D>255)D=255;if(D<0)D=0;if(D===this.Db)return;
this.Db=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.S);},MT:function(NF){
this.Fk(NF);},FR:function(){var A;return((this.F&0x1)===0x1);},FS:function(D){if(
D)this.AJ(0x1,0x0);else this.AJ(0x0,0x1);},LS:function(AQ,aClip,aOffset,AC,aBlend
){},LQ:function(AQ,aClip,aOffset,AC,aBlend){},GetMinimalSize:function(){return Az;
},Jo:function(Bg,Cz,Ej,Dr,Ds,Hc,Dg,DO,Cx,Cv,Cw){var A;if(!this.AT){this.HY(Bg,Cz
,Ej,Dr,Ds,null,null,Cx,Cv,Cw);return;}var E8=this.AT;var Bj=E8.P;if(((Bg.F&0x10000
)===0x10000)&&(this.AT.Ax!==Bg))throw new Error(BP);var Dw=B._NewObject(C.IG,0);
var Cp=E8.Cp;var Cs=null;var By=null;if(!!Bj){Cs=Bj.Cs;By=Bj.By;}if(!!Bj&&!!E8.FD
)Cs=E8.FD;if(!!Bj&&!!Dg)By=Dg;if(!!Hc)Cp=Hc;if(!Cz)Cz=B._GetAutoObject(B.uQ.Ec);
if(!Ej)Ej=Cz;if(!Ds)Ds=Dr;if(!Dr)Dr=Ds;Dw.Cp=Ej;Dw.By=Dr;Dw.Cs=Ds;Dw.FD=DO;Dw.Ax=
Bg;Dw.P=this.AT.P;this.AT.P=null;this.AT=Dw;if(this.B3===Bg)this.C_(null);E8.Ax.
AJ(0x0,0x10040);if(((this.F&0x40)===0x40)&&((Bg.F&0x4)===0x4))Bg.AJ(0x10040,0x0);
else Bg.AJ(0x10000,0x0);if(!!By){this.B2(Bj.Ax,By.FL(),null,null,Cw);this.B2(E8.
Ax,Cp.D4(),null,null,true);this.B2(Dw.Ax,Cz.D5(),Cx,Cv,true);}else if(!!Cs){this.
B2(Bj.Ax,Cs.FM(),null,null,Cw);this.B2(E8.Ax,Cp.D4(),null,null,true);this.B2(Dw.
Ax,Cz.D5(),Cx,Cv,true);}else if(!!Cp){this.B2(E8.Ax,Cp.D4(),null,null,Cw);this.B2(
Dw.Ax,Cz.D5(),Cx,Cv,true);}else this.B2(Dw.Ax,Cz.D5(),Cx,Cv,Cw);},LO:function(Bg
,Hc,Dg,DO,Cx,Cv,Cw){var A;if(!this.AT)return;if(!Bg)return;var Ba=this.AT;var Bj=
this.AT.P;var Gv=null;while((!!Ba&&(Ba.Ax!==Bg))&&!!Ba.P){Gv=Ba;Ba=Bj;Bj=Ba.P;}if(
!Ba||(Ba.Ax!==Bg))throw new Error(Dq);if(!Gv){this.AT=Bj;Ba.P=null;}else{Gv.P=Bj;
Ba.P=null;}Ba.Ax.AJ(0x0,0x10040);if(((((this.F&0x40)===0x40)&&!!Bj)&&!Gv)&&((Bj.
Ax.F&0x4)===0x4))Bj.Ax.AJ(0x40,0x0);var Cp=Ba.Cp;var Cs=null;var By=null;if(!!Bj
)Cs=Bj.Cs;if(!!Bj&&!!Ba.FD)Cs=Ba.FD;if(!!Bj&&!!DO)Cs=DO;if(!!Gv&&!!Bj)By=Bj.By;if((
!!Gv&&!!Bj)&&!!Dg)By=Dg;if(!!Hc)Cp=Hc;if(!!By){this.B2(Bj.Ax,By.FL(),null,null,Cw
);this.B2(Ba.Ax,Cp.D4(),Cx,Cv,true);}else if(!!Cs){this.B2(Bj.Ax,Cs.FM(),null,null
,Cw);this.B2(Ba.Ax,Cp.D4(),Cx,Cv,true);}else this.B2(Ba.Ax,Cp.D4(),Cx,Cv,Cw);},HY:
function(Bg,Cz,Ej,Dr,Ds,Dg,DO,Cx,Cv,Cw){var A;if(!Bg)return;if(!!this.AT&&(this.
AT.Ax===Bg)){this.Jo(Bg,Cz,Ej,Dr,Ds,null,Dg,DO,Cx,Cv,Cw);return;}if(((Bg.F&0x10000
)===0x10000))throw new Error(BP);var Ba=B._NewObject(C.IG,0);if(!!this.AT&&!this.
AT.By){if(!DO)DO=Dg;if(!Dg)Dg=DO;}var By=null;if(!!this.AT)By=this.AT.By;if(!!this.
AT&&!!Dg)By=Dg;if(!Cz)Cz=B._GetAutoObject(B.uQ.Ec);if(!Ej)Ej=Cz;if(!Ds)Ds=Dr;if(
!Dr)Dr=Ds;Ba.Cp=Ej;Ba.By=Dr;Ba.Cs=Ds;Ba.FD=DO;if(this.B3===Bg)this.C_(null);if(!
!this.AT)this.AT.Ax.AJ(0x0,0x40);if(((this.F&0x40)===0x40)&&((Bg.F&0x4)===0x4))Bg.
AJ(0x10040,0x0);else Bg.AJ(0x10000,0x0);Ba.Ax=Bg;Ba.P=this.AT;this.AT=Ba;if(!!By
){this.B2(this.AT.P.Ax,By.FL(),null,null,Cw);this.B2(Bg,Cz.D5(),Cx,Cv,true);}else
this.B2(Bg,Cz.D5(),Cx,Cv,Cw);},DispatchEvent:function(Ah){var A;var M=this.B3;var
X=(C.J.isPrototypeOf(M)?M:null);var AN=null;var JN=!!this.CZ&&(!!this.CZ.Cn||!!this.
CZ.An);if(!!M&&((((M.F&0x10000)===0x10000)||((M.F&0x40000)===0x40000))||((M.F&0x20000
)===0x20000))){M=null;X=null;}if(!!this.AT&&!JN)AN=this.AT.Ax.DispatchEvent(Ah);
if(!AN&&!!X)AN=X.DispatchEvent(Ah);else if(!AN&&!!M)AN=M.Br(Ah);if(!AN)AN=this.Br(
Ah);if(!AN)AN=this.LD(Ah);return AN;},BroadcastEventAtPosition:function(Ah,K_,Cy
){var A;var M=this.Ao;var AN=null;while(!!M&&!AN){if((!Cy||((A=Cy)&&((M.F&A)===A
)))&&B.qH(M.GetExtent(),K_)){var X=(C.J.isPrototypeOf(M)?M:null);if(!!X)AN=X.BroadcastEventAtPosition(
Ah,B.tU(K_,X.S.slice(0,2)),Cy);else AN=M.Br(Ah);}M=M.R;}if(!AN)AN=this.Br(Ah);return AN;
},BroadcastEvent:function(Ah,Cy){var A;var M=this.Ao;var AN=null;while(!!M&&!AN){
if(!Cy||((A=Cy)&&((M.F&A)===A))){var X=(C.J.isPrototypeOf(M)?M:null);if(!!X)AN=X.
BroadcastEvent(Ah,Cy);else AN=M.Br(Ah);}M=M.R;}if(!AN)AN=this.Br(Ah);if(!AN)AN=this.
LD(Ah);return AN;},K4:function(aSize){},Jt:function(H$){},EU:function(){this.F=this.
F|0x8000;B.lz([this,this.Bq],this);},Am:function(Ag){var A;var X=this;while(!!X&&
!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){if(!X.G&&(X!==this)){X.Am(Ag);return;}if(!((X.
F&0x1)===0x1))return;Ag=B.it(B.tX(Ag,X.S.slice(0,2)),X.S);X=X.G;}},J8:function(I
,Cy){var A;if(!I||(I.G!==this))return null;var E7=I.P;var E$=I.R;var Hr=0x10000;
if(((Cy&0x10000)===0x10000))Hr=0x0;while(!!E7||!!E$){if((!!E7&&(!Cy||((A=Cy)&&((
E7.F&A)===A))))&&(!Hr||!((A=Hr)&&((E7.F&A)===A))))return E7;if((!!E$&&(!Cy||((A=
Cy)&&((E$.F&A)===A))))&&(!Hr||!((A=Hr)&&((E$.F&A)===A))))return E$;if(!!E7)E7=E7.
P;if(!!E$)E$=E$.R;}return null;},B2:function(DM,As,Cx,Cv,Cw){var A;if(!DM)return;
if(!As)throw new Error(Ef);if((!!As.J||!!As.G)||!!As.CL)throw new Error(Eg);if(!
!DM.G&&(DM.G!==this))throw new Error(Fn);if(!this.CZ)this.CZ=B._NewObject(C.K3,0
);As.G=this;As.J=DM;As.It=Cv;As.JR=Cx;if(!!DM.FF)DM.FF.CL.Mg(DM.FF);DM.FF=As;DM.
F=DM.F|0x20000;if((Cw&&!!this.CZ.Ao)&&!this.CZ.Ao.IY())(B.uQ.HH.isPrototypeOf(A=
this.CZ.Ao)?A:null).J2(As);else{var CL=B._NewObject(B.uQ.HH,0);CL.J2(As);this.CZ.
Mj(CL,false);}},H3:function(I){var A;if(!I)throw new Error(Gc);if(I.G!==this)throw new
Error(Fo);if(!I.P)return;var BF=this.Ao;var EF=I.CG;while(!!BF&&(BF.CG>EF))BF=BF.
R;if(((BF===I)||!BF)||(BF.P===I))return;if(((I.F&0x401)===0x401)){if(!!I.R&&!!I.
Al)I.R.F=I.R.F|0x800;I.F=I.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bq],this
);}if(((I.F&0x200)===0x200)){if(!!I.R)I.R.F=I.R.F|0x800;this.F=this.F|0x4000;B.lz([
this,this.Bq],this);}if(!!I.R)I.R.P=I.P;else this.An=I.P;I.P.R=I.R;I.R=BF;I.P=BF.
P;BF.P=I;if(!!I.P)I.P.R=I;else this.Ao=I;if(((I.F&0x1)===0x1))this.Am(I.GetExtent(
));},Mh:function(I,CU){var A;if(!I)throw new Error(Gc);if(I.G!==this)throw new Error(
Fo);var BF=I;var AY=I;var EF=I.CG;while(((CU>0)&&!!BF.P)&&(BF.P.CG<=EF)){BF=BF.P;
CU=CU-1;}while(((CU<0)&&!!AY.R)&&(AY.R.CG>=EF)){AY=AY.R;CU=CU+1;}if((BF===I)&&(AY===
I))return;if(((I.F&0x401)===0x401)){if(!!I.R&&!!I.Al)I.R.F=I.R.F|0x800;I.F=I.F|0x800;
this.F=this.F|0x4000;B.lz([this,this.Bq],this);}if(((I.F&0x200)===0x200)){if(!!I.
R)I.R.F=I.R.F|0x800;I.F=I.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bq],this);
}if(!!I.R)I.R.P=I.P;if(!!I.P)I.P.R=I.R;if(this.An===I)this.An=I.P;if(this.Ao===I
)this.Ao=I.R;if(BF!==I){I.P=BF.P;I.R=BF;BF.P=I;if(!!I.P)I.P.R=I;}if(AY!==I){I.P=
AY;I.R=AY.R;AY.R=I;if(!!I.R)I.R.P=I;}if(!I.P)this.Ao=I;if(!I.R)this.An=I;if(((I.
F&0x1)===0x1))this.Am(I.GetExtent());},Fl:function(I){var A;if(!I)throw new Error(
Gd);if(I.G!==this)throw new Error(Fo);if((((I.F&0x401)===0x401)&&!!I.R)&&!!I.Al){
I.R.F=I.R.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bq],this);}if(((I.F&0x200
)===0x200)){if(!!I.R)I.R.F=I.R.F|0x800;this.F=this.F|0x4000;B.lz([this,this.Bq],
this);}I.Al=null;if(this.B3===I)this.C_(this.J8(I,0x14));if(!!I.R)I.R.P=I.P;if(!
!I.P)I.P.R=I.R;if(this.An===I)this.An=I.P;if(this.Ao===I)this.Ao=I.R;I.G=null;I.
P=null;I.R=null;if(((I.F&0x1)===0x1))this.Am(I.GetExtent());},Af:function(I,CU){
var A;if(!I)throw new Error(Ge);if(!!I.G)throw new Error(G6);var AY=null;var EF=
I.CG;if(((CU<0)&&!!this.Ao)&&(this.Ao.CG>=EF)){AY=this.Ao;CU=CU+1;}while((((CU<0
)&&!!AY)&&!!AY.R)&&(AY.R.CG>=EF)){AY=AY.R;CU=CU+1;}if((!AY&&!!this.Ao)&&(this.Ao.
CG>EF))AY=this.Ao;while((!!AY&&!!AY.R)&&(AY.R.CG>EF))AY=AY.R;if(!AY){I.G=this;I.
R=this.Ao;if(!!this.Ao)this.Ao.P=I;if(!this.An)this.An=I;this.Ao=I;}else{I.G=this;
I.R=AY.R;I.P=AY;AY.R=I;if(!!I.R)I.R.P=I;else this.An=I;}if(((I.F&0x1)===0x1))this.
Am(I.GetExtent());if(((!this.B3&&((I.F&0x4)===0x4))&&((I.F&0x10)===0x10))&&!((I.
F&0x10000)===0x10000))this.C_(I);if(((I.F&0x401)===0x401)){I.F=I.F|0x800;this.F=
this.F|0x4000;B.lz([this,this.Bq],this);}if(((I.F&0x200)===0x200)){I.F=I.F|0x800;
this.F=this.F|0x4000;B.lz([this,this.Bq],this);}},L2:function(){return this.Db;}
,_Init:function(aArg){C.Bd._Init.call(this,aArg);this.__proto__=C.J;this.F=0x1F;
this.Bo(aArg);},_Mark:function(E){var A;C.Bd._Mark.call(this,E);if((A=this.An)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ao)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ir)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.AT)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.CZ)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
FF)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B3)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Core::Group"};C.Root={Cr:null,AF:B.tY(10,null,null),Gl:null,Em:
null,HA:0,AS:0,BB:B.tY(10,0,null),Ii:B.tY(10,B.qL,null),CY:B.tY(10,0,null),DR:B.
tY(10,B.qK,null),Gn:B.tY(10,0,null),El:B.tY(10,B.qK,null),CX:B.tY(10,B.qK,null),
Co:B.tY(10,B.qK,null),Dt:B.tY(10,B.qK,null),Aj:0,Im:0,Il:0,BL:B.tY(4,0,null),Bm:
B.tY(4,B.qL,null),Bk:0,Hn:0,Gr:0,JH:true,IU:function(){return this;},CN:function(
AQ,aClip,aOffset,AC,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.jO;if(
!fullScreenUpdate)AQ.IP(aClip,B.tX(B.tX(aClip,aOffset),this.S.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);C.J.CN.call(this,AQ,aClip,aOffset,AC,aBlend
);},AJ:function(Ek,Fq){var A;C.J.AJ.call(this,Ek,Fq);if(!this.G&&(((Ek&0x1)===0x1
)||((Fq&0x1)===0x1)))this.Am([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
Ek&0x2)===0x2)||((Fq&0x2)===0x2)))this.Am([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},
C_:function(D){if((D!==null)||!D)C.J.C_.call(this,D);},Fk:function(D){var A;var Nh=
this.Db;C.J.Fk.call(this,D);if(((Nh!==this.Db)&&!this.G)&&((this.F&0x1)===0x1))this.
Am([0,0,(A=this.S)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Ah){if(!!Ah){Ah.
GO=!!this.AS;if(!!this.AS)Ah.AV=this.AS;}var AN;AN=C.J.DispatchEvent.call(this,Ah
);this.AS=0;return AN;},BroadcastEvent:function(Ah,Cy){if(!!Ah){Ah.GO=!!this.AS;
if(!!this.AS)Ah.AV=this.AS;}var AN=C.J.BroadcastEvent.call(this,Ah,Cy);this.AS=0;
return AN;},Am:function(Ag){var A;if(this.HA>0)throw new Error(Gf);var fullScreenUpdate=
false;fullScreenUpdate=B.jO;if(fullScreenUpdate)Ag=[0,0,(A=this.S)[2]-A[0],A[3]-
A[1]];if(!!this.G){C.J.Am.call(this,Ag);return;}Ag=B.it(B.tX(Ag,this.S.slice(0,2
)),this.S);if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var K;for(K=0;K<this.Bk;K=K+
1)if(!(((A=B.it(this.Bm.Get(K),Ag))[0]>=A[2])||(A[1]>=A[3]))){this.Bm.Set(K,B.q5(
this.Bm.Get(K),Ag));this.BL.Set(K,B.tr(this.Bm.Get(K)));return;}if(this.Bk<3){this.
Bm.Set(this.Bk,Ag);this.BL.Set(this.Bk,B.tr(Ag));this.Bk=this.Bk+1;return;}var AI;
var Cb;var Hm=0;var Ho=0;var K$=2147483647;this.Bm.Set(this.Bk,Ag);this.BL.Set(this.
Bk,B.tr(Ag));for(AI=0;AI<=this.Bk;AI=AI+1)for(Cb=AI+1;Cb<=this.Bk;Cb=Cb+1){var IA=
B.tr(B.q5(this.Bm.Get(AI),this.Bm.Get(Cb)));var LC=((IA<<8)/(this.BL.Get(AI)+this.
BL.Get(Cb)))|0;if(LC<K$){K$=LC;Hm=AI;Ho=Cb;}}this.Bm.Set(Hm,B.q5(this.Bm.Get(Hm)
,this.Bm.Get(Ho)));this.BL.Set(Hm,B.tr(this.Bm.Get(Hm)));if(Ho!==this.Bk){this.Bm.
Set(Ho,this.Bm.Get(this.Bk));this.BL.Set(Ho,this.BL.Get(this.Bk));}},M5:function(
){var BC=B._NewObject(C.GE,0);BC.GO=!!this.AS;if(!!this.AS)BC.AV=this.AS;return BC;
},Ft:function(){var BC=B._NewObject(C.GC,0);BC.GO=!!this.AS;if(!!this.AS)BC.AV=this.
AS;return BC;},Gm:function(){var BC=B._NewObject(C.IF,0);BC.GO=!!this.AS;if(!!this.
AS)BC.AV=this.AS;return BC;},M6:function(Ak){var K;var Fw=false;for(K=0;K<10;K=K+
1)if(!!this.AF.Get(K)){var U=this.Co.Get(K);var X=this.AF.Get(K).G;while(!!X&&(X
!==this)){U=B.tU(U,X.S.slice(0,2));X=X.G;}if(!X&&(this.AF.Get(K)!==this)){var tmp=
this.AF.Get(K);this.Aj=K;this.AF.Set(K,null);tmp.Br(this.Ft().InitializeUp(K,this.
El.Get(K),this.DR.Get(K),this.CY.Get(K),this.BB.Get(K)+1,this.CX.Get(K),false,this.
Co.Get(K),this.Dt.Get(K)));this.BroadcastEvent(this.Gm().InitializeUp(K,this.BB.
Get(K)+1,false,tmp,this.Co.Get(K)),0x18);}else{this.CY.Set(K,(this.Em.AV-this.Gn.
Get(K))|0);if(this.CY.Get(K)<10)this.CY.Set(K,10);this.Aj=K;this.AF.Get(K).Br(this.
Ft().InitializeHold(K,U,this.DR.Get(K),this.CY.Get(K),this.BB.Get(K)+1,this.CX.Get(
K),this.Co.Get(K),this.Dt.Get(K)));Fw=true;}}if(!Fw)this.Em.AA(false);},GetFPS:function(
){var ticksCount=0;var Lj=0;ticksCount=((new Date).getTime()-B.qG)|0;if(!!this.Im&&(
ticksCount>this.Im))Lj=((this.Il*1000)/((ticksCount-this.Im)|0))|0;this.Il=0;this.
Im=ticksCount;return Lj;},Update:function(){var A;if(!this.Gl)this.Gl=B._NewObject(
B.Graphics.Canvas,0);this.Gl.Kv([(A=this.S)[2]-A[0],A[3]-A[1]]);this.Gl.Update();
return this.UpdateGE20(this.Gl);},UpdateGE20:function(AQ){if(!this.BeginUpdate()
)return AE;var D2=this.UpdateCanvas(AQ,Az);this.EndUpdate();return D2;},EndUpdate:
function(){if(this.Bk>0){this.Il=this.Il+1;this.Bk=0;}},UpdateCanvas:function(AQ
,aOffset){var A;var D2=AE;var M0=[].concat(aOffset,B.tV(AQ.FrameSize,aOffset));var
K;var AI=this.Bk;this.HA=this.HA+1;for(K=0;(K<AI)&&(K<4);K=K+1)if(this.BL.Get(K)>
0){this.CN(AQ,B.tW(this.Bm.Get(K),aOffset),[-aOffset[0],-aOffset[1]],255,true);D2=
B.q5(D2,B.it(M0,this.Bm.Get(K)));}else AI=AI+1;this.HA=this.HA-1;if(!((D2[0]>=D2[
2])||(D2[1]>=D2[3])))return B.tW(D2,aOffset);else return D2;},GetUpdateRegion:function(
H_){var K;var AI=this.Bk;if(H_<0)return AE;for(K=0;(K<AI)&&(K<4);K=K+1)if(!this.
BL.Get(K)){AI=AI+1;H_=H_+1;}else if(K===H_)return this.Bm.Get(K);return AE;},BeginUpdate:
function(){var K;var AI;var Cb;for(AI=0;AI<(this.Bk-1);AI=AI+1)if(this.BL.Get(AI
)>0)for(Cb=AI+1;Cb<this.Bk;Cb=Cb+1)if(this.BL.Get(Cb)>0){var IA=B.tr(B.q5(this.Bm.
Get(AI),this.Bm.Get(Cb)));if(((IA-this.BL.Get(AI))-this.BL.Get(Cb))<0){this.Bm.Set(
AI,B.q5(this.Bm.Get(AI),this.Bm.Get(Cb)));this.BL.Set(AI,IA);this.BL.Set(Cb,0);}
}for(K=this.Bk-1;K>=0;K=K-1)if(!this.BL.Get(K))this.Bk=this.Bk-1;return this.Bk;
},DoesNeedUpdate:function(){if(this.Bk>0)return true;return false;},Initialize:function(
aSize){this.V([].concat(Az,aSize));if(this.JH)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Am(this.S);return this;},SetRootFocus:function(Jx){if(Jx===this.JH)return false;
this.JH=Jx;if(!Jx)this.AJ(0x0,0x40);else this.AJ(0x40,0x0);return true;},SetUserInputTimestamp:
function(MV){this.AS=MV;},DriveKeyboardHitting:function(A_,G_,De){var A;var JY=!
!this.Cr;if(!!this.Cr&&((!De||(this.Hn!==A_))||(this.Gr!==G_))){var BC=null;var M=(
C.BO.isPrototypeOf(A=this.Cr)?A:null);var Dh=(C.GP.isPrototypeOf(A=this.Cr)?A:null
);if(!!this.Hn)BC=B._NewObject(C.KeyEvent,0).Initialize(this.Hn,false);if(this.Gr
!==0x00)BC=B._NewObject(C.KeyEvent,0).Initialize2(this.Gr,false);if(!!Dh)Dh.Br(BC
);else if(!!M)M.Br(BC);this.Hn=0;this.Gr=0x00;this.Cr=null;}if(!!this.Cr){var BC=
null;var M=(C.BO.isPrototypeOf(A=this.Cr)?A:null);var Dh=(C.GP.isPrototypeOf(A=this.
Cr)?A:null);if(!!A_)BC=B._NewObject(C.KeyEvent,0).Initialize(A_,true);if(this.Gr
!==0x00)BC=B._NewObject(C.KeyEvent,0).Initialize2(G_,true);if(!!Dh)Dh.Br(BC);else
if(!!M)M.Br(BC);}if(!this.Cr&&De){if(!!A_)this.Cr=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize(A_,true));if(G_!==0x00)this.Cr=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize2(G_,true));if(!(C.GP.isPrototypeOf(A=this.Cr)?A:null)&&
!(C.BO.isPrototypeOf(A=this.Cr)?A:null))this.Cr=null;this.Hn=A_;this.Gr=G_;JY=JY||
!!this.Cr;}this.AS=0;return JY;},DriveCursorMovement:function(Bv){return this.DriveMultiTouchMovement(
this.Aj,Bv);},DriveMultiTouchMovement:function(O,Bv){if((O<0)||(O>9)){this.AS=0;
return false;}var Bc=B.tU(Bv,this.Co.Get(O));this.Co.Set(O,Bv);if(!this.AF.Get(O
)||B.tH(Bc,Az)){this.AS=0;return false;}var U=Bv;var X=this.AF.Get(O).G;while(!!
X&&(X!==this)){U=B.tU(U,X.S.slice(0,2));X=X.G;}if(!X&&(this.AF.Get(O)!==this)){var
tmp=this.AF.Get(O);this.Aj=O;this.AF.Set(O,null);tmp.Br(this.Ft().InitializeUp(O
,this.El.Get(O),this.DR.Get(O),this.CY.Get(O),this.BB.Get(O)+1,this.CX.Get(O),false
,this.Co.Get(O),this.Dt.Get(O)));this.BroadcastEvent(this.Gm().InitializeUp(O,this.
BB.Get(O)+1,false,tmp,Bv),0x18);}else{this.El.Set(O,U);this.Aj=O;this.AF.Get(O).
Br(this.M5().Initialize(O,U,this.DR.Get(O),Bc,this.CY.Get(O),this.BB.Get(O)+1,this.
CX.Get(O),Bv,this.Dt.Get(O)));}this.AS=0;return true;},DriveCursorHitting:function(
De,O,Bv){return this.DriveMultiTouchHitting(De,O,Bv);},DriveMultiTouchHitting:function(
De,O,Bv){if((O<0)||(O>9)){this.AS=0;return false;}var ticksCount=this.AS;if(!ticksCount
)ticksCount=((new Date).getTime()-B.qG)|0;var NC=this.AS;this.DriveMultiTouchMovement(
O,Bv);Bv=this.Co.Get(O);this.AS=NC;if(De)this.Dt.Set(O,Bv);if(De&&!this.AF.Get(O
)){var C0;var U=Bv;if(B.qH(this.Ii.Get(O),Bv)&&((ticksCount-this.Gn.Get(O))<=250
))this.BB.Set(O,this.BB.Get(O)+1);else this.BB.Set(O,0);this.Ii.Set(O,B.tX(E0,Bv
));this.Gn.Set(O,ticksCount);C0=this.Fg(B.tX(E0,Bv),O,this.BB.Get(O)+1,null,0x0);
if(!!C0){this.BroadcastEvent(this.Gm().InitializeDown(O,this.BB.Get(O)+1,false,C0.
BO,Bv),0x18);this.AF.Set(O,C0.BO);this.CX.Set(O,C0.D$);}else{this.AF.Set(O,null);
this.CX.Set(O,Az);this.AS=0;return false;}var X=C0.BO.G;while(!!X&&(X!==this)){U=
B.tU(U,X.S.slice(0,2));X=X.G;}this.DR.Set(O,U);this.El.Set(O,U);this.CY.Set(O,0);
this.Em.AA(true);this.Aj=O;this.AF.Get(O).Br(this.Ft().InitializeDown(O,U,this.BB.
Get(O)+1,this.CX.Get(O),false,Bv));this.AS=0;return true;}if(!De&&!!this.AF.Get(
O)){var U=Bv;var X=this.AF.Get(O).G;while(!!X&&(X!==this)){U=B.tU(U,X.S.slice(0,
2));X=X.G;}if(!X)U=this.El.Get(O);this.Aj=O;var tmp=this.AF.Get(O);this.AF.Set(O
,null);tmp.Br(this.Ft().InitializeUp(O,U,this.DR.Get(O),this.CY.Get(O),this.BB.Get(
O)+1,this.CX.Get(O),false,Bv,this.Dt.Get(O)));this.BroadcastEvent(this.Gm().InitializeUp(
O,this.BB.Get(O)+1,false,tmp,Bv),0x18);this.AS=0;return true;}this.AS=0;return false;
},K1:function(DN,K9,Fs){if(DN===this)DN=null;if(!this.AF.Get(this.Aj))return;var
C0;C0=this.Fg(B.tX(E0,this.Co.Get(this.Aj)),this.Aj,1,DN,Fs);if(!!C0&&(this.AF.Get(
this.Aj)!==C0.BO))this.J6(C0.BO,C0.D$);if(!C0&&(this.AF.Get(this.Aj)!==K9))this.
J6(K9,Az);},J6:function(DN,CT){if(!this.AF.Get(this.Aj)||(this.AF.Get(this.Aj)===
DN))return;var tmp=this.AF.Get(this.Aj);this.AF.Set(this.Aj,null);tmp.Br(this.Ft(
).InitializeUp(this.Aj,this.El.Get(this.Aj),this.DR.Get(this.Aj),this.CY.Get(this.
Aj),this.BB.Get(this.Aj)+1,this.CX.Get(this.Aj),true,this.Co.Get(this.Aj),this.Dt.
Get(this.Aj)));this.BroadcastEvent(this.Gm().InitializeUp(this.Aj,this.BB.Get(this.
Aj)+1,true,tmp,this.Co.Get(this.Aj)),0x18);var U=this.Co.Get(this.Aj);var X=null;
if(!!DN)X=DN.G;while(!!X&&(X!==this)){U=B.tU(U,X.S.slice(0,2));X=X.G;}if(!X&&(DN
!==this)){this.AF.Set(this.Aj,null);return;}this.BroadcastEvent(this.Gm().InitializeDown(
this.Aj,this.BB.Get(this.Aj)+1,true,DN,this.Co.Get(this.Aj)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-B.qG)|0;this.AF.Set(this.Aj,DN);this.CX.Set(this.
Aj,CT);this.DR.Set(this.Aj,U);this.El.Set(this.Aj,U);this.BB.Set(this.Aj,0);this.
CY.Set(this.Aj,0);this.Gn.Set(this.Aj,ticksCount);this.Dt.Set(this.Aj,this.Co.Get(
this.Aj));this.AF.Get(this.Aj).Br(this.Ft().InitializeDown(this.Aj,U,this.BB.Get(
this.Aj)+1,this.CX.Get(this.Aj),true,this.Dt.Get(this.Aj)));},_Init:function(aArg
){C.J._Init.call(this,aArg);C.Timer._Init.call(this.Em={T:this},0);(this.AF=[]).
__proto__=C.Root.AF;(this.BB=[]).__proto__=C.Root.BB;(this.Ii=[]).__proto__=C.Root.
Ii;(this.CY=[]).__proto__=C.Root.CY;(this.DR=[]).__proto__=C.Root.DR;(this.Gn=[]
).__proto__=C.Root.Gn;(this.El=[]).__proto__=C.Root.El;(this.CX=[]).__proto__=C.
Root.CX;(this.Co=[]).__proto__=C.Root.Co;(this.Dt=[]).__proto__=C.Root.Dt;(this.
BL=[]).__proto__=C.Root.BL;(this.Bm=[]).__proto__=C.Root.Bm;this.__proto__=C.Root;
this.F=0x7F;this.Em.GU(50);this.Em.FU=[this,this.M6];},_Done:function(){this.__proto__=
C.J;this.Em._Done();C.J._Done.call(this);},_ReInit:function(){C.J._ReInit.call(this
);this.Em._ReInit();},_Mark:function(E){var A;C.J._Mark.call(this,E);if((A=this.
Cr)&&(A._cycle!=E))A._Mark(A._cycle=E);B.tQ(this.AF,E);if((A=this.Gl)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.Em)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Core::Root"};C.Event={AV:0,GO:false,Bo:function(aArg){this.AV=this.GK();},GK:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.qG)|0;return ticksCount;},
_Init:function(aArg){this.__proto__=C.Event;this.Bo(aArg);B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={A3:0,Aq:0,Down:false,Initialize2:function(A_,De){this.
A3=0;this.Aq=A_;this.Down=De;if((A_>=0x30)&&(A_<=0x39))this.A3=(10+A_)-48;if((A_>=
0x41)&&(A_<=0x5A))this.A3=(105+A_)-65;if((A_>=0x61)&&(A_<=0x7A))this.A3=(105+A_)-
97;if(A_===0x20)this.A3=131;if(!this.A3)switch(A_){case 0x2B:this.A3=132;break;case
0x2D:this.A3=133;break;case 0x2A:this.A3=134;break;case 0x2F:this.A3=135;break;case
0x3D:this.A3=136;break;case 0x2E:this.A3=137;break;case 0x2C:this.A3=138;break;case
0x3A:this.A3=139;break;case 0x3B:this.A3=140;break;default:;}return this;},Initialize:
function(A_,De){this.A3=A_;this.Down=De;this.Aq=0x00;var JC=A_-10;var JB=A_-105;
if((JC>=0)&&(JC<=9))this.Aq=(48+JC)&0xFFFF;if((JB>=0)&&(JB<=25))this.Aq=(65+JB)&
0xFFFF;if(A_===131)this.Aq=0x20;if(this.Aq===0x00)switch(A_){case 132:this.Aq=0x2B;
break;case 133:this.Aq=0x2D;break;case 134:this.Aq=0x2A;break;case 135:this.Aq=0x2F;
break;case 136:this.Aq=0x3D;break;case 137:this.Aq=0x2E;break;case 138:this.Aq=0x2C;
break;case 139:this.Aq=0x3A;break;case 140:this.Aq=0x3B;break;default:;}return this;
},LX:function(K8){switch(K8){case 141:return((this.Aq>=0x41)&&(this.Aq<=0x5A))||((
this.Aq>=0x61)&&(this.Aq<=0x7A));case 142:return(((this.Aq>=0x41)&&(this.Aq<=0x5A
))||((this.Aq>=0x61)&&(this.Aq<=0x7A)))||((this.Aq>=0x30)&&(this.Aq<=0x39));case
143:return(this.Aq>=0x30)&&(this.Aq<=0x39);case 144:return(((this.Aq>=0x41)&&(this.
Aq<=0x46))||((this.Aq>=0x61)&&(this.Aq<=0x66)))||((this.Aq>=0x30)&&(this.Aq<=0x39
));case 145:return this.Aq!==0x00;case 146:return(this.Aq===0x00)&&!!this.A3;case
147:return(((this.A3===6)||(this.A3===7))||(this.A3===4))||(this.A3===5);case 148:
return(this.Aq!==0x00)||!!this.A3;default:;}return K8===this.A3;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.IF={Jp:null,ET:B.qK,CS:0,Bn:0,Down:false,Ct:false,InitializeUp:function(O,B7
,Fp,Jz,Df){this.Down=false;this.Bn=O;this.CS=B7;this.ET=Df;this.Jp=Jz;this.Ct=Fp;
return this;},InitializeDown:function(O,B7,Fp,Jz,Df){this.Down=true;this.Bn=O;this.
CS=B7;this.ET=Df;this.Jp=Jz;this.Ct=Fp;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.IF;},_Mark:function(E){var A;C.Event._Mark.
call(this,E);if((A=this.Jp)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};C.GC={GM:B.qK,ET:B.qK,CS:0,BE:0,B4:B.qK,Ci:B.qK,Bn:0,Down:false,Ct:false,InitializeHold:
function(O,E1,Ha,Hb,B7,CT,Df,G$){this.Down=true;this.Bn=O;this.Ci=B.tV(E1,CT);this.
B4=B.tV(Ha,CT);this.BE=Hb;this.CS=B7;this.ET=Df;this.GM=G$;return this;},InitializeUp:
function(O,E1,Ha,Hb,B7,CT,Fp,Df,G$){this.Down=false;this.Bn=O;this.Ci=B.tV(E1,CT
);this.B4=B.tV(Ha,CT);this.BE=Hb;this.CS=B7;this.Ct=Fp;this.ET=Df;this.GM=G$;return this;
},InitializeDown:function(O,E1,B7,CT,Fp,Df){this.Down=true;this.Bn=O;this.Ci=B.tV(
E1,CT);this.B4=B.tV(E1,CT);this.BE=0;this.CS=B7;this.Ct=Fp;this.ET=Df;this.GM=Df;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.GC;},_className:"Core::CursorEvent"};C.GE={GM:B.qK,ET:B.qK,CS:0,BE:0,D$:B.qK,B4:
B.qK,Ci:B.qK,Bn:0,Initialize:function(O,E1,Ha,aOffset,Hb,MU,CT,Df,G$){this.Bn=O;
this.Ci=B.tV(E1,CT);this.B4=B.tV(Ha,CT);this.D$=aOffset;this.BE=Hb;this.CS=MU;this.
ET=Df;this.GM=G$;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg
);this.__proto__=C.GE;},_className:"Core::DragEvent"};C.HX={CN:function(AQ,aClip
,aOffset,AC,aBlend){},V:function(D){var A;if(B.tI(D,this.S))return;var E9=[(A=this.
S)[2]-A[0],A[3]-A[1]];var JP=[D[2]-D[0],D[3]-D[1]];var Gx=!B.tH(E9,JP);var Bc=B.
tU(D.slice(0,2),this.S.slice(0,2));if(!B.tH(Bc,Az)&&!Gx){var M=this.P;while(!!M&&
!((M.F&0x200)===0x200)){if(((M.F&0x400)===0x400)){var tmp=((M.F&0x100)===0x100);
M.HQ(Bc,tmp);}M=M.P;}}if((Gx&&(E9[0]>0))&&(E9[1]>0)){var Aa=this.S;var M=this.P;
while(!!M&&!((M.F&0x200)===0x200)){if(((M.F&0x400)===0x400)){if(!!M.Al&&(M.Al.E_
!==this))M.Al=null;if(!M.Al&&(M.CQ!==0x14))M.Gq(Aa,this);}M=M.P;}}C.Bd.V.call(this
,D);if(!!this.G&&Gx){this.F=this.F|0x1000;if(!((this.G.F&0x2000)===0x2000)){this.
G.F=this.G.F|0x4000;B.lz([A=this.G,A.Bq],this);}}},_Init:function(aArg){C.Bd._Init.
call(this,aArg);this.__proto__=C.HX;this.F=0x203;},_className:"Core::Outline"};C.
AD={Ja:null,Dn:null,Fj:null,Ck:null,Y:0,Bn:0,AV:0,CS:0,BE:0,D$:B.qK,B4:B.qK,Ci:B.
qK,Mi:8,Ke:1,Down:false,Dm:false,Ct:false,CN:function(AQ,aClip,aOffset,AC,aBlend
){},Br:function(Ah){var A;var Ab=(C.GC.isPrototypeOf(Ah)?Ah:null);var Bh=(C.GE.isPrototypeOf(
Ah)?Ah:null);var In=this.Dm;var DB;var Di;var Hz;var BX;var Fv;if(!Ab&&!Bh)return null;
DB=(!!Ab&&Ab.Down)&&!Ab.BE;Di=(!!Ab&&Ab.Down)&&(Ab.BE>0);Hz=(!!Ab&&Ab.Down)&&(Ab.
BE>50);BX=!!Ab&&!Ab.Down;Fv=!!Bh;if(DB){var FB=0;var Du;this.Y=this.Y|(1<<Ab.Bn);
for(Du=this.Y&4095;Du>0;Du=Du>>1)if(!!(Du&1))FB=FB+1;if(FB===1)this.Y=(this.Y|16777216
)|(4096<<Ab.Bn);}if(BX)this.Y=(this.Y&~(1<<Ab.Bn))|33554432;if(Hz&&(this.Y<16777216
))this.Y=this.Y|67108864;if(BX&&Ab.Ct)this.Y=this.Y|67108864;if(BX&&!(this.Y&16777215
))this.Y=0;if(Di&&(this.Y>=67108864))this.IU().K1(null,null,0x0);if((Di&&!!(this.
Y&16777216))&&!!(this.Y&33554432)){Di=false;BX=true;}if(!!Ab&&!(this.Y&(4096<<Ab.
Bn)))return this;if(!!Bh&&!(this.Y&(4096<<Bh.Bn)))return this;if(BX&&!(this.Y&16777216
))return this;if(((DB||Fv)||Di)&&((this.Y<16777216)||(this.Y>=33554432)))return this;
if(BX)this.Y=this.Y&3758100479;if(BX&&!(this.Y&16777215))this.Y=0;if(!!Ab){this.
Down=DB||Di;this.Dm=this.I0(Ab.Ci);this.B4=Ab.B4;this.Ci=Ab.Ci;this.D$=Az;this.BE=
Ab.BE;this.CS=Ab.CS;this.Ct=Ab.Ct;this.Bn=Ab.Bn;this.AV=Ab.AV;if(Ab.Down&&!Ab.BE
)In=false;}if(!!Bh){this.Down=true;this.Dm=this.I0(Bh.Ci);this.B4=Bh.B4;this.Ci=
Bh.Ci;this.D$=Bh.D$;this.BE=Bh.BE;this.CS=Bh.CS;this.Bn=Bh.Bn;this.Ct=false;this.
AV=Bh.AV;}if((!!Ab&&this.Down)&&!this.BE)(A=this.Ck)?A[1].call(A[0],this):null;if((
this.Down&&this.Dm)&&!In)(A=this.Dn)?A[1].call(A[0],this):null;if(((this.Down&&!
this.Dm)&&In)||((!this.Down&&this.Dm)&&In))(A=this.Ja)?A[1].call(A[0],this):null;
if(!!Ab&&!this.Down)(A=this.Fj)?A[1].call(A[0],this):null;return this;},Fg:function(
Ag,O,B7,Ei,Fs){var A;if(!!Ei&&(Ei!==this))return null;if((B7<1)||(B7>this.Ke))return null;
if(this.Y>=33554432)return null;if((this.Y>=16777216)&&!(this.Y&(4096<<O)))return null;
if(this.LV()){var Au=B.it(Ag,this.GetExtent());if(!((Au[0]>=Au[2])||(Au[1]>=Au[3
]))){var B8=B.ts(Ag);var Bc=Az;if(B8[0]<Au[0])Bc=[Au[0]-B8[0],Bc[1]];if(B8[0]>=Au[
2])Bc=[(Au[2]-B8[0])-1,Bc[1]];if(B8[1]<Au[1])Bc=[Bc[0],Au[1]-B8[1]];if(B8[1]>=Au[
3])Bc=[Bc[0],(Au[3]-B8[1])-1];return B._NewObject(C.HG,0).Initialize(this,Bc);}}
else{var AH=B.tY(9,B.qK,null);var K;AH.Set(0,B.ts(Ag));AH.Set(1,AH.Get(0));AH.Set(
2,AH.Get(0));AH.Set(3,AH.Get(0));AH.Set(4,AH.Get(0));AH.Set(1,[Ag[0],AH.Get(1)[1
]]);AH.Set(2,[AH.Get(2)[0],Ag[1]]);AH.Set(3,[Ag[2],AH.Get(3)[1]]);AH.Set(4,[AH.Get(
4)[0],Ag[3]]);AH.Set(5,Ag.slice(0,2));AH.Set(6,[Ag[2],Ag[1]]);AH.Set(7,[Ag[0],Ag[
3]]);AH.Set(8,Ag.slice(2,4));for(K=0;K<9;K=K+1)if(this.I0(AH.Get(K)))return B._NewObject(
C.HG,0).Initialize(this,B.tU(AH.Get(K),AH.Get(0)));}return null;},Ma:function(D){
if(D<1)D=1;this.Mi=D;},L$:function(D){if(D<1)D=1;this.Ke=D;},AA:function(D){if(D
)this.AJ(0x10,0x0);else this.AJ(0x0,0x10);},_Init:function(aArg){C.G1._Init.call(
this,aArg);this.__proto__=C.AD;this.F=0x11B;},_Mark:function(E){var A;C.G1._Mark.
call(this,E);if((A=this.Ja)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.
Dn)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fj)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Ck)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
},_className:"Core::SimpleTouchHandler"};C.Bp={I_:null,Jc:null,Jb:null,Y:0,B4:B.
qK,I9:1,C8:0,Down:false,Dm:false,Ct:false,CN:function(AQ,aClip,aOffset,AC,aBlend
){},Br:function(Ah){var A;var Ab=(C.GC.isPrototypeOf(Ah)?Ah:null);var Bh=(C.GE.isPrototypeOf(
Ah)?Ah:null);var DB;var Di;var Hz;var BX;var Fv;if(!Ab&&!Bh)return null;DB=(!!Ab&&
Ab.Down)&&!Ab.BE;Di=(!!Ab&&Ab.Down)&&(Ab.BE>0);Hz=(!!Ab&&Ab.Down)&&(Ab.BE>50);BX=
!!Ab&&!Ab.Down;Fv=!!Bh;if(DB){var FB=0;var Du;this.Y=this.Y|(1<<Ab.Bn);for(Du=this.
Y&4095;Du>0;Du=Du>>1)if(!!(Du&1))FB=FB+1;if(FB===this.I9)this.Y=(this.Y|16777216
)|(4096<<Ab.Bn);}if(BX)this.Y=(this.Y&~(1<<Ab.Bn))|33554432;if(Hz&&(this.Y<16777216
))this.Y=this.Y|67108864;if(BX&&Ab.Ct)this.Y=this.Y|67108864;if(BX&&!(this.Y&16777215
))this.Y=0;if(Di&&(this.Y>=67108864))this.IU().K1(null,null,0x0);if((Di&&!!(this.
Y&16777216))&&!!(this.Y&33554432)){Di=false;BX=true;}if(!!Ab&&!(this.Y&(4096<<Ab.
Bn)))return this;if(!!Bh&&!(this.Y&(4096<<Bh.Bn)))return this;if(BX&&!(this.Y&16777216
))return this;if(((DB||Fv)||Di)&&((this.Y<16777216)||(this.Y>=33554432)))return this;
if(BX)this.Y=this.Y&3758100479;if(BX&&!(this.Y&16777215))this.Y=0;if(DB||BX){this.
Dm=B.qH(this.S,Ab.Ci);this.Ct=Ab.Ct;this.B4=Ab.B4;this.Down=DB;}if(Fv){this.Dm=B.
qH(this.S,Bh.Ci);this.B4=Bh.B4;this.Down=true;}if(DB)this.C8=0;var DS=this.C8;if(
Fv){var Hj=Bh.Ci[0]-Bh.B4[0];var Hk=Bh.Ci[1]-Bh.B4[1];var Lq=((((A=this.S)[2]-A[
0])*25)/100)|0;var Lp=((((A=this.S)[3]-A[1])*25)/100)|0;var Au=0.000000;if((((Hj>=
Lq)||(Hj<=-Lq))||(Hk>=Lp))||(Hk<=-Lp))Au=Math.sqrt((Hj*Hj)+(Hk*Hk));if(Au>=8.000000
){var BQ=(Math.acos(Hj/Au)*B.ns)|0;if(Hk>0)BQ=360-BQ;if((BQ<=22)||(BQ>=338))DS=7;
if((BQ>=68)&&(BQ<=112))DS=4;if((BQ>=158)&&(BQ<=202))DS=2;if((BQ>=248)&&(BQ<=292)
)DS=5;if((BQ>22)&&(BQ<68))DS=6;if((BQ>112)&&(BQ<158))DS=1;if((BQ>202)&&(BQ<248))
DS=3;if((BQ>292)&&(BQ<338))DS=8;}}if(!this.C8){this.C8=DS;switch(DS){case 5:(A=this.
I_)?A[1].call(A[0],this):null;break;case 2:(A=this.Jb)?A[1].call(A[0],this):null;
break;case 7:(A=this.Jc)?A[1].call(A[0],this):null;break;case 4:break;case 3:break;
case 8:break;case 1:break;case 6:break;default:;}}return this;},Fg:function(Ag,O
,B7,Ei,Fs){var A;if(!!Ei&&(Ei!==this))return null;if(this.Y>=33554432)return null;
if((this.Y>=16777216)&&!(this.Y&(4096<<O)))return null;var Au=B.it(Ag,this.S);if(
!((Au[0]>=Au[2])||(Au[1]>=Au[3]))){var B8=B.ts(Ag);var Bc=Az;if(B8[0]<Au[0])Bc=[
Au[0]-B8[0],Bc[1]];if(B8[0]>=Au[2])Bc=[(Au[2]-B8[0])-1,Bc[1]];if(B8[1]<Au[1])Bc=[
Bc[0],Au[1]-B8[1]];if(B8[1]>=Au[3])Bc=[Bc[0],(Au[3]-B8[1])-1];return B._NewObject(
C.HG,0).Initialize(this,Bc);}return null;},KO:function(D){if(D<1)D=1;if(D>5)D=5;
if(this.I9===D)return;this.I9=D;},_Init:function(aArg){C.Bd._Init.call(this,aArg
);this.__proto__=C.Bp;this.F=0x11B;},_Mark:function(E){var A;C.Bd._Mark.call(this
,E);if((A=this.I_)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Jc)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Jb)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);},_className:"Core::WipeTouchHandler"};C.GP={P:null,Fj:null,Ck:null,
FG:0,AV:0,K0:0,FN:148,A3:0,Aq:0,AK:true,Down:false,Jl:false,Bo:function(aArg){var
A;var Ax=(C.J.isPrototypeOf(A=this.T)?A:null);if(!Ax)throw new Error(G7);this.P=
Ax.Ir;Ax.Ir=this;},Br:function(Ah){var A;if(!!Ah&&Ah.LX(this.FN)){this.Down=Ah.Down;
this.A3=Ah.A3;this.Aq=Ah.Aq;this.AV=Ah.AV;if(Ah.Down){this.K0=this.FG;this.Jl=this.
FG>0;if(!this.Jl)(A=this.Ck)?A[1].call(A[0],this):null;this.FG=this.FG+1;return true;
}if(!Ah.Down){this.Jl=this.FG>1;this.K0=this.FG-1;this.FG=0;(A=this.Fj)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
C.GP;this.Bo(aArg);B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Fj)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ck)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=
E);},T:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};C.HG={BO:
null,GD:0,D$:B.qK,Initialize:function(I,aOffset){this.BO=I;this.D$=aOffset;this.
GD=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.HG;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.BO)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};C.FO={E_:null,Bx:B.qL,Aa:B.qL,isEmpty:false,_Init:
function(aArg){this.__proto__=C.FO;B.gx++;},_Done:function(){this.__proto__=null;
B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.E_)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.HN={Ev:B.qK,Eu:B.qK
,_Init:function(aArg){C.FO._Init.call(this,aArg);this.__proto__=C.HN;},_className:
"Core::LayoutLineContext"};C.HO={Hw:B.qK,Hv:B.qK,Ev:B.qK,Eu:B.qK,_Init:function(
aArg){C.FO._Init.call(this,aArg);this.__proto__=C.HO;},_className:"Core::LayoutQuadContext"
};C.IG={Ax:null,P:null,Cp:null,Cs:null,By:null,FD:null,_Init:function(aArg){this.
__proto__=C.IG;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(
){},_Mark:function(E){var A;if((A=this.Ax)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cp)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Cs)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.By)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.FD)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};C.K3={Cn:null,Ao:null,An:null,Lm:false,M3:function(
){if(!this.Cn)return;var CL=this.Cn;this.Cn.CK=null;this.Cn=null;B.lz([this,this.
JU],this);CL.Kg(this);},Nj:function(Ak){if(!!this.Cn)return;if(!this.An)return;this.
Cn=this.An;this.An=this.An.P;if(!!this.An)this.An.R=null;else this.Ao=null;this.
Cn.P=null;this.Lm=true;this.Cn.FT(this);this.Lm=false;},Np:function(Ak){B.lz([this
,this.Nj],this);},No:function(Ak){B.lz([this,this.Np],this);},JU:function(Ak){B.
lz([this,this.No],this);},LM:function(AX){if(!AX||!AX.CK)return;if(AX.CK!==this)
throw new Error(G8);var LK=false;if(this.Cn===AX){this.Cn=null;LK=true;B.lz([this
,this.JU],this);}else{if(!!AX.P)AX.P.R=AX.R;else this.Ao=AX.R;if(!!AX.R)AX.R.P=AX.
P;else this.An=AX.P;AX.R=null;AX.P=null;}AX.CK=null;if(LK)AX.Kf(this);},Mj:function(
AX,MZ){if(!AX)return;if(!!AX.CK)throw new Error(G9);AX.CK=this;if(MZ){AX.P=this.
An;if(!!this.An)this.An.R=AX;else this.Ao=AX;this.An=AX;}else{AX.R=this.Ao;if(!!
this.Ao)this.Ao.P=AX;else this.An=AX;this.Ao=AX;}if(!this.Cn)B.lz([this,this.JU]
,this);},_Init:function(aArg){this.__proto__=C.K3;B.gx++;},_Done:function(){this.
__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
Cn)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ao)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.An)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle!=E
))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};C.G4={CK:null,R:null,P:null,Kg:function(Hd){},Kf:function(Hd){},FT:function(Hd
){this.J4();},Dk:function(){if(!!this.CK&&(this.CK.Cn===this))this.CK.M3();},J4:
function(){if(!!this.CK)this.CK.LM(this);},IY:function(){return!!this.CK&&(this.
CK.Cn===this);},_Init:function(aArg){this.__proto__=C.G4;B.gx++;},_Done:function(
){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.CK)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.T)&&(A._cycle
!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:"Core::Task"
};C.Eb={resource:null,CM:function(){this.resource=null;},Bo:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=C.Eb;this.Bo(aArg);B.gx++;},
_Done:function(){this.CM();this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:
0,_observers:null,_className:"Core::Resource"};C.Timer={FU:null,timer:null,AV:0,
Period:1000,HF:0,AK:false,CM:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},Iv:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.sX(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},GU:function(D){if(D<0)D=0;if(D===this.Period)return;this.Period=D;if(this.
AK)this.Iv(this.HF,D);},GS:function(D){if(D<0)D=0;if(D===this.HF)return;this.HF=
D;if(this.AK)this.Iv(D,this.Period);},AA:function(D){if(D===this.AK)return;this.
AK=D;if(D)this.Iv(this.HF,this.Period);else this.Iv(0,0);this.AV=this.GK();},GK:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.qG)|0;return ticksCount;
},Trigger:function(){var A;this.AV=this.GK();if(!this.Period)this.AA(false);(A=this.
FU)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=C.Timer;B.gx++;
},_Done:function(){this.CM();this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.FU)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=
this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:
"Core::Timer"};C.O4={A4:0x1,NU:0x2,On:0x4,O2:0x8,AK:0x10,OS:0x20,Oo:0x40,Oy:0x80
,Om:0x100,Os:0x200,Of:0x400,OH:0x800,K4:0x1000,O3:0x2000,OC:0x4000,OD:0x8000,N_:
0x10000,OB:0x20000,OR:0x40000};C.CQ={OI:0x1,OJ:0x2,NO:0x4,NP:0x8,NQ:0x10,NN:0x20
};C.Oq={LY:0,OZ:1,N0:2,Ot:3,OL:4,O0:5,O1:6,N1:7,N2:8,Ov:9,Ou:10,ON:11,OM:12};C.C8={
LY:0,OX:1,Left:2,NY:3,Ml:4,LL:5,OY:6,Right:7,NZ:8};C.KeyCode={NoKey:0,Ok:1,Exit:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.OK={O8:0x1,O5:0x2,O6:0x4,O7:0x8,Ox:
0x10,Op:0x20};
C._Init=function(){C.FP.__proto__=C.BO;C.G1.__proto__=C.BO;C.Bd.__proto__=C.BO;C.
J.__proto__=C.Bd;C.Root.__proto__=C.J;C.KeyEvent.__proto__=C.Event;C.IF.__proto__=
C.Event;C.GC.__proto__=C.Event;C.GE.__proto__=C.Event;C.HX.__proto__=C.Bd;C.AD.__proto__=
C.G1;C.Bp.__proto__=C.Bd;C.HN.__proto__=C.FO;C.HO.__proto__=C.FO;};C._ReInit=function(
){};C.B6=function(E){};return C;})();

/* Embedded Wizard */