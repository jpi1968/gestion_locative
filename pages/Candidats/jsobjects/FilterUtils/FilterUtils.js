export default {

	filtreAvecDelai: () => {
		setTimeout(() => {
			filterCandidats.run();
		}, 500);
	},

	resetFiltres: () => {
		resetWidget('pseudo_search');
		resetWidget('mobile_search');
		resetWidget('genre_search');
		resetWidget('decision_jp_search');
		resetWidget('decisions_search');
		resetWidget('statut_mobile_search');
		resetWidget('statut_video_search');
		resetWidget('statut_rdv_search');
		resetWidget('chambre_search');
		filterCandidats.run();
	},
};