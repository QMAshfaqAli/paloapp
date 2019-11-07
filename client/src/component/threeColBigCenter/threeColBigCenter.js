import React, {Component} from 'react';
import LeftImage from '../atoms/leftImage';
import BigImage from '../atoms/bigImage';
import cssClass from './threeColBigCenter.module.css';
import apiService from '../../services/apiService';

class ThreeColBigCenter extends Component {

    state = {
        col1: [],
        lead: [],
        col3: []
    };

    componentDidMount() {

        this.renderPosts();
    }

    renderPosts = async () => {
        try {

            const result = await apiService.getStories(this.props.offset, this.props.limit, this.props.fields);

            this.setState({

                lead: result.stories.slice(0, 1).map((item, i) => (
                    <BigImage
                        key={i}
                        title={item.headline}
                        imageUrl={item["hero-image-s3-key"]}
                        webUrl={item.slug}
                        category={item.sections[0]["display-name"]}
                        excerpt={item.subheadline}
                    />
                )),

                col1: result.stories.slice(1, 5).map((item, i) => (
                    <LeftImage
                        key={i}
                        className={cssClass.leftImage}
                        title={item.headline}
                        imageUrl={item["hero-image-s3-key"]}
                        webUrl={item.slug}
                        category={item.sections[0]["display-name"]}
                    />
                )),

                col3: result.stories.slice(5, 9).map((item, i) => (
                    <LeftImage
                        key={i}
                        className={cssClass.leftImage}
                        title={item.headline}
                        imageUrl={item["hero-image-s3-key"]}
                        webUrl={item.slug}
                        category={item.sections[0]["display-name"]}
                    />
                ))
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
                    <div className={cssClass.col1}>
                        {this.state.col1}
                    </div>
                    <div className={cssClass.lead}>
                        {this.state.lead}
                    </div>
                    <div className={cssClass.col3}>
                        {this.state.col3}
                    </div>
                </div>
            </div>
        )
    }
}

export default ThreeColBigCenter;