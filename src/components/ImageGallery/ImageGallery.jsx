import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images.map(({ id, previewURL }) => (
        <ImageGalleryItem id={id} previewURL={previewURL} key={id} />
      ))}
    </ul>
  );
}
