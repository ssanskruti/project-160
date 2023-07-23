AFRAME.registerComponent("tour", {
    schema:{
      selectedCard:{type:"string",default:"#card1"},
      state:{type:"string",default:"places-list"}
    },
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "z",
          title: "Z",
          url: "assets/2.jpg",
        },

      ];
      let X= -25;
      for(var i of thumbNailsRef){
        const posX=X+25
        const posY=10
        const posZ=-45
        const position={x:posX,y:posY,z:posZ}
        X=posX
  
        const border=this.createBorder(position,i.id)
  
        const image=this.createImage(i)
        border.appendChild(image)
  
        const title=this.createTitle(position,i)
        border.appendChild(title)
  
        this.placesContainer.appendChild(border)
        
      } 
  
      
    },
    createBorder:function(pos,id){
      const entity=document.createElement("a-entity")
      entity.setAttribute("id",id)
      entity.setAttribute("visible",true)
      entity.setAttribute("position",pos)
      entity.setAttribute("geometry",{primitive:"ring",radiusInner:15,radiusOuter:16})
      entity.setAttribute("material",{color:"black",opacity:1})
      entity.setAttribute("cursor-listener",{})
      return entity
    },
    createImage:function(i){
      const entity=document.createElement("a-entity")
      entity.setAttribute("visible",true)
      entity.setAttribute("geometry",{primitive:"circle",radius:15})
      entity.setAttribute("material",{src:i.url})
      return entity
    },
    createTitle:function(pos,i){
      const entity=document.createElement("a-entity")
      entity.setAttribute("visible",true)
      const elPos=pos
      elPos.y=-20
      entity.setAttribute("position",elPos)
      entity.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"black",value:i.title})
      return entity
    },
  });
  