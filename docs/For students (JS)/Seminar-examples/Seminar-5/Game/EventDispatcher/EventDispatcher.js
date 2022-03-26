export default class EventDispatcher {
    /**
     * @param {String[]} events - list of available events.
     */
    constructor(...events) {
        /*
            events is an array,
            which receves any number of arguments

            examples:

                new EventDispatcher()
                    events = []
                
                new EventDispatcher("firstEvent")
                    events = ["firstEvent"]
            
                new EventDispatcher("firstEvent", "secondEvent")
                    events = ["firstEvent", "secondEvent"]
            
            Links:
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

                https://constantinerudenko.github.io/For%20students%20%28JS%29/JS%20tricks/#spread-syntax
        */
        this._eventListeners = {};
        for (const event of events) {
            this._eventListeners[event] = [];
        }
    }

    addEventListener(event, callback) {
        console.log(this._eventListeners);
        if (
            this._eventListeners[event].includes(callback)
        ) {
            throw "adding the same event handler twice!";
        }

        this._eventListeners[event].push(callback);
    }

    removeEventlistener(event, callback) {
        this._eventListeners[event] = this._eventListeners[event].filter(
            (item) => item != callback
        );
    }

    dispatch(event) {
        const listeners = this._eventListeners[event];

        for (const callback of listeners) {
            callback();
        }
    }
}