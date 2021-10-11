"use strict";

var gl1;
var points1;

window.onload = function init1(){
	var canvas1 = document.getElementById( "triangle-canvas" );
	gl1 = WebGLUtils.setupWebGL( canvas1 );
	if( !gl1 ){
		alert( "WebGL isn't available" );
	}

	// Three Vertices
	var vertices1 = [
		0.0, 0.0, 
		 -0.5, 1.0, 
         -1.0,0.0,
		 0.0,0.0, 
		 1.0, 0.0, 
         1.0,1.0,
		 0.0, 1.0,
		 
		/* 1.0,  1.0,
		 0.0, -1.0,
		 1.0,  1.0,
		 0.0,  1.0
		 /*-0.5, -0.5,
		 0.0, 0.5,
		 0.5, -0.5*/
	];
    var vcolor = [
		/*【三角形】*/1.0, 0.0, 0.0,1.0, 
		1.0, 0.0, 0.0, 1.0,
		1.0, 0.0, 0.0,1.0,/**/
        /*正方形*/1.0, 0.0, 0.5,1.0, 
		1.0, 0.0, 0.5, 1.0,
		1.0, 0.0, 0.5,1.0,
        1.0, 0.0, 0.5,1.0,
		 /*-1.0, -1.0, 
		 -1.0,  1.0,
		 1.0,1.0 ,
		 1.0, -1.0*/
		
		 /*0.0, -1.0,
		 1.0, -1.0,
		 1.0,  1.0,
		 0.0, -1.0,
		 1.0,  1.0,
		 0.0,  1.0*/
		 /*-0.5, -0.5,
		 0.0, 0.5,
		 0.5, -0.5*/
	];

	// Configure WebGL
	gl1.viewport( 0, 0, canvas1.width, canvas1.height );
	gl1.clearColor( 1.0, 1.0, 1.0, 1.0 );

	// Load shaders and initialize attribute buffers
	var program1 = initShaders( gl1, "vertex-shader", "fragment-shader" );
	gl1.useProgram( program1 );

	// Load the data into the GPU
	var bufferId1 = gl1.createBuffer();
	gl1.bindBuffer( gl1.ARRAY_BUFFER, bufferId1 );
	gl1.bufferData( gl1.ARRAY_BUFFER, new Float32Array( vertices1 ), gl1.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var vPosition1 = gl1.getAttribLocation( program1, "vPosition" );
	gl1.vertexAttribPointer( vPosition1, 2, gl1.FLOAT, false, 0, 0 );
	gl1.enableVertexAttribArray( vPosition1 );


    // Load the data into the GPU
	var bufferId1 = gl1.createBuffer();
	gl1.bindBuffer( gl1.ARRAY_BUFFER, bufferId1 );
	gl1.bufferData( gl1.ARRAY_BUFFER, new Float32Array( vcolor ), gl1.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var a_color = gl1.getAttribLocation( program1, "a_color" );
	gl1.vertexAttribPointer( a_color, 4, gl1.FLOAT, false, 0, 0 );
	gl1.enableVertexAttribArray( a_color );

	render1();
}

function render1(){
	gl1.clear( gl1.COLOR_BUFFER_BIT );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4);
    
	gl1.drawArrays( gl1.TRIANGLES, 0, 3 );
	gl1.drawArrays( gl1.TRIANGLE_FAN, 3, 4 );
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}