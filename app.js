


import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";


// Get elements

const staff_add_form = document.getElementById('staff-add-form');
const staff_data_get = document.getElementById('staff-data-get');


// staff add form

staff_add_form.addEventListener( 'submit' , function(e){
   e.preventDefault();

   const msg = document.querySelector('.msg');
   

   let form_data = new FormData(e.target);
   let data = Object.fromEntries(form_data.entries());

   let { name, location , cell , phato } = data;

   if (name == '' || location == '' || cell == '' ) {
      msg.innerHTML = Alert.danger('All fields are required !')
   }else{
      
      Storage.set('staff', data);

      staff_add_form.reset();
     
      dataGet();

   }


   
   
   
});


//  staff data get

dataGet();

function dataGet() {
   
   let data  = Storage.get('staff');

  let list  = '';

  data.map((data , index) =>{
    
   let {name, location , cell , phato} = data ;

   list +=`
            <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${location}</td>
            <td>${cell}</td>
            <td> <img style="height: 50px; width: 50px; object-fit: cover;" src="${phato ? phato : 'assets/img/avator img.png'}" alt=""></td>
            <td>
            <button class="btn btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
            <button class="btn btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
            <button class="btn btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
            </td>
         </tr>
   `

  })

  staff_data_get .innerHTML = list;

}

