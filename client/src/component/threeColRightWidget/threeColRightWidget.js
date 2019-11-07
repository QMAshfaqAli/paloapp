import React, {Component} from "react";
import LeftImage from '../atoms/leftImage';
import BigImage from '../atoms/bigImage';
import ComStyle from './threeColRightWidget.module.css';
import apiService from '../../services/apiService';


class ThreeColRightWidget extends Component {

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

            this.setState({

                lead: result.stories.slice(0, 1).map((item, i) => (
                    <BigImage
                        key={i}
                        className={ComStyle.bigImage}
                        title={item.headline}
                        imageUrl={item["hero-image-s3-key"]}
                        webUrl={item.slug}
                        category={item.sections[0]["display-name"]}
                        excerpt={item.subheadline}
                    />
                )),

                col1: result.stories.slice(1, 2).map((item, i) => (
                    <LeftImage
                        key={i}
                        className={ComStyle.leftImage}
                        title={item.headline}
                        imageUrl={item["hero-image-s3-key"]}
                        webUrl={item.slug}
                        category={item.sections[0]["display-name"]}
                        excerpt={item.subheadline}
                    />
                )),

                col2: result.stories.slice(3, 7).map((item, i) => (
                    <LeftImage
                        key={i}
                        className={ComStyle.leftImage}
                        title={item.headline}
                        imageUrl={item["hero-image-s3-key"]}
                        webUrl={item.slug}
                        category={item.sections[0]["display-name"]}
                        excerpt={item.subheadline}
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
                <div className={ComStyle.wrapper}>
                    <div className={ComStyle.col1}>
                        {this.state.lead}
                        {this.state.col1}
                    </div>
                    <div className={ComStyle.col2}>
                        {this.state.col2}
                    </div>
                    <div className={ComStyle.col3}>
                        <div className={ComStyle.banner}>
                            e-paper banner
                        </div>

                        <div style={{backgroundColor: '#e2e2e2', width: '100%', marginTop: '20px', minHeight: '300px'}}>
                            Widget
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThreeColRightWidget;