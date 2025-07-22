export default {

	filtreAvecDelai: () => {
		setTimeout(() => {
			filterCandidats.run();
		}, 500);
	},

	resetFiltres: () => {
		resetWidget(pseudo_search);
		resetWidget('mobile_search');
		resetWidget('decision_jp_search');
		resetWidget('statut_mobile_search');
		resetWidget('statut_video_search');
		resetWidget('statut_rdv_search');
		//filterCandidats.run();
	},

	// Fonction pour peupler et ouvrir le modal
	ouvrirModal: async () => {
		const row = TableCandidats.selectedRow;
		if (row) {
			// Stocker les données dans le store Appsmith
			await storeValue('selectedPseudo', row.pseudo_lbc || '');
			//await storeValue('selectedMobile', row.mobile || '');
			await storeValue('selectedMobile', String(row.mobile || ''));
			await storeValue('selectedDecisionJp', row.decision_jp || '');
			await storeValue('selectedDecisionCandidat', row.decision_candidat || '');
			await storeValue('selectedStatutMobile', row.statut_mobile || '');
			await storeValue('selectedStatutVideo', row.statut_video || '');
			await storeValue('selectedStatutRdv', row.statut_rdv || '');
			await storeValue('selectedVisale', row.visale || '');
			await storeValue('selectedGarantMe', row.garant_me || '');		
			await storeValue('selectedGarant', row.garant || '');
			await storeValue('selectedOccupation', row.occupation || '');
			await storeValue('selectedCommentaires', row.commentaires || '');
			await storeValue('selectedMessages', row.messages || '');
			await storeValue('selectedIdcandidat', row.id_candidat || '');
		}

		// Ouvrir le modal
		showModal('modal_maj');
	}
};