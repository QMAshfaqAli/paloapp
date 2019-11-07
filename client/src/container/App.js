import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';
import MyRecommendation from '../component/fourCol/fourCol';
import ThreeColBigCenter from '../component/threeColBigCenter/threeColBigCenter';
import ThreeColRightWidget from '../component/threeColRightWidget/threeColRightWidget';
import ThreeColBigImage from '../component/threeColBigImage/threeColBigImage';
import TwoColFirstBig from '../component/twoColFirstBig/twoColFirstBig';
import FourColTopImage from '../component/fourColTopImage/FourColTopImage';
import Menu from "../component/atoms/menu";
import apiService from '../services/apiService';

class App extends Component {

    state = {
        menu: [],
        footerMenu: [],
        staticFooterMenu: []
    };

    componentDidMount() {

        this.renderPosts();
    }

    renderPosts = async () => {
        try {
            const result = await apiService.getMenus();

            this.setState({
                menu: result["menu-groups"].home.items.map((item, i) => (
                    <Menu
                        key={i}
                        name={item.title}
                        slug={item["section-slug"]}
                    />
                )),
                footerMenu: result["menu-groups"].footermenulinks.items.map((item, i) => (
                    <Menu
                        key={i}
                        name={item.title}
                        slug={item["section-slug"]}
                    />
                )),
                staticFooterMenu: result["menu-groups"]["static-footer-links"].items.map((item, i) => (
                    <Menu
                        key={i}
                        name={item.title}
                        slug={item["url"]}
                    />
                ))
            });

        } catch (err) {
            console.log(err);
        }
    };

    render() {


        return (
            <BrowserRouter>
                <div className="App">
                    <Header
                        menuList={this.state.menu}/>

                    <div className="Container">
                        <ThreeColBigCenter
                            title="বিনোদন"
                            fields='id,headline,subheadline,slug,sections,tags,author-name,authors,hero-image-s3-key,hero-image-metadata,published-at,story-template'
                            offset=''
                            limit='9'/>

                        <MyRecommendation
                            title="আপনার পছন্দ হতে পারে"
                            fields='id,headline,subheadline,slug,sections,tags,author-name,authors,hero-image-s3-key,hero-image-metadata,published-at,story-template'
                            offset=''
                            limit='4'/>

                        <ThreeColRightWidget
                            title="খেলা"
                            fields='id,headline,subheadline,slug,sections,tags,author-name,authors,hero-image-s3-key,hero-image-metadata,published-at,story-template'
                            offset=''
                            limit='6'/>

                        <ThreeColBigImage
                            title="বাংলাদেশ"
                            fields='id,headline,subheadline,slug,sections,tags,author-name,authors,hero-image-s3-key,hero-image-metadata,published-at,story-template'
                            offset=''
                            limit='6'/>

                        <TwoColFirstBig
                            title="অর্থনীতি"
                            fields='id,headline,subheadline,slug,sections,tags,author-name,authors,hero-image-s3-key,hero-image-metadata,published-at,story-template'
                            offset=''
                            limit='4'/>

                        <FourColTopImage
                            col1="আন্তর্জাতিক"
                            col2="দূর পরবাস"
                            col3="উত্তর আমেরিকা"
                            col4="English"
                            fields='id,headline,subheadline,slug,sections,tags,author-name,authors,hero-image-s3-key,hero-image-metadata,published-at,story-template'
                            offset=''
                            limit='4'/>
                    </div>

                    <Footer
                        footerMenu={this.state.footerMenu}
                        staticFooterMenu={this.state.staticFooterMenu}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
