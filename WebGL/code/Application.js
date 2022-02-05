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
var Ax="- Total Wins -\nP1: ";var AF="   P2: ";var BC=[0,0,240,320];var BJ=[52,269
,189,306];var C9="Reset";var DZ=[61,239,179,269];var D0="- Total Wins -\nP1: 0   P2: 0";
C.H6={DG:null,Dt:null,Ez:null,Bj:null,Cs:null,Ds:null,DH:null,GY:0,GZ:0,Bs:function(
aArg){this.II(this.Ez,B._GetAutoObject(B.uQ.Gw),B._GetAutoObject(B.uQ.Gx),null,null
,B._GetAutoObject(B.uQ.DV),B._GetAutoObject(B.uQ.DV),null,null,false);var Am;var
AX;for(Am=0;Am<3;Am++)for(AX=0;AX<3;AX++)this.DG.V.Get(Am,AX).AE.Do=[this,this.ResetTimer
];this.Ez.AE.Do=[this,this.ResetTimer];this.Ds.Do=[this,this.ResetTimer];B.sL([this
,this.KX],this.DG.Cu,0);B.sL([this,this.KY],this.DG.B_,0);},LM:function(An){this.
II(this.Ez,B._GetAutoObject(B.uQ.Gw),B._GetAutoObject(B.uQ.Gx),null,null,B._GetAutoObject(
B.uQ.DV),B._GetAutoObject(B.uQ.DV),null,null,false);},MY:function(An){this.E5(this.
DG);this.DG=B._NewObject(B.Game.Cs,0);this.Af(this.DG,180);B.sL([this,this.KX],this.
DG.Cu,0);B.sL([this,this.KY],this.DG.B_,0);},ResetTimer:function(An){this.Dt.AV(
false);this.Dt.AV(true);},KX:function(An){var A;this.LD(this.GY+1);},LD:function(
D){if(this.GY===D)return;this.GY=D;this.DH.Au(((Ax+this.GY.toFixed())+AF)+this.GZ.
toFixed());},KY:function(An){var A;this.LE(this.GZ+1);},LE:function(D){if(this.GZ===
D)return;this.GZ=D;this.DH.Au(((Ax+this.GY.toFixed())+AF)+this.GZ.toFixed());},_Init:
function(aArg){B.Core.Root._Init.call(this,aArg);B.Core.Timer._Init.call(this.Dt={
T:this},0);B.Game.Ik._Init.call(this.Ez={T:this},0);B.uP.Bj._Init.call(this.Bj={
T:this},0);B.Game.Cs._Init.call(this.Cs={T:this},0);B.uS.Hn._Init.call(this.Ds={
T:this},0);B.uP.Text._Init.call(this.DH={T:this},0);this.__proto__=C.H6;this.Y(BC
);this.Dt.Gq(20000);this.Dt.Gp(0);this.Dt.AV(false);this.Bj.LB(0);this.Bj.Y(BC);
this.Bj.EH(B.Game.IA);this.Bj.Lr(true);this.Cs.Y(BC);this.Ds.Y(BJ);this.Ds.J7(C9
);this.DH.Y(DZ);this.DH.Au(D0);this.Af(this.Ez,0);this.Af(this.Bj,0);this.Af(this.
Cs,0);this.Af(this.Ds,0);this.Af(this.DH,0);this.Dt.FA=[this,this.LM];this.DG=this.
Cs;this.Ds.Ci=[this,this.MY];this.Ds.JN(B._GetAutoObject(B.uS.Hp));this.DH.BG(B.
tv(B.Game.Dm));this.Bs(aArg);},_Done:function(){this.__proto__=B.Core.Root;this.
Dt._Done();this.Ez._Done();this.Bj._Done();this.Cs._Done();this.Ds._Done();this.
DH._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root._ReInit.
call(this);this.Dt._ReInit();this.Ez._ReInit();this.Bj._ReInit();this.Cs._ReInit(
);this.Ds._ReInit();this.DH._ReInit();},_Mark:function(E){var A;B.Core.Root._Mark.
call(this,E);if((A=this.DG)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Dt)._cycle
!=E)A._Mark(A._cycle=E);if((A=this.Ez)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Bj)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cs)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Ds)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DH)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Application::Application"};
C._Init=function(){C.H6.__proto__=B.Core.Root;};C._ReInit=function(){};C.BY=function(
E){};return C;})();

/* Embedded Wizard */