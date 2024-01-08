using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.Services;
using System.Web.UI.WebControls;
using System.Runtime.InteropServices;

namespace customApp_Back
{
    public partial class customApp : System.Web.UI.Page
    {
        public class creatorsCls
        {
            public string Director;
            public string Athor;
            public creatorsCls() { }
            public creatorsCls(string Director)
            {
                this.Director = Director;
            }
            public creatorsCls(string Director, string Athor)
            {
                this.Director = Director;
                this.Athor = Athor;
            }
        }
        public class movie
        {
            public byte id;
            public string movieName;
            public string[] movieGenre;
            public long stock;
            public float rate;
            public int releaseDate;
            public int movieLength;
            public creatorsCls creators;
            public string[] images;
            public int price;
            public int likes;
            public string discribe;

            public movie(byte id, string movieName, string[] movieGenre, long stock, float rate, int releaseDate, int movieLength, creatorsCls creators, string[] images, int price, int likes, string discribe)
            {
                this.id = id;
                this.movieName = movieName;
                this.movieGenre = movieGenre;
                this.stock = stock;
                this.rate = rate;
                this.releaseDate = releaseDate;
                this.movieLength = movieLength;
                this.creators = creators;
                this.images = images;
                this.price = price;
                this.likes = likes;
                this.discribe = discribe;
            }

        }
        public static List<movie> movies = new List<movie>();
        public static List<movie> searchedData = (List<movie>)movies.ToList();
        public static bool searched = false;
        public static void asign()
        {
            searchedData = movies.ToList();
            filteredData = movies.ToList();
        }
        

        public static List<movie> filteredData = new List<movie>(movies);
        [WebMethod]
        public static List<movie> getMovies(int startIndex, int countOfItems)
        {
            asign();
            filteredData = new List<movie>(movies);
            bool condition1 = (Math.Abs((startIndex + countOfItems) - filteredData.Count) <= countOfItems) && (startIndex + countOfItems >= filteredData.Count);
            bool condition2 = (Math.Abs((startIndex + countOfItems) + filteredData.Count) > countOfItems) && (startIndex + countOfItems >= filteredData.Count);
            if (condition1)
            {
                return filteredData.GetRange(startIndex,filteredData.Count - startIndex  );
            }

            if (condition2)
                return null;

            else
            {
                return filteredData.GetRange(startIndex, countOfItems);
            }
        }
        
        

        public static List<movie> GetSearchResult(string searchValue)
        {
            //bool condition1 = (Math.Abs((searchStart + searchCount) - searchedData.Count) <= searchCount) && (searchStart + searchCount >= searchedData.Count);
            //bool condition2 = (Math.Abs((searchStart + searchCount) + searchedData.Count) > searchCount) && (searchStart + searchCount >= searchedData.Count);
            return (List<movie>)movies.Where(movie => movie.movieName.ToLower().IndexOf(searchValue.ToLower()) != -1).ToList();

        }
        [WebMethod]
        public static List<movie> GetPriceResult(int  priceFrom , int priceTo , List<movie> lst) {

            return (List<movie>)lst.Where(movie => movie.price >= priceFrom && movie.price <= priceTo).ToList(); ;
        }

        public static List<movie> GetRateResult(float rateFrom ,float rateTo ,List<movie> lst)
        {
            List<movie> rateResult = (List<movie>)lst.Where(movie => movie.rate >= rateFrom && movie.rate <= rateTo).ToList(); ;
            return rateResult;
        }
        
        public static List<movie> GetExistsStat(bool e , List<movie> lst)
        {
            if (e)
            {
                return (List<movie>)lst.Where(movie => movie.stock > 0).ToList();
            }
            return lst;
        }
        

        public static List<movie> GetByGenre(string genre , List<movie> lst) { 
            if(genre == "AllGenre")
                return lst;
            return (List<movie>)lst.Where(movie => movie.movieGenre.Contains(genre)).ToList();
        }
        
