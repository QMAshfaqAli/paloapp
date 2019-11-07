import React, {Component} from "react";
import FourColBigImage from '../atoms/bigImage';
import cssStyle from './fourCol.module.css';
import apiService from "../../services/apiService";

class FourCol extends Component {

    state = {
        newsList: []
    };

    componentDidMount() {

        this.renderPosts();
    }

    renderPosts = async () => {
        try {
            const result = await apiService.getStories(this.props.offset, this.props.limit, this.props.fields);

            this.setState({
                newsList: result.stories.map((item, i) => (
                    <FourColBigImage
                        key={i}
                        className={cssStyle.bigImage}
                        title={item.headline}
                        imageUrl={item["hero-image-s3-key"]}
                        webUrl={item.slug}
                        imageRatio={cssStyle.image3x2}
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
                <div className={cssStyle.wrapper}>
                    {this.state.newsList}
                </div>
            </div>
        )
    }
}

export default FourCol;