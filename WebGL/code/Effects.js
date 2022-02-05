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
var Ax=[100,100];var AF="Trying to remove a fader from a task, which is actually running";
var BC="The fader doesn\'t belong to this task";var BJ="Trying to add a fader to a task, which is actually running";
var C9="The fader belongs already to a task";
C.Fr={By:null,timer:null,Hg:null,Hf:null,GO:0,En:0,Cw:0,BO:0,GQ:0.001000,CO:0,As:
0,AL:0,H$:0.500000,Ju:3,Gt:3,F_:0.500000,CB:3.000000,IO:0,IN:0,CD:0,DP:1000,DS:0
,DX:0,AD:false,IK:false,Fm:false,H3:false,E0:function(An){var A;if(!this.timer)return;
if(!this.En){if(this.IK)this.En=-1;else this.En=1;this.GO=this.En;this.AL=this.timer.
AR;this.As=0;this.CO=-1.000000;}var B2;if((this.En>0)&&(this.GO>0))B2=this.M0();
else if((this.En<0)&&(this.GO<0))B2=this.M3();else if(this.En>0)B2=this.M1();else
B2=this.M2();if(B2){this.AV(false);(A=this.Hg)?A[1].call(A[0],this):null;}},H1:function(
H){var A;if(!this.By&&(((this.DX===19)||(this.DX===20))||(this.DX===21))){var HC=
this.Ju+1;var MB=Math.sqrt(this.H$);var Fl=0.500000;var J;this.By=B._NewObject(C.
Ht,0);this.By.BR.Set(0,1.000000);this.By.EK.Set(0,1.000000);for(J=1;J<HC;J=J+1){
this.By.BR.Set(J,this.By.BR.Get(J-1)*MB);this.By.EK.Set(J,this.By.EK.Get(J-1)*this.
H$);Fl=Fl+this.By.BR.Get(J);}var MD=1.000000/Fl;this.By.BR.Set(0,0.500000);Fl=0.000000;
for(J=0;J<HC;J=J+1){this.By.BR.Set(J,this.By.BR.Get(J)*MD);Fl=Fl+this.By.BR.Get(
J);}this.By.BR.Set(HC,this.By.BR.Get(HC)+(1.000000-Fl));}switch(this.DX){case 1:
H=Math.pow(H,this.CB);break;case 2:{H=1.000000-H;H=1.000000-Math.pow(H,this.CB);
}break;case 3:{H=H*2.000000;if(H<1.000000)H=Math.pow(H,this.CB)/2.000000;else{H=
2.000000-H;H=(2.000000-Math.pow(H,this.CB))*0.500000;}}break;case 4:H=(Math.pow(
2.718000,this.CB*H)-1.000000)/(Math.pow(2.718000,this.CB)-1.000000);break;case 5:{
H=1.000000-H;H=1.000000-((Math.pow(2.718000,this.CB*H)-1.000000)/(Math.pow(2.718000
,this.CB)-1.000000));}break;case 6:{H=H*2.000000;if(H<1.000000)H=((Math.pow(2.718000
,this.CB*H)-1.000000)/(Math.pow(2.718000,this.CB)-1.000000))/2.000000;else{H=2.000000-
H;H=(2.000000-((Math.pow(2.718000,this.CB*H)-1.000000)/(Math.pow(2.718000,this.CB
)-1.000000)))*0.500000;}}break;case 7:H=1.000000-Math.cos((H*90.000000)*B.iq);break;
case 8:H=Math.sin((H*90.000000)*B.iq);break;case 9:{H=H*2.000000;if(H<1.000000){
H=1.000000-Math.cos((H*90.000000)*B.iq);H=H*0.500000;}else{H=2.000000-H;H=1.000000-
Math.cos((H*90.000000)*B.iq);H=(2.000000-H)*0.500000;}}break;case 10:H=1.000000-
Math.sqrt(1.000000-(H*H));break;case 11:{H=1.000000-H;H=Math.sqrt(1.000000-(H*H)
);}break;case 12:{H=H*2.000000;if(H<1.000000){H=1.000000-Math.sqrt(1.000000-(H*H
));H=H*0.500000;}else{H=2.000000-H;H=1.000000-Math.sqrt(1.000000-(H*H));H=(2.000000-
H)*0.500000;}}break;case 13:H=((H*H)*H)-((H*this.F_)*Math.sin((H*180.000000)*B.iq
));break;case 14:{H=1.000000-H;H=((H*H)*H)-((H*this.F_)*Math.sin((H*180.000000)*
B.iq));H=1.000000-H;}break;case 15:{H=H*2.000000;if(H<1.000000){H=((H*H)*H)-((H*
this.F_)*Math.sin((H*180.000000)*B.iq));H=H*0.500000;}else{H=2.000000-H;H=((H*H)
*H)-((H*this.F_)*Math.sin((H*180.000000)*B.iq));H=(2.000000-H)*0.500000;}}break;
case 16:H=((H*H)*H)*Math.sin(((H*90.000000)*(1+(4*this.Gt)))*B.iq);break;case 17:{
H=1.000000-H;H=1.000000-(((H*H)*H)*Math.sin(((H*90.000000)*(1+(4*this.Gt)))*B.iq
));}break;case 18:{H=H*2.000000;if(H<1.000000){H=((H*H)*H)*Math.sin(((H*90.000000
)*(1+(4*this.Gt)))*B.iq);H=H*0.500000;}else{H=2.000000-H;H=((H*H)*H)*Math.sin(((
H*90.000000)*(1+(4*this.Gt)))*B.iq);H=(2.000000-H)*0.500000;}}break;case 19:{var
Db=this.By;var J=0;var Dh=0.000000;var B7=Db.BR.Get(0);var BS=1.000000-H;while(BS>
B7){J=J+1;Dh=B7;B7=B7+Db.BR.Get(J);}H=(BS-Dh)/(B7-Dh);if(!J)H=1.000000-(H*H);else{
H=(2.000000*H)-1.000000;H=Db.EK.Get(J)*(1.000000-(H*H));}}break;case 20:{var Db=
this.By;var J=0;var Dh=0.000000;var B7=Db.BR.Get(0);while(H>B7){J=J+1;Dh=B7;B7=B7+
Db.BR.Get(J);}H=(H-Dh)/(B7-Dh);if(!J)H=H*H;else{H=(2.000000*H)-1.000000;H=1.000000-(
Db.EK.Get(J)*(1.000000-(H*H)));}}break;case 21:{var Db=this.By;var J=0;var Dh=0.000000;
var B7=Db.BR.Get(0);var Cx=H*2.000000;var BS=Cx-1.000000;if(Cx<1.000000)BS=-BS;while(
BS>B7){J=J+1;Dh=B7;B7=B7+Db.BR.Get(J);}BS=(BS-Dh)/(B7-Dh);if(!J)BS=BS*BS;else{BS=(
2.000000*BS)-1.000000;BS=1.000000-(Db.EK.Get(J)*(1.000000-(BS*BS)));}if(Cx<1.000000
)H=0.500000*(1.000000-BS);else H=0.500000*(1.000000+BS);}break;default:if(this.Fm
){var Cx=H;var GV=1.000000-Cx;H=((GV*Cx)*(this.BO+1.000000))+(Cx*Cx);}else if(this.
H3){var Cx=H;var GV=1.000000-Cx;var KJ=Cx*Cx;var MJ=GV*GV;H=(((MJ*Cx)*(this.BO+1.000000
))+((GV*KJ)*(this.Cw+2.000000)))+(KJ*Cx);}}this.H5(H);(A=this.Hf)?A[1].call(A[0]
,this):null;},M3:function(){var X=(this.timer.AR-this.AL)|0;if(X<0)X=-X;var Cp=this.
DS;var CP=this.DS+this.DP;var AY=this.DP;var B2=false;var AJ=this.CO;if(!this.As&&(
X>=CP)){this.As=1;X=X-CP;this.AL=this.AL+CP;}if((this.As>0)&&(X>=AY)){var A9=(X/
AY)|0;this.As=this.As+A9;X=X-(A9*AY);this.AL=this.AL+(A9*AY);}if((this.As>2)&&!this.
CD)this.As=1;if(this.As>0)Cp=0;if((this.As>=this.CD)&&(this.CD>0)){B2=true;AJ=0.000000;
}else if(X>=Cp)AJ=1.000000-((X-Cp)*this.GQ);else if(AJ>=0.000000)AJ=0.000000;if(
AJ!==this.CO){this.CO=AJ;this.H1(AJ);}return B2;},M2:function(){var X=(this.AL-this.
timer.AR)|0;var Cp=this.DS;var CP=this.DS+this.DP;var AY=this.DP;var B2=false;var
AJ=this.CO;if((this.As>1)&&(X<0)){var A9=(((-X+AY)-1)/AY)|0;if((this.As-A9)<=0)A9=
this.As-1;this.As=this.As-A9;X=X+(A9*AY);this.AL=this.AL+(A9*AY);}if(((this.As===
1)&&(X<0))&&(this.CD>0)){this.As=0;X=X+CP;this.AL=this.AL+CP;}if(((this.As===1)&&(
X<0))&&!this.CD){var A9=(((-X+AY)-1)/AY)|0;X=X+(A9*AY);this.AL=this.AL+(A9*AY);}
if(this.As>0)Cp=0;if(X<0){B2=true;AJ=1.000000;}else if(X>=Cp)AJ=1.000000-((X-Cp)
*this.GQ);else if(AJ>=0.000000)AJ=1.000000;if(AJ!==this.CO){this.CO=AJ;this.H1(AJ
);}return B2;},M1:function(){var X=(this.AL-this.timer.AR)|0;var Cp=this.DS;var CP=
this.DS+this.DP;var AY=this.DP;var B2=false;var AJ=this.CO;if((this.As>1)&&(X<0)
){var A9=(((-X+AY)-1)/AY)|0;if((this.As-A9)<=0)A9=this.As-1;this.As=this.As-A9;X=
X+(A9*AY);this.AL=this.AL+(A9*AY);}if(((this.As===1)&&(X<0))&&(this.CD>0)){this.
As=0;X=X+CP;this.AL=this.AL+CP;}if(((this.As===1)&&(X<0))&&!this.CD){var A9=(((-
X+AY)-1)/AY)|0;X=X+(A9*AY);this.AL=this.AL+(A9*AY);}if(this.As>0)Cp=0;if(X<0){B2=
true;AJ=0.000000;}else if(X>=Cp)AJ=(X-Cp)*this.GQ;else if(AJ>=0.000000)AJ=0.000000;
if(AJ!==this.CO){this.CO=AJ;this.H1(AJ);}return B2;},M0:function(){var X=(this.timer.
AR-this.AL)|0;if(X<0)X=-X;var Cp=this.DS;var CP=this.DS+this.DP;var AY=this.DP;var
B2=false;var AJ=this.CO;if(!this.As&&(X>=CP)){this.As=1;X=X-CP;this.AL=this.AL+CP;
}if((this.As>0)&&(X>=AY)){var A9=(X/AY)|0;this.As=this.As+A9;X=X-(A9*AY);this.AL=
this.AL+(A9*AY);}if((this.As>2)&&!this.CD)this.As=1;if(this.As>0)Cp=0;if((this.As>=
this.CD)&&(this.CD>0)){B2=true;AJ=1.000000;}else if(X>=Cp)AJ=(X-Cp)*this.GQ;else
if(AJ>=0.000000)AJ=1.000000;if(AJ!==this.CO){this.CO=AJ;this.H1(AJ);}return B2;}
,Kh:function(D){if(this.IK===D)return;this.IK=D;if(!this.AD||!this.En)return;if(
D)this.GO=-1;else this.GO=1;this.AL=(this.timer.Gh()*2)-this.AL;},JP:function(D){
if(D<0.000000)D=0.000000;if(D>1.000000)D=1.000000;this.H$=D;},JO:function(D){if(
D<1)D=1;if(D>10)D=10;this.Ju=D;this.By=null;},Kg:function(D){if(D<1)D=1;if(D>10)
D=10;this.Gt=D;},JM:function(D){if(D<0.000000)D=0.000000;if(D>10.000000)D=10.000000;
this.F_=D;},JQ:function(D){if(D<1.000000)D=1.000000;if(D>100.000000)D=100.000000;
this.CB=D;},Kk:function(D){if(this.IO===D)return;this.IO=D;if(this.DX===26){this.
Cw=D;this.Fm=(this.BO===this.Cw)&&(this.BO!==0.000000);this.H3=!this.Fm&&(this.BO
!==this.Cw);}},Kj:function(D){if(this.IN===D)return;this.IN=D;if(this.DX===26){this.
BO=D;this.Fm=(this.BO===this.Cw)&&(this.BO!==0.000000);this.H3=!this.Fm&&(this.BO
!==this.Cw);}},Ki:function(D){if(this.DX===D)return;this.DX=D;this.By=null;switch(
D){case 24:{this.BO=-1.100000;this.Cw=1.100000;}break;case 22:{this.BO=-1.000000;
this.Cw=-2.000000;}break;case 23:{this.BO=2.000000;this.Cw=1.000000;}break;case 25:{
this.BO=1.100000;this.Cw=-1.100000;}break;case 0:{this.BO=0.000000;this.Cw=0.000000;
}break;default:{this.BO=this.IN;this.Cw=this.IO;}}this.Fm=(this.BO===this.Cw)&&(
this.BO!==0.000000);this.H3=!this.Fm&&(this.BO!==this.Cw);},Kf:function(D){if(D<
0)D=0;this.CD=D;},Hh:function(D){if(D<15)D=15;this.DP=D;this.GQ=1.000000/D;},J6:
function(D){if(D<0)D=0;this.DS=D;},AV:function(D){if(this.AD===D)return;this.AD=
D;if(!D&&!!this.timer){B.sY([this,this.E0],this.timer,0);this.timer=null;}if(D){
this.timer=B._GetAutoObject(C.Gc);B.sL([this,this.E0],this.timer,0);this.En=0;B.
lz([this,this.E0],this);}},H5:function(GI){},_Init:function(aArg){this.__proto__=
C.Fr;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.By)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Hg)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Hf)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);
if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:null
,_className:"Effects::Effect"};C.Im={Hl:null,DY:0,Bl:255,Bk:0,H5:function(GI){var
Dv;this.DY=this.Bk+(Math.round((this.Bl-this.Bk)*GI)|0);if(!!this.Hl)(Dv=this.Hl
,Dv[2].call(Dv[0],this.DY));},_Init:function(aArg){C.Fr._Init.call(this,aArg);this.
__proto__=C.Im;},_Mark:function(E){var A;C.Fr._Mark.call(this,E);if((A=this.Hl)&&((
A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Effects::Int32Effect"};C.IH={
DY:B.qK,Bl:Ax,Bk:B.qK,H5:function(GI){var Fn=this.Bk[0];var C3=this.Bk[1];Fn=Fn+(
Math.round((this.Bl[0]-Fn)*GI)|0);C3=C3+(Math.round((this.Bl[1]-C3)*GI)|0);this.
DY=[Fn,C3];},_Init:function(aArg){C.Fr._Init.call(this,aArg);this.__proto__=C.IH;
},_className:"Effects::PointEffect"};C.DR={Cz:null,R:null,O:null,G:null,L:null,HU:
null,Ji:null,Go:null,A2:true,AD:true,Gz:true,G5:false,G6:true,FE:true,E6:true,C6:
function(){if(!!this.Cz)this.Cz.C6();},Iq:function(){return true;},IB:function(){
},Fz:function(){this.C6();},_Init:function(aArg){this.__proto__=C.DR;B.gx++;},_Done:
function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.Cz)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.R)&&(A._cycle!=E)
)A._Mark(A._cycle=E);if((A=this.O)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
G)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.HU)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ji)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Go)&&((A=A[0])._cycle!=E))A._Mark(
A._cycle=E);if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:0,_observers:
null,_className:"Effects::Fader"};C.FF={Kp:B.qK,EN:false,Iq:function(){return this.
EN;},IB:function(){if(!this.A2&&!!this.L.G)this.L.Fy(false);if((!this.A2&&this.E6
)&&!!this.L.G)this.L.G.E5(this.L);if(!this.AD)this.L.AV(false);},Fz:function(){if(
this.AD)this.L.AV(true);if((this.A2||this.G5)&&!this.L.G){this.L.Fy(false);this.
G.Af(this.L,0);}if(this.A2&&this.FE)this.L.G.Hr(this.L);if(this.A2&&this.G6)this.
L.G.CV(this.L);if(this.A2&&!this.Gz)this.L.Y(B.uk(this.L.S,this.Kp));if(this.A2){
this.L.E4(255);this.L.Fy(true);}if(!this.A2&&(this.G.BV===this.L))this.G.CV(null
);this.EN=true;this.C6();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.
__proto__=C.FF;},_className:"Effects::VisibilityFader"};C.FB={Av:null,Ad:null,EN:
false,M9:false,Iq:function(){return this.EN;},IB:function(){if(this.A2){this.L.E4(
this.Av.Bl);this.L.Y(B.uk(this.L.S,this.Ad.Bl));}if(!this.A2&&!this.L.CY)this.L.
Fy(false);if((!this.A2&&this.E6)&&!!this.L.G)this.L.G.E5(this.L);if(!this.AD)this.
L.AV(false);},Fz:function(){var A;if(this.Gz){if(this.L.Fx()&&!!this.L.G)this.Av.
Bk=this.L.CY;else this.Av.Bk=0;this.Ad.Bk=this.L.S.slice(0,2);}var ME=((!this.L.
G||!this.L.CY)||!this.L.Fx())||(((A=B.it(this.L.S,[0,0,(A=this.G.S)[2]-A[0],A[3]-
A[1]]))[0]>=A[2])||(A[1]>=A[3]));var MF=((!this.A2&&((!this.L.G||!this.L.Fx())||
this.E6))||!this.Av.Bl)||(((A=B.it(B.tX([0,0,(A=this.L.S)[2]-A[0],A[3]-A[1]],this.
Ad.Bl),[0,0,(A=this.G.S)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(ME&&MF
){this.Av.Bk=0;this.Av.Bl=0;this.Ad.Bk=this.Ad.Bl;}this.M9=this.L.Lo();if(this.AD
)this.L.AV(true);if((this.A2||this.G5)&&!this.L.G){this.L.Fy(false);this.G.Af(this.
L,0);}if(this.A2&&this.FE)this.L.G.Hr(this.L);if(this.A2&&this.G6)this.L.G.CV(this.
L);if(!this.A2&&(this.G.BV===this.L))this.G.CV(null);if(this.A2&&!this.L.Fx()){this.
L.Y(B.uk(this.L.S,this.Ad.Bk));this.L.E4(this.Av.Bk);this.L.Fy(true);}if(!this.A2&&((
!this.L.G||!this.L.Fx())||!this.L.CY)){this.EN=true;this.C6();return;}if(!this.A2&&
B.tH(this.Ad.Bk,this.Ad.Bl))this.L.Y(B.uk(this.L.S,this.Ad.Bk));if(!this.A2&&(this.
Av.Bk===this.Av.Bl))this.L.E4(this.Av.Bk);if((this.L.CY===this.Av.Bl)&&B.tH(this.
L.S.slice(0,2),this.Ad.Bl)){this.EN=true;this.C6();return;}if((this.Av.Bk===this.
Av.Bl)&&B.tH(this.Ad.Bk,this.Ad.Bl)){this.EN=true;this.C6();return;}if(!this.Av.
CD)this.Av.Kf(1);if(!this.Ad.CD)this.Ad.Kf(1);this.Ad.Kh(false);this.Ad.Hg=[this
,this.KW];this.Ad.Hf=[this,this.MM];this.Av.Hl=[A=this.L,A.Lq,A.Ml];this.Av.Kh(false
);this.Av.Hg=[this,this.KW];this.Av.Hf=null;this.Ad.AV(!B.tH(this.Ad.Bk,this.Ad.
Bl));this.Av.AV(this.Av.Bk!==this.Av.Bl);},KW:function(An){this.EN=!this.Av.AD&&
!this.Ad.AD;this.C6();},MM:function(An){this.L.Y(B.uk(this.L.S,this.Ad.DY));},_Init:
function(aArg){C.DR._Init.call(this,aArg);C.Im._Init.call(this.Av={T:this},0);C.
IH._Init.call(this.Ad={T:this},0);this.__proto__=C.FB;},_Done:function(){this.__proto__=
C.DR;this.Av._Done();this.Ad._Done();C.DR._Done.call(this);},_ReInit:function(){
C.DR._ReInit.call(this);this.Av._ReInit();this.Ad._ReInit();},_Mark:function(E){
var A;C.DR._Mark.call(this,E);if((A=this.Av)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.Ad)._cycle!=E)A._Mark(A._cycle=E);},_className:"Effects::PositionFader"};C.
EI={DN:function(){return null;},DM:function(){return null;},Fp:function(){return this.
DN();},Fo:function(){return this.DM();},_Init:function(aArg){this.__proto__=C.EI;
B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};C.IL={DN:function(){var K=B.
_NewObject(C.FF,0);K.A2=true;K.AD=true;K.G6=false;K.FE=true;K.Gz=false;K.Go=[this
,this.Jk];return K;},DM:function(){var K=B._NewObject(C.FF,0);K.A2=false;K.AD=false;
K.E6=true;return K;},Fp:function(){var K=C.EI.Fp.call(this);K.FE=false;K.AD=true;
return K;},Fo:function(){var K=B._NewObject(C.FF,0);K.A2=false;K.AD=true;K.G5=true;
K.E6=false;return K;},Jk:function(An){var A;var K=(C.FF.isPrototypeOf(An)?An:null
);var Z=[0,0,(A=K.G.S)[2]-A[0],A[3]-A[1]];var BQ=[(A=K.L.S)[2]-A[0],A[3]-A[1]];var
U=Z.slice(0,2);U=[(Z[0]+(((Z[2]-Z[0])/2)|0))-((BQ[0]/2)|0),U[1]];U=[U[0],(Z[1]+(((
Z[3]-Z[1])/2)|0))-((BQ[1]/2)|0)];K.Kp=U;},_Init:function(aArg){C.EI._Init.call(this
,aArg);this.__proto__=C.IL;},_className:"Effects::ShowHideTransition"};C.Hs={Gb:
0,DN:function(){var K=B._NewObject(C.FB,0);K.A2=true;K.AD=true;K.G6=false;K.FE=true;
K.Gz=true;K.Go=[this,this.Jk];K.Av.Hh(500);K.Av.J6(0);K.Av.Bk=0;K.Av.Bl=255;K.Ad.
Hh(500);K.Ad.Ki(23);K.Ad.Kj(0.000000);K.Ad.Kk(0.000000);K.Ad.JQ(3.000000);K.Ad.JM(
0.500000);K.Ad.Kg(3);K.Ad.JO(3);K.Ad.JP(0.500000);return K;},DM:function(){var K=
B._NewObject(C.FB,0);K.A2=false;K.AD=false;K.E6=true;K.Gz=true;K.Go=[this,this.MQ
];K.Av.Bk=255;K.Av.Bl=0;K.Av.Hh(500);K.Av.J6(0);K.Ad.Hh(500);K.Ad.Ki(23);K.Ad.Kj(
0.000000);K.Ad.Kk(0.000000);K.Ad.JQ(3.000000);K.Ad.JM(0.500000);K.Ad.Kg(3);K.Ad.
JO(3);K.Ad.JP(0.500000);return K;},Fp:function(){var K=C.EI.Fp.call(this);K.FE=false;
K.AD=true;return K;},Fo:function(){var K=C.EI.Fo.call(this);K.G5=true;K.E6=false;
K.AD=true;return K;},Jk:function(An){var A;var K=(C.FB.isPrototypeOf(An)?An:null
);var Z=[0,0,(A=K.G.S)[2]-A[0],A[3]-A[1]];var BQ=[(A=K.L.S)[2]-A[0],A[3]-A[1]];var
U=Z.slice(0,2);U=[(Z[0]+(((Z[2]-Z[0])/2)|0))-((BQ[0]/2)|0),U[1]];U=[U[0],(Z[1]+(((
Z[3]-Z[1])/2)|0))-((BQ[1]/2)|0)];K.Ad.Bl=U;if(((!K.L.G||!K.L.Fx())||!K.L.CY)||(((
A=B.it(K.L.S,[0,0,(A=K.G.S)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]))){var CQ=[(
A=K.G.S)[2]-A[0],A[3]-A[1]];switch(this.Gb){case 5:U=[U[0],-BQ[1]];break;case 3:{
U=[U[0],-BQ[1]];U=[CQ[0],U[1]];}break;case 8:U=[-BQ[0],-BQ[1]];break;case 2:U=[CQ[
0],U[1]];break;case 7:U=[-BQ[0],U[1]];break;case 4:U=[U[0],CQ[1]];break;case 1:{
U=[U[0],CQ[1]];U=[CQ[0],U[1]];}break;case 6:{U=[U[0],CQ[1]];U=[-BQ[0],U[1]];}break;
default:;}K.L.Y(B.uk(K.L.S,U));}},MQ:function(An){var A;var K=(C.FB.isPrototypeOf(
An)?An:null);var U=K.L.S.slice(0,2);var BQ=[(A=K.L.S)[2]-A[0],A[3]-A[1]];var CQ=[(
A=K.G.S)[2]-A[0],A[3]-A[1]];switch(this.Gb){case 5:U=[U[0],CQ[1]];break;case 3:{
U=[U[0],CQ[1]];U=[-BQ[0],U[1]];}break;case 8:{U=[U[0],CQ[1]];U=[CQ[0],U[1]];}break;
case 2:U=[-BQ[0],U[1]];break;case 7:U=[CQ[0],U[1]];break;case 4:U=[U[0],-BQ[1]];
break;case 1:U=[-BQ[0],-BQ[1]];break;case 6:{U=[U[0],-BQ[1]];U=[CQ[0],U[1]];}break;
default:;}K.Ad.Bl=U;},_Init:function(aArg){C.EI._Init.call(this,aArg);this.__proto__=
C.Hs;},_className:"Effects::SlideTransition"};C.DX={NX:0,N5:1,N7:2,N6:3,NI:4,NK:
5,NJ:6,Oi:7,Ol:8,Oj:9,Nw:10,Ny:11,Nx:12,Nl:13,Nn:14,Nm:15,NE:16,NG:17,NF:18,Nt:19
,Nv:20,Nu:21,NC:22,NL:23,NB:24,NM:25,Nz:26};C.H_={Trigger:function(){B.Core.Timer.
Trigger.call(this);B.qJ(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this
,aArg);this.__proto__=C.H_;},_className:"Effects::EffectTimerClass"};C.Gc={_Init:
function(){C.H_._Init.call(this,0);this.Gq(15);this.AV(true);},_variants:function(
){return this;},_this:null};C.Ht={BR:B.tY(12,0,null),EK:B.tY(12,0,null),_Init:function(
aArg){(this.BR=[]).__proto__=C.Ht.BR;(this.EK=[]).__proto__=C.Ht.EK;this.__proto__=
C.Ht;B.gx++;},_Done:function(){this.__proto__=null;B.gx--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.T)&&(A._cycle!=E))A._Mark(A._cycle=E);},T:null
,_cycle:0,_observers:null,_className:"Effects::TimingList"};C.G_={Al:null,Ak:null
,JK:function(GJ){var K=this.Ak;while(!!K){K.IB();K.L.F=K.L.F&~0x40000;K=K.O;}K=this.
Ak;while(!!K){B.lz(K.Ji,K);K=K.O;}},JJ:function(GJ){var K=this.Ak;while(!!K){B.lz(
K.HU,K);K=K.O;}this.Ak=null;this.Al=null;},Fz:function(GJ){var A;if(!this.Ak)this.
C6();var K=this.Ak;while(!!K){K.L.F=(K.L.F|0x40000)&~0x20000;K.L.Fi=null;K=K.O;}
K=this.Ak;while(!!K){(A=K.Go)?A[1].call(A[0],K):null;K.Fz();K=K.O;}},C6:function(
){var K=this.Ak;while(!!K&&K.Iq())K=K.O;if(!K)B.Core.Gy.C6.call(this);},LH:function(
Ap){if(!Ap)return;if(this.Io())throw new Error(AF);if(Ap.Cz!==this)throw new Error(
BC);if(!!Ap.O)Ap.O.R=Ap.R;else this.Al=Ap.R;if(!!Ap.R)Ap.R.O=Ap.O;else this.Ak=Ap.
O;Ap.Cz=null;Ap.O=null;Ap.R=null;if(!!Ap.L)Ap.L.Fi=null;B.lz(Ap.HU,Ap);if(!this.
Ak)this.Jv();},Jt:function(Ap){if(!Ap)return;if(this.Io())throw new Error(BJ);if(
!!Ap.Cz)throw new Error(C9);Ap.R=this.Al;Ap.O=null;if(!!this.Al)this.Al.O=Ap;else
this.Ak=Ap;this.Al=Ap;Ap.Cz=this;},_Init:function(aArg){B.Core.Gy._Init.call(this
,aArg);this.__proto__=C.G_;},_Mark:function(E){var A;B.Core.Gy._Mark.call(this,E
);if((A=this.Al)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ak)&&(A._cycle!=E
))A._Mark(A._cycle=E);},_className:"Effects::FaderTask"};C.DV={_Init:function(){
C.IL._Init.call(this,0);},_variants:function(){return this;},_this:null};C.Gx={_Init:
function(){C.Hs._Init.call(this,0);this.Gb=4;},_variants:function(){return this;
},_this:null};C.Gw={_Init:function(){C.Hs._Init.call(this,0);this.Gb=5;},_variants:
function(){return this;},_this:null};
C._Init=function(){C.Im.__proto__=C.Fr;C.IH.__proto__=C.Fr;C.FF.__proto__=C.DR;C.
FB.__proto__=C.DR;C.IL.__proto__=C.EI;C.Hs.__proto__=C.EI;C.H_.__proto__=B.Core.
Timer;C.G_.__proto__=B.Core.Gy;};C._ReInit=function(){var A;if((A=C.Gc._this))A.
_ReInit();if((A=C.DV._this))A._ReInit();if((A=C.Gx._this))A._ReInit();if((A=C.Gw.
_this))A._ReInit();};C.BY=function(E){var A;if((A=C.Gc._this)&&(A._cycle!=E))A._Done(
C.Gc._this=null);if((A=C.DV._this)&&(A._cycle!=E))A._Done(C.DV._this=null);if((A=
C.Gx._this)&&(A._cycle!=E))A._Done(C.Gx._this=null);if((A=C.Gw._this)&&(A._cycle
!=E))A._Done(C.Gw._this=null);};return C;})();

/* Embedded Wizard */