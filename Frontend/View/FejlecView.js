export default class FejlecView{
    #obj={};
    constructor(obj, szElem){
        this.#obj=obj;
        this.szElem=szElem
        //console.log(this.#obj);
        this.htmlOssze();

    }

    htmlOssze(){
        let txt = "<tr>";
        for (const key in this.#obj) {
            txt += `<th>${this.#obj[key]}</th>`;
        }
        txt+="</tr>";
        //console.log(txt);
        this.szElem.append(txt);
    }
}