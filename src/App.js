import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import axios from "axios";
import { ENDPOINT } from "./utils";

import "./App.css";

const Loader = () => <h1 className="loader">Loading...</h1>;

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            allEmojis: [],
            filteredEmoji: [],
            loading: true
        };
    }

    componentDidMount = () => {
        axios
            .get(ENDPOINT)
            .then(({ data, error }) => {
                this.setState({
                    allEmojis: data,
                    filteredEmoji: filterEmoji(data, "", 20),
                    loading: false
                });
            })
            .catch(error => console.error(error));
    };

    handleSearchChange = event => {
        this.setState({
            filteredEmoji: filterEmoji(
                this.state.allEmojis,
                event.target.value,
                20
            )
        });
    };

    render() {
        const { loading } = this.state;

        if (loading) {
            return <Loader />;
        }
        return (
            <div>
                <Header />
                <SearchInput textChange={this.handleSearchChange} />
                <EmojiResults emojiData={this.state.filteredEmoji} />
            </div>
        );
    }
}
