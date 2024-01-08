function renderMovie(object) {
    let genre = "";
    for (let i of object.movieGenre) {
        object.movieGenre.indexOf(i) === object.movieGenre.length - 1
            ? (genre += i)
            : (genre += i + " , ");
    }
    let creators = "";
    for (let i of Object.keys(object.creators)) {
        Object.keys(object.creators).indexOf(i) ===
            Object.keys(object.creators).length - 1
            ? (creators += object.creators[i])
            : (creators += object.creators[i] + " , ");
    }
    //THIS IS UGLY AND I USE STRING I  KNOW IN HTML ALL THIS IS STRING AND MY PREFRENCE IS HERE USE THAT HOPE THAND I DIDNT MAKE MISTAK
    //     let movieBox = document.createElement('div');
    //     movieBox.className = 'movieBox'
    // //----------------------------------------------------
    //     let mainImage = document.createElement('div');
    //     mainImage.className = "mainImage";
    //     let img = document.createElement('img');
    //     img.src = object.images[0];
    //     mainImage.appendChild(img);
    //  ........................................................................
    //      |          |    |-----------|
    //      | |        |    |           |
    //      |   |      |    |           |
    //      |     |    |    |           |
    //      |       |  |    |           |
    //      |        | |    |           |
    //      |          |    |-----------|
    //  //---------------------------------------------------------------------------------------------------------------------
    let divMovieBox = `
    ${/*<div class="movieBox">*/ ""}
    <div class="mainImage">
      <img src=${object.images[0]} alt="" />
    </div>
    <div class="movieBoxInfo">
      <span class="movieName"><span>Name:</span> ${object.movieName}</span>
      <span class="movieDate"><span>Release Date :</span> ${object.releaseDate.toString().slice(0, 4) +
        "/" +
        object.releaseDate.toString().slice(4, 6) +
        "/" +
        object.releaseDate.toString().slice(6, 9)
        }
      </span>
      <span class="movieLength"><span>Length Time :</span> ${object.movieLength
        } min</span>
      <span class="movieGenre"><span>Genres : </span>${genre}</span>
      <span class="movieCreators"
        >
        <span>Creators: </span>${creators}</span
      >
      <!--poese of modal-->
      <span class="moviePrice"><span>Price : </span>${object.price} $</span>
      <span class="movieStock"><span> In Stock:</span>${object.stock ? object.stock : "Not Exist"
        }</span>
      <span class="movieLike">
        <svg
        fill = ${JSON.parse(localStorage.getItem("darkLight")).dark ? "#fff" : "#111"
        }
          class= 'darkLight'
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
          
        >
          <path 
            d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
          />
        </svg>
        ${object.likes}</span
      >
      <span class="movieRate"
        >IMDB :
        <span><span style = 'width:${object.rate * 10}%'> ${object.rate
        }</span></span>
      </span>

      <div id='clickMe${object.id}'> Click Me For More Info ... </div>
    </div>
  ${/*</div>*/ ""}`;

    return divMovieBox;
}
let start = 0;
let count = 6;
let startSrch = 0;
let countSrch = 6;
let exist = false;
let Genre = "AllGenre";
let ascending = true;
let sortBy = "";
startPrice.addEventListener("input", (event) => {
    startPriceOut.innerHTML = event.target.value;
    filterData();
});
finalPrice.addEventListener("input", (event) => {
    finalPriceOut.innerHTML = event.target.value;
    filterData();
});
startRate.addEventListener("input", (event) => {
    startRateOut.innerHTML = event.target.value;
    filterData();
});
finalRate.addEventListener("input", (event) => {
    finalRateOut.innerHTML = event.target.value;
    filterData();
});
AllStock.addEventListener("input", () => {
    exist = false
    filterData();
});
Exists.addEventListener("input", () => {
    exist = true;
    filterData();
});
nameSort.addEventListener("input", () => {
    filterData();
});
dateSort.addEventListener("input", () => {
    filterData();
});
priceSort.addEventListener("input", () => {
    filterData();
});
rateSort.addEventListener("input", () => {
    filterData();
});
existSort.addEventListener("input", () => {
    filterData();
});
likeSort.addEventListener("input", () => {
    filterData();
});
ascDsce.addEventListener("input", () => {
    filterData();
});
for (let i = 0; i < Object.keys(genreFilBox.children).length; i += 2) {
    genreFilBox.children[i].addEventListener("input", () => {
        filterData();
    });
}

