exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./src/components/common/layout/layout.js":
/*!************************************************!*\
  !*** ./src/components/common/layout/layout.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/GlobalStyles */ "./src/styles/GlobalStyles.js");
/* harmony import */ var _static_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/fonts/fonts.css */ "./src/static/fonts/fonts.css");
/* harmony import */ var _static_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_fonts_css__WEBPACK_IMPORTED_MODULE_3__);






const Layout = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
  theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"], null), children));
Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/common/layout/seo.js":
/*!*********************************************!*\
  !*** ./src/components/common/layout/seo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");




const SEO = ({
  description,
  lang,
  meta,
  title
}) => {
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    htmlAttributes: {
      lang
    },
    title: title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
};
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};
SEO.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/pages/404.js?export=default":
/*!*****************************************!*\
  !*** ./src/pages/404.js?export=default ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/layout/layout */ "./src/components/common/layout/layout.js");
/* harmony import */ var _components_common_layout_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/layout/seo */ "./src/components/common/layout/seo.js");



const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_layout_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "404: Not found"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "NOT FOUND"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ "./src/styles/GlobalStyles.js":
/*!************************************!*\
  !*** ./src/styles/GlobalStyles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;
const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["", ";html{", " color:", ";}body{font-family:", ";}h1{", ";font-family:", ";}h2{", ";}h3{", ";font-family:", ";}h4{", ";font-family:", ";}h5{", ";font-family:", ";}p{", ";line-height:22px;}input{font-family:", ";}@media (max-width:", "){h1{", ";}h2{", ";}h3{", ";}p{", ";}}@media (max-width:", "){h1{}h2{}h3{font-size:32px;line-height:36px;}h4{font-size:22px;line-height:24px;}p{}}button{border:none;background:none;outline:none;padding:0;cursor:pointer;}a{cursor:pointer;}"], normalize, "" /* change this if implementing light/dark mode functionality */, props => props.theme.color.primary, props => props.theme.font.primary, props => props.theme.font_size.xlarge, props => props.theme.font.bold, props => props.theme.font_size.larger, props => props.theme.font_size.larger, props => props.theme.font.bold, props => props.theme.font_size.large, props => props.theme.font.bold, props => props.theme.font_size.xsmall, props => props.theme.font.normal, props => props.theme.font_size.small, props => props.theme.font.normal, props => props.theme.screen.sm, props => props.theme.font_size.larger, props => props.theme.font_size.large, props => props.theme.font_size.regular, props => props.theme.font_size.small, props => props.theme.screen.xs);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const theme = {
  font: {
    primary: `'HK Grotesk Normal'`,
    secondary: `'HK Grotesk Medium'`,
    light: `'HK Grotesk Light'`,
    normal: `'HK Grotesk Normal'`,
    medium: `'HK Grotesk Medium'`,
    semibold: `'HK Grotesk Semibold'`,
    bold: `'HK Grotesk Bold'`,
    extrabold: `'HK Grotesk Extra Bold'`
  },
  font_size: {
    xxxsmall: "font-size: 12px;",
    xxsmall: "font-size: 14px;",
    xsmall: "font-size: 16px;",
    small: "font-size: 17px;",
    regular: "font-size: 22px; line-height: 30px;",
    large: "font-size: 28px; line-height: 30px;",
    larger: "font-size: 40px; line-height: 50px;",
    xlarge: "font-size: 48px; line-height: 48px;"
  },
  color: {
    primary: "#071435",
    secondary: "#098c8c",
    accent: "#cca86e",
    background: {
      white: "#ffffff",
      light: "#f8f8f8"
    },
    white: {
      regular: "#ffffff",
      lessdark: "#faf9f8",
      dark: "#f6f6f6",
      darker: "#eeeeee"
    },
    black: {
      lightest: "#ABA8AF",
      light: "#564F62",
      regular: "#071435"
    }
  },
  screen: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/static/fonts/fonts.css":
/*!************************************!*\
  !*** ./src/static/fonts/fonts.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Starter SaaS Marketing","description":"A simple one page marketing starter for saas companies.","author":"Keegan Burkett"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map