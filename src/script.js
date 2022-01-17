function toggleVideo(){
	const trailer = document.quarySelector('.trailer');
	const video = document.quarySelector('video');
	trailer.classList.toggle('active');

	video.currentTime = 0;
	video.pause();
} 