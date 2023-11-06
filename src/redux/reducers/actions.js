export const reorderImages = (sourceIndex, destinationIndex) => {
  return {
    type: "REORDER_IMAGES",
    payload: {
      sourceIndex,
      destinationIndex,
    },
  };
};

export const deleteImages = (selectedImageIds) => {
  return {
    type: "DELETE_IMAGES",
    payload: selectedImageIds,
  };
};

export const setFeatureImage = (imageId) => {
  return {
    type: "SET_FEATURE_IMAGE",
    payload: imageId,
  };
};
