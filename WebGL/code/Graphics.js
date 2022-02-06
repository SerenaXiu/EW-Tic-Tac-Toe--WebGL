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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var C={};
var Az=[0,0];var AE="Can not resize explicitly attached graphics engine bitmaps";
var Bf=[0,0,0,0];var BP="No graphics engine bitmap attached to this canvas";var Dq=
"The canvas is already initialized with a graphics engine bitmap";var Ef="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Eg=[1,1];var Fn=[2,2];
C.Canvas={GN:B.qL,DG:0,He:false,CM:function(){if(this.He)this.DetachBitmap();},Bo:
function(aArg){this.FQ=true;},Kv:function(D){if((D[0]<=0)||(D[1]<=0))D=Az;if(B.tH(
D,this.FrameSize))return;if(this.He)throw new Error(AE);this.FrameSize=D;this.D3=(((
this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(this.NoOfFrames>
1);if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.bitmap=null;}
,Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(this.FrameSize[
1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;var frameDelay=
this.FrameDelay;var handle=null;{handle=B.nm(B.ci,frameSize,frameDelay,noOfFrames
);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=Az;this.FrameDelay=0;this.
NoOfFrames=1;}this.GN=[].concat(Az,this.FrameSize);if(!!this.bitmap){var M8=this.
DG;for(this.DG=this.NoOfFrames-1;this.DG>=0;this.DG--)this.IP(this.GN,this.GN,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.DG=M8;}}if(!(((A=this.GN)[0]>=A[2]
)||(A[1]>=A[3])))this.GN=Bf;},DetachBitmap:function(){if(!this.He)throw new Error(
BP);this.bitmap=null;this.He=false;this.FrameSize=Az;this.FrameDelay=0;this.NoOfFrames=
1;this.D3=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(Dq);if(!aBitmap)return this;this.bitmap=aBitmap;this.He=true;var noOfFrames=
1;var frameSize=Az;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.D3=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},J7:function(aClip,Jw,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth
,Jy,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(aOffset<0)aOffset=0;if((!Jw||!Jw.font)||((aOffset>0)&&(aOffset>=
aString.length)))return;var orient=0;if(Jy===1)orient=90;else if(Jy===2)orient=180;
else if(Jy===3)orient=270;var dstFrameNo=this.DG;var dstBitmap=this.bitmap;var srcFont=
Jw.font;{B.np(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect
,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},LR:function(
aClip,aBitmap,aFrameNr,aDstRect,Gg,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var
A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.
bitmap)||!Gg)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.DG;var srcRect=[].concat(
Az,aBitmap.FrameSize);var left=((Gg&0x1)===0x1);var top=((Gg&0x2)===0x2);var right=((
Gg&0x4)===0x4);var bottom=((Gg&0x8)===0x8);var interior=((Gg&0x10)===0x10);{B.s2(
dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom
,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},IP:function(aClip,aDstRect
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.DG;{B.hs(dstBitmap,dstFrameNo
,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},LU:function(aClip
,aDstPos1,aDstPos2,MX,MY,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;var D0=MX;var D1=MY;var Dz=aDstPos1;var DA=aDstPos2;if(B.tH(
Dz,DA))return;if(D0<=1)D0=1;if(D1<=1)D1=1;var Eq=D0/2.000000;var Er=D1/2.000000;
var Fx=Dz[0];var Fy=Dz[1];var Fz=DA[0];var FA=DA[1];var B_=Fz-Fx;var B$=FA-Fy;var
Bb=Math.sqrt((B_*B_)+(B$*B$));if(((D0>4096)||(D1>4096))||(Bb>4096.000000)){B.uF(
"%s",Ef);return;}B_=B_/Bb;B$=B$/Bb;var x1=Fx+(B$*Eq);var y1=Fy-(B_*Eq);var x2=Fz+(
B$*Er);var y2=FA-(B_*Er);var x3=Fz-(B$*Er);var y3=FA+(B_*Er);var x4=Fx-(B$*Eq);var
y4=Fy+(B_*Eq);var Lz=B.tv(B.uO.H6);var srcRect=[].concat(Eg,B.tU(Lz.FrameSize,Fn
));var dstBitmap=this.bitmap;var dstFrameNo=this.DG;var srcBitmap=Lz.bitmap;{B.uG(
dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect
,aColor1,aColor2,aColor2,aColor1,aBlend,false);}},LT:function(aClip,aDstPos1,aDstPos2
,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var
dstBitmap=this.bitmap;var dstFrameNo=this.DG;{B.s4(dstBitmap,dstFrameNo,aClip,aDstPos1
,aDstPos2,aColor1,aColor2,aBlend);}},_Init:function(aArg){B.uO.A2._Init.call(this
,aArg);this.__proto__=C.Canvas;this.Bo(aArg);},_Done:function(){this.CM();this.__proto__=
B.uO.A2;B.uO.A2._Done.call(this);},_className:"Graphics::Canvas"};C.Ob={Left:0x1
,Ml:0x2,Right:0x4,LL:0x8,Or:0x10};
C._Init=function(){C.Canvas.__proto__=B.uO.A2;};C._ReInit=function(){};C.B6=function(
E){};return C;})();

/* Embedded Wizard */