// const map = movies.map(movie => renderMovies(movie));
// showItems.innerHTML = map.join('\n');
function filterData() {
    sortMovies();
    console.log(sortBy);
    showItems.innerHTML = '';
    whichGenre();
    let URL = "customApp.aspx/FilterData";
    let req = {
        method: "post",
        body: JSON.stringify({
            searchValue: Search.value,
            price: [startPrice.value,
            finalPrice.value],
            rate: [startRate.value, finalRate.value],
            exists: exist,
            Genres: Genre,
            asc: ascending,
            sortByWhich : sortBy
        }),
        headers: new Headers({
            "content-Type": "application/json"
        })

    };
    fetch(URL, req).then(response => response.json())
        .then(data => {
            renderMovies(data.d);
        }).catch(er => console.log(er));

    //console.log(s);


    //
    //renderMovies(s);







    //showItems.innerHTML = "";
    ////const searchResult = handleSearch();
    //let whichGen = whichGenre(searchResult);
    //let existStat = isExist(whichGen);
    //let priceFil = filterPrice(existStat);
    //  let filData = filteRate(priceFil);
    //  sortMovies(filData);


    //renderMovies(filData);
    return s;
}



let s = 1;



//

function renderMovies(list) {
    let help;
    list.forEach((movie) => {
        help = document.createElement("div");
        if (movie.stock === 0) {
            help.className = "movieBox not-exist";
        } else {
            help.className = "movieBox";
        }

        help.setAttribute("data-id", movie.id);
        help.innerHTML = renderMovie(movie);
        showItems.appendChild(help);

        eval("clickMe" + movie.id).addEventListener("click", () => { openModal(movie) });
    });
}

//renderMovies(movies);




function getDataFromBack(st, ct) {
    // calling backend
    //first step add some configuration
    const URL = "customApp.aspx/getMovies"
    const req = {
        method: "post",
        body: JSON.stringify({ startIndex: st, countOfItems: ct }),
        headers: new Headers({
            "content-Type": "application/json"
        })
    };
    // second calling
    fetch(URL, req)
        .then(response => response.json())
        .then(data => {
            console.log(data.d);
            renderMovies(data.d);
        }).catch(error => console.log(error));
}


getDataFromBack(start, count);



showMore.addEventListener("click", function () {


    //console.log("start:", start, 'count :', count);
    if (Search.value) {
        searchStringAdded = false;
        startSrch = startSrch + countSrch;
        handleSearch(Search.value);
    }
    else {
        start = start + count;
        getDataFromBack(start, count);
    }
});









Search.addEventListener("input", () => {
    handleSearch();
});
const handleSearch = (searchVal) => {
    // calling backend
    //first step add some configuration
    if (Search.value) {
        filterData();
    }

    else {
        showItems.innerHTML = '';
        console.log("start:", start + 3);
        getDataFromBack(0, start + 3);
    }

};











