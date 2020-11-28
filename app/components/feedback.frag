#ifdef GL_ES
precision highp float;
#endif

varying vec2 var_vertTexCoord;

uniform sampler2D prevtex;

void main() {
    vec2 uv = var_vertTexCoord;
    vec4 col = texture2D(prevtex, uv);

    gl_FragColor = clamp(col + 0.01, 0.0,1.0);
}
