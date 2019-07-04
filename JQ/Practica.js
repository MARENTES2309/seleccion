$(document).ready(function(){

  $("#b1").click(function(){
      var nombre=$("#nombre").val();
      var sexo=$("input:radio[name=sexo]:checked").val();
      var edad=$("input[type=number]").val();
      var carrera=$(".carrera").val();
      var estado=$(".estado").val();
      var tabla=$(".table");
      var tbody=$("tbody");
      var me="";
      if(edad>18)
      {
          mm="Mayor de edad";
      }
      else
      {
          mm="Menor de edad"
      }
      var datos =[nombre,edad,sexo,estado,carrera,mm];
    //alert(nombre+edad+sexo+estado+carrera);
      var tr=$("<tr></tr>");
      var items=[];
      if(edad>18){
          
      }
      
      for(var i in datos){
          var td = $("<td>"+datos[i]+"</td>");
          items.push(td);
          console.log(datos[i]);   
      }
    tr.append(items);
    tbody.append(tr);
  }) ; 
  
});