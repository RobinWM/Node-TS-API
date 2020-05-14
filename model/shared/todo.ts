export default class Todo {
  postId: number;
  todoTitle: string;
  todoText: string;
  star: number;

  constructor(data: any) {
    this.postId = data.postId;
    this.todoText = data.todoText;
    this.todoTitle = data.todoTitle;
    this.star = data.star;
  }
}
