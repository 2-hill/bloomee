exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports["default"] = void 0;
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _excluded = ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable", "ariaHidden"];
var logDeprecationNotice = function logDeprecationNotice(prop, replacement) {
  if (false) {}
  console.log("\n    The \"" + prop + "\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");
  if (replacement) {
    console.log("Please use " + replacement + " instead of \"" + prop + "\".");
  }
}; // Handle legacy props during their deprecation phase

var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);
  var resolutions = convertedProps.resolutions,
    sizes = convertedProps.sizes,
    critical = convertedProps.critical;
  if (resolutions) {
    convertedProps.fixed = resolutions;
    logDeprecationNotice("resolutions", "the gatsby-image v2 prop \"fixed\"");
    delete convertedProps.resolutions;
  }
  if (sizes) {
    convertedProps.fluid = sizes;
    logDeprecationNotice("sizes", "the gatsby-image v2 prop \"fluid\"");
    delete convertedProps.sizes;
  }
  if (critical) {
    logDeprecationNotice("critical", "the native \"loading\" attribute");
    convertedProps.loading = "eager";
  } // convert fluid & fixed to arrays so we only have to work with arrays

  if (convertedProps.fluid) {
    convertedProps.fluid = groupByMedia([].concat(convertedProps.fluid));
  }
  if (convertedProps.fixed) {
    convertedProps.fixed = groupByMedia([].concat(convertedProps.fixed));
  }
  return convertedProps;
};
/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */

var hasArtDirectionSupport = function hasArtDirectionSupport(currentData) {
  return !!currentData && Array.isArray(currentData) && currentData.some(function (image) {
    return typeof image.media !== "undefined";
  });
};
/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */

var matchesMedia = function matchesMedia(_ref) {
  var media = _ref.media;
  return media ? isBrowser && !!window.matchMedia(media).matches : false;
};
/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */

var getImageCacheKey = function getImageCacheKey(_ref2) {
  var fluid = _ref2.fluid,
    fixed = _ref2.fixed;
  var srcData = getCurrentSrcData(fluid || fixed || []);
  return srcData && srcData.src;
};
/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */

var getCurrentSrcData = function getCurrentSrcData(currentData) {
  if (isBrowser && hasArtDirectionSupport(currentData)) {
    // Do we have an image for the current Viewport?
    var foundMedia = currentData.findIndex(matchesMedia);
    if (foundMedia !== -1) {
      return currentData[foundMedia];
    } // No media matches, select first element without a media condition

    var noMedia = currentData.findIndex(function (image) {
      return typeof image.media === "undefined";
    });
    if (noMedia !== -1) {
      return currentData[noMedia];
    }
  } // Else return the first image.

  return currentData[0];
}; // Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.

var imageCache = Object.create({});
var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props);
  var cacheKey = getImageCacheKey(convertedProps);
  return imageCache[cacheKey] || false;
};
var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props);
  var cacheKey = getImageCacheKey(convertedProps);
  if (cacheKey) {
    imageCache[cacheKey] = true;
  }
}; // Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/

var hasNativeLazyLoadSupport = typeof HTMLImageElement !== "undefined" && "loading" in HTMLImageElement.prototype;
var isBrowser = typeof window !== "undefined";
var hasIOSupport = isBrowser && window.IntersectionObserver;
var io;
var listeners = new WeakMap();
function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (listeners.has(entry.target)) {
          var cb = listeners.get(entry.target); // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0

          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(entry.target);
            listeners.delete(entry.target);
            cb();
          }
        }
      });
    }, {
      rootMargin: "200px"
    });
  }
  return io;
}
function generateImageSources(imageVariants) {
  return imageVariants.map(function (_ref3) {
    var src = _ref3.src,
      srcSet = _ref3.srcSet,
      srcSetWebp = _ref3.srcSetWebp,
      media = _ref3.media,
      sizes = _ref3.sizes;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: src
    }, srcSetWebp && /*#__PURE__*/_react.default.createElement("source", {
      type: "image/webp",
      media: media,
      srcSet: srcSetWebp,
      sizes: sizes
    }), srcSet && /*#__PURE__*/_react.default.createElement("source", {
      media: media,
      srcSet: srcSet,
      sizes: sizes
    }));
  });
} // Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions

function groupByMedia(imageVariants) {
  var withMedia = [];
  var without = [];
  imageVariants.forEach(function (variant) {
    return (variant.media ? withMedia : without).push(variant);
  });
  if (without.length > 1 && "development" !== "production") {
    console.warn("We've found " + without.length + " sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");
  }
  return [].concat(withMedia, without);
}
function generateTracedSVGSources(imageVariants) {
  return imageVariants.map(function (_ref4) {
    var src = _ref4.src,
      media = _ref4.media,
      tracedSVG = _ref4.tracedSVG;
    return /*#__PURE__*/_react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: tracedSVG
    });
  });
}
function generateBase64Sources(imageVariants) {
  return imageVariants.map(function (_ref5) {
    var src = _ref5.src,
      media = _ref5.media,
      base64 = _ref5.base64;
    return /*#__PURE__*/_react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: base64
    });
  });
}
function generateNoscriptSource(_ref6, isWebp) {
  var srcSet = _ref6.srcSet,
    srcSetWebp = _ref6.srcSetWebp,
    media = _ref6.media,
    sizes = _ref6.sizes;
  var src = isWebp ? srcSetWebp : srcSet;
  var mediaAttr = media ? "media=\"" + media + "\" " : "";
  var typeAttr = isWebp ? "type='image/webp' " : "";
  var sizesAttr = sizes ? "sizes=\"" + sizes + "\" " : "";
  return "<source " + typeAttr + mediaAttr + "srcset=\"" + src + "\" " + sizesAttr + "/>";
}
function generateNoscriptSources(imageVariants) {
  return imageVariants.map(function (variant) {
    return (variant.srcSetWebp ? generateNoscriptSource(variant, true) : "") + generateNoscriptSource(variant);
  }).join("");
}
var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getIO();
  if (observer) {
    observer.observe(el);
    listeners.set(el, cb);
  }
  return function () {
    observer.unobserve(el);
    listeners.delete(el);
  };
};
var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSet = props.srcSet ? "srcset=\"" + props.srcSet + "\" " : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var crossOrigin = props.crossOrigin ? "crossorigin=\"" + props.crossOrigin + "\" " : "";
  var loading = props.loading ? "loading=\"" + props.loading + "\" " : "";
  var draggable = props.draggable ? "draggable=\"" + props.draggable + "\" " : "";
  var sources = generateNoscriptSources(props.imageVariants);
  return "<picture>" + sources + "<img " + loading + width + height + sizes + srcSet + src + alt + title + crossOrigin + draggable + "style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
}; // Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release