function sortMovies(filData) {

    if (ascDsce.checked) {
        ascending = false;
        ascDsceLabel.innerHTML = "Descending";
    } else {
        ascending = true;
        ascDsceLabel.innerHTML = "Ascending";
    }
    if (nameSort.checked) {
        sortBy = "name"
        //filData = filData.sort((fisrtMovie, secondMovie) => {
        //    const ex1 = ascOrder
        //        ? fisrtMovie.movieName.toLowerCase() >
        //        secondMovie.movieName.toLowerCase()
        //        : fisrtMovie.movieName.toLowerCase() <
        //        secondMovie.movieName.toLowerCase();
        //    const ex2 = !ex1;
        //    if (ex1) return +1;
        //    if (ex2) return -1;
        //    else return 0;
        //});
    }
    if (dateSort.checked) {
        sortBy = "date";
    }
    if (priceSort.checked) {
        sortBy = "price";
    }
    if (rateSort.checked) {
        sortBy = "rate";
    }
    if (existSort.checked) {
        sortBy = "stock";
    }
    if (likeSort.checked) {
        sortBy = "like";
    }
    //if (dateSort.checked) {
    //    filData = filData.sort((fisrtMovie, secondMovie) => {
    //        const ex1 = ascOrder
    //            ? fisrtMovie.releaseDate > secondMovie.releaseDate
    //            : fisrtMovie.releaseDate < secondMovie.releaseDate;
    //        const ex2 = !ex1;
    //        if (ex1) return +1;
    //        if (ex2) return -1;
    //        else return 0;
    //    });
    //}
    //if (priceSort.checked) {
    //    filData = filData.sort((fisrtMovie, secondMovie) => {
    //        const ex1 = ascOrder
    //            ? fisrtMovie.price > secondMovie.price
    //            : fisrtMovie.price < secondMovie.price;
    //        const ex2 = !ex1;
    //        if (ex1) return +1;
    //        if (ex2) return -1;
    //        else return 0;
    //    });
    //}
    //if (rateSort.checked) {
    //    filData = filData.sort((fisrtMovie, secondMovie) => {
    //        const ex1 = ascOrder
    //            ? fisrtMovie.rate > secondMovie.rate
    //            : fisrtMovie.rate < secondMovie.rate;
    //        const ex2 = !ex1;
    //        if (ex1) return +1;
    //        if (ex2) return -1;
    //        else return 0;
    //    });
    //}
    //if (existSort.checked) {
    //    filData = filData.sort((fisrtMovie, secondMovie) => {
    //        const ex1 = ascOrder
    //            ? fisrtMovie.stock > secondMovie.stock
    //            : fisrtMovie.stock < secondMovie.stock;
    //        const ex2 = !ex1;
    //        if (ex1) return +1;
    //        if (ex2) return -1;
    //        else return 0;
    //    });
    //}
    //if (likeSort.checked) {
    //    filData = filData.sort((fisrtMovie, secondMovie) => {
    //        const ex1 = ascOrder
    //            ? fisrtMovie.likes > secondMovie.likes
    //            : fisrtMovie.likes < secondMovie.likes;
    //        const ex2 = !ex1;
    //        if (ex1) return -1;
    //        if (ex2) return +1;
    //        else return 0;
    //    });
    //}
}





























//function filterDataFromServer() {
//    let URL = "customApp.aspx/PriceFilter"
//    if (priceFilChange) {
//        let req = {
//            method: "post",
//            body: JSON.stringify({ priceFrom: startPrice.value, priceTo: finalPrice.value }),
//            headers: new Headers({
//                "content-Type": "application/json"
//            })
//        };
//        fetch(URL, req)
//            .then(response => response.json())
//            .then(data => {
//                showItems.innerHTML = "";
//                console.log(data.d);
//                renderMovies(data.d);
//            }).catch(error => console.log(error));

//        priceFilChange = false;
//    }


//}
const whichGenre = () => {
    let result;
    const inputs = [];
    for (let i = 0; i < Object.keys(genreFilBox.children).length; i += 2) {
        inputs.push(genreFilBox.children[i]);
    }

    inputs.forEach((el) => {
        if (el.checked) {
            Genre = el.id;
        }
    });

};
/*
const isExist = (base = movies) => {
    let result;
    if (Exists.checked) {
        result = base.filter((movie) => movie.stock != 0);
        return result;
    }
    return base;
};
const filterPrice = (base = movies) => {
    let priceFilter = base.filter(
        (movie) =>
            movie.price >= startPrice.value && movie.price <= finalPrice.value
    );
    return priceFilter;
};
const filteRate = (base = movies) => {
    let rateFilter = base.filter(
        (movie) => movie.rate >= startRate.value && movie.rate <= finalRate.value
    );
    return rateFilter;
};
*/