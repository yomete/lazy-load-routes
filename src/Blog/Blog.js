import React, { Component } from 'react'
import './Blog.css'
import ReactMarkdown from 'react-markdown'

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markdownSrc: [
                '# Lazy Loading Routes with React\n\nWhy do we need to lazy load routes?.\n\n* Reduce code bloat\n* Avoid loading all components at the same time ',
                '\n* React app loads faster',
                '\n* Load only the component that is needed and preload the others\n',
                '\n## A quote\n\n<blockquote>\n    A man who splits his code ',
                'is a wise man.\n</blockquote>\n\n## How about some code?\n',
                '```js\nimport React, { Component } from \'react\';\nimport asyncComponent from \'./AsyncComponent\'',
                '\n\nimport {\n' +
                '    BrowserRouter as Router,\n' +
                '    Route,\n' +
                '    Switch,\n' +
                '    Link\n' +
                '} from \'react-router-dom\'\n```\n\n\n'
            ].join(''),

            htmlMode: 'raw'
        };
    }
    render () {
        return (
            <div className="container">
                <ReactMarkdown source={this.state.markdownSrc} />
            </div>
        )
    }
}

export default Blog