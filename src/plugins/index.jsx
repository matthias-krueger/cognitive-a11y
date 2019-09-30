import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.module.css';

function grayscale(image, bPlaceImage /*, ref */) {
  var myCanvas = document.createElement('canvas');
  var myCanvasContext = myCanvas.getContext('2d');

  var imgWidth = image.width;
  var imgHeight = image.height;
  myCanvas.width = imgWidth;
  myCanvas.height = imgHeight;
  myCanvasContext.drawImage(image, 0, 0);

  var imageData = myCanvasContext.getImageData(0, 0, imgWidth, imgHeight);

  for (let j = 0; j < imageData.height; j++) {
    for (let i = 0; i < imageData.width; i++) {
      var index = i * 4 * imageData.width + j * 4;
      var red = imageData.data[index];
      var green = imageData.data[index + 1];
      var blue = imageData.data[index + 2];
      var alpha = imageData.data[index + 3];
      var average = (red + green + blue) / 3;
      imageData.data[index] = average;
      imageData.data[index + 1] = average;
      imageData.data[index + 2] = average;
      imageData.data[index + 3] = alpha;
    }
  }

  if (bPlaceImage) {
    const myDiv = document.createElement('div');

    myDiv.appendChild(myCanvas);
    image.parentNode.appendChild(myCanvas);
  }
  return myCanvas.toDataURL();
}

export const CogA11y = ({
  content,
  children,
  isAccessibility,
  isImage,
  isBigger,
  isSharper
}) => {
  if (isImage) {
    // console.log(grayscale(ref, true));
  }

  return (
    <div
      className={cn({
        [styles.isBigger]: isAccessibility && isBigger,
        [styles.isSharper]: isAccessibility && isSharper
      })}
    >
      {children
        ? children
        : isAccessibility
        ? content.simpleText
        : content.normalText}
    </div>
  );
};

CogA11y.propTypes = {
  isBigger: PropTypes.bool,
  isSharper: PropTypes.bool
};
