
class Player {
    constructor(name,position){
        this.name = name;
        this.position = position;
    }
    describe(){
        return `${this.name} plays ${this.position}`;
    }
}

class Team {
    constructor (name){
        this.name = name;
        this.players = [];
    }
    addPlayer(player){
        if(player instanceof Player){
            this.players.push(player);
        }else {
        throw new Error(`You can only add an instance of Player. Argument Invalid`);
        }
    }
    describe() {
        return `${this.name} has ${this.players.length} players.`
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }
    start(){
        let selection = this.showMainMenu();
        while(selection != 0){
        switch (selection){
            case '1':
                this.createTeam();
                break;
            case '2':
                this.viewTeam();
                break;
            case '3':
                this.deleteTeam();
                break;
            case '4':
                this.displayTeam();
                break;
            default:
                selection = 0;
            
        }
        selection = showMainMenu();
        }
        alert(`Goodbye`);
    }
    showMainMenu(){
    return prompt(`
    0) Exit
    1) Create an Item
    2) View Selected Item
    3) Delete an Item
    4) Show all Items
    `);
    }
    showTeamOptions(teamInfo){
        return prompt(`
    0) Back
    1) Create price
    2) Delete price
    ------------------
    `);
    }
    displayTeam(){
        let teamString = '';
        for(let i = 0; i<this.teams.length; i++){
        teamString += i + `) ` + this.teams[i].name + `\n`;
        }
        alert (teamString);
    }
    createTeam(){
        let name = prompt (`Enter name for new Item`);
        this.teams.push (new Team());
    }
    viewTeam(){
        let index = prompt (`Enter the index of the item you wish to view`);
        if (index > -1 && index < this.teams.length){
            this.selectedTeam = this.teams[index];
            let description = `Item name: `+ this.selectedTeam.name + `\n`;
        for(let i = 0; i< this.selectedTeam.players.length; i++){
            description += i + `) `+ this.selectedTeam.players[i].name + ` - `
             + this.selectedTeam.players.position + '\n';
            }
        let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case 1:
                    this.createPlayer();
                    break;
                case 2:
                    this.deletePlayer();
            
                    
            }
        }
        }

}
let menu = new Menu;
menu.start();

