import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ImageItem from "./ImageItem";
import {
  reorderImages,
  deleteImages,
  setFeatureImage,
} from "../redux/reducers/actions";

const ImageGallery = () => {
  const images = useSelector((state) => state);

  const dispatch = useDispatch();

  const [selectedImages, setSelectedImages] = useState([]);
  const [isRemoveMode, setIsRemoveMode] = useState(false);

  const handleReorder = (result) => {
    if (!result.destination) return;
    dispatch(reorderImages(result.source.index, result.destination.index));
  };

  const toggleRemoveMode = () => {
    setIsRemoveMode(!isRemoveMode);
  };

  const onImageSelect = (imageId) => {
    const isSelected = selectedImages.includes(imageId);
    if (isSelected) {
      setSelectedImages((prevSelectedImages) =>
        prevSelectedImages.filter((id) => id !== imageId)
      );
    } else {
      setSelectedImages((prevSelectedImages) => [
        ...prevSelectedImages,
        imageId,
      ]);
    }
  };

  const handleRemoveSelectedImages = () => {
    dispatch(deleteImages(selectedImages));
    setSelectedImages([]);
    setIsRemoveMode(false);
  };

  return (
    <div>
      {selectedImages.length > 0 && (
        <div className="flex justify-between px-4 py-4">
          <span
            style={{ marginLeft: "8px" }}
          >{`${selectedImages.length} Files Selected`}</span>
          <button onClick={handleRemoveSelectedImages} style={{ color: "red" }}>
            Delete Files
          </button>
        </div>
      )}
      <hr className="w-full border-b-2 mb-8" />
      <DragDropContext onDragEnd={handleReorder}>
        <Droppable droppableId="image-gallery" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="image-gallery grid grid-cols-5 gap-4"
            >
              {images?.images?.images.map((image, index) => (
                <ImageItem
                  key={image.id}
                  image={image}
                  index={index}
                  setFeatureImage={() => dispatch(setFeatureImage(image.id))}
                  isFeatured={image.isFeatured}
                  isSelected={selectedImages.includes(image.id)}
                  onImageSelect={() => onImageSelect(image.id)}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ImageGallery;
