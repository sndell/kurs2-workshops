const sumSection = document.getElementById('showSum');
const inputSection = document.getElementById('inputForm');

function calculate() {
  const friendAmount = document.getElementById('numberOfFriends').value;
  const sum = document.getElementById('sum').value;
  const tip = document.getElementById('tip').value;

  const amount =
    (parseInt(sum) + parseInt(sum) * (parseInt(tip) / 100)) /
    parseInt(friendAmount);

  console.log(amount);

  if (!isNaN(amount)) {
    document.getElementById('result').innerText = amount;
    sumSection.classList.remove('hide');
    inputSection.classList.add('hide');
  }
}
