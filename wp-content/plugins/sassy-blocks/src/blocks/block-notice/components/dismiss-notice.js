const dismissClick = () => {
	const dismiss = document.querySelectorAll(".nb_noticeBox");
	for (let i = 0; i < dismiss.length; i++) {
		dismiss[i].onclick = function() {
			dismiss[i].style.display = "none";
			//localStorage.setItem("NB_Notic", JSON.stringify(dismissObject));
		};
	}
};
