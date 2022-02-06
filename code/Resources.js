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
var Ax=[0,0];var AF="The property \'FrameSize\' is READ ONLY.";
C.A0={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.qK,Fw:false,DL:false,CA:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.s9(handle);this.bitmap=null;this.
FrameSize=Ax;this.FrameDelay=0;this.NoOfFrames=1;this.DL=false;},Bs:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Ax;var frameDelay=
0;{var bmp=B.tN(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Fw=true;this.DL=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},JZ:function(D){throw new Error(
AF);},Update:function(){},_Init:function(aArg){B.Core.DU._Init.call(this,aArg);this.
__proto__=C.A0;this.Bs(aArg);},_Done:function(){this.CA();this.__proto__=B.Core.
DU;B.Core.DU._Done.call(this);},_className:"Resources::Bitmap"};C.CS={_class:function(
){return C.Bq;},0:{Data:function(){return B.uU;},Cache:[],_this:null}};C.Bq={font:
null,Leading:0,Descent:0,Ascent:0,CA:function(){this.MC();},Bs:function(aArg){this.
MG(aArg);},MC:function(){if(!this.font)return;var handle=this.font;B.s_(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},MG:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.tP(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},JA:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.tf(handle,aFlowString);return advance;}
,LG:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.hr;var handle=this.
font;var result=B.hr;result=B.t_(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},Gi:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.jP(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.DU._Init.call(this,aArg);this.__proto__=C.Bq;this.Bs(aArg);
},_Done:function(){this.CA();this.__proto__=B.Core.DU;B.Core.DU._Done.call(this);
},_className:"Resources::Font"};C.Dm={_class:function(){return C.Bq;},0:{Data:function(
){return B.uY;},Cache:[],_this:null}};C.Ii={_class:function(){return C.Bq;},0:{Data:
function(){return B.uX;},Cache:[],_this:null}};C.G$={_class:function(){return C.
Bq;},0:{Data:function(){return B.uW;},Cache:[],_this:null}};C.Ih={_class:function(
){return C.Bq;},0:{Data:function(){return B.uV;},Cache:[],_this:null}};C.Hv={_class:
function(){return C.A0;},0:{FileName:"./res/ResourcesWhiteBitmapStripe.png",Format:
B.ly,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:null}};
C._Init=function(){C.A0.__proto__=B.Core.DU;C.Bq.__proto__=B.Core.DU;};C._ReInit=
function(){};C.BY=function(E){var A;if((A=C.CS[0]._this)&&(A._cycle!=E))A._Done(
C.CS[0]._this=null);if((A=C.Dm[0]._this)&&(A._cycle!=E))A._Done(C.Dm[0]._this=null
);if((A=C.Ii[0]._this)&&(A._cycle!=E))A._Done(C.Ii[0]._this=null);if((A=C.G$[0].
_this)&&(A._cycle!=E))A._Done(C.G$[0]._this=null);if((A=C.Ih[0]._this)&&(A._cycle
!=E))A._Done(C.Ih[0]._this=null);if((A=C.Hv[0]._this)&&(A._cycle!=E))A._Done(C.Hv[
0]._this=null);};return C;})();

/* Embedded Wizard */