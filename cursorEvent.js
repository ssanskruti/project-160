AFRAME.registerComponent("cursor-listener",{
  schema:{
      selectedItemId:{default:"",type:"string"}
  },
  init:function(){
      this.handleMouseEnterEvent()
      this.handleMouseLeaveEvent()
      this.handleClickEvent()
  },
  handleClickEvent:function(){
      this.el.addEventListener("click",(e)=>{
          const placesContainer=document.querySelector("#places-container")
          const {state}=placesContainer.getAttribute("tour")
          if(state==="places-list"){
              const id=this.el.getAttribute("id")
              if(id==="z"){
                  placesContainer.setAttribute("tour",{
                      state:"view",
                      selectedCard:id
                  })
              }
          }
          if(state==="view"){
              this.handleViewState()
          }
          if(state==="change-view"){
              this.handleViewState1()
          }
      })
  },
  handleMouseEnterEvent:function(){
      this.el.addEventListener("mouseenter",()=>{
          const id=this.el.getAttribute("id")
          if(id==="z"){
              const placeContainer=document.querySelector("#places-container")
              placeContainer.setAttribute("cursor-listener",{selectedItemId:id})
              this.el.setAttribute("material",{color:"orange"})
          }
      })
  },
  handleMouseLeaveEvent:function(){
      this.el.addEventListener("mouseleave",()=>{
          if(this.data.selectedItemId){
              const el=document.querySelector(`#${this.data.selectedItemId}`)
              const id=el.getAttribute("id")
              if(id==this.data.selectedItemId){
                  el.setAttribute("material",{color:"black"})
              }
          }
      })
  },
  handleViewState:function(){
    const el=this.el
    const id=el.getAttribute("id")
    const placesContainer=document.querySelector("#places-container")
    placesContainer.setAttribute("tour",{state:"change-view"})
    placesContainer.setAttribute("visible",false)
    const sky=document.querySelector("#main-container")
    sky.setAttribute("material",{src:`./assets/2.jpg`,color:"white"})

},
handleViewState1:function(){
    const el=this.el
    const id=el.getAttribute("id")
    if(id==="z"){
        var x=3
    }
    else if(id==="places-container"){
        var x=4
    }
    else{
        var x=5
    }
    const placesContainer=document.querySelector("#places-container")
    placesContainer.setAttribute("tour",{state:"change-view"})
    placesContainer.setAttribute("visible",false)
    const sky=document.querySelector("#main-container")
    sky.setAttribute("material",{src:`./assets/${x}.jpg`,color:"white"})
    console.log(id)
},
})