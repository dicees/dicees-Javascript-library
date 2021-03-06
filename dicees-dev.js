(function (window){

  const JSVersion = '1.0.0';

  let diceesData;
  let facesInit = [
    {
      faceId : 0,
      color : [
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#0000ff", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"]
      ]
    },
    {
      faceId : 1,
      color : [
        ["#000000", "#000000", "#000000", "#000000", "#0000ff"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#0000ff", "#000000", "#000000", "#000000", "#000000"]
      ]
    },
    {
      faceId : 2,
      color : [
        ["#000000", "#000000", "#000000", "#000000", "#0000ff"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#0000ff", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#0000ff", "#000000", "#000000", "#000000", "#000000"]
      ]
    },
    {
      faceId : 3,
      color : [
        ["#0000ff", "#000000", "#000000", "#000000", "#0000ff"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#0000ff", "#000000", "#000000", "#000000", "#0000ff"]
      ]
    },
    {
      faceId : 4,
      color : [
        ["#0000ff", "#000000", "#000000", "#000000", "#0000ff"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#000000", "#000000", "#0000ff", "#000000", "#000000"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#0000ff", "#000000", "#000000", "#000000", "#0000ff"]
      ]
    },
    {
      faceId : 5,
      color : [
        ["#0000ff", "#000000", "#000000", "#000000", "#0000ff"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#0000ff", "#000000", "#000000", "#000000", "#0000ff"],
        ["#000000", "#000000", "#000000", "#000000", "#000000"],
        ["#0000ff", "#000000", "#000000", "#000000", "#0000ff"]
      ]
    }
  ];

  diceesData = {
    number : 5,
    data : []
  }

  for(let i=0; i<5; i++){
    diceesData.data[i] = {
      id: i,
      faceUp : 0,
      activeSkin: 1,
      state : 3,
      dXMode : 20,
      lifeCounter: 20,
      skins : new Map(),
      faces: copy(facesInit)
    }
  }

  let cancelAutoRoll = new Event('dicees-cancelAutoRoll');
  let cancelRollDicees = new Event('dicees-cancelRollDicees');
  let cancelPickUp = new Event('dicees-cancelPickUp');

  const fakePlayers = [
    {
      'name' : 'Susan',
      'age' : '20',
      'gender' : 'F'
    },
    {
      'name' : 'Joseph',
      'age' : '50',
      'gender' : 'M'
    },
    {
      'name' : 'Aaron',
      'age' : '48',
      'gender' : 'N'
    },
    {
      'name' : 'Tracy',
      'age' : '36',
      'gender' : 'F'
    },
    {
      'name' : 'George',
      'age' : '24',
      'gender' : 'M'
    },
    {
      'name' : 'Justin',
      'age' : '28',
      'gender' : 'N'
    },
    {
      'name' : 'Lynn',
      'age' : '34',
      'gender' : 'F'
    },
    {
      'name' : 'John',
      'age' : '32',
      'gender' : 'M'
    },
    {
      'name' : 'Lori',
      'age' : '37',
      'gender' : 'N'
    }
  ];

  let lifeCounterHandler = new Set();
  let lifeCounterFocus = null;

  function addLifeCounter(id){
    if(!lifeCounterHandler.has(id)){
      lifeCounterHandler.add(id);
    }
    updateLifeCounter();
  }

  function removeLifeCounter(id){
    if(lifeCounterHandler.has(id)){
      lifeCounterHandler.delete(id);
    }
    updateLifeCounter();
  }

  function setLifeCounter(event){
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    lifeCounterHandler.forEach((id) => {
      if(event.keyCode === 49 + id){
        lifeCounterFocus = id;
        console.log(`New Life-Counter focus: dice ${id}`);
        return;
      }
    })
    if(lifeCounterFocus !== null){
      let data = diceesData.data.slice();
      if(event.keyCode === 98){
        data[lifeCounterFocus].lifeCounter -= 10;
        if(data[lifeCounterFocus].lifeCounter < 0)
          data[lifeCounterFocus].lifeCounter = 0;
        console.log(`Dice ${lifeCounterFocus} life state: ${data[lifeCounterFocus].lifeCounter}`);
      }
      if(event.keyCode === 100){
        --data[lifeCounterFocus].lifeCounter;
        if(data[lifeCounterFocus].lifeCounter < 0)
          data[lifeCounterFocus].lifeCounter = 0;
        console.log(`Dice ${lifeCounterFocus} life state: ${data[lifeCounterFocus].lifeCounter}`);
      }
      if(event.keyCode === 102){
        ++data[lifeCounterFocus].lifeCounter;
        if(data[lifeCounterFocus].lifeCounter > 100)
          data[lifeCounterFocus].lifeCounter = 100;
        console.log(`Dice ${lifeCounterFocus} life state: ${data[lifeCounterFocus].lifeCounter}`);
      }
      if(event.keyCode === 104){
        data[lifeCounterFocus].lifeCounter += 10;
        if(data[lifeCounterFocus].lifeCounter > 100)
          data[lifeCounterFocus].lifeCounter = 100;
        console.log(`Dice ${lifeCounterFocus} life state: ${data[lifeCounterFocus].lifeCounter}`);
      }
      diceesData.data = data;
    }
  }

  function updateLifeCounter(){
    document.removeEventListener("keydown", setLifeCounter);
    if(lifeCounterHandler.size === 0){
      if(lifeCounterFocus !== null){
        console.log(`Dice ${lifeCounterFocus} no longer in life-counter mode, resetting focus!`);
      }
      lifeCounterFocus = null;
      return;
    }
    if(!lifeCounterHandler.has(lifeCounterFocus) && lifeCounterFocus !== null){
      console.log(`Dice ${lifeCounterFocus} no longer in life-counter mode, resetting focus!`);
      lifeCounterFocus = null;
    }
    document.addEventListener("keydown", setLifeCounter);
  }

  function copy(array){
    return JSON.parse(JSON.stringify(array));
  }

  function generateFace(number, color){
    switch(number){
      case 0:
        return [
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", color, "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"]
        ];
      case 1:
        return [
          ["#000000", "#000000", "#000000", "#000000", color],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          [color, "#000000", "#000000", "#000000", "#000000"]
        ];
      case 2:
        return [
          ["#000000", "#000000", "#000000", "#000000", color],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", color, "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          [color, "#000000", "#000000", "#000000", "#000000"]
        ];
      case 3:
        return [
          [color, "#000000", "#000000", "#000000", color],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          [color, "#000000", "#000000", "#000000", color]
        ];
      case 4:
        return [
          [color, "#000000", "#000000", "#000000", color],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          ["#000000", "#000000", color, "#000000", "#000000"],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          [color, "#000000", "#000000", "#000000", color]
        ];
      case 5:
        return [
          [color, "#000000", "#000000", "#000000", color],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          [color, "#000000", "#000000", "#000000", color],
          ["#000000", "#000000", "#000000", "#000000", "#000000"],
          [color, "#000000", "#000000", "#000000", color]
        ];
      default:
        return null;
    }
  }

  function generateEmptyFace(){
    let array = [];
    for(let i=0; i<5; i++){
      let innerArray = [];
      for(let j=0; j<5; j++){
        innerArray.push("#000000");
      }
      array.push(innerArray);
    }
    return array;
  }

  function generateEmptyDice(){
    let faces = [];
    for(let i=0; i<6; i++){
      let face = {
        faceId: i,
        color: generateEmptyFace()
      }
      faces.push(face);
    }
    return faces;
  }

  function getFakeDiceesData(){
    let dataCopy = {};
    let returnArray = Object.assign(dataCopy, diceesData);
    return returnArray;
  }

  function removeFromArray(array, elementToRemove){
    let isFound = false;
    for(let i=0; i<array.length; i++){
      if(array[i] === elementToRemove){
        isFound = true;
        break;
      }
    }
    if(isFound){
      let newArray = [];
      for(let i=0; i<array.length; i++){
        if(array[i] !== elementToRemove){
          newArray.push(array[i]);
        }
      }
      return newArray;
    }
    else{
      return array;
    }
  }

  function getRandom1ToMax(max){
    return (Math.floor(Math.random() * max) + 1);
  }

  function hslToHex(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function getFakePlayerJson(){
    let numberOfPlayer = getRandom1ToMax(9);
    while(numberOfPlayer === 1){
      numberOfPlayer = getRandom1ToMax(9);
    }
    let playerList = fakePlayers.slice();
    let numberLeftToPick = playerList.length;
    let playerData = [];
    let colorArray = [];
    let colorSpaceBetween = 360 / numberOfPlayer;
    for(let i=0; i<numberOfPlayer; i++){
      colorArray[i] = colorSpaceBetween*i;
    }
    for(let i=0; i<numberOfPlayer; i++){
      let currentPlayer = playerList[getRandom1ToMax(numberLeftToPick)-1];
      playerList = removeFromArray(playerList, currentPlayer);
      numberLeftToPick--;
      playerData[i] = {
        'id' : i.toString(),
        'name' : currentPlayer['name'],
        'age' : currentPlayer['age'],
        'gender' : currentPlayer['gender'],
        'color' : hslToHex(colorArray[i], 80, 50)
      }
    }
    return playerData;
  }

  function defineDicees(){
    let Dicees = {};

    //functions to add here !

    /**
     * Get the current version of the element you ask for.
     * @name askVersion
     * @method
     * @param {number} versionId id corresponding to the element you want the version
     * @returns {Promise<string>} string of the current version you asked for
     */
    Dicees.askVersion = function(versionId){
      if(versionId === 5){
        return new Promise(resolve => resolve(JSVersion));
      }
      else if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('askVersion', versionId);
      }
      else{
        return new Promise(resolve => resolve('Not available in simulation mode!'));
      }
    }

    /**
     * Make the dicees blink.
     * @name blink
     * @method
     * @param {number} numberOfBlink number of time the dicees will blink (max 255)
     * @returns {Promise}
     */
    Dicees.blink = function(numberOfBlink){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('blink', numberOfBlink);
      }
      else{
        console.log(`The dicees will now blink ${numberOfBlink} times`);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Make a specific dice blink.
     * @name blinkById
     * @method
     * @param {number} numberOfBlink number of time the dicees will blink (max 255)
     * @param {number} id id of the dice you want to affect, starting from 0
     * @returns {Promise}
     */

    Dicees.blinkById = function(numberOfBlink, id){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('blinkById', numberOfBlink, id);
      }
      else{
        console.log(`The dicees ${id} will now blink ${numberOfBlink} times`);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Send a message to the dice to stop waiting for a pick up.
     * @name cancelPickUp
     * @method
     * @returns {Promise}
     */
    Dicees.cancelPickUp = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('cancelPickUp');
      }
      else{
        document.dispatchEvent(cancelPickUp);
        console.log("Pick up cancelled!");
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Send a message to the dice to stop waiting for a roll.
     * @name cancelRollDicees
     * @method
     * @returns {Promise}
     */
    Dicees.cancelRollDicees = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('cancelRollDicees');
      }
      else{
        document.dispatchEvent(cancelRollDicees);
        console.log("Roll cancelled!");
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Send a message to the dice to stop trying to detect a reroll.
     * @name cancelRollDiceesAutoDetect
     * @method
     * @returns {Promise}
     */
    Dicees.cancelRollDiceesAutoDetect = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('cancelRollDiceesAutoDetect');
      }
      else{
        document.dispatchEvent(cancelAutoRoll);
        console.log("Auto-detection cancelled!");
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the color of all active leds on the dicees.
     * @name changeDiceesColor
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {number} number number of dices that will be changed
     * @param {number} [skinNumber=1] id of the skin you want to affect, starting from 0
     * @returns {Promise}
     */
    Dicees.changeDiceesColor = function(color, number, skinNumber = 1){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('changeDiceesColor', color, number, skinNumber);
      }
      else{
        color = '#' + color;
        let data = diceesData.data.slice();
        let newDiceesData = data.map(e => {
          if(e.activeSkin !== skinNumber){
            if(!e.skins.has(skinNumber)){
              e.skins.set(skinNumber, copy(facesInit));
            }
            let faces = e.skins.get(skinNumber).map(f => {
              let colorF = f.color.map(g => {
                g = g.map(h => {
                  if(h !== '#000000'){
                    h = color;
                  }
                  return h;
                })
                return g;
              })
              f.color = colorF;
              return f;
            })
            e.skins.set(skinNumber, faces);
          }
          else{
            let faces = e.faces.map(f => {
              let colorF = f.color.map(g => {
                g = g.map(h => {
                  if(h !== '#000000'){
                    h = color;
                  }
                  return h;
                })
                return g;
              })
              f.color = colorF;
              return f;
            })
            e.faces = faces;
          }
          return e;
        });
        diceesData.data = newDiceesData;
        console.log(diceesData);
        console.log(number + " dice(s) have been changed with the color: " + color + " (skin " + skinNumber + ")");
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the color of all active leds on the dice(s) selected.
     * @name changeDiceesColorById
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {number} id id of the dice you want to modify, starting from 0
     * @param {number} [skinNumber=1] id of the skin you want to affect, starting from 0
     * @returns {Promise}
     */
    Dicees.changeDiceesColorById = function(color, id, skinNumber = 1){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('changeDiceesColorById', color, id, skinNumber);
      }
      else{
        color = '#' + color;
        let data = diceesData.data.slice();

        if(data[id].activeSkin !== skinNumber){
          if(!data[id].skins.has(skinNumber)){
            data[id].skins.set(skinNumber, copy(facesInit));
          }
          let newData = data[id].skins.get(skinNumber).map(e => {
            let colorE = e.color.map(f => {
              f = f.map(g => {
                if(g !== "#000000"){
                  g = color;
                }
                return g;
              })
              return f;
            })
            e.color = colorE;
            return e;
          })
          data[id].skins.set(skinNumber, newData);
        }
        else{
          let newData = data[id].faces.map(e => {
            let colorE = e.color.map(f => {
              f = f.map(g => {
                if(g !== "#000000"){
                  g = color;
                }
                return g;
              })
              return f;
            })
            e.color = colorE;
            return e;
          })
          data[id].faces = newData;
        }

        diceesData.data = data;
        console.log("Dice " + id + " has been changed with the color: " + color + " (skin " + skinNumber + ")");
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the color of all active leds of a specific face of a dice.
     * @name changeDiceesFaceColor
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {number} id id of the dice you want to modify, starting from 0
     * @param {number} face face you want to change, it must be a number between 1 and 6
     * @param {number} [skinNumber=1] id of the skin you want to affect, starting from 0
     * @returns {Promise}
     */
    Dicees.changeDiceesFaceColor = function(color, id, face, skinNumber = 1){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('changeDiceesFaceColor', color, id, face, skinNumber);
      }
      else{
        color = '#' + color;
        let data = diceesData.data.slice();
        for(let i=0; i<data.length; i++){
          if(data[i].id === id){
            if(data[i].activeSkin !== skinNumber){
              if(!data[i].skins.has(skinNumber)){
                data[i].skins.set(skinNumber, copy(facesInit));
              }
              let newData = data[i].skins.get(skinNumber).map(e => {
                if((face-1) === e.faceId){
                  let colorE = e.color.map(f => {
                    f = f.map(g => {
                      if(g !== "#000000"){
                        g = color;
                      }
                      return g;
                    })
                    return f;
                  })
                  e.color = colorE;
                }
                return e;
              })
              data[i].skins.set(skinNumber, newData);
            }
            else{
              let newData = data[i].faces.map(e => {
                if((face-1) === e.faceId){
                  let colorE = e.color.map(f => {
                    f = f.map(g => {
                      if(g !== "#000000"){
                        g = color;
                      }
                      return g;
                    })
                    return f;
                  })
                  e.color = colorE;
                }
                return e;
              })
              data[i].faces = newData;
            }
            break;
          }
        }
        diceesData.data = data;
        console.log(`The ${face} face of the dice number ${id} has been changed with the color: ${color} (skin ${skinNumber})`);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Clear a specified skin for all dice.
     * @name clearSkin
     * @method
     * @param {number} skinNumber id of the skin you want to display, starting from 0
     * @returns {Promise}
     */
    Dicees.clearSkin = function(skinNumber){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('clearSkin', skinNumber);
      }
      else{
        let data = diceesData.data.slice();
        let newDiceesData = data.map(e => {
          if(e.activeSkin !== skinNumber){
            e.skins.set(skinNumber, generateEmptyDice());
          }
          else{
            e.faces = generateEmptyDice();
          }
          return e;
        });
        diceesData.data = newDiceesData;
        console.log("All dice have been cleared on skin " + skinNumber);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Clear a specified skin of a specific dice.
     * @name clearSkinById
     * @method
     * @param {number} skinNumber id of the skin you want to display, starting from 0
     * @param {number} id id of the dice you want to modify, starting from 0
     * @returns {Promise}
     */
    Dicees.clearSkinById = function(skinNumber, id){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('clearSkinById', skinNumber, id);
      }
      else{
        let data = diceesData.data.slice();
        if(data[id].activeSkin !== skinNumber){
          data[id].skins.set(skinNumber, generateEmptyDice());
        }
        else{
          data[id].faces = generateEmptyDice();
        }
        diceesData.data = data;
        console.log("Dice " + id + " has been cleared on skin " + skinNumber);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the dice display to show a classical dice with the values from 1 to 6.
     * @name displayClassicalDice
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {number} id id of the dice you want to modify, starting from 0
     * @param {number} [skinNumber=1] id of the skin you want to affect, starting from 0
     * @returns {Promise}
     */
    Dicees.displayClassicalDice = function(color, id, skinNumber = 1){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('displayClassicalDice', color, id, skinNumber);
      }
      else{
        color = '#' + color;
        let data = diceesData.data.slice();
        for(let i=0; i<data.length; i++){
          if(data[i].id === id){
            if(data[i].activeSkin !== skinNumber){
              if(!data[i].skins.has(skinNumber)){
                data[i].skins.set(skinNumber, copy(facesInit));
              }
              for(let j=0; j<data[i].skins.get(skinNumber).length; j++){
                let newFace = data[i].skins.get(skinNumber);
                newFace[j].color = generateFace(j, color);
                data[i].skins.set(skinNumber, newFace);
              }
            }
            else{
              for(let j=0; j<data[i].faces.length; j++){
                data[i].faces[j].color = generateFace(j, color);
              }
            }
            break;
          }
        }
        diceesData.data = data;
        console.log(diceesData);
        console.log(`Dice number ${id} now displays a classical dice. Its new color is : ${color} (skin ${skinNumber})`);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Display a specified skin for all dicees.
     * @name displaySkin
     * @method
     * @param {number} skinNumber id of the skin you want to display, starting from 0
     * @returns {Promise}
     */
    Dicees.displaySkin = function(skinNumber){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('displaySkin', skinNumber);
      }
      else{
        let data = diceesData.data.slice();
        for(let i=0; i<data.length; i++){
          if(data[i].activeSkin !== skinNumber){
            data[i].skins.set(data[i].activeSkin, copy(data[i].faces));
            if(data[i].skins.has(skinNumber)){
              data[i].faces = data[i].skins.get(skinNumber);
            }
            else{
              data[i].faces = copy(facesInit);
            }
            data[i].activeSkin = skinNumber;
            console.log(`Skin of dice ${i} has been updated to skin ${skinNumber}`);
          }
        }
        diceesData.data = data;
        console.log(data);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Display a specified skin for a specific dice.
     * @name displaySkinById
     * @method
     * @param {number} skinNumber id of the skin you want to display, starting from 0
     * @param {number} id id of the dice you want to modify, starting from 0
     * @returns {Promise}
     */
    Dicees.displaySkinById = function(skinNumber, id){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('displaySkinById', skinNumber, id);
      }
      else{
        let data = diceesData.data.slice();
        if(data[id].activeSkin !== skinNumber){
          data[id].skins.set(data[id].activeSkin, copy(data[id].faces));
          if(data[id].skins.has(skinNumber)){
            data[id].faces = data[id].skins.get(skinNumber);
          }
          else{
            data[id].faces = copy(facesInit);
          }
          data[id].activeSkin = skinNumber;
          console.log(`Skin of dice ${id} has been updated to skin ${skinNumber}`);
        }
        diceesData.data = data;
        console.log(data);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Return the number of dice connected to the app.
     * @name getDiceesCount
     * @method
     * @returns {Promise<number>} Number of dice connected to the app.
     */
    Dicees.getDiceesCount = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('getDiceesCount');
      }
      else{
        return new Promise(resolve => resolve(getFakeDiceesData().number));
      }
    }

    /**
     * Get the colors of the 25 leds of a specific face.
     * @name getFaceColors
     * @method
     * @param {number} id id of the dice you want to access, starting from 0
     * @param {number} faceNumber face you want to access, it must be a number between 1 and 6
     * @param {number} [skinNumber=1] id of the skin you want to get, starting from 0
     * @returns {Promise<Array<Array<string>>>} You can access any color this way: array[line][column] (line and column between 0 and 4).
     */
    Dicees.getFaceColors = function(id, faceNumber, skinNumber = 1){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('getFaceColors', id, faceNumber, skinNumber);
      }
      else{
        let data = diceesData.data.slice();
        if(data[id].activeSkin !== skinNumber){
          if(!data[id].skins.has(skinNumber)){
            data[id].skins.set(skinNumber, copy(facesInit));
          }
          let array = data[id].skins.get(skinNumber)[faceNumber-1].color;
          return new Promise(resolve => resolve(array));
        }
        else{
          let array = data[id].faces[faceNumber-1].color;
          return new Promise(resolve => resolve(array));
        }
      }
    }

    /**
     * Get the players data from the app.
     * @name getPlayers
     * @method
     * @returns {Promise<Array<{age: number, color: string, gender: string, id: number, name: string}>>} Array of Json, each Json stands for a player.
     */
    Dicees.getPlayers = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('players');
      }
      else{
        return new Promise(resolve => resolve(getFakePlayerJson()));
      }
    }

    /**
     * Send a message to all dice for them to wait to be picked up.<br/>
     * Once they have been rolled they will send their value back.<br/>
     * In developpment mode, you can use your F3 key to simulate a gereral pick up.
     * @name pickUp
     * @method
     * @returns {Promise<boolean>} Returns true when the dice have been picked up.<br/>
     * Will return false if the pick up query has been cancelled.
     */
    Dicees.pickUp = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('pickUp');
      }
      else{
        return new Promise(resolve => {
          document.addEventListener("keydown", _pickUpEvent);
          document.addEventListener("dicees-cancelPickUp", _cancelPickUp);
          function _cancelPickUp(){
            document.removeEventListener("keydown", _pickUpEvent);
            document.removeEventListener("dicees-cancelPickUp", _cancelPickUp);
            resolve(false);
          }
          function _pickUpEvent(event){
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode === 114){
              document.removeEventListener("keydown", _pickUpEvent);
              document.removeEventListener("dicees-cancelPickUp", _cancelPickUp);
              resolve(true);
              console.log('All dice have been picked up!');
            }
          }
        });
      }
    }

    /**
     * Send a message to specific dice for them to wait to be picked up.<br/>
     * Once they have been rolled they will send their value back.<br/>
     * In developpment mode, you can use your F3 key to simulate a gereral pick up.
     * @name pickUpByIds
     * @method
     * @param {Array<number>} diceIdArray contains the ids of the dice you want to pick up
     * @returns {Promise<boolean>} Returns true when the dice have been picked up.<br/>
     * Will return false if the pick up query has been cancelled.
     */
    Dicees.pickUpByIds = function(diceIdArray){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('pickUpByIds', diceIdArray);
      }
      else{
        return new Promise(resolve => {
          document.addEventListener("keydown", _pickUpEvent);
          document.addEventListener("dicees-cancelPickUp", _cancelPickUpById);
          function _cancelPickUpById(){
            document.removeEventListener("keydown", _pickUpEvent);
            document.removeEventListener("dicees-cancelPickUp", _cancelPickUpById);
            resolve(false);
          }
          function _pickUpEvent(event){
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode === 114){
              document.removeEventListener("keydown", _pickUpEvent);
              document.removeEventListener("dicees-cancelPickUp", _cancelPickUpById);
              resolve(true);
              for(let i=0; i<diceIdArray.length; i++){
                console.log(`Dice ${diceIdArray[i]} has been picked up!`);
              }
            }
          }
        });
      }
    }

    /**
     * Send a message to all dice for them to wait to be rolled.<br/>
     * Once they have been rolled they will send their value back.<br/>
     * In developpment mode, you can use your F2 key to simulate a throw.
     * @name rollDicees
     * @method
     * @returns {Promise<Array<number>>} Values of the dice once they have been rolled (from 0 to 6, 0 meaning the dice is broken).<br/>
     * If the array returned is full of -1, it means that the roll query has been cancelled.
     */
    Dicees.rollDicees = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('rollDicees');
      }
      else{
        return new Promise(resolve => {
          document.addEventListener("keydown", _launchDicees);
          document.addEventListener("dicees-cancelRollDicees", _cancelRoll);
          function _cancelRoll(){
            document.removeEventListener("keydown", _launchDicees);
            document.removeEventListener("dicees-cancelRollDicees", _cancelRoll);
            let diceesResult = [];
            let data = diceesData.data.slice();
            for(let i=0; i<data.length; i++){
              diceesResult[i] = -1;
            }
            resolve(diceesResult);
          }
          function _launchDicees(event){
            let diceesResult = [];
            let data = diceesData.data.slice();
            for(let i=0; i<data.length; i++){
              diceesResult[i] = data[i].state === 4 ? getRandom1ToMax(diceesData.data[i].dXMode) : getRandom1ToMax(6);
            }
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode === 113){
              document.removeEventListener("keydown", _launchDicees);
              document.removeEventListener("dicees-cancelRollDicees", _cancelRoll);
              resolve(diceesResult);
              let newData = data.map((e, i) => {
                e.faceUp = diceesResult[i];
                return e;
              })
              diceesData.data = newData;
              console.log(diceesData);
            }
          }
        });
      }
    }

    /**
     * Send a message to specific dice for them to wait to be rolled.<br/>
     * Once they have been rolled they will their value back.<br/>
     * You can choose specifically which dice to roll.<br/>
     * In developpment mode, you can use your F2 key to simulate a throw.
     * @name rollDiceesByIds
     * @method
     * @param {Array<number>} diceIdArray contains the ids of the dice you want to roll/reroll
     * @returns {Promise<Array<{id: number, value: number}>>} Array of Json. Each Json stands for a dice.<br/>
     * Id is the id of the dice (starting from 0) and value is the result of the dice (0 to 6, 0 meaning the dice is broken).<br/>
     * If all values are equal to -1, it means that the roll query has been cancelled.
     */
    Dicees.rollDiceesByIds = function(diceIdArray){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('rollDiceesById', diceIdArray);
      }
      else{
        return new Promise(resolve => {
          document.addEventListener("keydown", _launchDiceesById);
          document.addEventListener("dicees-cancelRollDicees", _cancelRollById);
          function _cancelRollById(){
            document.removeEventListener("keydown", _launchDiceesById);
            document.removeEventListener("dicees-cancelRollDicees", _cancelRollById);
            let diceesResult = [];
            for(let i=0; i<diceIdArray.length; i++){
                diceesResult[i] = {
                  id : diceIdArray[i],
                  value : -1
                };
            }
            resolve(diceesResult);
          }
          function _launchDiceesById(event){
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode === 113){
              document.removeEventListener("dicees-cancelRollDicees", _cancelRollById);
              document.removeEventListener("keydown", _launchDiceesById);
              let diceesResult = [];
              let data = diceesData.data.slice();
              for(let i=0; i<diceIdArray.length; i++){
                  diceesResult[i] = {
                    id : diceIdArray[i],
                    value : data[diceIdArray[i]].state === 4 ? getRandom1ToMax(data[diceIdArray[i]].dXMode) : getRandom1ToMax(6)
                  };
              }
              resolve(diceesResult);
              let newData = data.map((e, i) => {
                if(diceIdArray.includes(e.id)){
                  for(let j=0; j<diceesResult.length; j++){
                    if(diceesResult[j].id === e.id){
                      e.faceUp = diceesResult[j].value;
                    }
                  }
                }
                return e;
              })
              diceesData.data = newData;
              console.log(diceesData);
            }
          }
        });
      }
    }

    /**
     * Send a message to the dice to wait and see which one of them are picked up to be rolled.<br/>
     * After the roll the result of these dice is returned.<br/>
     * If the query is canceled, all the values returned will be -1.<br/>
     * In developpment mode, you can use your 1, 2, 3, 4 and 5 digit key to simulate a pick up.<br/>
     * In developpment mode, you can use your F2 key to simulate a throw.<br/>
     * If a dice has not been picked-up, it will not be thrown.
     * @name rollDiceesAutoDetect
     * @method
     * @returns {Promise<Array<Number>>} Values of the dice once they have been rolled from -1 to 6, 0 meaning the dice is broken, -1 meaning the dice has not been picked-up.<br/>
     * If the array returned is full of -1, it means that the roll query has been cancelled.
     */
    Dicees.rollDiceesAutoDetect = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('rollDiceesAutoDetect');
      }
      else{
        return new Promise((resolve, reject) => {
          let dicesId = [];
          console.log('Event Listener added');
          document.addEventListener("keydown", _rollAutoDice);
          document.addEventListener('dicees-cancelAutoRoll', _cancelAutoDetect);
          function _cancelAutoDetect(){
            document.removeEventListener('dicees-cancelAutoRoll', _cancelAutoDetect);
            document.removeEventListener('keydown', _rollAutoDice);
            resolve([-1, -1, -1, -1, -1]);
          }
          function _rollAutoDice(event){
            event.preventDefault();
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode > 48 && event.keyCode < 54){
              if(!dicesId.includes(event.keyCode-49)){
                dicesId.push(event.keyCode-49);
                console.log(`${event.keyCode-49} picked!`)
              }
            }
            if(event.keyCode === 113){
              document.removeEventListener('dicees-cancelAutoRoll', _cancelAutoDetect);
              document.removeEventListener('keydown', _rollAutoDice);
              let diceesResult = [];
              let data = diceesData.data.slice();
              for(let i=0; i<diceesData.number; i++){
                diceesResult[i] = dicesId.includes(i) ? (data[i].state === 4 ? getRandom1ToMax(data[i].dXMode) : getRandom1ToMax(6)) : -1;
              }
              resolve(diceesResult);
              console.log(diceesResult);
              let newData = data.map((e, i) => {
                if(dicesId.includes(e.id)){
                  e.faceUp = diceesResult[i];
                }
                return e;
              })
              diceesData.data = newData;
              console.log(diceesData);
            }
          }
        })
      }
    }

    /**
     * Send a message to the dice to wait and see which one of them are picked up to be rolled.<br/>
     * After the roll the result of these dice is returned.<br/>
     * If the query is canceled, all the values returned will be -1.<br/>
     * In developpment mode, you can use your 1, 2, 3, 4 and 5 digit key to simulate a pick up.<br/>
     * In developpment mode, you can use your F2 key to simulate a throw.<br/>
     * If a dice has not been picked-up, it will not be thrown.
     * @name rollDiceesAutoDetectByIds
     * @method
     * @param {Array<number>} diceIdArray contains the ids of the dice you want to detect if they are thown or not
     * @returns {Promise<Array<{id: number, value: number}>>} Array of Json. Each Json stands for a dice.<br/>
     * Id is the id of the dice (starting from 0) and value is the result of the dice (-1 to 6, 0 meaning the dice is broken and -1 meaning the dice has not been thrown).<br/>
     * If all values are equal to -1, it means that the roll query has been cancelled.
     */
    Dicees.rollDiceesAutoDetectByIds = function(diceIdArray){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('rollDiceesAutoDetectByIds', diceIdArray);
      }
      else{
        return new Promise((resolve, reject) => {
          let dicesId = [];
          console.log('Event Listener added');
          document.addEventListener("keydown", _rollAutoDiceById);
          document.addEventListener('dicees-cancelAutoRoll', _cancelAutoDetectById);
          function _cancelAutoDetectById(){
            document.removeEventListener('dicees-cancelAutoRoll', _cancelAutoDetectById);
            document.removeEventListener('keydown', _cancelAutoDetectById);
            let diceesResults = [];
            for(let i=0; i<diceIdArray.length; i++){
              diceesResults[i] = {
                id: diceIdArray[i],
                value: -1
              }
            }
            resolve(diceesResults);
          }
          function _rollAutoDiceById(event){
            event.preventDefault();
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode > 48 && event.keyCode < 54){
              if(!dicesId.includes(event.keyCode-49) && diceIdArray.includes(event.keyCode-49)){
                dicesId.push(event.keyCode-49);
                console.log(`${event.keyCode-49} picked!`)
              }
            }
            if(event.keyCode === 113){
              document.removeEventListener('dicees-cancelAutoRoll', _cancelAutoDetectById);
              document.removeEventListener('keydown', _cancelAutoDetectById);
              let diceesResult = [];
              let data = diceesData.data.slice();
              for(let i=0; i<diceIdArray.length; i++){
                if(dicesId.includes(diceIdArray[i])){
                  diceesResult.push({
                    id : diceIdArray[i],
                    value : data[diceIdArray[i]].state === 4 ? getRandom1ToMax(data[diceIdArray[i]].dXMode) : getRandom1ToMax(6)
                  });
                  data[diceIdArray[i]].faceUp = diceesResult[diceesResult.length-1].value;
                }
              }
              resolve(diceesResult);
              console.log(diceesResult);
              diceesData.data = data;
              console.log(diceesData);
            }
          }
        })
      }
    }

    /**
     * Change the color of a specific LED of a specific dice.
     * @name setLedColor
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {number} id id of the dice you want to modify, starting from 0
     * @param {number} face face you want to change, it must be a number between 1 and 6
     * @param {number} column x coordoninates of the Led you want to change, starting from 0
     * @param {number} line y coordoninates of the Led you want to change, starting from 0
     * @param {number} [skinNumber=1] id of the skin you want to affect, starting from 0
     * @returns {Promise}
     */
    Dicees.setLedColor = function(color, id, face, column, line, skinNumber = 1){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('setLedColor', color, id, column, line, face, skinNumber);
      }
      else{
        color = '#' + color;
        let data = diceesData.data.slice();
        if(data[id].activeSkin !== skinNumber){
          if(!data[id].skins.has(skinNumber)){
            data[id].skins.set(skinNumber, copy(facesInit));
          }
          let newFace = data[id].skins.get(skinNumber);
          newFace.color[line][column] = color;
          data[id].skins.set(skinNumber, newFace);
          diceesData.data = data;
          return new Promise(resolve => resolve(0));
        }
        else{
          data[id].faces[face-1].color[line][column] = color;
          diceesData.data = data;
          return new Promise(resolve => resolve(0));
        }
      }
    }

    /**
     * In simulation mode: change the number of fake Dicees available (by default 5).<br>
     * In production: will just warn the user if he is using the app with the wrong number of Dicees.
     * @name setRecommendedNumberOfDicees
     * @method
     * @param {number} number number of Dicees you need for your application
     * @returns {Promise}
     */
    Dicees.setRecommendedNumberOfDicees = function(number){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        let promise = window.flutter_inappwebview.callHandler('getDiceesCount');
        promise.then((diceNumber) => {
          if(diceNumber !== number){
            alert(`Be careful ! You need ${number} Dicees to use this app. If you use it with the wrong number of Dicees, some functionalities might not be available.`);
          }
        })
        return new Promise(resolve => resolve(0));
      }
      else{
        diceesData.number = number;
        let data = diceesData.data.slice();
        if(number > data.length){
          for(let i=data.length; i<number; i++){
            data[i] = {
              id: i,
              faceUp : 0,
              activeSkin: 1,
              state : 3,
              dXMode : 20,
              lifeCounter: 20,
              skins : new Map(),
              faces: copy(facesInit)
            }
          }
        }
        else if(number < data.length){
          let originalNumber = data.length;
          for(let i=number; i<originalNumber; i++){
            data = removeFromArray(data, data[number]);
          }
        }
        diceesData.data = data;
        console.log(`New total of Dicees: ${number}`);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the mode of all dice.
     * @name switchMode
     * @method
     * @param {number} modeId id of the new mode you want to set
     * @param {number} [initLifeOrNumberOfFace=20] initial count for Life Counter mode or number of face for Dn mode
     * @returns {Promise}
     */
    Dicees.switchMode = function(modeId, initLifeOrNumberOfFace = 20){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('switchMode', modeId, initLifeOrNumberOfFace);
      }
      else{
        let data = diceesData.data.slice();
        let newDiceesData = data.map((e, i) => {
          data[i].state = modeId;
          if(modeId === 4){
            e.dXMode = initLifeOrNumberOfFace;
            removeLifeCounter(i);
          }
          else if(modeId === 5){
            e.lifeCounter = initLifeOrNumberOfFace;
            addLifeCounter(i);
          }
          else{
            removeLifeCounter(i);
          }
          console.log(`Dice ${i}: mode changed to ${modeId}`);
          return e;
        })
        diceesData.data = newDiceesData;
      }
    }

    /**
     * Change the mode of a specific dice.
     * @name switchModeById
     * @method
     * @param {number} modeId id of the new mode you want to set
     * @param {number} id id of the dice you want to modify, starting from 0
     * @param {number} [initLifeOrNumberOfFace=20] initial count for Life Counter mode or number of face for Dn mode
     * @returns {Promise}
     */
    Dicees.switchModeById = function(modeId, id, initLifeOrNumberOfFace = 20){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('switchModeById', modeId, id, initLifeOrNumberOfFace);
      }
      else{
        let data = diceesData.data.slice();
        data[id].state = modeId;
        if(modeId === 4){
          data[id].dXMode = initLifeOrNumberOfFace;
          removeLifeCounter(id);
        }
        else if(modeId === 5){
          data[id].lifeCounter = initLifeOrNumberOfFace;
          addLifeCounter(id);
        }
        else{
          removeLifeCounter(id);
        }
        diceesData.data = data;
        console.log(`Dice ${id}: mode changed to ${modeId}`);
      }
    }
    return Dicees;
  }

  if(typeof(window.Dicees) === 'undefined'){
    window.Dicees = defineDicees();
  }

})(window);
