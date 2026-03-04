import images from "./data/images.json";
import Image from "./Components/Image/Image";
import "./App.css";
import { useState } from "react";
import Button from "./Components/Button/Button";

function App() {
  const [allImages, setAllImages] = useState(images);
  const [image, setImage] = useState(images[0]);

  const nextImage = () => {
    const currentIndex = allImages.findIndex((img) => img.id === image.id);
    const nextIndex = (currentIndex + 1) % allImages.length;
    setImage(allImages[nextIndex]);
  };

  const backImage = () => {
    const currentIndex = allImages.findIndex((img) => img.id === image.id);
    const nextIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setImage(allImages[nextIndex]);
  };

  const handleSelect = (image) => {
    setImage(image);
  };

  const renderRandomImages = () => {
    let newImages = [...allImages];
    for (let i = newImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
    }
    setAllImages(newImages);
    renderImages();
  };

  const renderImages = () =>
    allImages.map((img) => (
      <Image
        title={img.title}
        url={img.url}
        key={img.id}
        onClick={() => handleSelect(img)}
        type="gallery"
      />
    ));

  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
  };

  return (
    <>
      <h1>Galeria de imagini:</h1>
      <div className="gallery">{renderImages()}</div>

      <h2>Imaginea selectata: </h2>
      <div className="selected-wrapper">
        <Image
          title={image.title}
          url={image.url}
          key={image.id}
          type="selected"
        />
      </div>

      <div className="buttons">
        <Button title="Următoarea imagine" onClick={nextImage} />
        <Button title="Imaginea anterioară" onClick={backImage} />
        <Button title="Imagine aleatoare" onClick={randomImage} />
        <Button title="Aranjare aleatoare" onClick={renderRandomImages} />
      </div>
    </>
  );
}

export default App;