var Placeholder = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var src = props.src,
    imageVariants = props.imageVariants,
    generateSources = props.generateSources,
    spreadProps = props.spreadProps,
    ariaHidden = props.ariaHidden;
  var baseImage = /*#__PURE__*/_react.default.createElement(Img, (0, _extends2.default)({
    ref: ref,
    src: src
  }, spreadProps, {
    ariaHidden: ariaHidden
  }));
  return imageVariants.length > 1 ? /*#__PURE__*/_react.default.createElement("picture", null, generateSources(imageVariants), baseImage) : baseImage;
});
var Img = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var sizes = props.sizes,
    srcSet = props.srcSet,
    src = props.src,
    style = props.style,
    onLoad = props.onLoad,
    onError = props.onError,
    loading = props.loading,
    draggable = props.draggable,
    ariaHidden = props.ariaHidden,
    otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    "aria-hidden": ariaHidden,
    sizes: sizes,
    srcSet: srcSet,
    src: src
  }, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    loading: loading,
    draggable: draggable,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});
Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};
var Image = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);
  function Image(props) {
    var _this;
    _this = _React$Component.call(this, props) || this; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    _this.seenBefore = isBrowser && inImageCache(props);
    _this.isCritical = props.loading === "eager" || props.critical;
    _this.addNoScript = !(_this.isCritical && !props.fadeIn);
    _this.useIOSupport = !hasNativeLazyLoadSupport && hasIOSupport && !_this.isCritical && !_this.seenBefore;
    var isVisible = _this.isCritical || isBrowser && (hasNativeLazyLoadSupport || !_this.useIOSupport);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: false,
      imgCached: false,
      fadeIn: !_this.seenBefore && props.fadeIn,
      isHydrated: false
    };
    _this.imageRef = /*#__PURE__*/_react.default.createRef();
    _this.placeholderRef = props.placeholderRef || /*#__PURE__*/_react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  var _proto = Image.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      isHydrated: isBrowser
    });
    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }
    if (this.isCritical) {
      var img = this.imageRef.current;
      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  } // Specific to IntersectionObserver based lazy-load support
  ;

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;
    if (this.useIOSupport && ref) {
      this.cleanUpListeners = listenToIntersections(ref, function () {
        var imageInCache = inImageCache(_this2.props);
        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: imageInCache
          });
        } // imgCached and imgLoaded must update after isVisible,
        // Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
        // imgLoaded and imgCached are in a 2nd setState call to be changed together,
        // avoiding initiating unnecessary animation frames from style changes.

        _this2.setState({
          isVisible: true
        }, function () {
          _this2.setState({
            imgLoaded: imageInCache,
            // `currentSrc` should be a string, but can be `undefined` in IE,
            // !! operator validates the value is not undefined/null/""
            // for lazyloaded components this might be null
            // TODO fix imgCached behaviour as it's now false when it's lazyloaded
            imgCached: !!(_this2.imageRef.current && _this2.imageRef.current.currentSrc)
          });
        });
      });
    }
  };
  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };
  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
      title = _convertProps.title,
      alt = _convertProps.alt,
      className = _convertProps.className,
      _convertProps$style = _convertProps.style,
      style = _convertProps$style === void 0 ? {} : _convertProps$style,
      _convertProps$imgStyl = _convertProps.imgStyle,
      imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
      _convertProps$placeho = _convertProps.placeholderStyle,
      placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
      placeholderClassName = _convertProps.placeholderClassName,
      fluid = _convertProps.fluid,
      fixed = _convertProps.fixed,
      backgroundColor = _convertProps.backgroundColor,
      durationFadeIn = _convertProps.durationFadeIn,
      Tag = _convertProps.Tag,
      itemProp = _convertProps.itemProp,
      loading = _convertProps.loading,
      draggable = _convertProps.draggable;
    var imageVariants = fluid || fixed; // Abort early if missing image data (#25371)

    if (!imageVariants) {
      return null;
    }
    var shouldReveal = this.state.fadeIn === false || this.state.imgLoaded;
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached;
    var imageStyle = (0, _extends2.default)({
      opacity: shouldReveal ? 1 : 0,
      transition: shouldFadeIn ? "opacity " + durationFadeIn + "ms" : "none"
    }, imgStyle);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var delayHideStyle = {
      transitionDelay: durationFadeIn + "ms"
    };
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1
    }, shouldFadeIn && delayHideStyle, imgStyle, placeholderStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName,
      itemProp: itemProp
    }; // Initial client render state needs to match SSR until hydration finishes.
    // Once hydration completes, render again to update to the correct image.
    // `imageVariants` is always an Array type at this point due to `convertProps()`

    var image = !this.state.isHydrated ? imageVariants[0] : getCurrentSrcData(imageVariants);
    if (fluid) {
      return /*#__PURE__*/_react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden",
          maxWidth: image.maxWidth ? image.maxWidth + "px" : null,
          maxHeight: image.maxHeight ? image.maxHeight + "px" : null
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), bgColor && /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          right: 0,
          left: 0
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateBase64Sources
      }), image.tracedSVG && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && /*#__PURE__*/_react.default.createElement("picture", null, generateImageSources(imageVariants), /*#__PURE__*/_react.default.createElement(Img, {
        alt: alt,
        title: title,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && /*#__PURE__*/_react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, image, {
            imageVariants: imageVariants
          }))
        }
      }));
    }
    if (fixed) {
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: image.width,
        height: image.height
      }, style);
      if (style.display === "inherit") {
        delete divStyle.display;
      }
      return /*#__PURE__*/_react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(image.srcSet)
      }, bgColor && /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          width: image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          height: image.height
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateBase64Sources
      }), image.tracedSVG && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && /*#__PURE__*/_react.default.createElement("picture", null, generateImageSources(imageVariants), /*#__PURE__*/_react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: image.width,
        height: image.height,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && /*#__PURE__*/_react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, image, {
            imageVariants: imageVariants
          }))
        }
      }));
    }
    return null;
  };
  return Image;
}(_react.default.Component);
Image.defaultProps = {
  fadeIn: true,
  durationFadeIn: 500,
  alt: "",
  Tag: "div",
  // We set it to `lazy` by default because it's best to default to a performant
  // setting and let the user "opt out" to `eager`
  loading: "lazy"
};
var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string
});
var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string,
  maxWidth: _propTypes.default.number,
  maxHeight: _propTypes.default.number
});
function requireFixedOrFluid(originalPropTypes) {
  return function (props, propName, componentName) {
    var _PropTypes$checkPropT;
    if (!props.fixed && !props.fluid) {
      throw new Error("The prop `fluid` or `fixed` is marked as required in `" + componentName + "`, but their values are both `undefined`.");
    }
    _propTypes.default.checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = originalPropTypes, _PropTypes$checkPropT), props, "prop", componentName);
  };
} // If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props

Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject, _propTypes.default.arrayOf(fixedObject)])),
  fluid: requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject, _propTypes.default.arrayOf(fluidObject)])),
  fadeIn: _propTypes.default.bool,
  durationFadeIn: _propTypes.default.number,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string,
  itemProp: _propTypes.default.string,
  loading: _propTypes.default.oneOf(["auto", "lazy", "eager"]),
  draggable: _propTypes.default.bool
};
var _default = Image;
exports["default"] = _default;

