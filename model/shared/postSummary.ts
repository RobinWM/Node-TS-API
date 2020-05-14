export default class PostSummary {
  userId: number;
  title: string;
  id: number;
  body: string;

  constructor(data: any) {
    this.body = data.body;
    this.id = data.id;
    this.title = data.title;
    this.userId = data.userId;
  }
}
