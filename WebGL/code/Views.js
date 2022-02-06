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
);if(EmWiApp.uP)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
uP=(function(){var B=EmWiApp;var C={};
var Az=[1,1];var AE=[0,0];var Bf="\uFEFF";var BP=[0,0,0,0];
C.Cu={ES:null,H9:1,H8:1,CN:function(AQ,aClip,aOffset,AC,aBlend){var A;var D0=this.
H8;var D1=this.H9;var Dz=B.tV(this.AP,aOffset);var DA=B.tV(this.AB,aOffset);var Hf;
var Hg;if(B.tH(Dz,DA))return;aBlend=aBlend&&((this.F&0x2)===0x2);AC=AC+1;Hf=Hg=0xFFFFFFFF;
if(AC<256){Hf=(Hf&0x00FFFFFF)|((((AC*255)>>8)&0xFF)<<24);Hg=(Hg&0x00FFFFFF)|((((
AC*255)>>8)&0xFF)<<24);}if((D0===1)&&(D1===1))AQ.LT(aClip,Dz,DA,Hf,Hg,aBlend);else
AQ.LU(aClip,Dz,DA,D0,D1,Hf,Hg,aBlend);},GetExtent:function(){var D0=this.H8;var D1=
this.H9;var Dz=this.AP;var DA=this.AB;if(((D0===1)&&(D1===1))||B.tH(Dz,DA))return B.
Core.FP.GetExtent.call(this);var Eq=D0/2.000000;var Er=D1/2.000000;var Fx=Dz[0];
var Fy=Dz[1];var Fz=DA[0];var FA=DA[1];var B_=Fz-Fx;var B$=FA-Fy;var Bb=Math.sqrt((
B_*B_)+(B$*B$));B_=B_/Bb;B$=B$/Bb;var Lc=Fx+(B$*Eq);var Ld=Fy-(B_*Eq);var Ib=Fz+(
B$*Er);var Ic=FA-(B_*Er);var Id=Fz-(B$*Er);var Ie=FA+(B_*Er);var If=Fx-(B$*Eq);var
Ig=Fy+(B_*Eq);var left=Lc;var right=Lc;var top=Ld;var bottom=Ld;if(Ib<left)left=
Ib;if(Id<left)left=Id;if(If<left)left=If;if(Ib>right)right=Ib;if(Id>right)right=
Id;if(If>right)right=If;if(Ic<top)top=Ic;if(Ie<top)top=Ie;if(Ig<top)top=Ig;if(Ic>
bottom)bottom=Ic;if(Ie>bottom)bottom=Ie;if(Ig>bottom)bottom=Ig;var Au=[left|0,top|
0,right|0,bottom|0];Au=[].concat(Au.slice(0,2),B.tV(Au.slice(2,4),Az));return Au;
},Hs:function(Ak){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent(
));},HU:function(D){var A;if(D<1)D=1;if((D===this.H8)&&(D===this.H9))return;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent());this.H8=D;this.H9=D;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.GetExtent());if((D!==1)&&!this.ES){
this.ES=B.tv(B.uO.H6);if(this.ES.FQ)B.sL([this,this.Hs],this.ES,0);}if((D===1)&&
!!this.ES){if(this.ES.FQ)B.sY([this,this.Hs],this.ES,0);this.ES=null;}},_Init:function(
aArg){B.Core.FP._Init.call(this,aArg);this.__proto__=C.Cu;},_Mark:function(E){var
A;B.Core.FP._Mark.call(this,E);if((A=this.ES)&&(A._cycle!=E))A._Mark(A._cycle=E);
},_className:"Views::Line"};C.Bt={C6:0xFFFFFFFF,CN:function(AQ,aClip,aOffset,AC,
aBlend){var A;var BT;var BU;var BR;var BS;var Cm=this.C6;aBlend=aBlend&&((this.F&
0x2)===0x2);AC=AC+1;BT=BU=BR=BS=Cm;if(AC<256){BT=(BT&0x00FFFFFF)|((((AC*((BT>>24
)&0xFF))>>8)&0xFF)<<24);BU=(BU&0x00FFFFFF)|((((AC*((BU>>24)&0xFF))>>8)&0xFF)<<24
);BR=(BR&0x00FFFFFF)|((((AC*((BR>>24)&0xFF))>>8)&0xFF)<<24);BS=(BS&0x00FFFFFF)|((((
AC*((BS>>24)&0xFF))>>8)&0xFF)<<24);}AQ.IP(aClip,B.tX(this.S,aOffset),BT,BU,BS,BR
,aBlend);},Do:function(D){var A;if(D===this.C6)return;this.C6=D;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Am(this.S);},Kh:function(D){if(D)this.AJ(0x2,0x0);else this.
AJ(0x0,0x2);},_Init:function(aArg){B.Core.Bd._Init.call(this,aArg);this.__proto__=
C.Bt;},_className:"Views::Rectangle"};C.IR={timer:null,A2:null,DQ:-1,C6:0xFFFFFFFF
,HK:0,AO:0,D3:false,CN:function(AQ,aClip,aOffset,AC,aBlend){var A;var Ep=this.HK;
if(this.DQ>=0)Ep=this.DQ;if(!this.A2||(Ep>=this.A2.NoOfFrames))return;this.A2.Update(
);var BT;var BU;var BS;var BR;var Cm=this.C6;var Dy=(((AC+1)*255)>>8)+1;var Au=B.
tX(this.S,aOffset);aBlend=aBlend&&((this.F&0x2)===0x2);BT=BU=BR=BS=Cm;if(Dy<256){
BT=(BT&0x00FFFFFF)|((((((BT>>24)&0xFF)*Dy)>>8)&0xFF)<<24);BU=(BU&0x00FFFFFF)|((((((
BU>>24)&0xFF)*Dy)>>8)&0xFF)<<24);BS=(BS&0x00FFFFFF)|((((((BS>>24)&0xFF)*Dy)>>8)&
0xFF)<<24);BR=(BR&0x00FFFFFF)|((((((BR>>24)&0xFF)*Dy)>>8)&0xFF)<<24);}AQ.LR(aClip
,this.A2,Ep,Au,0x1F,BT,BU,BS,BR,aBlend);},Hs:function(Ak){var A;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Am(this.S);},Fd:function(Ak){var A;var Ep=this.DQ;var Gu=0;
if(!!this.A2)Gu=this.A2.NoOfFrames*this.A2.FrameDelay;if((!!this.timer&&(this.DQ<
0))&&(Gu>0))this.AO=this.timer.AV-(this.HK*this.A2.FrameDelay);if(!!this.timer&&(
Gu>0)){var Z=(this.timer.AV-this.AO)|0;Ep=(Z/this.A2.FrameDelay)|0;if(Z>=Gu){Ep=
Ep%this.A2.NoOfFrames;this.AO=this.timer.AV-(Z%Gu);}}if(((Ep!==this.DQ)&&!!this.
G)&&((this.F&0x1)===0x1))this.G.Am(this.S);this.DQ=Ep;if(!Gu&&!!this.timer){B.sY([
this,this.Fd],this.timer,0);this.timer=null;}},Do:function(D){var A;if(D===this.
C6)return;this.C6=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.S);},Je:function(
D){var A;if(this.D3===D)return;this.D3=D;this.DQ=-1;if(!D&&!!this.timer){B.sY([this
,this.Fd],this.timer,0);this.timer=null;}if(D){this.timer=B._GetAutoObject(B.uQ.
GF);B.sL([this,this.Fd],this.timer,0);B.lz([this,this.Fd],this);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Am(this.S);},L9:function(D){var A;if(D<0)D=0;if((D===this.
HK)&&(this.DQ===-1))return;this.HK=D;if(!this.timer)this.DQ=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Am(this.S);},L4:function(D){var A;if(D===this.A2)return;if(
!!this.A2&&this.A2.FQ)B.sY([this,this.Hs],this.A2,0);this.A2=D;this.DQ=-1;if(!!D&&
D.FQ)B.sL([this,this.Hs],D,0);if(this.D3){this.Je(false);this.Je(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Am(this.S);},_Init:function(aArg){B.Core.Bd._Init.
call(this,aArg);this.__proto__=C.IR;},_Mark:function(E){var A;B.Core.Bd._Mark.call(
this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.A2)&&(A.
_cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"};C.Text={Bz:null,AG:B.
hr,String:B.hr,CA:null,Fc:B.qK,Gz:0x12,C6:0xFFFFFFFF,Gb:false,HE:false,Fi:false,
IJ:false,BM:false,CM:function(){if(!!this.CA){this.JF(this.CA);this.CA=null;}},CN:
function(AQ,aClip,aOffset,AC,aBlend){var A;if((this.AG===B.hr)||!this.Bz)return;
var AL=this.Gz;var font=this.Bz;var BK=B.tX(this.S,aOffset);var BT;var BU;var BS;
var BR;var AZ=this.C6;var Dy=(((AC+1)*255)>>8)+1;var Dx=this.AG.charCodeAt(0)||0;
var AR=B.tX(this.IT(),aOffset);var Lu=[BK[0]-AR[0],(BK[1]-AR[1])-font.Ascent];if(
Dx<1)return;BT=BU=BR=BS=AZ;if(Dy<256){BT=(BT&0x00FFFFFF)|((((((BT>>24)&0xFF)*Dy)>>
8)&0xFF)<<24);BU=(BU&0x00FFFFFF)|((((((BU>>24)&0xFF)*Dy)>>8)&0xFF)<<24);BS=(BS&0x00FFFFFF
)|((((((BS>>24)&0xFF)*Dy)>>8)&0xFF)<<24);BR=(BR&0x00FFFFFF)|((((((BR>>24)&0xFF)*
Dy)>>8)&0xFF)<<24);}if(((AL&0x80)===0x80)){if(this.IX())AL=(AL&~0x80)|0x4;else AL=(
AL&~0x80)|0x1;}if((Dx===1)&&!((AL&0x40)===0x40)){AQ.J7(aClip,font,this.AG,2,(this.
AG.charCodeAt(1)||0)-1,BK,Lu,0,0,BT,BU,BS,BR,true);return;}var leading=font.Leading;
var J0=(font.Ascent+font.Descent)+leading;var M1=aClip[1]-AR[1];var M2=aClip[3]-
AR[1];var JA=AR[2]-AR[0];var Dj=0;var K=1;var Cm=this.AG.charCodeAt(1)||0;while(((
Dj+J0)<M1)&&(Cm>0)){K=K+Cm;Dj=Dj+J0;Cm=this.AG.charCodeAt(K)||0;}while((Dj<M2)&&(
Cm>0)){var FC=B.tU(Lu,[0,Dj]);var LH=0;var Iq=false;if(((((AL&0x40)===0x40)&&((this.
AG.charCodeAt((K+Cm)-1)||0)!==0x0A))&&((this.AG.charCodeAt(K+1)||0)!==0x0A))&&((
this.AG.charCodeAt(K+Cm)||0)!==0x00))Iq=true;if(Iq&&!!(AL&0x6)){var LG=K+Cm;var La=
this.AG.indexOf(String.fromCharCode(0x20),K+1);var Lb=this.AG.indexOf(String.fromCharCode(
0xA0),K+1);if(((La<0)||(La>=LG))&&((Lb<0)||(Lb>=LG)))Iq=false;}if(Iq)LH=JA;else if(((
AL&0x4)===0x4))FC=[(FC[0]-JA)+font.GL(this.AG,K+1,Cm-1),FC[1]];else if(((AL&0x2)===
0x2))FC=[(FC[0]-((JA/2)|0))+((font.GL(this.AG,K+1,Cm-1)/2)|0),FC[1]];AQ.J7(aClip
,font,this.AG,K+1,Cm-1,BK,FC,LH,0,BT,BU,BS,BR,true);K=K+Cm;Dj=Dj+J0;Cm=this.AG.charCodeAt(
K)||0;}},V:function(D){var A;if(B.tI(D,this.S))return;var LE;LE=((A=this.S)[2]-A[
0])!==(D[2]-D[0]);if(((LE&&this.Gb)&&this.BM)&&!((this.F&0x2000)===0x2000)){this.
AG=B.hr;this.BM=false;B.lz([this,this.Ew],this);}if(((this.Fi&&this.BM)&&!B.tH([(
A=this.S)[2]-A[0],A[3]-A[1]],[D[2]-D[0],D[3]-D[1]]))&&!((this.F&0x2000)===0x2000
)){this.AG=B.hr;this.BM=false;B.lz([this,this.Ew],this);}B.Core.Bd.V.call(this,D
);B.lz([this,this.JX],this);},JF:function(aBidi){if(!aBidi)return;B.nq(aBidi);},
M4:function(aSize){var bidi=null;bidi=B.qx(aSize);return bidi;},JX:function(Ak){
},Ew:function(Ak){B.lz([this,this.Iu],this);},Iu:function(Ak){var A;if(this.BM)return;
var width=(A=this.S)[2]-A[0];var height=(A=this.S)[3]-A[1];var DW=-1;var font=this.
Bz;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.Gb){DW=width;if(
DW<0)DW=1;}if(!!this.CA){this.JF(this.CA);this.CA=null;}this.BM=true;if((this.String
!==B.hr)&&!!font){var length=this.String.length;if(this.IJ)this.CA=this.M4(length
);this.AG=font.Me(this.String,0,DW,length,this.CA);if(!!this.CA&&!this.LW()){this.
JF(this.CA);this.CA=null;}}else this.AG=B.hr;this.Fc=AE;if(((this.Fi&&(this.AG!==
B.hr))&&!this.HE)&&!!font){var AL=this.Gz;var leading=font.Leading;var AU=this.AG;
var Iy=this.IX();if(((AL&0x80)===0x80)){if(Iy)AL=(AL&~0x80)|0x4;else AL=(AL&~0x80
)|0x1;}var Iw=(font.Ascent+font.Descent)+leading;var Dx=AU.charCodeAt(0)||0;var E6=((
height+leading)/Iw)|0;var JD=false;var Ih=false;if(E6<=0)E6=1;if(Dx>E6){var Ap=0;
var Hx=0;var Ix=Dx-1;var Bi;var BG=AU.length;var tmp=B.hr;if(((AL&0x20)===0x20))
Hx=Dx-E6;else if(((AL&0x10)===0x10)){Hx=((Dx-E6)/2)|0;Ix=(Hx+E6)-1;}else Ix=E6-1;
JD=Hx>0;Ih=Ix<(Dx-1);for(Bi=1;Ap<Hx;Ap=Ap+1)Bi=Bi+(AU.charCodeAt(Bi)||0);if(Ih)for(
BG=Bi;Ap<Ix;Ap=Ap+1)BG=BG+(AU.charCodeAt(BG)||0);if(JD){var Bb=AU.charCodeAt(Bi)||
0;tmp=(Bf+B.uw(AU,Bi,Bb))+Bf;tmp=B.ur(tmp,0,(Bb+2)&0xFFFF);Bi=Bi+Bb;if((tmp.charCodeAt(
Bb)||0)===0x0A){tmp=B.ur(tmp,Bb,0xFEFF);tmp=B.ur(tmp,Bb+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.ur(tmp,2,0xFEFF);tmp=B.ur(tmp,1,0x0A);}else tmp=B.ur(tmp,1,
0xFEFF);}tmp=tmp+B.uw(AU,Bi,BG-Bi);if(Ih&&(BG>=Bi)){var Bb=AU.charCodeAt(BG)||0;
var Cf=(Bf+B.uw(AU,BG,Bb))+Bf;Cf=B.ur(Cf,0,(Bb+2)&0xFFFF);Cf=B.ur(Cf,1,0xFEFF);if((
Cf.charCodeAt(Bb)||0)===0x0A){Cf=B.ur(Cf,Bb,0xFEFF);Cf=B.ur(Cf,Bb+1,0x0A);}if((Cf.
charCodeAt(2)||0)===0x0A){Cf=B.ur(Cf,2,0xFEFF);Cf=B.ur(Cf,1,0x0A);}else Cf=B.ur(
Cf,1,0xFEFF);tmp=tmp+Cf;}AU=String.fromCharCode(E6&0xFFFF)+tmp;}var Ap=0;var Io=
1;var JO=width;Dx=AU.charCodeAt(0)||0;for(;Ap<Dx;Ap=Ap+1){var Fa=JD&&!Ap;var Fb=
Ih&&(Ap===(Dx-1));var CV=false;var CW=false;var Gy=Iy;if((Iy&&Fa)&&!Fb){Fa=false;
Fb=true;}else if((Iy&&Fb)&&!Fa){Fb=false;Fa=true;}var Hy=Io+1;var Bb=AU.charCodeAt(
Io)||0;var Bi=Hy;var BG=(Hy+Bb)-2;var JL=-1;var JM=-1;if(!this.Gb&&(font.GL(AU,Hy
,Bb-1)>JO)){if(((AL&0x4)===0x4))CV=true;else if(((AL&0x2)===0x2)){CV=true;CW=true;
}else CW=true;}if((AU.charCodeAt(Bi)||0)===0x0A)Bi=Bi+1;if((AU.charCodeAt(BG)||0
)===0x0A)BG=BG-1;while(CV&&((AU.charCodeAt(Bi)||0)===0xFEFF))Bi=Bi+1;while(CW&&((
AU.charCodeAt(BG)||0)===0xFEFF))BG=BG-1;CV=CV&&!Fb;CW=CW&&!Fa;while((((CV||CW)||
Fa)||Fb)&&(Bi<BG)){if((CV&&(Gy||!CW))||Fa){if(JL>0)AU=B.ur(AU,JL,0xFEFF);AU=B.ur(
AU,Bi,0x2026);JL=Bi;Bi=Bi+1;Gy=!Gy;Fa=false;if(font.GL(AU,Hy,Bb-1)<=JO){CV=false;
CW=false;}else CV=CV||!CW;}if((CW&&(!Gy||!CV))||Fb){if(JM>0)AU=B.ur(AU,JM,0xFEFF
);AU=B.ur(AU,BG,0x2026);JM=BG;BG=BG-1;Gy=!Gy;Fb=false;if(font.GL(AU,Hy,Bb-1)<=JO
){CV=false;CW=false;}else CW=CW||!CV;}}Io=Io+Bb;}this.Fc=[font.J9(AU),((AU.charCodeAt(
0)||0)*Iw)-leading];this.AG=AU;}if(this.HE&&(this.AG!==B.hr)){this.F=this.F|0x2000;
this.V(B.tD(this.IT(),AE));this.F=this.F&~0x2000;}if(!!this.G&&((this.F&0x1)===0x1
))this.G.Am(this.S);B.lz([this,this.JX],this);},L7:function(D){if(D===this.IJ)return;
this.IJ=D;this.AG=B.hr;this.BM=false;B.lz([this,this.Ew],this);},L6:function(D){
if(D===this.Fi)return;this.Fi=D;if(this.Gb||D)this.F=this.F&~0x100;else this.F=this.
F|0x100;this.AG=B.hr;this.BM=false;B.lz([this,this.Ew],this);},L3:function(D){if(
D===this.HE)return;this.HE=D;if(D&&this.Fi){this.AG=B.hr;this.BM=false;B.lz([this
,this.Ew],this);}if(D&&this.BM){this.F=this.F|0x2000;this.V(B.tD(this.IT(),AE));
this.F=this.F&~0x2000;}},Ji:function(D){if(D===this.Gb)return;this.Gb=D;if(this.
BM){this.AG=B.hr;this.BM=false;B.lz([this,this.Ew],this);}if(D||this.Fi)this.F=this.
F&~0x100;else this.F=this.F|0x100;},Jd:function(D){var A;if(D===this.Gz)return;this.
Gz=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.S);if(this.Fi){this.AG=B.hr;
this.BM=false;B.lz([this,this.Ew],this);}if(this.BM)B.lz([this,this.JX],this);},
Ar:function(D){if(D===this.String)return;this.String=D;this.AG=B.hr;this.BM=false;
B.lz([this,this.Ew],this);},BJ:function(D){if(D===this.Bz)return;this.Bz=D;this.
AG=B.hr;this.BM=false;B.lz([this,this.Ew],this);},Do:function(D){var A;if(D===this.
C6)return;this.C6=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Am(this.S);},IX:function(
){if(!this.BM)this.Iu(this);if(!this.CA)return false;var result=false;var bidi=this.
CA;result=B.qw(bidi);return result;},LW:function(){if(!this.BM)this.Iu(this);if(
!this.CA)return false;var result=false;var bidi=this.CA;result=B.sP(bidi);return result;
},IT:function(){var A;if((this.String===B.hr)||!this.Bz)return BP;if(!this.BM)this.
Iu(this);if(this.AG===B.hr)return BP;var leading=this.Bz.Leading;var Iw=(this.Bz.
Ascent+this.Bz.Descent)+this.Bz.Leading;if(B.tH(this.Fc,AE))this.Fc=[this.Bz.J9(
this.AG),this.Fc[1]];this.Fc=[this.Fc[0],((this.AG.charCodeAt(0)||0)*Iw)-leading
];var AL=this.Gz;var Aa=this.S;var width=Aa[2]-Aa[0];var height=Aa[3]-Aa[1];var BK=[
0,0,width,height];var A1=[].concat(BK.slice(0,2),B.tV(BK.slice(0,2),this.Fc));if(((
AL&0x80)===0x80)){if(this.IX())AL=(AL&~0x80)|0x4;else AL=(AL&~0x80)|0x1;}if(((AL&
0x40)===0x40)){var DW;DW=width;if(DW<0)DW=0;if(DW>(A1[2]-A1[0]))A1=B.um(A1,DW);}
if((A1[2]-A1[0])!==(BK[2]-BK[0])){if(((AL&0x4)===0x4))A1=B.un(A1,BK[2]-(A1[2]-A1[
0]));else if(((AL&0x2)===0x2))A1=B.un(A1,(BK[0]+(((BK[2]-BK[0])/2)|0))-(((A1[2]-
A1[0])/2)|0));}if((A1[3]-A1[1])!==(BK[3]-BK[1])){if(((AL&0x20)===0x20))A1=B.up(A1
,BK[3]-(A1[3]-A1[1]));else if(((AL&0x10)===0x10))A1=B.up(A1,(BK[1]+(((BK[3]-BK[1
])/2)|0))-(((A1[3]-A1[1])/2)|0));}A1=B.tX(A1,Aa.slice(0,2));return A1;},L0:function(
){return this.C6;},_Init:function(aArg){B.Core.Bd._Init.call(this,aArg);this.__proto__=
C.Text;},_Done:function(){this.CM();this.__proto__=B.Core.Bd;B.Core.Bd._Done.call(
this);},_Mark:function(E){var A;B.Core.Bd._Mark.call(this,E);if((A=this.Bz)&&(A.
_cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Text"};C.OW={NL:0x1,NJ:0x2,NM:
0x4,NT:0x8,NS:0x10,NR:0x20,NK:0x40,NI:0x80};C.OA={Oz:0,OQ:1,OO:2,OP:3};
C._Init=function(){C.Cu.__proto__=B.Core.FP;C.Bt.__proto__=B.Core.Bd;C.IR.__proto__=
B.Core.Bd;C.Text.__proto__=B.Core.Bd;};C._ReInit=function(){};C.B6=function(E){};
return C;})();

/* Embedded Wizard */