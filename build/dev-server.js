// 多项目端口
exports.devServerPort = function (server) {
    switch (server) {
      case 'who':
        return 8082
      
      case 'ops':
        return 8092
    }
  }
  