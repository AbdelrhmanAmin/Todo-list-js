export default class Group {
  constructor(title, description, todos) {
    this.title = String(title);
    this.description = String(description);
    this.todos = todos;
  }

  add() {
    let arr;
    if (JSON.parse(localStorage.getItem('groups')) === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem('groups'));
    }
    arr.push(this.create());
    localStorage.setItem('groups', JSON.stringify(arr));
  }

  create() {
    const { title, description, todos } = this;
    return {
      title,
      description,
      todos,
    };
  }
}
