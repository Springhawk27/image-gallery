const initialState = {
  images: [
    { id: "1", src: "/images/image-1.webp", title: "Image 1" },
    { id: "2", src: "/images/image-2.webp", title: "Image 2" },
    { id: "3", src: "/images/image-3.webp", title: "Image 3" },
    { id: "4", src: "/images/image-4.webp", title: "Image 4" },
    { id: "5", src: "/images/image-5.webp", title: "Image 5" },
    { id: "6", src: "/images/image-6.webp", title: "Image 6" },
    { id: "7", src: "/images/image-7.webp", title: "Image 7" },
    { id: "8", src: "/images/image-8.webp", title: "Image 8" },
    { id: "9", src: "/images/image-9.webp", title: "Image 9" },
    { id: "10", src: "/images/image-10.jpeg", title: "Image 10" },
    { id: "11", src: "/images/image-11.jpeg", title: "Image 11" },
  ],
};
const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REORDER_IMAGES":
      const { sourceIndex, destinationIndex } = action.payload;
      const reorderedImages = [...state.images];
      const [movedImage] = reorderedImages.splice(sourceIndex, 1);
      reorderedImages.splice(destinationIndex, 0, movedImage);
      return { ...state, images: reorderedImages };

    case "DELETE_IMAGES":
      const selectedImageIds = action.payload;
      const updatedImages = state.images.filter(
        (image) => !selectedImageIds.includes(image.id)
      );
      return { ...state, images: updatedImages };

    case "SET_FEATURE_IMAGE":
      const selectedImageId = action.payload;
      const imagesWithFeature = state.images.map((image) => ({
        ...image,
        isFeatured: image.id === selectedImageId,
      }));
      return { ...state, images: imagesWithFeature };

    default:
      return state;
  }
};

export default imageReducer;
