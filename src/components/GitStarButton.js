import React from 'react';

const user = 'teraui41';

const repo = 'f2e-w1-tomato-clock';

const src = type => `https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=${type}&count=true&v=2`;

const GitStarButton = () => (
  <div>
    <iframe title='gitWatch' src={src('watch')} frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
  <iframe title='gitStar' src={src('star')} frameBorder="0" scrolling="0" width="100px" height="20px"></iframe>
  </div>
)

export default GitStarButton;