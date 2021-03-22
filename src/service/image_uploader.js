const cloudinary_name = process.env.REACT_APP_CD_NAME;
const cloudinary_url = `https://api.cloudinary.com/v1_1/${cloudinary_name}/upload`;

class ImageUploader{
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', process.env.REACT_APP_CD_PRESET);
    const result = await fetch(
      cloudinary_url,
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;