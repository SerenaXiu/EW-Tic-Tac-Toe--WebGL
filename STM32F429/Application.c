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
* Profile  : STM32F429
* Platform : STM.STM32.RGB565
*
*******************************************************************************/

#include "ewlocale.h"
#include "_ApplicationApplication.h"
#include "_CoreView.h"
#include "_ResourcesFont.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"
#include "Application.h"
#include "WidgetSet.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x0000002A, /* ratio 114.29 % */
  0xB8001300, 0x80090452, 0x24D80032, 0x4006F004, 0x15100008, 0x04322C0C, 0x70001840,
  0x9001D000, 0x37002186, 0x0C424310, 0x00000008, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 240, 320 }};
static const XColor _Const0001 = { 0x00, 0x00, 0x00, 0xFF };
static const XRect _Const0002 = {{ 70, 36 }, { 170, 66 }};
static const XStringRes _Const0003 = { _StringsDefault0, 0x0002 };
static const XRect _Const0004 = {{ 50, 153 }, { 200, 203 }};
static const XStringRes _Const0005 = { _StringsDefault0, 0x000B };

/* Initializer for the class 'Application::Application' */
void ApplicationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreRoot__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationApplication );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Rectangle, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Text, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->btnTTTField, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->PushButton, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Rectangle, _Const0000 );
  ViewsRectangle_OnSetColor( &_this->Rectangle, _Const0001 );
  CoreRectView__OnSetBounds( &_this->Text, _Const0002 );
  ViewsText_OnSetString( &_this->Text, EwLoadString( &_Const0003 ));
  CoreRectView__OnSetBounds( &_this->PushButton, _Const0004 );
  WidgetSetPushButton_OnSetLabel( &_this->PushButton, EwLoadString( &_Const0005 ));
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Text ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->PushButton ), 0 );
  ViewsText_OnSetFont( &_this->Text, EwLoadResource( &ApplicationFont, ResourcesFont ));
  WidgetSetPushButton_OnSetAppearance( &_this->PushButton, EwGetAutoObject( &WidgetSetPushButton_Small, 
  WidgetSetPushButtonConfig ));
}

/* Re-Initializer for the class 'Application::Application' */
void ApplicationApplication__ReInit( ApplicationApplication _this )
{
  /* At first re-initialize the super class ... */
  CoreRoot__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Rectangle );
  ViewsText__ReInit( &_this->Text );
  WidgetSetPushButtonConfig__ReInit( &_this->btnTTTField );
  WidgetSetPushButton__ReInit( &_this->PushButton );
}

/* Finalizer method for the class 'Application::Application' */
void ApplicationApplication__Done( ApplicationApplication _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreRoot );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Rectangle );
  ViewsText__Done( &_this->Text );
  WidgetSetPushButtonConfig__Done( &_this->btnTTTField );
  WidgetSetPushButton__Done( &_this->PushButton );

  /* Don't forget to deinitialize the super class ... */
  CoreRoot__Done( &_this->_.Super );
}

/* Variants derived from the class : 'Application::Application' */
EW_DEFINE_CLASS_VARIANTS( ApplicationApplication )
EW_END_OF_CLASS_VARIANTS( ApplicationApplication )

/* Virtual Method Table (VMT) for the class : 'Application::Application' */
EW_DEFINE_CLASS( ApplicationApplication, CoreRoot, Rectangle, Rectangle, Rectangle, 
                 Rectangle, _.VMT, _.VMT, "Application::Application" )
  CoreRectView_initLayoutContext,
  CoreRoot_GetRoot,
  CoreRoot_Draw,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreRoot_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreRoot_OnSetFocus,
  CoreRoot_DispatchEvent,
  CoreRoot_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreRoot_InvalidateArea,
EW_END_OF_CLASS( ApplicationApplication )

/* Include a file containing the font resource : 'Application::Font' */
#include "_ApplicationFont.h"

/* Table with links to derived variants of the font resource : 'Application::Font' */
EW_RES_WITHOUT_VARIANTS( ApplicationFont )

/* Embedded Wizard */
