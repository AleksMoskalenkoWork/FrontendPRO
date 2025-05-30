export default class TodoApi {
  constructor() {
    this.response;
    this.json;
  }

  async get() {
    this.response = await fetch('http://localhost:3000/list');
    this.json = await this.response.json();

    return this.json;
  }

  async post(req) {
    await fetch('http://localhost:3000/create/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
    });
  }

  async getById(id) {
    this.response = await fetch(`http://localhost:3000/todo/${id}`);
    this.json = await this.response.json();

    return this.json;
  }

  async put(id, body) {
    await fetch(`http://localhost:3000/update/todo/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  async delete(req) {
    debugger;
    await fetch(`http://localhost:3000/delete/todo/${req.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
    });
  }
}
