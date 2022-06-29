function showCountries(){
    let xhr = new XMLHttpRequest()
    xhr.open("GET","https://restcountries.com/v2/all",true)//true is for async or not also open is XMLHttpRequest method
    xhr.onload = function(){
        if(xhr.status===200){
            // console.log("success");
            let countries = JSON.parse(this.response)
            console.log(countries);


            countries.forEach(country=>{
                const countryCard = document.createElement("div")
                const countryCardImg = document.createElement("img")
                countryCard.innerHTML = country.name
                countryCardImg.src = country.flag
                countryCard.appendChild(countryCardImg)
                document.querySelector("div").appendChild(countryCard)
                // document.querySelector("div").appendChild(countryCardImg)
            })
        }
    }

    xhr.send()
}