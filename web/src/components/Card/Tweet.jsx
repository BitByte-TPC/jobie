import React, { useState, useEffect } from "react";

const URLReplacer = (str) => {
  let match = str.match(
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.\\;]*[-A-Z0-9+&@#/%=~_\\|])/gi
  );
  return match;
};

const Tweet = () => {
  //   const [text, setText] = useState("");
  //   const [link, setLink] = useState("");
  //   const [tweetLink, setTweetLink] = useState(`#`);

  //   useEffect(() => {
  //     console.log(tweetData.creatorUsername);
  //     let tempText = tweetData.text;
  //     setLink(URLReplacer(tempText));
  //     setText(tempText.replace(URLReplacer(tempText), ""));
  //     setTweetLink(
  //       `https://twitter.com/${tweetData.creatorUsername}/status/${tweetData.tweetId}`
  //     );
  //   }, [tweetData]);

  return (
    <div class="card hoverable">
      {/* <img
            class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.webp"
            alt="Card image cap"
          /> */}

      <div class="card-body">
        <h4 class="card-title">
          <a>Master Card Hiring</a>
        </h4>

        <p class="card-text">
          MasterCard Hiring Software Engineer Batch: 2022 &amp; 2021 Expected
          CTC: 12-15 Lpa Location: Pune Apply here-
        </p>

        <a href="#" class="btn btn-sm btn-primary">
          Opporutunity
        </a>
        <a href="#" class="btn btn-sm btn-primary">
          Tweets
        </a>
      </div>
    </div>
  );
};

export default Tweet;