        private static int compairByDate(int firstMovie ,int secondmovie )
        {
            if(firstMovie > secondmovie)
            {
                return 1;
            }
            else if (firstMovie < secondmovie)
            {
                return -1;
            }
            return 0;
        }
        public static List<movie> GetSort(bool ascending,string srtBy,List<movie> lst) {
            if(srtBy == "")
                return lst;
            if (ascending)
            {
                if (srtBy == "date")
                {
                    return lst.OrderBy(m => m.releaseDate).ToList();
                }
                else if(srtBy == "name")
                {
                    return lst.OrderBy(m => m.movieName).ToList();
                }
                else if (srtBy == "price")
                {
                    return lst.OrderBy(m => m.price).ToList();
                }
                else if (srtBy == "rate")
                {
                    return lst.OrderBy(m => m.rate).ToList();
                }
                else if (srtBy == "stock")
                {
                    return lst.OrderBy(m => m.stock).ToList();
                }
                else
                {
                    return lst.OrderBy(m => m.likes).ToList();
                }
            }
            else if (!ascending)
            {
                if (srtBy == "date")
                {
                    return lst.OrderBy(m => m.releaseDate).Reverse().ToList();
                }
                else if (srtBy == "name")
                {
                    return lst.OrderBy(m => m.movieName).Reverse().ToList();
                }
                else if (srtBy == "price")
                {
                    return lst.OrderBy(m => m.price).Reverse().ToList();
                }
                else if (srtBy == "rate")
                {
                    return lst.OrderBy(m => m.rate).Reverse().ToList();
                }
                else if (srtBy == "stock")
                {
                    return lst.OrderBy(m => m.stock).Reverse().ToList();
                }
                else
                {
                    return lst.OrderBy(m => m.likes).Reverse().ToList();
                }
            }

            return lst;
        
        }
        
        [WebMethod]
        public static List<movie> FilterData(string searchValue, int[] price , float[] rate ,bool exists ,string Genres ,bool asc , string sortByWhich)
        {

            List<movie> searchRes = GetSearchResult(searchValue);
            List<movie> priceFilRes = GetPriceResult(price[0], price[1],searchRes);
            List<movie> rateRes = GetRateResult(rate[0], rate[1] ,priceFilRes);
            List<movie> isExist = GetExistsStat(exists,rateRes);
            List<movie> whichGenre = GetByGenre(Genres, isExist);
            List<movie> sort = GetSort(asc, sortByWhich ,whichGenre );
            return (List<movie>)sort.ToList();
        }


