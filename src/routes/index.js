import { Post } from '../controllers/posts.js';

async function load(req, res) {
  const post = new Post();
  post.data = {
    title: 'Teste',
    content: 'Conteúdo de teste'
  }
  await post.save();

  res.send('index');
}

export {
  load
}