/***/ }),

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

/***/ "./src/components/common/navigation/navigation.js":
/*!********************************************************!*\
  !*** ./src/components/common/navigation/navigation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollspy */ "./node_modules/react-scrollspy/lib/scrollspy.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/x.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/menu.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global */ "./src/components/global.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/components/common/navigation/style.js");






const NAV_ITEMS = ["Features", "Product", "Pricing", ""];
class Navigation extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      mobileMenuOpen: false,
      hasScrolled: false
    };
    this.handleScroll = event => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 32) {
        this.setState({
          hasScrolled: true
        });
      } else {
        this.setState({
          hasScrolled: false
        });
      }
    };
    this.toggleMobileMenu = () => {
      this.setState(prevState => ({
        mobileMenuOpen: !prevState.mobileMenuOpen
      }));
    };
    this.closeMobileMenu = () => {
      if (this.state.mobileMenuOpen) {
        this.setState({
          mobileMenuOpen: false
        });
      }
    };
    this.getNavAnchorLink = item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `#${item.toLowerCase()}`,
      onClick: this.closeMobileMenu
    }, item);
    this.getNavList = ({
      mobile = false
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavListWrapper, {
      mobile: mobile
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: NAV_ITEMS.map(item => item.toLowerCase()),
      currentClassName: "active",
      mobile: mobile,
      offset: -64
    }, NAV_ITEMS.map(navItem => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.NavItem, {
      key: navItem
    }, this.getNavAnchorLink(navItem)))));
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    const {
      mobileMenuOpen
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Nav, Object.assign({}, this.props, {
      scrolled: this.state.hasScrolled
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.StyledContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Brand, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_2__["default"], {
      offset: -64,
      item: ["top"],
      currentClassName: "active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "#top",
      onClick: this.closeMobileMenu
    }, "Finance"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Mobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.toggleMobileMenu,
      style: {
        color: "black",
        background: "none"
      }
    }, this.state.mobileMenuOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 24,
      alt: "close menu"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: 24,
      alt: "open menu"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Mobile, {
      hide: true
    }, this.getNavList({})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.ActionsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Sign up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.Mobile, null, mobileMenuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_4__.MobileMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_global__WEBPACK_IMPORTED_MODULE_3__.Container, null, this.getNavList({
      mobile: true
    })))));
  }
}

/***/ }),

