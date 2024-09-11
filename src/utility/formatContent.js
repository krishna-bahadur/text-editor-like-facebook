import React from "react";

const formatContent = (content) => {
    // regex to detect URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // regex to detect hashtags
    const hashtagRegex = /#[a-zA-Z0-9_]+/g;

    return content
    // Replace URLs with anchor tags
    .replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`)
    
    // Replace hashtags with span or anchor tags 
    .replace(hashtagRegex, (hashtag) => `<a href="/search?q=${hashtag.slice(1)}">${hashtag}</a>`);
} 

export default formatContent;