indexApp
.filter("dateFormat",function(){//图片地址过滤器
    return function(input) {
      var out = input;
      out = new Date(input).format("yyyy-MM-dd hh:mm");
      return out;
    };
  })
 .filter("statusFormat",function(){//状态过滤器
    return function(input) {
      var out = input;
      if(input==null){
    	  out = "待审核";
      }else if(input==1){
    	  out = "审核通过";
      }else{
    	  out = "审核未通过";
      }
      return out;
    };
  })