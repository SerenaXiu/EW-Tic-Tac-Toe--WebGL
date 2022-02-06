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
);if(EmWiApp.uO)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.uO=(function(){var B=EmWiApp;var C={};
var Az=[0,0];var AE="The property \'FrameSize\' is READ ONLY.";
C.A2={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.qK,FQ:false,D3:false,CM:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.bitmap=null;this.
FrameSize=Az;this.FrameDelay=0;this.NoOfFrames=1;this.D3=false;},Bo:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Az;var frameDelay=
0;{var bmp=B.tN(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.FQ=true;this.D3=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Kv:function(D){throw new Error(
AE);},Update:function(){},_Init:function(aArg){B.Core.Eb._Init.call(this,aArg);this.
__proto__=C.A2;this.Bo(aArg);},_Done:function(){this.CM();this.__proto__=B.Core.
Eb;B.Core.Eb._Done.call(this);},_className:"Resources::Bitmap"};C.C7={_class:function(
){return C.Bz;},0:{Data:function(){return B.uU;},Cache:[],_this:null}};C.Bz={font:
null,Leading:0,Descent:0,Ascent:0,CM:function(){this.M_();},Bo:function(aArg){this.
Nc(aArg);},M_:function(){if(!this.font)return;var handle=this.font;B.s_(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},Nc:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.tP(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},J9:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.tf(handle,aFlowString);return advance;}
,Me:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.hr;var handle=this.
font;var result=B.hr;result=B.t_(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},GL:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.jP(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.Eb._Init.call(this,aArg);this.__proto__=C.Bz;this.Bo(aArg);
},_Done:function(){this.CM();this.__proto__=B.Core.Eb;B.Core.Eb._Done.call(this);
},_className:"Resources::Font"};C.DH={_class:function(){return C.Bz;},0:{Data:function(
){return B.uY;},Cache:[],_this:null}};C.IQ={_class:function(){return C.Bz;},0:{Data:
function(){return B.uX;},Cache:[],_this:null}};C.HJ={_class:function(){return C.
Bz;},0:{Data:function(){return B.uW;},Cache:[],_this:null}};C.HI={_class:function(
){return C.Bz;},0:{Data:function(){return B.uV;},Cache:[],_this:null}};C.H6={_class:
function(){return C.A2;},0:{FileName:"./res/ResourcesWhiteBitmapStripe.png",Format:
B.ly,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:null}};
C._Init=function(){C.A2.__proto__=B.Core.Eb;C.Bz.__proto__=B.Core.Eb;};C._ReInit=
function(){};C.B6=function(E){var A;if((A=C.C7[0]._this)&&(A._cycle!=E))A._Done(
C.C7[0]._this=null);if((A=C.DH[0]._this)&&(A._cycle!=E))A._Done(C.DH[0]._this=null
);if((A=C.IQ[0]._this)&&(A._cycle!=E))A._Done(C.IQ[0]._this=null);if((A=C.HJ[0].
_this)&&(A._cycle!=E))A._Done(C.HJ[0]._this=null);if((A=C.HI[0]._this)&&(A._cycle
!=E))A._Done(C.HI[0]._this=null);if((A=C.H6[0]._this)&&(A._cycle!=E))A._Done(C.H6[
0]._this=null);};return C;})();

/* Embedded Wizard */