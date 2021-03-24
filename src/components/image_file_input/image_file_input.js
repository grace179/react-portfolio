import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, filename, onFileChange }) => {
  const [loading, setLoading]= useState(false);
  const inputRef = useRef(); 

    // const onButtonClick = (event) => {
    //   event.preventDefault();
    //   inputRef.current.click();
    // }

    const onChange = async (event) => {
      setLoading(true);
      console.log(event.target.files[0]);
      const uploaded = await imageUploader.upload(event.target.files[0]);
      setLoading(false);

      console.log(uploaded);
      onFileChange({
        filename: uploaded.original_filename,
        url: uploaded.url
      })
    };

    return (
      <div className={styles.imageContainer}>
        <input 
          ref={inputRef}
          className={styles.input} type="file" accept="image/*" name="file"
          onChange={onChange}/>
        {/* <button className={styles.button} onClick={onButtonClick}>
          {filename || 'No file'}
        </button> */}
      {
        loading &&
        <>
          <span className={styles.loading}></span>
          <span className={styles.loadingText}>image loading</span>
        </>
      }
      </div>
    );
}

export default ImageFileInput;