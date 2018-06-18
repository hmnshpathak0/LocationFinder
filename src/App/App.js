import React, { Component } from 'react';
import logo from '../logo.svg';
import { Service } from '../services/service';
import { connect } from 'react-redux';


class App extends Component {

constructor(){
  super();
  
 this.handleList= this.handleList.bind(this);
 
 

}

shouldComponentUpdate(nextProps, nextState){


  this.updateSearch(this.props.list,this.props.hotellist);

         
return true;
}



updateSearch = (list,arr)=> {


const input=document.getElementById('myInput');
autocomplete(input,list,arr);
};


handleList({target}){
const service = new Service;
  service._getAllPlace(target.value).then
  (response => {
      console.log(response.data.predictions.length);
      const list=response.data.predictions;
   this.props.fetchAlls(list);
   this.props.fetchAllHotels(service._getAllHotels(target.value));
  
  }).catch
  (error => {
      console.log("error in request");
     
  });
}


  render() {
    let style={
      width:"330px",
    }
    return (
      
      <div className="autocomplete" >
        <input type="text" id="myInput" placeholder="Location" onChange={this.handleList}/>
       </div>
     
    );
  }
}

 

function closeAllLists(){
  var x = document.getElementsByClassName("autocomplete-items");
  if(x){
  for (var i = 0; i < x.length; i++) {
  
    x[i].parentNode.removeChild(x[i]);
  }
}
 

}
function autocomplete(inp,arr,list){
       closeAllLists();
     var a, b, i;
      a = document.createElement("DIV");
      console.log("hii1"+inp);
      a.setAttribute("id", inp.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      
     
      inp.parentNode.appendChild(a);
      
      //Location header would be added if string matches some place
      if(arr.length > 0){
      b = document.createElement("DIV");
      b.innerHTML ="Location";
      /*insert a input field that will hold the current array item's value:*/
      a.appendChild(b);
       }
       else
       list=[];


      for (i = 0; i < arr.length; i++) {
        
          
         
          b = document.createElement("DIV");
         b.setAttribute("class","suggestion");
        
          b.addEventListener("click",function(e){
            console.log("clicked");
          inp.value=this.getElementsByTagName("input")[0].value;
          closeAllLists();
         });
         if (arr[i].substr(0, inp.value.length).toUpperCase() == inp.value.toUpperCase()) {
          /*create a DIV element for each matching element:*/
         
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, inp.value.length) + "</strong>";
          b.innerHTML += arr[i].substr(inp.value.length);
         }
         else
          b.innerHTML =arr[i];
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          
          a.appendChild(b);
        
      }

      if(list.length > 0){
        b = document.createElement("DIV");
        b.innerHTML ="Hotels";
        /*insert a input field that will hold the current array item's value:*/
        a.appendChild(b);
         }
  
  
        for (i = 0; i < list.length; i++) {
          
            
           
            b = document.createElement("DIV");
           b.setAttribute("class","suggestion");
          
            b.addEventListener("click",function(e){
              console.log("clicked");
            inp.value=this.getElementsByTagName("input")[0].value;
            closeAllLists();
           });
           if (list[i].substr(0, inp.value.length).toUpperCase() == inp.value.toUpperCase()) {
            /*create a DIV element for each matching element:*/
           
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + list[i].substr(0, inp.value.length) + "</strong>";
            b.innerHTML += list[i].substr(inp.value.length);
           }
           else
            b.innerHTML =list[i];
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + list[i] + "'>";
            
            a.appendChild(b);
          
        }
  

  
}




const mapStateToProps = state => {
  return {
      list: state.allparams,
      hotellist:state.hotellist
  };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchAlls: (data) => dispatch({type: 'fetchAll',response:data}),
      fetchAllHotels: (data) => dispatch({type: 'fetchAllHotels',response:data})
  };
};

export default  connect(mapStateToProps,mapDispatchToProps)(App);
