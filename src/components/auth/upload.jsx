import React, { useState } from 'react';

const ImageUpload = ({ register, errors }) => {
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="form-group">
            <label>Upload Image</label>
            <input
                type="file"
                accept="image/*"
                {...register("image", { required: "Image is required" })}
                onChange={handleImageChange}
            />
            {errors.image && <p className="error">{errors.image.message}</p>}
            {preview && <img src={preview} alt="Preview" className="image-preview" />}
        </div>
    );
};

export default ImageUpload;
