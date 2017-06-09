indexApp
.filter("dateFormat",function(){//图片地址过滤器
    return function(input) {
      var out = input;
      out = new Date(input).format("yyyy-MM-dd hh:mm");
      return out;
    };
  })