import styled from '@emotion/styled';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import MathJax from "react-mathjax";
import RemarkMathPlugin from "remark-math";

interface IMarkdownProps {
  source: string;
  math?: boolean;
}

const Blockquote = styled.blockquote`
    color: #666;
    margin: 0;
    padding-left: 1.5em;
    border-left: 0.5em #eee solid;
`

const BlockquotePara = styled.p`
    margin: 0;
`

const markdownRenders = {
    blockquote: (props) => {
        const text = (props.children[0].props.children[0].props.value).split('\n')
        return (
            <Blockquote>
                {text.map((value) => (
                    <BlockquotePara key={value}>{value}</BlockquotePara>
                ))}
            </Blockquote>
        )
    }
};

const Markdown: React.FC<IMarkdownProps> = (props) => {
    const { source, math = false } = props;
    // const markdownProps = (math) ? {
    //     source: source,
    //     plugins: [ RemarkMathPlugin ],
    //     renderers: {
    //         ...markdownRenders,
    //         math: (props: { value: string; }) => (<MathJax.Node formula={props.value} />),
    //         inlineMath: (props: { value: string; }) => (<MathJax.Node inline formula={props.value} />)
    //     },
    // } : { source: source, renderers: {...markdownRenders} };
    // const plugins = [ RemarkMathPlugin ]
    return (
        // <div>
        //     {(math) ? <MathJax.Provider input="tex">
        //         <ReactMarkdown source={source} plugins={plugins} />
        //         </MathJax.Provider>
        //     : <ReactMarkdown
        //         source={source}
        //     />}
        // </div>
        <div>
            <ReactMarkdown source={source} renderers={markdownRenders} />
        </div>
    );
}

export default Markdown;