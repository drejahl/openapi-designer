export class Basefield {
  id = '';
  label = '';
  columns = 8;
  index = undefined;
  parent = undefined;

  init(id = '', {label = '', columns = 8, parent, index} = {}) {
    this.id = id;
    this.label = label;
    this.columns = columns;
    this.index = index;
    this.parent = parent;
    return this;
  }

  bind() {
    if (this.label.length === 0) {
      this.label = this.id.substr(0, 1).toUpperCase() + this.id.substr(1);
    }
  }

  delete() {
    if (this.parent && typeof this.index === 'number') {
      this.parent.deleteChild(this.index);
    }
  }

  getValue() {
    return undefined;
  }

  setValue(value) { }
}
