import React, { Component } from 'react';
import './Article.css'
import ArticleTitle from './ArticleTitle'
import ArticleBody from './ArticleBody'


class Article extends Component{
    render(){
        return(
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <ArticleTitle />
            
            <ArticleBody />
            <div className="article-links">
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
            </div>
      </div>
    
        )
    }
}

export default Article;