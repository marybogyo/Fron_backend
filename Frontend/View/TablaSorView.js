export default class TablaSorView{
    #obj={};
    constructor(index, obj, szElem){
        this.index = index;
        this.#obj= obj;
        this.szElem= szElem;
        //console.log(this.#obj);
        this.htmlOsszerak();
        //megfogjuk a törlés gombot
        this.torlesElem = this.szElem.find(".torles:last");
        /*console.log(this.torlesElem);*/
        this.torlesElem.on("click", ()=>{
          console.log("törlés");
          this.trigger("sorTorles");
    })
}

    htmlOsszerak() {
        let txt = "<tr>";
        for (const key in this.#obj) {
          txt += `<td>${this.#obj[key]}</td>`;
        }
        txt += `<td><button class="torles">X</button></td>`;
        txt += "</tr>";
        //console.log(txt);
        this.szElem.append(txt);
      }

    trigger(e){
        const esemenyem=new CustomEvent(e, {detail: this.#obj.kyra_id})
        window.dispatchEvent(esemenyem)
      }
}