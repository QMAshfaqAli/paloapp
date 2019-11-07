import React, {Component} from "react";
import BigImage from '../atoms/bigImage';
import NewsNoImage from '../atoms/newsNoImage';
import MoreButton from '../atoms/loadMoreButton';
import cssStyle from './fourColTopImage.module.css';
import apiService from '../../services/apiService';


class FourColTopImage extends Component {

    state = {
        col1: [],
        col2: [],
        col3: [],
        col4: []
    };

    componentDidMount() {

        this.renderPosts();
    }

    renderPosts = async () => {
        try {
            const result = await apiService.getStories(this.props.offset, this.props.limit, this.props.fields);

            this.setState({
                col1: result.stories.map((item, i) => (
                   <div key={i}>
                       {( () => {
                           if (i === 0) {
                               return <BigImage

                                   className={cssStyle.bigImage}
                                   title={item.headline}
                                   imageUrl={item["hero-image-s3-key"]}
                                   webUrl={item.slug}
                               />
                           } else {
                               return <NewsNoImage
                                   title={item.headline}
                                   webUrl={item.slug}/>

                           }
                       }) ()}
                   </div>
                )),

                col2: result.stories.map((item, i) => (
                    <div key={i}>
                        {( () => {
                            if (i === 0) {
                                return <BigImage

                                    className={cssStyle.bigImage}
                                    title={item.headline}
                                    imageUrl={item["hero-image-s3-key"]}
                                    webUrl={item.slug}
                                />
                            } else {
                                return <NewsNoImage

                                    title={item.headline}
                                    webUrl={item.slug}/>

                            }
                        }) ()}
                    </div>
                )),

                col3: result.stories.map((item, i) => (
                    <div key={i}>
                        {( () => {
                            if (i === 0) {
                                return <BigImage

                                    className={cssStyle.bigImage}
                                    title={item.headline}
                                    imageUrl={item["hero-image-s3-key"]}
                                    webUrl={item.slug}
                                />
                            } else {
                                return <NewsNoImage

                                    title={item.headline}
                                    webUrl={item.slug}/>

                            }
                        }) ()}
                    </div>
                )),

                col4: result.stories.map((item, i) => (
                    <div key={i}>
                        {( () => {
                            if (i === 0) {
                                return <BigImage

                                    className={cssStyle.bigImage}
                                    title={item.headline}
                                    imageUrl={item["hero-image-s3-key"]}
                                    webUrl={item.slug}
                                />
                            } else {
                                return <NewsNoImage

                                    title={item.headline}
                                    webUrl={item.slug}/>

                            }
                        }) ()}
                    </div>
                ))
            });

        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div className={`container ${cssStyle.wrapperContainer}`}>
                <div className={cssStyle.Col1}>
                    <h3>{this.props.col1}</h3>
                    <div className={cssStyle.wrapper}>
                        {this.state.col1}
                    </div>
                    <MoreButton url="" text="আরও"/>
                </div>

                <div className={cssStyle.Col2}>
                    <h3>{this.props.col2}</h3>
                    <div className={cssStyle.wrapper}>
                        {this.state.col2}
                    </div>
                    <MoreButton url="" text="আরও"/>
                </div>

                <div className={cssStyle.Col3}>
                    <h3>{this.props.col3}</h3>
                    <div className={cssStyle.wrapper}>
                        {this.state.col3}
                    </div>
                    <MoreButton url="" text="আরও"/>
                </div>

                <div className={cssStyle.Col4}>
                    <h3>{this.props.col4}</h3>
                    <div className={cssStyle.wrapper}>
                        {this.state.col4}
                    </div>
                    <MoreButton url="" text="More"/>
                </div>
            </div>
        )
    }
}

export default FourColTopImage;