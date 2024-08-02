(function () {
	'use strict';

	/**
	 * Whether or not the device is a Touch device
	 * @type {boolean}
	 */
	var isTouchDevice = "ontouchstart" in document;

	/**
	 * If true, the user agent already supports the 'maxTouchPoints' property on the Navigator prototype
	 * @type {boolean}
	 */
	var SUPPORTS_MAX_TOUCH_POINTS = "maxTouchPoints" in Navigator.prototype;

	// tslint:disable:no-any
	// Only set the 'maxTouchPoints' property on the Navigator prototype if it isn't already supported
	if (!SUPPORTS_MAX_TOUCH_POINTS) {
	    // If the device is a touch device, use 1 as the max available touch points even if it may be more. We have no way of knowing! Otherwise, fall back to 0
	    Object.defineProperty(Navigator.prototype, "maxTouchPoints", {
	        value: "maxTouchPoints" in navigator
	            ? // Use the existing maxTouchPoints value if given
	                navigator.maxTouchPoints
	            : // Use the existing msMaxTouchPoints value if given
	                "msMaxTouchPoints" in navigator
	                    ? navigator.msMaxTouchPoints
	                    : !isTouchDevice
	                        ? 0
	                        : 1,
	        enumerable: true
	    });
	}

	var POINTER_EVENT_TYPES = [
	    "pointerover",
	    "pointerenter",
	    "pointerdown",
	    "pointermove",
	    "pointerup",
	    "pointercancel",
	    "pointerout",
	    "pointerleave",
	    "gotpointercapture",
	    "lostpointercapture"
	];

	/**
	 * Returns true if the given event type represents a PointerEvent
	 * @param {string} type
	 * @returns {type is PointerEventType}
	 */
	function isPointerEventType(type) {
	    switch (type) {
	        case "gotpointercapture":
	        case "lostpointercapture":
	        case "pointerdown":
	        case "pointermove":
	        case "pointerup":
	        case "pointercancel":
	        case "pointerenter":
	        case "pointerleave":
	        case "pointerout":
	        case "pointerover":
	            return true;
	        default:
	            return false;
	    }
	}

	/**
	 * Checks if there are Global Event Handlers (such as 'onpointerdown') for every Pointer Event
	 * @type {boolean}
	 */
	var SUPPORTS_POINTER_EVENT_HANDLERS = POINTER_EVENT_TYPES.every(function (type) { return "on" + type in window; });

	// Only patch the dispatchEvent EventTarget prototype method if the user agent
	// doesn't already support Global Event Handlers for Pointer Events
	if (!SUPPORTS_POINTER_EVENT_HANDLERS) {
	    // Keep a reference to the original dispatchEvent prototype method
	    var originalDispatchEvent_1 = EventTarget.prototype.dispatchEvent;
	    /**
	     * Overwrite the dispatchEvent prototype method such that we can provide special handling
	     * for PointerEvents
	     * @param {Event} event
	     * @returns {boolean}
	     */
	    EventTarget.prototype.dispatchEvent = function (event) {
	        if (isPointerEventType(event.type)) {
	            // Also invoke the event handler, if it exists
	            var eventHandler = this["on" + event.type];
	            if (eventHandler != null) {
	                eventHandler(event);
	            }
	        }
	        return originalDispatchEvent_1.call(this, event);
	    };
	}

	

	

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	/**
	 * The default values for constructed PointerEvents
	 * @type {object}
	 */
	var POINTER_EVENT_DEFAULT_VALUES = {
	    pointerId: 0,
	    width: 1,
	    height: 1,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: "",
	    isPrimary: false
	};

	var SHARED_DESCRIPTOR_OPTIONS = {
	    writable: false,
	    configurable: true,
	    enumerable: true
	};

	/**
	 * Gets a PropertyDescriptor with a fallback value
	 * @param {Key} key
	 * @param {IPointerEventBase[Key]} providedValue
	 * @returns {PropertyDescriptor}
	 */
	function getDescriptorWithFallback(key, providedValue) {
	    return __assign({ value: providedValue != null ? providedValue : POINTER_EVENT_DEFAULT_VALUES[key] }, SHARED_DESCRIPTOR_OPTIONS);
	}

	var SEEN_POINTER_IDS = new Set();

	// tslint:disable:no-any
	// tslint:disable:bool-param-default
	/**
	 * A specialization of MouseEvents as spec'ed in https://www.w3.org/TR/pointerevents
	 */
	var PointerEvent = /** @class */ (function () {
	    function PointerEvent(type, eventInitDict) {
	        if (eventInitDict === void 0) { eventInitDict = {}; }
	        // Sets all of the given PropertyDescriptors with fallbacks to the default values as defined by the specification
	        var propsToSet = {
	            pointerId: getDescriptorWithFallback("pointerId", eventInitDict.pointerId),
	            width: getDescriptorWithFallback("width", eventInitDict.width),
	            height: getDescriptorWithFallback("height", eventInitDict.height),
	            pressure: getDescriptorWithFallback("pressure", eventInitDict.pressure),
	            tangentialPressure: getDescriptorWithFallback("tangentialPressure", eventInitDict.tangentialPressure),
	            tiltX: getDescriptorWithFallback("tiltX", eventInitDict.tiltX),
	            tiltY: getDescriptorWithFallback("tiltY", eventInitDict.tiltY),
	            twist: getDescriptorWithFallback("twist", eventInitDict.twist),
	            pointerType: getDescriptorWithFallback("pointerType", eventInitDict.pointerType),
	            isPrimary: getDescriptorWithFallback("isPrimary", eventInitDict.isPrimary)
	        };
	        var mouseEvent = new MouseEvent(type, eventInitDict);
	        Object.defineProperties(mouseEvent, propsToSet);
	        // Update the SEEN_POINTER_IDS Set with the pointer id from the options
	        SEEN_POINTER_IDS.add(propsToSet.pointerId.value);
	        // Return the constructed MouseEvent directly from the constructor
	        return mouseEvent;
	    }
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     * @returns {EventTarget[]}
	     */
	    PointerEvent.prototype.deepPath = function () {
	        return [];
	    };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     * @returns {EventTarget[]}
	     */
	    PointerEvent.prototype.composedPath = function () {
	        return [];
	    };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     * @param {string} _keyArg
	     * @returns {boolean}
	     */
	    PointerEvent.prototype.getModifierState = function (_keyArg) {
	        return false;
	    };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     * @param {string} _type
	     * @param {boolean} _bubbles
	     * @param {boolean} _cancelable
	     */
	    PointerEvent.prototype.initEvent = function (_type, _bubbles, _cancelable) { };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     * @param {string} _typeArg
	     * @param {boolean} _canBubbleArg
	     * @param {boolean} _cancelableArg
	     * @param {Window} _viewArg
	     * @param {number} _detailArg
	     * @param {number} _screenXArg
	     * @param {number} _screenYArg
	     * @param {number} _clientXArg
	     * @param {number} _clientYArg
	     * @param {boolean} _ctrlKeyArg
	     * @param {boolean} _altKeyArg
	     * @param {boolean} _shiftKeyArg
	     * @param {boolean} _metaKeyArg
	     * @param {number} _buttonArg
	     * @param {EventTarget | null} _relatedTargetArg
	     */
	    PointerEvent.prototype.initMouseEvent = function (_typeArg, _canBubbleArg, _cancelableArg, _viewArg, _detailArg, _screenXArg, _screenYArg, _clientXArg, _clientYArg, _ctrlKeyArg, _altKeyArg, _shiftKeyArg, _metaKeyArg, _buttonArg, _relatedTargetArg) { };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     * @param {string} _typeArg
	     * @param {boolean} _canBubbleArg
	     * @param {boolean} _cancelableArg
	     * @param {Window} _viewArg
	     * @param {number} _detailArg
	     */
	    PointerEvent.prototype.initUIEvent = function (_typeArg, _canBubbleArg, _cancelableArg, _viewArg, _detailArg) { };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     */
	    PointerEvent.prototype.preventDefault = function () { };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     */
	    PointerEvent.prototype.stopImmediatePropagation = function () { };
	    /**
	     * This is a no-op. A MouseEvent is returned from the constructor
	     */
	    PointerEvent.prototype.stopPropagation = function () { };
	    return PointerEvent;
	}());

	/**
	 * Converts the type of a PointerEvent into one that the browser can understand
	 * @param {string} pointerEventType
	 * @returns {string|null}
	 */
	function convertPointerEventType(pointerEventType) {
	    if (isTouchDevice) {
	        switch (pointerEventType) {
	            case "pointerdown":
	                return "touchstart";
	            case "pointermove":
	                return "touchmove";
	            case "pointerup":
	                return "touchend";
	            case "pointercancel":
	                return "touchcancel";
	            case "pointerout":
	            case "pointerleave":
	            case "pointerenter":
	            case "pointerover":
	            case "lostpointercapture":
	            case "gotpointercapture":
	                return null;
	        }
	    }
	    else {
	        switch (pointerEventType) {
	            case "pointerdown":
	                return "mousedown";
	            case "pointermove":
	                return "mousemove";
	            case "pointerup":
	                return "mouseup";
	            case "pointercancel":
	                return null;
	            case "pointerout":
	                return "mouseout";
	            case "pointerleave":
	                return "mouseleave";
	            case "pointerenter":
	                return "mouseenter";
	            case "pointerover":
	                return "mouseover";
	            case "lostpointercapture":
	            case "gotpointercapture":
	                return null;
	        }
	    }
	    throw new TypeError("Event of type: '" + pointerEventType + "' could not be handled!");
	}

	

	

	

	

	/**
	 * Returns true if the given event target is an element
	 * @param {EventTarget|null} eventTarget
	 * @returns {eventTarget is Element}
	 */
	function isElement(eventTarget) {
	    return eventTarget != null && "offsetLeft" in eventTarget;
	}

	// tslint:disable:no-any
	/**
	 * Gets the parent of an element, taking into account DocumentFragments, ShadowRoots, as well as the root context (window)
	 * @param {EventTarget} currentElement
	 * @returns {EventTarget | null}
	 */
	function getParent(currentElement) {
	    if ("nodeType" in currentElement && currentElement.nodeType === 1) {
	        return currentElement.parentNode;
	    }
	    if ("ShadowRoot" in window && currentElement instanceof window.ShadowRoot) {
	        return currentElement.host;
	    }
	    else if (currentElement === document) {
	        return window;
	    }
	    else if (currentElement instanceof Node)
	        return currentElement.parentNode;
	    return null;
	}

	// tslint:disable:no-any
	/**
	 * Finds the nearest root from an element
	 * @param {Element} target
	 * @returns {DocumentOrShadowRoot}
	 */
	function findNearestRoot(target) {
	    var currentElement = target;
	    while (currentElement != null) {
	        if ("ShadowRoot" in window && currentElement instanceof window.ShadowRoot) {
	            // Assume this is a ShadowRoot
	            return currentElement;
	        }
	        var parent_1 = getParent(currentElement);
	        if (parent_1 === currentElement) {
	            return document;
	        }
	        currentElement = parent_1;
	    }
	    return document;
	}

	var POINTER_ID_TO_CAPTURED_TARGET_MAP = new Map();

	// tslint:disable:no-any
	/**
	 * Retrieves the width of a touch
	 * @param {Touch} touch
	 * @returns {number}
	 */
	function getTouchWidth(touch) {
	    if ("radiusX" in touch)
	        return touch.radiusX * 2;
	    else if ("webkitRadiusX" in touch)
	        return touch.webkitRadiusX * 2;
	    else {
	        return POINTER_EVENT_DEFAULT_VALUES.width;
	    }
	}
	/**
	 * Retrieves the height of a touch
	 * @param {Touch} touch
	 * @returns {number}
	 */
	function getTouchHeight(touch) {
	    if ("radiusY" in touch)
	        return touch.radiusY * 2;
	    else if ("webkitRadiusY" in touch)
	        return touch.webkitRadiusY * 2;
	    else {
	        return POINTER_EVENT_DEFAULT_VALUES.height;
	    }
	}
	/**
	 * Gets the pressure of the current touch, depending on the type of event
	 * @param {PointerEventType} type
	 * @param {MouseEvent | Touch} touchOrMouseEvent
	 * @returns {number}
	 */
	function getPressure(type, touchOrMouseEvent) {
	    if (type === "pointerup") {
	        return 0;
	    }
	    else if ("force" in touchOrMouseEvent)
	        return touchOrMouseEvent.force;
	    else if ("webkitForce" in touchOrMouseEvent)
	        return touchOrMouseEvent.webkitForce;
	    else {
	        return POINTER_EVENT_DEFAULT_VALUES.pressure;
	    }
	}
	/**
	 * Gets the 'twist' value of a Touch event
	 * @param {Touch} touch
	 * @returns {number}
	 */
	function getTouchTwist(touch) {
	    if ("rotationAngle" in touch)
	        return touch.rotationAngle;
	    else if ("webkitRotationAngle" in touch)
	        return touch.webkitRotationAngle;
	    else {
	        return POINTER_EVENT_DEFAULT_VALUES.twist;
	    }
	}
	/**
	 * If the event is "pointermove", and if the target is given and is an element,
	 * use whatever element is currently under the cursor.
	 * @param {number} pointerId
	 * @param {PointerEventType} type
	 * @param {TouchEvent} e
	 * @param {Touch} touch
	 * @returns {EventTarget | null}
	 */
	function getTouchTarget(pointerId, type, e, touch) {
	    var captured = POINTER_ID_TO_CAPTURED_TARGET_MAP.get(pointerId);
	    if (captured !== undefined)
	        return captured;
	    if (type !== "pointermove" || !isElement(e.target) || !isElement(e.currentTarget))
	        return e.target;
	    return findNearestRoot(e.currentTarget).elementFromPoint(touch.clientX, touch.clientY);
	}

	/**
	 * Gets the event path from a target
	 * @param {Element} target
	 * @returns {Element[]}
	 */
	function getEventPath(target) {
	    var path = [];
	    var currentElement = target;
	    while (currentElement != null) {
	        path.push(currentElement);
	        currentElement = getParent(currentElement);
	        // If the last Node is equal to the latest parentNode, break immediately
	        if (path[path.length - 1] === currentElement)
	            break;
	    }
	    return path;
	}

	/**
	 * Finds the nearest ancestor of an element that can scroll
	 * @param {Element} target
	 * @returns {IScrollAncestor}
	 */
	function findNearestAncestorsWithScroll(target) {
	    var path = [];
	    var currentElement = target;
	    while (currentElement != null) {
	        if ("style" in currentElement) {
	            var computedStyle = getComputedStyle(currentElement);
	            var overflow = computedStyle.getPropertyValue("overflow");
	            var canScrollX = overflow.startsWith("visible") || overflow.startsWith("scroll");
	            var canScrollY = overflow.endsWith("visible") || overflow.endsWith("scroll");
	            var canScroll = canScrollX || canScrollY;
	            if (canScroll) {
	                path.push({ canScrollX: canScrollX, canScrollY: canScrollY, scrollElement: currentElement });
	            }
	        }
	        var parent_1 = getParent(currentElement);
	        // If the last Node is equal to the latest parentNode, break immediately
	        if (parent_1 === currentElement)
	            break;
	        currentElement = parent_1;
	    }
	    return path;
	}

	/**
	 * Overwrites the targets for the given event
	 * @param {Event} e
	 * @param {NullableEventTarget} target
	 * @param {NullableEventTarget} currentTarget
	 * @param {NullableEventTarget} relatedTarget
	 */
	function overwriteTargetsForEvent(e, target, currentTarget, relatedTarget) {
	    // Set the original target and currentTarget on the cancel event
	    Object.defineProperties(e, __assign({}, (target === undefined
	        ? {}
	        : {
	            target: __assign({ value: target }, SHARED_DESCRIPTOR_OPTIONS)
	        }), (currentTarget === undefined
	        ? {}
	        : {
	            currentTarget: __assign({ value: currentTarget }, SHARED_DESCRIPTOR_OPTIONS)
	        }), (relatedTarget === undefined
	        ? {}
	        : {
	            relatedTarget: __assign({ value: relatedTarget }, SHARED_DESCRIPTOR_OPTIONS)
	        })));
	}

	var currentMousePointerId = POINTER_EVENT_DEFAULT_VALUES.pointerId + 1;

	var currentPenOrTouchPointerId = currentMousePointerId + 1;

	/**
	 * Gets a PointerId from a Touch
	 * @param {Touch} touch
	 * @returns {number}
	 */
	function getPointerIdFromTouch(touch) {
	    return touch.identifier + currentPenOrTouchPointerId;
	}

	/**
	 * Returns true if the given event type is cancelable, based on the given event
	 * @param {PointerEventType} type
	 * @param {MouseEvent | TouchEvent} e
	 * @returns {boolean}
	 */
	function isCancelable(type, e) {
	    switch (type) {
	        case "pointerover":
	        case "pointerdown":
	        case "pointermove":
	        case "pointerup":
	            return true;
	        default:
	            return e.cancelable;
	    }
	}

	/**
	 * Returns true if the given event type can bubble, based on the given event
	 * @param {PointerEventType} type
	 * @param {MouseEvent | TouchEvent} e
	 * @returns {boolean}
	 */
	function canBubble(type, e) {
	    switch (type) {
	        case "pointerover":
	        case "pointerdown":
	        case "pointermove":
	        case "pointerup":
	        case "pointercancel":
	        case "pointerout":
	        case "gotpointercapture":
	        case "lostpointercapture":
	            return true;
	        default:
	            return e.bubbles;
	    }
	}

	var CLONEABLE_EVENT_PROPERTIES = new Set([
	    "cancelBubble",
	    "currentTarget",
	    "defaultPrevented",
	    "eventPhase",
	    "returnValue",
	    "scoped",
	    "srcElement",
	    "timeStamp",
	    "deepPath",
	    "AT_TARGET",
	    "BUBBLING_PHASE",
	    "CAPTURING_PHASE",
	    "NONE"
	]);

	var CLONEABLE_UI_EVENT_PROPERTIES = new Set(__spread(CLONEABLE_EVENT_PROPERTIES, [
	    "view"
	], ("sourceCapabilities" in UIEvent.prototype ? ["sourceCapabilities"] : [])));

	/**
	 * Clones an Event as a new PointerEvent
	 * @param {ICloneEventAsPointerEventOptions} options
	 * @returns {PointerEvent}
	 */
	function cloneEventAsPointerEvent(_a) {
	    var dynamicPropertiesHandler = _a.dynamicPropertiesHandler, e = _a.e, initOptions = _a.initOptions, overwrittenMouseEventProperties = _a.overwrittenMouseEventProperties, type = _a.type;
	    // Create a new PointerEvent
	    var clone = new PointerEvent(type, initOptions);
	    // Preventing default on the clone will also prevent default on the original event
	    var rawPreventDefault = clone.preventDefault;
	    var rawStopPropagation = clone.stopPropagation;
	    var rawStopImmediatePropagation = clone.stopImmediatePropagation;
	    clone.preventDefault = function () {
	        rawPreventDefault.call(this);
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    };
	    // Stopping propagation on the clone will also stop propagation on the original event
	    clone.stopPropagation = function () {
	        rawStopPropagation.call(this);
	        e.stopPropagation();
	    };
	    // Stopping immediate propagation on the clone will also stop immediate propagation on the original event
	    clone.stopImmediatePropagation = function () {
	        rawStopImmediatePropagation.call(this);
	        e.stopImmediatePropagation();
	    };
	    var additionalPropsToSet = {};
	    CLONEABLE_UI_EVENT_PROPERTIES.forEach(function (key) {
	        return (additionalPropsToSet[key] = __assign({ value: e[key] }, SHARED_DESCRIPTOR_OPTIONS));
	    });
	    additionalPropsToSet = __assign({}, additionalPropsToSet, overwrittenMouseEventProperties, dynamicPropertiesHandler());
	    // Set MouseEvent (and inherited UIEvent) properties on the event object
	    Object.defineProperties(clone, additionalPropsToSet);
	    return clone;
	}

	var pointerIdToCancelFiredSet = new Set();
	/**
	 * Updates the PointerIdToCancelFiredSet
	 * @param {{type: PointerEventType, pointerId: number}} e
	 */
	function updatePointerIdToCancelFiredSet(_a) {
	    var type = _a.type, pointerId = _a.pointerId;
	    switch (type) {
	        case "pointercancel":
	            pointerIdToCancelFiredSet.add(pointerId);
	            break;
	        case "pointerdown":
	        case "pointerup":
	            pointerIdToCancelFiredSet["delete"](pointerId);
	            break;
	    }
	}

	/**
	 * Invokes a listener with the given event
	 * @param {PointerEvent} event
	 * @param {EventListenerOrEventListenerObject} listener
	 */
	function invokeListener(event, listener) {
	    typeof listener === "function" ? listener(event) : listener.handleEvent(event);
	}

	

	var styleDeclarationPropertyName = "touchAction";
	var styleAttributePropertyName = "touch-action";
	var styleAttributePropertyNameRegex = new RegExp(styleAttributePropertyName + ":\\s*([^;]*)");
	/**
	 * Finds all ancestors and their touch-action values
	 * @param {Element} target
	 * @returns {ITouchActionAncestor[]}
	 */
	function findNearestAncestorsWithTouchAction(target) {
	    var path = [];
	    var currentElement = target;
	    while (currentElement != null) {
	        var touchActionPropertyValue = null;
	        if ("style" in currentElement) {
	            touchActionPropertyValue = currentElement.style[styleDeclarationPropertyName];
	            if (touchActionPropertyValue == null || touchActionPropertyValue === "") {
	                var styleAttributeValue = currentElement.getAttribute("style");
	                if (styleAttributeValue != null && styleAttributeValue.includes(styleAttributePropertyName)) {
	                    var match = styleAttributeValue.match(styleAttributePropertyNameRegex);
	                    if (match != null) {
	                        var _a = __read(match, 2), values = _a[1];
	                        touchActionPropertyValue = values;
	                    }
	                }
	            }
	            if (touchActionPropertyValue == null || touchActionPropertyValue === "") {
	                var attributeValue = target.getAttribute("touch-action");
	                if (attributeValue != null && attributeValue !== "") {
	                    touchActionPropertyValue = attributeValue;
	                }
	            }
	            if (touchActionPropertyValue != null) {
	                path.push({
	                    element: currentElement,
	                    touchAction: new Set(touchActionPropertyValue.split(/\s/).map(function (part) { return part.trim(); }))
	                });
	            }
	        }
	        var parent_1 = getParent(currentElement);
	        // If the last Node is equal to the latest parentNode, break immediately
	        if (parent_1 === currentElement)
	            break;
	        currentElement = parent_1;
	    }
	    return path;
	}

	// tslint:disable:no-any
	// tslint:disable:no-identical-conditions
	// tslint:disable:no-collapsible-if
	/**
	 * The name of the property to extend TouchEvents with
	 * @type {string}
	 */
	var TOUCH_ACTION_PROPERTY_NAME = "___touchAction___";
	/**
	 * How great the different between a touchstart and touchmove before it is determined that panning is undergoing
	 * @type {number}
	 */
	var PANNING_DIFFERENCE_THRESHOLD = 5;
	/**
	 * The PointerEvents to track during scrolling
	 * @type {(string)[]}
	 */
	var POINTER_EVENTS_TO_TRACK = ["pointercancel", "pointerleave", "pointerup", "pointerout"];
	var LAST_POINTER_DOWN_EVENT_FOR_POINTER_ID = new Map();
	/**
	 * Handles all those dynamic properties that are specific for a specific PointerEvent type on Touch devices
	 * @param {number} pointerId
	 * @param {PointerEventType} type
	 * @param {Touch} currentTouch
	 * @param {TouchEvent} e
	 * @returns {{[Key in DynamicPointerEventProperty]: PropertyDescriptor}}
	 */
	function handleDynamicPropertiesForPointerEventOnTouch(pointerId, type, currentTouch, e) {
	    switch (type) {
	        case "pointerdown":
	        case "pointermove":
	        case "pointerup":
	        case "pointerover":
	        case "pointerenter":
	        case "gotpointercapture":
	        case "lostpointercapture":
	            return handleDynamicPropertiesForContactTouch(pointerId, type, currentTouch, e);
	        case "pointercancel":
	        case "pointerout":
	        case "pointerleave":
	            return handleDynamicPropertiesForNoContactTouch(pointerId, type, currentTouch, e);
	        default:
	            throw new TypeError("Error: Could not handle dynamic properties for a PointerEvent of type: '" + type + "'");
	    }
	}
	/**
	 * Handles all those dynamic properties that are specific for pointercancel/pointerleave/pointerout events on Touch devices
	 * @param {number} pointerId
	 * @param {PointerEventType} type
	 * @param {Touch} touch
	 * @param {TouchEvent} e
	 * @returns {{[Key in DynamicPointerEventProperty]: PropertyDescriptor}}
	 */
	function handleDynamicPropertiesForNoContactTouch(pointerId, type, touch, e) {
	    return {
	        target: __assign({ value: getTouchTarget(pointerId, type, e, touch) }, SHARED_DESCRIPTOR_OPTIONS),
	        // For everything other than pointerover/pointerleave/pointerout/pointerenter, the related target should be null
	        // https://www.w3.org/TR/pointerevents2/
	        relatedTarget: __assign({ value: null }, SHARED_DESCRIPTOR_OPTIONS),
	        button: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        buttons: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        clientX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        clientY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        width: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.width }, SHARED_DESCRIPTOR_OPTIONS),
	        height: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.height }, SHARED_DESCRIPTOR_OPTIONS),
	        pressure: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.pressure }, SHARED_DESCRIPTOR_OPTIONS),
	        tangentialPressure: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.tangentialPressure }, SHARED_DESCRIPTOR_OPTIONS),
	        tiltX: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.tiltX }, SHARED_DESCRIPTOR_OPTIONS),
	        tiltY: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.tiltY }, SHARED_DESCRIPTOR_OPTIONS),
	        twist: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.twist }, SHARED_DESCRIPTOR_OPTIONS),
	        layerX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        layerY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        movementX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        movementY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        pageX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        pageY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        screenX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        screenY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        x: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        y: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS)
	    };
	}
	/**
	 * Handles all those dynamic properties that are specific for pointercancel events on Touch devices
	 * @param {number} pointerId
	 * @param {string} type
	 * @param {Touch} currentTouch
	 * @param {TouchEvent} e
	 * @returns {{[Key in DynamicPointerEventProperty]: PropertyDescriptor}}
	 */
	function handleDynamicPropertiesForContactTouch(pointerId, type, currentTouch, e) {
	    var offsetX = currentTouch.clientX - (isElement(currentTouch.target) ? currentTouch.target.offsetLeft : 0);
	    var offsetY = currentTouch.clientY - (isElement(currentTouch.target) ? currentTouch.target.offsetTop : 0);
	    var offsetParent = "offsetParent" in currentTouch.target ? currentTouch.target : null;
	    var layerX = offsetParent == null ? offsetX : currentTouch.clientX - offsetParent.offsetLeft;
	    var layerY = offsetParent == null ? offsetY : currentTouch.clientY - offsetParent.offsetTop;
	    return {
	        target: __assign({ value: getTouchTarget(pointerId, type, e, currentTouch) }, SHARED_DESCRIPTOR_OPTIONS),
	        // For everything other than pointerover/pointerleave/pointerout/pointerenter, the related target should be null
	        // https://www.w3.org/TR/pointerevents2/
	        relatedTarget: __assign({ value: null }, SHARED_DESCRIPTOR_OPTIONS),
	        button: __assign({ 
	            // Touch contact are indicated by the button value 0
	            value: type === "gotpointercapture" ? -1 : 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        buttons: __assign({ 
	            // During Touch contact, there is a single button in use, hence the value of 1
	            value: type === "pointerup" || type === "lostpointercapture" ? 0 : 1 }, SHARED_DESCRIPTOR_OPTIONS),
	        clientX: __assign({ value: currentTouch.clientX }, SHARED_DESCRIPTOR_OPTIONS),
	        clientY: __assign({ value: currentTouch.clientY }, SHARED_DESCRIPTOR_OPTIONS),
	        screenX: __assign({ value: currentTouch.screenX }, SHARED_DESCRIPTOR_OPTIONS),
	        screenY: __assign({ value: currentTouch.screenY }, SHARED_DESCRIPTOR_OPTIONS),
	        pageX: __assign({ value: currentTouch.pageX }, SHARED_DESCRIPTOR_OPTIONS),
	        pageY: __assign({ value: currentTouch.pageY }, SHARED_DESCRIPTOR_OPTIONS),
	        x: __assign({ value: currentTouch.clientX }, SHARED_DESCRIPTOR_OPTIONS),
	        y: __assign({ value: currentTouch.clientY }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetX: __assign({ value: offsetX }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetY: __assign({ value: offsetY }, SHARED_DESCRIPTOR_OPTIONS),
	        layerX: __assign({ value: layerX }, SHARED_DESCRIPTOR_OPTIONS),
	        layerY: __assign({ value: layerY }, SHARED_DESCRIPTOR_OPTIONS),
	        // For both pointerdown and pointer up events, there has been no movement since the previous event. This is only applicable to pointermove events
	        movementX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        // For both pointerdown and pointer up events, there has been no movement since the previous event. This is only applicable to pointermove events
	        movementY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        // The width and height in CSS pixels of the contact geometry of the pointer.
	        // Will use the radiusX or webkitRadiusX properties of Touch Events to determine this
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        width: __assign({ value: getTouchWidth(currentTouch) }, SHARED_DESCRIPTOR_OPTIONS),
	        height: __assign({ value: getTouchHeight(currentTouch) }, SHARED_DESCRIPTOR_OPTIONS),
	        // Some browsers like iOS safari reports force values for touches which we can use to determine the pressure.
	        // For "pointerup" events, the pressure will always be 0
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        pressure: __assign({ value: getPressure(type, currentTouch) }, SHARED_DESCRIPTOR_OPTIONS),
	        // There is no known way to detect the tangential pressure currently, so we just default to setting this to 0
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        tangentialPressure: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.tangentialPressure }, SHARED_DESCRIPTOR_OPTIONS),
	        // Touch pointers doesn't support tilt. Default to values of zero
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        tiltX: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.tiltX }, SHARED_DESCRIPTOR_OPTIONS),
	        tiltY: __assign({ value: POINTER_EVENT_DEFAULT_VALUES.tiltY }, SHARED_DESCRIPTOR_OPTIONS),
	        // Gets the rotation angle, in degrees, of the contact area ellipse
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        twist: __assign({ value: getTouchTwist(currentTouch) }, SHARED_DESCRIPTOR_OPTIONS)
	    };
	}
	/**
	 * Handles whatever logic needs to come before any given kind of TouchEvent
	 * @param {PointerEventType} pointerEventType
	 * @param {EventTarget} eventTarget
	 * @param {TouchEvent} e
	 * @param {PointerEvent[]} pointerEvents
	 */
	function handlePrePointerEventForTouch(pointerEventType, eventTarget, e, pointerEvents) {
	    switch (pointerEventType) {
	        case "pointermove":
	            if (isElement(e.target) && isElement(e.currentTarget)) {
	                var touchAction_1 = e[TOUCH_ACTION_PROPERTY_NAME];
	                // If only panning in the [x|y]-axis is allowed, test if panning is attempted in the [x|y]-axis and prevent it if that is the case
	                if (touchAction_1 !== "auto") {
	                    pointerEvents.forEach(function (_a) {
	                        var pointerId = _a.pointerId, clientX = _a.clientX, clientY = _a.clientY;
	                        if (e.cancelable && !e.defaultPrevented) {
	                            // Take the last known pointer down event
	                            var pointerDownEvent = LAST_POINTER_DOWN_EVENT_FOR_POINTER_ID.get(pointerId);
	                            if (pointerDownEvent == null)
	                                return;
	                            var diffX = clientX - pointerDownEvent.clientX;
	                            var absDiffX = Math.abs(diffX);
	                            var diffY = clientY - pointerDownEvent.clientY;
	                            var absDiffY = Math.abs(diffY);
	                            var isPanningX = absDiffX > PANNING_DIFFERENCE_THRESHOLD && absDiffX > absDiffY;
	                            var isPanningY = absDiffY > PANNING_DIFFERENCE_THRESHOLD && absDiffY > absDiffX;
	                            var isPanningUp = diffY > 0;
	                            var isPanningDown = diffY < 0;
	                            var isPanningLeft = diffX > 0;
	                            var isPanningRight = diffX < 0;
	                            if (touchAction_1 === "none") {
	                                // Prevent touchmove from performing its default behavior if horizontal or vertical movement happens and none if allowed
	                                if (isPanningX || isPanningY) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-y") {
	                                // Prevent touchmove from performing its default behavior if horizontal movement happens, but only vertical scrolling is allowed
	                                if (isPanningX) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-y pan-left") {
	                                // Prevent touchmove from performing its default behavior if right-going horizontal movement happens
	                                if (isPanningRight) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-y pan-right") {
	                                // Prevent touchmove from performing its default behavior if left-going horizontal movement happens
	                                if (isPanningLeft) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-up") {
	                                if (!isPanningUp) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-down") {
	                                if (!isPanningDown) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-left") {
	                                if (!isPanningLeft) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-right") {
	                                if (!isPanningRight) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-x") {
	                                // Prevent touchmove from performing its default behavior if vertical movement happens, but only horizontal scrolling is allowed
	                                if (isPanningY) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-x pan-up") {
	                                // Prevent touchmove from performing its default behavior if down-going vertical movement happens
	                                if (isPanningDown) {
	                                    e.preventDefault();
	                                }
	                            }
	                            else if (touchAction_1 === "pan-x pan-down") {
	                                // Prevent touchmove from performing its default behavior if up-going vertical movement happens
	                                if (isPanningUp) {
	                                    e.preventDefault();
	                                }
	                            }
	                        }
	                    });
	                    break;
	                }
	                // If the target is not equal to the original target
	                if (e.target !== e.currentTarget) {
	                    // If none of the touches has a pointer id that is used for capturing pointer events and binding them to the current target of the event, do nothing
	                    if (Array.from(e.changedTouches).some(function (touch) { return POINTER_ID_TO_CAPTURED_TARGET_MAP.has(getPointerIdFromTouch(touch)); })) {
	                        break;
	                    }
	                    // Fire a "pointercancel" event if/when the target is no longer equal to the original target
	                    createPointerEventsForTouchOfTypeAndDispatch("pointercancel", e, eventTarget);
	                }
	            }
	            break;
	        case "pointerdown":
	            // All "pointerdown" events must be preceded by a "pointerover" event
	            // https://www.w3.org/TR/pointerevents/#the-pointerover-event
	            createPointerEventsForTouchOfTypeAndDispatch("pointerover", e, eventTarget);
	            // All "pointerdown" events must be preceded by a "pointerenter" event
	            // https://www.w3.org/TR/pointerevents/#the-pointerover-event
	            createPointerEventsForTouchOfTypeAndDispatch("pointerenter", e, eventTarget);
	            break;
	    }
	}
	/**
	 * Handles whatever logic needs to follow any given kind of TouchEvent
	 * @param {PointerEventType} pointerEventType
	 * @param {EventTarget} eventTarget
	 * @param {TouchEvent} e
	 */
	function handlePostPointerEventForTouch(pointerEventType, eventTarget, e) {
	    // Store a reference to the event target and event currentTarget. These may change in the meantime, but we are going to need them when cloning the event
	    var target = e.target;
	    var currentTarget = e.currentTarget;
	    // Immediately after pointerup or pointercancel events, a user agent MUST clear any pointer capture target overrides
	    // https://www.w3.org/TR/pointerevents/#implicit-release-of-pointer-capture
	    if (pointerEventType === "pointerup" || pointerEventType === "pointercancel") {
	        Array.from(e.changedTouches).forEach(function (touch) {
	            var pointerId = getPointerIdFromTouch(touch);
	            var match = POINTER_ID_TO_CAPTURED_TARGET_MAP.get(pointerId);
	            if (match != null && isElement(match)) {
	                match.releasePointerCapture(pointerId);
	            }
	        });
	    }
	    switch (pointerEventType) {
	        case "pointerdown":
	            // The equivalent event is "touchcancel" which won't fire when the finger leaves the element
	            // or when scrolling happens. We need to enforce this behavior to follow the spec.
	            // https://www.w3.org/TR/pointerevents2/#the-pointercancel-event
	            if (isElement(e.currentTarget)) {
	                /**
	                 * We need to listen for "pointermove" events to continuously monitor and update the target
	                 */
	                var pointerMoveHandler_1 = function () { };
	                /**
	                 * We need to make sure to unbind the handler to avoid memory leaks
	                 */
	                var unbindPointerMoveHandler_1 = function () {
	                    eventTarget.removeEventListener("pointermove", pointerMoveHandler_1);
	                    if (POINTER_EVENTS_TO_TRACK != null) {
	                        POINTER_EVENTS_TO_TRACK.forEach(function (type) {
	                            eventTarget.removeEventListener(type, unbindPointerMoveHandler_1);
	                        });
	                    }
	                };
	                eventTarget.addEventListener("pointermove", pointerMoveHandler_1);
	                var ancestorsWithScroll_1 = findNearestAncestorsWithScroll(e.currentTarget);
	                var hasFiredScrollEvent_1 = false;
	                /**
	                 * Unbind the scroll listeners to avoid memory leaks and unnecessary computations
	                 */
	                var unbindScrollListeners_1 = function () {
	                    // Then remove all listeners for scroll events
	                    if (ancestorsWithScroll_1 != null) {
	                        ancestorsWithScroll_1.forEach(function (_a) {
	                            var scrollElement = _a.scrollElement;
	                            return scrollElement.removeEventListener("scroll", scrollHandler_1);
	                        });
	                        ancestorsWithScroll_1 = null;
	                    }
	                    if (POINTER_EVENTS_TO_TRACK != null) {
	                        POINTER_EVENTS_TO_TRACK.forEach(function (type) {
	                            eventTarget.removeEventListener(type, unbindScrollListeners_1);
	                        });
	                    }
	                };
	                /**
	                 * When a scroll event happens, fire a 'pointercancel' event on the element
	                 */
	                var scrollHandler_1 = function () {
	                    if (!hasFiredScrollEvent_1) {
	                        hasFiredScrollEvent_1 = true;
	                        // Re-set the target and currentTarget to the values the event had before.
	                        // It may have changed in the meantime
	                        overwriteTargetsForEvent(e, target, currentTarget);
	                        // Construct a new event and fire it on the EventTarget
	                        createPointerEventsForTouchOfTypeAndDispatch("pointercancel", e, eventTarget);
	                    }
	                    unbindScrollListeners_1();
	                };
	                // Hook up listeners for "scroll" events on all scroll ancestors
	                ancestorsWithScroll_1.forEach(function (_a) {
	                    var scrollElement = _a.scrollElement;
	                    return scrollElement.addEventListener("scroll", scrollHandler_1);
	                });
	                // Make sure to also unbind the scroll handlers on various related PointerEvents
	                POINTER_EVENTS_TO_TRACK.forEach(function (pointerEventToTrack) {
	                    eventTarget.addEventListener(pointerEventToTrack, unbindScrollListeners_1);
	                    eventTarget.addEventListener(pointerEventToTrack, unbindPointerMoveHandler_1);
	                });
	            }
	            break;
	        case "pointercancel":
	            // If we're having to do with a 'pointercancel' event,
	            // The spec requires a "pointerout" and "pointerleave" event to be fired immediately after.
	            // https://www.w3.org/TR/pointerevents2/#the-pointercancel-event
	            createPointerEventsForTouchOfTypeAndDispatch("pointerout", e, eventTarget);
	            createPointerEventsForTouchOfTypeAndDispatch("pointerleave", e, eventTarget);
	            break;
	    }
	}
	/**
	 * Handles touch-action values for an event
	 * @param {PointerEventType} _type
	 * @param {PointerEvent} e
	 */
	function handleTouchAction(_type, e) {
	    // Only consider pointerdown events here
	    if (!isElement(e.currentTarget))
	        return;
	    var touchActionAncestors = findNearestAncestorsWithTouchAction(e.currentTarget);
	    var hasTouchActionNoneAncestor = touchActionAncestors.some(function (ancestor) { return ancestor.touchAction.has("none"); });
	    var hasPanXAncestor = touchActionAncestors.some(function (ancestor) { return ancestor.touchAction.has("pan-x"); });
	    var hasPanYAncestor = touchActionAncestors.some(function (ancestor) { return ancestor.touchAction.has("pan-y"); });
	    var hasPanUpAncestor = touchActionAncestors.some(function (ancestor) { return ancestor.touchAction.has("pan-up"); });
	    var hasPanDownAncestor = touchActionAncestors.some(function (ancestor) { return ancestor.touchAction.has("pan-down"); });
	    var hasPanLeftAncestor = touchActionAncestors.some(function (ancestor) { return ancestor.touchAction.has("pan-left"); });
	    var hasPanRightAncestor = touchActionAncestors.some(function (ancestor) { return ancestor.touchAction.has("pan-right"); });
	    var canPanX = hasTouchActionNoneAncestor || hasPanXAncestor || (hasPanLeftAncestor && hasPanRightAncestor);
	    var canPanY = hasTouchActionNoneAncestor || hasPanYAncestor || (hasPanUpAncestor && hasPanDownAncestor);
	    if (canPanX && canPanY) {
	        Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, { value: "none" });
	    }
	    else if (canPanX) {
	        if (hasPanUpAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-x pan-up"
	            });
	        }
	        else if (hasPanDownAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-x pan-down"
	            });
	        }
	        else {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, { value: "pan-x" });
	        }
	    }
	    else if (canPanY) {
	        if (hasPanLeftAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-y pan-left"
	            });
	        }
	        else if (hasPanRightAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-y pan-right"
	            });
	        }
	        else {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, { value: "pan-y" });
	        }
	    }
	    else if (hasPanUpAncestor) {
	        if (hasPanLeftAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-up pan-left"
	            });
	        }
	        else if (hasPanRightAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-up pan-right"
	            });
	        }
	    }
	    else if (hasPanDownAncestor) {
	        if (hasPanLeftAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-down pan-left"
	            });
	        }
	        else if (hasPanRightAncestor) {
	            Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	                value: "pan-down pan-right"
	            });
	        }
	    }
	    else if (hasPanLeftAncestor) {
	        Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, { value: "pan-left" });
	    }
	    else if (hasPanRightAncestor) {
	        Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, {
	            value: "pan-right"
	        });
	    }
	    else if (hasPanUpAncestor) {
	        Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, { value: "pan-up" });
	    }
	    else if (hasPanDownAncestor) {
	        Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, { value: "pan-down" });
	    }
	    else {
	        Object.defineProperty(e, TOUCH_ACTION_PROPERTY_NAME, { value: "auto" });
	    }
	}
	/**
	 * Creates a PointerEvent based on a TouchEvent of the given type
	 * @param {PointerEventType} type
	 * @param {TouchEvent} e
	 * @returns {PointerEvent[]}
	 */
	function createPointerEventsForTouchOfType(type, e) {
	    handleTouchAction(type, e);
	    return Array.from(e.changedTouches)
	        .map(function (currentTouch) {
	        // For Touch, each active pointer corresponds to a finger in direct contact with the digitizer
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        var pointerId = getPointerIdFromTouch(currentTouch);
	        var initOptions = __assign({}, e, { pointerId: pointerId, pointerType: "touch", 
	            // The Touch will be primary if it is the first touch of the list
	            // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	            isPrimary: currentTouch === e.changedTouches[0], bubbles: canBubble(type, e), cancelable: isCancelable(type, e) });
	        // Prevent the event if cancel has been fired and it isn't an event that will always be fired after pointercancel events
	        var shouldPreventBecauseCanceled = type !== "pointerout" && type !== "pointerleave" && pointerIdToCancelFiredSet.has(pointerId);
	        if (shouldPreventBecauseCanceled) {
	            if (e.cancelable && !e.defaultPrevented) {
	                e.preventDefault();
	            }
	            // Update the Set since this won't be invoked otherwise
	            updatePointerIdToCancelFiredSet({ type: type, pointerId: pointerId });
	            return null;
	        }
	        // Define all properties of MouseEvents that should be set on the event object
	        // noinspection JSDeprecatedSymbols
	        var overwrittenMouseEventProperties = __assign({ scoped: __assign({ value: e.scoped }, SHARED_DESCRIPTOR_OPTIONS), 
	            // The 'fromElement' property should be set to 'null' for interoperability reasons according to the spec
	            // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	            fromElement: __assign({ value: null }, SHARED_DESCRIPTOR_OPTIONS), 
	            // The 'toElement' property should be set to 'null' for interoperability reasons according to the spec
	            // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	            toElement: __assign({ value: null }, SHARED_DESCRIPTOR_OPTIONS), 
	            // The 'detail' property should always have a value of 0
	            // https://www.w3.org/TR/pointerevents/#attributes-and-default-actions
	            detail: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS), 
	            // The 'composed' property should always have a value of true
	            // https://www.w3.org/TR/pointerevents/#attributes-and-default-actions
	            composed: __assign({ value: true }, SHARED_DESCRIPTOR_OPTIONS), composedPath: __assign({ value: function () { return getEventPath(e.target); } }, SHARED_DESCRIPTOR_OPTIONS) }, (!("region" in Touch.prototype)
	            ? {}
	            : {
	                region: __assign({ value: currentTouch.region }, SHARED_DESCRIPTOR_OPTIONS)
	            }), (!("path" in Event.prototype) || !isElement(currentTouch.target)
	            ? {}
	            : {
	                path: __assign({ value: getEventPath(currentTouch.target) }, SHARED_DESCRIPTOR_OPTIONS)
	            }), (!("deepPath" in Event.prototype) || !isElement(currentTouch.target)
	            ? {}
	            : {
	                path: __assign({ value: function () { return getEventPath(currentTouch.target); } }, SHARED_DESCRIPTOR_OPTIONS)
	            }));
	        // Create a new PointerEvent
	        var clonedEvent = cloneEventAsPointerEvent({
	            e: e,
	            type: type,
	            initOptions: initOptions,
	            overwrittenMouseEventProperties: overwrittenMouseEventProperties,
	            dynamicPropertiesHandler: function () { return handleDynamicPropertiesForPointerEventOnTouch(pointerId, type, currentTouch, e); }
	        });
	        overwriteTargetsForEvent(e, clonedEvent.target, clonedEvent.currentTarget, clonedEvent.relatedTarget);
	        // Store a reference to the last constructed "pointerdown" event
	        if (type === "pointerdown") {
	            LAST_POINTER_DOWN_EVENT_FOR_POINTER_ID.set(pointerId, clonedEvent);
	        }
	        return clonedEvent;
	    })
	        .filter(function (ev) { return ev != null; });
	}
	/**
	 * Creates a PointerEvent based on a TouchEvent of the given type and invokes the listener with it
	 * @param {PointerEventType} type
	 * @param {TouchEvent} e
	 * @param {EventTarget} eventTarget
	 * @param {EventListenerOrEventListenerObject} listener
	 */
	function createPointerEventsForTouchOfTypeAndInvoke(type, e, eventTarget, listener) {
	    var pointerEvents = createPointerEventsForTouchOfType(type, e);
	    // Handle whatever needs to come before the TouchEvent
	    handlePrePointerEventForTouch(type, eventTarget, e, pointerEvents);
	    pointerEvents.forEach(function (clone) {
	        updatePointerIdToCancelFiredSet(clone);
	        // Invoke the listener with the cloned event
	        invokeListener(clone, listener);
	    });
	    // Handle whatever needs to come after the TouchEvent
	    handlePostPointerEventForTouch(type, eventTarget, e);
	}
	/**
	 * Creates a PointerEvent based on a TouchEvent of the given type and dispatches an event on the event target
	 * @param {PointerEventType} type
	 * @param {TouchEvent} e
	 * @param {EventTarget} eventTarget
	 */
	function createPointerEventsForTouchOfTypeAndDispatch(type, e, eventTarget) {
	    var pointerEvents = createPointerEventsForTouchOfType(type, e);
	    // Handle whatever needs to come before the TouchEvent
	    handlePrePointerEventForTouch(type, eventTarget, e, pointerEvents);
	    pointerEvents.forEach(function (clone) {
	        updatePointerIdToCancelFiredSet(clone);
	        // Dispatch the event on the target
	        eventTarget.dispatchEvent(clone);
	    });
	    // Handle whatever needs to come after the TouchEvent
	    handlePostPointerEventForTouch(type, eventTarget, e);
	}
	/**
	 * Handles a PointerEvent for a Touch device
	 * @param {EventTarget} eventTarget
	 * @param {PointerEventType} type
	 * @param {TouchEvent} e
	 * @param {EventListenerOrEventListenerObject} listener
	 */
	function handlePointerEventForTouch(eventTarget, type, e, listener) {
	    createPointerEventsForTouchOfTypeAndInvoke(type, e, eventTarget, listener);
	}

	

	/**
	 * Gets the target for a MouseEvent
	 * @param {number} pointerId
	 * @param {MouseEvent} e
	 * @returns {EventTarget | null}
	 */
	function getMouseTarget(pointerId, e) {
	    var captured = POINTER_ID_TO_CAPTURED_TARGET_MAP.get(pointerId);
	    if (captured !== undefined) {
	        return captured;
	    }
	    return e.target;
	}

	// tslint:disable:no-any
	/**
	 * A Map between Event Targets and disposable objects
	 * @type {Map<EventTarget, IDisposable>}
	 */
	var POINTER_UP_FALLBACK_LISTENER_MAP = new Map();
	/**
	 * Dispatches a 'pointerup' event the next time a 'mouseup' event is fired on the window
	 * @param {MouseEvent} e
	 * @returns {IDisposable}
	 */
	function dispatchPointerUpForPointerEventOnNextGlobalUpEvent(e) {
	    var target = e.target, currentTarget = e.currentTarget;
	    var dispose = function () {
	        window.removeEventListener("mouseup", handler);
	    };
	    var handler = function (upEvent) {
	        // Use the coordinate-specific values from the mouseup event and set it on the constructed 'pointerup' event
	        var _a = isElement(currentTarget) ? currentTarget.getBoundingClientRect() : { left: 0, top: 0 }, left = _a.left, top = _a.top;
	        createPointerEventsForMouseOfTypeAndDispatch("pointerup", e, currentTarget, {
	            target: __assign({ value: target }, SHARED_DESCRIPTOR_OPTIONS),
	            currentTarget: __assign({ value: currentTarget }, SHARED_DESCRIPTOR_OPTIONS),
	            clientX: __assign({ value: upEvent.clientX }, SHARED_DESCRIPTOR_OPTIONS),
	            clientY: __assign({ value: upEvent.clientY }, SHARED_DESCRIPTOR_OPTIONS),
	            screenX: __assign({ value: upEvent.screenX }, SHARED_DESCRIPTOR_OPTIONS),
	            screenY: __assign({ value: upEvent.screenY }, SHARED_DESCRIPTOR_OPTIONS),
	            layerX: __assign({ value: upEvent.layerX }, SHARED_DESCRIPTOR_OPTIONS),
	            layerY: __assign({ value: upEvent.layerY }, SHARED_DESCRIPTOR_OPTIONS),
	            movementX: __assign({ value: upEvent.movementX }, SHARED_DESCRIPTOR_OPTIONS),
	            movementY: __assign({ value: upEvent.movementY }, SHARED_DESCRIPTOR_OPTIONS),
	            offsetX: __assign({ value: upEvent.clientX - left }, SHARED_DESCRIPTOR_OPTIONS),
	            offsetY: __assign({ value: upEvent.clientY - top }, SHARED_DESCRIPTOR_OPTIONS),
	            pageX: __assign({ value: upEvent.pageX }, SHARED_DESCRIPTOR_OPTIONS),
	            pageY: __assign({ value: upEvent.pageY }, SHARED_DESCRIPTOR_OPTIONS),
	            x: __assign({ value: upEvent.x }, SHARED_DESCRIPTOR_OPTIONS),
	            y: __assign({ value: upEvent.y }, SHARED_DESCRIPTOR_OPTIONS)
	        });
	        dispose();
	    };
	    window.addEventListener("mouseup", handler);
	    return { dispose: dispose };
	}
	/**
	 * Handles whatever logic needs to follow any given kind of MouseEvent
	 * @param {PointerEventType} pointerEventType
	 * @param {MouseEvent} e
	 */
	function handlePostPointerEventForMouse(pointerEventType, e) {
	    switch (pointerEventType) {
	        case "pointercancel":
	        case "pointerup":
	            // Clean up after the global "pointerup" listener, if it exists
	            if (e.currentTarget != null && POINTER_UP_FALLBACK_LISTENER_MAP.has(e.currentTarget)) {
	                var handler = POINTER_UP_FALLBACK_LISTENER_MAP.get(e.currentTarget);
	                // Clear the global listener for "mouseup" events
	                handler.dispose();
	                POINTER_UP_FALLBACK_LISTENER_MAP["delete"](e.currentTarget);
	            }
	            // Immediately after pointerup or pointercancel events, a user agent MUST clear any pointer capture target overrides
	            // https://www.w3.org/TR/pointerevents/#implicit-release-of-pointer-capture
	            var match = POINTER_ID_TO_CAPTURED_TARGET_MAP.get(currentMousePointerId);
	            if (match != null && isElement(match)) {
	                match.releasePointerCapture(currentMousePointerId);
	            }
	            break;
	        case "pointerdown":
	            if (e.currentTarget != null && !POINTER_UP_FALLBACK_LISTENER_MAP.has(e.currentTarget)) {
	                POINTER_UP_FALLBACK_LISTENER_MAP.set(e.currentTarget, dispatchPointerUpForPointerEventOnNextGlobalUpEvent(e));
	            }
	    }
	}
	/**
	 * Handles all those dynamic properties that are specific for pointerdown or pointerup events on Mouse devices
	 * @param {number} pointerId
	 * @param {string} type
	 * @param {MouseEvent} e
	 * @returns {{[Key in DynamicPointerEventProperty]: PropertyDescriptor}}
	 */
	function handleDynamicPropertiesForContactMouse(pointerId, type, e) {
	    return {
	        target: __assign({ value: getMouseTarget(pointerId, e) }, SHARED_DESCRIPTOR_OPTIONS),
	        button: __assign({ 
	            // If the pointer is simply over the element, no pointer contact has changed since last event.
	            // https://www.w3.org/TR/pointerevents2/#the-button-property
	            value: type === "pointerover" || type === "gotpointercapture" ? -1 : type === "lostpointercapture" ? 0 : e.button }, SHARED_DESCRIPTOR_OPTIONS),
	        buttons: __assign({ value: type === "lostpointercapture" ? 0 : type === "gotpointercapture" ? 1 : e.buttons }, SHARED_DESCRIPTOR_OPTIONS),
	        clientX: __assign({ value: e.clientX }, SHARED_DESCRIPTOR_OPTIONS),
	        clientY: __assign({ value: e.clientY }, SHARED_DESCRIPTOR_OPTIONS),
	        screenX: __assign({ value: e.screenX }, SHARED_DESCRIPTOR_OPTIONS),
	        screenY: __assign({ value: e.screenY }, SHARED_DESCRIPTOR_OPTIONS),
	        layerX: __assign({ value: e.layerX }, SHARED_DESCRIPTOR_OPTIONS),
	        layerY: __assign({ value: e.layerY }, SHARED_DESCRIPTOR_OPTIONS),
	        movementX: __assign({ value: e.movementX }, SHARED_DESCRIPTOR_OPTIONS),
	        movementY: __assign({ value: e.movementY }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetX: __assign({ value: e.offsetX }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetY: __assign({ value: e.offsetY }, SHARED_DESCRIPTOR_OPTIONS),
	        pageX: __assign({ value: e.pageX }, SHARED_DESCRIPTOR_OPTIONS),
	        pageY: __assign({ value: e.pageY }, SHARED_DESCRIPTOR_OPTIONS),
	        x: __assign({ value: e.x }, SHARED_DESCRIPTOR_OPTIONS),
	        y: __assign({ value: e.y }, SHARED_DESCRIPTOR_OPTIONS),
	        // For everything other than pointerover/pointerleave/pointerout/pointerenter, the related target should be null
	        // https://www.w3.org/TR/pointerevents2/
	        relatedTarget: __assign({ value: null }, SHARED_DESCRIPTOR_OPTIONS),
	        // The width and height of active mouse and pen pointers are always equal to 1
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        width: __assign({ value: 1 }, SHARED_DESCRIPTOR_OPTIONS),
	        height: __assign({ value: 1 }, SHARED_DESCRIPTOR_OPTIONS),
	        // if the device doesn't support pressure (mice and pens doesn't), the pressure is always 0.5 except for "up" events (which is zero)
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        pressure: __assign({ value: getPressure(type, e) }, SHARED_DESCRIPTOR_OPTIONS),
	        // if the device doesn't support tangential pressure (mice and pens doesn't), the value is always 0
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        tangentialPressure: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        // Mouse pointers doesn't support tilt. Default to values of zero
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        tiltX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        tiltY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        // Mouse pointers doesn't support twist. Default to values of zero
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        twist: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS)
	    };
	}
	/**
	 * Handles all those dynamic properties that are specific for pointerout or pointerleave events on Mouse devices
	 * @param {number} pointerId
	 * @param {MouseEvent} e
	 * @returns {{[Key in DynamicPointerEventProperty]: PropertyDescriptor}}
	 */
	function handleDynamicPropertiesForNoContactMouse(pointerId, e) {
	    return {
	        target: __assign({ value: getMouseTarget(pointerId, e) }, SHARED_DESCRIPTOR_OPTIONS),
	        button: __assign({ value: e.button }, SHARED_DESCRIPTOR_OPTIONS),
	        buttons: __assign({ value: e.buttons }, SHARED_DESCRIPTOR_OPTIONS),
	        clientX: __assign({ value: e.clientX }, SHARED_DESCRIPTOR_OPTIONS),
	        clientY: __assign({ value: e.clientY }, SHARED_DESCRIPTOR_OPTIONS),
	        screenX: __assign({ value: e.screenX }, SHARED_DESCRIPTOR_OPTIONS),
	        screenY: __assign({ value: e.screenY }, SHARED_DESCRIPTOR_OPTIONS),
	        layerX: __assign({ value: e.layerX }, SHARED_DESCRIPTOR_OPTIONS),
	        layerY: __assign({ value: e.layerY }, SHARED_DESCRIPTOR_OPTIONS),
	        movementX: __assign({ value: e.movementX }, SHARED_DESCRIPTOR_OPTIONS),
	        movementY: __assign({ value: e.movementY }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetX: __assign({ value: e.offsetX }, SHARED_DESCRIPTOR_OPTIONS),
	        offsetY: __assign({ value: e.offsetY }, SHARED_DESCRIPTOR_OPTIONS),
	        pageX: __assign({ value: e.pageX }, SHARED_DESCRIPTOR_OPTIONS),
	        pageY: __assign({ value: e.pageY }, SHARED_DESCRIPTOR_OPTIONS),
	        x: __assign({ value: e.x }, SHARED_DESCRIPTOR_OPTIONS),
	        y: __assign({ value: e.y }, SHARED_DESCRIPTOR_OPTIONS),
	        relatedTarget: __assign({ value: e.relatedTarget }, SHARED_DESCRIPTOR_OPTIONS),
	        // The width and height of active mouse and pen pointers are always equal to 1
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        width: __assign({ value: 1 }, SHARED_DESCRIPTOR_OPTIONS),
	        height: __assign({ value: 1 }, SHARED_DESCRIPTOR_OPTIONS),
	        // if the device doesn't support pressure (mice and pens doesn't), the pressure is always 0.5 except for "up" events (which is zero)
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        pressure: __assign({ value: getPressure("pointerout", e) }, SHARED_DESCRIPTOR_OPTIONS),
	        // if the device doesn't support tangential pressure (mice and pens doesn't), the value is always 0
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        tangentialPressure: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        // Mouse pointers doesn't support tilt. Default to values of zero
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        tiltX: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        tiltY: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS),
	        // Mouse pointers doesn't support twist. Default to values of zero
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        twist: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS)
	    };
	}
	/**
	 * Handles all those dynamic properties that are specific for a specific PointerEvent type on Mouse devices
	 * @param {number} pointerId
	 * @param {PointerEventType} type
	 * @param {MouseEvent} e
	 * @returns {{[Key in DynamicPointerEventProperty]: PropertyDescriptor}}
	 */
	function handleDynamicPropertiesForPointerEventOnMouse(pointerId, type, e) {
	    switch (type) {
	        case "pointerdown":
	        case "pointermove":
	        case "pointerup":
	        case "pointerover":
	        case "pointerenter":
	        case "gotpointercapture":
	        case "lostpointercapture":
	            return handleDynamicPropertiesForContactMouse(pointerId, type, e);
	        case "pointerout":
	        case "pointerleave":
	        case "pointercancel":
	            return handleDynamicPropertiesForNoContactMouse(pointerId, e);
	        default:
	            throw new TypeError("Error: Could not handle dynamic properties for a PointerEvent of type: '" + type + "'");
	    }
	}
	/**
	 * Creates a PointerEvent based on a MouseEvent of the given type
	 * @param {PointerEventType} type
	 * @param {MouseEvent} e
	 * @returns {PointerEvent[]}
	 */
	function createPointerEventsForMouseOfType(type, e) {
	    var pointerId = currentMousePointerId;
	    var initOptions = __assign({}, e, { 
	        // Mice are always active pointers, so their pointer ids won't increment
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        pointerId: pointerId, pointerType: "mouse", 
	        // Mouse pointers are always active and always considered primary, even if multiple mouse devices are connected
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        isPrimary: true, bubbles: canBubble(type, e), cancelable: isCancelable(type, e) });
	    // Prevent the event if the pointer id is currently being caught by an EventTarget
	    var shouldPreventBecausePointerCapture = (type === "pointerout" || type === "pointerleave") && POINTER_ID_TO_CAPTURED_TARGET_MAP.has(pointerId);
	    if (shouldPreventBecausePointerCapture) {
	        if (e.cancelable && !e.defaultPrevented) {
	            e.preventDefault();
	        }
	        return [];
	    }
	    // Define all properties of MouseEvents that should be set on the event object
	    // noinspection JSDeprecatedSymbols
	    var overwrittenMouseEventProperties = __assign({ scoped: __assign({ value: e.scoped }, SHARED_DESCRIPTOR_OPTIONS), 
	        // The 'fromElement' property should be set to 'null' for interoperability reasons according to the spec
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        fromElement: __assign({ value: null }, SHARED_DESCRIPTOR_OPTIONS), 
	        // The 'toElement' property should be set to 'null' for interoperability reasons according to the spec
	        // https://www.w3.org/TR/pointerevents/#pointerevent-interface
	        toElement: __assign({ value: null }, SHARED_DESCRIPTOR_OPTIONS), 
	        // The 'detail' property should always have a value of 0
	        // https://www.w3.org/TR/pointerevents/#attributes-and-default-actions
	        detail: __assign({ value: 0 }, SHARED_DESCRIPTOR_OPTIONS), 
	        // The 'composed' property should always have a value of true
	        // https://www.w3.org/TR/pointerevents/#attributes-and-default-actions
	        composed: __assign({ value: true }, SHARED_DESCRIPTOR_OPTIONS), composedPath: __assign({ value: function () { return getEventPath(e.target); } }, SHARED_DESCRIPTOR_OPTIONS) }, (!("region" in MouseEvent.prototype)
	        ? {}
	        : {
	            region: __assign({ value: e.region }, SHARED_DESCRIPTOR_OPTIONS)
	        }), (!("path" in e)
	        ? {}
	        : {
	            path: __assign({ 
	                // Touch contact are indicated by the button value 0
	                value: e.path }, SHARED_DESCRIPTOR_OPTIONS)
	        }), (!("deepPath" in Event.prototype) || !isElement(e.target)
	        ? {}
	        : {
	            path: __assign({ value: function () { return getEventPath(e.target); } }, SHARED_DESCRIPTOR_OPTIONS)
	        }));
	    // Create a new PointerEvent
	    var clonedEvent = cloneEventAsPointerEvent({
	        e: e,
	        type: type,
	        initOptions: initOptions,
	        overwrittenMouseEventProperties: overwrittenMouseEventProperties,
	        dynamicPropertiesHandler: function () { return handleDynamicPropertiesForPointerEventOnMouse(pointerId, type, e); }
	    });
	    overwriteTargetsForEvent(e, clonedEvent.target, clonedEvent.currentTarget, clonedEvent.relatedTarget);
	    return [clonedEvent];
	}
	/**
	 * Creates a PointerEvent based on a TouchEvent of the given type and dispatches an event on the event target
	 * @param {PointerEventType} type
	 * @param {TouchEvent} e
	 * @param {EventTarget} eventTarget
	 * @param {PropertyDescriptorMap} [extraDescriptors]
	 */
	function createPointerEventsForMouseOfTypeAndDispatch(type, e, eventTarget, extraDescriptors) {
	    var pointerEvents = createPointerEventsForMouseOfType(type, e);
	    pointerEvents.forEach(function (clone) {
	        if (extraDescriptors != null) {
	            Object.defineProperties(clone, extraDescriptors);
	        }
	        updatePointerIdToCancelFiredSet(clone);
	        // Dispatch the event on the target
	        eventTarget.dispatchEvent(clone);
	    });
	    // Handle whatever needs to come after the MouseEvent
	    handlePostPointerEventForMouse(type, e);
	}
	/**
	 * Creates a PointerEvent based on a MouseEvent of the given type and invokes the listener with it
	 * @param {PointerEventType} type
	 * @param {MouseEvent} e
	 * @param {EventTarget} eventTarget
	 * @param {EventListenerOrEventListenerObject} listener
	 */
	function createPointerEventsForMouseOfTypeAndInvoke(type, e, eventTarget, listener) {
	    var pointerEvents = createPointerEventsForMouseOfType(type, e);
	    pointerEvents.forEach(function (clone) {
	        updatePointerIdToCancelFiredSet(clone);
	        // Invoke the listener with the cloned event
	        invokeListener(clone, listener);
	    });
	    // Handle whatever needs to come after the MouseEvent
	    handlePostPointerEventForMouse(type, e);
	}
	/**
	 * Handles a PointerEvent related to a MouseEvent
	 * @param {EventTarget} eventTarget
	 * @param {PointerEventType} type
	 * @param {MouseEvent} e
	 * @param {EventListenerOrEventListenerObject} listener
	 */
	function handlePointerEventForMouse(eventTarget, type, e, listener) {
	    createPointerEventsForMouseOfTypeAndInvoke(type, e, eventTarget, listener);
	}

	var boundHandlerMap = new Map();
	/**
	 * Adds a bound handler
	 * @param {EventListenerOrEventListenerObject} listener
	 * @param {Function} handler
	 */
	function addBoundHandler(listener, handler) {
	    var set = boundHandlerMap.get(listener);
	    if (set == null) {
	        set = new Set();
	        boundHandlerMap.set(listener, set);
	    }
	    set.add(handler);
	}

	/**
	 * Checks if the user agent already supports the PointerEvent constructor
	 * @type {boolean}
	 */
	var SUPPORTS_POINTER_EVENTS = "PointerEvent" in window;

	if (!SUPPORTS_POINTER_EVENTS) {
	    // Keep a reference to the original addEventListener prototype method
	    var originalAddEventListener_1 = EventTarget.prototype.addEventListener;
	    /**
	     * Overwrite it such that we can add special handling for PointerEvents
	     * @param {string} type
	     * @param {EventListenerOrEventListenerObject | null} listener
	     * @param {boolean | AddEventListenerOptions} options
	     */
	    EventTarget.prototype.addEventListener = function (type, listener, options) {
	        var _this = this;
	        if (listener == null) {
	            return originalAddEventListener_1(type, listener, options);
	        }
	        if (isPointerEventType(type)) {
	            var convertedEventType = convertPointerEventType(type);
	            var handler = function (e) { return ("changedTouches" in e ? handlePointerEventForTouch(_this, type, e, listener) : handlePointerEventForMouse(_this, type, e, listener)); };
	            var firedPointerEventsHandler = function (e) {
	                // Only call the listener if the PointerEvent is **NOT** trusted
	                // This is to ensure that no duplicate events are fired in browsers that natively supports PointerEvents, but where this polyfill is force-applied anyway
	                if (!e.isTrusted) {
	                    invokeListener(e, listener);
	                }
	            };
	            if (convertedEventType != null) {
	                originalAddEventListener_1.call(this, convertedEventType, handler, options);
	                // Add the original listener to the bound handler Map mapped to the 'handler' function so that we can
	                // remove the listener at a later point
	                addBoundHandler(listener, handler);
	            }
	            // Also add a listener for the pointer event name since these may be fired on the node as well
	            originalAddEventListener_1.call(this, type, firedPointerEventsHandler, options);
	            // Add the original listener to the bound handler Map mapped to the 'firedPointerEventsHandler' function so that we can
	            // remove the listener at a later point
	            addBoundHandler(listener, firedPointerEventsHandler);
	        }
	        else {
	            originalAddEventListener_1.call(this, type, listener, options);
	        }
	    };
	}

	if (!SUPPORTS_POINTER_EVENTS) {
	    // Keep a reference to the original removeEventListener prototype method
	    var originalRemoveEventListener_1 = EventTarget.prototype.removeEventListener;
	    /**
	     * Overwrite the removeEventListener prototype method such that we can provide special handling
	     * for PointerEvents
	     * @param {string} type
	     * @param {EventListenerOrEventListenerObject | null} listener
	     * @param {EventListenerOptions | boolean} options
	     */
	    EventTarget.prototype.removeEventListener = function (type, listener, options) {
	        var _this = this;
	        var convertedEventType = isPointerEventType(type) ? convertPointerEventType(type) : undefined;
	        if (listener == null) {
	            originalRemoveEventListener_1.call(this, type, null, options);
	            if (convertedEventType != null) {
	                originalRemoveEventListener_1.call(this, convertedEventType, null, options);
	            }
	            return;
	        }
	        var boundHandlers = boundHandlerMap.get(listener);
	        if (boundHandlers != null) {
	            boundHandlers.forEach(function (handler) {
	                originalRemoveEventListener_1.call(_this, type, handler, options);
	                if (convertedEventType != null) {
	                    originalRemoveEventListener_1.call(_this, convertedEventType, handler, options);
	                }
	            });
	            boundHandlerMap["delete"](listener);
	        }
	        else {
	            originalRemoveEventListener_1.call(this, type, listener, options);
	            if (convertedEventType != null) {
	                originalRemoveEventListener_1.call(this, convertedEventType, listener, options);
	            }
	        }
	    };
	}

	// tslint:disable:no-any
	// Only patch the dispatchEvent EventTarget prototype method if the user agent
	// doesn't already support Global Event Handlers for Pointer Events
	if (!SUPPORTS_POINTER_EVENT_HANDLERS) {
	    // Add EventHandlers such that "in" checks return true
	    EventTarget.prototype.ongotpointercapture = null;
	    EventTarget.prototype.onlostpointercapture = null;
	    EventTarget.prototype.onpointerdown = null;
	    EventTarget.prototype.onpointermove = null;
	    EventTarget.prototype.onpointerup = null;
	    EventTarget.prototype.onpointercancel = null;
	    EventTarget.prototype.onpointerover = null;
	    EventTarget.prototype.onpointerout = null;
	    EventTarget.prototype.onpointerenter = null;
	    EventTarget.prototype.onpointerleave = null;
	}

	// tslint:disable:no-any
	var hasPointerLock = false;
	var HAS_POINTER_LOCK = function () { return hasPointerLock; };
	/**
	 * Invoked when a "pointerlockchange" event is fired. Is used to
	 * update the value of 'hasPointerLock'
	 */
	var handler = function () {
	    hasPointerLock = document.pointerLockElement != null && document.mozPointerLockElement != null;
	};
	// Listen for PointerLock events
	document.addEventListener("pointerlockchange", handler);
	document.addEventListener("mozpointerlockchange", handler);

	/**
	 * Throws a DOMException if possible, otherwise it falls back to throwing a regular error
	 * @param {string} message
	 * @param {string} name
	 */
	function throwDOMException(message, name) {
	    var exception;
	    try {
	        exception = new DOMException(message, name);
	    }
	    catch (ex) {
	        exception = new Error(name + ": " + message);
	        if (name != null) {
	            exception.name = name;
	        }
	    }
	    throw exception;
	}

	if (!SUPPORTS_POINTER_EVENTS) {
	    /**
	     * Sets pointer capture for the pointer identified by the argument pointerId to the element on which
	     * this method is invoked
	     * https://www.w3.org/TR/pointerevents/#extensions-to-the-element-interface
	     * @param {number} pointerId
	     */
	    Element.prototype.setPointerCapture = function (pointerId) {
	        // If no active pointer exists with the given pointer id, throw a DOMException
	        // with name 'InvalidPointerId'
	        // https://www.w3.org/TR/pointerevents/#setting-pointer-capture
	        if (!SEEN_POINTER_IDS.has(pointerId)) {
	            throwDOMException("Could not set pointer capture on an element: No active pointers exist with the given pointer id: '" + pointerId + "'", "InvalidPointerId");
	        }
	        // If the element is not connected, throw an InvalidStateError
	        // https://www.w3.org/TR/pointerevents/#setting-pointer-capture
	        if (!this.isConnected) {
	            throwDOMException("Could not set pointer capture on an element: It wasn't connected!", "InvalidStateError");
	        }
	        if (HAS_POINTER_LOCK()) {
	            throwDOMException("Could not set pointer capture on an element: The document had a PointerLock!", "InvalidStateError");
	        }
	        // Otherwise, mark the pointer id as captured by this element
	        POINTER_ID_TO_CAPTURED_TARGET_MAP.set(pointerId, this);
	        isTouchDevice
	            ? createPointerEventsForTouchOfTypeAndDispatch("gotpointercapture", new TouchEvent(""), this)
	            : createPointerEventsForMouseOfTypeAndDispatch("gotpointercapture", new MouseEvent(""), this);
	    };
	}

	if (!SUPPORTS_POINTER_EVENTS) {
	    /**
	     * Releases pointer capture for the pointer identified by the argument pointerId to the element on which
	     * this method is invoked
	     * https://www.w3.org/TR/pointerevents/#extensions-to-the-element-interface
	     * @param {number} pointerId
	     */
	    Element.prototype.releasePointerCapture = function (pointerId) {
	        // If no active pointer exists with the given pointer id, throw a DOMException
	        // with name 'InvalidPointerId'
	        // https://www.w3.org/TR/pointerevents/#setting-pointer-capture
	        if (!SEEN_POINTER_IDS.has(pointerId)) {
	            throwDOMException("Could not release pointer capture on an element: No active pointers exist with the given pointer id: '" + pointerId + "'", "InvalidPointerId");
	        }
	        // Otherwise, mark the pointer id as captured by this element
	        POINTER_ID_TO_CAPTURED_TARGET_MAP["delete"](pointerId);
	        isTouchDevice
	            ? createPointerEventsForTouchOfTypeAndDispatch("lostpointercapture", new TouchEvent(""), this)
	            : createPointerEventsForMouseOfTypeAndDispatch("lostpointercapture", new MouseEvent(""), this);
	    };
	}

	// tslint:disable:no-any
	if (!SUPPORTS_POINTER_EVENTS) {
	    /**
	     * Checks if the element has pointer capture for the pointer identified by the argument pointerId
	     * https://www.w3.org/TR/pointerevents/#extensions-to-the-element-interface
	     * @param {number} pointerId
	     */
	    Element.prototype.hasPointerCapture = function (pointerId) {
	        return POINTER_ID_TO_CAPTURED_TARGET_MAP.get(pointerId) != null;
	    };
	}

	// tslint:disable:no-any
	// Only patch the window object if it doesn't already have a PointerEvent constructor
	if (!SUPPORTS_POINTER_EVENTS) {
	    // Set the PointerEvent reference on the window object
	    window.PointerEvent = PointerEvent;
	}

}());
//# sourceMappingURL=index.js.map
