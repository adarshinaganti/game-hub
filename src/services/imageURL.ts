const getCroppedImageURL = (URL: string) => {
	const tgt = "media/";
	const index = URL.indexOf(tgt) + tgt.length;
	return URL.slice(0, index) + "crop/600/400/" + URL.slice(index);
};

export default getCroppedImageURL;
