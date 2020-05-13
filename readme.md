## Functions

<dl>
<dt><a href="#blink">blink(numberOfBlink)</a> ⇒ <code>Promise</code></dt>
<dd><p>Make the dicees blink.</p>
</dd>
<dt><a href="#blinkById">blinkById(numberOfBlink, id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Make a specific dice blink.</p>
</dd>
<dt><a href="#cancelRollDiceesAutoDetect">cancelRollDiceesAutoDetect()</a> ⇒ <code>Promise</code></dt>
<dd><p>Send a message to the dice to stop trying to detect a reroll.</p>
</dd>
<dt><a href="#changeDiceesColor">changeDiceesColor(color, number, [skinNumber])</a> ⇒ <code>Promise</code></dt>
<dd><p>Change the color of all active leds on the dicees.</p>
</dd>
<dt><a href="#changeDiceesColorById">changeDiceesColorById(color, id, [skinNumber])</a> ⇒ <code>Promise</code></dt>
<dd><p>Change the color of all active leds on the dice(s) selected.</p>
</dd>
<dt><a href="#changeDiceesFaceColor">changeDiceesFaceColor(color, id, face, [skinNumber])</a> ⇒ <code>Promise</code></dt>
<dd><p>Change the color of all active leds of a specific face of a dice.</p>
</dd>
<dt><a href="#clearSkin">clearSkin(skinNumber)</a> ⇒ <code>Promise</code></dt>
<dd><p>Clear a specified skin for all dice.</p>
</dd>
<dt><a href="#clearSkinById">clearSkinById(skinNumber, id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Clear a specified skin of a specific dice.</p>
</dd>
<dt><a href="#displayClassicalDice">displayClassicalDice(color, id, [skinNumber])</a> ⇒ <code>Promise</code></dt>
<dd><p>Change the dice display to show a classical dice with the values from 1 to 6.</p>
</dd>
<dt><a href="#displaySkin">displaySkin(skinNumber)</a> ⇒ <code>Promise</code></dt>
<dd><p>Display a specified skin for all dicees.</p>
</dd>
<dt><a href="#displaySkinById">displaySkinById(skinNumber, id)</a> ⇒ <code>Promise</code></dt>
<dd><p>Display a specified skin for a specific dice.</p>
</dd>
<dt><a href="#getDiceesCount">getDiceesCount()</a> ⇒ <code>Promise.&lt;number&gt;</code></dt>
<dd><p>Return the number of dice connected to the app.</p>
</dd>
<dt><a href="#getFaceColors">getFaceColors(id, faceNumber, [skinNumber])</a> ⇒ <code>Promise.&lt;Array.&lt;Array.&lt;string&gt;&gt;&gt;</code></dt>
<dd><p>Get the colors of the 25 leds of a specific face.</p>
</dd>
<dt><a href="#getPlayers">getPlayers()</a> ⇒ <code>Promise.&lt;Array.&lt;{age: number, color: string, gender: string, id: number, name: string}&gt;&gt;</code></dt>
<dd><p>Get the players data from the app.</p>
</dd>
<dt><a href="#rollDicees">rollDicees(numberOfDice)</a> ⇒ <code>Promise.&lt;Array.&lt;number&gt;&gt;</code></dt>
<dd><p>Send a message to the dice for them to wait to be rolled.<br/>
Once they have been rolled they will send their value back.<br/>
In developpment mode, you can use your F2 key to simulate a throw.</p>
</dd>
<dt><a href="#rollDiceesByIds">rollDiceesByIds(diceIdArray)</a> ⇒ <code>Promise.&lt;Array.&lt;{id: number, value: number}&gt;&gt;</code></dt>
<dd><p>Send a message to the dice for them to wait to be rolled.<br/>
Once they have been rolled they will their value back.<br/>
You can choose specifically which dice to roll.<br/>
In developpment mode, you can use your F2 key to simulate a throw.</p>
</dd>
<dt><a href="#rollDiceesAutoDetect">rollDiceesAutoDetect()</a> ⇒ <code>Promise.&lt;Array.&lt;Number&gt;&gt;</code></dt>
<dd><p>Send a message to the dice to wait and see which one of them are picked up to be rolled.<br/>
After the roll the result of these dice is returned.<br/>
If the query is canceled, all the values returned will be -1<br/>
In developpment mode, you can use your A, Z, E, R and T key to simulate a pick-up.<br/>
In developpment mode, you can use your F2 key to simulate a throw.<br/>
If a dice has not been picked-up, it will not be thrown.<br/></p>
</dd>
<dt><a href="#setLedColor">setLedColor(color, id, face, column, line, [skinNumber])</a> ⇒ <code>Promise</code></dt>
<dd><p>Change the color of a specific LED of a specific dice.</p>
</dd>
</dl>

<a name="blink"></a>

## blink(numberOfBlink) ⇒ <code>Promise</code>
Make the dicees blink.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| numberOfBlink | <code>number</code> | number of time the dicees will blink (max 255) |

<a name="blinkById"></a>

## blinkById(numberOfBlink, id) ⇒ <code>Promise</code>
Make a specific dice blink.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| numberOfBlink | <code>number</code> | number of time the dicees will blink (max 255) |
| id | <code>number</code> | id of the dice you want to affect, starting from 0 |

<a name="cancelRollDiceesAutoDetect"></a>

## cancelRollDiceesAutoDetect() ⇒ <code>Promise</code>
Send a message to the dice to stop trying to detect a reroll.

**Kind**: global function
<a name="changeDiceesColor"></a>

## changeDiceesColor(color, number, [skinNumber]) ⇒ <code>Promise</code>
Change the color of all active leds on the dicees.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | hex color code of the color you want to apply (without '#') |
| number | <code>number</code> |  | number of dices that will be changed |
| [skinNumber] | <code>number</code> | <code>1</code> | id of the skin you want to affect, starting from 0 |

<a name="changeDiceesColorById"></a>

## changeDiceesColorById(color, id, [skinNumber]) ⇒ <code>Promise</code>
Change the color of all active leds on the dice(s) selected.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | hex color code of the color you want to apply (without '#') |
| id | <code>number</code> |  | id of the dice you want to modify, starting from 0 |
| [skinNumber] | <code>number</code> | <code>1</code> | id of the skin you want to affect, starting from 0 |

<a name="changeDiceesFaceColor"></a>

## changeDiceesFaceColor(color, id, face, [skinNumber]) ⇒ <code>Promise</code>
Change the color of all active leds of a specific face of a dice.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | hex color code of the color you want to apply (without '#') |
| id | <code>number</code> |  | id of the dice you want to modify, starting from 0 |
| face | <code>number</code> |  | face you want to change, it must be a number between 1 and 6 |
| [skinNumber] | <code>number</code> | <code>1</code> | id of the skin you want to affect, starting from 0 |

<a name="clearSkin"></a>

## clearSkin(skinNumber) ⇒ <code>Promise</code>
Clear a specified skin for all dice.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| skinNumber | <code>number</code> | id of the skin you want to display, starting from 0 |

<a name="clearSkinById"></a>

## clearSkinById(skinNumber, id) ⇒ <code>Promise</code>
Clear a specified skin of a specific dice.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| skinNumber | <code>number</code> | id of the skin you want to display, starting from 0 |
| id | <code>number</code> | id of the dice you want to modify, starting from 0 |

<a name="displayClassicalDice"></a>

## displayClassicalDice(color, id, [skinNumber]) ⇒ <code>Promise</code>
Change the dice display to show a classical dice with the values from 1 to 6.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | hex color code of the color you want to apply (without '#') |
| id | <code>number</code> |  | id of the dice you want to modify, starting from 0 |
| [skinNumber] | <code>number</code> | <code>1</code> | id of the skin you want to affect, starting from 0 |

<a name="displaySkin"></a>

## displaySkin(skinNumber) ⇒ <code>Promise</code>
Display a specified skin for all dicees.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| skinNumber | <code>number</code> | id of the skin you want to display, starting from 0 |

<a name="displaySkinById"></a>

## displaySkinById(skinNumber, id) ⇒ <code>Promise</code>
Display a specified skin for a specific dice.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| skinNumber | <code>number</code> | id of the skin you want to display, starting from 0 |
| id | <code>number</code> | id of the dice you want to modify, starting from 0 |

<a name="getDiceesCount"></a>

## getDiceesCount() ⇒ <code>Promise.&lt;number&gt;</code>
Return the number of dice connected to the app.

**Kind**: global function
**Returns**: <code>Promise.&lt;number&gt;</code> - Number of dice connected to the app.
<a name="getFaceColors"></a>

## getFaceColors(id, faceNumber, [skinNumber]) ⇒ <code>Promise.&lt;Array.&lt;Array.&lt;string&gt;&gt;&gt;</code>
Get the colors of the 25 leds of a specific face.

**Kind**: global function
**Returns**: <code>Promise.&lt;Array.&lt;Array.&lt;string&gt;&gt;&gt;</code> - You can access any color this way: array[line][column] (line and column between 0 and 4).

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | id of the dice you want to access, starting from 0 |
| faceNumber | <code>number</code> |  | face you want to access, it must be a number between 1 and 6 |
| [skinNumber] | <code>number</code> | <code>1</code> | id of the skin you want to get, starting from 0 |

<a name="getPlayers"></a>

## getPlayers() ⇒ <code>Promise.&lt;Array.&lt;{age: number, color: string, gender: string, id: number, name: string}&gt;&gt;</code>
Get the players data from the app.

**Kind**: global function
**Returns**: <code>Promise.&lt;Array.&lt;{age: number, color: string, gender: string, id: number, name: string}&gt;&gt;</code> - Array of Json, each Json stands for a player.
<a name="rollDicees"></a>

## rollDicees(numberOfDice) ⇒ <code>Promise.&lt;Array.&lt;number&gt;&gt;</code>
Send a message to the dice for them to wait to be rolled.<br/>
Once they have been rolled they will send their value back.<br/>
In developpment mode, you can use your F2 key to simulate a throw.

**Kind**: global function
**Returns**: <code>Promise.&lt;Array.&lt;number&gt;&gt;</code> - Values of the dice once they have been rolled (from 0 to 6, 0 meaning the dice is broken).

| Param | Type | Description |
| --- | --- | --- |
| numberOfDice | <code>number</code> | number of dice to roll |

<a name="rollDiceesByIds"></a>

## rollDiceesByIds(diceIdArray) ⇒ <code>Promise.&lt;Array.&lt;{id: number, value: number}&gt;&gt;</code>
Send a message to the dice for them to wait to be rolled.<br/>
Once they have been rolled they will their value back.<br/>
You can choose specifically which dice to roll.<br/>
In developpment mode, you can use your F2 key to simulate a throw.

**Kind**: global function
**Returns**: <code>Promise.&lt;Array.&lt;{id: number, value: number}&gt;&gt;</code> - Array of Json. Each Json stands Id is the id of the dice (starting from 0) and value is the result of the dice (0 to 6, 0 meaning the dice is broken).


| Param | Type | Description |
| --- | --- | --- |
| diceIdArray | <code>Array.&lt;number&gt;</code> | contains the ids of the dice you want to roll/reroll |

<a name="rollDiceesAutoDetect"></a>

## rollDiceesAutoDetect() ⇒ <code>Promise.&lt;Array.&lt;Number&gt;&gt;</code>
Send a message to the dice to wait and see which one of them are picked up to be rolled.<br/>
After the roll the result of these dice is returned.<br/>
If the query is canceled, all the values returned will be -1<br/>
In developpment mode, you can use your A, Z, E, R and T key to simulate a pick-up.<br/>
In developpment mode, you can use your F2 key to simulate a throw.<br/>
If a dice has not been picked-up, it will not be thrown.

**Kind**: global function
**Returns**: <code>Promise.&lt;Array.&lt;Number&gt;&gt;</code> - Values of the dice once they have been rolled from -1 to 6, 0 meaning the dice is broken, -1 meaning the dice has not been picked-up.
<a name="setLedColor"></a>

## setLedColor(color, id, face, column, line, [skinNumber]) ⇒ <code>Promise</code>
Change the color of a specific LED of a specific dice.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> |  | hex color code of the color you want to apply (without '#') |
| id | <code>number</code> |  | id of the dice you want to modify, starting from 0 |
| face | <code>number</code> |  | face you want to change, it must be a number between 1 and 6 |
| column | <code>number</code> |  | x coordoninates of the Led you want to change, starting from 0 |
| line | <code>number</code> |  | y coordoninates of the Led you want to change, starting from 0 |
| [skinNumber] | <code>number</code> | <code>1</code> | id of the skin you want to affect, starting from 0 |
