$(() => {
  $('#display').click(async () => {
    await Dicees.displaySkin(3);
  })
  $('#displayBis').click(async () => {
    await Dicees.displaySkin(1);
  })
  $('#changeColor').click(async () => {
    let number = await Dicees.getDiceesCount()
    for(let i=0; i<number; i++){
      await Dicees.displayClassicalDice('ff0000', i);
    }
  })
  $('#displayById').click(async () => {
    await Dicees.displaySkinById(3, 2);
  })
  $('#displayByIdBis').click(async () => {
    await Dicees.displaySkinById(1, 2);
  })
  $('#displayClassDice').click(async () => {
    await Dicees.displayClassicalDice('00ff00', 2, 3);
  })
  $('#clearSkin').click(async () => {
    await Dicees.clearSkin(1);
  })
  $('#clearSkinById').click(async () => {
    await Dicees.clearSkinById(3, 2);
  })
})
