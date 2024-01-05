const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    const results = document.querySelector("#results");

    console.log(height);
    console.log(weight);
    console.log(results);

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give us a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give us a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / (height*height / 10000)).toFixed(2);
        let message = "";
        if(bmi < 18.6){
            message = "Under weight";
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            message = "Normal weight";
        }
        else{
            message = "Over weight"
        }
        results.innerHTML = `<span>${message} : ${bmi}</span>`;
    }



})