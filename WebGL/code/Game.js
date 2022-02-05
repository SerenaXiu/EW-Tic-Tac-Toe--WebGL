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
);if(EmWiApp.Game)throw new Error("The unit file 'Game.js' included twice!");EmWiApp.
Game=(function(){var B=EmWiApp;var C={};
var Ax="Current Player: ";var AF="Next Player: ";var BC=" has won!";var BJ=[0,0,240
,320];var C9=[94,235];var DZ=[94,85];var D0=[144,235];var GA=[144,85];var Hz=[194
,135];var GB=[44,135];var IQ=[194,185];var IR=[44,185];var IS=[44,85,94,135];var
IT=[94,85,144,135];var GC=[144,85,194,135];var IU=[44,135,94,185];var IV=[94,135
,144,185];var IW=[144,135,194,185];var LQ=[44,185,94,235];var LR=[95,185,145,235
];var LS=[144,185,194,235];var LT="P2";var LU="O";var LV=[7,3,44,33];var D1="0";
var LW=[179,3,240,28];var LX="Test";var LY=[0,38,119,68];var LZ=[119,38,240,68];
var L0=[-1,11,239,41];var L1=[44,58,94,88];var L2=[194,85,220,133];var L3=[194,135
,220,183];var L4=[194,187,220,235];var L5=[95,58,145,88];var L6=[144,58,194,88];
var L7=[194,58,219,88];var L8=[19,58,44,88];var L9=[0,38,240,68];var Kt="D";var Ku=
"PD";var L_=[0,0,50,50];var Kv=[0,0];var L$=[50,0];var Ma=[50,50];var Mb=[0,50];
var Mc=[0,1,50,50];var Md="P1";var Me="X";var Mf=[240,0];var Mg=[240,320];var Mh=[
0,320];var Mi=[0,177,240,207];var Mj="by Serena";var Mk="Tic Tac Toe";
C.Cs={V:B.tY(3,3,null,null),BP:null,FV:null,Ch:null,ED:null,EE:null,EF:null,Dj:null
,DF:null,Eq:null,Er:null,Es:null,Et:null,Eu:null,Ev:null,Ew:null,Cu:null,B_:null
,Eo:null,DW:null,Di:null,Dk:null,Ex:null,Ed:null,Ei:null,Ej:null,Ek:null,Ee:null
,Ef:null,Eh:null,Eg:null,E1:null,Jn:B.hr,Fh:0,Bn:B.tY(8,0,null),I_:false,Bs:function(
aArg){var AX=0;var Am;for(Am=0;Am<3;Am++)for(AX=0;AX<3;AX++){this.V.Get(Am,AX).Dr([
this,this.CU,this.Ct]);this.V.Get(Am,AX).Dq([this,this.Dp,this.C8]);}this.Di.Au(
Ax+this.BP.EG);this.Dk.Au(AF+this.FV.EG);},KR:function(){if((this.Fh%2)===1){this.
Ct(this.B_);this.Ko(this.Cu);}else{this.Ct(this.Cu);this.Ko(this.B_);}},C8:function(
D){if(this.Fh===D)return;this.Fh=D;this.MI();this.MH();this.KR();this.Eo.Au(this.
Fh.toFixed());},Dp:function(){return this.Fh;},LO:function(An){this.Lc();this.KR(
);},Ct:function(D){if(this.BP===D)return;this.BP=D;this.Di.Au(Ax+this.BP.EG);},CU:
function(){return this.BP;},Lc:function(){var A;this.C8(this.Fh+1);},Ko:function(
D){if(this.FV===D)return;this.FV=D;this.Dk.Au(AF+this.FV.EG);},Kn:function(D){if(
this.Jn===D)return;this.Jn=D;this.Ex.Au(this.Jn);},MH:function(){var AX;var Am;var
HM;for(Am=0;Am<3;Am++)if(!((!this.V.Get(Am,0).Aa||!this.V.Get(Am,1).Aa)||!this.V.
Get(Am,2).Aa)){this.Bn.Set(Am,(this.V.Get(Am,0).Aa+this.V.Get(Am,1).Aa)+this.V.Get(
Am,2).Aa);this.Hk(this.HT(this.Bn.Get(Am)));}for(AX=0;AX<3;AX++)if(!((!this.V.Get(
0,AX).Aa||!this.V.Get(1,AX).Aa)||!this.V.Get(2,AX).Aa)){this.Bn.Set(Am,(this.V.Get(
0,AX).Aa+this.V.Get(1,AX).Aa)+this.V.Get(2,AX).Aa);this.Hk(this.HT(this.Bn.Get(Am
)));}if(!((!this.V.Get(0,0).Aa||!this.V.Get(1,1).Aa)||!this.V.Get(2,2).Aa)){HM=(
this.V.Get(0,0).Aa+this.V.Get(1,1).Aa)+this.V.Get(2,2).Aa;this.Hk(this.HT(HM));}
if(!((!this.V.Get(2,0).Aa||!this.V.Get(1,1).Aa)||!this.V.Get(0,2).Aa)){HM=(this.
V.Get(2,0).Aa+this.V.Get(1,1).Aa)+this.V.Get(0,2).Aa;this.Hk(this.HT(HM));}},HT:
function(Mo){var A;switch(Mo){case 3:{this.KH();this.Kn(this.Cu.EG+BC);this.Cu.Kl(
this.Cu.Hu+1);B.qJ(this.Cu,0);return true;}case 6:{this.KH();this.Kn(this.B_.EG+
BC);this.B_.Kl(this.B_.Hu+1);B.qJ(this.B_,0);return true;}default:return false;}
},MI:function(){this.Bn.Set(0,(this.V.Get(0,0).Aa+this.V.Get(0,1).Aa)+this.V.Get(
0,2).Aa);this.Bn.Set(1,(this.V.Get(1,0).Aa+this.V.Get(1,1).Aa)+this.V.Get(1,2).Aa
);this.Bn.Set(2,(this.V.Get(2,0).Aa+this.V.Get(2,1).Aa)+this.V.Get(2,2).Aa);this.
Bn.Set(3,(this.V.Get(0,0).Aa+this.V.Get(1,0).Aa)+this.V.Get(2,0).Aa);this.Bn.Set(
4,(this.V.Get(0,1).Aa+this.V.Get(1,1).Aa)+this.V.Get(2,1).Aa);this.Bn.Set(5,(this.
V.Get(0,2).Aa+this.V.Get(1,2).Aa)+this.V.Get(2,2).Aa);this.Bn.Set(6,(this.V.Get(
0,0).Aa+this.V.Get(1,1).Aa)+this.V.Get(2,2).Aa);this.Bn.Set(7,(this.V.Get(2,0).Aa+
this.V.Get(1,1).Aa)+this.V.Get(0,2).Aa);this.Ei.Au(this.Bn.Get(0).toFixed());this.
Ej.Au(this.Bn.Get(1).toFixed());this.Ek.Au(this.Bn.Get(2).toFixed());this.Ed.Au(
this.Bn.Get(3).toFixed());this.Ee.Au(this.Bn.Get(4).toFixed());this.Ef.Au(this.Bn.
Get(5).toFixed());this.Eg.Au(this.Bn.Get(6).toFixed());this.Eh.Au(this.Bn.Get(7).
toFixed());},Hk:function(D){if(this.I_===D)return;this.I_=D;if(this.I_&&(this.Fh===
9)){this.E5(this.Di);this.E5(this.Dk);}},KH:function(){var AX;var Am;for(Am=0;Am<
3;Am++)for(AX=0;AX<3;AX++)this.V.Get(Am,AX).AE.AV(false);},_Init:function(aArg){
B.Core.L._Init.call(this,aArg);B.uP.Ch._Init.call(this.Ch={T:this},0);B.uP.Ch._Init.
call(this.ED={T:this},0);B.uP.Ch._Init.call(this.EE={T:this},0);B.uP.Ch._Init.call(
this.EF={T:this},0);C.C7._Init.call(this.Dj={T:this},0);C.C7._Init.call(this.DF={
T:this},0);C.C7._Init.call(this.Eq={T:this},0);C.C7._Init.call(this.Er={T:this},
0);C.C7._Init.call(this.Es={T:this},0);C.C7._Init.call(this.Et={T:this},0);C.C7.
_Init.call(this.Eu={T:this},0);C.C7._Init.call(this.Ev={T:this},0);C.C7._Init.call(
this.Ew={T:this},0);C.Gu._Init.call(this.Cu={T:this},0);C.Gu._Init.call(this.B_={
T:this},0);B.uP.Text._Init.call(this.Eo={T:this},0);B.uS.Hn._Init.call(this.DW={
T:this},0);B.uP.Text._Init.call(this.Di={T:this},0);B.uP.Text._Init.call(this.Dk={
T:this},0);B.uP.Text._Init.call(this.Ex={T:this},0);B.uP.Text._Init.call(this.Ed={
T:this},0);B.uP.Text._Init.call(this.Ei={T:this},0);B.uP.Text._Init.call(this.Ej={
T:this},0);B.uP.Text._Init.call(this.Ek={T:this},0);B.uP.Text._Init.call(this.Ee={
T:this},0);B.uP.Text._Init.call(this.Ef={T:this},0);B.uP.Text._Init.call(this.Eh={
T:this},0);B.uP.Text._Init.call(this.Eg={T:this},0);B.uP.Text._Init.call(this.E1={
T:this},0);(this.V=[]).__proto__=C.Cs.V;(this.Bn=[]).__proto__=C.Cs.Bn;this.__proto__=
C.Cs;this.Y(BJ);this.Ch.CX(C9);this.Ch.CW(DZ);this.Ch.Hj(2);this.ED.CX(D0);this.
ED.CW(GA);this.ED.Hj(2);this.EE.CX(Hz);this.EE.CW(GB);this.EE.Hj(2);this.EF.CX(IQ
);this.EF.CW(IR);this.EF.Hj(2);this.Dj.Y(IS);this.Dj.AV(true);this.Dj.IE(0);this.
DF.Y(IT);this.DF.IE(0);this.Eq.Y(GC);this.Er.Y(IU);this.Es.Y(IV);this.Et.Y(IW);this.
Eu.Y(LQ);this.Ev.Y(LR);this.Ew.Y(LS);this.Cu.Hi(1);this.B_.IG(LT);this.B_.IF(LU);
this.B_.Hi(2);this.Eo.Y(LV);this.Eo.Au(D1);this.DW.Y(LW);this.DW.J7(LX);this.Di.
Y(LY);this.Di.Au(Ax);this.Dk.Y(LZ);this.Dk.Au(AF);this.Ex.Y(L0);this.Ex.Au(B.hr);
this.Ed.Y(L1);this.Ed.Au(D1);this.Ei.Y(L2);this.Ei.Au(D1);this.Ej.Y(L3);this.Ej.
Au(D1);this.Ek.Y(L4);this.Ek.Au(D1);this.Ee.Y(L5);this.Ee.Au(D1);this.Ef.Y(L6);this.
Ef.Au(D1);this.Eh.Y(L7);this.Eh.Au(D1);this.Eg.Y(L8);this.Eg.Au(D1);this.E1.Y(L9
);this.E1.Au(B.hr);this.Af(this.Ch,0);this.Af(this.ED,0);this.Af(this.EE,0);this.
Af(this.EF,0);this.Af(this.Dj,0);this.Af(this.DF,0);this.Af(this.Eq,0);this.Af(this.
Er,0);this.Af(this.Es,0);this.Af(this.Et,0);this.Af(this.Eu,0);this.Af(this.Ev,0
);this.Af(this.Ew,0);this.Af(this.Eo,0);this.Af(this.DW,0);this.Af(this.Di,0);this.
Af(this.Dk,0);this.Af(this.Ex,0);this.Af(this.Ed,0);this.Af(this.Ei,0);this.Af(this.
Ej,0);this.Af(this.Ek,0);this.Af(this.Ee,0);this.Af(this.Ef,0);this.Af(this.Eh,0
);this.Af(this.Eg,0);this.Af(this.E1,0);this.V.Set(0,0,this.Dj);this.V.Set(0,1,this.
DF);this.V.Set(0,2,this.Eq);this.V.Set(1,0,this.Er);this.V.Set(1,1,this.Es);this.
V.Set(1,2,this.Et);this.V.Set(2,0,this.Eu);this.V.Set(2,1,this.Ev);this.V.Set(2,
2,this.Ew);this.Dj.Dr([this,this.CU,this.Ct]);this.Dj.Dq([this,this.Dp,this.C8]);
this.DF.Dr([this,this.CU,this.Ct]);this.DF.Dq([this,this.Dp,this.C8]);this.Eq.Dr([
this,this.CU,this.Ct]);this.Eq.Dq([this,this.Dp,this.C8]);this.Er.Dr([this,this.
CU,this.Ct]);this.Er.Dq([this,this.Dp,this.C8]);this.Es.Dr([this,this.CU,this.Ct
]);this.Es.Dq([this,this.Dp,this.C8]);this.Et.Dr([this,this.CU,this.Ct]);this.Et.
Dq([this,this.Dp,this.C8]);this.Eu.Dr([this,this.CU,this.Ct]);this.Eu.Dq([this,this.
Dp,this.C8]);this.Ev.Dr([this,this.CU,this.Ct]);this.Ev.Dq([this,this.Dp,this.C8
]);this.Ew.Dr([this,this.CU,this.Ct]);this.Ew.Dq([this,this.Dp,this.C8]);this.Eo.
BG(B.tv(B.uO.G$));this.DW.Ci=[this,this.LO];this.DW.JN(B._GetAutoObject(B.uS.Hq)
);this.BP=this.Cu;this.Di.BG(B.tv(B.uO.CS));this.FV=this.B_;this.Dk.BG(B.tv(B.uO.
CS));this.Ex.BG(B.tv(B.uO.Dm));this.Ed.BG(B.tv(B.uO.CS));this.Ei.BG(B.tv(B.uO.CS
));this.Ej.BG(B.tv(B.uO.CS));this.Ek.BG(B.tv(B.uO.CS));this.Ee.BG(B.tv(B.uO.CS));
this.Ef.BG(B.tv(B.uO.CS));this.Eh.BG(B.tv(B.uO.CS));this.Eg.BG(B.tv(B.uO.CS));this.
E1.BG(B.tv(B.uO.Dm));this.Bs(aArg);},_Done:function(){this.__proto__=B.Core.L;this.
Ch._Done();this.ED._Done();this.EE._Done();this.EF._Done();this.Dj._Done();this.
DF._Done();this.Eq._Done();this.Er._Done();this.Es._Done();this.Et._Done();this.
Eu._Done();this.Ev._Done();this.Ew._Done();this.Cu._Done();this.B_._Done();this.
Eo._Done();this.DW._Done();this.Di._Done();this.Dk._Done();this.Ex._Done();this.
Ed._Done();this.Ei._Done();this.Ej._Done();this.Ek._Done();this.Ee._Done();this.
Ef._Done();this.Eh._Done();this.Eg._Done();this.E1._Done();B.Core.L._Done.call(this
);},_ReInit:function(){B.Core.L._ReInit.call(this);this.Ch._ReInit();this.ED._ReInit(
);this.EE._ReInit();this.EF._ReInit();this.Dj._ReInit();this.DF._ReInit();this.Eq.
_ReInit();this.Er._ReInit();this.Es._ReInit();this.Et._ReInit();this.Eu._ReInit(
);this.Ev._ReInit();this.Ew._ReInit();this.Cu._ReInit();this.B_._ReInit();this.Eo.
_ReInit();this.DW._ReInit();this.Di._ReInit();this.Dk._ReInit();this.Ex._ReInit(
);this.Ed._ReInit();this.Ei._ReInit();this.Ej._ReInit();this.Ek._ReInit();this.Ee.
_ReInit();this.Ef._ReInit();this.Eh._ReInit();this.Eg._ReInit();this.E1._ReInit(
);},_Mark:function(E){var A;B.Core.L._Mark.call(this,E);B.tQ(this.V,E);if((A=this.
BP)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.FV)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ch)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ED)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EE)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EF)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Dj)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DF
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eq)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Er)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Es)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Et)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eu)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Ev)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ew)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Cu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.B_
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eo)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.DW)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Di)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Dk)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ex)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Ed)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ei)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ej)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ek
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ee)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Ef)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eh)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Eg)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E1)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Game::GameField"};C.DQ={CA:function(){var M5=this;{}},
Bs:function(aArg){var M5=this;{}},_Init:function(aArg){B.uR.DQ._Init.call(this,aArg
);this.__proto__=C.DQ;this.Bs(aArg);},_Done:function(){this.CA();this.__proto__=
B.uR.DQ;B.uR.DQ._Done.call(this);},_className:"Game::DeviceClass"};C.Device={_Init:
function(){C.DQ._Init.call(this,0);},_variants:function(){return this;},_this:null
};C.C7={BP:null,GU:null,FU:null,AE:null,Ep:null,E2:null,If:B.hr,Aa:0,Jw:0,Bs:function(
aArg){this.BP=B._NewObject(C.Gu,0);this.BP.IF(Kt);this.BP.IG(Ku);this.BP.Hi(6);}
,Lw:function(D){if(this.If===D)return;this.If=D;this.Ep.Au(this.If);},IE:function(
D){if(this.Aa===D)return;this.Aa=D;},LF:function(An){var Dv,IX;this.BP=(Dv=this.
GU,Dv[1].call(Dv[0]));this.Lw(this.BP.Il);this.IE(this.BP.DY);this.AE.AV(false);(
IX=this.FU,IX[2].call(IX[0],(Dv=this.FU,Dv[1].call(Dv[0]))+1));},Dq:function(D){
if(B.tJ(this.FU,D))return;this.FU=D;},Dr:function(D){if(B.tJ(this.GU,D))return;this.
GU=D;},Lp:function(){return this.Jw;},Lt:function(D){this.Jw=D;},CU:function(){return this.
BP;},Ct:function(D){this.BP=D;},_Init:function(aArg){B.Core.L._Init.call(this,aArg
);B.Core.AE._Init.call(this.AE={T:this},0);B.uP.Text._Init.call(this.Ep={T:this}
,0);C.Gu._Init.call(this.E2={T:this},0);this.__proto__=C.C7;this.Y(L_);this.AE.Gs(
Kv);this.AE.Gr(L$);this.AE.CX(Ma);this.AE.CW(Mb);this.Ep.Y(Mc);this.Ep.Au(B.hr);
this.E2.IG(Ku);this.E2.IF(Kt);this.E2.Hi(6);this.Af(this.AE,0);this.Af(this.Ep,0
);this.AE.Ci=[this,this.LF];this.Ep.BG(B.tv(B.uO.Ih));this.GU=[this,this.CU,this.
Ct];this.FU=[this,this.Lp,this.Lt];this.Bs(aArg);},_Done:function(){this.__proto__=
B.Core.L;this.AE._Done();this.Ep._Done();this.E2._Done();B.Core.L._Done.call(this
);},_ReInit:function(){B.Core.L._ReInit.call(this);this.AE._ReInit();this.Ep._ReInit(
);this.E2._ReInit();},_Mark:function(E){var A;B.Core.L._Mark.call(this,E);if((A=
this.BP)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.GU)&&((A=A[0])._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.FU)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.AE)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ep)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.E2)._cycle!=E)A._Mark(A._cycle=E);},_className:"Game::FieldItem"};
C.IA=0xFFD6DDB8;C.White=0xFFFFFFFF;C.Gu={EG:Md,Il:Me,DY:0,Hu:0,IG:function(D){if(
this.EG===D)return;this.EG=D;},IF:function(D){if(this.Il===D)return;this.Il=D;},
Hi:function(D){if(this.DY===D)return;this.DY=D;},Kl:function(D){if(this.Hu===D)return;
this.Hu=D;},_Init:function(aArg){this.__proto__=C.Gu;B.gx++;},_Done:function(){this.
__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null,_className:
"Game::Players"};C.Ik={Timer:null,AE:null,Bj:null,DO:null,Du:null,K8:function(An
){if(this.Ip(false))this.G.Ld(this,null,null,null,null,null,false);},_Init:function(
aArg){B.Core.L._Init.call(this,aArg);B.Core.Timer._Init.call(this.Timer={T:this}
,0);B.Core.AE._Init.call(this.AE={T:this},0);B.uP.Bj._Init.call(this.Bj={T:this}
,0);B.uP.Text._Init.call(this.DO={T:this},0);B.uP.Text._Init.call(this.Du={T:this
},0);this.__proto__=C.Ik;this.Y(BJ);this.Timer.Gq(0);this.Timer.Gp(5000);this.Timer.
AV(false);this.AE.Gs(Kv);this.AE.Gr(Mf);this.AE.CX(Mg);this.AE.CW(Mh);this.Bj.Y(
BJ);this.Bj.EH(C.White);this.DO.Y(Mi);this.DO.Au(Mj);this.DO.EH(C.IA);this.Du.Y(
BJ);this.Du.JL(0x12);this.Du.Au(Mk);this.Du.EH(C.IA);this.Af(this.AE,0);this.Af(
this.Bj,0);this.Af(this.DO,0);this.Af(this.Du,0);this.Timer.FA=[this,this.K8];this.
AE.Ci=[this,this.K8];this.DO.BG(B.tv(B.uO.Dm));this.Du.BG(B.tv(B.uO.G$));},_Done:
function(){this.__proto__=B.Core.L;this.Timer._Done();this.AE._Done();this.Bj._Done(
);this.DO._Done();this.Du._Done();B.Core.L._Done.call(this);},_ReInit:function(){
B.Core.L._ReInit.call(this);this.Timer._ReInit();this.AE._ReInit();this.Bj._ReInit(
);this.DO._ReInit();this.Du._ReInit();},_Mark:function(E){var A;B.Core.L._Mark.call(
this,E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);if((A=this.AE)._cycle!=E
)A._Mark(A._cycle=E);if((A=this.Bj)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DO).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.Du)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Game::GameTitle"};C.Dm={_class:function(){return B.uO.Bq;},0:{Data:function(){return B.
uT;},Cache:[],_this:null}};
C._Init=function(){C.Cs.__proto__=B.Core.L;C.DQ.__proto__=B.uR.DQ;C.C7.__proto__=
B.Core.L;C.Ik.__proto__=B.Core.L;};C._ReInit=function(){var A;if((A=C.Device._this
))A._ReInit();};C.BY=function(E){var A;if((A=C.Device._this)&&(A._cycle!=E))A._Done(
C.Device._this=null);if((A=C.Dm[0]._this)&&(A._cycle!=E))A._Done(C.Dm[0]._this=null
);};return C;})();

/* Embedded Wizard */