import React, { useState, useEffect } from "react";
import "./index.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";
import { Helmet } from "react-helmet";
import { appConfig } from "../app-config";

export const SocialShare = ({ post, shareUrl }) => {
  console.log({ post, shareUrl });
  return (
    <div className="social-share">
      <Helmet>
        <title>{post.title}</title>
        <meta property="og:url" content="http://staging.newsbird.live" />
        <meta property="og:type" content="image" />
        <meta
          property="og:title"
          content="When Great Minds Don’t Think Alike"
        />
        <meta
          property="og:description"
          content="How much does culture influence creative thinking?"
        />
        <meta
          property="og:image"s
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Helmet>

      <div>
        <WhatsappShareButton
          url={`${shareUrl}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          title={post.title}
          imageUrl={`${appConfig.url.thumbnail}/${post.thumbNail}`}
          image={`${appConfig.url.thumbnail}/${post.thumbNail}`}
          hashtag="#newsbird"
        >
          <WhatsappIcon size={36} round={true} />
        </WhatsappShareButton>
      </div>

      <div>
        <FacebookShareButton
          url={`${shareUrl}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>
      </div>

      <div>
        <TwitterShareButton
          url={`${shareUrl}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          title={post.title}
          hashtag="#newsbird"
        >
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
      </div>

      <div>
        <LinkedinShareButton
          url={`${shareUrl}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <LinkedinIcon size={36} round={true} />
        </LinkedinShareButton>
      </div>

      <div>
        <TelegramShareButton
          url={`${shareUrl}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <TelegramIcon size={36} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};
