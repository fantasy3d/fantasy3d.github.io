const version = "0.161.0";
const threeImportmap = {

	"three": `https://unpkg.com/three@${version}/build/three.module.js`,
	"three/examples/jsm/": `https://unpkg.com/three@${version}/examples/jsm/`

}

function loadscripts( inputImports ) {

	// Import maps polyfill
	// Remove this when import maps will be widely supported
	const script_shims = document.createElement( 'script' );
	script_shims.async = true;
	script_shims.src = './js/libs/es-module-shims.js';
	document.body.appendChild( script_shims );

	const imports = Object.assign( inputImports, threeImportmap );

	const scirpt_importmap = document.createElement( 'script' );
	scirpt_importmap.type = 'importmap';
	scirpt_importmap.innerHTML = `{
        "imports": ${JSON.stringify( imports )}
    }`;
	document.body.appendChild( scirpt_importmap );

}
