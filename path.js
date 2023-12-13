function path(filePath) {
    var myWindow = window.open('', 'myWindow', 'scrollbars=1,height=' + screen.availHeight + ',width=' + screen.availWidth);
    myWindow.document.write('<!DOCTYPE html>\n\
    <html>\n\
    <head>\n\
    <title>Local Page</title>\n\
    </head>\n\
    <body style="margin: 0;">\n\
    <iframe src="' + filePath + '" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0;" height="100%" width="100%">\n\
    </iframe>\n\
    </body>\n\
    </html>');
}

