"use strict";

var gl;
var points;


window.onload = function init(){
	var canvas = document.getElementById( "triangle-canvas" );
	gl = WebGLUtils.setupWebGL( canvas );
	if( !gl ){
		alert( "WebGL isn't available" );
	}
	
		
	// Three Vertices
	var vertices = [
		/*【三角形】*/-1.0, -1.0, 
		 0.0,  1.0, 
		 1.0, -1.0, /**/
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
	var vcolor = [
		/*【三角形】*/1.0, 0.0, 0.0,1.0, 
		0.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0,1.0/**/
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
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
	
	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );
	

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );
	
	// Associate external shader variables with data buffer
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vcolor ), gl.STATIC_DRAW );
	
	// Associate external shader variables with data buffer
	var a_color = gl.getAttribLocation( program, "a_color" );
	gl.vertexAttribPointer( a_color, 4, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( a_color );
    render();
	
	}

function render(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );/*【绘制正方形】*/
	gl.drawArrays( gl.TRIANGLES, 0, 3 );/*【绘制三角形】*/
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

