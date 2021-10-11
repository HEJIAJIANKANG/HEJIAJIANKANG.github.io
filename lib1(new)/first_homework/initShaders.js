//  初始化着色器程序插件
//  initShaders.js
//

function initShaders(gl, vertexShaderId, fragmentShaderId) {
    var vertShdr; //顶点着色器对象
    var fragShdr; //片元着色器对象

    var vertElem = document.getElementById(vertexShaderId); //通过顶点着色器id获取dom标签
    if (!vertElem) {
        alert("通过当前id无法获取到dom对象：" + vertexShaderId);
        return -1;
    }
    else {
        vertShdr = gl.createShader(gl.VERTEX_SHADER); //创建一个顶点着色器对象
        gl.shaderSource(vertShdr, vertElem.text); //设置着色器运行代码
        gl.compileShader(vertShdr); //编译为二进制数据后，可以被WebGLProgram对象使用
        if (!gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS)) { //检查着色器对象是否创建成功
            var msg = "着色器创建失败，错误信息为:"
                + "<pre>" + gl.getShaderInfoLog(vertShdr) + "</pre>";
            alert(msg);
            return -1;
        }
    }

    var fragElem = document.getElementById(fragmentShaderId); //获取片元着色器dom对象
    if (!fragElem) {
        alert("无法通过当前id获取到片元着色器dom对象：" + fragmentShaderId);
        return -1;
    }
    else {
        fragShdr = gl.createShader(gl.FRAGMENT_SHADER); //创建一个片元着色器对象
        gl.shaderSource(fragShdr, fragElem.text); //设置片元着色器运行代码
        gl.compileShader(fragShdr); //编译为二进制数据后，可以被WebGLProgram对象使用
        if (!gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS)) { //检查片元着色器是否创建成功
            var msg = "片元着色器无法创建成功，错误信息："
                + "<pre>" + gl.getShaderInfoLog(fragShdr) + "</pre>";
            alert(msg);
            return -1;
        }
    }

    var program = gl.createProgram(); //创建一个着色器程序对象
    gl.attachShader(program, vertShdr); //将顶点着色器添加到着色器程序
    gl.attachShader(program, fragShdr); //将片元着色器添加到着色器程序
    gl.linkProgram(program); //将着色器程序链接到添加的着色器对象

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { //检查着色器程序是否创建成功
        var msg = "着色器程序创建失败，错误信息："
            + "<pre>" + gl.getProgramInfoLog(program) + "</pre>";
        alert(msg);
        return -1;
    }

    //最后将创建的着色器程序返回
    return program;
}