/***/ "./src/components/common/navigation/style.js":
/*!***************************************************!*\
  !*** ./src/components/common/navigation/style.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsContainer": () => (/* binding */ ActionsContainer),
/* harmony export */   "Brand": () => (/* binding */ Brand),
/* harmony export */   "Mobile": () => (/* binding */ Mobile),
/* harmony export */   "MobileMenu": () => (/* binding */ MobileMenu),
/* harmony export */   "Nav": () => (/* binding */ Nav),
/* harmony export */   "NavItem": () => (/* binding */ NavItem),
/* harmony export */   "NavListWrapper": () => (/* binding */ NavListWrapper),
/* harmony export */   "StyledContainer": () => (/* binding */ StyledContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global */ "./src/components/global.js");


const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "style__Nav"
})(["padding:", ";position:fixed;width:100%;top:0;z-index:1000;background:", ";transition:0.4s cubic-bezier(0.2,0.8,0.2,1);"], props => props.scrolled ? `16px 0` : `24px 0`, props => props.scrolled ? `white` : null);
const StyledContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_global__WEBPACK_IMPORTED_MODULE_0__.Container).withConfig({
  displayName: "style__StyledContainer"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const NavListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__NavListWrapper"
})(["ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;", ";}"], ({
  mobile
}) => mobile && `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `);
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "style__NavItem"
})(["margin:0 0.75em;font-family:", ";", ";a{text-decoration:none;opacity:0.9;color:", ";}&.active{a{opacity:1;}}"], props => props.theme.font.medium, props => props.theme.font_size.xsmall, props => props.theme.color.black.regular);
const MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__MobileMenu"
})(["width:100%;height:100vh;z-index:1000;background:", ";"], props => props.theme.color.regular);
const Brand = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Brand"
})(["font-family:", ";", ";color:", ";text-decoration:none;letter-spacing:1px;margin:0;ul{list-style:none;margin:0;padding:0;a{color:", ";text-decoration:none;}}"], props => props.theme.font.extrabold, props => props.theme.font_size.regular, props => props.theme.color.black.regular, props => props.theme.color.black.regular);
const ActionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__ActionsContainer"
})(["display:flex;align-items:center;@media (max-width:", "){display:none;}button{font-family:", ";", ";color:white;background:#098b8c;border-radius:4px;padding:10px 16px;text-transform:uppercase;font-size:12px;}"], props => props.theme.screen.xs, props => props.theme.font.normal, props => props.theme.font_size.xsmall);
const Mobile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__Mobile"
})(["display:none;@media (max-width:", "){display:block;}", ""], props => props.theme.screen.xs, props => props.hide && `
    display: block;

    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `);

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};

/***/ }),

/***/ "./src/components/global.js":
/*!**********************************!*\
  !*** ./src/components/global.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "global__Container"
})(["max-width:1200px;width:100%;margin:0 auto;padding:0 16px;@media (min-width:", "){max-width:540px;}@media (min-width:", "){max-width:720px;}@media (min-width:", "){max-width:960px;}@media (min-width:", "){max-width:1200px;}", ";"], props => props.theme.screen.xs, props => props.theme.screen.sm, props => props.theme.screen.md, props => props.theme.screen.lg, props => props.fluid && `
    max-width: 1200px !important;
  `);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "global__Section"
})(["padding:80px 0;overflow:hidden;background-color:", ";@media (max-width:", "){padding:80px 0;}", ";"], props => {
  switch (props.accent) {
    case "secondary":
      return props.theme.color.white.dark;
    case "main":
      return props.theme.color.primary;
    default:
      return "white";
  }
}, props => props.theme.screen.md, props => props.accent && `background-color: ${props.accent === "secondary" ? props.theme.color.white.dark : props.theme.color.primary}`);

/***/ }),

/***/ "./src/components/sections/features.js":
/*!*********************************************!*\
  !*** ./src/components/sections/features.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/components/global.js");



const Features = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_global__WEBPACK_IMPORTED_MODULE_1__.Section, {
  id: "features"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Subtitle, null, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Smart money management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeaturesGrid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureTitle, null, "Notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureText, null, "Receive budget and spending alerts based on your favorite triggers.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureTitle, null, "Security"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureText, null, "Your data is always safe with us as we use the latest security protocols.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureTitle, null, "Automation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureText, null, "Create smart automated workflows and triggers for your money.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureTitle, null, "Aggregation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureText, null, "Easily link up to 5 banks to your finance account.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureTitle, null, "Payments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureText, null, "Send money to friends and family with ease.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureTitle, null, "Rewards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureText, null, "High interest and rewards for hitting your goals.")))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);
const StyledContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_global__WEBPACK_IMPORTED_MODULE_1__.Container).withConfig({
  displayName: "features__StyledContainer"
})([""]);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "features__SectionTitle"
})(["color:", ";display:flex;justify-content:center;margin:0 auto 40px;text-align:center;"], props => props.theme.color.primary);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h5.withConfig({
  displayName: "features__Subtitle"
})(["font-size:16px;color:", ";letter-spacing:0px;margin-bottom:12px;text-align:center;"], props => props.theme.color.accent);
const FeaturesGrid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "features__FeaturesGrid"
})(["max-width:670px;display:grid;grid-template-columns:1fr 1fr;margin:0px auto;grid-column-gap:40px;grid-row-gap:35px;@media (max-width:", "){grid-template-columns:1fr;padding:0 64px;}"], props => props.theme.screen.sm);
const FeatureItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "features__FeatureItem"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
const FeatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4.withConfig({
  displayName: "features__FeatureTitle"
})(["color:", ";letter-spacing:0px;line-height:30px;margin-bottom:10px;"], props => props.theme.color.primary);
const FeatureText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "features__FeatureText"
})(["text-align:center;"]);

/***/ }),

