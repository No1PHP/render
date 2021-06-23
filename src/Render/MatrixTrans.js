
const isNumber = (num)=>{
    return typeof a == "number"
}


const set4Column =(dest, c, a, f, e)=>{ //e: homogeneous term
    dest.m03 = c;
    dest.m13 = a;
    dest.m23 = f;
    dest.m33 = (e ? e : dest.m33)
}

const _vec3 = (a)=>{
    var aVec3 = new Array();
    a.x = 0;
    a.y = 0;
    a.z = 0;
    aVec3.push(a)
}

const Mat4Obj = (a) =>{
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

const Vec3Obj = (a)=>{
    this.x = 0;
    this.y = 0;
    this.z = 0;
}


const createProjectionMat4 = (Degree, ratio, zNear, zFar)=>{// gl.viewportWidth/gl.viewportHeight: aspect ratio
    var rad = Degree * Math.PI / 360;
    var a = zFar - zNear;
    var e = Math.cos(rad) / Math.sin(rad);
    var d = new Mat4Obj();

    //change the respondent item of the identity matrix
    d.m00 = e / ratio;
    d.m11 = e;
    d.m22 = -(zFar + zNear) / a;
    d.m32 = -1;
    d.m23 = -2 * zNear * zFar / a;
    d.m33 = 0;
    return d
}

const translateMat4 =(tx, ty, tz)=>{
    var c = new Vec3Obj();
    c.x = tx;
    c.y = ty;
    c.z = tz;

    var a = Mat4Obj();
    set4Column(a, c.x, c.y, c.z, 1);
    return a
}

const rot = () =>{

}
