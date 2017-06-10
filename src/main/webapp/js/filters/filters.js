indexApp
.filter("dateFormat",function(){//图片地址过滤器
    return function(input) {
      var out = input;
      out = new Date(input).format("yyyy-MM-dd hh:mm");
      return out;
    };
  })
  .filter("startDateFormat",function(){//租借起始时间过滤器
    return function(input) {
      var out = input;
      out = new Date(input).format("yyyy-MM-dd");
      return out;
    };
  })
   