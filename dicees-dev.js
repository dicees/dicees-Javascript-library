(function (window){

  let diceesData;

  diceesData = {
    number : 5,
    data : []
  }

  for(let i=0; i<5; i++){
    diceesData.data[i] = {
      id: i,
      faceUp : 0,
      state :  'normal',
      faces: [
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
      ]
    }
  }

  let cancelAutoRoll = new Event('dicees-cancelAutoRoll');

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
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the color of all active leds on the dicees.
     * @name changeDiceesColor
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {number} number number of dices that will be changed
     * @returns {Promise}
     */
    Dicees.changeDiceesColor = function(color, number){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('changeDiceesColor', color, number);
      }
      else{
        let data = diceesData.data.slice();
        let newDiceesData = data.map(e => {
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
         return e;
        });
        diceesData.data = newDiceesData;
        console.log(diceesData);
        console.log(number + " dice(s) have been changed with the color: " + color);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the color of all active leds on the dice(s) selected.
     * @name changeDiceesColorById
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {Array<number>} diceIdArray ids of the dices you want to change the color
     * @returns {Promise}
     */
    Dicees.changeDiceesColorById = function(color, diceIdArray){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('changeDiceesColorById', color, diceIdArray);
      }
      else{
        let data = diceesData.data.slice();
        for(let i=0; i<data.length; i++){
          if(diceIdArray.includes(data[i].id)){
            let newData = data[i].faces.map(e => {
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
            data[i].faces = newData;
          }
        }
        diceesData.data = data;
        //
        let iDs = diceIdArray[0];
        for(let i=1; i<diceIdArray.length; i++){
          iDs += ` ${diceIdArray[i]}`;
        }
        console.log(diceIdArray.length + " dice(s) have been changed with the color: " + color);
        console.log("Dice changed : " + iDs);
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
     * @returns {Promise}
     */
    Dicees.changeDiceesFaceColor = function(color, id, face){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('changeDiceesFaceColor', color, id, face);
      }
      else{
        let data = diceesData.data.slice();
        for(let i=0; i<data.length; i++){
          if(data[i].id === id){
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
            break;
          }
        }
        diceesData.data = data;
        console.log(`The ${face} face of the dice number ${id} has been changed with the color: ${color}`);
        return new Promise(resolve => resolve(0));
      }
    }

    /**
     * Change the dice display to show a classical dice with the values from 1 to 6.
     * @name displayClassicalDice
     * @method
     * @param {string} color hex color code of the color you want to apply (without '#')
     * @param {number} id id of the dice you want to modify, starting from 0
     * @returns {Promise}
     */
    Dicees.displayClassicalDice = function(color, id){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('displayClassicalDice', color, id);
      }
      else{
        let data = diceesData.data.slice();
        for(let i=0; i<data.length; i++){
          if(data[i].id === id){
            for(let j=0; j<data[i].faces.length; j++){
              data[i].faces[j].color = generateFace(j, color);
            }
            break;
          }
        }
        diceesData.data = data;
        console.log(diceesData);
        console.log(`Dice number ${id} now displays a classical dice. Its new color is : ${color}`);
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
     * @returns {Promise<Array<Array<string>>>} You can access any color this way: array[line][column] (line and column between 0 and 4).
     */
    Dicees.getFaceColors = function(id, faceNumber){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('getFaceColors', id, faceNumber);
      }
      else{
        let data = diceesData.data.slice();
        let array = data[id].faces[faceNumber-1].color;
        return new Promise(resolve => resolve(array));
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
     * Send a message to the dice for them to wait to be rolled.<br/>
     * Once they have been rolled they will send their value back.<br/>
     * In developpment mode, you can use your F2 key to simulate a throw.
     * @name rollDicees
     * @method
     * @param {number} numberOfDice number of dice to roll
     * @returns {Promise<Array<number>>} Values of the dice once they have been rolled (from 0 to 6, 0 meaning the dice is broken).
     */
    Dicees.rollDicees = function(numberOfDice){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('rollDicees', numberOfDice);
      }
      else{
        return new Promise(resolve => {
          document.addEventListener("keydown", function launchDicees(event){
            let diceesResult = [];
            for(let i=0; i<numberOfDice; i++){
                diceesResult[i] = getRandom1ToMax(6);
            }
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode === 113){
              document.removeEventListener("keydown", launchDicees);
              resolve(diceesResult);
              let data = diceesData.data.slice();
              let newData = data.map((e, i) => {
                e.faceUp = diceesResult[i]-1;
                return e;
              })
              diceesData.data = newData;
              console.log(diceesData);
            }
          });
        });
      }
    }

    /**
     * Send a message to the dice for them to wait to be rolled.<br/>
     * Once they have been rolled they will their value back.<br/>
     * You can choose specifically which dice to roll.<br/>
     * In developpment mode, you can use your F2 key to simulate a throw.
     * @name rollDiceesById
     * @method
     * @param {Array<number>} diceIdArray contains the ids of the dice you want to roll/reroll
     * @returns {Promise<Array<{id: number, value: number}>>} Array of Json. Each Json stands for a dice.<br/>
     * Id is the id of the dice (starting from 0) and value is the result of the dice (0 to 6, 0 meaning the dice is broken).
     */
    Dicees.rollDiceesById = function(diceIdArray){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('rollDiceesById', diceIdArray);
      }
      else{
        let diceesResult = [];
        for(let i=0; i<diceIdArray.length; i++){
            diceesResult[i] = {
              id : diceIdArray[i],
              value : getRandom1ToMax(6)
            };
        }
        return new Promise(resolve => {
          document.addEventListener("keydown", event => {
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode === 113){
              document.removeEventListener("keydown", this);
              resolve(diceesResult);
              let data = diceesData.data.slice();
              let newData = data.map((e, i) => {
                if(diceIdArray.includes(e.id)){
                  for(let j=0; j<diceesResult.length; j++){
                    if(diceesResult[j].id === e.id){
                      e.faceUp = diceesResult[j].value-1;
                    }
                  }
                }
                return e;
              })
              diceesData.data = newData;
            }
          });
        });
      }
    }

    /**
     * Send a message to the dice to wait and see which one of them are picked up to be rolled.<br/>
     * After the roll the result of these dice is returned.<br/>
     * If the query is canceled, all the values returned will be -1<br/>
     * In developpment mode, you can use your A, Z, E, R and T key to simulate a pick-up.<br/>
     * In developpment mode, you can use your F2 key to simulate a throw.<br/>
     * If a dice has not been picked-up, it will not be thrown.<br/>
     * @name rollDiceesAutoDetect
     * @method
     * @returns {Promise<Array<Number>>} Values of the dice once they have been rolled from -1 to 6, 0 meaning the dice is broken, -1 meaning the dice has not been picked-up.
     */
    Dicees.rollDiceesAutoDetect = function(){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('rollDiceesAutoDetect');
      }
      else{
        return new Promise((resolve, reject) => {
          let dicesId = [];
          console.log('Event Listener added');
          document.addEventListener("keydown", rollAutoDice)
          document.addEventListener('dicees-cancelAutoRoll', function cancel(){
            document.removeEventListener('dicees-cancelAutoRoll', cancel);
            document.removeEventListener('keydown', rollAutoDice);
            resolve([-1, -1, -1, -1, -1]);
          });
          function rollAutoDice(event){
            if (event.isComposing || event.keyCode === 229) {
              return;
            }
            if(event.keyCode === 65 || event.keyCode === 90 || event.keyCode === 69 || event.keyCode === 82 || event.keyCode === 84 || event.keyCode === 113){
              if(event.keyCode === 65 && !dicesId.includes(0)){
                dicesId.push(0);
              }
              if(event.keyCode === 90 && !dicesId.includes(1)){
                dicesId.push(1);
              }
              if(event.keyCode === 69 && !dicesId.includes(2)){
                dicesId.push(2);
              }
              if(event.keyCode === 82 && !dicesId.includes(3)){
                dicesId.push(3);
              }
              if(event.keyCode === 84 && !dicesId.includes(4)){
                dicesId.push(4);
              }
              if(event.keyCode === 113){
                document.removeEventListener("keydown", rollAutoDice);
                let diceesResult = [];
                for(let i=0; i<diceesData.number; i++){
                  diceesResult[i] = dicesId.includes(i) ? getRandom1ToMax(6) : -1;
                }
                resolve(diceesResult);
                let data = diceesData.data.slice();
                let newData = data.map((e, i) => {
                  if(dicesId.includes(e.id)){
                    for(let j=0; j<diceesResult.length; j++){
                      if(diceesResult[j].id === e.id){
                        e.faceUp = diceesResult[j].value-1;
                      }
                    }
                  }
                  return e;
                })
                diceesData.data = newData;
                console.log(diceesData);
              }
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
     * @returns {Promise}
     */
    Dicees.setLedColor = function(color, id, face, column, line){
      if(window.flutter_inappwebview || window.flutter_inappwebview != null || typeof window.flutter_inappwebview !== "undefined"){
        return window.flutter_inappwebview.callHandler('setLedColor', color, id, column, line, face);
      }
      else{
        let data = diceesData.data.slice();
        data[id].faces[face-1].color[line][column] = color;
        diceesData.data = data;
        return new Promise(resolve => resolve(0));
      }
    }

    return Dicees;
  }

  if(typeof(window.Dicees) === 'undefined'){
    window.Dicees = defineDicees();
  }

})(window);
