import noImage from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

const getCroppedImageURL = (URL: string) => {
	if (!URL) return noImage;

	const target = "media/";
	const index = URL.indexOf(target) + target.length;
	return URL.slice(0, index) + "crop/600/400/" + URL.slice(index);
};

export default getCroppedImageURL;
