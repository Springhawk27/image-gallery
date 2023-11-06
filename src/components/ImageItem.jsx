// ImageItem.js
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

const ImageItem = ({
  image,
  index,
  setFeatureImage,
  isSelected,
  onImageSelect,
}) => {
  const isFeatured = index === 0;
  const classNames = `image-item border rounded-lg p-4 ${
    isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
  }`;

  return (
    <Draggable draggableId={image.id} index={index}>
      {(provided) => (
        <div
          className={classNames}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={onImageSelect}
          style={{
            border: isSelected ? "2px solid blue" : "1px solid #ccc",
          }}
        >
          {isSelected && <div>Selected</div>}

          <img src={image.src} alt={image.title} className="w-full h-auto" />
        </div>
      )}
    </Draggable>
  );
};

export default ImageItem;
