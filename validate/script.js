$(document).ready(function(){
  $("#form").validate({
         rules:{ 
              fio:{
                  required: true, 
              },
              email:{
                  required: true,
                  email: true,
              },
              company:{
                  required: true, 
              },
              phone:{
                  required: true, 
              },
              text:{
                  required: true, 
              },
         },
         messages:{
              fio:{
                  required: "", 
              },
              email:{
                  required: "",
                  email: "",
              },
              company:{
                  required: "", 
              },
              phone:{
                  required: "", 
              },
              text:{
                  required: "", 
              },
         }
      });
});
