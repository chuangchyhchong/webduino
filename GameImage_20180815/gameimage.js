+(function (window, document) {

  'use strict';
  
  var screen_width = 0;
  var screen_height = 0;
  var onclickid = "";
  var onclicktime = 200;
  var onclicktimerid;
  var mouse_x,mouse_y;

  function image_create(input_id,input_url,input_width,input_height,input_left,input_top,input_zindex,input_display) {
    if (document.getElementById("gameimg_"+input_id))
    {
      document.getElementById("gameimg_"+input_id).src = input_url;
      document.getElementById("gameimg_"+input_id).style.width = input_width + 'px';
      document.getElementById("gameimg_"+input_id).style.height = input_height + 'px';
      document.getElementById("gameimg_"+input_id).style.left = input_left + 'px';
      document.getElementById("gameimg_"+input_id).style.top = input_top + 'px';
      document.getElementById("gameimg_"+input_id).style.zIndex = input_zindex;
      if (input_display==false)
        document.getElementById("gameimg_"+input_id).style.display = "none";
      else
        document.getElementById("gameimg_"+input_id).style.display = "block";
    }
    else
    {
      var img = document.createElement('img');
      img.style.position = "absolute";
      img.id = "gameimg_"+input_id;
      img.src = input_url;
      img.style.width = input_width + 'px';
      img.style.height = input_height + 'px';
      img.style.left = input_left + 'px';
      img.style.top = input_top + 'px';
      img.style.zIndex = input_zindex;
      if (input_display==false)
        img.style.display = "none";
      else
        img.style.display = "block";
      img.setAttribute("onclick", "javascript:image_onclickid_set(this);");
      document.body.appendChild(img);
    }
  }
  
  function image_set(input_id,input_property,input_value) {
    if (document.getElementById("gameimg_"+input_id))
    {
      if (input_property=='url')
        document.getElementById("gameimg_"+input_id).src = input_value;
      else if (input_property=='width')
        document.getElementById("gameimg_"+input_id).style.width = input_value + 'px';
      else if (input_property=='height')
        document.getElementById("gameimg_"+input_id).style.height = input_value + 'px';
      else if (input_property=='left')
        document.getElementById("gameimg_"+input_id).style.left = input_value + 'px';
      else if (input_property=='top')
        document.getElementById("gameimg_"+input_id).style.top = input_value + 'px';
      else if (input_property=='zindex')
        document.getElementById("gameimg_"+input_id).style.zIndex = input_value;
      else if (input_property=='display')
      {
        if (input_value==false)
          document.getElementById("gameimg_"+input_id).style.display = "none";
        else
          document.getElementById("gameimg_"+input_id).style.display = "block";
      }
      else if (input_property=='opacity')
          document.getElementById("gameimg_"+input_id).style.opacity = input_value;
      else if (input_property=='rotate')
          document.getElementById("gameimg_"+input_id).style.transform = "rotate("+input_value+"deg)";
      else if (input_property=='rotateX')
          document.getElementById("gameimg_"+input_id).style.transform = "rotateX("+input_value+"deg)";
      else if (input_property=='rotateY')
          document.getElementById("gameimg_"+input_id).style.transform = "rotateY("+input_value+"deg)";
      else if (input_property=='rotateZ')
          document.getElementById("gameimg_"+input_id).style.transform = "rotateZ("+input_value+"deg)";
    }
  }    
  
  function image_get(input_id,input_property) {
    if (input_property=='id')
    {
      if (document.getElementById("gameimg_"+input_id))
        return 1;
      else
        return 0;
    }
    if (document.getElementById("gameimg_"+input_id))
    {
      if (input_property=='url')
        return document.getElementById("gameimg_"+input_id).src;
      else if (input_property=='width')
        return Number(document.getElementById("gameimg_"+input_id).style.width.replace(/px/ig,""));
      else if (input_property=='height')
        return Number(document.getElementById("gameimg_"+input_id).style.height.replace(/px/ig,""));
      else if (input_property=='left')
        return Number(document.getElementById("gameimg_"+input_id).style.left.replace(/px/ig,""));
      else if (input_property=='top')
        return Number(document.getElementById("gameimg_"+input_id).style.top.replace(/px/ig,""));
      else if (input_property=='zindex')
        return Number(document.getElementById("gameimg_"+input_id).style.zIndex);
      else if (input_property=='display')
      {
        if (document.getElementById("gameimg_"+input_id).style.display=="block")
          return 1;
        else
          return 0;  
      }
      else if (input_property=='opacity')
        return document.getElementById("gameimg_"+input_id).style.opacity;
      else if (input_property=='rotate')
        return document.getElementById("gameimg_"+input_id).style.transform;
      else if (input_property=='rotateX')
        return document.getElementById("gameimg_"+input_id).style.transform;
      else if (input_property=='rotateY')
        return document.getElementById("gameimg_"+input_id).style.transform;
      else if (input_property=='rotateZ')
        return document.getElementById("gameimg_"+input_id).style.transform;
    }
    else
      return "";    
  }  
  
  function image_delete(input_id) {
    if (document.getElementById("gameimg_"+input_id))
    {
      document.body.removeChild(document.getElementById("gameimg_"+input_id));
    }  
  }   
  
  function image_collision(input_id1,input_id2) {
    if ((document.getElementById("gameimg_"+input_id1))&&(document.getElementById("gameimg_"+input_id2)))
    {
      var img1 = document.getElementById("gameimg_"+input_id1).style;
      var img2 = document.getElementById("gameimg_"+input_id2).style;
      var x1 = Number(img1.left.replace(/px/ig,""));
      var x1_w = Number(img1.left.replace(/px/ig,"")) + Number(img1.width.replace(/px/ig,""));
      var y1 = Number(img1.top.replace(/px/ig,""));
      var y1_h = Number(img1.top.replace(/px/ig,"")) + Number(img1.height.replace(/px/ig,""));
      var x2 = Number(img2.left.replace(/px/ig,""));
      var x2_w = Number(img2.left.replace(/px/ig,"")) + Number(img2.width.replace(/px/ig,""));
      var y2 = Number(img2.top.replace(/px/ig,""));
      var y2_h = Number(img2.top.replace(/px/ig,"")) + Number(img2.height.replace(/px/ig,""));
    
      if ((((x2>=x1)&&(x2<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2>=x1)&&(x2<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2>=y1)&&(y2<=y1_h)))||(((x2_w>=x1)&&(x2_w<=x1_w))&&((y2_h>=y1)&&(y2_h<=y1_h))))
        return 1;
      else if ((((x1>=x2)&&(x1<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1>=x2)&&(x1<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1>=y2)&&(y1<=y2_h)))||(((x1_w>=x2)&&(x1_w<=x2_w))&&((y1_h>=y2)&&(y1_h<=y2_h))))
        return 1;
      else
        return 0;  
    }
    else
      return 0;   
  }   
  
  function image_boundary(input_left,input_top) {
    if (input_left>=0) screen_width = input_left;
    if (input_top>=0) screen_height = input_top;
  }    
  
  function image_boundary_collision(input_id,input_property) {
    if ((screen_width>0)||(screen_height>0))
    {
      var left = Number(document.getElementById("gameimg_"+input_id).style.left.replace(/px/ig,""));
      var width = Number(document.getElementById("gameimg_"+input_id).style.width.replace(/px/ig,""));
      var top = Number(document.getElementById("gameimg_"+input_id).style.top.replace(/px/ig,""));
      var height = Number(document.getElementById("gameimg_"+input_id).style.height.replace(/px/ig,""));
      if (screen_width>0)
      {
        if (((input_property=="left")||(input_property=="any"))&&(left<=0)) return 1
        if (((input_property=="right")||(input_property=="any"))&&(left+width>=screen_width)) return 1
      }
      if (screen_height>0) 
      {
        if (((input_property=="up")||(input_property=="any"))&&(top<=0)) return 1
        if (((input_property=="down")||(input_property=="any"))&&(top+height>=screen_height)) return 1
      }
      return 0;
    }
    else
      return 0;   
  }    
  
  function image_sys_get(input_property) {
    if (input_property=='screen_width')
      return screen_width;
    else if (input_property=='screen_height')
      return screen_height;
    else
      return;
  }  
  
  function image_onclickid_set(obj) {
    clearTimeout(onclicktimerid);  
    onclickid=obj.id;
    onclicktimerid=setTimeout('image_onclickid_clear()',onclicktime);
  }
  
  function image_onclickid_clear() {
    onclickid="";
  }
  
  function image_onclick_get(input_id) {
    if (onclickid==("gameimg_"+input_id))
    {
      onclickid="";
      return 1;
    }
    else
      return 0;
  }
  
  function mouse_coordinate_get(input_property) {
    document.onmousemove = function(e){  
      e=e||window.event;
      mouse_x = e.pageX;
      mouse_y = e.pageY;
    }    
    if (input_property=="x")
      return mouse_x;
    else if (input_property=="y")
      return mouse_y;
  }   
  
  window.image_create = image_create;
  window.image_set = image_set;
  window.image_get = image_get;
  window.image_delete = image_delete;
  window.image_collision = image_collision;
  window.image_boundary = image_boundary;
  window.image_boundary_collision = image_boundary_collision;
  window.image_sys_get = image_sys_get;
  window.image_onclickid_set = image_onclickid_set;
  window.image_onclickid_clear = image_onclickid_clear;
  window.image_onclick_get = image_onclick_get;
  window.mouse_coordinate_get = mouse_coordinate_get;
  
}(window, window.document));
