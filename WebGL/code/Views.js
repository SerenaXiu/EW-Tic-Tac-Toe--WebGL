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
var Ax=[1,1];var AF=[0,0];var BC="\uFEFF";var BJ=[0,0,0,0];
C.Ch={Ey:null,Hy:1,Hx:1,CT:function(AS,aClip,aOffset,Ay,aBlend){var A;var DI=this.
Hx;var DJ=this.Hy;var Df=B.tV(this.AM,aOffset);var Dg=B.tV(this.Aw,aOffset);var GL;
var GM;if(B.tH(Df,Dg))return;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;GL=GM=0xFFFFFFFF;
if(Ay<256){GL=(GL&0x00FFFFFF)|((((Ay*255)>>8)&0xFF)<<24);GM=(GM&0x00FFFFFF)|((((
Ay*255)>>8)&0xFF)<<24);}if((DI===1)&&(DJ===1))AS.Lh(aClip,Df,Dg,GL,GM,aBlend);else
AS.Li(aClip,Df,Dg,DI,DJ,GL,GM,aBlend);},GetExtent:function(){var DI=this.Hx;var DJ=
this.Hy;var Df=this.AM;var Dg=this.Aw;if(((DI===1)&&(DJ===1))||B.tH(Df,Dg))return B.
Core.Fv.GetExtent.call(this);var D9=DI/2.000000;var D_=DJ/2.000000;var Fb=Df[0];
var Fc=Df[1];var Fd=Dg[0];var Fe=Dg[1];var B0=Fd-Fb;var B1=Fe-Fc;var A$=Math.sqrt((
B0*B0)+(B1*B1));B0=B0/A$;B1=B1/A$;var KD=Fb+(B1*D9);var KE=Fc-(B0*D9);var HD=Fd+(
B1*D_);var HE=Fe-(B0*D_);var HF=Fd-(B1*D_);var HG=Fe+(B0*D_);var HH=Fb-(B1*D9);var
HI=Fc+(B0*D9);var left=KD;var right=KD;var top=KE;var bottom=KE;if(HD<left)left=
HD;if(HF<left)left=HF;if(HH<left)left=HH;if(HD>right)right=HD;if(HF>right)right=
HF;if(HH>right)right=HH;if(HE<top)top=HE;if(HG<top)top=HG;if(HI<top)top=HI;if(HE>
bottom)bottom=HE;if(HG>bottom)bottom=HG;if(HI>bottom)bottom=HI;var Bx=[left|0,top|
0,right|0,bottom|0];Bx=[].concat(Bx.slice(0,2),B.tV(Bx.slice(2,4),Ax));return Bx;
},GX:function(An){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent(
));},Hj:function(D){var A;if(D<1)D=1;if((D===this.Hx)&&(D===this.Hy))return;if(!
!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());this.Hx=D;this.Hy=D;if(
!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.GetExtent());if((D!==1)&&!this.Ey){
this.Ey=B.tv(B.uO.Hv);if(this.Ey.Fw)B.sL([this,this.GX],this.Ey,0);}if((D===1)&&
!!this.Ey){if(this.Ey.Fw)B.sY([this,this.GX],this.Ey,0);this.Ey=null;}},_Init:function(
aArg){B.Core.Fv._Init.call(this,aArg);this.__proto__=C.Ch;},_Mark:function(E){var
A;B.Core.Fv._Mark.call(this,E);if((A=this.Ey)&&(A._cycle!=E))A._Mark(A._cycle=E);
},_className:"Views::Line"};C.Bj={C5:0xFFFFFFFF,CT:function(AS,aClip,aOffset,Ay,
aBlend){var A;var BM;var BN;var BK;var BL;var Ca=this.C5;aBlend=aBlend&&((this.F&
0x2)===0x2);Ay=Ay+1;BM=BN=BK=BL=Ca;if(Ay<256){BM=(BM&0x00FFFFFF)|((((Ay*((BM>>24
)&0xFF))>>8)&0xFF)<<24);BN=(BN&0x00FFFFFF)|((((Ay*((BN>>24)&0xFF))>>8)&0xFF)<<24
);BK=(BK&0x00FFFFFF)|((((Ay*((BK>>24)&0xFF))>>8)&0xFF)<<24);BL=(BL&0x00FFFFFF)|((((
Ay*((BL>>24)&0xFF))>>8)&0xFF)<<24);}AS.Ig(aClip,B.tX(this.S,aOffset),BM,BN,BL,BK
,aBlend);},EH:function(D){var A;if(D===this.C5)return;this.C5=D;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.S);},Lr:function(D){if(D)this.AC(0x2,0x0);else this.
AC(0x0,0x2);},_Init:function(aArg){B.Core.Bt._Init.call(this,aArg);this.__proto__=
C.Bj;},_className:"Views::Rectangle"};C.Ij={timer:null,A0:null,Dz:-1,C5:0xFFFFFFFF
,Ha:0,AL:0,DL:false,CT:function(AS,aClip,aOffset,Ay,aBlend){var A;var D8=this.Ha;
if(this.Dz>=0)D8=this.Dz;if(!this.A0||(D8>=this.A0.NoOfFrames))return;this.A0.Update(
);var BM;var BN;var BL;var BK;var Ca=this.C5;var De=(((Ay+1)*255)>>8)+1;var Bx=B.
tX(this.S,aOffset);aBlend=aBlend&&((this.F&0x2)===0x2);BM=BN=BK=BL=Ca;if(De<256){
BM=(BM&0x00FFFFFF)|((((((BM>>24)&0xFF)*De)>>8)&0xFF)<<24);BN=(BN&0x00FFFFFF)|((((((
BN>>24)&0xFF)*De)>>8)&0xFF)<<24);BL=(BL&0x00FFFFFF)|((((((BL>>24)&0xFF)*De)>>8)&
0xFF)<<24);BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*De)>>8)&0xFF)<<24);}AS.Lf(aClip
,this.A0,D8,Bx,0x1F,BM,BN,BL,BK,aBlend);},GX:function(An){var A;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.S);},E0:function(An){var A;var D8=this.Dz;var FW=0;
if(!!this.A0)FW=this.A0.NoOfFrames*this.A0.FrameDelay;if((!!this.timer&&(this.Dz<
0))&&(FW>0))this.AL=this.timer.AR-(this.Ha*this.A0.FrameDelay);if(!!this.timer&&(
FW>0)){var X=(this.timer.AR-this.AL)|0;D8=(X/this.A0.FrameDelay)|0;if(X>=FW){D8=
D8%this.A0.NoOfFrames;this.AL=this.timer.AR-(X%FW);}}if(((D8!==this.Dz)&&!!this.
G)&&((this.F&0x1)===0x1))this.G.Ai(this.S);this.Dz=D8;if(!FW&&!!this.timer){B.sY([
this,this.E0],this.timer,0);this.timer=null;}},EH:function(D){var A;if(D===this.
C5)return;this.C5=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.S);},ID:function(
D){var A;if(this.DL===D)return;this.DL=D;this.Dz=-1;if(!D&&!!this.timer){B.sY([this
,this.E0],this.timer,0);this.timer=null;}if(D){this.timer=B._GetAutoObject(B.uQ.
Gc);B.sL([this,this.E0],this.timer,0);B.lz([this,this.E0],this);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ai(this.S);},Lx:function(D){var A;if(D<0)D=0;if((D===this.
Ha)&&(this.Dz===-1))return;this.Ha=D;if(!this.timer)this.Dz=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ai(this.S);},Ls:function(D){var A;if(D===this.A0)return;if(
!!this.A0&&this.A0.Fw)B.sY([this,this.GX],this.A0,0);this.A0=D;this.Dz=-1;if(!!D&&
D.Fw)B.sL([this,this.GX],D,0);if(this.DL){this.ID(false);this.ID(true);}if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ai(this.S);},_Init:function(aArg){B.Core.Bt._Init.
call(this,aArg);this.__proto__=C.Ij;},_Mark:function(E){var A;B.Core.Bt._Mark.call(
this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.A0)&&(A.
_cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"};C.Text={Bq:null,AI:B.
hr,String:B.hr,Co:null,EZ:B.qK,F0:0x12,C5:0xFFFFFFFF,FH:false,Fs:false,Ia:false,
B4:false,CA:function(){if(!!this.Co){this.I7(this.Co);this.Co=null;}},CT:function(
AS,aClip,aOffset,Ay,aBlend){var A;if((this.AI===B.hr)||!this.Bq)return;var AG=this.
F0;var font=this.Bq;var BD=B.tX(this.S,aOffset);var BM;var BN;var BL;var BK;var AX=
this.C5;var De=(((Ay+1)*255)>>8)+1;var Dd=this.AI.charCodeAt(0)||0;var AN=B.tX(this.
Lj(),aOffset);var KU=[BD[0]-AN[0],(BD[1]-AN[1])-font.Ascent];if(Dd<1)return;BM=BN=
BK=BL=AX;if(De<256){BM=(BM&0x00FFFFFF)|((((((BM>>24)&0xFF)*De)>>8)&0xFF)<<24);BN=(
BN&0x00FFFFFF)|((((((BN>>24)&0xFF)*De)>>8)&0xFF)<<24);BL=(BL&0x00FFFFFF)|((((((BL>>
24)&0xFF)*De)>>8)&0xFF)<<24);BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*De)>>8)&0xFF
)<<24);}if(((AG&0x80)===0x80)){if(this.In())AG=(AG&~0x80)|0x4;else AG=(AG&~0x80)|
0x1;}if((Dd===1)&&!((AG&0x40)===0x40)){AS.Jy(aClip,font,this.AI,2,(this.AI.charCodeAt(
1)||0)-1,BD,KU,0,0,BM,BN,BL,BK,true);return;}var leading=font.Leading;var Jr=(font.
Ascent+font.Descent)+leading;var Mt=aClip[1]-AN[1];var Mu=aClip[3]-AN[1];var I2=
AN[2]-AN[0];var C3=0;var J=1;var Ca=this.AI.charCodeAt(1)||0;while(((C3+Jr)<Mt)&&(
Ca>0)){J=J+Ca;C3=C3+Jr;Ca=this.AI.charCodeAt(J)||0;}while((C3<Mu)&&(Ca>0)){var Ff=
B.tU(KU,[0,C3]);var K7=0;var HR=false;if(((((AG&0x40)===0x40)&&((this.AI.charCodeAt((
J+Ca)-1)||0)!==0x0A))&&((this.AI.charCodeAt(J+1)||0)!==0x0A))&&((this.AI.charCodeAt(
J+Ca)||0)!==0x00))HR=true;if(HR&&!!(AG&0x6)){var K6=J+Ca;var KB=this.AI.indexOf(
String.fromCharCode(0x20),J+1);var KC=this.AI.indexOf(String.fromCharCode(0xA0),
J+1);if(((KB<0)||(KB>=K6))&&((KC<0)||(KC>=K6)))HR=false;}if(HR)K7=I2;else if(((AG&
0x4)===0x4))Ff=[(Ff[0]-I2)+font.Gi(this.AI,J+1,Ca-1),Ff[1]];else if(((AG&0x2)===
0x2))Ff=[(Ff[0]-((I2/2)|0))+((font.Gi(this.AI,J+1,Ca-1)/2)|0),Ff[1]];AS.Jy(aClip
,font,this.AI,J+1,Ca-1,BD,Ff,K7,0,BM,BN,BL,BK,true);J=J+Ca;C3=C3+Jr;Ca=this.AI.charCodeAt(
J)||0;}},Y:function(D){var A;if(B.tI(D,this.S))return;var K4;K4=((A=this.S)[2]-A[
0])!==(D[2]-D[0]);if(((K4&&this.FH)&&this.B4)&&!((this.F&0x2000)===0x2000)){this.
AI=B.hr;this.B4=false;B.lz([this,this.EU],this);}if(((this.Fs&&this.B4)&&!B.tH([(
A=this.S)[2]-A[0],A[3]-A[1]],[D[2]-D[0],D[3]-D[1]]))&&!((this.F&0x2000)===0x2000
)){this.AI=B.hr;this.B4=false;B.lz([this,this.EU],this);}B.Core.Bt.Y.call(this,D
);B.lz([this,this.Jo],this);},I7:function(aBidi){if(!aBidi)return;B.nq(aBidi);},
Mw:function(aSize){var bidi=null;bidi=B.qx(aSize);return bidi;},Jo:function(An){
},EU:function(An){B.lz([this,this.HW],this);},HW:function(An){var A;if(this.B4)return;
var width=(A=this.S)[2]-A[0];var height=(A=this.S)[3]-A[1];var DE=-1;var font=this.
Bq;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.FH){DE=width;if(
DE<0)DE=1;}if(!!this.Co){this.I7(this.Co);this.Co=null;}this.B4=true;if((this.String
!==B.hr)&&!!font){var length=this.String.length;if(this.Ia)this.Co=this.Mw(length
);this.AI=font.LG(this.String,0,DE,length,this.Co);if(!!this.Co&&!this.Ll()){this.
I7(this.Co);this.Co=null;}}else this.AI=B.hr;this.EZ=AF;if((this.Fs&&(this.AI!==
B.hr))&&!!font){var AG=this.F0;var leading=font.Leading;var AQ=this.AI;var H0=this.
In();if(((AG&0x80)===0x80)){if(H0)AG=(AG&~0x80)|0x4;else AG=(AG&~0x80)|0x1;}var HY=(
font.Ascent+font.Descent)+leading;var Dd=AQ.charCodeAt(0)||0;var EP=((height+leading
)/HY)|0;var I5=false;var HJ=false;if(EP<=0)EP=1;if(Dd>EP){var Am=0;var G2=0;var HZ=
Dd-1;var Bc;var BA=AQ.length;var tmp=B.hr;if(((AG&0x20)===0x20))G2=Dd-EP;else if(((
AG&0x10)===0x10)){G2=((Dd-EP)/2)|0;HZ=(G2+EP)-1;}else HZ=EP-1;I5=G2>0;HJ=HZ<(Dd-
1);for(Bc=1;Am<G2;Am=Am+1)Bc=Bc+(AQ.charCodeAt(Bc)||0);if(HJ)for(BA=Bc;Am<HZ;Am=
Am+1)BA=BA+(AQ.charCodeAt(BA)||0);if(I5){var A$=AQ.charCodeAt(Bc)||0;tmp=(BC+B.uw(
AQ,Bc,A$))+BC;tmp=B.ur(tmp,0,(A$+2)&0xFFFF);Bc=Bc+A$;if((tmp.charCodeAt(A$)||0)===
0x0A){tmp=B.ur(tmp,A$,0xFEFF);tmp=B.ur(tmp,A$+1,0x0A);}if((tmp.charCodeAt(2)||0)===
0x0A){tmp=B.ur(tmp,2,0xFEFF);tmp=B.ur(tmp,1,0x0A);}else tmp=B.ur(tmp,1,0xFEFF);}
tmp=tmp+B.uw(AQ,Bc,BA-Bc);if(HJ&&(BA>=Bc)){var A$=AQ.charCodeAt(BA)||0;var B8=(BC+
B.uw(AQ,BA,A$))+BC;B8=B.ur(B8,0,(A$+2)&0xFFFF);B8=B.ur(B8,1,0xFEFF);if((B8.charCodeAt(
A$)||0)===0x0A){B8=B.ur(B8,A$,0xFEFF);B8=B.ur(B8,A$+1,0x0A);}if((B8.charCodeAt(2
)||0)===0x0A){B8=B.ur(B8,2,0xFEFF);B8=B.ur(B8,1,0x0A);}else B8=B.ur(B8,1,0xFEFF);
tmp=tmp+B8;}AQ=String.fromCharCode(EP&0xFFFF)+tmp;}var Am=0;var HQ=1;var Je=width;
Dd=AQ.charCodeAt(0)||0;for(;Am<Dd;Am=Am+1){var EX=I5&&!Am;var EY=HJ&&(Am===(Dd-1
));var CH=false;var CI=false;var FZ=H0;if((H0&&EX)&&!EY){EX=false;EY=true;}else if((
H0&&EY)&&!EX){EY=false;EX=true;}var G3=HQ+1;var A$=AQ.charCodeAt(HQ)||0;var Bc=G3;
var BA=(G3+A$)-2;var Jb=-1;var Jc=-1;if(!this.FH&&(font.Gi(AQ,G3,A$-1)>Je)){if(((
AG&0x4)===0x4))CH=true;else if(((AG&0x2)===0x2)){CH=true;CI=true;}else CI=true;}
if((AQ.charCodeAt(Bc)||0)===0x0A)Bc=Bc+1;if((AQ.charCodeAt(BA)||0)===0x0A)BA=BA-
1;while(CH&&((AQ.charCodeAt(Bc)||0)===0xFEFF))Bc=Bc+1;while(CI&&((AQ.charCodeAt(
BA)||0)===0xFEFF))BA=BA-1;CH=CH&&!EY;CI=CI&&!EX;while((((CH||CI)||EX)||EY)&&(Bc<
BA)){if((CH&&(FZ||!CI))||EX){if(Jb>0)AQ=B.ur(AQ,Jb,0xFEFF);AQ=B.ur(AQ,Bc,0x2026);
Jb=Bc;Bc=Bc+1;FZ=!FZ;EX=false;if(font.Gi(AQ,G3,A$-1)<=Je){CH=false;CI=false;}else
CH=CH||!CI;}if((CI&&(!FZ||!CH))||EY){if(Jc>0)AQ=B.ur(AQ,Jc,0xFEFF);AQ=B.ur(AQ,BA
,0x2026);Jc=BA;BA=BA-1;FZ=!FZ;EY=false;if(font.Gi(AQ,G3,A$-1)<=Je){CH=false;CI=false;
}else CI=CI||!CH;}}HQ=HQ+A$;}this.EZ=[font.JA(AQ),((AQ.charCodeAt(0)||0)*HY)-leading
];this.AI=AQ;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.S);B.lz([this,this.
Jo],this);},Lv:function(D){if(D===this.Ia)return;this.Ia=D;this.AI=B.hr;this.B4=
false;B.lz([this,this.EU],this);},Lu:function(D){if(D===this.Fs)return;this.Fs=D;
if(this.FH||D)this.F=this.F&~0x100;else this.F=this.F|0x100;this.AI=B.hr;this.B4=
false;B.lz([this,this.EU],this);},LC:function(D){if(D===this.FH)return;this.FH=D;
if(this.B4){this.AI=B.hr;this.B4=false;B.lz([this,this.EU],this);}if(D||this.Fs)
this.F=this.F&~0x100;else this.F=this.F|0x100;},JL:function(D){var A;if(D===this.
F0)return;this.F0=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(this.S);if(this.
Fs){this.AI=B.hr;this.B4=false;B.lz([this,this.EU],this);}if(this.B4)B.lz([this,
this.Jo],this);},Au:function(D){if(D===this.String)return;this.String=D;this.AI=
B.hr;this.B4=false;B.lz([this,this.EU],this);},BG:function(D){if(D===this.Bq)return;
this.Bq=D;this.AI=B.hr;this.B4=false;B.lz([this,this.EU],this);},EH:function(D){
var A;if(D===this.C5)return;this.C5=D;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ai(
this.S);},In:function(){if(!this.B4)this.HW(this);if(!this.Co)return false;var result=
false;var bidi=this.Co;result=B.qw(bidi);return result;},Ll:function(){if(!this.
B4)this.HW(this);if(!this.Co)return false;var result=false;var bidi=this.Co;result=
B.sP(bidi);return result;},Lj:function(){var A;if((this.String===B.hr)||!this.Bq
)return BJ;if(!this.B4)this.HW(this);if(this.AI===B.hr)return BJ;var leading=this.
Bq.Leading;var HY=(this.Bq.Ascent+this.Bq.Descent)+this.Bq.Leading;if(B.tH(this.
EZ,AF))this.EZ=[this.Bq.JA(this.AI),this.EZ[1]];this.EZ=[this.EZ[0],((this.AI.charCodeAt(
0)||0)*HY)-leading];var AG=this.F0;var Z=this.S;var width=Z[2]-Z[0];var height=Z[
3]-Z[1];var BD=[0,0,width,height];var AZ=[].concat(BD.slice(0,2),B.tV(BD.slice(0
,2),this.EZ));if(((AG&0x80)===0x80)){if(this.In())AG=(AG&~0x80)|0x4;else AG=(AG&
~0x80)|0x1;}if(((AG&0x40)===0x40)){var DE;DE=width;if(DE<0)DE=0;if(DE>(AZ[2]-AZ[
0]))AZ=B.um(AZ,DE);}if((AZ[2]-AZ[0])!==(BD[2]-BD[0])){if(((AG&0x4)===0x4))AZ=B.un(
AZ,BD[2]-(AZ[2]-AZ[0]));else if(((AG&0x2)===0x2))AZ=B.un(AZ,(BD[0]+(((BD[2]-BD[0
])/2)|0))-(((AZ[2]-AZ[0])/2)|0));}if((AZ[3]-AZ[1])!==(BD[3]-BD[1])){if(((AG&0x20
)===0x20))AZ=B.up(AZ,BD[3]-(AZ[3]-AZ[1]));else if(((AG&0x10)===0x10))AZ=B.up(AZ,(
BD[1]+(((BD[3]-BD[1])/2)|0))-(((AZ[3]-AZ[1])/2)|0));}AZ=B.tX(AZ,Z.slice(0,2));return AZ;
},_Init:function(aArg){B.Core.Bt._Init.call(this,aArg);this.__proto__=C.Text;},_Done:
function(){this.CA();this.__proto__=B.Core.Bt;B.Core.Bt._Done.call(this);},_Mark:
function(E){var A;B.Core.Bt._Mark.call(this,E);if((A=this.Bq)&&(A._cycle!=E))A._Mark(
A._cycle=E);},_className:"Views::Text"};C.Om={Nb:0x1,M$:0x2,Nc:0x4,Nj:0x8,Ni:0x10
,Nh:0x20,Na:0x40,M_:0x80};C.N1={N0:0,Of:1,Od:2,Oe:3};
C._Init=function(){C.Ch.__proto__=B.Core.Fv;C.Bj.__proto__=B.Core.Bt;C.Ij.__proto__=
B.Core.Bt;C.Text.__proto__=B.Core.Bt;};C._ReInit=function(){};C.BY=function(E){};
return C;})();

/* Embedded Wizard */