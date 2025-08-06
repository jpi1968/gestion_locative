export default {

	// Fonction pour peupler et ouvrir le modal
	 normalizeValue: (value) => {
    if (value === null || value === undefined) return '';
    if (typeof value === 'boolean') return String(value); // true/false
    return String(value || '');
  },
	ouvrirModal: async (rowData) => {
  const row = rowData || TableCandidats.selectedRow;
//  ouvrirModal: async () => {
  //  const row = TableCandidats.selectedRow;
    if (row) {
			await storeValue('selectedIdCandidat', this.normalizeValue(row.id_candidat));
      await storeValue('selectedPseudo', this.normalizeValue(row.pseudo_lbc));
			await storeValue('selectedNom', this.normalizeValue(row.nom));
      await storeValue('selectedMobile', this.normalizeValue(row.mobile));
      await storeValue('selectedEmail', this.normalizeValue(row.email));
      await storeValue('selectedRevenu', this.normalizeValue(row.revenu));
      await storeValue('selectedGenre', this.normalizeValue(row.genre));
      await storeValue('selectedOrig', this.normalizeValue(row.orig));
			await storeValue('selectedChambre', this.normalizeValue(row.chambre));
			await storeValue('selectedDureeSejour', this.normalizeValue(row.duree_sejour));
			await storeValue('selectedDebutSejour', this.normalizeValue(row.debut_sejour));
      await storeValue('selectedDecisionJp', this.normalizeValue(row.decision_jp));
      await storeValue('selectedDecisionCandidat', this.normalizeValue(row.decision_candidat)); // boolean → "true"/"false"
      await storeValue('selectedStatutMobile', this.normalizeValue(row.statut_mobile));
      await storeValue('selectedStatutVideo', this.normalizeValue(row.statut_video));
      await storeValue('selectedStatutRdv', this.normalizeValue(row.statut_rdv));
      await storeValue('selectedVisale', this.normalizeValue(row.visale)); 
      await storeValue('selectedGarantMe', this.normalizeValue(row.garant_me));
      await storeValue('selectedGarant', this.normalizeValue(row.garant));
      await storeValue('selectedOccupation', this.normalizeValue(row.occupation));
      await storeValue('selectedCommentaires', this.normalizeValue(row.commentaires));
      await storeValue('selectedMessages', this.normalizeValue(row.messages));
			await storeValue('selectedRdv', this.normalizeValue(row.rdv));
			await storeValue('selectedDossierLocataireLbc', this.normalizeValue(row.dossier_locataire_lbc));
			await storeValue('selectedUrlAnnonce', this.normalizeValue(row.url_annonce));
			await storeValue('selectedAdresse', this.normalizeValue(row.adresse));
			await storeValue('selectedVille', this.normalizeValue(row.ville));
			await storeValue('selectedGmaps', this.normalizeValue(row.gmaps));
			await storeValue('selectedVideoChambre', this.normalizeValue(row.video_chambre));
		  await storeValue('selectedVideoAppart', row.video_appart);
			const avant = row.video_appart;
const apres = this.normalizeValue(row.video_appart);
console.log("Avant normalizeValue:", avant);
console.log("Après normalizeValue:", apres);
    }
    showModal(modal_maj.name);
  },
	ouvrirModalSms: async () => {
  // const row = rowData || TableCandidats.selectedRow;
// //  ouvrirModal: async () => {
  // //  const row = TableCandidats.selectedRow;
    // if (row) {
			// await storeValue('selectedIdCandidat', this.normalizeValue(row.id_candidat));
      // await storeValue('selectedPseudo', this.normalizeValue(row.pseudo_lbc));
			// await storeValue('selectedNom', this.normalizeValue(row.nom));
      // await storeValue('selectedMobile', this.normalizeValue(row.mobile));
      // await storeValue('selectedEmail', this.normalizeValue(row.email));
      // await storeValue('selectedRevenu', this.normalizeValue(row.revenu));
      // await storeValue('selectedGenre', this.normalizeValue(row.genre));
      // await storeValue('selectedOrig', this.normalizeValue(row.orig));
			// await storeValue('selectedChambre', this.normalizeValue(row.chambre));
			// await storeValue('selectedDureeSejour', this.normalizeValue(row.duree_sejour));
			// await storeValue('selectedDebutSejour', this.normalizeValue(row.debut_sejour));
      // await storeValue('selectedDecisionJp', this.normalizeValue(row.decision_jp));
      // await storeValue('selectedDecisionCandidat', this.normalizeValue(row.decision_candidat)); // boolean → "true"/"false"
      // await storeValue('selectedStatutMobile', this.normalizeValue(row.statut_mobile));
      // await storeValue('selectedStatutVideo', this.normalizeValue(row.statut_video));
      // await storeValue('selectedStatutRdv', this.normalizeValue(row.statut_rdv));
      // await storeValue('selectedVisale', this.normalizeValue(row.visale)); 
      // await storeValue('selectedGarantMe', this.normalizeValue(row.garant_me));
      // await storeValue('selectedGarant', this.normalizeValue(row.garant));
      // await storeValue('selectedOccupation', this.normalizeValue(row.occupation));
      // await storeValue('selectedCommentaires', this.normalizeValue(row.commentaires));
      // await storeValue('selectedMessages', this.normalizeValue(row.messages));
			// await storeValue('selectedRdv', this.normalizeValue(row.rdv));
			// await storeValue('selectedDossierLocataireLbc', this.normalizeValue(row.dossier_locataire_lbc));
			// await storeValue('selectedUrlAnnonce', this.normalizeValue(row.url_annonce));
			// await storeValue('selectedAdresse', this.normalizeValue(row.adresse));
			// await storeValue('selectedVille', this.normalizeValue(row.ville));
			// await storeValue('selectedGmaps', this.normalizeValue(row.gmaps));
			// await storeValue('selectedVideoAppart', this.normalizeValue(row.video_appart));
			// await storeValue('selectedVideoChambre', this.normalizeValue(row.video_chambre));
    // }
    showModal(modal_sms.name);
  },
	  updateAndRefresh: async () => {
    try {
      await updateCandidats_maj.run();
      //await filterCandidats.run();
      closeModal(modal_maj.name);

      // Reset des champs du modal
      resetWidget('mobile_maj');
			resetWidget('nom_maj');
			resetWidget('email_maj');
			resetWidget('mobile_maj');
			resetWidget('pseudo_maj');
			resetWidget('orig');
			resetWidget('revenu_maj');
			resetWidget('genre_maj');
			resetWidget('debut_sejour_maj');
			resetWidget('duree_sejour_maj');		
			resetWidget('visale_maj');
      resetWidget('garant_me_maj');
      resetWidget('garant_maj');
      resetWidget('occupation_maj');
      resetWidget('commentaires_maj');
      resetWidget('decision_jp_maj');
      resetWidget('decision_candidat_maj');
      resetWidget('statut_mobile_maj');
      resetWidget('statut_video_maj');
      resetWidget('statut_rdv_maj');
			resetWidget('dossier_maj');
			resetWidget('mobile_call_maj');
			resetWidget('url_annonce_maj');
			
			await filterCandidats.run();
      showAlert('Mise à jour effectuée avec succès', 'success');
    } catch (err) {
      showAlert('Erreur lors de la mise à jour : ' + err.message, 'error');
    }
  }
};