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
);if(EmWiApp.uQ)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
uQ=(function(){var B=EmWiApp;var C={};
var Az=[100,100];var AE="Trying to remove a fader from a task, which is actually running";
var Bf="The fader doesn\'t belong to this task";var BP="Trying to add a fader to a task, which is actually running";
var Dq="The fader belongs already to a task";
C.D8={BD:null,timer:null,HS:null,HR:null,Hi:0,EH:0,CI:0,BV:0,Hl:0.001000,C1:0,Aw:
0,AO:0,II:0.500000,J3:3,GZ:3,GA:0.500000,CO:3.000000,Jr:0,Jq:0,CR:0,D6:1000,D_:0
,Ee:0,AK:false,Jm:false,FJ:false,IB:false,Fd:function(Ak){var A;if(!this.timer)return;
if(!this.EH){if(this.Jm)this.EH=-1;else this.EH=1;this.Hi=this.EH;this.AO=this.timer.
AV;this.Aw=0;this.C1=-1.000000;}var Ca;if((this.EH>0)&&(this.Hi>0))Ca=this.Ny();
else if((this.EH<0)&&(this.Hi<0))Ca=this.NB();else if(this.EH>0)Ca=this.Nz();else
Ca=this.NA();if(Ca){this.AA(false);(A=this.HS)?A[1].call(A[0],this):null;}},Iz:function(
H){var A;if(!this.BD&&(((this.Ee===19)||(this.Ee===20))||(this.Ee===21))){var Ia=
this.J3+1;var M9=Math.sqrt(this.II);var FI=0.500000;var K;this.BD=B._NewObject(C.
H4,0);this.BD.BZ.Set(0,1.000000);this.BD.E2.Set(0,1.000000);for(K=1;K<Ia;K=K+1){
this.BD.BZ.Set(K,this.BD.BZ.Get(K-1)*M9);this.BD.E2.Set(K,this.BD.E2.Get(K-1)*this.
II);FI=FI+this.BD.BZ.Get(K);}var M$=1.000000/FI;this.BD.BZ.Set(0,0.500000);FI=0.000000;
for(K=0;K<Ia;K=K+1){this.BD.BZ.Set(K,this.BD.BZ.Get(K)*M$);FI=FI+this.BD.BZ.Get(
K);}this.BD.BZ.Set(Ia,this.BD.BZ.Get(Ia)+(1.000000-FI));}switch(this.Ee){case 1:
H=Math.pow(H,this.CO);break;case 2:{H=1.000000-H;H=1.000000-Math.pow(H,this.CO);
}break;case 3:{H=H*2.000000;if(H<1.000000)H=Math.pow(H,this.CO)/2.000000;else{H=
2.000000-H;H=(2.000000-Math.pow(H,this.CO))*0.500000;}}break;case 4:H=(Math.pow(
2.718000,this.CO*H)-1.000000)/(Math.pow(2.718000,this.CO)-1.000000);break;case 5:{
H=1.000000-H;H=1.000000-((Math.pow(2.718000,this.CO*H)-1.000000)/(Math.pow(2.718000
,this.CO)-1.000000));}break;case 6:{H=H*2.000000;if(H<1.000000)H=((Math.pow(2.718000
,this.CO*H)-1.000000)/(Math.pow(2.718000,this.CO)-1.000000))/2.000000;else{H=2.000000-
H;H=(2.000000-((Math.pow(2.718000,this.CO*H)-1.000000)/(Math.pow(2.718000,this.CO
)-1.000000)))*0.500000;}}break;case 7:H=1.000000-Math.cos((H*90.000000)*B.iq);break;
case 8:H=Math.sin((H*90.000000)*B.iq);break;case 9:{H=H*2.000000;if(H<1.000000){
H=1.000000-Math.cos((H*90.000000)*B.iq);H=H*0.500000;}else{H=2.000000-H;H=1.000000-
Math.cos((H*90.000000)*B.iq);H=(2.000000-H)*0.500000;}}break;case 10:H=1.000000-
Math.sqrt(1.000000-(H*H));break;case 11:{H=1.000000-H;H=Math.sqrt(1.000000-(H*H)
);}break;case 12:{H=H*2.000000;if(H<1.000000){H=1.000000-Math.sqrt(1.000000-(H*H
));H=H*0.500000;}else{H=2.000000-H;H=1.000000-Math.sqrt(1.000000-(H*H));H=(2.000000-
H)*0.500000;}}break;case 13:H=((H*H)*H)-((H*this.GA)*Math.sin((H*180.000000)*B.iq
));break;case 14:{H=1.000000-H;H=((H*H)*H)-((H*this.GA)*Math.sin((H*180.000000)*
B.iq));H=1.000000-H;}break;case 15:{H=H*2.000000;if(H<1.000000){H=((H*H)*H)-((H*
this.GA)*Math.sin((H*180.000000)*B.iq));H=H*0.500000;}else{H=2.000000-H;H=((H*H)
*H)-((H*this.GA)*Math.sin((H*180.000000)*B.iq));H=(2.000000-H)*0.500000;}}break;
case 16:H=((H*H)*H)*Math.sin(((H*90.000000)*(1+(4*this.GZ)))*B.iq);break;case 17:{
H=1.000000-H;H=1.000000-(((H*H)*H)*Math.sin(((H*90.000000)*(1+(4*this.GZ)))*B.iq
));}break;case 18:{H=H*2.000000;if(H<1.000000){H=((H*H)*H)*Math.sin(((H*90.000000
)*(1+(4*this.GZ)))*B.iq);H=H*0.500000;}else{H=2.000000-H;H=((H*H)*H)*Math.sin(((
H*90.000000)*(1+(4*this.GZ)))*B.iq);H=(2.000000-H)*0.500000;}}break;case 19:{var
Dv=this.BD;var K=0;var DC=0.000000;var Ce=Dv.BZ.Get(0);var B0=1.000000-H;while(B0>
Ce){K=K+1;DC=Ce;Ce=Ce+Dv.BZ.Get(K);}H=(B0-DC)/(Ce-DC);if(!K)H=1.000000-(H*H);else{
H=(2.000000*H)-1.000000;H=Dv.E2.Get(K)*(1.000000-(H*H));}}break;case 20:{var Dv=
this.BD;var K=0;var DC=0.000000;var Ce=Dv.BZ.Get(0);while(H>Ce){K=K+1;DC=Ce;Ce=Ce+
Dv.BZ.Get(K);}H=(H-DC)/(Ce-DC);if(!K)H=H*H;else{H=(2.000000*H)-1.000000;H=1.000000-(
Dv.E2.Get(K)*(1.000000-(H*H)));}}break;case 21:{var Dv=this.BD;var K=0;var DC=0.000000;
var Ce=Dv.BZ.Get(0);var CJ=H*2.000000;var B0=CJ-1.000000;if(CJ<1.000000)B0=-B0;while(
B0>Ce){K=K+1;DC=Ce;Ce=Ce+Dv.BZ.Get(K);}B0=(B0-DC)/(Ce-DC);if(!K)B0=B0*B0;else{B0=(
2.000000*B0)-1.000000;B0=1.000000-(Dv.E2.Get(K)*(1.000000-(B0*B0)));}if(CJ<1.000000
)H=0.500000*(1.000000-B0);else H=0.500000*(1.000000+B0);}break;default:if(this.FJ
){var CJ=H;var Hq=1.000000-CJ;H=((Hq*CJ)*(this.BV+1.000000))+(CJ*CJ);}else if(this.
IB){var CJ=H;var Hq=1.000000-CJ;var Lh=CJ*CJ;var Nf=Hq*Hq;H=(((Nf*CJ)*(this.BV+1.000000
))+((Hq*Lh)*(this.CI+2.000000)))+(Lh*CJ);}}this.HC(H);(A=this.HR)?A[1].call(A[0]
,this):null;},NB:function(){var Z=(this.timer.AV-this.AO)|0;if(Z<0)Z=-Z;var CB=this.
D_;var C2=this.D_+this.D6;var A0=this.D6;var Ca=false;var AM=this.C1;if(!this.Aw&&(
Z>=C2)){this.Aw=1;Z=Z-C2;this.AO=this.AO+C2;}if((this.Aw>0)&&(Z>=A0)){var A$=(Z/
A0)|0;this.Aw=this.Aw+A$;Z=Z-(A$*A0);this.AO=this.AO+(A$*A0);}if((this.Aw>2)&&!this.
CR)this.Aw=1;if(this.Aw>0)CB=0;if((this.Aw>=this.CR)&&(this.CR>0)){Ca=true;AM=0.000000;
}else if(Z>=CB)AM=1.000000-((Z-CB)*this.Hl);else if(AM>=0.000000)AM=0.000000;if(
AM!==this.C1){this.C1=AM;this.Iz(AM);}return Ca;},NA:function(){var Z=(this.AO-this.
timer.AV)|0;var CB=this.D_;var C2=this.D_+this.D6;var A0=this.D6;var Ca=false;var
AM=this.C1;if((this.Aw>1)&&(Z<0)){var A$=(((-Z+A0)-1)/A0)|0;if((this.Aw-A$)<=0)A$=
this.Aw-1;this.Aw=this.Aw-A$;Z=Z+(A$*A0);this.AO=this.AO+(A$*A0);}if(((this.Aw===
1)&&(Z<0))&&(this.CR>0)){this.Aw=0;Z=Z+C2;this.AO=this.AO+C2;}if(((this.Aw===1)&&(
Z<0))&&!this.CR){var A$=(((-Z+A0)-1)/A0)|0;Z=Z+(A$*A0);this.AO=this.AO+(A$*A0);}
if(this.Aw>0)CB=0;if(Z<0){Ca=true;AM=1.000000;}else if(Z>=CB)AM=1.000000-((Z-CB)
*this.Hl);else if(AM>=0.000000)AM=1.000000;if(AM!==this.C1){this.C1=AM;this.Iz(AM
);}return Ca;},Nz:function(){var Z=(this.AO-this.timer.AV)|0;var CB=this.D_;var C2=
this.D_+this.D6;var A0=this.D6;var Ca=false;var AM=this.C1;if((this.Aw>1)&&(Z<0)
){var A$=(((-Z+A0)-1)/A0)|0;if((this.Aw-A$)<=0)A$=this.Aw-1;this.Aw=this.Aw-A$;Z=
Z+(A$*A0);this.AO=this.AO+(A$*A0);}if(((this.Aw===1)&&(Z<0))&&(this.CR>0)){this.
Aw=0;Z=Z+C2;this.AO=this.AO+C2;}if(((this.Aw===1)&&(Z<0))&&!this.CR){var A$=(((-
Z+A0)-1)/A0)|0;Z=Z+(A$*A0);this.AO=this.AO+(A$*A0);}if(this.Aw>0)CB=0;if(Z<0){Ca=
true;AM=0.000000;}else if(Z>=CB)AM=(Z-CB)*this.Hl;else if(AM>=0.000000)AM=0.000000;
if(AM!==this.C1){this.C1=AM;this.Iz(AM);}return Ca;},Ny:function(){var Z=(this.timer.
AV-this.AO)|0;if(Z<0)Z=-Z;var CB=this.D_;var C2=this.D_+this.D6;var A0=this.D6;var
Ca=false;var AM=this.C1;if(!this.Aw&&(Z>=C2)){this.Aw=1;Z=Z-C2;this.AO=this.AO+C2;
}if((this.Aw>0)&&(Z>=A0)){var A$=(Z/A0)|0;this.Aw=this.Aw+A$;Z=Z-(A$*A0);this.AO=
this.AO+(A$*A0);}if((this.Aw>2)&&!this.CR)this.Aw=1;if(this.Aw>0)CB=0;if((this.Aw>=
this.CR)&&(this.CR>0)){Ca=true;AM=1.000000;}else if(Z>=CB)AM=(Z-CB)*this.Hl;else
if(AM>=0.000000)AM=1.000000;if(AM!==this.C1){this.C1=AM;this.Iz(AM);}return Ca;}
,KQ:function(D){if(this.Jm===D)return;this.Jm=D;if(!this.AK||!this.EH)return;if(
D)this.Hi=-1;else this.Hi=1;this.AO=(this.timer.GK()*2)-this.AO;},Kl:function(D){
if(D<0.000000)D=0.000000;if(D>1.000000)D=1.000000;this.II=D;},Kk:function(D){if(
D<1)D=1;if(D>10)D=10;this.J3=D;this.BD=null;},KP:function(D){if(D<1)D=1;if(D>10)
D=10;this.GZ=D;},Ki:function(D){if(D<0.000000)D=0.000000;if(D>10.000000)D=10.000000;
this.GA=D;},Km:function(D){if(D<1.000000)D=1.000000;if(D>100.000000)D=100.000000;
this.CO=D;},KU:function(D){if(this.Jr===D)return;this.Jr=D;if(this.Ee===26){this.
CI=D;this.FJ=(this.BV===this.CI)&&(this.BV!==0.000000);this.IB=!this.FJ&&(this.BV
!==this.CI);}},KT:function(D){if(this.Jq===D)return;this.Jq=D;if(this.Ee===26){this.
BV=D;this.FJ=(this.BV===this.CI)&&(this.BV!==0.000000);this.IB=!this.FJ&&(this.BV
!==this.CI);}},KS:function(D){if(this.Ee===D)return;this.Ee=D;this.BD=null;switch(
D){case 24:{this.BV=-1.100000;this.CI=1.100000;}break;case 22:{this.BV=-1.000000;
this.CI=-2.000000;}break;case 23:{this.BV=2.000000;this.CI=1.000000;}break;case 25:{
this.BV=1.100000;this.CI=-1.100000;}break;case 0:{this.BV=0.000000;this.CI=0.000000;
}break;default:{this.BV=this.Jq;this.CI=this.Jr;}}this.FJ=(this.BV===this.CI)&&(
this.BV!==0.000000);this.IB=!this.FJ&&(this.BV!==this.CI);},KN:function(D){if(D<
0)D=0;this.CR=D;},GT:function(D){if(D<15)D=15;this.D6=D;this.Hl=1.000000/D;},KC:
function(D){if(D<0)D=0;this.D_=D;},AA:function(D){if(this.AK===D)return;this.AK=
D;if(!D&&!!this.timer){B.sY([this,this.Fd],this.timer,0);this.timer=null;}if(D){
this.timer=B._GetAutoObject(C.GF);B.sL([this,this.Fd],this.timer,0);this.EH=0;B.
lz([this,this.Fd],this);}},HC:function(DP){},_Init:function(aArg){this.__proto__=
C.D8;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.BD)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.HS)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.HR)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null
,_className:"Effects::Effect"};C.IW={Ea:null,Dd:0,AW:255,Bu:0,HC:function(DP){var
CH;this.Dd=this.Bu+(Math.round((this.AW-this.Bu)*DP)|0);if(!!this.Ea)(CH=this.Ea
,CH[2].call(CH[0],this.Dd));},_Init:function(aArg){C.D8._Init.call(this,aArg);this.
__proto__=C.IW;},_Mark:function(E){var A;C.D8._Mark.call(this,E);if((A=this.Ea)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Effects::Int32Effect"};C.Jk={
Dd:B.qK,AW:Az,Bu:B.qK,HC:function(DP){var FK=this.Bu[0];var Dj=this.Bu[1];FK=FK+(
Math.round((this.AW[0]-FK)*DP)|0);Dj=Dj+(Math.round((this.AW[1]-Dj)*DP)|0);this.
Dd=[FK,Dj];},_Init:function(aArg){C.D8._Init.call(this,aArg);this.__proto__=C.Jk;
},_className:"Effects::PointEffect"};C.Ch={Ea:null,Dd:0,AW:0xFFFFFFFF,HC:function(
DP){var CH;var Gw;var Gp;var Gk;var Gj;Gw=((this.AW&0xFF)*DP)|0;Gp=(((this.AW>>8
)&0xFF)*DP)|0;Gk=(((this.AW>>16)&0xFF)*DP)|0;Gj=(((this.AW>>24)&0xFF)*DP)|0;if(Gw<
0)Gw=0;if(Gw>255)Gw=255;if(Gp<0)Gp=0;if(Gp>255)Gp=255;if(Gk<0)Gk=0;if(Gk>255)Gk=
255;if(Gj<0)Gj=0;if(Gj>255)Gj=255;this.Dd=(Gw&0xFF)|((Gp&0xFF)<<8)|((Gk&0xFF)<<16
)|((Gj&0xFF)<<24);if(!!this.Ea)(CH=this.Ea,CH[2].call(CH[0],this.Dd));},_Init:function(
aArg){C.D8._Init.call(this,aArg);this.__proto__=C.Ch;},_Mark:function(E){var A;C.
D8._Mark.call(this,E);if((A=this.Ea)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);}
,_className:"Effects::ColorEffect"};C.D9={CL:null,R:null,P:null,G:null,J:null,It:
null,JR:null,GR:null,A4:true,AK:true,G5:true,HB:false,HD:true,FY:true,Fm:true,Dk:
function(){if(!!this.CL)this.CL.Dk();},IZ:function(){return true;},I$:function(){
},FT:function(){this.Dk();},_Init:function(aArg){this.__proto__=C.D9;B.gx++;},_Done:
function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.CL)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.P)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.J)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.It)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.JR)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.GR)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:
null,_className:"Effects::Fader"};C.F$={KZ:B.qK,E4:false,IZ:function(){return this.
E4;},I$:function(){if(!this.A4&&!!this.J.G)this.J.FS(false);if((!this.A4&&this.Fm
)&&!!this.J.G)this.J.G.Fl(this.J);if(!this.AK)this.J.AA(false);},FT:function(){if(
this.AK)this.J.AA(true);if((this.A4||this.HB)&&!this.J.G){this.J.FS(false);this.
G.Af(this.J,0);}if(this.A4&&this.FY)this.J.G.H3(this.J);if(this.A4&&this.HD)this.
J.G.C_(this.J);if(this.A4&&!this.G5)this.J.V(B.uk(this.J.S,this.KZ));if(this.A4){
this.J.Fk(255);this.J.FS(true);}if(!this.A4&&(this.G.B3===this.J))this.G.C_(null
);this.E4=true;this.Dk();},_Init:function(aArg){C.D9._Init.call(this,aArg);this.
__proto__=C.F$;},_className:"Effects::VisibilityFader"};C.FV={Ay:null,Ai:null,E4:
false,NH:false,IZ:function(){return this.E4;},I$:function(){if(this.A4){this.J.Fk(
this.Ay.AW);this.J.V(B.uk(this.J.S,this.Ai.AW));}if(!this.A4&&!this.J.Db)this.J.
FS(false);if((!this.A4&&this.Fm)&&!!this.J.G)this.J.G.Fl(this.J);if(!this.AK)this.
J.AA(false);},FT:function(){var A;if(this.G5){if(this.J.FR()&&!!this.J.G)this.Ay.
Bu=this.J.Db;else this.Ay.Bu=0;this.Ai.Bu=this.J.S.slice(0,2);}var Na=((!this.J.
G||!this.J.Db)||!this.J.FR())||(((A=B.it(this.J.S,[0,0,(A=this.G.S)[2]-A[0],A[3]-
A[1]]))[0]>=A[2])||(A[1]>=A[3]));var Nb=((!this.A4&&((!this.J.G||!this.J.FR())||
this.Fm))||!this.Ay.AW)||(((A=B.it(B.tX([0,0,(A=this.J.S)[2]-A[0],A[3]-A[1]],this.
Ai.AW),[0,0,(A=this.G.S)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(Na&&Nb
){this.Ay.Bu=0;this.Ay.AW=0;this.Ai.Bu=this.Ai.AW;}this.NH=this.J.LZ();if(this.AK
)this.J.AA(true);if((this.A4||this.HB)&&!this.J.G){this.J.FS(false);this.G.Af(this.
J,0);}if(this.A4&&this.FY)this.J.G.H3(this.J);if(this.A4&&this.HD)this.J.G.C_(this.
J);if(!this.A4&&(this.G.B3===this.J))this.G.C_(null);if(this.A4&&!this.J.FR()){this.
J.V(B.uk(this.J.S,this.Ai.Bu));this.J.Fk(this.Ay.Bu);this.J.FS(true);}if(!this.A4&&((
!this.J.G||!this.J.FR())||!this.J.Db)){this.E4=true;this.Dk();return;}if(!this.A4&&
B.tH(this.Ai.Bu,this.Ai.AW))this.J.V(B.uk(this.J.S,this.Ai.Bu));if(!this.A4&&(this.
Ay.Bu===this.Ay.AW))this.J.Fk(this.Ay.Bu);if((this.J.Db===this.Ay.AW)&&B.tH(this.
J.S.slice(0,2),this.Ai.AW)){this.E4=true;this.Dk();return;}if((this.Ay.Bu===this.
Ay.AW)&&B.tH(this.Ai.Bu,this.Ai.AW)){this.E4=true;this.Dk();return;}if(!this.Ay.
CR)this.Ay.KN(1);if(!this.Ai.CR)this.Ai.KN(1);this.Ai.KQ(false);this.Ai.HS=[this
,this.Lw];this.Ai.HR=[this,this.Ni];this.Ay.Ea=[A=this.J,A.L2,A.MT];this.Ay.KQ(false
);this.Ay.HS=[this,this.Lw];this.Ay.HR=null;this.Ai.AA(!B.tH(this.Ai.Bu,this.Ai.
AW));this.Ay.AA(this.Ay.Bu!==this.Ay.AW);},Lw:function(Ak){this.E4=!this.Ay.AK&&
!this.Ai.AK;this.Dk();},Ni:function(Ak){this.J.V(B.uk(this.J.S,this.Ai.Dd));},_Init:
function(aArg){C.D9._Init.call(this,aArg);C.IW._Init.call(this.Ay={T:this},0);C.
Jk._Init.call(this.Ai={T:this},0);this.__proto__=C.FV;},_Done:function(){this.__proto__=
C.D9;this.Ay._Done();this.Ai._Done();C.D9._Done.call(this);},_ReInit:function(){
C.D9._ReInit.call(this);this.Ay._ReInit();this.Ai._ReInit();},_Mark:function(E){
var A;C.D9._Mark.call(this,E);if((A=this.Ay)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.Ai)._cycle!=E)A._Mark(A._cycle=E);},_className:"Effects::PositionFader"};C.
EZ={D5:function(){return null;},D4:function(){return null;},FM:function(){return this.
D5();},FL:function(){return this.D4();},_Init:function(aArg){this.__proto__=C.EZ;
B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};C.Jn={D5:function(){var L=B.
_NewObject(C.F$,0);L.A4=true;L.AK=true;L.HD=false;L.FY=true;L.G5=false;L.GR=[this
,this.JT];return L;},D4:function(){var L=B._NewObject(C.F$,0);L.A4=false;L.AK=false;
L.Fm=true;return L;},FM:function(){var L=C.EZ.FM.call(this);L.FY=false;L.AK=true;
return L;},FL:function(){var L=B._NewObject(C.F$,0);L.A4=false;L.AK=true;L.HB=true;
L.Fm=false;return L;},JT:function(Ak){var A;var L=(C.F$.isPrototypeOf(Ak)?Ak:null
);var Aa=[0,0,(A=L.G.S)[2]-A[0],A[3]-A[1]];var BY=[(A=L.J.S)[2]-A[0],A[3]-A[1]];
var U=Aa.slice(0,2);U=[(Aa[0]+(((Aa[2]-Aa[0])/2)|0))-((BY[0]/2)|0),U[1]];U=[U[0]
,(Aa[1]+(((Aa[3]-Aa[1])/2)|0))-((BY[1]/2)|0)];L.KZ=U;},_Init:function(aArg){C.EZ.
_Init.call(this,aArg);this.__proto__=C.Jn;},_className:"Effects::ShowHideTransition"
};C.F_={C8:0,D5:function(){var L=B._NewObject(C.FV,0);L.A4=true;L.AK=true;L.HD=false;
L.FY=true;L.G5=true;L.GR=[this,this.JT];L.Ay.GT(500);L.Ay.KC(0);L.Ay.Bu=0;L.Ay.AW=
255;L.Ai.GT(500);L.Ai.KS(23);L.Ai.KT(0.000000);L.Ai.KU(0.000000);L.Ai.Km(3.000000
);L.Ai.Ki(0.500000);L.Ai.KP(3);L.Ai.Kk(3);L.Ai.Kl(0.500000);return L;},D4:function(
){var L=B._NewObject(C.FV,0);L.A4=false;L.AK=false;L.Fm=true;L.G5=true;L.GR=[this
,this.Nm];L.Ay.Bu=255;L.Ay.AW=0;L.Ay.GT(500);L.Ay.KC(0);L.Ai.GT(500);L.Ai.KS(23);
L.Ai.KT(0.000000);L.Ai.KU(0.000000);L.Ai.Km(3.000000);L.Ai.Ki(0.500000);L.Ai.KP(
3);L.Ai.Kk(3);L.Ai.Kl(0.500000);return L;},FM:function(){var L=C.EZ.FM.call(this
);L.FY=false;L.AK=true;return L;},FL:function(){var L=C.EZ.FL.call(this);L.HB=true;
L.Fm=false;L.AK=true;return L;},JT:function(Ak){var A;var L=(C.FV.isPrototypeOf(
Ak)?Ak:null);var Aa=[0,0,(A=L.G.S)[2]-A[0],A[3]-A[1]];var BY=[(A=L.J.S)[2]-A[0],
A[3]-A[1]];var U=Aa.slice(0,2);U=[(Aa[0]+(((Aa[2]-Aa[0])/2)|0))-((BY[0]/2)|0),U[
1]];U=[U[0],(Aa[1]+(((Aa[3]-Aa[1])/2)|0))-((BY[1]/2)|0)];L.Ai.AW=U;if(((!L.J.G||
!L.J.FR())||!L.J.Db)||(((A=B.it(L.J.S,[0,0,(A=L.G.S)[2]-A[0],A[3]-A[1]]))[0]>=A[
2])||(A[1]>=A[3]))){var C3=[(A=L.G.S)[2]-A[0],A[3]-A[1]];switch(this.C8){case 5:
U=[U[0],-BY[1]];break;case 3:{U=[U[0],-BY[1]];U=[C3[0],U[1]];}break;case 8:U=[-BY[
0],-BY[1]];break;case 2:U=[C3[0],U[1]];break;case 7:U=[-BY[0],U[1]];break;case 4:
U=[U[0],C3[1]];break;case 1:{U=[U[0],C3[1]];U=[C3[0],U[1]];}break;case 6:{U=[U[0
],C3[1]];U=[-BY[0],U[1]];}break;default:;}L.J.V(B.uk(L.J.S,U));}},Nm:function(Ak
){var A;var L=(C.FV.isPrototypeOf(Ak)?Ak:null);var U=L.J.S.slice(0,2);var BY=[(A=
L.J.S)[2]-A[0],A[3]-A[1]];var C3=[(A=L.G.S)[2]-A[0],A[3]-A[1]];switch(this.C8){case
5:U=[U[0],C3[1]];break;case 3:{U=[U[0],C3[1]];U=[-BY[0],U[1]];}break;case 8:{U=[
U[0],C3[1]];U=[C3[0],U[1]];}break;case 2:U=[-BY[0],U[1]];break;case 7:U=[C3[0],U[
1]];break;case 4:U=[U[0],-BY[1]];break;case 1:U=[-BY[0],-BY[1]];break;case 6:{U=[
U[0],-BY[1]];U=[C3[0],U[1]];}break;default:;}L.Ai.AW=U;},_Init:function(aArg){C.
EZ._Init.call(this,aArg);this.__proto__=C.F_;},_className:"Effects::SlideTransition"
};C.Ee={Ow:0,OE:1,OG:2,OF:3,Og:4,Oi:5,Oh:6,OT:7,OV:8,OU:9,N6:10,N8:11,N7:12,NV:13
,NX:14,NW:15,Oc:16,Oe:17,Od:18,N3:19,N5:20,N4:21,Oa:22,Oj:23,N$:24,Ol:25,N9:26};
C.IH={Trigger:function(){B.Core.Timer.Trigger.call(this);B.qJ(this,0);},_Init:function(
aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=C.IH;},_className:"Effects::EffectTimerClass"
};C.GF={_Init:function(){C.IH._Init.call(this,0);this.GU(15);this.AA(true);},_variants:
function(){return this;},_this:null};C.H4={BZ:B.tY(12,0,null),E2:B.tY(12,0,null)
,_Init:function(aArg){(this.BZ=[]).__proto__=C.H4.BZ;(this.E2=[]).__proto__=C.H4.
E2;this.__proto__=C.H4;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=
E);},T:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};C.HH={Ao:
null,An:null,Kg:function(Hd){var L=this.An;while(!!L){L.I$();L.J.F=L.J.F&~0x40000;
L=L.P;}L=this.An;while(!!L){B.lz(L.JR,L);L=L.P;}},Kf:function(Hd){var L=this.An;
while(!!L){B.lz(L.It,L);L=L.P;}this.An=null;this.Ao=null;},FT:function(Hd){var A;
if(!this.An)this.Dk();var L=this.An;while(!!L){L.J.F=(L.J.F|0x40000)&~0x20000;L.
J.FF=null;L=L.P;}L=this.An;while(!!L){(A=L.GR)?A[1].call(A[0],L):null;L.FT();L=L.
P;}},Dk:function(){var L=this.An;while(!!L&&L.IZ())L=L.P;if(!L)B.Core.G4.Dk.call(
this);},Mg:function(As){if(!As)return;if(this.IY())throw new Error(AE);if(As.CL!==
this)throw new Error(Bf);if(!!As.P)As.P.R=As.R;else this.Ao=As.R;if(!!As.R)As.R.
P=As.P;else this.An=As.P;As.CL=null;As.P=null;As.R=null;if(!!As.J)As.J.FF=null;B.
lz(As.It,As);if(!this.An)this.J4();},J2:function(As){if(!As)return;if(this.IY())
throw new Error(BP);if(!!As.CL)throw new Error(Dq);As.R=this.Ao;As.P=null;if(!!this.
Ao)this.Ao.P=As;else this.An=As;this.Ao=As;As.CL=this;},_Init:function(aArg){B.Core.
G4._Init.call(this,aArg);this.__proto__=C.HH;},_Mark:function(E){var A;B.Core.G4.
_Mark.call(this,E);if((A=this.Ao)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
An)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Effects::FaderTask"};C.Ec={
_Init:function(){C.Jn._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.FZ={_Init:function(){C.F_._Init.call(this,0);this.C8=2;},_variants:function(
){return this;},_this:null};C.F0={_Init:function(){C.F_._Init.call(this,0);this.
C8=7;},_variants:function(){return this;},_this:null};C.G3={_Init:function(){C.F_.
_Init.call(this,0);this.C8=4;},_variants:function(){return this;},_this:null};C.
G2={_Init:function(){C.F_._Init.call(this,0);this.C8=5;},_variants:function(){return this;
},_this:null};
C._Init=function(){C.IW.__proto__=C.D8;C.Jk.__proto__=C.D8;C.Ch.__proto__=C.D8;C.
F$.__proto__=C.D9;C.FV.__proto__=C.D9;C.Jn.__proto__=C.EZ;C.F_.__proto__=C.EZ;C.
IH.__proto__=B.Core.Timer;C.HH.__proto__=B.Core.G4;};C._ReInit=function(){var A;
if((A=C.GF._this))A._ReInit();if((A=C.Ec._this))A._ReInit();if((A=C.FZ._this))A.
_ReInit();if((A=C.F0._this))A._ReInit();if((A=C.G3._this))A._ReInit();if((A=C.G2.
_this))A._ReInit();};C.B6=function(E){var A;if((A=C.GF._this)&&(A._cycle!=E))A._Done(
C.GF._this=null);if((A=C.Ec._this)&&(A._cycle!=E))A._Done(C.Ec._this=null);if((A=
C.FZ._this)&&(A._cycle!=E))A._Done(C.FZ._this=null);if((A=C.F0._this)&&(A._cycle
!=E))A._Done(C.F0._this=null);if((A=C.G3._this)&&(A._cycle!=E))A._Done(C.G3._this=
null);if((A=C.G2._this)&&(A._cycle!=E))A._Done(C.G2._this=null);};return C;})();

/* Embedded Wizard */