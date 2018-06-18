import axios from 'axios';


export class Service {
  
  
  _getAllHotels= function(query){
    console.log("hotels");
   return ["fab hotes,delhi","fab Hotels,Gurgaon"];
   
  };

_getAllPlace= function(query){
  var key="AIzaSyAu2BLWFCX2GdfZUGqfAJwKlNkj8yWlkSQ";
  
var url="/maps/api/place/autocomplete/json?input="+query+"&types=(cities)&language=pt_BR&key="+key;;

return axios.post(url,{
    accept: 'application/json'
  });
};

/*_getAllPlace= function(query){
  var body = new FormData();
var key="AIzaSyAu2BLWFCX2GdfZUGqfAJwKlNkj8yWlkSQ";
var url="/maps/api/place/autocomplete/json?";
body.set('key',key);
body.set('input',query);
body.set('language',"pt_BR");
body.set("types","(cities)");
return axios({
  method: 'post',
  url: url,
  data: body,
  config: { headers: {'Content-Type': 'multipart/form-data' }}
});
};*/



}