/***/ "./src/components/sections/footer.js":
/*!*******************************************!*\
  !*** ./src/components/sections/footer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/components/global.js");



const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterWrapper, {
  id: "footer"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Automation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Rewards"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Compare"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Blog"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Careers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterColumn, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Social"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "LinkedIn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Instagram")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BrandContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Logo, null, "Finance")));
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer.withConfig({
  displayName: "footer__FooterWrapper"
})(["background-color:white;margin:80px 0 0;padding:0 0 80px;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "footer__Logo"
})(["font-family:", ";", ";color:", ";text-decoration:none;letter-spacing:1px;margin:0;display:inline-flex;justify-content:center;align-items:center;position:relative;z-index:9;text-decoration:none;outline:0px;"], props => props.theme.font.extrabold, props => props.theme.font_size.regular, props => props.theme.color.black.regular);
const BrandContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_global__WEBPACK_IMPORTED_MODULE_1__.Container).withConfig({
  displayName: "footer__BrandContainer"
})(["position:relative;padding-top:48px;display:flex;align-items:flex-end;@media (max-width:", "){}"], props => props.theme.screen.sm);
const FooterColumnContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_global__WEBPACK_IMPORTED_MODULE_1__.Container).withConfig({
  displayName: "footer__FooterColumnContainer"
})(["display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:32px;justify-content:start;@media (max-width:", "){grid-template-columns:1fr 1fr;grid-gap:32px;}"], props => props.theme.screen.sm);
const FooterColumn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "footer__FooterColumn"
})(["span{font-size:16px;font-family:", ";color:", ";}ul{list-style:none;margin:16px 0;padding:0;color:", ";li{margin-bottom:12px;font-family:", ";font-size:15px;}}"], props => props.theme.font.bold, props => props.theme.color.primary, props => props.theme.color.black.regular, props => props.theme.font.normal);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/sections/getstarted.js":
/*!***********************************************!*\
  !*** ./src/components/sections/getstarted.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/components/global.js");



const GetStarted = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GetStartedContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GetStartedTitle, null, "Be the first to get the beta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TryItButton, null, "Get early access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Subtitle, null, "No credit card required.")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetStarted);
const StyledSection = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_global__WEBPACK_IMPORTED_MODULE_1__.Section).withConfig({
  displayName: "getstarted__StyledSection"
})(["background-color:", ";clip-path:polygon(0 0,100% 14%,100% 100%,0% 100%);"], props => props.theme.color.background.light);
const GetStartedContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_global__WEBPACK_IMPORTED_MODULE_1__.Container).withConfig({
  displayName: "getstarted__GetStartedContainer"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;padding:80px 0 40px;"]);
const GetStartedTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "getstarted__GetStartedTitle"
})(["margin:0 auto 32px;text-align:center;"]);
const TryItButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "getstarted__TryItButton"
})(["font-weight:500;font-size:14px;color:white;letter-spacing:1px;height:60px;display:block;margin-left:8px;text-transform:uppercase;cursor:pointer;white-space:nowrap;background:", ";border-radius:4px;padding:0px 40px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;outline:0px;&:hover{box-shadow:rgba(110,120,152,0.22) 0px 2px 10px 0px;}@media (max-width:", "){}@media (max-width:", "){margin-left:0;}"], props => props.theme.color.secondary, props => props.theme.screen.md, props => props.theme.screen.sm);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "getstarted__Subtitle"
})(["", " padding-top:16px;font-size:14px;color:", ";"], props => props.theme.font_size.xxsmall, props => props.theme.color.primary);

/***/ }),

/***/ "./src/components/sections/header.js":
/*!*******************************************!*\
  !*** ./src/components/sections/header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1572573332_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/1572573332.json */ "./public/page-data/sq/d/1572573332.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./src/components/global.js");






