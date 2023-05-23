export function ImageGalleryItem({ id, previewURL }) {
  return (
    <li className="gallery-item">
      <img src={previewURL} alt="" />
    </li>
  );
}
