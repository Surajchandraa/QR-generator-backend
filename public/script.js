let types = document.getElementsByClassName("btn");
let main = document.getElementsByClassName('main')[0];


function create_text(){
    let create = document.createElement('div');
    create.classList.add('maincontainer');
   create.innerHTML=`<input id="inp" type="text" placeholder="Enter text">
            
   <button class="btn2">Generate</button>`
   main.appendChild(create)
}

function create_url(){
    let create = document.createElement('div');
    create.classList.add('maincontainer');
   create.innerHTML=`<input id="inp" type="url" placeholder="Enter url">
            
   <button class="btn2">Generate</button>`
   main.appendChild(create);

}


function create_email(){
    let create = document.createElement('div');
    create.classList.add('maincontainer');
   create.innerHTML=`<input id="inp" type="email" placeholder="Enter email">
            
   <button class="btn2">Generate</button>`
   main.appendChild(create);
}

function create_phone(){
    let create = document.createElement('div');
    create.classList.add('maincontainer');
   create.innerHTML=`<input id="inp" type="number" placeholder="Enter phone number">
            
   <button class="btn2">Generate</button>`
   main.appendChild(create);
}


function ip_text(){
   if(main.firstElementChild){
    main.removeChild(main.firstElementChild);
    create_text()
    let opp= document.querySelectorAll('.output');
    opp.forEach(element => {
        element.remove();
    });
    

   
   }
   else if(!main.firstElementChild){
    create_text()
   }

    let button = document.getElementsByClassName('btn2')[0];
    let inputfield=document.getElementById('inp')
    button.addEventListener("click",function(){
        if(!inputfield.value){
            alert("please enter a text")
        }
        else{
        let output = document.createElement('div');
        output.classList.add('output');

        let dataset = {
            type:"text",
            data:inputfield.value
                }
        
                const options = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataset)
                  };


        
        let apidata = fetch("http://localhost:5000/generate/text",options);
        apidata.then(function(value){
            return value.json()
        }).then(function(value){

            output.innerHTML=`<a href=${value.qrCodeUrl} download>
            <img id="image" src=${value.qrCodeUrl} alt="Qr code">
            Click here to download
        </a> <br><br>`
        main.appendChild(output);

        console.log(value)

        })
    }
       
})

}







function ip_url(){
        if(main.firstElementChild){
            main.removeChild(main.firstElementChild);
            let opp= document.querySelectorAll('.output');
            opp.forEach(element => {
            element.remove();
        });
            
            create_url()
    
        }
        else if(!main.firstElementChild){
           create_url()

        }


        let button = document.getElementsByClassName('btn2')[0];
        let inputfield=document.getElementById('inp')
        button.addEventListener("click",function(){
            if(!inputfield.value){
                alert("please enter a valid url")
            }
            else{
            let output = document.createElement('div');
            output.classList.add('output');
    
            let dataset = {
                type:"url",
                data:inputfield.value
                    }
            
                    const options = {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(dataset)
                      };
    
    
            
            let apidata = fetch("http://localhost:5000/generate/url",options);
            apidata.then(function(value){
                return value.json()
            }).then(function(value){
    
                output.innerHTML=`<a href=${value.qrCodeUrl} download>
                <img id="image" src=${value.qrCodeUrl} alt="Qr code">
                Click here to download
            </a> <br><br>`
            main.appendChild(output);
    
            console.log(value)
    
            })
        }
           
    })
        
    
       

}


function ip_email(){
    if(main.firstElementChild){
        main.removeChild(main.firstElementChild);
        let opp= document.querySelectorAll('.output');
        opp.forEach(element => {
        element.remove();
    });
        
        create_email()

    }
    else if(!main.firstElementChild){
       create_email()

    }


    let button = document.getElementsByClassName('btn2')[0];
    let inputfield=document.getElementById('inp')
    button.addEventListener("click",function(){
        if(!inputfield.value){
            alert("please enter an valid email id")
        }
        else{
        let output = document.createElement('div');
        output.classList.add('output');

        let dataset = {
            type:"email",
            data:`mailto:${inputfield.value}`
                }
        
                const options = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataset)
                  };


        
        let apidata = fetch("http://localhost:5000/generate/url",options);
        apidata.then(function(value){
            return value.json()
        }).then(function(value){

            output.innerHTML=`<a href=${value.qrCodeUrl} download>
            <img id="image" src=${value.qrCodeUrl} alt="Qr code">
            Click here to download
        </a> <br><br>`
        main.appendChild(output);

        console.log(value)

        })
    }
       
})
    

   

}

function ip_phone(){
    if(main.firstElementChild){
        main.removeChild(main.firstElementChild);
        let opp= document.querySelectorAll('.output');
        opp.forEach(element => {
        element.remove();
    });
        
        create_phone()

    }
    else if(!main.firstElementChild){
       create_phone()

    }


    let button = document.getElementsByClassName('btn2')[0];
    let inputfield=document.getElementById('inp')
    button.addEventListener("click",function(){
        if(!inputfield.value){
            alert("please enter an valid phone number")
        }
        else{
        let output = document.createElement('div');
        output.classList.add('output');

        let dataset = {
            type:"phone",
            data:`tel:${inputfield.value}`
                }
        
                const options = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataset)
                  };


        
        let apidata = fetch("http://localhost:5000/generate/url",options);
        apidata.then(function(value){
            return value.json()
        }).then(function(value){

            output.innerHTML=`<a href=${value.qrCodeUrl} download>
            <img id="image" src=${value.qrCodeUrl} alt="Qr code">
            Click here to download
        </a> <br><br>`
        main.appendChild(output);

        console.log(value)

        })
    }
       
})
    

   

}



function ip_sms(){
    if(main.firstElementChild){
        main.removeChild(main.firstElementChild);
        let opp= document.querySelectorAll('.output');
        opp.forEach(element => {
        element.remove();
    });
        
        create_phone()

    }
    else if(!main.firstElementChild){
       create_phone()

    }


    let button = document.getElementsByClassName('btn2')[0];
    let inputfield=document.getElementById('inp')
    button.addEventListener("click",function(){
        if(!inputfield.value){
            alert("please enter an valid phone number")
        }
        else{
        let output = document.createElement('div');
        output.classList.add('output');

        let dataset = {
            type:"phone",
            data:`smsto:${inputfield.value}`
                }
        
                const options = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataset)
                  };


        
        let apidata = fetch("http://localhost:5000/generate/url",options);
        apidata.then(function(value){
            return value.json()
        }).then(function(value){

            output.innerHTML=`<a href=${value.qrCodeUrl} download>
            <img id="image" src=${value.qrCodeUrl} alt="Qr code">
            Click here to download
        </a> <br><br>`
        main.appendChild(output);

        console.log(value)

        })
    }
       
})
    

   

}

types[1].addEventListener("click",ip_text);
types[0].addEventListener("click",ip_url);
types[2].addEventListener("click",ip_email);
types[3].addEventListener("click",ip_phone);
types[5].addEventListener("click",ip_sms);