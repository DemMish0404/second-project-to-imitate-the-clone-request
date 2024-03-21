const emojiButtons = document.querySelectorAll('[data-selection]')
const lastColumn = document.querySelector('[data-lastColumn]');

const spanWithResultUser = document.querySelector('.you-block-with-score .result-score')
const spanWithResultComputer = document.querySelector('.computer-block-with-score .result-score')


const arrayWithInfoAboutTheGame = [
   {
      name: "rock",
      emoji: '✊',
      beats: 'scissors'
   },
   {
      name: "paper",
      emoji: '✋',
      beats: 'rock'
   },
   {
      name: "scissors",
      emoji: '✌',
      beats: 'paper'
   }
]

emojiButtons.forEach((selection, selectionIndex, deadCollection) => {
   selection.addEventListener('click', (event) => {
      const whatWasSelected = arrayWithInfoAboutTheGame.find(elementInArray => { if (elementInArray.name === selection.dataset.selection) { return true } })

      whatWhasChoosenByComputer = arrayWithInfoAboutTheGame[getRandomIndex()]

      const ifUserWinner = ifWinner(whatWasSelected, whatWhasChoosenByComputer)
      const ifComputerWinner = ifWinner(whatWhasChoosenByComputer, whatWasSelected)

      console.log(ifUserWinner, ifComputerWinner)

      addResults(whatWhasChoosenByComputer, ifComputerWinner)
      addResults(whatWasSelected, ifUserWinner)

      addScore(ifUserWinner, spanWithResultUser)
      addScore(ifComputerWinner, spanWithResultComputer)
   })
})


function getRandomIndex() {
   return (Math.floor(Math.random() * arrayWithInfoAboutTheGame.length))
}

function ifWinner(selected, competitor) {
   if (selected.beats === competitor.name) {
      return true
   } else {
      return false
   }
}

function addResults(objectWithInfo, winnerOrNot) {
   let div = document.createElement('div')
   div.innerText = objectWithInfo.emoji
   div.classList.add('whatIsChoosen')

   if (winnerOrNot) {
      div.classList.add('winner')
   }

   lastColumn.after(div)
}


function addScore(winnerOrNot, elementWhereAdd) {
   if (winnerOrNot) {
      elementWhereAdd.innerText = parseInt(elementWhereAdd.innerText) + 1
   }
}