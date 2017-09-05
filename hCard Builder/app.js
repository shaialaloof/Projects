var console;

var UIController = (function () {
  return {
    uploadImage: function () {
      
      var preview, file, reader;
      document.getElementById("imgPicker").click();
      preview = document.getElementById("profilepic");
      file = document.querySelector("input[type=file]").files[0];
      reader = new FileReader();
      reader.onloadend = function () {
        preview.src = file.name;
      };
      
      if (file) {
        reader.readAsDataURL(file);
        preview.src = file.name;
      } else {
        preview.src = "profilepictemplate.png";
      }
    
    },
    
    cardDisplay: function (title) {
      var text = document.getElementById(title).value;
      document.getElementById(title + "disp").innerHTML = text;
    }
    
  };
  
})();

/* var globalController = (function (UICtrl) {
  return {
    
    initiateDisplay: function (title) {
      
    }
    
  }
  
})(); */