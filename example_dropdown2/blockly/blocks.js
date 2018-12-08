// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Blockly.Blocks['dropdown'] = {
  init: function () {
    var this.d = new Blockly.FieldDropdown();
    this.Dropdown="A";
    this.listA = [["A1","A1"], ["A2","A2"]];
    this.listB = [["B1","B1"], ["B2","B2"]];
    this.appendDummyInput("a")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"]]), "Dropdown1");
    this.appendDummyInput("b")
        .appendField(new Blockly.FieldDropdown(this.listA), "Dropdown2");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    //this.updateShape_();
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('Dropdown', this.getFieldValue('Dropdown1'));
    return container;
  },
  domToMutation: function (xmlElement) {
    if (xmlElement.getAttribute('Dropdown'))
      this.Dropdown = xmlElement.getAttribute('Dropdown');
    this.updateShape_();
  },
  onchange: function (event) {
    console.log(event.element);
    if (event.element=="selected") {
      this.Dropdown = this.getFieldValue('Dropdown1');
      this.updateShape_();
    }
  },
  updateShape_: function() {  
    if (this.getInput('b')) this.removeInput('b');
    this.appendDummyInput("b");
    if (this.Dropdown=="A") 
      this.getInput('b').appendField(this.d, "Dropdown2");
    else if (this.Dropdown=="B")
      this.getInput('b').appendField(this.d, "Dropdown2");
  }
};
