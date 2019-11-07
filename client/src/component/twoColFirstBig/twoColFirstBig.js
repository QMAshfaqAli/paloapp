import React, {Component} from "react";
import LeftImage from '../atoms/leftImage';
import BigImage from '../atoms/bigImage';
import ComStyle from './twoColFirstBig.module.css';
import apiService from '../../services/apiService';


class TwoColFirstBig extends Component {

    state = {
        lead: [],
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

                col2: result.stories.slice(1, 4).map((item, i) => (
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
                    <div className={ComStyle.lead}>
                    {this.state.lead}
                    </div>
                    <div className={ComStyle.col2}>
                    {this.state.col2}
                    </div>
                </div>
            </div>
        )
    }
}

export default TwoColFirstBig;