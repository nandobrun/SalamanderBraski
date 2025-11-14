Zustandsbasierte Testfälle

Negativtest unerlaubter Spielzug

Vorbedingung:

Das Spiel steht in einem Normalen Startzustand. Spieler 1 besitzt gültige  Züge an folgenden Positionen:
[2,3], [3,2], [4,5] und [5,4].
Alle anderen Felder gelten als ungültig.

Ereignis:

Spieler 1 versucht, einen Stein auf Position [0,1] zu setzen.
Dieser Zug ist ungültig.

Sollreaktion:

Die Methode Board.play bricht den Vorgang ab und wirft eine RangeError-Exception

Nachbedingung:

Der Spielzustand bleibt exakt erhalten.
Es wird kein Stein gesetzt, keine Farbe geändert und keine Spielreihenfolge geändert.

Positivtest erlaubter Spielzug
Vorbedingung:

Das Brett befindet sich im Startzustand.
Spieler 1 kann gültige Züge an folgenden Positionen machen:
[2,3], [3,2], [4,5], [5,4]

Ereignis:

Spieler 1 führt einen Stein auf Position [3,2] aus.

Sollreaktion:

Board.play erzeugt ein neues Board-Objekt, in dem der gesetzte Stein auf [3,2] platziert ist,
und die gegnerischen Steine auf der Linie zwischen [3,2] und [3,3] korrekt auf die Farbe von Spieler 1 gedreht werden.

Nachbedingung:

Das neue Brett spiegelt den aktualisierten Zustand wider:

der neue Stein ist gesetzt

die betroffenen Steine sind umgedreht

die Spielreihenfolge ist korrekt fortgesetzt

Der frische Zustand wird als neues Board-Objekt gespeichert und ersetzt den alten.