const Header = () => {
  const data = _public_page_data_sq_d_1572573332_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const handleSubmit = event => {
    event.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderWrapper, {
    id: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_global__WEBPACK_IMPORTED_MODULE_4__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderTextGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Subtitle, null, "Personal Finance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", null, "All your money,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null), "one account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, "We're building next generation personal finance tools. Sign up to get early access."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderForm, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderInput, {
    placeholder: "Your email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HeaderButton, null, "Early access")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FormSubtitle, null, "Already have a beta account?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(FormSubtitleLink, {
    to: "/"
  }, "Sign in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ImageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(StyledImage, {
    fluid: data.file.childImageSharp.fluid
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].header.withConfig({
  displayName: "header__HeaderWrapper"
})(["background-color:#f8f8f8;padding:160px 0 80px 0;position:relative;clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 5vw));@media (max-width:", "){}"], props => props.theme.screen.md);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h5.withConfig({
  displayName: "header__Subtitle"
})(["font-size:16px;color:", ";letter-spacing:0px;margin-bottom:16px;"], props => props.theme.color.accent);
const HeaderTextGroup = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "header__HeaderTextGroup"
})(["margin:0;> div{width:120%;margin-bottom:-4.5%;@media (max-width:", "){margin:0 16px;}}h1{margin:0 0 24px;color:", ";}h2{margin-bottom:24px;", "}p{margin-bottom:48px;}"], props => props.theme.screen.md, props => props.theme.color.primary, props => props.theme.font_size.regular);
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "header__Flex"
})(["display:grid;justify-content:space-between;align-content:center;grid-template-columns:1fr 1fr;@media (max-width:", "){grid-template-columns:1fr;grid-gap:64px;}"], props => props.theme.screen.md);
const HeaderForm = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "header__HeaderForm"
})(["display:flex;flex-direction:row;padding-bottom:16px;@media (max-width:", "){flex-direction:column;}"], props => props.theme.screen.sm);
const FormSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "header__FormSubtitle"
})(["", ""], props => props.theme.font_size.xxsmall);
const FormSubtitleLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link).withConfig({
  displayName: "header__FormSubtitleLink"
})(["color:", ";padding-bottom:1px;margin-left:8px;text-decoration:none;border-bottom:1px solid ", ";"], props => props.theme.color.secondary, props => props.theme.color.secondary);
const HeaderInput = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input.withConfig({
  displayName: "header__HeaderInput"
})(["font-weight:500;font-size:16px;color:", ";line-height:42px;width:100%;text-align:left;height:60px;border-width:1px;border-style:solid;border-color:", ";border-image:initial;border-radius:4px;padding:8px 16px;outline:0px;&:focus{box-shadow:inset ", " 0px 0px 0px 2px;}@media (max-width:", "){margin-bottom:8px;}@media (max-width:", "){display:block;width:100%;}"], props => props.theme.color.primary, props => props.theme.color.secondary, props => props.theme.color.secondary, props => props.theme.screen.md, props => props.theme.screen.sm);
const HeaderButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "header__HeaderButton"
})(["font-weight:500;font-size:14px;color:white;letter-spacing:1px;height:60px;display:block;margin-left:8px;text-transform:uppercase;cursor:pointer;white-space:nowrap;background:", ";border-radius:4px;padding:0px 40px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;outline:0px;&:hover{box-shadow:rgba(110,120,152,0.22) 0px 2px 10px 0px;}@media (max-width:", "){}@media (max-width:", "){margin-left:0;}"], props => props.theme.color.secondary, props => props.theme.screen.md, props => props.theme.screen.sm);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "header__ImageWrapper"
})(["justify-self:end;align-self:center;@media (max-width:", "){justify-self:center;}"], props => props.theme.screen.md);
const StyledImage = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(gatsby_image__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "header__StyledImage"
})(["width:500px;@media (max-width:", "){width:400px;}@media (max-width:", "){width:300px;display:none;}"], props => props.theme.screen.md, props => props.theme.screen.sm);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
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
/* harmony import */ var _components_common_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/navigation/navigation */ "./src/components/common/navigation/navigation.js");
/* harmony import */ var _components_sections_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/header */ "./src/components/sections/header.js");
/* harmony import */ var _components_sections_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/features */ "./src/components/sections/features.js");
/* harmony import */ var _components_sections_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/footer */ "./src/components/sections/footer.js");
/* harmony import */ var _components_sections_getstarted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/getstarted */ "./src/components/sections/getstarted.js");








const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_layout_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Home"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_features__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_getstarted__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

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

/***/ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "react"));
	else {}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_663__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_663__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_663__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_663__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_663__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_663__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_663__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_663__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_663__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_663__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_663__(__nested_webpack_require_663__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2940__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchorLink = __nested_webpack_require_2940__(1);

var _anchorLink2 = _interopRequireDefault(_anchorLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _anchorLink2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_3335__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __nested_webpack_require_3335__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnchorLink = function (_Component) {
  _inherits(AnchorLink, _Component);

  function AnchorLink(props) {
    _classCallCheck(this, AnchorLink);

    var _this = _possibleConstructorReturn(this, (AnchorLink.__proto__ || Object.getPrototypeOf(AnchorLink)).call(this, props));

    _this.smoothScroll = _this.smoothScroll.bind(_this);
    return _this;
  }

  _createClass(AnchorLink, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __nested_webpack_require_3335__(3).polyfill();
    }
  }, {
    key: 'smoothScroll',
    value: function smoothScroll(e) {
      var _this2 = this;

      e.preventDefault();
      var offset = function offset() {
        return 0;
      };
      if (typeof this.props.offset !== 'undefined') {
        if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
          offset = this.props.offset;
        } else {
          offset = function offset() {
            return parseInt(_this2.props.offset);
          };
        }
      }
      var id = e.currentTarget.getAttribute('href').slice(1);
      var $anchor = document.getElementById(id);
      var offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: offsetTop - offset(),
        behavior: 'smooth'
      });
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          offset = _props.offset,
          rest = _objectWithoutProperties(_props, ['offset']);

      return _react2.default.createElement('a', _extends({}, rest, { onClick: this.smoothScroll }));
    }
  }]);

  return AnchorLink;
}(_react.Component);

exports.default = AnchorLink;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/menu.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/menu.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Menu = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
});
Menu.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Menu.displayName = 'Menu';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/x.js":
/*!****************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/x.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var X = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
X.displayName = 'X';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (X);

/***/ }),

/***/ "./node_modules/react-scrollspy/lib/scrollspy.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-scrollspy/lib/scrollspy.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./throttle */ "./node_modules/react-scrollspy/lib/throttle.js"));

function isEqualArray(a, b) {
  return a.length === b.length && a.every(function (item, index) {
    return item === b[index];
  });
}