        protected void Page_Load(object sender, EventArgs e)
        {

            movies.Clear();
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            // HERE I WAS LAZY AND WROTE A PROGRAM THAT MADE THESE OBJECTS :)
            movies.Add(new movie(0, "Spider Man", new string[] { "Action" }, 926, 7.25f, 20061023, 156, new creatorsCls("Mahdi Ghaffari","Ali Mirzaei"), new string[] { "./data/images/movies/spiderman/01.jpg", "./data/images/movies/spiderman/02.jpg", "./data/images/movies/spiderman/03.jpg", "./data/images/movies/spiderman/04.jpg", "./data/images/movies/spiderman/05.jpg" }, 30, 154786, "SpiderMan Discribtion"));                                                                                                                                                        
            movies.Add(new movie(1, "Aladdin", new string[] { "Fantasy", "Commedy", "Romancy" }, 352, 5.12f, 20160125, 205, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/Aladdin/01.jpg", "./data/images/movies/Aladdin/02.jpg", "./data/images/movies/Aladdin/03.jpg", "./data/images/movies/Aladdin/04.jpg", "./data/images/movies/Aladdin/05.jpg" }, 23, 11578, "Aladdin discribtion"));
            movies.Add(new movie(2, "Aquaman", new string[] { "Action", "Fantasy", "Sci-Fi" }, 503, 2.5f, 20211013, 156, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/aquaman/01.jpg", "./data/images/movies/aquaman/02.jpg", "./data/images/movies/aquaman/03.jpg", "./data/images/movies/aquaman/04.jpg", "./data/images/movies/aquaman/05.jpg" }, 87, 15546, "Aquaman discribtion"));
            movies.Add(new movie(3, "Barbei", new string[] { "Fantasy", "Commedy" }, 0, 0.5f, 20110523, 96, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/barbie/01.jpg", "./data/images/movies/barbie/02.jpg", "./data/images/movies/barbie/03.jpg", "./data/images/movies/barbie/04.jpg", "./data/images/movies/barbie/05.jpg" }, 51, 100786, "Barbie discribtion"));
            movies.Add(new movie(4, "Charli Chaplin", new string[] { "Commedy" }, 0, 9.5f, 20050318, 253, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/charlychplin/01.jpg", "./data/images/movies/charlychplin/02.jpg", "./data/images/movies/charlychplin/03.jpg", "./data/images/movies/charlychplin/04.jpg", "./data/images/movies/charlychplin/05.jpg" }, 100, 1547790, "Charli Chaplin discribtion"));
            movies.Add(new movie(5, "Chiمcken Run Dawn of the Nugget", new string[] { "Animation", "Commedy" }, 693, 8.3f, 19990901, 106, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/Chicken/01.jpg", "./data/images/movies/Chicken/02.jpg", "./data/images/movies/Chicken/03.jpg", "./data/images/movies/Chicken/04.jpg", "./data/images/movies/Chicken/05.jpg" }, 95, 1540, "Chicken Run Dawn of the Nugget discribtion"));
            movies.Add(new movie(6, "Detachment Man", new string[] { "Drama" }, 439, 6.9f, 20131023, 176, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/Detachment/01.jpg", "./data/images/movies/Detachment/02.jpg", "./data/images/movies/Detachment/03.jpg", "./data/images/movies/Detachment/04.jpg", "./data/images/movies/Detachment/05.jpg" }, 63, 1586, "Detachment discribtion"));
            movies.Add(new movie(7, "equalizer", new string[] { "Action" }, 0, 3.4f, 20230414, 136, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/equalizer1/01.jpg", "./data/images/movies/equalizer1/02.jpg", "./data/images/movies/equalizer1/03.jpg", "./data/images/movies/equalizer1/04.jpg", "./data/images/movies/equalizer1/05.jpg" }, 100, 154111, "equalizer discribtion"));
            movies.Add(new movie(8, "fastandfurious", new string[] { "Action" }, 26, 9.5f, 20010817, 151, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/fastandfurious/01.jpg", "./data/images/movies/fastandfurious/02.jpg", "./data/images/movies/fastandfurious/03.jpg", "./data/images/movies/fastandfurious/04.jpg", "./data/images/movies/fastandfurious/05.jpg" }, 23, 186, "fastandfurious discribtion"));
            movies.Add(new movie(9, "home alone", new string[] { "Fantasy", "Commedy" }, 790, 7.9f, 20160510, 93, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/homeAlone/01.jpg", "./data/images/movies/homeAlone/02.jpg", "./data/images/movies/homeAlone/03.jpg", "./data/images/movies/homeAlone/04.jpg", "./data/images/movies/homeAlone/05.jpg" }, 10, 154786, "home alone discribtion")); 
            movies.Add(new movie(10, "Ice Of Age", new string[] { "Fantasy", "Animation", "Commedy" }, 0, 9.8f, 20010631, 112, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/iceofage1/01.jpg", "./data/images/movies/iceofage1/02.jpg", "./data/images/movies/iceofage1/03.jpg", "./data/images/movies/iceofage1/04.jpg", "./data/images/movies/iceofage1/05.jpg" }, 70, 15479, "Ice Of Age  discribtion"));
            movies.Add(new movie(11, "I Lost My Body", new string[] { "Drama", "Fantasy", "Animation", "Romancy" }, 862, 5.1f, 20170409, 136, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/ilostmybody/01.jpg", "./data/images/movies/ilostmybody/02.jpg", "./data/images/movies/ilostmybody/03.jpg", "./data/images/movies/ilostmybody/04.jpg", "./data/images/movies/ilostmybody/05.jpg" }, 42, 954786, "I Lost My Body discribtion")); 
            movies.Add(new movie(12, "John Wick", new string[] { "Action", "Fantasy" }, 926, 9.3f, 20230127, 184, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/John.Wick/01.jpg", "./data/images/movies/John.Wick/02.jpg", "./data/images/movies/John.Wick/03.jpg", "./data/images/movies/John.Wick/04.jpg", "./data/images/movies/John.Wick/05.jpg" }, 6, 654786, "John Wick discribtion"));
            movies.Add(new movie(13, "Pianist", new string[] { "Drama" }, 301, 4.8f, 20010505, 100, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/pianist/01.jpg", "./data/images/movies/pianist/01.jpg", "./data/images/movies/pianist/01.jpg", "./data/images/movies/pianist/01.jpg", "./data/images/movies/pianist/01.jpg" }, 87, 784786, "Pianist discribtion")); 
            movies.Add(new movie(14, "Shrek 1 ", new string[] { "Fantasy", "Animation", "Commedy" }, 0, 10f, 20020415, 98, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/shrek1/01.jpg", "./data/images/movies/shrek1/02.jpg", "./data/images/movies/shrek1/03.jpg", "./data/images/movies/shrek1/04.jpg", "./data/images/movies/shrek1/05.jpg" }, 14, 1154786, "Shrek 1  discribtion"));
            movies.Add(new movie(15, "Super Man", new string[] { "Action", "Fantasy", "Sci-Fi" }, 50, 3.5f, 20171023, 163, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/superman/01.jpg", "./data/images/movies/superman/01.jpg", "./data/images/movies/superman/01.jpg", "./data/images/movies/superman/01.jpg", "./data/images/movies/superman/01.jpg" }, 92, 154786, "Super Man discribtion")); 
            movies.Add(new movie(16, "Terminator", new string[] { "Action", "Fantasy", "Sci-Fi" }, 269, 6.8f, 20040105, 119, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/terminator/01.jpg", "./data/images/movies/terminator/02.jpg", "./data/images/movies/terminator/03.jpg", "./data/images/movies/terminator/04.jpg", "./data/images/movies/terminator/05.jpg" }, 16, 4454786, "Terminator discribtion"));
            movies.Add(new movie(17, "The Curious Case of Benjamin Button", new string[] { "Drama", "Fantasy", "Romancy", "Sci-Fi" }, 333, 8.1f, 20080923, 202, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg", "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg", "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg", "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg", "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg" }, 45, 154786, "The Curious Case of Benjamin Button"));
            movies.Add(new movie(18, "The Shawshank", new string[] { "Drama", "Fantasy" }, 10, 9.9f, 20111207, 137, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/TheShawshank/01.jpg", "./data/images/movies/TheShawshank/02.jpg", "./data/images/movies/TheShawshank/03.jpg", "./data/images/movies/TheShawshank/04.jpg", "./data/images/movies/TheShawshank/05.jpg" }, 58, 324786, "The Shawshank discribtion"));
            movies.Add(new movie(19, "Titanic", new string[] { "Drama", "Fantasy", "Romancy" }, 500, 7.24f, 20121123, 236, new creatorsCls("Mahdi Ghaffari", "Ali Mirzaei"), new string[] { "./data/images/movies/titanic/01.jpg", "./data/images/movies/titanic/01.jpg", "./data/images/movies/titanic/01.jpg", "./data/images/movies/titanic/01.jpg", "./data/images/movies/titanic/01.jpg" }, 68, 224786, ""));
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
            //int[] grades = new int[] { 1, 2, 3 };
            ////testForCS.InnerHtml = grades[0].ToString(); //Convert.ToString(grade[i]);
            //ArrayList arr = new ArrayList();
            //arr.Add(1);
            //arr.Add(2);
            //arr.Add(grades);
            //List<byte> height = new List<byte>();
            //height.Add(124);
            //height.Add(180);
            //height.Add(193);
            //height.Add(162);
            //Dictionary<string, byte> stHeights = new Dictionary<string, byte>();
            //stHeights.Add("AmirAli", 189);
            //stHeights.Add("Mahdi", 178);
            //stHeights.Add("Haj Abdollah", 183);
            //stHeights.Add("Ashraf", 163);

        }
    }
}