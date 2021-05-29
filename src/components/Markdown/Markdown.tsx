import styled from '@emotion/styled';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex"
import 'katex/dist/katex.min.css'

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

const BlockquoteParagraph = styled.p`
    margin: 0;
`

// Take a reference at:
// https://github.com/remarkjs/react-markdown
const markdownRenders = {
    blockquote: (props) => {
        const text = (props.children[1].props.children[0]).split('\n')
        return (
            <Blockquote>
                {text.map((value) => (
                    <BlockquoteParagraph key={value}>{value}</BlockquoteParagraph>
                ))}
            </Blockquote>
        )
    },
    img: (props) => {
        console.log(props)
        const { alt, src } = props
        return (<img alt={alt} src={src} style={ {maxWidth: 650} }/>)
    }
};

const Markdown: React.FC<IMarkdownProps> = (props) => {
    const { source, math = false } = props;
    return (
        <div>
            {(math) ? 
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} children={source} components={markdownRenders} />
            : <ReactMarkdown
                children={source} components={markdownRenders}
            />}
        </div>
    );
}

export default Markdown;
