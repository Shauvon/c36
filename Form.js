class Form{
    constructor(){

    }
    display(){
    var title = createElement('h2')
    title.html("Car Racing Game")
    title.position(200,0);
    var input = createInput("name");
    var button = createButton("play")
    var greeting = createElement("h3")
    input.position(200,160)
    button.position(250,200)
    }
}
