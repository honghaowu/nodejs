exports.getMime=function(extname){  /*获取文件类型*/
  switch (extname){
    case '.html':
        return 'text/html';
    case '.css':
        return 'text/css';
    case '.js':
        return 'text/javascript';
    default:
        return 'text/html';
  }
}
