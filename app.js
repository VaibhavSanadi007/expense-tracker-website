let grid_db = document.querySelector(".grid-db");

let select_category = document.querySelector("#sel");

let amount_input = document.querySelector("#inp");

let date_input = document.querySelector("#date");

let add_btn = document.querySelector(".add-btn");

let total_div = document.querySelector(".total")

let total_display = document.querySelector(".total-display");

let total = 0;

let count=0;


add_btn.addEventListener("click", () => {
  
  let select_cat_value = select_category.value;
  let amount_input_value = amount_input.value;
  let date_value = date_input.value;
  
  if(date_value === "" || amount_input_value<=0){
    alert("Please Enter Appropirate Amount or Date");
    add_btn.removeEventListener();
  }
  total += Number(amount_input_value);

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let delete_btn = document.createElement("button");

  div1.innerHTML = select_cat_value;
  div2.innerHTML = amount_input_value;
  div3.innerHTML = date_value;
  delete_btn.innerHTML = `delete`;

  let arr = [div1, div2, div3, delete_btn];

  arr.forEach((items) => {
    
    items.id=`element-${count}`;

    items.classList.add("data-db");
    grid_db.insertBefore(items,total_div);

    if (items.innerText === "delete") {
      items.classList.add("delete-style");
    }
  });
  count++;
  
  total_display.innerHTML=total;
  delete_btn.addEventListener("click",()=>{
  
    total -= amount_input_value;
    total_display.innerHTML=total;

    document.querySelectorAll(`#${delete_btn.id}`).forEach((i)=>{
      i.remove();
    })
  });
});


