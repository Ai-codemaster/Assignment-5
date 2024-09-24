function showSectionById(id){
  document.getElementById('donation-form').classList.add('hidden');
  document.getElementById('donation-history').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}