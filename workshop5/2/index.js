const modal = document.getElementById('modal');

const toggleModal = (value) => {
  console.log(value);
  if (value) modal.classList.remove('hidden');
  else modal.classList.add('hidden');
};
