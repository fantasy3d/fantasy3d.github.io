// Reflector vertex shader
const reflect_vertexShader = `
    #include <common>
    #include <fog_pars_vertex>
    #include <clipping_planes_pars_vertex>

    varying vec4 vCoord;

    uniform mat4 textureMatrix;

    void main() {

        vCoord = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position.x, position.y, position.z, 1.0 );
        #include <clipping_planes_vertex>
        #include <fog_vertex>

    }
`;

// Reflector fragment shader
const reflect_fragmentShader = `
    uniform float opacity;
    uniform float strength;
    uniform vec3 color;
    uniform sampler2D reflectionMap;

    varying vec4 vCoord;

    #include <common>
    #include <fog_pars_fragment>
    #include <clipping_planes_pars_fragment>

    void main() {

        #include <clipping_planes_fragment>

        vec4 diffuseColor = vec4( color, opacity );

        vec4 reflectionColor = texture2DProj( reflectionMap, vCoord );
        diffuseColor.rgb = mix( diffuseColor.rgb, reflectionColor.rgb * strength, reflectionColor.a * strength );

        gl_FragColor = diffuseColor;

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>

    }
`;