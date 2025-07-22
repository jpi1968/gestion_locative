export default {
  ouvrirModalSiSelection: () => {
    if (TableCandidats.selectedRow) {
      showModal(modal_maj.name);
    } else {
      showAlert('Merci de sélectionner un candidat avant de modifier.', 'warning');
    }
  }
}
