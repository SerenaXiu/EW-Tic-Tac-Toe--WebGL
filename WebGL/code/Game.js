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
var Az="Current Player: ";var AE="Next Player: ";var Bf=" has won!";var BP=[0,0,240
,320];var Dq=[94,235];var Ef=[94,85];var Eg=[144,235];var Fn=[144,85];var Gc=[194
,135];var Fo=[44,135];var Gd=[194,185];var Ge=[44,185];var G6=[44,85,94,135];var
Gf=[94,85,144,135];var E0=[144,85,194,135];var G7=[44,135,94,185];var G8=[94,135
,144,185];var G9=[144,135,194,185];var Ju=[44,185,94,235];var Mm=[95,185,145,235
];var Mn=[144,185,194,235];var Mo="P2";var Mp="O";var Mq=[7,3,44,33];var Eh="0";
var Mr=[179,3,240,28];var Ms="Test";var Mt=[0,38,119,68];var Mu=[119,38,240,68];
var Mv=[-1,11,239,41];var Mw=[44,58,94,88];var Mx=[194,85,220,133];var My=[194,135
,220,183];var Mz=[194,187,220,235];var MA=[95,58,145,88];var MB=[144,58,194,88];
var MC=[194,58,219,88];var MD=[19,58,44,88];var ME=[0,38,240,68];var K5="D";var K6=
"PD";var MF=[0,0,50,50];var K7=[0,0];var MG=[50,0];var MH=[50,50];var MI=[0,50];
var MJ=[0,1,50,50];var MK="P1";var ML="X";var MM=[240,0];var MN=[240,320];var MO=[
0,320];var MP=[39,177,202,255];var MQ="Subtitle";var MR=[39,64,213,165];var MS="Title";
C.CD={W:B.tY(3,3,null,null),BW:null,Gt:null,Cu:null,EV:null,EW:null,EX:null,DE:null
,DX:null,EK:null,EL:null,EM:null,EN:null,EO:null,EP:null,EQ:null,CF:null,Cl:null
,EI:null,Ed:null,DD:null,DF:null,ER:null,Ex:null,EC:null,ED:null,EE:null,Ey:null
,Ez:null,EB:null,EA:null,Ff:null,JW:B.hr,FE:0,Bw:B.tY(8,0,null),JI:false,Bo:function(
aArg){var AZ=0;var Ap;for(Ap=0;Ap<3;Ap++)for(AZ=0;AZ<3;AZ++){this.W.Get(Ap,AZ).DK([
this,this.C9,this.CE]);this.W.Get(Ap,AZ).DJ([this,this.DI,this.Dp]);}this.DD.Ar(
Az+this.BW.EY);this.DF.Ar(AE+this.Gt.EY);},Lr:function(){if((this.FE%2)===1){this.
CE(this.Cl);this.KY(this.CF);}else{this.CE(this.CF);this.KY(this.Cl);}},Dp:function(
D){if(this.FE===D)return;this.FE=D;this.Ne();this.Nd();this.Lr();this.EI.Ar(this.
FE.toFixed());},DI:function(){return this.FE;},Mk:function(Ak){this.LN();this.Lr(
);},CE:function(D){if(this.BW===D)return;this.BW=D;this.DD.Ar(Az+this.BW.EY);},C9:
function(){return this.BW;},LN:function(){var A;this.Dp(this.FE+1);},KY:function(
D){if(this.Gt===D)return;this.Gt=D;this.DF.Ar(AE+this.Gt.EY);},KX:function(D){if(
this.JW===D)return;this.JW=D;this.ER.Ar(this.JW);},Nd:function(){var AZ;var Ap;var
Ik;for(Ap=0;Ap<3;Ap++)if(!((!this.W.Get(Ap,0).Ac||!this.W.Get(Ap,1).Ac)||!this.W.
Get(Ap,2).Ac)){this.Bw.Set(Ap,(this.W.Get(Ap,0).Ac+this.W.Get(Ap,1).Ac)+this.W.Get(
Ap,2).Ac);this.HV(this.Is(this.Bw.Get(Ap)));}for(AZ=0;AZ<3;AZ++)if(!((!this.W.Get(
0,AZ).Ac||!this.W.Get(1,AZ).Ac)||!this.W.Get(2,AZ).Ac)){this.Bw.Set(Ap,(this.W.Get(
0,AZ).Ac+this.W.Get(1,AZ).Ac)+this.W.Get(2,AZ).Ac);this.HV(this.Is(this.Bw.Get(Ap
)));}if(!((!this.W.Get(0,0).Ac||!this.W.Get(1,1).Ac)||!this.W.Get(2,2).Ac)){Ik=(
this.W.Get(0,0).Ac+this.W.Get(1,1).Ac)+this.W.Get(2,2).Ac;this.HV(this.Is(Ik));}
if(!((!this.W.Get(2,0).Ac||!this.W.Get(1,1).Ac)||!this.W.Get(0,2).Ac)){Ik=(this.
W.Get(2,0).Ac+this.W.Get(1,1).Ac)+this.W.Get(0,2).Ac;this.HV(this.Is(Ik));}},Is:
function(MW){var A;switch(MW){case 3:{this.Lg();this.KX(this.CF.EY+Bf);this.CF.KV(
this.CF.H5+1);B.qJ(this.CF,0);return true;}case 6:{this.Lg();this.KX(this.Cl.EY+
Bf);this.Cl.KV(this.Cl.H5+1);B.qJ(this.Cl,0);return true;}default:return false;}
},Ne:function(){this.Bw.Set(0,(this.W.Get(0,0).Ac+this.W.Get(0,1).Ac)+this.W.Get(
0,2).Ac);this.Bw.Set(1,(this.W.Get(1,0).Ac+this.W.Get(1,1).Ac)+this.W.Get(1,2).Ac
);this.Bw.Set(2,(this.W.Get(2,0).Ac+this.W.Get(2,1).Ac)+this.W.Get(2,2).Ac);this.
Bw.Set(3,(this.W.Get(0,0).Ac+this.W.Get(1,0).Ac)+this.W.Get(2,0).Ac);this.Bw.Set(
4,(this.W.Get(0,1).Ac+this.W.Get(1,1).Ac)+this.W.Get(2,1).Ac);this.Bw.Set(5,(this.
W.Get(0,2).Ac+this.W.Get(1,2).Ac)+this.W.Get(2,2).Ac);this.Bw.Set(6,(this.W.Get(
0,0).Ac+this.W.Get(1,1).Ac)+this.W.Get(2,2).Ac);this.Bw.Set(7,(this.W.Get(2,0).Ac+
this.W.Get(1,1).Ac)+this.W.Get(0,2).Ac);this.EC.Ar(this.Bw.Get(0).toFixed());this.
ED.Ar(this.Bw.Get(1).toFixed());this.EE.Ar(this.Bw.Get(2).toFixed());this.Ex.Ar(
this.Bw.Get(3).toFixed());this.Ey.Ar(this.Bw.Get(4).toFixed());this.Ez.Ar(this.Bw.
Get(5).toFixed());this.EA.Ar(this.Bw.Get(6).toFixed());this.EB.Ar(this.Bw.Get(7).
toFixed());},HV:function(D){if(this.JI===D)return;this.JI=D;if(this.JI&&(this.FE===
9)){this.Fl(this.DD);this.Fl(this.DF);}},Lg:function(){var AZ;var Ap;for(Ap=0;Ap<
3;Ap++)for(AZ=0;AZ<3;AZ++)this.W.Get(Ap,AZ).AD.AA(false);},_Init:function(aArg){
B.Core.J._Init.call(this,aArg);B.uP.Cu._Init.call(this.Cu={T:this},0);B.uP.Cu._Init.
call(this.EV={T:this},0);B.uP.Cu._Init.call(this.EW={T:this},0);B.uP.Cu._Init.call(
this.EX={T:this},0);C.Dl._Init.call(this.DE={T:this},0);C.Dl._Init.call(this.DX={
T:this},0);C.Dl._Init.call(this.EK={T:this},0);C.Dl._Init.call(this.EL={T:this},
0);C.Dl._Init.call(this.EM={T:this},0);C.Dl._Init.call(this.EN={T:this},0);C.Dl.
_Init.call(this.EO={T:this},0);C.Dl._Init.call(this.EP={T:this},0);C.Dl._Init.call(
this.EQ={T:this},0);C.G0._Init.call(this.CF={T:this},0);C.G0._Init.call(this.Cl={
T:this},0);B.uP.Text._Init.call(this.EI={T:this},0);B.uS.HZ._Init.call(this.Ed={
T:this},0);B.uP.Text._Init.call(this.DD={T:this},0);B.uP.Text._Init.call(this.DF={
T:this},0);B.uP.Text._Init.call(this.ER={T:this},0);B.uP.Text._Init.call(this.Ex={
T:this},0);B.uP.Text._Init.call(this.EC={T:this},0);B.uP.Text._Init.call(this.ED={
T:this},0);B.uP.Text._Init.call(this.EE={T:this},0);B.uP.Text._Init.call(this.Ey={
T:this},0);B.uP.Text._Init.call(this.Ez={T:this},0);B.uP.Text._Init.call(this.EB={
T:this},0);B.uP.Text._Init.call(this.EA={T:this},0);B.uP.Text._Init.call(this.Ff={
T:this},0);(this.W=[]).__proto__=C.CD.W;(this.Bw=[]).__proto__=C.CD.Bw;this.__proto__=
C.CD;this.V(BP);this.Cu.Da(Dq);this.Cu.C$(Ef);this.Cu.HU(2);this.EV.Da(Eg);this.
EV.C$(Fn);this.EV.HU(2);this.EW.Da(Gc);this.EW.C$(Fo);this.EW.HU(2);this.EX.Da(Gd
);this.EX.C$(Ge);this.EX.HU(2);this.DE.V(G6);this.DE.AA(true);this.DE.Jf(0);this.
DX.V(Gf);this.DX.Jf(0);this.EK.V(E0);this.EL.V(G7);this.EM.V(G8);this.EN.V(G9);this.
EO.V(Ju);this.EP.V(Mm);this.EQ.V(Mn);this.CF.HT(1);this.Cl.Jh(Mo);this.Cl.Jg(Mp);
this.Cl.HT(2);this.EI.V(Mq);this.EI.Ar(Eh);this.Ed.V(Mr);this.Ed.KD(Ms);this.DD.
V(Mt);this.DD.Ar(Az);this.DF.V(Mu);this.DF.Ar(AE);this.ER.V(Mv);this.ER.Ar(B.hr);
this.Ex.V(Mw);this.Ex.Ar(Eh);this.EC.V(Mx);this.EC.Ar(Eh);this.ED.V(My);this.ED.
Ar(Eh);this.EE.V(Mz);this.EE.Ar(Eh);this.Ey.V(MA);this.Ey.Ar(Eh);this.Ez.V(MB);this.
Ez.Ar(Eh);this.EB.V(MC);this.EB.Ar(Eh);this.EA.V(MD);this.EA.Ar(Eh);this.Ff.V(ME
);this.Ff.Ar(B.hr);this.Af(this.Cu,0);this.Af(this.EV,0);this.Af(this.EW,0);this.
Af(this.EX,0);this.Af(this.DE,0);this.Af(this.DX,0);this.Af(this.EK,0);this.Af(this.
EL,0);this.Af(this.EM,0);this.Af(this.EN,0);this.Af(this.EO,0);this.Af(this.EP,0
);this.Af(this.EQ,0);this.Af(this.EI,0);this.Af(this.Ed,0);this.Af(this.DD,0);this.
Af(this.DF,0);this.Af(this.ER,0);this.Af(this.Ex,0);this.Af(this.EC,0);this.Af(this.
ED,0);this.Af(this.EE,0);this.Af(this.Ey,0);this.Af(this.Ez,0);this.Af(this.EB,0
);this.Af(this.EA,0);this.Af(this.Ff,0);this.W.Set(0,0,this.DE);this.W.Set(0,1,this.
DX);this.W.Set(0,2,this.EK);this.W.Set(1,0,this.EL);this.W.Set(1,1,this.EM);this.
W.Set(1,2,this.EN);this.W.Set(2,0,this.EO);this.W.Set(2,1,this.EP);this.W.Set(2,
2,this.EQ);this.DE.DK([this,this.C9,this.CE]);this.DE.DJ([this,this.DI,this.Dp]);
this.DX.DK([this,this.C9,this.CE]);this.DX.DJ([this,this.DI,this.Dp]);this.EK.DK([
this,this.C9,this.CE]);this.EK.DJ([this,this.DI,this.Dp]);this.EL.DK([this,this.
C9,this.CE]);this.EL.DJ([this,this.DI,this.Dp]);this.EM.DK([this,this.C9,this.CE
]);this.EM.DJ([this,this.DI,this.Dp]);this.EN.DK([this,this.C9,this.CE]);this.EN.
DJ([this,this.DI,this.Dp]);this.EO.DK([this,this.C9,this.CE]);this.EO.DJ([this,this.
DI,this.Dp]);this.EP.DK([this,this.C9,this.CE]);this.EP.DJ([this,this.DI,this.Dp
]);this.EQ.DK([this,this.C9,this.CE]);this.EQ.DJ([this,this.DI,this.Dp]);this.EI.
BJ(B.tv(B.uO.HJ));this.Ed.Ck=[this,this.Mk];this.Ed.Kj(B._GetAutoObject(B.uS.H2)
);this.BW=this.CF;this.DD.BJ(B.tv(B.uO.C7));this.Gt=this.Cl;this.DF.BJ(B.tv(B.uO.
C7));this.ER.BJ(B.tv(B.uO.DH));this.Ex.BJ(B.tv(B.uO.C7));this.EC.BJ(B.tv(B.uO.C7
));this.ED.BJ(B.tv(B.uO.C7));this.EE.BJ(B.tv(B.uO.C7));this.Ey.BJ(B.tv(B.uO.C7));
this.Ez.BJ(B.tv(B.uO.C7));this.EB.BJ(B.tv(B.uO.C7));this.EA.BJ(B.tv(B.uO.C7));this.
Ff.BJ(B.tv(B.uO.DH));this.Bo(aArg);},_Done:function(){this.__proto__=B.Core.J;this.
Cu._Done();this.EV._Done();this.EW._Done();this.EX._Done();this.DE._Done();this.
DX._Done();this.EK._Done();this.EL._Done();this.EM._Done();this.EN._Done();this.
EO._Done();this.EP._Done();this.EQ._Done();this.CF._Done();this.Cl._Done();this.
EI._Done();this.Ed._Done();this.DD._Done();this.DF._Done();this.ER._Done();this.
Ex._Done();this.EC._Done();this.ED._Done();this.EE._Done();this.Ey._Done();this.
Ez._Done();this.EB._Done();this.EA._Done();this.Ff._Done();B.Core.J._Done.call(this
);},_ReInit:function(){B.Core.J._ReInit.call(this);this.Cu._ReInit();this.EV._ReInit(
);this.EW._ReInit();this.EX._ReInit();this.DE._ReInit();this.DX._ReInit();this.EK.
_ReInit();this.EL._ReInit();this.EM._ReInit();this.EN._ReInit();this.EO._ReInit(
);this.EP._ReInit();this.EQ._ReInit();this.CF._ReInit();this.Cl._ReInit();this.EI.
_ReInit();this.Ed._ReInit();this.DD._ReInit();this.DF._ReInit();this.ER._ReInit(
);this.Ex._ReInit();this.EC._ReInit();this.ED._ReInit();this.EE._ReInit();this.Ey.
_ReInit();this.Ez._ReInit();this.EB._ReInit();this.EA._ReInit();this.Ff._ReInit(
);},_Mark:function(E){var A;B.Core.J._Mark.call(this,E);B.tQ(this.W,E);if((A=this.
BW)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Gt)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Cu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EV)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EW)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EX)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.DE)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DX
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EK)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.EL)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EM)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EN)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EO)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EP)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EQ)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.CF)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cl
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EI)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Ed)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DD)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.DF)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ER)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Ex)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EC)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.ED)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EE
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ey)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Ez)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EB)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ff)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Game::GameField"};C.D7={CM:function(){var ND=this;{}},
Bo:function(aArg){var ND=this;{}},_Init:function(aArg){B.uR.D7._Init.call(this,aArg
);this.__proto__=C.D7;this.Bo(aArg);},_Done:function(){this.CM();this.__proto__=
B.uR.D7;B.uR.D7._Done.call(this);},_className:"Game::DeviceClass"};C.Device={_Init:
function(){C.D7._Init.call(this,0);},_variants:function(){return this;},_this:null
};C.Dl={BW:null,Hp:null,Gs:null,AD:null,EJ:null,Fh:null,IO:B.hr,Ac:0,J5:0,Bo:function(
aArg){this.BW=B._NewObject(C.G0,0);this.BW.Jg(K5);this.BW.Jh(K6);this.BW.HT(6);}
,L8:function(D){if(this.IO===D)return;this.IO=D;this.EJ.Ar(this.IO);},Jf:function(
D){if(this.Ac===D)return;this.Ac=D;},Md:function(Ak){var CH,Jv;this.BW=(CH=this.
Hp,CH[1].call(CH[0]));this.L8(this.BW.IV);this.Jf(this.BW.Dd);this.AD.AA(false);(
Jv=this.Gs,Jv[2].call(Jv[0],(CH=this.Gs,CH[1].call(CH[0]))+1));},DJ:function(D){
if(B.tJ(this.Gs,D))return;this.Gs=D;},DK:function(D){if(B.tJ(this.Hp,D))return;this.
Hp=D;},L1:function(){return this.J5;},L5:function(D){this.J5=D;},C9:function(){return this.
BW;},CE:function(D){this.BW=D;},_Init:function(aArg){B.Core.J._Init.call(this,aArg
);B.Core.AD._Init.call(this.AD={T:this},0);B.uP.Text._Init.call(this.EJ={T:this}
,0);C.G0._Init.call(this.Fh={T:this},0);this.__proto__=C.Dl;this.V(MF);this.AD.GW(
K7);this.AD.GV(MG);this.AD.Da(MH);this.AD.C$(MI);this.EJ.V(MJ);this.EJ.Ar(B.hr);
this.Fh.Jh(K6);this.Fh.Jg(K5);this.Fh.HT(6);this.Af(this.AD,0);this.Af(this.EJ,0
);this.AD.Ck=[this,this.Md];this.EJ.BJ(B.tv(B.uO.HI));this.Hp=[this,this.C9,this.
CE];this.Gs=[this,this.L1,this.L5];this.Bo(aArg);},_Done:function(){this.__proto__=
B.Core.J;this.AD._Done();this.EJ._Done();this.Fh._Done();B.Core.J._Done.call(this
);},_ReInit:function(){B.Core.J._ReInit.call(this);this.AD._ReInit();this.EJ._ReInit(
);this.Fh._ReInit();},_Mark:function(E){var A;B.Core.J._Mark.call(this,E);if((A=
this.BW)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Hp)&&((A=A[0])._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.Gs)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.AD)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EJ)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Fh)._cycle!=E)A._Mark(A._cycle=E);},_className:"Game::FieldItem"};
C.Mf=0xFF94B7E6;C.HP=0xFFD6DDB8;C.White=0xFFFFFFFF;C.G0={EY:MK,IV:ML,Dd:0,H5:0,Jh:
function(D){if(this.EY===D)return;this.EY=D;},Jg:function(D){if(this.IV===D)return;
this.IV=D;},HT:function(D){if(this.Dd===D)return;this.Dd=D;},KV:function(D){if(this.
H5===D)return;this.H5=D;},_Init:function(aArg){this.__proto__=C.G0;B.gx++;},_Done:
function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:
null,_className:"Game::Players"};C.CP={Timer:null,AD:null,Bt:null,C4:null,C5:null
,Js:B.hr,Subtitle:B.hr,LI:function(Ak){},GY:function(D){if(this.Js===D)return;this.
Js=D;this.C5.Ar(this.Js);},GX:function(D){if(this.Subtitle===D)return;this.Subtitle=
D;this.C4.Ar(this.Subtitle);},_Init:function(aArg){B.Core.J._Init.call(this,aArg
);B.Core.Timer._Init.call(this.Timer={T:this},0);B.Core.AD._Init.call(this.AD={T:
this},0);B.uP.Bt._Init.call(this.Bt={T:this},0);B.uP.Text._Init.call(this.C4={T:
this},0);B.uP.Text._Init.call(this.C5={T:this},0);this.__proto__=C.CP;this.V(BP);
this.Timer.GU(0);this.Timer.GS(5000);this.Timer.AA(false);this.AD.GW(K7);this.AD.
GV(MM);this.AD.Da(MN);this.AD.C$(MO);this.Bt.V(BP);this.Bt.Do(C.White);this.C4.V(
MP);this.C4.Ji(true);this.C4.Jd(0xA);this.C4.Ar(MQ);this.C4.Do(C.HP);this.C5.V(MR
);this.C5.L3(false);this.C5.Ji(true);this.C5.Jd(0x22);this.C5.Ar(MS);this.C5.Do(
C.HP);this.Af(this.AD,0);this.Af(this.Bt,0);this.Af(this.C4,0);this.Af(this.C5,0
);this.Timer.FU=[this,this.LI];this.AD.Ck=[this,this.LI];this.C4.BJ(B.tv(B.uO.DH
));this.C5.BJ(B.tv(B.uO.HJ));},_Done:function(){this.__proto__=B.Core.J;this.Timer.
_Done();this.AD._Done();this.Bt._Done();this.C4._Done();this.C5._Done();B.Core.J.
_Done.call(this);},_ReInit:function(){B.Core.J._ReInit.call(this);this.Timer._ReInit(
);this.AD._ReInit();this.Bt._ReInit();this.C4._ReInit();this.C5._ReInit();},_Mark:
function(E){var A;B.Core.J._Mark.call(this,E);if((A=this.Timer)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.AD)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bt)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.C4)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C5
)._cycle!=E)A._Mark(A._cycle=E);},_className:"Game::GameTitle"};C.DH={_class:function(
){return B.uO.Bz;},0:{Data:function(){return B.uT;},Cache:[],_this:null}};
C._Init=function(){C.CD.__proto__=B.Core.J;C.D7.__proto__=B.uR.D7;C.Dl.__proto__=
B.Core.J;C.CP.__proto__=B.Core.J;};C._ReInit=function(){var A;if((A=C.Device._this
))A._ReInit();};C.B6=function(E){var A;if((A=C.Device._this)&&(A._cycle!=E))A._Done(
C.Device._this=null);if((A=C.DH[0]._this)&&(A._cycle!=E))A._Done(C.DH[0]._this=null
);};return C;})();

/* Embedded Wizard */