import { useState } from "react";

function Home(){

    const [search, setSearch] = useState('');

    const [sortType, setSortType] = useState('relevant');
    const [carType, setCarType] = useState('both');
    const [priceGap, setPriceGap] = useState('any');
    const [yearGap, setYearGap] = useState('any');

    const [cbAsc, setCbAsc] = useState(true);
    const [cbDesc, setCbDesc] = useState(true);

    return (
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
                    <div className="filter-container">
                        <h2 className="filter-title" id="filter_expander"><ins>Filter</ins> {'>>'} </h2>
                        <form id="filter_form">
                            <div className="select-1">
                                <label htmlFor="sort">Sort:</label><br/>     
                                <select id="sort" name="sort" 
                                value={sortType} onChange={(e)=>setSortType(e.target.value)}>
                                    <option value="relevant">Relevant</option>
                                    <option value="new">New</option>
                                </select>
                            </div>
                            <div className="select-2">
                                <label htmlFor="c-type">Type:</label><br/>
                                <select id="c-type" name="c-type" 
                                value={carType} onChange={(e)=>setCarType(e.target.value)}>
                                    <option value="both">Both</option>
                                    <option value="mechanical">Mechanical</option>
                                    <option value="nonMechanical">Non-mechanical</option>
                                </select>
                            </div>
                            <div className="select-3">
                                <label htmlFor="price-gap">Price:</label><br/>
                                <select id="price-gap" name="price-gap" 
                                value={priceGap} onChange={(e) => setPriceGap(e.target.value)}>
                                    <option value="any">Any</option>
                                    <option value="500 - 1500">500 - 1500 &euro;</option>
                                    <option value="1500 - 2500">1500 - 2500 &euro;</option>
                                    <option value="2500 - 3500">2500 - 3500 &euro;</option>
                                    <option value="3500 - 4500">3500 - 4500 &euro;</option>
                                    <option value="4500 - 6000">4500 - 6000 &euro;</option>
                                </select>
                            </div>
                            <div className="select-4">
                                <label htmlFor="c-age">Vehicle age:</label><br/>
                                <select id="c-age" name="c-type" 
                                value={yearGap} onChange={(e) => setYearGap(e.target.value)}>
                                    <option value="any">Any</option>
                                    <option value="1 - 3">1 - 3 years</option>
                                    <option value="3 - 5">3 - 5 years</option>
                                    <option value="5 - 10">5 - 10 years</option>
                                </select>
                            </div>
                            <div className="sort-option">
                                <input type="radio" id="radio-a-input" name="radio-input" value="ascend" 
                                checked={cbAsc} onChange={() => setCbAsc(c => !c)}/>
                                <label htmlFor="radio-a-input">Ascend</label><br/>
                                <input type="radio" id="radio-d-input" name="radio-input" value="descend"
                                checked={cbDesc} onChange={() => setCbDesc(c => !c)}/>
                                <label htmlFor="radio-d-input">Descend</label><br/>
                            </div>
                            <input type="button" name="btn-apply" id="btn-apply" value="Apply"/>
                        </form>
                    </div>
                    <div className="gallery-container" id="gallery_container">
                
                    </div> 
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
    );
}

export default Home;