let btn = document.getElementById("btn");
        btn.addEventListener("click",()=>{
           let inn = document.querySelectorAll("input");
           inn.forEach((i)=>{
               if(i.checked){
                    displayOrder(i.value);
               }
           })
        })
        function displayOrder(order){

            let orderContainer = document.getElementById("order-container");
            let orderText = document.createElement("h2");
            orderText.innerText = `Order Id => ${order}`;
            orderText.setAttribute('id',"newLineText");
            orderContainer.append(orderText);
            delay(5000)
                .then(()=>displayOrderCompleted(order))
                .catch((err)=>{console.log(err);})
        }
        function delay(time){
            return new Promise((resolve ,reject)=>{
                setTimeout(resolve,time);
            })
        }
        function displayOrderCompleted(order){
            let cmtOrder = document.getElementById("order-resolve-container");
            let text = document.createElement("h2");
            text.innerText = `${order} Order Complete`;
            cmtOrder.append(text);

        }