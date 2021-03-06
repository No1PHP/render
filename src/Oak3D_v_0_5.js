var OAK = {
    ERROR: 0,
    TYPE_VEC2: 1,
    TYPE_VEC3: 2,
    TYPE_VEC4: 4,
    TYPE_MAT4: 8,
    TYPE_MAT43: 16,
    AXIS_X: 1,
    AXIS_Y: 2,
    AXIS_Z: 3,
    COLLIDE_FALSE: 0,
    COLLIDE_TRUE: 1,
    COLLIDE_CONTAIN: 2,
    SPACE_LOCAL: 1,
    SPACE_WORLD: 2,
    SPACE_VIEW: 3,
    FLOAT_PRECISION: 0.000001,
    PROJMODE_PERSPECTIVE: 1,
    PROJMODE_ORTHO: 2,
    FTPLANE_NEAR: 0,
    FTPLANE_FAR: 1,
    FTPLANE_LEFT: 2,
    FTPLANE_RIGHT: 3,
    FTPLANE_TOP: 4,
    FTPLANE_BOTTOM: 5,
    SKBLEND_ACCUMULATE: 1,
    SKBLEND_LERP: 2,
    BLENDCHANNEL_COLOR: 1,
    BLENDCHANNEL_ALPHA: 2,
    BLENDCHANNEL_ALL: 3,
    MCUSAGE_ALBEDO1: 0,
    MCUSAGE_ALBEDO2: 1,
    MCUSAGE_ALBEDO3: 2,
    MCUSAGE_ALBEDO4: 3,
    MCUSAGE_NORMAL: 4,
    MCUSAGE_OPACITY: 5,
    MCUSAGE_SPECULAR_LEVEL: 6,
    ETYPE_UNKNOWN: 0,
    ETYPE_STATIC: 1,
    ETYPE_DYNAMIC: 2,
    ETYPE_DCT_LIGHT: 4,
    ETYPE_POINT_LIGHT: 8,
    ETYPE_SPOT_LIGHT: 16,
    ETYPE_TERRAIN: 32,
    ETYPE_CUSTOM_MESH: 64,
    ETYPE_VIDEO: 128,
    ETYPE_PARTICLE: 256,
    ETYPE_CONFIG: 512,
    ETYPE_LIGHT: (4 | 8 | 16),
    ETYPE_VISIBLE: (1 | 2 | 32 | 64 | 128 | 256),
    ETYPE_INTREE: (1 | 2 | 32 | 64 | 128 | 256),
    ETYPE_UPDATE: (2 | 256),
    ETYPE_ALL: 4294967295,
    ESTATE_UNAVAILABLE: 1,
    ESTATE_BASIC_AVAILABLE: 2,
    ESTATE_COMPLETE_AVAILABLE: 4,
    RESDOCTYPE_XML: 1,
    RESDOCTYPE_JSON: 2,
    RESDOCTYPE_BINARY: 3,
    RESTYPE_UNKNOWN: 0,
    RESTYPE_MODEL: 1,
    RESTYPE_TEXTURE: 2,
    RESTYPE_SKANIMATION: 3,
    RESSTATE_NONE: 1,
    RESSTATE_UNLOAD: 2,
    RESSTATE_LOADING: 3,
    RESSTATE_LOADED: 4,
    RESSTATE_READY: 5,
    RESPRIORITY_HIGH: 1,
    RESPRIORITY_NORMAL: 2,
    RESPRIORITY_LOW: 3,
    ENV_FOG1: 1,
    RSTAGE_DEPTH: 0,
    RSTAGE_SHADOW: 1,
    RSTAGE_LIGHTING: 2,
    WORLDMAP_NOT_READ: 1,
    WORLDMAP_PARSING: 2,
    WORLDMAP_PARSED: 3,
    TEXTURE_IMAGE: 1,
    TEXTURE_VIDEO: 2,
    PARTIME_BEGIN: 1,
    PARTIME_END: 2,
    PARTIME_ALL: 4294967295,
    DEPTH_BUFFER_BIT: 256,
    STENCIL_BUFFER_BIT: 1024,
    COLOR_BUFFER_BIT: 16384,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    ZERO: 0,
    ONE: 1,
    SRC_COLOR: 768,
    ONE_MINUS_SRC_COLOR: 769,
    SRC_ALPHA: 770,
    ONE_MINUS_SRC_ALPHA: 771,
    DST_ALPHA: 772,
    ONE_MINUS_DST_ALPHA: 773,
    DST_COLOR: 774,
    ONE_MINUS_DST_COLOR: 775,
    SRC_ALPHA_SATURATE: 776,
    FUNC_ADD: 32774,
    BLEND_EQUATION: 32777,
    BLEND_EQUATION_RGB: 32777,
    BLEND_EQUATION_ALPHA: 34877,
    FUNC_SUBTRACT: 32778,
    FUNC_REVERSE_SUBTRACT: 32779,
    BLEND_DST_RGB: 32968,
    BLEND_SRC_RGB: 32969,
    BLEND_DST_ALPHA: 32970,
    BLEND_SRC_ALPHA: 32971,
    CONSTANT_COLOR: 32769,
    ONE_MINUS_CONSTANT_COLOR: 32770,
    CONSTANT_ALPHA: 32771,
    ONE_MINUS_CONSTANT_ALPHA: 32772,
    BLEND_COLOR: 32773,
    ARRAY_BUFFER: 34962,
    ELEMENT_ARRAY_BUFFER: 34963,
    ARRAY_BUFFER_BINDING: 34964,
    ELEMENT_ARRAY_BUFFER_BINDING: 34965,
    STREAM_DRAW: 35040,
    STATIC_DRAW: 35044,
    DYNAMIC_DRAW: 35048,
    BUFFER_SIZE: 34660,
    BUFFER_USAGE: 34661,
    CURRENT_VERTEX_ATTRIB: 34342,
    FRONT: 1028,
    BACK: 1029,
    FRONT_AND_BACK: 1032,
    CULL_FACE: 2884,
    BLEND: 3042,
    DITHER: 3024,
    STENCIL_TEST: 2960,
    DEPTH_TEST: 2929,
    SCISSOR_TEST: 3089,
    POLYGON_OFFSET_FILL: 32823,
    SAMPLE_ALPHA_TO_COVERAGE: 32926,
    SAMPLE_COVERAGE: 32928,
    NO_ERROR: 0,
    INVALID_ENUM: 1280,
    INVALID_VALUE: 1281,
    INVALID_OPERATION: 1282,
    OUT_OF_MEMORY: 1285,
    CW: 2304,
    CCW: 2305,
    LINE_WIDTH: 2849,
    ALIASED_POINT_SIZE_RANGE: 33901,
    ALIASED_LINE_WIDTH_RANGE: 33902,
    CULL_FACE_MODE: 2885,
    FRONT_FACE: 2886,
    DEPTH_RANGE: 2928,
    DEPTH_WRITEMASK: 2930,
    DEPTH_CLEAR_VALUE: 2931,
    DEPTH_FUNC: 2932,
    STENCIL_CLEAR_VALUE: 2961,
    STENCIL_FUNC: 2962,
    STENCIL_FAIL: 2964,
    STENCIL_PASS_DEPTH_FAIL: 2965,
    STENCIL_PASS_DEPTH_PASS: 2966,
    STENCIL_REF: 2967,
    STENCIL_VALUE_MASK: 2963,
    STENCIL_WRITEMASK: 2968,
    STENCIL_BACK_FUNC: 34816,
    STENCIL_BACK_FAIL: 34817,
    STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
    STENCIL_BACK_PASS_DEPTH_PASS: 34819,
    STENCIL_BACK_REF: 36003,
    STENCIL_BACK_VALUE_MASK: 36004,
    STENCIL_BACK_WRITEMASK: 36005,
    VIEWPORT: 2978,
    SCISSOR_BOX: 3088,
    COLOR_CLEAR_VALUE: 3106,
    COLOR_WRITEMASK: 3107,
    UNPACK_ALIGNMENT: 3317,
    PACK_ALIGNMENT: 3333,
    MAX_TEXTURE_SIZE: 3379,
    MAX_VIEWPORT_DIMS: 3386,
    SUBPIXEL_BITS: 3408,
    RED_BITS: 3410,
    GREEN_BITS: 3411,
    BLUE_BITS: 3412,
    ALPHA_BITS: 3413,
    DEPTH_BITS: 3414,
    STENCIL_BITS: 3415,
    POLYGON_OFFSET_UNITS: 10752,
    POLYGON_OFFSET_FACTOR: 32824,
    TEXTURE_BINDING_2D: 32873,
    SAMPLE_BUFFERS: 32936,
    SAMPLES: 32937,
    SAMPLE_COVERAGE_VALUE: 32938,
    SAMPLE_COVERAGE_INVERT: 32939,
    NUM_COMPRESSED_TEXTURE_FORMATS: 34466,
    COMPRESSED_TEXTURE_FORMATS: 34467,
    DONT_CARE: 4352,
    FASTEST: 4353,
    NICEST: 4354,
    GENERATE_MIPMAP_HINT: 33170,
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    INT: 5124,
    UNSIGNED_INT: 5125,
    FLOAT: 5126,
    DEPTH_COMPONENT: 6402,
    ALPHA: 6406,
    RGB: 6407,
    RGBA: 6408,
    LUMINANCE: 6409,
    LUMINANCE_ALPHA: 6410,
    UNSIGNED_SHORT_4_4_4_4: 32819,
    UNSIGNED_SHORT_5_5_5_1: 32820,
    UNSIGNED_SHORT_5_6_5: 33635,
    FRAGMENT_SHADER: 35632,
    VERTEX_SHADER: 35633,
    MAX_VERTEX_ATTRIBS: 34921,
    MAX_VERTEX_UNIFORM_VECTORS: 36347,
    MAX_VARYING_VECTORS: 36348,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
    MAX_TEXTURE_IMAGE_UNITS: 34930,
    MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
    SHADER_TYPE: 35663,
    DELETE_STATUS: 35712,
    LINK_STATUS: 35714,
    VALIDATE_STATUS: 35715,
    ATTACHED_SHADERS: 35717,
    ACTIVE_UNIFORMS: 35718,
    ACTIVE_UNIFORM_MAX_LENGTH: 35719,
    ACTIVE_ATTRIBUTES: 35721,
    ACTIVE_ATTRIBUTE_MAX_LENGTH: 35722,
    SHADING_LANGUAGE_VERSION: 35724,
    CURRENT_PROGRAM: 35725,
    NEVER: 512,
    LESS: 513,
    EQUAL: 514,
    LEQUAL: 515,
    GREATER: 516,
    NOTEQUAL: 517,
    GEQUAL: 518,
    ALWAYS: 519,
    KEEP: 7680,
    REPLACE: 7681,
    INCR: 7682,
    DECR: 7683,
    INVERT: 5386,
    INCR_WRAP: 34055,
    DECR_WRAP: 34056,
    VENDOR: 7936,
    RENDERER: 7937,
    VERSION: 7938,
    NEAREST: 9728,
    LINEAR: 9729,
    NEAREST_MIPMAP_NEAREST: 9984,
    LINEAR_MIPMAP_NEAREST: 9985,
    NEAREST_MIPMAP_LINEAR: 9986,
    LINEAR_MIPMAP_LINEAR: 9987,
    TEXTURE_MAG_FILTER: 10240,
    TEXTURE_MIN_FILTER: 10241,
    TEXTURE_WRAP_S: 10242,
    TEXTURE_WRAP_T: 10243,
    TEXTURE_2D: 3553,
    TEXTURE: 5890,
    TEXTURE_CUBE_MAP: 34067,
    TEXTURE_BINDING_CUBE_MAP: 34068,
    TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
    TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
    TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
    TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
    TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
    TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
    MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
    TEXTURE0: 33984,
    TEXTURE1: 33985,
    TEXTURE2: 33986,
    TEXTURE3: 33987,
    TEXTURE4: 33988,
    TEXTURE5: 33989,
    TEXTURE6: 33990,
    TEXTURE7: 33991,
    TEXTURE8: 33992,
    TEXTURE9: 33993,
    TEXTURE10: 33994,
    TEXTURE11: 33995,
    TEXTURE12: 33996,
    TEXTURE13: 33997,
    TEXTURE14: 33998,
    TEXTURE15: 33999,
    TEXTURE16: 34000,
    TEXTURE17: 34001,
    TEXTURE18: 34002,
    TEXTURE19: 34003,
    TEXTURE20: 34004,
    TEXTURE21: 34005,
    TEXTURE22: 34006,
    TEXTURE23: 34007,
    TEXTURE24: 34008,
    TEXTURE25: 34009,
    TEXTURE26: 34010,
    TEXTURE27: 34011,
    TEXTURE28: 34012,
    TEXTURE29: 34013,
    TEXTURE30: 34014,
    TEXTURE31: 34015,
    ACTIVE_TEXTURE: 34016,
    REPEAT: 10497,
    CLAMP_TO_EDGE: 33071,
    MIRRORED_REPEAT: 33648,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    INT_VEC2: 35667,
    INT_VEC3: 35668,
    INT_VEC4: 35669,
    BOOL: 35670,
    BOOL_VEC2: 35671,
    BOOL_VEC3: 35672,
    BOOL_VEC4: 35673,
    FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    SAMPLER_2D: 35678,
    SAMPLER_CUBE: 35680,
    VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
    VERTEX_ATTRIB_ARRAY_SIZE: 34339,
    VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
    VERTEX_ATTRIB_ARRAY_TYPE: 34341,
    VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
    VERTEX_ATTRIB_ARRAY_POINTER: 34373,
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
    COMPILE_STATUS: 35713,
    INFO_LOG_LENGTH: 35716,
    SHADER_SOURCE_LENGTH: 35720,
    LOW_FLOAT: 36336,
    MEDIUM_FLOAT: 36337,
    HIGH_FLOAT: 36338,
    LOW_INT: 36339,
    MEDIUM_INT: 36340,
    HIGH_INT: 36341,
    FRAMEBUFFER: 36160,
    RENDERBUFFER: 36161,
    RGBA4: 32854,
    RGB5_A1: 32855,
    RGB565: 36194,
    DEPTH_COMPONENT16: 33189,
    STENCIL_INDEX: 6401,
    STENCIL_INDEX8: 36168,
    DEPTH_STENCIL: 34041,
    RENDERBUFFER_WIDTH: 36162,
    RENDERBUFFER_HEIGHT: 36163,
    RENDERBUFFER_INTERNAL_FORMAT: 36164,
    RENDERBUFFER_RED_SIZE: 36176,
    RENDERBUFFER_GREEN_SIZE: 36177,
    RENDERBUFFER_BLUE_SIZE: 36178,
    RENDERBUFFER_ALPHA_SIZE: 36179,
    RENDERBUFFER_DEPTH_SIZE: 36180,
    RENDERBUFFER_STENCIL_SIZE: 36181,
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
    COLOR_ATTACHMENT0: 36064,
    DEPTH_ATTACHMENT: 36096,
    STENCIL_ATTACHMENT: 36128,
    DEPTH_STENCIL_ATTACHMENT: 33306,
    NONE: 0,
    FRAMEBUFFER_COMPLETE: 36053,
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
    FRAMEBUFFER_UNSUPPORTED: 36061,
    FRAMEBUFFER_BINDING: 36006,
    RENDERBUFFER_BINDING: 36007,
    MAX_RENDERBUFFER_SIZE: 34024,
    INVALID_FRAMEBUFFER_OPERATION: 1286,
    UNPACK_FLIP_Y_WEBGL: 37440,
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
    CONTEXT_LOST_WEBGL: 37442,
    UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
    BROWSER_DEFAULT_WEBGL: 37444
};



function okGenCanvas(d, e, c) {
    var a;
        a = document.createElement("canvas");
        a.width = d;
        a.height = e;
        a.style = "width: 100%; height: 100%;";
        if (c) {
            c.appendChild(a)
        } else {
            document.body.appendChild(a)
        }

    return a
}

export const okRequestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) {
    setTimeout(a, 1000 / 60)
};

function okIsUndefined(a) {
    return typeof a == "undefined"
}

function okIsString(a) {
    return typeof a == "string"
}

function okIsElement(a) {
    return a && a.nodeType == 1
}

function okIsFunction(a) {
    return typeof a == "function"
}

function okIsObject(a) {
    return typeof a == "object"
}

function okIsArray(a) {
    return Object.prototype.toString.call(a) === "[object Array]"
}

function okIsNumber(a) {
    return typeof a == "number"
}

function okIsBoolean(a) {
    return typeof a == "boolean"
}

function okFileFilter(a) {
    var c = a.lastIndexOf(".");
    return a.substring(c + 1, a.length)
}

function okAlertVec2(a) {
    alert(a.x + "," + a.y)
}

function okAlertVec3(a) {
    alert(a.x + "," + a.y + "," + a.z)
}

function okAlertVec4(a) {
    alert(a.x + "," + a.y + "," + a.z + "," + a.w)
}

function okAlertMat4(a) {
    alert(a.m00 + "," + a.m01 + "," + a.m02 + "," + a.m03 + "\n" + a.m10 + "," + a.m11 + "," + a.m12 + "," + a.m13 + "\n" + a.m20 + "," + a.m21 + "," + a.m22 + "," + a.m23 + "\n" + a.m30 + "," + a.m31 + "," + a.m32 + "," + a.m33)
}

function okAlertMat43(a) {
    alert(a.m00 + "," + a.m01 + "," + a.m02 + "," + a.m03 + "\n" + a.m10 + "," + a.m11 + "," + a.m12 + "," + a.m13 + "\n" + a.m20 + "," + a.m21 + "," + a.m22 + "," + a.m23)
}

function okAlertQuat(a) {
    alert(a.s + "," + a.x + "," + a.y + "," + a.z)
}

function okAlertPlane(a) {
    alert("o:" + a.vOrigin.x + "," + a.vOrigin.y + "," + a.vOrigin.z + ",n:" + a.vNormal.x + "," + a.vNormal.y + "," + a.vNormal.z)
}

function okAlertAABBox(a) {
    alert("min:" + a.vMin.x + "," + a.vMin.y + "," + a.vMin.z + "max:" + a.vMax.x + "," + a.vMax.y + "," + a.vMax.z)
}

function okLog(d, c, a) {
    window.console.log((c ? ("[" + c + "]") : "") + d);
    if (a) {
        alert("[Oak Debug Stop]")
    }
}

function okLogVec2(a, d, c) {
    window.console.log((d ? ("[" + d + "]") : "") + a.x + "," + a.y);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogVec3(a, d, c) {
    window.console.log((d ? ("[" + d + "]") : "") + a.x + "," + a.y + "," + a.z);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogVec4(a, d, c) {
    window.console.log((d ? ("[" + d + "]") : "") + a.x + "," + a.y + "," + a.z + "," + a.w);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogMat4(a, d, c) {
    window.console.log((d ? ("[" + d + "]") : "") + a.m00 + "," + a.m01 + "," + a.m02 + "," + a.m03 + "|" + a.m10 + "," + a.m11 + "," + a.m12 + "," + a.m13 + "|" + a.m20 + "," + a.m21 + "," + a.m22 + "," + a.m23 + "|" + a.m30 + "," + a.m31 + "," + a.m32 + "," + a.m33);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogMat43(a, d, c) {
    window.console.log((d ? ("[" + d + "]") : "") + a.m00 + "," + a.m01 + "," + a.m02 + "," + a.m03 + "|" + a.m10 + "," + a.m11 + "," + a.m12 + "," + a.m13 + "|" + a.m20 + "," + a.m21 + "," + a.m22 + "," + a.m23);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogQuat(d, c, a) {
    window.console.log((c ? ("[" + c + "]") : "") + d.s + "," + d.x + "," + d.y + "," + d.z);
    if (a) {
        alert("[Oak Debug Stop]")
    }
}

function okLogPlane(a, d, c) {
    window.console.log((d ? ("[" + d + "]") : "") + "o:" + a.vOrigin.x + "," + a.vOrigin.y + "," + a.vOrigin.z + ",n:" + a.vNormal.x + "," + a.vNormal.y + "," + a.vNormal.z);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogArray(h, e, d, c) {
    var f = "";
    if (okIsArray(h)) {
        for (var a = 0; a < h.length; ++a) {
            f += h[a];
            if (e) {
                f += ((a % e) != (e - 1)) ? "," : "|"
            } else {
                f += ","
            }
        }
    }
    window.console.log((d ? ("[" + d + "]") : "") + f);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogVec2Array(f, d, c) {
    var e = "";
    if (okIsArray(f)) {
        for (var a = 0; a < f.length; ++a) {
            e += ("< " + f[a].x + "," + f[a].y + ">")
        }
    }
    window.console.log((d ? ("[" + d + "]") : "") + e);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogVec3Array(f, d, c) {
    var e = "";
    if (okIsArray(f)) {
        for (var a = 0; a < f.length; ++a) {
            e += ("< " + f[a].x + "," + f[a].y + "," + f[a].z + ">")
        }
    }
    window.console.log((d ? ("[" + d + "]") : "") + e);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogVec4Array(f, d, c) {
    var e = "";
    if (okIsArray(f)) {
        for (var a = 0; a < f.length; ++a) {
            e += ("< " + f[a].x + "," + f[a].y + "," + f[a].z + "," + f[a].w + ">")
        }
    }
    window.console.log((d ? ("[" + d + "]") : "") + e);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogMat4Array(f, d, c) {
    var e = "";
    if (okIsArray(f)) {
        for (var a = 0; a < f.length; ++a) {
            e += ("< " + f[a].m00 + "," + f[a].m01 + "," + f[a].m02 + "," + f[a].m03 + "|" + f[a].m10 + "," + f[a].m11 + "," + f[a].m12 + "," + f[a].m13 + "|" + f[a].m20 + "," + f[a].m21 + "," + f[a].m22 + "," + f[a].m23 + "|" + f[a].m30 + "," + f[a].m31 + "," + f[a].m32 + "," + f[a].m33 + ">")
        }
    }
    window.console.log((d ? ("[" + d + "]") : "") + e);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogMat43Array(f, d, c) {
    var e = "";
    if (okIsArray(f)) {
        for (var a = 0; a < f.length; ++a) {
            e += ("< " + f[a].m00 + "," + f[a].m01 + "," + f[a].m02 + "," + f[a].m03 + "|" + f[a].m10 + "," + f[a].m11 + "," + f[a].m12 + "," + f[a].m13 + "|" + f[a].m20 + "," + f[a].m21 + "," + f[a].m22 + "," + f[a].m23 + ">")
        }
    }
    window.console.log((d ? ("[" + d + "]") : "") + e);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okLogQuatArray(f, d, c) {
    var e = "";
    if (okIsArray(f)) {
        for (var a = 0; a < f.length; ++a) {
            e += ("< " + f[a].s + f[a].x + "," + f[a].y + "," + f[a].z + ">")
        }
    }
    window.console.log((d ? ("[" + d + "]") : "") + e);
    if (c) {
        alert("[Oak Debug Stop]")
    }
}

function okGenQuadMesh(s, o, e, q, n, c, d) {
    var m = [o, e, 0, o, n, 0, q, n, 0, q, e, 0];
    var a = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
    var h = d ? [0, 1, 0, 0, 1, 0, 1, 1] : [0, 0, 0, 1, 1, 1, 1, 0];
    var f = [0, 1, 2, 0, 2, 3];
    s.createAttribute("Position", m.length, m);
    s.createAttribute("Normal", a.length, a);
    s.createAttribute("Texcoord1", h.length, h);
    s.createIndex("Default", f.length, f, 35044, 4);
    s.setVertexNum(4);
    s.computeBoundingInfo();
    if (c) {
        var l = new Array;
        var p = f.length / 3;
        for (var k = 0; k < p; ++k) {
            l.push(f[k * 3], f[k * 3 + 1]);
            l.push(f[k * 3 + 1], f[k * 3 + 2]);
            l.push(f[k * 3 + 2], f[k * 3])
        }
        s.createIndex("Wireframe", l.length, l, 35044, 1)
    }
    return s
}

function okGenBoxMesh(n, l, o, a) {
    var k = [l.x, l.y, l.z, l.x, l.y, o.z, l.x, o.y, o.z, l.x, o.y, l.z, o.x, l.y, l.z, o.x, o.y, l.z, o.x, o.y, o.z, o.x, l.y, o.z, l.x, o.y, l.z, l.x, o.y, o.z, o.x, o.y, o.z, o.x, o.y, l.z, l.x, l.y, l.z, o.x, l.y, l.z, o.x, l.y, o.z, l.x, l.y, o.z, l.x, o.y, o.z, l.x, l.y, o.z, o.x, l.y, o.z, o.x, o.y, o.z, l.x, o.y, l.z, o.x, o.y, l.z, o.x, l.y, l.z, l.x, l.y, l.z];
    var c = [-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1];
    var d = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    var e = [1 / 4, 2 / 3, 1 / 4, 1 / 3, 0, 1 / 3, 0, 2 / 3, 2 / 4, 2 / 3, 3 / 4, 2 / 3, 3 / 4, 1 / 3, 2 / 4, 1 / 3, 4 / 4, 2 / 3, 4 / 4, 1 / 3, 3 / 4, 1 / 3, 3 / 4, 2 / 3, 1 / 4, 2 / 3, 2 / 4, 2 / 3, 2 / 4, 1 / 3, 1 / 4, 1 / 3, 1 / 4, 0, 1 / 4, 1 / 3, 2 / 4, 1 / 3, 2 / 4, 0, 1 / 4, 3 / 3, 2 / 4, 3 / 3, 2 / 4, 2 / 3, 1 / 4, 2 / 3];
    n.createAttribute("Position", k.length, k);
    n.createAttribute("Normal", c.length, c);
    n.createAttribute("Texcoord1", e.length, e);
    n.createIndex("Default", d.length, d, 35044, 4);
    n.setVertexNum(24);
    n.computeBoundingInfo();
    if (a) {
        var h = new Array;
        var m = d.length / 3;
        for (var f = 0; f < m; ++f) {
            h.push(d[f * 3], d[f * 3 + 1]);
            h.push(d[f * 3 + 1], d[f * 3 + 2]);
            h.push(d[f * 3 + 2], d[f * 3])
        }
        n.createIndex("Wireframe", h.length, h, 35044, 1)
    }
    return n
}

function okGenSphereMesh(c, u, a, B, G) {
    var w = new Array;
    w.push(0, u, 0);
    for (var s = 1; s < B; ++s) {
        var I = Math.sin(Math.PI / B * s) * u;
        var o = Math.cos(Math.PI / B * s) * u;
        for (var E = 0; E < a; ++E) {
            var p = Math.sin(Math.PI * 2 / a * E) * I;
            var n = Math.cos(Math.PI * 2 / a * E) * I;
            w.push(p, o, n)
        }
    }
    w.push(0, -u, 0);
    var q = new Array;
    var f = new Array;
    for (var D = 0; D < w.length / 3; ++D) {
        var e = new okVec3(w[D * 3], w[D * 3 + 1], w[D * 3 + 2]);
        e = e.normalize();
        q.push(e.x, e.y, e.z);
        f.push(Math.asin(e.x) / Math.PI + 0.5, Math.asin(e.y) / Math.PI + 0.5)
    }
    var d = new Array;
    for (var E = 0; E < a; ++E) {
        d.push(0, 1 + (E % a), 1 + ((E + 1) % a))
    }
    for (var s = 1; s < B - 1; ++s) {
        for (var E = 0; E < a; ++E) {
            var t = 1 + (s - 1) * a;
            var H = 1 + s * a;
            var m = t + (E % a), k = t + ((E + 1) % a);
            var C = H + (E % a), A = H + ((E + 1) % a);
            d.push(m, C, A);
            d.push(A, k, m)
        }
    }
    for (var E = 0; E < a; ++E) {
        d.push(w.length / 3 - 1, 1 + (B - 2) * a + ((E + 1) % a), 1 + (B - 2) * a + (E % a))
    }
    c.createAttribute("Position", w.length, w);
    c.createAttribute("Normal", q.length, q);
    c.createAttribute("Texcoord1", f.length, f);
    c.createIndex("Default", d.length, d, 35044, 4);
    c.setVertexNum(w.length / 3);
    c.computeBoundingInfo();
    if (G) {
        var l = new Array;
        var F = d.length / 3;
        for (var D = 0; D < F; ++D) {
            l.push(d[D * 3], d[D * 3 + 1]);
            l.push(d[D * 3 + 1], d[D * 3 + 2]);
            l.push(d[D * 3 + 2], d[D * 3])
        }
        c.createIndex("Wireframe", l.length, l, 35044, 1)
    }
    return c
}

function okGenColumnMesh(a, p, C, v, B) {
    var q = new Array;
    var d = new Array;
    q.push(0, C * 0.5, 0);
    d.push(1 / 8, 1 / 8);
    for (var y = 0; y < v; ++y) {
        var m = Math.sin(Math.PI * 2 / v * y) * p;
        var k = Math.cos(Math.PI * 2 / v * y) * p;
        q.push(m, C * 0.5, k);
        d.push(Math.sin(Math.PI * 2 / v * y) / 8 + 1 / 8, 1 / 8 - Math.cos(Math.PI * 2 / v * y) / 8)
    }
    q.push(0, -C * 0.5, 0);
    d.push(1 / 8, 5 / 8);
    for (var y = 0; y < v; ++y) {
        var m = Math.sin(Math.PI * 2 / v * y) * p;
        var k = Math.cos(Math.PI * 2 / v * y) * p;
        q.push(m, -C * 0.5, k);
        d.push(Math.sin(Math.PI * 2 / v * y) / 8 + 1 / 8, 5 / 8 - Math.cos(Math.PI * 2 / v * y) / 8)
    }
    for (var y = 0; y < v; ++y) {
        var m = Math.sin(Math.PI * 2 / v * y) * p;
        var k = Math.cos(Math.PI * 2 / v * y) * p;
        q.push(m, C * 0.5, k);
        d.push(y / (2 * v) + 0.5, 0)
    }
    for (var y = 0; y < v; ++y) {
        var m = Math.sin(Math.PI * 2 / v * y) * p;
        var k = Math.cos(Math.PI * 2 / v * y) * p;
        q.push(m, -C * 0.5, k);
        d.push(y / (2 * v) + 0.5, 1)
    }
    var o = new Array;
    for (var w = 0; w < v + 1; ++w) {
        o.push(0, 1, 0)
    }
    for (var w = 0; w < v + 1; ++w) {
        o.push(0, -1, 0)
    }
    for (var w = 0; w < v; ++w) {
        var s = new okVec3(q[(v * 2 + 2) * 3 + w * 3], 0, q[(v * 2 + 2) * 3 + w * 3 + 2]);
        s = s.normalize();
        o.push(s.x, s.y, s.z)
    }
    for (var w = 0; w < v; ++w) {
        var s = new okVec3(q[(v * 3 + 2) * 3 + w * 3], 0, q[(v * 3 + 2) * 3 + w * 3 + 2]);
        s = s.normalize();
        o.push(s.x, s.y, s.z)
    }
    var c = new Array;
    for (var y = 0; y < v; ++y) {
        c.push(0, 1 + (y % v), 1 + ((y + 1) % v))
    }
    for (var y = 0; y < v; ++y) {
        c.push(v + 1, v + 2 + ((y + 1) % v), v + 2 + (y % v))
    }
    for (var y = 0; y < v; ++y) {
        var l = v * 2 + 2 + y, e = v * 2 + 2 + (y + 1) % v;
        var u = v * 3 + 2 + y, t = v * 3 + 2 + (y + 1) % v;
        c.push(l, u, t);
        c.push(t, e, l)
    }
    a.createAttribute("Position", q.length, q);
    a.createAttribute("Normal", o.length, o);
    a.createAttribute("Texcoord1", d.length, d);
    a.createIndex("Default", c.length, c, 35044, 4);
    a.setVertexNum(q.length / 3);
    a.computeBoundingInfo();
    if (B) {
        var f = new Array;
        var A = c.length / 3;
        for (var w = 0; w < A; ++w) {
            f.push(c[w * 3], c[w * 3 + 1]);
            f.push(c[w * 3 + 1], c[w * 3 + 2]);
            f.push(c[w * 3 + 2], c[w * 3])
        }
        a.createIndex("Wireframe", f.length, f, 35044, 1)
    }
    return a
}

function okGenTaperMesh(a, t, E, y, D) {
    var v = new Array;
    var l = new Array;
    v.push(0, -E * 0.5, 0);
    l.push(1 / 8, 1 / 8);
    for (var B = 0; B < y; ++B) {
        var p = Math.sin(Math.PI * 2 / y * B) * t;
        var o = Math.cos(Math.PI * 2 / y * B) * t;
        v.push(p, -E * 0.5, o);
        l.push(Math.sin(Math.PI * 2 / y * B) / 8 + 1 / 8, 1 / 8 - Math.cos(Math.PI * 2 / y * B) / 8)
    }
    v.push(0, E * 0.5, 0);
    l.push(3 / 4, 1 / 4);
    var d = Math.sqrt(t * t + E * E);
    for (var B = 0; B < y; ++B) {
        var p = Math.sin(Math.PI * 2 / y * B) * t;
        var o = Math.cos(Math.PI * 2 / y * B) * t;
        v.push(p, -E * 0.5, o);
        l.push(3 / 4 + Math.sin(Math.PI * 2 / y * B * t / d) / 4, 1 / 4 - Math.cos(Math.PI * 2 / y * B * t / d) / 4)
    }
    var q = new Array;
    for (var A = 0; A < y + 1; ++A) {
        q.push(0, -1, 0)
    }
    q.push(0, 1, 0);
    for (var A = 0; A < y; ++A) {
        q.push(0, 0, 0)
    }
    for (var A = 0; A < y; ++A) {
        var k = new okVec3(v[(y + 1) * 3], v[(y + 1) * 3 + 1], v[(y + 1) * 3 + 2]);
        var f = new okVec3(v[(y + 2) * 3 + A * 3], v[(y + 2) * 3 + A * 3 + 1], v[(y + 2) * 3 + A * 3 + 2]);
        var e = new okVec3(v[(y + 2) * 3 + ((A + 1) % y) * 3], v[(y + 2) * 3 + ((A + 1) % y) * 3 + 1], v[(y + 2) * 3 + ((A + 1) % y) * 3 + 2]);
        var u = okVec3Sub(f, k);
        var s = okVec3Sub(e, k);
        var w = okVec3Cross(u, s);
        w = w.normalize();
        q[(y + 2) * 3 + A * 3] += w.x;
        q[(y + 2) * 3 + A * 3 + 1] += w.y;
        q[(y + 2) * 3 + A * 3 + 2] += w.z;
        q[(y + 2) * 3 + ((A + 1) % y) * 3] += w.x;
        q[(y + 2) * 3 + ((A + 1) % y) * 3 + 1] += w.y;
        q[(y + 2) * 3 + ((A + 1) % y) * 3 + 2] += w.z
    }
    for (var A = 0; A < y; ++A) {
        var w = new okVec3(q[(y + 2) * 3 + A * 3], q[(y + 2) * 3 + A * 3 + 1], q[(y + 2) * 3 + A * 3 + 2]);
        w = w.normalize();
        q[(y + 2) * 3 + A * 3] = w.x;
        q[(y + 2) * 3 + A * 3 + 1] = w.y;
        q[(y + 2) * 3 + A * 3 + 2] = w.z
    }
    var c = new Array;
    for (var B = 0; B < y; ++B) {
        c.push(0, 1 + ((B + 1) % y), 1 + B)
    }
    for (var B = 0; B < y; ++B) {
        c.push(y + 1, y + 2 + B, y + 2 + (B + 1) % y)
    }
    a.createAttribute("Position", v.length, v);
    a.createAttribute("Normal", q.length, q);
    a.createAttribute("Texcoord1", l.length, l);
    a.createIndex("Default", c.length, c, 35044, 4);
    a.setVertexNum(v.length / 3);
    a.computeBoundingInfo();
    if (D) {
        var m = new Array;
        var C = c.length / 3;
        for (var A = 0; A < C; ++A) {
            m.push(c[A * 3], c[A * 3 + 1]);
            m.push(c[A * 3 + 1], c[A * 3 + 2]);
            m.push(c[A * 3 + 2], c[A * 3])
        }
        a.createIndex("Wireframe", m.length, m, 35044, 1)
    }
    return a
}

function okGenFrustumMesh(p, o, a) {
    var m = new Array;
    for (var f = 0; f < 8; ++f) {
        m.push(o.getPoint(f))
    }
    var k = new Array;
    k.push(m[0].x, m[0].y, m[0].z);
    k.push(m[1].x, m[1].y, m[1].z);
    k.push(m[2].x, m[2].y, m[2].z);
    k.push(m[3].x, m[3].y, m[3].z);
    k.push(m[5].x, m[5].y, m[5].z);
    k.push(m[4].x, m[4].y, m[4].z);
    k.push(m[7].x, m[7].y, m[7].z);
    k.push(m[6].x, m[6].y, m[6].z);
    k.push(m[1].x, m[1].y, m[1].z);
    k.push(m[5].x, m[5].y, m[5].z);
    k.push(m[6].x, m[6].y, m[6].z);
    k.push(m[2].x, m[2].y, m[2].z);
    k.push(m[4].x, m[4].y, m[4].z);
    k.push(m[0].x, m[0].y, m[0].z);
    k.push(m[3].x, m[3].y, m[3].z);
    k.push(m[7].x, m[7].y, m[7].z);
    k.push(m[3].x, m[3].y, m[3].z);
    k.push(m[2].x, m[2].y, m[2].z);
    k.push(m[6].x, m[6].y, m[6].z);
    k.push(m[7].x, m[7].y, m[7].z);
    k.push(m[1].x, m[1].y, m[1].z);
    k.push(m[0].x, m[0].y, m[0].z);
    k.push(m[4].x, m[4].y, m[4].z);
    k.push(m[5].x, m[5].y, m[5].z);
    var c = new Array;
    var e = okVec3Cross(okVec3Sub(m[1], m[0]), okVec3Sub(m[3], m[0])).normalize();
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    e = okVec3Cross(okVec3Sub(m[4], m[5]), okVec3Sub(m[6], m[5])).normalize();
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    e = okVec3Cross(okVec3Sub(m[5], m[1]), okVec3Sub(m[2], m[1])).normalize();
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    e = okVec3Cross(okVec3Sub(m[0], m[4]), okVec3Sub(m[7], m[4])).normalize();
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    e = okVec3Cross(okVec3Sub(m[2], m[3]), okVec3Sub(m[7], m[3])).normalize();
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    e = okVec3Cross(okVec3Sub(m[0], m[1]), okVec3Sub(m[5], m[1])).normalize();
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    c.push(e.x, e.y, e.z);
    var d = new Array;
    d.push(0, 1, 2, 0, 2, 3);
    d.push(4, 5, 6, 4, 6, 7);
    d.push(8, 9, 10, 8, 10, 11);
    d.push(12, 13, 14, 12, 14, 15);
    d.push(16, 17, 18, 16, 18, 19);
    d.push(20, 21, 22, 20, 22, 23);
    p.createAttribute("Position", k.length, k);
    p.createAttribute("Normal", c.length, c);
    p.createIndex("Default", d.length, d, 35044, 4);
    p.setVertexNum(k.length / 3);
    p.computeBoundingInfo();
    if (a) {
        var h = new Array;
        var l = d.length / 3;
        for (var f = 0; f < l; ++f) {
            h.push(d[f * 3], d[f * 3 + 1]);
            h.push(d[f * 3 + 1], d[f * 3 + 2]);
            h.push(d[f * 3 + 2], d[f * 3])
        }
        p.createIndex("Wireframe", h.length, h, 35044, 1)
    }
    return p
}

function okCollection() {
    this.aDataList = new Array;
    this.iDataReserveHead = -1;
    this.iDataCount = 0;
    this.iIterator = 0
}

okCollection.prototype = {
    clear: function () {
        this.aDataList.lengh = 0;
        this.iDataReserveHead = -1;
        this.iDataCount = 0;
        this.iIterator = 0
    }, add: function (d) {
        if (this.iDataReserveHead != -1) {
            var c = this.iDataReserveHead;
            this.iDataReserveHead = this.aDataList[this.iDataReserveHead].reserve;
            this.aDataList[c].data = d;
            this.aDataList[c].reserve = -1;
            this.aDataList[c].bValid = true;
            this.iDataCount += 1;
            return c
        } else {
            var a = new Object;
            a.data = d;
            a.reserve = -1;
            a.bValid = true;
            this.aDataList.push(a);
            this.iDataCount += 1;
            return this.aDataList.length - 1
        }
    }, find: function (c) {
        for (var a = this.aDataList.length - 1; a >= 0; --a) {
            if (this.aDataList[a].bValid && this.aDataList[a].data == c) {
                return true
            }
        }
        return false
    }, remove: function (c) {
        for (var a = this.aDataList.length - 1; a >= 0; --a) {
            if (this.aDataList[a].bValid && this.aDataList[a].data == c) {
                this.aDataList[a].reserve = this.iDataReserveHead;
                this.aDataList[a].bValid = false;
                this.iDataReserveHead = a;
                this.iDataCount -= 1;
                return
            }
        }
    }, removeByIndex: function (a) {
        if (this.aDataList[a].bValid) {
            this.aDataList[a].reserve = this.iDataReserveHead;
            this.aDataList[a].bValid = false;
            this.iDataReserveHead = a;
            this.iDataCount -= 1
        }
    }, getSize: function () {
        return this.iDataCount
    }, getCapacity: function () {
        return this.aDataList.length
    }, getDataByIndex: function (a) {
        return this.aDataList[a].data
    }, isIndexValid: function (a) {
        return (a < this.aDataList.length) && (a >= 0) && this.aDataList[a].bValid
    }, resetIterator: function () {
        this.iIterator = 0
    }, iterate: function () {
        while (this.iIterator < this.aDataList.length && this.aDataList[this.iIterator].bValid == false) {
            this.iIterator++
        }
        if (this.iIterator >= this.aDataList.length) {
            return null
        }
        return this.aDataList[this.iIterator++].data
    }
};

function okList() {
    this.root = null;
    this.tail = null;
    this.iSize = 0;
    this.pool = new Array
}

okList.prototype = {
    clear: function () {
        var c = this.root;
        while (c) {
            var a = c.next;
            c.data = null;
            c.pre = null;
            c.next = null;
            this.pool.push(c);
            c = a
        }
        this.root = null;
        this.tail = null;
        this.iSize = 0
    }, getRoot: function () {
        return this.root
    }, getTail: function () {
        return this.tail
    }, getSize: function () {
        return this.iSize
    }, isEmpty: function () {
        return (this.iSize == 0)
    }, pushFront: function (a) {
        var c = this.pool.length ? this.pool.shift() : new Object;
        c.data = a;
        c.next = this.root;
        c.pre = null;
        if (this.root) {
            this.root.pre = c
        } else {
            this.tail = c
        }
        this.root = c;
        this.iSize += 1
    }, popFront: function () {
        if (this.root == null) {
            return null
        }
        var a = this.root;
        this.root = this.root.next;
        if (this.root != null) {
            this.root.pre = null
        } else {
            this.tail = null
        }
        this.iSize -= 1;
        a.pre = null;
        a.next = null;
        var c = a.data;
        a.data = null;
        this.pool.push(a);
        return c
    }, front: function () {
        if (this.root) {
            return this.root.data
        }
        return null
    }, pushBack: function (c) {
        var a = this.pool.length ? this.pool.shift() : new Object;
        a.data = c;
        a.pre = this.tail;
        a.next = null;
        if (this.tail) {
            this.tail.next = a
        } else {
            this.root = a
        }
        this.tail = a;
        this.iSize += 1
    }, popBack: function () {
        if (this.tail == null) {
            return null
        }
        var a = this.tail;
        this.tail = this.tail.pre;
        if (this.tail != null) {
            this.tail.next = null
        } else {
            this.root = null
        }
        this.iSize -= 1;
        a.pre = null;
        a.next = null;
        var c = a.data;
        a.data = null;
        this.pool.push(a);
        return c
    }, back: function () {
        if (this.tail) {
            return this.tail.data
        }
        return null
    }, insertBefore: function (c, d) {
        var a = this.pool.length ? this.pool.shift() : new Object;
        a.data = d;
        a.pre = c.pre;
        a.next = c;
        c.pre = a;
        if (a.pre == null) {
            this.root = a
        } else {
            a.pre.next = a
        }
        this.iSize += 1
    }, insertAfter: function (c, d) {
        var a = this.pool.length ? this.pool.shift() : new Object;
        a.data = d;
        a.pre = c;
        a.next = c.next;
        c.next = a;
        if (a.next == null) {
            this.tail = a
        } else {
            a.next.pre = a
        }
        this.iSize += 1
    }, remove: function (a) {
        if (a == null) {
            return null
        }
        if (a.pre) {
            a.pre.next = a.next
        }
        if (a.next) {
            a.next.pre = a.pre
        }
        if (a == this.root) {
            this.root = a.next
        }
        if (a == this.tail) {
            this.tail = a.pre
        }
        a.pre = null;
        a.next = null;
        a.data = null;
        this.pool.push(a);
        this.iSize -= 1
    }, find: function (a) {
        var c = this.root;
        while (c) {
            if (c.data == a) {
                return c
            }
            c = c.next
        }
        return null
    }
};

function okLayout2DHelper(a, c) {
    this.aValidBlockList = new okList();
    this.aValidBlockList.pushBack(new okRect(0, 0, a, c))
}

okLayout2DHelper.prototype = {
    reset: function (a, c) {
        this.aValidBlockList = new okList();
        this.aValidBlockList.pushBack(new okRect(0, 0, a, c))
    }, add: function (a, e) {
        var i = this.aValidBlockList.getRoot();
        var h = null;
        var d = null, c = null;
        while (i) {
            var f = i.data;
            if (f.width >= a && f.height >= e) {
                h = new okRect(f.x, f.y, a, e);
                this.aValidBlockList.remove(i);
                if ((f.width != a) && (f.height != e)) {
                    if (Math.max(f.height * (f.width - a), a * (f.height - e)) > Math.max(f.width * (f.height - e), e * (f.width - a))) {
                        d = new okRect(f.x, f.y + e, a, f.height - e);
                        c = new okRect(f.x + a, f.y, f.width - a, f.height)
                    } else {
                        d = new okRect(f.x, f.y + e, f.width, f.height - e);
                        c = new okRect(f.x + a, f.y, f.width - a, e)
                    }
                } else {
                    if (f.width != a) {
                        d = new okRect(f.x + a, f.y, f.width - a, f.height)
                    } else {
                        if (f.height != e) {
                            d = new okRect(f.x, f.y + e, f.width, f.height - e)
                        }
                    }
                }
                break
            }
            i = i.next
        }
        if (d) {
            this.appendBlankRect(d)
        }
        if (c) {
            this.appendBlankRect(c)
        }
        return h
    }, remove: function (a) {
        this.appendBlankRect(a);
        return true
    }, appendBlankRect: function (a) {
        if (a == null || a.width <= 0 || a.height <= 0) {
            return
        }
        var d = this.aValidBlockList.getRoot();
        while (d) {
            var c = d.data;
            if (c.width * c.height > a.width * a.height) {
                this.aValidBlockList.insertBefore(d, a);
                break
            }
            d = d.next
        }
        if (d == null) {
            this.aValidBlockList.pushBack(a)
        }
    }
};

function okPackVec3ToFloat(d) {
    var a = d.x * 255;
    var h = d.y * 255;
    var f = d.z * 255;
    var c = (a << 16) | (h << 8) | f;
    var e = c / (1 << 24);
    return e
}


function okGetFileExtName(c) {
    var a = c.lastIndexOf(".");
    if (a == -1) {
        return ""
    }
    return c.substr(a + 1)
}

function okGetRelativePath(a, c) {
    a = a.replace(/\\/g, "/");
    a = a.replace(/^\/+/g, "");
    a = a.replace(/\/$/g, "");
    c = c.replace(/\\/g, "/");
    c = c.replace(/^\/+/g, "");
    c = c.replace(/\/$/g, "");
    return a.substr(a.indexOf(c) + c.length)
}

function okExtend(d, a) {
    var c = function () {
    };
    c.prototype = a.prototype;
    d.__parent = a.prototype;
    d.prototype = new c();
    d.prototype.constructor = d
}

function okBaseCall(h, e) {
    //var c = arguments.callee.caller;
    var c = arguments;
    if (c.__parent) {
        return c.__parent.constructor.apply(h, Array.prototype.slice.call(arguments, 1))
    }
    var a = Array.prototype.slice.call(arguments, 2);
    var f = false;
    for (var d = h.constructor; d; d = d.__parent && d.__parent.constructor) {
        if (d.prototype[e] === c) {
            f = true
        } else {
            if (f) {
                return d.prototype[e].apply(h, a)
            }
        }
    }
    if (h[e] === c) {
        return h.constructor.prototype[e].apply(h, a)
    } else {
        throw Error("Called from a method of one name to a method of a different name")
    }
}

function okAllocatorPrototype() {
    this.aVec2 = new Array;
    this.aVec3 = new Array;
    this.aVec4 = new Array;
    this.aMat3 = new Array;
    this.aMat4 = new Array;
    this.aMat43 = new Array;
    this.aQuat = new Array;
    this.aPlane = new Array;
    this.aAABBox = new Array;
    this.aSceneNode = new Array;
    this.aRenderBatch = new Array;
    this.aParticle = new Array;
    this.aArray = new Array;
    this.aObjectArray = new Array
}

okAllocatorPrototype.prototype = {
    object: function () {
        if (this.aObjectArray.length) {
            return this.aObjectArray.shift()
        }
        return new Object
    }, _object: function (c) {
        for (var a in c) {
            delete c[a]
        }
        this.aObjectArray.push(c)
    }, array: function () {
        if (this.aArray.length) {
            return this.aArray.shift()
        }
        return new Array
    }, _array: function (a) {
        a.length = 0;
        this.aArray.push(a)
    }, vec2: function () {
        if (this.aVec2.length) {
            return this.aVec2.shift()
        }
        return new okVec2()
    }, _vec2: function (a) {
        a.x = 0;
        a.y = 0;
        this.aVec3.push(a)
    }, vec3: function (d, c, a) {
        if (this.aVec3.length) {
            return this.aVec3.shift()
        }
        return new okVec3()
    }, _vec3: function (a) {
        a.x = 0;
        a.y = 0;
        a.z = 0;
        this.aVec3.push(a)
    }, vec4: function () {
        if (this.aVec4.length) {
            return this.aVec4.shift()
        }
        return new okVec4()
    }, _vec4: function (a) {
        a.x = 0;
        a.y = 0;
        a.z = 0;
        a.w = 0;
        this.aVec4.push(a)
    }, mat3: function () {
        if (this.aMat3.length) {
            return this.aMat3.shift()
        }
        return new okMat3()
    }, _mat3: function (a) {
        a.m00 = 1;
        a.m10 = 0;
        a.m20 = 0;
        a.m01 = 0;
        a.m11 = 1;
        a.m21 = 0;
        a.m02 = 0;
        a.m12 = 0;
        a.m22 = 1;
        this.aMat3.push(a)
    }, mat4: function () {
        if (this.aMat4.length) {
            return this.aMat4.shift()
        }
        return new okMat4()
    }, _mat4: function (a) {
        a.m00 = 1;
        a.m10 = 0;
        a.m20 = 0;
        a.m30 = 0;
        a.m01 = 0;
        a.m11 = 1;
        a.m21 = 0;
        a.m31 = 0;
        a.m02 = 0;
        a.m12 = 0;
        a.m22 = 1;
        a.m32 = 0;
        a.m03 = 0;
        a.m13 = 0;
        a.m23 = 0;
        a.m33 = 1;
        this.aMat4.push(a)
    }, mat43: function () {
        if (this.aMat43.length) {
            return this.aMat43.shift()
        }
        return new okMat43()
    }, _mat43: function (a) {
        a.m00 = 1;
        a.m10 = 0;
        a.m20 = 0;
        a.m01 = 0;
        a.m11 = 1;
        a.m21 = 0;
        a.m02 = 0;
        a.m12 = 0;
        a.m22 = 1;
        a.m03 = 0;
        a.m13 = 0;
        a.m23 = 0;
        this.aMat43.push(a)
    }, quat: function () {
        if (this.aQuat.length) {
            return this.aQuat.shift()
        }
        return new okQuat()
    }, _quat: function (a) {
        a.s = 1;
        a.x = 0;
        a.y = 0;
        a.z = 0;
        this.aQuat.push(a)
    }, plane: function () {
        if (this.aPlane.length) {
            return this.aPlane.shift()
        }
        return new okPlane()
    }, _plane: function (a) {
        a.vOrigin.x = 0;
        a.vOrigin.y = 0;
        a.vOrigin.z = 0;
        a.vNormal.x = 0;
        a.vNormal.y = 1;
        a.vNormal.z = 0;
        this.aPlane.push(a)
    }, aabbox: function () {
        if (this.aAABBox.length) {
            return this.aAABBox.shift()
        }
        return new okAABBox()
    }, _aabbox: function (a) {
        a.set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aAABBox.push(a)
    }, sceneNode: function () {
        if (this.aSceneNode.length) {
            return this.aSceneNode.shift()
        }
        return new okSceneNode()
    }, _sceneNode: function (a) {
        a.clear();
        this.aSceneNode.push(a)
    }, renderBatch: function () {
        if (this.aRenderBatch.length) {
            return this.aRenderBatch.shift()
        }
        return new okRenderBatch()
    }, _renderBatch: function (a) {
        a.clear();
        this.aRenderBatch.push(a)
    }, particle: function () {
        if (this.aParticle.length) {
            return this.aParticle.shift()
        }
        return new okParticle()
    }, _particle: function (a) {
        a.lf = 0;
        a.tlf = 0;
        a.m.identity();
        a.v.x = 0;
        a.v.y = 0;
        a.v.z = 0;
        a.ac.x = 0;
        a.ac.y = 0;
        a.ac.z = 0;
        a.s.x = 0.1;
        a.s.y = 0.1;
        a.s0.x = 0.1;
        a.s0.y = 0.1;
        a.s1.x = 0.1;
        a.s1.y = 0.1;
        a.c.x = 1;
        a.c.y = 1;
        a.c.z = 1;
        a.c0.x = 1;
        a.c0.y = 1;
        a.c0.z = 1;
        a.c1.x = 1;
        a.c1.y = 1;
        a.c1.z = 1;
        a.a = 0;
        a.fdi = 0;
        a.fdo = 0;
        this.aParticle.push(a)
    }
};
var okAllocator = new okAllocatorPrototype();

function okFloatEqual(c, a) {
    if (Math.abs(c - a) < 0.000001) {
        return true
    }
    return false
}

function okAlign(c, a) {
    return (c + a - 1) & ~(a - 1)
}

function okAlignPower2(a) {
    --a;
    for (var c = 1; c < 32; c <<= 1) {
        a = a | a >> c
    }
    return a + 1
}

function okIsPower2(a) {
    return (a & (a - 1)) == 0
}

function okVec2(c, a) {
    this.x = ((c != null) ? c : 0);
    this.y = ((a != null) ? a : 0)
}

okVec2.prototype = {
    set: function (c, a) {
        this.x = c;
        this.y = a
    }, clone: function (a) {
        var a = (a ? a : okAllocator.vec2());
        a.x = this.x;
        a.y = this.y;
        return a
    }, equal: function (a) {
        return okFloatEqual(this.x, a.x) && okFloatEqual(this.y, a.y)
    }, neg: function (a) {
        var c = (a ? this : okAllocator.vec2());
        c.x = -this.x;
        c.y = -this.y;
        return c
    }, len: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, normalize: function (c) {
        var d = (c ? this : okAllocator.vec2());
        var a = 1 / Math.sqrt(this.x * this.x + this.y * this.y);
        d.x = this.x * a;
        d.y = this.y * a;
        return d
    }, inverse: function (a) {
        var c = (a ? this : okAllocator.vec2());
        c.x = 1 / this.x;
        c.y = 1 / this.y;
        return c
    }, translate: function (e, d, c) {
        if (e.x) {
            c = d;
            if (c) {
                this.x += e.x;
                this.y += e.y;
                return this
            } else {
                var a = okAllocator.vec2();
                a.x = this.x + e.x;
                a.y = this.y + e.y;
                return a
            }
        } else {
            if (okIsNumber(d)) {
                if (c) {
                    this.x += e;
                    this.y += d;
                    return this
                } else {
                    var a = okAllocator.vec2();
                    a.x = this.x + e;
                    a.y = this.y + d;
                    return a
                }
            } else {
                c = d;
                if (c) {
                    this.x += e;
                    this.y += e;
                    return this
                } else {
                    var a = okAllocator.vec2();
                    a.x = this.x + e;
                    a.y = this.y + e;
                    return a
                }
            }
        }
    }, scale: function (e, d, c) {
        if (e.x) {
            c = d;
            if (c) {
                this.x *= e.x;
                this.y *= e.y;
                return this
            } else {
                var a = okAllocator.vec2();
                a.x = this.x * e.x;
                a.y = this.y * e.y;
                return a
            }
        } else {
            if (okIsNumber(d)) {
                if (c) {
                    this.x *= e;
                    this.y *= d;
                    return this
                } else {
                    var a = okAllocator.vec2();
                    a.x = this.x * e;
                    a.y = this.y * d;
                    return a
                }
            } else {
                c = d;
                if (c) {
                    this.x *= e;
                    this.y *= e;
                    return this
                } else {
                    var a = okAllocator.vec2();
                    a.x = this.x * e;
                    a.y = this.y * e;
                    return a
                }
            }
        }
    }, toArray: function (a) {
        if (a == null) {
            a = okAllocator.array()
        }
        a.push(this.x, this.y);
        return a
    }
};

function okVec2Add(c, a) {
    var d = okAllocator.vec2();
    d.x = c.x + a.x;
    d.y = c.y + a.y;
    return d
}

function okVec2AddVal(a, c) {
    var d = okAllocator.vec2();
    d.x = a.x + c;
    d.y = a.y + c;
    return d
}

function okValAddVec2(c, a) {
    var d = okAllocator.vec2();
    d.x = a.x + c;
    d.y = a.y + c;
    return d
}

function okVec2Sub(c, a) {
    var d = okAllocator.vec2();
    d.x = c.x - a.x;
    d.y = c.y - a.y;
    return d
}

function okVec2SubVal(a, c) {
    var d = okAllocator.vec2();
    d.x = a.x - c;
    d.y = a.y - c;
    return d
}

function okValSubVec2(c, a) {
    var d = okAllocator.vec2();
    d.x = c - a.x;
    d.y = c - a.y;
    return d
}

function okVec2Mul(c, a) {
    var d = okAllocator.vec2();
    d.x = c.x * a.x;
    d.y = c.y * a.y;
    return d
}

function okVec2MulVal(a, c) {
    var d = okAllocator.vec2();
    d.x = a.x * c;
    d.y = a.y * c;
    return d
}

function okValMulVec2(c, a) {
    var d = okAllocator.vec2();
    d.x = a.x * c;
    d.y = a.y * c;
    return d
}

function okVec2Div(c, a) {
    var d = okAllocator.vec2();
    d.x = c.x / a.x;
    d.y = c.y / a.y;
    return d
}

function okVec2DivVal(a, c) {
    var d = okAllocator.vec2();
    d.x = a.x / c;
    d.y = a.y / c;
    return d
}

function okValDivVec2(c, a) {
    var d = okAllocator.vec2();
    d.x = c / a.x;
    d.y = c / a.y;
    return d
}

function okVec2Min(c, a) {
    var d = okAllocator.vec2();
    d.x = c.x < a.x ? c.x : a.x;
    d.y = c.y < a.y ? c.y : a.y;
    return d
}

function okVec2Max(c, a) {
    var d = okAllocator.vec2();
    d.x = c.x > a.x ? c.x : a.x;
    d.y = c.y > a.y ? c.y : a.y;
    return d
}

function okVec2Dot(c, a) {
    return c.x * a.x + c.y * a.y
}

function okVec2Lerp(e, d, h) {
    var c = okVec2MulVal(e, 1 - h);
    var a = okVec2MulVal(d, h);
    var f = okVec2Add(c, a);
    okAllocator._vec2(c);
    okAllocator._vec2(a);
    return f
}

function okVec2Len(e, d) {
    var c = e.x - d.x;
    var a = e.y - d.y;
    return Math.sqrt(c * c + a * a)
}

function okVec3(d, c, a) {
    this.x = ((d != null) ? d : 0);
    this.y = ((c != null) ? c : 0);
    this.z = ((a != null) ? a : 0)
}

okVec3.prototype = {
    set: function (d, c, a) {
        this.x = d;
        this.y = c;
        this.z = a
    }, clone: function (a) {
        var a = (a ? a : okAllocator.vec3());
        a.x = this.x;
        a.y = this.y;
        a.z = this.z;
        return a
    }, equal: function (a) {
        return okFloatEqual(this.x, a.x) && okFloatEqual(this.y, a.y) && okFloatEqual(this.z, a.z)
    }, len: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }, neg: function (a) {
        var c = (a ? this : okAllocator.vec3());
        c.x = -this.x;
        c.y = -this.y;
        c.z = -this.z;
        return c
    }, normalize: function (c) {
        var d = (c ? this : okAllocator.vec3());
        var a = 1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        d.x = this.x * a;
        d.y = this.y * a;
        d.z = this.z * a;
        return d
    }, inverse: function (a) {
        var c = (a ? this : okAllocator.vec3());
        c.x = 1 / this.x;
        c.y = 1 / this.y;
        c.z = 1 / this.z;
        return c
    }, translate: function (f, e, c, d) {
        if (f.x) {
            d = e;
            if (d) {
                this.x += f.x;
                this.y += f.y;
                this.z += f.z;
                return this
            } else {
                var a = okAllocator.vec3();
                a.x = this.x + f.x;
                a.y = this.y + f.y;
                a.z = this.z + f.z;
                return a
            }
        } else {
            if (c == null) {
                d = e;
                if (d) {
                    this.x += f;
                    this.y += f;
                    this.z += f;
                    return this
                } else {
                    var a = okAllocator.vec3();
                    a.x = this.x + f;
                    a.y = this.y + f;
                    a.z = this.z + f;
                    return a
                }
            } else {
                if (d) {
                    this.x += f;
                    this.y += e;
                    this.z += c;
                    return this
                } else {
                    var a = okAllocator.vec3();
                    a.x = this.x + f;
                    a.y = this.y + e;
                    a.z = this.z + c;
                    return a
                }
            }
        }
    }, scale: function (f, e, c, d) {
        if (f.x) {
            d = e;
            if (d) {
                this.x *= f.x;
                this.y *= f.y;
                this.z *= f.z;
                return this
            } else {
                var a = okAllocator.vec3();
                a.x = this.x * f.x;
                a.y = this.y * f.y;
                a.z = this.z * f.z;
                return a
            }
        } else {
            if (c == null) {
                d = e;
                if (d) {
                    this.x *= f;
                    this.y *= f;
                    this.z *= f;
                    return this
                } else {
                    var a = okAllocator.vec3();
                    a.x = this.x * f;
                    a.y = this.y * f;
                    a.z = this.z * f;
                    return a
                }
            } else {
                if (d) {
                    this.x *= f;
                    this.y *= e;
                    this.z *= c;
                    return this
                } else {
                    var a = okAllocator.vec3();
                    a.x = this.x * f;
                    a.y = this.y * e;
                    a.z = this.z * c;
                    return a
                }
            }
        }
    }, rot: function (i, h, f, c, e) {
        var d = okMat43Rot(i, h, f, c);
        var a = okMat43MulVec3(d, this);
        okAllocator._mat43(d);
        if (e) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            okAllocator._vec3(a);
            return this
        } else {
            return a
        }
    }, rotX: function (e, d) {
        var c = okMat43RotX(e);
        var a = okMat43MulVec3(c, this);
        okAllocator._mat43(c);
        if (d) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            okAllocator._vec3(a);
            return this
        } else {
            return a
        }
    }, rotY: function (e, d) {
        var c = okMat43RotY(e);
        var a = okMat43MulVec3(c, this);
        okAllocator._mat43(c);
        if (d) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            okAllocator._vec3(a);
            return this
        } else {
            return a
        }
    }, rotZ: function (e, d) {
        var c = okMat43RotZ(e);
        var a = okMat43MulVec3(c, this);
        okAllocator._mat43(c);
        if (d) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            okAllocator._vec3(a);
            return this
        } else {
            return a
        }
    }, toVec4: function (a) {
        if (a == null) {
            a = okAllocator.vec4()
        }
        a.set(this.x, this.y, this.z, 1);
        return a
    }, toArray: function (a) {
        if (a == null) {
            a = okAllocator.array()
        }
        a.push(this.x, this.y, this.z);
        return a
    }
};

function okVec3Add(c, a) {
    var d = okAllocator.vec3();
    d.x = c.x + a.x;
    d.y = c.y + a.y;
    d.z = c.z + a.z;
    return d
}

function okVec3AddVal(a, c) {
    var d = okAllocator.vec3();
    d.x = a.x + c;
    d.y = a.y + c;
    d.z = a.z + c;
    return d
}

function okValAddVec3(c, a) {
    var d = okAllocator.vec3();
    d.x = a.x + c;
    d.y = a.y + c;
    d.z = a.z + c;
    return d
}

function okVec3Sub(c, a) {
    var d = okAllocator.vec3();
    d.x = c.x - a.x;
    d.y = c.y - a.y;
    d.z = c.z - a.z;
    return d
}

function okVec3SubVal(a, c) {
    var d = okAllocator.vec3();
    d.x = a.x - c;
    d.y = a.y - c;
    d.z = a.z - c;
    return d
}

function okValSubVec3(c, a) {
    var d = okAllocator.vec3();
    d.x = c - a.x;
    d.y = c - a.y;
    d.z = c - a.z;
    return d
}

function okVec3Mul(c, a) {
    var d = okAllocator.vec3();
    d.x = c.x * a.x;
    d.y = c.y * a.y;
    d.z = c.z * a.z;
    return d
}

function okVec3MulVal(a, c) {
    var d = okAllocator.vec3();
    d.x = a.x * c;
    d.y = a.y * c;
    d.z = a.z * c;
    return d
}

function okValMulVec3(c, a) {
    var d = okAllocator.vec3();
    d.x = a.x * c;
    d.y = a.y * c;
    d.z = a.z * c;
    return d
}

function okVec3Div(c, a) {
    var d = okAllocator.vec3();
    d.x = c.x / a.x;
    d.y = c.y / a.y;
    d.z = c.z / a.z;
    return d
}

function okVec3DivVal(a, c) {
    var d = okAllocator.vec3();
    d.x = a.x / c;
    d.y = a.y / c;
    d.z = a.z / c;
    return d
}

function okValDivVec3(c, a) {
    var d = okAllocator.vec3();
    d.x = c / a.x;
    d.y = c / a.y;
    d.z = c / a.z;
    return d
}

function okVec3Min(c, a) {
    var d = okAllocator.vec3();
    d.x = c.x < a.x ? c.x : a.x;
    d.y = c.y < a.y ? c.y : a.y;
    d.z = c.z < a.z ? c.z : a.z;
    return d
}

function okVec3Max(c, a) {
    var d = okAllocator.vec3();
    d.x = c.x > a.x ? c.x : a.x;
    d.y = c.y > a.y ? c.y : a.y;
    d.z = c.z > a.z ? c.z : a.z;
    return d
}

function okVec3Dot(c, a) {
    return c.x * a.x + c.y * a.y + c.z * a.z
}

function okVec3Cross(c, a) {
    var d = okAllocator.vec3();
    d.x = c.y * a.z - c.z * a.y;
    d.y = c.z * a.x - c.x * a.z;
    d.z = c.x * a.y - c.y * a.x;
    return d
}

function okVec3Lerp(e, c, h) {
    var f = 1 - h;
    var d = h;
    var a = okAllocator.vec3();
    a.x = e.x * f + c.x * d;
    a.y = e.y * f + c.y * d;
    a.z = e.z * f + c.z * d;
    return a
}

function okVec3Len(e, d) {
    var c = e.x - d.x;
    var a = e.y - d.y;
    var f = e.z - d.z;
    return Math.sqrt(c * c + a * a + f * f)
}

function okVec4(d, c, a, e) {
    this.x = ((d != null) ? d : 0);
    this.y = ((c != null) ? c : 0);
    this.z = ((a != null) ? a : 0);
    this.w = ((e != null) ? e : 1)
}

okVec4.prototype = {
    set: function (d, c, a, e) {
        this.x = d;
        this.y = c;
        this.z = a;
        this.w = e
    }, clone: function (a) {
        var a = (a ? a : okAllocator.vec4());
        a.x = this.x;
        a.y = this.y;
        a.z = this.z;
        a.w = this.w;
        return a
    }, equal: function (a) {
        return okFloatEqual(this.x, a.x) && okFloatEqual(this.y, a.y) && okFloatEqual(this.z, a.z) && okFloatEqual(this.w, a.w)
    }, len: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }, neg: function (a) {
        var c = (a ? this : okAllocator.vec4());
        c.x = -this.x;
        c.y = -this.y;
        c.z = -this.z;
        c.w = -this.w;
        return c
    }, normalize: function (c) {
        var d = (c ? this : okAllocator.vec4());
        var a = 1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        d.x = this.x * a;
        d.y = this.y * a;
        d.z = this.z * a;
        d.w = this.w * a;
        return d
    }, inverse: function (a) {
        var c = (a ? this : okAllocator.vec4());
        c.x = 1 / this.x;
        c.y = 1 / this.y;
        c.z = 1 / this.z;
        c.w = 1 / this.w;
        return c
    }, toVec3: function (a) {
        if (a == null) {
            a = okAllocator.vec3()
        }
        a.x = this.x / this.w;
        a.y = this.y / this.w;
        a.z = this.z / this.w;
        return a
    }, toArray: function (a) {
        if (a == null) {
            a = okAllocator.array()
        }
        a.push(this.x, this.y, this.z, this.w);
        return a
    }
};

function okVec4Add(c, a) {
    var d = okAllocator.vec4();
    d.x = c.x + a.x;
    d.y = c.y + a.y;
    d.z = c.z + a.z;
    d.w = c.w + a.w;
    return d
}

function okVec4AddVal(a, c) {
    var d = okAllocator.vec4();
    d.x = a.x + c;
    d.y = a.y + c;
    d.z = a.z + c;
    d.w = a.w + c;
    return d
}

function okValAddVec4(c, a) {
    var d = okAllocator.vec4();
    d.x = a.x + c;
    d.y = a.y + c;
    d.z = a.z + c;
    d.w = a.w + c;
    return d
}

function okVec4Sub(c, a) {
    var d = okAllocator.vec4();
    d.x = c.x - a.x;
    d.y = c.y - a.y;
    d.z = c.z - a.z;
    d.w = c.w - a.w;
    return d
}

function okVec4SubVal(a, c) {
    var d = okAllocator.vec4();
    d.x = a.x - c;
    d.y = a.y - c;
    d.z = a.z - c;
    d.w = a.w - c;
    return d
}

function okValSubVec4(c, a) {
    var d = okAllocator.vec4();
    d.x = c - a.x;
    d.y = c - a.y;
    d.z = c - a.z;
    d.w = c - a.w;
    return d
}

function okVec4Mul(c, a) {
    var d = okAllocator.vec4();
    d.x = c.x * a.x;
    d.y = c.y * a.y;
    d.z = c.z * a.z;
    d.w = c.w * a.w;
    return d
}

function okVec4MulVal(a, c) {
    var d = okAllocator.vec4();
    d.x = a.x * c;
    d.y = a.y * c;
    d.z = a.z * c;
    d.w = a.w * c;
    return d
}

function okValMulVec4(c, a) {
    var d = okAllocator.vec4();
    d.x = a.x * c;
    d.y = a.y * c;
    d.z = a.z * c;
    d.w = a.w * c;
    return d
}

function okVec4Div(c, a) {
    var d = okAllocator.vec4();
    d.x = c.x / a.x;
    d.y = c.y / a.y;
    d.z = c.z / a.z;
    d.w = c.w / a.w;
    return d
}

function okVec4DivVal(a, c) {
    var d = okAllocator.vec4();
    d.x = a.x / c;
    d.y = a.y / c;
    d.z = a.z / c;
    d.w = a.w / c;
    return d
}

function okValDivVec4(c, a) {
    var d = okAllocator.vec4();
    d.x = c / a.x;
    d.y = c / a.y;
    d.z = c / a.z;
    d.w = c / a.w;
    return d
}

function okVec4Min(c, a) {
    var d = okAllocator.vec4();
    d.x = c.x < a.x ? c.x : a.x;
    d.y = c.y < a.y ? c.y : a.y;
    d.z = c.z < a.z ? c.z : a.z;
    d.w = c.w < a.w ? c.w : a.w;
    return d
}

function okVec4Max(c, a) {
    var d = okAllocator.vec4();
    d.x = c.x > a.x ? c.x : a.x;
    d.y = c.y > a.y ? c.y : a.y;
    d.z = c.z > a.z ? c.z : a.z;
    d.w = c.w > a.w ? c.w : a.w;
    return d
}

function okVec4Dot(c, a) {
    return c.x * a.x + c.y * a.y + c.z * a.z + c.w * a.w
}

function okVec4Lerp(e, d, h) {
    var c = okVec4MulVal(e, 1 - h);
    var a = okVec4MulVal(d, h);
    var f = okVec4Add(c, a);
    okAllocator._vec4(c);
    okAllocator._vec4(a);
    return f
}

function okVec4Len(f, e) {
    var c = f.x - e.x;
    var a = f.y - e.y;
    var h = f.z - e.z;
    var d = f.w - e.w;
    return Math.sqrt(c * c + a * a + h * h + d * d)
}

function okMat3(a) {
    this.m00 = ((a != null) ? a : 1);
    this.m10 = 0;
    this.m20 = 0;
    this.m01 = 0;
    this.m11 = ((a != null) ? a : 1);
    this.m21 = 0;
    this.m02 = 0;
    this.m12 = 0;
    this.m22 = ((a != null) ? a : 1)
}

okMat3.prototype = {
    identity: function () {
        this.m00 = 1;
        this.m10 = 0;
        this.m20 = 0;
        this.m01 = 0;
        this.m11 = 1;
        this.m21 = 0;
        this.m02 = 0;
        this.m12 = 0;
        this.m22 = 1
    }, clone: function (a) {
        var a = (a ? a : okAllocator.mat3());
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        return a
    }, equal: function (a) {
        return okFloatEqual(this.m00, a.m00) && okFloatEqual(this.m10, a.m10) && okFloatEqual(this.m20, a.m20) && okFloatEqual(this.m01, a.m01) && okFloatEqual(this.m11, a.m11) && okFloatEqual(this.m21, a.m21) && okFloatEqual(this.m02, a.m02) && okFloatEqual(this.m12, a.m12) && okFloatEqual(this.m22, a.m22)
    }, setColumn: function (d, c, a, e) {
        if (d == 0) {
            if (okIsNumber(c)) {
                this.m00 = c;
                this.m10 = a;
                this.m20 = e
            } else {
                this.m00 = c.x;
                this.m10 = c.y;
                this.m20 = c.z
            }
        } else {
            if (d == 1) {
                if (okIsNumber(c)) {
                    this.m01 = c;
                    this.m11 = a;
                    this.m21 = e
                } else {
                    this.m01 = c.x;
                    this.m11 = c.y;
                    this.m21 = c.z
                }
            } else {
                if (d == 2) {
                    if (okIsNumber(c)) {
                        this.m02 = c;
                        this.m12 = a;
                        this.m22 = e
                    } else {
                        this.m02 = c.x;
                        this.m12 = c.y;
                        this.m22 = c.z
                    }
                }
            }
        }
    }, getColumn: function (c) {
        var a = okAllocator.vec3();
        if (c == 0) {
            a.set(this.m00, this.m10, this.m20)
        } else {
            if (c == 1) {
                a.set(this.m01, this.m11, this.m21)
            } else {
                if (c == 2) {
                    a.set(this.m02, this.m12, this.m22)
                }
            }
        }
        return a
    }, det: function () {
        var m = this.m00, l = this.m01, k = this.m02;
        var i = this.m10, f = this.m11, e = this.m12;
        var d = this.m20, c = this.m21, a = this.m22;
        var h = m * f * a + l * e * d + k * i * c - m * e * c - l * i * a - k * f * d;
        return h
    }, inverse: function (l) {
        var o = this.m00, n = this.m01, m = this.m02;
        var i = this.m10, h = this.m11, f = this.m12;
        var e = this.m20, d = this.m21, c = this.m22;
        var a = (l ? this : okAllocator.mat3());
        a.m00 = h * c - f * d;
        a.m01 = m * d - n * c;
        a.m02 = n * f - m * h;
        a.m10 = f * e - i * c;
        a.m11 = o * c - m * e;
        a.m12 = m * i - o * f;
        a.m20 = i * d - h * e;
        a.m21 = n * e - o * d;
        a.m22 = o * h - n * i;
        var p = o * h * c + n * f * e + m * i * d - o * f * d - n * i * c - m * h * e;
        var k = 1 / p;
        a.m00 *= k;
        a.m01 *= k;
        a.m02 *= k;
        a.m10 *= k;
        a.m11 *= k;
        a.m12 *= k;
        a.m20 *= k;
        a.m21 *= k;
        a.m22 *= k;
        return a
    }, transpose: function (c) {
        var a = (c ? this : okAllocator.mat3());
        a.m00 = this.m00;
        a.m10 = this.m01;
        a.m20 = this.m02;
        a.m01 = this.m10;
        a.m11 = this.m11;
        a.m21 = this.m12;
        a.m02 = this.m20;
        a.m12 = this.m21;
        a.m22 = this.m22;
        return a
    }, rot: function (B, a, x, w, v, e) {
        var p = okAllocator.vec3();
        if (v != null) {
            p.x = x;
            p.y = w;
            p.z = v
        } else {
            p.x = x.x;
            p.y = x.y;
            p.z = x.z;
            e = w
        }
        p.normalize(true);
        var h = a * Math.PI / 180;
        var t = Math.cos(h * 0.5);
        var u = Math.sin(h * 0.5);
        var n = okAllocator.quat();
        n.s = t;
        n.x = u * p.x;
        n.y = u * p.y;
        n.z = u * p.z;
        okAllocator._vec3(p);
        var s = okAllocator.mat3();
        n.toMat3(s);
        var o = this.m00;
        var A = this.m10;
        var f = this.m20;
        var l = this.m01;
        var z = this.m11;
        var d = this.m21;
        var k = this.m02;
        var y = this.m12;
        var c = this.m22;
        var i = (e ? this : okAllocator.mat3());
        if (B == 2) {
            i.m00 = s.m00 * o + s.m01 * A + s.m02 * f;
            i.m10 = s.m10 * o + s.m11 * A + s.m12 * f;
            i.m20 = s.m20 * o + s.m21 * A + s.m22 * f;
            i.m01 = s.m00 * l + s.m01 * z + s.m02 * d;
            i.m11 = s.m10 * l + s.m11 * z + s.m12 * d;
            i.m21 = s.m20 * l + s.m21 * z + s.m22 * d;
            i.m02 = s.m00 * k + s.m01 * y + s.m02 * c;
            i.m12 = s.m10 * k + s.m11 * y + s.m12 * c;
            i.m22 = s.m20 * k + s.m21 * y + s.m22 * c
        } else {
            i.m00 = o * s.m00 + l * s.m10 + k * s.m20;
            i.m10 = A * s.m00 + z * s.m10 + y * s.m20;
            i.m20 = f * s.m00 + d * s.m10 + c * s.m20;
            i.m01 = o * s.m01 + l * s.m11 + k * s.m21;
            i.m11 = A * s.m01 + z * s.m11 + y * s.m21;
            i.m21 = f * s.m01 + d * s.m11 + c * s.m21;
            i.m02 = o * s.m02 + l * s.m12 + k * s.m22;
            i.m12 = A * s.m02 + z * s.m12 + y * s.m22;
            i.m22 = f * s.m02 + d * s.m12 + c * s.m22
        }
        okAllocator._mat3(s);
        okAllocator._quat(n);
        return i
    }, rotX: function (w, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), q = Math.sin(k);
        var p = this.m00;
        var v = this.m10;
        var h = this.m20;
        var o = this.m01;
        var u = this.m11;
        var e = this.m21;
        var n = this.m02;
        var t = this.m12;
        var d = this.m22;
        var m = this.m03;
        var s = this.m13;
        var a = this.m23;
        var l = (f ? this : this.clone());
        if (w == 2) {
            l.m10 = i * v - q * h;
            l.m20 = q * v + i * h;
            l.m11 = i * u - q * e;
            l.m21 = q * u + i * e;
            l.m12 = i * t - q * d;
            l.m22 = q * t + i * d
        } else {
            l.m01 = o * i + n * q;
            l.m11 = u * i + t * q;
            l.m21 = e * i + d * q;
            l.m02 = o * -q + n * i;
            l.m12 = u * -q + t * i;
            l.m22 = e * -q + d * i
        }
        return l
    }, rotY: function (a, n, p) {
        var d = n * Math.PI / 180;
        var k = Math.cos(d), o = Math.sin(d);
        var t = this.m00;
        var m = this.m10;
        var h = this.m20;
        var s = this.m01;
        var l = this.m11;
        var e = this.m21;
        var q = this.m02;
        var i = this.m12;
        var c = this.m22;
        var f = (p ? this : this.clone());
        if (a == 2) {
            f.m00 = k * t + o * h;
            f.m20 = -o * t + k * h;
            f.m01 = k * s + o * e;
            f.m21 = -o * s + k * e;
            f.m02 = k * q + o * c;
            f.m22 = -o * q + k * c
        } else {
            f.m00 = t * k + q * -o;
            f.m10 = m * k + i * -o;
            f.m20 = h * k + c * -o;
            f.m02 = t * o + q * k;
            f.m12 = m * o + i * k;
            f.m22 = h * o + c * k
        }
        return f
    }, rotZ: function (w, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), q = Math.sin(k);
        var p = this.m00;
        var v = this.m10;
        var h = this.m20;
        var o = this.m01;
        var u = this.m11;
        var e = this.m21;
        var n = this.m02;
        var t = this.m12;
        var d = this.m22;
        var m = this.m03;
        var s = this.m13;
        var a = this.m23;
        var l = (f ? this : this.clone());
        if (w == 2) {
            l.m00 = i * p + -q * v;
            l.m10 = q * p + i * v;
            l.m01 = i * o + -q * u;
            l.m11 = q * o + i * u;
            l.m02 = i * n + -q * t;
            l.m12 = q * n + i * t
        } else {
            l.m00 = p * i + o * q;
            l.m10 = v * i + u * q;
            l.m20 = h * i + e * q;
            l.m01 = p * -q + o * i;
            l.m11 = v * -q + u * i;
            l.m21 = h * -q + e * i
        }
        return l
    }, scale: function (a, h, e, d, l) {
        var k, i, f;
        if (e) {
            k = h;
            i = e;
            f = d
        } else {
            if (h.x) {
                k = h.x;
                e = h.y;
                d = h.z;
                l = e
            } else {
                k = h;
                e = h;
                d = h;
                l = e
            }
        }
        var c = (l ? this : this.clone());
        if (a == 2) {
            c.m00 *= k;
            c.m10 *= i;
            c.m20 *= f;
            c.m01 *= k;
            c.m11 *= i;
            c.m21 *= f;
            c.m02 *= k;
            c.m12 *= i;
            c.m22 *= f
        } else {
            c.m00 *= k;
            c.m10 *= k;
            c.m20 *= k;
            c.m01 *= i;
            c.m11 *= i;
            c.m21 *= i;
            c.m02 *= f;
            c.m12 *= f;
            c.m22 *= f
        }
        return c
    }, toMat4: function (a) {
        if (a == null) {
            a = okAllocator.mat4()
        }
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m30 = 0;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m31 = 0;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        a.m32 = 0;
        a.m03 = 0;
        a.m13 = 0;
        a.m23 = 0;
        a.m33 = 1;
        return a
    }, toMat43: function (a) {
        if (a == null) {
            a = okAllocator.mat43()
        }
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        a.m03 = 0;
        a.m13 = 0;
        a.m23 = 0;
        return a
    }, toQuat: function (a) {
        if (a == null) {
            a = okAllocator.quat()
        }
        var d = this.m00 + this.m11 + this.m22;
        if (d > 0) {
            var c = Math.sqrt(d + 1) * 2;
            a.s = 0.25 * c;
            a.x = (this.m21 - this.m12) / c;
            a.y = (this.m02 - this.m20) / c;
            a.z = (this.m10 - this.m01) / c
        } else {
            if ((this.m00 > this.m11) && (this.m00 > this.m22)) {
                var c = Math.sqrt(1 + this.m00 - this.m11 - this.m22) * 2;
                a.s = (this.m21 - this.m12) / c;
                a.x = 0.25 * c;
                a.y = (this.m01 + this.m10) / c;
                a.z = (this.m02 + this.m20) / c
            } else {
                if (this.m11 > this.m22) {
                    var c = Math.sqrt(1 + this.m11 - this.m00 - this.m22) * 2;
                    a.s = (this.m02 - this.m20) / c;
                    a.x = (this.m01 + this.m10) / c;
                    a.y = 0.25 * c;
                    a.z = (this.m12 + this.m21) / c
                } else {
                    var c = Math.sqrt(1 + this.m22 - this.m00 - this.m11) * 2;
                    a.s = (this.m10 - this.m01) / c;
                    a.x = (this.m02 + this.m20) / c;
                    a.y = (this.m12 + this.m21) / c;
                    a.z = 0.25 * c
                }
            }
        }
        return a
    }, toArray: function (a) {
        if (a == null) {
            a = okAllocator.array()
        }
        a.push(this.m00, this.m10, this.m20, this.m01, this.m11, this.m21, this.m02, this.m12, this.m22, this.m03, this.m13, this.m23);
        return a
    }
};

function okMat3Add(d, c) {
    var a = okAllocator.mat3();
    a.m00 = d.m00 + c.m00;
    a.m10 = d.m10 + c.m10;
    a.m20 = d.m20 + c.m20;
    a.m01 = d.m01 + c.m01;
    a.m11 = d.m11 + c.m11;
    a.m21 = d.m21 + c.m21;
    a.m02 = d.m02 + c.m02;
    a.m12 = d.m12 + c.m12;
    a.m22 = d.m22 + c.m22;
    return a
}

function okMat3AddVal(c, d) {
    var a = okAllocator.mat3();
    a.m00 = c.m00 + d;
    a.m10 = c.m10 + d;
    a.m20 = c.m20 + d;
    a.m01 = c.m01 + d;
    a.m11 = c.m11 + d;
    a.m21 = c.m21 + d;
    a.m02 = c.m02 + d;
    a.m12 = c.m12 + d;
    a.m22 = c.m22 + d;
    return a
}

function okValAddMat3(d, c) {
    var a = okAllocator.mat3();
    a.m00 = c.m00 + d;
    a.m10 = c.m10 + d;
    a.m20 = c.m20 + d;
    a.m01 = c.m01 + d;
    a.m11 = c.m11 + d;
    a.m21 = c.m21 + d;
    a.m02 = c.m02 + d;
    a.m12 = c.m12 + d;
    a.m22 = c.m22 + d;
    return a
}

function okMat3Sub(d, c) {
    var a = okAllocator.mat3();
    a.m00 = d.m00 - c.m00;
    a.m10 = d.m10 - c.m10;
    a.m20 = d.m20 - c.m20;
    a.m01 = d.m01 - c.m01;
    a.m11 = d.m11 - c.m11;
    a.m21 = d.m21 - c.m21;
    a.m02 = d.m02 - c.m02;
    a.m12 = d.m12 - c.m12;
    a.m22 = d.m22 - c.m22;
    return a
}

function okMat3SubVal(c, d) {
    var a = okAllocator.mat3();
    a.m00 = c.m00 - d;
    a.m10 = c.m10 - d;
    a.m20 = c.m20 - d;
    a.m01 = c.m01 - d;
    a.m11 = c.m11 - d;
    a.m21 = c.m21 - d;
    a.m02 = c.m02 - d;
    a.m12 = c.m12 - d;
    a.m22 = c.m22 - d;
    return a
}

function okValSubMat3(d, c) {
    var a = okAllocator.mat3();
    a.m00 = d - c.m00;
    a.m10 = d - c.m10;
    a.m20 = d - c.m20;
    a.m01 = d - c.m01;
    a.m11 = d - c.m11;
    a.m21 = d - c.m21;
    a.m02 = d - c.m02;
    a.m12 = d - c.m12;
    a.m22 = d - c.m22;
    return a
}

function okMat3Mul(d, c) {
    var a = okAllocator.mat3();
    a.m00 = d.m00 * c.m00 + d.m01 * c.m10 + d.m02 * c.m20;
    a.m10 = d.m10 * c.m00 + d.m11 * c.m10 + d.m12 * c.m20;
    a.m20 = d.m20 * c.m00 + d.m21 * c.m10 + d.m22 * c.m20;
    a.m01 = d.m00 * c.m01 + d.m01 * c.m11 + d.m02 * c.m21;
    a.m11 = d.m10 * c.m01 + d.m11 * c.m11 + d.m12 * c.m21;
    a.m21 = d.m20 * c.m01 + d.m21 * c.m11 + d.m22 * c.m21;
    a.m02 = d.m00 * c.m02 + d.m01 * c.m12 + d.m02 * c.m22;
    a.m12 = d.m10 * c.m02 + d.m11 * c.m12 + d.m12 * c.m22;
    a.m22 = d.m20 * c.m02 + d.m21 * c.m12 + d.m22 * c.m22;
    return a
}

function okMat3MulVal(c, d) {
    var a = okAllocator.mat3();
    a.m00 = c.m00 * d;
    a.m10 = c.m10 * d;
    a.m20 = c.m20 * d;
    a.m01 = c.m01 * d;
    a.m11 = c.m11 * d;
    a.m21 = c.m21 * d;
    a.m02 = c.m02 * d;
    a.m12 = c.m12 * d;
    a.m22 = c.m22 * d;
    return a
}

function okValMulMat3(d, c) {
    var a = okAllocator.mat3();
    a.m00 = c.m00 * d;
    a.m10 = c.m10 * d;
    a.m20 = c.m20 * d;
    a.m01 = c.m01 * d;
    a.m11 = c.m11 * d;
    a.m21 = c.m21 * d;
    a.m02 = c.m02 * d;
    a.m12 = c.m12 * d;
    a.m22 = c.m22 * d;
    return a
}

function okMat3MulVec3(c, a) {
    var d = okAllocator.vec3();
    d.x = c.m00 * a.x + c.m01 * a.y + c.m02 * a.z;
    d.y = c.m10 * a.x + c.m11 * a.y + c.m12 * a.z;
    d.z = c.m20 * a.x + c.m21 * a.y + c.m22 * a.z;
    return d
}

function okMat3Lerp(d, c, e) {
    var a = okAllocator.mat3();
    a.m00 = d.m00 * (1 - e) + c.m00 * e;
    a.m10 = d.m10 * (1 - e) + c.m10 * e;
    a.m20 = d.m20 * (1 - e) + c.m20 * e;
    a.m01 = d.m01 * (1 - e) + c.m01 * e;
    a.m11 = d.m11 * (1 - e) + c.m11 * e;
    a.m21 = d.m21 * (1 - e) + c.m21 * e;
    a.m02 = d.m02 * (1 - e) + c.m02 * e;
    a.m12 = d.m12 * (1 - e) + c.m12 * e;
    a.m22 = d.m22 * (1 - e) + c.m22 * e;
    return a
}

function okMat3Scale(e, d, c) {
    var f = okAllocator.vec3();
    if (d != null) {
        f.x = e;
        f.y = d;
        f.z = c
    } else {
        f.x = e.x;
        f.y = e.y;
        f.z = e.z
    }
    var a = okAllocator.mat3();
    a.m00 = f.x;
    a.m11 = f.y;
    a.m22 = f.z;
    okAllocator._vec3(f);
    return a
}

function okMat3RotX(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat3();
    c.m11 = a;
    c.m12 = -d;
    c.m21 = d;
    c.m22 = a;
    return c
}

function okMat3RotY(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat3();
    c.m00 = a;
    c.m02 = d;
    c.m20 = -d;
    c.m22 = a;
    return c
}

function okMat3RotZ(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat3();
    c.m00 = a;
    c.m01 = -d;
    c.m10 = d;
    c.m11 = a;
    return c
}

function okMat3Rot(k, n, m, l) {
    var d = k * Math.PI / 180;
    var h = okAllocator.vec3();
    if (m != null) {
        h.x = n;
        h.y = m;
        h.z = l
    } else {
        h.x = n.x;
        h.y = n.y;
        h.z = n.z
    }
    var i = h.normalize();
    okAllocator._vec3(h);
    var e = Math.cos(d * 0.5);
    var c = Math.sin(d * 0.5);
    var a = new okQuat();
    a.s = e;
    a.x = c * i.x;
    a.y = c * i.y;
    a.z = c * i.z;
    okAllocator._vec3(i);
    var f = okAllocator.mat3();
    a.toMat3(f);
    okAllocator._quat(a);
    return f
}

function okMat4(a) {
    this.m00 = ((a != null) ? a : 1);
    this.m10 = 0;
    this.m20 = 0;
    this.m30 = 0;
    this.m01 = 0;
    this.m11 = ((a != null) ? a : 1);
    this.m21 = 0;
    this.m31 = 0;
    this.m02 = 0;
    this.m12 = 0;
    this.m22 = ((a != null) ? a : 1);
    this.m32 = 0;
    this.m03 = 0;
    this.m13 = 0;
    this.m23 = 0;
    this.m33 = ((a != null) ? a : 1)
}

okMat4.prototype = {
    identity: function () {
        this.m00 = 1;
        this.m10 = 0;
        this.m20 = 0;
        this.m30 = 0;
        this.m01 = 0;
        this.m11 = 1;
        this.m21 = 0;
        this.m31 = 0;
        this.m02 = 0;
        this.m12 = 0;
        this.m22 = 1;
        this.m32 = 0;
        this.m03 = 0;
        this.m13 = 0;
        this.m23 = 0;
        this.m33 = 1
    }, clone: function (a) {
        var a = (a ? a : okAllocator.mat4());
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m30 = this.m30;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m31 = this.m31;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        a.m32 = this.m32;
        a.m03 = this.m03;
        a.m13 = this.m13;
        a.m23 = this.m23;
        a.m33 = this.m33;
        return a
    }, equal: function (a) {
        return okFloatEqual(this.m00, a.m00) && okFloatEqual(this.m10, a.m10) && okFloatEqual(this.m20, a.m20) && okFloatEqual(this.m30, a.m30) && okFloatEqual(this.m01, a.m01) && okFloatEqual(this.m11, a.m11) && okFloatEqual(this.m21, a.m21) && okFloatEqual(this.m31, a.m31) && okFloatEqual(this.m02, a.m02) && okFloatEqual(this.m12, a.m12) && okFloatEqual(this.m22, a.m22) && okFloatEqual(this.m32, a.m32) && okFloatEqual(this.m03, a.m03) && okFloatEqual(this.m13, a.m13) && okFloatEqual(this.m23, a.m23) && okFloatEqual(this.m33, a.m33)
    }, setColumn: function (d, c, a, f, e) {
        if (d == 0) {
            if (okIsNumber(c)) {
                this.m00 = c;
                this.m10 = a;
                this.m20 = f;
                this.m30 = (e ? e : this.m30)
            } else {
                this.m00 = c.x;
                this.m10 = c.y;
                this.m20 = c.z;
                this.m30 = (c.w ? c.w : this.m30)
            }
        } else {
            if (d == 1) {
                if (okIsNumber(c)) {
                    this.m01 = c;
                    this.m11 = a;
                    this.m21 = f;
                    this.m31 = (e ? e : this.m31)
                } else {
                    this.m01 = c.x;
                    this.m11 = c.y;
                    this.m21 = c.z;
                    this.m31 = (c.w ? c.w : this.m31)
                }
            } else {
                if (d == 2) {
                    if (okIsNumber(c)) {
                        this.m02 = c;
                        this.m12 = a;
                        this.m22 = f;
                        this.m32 = (e ? e : this.m32)
                    } else {
                        this.m02 = c.x;
                        this.m12 = c.y;
                        this.m22 = c.z;
                        this.m32 = (c.w ? c.w : this.m32)
                    }
                } else {
                    if (d == 3) {
                        if (okIsNumber(c)) {
                            this.m03 = c;
                            this.m13 = a;
                            this.m23 = f;
                            this.m33 = (e ? e : this.m33)
                        } else {
                            this.m03 = c.x;
                            this.m13 = c.y;
                            this.m23 = c.z;
                            this.m33 = (c.w ? c.w : this.m33)
                        }
                    }
                }
            }
        }
    }, getColumn: function (c) {
        var a = okAllocator.vec4();
        if (c == 0) {
            a.set(this.m00, this.m10, this.m20, this.m30)
        } else {
            if (c == 1) {
                a.set(this.m01, this.m11, this.m21, this.m31)
            } else {
                if (c == 2) {
                    a.set(this.m02, this.m12, this.m22, this.m32)
                } else {
                    if (c == 3) {
                        a.set(this.m03, this.m13, this.m23, this.m33)
                    }
                }
            }
        }
        return a
    }, det: function () {
        var u = this.m00, t = this.m01, q = this.m02, o = this.m03;
        var l = this.m10, i = this.m11, h = this.m12, f = this.m13;
        var e = this.m20, d = this.m21, c = this.m22, a = this.m23;
        var s = this.m30, p = this.m31, n = this.m32, m = this.m33;
        var k = u * i * c * m + u * h * a * p + u * f * d * n + t * l * a * n + t * h * e * m + t * f * c * s + q * l * d * m + q * i * a * s + q * f * e * p + o * l * c * p + o * i * e * n + o * h * d * s - u * i * a * n - u * h * d * m - u * f * c * p - t * l * c * m - t * h * a * s - t * f * e * n - q * l * a * p - q * i * e * m - q * f * d * s - o * l * d * n - o * i * c * s - o * h * e * p;
        return k
    }, inverse: function (k) {
        var h = this.m00, e = this.m01, c = this.m02, a = this.m03;
        var s = this.m10, q = this.m11, p = this.m12, o = this.m13;
        var x = this.m20, w = this.m21, v = this.m22, u = this.m23;
        var l = this.m30, i = this.m31, f = this.m32, d = this.m33;
        var n = (k ? this : okAllocator.mat4());
        n.m00 = q * v * d + p * u * i + o * w * f - q * u * f - p * w * d - o * v * i;
        n.m01 = e * u * f + c * w * d + a * v * i - e * v * d - c * u * i - a * w * f;
        n.m02 = e * p * d + c * o * i + a * q * f - e * o * f - c * q * d - a * p * i;
        n.m03 = e * o * v + c * q * u + a * p * w - e * p * u - c * o * w - a * q * v;
        n.m10 = s * u * f + p * x * d + o * v * l - s * v * d - p * u * l - o * x * f;
        n.m11 = h * v * d + c * u * l + a * x * f - h * u * f - c * x * d - a * v * l;
        n.m12 = h * o * f + c * s * d + a * p * l - h * p * d - c * o * l - a * s * f;
        n.m13 = h * p * u + c * o * x + a * s * v - h * o * v - c * s * u - a * p * x;
        n.m20 = s * w * d + q * u * l + o * x * i - s * u * i - q * x * d - o * w * l;
        n.m21 = h * u * i + e * x * d + a * w * l - h * w * d - e * u * l - a * x * i;
        n.m22 = h * q * d + e * o * l + a * s * i - h * o * i - e * s * d - a * q * l;
        n.m23 = h * o * w + e * s * u + a * q * x - h * q * u - e * o * x - a * s * w;
        n.m30 = s * v * i + q * x * f + p * w * l - s * w * f - q * v * l - p * x * i;
        n.m31 = h * w * f + e * v * l + c * x * i - h * v * i - e * x * f - c * w * l;
        n.m32 = h * p * i + e * s * f + c * q * l - h * q * f - e * p * l - c * s * i;
        n.m33 = h * q * v + e * p * x + c * s * w - h * p * w - e * s * v - c * q * x;
        var t = h * q * v * d + h * p * u * i + h * o * w * f + e * s * u * f + e * p * x * d + e * o * v * l + c * s * w * d + c * q * u * l + c * o * x * i + a * s * v * i + a * q * x * f + a * p * w * l - h * q * u * f - h * p * w * d - h * o * v * i - e * s * v * d - e * p * u * l - e * o * x * f - c * s * u * i - c * q * x * d - c * o * w * l - a * s * w * f - a * q * v * l - a * p * x * i;
        var m = 1 / t;
        n.m00 *= m;
        n.m01 *= m;
        n.m02 *= m;
        n.m03 *= m;
        n.m10 *= m;
        n.m11 *= m;
        n.m12 *= m;
        n.m13 *= m;
        n.m20 *= m;
        n.m21 *= m;
        n.m22 *= m;
        n.m23 *= m;
        n.m30 *= m;
        n.m31 *= m;
        n.m32 *= m;
        n.m33 *= m;
        return n
    }, transpose: function (c) {
        var a = (c ? this : okAllocator.mat4());
        a.m00 = this.m00;
        a.m10 = this.m01;
        a.m20 = this.m02;
        a.m30 = this.m03;
        a.m01 = this.m10;
        a.m11 = this.m11;
        a.m21 = this.m12;
        a.m31 = this.m13;
        a.m02 = this.m20;
        a.m12 = this.m21;
        a.m22 = this.m22;
        a.m32 = this.m23;
        a.m03 = this.m30;
        a.m13 = this.m31;
        a.m23 = this.m32;
        a.m33 = this.m33;
        return a
    }, translate: function (h, f, e, c, d) {
        // if (f.x) {
        //     d = e;
        //     e = f.y;
        //     c = f.z;
        //     f = f.x
        // } else {
        //     if (c == null) {
        //         d = e;
        //         e = f;
        //         c = f
        //     }
        // }
        var a = (d ? this : this.clone());
        if (h == 2) {
            a.m00 = this.m00 + f * this.m30;
            a.m10 = this.m10 + e * this.m30;
            a.m20 = this.m20 + c * this.m30;
            a.m01 = this.m01 + f * this.m31;
            a.m11 = this.m11 + e * this.m31;
            a.m21 = this.m21 + c * this.m31;
            a.m02 = this.m02 + f * this.m32;
            a.m12 = this.m12 + e * this.m32;
            a.m22 = this.m22 + c * this.m32;
            a.m03 = this.m03 + f * this.m33;
            a.m13 = this.m13 + e * this.m33;
            a.m23 = this.m23 + c * this.m33
        } else {
            a.m03 = this.m03 + this.m00 * f + this.m01 * e + this.m02 * c;
            a.m13 = this.m13 + this.m10 * f + this.m11 * e + this.m12 * c;
            a.m23 = this.m23 + this.m20 * f + this.m21 * e + this.m22 * c;
            a.m33 = this.m33 + this.m30 * f + this.m31 * e + this.m32 * c
        }
        return a
    }, rot: function (I, c, D, C, B, f) {
        var w = okAllocator.vec3();
        if (B != null) {
            w.x = D;
            w.y = C;
            w.z = B
        } else {
            w.x = D.x;
            w.y = D.y;
            w.z = D.z;
            f = C
        }
        w.normalize(true);
        var i = c * Math.PI / 180;
        var z = Math.cos(i * 0.5);
        var A = Math.sin(i * 0.5);
        var t = okAllocator.quat();
        t.s = z;
        t.x = A * w.x;
        t.y = A * w.y;
        t.z = A * w.z;
        okAllocator._vec3(w);
        var y = okAllocator.mat4();
        t.toMat4(y);
        var v = this.m00;
        var H = this.m10;
        var h = this.m20;
        var x = this.m30;
        var s = this.m01;
        var G = this.m11;
        var e = this.m21;
        var u = this.m31;
        var o = this.m02;
        var F = this.m12;
        var d = this.m22;
        var p = this.m32;
        var l = this.m03;
        var E = this.m13;
        var a = this.m23;
        var n = this.m33;
        var k = (f ? this : okAllocator.mat4());
        if (I == 2) {
            k.m00 = y.m00 * v + y.m01 * H + y.m02 * h + y.m03 * x;
            k.m10 = y.m10 * v + y.m11 * H + y.m12 * h + y.m13 * x;
            k.m20 = y.m20 * v + y.m21 * H + y.m22 * h + y.m23 * x;
            k.m30 = y.m30 * v + y.m31 * H + y.m32 * h + y.m33 * x;
            k.m01 = y.m00 * s + y.m01 * G + y.m02 * e + y.m03 * u;
            k.m11 = y.m10 * s + y.m11 * G + y.m12 * e + y.m13 * u;
            k.m21 = y.m20 * s + y.m21 * G + y.m22 * e + y.m23 * u;
            k.m31 = y.m30 * s + y.m31 * G + y.m32 * e + y.m33 * u;
            k.m02 = y.m00 * o + y.m01 * F + y.m02 * d + y.m03 * p;
            k.m12 = y.m10 * o + y.m11 * F + y.m12 * d + y.m13 * p;
            k.m22 = y.m20 * o + y.m21 * F + y.m22 * d + y.m23 * p;
            k.m32 = y.m30 * o + y.m31 * F + y.m32 * d + y.m33 * p;
            k.m03 = y.m00 * l + y.m01 * E + y.m02 * a + y.m03 * n;
            k.m13 = y.m10 * l + y.m11 * E + y.m12 * a + y.m13 * n;
            k.m23 = y.m20 * l + y.m21 * E + y.m22 * a + y.m23 * n;
            k.m33 = y.m30 * l + y.m31 * E + y.m32 * a + y.m33 * n
        } else {
            k.m00 = v * y.m00 + s * y.m10 + o * y.m20 + l * y.m30;
            k.m10 = H * y.m00 + G * y.m10 + F * y.m20 + E * y.m30;
            k.m20 = h * y.m00 + e * y.m10 + d * y.m20 + a * y.m30;
            k.m30 = x * y.m00 + u * y.m10 + p * y.m20 + n * y.m30;
            k.m01 = v * y.m01 + s * y.m11 + o * y.m21 + l * y.m31;
            k.m11 = H * y.m01 + G * y.m11 + F * y.m21 + E * y.m31;
            k.m21 = h * y.m01 + e * y.m11 + d * y.m21 + a * y.m31;
            k.m31 = x * y.m01 + u * y.m11 + p * y.m21 + n * y.m31;
            k.m02 = v * y.m02 + s * y.m12 + o * y.m22 + l * y.m32;
            k.m12 = H * y.m02 + G * y.m12 + F * y.m22 + E * y.m32;
            k.m22 = h * y.m02 + e * y.m12 + d * y.m22 + a * y.m32;
            k.m32 = x * y.m02 + u * y.m12 + p * y.m22 + n * y.m32;
            k.m03 = v * y.m03 + s * y.m13 + o * y.m23 + l * y.m33;
            k.m13 = H * y.m03 + G * y.m13 + F * y.m23 + E * y.m33;
            k.m23 = h * y.m03 + e * y.m13 + d * y.m23 + a * y.m33;
            k.m33 = x * y.m03 + u * y.m13 + p * y.m23 + n * y.m33
        }
        okAllocator._mat4(y);
        okAllocator._quat(t);
        return k
    }, rotX: function (A, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), v = Math.sin(k);
        var s = this.m00;
        var z = this.m10;
        var h = this.m20;
        var u = this.m30;
        var q = this.m01;
        var y = this.m11;
        var e = this.m21;
        var t = this.m31;
        var o = this.m02;
        var x = this.m12;
        var d = this.m22;
        var p = this.m32;
        var m = this.m03;
        var w = this.m13;
        var a = this.m23;
        var n = this.m33;
        var l = (f ? this : this.clone());
        if (A == 2) {
            l.m10 = i * z - v * h;
            l.m20 = v * z + i * h;
            l.m11 = i * y - v * e;
            l.m21 = v * y + i * e;
            l.m12 = i * x - v * d;
            l.m22 = v * x + i * d;
            l.m03 = m;
            l.m13 = i * w - v * a;
            l.m23 = v * w + i * a
        } else {
            l.m01 = q * i + o * v;
            l.m11 = y * i + x * v;
            l.m21 = e * i + d * v;
            l.m31 = t * i + p * v;
            l.m02 = q * -v + o * i;
            l.m12 = y * -v + x * i;
            l.m22 = e * -v + d * i;
            l.m32 = t * -v + p * i
        }
        return l
    }, rotY: function (A, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), v = Math.sin(k);
        var s = this.m00;
        var z = this.m10;
        var h = this.m20;
        var u = this.m30;
        var q = this.m01;
        var y = this.m11;
        var e = this.m21;
        var t = this.m31;
        var o = this.m02;
        var x = this.m12;
        var d = this.m22;
        var p = this.m32;
        var m = this.m03;
        var w = this.m13;
        var a = this.m23;
        var n = this.m33;
        var l = (f ? this : this.clone());
        if (A == 2) {
            l.m00 = i * s + v * h;
            l.m20 = -v * s + i * h;
            l.m01 = i * q + v * e;
            l.m21 = -v * q + i * e;
            l.m02 = i * o + v * d;
            l.m22 = -v * o + i * d;
            l.m03 = i * m + v * a;
            l.m23 = -v * m + i * a
        } else {
            l.m00 = s * i + o * -v;
            l.m10 = z * i + x * -v;
            l.m20 = h * i + d * -v;
            l.m30 = u * i + p * -v;
            l.m02 = s * v + o * i;
            l.m12 = z * v + x * i;
            l.m22 = h * v + d * i;
            l.m32 = u * v + p * i
        }
        return l
    }, rotZ: function (A, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), v = Math.sin(k);
        var s = this.m00;
        var z = this.m10;
        var h = this.m20;
        var u = this.m30;
        var q = this.m01;
        var y = this.m11;
        var e = this.m21;
        var t = this.m31;
        var o = this.m02;
        var x = this.m12;
        var d = this.m22;
        var p = this.m32;
        var m = this.m03;
        var w = this.m13;
        var a = this.m23;
        var n = this.m33;
        var l = (f ? this : this.clone());
        if (A == 2) {
            l.m00 = i * s + -v * z;
            l.m10 = v * s + i * z;
            l.m01 = i * q + -v * y;
            l.m11 = v * q + i * y;
            l.m02 = i * o + -v * x;
            l.m12 = v * o + i * x;
            l.m03 = i * m + -v * w;
            l.m13 = v * m + i * w
        } else {
            l.m00 = s * i + q * v;
            l.m10 = z * i + y * v;
            l.m20 = h * i + e * v;
            l.m30 = u * i + t * v;
            l.m01 = s * -v + q * i;
            l.m11 = z * -v + y * i;
            l.m21 = h * -v + e * i;
            l.m31 = u * -v + t * i
        }
        return l
    }, scale: function (a, h, e, d, l) {
        var k, i, f;
        if (d) {
            k = h;
            i = e;
            f = d
        } else {
            if (h.x) {
                k = h.x;
                e = h.y;
                d = h.z;
                l = e
            } else {
                k = h;
                e = h;
                d = h;
                l = e
            }
        }
        var c = (l ? this : this.clone());
        if (a == 2) {
            c.m00 *= k;
            c.m10 *= i;
            c.m20 *= f;
            c.m01 *= k;
            c.m11 *= i;
            c.m21 *= f;
            c.m02 *= k;
            c.m12 *= i;
            c.m22 *= f;
            c.m03 *= k;
            c.m13 *= i;
            c.m23 *= f
        } else {
            c.m00 *= k;
            c.m10 *= k;
            c.m20 *= k;
            c.m30 *= k;
            c.m01 *= i;
            c.m11 *= i;
            c.m21 *= i;
            c.m31 *= i;
            c.m02 *= f;
            c.m12 *= f;
            c.m22 *= f;
            c.m32 *= f
        }
        return c
    }, toMat3: function (a) {
        if (a == null) {
            a = okAllocator.mat3()
        }
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        return a
    }, toMat43: function (a) {
        if (a == null) {
            a = okAllocator.mat43()
        }
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        a.m03 = this.m03;
        a.m13 = this.m13;
        a.m23 = this.m23;
        return a
    }, toQuat: function (a) {
        if (a == null) {
            a = okAllocator.quat()
        }
        var d = this.m00 + this.m11 + this.m22;
        if (d > 0) {
            var c = Math.sqrt(d + 1) * 2;
            a.s = 0.25 * c;
            a.x = (this.m21 - this.m12) / c;
            a.y = (this.m02 - this.m20) / c;
            a.z = (this.m10 - this.m01) / c
        } else {
            if ((this.m00 > this.m11) && (this.m00 > this.m22)) {
                var c = Math.sqrt(1 + this.m00 - this.m11 - this.m22) * 2;
                a.s = (this.m21 - this.m12) / c;
                a.x = 0.25 * c;
                a.y = (this.m01 + this.m10) / c;
                a.z = (this.m02 + this.m20) / c
            } else {
                if (this.m11 > this.m22) {
                    var c = Math.sqrt(1 + this.m11 - this.m00 - this.m22) * 2;
                    a.s = (this.m02 - this.m20) / c;
                    a.x = (this.m01 + this.m10) / c;
                    a.y = 0.25 * c;
                    a.z = (this.m12 + this.m21) / c
                } else {
                    var c = Math.sqrt(1 + this.m22 - this.m00 - this.m11) * 2;
                    a.s = (this.m10 - this.m01) / c;
                    a.x = (this.m02 + this.m20) / c;
                    a.y = (this.m12 + this.m21) / c;
                    a.z = 0.25 * c
                }
            }
        }
        return a
    }, toArray: function (a) {
        if (a == null) {
            a = okAllocator.array()
        }
        a.push(this.m00, this.m10, this.m20, this.m30, this.m01, this.m11, this.m21, this.m31, this.m02, this.m12, this.m22, this.m32, this.m03, this.m13, this.m23, this.m33);
        return a
    }
};

function okMat4Add(d, c) {
    var a = okAllocator.mat4();
    a.m00 = d.m00 + c.m00;
    a.m10 = d.m10 + c.m10;
    a.m20 = d.m20 + c.m20;
    a.m30 = d.m30 + c.m30;
    a.m01 = d.m01 + c.m01;
    a.m11 = d.m11 + c.m11;
    a.m21 = d.m21 + c.m21;
    a.m31 = d.m31 + c.m31;
    a.m02 = d.m02 + c.m02;
    a.m12 = d.m12 + c.m12;
    a.m22 = d.m22 + c.m22;
    a.m32 = d.m32 + c.m32;
    a.m03 = d.m03 + c.m03;
    a.m13 = d.m13 + c.m13;
    a.m23 = d.m23 + c.m23;
    a.m33 = d.m33 + c.m33;
    return a
}

function okMat4AddVal(c, d) {
    var a = okAllocator.mat4();
    a.m00 = c.m00 + d;
    a.m10 = c.m10 + d;
    a.m20 = c.m20 + d;
    a.m30 = c.m30 + d;
    a.m01 = c.m01 + d;
    a.m11 = c.m11 + d;
    a.m21 = c.m21 + d;
    a.m31 = c.m31 + d;
    a.m02 = c.m02 + d;
    a.m12 = c.m12 + d;
    a.m22 = c.m22 + d;
    a.m32 = c.m32 + d;
    a.m03 = c.m03 + d;
    a.m13 = c.m13 + d;
    a.m23 = c.m23 + d;
    a.m33 = c.m33 + d;
    return a
}

function okValAddMat4(d, c) {
    var a = okAllocator.mat4();
    a.m00 = c.m00 + d;
    a.m10 = c.m10 + d;
    a.m20 = c.m20 + d;
    a.m30 = c.m30 + d;
    a.m01 = c.m01 + d;
    a.m11 = c.m11 + d;
    a.m21 = c.m21 + d;
    a.m31 = c.m31 + d;
    a.m02 = c.m02 + d;
    a.m12 = c.m12 + d;
    a.m22 = c.m22 + d;
    a.m32 = c.m32 + d;
    a.m03 = c.m03 + d;
    a.m13 = c.m13 + d;
    a.m23 = c.m23 + d;
    a.m33 = c.m33 + d;
    return a
}

function okMat4Sub(d, c) {
    var a = okAllocator.mat4();
    a.m00 = d.m00 - c.m00;
    a.m10 = d.m10 - c.m10;
    a.m20 = d.m20 - c.m20;
    a.m30 = d.m30 - c.m30;
    a.m01 = d.m01 - c.m01;
    a.m11 = d.m11 - c.m11;
    a.m21 = d.m21 - c.m21;
    a.m31 = d.m31 - c.m31;
    a.m02 = d.m02 - c.m02;
    a.m12 = d.m12 - c.m12;
    a.m22 = d.m22 - c.m22;
    a.m32 = d.m32 - c.m32;
    a.m03 = d.m03 - c.m03;
    a.m13 = d.m13 - c.m13;
    a.m23 = d.m23 - c.m23;
    a.m33 = d.m33 - c.m33;
    return a
}

function okMat4SubVal(c, d) {
    var a = okAllocator.mat4();
    a.m00 = c.m00 - d;
    a.m10 = c.m10 - d;
    a.m20 = c.m20 - d;
    a.m30 = c.m30 - d;
    a.m01 = c.m01 - d;
    a.m11 = c.m11 - d;
    a.m21 = c.m21 - d;
    a.m31 = c.m31 - d;
    a.m02 = c.m02 - d;
    a.m12 = c.m12 - d;
    a.m22 = c.m22 - d;
    a.m32 = c.m32 - d;
    a.m03 = c.m03 - d;
    a.m13 = c.m13 - d;
    a.m23 = c.m23 - d;
    a.m33 = c.m33 - d;
    return a
}

function okValSubMat4(d, c) {
    var a = okAllocator.mat4();
    a.m00 = d - c.m00;
    a.m10 = d - c.m10;
    a.m20 = d - c.m20;
    a.m30 = d - c.m30;
    a.m01 = d - c.m01;
    a.m11 = d - c.m11;
    a.m21 = d - c.m21;
    a.m31 = d - c.m31;
    a.m02 = d - c.m02;
    a.m12 = d - c.m12;
    a.m22 = d - c.m22;
    a.m32 = d - c.m32;
    a.m03 = d - c.m03;
    a.m13 = d - c.m13;
    a.m23 = d - c.m23;
    a.m33 = d - c.m33;
    return a
}

function okMat4Mul(d, c) {
    var a = okAllocator.mat4();
    a.m00 = d.m00 * c.m00 + d.m01 * c.m10 + d.m02 * c.m20 + d.m03 * c.m30;
    a.m10 = d.m10 * c.m00 + d.m11 * c.m10 + d.m12 * c.m20 + d.m13 * c.m30;
    a.m20 = d.m20 * c.m00 + d.m21 * c.m10 + d.m22 * c.m20 + d.m23 * c.m30;
    a.m30 = d.m30 * c.m00 + d.m31 * c.m10 + d.m32 * c.m20 + d.m33 * c.m30;
    a.m01 = d.m00 * c.m01 + d.m01 * c.m11 + d.m02 * c.m21 + d.m03 * c.m31;
    a.m11 = d.m10 * c.m01 + d.m11 * c.m11 + d.m12 * c.m21 + d.m13 * c.m31;
    a.m21 = d.m20 * c.m01 + d.m21 * c.m11 + d.m22 * c.m21 + d.m23 * c.m31;
    a.m31 = d.m30 * c.m01 + d.m31 * c.m11 + d.m32 * c.m21 + d.m33 * c.m31;
    a.m02 = d.m00 * c.m02 + d.m01 * c.m12 + d.m02 * c.m22 + d.m03 * c.m32;
    a.m12 = d.m10 * c.m02 + d.m11 * c.m12 + d.m12 * c.m22 + d.m13 * c.m32;
    a.m22 = d.m20 * c.m02 + d.m21 * c.m12 + d.m22 * c.m22 + d.m23 * c.m32;
    a.m32 = d.m30 * c.m02 + d.m31 * c.m12 + d.m32 * c.m22 + d.m33 * c.m32;
    a.m03 = d.m00 * c.m03 + d.m01 * c.m13 + d.m02 * c.m23 + d.m03 * c.m33;
    a.m13 = d.m10 * c.m03 + d.m11 * c.m13 + d.m12 * c.m23 + d.m13 * c.m33;
    a.m23 = d.m20 * c.m03 + d.m21 * c.m13 + d.m22 * c.m23 + d.m23 * c.m33;
    a.m33 = d.m30 * c.m03 + d.m31 * c.m13 + d.m32 * c.m23 + d.m33 * c.m33;
    return a
}

function okMat4MulVal(c, d) {
    var a = okAllocator.mat4();
    a.m00 = c.m00 * d;
    a.m10 = c.m10 * d;
    a.m20 = c.m20 * d;
    a.m30 = c.m30 * d;
    a.m01 = c.m01 * d;
    a.m11 = c.m11 * d;
    a.m21 = c.m21 * d;
    a.m31 = c.m31 * d;
    a.m02 = c.m02 * d;
    a.m12 = c.m12 * d;
    a.m22 = c.m22 * d;
    a.m32 = c.m32 * d;
    a.m03 = c.m03 * d;
    a.m13 = c.m13 * d;
    a.m23 = c.m23 * d;
    a.m33 = c.m33 * d;
    return a
}

function okValMulMat4(d, c) {
    var a = okAllocator.mat4();
    a.m00 = c.m00 * d;
    a.m10 = c.m10 * d;
    a.m20 = c.m20 * d;
    a.m30 = c.m30 * d;
    a.m01 = c.m01 * d;
    a.m11 = c.m11 * d;
    a.m21 = c.m21 * d;
    a.m31 = c.m31 * d;
    a.m02 = c.m02 * d;
    a.m12 = c.m12 * d;
    a.m22 = c.m22 * d;
    a.m32 = c.m32 * d;
    a.m03 = c.m03 * d;
    a.m13 = c.m13 * d;
    a.m23 = c.m23 * d;
    a.m33 = c.m33 * d;
    return a
}

function okMat4MulVec4(c, a) {
    var d = okAllocator.vec4();
    d.x = c.m00 * a.x + c.m01 * a.y + c.m02 * a.z + c.m03 * a.w;
    d.y = c.m10 * a.x + c.m11 * a.y + c.m12 * a.z + c.m13 * a.w;
    d.z = c.m20 * a.x + c.m21 * a.y + c.m22 * a.z + c.m23 * a.w;
    d.w = c.m30 * a.x + c.m31 * a.y + c.m32 * a.z + c.m33 * a.w;
    return d
}

function okMat4MulVec3(d, c) {
    var a = okAllocator.vec4();
    a.x = d.m00 * c.x + d.m01 * c.y + d.m02 * c.z + d.m03;
    a.y = d.m10 * c.x + d.m11 * c.y + d.m12 * c.z + d.m13;
    a.z = d.m20 * c.x + d.m21 * c.y + d.m22 * c.z + d.m23;
    a.w = d.m30 * c.x + d.m31 * c.y + d.m32 * c.z + d.m33;
    var e = 1 / a.w;
    var f = okAllocator.vec3();
    f.x = a.x * e;
    f.y = a.y * e;
    f.z = a.z * e;
    return f
}

function okMat4Lerp(d, c, e) {
    var a = okAllocator.mat4();
    a.m00 = d.m00 * (1 - e) + c.m00 * e;
    a.m10 = d.m10 * (1 - e) + c.m10 * e;
    a.m20 = d.m20 * (1 - e) + c.m20 * e;
    a.m30 = d.m30 * (1 - e) + c.m30 * e;
    a.m01 = d.m01 * (1 - e) + c.m01 * e;
    a.m11 = d.m11 * (1 - e) + c.m11 * e;
    a.m21 = d.m21 * (1 - e) + c.m21 * e;
    a.m31 = d.m31 * (1 - e) + c.m31 * e;
    a.m02 = d.m02 * (1 - e) + c.m02 * e;
    a.m12 = d.m12 * (1 - e) + c.m12 * e;
    a.m22 = d.m22 * (1 - e) + c.m22 * e;
    a.m32 = d.m32 * (1 - e) + c.m32 * e;
    a.m03 = d.m03 * (1 - e) + c.m03 * e;
    a.m13 = d.m13 * (1 - e) + c.m13 * e;
    a.m23 = d.m23 * (1 - e) + c.m23 * e;
    a.m33 = d.m33 * (1 - e) + c.m33 * e;
    return a
}

export const okMat4Trans = (f, e, d) =>{
    var c = okAllocator.vec3();
    if (e != null) {
        c.x = f;
        c.y = e;
        c.z = d
    } else {
        c.x = f.x;
        c.y = f.y;
        c.z = f.z
    }
    var a = okAllocator.mat4();
    a.setColumn(3, c.x, c.y, c.z, 1);
    okAllocator._vec3(c);
    return a
}

function okMat4Scale(e, d, c) {
    var f = okAllocator.vec3();
    if (d != null) {
        f.x = e;
        f.y = d;
        f.z = c
    } else {
        f.x = e.x;
        f.y = e.y;
        f.z = e.z
    }
    var a = okAllocator.mat4();
    a.m00 = f.x;
    a.m11 = f.y;
    a.m22 = f.z;
    okAllocator._vec3(f);
    return a
}

function okMat4Rot(k, n, m, l) {
    var h = okAllocator.vec3();
    if (m != null) {
        h.x = n;
        h.y = m;
        h.z = l
    } else {
        h.x = n.x;
        h.y = n.y;
        h.z = n.z
    }
    var i = h.normalize();
    okAllocator._vec3(h);
    var d = k * Math.PI / 180;
    var e = Math.cos(d * 0.5);
    var c = Math.sin(d * 0.5);
    var a = new okQuat();
    a.s = e;
    a.x = c * i.x;
    a.y = c * i.y;
    a.z = c * i.z;
    okAllocator._vec3(i);
    var f = okAllocator.mat4();
    a.toMat4(f);
    return f
}

function okMat4RotX(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat4();
    c.m11 = a;
    c.m12 = -d;
    c.m21 = d;
    c.m22 = a;
    return c
}

function okMat4RotY(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat4();
    c.m00 = a;
    c.m02 = d;
    c.m20 = -d;
    c.m22 = a;
    return c
}

function okMat4RotZ(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat4();
    c.m00 = a;
    c.m01 = -d;
    c.m10 = d;
    c.m11 = a;
    return c
}

export const okMat4Proj = (c, k, h, i)=> {
    var f = c * Math.PI / 360;
    var a = i - h;
    var e = Math.cos(f) / Math.sin(f);
    var d = okAllocator.mat4();
    d.m00 = e / k;
    d.m11 = e;
    d.m22 = -(i + h) / a;
    d.m32 = -1;
    d.m23 = -2 * h * i / a;
    d.m33 = 0;
    return d
}

function okMat4Ortho(a, h, e, d, f, i) {
    var c = okAllocator.mat4();
    c.m00 = 2 / (h - a);
    c.m11 = 2 / (e - d);
    c.m22 = -2 / (i - f);
    c.m03 = -(h + a) / (h - a);
    c.m13 = -(e + d) / (e - d);
    c.m23 = -(i + f) / (i - f);
    return c
}

function okMat43(a) {
    this.m00 = ((a != null) ? a : 1);
    this.m10 = 0;
    this.m20 = 0;
    this.m01 = 0;
    this.m11 = ((a != null) ? a : 1);
    this.m21 = 0;
    this.m02 = 0;
    this.m12 = 0;
    this.m22 = ((a != null) ? a : 1);
    this.m03 = 0;
    this.m13 = 0;
    this.m23 = 0
}

okMat43.prototype = {
    identity: function () {
        this.m00 = 1;
        this.m10 = 0;
        this.m20 = 0;
        this.m01 = 0;
        this.m11 = 1;
        this.m21 = 0;
        this.m02 = 0;
        this.m12 = 0;
        this.m22 = 1;
        this.m03 = 0;
        this.m13 = 0;
        this.m23 = 0
    }, clone: function (a) {
        var a = (a ? a : okAllocator.mat43());
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        a.m03 = this.m03;
        a.m13 = this.m13;
        a.m23 = this.m23;
        return a
    }, equal: function (a) {
        return okFloatEqual(this.m00, a.m00) && okFloatEqual(this.m10, a.m10) && okFloatEqual(this.m20, a.m20) && okFloatEqual(this.m01, a.m01) && okFloatEqual(this.m11, a.m11) && okFloatEqual(this.m21, a.m21) && okFloatEqual(this.m02, a.m02) && okFloatEqual(this.m12, a.m12) && okFloatEqual(this.m22, a.m22) && okFloatEqual(this.m03, a.m03) && okFloatEqual(this.m13, a.m13) && okFloatEqual(this.m23, a.m23)
    }, setColumn: function (d, c, a, e) {
        if (d == 0) {
            if (okIsNumber(c)) {
                this.m00 = c;
                this.m10 = a;
                this.m20 = e
            } else {
                this.m00 = c.x;
                this.m10 = c.y;
                this.m20 = c.z
            }
        } else {
            if (d == 1) {
                if (okIsNumber(c)) {
                    this.m01 = c;
                    this.m11 = a;
                    this.m21 = e
                } else {
                    this.m01 = c.x;
                    this.m11 = c.y;
                    this.m21 = c.z
                }
            } else {
                if (d == 2) {
                    if (okIsNumber(c)) {
                        this.m02 = c;
                        this.m12 = a;
                        this.m22 = e
                    } else {
                        this.m02 = c.x;
                        this.m12 = c.y;
                        this.m22 = c.z
                    }
                } else {
                    if (d == 3) {
                        if (okIsNumber(c)) {
                            this.m03 = c;
                            this.m13 = a;
                            this.m23 = e
                        } else {
                            this.m03 = c.x;
                            this.m13 = c.y;
                            this.m23 = c.z
                        }
                    }
                }
            }
        }
    }, getColumn: function (c) {
        var a = okAllocator.vec3();
        if (c == 0) {
            a.set(this.m00, this.m10, this.m20)
        } else {
            if (c == 1) {
                a.set(this.m01, this.m11, this.m21)
            } else {
                if (c == 2) {
                    a.set(this.m02, this.m12, this.m22)
                } else {
                    if (c == 3) {
                        a.set(this.m03, this.m13, this.m23)
                    }
                }
            }
        }
        return a
    }, det: function () {
        var p = this.m00, o = this.m01, n = this.m02, m = this.m03;
        var l = this.m10, i = this.m11, h = this.m12, f = this.m13;
        var e = this.m20, d = this.m21, c = this.m22, a = this.m23;
        var k = p * i * c + o * h * e + n * l * d - p * h * d - o * l * c - n * i * e;
        return k
    }, inverse: function (o) {
        var s = this.m00, q = this.m01, p = this.m02, n = this.m03;
        var l = this.m10, k = this.m11, i = this.m12, h = this.m13;
        var f = this.m20, e = this.m21, d = this.m22, c = this.m23;
        var a = (o ? this : okAllocator.mat43());
        a.m00 = k * d - i * e;
        a.m01 = p * e - q * d;
        a.m02 = q * i - p * k;
        a.m03 = q * h * d + p * k * c + n * i * e - q * i * c - p * h * e - n * k * d;
        a.m10 = i * f - l * d;
        a.m11 = s * d - p * f;
        a.m12 = p * l - s * i;
        a.m13 = s * i * c + p * h * f + n * l * d - s * h * d - p * l * c - n * i * f;
        a.m20 = l * e - k * f;
        a.m21 = q * f - s * e;
        a.m22 = s * k - q * l;
        a.m23 = s * h * e + q * l * c + n * k * f - s * k * c - q * h * f - n * l * e;
        var t = s * k * d + q * i * f + p * l * e - s * i * e - q * l * d - p * k * f;
        var m = 1 / t;
        a.m00 *= m;
        a.m01 *= m;
        a.m02 *= m;
        a.m03 *= m;
        a.m10 *= m;
        a.m11 *= m;
        a.m12 *= m;
        a.m13 *= m;
        a.m20 *= m;
        a.m21 *= m;
        a.m22 *= m;
        a.m23 *= m;
        return a
    }, transpose: function (c) {
        var a = (c ? this : okAllocator.mat43());
        a.m00 = this.m00;
        a.m10 = this.m01;
        a.m20 = this.m02;
        a.m01 = this.m10;
        a.m11 = this.m11;
        a.m21 = this.m12;
        a.m02 = this.m20;
        a.m12 = this.m21;
        a.m22 = this.m22;
        a.m03 = 0;
        a.m13 = 0;
        a.m23 = 0;
        return a
    }, translate: function (h, f, e, c, d) {
        if (f.x) {
            d = e;
            c = f.z;
            e = f.y;
            f = f.x
        } else {
            if (c == null) {
                d = e;
                c = f;
                e = f
            }
        }
        var a = this;
        if (d) {
            a = this.clone()
        }
        if (h == 2) {
            a.m03 += f;
            a.m13 += e;
            a.m23 += c
        } else {
            a.m03 += this.m00 * f + this.m01 * e + this.m02 * c;
            a.m13 += this.m10 * f + this.m11 * e + this.m12 * c;
            a.m23 += this.m20 * f + this.m21 * e + this.m22 * c
        }
        return a
    }, rot: function (E, c, z, y, x, f) {
        var t = okAllocator.vec3();
        if (x != null) {
            t.x = z;
            t.y = y;
            t.z = x
        } else {
            t.x = z.x;
            t.y = z.y;
            t.z = z.z;
            f = y
        }
        t.normalize(true);
        var i = c * Math.PI / 180;
        var v = Math.cos(i * 0.5);
        var w = Math.sin(i * 0.5);
        var p = okAllocator.quat();
        p.s = v;
        p.x = w * t.x;
        p.y = w * t.y;
        p.z = w * t.z;
        okAllocator._vec3(t);
        var u = okAllocator.mat4();
        p.toMat4(u);
        var s = this.m00;
        var D = this.m10;
        var h = this.m20;
        var o = this.m01;
        var C = this.m11;
        var e = this.m21;
        var n = this.m02;
        var B = this.m12;
        var d = this.m22;
        var l = this.m03;
        var A = this.m13;
        var a = this.m23;
        var k = (f ? this : okAllocator.mat43());
        if (E == 2) {
            k.m00 = u.m00 * s + u.m01 * D + u.m02 * h;
            k.m10 = u.m10 * s + u.m11 * D + u.m12 * h;
            k.m20 = u.m20 * s + u.m21 * D + u.m22 * h;
            k.m01 = u.m00 * o + u.m01 * C + u.m02 * e;
            k.m11 = u.m10 * o + u.m11 * C + u.m12 * e;
            k.m21 = u.m20 * o + u.m21 * C + u.m22 * e;
            k.m02 = u.m00 * n + u.m01 * B + u.m02 * d;
            k.m12 = u.m10 * n + u.m11 * B + u.m12 * d;
            k.m22 = u.m20 * n + u.m21 * B + u.m22 * d;
            k.m03 = u.m00 * l + u.m01 * A + u.m02 * a + u.m03;
            k.m13 = u.m10 * l + u.m11 * A + u.m12 * a + u.m13;
            k.m23 = u.m20 * l + u.m21 * A + u.m22 * a + u.m23
        } else {
            k.m00 = s * u.m00 + o * u.m10 + n * u.m20;
            k.m10 = D * u.m00 + C * u.m10 + B * u.m20;
            k.m20 = h * u.m00 + e * u.m10 + d * u.m20;
            k.m01 = s * u.m01 + o * u.m11 + n * u.m21;
            k.m11 = D * u.m01 + C * u.m11 + B * u.m21;
            k.m21 = h * u.m01 + e * u.m11 + d * u.m21;
            k.m02 = s * u.m02 + o * u.m12 + n * u.m22;
            k.m12 = D * u.m02 + C * u.m12 + B * u.m22;
            k.m22 = h * u.m02 + e * u.m12 + d * u.m22;
            k.m03 = s * u.m03 + o * u.m13 + n * u.m23 + l;
            k.m13 = D * u.m03 + C * u.m13 + B * u.m23 + A;
            k.m23 = h * u.m03 + e * u.m13 + d * u.m23 + a
        }
        okAllocator._mat4(u);
        okAllocator._quat(p);
        return k
    }, rotX: function (w, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), q = Math.sin(k);
        var p = this.m00;
        var v = this.m10;
        var h = this.m20;
        var o = this.m01;
        var u = this.m11;
        var e = this.m21;
        var n = this.m02;
        var t = this.m12;
        var d = this.m22;
        var m = this.m03;
        var s = this.m13;
        var a = this.m23;
        var l = (f ? this : this.clone());
        if (w == 2) {
            l.m10 = i * v - q * h;
            l.m20 = q * v + i * h;
            l.m11 = i * u - q * e;
            l.m21 = q * u + i * e;
            l.m12 = i * t - q * d;
            l.m22 = q * t + i * d;
            l.m03 = m;
            l.m13 = i * s - q * a;
            l.m23 = q * s + i * a
        } else {
            l.m01 = o * i + n * q;
            l.m11 = u * i + t * q;
            l.m21 = e * i + d * q;
            l.m02 = o * -q + n * i;
            l.m12 = u * -q + t * i;
            l.m22 = e * -q + d * i
        }
        return l
    }, rotY: function (w, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), q = Math.sin(k);
        var p = this.m00;
        var v = this.m10;
        var h = this.m20;
        var o = this.m01;
        var u = this.m11;
        var e = this.m21;
        var n = this.m02;
        var t = this.m12;
        var d = this.m22;
        var m = this.m03;
        var s = this.m13;
        var a = this.m23;
        var l = (f ? this : this.clone());
        if (w == 2) {
            l.m00 = i * p + q * h;
            l.m20 = -q * p + i * h;
            l.m01 = i * o + q * e;
            l.m21 = -q * o + i * e;
            l.m02 = i * n + q * d;
            l.m22 = -q * n + i * d;
            l.m03 = i * m + q * a;
            l.m23 = -q * m + i * a
        } else {
            l.m00 = p * i + n * -q;
            l.m10 = v * i + t * -q;
            l.m20 = h * i + d * -q;
            l.m02 = p * q + n * i;
            l.m12 = v * q + t * i;
            l.m22 = h * q + d * i
        }
        return l
    }, rotZ: function (w, c, f) {
        var k = c * Math.PI / 180;
        var i = Math.cos(k), q = Math.sin(k);
        var p = this.m00;
        var v = this.m10;
        var h = this.m20;
        var o = this.m01;
        var u = this.m11;
        var e = this.m21;
        var n = this.m02;
        var t = this.m12;
        var d = this.m22;
        var m = this.m03;
        var s = this.m13;
        var a = this.m23;
        var l = (f ? this : this.clone());
        if (w == 2) {
            l.m00 = i * p + -q * v;
            l.m10 = q * p + i * v;
            l.m01 = i * o + -q * u;
            l.m11 = q * o + i * u;
            l.m02 = i * n + -q * t;
            l.m12 = q * n + i * t;
            l.m03 = i * m + -q * s;
            l.m13 = q * m + i * s
        } else {
            l.m00 = p * i + o * q;
            l.m10 = v * i + u * q;
            l.m20 = h * i + e * q;
            l.m01 = p * -q + o * i;
            l.m11 = v * -q + u * i;
            l.m21 = h * -q + e * i
        }
        return l
    }, scale: function (a, h, e, d, l) {
        var k, i, f;
        if (e) {
            k = h;
            i = e;
            f = d
        } else {
            if (h.x) {
                k = h.x;
                e = h.y;
                d = h.z;
                l = e
            } else {
                k = h;
                e = h;
                d = h;
                l = e
            }
        }
        var c = (l ? this : this.clone());
        if (a == 2) {
            c.m00 *= k;
            c.m10 *= i;
            c.m20 *= f;
            c.m01 *= k;
            c.m11 *= i;
            c.m21 *= f;
            c.m02 *= k;
            c.m12 *= i;
            c.m22 *= f;
            c.m03 *= k;
            c.m13 *= i;
            c.m23 *= f
        } else {
            c.m00 *= k;
            c.m10 *= k;
            c.m20 *= k;
            c.m01 *= i;
            c.m11 *= i;
            c.m21 *= i;
            c.m02 *= f;
            c.m12 *= f;
            c.m22 *= f
        }
        return c
    }, toMat3: function (a) {
        if (a == null) {
            a = okAllocator.mat3()
        }
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m30 = 0;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m31 = 0;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        a.m32 = 0;
        return a
    }, toMat4: function (a) {
        if (a == null) {
            a = okAllocator.mat4()
        }
        a.m00 = this.m00;
        a.m10 = this.m10;
        a.m20 = this.m20;
        a.m30 = 0;
        a.m01 = this.m01;
        a.m11 = this.m11;
        a.m21 = this.m21;
        a.m31 = 0;
        a.m02 = this.m02;
        a.m12 = this.m12;
        a.m22 = this.m22;
        a.m32 = 0;
        a.m03 = this.m03;
        a.m13 = this.m13;
        a.m23 = this.m23;
        a.m33 = 1;
        return a
    }, toQuat: function (a) {
        if (a == null) {
            a = okAllocator.quat()
        }
        var d = this.m00 + this.m11 + this.m22;
        if (d > 0) {
            var c = Math.sqrt(d + 1) * 2;
            a.s = 0.25 * c;
            a.x = (this.m21 - this.m12) / c;
            a.y = (this.m02 - this.m20) / c;
            a.z = (this.m10 - this.m01) / c
        } else {
            if ((this.m00 > this.m11) && (this.m00 > this.m22)) {
                var c = Math.sqrt(1 + this.m00 - this.m11 - this.m22) * 2;
                a.s = (this.m21 - this.m12) / c;
                a.x = 0.25 * c;
                a.y = (this.m01 + this.m10) / c;
                a.z = (this.m02 + this.m20) / c
            } else {
                if (this.m11 > this.m22) {
                    var c = Math.sqrt(1 + this.m11 - this.m00 - this.m22) * 2;
                    a.s = (this.m02 - this.m20) / c;
                    a.x = (this.m01 + this.m10) / c;
                    a.y = 0.25 * c;
                    a.z = (this.m12 + this.m21) / c
                } else {
                    var c = Math.sqrt(1 + this.m22 - this.m00 - this.m11) * 2;
                    a.s = (this.m10 - this.m01) / c;
                    a.x = (this.m02 + this.m20) / c;
                    a.y = (this.m12 + this.m21) / c;
                    a.z = 0.25 * c
                }
            }
        }
        return a
    }, toArray: function (a) {
        if (a == null) {
            a = okAllocator.array()
        }
        a.push(this.m00, this.m10, this.m20, this.m01, this.m11, this.m21, this.m02, this.m12, this.m22, this.m03, this.m13, this.m23);
        return a
    }
};

function okMat43Add(d, c) {
    var a = okAllocator.mat43();
    a.m00 = d.m00 + c.m00;
    a.m10 = d.m10 + c.m10;
    a.m20 = d.m20 + c.m20;
    a.m01 = d.m01 + c.m01;
    a.m11 = d.m11 + c.m11;
    a.m21 = d.m21 + c.m21;
    a.m02 = d.m02 + c.m02;
    a.m12 = d.m12 + c.m12;
    a.m22 = d.m22 + c.m22;
    a.m03 = d.m03 + c.m03;
    a.m13 = d.m13 + c.m13;
    a.m23 = d.m23 + c.m23;
    return a
}

function okMat43AddVal(c, d) {
    var a = okAllocator.mat43();
    a.m00 = c.m00 + d;
    a.m10 = c.m10 + d;
    a.m20 = c.m20 + d;
    a.m01 = c.m01 + d;
    a.m11 = c.m11 + d;
    a.m21 = c.m21 + d;
    a.m02 = c.m02 + d;
    a.m12 = c.m12 + d;
    a.m22 = c.m22 + d;
    a.m03 = c.m03 + d;
    a.m13 = c.m13 + d;
    a.m23 = c.m23 + d;
    return a
}

function okValAddMat43(d, c) {
    var a = okAllocator.mat43();
    a.m00 = c.m00 + d;
    a.m10 = c.m10 + d;
    a.m20 = c.m20 + d;
    a.m01 = c.m01 + d;
    a.m11 = c.m11 + d;
    a.m21 = c.m21 + d;
    a.m02 = c.m02 + d;
    a.m12 = c.m12 + d;
    a.m22 = c.m22 + d;
    a.m03 = c.m03 + d;
    a.m13 = c.m13 + d;
    a.m23 = c.m23 + d;
    return a
}

function okMat43Sub(d, c) {
    var a = okAllocator.mat43();
    a.m00 = d.m00 - c.m00;
    a.m10 = d.m10 - c.m10;
    a.m20 = d.m20 - c.m20;
    a.m01 = d.m01 - c.m01;
    a.m11 = d.m11 - c.m11;
    a.m21 = d.m21 - c.m21;
    a.m02 = d.m02 - c.m02;
    a.m12 = d.m12 - c.m12;
    a.m22 = d.m22 - c.m22;
    a.m03 = d.m03 - c.m03;
    a.m13 = d.m13 - c.m13;
    a.m23 = d.m23 - c.m23;
    return a
}

function okMat43SubVal(c, d) {
    var a = okAllocator.mat43();
    a.m00 = c.m00 - d;
    a.m10 = c.m10 - d;
    a.m20 = c.m20 - d;
    a.m01 = c.m01 - d;
    a.m11 = c.m11 - d;
    a.m21 = c.m21 - d;
    a.m02 = c.m02 - d;
    a.m12 = c.m12 - d;
    a.m22 = c.m22 - d;
    a.m03 = c.m03 - d;
    a.m13 = c.m13 - d;
    a.m23 = c.m23 - d;
    return a
}

function okValSubMat43(d, c) {
    var a = okAllocator.mat43();
    a.m00 = d - c.m00;
    a.m10 = d - c.m10;
    a.m20 = d - c.m20;
    a.m01 = d - c.m01;
    a.m11 = d - c.m11;
    a.m21 = d - c.m21;
    a.m02 = d - c.m02;
    a.m12 = d - c.m12;
    a.m22 = d - c.m22;
    a.m03 = d - c.m03;
    a.m13 = d - c.m13;
    a.m23 = d - c.m23;
    return a
}

function okMat43Mul(d, c) {
    var a = okAllocator.mat43();
    a.m00 = d.m00 * c.m00 + d.m01 * c.m10 + d.m02 * c.m20;
    a.m10 = d.m10 * c.m00 + d.m11 * c.m10 + d.m12 * c.m20;
    a.m20 = d.m20 * c.m00 + d.m21 * c.m10 + d.m22 * c.m20;
    a.m01 = d.m00 * c.m01 + d.m01 * c.m11 + d.m02 * c.m21;
    a.m11 = d.m10 * c.m01 + d.m11 * c.m11 + d.m12 * c.m21;
    a.m21 = d.m20 * c.m01 + d.m21 * c.m11 + d.m22 * c.m21;
    a.m02 = d.m00 * c.m02 + d.m01 * c.m12 + d.m02 * c.m22;
    a.m12 = d.m10 * c.m02 + d.m11 * c.m12 + d.m12 * c.m22;
    a.m22 = d.m20 * c.m02 + d.m21 * c.m12 + d.m22 * c.m22;
    a.m03 = d.m00 * c.m03 + d.m01 * c.m13 + d.m02 * c.m23 + d.m03;
    a.m13 = d.m10 * c.m03 + d.m11 * c.m13 + d.m12 * c.m23 + d.m13;
    a.m23 = d.m20 * c.m03 + d.m21 * c.m13 + d.m22 * c.m23 + d.m23;
    return a
}

function okMat43MulVal(c, d) {
    var a = okAllocator.mat43();
    a.m00 = c.m00 * d;
    a.m10 = c.m10 * d;
    a.m20 = c.m20 * d;
    a.m01 = c.m01 * d;
    a.m11 = c.m11 * d;
    a.m21 = c.m21 * d;
    a.m02 = c.m02 * d;
    a.m12 = c.m12 * d;
    a.m22 = c.m22 * d;
    a.m03 = c.m03 * d;
    a.m13 = c.m13 * d;
    a.m23 = c.m23 * d;
    return a
}

function okValMulMat43(d, c) {
    var a = okAllocator.mat43();
    a.m00 = c.m00 * d;
    a.m10 = c.m10 * d;
    a.m20 = c.m20 * d;
    a.m01 = c.m01 * d;
    a.m11 = c.m11 * d;
    a.m21 = c.m21 * d;
    a.m02 = c.m02 * d;
    a.m12 = c.m12 * d;
    a.m22 = c.m22 * d;
    a.m03 = c.m03 * d;
    a.m13 = c.m13 * d;
    a.m23 = c.m23 * d;
    return a
}

function okMat43MulVec3(c, a) {
    var d = okAllocator.vec3();
    d.x = c.m00 * a.x + c.m01 * a.y + c.m02 * a.z + c.m03;
    d.y = c.m10 * a.x + c.m11 * a.y + c.m12 * a.z + c.m13;
    d.z = c.m20 * a.x + c.m21 * a.y + c.m22 * a.z + c.m23;
    return d
}

function okMat43Lerp(d, c, e) {
    var a = okAllocator.mat43();
    a.m00 = d.m00 * (1 - e) + c.m00 * e;
    a.m10 = d.m10 * (1 - e) + c.m10 * e;
    a.m20 = d.m20 * (1 - e) + c.m20 * e;
    a.m01 = d.m01 * (1 - e) + c.m01 * e;
    a.m11 = d.m11 * (1 - e) + c.m11 * e;
    a.m21 = d.m21 * (1 - e) + c.m21 * e;
    a.m02 = d.m02 * (1 - e) + c.m02 * e;
    a.m12 = d.m12 * (1 - e) + c.m12 * e;
    a.m22 = d.m22 * (1 - e) + c.m22 * e;
    a.m03 = d.m03 * (1 - e) + c.m03 * e;
    a.m13 = d.m13 * (1 - e) + c.m13 * e;
    a.m23 = d.m23 * (1 - e) + c.m23 * e;
    return a
}

function okMat43Trans(f, e, d) {
    var c = okAllocator.vec3();
    if (e != null) {
        c.x = f;
        c.y = e;
        c.z = d
    } else {
        c.x = f.x;
        c.y = f.y;
        c.z = f.z
    }
    var a = okAllocator.mat43();
    a.setColumn(3, c.x, c.y, c.z);
    okAllocator._vec3(c);
    return a
}

function okMat43Scale(e, d, c) {
    var f = okAllocator.vec3();
    if (d != null) {
        f.x = e;
        f.y = d;
        f.z = c
    } else {
        f.x = e.x;
        f.y = e.y;
        f.z = e.z
    }
    var a = okAllocator.mat43();
    a.m00 = f.x;
    a.m11 = f.y;
    a.m22 = f.z;
    okAllocator._vec3(f);
    return a
}

function okMat43RotX(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat43();
    c.m11 = a;
    c.m12 = -d;
    c.m21 = d;
    c.m22 = a;
    return c
}

function okMat43RotY(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat43();
    c.m00 = a;
    c.m02 = d;
    c.m20 = -d;
    c.m22 = a;
    return c
}

function okMat43RotZ(e) {
    var f = e * Math.PI / 180;
    var a = Math.cos(f), d = Math.sin(f);
    var c = okAllocator.mat43();
    c.m00 = a;
    c.m01 = -d;
    c.m10 = d;
    c.m11 = a;
    return c
}

function okMat43Rot(k, n, m, l) {
    var d = k * Math.PI / 180;
    var h = okAllocator.vec3();
    if (m != null) {
        h.x = n;
        h.y = m;
        h.z = l
    } else {
        h.x = n.x;
        h.y = n.y;
        h.z = n.z
    }
    var i = h.normalize();
    okAllocator._vec3(h);
    var e = Math.cos(d * 0.5);
    var c = Math.sin(d * 0.5);
    var a = new okQuat();
    a.s = e;
    a.x = c * i.x;
    a.y = c * i.y;
    a.z = c * i.z;
    okAllocator._vec3(i);
    var f = okAllocator.mat43();
    a.toMat43(f);
    return f
}

function okQuat(e, d, c, a) {
    this.s = ((e != null) ? e : 1);
    this.x = ((d != null) ? d : 0);
    this.y = ((c != null) ? c : 0);
    this.z = ((a != null) ? a : 0)
}

okQuat.prototype = {
    set: function (e, d, c, a) {
        this.s = e;
        this.x = d;
        this.y = c;
        this.z = a
    }, clone: function (a) {
        var a = (a ? a : okAllocator.quat());
        a.s = this.s;
        a.x = this.x;
        a.y = this.y;
        a.z = this.z;
        return a
    }, equal: function (a) {
        return okFloatEqual(this.s, a.s) && okFloatEqual(this.x, a.x) && okFloatEqual(this.y, a.y) && okFloatEqual(this.z, a.z)
    }, getImVec3: function () {
        var a = okAllocator.vec3();
        a.x = this.x;
        a.y = this.y;
        a.z = this.z;
        return a
    }, len: function () {
        return Math.sqrt(this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z)
    }, lenSquare: function () {
        return this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z
    }, normalize: function (d) {
        if (d) {
            var c = 1 / Math.sqrt(this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z);
            this.s *= c;
            this.x *= c;
            this.y *= c;
            this.z *= c
        } else {
            var a = okAllocator.quat();
            var c = 1 / Math.sqrt(this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z);
            a.s = this.s * c;
            a.x = this.x * c;
            a.y = this.y * c;
            a.z = this.z * c;
            return a
        }
    }, conjugate: function (c) {
        var a = c ? this : okAllocator.quat();
        a.set(this.s, -this.x, -this.y, -this.z);
        return a
    }, inverse: function (e) {
        var d = this.conjugate();
        var a = 1 / (this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z);
        var c = e ? this : okAllocator.quat();
        c.set(d.s * a, d.x * a, d.y * a, d.z * a);
        okAllocator._quat(d);
        return c
    }, toMat3: function (a) {
        var c = 2 / Math.sqrt(this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z);
        if (a == null) {
            a = okAllocator.mat3()
        }
        a.m00 = 1 - c * (this.y * this.y + this.z * this.z);
        a.m10 = c * this.x * this.y + c * this.s * this.z;
        a.m20 = -c * this.s * this.y + c * this.x * this.z;
        a.m01 = c * this.x * this.y - c * this.s * this.z;
        a.m11 = 1 - c * (this.x * this.x + this.z * this.z);
        a.m21 = c * this.s * this.x + c * this.y * this.z;
        a.m02 = c * this.s * this.y + c * this.x * this.z;
        a.m12 = -c * this.s * this.x + c * this.y * this.z;
        a.m22 = 1 - c * (this.x * this.x + this.y * this.y);
        return a
    }, toMat4: function (a) {
        var c = 2 / Math.sqrt(this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z);
        if (a == null) {
            a = okAllocator.mat4()
        }
        a.m00 = 1 - c * (this.y * this.y + this.z * this.z);
        a.m10 = c * this.x * this.y + c * this.s * this.z;
        a.m20 = -c * this.s * this.y + c * this.x * this.z;
        a.m01 = c * this.x * this.y - c * this.s * this.z;
        a.m11 = 1 - c * (this.x * this.x + this.z * this.z);
        a.m21 = c * this.s * this.x + c * this.y * this.z;
        a.m02 = c * this.s * this.y + c * this.x * this.z;
        a.m12 = -c * this.s * this.x + c * this.y * this.z;
        a.m22 = 1 - c * (this.x * this.x + this.y * this.y);
        return a
    }, toMat43: function (a) {
        var c = 2 / Math.sqrt(this.s * this.s + this.x * this.x + this.y * this.y + this.z * this.z);
        if (a == null) {
            a = okAllocator.mat43()
        }
        a.m00 = 1 - c * (this.y * this.y + this.z * this.z);
        a.m10 = c * this.x * this.y + c * this.s * this.z;
        a.m20 = -c * this.s * this.y + c * this.x * this.z;
        a.m01 = c * this.x * this.y - c * this.s * this.z;
        a.m11 = 1 - c * (this.x * this.x + this.z * this.z);
        a.m21 = c * this.s * this.x + c * this.y * this.z;
        a.m02 = c * this.s * this.y + c * this.x * this.z;
        a.m12 = -c * this.s * this.x + c * this.y * this.z;
        a.m22 = 1 - c * (this.x * this.x + this.y * this.y);
        return a
    }
};

function okQuatAdd(d, a) {
    var c = okAllocator.quat();
    c.s = d.s + a.s;
    c.x = d.x + a.x;
    c.y = d.y + a.y;
    c.z = d.z + a.z;
    return c
}

function okQuatSub(d, a) {
    var c = okAllocator.quat();
    c.s = d.s - a.s;
    c.x = d.x - a.x;
    c.y = d.y - a.y;
    c.z = d.z - a.z;
    return c
}

function okQuatMul(f, e) {
    var a = okAllocator.quat();
    var d = f.getImVec3();
    var c = e.getImVec3();
    a.s = f.s * e.s - okVec3Dot(d, c);
    var l = okVec3Cross(d, c);
    var k = okVec3MulVal(d, e.s);
    var i = okVec3MulVal(c, f.s);
    var m = okVec3Add(l, k);
    var h = okVec3Add(m, i);
    a.x = h.x;
    a.y = h.y;
    a.z = h.z;
    okAllocator._vec3(d);
    okAllocator._vec3(c);
    okAllocator._vec3(l);
    okAllocator._vec3(k);
    okAllocator._vec3(i);
    okAllocator._vec3(m);
    okAllocator._vec3(h);
    return a
}

function okQuatDot(c, a) {
    return c.s * a.s + c.x * a.x + c.y * a.y + c.z * a.z
}

function okQuatSlerp(f, e, m) {
    if (f.equal(e)) {
        return f.clone()
    }
    var h = okAllocator.quat();
    var k = okQuatDot(f, e);
    if (k < 0) {
        k = -k;
        h.s = -e.s;
        h.x = -e.x;
        h.y = -e.y;
        h.z = -e.z
    } else {
        h.s = e.s;
        h.x = e.x;
        h.y = e.y;
        h.z = e.z
    }
    k = Math.min(1, k);
    var d, a;
    if (!okFloatEqual(Math.abs(k), 1)) {
        var l = Math.acos(k);
        var i = Math.sin(l);
        d = Math.sin((1 - m) * l) / i;
        a = Math.sin(m * l) / i
    } else {
        d = 1 - m;
        a = m
    }
    var c = okAllocator.quat();
    c.s = d * f.s + a * h.s;
    c.x = d * f.x + a * h.x;
    c.y = d * f.y + a * h.y;
    c.z = d * f.z + a * h.z;
    okAllocator._quat(h);
    return c
}

function okQuatRot(m, k, i, h) {
    var c = m * Math.PI / 180;
    var f = okAllocator.vec3();
    if (i != null) {
        f.x = k;
        f.y = i;
        f.z = h
    } else {
        f.x = k.x;
        f.y = k.y;
        f.z = k.z
    }
    var l = f.normalize();
    okAllocator._vec3(f);
    var d = Math.cos(c * 0.5);
    var a = Math.sin(c * 0.5);
    var e = okAllocator.quat();
    e.s = d;
    e.x = a * l.x;
    e.y = a * l.y;
    e.z = a * l.z;
    okAllocator._vec3(l);
    return e
}

function okPlane(a, c) {
    this.vOrigin = okAllocator.vec3();
    this.vNormal = okAllocator.vec3();
    if (a) {
        this.vOrigin.x = a.x;
        this.vOrigin.y = a.y;
        this.vOrigin.z = a.z
    }
    if (c) {
        this.vNormal.x = c.x;
        this.vNormal.y = c.y;
        this.vNormal.z = c.z
    } else {
        this.vNormal.x = 0;
        this.vNormal.y = 1;
        this.vNormal.z = 0
    }
}

okPlane.prototype = {
    clone: function (a) {
        var a = (a ? a : okAllocator.plane());
        a.vOrigin.x = this.vOrigin.x;
        a.vOrigin.y = this.vOrigin.y;
        a.vOrigin.z = this.vOrigin.z;
        a.vNormal.x = this.vNormal.x;
        a.vNormal.y = this.vNormal.y;
        a.vNormal.z = this.vNormal.z;
        return a
    }, set: function (a, d) {
        this.vOrigin.x = a.x;
        this.vOrigin.y = a.y;
        this.vOrigin.z = a.z;
        var c = 1 / Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z);
        this.vNormal.x = d.x * c;
        this.vNormal.y = d.y * c;
        this.vNormal.z = d.z * c
    }, setOrigin: function (a) {
        this.vOrigin.x = a.x;
        this.vOrigin.y = a.y;
        this.vOrigin.z = a.z
    }, setNormal: function (c) {
        var a = 1 / Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
        this.vNormal.x = c.x * a;
        this.vNormal.y = c.y * a;
        this.vNormal.z = c.z * a
    }, setByCoefficients: function (f, d, c, a) {
        var e = 1 / Math.sqrt(f * f + d * d + c * c);
        this.vNormal.x = f * e;
        this.vNormal.y = d * e;
        this.vNormal.z = c * e;
        if (!okFloatEqual(f, 0)) {
            this.vOrigin.x = -a / f;
            this.vOrigin.y = 0;
            this.vOrigin.z = 0
        } else {
            if (!okFloatEqual(d, 0)) {
                this.vOrigin.x = 0;
                this.vOrigin.y = -a / d;
                this.vOrigin.z = 0
            } else {
                this.vOrigin.x = 0;
                this.vOrigin.y = 0;
                this.vOrigin.z = -a / c
            }
        }
    }, collideVertex: function (c) {
        var d = this.vNormal.x * this.vOrigin.x + this.vNormal.y * this.vOrigin.y + this.vNormal.z * this.vOrigin.z;
        var a = this.vNormal.x * c.x + this.vNormal.y * c.y + this.vNormal.z * c.z;
        if (okFloatEqual(a, d)) {
            return 2
        } else {
            if (a > d) {
                return 1
            } else {
                return 0
            }
        }
    }, collideLine: function (d, h, c) {
        var a = (h.x - d.x) * this.vNormal.x + (h.y - d.y) * this.vNormal.y + (h.z - d.z) * this.vNormal.z;
        if (okFloatEqual(a, 0)) {
            if (this.collideVertex(d) == 2) {
                return 2
            }
            return 0
        }
        var f = okVec3Sub(this.vOrigin, d);
        var e = okVec3Dot(this.vNormal, f) / a;
        okAllocator._vec3(f);
        if (c != null) {
            c.fT = e
        }
        return 1
    }, collideRay: function (d, f, c) {
        var a = okVec3Dot(f, this.vNormal);
        if (okFloatEqual(a, 0)) {
            if (this.collideVertex(d) == 2) {
                return 2
            }
            return 0
        }
        var h = okVec3Sub(this.vOrigin, d);
        var e = okVec3Dot(this.vNormal, h) / a;
        okAllocator._vec3(h);
        if (e < 0) {
            return 0
        }
        if (c != null) {
            c.fT = e
        }
        return 1
    }
};

function okPlaneIntersect3(p, n, l) {
    var m = p.vNormal;
    var k = n.vNormal;
    var i = l.vNormal;
    var f = okVec3Cross(k, i);
    var c = okVec3Cross(i, m);
    var o = okVec3Cross(m, k);
    var e = okVec3Dot(p.vOrigin, m);
    var d = okVec3Dot(n.vOrigin, k);
    var a = okVec3Dot(l.vOrigin, i);
    var u = okVec3MulVal(f, e);
    var s = okVec3MulVal(c, d);
    var q = okVec3MulVal(o, a);
    var h = m.x * (k.y * i.z - i.y * k.z) + k.x * (i.y * m.z - m.y * i.z) + i.x * (m.y * k.z - m.z * k.y);
    var t = okAllocator.vec3();
    t.x = (u.x + s.x + q.x) / h;
    t.y = (u.y + s.y + q.y) / h;
    t.z = (u.z + s.z + q.z) / h;
    okAllocator._vec3(f);
    okAllocator._vec3(c);
    okAllocator._vec3(o);
    okAllocator._vec3(u);
    okAllocator._vec3(s);
    okAllocator._vec3(q);
    return t
}

function okAABBox(c, a) {
    this.vMin = okAllocator.vec3();
    this.vMax = okAllocator.vec3();
    if (c != null) {
        this.vMin.x = c.x;
        this.vMin.y = c.y;
        this.vMin.z = c.z
    }
    if (a != null) {
        this.vMax.x = a.x;
        this.vMax.y = a.y;
        this.vMax.z = a.z
    }
    this.aPointList = [okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3()];
    this.bPointDirty = true
}

okAABBox.prototype = {
    clone: function (a) {
        var c = (a ? a : okAllocator.aabbox());
        c.set(this.vMin, this.vMax);
        return c
    }, set: function (c, a) {
        this.vMin.x = c.x;
        this.vMin.y = c.y;
        this.vMin.z = c.z;
        this.vMax.x = a.x;
        this.vMax.y = a.y;
        this.vMax.z = a.z;
        this.bPointDirty = true
    }, setMin: function (d, c, a) {
        if (c == null) {
            this.vMin.x = d.x;
            this.vMin.y = d.y;
            this.vMin.z = d.z
        } else {
            this.vMin.x = d;
            this.vMin.y = c;
            this.vMin.z = a
        }
        this.bPointDirty = true
    }, setMax: function (d, c, a) {
        if (c == null) {
            this.vMax.x = d.x;
            this.vMax.y = d.y;
            this.vMax.z = d.z
        } else {
            this.vMax.x = d;
            this.vMax.y = c;
            this.vMax.z = a
        }
        this.bPointDirty = true
    }, union: function (d) {
        var e = okVec3Min(this.vMin, d.vMin);
        var c = okVec3Max(this.vMax, d.vMax);
        var a = okAllocator.aabbox();
        a.set(e, c);
        okAllocator._vec3(e);
        okAllocator._vec3(c);
        return a
    }, intersect: function (e) {
        var f = okVec3Max(this.vMin, e.vMin);
        var c = okVec3Min(this.vMax, e.vMax);
        var d = okVec3Max(this.vMin, c);
        var a = okAllocator.aabbox();
        a.set(f, d);
        okAllocator._vec3(f);
        okAllocator._vec3(c);
        okAllocator._vec3(d);
        return a
    }, getExtent: function (a) {
        if (a == 1) {
            return Math.max(0, this.vMax.x - this.vMin.x)
        } else {
            if (a == 2) {
                return Math.max(0, this.vMax.y - this.vMin.z)
            } else {
                return Math.max(0, this.vMax.z - this.vMin.z)
            }
        }
    }, getVolume: function () {
        return Math.max(0, (this.vMax.x - this.vMin.x)) * Math.max(0, (this.vMax.y - this.vMin.y)) * Math.max(0, (this.vMax.z - this.vMin.z))
    }, getPoint: function (c) {
        if (this.bPointDirty) {
            var n = this.aPointList[0];
            n.x = this.vMin.x;
            n.y = this.vMin.y;
            n.z = this.vMin.z;
            var m = this.aPointList[1];
            m.x = this.vMax.x;
            m.y = this.vMin.y;
            m.z = this.vMin.z;
            var l = this.aPointList[2];
            l.x = this.vMax.x;
            l.y = this.vMax.y;
            l.z = this.vMin.z;
            var i = this.aPointList[3];
            i.x = this.vMin.x;
            i.y = this.vMax.y;
            i.z = this.vMin.z;
            var h = this.aPointList[4];
            h.x = this.vMin.x;
            h.y = this.vMin.y;
            h.z = this.vMax.z;
            var f = this.aPointList[5];
            f.x = this.vMax.x;
            f.y = this.vMin.y;
            f.z = this.vMax.z;
            var e = this.aPointList[6];
            e.x = this.vMax.x;
            e.y = this.vMax.y;
            e.z = this.vMax.z;
            var d = this.aPointList[7];
            d.x = this.vMin.x;
            d.y = this.vMax.y;
            d.z = this.vMax.z;
            this.bPointDirty = false
        }
        var a = this.aPointList[c];
        var k = okAllocator.vec3();
        k.x = a.x;
        k.y = a.y;
        k.z = a.z;
        return k
    }, transformMat4: function (d) {
        var f = okAllocator.vec3();
        var e = okAllocator.vec3();
        var c = okAllocator.vec3();
        c.x = this.vMin.x;
        c.y = this.vMin.y;
        c.z = this.vMin.z;
        var a = okMat4MulVec3(d, c);
        f.x = a.x;
        f.y = a.y;
        f.z = a.z;
        e.x = a.x;
        e.y = a.y;
        e.z = a.z;
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMin.y;
        c.z = this.vMin.z;
        a = okMat4MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMin.x;
        c.y = this.vMax.y;
        c.z = this.vMin.z;
        a = okMat4MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMin.x;
        c.y = this.vMin.y;
        c.z = this.vMax.z;
        a = okMat4MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMax.y;
        c.z = this.vMin.z;
        a = okMat4MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMin.y;
        c.z = this.vMax.z;
        a = okMat4MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMin.x;
        c.y = this.vMax.y;
        c.z = this.vMax.z;
        a = okMat4MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMax.y;
        c.z = this.vMax.z;
        a = okMat4MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        this.vMin.x = f.x;
        this.vMin.y = f.y;
        this.vMin.z = f.z;
        this.vMax.x = e.x;
        this.vMax.y = e.y;
        this.vMax.z = e.z;
        okAllocator._vec3(f);
        okAllocator._vec3(e);
        this.bPointDirty = true
    }, transformMat43: function (d) {
        var f = okAllocator.vec3();
        var e = okAllocator.vec3();
        var c = okAllocator.vec3();
        c.x = this.vMin.x;
        c.y = this.vMin.y;
        c.z = this.vMin.z;
        var a = okMat43MulVec3(d, c);
        f.x = a.x;
        f.y = a.y;
        f.z = a.z;
        e.x = a.x;
        e.y = a.y;
        e.z = a.z;
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMin.y;
        c.z = this.vMin.z;
        a = okMat43MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMin.x;
        c.y = this.vMax.y;
        c.z = this.vMin.z;
        a = okMat43MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMin.x;
        c.y = this.vMin.y;
        c.z = this.vMax.z;
        a = okMat43MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMax.y;
        c.z = this.vMin.z;
        a = okMat43MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMin.y;
        c.z = this.vMax.z;
        a = okMat43MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMin.x;
        c.y = this.vMax.y;
        c.z = this.vMax.z;
        a = okMat43MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        c.x = this.vMax.x;
        c.y = this.vMax.y;
        c.z = this.vMax.z;
        a = okMat43MulVec3(d, c);
        f.x = Math.min(f.x, a.x);
        f.y = Math.min(f.y, a.y);
        f.z = Math.min(f.z, a.z);
        e.x = Math.max(e.x, a.x);
        e.y = Math.max(e.y, a.y);
        e.z = Math.max(e.z, a.z);
        okAllocator._vec3(a);
        this.vMin.x = f.x;
        this.vMin.y = f.y;
        this.vMin.z = f.z;
        this.vMax.x = e.x;
        this.vMax.y = e.y;
        this.vMax.z = e.z;
        okAllocator._vec3(f);
        okAllocator._vec3(e);
        this.bPointDirty = true
    }, collideVertex: function (a) {
        if (a.x >= this.vMin.x && a.x <= this.vMax.x && a.y >= this.vMin.y && a.y <= this.vMax.y && a.z >= this.vMin.z && a.z <= this.vMax.z) {
            return 1
        }
        return 0
    },  collideRay: function (t, n, o) {
        var s = okAllocator.vec3();
        s.x = t.x + n.x;
        s.y = t.y + n.y;
        s.z = t.z + n.z;
        var k = OAK.VEC3_X;
        var h = OAK.VEC3_Y;
        var f = OAK.VEC3_Z;
        var u = okAllocator.plane();
        u.set(this.vMin, k);
        var i = okAllocator.plane();
        i.set(this.vMax, k);
        var p = okAllocator.plane();
        p.set(this.vMin, h);
        var c = okAllocator.plane();
        c.set(this.vMax, h);
        var l = okAllocator.plane();
        l.set(this.vMin, f);
        var q = okAllocator.plane();
        q.set(this.vMax, f);
        var a, e;
        var d = new Object, m = new Object;
        if (u.collideLine(t, s, d) == 1) {
            i.collideLine(t, s, m);
            a = Math.min(d.fT, m.fT);
            e = Math.max(d.fT, m.fT)
        }
        if (p.collideLine(t, s, d) == 1) {
            c.collideLine(t, s, m);
            if (a != null) {
                a = Math.max(a, Math.min(d.fT, m.fT));
                e = Math.min(e, Math.max(d.fT, m.fT))
            } else {
                a = Math.min(d.fT, m.fT);
                e = Math.max(d.fT, m.fT)
            }
        }
        if (l.collideLine(t, s, d) == 1) {
            q.collideLine(t, s, m);
            if (a != null) {
                a = Math.max(a, Math.min(d.fT, m.fT));
                e = Math.min(e, Math.max(d.fT, m.fT))
            } else {
                a = Math.min(d.fT, m.fT);
                e = Math.max(d.fT, m.fT)
            }
        }
        okAllocator._plane(u);
        okAllocator._plane(i);
        okAllocator._plane(p);
        okAllocator._plane(c);
        okAllocator._plane(l);
        okAllocator._plane(q);
        okAllocator._vec3(s);
        if ((a <= e) && (e >= 0)) {
            if (o) {
                o.fT0 = a;
                o.fT1 = e
            }
            return 1
        }
        return 0
    }, collideAABBox: function (e) {
        var d = okVec3Max(this.vMin, e.vMin);
        var a = okVec3Min(this.vMax, e.vMax);
        var c = 0;
        if (d.x > a.x || d.y > a.y || d.z > a.z) {
            c = 0
        } else {
            if (d.equal(e.vMin) && a.equal(e.vMax)) {
                c = 2
            } else {
                c = 1
            }
        }
        okAllocator._vec3(d);
        okAllocator._vec3(a);
        return c
    }
};


function okFrustum() {
    this.mViewProjMat = okAllocator.mat4();
    this.aPlaneList = [okAllocator.plane(), okAllocator.plane(), okAllocator.plane(), okAllocator.plane(), okAllocator.plane(), okAllocator.plane()];
    this.aPointList = [okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3(), okAllocator.vec3()];
    this.bPointDirty = true
}

okFrustum.prototype = {
    setByViewProjMat: function (a) {
        a.clone(this.mViewProjMat);
        this.aPlaneList[3].setByCoefficients(a.m30 - a.m00, a.m31 - a.m01, a.m32 - a.m02, a.m33 - a.m03);
        this.aPlaneList[2].setByCoefficients(a.m30 + a.m00, a.m31 + a.m01, a.m32 + a.m02, a.m33 + a.m03);
        this.aPlaneList[5].setByCoefficients(a.m30 + a.m10, a.m31 + a.m11, a.m32 + a.m12, a.m33 + a.m13);
        this.aPlaneList[4].setByCoefficients(a.m30 - a.m10, a.m31 - a.m11, a.m32 - a.m12, a.m33 - a.m13);
        this.aPlaneList[1].setByCoefficients(a.m30 - a.m20, a.m31 - a.m21, a.m32 - a.m22, a.m33 - a.m23);
        this.aPlaneList[0].setByCoefficients(a.m30 + a.m20, a.m31 + a.m21, a.m32 + a.m22, a.m33 + a.m23);
        this.bPointDirty = true
    }, getPlane: function (a) {
        return this.aPlaneList[a]
    }, setPlane: function (c, a) {
        a.clone(this.aPlaneList[c]);
        this.bPointDirty = true
    }, getPoint: function (a) {
        if (this.bPointDirty) {
            this._genPointList();
            this.bPointDirty = false
        }
        return this.aPointList[a]
    }, collideVertex: function (a) {
        if (this.aPlaneList[0].collideVertex(a) == 0) {
            return 0
        }
        if (this.aPlaneList[1].collideVertex(a) == 0) {
            return 0
        }
        if (this.aPlaneList[2].collideVertex(a) == 0) {
            return 0
        }
        if (this.aPlaneList[3].collideVertex(a) == 0) {
            return 0
        }
        if (this.aPlaneList[4].collideVertex(a) == 0) {
            return 0
        }
        if (this.aPlaneList[5].collideVertex(a) == 0) {
            return 0
        }
        return 1
    }, collideAABBox: function (c) {
        var h = true;
        c.getPoint(0);
        var n = c.aPointList;
        var t = n[0];
        var p = n[1];
        var o = n[2];
        var m = n[3];
        var l = n[4];
        var k = n[5];
        var f = n[6];
        var e = n[7];
        var d = true;
        var s = true;
        var a = this.aPlaneList[0];
        var i, q;
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * t.x + a.vNormal.y * t.y + a.vNormal.z * t.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * p.x + a.vNormal.y * p.y + a.vNormal.z * p.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * o.x + a.vNormal.y * o.y + a.vNormal.z * o.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * m.x + a.vNormal.y * m.y + a.vNormal.z * m.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * l.x + a.vNormal.y * l.y + a.vNormal.z * l.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * k.x + a.vNormal.y * k.y + a.vNormal.z * k.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * f.x + a.vNormal.y * f.y + a.vNormal.z * f.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * e.x + a.vNormal.y * e.y + a.vNormal.z * e.z;
        d = d && (i >= q);
        s = s && (i < q);
        if (s) {
            return 0
        }
        s = true;
        var a = this.aPlaneList[1];
        var i, q;
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * t.x + a.vNormal.y * t.y + a.vNormal.z * t.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * p.x + a.vNormal.y * p.y + a.vNormal.z * p.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * o.x + a.vNormal.y * o.y + a.vNormal.z * o.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * m.x + a.vNormal.y * m.y + a.vNormal.z * m.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * l.x + a.vNormal.y * l.y + a.vNormal.z * l.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * k.x + a.vNormal.y * k.y + a.vNormal.z * k.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * f.x + a.vNormal.y * f.y + a.vNormal.z * f.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * e.x + a.vNormal.y * e.y + a.vNormal.z * e.z;
        d = d && (i >= q);
        s = s && (i < q);
        if (s) {
            return 0
        }
        s = true;
        var a = this.aPlaneList[2];
        var i, q;
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * t.x + a.vNormal.y * t.y + a.vNormal.z * t.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * p.x + a.vNormal.y * p.y + a.vNormal.z * p.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * o.x + a.vNormal.y * o.y + a.vNormal.z * o.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * m.x + a.vNormal.y * m.y + a.vNormal.z * m.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * l.x + a.vNormal.y * l.y + a.vNormal.z * l.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * k.x + a.vNormal.y * k.y + a.vNormal.z * k.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * f.x + a.vNormal.y * f.y + a.vNormal.z * f.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * e.x + a.vNormal.y * e.y + a.vNormal.z * e.z;
        d = d && (i >= q);
        s = s && (i < q);
        if (s) {
            return 0
        }
        s = true;
        var a = this.aPlaneList[3];
        var i, q;
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * t.x + a.vNormal.y * t.y + a.vNormal.z * t.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * p.x + a.vNormal.y * p.y + a.vNormal.z * p.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * o.x + a.vNormal.y * o.y + a.vNormal.z * o.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * m.x + a.vNormal.y * m.y + a.vNormal.z * m.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * l.x + a.vNormal.y * l.y + a.vNormal.z * l.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * k.x + a.vNormal.y * k.y + a.vNormal.z * k.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * f.x + a.vNormal.y * f.y + a.vNormal.z * f.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * e.x + a.vNormal.y * e.y + a.vNormal.z * e.z;
        d = d && (i >= q);
        s = s && (i < q);
        if (s) {
            return 0
        }
        s = true;
        var a = this.aPlaneList[4];
        var i, q;
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * t.x + a.vNormal.y * t.y + a.vNormal.z * t.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * p.x + a.vNormal.y * p.y + a.vNormal.z * p.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * o.x + a.vNormal.y * o.y + a.vNormal.z * o.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * m.x + a.vNormal.y * m.y + a.vNormal.z * m.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * l.x + a.vNormal.y * l.y + a.vNormal.z * l.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * k.x + a.vNormal.y * k.y + a.vNormal.z * k.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * f.x + a.vNormal.y * f.y + a.vNormal.z * f.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * e.x + a.vNormal.y * e.y + a.vNormal.z * e.z;
        d = d && (i >= q);
        s = s && (i < q);
        if (s) {
            return 0
        }
        s = true;
        var a = this.aPlaneList[5];
        var i, q;
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * t.x + a.vNormal.y * t.y + a.vNormal.z * t.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * p.x + a.vNormal.y * p.y + a.vNormal.z * p.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * o.x + a.vNormal.y * o.y + a.vNormal.z * o.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * m.x + a.vNormal.y * m.y + a.vNormal.z * m.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * l.x + a.vNormal.y * l.y + a.vNormal.z * l.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * k.x + a.vNormal.y * k.y + a.vNormal.z * k.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * f.x + a.vNormal.y * f.y + a.vNormal.z * f.z;
        d = d && (i >= q);
        s = s && (i < q);
        q = a.vNormal.x * a.vOrigin.x + a.vNormal.y * a.vOrigin.y + a.vNormal.z * a.vOrigin.z;
        i = a.vNormal.x * e.x + a.vNormal.y * e.y + a.vNormal.z * e.z;
        d = d && (i >= q);
        s = s && (i < q);
        if (s) {
            return 0
        }
        if (d) {
            return 2
        }
        return 1
    }, _genPointList: function () {
        this.aPointList[0] = okPlaneIntersect3(this.aPlaneList[0], this.aPlaneList[5], this.aPlaneList[2]);
        this.aPointList[1] = okPlaneIntersect3(this.aPlaneList[0], this.aPlaneList[5], this.aPlaneList[3]);
        this.aPointList[2] = okPlaneIntersect3(this.aPlaneList[0], this.aPlaneList[4], this.aPlaneList[3]);
        this.aPointList[3] = okPlaneIntersect3(this.aPlaneList[0], this.aPlaneList[4], this.aPlaneList[2]);
        this.aPointList[4] = okPlaneIntersect3(this.aPlaneList[1], this.aPlaneList[5], this.aPlaneList[2]);
        this.aPointList[5] = okPlaneIntersect3(this.aPlaneList[1], this.aPlaneList[5], this.aPlaneList[3]);
        this.aPointList[6] = okPlaneIntersect3(this.aPlaneList[1], this.aPlaneList[4], this.aPlaneList[3]);
        this.aPointList[7] = okPlaneIntersect3(this.aPlaneList[1], this.aPlaneList[4], this.aPlaneList[2])
    }
};

function okRect(e, c, d, a) {
    this.x = ((e != null) ? e : 0);
    this.y = ((c != null) ? c : 0);
    this.width = ((d != null) ? d : 0);
    this.height = ((a != null) ? a : 0)
}

okRect.prototype = {
    set: function (d, c, e, a) {
        this.x = d;
        this.y = c;
        this.width = e;
        this.height = a
    }, clone: function (a) {
        var a = (a ? a : new okRect());
        a.set(this.x, this.y, this.width, this.height);
        return a
    }
};

function okRectMerge(e, d) {
    var c = Math.min(e.x, d.x);
    var h = Math.min(e.y, d.y);
    var f = Math.max(e.x + e.width - c, d.x + d.width - c);
    var a = Math.max(e.y + e.height - h, d.y + d.height - h);
    return new okRect(c, h, f, a)
}

OAK.VEC2_ZERO = new okVec2(0, 0);
OAK.VEC2_ONE = new okVec2(1, 1);
OAK.VEC2_X = new okVec2(1, 0);
OAK.VEC2_Y = new okVec2(0, 1);
OAK.VEC3_ZERO = new okVec3(0, 0, 0);
OAK.VEC3_ONE = new okVec3(1, 1, 1);
OAK.VEC3_X = new okVec3(1, 0, 0);
OAK.VEC3_Y = new okVec3(0, 1, 0);
OAK.VEC3_Z = new okVec3(0, 0, 1);
OAK.VEC3_RED = OAK.VEC3_X;
OAK.VEC3_GREEN = OAK.VEC3_Y;
OAK.VEC3_BLUE = OAK.VEC3_Z;
OAK.VEC3_YELLOW = new okVec3(1, 1, 0);
OAK.VEC3_BLACK = OAK.VEC3_ZERO;
OAK.VEC3_WHITE = OAK.VEC3_ONE;
OAK.VEC4_ZERO = new okVec4(0, 0, 0, 0);
OAK.VEC4_ONE = new okVec4(1, 1, 1, 1);
OAK.VEC4_X = new okVec3(1, 0, 0, 0);
OAK.VEC4_Y = new okVec3(0, 1, 0, 0);
OAK.VEC4_Z = new okVec3(0, 0, 1, 0);
OAK.VEC4_W = new okVec3(0, 0, 0, 1);
OAK.MAT3_ZERO = new okMat3(0);
OAK.MAT3_I = new okMat4(1);
OAK.MAT4_ZERO = new okMat4(0);
OAK.MAT4_I = new okMat4(1);
OAK.MAT43_ZERO = new okMat43(0);
OAK.MAT43_I = new okMat43(1);

function okXmlDoc(a) {
    this.doc = a
}

okXmlDoc.prototype = {
    getRootNode: function () {
        return new okXmlNode(this.doc.documentElement)
    }
};

function okXmlNode(c) {
    this.element = c;
    this.childNodes = new Array();
    this.sText = "";

        for (var a = 0; a < this.element.childNodes.length; ++a) {
            if (this.element.childNodes[a].nodeType == Node.ELEMENT_NODE) {
                this.childNodes.push(this.element.childNodes[a])
            } else {
                if (this.element.childNodes[a].nodeType == Node.TEXT_NODE) {
                    this.sText += this.element.childNodes[a].textContent
                }
            }
        }

}

okXmlNode.prototype = {
    getName: function () {
        return this.element.nodeName
    }, getText: function () {
        return this.sText
    }, getChildNum: function () {
        return this.childNodes.length
    }, getChild: function (a, e) {
        if (okIsNumber(a)) {
            return new okXmlNode(this.childNodes[a])
        } else {
            if (e) {
                a = a.toLowerCase()
            }
            for (var d = 0; d < this.childNodes.length; ++d) {
                var c = e ? (this.childNodes[d].nodeName.toLowerCase() == a) : (this.childNodes[d].nodeName == a);
                if (c) {
                    return new okXmlNode(this.childNodes[d])
                }
            }
            return null
        }
    }, getAttribNum: function () {
        return this.element.attributes.length
    }, getAttribName: function (a) {
        return this.element.attributes[a].name
    }, getAttribValueString: function (d, e) {
        if (okIsNumber(d)) {
            return this.element.attributes[d].value
        } else {
            if (e) {
                d = d.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = e ? (this.element.attributes[c].name.toLowerCase() == d) : (this.element.attributes[c].name == d);
                if (a) {
                    return this.element.attributes[c].value
                }
            }
        }
        return null
    }, getAttribValueInt: function (d, e) {
        if (okIsNumber(d)) {
            return parseInt(this.element.attributes[d].value)
        } else {
            if (e) {
                d = d.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = e ? (this.element.attributes[c].name.toLowerCase() == d) : (this.element.attributes[c].name == d);
                if (a) {
                    return parseInt(this.element.attributes[c].value)
                }
            }
        }
        return null
    }, getAttribValueFloat: function (d, e) {
        if (okIsNumber(d)) {
            return parseFloat(this.element.attributes[d].value)
        } else {
            if (e) {
                d = d.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = e ? (this.element.attributes[c].name.toLowerCase() == d) : (this.element.attributes[c].name == d);
                if (a) {
                    return parseFloat(this.element.attributes[c].value)
                }
            }
        }
        return null
    }, getAttribValueVec2: function (d, h) {
        if (okIsNumber(d)) {
            var f = this.element.attributes[d].value.split(" ");
            var e = okAllocator.vec2();
            e.x = parseFloat(f[0]);
            e.y = parseFloat(f[1]);
            return e
        } else {
            if (h) {
                d = d.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = h ? (this.element.attributes[c].name.toLowerCase() == d) : (this.element.attributes[c].name == d);
                if (a) {
                    var f = this.element.attributes[c].value.split(" ");
                    var e = okAllocator.vec2();
                    e.x = parseFloat(f[0]);
                    e.y = parseFloat(f[1]);
                    return e
                }
            }
        }
        return null
    }, getAttribValueVec3: function (d, h) {
        if (okIsNumber(d)) {
            var f = this.element.attributes[d].value.split(" ");
            var e = okAllocator.vec3();
            e.x = parseFloat(f[0]);
            e.y = parseFloat(f[1]);
            e.z = parseFloat(f[2]);
            return e
        } else {
            if (h) {
                d = d.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = h ? (this.element.attributes[c].name.toLowerCase() == d) : (this.element.attributes[c].name == d);
                if (a) {
                    var f = this.element.attributes[c].value.split(" ");
                    var e = okAllocator.vec3();
                    e.x = parseFloat(f[0]);
                    e.y = parseFloat(f[1]);
                    e.z = parseFloat(f[2]);
                    return e
                }
            }
        }
        return null
    }, getAttribValueVec4: function (d, h) {
        if (okIsNumber(d)) {
            var f = this.element.attributes[d].value.split(" ");
            var e = okAllocator.vec4();
            e.x = parseFloat(f[0]);
            e.y = parseFloat(f[1]);
            e.z = parseFloat(f[2]);
            e.w = parseFloat(f[3]);
            return e
        } else {
            if (h) {
                d = d.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = h ? (this.element.attributes[c].name.toLowerCase() == d) : (this.element.attributes[c].name == d);
                if (a) {
                    var f = this.element.attributes[c].value.split(" ");
                    var e = okAllocator.vec3();
                    e.x = parseFloat(f[0]);
                    e.y = parseFloat(f[1]);
                    e.z = parseFloat(f[2]);
                    e.w = parseFloat(f[3]);
                    return e
                }
            }
        }
        return null
    }, getAttribValueMat4: function (e, h) {
        if (okIsNumber(e)) {
            var f = this.element.attributes[e].value.split(" ");
            var c = okAllocator.mat4();
            c.m00 = parseFloat(f[0]);
            c.m10 = parseFloat(f[1]);
            c.m20 = parseFloat(f[2]);
            c.m30 = parseFloat(f[3]);
            c.m01 = parseFloat(f[4]);
            c.m11 = parseFloat(f[5]);
            c.m21 = parseFloat(f[6]);
            c.m31 = parseFloat(f[7]);
            c.m02 = parseFloat(f[8]);
            c.m12 = parseFloat(f[9]);
            c.m22 = parseFloat(f[10]);
            c.m32 = parseFloat(f[11]);
            c.m03 = parseFloat(f[12]);
            c.m13 = parseFloat(f[13]);
            c.m23 = parseFloat(f[14]);
            c.m33 = parseFloat(f[15]);
            return c
        } else {
            if (h) {
                e = e.toLowerCase()
            }
            for (var d = 0; d < this.element.attributes.length; ++d) {
                var a = h ? (this.element.attributes[d].name.toLowerCase() == e) : (this.element.attributes[d].name == e);
                if (a) {
                    var f = this.element.attributes[d].value.split(" ");
                    var c = okAllocator.mat4();
                    c.m00 = parseFloat(f[0]);
                    c.m10 = parseFloat(f[1]);
                    c.m20 = parseFloat(f[2]);
                    c.m30 = parseFloat(f[3]);
                    c.m01 = parseFloat(f[4]);
                    c.m11 = parseFloat(f[5]);
                    c.m21 = parseFloat(f[6]);
                    c.m31 = parseFloat(f[7]);
                    c.m02 = parseFloat(f[8]);
                    c.m12 = parseFloat(f[9]);
                    c.m22 = parseFloat(f[10]);
                    c.m32 = parseFloat(f[11]);
                    c.m03 = parseFloat(f[12]);
                    c.m13 = parseFloat(f[13]);
                    c.m23 = parseFloat(f[14]);
                    c.m33 = parseFloat(f[15]);
                    return c
                }
            }
        }
        return null
    }, getAttribValueMat43: function (e, h) {
        if (okIsNumber(e)) {
            var f = this.element.attributes[e].value.split(" ");
            var c = okAllocator.mat43();
            c.m00 = parseFloat(f[0]);
            c.m10 = parseFloat(f[1]);
            c.m20 = parseFloat(f[2]);
            c.m01 = parseFloat(f[3]);
            c.m11 = parseFloat(f[4]);
            c.m21 = parseFloat(f[5]);
            c.m02 = parseFloat(f[6]);
            c.m12 = parseFloat(f[7]);
            c.m22 = parseFloat(f[8]);
            c.m03 = parseFloat(f[9]);
            c.m13 = parseFloat(f[10]);
            c.m23 = parseFloat(f[11]);
            return c
        } else {
            if (h) {
                e = e.toLowerCase()
            }
            for (var d = 0; d < this.element.attributes.length; ++d) {
                var a = h ? (this.element.attributes[d].name.toLowerCase() == e) : (this.element.attributes[d].name == e);
                if (a) {
                    var f = this.element.attributes[d].value.split(" ");
                    var c = okAllocator.mat43();
                    c.m00 = parseFloat(f[0]);
                    c.m10 = parseFloat(f[1]);
                    c.m20 = parseFloat(f[2]);
                    c.m01 = parseFloat(f[3]);
                    c.m11 = parseFloat(f[4]);
                    c.m21 = parseFloat(f[5]);
                    c.m02 = parseFloat(f[6]);
                    c.m12 = parseFloat(f[7]);
                    c.m22 = parseFloat(f[8]);
                    c.m03 = parseFloat(f[9]);
                    c.m13 = parseFloat(f[10]);
                    c.m23 = parseFloat(f[11]);
                    return c
                }
            }
        }
        return null
    }, getAttribValueQuat: function (e, h) {
        if (okIsNumber(e)) {
            var f = this.element.attributes[e].value.split(" ");
            var c = okAllocator.quat();
            c.s = parseFloat(f[0]);
            c.x = parseFloat(f[1]);
            c.y = parseFloat(f[2]);
            c.z = parseFloat(f[3]);
            return c
        } else {
            if (h) {
                e = e.toLowerCase()
            }
            for (var d = 0; d < this.element.attributes.length; ++d) {
                var a = h ? (this.element.attributes[d].name.toLowerCase() == e) : (this.element.attributes[d].name == e);
                if (a) {
                    var f = this.element.attributes[d].value.split(" ");
                    var c = okAllocator.quat();
                    c.s = parseFloat(f[0]);
                    c.x = parseFloat(f[1]);
                    c.y = parseFloat(f[2]);
                    c.z = parseFloat(f[3]);
                    return c
                }
            }
        }
        return null
    }, getAttribValueIntArray: function (e, h) {
        if (okIsNumber(e)) {
            var f = this.element.attributes[e].value.split(" ");
            var d = okAllocator.array();
            for (var c = 0; c < f.length; ++c) {
                d.push(parseInt(f[c]))
            }
            return d
        } else {
            if (h) {
                e = e.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = h ? (this.element.attributes[c].name.toLowerCase() == e) : (this.element.attributes[c].name == e);
                if (a) {
                    var f = this.element.attributes[c].value.split(" ");
                    var d = okAllocator.array();
                    for (var c = 0; c < f.length; ++c) {
                        d.push(parseInt(f[c]))
                    }
                    return d
                }
            }
        }
        return null
    }, getAttribValueFloatArray: function (e, h) {
        if (okIsNumber(e)) {
            var f = this.element.attributes[e].value.split(" ");
            var d = okAllocator.array();
            for (var c = 0; c < f.length; ++c) {
                d.push(parseFloat(f[c]))
            }
            return d
        } else {
            if (h) {
                e = e.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = h ? (this.element.attributes[c].name.toLowerCase() == e) : (this.element.attributes[c].name == e);
                if (a) {
                    var f = this.element.attributes[c].value.split(" ");
                    var d = okAllocator.array();
                    for (var c = 0; c < f.length; ++c) {
                        d.push(parseFloat(f[c]))
                    }
                    return d
                }
            }
        }
        return null
    }, getAttribValueStringArray: function (d, e) {
        if (okIsNumber(d)) {
            return this.element.attributes[d].value.split(" ")
        } else {
            if (e) {
                d = d.toLowerCase()
            }
            for (var c = 0; c < this.element.attributes.length; ++c) {
                var a = e ? (this.element.attributes[c].name.toLowerCase() == d) : (this.element.attributes[c].name == d);
                if (a) {
                    return this.element.attributes[c].value.split(" ")
                }
            }
        }
        return null
    }
};

function okParseXML(a) {
    var c;

    var d = new DOMParser();
    c = d.parseFromString(a, "text/xml")

    return c
}

var okResourceParser = new Object;

okResourceParser._parseMaterialXML = function (l, h, a) {
    var p = l.getAttribNum();
    for (var k = 0; k < p; ++k) {
        var u = l.getAttribName(k).toLowerCase();
        switch (u) {
            case"emissive":
                h.setEmissive(l.getAttribValueVec3(k));
                break;
            case"ambient":
                h.setAmbient(l.getAttribValueVec3(k));
                break;
            case"diffuse":
                h.setDiffuse(l.getAttribValueVec3(k));
                break;
            case"specular":
                h.setSpecular(l.getAttribValueVec3(k));
                break;
            case"specularlevel":
                h.setSpecularLevel(l.getAttribValueFloat(k));
                break;
            case"glossiness":
                h.setGlossiness(l.getAttribValueFloat(k));
                break;
            case"alpha":
                h.setAlpha(l.getAttribValueFloat(k));
                break;
            case"blend":
                h.enableBlend(l.getAttribValueString(k).toLowerCase() == "true");
                break;
            case"alphatest":
                h.enableAlphaTest(l.getAttribValueString(k).toLowerCase() == "true");
                break;
            case"alphatestvalue":
                h.setAlphaTestValue(l.getAttribValueFloat(k));
                break;
            case"dynamiclighting":
                h.enableDynamicLighting(l.getAttribValueString(k).toLowerCase() == "true");
                break;
            case"wireframe":
                h.enableWireframe(l.getAttribValueString(k).toLowerCase() == "true");
                break;
            case"vertexcolor":
                h.enableVertexColor(l.getAttribValueString(k).toLowerCase() == "true");
                break;
            case"depthtest":
                h.enableDepthTest(l.getAttribValueString(k).toLowerCase() == "true");
                break;
            case"twoside":
                h.enableTwoSide(l.getAttribValueString(k).toLowerCase() == "true");
                break
        }
    }
    for (var k = 0; k < l.getChildNum(); ++k) {
        var c = l.getChild(k);
        if (c.getName() == "Texture") {
            var t = c.getAttribValueString("channel", true).toLowerCase();
            var s = 0;
            if (t == "albedo1") {
                s = 0
            } else {
                if (t == "albedo2") {
                    s = 1
                } else {
                    if (t == "albedo3") {
                        s = 2
                    } else {
                        if (t == "albedo4") {
                            s = 3
                        } else {
                            if (t == "normal") {
                                s = 4
                            } else {
                                if (t == "opacity") {
                                    s = 5
                                } else {
                                    if (t == "specularlevel") {
                                        s = 6
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var p = c.getAttribNum();
            for (var e = 0; e < p; ++e) {
                var u = c.getAttribName(e).toLowerCase();
                switch (u) {
                    case"name":
                        h.setTextureName(s, c.getAttribValueString(e));
                        break;
                    case"texcoord":
                        h.setTextureCoord(s, c.getAttribValueString(e));
                        break;
                    case"type":
                        var o = c.getAttribValueString(e).toLowerCase();
                        if (o == "2d") {
                            h.setTextureType(s, 3553)
                        } else {
                            if (o == "cube") {
                                h.setTextureType(s, 34067)
                            }
                        }
                        break;
                    case"filter":
                        var q = c.getAttribValueString(e).toLowerCase();
                        if (q == "linear") {
                            h.setTextureFilter(s, 9729)
                        } else {
                            if (q == "nearest") {
                                h.setTextureFilter(s, 9728)
                            }
                        }
                        break;
                    case"wrap":
                        var n = c.getAttribValueString(e).toLowerCase();
                        if (n == "repeat") {
                            h.setTextureWrap(s, 10497)
                        } else {
                            if (n == "clamp") {
                                h.setTextureWrap(s, 33071)
                            } else {
                                if (n == "mirror") {
                                    h.setTextureWrap(s, 33648)
                                }
                            }
                        }
                        break;
                    case"wrapu":
                        var n = c.getAttribValueString(e).toLowerCase();
                        if (n == "repeat") {
                            h.setTextureWrapU(s, 10497)
                        } else {
                            if (n == "clamp") {
                                h.setTextureWrapU(s, 33071)
                            } else {
                                if (n == "mirror") {
                                    h.setTextureWrapU(s, 33648)
                                }
                            }
                        }
                        break;
                    case"wrapv":
                        var n = c.getAttribValueString(e).toLowerCase();
                        if (n == "repeat") {
                            h.setTextureWrapV(s, 10497)
                        } else {
                            if (n == "clamp") {
                                h.setTextureWrapV(s, 33071)
                            } else {
                                if (n == "mirror") {
                                    h.setTextureWrapV(s, 33648)
                                }
                            }
                        }
                        break;
                    case"tangent":
                        h.setTextureTangent(s, c.getAttribValueString(e));
                        break;
                    case"binormal":
                        h.setTextureBinormal(s, c.getAttribValueString(e));
                        break
                }
            }
        } else {
            if (c.getName().toLowerCase() == ("Script").toLowerCase()) {
                for (var e = 0; e < c.getChildNum(); ++e) {
                    var f = c.getChild(e);
                    var d = f.getName().toLowerCase();
                    var m = f.getAttribValueString("Code", true);
                    if (m == null) {
                        m = f.getText()
                    }
                    var v = f.getAttribValueString("Enable", true);
                    if (d == "emissive") {
                        if (m) {
                            h.setEmissiveScript(m)
                        }
                        if (v) {
                            h.enableEmissiveScript(v.toLowerCase() == "true")
                        }
                    } else {
                        if (d == "diffuse") {
                            if (m) {
                                h.setDiffuseScript(m)
                            }
                            if (v) {
                                h.enableDiffuseScript(v.toLowerCase() == "true")
                            }
                        } else {
                            if (d == "specular") {
                                if (m) {
                                    h.setSpecularScript(m)
                                }
                                if (v) {
                                    h.enableSpecularScript(v.toLowerCase() == "true")
                                }
                            } else {
                                if (d == "specularpower") {
                                    if (m) {
                                        h.setSpecularPowerScript(m)
                                    }
                                    if (v) {
                                        h.enableSpecularPowerScript(v.toLowerCase() == "true")
                                    }
                                } else {
                                    if (d == "normal") {
                                        if (m) {
                                            h.setNormalScript(m)
                                        }
                                        if (v) {
                                            h.enableNormalScript(v.toLowerCase() == "true")
                                        }
                                    } else {
                                        if (d == "alpha") {
                                            if (m) {
                                                h.setAlphaScript(m)
                                            }
                                            if (v) {
                                                h.enableAlphaScript(v.toLowerCase() == "true")
                                            }
                                        } else {
                                            if (d == "dctlight") {
                                                if (m) {
                                                    h.setDctLightScript(m)
                                                }
                                                if (v) {
                                                    h.enableDctLightScript(v.toLowerCase() == "true")
                                                }
                                            } else {
                                                if (d == "pointlight") {
                                                    if (m) {
                                                        h.setPointLightScript(m)
                                                    }
                                                    if (v) {
                                                        h.enablePointLightScript(v.toLowerCase() == "true")
                                                    }
                                                } else {
                                                    if (d == "spotlight") {
                                                        if (m) {
                                                            h.setSpotLightScript(m)
                                                        }
                                                        if (v) {
                                                            h.enableSpotLightScript(v.toLowerCase() == "true")
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return true
};
okResourceParser._packMeshAttributes = function (h, a, n, p) {
    var f = new okList();
    for (var o in a) {
        if (o.toLowerCase() == "position" || o.toLowerCase().indexOf("position/") == 0) {
            f.pushFront(o)
        } else {
            if (o != "Texcoord1" && o != "Texcoord2" && o != "Texcoord3" && o != "Texcoord4") {
                f.pushBack(o)
            }
        }
    }
    if (a.Texcoord1) {
        f.pushBack("Texcoord1")
    }
    if (a.Texcoord2) {
        f.pushBack("Texcoord2")
    }
    if (a.Texcoord3) {
        f.pushBack("Texcoord3")
    }
    if (a.Texcoord4) {
        f.pushBack("Texcoord4")
    }
    for (var m = 0; m < h; ++m) {
        var e = f.getRoot();
        while (e) {
            var o = e.data;
            var l = a[o];
            var d = n[o];
            for (var k = 0; k < d; ++k) {
                p.push(l[m * d + k])
            }
            e = e.next
        }
    }
    var c = "";
    var e = f.getRoot();
    while (e) {
        c += (c != "" ? "/" : "") + e.data;
        e = e.next
    }
    return c
};
okResourceParser._parseMeshXML = function (l, d, A, Q, c, ah) {
    if (l.getName() != "Mesh") {
        return false
    }
    var w = l.getAttribValueString("Name", true);
    var x = okAllocator.array();
    var H = (l.getAttribValueInt("VertexCount", true) ? l.getAttribValueInt("VertexCount", true) : 0);
    var V = (l.getChild("IndexList", true) ? l.getChild("IndexList", true).getChildNum() : 0);
    var Y = okAllocator.object();
    var X = okAllocator.object();
    var o = okAllocator.object();
    var aa = okAllocator.object();
    var Z = okAllocator.object();
    var P = {triangles: 4, trianglestrip: 5, trianglefan: 6, lines: 1, linestrip: 3, lineloop: 2, points: 0};
    var ab = {triangles: 3, trianglestrip: 0, trianglefan: 0, lines: 2, linestrip: 0, lineloop: 0, points: 1};
    var p = l.getChild("AttributeList", true);
    for (var ae = 0; ae < p.getChildNum(); ++ae) {
        var U = p.getChild(ae);
        if (U.getName().toLowerCase() == "attribute") {
            var O = U.getAttribValueString("Name", true);
            var s = U.getAttribValueFloatArray("Data", true);
            var u = s.length / H;
            if (u - Math.floor(u) != 0) {
                return false
            }
            Y[O] = s;
            X[O] = u
        }
    }
    var aj = l.getChild("IndexList", true);
    for (var ae = 0; ae < aj.getChildNum(); ++ae) {
        var y = aj.getChild(ae);
        if (y.getName().toLowerCase() == "index") {
            var O = y.getAttribValueString("Name", true);
            var s = y.getAttribValueIntArray("Data", true);
            var ac = y.getAttribValueIntArray("Topology", true);
            o[O] = s;
            aa[O] = P[ac ? ac : "triangles"];
            Z[O] = ab[ac ? ac : "triangles"]
        }
    }
    if (ah) {
        var ad = okAllocator.array();
        var ao = okResourceParser._packMeshAttributes(H, Y, X, ad);
        okAllocator._object(Y);
        Y = okAllocator.object();
        Y[ao] = ad;
        okAllocator._object(X);
        X = okAllocator.object();
        X[ao] = ad.length / H
    }
    var k = "";
    var T = null;
    var K = 0;
    var h = 0;
    var L = 0;
    for (var v in aa) {
        k = v;
        T = o[v];
        L = T.length;
        K = aa[v];
        h = Z[v];
        break
    }
    if (H > 65536 && V == 1 && (K == 4 || K == 1 || K == 0)) {
        var G = 0;
        while (G < L) {
            var R = 0;
            while (Q[w + "_SV_" + R] != null) {
                R++
            }
            Q[w + "_SV_" + R] = true;
            var E = d.createMesh(w + "_SV_" + R);
            var am = 0;
            var I = new Array();
            for (var af = 0; af < H; ++af) {
                I.push(-1)
            }
            var t = okAllocator.object();
            for (var a in Y) {
                t[a] = okAllocator.array()
            }
            var z = okAllocator.array();
            while (G < L) {
                var q = G;
                var n = Math.min(G + h, L);
                var N = am;
                for (var af = q; af < n; ++af) {
                    var ak = T[af];
                    if (I[ak] == -1) {
                        I[ak] = am;
                        for (var a in t) {
                            var u = X[a];
                            var ag = Y[a];
                            var aq = t[a];
                            for (var ae = 0; ae < u; ++ae) {
                                aq.push(ag[ak * u + ae])
                            }
                        }
                        am += 1
                    }
                    z.push(I[ak])
                }
                if (am > 65536) {
                    am = N;
                    for (var a in t) {
                        var aq = t[a];
                        var u = X[a];
                        while (aq.length > 65536 * u) {
                            aq.pop()
                        }
                    }
                    for (var af = q; af < n; ++af) {
                        z.pop()
                    }
                    break
                }
                G += h
            }
            for (var a in t) {
                var F = t[a];
                if (F.length > 0) {
                    E.createAttribute(a, F.length, F)
                }
            }
            if (z.length > 0) {
                E.createIndex(k, z.length, z, 35044, K)
            }
            E.setVertexNum(am);
            x.push(E)
        }
    } else {
        var E = d.createMesh(w);
        for (var a in Y) {
            var F = Y[a];
            if (F.length > 0) {
                E.createAttribute(a, F.length, F)
            }
        }
        for (var v in o) {
            var M = o[v];
            if (M.length > 0) {
                E.createIndex(v, M.length, M, 35044, aa[v])
            }
        }
        E.setVertexNum(H);
        x.push(E)
    }
    okAllocator._object(Y);
    okAllocator._object(X);
    okAllocator._object(o);
    okAllocator._object(aa);
    okAllocator._object(Z);
    for (var af = 0; af < l.getChildNum(); ++af) {
        var D = l.getChild(af);
        var e = D.getName();
        switch (e) {
            case"Skin":
                var W = D;
                for (var w in x) {
                    var E = x[w];
                    var C = E.getSkin();
                    C.clear();
                    for (var ae = 0; ae < W.getChildNum(); ++ae) {
                        var D = W.getChild(ae);
                        if (D.getName() == "Bone") {
                            C.addBone(D.getAttribValueString("Name"), D.getAttribValueMat43("InitMatrix"))
                        } else {
                            if (D.getName() == "BoundingBox") {
                                C.setBoundingBox(D.getAttribValueVec3("Min"), D.getAttribValueVec3("Max"))
                            }
                        }
                    }
                    C.setRefAttributeName(W.getAttribValueString("VertexBoneIndexAttribName"), W.getAttribValueString("VertexBoneWeightAttribName"))
                }
                break;
            case"BoundingBox":
                for (var w in x) {
                    var E = x[w];
                    E.setBoundingBox(D.getAttribValueVec3("Min"), D.getAttribValueVec3("Max"))
                }
                break
        }
    }
    var S = l.getAttribValueString("Material");
    if (S != "") {
        for (var w in x) {
            var E = x[w];
            A[S].clone(E.getMaterial())
        }
    }
    if (c != false) {
        for (var w in x) {
            var E = x[w];
            var J = E.getIndexArray("Default");
            var B = new Array;
            var m = J.length / 3;
            for (var ai = 0; ai < m; ++ai) {
                var ap = J[ai * 3];
                var an = J[ai * 3 + 1];
                var al = J[ai * 3 + 2];
                B.push(ap, an, an, al, al, ap)
            }
            E.createIndex("Wireframe", B.length, B)
        }
    }
};

okResourceParser.loadTextureFromImage = function (d, e, c) {
    if (!okIsPower2(e.width) || !okIsPower2(e.height)) {
        if (okIsUndefined(this.texSupportedCanvas)) {
            this.texSupportedCanvas = document.createElement("canvas")
        }
        if (this.texSupportedCanvas) {
            this.texSupportedCanvas.width = okAlignPower2(e.width);
            this.texSupportedCanvas.height = okAlignPower2(e.height);
            var a = this.texSupportedCanvas.getContext("2d");
            a.drawImage(e, 0, 0, e.width, e.height, 0, 0, this.texSupportedCanvas.width, this.texSupportedCanvas.height);
            e = this.texSupportedCanvas
        } else {
            return false
        }
    }
    d.createTexture(3553, e.width, e.height, c, 5121, e);
    return true
};
okResourceParser.loadTextureFromVideo = function (c, d, a) {
    c.createTexture(3553, d.width, d.height, a, 5121, d);
    return true
};

okResourceParser.loadTerrainFromBmp = function (d) {
    var c = d.width;
    var a = d.height
};

function okArrayBuffer(a) {
    this.rc = a;
    this.glArrayBuffer = null;
    this.iBufferType = 0;
    this.iDataType = 0;
    this.iDataSize = 0;
    this.iBufferLength = 0
}

okArrayBuffer.prototype = {
    createBuffer: function (d, e, a, c) {
        this.releaseBuffer();
        this.glArrayBuffer = this.rc.createBuffer();
        this.iBufferType = d;
        this.rc.bindBuffer(this.iBufferType, this.glArrayBuffer);
        this.iDataType = e;
        this.iDataSize = ((e == 5123) ? 2 : 4);
        if (okIsNumber(c)) {
            this.iBufferLength = c;
            this.rc.bufferData(this.iBufferType, c * this.iDataSize, a)
        } else {
            this.iBufferLength = c.length;
            if (okIsArray(c)) {
                if (e == 5126) {
                    this.rc.bufferData(this.iBufferType, new Float32Array(c), a)
                } else {
                    if (e == 5123) {
                        this.rc.bufferData(this.iBufferType, new Uint16Array(c), a)
                    }
                }
            } else {
                this.rc.bufferData(this.iBufferType, c, a)
            }
        }
    }, releaseBuffer: function () {
        if (this.glArrayBuffer != null) {
            this.rc.deleteBuffer(this.glArrayBuffer)
        }
        this.glArrayBuffer = null
    }, updateBuffer: function (a, c, d) {
        this.rc.bindBuffer(this.iBufferType, this.glArrayBuffer);
        if (okIsArray(d)) {
            if (this.iDataType == 5126) {
                this.rc.bufferSubData(this.iBufferType, a * this.iDataSize, new Float32Array(d))
            } else {
                if (this.iDataType == 5123) {
                    this.rc.bufferSubData(this.iBufferType, a * this.iDataSize, new Uint16Array(d))
                }
            }
        } else {
            this.rc.bufferSubData(this.iBufferType, a * this.iDataSize, d)
        }
    }, getLength: function () {
        return this.iBufferLength
    }, bindAttrib: function (d, c, e, a) {
        this.rc.bindBuffer(this.iBufferType, this.glArrayBuffer);
        this.rc.enableVertexAttribArray(d);
        this.rc.vertexAttribPointer(d, c, this.iDataType, false, a * this.iDataSize, e * this.iDataSize)
    }, bind: function () {
        this.rc.bindBuffer(this.iBufferType, this.glArrayBuffer)
    }, drawIndex: function (a, c, d) {
        this.rc.bindBuffer(this.iBufferType, this.glArrayBuffer);
        this.rc.drawElements(a, d ? d : this.iBufferLength, this.iDataType, c ? c * this.iDataSize : 0)
    }
};

function okRenderBuffer(a) {
    this.rc = a;
    this.glRenderBufferObj = null;
    this.iBufferFormat = 0;
    this.iWidth = 0;
    this.iHeight = 0
}

okRenderBuffer.prototype = {
    createBuffer: function (a, c, d) {
        this.releaseBuffer();
        this.glRenderBufferObj = this.rc.createRenderbuffer();
        this.rc.bindRenderbuffer(36161, this.glRenderBufferObj);
        this.rc.renderbufferStorage(36161, a, c, d);
        this.iBufferFormat = a;
        this.iWidth = c;
        this.iHeight = d
    }, releaseBuffer: function () {
        if (this.glRenderBufferObj != null) {
            this.rc.deleteRenderbuffer(this.glRenderBufferObj)
        }
        this.glRenderBufferObj = null;
        this.iBufferFormat = 0;
        this.iWidth = 0;
        this.iHeight = 0
    }
};

function okFrameBuffer(a) {
    this.rc = a;
    this.glFrameBufferObj = null
}

okFrameBuffer.prototype = {
    createBuffer: function () {
        this.glFrameBufferObj = this.rc.createFramebuffer()
    }, releaseBuffer: function () {
        if (this.glFrameBufferObj != null) {
            this.rc.deleteFramebuffer(this.glFrameBufferObj)
        }
        this.glFrameBufferObj = null
    }, bind: function () {
        this.rc.bindFramebuffer(36160, this.glFrameBufferObj)
    }, unbind: function () {
        this.rc.bindFramebuffer(36160, null)
    }, attachRenderTexture: function (c, a) {
        this.rc.framebufferTexture2D(36160, 36064 + c, 3553, a ? a.glTextureObj : null, 0)
    }, attachDepthBuffer: function (a) {
        this.rc.framebufferRenderbuffer(36160, 36096, 36161, a.glRenderBufferObj)
    }, attachStencilBuffer: function (a) {
        this.rc.framebufferRenderbuffer(36160, 36128, 36161, a.glRenderBufferObj)
    }, attachDepthStencilBuffer: function (a) {
        this.rc.framebufferRenderbuffer(36160, 33306, 36161, a ? a.glRenderBufferObj : null)
    }
};

function okShader(c, a) {
    this.iShaderType = a;
    this.rc = c;
    this.glShaderObj = this.rc.createShader(this.iShaderType);
    this.sShaderSource = "";
    this.sFloatPrecision = "mediump"
}

okShader.prototype = {
    releaseShader: function () {
        if (this.glShaderObj != null) {
            this.rc.deleteShader(this.glShaderObj)
        }
        this.glShaderObj = null
    }, releaseSource: function () {
        this.sShaderSource = ""
    }, loadSource: function (a) {
        this.sShaderSource = a.substr(0, a.length)
    }, setFloatPrecision: function (a) {
        this.sFloatPrecision = a
    }, compile: function (f, c) {
        var i = "";
        if (f != null) {
            for (var h in f) {
                i += ("\n#define " + h + " " + f[h] + "\n")
            }
        }
        var e = "";
        if (this.iShaderType == 35632) {
            e = "\nprecision " + this.sFloatPrecision + " float;\n"
        }
        if (this.glShaderObj == null) {
            this.glShaderObj = this.rc.createShader(this.iShaderType)
        }
        var d = e + ((f != null) ? i + this.sShaderSource : this.sShaderSource);
        this.rc.shaderSource(this.glShaderObj, d);
        this.rc.compileShader(this.glShaderObj);
        if (!this.rc.getShaderParameter(this.glShaderObj, 35713)) {
            var a = this.rc.getShaderInfoLog(this.glShaderObj);
            if (OAK._SOURCE) {
                alert("[Oak3D Error]\n" + a + "\n[Source]\n" + d)
            } else {
                if (c) {
                    c.errorMsg = a
                }
            }
            return false
        }
        return true
    }
};

function okProgram(a) {
    this.rc = a;
    this.glProgramObj = this.rc.createProgram();
    this.vertexShader = null;
    this.fragmentShader = null;
    this.aAddrA = null;
    this.aAddrU = null;
    this.aTexBind = null;
    this.tempFloat3x3Array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.tempFloat4x3Array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.tempFloat4x4Array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.tempArray = new Array
}

okProgram.prototype = {
    releaseProgram: function () {
        if (this.glProgramObj != null) {
            this.rc.deleteProgram(this.glProgramObj)
        }
        this.glProgramObj = null
    }, attachVertexShader: function (a) {
        this.vertexShader = a
    }, attachFragmentShader: function (a) {
        this.fragmentShader = a
    }, link: function (a) {
        if (this.glProgramObj == null) {
            this.glProgramObj = this.rc.createProgram()
        }
        this.rc.attachShader(this.glProgramObj, this.vertexShader.glShaderObj);
        this.rc.attachShader(this.glProgramObj, this.fragmentShader.glShaderObj);
        this.rc.linkProgram(this.glProgramObj);
        if (!this.rc.getProgramParameter(this.glProgramObj, 35714)) {
            if (OAK._SOURCE) {
                var k = this.rc.getProgramInfoLog(this.glProgramObj);
                alert("[Oak3D Error]\n" + k)
            } else {
                if (a) {
                    a.errorMsg = k
                }
            }
            return false
        }
        this.aAddrA = new Object;
        this.aAddrU = new Object;
        this.aTexBind = new Object;
        var d = this.rc.getProgramParameter(this.glProgramObj, 35721);
        var h = this.rc.getProgramParameter(this.glProgramObj, 35718);
        for (var e = 0; e < d; ++e) {
            var l = this.rc.getActiveAttrib(this.glProgramObj, e);
            var c = l.name.replace(/\[\d*\]/g, "");
            this.aAddrA[c] = this.rc.getAttribLocation(this.glProgramObj, c)
        }
        var f = 0;
        for (var e = 0; e < h; ++e) {
            var l = this.rc.getActiveUniform(this.glProgramObj, e);
            var c = l.name.replace(/\[\d*\]/g, "");
            this.aAddrU[c] = this.rc.getUniformLocation(this.glProgramObj, c);
            if (l.type == 35678 || l.type == 35680) {
                this.aTexBind[c] = f;
                f += l.size
            }
        }
        return true
    }, setUniformInt: function (a, c) {
        this.rc.uniform1i(this.aAddrU[a], c)
    }, setUniformInt2: function (c, a, d) {
        if (typeof a == "number") {
            this.rc.uniform2i(this.aAddrU[c], a, d)
        } else {
            this.rc.uniform2i(this.aAddrU[c], a.x, a.y)
        }
    }, setUniformInt3: function (c, a, e, d) {
        if (typeof a == "number") {
            this.rc.uniform3i(this.aAddrU[c], a, e, d)
        } else {
            this.rc.uniform3i(this.aAddrU[c], a.x, a.y, a.z)
        }
    }, setUniformInt4: function (d, a, f, e, c) {
        if (typeof a == "number") {
            this.rc.uniform4i(this.aAddrU[d], a, f, e, c)
        } else {
            this.rc.uniform4i(this.aAddrU[d], a.x, a.y, a.z, a.w)
        }
    }, setUniformIntArray: function (c, a) {
        this.rc.uniform1iv(this.aAddrU[c], a)
    }, setUniformInt2Array: function (c, a) {
        this.rc.uniform2iv(this.aAddrU[c], a)
    }, setUniformInt3Array: function (c, a) {
        this.rc.uniform3iv(this.aAddrU[c], a)
    }, setUniformInt4Array: function (c, a) {
        this.rc.uniform4iv(this.aAddrU[c], a)
    }, setUniformFloat: function (c, a) {
        this.rc.uniform1f(this.aAddrU[c], a)
    }, setUniformFloat2: function (d, c, a) {
        if (typeof c == "number") {
            this.rc.uniform2f(this.aAddrU[d], c, a)
        } else {
            this.rc.uniform2f(this.aAddrU[d], c.x, c.y)
        }
    }, setUniformFloat3: function (e, d, c, a) {
        if (typeof d == "number") {
            this.rc.uniform3f(this.aAddrU[e], d, c, a)
        } else {
            this.rc.uniform3f(this.aAddrU[e], d.x, d.y, d.z)
        }
    }, setUniformFloat4: function (f, d, c, a, e) {
        if (typeof d == "number") {
            this.rc.uniform4f(this.aAddrU[f], d, c, a, e)
        } else {
            this.rc.uniform4f(this.aAddrU[f], d.x, d.y, d.z, d.w)
        }
    }, setUniformFloatArray: function (c, a) {
        this.rc.uniform1fv(this.aAddrU[c], a)
    }, setUniformFloat2Array: function (c, a) {
        this.rc.uniform2fv(this.aAddrU[c], a)
    }, setUniformFloat3Array: function (c, a) {
        this.rc.uniform3fv(this.aAddrU[c], a)
    }, setUniformFloat4Array: function (c, a) {
        this.rc.uniform4fv(this.aAddrU[c], a)
    }, setUniformVec2Array: function (e, d) {
        var f = okAllocator.array();
        var a = d.length;
        for (var c = 0; c < a; ++c) {
            var h = d[c];
            f.push(h.x, h.y)
        }
        this.rc.uniform2fv(this.aAddrU[e], f);
        okAllocator._array(f)
    }, setUniformVec3Array: function (e, d) {
        var f = okAllocator.array();
        var a = d.length;
        for (var c = 0; c < a; ++c) {
            var h = d[c];
            f.push(h.x, h.y, h.z)
        }
        this.rc.uniform3fv(this.aAddrU[e], f);
        okAllocator._array(f)
    }, setUniformVec4Array: function (e, d) {
        var f = okAllocator.array();
        var a = d.length;
        for (var c = 0; c < a; ++c) {
            var h = d[c];
            f.push(h.x, h.y, h.z, h.w)
        }
        this.rc.uniform4fv(this.aAddrU[e], f);
        okAllocator._array(f)
    }, setUniformMat3: function (c, a) {
        var d = this.tempFloat3x3Array;
        d[0] = a.m00;
        d[1] = a.m10;
        d[2] = a.m20;
        d[3] = a.m01;
        d[4] = a.m11;
        d[5] = a.m21;
        d[6] = a.m02;
        d[7] = a.m12;
        d[8] = a.m22;
        this.rc.uniformMatrix3fv(this.aAddrU[c], false, d)
    }, setUniformMat3Array: function (e, d) {
        var f = this.tempArray;
        f.length = 0;
        var a = d.length;
        for (var c = 0; c < a; ++c) {
            f.push(d[c].m00, d[c].m10, d[c].m20, d[c].m01, d[c].m11, d[c].m21, d[c].m02, d[c].m12, d[c].m22)
        }
        this.rc.uniformMatrix3fv(this.aAddrU[e], false, f)
    }, setUniformMat4: function (c, a) {
        var d = this.tempFloat4x4Array;
        d[0] = a.m00;
        d[1] = a.m10;
        d[2] = a.m20;
        d[3] = a.m30;
        d[4] = a.m01;
        d[5] = a.m11;
        d[6] = a.m21;
        d[7] = a.m31;
        d[8] = a.m02;
        d[9] = a.m12;
        d[10] = a.m22;
        d[11] = a.m32;
        d[12] = a.m03;
        d[13] = a.m13;
        d[14] = a.m23;
        d[15] = a.m33;
        this.rc.uniformMatrix4fv(this.aAddrU[c], false, d)
    }, setUniformMat4Array: function (e, d) {
        var f = this.tempArray;
        f.length = 0;
        var a = d.length;
        for (var c = 0; c < a; ++c) {
            f.push(d[c].m00, d[c].m10, d[c].m20, d[c].m30, d[c].m01, d[c].m11, d[c].m21, d[c].m31, d[c].m02, d[c].m12, d[c].m22, d[c].m32, d[c].m03, d[c].m13, d[c].m23, d[c].m33)
        }
        this.rc.uniformMatrix4fv(this.aAddrU[e], false, f)
    }, setUniformMat43: function (d, c, a) {
        if (!a) {
            var e = this.tempFloat4x3Array;
            e[0] = c.m00;
            e[1] = c.m01;
            e[2] = c.m02;
            e[3] = c.m03;
            e[4] = c.m10;
            e[5] = c.m11;
            e[6] = c.m12;
            e[7] = c.m13;
            e[8] = c.m20;
            e[9] = c.m21;
            e[10] = c.m22;
            e[11] = c.m23;
            this.rc.uniform4fv(this.aAddrU[d], e)
        } else {
            var e = this.tempFloat4x4Array;
            e[0] = c.m00;
            e[1] = c.m10;
            e[2] = c.m20;
            e[3] = 0;
            e[4] = c.m01;
            e[5] = c.m11;
            e[6] = c.m21;
            e[7] = 0;
            e[8] = c.m02;
            e[9] = c.m12;
            e[10] = c.m22;
            e[11] = 0;
            e[12] = c.m03;
            e[13] = c.m13;
            e[14] = c.m23;
            e[15] = 1;
            this.rc.uniformMatrix4fv(this.aAddrU[d], false, e)
        }
    }, setUniformMat43Array: function (f, e, c) {
        var h = this.tempArray;
        h.length = 0;
        if (!c) {
            var a = e.length;
            for (var d = 0; d < a; ++d) {
                h.push(e[d].m00, e[d].m01, e[d].m02, e[d].m03, e[d].m10, e[d].m11, e[d].m12, e[d].m13, e[d].m20, e[d].m21, e[d].m22, e[d].m23)
            }
            this.rc.uniform4fv(this.aAddrU[f], h)
        } else {
            var a = e.length;
            for (var d = 0; d < a; ++d) {
                h.push(e[d].m00, e[d].m10, e[d].m20, 0, e[d].m01, e[d].m11, e[d].m21, 0, e[d].m02, e[d].m12, e[d].m22, 0, e[d].m03, e[d].m13, e[d].m23, 1)
            }
            this.rc.uniformMatrix4fv(this.aAddrU[f], false, h)
        }
    }, setSampler: function (a, c) {
        this.rc.uniform1i(this.aAddrU[a], c)
    }, setSamplerArray: function (a, c) {
        this.rc.uniform1iv(this.aAddrU[a], c)
    }, setTexture: function (h, c, f, a, d) {
        if (c) {
            var k = this.aAddrU[h];
            var i = this.aTexBind[h];
            this.rc.uniform1i(this.aAddrU[h], i);
            c.bind(i);
            var e = c.getType();
            f = f ? f : 10497;
            this.rc.texParameteri(e, 10242, f);
            this.rc.texParameteri(e, 10243, f);
            if (c.isMipMap()) {
                if (a == 9728 || a == 9729) {
                    a += 9984 - 9728
                } else {
                    if (a == null) {
                        a = 9985
                    }
                }
            } else {
                a = a ? a : 9729
            }
            this.rc.texParameteri(e, 10241, a);
            d = d ? d : 9729;
            this.rc.texParameteri(e, 10240, d)
        }
    }, setTextureArray: function (t, n, a, e, k) {
        var f = this.aAddrU[t];
        var q = this.aTexBind[t];
        var m = okAllocator.array();
        var q = this.aTexBind[t];
        var c = n.length;
        for (var h = 0; h < c; ++h) {
            var p = n[h];
            var d = (a ? (okIsNumber(a) ? a : a[h]) : null);
            var l = (e ? (okIsNumber(e) ? e : e[h]) : null);
            var o = (k ? (okIsNumber(k) ? k : k[h]) : null);
            p.bind(q);
            var s = p.getType();
            d = d ? d : 10497;
            this.rc.texParameteri(s, 10242, d);
            this.rc.texParameteri(s, 10243, d);
            if (p.isMipMap()) {
                if (l == 9728 || l == 9729) {
                    l += 9984 - 9728
                } else {
                    if (l == null) {
                        l = 9985
                    }
                }
            } else {
                l = l ? l : 9729
            }
            this.rc.texParameteri(s, 10241, l);
            o = o ? o : 9729;
            this.rc.texParameteri(s, 10240, o);
            m.push(q++)
        }
        this.rc.uniform1iv(this.aAddrU[t], m);
        okAllocator._array(m)
    }, setAttribute: function (f, e, d, c, a) {
        var h = this.aAddrA[f];
        if (h != null) {
            e.bindAttrib(h, d, (c != null) ? c : 0, (a != null) ? a : 0)
        }
    }, bind: function () {
        this.rc.useProgram(this.glProgramObj)
    }
};

function okTexture(a) {
    this.rc = a;
    this.glTextureObj = null;
    this.iType = 0;
    this.iSizeU = 0;
    this.iSizeV = 0;
    this.iFormat = 0;
    this.bMipMap = false;
    this.video = null
}

okTexture.prototype = {
    isValid: function () {
        return (this.glTextureObj != null)
    }, getType: function () {
        return this.iType
    }, createTexture: function (m, h, f, n, c, l, e, k, d, i, a) {
        this.releaseTexture();
        this.glTextureObj = this.rc.createTexture();
        this.iType = m;
        this.iSizeU = h;
        this.iSizeV = f;
        this.iFormat = n;
        this.bMipMap = false;
        if (m == 3553) {
            this.rc.bindTexture(3553, this.glTextureObj);
            if (l == null || okIsArray(l)) {
                this.rc.texImage2D(3553, 0, n, h, f, 0, n, c ? c : 5121, l ? new Uint8Array(l) : null)
            } else {
                this.rc.texImage2D(3553, 0, n, n, c ? c : 5121, l)
            }
        } else {
            if (m == 34067) {
                this.rc.bindTexture(34067, this.glTextureObj);
                if (l == null || okIsArray(l)) {
                    this.rc.texImage2D(34069, 0, n, h, f, 0, n, c ? c : 5121, l ? new Uint8Array(l) : null)
                } else {
                    this.rc.texImage2D(34069, 0, n, n, c ? c : 5121, l)
                }
                if (e == null || okIsArray(e)) {
                    this.rc.texImage2D(34070, 0, n, h, f, 0, n, c ? c : 5121, e ? new Uint8Array(e) : null)
                } else {
                    this.rc.texImage2D(34070, 0, n, n, c ? c : 5121, e)
                }
                if (k == null || okIsArray(k)) {
                    this.rc.texImage2D(34071, 0, n, h, f, 0, n, c ? c : 5121, k ? new Uint8Array(k) : null)
                } else {
                    this.rc.texImage2D(34071, 0, n, n, c ? c : 5121, k)
                }
                if (d == null || okIsArray(d)) {
                    this.rc.texImage2D(34072, 0, n, h, f, 0, n, c ? c : 5121, d ? new Uint8Array(d) : null)
                } else {
                    this.rc.texImage2D(34072, 0, n, n, c ? c : 5121, d)
                }
                if (i == null || okIsArray(i)) {
                    this.rc.texImage2D(34073, 0, n, h, f, 0, n, c ? c : 5121, i ? new Uint8Array(i) : null)
                } else {
                    this.rc.texImage2D(34073, 0, n, n, c ? c : 5121, i)
                }
                if (a == null || okIsArray(a)) {
                    this.rc.texImage2D(34074, 0, n, h, f, 0, n, c ? c : 5121, a ? new Uint8Array(a) : null)
                } else {
                    this.rc.texImage2D(34074, 0, n, n, c ? c : 5121, a)
                }
            }
        }
    }, releaseTexture: function () {
        if (this.glTextureObj != null) {
            this.rc.deleteTexture(this.glTextureObj);
            this.glTextureObj = null
        }
        this.iType = 0;
        this.iSizeU = 0;
        this.iSizeV = 0;
        this.iFormat = 0;
        this.bMipMap = false
    }, updateTexture: function (k, i, h, f, c, n, e, m, d, l, a) {
        if (this.iType == 3553) {
            this.rc.bindTexture(3553, this.glTextureObj);
            if (okIsArray(n)) {
                this.rc.texSubImage2D(3553, 0, k, i, h, f, this.iFormat, c ? c : 5121, new Uint8Array(n))
            } else {
                this.rc.texSubImage2D(3553, 0, k, i, this.iFormat, c ? c : 5121, n)
            }
        } else {
            if (this.iType == 34067) {
                this.rc.bindTexture(34067, this.glTextureObj);
                if (n) {
                    if (okIsArray(n)) {
                        this.rc.texSubImage2D(34069, 0, k, i, h, f, this.iFormat, c ? c : 5121, new Uint8Array(n))
                    } else {
                        this.rc.texSubImage2D(34069, 0, k, i, this.iFormat, c ? c : 5121, n)
                    }
                }
                if (e) {
                    if (okIsArray(e)) {
                        this.rc.texSubImage2D(34070, 0, k, i, h, f, this.iFormat, c ? c : 5121, new Uint8Array(e))
                    } else {
                        this.rc.texSubImage2D(34070, 0, k, i, this.iFormat, c ? c : 5121, e)
                    }
                }
                if (m) {
                    if (okIsArray(m)) {
                        this.rc.texSubImage2D(34071, 0, k, i, h, f, this.iFormat, c ? c : 5121, new Uint8Array(m))
                    } else {
                        this.rc.texSubImage2D(34071, 0, k, i, this.iFormat, c ? c : 5121, m)
                    }
                }
                if (d) {
                    if (okIsArray(d)) {
                        this.rc.texSubImage2D(34072, 0, k, i, h, f, this.iFormat, c ? c : 5121, new Uint8Array(d))
                    } else {
                        this.rc.texSubImage2D(34072, 0, k, i, this.iFormat, c ? c : 5121, d)
                    }
                }
                if (l) {
                    if (okIsArray(l)) {
                        this.rc.texSubImage2D(34073, 0, k, i, h, f, this.iFormat, c ? c : 5121, new Uint8Array(l))
                    } else {
                        this.rc.texSubImage2D(34073, 0, k, i, this.iFormat, c ? c : 5121, l)
                    }
                }
                if (a) {
                    if (okIsArray(a)) {
                        this.rc.texSubImage2D(34074, 0, k, i, h, f, this.iFormat, c ? c : 5121, new Uint8Array(a))
                    } else {
                        this.rc.texSubImage2D(34074, 0, k, i, this.iFormat, c ? c : 5121, a)
                    }
                }
            }
        }
    }, getSizeU: function (a) {
        var c = (this.iSizeU >> ((a != null) ? a : 0));
        return (c > 0) ? c : 1
    }, getSizeV: function (a) {
        var c = (this.iSizeV >> ((a != null) ? a : 0));
        return (c > 0) ? c : 1
    }, bind: function (a) {
        this.rc.activeTexture(33984 + ((a != null) ? a : 0));
        this.rc.bindTexture(this.iType, this.glTextureObj)
    }, updateVideoTexture: function () {
        if (!this.video) {
            return
        }
        if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
            this.updateTexture(0, 0, 0, 0, 5121, this.video);
            this.rc.texParameteri(3553, 10242, 33071);
            this.rc.texParameteri(3553, 10243, 33071);
            this.rc.texParameteri(3553, 10240, 9729);
            this.rc.texParameteri(3553, 10241, 9729)
        }
    }, isVideoTexture: function () {
        if (!this.video) {
            return false
        }
        return true
    }, genMipMap: function () {
        this.rc.generateMipmap(this.iType);
        this.bMipMap = true
    }, isMipMap: function () {
        return this.bMipMap
    }
};

function okCamera(a) {
    this.rc = a;
    this.sName = "";
    this.mCamMat = new okMat43(1);
    this.mViewMat = new okMat43(1);
    this.bViewMatDirty = true;
    this.iProjMode = 1;
    this.mProjMat = new okMat4(1);
    this.bProjDirty = true;
    this.mViewProjMat = new okMat4(1);
    this.mViewProjInvMat = new okMat4(1);
    this.bViewProjDirty = true;
    this.frustum = new okFrustum();
    this.bFrustumDirty = true;
    this.iViewportX = 0;
    this.iViewportY = 0;
    this.iViewportWidth = 0;
    this.iViewportHeight = 0;
    this.vBackColor = new okVec3(0, 0, 0);
    this.fFov = 45;
    this.fZNear = 1;
    this.fZFar = 10000
}

okCamera.prototype = {
    reset: function (c, a) {
        if (c != false) {
            this.mCamMat.setColumn(3, 0, 0, 0)
        }
        if (a != false) {
            this.mCamMat.setColumn(0, 1, 0, 0);
            this.mCamMat.setColumn(1, 0, 1, 0);
            this.mCamMat.setColumn(2, 0, 0, 1)
        }
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, setName: function (a) {
        this.sName = a
    }, getName: function () {
        return this.sName
    }, setMat: function (a) {
        a.clone(this.mCamMat);
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, setPos: function (d, c, a) {
        if (d != null && a != null) {
            this.mCamMat.m03 = d;
            this.mCamMat.m13 = c;
            this.mCamMat.m23 = a
        } else {
            this.mCamMat.m03 = d.x;
            this.mCamMat.m13 = d.y;
            this.mCamMat.m23 = d.z
        }
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, getPos: function () {
        return this.mCamMat.getColumn(3)
    }, move: function (e, d, c, a) {
        if (e == 2) {
            if (d != null && a != null) {
                this.mCamMat.m03 += d;
                this.mCamMat.m13 += c;
                this.mCamMat.m23 += a
            } else {
                this.mCamMat.m03 += d.x;
                this.mCamMat.m13 += d.y;
                this.mCamMat.m23 += d.z
            }
        } else {
            if (d != null && a != null) {
                this.mCamMat.m03 += (d * this.mCamMat.m00 + c * this.mCamMat.m01 + a * this.mCamMat.m02);
                this.mCamMat.m13 += (d * this.mCamMat.m10 + c * this.mCamMat.m11 + a * this.mCamMat.m12);
                this.mCamMat.m23 += (d * this.mCamMat.m20 + c * this.mCamMat.m21 + a * this.mCamMat.m22)
            } else {
                this.mCamMat.m03 += (d.x * this.mCamMat.m00 + d.y * this.mCamMat.m01 + d.z * this.mCamMat.m02);
                this.mCamMat.m13 += (d.x * this.mCamMat.m10 + d.y * this.mCamMat.m11 + d.z * this.mCamMat.m12);
                this.mCamMat.m23 += (d.x * this.mCamMat.m20 + d.y * this.mCamMat.m21 + d.z * this.mCamMat.m22)
            }
        }
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, moveRight: function (a) {
        this.mCamMat.m03 += a * this.mCamMat.m00;
        this.mCamMat.m13 += a * this.mCamMat.m10;
        this.mCamMat.m23 += a * this.mCamMat.m20;
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, moveUp: function (a) {
        this.mCamMat.m03 += a * this.mCamMat.m01;
        this.mCamMat.m13 += a * this.mCamMat.m11;
        this.mCamMat.m23 += a * this.mCamMat.m21;
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, moveForward: function (a) {
        this.mCamMat.m03 -= a * this.mCamMat.m02;
        this.mCamMat.m13 -= a * this.mCamMat.m12;
        this.mCamMat.m23 -= a * this.mCamMat.m22;
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, rotX: function (i, h) {
        var a = okMat43RotX(h);
        if (i == 2) {
            var e = this.mCamMat.m03;
            var d = this.mCamMat.m13;
            var c = this.mCamMat.m23;
            var f = okMat43Mul(a, this.mCamMat);
            okAllocator._mat43(this.mCamMat);
            this.mCamMat = f;
            this.mCamMat.m03 = e;
            this.mCamMat.m13 = d;
            this.mCamMat.m23 = c
        } else {
            var f = okMat43Mul(this.mCamMat, a);
            okAllocator._mat43(this.mCamMat);
            this.mCamMat = f
        }
        okAllocator._mat43(a);
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, rotY: function (i, h) {
        var a = okMat43RotY(h);
        if (i == 2) {
            var e = this.mCamMat.m03;
            var d = this.mCamMat.m13;
            var c = this.mCamMat.m23;
            var f = okMat43Mul(a, this.mCamMat);
            okAllocator._mat43(this.mCamMat);
            this.mCamMat = f;
            this.mCamMat.m03 = e;
            this.mCamMat.m13 = d;
            this.mCamMat.m23 = c
        } else {
            var f = okMat43Mul(this.mCamMat, a);
            okAllocator._mat43(this.mCamMat);
            this.mCamMat = f
        }
        okAllocator._mat43(a);
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, rotZ: function (i, h) {
        var a = okMat43RotZ(h);
        if (i == 2) {
            var e = this.mCamMat.m03;
            var d = this.mCamMat.m13;
            var c = this.mCamMat.m23;
            var f = okMat43Mul(a, this.mCamMat);
            okAllocator._mat43(this.mCamMat);
            this.mCamMat = f;
            this.mCamMat.m03 = e;
            this.mCamMat.m13 = d;
            this.mCamMat.m23 = c
        } else {
            var f = okMat43Mul(this.mCamMat, a);
            okAllocator._mat43(this.mCamMat);
            this.mCamMat = f
        }
        okAllocator._mat43(a);
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, rotRight: function (d) {
        var a = okMat43RotX(d);
        var c = okMat43Mul(this.mCamMat, a);
        okAllocator._mat43(this.mCamMat);
        this.mCamMat = c;
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, rotUp: function (d) {
        var a = okMat43RotY(d);
        var c = okMat43Mul(this.mCamMat, a);
        okAllocator._mat43(this.mCamMat);
        this.mCamMat = c;
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, rotForward: function (d) {
        var a = okMat43RotZ(-d);
        var c = okMat43Mul(this.mCamMat, a);
        okAllocator._mat43(this.mCamMat);
        this.mCamMat = c;
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, rotTarget: function (e, h, f) {
        var c = okAllocator.mat43();
        this.mCamMat.clone(c);
        c.m03 -= h.x;
        c.m13 -= h.y;
        c.m23 -= h.z;
        var a = okMat43Rot(e, f);
        var d = okMat43Mul(a, c);
        okAllocator._mat43(c);
        d.m03 += h.x;
        d.m13 += h.y;
        d.m23 += h.z;
        d.clone(this.mCamMat);
        okAllocator._mat43(d);
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, getRightDir: function () {
        var a = okAllocator.vec3();
        a.x = this.mCamMat.m00;
        a.y = this.mCamMat.m10;
        a.z = this.mCamMat.m20;
        return a
    }, getUpDir: function () {
        var a = okAllocator.vec3();
        a.x = this.mCamMat.m01;
        a.y = this.mCamMat.m11;
        a.z = this.mCamMat.m21;
        return a
    }, getForwardDir: function () {
        var a = okAllocator.vec3();
        a.x = -this.mCamMat.m02;
        a.y = -this.mCamMat.m12;
        a.z = -this.mCamMat.m22;
        return a
    }, lookAt: function (m, k, h, i, f, e) {
        var l = okAllocator.vec3();
        var c = okAllocator.vec3();
        if (typeof m == "number") {
            l.x = m;
            l.y = k;
            l.z = h;
            if (f) {
                c.x = i;
                c.y = f;
                c.z = e
            } else {
                if (i) {
                    c.x = i.x;
                    c.y = i.y;
                    c.z = i.z
                } else {
                    c.x = this.mCamMat.m01;
                    c.y = this.mCamMat.m11;
                    c.z = this.mCamMat.m21
                }
            }
        } else {
            l.x = m.x;
            l.y = m.y;
            l.z = m.z;
            if (h) {
                c.x = k;
                c.y = h;
                c.z = i
            } else {
                if (k) {
                    c.x = k.x;
                    c.y = k.y;
                    c.z = k.z
                } else {
                    c.x = this.mCamMat.m01;
                    c.y = this.mCamMat.m11;
                    c.z = this.mCamMat.m21
                }
            }
        }
        var a = okAllocator.vec3();
        a.x = this.mCamMat.m03 - l.x;
        a.y = this.mCamMat.m13 - l.y;
        a.z = this.mCamMat.m23 - l.z;
        a.normalize(true);
        var d = okVec3Cross(c, a);
        if (d.equal(OAK.VEC3_ZERO)) {
            d.x = this.mCamMat.m00;
            d.y = this.mCamMat.m10;
            d.z = this.mCamMat.m20;
            d.normalize(true);
            c = okVec3Cross(a, d);
            okAllocator._vec3(d);
            d = okVec3Cross(c, a)
        } else {
            okAllocator._vec3(c);
            c = okVec3Cross(a, d)
        }
        d.normalize(true);
        c.normalize(true);
        this.mCamMat.m00 = d.x;
        this.mCamMat.m10 = d.y;
        this.mCamMat.m20 = d.z;
        this.mCamMat.m01 = c.x;
        this.mCamMat.m11 = c.y;
        this.mCamMat.m21 = c.z;
        this.mCamMat.m02 = a.x;
        this.mCamMat.m12 = a.y;
        this.mCamMat.m22 = a.z;
        this.bViewMatDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, getViewMat4: function () {
        if (this.bViewMatDirty) {
            okAllocator._mat43(this.mViewMat);
            this.mViewMat = this.mCamMat.inverse();
            this.bViewMatDirty = false
        }
        var a = okAllocator.mat4();
        this.mViewMat.toMat4(a);
        return a
    }, getViewMat43: function () {
        if (this.bViewMatDirty) {
            okAllocator._mat43(this.mViewMat);
            this.mViewMat = this.mCamMat.inverse();
            this.bViewMatDirty = false
        }
        var a = okAllocator.mat43();
        this.mViewMat.clone(a);
        return a
    }, getMat4: function () {
        var a = okAllocator.mat4();
        this.mCamMat.toMat4(a);
        return a
    }, getMat43: function () {
        var a = okAllocator.mat43();
        this.mCamMat.clone(a);
        return a
    }, getViewInvMat4: function () {
        var a = okAllocator.mat4();
        this.mCamMat.toMat4(a);
        return a
    }, getViewInvMat43: function () {
        var a = okAllocator.mat43();
        this.mCamMat.clone(a);
        return a
    }, setViewport: function (d, c, a, e) {
        this.iViewportX = d;
        this.iViewportY = c;
        this.iViewportWidth = a;
        this.iViewportHeight = e;
        this.bProjDirty = true;
        this.bViewProjDirty = true;
        this.bFrustumDirty = true
    }, getViewportLeft: function () {
        return this.iViewportX
    }, getViewportTop: function () {
        return this.iViewportY
    }, getViewportWidth: function () {
        return this.iViewportWidth
    }, getViewportHeight: function () {
        return this.iViewportHeight
    }, bindViewport: function () {
        var a = this.rc.canvas.clientHeight;
        this.rc.viewport(this.iViewportX, a - (this.iViewportY + this.iViewportHeight), this.iViewportWidth, this.iViewportHeight);
        this.rc.scissor(this.iViewportX, a - (this.iViewportY + this.iViewportHeight), this.iViewportWidth, this.iViewportHeight)
    }, setBackColor: function (c, a, d, e) {
        if (a == null) {
            this.vBackColor.x = c.x;
            this.vBackColor.y = c.y;
            this.vBackColor.z = c.z;
            this.vBackColor.w = c.w
        } else {
            this.vBackColor.x = c;
            this.vBackColor.y = a;
            this.vBackColor.z = d;
            this.vBackColor.w = e
        }
    }, getBackColor: function () {
        return this.vBackColor
    }, setFov: function (a) {
        this.fFov = a;
        this.bProjDirty = true;
        this.bViewProjDirty = true
    }, getFov: function () {
        return this.fFov
    }, setVisibleRange: function (a, c) {
        this.fZNear = Math.max(0.01, a);
        this.fZFar = c;
        this.bProjDirty = true;
        this.bViewProjDirty = true
    }, setVisibleNear: function (a) {
        this.fZNear = a
    }, setVisibleFar: function (a) {
        this.fZFar = a
    }, getVisibleNear: function () {
        return this.fZNear
    }, getVisibleFar: function () {
        return this.fZFar
    }, setProjMode: function (a) {
        this.iProjMode = a;
        this.bProjDirty = true;
        this.bViewProjDirty = true
    }, getProjMode: function () {
        return this.iProjMode
    }, getProjMat4: function () {
        if (this.bProjDirty) {
            if (this.iProjMode == 1) {
                okAllocator._mat4(this.mProjMat);
                this.mProjMat = okMat4Proj(this.fFov, this.iViewportWidth / this.iViewportHeight, this.fZNear, this.fZFar);
                this.bProjDirty = false
            } else {
                okAllocator._mat4(this.mProjMat);
                this.mProjMat = okMat4Ortho(-1, 1, 1, -1, this.fZNear, this.fZFar);
                this.bProjDirty = false
            }
        }
        return this.mProjMat
    }, getViewProjMat4: function () {
        if (this.bViewProjDirty) {
            okAllocator._mat4(this.mViewProjMat);
            okAllocator._mat4(this.mViewProjInvMat);
            this.mViewProjMat = okMat4Mul(this.getProjMat4(), this.getViewMat4());
            this.mViewProjInvMat = this.mViewProjMat.inverse();
            this.bViewProjDirty = false
        }
        return this.mViewProjMat
    }, getViewProjInvMat4: function () {
        if (this.bViewProjDirty) {
            okAllocator._mat4(this.mViewProjMat);
            okAllocator._mat4(this.mViewProjInvMat);
            this.mViewProjMat = okMat4Mul(this.getProjMat4(), this.getViewMat4());
            this.mViewProjInvMat = this.mViewProjMat.inverse();
            this.bViewProjDirty = false
        }
        return this.mViewProjInvMat
    }, getFrustum: function () {
        if (this.bFrustumDirty) {
            this.frustum.setByViewProjMat(this.getViewProjMat4());
            this.bFrustumDirty = false
        }
        return this.frustum
    }, getPickPoint: function (c, h) {
        var a = c - this.iViewportX;
        var f = this.iViewportHeight - (h - this.iViewportY);
        var d = okAllocator.vec3();
        d.x = a / this.iViewportWidth * 2 - 1;
        d.y = f / this.iViewportHeight * 2 - 1;
        d.z = -0.99;
        var e = okMat4MulVec3(this.getViewProjInvMat4(), d);
        okAllocator._vec3(d);
        return e
    }, getPickDir: function (c, i) {
        var a = c - this.iViewportX;
        var h = this.iViewportHeight - (i - this.iViewportY);
        var d = okAllocator.vec3();
        d.x = a / this.iViewportWidth * 2 - 1;
        d.y = h / this.iViewportHeight * 2 - 1;
        d.z = 0;
        var f = okMat4MulVec3(this.getViewProjInvMat4(), d);
        var e = okAllocator.vec3();
        e.x = f.x - this.mCamMat.m03;
        e.y = f.y - this.mCamMat.m13;
        e.z = f.z - this.mCamMat.m23;
        okAllocator._vec3(d);
        okAllocator._vec3(f);
        return e
    }, getPickFrustum: function (u, t, q, o) {
        var n = u + ((q > 0) ? 0 : q);
        var m = t + ((o > 0) ? 0 : o);
        q = (q > 0) ? q : -q;
        o = (o > 0) ? o : -o;
        var p = okAllocator.vec3();
        p.x = this.mCamMat.m03;
        p.y = this.mCamMat.m13;
        p.z = this.mCamMat.m23;
        var f = this.getPickPoint(n, m);
        var d = this.getPickPoint(n + q, m);
        var c = this.getPickPoint(n + q, m + o);
        var a = this.getPickPoint(n, m + o);
        var l = okAllocator.vec3();
        var k = okAllocator.vec3();
        var h = okAllocator.vec3();
        var e = okAllocator.vec3();
        l.x = f.x - p.x;
        l.y = f.y - p.y;
        l.z = f.z - p.z;
        k.x = d.x - p.x;
        k.y = d.y - p.y;
        k.z = d.z - p.z;
        h.x = c.x - p.x;
        h.y = c.y - p.y;
        h.z = c.z - p.z;
        e.x = a.x - p.x;
        e.y = a.y - p.y;
        e.z = a.z - p.z;
        var i = new okFrustum();
        i.setByViewProjMat(this.getViewProjMat4());
        var s = okAllocator.plane();
        var v = okVec3Cross(l, k);
        s.set(p, v);
        okAllocator._vec3(v);
        i.setPlane(4, s);
        var v = okVec3Cross(h, e);
        s.set(p, v);
        okAllocator._vec3(v);
        i.setPlane(5, s);
        var v = okVec3Cross(e, l);
        s.set(p, v);
        okAllocator._vec3(v);
        i.setPlane(2, s);
        var v = okVec3Cross(k, h);
        s.set(p, v);
        okAllocator._vec3(v);
        i.setPlane(3, s);
        okAllocator._vec3(p);
        okAllocator._vec3(f);
        okAllocator._vec3(d);
        okAllocator._vec3(c);
        okAllocator._vec3(a);
        okAllocator._vec3(l);
        okAllocator._vec3(k);
        okAllocator._vec3(h);
        okAllocator._vec3(e);
        return i
    }
};

function okMaterial() {
    this.vEmissive = new okVec3(0, 0, 0);
    this.vAmbient = new okVec3(0, 0, 0);
    this.vDiffuse = new okVec3(0, 0, 0);
    this.vSpecular = new okVec3(0, 0, 0);
    this.fSpecularLevel = 0;
    this.fGlossiness = 8;
    this.fAlpha = 1;
    this.bBlend = false;
    this.iBlendEquation = 32774;
    this.iBlendEquationAlpha = 32774;
    this.iBlendSrc = 770;
    this.iBlendDest = 771;
    this.iBlendSrcAlpha = 1;
    this.iBlendDestAlpha = 1;
    this.bAlphaTest = false;
    this.fAlphaTestValue = 0;
    this.bDynamicLighting = true;
    this.bWireframe = false;
    this.fLineWidth = 1;
    this.bVertexColor = false;
    this.bDepthTest = true;
    this.bDepthWrite = true;
    this.bTwoSide = false;
    this.vGlowColor = new okVec3(1, 1, 1);
    this.bGlow = false;
    this.bFog = true;
    this.aTextureList = ["", "", "", "", "", "", ""];
    this.aTextureTypeList = [3553, 3553, 3553, 3553, 3553, 3553, 3553];
    this.aTextureFilterList = [9729, 9729, 9729, 9729, 9729, 9729, 9729];
    this.aTextureWrapUList = [33071, 33071, 33071, 33071, 33071, 33071, 33071];
    this.aTextureWrapVList = [33071, 33071, 33071, 33071, 33071, 33071, 33071];
    this.aUvAttribList = ["", "", "", "", "", "", ""];
    this.aTangentAttribList = ["", "", "", "", "", "", ""];
    this.aBinormalAttribList = ["", "", "", "", "", "", ""];
    this.bEmissiveScript = true;
    this.bDiffuseScript = true;
    this.bDiffusePowerScript = true;
    this.bSpecularScript = true;
    this.bSpecularPowerScript = true;
    this.bNormalScript = true;
    this.bAlphaScript = true;
    this.bGlowScript = true;
    this.bDctLightScript = true;
    this.bPointLightScript = true;
    this.bSpotLightScript = true;
    this.sEmissiveScript = "";
    this.sDiffuseScript = "";
    this.sDiffusePowerScript = "";
    this.sSpecularScript = "";
    this.sSpecularPowerScript = "";
    this.sNormalScript = "";
    this.sAlphaScript = "";
    this.sGlowScript = "";
    this.sDctLightScript = "";
    this.sPointLightScript = "";
    this.sSpotLightScript = "";
    this.sPackedEmissiveScript = "";
    this.sPackedDiffuseScript = "";
    this.sPackedDiffusePowerScript = "";
    this.sPackedSpecularScript = "";
    this.sPackedSpecularPowerScript = "";
    this.sPackedNormalScript = "";
    this.sPackedAlphaScript = "";
    this.sPackedGlowScript = "";
    this.sPackedDctLightScript = "";
    this.sPackedPointLightScript = "";
    this.sPackedSpotLightScript = "";
    this.entity = null;
    this.aTextureResIdList = [-1, -1, -1, -1, -1, -1, -1]
}

okMaterial.prototype = {
    clear: function () {
        this.vEmissive.set(0, 0, 0);
        this.vAmbient.set(0, 0, 0);
        this.vDiffuse.set(0, 0, 0);
        this.vSpecular.set(0, 0, 0);
        this.fSpecularLevel = 0;
        this.fGlossiness = 0;
        this.fAlpha = 1;
        this.bBlend = false;
        this.iBlendEquation = 32774;
        this.iBlendEquationAlpha = 32774;
        this.iBlendSrc = 770;
        this.iBlendDest = 771;
        this.iBlendSrcAlpha = 1;
        this.iBlendDestAlpha = 1;
        this.bAlphaTest = false;
        this.fAlphaTestValue = 0;
        this.bDynamicLighting = true;
        this.bWireframe = false;
        this.fLineWidth = 1;
        this.bVertexColor = false;
        this.bDepthTest = true;
        this.bDepthWrite = true;
        this.bTwoSide = false;
        this.vGlowColor.set(1, 1, 1);
        this.bGlow = false;
        this.bFog = true;
        for (var a = 0; a < 7; ++a) {
            this.aTextureList[a] = "";
            this.aTextureTypeList[a] = 3553;
            this.aTextureFilterList[a] = 9729;
            this.aTextureWrapUList[a] = 33071;
            this.aTextureWrapVList[a] = 33071;
            this.aUvAttribList[a] = "";
            this.aTangentAttribList[a] = "";
            this.aBinormalAttribList[a] = ""
        }
        this.bEmissiveScript = true;
        this.bDiffuseScript = true;
        this.bDiffusePowerScript = true;
        this.bSpecularScript = true;
        this.bSpecularPowerScript = true;
        this.bNormalScript = true;
        this.bAlphaScript = true;
        this.bGlowScript = true;
        this.bDctLightScript = true;
        this.bPointLightScript = true;
        this.bSpotLightScript = true;
        this.sEmissiveScript = "";
        this.sDiffuseScript = "";
        this.sDiffusePowerScript = "";
        this.sSpecularScript = "";
        this.sSpecularPowerScript = "";
        this.sNormalScript = "";
        this.sAlphaScript = "";
        this.sGlowScript = "";
        this.sDctLightScript = "";
        this.sPointLightScript = "";
        this.sSpotLightScript = "";
        this.sPackedEmissiveScript = "";
        this.sPackedDiffuseScript = "";
        this.sPackedDiffusePowerScript = "";
        this.sPackedSpecularScript = "";
        this.sPackedSpecularPowerScript = "";
        this.sPackedNormalScript = "";
        this.sPackedAlphaScript = "";
        this.sPackedGlowScript = "";
        this.sPackedDctLightScript = "";
        this.sPackedPointLightScript = "";
        this.sPackedSpotLightScript = "";
        for (var a = 0; a < 7; ++a) {
            this.aTextureResIdList[a] = -1
        }
    }, clone: function (a) {
        var a = (a ? a : new okMaterial());
        a.vEmissive = this.vEmissive.clone();
        a.vAmbient = this.vAmbient.clone();
        a.vDiffuse = this.vDiffuse.clone();
        a.vSpecular = this.vSpecular.clone();
        a.fSpecularLevel = this.fSpecularLevel;
        a.fGlossiness = this.fGlossiness;
        a.fAlpha = this.fAlpha;
        a.bBlend = this.bBlend;
        a.iBlendEquation = this.iBlendEquation;
        a.iBlendEquationAlpha = this.iBlendEquationAlpha;
        a.iBlendSrc = this.iBlendSrc;
        a.iBlendDest = this.iBlendDest;
        a.iBlendSrcAlpha = this.iBlendSrcAlpha;
        a.iBlendDestAlpha = this.iBlendDestAlpha;
        a.bAlphaTest = this.bAlphaTest;
        a.fAlphaTestValue = this.fAlphaTestValue;
        a.bDynamicLighting = this.bDynamicLighting;
        a.bWireframe = this.bWireframe;
        a.fLineWidth = this.fLineWidth;
        a.bVertexColor = this.bVertexColor;
        a.bDepthTest = this.bDepthTest;
        a.bDepthWrite = this.bDepthWrite;
        a.bTwoSide = this.bTwoSide;
        this.vGlowColor.clone(a.vGlowColor);
        a.bGlow = this.bGlow;
        a.bFog = this.bFog;
        for (var c = 0; c < 7; ++c) {
            a.setTextureName(c, this.aTextureList[c]);
            a.setTextureType(c, this.aTextureTypeList[c]);
            a.setTextureFilter(c, this.aTextureFilterList[c]);
            a.setTextureWrapU(c, this.aTextureWrapUList[c]);
            a.setTextureWrapV(c, this.aTextureWrapVList[c]);
            a.setTextureCoord(c, this.aUvAttribList[c]);
            a.setTextureTangent(c, this.aTangentAttribList[c]);
            a.setTextureBinormal(c, this.aBinormalAttribList[c])
        }
        a.bEmissiveScript = this.bEmissiveScript;
        a.bDiffuseScript = this.bDiffuseScript;
        a.bDiffusePowerScript = this.bDiffusePowerScript;
        a.bSpecularScript = this.bSpecularScript;
        a.bGlossinessScript = this.bGlossinessScript;
        a.bAlphaScript = this.bAlphaScript;
        a.bNormalScript = this.bNormalScript;
        a.bGlowScript = this.bGlowScript;
        a.bDctLightScript = this.bDctLightScript;
        a.bPointLightScript = this.bPointLightScript;
        a.bSpotLightScript = this.bSpotLightScript;
        a.sEmissiveScript = this.sEmissiveScript;
        a.sDiffuseScript = this.sDiffuseScript;
        a.sDiffusePowerScript = this.sDiffusePowerScript;
        a.sSpecularScript = this.sSpecularScript;
        a.sSpecularPowerScript = this.sSpecularPowerScript;
        a.sAlphaScript = this.sAlphaScript;
        a.sNormalScript = this.sNormalScript;
        a.sGlowScript = this.sGlowScript;
        a.sDctLightScript = this.sDctLightScript;
        a.sPointLightScript = this.sPointLightScript;
        a.sSpotLightScript = this.sSpotLightScript;
        a.sPackedEmissiveScript = this.sPackedEmissiveScript;
        a.sPackedDiffuseScript = this.sPackedDiffuseScript;
        a.sPackedDiffusePowerScript = this.sPackedDiffusePowerScript;
        a.sPackedSpecularScript = this.sPackedSpecularScript;
        a.sPackedSpecularPowerScript = this.sPackedSpecularPowerScript;
        a.sPackedAlphaScript = this.sPackedAlphaScript;
        a.sPackedNormalScript = this.sPackedNormalScript;
        a.sPackedGlowScript = this.sPackedGlowScript;
        a.sPackedDctLightScript = this.sPackedDctLightScript;
        a.sPackedPointLightScript = this.sPackedPointLightScript;
        a.sPackedSpotLightScript = this.sPackedSpotLightScript;
        return a
    }, setEmissive: function (c, a, d) {
        if (a != null && d != null) {
            this.vEmissive.set(c, a, d)
        } else {
            this.vEmissive = c.clone()
        }
    }, getEmissive: function () {
        return this.vEmissive.clone()
    }, setAmbient: function (c, a, d) {
        if (a != null && d != null) {
            this.vAmbient.set(c, a, d)
        } else {
            this.vAmbient = c.clone()
        }
    }, getAmbient: function () {
        return this.vAmbient.clone()
    }, setDiffuse: function (c, a, d) {
        if (a != null && d != null) {
            this.vDiffuse.set(c, a, d)
        } else {
            this.vDiffuse = c.clone()
        }
    }, getDiffuse: function () {
        return this.vDiffuse.clone()
    }, setSpecular: function (c, a, d) {
        if (a != null && d != null) {
            this.vSpecular.set(c, a, d)
        } else {
            this.vSpecular = c.clone()
        }
    }, getSpecular: function () {
        return this.vSpecular.clone()
    }, setSpecularLevel: function (a) {
        this.fSpecularLevel = a
    }, getSpecularLevel: function () {
        return this.fSpecularLevel
    }, setGlossiness: function (a) {
        this.fGlossiness = a
    }, getGlossiness: function () {
        return this.fGlossiness
    }, setAlpha: function (a) {
        this.fAlpha = a
    }, getAlpha: function () {
        return this.fAlpha
    }, enableBlend: function (a) {
        this.bBlend = a
    }, isBlend: function () {
        return this.bBlend
    }, isBlendEnabled: function () {
        return this.bBlend
    }, setBlendEquation: function (a, c) {
        if (a == 3 || a == 1) {
            this.iBlendEquation = c
        }
        if (a == 3 || a == 2) {
            this.iBlendEquationAlpha = c
        }
    }, getBlendEquation: function (a) {
        if (a == 1 || a == 3) {
            return this.iBlendEquation
        } else {
            if (a == 2) {
                return this.iBlendEquationAlpha
            }
        }
    }, setBlendFunc: function (a, d, c) {
        if (a == 3 || a == 1) {
            this.iBlendSrc = d;
            this.iBlendDest = c
        }
        if (a == 3 || a == 2) {
            this.iBlendSrcAlpha = d;
            this.iBlendDestAlpha = c
        }
    }, getBlendFuncSrc: function (a) {
        if (a == 1 || a == 3) {
            return this.iBlendSrc
        } else {
            if (a == 2) {
                return this.iBlendSrcAlpha
            }
        }
    }, getBlendFuncDest: function (a) {
        if (a == 1 || a == 3) {
            return this.iBlendDest
        } else {
            if (a == 2) {
                return this.iBlendDestAlpha
            }
        }
    }, enableFog: function (a) {
        this.bFog = a
    }, isFogEnabled: function () {
        return this.bFog
    }, enableAlphaTest: function (a) {
        this.bAlphaTest = a
    }, isAlphaTest: function () {
        return this.bAlphaTest
    }, isAlphaTestEnabled: function () {
        return this.bAlphaTest
    }, setAlphaTestValue: function (a) {
        this.fAlphaTestValue = a
    }, getAlphaTestValue: function (a) {
        return this.fAlphaTestValue
    }, enableDynamicLighting: function (a) {
        this.bDynamicLighting = a
    }, isDynamicLighting: function () {
        return this.bDynamicLighting
    }, isDynamicLightingEnabled: function () {
        return this.bDynamicLighting
    }, enableWireframe: function (a) {
        this.bWireframe = a
    }, isWireframe: function () {
        return this.bWireframe
    }, isWireframeEnabled: function () {
        return this.bWireframe
    }, setLineWidth: function (a) {
        this.fLineWidth = a
    }, getLineWidth: function () {
        return this.fLineWidth
    }, enableVertexColor: function (a) {
        this.bVertexColor = a
    }, isVertexColor: function () {
        return this.bVertexColor
    }, isVertexColorEnabled: function () {
        return this.bVertexColor
    }, enableDepthTest: function (a) {
        this.bDepthTest = a
    }, isDepthTest: function () {
        return this.bDepthTest
    }, isDepthTestEnabled: function () {
        return this.bDepthTest
    }, enableDepthWrite: function (a) {
        this.bDepthWrite = a
    }, isDepthWrite: function () {
        return this.bDepthWrite
    }, isDepthWriteEnabled: function () {
        return this.bDepthWrite
    }, enableTwoSide: function (a) {
        this.bTwoSide = a
    }, isTwoSide: function () {
        return this.bTwoSide
    }, isTwoSideEnabled: function () {
        return this.bTwoSide
    }, enableGlow: function (a) {
        this.bGlow = a
    }, isGlow: function () {
        return this.bGlow
    }, isGlowEnabled: function () {
        return this.bGlow
    }, setGlowColor: function (c, a, d) {
        if (a != null && d != null) {
            this.vGlowColor.set(c, a, d)
        } else {
            c.clone(this.vGlowColor)
        }
    }, getGlowColor: function () {
        return this.vGlowColor
    }, setTextureName: function (d, m) {
        m = m.replace(/\\/g, "/");
        m = m.replace(/^\/+/g, "");
        this.aTextureList[d] = m;
        if (m != "") {
            var k = m.split(" ");
            if (k.length == 6) {
                this.aTextureTypeList[d] = 34067
            }
        }
        if (this.entity != null) {
            var f = this.entity;
            var a = f.zone.scene.resourceManager;
            if (m != "") {
                var c = f.zone.scene._packTextureUrl(m);
                var l = a.createResource(2, c);
                f.addResourceRef(l);
                this.aTextureResIdList[d] = l;
                var h = a.getResourceState(l);
                if (h == 2) {
                    if (this.aTextureTypeList[d] == 3553) {
                        a.loadTextureByUrl(l, c, 6408)
                    } else {
                        if (this.aTextureTypeList[d] == 34067) {
                            var i = m.split(" ");
                        }
                    }
                }
            } else {
                this.aTextureResIdList[d] = -1
            }
        }
    }, getTextureName: function (a) {
        return this.aTextureList[a]
    }, getTextureResourceId: function (a) {
        return this.aTextureResIdList[a]
    }, setTextureType: function (c, a) {
        this.aTextureTypeList[c] = a;
        if (this.aTextureList[c] != "") {
            this.setTextureName(c, this.aTextureList[c])
        }
        this.sPackedEmissiveScript = "";
        this.sPackedDiffuseScript = "";
        this.sPackedDiffusePowerScript = "";
        this.sPackedSpecularScript = "";
        this.sPackedSpecularPowerScript = "";
        this.sPackedNormalScript = "";
        this.sPackedAlphaScript = "";
        this.sPackedDctLightScript = "";
        this.sPackedPointLightScript = "";
        this.sPackedSpotLightScript = ""
    }, getTextureType: function (a) {
        return this.aTextureTypeList[a]
    }, setTextureFilter: function (c, a) {
        this.aTextureFilterList[c] = a
    }, getTextureFilter: function (a) {
        return this.aTextureFilterList[a]
    }, setTextureWrap: function (c, a) {
        this.aTextureWrapUList[c] = a;
        this.aTextureWrapVList[c] = a
    }, setTextureWrapU: function (c, a) {
        this.aTextureWrapUList[c] = a
    }, setTextureWrapV: function (c, a) {
        this.aTextureWrapVList[c] = a
    }, getTextureWrapU: function (a) {
        return this.aTextureWrapUList[a]
    }, getTextureWrapV: function (a) {
        return this.aTextureWrapVList[a]
    }, setTextureCoord: function (c, a) {
        this.aUvAttribList[c] = a
    }, getTextureCoord: function (a) {
        return this.aUvAttribList[a]
    }, setTextureTangent: function (c, a) {
        this.aTangentAttribList[c] = a
    }, getTextureTangent: function (a) {
        return this.aTangentAttribList[a]
    }, setTextureBinormal: function (c, a) {
        this.aBinormalAttribList[c] = a
    }, getTextureBinormal: function (a) {
        return this.aBinormalAttribList[a]
    }, enableEmissiveScript: function (a) {
        this.bEmissiveScript = a
    }, isEmissiveScriptEnabled: function () {
        return this.bEmissiveScript
    }, enableDiffuseScript: function (a) {
        this.bDiffuseScript = a
    }, isDiffuseScriptEnabled: function () {
        return this.bDiffuseScript
    }, enableDiffusePowerScript: function (a) {
        this.bDiffusePowerScript = a
    }, isDiffusePowerScriptEnabled: function () {
        return this.bDiffusePowerScript
    }, enableSpecularScript: function (a) {
        this.bSpecularScript = a
    }, isSpecularScriptEnabled: function () {
        return this.bSpecularScript
    }, enableSpecularPowerScript: function (a) {
        this.bSpecularPowerScript = a
    }, isSpecularPowerScriptEnabled: function () {
        return this.bSpecularPowerScript
    }, enableAlphaScript: function (a) {
        this.bAlphaScript = a
    }, isAlphaScriptEnabled: function () {
        return this.bAlphaScript
    }, enableNormalScript: function (a) {
        this.bNormalScript = a
    }, isNormalScriptEnabled: function () {
        return this.bNormalScript
    }, enableDctLightScript: function (a) {
        this.bDctLightScript = a
    }, isDctLightScriptEnabled: function () {
        return this.bDctLightScript
    }, enablePointLightScript: function (a) {
        this.bPointLightScript = a
    }, isPointLightScriptEnabled: function () {
        return this.bPointLightScript
    }, enableSpotLightScript: function (a) {
        this.bSpotLightScript = a
    }, isSpotLightScriptEnabled: function () {
        return this.bSpotLightScript
    }, setEmissiveScript: function (a) {
        this.sEmissiveScript = a;
        this.sPackedEmissiveScript = this._ProcessScript(a, true, "vec3")
    }, getEmissiveScript: function () {
        return this.sEmissiveScript
    }, getPackedEmissiveScript: function () {
        if (this.sEmissiveScript != "" && this.sPackedEmissiveScript == "") {
            this.sPackedEmissiveScript = this._ProcessScript(this.sEmissiveScript, true, "vec3")
        }
        return this.sPackedEmissiveScript
    }, setDiffuseScript: function (a) {
        this.sDiffuseScript = a;
        this.sPackedDiffuseScript = this._ProcessScript(a, true, "vec3")
    }, getDiffuseScript: function () {
        return this.sDiffuseScript
    }, getPackedDiffuseScript: function () {
        if (this.sDiffuseScript != "" && this.sPackedDiffuseScript == "") {
            this.sPackedDiffuseScript = this._ProcessScript(this.sDiffuseScript, true, "vec3")
        }
        return this.sPackedDiffuseScript
    }, setDiffusePowerScript: function (a) {
        this.sDiffusePowerScript = a;
        this.sPackedDiffusePowerScript = this._ProcessScript(a, true, "float")
    }, getDiffusePowerScript: function () {
        return this.sDiffusePowerScript
    }, getPackedDiffusePowerScript: function () {
        if (this.sDiffusePowerScript != "" && this.sPackedDiffusePowerScript == "") {
            this.sPackedDiffusePowerScript = this._ProcessScript(this.sDiffusePowerScript, true, "float")
        }
        return this.sPackedDiffusePowerScript
    }, setSpecularScript: function (a) {
        this.sSpecularScript = a;
        this.sPackedSpecularScript = this._ProcessScript(a, true, "vec3")
    }, getSpecularScript: function () {
        return this.sSpecularScript
    }, getPackedSpecularScript: function () {
        if (this.sSpecularScript != "" && this.sPackedSpecularScript == "") {
            this.sPackedSpecularScript = this._ProcessScript(this.sSpecularScript, true, "vec3")
        }
        return this.sPackedSpecularScript
    }, setSpecularPowerScript: function (a) {
        this.sSpecularPowerScript = a;
        this.sPackedSpecularPowerScript = this._ProcessScript(a, true, "float")
    }, getSpecularPowerScript: function () {
        return this.sSpecularPowerScript
    }, getPackedSpecularPowerScript: function () {
        if (this.sSpecularPowerScript != "" && this.sPackedSpecularPowerScript == "") {
            this.sPackedSpecularPowerScript = this._ProcessScript(this.sSpecularPowerScript, true, "float")
        }
        return this.sPackedSpecularPowerScript
    }, setNormalScript: function (a) {
        this.sNormalScript = a;
        this.sPackedNormalScript = this._ProcessScript(a, true, "vec3")
    }, getNormalScript: function () {
        return this.sNormalScript
    }, getPackedNormalScript: function () {
        if (this.sNormalScript != "" && this.sPackedNormalScript == "") {
            this.sPackedNormalScript = this._ProcessScript(this.sNormalScript, true, "vec3")
        }
        return this.sPackedNormalScript
    }, setAlphaScript: function (a) {
        this.sAlphaScript = a;
        this.sPackedAlphaScript = this._ProcessScript(a, true, "float")
    }, getAlphaScript: function () {
        return this.sAlphaScript
    }, getPackedAlphaScript: function () {
        if (this.sAlphaScript != "" && this.sPackedAlphaScript == "") {
            this.sPackedAlphaScript = this._ProcessScript(this.sAlphaScript, true, "float")
        }
        return this.sPackedAlphaScript
    }, setDctLightScript: function (a) {
        this.sDctLightScript = a;
        this.sPackedDctLightScript = this._ProcessScript(a, false)
    }, getDctLightScript: function () {
        return this.sDctLightScript
    }, getPackedDctLightScript: function () {
        if (this.sDctLightScript != "" && this.sPackedDctLightScript == "") {
            this.sPackedDctLightScript = this._ProcessScript(this.sDctLightScript, false)
        }
        return this.sPackedDctLightScript
    }, setPointLightScript: function (a) {
        this.sPointLightScript = a;
        this.sPackedPointLightScript = this._ProcessScript(a, false)
    }, getPointLightScript: function () {
        return this.sPointLightScript
    }, getPackedPointLightScript: function () {
        if (this.sPointLightScript != "" && this.sPackedPointLightScript == "") {
            this.sPackedPointLightScript = this._ProcessScript(this.sPointLightScript, false)
        }
        return this.sPackedPointLightScript
    }, setSpotLightScript: function (a) {
        this.sSpotLightScript = a;
        this.sPackedSpotLightScript = this._ProcessScript(a, false)
    }, getSpotLightScript: function () {
        return this.sSpotLightScript
    }, getPackedSpotLightScript: function () {
        if (this.sSpotLightScript != "" && this.sPackedSpotLightScript == "") {
            this.sPackedSpotLightScript = this._ProcessScript(this.sSpotLightScript, false)
        }
        return this.sPackedSpotLightScript
    }, _setEntity: function (a) {
        this.entity = a
    }, _ProcessScript: function (k, f, n) {
        var u = "";
        var h = k.length;
        var s = false;
        for (var o = 0; o < h; ++o) {
            var v = k.charAt(o);
            if (v == "\n") {
                s = false;
                continue
            }
            if (s) {
                continue
            }
            if (v == " ") {
                if (u.length > 0 && o < (h - 1)) {
                    var l = u.charCodeAt(u.length - 1);
                    var q = k.charCodeAt(o + 1);
                    if (((l >= 48 && l <= 57) || (l >= 65 && l <= 90) || (l >= 97 && l <= 122)) && ((q >= 48 && q <= 57) || (q >= 65 && q <= 90) || (q >= 97 && q <= 122))) {
                        u += " "
                    }
                }
            } else {
                if (v == "/") {
                    if (o == h - 1) {
                        u += "/"
                    } else {
                        if (k.charAt(o + 1) == "/") {
                            s = true
                        } else {
                            u += "/"
                        }
                    }
                } else {
                    u += v
                }
            }
        }
        if (u == "") {
            return ""
        }
        if (f) {
            var p = u.match(/\breturn\b/g);
            if (p == null) {
                u = "return " + n + "(" + u + ");"
            }
        }
        u = u.replace(/(^|[^a-zA-Z0-9_\.])(\d+)(?![0-9]|\.)/g, "$1$2.0");
        u = u.replace(/\[(\d+)\.(\d*)\]/g, "[$1]");
        if (this.aTextureList[0]) {
            if (this.aTextureTypeList[0] == 34067) {
                u = u.replace(/\(ALBEDO1,/g, "okFunc_FetchTexture(okUni_SamplerCube[0],")
            } else {
                u = u.replace(/\(ALBEDO1,/g, "okFunc_FetchTexture(okUni_Sampler2D[0],")
            }
        }
        if (this.aTextureList[1]) {
            if (this.aTextureTypeList[1] == 34067) {
                u = u.replace(/\(ALBEDO2,/g, "okFunc_FetchTexture(okUni_SamplerCube[1],")
            } else {
                u = u.replace(/\(ALBEDO2,/g, "okFunc_FetchTexture(okUni_Sampler2D[1],")
            }
        }
        if (this.aTextureList[2]) {
            if (this.aTextureTypeList[2] == 34067) {
                u = u.replace(/\(ALBEDO3,/g, "okFunc_FetchTexture(okUni_SamplerCube[2],")
            } else {
                u = u.replace(/\(ALBEDO3,/g, "okFunc_FetchTexture(okUni_Sampler2D[2],")
            }
        }
        if (this.aTextureList[3]) {
            if (this.aTextureTypeList[3] == 34067) {
                u = u.replace(/\(ALBEDO4,/g, "okFunc_FetchTexture(okUni_SamplerCube[3],")
            } else {
                u = u.replace(/\(ALBEDO4,/g, "okFunc_FetchTexture(okUni_Sampler2D[3],")
            }
        }
        if (this.aTextureList[4]) {
            u = u.replace(/\(NORMAL,/g, "okFunc_FetchTexture(okUni_Sampler2D[4],")
        }
        if (this.aTextureList[5]) {
            u = u.replace(/\(OPACITY,/g, "okFunc_FetchTexture(okUni_Sampler2D[5],")
        }
        if (this.aTextureList[6]) {
            u = u.replace(/\(SPECULARLEVEL,/g, "okFunc_FetchTexture(okUni_Sampler2D[6],")
        }
        u = u.replace(/texture2Dtexture2D\(/g, "texture2D(");
        u = u.replace(/textureCubetextureCube\(/g, "textureCube(");
        u = u.replace(/texture2DtextureCube\(/g, "textureCube(");
        u = u.replace(/textureCubetexture2D\(/g, "texture2D(");
        var m = okAllocator.array();
        var e = okAllocator.array();
        var d = okAllocator.array();
        var a = -1;
        var t = -1;
        var h = u.length;
        for (var o = 0; o < h; ++o) {
            switch (u.charAt(o)) {
                case"[":
                    m.push("[");
                    d.push(a);
                    e.push(t);
                    a = 0;
                    t = m.length - 1;
                    break;
                case"]":
                    if (t != -1) {
                        if (a >= 1) {
                            m[t] = "vec" + (a + 1) + "(";
                            m.push(")")
                        } else {
                            m.push("]")
                        }
                        if (e.length > 0) {
                            t = e.pop()
                        } else {
                            return ""
                        }
                        a = d.pop()
                    } else {
                        return ""
                    }
                    break;
                case"(":
                    m.push("(");
                    d.push(a);
                    e.push(t);
                    a = 0;
                    t = m.length - 1;
                    break;
                case")":
                    if (t != -1) {
                        m.push(")");
                        if (e.length > 0) {
                            t = e.pop()
                        } else {
                            return ""
                        }
                        a = d.pop()
                    } else {
                        return ""
                    }
                    break;
                case",":
                    a += 1;
                    m.push(",");
                    break;
                default:
                    m.push(u.charAt(o))
            }
        }
        u = m.join("");
        okAllocator._array(m);
        okAllocator._array(d);
        okAllocator._array(e);
        return u
    }
};

function okMeshSkin() {
    this.aBoneNameList = new Array;
    this.aBoneNameIdxMap = new Object;
    this.aBoneSkinMatList = new Array;
    this.bbox = new okAABBox(new okVec3(10000000000, 10000000000, 10000000000), new okVec3(-10000000000, -10000000000, -10000000000));
    this.sVertexBoneIdxAttribName = "";
    this.sVertexBoneWeightAttribName = ""
}

okMeshSkin.prototype = {
    clear: function () {
        this.aBoneNameList = new Array;
        this.aBoneNameIdxMap = new Object;
        this.aBoneSkinMatList = new Array;
        this.bbox.set(new okVec3(10000000000, 10000000000, 10000000000), new okVec3(-10000000000, -10000000000, -10000000000));
        this.sVertexBoneIdxAttribName = "";
        this.sVertexBoneWeightAttribName = ""
    }, setBoundingBox: function (c, a) {
        this.bbox.set(c, a)
    }, getBoundingBox: function () {
        return this.bbox
    }, addBone: function (c, a) {
        this.aBoneNameIdxMap[c] = this.aBoneNameList.length;
        this.aBoneNameList.push(c);
        this.aBoneSkinMatList.push(a.clone())
    }, getBoneNum: function () {
        return this.aBoneNameList.length
    }, setRefAttributeName: function (a, c) {
        this.sVertexBoneIdxAttribName = a;
        this.sVertexBoneWeightAttribName = c
    }, getVertexBoneIdxAttribName: function () {
        return this.sVertexBoneIdxAttribName
    }, getVertexBoneWeightAttribName: function () {
        return this.sVertexBoneWeightAttribName
    }, getBoneNameArray: function () {
        return this.aBoneNameList
    }, getSkinMat: function (a) {
        return this.aBoneSkinMatList[this.aBoneNameIdxMap[a]]
    }, getSkinMatArray: function () {
        return this.aBoneSkinMatList
    }
};

function okMesh(a) {
    this.rc = a;
    this.sName = "";
    this.material = new okMaterial(a);
    this.bbox = new okAABBox();
    this.aAttribDataList = okAllocator.object();
    this.aAttribArrayBufferList = okAllocator.object();
    this.iAttribCount = 0;
    this.iVertexCount = 0;
    this.aIndexDataList = okAllocator.object();
    this.aIndexArrayBufferList = okAllocator.object();
    this.aIndexTopologyList = okAllocator.object();
    this.iIndexCount = 0;
    this.animSkin = new okMeshSkin
}

okMesh.prototype = {
    clear: function () {
        this.sName = "";
        this.material = new okMaterial(this.rc);
        this.bbox.set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.iVertexCount = 0;
        this.deleteAttribute();
        this.deleteIndex();
        this.animSkin.clear()
    }, setVertexNum: function (a) {
        this.iVertexCount = a
    }, getVertexNum: function () {
        return this.iVertexCount
    }, createAttribute: function (h, a, f, k) {
        if (this.aAttribDataList[h] == null) {
            this.iAttribCount += 1
        }
        var e = new Array(a);
        this.aAttribDataList[h] = e;
        if (f) {
            for (var d = 0; d < a; ++d) {
                e[d] = f[d]
            }
        }
        var c = new okArrayBuffer(this.rc);
        c.createBuffer(34962, 5126, (k != null) ? k : 35044, f ? e : a);
        if (this.aAttribArrayBufferList[h]) {
            this.aAttribArrayBufferList[h].releaseBuffer()
        }
        this.aAttribArrayBufferList[h] = c
    }, loadAttribute: function (h, c, a, d) {
        var f = this.aAttribDataList[h];
        if (f) {
            if (a < 0) {
                a = f.length - c
            }
            for (var e = c; e < c + a; ++e) {
                f[e] = d[e - c]
            }
            this.aAttribArrayBufferList[h].updateBuffer(c, a, d)
        }
    }, deleteAttribute: function (a) {

    }, createIndex: function (f, a, k, l, h) {
        if (this.aIndexDataList[f] == null) {
            this.iIndexCount += 1
        }
        var c = new Array(a);
        this.aIndexDataList[f] = c;
        if (k) {
            for (var e = 0; e < a; ++e) {
                c[e] = k[e]
            }
        }
        var d = new okArrayBuffer(this.rc);
        d.createBuffer(34963, 5123, (l != null) ? l : 35044, k ? c : a);
        if (this.aIndexArrayBufferList[f]) {
            this.aIndexArrayBufferList[f].releaseBuffer()
        }
        this.aIndexArrayBufferList[f] = d;
        this.aIndexTopologyList[f] = (h != null ? h : 4)
    }, loadIndex: function (h, c, a, d) {
        var e = this.aIndexDataList[h];
        if (e) {
            if (a < 0) {
                a = e.length - c
            }
            for (var f = c; f < c + a; ++f) {
                e[f] = d[f - c]
            }
            this.aIndexArrayBufferList[h].updateBuffer(c, a, d)
        }
    },  setIndexTopology: function (a, c) {
        if (this.aIndexTopologyList[a]) {
            this.aIndexTopologyList[a] = c
        }
    }, getIndexTopology: function (a) {
        return this.aIndexTopologyList[a]
    }, setName: function (a) {
        this.sName = a
    }, getName: function () {
        return this.sName
    }, getAttributeNum: function () {
        return this.iAttribCount
    }, getIndexNum: function () {
        return this.iIndexCount
    }, getAttributeArray: function (a) {
        return this.aAttribDataList[a]
    }, getAttributeArrayBuffer: function (a) {
        return this.aAttribArrayBufferList[a]
    }, getIndexArray: function (a) {
        return this.aIndexDataList[a]
    }, getIndexArrayBuffer: function (a) {
        return this.aIndexArrayBufferList[a]
    }, getMaterial: function () {
        return this.material
    }, computeBoundingInfo: function () {
        this.bbox.set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        for (var k in this.aAttribDataList) {
            if (k.indexOf("Position") == 0) {
                var a = new okVec3(100000, 100000, 100000);
                var h = new okVec3(-100000, -100000, -100000);
                var f = this.aAttribDataList[k];
                var d = this.iVertexCount ? (f.length / this.iVertexCount) : 3;
                for (var c = 0; c < f.length; c += d) {
                    var e = new okVec3(f[c], f[c + 1], f[c + 2]);
                    a = okVec3Min(a, e);
                    h = okVec3Max(h, e)
                }
                this.bbox.set(a, h);
                return
            }
        }
    }, setBoundingBox: function (c, a) {
        if (a == null) {
            c.clone(this.bbox)
        } else {
            this.bbox.set(c, a)
        }
    }, getBoundingBox: function () {
        return this.bbox
    }, getBoundingSphereCenter: function () {
        return okVec3MulVal(okVec3Add(this.bbox.vMin, this.bbox.vMax), 0.5)
    }, getBoundingSphereRadius: function () {
        return okVec3Sub(this.bbox.vMax, this.bbox.vMin).len() * 0.5
    }, getSkin: function () {
        return this.animSkin
    }, draw: function (c, a, d, e) {
        var c = c != null ? c : "Default";
        this.aIndexArrayBufferList[c].drawIndex(a != null ? a : this.aIndexTopologyList[c], d, e)
    }
};

function okModel(a) {
    this.rc = a;
    this.aMeshMap = new Object;
    this.iMeshCount = 0;
    this.bbox = new okAABBox(OAK.VEC3_ZERO, OAK.VEC3_ZERO)
}

okModel.prototype = {
    clear: function () {
        for (var a in this.aMeshMap) {
            this.aMeshMap[a].clear()
        }
        this.aMeshMap = new Object;
        this.iMeshCount = 0;
        this.bbox = new okAABBox(OAK.VEC3_ZERO, OAK.VEC3_ZERO)
    }, createMesh: function (c) {
        if (this.aMeshMap[c] == null) {
            var a = new okMesh(this.rc);
            a.sName = c;
            this.aMeshMap[c] = a;
            this.iMeshCount += 1
        }
        return this.aMeshMap[c]
    }, deleteMesh: function (c) {
        for (var a in this.aMeshMap) {
            if (c == null || a == c) {
                this.aMeshMap[a].clear();
                delete this.aMeshMap[a]
            }
        }
    }, getMesh: function (c) {
        if (c) {
            return this.aMeshMap[c]
        }
        for (var a in this.aMeshMap) {
            return this.aMeshMap[a]
        }
        return null
    }, getMeshMap: function () {
        return this.aMeshMap
    }, getMeshNum: function () {
        return this.iMeshCount
    }, computeBoundingInfo: function () {
        if (this.iMeshCount == 0) {
            this.bbox.set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
            return
        }
        var a = new okVec3(100000, 100000, 100000);
        var d = new okVec3(-100000, -100000, -100000);
        for (var c in this.aMeshMap) {
            var e = this.aMeshMap[c];
            a = okVec3Min(a, e.getBoundingBox().vMin);
            d = okVec3Max(d, e.getBoundingBox().vMax)
        }
        this.bbox.set(a, d)
    }, setBoundingBox: function (c, a) {
        if (a == null) {
            c.clone(this.bbox)
        } else {
            this.bbox.set(c, a)
        }
    }, getBoundingBox: function () {
        return this.bbox
    }, getBoundingSphereCenter: function () {
        return okVec3MulVal(okVec3Add(this.bbox.vMin, this.bbox.vMax), 0.5)
    }, getBoundingSphereRadius: function () {
        return okVec3Sub(this.bbox.vMax, this.bbox.vMin).len() * 0.5
    }
};

function okSkAnimBone() {
    this.sName = "";
    this.aKeyTransList = new Array;
    this.aKeyQuatList = new Array;
    this.parent = null;
    this.mCurMat = okAllocator.mat43();
    this.bCurMatDirty = true
}

okSkAnimBone.prototype = {
    clone: function () {
        var c = new okSkAnimBone();
        c.sName = this.sName;
        for (var a = 0; a < this.mMtList.length; ++a) {
            c.aKeyTransList.push(this.aKeyTransList[a].clone());
            c.aKeyQuatList.push(this.aKeyQuatList[a].clone())
        }
        c.parent = this.parent;
        c.mCurMat = new okMat4();
        c.bCurMatDirty = true
    }, clear: function () {
        this.sName = "";
        this.aKeyTransList.clear();
        this.aKeyQuatList.clear();
        this.parent = null;
        this.mCurMat.identity();
        this.bCurMatDirty = true
    }, setName: function (a) {
        this.sName = a
    }, getName: function () {
        return this.sName
    }, setParent: function (a) {
        this.parent = a
    }, getParent: function () {
        return this.parent
    }, loadKeyTranslateList: function (c) {
        this.aKeyTransList = new Array;
        for (var a = 0; a < c.length; ++a) {
            this.aKeyTransList.push(c[a].clone())
        }
    }, loadKeyQuaternionList: function (a) {
        this.aKeyQuatList = new Array;
        for (var c = 0; c < a.length; ++c) {
            this.aKeyQuatList.push(a[c].normalize())
        }
    }, dirty: function () {
        this.bCurMatDirty = true
    }, update: function (f, e, h) {
        if (this.bCurMatDirty) {
            var c = okVec3Lerp(this.aKeyTransList[f], this.aKeyTransList[e], h);
            var d = okQuatSlerp(this.aKeyQuatList[f], this.aKeyQuatList[e], h);
            var a = d.normalize();
            okAllocator._quat(d);
            d = a;
            d.toMat43(this.mCurMat);
            this.mCurMat.m03 = c.x;
            this.mCurMat.m13 = c.y;
            this.mCurMat.m23 = c.z;
            okAllocator._vec3(c);
            if (this.parent) {
                if (this.parent.bCurMatDirty) {
                    this.parent.update(f, e, h)
                }
                var a = okMat43Mul(this.parent.mCurMat, this.mCurMat);
                okAllocator._mat43(this.mCurMat);
                this.mCurMat = a
            }
            this.bCurMatDirty = false
        }
    }, getMat43: function () {
        var a = new okMat43();
        this.mCurMat.clone(a);
        return a
    }, getMat4: function () {
        var a = new okMat4();
        this.mCurMat.toMat4(a);
        return a
    }
};

function okSkAnimation() {
    this.aKeyFrameList = new Array;
    this.bbox = new okAABBox();
    this.aBoneList = new Object;
    this.iBoneNum = 0;
    this.iFrameNum = 0;
    this.iTick = 33;
    this.iCurTime = -1;
    this.iLerpKeyStart = -1;
    this.iLerpKeyEnd = -1;
    this.fLerpT = 0
}

okSkAnimation.prototype = {
    clear: function () {
        this.aKeyFrameList = new Array;
        this.bbox = new okAABBox();
        this.aBoneList = new Object;
        this.iBoneNum = 0;
        this.iFrameNum = 0;
        this.iTick = 33;
        this.iCurTime = -1;
        this.iLerpKeyStart = -1;
        this.iLerpKeyEnd = -1;
        this.fLerpT = 0
    }, setBoundingBox: function (c, a) {
        this.bbox.set(c, a)
    }, getBoundingBox: function () {
        return this.bbox
    }, loadKeyFrameList: function (c) {
        this.aKeyFrameList = new Array;
        for (var a = 0; a < c.length; ++a) {
            this.aKeyFrameList.push(c[a])
        }
    }, addBone: function (a) {
        if (this.aBoneList[a.getName()] == null) {
            this.iBoneNum += 1
        }
        this.aBoneList[a.getName()] = a
    }, getBone: function (a) {
        return this.aBoneList[a]
    }, getBoneMat43: function (a) {
        return this.aBoneList[a].getMat43()
    }, getBoneMat4: function (a) {
        return this.aBoneList[a].getMat4()
    }, getBoneNum: function () {
        return this.iBoneNum
    }, getBoneList: function () {
        return this.aBoneList
    }, setFrameNum: function (a) {
        this.iFrameNum = a
    }, getFrameNum: function () {
        return this.iFrameNum
    }, setTickTime: function (a) {
        this.iTick = a
    }, getTickTime: function () {
        return this.iTick
    }, getAnimLength: function () {
        return this.iFrameNum * this.iTick
    }, setCurTime: function (c) {
        if (this.iCurTime != c) {
            this.iCurTime = c;
            for (var a in this.aBoneList) {
                this.aBoneList[a].dirty()
            }
            this._updateBoneList(this.iCurTime / this.iTick)
        }
    }, setCurFrame: function (c) {
        if (this.iCurTime != c * this.iTick) {
            this.iCurTime = c * this.iTick;
            for (var a in this.aBoneList) {
                this.aBoneList[a].dirty()
            }
            this._updateBoneList(c)
        }
    }, getCurTime: function () {
        return this.iCurTime
    }, _lerpFrame: function (a) {
        for (var c = 0; c < this.aKeyFrameList.length; ++c) {
            if (this.aKeyFrameList[c] > a) {
                if (c > 0) {
                    this.iLerpKeyStart = c - 1;
                    this.iLerpKeyEnd = c
                } else {
                    this.iLerpKeyStart = this.iLerpKeyEnd = 0
                }
                this.fLerpT = (a - this.aKeyFrameList[c - 1]) / (this.aKeyFrameList[c] - this.aKeyFrameList[c - 1]);
                return
            }
        }
        this.iLerpKeyStart = this.iLerpKeyEnd = this.aKeyFrameList.length - 1;
        this.fLerpT = 0
    }, _updateBoneList: function (a) {
        this._lerpFrame(a);
        for (var c in this.aBoneList) {
            this.aBoneList[c].update(this.iLerpKeyStart, this.iLerpKeyEnd, this.fLerpT)
        }
    }
};

function okSkAnimSubChannel() {
    this.attachedAnim = null;
    this.bLoop = false;
    this.fSpeed = 1;
    this.iCurTime = 0
}

okSkAnimSubChannel.prototype = {
    clone: function (a) {
        var a = a ? a : new okSkAnimSubChannel();
        a.attachedAnim = this.attachedAnim;
        a.bLoop = this.bLoop;
        a.fSpeed = this.fSpeed;
        a.iCurTime = this.iCurTime;
        return a
    }, attachAnim: function (a) {
        this.attachedAnim = a
    }, getAnim: function () {
        return this.attachedAnim
    }, isActive: function () {
        return (this.attachedAnim != null) && (this.iCurTime < this.attachedAnim.getAnimLength())
    }, setSpeed: function (a) {
        this.fSpeed = a
    }, getSpeed: function () {
        return this.fSpeed
    }, enableLoop: function (a) {
        this.bLoop = a
    }, isLoop: function () {
        return this.bLoop
    }, getTickTime: function () {
        if (this.attachedAnim) {
            return this.attachedAnim.getTickTime()
        }
        return 0
    }, setCurTime: function (a) {
        this.iCurTime = a;
        if (this.attachedAnim) {
            this.attachedAnim.setCurTime(a)
        }
    }, update: function (a) {
        if (this.attachedAnim) {
            this.iCurTime += (a * this.fSpeed);
            this.attachedAnim.setCurTime(this.bLoop ? (this.iCurTime % this.attachedAnim.getAnimLength()) : this.iCurTime)
        }
    }, getBoneMat43: function (a) {
        if (this.attachedAnim) {
            return this.attachedAnim.getBoneMat43(a)
        }
        return new okMat4(1)
    }
};

function okSkAnimChannel() {
    this.bActive = false;
    this.mainChannel = new okSkAnimSubChannel();
    this.transChannel = new okSkAnimSubChannel();
    this.iTransTime = 0;
    this.iCurTransTime = 0
}

okSkAnimChannel.prototype = {
    clone: function (a) {
        a = a ? a : new okSkAnimChannel();
        a.bActive = this.bActive;
        this.mainChannel.clone(a.mainChannel);
        this.transChannel.clone(a.transChannel);
        a.iTransTime = this.iTransTime;
        a.iCurTransTime = this.iCurTransTime;
        return a
    }, activate: function (a) {
        this.bActive = a
    }, isActive: function () {
        return this.bActive
    }, attachAnim: function (a, c) {
        this.mainChannel.clone(this.transChannel);
        this.iTransTime = ((c != null) ? c : 0);
        this.iCurTransTime = 0;
        this.mainChannel.attachAnim(a)
    }, getAnim: function () {
        return this.mainChannel.getAnim()
    }, setSpeed: function (a) {
        this.mainChannel.setSpeed(a)
    }, getSpeed: function () {
        return this.mainChannel.getSpeed()
    }, enableLoop: function (a) {
        this.mainChannel.enableLoop(a)
    }, isLoop: function () {
        return this.mainChannel.isLoop()
    }, getTickTime: function () {
        if (this.mainChannel) {
            return this.mainChannel.getTickTime()
        }
        return 0
    }, setCurTime: function (a) {
        this.mainChannel.setCurTime(a)
    }, update: function (a) {
        this.mainChannel.update(a);
        if (this.iCurTransTime < this.iTransTime) {
            this.transChannel.update(a)
        }
        this.iCurTransTime = Math.min(this.iCurTransTime + a, this.iTransTime)
    }, getBoneMat43: function (d) {
        var f = this.mainChannel.getBoneMat43(d);
        if (this.iCurTransTime >= this.iTransTime || !this.transChannel.isActive()) {
            return f
        }
        var e = this.transChannel.getBoneMat43(d);
        var i = new okQuat();
        var l = new okQuat();
        f.toQuat(i);
        e.toQuat(l);
        var k = this.iCurTransTime / this.iTransTime;
        var h = okQuatSlerp(l, i, k);
        var a = okVec3Lerp(e.getColumn(3), f.getColumn(3), k);
        var c = new okMat43();
        h.toMat43(c);
        c.setColumn(3, a);
        return c
    }
};

function okSkAnimPlayer() {
    this.skinInfo = null;
    this.aBoneMatList = new Array;
    this.bBoneMatDirty = false;
    this.aBoneFinalMatList = new Array;
    this.bBoneFinalMatDirty = false;
    this.aChannelList = new Array;
    this.aChannelList.push(new okSkAnimChannel());
    this.aChannelList.push(new okSkAnimChannel());
    this.iBlendMode = 1;
    this.bbox = new okAABBox();
    this.bBBoxDirty = true
}

okSkAnimPlayer.prototype = {
    clear: function () {
        this.skinInfo = null;
        this.aBoneMatList = new Array;
        this.bBoneMatDirty = false;
        this.aBoneFinalMatList = new Array;
        this.bBoneFinalMatDirty = false;
        this.aChannelList = new Array;
        this.aChannelList.push(new okSkAnimChannel());
        this.aChannelList.push(new okSkAnimChannel());
        this.iBlendMode = 1;
        this.bbox.set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.bBBoxDirty = true
    }, clone: function (a) {
        a = a ? a : new okSkAnimPlayer();
        a.skinInfo = this.skinInfo;
        a.bBoneMatDirty = true;
        a.bBoneFinalMatDirty = true;
        a.aChannelList = [this.aChannelList[0].clone(), this.aChannelList[1].clone()];
        a.iBlendMode = this.iBlendMode;
        a.bBBoxDirty = this.bBBoxDirty;
        return a
    }, setSkin: function (a) {
        this.skinInfo = a;
        this.bBoneMatDirty = true;
        this.bBoneFinalMatDirty = true;
        this.update(-1, 0);
        this.bBBoxDirty = true
    }, getSkin: function () {
        return this.skinInfo
    }, getBoundingBox: function () {
        if (this.bBBoxDirty) {
            this.bbox.set(new okVec3(10000000000, 10000000000, 10000000000), new okVec3(-10000000000, -10000000000, -10000000000));
            if (this.aChannelList[0].isActive() && this.aChannelList[0].getAnim()) {
                this.bbox = this.bbox.union(this.aChannelList[0].getAnim().getBoundingBox())
            }
            if (this.aChannelList[1].isActive() && this.aChannelList[1].getAnim()) {
                this.bbox = this.bbox.union(this.aChannelList[1].getAnim().getBoundingBox())
            }
            var c = this.bbox.union(this.skinInfo.getBoundingBox());
            var a = Math.max(Math.abs(c.vMin.x), Math.max(Math.abs(c.vMin.y), Math.max(Math.abs(c.vMin.z), Math.max(Math.abs(c.vMax.x), Math.max(Math.abs(c.vMax.y), Math.max(Math.abs(c.vMax.z)))))));
            this.bbox.vMin.x -= a;
            this.bbox.vMin.y -= a;
            this.bbox.vMin.z -= a;
            this.bbox.vMax.x += a;
            this.bbox.vMax.y += a;
            this.bbox.vMax.z += a;
            this.bBBoxDirty = false
        }
        return this.bbox
    }, activateChannel: function (c, a) {
        this.aChannelList[c].activate(a);
        this.bBoneMatDirty = true;
        this.bBoneFinalMatDirty = true;
        this.bBBoxDirty = true
    }, isActive: function (a) {
        return this.aChannelList[a].isActive()
    }, attachAnim: function (c, a, d) {
        this.aChannelList[c].attachAnim(a, d);
        this.bBoneMatDirty = true;
        this.bBoneFinalMatDirty = true;
        this.bBBoxDirty = true
    }, getAnim: function (a) {
        return this.aChannelList[a].getAnim()
    }, setSpeed: function (c, a) {
        this.aChannelList[c].setSpeed(a)
    }, getSpeed: function (a) {
        return this.aChannelList[a].getSpeed()
    }, enableLoop: function (c, a) {
        this.aChannelList[c].enableLoop(a)
    }, isLoop: function (a) {
        return this.aChannelList[a].isLoop()
    }, setBlendMode: function (a) {
        this.iBlendMode = a;
        this.bBoneMatDirty = true;
        this.bBoneFinalMatDirty = true
    }, getBlendMode: function () {
        return this.iBlendMode
    }, getTickTime: function (a) {
        if (this.aChannelList[a]) {
            return this.aChannelList[a].getTickTime()
        }
        return 0
    }, setTime: function (c, d) {
        if (c == -1) {
            for (var a = 0; a < this.aChannelList.length; ++a) {
                if (this.aChannelList[a].isActive()) {
                    this.aChannelList[a].setCurTime(d)
                }
            }
        } else {
            this.aChannelList[c].setCurTime(d)
        }
        this.bBoneMatDirty = true;
        this.bBoneFinalMatDirty = true
    }, update: function (d, a) {
        if (d == -1) {
            for (var c = 0; c < this.aChannelList.length; ++c) {
                if (this.aChannelList[c].isActive()) {
                    this.aChannelList[c].update(a)
                }
            }
        } else {
            this.aChannelList[d].update(a)
        }
        this.bBoneMatDirty = true;
        this.bBoneFinalMatDirty = true
    }, getBoneMat43: function (l) {
        var n = this.aChannelList[0].isActive();
        var m = this.aChannelList[1].isActive();
        if (n && !m) {
            return this.aChannelList[0].getBoneMat43(l)
        } else {
            if (!n && m) {
                return this.aChannelList[1].getBoneMat43(l)
            } else {
                if (!n && !m) {
                    return new okMat4()
                }
            }
        }
        var h = new okMat43();
        if (this.iBlendMode == 1) {
            var f = this.aChannelList[0].getBoneMat43(l);
            var e = this.aChannelList[1].getBoneMat43(l);
            var d = f.getColumn(3);
            var a = e.getColumn(3);
            var o = okVec3Add(d, a);
            var k = new okQuat();
            var i = new okQuat();
            f.toQuat(k);
            e.toQuat(i);
            var c = okQuatMul(i, k);
            c.toMat43(h);
            h.setColumn(3, o)
        } else {
            if (this.iBlendMode == 2) {
                var f = this.aChannelList[0].getBoneMat43(l);
                var e = this.aChannelList[1].getBoneMat43(l);
                var d = f.getColumn(3);
                var a = e.getColumn(3);
                var o = okVec3Lerp(d, a, 0.5);
                var k = new okQuat();
                var i = new okQuat();
                f.toQuat(k);
                e.toQuat(i);
                var c = okQuatSlerp(i, k, 0.5);
                c.toMat43(h);
                h.setColumn(3, o)
            }
        }
        return h
    }, getBoneMat43Array: function () {
        var c = this.skinInfo.getBoneNameArray();
        if (this.bBoneMatDirty) {
            this.aBoneMatList.length = 0;
            for (var a = 0; a < c.length; ++a) {
                this.aBoneMatList.push(this.getBoneMat43(c[a]))
            }
            this.bBoneMatDirty = false
        }
        return this.aBoneMatList
    }, getBoneFinalMat43: function (l) {
        var n = this.aChannelList[0].isActive();
        var m = this.aChannelList[1].isActive();
        if (n && !m) {
            return okMat43Mul(this.aChannelList[0].getBoneMat43(l), this.skinInfo ? this.skinInfo.getSkinMat(l) : new okMat43())
        } else {
            if (!n && m) {
                return okMat43Mul(this.aChannelList[1].getBoneMat43(l), this.skinInfo ? this.skinInfo.getSkinMat(l) : new okMat43())
            } else {
                if (!n && !m) {
                    return (this.skinInfo ? this.skinInfo.getSkinMat(l) : new okMat43())
                }
            }
        }
        var h = new okMat43();
        if (this.iBlendMode == 1) {
            var f = this.aChannelList[0].getBoneMat43(l);
            var e = this.aChannelList[1].getBoneMat43(l);
            var d = f.getColumn(3);
            var a = e.getColumn(3);
            var o = okVec3Add(d, a);
            var k = new okQuat();
            var i = new okQuat();
            f.toQuat(k);
            e.toQuat(i);
            var c = okQuatMul(i, k);
            c.toMat43(h);
            h.setColumn(3, o)
        } else {
            if (this.iBlendMode == 2) {
                var f = this.aChannelList[0].getBoneMat43(l);
                var e = this.aChannelList[1].getBoneMat43(l);
                var d = f.getColumn(3);
                var a = e.getColumn(3);
                var o = okVec3Lerp(d, a, 0.5);
                var k = new okQuat();
                var i = new okQuat();
                f.toQuat(k);
                e.toQuat(i);
                var c = okQuatSlerp(i, k, 0.5);
                c.toMat43(h);
                h.setColumn(3, o)
            }
        }
        if (this.skinInfo) {
            return okMat43Mul(h, this.skinInfo.getSkinMat(l))
        } else {
            return h
        }
    }, getBoneFinalMat43Array: function () {
        var c = this.skinInfo.getBoneNameArray();
        if (this.bBoneFinalMatDirty) {
            this.aBoneFinalMatList.length = 0;
            for (var a = 0; a < c.length; ++a) {
                this.aBoneFinalMatList.push(this.getBoneFinalMat43(c[a]))
            }
            this.bBoneFinalMatDirty = false
        }
        return this.aBoneFinalMatList
    }
};

function okCharMetaData(e, c, f, d, a) {
    this.code = 0;
    this.tex = e;
    this.x = c;
    this.y = f;
    this.width = d;
    this.height = a
}

okCharMetaData.prototype = {
    clone: function () {
        var c = new this.constructor();
        for (var a in this) {
            if (c[a] != this[a]) {
                c[a] = this[a]
            }
        }
        return c
    }
};

function okFontTexture(d, c, a) {
    this.rc = d;
    this.width = c;
    this.height = a;
    this.ok2DLayoutHelper = new okLayout2DHelper(c, a);
    this.texData = new okTexture(d);
    this.texData.createTexture(3553, c, a, 6408, 5121);
    this.charsList = new okList()
}

okFontTexture.prototype = {
    addTex: function (a, d, k) {
        var f = this.ok2DLayoutHelper.add(d, k);
        if (f != null) {
            var h = new Array();
            for (var e = 0; e < a.length; ++e) {
                h.push(a[e])
            }
            this.texData.updateTexture(f.x, f.y, f.width, f.height, 5121, h);
            var c = new okCharMetaData(this, f.x, f.y, d, k);
            this.charsList.pushFront(c);
            return this.charsList.getRoot()
        } else {
            return null
        }
    }, updateCharNode: function (a) {
        var c = a.data;
        this.charsList.remove(a);
        this.charsList.pushFront(c);
        return this.charsList.getRoot()
    }, clearRoom: function () {
        var c = this.charsList.getTail();
        if (c != null) {
            var d = c.data;
            var a = new okRect(d.x, d.y, d.width, d.height);
            if (this.ok2DLayoutHelper.remove(a)) {
                this.charsList.popBack();
                return {opFlag: true, codeRemoved: d.code}
            }
        }
        return {opFlag: false}
    }
};

function okFont() {
    this.fontFamily = "";
    this.fontSize = 40;
    this.fontWeight = "normal";
    this.fontVariant = "";
    this.fontStyle = "normal";
    this.bAutoWrap = true;
    this.texWidth = 512;
    this.texHeight = 512;
    this.rc = null;
    this.maxTexNumber = 5;
    this.texArray = new Array();
    this.texDynamicList = new okList();
    this.codePages = new Object();
    this.program = null
}

okFont.prototype = {
    setTextureWidth: function (a) {
        this.texWidth = a
    }, setTextureHeight: function (a) {
        this.texHeight = a
    }, setTextureMaxNumber: function (a) {
        this.maxTexNumber = a
    }, setAutoWrap: function (a) {
        this.bAutoWrap = a
    }, getFontName: function () {
        return this.fontStyle + " " + this.fontWeight + " " + this.fontSize + " " + this.fontVariant + " " + this.fontFamily
    }, isTexFull: function () {
        return this.texArray.length >= this.maxTexNumber
    }, increaseFontTex: function () {
        if (!this.isTexFull()) {
            var a = new okFontTexture(this.rc, this.texWidth, this.texHeight);
            this.texArray.push(a);
            return true
        } else {
            return false
        }
    }, getFirstBlankTex: function () {
        if (this.texArray.length <= 0) {
            if (!this.increaseFontTex()) {
                return null
            }
        }
        return this.texArray[this.texArray.length - 1]
    }, getFirstReplacableTex: function () {
        if (this.texArray.length <= 0) {
            return null
        }
        if (this.texDynamicList.getRoot() != null) {
            return this.texDynamicList.getRoot().data
        } else {
            return this.texArray[0]
        }
    }, addIndividualCode: function (d, k) {
        if (okIsUndefined(this.codePages[d.toString()])) {
            var m = okFontManager.get2DContext();
            okFontManager.clear2DContext();
            var h = m.font;
            m.font = this.getFontName();
            m.fillText(d, 0, 0);
            var e = m.measureText(d).width;
            if (e <= 0) {
                e = 1
            }
            var f = m.getImageData(0, 0, e, this.fontSize);
            m.font = h;
            var a = this.getFirstBlankTex();
            if (a == null) {
                return false
            }
            var c = a.addTex(f.data, f.width, f.height);
            if (c == null) {
                if (this.increaseFontTex()) {
                    a = this.getFirstBlankTex();
                    c = a.addTex(f.data, f.width, f.height)
                } else {
                    var l = true;
                    if (!(k == null || okIsUndefined(k))) {
                        l = k
                    }
                    if (l) {
                        a = this.getFirstReplacableTex();
                        if (a) {
                            do {
                                var i = a.clearRoom();
                                if (i.opFlag) {
                                    delete this.codePages[i.codeRemoved];
                                    c = a.addTex(f.data, f.width, f.height)
                                } else {
                                    break
                                }
                            } while (c == null)
                        }
                    }
                }
            }
            if (c != null) {
                c.data.code = d.toString();
                this.codePages[d.toString()] = c
            } else {
                return false
            }
        }
        return true
    }, getTexture: function (c) {
        var a = this.getCharTextureInfo(c);
        if (a != null) {
            return a.tex
        } else {
            return null
        }
    }, updateTexTimeStamp: function (a) {
        var c = this.texDynamicList.find(a);
        this.texDynamicList.remove(c);
        this.texDynamicList.pushFront(a)
    }, getCharTextureInfo: function (d, f) {
        var c = this.codePages[d.toString()];
        if (okIsUndefined(c)) {
            if (this.addIndividualCode(d, f)) {
                c = this.codePages[d.toString()]
            } else {
                return null
            }
        }
        var a = c.data;
        var e = a.tex;
        this.updateTexTimeStamp(e);
        this.codePages[d.toString()] = e.updateCharNode(c);
        return a.clone()
    }, initProgram: function () {
        var c = new okShader(this.rc, 35633);
        c.loadSource("                       attribute vec3 position;                       attribute vec2 vertex_coord;                       uniform mat4 matWorld, matProj;                       varying vec2 pixel_coord;                       void main(void) {                            gl_Position = matProj * matWorld * vec4(position, 1.0);                            pixel_coord = vertex_coord;                       }                       ");
        c.compile();
        var a = new okShader(this.rc, 35632);
        a.loadSource("                        precision highp float;                        varying vec2 pixel_coord;                        uniform sampler2D tex;                        uniform mat4 matColor;                        void main(void) {                        gl_FragColor = texture2D(tex, pixel_coord) * matColor;                         }                      ");
        a.compile();
        this.program = new okProgram(this.rc);
        this.program.attachVertexShader(c);
        this.program.attachFragmentShader(a);
        this.program.link()
    }, drawText: function (x, v, C, f, d) {
        var F = this.rc.canvas.clientWidth;
        var c = this.rc.canvas.clientHeight;
        var y;
        if (d != null) {
            F = d.iSizeU;
            c = d.iSizeV;
            y = new okFrameBuffer(this.rc);
            y.createBuffer();
            y.bind();
            y.attachRenderTexture(0, d)
        }
        var w;
        if (x == null) {
            w = new okRect(0, 0, F, c)
        } else {
            if (x.width <= 0 || x.height <= 0) {
                return
            }
            w = new okRect(x.x, x.y, x.x + x.width, x.y + x.height)
        }
        this.program.bind();
        var h = okMat4Trans(0, 0, -3);
        this.program.setUniformMat4("matWorld", h);
        var p = okMat4Ortho(0, F, 0, c, 0.1, 10);
        this.program.setUniformMat4("matProj", p);
        var A = new okMat4(1);
        if (C != null) {
            A.m00 = C.x;
            A.m11 = C.y;
            A.m22 = C.z
        }
        if (f != null) {
            A.m33 = f
        }
        this.program.setUniformMat4("matColor", A);
        var q = new okVec2(w.x, w.y);
        var e = new okVec2(0, 0);
        var J = new okVec2(0, 0);
        var l = new okVec2(0, 0);
        var I;
        var E;
        var n = new Array();
        var s = 0;
        var H = null;
        var u;
        var G;
        for (var D = 0; D < v.length; ++D) {
            if (v[D] != "\n") {
                H = this.getCharTextureInfo(v[D], false);
                if (H == null) {
                    for (var o = 0; o < n.length; ++o) {
                        u = new okArrayBuffer(this.rc);
                        u.createBuffer(34962, 5126, 35044, n[o].vertexArray);
                        G = new okArrayBuffer(this.rc);
                        G.createBuffer(34962, 5126, 35044, n[o].coordArray);
                        this.program.setAttribute("position", u, 3);
                        this.program.setAttribute("vertex_coord", G, 2);
                        this.program.setSampler("tex", 0);
                        n[o].okTex.bind(0);
                        this.rc.texParameteri(3553, 10240, 9729);
                        this.rc.texParameteri(3553, 10241, 9729);
                        this.rc.drawArrays(4, 0, n[o].vertexArray.length / 3)
                    }
                    n.splice(0, n.length);
                    this.addIndividualCode(v[D]);
                    --D;
                    continue
                }
                e.x = q.x + H.width - 1;
                e.y = q.y + H.height - 1;
                if (e.x >= w.width) {
                    if (this.bAutoWrap) {
                        var a = w.x;
                        if (q.x - a > 0.000001) {
                            q.x = w.x;
                            q.y += s;
                            s = 0;
                            if (q.y >= w.height) {
                                break
                            } else {
                                --D;
                                continue
                            }
                        }
                    }
                    e.x = w.width - 1
                }
                if (e.y >= w.height) {
                    e.y = w.height - 1
                }
                I = [e.x, q.y, 0, q.x, q.y, 0, e.x, e.y, 0, q.x, q.y, 0, q.x, e.y, 0, e.x, e.y, 0];
                J.x = H.x / H.tex.width;
                J.y = H.y / H.tex.height;
                l.x = (H.x + e.x - q.x) / H.tex.width;
                l.y = (H.y + e.y - q.y) / H.tex.height;
                E = [l.x, J.y, J.x, J.y, l.x, l.y, J.x, J.y, J.x, l.y, l.x, l.y];
                for (var B = 0; B < n.length; ++B) {
                    if (n[B].fontTex === H.tex) {
                        break
                    }
                }
                if (B == n.length) {
                    var t = new Object();
                    t.okTex = H.tex.texData;
                    t.fontTex = H.tex;
                    t.vertexArray = new Array();
                    t.coordArray = new Array();
                    n.push(t)
                }
                for (var z = 0; z < I.length; ++z) {
                    n[B].vertexArray.push(I[z])
                }
                for (z = 0; z < E.length; ++z) {
                    n[B].coordArray.push(E[z])
                }
                if (s < H.height) {
                    s = H.height
                }
                if (e.x >= w.width) {
                    if (this.bAutoWrap) {
                        q.x = w.x;
                        q.y += s;
                        s = 0;
                        if (q.y >= w.height) {
                            break
                        }
                    } else {
                        for (D = D + 1; D < v.length; ++D) {
                            if (v[D] == "\n") {
                                break
                            }
                        }
                    }
                } else {
                    q.x += H.width
                }
            } else {
                q.x = w.x;
                q.y += s;
                s = 0;
                if (q.y >= w.height) {
                    break
                }
            }
        }
        if (n.length > 0) {
            for (var o = 0; o < n.length; ++o) {
                u = new okArrayBuffer(this.rc);
                u.createBuffer(34962, 5126, 35044, n[o].vertexArray);
                G = new okArrayBuffer(this.rc);
                G.createBuffer(34962, 5126, 35044, n[o].coordArray);
                this.program.setAttribute("position", u, 3);
                this.program.setAttribute("vertex_coord", G, 2);
                this.program.setSampler("tex", 0);
                n[o].okTex.bind(0);
                this.rc.texParameteri(3553, 10240, 9729);
                this.rc.texParameteri(3553, 10241, 9729);
                this.rc.drawArrays(4, 0, n[o].vertexArray.length / 3)
            }
        }
        if (d != null) {
            y.unbind()
        }
    }
};
var okFontManager = (function () {
    var a = {};
    var e = null;
    var c = null;
    var d = false;
    return {
        addFont: function (n, h, m, k, l, o) {
            var f = new okFont();
            f.fontFamily = h;
            f.fontSize = m;
            f.fontWeight = k;
            f.fontVariant = l;
            f.fontStyle = o;
            f.rc = n;
            var i = n.canvas.getAttribute("ID") + f.getFontName();
            if (a[i] != undefined) {
                return a[i]
            } else {
                f.rc = n;
                f.initProgram();
                a[i] = f;
                return f
            }
        }, get2DContext: function () {
            if (c == null) {
                e = document.createElement("canvas");
                e.width = 512;
                e.height = 512;
                c = e.getContext("2d");
                c.fillStyle = "#ffffff";
                c.strokeStyle = "#ffffff";
                c.textBaseline = "top"
            }
            return c
        }, clear2DContext: function () {
            c.clearRect(0, 0, e.width, e.height)
        }
    }
})();

function okBillBoard(a) {
    this.program = a;
    this.text = "";
    this.font = null;
    this.posAttributeName = "position";
    this.texcoordAttributeName = "vertex_coord";
    this.samplertexAttributeName = "tex"
}

okBillBoard.prototype = {
    setText: function (a) {
        this.text = a
    }, getText: function () {
        return this.text
    }, setFont: function (a) {
        this.font = a
    }, getFont: function () {
        return this.font
    }, setPositionAttrName: function (a) {
        this.posAttributeName = a
    }, getPositionAttrName: function () {
        return this.posAttributeName
    }, setTexcoordAttrName: function (a) {
        this.texcoordAttributeName = a
    }, getTexcoordAttrName: function () {
        return this.texcoordAttributeName
    }, setSamplertexAttrName: function (a) {
        this.samplertexAttributeName = a
    }, getSamplertexAttrName: function () {
        return this.samplertexAttributeName
    }, render: function () {
        if (this.font == null) {
            return
        }
        var f = new Array();
        for (var p = 0; p < this.text.length; ++p) {
            if (this.text[p] != "\n") {
                f.push(this.font.getCharTextureInfo(this.text[p]))
            } else {
                f.push(null)
            }
        }
        var q = new okVec2(0, 0);
        var u = new okVec2(0, 0);
        var o = new okVec2(0, 0);
        var l = new okVec2(0, 0);
        var c;
        var d;
        var v, s;
        var t = new Array();
        var a = 0;
        for (var p = 0; p < f.length; ++p) {
            if (f[p] != null) {
                u.x = q.x + f[p].width - 1;
                u.y = q.y + f[p].height - 1;
                c = [u.x, q.y, 0, q.x, q.y, 0, u.x, u.y, 0, q.x, q.y, 0, q.x, u.y, 0, u.x, u.y, 0];
                o.x = f[p].x / f[p].tex.width;
                o.y = f[p].y / f[p].tex.height;
                l.x = (f[p].x + f[p].width - 1) / f[p].tex.width;
                l.y = (f[p].y + f[p].height - 1) / f[p].tex.height;
                d = [l.x, o.y, o.x, o.y, l.x, l.y, o.x, o.y, o.x, l.y, l.x, l.y];
                for (var h = 0; h < t.length; ++h) {
                    if (t[h].fontTex === f[p].tex) {
                        break
                    }
                }
                if (h == t.length) {
                    var n = new Object();
                    n.okTex = f[p].tex.texData;
                    n.fontTex = f[p].tex;
                    n.vertexArray = new Array();
                    n.coordArray = new Array();
                    t.push(n)
                }
                for (var e = 0; e < c.length; ++e) {
                    t[h].vertexArray.push(c[e])
                }
                for (e = 0; e < d.length; ++e) {
                    t[h].coordArray.push(d[e])
                }
                q.x += f[p].width;
                if (a < f[p].height) {
                    a = f[p].height
                }
            } else {
                q.x = 0;
                q.y += a;
                a = 0
            }
        }
        this.program.bind();
        for (p = 0; p < t.length; ++p) {
            v = new okArrayBuffer(this.program.rc);
            v.createBuffer(34962, 5126, 35044, t[p].vertexArray);
            s = new okArrayBuffer(this.program.rc);
            s.createBuffer(34962, 5126, 35044, t[p].coordArray);
            this.program.setAttribute(this.posAttributeName, v, 3);
            this.program.setAttribute(this.texcoordAttributeName, s, 2);
            this.program.setSampler(this.samplertexAttributeName, 0);
            t[p].okTex.bind(0);
            this.program.rc.texParameteri(3553, 10240, 9729);
            this.program.rc.texParameteri(3553, 10241, 9729);
            this.program.rc.drawArrays(4, 0, t[p].vertexArray.length / 3)
        }
    }
};

function okRenderEnvironment() {
    this.rc = null;
    this.camera = null;
    this.scene = null;
    this.canvas = null;
    this.iCanvasWidth = 0;
    this.iCanvasHeight = 0;
    this.vSkyColor = new okVec3(1, 1, 1);
    this.vGroundColor = new okVec3(0.3, 0.3, 0.3);
    this.bFogEnable = false;
    this.vFogColor = new okVec3(1, 1, 1);
    this.fFogDensity = 3.5;
    this.fFogDistNear = 0.1;
    this.fFogDistFar = 1;
    this.bShadow = true;
    this.aStageEnableList = [true, true, true];
    this.iStartTime = 0;
    this.iCurTime = 0;
    this.fRandom = 0
}

okRenderEnvironment.prototype.clear = function () {
    this.camera = null;
    this.scene = null;
    this.vSkyColor.set(1, 1, 1);
    this.vGroundColor.set(0.3, 0.3, 0.3);
    this.bFogEnable = false;
    this.vFogColor.set(1, 1, 1);
    this.fFogDensity = 3.5;
    this.fFogDistNear = 0.1;
    this.fFogDistFar = 1;
    this.bShadow = true;
    this.aStageEnableList = [true, true, true];
    this.iStartTime = 0;
    this.iCurTime = 0;
    this.fRandom = 0
};

function okBaseEntity(a) {
    this.iType = 0;
    this.iId = -1;
    this.zone = a;
    this.resourceManager = a.scene.resourceManager;
    this.sName = "";
    this.mMat = okAllocator.mat43();
    this.mMatN = okAllocator.mat43();
    this.mMatInv = okAllocator.mat43();
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bbox = new okAABBox();
    this.bBBoxDirty = true;
    this.aResRefMap = okAllocator.object()
}

okBaseEntity.prototype.clear = function () {
    this.mMat.identity();
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.releaseResource()
};
okBaseEntity.prototype.getType = function () {
    return this.iType
};
okBaseEntity.prototype.setId = function (a) {
    this.iId = a
};
okBaseEntity.prototype.getId = function () {
    return this.iId
};
okBaseEntity.prototype.setName = function (a) {
    this.sName = a
};
okBaseEntity.prototype.getName = function () {
    return this.sName
};
okBaseEntity.prototype.getResourceRefCount = function (a) {
    if (this.aResRefMap[a] == null) {
        return 0
    }
    return this.aResRefMap[a]
};
okBaseEntity.prototype.addResourceRef = function (a) {
    if (this.aResRefMap[a] == null) {
        this.aResRefMap[a] = 1
    } else {
        this.aResRefMap[a] += 1
    }
};
okBaseEntity.prototype.releaseResource = function () {
    var e = this.resourceManager;
    for (var a in this.aResRefMap) {
        var d = this.aResRefMap[a];
        for (var c = 0; c < d; ++c) {
            e.deleteResource(parseInt(a))
        }
    }
    okAllocator._object(this.aResRefMap);
    this.aResRefMap = okAllocator.object()
};
okBaseEntity.prototype.getState = function () {
    return 4
};
okBaseEntity.prototype.getBoundingBox = function () {
    if (this.bBBoxDirty) {
        var a = okAllocator.vec3();
        var c = okAllocator.vec3();
        a.x = -0.01;
        a.y = -0.01;
        a.z = -0.01;
        c.x = 0.01;
        c.y = 0.01;
        c.z = 0.01;
        this.bbox.set(a, c);
        this.bbox.transformMat43(this.mMat);
        okAllocator._vec3(a);
        okAllocator._vec3(c);
        this.bBBoxDirty = false
    }
    return this.bbox
};
okBaseEntity.prototype.getBoundingSphereCenter = function () {
    var c = this.getBoundingBox();
    var a = okAllocator.vec3();
    a.x = (c.vMin.x + c.vMax.x) * 0.5;
    a.y = (c.vMin.y + c.vMax.y) * 0.5;
    a.z = (c.vMin.z + c.vMax.z) * 0.5;
    return a
};
okBaseEntity.prototype.getBoundingSphereRadius = function () {
    var c = this.getBoundingBox();
    var a = Math.sqrt((c.vMax.x - c.vMin.x) * (c.vMax.x - c.vMin.x) + (c.vMax.y - c.vMin.y) * (c.vMax.y - c.vMin.y) + (c.vMax.z - c.vMin.z) * (c.vMax.z - c.vMin.z)) * 0.5;
    return a
};
okBaseEntity.prototype.genRenderBatch = function (a, c, d) {
};
okBaseEntity.prototype.setMat = function (a) {
    a.clone(this.mMat);
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.getMat43 = function () {
    var a = okAllocator.mat43();
    this.mMat.clone(a);
    return a
};
okBaseEntity.prototype.getMat4 = function () {
    var a = okAllocator.mat4();
    this.mMat.toMat4(a);
    return a
};
okBaseEntity.prototype.getNormalMat3 = function () {
    if (this.bMatNDirty) {
        var c = okAllocator.mat43();
        c = this.mMat.inverse();
        okAllocator._mat43(this.mMatN);
        this.mMatN = c.transpose();
        okAllocator._mat43(c);
        this.bMatNDirty = false
    }
    var a = okAllocator.mat3();
    this.mMatN.toMat3(a);
    return a
};
okBaseEntity.prototype.getNormalMat43 = function () {
    if (this.bMatNDirty) {
        var c = okAllocator.mat43();
        c = this.mMat.inverse();
        okAllocator._mat43(this.mMatN);
        this.mMatN = c.transpose();
        okAllocator._mat43(c);
        this.bMatNDirty = false
    }
    var a = okAllocator.mat43();
    this.mMatN.clone(a);
    return a
};
okBaseEntity.prototype.getNormalMat4 = function () {
    if (this.bMatNDirty) {
        var c = okAllocator.mat43();
        c = this.mMat.inverse();
        okAllocator._mat43(this.mMatN);
        this.mMatN = c.transpose();
        okAllocator._mat43(c);
        this.bMatNDirty = false
    }
    var a = okAllocator.mat4();
    this.mMatN.toMat4(a);
    return a
};
okBaseEntity.prototype.getInvMat43 = function () {
    if (this.bMatInvDirty) {
        okAllocator._mat43(this.mMatInv);
        this.mMatInv = this.mMat.inverse();
        this.bMatInvDirty = false
    }
    var a = okAllocator.mat43();
    this.mMatInv.clone(a);
    return a
};
okBaseEntity.prototype.getInvMat4 = function () {
    if (this.bMatInvDirty) {
        okAllocator._mat43(this.mMatInv);
        this.mMatInv = this.mMat.inverse();
        this.bMatInvDirty = false
    }
    var a = okAllocator.mat4();
    this.mMatInv.toMat4(a);
    return a
};
okBaseEntity.prototype.setPos = function (d, c, a) {
    if (c == null) {
        this.mMat.m03 = d.x;
        this.mMat.m13 = d.y;
        this.mMat.m23 = d.z
    } else {
        this.mMat.m03 = d;
        this.mMat.m13 = c;
        this.mMat.m23 = a
    }
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.getPos = function () {
    var a = okAllocator.vec3();
    a.x = this.mMat.m03;
    a.y = this.mMat.m13;
    a.z = this.mMat.m23;
    return a
};
okBaseEntity.prototype.move = function (h, f, e, d) {
    var c = null;
    if (e != null) {
        c = okMat43Trans(f, e, d)
    } else {
        c = okMat43Trans(f.x, f.y, f.z)
    }
    if (h == 2) {
        var a = okMat43Mul(c, this.mMat);
        okAllocator._mat43(this.mMat);
        this.mMat = a
    } else {
        var a = okMat43Mul(this.mMat, c);
        okAllocator._mat43(this.mMat);
        this.mMat = a
    }
    okAllocator._mat43(c);
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.rotTarget = function (e, h, f) {
    var c = okAllocator.mat43();
    this.mMat.clone(c);
    c.m03 -= h.x;
    c.m13 -= h.y;
    c.m23 -= h.z;
    var a = okMat43Rot(e, f);
    var d = okMat43Mul(a, c);
    okAllocator._mat43(c);
    d.m03 += h.x;
    d.m13 += h.y;
    d.m23 += h.z;
    d.clone(this.mMat);
    okAllocator._mat43(d);
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.getDir = function (a) {
    return this.mMat.getColumn(a - 1).normalize(true)
};
okBaseEntity.prototype.setDir = function (e, d, c, a) {
    this._rotToDir(e, d, c, a)
};
okBaseEntity.prototype._rotToDir = function (c, h, e, d) {
    var a = okAllocator.array();
    a.push(this.mMat.getColumn(0), this.mMat.getColumn(1), this.mMat.getColumn(2));
    var k = a[0].len();
    var i = a[1].len();
    var f = a[2].len();
    a[0].normalize(true);
    a[1].normalize(true);
    a[2].normalize(true);
    var l = c - 1;
    if (e != null && d != null) {
        a[l].x = h;
        a[l].y = e;
        a[l].z = d
    } else {
        a[l].x = h.x;
        a[l].y = h.y;
        a[l].z = h.z
    }
    a[l].normalize(true);
    var m = a[(l + 1) % 3].clone();
    a[(l + 1) % 3] = okVec3Cross(a[(l + 2) % 3], a[l]);
    if (a[(l + 1) % 3].equal(OAK.VEC3_ZERO)) {
        okAllocator._vec3(a[(l + 1) % 3]);
        a[(l + 1) % 3] = m;
        okAllocator._vec3(a[(l + 2) % 3]);
        a[(l + 2) % 3] = okVec3Cross(a[l], a[(l + 1) % 3]);
        okAllocator._vec3(a[(l + 1) % 3]);
        a[(l + 1) % 3] = okVec3Cross(a[(l + 2) % 3], a[l])
    } else {
        okAllocator._vec3(m);
        okAllocator._vec3(a[(l + 2) % 3]);
        a[(l + 2) % 3] = okVec3Cross(a[l], a[(l + 1) % 3])
    }
    a[0].normalize(true);
    a[1].normalize(true);
    a[2].normalize(true);
    this.mMat.m00 = a[0].x * k;
    this.mMat.m10 = a[0].y * k;
    this.mMat.m20 = a[0].z * k;
    this.mMat.m01 = a[1].x * i;
    this.mMat.m11 = a[1].y * i;
    this.mMat.m21 = a[1].z * i;
    this.mMat.m02 = a[2].x * f;
    this.mMat.m12 = a[2].y * f;
    this.mMat.m22 = a[2].z * f;
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this);
    okAllocator._vec3(a[0]);
    okAllocator._vec3(a[1]);
    okAllocator._vec3(a[2]);
    okAllocator._array(a)
};
okBaseEntity.prototype.rotX = function (e, d) {
    var a = okMat43RotX(d);
    if (e == 2) {
        var c = okMat43Mul(a, this.mMat);
        okAllocator._mat43(this.mMat);
        this.mMat = c
    } else {
        var c = okMat43Mul(this.mMat, a);
        okAllocator._mat43(this.mMat);
        this.mMat = c
    }
    okAllocator._mat43(a);
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.rotY = function (e, d) {
    var a = okMat43RotY(d);
    if (e == 2) {
        var c = okMat43Mul(a, this.mMat);
        okAllocator._mat43(this.mMat);
        this.mMat = c
    } else {
        var c = okMat43Mul(this.mMat, a);
        okAllocator._mat43(this.mMat);
        this.mMat = c
    }
    okAllocator._mat43(a);
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.rotZ = function (e, d) {
    var a = okMat43RotZ(d);
    if (e == 2) {
        var c = okMat43Mul(a, this.mMat);
        okAllocator._mat43(this.mMat);
        this.mMat = c
    } else {
        var c = okMat43Mul(this.mMat, a);
        okAllocator._mat43(this.mMat);
        this.mMat = c
    }
    okAllocator._mat43(a);
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.scale = function (h, e, d, c) {
    var f = null;
    if (d != null) {
        f = okMat43Scale(e, d, c)
    } else {
        if (e.x) {
            f = okMat43Scale(e.x, e.y, e.z)
        } else {
            f = okMat43Scale(e, e, e)
        }
    }
    if (h == 2) {
        var a = okMat43Mul(f, this.mMat);
        okAllocator._mat43(this.mMat);
        this.mMat = a
    } else {
        var a = okMat43Mul(this.mMat, f);
        okAllocator._mat43(this.mMat);
        this.mMat = a
    }
    okAllocator._mat43(f);
    this.bMatNDirty = true;
    this.bMatInvDirty = true;
    this.bBBoxDirty = true;
    this.dirtyMatFunc();
    this.zone.dirtyEntity(this)
};
okBaseEntity.prototype.dirtyMatFunc = function () {
};

function okVisibleEntity(a) {
    okBaseCall(this, a);
    this.iType = (1 | 2 | 32 | 64 | 128 | 256);
    this.bVisible = true;
    this.fVisibleDistance = -1;
    this.bCastShadow = false;
    this.bReceiveShadow = true;
    this.fShadowFadeFactor = 0.0001;
    this.fShadowResolution = 1;
    this.bSkybox = false
}

okExtend(okVisibleEntity, okBaseEntity);
okVisibleEntity.prototype.clear = function () {
    this.bVisible = true;
    this.fVisibleDistance = -1;
    this.bCastShadow = false;
    this.bReceiveShadow = true;
    this.fShadowFadeFactor = 0.0001;
    this.fShadowResolution = 1;
    this.bSkybox = false;
    okBaseCall(this, "clear")
};
okVisibleEntity.prototype.enableVisible = function (a) {
    this.bVisible = a
};
okVisibleEntity.prototype.isVisible = function () {
    return this.bVisible
};
okVisibleEntity.prototype.setVisibleDistance = function (a) {
    this.fVisibleDistance = a
};
okVisibleEntity.prototype.getVisibleDistance = function () {
    return this.fVisibleDistance
};
okVisibleEntity.prototype.enableSkyBox = function (a) {
    this.bSkybox = a;
    this.zone.forceVisibleEntity(this, a)
};
okVisibleEntity.prototype.isSkyBox = function () {
    return this.bSkybox
};
okVisibleEntity.prototype.enableCastShadow = function (a) {
    this.bCastShadow = a
};
okVisibleEntity.prototype.isCastShadow = function () {
    return this.bCastShadow
};
okVisibleEntity.prototype.enableReceiveShadow = function (a) {
    this.bReceiveShadow = a
};
okVisibleEntity.prototype.isReceiveShadow = function () {
    return this.bReceiveShadow
};
okVisibleEntity.prototype.setShadowFade = function (a) {
    this.fShadowFadeFactor = a
};
okVisibleEntity.prototype.getShadowFade = function () {
    return this.fShadowFadeFactor
};
okVisibleEntity.prototype.setShadowResolution = function (a) {
    this.fShadowResolution = a
};
okVisibleEntity.prototype.getShadowResolution = function () {
    return this.fShadowResolution
};

function okLightEntity(a) {
    okBaseCall(this, a);
    this.iType = (4 | 8 | 16);
    this.bVisible = true;
    this.vColor = new okVec3(1, 1, 1);
    this.bCastShadow = false;
    this.vShadowColor = new okVec3(0.5, 0.5, 0.5);
    this.iShadowIdx = 3;
    this.fShadowFadeFactor = 0.006
}

okExtend(okLightEntity, okBaseEntity);
okLightEntity.prototype.clear = function () {
    this.bVisible = true;
    this.vColor = new okVec3(1, 1, 1);
    this.bCastShadow = false;
    this.vShadowColor.set(0.5, 0.5, 0.5);
    this.iShadowIdx = 3;
    this.fShadowFadeFactor = 0.006;
    okBaseCall(this, "clear")
};
okLightEntity.prototype.enableVisible = function (a) {
    this.bVisible = a
};
okLightEntity.prototype.isVisible = function () {
    return this.bVisible
};
okLightEntity.prototype.enableCastShadow = function (a) {
    this.bCastShadow = a
};
okLightEntity.prototype.isCastShadow = function () {
    return this.bCastShadow
};
okLightEntity.prototype.setShadowColor = function (d, c, a) {
    if (c == null) {
        d.clone(this.vShadowColor)
    } else {
        this.vShadowColor.set(d, c, a)
    }
};
okLightEntity.prototype.setShadowFade = function (a) {
    this.fShadowFadeFactor = a
};
okLightEntity.prototype.getShadowFade = function () {
    return this.fShadowFadeFactor
};
okLightEntity.prototype.setColor = function (d, c, a) {
    if (c == null) {
        d.clone(this.vColor)
    } else {
        this.vColor.set(d, c, a)
    }
};
okLightEntity.prototype.getColor = function () {
    return this.vColor
};
okLightEntity.prototype.isAffectEntity = function (a) {
    return true
};

function okConfigEntity(a) {
    okBaseCall(this, a);
    this.iType = 512;
    this.vSkyColor = new okVec3(0.3, 0.3, 0.3);
    this.vGroundColor = new okVec3(0.3, 0.3, 0.3);
    this.bShadow = true;
    this.bFogEnable = false;
    this.vFogColor = new okVec3(1, 1, 1);
    this.fFogDensity = 3.5;
    this.fFogDistNear = 0.1;
    this.fFogDistFar = 1
}

okExtend(okConfigEntity, okBaseEntity);

okConfigEntity.prototype.getSkyColor = function () {
    return this.vSkyColor
};

okConfigEntity.prototype.getGroundColor = function () {
    return this.vGroundColor
};
okConfigEntity.prototype.enableShadow = function (a) {
    this.bShadow = a
};
okConfigEntity.prototype.isShadowEnabled = function () {
    return this.bShadow
};
okConfigEntity.prototype.enableFog = function (c, a) {
    this.bFogEnable = a
};
okConfigEntity.prototype.isFogEnabled = function (a) {
    return this.bFogEnable
};
okConfigEntity.prototype.getFogColor = function (a) {
    var c = okAllocator.vec3();
    return this.vFogColor.clone(c)
};
okConfigEntity.prototype.setFogDistanceNear = function (c, a) {
    this.fFogDistNear = Math.max(0.001, a)
};
okConfigEntity.prototype.setFogDistanceFar = function (c, a) {
    this.fFogDistFar = Math.max(0.001, a)
};
okConfigEntity.prototype.getFogDistanceNear = function (a) {
    return this.fFogDistNear
};
okConfigEntity.prototype.getFogDistanceFar = function (a) {
    return this.fFogDistFar
};
okConfigEntity.prototype.setFogDensity = function (c, a) {
    this.fFogDensity = a
};
okConfigEntity.prototype.getFogDensity = function (a) {
    return this.fFogDensity
};

function okStaticEntity(a) {
    okBaseCall(this, a);
    this.iType = 1;
    this.iModelId = -1;
    this.aMtrlMap = new Object
}

okExtend(okStaticEntity, okVisibleEntity);
okStaticEntity.prototype.clear = function () {
    var a = this.resourceManager;
    this.deleteModel();
    if (this.aMtrlMap) {
        okAllocator._object(this.aMtrlMap)
    }
    this.aMtrlMap = okAllocator.object();
    this.onModelLoad = null;
    okBaseCall(this, "clear")
};
okStaticEntity.prototype.getState = function () {
    if (this.iModelId == -1) {
        return 1
    }
    var a = this.resourceManager.getResourceState(this.iModelId);
    if (a != 5) {
        return 1
    }
    return 4
};
okStaticEntity.prototype.loadModel = function (d, a) {
    this.deleteModel();
    var c = this.zone.scene._packModelUrl(d);
    this.iModelId = this.resourceManager.createResource(1, c);
    this.resourceManager.registerListener(this.iModelId, this);
    if (this.resourceManager.getResourceState(this.iModelId) == 2) {
        if (a == null) {
            this.resourceManager.loadModelByUrl(this.iModelId, c)
        } else {
            this.resourceManager.loadModelByText(this.iModelId, a)
        }
    }
    if (this.resourceManager.getResourceState(this.iModelId) == 5) {
        this._postLoadModel()
    }
    return true
};
okStaticEntity.prototype.getModel = function () {
    if (this.iModelId == -1 || this.resourceManager.getResourceState(this.iModelId) != 5) {
        return null
    }
    return this.resourceManager.getResource(this.iModelId)
};
okStaticEntity.prototype.deleteModel = function () {
    if (this.iModelId != -1) {
        this.resourceManager.deleteResource(this.iModelId);
        this.resourceManager.removeListener(this.iModelId, this);
        this.iModelId = -1;
        this.aMtrlMap = new Object;
        this.bBBoxDirty = true
    }
};
okStaticEntity.prototype.getMaterialMap = function () {
    return this.aMtrlMap
};
okStaticEntity.prototype.getMaterial = function (c) {
    if (c == null) {
        for (var a in this.aMtrlMap) {
            return this.aMtrlMap[a]
        }
        return null
    }
    return this.aMtrlMap[c]
};
okStaticEntity.prototype.getBoundingBox = function () {
    if (this.bBBoxDirty) {
        var a = this.getModel();
        if (a == null) {
            var c = this.mMat.getColumn(3);
            this.bbox.set(c, c);
            okAllocator._vec3(c)
        } else {
            a.getBoundingBox().clone(this.bbox);
            this.bbox.transformMat43(this.mMat);
            this.bBBoxDirty = false
        }
    }
    return this.bbox
};
okStaticEntity.prototype.genRenderBatch = function (F, z) {
    var C = this.zone.scene;
    var t = this.resourceManager;
    var h = this.getModel();
    if (h == null) {
        return
    }
    var o = z.camera;
    if (this.fVisibleDistance > 0) {
        var f = o.getPos();
        var q = (f.x - this.mMat.m03) * (f.x - this.mMat.m03) + (f.y - this.mMat.m13) * (f.y - this.mMat.m13) + (f.z - this.mMat.m23) * (f.z - this.mMat.m23);
        if (q > this.fVisibleDistance * this.fVisibleDistance) {
            return
        }
    }
    var a = h.getMeshMap();
    for (var i in a) {
        var d = a[i];
        var D = this.getMaterial(i);
        var m = okAllocator.renderBatch();
        for (var x = 0; x < 7; ++x) {
            var A = D.getTextureResourceId(x);
            if (A == -1) {
                continue
            }
            var s = t.getResource(A);
            if (!s) {
                continue
            }
            if (s.isVideoTexture()) {
                s.updateVideoTexture()
            }
        }
        var n = d.aAttribArrayBufferList;
        var G = okAllocator.array();
        for (var u in n) {
            var B = n[u];
            var y = u.split("/");
            var E = 0;
            G.length = 0;
            var w = y.length;
            for (var v = 0; v < w; ++v) {
                var p = new okAttribFormat();
                var e = y[v];
                G.push(p);
                m.aAttribFmt[e] = p;
                p.sName = e;
                p.iIdx = v;
                p.iOffset = E;
                p.buf = B;
                switch (e) {
                    case"Position":
                    case"Normal":
                    case"Color":
                    case"Texcoord1_Tangent":
                    case"Texcoord1_Binormal":
                    case"Texcoord2_Tangent":
                    case"Texcoord2_Binormal":
                    case"Texcoord3_Tangent":
                    case"Texcoord3_Binormal":
                    case"Texcoord4_Tangent":
                    case"Texcoord4_Binormal":
                        p.iSize = 3;
                        E += 3;
                        break;
                    case"Texcoord1":
                    case"Texcoord2":
                    case"Texcoord3":
                    case"Texcoord4":
                        p.iSize = 2;
                        E += 2;
                        break;
                    case"BoneIndex":
                    case"BoneWeight":
                        p.iSize = 4;
                        E += 4;
                        break;
                    default:
                }
            }
            w = G.length;
            for (var v = 0; v < w; ++v) {
                G[v].iStride = E
            }
        }
        okAllocator._array(G);
        if (D.bWireframe && d.aIndexArrayBufferList.Wireframe) {
            m.index = d.aIndexArrayBufferList.Wireframe;
            m.iDrawMode = 1
        } else {
            m.index = d.aIndexArrayBufferList.Default;
            m.iDrawMode = 4
        }
        m.iDrawStart = 0;
        m.iDrawCount = m.index.getLength();
        m.materialRef = D;
        var l = this.getMat43();
        if (this.bSkybox) {
            l.m03 += o.mCamMat.m03;
            l.m13 += o.mCamMat.m13;
            l.m23 += o.mCamMat.m23
        }
        m.mMatRef = l;
        m.mMatNRef = this.getNormalMat43();
        m.aDctLightListRef = this.__aDctLightList;
        m.aPointLightListRef = this.__aPointLightList;
        m.aSpotLightListRef = this.__aSpotLightList;
        var c = new okAABBox();
        d.getBoundingBox().clone(c);
        c.transformMat43(this.mMat);
        m.bboxRef = c;
        m.bReceiveShadow = this.bReceiveShadow;
        F.push(m)
    }
};
okStaticEntity.prototype.onMessage = function (a) {
    switch (a.sMsg) {
        case"RES_READY":
            if (this.iModelId == a.aArgs[0]) {
                this._postLoadModel(a.aArgs[0])
            }
            break
    }
};
okStaticEntity.prototype._postLoadModel = function () {
    this.bBBoxDirty = true;
    this.zone.dirtyEntity(this);
    var a = this.resourceManager.getResource(this.iModelId);
    if (a) {
        for (var c in a.getMeshMap()) {
            var d = new okMaterial();
            d.entity = this;
            a.getMesh(c).getMaterial().clone(d);
            this.aMtrlMap[c] = d
        }
    }
    if (this.onLoad) {
        this.onLoad(this.getId(), this.iModelId)
    } else {
        if (this.onload) {
            this.onload(this.getId(), this.iModelId)
        }
    }
};

function okDynamicEntity(a) {
    okBaseCall(this, a);
    this.iType = 2;
    this.iModelId = -1;
    this.aMtrlMap = new Object;
    this.defaultPlayer = new okSkAnimPlayer();
    this.aPlayerMap = new Object;
    this.bboxL = new okAABBox();
    this.bLocalBoundingBoxDirty = true
}

okExtend(okDynamicEntity, okVisibleEntity);
okDynamicEntity.prototype.clear = function () {
    this.deleteModel();
    this.defaultPlayer.clear();
    for (var a in this.aPlayerMap) {
        this.aPlayerMap[a].clear()
    }
    okAllocator._object(this.aPlayerMap);
    this.aPlayerMap = okAllocator.object();
    this.bLocalBoundingBoxDirty = true;
    okBaseCall(this, "clear")
};
okDynamicEntity.prototype.getState = function () {
    if (this.iModelId == -1) {
        return 1
    }
    var a = this.resourceManager.getResourceState(this.iModelId);
    if (a != 5) {
        return 1
    }
    return 4
};
okDynamicEntity.prototype.loadModel = function (d, a) {
    this.deleteModel();
    var c = this.zone.scene._packModelUrl(d);
    this.iModelId = this.resourceManager.createResource(1, c);
    this.resourceManager.registerListener(this.iModelId, this);
    if (this.resourceManager.getResourceState(this.iModelId) == 2) {
        if (a == null) {
            this.resourceManager.loadModelByUrl(this.iModelId, c)
        } else {
            this.resourceManager.loadModelByText(this.iModelId, a)
        }
    }
    if (this.resourceManager.getResourceState(this.iModelId) == 5) {
        this._postLoadModel(this.iModelId)
    }
    return true
};
okDynamicEntity.prototype.getModel = function () {
    if (this.iModelId == -1 || this.resourceManager.getResourceState(this.iModelId) != 5) {
        return null
    }
    return this.resourceManager.getResource(this.iModelId)
};

okDynamicEntity.prototype.deleteModel = function () {
    if (this.iModelId != -1) {
        this.resourceManager.removeListener(this.iModelId, this);
        this.resourceManager.deleteResource(this.iModelId);
        this.iModelId = -1;
        this.aMtrlMap = new Object
    }
};
okDynamicEntity.prototype.getMaterialMap = function () {
    return this.aMtrlMap
};
okDynamicEntity.prototype.getMaterial = function (c) {
    if (c == null) {
        for (var a in this.aMtrlMap) {
            return this.aMtrlMap[a]
        }
        return null
    }
    return this.aMtrlMap[c]
};
okDynamicEntity.prototype.getBoundingBox = function () {
    if (this.bLocalBoundingBoxDirty) {
        this.bboxL.set(new okVec3(10000000000, 10000000000, 10000000000), new okVec3(-10000000000, -10000000000, -10000000000));
        if (this.resourceManager.getResourceState(this.iModelId) == 5) {
            var a = this.resourceManager.getResource(this.iModelId);
            for (var e in a.getMeshMap()) {
                var f = a.getMesh(e);
                var d = this.aPlayerMap[e] ? this.aPlayerMap[e] : this.defaultPlayer;
                if (d.getSkin() != f.getSkin()) {
                    d.setSkin(f.getSkin())
                }
                this.bboxL = this.bboxL.union(d.getBoundingBox())
            }
        }
        this.bLocalBoundingBoxDirty = false;
        this.bBBoxDirty = true
    }
    if (this.bBBoxDirty) {
        var a = this.getModel();
        if (a == null) {
            var c = this.mMat.getColumn(3);
            this.bbox.set(c, c);
            okAllocator._vec3(c)
        } else {
            this.bboxL.clone(this.bbox);
            this.bbox.transformMat43(this.mMat);
            this.bBBoxDirty = false
        }
    }
    return this.bbox
};
okDynamicEntity.prototype.genRenderBatch = function (G, B) {
    var t = this.resourceManager;
    var i = this.getModel();
    if (i == null) {
        return
    }
    var o = B.camera;
    if (this.fVisibleDistance > 0) {
        var f = o.getPos();
        var q = (f.x - this.mMat.m03) * (f.x - this.mMat.m03) + (f.y - this.mMat.m13) * (f.y - this.mMat.m13) + (f.z - this.mMat.m23) * (f.z - this.mMat.m23);
        if (q > this.fVisibleDistance * this.fVisibleDistance) {
            return
        }
    }
    var a = i.getMeshMap();
    for (var l in a) {
        var d = a[l];
        var E = this.getMaterial(l);
        var m = okAllocator.renderBatch();
        for (var z = 0; z < 7; ++z) {
            var C = E.getTextureResourceId(z);
            if (C == -1) {
                continue
            }
            var s = t.getResource(C);
            if (!s) {
                continue
            }
            if (s.isVideoTexture()) {
                s.updateVideoTexture()
            }
        }
        var n = d.aAttribArrayBufferList;
        var H = okAllocator.array();
        for (var u in n) {
            var D = n[u];
            var A = u.split("/");
            var F = 0;
            H.length = 0;
            var y = A.length;
            for (var x = 0; x < y; ++x) {
                var p = new okAttribFormat();
                var e = A[x];
                H.push(p);
                m.aAttribFmt[e] = p;
                p.sName = e;
                p.iIdx = x;
                p.iOffset = F;
                p.buf = D;
                switch (e) {
                    case"Position":
                    case"Normal":
                    case"Color":
                    case"Texcoord1_Tangent":
                    case"Texcoord1_Binormal":
                    case"Texcoord2_Tangent":
                    case"Texcoord2_Binormal":
                    case"Texcoord3_Tangent":
                    case"Texcoord3_Binormal":
                    case"Texcoord4_Tangent":
                    case"Texcoord4_Binormal":
                        p.iSize = 3;
                        F += 3;
                        break;
                    case"Texcoord1":
                    case"Texcoord2":
                    case"Texcoord3":
                    case"Texcoord4":
                        p.iSize = 2;
                        F += 2;
                        break;
                    case"BoneIndex":
                    case"BoneWeight":
                        p.iSize = 4;
                        F += 4;
                        break;
                    default:
                }
            }
            y = H.length;
            for (var x = 0; x < y; ++x) {
                H[x].iStride = F
            }
        }
        okAllocator._array(H);
        if (E.bWireframe && d.aIndexArrayBufferList.Wireframe) {
            m.index = d.aIndexArrayBufferList.Wireframe;
            m.iDrawMode = 1
        } else {
            m.index = d.aIndexArrayBufferList.Default;
            m.iDrawMode = 4
        }
        m.iDrawStart = 0;
        m.iDrawCount = m.index.getLength();
        m.materialRef = E;
        m.mMatRef = this.getMat43();
        m.mMatNRef = this.getNormalMat43();
        m.aDctLightListRef = this.__aDctLightList;
        m.aPointLightListRef = this.__aPointLightList;
        m.aSpotLightListRef = this.__aSpotLightList;
        var w = (this.aPlayerMap[l] ? this.aPlayerMap[l] : this.defaultPlayer);
        var v = d.getSkin();
        if (w.getSkin() != v) {
            w.setSkin(v)
        }
        var h = w.getBoneFinalMat43Array();
        m.aBoneMatList = [OAK.MAT43_ZERO].concat(h);
        if (v) {
            m.sBoneIdxAttribName = v.getVertexBoneIdxAttribName();
            m.sBoneWeightAttribName = v.getVertexBoneWeightAttribName()
        }
        var c = new okAABBox();
        d.getBoundingBox().clone(c);
        c.transformMat43(this.mMat);
        m.bboxRef = c;
        m.bReceiveShadow = this.bReceiveShadow;
        G.push(m)
    }
};
okDynamicEntity.prototype.activateChannel = function (e, d, c) {
    if (c) {
        if (this.aPlayerMap[c] == null) {
            this.aPlayerMap[c] = this.defaultPlayer.clone()
        }
        this.aPlayerMap[c].activateChannel(e, d)
    } else {
        for (var a in this.aPlayerMap) {
            this.aPlayerMap[a].activateChannel(e, d)
        }
        this.defaultPlayer.activateChannel(e, d)
    }
};
okDynamicEntity.prototype.isActive = function (c, a) {
    if (a) {
        if (this.aPlayerMap[a] == null) {
            return this.defaultPlayer.isActive(c)
        }
        return this.aPlayerMap[a].isActive(c)
    } else {
        return this.defaultPlayer.isActive(c)
    }
};
okDynamicEntity.prototype.setSpeed = function (e, a, d) {
    if (d) {
        if (this.aPlayerMap[d] == null) {
            this.aPlayerMap[d] = this.defaultPlayer.clone()
        }
        this.aPlayerMap[d].setSpeed(e, a)
    } else {
        for (var c in this.aPlayerMap) {
            this.aPlayerMap[c].setSpeed(e, a)
        }
        this.defaultPlayer.setSpeed(e, a)
    }
};
okDynamicEntity.prototype.getSpeed = function (c, a) {
    if (a) {
        if (this.aPlayerMap[a] == null) {
            return this.defaultPlayer.getSpeed(c)
        }
        return this.aPlayerMap[a].getSpeed(c)
    } else {
        return this.defaultPlayer.getSpeed(c)
    }
};
okDynamicEntity.prototype.enableLoop = function (e, a, d) {
    if (d) {
        if (this.aPlayerMap[d] == null) {
            this.aPlayerMap[d] = this.defaultPlayer.clone()
        }
        this.aPlayerMap[d].enableLoop(e, a)
    } else {
        for (var c in this.aPlayerMap) {
            this.aPlayerMap[c].enableLoop(e, a)
        }
        this.defaultPlayer.enableLoop(e, a)
    }
};
okDynamicEntity.prototype.isLoop = function (c, a) {
    if (a) {
        if (this.aPlayerMap[a] == null) {
            return this.defaultPlayer.isLoop(c)
        }
        return this.aPlayerMap[a].isLoop(c)
    } else {
        return this.defaultPlayer.isLoop(c)
    }
    return 0
};
okDynamicEntity.prototype.setBlendMode = function (d, c) {
    if (c) {
        if (this.aPlayerMap[c] == null) {
            this.aPlayerMap[c] = this.defaultPlayer.clone()
        }
        this.aPlayerMap[c].setBlendMode(d)
    } else {
        for (var a in this.aPlayerMap) {
            this.aPlayerMap[a].setBlendMode(d)
        }
        this.defaultPlayer.setBlendMode(d)
    }
};
okDynamicEntity.prototype.getBlendMode = function (a) {
    if (a) {
        if (this.aPlayerMap[a] == null) {
            return this.defaultPlayer.getBlendMode()
        }
        return this.aPlayerMap[a].getBlendMode()
    } else {
        return this.defaultPlayer.getBlendMode()
    }
    return 0
};
okDynamicEntity.prototype.getTickTime = function (c, a) {
    if (a) {
        if (this.aPlayerMap[a] == null) {
            return this.defaultPlayer.getTickTime(c)
        }
        return this.aPlayerMap[a].getTickTime(c)
    } else {
        return this.defaultPlayer.getTickTime(c)
    }
    return 0
};
okDynamicEntity.prototype.setTime = function (d, e, c) {
    if (c) {
        if (this.aPlayerMap[c] == null) {
            this.aPlayerMap[c] = this.defaultPlayer.clone()
        }
        this.aPlayerMap[c].setTime(d, e)
    } else {
        for (var a in this.aPlayerMap) {
            this.aPlayerMap[a].setTime(d, e)
        }
        this.defaultPlayer.setTime(d, e)
    }
};
okDynamicEntity.prototype.update = function (a, d) {
    if (d) {
        if (this.aPlayerMap[d] == null) {
            this.aPlayerMap[d] = this.defaultPlayer.clone()
        }
        this.aPlayerMap[d].update(-1, a)
    } else {
        for (var c in this.aPlayerMap) {
            this.aPlayerMap[c].update(-1, a)
        }
        this.defaultPlayer.update(-1, a)
    }
};
okDynamicEntity.prototype.onMessage = function (a) {
    switch (a.sMsg) {
        case"RES_READY":
            if (this.iModelId == a.aArgs[0]) {
                this._postLoadModel(a.aArgs[0])
            } else {
                this._postLoadAnim(a.aArgs[0])
            }
            break
    }
};
okDynamicEntity.prototype._postLoadModel = function (a) {
    var c = this.resourceManager.getResource(this.iModelId);
    var c = this.resourceManager.getResource(this.iModelId);
    if (c) {
        for (var d in c.getMeshMap()) {
            var e = new okMaterial();
            e.entity = this;
            c.getMesh(d).getMaterial().clone(e);
            this.aMtrlMap[d] = e
        }
    }
    this.bLocalBoundingBoxDirty = true;
    this.bBBoxDirty = true;
    this.zone.dirtyEntity(this);
    if (this.onLoad) {
        this.onLoad(this.getId(), a)
    }
    if (this.onload) {
        this.onload(this.getId(), a)
    }
};
okDynamicEntity.prototype._postLoadAnim = function (a) {
    this.bLocalBoundingBoxDirty = true;
    this.bBBoxDirty = true;
    this.zone.dirtyEntity(this);
    if (this.onLoad) {
        this.onLoad(this.getId(), a)
    }
    if (this.onload) {
        this.onload(this.getId(), a)
    }
};


function okParticle() {
    this.lf = 0;
    this.tlf = 0;
    this.m = new okMat43();
    this.v = new okVec3();
    this.ac = new okVec3();
    this.s = new okVec2(0.1, 0.1);
    this.s0 = new okVec2(0.1, 0.1);
    this.s1 = new okVec2(0.1, 0.1);
    this.c = new okVec3(1, 1, 1);
    this.c0 = new okVec3();
    this.c1 = new okVec3();
    this.a = 0;
    this.fdi = 0;
    this.fdo = 0
}

function okParticleEntity(a) {
    okBaseCall(this, a);
    this.iType = 256;
    this.mesh = new okMesh(this.resourceManager.rc);
    this.sTexName = "";
    var c = this.mesh.getMaterial();
    c.entity = this;
    c.setEmissive(0, 0, 0);
    c.setDiffuse(1, 1, 1);
    c.enableBlend(true);
    c.enableDynamicLighting(false);
    c.enableTwoSide(true);
    c.enableDepthWrite(false);
    c.setDiffuseScript("VC");
    c.setAlphaScript("TC2.x * ALPHA");
    this.aParticles = new okList();
    this.iMaxCount = 0;
    this.aLife = [3000, 3000];
    this.fEmitCycle = 50;
    this.iEmitFlow = 1;
    this.fEmitLastTime = 50;
    this.aEmitDirRange = [0, 30];
    this.aEmitPosRange = [new okVec3(0, 0, 0), new okVec3(0, 0, 0)];
    this.aEmitV = [1, 1];
    this.aA = [new okVec3(0, 0, 0), new okVec3(0, 0, 0)];
    this.aSize0 = [new okVec2(0.5, 0.5), new okVec2(0.5, 0.5)];
    this.aSize1 = [new okVec2(0.5, 0.5), new okVec2(0.5, 0.5)];
    this.bVarySize = false;
    this.aColor0 = [new okVec3(1, 1, 1), new okVec3(1, 1, 1)];
    this.aColor1 = [new okVec3(1, 1, 1), new okVec3(1, 1, 1)];
    this.bVaryColor = false;
    this.aFadeIn = [1000, 1000];
    this.aFadeOut = [1000, 1000];
    this.iAnimWidth = 1;
    this.iAnimHeight = 1;
    this.iAnimCount = 1;
    this.aAttribFmt = okAllocator.object();
    this.aAttribFmt.Position = new okAttribFormat();
    this.aAttribFmt.Color = new okAttribFormat();
    this.aAttribFmt.Texcoord1 = new okAttribFormat();
    this.aAttribFmt.Texcoord2 = new okAttribFormat();
    this.aAttribFmt.Position = new okAttribFormat();
    this.aAttribFmt.Position.sName = "Position";
    this.aAttribFmt.Position.iIdx = 0;
    this.aAttribFmt.Position.iOffset = 0;
    this.aAttribFmt.Position.iSize = 3;
    this.aAttribFmt.Position.iStride = 3;
    this.aAttribFmt.Color = new okAttribFormat();
    this.aAttribFmt.Color.sName = "Color";
    this.aAttribFmt.Color.iIdx = 0;
    this.aAttribFmt.Color.iOffset = 0;
    this.aAttribFmt.Color.iSize = 3;
    this.aAttribFmt.Color.iStride = 7;
    this.aAttribFmt.Texcoord1 = new okAttribFormat();
    this.aAttribFmt.Texcoord1.sName = "Texcoord1";
    this.aAttribFmt.Texcoord1.iIdx = 1;
    this.aAttribFmt.Texcoord1.iOffset = 3;
    this.aAttribFmt.Texcoord1.iSize = 2;
    this.aAttribFmt.Texcoord1.iStride = 7;
    this.aAttribFmt.Texcoord2 = new okAttribFormat();
    this.aAttribFmt.Texcoord2.sName = "Texcoord2";
    this.aAttribFmt.Texcoord2.iIdx = 2;
    this.aAttribFmt.Texcoord2.iOffset = 5;
    this.aAttribFmt.Texcoord2.iSize = 2;
    this.aAttribFmt.Texcoord2.iStride = 7;
    this.bActive = true
}

okExtend(okParticleEntity, okVisibleEntity);
okParticleEntity.prototype.setTexture = function (a, c, e, f, d) {
    var h = this.mesh.getMaterial();
    h.setTextureName(0, a);
    h.setTextureCoord(0, "Texcoord1");
    if (a != "") {
        h.setDiffuseScript("VC * (ALBEDO1, TC1).rgb")
    } else {
        h.setDiffuseScript("VC")
    }
    if (a != "") {
        h.setAlphaScript("TC2.x * ALPHA * (ALBEDO1, TC1)." + (okIsString(c) ? c.toLowerCase() : "a"))
    } else {
        h.setAlphaScript("TC2.x * ALPHA")
    }
    this.iAnimWidth = (e ? e : 1);
    this.iAnimHeight = (f ? f : 1);
    this.iAnimCount = (d ? d : 1)
};
okParticleEntity.prototype.setParticleMaxNum = function (d) {
    this.iMaxCount = Math.min(d, 10000);
    if (this.iMaxCount) {
        this.mesh.createAttribute("Position", d * 4 * 3, null, 35048);
        this.mesh.createAttribute("Color/Texcoord1/Texcoord2", d * 4 * 7, null, 35048);
        var a = okAllocator.array();
        for (var c = 0; c < d; ++c) {
            a.push(c * 4, c * 4 + 1, c * 4 + 3, c * 4 + 3, c * 4 + 1, c * 4 + 2)
        }
        this.mesh.createIndex("Default", d * 2 * 3, a, 35048, 4);
        okAllocator._array(a)
    }
};
okParticleEntity.prototype.getParticleMaxNum = function () {
    return this.iMaxCount
};
okParticleEntity.prototype.setEmitDir = function (d, c, a) {
    this._rotToDir(2, d, c, a)
};
okParticleEntity.prototype.getEmitDir = function () {
    return this.mMat.getColumn(2)
};
okParticleEntity.prototype.setEmitDirRange = function (a, c) {
    this.aEmitDirRange[0] = a;
    this.aEmitDirRange[1] = ((c != null) ? c : a)
};
okParticleEntity.prototype.getEmitDirRangeMin = function () {
    return this.aEmitDirRange[0]
};
okParticleEntity.prototype.getEmitDirRangeMax = function () {
    return this.aEmitDirRange[1]
};
okParticleEntity.prototype.setEmitCycle = function (a) {
    this.fEmitCycle = a;
    this.fEmitLastTime = a
};
okParticleEntity.prototype.getEmitCycle = function () {
    return this.fEmitCycle
};
okParticleEntity.prototype.setEmitFlow = function (a) {
    this.iEmitFlow = a
};
okParticleEntity.prototype.getEmitFlow = function () {
    return this.iEmitFlow
};
okParticleEntity.prototype.setEmitPos = function (d, c, a) {
    this.setPos(d, c, a)
};
okParticleEntity.prototype.getEmitPos = function () {
    return this.mMat.getColumn(3)
};
okParticleEntity.prototype.getEmitPosRangeMin = function () {
    return this.aEmitOffset[0].clone()
};
okParticleEntity.prototype.getEmitPosRangeMax = function () {
    return this.aEmitOffset[1].clone()
};
okParticleEntity.prototype.setEmitVelocity = function (a, c) {
    this.aEmitV[0] = a;
    this.aEmitV[1] = (c != null ? c : a)
};
okParticleEntity.prototype.getEmitVelocityMin = function () {
    return this.aEmitV[0]
};
okParticleEntity.prototype.getEmitVelocityMax = function () {
    return this.aEmitV[1]
};
okParticleEntity.prototype.setParticleLife = function (a, c) {
    this.aLife[0] = a;
    this.aLife[1] = ((c != null) ? c : a)
};
okParticleEntity.prototype.getParticleLifeMin = function () {
    return this.aLife[0]
};
okParticleEntity.prototype.getParticleLifeMax = function () {
    return this.aLife[1]
};
okParticleEntity.prototype.setParticleAcceleration = function (c, e, h, a, d, f) {
    if (f != null) {
        this.aA[0].x = c;
        this.aA[0].y = e;
        this.aA[0].z = h;
        this.aA[1].x = a;
        this.aA[1].y = d;
        this.aA[1].z = f
    } else {
        if (h != null) {
            this.aA[0].x = c;
            this.aA[0].y = e;
            this.aA[0].z = h;
            this.aA[1].x = c;
            this.aA[1].y = e;
            this.aA[1].z = h
        } else {
            if (e != null) {
                this.aA[0].x = c.x;
                this.aA[0].y = c.y;
                this.aA[0].z = c.z;
                this.aA[1].x = e.x;
                this.aA[1].y = e.y;
                this.aA[1].z = e.z
            } else {
                this.aA[0].x = c.x;
                this.aA[0].y = c.y;
                this.aA[0].z = c.z;
                this.aA[1].x = c.x;
                this.aA[1].y = c.y;
                this.aA[1].z = c.z
            }
        }
    }
};
okParticleEntity.prototype.getParticleAccelerationMin = function () {
    return this.aA[0].clone()
};
okParticleEntity.prototype.getParticleAccelerationMax = function () {
    return this.aA[1].clone()
};
okParticleEntity.prototype.setParticleSize = function (a, d, f, c, e) {
    if (a & 1) {
        if (e != null) {
            this.aSize0[0].x = d;
            this.aSize0[0].y = f;
            this.aSize0[1].x = c;
            this.aSize0[1].y = e
        } else {
            if (okIsNumber(f)) {
                this.aSize0[0].x = d;
                this.aSize0[0].y = f;
                this.aSize0[1].x = d;
                this.aSize0[1].y = f
            } else {
                if (f) {
                    this.aSize0[0].x = d.x;
                    this.aSize0[0].y = d.y;
                    this.aSize0[1].x = f.x;
                    this.aSize0[1].y = f.y
                } else {
                    this.aSize0[0].x = d.x;
                    this.aSize0[0].y = d.y;
                    this.aSize0[1].x = d.x;
                    this.aSize0[1].y = d.y
                }
            }
        }
    }
    if (a & 2) {
        if (e != null) {
            this.aSize1[0].x = d;
            this.aSize1[0].y = f;
            this.aSize1[1].x = c;
            this.aSize1[1].y = e
        } else {
            if (okIsNumber(f)) {
                this.aSize1[0].x = d;
                this.aSize1[0].y = f;
                this.aSize1[1].x = d;
                this.aSize1[1].y = f
            } else {
                if (f) {
                    this.aSize1[0].x = d.x;
                    this.aSize1[0].y = d.y;
                    this.aSize1[1].x = f.x;
                    this.aSize1[1].y = f.y
                } else {
                    this.aSize1[0].x = d.x;
                    this.aSize1[0].y = d.y;
                    this.aSize1[1].x = d.x;
                    this.aSize1[1].y = d.y
                }
            }
        }
    }
};
okParticleEntity.prototype.getParticleSizeMin = function (a) {
    if (a == 1) {
        return this.aSize0[0].clone()
    } else {
        return this.aSize1[0].clone()
    }
};
okParticleEntity.prototype.getParticleSizeMax = function (a) {
    if (a == OAK.PTIME_BEGIN) {
        return this.aSize0[1].clone()
    } else {
        return this.aSize1[1].clone()
    }
};
okParticleEntity.prototype.enableVarySize = function (a) {
    this.bVarySize = a
};
okParticleEntity.prototype.isVarySize = function () {
    return this.bVarySize
};
okParticleEntity.prototype.setParticleColor = function (a, h, f, i, d, c, e) {
    if (a & 1) {
        if (e != null) {
            this.aColor0[0].x = h;
            this.aColor0[0].y = f;
            this.aColor0[0].z = i;
            this.aColor0[1].x = d;
            this.aColor0[1].y = c;
            this.aColor0[1].z = e
        } else {
            if (i != null) {
                this.aColor0[0].x = h;
                this.aColor0[0].y = f;
                this.aColor0[0].z = i;
                this.aColor0[1].x = h;
                this.aColor0[1].y = f;
                this.aColor0[1].z = i
            } else {
                if (f != null) {
                    this.aColor0[0].x = h.x;
                    this.aColor0[0].y = h.y;
                    this.aColor0[0].z = h.z;
                    this.aColor0[1].x = f.x;
                    this.aColor0[1].y = f.y;
                    this.aColor0[1].z = f.z
                } else {
                    this.aColor0[0].x = h.x;
                    this.aColor0[0].y = h.y;
                    this.aColor0[0].z = h.z;
                    this.aColor0[1].x = h.x;
                    this.aColor0[1].y = h.y;
                    this.aColor0[1].z = h.z
                }
            }
        }
    }
    if (a & 2) {
        if (e != null) {
            this.aColor1[0].x = h;
            this.aColor1[0].y = f;
            this.aColor1[0].z = i;
            this.aColor1[1].x = d;
            this.aColor1[1].y = c;
            this.aColor1[1].z = e
        } else {
            if (i != null) {
                this.aColor1[0].x = h;
                this.aColor1[0].y = f;
                this.aColor1[0].z = i;
                this.aColor1[1].x = h;
                this.aColor1[1].y = f;
                this.aColor1[1].z = i
            } else {
                if (f != null) {
                    this.aColor1[0].x = h.x;
                    this.aColor1[0].y = h.y;
                    this.aColor1[0].z = h.z;
                    this.aColor1[1].x = f.x;
                    this.aColor1[1].y = f.y;
                    this.aColor1[1].z = f.z
                } else {
                    this.aColor1[0].x = h.x;
                    this.aColor1[0].y = h.y;
                    this.aColor1[0].z = h.z;
                    this.aColor1[1].x = h.x;
                    this.aColor1[1].y = h.y;
                    this.aColor1[1].z = h.z
                }
            }
        }
    }
};
okParticleEntity.prototype.getParticleColorMin = function (a) {
    if (a == 1) {
        return this.aColor0[0].clone()
    } else {
        return this.aColor1[0].clone()
    }
};
okParticleEntity.prototype.getParticleColorMax = function (a) {
    if (a == 1) {
        return this.aColor0[1].clone()
    } else {
        return this.aColor1[1].clone()
    }
};
okParticleEntity.prototype.enableVaryColor = function (a) {
    this.bVaryColor = a
};
okParticleEntity.prototype.isVaryColor = function () {
    return this.bVaryColor
};
okParticleEntity.prototype.setParticleFadeInTime = function (a, c) {
    this.aFadeIn[0] = a;
    this.aFadeIn[1] = ((c != null) ? c : a)
};
okParticleEntity.prototype.getParticleFadeInTimeMin = function () {
    return this.aFadeIn[0]
};
okParticleEntity.prototype.getParticleFadeInTimeMax = function () {
    return this.aFadeIn[1]
};
okParticleEntity.prototype.setParticleFadeOutTime = function (a, c) {
    this.aFadeOut[0] = a;
    this.aFadeOut[1] = ((c != null) ? c : a)
};
okParticleEntity.prototype.getParticleFadeOutTimeMin = function () {
    return this.aFadeOut[0]
};
okParticleEntity.prototype.getParticleFadeOutTimeMax = function () {
    return this.aFadeOut[1]
};
okParticleEntity.prototype.getMaterial = function () {
    return this.mesh.getMaterial()
};
okParticleEntity.prototype.getBoundingBox = function () {
    if (this.bBBoxDirty) {
        var c = this.bbox.vMin.clone();
        var a = this.bbox.vMax.clone();
        c.x = Math.min(c.x, this.mMat.m03);
        c.y = Math.min(c.y, this.mMat.m13);
        c.z = Math.min(c.z, this.mMat.m23);
        a.x = Math.max(a.x, this.mMat.m03);
        a.y = Math.max(a.y, this.mMat.m13);
        a.z = Math.max(a.z, this.mMat.m23);
        this.bbox.set(c, a);
        okAllocator._vec3(c);
        okAllocator._vec3(a);
        this.bBBoxDirty = false
    }
    return this.bbox
};
okParticleEntity.prototype.update = function (m) {
    if (!this.bActive) {
        return
    }
    var e = okAllocator.array();
    var a = this.getNormalMat43();
    var o = this.mMat.getColumn(3);
    var s = this.mMat.getColumn(3);
    var u = this.aParticles.getRoot();
    while (u) {
        var q = u.data;
        q.lf += m;
        if (q.lf > q.tlf) {
            var w = u.next;
            okAllocator._particle(q);
            this.aParticles.remove(u);
            u = w;
            continue
        }
        q.m.m03 += q.v.x * m / 1000;
        q.m.m13 += q.v.y * m / 1000;
        q.m.m23 += q.v.z * m / 1000;
        q.v.x += q.ac.x * m / 1000;
        q.v.y += q.ac.y * m / 1000;
        q.v.z += q.ac.z * m / 1000;
        var n = q.lf / q.tlf;
        if (this.bVarySize) {
            q.s.x = (1 - n) * q.s0.x + n * q.s1.x;
            q.s.y = (1 - n) * q.s0.y + n * q.s1.y
        }
        if (this.bVaryColor) {
            q.c.x = (1 - n) * q.c0.x + n * q.c1.x;
            q.c.y = (1 - n) * q.c0.y + n * q.c1.y;
            q.c.z = (1 - n) * q.c0.z + n * q.c1.z
        }
        if (q.lf <= q.fdi) {
            q.a = q.lf / q.fdi
        } else {
            if (q.lf >= q.tlf - q.fdo) {
                q.a = (q.tlf - q.lf) / q.fdo
            } else {
                q.a = 1
            }
        }
        o.x = Math.min(o.x, q.m.m03);
        o.y = Math.min(o.y, q.m.m13);
        o.z = Math.min(o.z, q.m.m23);
        s.x = Math.max(s.x, q.m.m03);
        s.y = Math.max(s.y, q.m.m13);
        s.z = Math.max(s.z, q.m.m23);
        var i = Math.floor(q.lf / q.tlf * this.iAnimCount);
        var h = Math.floor(i / this.iAnimWidth);
        var k = i - h * this.iAnimWidth;
        var c = k / this.iAnimWidth, f = (k + 1) / this.iAnimWidth;
        var y = h / this.iAnimHeight, l = (h + 1) / this.iAnimHeight;
        e.push(q.c.x, q.c.y, q.c.z, c, y, q.a, 0, q.c.x, q.c.y, q.c.z, c, l, q.a, 0, q.c.x, q.c.y, q.c.z, f, l, q.a, 0, q.c.x, q.c.y, q.c.z, f, y, q.a, 0);
        u = u.next
    }
    this.fEmitLastTime += m;
    if (this.fEmitLastTime >= this.fEmitCycle) {
        this.fEmitLastTime -= this.fEmitCycle;
        var d = this.iEmitFlow;
        while (d > 0 && this.aParticles.getSize() < this.iMaxCount) {
            d -= 1;
            var q = okAllocator.particle();
            this.aParticles.pushBack(q);
            var z = Math.random();
            q.tlf = (1 - z) * this.aLife[0] + z * this.aLife[1];
            q.lf = 0;
            this.mMat.clone(q.m);
            z = Math.random();
            q.m.m03 += (1 - z) * this.aEmitPosRange[0].x + z * this.aEmitPosRange[1].x;
            z = Math.random();
            q.m.m13 += (1 - z) * this.aEmitPosRange[0].y + z * this.aEmitPosRange[1].y;
            z = Math.random();
            q.m.m23 += (1 - z) * this.aEmitPosRange[0].z + z * this.aEmitPosRange[1].z;
            z = Math.random();
            var v = new okVec3(0, 1, 0);
            v.rotZ((1 - z) * this.aEmitDirRange[0] + z * this.aEmitDirRange[1], true);
            v.rotY(Math.random() * 360, true);
            v = okMat43MulVec3(a, v);
            z = Math.random();
            var x = (1 - z) * this.aEmitV[0] + z * this.aEmitV[1];
            q.v.x = v.x * x;
            q.v.y = v.y * x;
            q.v.z = v.z * x;
            z = Math.random();
            q.ac.x = (1 - z) * this.aA[0].x + z * this.aA[1].x;
            q.ac.y = (1 - z) * this.aA[0].y + z * this.aA[1].y;
            q.ac.z = (1 - z) * this.aA[0].z + z * this.aA[1].z;
            z = Math.random();
            q.s0.x = (1 - z) * this.aSize0[0].x + z * this.aSize0[1].x;
            z = Math.random();
            q.s0.y = (1 - z) * this.aSize0[0].y + z * this.aSize0[1].y;
            z = Math.random();
            q.s1.x = (1 - z) * this.aSize1[0].x + z * this.aSize1[1].x;
            z = Math.random();
            q.s1.y = (1 - z) * this.aSize1[0].x + z * this.aSize1[1].x;
            q.s.x = q.s0.x;
            q.s.y = q.s0.y;
            z = Math.random();
            q.c0.x = (1 - z) * this.aColor0[0].x + z * this.aColor0[1].x;
            z = Math.random();
            q.c0.y = (1 - z) * this.aColor0[0].y + z * this.aColor0[1].y;
            z = Math.random();
            q.c0.z = (1 - z) * this.aColor0[0].z + z * this.aColor0[1].z;
            z = Math.random();
            q.c1.x = (1 - z) * this.aColor1[0].x + z * this.aColor1[1].x;
            z = Math.random();
            q.c1.y = (1 - z) * this.aColor1[0].y + z * this.aColor1[1].y;
            z = Math.random();
            q.c1.z = (1 - z) * this.aColor1[0].z + z * this.aColor1[1].z;
            q.c.x = q.c0.x;
            q.c.y = q.c0.y;
            q.c.z = q.c0.z;
            z = Math.random();
            q.fdi = (1 - z) * this.aFadeIn[0] + z * this.aFadeIn[1];
            z = Math.random();
            q.fdo = (1 - z) * this.aFadeOut[0] + z * this.aFadeOut[1];
            q.a = 0;
            o.x = Math.min(o.x, q.m.m03);
            o.y = Math.min(o.y, q.m.m13);
            o.z = Math.min(o.z, q.m.m23);
            s.x = Math.max(s.x, q.m.m03);
            s.y = Math.max(s.y, q.m.m13);
            s.z = Math.max(s.z, q.m.m23);
            var i = Math.floor(q.lf / q.tlf * this.iAnimCount);
            var h = Math.floor(i / this.iAnimWidth);
            var k = i - h * this.iAnimWidth;
            var c = k / this.iAnimWidth, f = (k + 1) / this.iAnimWidth;
            var y = h / this.iAnimHeight, l = (h + 1) / this.iAnimHeight;
            e.push(q.c.x, q.c.y, q.c.z, c, y, q.a, 0, q.c.x, q.c.y, q.c.z, c, l, q.a, 0, q.c.x, q.c.y, q.c.z, f, l, q.a, 0, q.c.x, q.c.y, q.c.z, f, y, q.a, 0)
        }
    }
    this.mesh.loadAttribute("Color/Texcoord1/Texcoord2", 0, this.aParticles.getSize() * 4 * 7, e);
    this.bbox.set(o, s);
    this.bBBoxDirty = false;
    okAllocator._array(e);
    okAllocator._vec3(o);
    okAllocator._vec3(s)
};
okParticleEntity.prototype.genRenderBatch = function (z, w) {
    if (this.iCount == 0 || !this.bActive) {
        return
    }
    var t = this.resourceManager;
    var v = w.camera;
    var a = this.mesh;
    var y = this.mesh.getMaterial();
    var h = okAllocator.renderBatch();
    for (var u = 0; u < 7; ++u) {
        var x = y.getTextureResourceId(u);
        if (x == -1) {
            continue
        }
        var m = t.getResource(x);
        if (!m) {
            continue
        }
        if (m.isVideoTexture()) {
            m.updateVideoTexture()
        }
    }
    var e = v.getRightDir();
    var d = v.getUpDir();
    var l = okAllocator.vec3();
    var i = okAllocator.vec3();
    var k = okAllocator.array();
    var s = this.aParticles.getRoot();
    while (s) {
        var q = s.data;
        var c = q.s.x * 0.5, o = q.s.y * 0.5;
        l.x = e.x * c;
        l.y = e.y * c;
        l.z = e.z * c;
        i.x = d.x * o;
        i.y = d.y * o;
        i.z = d.z * o;
        k.push(q.m.m03 - l.x + i.x, q.m.m13 - l.y + i.y, q.m.m23 - l.z + i.z, q.m.m03 - l.x - i.x, q.m.m13 - l.y - i.y, q.m.m23 - l.z - i.z, q.m.m03 + l.x - i.x, q.m.m13 + l.y - i.y, q.m.m23 + l.z - i.z, q.m.m03 + l.x + i.x, q.m.m13 + l.y + i.y, q.m.m23 + l.z + i.z);
        s = s.next
    }
    this.mesh.loadAttribute("Position", 0, this.aParticles.getSize() * 4 * 3, k);
    okAllocator._vec3(e);
    okAllocator._vec3(d);
    okAllocator._vec3(l);
    okAllocator._vec3(i);
    okAllocator._array(k);
    var n = this.mesh.aAttribArrayBufferList;
    this.aAttribFmt.Position.buf = n.Position;
    this.aAttribFmt.Color.buf = n["Color/Texcoord1/Texcoord2"];
    this.aAttribFmt.Texcoord1.buf = n["Color/Texcoord1/Texcoord2"];
    this.aAttribFmt.Texcoord2.buf = n["Color/Texcoord1/Texcoord2"];
    h.aAttribFmt.Position = this.aAttribFmt.Position;
    h.aAttribFmt.Color = this.aAttribFmt.Color;
    h.aAttribFmt.Texcoord1 = this.aAttribFmt.Texcoord1;
    h.aAttribFmt.Texcoord2 = this.aAttribFmt.Texcoord2;
    h.index = a.aIndexArrayBufferList.Default;
    h.iDrawMode = 4;
    h.iDrawStart = 0;
    h.iDrawCount = this.aParticles.getSize() * 6;
    h.materialRef = y;
    var f = OAK.MAT43_I;

    h.mMatRef = f;
    h.mMatNRef = OAK.MAT43_I;
    h.aDctLightListRef = this.__aDctLightList;
    h.aPointLightListRef = this.__aPointLightList;
    h.aSpotLightListRef = this.__aSpotLightList;
    h.bboxRef = this.bbox;
    h.bReceiveShadow = false;
    z.push(h)
};
okParticleEntity.prototype.activate = function (d) {
    this.bActive = d;
    if (this.bActive = false) {
        var a = this.aParticles.getRoot();
        while (a) {
            var c = a.data;
            okAllocator._particle(c);
            a = a.next
        }
        this.aParticles.clear();
        this.fEmitLastTime = this.fEmitCycle
    }
};
okParticleEntity.prototype.isActive = function () {
    return this.bActive
};


function okDctLightEntity(a) {
    okBaseCall(this, a);
    this.iType = 4
}

okExtend(okDctLightEntity, okLightEntity);
okDctLightEntity.prototype.clear = function () {
    okBaseCall(this, "clear")
};
okDctLightEntity.prototype.setLightDir = function (e, d, c) {
    var a = okAllocator.vec3();
    if (d == null) {
        a.x = -e.x;
        a.y = -e.y;
        a.z = -e.z
    } else {
        a.x = -e;
        a.y = -d;
        a.z = -c
    }
    this.setDir(3, a);
    okAllocator._vec3(a)
};
okDctLightEntity.prototype.getLightDir = function () {
    var a = this.mMat.getColumn(2);
    a.x = -a.x;
    a.y = -a.y;
    a.z = -a.z;
    return a
};

function okPointLightEntity(a) {
    okBaseCall(this, a);
    this.iType = 8;
    this.fRange = 10
}

okExtend(okPointLightEntity, okLightEntity);
okPointLightEntity.prototype.clear = function () {
    this.fRange = 10;
    okBaseCall(this, "clear")
};
okPointLightEntity.prototype.setRange = function (a) {
    this.fRange = a;
    this.bBBoxDirty = true;
    this.zone.dirtyEntity(this)
};
okPointLightEntity.prototype.getRange = function () {
    return this.fRange
};
okPointLightEntity.prototype.isAffectEntity = function (c) {
    var a = c.getPos();
    var e = this.mMat.getColumn(3);
    var d = (a.x - e.x) * (a.x - e.x) + (a.y - e.y) * (a.y - e.y) + (a.z - e.z) * (a.z - e.z);
    return (d <= this.fRange * this.fRange)
};

function okSpotLightEntity(a) {
    okBaseCall(this, a);
    this.iType = 16;
    this.mMat.identity();
    this.mMat.setColumn(0, 1, 0, 0);
    this.mMat.setColumn(1, 0, 0, -1);
    this.mMat.setColumn(2, 0, 1, 0);
    this.fRange = 10;
    this.fInnerCone = Math.PI * 60 / 180;
    this.fOuterCone = Math.PI * 75 / 180;
    this.frustum = new okFrustum();
    this.bFrustumDirty = true
}

okExtend(okSpotLightEntity, okLightEntity);
okSpotLightEntity.prototype.clear = function () {
    this.fRange = 10;
    this.fInnerCone = Math.PI * 60 / 180;
    this.fOuterCone = Math.PI * 75 / 180;
    this.bFrustumDirty = true;
    okBaseCall(this, "clear")
};
okSpotLightEntity.prototype.setLightDir = function (e, d, c) {
    var a = okAllocator.vec3();
    if (d == null) {
        a.x = -e.x;
        a.y = -e.y;
        a.z = -e.z
    } else {
        a.x = -e;
        a.y = -d;
        a.z = -c
    }
    this.setDir(3, a);
    okAllocator._vec3(a)
};
okSpotLightEntity.prototype.getLightDir = function () {
    var a = this.mMat.getColumn(2);
    a.x = -a.x;
    a.y = -a.y;
    a.z = -a.z;
    return a
};
okSpotLightEntity.prototype.setRange = function (a) {
    this.fRange = a;
    this.bBBoxDirty = true;
    this.bFrustumDirty = true;
    this.zone.dirtyEntity(this)
};
okSpotLightEntity.prototype.getRange = function () {
    return this.fRange
};
okSpotLightEntity.prototype.setInnerCone = function (a) {
    var c = a * Math.PI / 180;
    this.fInnerCone = c;
    this.bFrustumDirty = true
};
okSpotLightEntity.prototype.getInnerCone = function () {
    return this.fInnerCone * 180 / Math.PI
};
okSpotLightEntity.prototype.setOuterCone = function (a) {
    var c = a * Math.PI / 180;
    this.fOuterCone = c;
    this.bFrustumDirty = true
};
okSpotLightEntity.prototype.getOuterCone = function () {
    return this.fOuterCone * 180 / Math.PI
};
okSpotLightEntity.prototype.getLightFrustum = function () {
    if (this.bFrustumDirty) {
        var c = okMat4Proj(this.fOuterCone * 180 / Math.PI, 1, 0.01, this.fRange);
        var d = this.getInvMat4();
        var a = okMat4Mul(c, d);
        this.frustum.setByViewProjMat(a);
        this.bFrustumDirty = false
    }
    return this.frustum
};
okSpotLightEntity.prototype.isAffectEntity = function (a) {
    return (this.getLightFrustum().collideAABBox(a.getBoundingBox()) != 0)
};
okSpotLightEntity.prototype.dirtyMatFunc = function () {
    this.bFrustumDirty = true
};

function okSceneNode() {
    this.parent = null;
    this.iParentIdx = -1;
    this.aChildrenList = [null, null, null, null, null, null, null, null];
    this.iChildCount = 0;
    this.bbox = okAllocator.aabbox();
    this.aChildrenBBox = [okAllocator.aabbox(), okAllocator.aabbox(), okAllocator.aabbox(), okAllocator.aabbox(), okAllocator.aabbox(), okAllocator.aabbox(), okAllocator.aabbox(), okAllocator.aabbox()];
    this.aEntityList = new okList();
    this.iLevel = 0
}

okSceneNode.prototype = {
    clear: function () {
        this.parent = null;
        this.iParentIdx = -1;
        for (var a = 0; a < 8; ++a) {
            if (this.aChildrenList[a]) {
                this.deleteChild(a)
            }
        }
        this.bbox.set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[0].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[1].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[2].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[3].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[4].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[5].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[6].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aChildrenBBox[7].set(OAK.VEC3_ZERO, OAK.VEC3_ZERO);
        this.aEntityList.clear();
        this.iLevel = 0
    }, setBoundingBox: function (c) {
        c.clone(this.bbox);
        var h = (c.vMin.x + c.vMax.x) * 0.5;
        var e = (c.vMin.y + c.vMax.y) * 0.5;
        var d = (c.vMin.z + c.vMax.z) * 0.5;
        var f = okAllocator.vec3();
        var a = okAllocator.vec3();
        f.x = c.vMin.x;
        f.y = c.vMin.y;
        f.z = c.vMin.z;
        a.x = h;
        a.y = e;
        a.z = d;
        this.aChildrenBBox[0].set(f, a);
        f.x = h;
        f.y = c.vMin.y;
        f.z = c.vMin.z;
        a.x = c.vMax.x;
        a.y = e;
        a.z = d;
        this.aChildrenBBox[1].set(f, a);
        f.x = c.vMin.x;
        f.y = c.vMin.y;
        f.z = d;
        a.x = h;
        a.y = e;
        a.z = c.vMax.z;
        this.aChildrenBBox[2].set(f, a);
        f.x = h;
        f.y = c.vMin.y;
        f.z = d;
        a.x = c.vMax.x;
        a.y = e;
        a.z = c.vMax.z;
        this.aChildrenBBox[3].set(f, a);
        f.x = c.vMin.x;
        f.y = e;
        f.z = c.vMin.z;
        a.x = h;
        a.y = c.vMax.y;
        a.z = d;
        this.aChildrenBBox[4].set(f, a);
        f.x = h;
        f.y = e;
        f.z = c.vMin.z;
        a.x = c.vMax.x;
        a.y = c.vMax.y;
        a.z = d;
        this.aChildrenBBox[5].set(f, a);
        f.x = c.vMin.x;
        f.y = e;
        f.z = d;
        a.x = h;
        a.y = c.vMax.y;
        a.z = c.vMax.z;
        this.aChildrenBBox[6].set(f, a);
        f.x = c.vMin.x;
        f.y = e;
        f.z = d;
        a.x = c.vMax.x;
        a.y = c.vMax.y;
        a.z = c.vMax.z;
        this.aChildrenBBox[7].set(f, a);
        okAllocator._vec3(f);
        okAllocator._vec3(a)
    }, createChild: function (a) {
        if (this.aChildrenList[a] != null) {
            return this.aChildrenList[a]
        }

        this.iChildCount += 1;
        return this.aChildrenList[a]
    }, deleteChild: function (a) {
        if (this.aChildrenList[a] != null) {
            this.aChildrenList[a].clear();
            okAllocator._sceneNode(this.aChildrenList[a]);
            this.aChildrenList[a] = null;
            this.iChildCount -= 1
        }
    }, getChild: function (a) {
        return this.aChildrenList[a]
    }, getChildNum: function () {
        return this.iChildCount
    }, attachEntity: function (a) {
        this.aEntityList.pushBack(a)
    }, removeEntity: function (a) {
        this.aEntityList.remove(this.aEntityList.find(a))
    }, getEntityNum: function () {
        return this.aEntityList.getSize()
    }, getBoundingBox: function () {
        return this.bbox
    }, traverseTree: function (d) {
        var e = new Array;
        e.push(this);
        while (e.length != 0) {
            var c = e.shift();
            for (var a = 0; a < 8; ++a) {
                if (c.aChildrenList[a] != null) {
                    e.push(c.aChildrenList[a])
                }
            }
            d(c)
        }
    }
};

function okSceneZone(a) {
    this.sName = "";
    this.scene = a;
    this.iMaxLevel = 4;
    this.iGranularity = 1;
    this.rootNode = okAllocator.sceneNode();
    this.aEntityList = new okCollection();
    this.aLightList = new okList();
    this.aForceVisibleEntityMap = new Object;
    this.aDirtyEntityMap = new Object;
    this.aUpdateEntityList = new okList();
    this.iCurVisitFlag = 0
}

okSceneZone.prototype = {
    clear: function () {
        this.iMaxLevel = 4;
        this.iGranularity = 1;
        this.rootNode.clear();
        this.aLightList.clear();
        okAllocator._object(this.aDirtyEntityMap);
        this.aDirtyEntityMap = okAllocator.object();
        this.aUpdateEntityList.clear();
        this.aEntityList.resetIterator();
        var a;
        while (a = this.aEntityList.iterate()) {
            a.clear()
        }
        this.aEntityList.clear();
        this.aForceVisibleEntityMap = new Object
    }, setName: function (a) {
        this.sName = a
    }, getName: function (a) {
        return this.sName
    }, getScene: function () {
        return this.scene
    }, getRootNode: function () {
        return this.rootNode
    }, setBoundingBox: function (d, c) {
        this.rootNode.clear();
        this.rootNode.setBoundingBox(d, c);
        this.aEntityList.resetIterator();
        var a;
        while (a = this.aEntityList.iterate()) {
            a.__aSceneNodeList.clear();
            this.aDirtyEntityMap[a.getId()] = a
        }
    }, getBoundingBox: function () {
        return this.rootNode.getBoundingBox()
    }, setMaxLevel: function (a) {
        this.iMaxLevel = a
    }, getMaxLevel: function () {
        return this.iMaxLevel
    }, setGranularity: function (a) {
        this.iGranularity = a
    }, getGranularity: function () {
        return this.iGranularity
    }, createEntity: function (f) {
        var c = null;
        switch (f) {
            case 1:
                c = new okStaticEntity(this);
                break;
            case 2:
                c = new okDynamicEntity(this);
                break;
            case 256:
                c = new okParticleEntity(this);
                break;
            case 4:
                c = new okDctLightEntity(this);
                this.aLightList.pushBack(c);
                break;
            case 8:
                c = new okPointLightEntity(this);
                this.aLightList.pushBack(c);
                break;
            case 16:
                c = new okSpotLightEntity(this);
                this.aLightList.pushBack(c);
                break;

            case 512:
                c = new okConfigEntity(this);
                break
        }
        c.setId(this.aEntityList.add(c));
        c.__iSceneVisitFlag = -1;
        if ((f & (1 | 2 | 32 | 64 | 128 | 256)) != 0) {
            c.__aSceneNodeList = new okList();
            c.addSceneNode = function (h) {
                this.__aSceneNodeList.pushBack(h)
            };
            c.removeSceneNode = function (h) {
                this.__aSceneNodeList.remove(this.__aSceneNodeList.find(h))
            };
            this._addEntityToTree(this.rootNode, c)
        }
        if ((f & (2 | 256)) != 0) {
            this.aUpdateEntityList.pushBack(c)
        }
        if ((f & (1 | 2 | 32 | 64 | 128 | 256)) != 0) {
            c.__aDctLightList = new okList();
            c.__aPointLightList = new okList();
            c.__aSpotLightList = new okList();
            c.addLight = function (h) {
                if (h.iType == 4) {
                    this.__aDctLightList.pushBack(h)
                } else {
                    if (h.iType == 8) {
                        this.__aPointLightList.pushBack(h)
                    } else {
                        if (h.iType == 16) {
                            this.__aSpotLightList.pushBack(h)
                        }
                    }
                }
            };
            c.removeLight = function (h) {
                if (h.iType == 4) {
                    this.__aDctLightList.remove(this.__aDctLightList.find(h))
                } else {
                    if (h.iType == 8) {
                        this.__aPointLightList.remove(this.__aPointLightList.find(h))
                    } else {
                        if (h.iType == 16) {
                            this.__aSpotLightList.remove(this.__aSpotLightList.find(h))
                        }
                    }
                }
            };
            c.findLight = function (h) {
                if (h.iType == 4) {
                    return (this.__aDctLightList.find(h) != null)
                } else {
                    if (h.iType == 8) {
                        return (this.__aPointLightList.find(h) != null)
                    } else {
                        if (h.iType == 16) {
                            return (this.__aSpotLightList.find(h) != null)
                        }
                    }
                }
            };
            c.clearLight = function () {
                this.__aDctLightList.clear();
                this.__aPointLightList.clear();
                this.__aSpotLightList.clear()
            };
            var e = this.aLightList.getRoot();
            while (e) {
                var a = e.data;
                if (a.isAffectEntity(c)) {
                    c.addLight(a)
                }
                a.addAffectEntity(c);
                e = e.next
            }
        } else {
            if ((f & (4 | 8 | 16)) != 0) {
                var a = c;
                a.__aAffectEntityList = new okList();
                a.addAffectEntity = function (h) {
                    a.__aAffectEntityList.pushBack(h)
                };
                a.removeAffectEntity = function (h) {
                    a.__aAffectEntityList.remove(a.__aAffectEntityList.find(h))
                };
                a.findAffectEntity = function (h) {
                    return (a.__aAffectEntityList.find(h) != null)
                };
                a.clearAffectEntity = function () {
                    a.__aAffectEntityList.clear()
                };
                this.aEntityList.resetIterator();
                var d;
                while (d = this.aEntityList.iterate()) {
                    if (((d.iType & (1 | 2 | 32 | 64 | 128 | 256)) != 0) && a.isAffectEntity(d)) {
                        d.addLight(a);
                        a.addAffectEntity(d)
                    }
                }
            }
        }
        return c
    }, deleteEntity: function (c) {
        var d = c;
        if (okIsNumber(c)) {
            d = this.aEntityList.getDataByIndex(c)
        } else {
            if (okIsString(c)) {
                this.aEntityList.resetIterator();
                var e;
                while (e = this.aEntityList.iterate()) {
                    if (e.sName == c) {
                        d = e;
                        break
                    }
                }
            }
        }
        if ((d.iType & (4 | 8 | 16)) != 0) {
            var a = d;
            var f = a.__aAffectEntityList.getRoot();
            while (f) {
                f.data.removeLight(a);
                f = f.next
            }
            a.clearAffectEntity();
            this.aLightList.remove(this.aLightList.find(a))
        } else {
            if ((d.iType & (1 | 2 | 32 | 64 | 128 | 256)) != 0) {
                this._removeEntityFromTree(d)
            }
            var f = d.__aDctLightList.getRoot();
            while (f) {
                f.data.removeAffectEntity(d);
                f = f.next
            }
            f = d.__aPointLightList.getRoot();
            while (f) {
                f.data.removeAffectEntity(d);
                f = f.next
            }
            f = d.__aSpotLightList.getRoot();
            while (f) {
                f.data.removeAffectEntity(d);
                f = f.next
            }
            d.clearLight()
        }
        if (this.aDirtyEntityMap[d.getId()] != null) {
            delete this.aDirtyEntityMap[d.getId()]
        }
        if ((d.iType & (2 | 256)) != 0) {
            this.aUpdateEntityList.remove(this.aUpdateEntityList.find(d))
        }
        this.aEntityList.removeByIndex(d.getId())
    }, getEntity: function (a) {
        if (okIsNumber(a)) {
            return this.aEntityList.getDataByIndex(a)
        } else {
            if (okIsString(a)) {
                this.aEntityList.resetIterator();
                var c;
                while (c = this.aEntityList.iterate()) {
                    if (c.sName == a) {
                        return c
                    }
                }
            }
        }
        return null
    }, getEntityArray: function (d, e, c) {
        d = ((d != null) ? d : okAllocator.array());
        e = ((e != null) ? e : -1);
        this.aEntityList.resetIterator();
        var a;
        while (a = this.aEntityList.iterate()) {
            if (e & a.iType) {
                if (c && !c(a)) {
                    continue
                }
                d.push(a)
            }
        }
        return d
    }, dirtyEntity: function (a) {
        var c = a.getId();
        if (this.aDirtyEntityMap[c] == null) {
            this.aDirtyEntityMap[c] = a
        }
    }, forceVisibleEntity: function (a, c) {
        if (c) {
            this.aForceVisibleEntityMap[a.getId()] = a.getId()
        } else {
            if (this.aForceVisibleEntityMap[a.getId()]) {
                delete this.aForceVisibleEntityMap[a.getId()]
            }
        }
    },  pick: function (o, e, q, m) {
        if (q == null) {
            q = -1
        }
        this._upDE();
        this.iCurVisitFlag += 1;
        var f = null;
        var p = 10000000000;
        var l = new Object;
        if (m == null) {
            var k = [this.rootNode];
            while (k.length != 0) {
                var a = k.shift();
                var n = a.aEntityList.getRoot();
                while (n) {
                    var c = n.data;
                    if (c.__iSceneVisitFlag < this.iCurVisitFlag) {
                        if (c.getState() != 1) {
                            if (c.getBoundingBox().collideRay(o, e, l) != 0 && (c.iType & q)) {
                                if (l.fT0 > 0 && l.fT0 < p) {
                                    f = c;
                                    p = l.fT0
                                }
                            }
                        }
                        c.__iSceneVisitFlag = this.iCurVisitFlag
                    }
                    n = n.next
                }
                for (var d = 0; d < 8; ++d) {
                    if (a.aChildrenList[d] == null) {
                        continue
                    }
                    var h = a.aChildrenBBox[d].collideRay(o, e);
                    if (h != 0) {
                        k.push(a.aChildrenList[d])
                    }
                }
            }
        } else {
            var k = [this.rootNode];
            while (k.length != 0) {
                var a = k.shift();
                var n = a.aEntityList.getRoot();
                while (n) {
                    var c = n.data;
                    if (c.__iSceneVisitFlag < this.iCurVisitFlag) {
                        if (c.getState() != 1) {
                            if (c.getBoundingBox().collideRay(o, e, l) != 0 && (c.iType & q) && m(c)) {
                                if (l.fT0 > 0 && l.fT0 < p) {
                                    f = c;
                                    p = l.fT0
                                }
                            }
                        }
                        c.__iSceneVisitFlag = this.iCurVisitFlag
                    }
                    n = n.next
                }
                for (var d = 0; d < 8; ++d) {
                    if (a.aChildrenList[d] == null) {
                        continue
                    }
                    var h = a.aChildrenBBox[d].collideRay(o, e);
                    if (h != 0) {
                        k.push(a.aChildrenList[d])
                    }
                }
            }
        }
        return f
    }, update: function (a) {
        var c = this.aUpdateEntityList.getRoot();
        while (c) {
            c.data.update(a);
            c = c.next
        }
    }, _logTree: function (c) {
        this._upDE();
        var a = new Array;
        a.push((c != null) ? c : this.rootNode);
        while (a.length != 0) {
            var h = a.pop();
            var k = "";
            for (var e = 0; e < h.iLevel; ++e) {
                k += "________"
            }
            k += "[Min:" + h.bbox.vMin.x + "," + h.bbox.vMin.y + "," + h.bbox.vMin.z + "  Max:" + h.bbox.vMax.x + "," + h.bbox.vMax.y + "," + h.bbox.vMax.z + "]";
            k += "[E:";
            var d = true;
            var f = h.aEntityList.getRoot();
            while (f) {
                if (!d) {
                    k += ","
                }
                d = false;
                k += f.data.getId();
                f = f.next
            }
            k += "]";
            window.console.log(k);
            for (var e = 0; e < h.aChildrenList.length; ++e) {
                if (h.aChildrenList[e] != null) {
                    a.push(h.aChildrenList[e])
                }
            }
        }
    }, _addEntityToTree: function (d, a) {
        var f = a.getBoundingBox();
        if (d.iLevel == this.iMaxLevel || f.collideAABBox(d.bbox) != 1) {
            d.attachEntity(a);
            a.addSceneNode(d);
            return
        } else {
            if (d.aEntityList.getSize() <= this.iGranularity && d.getChildNum() == 0) {
                d.attachEntity(a);
                a.addSceneNode(d);
                if (d.aEntityList.getSize() > this.iGranularity) {
                    this._splitNode(d)
                }
                return
            }
        }
        for (var c = 0; c < 8; ++c) {
            var e = d.aChildrenBBox[c].collideAABBox(f);
            if (e == 1) {
                this._addEntityToTree(d.createChild(c), a)
            } else {
                if (e == 2) {
                    this._addEntityToTree(d.createChild(c), a);
                    break
                }
            }
        }
    }, _splitNode: function (a) {
        var l = new Array;
        var c = a.aEntityList.getRoot();
        while (c) {
            var f = c.data;
            var m = f.getBoundingBox();
            if (m.collideAABBox(a.bbox) != 1) {
                l.push(f);
                c = c.next
            } else {
                f.removeSceneNode(a);
                var d = c.next;
                a.aEntityList.remove(c);
                c = d;
                for (var e = 0; e < 8; ++e) {
                    var k = a.aChildrenBBox[e].collideAABBox(m);
                    if (k == 1) {
                        this._addEntityToTree(a.createChild(e), f)
                    } else {
                        if (k == 2) {
                            this._addEntityToTree(a.createChild(e), f);
                            break
                        }
                    }
                }
            }
        }
        a.aEntityList.clear();
        for (var h = 0; h < l.length; ++h) {
            a.aEntityList.pushBack(l[h])
        }
    }, _removeEntityFromTree: function (a) {
        var e = a.__aSceneNodeList.getRoot();
        while (e) {
            var f = e.data;
            f.removeEntity(a);
            if (f.aEntityList.getSize() == 0 && f.getChildNum() == 0) {
                var c = f;
                while (c != null) {
                    var d = c.parent;
                    if (d != null) {
                        d.deleteChild(c.iParentIdx);
                        if (d.getEntityNum() == 0 && d.getChildNum() == 0) {
                            c = d
                        } else {
                            c = null
                        }
                    } else {
                        c = null
                    }
                }
            }
            e = e.next
        }
        a.__aSceneNodeList.clear()
    }, _upDE: function () {
        var e = new Array;
        for (var d in this.aDirtyEntityMap) {
            var a = this.aDirtyEntityMap[d];
            e.push(a);
            if ((a.iType & (4 | 8 | 16)) == 0) {
                this._removeEntityFromTree(a)
            }
            delete this.aDirtyEntityMap[d]
        }
        var f = e.length;
        for (var c = 0; c < f; ++c) {
            var a = e[c];
            if ((a.iType & (4 | 8 | 16)) == 0) {
                this._addEntityToTree(this.rootNode, a)
            }
            this._evalLE(a)
        }
    }, _evalLE: function (c) {
        var e = c.getType();
        if ((e & (4 | 8 | 16)) != 0) {
            var a = c;
            var f = a.__aAffectEntityList.getRoot();
            while (f) {
                f.data.removeLight(a);
                f = f.next
            }
            a.clearAffectEntity();
            this.aEntityList.resetIterator();

        } else {
            if ((e & (1 | 2 | 32 | 64 | 128 | 256)) != 0) {
                var d = c.__aDctLightList.getRoot();
                while (d) {
                    var a = d.data;
                    a.removeAffectEntity(c);
                    d = d.next
                }
                d = c.__aPointLightList.getRoot();
                while (d) {
                    var a = d.data;
                    a.removeAffectEntity(c);
                    d = d.next
                }
                d = c.__aSpotLightList.getRoot();
                while (d) {
                    var a = d.data;
                    a.removeAffectEntity(c);
                    d = d.next
                }
                c.clearLight();
                d = this.aLightList.getRoot();
                while (d) {
                    var a = d.data;
                    if (a.isAffectEntity(c)) {
                        c.addLight(a);
                        a.addAffectEntity(c)
                    }
                    d = d.next
                }
            }
        }
    }, _dumpTree: function (f, h) {
        var k = okAllocator.array();
        k.push(f);
        while (k.length != 0) {
            var e = k.shift();
            var d = e.aEntityList.getRoot();
            while (d) {
                var a = d.data;
                if (a.__iSceneVisitFlag < this.iCurVisitFlag) {
                    if (a.getState() != 1) {
                        h.push(a)
                    }
                    a.__iSceneVisitFlag = this.iCurVisitFlag
                }
                d = d.next
            }
            for (var c = 0; c < 8; ++c) {
                if (e.aChildrenList[c] == null) {
                    continue
                }
                k.push(e.aChildrenList[c])
            }
        }
        okAllocator._array(k)
    }
};

function okScene(d, c) {
    this.resourceManager = c;
    this.sName = d;
    this.aZoneList = new Object;
    var a = new okSceneZone(this);
    a.setName("Default");
    this.aZoneList.Default = a;
    this.sBasePath = "";
    this.sModelPath = "";
    this.sAnimationPath = "";
    this.sTerrainPath = "";
    this.sTexturePath = "";
    this.aCameraList = new okList()
}

okScene.prototype = {
    clear: function () {
        this.clearEntity();
        this.clearCamera()
    }, clearEntity: function () {
        for (var c in this.aZoneList) {
            this.aZoneList[c].clear()
        }
        okAllocator._object(this.aZoneList);
        this.aZoneList = okAllocator.object();
        var a = new okSceneZone(this);
        a.setName("Default");
        this.aZoneList.Default = a
    }, clearCamera: function () {
        this.aCameraList.clear()
    }, getName: function () {
        return this.sName
    }, setBaseUrl: function (a) {
        a = a.replace(/\\/g, "/");
        a = a.replace(/\/$/g, "");
        this.sBasePath = a
    }, getBaseUrl: function (a) {
        return this.sBasePath
    }, setModelUrl: function (a) {
        a = a.replace(/\\/g, "/");
        a = a.replace(/\/$/g, "");
        this.sModelPath = a
    }, _packModelUrl: function (c) {
        c = c.replace(/\\/g, "/");
        c = c.replace(/^\/+/g, "");
        var a = this.sBasePath;
        a += ((a != "") ? ("/" + this.sModelPath) : this.sModelPath);
        a += ((a != "") ? ("/" + c) : c);
        return a
    }, getModelUrl: function () {
        return this.sModelPath
    }, setSkAnimationUrl: function (a) {
        a = a.replace(/\\/g, "/");
        a = a.replace(/\/$/g, "");
        this.sAnimationPath = a
    }, getSkAnimationUrl: function () {
        return this.sAnimationPath
    }, _packSkAnimationUrl: function (c) {
        c = c.replace(/\\/g, "/");
        c = c.replace(/^\/+/g, "");
        var a = this.sBasePath;
        a += ((a != "") ? ("/" + this.sAnimationPath) : this.sAnimationPath);
        a += ((a != "") ? ("/" + c) : c);
        return a
    }, setTerrainUrl: function (a) {
        a = a.replace(/\\/g, "/");
        a = a.replace(/\/$/g, "");
        this.sTerrainPath = a
    }, getTerrainUrl: function () {
        return this.sTerrainPath
    }, _packTerrainUrl: function (c) {
        c = c.replace(/\\/g, "/");
        c = c.replace(/^\/+/g, "");
        var a = this.sBasePath;
        a += ((a != "") ? ("/" + this.sTerrainPath) : this.sTerrainPath);
        a += ((a != "") ? ("/" + c) : c);
        return a
    }, setTextureUrl: function (a) {
        a = a.replace(/\\/g, "/");
        a = a.replace(/\/$/g, "");
        this.sTexturePath = a
    }, getTextureUrl: function () {
        return this.sTexturePath
    }, _packTextureUrl: function (c) {
        c = c.replace(/\\/g, "/");
        c = c.replace(/^\/+/g, "");
        var a = this.sBasePath;
        a += ((a != "") ? ("/" + this.sTexturePath) : this.sTexturePath);
        a += ((a != "") ? ("/" + c) : c);
        return a
    }, getZone: function (a) {
        return this.aZoneList[(a != null) ? a : "Default"]
    }, setZoneBoundingBox: function (e, c, d) {
        var a = this.aZoneList[(d != null) ? d : "Default"];
        a.setBoundingBox(new okAABBox(e, c))
    }, getZoneBoundingBox: function (c) {
        var a = this.aZoneList[(c != null) ? c : "Default"];
        return a.getBoundingBox()
    }, setZoneGranularity: function (c, d) {
        var a = this.aZoneList[(d != null) ? d : "Default"];
        a.setGranularity(c)
    }, getZoneGranularity: function (c) {
        var a = this.aZoneList[(c != null) ? c : "Default"];
        return a.getGranularity()
    }, setZoneMaxLevel: function (c, d) {
        var a = this.aZoneList[(d != null) ? d : "Default"];
        a.setMaxLevel(c)
    }, getZoneMaxLevel: function (c) {
        var a = this.aZoneList[(c != null) ? c : "Default"];
        return a.getMaxLevel()
    }, createCamera: function (c) {
        var a = new okCamera(this.resourceManager.rc);
        if (c != null) {
            a.setName(c)
        }
        this.aCameraList.pushBack(a);
        return a
    }, deleteCamera: function (c) {
        if (okIsString(c)) {
            var a = this.aCameraList.getRoot();
            while (a) {
                if (a.data.getName() == c) {
                    this.aCameraList.remove(a);
                    return
                }
                a = a.next
            }
        } else {
            this.aCameraList.remove(this.aCameraList.find(c))
        }
    }, getCamera: function (c) {
        var a = this.aCameraList.getRoot();
        while (a) {
            if (a.data.getName() == c) {
                return a.data
            }
            a = a.next
        }
        return null
    }, getCameraArray: function (c, a) {
        var d = this.aCameraList.getRoot();
        while (d) {
            if (a == null || a(d.data)) {
                c.push(d.data)
            }
            d = d.next
        }
        return null
    }, createEntity: function (c, h, d) {
        var a = this.aZoneList[(d != null) ? d : "Default"];
        var f = a.createEntity(c);
        if (h) {
            f.setName(h)
        }
        return f
    }, deleteEntity: function (c, d) {
        var a = this.aZoneList[(d != null) ? d : "Default"];
        return a.deleteEntity(c)
    }, getEntity: function (c, d) {
        var a = this.aZoneList[(d != null) ? d : "Default"];
        return a.getEntity(c)
    }, getEntityArray: function (d, f, c, e) {
        var a = this.aZoneList[(e != null) ? e : "Default"];
        return a.getEntityArray(d, f, c)
    }, cullByFrustum: function (f, d, h, c, e) {
        var a = this.aZoneList[(e != null) ? e : "Default"];
        return a.cullByFrustum(f, d, h, c)
    }, pick: function (d, h, f, c, e) {
        var a = this.aZoneList[(e != null) ? e : "Default"];
        return a.pick(d, h, f, c)
    }, update: function (c, d) {
        var a = this.aZoneList[(d != null) ? d : "Default"];
        a.update(c)
    }
};

function okSceneManager(a, c) {
    this.resourceManager = c;
    this.aSceneList = new Object
}

okSceneManager.prototype = {
    clear: function () {
        for (var a in this.aSceneList) {
            this.aSceneList[a].clear()
        }
        okAllocator._object(this.aSceneList);
        this.aSceneList = okAllocator.object()
    }, createScene: function (a) {
        var c = this.aSceneList[a];
        if (!c) {
            c = new okScene(a, this.resourceManager);
            this.aSceneList[a] = c
        }
        return c
    }, deleteScene: function (a) {
        var c = this.aSceneList[a];
        if (c) {
            c.clear();
            delete this.aSceneList[a]
        }
    }, getScene: function (a) {
        return this.aSceneList[a]
    }
};

function okResource() {
    this.iType = 0;
    this.data = null;
    this.sKey = null;
    this.iRef = 0;
    this.iState = 1;
    this.bCustom = false;
    this.aListenerList = new okList()
}

okResource.prototype = {
    clear: function () {
        if (this.data) {
            if (this.iType == 1) {
                this.data.clear()
            } else {
                if (this.iType == 2) {
                    this.data.releaseTexture()
                } else {
                    if (this.iType == 3) {
                        this.data.clear()
                    }
                }
            }
            this.data = null
        }
        this.iType = 0;
        this.sKey = null;
        this.iRef = 0;
        this.iState = 1;
        this.bCustom = false;
        this.aListenerList.clear()
    }
};

function okResourceManager(a, c) {
    this.rc = c;
    this.aResList = new okCollection();
    this.aKeyIdMap = new Object;
    this.bAsyncLoad = a.bAsyncLoad
}

okResourceManager.prototype = {
    clear: function () {
        this.aResList.resetIterator();
        var a;
        while (a = this.aResList.iterate()) {
            a.clear()
        }
        this.aResList.clear();
        okAllocator._object(this.aKeyIdMap);
        this.aKeyIdMap = okAllocator.object()
    }, getResourceType: function (a) {
        if (!this.aResList.isIndexValid(a)) {
            return 0
        }
        return this.aResList.getDataByIndex(a).iType
    }, getResourceState: function (a) {
        if (!this.aResList.isIndexValid(a)) {
            return 1
        }
        return this.aResList.getDataByIndex(a).iState
    }, getResourceNum: function () {
        return this.aResList.getSize()
    }, setCustomResourceState: function (d, c) {
        if (!this.aResList.isIndexValid(d)) {
            return false
        }
        var a = this.aResList.getDataByIndex(d);
        if (!a.bCustom) {
            return false
        }
        a.iState = c;
        return true
    }, createResource: function (e, h, f) {
        var a = this.aKeyIdMap[h];
        if (a != null) {
            var c = this.aResList.getDataByIndex(a);
            c.iRef += 1;
            return a
        }
        var c = new okResource();
        c.iType = e;
        c.iRef = 1;
        c.iState = (f == true) ? 5 : 2;
        c.sKey = h;
        c.bCustom = f == true ? true : false;
        if (e == 1) {
            c.data = new okModel(this.rc)
        } else {
            if (e == 2) {
                c.data = new okTexture(this.rc)
            } else {
                if (e == 3) {
                    c.data = new okSkAnimation()
                }
            }
        }
        var d = this.aResList.add(c);
        this.aKeyIdMap[h] = d;
        return d
    }, getResource: function (c) {
        if (okIsNumber(c)) {
            if (c < 0) {
                return null
            }
            return this.aResList.getDataByIndex(c).data
        }
        var a = this.aKeyIdMap[c];
        if (a != null) {
            return this.aResList.getDataByIndex(a).data
        }
        return null
    }, getResourceId: function (a) {
        if (this.aKeyIdMap[a] != null) {
            return this.aKeyIdMap[a]
        }
        return -1
    }, deleteResource: function (c) {
        var d = null;
        var e = -1;
        if (okIsNumber(c)) {
            d = this.aResList.getDataByIndex(c);
            e = c
        } else {
            var a = this.aKeyIdMap[c];
            if (a != null) {
                d = this.aResList.getDataByIndex(a);
                e = a
            }
        }
        if (d) {
            d.iRef -= 1;
            if (d.iRef == 0) {
                delete this.aKeyIdMap[d.sKey];
                d.clear();
                this.aResList.removeByIndex(e);
                this.postMessage(e, "RES_DELETED", [e])
            }
        }
    }, registerListener: function (d, c) {
        if (this.aResList.isIndexValid(d)) {
            var a = this.aResList.getDataByIndex(d);
            if (a.aListenerList.find(c) == null) {
                a.aListenerList.pushBack(c)
            }
        }
    }, removeListener: function (d, c) {
        if (this.aResList.isIndexValid(d)) {
            var a = this.aResList.getDataByIndex(d);
            a.aListenerList.remove(a.aListenerList.find(c))
        }
    }, loadModelByText: function (d, a) {
        if (!this.aResList.isIndexValid(d)) {
            return false
        }
        var c = this.aResList.getDataByIndex(d);
        if (c.iType != 1 || c.bCustom) {
            return false
        }
        if (c.iState != 3) {
            c.iState = 3;
            if (okResourceParser.loadModel(1, c.data, a, true, true)) {
                c.iState = 5;
                this.postMessage(d, "RES_READY", [d])
            } else {
                c.iState = 2
            }
        } else {
            return false
        }
        return true
    }, loadSkAnimationByUrl: function (h, a, e) {
        if (!this.aResList.isIndexValid(h)) {
            return false
        }
        var d = this.aResList.getDataByIndex(h);
        if (d.iType != 3 || d.bCustom) {
            return false
        }

        return true
    }, loadSkAnimationByText: function (d, a) {
        if (!this.aResList.isIndexValid(d)) {
            return false
        }
        var c = this.aResList.getDataByIndex(d);
        if (c.iType != 3 || c.bCustom) {
            return false
        }
        if (c.iState != 3) {
            c.iState = 3;
            if (okResourceParser.loadSkAnimation(1, c.data, a)) {
                c.iState = 5;
                this.postMessage(d, "RES_READY", [d])
            } else {
                c.iState = 2
            }
        } else {
            return false
        }
        return true
    }, loadTextureByUrl: function (a, o, n) {
        if (!this.aResList.isIndexValid(a)) {
            return false
        }
        var l = this.aResList.getDataByIndex(a);
        if (l.iType == 0) {
            l.iType = 2;
            l.data = new okTexture(this.rc)
        }
        if (l.iType != 2 || l.bCustom) {
            return false
        }
        if (l.iState != 3) {
            l.iState = 3;
            var d = this;
            var e = okFileFilter(o);
            if (e != "mp4" && e != "ogg" && e != "ogv") {
                var f = new Image();
                f.onload = function () {
                    okResourceParser.loadTextureFromImage(l.data, f, n);
                    l.data.genMipMap();
                    l.iState = 5;
                    d.postMessage(a, "RES_READY", [a])
                };
                f.onerror = function () {
                    l.iState = 2
                };
                f.src = o
            } else {
                var i = o;
                var o = o.substring(0, o.lastIndexOf("."));
                o.replace("\\", "/");
                o = o.substring(o.lastIndexOf("/") + 1, o.length);
                var c = document.getElementById(o);
                if (!c) {
                    c = document.createElement("video");
                    c.src = i;
                    c.id = o;
                    c.autoplay = true;
                    c.preload = "auto";
                    c.loop = true;
                    l.data.video = c
                }


                function h(p) {
                    c.play()
                }

                function m(p) {
                    l.iState = 2
                }

                c.addEventListener("error", m, false);
                c.addEventListener("ended", h, false)
            }
        } else {
            return false
        }
        return true
    }, loadTextureByImage: function (e, d, a) {
        if (!this.aResList.isIndexValid(e)) {
            return false
        }
        var c = this.aResList.getDataByIndex(e);
        if (c.iType == 0) {
            c.iType = 2;
            c.data = new okTexture(this.rc)
        }
        if (c.iType != 2 || c.bCustom) {
            return false
        }
        if (c.iState != 3) {
            c.iState = 3;
            okResourceParser.loadTextureFromImage(c.data, d, a);
            c.data.genMipMap();
            c.iState = 5;
            this.postMessage(e, "RES_READY", [e])
        } else {
            return false
        }
        return true
    }, loadTextureByVideo: function (e, d, a) {
        if (!this.aResList.isIndexValid(e)) {
            return false
        }
        var c = this.aResList.getDataByIndex(e);
        if (c.iType == 0) {
            c.iType = 2;
            c.data = new okTexture(this.rc)
        }
        if (c.iType != 2 || c.bCustom) {
            return false
        }
        if (c.iState != 3) {
            c.iState = 3;
            okResourceParser.loadTextureFromVideo(c.data, d, a);
            c.data.video = d;
            c.iState = 5;
            this.postMessage(e, "RES_READY", [e])
        } else {
            return false
        }
        return true
    }, loadCubeTextureByUrl: function (a, p, f, m, e, k, d, q) {
        if (!this.aResList.isIndexValid(a)) {
            return false
        }
        var h = this.aResList.getDataByIndex(a);
        if (h.iType == 0) {
            h.iType = 2;
            h.data = new okTexture(this.rc)
        }
        if (h.iType != 2 || h.bCustom) {
            return false
        }
        if (h.iState != 3) {
            h.iState = 3;
            var o = h.data;
            var c = this;
            var n = new Image();
            n.onerror = function () {
                h.iState = 2
            };
            var u = new Image();
            u.onerror = function () {
                h.iState = 2
            };
            var l = new Image();
            l.onerror = function () {
                h.iState = 2
            };
            var t = new Image();
            t.onerror = function () {
                h.iState = 2
            };
            var i = new Image();
            i.onerror = function () {
                h.iState = 2
            };
            var s = new Image();
            s.onerror = function () {
                h.iState = 2
            };
            n.onload = function () {
                u.onload = function () {
                    l.onload = function () {
                        t.onload = function () {
                            i.onload = function () {
                                s.onload = function () {
                                    o.createTexture(34067, n.width, n.height, 6408, 5121, n, u, l, t, i, s);
                                    o.genMipMap();
                                    h.iState = 5;
                                    c.postMessage(a, "RES_READY", [a])
                                };
                                s.src = d
                            };
                            i.src = k
                        };
                        t.src = e
                    };
                    l.src = m
                };
                u.src = f
            };
            n.src = p
        } else {
            return false
        }
        return true
    }, postMessage: function (h, a, f) {
        if (!this.aResList.isIndexValid(h)) {
            return false
        }
        var e = new Object;
        e.sMsg = a;
        e.aArgs = f.slice();
        var c = this.aResList.getDataByIndex(h);
        var d = c.aListenerList.getRoot();
        while (d) {
            d.data.onMessage(e);
            d = d.next
        }
    }
};

function okShaderManager(a) {
    this.rc = a;
    this.sShaderSourcePath = "";
    this.sFloatPrecision = "mediump";
    this.aVertexShaderMap = new Object;
    this.aFragmentShaderMap = new Object;
    this.aProgramMap = new Object;
    this.aVertexSourceMap = new Object;
    this.aFragmentSourceMap = new Object;
    this.aVertexSourceMap.Common = "";
    this.aFragmentSourceMap.Common = "";
    this.aVertexSourceMap.Depth = "#ifdef OK_ALPHA_TEST\nvarying vec3 okVary_Pos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\n#endif\nattribute vec3 okAttr_Pos;\n#ifdef OK_ALPHA_TEST\n#ifdef OK_NORMAL\nattribute vec3 okAttr_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nattribute vec3 okAttr_Color;\n#endif\n#ifdef OK_TC12\nattribute vec4 okAttr_TC12;\n#else\n#ifdef OK_TC1\nattribute vec2 okAttr_TC1;\n#endif\n#ifdef OK_TC2\nattribute vec2 okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nattribute vec4 okAttr_TC34;\n#else\n#ifdef OK_TC3\nattribute vec2 okAttr_TC3;\n#endif\n#ifdef OK_TC4\nattribute vec2 okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nattribute vec3 okAttr_Tangent;\n#endif\n#ifdef OK_BINORMAL\nattribute vec3 okAttr_Binormal;\n#endif\n#endif\n#ifdef OK_SKANIMATION\nattribute vec4 okAttr_BoneIdx;attribute vec4 okAttr_BoneWeight;uniform vec4 okUni_BoneMat[32*3];\n#endif\nuniform mat4 okUni_TransMat[4];void main(void){\n#ifdef OK_SKANIMATION\nmat4 a=mat4(0.0);{int c=int(okAttr_BoneIdx[0])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[0]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[1])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[1]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[2])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[2]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[3])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[3]*mat4(d,e,f,g);}\n#endif\n#ifdef OK_ALPHA_TEST\n#ifdef OK_NORMAL\nokVary_Normal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Normal,0.0)).xyz;\n#endif\n#ifdef OK_VERTEX_COLOR\nokVary_Color=okAttr_Color;\n#endif\n#ifdef OK_TC12\nokVary_TC12=okAttr_TC12;\n#else\n#ifdef OK_TC1\nokVary_TC1=okAttr_TC1;\n#endif\n#ifdef OK_TC2\nokVary_TC2=okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nokVary_TC34=okAttr_TC34;\n#else\n#ifdef OK_TC3\nokVary_TC3=okAttr_TC3;\n#endif\n#ifdef OK_TC4\nokVary_TC4=okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nokVary_Tangent=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Tangent,0.0)).xyz;\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Binormal,0.0)).xyz;;\n#endif\n#endif\nvec4 b=\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[0]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Pos,1.0);\n#ifdef OK_ALPHA_TEST\nokVary_Pos=b.xyz/b.w;\n#endif\ngl_Position=okUni_TransMat[2]*b;}";
    this.aFragmentSourceMap.Depth = "#ifdef OK_ALPHA_TEST\nvarying vec3 okVary_Pos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\n#endif\n#ifdef OK_ALPHA_TEST\nuniform vec4 okUni_General[8];uniform sampler2D okUni_Sampler2D[7];uniform samplerCube okUni_SamplerCube[4];vec3 okGlb_P;vec3 okGlb_N;vec3 okGlb_V;vec3 okGlb_R;\n#define P okGlb_P\n#define CP okUni_General[7].xyz\n#define N okGlb_N\n#define V okGlb_V\n#define R okGlb_R\n#define T okUni_General[4].w\n#define RAND okUni_General[5].w\n#define EMI okUni_General[0].xyz\n#define AMB okUni_General[1].xyz\n#define DIF okUni_General[2].xyz\n#define SPE okUni_General[3].xyz\n#define GLO okUni_General[0].w\n#define ALPHA okUni_General[2].w\n#define GROUND okUni_General[4].xyz\n#define SKY okUni_General[5].xyz\n#ifdef OK_VERTEX_COLOR\n#define VC okVary_Color\n#else\n#define VC vec3(0.0)\n#endif\n#ifdef OK_TC12\n#define TC1 okVary_TC12.xy\n#define TC2 okVary_TC12.zw\n#else\n#ifdef OK_TC1\n#define TC1 okVary_TC1\n#endif\n#ifdef OK_TC2\n#define TC2 okVary_TC2\n#endif\n#endif\n#ifdef OK_TC34\n#define TC3 okVary_TC34.xy\n#define TC4 okVary_TC34.zw\n#else\n#ifdef OK_TC3\n#define TC3 okVary_TC3\n#endif\n#ifdef OK_TC4\n#define TC4 okVary_TC4\n#endif\n#endif\nvec2 okRotTC(vec2 d,float e){float a=cos(e);float b=sin(e);mat2 c=mat2(a,b,-b,a);return(c*(d-0.5))+0.5;}float okFunc_GetMaterialAlpha(){\n#ifdef OK_SCRIPT_ALPHA_CODE\nOK_SCRIPT_ALPHA_CODE\n#else\n#ifdef OK_TEX_OPACITY\nreturn texture2D(okUni_Sampler2D[5],OK_OPACITY_TC).a;\n#else\nreturn okUni_General[2].a;\n#endif\n#endif\n}\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 okFunc_GetNormalScript(){OK_SCRIPT_NORMAL_CODE}\n#endif\nvec3 okFunc_GetMaterialNormal(){\n#ifdef OK_NORMAL\nvec3 vertexNormal=okVary_Normal;\n#else\nvec3 vertexNormal=vec3(0.0,1.0,0.0);\n#endif\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 normalT=okFunc_GetNormalScript();mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);return normalize(matTangent*normalT);\n#else\n#ifdef OK_TEX_NORMALMAP\nvec3 normalT=texture2D(okUni_Sampler2D[4],OK_NORMALMAP_TC).xyz;normalT=normalT*2.0-1.0;mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);return normalize(matTangent*normalT);\n#else\nreturn normalize(vertexNormal);\n#endif\n#endif\n}\n#endif\nvec4 encodeFloat(float f){vec4 bitSh=vec4(256*256*256,256*256,256,1);vec4 bitMsk=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);vec4 comp=fract(f*bitSh);comp-=comp.xxyz*bitMsk;return comp;}void main(void){\n#ifdef OK_ALPHA_TEST\nP=okVary_Pos;vec3 normal=okFunc_GetMaterialNormal();N=normal;vec3 camVec=normalize(okUni_General[7].xyz-okVary_Pos);V=-camVec;vec3 reflectVec=normalize(reflect(-camVec,normal));R=reflectVec;if(okFunc_GetMaterialAlpha()<=okUni_General[3].w)discard;\n#endif\ngl_FragColor=encodeFloat(gl_FragCoord.z);}";
    this.aVertexSourceMap.DepthDefault = "attribute vec3 okAttr_Pos;uniform mat4 okUni_TransMat[3];void main(void){gl_Position=okUni_TransMat[2]*(okUni_TransMat[0]*vec4(okAttr_Pos,1.0));}";
    this.aFragmentSourceMap.DepthDefault = "vec4 e(float d){vec4 a=vec4(256*256*256,256*256,256,1);vec4 b=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);vec4 c=fract(d*a);c-=c.xxyz*b;return c;}void main(void){gl_FragColor=e(gl_FragCoord.z);}";
    this.aVertexSourceMap.FlatColor = "#if TEX\nvarying vec2 fragmentTexCoord;\n#endif\nattribute vec3 position;\n#if TEX\nattribute vec2 texcoord;\n#endif\nuniform mat4 matWorld;uniform mat4 matViewProj;void main(void){\n#if TEX\nfragmentTexCoord=texcoord;\n#endif\ngl_Position=matViewProj*matWorld*vec4(position,1.0);}";
    this.aFragmentSourceMap.FlatColor = "#if TEX\nvarying vec2 fragmentTexCoord;\n#endif\nuniform vec3 color;\n#if TEX\nuniform sampler2D texSampler;\n#endif\nvoid main(void){\n#if TEX\nvec3 a=color*texture2D(texSampler,fragmentTexCoord).xyz;\n#else\nvec3 a=color;\n#endif\ngl_FragColor=vec4(a,1.0);}";
    this.aVertexSourceMap.GaussianFilter = "varying vec2 okVary_ScrTC;attribute vec3 okAttr_Pos;void main(void){gl_Position=vec4(okAttr_Pos,1.0);okVary_ScrTC=(gl_Position.xy+1.0)*0.5;}";
    this.aFragmentSourceMap.GaussianFilter = "varying vec2 okVary_ScrTC;uniform vec4 okUni_ScreenPosOffsetAndScale;uniform vec2 okUni_TexelSize;uniform sampler2D okUni_Tex;void main(void){vec2 a=okUni_ScreenPosOffsetAndScale.xy+okVary_ScrTC*okUni_ScreenPosOffsetAndScale.zw;vec2 b[12];b[0]=vec2(-0.326212,-0.405805);b[1]=vec2(-0.840144,-0.073580);b[2]=vec2(-0.695914,0.457137);b[3]=vec2(-0.203345,0.620716);b[4]=vec2(0.962340,-0.194983);b[5]=vec2(0.473434,-0.480026);b[6]=vec2(0.519456,0.767022);b[7]=vec2(0.185461,-0.893124);b[8]=vec2(0.507431,0.064425);b[9]=vec2(0.896420,0.412458);b[10]=vec2(-0.321940,-0.932615);b[11]=vec2(-0.791559,-0.597705);vec4 c=texture2D(okUni_Tex,a);for(int i=0;i<12;i++){c+=texture2D(okUni_Tex,a+okUni_TexelSize*8.0*b[i]);}gl_FragColor=c/12.0;}";
    this.aVertexSourceMap.Glow = "#ifdef OK_ALPHA_TEST\nvarying vec3 okVary_Pos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\n#endif\nattribute vec3 okAttr_Pos;\n#ifdef OK_ALPHA_TEST\n#ifdef OK_NORMAL\nattribute vec3 okAttr_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nattribute vec3 okAttr_Color;\n#endif\n#ifdef OK_TC12\nattribute vec4 okAttr_TC12;\n#else\n#ifdef OK_TC1\nattribute vec2 okAttr_TC1;\n#endif\n#ifdef OK_TC2\nattribute vec2 okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nattribute vec4 okAttr_TC34;\n#else\n#ifdef OK_TC3\nattribute vec2 okAttr_TC3;\n#endif\n#ifdef OK_TC4\nattribute vec2 okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nattribute vec3 okAttr_Tangent;\n#endif\n#ifdef OK_BINORMAL\nattribute vec3 okAttr_Binormal;\n#endif\n#endif\n#ifdef OK_SKANIMATION\nattribute vec4 okAttr_BoneIdx;attribute vec4 okAttr_BoneWeight;uniform vec4 okUni_BoneMat[32*3];\n#endif\nuniform mat4 okUni_TransMat[4];void main(void){\n#ifdef OK_SKANIMATION\nmat4 a=mat4(0.0);{int c=int(okAttr_BoneIdx[0])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[0]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[1])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[1]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[2])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[2]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[3])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[3]*mat4(d,e,f,g);}\n#endif\n#ifdef OK_ALPHA_TEST\n#ifdef OK_NORMAL\nokVary_Normal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Normal,0.0)).xyz;\n#endif\n#ifdef OK_VERTEX_COLOR\nokVary_Color=okAttr_Color;\n#endif\n#ifdef OK_TC12\nokVary_TC12=okAttr_TC12;\n#else\n#ifdef OK_TC1\nokVary_TC1=okAttr_TC1;\n#endif\n#ifdef OK_TC2\nokVary_TC2=okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nokVary_TC34=okAttr_TC34;\n#else\n#ifdef OK_TC3\nokVary_TC3=okAttr_TC3;\n#endif\n#ifdef OK_TC4\nokVary_TC4=okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nokVary_Tangent=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Tangent,0.0)).xyz;\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Binormal,0.0)).xyz;;\n#endif\n#endif\nvec4 b=\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[0]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Pos,1.0);\n#ifdef OK_ALPHA_TEST\nokVary_Pos=b.xyz/b.w;\n#endif\ngl_Position=okUni_TransMat[2]*b;}";
    this.aFragmentSourceMap.Glow = "#ifdef OK_ALPHA_TEST\nvarying vec3 okVary_Pos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\n#endif\nuniform vec4 okUni_General[43];\n#ifdef OK_ALPHA_TEST\nuniform sampler2D okUni_Sampler2D[7];uniform samplerCube okUni_SamplerCube[4];vec3 okGlb_P;vec3 okGlb_N;vec3 okGlb_V;vec3 okGlb_R;\n#define P okGlb_P\n#define CP okUni_General[7].xyz\n#define N okGlb_N\n#define V okGlb_V\n#define R okGlb_R\n#define T okUni_General[4].w\n#define RAND okUni_General[5].w\n#define EMI okUni_General[0].xyz\n#define AMB okUni_General[1].xyz\n#define DIF okUni_General[2].xyz\n#define SPE okUni_General[3].xyz\n#define GLO okUni_General[0].w\n#define ALPHA okUni_General[2].w\n#define GROUND okUni_General[4].xyz\n#define SKY okUni_General[5].xyz\n#ifdef OK_VERTEX_COLOR\n#define VC okVary_Color\n#else\n#define VC vec3(0.0)\n#endif\n#ifdef OK_TC12\n#define TC1 okVary_TC12.xy\n#define TC2 okVary_TC12.zw\n#else\n#ifdef OK_TC1\n#define TC1 okVary_TC1\n#endif\n#ifdef OK_TC2\n#define TC2 okVary_TC2\n#endif\n#endif\n#ifdef OK_TC34\n#define TC3 okVary_TC34.xy\n#define TC4 okVary_TC34.zw\n#else\n#ifdef OK_TC3\n#define TC3 okVary_TC3\n#endif\n#ifdef OK_TC4\n#define TC4 okVary_TC4\n#endif\n#endif\nvec2 okRotTC(vec2 d,float e){float a=cos(e);float b=sin(e);mat2 c=mat2(a,b,-b,a);return(c*(d-0.5))+0.5;}float okFunc_GetMaterialAlpha(){\n#ifdef OK_SCRIPT_ALPHA_CODE\nOK_SCRIPT_ALPHA_CODE\n#else\n#ifdef OK_TEX_OPACITY\nreturn texture2D(okUni_Sampler2D[5],OK_OPACITY_TC).a;\n#else\nreturn okUni_General[2].a;\n#endif\n#endif\n}\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 okFunc_GetNormalScript(){OK_SCRIPT_NORMAL_CODE}\n#endif\nvec3 okFunc_GetMaterialNormal(){\n#ifdef OK_NORMAL\nvec3 vertexNormal=okVary_Normal;\n#else\nvec3 vertexNormal=vec3(0.0,1.0,0.0);\n#endif\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 normalT=okFunc_GetNormalScript();mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);return normalize(matTangent*normalT);\n#else\n#ifdef OK_TEX_NORMALMAP\nvec3 normalT=texture2D(okUni_Sampler2D[4],OK_NORMALMAP_TC).xyz;normalT=normalT*2.0-1.0;mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);return normalize(matTangent*normalT);\n#else\nreturn normalize(vertexNormal);\n#endif\n#endif\n}\n#endif\nvoid main(void){\n#ifdef OK_ALPHA_TEST\nP=okVary_Pos;vec3 normal=okFunc_GetMaterialNormal();N=normal;vec3 camVec=normalize(okUni_General[7].xyz-okVary_Pos);V=-camVec;vec3 reflectVec=normalize(reflect(-camVec,normal));R=reflectVec;if(okFunc_GetMaterialAlpha()<=okUni_General[3].w)discard;\n#endif\ngl_FragColor=vec4(okUni_General[42].xyz,1.0);}";
    this.aVertexSourceMap.GlowDefault = "attribute vec3 okAttr_Pos;uniform mat4 okUni_TransMat[3];void main(void){gl_Position=okUni_TransMat[2]*(okUni_TransMat[0]*vec4(okAttr_Pos,1.0));}";
    this.aFragmentSourceMap.GlowDefault = "void main(void){gl_FragColor=vec4(0.0,0.0,0.0,0.0);}";
    this.aVertexSourceMap.Lighting = "varying vec3 okVary_Pos;varying vec4 okVary_ScrPos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\nattribute vec3 okAttr_Pos;\n#ifdef OK_NORMAL\nattribute vec3 okAttr_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nattribute vec3 okAttr_Color;\n#endif\n#ifdef OK_TC12\nattribute vec4 okAttr_TC12;\n#else\n#ifdef OK_TC1\nattribute vec2 okAttr_TC1;\n#endif\n#ifdef OK_TC2\nattribute vec2 okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nattribute vec4 okAttr_TC34;\n#else\n#ifdef OK_TC3\nattribute vec2 okAttr_TC3;\n#endif\n#ifdef OK_TC4\nattribute vec2 okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nattribute vec3 okAttr_Tangent;\n#endif\n#ifdef OK_BINORMAL\nattribute vec3 okAttr_Binormal;\n#endif\n#ifdef OK_SKANIMATION\nattribute vec4 okAttr_BoneIdx;attribute vec4 okAttr_BoneWeight;uniform vec4 okUni_BoneMat[32*3];\n#endif\nuniform mat4 okUni_TransMat[4];void main(void){\n#ifdef OK_SKANIMATION\nmat4 a=mat4(0.0);{int c=int(okAttr_BoneIdx[0])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[0]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[1])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[1]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[2])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[2]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[3])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[3]*mat4(d,e,f,g);}\n#endif\n#ifdef OK_NORMAL\nokVary_Normal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Normal,0.0)).xyz;\n#endif\n#ifdef OK_VERTEX_COLOR\nokVary_Color=okAttr_Color;\n#endif\n#ifdef OK_TC12\nokVary_TC12=okAttr_TC12;\n#else\n#ifdef OK_TC1\nokVary_TC1=okAttr_TC1;\n#endif\n#ifdef OK_TC2\nokVary_TC2=okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nokVary_TC34=okAttr_TC34;\n#else\n#ifdef OK_TC3\nokVary_TC3=okAttr_TC3;\n#endif\n#ifdef OK_TC4\nokVary_TC4=okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nokVary_Tangent=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Tangent,0.0)).xyz;\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Binormal,0.0)).xyz;\n#endif\nvec4 b=\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[0]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Pos,1.0);okVary_Pos=b.xyz/b.w;gl_Position=okUni_TransMat[2]*b;okVary_ScrPos=gl_Position;}";
    this.aFragmentSourceMap.Lighting = "varying vec3 okVary_Pos;varying vec4 okVary_ScrPos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\nuniform vec4 okUni_General[43];\n#ifdef OK_DYNAMICSHADOW\nuniform sampler2D okUni_shadowSampler;\n#endif\nuniform sampler2D okUni_Sampler2D[7];uniform samplerCube okUni_SamplerCube[4];vec3 okGlb_P;vec3 okGlb_N;vec3 okGlb_V;vec3 okGlb_R;\n#define P okGlb_P\n#define CP okUni_General[7].xyz\n#define N okGlb_N\n#define V okGlb_V\n#define R okGlb_R\n#define T okUni_General[4].w\n#define RAND okUni_General[5].w\n#define EMI okUni_General[0].xyz\n#define AMB okUni_General[1].xyz\n#define DIF okUni_General[2].xyz\n#define SPE okUni_General[3].xyz\n#define GLO okUni_General[0].w\n#define ALPHA okUni_General[2].w\n#define GROUND okUni_General[4].xyz\n#define SKY okUni_General[5].xyz\n#ifdef OK_VERTEX_COLOR\n#define VC okVary_Color\n#else\n#define VC vec3(0.0)\n#endif\n#ifdef OK_TC12\n#define TC1 okVary_TC12.xy\n#define TC2 okVary_TC12.zw\n#else\n#ifdef OK_TC1\n#define TC1 okVary_TC1\n#endif\n#ifdef OK_TC2\n#define TC2 okVary_TC2\n#endif\n#endif\n#ifdef OK_TC34\n#define TC3 okVary_TC34.xy\n#define TC4 okVary_TC34.zw\n#else\n#ifdef OK_TC3\n#define TC3 okVary_TC3\n#endif\n#ifdef OK_TC4\n#define TC4 okVary_TC4\n#endif\n#endif\nvec2 okRotTC(vec2 d,float e){float a=cos(e);float b=sin(e);mat2 c=mat2(a,b,-b,a);return(c*(d-0.5))+0.5;}vec4 okFunc_FetchTexture(sampler2D f,vec2 g){return texture2D(f,g);}vec4 okFunc_FetchTexture(sampler2D f,vec2 g,float k,float l,float m){m=floor(m);vec2 h=1.0/vec2(k,l);float i=floor(m/k);float j=m-k*i;return texture2D(f,vec2(j,i)*h+g/vec2(k,l));}vec4 okFunc_FetchTexture(samplerCube f,vec3 n){return textureCube(f,n);}vec3 okFunc_GetMaterialEmissive(){\n#ifdef OK_SCRIPT_EMISSIVE_CODE\n{OK_SCRIPT_EMISSIVE_CODE}\n#else\nreturn okUni_General[0].xyz;\n#endif\n}vec3 okFunc_GetMaterialDiffuse(){\n#ifdef OK_SCRIPT_DIFFUSE_CODE\n{OK_SCRIPT_DIFFUSE_CODE}\n#else\n#ifdef OK_TEX_ALBEDO1||OK_TEX_ALBEDO2||OK_TEX_ALBEDO3||OK_TEX_ALBEDO4\nvec3 albedo=vec3(1,1,1);\n#ifdef OK_TEX_ALBEDO1\n#ifdef OK_TEX_ALBEDO1_CUBE\nalbedo=textureCube(okUni_SamplerCube[0],R).xyz;\n#else\nalbedo=texture2D(okUni_Sampler2D[0],OK_ALBEDO1_TC).xyz;\n#endif\n#endif\n#ifdef OK_TEX_ALBEDO2\n#ifdef OK_TEX_ALBEDO2_CUBE\nvec4 albedo2=textureCube(okUni_SamplerCube[1],R);\n#else\nvec4 albedo2=texture2D(okUni_Sampler2D[1],OK_ALBEDO2_TC);\n#endif\nalbedo=mix(albedo.xyz,albedo2.xyz,albedo2.a);\n#endif\n#ifdef OK_TEX_ALBEDO3\n#ifdef OK_TEX_ALBEDO3_CUBE\nvec4 albedo3=textureCube(okUni_SamplerCube[2],R);\n#else\nvec4 albedo3=texture2D(okUni_Sampler2D[2],OK_ALBEDO3_TC);\n#endif\nalbedo=mix(albedo.xyz,albedo3.xyz,albedo3.a);\n#endif\n#ifdef OK_TEX_ALBEDO4\n#ifdef OK_TEX_ALBEDO4_CUBE\nvec4 albedo4=textureCube(okUni_SamplerCube[3],R);\n#else\nvec4 albedo4=texture2D(okUni_Sampler2D[3],OK_ALBEDO4_TC);\n#endif\nalbedo=mix(albedo.xyz,albedo4.xyz,albedo4.a);\n#endif\nreturn albedo;\n#else\nreturn okUni_General[2].xyz;\n#endif\n#endif\n}float okFunc_GetMaterialDiffusePower(){\n#ifdef OK_SCRIPT_DIFFUSEPOWER_CODE\n{OK_SCRIPT_DIFFUSEPOWER_CODE}\n#else\nreturn 1.0;\n#endif\n}vec3 okFunc_GetMaterialSpecular(){\n#ifdef OK_SCRIPT_SPECULAR_CODE\n{OK_SCRIPT_SPECULAR_CODE}\n#else\n#ifdef OK_TEX_SPECULAR_LEVEL\nreturn texture2D(okUni_Sampler2D[6],OK_SPECULAR_LEVEL_TC).xyz*okUni_General[3].xyz;\n#else\nreturn vec3(okUni_General[1].w)*okUni_General[3].xyz;\n#endif\n#endif\n}float okFunc_GetMaterialSpecularPower(){\n#ifdef OK_SCRIPT_SPECULARPOWER_CODE\n{OK_SCRIPT_SPECULARPOWER_CODE}\n#else\nreturn okUni_General[0].w;\n#endif\n}float okFunc_GetMaterialAlpha(){\n#ifdef OK_SCRIPT_ALPHA_CODE\n{OK_SCRIPT_ALPHA_CODE}\n#else\n#ifdef OK_TEX_OPACITY\nreturn texture2D(okUni_Sampler2D[5],OK_OPACITY_TC).a;\n#else\nreturn okUni_General[2].a;\n#endif\n#endif\n}\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 okFunc_GetNormalScript(){OK_SCRIPT_NORMAL_CODE}\n#endif\nvec3 okFunc_GetMaterialNormal(){\n#ifdef OK_NORMAL\nvec3 vertexNormal=okVary_Normal;\n#else\nvec3 vertexNormal=vec3(0.0,1.0,0.0);\n#endif\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 normalT=okFunc_GetNormalScript();mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);vec3 retNormal=normalize(matTangent*normalT);\n#else\n#ifdef OK_TEX_NORMALMAP\nvec3 normalT=texture2D(okUni_Sampler2D[4],OK_NORMALMAP_TC).xyz;normalT=normalT*2.0-1.0;mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);vec3 retNormal=normalize(matTangent*normalT);\n#else\nvec3 retNormal=normalize(vertexNormal);\n#endif\n#endif\n#ifdef OK_TWO_SIDE\nreturn retNormal*(gl_FrontFacing?1.0:-1.0);\n#else\nreturn retNormal;\n#endif\n}void okFunc_GetMaterialDctLighting(vec3 LDIR,vec3 LCOLOR,inout vec3 LDIFFUSE,inout vec3 LSPECULAR){\n#ifdef OK_SCRIPT_DCTLIGHT_CODE\n{OK_SCRIPT_DCTLIGHT_CODE}\n#endif\n}void okFunc_GetMaterialPointLighting(vec3 LPOS,vec3 LCOLOR,vec3 LRANGE,inout vec3 LDIFFUSE,inout vec3 LSPECULAR){\n#ifdef OK_SCRIPT_POINTLIGHT_CODE\n{OK_SCRIPT_POINTLIGHT_CODE}\n#endif\n}void okFunc_GetMaterialSpotLighting(vec3 LPOS,vec3 LCOLOR,vec3 LDIR,float LINCONE,float LOUTCONE,inout vec3 LDIFFUSE,inout vec3 LSPECULAR){\n#ifdef OK_SCRIPT_SPOTLIGHT_CODE\n{OK_SCRIPT_SPOTLIGHT_CODE}\n#endif\n}void okFunc_DctLighting(vec3 normal,vec3 camVec,vec3 reflectVec,vec3 lightDir,vec3 lightColor\n#ifdef OK_DYNAMICSHADOW\n,vec4 shadowMask,vec4 shadowFactor\n#endif\n,inout vec3 diffuse,inout vec3 specular){vec3 curDiffuse=vec3(0.0),curSpecular=vec3(0.0);\n#ifdef OK_SCRIPT_DCTLIGHT_CODE\nokFunc_GetMaterialDctLighting(lightDir,lightColor,curDiffuse,curSpecular);\n#else\nvec3 lightVec=-lightDir;float diffuseFactor=max(0.0,dot(lightVec,normal));\n#ifdef OK_SCRIPT_DIFFUSEPOWER_CODE\ndiffuseFactor=pow(diffuseFactor,okFunc_GetMaterialDiffusePower());\n#endif\ncurDiffuse=diffuseFactor*lightColor;float specularFactor=pow(clamp(dot(reflectVec,lightVec),0.0,1.0),okFunc_GetMaterialSpecularPower());curSpecular=specularFactor*lightColor;\n#endif\n#ifdef OK_DYNAMICSHADOW\nvec3 shadow=mix(vec3(1)-lightColor,vec3(1),dot(shadowMask,shadowFactor));curDiffuse*=shadow;curSpecular*=shadow;\n#endif\ndiffuse+=curDiffuse;specular+=curSpecular;}void okFunc_PointLighting(vec3 pos,vec3 normal,vec3 camVec,vec3 reflectVec,vec3 lightPos,float lightRange,vec3 lightColor\n#ifdef OK_DYNAMICSHADOW\n,vec4 shadowMask,vec4 shadowFactor\n#endif\n,inout vec3 diffuse,inout vec3 specular){vec3 curDiffuse=vec3(0.0),curSpecular=vec3(0.0);\n#ifdef OK_SCRIPT_POINTLIGHT_CODE\nokFunc_GetMaterialPointLighting(lightPos,lightColor,lightRange,curDiffuse,curSpecular);\n#else\nvec3 lightVec=normalize(lightPos-pos);float lenFactor=max(0.0,1.0-distance(lightPos,pos)/lightRange);float diffuseFactor=max(0.0,dot(lightVec,normal))*lenFactor;\n#ifdef OK_SCRIPT_DIFFUSEPOWER_CODE\ndiffuseFactor=pow(diffuseFactor,okFunc_GetMaterialDiffusePower());\n#endif\ncurDiffuse=diffuseFactor*lightColor;float specularFactor=pow(clamp(dot(reflectVec,lightVec),0.0,1.0),okFunc_GetMaterialSpecularPower());curSpecular=specularFactor*lightColor;\n#endif\n#ifdef OK_DYNAMICSHADOW\nvec3 shadow=mix(vec3(1)-lightColor,vec3(1),dot(shadowMask,shadowFactor));curDiffuse*=shadow;curSpecular*=shadow;\n#endif\ndiffuse+=curDiffuse;specular+=curSpecular;}void okFunc_SpotLighting(vec3 pos,vec3 normal,vec3 camVec,vec3 reflectVec,vec3 lightPos,vec3 lightDir,float innerCone,float outerCone,vec3 lightColor\n#ifdef OK_DYNAMICSHADOW\n,vec4 shadowMask,vec4 shadowFactor\n#endif\n,inout vec3 diffuse,inout vec3 specular){vec3 curDiffuse=vec3(0.0),curSpecular=vec3(0.0);\n#ifdef OK_SCRIPT_SPOTLIGHT_CODE\nokFunc_GetMaterialSpotLighting(lightPos,lightColor,lightDir,innerCone,outerCone,curDiffuse,curSpecular);\n#else\nvec3 lightVec=normalize(lightPos-pos);float spotAngl=dot(lightVec,-lightDir);float innerAngl=cos(innerCone*0.5);float outerAngl=cos(outerCone*0.5);float diffuseFactor=clamp((spotAngl-outerAngl)/(innerAngl-outerAngl),0.0,1.0)*max(0.0,dot(lightVec,normal));\n#ifdef OK_SCRIPT_DIFFUSEPOWER_CODE\ndiffuseFactor=pow(diffuseFactor,okFunc_GetMaterialDiffusePower());\n#endif\ncurDiffuse=diffuseFactor*lightColor;float specularFactor=pow(clamp(dot(reflectVec,lightVec),0.0,1.0),okFunc_GetMaterialSpecularPower());curSpecular=specularFactor*lightColor;\n#endif\n#ifdef OK_DYNAMICSHADOW\nvec3 shadow=mix(vec3(1)-lightColor,vec3(1),dot(shadowMask,shadowFactor));curDiffuse*=shadow;curSpecular*=shadow;\n#endif\ndiffuse+=curDiffuse;specular+=curSpecular;}void main(void){P=okVary_Pos;vec3 normal=okFunc_GetMaterialNormal();N=normal;vec3 camVec=normalize(okUni_General[7].xyz-P);V=-camVec;vec3 reflectVec=normalize(reflect(-camVec,normal));R=reflectVec;vec2 screenCoord=okUni_General[6].xy+(okVary_ScrPos.xy/okVary_ScrPos.w+1.0)*0.5*okUni_General[6].zw;\n#ifdef OK_ALPHA_TEST\nif(okFunc_GetMaterialAlpha()<=okUni_General[3].w)discard;\n#endif\n#ifdef OK_DYNAMICLIGHTING\nvec3 emissive=okFunc_GetMaterialEmissive();vec3 ambient=mix(okUni_General[4].xyz,okUni_General[5].xyz,(normal.y+1.0)*0.5);ambient*=(okUni_General[1].xyz+okUni_General[3].xyz*pow(clamp(dot(camVec,reflectVec),0.0,1.0),8.0)*okFunc_GetMaterialSpecular());vec3 diffuse=vec3(0.0);vec3 specular=vec3(0.0);vec3 customlighting=vec3(0.0);\n#ifdef OK_DYNAMICSHADOW\nvec4 shadowFactor=vec4(texture2D(okUni_shadowSampler,screenCoord).xyz,1.0);\n#endif\n#endif\n#ifdef OK_DYNAMICLIGHTING\n#if OK_DCTLIGHT_NUM>=1\nokFunc_DctLighting(normal,camVec,reflectVec,okUni_General[8].xyz,fract(okUni_General[8].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[12],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_DCTLIGHT_NUM>=2\nokFunc_DctLighting(normal,camVec,reflectVec,okUni_General[9].xyz,fract(okUni_General[9].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[13],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_DCTLIGHT_NUM>=3\nokFunc_DctLighting(normal,camVec,reflectVec,okUni_General[10].xyz,fract(okUni_General[10].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[14],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_DCTLIGHT_NUM>=4\nokFunc_DctLighting(normal,camVec,reflectVec,okUni_General[11].xyz,fract(okUni_General[11].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[15],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_POINTLIGHT_NUM>=1\nokFunc_PointLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[16].xyz,okUni_General[16].w,fract(okUni_General[24].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[20],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_POINTLIGHT_NUM>=2\nokFunc_PointLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[17].xyz,okUni_General[17].w,fract(okUni_General[25].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[21],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_POINTLIGHT_NUM>=3\nokFunc_PointLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[18].xyz,okUni_General[18].w,fract(okUni_General[26].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[22],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_POINTLIGHT_NUM>=4\nokFunc_PointLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[19].xyz,okUni_General[19].w,fract(okUni_General[27].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[23],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_SPOTLIGHT_NUM>=1\nokFunc_SpotLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[24].xyz,okUni_General[28].xyz,okUni_General[32].x,okUni_General[32].y,fract(okUni_General[28].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[36],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_SPOTLIGHT_NUM>=2\nokFunc_SpotLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[25].xyz,okUni_General[29].xyz,okUni_General[33].x,okUni_General[33].y,fract(okUni_General[29].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[37],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_SPOTLIGHT_NUM>=3\nokFunc_SpotLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[26].xyz,okUni_General[30].xyz,okUni_General[34].x,okUni_General[34].y,fract(okUni_General[30].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[38],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#if OK_SPOTLIGHT_NUM>=4\nokFunc_SpotLighting(okVary_Pos,normal,camVec,reflectVec,okUni_General[27].xyz,okUni_General[31].xyz,okUni_General[35].x,okUni_General[35].y,fract(okUni_General[31].w*vec3(1.0,256.0,65536.0))\n#ifdef OK_DYNAMICSHADOW\n,okUni_General[39],shadowFactor\n#endif\n,diffuse,specular);\n#endif\n#endif\n#ifdef OK_DYNAMICLIGHTING\nvec3 lightingColor=emissive+(ambient+diffuse)*okFunc_GetMaterialDiffuse()+specular*okFunc_GetMaterialSpecular();\n#else\nvec3 lightingColor=okFunc_GetMaterialEmissive()+(okUni_General[1].xyz+okUni_General[2].xyz)*okFunc_GetMaterialDiffuse();\n#endif\n#ifdef OK_AUTO_VERTEX_COLOR\nlightingColor+=VC;\n#endif\n#ifdef OK_FOG\n{float d=distance(okVary_Pos,okUni_General[7].xyz);float fog=clamp(1.0-1.0/exp(clamp((d-okUni_General[41].x)*okUni_General[41].y,0.0,1.0)*okUni_General[40].w),0.0,1.0);fog=smoothstep(0.0,0.95,fog);lightingColor=mix(lightingColor,okUni_General[40].xyz,fog);}\n#endif\ngl_FragColor=vec4(lightingColor,\n#ifdef OK_BLEND||OK_ALPHA_TEST\nokFunc_GetMaterialAlpha()\n#else\n1.0\n#endif\n);}";
    this.aVertexSourceMap.LightingDefault = "attribute vec3 okAttr_Pos;uniform mat4 okUni_TransMat[3];void main(void){gl_Position=okUni_TransMat[2]*(okUni_TransMat[0]*vec4(okAttr_Pos,1.0));}";
    this.aFragmentSourceMap.LightingDefault = "void main(void){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}";
    this.aVertexSourceMap.Output = "varying vec2 okVary_ScrTC;attribute vec3 okAttr_Pos;void main(void){gl_Position=vec4(okAttr_Pos,1.0);okVary_ScrTC=(okAttr_Pos.xy+1.0)*0.5;}";
    this.aFragmentSourceMap.Output = "varying vec2 okVary_ScrTC;uniform sampler2D okUni_Tex;void main(void){vec4 a=texture2D(okUni_Tex,okVary_ScrTC);gl_FragColor=a;}";
    this.aVertexSourceMap.ShadowDepth = "varying float okVary_Depth;\n#ifdef OK_ALPHA_TEST\nvarying vec3 okVary_Pos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\n#endif\nattribute vec3 okAttr_Pos;\n#ifdef OK_ALPHA_TEST\n#ifdef OK_NORMAL\nattribute vec3 okAttr_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nattribute vec3 okAttr_Color;\n#endif\n#ifdef OK_TC12\nattribute vec4 okAttr_TC12;\n#else\n#ifdef OK_TC1\nattribute vec2 okAttr_TC1;\n#endif\n#ifdef OK_TC2\nattribute vec2 okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nattribute vec4 okAttr_TC34;\n#else\n#ifdef OK_TC3\nattribute vec2 okAttr_TC3;\n#endif\n#ifdef OK_TC4\nattribute vec2 okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nattribute vec3 okAttr_Tangent;\n#endif\n#ifdef OK_BINORMAL\nattribute vec3 okAttr_Binormal;\n#endif\n#endif\n#ifdef OK_SKANIMATION\nattribute vec4 okAttr_BoneIdx;attribute vec4 okAttr_BoneWeight;uniform vec4 okUni_BoneMat[32*3];\n#endif\nuniform mat4 okUni_TransMat[3];void main(void){\n#ifdef OK_SKANIMATION\nmat4 a=mat4(0.0);{int c=int(okAttr_BoneIdx[0])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[0]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[1])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[1]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[2])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[2]*mat4(d,e,f,g);}{int c=int(okAttr_BoneIdx[3])+1;vec4 d=vec4(okUni_BoneMat[c*3].x,okUni_BoneMat[c*3+1].x,okUni_BoneMat[c*3+2].x,0.0);vec4 e=vec4(okUni_BoneMat[c*3].y,okUni_BoneMat[c*3+1].y,okUni_BoneMat[c*3+2].y,0.0);vec4 f=vec4(okUni_BoneMat[c*3].z,okUni_BoneMat[c*3+1].z,okUni_BoneMat[c*3+2].z,0.0);vec4 g=vec4(okUni_BoneMat[c*3].w,okUni_BoneMat[c*3+1].w,okUni_BoneMat[c*3+2].w,1.0);a+=okAttr_BoneWeight[3]*mat4(d,e,f,g);}\n#endif\n#ifdef OK_ALPHA_TEST\n#ifdef OK_NORMAL\nokVary_Normal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Normal,0.0)).xyz;\n#endif\n#ifdef OK_VERTEX_COLOR\nokVary_Color=okAttr_Color;\n#endif\n#ifdef OK_TC12\nokVary_TC12=okAttr_TC12;\n#else\n#ifdef OK_TC1\nokVary_TC1=okAttr_TC1;\n#endif\n#ifdef OK_TC2\nokVary_TC2=okAttr_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nokVary_TC34=okAttr_TC34;\n#else\n#ifdef OK_TC3\nokVary_TC3=okAttr_TC3;\n#endif\n#ifdef OK_TC4\nokVary_TC4=okAttr_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nokVary_Tangent=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Tangent,0.0)).xyz;\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal=(\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nokUni_TransMat[1]*\n#ifdef OK_SKANIMATION\na*\n#endif\nvec4(okAttr_Binormal,0.0)).xyz;;\n#endif\n#endif\nvec4 b=okUni_TransMat[0]*\n#ifdef OK_SKANIMATION\na*\n#endif\n#ifdef OK_BILLBOARD\nokUni_TransMat[3]*\n#endif\nvec4(okAttr_Pos,1.0);\n#ifdef OK_ALPHA_TEST\nokVary_Pos=b.xyz/b.w;\n#endif\ngl_Position=okUni_TransMat[2]*b;okVary_Depth=gl_Position.z;}";
    this.aFragmentSourceMap.ShadowDepth = "varying float okVary_Depth;\n#ifdef OK_ALPHA_TEST\nvarying vec3 okVary_Pos;\n#ifdef OK_NORMAL\nvarying vec3 okVary_Normal;\n#endif\n#ifdef OK_VERTEX_COLOR\nvarying vec3 okVary_Color;\n#endif\n#ifdef OK_TC12\nvarying vec4 okVary_TC12;\n#else\n#ifdef OK_TC1\nvarying vec2 okVary_TC1;\n#endif\n#ifdef OK_TC2\nvarying vec2 okVary_TC2;\n#endif\n#endif\n#ifdef OK_TC34\nvarying vec4 okVary_TC34;\n#else\n#ifdef OK_TC3\nvarying vec2 okVary_TC3;\n#endif\n#ifdef OK_TC4\nvarying vec2 okVary_TC4;\n#endif\n#endif\n#ifdef OK_TANGENT\nvarying vec3 okVary_Tangent;\n#endif\n#ifdef OK_BINORMAL\nvarying vec3 okVary_Binormal;\n#endif\n#endif\n#ifdef OK_ALPHA_TEST\nuniform vec4 okUni_General[8];uniform sampler2D okUni_Sampler2D[7];uniform samplerCube okUni_SamplerCube[4];vec3 okGlb_P;vec3 okGlb_N;vec3 okGlb_V;vec3 okGlb_R;\n#define P okGlb_P\n#define CP okUni_General[7].xyz\n#define N okGlb_N\n#define V okGlb_V\n#define R okGlb_R\n#define T okUni_General[4].w\n#define RAND okUni_General[5].w\n#define EMI okUni_General[0].xyz\n#define AMB okUni_General[1].xyz\n#define DIF okUni_General[2].xyz\n#define SPE okUni_General[3].xyz\n#define GLO okUni_General[0].w\n#define ALPHA okUni_General[2].w\n#define GROUND okUni_General[4].xyz\n#define SKY okUni_General[5].xyz\n#ifdef OK_VERTEX_COLOR\n#define VC okVary_Color\n#else\n#define VC vec3(0.0)\n#endif\n#ifdef OK_TC12\n#define TC1 okVary_TC12.xy\n#define TC2 okVary_TC12.zw\n#else\n#ifdef OK_TC1\n#define TC1 okVary_TC1\n#endif\n#ifdef OK_TC2\n#define TC2 okVary_TC2\n#endif\n#endif\n#ifdef OK_TC34\n#define TC3 okVary_TC34.xy\n#define TC4 okVary_TC34.zw\n#else\n#ifdef OK_TC3\n#define TC3 okVary_TC3\n#endif\n#ifdef OK_TC4\n#define TC4 okVary_TC4\n#endif\n#endif\nvec2 okRotTC(vec2 d,float e){float a=cos(e);float b=sin(e);mat2 c=mat2(a,b,-b,a);return(c*(d-0.5))+0.5;}float okFunc_GetMaterialAlpha(){\n#ifdef OK_SCRIPT_ALPHA_CODE\nOK_SCRIPT_ALPHA_CODE\n#else\n#ifdef OK_TEX_OPACITY\nreturn texture2D(okUni_Sampler2D[5],OK_OPACITY_TC).a;\n#else\nreturn okUni_General[2].a;\n#endif\n#endif\n}\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 okFunc_GetNormalScript(){OK_SCRIPT_NORMAL_CODE}\n#endif\nvec3 okFunc_GetMaterialNormal(){\n#ifdef OK_NORMAL\nvec3 vertexNormal=okVary_Normal;\n#else\nvec3 vertexNormal=vec3(0.0,1.0,0.0);\n#endif\n#ifdef OK_SCRIPT_NORMAL_CODE\nvec3 normalT=okFunc_GetNormalScript();mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);return normalize(matTangent*normalT);\n#else\n#ifdef OK_TEX_NORMALMAP\nvec3 normalT=texture2D(okUni_Sampler2D[4],OK_NORMALMAP_TC).xyz;normalT=normalT*2.0-1.0;mat3 matTangent=mat3(\n#ifdef OK_TANGENT\nokVary_Tangent,\n#else\nvec3(1.0,0.0,0.0),\n#endif\n#ifdef OK_BINORMAL\nokVary_Binormal,\n#else\nvec3(0.0,1.0,0.0),\n#endif\nvertexNormal);return normalize(matTangent*normalT);\n#else\nreturn normalize(vertexNormal);\n#endif\n#endif\n}\n#endif\nvec4 encodeFloat(float f){vec4 bitSh=vec4(256*256*256,256*256,256,1);vec4 bitMsk=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);vec4 comp=fract(f*bitSh);comp-=comp.xxyz*bitMsk;return comp;}void main(void){\n#ifdef OK_ALPHA_TEST\nP=okVary_Pos;vec3 normal=okFunc_GetMaterialNormal();N=normal;vec3 camVec=normalize(okUni_General[7].xyz-okVary_Pos);V=-camVec;vec3 reflectVec=normalize(reflect(-camVec,normal));R=reflectVec;if(okFunc_GetMaterialAlpha()<=okUni_General[3].w)discard;\n#endif\ngl_FragColor=encodeFloat(okVary_Depth);}";
    this.aVertexSourceMap.ShadowDepthDefault = "varying float okVary_Depth;attribute vec3 okAttr_Pos;uniform mat4 okUni_TransMat[3];void main(void){gl_Position=okUni_TransMat[2]*(okUni_TransMat[0]*vec4(okAttr_Pos,1.0));okVary_Depth=gl_Position.z;}";
    this.aFragmentSourceMap.ShadowDepthDefault = "varying float okVary_Depth;vec4 e(float d){vec4 a=vec4(256*256*256,256*256,256,1);vec4 b=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);vec4 c=fract(d*a);c-=c.xxyz*b;return c;}void main(void){gl_FragColor=e(okVary_Depth);}";
    this.aVertexSourceMap.ShadowFinal = "varying vec4 screenPos;uniform mat4 matArray[3];attribute vec4 vertMask0;attribute vec4 vertMask1;uniform vec3 vertList[8];void main(void){vec3 a=vertList[0]*vertMask0.x;a+=vertList[1]*vertMask0.y;a+=vertList[2]*vertMask0.z;a+=vertList[3]*vertMask0.w;a+=vertList[4]*vertMask1.x;a+=vertList[5]*vertMask1.y;a+=vertList[6]*vertMask1.z;a+=vertList[7]*vertMask1.w;gl_Position=matArray[0]*vec4(a,1);screenPos=gl_Position;}";
    this.aFragmentSourceMap.ShadowFinal = "varying vec4 screenPos;uniform mat4 matArray[3];uniform vec4 screenPosOffsetAndScale;uniform vec3 shadowPixelSizeAndOffset;uniform sampler2D samplerArray[2];vec4 a=vec4(1.0/(256.0*256.0*256.0),1.0/(256.0*256.0),1.0/256.0,1.0);float m(vec4 f){vec4 h=vec4(min(1.0,f.z-shadowPixelSizeAndOffset.z));vec2 i=f.xy/f.w;float j=dot(a,texture2D(samplerArray[1],i));vec4 k=vec4(dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(-1,-1))),dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(0,-1))),dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(1,-1))),dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(-1,0))));vec4 l=vec4(dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(1,0))),dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(-1,1))),dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(0,1))),dot(a,texture2D(samplerArray[1],i+shadowPixelSizeAndOffset.xy*vec2(1,1))));return(dot(sign(k-h),vec4(1.0))+dot(sign(l-h),vec4(1.0))+j)*0.111111;}void main(void){vec2 b=screenPos.xy/screenPos.w;vec2 c=screenPosOffsetAndScale.xy+(b+1.0)*0.5*screenPosOffsetAndScale.zw;float d=dot(a,texture2D(samplerArray[0],c));vec4 e=matArray[1]*vec4(b,d*2.0-1.0,1.0);e/=e.w;vec4 f=matArray[2]*e;float g=m(f);gl_FragColor=vec4(vec3(g),1.0);}";
    this.aVertexSourceMap.ShadowVolume = "attribute vec4 vertMask0;attribute vec4 vertMask1;uniform vec3 vertList[8];uniform mat4 matViewProj;void main(void){vec3 a=vertList[0]*vertMask0.x;a+=vertList[1]*vertMask0.y;a+=vertList[2]*vertMask0.z;a+=vertList[3]*vertMask0.w;a+=vertList[4]*vertMask1.x;a+=vertList[5]*vertMask1.y;a+=vertList[6]*vertMask1.z;a+=vertList[7]*vertMask1.w;gl_Position=matViewProj*vec4(a,1);}";
    this.aFragmentSourceMap.ShadowVolume = "void main(void){gl_FragColor=vec4(1,0,0,1);}"
}

okShaderManager.prototype = {
    clear: function () {
        this.sFloatPrecision = "mediump";
        for (var d in this.aVertexShaderMap) {
            this.aVertexShaderMap[d].releaseShader();
            this.aVertexShaderMap[d].releaseSource()
        }
        okAllocator._object(this.aVertexShaderMap);
        this.aVertexShaderMap = okAllocator.object();
        for (var a in this.aFragmentShaderMap) {
            this.aFragmentShaderMap[a].releaseShader();
            this.aFragmentShaderMap[a].releaseSource()
        }
        okAllocator._object(this.aFragmentShaderMap);
        this.aFragmentShaderMap = okAllocator.object();
        for (var c in this.aProgramMap) {
            this.aProgramMap[c].releaseProgram()
        }
        okAllocator._object(this.aProgramMap);
        this.aProgramMap = okAllocator.object()
    }, setShaderSourcePath: function (a) {
        this.sShaderSourcePath = a
    }, getProgram: function (a, d, c) {
        switch (a) {
            case"Lighting":
                return this.getLightingProgram(d, c);
            case"Depth":
                return this.getDepthProgram(d, c);
            case"Glow":
                return this.getGlowProgram(d, c);
            case"ShadowDepth":
                return this.getShadowDepthProgram(d, c);
            case"ShadowVolume":
                return this.getShadowVolumeProgram();
            case"ShadowFinal":
                return this.getShadowFinalProgram();
            case"Output":
                return this.getOutputProgram()
        }
    }, getFlatColorProgram: function (e) {
        var o = "Fl";
        var n = this.aProgramMap[o];
        if (n != null) {
            return n
        }
        var k = "Fl";
        var c = "Fl";
        var m = this.aVertexShaderMap[k];
        var h = this.aFragmentShaderMap[c];
        if (m == null || h == null) {
            var a = null, i = null;
            if (m == null) {
                a = new okShader(this.rc, 35633)
            }
            if (h == null) {
                i = new okShader(this.rc, 35632)
            }
            var d = new Object;
            d.sVs = a;
            d.sFs = i;
            this._getSrc("FlatColor", d);
            var l = new Object;
            l.TEX = (e ? 1 : 0);
            if (m == null) {
                a.compile(l);
                this.aVertexShaderMap[k] = a;
                m = a
            }
            if (h == null) {
                i.setFloatPrecision(this.sFloatPrecision);
                i.compile(l);
                this.aFragmentShaderMap[c] = i;
                h = i
            }
        }
        var f = new okProgram(this.rc);
        f.attachVertexShader(m);
        f.attachFragmentShader(h);
        f.link();
        this.aProgramMap[o] = f;
        return f
    }, getOutputProgram: function () {
        var m = "Op";
        var l = this.aProgramMap[m];
        if (l != null) {
            return l
        }
        var i = "Op";
        var c = "Op";
        var k = this.aVertexShaderMap[i];
        var f = this.aFragmentShaderMap[c];
        if (k == null || f == null) {
            var a = null, h = null;
            if (k == null) {
                a = new okShader(this.rc, 35633)
            }
            if (f == null) {
                h = new okShader(this.rc, 35632)
            }
            var d = new Object;
            d.sVs = a;
            d.sFs = h;
            this._getSrc("Output", d);
            if (k == null) {
                a.compile();
                this.aVertexShaderMap[i] = a;
                k = a
            }
            if (f == null) {
                h.setFloatPrecision(this.sFloatPrecision);
                h.compile();
                this.aFragmentShaderMap[c] = h;
                f = h
            }
        }
        var e = new okProgram(this.rc);
        e.attachVertexShader(k);
        e.attachFragmentShader(f);
        e.link();
        this.aProgramMap[m] = e;
        return e
    }, getGaussianProgram: function (k) {
        var o = "Gau" + k;
        var n = this.aProgramMap[o];
        if (n != null) {
            return n
        }
        var i = "Gau";
        var c = o;
        var m = this.aVertexShaderMap[i];
        var f = this.aFragmentShaderMap[c];
        if (m == null || f == null) {
            var l = new Object;
            if (k == 0) {
                l.OK_HORIZONTAL = 1
            } else {
                l.OK_VERTICAL = 1
            }
            var a = null, h = null;
            if (m == null) {
                a = new okShader(this.rc, 35633)
            }
            if (f == null) {
                h = new okShader(this.rc, 35632)
            }
            var d = new Object;
            d.sVs = a;
            d.sFs = h;
            this._getSrc("GaussianFilter", d);
            if (m == null) {
                a.compile(l);
                this.aVertexShaderMap[i] = a;
                m = a
            }
            if (f == null) {
                h.setFloatPrecision(this.sFloatPrecision);
                h.compile(l);
                this.aFragmentShaderMap[c] = h;
                f = h
            }
        }
        var e = new okProgram(this.rc);
        e.attachVertexShader(m);
        e.attachFragmentShader(f);
        e.link();
        this.aProgramMap[o] = e;
        return e
    }, getDefaultDepthProgram: function () {
        var h = "DeD";
        var d = this.aProgramMap[h];
        if (d != null) {
            return d
        }
        var k = this.aVertexShaderMap[h];
        var a = this.aFragmentShaderMap[h];
        if (k == null || a == null) {
            var e = null, f = null;
            if (k == null) {
                e = new okShader(this.rc, 35633)
            }
            if (a == null) {
                f = new okShader(this.rc, 35632)
            }
            var i = new Object;
            i.sVs = e;
            i.sFs = f;
            this._getSrc("DepthDefault", i);
            if (k == null) {
                e.compile();
                this.aVertexShaderMap[h] = e;
                k = e
            }
            if (a == null) {
                f.setFloatPrecision(this.sFloatPrecision);
                f.compile();
                this.aFragmentShaderMap[h] = f;
                a = f
            }
        }
        var c = new okProgram(this.rc);
        c.attachVertexShader(k);
        c.attachFragmentShader(a);
        c.link();
        this.aProgramMap[h] = c;
        return c
    }, getDepthProgram: function (H, w) {
        var K = w.materialRef;
        var a = w.aAttribFmt;
        var k, x, C;
        var v = w.aBoneMatList ? 1 : 0;
        var I = w.bFaceCamera ? 1 : 0;
        var B = 0;
        if (K.bAlphaTest) {
            var z = K.bAlphaScript ? K.getPackedAlphaScript() : "";
            var f = K.bNormalScript ? K.getPackedNormalScript() : "";
            var p = 0;
            for (var E = 0; E < 7; ++E) {
                if (K.aTextureList[E] != "") {
                    p += (2 << (E * 2));
                    if (K.aTextureTypeList[0] == 34067) {
                        p += (2 << (E * 2 + 1))
                    }
                }
            }
            var J = a.Texcoord1;
            var G = a.Texcoord2;
            var F = a.Texcoord3;
            var D = a.Texcoord4;
            B = (J ? 1 : 0) + (G ? 2 : 0) + (F ? 4 : 0) + (D ? 8 : 0) + ((J && G && J.iIdx == (G.iIdx - 1)) ? 16 : 0) + ((F && D && F.iIdx == (D.iIdx - 1)) ? 32 : 0);
            var d = "" + ((K.aUvAttribList[0] != "") ? K.aUvAttribList[0].charAt(8) : 0) + ((K.aUvAttribList[1] != "") ? K.aUvAttribList[1].charAt(8) : 0) + ((K.aUvAttribList[2] != "") ? K.aUvAttribList[2].charAt(8) : 0) + ((K.aUvAttribList[3] != "") ? K.aUvAttribList[3].charAt(8) : 0) + ((K.aUvAttribList[4] != "") ? K.aUvAttribList[4].charAt(8) : 0) + ((K.aUvAttribList[5] != "") ? K.aUvAttribList[5].charAt(8) : 0) + ((K.aUvAttribList[6] != "") ? K.aUvAttribList[6].charAt(8) : 0);
            var h = (a["Position/Normal"] || a.Normal) ? 1 : 0;
            var o = (K.aTextureList[4] != "") ? 1 : 0;
            var q = "" + (K.bVertexColor ? 1 : 0) + (a.Color ? 1 : 0);
            var s = (K.bTwoSide ? 1 : 0);
            k = "De" + (K.bAlphaTest ? 1 : 0) + "_" + p + "_" + B + "_" + d + "_" + h + (K.bBlend ? 1 : 0) + q + v + s + I + "_" + z + "_" + f;
            var y = this.aProgramMap[k];
            if (y == "Fail") {
                return this.getDefaultShadowDepthProgram()
            }
            if (y != null) {
                return y
            }
            x = "De" + 1 + "_" + B + "_" + h + o + (a.Color ? 1 : 0) + v + I;
            C = k
        } else {
            k = "De" + 0 + "_" + v + I;
            var y = this.aProgramMap[k];
            if (y == "Fail") {
                return this.getDefaultShadowDepthProgram()
            }
            if (y != null) {
                return y
            }
            x = "De" + 0 + "_" + v + I;
            C = "De" + 0
        }
        var A = this.aVertexShaderMap[x];
        var m = this.aFragmentShaderMap[C];
        if (A == null || m == null) {
            var l = new Object;
            if (v == 1) {
                l.OK_SKANIMATION = 1
            }
            if (I == 1) {
                l.OK_BILLBOARD = 1
            }
            if (K.bAlphaTest) {
                if (h == 1) {
                    l.OK_NORMAL = 1
                }
                if (a.Color) {
                    l.OK_VERTEX_COLOR = 1
                }
                if (K.bVertexColor) {
                    l.OK_AUTO_VERTEX_COLOR = 1
                }
                if (s) {
                    l.OK_TWO_SIDE = 1
                }
                if (K.bAlphaTest) {
                    l.OK_ALPHA_TEST = 1
                }
                if (K.aTextureList[0] != "") {
                    l.OK_TEX_ALBEDO1 = 1
                }
                if (K.aTextureList[1] != "") {
                    l.OK_TEX_ALBEDO2 = 1
                }
                if (K.aTextureList[2] != "") {
                    l.OK_TEX_ALBEDO3 = 1
                }
                if (K.aTextureList[3] != "") {
                    l.OK_TEX_ALBEDO4 = 1
                }
                if (K.aTextureList[4] != "") {
                    l.OK_TEX_NORMALMAP = 1
                }
                if (K.aTextureList[5] != "") {
                    l.OK_TEX_OPACITY = 1
                }
                if (K.aTextureList[6] != "") {
                    l.OK_TEX_SPECULAR_LEVEL = 1
                }
                if (K.aTangentAttribList[4] != "") {
                    l.OK_TANGENT = 1
                }
                if (K.aBinormalAttribList[4] != "") {
                    l.OK_BINORMAL = 1
                }
                if (K.aTextureTypeList[0] == 34067) {
                    l.OK_TEX_ALBEDO1_CUBE = 1
                }
                if (K.aTextureTypeList[1] == 34067) {
                    l.OK_TEX_ALBEDO2_CUBE = 1
                }
                if (K.aTextureTypeList[2] == 34067) {
                    l.OK_TEX_ALBEDO3_CUBE = 1
                }
                if (K.aTextureTypeList[3] == 34067) {
                    l.OK_TEX_ALBEDO4_CUBE = 1
                }
                var c = new Object;
                if (B & 16) {
                    l.OK_TC12 = 1;
                    c.Texcoord1 = "okVary_TC12.xy";
                    c.Texcoord2 = "okVary_TC12.zw"
                } else {
                    if (B & 1) {
                        l.OK_TC1 = 1;
                        c.Texcoord1 = "okVary_TC1"
                    } else {
                        c.Texcoord1 = "vec2(0.0, 0.0)"
                    }
                    if (B & 2) {
                        l.OK_TC2 = 1;
                        c.Texcoord2 = "okVary_TC2"
                    } else {
                        c.Texcoord2 = "vec2(0.0, 0.0)"
                    }
                }
                if (B & 32) {
                    l.OK_TC34 = 1;
                    c.Texcoord3 = "okVary_TC34.xy";
                    c.Texcoord4 = "okVary_TC34.zw"
                } else {
                    if (B & 4) {
                        l.OK_TC3 = 1;
                        c.Texcoord3 = "okVary_TC3"
                    } else {
                        c.Texcoord3 = "vec2(0.0, 0.0)"
                    }
                    if (B & 8) {
                        l.OK_TC4 = 1;
                        c.Texcoord4 = "okVary_TC4"
                    } else {
                        c.Texcoord4 = "vec2(0.0, 0.0)"
                    }
                }
                if (c[K.aUvAttribList[0]]) {
                    l.OK_ALBEDO1_TC = c[K.aUvAttribList[0]]
                }
                if (c[K.aUvAttribList[1]]) {
                    l.OK_ALBEDO2_TC = c[K.aUvAttribList[1]]
                }
                if (c[K.aUvAttribList[2]]) {
                    l.OK_ALBEDO3_TC = c[K.aUvAttribList[2]]
                }
                if (c[K.aUvAttribList[3]]) {
                    l.OK_ALBEDO4_TC = c[K.aUvAttribList[3]]
                }
                if (c[K.aUvAttribList[4]]) {
                    l.OK_NORMALMAP_TC = c[K.aUvAttribList[4]]
                }
                if (c[K.aUvAttribList[5]]) {
                    l.OK_OPACITY_TC = c[K.aUvAttribList[5]]
                }
                if (c[K.aUvAttribList[6]]) {
                    l.OK_SPECULAR_LEVEL_TC = c[K.aUvAttribList[6]]
                }
                if (z != "") {
                    l.OK_SCRIPT_ALPHA_CODE = z
                }
                if (f != "") {
                    l.OK_SCRIPT_NORMAL_CODE = f
                }
            }
            var u = null, e = null;
            if (A == null) {
                u = new okShader(this.rc, 35633)
            }
            if (m == null) {
                e = new okShader(this.rc, 35632)
            }
            var t = new Object;
            t.sVs = u;
            t.sFs = e;
            this._getSrc("Depth", t);
            if (A == null) {
                if (u.compile(l)) {
                    this.aVertexShaderMap[x] = u;
                    A = u
                } else {
                    this.aProgramMap[k] = "Fail";
                    return this.getDefaultDepthProgram()
                }
            }
            if (m == null) {
                e.setFloatPrecision(this.sFloatPrecision);
                if (e.compile(l)) {
                    this.aFragmentShaderMap[C] = e;
                    m = e
                } else {
                    this.aProgramMap[k] = "Fail";
                    return this.getDefaultDepthProgram()
                }
            }
        }
        var n = new okProgram(this.rc);
        n.attachVertexShader(A);
        n.attachFragmentShader(m);
        if (!n.link()) {
            return this.getDefaultDepthProgram()
        }
        this.aProgramMap[k] = n;
        return n
    }, getDefaultShadowDepthProgram: function () {
        var h = "ShDD";
        var d = this.aProgramMap[h];
        if (d != null) {
            return d
        }
        var k = this.aVertexShaderMap[h];
        var a = this.aFragmentShaderMap[h];
        if (k == null || a == null) {
            var e = null, f = null;
            if (k == null) {
                e = new okShader(this.rc, 35633)
            }
            if (a == null) {
                f = new okShader(this.rc, 35632)
            }
            var i = new Object;
            i.sVs = e;
            i.sFs = f;
            this._getSrc("ShadowDepthDefault", i);
            if (k == null) {
                e.compile();
                this.aVertexShaderMap[h] = e;
                k = e
            }
            if (a == null) {
                f.setFloatPrecision(this.sFloatPrecision);
                f.compile();
                this.aFragmentShaderMap[h] = f;
                a = f
            }
        }
        var c = new okProgram(this.rc);
        c.attachVertexShader(k);
        c.attachFragmentShader(a);
        c.link();
        this.aProgramMap[h] = c;
        return c
    }, getGlowProgram: function (H, w) {
        var K = w.materialRef;
        var a = w.aAttribFmt;
        var k, x, C;
        var v = w.aBoneMatList ? 1 : 0;
        var I = w.bFaceCamera ? 1 : 0;
        var B = 0;
        if (K.bAlphaTest) {
            var z = K.bAlphaScript ? K.getPackedAlphaScript() : "";
            var f = K.bNormalScript ? K.getPackedNormalScript() : "";
            var p = 0;
            for (var E = 0; E < 7; ++E) {
                if (K.aTextureList[E] != "") {
                    p += (2 << (E * 2));
                    if (K.aTextureTypeList[0] == 34067) {
                        p += (2 << (E * 2 + 1))
                    }
                }
            }
            var J = a.Texcoord1;
            var G = a.Texcoord2;
            var F = a.Texcoord3;
            var D = a.Texcoord4;
            B = (J ? 1 : 0) + (G ? 2 : 0) + (F ? 4 : 0) + (D ? 8 : 0) + ((J && G && J.iIdx == (G.iIdx - 1)) ? 16 : 0) + ((F && D && F.iIdx == (D.iIdx - 1)) ? 32 : 0);
            var d = "" + ((K.aUvAttribList[0] != "") ? K.aUvAttribList[0].charAt(8) : 0) + ((K.aUvAttribList[1] != "") ? K.aUvAttribList[1].charAt(8) : 0) + ((K.aUvAttribList[2] != "") ? K.aUvAttribList[2].charAt(8) : 0) + ((K.aUvAttribList[3] != "") ? K.aUvAttribList[3].charAt(8) : 0) + ((K.aUvAttribList[4] != "") ? K.aUvAttribList[4].charAt(8) : 0) + ((K.aUvAttribList[5] != "") ? K.aUvAttribList[5].charAt(8) : 0) + ((K.aUvAttribList[6] != "") ? K.aUvAttribList[6].charAt(8) : 0);
            var h = (a["Position/Normal"] || a.Normal) ? 1 : 0;
            var o = (K.aTextureList[4] != "") ? 1 : 0;
            var q = "" + (K.bVertexColor ? 1 : 0) + (a.Color ? 1 : 0);
            var s = (K.bTwoSide ? 1 : 0);
            k = "Gl" + (K.bAlphaTest ? 1 : 0) + "_" + p + "_" + B + "_" + d + "_" + h + (K.bBlend ? 1 : 0) + q + v + s + I + "_" + z + "_" + f;
            var y = this.aProgramMap[k];
            if (y == "Fail") {
                return this.getDefaultShadowDepthProgram()
            }
            if (y != null) {
                return y
            }
            x = "Gl" + 1 + "_" + B + "_" + h + o + (a.Color ? 1 : 0) + v + I;
            C = k
        } else {
            k = "Gl" + 0 + "_" + v + I;
            var y = this.aProgramMap[k];
            if (y == "Fail") {
                return this.getDefaultShadowDepthProgram()
            }
            if (y != null) {
                return y
            }
            x = "Gl" + 0 + "_" + v + I;
            C = "Gl" + 0
        }
        var A = this.aVertexShaderMap[x];
        var m = this.aFragmentShaderMap[C];
        if (A == null || m == null) {
            var l = new Object;
            if (v == 1) {
                l.OK_SKANIMATION = 1
            }
            if (I == 1) {
                l.OK_BILLBOARD = 1
            }
            if (K.bAlphaTest) {
                if (h == 1) {
                    l.OK_NORMAL = 1
                }
                if (a.Color) {
                    l.OK_VERTEX_COLOR = 1
                }
                if (K.bVertexColor) {
                    l.OK_AUTO_VERTEX_COLOR = 1
                }
                if (s) {
                    l.OK_TWO_SIDE = 1
                }
                if (K.bAlphaTest) {
                    l.OK_ALPHA_TEST = 1
                }
                if (K.aTextureList[0] != "") {
                    l.OK_TEX_ALBEDO1 = 1
                }
                if (K.aTextureList[1] != "") {
                    l.OK_TEX_ALBEDO2 = 1
                }
                if (K.aTextureList[2] != "") {
                    l.OK_TEX_ALBEDO3 = 1
                }
                if (K.aTextureList[3] != "") {
                    l.OK_TEX_ALBEDO4 = 1
                }
                if (K.aTextureList[4] != "") {
                    l.OK_TEX_NORMALMAP = 1
                }
                if (K.aTextureList[5] != "") {
                    l.OK_TEX_OPACITY = 1
                }
                if (K.aTextureList[6] != "") {
                    l.OK_TEX_SPECULAR_LEVEL = 1
                }
                if (K.aTangentAttribList[4] != "") {
                    l.OK_TANGENT = 1
                }
                if (K.aBinormalAttribList[4] != "") {
                    l.OK_BINORMAL = 1
                }
                if (K.aTextureTypeList[0] == 34067) {
                    l.OK_TEX_ALBEDO1_CUBE = 1
                }
                if (K.aTextureTypeList[1] == 34067) {
                    l.OK_TEX_ALBEDO2_CUBE = 1
                }
                if (K.aTextureTypeList[2] == 34067) {
                    l.OK_TEX_ALBEDO3_CUBE = 1
                }
                if (K.aTextureTypeList[3] == 34067) {
                    l.OK_TEX_ALBEDO4_CUBE = 1
                }
                var c = new Object;
                if (B & 16) {
                    l.OK_TC12 = 1;
                    c.Texcoord1 = "okVary_TC12.xy";
                    c.Texcoord2 = "okVary_TC12.zw"
                } else {
                    if (B & 1) {
                        l.OK_TC1 = 1;
                        c.Texcoord1 = "okVary_TC1"
                    } else {
                        c.Texcoord1 = "vec2(0.0, 0.0)"
                    }
                    if (B & 2) {
                        l.OK_TC2 = 1;
                        c.Texcoord2 = "okVary_TC2"
                    } else {
                        c.Texcoord2 = "vec2(0.0, 0.0)"
                    }
                }
                if (B & 32) {
                    l.OK_TC34 = 1;
                    c.Texcoord3 = "okVary_TC34.xy";
                    c.Texcoord4 = "okVary_TC34.zw"
                } else {
                    if (B & 4) {
                        l.OK_TC3 = 1;
                        c.Texcoord3 = "okVary_TC3"
                    } else {
                        c.Texcoord3 = "vec2(0.0, 0.0)"
                    }
                    if (B & 8) {
                        l.OK_TC4 = 1;
                        c.Texcoord4 = "okVary_TC4"
                    } else {
                        c.Texcoord4 = "vec2(0.0, 0.0)"
                    }
                }
                if (c[K.aUvAttribList[0]]) {
                    l.OK_ALBEDO1_TC = c[K.aUvAttribList[0]]
                }
                if (c[K.aUvAttribList[1]]) {
                    l.OK_ALBEDO2_TC = c[K.aUvAttribList[1]]
                }
                if (c[K.aUvAttribList[2]]) {
                    l.OK_ALBEDO3_TC = c[K.aUvAttribList[2]]
                }
                if (c[K.aUvAttribList[3]]) {
                    l.OK_ALBEDO4_TC = c[K.aUvAttribList[3]]
                }
                if (c[K.aUvAttribList[4]]) {
                    l.OK_NORMALMAP_TC = c[K.aUvAttribList[4]]
                }
                if (c[K.aUvAttribList[5]]) {
                    l.OK_OPACITY_TC = c[K.aUvAttribList[5]]
                }
                if (c[K.aUvAttribList[6]]) {
                    l.OK_SPECULAR_LEVEL_TC = c[K.aUvAttribList[6]]
                }
                if (z != "") {
                    l.OK_SCRIPT_ALPHA_CODE = z
                }
                if (f != "") {
                    l.OK_SCRIPT_NORMAL_CODE = f
                }
            }
            var u = null, e = null;
            if (A == null) {
                u = new okShader(this.rc, 35633)
            }
            if (m == null) {
                e = new okShader(this.rc, 35632)
            }
            var t = new Object;
            t.sVs = u;
            t.sFs = e;
            this._getSrc("Glow", t);
            if (A == null) {
                if (u.compile(l)) {
                    this.aVertexShaderMap[x] = u;
                    A = u
                } else {
                    this.aProgramMap[k] = "Fail";
                    return this.getDefaultDepthProgram()
                }
            }
            if (m == null) {
                e.setFloatPrecision(this.sFloatPrecision);
                if (e.compile(l)) {
                    this.aFragmentShaderMap[C] = e;
                    m = e
                } else {
                    this.aProgramMap[k] = "Fail";
                    return this.getDefaultDepthProgram()
                }
            }
        }
        var n = new okProgram(this.rc);
        n.attachVertexShader(A);
        n.attachFragmentShader(m);
        if (!n.link()) {
            return this.getDefaultDepthProgram()
        }
        this.aProgramMap[k] = n;
        return n
    }, getDefaultGlowProgram: function () {
        var h = "GlD";
        var d = this.aProgramMap[h];
        if (d != null) {
            return d
        }
        var k = this.aVertexShaderMap[h];
        var a = this.aFragmentShaderMap[h];
        if (k == null || a == null) {
            var e = null, f = null;
            if (k == null) {
                e = new okShader(this.rc, 35633)
            }
            if (a == null) {
                f = new okShader(this.rc, 35632)
            }
            var i = new Object;
            i.sVs = e;
            i.sFs = f;
            this._getSrc("GlowDefault", i);
            if (k == null) {
                e.compile();
                this.aVertexShaderMap[h] = e;
                k = e
            }
            if (a == null) {
                f.setFloatPrecision(this.sFloatPrecision);
                f.compile();
                this.aFragmentShaderMap[h] = f;
                a = f
            }
        }
        var c = new okProgram(this.rc);
        c.attachVertexShader(k);
        c.attachFragmentShader(a);
        c.link();
        this.aProgramMap[h] = c;
        return c
    }, getShadowDepthProgram: function (H, w) {
        var K = w.materialRef;
        var a = w.aAttribFmt;
        var k, x, C;
        var v = w.aBoneMatList ? 1 : 0;
        var I = w.bFaceCamera ? 1 : 0;
        var B = 0;
        if (K.bAlphaTest) {
            var z = K.bAlphaScript ? K.getPackedAlphaScript() : "";
            var f = K.bNormalScript ? K.getPackedNormalScript() : "";
            var p = 0;
            for (var E = 0; E < 7; ++E) {
                if (K.aTextureList[E] != "") {
                    p += (2 << (E * 2));
                    if (K.aTextureTypeList[0] == 34067) {
                        p += (2 << (E * 2 + 1))
                    }
                }
            }
            var J = a.Texcoord1;
            var G = a.Texcoord2;
            var F = a.Texcoord3;
            var D = a.Texcoord4;
            B = (J ? 1 : 0) + (G ? 2 : 0) + (F ? 4 : 0) + (D ? 8 : 0) + ((J && G && J.iIdx == (G.iIdx - 1)) ? 16 : 0) + ((F && D && F.iIdx == (D.iIdx - 1)) ? 32 : 0);
            var d = "" + ((K.aUvAttribList[0] != "") ? K.aUvAttribList[0].charAt(8) : 0) + ((K.aUvAttribList[1] != "") ? K.aUvAttribList[1].charAt(8) : 0) + ((K.aUvAttribList[2] != "") ? K.aUvAttribList[2].charAt(8) : 0) + ((K.aUvAttribList[3] != "") ? K.aUvAttribList[3].charAt(8) : 0) + ((K.aUvAttribList[4] != "") ? K.aUvAttribList[4].charAt(8) : 0) + ((K.aUvAttribList[5] != "") ? K.aUvAttribList[5].charAt(8) : 0) + ((K.aUvAttribList[6] != "") ? K.aUvAttribList[6].charAt(8) : 0);
            var h = (a["Position/Normal"] || a.Normal) ? 1 : 0;
            var o = (K.aTextureList[4] != "") ? 1 : 0;
            var q = "" + (K.bVertexColor ? 1 : 0) + (a.Color ? 1 : 0);
            var s = (K.bTwoSide ? 1 : 0);
            k = "ShD" + (K.bAlphaTest ? 1 : 0) + p + "_" + B + "_" + d + h + (K.bBlend ? 1 : 0) + q + v + s + I + "_" + z + "_" + f;
            var y = this.aProgramMap[k];
            if (y == "Fail") {
                return this.getDefaultShadowDepthProgram()
            }
            if (y != null) {
                return y
            }
            x = "ShD" + 1 + "_" + B + "_" + h + o + (a.Color ? 1 : 0) + v + I;
            C = k
        } else {
            k = "ShD" + 0 + "_" + v + I;
            var y = this.aProgramMap[k];
            if (y == "Fail") {
                return this.getDefaultShadowDepthProgram()
            }
            if (y != null) {
                return y
            }
            x = "ShD" + 0 + "_" + v + I;
            C = "ShD" + 0
        }
        var A = this.aVertexShaderMap[x];
        var m = this.aFragmentShaderMap[C];
        if (A == null || m == null) {
            var l = new Object;
            if (v == 1) {
                l.OK_SKANIMATION = 1
            }
            if (I == 1) {
                l.OK_BILLBOARD = 1
            }
            if (K.bAlphaTest) {
                if (h == 1) {
                    l.OK_NORMAL = 1
                }
                if (a.Color) {
                    l.OK_VERTEX_COLOR = 1
                }
                if (K.bVertexColor) {
                    l.OK_AUTO_VERTEX_COLOR = 1
                }
                if (s) {
                    l.OK_TWO_SIDE = 1
                }
                if (K.bAlphaTest) {
                    l.OK_ALPHA_TEST = 1
                }
                if (K.aTextureList[0] != "") {
                    l.OK_TEX_ALBEDO1 = 1
                }
                if (K.aTextureList[1] != "") {
                    l.OK_TEX_ALBEDO2 = 1
                }
                if (K.aTextureList[2] != "") {
                    l.OK_TEX_ALBEDO3 = 1
                }
                if (K.aTextureList[3] != "") {
                    l.OK_TEX_ALBEDO4 = 1
                }
                if (K.aTextureList[4] != "") {
                    l.OK_TEX_NORMALMAP = 1
                }
                if (K.aTextureList[5] != "") {
                    l.OK_TEX_OPACITY = 1
                }
                if (K.aTextureList[6] != "") {
                    l.OK_TEX_SPECULAR_LEVEL = 1
                }
                if (K.aTangentAttribList[4] != "") {
                    l.OK_TANGENT = 1
                }
                if (K.aBinormalAttribList[4] != "") {
                    l.OK_BINORMAL = 1
                }
                if (K.aTextureTypeList[0] == 34067) {
                    l.OK_TEX_ALBEDO1_CUBE = 1
                }
                if (K.aTextureTypeList[1] == 34067) {
                    l.OK_TEX_ALBEDO2_CUBE = 1
                }
                if (K.aTextureTypeList[2] == 34067) {
                    l.OK_TEX_ALBEDO3_CUBE = 1
                }
                if (K.aTextureTypeList[3] == 34067) {
                    l.OK_TEX_ALBEDO4_CUBE = 1
                }
                var c = new Object;
                if (B & 16) {
                    l.OK_TC12 = 1;
                    c.Texcoord1 = "okVary_TC12.xy";
                    c.Texcoord2 = "okVary_TC12.zw"
                } else {
                    if (B & 1) {
                        l.OK_TC1 = 1;
                        c.Texcoord1 = "okVary_TC1"
                    } else {
                        c.Texcoord1 = "vec2(0.0, 0.0)"
                    }
                    if (B & 2) {
                        l.OK_TC2 = 1;
                        c.Texcoord2 = "okVary_TC2"
                    } else {
                        c.Texcoord2 = "vec2(0.0, 0.0)"
                    }
                }
                if (B & 32) {
                    l.OK_TC34 = 1;
                    c.Texcoord3 = "okVary_TC34.xy";
                    c.Texcoord4 = "okVary_TC34.zw"
                } else {
                    if (B & 4) {
                        l.OK_TC3 = 1;
                        c.Texcoord3 = "okVary_TC3"
                    } else {
                        c.Texcoord3 = "vec2(0.0, 0.0)"
                    }
                    if (B & 8) {
                        l.OK_TC4 = 1;
                        c.Texcoord4 = "okVary_TC4"
                    } else {
                        c.Texcoord4 = "vec2(0.0, 0.0)"
                    }
                }
                if (c[K.aUvAttribList[0]]) {
                    l.OK_ALBEDO1_TC = c[K.aUvAttribList[0]]
                }
                if (c[K.aUvAttribList[1]]) {
                    l.OK_ALBEDO2_TC = c[K.aUvAttribList[1]]
                }
                if (c[K.aUvAttribList[2]]) {
                    l.OK_ALBEDO3_TC = c[K.aUvAttribList[2]]
                }
                if (c[K.aUvAttribList[3]]) {
                    l.OK_ALBEDO4_TC = c[K.aUvAttribList[3]]
                }
                if (c[K.aUvAttribList[4]]) {
                    l.OK_NORMALMAP_TC = c[K.aUvAttribList[4]]
                }
                if (c[K.aUvAttribList[5]]) {
                    l.OK_OPACITY_TC = c[K.aUvAttribList[5]]
                }
                if (c[K.aUvAttribList[6]]) {
                    l.OK_SPECULAR_LEVEL_TC = c[K.aUvAttribList[6]]
                }
                if (z != "") {
                    l.OK_SCRIPT_ALPHA_CODE = z
                }
                if (f != "") {
                    l.OK_SCRIPT_NORMAL_CODE = f
                }
            }
            var u = null, e = null;
            if (A == null) {
                u = new okShader(this.rc, 35633)
            }
            if (m == null) {
                e = new okShader(this.rc, 35632)
            }
            var t = new Object;
            t.sVs = u;
            t.sFs = e;
            this._getSrc("ShadowDepth", t);
            if (A == null) {
                if (u.compile(l)) {
                    this.aVertexShaderMap[x] = u;
                    A = u
                } else {
                    this.aProgramMap[k] = "Fail";
                    return this.getDefaultShadowDepthProgram()
                }
            }
            if (m == null) {
                e.setFloatPrecision(this.sFloatPrecision);
                if (e.compile(l)) {
                    this.aFragmentShaderMap[C] = e;
                    m = e
                } else {
                    this.aProgramMap[k] = "Fail";
                    return this.getDefaultShadowDepthProgram()
                }
            }
        }
        var n = new okProgram(this.rc);
        n.attachVertexShader(A);
        n.attachFragmentShader(m);
        if (!n.link()) {
            this.aProgramMap[k] = "Fail";
            return this.getDefaultShadowDepthProgram()
        }
        this.aProgramMap[k] = n;
        return n
    }, getShadowVolumeProgram: function () {
        var m = "ShV";
        var l = this.aProgramMap[m];
        if (l != null) {
            return l
        }
        var i = "ShV";
        var c = "ShV";
        var k = this.aVertexShaderMap[i];
        var f = this.aFragmentShaderMap[c];
        if (k == null || f == null) {
            var a = null, h = null;
            if (k == null) {
                a = new okShader(this.rc, 35633)
            }
            if (f == null) {
                h = new okShader(this.rc, 35632)
            }
            var d = new Object;
            d.sVs = a;
            d.sFs = h;
            this._getSrc("ShadowVolume", d);
            if (k == null) {
                a.compile();
                this.aVertexShaderMap[i] = a;
                k = a
            }
            if (f == null) {
                h.setFloatPrecision(this.sFloatPrecision);
                h.compile();
                this.aFragmentShaderMap[c] = h;
                f = h
            }
        }
        var e = new okProgram(this.rc);
        e.attachVertexShader(k);
        e.attachFragmentShader(f);
        e.link();
        this.aProgramMap[m] = e;
        return e
    }, getShadowFinalProgram: function () {
        var m = "ShF";
        var l = this.aProgramMap[m];
        if (l != null) {
            return l
        }
        var i = "ShF";
        var c = "ShF";
        var k = this.aVertexShaderMap[i];
        var f = this.aFragmentShaderMap[c];
        if (k == null || f == null) {
            var a = null, h = null;
            if (k == null) {
                a = new okShader(this.rc, 35633)
            }
            if (f == null) {
                h = new okShader(this.rc, 35632)
            }
            var d = new Object;
            d.sVs = a;
            d.sFs = h;
            this._getSrc("ShadowFinal", d);
            if (k == null) {
                a.compile();
                this.aVertexShaderMap[i] = a;
                k = a
            }
            if (f == null) {
                h.setFloatPrecision(this.sFloatPrecision);
                h.compile();
                this.aFragmentShaderMap[c] = h;
                f = h
            }
        }
        var e = new okProgram(this.rc);
        e.attachVertexShader(k);
        e.attachFragmentShader(f);
        e.link();
        this.aProgramMap[m] = e;
        return e
    }, getDefaultLightingProgram: function () {
        var h = "LiD";
        var d = this.aProgramMap[h];
        if (d != null) {
            return d
        }
        var k = this.aVertexShaderMap[h];
        var a = this.aFragmentShaderMap[h];
        if (k == null || a == null) {
            var e = null, f = null;
            if (k == null) {
                e = new okShader(this.rc, 35633)
            }
            if (a == null) {
                f = new okShader(this.rc, 35632)
            }
            var i = new Object;
            i.sVs = e;
            i.sFs = f;
            this._getSrc("LightingDefault", i);
            if (k == null) {
                e.compile();
                this.aVertexShaderMap[h] = e;
                k = e
            }
            if (a == null) {
                f.setFloatPrecision(this.sFloatPrecision);
                f.compile();
                this.aFragmentShaderMap[h] = f;
                a = f
            }
        }
        var c = new okProgram(this.rc);
        c.attachVertexShader(k);
        c.attachFragmentShader(a);
        c.link();
        this.aProgramMap[h] = c;
        return c
    }, getLightingProgram: function (t, e) {
        var X = e.materialRef;
        var k = e.aAttribFmt;
        var Q = e.getRefDctLightNum();
        var R = e.getRefPointLightNum();
        var A = e.getRefSpotLightNum();
        var W = t.bShadow && !X.bWireframe && e.bReceiveShadow && t.aStageEnableList[1];
        var G = X.bEmissiveScript ? X.getPackedEmissiveScript() : "";
        var F = X.bDiffuseScript ? X.getPackedDiffuseScript() : "";
        var h = X.bDiffusePowerScript ? X.getPackedDiffusePowerScript() : "";
        var P = X.bSpecularScript ? X.getPackedSpecularScript() : "";
        var d = X.bSpecularPowerScript ? X.getPackedSpecularPowerScript() : "";
        var B = X.bAlphaScript ? X.getPackedAlphaScript() : "";
        var J = X.bNormalScript ? X.getPackedNormalScript() : "";
        var N = X.bDctLightScript ? X.getPackedDctLightScript() : "";
        var E = X.bPointLightScript ? X.getPackedPointLightScript() : "";
        var f = X.bSpotLightScript ? X.getPackedSpotLightScript() : "";
        var q = 0;
        for (var T = 0; T < 7; ++T) {
            if (X.aTextureList[T] != "") {
                q += (2 << (T * 2));
                if (X.aTextureTypeList[0] == 34067) {
                    q += (2 << (T * 2 + 1))
                }
            }
        }
        var O = k.Texcoord1;
        var M = k.Texcoord2;
        var L = k.Texcoord3;
        var K = k.Texcoord4;
        var V = (O ? 1 : 0) + (M ? 2 : 0) + (L ? 4 : 0) + (K ? 8 : 0) + ((O && M && O.iIdx == (M.iIdx - 1)) ? 16 : 0) + ((L && K && L.iIdx == (K.iIdx - 1)) ? 32 : 0);
        var w = "" + ((X.aUvAttribList[0] != "") ? X.aUvAttribList[0].charAt(8) : 0) + ((X.aUvAttribList[1] != "") ? X.aUvAttribList[1].charAt(8) : 0) + ((X.aUvAttribList[2] != "") ? X.aUvAttribList[2].charAt(8) : 0) + ((X.aUvAttribList[3] != "") ? X.aUvAttribList[3].charAt(8) : 0) + ((X.aUvAttribList[4] != "") ? X.aUvAttribList[4].charAt(8) : 0) + ((X.aUvAttribList[5] != "") ? X.aUvAttribList[5].charAt(8) : 0) + ((X.aUvAttribList[6] != "") ? X.aUvAttribList[6].charAt(8) : 0);
        var I = (k["Position/Normal"] || k.Normal) ? 1 : 0;
        var v = (X.aTextureList[4] != "") ? 1 : 0;
        var H = e.aBoneMatList ? 1 : 0;
        var m = e.bFaceCamera ? 1 : 0;
        var u = "" + (X.bVertexColor ? 1 : 0) + (k.Color ? 1 : 0);
        var l = (X.bTwoSide ? 1 : 0);
        var s = ((t.bFogEnable && X.bFog) ? 1 : 0);
        var x = "Li" + Q + R + A + "_" + q + "_" + V + "_" + w + "_" + (X.bDynamicLighting ? 1 : 0) + I + (X.bBlend ? 1 : 0) + (X.bAlphaTest ? 1 : 0) + (W ? 1 : 0) + u + H + l + m + s + "_" + G + "_" + F + "_" + h + "_" + P + "_" + d + "_" + B + "_" + J + "_" + N + "_" + E + "_" + f;
        var n = this.aProgramMap[x];
        if (n == "Fail") {
            return this.getDefaultLightingProgram()
        }
        if (n != null) {
            return n
        }
        var c = "Li" + V + "_" + I + v + (k.Color ? "1" : "0") + H + m;
        var y = x;
        var o = this.aVertexShaderMap[c];
        var C = this.aFragmentShaderMap[y];
        if (o == null || C == null) {
            var U = new Object;
            if (X.bDynamicLighting) {
                U.OK_DYNAMICLIGHTING = 1
            }
            U.OK_DCTLIGHT_NUM = Q;
            U.OK_POINTLIGHT_NUM = R;
            U.OK_SPOTLIGHT_NUM = A;
            if (H == 1) {
                U.OK_SKANIMATION = 1
            }
            if (m == 1) {
                U.OK_BILLBOARD = 1
            }
            if (I == 1) {
                U.OK_NORMAL = 1
            }
            if (k.Color) {
                U.OK_VERTEX_COLOR = 1
            }
            if (X.bVertexColor) {
                U.OK_AUTO_VERTEX_COLOR = 1
            }
            if (l) {
                U.OK_TWO_SIDE = 1
            }
            if (X.bBlend) {
                U.OK_BLEND = 1
            }
            if (X.bAlphaTest && (X.bBlend || !t.aStageEnableList[0])) {
                U.OK_ALPHA_TEST = 1
            }
            if (W) {
                U.OK_DYNAMICSHADOW = 1
            }
            if (s) {
                U.OK_FOG = 1
            }
            if (X.aTextureList[0] != "") {
                U.OK_TEX_ALBEDO1 = 1
            }
            if (X.aTextureList[1] != "") {
                U.OK_TEX_ALBEDO2 = 1
            }
            if (X.aTextureList[2] != "") {
                U.OK_TEX_ALBEDO3 = 1
            }
            if (X.aTextureList[3] != "") {
                U.OK_TEX_ALBEDO4 = 1
            }
            if (X.aTextureList[4] != "") {
                U.OK_TEX_NORMALMAP = 1
            }
            if (X.aTextureList[5] != "") {
                U.OK_TEX_OPACITY = 1
            }
            if (X.aTextureList[6] != "") {
                U.OK_TEX_SPECULAR_LEVEL = 1
            }
            if (X.aTangentAttribList[4] != "") {
                U.OK_TANGENT = 1
            }
            if (X.aBinormalAttribList[4] != "") {
                U.OK_BINORMAL = 1
            }
            if (X.aTextureTypeList[0] == 34067) {
                U.OK_TEX_ALBEDO1_CUBE = 1
            }
            if (X.aTextureTypeList[1] == 34067) {
                U.OK_TEX_ALBEDO2_CUBE = 1
            }
            if (X.aTextureTypeList[2] == 34067) {
                U.OK_TEX_ALBEDO3_CUBE = 1
            }
            if (X.aTextureTypeList[3] == 34067) {
                U.OK_TEX_ALBEDO4_CUBE = 1
            }
            var z = new Object;
            if (V & 16) {
                U.OK_TC12 = 1;
                z.Texcoord1 = "okVary_TC12.xy";
                z.Texcoord2 = "okVary_TC12.zw"
            } else {
                if (V & 1) {
                    U.OK_TC1 = 1;
                    z.Texcoord1 = "okVary_TC1"
                } else {
                    z.Texcoord1 = "vec2(0.0, 0.0)"
                }
                if (V & 2) {
                    U.OK_TC2 = 1;
                    z.Texcoord2 = "okVary_TC2"
                } else {
                    z.Texcoord2 = "vec2(0.0, 0.0)"
                }
            }
            if (V & 32) {
                U.OK_TC34 = 1;
                z.Texcoord3 = "okVary_TC34.xy";
                z.Texcoord4 = "okVary_TC34.zw"
            } else {
                if (V & 4) {
                    U.OK_TC3 = 1;
                    z.Texcoord3 = "okVary_TC3"
                } else {
                    z.Texcoord3 = "vec2(0.0, 0.0)"
                }
                if (V & 8) {
                    U.OK_TC4 = 1;
                    z.Texcoord4 = "okVary_TC4"
                } else {
                    z.Texcoord4 = "vec2(0.0, 0.0)"
                }
            }
            if (z[X.aUvAttribList[0]]) {
                U.OK_ALBEDO1_TC = z[X.aUvAttribList[0]]
            }
            if (z[X.aUvAttribList[1]]) {
                U.OK_ALBEDO2_TC = z[X.aUvAttribList[1]]
            }
            if (z[X.aUvAttribList[2]]) {
                U.OK_ALBEDO3_TC = z[X.aUvAttribList[2]]
            }
            if (z[X.aUvAttribList[3]]) {
                U.OK_ALBEDO4_TC = z[X.aUvAttribList[3]]
            }
            if (z[X.aUvAttribList[4]]) {
                U.OK_NORMALMAP_TC = z[X.aUvAttribList[4]]
            }
            if (z[X.aUvAttribList[5]]) {
                U.OK_OPACITY_TC = z[X.aUvAttribList[5]]
            }
            if (z[X.aUvAttribList[6]]) {
                U.OK_SPECULAR_LEVEL_TC = z[X.aUvAttribList[6]]
            }
            if (G != "") {
                U.OK_SCRIPT_EMISSIVE_CODE = G
            }
            if (F != "") {
                U.OK_SCRIPT_DIFFUSE_CODE = F
            }
            if (h != "") {
                U.OK_SCRIPT_DIFFUSEPOWER_CODE = h
            }
            if (P != "") {
                U.OK_SCRIPT_SPECULAR_CODE = P
            }
            if (d != "") {
                U.OK_SCRIPT_SPECULARPOWER_CODE = d
            }
            if (B != "") {
                U.OK_SCRIPT_ALPHA_CODE = B
            }
            if (J != "") {
                U.OK_SCRIPT_NORMAL_CODE = J
            }
            if (N != "") {
                U.OK_SCRIPT_DCTLIGHT_CODE = N
            }
            if (E != "") {
                U.OK_SCRIPT_POINTLIGHT_CODE = E
            }
            if (f != "") {
                U.OK_SCRIPT_SPOTLIGHT_CODE = f
            }
            var p = null, D = null;
            if (o == null) {
                p = new okShader(this.rc, 35633)
            }
            if (C == null) {
                D = new okShader(this.rc, 35632)
            }
            var S = new Object;
            S.sVs = p;
            S.sFs = D;
            this._getSrc("Lighting", S);
            if (o == null) {
                if (p.compile(U)) {
                    this.aVertexShaderMap[c] = p;
                    o = p
                } else {
                    this.aProgramMap[x] = "Fail";
                    return this.getDefaultLightingProgram()
                }
            }
            if (C == null) {
                D.setFloatPrecision(this.sFloatPrecision);
                if (D.compile(U)) {
                    this.aFragmentShaderMap[y] = D;
                    C = D
                } else {
                    this.aProgramMap[x] = "Fail";
                    return this.getDefaultLightingProgram()
                }
            }
        }
        var a = new okProgram(this.rc);
        a.attachVertexShader(o);
        a.attachFragmentShader(C);
        if (!a.link()) {
            this.aProgramMap[x] = "Fail";
            return this.getDefaultLightingProgram()
        }
        this.aProgramMap[x] = a;
        return a
    }, _getSrc: function (a, d) {
        if (this.aVertexSourceMap) {
            if (d.sVs) {
                d.sVs.loadSource(this.aVertexSourceMap[a])
            }
            if (d.sFs) {
                d.sFs.loadSource(this.aFragmentSourceMap[a])
            }
        }
    }
};

function okRenderBaseStage() {
    this.renderer = null;
    this.bEnable = true;
    this.__aMatArray = [new okMat4(), new okMat4(), new okMat4(), new okMat4()]
}

okRenderBaseStage.prototype.clear = function () {
    this.bEnable = true;
    this.deleteResource()
};
okRenderBaseStage.prototype.enable = function (a) {
    this.bEnable = a
};
okRenderBaseStage.prototype.isEnabled = function () {
    return this.bEnable
};
okRenderBaseStage.prototype.init = function (a) {
    this.renderer = a
};
okRenderBaseStage.prototype.createResource = function () {
};
okRenderBaseStage.prototype.deleteResource = function () {
};
okRenderBaseStage.prototype.beginView = function (a) {
};
okRenderBaseStage.prototype.endView = function () {
};
okRenderBaseStage.prototype.prepare = function () {
};
okRenderBaseStage.prototype.render = function () {
};
okRenderBaseStage.prototype._renderBatches = function (e, ac, l, m, y, ah, an, z) {
    var af = this.renderer.rc;
    var G = this.renderer.renderEnv;
    var Q = this.renderer.resourceManager;
    var Z = this.renderer.renderTargetCollector;
    var S = this.renderer.shaderManager;
    var H = G.camera;
    var I = G.iCanvasWidth;
    var T = G.iCanvasHeight;
    var R = Q.getResource("$R$White");
    var U = H.getPos();
    var h = (z ? z : H.getViewProjMat4());
    var v = H.getViewInvMat4();
    v.m03 = v.m13 = v.m23 = 0;
    var x = okAllocator.array();
    x.push(0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, G.vGroundColor.x, G.vGroundColor.y, G.vGroundColor.z, G.iCurTime / 1000, G.vSkyColor.x, G.vSkyColor.y, G.vSkyColor.z, G.fRandom, H.iViewportX / I, (T - H.iViewportY - H.iViewportHeight) / T, H.iViewportWidth / I, H.iViewportHeight / T, U.x, U.y, U.z, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, G.vFogColor.x, G.vFogColor.y, G.vFogColor.z, G.fFogDensity, G.fFogDistNear, 1 / (G.fFogDistFar - G.fFogDistNear), 0, 0, 1, 1, 1, 0);
    var aa = e.length;
    for (var am = 0; am < aa; ++am) {
        var n = e[am];
        if (ah && ah(n) == false) {
            continue
        }
        var A = n.aAttribFmt;
        var ar = n.materialRef;
        var ao = G.bShadow && !ar.bWireframe && n.bReceiveShadow && G.aStageEnableList[1];
        var C = 0;
        var a = S.getProgram(ac, G, n);
        a.bind();
        n.mMatRef.toMat4(this.__aMatArray[0]);
        n.mMatNRef.toMat4(this.__aMatArray[1]);
        this.__aMatArray[2] = h;
        this.__aMatArray[3] = v;
        a.setUniformMat4Array("okUni_TransMat", this.__aMatArray);
        var W = A.Position;
        if (W) {
            a.setAttribute("okAttr_Pos", W.buf, W.iSize, W.iOffset, W.iStride)
        }
        if (m || ar.bAlphaTest) {
            var X = A.Normal;
            if (X) {
                a.setAttribute("okAttr_Normal", X.buf, X.iSize, X.iOffset, X.iStride)
            }
            var p = A.Color;
            if (p) {
                a.setAttribute("okAttr_Color", p.buf, p.iSize, p.iOffset, p.iStride)
            }
        }
        if (ar.bDepthTest) {
            af.enable(2929)
        } else {
            af.disable(2929)
        }
        if (ar.bDepthWrite) {
            af.depthMask(true)
        } else {
            af.depthMask(false)
        }
        if (ar.bTwoSide) {
            af.disable(2884)
        } else {
            af.enable(2884)
        }
        if (n.iDrawMode == 1) {
            af.lineWidth(ar.fLineWidth)
        }
        if (ar.bBlend) {
            af.blendEquationSeparate(ar.iBlendEquation, ar.iBlendEquationAlpha);
            af.blendFuncSeparate(ar.iBlendSrc, ar.iBlendDest, ar.iBlendSrcAlpha, ar.iBlendDestAlpha)
        }
        if (l || ar.bAlphaTest) {
            x[0] = ar.vEmissive.x;
            x[1] = ar.vEmissive.y;
            x[2] = ar.vEmissive.z;
            x[3] = ar.fGlossiness;
            x[4] = ar.vAmbient.x;
            x[5] = ar.vAmbient.y;
            x[6] = ar.vAmbient.z;
            x[7] = ar.fSpecularLevel;
            x[8] = ar.vDiffuse.x;
            x[9] = ar.vDiffuse.y;
            x[10] = ar.vDiffuse.z;
            x[11] = ar.fAlpha;
            x[12] = ar.vSpecular.x;
            x[13] = ar.vSpecular.y;
            x[14] = ar.vSpecular.z;
            x[15] = ar.fAlphaTestValue;
            x[168] = ar.vGlowColor.x;
            x[169] = ar.vGlowColor.y;
            x[170] = ar.vGlowColor.z
        }
        if (m) {
            var d = Z.getRenderTarget("ShadowProj");
            if (ao && d) {
                a.setSampler("okUni_shadowSampler", C);
                d.bind(C);
                af.texParameteri(3553, 10240, 9729);
                af.texParameteri(3553, 10241, 9729);
                af.texParameteri(3553, 10242, 33071);
                af.texParameteri(3553, 10243, 33071);
                C += 1
            }
            var P = new Array;
            var f = new Array;
            var ai = n.getRefDctLightNum();
            if (ai != 0) {
                var O = new Array;
                var ad = new Array;
                var V = n.aDctLightListRef.getRoot();
                var ae = 0;
                while (V) {
                    var J = V.data;
                    var ab = J.getLightDir();
                    var Y = J.getColor();
                    x[(8 + ae) * 4] = ab.x;
                    x[(8 + ae) * 4 + 1] = ab.y;
                    x[(8 + ae) * 4 + 2] = ab.z;
                    x[(8 + ae) * 4 + 3] = okPackVec3ToFloat(Y);
                    if (ao) {
                        x[(12 + ae) * 4] = J.iShadowIdx == 0 ? 1 : 0;
                        x[(12 + ae) * 4 + 1] = J.iShadowIdx == 1 ? 1 : 0;
                        x[(12 + ae) * 4 + 2] = J.iShadowIdx == 2 ? 1 : 0;
                        x[(12 + ae) * 4 + 3] = J.iShadowIdx == 3 ? 1 : 0
                    }
                    ae += 1;
                    if (ae == 4) {
                        break
                    }
                    V = V.next
                }
            }
            var ak = n.getRefPointLightNum();
            if (ak != 0) {
                var V = n.aPointLightListRef.getRoot();
                var ae = 0;
                while (V) {
                    var J = V.data;
                    var D = J.getPos();
                    var B = J.getRange();
                    var Y = J.getColor();
                    x[(16 + ae) * 4] = D.x;
                    x[(16 + ae) * 4 + 1] = D.y;
                    x[(16 + ae) * 4 + 2] = D.z;
                    x[(16 + ae) * 4 + 3] = B;
                    x[(24 + ae) * 4 + 3] = okPackVec3ToFloat(Y);
                    if (ao) {
                        x[(20 + ae) * 4] = J.iShadowIdx == 0 ? 1 : 0;
                        x[(20 + ae) * 4 + 1] = J.iShadowIdx == 1 ? 1 : 0;
                        x[(20 + ae) * 4 + 2] = J.iShadowIdx == 2 ? 1 : 0;
                        x[(20 + ae) * 4 + 3] = J.iShadowIdx == 3 ? 1 : 0
                    }
                    ae += 1;
                    if (ae == 4) {
                        break
                    }
                    V = V.next
                }
            }
            var M = n.getRefSpotLightNum();
            if (M != 0) {
                var V = n.aSpotLightListRef.getRoot();
                var ae = 0;
                while (V) {
                    var J = V.data;
                    var D = J.getPos();
                    var ab = J.getLightDir();
                    var aq = J.getInnerCone() * Math.PI / 180;
                    var k = J.getOuterCone() * Math.PI / 180;
                    var Y = J.getColor();
                    x[(24 + ae) * 4] = D.x;
                    x[(24 + ae) * 4 + 1] = D.y;
                    x[(24 + ae) * 4 + 2] = D.z;
                    x[(28 + ae) * 4] = ab.x;
                    x[(28 + ae) * 4 + 1] = ab.y;
                    x[(28 + ae) * 4 + 2] = ab.z;
                    x[(28 + ae) * 4 + 3] = okPackVec3ToFloat(Y);
                    x[(32 + ae) * 4] = aq;
                    x[(32 + ae) * 4 + 1] = k;
                    if (ao) {
                        x[(36 + ae) * 4] = J.iShadowIdx == 0 ? 1 : 0;
                        x[(36 + ae) * 4 + 1] = J.iShadowIdx == 1 ? 1 : 0;
                        x[(36 + ae) * 4 + 2] = J.iShadowIdx == 2 ? 1 : 0;
                        x[(36 + ae) * 4 + 3] = J.iShadowIdx == 3 ? 1 : 0
                    }
                    ae += 1;
                    if (ae == 4) {
                        break
                    }
                    V = V.next
                }
            }
        }
        if (l || m || ar.bAlphaTest) {
            a.setUniformFloat4Array("okUni_General", x)
        }
        if (y || ar.bAlphaTest) {
            var F = false;
            var N = false;
            var ap = [0, 0, 0, 0, 0, 0, 0];
            var L = [0, 0, 0, 0];
            for (var al = 0; al < 7; ++al) {
                if (ar.aTextureResIdList[al] != -1) {
                    var E = Q.getResource(ar.aTextureResIdList[al]);
                    var c = E.isValid();
                    if (c) {
                        E.bind(C)
                    } else {
                        R.bind(C)
                    }
                    if (E.getType() == 3553) {
                        if (c) {
                            var K = E.isMipMap();
                            af.texParameteri(3553, 10240, ar.aTextureFilterList[al]);
                            if (ar.aTextureFilterList[al] == 9729) {
                                if (K) {
                                    af.texParameteri(3553, 10241, 9985)
                                } else {
                                    af.texParameteri(3553, 10241, 9729)
                                }
                            } else {
                                af.texParameteri(3553, 10241, ar.aTextureFilterList[al])
                            }
                        } else {
                            af.texParameteri(3553, 10240, 9728);
                            af.texParameteri(3553, 10241, 9728)
                        }
                        af.texParameteri(3553, 10242, ar.aTextureWrapUList[al]);
                        af.texParameteri(3553, 10243, ar.aTextureWrapVList[al]);
                        ap[al] = C;
                        F = true
                    } else {
                        if (E.getType() == 34067) {
                            if (c) {
                                var K = E.isMipMap();
                                af.texParameteri(34067, 10240, ar.aTextureFilterList[al]);
                                if (ar.aTextureFilterList[al] == 9729) {
                                    if (K) {
                                        af.texParameteri(34067, 10241, 9985)
                                    } else {
                                        af.texParameteri(34067, 10241, 9729)
                                    }
                                } else {
                                    af.texParameteri(34067, 10241, ar.aTextureFilterList[al])
                                }
                            } else {
                                af.texParameteri(3553, 10240, 9728);
                                af.texParameteri(3553, 10241, 9728)
                            }
                            af.texParameteri(34067, 10242, ar.aTextureWrapUList[al]);
                            af.texParameteri(34067, 10243, ar.aTextureWrapVList[al]);
                            L[al] = C;
                            N = true
                        }
                    }
                    C += 1
                }
            }
            if (F) {
                a.setSamplerArray("okUni_Sampler2D", ap)
            }
            if (N) {
                a.setSamplerArray("okUni_SamplerCube", L)
            }
            var o = A.Texcoord1;
            var t = A.Texcoord2;
            if (o && t && o.buf == t.buf && o.iIdx == t.iIdx - 1) {
                a.setAttribute("okAttr_TC12", o.buf, o.iSize + t.iSize, o.iOffset, o.iStride)
            } else {
                if (o) {
                    a.setAttribute("okAttr_TC1", o.buf, o.iSize, o.iOffset, o.iStride)
                } else {
                    if (t) {
                        a.setAttribute("okAttr_TC2", t.buf, t.iSize, t.iOffset, t.iStride)
                    }
                }
            }
            var s = A.Texcoord3;
            var u = A.Texcoord4;
            if (s && u && s.buf == u.buf && s.iIdx == u.iIdx - 1) {
                a.setAttribute("okAttr_TC34", s.buf, s.iSize + s.iSize, s.iOffset, s.iStride)
            } else {
                if (s) {
                    a.setAttribute("okAttr_TC3", s.buf, s.iSize, s.iOffset, s.iStride)
                } else {
                    if (u) {
                        a.setAttribute("okAttr_TC4", u.buf, u.iSize, u.iOffset, u.iStride)
                    }
                }
            }
            var q = A[ar.aTangentAttribList[4]];
            if (q) {
                a.setAttribute("okAttr_Tangent", q.buf, q.iSize, q.iOffset, q.iStride)
            }
            var aj = A[ar.aBinormalAttribList[4]];
            if (aj) {
                a.setAttribute("okAttr_Binormal", aj.buf, aj.iSize, aj.iOffset, aj.iStride)
            }
        }
        if (n.aBoneMatList) {
            var ag = A[n.sBoneIdxAttribName];
            var w = A[n.sBoneWeightAttribName];
            a.setAttribute("okAttr_BoneIdx", ag.buf, ag.iSize, ag.iOffset, ag.iStride);
            a.setAttribute("okAttr_BoneWeight", w.buf, w.iSize, w.iOffset, w.iStride);
            a.setUniformMat43Array("okUni_BoneMat", n.aBoneMatList, false)
        }
        if (an) {
            an(af, n)
        }
        n.index.drawIndex(n.iDrawMode, n.iDrawStart, n.iDrawCount)
    }
    af.enable(2929);
    af.depthMask(true);
    af.enable(2884);
    okAllocator._array(x)
};

function okRenderDepthStage() {
    okBaseCall(this);
    this.depthFbo = null;
    this.depthTex = null;
    this.depthBuffer = null
}

okExtend(okRenderDepthStage, okRenderBaseStage);
okRenderDepthStage.prototype.createResource = function () {
    var c = this.renderer.rc;
    var d = this.renderer.renderEnv;
    var a = this.renderer.renderTargetCollector;
    if (this.depthTex == null) {
        this.depthTex = new okTexture(c)
    }
    this.depthTex.createTexture(3553, d.iCanvasWidth, d.iCanvasHeight, 6408);
    a.setRenderTarget("DTex", this.depthTex);
    if (this.depthStencilBuffer == null) {
        this.depthStencilBuffer = new okRenderBuffer(c)
    }
    this.depthStencilBuffer.createBuffer(34041, d.iCanvasWidth, d.iCanvasHeight);
    a.setRenderTarget("DSBuf", this.depthStencilBuffer);
    if (this.depthFbo == null) {
        this.depthFbo = new okFrameBuffer(c)
    }
    this.depthFbo.createBuffer();
    this.depthFbo.bind();
    this.depthFbo.attachRenderTexture(0, this.depthTex);
    this.depthFbo.attachDepthStencilBuffer(this.depthStencilBuffer);
    this.depthFbo.unbind()
};
okRenderDepthStage.prototype.deleteResource = function () {
    var c = this.renderer.rc;
    var d = this.renderer.renderEnv;
    var a = this.renderer.renderTargetCollector;
    if (this.depthTex) {
        this.depthTex.releaseTexture();
        a.setRenderTarget("DTex", null)
    }
    if (this.depthStencilBuffer) {
        this.depthStencilBuffer.releaseBuffer();
        a.setRenderTarget("DSBuf", null)
    }
    if (this.depthFbo) {
        this.depthFbo.releaseBuffer()
    }
};
okRenderDepthStage.prototype.beginView = function (a) {
    var d = this.renderer.rc;
    var c = this.renderer.renderEnv.camera;
    if (a != true) {
        this.depthFbo.bind();
        c.bindViewport();
        d.clearColor(1, 1, 1, 1);
        d.clearDepth(1);
        d.clear(16384 | 256 | 1024);
        this.depthFbo.unbind()
    }
};
okRenderDepthStage.prototype.endView = function () {
};
okRenderDepthStage.prototype.render = function () {
    var d = this.renderer.rc;
    var e = this.renderer.renderEnv;
    var a = this.renderer.renderSourceCollector;
    this.depthFbo.bind();
    e.camera.bindViewport();
    d.enable(2929);
    d.depthFunc(515);
    d.enable(2884);
    d.depthMask(true);
    var c = a.getBatchList("Visible_Opaque");
    if (c.length > 0) {
        this._renderBatches(c, "Depth", false, false, false, this._clipBatch)
    }
    this.depthFbo.unbind()
};
okRenderDepthStage.prototype._clipBatch = function (a) {
    return a.materialRef.bDepthWrite
};

function okRenderShadowStage() {
    okBaseCall(this);
    this.aShadowCasterList = new Array;
    this.iDepthTexSize = 512;
    this.lightFbo = null;
    this.lightTex = null;
    this.lightDepthBuffer = null;
    this.projFbo = null;
    this.projTex = null;
    this.frustumMask = null;
    this.frustumIndexBuf = null;
    this.tempSamplerArray = [0, 1]
}

okExtend(okRenderShadowStage, okRenderBaseStage);
okRenderShadowStage.prototype.clear = function () {
    this.aShadowCasterList.length = 0;
    okBaseCall(this, "clear")
};
okRenderShadowStage.prototype.createResource = function () {
    var d = this.renderer.rc;
    var e = this.renderer.renderEnv;
    var c = this.renderer.renderSourceCollector;
    var a = this.renderer.renderTargetCollector;
    if (this.lightTex == null) {
        this.lightTex = new okTexture(d)
    }
    this.lightTex.createTexture(3553, Math.min(this.iDepthTexSize, e.iCanvasWidth), Math.min(this.iDepthTexSize, e.iCanvasHeight), 6408);
    a.setRenderTarget("ShadowDepth", this.lightTex);
    if (this.lightDepthBuffer == null) {
        this.lightDepthBuffer = new okRenderBuffer(d)
    }
    this.lightDepthBuffer.createBuffer(33189, Math.min(this.iDepthTexSize, e.iCanvasWidth), Math.min(this.iDepthTexSize, e.iCanvasHeight));
    if (this.lightFbo == null) {
        this.lightFbo = new okFrameBuffer(d)
    }
    this.lightFbo.createBuffer();
    this.lightFbo.bind();
    this.lightFbo.attachRenderTexture(0, this.lightTex);
    this.lightFbo.attachDepthBuffer(this.lightDepthBuffer);
    this.lightFbo.unbind();
    if (this.projTex == null) {
        this.projTex = new okTexture(d)
    }
    this.projTex.createTexture(3553, e.iCanvasWidth, e.iCanvasHeight, 6408);
    a.setRenderTarget("ShadowProj", this.projTex);
    if (this.projFbo == null) {
        this.projFbo = new okFrameBuffer(d)
    }
    this.projFbo.createBuffer();
    this.projFbo.bind();
    this.projFbo.attachRenderTexture(0, this.projTex);
    this.projFbo.attachDepthStencilBuffer(a.getRenderTarget("DSBuf"));
    this.projFbo.unbind();
    if (this.frustumMask == null) {
        this.frustumMask = [new okArrayBuffer(d), new okArrayBuffer(d)]
    }
    this.frustumMask[0].createBuffer(34962, 5126, 35044, new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    this.frustumMask[1].createBuffer(34962, 5126, 35044, new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
    if (this.frustumIndexBuf == null) {
        this.frustumIndexBuf = new okArrayBuffer(d)
    }
    this.frustumIndexBuf.createBuffer(34963, 5123, 35044, new Uint16Array([0, 1, 2, 0, 2, 3, 1, 5, 6, 1, 6, 2, 3, 2, 6, 3, 6, 7, 4, 0, 3, 4, 3, 7, 4, 5, 1, 4, 1, 0, 4, 7, 6, 4, 6, 5]))
};
okRenderShadowStage.prototype.deleteResource = function () {
    var d = this.renderer.rc;
    var e = this.renderer.renderEnv;
    var c = this.renderer.renderSourceCollector;
    var a = this.renderer.renderTargetCollector;
    if (this.lightTex) {
        this.lightTex.releaseTexture();
        a.setRenderTarget("ShadowDepth", null)
    }
    if (this.lightDepthBuffer) {
        this.lightDepthBuffer.releaseBuffer()
    }
    if (this.lightFbo) {
        this.lightFbo.releaseBuffer()
    }
    if (this.projTex) {
        this.projTex.releaseTexture();
        a.setRenderTarget("ShadowProj", null)
    }
    if (this.projFbo) {
        this.projFbo.releaseBuffer()
    }
    if (this.frustumMask[0]) {
        this.frustumMask[0].releaseBuffer()
    }
    if (this.frustumMask[1]) {
        this.frustumMask[1].releaseBuffer()
    }
    if (this.frustumIndexBuf) {
        this.frustumIndexBuf.releaseBuffer()
    }
};
okRenderShadowStage.prototype.beginView = function () {
};
okRenderShadowStage.prototype.endView = function () {
};
okRenderShadowStage.prototype.render = function () {
    var y = this.renderer.rc;
    var F = this.renderer.renderEnv;
    var q = this.renderer.shaderManager;
    var K = F.scene;
    var J = K.getZone();
    var d = this.renderer.renderSourceCollector;
    var H = this.renderer.renderTargetCollector;
    var E = F.camera;
    var D = E.getPos();
    var u = Math.min(F.iCanvasWidth, this.iDepthTexSize);
    var t = Math.min(F.iCanvasHeight, this.iDepthTexSize);
    var x = E.getViewInvMat4();
    x.m03 = x.m13 = x.m23 = 0;
    if (!F.bShadow || !K) {
        return
    }
    this.aShadowCasterList.length = 0;
    var m = J.aLightList;
    var n = 0;
    var M = m.getRoot();
    while (M) {
        var e = M.data;
        if (!e.bCastShadow || !e.bVisible) {
            e.iShadowIdx = 3
        } else {
            e.iShadowIdx = n;
            n += 1;
            var v = e.__aAffectEntityList.getRoot();
            while (v) {
                var o = v.data;
                if ((o.getType() & (1 | 2 | 32 | 64 | 128 | 256)) && o.bVisible && o.bCastShadow && o.getState() != 1) {
                    this._genShadowCaster(e, o, F)
                }
                v = v.next
            }
        }
        M = M.next
    }
    var A = this.aShadowCasterList.length;
    var k = 0;
    var I = new okLayout2DHelper(u, t);
    for (var C = 0; C < A; ++C) {
        var h = this.aShadowCasterList[C];
        var z = new okVec2(0, 0);
        if (h.fRatio >= 1) {
            z.x = Math.min(u, h.fResolution * Math.max(F.camera.getViewportWidth(), F.camera.getViewportHeight()));
            z.y = Math.min(t, z.x / h.fRatio)
        } else {
            z.y = Math.min(t, h.fResolution * Math.max(F.camera.getViewportWidth(), F.camera.getViewportHeight()));
            z.x = Math.min(u, z.y * h.fRatio)
        }
        z.x = Math.max(8, z.x);
        z.y = Math.max(8, z.y);
        h.rTexLayout = I.add(z.x, z.y);
        if (h.rTexLayout == null) {
            h.bNextPass = true;
            I.reset(u, t);
            h.rTexLayout = I.add(z.x, z.y)
        }
        h.rTexLayout.width = Math.min(h.rTexLayout.width, F.iCanvasWidth);
        h.rTexLayout.height = Math.min(h.rTexLayout.height, F.iCanvasHeight);
        h.rTexLayout.width -= 3;
        h.rTexLayout.height -= 3;
        h.rTexLayout.width = okAlign(h.rTexLayout.width, 4);
        h.rTexLayout.height = okAlign(h.rTexLayout.height, 4);
        h.rTexLayout.x += 2;
        h.rTexLayout.y += 2;
        h.rTexLayout.width -= 2;
        h.rTexLayout.height -= 2;
        var a = new okVec2(h.rTexLayout.x / u, h.rTexLayout.y / t);
        var w = new okVec2(h.rTexLayout.width / u, h.rTexLayout.height / t);
        var B = new okMat4();
        h.mLightViewProjMat.clone(B);
        B.m00 = (B.m00 + B.m30) / 2;
        B.m01 = (B.m01 + B.m31) / 2;
        B.m02 = (B.m02 + B.m32) / 2;
        B.m03 = (B.m03 + B.m33) / 2;
        B.m00 = B.m00 * w.x + B.m30 * a.x;
        B.m01 = B.m01 * w.x + B.m31 * a.x;
        B.m02 = B.m02 * w.x + B.m32 * a.x;
        B.m03 = B.m03 * w.x + B.m33 * a.x;
        B.m10 = (B.m10 + B.m30) / 2;
        B.m11 = (B.m11 + B.m31) / 2;
        B.m12 = (B.m12 + B.m32) / 2;
        B.m13 = (B.m13 + B.m33) / 2;
        B.m10 = B.m10 * w.y + B.m30 * a.y;
        B.m11 = B.m11 * w.y + B.m31 * a.y;
        B.m12 = B.m12 * w.y + B.m32 * a.y;
        B.m13 = B.m13 * w.y + B.m33 * a.y;
        h.mShadowMat = B
    }
    this.projFbo.bind();
    E.bindViewport();
    y.clearColor(1, 1, 1, 1);
    y.clear(16384 | 1024);
    var p = H.getRenderTarget("DTex");
    var f = 0;
    while (f < A) {
        this.lightFbo.bind();
        y.viewport(0, 0, u, t);
        y.scissor(0, 0, u, t);
        y.clearColor(1, 1, 1, 1);
        y.clear(16384 | 256);
        y.enable(2929);
        y.depthFunc(515);
        var s = 0;
        for (s = f; s < A; ++s) {
            var h = this.aShadowCasterList[s];
            if (h.bNextPass) {
                h.bNextPass = false;
                break
            }
            var G = h.rTexLayout;
            y.viewport(G.x, G.y, G.width, G.height);
            var L = h.aBatchList;
            if (L.length > 0) {
                this._renderBatches(L, "ShadowDepth", false, false, false, null, this._setDepthBatch, h.mLightViewProjMat)
            }
        }
        this.projFbo.bind();
        E.bindViewport();
        for (var C = f; C < s; ++C) {
            var h = this.aShadowCasterList[C];
            var c = h.light;
            y.enable(2929);
            y.disable(2884);
            y.enable(2960);
            y.stencilFunc(519, 0, 4294967295);
            y.stencilOpSeparate(1028, 7680, 34056, 7680);
            y.stencilOpSeparate(1029, 7680, 34055, 7680);
            y.colorMask(false, false, false, false);
            y.depthMask(false);
            var l = q.getShadowVolumeProgram();
            l.bind();
            l.setAttribute("vertMask0", this.frustumMask[0], 4);
            l.setAttribute("vertMask1", this.frustumMask[1], 4);
            if (h.lightFrustum.bPointDirty) {
                h.lightFrustum._genPointList()
            }
            l.setUniformVec3Array("vertList", h.lightFrustum.aPointList);
            l.setUniformMat4("matViewProj", E.getViewProjMat4());
            this.frustumIndexBuf.drawIndex(4);
            y.disable(2929);
            y.stencilFunc(517, 0, 4294967295);
            y.stencilOp(7680, 7680, 7681);
            y.enable(3042);
            y.blendFuncSeparate(774, 0, 772, 0);
            y.colorMask(c.iShadowIdx == 0, c.iShadowIdx == 1, c.iShadowIdx == 2, false);
            var l = q.getShadowFinalProgram();
            l.bind();
            l.setAttribute("vertMask0", this.frustumMask[0], 4);
            l.setAttribute("vertMask1", this.frustumMask[1], 4);
            l.setUniformVec3Array("vertList", h.lightFrustum.aPointList);
            E.getViewProjMat4().clone(this.__aMatArray[0]);
            E.getViewProjInvMat4().clone(this.__aMatArray[1]);
            h.mShadowMat.clone(this.__aMatArray[2]);
            l.setUniformMat4Array("matArray", this.__aMatArray);
            l.setUniformFloat4("screenPosOffsetAndScale", E.iViewportX / this.projTex.getSizeU(), (y.canvas.clientHeight - E.iViewportY - E.iViewportHeight) / this.projTex.getSizeV(), E.iViewportWidth / this.projTex.getSizeU(), E.iViewportHeight / this.projTex.getSizeV());
            l.setUniformFloat3("shadowPixelSizeAndOffset", 1 / u, 1 / t, Math.max(e.fShadowFadeFactor, h.entity.fShadowFadeFactor));
            l.setSamplerArray("samplerArray", this.tempSamplerArray);
            p.bind(0);
            y.texParameteri(3553, 10240, 9728);
            y.texParameteri(3553, 10241, 9728);
            y.texParameteri(3553, 10242, 33071);
            y.texParameteri(3553, 10243, 33071);
            this.lightTex.bind(1);
            y.texParameteri(3553, 10240, 9728);
            y.texParameteri(3553, 10241, 9728);
            y.texParameteri(3553, 10242, 33071);
            y.texParameteri(3553, 10243, 33071);
            this.frustumIndexBuf.drawIndex(4);
            y.disable(3042);
            y.enable(2929);
            f += 1
        }
        y.enable(2884);
        y.disable(2960);
        y.depthMask(true);
        y.colorMask(true, true, true, true);
        this.projFbo.unbind();
        E.bindViewport()
    }
};
okRenderShadowStage.prototype._setDepthBatch = function (c, a) {
    c.enable(2929)
};
okRenderShadowStage.prototype._genShadowCaster = function (k, u, H) {
    var F = H.camera;
    if (k.getType() == 4) {
        var G = k.getMat43();
        G.setColumn(3, 0, 0, 0);
        var p = k.getInvMat43();
        var a = u.getBoundingBox();
        var B = new okVec3(1000000, 1000000, 1000000);
        var A = new okVec3(-1000000, -1000000, -1000000);
        for (var D = 0; D < 8; ++D) {
            var t = a.getPoint(D);
            var z = okMat43MulVec3(p, t);
            B = okVec3Min(B, z);
            A = okVec3Max(A, z)
        }
        var w = okVec3MulVal(okVec3Add(B, A), 0.5);
        w.z = A.z + 0.1;
        var n = okVec3Sub(A, B);
        G.setColumn(3, okMat43MulVec3(G, w));
        p = G.inverse();
        var q = new okShadowCaster();
        q.entity = u;
        q.light = k;
        q.aBatchList = new Array;
        u.genRenderBatch(q.aBatchList, H);
        q.mLightViewMat = new okMat4();
        p.toMat4(q.mLightViewMat);
        q.mLightViewProjMat = okMat4Mul(okMat4Ortho(-n.x * 0.5, n.x * 0.5, n.y * 0.5, -n.y * 0.5, 0.1, n.z + 0.1), q.mLightViewMat);
        var h = 0.1, s = n.z + 0.1;
        q.mLightViewProjMat.m20 = -p.m20 / (s - h);
        q.mLightViewProjMat.m21 = -p.m21 / (s - h);
        q.mLightViewProjMat.m22 = -p.m22 / (s - h);
        q.mLightViewProjMat.m23 = (-p.m23 - h) / (s - h);
        q.lightFrustum = new okFrustum();
        q.lightFrustum.setByViewProjMat(okMat4Mul(okMat4Ortho(-n.x * 0.5, n.x * 0.5, n.y * 0.5, -n.y * 0.5, 0.1, 10000), q.mLightViewMat));
        q.fRatio = n.x / n.y;
        var C = okVec3Sub(a.vMax, a.vMin).len();
        var y = new okVec4((a.vMax.x + a.vMin.x) * 0.5, (a.vMax.y + a.vMin.y) * 0.5, (a.vMax.z + a.vMin.z) * 0.5, 1);
        var f = okMat4MulVec4(F.getViewProjMat4(), y);
        q.fResolution = u.fShadowResolution * C / Math.max(1, Math.abs(f.w));
        this.aShadowCasterList.push(q)
    } else {
        if (k.getType() == 16) {
            var G = k.getMat43();
            var p = G.inverse();
            var a = u.getBoundingBox();
            var B = new okVec3(1000000, 1000000, 1000000);
            var A = new okVec3(-1000000, -1000000, -1000000);
            for (var D = 0; D < 8; ++D) {
                var t = a.getPoint(D);
                var z = okMat43MulVec3(p, t);
                B = okVec3Min(B, z);
                A = okVec3Max(A, z)
            }
            var q = new okShadowCaster();
            q.entity = u;
            q.light = k;
            q.aBatchList = new Array;
            u.genRenderBatch(q.aBatchList, H);
            q.mLightViewMat = new okMat4();
            p.toMat4(q.mLightViewMat);
            q.fRatio = 1;
            var s = -B.z + 0.1, h = Math.max(0.1, -A.z);
            q.mLightViewProjMat = okMat4Mul(okMat4Proj(k.getOuterCone(), 1, h, s), q.mLightViewMat);
            q.mLightViewProjMat.m20 = -q.mLightViewMat.m20 / (s - h);
            q.mLightViewProjMat.m21 = -q.mLightViewMat.m21 / (s - h);
            q.mLightViewProjMat.m22 = -q.mLightViewMat.m22 / (s - h);
            q.mLightViewProjMat.m23 = (-q.mLightViewMat.m23 - h) / (s - h);
            q.lightFrustum = new okFrustum();
            q.lightFrustum.setByViewProjMat(okMat4Mul(okMat4Proj(k.getOuterCone(), 1, h, k.fRange), q.mLightViewMat));
            var C = okVec3Sub(a.vMax, a.vMin).len();
            var y = new okVec4((a.vMax.x + a.vMin.x) * 0.5, (a.vMax.y + a.vMin.y) * 0.5, (a.vMax.z + a.vMin.z) * 0.5, 1);
            var f = okMat4MulVec4(F.getViewProjMat4(), y);
            q.fResolution = u.fShadowResolution * C / Math.max(1, Math.abs(f.w));
            this.aShadowCasterList.push(q)
        } else {
            if (k.getType() == 8) {
                var l = okVec3Sub(k.getPos(), u.getPos());
                var m = new okVec3(0, 1, 0);
                var o = okVec3Cross(m, l);
                if (o.equal(OAK.VEC3_ZERO)) {
                    m.set(1, 0, 0);
                    o = okVec3Cross(m, l)
                }
                m = okVec3Cross(l, o);
                o = o.normalize();
                m = m.normalize();
                l = l.normalize();
                var G = new okMat43();
                G.setColumn(0, o);
                G.setColumn(1, m);
                G.setColumn(2, l);
                G.setColumn(3, k.getPos());
                var p = G.inverse();
                var a = u.getBoundingBox();
                var B = new okVec3(1000000, 1000000, 1000000);
                var A = new okVec3(-1000000, -1000000, -1000000);
                var e = 0, d = 0;
                for (var D = 0; D < 8; ++D) {
                    var t = a.getPoint(D);
                    var z = okMat43MulVec3(p, t);
                    B = okVec3Min(B, z);
                    A = okVec3Max(A, z);
                    e = Math.max(e, Math.atan(Math.abs(z.x) / Math.max(0.1, -z.z)));
                    d = Math.max(d, Math.atan(Math.abs(z.y) / Math.max(0.1, -z.z)))
                }
                if (Math.max(e, d) < 120 * Math.PI / 180) {
                    var q = new okShadowCaster();
                    q.entity = u;
                    q.light = k;
                    q.aBatchList = new Array;
                    u.genRenderBatch(q.aBatchList, H);
                    q.mLightViewMat = new okMat4();
                    p.toMat4(q.mLightViewMat);
                    q.fRatio = Math.tan(e) / Math.tan(d);
                    var s = -B.z + 0.1, h = Math.max(0.1, -A.z);
                    q.mLightViewProjMat = okMat4Mul(okMat4Proj(d * 2 * 180 / Math.PI, q.fRatio, h, s), q.mLightViewMat);
                    q.mLightViewProjMat.m20 = -q.mLightViewMat.m20 / (s - h);
                    q.mLightViewProjMat.m21 = -q.mLightViewMat.m21 / (s - h);
                    q.mLightViewProjMat.m22 = -q.mLightViewMat.m22 / (s - h);
                    q.mLightViewProjMat.m23 = (-q.mLightViewMat.m23 - h) / (s - h);
                    q.lightFrustum = new okFrustum();
                    q.lightFrustum.setByViewProjMat(okMat4Mul(okMat4Proj(d * 2 * 180 / Math.PI, q.fRatio, h, k.fRange), q.mLightViewMat));
                    var C = okVec3Sub(a.vMax, a.vMin).len();
                    var y = new okVec4((a.vMax.x + a.vMin.x) * 0.5, (a.vMax.y + a.vMin.y) * 0.5, (a.vMax.z + a.vMin.z) * 0.5, 1);
                    var f = okMat4MulVec4(F.getViewProjMat4(), y);
                    q.fResolution = u.fShadowResolution * C / Math.max(1, Math.abs(f.w));
                    this.aShadowCasterList.push(q)
                } else {
                    var I = [new okMat43(), new okMat43(), new okMat43(), new okMat43(), new okMat43(), new okMat43()];
                    var x = k.getPos();
                    I[0].setColumn(0, 0, 1, 0);
                    I[0].setColumn(1, 0, 0, 1);
                    I[0].setColumn(2, 1, 0, 0);
                    I[0].setColumn(3, x);
                    I[1].setColumn(0, 0, -1, 0);
                    I[1].setColumn(1, 0, 0, 1);
                    I[1].setColumn(2, -1, 0, 0);
                    I[1].setColumn(3, x);
                    I[2].setColumn(0, -1, 0, 0);
                    I[2].setColumn(1, 0, 0, 1);
                    I[2].setColumn(2, 0, 1, 0);
                    I[2].setColumn(3, x);
                    I[3].setColumn(0, 1, 0, 0);
                    I[3].setColumn(1, 0, 0, 1);
                    I[3].setColumn(2, 0, -1, 0);
                    I[3].setColumn(3, x);
                    I[4].setColumn(0, 1, 0, 0);
                    I[4].setColumn(1, 0, 1, 0);
                    I[4].setColumn(2, 0, 0, 1);
                    I[4].setColumn(3, x);
                    I[5].setColumn(0, 1, 0, 0);
                    I[5].setColumn(1, 0, -1, 0);
                    I[5].setColumn(2, 0, 0, -1);
                    I[5].setColumn(3, x);
                    var c = [I[0].inverse(), I[1].inverse(), I[2].inverse(), I[3].inverse(), I[4].inverse(), I[5].inverse()];
                    for (var D = 0; D < 6; ++D) {
                        var p = c[D];
                        var a = u.getBoundingBox();
                        var B = new okVec3(1000000, 1000000, 1000000);
                        var A = new okVec3(-1000000, -1000000, -1000000);
                        var e = 0, d = 0;
                        for (var D = 0; D < 8; ++D) {
                            var t = a.getPoint(D);
                            var z = okMat43MulVec3(p, t);
                            B = okVec3Min(B, z);
                            A = okVec3Max(A, z)
                        }
                        var s = -B.z + 0.1, h = Math.max(0.1, -A.z);
                        if (s < 0.1) {
                            continue
                        }
                        var E = new okFrustum();
                        E.setByViewProjMat(okMat4Mul(okMat4Proj(91, 1, h, k.fRange), p));
                        if (E.collideAABBox(a) == 0) {
                            continue
                        }
                        var q = new okShadowCaster();
                        q.entity = u;
                        q.light = k;
                        q.aBatchList = new Array;
                        u.genRenderBatch(q.aBatchList, H);
                        q.mLightViewMat = new okMat4();
                        p.toMat4(q.mLightViewMat);
                        q.fRatio = 1;
                        q.mLightViewProjMat = okMat4Mul(okMat4Proj(d * 2 * 180 / Math.PI, q.fRatio, h, s), q.mLightViewMat);
                        q.mLightViewProjMat.m20 = -q.mLightViewMat.m20 / (s - h);
                        q.mLightViewProjMat.m21 = -q.mLightViewMat.m21 / (s - h);
                        q.mLightViewProjMat.m22 = -q.mLightViewMat.m22 / (s - h);
                        q.mLightViewProjMat.m23 = (-q.mLightViewMat.m23 - h) / (s - h);
                        q.lightFrustum = E;
                        var C = okVec3Sub(a.vMax, a.vMin).len();
                        var y = new okVec4((a.vMax.x + a.vMin.x) * 0.5, (a.vMax.y + a.vMin.y) * 0.5, (a.vMax.z + a.vMin.z) * 0.5, 1);
                        var f = okMat4MulVec4(F.getViewProjMat4(), y);
                        q.fResolution = u.fShadowResolution * C / Math.max(1, Math.abs(f.w));
                        this.aShadowCasterList.push(q)
                    }
                }
            }
        }
    }
};

function okShadowCaster() {
    this.entity = null;
    this.light = null;
    this.aBatchList = null;
    this.mLightMat = null;
    this.mLightViewMat = null;
    this.mLightViewProjMat = null;
    this.lightFrustum = null;
    this.mShadowMat = null;
    this.fRatio = 1;
    this.fResolution = 0;
    this.rTexLayout = null;
    this.bNextPass = false
}

function okRenderLightingStage() {
    okBaseCall(this);
    this.lightFbo = null;
    this.lightTex = null
}

okExtend(okRenderLightingStage, okRenderBaseStage);
okRenderLightingStage.prototype.createResource = function () {
    var c = this.renderer.rc;
    var d = this.renderer.renderEnv;
    var a = this.renderer.renderTargetCollector;
    if (this.lightTex == null) {
        this.lightTex = new okTexture(c)
    }
    this.lightTex.createTexture(3553, d.iCanvasWidth, d.iCanvasHeight, 6408);
    a.setRenderTarget("LTex", this.lightTex);
    if (this.lightFbo == null) {
        this.lightFbo = new okFrameBuffer(c)
    }
    this.lightFbo.createBuffer();
    this.lightFbo.bind();
    this.lightFbo.attachRenderTexture(0, this.lightTex);
    this.lightFbo.attachDepthStencilBuffer(a.getRenderTarget("DSBuf"));
    this.lightFbo.unbind()
};
okRenderLightingStage.prototype.deleteResource = function () {
    var c = this.renderer.rc;
    var d = this.renderer.renderEnv;
    var a = this.renderer.renderTargetCollector;
    if (this.lightTex) {
        this.lightTex.releaseTexture();
        a.setRenderTarget("LTex", null)
    }
    if (this.lightFbo) {
        this.lightFbo.releaseBuffer()
    }
};
okRenderLightingStage.prototype.beginView = function (a) {
    var d = this.renderer.rc;
    var c = this.renderer.renderEnv.camera;
    if (a != true) {
        this.lightFbo.bind();
        c.bindViewport();
        var e = c.getBackColor();
        d.clearColor(e.x, e.y, e.z, e.w);
        d.clear(16384);
        this.lightFbo.unbind()
    }
};
okRenderLightingStage.prototype.endView = function () {
};
okRenderLightingStage.prototype.render = function (f) {
    var e = this.renderer.rc;
    var f = this.renderer.renderEnv;
    var c = this.renderer.renderSourceCollector;
    this.lightFbo.bind();
    f.camera.bindViewport();
    var d = c.getBatchList("Visible_Opaque");
    if (d.length > 0) {
        e.enable(2929);
        if (f.aStageEnableList[0]) {
            e.depthFunc(514)
        } else {
            e.depthFunc(515)
        }
        e.enable(2884);
        e.disable(3042);
        this._renderBatches(d, "Lighting", true, true, true);
        e.depthFunc(515)
    }
    var a = c.getBatchList("Visible_Trans");
    if (a.length > 0) {
        e.enable(3042);
        e.enable(2884);
        this._renderBatches(a, "Lighting", true, true, true);
        e.disable(3042)
    }
    this.lightFbo.unbind()
};

function okRenderPostStage() {
    okBaseCall(this);
    this.postTex = null;
    this.postTex_Half = null;
    this.dsBuffer_Half = null;
    this.postFbo = null
}

okExtend(okRenderPostStage, okRenderBaseStage);
okRenderPostStage.prototype.createResource = function () {
    var c = this.renderer.rc;
    var d = this.renderer.renderEnv;
    var a = this.renderer.renderTargetCollector;
    if (this.postTex == null) {
        this.postTex = new okTexture(c)
    }
    this.postTex.createTexture(3553, d.iCanvasWidth, d.iCanvasHeight, 6408);
    if (this.postTex_Half == null) {
        this.postTex_Half = new okTexture(c)
    }
    this.postTex_Half.createTexture(3553, Math.floor(d.iCanvasWidth * 0.5), Math.floor(d.iCanvasHeight * 0.5), 6408);
    if (this.dsBuffer_Half == null) {
        this.dsBuffer_Half = new okRenderBuffer(c)
    }
    this.dsBuffer_Half.createBuffer(34041, Math.floor(d.iCanvasWidth * 0.5), Math.floor(d.iCanvasHeight * 0.5));
    if (this.postFbo == null) {
        this.postFbo = new okFrameBuffer(c)
    }
    this.postFbo.createBuffer()
};
okRenderPostStage.prototype.deleteResource = function () {
    var c = this.renderer.rc;
    var d = this.renderer.renderEnv;
    var a = this.renderer.renderTargetCollector;
    if (this.postTex) {
        this.postTex.releaseTexture()
    }
    if (this.postTex_Half) {
        this.postTex_Half.releaseTexture()
    }
    if (this.dsBuffer_Half) {
        this.dsBuffer_Half.releaseBuffer()
    }
    if (this.postFbo) {
        this.postFbo.releaseBuffer()
    }
};
okRenderPostStage.prototype.beginView = function (a) {
};
okRenderPostStage.prototype.endView = function () {
};
okRenderPostStage.prototype.render = function () {
    var a = this.renderer.rc;
    var h = this.renderer.renderEnv;
    var o = this.renderer.shaderManager;
    var i = this.renderer.resourceManager;
    var d = this.renderer.renderSourceCollector;
    var p = this.renderer.renderTargetCollector;
    var m = h.camera;
    var k = h.iCanvasWidth;
    var n = h.iCanvasHeight;
    var f = i.getResource("$R$Quad");
    var l = f.getMesh();
    var c = d.getBatchList("Visible_Glow");
    if (c.length > 0) {
        this.postFbo.bind();
        this.postFbo.attachRenderTexture(0, this.postTex);
        this.postFbo.attachDepthStencilBuffer(p.getRenderTarget("DSBuf"));
        a.clearColor(0, 0, 0, 0);
        a.clear(16384);
        a.enable(2929);
        a.depthFunc(515);
        m.bindViewport();
        this._renderBatches(c, "Glow", true, false, false, null, null, null, true);
        a.disable(2929);
        a.depthMask(false);
        this.postFbo.attachRenderTexture(0, this.postTex_Half);
        this.postFbo.attachDepthStencilBuffer(this.dsBuffer_Half);
        a.viewport(0, 0, this.postTex_Half.getSizeU(), this.postTex_Half.getSizeV());
        var e = o.getGaussianProgram(0);
        e.bind();
        e.setAttribute("okAttr_Pos", l.getAttributeArrayBuffer("Position"), 3);
        e.setUniformFloat2("okUni_TexelSize", 1 / this.postTex.getSizeU(), 1 / this.postTex.getSizeV());
        e.setUniformFloat4("okUni_ScreenPosOffsetAndScale", m.iViewportX / k, (n - m.iViewportY - m.iViewportHeight) / n, m.iViewportWidth / k, m.iViewportHeight / n);
        e.setTexture("okUni_Tex", this.postTex, 33071, 9729, 9729);
        l.draw();
        a.enable(3042);
        a.blendEquation(32774);
        a.blendFunc(1, 1);
        this.postFbo.attachRenderTexture(0, p.getRenderTarget("LTex"));
        this.postFbo.attachDepthStencilBuffer(p.getRenderTarget("DSBuf"));
        a.viewport(0, 0, k, n);
        var e = o.getGaussianProgram(1);
        e.bind();
        e.setAttribute("okAttr_Pos", l.getAttributeArrayBuffer("Position"), 3);
        e.setUniformFloat2("okUni_TexelSize", 1 / this.postTex_Half.getSizeU(), 1 / this.postTex_Half.getSizeV());
        e.setUniformFloat4("okUni_ScreenPosOffsetAndScale", 0, 0, 1, 1);
        e.setTexture("okUni_Tex", this.postTex_Half, 33071, 9729, 9729);
        l.draw();
        this.postFbo.unbind();
        a.enable(2929);
        a.depthMask(true);
        a.disable(3042)
    }
};

function okAttribFormat() {
    this.sName = "";
    this.iOffset = 0;
    this.iStride = 0;
    this.iSize = 0;
    this.iIdx = 0;
    this.buf = null
}

okAttribFormat.prototype = {
    clear: function () {
        this.sName = "";
        this.iOffset = 0;
        this.iStride = 0;
        this.iSize = 0;
        this.buf = null
    }
};

function okRenderBatch() {
    this.aAttribFmt = okAllocator.object();
    this.index = null;
    this.iDrawMode = 0;
    this.iDrawStart = 0;
    this.iDrawCount = 0;
    this.materialRef = null;
    this.mMatRef = null;
    this.mMatNRef = null;
    this.aDctLightListRef = null;
    this.aPointLightListRef = null;
    this.aSpotLightListRef = null;
    this.bboxRef = null;
    this.aBoneMatList = null;
    this.sBoneIdxAttribName = null;
    this.sBoneWeightAttribName = null;
    this.bReceiveShadow = true;
    this.bFaceCamera = false;
    this.aResourceIdList = new Array;
    this.fSortKey = 0
}

okRenderBatch.prototype = {
    clear: function () {
        okAllocator._object(this.aAttribFmt);
        this.aAttribFmt = okAllocator.object();
        this.index = null;
        this.iDrawMode = 0;
        this.iDrawStart = 0;
        this.iDrawCount = 0;
        this.materialRef = null;
        this.mMatRef = null;
        this.mMatNRef = null;
        this.aDctLightListRef = null;
        this.aPointLightListRef = null;
        this.aSpotLightListRef = null;
        this.aBoneMatList = null;
        this.sBoneIdxAttribName = null;
        this.sBoneWeightAttribName = null;
        this.bboxRef = null;
        this.bReceiveShadow = true;
        this.bFaceCamera = false;
        this.aResourceIdList.length = 0;
        this.fSortKey = 0
    }, addResourceId: function (a) {
        this.aResourceIdList.push(a)
    }, getRefDctLightNum: function () {
        if (this.aDctLightListRef == null) {
            return 0
        }
        return this.aDctLightListRef.getSize()
    }, getRefPointLightNum: function () {
        if (this.aPointLightListRef == null) {
            return 0
        }
        return this.aPointLightListRef.getSize()
    }, getRefSpotLightNum: function () {
        if (this.aSpotLightListRef == null) {
            return 0
        }
        return this.aSpotLightListRef.getSize()
    }
};

function okRenderSourceCollector() {
    this.aRenderEntityMap = new Object;
    this.aRenderBatchMap = new Object;
    this.aRenderBatchReleaseFlagMap = new Object;
    this.aLightListMap = new Object
}

okRenderSourceCollector.prototype = {
    clear: function () {
        this.aRenderEntityMap = new Object;
        for (var d in this.aRenderBatchMap) {
            var e = this.aRenderBatchMap[d];
            if (this.aRenderBatchReleaseFlagMap[d] == true) {
                var a = e.length;
                for (var c = 0; c < a; ++c) {
                    okAllocator._renderBatch(e[c])
                }
            }
            e.length = 0;
            delete this.aRenderBatchMap[d]
        }
        this.aRenderBatchReleaseFlagMap = new Object;
        this.aLightListMap = new Object
    }, createEntityList: function (a) {
        var c = new Array;
        this.aRenderEntityMap[a] = c;
        return c
    }, clearEntityList: function (a) {
        if (this.aRenderEntityMap[a]) {
            this.aRenderEntityMap[a].length = 0
        }
    }, attachEntity: function (d, a, c) {
        this.aRenderEntityMap[d].push(a)
    }, genBatchList: function (e, l) {
        var k = this.aRenderEntityMap[e];
        var f = l.camera;
        if (k != null) {
            var h = new Array;
            var d = k.length;
            for (var c = 0; c < d; ++c) {
                var a = k[c];
                if (a.bVisible && a.getState(f.getFrustum()) != 1) {
                    a.genRenderBatch(h, l)
                }
            }
            this.aRenderBatchMap[e] = h;
            this.aRenderBatchReleaseFlagMap[e] = false
        }
    }, sortBatchListByCamera: function (k, m, p) {
        var o = m.camera;
        var e = this.aRenderBatchMap[k];
        var f = o.getPos();
        var a = e.length;
        for (var l = 0; l < a; ++l) {
            var h = e[l];
            var q = h.bboxRef;
            var n = q.vMin;
            var s = q.vMax;
            var c = new okVec3((n.x + s.x) * 0.5, (n.y + s.y) * 0.5, (n.z + s.z) * 0.5);
            h.fSortKey = okVec3Len(c, f)
        }
        var d = e.sort(p ? this._N2FSortFunc : this._F2NSortFunc);
        this.aRenderBatchMap[k] = d
    }, getEntityList: function (a) {
        return this.aRenderEntityMap[a]
    }, createBatchList: function (a) {
        this.aRenderBatchReleaseFlagMap[a] = false;
        this.aRenderBatchMap[a] = okAllocator.array();
        return this.aRenderBatchMap[a]
    }, getBatchList: function (a) {
        return this.aRenderBatchMap[a]
    }, enableReleaseBatch: function (c, a) {
        this.aRenderBatchReleaseFlagMap[c] = a
    }, createLightList: function (a) {
        this.aLightListMap[a] = new Array
    }, attachLight: function (c, a) {
        this.aLightListMap[c].push(a)
    }, getLightList: function (a) {
        return this.aLightListMap[a]
    }, _F2NSortFunc: function (d, c) {
        return c.fSortKey - d.fSortKey
    }, _N2FSortFunc: function (d, c) {
        return d.fSortKey - c.fSortKey
    }
};

function okRenderTargetCollector(a) {
    this.rc = a;
    this.aRenderTargetMap = new Object
}

okRenderTargetCollector.prototype = {
    clear: function () {
        for (var a in this.aRenderTargetMap) {
            delete this.aRenderTargetMap[a]
        }
    }, setRenderTarget: function (c, a) {
        this.aRenderTargetMap[c] = a
    }, getRenderTarget: function (a) {
        return this.aRenderTargetMap[a]
    }, setFinalRenderTarget: function () {
        this.rc.bindFramebuffer(36160, null)
    }
};

function okRenderer(h, c, f, l) {
    var a = h.canvas;
    this.rc = c;
    this.resourceManager = f;
    this.sceneManager = l;
    this.shaderManager = new okShaderManager(c);
    if (OAK._SOURCE_PATH) {
        this.shaderManager.setShaderSourcePath(OAK._SOURCE_PATH + "/Engine/Shader")
    }
    this.renderSourceCollector = new okRenderSourceCollector();
    this.renderTargetCollector = new okRenderTargetCollector(c);
    this.renderEnv = new okRenderEnvironment();
    this.renderEnv.canvas = a;
    this.renderEnv.iCanvasWidth = a.clientWidth;
    this.renderEnv.iCanvasHeight = a.clientHeight;
    this.renderEnv.iStartTime = (new Date).getTime();
    this.renderEnv.iCurTime = 0;
    var o = this.resourceManager.createResource(1, "$R$Quad", true);
    this.resourceManager.setCustomResourceState(o, 5);
    var e = this.resourceManager.getResource(o);
    okGenQuadMesh(e.createMesh("Quad"), -1, 1, 1, -1, false, true);
    var k = this.resourceManager.createResource(2, "$R$White", true);
    this.resourceManager.setCustomResourceState(k, 5);
    this.resourceManager.getResource(k).createTexture(3553, 1, 1, 6408, 5121, [255, 255, 255, 255]);
    var m = this.resourceManager.createResource(2, "$R$Black", true);
    this.resourceManager.setCustomResourceState(m, 5);
    this.resourceManager.getResource(m).createTexture(3553, 1, 1, 6408, 5121, [0, 0, 0, 0]);
    this.renderPipeline = [new okRenderDepthStage(c), new okRenderShadowStage(c), new okRenderLightingStage(c), new okRenderPostStage(c)];
    var n = this.renderPipeline.length;
    for (var d = 0; d < n; ++d) {
        this.renderPipeline[d].init(this)
    }
    this._createPipelineResource()
}

okRenderer.prototype = {
    clear: function () {
        this.shaderManager.clear();
        this.renderSourceCollector.clear();
        this.renderTargetCollector.clear();
        this.renderEnv.clear();
        this.resourceManager.deleteResource("$R$Quad");
        this.resourceManager.deleteResource("$R$White");
        this.resourceManager.deleteResource("$R$Black");
        var c = this.renderPipeline.length;
        for (var a = 0; a < c; ++a) {
            this.renderPipeline[a].clear()
        }
    }, _createPipelineResource: function () {
        var c = this.renderPipeline.length;
        for (var a = 0; a < c; ++a) {
            this.renderPipeline[a].createResource()
        }
    }, _deletePipelineResource: function () {
        var c = this.renderPipeline.length;
        for (var a = 0; a < c; ++a) {
            this.renderPipeline[a].init(this);
            this.renderPipeline[a].deleteResource()
        }
    }, _onResize: function () {
        this.renderEnv.iCanvasWidth = this.renderEnv.canvas.clientWidth;
        this.renderEnv.iCanvasHeight = this.renderEnv.canvas.clientHeight;
        this._deletePipelineResource();
        this._createPipelineResource()
    }, enableStage: function (c, a) {
        this.renderPipeline[c].enable(a);
        this.renderEnv.aStageEnableList[c] = a
    }, isStageEnabled: function (a) {
        return this.renderEnv.aStageEnableList[a]
    }, getRenderSourceCollector: function () {
        return this.renderSourceCollector
    }, getRenderTargetCollector: function () {
        return this.renderTargetCollector
    }, clearView: function (a, f, c, e) {
        var d = this.rc;
        this.renderPipeline[2].lightFbo.bind();
        if (a & 16384) {
            if (f == null) {
                f = this.renderEnv.camera.vBackColor
            }
            d.clearColor(f.x, f.y, f.z, f.w)
        }
        if (a & 256) {
            d.clearDepth(c ? c : 1)
        }
        if (a & 1024) {
            d.stencilFunc(519, e ? e : 0, 4294967295)
        }
        d.clear(a)
    }, beginView: function (f, d) {
        var e = this.rc;
        this.renderEnv.camera = f;
        e.enable(3089);
        f.bindViewport();
        var h = this.renderPipeline.length;
        for (var c = 0; c < h; ++c) {
            var a = this.renderPipeline[c];
            a.beginView(d)
        }
    }, endView: function () {
        var d = this.renderPipeline.length;
        for (var c = 0; c < d; ++c) {
            var a = this.renderPipeline[c];
            a.endView()
        }
        this.renderEnv.camera = null
    }, renderScene: function (f) {
        this.renderEnv.scene = f;
        var d = this.renderSourceCollector;
        d.clear();
        f.getZone().cullByFrustum(this.renderEnv.camera.getFrustum(), d.createEntityList("Visible"));
        this._postCull();
        var e = this.renderPipeline.length;
        for (var c = 0; c < e; ++c) {
            var a = this.renderPipeline[c];
            if (a.bEnable) {
                a.render()
            }
        }
        this.renderEnv.scene = null
    }, renderEntity: function (a) {
        var h = this.renderSourceCollector;
        h.clear();
        var f = h.createEntityList("Visible");
        f.push(a);
        this._postCull();
        var d = this.renderEnv.aStageEnableList[1];
        this.enableStage(1, false);
        var k = this.renderPipeline.length;
        for (var e = 0; e < k; ++e) {
            var c = this.renderPipeline[e];
            if (c.bEnable) {
                c.render()
            }
        }
        this.enableStage(1, d)
    }, renderEntityArray: function (l) {
        var h = this.renderSourceCollector;
        h.clear();
        var f = h.createEntityList("Visible");
        var a = l.length;
        for (var e = 0; e < a; ++e) {
            f.push(l[e])
        }
        this._postCull();
        var d = this.renderEnv.aStageEnableList[1];
        this.enableStage(1, false);
        var k = this.renderPipeline.length;
        for (var e = 0; e < k; ++e) {
            var c = this.renderPipeline[e];
            if (c.bEnable) {
                c.render()
            }
        }
        this.enableStage(1, d)
    }, present: function () {
        this.renderEnv.iCurTime = (new Date).getTime() - this.renderEnv.iStartTime;
        this.renderEnv.fRandom = Math.random();
        var e = this.rc;
        var i = this.renderEnv;
        var a = this.renderTargetCollector;
        var d = a.getRenderTarget("LTex");
        e.bindFramebuffer(36160, null);
        e.viewport(0, 0, i.iCanvasWidth, i.iCanvasHeight);
        e.scissor(0, 0, i.iCanvasWidth, i.iCanvasHeight);
        e.disable(2929);
        e.depthMask(false);
        e.disable(3042);
        var h = this.resourceManager.getResource("$R$Quad");
        var f = h.getMesh(0);
        var c = this.shaderManager.getOutputProgram();
        c.bind();
        c.setAttribute("okAttr_Pos", f.getAttributeArrayBuffer("Position"), 3);
        c.setTexture("okUni_Tex", d, 33071, 9728);
        f.draw();
        e.enable(2929);
        e.depthMask(true);
        if (this.renderEnv.iCanvasWidth != this.renderEnv.canvas.width || this.renderEnv.iCanvasHeight != this.renderEnv.canvas.height) {
            this._onResize()
        }
    }, setSceneConfig: function (a) {
        a.vSkyColor.clone(this.renderEnv.vSkyColor);
        a.vGroundColor.clone(this.renderEnv.vGroundColor);
        this.renderEnv.bShadow = a.bShadow;
        this.renderEnv.bFogEnable = a.bFogEnable;
        a.vFogColor.clone(this.renderEnv.vFogColor);
        this.renderEnv.fFogDistNear = a.fFogDistNear;
        this.renderEnv.fFogDistFar = a.fFogDistFar;
        this.renderEnv.fFogDensity = a.fFogDensity;
        a.iFogMode = this.renderEnv.iFogMode
    }, setSkyColor: function (d, c, a) {
        if (c != null) {
            this.renderEnv.vSkyColor.set(d, c, a)
        } else {
            d.clone(this.renderEnv.vSkyColor)
        }
    }, getSkyColor: function () {
        return this.renderEnv.vSkyColor
    }, setGroundColor: function (d, c, a) {
        if (c != null) {
            this.renderEnv.vGroundColor.set(d, c, a)
        } else {
            d.clone(this.renderEnv.vGroundColor)
        }
    }, getGroundColor: function () {
        return this.renderEnv.vGroundColor
    }, enableFog: function (c, a) {
        this.renderEnv.bFogEnable = a
    }, isFogEnabled: function (a) {
        return this.renderEnv.bFogEnable
    }, setFogColor: function (e, d, c, a) {
        if (c == null) {
            this.renderEnv.vFogColor.x = d.x;
            this.renderEnv.vFogColor.y = d.y;
            this.renderEnv.vFogColor.z = d.z
        } else {
            this.renderEnv.vFogColor.x = d;
            this.renderEnv.vFogColor.y = c;
            this.renderEnv.vFogColor.z = a
        }
    }, getFogColor: function (a) {
        var c = okAllocator.vec3();
        return this.renderEnv.vFogColor.clone(c)
    }, setFogDistanceNear: function (c, a) {
        this.renderEnv.fFogDistNear = Math.max(0.001, a)
    }, setFogDistanceFar: function (c, a) {
        this.renderEnv.fFogDistFar = Math.max(0.001, a)
    }, getFogDistanceNear: function (a) {
        return this.renderEnv.fFogDistNear
    }, getFogDistanceFar: function (a) {
        return this.renderEnv.fFogDistFar
    }, setFogDensity: function (c, a) {
        this.renderEnv.fFogDensity = a
    }, getFogDensity: function (a) {
        return this.renderEnv.fFogDensity
    }, enableShadow: function (a) {
        this.renderEnv.bShadow = a
    }, isShadowEnabled: function () {
        return this.renderEnv.bShadow
    }, _drawTexture: function (a) {
        this.rc.bindFramebuffer(36160, null);
        this.rc.viewport(0, 0, a.getSizeU(), a.getSizeV());
        this.rc.disable(2929);
        var e = this.resourceManager.getResource("$R$Quad");
        var d = e.getMesh();
        var c = this.shaderManager.getFlatColorProgram(true);
        c.bind();
        c.setUniformMat4("matWorld", okMat4Mul(okMat4Trans(0, 0, -0.1), okMat4Scale(a.getSizeU() * 0.5, a.getSizeV() * 0.5, 1)));
        c.setUniformMat4("matViewProj", okMat4Ortho(-a.getSizeU() * 0.5, a.getSizeU() * 0.5, a.getSizeV() * 0.5, -a.getSizeV() * 0.5, 0.1, 100));
        c.setAttribute("position", d.getAttributeArrayBuffer("Position"), 3);
        c.setAttribute("texcoord", d.getAttributeArrayBuffer("Texcoord1"), 2);
        c.setUniformFloat3("color", 1, 1, 1);
        c.setSampler("texSampler", 0);
        a.bind(0);
        this.rc.texParameteri(3553, 10240, 9728);
        this.rc.texParameteri(3553, 10241, 9728);
        this.rc.texParameteri(3553, 10242, 33071);
        this.rc.texParameteri(3553, 10243, 33071);
        d.draw()
    }, _postCull: function () {
        var a = this.renderSourceCollector;
        a.genBatchList("Visible", this.renderEnv);
        a.enableReleaseBatch("Visible", true);
        var k = a.getBatchList("Visible");
        var d = a.createBatchList("Visible_Opaque");
        var l = a.createBatchList("Visible_Trans");
        var m = a.createBatchList("Visible_Glow");
        var c = k.length;
        for (var f = 0; f < c; ++f) {
            var h = k[f];
            var e = h.materialRef;
            if (e.bBlend) {
                l.push(h)
            } else {
                d.push(h)
            }
            if (e.bGlow) {
                m.push(h)
            }
        }
        a.sortBatchListByCamera("Visible_Trans", this.renderEnv, 0)
    }
};

function okEngineSetting() {
    this.canvas = null;
    this.bAntiAlias = false;
    this.bAsyncLoad = false
}

function okEngine() {
    this.canvas = null;
    this.rc = null;
    this.resourceManager = null;
    this.sceneManager = null;
    this.renderer = null;
    this.bInitializaed = false
}

okEngine.prototype = {
    init: function (c) {
        if (c == null) {
            return false
        }
        var a = null;
        try {
            a = c.canvas.getContext("experimental-webgl", {antialias: c.bAntiAlias, stencil: true})
        } catch (d) {
        }
        if (!a) {
            return false
        }
        this.clear();
        this.canvas = c.canvas;
        this.rc = a;
        this.resourceManager = new okResourceManager(c, this.rc);
        this.sceneManager = new okSceneManager(c, this.resourceManager);
        this.renderer = new okRenderer(c, this.rc, this.resourceManager, this.sceneManager);
        this.bInitializaed = true;
        return true
    }, clear: function () {
        if (this.sceneManager) {
            this.sceneManager.clear();
            this.sceneManager = null
        }
        if (this.renderer) {
            this.renderer.clear();
            this.renderer = null
        }
        if (this.resourceManager) {
            this.resourceManager.clear();
            this.resourceManager = null
        }
        this.rc = null;
        this.canvas = null;
        this.bInitializaed = false
    }, getRenderContext: function () {
        return this.rc
    }, getSceneManager: function () {
        return this.sceneManager
    }, getResourceManager: function () {
        return this.resourceManager
    }, getRenderer: function () {
        return this.renderer
    }
};
