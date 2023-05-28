const getCroppedImageURL = (URL: string) => {
	if (!URL) return "";

	const target = "media/";
	const index = URL.indexOf(target) + target.length;
	return URL.slice(0, index) + "crop/600/400/" + URL.slice(index);
};

export default getCroppedImageURL;
