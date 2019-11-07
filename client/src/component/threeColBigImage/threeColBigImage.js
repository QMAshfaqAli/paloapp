import React, {Component} from "react";
import LeftImage from '../atoms/leftImage';
import BigImage from '../atoms/bigImage';
import cssClass from './threeColBigImage.module.css';
import apiService from '../../services/apiService';


class ThreeColBigCenter extends Component {

    state = {
        lead: [],
        col1: [],
        col2: []
    };

    componentDidMount() {

        this.renderPosts();
    }

    renderPosts = async () => {
        try {
            const result = await apiService.getStories(this.props.offset, this.props.limit, this.props.fields);

            const lead = [], col1 = [], col2 = [];
            for(let i = 0; i < result.stories.length; i++) {
                let item = result.stories[i];
                let temp = cssClass[`n${i+1}`];
                if (i === 0) {
                    lead.push(
                        <BigImage
                            key={i}
                            title={item.headline}
                            className={`${cssClass.bigImage} ${cssClass.lead}`}
                            imageUrl={item["hero-image-s3-key"]}
                            webUrl={item.slug}
                            excerpt={item.subheadline}
                        />
                    )
                } else if (i === 1 || i === 2) {

                    col1.push(
                        <LeftImage
                            key={i}
                            className={`${cssClass.bigImage} ${temp}`}
                            title={item.headline}
                            imageUrl={item["hero-image-s3-key"]}
                            webUrl={item.slug}
                        />
                    )
                } else {

                    col2.push(
                        <LeftImage
                            key={i}
                            className={`${cssClass.bigImage} ${temp}`}
                            title={item.headline}
                            imageUrl={item["hero-image-s3-key"]}
                            webUrl={item.slug}
                        />
                    )
                }
            }

            this.setState({

                lead: lead,

                col1: col1,

                col2: col2
            });

        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div className="container">
                <h3>{this.props.title}</h3>
                <div className={cssClass.wrapper}>

                        {this.state.lead}

                        {this.state.col1}

                        {this.state.col2}

                        <div className={cssClass.widget}>
                            <div className={cssClass.banner}>Ad 300x250</div>
                            <div className={cssClass.localNav}>
                                Local news navigator
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default ThreeColBigCenter;