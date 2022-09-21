import { useRef } from "react";
import { useState } from "react";
import DataContext from "../Contexts/DataContext";
import Filter from "./Filter";
import Gallery from "./Gallery";
import { galleryData } from "../js/data/galleryData.js";

function Home(){

    const [search, setSearch] = useState('');

    const [sortType, setSortType] = useState('relevant');
    const [carType, setCarType] = useState('both');
    const [priceGap, setPriceGap] = useState('any');
    const [yearGap, setYearGap] = useState('any');

    const [cbAsc, setCbAsc] = useState(true);
    const [cbDesc, setCbDesc] = useState(true);

    const galleryBlock = useRef(null);
    const filterBlock = useRef(null);
    
    const [galleryItems, setGalleryItems] = useState(galleryData);

    return (
        <DataContext.Provider value={{
            sortType, setSortType,
            carType, setCarType,
            priceGap, setPriceGap,
            yearGap, setYearGap,
            cbAsc, setCbAsc,
            cbDesc, setCbDesc,
            setGalleryItems,
            galleryItems,
        }}>
        <div className="home">
            <header className="container" id="header-container">
                <a href="./" className="logo-container">
                    <img src={require('../img/car_logo.png')} alt="Car logo" className="logo" id="header-logo"/>
                    <h1>Car shop</h1>
                </a>
                <div className="nav-link-container">
                    <nav className="header-nav">
                        <a href="./login.html">Log in</a>
                        <a href="/#">About</a>
                        <a href="/#">Contacts</a>
                        <a href="/#">Help</a>
                        <hr className="header-line"/>
                    </nav>
                    <div className="nav-icon-container">
                        <a href="/#" className="fa fa-moon-o header-mode" id="mode-changer"> </a>
                        <a href="/#" className="fa fa-wheelchair header-mode"> </a>
                    </div>
                </div>
            </header>
            <main className="main-container">
                <div className="left-item mode-color">
                    <div className="category-list">
                        <h2>A</h2>
                        <a href="/#" className="hover-color-change">A:a</a>
                        <a href="/#" className="hover-color-change">A:b</a>
                        <a href="/#" className="hover-color-change">A:c</a>
                    </div>
                    <div className="category-list">
                        <h2>B</h2>
                        <a href="/#" className="hover-color-change">B:a</a>
                        <a href="/#" className="hover-color-change">B:b</a>
                        <a href="/#" className="hover-color-change">B:c</a>
                    </div>
                </div>
                <div className="right-item mode-color">
                    <div className="search-bar">
                        <form id="form-search">
                            <input type="search" name="search_bar" id="search_bar" placeholder="Search..." 
                                value={search} onChange={e => setSearch(e.target.value)}/>
                        </form>
                        <button type="button" name="submit_button" className="fa fa-search btn-search" id="btn-search" form="form-search" value="Search"/>
                    </div>
                    <Filter galleryBlock={galleryBlock} filterBlock={filterBlock}/>
                    <Gallery galleryBlock={galleryBlock}/> 
                </div>
                <div className="ad-container">
                    <a href="/#" target="_blank">
                        <img src={require('../img/add_with_example.jpg')} alt="commercial product showcase"/>
                    </a>
                </div>
            </main>
            <footer className="container footer-mode">
                <a href="/#" className="fa fa-facebook social-img"> </a>
                <a href="/#" className="fa fa-twitter social-img"> </a>       
                <a href="/#" className="fa fa-instagram social-img"> </a>
                <a href="/#" className="fa fa-linkedin social-img"> </a>        
                <p>&#169; Anonymous</p>
            </footer>
        </div>
        </DataContext.Provider>
    );
}

export default Home;