var Scrollspy =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Scrollspy, _React$Component);
  (0, _createClass2.default)(Scrollspy, null, [{
    key: "propTypes",
    get: function get() {
      return {
        items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
        currentClassName: _propTypes.default.string.isRequired,
        scrolledPastClassName: _propTypes.default.string,
        style: _propTypes.default.object,
        componentTag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.elementType]),
        offset: _propTypes.default.number,
        rootEl: _propTypes.default.string,
        onUpdate: _propTypes.default.func
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        items: [],
        currentClassName: '',
        style: {},
        componentTag: 'ul',
        offset: 0,
        onUpdate: function onUpdate() {}
      };
    }
  }]);

  function Scrollspy(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Scrollspy);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scrollspy).call(this, props));
    _this.state = {
      targetItems: [],
      inViewState: [],
      isScrolledPast: [] // manually bind as ES6 does not apply this
      // auto binding as React.createClass does

    };
    _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Scrollspy, [{
    key: "_initSpyTarget",
    value: function _initSpyTarget(items) {
      var targetItems = items.map(function (item) {
        return document.getElementById(item);
      });
      return targetItems;
    } // https://github.com/makotot/react-scrollspy/pull/45

  }, {
    key: "_fillArray",
    value: function _fillArray(array, val) {
      var newArray = [];

      for (var i = 0, max = array.length; i < max; i++) {
        newArray[i] = val;
      }

      return newArray;
    }
  }, {
    key: "_isScrolled",
    value: function _isScrolled() {
      return this._getScrollDimension().scrollTop > 0;
    }
  }, {
    key: "_getScrollDimension",
    value: function _getScrollDimension() {
      var doc = document;
      var rootEl = this.props.rootEl;
      var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
      var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
      return {
        scrollTop: scrollTop,
        scrollHeight: scrollHeight
      };
    }
  }, {
    key: "_getElemsViewState",
    value: function _getElemsViewState(targets) {
      var elemsInView = [];
      var elemsOutView = [];
      var viewStatusList = [];
      var targetItems = targets ? targets : this.state.targetItems;
      var hasInViewAlready = false;

      for (var i = 0, max = targetItems.length; i < max; i++) {
        var currentContent = targetItems[i];
        var isInView = hasInViewAlready ? false : this._isInView(currentContent);

        if (isInView) {
          hasInViewAlready = true;
          elemsInView.push(currentContent);
        } else {
          elemsOutView.push(currentContent);
        }

        var isLastItem = i === max - 1;

        var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


        var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

        if (isLastShortItemAtBottom) {
          elemsOutView.pop();
          elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2.default)(elemsInView));
          elemsInView = [currentContent];
          viewStatusList = this._fillArray(viewStatusList, false);
          isInView = true;
        }

        viewStatusList.push(isInView);
      }

      return {
        inView: elemsInView,
        outView: elemsOutView,
        viewStatusList: viewStatusList,
        scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
      };
    }
  }, {
    key: "_isInView",
    value: function _isInView(el) {
      if (!el) {
        return false;
      }

      var _this$props = this.props,
          rootEl = _this$props.rootEl,
          offset = _this$props.offset;
      var rootRect;

      if (rootEl) {
        rootRect = document.querySelector(rootEl).getBoundingClientRect();
      }

      var rect = el.getBoundingClientRect();
      var winH = rootEl ? rootRect.height : window.innerHeight;

      var _this$_getScrollDimen = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen.scrollTop;

      var scrollBottom = scrollTop + winH;
      var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
      var elBottom = elTop + el.offsetHeight;
      return elTop < scrollBottom && elBottom > scrollTop;
    }
  }, {
    key: "_isAtBottom",
    value: function _isAtBottom() {
      var rootEl = this.props.rootEl;

      var _this$_getScrollDimen2 = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen2.scrollTop,
          scrollHeight = _this$_getScrollDimen2.scrollHeight;

      var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
      var scrolledToBottom = scrollTop + winH >= scrollHeight;
      return scrolledToBottom;
    }
  }, {
    key: "_getScrolledPast",
    value: function _getScrolledPast(viewStatusList) {
      if (!viewStatusList.some(function (item) {
        return item;
      })) {
        return viewStatusList;
      }

      var hasFoundInView = false;
      var scrolledPastItems = viewStatusList.map(function (item) {
        if (item && !hasFoundInView) {
          hasFoundInView = true;
          return false;
        }

        return !hasFoundInView;
      });
      return scrolledPastItems;
    }
  }, {
    key: "_spy",
    value: function _spy(targets) {
      var _this2 = this;

      var elemensViewState = this._getElemsViewState(targets);

      var currentStatuses = this.state.inViewState;
      this.setState({
        inViewState: elemensViewState.viewStatusList,
        isScrolledPast: elemensViewState.scrolledPast
      }, function () {
        _this2._update(currentStatuses);
      });
    }
  }, {
    key: "_update",
    value: function _update(prevStatuses) {
      if (isEqualArray(this.state.inViewState, prevStatuses)) {
        return;
      }

      this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
    }
  }, {
    key: "_handleSpy",
    value: function _handleSpy() {
      (0, _throttle.default)(this._spy(), 100);
    }
  }, {
    key: "_initFromProps",
    value: function _initFromProps() {
      var targetItems = this._initSpyTarget(this.props.items);

      this.setState({
        targetItems: targetItems
      });

      this._spy(targetItems);
    }
  }, {
    key: "offEvent",
    value: function offEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.removeEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "onEvent",
    value: function onEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.addEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initFromProps();

      this.onEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.offEvent();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      this._initFromProps();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var Tag = this.props.componentTag;
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          scrolledPastClassName = _this$props2.scrolledPastClassName,
          style = _this$props2.style;
      var counter = 0;

      var items = _react.default.Children.map(children, function (child, idx) {
        var _classNames;

        if (!child) {
          return null;
        }

        var ChildTag = child.type;
        var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
        var childClass = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
        return _react.default.createElement(ChildTag, (0, _extends2.default)({}, child.props, {
          className: childClass,
          key: counter++
        }), child.props.children);
      });

      var itemClass = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(className), className));
      return _react.default.createElement(Tag, {
        className: itemClass,
        style: style
      }, items);
    }
  }]);
  return Scrollspy;
}(_react.default.Component);

