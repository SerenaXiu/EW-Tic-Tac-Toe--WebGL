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
var Ax=[0,0];var AF="Can not resize explicitly attached graphics engine bitmaps";
var BC=[0,0,0,0];var BJ="No graphics engine bitmap attached to this canvas";var C9=
"The canvas is already initialized with a graphics engine bitmap";var DZ="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var D0=[1,1];var GA=[2,2];
C.Canvas={Gk:B.qL,Dl:0,GK:false,CA:function(){if(this.GK)this.DetachBitmap();},Bs:
function(aArg){this.Fw=true;},JZ:function(D){if((D[0]<=0)||(D[1]<=0))D=Ax;if(B.tH(
D,this.FrameSize))return;if(this.GK)throw new Error(AF);this.FrameSize=D;this.DL=(((
this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(this.NoOfFrames>
1);if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.bitmap=null;}
,Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0]>0))&&(this.FrameSize[
1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;var frameDelay=
this.FrameDelay;var handle=null;{handle=B.nm(B.ci,frameSize,frameDelay,noOfFrames
);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=Ax;this.FrameDelay=0;this.
NoOfFrames=1;}this.Gk=[].concat(Ax,this.FrameSize);if(!!this.bitmap){var MA=this.
Dl;for(this.Dl=this.NoOfFrames-1;this.Dl>=0;this.Dl--)this.Ig(this.Gk,this.Gk,0x00000000
,0x00000000,0x00000000,0x00000000,false);this.Dl=MA;}}if(!(((A=this.Gk)[0]>=A[2]
)||(A[1]>=A[3])))this.Gk=BC;},DetachBitmap:function(){if(!this.GK)throw new Error(
BJ);this.bitmap=null;this.GK=false;this.FrameSize=Ax;this.FrameDelay=0;this.NoOfFrames=
1;this.DL=false;return this;},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new
Error(C9);if(!aBitmap)return this;this.bitmap=aBitmap;this.GK=true;var noOfFrames=
1;var frameSize=Ax;var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.
FrameSize;frameDelay=aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=
frameSize;this.FrameDelay=frameDelay;this.DL=(this.FrameDelay>0)&&(this.NoOfFrames>
1);return this;},Jy:function(aClip,IY,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth
,I0,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(aOffset<0)aOffset=0;if((!IY||!IY.font)||((aOffset>0)&&(aOffset>=
aString.length)))return;var orient=0;if(I0===1)orient=90;else if(I0===2)orient=180;
else if(I0===3)orient=270;var dstFrameNo=this.Dl;var dstBitmap=this.bitmap;var srcFont=
IY.font;{B.np(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect
,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Lf:function(
aClip,aBitmap,aFrameNr,aDstRect,FJ,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var
A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.
bitmap)||!FJ)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Dl;var srcRect=[].concat(
Ax,aBitmap.FrameSize);var left=((FJ&0x1)===0x1);var top=((FJ&0x2)===0x2);var right=((
FJ&0x4)===0x4);var bottom=((FJ&0x8)===0x8);var interior=((FJ&0x10)===0x10);{B.s2(
dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom
,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ig:function(aClip,aDstRect
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Dl;{B.hs(dstBitmap,dstFrameNo
,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Li:function(aClip
,aDstPos1,aDstPos2,Mp,Mq,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;var DI=Mp;var DJ=Mq;var Df=aDstPos1;var Dg=aDstPos2;if(B.tH(
Df,Dg))return;if(DI<=1)DI=1;if(DJ<=1)DJ=1;var D9=DI/2.000000;var D_=DJ/2.000000;
var Fb=Df[0];var Fc=Df[1];var Fd=Dg[0];var Fe=Dg[1];var B0=Fd-Fb;var B1=Fe-Fc;var
A$=Math.sqrt((B0*B0)+(B1*B1));if(((DI>4096)||(DJ>4096))||(A$>4096.000000)){B.uF(
"%s",DZ);return;}B0=B0/A$;B1=B1/A$;var x1=Fb+(B1*D9);var y1=Fc-(B0*D9);var x2=Fd+(
B1*D_);var y2=Fe-(B0*D_);var x3=Fd-(B1*D_);var y3=Fe+(B0*D_);var x4=Fb-(B1*D9);var
y4=Fc+(B0*D9);var KZ=B.tv(B.uO.Hv);var srcRect=[].concat(D0,B.tU(KZ.FrameSize,GA
));var dstBitmap=this.bitmap;var dstFrameNo=this.Dl;var srcBitmap=KZ.bitmap;{B.uG(
dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3,1.0,x4,y4,1.0,srcRect
,aColor1,aColor2,aColor2,aColor1,aBlend,false);}},Lh:function(aClip,aDstPos1,aDstPos2
,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var
dstBitmap=this.bitmap;var dstFrameNo=this.Dl;{B.s4(dstBitmap,dstFrameNo,aClip,aDstPos1
,aDstPos2,aColor1,aColor2,aBlend);}},_Init:function(aArg){B.uO.A0._Init.call(this
,aArg);this.__proto__=C.Canvas;this.Bs(aArg);},_Done:function(){this.CA();this.__proto__=
B.uO.A0;B.uO.A0._Done.call(this);},_className:"Graphics::Canvas"};C.ND={Left:0x1
,LP:0x2,Right:0x4,La:0x8,NS:0x10};
C._Init=function(){C.Canvas.__proto__=B.uO.A0;};C._ReInit=function(){};C.BY=function(
E){};return C;})();

/* Embedded Wizard */