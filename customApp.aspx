﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="customApp.aspx.cs" Inherits="customApp_Back.customApp" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie App</title>
    <link rel="icon" type="image/x-icon" href="./data/images/mainLogo/logo.png" />
    <link rel="stylesheet" href="./styles/body.css" />
    <link rel="stylesheet" href="./styles/navBar/navBar.css" />
    <link rel="stylesheet" href="./styles/navBar/menuBar.css" />
    <link rel="stylesheet" href="./styles/content/content.css" />
    <link rel="stylesheet" href="./styles/content/filtersSide.css" />
    <link rel="stylesheet" href="./styles/content/showItems.css" />
    <link rel="stylesheet" href="./styles/shoppingCartPage.css">
    <link rel="stylesheet" href="./styles/movieModal.css">
  </head>
  <body class="light">
    <div class="navBar">
      <div id="darkLightBox" class="darkLightBox">
        <img id="darkLightImg" src="./data/images/darkLight/brightness.png" />
        <span id="darkLightLabel" for="darkLight"> Dark Mode</span>
      </div>
      <div id="mainSearch">
        <label id="mainSearchIcon" for="Search"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="15"
            width="15"
            viewBox="0 0 512 512"
            fill="#555"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </label>
        <input id="Search" type="text" placeholder="search some thing ... " />
      </div>
      <div class="authHolder">
        <a href="#" id="Login">Log In</a>
        <!-- <a href="#" id="Register">Sign In</a
        > -->
      </div>
    </div>
    <div class="menuBar">
      <div id="logo">
        <img src="./data/images/mainLogo/logo.png" height="50px" alt="" />
      </div>

      <ul id="Menu" class="flex-color">
        <li id="closeMenu">×</li>
        <li>Movies</li>
        <li>Creators</li>
        <li>Gadjets</li>
        <li>Environments</li>
        <li>Guidances</li>
        <li>Contact Us</li>
        <li>More Info</li>
      </ul>
      <div>
        <button id="openMenu" type="button" class="flex-color">
          <svg class="darkLight" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        <div id="shoppingCartBtn" >
          Shopping Cart
          <svg
          class="darkLight"
            
            id = "shoppingCartSVG"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
        </div>
      </div>

    </div>
    <div id="content">
      <ul id="filters">
        <li>
          <input id="openStatPriceFil" type="checkbox" checked name="filters" />
          <label for="openStatPriceFil">Price</label>
          <div id="priceFilBox" class="rangi">
            <span>from</span>
            <input
              id="startPrice"
              type="range"
              min="0"
              max="100"
              step="1"
              value="0"
            />
            <output id="startPriceOut">0 $</output>
            <span>to</span>
            <input
              id="finalPrice"
              type="range"
              min="0"
              max="100"
              step="1"
              value="100"
            />
            <output id="finalPriceOut">100 $</output>
          </div>
        </li>
        <li>
          <input id="openStatGenreFil" type="checkbox" checked name="filters" />
          <label for="openStatGenreFil">Genre</label>
          <div id="genreFilBox">
            <input id="AllGenre" type="radio" name="Genres"  />
            <label for="AllGenre"> All Genre </label>
            <input id="Action" type="radio" name="Genres" />
            <label for="Action"> Action </label>
            <input id="Commedy" type="radio" name="Genres"   />
            <label for="Commedy"> Comedy </label>
            <input id="Romancy" type="radio" name="Genres" />
            <label for="Romancy"> Romancy </label>
            <input id="Drama" type="radio" name="Genres" />
            <label for="Drama"> Drama </label>
            <input id="Animation" type="radio" name="Genres" />
            <label for="Animation"> Animation </label>
            <input id="Sci-Fi" type="radio" name="Genres" />
            <label for="Sci-Fi"> Sci-Fi </label>
            <input id="Fantasy" type="radio" name="Genres"  />
            <label for="Fantasy"> Fantasy </label>
          </div>
        </li>
        <li>
          <input id="openStatStockFil" type="checkbox" name="filters" />
          <label for="openStatStockFil">Stock</label>
          <div id="stockFilBox">
            <input id="AllStock" type="radio" name="Stock" />
            <label for="AllStock"> All </label>
            <input id="Exists" type="radio" name="Stock" />
            <label for="Exists"> Exists </label>
          </div>
        </li>
        <li>
          <input id="openStatRateFil" type="checkbox" name="filters" />
          <label for="openStatRateFil">Rate</label>
          <div id="rateFilBox" class="rangi">
            <span>from</span>
            <input
              id="startRate"
              type="range"
              min="0"
              max="10"
              step="0.1"
              value="0"
            >
            <output id="startRateOut">0 </output>
            <span>to</span>
            <input
              id="finalRate"
              type="range"
              min="0"
              max="10"
              step="0.1"
              value="10"
            />
            <output id="finalRateOut">10 </output>
          </div>
        </li>
      </ul>
      <div class="contentHolder">
        <ul class="sorts">
          <li>
            <input type="checkbox" id="ascDsce" name="sorts">
            <label id="ascDsceLabel" for="ascDsce">Ascending</label>
          </li>
          <li >
            <input type="radio" id="nameSort" name="sorts">
            <label for="nameSort">By Name</label>
          </li>
          <li >
            <input type="radio" id="dateSort" name="sorts">
            <label for="dateSort">Newest</label>
          </li>
          <li >
            <input type="radio" id="priceSort" name="sorts">
            <label for="priceSort">Cheapest</label>
          </li>
          <li >
            <input type="radio" id="rateSort" name="sorts">
            <label for="rateSort">IMDB Rate</label>
          </li>
          <li >
            <input type="radio" id="existSort" name="sorts">
            <label for="existSort">Exists</label>
          </li>
          <li >
            <input type="radio" id="likeSort" name="sorts">
            <label for="likeSort">Popular</label>
          </li>
          

        </ul>
        <div id="showItems">

        </div>
          <div id="showMore"> Show More Movies</div>
      </div>
      
      
    </div>
    <div id="shoppingCartPage" class="darkLight flex-color">
      <div id = 'closeSCP'>
        <svg 
        class="darkLight"
        xmlns="http://www.w3.org/2000/svg" 
        height="16" width="12" viewBox="0 0 384 512">
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>
        </div>
        <div id="shoppingCartHolder">


          <div class="SCHItems"> 
            <div>
              <button id="plus">
                -
              </button>
              <button id="minus">
                +
              </button>
              <span> 
                this is statick 
              </span>
            </div>            
            <span> Count : </span>          
            <span> Name : sandadkal </span>
            <span> Price : 100 $</span>
            <span> Rate : 12</span>
        </div>


        </div>
        <div id="totalPrice">
          <span>total price : </span>
        </div>
        <div id="peyment" >
          Peyment
        </div>
      </div>
    <div id="movieModal" class="flex-color">
      <div id="closeMM">
        <svg 
          class="darkLight"
          xmlns="http://www.w3.org/2000/svg" 
          height="16" width="12" viewBox="0 0 384 512">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      </div>
      <div class="holder">      
        <div id="slider">
        <div id="gallery">
          <div class="items">
            <img src="./data/images/movies/Aladdin/01.jpg" alt="sorry" /> 
          </div>
          <div class="items">
            <img src="./data/images/movies/Aladdin/02.jpg" alt="sorry" />
          </div>
          <div class="items">
            <img src="./data/images/movies/Aladdin/03.jpg" alt="sorry" />
          </div>
          <div class="items">
            <img src="./data/images/movies/Aladdin/04.jpg" alt="sorry" />
          </div>
          <div class="items">
            <img src="./data/images/movies/Aladdin/05.jpg" alt="sorry" />
          </div>
        </div>
        <div id="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="rightClick">
          <svg class="darkLight" xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
        
        <div id="leftClick">
          <svg 
          class="darkLight"
          xmlns="http://www.w3.org/2000/svg" 
          height="16" 
          width="10" 
          viewBox="0 0 320 512">
          
         
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </div>
      </div>
      
      <div id="modalInfo">
        <div id="addToBascket">Add To Shopping Cart 
          <svg
          class="darkLight"
          id = "shoppingCartSVG"
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="18"
          viewBox="0 0 576 512"
        >
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
        </div> 
      </div>
    </div>


      </div>
    
    <%--<h1 id="ForCSharp" runat="server"></h1>--%>
    <script type="text/javascript" src="./scripts/fakeMoviesData.js"></script>
    <script type="text/javascript" src="./scripts/darkLight.js"></script>
    <script type="text/javascript" src="./scripts/shoppingCart.js"></script>
    <script type="text/javascript" src="./scripts/movieModal.js"></script>
    <script type="text/javascript" src="./scripts/renderData.js"></script>
    <script src="./scripts/openCloseMenu.js"></script>
  </body>
</html>

