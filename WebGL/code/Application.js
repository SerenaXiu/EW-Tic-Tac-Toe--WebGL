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
);if(EmWiApp.ii)throw new Error("The unit file 'Application.js' included twice!"
);EmWiApp.ii=(function(){var B=EmWiApp;var C={};
var Az="- Total Wins -\nP1: ";var AE="   P2: ";var Bf=[0,0,240,320];var BP=[0,0,240
,319];var Dq=[52,269,189,306];var Ef="Reset";var Eg=[61,239,179,269];var Fn="- Total Wins -\nP1: 0   P2: 0";
var Gc="has invoked Screensaver!";var Fo="swiped right";var Gd="Tic-Tac-Toe";var
Ge="by Serena";var G6="swiped left";var Gf="Other ScreenSaver";var E0="touch to dismiss";
var G7="Welcome!";var G8="a simple demonstration what you can do with EmWiz";var
G9=[29,119,213,182];var Ju="Text";
C.IS={DY:null,BI:null,Bp:null,CD:null,DL:null,DZ:null,Ht:0,Hu:0,Bo:function(aArg){
B.sL([this,this.Lx],this.DY.CF,0);B.sL([this,this.Ly],this.DY.Cl,0);},Nw:function(
Ak){this.Fl(this.DY);this.DY=B._NewObject(B.Game.CD,0);this.Af(this.DY,180);B.sL([
this,this.Lx],this.DY.CF,0);B.sL([this,this.Ly],this.DY.Cl,0);},Lx:function(Ak){
var A;this.Mb(this.Ht+1);},Mb:function(D){if(this.Ht===D)return;this.Ht=D;this.DZ.
Ar(((Az+this.Ht.toFixed())+AE)+this.Hu.toFixed());},Ly:function(Ak){var A;this.Mc(
this.Hu+1);},Mc:function(D){if(this.Hu===D)return;this.Hu=D;this.DZ.Ar(((Az+this.
Ht.toFixed())+AE)+this.Hu.toFixed());},_Init:function(aArg){B.Core.J._Init.call(
this,aArg);B.uP.Bt._Init.call(this.BI={T:this},0);B.Core.Bp._Init.call(this.Bp={
T:this},0);B.Game.CD._Init.call(this.CD={T:this},0);B.uS.HZ._Init.call(this.DL={
T:this},0);B.uP.Text._Init.call(this.DZ={T:this},0);this.__proto__=C.IS;this.V(Bf
);this.BI.KR(0);this.BI.V(Bf);this.BI.Do(B.Game.HP);this.BI.Kh(true);this.Bp.V(BP
);this.Bp.KO(1);this.CD.V(Bf);this.DL.V(Dq);this.DL.KD(Ef);this.DZ.V(Eg);this.DZ.
Ar(Fn);this.Af(this.BI,0);this.Af(this.Bp,0);this.Af(this.CD,0);this.Af(this.DL,
0);this.Af(this.DZ,0);this.DY=this.CD;this.DL.Ck=[this,this.Nw];this.DL.Kj(B._GetAutoObject(
B.uS.H1));this.DZ.BJ(B.tv(B.Game.DH));this.Bo(aArg);},_Done:function(){this.__proto__=
B.Core.J;this.BI._Done();this.Bp._Done();this.CD._Done();this.DL._Done();this.DZ.
_Done();B.Core.J._Done.call(this);},_ReInit:function(){B.Core.J._ReInit.call(this
);this.BI._ReInit();this.Bp._ReInit();this.CD._ReInit();this.DL._ReInit();this.DZ.
_ReInit();},_Mark:function(E){var A;B.Core.J._Mark.call(this,E);if((A=this.DY)&&(
A._cycle!=E))A._Mark(A._cycle=E);if((A=this.BI)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Bp)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CD)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.DL)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DZ)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Application::GameScreen"};C.IE={Cg:null,IC:null,Fe:null
,Dc:null,BI:null,CP:null,Ch:null,Ip:true,Bo:function(aArg){this.HY(this.Fe,null,
null,null,null,null,null,null,null,false);this.HY(this.Cg,B._GetAutoObject(B.uQ.
G2),B._GetAutoObject(B.uQ.G3),null,null,B._GetAutoObject(B.uQ.Ec),B._GetAutoObject(
B.uQ.Ec),null,null,false);this.Cg.AD.Ck=[this,this.LP];this.Fe.Bp.I_=[this,this.
K2];this.Fe.Bp.Jb=[this,this.Nu];this.IC.Bp.Jc=[this,this.Nv];this.Cg.AD.Dn=[this
,this.StartTimer];var Ap;var AZ;for(Ap=0;Ap<3;Ap++)for(AZ=0;AZ<3;AZ++)this.Fe.DY.
W.Get(Ap,AZ).AD.Dn=[this,this.ResetTimer];this.Cg.AD.Dn=[this,this.ResetTimer];this.
Fe.DL.Dn=[this,this.ResetTimer];},StartTimer:function(Ak){this.Dc.AA(true);},K2:
function(Ak){B.uF("%*%s",Ak,Gc);this.HY(this.Cg,B._GetAutoObject(B.uQ.G2),B._GetAutoObject(
B.uQ.G3),null,null,B._GetAutoObject(B.uQ.Ec),B._GetAutoObject(B.uQ.Ec),null,null
,false);this.Dc.AA(false);},ResetTimer:function(Ak){this.Dc.AA(false);this.Dc.AA(
true);},Nv:function(Ak){B.uF("%s",Fo);this.Jo(this.Fe,B._GetAutoObject(B.uQ.F0),
B._GetAutoObject(B.uQ.FZ),null,B._GetAutoObject(B.uQ.FZ),null,null,null,null,null
,false);this.Ip=true;this.Cg.GY(Gd);this.Ch.AA(false);this.Cg.GX(Ge);},Nu:function(
Ak){B.uF("%s",G6);this.Jo(this.IC,B._GetAutoObject(B.uQ.FZ),B._GetAutoObject(B.uQ.
F0),null,B._GetAutoObject(B.uQ.F0),null,null,null,null,null,false);this.Ip=false;
this.Cg.GY(Gf);this.Cg.GX(E0);this.Ch.AA(true);},LP:function(Ak){this.LO(this.Cg
,null,null,null,null,null,false);if(this.Ip){this.Cg.GY(Gd);this.Ch.AA(false);this.
Cg.GX(Ge);}if(!this.Ip){this.Cg.GY(Gf);this.Cg.GX(E0);this.Ch.AA(true);}},_Init:
function(aArg){B.Core.Root._Init.call(this,aArg);B.Core.Timer._Init.call(this.Dc={
T:this},0);B.uP.Bt._Init.call(this.BI={T:this},0);B.Game.CP._Init.call(this.CP={
T:this},0);B.uQ.Ch._Init.call(this.Ch={T:this},0);this.__proto__=C.IE;var A;this.
V(Bf);this.Dc.GU(20000);this.Dc.GS(0);this.Dc.AA(false);this.BI.KR(0);this.BI.V(
Bf);this.BI.Do(B.Game.White);this.BI.Kh(true);this.CP.V(Bf);this.CP.GY(G7);this.
CP.GX(G8);this.Ch.GT(3000);this.Ch.AA(false);this.Ch.AW=B.Game.HP;this.Af(this.BI
,0);this.Af(this.CP,0);this.Dc.FU=[this,this.K2];this.Cg=this.CP;this.IC=B._GetAutoObject(
C.HW);this.Fe=B._GetAutoObject(C.HL);this.Ch.Ea=[A=this.Cg.C4,A.L0,A.Do];this.Bo(
aArg);},_Done:function(){this.__proto__=B.Core.Root;this.Dc._Done();this.BI._Done(
);this.CP._Done();this.Ch._Done();B.Core.Root._Done.call(this);},_ReInit:function(
){B.Core.Root._ReInit.call(this);this.Dc._ReInit();this.BI._ReInit();this.CP._ReInit(
);this.Ch._ReInit();},_Mark:function(E){var A;B.Core.Root._Mark.call(this,E);if((
A=this.Cg)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.IC)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Fe)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Dc)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.BI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
CP)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ch)._cycle!=E)A._Mark(A._cycle=E);}
,_className:"Application::Application"};C.Jj={Bt:null,Bp:null,Text:null,_Init:function(
aArg){B.Core.J._Init.call(this,aArg);B.uP.Bt._Init.call(this.Bt={T:this},0);B.Core.
Bp._Init.call(this.Bp={T:this},0);B.uP.Text._Init.call(this.Text={T:this},0);this.
__proto__=C.Jj;this.V(Bf);this.Bt.V(Bf);this.Bt.Do(B.Game.Mf);this.Bp.V(BP);this.
Bp.KO(1);this.Text.V(G9);this.Text.Ar(Ju);this.Af(this.Bt,0);this.Af(this.Bp,0);
this.Af(this.Text,0);this.Text.BJ(B.tv(B.uO.HI));},_Done:function(){this.__proto__=
B.Core.J;this.Bt._Done();this.Bp._Done();this.Text._Done();B.Core.J._Done.call(this
);},_ReInit:function(){B.Core.J._ReInit.call(this);this.Bt._ReInit();this.Bp._ReInit(
);this.Text._ReInit();},_Mark:function(E){var A;B.Core.J._Mark.call(this,E);if((
A=this.Bt)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bp)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Text)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::OtherScreen"
};C.HL={_Init:function(){C.IS._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.HW={_Init:function(){C.Jj._Init.call(this,0);},_variants:function(
){return this;},_this:null};
C._Init=function(){C.IS.__proto__=B.Core.J;C.IE.__proto__=B.Core.Root;C.Jj.__proto__=
B.Core.J;};C._ReInit=function(){var A;if((A=C.HL._this))A._ReInit();if((A=C.HW._this
))A._ReInit();};C.B6=function(E){var A;if((A=C.HL._this)&&(A._cycle!=E))A._Done(
C.HL._this=null);if((A=C.HW._this)&&(A._cycle!=E))A._Done(C.HW._this=null);};return C;
})();

/* Embedded Wizard */