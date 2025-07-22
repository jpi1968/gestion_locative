export default {
  updateAndRefresh: async () => {
    try {
      await updateCandidats_maj.run();
      //await filterCandidats.run();
      closeModal(modal_maj.name);

      // Reset des champs du modal
      resetWidget('mobile_maj');
      resetWidget('garant_maj');
      resetWidget('occupation_maj');
      resetWidget('commentaires_maj');
      resetWidget('decision_jp_maj');
      resetWidget('decision_candidat_maj');
      resetWidget('statut_mobile_maj');
      resetWidget('statut_video_maj');
      resetWidget('statut_rdv_maj');
      resetWidget('visale_maj');
      resetWidget('garant_me_maj');

      showAlert('Mise à jour effectuée avec succès', 'success');
    } catch (err) {
      showAlert('Erreur lors de la mise à jour : ' + err.message, 'error');
    }
  }
}