exports["default"] = Scrollspy;

/***/ }),

/***/ "./node_modules/react-scrollspy/lib/throttle.js":
/*!******************************************************!*\
  !*** ./node_modules/react-scrollspy/lib/throttle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var throttle = function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var last;
  var timer;
  return function () {
    var now = +new Date();
    var timePassed = !!last && now < last + threshold;

    if (timePassed) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
};

var _default = throttle;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./public/page-data/sq/d/1572573332.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1572573332.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEo0lEQVQ4y1WUa0xURxiG3z2HZZfVZUEBoV1dq9UoW7l1hQCiVYnaGls1RmN/mHqNMbSx3lBq/SGxFo0uiPVWacFb142IRi2Gy3L2nLPIgkVKgsW0NSlNbfwhP6iN4dy+Zg5K20m+OZOZM0/e95v5BgDQGBYwvuYYCi6fxermBoCITWPytBzWm2MrB3jcKcjzebFrfTZSJmZaADtgbTDXJUnC6IAYoOpzrAjWovSBjPcsr1nAJSLHV7ApbZK3xe12V77hSds2yzttyaLiIm/F7gWOVE8mgGST4XTGQxTFEajZ7VyFdwPfYF39JeyvruJwrMJWKQZSp6YX/s4nZBM/xkNWxwSKcyaTw5kyNC515tMZ3uxtnC0ZcfFubs2aNSZQEARAkCRsafjOVElPh5F/9ng8Wq45th4uy5/ifUfjE31a4sS5aoJ7ruKYkKdbx+UYtqTZND09rxWwYuHSDTGvnPb29gJhpnBOrAncfP2KdWrVF0kgsi5fv+7D+NQsgs2rxSW9bSS68ylp0hzDMSFfiUv2UfbsoirAha0le2ztsoyIJI+4bRTaMKPuJGhg0FJ4+Zxj5qmjySDit2z/tLxk+35a+9FOzTdnlZE2dR7Fp+UZnCtTi3Gl0/yFS0oQNw47d30WK4gid6blLgRZAgbv9yDY2oxn93s474WvnAWXzqQAsJR/eTioqQoRkTo09Jfx28AfFJaixqXALe3j7WU0b/kHq5nVysMVVlmS+OawgLAoAr92dKEpLFgedXTy3trq+IIbF5MwFo7K6mpRVVRSFEUzDJ2BjZdBsiQq9ox0Xy7RmLmnj42lnodcfajF0i7JML1fD7Vy1PcLl1tzwvlW9K4LxUWeq8HgY7ZZURRdURRjJFTdMAw6d/78I2RMez3vfnPCjPP+hNtCiO+KtFuotx/I3f0Jbgshjn78iVty2u/IJnI4smflhEIh0+/w8LChaRrpuqlS1TWdDh46FAJgK7p+IWn6tydcwdZmvqf9Hjd6sRuFNo7lcPPZajuIYguXv7+i58EDBjDVqappndlVBwcHqWTHjnO4lW7JrT2ZknHx1Fjq6eNutYW4rkhkFGgZ6PyBO3Tlgh30jN+2e9e+x49NxxpTqCgKqarKgFp/fz+t3bRxB4hiMr72J6+9djH2eXevmUPzUBjwZlsruiIRvqHxexu7j3sPHKj9a2iIdMNQXyl8CdQ7OjrIk+db+iaRPf/kEeff3b1cU1jgBFGEzO4hKxfP0QMI3LzBEREPIOb4iaqwoetkGIamj3wNXdfNE759585zTHZnEhF3prIq5p4s8yFRtITEMGRZHlHIqmVvWZnFTCrHja+vr//ZTKCuq69guq5rbK6mpuYhgHj2azBwNaZNFLmoHPm3UlgnShIKCwpMoM1mmxIIBEw1/2kqEb1gg/Ly8iaWloE/n1jvNjXxrOxYMM4okMWixYvxsnErV648WFpa+tDv9z8JBoMvBEGgvr4+ikajtGHDRn/pnj2oq6uLjUajo/tZjFru7u7G/AULYLfHged5HDlSMfJGAik8z2e5XK4VxcXF+5YtW3Y0MzNrElvIysqydHZ2/g/IFP4Dh9/bzNNzNzIAAAAASUVORK5CYII=","aspectRatio":1.0822510822510822,"src":"/static/4a71a2a0361003ac30380fa3a378a8df/31987/green-skew.png","srcSet":"/static/4a71a2a0361003ac30380fa3a378a8df/e1953/green-skew.png 250w,\\n/static/4a71a2a0361003ac30380fa3a378a8df/46604/green-skew.png 500w,\\n/static/4a71a2a0361003ac30380fa3a378a8df/31987/green-skew.png 1000w,\\n/static/4a71a2a0361003ac30380fa3a378a8df/df498/green-skew.png 1100w","sizes":"(max-width: 1000px) 100vw, 1000px"}}}}}');

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
//# sourceMappingURL=component---src-pages-index-js.js.map