import React from "react";
import trackElement from "../../../api/trackElement";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon
} from "react-share";

const ShareButton = ({ product, share, toggleShare, photo, classes }) => (
  <>
    <Button
      variant="outlined"
      className={classes.shareButton}
      label={"none"}
      onClick={e => {
        trackElement(e);
        toggleShare(!share);
      }}
      aria-label="share"
    >
      <ShareIcon fontSize={"small"} />
    </Button>
    <div className={share ? "share-container" : "hidden2"}>
      <TwitterShareButton
        url={window.location.href}
        title={`Check out this cool ${product.name} on ShopBox. #ShopBox #${product.category}`}
        className="share-button"
        onClick={trackElement}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        url={window.location.href}
        quote={`Check out this cool ${product.name} on ShopBox. #ShopBox #${product.category}`}
        className="share-button"
        onClick={trackElement}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton
        url={window.location.href}
        media={photo ? photo : ""}
        windowWidth={1000}
        windowHeight={730}
        className="share-button"
        onClick={trackElement}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  </>
);

export default ShareButton;
