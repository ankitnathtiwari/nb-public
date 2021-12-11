import React, { useState, useEffect } from "react";
import { testUrl ,sNBDomain} from "../base-url/index";
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

export const SocialShare = ({ post }) => {

  return (
    <div className="social-share">
      <div>
        <WhatsappShareButton
          url={`${sNBDomain}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <WhatsappIcon size={36} round={true} />
        </WhatsappShareButton>
      </div>

      <div>
        <FacebookShareButton
          url={`${sNBDomain}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>
      </div>

      <div>
        <TwitterShareButton
          url={`${sNBDomain}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
      </div>

      <div>
        <LinkedinShareButton
          url={`${sNBDomain}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <LinkedinIcon size={36} round={true} />
        </LinkedinShareButton>
      </div>

      <div>
        <TelegramShareButton
          url={`${sNBDomain}/?top=singlepost&id=${post._id}`}
          quote={post.title}
          hashtag="#newsbird"
        >
          <TelegramIcon size={36} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};
