import React from 'react'

const Card = ({user,img_url,post,likes,comment}) => {
  return (
    <div>
      <h1>
        User : {user}
      </h1>
      <img src={img_url} width={100} height={200} />
      <h2>post{post}</h2>
      <h2>likes{likes}</h2>
      <h2>comment{comment}</h2>
    </div>
  );
};

export default Card;