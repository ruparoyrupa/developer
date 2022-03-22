

class Storage{

    /**
     * Cheak Localstorage Data 
     * @param {*} key 
     * @returns 
     */

    static has(key){
       return localStorage.getItem(key) ? localStorage.getItem(key) : false ;
    }


    /**
     * Get Localstorage Data
     * @param {*} key 
     */


    static get(key){

        if (this.has(key)) {
            return JSON.parse(this.has(key))
        }

    }

    /**
     * Set Localstorage Data
     * @param {*} key 
     * @param {*} data 
     */

    static set(key , data){

        let set_data =[];
     
        if (this.has(key)) {
            set_data = JSON.parse(this.has(key)) 
        }

        set_data.push(data);

        localStorage.setItem(key , JSON.stringify(set_data))

    }
}

export default Storage ;