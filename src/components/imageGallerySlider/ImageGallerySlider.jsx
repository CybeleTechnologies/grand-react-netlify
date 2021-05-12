import React from 'react';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import styled from "styled-components/macro"

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        category: 'Zvezde Granda',
        date: '20.12.2020',
        title: 'Djordje David otkrio zasto nosi suknje u ZVEZDAMA...'
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        category: 'Zvezde Granda',
        date: '20.12.2020',
        title: 'Djordje David otkrio zasto nosi suknje u ZVEZDAMA...'
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        category: 'Zvezde Granda',
        date: '20.12.2020',
        title: 'Djordje David otkrio zasto nosi suknje u ZVEZDAMA...'
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        category: 'Zvezde Granda',
        date: '20.12.2020',
        title: 'Djordje David otkrio zasto nosi suknje u ZVEZDAMA...'
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        category: 'Zvezde Granda',
        date: '20.12.2020',
        title: 'Djordje David otkrio zasto nosi suknje u ZVEZDAMA...'
    }
];

const ImageGallerySlider = styled(({className, position}) => {
    return (
        <div className={className}>
            <ImageGallery
                items={images}
                thumbnailPosition={position}
                showFullscreenButton={false}
                showPlayButton={false}
                renderItem={(item)=> {
                    return <div className="mojitem" style={{backgroundImage:`url(${item.original})`, backgroundSize:"cover", backgroundPosition:"center center"}}>
                        <div className="caption">
                            <span className="category">{item.category}</span>
                            <span className="date">{item.date}</span>
                            <h4>{item.title}</h4>
                            <button className="btn btn-danger">Saznaj vise</button>
                        </div>
                    </div>
                    }
                }
                renderThumbInner={(item) => {
                        return <div className="mojthumb">
                            <div className="thumb" style={{backgroundImage:`url(${item.thumbnail})`, backgroundSize:"cover", backgroundPosition:"center center"}} />
                            <div className="info">
                                <span>{item.title}</span>
                                <span>{item.date}</span>
                            </div>
                        </div>
                    }
                }
            />
        </div>
    );
})`
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  .image-gallery {
    width:100%;
    //max-width:initial;
    .image-gallery-left-nav, .image-gallery-right-nav {
      display:block;
      @media screen and (min-width: 1000px) {
        display:none;
      }
    }
    &-svg {
      width:20px;
    }
  }
  .image-gallery-content {
    display: flex;
  }
  .image-gallery-thumbnails-wrapper {
    display:none;
    @media screen and (min-width: 1000px) {
      display:block;
    }
  }
  .image-gallery-slide-wrapper.right {
    display: flex;
    width: 100%;
  }
  .image-gallery-swipe {
    width:100%;
  }
  .image-gallery-thumbnails-wrapper.right {
    width:50%;
    min-width:267px;
    margin-left:0;
    margin-right:0;
  }
  .mojitem {
    //min-width:500px;
    height:300px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .caption {
      display:flex;
      width:100%;
      white-space: normal;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding:.5rem 2rem;
      color:white;
      text-align: left;
      .category {
        background:#dda92f;
        padding:.5rem;
        margin-bottom:1.5rem;
        color:#515153;
        font-size:.7em;
        font-weight:bold;
        text-transform: uppercase;
      }
      .date {
        font-size:.9em;
        font-weight:bold;
        display: inline-block;
        margin-bottom:1rem;
      }
      h4 {
        font-size: 1.3em;
        font-weight:900;
      }
      button {
        margin-top:1em;
        font-weight: bold;
        font-size:.9em;
      }
    }
  }
  .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail {
    width:100%;
  }
  .image-gallery-thumbnails .image-gallery-thumbnails-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 100%;
    width: 100%;
    //background:#525156;
    background: #515153;
    button {
      padding:.3rem !important;
      border-bottom: 1px solid #414143;
      min-height:100px;
      background: #515153;
      margin-top:0;
    }
  }
  .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover, .image-gallery-thumbnail:focus {
    border-color:transparent;
    
    background:#525156 !important;
    .thumb {
      border: 2px solid #dda92f;
      //height: calc(100% - 4px);
    }
  }
  .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail {
    margin-top:0;
  }
  .mojthumb {
    display: flex;
    width:100%;
    height:100%;
    .thumb {
      width:80px;
      //min-width:100px;
    }
    .info {
      display:flex;
      width:60%;
      flex-wrap:wrap;
      //padding:.5rem;
      margin-left:.5rem;
      color:white;
      span {
        display: block;
        width:100%;
        text-align: left;
        white-space:normal;
        color:white;
        &:first-child {
         font-size:.8em;
        }
        &:last-child {
          font-size:.7em;
        }
      }
    }
  }
`

export default ImageGallerySlider;