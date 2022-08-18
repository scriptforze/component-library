/*! For license information please see vendors~main.c5e404945c283a247f1c.manager.bundle.js.LICENSE.txt */
  height: 100%;
  label: addon-holder;
`;exports.LayoutProvider=({children:children})=>_react.default.createElement(_rect.default,null,(({rect:rect,ref:ref})=>{const dimensions=(rect=>rect?{width:rect.width,height:rect.height,isLandscape:rect.width>=rect.height}:{})(rect);return _react.default.createElement(AddonHolder,{ref:ref},_react.default.createElement(layout.Provider,{value:dimensions},children))}));const StyledOverridden=({className:className,overrides:overrides,children:children,isLandscape:isLandscape,size:size,...props})=>_react.default.createElement("div",_extends({className:`${className} ${overrides}`},props),children),StyledLayout=(0,_theming.styled)(StyledOverridden)`
  display: flex;
  flex-direction: ${({isLandscape:isLandscape})=>isLandscape?"row":"column"};
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  label: addon-layout;
`;exports.Layout=({className:className,children:children})=>_react.default.createElement(layout.Consumer,null,(({isLandscape:isLandscape})=>_react.default.createElement(StyledLayout,{isLandscape:isLandscape,overrides:className},children)));const StyledBlock=(0,_theming.styled)(StyledOverridden)`
  ${({isLandscape:isLandscape})=>isLandscape?"width":"height"}: ${({size:size})=>size?`${size}px`:"2px"};
  ${({size:size})=>size?"":"flex-grow: 1;"}
  label: addon-block;