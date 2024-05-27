uniform float uSliceStart;
uniform float uSliceArc;
varying vec3 vPosition;

void main(){
    float angle = atan(vPosition.y, vPosition.x);
    angle -= uSliceStart;
    angle = mod(angle, PI * 2.0); //comment out later and test
    if(angle > 0.0 && angle < uSliceArc)
        discard;
}

///////////
// uniform float uSliceStart;
// uniform float uSliceArc;
// varying vec3 vPosition;

// void main(){
//     float angle = atan(vPosition.y, vPosition.x);
//     angle -= uSliceStart;
//     angle = mod(angle, PI * 2.0); //comment out later and test
//     if(angle > 0.0 && angle < uSliceArc)
//         discard;

//     // if(gl_FrontFacing)
//     // csm_FragColor = vec4(0.75, 0.15, 0.3, 1.0);
// }